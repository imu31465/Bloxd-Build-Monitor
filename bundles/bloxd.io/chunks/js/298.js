export const id = 298;
export const ids = [298];
export const modules = {
  41532: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ze,
      g: () => he,
      i: () => Me,
      j: () => jt,
      k: () => Le,
      o: () => Ht,
      r: () => Ee
    });
    var Ot = Vt(41540),
      qt = Vt(41548),
      Dt = Vt(41565);
    class mt {
      constructor(tt, et, Vt, Ot) {
        this.state = tt, this.pos = et, this.explicit = Vt, this.view = Ot, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(tt) {
        let et = (0, Dt.jb)(this.state).resolveInner(this.pos, -1);
        for (; et && tt.indexOf(et.name) < 0;) et = et.parent;
        return et ? {
          from: et.from,
          to: this.pos,
          text: this.state.sliceDoc(et.from, this.pos),
          type: et.type
        } : null
      }
      matchBefore(tt) {
        let et = this.state.doc.lineAt(this.pos),
          Vt = Math.max(et.from, this.pos - 250),
          Ot = et.text.slice(Vt - et.from, this.pos - et.from),
          qt = Ot.search(lt(tt, !1));
        return qt < 0 ? null : {
          from: Vt + qt,
          to: this.pos,
          text: Ot.slice(qt)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(tt, et, Vt) {
        "abort" == tt && this.abortListeners && (this.abortListeners.push(et), Vt && Vt.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function dt(tt) {
      let et = Object.keys(tt).join(""),
        Vt = /\w/.test(et);
      return Vt && (et = et.replace(/\w/g, "")), `[${Vt?"\\w":""}${et.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function jt(tt) {
      let et = tt.map((tt => "string" == typeof tt ? {
          label: tt
        } : tt)),
        [Vt, Ot] = et.every((tt => /^\w+$/.test(tt.label))) ? [/\w*$/, /\w+$/] : function(tt) {
          let et = Object.create(null),
            Vt = Object.create(null);
          for (let {
              label: qt
            }
            of tt) {
            et[qt[0]] = !0;
            for (let tt = 1; tt < qt.length; tt++) Vt[qt[tt]] = !0
          }
          let Ot = dt(et) + dt(Vt) + "*$";
          return [new RegExp("^" + Ot), new RegExp(Ot)]
        }(et);
      return tt => {
        let qt = tt.matchBefore(Ot);
        return qt || tt.explicit ? {
          from: qt ? qt.from : tt.pos,
          options: et,
          validFor: Vt
        } : null
      }
    }

    function Ht(tt, et) {
      return Vt => {
        for (let et = (0, Dt.jb)(Vt.state).resolveInner(Vt.pos, -1); et; et = et.parent) {
          if (tt.indexOf(et.name) > -1) return null;
          if (et.type.isTop) break
        }
        return et(Vt)
      }
    }
    class Xt {
      constructor(tt, et, Vt, Ot) {
        this.completion = tt, this.source = et, this.match = Vt, this.score = Ot
      }
    }

    function Qt(tt) {
      return tt.selection.main.from
    }

    function lt(tt, et) {
      var Vt;
      let {
        source: Ot
      } = tt, qt = et && "^" != Ot[0], Dt = "$" != Ot[Ot.length - 1];
      return qt || Dt ? new RegExp(`${qt?"^":""}(?:${Ot})${Dt?"$":""}`, null !== (Vt = tt.flags) && void 0 !== Vt ? Vt : tt.ignoreCase ? "i" : "") : tt
    }
    const Et = Ot.c.define();

    function ft(tt, et, Vt, qt) {
      let {
        main: Dt
      } = tt.selection, mt = Vt - Dt.from, dt = qt - Dt.from;
      return {
        ...tt.changeByRange((jt => {
          if (jt != Dt && Vt != qt && tt.sliceDoc(jt.from + mt, jt.from + dt) != tt.sliceDoc(Vt, qt)) return {
            range: jt
          };
          let Ht = tt.toText(et);
          return {
            changes: {
              from: jt.from + mt,
              to: qt == Dt.from ? jt.to : jt.from + dt,
              insert: Ht
            },
            range: Ot.n.cursor(jt.from + mt + Ht.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const wt = new WeakMap;

    function yt(tt) {
      if (!Array.isArray(tt)) return tt;
      let et = wt.get(tt);
      return et || wt.set(tt, et = jt(tt)), et
    }
    const Nt = Ot.I.define(),
      Mt = Ot.I.define();
    class bt {
      constructor(tt) {
        this.pattern = tt, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let et = 0; et < tt.length;) {
          let Vt = (0, Ot.S)(tt, et),
            qt = (0, Ot.W)(Vt);
          this.chars.push(Vt);
          let Dt = tt.slice(et, et + qt),
            mt = Dt.toUpperCase();
          this.folded.push((0, Ot.S)(mt == Dt ? Dt.toLowerCase() : mt, 0)), et += qt
        }
        this.astral = tt.length != this.chars.length
      }
      ret(tt, et) {
        return this.score = tt, this.matched = et, this
      }
      match(tt) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (tt.length < this.pattern.length) return null;
        let {
          chars: et,
          folded: Vt,
          any: qt,
          precise: Dt,
          byWord: mt
        } = this;
        if (1 == et.length) {
          let qt = (0, Ot.S)(tt, 0),
            Dt = (0, Ot.W)(qt),
            mt = Dt == tt.length ? 0 : -100;
          if (qt == et[0]);
          else {
            if (qt != Vt[0]) return null;
            mt += -200
          }
          return this.ret(mt, [0, Dt])
        }
        let dt = tt.indexOf(this.pattern);
        if (0 == dt) return this.ret(tt.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let jt = et.length,
          Ht = 0;
        if (dt < 0) {
          for (let Dt = 0, mt = Math.min(tt.length, 200); Dt < mt && Ht < jt;) {
            let mt = (0, Ot.S)(tt, Dt);
            mt != et[Ht] && mt != Vt[Ht] || (qt[Ht++] = Dt), Dt += (0, Ot.W)(mt)
          }
          if (Ht < jt) return null
        }
        let Xt = 0,
          Qt = 0,
          lt = !1,
          Et = 0,
          ft = -1,
          wt = -1,
          yt = /[a-z]/.test(tt),
          Nt = !0;
        for (let Mt = 0, bt = Math.min(tt.length, 200), Jt = 0; Mt < bt && Qt < jt;) {
          let qt = (0, Ot.S)(tt, Mt);
          dt < 0 && (Xt < jt && qt == et[Xt] && (Dt[Xt++] = Mt), Et < jt && (qt == et[Et] || qt == Vt[Et] ? (0 == Et && (ft = Mt), wt = Mt + 1, Et++) : Et = 0));
          let Ht, bt = qt < 255 ? qt >= 48 && qt <= 57 || qt >= 97 && qt <= 122 ? 2 : qt >= 65 && qt <= 90 ? 1 : 0 : (Ht = (0, Ot.fb)(qt)) != Ht.toLowerCase() ? 1 : Ht != Ht.toUpperCase() ? 2 : 0;
          (!Mt || 1 == bt && yt || 0 == Jt && 0 != bt) && (et[Qt] == qt || Vt[Qt] == qt && (lt = !0) ? mt[Qt++] = Mt : mt.length && (Nt = !1)), Jt = bt, Mt += (0, Ot.W)(qt)
        }
        return Qt == jt && 0 == mt[0] && Nt ? this.result((lt ? -200 : 0) - 100, mt, tt) : Et == jt && 0 == ft ? this.ret(-200 - tt.length + (wt == tt.length ? 0 : -100), [0, wt]) : dt > -1 ? this.ret(-700 - tt.length, [dt, dt + this.pattern.length]) : Et == jt ? this.ret(-900 - tt.length, [ft, wt]) : Qt == jt ? this.result((lt ? -200 : 0) - 100 - 700 + (Nt ? 0 : -1100), mt, tt) : 2 == et.length ? null : this.result((qt[0] ? -700 : 0) - 200 - 1100, qt, tt)
      }
      result(tt, et, Vt) {
        let qt = [],
          Dt = 0;
        for (let mt of et) {
          let tt = mt + (this.astral ? (0, Ot.W)((0, Ot.S)(Vt, mt)) : 1);
          Dt && qt[Dt - 1] == mt ? qt[Dt - 1] = tt : (qt[Dt++] = mt, qt[Dt++] = tt)
        }
        return this.ret(tt - Vt.length, qt)
      }
    }
    class Jt {
      constructor(tt) {
        this.pattern = tt, this.matched = [], this.score = 0, this.folded = tt.toLowerCase()
      }
      match(tt) {
        if (tt.length < this.pattern.length) return null;
        let et = tt.slice(0, this.pattern.length),
          Vt = et == this.pattern ? 0 : et.toLowerCase() == this.folded ? -200 : null;
        return null == Vt ? null : (this.matched = [0, et.length], this.score = Vt + (tt.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const Ct = Ot.s.define({
      combine: tt => (0, Ot.Y)(tt, {
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
        positionInfo: Kt,
        filterStrict: !1,
        compareCompletions: (tt, et) => (tt.sortText || tt.label).localeCompare(et.sortText || et.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (tt, et) => tt && et,
        closeOnBlur: (tt, et) => tt && et,
        icons: (tt, et) => tt && et,
        tooltipClass: (tt, et) => Vt => ut(tt(Vt), et(Vt)),
        optionClass: (tt, et) => Vt => ut(tt(Vt), et(Vt)),
        addToOptions: (tt, et) => tt.concat(et),
        filterStrict: (tt, et) => tt || et
      })
    });

    function ut(tt, et) {
      return tt ? et ? tt + " " + et : tt : et
    }

    function Kt(tt, et, Vt, Ot, Dt, mt) {
      let dt, jt, Ht = tt.textDirection == qt.i.RTL,
        Xt = Ht,
        Qt = !1,
        lt = "top",
        Et = et.left - Dt.left,
        ft = Dt.right - et.right,
        wt = Ot.right - Ot.left,
        yt = Ot.bottom - Ot.top;
      if (Xt && Et < Math.min(wt, ft) ? Xt = !1 : !Xt && ft < Math.min(wt, Et) && (Xt = !0), wt <= (Xt ? Et : ft)) dt = Math.max(Dt.top, Math.min(Vt.top, Dt.bottom - yt)) - et.top, jt = Math.min(400, Xt ? Et : ft);
      else {
        Qt = !0, jt = Math.min(400, (Ht ? et.right : Dt.right - et.left) - 30);
        let tt = Dt.bottom - et.bottom;
        tt >= yt || tt > et.top ? dt = Vt.bottom - et.top : (lt = "bottom", dt = et.bottom - Vt.top)
      }
      return {
        style: `${lt}: ${dt/((et.bottom-et.top)/mt.offsetHeight)}px; max-width: ${jt/((et.right-et.left)/mt.offsetWidth)}px`,
        class: "cm-completionInfo-" + (Qt ? Ht ? "left-narrow" : "right-narrow" : Xt ? "left" : "right")
      }
    }
    const ht = Ot.I.define();

    function vt(tt, et, Vt) {
      if (tt <= Vt) return {
        from: 0,
        to: tt
      };
      if (et < 0 && (et = 0), et <= tt >> 1) {
        let tt = Math.floor(et / Vt);
        return {
          from: tt * Vt,
          to: (tt + 1) * Vt
        }
      }
      let Ot = Math.floor((tt - et) / Vt);
      return {
        from: tt - (Ot + 1) * Vt,
        to: tt - Ot * Vt
      }
    }
    class Wt {
      constructor(tt, et, Vt) {
        this.view = tt, this.stateField = et, this.applyCompletion = Vt, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: tt => this.placeInfo(tt),
          key: this
        }, this.space = null, this.currentClass = "";
        let Ot = tt.state.field(et),
          {
            options: qt,
            selected: Dt
          } = Ot.open,
          mt = tt.state.facet(Ct);
        this.optionContent = function(tt) {
          let et = tt.addToOptions.slice();
          return tt.icons && et.push({
            render(tt) {
              let et = document.createElement("div");
              return et.classList.add("cm-completionIcon"), tt.type && et.classList.add(...tt.type.split(/\s+/g).map((tt => "cm-completionIcon-" + tt))), et.setAttribute("aria-hidden", "true"), et
            },
            position: 20
          }), et.push({
            render(tt, et, Vt, Ot) {
              let qt = document.createElement("span");
              qt.className = "cm-completionLabel";
              let Dt = tt.displayLabel || tt.label,
                mt = 0;
              for (let dt = 0; dt < Ot.length;) {
                let tt = Ot[dt++],
                  et = Ot[dt++];
                tt > mt && qt.appendChild(document.createTextNode(Dt.slice(mt, tt)));
                let Vt = qt.appendChild(document.createElement("span"));
                Vt.appendChild(document.createTextNode(Dt.slice(tt, et))), Vt.className = "cm-completionMatchedText", mt = et
              }
              return mt < Dt.length && qt.appendChild(document.createTextNode(Dt.slice(mt))), qt
            },
            position: 50
          }, {
            render(tt) {
              if (!tt.detail) return null;
              let et = document.createElement("span");
              return et.className = "cm-completionDetail", et.textContent = tt.detail, et
            },
            position: 80
          }), et.sort(((tt, et) => tt.position - et.position)).map((tt => tt.render))
        }(mt), this.optionClass = mt.optionClass, this.tooltipClass = mt.tooltipClass, this.range = vt(qt.length, Dt, mt.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(tt.state), this.dom.addEventListener("mousedown", (Vt => {
          let {
            options: Ot
          } = tt.state.field(et).open;
          for (let et, qt = Vt.target; qt && qt != this.dom; qt = qt.parentNode)
            if ("LI" == qt.nodeName && (et = /-(\d+)$/.exec(qt.id)) && +et[1] < Ot.length) return this.applyCompletion(tt, Ot[+et[1]]), void Vt.preventDefault();
          if (Vt.target == this.list) {
            let et = this.list.classList.contains("cm-completionListIncompleteTop") && Vt.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && Vt.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != et && (tt.dispatch({
              effects: ht.of(et)
            }), Vt.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (et => {
          let Vt = tt.state.field(this.stateField, !1);
          Vt && Vt.tooltip && tt.state.facet(Ct).closeOnBlur && et.relatedTarget != tt.contentDOM && tt.dispatch({
            effects: Mt.of(null)
          })
        })), this.showOptions(qt, Ot.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(tt, et) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(tt, et, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(tt) {
        var et;
        let Vt = tt.state.field(this.stateField),
          Ot = tt.startState.field(this.stateField);
        if (this.updateTooltipClass(tt.state), Vt != Ot) {
          let {
            options: qt,
            selected: Dt,
            disabled: mt
          } = Vt.open;
          Ot.open && Ot.open.options == qt || (this.range = vt(qt.length, Dt, tt.state.facet(Ct).maxRenderedOptions), this.showOptions(qt, Vt.id)), this.updateSel(), mt != (null === (et = Ot.open) || void 0 === et ? void 0 : et.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!mt)
        }
      }
      updateTooltipClass(tt) {
        let et = this.tooltipClass(tt);
        if (et != this.currentClass) {
          for (let tt of this.currentClass.split(" ")) tt && this.dom.classList.remove(tt);
          for (let tt of et.split(" ")) tt && this.dom.classList.add(tt);
          this.currentClass = et
        }
      }
      positioned(tt) {
        this.space = tt, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let tt = this.view.state.field(this.stateField),
          et = tt.open;
        (et.selected > -1 && et.selected < this.range.from || et.selected >= this.range.to) && (this.range = vt(et.options.length, et.selected, this.view.state.facet(Ct).maxRenderedOptions), this.showOptions(et.options, tt.id));
        let Vt = this.updateSelectedOption(et.selected);
        if (Vt) {
          this.destroyInfo();
          let {
            completion: Ot
          } = et.options[et.selected], {
            info: Dt
          } = Ot;
          if (!Dt) return;
          let mt = "string" === typeof Dt ? document.createTextNode(Dt) : Dt(Ot);
          if (!mt) return;
          "then" in mt ? mt.then((et => {
            et && this.view.state.field(this.stateField, !1) == tt && this.addInfoPane(et, Ot)
          })).catch((tt => (0, qt.ab)(this.view.state, tt, "completion info"))) : (this.addInfoPane(mt, Ot), Vt.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(tt, et) {
        this.destroyInfo();
        let Vt = this.info = document.createElement("div");
        if (Vt.className = "cm-tooltip cm-completionInfo", Vt.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != tt.nodeType) Vt.appendChild(tt), this.infoDestroy = null;
        else {
          let {
            dom: et,
            destroy: Ot
          } = tt;
          Vt.appendChild(et), this.infoDestroy = Ot || null
        }
        this.dom.appendChild(Vt), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(tt) {
        let et = null;
        for (let Vt = this.list.firstChild, Ot = this.range.from; Vt; Vt = Vt.nextSibling, Ot++) "LI" == Vt.nodeName && Vt.id ? Ot == tt ? Vt.hasAttribute("aria-selected") || (Vt.setAttribute("aria-selected", "true"), et = Vt) : Vt.hasAttribute("aria-selected") && (Vt.removeAttribute("aria-selected"), Vt.removeAttribute("aria-describedby")) : Ot--;
        return et && function(tt, et) {
          let Vt = tt.getBoundingClientRect(),
            Ot = et.getBoundingClientRect(),
            qt = Vt.height / tt.offsetHeight;
          Ot.top < Vt.top ? tt.scrollTop -= (Vt.top - Ot.top) / qt : Ot.bottom > Vt.bottom && (tt.scrollTop += (Ot.bottom - Vt.bottom) / qt)
        }(this.list, et), et
      }
      measureInfo() {
        let tt = this.dom.querySelector("[aria-selected]");
        if (!tt || !this.info) return null;
        let et = this.dom.getBoundingClientRect(),
          Vt = this.info.getBoundingClientRect(),
          Ot = tt.getBoundingClientRect(),
          qt = this.space;
        if (!qt) {
          let tt = this.dom.ownerDocument.documentElement;
          qt = {
            left: 0,
            top: 0,
            right: tt.clientWidth,
            bottom: tt.clientHeight
          }
        }
        return Ot.top > Math.min(qt.bottom, et.bottom) - 10 || Ot.bottom < Math.max(qt.top, et.top) + 10 ? null : this.view.state.facet(Ct).positionInfo(this.view, et, Ot, Vt, qt, this.dom)
      }
      placeInfo(tt) {
        this.info && (tt ? (tt.style && (this.info.style.cssText = tt.style), this.info.className = "cm-tooltip cm-completionInfo " + (tt.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(tt, et, Vt) {
        const Ot = document.createElement("ul");
        Ot.id = et, Ot.setAttribute("role", "listbox"), Ot.setAttribute("aria-expanded", "true"), Ot.setAttribute("aria-label", this.view.state.phrase("Completions")), Ot.addEventListener("mousedown", (tt => {
          tt.target == Ot && tt.preventDefault()
        }));
        let qt = null;
        for (let Dt = Vt.from; Dt < Vt.to; Dt++) {
          let {
            completion: mt,
            match: dt
          } = tt[Dt], {
            section: jt
          } = mt;
          if (jt) {
            let tt = "string" == typeof jt ? jt : jt.name;
            if (tt != qt && (Dt > Vt.from || 0 == Vt.from))
              if (qt = tt, "string" != typeof jt && jt.header) Ot.appendChild(jt.header(jt));
              else {
                Ot.appendChild(document.createElement("completion-section")).textContent = tt
              }
          }
          const Ht = Ot.appendChild(document.createElement("li"));
          Ht.id = et + "-" + Dt, Ht.setAttribute("role", "option");
          let Xt = this.optionClass(mt);
          Xt && (Ht.className = Xt);
          for (let tt of this.optionContent) {
            let et = tt(mt, this.view.state, this.view, dt);
            et && Ht.appendChild(et)
          }
        }
        return Vt.from && Ot.classList.add("cm-completionListIncompleteTop"), Vt.to < tt.length && Ot.classList.add("cm-completionListIncompleteBottom"), Ot
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function St(tt, et) {
      return Vt => new Wt(Vt, tt, et)
    }

    function ct(tt) {
      return 100 * (tt.boost || 0) + (tt.apply ? 10 : 0) + (tt.info ? 5 : 0) + (tt.type ? 1 : 0)
    }
    class Rt {
      constructor(tt, et, Vt, Ot, qt, Dt) {
        this.options = tt, this.attrs = et, this.tooltip = Vt, this.timestamp = Ot, this.selected = qt, this.disabled = Dt
      }
      setSelected(tt, et) {
        return tt == this.selected || tt >= this.options.length ? this : new Rt(this.options, Lt(et, tt), this.tooltip, this.timestamp, tt, this.disabled)
      }
      static build(tt, et, Vt, Ot, qt, Dt) {
        if (Ot && !Dt && tt.some((tt => tt.isPending))) return Ot.setDisabled();
        let mt = function(tt, et) {
          let Vt = [],
            Ot = null,
            qt = null,
            Dt = tt => {
              Vt.push(tt);
              let {
                section: et
              } = tt.completion;
              if (et) {
                Ot || (Ot = []);
                let tt = "string" == typeof et ? et : et.name;
                Ot.some((et => et.name == tt)) || Ot.push("string" == typeof et ? {
                  name: tt
                } : et)
              }
            },
            mt = et.facet(Ct);
          for (let Qt of tt)
            if (Qt.hasResult()) {
              let tt = Qt.result.getMatch;
              if (!1 === Qt.result.filter)
                for (let et of Qt.result.options) Dt(new Xt(et, Qt.source, tt ? tt(et) : [], 1e9 - Vt.length));
              else {
                let Vt, Ot = et.sliceDoc(Qt.from, Qt.to),
                  dt = mt.filterStrict ? new Jt(Ot) : new bt(Ot);
                for (let et of Qt.result.options)
                  if (Vt = dt.match(et.label)) {
                    let Ot = et.displayLabel ? tt ? tt(et, Vt.matched) : [] : Vt.matched,
                      mt = Vt.score + (et.boost || 0);
                    if (Dt(new Xt(et, Qt.source, Ot, mt)), "object" == typeof et.section && "dynamic" === et.section.rank) {
                      let {
                        name: tt
                      } = et.section;
                      qt || (qt = Object.create(null)), qt[tt] = Math.max(mt, qt[tt] || -1e9)
                    }
                  }
              }
            } if (Ot) {
            let tt = Object.create(null),
              et = 0,
              Dt = (tt, et) => ("dynamic" === tt.rank && "dynamic" === et.rank ? qt[et.name] - qt[tt.name] : 0) || ("number" == typeof tt.rank ? tt.rank : 1e9) - ("number" == typeof et.rank ? et.rank : 1e9) || (tt.name < et.name ? -1 : 1);
            for (let Vt of Ot.sort(Dt)) et -= 1e5, tt[Vt.name] = et;
            for (let Ot of Vt) {
              let {
                section: et
              } = Ot.completion;
              et && (Ot.score += tt["string" == typeof et ? et : et.name])
            }
          }
          let dt = [],
            jt = null,
            Ht = mt.compareCompletions;
          for (let Xt of Vt.sort(((tt, et) => et.score - tt.score || Ht(tt.completion, et.completion)))) {
            let tt = Xt.completion;
            !jt || jt.label != tt.label || jt.detail != tt.detail || null != jt.type && null != tt.type && jt.type != tt.type || jt.apply != tt.apply || jt.boost != tt.boost ? dt.push(Xt) : ct(Xt.completion) > ct(jt) && (dt[dt.length - 1] = Xt), jt = Xt.completion
          }
          return dt
        }(tt, et);
        if (!mt.length) return Ot && tt.some((tt => tt.isPending)) ? Ot.setDisabled() : null;
        let dt = et.facet(Ct).selectOnOpen ? 0 : -1;
        if (Ot && Ot.selected != dt && -1 != Ot.selected) {
          let tt = Ot.options[Ot.selected].completion;
          for (let et = 0; et < mt.length; et++)
            if (mt[et].completion == tt) {
              dt = et;
              break
            }
        }
        return new Rt(mt, Lt(Vt, dt), {
          pos: tt.reduce(((tt, et) => et.hasResult() ? Math.min(tt, et.from) : tt), 1e8),
          create: At,
          above: qt.aboveCursor
        }, Ot ? Ot.timestamp : Date.now(), dt, !1)
      }
      map(tt) {
        return new Rt(this.options, this.attrs, {
          ...this.tooltip,
          pos: tt.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new Rt(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class It {
      constructor(tt, et, Vt) {
        this.active = tt, this.id = et, this.open = Vt
      }
      static start() {
        return new It(Ft, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(tt) {
        let {
          state: et
        } = tt, Vt = et.facet(Ct), Ot = (Vt.override || et.languageDataAt("autocomplete", Qt(et)).map(yt)).map((et => (this.active.find((tt => tt.source == et)) || new Gt(et, this.active.some((tt => 0 != tt.state)) ? 1 : 0)).update(tt, Vt)));
        Ot.length == this.active.length && Ot.every(((tt, et) => tt == this.active[et])) && (Ot = this.active);
        let qt = this.open,
          Dt = tt.effects.some((tt => tt.is(ot)));
        qt && tt.docChanged && (qt = qt.map(tt.changes)), tt.selection || Ot.some((et => et.hasResult() && tt.changes.touchesRange(et.from, et.to))) || ! function(tt, et) {
          if (tt == et) return !0;
          for (let Vt = 0, Ot = 0;;) {
            for (; Vt < tt.length && !tt[Vt].hasResult();) Vt++;
            for (; Ot < et.length && !et[Ot].hasResult();) Ot++;
            let qt = Vt == tt.length,
              Dt = Ot == et.length;
            if (qt || Dt) return qt == Dt;
            if (tt[Vt++].result != et[Ot++].result) return !1
          }
        }(Ot, this.active) || Dt ? qt = Rt.build(Ot, et, this.id, qt, Vt, Dt) : qt && qt.disabled && !Ot.some((tt => tt.isPending)) && (qt = null), !qt && Ot.every((tt => !tt.isPending)) && Ot.some((tt => tt.hasResult())) && (Ot = Ot.map((tt => tt.hasResult() ? new Gt(tt.source, 0) : tt)));
        for (let mt of tt.effects) mt.is(ht) && (qt = qt && qt.setSelected(mt.value, this.id));
        return Ot == this.active && qt == this.open ? this : new It(Ot, this.id, qt)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Pt : Zt
      }
    }
    const Pt = {
        "aria-autocomplete": "list"
      },
      Zt = {};

    function Lt(tt, et) {
      let Vt = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": tt
      };
      return et > -1 && (Vt["aria-activedescendant"] = tt + "-" + et), Vt
    }
    const Ft = [];

    function kt(tt, et) {
      if (tt.isUserEvent("input.complete")) {
        let Vt = tt.annotation(Et);
        if (Vt && et.activateOnCompletion(Vt)) return 12
      }
      let Vt = tt.isUserEvent("input.type");
      return Vt && et.activateOnTyping ? 5 : Vt ? 1 : tt.isUserEvent("delete.backward") ? 2 : tt.selection ? 8 : tt.docChanged ? 16 : 0
    }
    class Gt {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = tt, this.state = et, this.explicit = Vt
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(tt, et) {
        let Vt = kt(tt, et),
          Ot = this;
        (8 & Vt || 16 & Vt && this.touches(tt)) && (Ot = new Gt(Ot.source, 0)), 4 & Vt && 0 == Ot.state && (Ot = new Gt(this.source, 1)), Ot = Ot.updateFor(tt, Vt);
        for (let qt of tt.effects)
          if (qt.is(Nt)) Ot = new Gt(Ot.source, 1, qt.value);
          else if (qt.is(Mt)) Ot = new Gt(Ot.source, 0);
        else if (qt.is(ot))
          for (let tt of qt.value) tt.source == Ot.source && (Ot = tt);
        return Ot
      }
      updateFor(tt, et) {
        return this.map(tt.changes)
      }
      map(tt) {
        return this
      }
      touches(tt) {
        return tt.changes.touchesRange(Qt(tt.state))
      }
    }
    class zt extends Gt {
      constructor(tt, et, Vt, Ot, qt, Dt) {
        super(tt, 3, et), this.limit = Vt, this.result = Ot, this.from = qt, this.to = Dt
      }
      hasResult() {
        return !0
      }
      updateFor(tt, et) {
        var Vt;
        if (!(3 & et)) return this.map(tt.changes);
        let Ot = this.result;
        Ot.map && !tt.changes.empty && (Ot = Ot.map(Ot, tt.changes));
        let qt = tt.changes.mapPos(this.from),
          Dt = tt.changes.mapPos(this.to, 1),
          dt = Qt(tt.state);
        if (dt > Dt || !Ot || 2 & et && (Qt(tt.startState) == this.from || dt < this.limit)) return new Gt(this.source, 4 & et ? 1 : 0);
        let jt = tt.changes.mapPos(this.limit);
        return function(tt, et, Vt, Ot) {
          if (!tt) return !1;
          let qt = et.sliceDoc(Vt, Ot);
          return "function" == typeof tt ? tt(qt, Vt, Ot, et) : lt(tt, !0).test(qt)
        }(Ot.validFor, tt.state, qt, Dt) ? new zt(this.source, this.explicit, jt, Ot, qt, Dt) : Ot.update && (Ot = Ot.update(Ot, qt, Dt, new mt(tt.state, dt, !1))) ? new zt(this.source, this.explicit, jt, Ot, Ot.from, null !== (Vt = Ot.to) && void 0 !== Vt ? Vt : Qt(tt.state)) : new Gt(this.source, 1, this.explicit)
      }
      map(tt) {
        if (tt.empty) return this;
        return (this.result.map ? this.result.map(this.result, tt) : this.result) ? new zt(this.source, this.explicit, tt.mapPos(this.limit), this.result, tt.mapPos(this.from), tt.mapPos(this.to, 1)) : new Gt(this.source, 0)
      }
      touches(tt) {
        return tt.changes.touchesRange(this.from, this.to)
      }
    }
    const ot = Ot.I.define({
        map: (tt, et) => tt.map((tt => tt.map(et)))
      }),
      rt = Ot.J.define({
        create: () => It.start(),
        update: (tt, et) => tt.update(et),
        provide: tt => [qt.sb.from(tt, (tt => tt.tooltip)), qt.j.contentAttributes.from(tt, (tt => tt.attrs))]
      });

    function Ut(tt, et) {
      const Vt = et.completion.apply || et.completion.label;
      let Ot = tt.state.field(rt).active.find((tt => tt.source == et.source));
      return Ot instanceof zt && ("string" == typeof Vt ? tt.dispatch({
        ...ft(tt.state, Vt, Ot.from, Ot.to),
        annotations: Et.of(et.completion)
      }) : Vt(tt, et.completion, Ot.from, Ot.to), !0)
    }
    const At = St(rt, Ut);

    function it(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return Vt => {
        let Ot = Vt.state.field(rt, !1);
        if (!Ot || !Ot.open || Ot.open.disabled || Date.now() - Ot.open.timestamp < Vt.state.facet(Ct).interactionDelay) return !1;
        let Dt, mt = 1;
        "page" == et && (Dt = (0, qt.H)(Vt, Ot.open.tooltip)) && (mt = Math.max(2, Math.floor(Dt.dom.offsetHeight / Dt.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: dt
        } = Ot.open.options, jt = Ot.open.selected > -1 ? Ot.open.selected + mt * (tt ? 1 : -1) : tt ? 0 : dt - 1;
        return jt < 0 ? jt = "page" == et ? 0 : dt - 1 : jt >= dt && (jt = "page" == et ? dt - 1 : 0), Vt.dispatch({
          effects: ht.of(jt)
        }), !0
      }
    }
    const Yt = tt => !!tt.state.field(rt, !1) && (tt.dispatch({
      effects: Nt.of(!0)
    }), !0);
    class Bt {
      constructor(tt, et) {
        this.active = tt, this.context = et, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const pt = qt.p.fromClass(class {
        constructor(tt) {
          this.view = tt, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let et of tt.state.field(rt).active) et.isPending && this.startQuery(et)
        }
        update(tt) {
          let et = tt.state.field(rt),
            Vt = tt.state.facet(Ct);
          if (!tt.selectionSet && !tt.docChanged && tt.startState.field(rt) == et) return;
          let Ot = tt.transactions.some((tt => {
            let et = kt(tt, Vt);
            return 8 & et || (tt.selection || tt.docChanged) && !(3 & et)
          }));
          for (let dt = 0; dt < this.running.length; dt++) {
            let et = this.running[dt];
            if (Ot || et.context.abortOnDocChange && tt.docChanged || et.updates.length + tt.transactions.length > 50 && Date.now() - et.time > 1e3) {
              for (let tt of et.context.abortListeners) try {
                tt()
              } catch (mt) {
                (0, qt.ab)(this.view.state, mt)
              }
              et.context.abortListeners = null, this.running.splice(dt--, 1)
            } else et.updates.push(...tt.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), tt.transactions.some((tt => tt.effects.some((tt => tt.is(Nt))))) && (this.pendingStart = !0);
          let Dt = this.pendingStart ? 50 : Vt.activateOnTypingDelay;
          if (this.debounceUpdate = et.active.some((tt => tt.isPending && !this.running.some((et => et.active.source == tt.source)))) ? setTimeout((() => this.startUpdate()), Dt) : -1, 0 != this.composing)
            for (let qt of tt.transactions) qt.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && qt.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: tt
          } = this.view, et = tt.field(rt);
          for (let Vt of et.active) Vt.isPending && !this.running.some((tt => tt.active.source == Vt.source)) && this.startQuery(Vt);
          this.running.length && et.open && et.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Ct).updateSyncTime))
        }
        startQuery(tt) {
          let {
            state: et
          } = this.view, Vt = Qt(et), Ot = new mt(et, Vt, tt.explicit, this.view), Dt = new Bt(tt, Ot);
          this.running.push(Dt), Promise.resolve(tt.source(Ot)).then((tt => {
            Dt.context.aborted || (Dt.done = tt || null, this.scheduleAccept())
          }), (tt => {
            this.view.dispatch({
              effects: Mt.of(null)
            }), (0, qt.ab)(this.view.state, tt)
          }))
        }
        scheduleAccept() {
          this.running.every((tt => void 0 !== tt.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Ct).updateSyncTime))
        }
        accept() {
          var tt;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let et = [],
            Vt = this.view.state.facet(Ct),
            Ot = this.view.state.field(rt);
          for (let qt = 0; qt < this.running.length; qt++) {
            let Dt = this.running[qt];
            if (void 0 === Dt.done) continue;
            if (this.running.splice(qt--, 1), Dt.done) {
              let Ot = Qt(Dt.updates.length ? Dt.updates[0].startState : this.view.state),
                qt = Math.min(Ot, Dt.done.from + (Dt.active.explicit ? 0 : 1)),
                mt = new zt(Dt.active.source, Dt.active.explicit, qt, Dt.done, Dt.done.from, null !== (tt = Dt.done.to) && void 0 !== tt ? tt : Ot);
              for (let tt of Dt.updates) mt = mt.update(tt, Vt);
              if (mt.hasResult()) {
                et.push(mt);
                continue
              }
            }
            let mt = Ot.active.find((tt => tt.source == Dt.active.source));
            if (mt && mt.isPending)
              if (null == Dt.done) {
                let tt = new Gt(Dt.active.source, 0);
                for (let et of Dt.updates) tt = tt.update(et, Vt);
                tt.isPending || et.push(tt)
              } else this.startQuery(mt)
          }(et.length || Ot.open && Ot.open.disabled) && this.view.dispatch({
            effects: ot.of(et)
          })
        }
      }, {
        eventHandlers: {
          blur(tt) {
            let et = this.view.state.field(rt, !1);
            if (et && et.tooltip && this.view.state.facet(Ct).closeOnBlur) {
              let Vt = et.open && (0, qt.H)(this.view, et.open.tooltip);
              Vt && Vt.dom.contains(tt.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: Mt.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: Nt.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      xt = "object" == typeof navigator && /Win/.test(navigator.platform),
      Tt = Ot.u.highest(qt.j.domEventHandlers({
        keydown(tt, et) {
          let Vt = et.state.field(rt, !1);
          if (!Vt || !Vt.open || Vt.open.disabled || Vt.open.selected < 0 || tt.key.length > 1 || tt.ctrlKey && (!xt || !tt.altKey) || tt.metaKey) return !1;
          let Ot = Vt.open.options[Vt.open.selected],
            qt = Vt.active.find((tt => tt.source == Ot.source)),
            Dt = Ot.completion.commitCharacters || qt.result.commitCharacters;
          return Dt && Dt.indexOf(tt.key) > -1 && Ut(et, Ot), !1
        }
      })),
      gt = qt.j.baseTheme({
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
    class st {
      constructor(tt, et, Vt, Ot) {
        this.field = tt, this.line = et, this.from = Vt, this.to = Ot
      }
    }
    class nt {
      constructor(tt, et, Vt) {
        this.field = tt, this.from = et, this.to = Vt
      }
      map(tt) {
        let et = tt.mapPos(this.from, -1, Ot.t.TrackDel),
          Vt = tt.mapPos(this.to, 1, Ot.t.TrackDel);
        return null == et || null == Vt ? null : new nt(this.field, et, Vt)
      }
    }
    class te {
      constructor(tt, et) {
        this.lines = tt, this.fieldPositions = et
      }
      instantiate(tt, et) {
        let Vt = [],
          Ot = [et],
          qt = tt.doc.lineAt(et),
          mt = /^\s*/.exec(qt.text)[0];
        for (let jt of this.lines) {
          if (Vt.length) {
            let Vt = mt,
              qt = /^\t*/.exec(jt)[0].length;
            for (let et = 0; et < qt; et++) Vt += tt.facet(Dt._);
            Ot.push(et + Vt.length - qt), jt = Vt + jt.slice(qt)
          }
          Vt.push(jt), et += jt.length + 1
        }
        let dt = this.fieldPositions.map((tt => new nt(tt.field, Ot[tt.line] + tt.from, Ot[tt.line] + tt.to)));
        return {
          text: Vt,
          nw: dt
        }
      }
      static parse(tt) {
        let et, Vt = [],
          Ot = [],
          qt = [];
        for (let Dt of tt.split(/\r\n?|\n/)) {
          for (; et = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(Dt);) {
            let tt = et[1] ? +et[1] : null,
              mt = et[2] || et[3] || "",
              dt = -1,
              jt = mt.replace(/\\[{}]/g, (tt => tt[1]));
            for (let et = 0; et < Vt.length; et++)(null != tt ? Vt[et].seq == tt : jt && Vt[et].name == jt) && (dt = et);
            if (dt < 0) {
              let et = 0;
              for (; et < Vt.length && (null == tt || null != Vt[et].seq && Vt[et].seq < tt);) et++;
              Vt.splice(et, 0, {
                seq: tt,
                name: jt
              }), dt = et;
              for (let tt of qt) tt.field >= dt && tt.field++
            }
            for (let Vt of qt)
              if (Vt.line == Ot.length && Vt.from > et.index) {
                let tt = et[2] ? 3 + (et[1] || "").length : 2;
                Vt.from -= tt, Vt.to -= tt
              } qt.push(new st(dt, Ot.length, et.index, et.index + jt.length)), Dt = Dt.slice(0, et.index) + mt + Dt.slice(et.index + et[0].length)
          }
          Dt = Dt.replace(/\\([{}])/g, ((tt, et, Vt) => {
            for (let Dt of qt) Dt.line == Ot.length && Dt.from > Vt && (Dt.from--, Dt.to--);
            return et
          })), Ot.push(Dt)
        }
        return new te(Ot, qt)
      }
    }
    let ee = qt.e.widget({
        widget: new class extends qt.r {
          toDOM() {
            let tt = document.createElement("span");
            return tt.className = "cm-snippetFieldPosition", tt
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      Ve = qt.e.mark({
        class: "cm-snippetField"
      });
    class Oe {
      constructor(tt, et) {
        this.nw = tt, this.active = et, this.deco = qt.e.set(tt.map((tt => (tt.from == tt.to ? ee : Ve).range(tt.from, tt.to))), !0)
      }
      map(tt) {
        let et = [];
        for (let Vt of this.nw) {
          let Ot = Vt.map(tt);
          if (!Ot) return null;
          et.push(Ot)
        }
        return new Oe(et, this.active)
      }
      selectionInsideField(tt) {
        return tt.nw.every((tt => this.nw.some((et => et.field == this.active && et.from <= tt.from && et.to >= tt.to))))
      }
    }
    const qe = Ot.I.define({
        map: (tt, et) => tt && tt.map(et)
      }),
      De = Ot.I.define(),
      me = Ot.J.define({
        create: () => null,
        update(tt, et) {
          for (let Vt of et.effects) {
            if (Vt.is(qe)) return Vt.value;
            if (Vt.is(De) && tt) return new Oe(tt.nw, Vt.value)
          }
          return tt && et.docChanged && (tt = tt.map(et.changes)), tt && et.selection && !tt.selectionInsideField(et.selection) && (tt = null), tt
        },
        provide: tt => qt.j.NO.from(tt, (tt => tt ? tt.deco : qt.e.none))
      });

    function de(tt, et) {
      return Ot.n.create(tt.filter((tt => tt.field == et)).map((tt => Ot.n.range(tt.from, tt.to))))
    }

    function je(tt) {
      let et = te.parse(tt);
      return (tt, Vt, qt, Dt) => {
        let {
          text: mt,
          nw: dt
        } = et.instantiate(tt.state, qt), {
          main: jt
        } = tt.state.selection, Ht = {
          changes: {
            from: qt,
            to: Dt == jt.from ? jt.to : Dt,
            insert: Ot.K.of(mt)
          },
          scrollIntoView: !0,
          annotations: Vt ? [Et.of(Vt), Ot.O.userEvent.of("input.complete")] : void 0
        };
        if (dt.length && (Ht.selection = de(dt, 0)), dt.some((tt => tt.field > 0))) {
          let et = new Oe(dt, 0),
            Vt = Ht.effects = [qe.of(et)];
          void 0 === tt.state.field(me, !1) && Vt.push(Ot.I.appendConfig.of([me, le, fe, gt]))
        }
        tt.dispatch(tt.state.update(Ht))
      }
    }

    function He(tt) {
      return et => {
        let {
          state: Vt,
          dispatch: Ot
        } = et, qt = Vt.field(me, !1);
        if (!qt || tt < 0 && 0 == qt.active) return !1;
        let Dt = qt.active + tt,
          mt = tt > 0 && !qt.nw.some((et => et.field == Dt + tt));
        return Ot(Vt.update({
          selection: de(qt.nw, Dt),
          effects: qe.of(mt ? null : new Oe(qt.nw, Dt)),
          scrollIntoView: !0
        })), !0
      }
    }
    const Xe = [{
        key: "Tab",
        run: He(1),
        shift: He(-1)
      }, {
        key: "Escape",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt;
          return !!et.field(me, !1) && (Vt(et.update({
            effects: qe.of(null)
          })), !0)
        }
      }],
      Qe = Ot.s.define({
        combine: tt => tt.length ? tt[0] : Xe
      }),
      le = Ot.u.highest(qt.X.compute([Qe], (tt => tt.facet(Qe))));

    function Ee(tt, et) {
      return {
        ...et,
        apply: je(tt)
      }
    }
    const fe = qt.j.domEventHandlers({
      mousedown(tt, et) {
        let Vt, Ot = et.state.field(me, !1);
        if (!Ot || null == (Vt = et.posAtCoords({
            x: tt.clientX,
            y: tt.clientY
          }))) return !1;
        let qt = Ot.nw.find((tt => tt.from <= Vt && tt.to >= Vt));
        return !(!qt || qt.field == Ot.active) && (et.dispatch({
          selection: de(Ot.nw, qt.field),
          effects: qe.of(Ot.nw.some((tt => tt.field > qt.field)) ? new Oe(Ot.nw, qt.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const we = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      ye = Ot.I.define({
        map(tt, et) {
          let Vt = et.mapPos(tt, -1, Ot.t.TrackAfter);
          return null == Vt ? void 0 : Vt
        }
      }),
      Ne = new class extends Ot.E {};
    Ne.startSide = 1, Ne.endSide = -1;
    const ae = Ot.J.define({
      create: () => Ot.B.empty,
      update(tt, et) {
        if (tt = tt.map(et.changes), et.selection) {
          let Vt = et.state.doc.lineAt(et.selection.main.head);
          tt = tt.update({
            filter: tt => tt >= Vt.from && tt <= Vt.to
          })
        }
        for (let Vt of et.effects) Vt.is(ye) && (tt = tt.update({
          add: [Ne.range(Vt.value, Vt.value + 1)]
        }));
        return tt
      }
    });

    function Me() {
      return [Ke, ae]
    }
    const be = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function Je(tt) {
      for (let et = 0; et < 16; et += 2)
        if (be.charCodeAt(et) == tt) return be.charAt(et + 1);
      return (0, Ot.fb)(tt < 128 ? tt : tt + 1)
    }

    function Ce(tt, et) {
      return tt.languageDataAt("closeBrackets", et)[0] || we
    }
    const ue = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Ke = qt.j.inputHandler.of(((tt, et, Vt, qt) => {
        if ((ue ? tt.composing : tt.compositionStarted) || tt.state.readOnly) return !1;
        let Dt = tt.state.selection.main;
        if (qt.length > 2 || 2 == qt.length && 1 == (0, Ot.W)((0, Ot.S)(qt, 0)) || et != Dt.from || Vt != Dt.to) return !1;
        let mt = function(tt, et) {
          let Vt = Ce(tt, tt.selection.main.head),
            qt = Vt.brackets || we.brackets;
          for (let Dt of qt) {
            let mt = Je((0, Ot.S)(Dt, 0));
            if (et == Dt) return mt == Dt ? Re(tt, Dt, qt.indexOf(Dt + Dt + Dt) > -1, Vt) : Se(tt, Dt, mt, Vt.before || we.before);
            if (et == mt && ve(tt, tt.selection.main.from)) return ce(tt, Dt, mt)
          }
          return null
        }(tt.state, qt);
        return !!mt && (tt.dispatch(mt), !0)
      })),
      he = [{
        key: "Backspace",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt;
          if (et.readOnly) return !1;
          let qt = Ce(et, et.selection.main.head).brackets || we.brackets,
            Dt = null,
            mt = et.changeByRange((tt => {
              if (tt.empty) {
                let Vt = function(tt, et) {
                  let Vt = tt.sliceString(et - 2, et);
                  return (0, Ot.W)((0, Ot.S)(Vt, 0)) == Vt.length ? Vt : Vt.slice(1)
                }(et.doc, tt.head);
                for (let Dt of qt)
                  if (Dt == Vt && We(et.doc, tt.head) == Je((0, Ot.S)(Dt, 0))) return {
                    changes: {
                      from: tt.head - Dt.length,
                      to: tt.head + Dt.length
                    },
                    range: Ot.n.cursor(tt.head - Dt.length)
                  }
              }
              return {
                range: Dt = tt
              }
            }));
          return Dt || Vt(et.update(mt, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !Dt
        }
      }];

    function ve(tt, et) {
      let Vt = !1;
      return tt.field(ae).between(0, tt.doc.length, (tt => {
        tt == et && (Vt = !0)
      })), Vt
    }

    function We(tt, et) {
      let Vt = tt.sliceString(et, et + 2);
      return Vt.slice(0, (0, Ot.W)((0, Ot.S)(Vt, 0)))
    }

    function Se(tt, et, Vt, qt) {
      let Dt = null,
        mt = tt.changeByRange((mt => {
          if (!mt.empty) return {
            changes: [{
              insert: et,
              from: mt.from
            }, {
              insert: Vt,
              from: mt.to
            }],
            effects: ye.of(mt.to + et.length),
            range: Ot.n.range(mt.anchor + et.length, mt.head + et.length)
          };
          let dt = We(tt.doc, mt.head);
          return !dt || /\s/.test(dt) || qt.indexOf(dt) > -1 ? {
            changes: {
              insert: et + Vt,
              from: mt.head
            },
            effects: ye.of(mt.head + et.length),
            range: Ot.n.cursor(mt.head + et.length)
          } : {
            range: Dt = mt
          }
        }));
      return Dt ? null : tt.update(mt, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function ce(tt, et, Vt) {
      let qt = null,
        Dt = tt.changeByRange((et => et.empty && We(tt.doc, et.head) == Vt ? {
          changes: {
            from: et.head,
            to: et.head + Vt.length,
            insert: Vt
          },
          range: Ot.n.cursor(et.head + Vt.length)
        } : qt = {
          range: et
        }));
      return qt ? null : tt.update(Dt, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Re(tt, et, Vt, qt) {
      let mt = qt.stringPrefixes || we.stringPrefixes,
        dt = null,
        jt = tt.changeByRange((qt => {
          if (!qt.empty) return {
            changes: [{
              insert: et,
              from: qt.from
            }, {
              insert: et,
              from: qt.to
            }],
            effects: ye.of(qt.to + et.length),
            range: Ot.n.range(qt.anchor + et.length, qt.head + et.length)
          };
          let jt, Ht = qt.head,
            Xt = We(tt.doc, Ht);
          if (Xt == et) {
            if (Ie(tt, Ht)) return {
              changes: {
                insert: et + et,
                from: Ht
              },
              effects: ye.of(Ht + et.length),
              range: Ot.n.cursor(Ht + et.length)
            };
            if (ve(tt, Ht)) {
              let qt = Vt && tt.sliceDoc(Ht, Ht + 3 * et.length) == et + et + et ? et + et + et : et;
              return {
                changes: {
                  from: Ht,
                  to: Ht + qt.length,
                  insert: qt
                },
                range: Ot.n.cursor(Ht + qt.length)
              }
            }
          } else {
            if (Vt && tt.sliceDoc(Ht - 2 * et.length, Ht) == et + et && (jt = Pe(tt, Ht - 2 * et.length, mt)) > -1 && Ie(tt, jt)) return {
              changes: {
                insert: et + et + et + et,
                from: Ht
              },
              effects: ye.of(Ht + et.length),
              range: Ot.n.cursor(Ht + et.length)
            };
            if (tt.charCategorizer(Ht)(Xt) != Ot.k.Word && Pe(tt, Ht, mt) > -1 && ! function(tt, et, Vt, Ot) {
                let qt = (0, Dt.jb)(tt).resolveInner(et, -1),
                  mt = Ot.reduce(((tt, et) => Math.max(tt, et.length)), 0);
                for (let Dt = 0; Dt < 5; Dt++) {
                  let Dt = tt.sliceDoc(qt.from, Math.min(qt.to, qt.from + Vt.length + mt)),
                    dt = Dt.indexOf(Vt);
                  if (!dt || dt > -1 && Ot.indexOf(Dt.slice(0, dt)) > -1) {
                    let et = qt.firstChild;
                    for (; et && et.from == qt.from && et.to - et.from > Vt.length + dt;) {
                      if (tt.sliceDoc(et.to - Vt.length, et.to) == Vt) return !1;
                      et = et.firstChild
                    }
                    return !0
                  }
                  let jt = qt.to == et && qt.parent;
                  if (!jt) break;
                  qt = jt
                }
                return !1
              }(tt, Ht, et, mt)) return {
              changes: {
                insert: et + et,
                from: Ht
              },
              effects: ye.of(Ht + et.length),
              range: Ot.n.cursor(Ht + et.length)
            }
          }
          return {
            range: dt = qt
          }
        }));
      return dt ? null : tt.update(jt, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Ie(tt, et) {
      let Vt = (0, Dt.jb)(tt).resolveInner(et + 1);
      return Vt.parent && Vt.from == et
    }

    function Pe(tt, et, Vt) {
      let qt = tt.charCategorizer(et);
      if (qt(tt.sliceDoc(et - 1, et)) != Ot.k.Word) return et;
      for (let Dt of Vt) {
        let Vt = et - Dt.length;
        if (tt.sliceDoc(Vt, et) == Dt && qt(tt.sliceDoc(Vt - 1, Vt)) != Ot.k.Word) return Vt
      }
      return -1
    }

    function Ze() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Tt, rt, Ct.of(tt), pt, Fe, gt]
    }
    const Le = [{
        key: "Ctrl-Space",
        run: Yt
      }, {
        mac: "Alt-`",
        run: Yt
      }, {
        mac: "Alt-i",
        run: Yt
      }, {
        key: "Escape",
        run: tt => {
          let et = tt.state.field(rt, !1);
          return !(!et || !et.active.some((tt => 0 != tt.state))) && (tt.dispatch({
            effects: Mt.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: it(!0)
      }, {
        key: "ArrowUp",
        run: it(!1)
      }, {
        key: "PageDown",
        run: it(!0, "page")
      }, {
        key: "PageUp",
        run: it(!1, "page")
      }, {
        key: "Enter",
        run: tt => {
          let et = tt.state.field(rt, !1);
          return !(tt.state.readOnly || !et || !et.open || et.open.selected < 0 || et.open.disabled || Date.now() - et.open.timestamp < tt.state.facet(Ct).interactionDelay) && Ut(tt, et.open.options[et.open.selected])
        }
      }],
      Fe = Ot.u.highest(qt.X.computeN([Ct], (tt => tt.facet(Ct).defaultKeymap ? [Le] : [])))
  },
  41701: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ht,
      g: () => lt,
      k: () => Xt,
      o: () => Qt
    });
    var Ot = Vt(41540);
    class qt {
      constructor(tt, et, Vt, Ot) {
        this.origin = tt, this.changes = et, this.effects = Vt, this.clientID = Ot
      }
    }
    class Dt {
      constructor(tt, et) {
        this.version = tt, this.unconfirmed = et
      }
    }
    const mt = Ot.s.define({
        combine(tt) {
          let et = (0, Ot.Y)(tt, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: tt => tt
          });
          return null == et.clientID && (et.clientID = tt.length && tt[0].generatedID || ""), et
        }
      }),
      dt = Ot.c.define(),
      jt = Ot.J.define({
        create: tt => new Dt(tt.facet(mt).startVersion, []),
        update(tt, et) {
          let Vt = et.annotation(dt);
          if (Vt) return Vt;
          let {
            sharedEffects: Ot,
            clientID: jt
          } = et.startState.facet(mt), Ht = Ot(et);
          return Ht.length || !et.changes.empty ? new Dt(tt.version, tt.unconfirmed.concat(new qt(et, et.changes, Ht, jt))) : tt
        }
      });

    function Ht() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [jt, mt.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, tt))]
    }

    function Xt(tt, et) {
      let {
        version: Vt,
        unconfirmed: Ht
      } = tt.field(jt), {
        clientID: Xt
      } = tt.facet(mt);
      Vt += et.length;
      let Qt = [],
        lt = null,
        Et = 0;
      for (let qt of et) {
        let tt = Et < Ht.length ? Ht[Et] : null;
        tt && tt.clientID == qt.clientID ? (lt && (lt = lt.map(tt.changes, !0)), Qt = Ot.I.mapEffects(Qt, qt.changes), Et++) : (Qt = Ot.I.mapEffects(Qt, qt.changes), qt.effects && (Qt = Qt.concat(qt.effects)), lt = lt ? lt.compose(qt.changes) : qt.changes)
      }
      if (Et && (Ht = Ht.slice(Et)), Ht.length && (lt && (Ht = Ht.map((tt => {
          let et = tt.changes.map(lt);
          return lt = lt.map(tt.changes, !0), new qt(tt.origin, et, Ot.I.mapEffects(tt.effects, lt), Xt)
        }))), Qt.length)) {
        let tt = Ht.reduce(((tt, et) => tt.compose(et.changes)), Ot.ChangeSet.empty(Ht[0].changes.length));
        Qt = Ot.I.mapEffects(Qt, tt)
      }
      return lt ? tt.update({
        changes: lt,
        effects: Qt,
        annotations: [Ot.O.addToHistory.of(!1), Ot.O.remote.of(!0), dt.of(new Dt(Vt, Ht))],
        filter: !1
      }) : tt.update({
        annotations: [dt.of(new Dt(Vt, Ht))]
      })
    }

    function Qt(tt) {
      return tt.field(jt).unconfirmed
    }

    function lt(tt) {
      return tt.field(jt).version
    }
  },
  41584: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => ye
    });
    var Ot = Vt(41570);
    class qt {
      constructor(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        let Ht = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Xt = arguments.length > 10 ? arguments[10] : void 0;
        this.p = tt, this.stack = et, this.state = Vt, this.reducePos = Ot, this.pos = qt, this.score = Dt, this.buffer = mt, this.bufferBase = dt, this.curContext = jt, this.lookAhead = Ht, this.parent = Xt
      }
      toString() {
        return `[${this.stack.filter(((tt,et)=>et%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = tt.parser.context;
        return new qt(tt, [], et, Vt, Vt, 0, [], 0, Ot ? new Dt(Ot, Ot.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(tt, et) {
        this.stack.push(this.state, et, this.bufferBase + this.buffer.length), this.state = tt
      }
      reduce(tt) {
        var et;
        let Vt = tt >> 19,
          Ot = 65535 & tt,
          {
            parser: qt
          } = this.p,
          Dt = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          mt = qt.dynamicPrecedence(Ot);
        if (mt && (this.score += mt), 0 == Vt) return this.pushState(qt.getGoto(this.state, Ot, !0), this.reducePos), Ot < qt.minRepeatTerm && this.storeNode(Ot, this.reducePos, this.reducePos, Dt ? 8 : 4, !0), void this.reduceContext(Ot, this.reducePos);
        let dt = this.stack.length - 3 * (Vt - 1) - (262144 & tt ? 6 : 0),
          jt = dt ? this.stack[dt - 2] : this.p.nw[0].from,
          Ht = this.reducePos - jt;
        Ht >= 2e3 && !(null === (et = this.p.parser.nodeSet.types[Ot]) || void 0 === et ? void 0 : et.isAnonymous) && (jt == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Ht) : this.p.lastBigReductionSize < Ht && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = jt, this.p.lastBigReductionSize = Ht));
        let Xt = dt ? this.stack[dt - 1] : 0,
          Qt = this.bufferBase + this.buffer.length - Xt;
        if (Ot < qt.minRepeatTerm || 131072 & tt) {
          let tt = qt.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Ot, jt, tt, Qt + 4, !0)
        }
        if (262144 & tt) this.state = this.stack[dt];
        else {
          let tt = this.stack[dt - 3];
          this.state = qt.getGoto(tt, Ot, !0)
        }
        for (; this.stack.length > dt;) this.stack.pop();
        this.reduceContext(Ot, jt)
      }
      storeNode(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == tt && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let tt = this,
            Ot = this.buffer.length;
          if (0 == Ot && tt.parent && (Ot = tt.bufferBase - tt.parent.bufferBase, tt = tt.parent), Ot > 0 && 0 == tt.buffer[Ot - 4] && tt.buffer[Ot - 1] > -1) {
            if (et == Vt) return;
            if (tt.buffer[Ot - 2] >= et) return void(tt.buffer[Ot - 2] = Vt)
          }
        }
        if (qt && this.pos != Vt) {
          let qt = this.buffer.length;
          if (qt > 0 && (0 != this.buffer[qt - 4] || this.buffer[qt - 1] < 0)) {
            let tt = !1;
            for (let et = qt; et > 0 && this.buffer[et - 2] > Vt; et -= 4)
              if (this.buffer[et - 1] >= 0) {
                tt = !0;
                break
              } if (tt)
              for (; qt > 0 && this.buffer[qt - 2] > Vt;) this.buffer[qt] = this.buffer[qt - 4], this.buffer[qt + 1] = this.buffer[qt - 3], this.buffer[qt + 2] = this.buffer[qt - 2], this.buffer[qt + 3] = this.buffer[qt - 1], qt -= 4, Ot > 4 && (Ot -= 4)
          }
          this.buffer[qt] = tt, this.buffer[qt + 1] = et, this.buffer[qt + 2] = Vt, this.buffer[qt + 3] = Ot
        } else this.buffer.push(tt, et, Vt, Ot)
      }
      shift(tt, et, Vt, Ot) {
        if (131072 & tt) this.pushState(65535 & tt, this.pos);
        else if (0 == (262144 & tt)) {
          let qt = tt,
            {
              parser: Dt
            } = this.p;
          this.pos = Ot;
          let mt = Dt.stateFlag(qt, 1);
          !mt && (Ot > Vt || et <= Dt.maxNode) && (this.reducePos = Ot), this.pushState(qt, mt ? Vt : Math.min(Vt, this.reducePos)), this.shiftContext(et, Vt), et <= Dt.maxNode && this.buffer.push(et, Vt, Ot, 4)
        } else this.pos = Ot, this.shiftContext(et, Vt), et <= this.p.parser.maxNode && this.buffer.push(et, Vt, Ot, 4)
      }
      apply(tt, et, Vt, Ot) {
        65536 & tt ? this.reduce(tt) : this.shift(tt, et, Vt, Ot)
      }
      useNode(tt, et) {
        let Vt = this.p.reused.length - 1;
        (Vt < 0 || this.p.reused[Vt] != tt) && (this.p.reused.push(tt), Vt++);
        let Ot = this.pos;
        this.reducePos = this.pos = Ot + tt.length, this.pushState(et, Ot), this.buffer.push(Vt, Ot, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, tt, this, this.p.stream.reset(this.pos - tt.length)))
      }
      split() {
        let tt = this,
          et = tt.buffer.length;
        for (; et > 0 && tt.buffer[et - 2] > tt.reducePos;) et -= 4;
        let Vt = tt.buffer.slice(et),
          Ot = tt.bufferBase + et;
        for (; tt && Ot == tt.bufferBase;) tt = tt.parent;
        return new qt(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, Vt, Ot, this.curContext, this.lookAhead, tt)
      }
      recoverByDelete(tt, et) {
        let Vt = tt <= this.p.parser.maxNode;
        Vt && this.storeNode(tt, this.pos, et, 4), this.storeNode(0, this.pos, et, Vt ? 8 : 4), this.pos = this.reducePos = et, this.score -= 190
      }
      canShift(tt) {
        for (let et = new mt(this);;) {
          let Vt = this.p.parser.stateSlot(et.state, 4) || this.p.parser.hasAction(et.state, tt);
          if (0 == Vt) return !1;
          if (0 == (65536 & Vt)) return !0;
          et.reduce(Vt)
        }
      }
      recoverByInsert(tt) {
        if (this.stack.length >= 300) return [];
        let et = this.p.parser.nextStates(this.state);
        if (et.length > 8 || this.stack.length >= 120) {
          let Vt = [];
          for (let Ot, qt = 0; qt < et.length; qt += 2)(Ot = et[qt + 1]) != this.state && this.p.parser.hasAction(Ot, tt) && Vt.push(et[qt], Ot);
          if (this.stack.length < 120)
            for (let tt = 0; Vt.length < 8 && tt < et.length; tt += 2) {
              let Ot = et[tt + 1];
              Vt.some(((tt, et) => 1 & et && tt == Ot)) || Vt.push(et[tt], Ot)
            }
          et = Vt
        }
        let Vt = [];
        for (let Ot = 0; Ot < et.length && Vt.length < 4; Ot += 2) {
          let tt = et[Ot + 1];
          if (tt == this.state) continue;
          let qt = this.split();
          qt.pushState(tt, this.pos), qt.storeNode(0, qt.pos, qt.pos, 4, !0), qt.shiftContext(et[Ot], this.pos), qt.reducePos = this.pos, qt.score -= 200, Vt.push(qt)
        }
        return Vt
      }
      forceReduce() {
        let {
          parser: tt
        } = this.p, et = tt.stateSlot(this.state, 5);
        if (0 == (65536 & et)) return !1;
        if (!tt.validAction(this.state, et)) {
          let Vt = et >> 19,
            Ot = 65535 & et,
            qt = this.stack.length - 3 * Vt;
          if (qt < 0 || tt.getGoto(this.stack[qt], Ot, !1) < 0) {
            let tt = this.findForcedReduction();
            if (null == tt) return !1;
            et = tt
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(et), !0
      }
      findForcedReduction() {
        let {
          parser: tt
        } = this.p, et = [], Vt = (Ot, qt) => {
          if (!et.includes(Ot)) return et.push(Ot), tt.allActions(Ot, (et => {
            if (393216 & et);
            else if (65536 & et) {
              let Vt = (et >> 19) - qt;
              if (Vt > 1) {
                let Ot = 65535 & et,
                  qt = this.stack.length - 3 * Vt;
                if (qt >= 0 && tt.getGoto(this.stack[qt], Ot, !1) >= 0) return Vt << 19 | 65536 | Ot
              }
            } else {
              let tt = Vt(et, qt + 1);
              if (null != tt) return tt
            }
          }))
        };
        return Vt(this.state, 0)
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
          parser: tt
        } = this.p;
        return 65535 == tt.data[tt.stateSlot(this.state, 1)] && !tt.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(tt) {
        if (this.state != tt.state || this.stack.length != tt.stack.length) return !1;
        for (let et = 0; et < this.stack.length; et += 3)
          if (this.stack[et] != tt.stack[et]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(tt) {
        return this.p.parser.dialect.flags[tt]
      }
      shiftContext(tt, et) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, tt, this, this.p.stream.reset(et)))
      }
      reduceContext(tt, et) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, tt, this, this.p.stream.reset(et)))
      }
      emitContext() {
        let tt = this.buffer.length - 1;
        (tt < 0 || -3 != this.buffer[tt]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let tt = this.buffer.length - 1;
        (tt < 0 || -4 != this.buffer[tt]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(tt) {
        if (tt != this.curContext.context) {
          let et = new Dt(this.curContext.tracker, tt);
          et.hash != this.curContext.hash && this.emitContext(), this.curContext = et
        }
      }
      setLookAhead(tt) {
        return !(tt <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = tt, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class Dt {
      constructor(tt, et) {
        this.tracker = tt, this.context = et, this.hash = tt.strict ? tt.hash(et) : 0
      }
    }
    class mt {
      constructor(tt) {
        this.start = tt, this.state = tt.state, this.stack = tt.stack, this.base = this.stack.length
      }
      reduce(tt) {
        let et = 65535 & tt,
          Vt = tt >> 19;
        0 == Vt ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (Vt - 1);
        let Ot = this.start.p.parser.getGoto(this.stack[this.base - 3], et, !0);
        this.state = Ot
      }
    }
    class dt {
      constructor(tt, et, Vt) {
        this.stack = tt, this.pos = et, this.index = Vt, this.buffer = tt.buffer, 0 == this.index && this.maybeNext()
      }
      static create(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt.bufferBase + tt.buffer.length;
        return new dt(tt, et, et - tt.bufferBase)
      }
      maybeNext() {
        let tt = this.stack.parent;
        null != tt && (this.index = this.stack.bufferBase - tt.bufferBase, this.stack = tt, this.buffer = tt.buffer)
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
        return new dt(this.stack, this.pos, this.index)
      }
    }

    function jt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof tt) return tt;
      let Vt = null;
      for (let Ot = 0, qt = 0; Ot < tt.length;) {
        let Dt = 0;
        for (;;) {
          let et = tt.charCodeAt(Ot++),
            Vt = !1;
          if (126 == et) {
            Dt = 65535;
            break
          }
          et >= 92 && et--, et >= 34 && et--;
          let qt = et - 32;
          if (qt >= 46 && (qt -= 46, Vt = !0), Dt += qt, Vt) break;
          Dt *= 46
        }
        Vt ? Vt[qt++] = Dt : Vt = new et(Dt)
      }
      return Vt
    }
    class Ht {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const Xt = new Ht;
    class Qt {
      constructor(tt, et) {
        this.input = tt, this.nw = et, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Xt, this.rangeIndex = 0, this.pos = this.chunkPos = et[0].from, this.range = et[0], this.end = et[et.length - 1].to, this.readNext()
      }
      resolveOffset(tt, et) {
        let Vt = this.range,
          Ot = this.rangeIndex,
          qt = this.pos + tt;
        for (; qt < Vt.from;) {
          if (!Ot) return null;
          let tt = this.nw[--Ot];
          qt -= Vt.from - tt.to, Vt = tt
        }
        for (; et < 0 ? qt > Vt.to : qt >= Vt.to;) {
          if (Ot == this.nw.length - 1) return null;
          let tt = this.nw[++Ot];
          qt += tt.from - Vt.to, Vt = tt
        }
        return qt
      }
      clipPos(tt) {
        if (tt >= this.range.from && tt < this.range.to) return tt;
        for (let et of this.nw)
          if (et.to > tt) return Math.max(tt, et.from);
        return this.end
      }
      peek(tt) {
        let et, Vt, Ot = this.chunkOff + tt;
        if (Ot >= 0 && Ot < this.chunk.length) et = this.pos + tt, Vt = this.chunk.charCodeAt(Ot);
        else {
          let Ot = this.resolveOffset(tt, 1);
          if (null == Ot) return -1;
          if (et = Ot, et >= this.chunk2Pos && et < this.chunk2Pos + this.chunk2.length) Vt = this.chunk2.charCodeAt(et - this.chunk2Pos);
          else {
            let tt = this.rangeIndex,
              Ot = this.range;
            for (; Ot.to <= et;) Ot = this.nw[++tt];
            this.chunk2 = this.input.chunk(this.chunk2Pos = et), et + this.chunk2.length > Ot.to && (this.chunk2 = this.chunk2.slice(0, Ot.to - et)), Vt = this.chunk2.charCodeAt(0)
          }
        }
        return et >= this.token.lookAhead && (this.token.lookAhead = et + 1), Vt
      }
      acceptToken(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = et ? this.resolveOffset(et, -1) : this.pos;
        if (null == Vt || Vt < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = tt, this.token.end = Vt
      }
      acceptTokenTo(tt, et) {
        this.token.value = tt, this.token.end = et
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: tt,
            chunkPos: et
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = tt, this.chunk2Pos = et, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let tt = this.input.chunk(this.pos),
            et = this.pos + tt.length;
          this.chunk = et > this.range.to ? tt.slice(0, this.range.to - this.pos) : tt, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += tt; this.pos + tt >= this.range.to;) {
          if (this.rangeIndex == this.nw.length - 1) return this.setDone();
          tt -= this.range.to - this.pos, this.range = this.nw[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += tt, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.nw[this.rangeIndex = this.nw.length - 1], this.chunk = "", this.next = -1
      }
      reset(tt, et) {
        if (et ? (this.token = et, et.start = tt, et.lookAhead = tt + 1, et.value = et.extended = -1) : this.token = Xt, this.pos != tt) {
          if (this.pos = tt, tt == this.end) return this.setDone(), this;
          for (; tt < this.range.from;) this.range = this.nw[--this.rangeIndex];
          for (; tt >= this.range.to;) this.range = this.nw[++this.rangeIndex];
          tt >= this.chunkPos && tt < this.chunkPos + this.chunk.length ? this.chunkOff = tt - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(tt, et) {
        if (tt >= this.chunkPos && et <= this.chunkPos + this.chunk.length) return this.chunk.slice(tt - this.chunkPos, et - this.chunkPos);
        if (tt >= this.chunk2Pos && et <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(tt - this.chunk2Pos, et - this.chunk2Pos);
        if (tt >= this.range.from && et <= this.range.to) return this.input.read(tt, et);
        let Vt = "";
        for (let Ot of this.nw) {
          if (Ot.from >= et) break;
          Ot.to > tt && (Vt += this.input.read(Math.max(Ot.from, tt), Math.min(Ot.to, et)))
        }
        return Vt
      }
    }
    class lt {
      constructor(tt, et) {
        this.data = tt, this.id = et
      }
      token(tt, et) {
        let {
          parser: Vt
        } = et.p;
        wt(this.data, tt, et, this.id, Vt.data, Vt.tokenPrecTable)
      }
    }
    lt.prototype.contextual = lt.prototype.fallback = lt.prototype.extend = !1;
    class Et {
      constructor(tt, et, Vt) {
        this.precTable = et, this.elseToken = Vt, this.data = "string" == typeof tt ? jt(tt) : tt
      }
      token(tt, et) {
        let Vt = tt.pos,
          Ot = 0;
        for (;;) {
          let Vt = tt.next < 0,
            qt = tt.resolveOffset(1, 1);
          if (wt(this.data, tt, et, 0, this.data, this.precTable), tt.token.value > -1) break;
          if (null == this.elseToken) return;
          if (Vt || Ot++, null == qt) break;
          tt.reset(qt, tt.token)
        }
        Ot && (tt.reset(Vt, tt.token), tt.acceptToken(this.elseToken, Ot))
      }
    }
    Et.prototype.contextual = lt.prototype.fallback = lt.prototype.extend = !1;
    class ft {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = tt, this.contextual = !!et.contextual, this.fallback = !!et.fallback, this.extend = !!et.extend
      }
    }

    function wt(tt, et, Vt, Ot, qt, Dt) {
      let mt = 0,
        dt = 1 << Ot,
        {
          dialect: jt
        } = Vt.p.parser;
      tt: for (; 0 != (dt & tt[mt]);) {
        let Vt = tt[mt + 1];
        for (let Qt = mt + 3; Qt < Vt; Qt += 2)
          if ((tt[Qt + 1] & dt) > 0) {
            let Vt = tt[Qt];
            if (jt.allows(Vt) && (-1 == et.token.value || et.token.value == Vt || Nt(Vt, et.token.value, qt, Dt))) {
              et.acceptToken(Vt);
              break
            }
          } let Ot = et.next,
          Ht = 0,
          Xt = tt[mt + 2];
        if (!(et.next < 0 && Xt > Ht && 65535 == tt[Vt + 3 * Xt - 3])) {
          for (; Ht < Xt;) {
            let qt = Ht + Xt >> 1,
              Dt = Vt + qt + (qt << 1),
              dt = tt[Dt],
              jt = tt[Dt + 1] || 65536;
            if (Ot < dt) Xt = qt;
            else {
              if (!(Ot >= jt)) {
                mt = tt[Dt + 2], et.advance();
                continue tt
              }
              Ht = qt + 1
            }
          }
          break
        }
        mt = tt[Vt + 3 * Xt - 1]
      }
    }

    function yt(tt, et, Vt) {
      for (let Ot, qt = et; 65535 != (Ot = tt[qt]); qt++)
        if (Ot == Vt) return qt - et;
      return -1
    }

    function Nt(tt, et, Vt, Ot) {
      let qt = yt(Vt, Ot, et);
      return qt < 0 || yt(Vt, Ot, tt) < qt
    }
    const Mt = "undefined" != typeof process && {
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
    let bt = null;

    function Jt(tt, et, Vt) {
      let qt = tt.cursor(Ot.d.IncludeAnonymous);
      for (qt.moveTo(et);;)
        if (!(Vt < 0 ? qt.childBefore(et) : qt.childAfter(et)))
          for (;;) {
            if ((Vt < 0 ? qt.to < et : qt.from > et) && !qt.type.isError) return Vt < 0 ? Math.max(0, Math.min(qt.to - 1, et - 25)) : Math.min(tt.length, Math.max(qt.from + 1, et + 25));
            if (Vt < 0 ? qt.prevSibling() : qt.nextSibling()) break;
            if (!qt.parent()) return Vt < 0 ? 0 : tt.length
          }
    }
    class Ct {
      constructor(tt, et) {
        this.fragments = tt, this.nodeSet = et, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let tt = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (tt) {
          for (this.safeFrom = tt.openStart ? Jt(tt.tree, tt.from + tt.offset, 1) - tt.offset : tt.from, this.safeTo = tt.openEnd ? Jt(tt.tree, tt.to + tt.offset, -1) - tt.offset : tt.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(tt.tree), this.start.push(-tt.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(tt) {
        if (tt < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= tt;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let et = this.trees.length - 1;
          if (et < 0) return this.nextFragment(), null;
          let Vt = this.trees[et],
            qt = this.index[et];
          if (qt == Vt.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let Dt = Vt.children[qt],
            mt = this.start[et] + Vt.positions[qt];
          if (mt > tt) return this.nextStart = mt, null;
          if (Dt instanceof Ot.u) {
            if (mt == tt) {
              if (mt < this.safeFrom) return null;
              let tt = mt + Dt.length;
              if (tt <= this.safeTo) {
                let et = Dt.prop(Ot.f.lookAhead);
                if (!et || tt + et < this.fragment.to) return Dt
              }
            }
            this.index[et]++, mt + Dt.length >= Math.max(this.safeFrom, tt) && (this.trees.push(Dt), this.start.push(mt), this.index.push(0))
          } else this.index[et]++, this.nextStart = mt + Dt.length
        }
      }
    }
    class ut {
      constructor(tt, et) {
        this.stream = et, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = tt.tokenizers.map((tt => new Ht))
      }
      getActions(tt) {
        let et = 0,
          Vt = null,
          {
            parser: Ot
          } = tt.p,
          {
            tokenizers: qt
          } = Ot,
          Dt = Ot.stateSlot(tt.state, 3),
          mt = tt.curContext ? tt.curContext.hash : 0,
          dt = 0;
        for (let jt = 0; jt < qt.length; jt++) {
          if (0 == (1 << jt & Dt)) continue;
          let Ot = qt[jt],
            Ht = this.tokens[jt];
          if ((!Vt || Ot.fallback) && ((Ot.contextual || Ht.start != tt.pos || Ht.mask != Dt || Ht.context != mt) && (this.updateCachedToken(Ht, Ot, tt), Ht.mask = Dt, Ht.context = mt), Ht.lookAhead > Ht.end + 25 && (dt = Math.max(Ht.lookAhead, dt)), 0 != Ht.value)) {
            let qt = et;
            if (Ht.extended > -1 && (et = this.addActions(tt, Ht.extended, Ht.end, et)), et = this.addActions(tt, Ht.value, Ht.end, et), !Ot.extend && (Vt = Ht, et > qt)) break
          }
        }
        for (; this.actions.length > et;) this.actions.pop();
        return dt && tt.setLookAhead(dt), Vt || tt.pos != this.stream.end || (Vt = new Ht, Vt.value = tt.p.parser.eofTerm, Vt.start = Vt.end = tt.pos, et = this.addActions(tt, Vt.value, Vt.end, et)), this.mainToken = Vt, this.actions
      }
      getMainToken(tt) {
        if (this.mainToken) return this.mainToken;
        let et = new Ht,
          {
            pos: Vt,
            p: Ot
          } = tt;
        return et.start = Vt, et.end = Math.min(Vt + 1, Ot.stream.end), et.value = Vt == Ot.stream.end ? Ot.parser.eofTerm : 0, et
      }
      updateCachedToken(tt, et, Vt) {
        let Ot = this.stream.clipPos(Vt.pos);
        if (et.token(this.stream.reset(Ot, tt), Vt), tt.value > -1) {
          let {
            parser: et
          } = Vt.p;
          for (let Ot = 0; Ot < et.specialized.length; Ot++)
            if (et.specialized[Ot] == tt.value) {
              let qt = et.specializers[Ot](this.stream.read(tt.start, tt.end), Vt);
              if (qt >= 0 && Vt.p.parser.dialect.allows(qt >> 1)) {
                0 == (1 & qt) ? tt.value = qt >> 1 : tt.extended = qt >> 1;
                break
              }
            }
        } else tt.value = 0, tt.end = this.stream.clipPos(Ot + 1)
      }
      putAction(tt, et, Vt, Ot) {
        for (let qt = 0; qt < Ot; qt += 3)
          if (this.actions[qt] == tt) return Ot;
        return this.actions[Ot++] = tt, this.actions[Ot++] = et, this.actions[Ot++] = Vt, Ot
      }
      addActions(tt, et, Vt, Ot) {
        let {
          state: qt
        } = tt, {
          parser: Dt
        } = tt.p, {
          data: mt
        } = Dt;
        for (let dt = 0; dt < 2; dt++)
          for (let tt = Dt.stateSlot(qt, dt ? 2 : 1);; tt += 3) {
            if (65535 == mt[tt]) {
              if (1 != mt[tt + 1]) {
                0 == Ot && 2 == mt[tt + 1] && (Ot = this.putAction(ct(mt, tt + 2), et, Vt, Ot));
                break
              }
              tt = ct(mt, tt + 2)
            }
            mt[tt] == et && (Ot = this.putAction(ct(mt, tt + 1), et, Vt, Ot))
          }
        return Ot
      }
    }
    class Kt {
      constructor(tt, et, Vt, Ot) {
        this.parser = tt, this.input = et, this.nw = Ot, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Qt(et, Ot), this.tokens = new ut(tt, this.stream), this.topTerm = tt.top[1];
        let {
          from: Dt
        } = Ot[0];
        this.stacks = [qt.start(this, tt.top[0], Dt)], this.fragments = Vt.length && this.stream.end - Dt > 4 * tt.bufferLength ? new Ct(Vt, tt.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let tt, et, Vt = this.stacks,
          Ot = this.minStackPos,
          qt = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == Vt.length) {
          let [tt] = Vt;
          for (; tt.forceReduce() && tt.stack.length && tt.stack[tt.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let Dt = 0; Dt < Vt.length; Dt++) {
          let mt = Vt[Dt];
          for (;;) {
            if (this.tokens.mainToken = null, mt.pos > Ot) qt.push(mt);
            else {
              if (this.advanceStack(mt, qt, Vt)) continue;
              {
                tt || (tt = [], et = []), tt.push(mt);
                let Vt = this.tokens.getMainToken(mt);
                et.push(Vt.value, Vt.end)
              }
            }
            break
          }
        }
        if (!qt.length) {
          let et = tt && function(tt) {
            let et = null;
            for (let Vt of tt) {
              let tt = Vt.p.stoppedAt;
              (Vt.pos == Vt.p.stream.end || null != tt && Vt.pos > tt) && Vt.p.parser.stateFlag(Vt.state, 2) && (!et || et.score < Vt.score) && (et = Vt)
            }
            return et
          }(tt);
          if (et) return Mt && console.log("Finish with " + this.stackID(et)), this.stackToTree(et);
          if (this.parser.strict) throw Mt && tt && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Ot);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && tt) {
          let Vt = null != this.stoppedAt && tt[0].pos > this.stoppedAt ? tt[0] : this.runRecovery(tt, et, qt);
          if (Vt) return Mt && console.log("Force-finish " + this.stackID(Vt)), this.stackToTree(Vt.forceAll())
        }
        if (this.recovering) {
          let tt = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (qt.length > tt)
            for (qt.sort(((tt, et) => et.score - tt.score)); qt.length > tt;) qt.pop();
          qt.some((tt => tt.reducePos > Ot)) && this.recovering--
        } else if (qt.length > 1) {
          tt: for (let tt = 0; tt < qt.length - 1; tt++) {
            let et = qt[tt];
            for (let Vt = tt + 1; Vt < qt.length; Vt++) {
              let Ot = qt[Vt];
              if (et.sameState(Ot) || et.buffer.length > 500 && Ot.buffer.length > 500) {
                if (!((et.score - Ot.score || et.buffer.length - Ot.buffer.length) > 0)) {
                  qt.splice(tt--, 1);
                  continue tt
                }
                qt.splice(Vt--, 1)
              }
            }
          }
          qt.length > 12 && (qt.sort(((tt, et) => et.score - tt.score)), qt.splice(12, qt.length - 12))
        }
        this.minStackPos = qt[0].pos;
        for (let Dt = 1; Dt < qt.length; Dt++) qt[Dt].pos < this.minStackPos && (this.minStackPos = qt[Dt].pos);
        return null
      }
      stopAt(tt) {
        if (null != this.stoppedAt && this.stoppedAt < tt) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = tt
      }
      advanceStack(tt, et, Vt) {
        let qt = tt.pos,
          {
            parser: Dt
          } = this,
          mt = Mt ? this.stackID(tt) + " -> " : "";
        if (null != this.stoppedAt && qt > this.stoppedAt) return tt.forceReduce() ? tt : null;
        if (this.fragments) {
          let et = tt.curContext && tt.curContext.tracker.strict,
            Vt = et ? tt.curContext.hash : 0;
          for (let dt = this.fragments.nodeAt(qt); dt;) {
            let qt = this.parser.nodeSet.types[dt.type.id] == dt.type ? Dt.getGoto(tt.state, dt.type.id) : -1;
            if (qt > -1 && dt.length && (!et || (dt.prop(Ot.f.contextHash) || 0) == Vt)) return tt.useNode(dt, qt), Mt && console.log(mt + this.stackID(tt) + ` (via reuse of ${Dt.getName(dt.type.id)})`), !0;
            if (!(dt instanceof Ot.u) || 0 == dt.children.length || dt.positions[0] > 0) break;
            let jt = dt.children[0];
            if (!(jt instanceof Ot.u && 0 == dt.positions[0])) break;
            dt = jt
          }
        }
        let dt = Dt.stateSlot(tt.state, 4);
        if (dt > 0) return tt.reduce(dt), Mt && console.log(mt + this.stackID(tt) + ` (via always-reduce ${Dt.getName(65535&dt)})`), !0;
        if (tt.stack.length >= 8400)
          for (; tt.stack.length > 6e3 && tt.forceReduce(););
        let jt = this.tokens.getActions(tt);
        for (let Ot = 0; Ot < jt.length;) {
          let dt = jt[Ot++],
            Ht = jt[Ot++],
            Xt = jt[Ot++],
            Qt = Ot == jt.length || !Vt,
            lt = Qt ? tt : tt.split(),
            Et = this.tokens.mainToken;
          if (lt.apply(dt, Ht, Et ? Et.start : lt.pos, Xt), Mt && console.log(mt + this.stackID(lt) + ` (via ${0==(65536&dt)?"shift":`reduce of ${Dt.getName(65535&dt)}`} for ${Dt.getName(Ht)} @ ${qt}${lt==tt?"":", split"})`), Qt) return !0;
          lt.pos > qt ? et.push(lt) : Vt.push(lt)
        }
        return !1
      }
      advanceFully(tt, et) {
        let Vt = tt.pos;
        for (;;) {
          if (!this.advanceStack(tt, null, null)) return !1;
          if (tt.pos > Vt) return ht(tt, et), !0
        }
      }
      runRecovery(tt, et, Vt) {
        let Ot = null,
          qt = !1;
        for (let Dt = 0; Dt < tt.length; Dt++) {
          let mt = tt[Dt],
            dt = et[Dt << 1],
            jt = et[1 + (Dt << 1)],
            Ht = Mt ? this.stackID(mt) + " -> " : "";
          if (mt.deadEnd) {
            if (qt) continue;
            if (qt = !0, mt.restart(), Mt && console.log(Ht + this.stackID(mt) + " (restarted)"), this.advanceFully(mt, Vt)) continue
          }
          let Xt = mt.split(),
            Qt = Ht;
          for (let tt = 0; tt < 10 && Xt.forceReduce(); tt++) {
            if (Mt && console.log(Qt + this.stackID(Xt) + " (via force-reduce)"), this.advanceFully(Xt, Vt)) break;
            Mt && (Qt = this.stackID(Xt) + " -> ")
          }
          for (let tt of mt.recoverByInsert(dt)) Mt && console.log(Ht + this.stackID(tt) + " (via recover-insert)"), this.advanceFully(tt, Vt);
          this.stream.end > mt.pos ? (jt == mt.pos && (jt++, dt = 0), mt.recoverByDelete(dt, jt), Mt && console.log(Ht + this.stackID(mt) + ` (via recover-delete ${this.parser.getName(dt)})`), ht(mt, Vt)) : (!Ot || Ot.score < Xt.score) && (Ot = Xt)
        }
        return Ot
      }
      stackToTree(tt) {
        return tt.close(), Ot.u.build({
          buffer: dt.create(tt),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.nw[0].from,
          length: tt.pos - this.nw[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(tt) {
        let et = (bt || (bt = new WeakMap)).get(tt);
        return et || bt.set(tt, et = String.fromCodePoint(this.nextStackID++)), et + tt
      }
    }

    function ht(tt, et) {
      for (let Vt = 0; Vt < et.length; Vt++) {
        let Ot = et[Vt];
        if (Ot.pos == tt.pos && Ot.sameState(tt)) return void(et[Vt].score < tt.score && (et[Vt] = tt))
      }
      et.push(tt)
    }
    class vt {
      constructor(tt, et, Vt) {
        this.source = tt, this.flags = et, this.disabled = Vt
      }
      allows(tt) {
        return !this.disabled || 0 == this.disabled[tt]
      }
    }
    const Wt = tt => tt;
    class St extends Ot.o {
      constructor(tt) {
        if (super(), this.wrappers = [], 14 != tt.version) throw new RangeError(`Parser version (${tt.version}) doesn't match runtime version (14)`);
        let et = tt.nodeNames.split(" ");
        this.minRepeatTerm = et.length;
        for (let Ot = 0; Ot < tt.repeatNodeCount; Ot++) et.push("");
        let Vt = Object.keys(tt.topRules).map((et => tt.topRules[et][1])),
          qt = [];
        for (let Ot = 0; Ot < et.length; Ot++) qt.push([]);

        function Dt(tt, et, Vt) {
          qt[tt].push([et, et.deserialize(String(Vt))])
        }
        if (tt.nodeProps)
          for (let dt of tt.nodeProps) {
            let tt = dt[0];
            "string" == typeof tt && (tt = Ot.f[tt]);
            for (let et = 1; et < dt.length;) {
              let Vt = dt[et++];
              if (Vt >= 0) Dt(Vt, tt, dt[et++]);
              else {
                let Ot = dt[et + -Vt];
                for (let qt = -Vt; qt > 0; qt--) Dt(dt[et++], tt, Ot);
                et++
              }
            }
          }
        this.nodeSet = new Ot.g(et.map(((et, Dt) => Ot.j.define({
          name: Dt >= this.minRepeatTerm ? void 0 : et,
          id: Dt,
          props: qt[Dt],
          top: Vt.indexOf(Dt) > -1,
          error: 0 == Dt,
          skipped: tt.skippedNodes && tt.skippedNodes.indexOf(Dt) > -1
        })))), tt.propSources && (this.nodeSet = this.nodeSet.extend(...tt.propSources)), this.strict = !1, this.bufferLength = Ot.c;
        let mt = jt(tt.tokenData);
        this.context = tt.context, this.specializerSpecs = tt.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Ot = 0; Ot < this.specializerSpecs.length; Ot++) this.specialized[Ot] = this.specializerSpecs[Ot].term;
        this.specializers = this.specializerSpecs.map(Rt), this.states = jt(tt.states, Uint32Array), this.data = jt(tt.stateData), this.goto = jt(tt.goto), this.maxTerm = tt.maxTerm, this.tokenizers = tt.tokenizers.map((tt => "number" == typeof tt ? new lt(mt, tt) : tt)), this.topRules = tt.topRules, this.dialects = tt.dialects || {}, this.dynamicPrecedences = tt.dynamicPrecedences || null, this.tokenPrecTable = tt.tokenPrec, this.termNames = tt.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(tt, et, Vt) {
        let Ot = new Kt(this, tt, et, Vt);
        for (let qt of this.wrappers) Ot = qt(Ot, tt, et, Vt);
        return Ot
      }
      getGoto(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = this.goto;
        if (et >= Ot[0]) return -1;
        for (let qt = Ot[et + 1];;) {
          let et = Ot[qt++],
            Dt = 1 & et,
            mt = Ot[qt++];
          if (Dt && Vt) return mt;
          for (let Vt = qt + (et >> 1); qt < Vt; qt++)
            if (Ot[qt] == tt) return mt;
          if (Dt) return -1
        }
      }
      hasAction(tt, et) {
        let Vt = this.data;
        for (let Ot = 0; Ot < 2; Ot++)
          for (let qt, Dt = this.stateSlot(tt, Ot ? 2 : 1);; Dt += 3) {
            if (65535 == (qt = Vt[Dt])) {
              if (1 != Vt[Dt + 1]) {
                if (2 == Vt[Dt + 1]) return ct(Vt, Dt + 2);
                break
              }
              qt = Vt[Dt = ct(Vt, Dt + 2)]
            }
            if (qt == et || 0 == qt) return ct(Vt, Dt + 1)
          }
        return 0
      }
      stateSlot(tt, et) {
        return this.states[6 * tt + et]
      }
      stateFlag(tt, et) {
        return (this.stateSlot(tt, 0) & et) > 0
      }
      validAction(tt, et) {
        return !!this.allActions(tt, (tt => tt == et || null))
      }
      allActions(tt, et) {
        let Vt = this.stateSlot(tt, 4),
          Ot = Vt ? et(Vt) : void 0;
        for (let qt = this.stateSlot(tt, 1); null == Ot; qt += 3) {
          if (65535 == this.data[qt]) {
            if (1 != this.data[qt + 1]) break;
            qt = ct(this.data, qt + 2)
          }
          Ot = et(ct(this.data, qt + 1))
        }
        return Ot
      }
      nextStates(tt) {
        let et = [];
        for (let Vt = this.stateSlot(tt, 1);; Vt += 3) {
          if (65535 == this.data[Vt]) {
            if (1 != this.data[Vt + 1]) break;
            Vt = ct(this.data, Vt + 2)
          }
          if (0 == (1 & this.data[Vt + 2])) {
            let tt = this.data[Vt + 1];
            et.some(((et, Vt) => 1 & Vt && et == tt)) || et.push(this.data[Vt], tt)
          }
        }
        return et
      }
      configure(tt) {
        let et = Object.assign(Object.create(St.prototype), this);
        if (tt.props && (et.nodeSet = this.nodeSet.extend(...tt.props)), tt.top) {
          let Vt = this.topRules[tt.top];
          if (!Vt) throw new RangeError(`Invalid top rule name ${tt.top}`);
          et.top = Vt
        }
        return tt.tokenizers && (et.tokenizers = this.tokenizers.map((et => {
          let Vt = tt.tokenizers.find((tt => tt.from == et));
          return Vt ? Vt.to : et
        }))), tt.specializers && (et.specializers = this.specializers.slice(), et.specializerSpecs = this.specializerSpecs.map(((Vt, Ot) => {
          let qt = tt.specializers.find((tt => tt.from == Vt.external));
          if (!qt) return Vt;
          let Dt = Object.assign(Object.assign({}, Vt), {
            external: qt.to
          });
          return et.specializers[Ot] = Rt(Dt), Dt
        }))), tt.contextTracker && (et.context = tt.contextTracker), tt.dialect && (et.dialect = this.parseDialect(tt.dialect)), null != tt.strict && (et.strict = tt.strict), tt.wrap && (et.wrappers = et.wrappers.concat(tt.wrap)), null != tt.bufferLength && (et.bufferLength = tt.bufferLength), et
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(tt) {
        return this.termNames ? this.termNames[tt] : String(tt <= this.maxNode && this.nodeSet.types[tt].name || tt)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(tt) {
        let et = this.dynamicPrecedences;
        return null == et ? 0 : et[tt] || 0
      }
      parseDialect(tt) {
        let et = Object.keys(this.dialects),
          Vt = et.map((() => !1));
        if (tt)
          for (let qt of tt.split(" ")) {
            let tt = et.indexOf(qt);
            tt >= 0 && (Vt[tt] = !0)
          }
        let Ot = null;
        for (let qt = 0; qt < et.length; qt++)
          if (!Vt[qt])
            for (let tt, Vt = this.dialects[et[qt]]; 65535 != (tt = this.data[Vt++]);)(Ot || (Ot = new Uint8Array(this.maxTerm + 1)))[tt] = 1;
        return new vt(tt, Vt, Ot)
      }
      static deserialize(tt) {
        return new St(tt)
      }
    }

    function ct(tt, et) {
      return tt[et] | tt[et + 1] << 16
    }

    function Rt(tt) {
      if (tt.external) {
        let et = tt.extend ? 1 : 0;
        return (Vt, Ot) => tt.external(Vt, Ot) << 1 | et
      }
      return tt.get
    }
    var It = Vt(41577);
    const Pt = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      Zt = new class {
        constructor(tt) {
          this.start = tt.start, this.shift = tt.shift || Wt, this.reduce = tt.reduce || Wt, this.reuse = tt.reuse || Wt, this.hash = tt.hash || (() => 0), this.strict = !1 !== tt.strict
        }
      }({
        start: !1,
        shift: (tt, et) => 5 == et || 6 == et || 320 == et ? tt : 321 == et,
        strict: !1
      }),
      Lt = new ft(((tt, et) => {
        let {
          next: Vt
        } = tt;
        (125 == Vt || -1 == Vt || et.context) && tt.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      Ft = new ft(((tt, et) => {
        let Vt, {
          next: Ot
        } = tt;
        Pt.indexOf(Ot) > -1 || (47 != Ot || 47 != (Vt = tt.peek(1)) && 42 != Vt) && (125 == Ot || 59 == Ot || -1 == Ot || et.context || tt.acceptToken(316))
      }), {
        contextual: !0
      }),
      kt = new ft(((tt, et) => {
        91 != tt.next || et.context || tt.acceptToken(317)
      }), {
        contextual: !0
      }),
      Gt = new ft(((tt, et) => {
        let {
          next: Vt
        } = tt;
        if (43 == Vt || 45 == Vt) {
          if (tt.advance(), Vt == tt.next) {
            tt.advance();
            let Vt = !et.context && et.canShift(1);
            tt.acceptToken(Vt ? 1 : 2)
          }
        } else 63 == Vt && 46 == tt.peek(1) && (tt.advance(), tt.advance(), (tt.next < 48 || tt.next > 57) && tt.acceptToken(3))
      }), {
        contextual: !0
      });

    function zt(tt, et) {
      return tt >= 65 && tt <= 90 || tt >= 97 && tt <= 122 || 95 == tt || tt >= 192 || !et && tt >= 48 && tt <= 57
    }
    const ot = new ft(((tt, et) => {
        if (60 != tt.next || !et.dialectEnabled(0)) return;
        if (tt.advance(), 47 == tt.next) return;
        let Vt = 0;
        for (; Pt.indexOf(tt.next) > -1;) tt.advance(), Vt++;
        if (zt(tt.next, !0)) {
          for (tt.advance(), Vt++; zt(tt.next, !1);) tt.advance(), Vt++;
          for (; Pt.indexOf(tt.next) > -1;) tt.advance(), Vt++;
          if (44 == tt.next) return;
          for (let et = 0;; et++) {
            if (7 == et) {
              if (!zt(tt.next, !0)) return;
              break
            }
            if (tt.next != "extends".charCodeAt(et)) break;
            tt.advance(), Vt++
          }
        }
        tt.acceptToken(4, -Vt)
      })),
      rt = (0, It.f)({
        "get set async static": It.i.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": It.i.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": It.i.operatorKeyword,
        "let var const using function class extends": It.i.definitionKeyword,
        "import export from": It.i.moduleKeyword,
        "with debugger new": It.i.keyword,
        TemplateString: It.i.special(It.i.string),
        super: It.i.atom,
        BooleanLiteral: It.i.bool,
        this: It.i.self,
        null: It.i.null,
        Star: It.i.modifier,
        VariableName: It.i.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": It.i.function(It.i.variableName),
        VariableDefinition: It.i.definition(It.i.variableName),
        Label: It.i.labelName,
        PropertyName: It.i.propertyName,
        PrivatePropertyName: It.i.special(It.i.propertyName),
        "CallExpression/MemberExpression/PropertyName": It.i.function(It.i.propertyName),
        "FunctionDeclaration/VariableDefinition": It.i.function(It.i.definition(It.i.variableName)),
        "ClassDeclaration/VariableDefinition": It.i.definition(It.i.className),
        "NewExpression/VariableName": It.i.className,
        PropertyDefinition: It.i.definition(It.i.propertyName),
        PrivatePropertyDefinition: It.i.definition(It.i.special(It.i.propertyName)),
        UpdateOp: It.i.updateOperator,
        "LineComment Hashbang": It.i.lineComment,
        BlockComment: It.i.blockComment,
        Number: It.i.number,
        String: It.i.string,
        Escape: It.i.escape,
        ArithOp: It.i.arithmeticOperator,
        LogicOp: It.i.logicOperator,
        BitOp: It.i.bitwiseOperator,
        CompareOp: It.i.compareOperator,
        RegExp: It.i.regexp,
        Equals: It.i.definitionOperator,
        Arrow: It.i.function(It.i.punctuation),
        ": Spread": It.i.punctuation,
        "( )": It.i.paren,
        "[ ]": It.i.squareBracket,
        "{ }": It.i.brace,
        "InterpolationStart InterpolationEnd": It.i.special(It.i.brace),
        ".": It.i.derefOperator,
        ", ;": It.i.separator,
        "@": It.i.meta,
        TypeName: It.i.typeName,
        TypeDefinition: It.i.definition(It.i.typeName),
        "type enum interface implements namespace module declare": It.i.definitionKeyword,
        "abstract global Privacy readonly override": It.i.modifier,
        "is keyof unique infer asserts": It.i.operatorKeyword,
        JSXAttributeValue: It.i.attributeValue,
        JSXText: It.i.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": It.i.angleBracket,
        "JSXIdentifier JSXNameSpacedName": It.i.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": It.i.attributeName,
        "JSXBuiltin/JSXIdentifier": It.i.standard(It.i.tagName)
      }),
      Ut = {
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
      At = {
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
      it = {
        __proto__: null,
        "<": 193
      },
      Yt = St.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: Zt,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [rt],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [Ft, kt, Gt, ot, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Lt, new Et("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new Et("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: tt => Ut[tt] || -1
        }, {
          term: 343,
          get: tt => At[tt] || -1
        }, {
          term: 95,
          get: tt => it[tt] || -1
        }],
        tokenPrec: 15201
      });
    var Bt = Vt(41565),
      pt = Vt(41540),
      xt = Vt(41548),
      Tt = Vt(41532);
    const gt = [(0, Tt.r)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, Tt.r)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, Tt.r)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, Tt.r)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, Tt.r)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, Tt.r)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, Tt.r)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, Tt.r)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, Tt.r)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, Tt.r)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, Tt.r)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      st = gt.concat([(0, Tt.r)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, Tt.r)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, Tt.r)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      nt = new Ot.m,
      te = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function ee(tt) {
      return (et, Vt) => {
        let Ot = et.node.getChild("VariableDefinition");
        return Ot && Vt(Ot, tt), !0
      }
    }
    const Ve = ["FunctionDeclaration"],
      Oe = {
        FunctionDeclaration: ee("function"),
        ClassDeclaration: ee("class"),
        ClassExpression: () => !0,
        EnumDeclaration: ee("constant"),
        TypeAliasDeclaration: ee("type"),
        NamespaceDeclaration: ee("namespace"),
        VariableDefinition(tt, et) {
          tt.matchContext(Ve) || et(tt, "variable")
        },
        TypeDefinition(tt, et) {
          et(tt, "type")
        },
        __proto__: null
      };

    function qe(tt, et) {
      let Vt = nt.get(et);
      if (Vt) return Vt;
      let qt = [],
        Dt = !0;

      function mt(et, Vt) {
        let Ot = tt.sliceString(et.from, et.to);
        qt.push({
          label: Ot,
          type: Vt
        })
      }
      return et.cursor(Ot.d.IncludeAnonymous).iterate((et => {
        if (Dt) Dt = !1;
        else if (et.name) {
          let tt = Oe[et.name];
          if (tt && tt(et, mt) || te.has(et.name)) return !1
        } else if (et.to - et.from > 8192) {
          for (let Vt of qe(tt, et.node)) qt.push(Vt);
          return !1
        }
      })), nt.set(et, qt), qt
    }
    const De = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      me = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function de(tt) {
      let et = (0, Bt.jb)(tt.state).resolveInner(tt.pos, -1);
      if (me.indexOf(et.name) > -1) return null;
      let Vt = "VariableName" == et.name || et.to - et.from < 20 && De.test(tt.state.sliceDoc(et.from, et.to));
      if (!Vt && !tt.explicit) return null;
      let Ot = [];
      for (let qt = et; qt; qt = qt.parent) te.has(qt.name) && (Ot = Ot.concat(qe(tt.state.doc, qt)));
      return {
        options: Ot,
        from: Vt ? et.from : tt.pos,
        validFor: De
      }
    }
    const je = Bt.h.define({
        name: "javascript",
        parser: Yt.configure({
          props: [Bt.O.add({
            IfStatement: (0, Bt.o)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, Bt.o)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: Bt.w,
            SwitchBody: tt => {
              let et = tt.textAfter,
                Vt = /^\s*\}/.test(et),
                Ot = /^\s*(case|default)\b/.test(et);
              return tt.baseIndent + (Vt ? 0 : Ot ? 1 : 2) * tt.unit
            },
            Block: (0, Bt.u)({
              closing: "}"
            }),
            ArrowFunction: tt => tt.baseIndent + tt.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, Bt.o)({
              except: /^\s*{/
            }),
            JSXElement(tt) {
              let et = /^\s*<\//.test(tt.textAfter);
              return tt.lineIndent(tt.node.from) + (et ? 0 : tt.unit)
            },
            JSXEscape(tt) {
              let et = /\s*\}/.test(tt.textAfter);
              return tt.lineIndent(tt.node.from) + (et ? 0 : tt.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": tt => tt.column(tt.node.from) + tt.unit
          }), Bt.F.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": Bt.B,
            BlockComment: tt => ({
              from: tt.from + 2,
              to: tt.to - 2
            }),
            JSXElement(tt) {
              let et = tt.firstChild;
              if (!et || "JSXSelfClosingTag" == et.name) return null;
              let Vt = tt.lastChild;
              return {
                from: et.to,
                to: Vt.type.isError ? tt.to : Vt.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(tt) {
              var et;
              let Vt = null === (et = tt.firstChild) || void 0 === et ? void 0 : et.nextSibling,
                Ot = tt.lastChild;
              return !Vt || Vt.type.isError ? null : {
                from: Vt.to,
                to: Ot.type.isError ? tt.to : Ot.from
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
      He = {
        test: tt => /^JSX/.test(tt.name),
        facet: (0, Bt.t)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      Xe = je.configure({
        dialect: "ts"
      }, "typescript"),
      Qe = je.configure({
        dialect: "jsx",
        props: [Bt.db.add((tt => tt.isTop ? [He] : void 0))]
      }),
      le = je.configure({
        dialect: "jsx ts",
        props: [Bt.db.add((tt => tt.isTop ? [He] : void 0))]
      }, "typescript");
    let Ee = tt => ({
      label: tt,
      type: "keyword"
    });
    const fe = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Ee),
      we = fe.concat(["declare", "implements", "private", "protected", "public"].map(Ee));

    function ye() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        et = tt.jsx ? tt.typescript ? le : Qe : tt.typescript ? Xe : je,
        Vt = tt.typescript ? st.concat(we) : gt.concat(fe);
      return new Bt.i(et, [je.data.of({
        autocomplete: (0, Tt.o)(me, (0, Tt.j)(Vt))
      }), je.data.of({
        autocomplete: de
      }), tt.jsx ? Me : []])
    }

    function Ne(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tt.length;
      for (let Ot = null === et || void 0 === et ? void 0 : et.firstChild; Ot; Ot = Ot.nextSibling)
        if ("JSXIdentifier" == Ot.name || "JSXBuiltin" == Ot.name || "JSXNamespacedName" == Ot.name || "JSXMemberExpression" == Ot.name) return tt.sliceString(Ot.from, Math.min(Ot.to, Vt));
      return ""
    }
    const ae = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Me = xt.j.inputHandler.of(((tt, et, Vt, Ot, qt) => {
        if ((ae ? tt.composing : tt.compositionStarted) || tt.state.readOnly || et != Vt || ">" != Ot && "/" != Ot || !je.isActiveAt(tt.state, et, -1)) return !1;
        let Dt = qt(),
          {
            state: mt
          } = Dt,
          dt = mt.changeByRange((tt => {
            var et;
            let Vt, {
                head: qt
              } = tt,
              Dt = (0, Bt.jb)(mt).resolveInner(qt - 1, -1);
            if ("JSXStartTag" == Dt.name && (Dt = Dt.parent), mt.doc.sliceString(qt - 1, qt) != Ot || "JSXAttributeValue" == Dt.name && Dt.to > qt);
            else {
              if (">" == Ot && "JSXFragmentTag" == Dt.name) return {
                range: tt,
                changes: {
                  from: qt,
                  insert: "</>"
                }
              };
              if ("/" == Ot && "JSXStartCloseTag" == Dt.name) {
                let tt = Dt.parent,
                  Ot = tt.parent;
                if (Ot && tt.from == qt - 2 && ((Vt = Ne(mt.doc, Ot.firstChild, qt)) || "JSXFragmentTag" == (null === (et = Ot.firstChild) || void 0 === et ? void 0 : et.name))) {
                  let tt = `${Vt}>`;
                  return {
                    range: pt.n.cursor(qt + tt.length, -1),
                    changes: {
                      from: qt,
                      insert: tt
                    }
                  }
                }
              } else if (">" == Ot) {
                let et = function(tt) {
                  for (;;) {
                    if ("JSXOpenTag" == tt.name || "JSXSelfClosingTag" == tt.name || "JSXFragmentTag" == tt.name) return tt;
                    if ("JSXEscape" == tt.name || !tt.parent) return null;
                    tt = tt.parent
                  }
                }(Dt);
                if (et && "JSXOpenTag" == et.name && !/^\/?>|^<\//.test(mt.doc.sliceString(qt, qt + 2)) && (Vt = Ne(mt.doc, et, qt))) return {
                  range: tt,
                  changes: {
                    from: qt,
                    insert: `</${Vt}>`
                  }
                }
              }
            }
            return {
              range: tt
            }
          }));
        return !dt.changes.empty && (tt.dispatch([Dt, mt.update(dt, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41565: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => gt,
      C: () => Xe,
      F: () => Tt,
      I: () => Nt,
      J: () => It,
      K: () => Zt,
      O: () => Ft,
      S: () => pt,
      W: () => Pt,
      _: () => Rt,
      c: () => Je,
      cb: () => Ae,
      d: () => Lt,
      db: () => Qt,
      gb: () => he,
      h: () => ft,
      hb: () => yt,
      i: () => St,
      jb: () => wt,
      k: () => ze,
      o: () => Yt,
      q: () => Se,
      t: () => Xt,
      u: () => Ut,
      w: () => it,
      x: () => Me
    });
    var Ot, qt = Vt(41570),
      Dt = Vt(41540),
      mt = Vt(41548),
      dt = Vt(41577),
      jt = Vt(41553);
    const Ht = new qt.f;

    function Xt(tt) {
      return Dt.s.define({
        combine: tt ? et => et.concat(tt) : void 0
      })
    }
    const Qt = new qt.f;
    class lt {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = tt, this.name = Ot, Dt.q.prototype.hasOwnProperty("tree") || Object.defineProperty(Dt.q.prototype, "tree", {
          get() {
            return wt(this)
          }
        }), this.parser = et, this.extension = [Wt.of(this), Dt.q.languageData.of(((tt, et, Vt) => {
          let Ot = Et(tt, et, Vt),
            qt = Ot.type.prop(Ht);
          if (!qt) return [];
          let Dt = tt.facet(qt),
            mt = Ot.type.prop(Qt);
          if (mt) {
            let qt = Ot.resolve(et - Ot.from, Vt);
            for (let et of mt)
              if (et.test(qt, tt)) {
                let Vt = tt.facet(et.facet);
                return "replace" == et.type ? Vt : Vt.concat(Dt)
              }
          }
          return Dt
        }))].concat(Vt)
      }
      isActiveAt(tt, et) {
        return Et(tt, et, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Ht) == this.data
      }
      findRegions(tt) {
        let et = tt.facet(Wt);
        if ((null === et || void 0 === et ? void 0 : et.data) == this.data) return [{
          from: 0,
          to: tt.doc.length
        }];
        if (!et || !et.allowsNesting) return [];
        let Vt = [],
          Ot = (tt, et) => {
            if (tt.prop(Ht) == this.data) return void Vt.push({
              from: et,
              to: et + tt.length
            });
            let Dt = tt.prop(qt.f.mounted);
            if (Dt) {
              if (Dt.tree.prop(Ht) == this.data) {
                if (Dt.overlay)
                  for (let tt of Dt.overlay) Vt.push({
                    from: tt.from + et,
                    to: tt.to + et
                  });
                else Vt.push({
                  from: et,
                  to: et + tt.length
                });
                return
              }
              if (Dt.overlay) {
                let tt = Vt.length;
                if (Ot(Dt.tree, Dt.overlay[0].from + et), Vt.length > tt) return
              }
            }
            for (let Vt = 0; Vt < tt.children.length; Vt++) {
              let Dt = tt.children[Vt];
              Dt instanceof qt.u && Ot(Dt, tt.positions[Vt] + et)
            }
          };
        return Ot(wt(tt), 0), Vt
      }
      get allowsNesting() {
        return !0
      }
    }

    function Et(tt, et, Vt) {
      let Ot = tt.facet(Wt),
        Dt = wt(tt).topNode;
      if (!Ot || Ot.allowsNesting)
        for (let mt = Dt; mt; mt = mt.enter(et, Vt, qt.d.ExcludeBuffers | qt.d.EnterBracketed)) mt.type.isTop && (Dt = mt);
      return Dt
    }
    lt.setState = Dt.I.define();
    class ft extends lt {
      constructor(tt, et, Vt) {
        super(tt, et, [], Vt), this.parser = et
      }
      static define(tt) {
        let et = Xt(tt.languageData);
        return new ft(et, tt.parser.configure({
          props: [Ht.add((tt => tt.isTop ? et : void 0))]
        }), tt.name)
      }
      configure(tt, et) {
        return new ft(this.data, this.parser.configure(tt), et || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function wt(tt) {
      let et = tt.field(lt.state, !1);
      return et ? et.tree : qt.u.empty
    }

    function yt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt.doc.length;
      var Vt;
      return (null === (Vt = tt.field(lt.state, !1)) || void 0 === Vt ? void 0 : Vt.context.isDone(et)) || !1
    }

    function Nt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt.viewport.to,
        Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Ot = function(tt, et) {
          let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Ot;
          let qt = null === (Ot = tt.field(lt.state, !1)) || void 0 === Ot ? void 0 : Ot.context;
          if (!qt) return null;
          let Dt = qt.viewport;
          qt.updateViewport({
            from: 0,
            to: et
          });
          let mt = qt.isDone(et) || qt.work(Vt, et) ? qt.tree : null;
          return qt.updateViewport(Dt), mt
        }(tt.state, et, Vt);
      return Ot != wt(tt.state) && tt.dispatch({}), !!Ot
    }
    class Mt {
      constructor(tt) {
        this.doc = tt, this.cursorPos = 0, this.string = "", this.cursor = tt.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(tt) {
        return this.string = this.cursor.next(tt - this.cursorPos).value, this.cursorPos = tt + this.string.length, this.cursorPos - this.string.length
      }
      chunk(tt) {
        return this.syncTo(tt), this.string
      }
      get lineChunks() {
        return !0
      }
      read(tt, et) {
        let Vt = this.cursorPos - this.string.length;
        return tt < Vt || et >= this.cursorPos ? this.doc.sliceString(tt, et) : this.string.slice(tt - Vt, et - Vt)
      }
    }
    let bt = null;
    class Jt {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Ot = arguments.length > 3 ? arguments[3] : void 0,
          qt = arguments.length > 4 ? arguments[4] : void 0,
          Dt = arguments.length > 5 ? arguments[5] : void 0,
          mt = arguments.length > 6 ? arguments[6] : void 0,
          dt = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = tt, this.state = et, this.fragments = Vt, this.tree = Ot, this.treeLen = qt, this.viewport = Dt, this.skipped = mt, this.scheduleOn = dt, this.parse = null, this.tempSkipped = []
      }
      static create(tt, et, Vt) {
        return new Jt(tt, et, [], qt.u.empty, 0, Vt, [], null)
      }
      startParse() {
        return this.parser.startParse(new Mt(this.state.doc), this.fragments)
      }
      work(tt, et) {
        return null != et && et >= this.state.doc.length && (et = void 0), this.tree != qt.u.empty && this.isDone(null !== et && void 0 !== et ? et : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var Vt;
          if ("number" == typeof tt) {
            let et = Date.now() + tt;
            tt = () => Date.now() > et
          }
          for (this.parse || (this.parse = this.startParse()), null != et && (null == this.parse.stoppedAt || this.parse.stoppedAt > et) && et < this.state.doc.length && this.parse.stopAt(et);;) {
            let Ot = this.parse.advance();
            if (Ot) {
              if (this.fragments = this.withoutTempSkipped(qt.s.addTree(Ot, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (Vt = this.parse.stoppedAt) && void 0 !== Vt ? Vt : this.state.doc.length, this.tree = Ot, this.parse = null, !(this.treeLen < (null !== et && void 0 !== et ? et : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (tt()) return !1
          }
        }))
      }
      takeTree() {
        let tt, et;
        this.parse && (tt = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > tt) && this.parse.stopAt(tt), this.withContext((() => {
          for (; !(et = this.parse.advance()););
        })), this.treeLen = tt, this.tree = et, this.fragments = this.withoutTempSkipped(qt.s.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(tt) {
        let et = bt;
        bt = this;
        try {
          return tt()
        } finally {
          bt = et
        }
      }
      withoutTempSkipped(tt) {
        for (let et; et = this.tempSkipped.pop();) tt = Ct(tt, et.from, et.to);
        return tt
      }
      changes(tt, et) {
        let {
          fragments: Vt,
          tree: Ot,
          treeLen: Dt,
          viewport: mt,
          skipped: dt
        } = this;
        if (this.takeTree(), !tt.empty) {
          let et = [];
          if (tt.iterChangedRanges(((tt, Vt, Ot, qt) => et.push({
              fromA: tt,
              toA: Vt,
              fromB: Ot,
              toB: qt
            }))), Vt = qt.s.applyChanges(Vt, et), Ot = qt.u.empty, Dt = 0, mt = {
              from: tt.mapPos(mt.from, -1),
              to: tt.mapPos(mt.to, 1)
            }, this.skipped.length) {
            dt = [];
            for (let et of this.skipped) {
              let Vt = tt.mapPos(et.from, 1),
                Ot = tt.mapPos(et.to, -1);
              Vt < Ot && dt.push({
                from: Vt,
                to: Ot
              })
            }
          }
        }
        return new Jt(this.parser, et, Vt, Ot, Dt, mt, dt, this.scheduleOn)
      }
      updateViewport(tt) {
        if (this.viewport.from == tt.from && this.viewport.to == tt.to) return !1;
        this.viewport = tt;
        let et = this.skipped.length;
        for (let Vt = 0; Vt < this.skipped.length; Vt++) {
          let {
            from: et,
            to: Ot
          } = this.skipped[Vt];
          et < tt.to && Ot > tt.from && (this.fragments = Ct(this.fragments, et, Ot), this.skipped.splice(Vt--, 1))
        }
        return !(this.skipped.length >= et) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(tt, et) {
        this.skipped.push({
          from: tt,
          to: et
        })
      }
      static getSkippingParser(tt) {
        return new class extends qt.o {
          createParse(et, Vt, Ot) {
            let Dt = Ot[0].from,
              mt = Ot[Ot.length - 1].to;
            return {
              parsedPos: Dt,
              advance() {
                let et = bt;
                if (et) {
                  for (let tt of Ot) et.tempSkipped.push(tt);
                  tt && (et.scheduleOn = et.scheduleOn ? Promise.all([et.scheduleOn, tt]) : tt)
                }
                return this.parsedPos = mt, new qt.u(qt.j.none, [], [], mt - Dt)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(tt) {
        tt = Math.min(tt, this.state.doc.length);
        let et = this.fragments;
        return this.treeLen >= tt && et.length && 0 == et[0].from && et[0].to >= tt
      }
      static get() {
        return bt
      }
    }

    function Ct(tt, et, Vt) {
      return qt.s.applyChanges(tt, [{
        fromA: et,
        toA: Vt,
        fromB: et,
        toB: Vt
      }])
    }
    class ut {
      constructor(tt) {
        this.context = tt, this.tree = tt.tree
      }
      apply(tt) {
        if (!tt.docChanged && this.tree == this.context.tree) return this;
        let et = this.context.changes(tt.changes, tt.state),
          Vt = this.context.treeLen == tt.startState.doc.length ? void 0 : Math.max(tt.changes.mapPos(this.context.treeLen), et.viewport.to);
        return et.work(20, Vt) || et.takeTree(), new ut(et)
      }
      static init(tt) {
        let et = Math.min(3e3, tt.doc.length),
          Vt = Jt.create(tt.facet(Wt).parser, tt, {
            from: 0,
            to: et
          });
        return Vt.work(20, et) || Vt.takeTree(), new ut(Vt)
      }
    }
    lt.state = Dt.J.define({
      create: ut.init,
      update(tt, et) {
        for (let Vt of et.effects)
          if (Vt.is(lt.setState)) return Vt.value;
        return et.startState.facet(Wt) != et.state.facet(Wt) ? ut.init(et.state) : tt.apply(et)
      }
    });
    let Kt = tt => {
      let et = setTimeout((() => tt()), 500);
      return () => clearTimeout(et)
    };
    "undefined" != typeof requestIdleCallback && (Kt = tt => {
      let et = -1,
        Vt = setTimeout((() => {
          et = requestIdleCallback(tt, {
            timeout: 400
          })
        }), 100);
      return () => et < 0 ? clearTimeout(Vt) : cancelIdleCallback(et)
    });
    const ht = "undefined" != typeof navigator && (null === (Ot = navigator.scheduling) || void 0 === Ot ? void 0 : Ot.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      vt = mt.p.fromClass(class {
        constructor(tt) {
          this.view = tt, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(tt) {
          let et = this.view.state.field(lt.state).context;
          (et.updateViewport(tt.view.viewport) || this.view.viewport.to > et.treeLen) && this.scheduleWork(), (tt.docChanged || tt.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(et)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: tt
          } = this.view, et = tt.field(lt.state);
          et.tree == et.context.tree && et.context.isDone(tt.doc.length) || (this.working = Kt(this.work))
        }
        work(tt) {
          this.working = null;
          let et = Date.now();
          if (this.chunkEnd < et && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = et + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: Vt,
            viewport: {
              to: Ot
            }
          } = this.view, qt = Vt.field(lt.state);
          if (qt.tree == qt.context.tree && qt.context.isDone(Ot + 1e5)) return;
          let Dt = Date.now() + Math.min(this.chunkBudget, 100, tt && !ht ? Math.max(25, tt.timeRemaining() - 5) : 1e9),
            mt = qt.context.treeLen < Ot && Vt.doc.length > Ot + 1e3,
            dt = qt.context.work((() => ht && ht() || Date.now() > Dt), Ot + (mt ? 0 : 1e5));
          this.chunkBudget -= Date.now() - et, (dt || this.chunkBudget <= 0) && (qt.context.takeTree(), this.view.dispatch({
            effects: lt.setState.of(new ut(qt.context))
          })), this.chunkBudget > 0 && (!dt || mt) && this.scheduleWork(), this.checkAsyncSchedule(qt.context)
        }
        checkAsyncSchedule(tt) {
          tt.scheduleOn && (this.workScheduled++, tt.scheduleOn.then((() => this.scheduleWork())).catch((tt => (0, mt.ab)(this.view.state, tt))).then((() => this.workScheduled--)), tt.scheduleOn = null)
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
      Wt = Dt.s.define({
        combine: tt => tt.length ? tt[0] : null,
        enables: tt => [lt.state, vt, mt.j.contentAttributes.compute([tt], (et => {
          let Vt = et.facet(tt);
          return Vt && Vt.name ? {
            "data-language": Vt.name
          } : {}
        }))]
      });
    class St {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = tt, this.support = et, this.extension = [tt, et]
      }
    }
    const ct = Dt.s.define(),
      Rt = Dt.s.define({
        combine: tt => {
          if (!tt.length) return "  ";
          let et = tt[0];
          if (!et || /\S/.test(et) || Array.from(et).some((tt => tt != et[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(tt[0]));
          return et
        }
      });

    function It(tt) {
      let et = tt.facet(Rt);
      return 9 == et.charCodeAt(0) ? tt.tabSize * et.length : et.length
    }

    function Pt(tt, et) {
      let Vt = "",
        Ot = tt.tabSize,
        qt = tt.facet(Rt)[0];
      if ("\t" == qt) {
        for (; et >= Ot;) Vt += "\t", et -= Ot;
        qt = " "
      }
      for (let Dt = 0; Dt < et; Dt++) Vt += qt;
      return Vt
    }

    function Zt(tt, et) {
      tt instanceof Dt.q && (tt = new Lt(tt));
      for (let Ot of tt.state.facet(ct)) {
        let Vt = Ot(tt, et);
        if (void 0 !== Vt) return Vt
      }
      let Vt = wt(tt.state);
      return Vt.length >= et ? function(tt, et, Vt) {
        let Ot = et.resolveStack(Vt),
          qt = et.resolveInner(Vt, -1).resolve(Vt, 0).enterUnfinishedNodesBefore(Vt);
        if (qt != Ot.node) {
          let tt = [];
          for (let et = qt; et && !(et.from < Ot.node.from || et.to > Ot.node.to || et.from == Ot.node.from && et.type == Ot.node.type); et = et.parent) tt.push(et);
          for (let et = tt.length - 1; et >= 0; et--) Ot = {
            node: tt[et],
            next: Ot
          }
        }
        return kt(Ot, tt, Vt)
      }(tt, Vt, et) : null
    }
    class Lt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = tt, this.options = et, this.unit = It(tt)
      }
      lineAt(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Vt = this.state.doc.lineAt(tt),
          {
            simulateBreak: Ot,
            simulateDoubleBreak: qt
          } = this.options;
        return null != Ot && Ot >= Vt.from && Ot <= Vt.to ? qt && Ot == tt ? {
          text: "",
          from: tt
        } : (et < 0 ? Ot < tt : Ot <= tt) ? {
          text: Vt.text.slice(Ot - Vt.from),
          from: Ot
        } : {
          text: Vt.text.slice(0, Ot - Vt.from),
          from: Vt.from
        } : Vt
      }
      textAfterPos(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && tt == this.options.simulateBreak) return "";
        let {
          text: Vt,
          from: Ot
        } = this.lineAt(tt, et);
        return Vt.slice(tt - Ot, Math.min(Vt.length, tt + 100 - Ot))
      }
      column(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Vt,
            from: Ot
          } = this.lineAt(tt, et),
          qt = this.countColumn(Vt, tt - Ot),
          Dt = this.options.overrideIndentation ? this.options.overrideIndentation(Ot) : -1;
        return Dt > -1 && (qt += Dt - this.countColumn(Vt, Vt.search(/\S|$/))), qt
      }
      countColumn(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt.length;
        return (0, Dt.Z)(tt, this.state.tabSize, et)
      }
      lineIndent(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Vt,
            from: Ot
          } = this.lineAt(tt, et),
          qt = this.options.overrideIndentation;
        if (qt) {
          let tt = qt(Ot);
          if (tt > -1) return tt
        }
        return this.countColumn(Vt, Vt.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const Ft = new qt.f;

    function kt(tt, et, Vt) {
      for (let Ot = tt; Ot; Ot = Ot.next) {
        let tt = Gt(Ot.node);
        if (tt) return tt(ot.create(et, Vt, Ot))
      }
      return 0
    }

    function Gt(tt) {
      let et = tt.type.prop(Ft);
      if (et) return et;
      let Vt, Ot = tt.firstChild;
      if (Ot && (Vt = Ot.type.prop(qt.f.closedBy))) {
        let et = tt.lastChild,
          Ot = et && Vt.indexOf(et.name) > -1;
        return tt => At(tt, !0, 1, void 0, Ot && ! function(tt) {
          return tt.pos == tt.options.simulateBreak && tt.options.simulateDoubleBreak
        }(tt) ? et.from : void 0)
      }
      return null == tt.parent ? zt : null
    }

    function zt() {
      return 0
    }
    class ot extends Lt {
      constructor(tt, et, Vt) {
        super(tt.state, tt.options), this.base = tt, this.pos = et, this.context = Vt
      }
      get node() {
        return this.context.node
      }
      static create(tt, et, Vt) {
        return new ot(tt, et, Vt)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(tt) {
        let et = this.state.doc.lineAt(tt.from);
        for (;;) {
          let Vt = tt.resolve(et.from);
          for (; Vt.parent && Vt.parent.from == Vt.from;) Vt = Vt.parent;
          if (rt(Vt, tt)) break;
          et = this.state.doc.lineAt(Vt.from)
        }
        return this.lineIndent(et.from)
      }
      continue () {
        return kt(this.context.next, this.base, this.pos)
      }
    }

    function rt(tt, et) {
      for (let Vt = et; Vt; Vt = Vt.parent)
        if (tt == Vt) return !0;
      return !1
    }

    function Ut(tt) {
      let {
        closing: et,
        align: Vt = !0,
        units: Ot = 1
      } = tt;
      return tt => At(tt, Vt, Ot, et)
    }

    function At(tt, et, Vt, Ot, qt) {
      let Dt = tt.textAfter,
        mt = Dt.match(/^\s*/)[0].length,
        dt = Ot && Dt.slice(mt, mt + Ot.length) == Ot || qt == tt.pos + mt,
        jt = et ? function(tt) {
          let et = tt.node,
            Vt = et.childAfter(et.from),
            Ot = et.lastChild;
          if (!Vt) return null;
          let qt = tt.options.simulateBreak,
            Dt = tt.state.doc.lineAt(Vt.from),
            mt = null == qt || qt <= Dt.from ? Dt.to : Math.min(Dt.to, qt);
          for (let dt = Vt.to;;) {
            let tt = et.childAfter(dt);
            if (!tt || tt == Ot) return null;
            if (!tt.type.isSkipped) {
              if (tt.from >= mt) return null;
              let et = /^ */.exec(Dt.text.slice(Vt.to - Dt.from))[0].length;
              return {
                from: Vt.from,
                to: Vt.to + et
              }
            }
            dt = tt.to
          }
        }(tt) : null;
      return jt ? dt ? tt.column(jt.from) : tt.column(jt.to) : tt.baseIndent + (dt ? 0 : tt.unit * Vt)
    }
    const it = tt => tt.baseIndent;

    function Yt() {
      let {
        except: tt,
        units: et = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Vt => {
        let Ot = tt && tt.test(Vt.textAfter);
        return Vt.baseIndent + (Ot ? 0 : et * Vt.unit)
      }
    }
    const Bt = 200;

    function pt() {
      return Dt.q.transactionFilter.of((tt => {
        if (!tt.docChanged || !tt.isUserEvent("input.type") && !tt.isUserEvent("input.complete")) return tt;
        let et = tt.startState.languageDataAt("indentOnInput", tt.startState.selection.main.head);
        if (!et.length) return tt;
        let Vt = tt.newDoc,
          {
            head: Ot
          } = tt.newSelection.main,
          qt = Vt.lineAt(Ot);
        if (Ot > qt.from + Bt) return tt;
        let Dt = Vt.sliceString(qt.from, Ot);
        if (!et.some((tt => tt.test(Dt)))) return tt;
        let {
          state: mt
        } = tt, dt = -1, jt = [];
        for (let {
            head: Ht
          }
          of mt.selection.nw) {
          let tt = mt.doc.lineAt(Ht);
          if (tt.from == dt) continue;
          dt = tt.from;
          let et = Zt(mt, tt.from);
          if (null == et) continue;
          let Vt = /^\s*/.exec(tt.text)[0],
            Ot = Pt(mt, et);
          Vt != Ot && jt.push({
            from: tt.from,
            to: tt.from + Vt.length,
            insert: Ot
          })
        }
        return jt.length ? [tt, {
          changes: jt,
          sequential: !0
        }] : tt
      }))
    }
    const xt = Dt.s.define(),
      Tt = new qt.f;

    function gt(tt) {
      let et = tt.firstChild,
        Vt = tt.lastChild;
      return et && et.to < Vt.from ? {
        from: et.to,
        to: Vt.type.isError ? tt.to : Vt.from
      } : null
    }

    function st(tt) {
      let et = tt.lastChild;
      return et && et.to == tt.to && et.type.isError
    }

    function nt(tt, et, Vt) {
      for (let Ot of tt.facet(xt)) {
        let qt = Ot(tt, et, Vt);
        if (qt) return qt
      }
      return function(tt, et, Vt) {
        let Ot = wt(tt);
        if (Ot.length < Vt) return null;
        let qt = null;
        for (let Dt = Ot.resolveStack(Vt, 1); Dt; Dt = Dt.next) {
          let mt = Dt.node;
          if (mt.to <= Vt || mt.from > Vt) continue;
          if (qt && mt.from < et) break;
          let dt = mt.type.prop(Tt);
          if (dt && (mt.to < Ot.length - 50 || Ot.length == tt.doc.length || !st(mt))) {
            let Ot = dt(mt, tt);
            Ot && Ot.from <= Vt && Ot.from >= et && Ot.to > Vt && (qt = Ot)
          }
        }
        return qt
      }(tt, et, Vt)
    }

    function te(tt, et) {
      let Vt = et.mapPos(tt.from, 1),
        Ot = et.mapPos(tt.to, -1);
      return Vt >= Ot ? void 0 : {
        from: Vt,
        to: Ot
      }
    }
    const ee = Dt.I.define({
        map: te
      }),
      Ve = Dt.I.define({
        map: te
      });

    function Oe(tt) {
      let et = [];
      for (let {
          head: Vt
        }
        of tt.state.selection.nw) et.some((tt => tt.from <= Vt && tt.to >= Vt)) || et.push(tt.lineBlockAt(Vt));
      return et
    }
    const qe = Dt.J.define({
      create: () => mt.e.none,
      update(tt, et) {
        et.isUserEvent("delete") && et.changes.iterChangedRanges(((et, Vt) => tt = De(tt, et, Vt))), tt = tt.map(et.changes);
        for (let Vt of et.effects)
          if (Vt.is(ee) && !de(tt, Vt.value.from, Vt.value.to)) {
            let {
              preparePlaceholder: Ot
            } = et.state.facet(le), qt = Ot ? mt.e.replace({
              widget: new ye(Ot(et.state, Vt.value))
            }) : we;
            tt = tt.update({
              add: [qt.range(Vt.value.from, Vt.value.to)]
            })
          } else Vt.is(Ve) && (tt = tt.update({
            filter: (tt, et) => Vt.value.from != tt || Vt.value.to != et,
            filterFrom: Vt.value.from,
            filterTo: Vt.value.to
          }));
        return et.selection && (tt = De(tt, et.selection.main.head)), tt
      },
      provide: tt => mt.j.NO.from(tt),
      toJSON(tt, et) {
        let Vt = [];
        return tt.between(0, et.doc.length, ((tt, et) => {
          Vt.push(tt, et)
        })), Vt
      },
      fromJSON(tt) {
        if (!Array.isArray(tt) || tt.length % 2) throw new RangeError("Invalid JSON for fold state");
        let et = [];
        for (let Vt = 0; Vt < tt.length;) {
          let Ot = tt[Vt++],
            qt = tt[Vt++];
          if ("number" != typeof Ot || "number" != typeof qt) throw new RangeError("Invalid JSON for fold state");
          et.push(we.range(Ot, qt))
        }
        return mt.e.set(et, !0)
      }
    });

    function De(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : et,
        Ot = !1;
      return tt.between(et, Vt, ((tt, qt) => {
        tt < Vt && qt > et && (Ot = !0)
      })), Ot ? tt.update({
        filterFrom: et,
        filterTo: Vt,
        filter: (tt, Ot) => tt >= Vt || Ot <= et
      }) : tt
    }

    function me(tt, et, Vt) {
      var Ot;
      let qt = null;
      return null === (Ot = tt.field(qe, !1)) || void 0 === Ot || Ot.between(et, Vt, ((tt, et) => {
        (!qt || qt.from > tt) && (qt = {
          from: tt,
          to: et
        })
      })), qt
    }

    function de(tt, et, Vt) {
      let Ot = !1;
      return tt.between(et, et, ((tt, qt) => {
        tt == et && qt == Vt && (Ot = !0)
      })), Ot
    }

    function je(tt, et) {
      return tt.field(qe, !1) ? et : et.concat(Dt.I.appendConfig.of(Ee()))
    }

    function He(tt, et) {
      let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Ot = tt.state.doc.lineAt(et.from).number,
        qt = tt.state.doc.lineAt(et.to).number;
      return mt.j.announce.of(`${tt.state.phrase(Vt?"Folded lines":"Unfolded lines")} ${Ot} ${tt.state.phrase("to")} ${qt}.`)
    }
    const Xe = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: tt => {
          for (let et of Oe(tt)) {
            let Vt = nt(tt.state, et.from, et.to);
            if (Vt) return tt.dispatch({
              effects: je(tt.state, [ee.of(Vt), He(tt, Vt)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: tt => {
          if (!tt.state.field(qe, !1)) return !1;
          let et = [];
          for (let Vt of Oe(tt)) {
            let Ot = me(tt.state, Vt.from, Vt.to);
            Ot && et.push(Ve.of(Ot), He(tt, Ot, !1))
          }
          return et.length && tt.dispatch({
            effects: et
          }), et.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: tt => {
          let {
            state: et
          } = tt, Vt = [];
          for (let Ot = 0; Ot < et.doc.length;) {
            let qt = tt.lineBlockAt(Ot),
              Dt = nt(et, qt.from, qt.to);
            Dt && Vt.push(ee.of(Dt)), Ot = (Dt ? tt.lineBlockAt(Dt.to) : qt).to + 1
          }
          return Vt.length && tt.dispatch({
            effects: je(tt.state, Vt)
          }), !!Vt.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: tt => {
          let et = tt.state.field(qe, !1);
          if (!et || !et.size) return !1;
          let Vt = [];
          return et.between(0, tt.state.doc.length, ((tt, et) => {
            Vt.push(Ve.of({
              from: tt,
              to: et
            }))
          })), tt.dispatch({
            effects: Vt
          }), !0
        }
      }],
      Qe = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      le = Dt.s.define({
        combine: tt => (0, Dt.Y)(tt, Qe)
      });

    function Ee(tt) {
      let et = [qe, be];
      return tt && et.push(le.of(tt)), et
    }

    function fe(tt, et) {
      let {
        state: Vt
      } = tt, Ot = Vt.facet(le), qt = et => {
        let Vt = tt.lineBlockAt(tt.posAtDOM(et.target)),
          Ot = me(tt.state, Vt.from, Vt.to);
        Ot && tt.dispatch({
          effects: Ve.of(Ot)
        }), et.preventDefault()
      };
      if (Ot.placeholderDOM) return Ot.placeholderDOM(tt, qt, et);
      let Dt = document.createElement("span");
      return Dt.textContent = Ot.placeholderText, Dt.setAttribute("aria-label", Vt.phrase("folded code")), Dt.title = Vt.phrase("unfold"), Dt.className = "cm-foldPlaceholder", Dt.onclick = qt, Dt
    }
    const we = mt.e.replace({
      widget: new class extends mt.r {
        toDOM(tt) {
          return fe(tt, null)
        }
      }
    });
    class ye extends mt.r {
      constructor(tt) {
        super(), this.value = tt
      }
      eq(tt) {
        return this.value == tt.value
      }
      toDOM(tt) {
        return fe(tt, this.value)
      }
    }
    const Ne = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class ae extends mt.m {
      constructor(tt, et) {
        super(), this.config = tt, this.open = et
      }
      eq(tt) {
        return this.config == tt.config && this.open == tt.open
      }
      toDOM(tt) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let et = document.createElement("span");
        return et.textContent = this.open ? this.config.openText : this.config.closedText, et.title = tt.state.phrase(this.open ? "Fold line" : "Unfold line"), et
      }
    }

    function Me() {
      let tt = {
          ...Ne,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        et = new ae(tt, !0),
        Vt = new ae(tt, !1),
        Ot = mt.p.fromClass(class {
          constructor(tt) {
            this.from = tt.viewport.from, this.markers = this.buildMarkers(tt)
          }
          update(et) {
            (et.docChanged || et.viewportChanged || et.startState.facet(Wt) != et.state.facet(Wt) || et.startState.field(qe, !1) != et.state.field(qe, !1) || wt(et.startState) != wt(et.state) || tt.foldingChanged(et)) && (this.markers = this.buildMarkers(et.view))
          }
          buildMarkers(tt) {
            let Ot = new Dt.x;
            for (let qt of tt.viewportLineBlocks) {
              let Dt = me(tt.state, qt.from, qt.to) ? Vt : nt(tt.state, qt.from, qt.to) ? et : null;
              Dt && Ot.add(qt.from, qt.from, Dt)
            }
            return Ot.finish()
          }
        }),
        {
          domEventHandlers: qt
        } = tt;
      return [Ot, (0, mt.L)({
        class: "cm-foldGutter",
        markers(tt) {
          var et;
          return (null === (et = tt.plugin(Ot)) || void 0 === et ? void 0 : et.markers) || Dt.B.empty
        },
        initialSpacer: () => new ae(tt, !1),
        domEventHandlers: {
          ...qt,
          click: (tt, et, Vt) => {
            if (qt.click && qt.click(tt, et, Vt)) return !0;
            let Ot = me(tt.state, et.from, et.to);
            if (Ot) return tt.dispatch({
              effects: Ve.of(Ot)
            }), !0;
            let Dt = nt(tt.state, et.from, et.to);
            return !!Dt && (tt.dispatch({
              effects: ee.of(Dt)
            }), !0)
          }
        }
      }), Ee()]
    }
    const be = mt.j.baseTheme({
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
    class Je {
      constructor(tt, et) {
        let Vt;

        function Ot(tt) {
          let et = jt.c.newName();
          return (Vt || (Vt = Object.create(null)))["." + et] = tt, et
        }
        this.specs = tt;
        const qt = "string" == typeof et.all ? et.all : et.all ? Ot(et.all) : void 0,
          Dt = et.scope;
        this.scope = Dt instanceof lt ? tt => tt.prop(Ht) == Dt.data : Dt ? tt => tt == Dt : void 0, this.style = (0, dt.h)(tt.map((tt => ({
          tag: tt.tag,
          class: tt.class || Ot(Object.assign({}, tt, {
            tag: null
          }))
        }))), {
          all: qt
        }).style, this.module = Vt ? new jt.c(Vt) : null, this.themeType = et.themeType
      }
      static define(tt, et) {
        return new Je(tt, et || {})
      }
    }
    const Ce = Dt.s.define(),
      ue = Dt.s.define({
        combine: tt => tt.length ? [tt[0]] : null
      });

    function Ke(tt) {
      let et = tt.facet(Ce);
      return et.length ? et : tt.facet(ue)
    }

    function he(tt, et) {
      let Vt, Ot = [We];
      return tt instanceof Je && (tt.module && Ot.push(mt.j.styleModule.of(tt.module)), Vt = tt.themeType), (null === et || void 0 === et ? void 0 : et.fallback) ? Ot.push(ue.of(tt)) : Vt ? Ot.push(Ce.computeN([mt.j.darkTheme], (et => et.facet(mt.j.darkTheme) == ("dark" == Vt) ? [tt] : []))) : Ot.push(Ce.of(tt)), Ot
    }
    class ve {
      constructor(tt) {
        this.markCache = Object.create(null), this.tree = wt(tt.state), this.NO = this.buildDeco(tt, Ke(tt.state)), this.decoratedTo = tt.viewport.to
      }
      update(tt) {
        let et = wt(tt.state),
          Vt = Ke(tt.state),
          Ot = Vt != Ke(tt.startState),
          {
            viewport: qt
          } = tt.view,
          Dt = tt.changes.mapPos(this.decoratedTo, 1);
        et.length < qt.to && !Ot && et.type == this.tree.type && Dt >= qt.to ? (this.NO = this.NO.map(tt.changes), this.decoratedTo = Dt) : (et != this.tree || tt.viewportChanged || Ot) && (this.tree = et, this.NO = this.buildDeco(tt.view, Vt), this.decoratedTo = qt.to)
      }
      buildDeco(tt, et) {
        if (!et || !this.tree.length) return mt.e.none;
        let Vt = new Dt.x;
        for (let {
            from: Ot,
            to: qt
          }
          of tt.Z4)(0, dt.d)(this.tree, et, ((tt, et, Ot) => {
          Vt.add(tt, et, this.markCache[Ot] || (this.markCache[Ot] = mt.e.mark({
            class: Ot
          })))
        }), Ot, qt);
        return Vt.finish()
      }
    }
    const We = Dt.u.high(mt.p.fromClass(ve, {
        NO: tt => tt.NO
      })),
      Se = Je.define([{
        tag: dt.i.meta,
        color: "#404740"
      }, {
        tag: dt.i.link,
        textDecoration: "underline"
      }, {
        tag: dt.i.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: dt.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: dt.i.strong,
        fontWeight: "bold"
      }, {
        tag: dt.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: dt.i.keyword,
        color: "#708"
      }, {
        tag: [dt.i.atom, dt.i.bool, dt.i.url, dt.i.contentSeparator, dt.i.labelName],
        color: "#219"
      }, {
        tag: [dt.i.literal, dt.i.inserted],
        color: "#164"
      }, {
        tag: [dt.i.string, dt.i.deleted],
        color: "#a11"
      }, {
        tag: [dt.i.regexp, dt.i.escape, dt.i.special(dt.i.string)],
        color: "#e40"
      }, {
        tag: dt.i.definition(dt.i.variableName),
        color: "#00f"
      }, {
        tag: dt.i.local(dt.i.variableName),
        color: "#30a"
      }, {
        tag: [dt.i.typeName, dt.i.namespace],
        color: "#085"
      }, {
        tag: dt.i.className,
        color: "#167"
      }, {
        tag: [dt.i.special(dt.i.variableName), dt.i.macroName],
        color: "#256"
      }, {
        tag: dt.i.definition(dt.i.propertyName),
        color: "#00c"
      }, {
        tag: dt.i.comment,
        color: "#940"
      }, {
        tag: dt.i.invalid,
        color: "#f00"
      }]),
      ce = mt.j.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Re = 1e4,
      Ie = "()[]{}",
      Pe = Dt.s.define({
        combine: tt => (0, Dt.Y)(tt, {
          afterCursor: !0,
          brackets: Ie,
          maxScanDistance: Re,
          renderMatch: Fe
        })
      }),
      Ze = mt.e.mark({
        class: "cm-matchingBracket"
      }),
      Le = mt.e.mark({
        class: "cm-nonmatchingBracket"
      });

    function Fe(tt) {
      let et = [],
        Vt = tt.matched ? Ze : Le;
      return et.push(Vt.range(tt.start.from, tt.start.to)), tt.end && et.push(Vt.range(tt.end.from, tt.end.to)), et
    }

    function ke(tt) {
      let et = [],
        Vt = tt.facet(Pe);
      for (let Ot of tt.selection.nw) {
        if (!Ot.empty) continue;
        let qt = Ae(tt, Ot.head, -1, Vt) || Ot.head > 0 && Ae(tt, Ot.head - 1, 1, Vt) || Vt.afterCursor && (Ae(tt, Ot.head, 1, Vt) || Ot.head < tt.doc.length && Ae(tt, Ot.head + 1, -1, Vt));
        qt && (et = et.concat(Vt.renderMatch(qt, tt)))
      }
      return mt.e.set(et, !0)
    }
    const Ge = [mt.p.fromClass(class {
      constructor(tt) {
        this.paused = !1, this.NO = ke(tt.state)
      }
      update(tt) {
        (tt.docChanged || tt.selectionSet || this.paused) && (tt.view.composing ? (this.NO = this.NO.map(tt.changes), this.paused = !0) : (this.NO = ke(tt.state), this.paused = !1))
      }
    }, {
      NO: tt => tt.NO
    }), ce];

    function ze() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Pe.of(tt), Ge]
    }
    const oe = new qt.f;

    function re(tt, et, Vt) {
      let Ot = tt.prop(et < 0 ? qt.f.openedBy : qt.f.closedBy);
      if (Ot) return Ot;
      if (1 == tt.name.length) {
        let Ot = Vt.indexOf(tt.name);
        if (Ot > -1 && Ot % 2 == (et < 0 ? 1 : 0)) return [Vt[Ot + et]]
      }
      return null
    }

    function Ue(tt) {
      let et = tt.type.prop(oe);
      return et ? et(tt.node) : tt
    }

    function Ae(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        qt = Ot.maxScanDistance || Re,
        Dt = Ot.brackets || Ie,
        mt = wt(tt),
        dt = mt.resolveInner(et, Vt);
      for (let jt = dt; jt; jt = jt.parent) {
        let Ot = re(jt.type, Vt, Dt);
        if (Ot && jt.from < jt.to) {
          let qt = Ue(jt);
          if (qt && (Vt > 0 ? et >= qt.from && et < qt.to : et > qt.from && et <= qt.to)) return ie(tt, et, Vt, jt, qt, Ot, Dt)
        }
      }
      return function(tt, et, Vt, Ot, qt, Dt, mt) {
        if (Vt < 0 ? !et : et == tt.doc.length) return null;
        let dt = Vt < 0 ? tt.sliceDoc(et - 1, et) : tt.sliceDoc(et, et + 1),
          jt = mt.indexOf(dt);
        if (jt < 0 || jt % 2 == 0 != Vt > 0) return null;
        let Ht = {
            from: Vt < 0 ? et - 1 : et,
            to: Vt > 0 ? et + 1 : et
          },
          Xt = tt.doc.iterRange(et, Vt > 0 ? tt.doc.length : 0),
          Qt = 0;
        for (let lt = 0; !Xt.next().done && lt <= Dt;) {
          let tt = Xt.value;
          Vt < 0 && (lt += tt.length);
          let Dt = et + lt * Vt;
          for (let et = Vt > 0 ? 0 : tt.length - 1, dt = Vt > 0 ? tt.length : -1; et != dt; et += Vt) {
            let dt = mt.indexOf(tt[et]);
            if (!(dt < 0 || Ot.resolveInner(Dt + et, 1).type != qt))
              if (dt % 2 == 0 == Vt > 0) Qt++;
              else {
                if (1 == Qt) return {
                  start: Ht,
                  end: {
                    from: Dt + et,
                    to: Dt + et + 1
                  },
                  matched: dt >> 1 == jt >> 1
                };
                Qt--
              }
          }
          Vt > 0 && (lt += tt.length)
        }
        return Xt.done ? {
          start: Ht,
          matched: !1
        } : null
      }(tt, et, Vt, mt, dt.type, qt, Dt)
    }

    function ie(tt, et, Vt, Ot, qt, Dt, mt) {
      let dt = Ot.parent,
        jt = {
          from: qt.from,
          to: qt.to
        },
        Ht = 0,
        Xt = null === dt || void 0 === dt ? void 0 : dt.cursor();
      if (Xt && (Vt < 0 ? Xt.childBefore(Ot.from) : Xt.childAfter(Ot.to)))
        do {
          if (Vt < 0 ? Xt.to <= Ot.from : Xt.from >= Ot.to) {
            if (0 == Ht && Dt.indexOf(Xt.type.name) > -1 && Xt.from < Xt.to) {
              let tt = Ue(Xt);
              return {
                start: jt,
                end: tt ? {
                  from: tt.from,
                  to: tt.to
                } : void 0,
                matched: !0
              }
            }
            if (re(Xt.type, Vt, mt)) Ht++;
            else if (re(Xt.type, -Vt, mt)) {
              if (0 == Ht) {
                let tt = Ue(Xt);
                return {
                  start: jt,
                  end: tt && tt.from < tt.to ? {
                    from: tt.from,
                    to: tt.to
                  } : void 0,
                  matched: !1
                }
              }
              Ht--
            }
          }
        } while (Vt < 0 ? Xt.prevSibling() : Xt.nextSibling());
      return {
        start: jt,
        matched: !1
      }
    }
    const Ye = Object.create(null),
      Be = [qt.j.none],
      pe = [],
      xe = Object.create(null),
      Te = Object.create(null);
    for (let [ne, tV] of [
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
      ]) Te[ne] = se(Ye, tV);

    function ge(tt, et) {
      pe.indexOf(tt) > -1 || (pe.push(tt), console.warn(et))
    }

    function se(tt, et) {
      let Vt = [];
      for (let qt of et.split(" ")) {
        let et = [];
        for (let Vt of qt.split(".")) {
          let Ot = tt[Vt] || dt.i[Vt];
          Ot ? "function" == typeof Ot ? et.length ? et = et.map(Ot) : ge(Vt, `Modifier ${Vt} used at start of tag`) : et.length ? ge(Vt, `Tag ${Vt} used as modifier`) : et = Array.isArray(Ot) ? Ot : [Ot] : ge(Vt, `Unknown highlighting tag ${Vt}`)
        }
        for (let tt of et) Vt.push(tt)
      }
      if (!Vt.length) return 0;
      let Ot = et.replace(/ /g, "_"),
        Dt = Ot + " " + Vt.map((tt => tt.id)),
        mt = xe[Dt];
      if (mt) return mt.id;
      let jt = xe[Dt] = qt.j.define({
        id: Be.length,
        name: Ot,
        props: [(0, dt.f)({
          [Ot]: Vt
        })]
      });
      return Be.push(jt), jt.id
    }
    mt.i.RTL, mt.i.LTR
  },
  41598: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => bt,
      e: () => Kt
    });
    var Ot = Vt(41548),
      qt = Vt(41540),
      Dt = Vt(41561);
    class mt {
      constructor(tt, et, Vt) {
        this.from = tt, this.to = et, this.diagnostic = Vt
      }
    }
    class dt {
      constructor(tt, et, Vt) {
        this.diagnostics = tt, this.panel = et, this.selected = Vt
      }
      static init(tt, et, Vt) {
        let Dt = Vt.facet(Ct).markerFilter;
        Dt && (tt = Dt(tt, Vt));
        let mt = tt.slice().sort(((tt, et) => tt.from - et.from || tt.to - et.to)),
          Ht = new qt.x,
          Xt = [],
          Qt = 0,
          lt = Vt.doc.iter(),
          Et = 0,
          ft = Vt.doc.length;
        for (let qt = 0;;) {
          let tt, et, Vt = qt == mt.length ? null : mt[qt];
          if (!Vt && !Xt.length) break;
          if (Xt.length) tt = Qt, et = Xt.reduce(((tt, et) => Math.min(tt, et.to)), Vt && Vt.from > tt ? Vt.from : 1e8);
          else {
            if (tt = Vt.from, tt > ft) break;
            et = Vt.to, Xt.push(Vt), qt++
          }
          for (; qt < mt.length;) {
            let Vt = mt[qt];
            if (Vt.from != tt || !(Vt.to > Vt.from || Vt.to == tt)) {
              et = Math.min(Vt.from, et);
              break
            }
            Xt.push(Vt), qt++, et = Math.min(Vt.to, et)
          }
          et = Math.min(et, ft);
          let Dt = !1;
          if (Xt.some((Vt => Vt.from == tt && (Vt.to == et || et == ft))) && (Dt = tt == et, !Dt && et - tt < 10)) {
            let Vt = tt - (Et + lt.value.length);
            Vt > 0 && (lt.next(Vt), Et = tt);
            for (let Ot = tt;;) {
              if (Ot >= et) {
                Dt = !0;
                break
              }
              if (!lt.lineBreak && Et + lt.value.length > Ot) break;
              Ot = Et + lt.value.length, Et += lt.value.length, lt.next()
            }
          }
          let dt = Lt(Xt);
          if (Dt) Ht.add(tt, tt, Ot.e.widget({
            widget: new Wt(dt),
            diagnostics: Xt.slice()
          }));
          else {
            let Vt = Xt.reduce(((tt, et) => et.markClass ? tt + " " + et.markClass : tt), "");
            Ht.add(tt, et, Ot.e.mark({
              class: "cm-lintRange cm-lintRange-" + dt + Vt,
              diagnostics: Xt.slice(),
              inclusiveEnd: Xt.some((tt => tt.to > et))
            }))
          }
          if (Qt = et, Qt == ft) break;
          for (let Ot = 0; Ot < Xt.length; Ot++) Xt[Ot].to <= Qt && Xt.splice(Ot--, 1)
        }
        let wt = Ht.finish();
        return new dt(wt, et, jt(wt))
      }
    }

    function jt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ot = null;
      return tt.between(Vt, 1e9, ((tt, Vt, qt) => {
        let {
          spec: Dt
        } = qt;
        if (!(et && Dt.diagnostics.indexOf(et) < 0))
          if (Ot) {
            if (Dt.diagnostics.indexOf(Ot.diagnostic) < 0) return !1;
            Ot = new mt(Ot.from, Vt, Ot.diagnostic)
          } else Ot = new mt(tt, Vt, et || Dt.diagnostics[0])
      })), Ot
    }

    function Ht(tt, et) {
      let Vt = et.pos,
        Ot = et.end || Vt,
        qt = tt.state.facet(Ct).hideOn(tt, Vt, Ot);
      if (null != qt) return qt;
      let Dt = tt.startState.doc.lineAt(et.pos);
      return !(!tt.effects.some((tt => tt.is(Qt))) && !tt.changes.touchesRange(Dt.from, Math.max(Dt.to, Ot)))
    }

    function Xt(tt, et) {
      return tt.field(ft, !1) ? et : et.concat(qt.I.appendConfig.of(Ft))
    }
    const Qt = qt.I.define(),
      lt = qt.I.define(),
      Et = qt.I.define(),
      ft = qt.J.define({
        create: () => new dt(Ot.e.none, null, null),
        update(tt, et) {
          if (et.docChanged && tt.diagnostics.size) {
            let Vt = tt.diagnostics.map(et.changes),
              Ot = null,
              qt = tt.panel;
            if (tt.selected) {
              let qt = et.changes.mapPos(tt.selected.from, 1);
              Ot = jt(Vt, tt.selected.diagnostic, qt) || jt(Vt, null, qt)
            }!Vt.size && qt && et.state.facet(Ct).autoPanel && (qt = null), tt = new dt(Vt, qt, Ot)
          }
          for (let Vt of et.effects)
            if (Vt.is(Qt)) {
              let Ot = et.state.facet(Ct).autoPanel ? Vt.value.length ? ct.open : null : tt.panel;
              tt = dt.init(Vt.value, Ot, et.state)
            } else Vt.is(lt) ? tt = new dt(tt.diagnostics, Vt.value ? ct.open : null, tt.selected) : Vt.is(Et) && (tt = new dt(tt.diagnostics, tt.panel, Vt.value));
          return tt
        },
        provide: tt => [Ot.qb.from(tt, (tt => tt.panel)), Ot.j.NO.from(tt, (tt => tt.diagnostics))]
      });
    const wt = Ot.e.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function yt(tt, et, Vt) {
      let Ot, {
          diagnostics: qt
        } = tt.state.field(ft),
        Dt = -1,
        mt = -1;
      qt.between(et - (Vt < 0 ? 1 : 0), et + (Vt > 0 ? 1 : 0), ((tt, qt, dt) => {
        let {
          spec: jt
        } = dt;
        if (et >= tt && et <= qt && (tt == qt || (et > tt || Vt > 0) && (et < qt || Vt < 0))) return Ot = jt.diagnostics, Dt = tt, mt = qt, !1
      }));
      let dt = tt.state.facet(Ct).tooltipFilter;
      return Ot && dt && (Ot = dt(Ot, tt.state)), Ot ? {
        pos: Dt,
        end: mt,
        above: tt.state.doc.lineAt(Dt).to < mt,
        create: () => ({
          dom: Nt(tt, Ot)
        })
      } : null
    }

    function Nt(tt, et) {
      return (0, Dt.b)("ul", {
        class: "cm-tooltip-lint"
      }, et.map((et => vt(tt, et, !1))))
    }
    const Mt = tt => {
        let et = tt.state.field(ft, !1);
        return !(!et || !et.panel) && (tt.dispatch({
          effects: lt.of(!1)
        }), !0)
      },
      bt = [{
        key: "Mod-Shift-m",
        run: tt => {
          let et = tt.state.field(ft, !1);
          et && et.panel || tt.dispatch({
            effects: Xt(tt.state, [lt.of(!0)])
          });
          let Vt = (0, Ot.F)(tt, ct.open);
          return Vt && Vt.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: tt => {
          let et = tt.state.field(ft, !1);
          if (!et) return !1;
          let Vt = tt.state.selection.main,
            Ot = jt(et.diagnostics, null, Vt.to + 1);
          return !(!Ot && (Ot = jt(et.diagnostics, null, 0), !Ot || Ot.from == Vt.from && Ot.to == Vt.to)) && (tt.dispatch({
            selection: {
              anchor: Ot.from,
              head: Ot.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      Jt = Ot.p.fromClass(class {
        constructor(tt) {
          this.view = tt, this.timeout = -1, this.set = !0;
          let {
            delay: et
          } = tt.state.facet(Ct);
          this.lintTime = Date.now() + et, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, et)
        }
        run() {
          clearTimeout(this.timeout);
          let tt = Date.now();
          if (tt < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - tt);
          else {
            this.set = !1;
            let {
              state: tt
            } = this.view, {
              sources: et
            } = tt.facet(Ct);
            et.length && function(tt, et, Vt) {
              let Ot = [],
                qt = -1;
              for (let Dt of tt) Dt.then((Vt => {
                Ot.push(Vt), clearTimeout(qt), Ot.length == tt.length ? et(Ot) : qt = setTimeout((() => et(Ot)), 200)
              }), Vt)
            }(et.map((tt => Promise.resolve(tt(this.view)))), (et => {
              this.view.state.doc == tt.doc && this.view.dispatch(function(tt, et) {
                return {
                  effects: Xt(tt, [Qt.of(et)])
                }
              }(this.view.state, et.reduce(((tt, et) => tt.concat(et)))))
            }), (tt => {
              (0, Ot.ab)(this.view.state, tt)
            }))
          }
        }
        update(tt) {
          let et = tt.state.facet(Ct);
          (tt.docChanged || et != tt.startState.facet(Ct) || et.needsRefresh && et.needsRefresh(tt)) && (this.lintTime = Date.now() + et.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, et.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const Ct = qt.s.define({
      combine: tt => ({
        sources: tt.map((tt => tt.source)).filter((tt => null != tt)),
        ...(0, qt.Y)(tt.map((tt => tt.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: ut,
          tooltipFilter: ut,
          needsRefresh: (tt, et) => tt ? et ? Vt => tt(Vt) || et(Vt) : tt : et,
          hideOn: (tt, et) => tt ? et ? (Vt, Ot, qt) => tt(Vt, Ot, qt) || et(Vt, Ot, qt) : tt : et,
          autoPanel: (tt, et) => tt || et
        })
      })
    });

    function ut(tt, et) {
      return tt ? et ? (Vt, Ot) => et(tt(Vt, Ot), Ot) : tt : et
    }

    function Kt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [Ct.of({
        source: tt,
        config: et
      }), Jt, Ft]
    }

    function ht(tt) {
      let et = [];
      if (tt) tt: for (let {
          name: Vt
        }
        of tt) {
        for (let tt = 0; tt < Vt.length; tt++) {
          let Ot = Vt[tt];
          if (/[a-zA-Z]/.test(Ot) && !et.some((tt => tt.toLowerCase() == Ot.toLowerCase()))) {
            et.push(Ot);
            continue tt
          }
        }
        et.push("")
      }
      return et
    }

    function vt(tt, et, Vt) {
      var Ot;
      let qt = Vt ? ht(et.actions) : [];
      return (0, Dt.b)("li", {
        class: "cm-diagnostic cm-diagnostic-" + et.severity
      }, (0, Dt.b)("span", {
        class: "cm-diagnosticText"
      }, et.renderMessage ? et.renderMessage(tt) : et.message), null === (Ot = et.actions) || void 0 === Ot ? void 0 : Ot.map(((Vt, Ot) => {
        let mt = !1,
          dt = Ot => {
            if (Ot.preventDefault(), mt) return;
            mt = !0;
            let qt = jt(tt.state.field(ft).diagnostics, et);
            qt && Vt.apply(tt, qt.from, qt.to)
          },
          {
            name: Ht
          } = Vt,
          Xt = qt[Ot] ? Ht.indexOf(qt[Ot]) : -1,
          Qt = Xt < 0 ? Ht : [Ht.slice(0, Xt), (0, Dt.b)("u", Ht.slice(Xt, Xt + 1)), Ht.slice(Xt + 1)],
          lt = Vt.markClass ? " " + Vt.markClass : "";
        return (0, Dt.b)("button", {
          type: "button",
          class: "cm-diagnosticAction" + lt,
          onclick: dt,
          onmousedown: dt,
          "aria-label": ` Action: ${Ht}${Xt<0?"":` (access key "${qt[Ot]})"`}.`
        }, Qt)
      })), et.source && (0, Dt.b)("div", {
        class: "cm-diagnosticSource"
      }, et.source))
    }
    class Wt extends Ot.r {
      constructor(tt) {
        super(), this.sev = tt
      }
      eq(tt) {
        return tt.sev == this.sev
      }
      toDOM() {
        return (0, Dt.b)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class St {
      constructor(tt, et) {
        this.diagnostic = et, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = vt(tt, et, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class ct {
      constructor(tt) {
        this.view = tt, this.items = [];
        this.list = (0, Dt.b)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: et => {
            if (!(et.ctrlKey || et.altKey || et.metaKey)) {
              if (27 == et.keyCode) Mt(this.view), this.view.focus();
              else if (38 == et.keyCode || 33 == et.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == et.keyCode || 34 == et.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == et.keyCode) this.moveSelection(0);
              else if (35 == et.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == et.keyCode) this.view.focus();
              else {
                if (!(et.keyCode >= 65 && et.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: Vt
                  } = this.items[this.selectedIndex], Ot = ht(Vt.actions);
                  for (let qt = 0; qt < Ot.length; qt++)
                    if (Ot[qt].toUpperCase().charCodeAt(0) == et.keyCode) {
                      let et = jt(this.view.state.field(ft).diagnostics, Vt);
                      et && Vt.actions[qt].apply(tt, et.from, et.to)
                    }
                }
              }
              et.preventDefault()
            }
          },
          onclick: tt => {
            for (let et = 0; et < this.items.length; et++) this.items[et].dom.contains(tt.target) && this.moveSelection(et)
          }
        }), this.dom = (0, Dt.b)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, Dt.b)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => Mt(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let tt = this.view.state.field(ft).selected;
        if (!tt) return -1;
        for (let et = 0; et < this.items.length; et++)
          if (this.items[et].diagnostic == tt.diagnostic) return et;
        return -1
      }
      update() {
        let {
          diagnostics: tt,
          selected: et
        } = this.view.state.field(ft), Vt = 0, Ot = !1, qt = null, Dt = new Set;
        for (tt.between(0, this.view.state.doc.length, ((tt, mt, dt) => {
            let {
              spec: jt
            } = dt;
            for (let Ht of jt.diagnostics) {
              if (Dt.has(Ht)) continue;
              Dt.add(Ht);
              let tt, mt = -1;
              for (let et = Vt; et < this.items.length; et++)
                if (this.items[et].diagnostic == Ht) {
                  mt = et;
                  break
                } mt < 0 ? (tt = new St(this.view, Ht), this.items.splice(Vt, 0, tt), Ot = !0) : (tt = this.items[mt], mt > Vt && (this.items.splice(Vt, mt - Vt), Ot = !0)), et && tt.diagnostic == et.diagnostic ? tt.dom.hasAttribute("aria-selected") || (tt.dom.setAttribute("aria-selected", "true"), qt = tt) : tt.dom.hasAttribute("aria-selected") && tt.dom.removeAttribute("aria-selected"), Vt++
            }
          })); Vt < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Ot = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new St(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Ot = !0), qt ? (this.list.setAttribute("aria-activedescendant", qt.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: qt.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: tt => {
            let {
              sel: et,
              panel: Vt
            } = tt, Ot = Vt.height / this.list.offsetHeight;
            et.top < Vt.top ? this.list.scrollTop -= (Vt.top - et.top) / Ot : et.bottom > Vt.bottom && (this.list.scrollTop += (et.bottom - Vt.bottom) / Ot)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Ot && this.sync()
      }
      sync() {
        let tt = this.list.firstChild;

        function et() {
          let et = tt;
          tt = et.nextSibling, et.remove()
        }
        for (let Vt of this.items)
          if (Vt.dom.parentNode == this.list) {
            for (; tt != Vt.dom;) et();
            tt = Vt.dom.nextSibling
          } else this.list.insertBefore(Vt.dom, tt);
        for (; tt;) et()
      }
      moveSelection(tt) {
        if (this.selectedIndex < 0) return;
        let et = jt(this.view.state.field(ft).diagnostics, this.items[tt].diagnostic);
        et && this.view.dispatch({
          selection: {
            anchor: et.from,
            head: et.to
          },
          scrollIntoView: !0,
          effects: Et.of(et)
        })
      }
      static open(tt) {
        return new ct(tt)
      }
    }

    function Rt(tt) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(tt)}</svg>')`
    }

    function It(tt) {
      return Rt(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${tt}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Pt = Ot.j.baseTheme({
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
        backgroundImage: It("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: It("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: It("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: It("#66d")
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

    function Zt(tt) {
      return "error" == tt ? 4 : "warning" == tt ? 3 : "info" == tt ? 2 : 1
    }

    function Lt(tt) {
      let et = "hint",
        Vt = 1;
      for (let Ot of tt) {
        let tt = Zt(Ot.severity);
        tt > Vt && (Vt = tt, et = Ot.severity)
      }
      return et
    }
    Ot.m;
    const Ft = [ft, Ot.j.NO.compute([ft], (tt => {
      let {
        selected: et,
        panel: Vt
      } = tt.field(ft);
      return et && Vt && et.from != et.to ? Ot.e.set([wt.range(et.from, et.to)]) : Ot.e.none
    })), (0, Ot.T)(yt, {
      hideOn: Ht
    }), Pt]
  },
  41593: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => nt,
      i: () => Nt,
      j: () => te
    });
    var Ot = Vt(41548),
      qt = Vt(41540),
      Dt = Vt(41561);
    const mt = "function" == typeof String.prototype.normalize ? tt => tt.normalize("NFKD") : tt => tt;
    class dt {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt.length,
          qt = arguments.length > 4 ? arguments[4] : void 0,
          Dt = arguments.length > 5 ? arguments[5] : void 0;
        this.test = Dt, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = tt.iterRange(Vt, Ot), this.bufferStart = Vt, this.normalize = qt ? tt => qt(mt(tt)) : mt, this.query = this.normalize(et)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, qt.S)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let tt = this.peek();
          if (tt < 0) return this.done = !0, this;
          let et = (0, qt.fb)(tt),
            Vt = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, qt.W)(tt);
          let Ot = this.normalize(et);
          if (Ot.length)
            for (let qt = 0, Dt = Vt;; qt++) {
              let tt = Ot.charCodeAt(qt),
                mt = this.match(tt, Dt, this.bufferPos + this.bufferStart);
              if (qt == Ot.length - 1) {
                if (mt) return this.value = mt, this;
                break
              }
              Dt == Vt && qt < et.length && et.charCodeAt(qt) == tt && Dt++
            }
        }
      }
      match(tt, et, Vt) {
        let Ot = null;
        for (let qt = 0; qt < this.matches.length; qt += 2) {
          let et = this.matches[qt],
            Dt = !1;
          this.query.charCodeAt(et) == tt && (et == this.query.length - 1 ? Ot = {
            from: this.matches[qt + 1],
            to: Vt
          } : (this.matches[qt]++, Dt = !0)), Dt || (this.matches.splice(qt, 2), qt -= 2)
        }
        return this.query.charCodeAt(0) == tt && (1 == this.query.length ? Ot = {
          from: et,
          to: Vt
        } : this.matches.push(1, et)), Ot && this.test && !this.test(Ot.from, Ot.to, this.buffer, this.bufferStart) && (Ot = null), Ot
      }
    }
    "undefined" != typeof Symbol && (dt.prototype[Symbol.iterator] = function() {
      return this
    });
    const jt = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      Ht = "gm" + (null == /x/.unicode ? "" : "u");
    class Xt {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tt.length;
        if (this.text = tt, this.to = qt, this.curLine = "", this.done = !1, this.value = jt, /\\[sWDnr]|\n|\r|\[\^/.test(et)) return new Et(tt, et, Vt, Ot, qt);
        this.re = new RegExp(et, Ht + ((null === Vt || void 0 === Vt ? void 0 : Vt.ignoreCase) ? "i" : "")), this.test = null === Vt || void 0 === Vt ? void 0 : Vt.test, this.iter = tt.iter();
        let Dt = tt.lineAt(Ot);
        this.curLineStart = Dt.from, this.matchPos = ft(tt, Ot), this.getLine(this.curLineStart)
      }
      getLine(tt) {
        this.iter.next(tt), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let tt = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = tt;
          let et = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (et) {
            let Vt = this.curLineStart + et.index,
              Ot = Vt + et[0].length;
            if (this.matchPos = ft(this.text, Ot + (Vt == Ot ? 1 : 0)), Vt == this.curLineStart + this.curLine.length && this.nextLine(), (Vt < Ot || Vt > this.value.to) && (!this.test || this.test(Vt, Ot, et))) return this.value = {
              from: Vt,
              to: Ot,
              match: et
            }, this;
            tt = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), tt = 0
          }
        }
      }
    }
    const Qt = new WeakMap;
    class lt {
      constructor(tt, et) {
        this.from = tt, this.text = et
      }
      get to() {
        return this.from + this.text.length
      }
      static get(tt, et, Vt) {
        let Ot = Qt.get(tt);
        if (!Ot || Ot.from >= Vt || Ot.to <= et) {
          let Ot = new lt(et, tt.sliceString(et, Vt));
          return Qt.set(tt, Ot), Ot
        }
        if (Ot.from == et && Ot.to == Vt) return Ot;
        let {
          text: qt,
          from: Dt
        } = Ot;
        return Dt > et && (qt = tt.sliceString(et, Dt) + qt, Dt = et), Ot.to < Vt && (qt += tt.sliceString(Ot.to, Vt)), Qt.set(tt, new lt(Dt, qt)), new lt(et, qt.slice(et - Dt, Vt - Dt))
      }
    }
    class Et {
      constructor(tt, et, Vt, Ot, qt) {
        this.text = tt, this.to = qt, this.done = !1, this.value = jt, this.matchPos = ft(tt, Ot), this.re = new RegExp(et, Ht + ((null === Vt || void 0 === Vt ? void 0 : Vt.ignoreCase) ? "i" : "")), this.test = null === Vt || void 0 === Vt ? void 0 : Vt.test, this.flat = lt.get(tt, Ot, this.chunkEnd(Ot + 5e3))
      }
      chunkEnd(tt) {
        return tt >= this.to ? this.to : this.text.lineAt(tt).to
      }
      next() {
        for (;;) {
          let tt = this.re.lastIndex = this.matchPos - this.flat.from,
            et = this.re.exec(this.flat.text);
          if (et && !et[0] && et.index == tt && (this.re.lastIndex = tt + 1, et = this.re.exec(this.flat.text)), et) {
            let tt = this.flat.from + et.index,
              Vt = tt + et[0].length;
            if ((this.flat.to >= this.to || et.index + et[0].length <= this.flat.text.length - 10) && (!this.test || this.test(tt, Vt, et))) return this.value = {
              from: tt,
              to: Vt,
              match: et
            }, this.matchPos = ft(this.text, Vt + (tt == Vt ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = lt.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function ft(tt, et) {
      if (et >= tt.length) return et;
      let Vt, Ot = tt.lineAt(et);
      for (; et < Ot.to && (Vt = Ot.text.charCodeAt(et - Ot.from)) >= 56320 && Vt < 57344;) et++;
      return et
    }
    "undefined" != typeof Symbol && (Xt.prototype[Symbol.iterator] = Et.prototype[Symbol.iterator] = function() {
      return this
    });
    const wt = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      yt = qt.s.define({
        combine: tt => (0, qt.Y)(tt, wt, {
          highlightWordAroundCursor: (tt, et) => tt || et,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function Nt(tt) {
      let et = [ut, Ct];
      return tt && et.push(yt.of(tt)), et
    }
    const Mt = Ot.e.mark({
        class: "cm-selectionMatch"
      }),
      bt = Ot.e.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function Jt(tt, et, Vt, Ot) {
      return (0 == Vt || tt(et.sliceDoc(Vt - 1, Vt)) != qt.k.Word) && (Ot == et.doc.length || tt(et.sliceDoc(Ot, Ot + 1)) != qt.k.Word)
    }
    const Ct = Ot.p.fromClass(class {
        constructor(tt) {
          this.NO = this.getDeco(tt)
        }
        update(tt) {
          (tt.selectionSet || tt.docChanged || tt.viewportChanged) && (this.NO = this.getDeco(tt.view))
        }
        getDeco(tt) {
          let et = tt.state.facet(yt),
            {
              state: Vt
            } = tt,
            Dt = Vt.selection;
          if (Dt.nw.length > 1) return Ot.e.none;
          let mt, jt = Dt.main,
            Ht = null;
          if (jt.empty) {
            if (!et.highlightWordAroundCursor) return Ot.e.none;
            let tt = Vt.wordAt(jt.head);
            if (!tt) return Ot.e.none;
            Ht = Vt.charCategorizer(jt.head), mt = Vt.sliceDoc(tt.from, tt.to)
          } else {
            let tt = jt.to - jt.from;
            if (tt < et.minSelectionLength || tt > 200) return Ot.e.none;
            if (et.wholeWords) {
              if (mt = Vt.sliceDoc(jt.from, jt.to), Ht = Vt.charCategorizer(jt.head), !Jt(Ht, Vt, jt.from, jt.to) || ! function(tt, et, Vt, Ot) {
                  return tt(et.sliceDoc(Vt, Vt + 1)) == qt.k.Word && tt(et.sliceDoc(Ot - 1, Ot)) == qt.k.Word
                }(Ht, Vt, jt.from, jt.to)) return Ot.e.none
            } else if (mt = Vt.sliceDoc(jt.from, jt.to), !mt) return Ot.e.none
          }
          let Xt = [];
          for (let qt of tt.Z4) {
            let tt = new dt(Vt.doc, mt, qt.from, qt.to);
            for (; !tt.next().done;) {
              let {
                from: qt,
                to: Dt
              } = tt.value;
              if ((!Ht || Jt(Ht, Vt, qt, Dt)) && (jt.empty && qt <= jt.from && Dt >= jt.to ? Xt.push(bt.range(qt, Dt)) : (qt >= jt.to || Dt <= jt.from) && Xt.push(Mt.range(qt, Dt)), Xt.length > et.maxMatches)) return Ot.e.none
            }
          }
          return Ot.e.set(Xt)
        }
      }, {
        NO: tt => tt.NO
      }),
      ut = Ot.j.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const Kt = qt.s.define({
      combine: tt => (0, qt.Y)(tt, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: tt => new ee(tt),
        scrollToMatch: tt => Ot.j.scrollIntoView(tt)
      })
    });
    class ht {
      constructor(tt) {
        this.search = tt.search, this.caseSensitive = !!tt.caseSensitive, this.literal = !!tt.literal, this.regexp = !!tt.regexp, this.replace = tt.replace || "", this.valid = !!this.search && (!this.regexp || function(tt) {
          try {
            return new RegExp(tt, Ht), !0
          } catch (et) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!tt.wholeWord, this.test = tt.test
      }
      unquote(tt) {
        return this.literal ? tt : tt.replace(/\\([nrt\\])/g, ((tt, et) => "n" == et ? "\n" : "r" == et ? "\r" : "t" == et ? "\t" : "\\"))
      }
      eq(tt) {
        return this.search == tt.search && this.replace == tt.replace && this.caseSensitive == tt.caseSensitive && this.regexp == tt.regexp && this.wholeWord == tt.wholeWord && this.test == tt.test
      }
      create() {
        return this.regexp ? new Pt(this) : new St(this)
      }
      getCursor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = tt.doc ? tt : qt.q.create({
            doc: tt
          });
        return null == Vt && (Vt = Ot.doc.length), this.regexp ? ct(this, Ot, et, Vt) : Wt(this, Ot, et, Vt)
      }
    }
    class vt {
      constructor(tt) {
        this.spec = tt
      }
    }

    function Wt(tt, et, Vt, Ot) {
      let Dt;
      var mt, jt;
      return tt.wholeWord && (mt = et.doc, jt = et.charCategorizer(et.selection.main.head), Dt = (tt, et, Vt, Ot) => ((Ot > tt || Ot + Vt.length < et) && (Ot = Math.max(0, tt - 2), Vt = mt.sliceString(Ot, Math.min(mt.length, et + 2))), (jt(Rt(Vt, tt - Ot)) != qt.k.Word || jt(It(Vt, tt - Ot)) != qt.k.Word) && (jt(It(Vt, et - Ot)) != qt.k.Word || jt(Rt(Vt, et - Ot)) != qt.k.Word))), tt.test && (Dt = function(tt, et, Vt) {
        return (Ot, qt, Dt, mt) => {
          if (Vt && !Vt(Ot, qt, Dt, mt)) return !1;
          let dt = Ot >= mt && qt <= mt + Dt.length ? Dt.slice(Ot - mt, qt - mt) : et.doc.sliceString(Ot, qt);
          return tt(dt, et, Ot, qt)
        }
      }(tt.test, et, Dt)), new dt(et.doc, tt.unquoted, Vt, Ot, tt.caseSensitive ? void 0 : tt => tt.toLowerCase(), Dt)
    }
    class St extends vt {
      constructor(tt) {
        super(tt)
      }
      nextMatch(tt, et, Vt) {
        let Ot = Wt(this.spec, tt, Vt, tt.doc.length).nextOverlapping();
        if (Ot.done) {
          let Vt = Math.min(tt.doc.length, et + this.spec.unquoted.length);
          Ot = Wt(this.spec, tt, 0, Vt).nextOverlapping()
        }
        return Ot.done || Ot.value.from == et && Ot.value.to == Vt ? null : Ot.value
      }
      prevMatchInRange(tt, et, Vt) {
        for (let Ot = Vt;;) {
          let Vt = Math.max(et, Ot - 1e4 - this.spec.unquoted.length),
            qt = Wt(this.spec, tt, Vt, Ot),
            Dt = null;
          for (; !qt.nextOverlapping().done;) Dt = qt.value;
          if (Dt) return Dt;
          if (Vt == et) return null;
          Ot -= 1e4
        }
      }
      prevMatch(tt, et, Vt) {
        let Ot = this.prevMatchInRange(tt, 0, et);
        return Ot || (Ot = this.prevMatchInRange(tt, Math.max(0, Vt - this.spec.unquoted.length), tt.doc.length)), !Ot || Ot.from == et && Ot.to == Vt ? null : Ot
      }
      getReplacement(tt) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(tt, et) {
        let Vt = Wt(this.spec, tt, 0, tt.doc.length),
          Ot = [];
        for (; !Vt.next().done;) {
          if (Ot.length >= et) return null;
          Ot.push(Vt.value)
        }
        return Ot
      }
      highlight(tt, et, Vt, Ot) {
        let qt = Wt(this.spec, tt, Math.max(0, et - this.spec.unquoted.length), Math.min(Vt + this.spec.unquoted.length, tt.doc.length));
        for (; !qt.next().done;) Ot(qt.value.from, qt.value.to)
      }
    }

    function ct(tt, et, Vt, Ot) {
      let Dt;
      var mt;
      return tt.wholeWord && (mt = et.charCategorizer(et.selection.main.head), Dt = (tt, et, Vt) => !Vt[0].length || (mt(Rt(Vt.input, Vt.index)) != qt.k.Word || mt(It(Vt.input, Vt.index)) != qt.k.Word) && (mt(It(Vt.input, Vt.index + Vt[0].length)) != qt.k.Word || mt(Rt(Vt.input, Vt.index + Vt[0].length)) != qt.k.Word)), tt.test && (Dt = function(tt, et, Vt) {
        return (Ot, qt, Dt) => (!Vt || Vt(Ot, qt, Dt)) && tt(Dt[0], et, Ot, qt)
      }(tt.test, et, Dt)), new Xt(et.doc, tt.search, {
        ignoreCase: !tt.caseSensitive,
        test: Dt
      }, Vt, Ot)
    }

    function Rt(tt, et) {
      return tt.slice((0, qt.$)(tt, et, !1), et)
    }

    function It(tt, et) {
      return tt.slice(et, (0, qt.$)(tt, et))
    }
    class Pt extends vt {
      nextMatch(tt, et, Vt) {
        let Ot = ct(this.spec, tt, Vt, tt.doc.length).next();
        return Ot.done && (Ot = ct(this.spec, tt, 0, et).next()), Ot.done ? null : Ot.value
      }
      prevMatchInRange(tt, et, Vt) {
        for (let Ot = 1;; Ot++) {
          let qt = Math.max(et, Vt - 1e4 * Ot),
            Dt = ct(this.spec, tt, qt, Vt),
            mt = null;
          for (; !Dt.next().done;) mt = Dt.value;
          if (mt && (qt == et || mt.from > qt + 10)) return mt;
          if (qt == et) return null
        }
      }
      prevMatch(tt, et, Vt) {
        return this.prevMatchInRange(tt, 0, et) || this.prevMatchInRange(tt, Vt, tt.doc.length)
      }
      getReplacement(tt) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((et, Vt) => {
          if ("&" == Vt) return tt.match[0];
          if ("$" == Vt) return "$";
          for (let Ot = Vt.length; Ot > 0; Ot--) {
            let et = +Vt.slice(0, Ot);
            if (et > 0 && et < tt.match.length) return tt.match[et] + Vt.slice(Ot)
          }
          return et
        }))
      }
      matchAll(tt, et) {
        let Vt = ct(this.spec, tt, 0, tt.doc.length),
          Ot = [];
        for (; !Vt.next().done;) {
          if (Ot.length >= et) return null;
          Ot.push(Vt.value)
        }
        return Ot
      }
      highlight(tt, et, Vt, Ot) {
        let qt = ct(this.spec, tt, Math.max(0, et - 250), Math.min(Vt + 250, tt.doc.length));
        for (; !qt.next().done;) Ot(qt.value.from, qt.value.to)
      }
    }
    const Zt = qt.I.define(),
      Lt = qt.I.define(),
      Ft = qt.J.define({
        create: tt => new kt(xt(tt).create(), null),
        update(tt, et) {
          for (let Vt of et.effects) Vt.is(Zt) ? tt = new kt(Vt.value.create(), tt.panel) : Vt.is(Lt) && (tt = new kt(tt.query, Vt.value ? pt : null));
          return tt
        },
        provide: tt => Ot.qb.from(tt, (tt => tt.panel))
      });
    class kt {
      constructor(tt, et) {
        this.query = tt, this.panel = et
      }
    }
    const Gt = Ot.e.mark({
        class: "cm-searchMatch"
      }),
      zt = Ot.e.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      ot = Ot.p.fromClass(class {
        constructor(tt) {
          this.view = tt, this.NO = this.highlight(tt.state.field(Ft))
        }
        update(tt) {
          let et = tt.state.field(Ft);
          (et != tt.startState.field(Ft) || tt.docChanged || tt.selectionSet || tt.viewportChanged) && (this.NO = this.highlight(et))
        }
        highlight(tt) {
          let {
            query: et,
            panel: Vt
          } = tt;
          if (!Vt || !et.spec.valid) return Ot.e.none;
          let {
            view: Dt
          } = this, mt = new qt.x;
          for (let Ot = 0, qt = Dt.Z4, dt = qt.length; Ot < dt; Ot++) {
            let {
              from: tt,
              to: Vt
            } = qt[Ot];
            for (; Ot < dt - 1 && Vt > qt[Ot + 1].from - 500;) Vt = qt[++Ot].to;
            et.highlight(Dt.state, tt, Vt, ((tt, et) => {
              let Vt = Dt.state.selection.nw.some((Vt => Vt.from == tt && Vt.to == et));
              mt.add(tt, et, Vt ? zt : Gt)
            }))
          }
          return mt.finish()
        }
      }, {
        NO: tt => tt.NO
      });

    function rt(tt) {
      return et => {
        let Vt = et.state.field(Ft, !1);
        return Vt && Vt.query.spec.valid ? tt(et, Vt) : st(et)
      }
    }
    const Ut = rt(((tt, et) => {
        let {
          query: Vt
        } = et, {
          to: Ot
        } = tt.state.selection.main, Dt = Vt.nextMatch(tt.state, Ot, Ot);
        if (!Dt) return !1;
        let mt = qt.n.single(Dt.from, Dt.to),
          dt = tt.state.facet(Kt);
        return tt.dispatch({
          selection: mt,
          effects: [De(tt, Dt), dt.scrollToMatch(mt.main, tt)],
          userEvent: "select.search"
        }), gt(tt), !0
      })),
      At = rt(((tt, et) => {
        let {
          query: Vt
        } = et, {
          state: Ot
        } = tt, {
          from: Dt
        } = Ot.selection.main, mt = Vt.prevMatch(Ot, Dt, Dt);
        if (!mt) return !1;
        let dt = qt.n.single(mt.from, mt.to),
          jt = tt.state.facet(Kt);
        return tt.dispatch({
          selection: dt,
          effects: [De(tt, mt), jt.scrollToMatch(dt.main, tt)],
          userEvent: "select.search"
        }), gt(tt), !0
      })),
      it = rt(((tt, et) => {
        let {
          query: Vt
        } = et, Ot = Vt.matchAll(tt.state, 1e3);
        return !(!Ot || !Ot.length) && (tt.dispatch({
          selection: qt.n.create(Ot.map((tt => qt.n.range(tt.from, tt.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      Yt = rt(((tt, et) => {
        let {
          query: Vt
        } = et, {
          state: Dt
        } = tt, {
          from: mt,
          to: dt
        } = Dt.selection.main;
        if (Dt.readOnly) return !1;
        let jt = Vt.nextMatch(Dt, mt, mt);
        if (!jt) return !1;
        let Ht, Xt, Qt = jt,
          lt = [],
          Et = [];
        Qt.from == mt && Qt.to == dt && (Xt = Dt.toText(Vt.getReplacement(Qt)), lt.push({
          from: Qt.from,
          to: Qt.to,
          insert: Xt
        }), Qt = Vt.nextMatch(Dt, Qt.from, Qt.to), Et.push(Ot.j.announce.of(Dt.phrase("replaced match on line $", Dt.doc.lineAt(mt).number) + ".")));
        let ft = tt.state.changes(lt);
        return Qt && (Ht = qt.n.single(Qt.from, Qt.to).map(ft), Et.push(De(tt, Qt)), Et.push(Dt.facet(Kt).scrollToMatch(Ht.main, tt))), tt.dispatch({
          changes: ft,
          selection: Ht,
          effects: Et,
          userEvent: "input.replace"
        }), !0
      })),
      Bt = rt(((tt, et) => {
        let {
          query: Vt
        } = et;
        if (tt.state.readOnly) return !1;
        let qt = Vt.matchAll(tt.state, 1e9).map((tt => {
          let {
            from: et,
            to: Ot
          } = tt;
          return {
            from: et,
            to: Ot,
            insert: Vt.getReplacement(tt)
          }
        }));
        if (!qt.length) return !1;
        let Dt = tt.state.phrase("replaced $ matches", qt.length) + ".";
        return tt.dispatch({
          changes: qt,
          effects: Ot.j.announce.of(Dt),
          userEvent: "input.replace.all"
        }), !0
      }));

    function pt(tt) {
      return tt.state.facet(Kt).createPanel(tt)
    }

    function xt(tt, et) {
      var Vt, Ot, qt, Dt, mt;
      let dt = tt.selection.main,
        jt = dt.empty || dt.to > dt.from + 100 ? "" : tt.sliceDoc(dt.from, dt.to);
      if (et && !jt) return et;
      let Ht = tt.facet(Kt);
      return new ht({
        search: (null !== (Vt = null === et || void 0 === et ? void 0 : et.literal) && void 0 !== Vt ? Vt : Ht.literal) ? jt : jt.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Ot = null === et || void 0 === et ? void 0 : et.caseSensitive) && void 0 !== Ot ? Ot : Ht.caseSensitive,
        literal: null !== (qt = null === et || void 0 === et ? void 0 : et.literal) && void 0 !== qt ? qt : Ht.literal,
        regexp: null !== (Dt = null === et || void 0 === et ? void 0 : et.regexp) && void 0 !== Dt ? Dt : Ht.regexp,
        wholeWord: null !== (mt = null === et || void 0 === et ? void 0 : et.wholeWord) && void 0 !== mt ? mt : Ht.wholeWord
      })
    }

    function Tt(tt) {
      let et = (0, Ot.F)(tt, pt);
      return et && et.dom.querySelector("[main-field]")
    }

    function gt(tt) {
      let et = Tt(tt);
      et && et == tt.root.activeElement && et.select()
    }
    const st = tt => {
        let et = tt.state.field(Ft, !1);
        if (et && et.panel) {
          let Vt = Tt(tt);
          if (Vt && Vt != tt.root.activeElement) {
            let Ot = xt(tt.state, et.query.spec);
            Ot.valid && tt.dispatch({
              effects: Zt.of(Ot)
            }), Vt.focus(), Vt.select()
          }
        } else tt.dispatch({
          effects: [Lt.of(!0), et ? Zt.of(xt(tt.state, et.query.spec)) : qt.I.appendConfig.of(de)]
        });
        return !0
      },
      nt = tt => {
        let et = tt.state.field(Ft, !1);
        if (!et || !et.panel) return !1;
        let Vt = (0, Ot.F)(tt, pt);
        return Vt && Vt.dom.contains(tt.root.activeElement) && tt.focus(), tt.dispatch({
          effects: Lt.of(!1)
        }), !0
      },
      te = [{
        key: "Mod-f",
        run: st,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: Ut,
        shift: At,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: Ut,
        shift: At,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: nt,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt, Ot = et.selection;
          if (Ot.nw.length > 1 || Ot.main.empty) return !1;
          let {
            from: Dt,
            to: mt
          } = Ot.main, jt = [], Ht = 0;
          for (let Xt = new dt(et.doc, et.sliceDoc(Dt, mt)); !Xt.next().done;) {
            if (jt.length > 1e3) return !1;
            Xt.value.from == Dt && (Ht = jt.length), jt.push(qt.n.range(Xt.value.from, Xt.value.to))
          }
          return Vt(et.update({
            selection: qt.n.create(jt, Ht),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: tt => {
          let {
            state: et
          } = tt, Vt = String(et.doc.lineAt(tt.state.selection.main.head).number), {
            close: Dt,
            result: mt
          } = (0, Ot.nb)(tt, {
            label: et.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: Vt
            },
            focus: !0,
            submitLabel: et.phrase("go")
          });
          return mt.then((Vt => {
            let mt = Vt && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(Vt.elements.line.value);
            if (!mt) return void tt.dispatch({
              effects: Dt
            });
            let dt = et.doc.lineAt(et.selection.main.head),
              [, jt, Ht, Xt, Qt] = mt,
              lt = Xt ? +Xt.slice(1) : 0,
              Et = Ht ? +Ht : dt.number;
            if (Ht && Qt) {
              let tt = Et / 100;
              jt && (tt = tt * ("-" == jt ? -1 : 1) + dt.number / et.doc.lines), Et = Math.round(et.doc.lines * tt)
            } else Ht && jt && (Et = Et * ("-" == jt ? -1 : 1) + dt.number);
            let ft = et.doc.line(Math.max(1, Math.min(et.doc.lines, Et))),
              wt = qt.n.cursor(ft.from + Math.max(0, Math.min(lt, ft.length)));
            tt.dispatch({
              effects: [Dt, Ot.j.scrollIntoView(wt.from, {
                y: "center"
              })],
              selection: wt
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt, {
            nw: Dt
          } = et.selection;
          if (Dt.some((tt => tt.from === tt.to))) return (tt => {
            let {
              state: et,
              dispatch: Vt
            } = tt, {
              selection: Ot
            } = et, Dt = qt.n.create(Ot.nw.map((tt => et.wordAt(tt.head) || qt.n.cursor(tt.head))), Ot.mainIndex);
            return !Dt.eq(Ot) && (Vt(et.update({
              selection: Dt
            })), !0)
          })({
            state: et,
            dispatch: Vt
          });
          let mt = et.sliceDoc(Dt[0].from, Dt[0].to);
          if (et.selection.nw.some((tt => et.sliceDoc(tt.from, tt.to) != mt))) return !1;
          let jt = function(tt, et) {
            let {
              main: Vt,
              nw: Ot
            } = tt.selection, qt = tt.wordAt(Vt.head), Dt = qt && qt.from == Vt.from && qt.to == Vt.to;
            for (let mt = !1, jt = new dt(tt.doc, et, Ot[Ot.length - 1].to);;) {
              if (jt.next(), !jt.done) {
                if (mt && Ot.some((tt => tt.from == jt.value.from))) continue;
                if (Dt) {
                  let et = tt.wordAt(jt.value.from);
                  if (!et || et.from != jt.value.from || et.to != jt.value.to) continue
                }
                return jt.value
              }
              if (mt) return null;
              jt = new dt(tt.doc, et, 0, Math.max(0, Ot[Ot.length - 1].from - 1)), mt = !0
            }
          }(et, mt);
          return !!jt && (Vt(et.update({
            selection: et.selection.addRange(qt.n.range(jt.from, jt.to), !1),
            effects: Ot.j.scrollIntoView(jt.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class ee {
      constructor(tt) {
        this.view = tt;
        let et = this.query = tt.state.field(Ft).query.spec;

        function Vt(tt, et, Vt) {
          return (0, Dt.b)("button", {
            class: "cm-button",
            name: tt,
            onclick: et,
            type: "button"
          }, Vt)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, Dt.b)("input", {
          value: et.search,
          placeholder: Ve(tt, "Find"),
          "aria-label": Ve(tt, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, Dt.b)("input", {
          value: et.replace,
          placeholder: Ve(tt, "Replace"),
          "aria-label": Ve(tt, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, Dt.b)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: et.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, Dt.b)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: et.regexp,
          onchange: this.commit
        }), this.wordField = (0, Dt.b)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: et.wholeWord,
          onchange: this.commit
        }), this.dom = (0, Dt.b)("div", {
          onkeydown: tt => this.keydown(tt),
          class: "cm-search"
        }, [this.searchField, Vt("next", (() => Ut(tt)), [Ve(tt, "next")]), Vt("prev", (() => At(tt)), [Ve(tt, "previous")]), Vt("select", (() => it(tt)), [Ve(tt, "all")]), (0, Dt.b)("label", null, [this.caseField, Ve(tt, "match case")]), (0, Dt.b)("label", null, [this.reField, Ve(tt, "regexp")]), (0, Dt.b)("label", null, [this.wordField, Ve(tt, "by word")]), ...tt.state.readOnly ? [] : [(0, Dt.b)("br"), this.replaceField, Vt("replace", (() => Yt(tt)), [Ve(tt, "replace")]), Vt("replaceAll", (() => Bt(tt)), [Ve(tt, "replace all")])], (0, Dt.b)("button", {
          name: "close",
          onclick: () => nt(tt),
          "aria-label": Ve(tt, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let tt = new ht({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        tt.eq(this.query) || (this.query = tt, this.view.dispatch({
          effects: Zt.of(tt)
        }))
      }
      keydown(tt) {
        (0, Ot.kb)(this.view, tt, "search-panel") ? tt.preventDefault(): 13 == tt.keyCode && tt.target == this.searchField ? (tt.preventDefault(), (tt.shiftKey ? At : Ut)(this.view)) : 13 == tt.keyCode && tt.target == this.replaceField && (tt.preventDefault(), Yt(this.view))
      }
      update(tt) {
        for (let et of tt.transactions)
          for (let tt of et.effects) tt.is(Zt) && !tt.value.eq(this.query) && this.setQuery(tt.value)
      }
      setQuery(tt) {
        this.query = tt, this.searchField.value = tt.search, this.replaceField.value = tt.replace, this.caseField.checked = tt.caseSensitive, this.reField.checked = tt.regexp, this.wordField.checked = tt.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(Kt).top
      }
    }

    function Ve(tt, et) {
      return tt.state.phrase(et)
    }
    const Oe = 30,
      qe = /[\s\.,:;?!]/;

    function De(tt, et) {
      let {
        from: Vt,
        to: qt
      } = et, Dt = tt.state.doc.lineAt(Vt), mt = tt.state.doc.lineAt(qt).to, dt = Math.max(Dt.from, Vt - Oe), jt = Math.min(mt, qt + Oe), Ht = tt.state.sliceDoc(dt, jt);
      if (dt != Dt.from)
        for (let Ot = 0; Ot < Oe; Ot++)
          if (!qe.test(Ht[Ot + 1]) && qe.test(Ht[Ot])) {
            Ht = Ht.slice(Ot);
            break
          } if (jt != mt)
        for (let Ot = Ht.length - 1; Ot > Ht.length - Oe; Ot--)
          if (!qe.test(Ht[Ot - 1]) && qe.test(Ht[Ot])) {
            Ht = Ht.slice(0, Ot);
            break
          } return Ot.j.announce.of(`${tt.state.phrase("current match")}. ${Ht} ${tt.state.phrase("on line")} ${Dt.number}.`)
    }
    const me = Ot.j.baseTheme({
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
      de = [Ft, qt.u.low(ot), me]
  },
  41548: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Pt,
      i: () => Xe,
      j: () => vq,
      m: () => mm,
      p: () => ge,
      r: () => Rt,
      v: () => cD,
      z: () => gq,
      B: () => mD,
      F: () => gD,
      H: () => pD,
      L: () => Qm,
      Q: () => aD,
      P: () => Im,
      S: () => fD,
      T: () => BD,
      X: () => Lq,
      Y: () => Wm,
      ab: () => Be,
      cb: () => CD,
      gb: () => vD,
      kb: () => Gq,
      nb: () => Vm,
      qb: () => em,
      sb: () => oD
    });
    for (var Ot = Vt(41540), qt = Vt(41553), Dt = {
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
      }, mt = {
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
      }, dt = "undefined" != typeof navigator && /Mac/.test(navigator.platform), jt = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Ht = 0; Ht < 10; Ht++) Dt[48 + Ht] = Dt[96 + Ht] = String(Ht);
    for (Ht = 1; Ht <= 24; Ht++) Dt[Ht + 111] = "F" + Ht;
    for (Ht = 65; Ht <= 90; Ht++) Dt[Ht] = String.fromCharCode(Ht + 32), mt[Ht] = String.fromCharCode(Ht);
    for (var Xt in Dt) mt.hasOwnProperty(Xt) || (mt[Xt] = Dt[Xt]);
    var Qt = Vt(41561);
    let lt = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      Et = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const ft = /Edge\/(\d+)/.exec(lt.userAgent),
      wt = /MSIE \d/.test(lt.userAgent),
      yt = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(lt.userAgent),
      Nt = !!(wt || yt || ft),
      Mt = !Nt && /gecko\/(\d+)/i.test(lt.userAgent),
      bt = !Nt && /Chrome\/(\d+)/.exec(lt.userAgent),
      Jt = "webkitFontSmoothing" in Et.documentElement.style,
      Ct = !Nt && /Apple Computer/.test(lt.vendor),
      ut = Ct && (/Mobile\/\w+/.test(lt.userAgent) || lt.maxTouchPoints > 2);
    var Kt = {
      mac: ut || /Mac/.test(lt.platform),
      windows: /Win/.test(lt.platform),
      linux: /Linux|X11/.test(lt.platform),
      ie: Nt,
      ie_version: wt ? Et.documentMode || 6 : yt ? +yt[1] : ft ? +ft[1] : 0,
      gecko: Mt,
      gecko_version: Mt ? +(/Firefox\/(\d+)/.exec(lt.userAgent) || [0, 0])[1] : 0,
      chrome: !!bt,
      chrome_version: bt ? +bt[1] : 0,
      ios: ut,
      android: /Android\b/.test(lt.userAgent),
      webkit: Jt,
      webkit_version: Jt ? +(/\bAppleWebKit\/(\d+)/.exec(lt.userAgent) || [0, 0])[1] : 0,
      safari: Ct,
      safari_version: Ct ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(lt.userAgent) || [0, 0])[1] : 0,
      tabSize: null != Et.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function ht(tt, et) {
      for (let Vt in tt) "class" == Vt && et.class ? et.class += " " + tt.class : "style" == Vt && et.style ? et.style += ";" + tt.style : et[Vt] = tt[Vt];
      return et
    }
    const vt = Object.create(null);

    function Wt(tt, et, Vt) {
      if (tt == et) return !0;
      tt || (tt = vt), et || (et = vt);
      let Ot = Object.keys(tt),
        qt = Object.keys(et);
      if (Ot.length - (Vt && Ot.indexOf(Vt) > -1 ? 1 : 0) != qt.length - (Vt && qt.indexOf(Vt) > -1 ? 1 : 0)) return !1;
      for (let Dt of Ot)
        if (Dt != Vt && (-1 == qt.indexOf(Dt) || tt[Dt] !== et[Dt])) return !1;
      return !0
    }

    function St(tt, et, Vt) {
      let Ot = !1;
      if (et)
        for (let qt in et) Vt && qt in Vt || (Ot = !0, "style" == qt ? tt.style.cssText = "" : tt.removeAttribute(qt));
      if (Vt)
        for (let qt in Vt) et && et[qt] == Vt[qt] || (Ot = !0, "style" == qt ? tt.style.cssText = Vt[qt] : tt.setAttribute(qt, Vt[qt]));
      return Ot
    }

    function ct(tt) {
      let et = Object.create(null);
      for (let Vt = 0; Vt < tt.attributes.length; Vt++) {
        let Ot = tt.attributes[Vt];
        et[Ot.name] = Ot.value
      }
      return et
    }
    class Rt {
      eq(tt) {
        return !1
      }
      updateDOM(tt, et, Vt) {
        return !1
      }
      compare(tt) {
        return this == tt || this.constructor == tt.constructor && this.eq(tt)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(tt) {
        return !0
      }
      coordsAt(tt, et, Vt) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(tt) {}
    }
    var It = function(tt) {
      return tt[tt.Text = 0] = "Text", tt[tt.WidgetBefore = 1] = "WidgetBefore", tt[tt.WidgetAfter = 2] = "WidgetAfter", tt[tt.WidgetRange = 3] = "WidgetRange", tt
    }(It || (It = {}));
    class Pt extends Ot.E {
      constructor(tt, et, Vt, Ot) {
        super(), this.startSide = tt, this.endSide = et, this.widget = Vt, this.spec = Ot
      }
      get heightRelevant() {
        return !1
      }
      static mark(tt) {
        return new Zt(tt)
      }
      static widget(tt) {
        let et = Math.max(-1e4, Math.min(1e4, tt.side || 0)),
          Vt = !!tt.block;
        return et += Vt && !tt.inlineOrder ? et > 0 ? 3e8 : -4e8 : et > 0 ? 1e8 : -1e8, new Ft(tt, et, et, Vt, tt.widget || null, !1)
      }
      static replace(tt) {
        let et, Vt, Ot = !!tt.block;
        if (tt.isBlockGap) et = -5e8, Vt = 4e8;
        else {
          let {
            start: qt,
            end: Dt
          } = kt(tt, Ot);
          et = (qt ? Ot ? -3e8 : -1 : 5e8) - 1, Vt = 1 + (Dt ? Ot ? 2e8 : 1 : -6e8)
        }
        return new Ft(tt, et, Vt, Ot, tt.widget || null, !0)
      }
      static line(tt) {
        return new Lt(tt)
      }
      static set(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Ot.B.of(tt, et)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Pt.none = Ot.B.empty;
    class Zt extends Pt {
      constructor(tt) {
        let {
          start: et,
          end: Vt
        } = kt(tt);
        super(et ? -1 : 5e8, Vt ? 1 : -6e8, null, tt), this.tagName = tt.tagName || "span", this.attrs = tt.class && tt.attributes ? ht(tt.attributes, {
          class: tt.class
        }) : tt.class ? {
          class: tt.class
        } : tt.attributes || vt
      }
      eq(tt) {
        return this == tt || tt instanceof Zt && this.tagName == tt.tagName && Wt(this.attrs, tt.attrs)
      }
      range(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt;
        if (tt >= et) throw new RangeError("Mark decorations may not be empty");
        return super.range(tt, et)
      }
    }
    Zt.prototype.point = !1;
    class Lt extends Pt {
      constructor(tt) {
        super(-2e8, -2e8, null, tt)
      }
      eq(tt) {
        return tt instanceof Lt && this.spec.class == tt.spec.class && Wt(this.spec.attributes, tt.spec.attributes)
      }
      range(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt;
        if (et != tt) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(tt, et)
      }
    }
    Lt.prototype.mapMode = Ot.t.TrackBefore, Lt.prototype.point = !0;
    class Ft extends Pt {
      constructor(tt, et, Vt, qt, Dt, mt) {
        super(et, Vt, Dt, tt), this.block = qt, this.isReplace = mt, this.mapMode = qt ? et <= 0 ? Ot.t.TrackBefore : Ot.t.TrackAfter : Ot.t.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? It.WidgetRange : this.startSide <= 0 ? It.WidgetBefore : It.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(tt) {
        return tt instanceof Ft && (et = this.widget, Vt = tt.widget, et == Vt || !!(et && Vt && et.compare(Vt))) && this.block == tt.block && this.startSide == tt.startSide && this.endSide == tt.endSide;
        var et, Vt
      }
      range(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt;
        if (this.isReplace && (tt > et || tt == et && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && et != tt) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(tt, et)
      }
    }

    function kt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: Vt,
          inclusiveEnd: Ot
        } = tt;
      return null == Vt && (Vt = tt.inclusive), null == Ot && (Ot = tt.inclusive), {
        start: null !== Vt && void 0 !== Vt ? Vt : et,
        end: null !== Ot && void 0 !== Ot ? Ot : et
      }
    }

    function Gt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qt = Vt.length - 1;
      qt >= 0 && Vt[qt] + Ot >= tt ? Vt[qt] = Math.max(Vt[qt], et) : Vt.push(tt, et)
    }
    Ft.prototype.point = !0;
    class zt extends Ot.E {
      constructor(tt, et) {
        super(), this.tagName = tt, this.attributes = et
      }
      eq(tt) {
        return tt == this || tt instanceof zt && this.tagName == tt.tagName && Wt(this.attributes, tt.attributes)
      }
      static create(tt) {
        return new zt(tt.tagName, tt.attributes || vt)
      }
      static set(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Ot.B.of(tt, et)
      }
    }

    function ot(tt) {
      let et;
      return et = 11 == tt.nodeType ? tt.getSelection ? tt : tt.ownerDocument : tt, et.getSelection()
    }

    function rt(tt, et) {
      return !!et && (tt == et || tt.contains(1 != et.nodeType ? et.parentNode : et))
    }

    function Ut(tt, et) {
      if (!et.anchorNode) return !1;
      try {
        return rt(tt, et.anchorNode)
      } catch (Vt) {
        return !1
      }
    }

    function At(tt) {
      return 3 == tt.nodeType ? qe(tt, 0, tt.nodeValue.length).getClientRects() : 1 == tt.nodeType ? tt.getClientRects() : []
    }

    function it(tt, et, Vt, Ot) {
      return !!Vt && (pt(tt, et, Vt, Ot, -1) || pt(tt, et, Vt, Ot, 1))
    }

    function Yt(tt) {
      for (var et = 0;; et++)
        if (!(tt = tt.previousSibling)) return et
    }

    function Bt(tt) {
      return 1 == tt.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(tt.nodeName)
    }

    function pt(tt, et, Vt, Ot, qt) {
      for (;;) {
        if (tt == Vt && et == Ot) return !0;
        if (et == (qt < 0 ? 0 : xt(tt))) {
          if ("DIV" == tt.nodeName) return !1;
          let Vt = tt.parentNode;
          if (!Vt || 1 != Vt.nodeType) return !1;
          et = Yt(tt) + (qt < 0 ? 0 : 1), tt = Vt
        } else {
          if (1 != tt.nodeType) return !1;
          if (1 == (tt = tt.childNodes[et + (qt < 0 ? -1 : 0)]).nodeType && "false" == tt.contentEditable) return !1;
          et = qt < 0 ? xt(tt) : 0
        }
      }
    }

    function xt(tt) {
      return 3 == tt.nodeType ? tt.nodeValue.length : tt.childNodes.length
    }

    function Tt(tt, et) {
      let Vt = et ? tt.left : tt.right;
      return {
        left: Vt,
        right: Vt,
        top: tt.top,
        bottom: tt.bottom
      }
    }

    function gt(tt) {
      let et = tt.visualViewport;
      return et ? {
        left: 0,
        right: et.width,
        top: 0,
        bottom: et.height
      } : {
        left: 0,
        right: tt.innerWidth,
        top: 0,
        bottom: tt.innerHeight
      }
    }

    function st(tt, et) {
      let Vt = et.width / tt.offsetWidth,
        Ot = et.height / tt.offsetHeight;
      return (Vt > .995 && Vt < 1.005 || !isFinite(Vt) || Math.abs(et.width - tt.offsetWidth) < 1) && (Vt = 1), (Ot > .995 && Ot < 1.005 || !isFinite(Ot) || Math.abs(et.height - tt.offsetHeight) < 1) && (Ot = 1), {
        scaleX: Vt,
        scaleY: Ot
      }
    }

    function nt(tt) {
      let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        Vt = tt.ownerDocument,
        Ot = null,
        qt = null;
      for (let Dt = tt.parentNode; Dt && (Dt != Vt.body && (et && !Ot || !qt));)
        if (1 == Dt.nodeType) !qt && Dt.scrollHeight > Dt.clientHeight && (qt = Dt), et && !Ot && Dt.scrollWidth > Dt.clientWidth && (Ot = Dt), Dt = Dt.assignedSlot || Dt.parentNode;
        else {
          if (11 != Dt.nodeType) break;
          Dt = Dt.host
        } return {
        x: Ot,
        y: qt
      }
    }
    zt.prototype.startSide = zt.prototype.endSide = -1;
    class te {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(tt) {
        return this.anchorNode == tt.anchorNode && this.anchorOffset == tt.anchorOffset && this.focusNode == tt.focusNode && this.focusOffset == tt.focusOffset
      }
      setRange(tt) {
        let {
          anchorNode: et,
          focusNode: Vt
        } = tt;
        this.set(et, Math.min(tt.anchorOffset, et ? xt(et) : 0), Vt, Math.min(tt.focusOffset, Vt ? xt(Vt) : 0))
      }
      set(tt, et, Vt, Ot) {
        this.anchorNode = tt, this.anchorOffset = et, this.focusNode = Vt, this.focusOffset = Ot
      }
    }
    let ee, Ve = null;

    function Oe(tt) {
      if (tt.setActive) return tt.setActive();
      if (Ve) return tt.focus(Ve);
      let et = [];
      for (let Vt = tt; Vt && (et.push(Vt, Vt.scrollTop, Vt.scrollLeft), Vt != Vt.ownerDocument); Vt = Vt.parentNode);
      if (tt.focus(null == Ve ? {
          get preventScroll() {
            return Ve = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !Ve) {
        Ve = !1;
        for (let tt = 0; tt < et.length;) {
          let Vt = et[tt++],
            Ot = et[tt++],
            qt = et[tt++];
          Vt.scrollTop != Ot && (Vt.scrollTop = Ot), Vt.scrollLeft != qt && (Vt.scrollLeft = qt)
        }
      }
    }

    function qe(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : et,
        Ot = ee || (ee = document.createRange());
      return Ot.setEnd(tt, Vt), Ot.setStart(tt, et), Ot
    }

    function De(tt, et, Vt, Ot) {
      let qt = {
        key: et,
        code: et,
        keyCode: Vt,
        which: Vt,
        cancelable: !0
      };
      Ot && ({
        altKey: qt.altKey,
        ctrlKey: qt.ctrlKey,
        shiftKey: qt.shiftKey,
        metaKey: qt.metaKey
      } = Ot);
      let Dt = new KeyboardEvent("keydown", qt);
      Dt.synthetic = !0, tt.dispatchEvent(Dt);
      let mt = new KeyboardEvent("keyup", qt);
      return mt.synthetic = !0, tt.dispatchEvent(mt), Dt.defaultPrevented || mt.defaultPrevented
    }

    function me(tt) {
      return tt instanceof Window ? tt.pageYOffset > Math.max(0, tt.document.documentElement.scrollHeight - tt.innerHeight - 4) : tt.scrollTop > Math.max(1, tt.scrollHeight - tt.clientHeight - 4)
    }

    function de(tt, et) {
      for (let Vt = tt, Ot = et;;) {
        if (3 == Vt.nodeType && Ot > 0) return {
          node: Vt,
          offset: Ot
        };
        if (1 == Vt.nodeType && Ot > 0) {
          if ("false" == Vt.contentEditable) return null;
          Vt = Vt.childNodes[Ot - 1], Ot = xt(Vt)
        } else {
          if (!Vt.parentNode || Bt(Vt)) return null;
          Ot = Yt(Vt), Vt = Vt.parentNode
        }
      }
    }

    function je(tt, et) {
      for (let Vt = tt, Ot = et;;) {
        if (3 == Vt.nodeType && Ot < Vt.nodeValue.length) return {
          node: Vt,
          offset: Ot
        };
        if (1 == Vt.nodeType && Ot < Vt.childNodes.length) {
          if ("false" == Vt.contentEditable) return null;
          Vt = Vt.childNodes[Ot], Ot = 0
        } else {
          if (!Vt.parentNode || Bt(Vt)) return null;
          Ot = Yt(Vt) + 1, Vt = Vt.parentNode
        }
      }
    }
    Kt.safari && Kt.safari_version >= 26 && (Ve = !1);
    class He {
      constructor(tt, et) {
        let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = tt, this.offset = et, this.precise = Vt
      }
      static before(tt, et) {
        return new He(tt.parentNode, Yt(tt), et)
      }
      static after(tt, et) {
        return new He(tt.parentNode, Yt(tt) + 1, et)
      }
    }
    var Xe = function(tt) {
      return tt[tt.LTR = 0] = "LTR", tt[tt.RTL = 1] = "RTL", tt
    }(Xe || (Xe = {}));
    const Qe = Xe.LTR,
      le = Xe.RTL;

    function Ee(tt) {
      let et = [];
      for (let Vt = 0; Vt < tt.length; Vt++) et.push(1 << +tt[Vt]);
      return et
    }
    const fe = Ee("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      we = Ee("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      ye = Object.create(null),
      Ne = [];
    for (let Pm of ["()", "[]", "{}"]) {
      let tt = Pm.charCodeAt(0),
        et = Pm.charCodeAt(1);
      ye[tt] = et, ye[et] = -tt
    }

    function ae(tt) {
      return tt <= 247 ? fe[tt] : 1424 <= tt && tt <= 1524 ? 2 : 1536 <= tt && tt <= 1785 ? we[tt - 1536] : 1774 <= tt && tt <= 2220 ? 4 : 8192 <= tt && tt <= 8204 ? 256 : 64336 <= tt && tt <= 65023 ? 4 : 1
    }
    const Me = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class be {
      get dir() {
        return this.level % 2 ? le : Qe
      }
      constructor(tt, et, Vt) {
        this.from = tt, this.to = et, this.level = Vt
      }
      side(tt, et) {
        return this.dir == et == tt ? this.to : this.from
      }
      forward(tt, et) {
        return tt == (this.dir == et)
      }
      static find(tt, et, Vt, Ot) {
        let qt = -1;
        for (let Dt = 0; Dt < tt.length; Dt++) {
          let mt = tt[Dt];
          if (mt.from <= et && mt.to >= et) {
            if (mt.level == Vt) return Dt;
            (qt < 0 || (0 != Ot ? Ot < 0 ? mt.from < et : mt.to > et : tt[qt].level > mt.level)) && (qt = Dt)
          }
        }
        if (qt < 0) throw new RangeError("Index out of range");
        return qt
      }
    }

    function Je(tt, et) {
      if (tt.length != et.length) return !1;
      for (let Vt = 0; Vt < tt.length; Vt++) {
        let Ot = tt[Vt],
          qt = et[Vt];
        if (Ot.from != qt.from || Ot.to != qt.to || Ot.direction != qt.direction || !Je(Ot.inner, qt.inner)) return !1
      }
      return !0
    }
    const Ce = [];

    function ue(tt, et, Vt, Ot, qt, Dt, mt) {
      let dt = Ot % 2 ? 2 : 1;
      if (Ot % 2 == qt % 2)
        for (let jt = et, Ht = 0; jt < Vt;) {
          let et = !0,
            Xt = !1;
          if (Ht == Dt.length || jt < Dt[Ht].from) {
            let tt = Ce[jt];
            tt != dt && (et = !1, Xt = 16 == tt)
          }
          let Qt = et || 1 != dt ? null : [],
            lt = et ? Ot : Ot + 1,
            Et = jt;
          tt: for (;;)
            if (Ht < Dt.length && Et == Dt[Ht].from) {
              if (Xt) break tt;
              let ft = Dt[Ht];
              if (!et)
                for (let tt = ft.to, et = Ht + 1;;) {
                  if (tt == Vt) break tt;
                  if (!(et < Dt.length && Dt[et].from == tt)) {
                    if (Ce[tt] == dt) break tt;
                    break
                  }
                  tt = Dt[et++].to
                }
              if (Ht++, Qt) Qt.push(ft);
              else {
                ft.from > jt && mt.push(new be(jt, ft.from, lt)), Ke(tt, ft.direction == Qe != !(lt % 2) ? Ot + 1 : Ot, qt, ft.inner, ft.from, ft.to, mt), jt = ft.to
              }
              Et = ft.to
            } else {
              if (Et == Vt || (et ? Ce[Et] != dt : Ce[Et] == dt)) break;
              Et++
            } Qt ? ue(tt, jt, Et, Ot + 1, qt, Qt, mt) : jt < Et && mt.push(new be(jt, Et, lt)), jt = Et
        } else
          for (let jt = Vt, Ht = Dt.length; jt > et;) {
            let Vt = !0,
              Xt = !1;
            if (!Ht || jt > Dt[Ht - 1].to) {
              let tt = Ce[jt - 1];
              tt != dt && (Vt = !1, Xt = 16 == tt)
            }
            let Qt = Vt || 1 != dt ? null : [],
              lt = Vt ? Ot : Ot + 1,
              Et = jt;
            tt: for (;;)
              if (Ht && Et == Dt[Ht - 1].to) {
                if (Xt) break tt;
                let ft = Dt[--Ht];
                if (!Vt)
                  for (let tt = ft.from, Vt = Ht;;) {
                    if (tt == et) break tt;
                    if (!Vt || Dt[Vt - 1].to != tt) {
                      if (Ce[tt - 1] == dt) break tt;
                      break
                    }
                    tt = Dt[--Vt].from
                  }
                if (Qt) Qt.push(ft);
                else {
                  ft.to < jt && mt.push(new be(ft.to, jt, lt)), Ke(tt, ft.direction == Qe != !(lt % 2) ? Ot + 1 : Ot, qt, ft.inner, ft.from, ft.to, mt), jt = ft.from
                }
                Et = ft.from
              } else {
                if (Et == et || (Vt ? Ce[Et - 1] != dt : Ce[Et - 1] == dt)) break;
                Et--
              } Qt ? ue(tt, Et, jt, Ot + 1, qt, Qt, mt) : Et < jt && mt.push(new be(Et, jt, lt)), jt = Et
          }
    }

    function Ke(tt, et, Vt, Ot, qt, Dt, mt) {
      let dt = et % 2 ? 2 : 1;
      ! function(tt, et, Vt, Ot, qt) {
        for (let Dt = 0; Dt <= Ot.length; Dt++) {
          let mt = Dt ? Ot[Dt - 1].to : et,
            dt = Dt < Ot.length ? Ot[Dt].from : Vt,
            jt = Dt ? 256 : qt;
          for (let et = mt, Vt = jt, Ot = jt; et < dt; et++) {
            let qt = ae(tt.charCodeAt(et));
            512 == qt ? qt = Vt : 8 == qt && 4 == Ot && (qt = 16), Ce[et] = 4 == qt ? 2 : qt, 7 & qt && (Ot = qt), Vt = qt
          }
          for (let tt = mt, et = jt, Ot = jt; tt < dt; tt++) {
            let qt = Ce[tt];
            if (128 == qt) tt < dt - 1 && et == Ce[tt + 1] && 24 & et ? qt = Ce[tt] = et : Ce[tt] = 256;
            else if (64 == qt) {
              let qt = tt + 1;
              for (; qt < dt && 64 == Ce[qt];) qt++;
              let Dt = tt && 8 == et || qt < Vt && 8 == Ce[qt] ? 1 == Ot ? 1 : 8 : 256;
              for (let et = tt; et < qt; et++) Ce[et] = Dt;
              tt = qt - 1
            } else 8 == qt && 1 == Ot && (Ce[tt] = 1);
            et = qt, 7 & qt && (Ot = qt)
          }
        }
      }(tt, qt, Dt, Ot, dt),
      function(tt, et, Vt, Ot, qt) {
        let Dt = 1 == qt ? 2 : 1;
        for (let mt = 0, dt = 0, jt = 0; mt <= Ot.length; mt++) {
          let Ht = mt ? Ot[mt - 1].to : et,
            Xt = mt < Ot.length ? Ot[mt].from : Vt;
          for (let et, Vt, Ot, mt = Ht; mt < Xt; mt++)
            if (Vt = ye[et = tt.charCodeAt(mt)])
              if (Vt < 0) {
                for (let tt = dt - 3; tt >= 0; tt -= 3)
                  if (Ne[tt + 1] == -Vt) {
                    let et = Ne[tt + 2],
                      Vt = 2 & et ? qt : 4 & et ? 1 & et ? Dt : qt : 0;
                    Vt && (Ce[mt] = Ce[Ne[tt]] = Vt), dt = tt;
                    break
                  }
              } else {
                if (189 == Ne.length) break;
                Ne[dt++] = mt, Ne[dt++] = et, Ne[dt++] = jt
              }
          else if (2 == (Ot = Ce[mt]) || 1 == Ot) {
            let tt = Ot == qt;
            jt = tt ? 0 : 1;
            for (let et = dt - 3; et >= 0; et -= 3) {
              let Vt = Ne[et + 2];
              if (2 & Vt) break;
              if (tt) Ne[et + 2] |= 2;
              else {
                if (4 & Vt) break;
                Ne[et + 2] |= 4
              }
            }
          }
        }
      }(tt, qt, Dt, Ot, dt),
      function(tt, et, Vt, Ot) {
        for (let qt = 0, Dt = Ot; qt <= Vt.length; qt++) {
          let mt = qt ? Vt[qt - 1].to : tt,
            dt = qt < Vt.length ? Vt[qt].from : et;
          for (let jt = mt; jt < dt;) {
            let mt = Ce[jt];
            if (256 == mt) {
              let mt = jt + 1;
              for (;;)
                if (mt == dt) {
                  if (qt == Vt.length) break;
                  mt = Vt[qt++].to, dt = qt < Vt.length ? Vt[qt].from : et
                } else {
                  if (256 != Ce[mt]) break;
                  mt++
                } let Ht = 1 == Dt,
                Xt = Ht == (1 == (mt < et ? Ce[mt] : Ot)) ? Ht ? 1 : 2 : Ot;
              for (let et = mt, Ot = qt, Dt = Ot ? Vt[Ot - 1].to : tt; et > jt;) et == Dt && (et = Vt[--Ot].from, Dt = Ot ? Vt[Ot - 1].to : tt), Ce[--et] = Xt;
              jt = mt
            } else Dt = mt, jt++
          }
        }
      }(qt, Dt, Ot, dt), ue(tt, qt, Dt, et, Vt, Ot, mt)
    }

    function he(tt, et, Vt) {
      if (!tt) return [new be(0, 0, et == le ? 1 : 0)];
      if (et == Qe && !Vt.length && !Me.test(tt)) return ve(tt.length);
      if (Vt.length)
        for (; tt.length > Ce.length;) Ce[Ce.length] = 256;
      let Ot = [],
        qt = et == Qe ? 0 : 1;
      return Ke(tt, qt, qt, Vt, 0, tt.length, Ot), Ot
    }

    function ve(tt) {
      return [new be(0, tt, 0)]
    }
    let We = "";

    function Se(tt, et, Vt, qt, Dt) {
      var mt;
      let dt = qt.head - tt.from,
        jt = be.find(et, dt, null !== (mt = qt.bidiLevel) && void 0 !== mt ? mt : -1, qt.assoc),
        Ht = et[jt],
        Xt = Ht.side(Dt, Vt);
      if (dt == Xt) {
        let tt = jt += Dt ? 1 : -1;
        if (tt < 0 || tt >= et.length) return null;
        Ht = et[jt = tt], dt = Ht.side(!Dt, Vt), Xt = Ht.side(Dt, Vt)
      }
      let Qt = (0, Ot.$)(tt.text, dt, Ht.forward(Dt, Vt));
      (Qt < Ht.from || Qt > Ht.to) && (Qt = Xt), We = tt.text.slice(Math.min(dt, Qt), Math.max(dt, Qt));
      let lt = jt == (Dt ? et.length - 1 : 0) ? null : et[jt + (Dt ? 1 : -1)];
      return lt && Qt == Xt && lt.level + (Dt ? 0 : 1) < Ht.level ? Ot.n.cursor(lt.side(!Dt, Vt) + tt.from, lt.forward(Dt, Vt) ? 1 : -1, lt.level) : Ot.n.cursor(Qt + tt.from, Ht.forward(Dt, Vt) ? -1 : 1, Ht.level)
    }

    function ce(tt, et, Vt) {
      for (let Ot = et; Ot < Vt; Ot++) {
        let et = ae(tt.charCodeAt(Ot));
        if (1 == et) return Qe;
        if (2 == et || 4 == et) return le
      }
      return Qe
    }
    const Re = Ot.s.define(),
      Ie = Ot.s.define(),
      Pe = Ot.s.define(),
      Ze = Ot.s.define(),
      Le = Ot.s.define(),
      Fe = Ot.s.define(),
      ke = Ot.s.define(),
      Ge = Ot.s.define(),
      ze = Ot.s.define(),
      oe = Ot.s.define({
        combine: tt => tt.some((tt => tt))
      }),
      re = Ot.s.define({
        combine: tt => tt.some((tt => tt))
      }),
      Ue = Ot.s.define();
    class Ae {
      constructor(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = tt, this.y = et, this.x = Vt, this.yMargin = Ot, this.xMargin = qt, this.isSnapshot = Dt
      }
      map(tt) {
        return tt.empty ? this : new Ae(this.range.map(tt), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(tt) {
        return this.range.to <= tt.doc.length ? this : new Ae(Ot.n.cursor(tt.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const ie = Ot.I.define({
        map: (tt, et) => tt.map(et)
      }),
      Ye = Ot.I.define();

    function Be(tt, et, Vt) {
      let Ot = tt.facet(Ze);
      Ot.length ? Ot[0](et) : window.onerror && window.onerror(String(et), Vt, void 0, void 0, et) || (Vt ? console.error(Vt + ":", et) : console.error(et))
    }
    const pe = Ot.s.define({
      combine: tt => !tt.length || tt[0]
    });
    let xe = 0;
    const Te = Ot.s.define({
      combine: tt => tt.filter(((et, Vt) => {
        for (let Ot = 0; Ot < Vt; Ot++)
          if (tt[Ot].plugin == et.plugin) return !1;
        return !0
      }))
    });
    class ge {
      constructor(tt, et, Vt, Ot, qt) {
        this.id = tt, this.create = et, this.domEventHandlers = Vt, this.domEventObservers = Ot, this.baseExtensions = qt(this), this.extension = this.baseExtensions.concat(Te.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(tt) {
        return this.baseExtensions.concat(Te.of({
          plugin: this,
          arg: tt
        }))
      }
      static define(tt, et) {
        const {
          eventHandlers: Vt,
          eventObservers: Ot,
          provide: qt,
          NO: Dt
        } = et || {};
        return new ge(xe++, tt, Vt, Ot, (tt => {
          let et = [];
          return Dt && et.push(eV.of((et => {
            let Vt = et.plugin(tt);
            return Vt ? Dt(Vt) : Pt.none
          }))), qt && et.push(qt(tt)), et
        }))
      }
      static fromClass(tt, et) {
        return ge.define(((et, Vt) => new tt(et, Vt)), et)
      }
    }
    class se {
      constructor(tt) {
        this.spec = tt, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(tt) {
        if (this.value) {
          if (this.mustUpdate) {
            let tt = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(tt)
            } catch (et) {
              if (Be(tt.state, et, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (Vt) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(tt, this.spec.arg)
        } catch (et) {
          Be(tt.state, et, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(tt) {
        var et;
        if (null === (et = this.value) || void 0 === et ? void 0 : et.destroy) try {
          this.value.destroy()
        } catch (Vt) {
          Be(tt.state, Vt, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const ne = Ot.s.define(),
      tV = Ot.s.define(),
      eV = Ot.s.define(),
      VV = Ot.s.define(),
      OV = Ot.s.define(),
      qV = Ot.s.define(),
      DV = Ot.s.define();

    function mV(tt, et) {
      let Vt = tt.state.facet(DV);
      if (!Vt.length) return Vt;
      let qt = Vt.map((et => et instanceof Function ? et(tt) : et)),
        Dt = [];
      return Ot.B.spans(qt, et.from, et.to, {
        point() {},
        span(tt, Vt, Ot, qt) {
          let mt = tt - et.from,
            dt = Vt - et.from,
            jt = Dt;
          for (let Dt = Ot.length - 1; Dt >= 0; Dt--, qt--) {
            let tt, Vt = Ot[Dt].spec.bidiIsolate;
            if (null == Vt && (Vt = ce(et.text, mt, dt)), qt > 0 && jt.length && (tt = jt[jt.length - 1]).to == mt && tt.direction == Vt) tt.to = dt, jt = tt.inner;
            else {
              let tt = {
                from: mt,
                to: dt,
                direction: Vt,
                inner: []
              };
              jt.push(tt), jt = tt.inner
            }
          }
        }
      }), Dt
    }
    const dV = Ot.s.define();

    function jV(tt) {
      let et = 0,
        Vt = 0,
        Ot = 0,
        qt = 0;
      for (let Dt of tt.state.facet(dV)) {
        let mt = Dt(tt);
        mt && (null != mt.left && (et = Math.max(et, mt.left)), null != mt.right && (Vt = Math.max(Vt, mt.right)), null != mt.top && (Ot = Math.max(Ot, mt.top)), null != mt.bottom && (qt = Math.max(qt, mt.bottom)))
      }
      return {
        left: et,
        right: Vt,
        top: Ot,
        bottom: qt
      }
    }
    const HV = Ot.s.define();
    class XV {
      constructor(tt, et, Vt, Ot) {
        this.fromA = tt, this.toA = et, this.fromB = Vt, this.toB = Ot
      }
      join(tt) {
        return new XV(Math.min(this.fromA, tt.fromA), Math.max(this.toA, tt.toA), Math.min(this.fromB, tt.fromB), Math.max(this.toB, tt.toB))
      }
      addToSet(tt) {
        let et = tt.length,
          Vt = this;
        for (; et > 0; et--) {
          let Ot = tt[et - 1];
          if (!(Ot.fromA > Vt.toA)) {
            if (Ot.toA < Vt.fromA) break;
            Vt = Vt.join(Ot), tt.splice(et - 1, 1)
          }
        }
        return tt.splice(et, 0, Vt), tt
      }
      static extendWithRanges(tt, et) {
        if (0 == et.length) return tt;
        let Vt = [];
        for (let Ot = 0, qt = 0, Dt = 0;;) {
          let mt = Ot < tt.length ? tt[Ot].fromB : 1e9,
            dt = qt < et.length ? et[qt] : 1e9,
            jt = Math.min(mt, dt);
          if (1e9 == jt) break;
          let Ht = jt + Dt,
            Xt = jt,
            Qt = Ht;
          for (;;)
            if (qt < et.length && et[qt] <= Xt) {
              let Vt = et[qt + 1];
              qt += 2, Xt = Math.max(Xt, Vt);
              for (let et = Ot; et < tt.length && tt[et].fromB <= Xt; et++) Dt = tt[et].toA - tt[et].toB;
              Qt = Math.max(Qt, Vt + Dt)
            } else {
              if (!(Ot < tt.length && tt[Ot].fromB <= Xt)) break;
              {
                let et = tt[Ot++];
                Xt = Math.max(Xt, et.toB), Qt = Math.max(Qt, et.toA), Dt = et.toA - et.toB
              }
            } Vt.push(new XV(Ht, Qt, jt, Xt))
        }
        return Vt
      }
    }
    class QV {
      constructor(tt, et, Vt) {
        this.view = tt, this.state = et, this.transactions = Vt, this.flags = 0, this.startState = tt.state, this.changes = Ot.ChangeSet.empty(this.startState.doc.length);
        for (let Ot of Vt) this.changes = this.changes.compose(Ot.changes);
        let qt = [];
        this.changes.iterChangedRanges(((tt, et, Vt, Ot) => qt.push(new XV(tt, et, Vt, Ot)))), this.changedRanges = qt
      }
      static create(tt, et, Vt) {
        return new QV(tt, et, Vt)
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
        return this.transactions.some((tt => tt.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const lV = [];
    class EV {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = tt, this.length = et, this.flags = Vt, this.parent = null, tt.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return lV
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
      sync(tt) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let tt = this.domAttrs;
          tt && function(tt, et) {
            for (let Vt = tt.attributes.length - 1; Vt >= 0; Vt--) {
              let Ot = tt.attributes[Vt].name;
              null == et[Ot] && tt.removeAttribute(Ot)
            }
            for (let Vt in et) {
              let Ot = et[Vt];
              "style" == Vt ? tt.style.cssText = Ot : tt.getAttribute(Vt) != Ot && tt.setAttribute(Vt, Ot)
            }
          }(this.dom, tt)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(tt) {
        this.dom = tt, tt.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let Vt of this.children) {
          if (Vt == tt) return et;
          et += Vt.length + Vt.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(tt) {
        return this.posBefore(tt) + tt.length
      }
      covers(tt) {
        return !0
      }
      coordsIn(tt, et) {
        return null
      }
      domPosFor(tt, et) {
        let Vt = Yt(this.dom),
          Ot = this.length ? tt > 0 : et > 0;
        return new He(this.parent.dom, Vt + (Ot ? 1 : 0), 0 == tt || tt == this.length)
      }
      markDirty(tt) {
        this.flags &= -3, tt && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let tt = this; tt; tt = tt.parent)
          if (tt instanceof yV) return tt;
        return null
      }
      static get(tt) {
        return tt.cmTile
      }
    }
    class fV extends EV {
      constructor(tt) {
        super(tt, 0), this._children = []
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
      append(tt) {
        this.children.push(tt), tt.parent = this
      }
      sync(tt) {
        if (2 & this.flags) return;
        super.sync(tt);
        let et, Vt = this.dom,
          Ot = null,
          qt = (null === tt || void 0 === tt ? void 0 : tt.node) == Vt ? tt : null,
          Dt = 0;
        for (let mt of this.children) {
          if (mt.sync(tt), Dt += mt.length + mt.breakAfter, et = Ot ? Ot.nextSibling : Vt.firstChild, qt && et != mt.dom && (qt.written = !0), mt.dom.parentNode == Vt)
            for (; et && et != mt.dom;) et = wV(et);
          else Vt.insertBefore(mt.dom, et);
          Ot = mt.dom
        }
        for (et = Ot ? Ot.nextSibling : Vt.firstChild, qt && et && (qt.written = !0); et;) et = wV(et);
        this.length = Dt
      }
    }

    function wV(tt) {
      let et = tt.nextSibling;
      return tt.parentNode.removeChild(tt), et
    }
    class yV extends fV {
      constructor(tt, et) {
        super(et), this.view = tt
      }
      owns(tt) {
        for (; tt; tt = tt.parent)
          if (tt == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(tt) {
        for (;;) {
          if (!tt) return null;
          let et = EV.get(tt);
          if (et && this.owns(et)) return et;
          tt = tt.parentNode
        }
      }
      blockTiles(tt) {
        for (let et = [], Vt = this, Ot = 0, qt = 0;;)
          if (Ot == Vt.children.length) {
            if (!et.length) return;
            Vt = Vt.parent, Vt.breakAfter && qt++, Ot = et.pop()
          } else {
            let Dt = Vt.children[Ot++];
            if (Dt instanceof NV) et.push(Ot), Vt = Dt, Ot = 0;
            else {
              let et = qt + Dt.length,
                Vt = tt(Dt, qt);
              if (void 0 !== Vt) return Vt;
              qt = et + Dt.breakAfter
            }
          }
      }
      resolveBlock(tt, et) {
        let Vt, Ot, qt = -1,
          Dt = -1;
        if (this.blockTiles(((mt, dt) => {
            let jt = dt + mt.length;
            if (tt >= dt && tt <= jt) {
              if (mt.isWidget() && et >= -1 && et <= 1) {
                if (32 & mt.flags) return !0;
                16 & mt.flags && (Vt = void 0)
              }(dt < tt || tt == jt && (et < -1 ? mt.length : mt.covers(1))) && (!Vt || !mt.isWidget() && Vt.isWidget()) && (Vt = mt, qt = tt - dt), (jt > tt || tt == dt && (et > 1 ? mt.length : mt.covers(-1))) && (!Ot || !mt.isWidget() && Ot.isWidget()) && (Ot = mt, Dt = tt - dt)
            }
          })), !Vt && !Ot) throw new Error("No tile at position " + tt);
        return Vt && et < 0 || !Ot ? {
          tile: Vt,
          offset: qt
        } : {
          tile: Ot,
          offset: Dt
        }
      }
    }
    class NV extends fV {
      constructor(tt, et) {
        super(tt), this.wrapper = et
      }
      isBlock() {
        return !0
      }
      covers(tt) {
        return !!this.children.length && (tt < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (tt, et) {
        let Vt = new NV(et || document.createElement(tt.tagName), tt);
        return et || (Vt.flags |= 4), Vt
      }
    }
    class aV extends fV {
      constructor(tt, et) {
        super(tt), this.attrs = et
      }
      isLine() {
        return !0
      }
      static start(tt, et, Vt) {
        let Ot = new aV(et || document.createElement("div"), tt);
        return et && Vt || (Ot.flags |= 4), Ot
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(tt, et, Vt) {
        let Ot = null,
          qt = -1,
          Dt = null,
          mt = -1;
        ! function tt(dt, jt) {
          for (let Ht = 0, Xt = 0; Ht < dt.children.length && Xt <= jt; Ht++) {
            let Qt = dt.children[Ht],
              lt = Xt + Qt.length;
            lt >= jt && (Qt.isComposite() ? tt(Qt, jt - Xt) : (!Dt || Dt.isHidden && (et > 0 || Vt && MV(Dt, Qt))) && (lt > jt || 32 & Qt.flags) ? (Dt = Qt, mt = jt - Xt) : (Xt < jt || 16 & Qt.flags && !Qt.isHidden) && (Ot = Qt, qt = jt - Xt)), Xt = lt
          }
        }(this, tt);
        let dt = (et < 0 ? Ot : Dt) || Ot || Dt;
        return dt ? {
          tile: dt,
          offset: dt == Ot ? qt : mt
        } : null
      }
      coordsIn(tt, et) {
        let Vt = this.resolveInline(tt, et, !0);
        return Vt ? Vt.tile.coordsIn(Math.max(0, Vt.offset), et) : function(tt) {
          let et = tt.dom.lastChild;
          if (!et) return tt.dom.getBoundingClientRect();
          let Vt = At(et);
          return Vt[Vt.length - 1] || null
        }(this)
      }
      domIn(tt, et) {
        let Vt = this.resolveInline(tt, et);
        if (Vt) {
          let {
            tile: tt,
            offset: Ot
          } = Vt;
          if (this.dom.contains(tt.dom)) return tt.isText() ? new He(tt.dom, Math.min(tt.dom.nodeValue.length, Ot)) : tt.domPosFor(Ot, 16 & tt.flags ? 1 : 32 & tt.flags ? -1 : et);
          let qt = Vt.tile.parent,
            Dt = !1;
          for (let et of qt.children) {
            if (Dt) return new He(et.dom, 0);
            et == Vt.tile && (Dt = !0)
          }
        }
        return new He(this.dom, 0)
      }
    }

    function MV(tt, et) {
      let Vt = tt.coordsIn(0, 1),
        Ot = et.coordsIn(0, 1);
      return Vt && Ot && Ot.top < Vt.bottom
    }
    class bV extends fV {
      constructor(tt, et) {
        super(tt), this.mark = et
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (tt, et) {
        let Vt = new bV(et || document.createElement(tt.tagName), tt);
        return et || (Vt.flags |= 4), Vt
      }
    }
    class JV extends EV {
      constructor(tt, et) {
        super(tt, et.length), this.text = et
      }
      sync(tt) {
        2 & this.flags || (super.sync(tt), this.dom.nodeValue != this.text && (tt && tt.node == this.dom && (tt.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(tt, et) {
        let Vt = this.dom.nodeValue.length;
        tt > Vt && (tt = Vt);
        let Ot = tt,
          qt = tt,
          Dt = 0;
        0 == tt && et < 0 || tt == Vt && et >= 0 ? Kt.chrome || Kt.gecko || (tt ? (Ot--, Dt = 1) : qt < Vt && (qt++, Dt = -1)) : et < 0 ? Ot-- : qt < Vt && qt++;
        let mt = qe(this.dom, Ot, qt).getClientRects();
        if (!mt.length) return null;
        let dt = mt[(Dt ? Dt < 0 : et >= 0) ? 0 : mt.length - 1];
        return Kt.safari && !Dt && 0 == dt.width && (dt = Array.prototype.find.call(mt, (tt => tt.width)) || dt), Dt ? Tt(dt, Dt < 0) : dt || null
      }
      static of (tt, et) {
        let Vt = new JV(et || document.createTextNode(tt), tt);
        return et || (Vt.flags |= 2), Vt
      }
    }
    class CV extends EV {
      constructor(tt, et, Vt, Ot) {
        super(tt, et, Ot), this.widget = Vt
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(tt) {
        return !(48 & this.flags) && (this.flags & (tt < 0 ? 64 : 128)) > 0
      }
      coordsIn(tt, et) {
        return this.coordsInWidget(tt, et, !1)
      }
      coordsInWidget(tt, et, Vt) {
        let Ot = this.widget.coordsAt(this.dom, tt, et);
        if (Ot) return Ot;
        if (Vt) return Tt(this.dom.getBoundingClientRect(), this.length ? 0 == tt : et <= 0);
        {
          let et = this.dom.getClientRects(),
            Vt = null;
          if (!et.length) return null;
          let Ot = !!(16 & this.flags) || !(32 & this.flags) && tt > 0;
          for (let qt = Ot ? et.length - 1 : 0; Vt = et[qt], !(tt > 0 ? 0 == qt : qt == et.length - 1 || Vt.top < Vt.bottom); qt += Ot ? -1 : 1);
          return Tt(Vt, !Ot)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Ot.K.empty;
        let {
          root: tt
        } = this;
        if (!tt) return Ot.K.empty;
        let et = this.posAtStart;
        return tt.view.state.doc.slice(et, et + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (tt, et, Vt, Ot, qt) {
        return qt || (qt = tt.toDOM(et), tt.editable || (qt.contentEditable = "false")), new CV(qt, Vt, tt, Ot)
      }
    }
    class uV extends EV {
      constructor(tt) {
        let et = document.createElement("img");
        et.className = "cm-widgetBuffer", et.setAttribute("aria-hidden", "true"), super(et, 0, tt)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Ot.K.empty
      }
      coordsIn(tt) {
        return this.dom.getBoundingClientRect()
      }
    }
    class KV {
      constructor(tt) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = tt
      }
      advance(tt, et, Vt) {
        let {
          tile: Ot,
          index: qt,
          beforeBreak: Dt,
          parents: mt
        } = this;
        for (; tt || et > 0;)
          if (Ot.isComposite())
            if (Dt) {
              if (!tt) break;
              Vt && Vt.break(), tt--, Dt = !1
            } else if (qt == Ot.children.length) {
          if (!tt && !mt.length) break;
          Vt && Vt.leave(Ot), Dt = !!Ot.breakAfter, ({
            tile: Ot,
            index: qt
          } = mt.pop()), qt++
        } else {
          let dt = Ot.children[qt],
            jt = dt.breakAfter;
          !(et > 0 ? dt.length <= tt : dt.length < tt) || Vt && !1 === Vt.skip(dt, 0, dt.length) && dt.isComposite ? (mt.push({
            tile: Ot,
            index: qt
          }), Ot = dt, qt = 0, Vt && dt.isComposite() && Vt.enter(dt)) : (Dt = !!jt, qt++, tt -= dt.length)
        } else if (qt == Ot.length) Dt = !!Ot.breakAfter, ({
          tile: Ot,
          index: qt
        } = mt.pop()), qt++;
        else {
          if (!tt) break;
          {
            let et = Math.min(tt, Ot.length - qt);
            Vt && Vt.skip(Ot, qt, qt + et), tt -= et, qt += et
          }
        }
        return this.tile = Ot, this.index = qt, this.beforeBreak = Dt, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class hV {
      constructor(tt, et, Vt, Ot) {
        this.from = tt, this.to = et, this.wrapper = Vt, this.rank = Ot
      }
    }
    class vV {
      constructor(tt, et, Vt) {
        this.cache = tt, this.root = et, this.blockWrappers = Vt, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(tt, et, Vt, Ot) {
        var qt;
        this.flushBuffer();
        let Dt = this.ensureMarks(et, Vt),
          mt = Dt.lastChild;
        if (mt && mt.isText() && !(8 & mt.flags) && mt.length + tt.length < 512) {
          this.cache.reused.set(mt, 2), (Dt.children[Dt.children.length - 1] = new JV(mt.dom, mt.text + tt)).parent = Dt
        } else Dt.append(Ot || JV.of(tt, null === (qt = this.cache.find(JV)) || void 0 === qt ? void 0 : qt.dom));
        this.pos += tt.length, this.afterWidget = null
      }
      addComposition(tt, et) {
        let Vt = this.curLine;
        Vt.dom != et.line.dom && (Vt.setDOM(this.cache.reused.has(et.line) ? ZV(et.line.dom) : et.line.dom), this.cache.reused.set(et.line, 2));
        let Ot = Vt;
        for (let mt = et.marks.length - 1; mt >= 0; mt--) {
          let tt = et.marks[mt],
            Vt = Ot.lastChild;
          if (Vt instanceof bV && Vt.mark.eq(tt.mark)) Vt.dom != tt.dom && Vt.setDOM(ZV(tt.dom)), Ot = Vt;
          else {
            if (this.cache.reused.get(tt)) {
              let et = EV.get(tt.dom);
              et && et.setDOM(ZV(tt.dom))
            }
            let et = bV.of(tt.mark, tt.dom);
            Ot.append(et), Ot = et
          }
          this.cache.reused.set(tt, 2)
        }
        let qt = EV.get(tt.text);
        qt && this.cache.reused.set(qt, 2);
        let Dt = new JV(tt.text, tt.text.nodeValue);
        Dt.flags |= 8, Ot.append(Dt)
      }
      addInlineWidget(tt, et, Vt) {
        let Ot = this.afterWidget && 48 & tt.flags && (48 & this.afterWidget.flags) == (48 & tt.flags);
        Ot || this.flushBuffer();
        let qt = this.ensureMarks(et, Vt);
        Ot || 16 & tt.flags || qt.append(this.getBuffer(1)), qt.append(tt), this.pos += tt.length, this.afterWidget = tt
      }
      addMark(tt, et, Vt) {
        this.flushBuffer(), this.ensureMarks(et, Vt).append(tt), this.pos += tt.length, this.afterWidget = null
      }
      addBlockWidget(tt) {
        this.getBlockPos().append(tt), this.pos += tt.length, this.lastBlock = tt, this.endLine()
      }
      continueWidget(tt) {
        (this.afterWidget || this.lastBlock).length += tt, this.pos += tt
      }
      addLineStart(tt, et) {
        var Vt;
        tt || (tt = PV);
        let Ot = aV.start(tt, et || (null === (Vt = this.cache.find(aV)) || void 0 === Vt ? void 0 : Vt.dom), !!et);
        this.getBlockPos().append(this.lastBlock = this.curLine = Ot)
      }
      addLine(tt) {
        this.getBlockPos().append(tt), this.pos += tt.length, this.lastBlock = tt, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(tt) {
        this.blockPosCovered() || this.addLineStart(tt)
      }
      ensureLine(tt) {
        this.curLine || this.addLineStart(tt)
      }
      ensureMarks(tt, et) {
        var Vt;
        let Ot = this.curLine;
        for (let qt = tt.length - 1; qt >= 0; qt--) {
          let Dt, mt = tt[qt];
          if (et > 0 && (Dt = Ot.lastChild) && Dt instanceof bV && Dt.mark.eq(mt)) Ot = Dt, et--;
          else {
            let tt = bV.of(mt, null === (Vt = this.cache.find(bV, (tt => tt.mark.eq(mt)))) || void 0 === Vt ? void 0 : Vt.dom);
            Ot.append(tt), Ot = tt, et = 0
          }
        }
        return Ot
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let tt = this.curLine.lastChild;
          tt && IV(this.curLine, !1) && ("BR" == tt.dom.nodeName || !tt.isWidget() || Kt.ios && IV(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(FV, 0, 32) || new CV(FV.toDOM(), 0, FV, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let tt = this.wrappers.length - 1; tt >= 0; tt--) this.wrappers[tt].to < this.pos && this.wrappers.splice(tt, 1);
        for (let tt = this.blockWrappers; tt.value && tt.from <= this.pos; tt.next())
          if (tt.to >= this.pos) {
            let et = new hV(tt.from, tt.to, tt.value, tt.rank),
              Vt = this.wrappers.length;
            for (; Vt > 0 && (this.wrappers[Vt - 1].rank - et.rank || this.wrappers[Vt - 1].to - et.to) < 0;) Vt--;
            this.wrappers.splice(Vt, 0, et)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var tt;
        this.updateBlockWrappers();
        let et = this.root;
        for (let Vt of this.wrappers) {
          let Ot = et.lastChild;
          if (Vt.from < this.pos && Ot instanceof NV && Ot.wrapper.eq(Vt.wrapper)) et = Ot;
          else {
            let Ot = NV.of(Vt.wrapper, null === (tt = this.cache.find(NV, (tt => tt.wrapper.eq(Vt.wrapper)))) || void 0 === tt ? void 0 : tt.dom);
            et.append(Ot), et = Ot
          }
        }
        return et
      }
      blockPosCovered() {
        let tt = this.lastBlock;
        return null != tt && !tt.breakAfter && (!tt.isWidget() || (160 & tt.flags) > 0)
      }
      getBuffer(tt) {
        let et = 2 | (tt < 0 ? 16 : 32),
          Vt = this.cache.find(uV, void 0, 1);
        return Vt && (Vt.flags = et), Vt || new uV(et)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class WV {
      constructor(tt) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = tt.iter()
      }
      skip(tt) {
        this.textOff + tt <= this.text.length ? this.textOff += tt : (this.skipCount += tt - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(tt) {
        if (this.textOff == this.text.length) {
          let {
            value: et,
            lineBreak: Vt,
            done: Ot
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Ot) throw new Error("Ran out of text content when drawing inline views");
          this.text = et;
          let qt = this.textOff = Math.min(tt, et.length);
          return Vt ? null : et.slice(0, qt)
        }
        let et = Math.min(this.text.length, this.textOff + tt),
          Vt = this.text.slice(this.textOff, et);
        return this.textOff = et, Vt
      }
    }
    const SV = [CV, aV, JV, bV, uV, NV, yV];
    for (let Pm = 0; Pm < SV.length; Pm++) SV[Pm].bucket = Pm;
    class cV {
      constructor(tt) {
        this.view = tt, this.buckets = SV.map((() => [])), this.index = SV.map((() => 0)), this.reused = new Map
      }
      add(tt) {
        let et = tt.constructor.bucket,
          Vt = this.buckets[et];
        Vt.length < 6 ? Vt.push(tt) : Vt[this.index[et] = (this.index[et] + 1) % 6] = tt
      }
      find(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Ot = tt.bucket,
          qt = this.buckets[Ot],
          Dt = this.index[Ot];
        for (let mt = qt.length - 1; mt >= 0; mt--) {
          let tt = (mt + Dt) % qt.length,
            dt = qt[tt];
          if ((!et || et(dt)) && !this.reused.has(dt)) return qt.splice(tt, 1), tt < Dt && this.index[Ot]--, this.reused.set(dt, Vt), dt
        }
        return null
      }
      findWidget(tt, et, Vt) {
        let Ot = this.buckets[0];
        if (Ot.length)
          for (let qt = 0, Dt = 0;; qt++) {
            if (qt == Ot.length) {
              if (Dt) return null;
              Dt = 1, qt = 0
            }
            let mt = Ot[qt];
            if (!this.reused.has(mt) && (0 == Dt ? mt.widget.compare(tt) : mt.widget.constructor == tt.constructor && tt.updateDOM(mt.dom, this.view, mt.widget))) return Ot.splice(qt, 1), qt < this.index[0] && this.index[0]--, mt.widget == tt && mt.length == et && (497 & mt.flags) == Vt ? (this.reused.set(mt, 1), mt) : (this.reused.set(mt, 2), new CV(mt.dom, et, tt, -498 & mt.flags | Vt))
          }
      }
      reuse(tt) {
        return this.reused.set(tt, 1), tt
      }
      maybeReuse(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(tt)) return this.reused.set(tt, et), tt.dom
      }
      clear() {
        for (let tt = 0; tt < this.buckets.length; tt++) this.buckets[tt].length = this.index[tt] = 0
      }
    }
    class RV {
      constructor(tt, et, Vt, qt, Dt) {
        this.view = tt, this.NO = qt, this.disallowBlockEffectsFor = Dt, this.openWidget = !1, this.openMarks = 0, this.cache = new cV(tt), this.text = new WV(tt.state.doc), this.builder = new vV(this.cache, new yV(tt, tt.contentDOM), Ot.B.iter(Vt)), this.cache.reused.set(et, 2), this.old = new KV(et), this.reuseWalker = {
          skip: (tt, et, Vt) => {
            if (this.cache.add(tt), tt.isComposite()) return !1
          },
          enter: tt => this.cache.add(tt),
          leave: () => {},
          break: () => {}
        }
      }
      run(tt, et) {
        let Vt = et && this.getCompositionContext(et.text);
        for (let Ot = 0, qt = 0, Dt = 0;;) {
          let mt = Dt < tt.length ? tt[Dt++] : null,
            dt = mt ? mt.fromA : this.old.root.length;
          if (dt > Ot) {
            let tt = dt - Ot;
            this.preserve(tt, !Dt, !mt), Ot = dt, qt += tt
          }
          if (!mt) break;
          et && mt.fromA <= et.range.fromA && mt.toA >= et.range.toA ? (this.forward(mt.fromA, et.range.fromA, et.range.fromA < et.range.toA ? 1 : -1), this.emit(qt, et.range.fromB), this.cache.clear(), this.builder.addComposition(et, Vt), this.text.skip(et.range.toB - et.range.fromB), this.forward(et.range.fromA, mt.toA), this.emit(et.range.toB, mt.toB)) : (this.forward(mt.fromA, mt.toA), this.emit(qt, mt.toB)), qt = mt.toB, Ot = mt.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(tt, et, Vt) {
        let Ot = function(tt) {
            let et = [];
            for (let Vt = tt.parents.length; Vt > 1; Vt--) {
              let Ot = Vt == tt.parents.length ? tt.tile : tt.parents[Vt].tile;
              Ot instanceof bV && et.push(Ot.mark)
            }
            return et
          }(this.old),
          qt = this.openMarks;
        this.old.advance(tt, Vt ? 1 : -1, {
          skip: (tt, et, Vt) => {
            if (tt.isWidget())
              if (this.openWidget) this.builder.continueWidget(Vt - et);
              else {
                let Dt = Vt > 0 || et < tt.length ? CV.of(tt.widget, this.view, Vt - et, 496 & tt.flags, this.cache.maybeReuse(tt)) : this.cache.reuse(tt);
                256 & Dt.flags ? (Dt.flags &= -2, this.builder.addBlockWidget(Dt)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(Dt, Ot, qt), qt = Ot.length)
              }
            else if (tt.isText()) this.builder.ensureLine(null), et || Vt != tt.length || this.cache.reused.has(tt) ? (this.cache.add(tt), this.builder.addText(tt.text.slice(et, Vt), Ot, qt)) : this.builder.addText(tt.text, Ot, qt, this.cache.reuse(tt)), qt = Ot.length;
            else if (tt.isLine()) tt.flags &= -2, this.cache.reused.set(tt, 1), this.builder.addLine(tt);
            else if (tt instanceof uV) this.cache.add(tt);
            else {
              if (!(tt instanceof bV)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(tt, Ot, qt), this.cache.reused.set(tt, 1), qt = Ot.length
            }
            this.openWidget = !1
          },
          enter: tt => {
            tt.isLine() ? this.builder.addLineStart(tt.attrs, this.cache.maybeReuse(tt)) : (this.cache.add(tt), tt instanceof bV && Ot.unshift(tt.mark)), this.openWidget = !1
          },
          leave: tt => {
            tt.isLine() ? Ot.length && (Ot.length = qt = 0) : tt instanceof bV && (Ot.shift(), qt = Math.min(qt, Ot.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(tt)
      }
      emit(tt, et) {
        let Vt = null,
          qt = this.builder,
          Dt = 0,
          mt = Ot.B.spans(this.NO, tt, et, {
            point: (tt, et, Ot, mt, dt, jt) => {
              if (Ot instanceof Ft) {
                if (this.disallowBlockEffectsFor[jt]) {
                  if (Ot.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (et > this.view.state.doc.lineAt(tt).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (Dt = mt.length, dt > mt.length) qt.continueWidget(et - tt);
                else {
                  let Dt = Ot.widget || (Ot.block ? LV.block : LV.inline),
                    jt = function(tt) {
                      let et = tt.isReplace ? (tt.startSide < 0 ? 64 : 0) | (tt.endSide > 0 ? 128 : 0) : tt.startSide > 0 ? 32 : 16;
                      tt.block && (et |= 256);
                      return et
                    }(Ot),
                    Ht = this.cache.findWidget(Dt, et - tt, jt) || CV.of(Dt, this.view, et - tt, jt);
                  Ot.block ? (Ot.startSide > 0 && qt.addLineStartIfNotCovered(Vt), qt.addBlockWidget(Ht)) : (qt.ensureLine(Vt), qt.addInlineWidget(Ht, mt, dt))
                }
                Vt = null
              } else Vt = function(tt, et) {
                let Vt = et.spec.attributes,
                  Ot = et.spec.class;
                if (!Vt && !Ot) return tt;
                tt || (tt = {
                  class: "cm-line"
                });
                Vt && ht(Vt, tt);
                Ot && (tt.class += " " + Ot);
                return tt
              }(Vt, Ot);
              et > tt && this.text.skip(et - tt)
            },
            span: (tt, et, Ot, Dt) => {
              for (let mt = tt; mt < et;) {
                let dt = this.text.next(Math.min(512, et - mt));
                null == dt ? (qt.addLineStartIfNotCovered(Vt), qt.addBreak(), mt++) : (qt.ensureLine(Vt), qt.addText(dt, Ot, mt == tt ? Dt : Ot.length), mt += dt.length), Vt = null
              }
            }
          });
        qt.addLineStartIfNotCovered(Vt), this.openWidget = mt > Dt, this.openMarks = mt
      }
      forward(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        et - tt <= 10 ? this.old.advance(et - tt, Vt, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(et - tt - 10, -1), this.old.advance(5, Vt, this.reuseWalker))
      }
      getCompositionContext(tt) {
        let et = [],
          Vt = null;
        for (let Ot = tt.parentNode;; Ot = Ot.parentNode) {
          let tt = EV.get(Ot);
          if (Ot == this.view.contentDOM) break;
          tt instanceof bV ? et.push(tt) : (null === tt || void 0 === tt ? void 0 : tt.isLine()) ? Vt = tt : tt instanceof NV || ("DIV" != Ot.nodeName || Vt || Ot == this.view.contentDOM ? Vt || et.push(bV.of(new Zt({
            tagName: Ot.nodeName.toLowerCase(),
            attributes: ct(Ot)
          }), Ot)) : Vt = new aV(Ot, PV))
        }
        return {
          line: Vt,
          marks: et
        }
      }
    }

    function IV(tt, et) {
      let Vt = tt => {
        for (let Ot of tt.children)
          if ((et ? Ot.isText() : Ot.length) || Vt(Ot)) return !0;
        return !1
      };
      return Vt(tt)
    }
    const PV = {
      class: "cm-line"
    };

    function ZV(tt) {
      let et = EV.get(tt);
      return et && et.setDOM(tt.cloneNode()), tt
    }
    class LV extends Rt {
      constructor(tt) {
        super(), this.tag = tt
      }
      eq(tt) {
        return tt.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(tt) {
        return tt.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    LV.inline = new LV("span"), LV.block = new LV("div");
    const FV = new class extends Rt {
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
    class kV {
      constructor(tt) {
        this.view = tt, this.NO = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Pt.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new yV(tt, tt.contentDOM), this.updateInner([new XV(0, 0, 0, tt.state.doc.length)], null)
      }
      update(tt) {
        var et;
        let Vt = tt.changedRanges;
        this.minWidth > 0 && Vt.length && (Vt.every((tt => {
          let {
            fromA: et,
            toA: Vt
          } = tt;
          return Vt < this.minWidthFrom || et > this.minWidthTo
        })) ? (this.minWidthFrom = tt.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = tt.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(tt);
        let qt = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (et = this.domChanged) || void 0 === et ? void 0 : et.newSel) ? qt = this.domChanged.newSel.head : function(tt, et) {
          let Vt = !1;
          et && tt.iterChangedRanges(((tt, Ot) => {
            tt < et.to && Ot > et.from && (Vt = !0)
          }));
          return Vt
        }(tt.changes, this.hasComposition) || tt.selectionSet || (qt = tt.state.selection.main.head));
        let Dt = qt > -1 ? function(tt, et, Vt) {
          let Ot = zV(tt, Vt);
          if (!Ot) return null;
          let {
            node: qt,
            from: Dt,
            to: mt
          } = Ot, dt = qt.nodeValue;
          if (/[\n\r]/.test(dt)) return null;
          if (tt.state.doc.sliceString(Ot.from, Ot.to) != dt) return null;
          let jt = et.invertedDesc;
          return {
            range: new XV(jt.mapPos(Dt), jt.mapPos(mt), Dt, mt),
            text: qt
          }
        }(this.view, tt.changes, qt) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: et,
            to: Ot
          } = this.hasComposition;
          Vt = new XV(et, Ot, tt.changes.mapPos(et, -1), tt.changes.mapPos(Ot, 1)).addToSet(Vt.slice())
        }
        this.hasComposition = Dt ? {
          from: Dt.range.fromB,
          to: Dt.range.toB
        } : null, (Kt.ie || Kt.chrome) && !Dt && tt && tt.state.doc.lines != tt.startState.doc.lines && (this.forceSelection = !0);
        let mt = this.NO,
          dt = this.blockWrappers;
        this.updateDeco();
        let jt = function(tt, et, Vt) {
          let qt = new oV;
          return Ot.B.compare(tt, et, Vt, qt), qt.changes
        }(mt, this.NO, tt.changes);
        jt.length && (Vt = XV.extendWithRanges(Vt, jt));
        let Ht = function(tt, et, Vt) {
          let qt = new rV;
          return Ot.B.compare(tt, et, Vt, qt), qt.changes
        }(dt, this.blockWrappers, tt.changes);
        return Ht.length && (Vt = XV.extendWithRanges(Vt, Ht)), Dt && !Vt.some((tt => tt.fromA <= Dt.range.fromA && tt.toA >= Dt.range.toA)) && (Vt = Dt.range.addToSet(Vt.slice())), !(2 & this.tile.flags && 0 == Vt.length) && (this.updateInner(Vt, Dt), tt.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(tt, et) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: Vt
        } = this.view;
        Vt.ignore((() => {
          if (et || tt.length) {
            let Vt = this.tile,
              Ot = new RV(this.view, Vt, this.blockWrappers, this.NO, this.dynamicDecorationMap);
            et && EV.get(et.text) && Ot.cache.reused.set(EV.get(et.text), 2), this.tile = Ot.run(tt, et), GV(Vt, Ot.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Ot = Kt.chrome || Kt.ios ? {
            node: Vt.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Ot), !Ot || !Ot.written && Vt.selectionRange.focusNode == Ot.node && this.tile.dom.contains(Ot.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Ot = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let qt of this.tile.children) qt.isWidget() && qt.widget instanceof UV && Ot.push(qt.dom);
        Vt.updateGaps(Ot)
      }
      updateEditContextFormatting(tt) {
        this.editContextFormatting = this.editContextFormatting.map(tt.changes);
        for (let et of tt.transactions)
          for (let tt of et.effects) tt.is(Ye) && (this.editContextFormatting = tt.value)
      }
      updateSelection() {
        let tt = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: et
        } = this.tile, Vt = this.view.root.activeElement, Ot = Vt == et, qt = !Ot && !(this.view.state.facet(pe) || et.tabIndex > -1) && Ut(et, this.view.observer.selectionRange) && !(Vt && et.contains(Vt));
        if (!(Ot || tt || qt)) return;
        let Dt = this.forceSelection;
        this.forceSelection = !1;
        let mt, dt, jt = this.view.state.selection.main;
        if (jt.empty ? dt = mt = this.inlineDOMNearPos(jt.anchor, jt.assoc || 1) : (dt = this.inlineDOMNearPos(jt.head, jt.head == jt.from ? 1 : -1), mt = this.inlineDOMNearPos(jt.anchor, jt.anchor == jt.from ? 1 : -1)), Kt.gecko && jt.empty && !this.hasComposition && (1 == (Ht = mt).node.nodeType && Ht.node.firstChild && (0 == Ht.offset || "false" == Ht.node.childNodes[Ht.offset - 1].contentEditable) && (Ht.offset == Ht.node.childNodes.length || "false" == Ht.node.childNodes[Ht.offset].contentEditable))) {
          let tt = document.createTextNode("");
          this.view.observer.ignore((() => mt.node.insertBefore(tt, mt.node.childNodes[mt.offset] || null))), mt = dt = new He(tt, 0), Dt = !0
        }
        var Ht;
        let Xt = this.view.observer.selectionRange;
        !Dt && Xt.focusNode && (it(mt.node, mt.offset, Xt.anchorNode, Xt.anchorOffset) && it(dt.node, dt.offset, Xt.focusNode, Xt.focusOffset) || this.suppressWidgetCursorChange(Xt, jt)) || (this.view.observer.ignore((() => {
          Kt.android && Kt.chrome && et.contains(Xt.focusNode) && function(tt, et) {
            for (let Vt = tt; Vt && Vt != et; Vt = Vt.assignedSlot || Vt.parentNode)
              if (1 == Vt.nodeType && "false" == Vt.contentEditable) return !0;
            return !1
          }(Xt.focusNode, et) && (et.blur(), et.focus({
            preventScroll: !0
          }));
          let tt = ot(this.view.root);
          if (tt)
            if (jt.empty) {
              if (Kt.gecko) {
                let tt = (Ot = mt.node, Dt = mt.offset, 1 != Ot.nodeType ? 0 : (Dt && "false" == Ot.childNodes[Dt - 1].contentEditable ? 1 : 0) | (Dt < Ot.childNodes.length && "false" == Ot.childNodes[Dt].contentEditable ? 2 : 0));
                if (tt && 3 != tt) {
                  let et = (1 == tt ? de : je)(mt.node, mt.offset);
                  et && (mt = new He(et.node, et.offset))
                }
              }
              tt.collapse(mt.node, mt.offset), null != jt.bidiLevel && void 0 !== tt.caretBidiLevel && (tt.caretBidiLevel = jt.bidiLevel)
            } else if (tt.extend) {
            tt.collapse(mt.node, mt.offset);
            try {
              tt.extend(dt.node, dt.offset)
            } catch (Ht) {}
          } else {
            let et = document.createRange();
            jt.anchor > jt.head && ([mt, dt] = [dt, mt]), et.setEnd(dt.node, dt.offset), et.setStart(mt.node, mt.offset), tt.removeAllRanges(), tt.addRange(et)
          } else;
          var Ot, Dt;
          qt && this.view.root.activeElement == et && (et.blur(), Vt && Vt.focus())
        })), this.view.observer.setSelectionRange(mt, dt)), this.impreciseAnchor = mt.precise ? null : new He(Xt.anchorNode, Xt.anchorOffset), this.impreciseHead = dt.precise ? null : new He(Xt.focusNode, Xt.focusOffset)
      }
      suppressWidgetCursorChange(tt, et) {
        return this.hasComposition && et.empty && it(tt.focusNode, tt.focusOffset, tt.anchorNode, tt.anchorOffset) && this.posFromDOM(tt.focusNode, tt.focusOffset) == et.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: tt
        } = this, et = tt.state.selection.main, Vt = ot(tt.root), {
          anchorNode: Ot,
          anchorOffset: qt
        } = tt.observer.selectionRange;
        if (!Vt || !et.empty || !et.assoc || !Vt.modify) return;
        let Dt = this.lineAt(et.head, et.assoc);
        if (!Dt) return;
        let mt = Dt.posAtStart;
        if (et.head == mt || et.head == mt + Dt.length) return;
        let dt = this.coordsAt(et.head, -1),
          jt = this.coordsAt(et.head, 1);
        if (!dt || !jt || dt.bottom > jt.top) return;
        let Ht = this.domAtPos(et.head + et.assoc, et.assoc);
        Vt.collapse(Ht.node, Ht.offset), Vt.modify("move", et.assoc < 0 ? "forward" : "backward", "lineboundary"), tt.observer.readSelectionRange();
        let Xt = tt.observer.selectionRange;
        tt.docView.posFromDOM(Xt.anchorNode, Xt.anchorOffset) != et.from && Vt.collapse(Ot, qt)
      }
      posFromDOM(tt, et) {
        let Vt = this.tile.nearest(tt);
        if (!Vt) return 2 & this.tile.dom.compareDocumentPosition(tt) ? 0 : this.view.state.doc.length;
        let Ot = Vt.posAtStart;
        if (!Vt.isComposite()) return Vt.isText() ? tt == Vt.dom ? Ot + et : Ot + (et ? Vt.length : 0) : Ot;
        {
          let qt;
          if (tt == Vt.dom) qt = Vt.dom.childNodes[et];
          else {
            let Ot = 0 == xt(tt) ? 0 : 0 == et ? -1 : 1;
            for (;;) {
              let et = tt.parentNode;
              if (et == Vt.dom) break;
              0 == Ot && et.firstChild != et.lastChild && (Ot = tt == et.firstChild ? -1 : 1), tt = et
            }
            qt = Ot < 0 ? tt : tt.nextSibling
          }
          if (qt == Vt.dom.firstChild) return Ot;
          for (; qt && !EV.get(qt);) qt = qt.nextSibling;
          if (!qt) return Ot + Vt.length;
          for (let tt = 0, et = Ot;; tt++) {
            let Ot = Vt.children[tt];
            if (Ot.dom == qt) return et;
            et += Ot.length + Ot.breakAfter
          }
        }
      }
      domAtPos(tt, et) {
        let {
          tile: Vt,
          offset: Ot
        } = this.tile.resolveBlock(tt, et);
        return Vt.isWidget() ? Vt.domPosFor(tt, et) : Vt.domIn(Ot, et)
      }
      inlineDOMNearPos(tt, et) {
        let Vt, Ot, qt = -1,
          Dt = !1,
          mt = -1,
          dt = !1;
        return this.tile.blockTiles(((et, jt) => {
          if (et.isWidget()) {
            if (32 & et.flags && jt >= tt) return !0;
            16 & et.flags && (Dt = !0)
          } else {
            let Ht = jt + et.length;
            if (jt <= tt && (Vt = et, qt = tt - jt, Dt = Ht < tt), Ht >= tt && !Ot && (Ot = et, mt = tt - jt, dt = jt > tt), jt > tt && Ot) return !0
          }
        })), Vt || Ot ? (Dt && Ot ? Vt = null : dt && Vt && (Ot = null), Vt && et < 0 || !Ot ? Vt.domIn(qt, et) : Ot.domIn(mt, et)) : this.domAtPos(tt, et)
      }
      coordsAt(tt, et) {
        let {
          tile: Vt,
          offset: Ot
        } = this.tile.resolveBlock(tt, et);
        return Vt.isWidget() ? Vt.widget instanceof UV ? null : Vt.coordsInWidget(Ot, et, !0) : Vt.coordsIn(Ot, et)
      }
      lineAt(tt, et) {
        let {
          tile: Vt
        } = this.tile.resolveBlock(tt, et);
        return Vt.isLine() ? Vt : null
      }
      coordsForChar(tt) {
        let {
          tile: et,
          offset: Vt
        } = this.tile.resolveBlock(tt, 1);
        if (!et.isLine()) return null;
        return function tt(et, Vt) {
          if (et.isComposite())
            for (let Ot of et.children) {
              if (Ot.length >= Vt) {
                let et = tt(Ot, Vt);
                if (et) return et
              }
              if ((Vt -= Ot.length) < 0) break
            } else if (et.isText() && Vt < et.length) {
              let tt = (0, Ot.$)(et.text, Vt);
              if (tt == Vt) return null;
              let qt = qe(et.dom, Vt, tt).getClientRects();
              for (let et = 0; et < qt.length; et++) {
                let tt = qt[et];
                if (et == qt.length - 1 || tt.top < tt.bottom && tt.left < tt.right) return tt
              }
            } return null
        }(et, Vt)
      }
      measureVisibleLineHeights(tt) {
        let et = [],
          {
            from: Vt,
            to: Ot
          } = tt,
          qt = this.view.contentDOM.clientWidth,
          Dt = qt > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          mt = -1,
          dt = this.view.textDirection == Xe.LTR,
          jt = 0,
          Ht = (tt, Xt, Qt) => {
            for (let lt = 0; lt < tt.children.length && !(Xt > Ot); lt++) {
              let Ot = tt.children[lt],
                Et = Xt + Ot.length,
                ft = Ot.dom.getBoundingClientRect(),
                {
                  height: wt
                } = ft;
              if (Qt && !lt && (jt += ft.top - Qt.top), Ot instanceof NV) Et > Vt && Ht(Ot, Xt, ft);
              else if (Xt >= Vt && (jt > 0 && et.push(-jt), et.push(wt + jt), jt = 0, Dt)) {
                let tt = Ot.dom.lastChild,
                  et = tt ? At(tt) : [];
                if (et.length) {
                  let tt = et[et.length - 1],
                    Vt = dt ? tt.right - ft.left : ft.right - tt.left;
                  Vt > mt && (mt = Vt, this.minWidth = qt, this.minWidthFrom = Xt, this.minWidthTo = Et)
                }
              }
              Qt && lt == tt.children.length - 1 && (jt += Qt.bottom - ft.bottom), Xt = Et + Ot.breakAfter
            }
          };
        return Ht(this.tile, 0, null), et
      }
      textDirectionAt(tt) {
        let {
          tile: et
        } = this.tile.resolveBlock(tt, 1);
        return "rtl" == getComputedStyle(et.dom).direction ? Xe.RTL : Xe.LTR
      }
      measureTextSize() {
        let tt = this.tile.blockTiles((tt => {
          if (tt.isLine() && tt.children.length && tt.length <= 20) {
            let et, Vt = 0;
            for (let Ot of tt.children) {
              if (!Ot.isText() || /[^ -~]/.test(Ot.text)) return;
              let tt = At(Ot.dom);
              if (1 != tt.length) return;
              Vt += tt[0].width, et = tt[0].height
            }
            if (Vt) return {
              lineHeight: tt.dom.getBoundingClientRect().height,
              charWidth: Vt / tt.length,
              textHeight: et
            }
          }
        }));
        if (tt) return tt;
        let et, Vt, Ot, qt = document.createElement("div");
        return qt.className = "cm-line", qt.style.width = "99999px", qt.style.position = "absolute", qt.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(qt);
          let tt = At(qt.firstChild)[0];
          et = qt.getBoundingClientRect().height, Vt = tt && tt.width ? tt.width / 27 : 7, Ot = tt && tt.height ? tt.height : et, qt.remove()
        })), {
          lineHeight: et,
          charWidth: Vt,
          textHeight: Ot
        }
      }
      computeBlockGapDeco() {
        let tt = [],
          et = this.view.viewState;
        for (let Vt = 0, Ot = 0;; Ot++) {
          let qt = Ot == et.viewports.length ? null : et.viewports[Ot],
            Dt = qt ? qt.from - 1 : this.view.state.doc.length;
          if (Dt > Vt) {
            let Ot = (et.lineBlockAt(Dt).bottom - et.lineBlockAt(Vt).top) / this.view.scaleY;
            tt.push(Pt.replace({
              widget: new UV(Ot),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(Vt, Dt))
          }
          if (!qt) break;
          Vt = qt.to + 1
        }
        return Pt.set(tt)
      }
      updateDeco() {
        let tt = 1,
          et = this.view.state.facet(eV).map((et => (this.dynamicDecorationMap[tt++] = "function" == typeof et) ? et(this.view) : et)),
          Vt = !1,
          qt = this.view.state.facet(OV).map(((tt, et) => {
            let Ot = "function" == typeof tt;
            return Ot && (Vt = !0), Ot ? tt(this.view) : tt
          }));
        for (qt.length && (this.dynamicDecorationMap[tt++] = Vt, et.push(Ot.B.join(qt))), this.NO = [this.editContextFormatting, ...et, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; tt < this.NO.length;) this.dynamicDecorationMap[tt++] = !1;
        this.blockWrappers = this.view.state.facet(VV).map((tt => "function" == typeof tt ? tt(this.view) : tt))
      }
      scrollIntoView(tt) {
        var et;
        if (tt.isSnapshot) {
          let et = this.view.viewState.lineBlockAt(tt.range.head);
          return this.view.scrollDOM.scrollTop = et.top - tt.yMargin, void(this.view.scrollDOM.scrollLeft = tt.xMargin)
        }
        for (let Xt of this.view.state.facet(Ue)) try {
          if (Xt(this.view, tt.range, tt)) return !0
        } catch (Ht) {
          Be(this.view.state, Ht, "scroll handler")
        }
        let Vt, {
            range: Ot
          } = tt,
          qt = this.coordsAt(Ot.head, null !== (et = Ot.assoc) && void 0 !== et ? et : Ot.empty ? 0 : Ot.head > Ot.anchor ? -1 : 1);
        if (!qt) return;
        !Ot.empty && (Vt = this.coordsAt(Ot.anchor, Ot.anchor > Ot.head ? -1 : 1)) && (qt = {
          left: Math.min(qt.left, Vt.left),
          top: Math.min(qt.top, Vt.top),
          right: Math.max(qt.right, Vt.right),
          bottom: Math.max(qt.bottom, Vt.bottom)
        });
        let Dt = jV(this.view),
          mt = {
            left: qt.left - Dt.left,
            top: qt.top - Dt.top,
            right: qt.right + Dt.right,
            bottom: qt.bottom + Dt.bottom
          },
          {
            offsetWidth: dt,
            offsetHeight: jt
          } = this.view.scrollDOM;
        if (function(tt, et, Vt, Ot, qt, Dt, mt, dt) {
            let jt = tt.ownerDocument,
              Ht = jt.defaultView || window;
            for (let Xt = tt, Qt = !1; Xt && !Qt;)
              if (1 == Xt.nodeType) {
                let tt, lt = Xt == jt.body,
                  Et = 1,
                  ft = 1;
                if (lt) tt = gt(Ht);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(Xt).position) && (Qt = !0), Xt.scrollHeight <= Xt.clientHeight && Xt.scrollWidth <= Xt.clientWidth) {
                    Xt = Xt.assignedSlot || Xt.parentNode;
                    continue
                  }
                  let et = Xt.getBoundingClientRect();
                  ({
                    scaleX: Et,
                    scaleY: ft
                  } = st(Xt, et)), tt = {
                    left: et.left,
                    right: et.left + Xt.clientWidth * Et,
                    top: et.top,
                    bottom: et.top + Xt.clientHeight * ft
                  }
                }
                let wt = 0,
                  yt = 0;
                if ("nearest" == qt) et.top < tt.top + mt ? (yt = et.top - (tt.top + mt), Vt > 0 && et.bottom > tt.bottom + yt && (yt = et.bottom - tt.bottom + mt)) : et.bottom > tt.bottom - mt && (yt = et.bottom - tt.bottom + mt, Vt < 0 && et.top - yt < tt.top && (yt = et.top - (tt.top + mt)));
                else {
                  let Ot = et.bottom - et.top,
                    Dt = tt.bottom - tt.top;
                  yt = ("center" == qt && Ot <= Dt ? et.top + Ot / 2 - Dt / 2 : "start" == qt || "center" == qt && Vt < 0 ? et.top - mt : et.bottom - Dt + mt) - tt.top
                }
                if ("nearest" == Ot ? et.left < tt.left + Dt ? (wt = et.left - (tt.left + Dt), Vt > 0 && et.right > tt.right + wt && (wt = et.right - tt.right + Dt)) : et.right > tt.right - Dt && (wt = et.right - tt.right + Dt, Vt < 0 && et.left < tt.left + wt && (wt = et.left - (tt.left + Dt))) : wt = ("center" == Ot ? et.left + (et.right - et.left) / 2 - (tt.right - tt.left) / 2 : "start" == Ot == dt ? et.left - Dt : et.right - (tt.right - tt.left) + Dt) - tt.left, wt || yt)
                  if (lt) Ht.scrollBy(wt, yt);
                  else {
                    let tt = 0,
                      Vt = 0;
                    if (yt) {
                      let tt = Xt.scrollTop;
                      Xt.scrollTop += yt / ft, Vt = (Xt.scrollTop - tt) * ft
                    }
                    if (wt) {
                      let et = Xt.scrollLeft;
                      Xt.scrollLeft += wt / Et, tt = (Xt.scrollLeft - et) * Et
                    }
                    et = {
                      left: et.left - tt,
                      top: et.top - Vt,
                      right: et.right - tt,
                      bottom: et.bottom - Vt
                    }, tt && Math.abs(tt - wt) < 1 && (Ot = "nearest"), Vt && Math.abs(Vt - yt) < 1 && (qt = "nearest")
                  } if (lt) break;
                (et.top < tt.top || et.bottom > tt.bottom || et.left < tt.left || et.right > tt.right) && (et = {
                  left: Math.max(et.left, tt.left),
                  right: Math.min(et.right, tt.right),
                  top: Math.max(et.top, tt.top),
                  bottom: Math.min(et.bottom, tt.bottom)
                }), Xt = Xt.assignedSlot || Xt.parentNode
              } else {
                if (11 != Xt.nodeType) break;
                Xt = Xt.host
              }
          }(this.view.scrollDOM, mt, Ot.head < Ot.anchor ? -1 : 1, tt.x, tt.y, Math.max(Math.min(tt.xMargin, dt), -dt), Math.max(Math.min(tt.yMargin, jt), -jt), this.view.textDirection == Xe.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (qt.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || qt.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let tt = this.view.docView.lineAt(Ot.head, 1);
          tt && tt.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(tt) {
        let et = tt => tt.isWidget() || tt.children.some(et);
        return et(this.tile.resolveBlock(tt, 1).tile)
      }
      destroy() {
        GV(this.tile)
      }
    }

    function GV(tt, et) {
      let Vt = null === et || void 0 === et ? void 0 : et.get(tt);
      if (1 != Vt) {
        null == Vt && tt.destroy();
        for (let Vt of tt.children) GV(Vt, et)
      }
    }

    function zV(tt, et) {
      let Vt = tt.observer.selectionRange;
      if (!Vt.focusNode) return null;
      let Ot = de(Vt.focusNode, Vt.focusOffset),
        qt = je(Vt.focusNode, Vt.focusOffset),
        Dt = Ot || qt;
      if (qt && Ot && qt.node != Ot.node) {
        let et = EV.get(qt.node);
        if (!et || et.isText() && et.text != qt.node.nodeValue) Dt = qt;
        else if (tt.docView.lastCompositionAfterCursor) {
          let tt = EV.get(Ot.node);
          !tt || tt.isText() && tt.text != Ot.node.nodeValue || (Dt = qt)
        }
      }
      if (tt.docView.lastCompositionAfterCursor = Dt != Ot, !Dt) return null;
      let mt = et - Dt.offset;
      return {
        from: mt,
        to: mt + Dt.node.nodeValue.length,
        node: Dt.node
      }
    }
    let oV = class {
      constructor() {
        this.changes = []
      }
      compareRange(tt, et) {
        Gt(tt, et, this.changes)
      }
      comparePoint(tt, et) {
        Gt(tt, et, this.changes)
      }
      boundChange(tt) {
        Gt(tt, tt, this.changes)
      }
    };
    class rV {
      constructor() {
        this.changes = []
      }
      compareRange(tt, et) {
        Gt(tt, et, this.changes)
      }
      comparePoint() {}
      boundChange(tt) {
        Gt(tt, tt, this.changes)
      }
    }
    class UV extends Rt {
      constructor(tt) {
        super(), this.height = tt
      }
      toDOM() {
        let tt = document.createElement("div");
        return tt.className = "cm-gap", this.updateDOM(tt), tt
      }
      eq(tt) {
        return tt.height == this.height
      }
      updateDOM(tt) {
        return tt.style.height = this.height + "px", !0
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

    function AV(tt, et, Vt) {
      let Ot = tt.lineBlockAt(et);
      if (Array.isArray(Ot.type)) {
        let tt;
        for (let qt of Ot.type) {
          if (qt.from > et) break;
          if (!(qt.to < et)) {
            if (qt.from < et && qt.to > et) return qt;
            tt && (qt.type != It.Text || tt.type == qt.type && !(Vt < 0 ? qt.from < et : qt.to > et)) || (tt = qt)
          }
        }
        return tt || Ot
      }
      return Ot
    }

    function iV(tt, et, Vt, Ot) {
      let qt = tt.state.doc.lineAt(et.head),
        Dt = tt.bidiSpans(qt),
        mt = tt.textDirectionAt(qt.from);
      for (let dt = et, jt = null;;) {
        let et = Se(qt, Dt, mt, dt, Vt),
          Ht = We;
        if (!et) {
          if (qt.number == (Vt ? tt.state.doc.lines : 1)) return dt;
          Ht = "\n", qt = tt.state.doc.line(qt.number + (Vt ? 1 : -1)), Dt = tt.bidiSpans(qt), et = tt.visualLineSide(qt, !Vt)
        }
        if (jt) {
          if (!jt(Ht)) return dt
        } else {
          if (!Ot) return et;
          jt = Ot(Ht)
        }
        dt = et
      }
    }

    function YV(tt, et, Vt) {
      for (;;) {
        let Ot = 0;
        for (let qt of tt) qt.between(et - 1, et + 1, ((tt, qt, Dt) => {
          if (et > tt && et < qt) {
            let Dt = Ot || Vt || (et - tt < qt - et ? -1 : 1);
            et = Dt < 0 ? tt : qt, Ot = Dt
          }
        }));
        if (!Ot) return et
      }
    }

    function BV(tt, et) {
      let Vt = null;
      for (let qt = 0; qt < et.nw.length; qt++) {
        let Dt = et.nw[qt],
          mt = null;
        if (Dt.empty) {
          let et = YV(tt, Dt.from, 0);
          et != Dt.from && (mt = Ot.n.cursor(et, -1))
        } else {
          let et = YV(tt, Dt.from, -1),
            Vt = YV(tt, Dt.to, 1);
          et == Dt.from && Vt == Dt.to || (mt = Ot.n.range(Dt.from == Dt.anchor ? et : Vt, Dt.from == Dt.head ? et : Vt))
        }
        mt && (Vt || (Vt = et.nw.slice()), Vt[qt] = mt)
      }
      return Vt ? Ot.n.create(Vt, et.mainIndex) : et
    }

    function pV(tt, et, Vt) {
      let qt = YV(tt.state.facet(qV).map((et => et(tt))), Vt.from, et.head > Vt.from ? -1 : 1);
      return qt == Vt.from ? Vt : Ot.n.cursor(qt, qt < Vt.from ? 1 : -1)
    }
    class xV {
      constructor(tt, et) {
        this.pos = tt, this.assoc = et
      }
    }

    function TV(tt, et, Vt, qt) {
      let Dt, mt = tt.contentDOM.getBoundingClientRect(),
        dt = mt.top + tt.viewState.paddingTop,
        {
          x: jt,
          y: Ht
        } = et,
        Xt = Ht - dt;
      for (;;) {
        if (Xt < 0) return new xV(0, 1);
        if (Xt > tt.viewState.docHeight) return new xV(tt.state.doc.length, -1);
        if (Dt = tt.elementAtHeight(Xt), null == qt) break;
        if (Dt.type == It.Text) {
          if (qt < 0 ? Dt.to < tt.viewport.from : Dt.from > tt.viewport.to) break;
          let et = tt.docView.coordsAt(qt < 0 ? Dt.from : Dt.to, qt > 0 ? -1 : 1);
          if (et && (qt < 0 ? et.top <= Xt + dt : et.bottom >= Xt + dt)) break
        }
        let et = tt.viewState.heightOracle.textHeight / 2;
        Xt = qt > 0 ? Dt.bottom + et : Dt.top - et
      }
      if (tt.viewport.from >= Dt.to || tt.viewport.to <= Dt.from) {
        if (Vt) return null;
        if (Dt.type == It.Text) {
          let et = function(tt, et, Vt, qt, Dt) {
            let mt = Math.round((qt - et.left) * tt.defaultCharacterWidth);
            if (tt.lineWrapping && Vt.height > 1.5 * tt.defaultLineHeight) {
              let et = tt.viewState.heightOracle.textHeight;
              mt += Math.floor((Dt - Vt.top - .5 * (tt.defaultLineHeight - et)) / et) * tt.viewState.heightOracle.lineLength
            }
            let dt = tt.state.sliceDoc(Vt.from, Vt.to);
            return Vt.from + (0, Ot.db)(dt, mt, tt.state.tabSize)
          }(tt, mt, Dt, jt, Ht);
          return new xV(et, et == Dt.from ? 1 : -1)
        }
      }
      if (Dt.type != It.Text) return Xt < (Dt.top + Dt.bottom) / 2 ? new xV(Dt.from, 1) : new xV(Dt.to, -1);
      let Qt = tt.docView.lineAt(Dt.from, 2);
      return Qt && Qt.length == Dt.length || (Qt = tt.docView.lineAt(Dt.from, -2)), new gV(tt, jt, Ht, tt.textDirectionAt(Dt.from)).scanTile(Qt, Dt.from)
    }
    class gV {
      constructor(tt, et, Vt, Ot) {
        this.view = tt, this.x = et, this.y = Vt, this.baseDir = Ot, this.line = null, this.spans = null
      }
      bidiSpansAt(tt) {
        return (!this.line || this.line.from > tt || this.line.to < tt) && (this.line = this.view.state.doc.lineAt(tt), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(tt, et) {
        let {
          line: Vt,
          spans: Ot
        } = this.bidiSpansAt(tt);
        return Ot[be.find(Ot, tt - Vt.from, -1, et)].level == this.baseDir
      }
      dirAt(tt, et) {
        let {
          line: Vt,
          spans: Ot
        } = this.bidiSpansAt(tt);
        return Ot[be.find(Ot, tt - Vt.from, -1, et)].dir
      }
      bidiIn(tt, et) {
        let {
          spans: Vt,
          line: Ot
        } = this.bidiSpansAt(tt);
        return Vt.length > 1 || Vt.length && (Vt[0].level != this.baseDir || Vt[0].to + Ot.from < et)
      }
      scan(tt, et) {
        let Vt, Ot, qt, Dt = 0,
          mt = tt.length - 1,
          dt = new Set,
          jt = this.bidiIn(tt[0], tt[mt]),
          Ht = -1,
          Xt = 1e9;
        tt: for (; Dt < mt;) {
          let Qt = mt - Dt,
            lt = Dt + mt >> 1;
          et: if (dt.has(lt)) {
            let tt = Dt + Math.floor(Math.random() * Qt);
            for (let et = 0; et < Qt; et++) {
              if (!dt.has(tt)) {
                lt = tt;
                break et
              }
              tt++, tt == mt && (tt = Dt)
            }
            break tt
          } dt.add(lt);
          let Et = et(lt);
          if (Et)
            for (let et = 0; et < Et.length; et++) {
              let dt = Et[et],
                Qt = 0;
              if (!(0 == dt.width && Et.length > 1)) {
                if (dt.bottom < this.y)(!Vt || Vt.bottom < dt.bottom) && (Vt = dt), Qt = 1;
                else if (dt.top > this.y)(!Ot || Ot.top > dt.top) && (Ot = dt), Qt = -1;
                else {
                  let tt = dt.left > this.x ? this.x - dt.left : dt.right < this.x ? this.x - dt.right : 0,
                    et = Math.abs(tt);
                  et < Xt && (Ht = lt, Xt = et, qt = dt), tt && (Qt = tt < 0 == (this.baseDir == Xe.LTR) ? -1 : 1)
                } - 1 != Qt || jt && !this.baseDirAt(tt[lt], 1) ? 1 != Qt || jt && !this.baseDirAt(tt[lt + 1], -1) || (Dt = lt + 1) : mt = lt
              }
            }
        }
        if (!qt) {
          let qt = Vt && (!Ot || this.y - Vt.bottom < Ot.top - this.y) ? Vt : Ot;
          return this.y = (qt.top + qt.bottom) / 2, this.scan(tt, et)
        }
        if (Xt) {
          if (Vt && Vt.bottom > qt.top) return this.y = Vt.bottom - 1, this.scan(tt, et);
          if (Ot && Ot.top < qt.bottom) return this.y = Ot.top + 1, this.scan(tt, et)
        }
        let Qt = (jt ? this.dirAt(tt[Ht], 1) : this.baseDir) == Xe.LTR;
        return {
          i: Ht,
          after: this.x > (qt.left + qt.right) / 2 == Qt
        }
      }
      scanText(tt, et) {
        let Vt = [];
        for (let Dt = 0; Dt < tt.length; Dt = (0, Ot.$)(tt.text, Dt)) Vt.push(et + Dt);
        Vt.push(et + tt.length);
        let qt = this.scan(Vt, (Ot => {
          let qt = Vt[Ot] - et,
            Dt = Vt[Ot + 1] - et;
          return qe(tt.dom, qt, Dt).getClientRects()
        }));
        return qt.after ? new xV(Vt[qt.i + 1], -1) : new xV(Vt[qt.i], 1)
      }
      scanTile(tt, et) {
        if (!tt.length) return new xV(et, 1);
        if (1 == tt.children.length) {
          let Vt = tt.children[0];
          if (Vt.isText()) return this.scanText(Vt, et);
          if (Vt.isComposite()) return this.scanTile(Vt, et)
        }
        let Vt = [et];
        for (let mt = 0, dt = et; mt < tt.children.length; mt++) Vt.push(dt += tt.children[mt].length);
        let Ot = this.scan(Vt, (et => {
            let Vt = tt.children[et];
            return 48 & Vt.flags ? null : (1 == Vt.dom.nodeType ? Vt.dom : qe(Vt.dom, 0, Vt.length)).getClientRects()
          })),
          qt = tt.children[Ot.i],
          Dt = Vt[Ot.i];
        return qt.isText() ? this.scanText(qt, Dt) : qt.isComposite() ? this.scanTile(qt, Dt) : Ot.after ? new xV(Vt[Ot.i + 1], -1) : new xV(Dt, 1)
      }
    }
    const sV = "\uffff";
    class nV {
      constructor(tt, et) {
        this.points = tt, this.view = et, this.text = "", this.lineSeparator = et.state.facet(Ot.q.lineSeparator)
      }
      append(tt) {
        this.text += tt
      }
      lineBreak() {
        this.text += sV
      }
      readRange(tt, et) {
        if (!tt) return this;
        let Vt = tt.parentNode;
        for (let Ot = tt;;) {
          this.findPointBefore(Vt, Ot);
          let tt = this.text.length;
          this.readNode(Ot);
          let qt = EV.get(Ot),
            Dt = Ot.nextSibling;
          if (Dt == et) {
            (null === qt || void 0 === qt ? void 0 : qt.breakAfter) && !Dt && Vt != this.view.contentDOM && this.lineBreak();
            break
          }
          let mt = EV.get(Dt);
          (qt && mt ? qt.breakAfter : (qt ? qt.breakAfter : Bt(Ot)) || Bt(Dt) && ("BR" != Ot.nodeName || (null === qt || void 0 === qt ? void 0 : qt.isWidget())) && this.text.length > tt) && !eO(Dt, et) && this.lineBreak(), Ot = Dt
        }
        return this.findPointBefore(Vt, et), this
      }
      readTextNode(tt) {
        let et = tt.nodeValue;
        for (let Vt of this.points) Vt.node == tt && (Vt.pos = this.text.length + Math.min(Vt.offset, et.length));
        for (let Vt = 0, Ot = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let qt, Dt = -1,
            mt = 1;
          if (this.lineSeparator ? (Dt = et.indexOf(this.lineSeparator, Vt), mt = this.lineSeparator.length) : (qt = Ot.exec(et)) && (Dt = qt.index, mt = qt[0].length), this.append(et.slice(Vt, Dt < 0 ? et.length : Dt)), Dt < 0) break;
          if (this.lineBreak(), mt > 1)
            for (let et of this.points) et.node == tt && et.pos > this.text.length && (et.pos -= mt - 1);
          Vt = Dt + mt
        }
      }
      readNode(tt) {
        let et = EV.get(tt),
          Vt = et && et.overrideDOMText;
        if (null != Vt) {
          this.findPointInside(tt, Vt.length);
          for (let tt = Vt.iter(); !tt.next().done;) tt.lineBreak ? this.lineBreak() : this.append(tt.value)
        } else 3 == tt.nodeType ? this.readTextNode(tt) : "BR" == tt.nodeName ? tt.nextSibling && this.lineBreak() : 1 == tt.nodeType && this.readRange(tt.firstChild, null)
      }
      findPointBefore(tt, et) {
        for (let Vt of this.points) Vt.node == tt && tt.childNodes[Vt.offset] == et && (Vt.pos = this.text.length)
      }
      findPointInside(tt, et) {
        for (let Vt of this.points)(3 == tt.nodeType ? Vt.node == tt : tt.contains(Vt.node)) && (Vt.pos = this.text.length + (tO(tt, Vt.node, Vt.offset) ? et : 0))
      }
    }

    function tO(tt, et, Vt) {
      for (;;) {
        if (!et || Vt < xt(et)) return !1;
        if (et == tt) return !0;
        Vt = Yt(et) + 1, et = et.parentNode
      }
    }

    function eO(tt, et) {
      let Vt;
      for (; tt != et && tt; tt = tt.nextSibling) {
        let et = EV.get(tt);
        if (!(null === et || void 0 === et ? void 0 : et.isWidget())) return !1;
        et && (Vt || (Vt = [])).push(et)
      }
      if (Vt)
        for (let Ot of Vt) {
          let tt = Ot.overrideDOMText;
          if (null === tt || void 0 === tt ? void 0 : tt.length) return !1
        }
      return !0
    }
    class VO {
      constructor(tt, et) {
        this.node = tt, this.offset = et, this.pos = -1
      }
    }
    class OO {
      constructor(tt, et, Vt, qt) {
        this.typeOver = qt, this.bounds = null, this.text = "", this.domChanged = et > -1;
        let {
          impreciseHead: Dt,
          impreciseAnchor: mt
        } = tt.docView, dt = tt.state.selection;
        if (tt.state.readOnly && et > -1) this.newSel = null;
        else if (et > -1 && (this.bounds = qO(tt.docView.tile, et, Vt, 0))) {
          let et = Dt || mt ? [] : function(tt) {
              let et = [];
              if (tt.root.activeElement != tt.contentDOM) return et;
              let {
                anchorNode: Vt,
                anchorOffset: Ot,
                focusNode: qt,
                focusOffset: Dt
              } = tt.observer.selectionRange;
              Vt && (et.push(new VO(Vt, Ot)), qt == Vt && Dt == Ot || et.push(new VO(qt, Dt)));
              return et
            }(tt),
            Vt = new nV(et, tt);
          Vt.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = Vt.text, this.newSel = function(tt, et) {
            if (0 == tt.length) return null;
            let Vt = tt[0].pos,
              qt = 2 == tt.length ? tt[1].pos : Vt;
            return Vt > -1 && qt > -1 ? Ot.n.single(Vt + et, qt + et) : null
          }(et, this.bounds.from)
        } else {
          let et = tt.observer.selectionRange,
            Vt = Dt && Dt.node == et.focusNode && Dt.offset == et.focusOffset || !rt(tt.contentDOM, et.focusNode) ? dt.main.head : tt.docView.posFromDOM(et.focusNode, et.focusOffset),
            qt = mt && mt.node == et.anchorNode && mt.offset == et.anchorOffset || !rt(tt.contentDOM, et.anchorNode) ? dt.main.anchor : tt.docView.posFromDOM(et.anchorNode, et.anchorOffset),
            jt = tt.viewport;
          if ((Kt.ios || Kt.chrome) && dt.main.empty && Vt != qt && (jt.from > 0 || jt.to < tt.state.doc.length)) {
            let et = Math.min(Vt, qt),
              Ot = Math.max(Vt, qt),
              Dt = jt.from - et,
              mt = jt.to - Ot;
            0 != Dt && 1 != Dt && 0 != et || 0 != mt && -1 != mt && Ot != tt.state.doc.length || (Vt = 0, qt = tt.state.doc.length)
          }
          if (tt.inputState.composing > -1 && dt.nw.length > 1) this.newSel = dt.replaceRange(Ot.n.range(qt, Vt));
          else if (tt.lineWrapping && qt == Vt && (!dt.main.empty || dt.main.head != Vt) && tt.inputState.lastTouchTime > Date.now() - 100) {
            let et = tt.coordsAtPos(Vt, -1),
              qt = 0;
            et && (qt = tt.inputState.lastTouchY <= et.bottom ? -1 : 1), this.newSel = Ot.n.create([Ot.n.cursor(Vt, qt)])
          } else this.newSel = Ot.n.single(qt, Vt)
        }
      }
    }

    function qO(tt, et, Vt, Ot) {
      if (tt.isComposite()) {
        let qt = -1,
          Dt = -1,
          mt = -1,
          dt = -1;
        for (let jt = 0, Ht = Ot, Xt = Ot; jt < tt.children.length; jt++) {
          let Ot = tt.children[jt],
            Qt = Ht + Ot.length;
          if (Ht < et && Qt > Vt) return qO(Ot, et, Vt, Ht);
          if (Qt >= et && -1 == qt && (qt = jt, Dt = Ht), Ht > Vt && Ot.dom.parentNode == tt.dom) {
            mt = jt, dt = Xt;
            break
          }
          Xt = Qt, Ht = Qt + Ot.breakAfter
        }
        return {
          from: Dt,
          to: dt < 0 ? Ot + tt.length : dt,
          startDOM: (qt ? tt.children[qt - 1].dom.nextSibling : null) || tt.dom.firstChild,
          endDOM: mt < tt.children.length && mt >= 0 ? tt.children[mt].dom : null
        }
      }
      return tt.isText() ? {
        from: Ot,
        to: Ot + tt.length,
        startDOM: tt.dom,
        endDOM: tt.dom.nextSibling
      } : null
    }

    function DO(tt, et) {
      let Vt, {
          newSel: qt
        } = et,
        {
          state: Dt
        } = tt,
        mt = Dt.selection.main,
        dt = tt.inputState.lastKeyTime > Date.now() - 100 ? tt.inputState.lastKeyCode : -1;
      if (et.bounds) {
        let {
          from: tt,
          to: qt
        } = et.bounds, jt = mt.from, Ht = null;
        (8 === dt || Kt.android && et.text.length < qt - tt) && (jt = mt.to, Ht = "end");
        let Xt, Qt, lt = Dt.doc.sliceString(tt, qt, sV);
        !mt.empty && mt.from >= tt && mt.to <= qt && (et.typeOver || lt != et.text) && lt.slice(0, mt.from - tt) == et.text.slice(0, mt.from - tt) && lt.slice(mt.to - tt) == et.text.slice(Xt = et.text.length - (lt.length - (mt.to - tt))) ? Vt = {
          from: mt.from,
          to: mt.to,
          insert: Ot.K.of(et.text.slice(mt.from - tt, Xt).split(sV))
        } : (Qt = dO(lt, et.text, jt - tt, Ht)) && (Kt.chrome && 13 == dt && Qt.toB == Qt.from + 2 && et.text.slice(Qt.from, Qt.toB) == sV + sV && Qt.toB--, Vt = {
          from: tt + Qt.from,
          to: tt + Qt.toA,
          insert: Ot.K.of(et.text.slice(Qt.from, Qt.toB).split(sV))
        })
      } else qt && (!tt.hasFocus && Dt.facet(pe) || jO(qt, mt)) && (qt = null);
      if (!Vt && !qt) return !1;
      if ((Kt.mac || Kt.android) && Vt && Vt.from == Vt.to && Vt.from == mt.head - 1 && /^\. ?$/.test(Vt.insert.toString()) && "off" == tt.contentDOM.getAttribute("autocorrect") ? (qt && 2 == Vt.insert.length && (qt = Ot.n.single(qt.main.anchor - 1, qt.main.head - 1)), Vt = {
          from: Vt.from,
          to: Vt.to,
          insert: Ot.K.of([Vt.insert.toString().replace(".", " ")])
        }) : Dt.doc.lineAt(mt.from).to < mt.to && tt.docView.lineHasWidget(mt.to) && tt.inputState.insertingTextAt > Date.now() - 50 ? Vt = {
          from: mt.from,
          to: mt.to,
          insert: Dt.toText(tt.inputState.insertingText)
        } : Kt.chrome && Vt && Vt.from == Vt.to && Vt.from == mt.head && "\n " == Vt.insert.toString() && tt.lineWrapping && (qt && (qt = Ot.n.single(qt.main.anchor - 1, qt.main.head - 1)), Vt = {
          from: mt.from,
          to: mt.to,
          insert: Ot.K.of([" "])
        }), Vt) return mO(tt, Vt, qt, dt);
      if (qt && !jO(qt, mt)) {
        let et = !1,
          Vt = "select";
        return tt.inputState.lastSelectionTime > Date.now() - 50 && ("select" == tt.inputState.lastSelectionOrigin && (et = !0), Vt = tt.inputState.lastSelectionOrigin, "select.pointer" == Vt && (qt = BV(Dt.facet(qV).map((et => et(tt))), qt))), tt.dispatch({
          selection: qt,
          scrollIntoView: et,
          userEvent: Vt
        }), !0
      }
      return !1
    }

    function mO(tt, et, Vt) {
      let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (Kt.ios && tt.inputState.flushIOSKey(et)) return !0;
      let Dt = tt.state.selection.main;
      if (Kt.android && (et.to == Dt.to && (et.from == Dt.from || et.from == Dt.from - 1 && " " == tt.state.sliceDoc(et.from, Dt.from)) && 1 == et.insert.length && 2 == et.insert.lines && De(tt.contentDOM, "Enter", 13) || (et.from == Dt.from - 1 && et.to == Dt.to && 0 == et.insert.length || 8 == qt && et.insert.length < et.to - et.from && et.to > Dt.head) && De(tt.contentDOM, "Backspace", 8) || et.from == Dt.from && et.to == Dt.to + 1 && 0 == et.insert.length && De(tt.contentDOM, "Delete", 46))) return !0;
      let mt, dt = et.insert.toString();
      tt.inputState.composing >= 0 && tt.inputState.composing++;
      let jt = () => mt || (mt = function(tt, et, Vt) {
        let qt, Dt = tt.state,
          mt = Dt.selection.main,
          dt = -1;
        if (et.from == et.to && et.from < mt.from || et.from > mt.to) {
          let Vt = et.from < mt.from ? -1 : 1,
            Ot = Vt < 0 ? mt.from : mt.to,
            qt = YV(Dt.facet(qV).map((et => et(tt))), Ot, Vt);
          et.from == qt && (dt = qt)
        }
        if (dt > -1) qt = {
          changes: et,
          selection: Ot.n.cursor(et.from + et.insert.length, -1)
        };
        else if (et.from >= mt.from && et.to <= mt.to && et.to - et.from >= (mt.to - mt.from) / 3 && (!Vt || Vt.main.empty && Vt.main.from == et.from + et.insert.length) && tt.inputState.composing < 0) {
          let Vt = mt.from < et.from ? Dt.sliceDoc(mt.from, et.from) : "",
            Ot = mt.to > et.to ? Dt.sliceDoc(et.to, mt.to) : "";
          qt = Dt.replaceSelection(tt.state.toText(Vt + et.insert.sliceString(0, void 0, tt.state.lineBreak) + Ot))
        } else {
          let dt = Dt.changes(et),
            jt = Vt && Vt.main.to <= dt.newLength ? Vt.main : void 0;
          if (Dt.selection.nw.length > 1 && (tt.inputState.composing >= 0 || tt.inputState.compositionPendingChange) && et.to <= mt.to + 10 && et.to >= mt.to - 10) {
            let Ht, Xt = tt.state.sliceDoc(et.from, et.to),
              Qt = Vt && zV(tt, Vt.main.head);
            if (Qt) {
              let tt = et.insert.length - (et.to - et.from);
              Ht = {
                from: Qt.from,
                to: Qt.to - tt
              }
            } else Ht = tt.state.doc.lineAt(mt.head);
            let lt = mt.to - et.to;
            qt = Dt.changeByRange((Vt => {
              if (Vt.from == mt.from && Vt.to == mt.to) return {
                changes: dt,
                range: jt || Vt.map(dt)
              };
              let qt = Vt.to - lt,
                Qt = qt - Xt.length;
              if (tt.state.sliceDoc(Qt, qt) != Xt || qt >= Ht.from && Qt <= Ht.to) return {
                range: Vt
              };
              let Et = Dt.changes({
                  from: Qt,
                  to: qt,
                  insert: et.insert
                }),
                ft = Vt.to - mt.to;
              return {
                changes: Et,
                range: jt ? Ot.n.range(Math.max(0, jt.anchor + ft), Math.max(0, jt.head + ft)) : Vt.map(Et)
              }
            }))
          } else qt = {
            changes: dt,
            selection: jt && Dt.selection.replaceRange(jt)
          }
        }
        let jt = "input.type";
        (tt.composing || tt.inputState.compositionPendingChange && tt.inputState.compositionEndedAt > Date.now() - 50) && (tt.inputState.compositionPendingChange = !1, jt += ".compose", tt.inputState.compositionFirstChange && (jt += ".start", tt.inputState.compositionFirstChange = !1));
        return Dt.update(qt, {
          userEvent: jt,
          scrollIntoView: !0
        })
      }(tt, et, Vt));
      return tt.state.facet(Fe).some((Vt => Vt(tt, et.from, et.to, dt, jt))) || tt.dispatch(jt()), !0
    }

    function dO(tt, et, Vt, Ot) {
      let qt = Math.min(tt.length, et.length),
        Dt = 0;
      for (; Dt < qt && tt.charCodeAt(Dt) == et.charCodeAt(Dt);) Dt++;
      if (Dt == qt && tt.length == et.length) return null;
      let mt = tt.length,
        dt = et.length;
      for (; mt > 0 && dt > 0 && tt.charCodeAt(mt - 1) == et.charCodeAt(dt - 1);) mt--, dt--;
      if ("end" == Ot) {
        Vt -= mt + Math.max(0, Dt - Math.min(mt, dt)) - Dt
      }
      if (mt < Dt && tt.length < et.length) {
        Dt -= Vt <= Dt && Vt >= mt ? Dt - Vt : 0, dt = Dt + (dt - mt), mt = Dt
      } else if (dt < Dt) {
        Dt -= Vt <= Dt && Vt >= dt ? Dt - Vt : 0, mt = Dt + (mt - dt), dt = Dt
      }
      return {
        from: Dt,
        toA: mt,
        toB: dt
      }
    }

    function jO(tt, et) {
      return et.head == tt.main.head && et.anchor == tt.main.anchor
    }
    class HO {
      setSelectionOrigin(tt) {
        this.lastSelectionOrigin = tt, this.lastSelectionTime = Date.now()
      }
      constructor(tt) {
        this.view = tt, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = tt.hasFocus, Kt.safari && tt.contentDOM.addEventListener("input", (() => null)), Kt.gecko && function(tt) {
          ZO.has(tt) || (ZO.add(tt), tt.addEventListener("copy", (() => {})), tt.addEventListener("cut", (() => {})))
        }(tt.contentDOM.ownerDocument)
      }
      handleEvent(tt) {
        (function(tt, et) {
          if (!et.bubbles) return !0;
          if (et.defaultPrevented) return !1;
          for (let Vt, Ot = et.target; Ot != tt.contentDOM; Ot = Ot.parentNode)
            if (!Ot || 11 == Ot.nodeType || (Vt = EV.get(Ot)) && Vt.isWidget() && !Vt.isHidden && Vt.widget.ignoreEvent(et)) return !1;
          return !0
        })(this.view, tt) && !this.ignoreDuringComposition(tt) && ("keydown" == tt.type && this.keydown(tt) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(tt.type, tt))) : this.runHandlers(tt.type, tt)))
      }
      runHandlers(tt, et) {
        let Vt = this.handlers[tt];
        if (Vt) {
          for (let tt of Vt.observers) tt(this.view, et);
          for (let tt of Vt.handlers) {
            if (et.defaultPrevented) break;
            if (tt(this.view, et)) {
              et.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(tt) {
        let et = QO(tt),
          Vt = this.handlers,
          Ot = this.view.contentDOM;
        for (let qt in et)
          if ("scroll" != qt) {
            let tt = !et[qt].handlers.length,
              Dt = Vt[qt];
            Dt && tt != !Dt.handlers.length && (Ot.removeEventListener(qt, this.handleEvent), Dt = null), Dt || Ot.addEventListener(qt, this.handleEvent, {
              passive: tt
            })
          } for (let qt in Vt) "scroll" == qt || et[qt] || Ot.removeEventListener(qt, this.handleEvent);
        this.handlers = et
      }
      keydown(tt) {
        if (this.lastKeyCode = tt.keyCode, this.lastKeyTime = Date.now(), 9 == tt.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != tt.keyCode && fO.indexOf(tt.keyCode) < 0 && (this.tabFocusMode = -1), Kt.android && Kt.chrome && !tt.synthetic && (13 == tt.keyCode || 8 == tt.keyCode)) return this.view.observer.delayAndroidKey(tt.key, tt.keyCode), !0;
        let et;
        return !Kt.ios || tt.synthetic || tt.altKey || tt.metaKey || tt.shiftKey || !((et = lO.find((et => et.keyCode == tt.keyCode))) && !tt.ctrlKey || EO.indexOf(tt.key) > -1 && tt.ctrlKey) ? (229 != tt.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = et || tt, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(tt) {
        let et = this.pendingIOSKey;
        return !!et && (!("Enter" == et.key && tt && tt.from < tt.to && /^\S+$/.test(tt.insert.toString())) && (this.pendingIOSKey = void 0, De(this.view.contentDOM, et.key, et.keyCode, et instanceof KeyboardEvent ? et : void 0)))
      }
      ignoreDuringComposition(tt) {
        return !(!/^key/.test(tt.type) || tt.synthetic) && (this.composing > 0 || !!(Kt.safari && !Kt.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(tt) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = tt
      }
      update(tt) {
        this.view.observer.update(tt), this.mouseSelection && this.mouseSelection.update(tt), this.draggedContent && tt.docChanged && (this.draggedContent = this.draggedContent.map(tt.changes)), tt.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function XO(tt, et) {
      return (Vt, Ot) => {
        try {
          return et.call(tt, Ot, Vt)
        } catch (qt) {
          Be(Vt.state, qt)
        }
      }
    }

    function QO(tt) {
      let et = Object.create(null);

      function Vt(tt) {
        return et[tt] || (et[tt] = {
          observers: [],
          handlers: []
        })
      }
      for (let Ot of tt) {
        let tt = Ot.spec,
          et = tt && tt.plugin.domEventHandlers,
          qt = tt && tt.plugin.domEventObservers;
        if (et)
          for (let Dt in et) {
            let tt = et[Dt];
            tt && Vt(Dt).handlers.push(XO(Ot.value, tt))
          }
        if (qt)
          for (let Dt in qt) {
            let tt = qt[Dt];
            tt && Vt(Dt).observers.push(XO(Ot.value, tt))
          }
      }
      for (let Ot in NO) Vt(Ot).handlers.push(NO[Ot]);
      for (let Ot in aO) Vt(Ot).observers.push(aO[Ot]);
      return et
    }
    const lO = [{
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
      EO = "dthko",
      fO = [16, 17, 18, 20, 91, 92, 224, 225];

    function wO(tt) {
      return .7 * Math.max(0, tt) + 8
    }
    class yO {
      constructor(tt, et, Vt, qt) {
        this.view = tt, this.startEvent = et, this.style = Vt, this.mustSelect = qt, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = et, this.scrollParents = nt(tt.contentDOM), this.atoms = tt.state.facet(qV).map((et => et(tt)));
        let Dt = tt.contentDOM.ownerDocument;
        Dt.addEventListener("mousemove", this.move = this.move.bind(this)), Dt.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = et.shiftKey, this.multiple = tt.state.facet(Ot.q.allowMultipleSelections) && function(tt, et) {
          let Vt = tt.state.facet(Re);
          return Vt.length ? Vt[0](et) : Kt.mac ? et.metaKey : et.ctrlKey
        }(tt, et), this.dragging = !(! function(tt, et) {
          let {
            main: Vt
          } = tt.state.selection;
          if (Vt.empty) return !1;
          let Ot = ot(tt.root);
          if (!Ot || 0 == Ot.rangeCount) return !0;
          let qt = Ot.getRangeAt(0).getClientRects();
          for (let Dt = 0; Dt < qt.length; Dt++) {
            let tt = qt[Dt];
            if (tt.left <= et.clientX && tt.right >= et.clientX && tt.top <= et.clientY && tt.bottom >= et.clientY) return !0
          }
          return !1
        }(tt, et) || 1 != WO(et)) && null
      }
      start(tt) {
        !1 === this.dragging && this.select(tt)
      }
      move(tt) {
        if (0 == tt.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (et = this.startEvent, Vt = tt, Math.max(Math.abs(et.clientX - Vt.clientX), Math.abs(et.clientY - Vt.clientY)) < 10)) return;
        var et, Vt;
        this.select(this.lastEvent = tt);
        let Ot = 0,
          qt = 0,
          Dt = 0,
          mt = 0,
          dt = this.view.win.innerWidth,
          jt = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: Dt,
          right: dt
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: mt,
          bottom: jt
        } = this.scrollParents.y.getBoundingClientRect());
        let Ht = jV(this.view);
        tt.clientX - Ht.left <= Dt + 6 ? Ot = -wO(Dt - tt.clientX) : tt.clientX + Ht.right >= dt - 6 && (Ot = wO(tt.clientX - dt)), tt.clientY - Ht.top <= mt + 6 ? qt = -wO(mt - tt.clientY) : tt.clientY + Ht.bottom >= jt - 6 && (qt = wO(tt.clientY - jt)), this.setScrollSpeed(Ot, qt)
      }
      up(tt) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || tt.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let tt = this.view.contentDOM.ownerDocument;
        tt.removeEventListener("mousemove", this.move), tt.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(tt, et) {
        this.scrollSpeed = {
          x: tt,
          y: et
        }, tt || et ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: tt,
          y: et
        } = this.scrollSpeed;
        tt && this.scrollParents.x && (this.scrollParents.x.scrollLeft += tt, tt = 0), et && this.scrollParents.y && (this.scrollParents.y.scrollTop += et, et = 0), (tt || et) && this.view.win.scrollBy(tt, et), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(tt) {
        let {
          view: et
        } = this, Vt = BV(this.atoms, this.style.get(tt, this.extend, this.multiple));
        !this.mustSelect && Vt.eq(et.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: Vt,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(tt) {
        tt.transactions.some((tt => tt.isUserEvent("input.type"))) ? this.destroy() : this.style.update(tt) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const NO = Object.create(null),
      aO = Object.create(null),
      MO = Kt.ie && Kt.ie_version < 15 || Kt.ios && Kt.webkit_version < 604;

    function bO(tt, et, Vt) {
      for (let Ot of tt.facet(et)) Vt = Ot(Vt, tt);
      return Vt
    }

    function JO(tt, et) {
      et = bO(tt.state, Ge, et);
      let Vt, {
          state: qt
        } = tt,
        Dt = 1,
        mt = qt.toText(et),
        dt = mt.lines == qt.selection.nw.length;
      if (null != cO && qt.selection.nw.every((tt => tt.empty)) && cO == mt.toString()) {
        let tt = -1;
        Vt = qt.changeByRange((Vt => {
          let jt = qt.doc.lineAt(Vt.from);
          if (jt.from == tt) return {
            range: Vt
          };
          tt = jt.from;
          let Ht = qt.toText((dt ? mt.line(Dt++).text : et) + qt.lineBreak);
          return {
            changes: {
              from: jt.from,
              insert: Ht
            },
            range: Ot.n.cursor(Vt.from + Ht.length)
          }
        }))
      } else Vt = dt ? qt.changeByRange((tt => {
        let et = mt.line(Dt++);
        return {
          changes: {
            from: tt.from,
            to: tt.to,
            insert: et.text
          },
          range: Ot.n.cursor(tt.from + et.length)
        }
      })) : qt.replaceSelection(mt);
      tt.dispatch(Vt, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function CO(tt, et, Vt, qt) {
      if (1 == qt) return Ot.n.cursor(et, Vt);
      if (2 == qt) return function(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          qt = tt.charCategorizer(et),
          Dt = tt.doc.lineAt(et),
          mt = et - Dt.from;
        if (0 == Dt.length) return Ot.n.cursor(et);
        0 == mt ? Vt = 1 : mt == Dt.length && (Vt = -1);
        let dt = mt,
          jt = mt;
        Vt < 0 ? dt = (0, Ot.$)(Dt.text, mt, !1) : jt = (0, Ot.$)(Dt.text, mt);
        let Ht = qt(Dt.text.slice(dt, jt));
        for (; dt > 0;) {
          let tt = (0, Ot.$)(Dt.text, dt, !1);
          if (qt(Dt.text.slice(tt, dt)) != Ht) break;
          dt = tt
        }
        for (; jt < Dt.length;) {
          let tt = (0, Ot.$)(Dt.text, jt);
          if (qt(Dt.text.slice(jt, tt)) != Ht) break;
          jt = tt
        }
        return Ot.n.range(dt + Dt.from, jt + Dt.from)
      }(tt.state, et, Vt);
      {
        let qt = tt.docView.lineAt(et, Vt),
          Dt = tt.state.doc.lineAt(qt ? qt.posAtEnd : et),
          mt = qt ? qt.posAtStart : Dt.from,
          dt = qt ? qt.posAtEnd : Dt.to;
        return dt < tt.state.doc.length && dt == Dt.to && dt++, Ot.n.range(mt, dt)
      }
    }
    aO.scroll = tt => {
      tt.inputState.lastScrollTop = tt.scrollDOM.scrollTop, tt.inputState.lastScrollLeft = tt.scrollDOM.scrollLeft
    }, aO.wheel = aO.mousewheel = tt => {
      tt.inputState.lastWheelEvent = Date.now()
    }, NO.keydown = (tt, et) => (tt.inputState.setSelectionOrigin("select"), 27 == et.keyCode && 0 != tt.inputState.tabFocusMode && (tt.inputState.tabFocusMode = Date.now() + 2e3), !1), aO.touchstart = (tt, et) => {
      let Vt = tt.inputState,
        Ot = et.targetTouches[0];
      Vt.lastTouchTime = Date.now(), Ot && (Vt.lastTouchX = Ot.clientX, Vt.lastTouchY = Ot.clientY), Vt.setSelectionOrigin("select.pointer")
    }, aO.touchmove = tt => {
      tt.inputState.setSelectionOrigin("select.pointer")
    }, NO.mousedown = (tt, et) => {
      if (tt.observer.flush(), tt.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let Vt = null;
      for (let Ot of tt.state.facet(Pe))
        if (Vt = Ot(tt, et), Vt) break;
      if (Vt || 0 != et.button || (Vt = function(tt, et) {
          let Vt = tt.posAndSideAtCoords({
              x: et.clientX,
              y: et.clientY
            }, !1),
            qt = WO(et),
            Dt = tt.state.selection;
          return {
            update(tt) {
              tt.docChanged && (Vt.pos = tt.changes.mapPos(Vt.pos), Dt = Dt.map(tt.changes))
            },
            get(et, mt, dt) {
              let jt, Ht = tt.posAndSideAtCoords({
                  x: et.clientX,
                  y: et.clientY
                }, !1),
                Xt = CO(tt, Ht.pos, Ht.assoc, qt);
              if (Vt.pos != Ht.pos && !mt) {
                let et = CO(tt, Vt.pos, Vt.assoc, qt),
                  Dt = Math.min(et.from, Xt.from),
                  mt = Math.max(et.to, Xt.to);
                Xt = Dt < Xt.from ? Ot.n.range(Dt, mt, Xt.assoc) : Ot.n.range(mt, Dt, Xt.assoc)
              }
              return mt ? Dt.replaceRange(Dt.main.extend(Xt.from, Xt.to, Xt.assoc)) : dt && 1 == qt && Dt.nw.length > 1 && (jt = function(tt, et) {
                for (let Vt = 0; Vt < tt.nw.length; Vt++) {
                  let {
                    from: qt,
                    to: Dt
                  } = tt.nw[Vt];
                  if (qt <= et && Dt >= et) return Ot.n.create(tt.nw.slice(0, Vt).concat(tt.nw.slice(Vt + 1)), tt.mainIndex == Vt ? 0 : tt.mainIndex - (tt.mainIndex > Vt ? 1 : 0))
                }
                return null
              }(Dt, Ht.pos)) ? jt : dt ? Dt.addRange(Xt) : Ot.n.create([Xt])
            }
          }
        }(tt, et)), Vt) {
        let Ot = !tt.hasFocus;
        tt.inputState.startMouseSelection(new yO(tt, et, Vt, Ot)), Ot && tt.observer.ignore((() => {
          Oe(tt.contentDOM);
          let et = tt.root.activeElement;
          et && !et.contains(tt.contentDOM) && et.blur()
        }));
        let qt = tt.inputState.mouseSelection;
        if (qt) return qt.start(et), !1 === qt.dragging
      } else tt.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const uO = Kt.ie && Kt.ie_version <= 11;
    let KO = null,
      hO = 0,
      vO = 0;

    function WO(tt) {
      if (!uO) return tt.detail;
      let et = KO,
        Vt = vO;
      return KO = tt, vO = Date.now(), hO = !et || Vt > Date.now() - 400 && Math.abs(et.clientX - tt.clientX) < 2 && Math.abs(et.clientY - tt.clientY) < 2 ? (hO + 1) % 3 : 1
    }

    function SO(tt, et, Vt, Ot) {
      if (!(Vt = bO(tt.state, Ge, Vt))) return;
      let qt = tt.posAtCoords({
          x: et.clientX,
          y: et.clientY
        }, !1),
        {
          draggedContent: Dt
        } = tt.inputState,
        mt = Ot && Dt && function(tt, et) {
          let Vt = tt.state.facet(Ie);
          return Vt.length ? Vt[0](et) : Kt.mac ? !et.altKey : !et.ctrlKey
        }(tt, et) ? {
          from: Dt.from,
          to: Dt.to
        } : null,
        dt = {
          from: qt,
          insert: Vt
        },
        jt = tt.state.changes(mt ? [mt, dt] : dt);
      tt.focus(), tt.dispatch({
        changes: jt,
        selection: {
          anchor: jt.mapPos(qt, -1),
          head: jt.mapPos(qt, 1)
        },
        userEvent: mt ? "move.drop" : "input.drop"
      }), tt.inputState.draggedContent = null
    }
    NO.dragstart = (tt, et) => {
      let {
        selection: {
          main: Vt
        }
      } = tt.state;
      if (et.target.draggable) {
        let qt = tt.docView.tile.nearest(et.target);
        if (qt && qt.isWidget()) {
          let tt = qt.posAtStart,
            et = tt + qt.length;
          (tt >= Vt.to || et <= Vt.from) && (Vt = Ot.n.range(tt, et))
        }
      }
      let {
        inputState: qt
      } = tt;
      return qt.mouseSelection && (qt.mouseSelection.dragging = !0), qt.draggedContent = Vt, et.dataTransfer && (et.dataTransfer.setData("Text", bO(tt.state, ze, tt.state.sliceDoc(Vt.from, Vt.to))), et.dataTransfer.effectAllowed = "copyMove"), !1
    }, NO.dragend = tt => (tt.inputState.draggedContent = null, !1), NO.drop = (tt, et) => {
      if (!et.dataTransfer) return !1;
      if (tt.state.readOnly) return !0;
      let Vt = et.dataTransfer.files;
      if (Vt && Vt.length) {
        let Ot = Array(Vt.length),
          qt = 0,
          Dt = () => {
            ++qt == Vt.length && SO(tt, et, Ot.filter((tt => null != tt)).join(tt.state.lineBreak), !1)
          };
        for (let tt = 0; tt < Vt.length; tt++) {
          let et = new FileReader;
          et.onerror = Dt, et.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(et.result) || (Ot[tt] = et.result), Dt()
          }, et.readAsText(Vt[tt])
        }
        return !0
      } {
        let Vt = et.dataTransfer.getData("Text");
        if (Vt) return SO(tt, et, Vt, !0), !0
      }
      return !1
    }, NO.paste = (tt, et) => {
      if (tt.state.readOnly) return !0;
      tt.observer.flush();
      let Vt = MO ? null : et.clipboardData;
      return Vt ? (JO(tt, Vt.getData("text/plain") || Vt.getData("text/uri-list")), !0) : (function(tt) {
        let et = tt.dom.parentNode;
        if (!et) return;
        let Vt = et.appendChild(document.createElement("textarea"));
        Vt.style.cssText = "position: fixed; left: -10000px; top: 10px", Vt.focus(), setTimeout((() => {
          tt.focus(), Vt.remove(), JO(tt, Vt.value)
        }), 50)
      }(tt), !1)
    };
    let cO = null;
    NO.copy = NO.cut = (tt, et) => {
      if (!Ut(tt.contentDOM, tt.observer.selectionRange)) return !1;
      let {
        text: Vt,
        nw: Ot,
        linewise: qt
      } = function(tt) {
        let et = [],
          Vt = [],
          Ot = !1;
        for (let qt of tt.selection.nw) qt.empty || (et.push(tt.sliceDoc(qt.from, qt.to)), Vt.push(qt));
        if (!et.length) {
          let qt = -1;
          for (let {
              from: Ot
            }
            of tt.selection.nw) {
            let Dt = tt.doc.lineAt(Ot);
            Dt.number > qt && (et.push(Dt.text), Vt.push({
              from: Dt.from,
              to: Math.min(tt.doc.length, Dt.to + 1)
            })), qt = Dt.number
          }
          Ot = !0
        }
        return {
          text: bO(tt, ze, et.join(tt.lineBreak)),
          nw: Vt,
          linewise: Ot
        }
      }(tt.state);
      if (!Vt && !qt) return !1;
      cO = qt ? Vt : null, "cut" != et.type || tt.state.readOnly || tt.dispatch({
        changes: Ot,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let Dt = MO ? null : et.clipboardData;
      return Dt ? (Dt.clearData(), Dt.setData("text/plain", Vt), !0) : (function(tt, et) {
        let Vt = tt.dom.parentNode;
        if (!Vt) return;
        let Ot = Vt.appendChild(document.createElement("textarea"));
        Ot.style.cssText = "position: fixed; left: -10000px; top: 10px", Ot.value = et, Ot.focus(), Ot.selectionEnd = et.length, Ot.selectionStart = 0, setTimeout((() => {
          Ot.remove(), tt.focus()
        }), 50)
      }(tt, Vt), !1)
    };
    const RO = Ot.c.define();

    function IO(tt, et) {
      let Vt = [];
      for (let Ot of tt.facet(ke)) {
        let qt = Ot(tt, et);
        qt && Vt.push(qt)
      }
      return Vt.length ? tt.update({
        effects: Vt,
        annotations: RO.of(!0)
      }) : null
    }

    function PO(tt) {
      setTimeout((() => {
        let et = tt.hasFocus;
        if (et != tt.inputState.notifiedFocused) {
          let Vt = IO(tt.state, et);
          Vt ? tt.dispatch(Vt) : tt.update([])
        }
      }), 10)
    }
    aO.focus = tt => {
      tt.inputState.lastFocusTime = Date.now(), tt.scrollDOM.scrollTop || !tt.inputState.lastScrollTop && !tt.inputState.lastScrollLeft || (tt.scrollDOM.scrollTop = tt.inputState.lastScrollTop, tt.scrollDOM.scrollLeft = tt.inputState.lastScrollLeft), PO(tt)
    }, aO.blur = tt => {
      tt.observer.clearSelectionRange(), PO(tt)
    }, aO.compositionstart = aO.compositionupdate = tt => {
      tt.observer.editContext || (null == tt.inputState.compositionFirstChange && (tt.inputState.compositionFirstChange = !0), tt.inputState.composing < 0 && (tt.inputState.composing = 0))
    }, aO.compositionend = tt => {
      tt.observer.editContext || (tt.inputState.composing = -1, tt.inputState.compositionEndedAt = Date.now(), tt.inputState.compositionPendingKey = !0, tt.inputState.compositionPendingChange = tt.observer.pendingRecords().length > 0, tt.inputState.compositionFirstChange = null, Kt.chrome && Kt.android ? tt.observer.flushSoon() : tt.inputState.compositionPendingChange ? Promise.resolve().then((() => tt.observer.flush())) : setTimeout((() => {
        tt.inputState.composing < 0 && tt.docView.hasComposition && tt.update([])
      }), 50))
    }, aO.contextmenu = tt => {
      tt.inputState.lastContextMenu = Date.now()
    }, NO.beforeinput = (tt, et) => {
      var Vt, Ot;
      if ("insertText" != et.inputType && "insertCompositionText" != et.inputType || (tt.inputState.insertingText = et.data, tt.inputState.insertingTextAt = Date.now()), "insertReplacementText" == et.inputType && tt.observer.editContext) {
        let Ot = null === (Vt = et.dataTransfer) || void 0 === Vt ? void 0 : Vt.getData("text/plain"),
          qt = et.getTargetRanges();
        if (Ot && qt.length) {
          let et = qt[0],
            Vt = tt.posAtDOM(et.startContainer, et.startOffset),
            Dt = tt.posAtDOM(et.endContainer, et.endOffset);
          return mO(tt, {
            from: Vt,
            to: Dt,
            insert: tt.state.toText(Ot)
          }, null), !0
        }
      }
      let qt;
      if (Kt.chrome && Kt.android && (qt = lO.find((tt => tt.inputType == et.inputType))) && (tt.observer.delayAndroidKey(qt.key, qt.keyCode), "Backspace" == qt.key || "Delete" == qt.key)) {
        let et = (null === (Ot = window.visualViewport) || void 0 === Ot ? void 0 : Ot.height) || 0;
        setTimeout((() => {
          var Vt;
          ((null === (Vt = window.visualViewport) || void 0 === Vt ? void 0 : Vt.height) || 0) > et + 10 && tt.hasFocus && (tt.contentDOM.blur(), tt.focus())
        }), 100)
      }
      return Kt.ios && "deleteContentForward" == et.inputType && tt.observer.flushSoon(), Kt.safari && "insertText" == et.inputType && tt.inputState.composing >= 0 && setTimeout((() => aO.compositionend(tt, et)), 20), !1
    };
    const ZO = new Set;
    const LO = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let FO = !1;

    function kO() {
      FO = !1
    }
    class GO {
      constructor(tt) {
        this.lineWrapping = tt, this.doc = Ot.K.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(tt, et) {
        let Vt = this.doc.lineAt(et).number - this.doc.lineAt(tt).number + 1;
        return this.lineWrapping && (Vt += Math.max(0, Math.ceil((et - tt - Vt * this.lineLength * .5) / this.lineLength))), this.lineHeight * Vt
      }
      heightForLine(tt) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((tt - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(tt) {
        return this.doc = tt, this
      }
      mustRefreshForWrapping(tt) {
        return LO.indexOf(tt) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(tt) {
        let et = !1;
        for (let Vt = 0; Vt < tt.length; Vt++) {
          let Ot = tt[Vt];
          Ot < 0 ? Vt++ : this.heightSamples[Math.floor(10 * Ot)] || (et = !0, this.heightSamples[Math.floor(10 * Ot)] = !0)
        }
        return et
      }
      refresh(tt, et, Vt, Ot, qt, Dt) {
        let mt = LO.indexOf(tt) > -1,
          dt = Math.abs(et - this.lineHeight) > .3 || this.lineWrapping != mt || Math.abs(Vt - this.charWidth) > .1;
        if (this.lineWrapping = mt, this.lineHeight = et, this.charWidth = Vt, this.textHeight = Ot, this.lineLength = qt, dt) {
          this.heightSamples = {};
          for (let tt = 0; tt < Dt.length; tt++) {
            let et = Dt[tt];
            et < 0 ? tt++ : this.heightSamples[Math.floor(10 * et)] = !0
          }
        }
        return dt
      }
    }
    class zO {
      constructor(tt, et) {
        this.from = tt, this.heights = et, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class oO {
      constructor(tt, et, Vt, Ot, qt) {
        this.from = tt, this.length = et, this.top = Vt, this.height = Ot, this._content = qt
      }
      get type() {
        return "number" == typeof this._content ? It.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof Ft ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(tt) {
        let et = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(tt._content) ? tt._content : [tt]);
        return new oO(this.from, this.length + tt.length, this.top, this.height + tt.height, et)
      }
    }
    var rO = function(tt) {
      return tt[tt.ByPos = 0] = "ByPos", tt[tt.ByHeight = 1] = "ByHeight", tt[tt.ByPosNoHeight = 2] = "ByPosNoHeight", tt
    }(rO || (rO = {}));
    const UO = .001;
    class AO {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = tt, this.height = et, this.flags = Vt
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(tt) {
        this.flags = (tt ? 2 : 0) | -3 & this.flags
      }
      setHeight(tt) {
        this.height != tt && (Math.abs(this.height - tt) > UO && (FO = !0), this.height = tt)
      }
      replace(tt, et, Vt) {
        return AO.of(Vt)
      }
      decomposeLeft(tt, et) {
        et.push(this)
      }
      decomposeRight(tt, et) {
        et.push(this)
      }
      applyChanges(tt, et, Vt, Ot) {
        let qt = this,
          Dt = Vt.doc;
        for (let mt = Ot.length - 1; mt >= 0; mt--) {
          let {
            fromA: dt,
            toA: jt,
            fromB: Ht,
            toB: Xt
          } = Ot[mt], Qt = qt.lineAt(dt, rO.ByPosNoHeight, Vt.setDoc(et), 0, 0), lt = Qt.to >= jt ? Qt : qt.lineAt(jt, rO.ByPosNoHeight, Vt, 0, 0);
          for (Xt += lt.to - jt, jt = lt.to; mt > 0 && Qt.from <= Ot[mt - 1].toA;) dt = Ot[mt - 1].fromA, Ht = Ot[mt - 1].fromB, mt--, dt < Qt.from && (Qt = qt.lineAt(dt, rO.ByPosNoHeight, Vt, 0, 0));
          Ht += Qt.from - dt, dt = Qt.from;
          let Et = sO.build(Vt.setDoc(Dt), tt, Ht, Xt);
          qt = iO(qt, qt.replace(dt, jt, Et))
        }
        return qt.updateHeight(Vt, 0)
      }
      static empty() {
        return new pO(0, 0, 0)
      }
      static of (tt) {
        if (1 == tt.length) return tt[0];
        let et = 0,
          Vt = tt.length,
          Ot = 0,
          qt = 0;
        for (;;)
          if (et == Vt)
            if (Ot > 2 * qt) {
              let qt = tt[et - 1];
              qt.break ? tt.splice(--et, 1, qt.left, null, qt.right) : tt.splice(--et, 1, qt.left, qt.right), Vt += 1 + qt.break, Ot -= qt.size
            } else {
              if (!(qt > 2 * Ot)) break;
              {
                let et = tt[Vt];
                et.break ? tt.splice(Vt, 1, et.left, null, et.right) : tt.splice(Vt, 1, et.left, et.right), Vt += 2 + et.break, qt -= et.size
              }
            }
        else if (Ot < qt) {
          let Vt = tt[et++];
          Vt && (Ot += Vt.size)
        } else {
          let et = tt[--Vt];
          et && (qt += et.size)
        }
        let Dt = 0;
        return null == tt[et - 1] ? (Dt = 1, et--) : null == tt[et] && (Dt = 1, Vt++), new TO(AO.of(tt.slice(0, et)), Dt, AO.of(tt.slice(Vt)))
      }
    }

    function iO(tt, et) {
      return tt == et ? tt : (tt.constructor != et.constructor && (FO = !0), et)
    }
    AO.prototype.size = 1;
    const YO = Pt.replace({});
    class BO extends AO {
      constructor(tt, et, Vt) {
        super(tt, et), this.deco = Vt, this.spaceAbove = 0
      }
      mainBlock(tt, et) {
        return new oO(et, this.length, tt + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(tt, et, Vt, Ot) {
        return this.spaceAbove && tt < Vt + this.spaceAbove ? new oO(Ot, 0, Vt, this.spaceAbove, YO) : this.mainBlock(Vt, Ot)
      }
      lineAt(tt, et, Vt, Ot, qt) {
        let Dt = this.mainBlock(Ot, qt);
        return this.spaceAbove ? this.blockAt(0, Vt, Ot, qt).join(Dt) : Dt
      }
      forEachLine(tt, et, Vt, Ot, qt, Dt) {
        tt <= qt + this.length && et >= qt && Dt(this.lineAt(0, rO.ByPos, Vt, Ot, qt))
      }
      setMeasuredHeight(tt) {
        let et = tt.heights[tt.index++];
        et < 0 ? (this.spaceAbove = -et, et = tt.heights[tt.index++]) : this.spaceAbove = 0, this.setHeight(et)
      }
      updateHeight(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 3 ? arguments[3] : void 0;
        return Vt && Vt.from <= et && Vt.more && this.setMeasuredHeight(Vt), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class pO extends BO {
      constructor(tt, et, Vt) {
        super(tt, et, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = Vt
      }
      mainBlock(tt, et) {
        return new oO(et, this.length, tt + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(tt, et, Vt) {
        let Ot = Vt[0];
        return 1 == Vt.length && (Ot instanceof pO || Ot instanceof xO && 4 & Ot.flags) && Math.abs(this.length - Ot.length) < 10 ? (Ot instanceof xO ? Ot = new pO(Ot.length, this.height, this.spaceAbove) : Ot.height = this.height, this.outdated || (Ot.outdated = !1), Ot) : AO.of(Vt)
      }
      updateHeight(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        return Ot && Ot.from <= et && Ot.more ? this.setMeasuredHeight(Ot) : (Vt || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, tt.heightForLine(this.length - this.collapsed)) + this.breaks * tt.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class xO extends AO {
      constructor(tt) {
        super(tt, 0)
      }
      heightMetrics(tt, et) {
        let Vt, Ot = tt.doc.lineAt(et).number,
          qt = tt.doc.lineAt(et + this.length).number,
          Dt = qt - Ot + 1,
          mt = 0;
        if (tt.lineWrapping) {
          let et = Math.min(this.height, tt.lineHeight * Dt);
          Vt = et / Dt, this.length > Dt + 1 && (mt = (this.height - et) / (this.length - Dt - 1))
        } else Vt = this.height / Dt;
        return {
          firstLine: Ot,
          lastLine: qt,
          perLine: Vt,
          perChar: mt
        }
      }
      blockAt(tt, et, Vt, Ot) {
        let {
          firstLine: qt,
          lastLine: Dt,
          perLine: mt,
          perChar: dt
        } = this.heightMetrics(et, Ot);
        if (et.lineWrapping) {
          let qt = Ot + (tt < et.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (tt - Vt) / this.height)) * this.length)),
            Dt = et.doc.lineAt(qt),
            jt = mt + Dt.length * dt,
            Ht = Math.max(Vt, tt - jt / 2);
          return new oO(Dt.from, Dt.length, Ht, jt, 0)
        } {
          let Ot = Math.max(0, Math.min(Dt - qt, Math.floor((tt - Vt) / mt))),
            {
              from: dt,
              length: jt
            } = et.doc.line(qt + Ot);
          return new oO(dt, jt, Vt + mt * Ot, mt, 0)
        }
      }
      lineAt(tt, et, Vt, Ot, qt) {
        if (et == rO.ByHeight) return this.blockAt(tt, Vt, Ot, qt);
        if (et == rO.ByPosNoHeight) {
          let {
            from: et,
            to: Ot
          } = Vt.doc.lineAt(tt);
          return new oO(et, Ot - et, 0, 0, 0)
        }
        let {
          firstLine: Dt,
          perLine: mt,
          perChar: dt
        } = this.heightMetrics(Vt, qt), jt = Vt.doc.lineAt(tt), Ht = mt + jt.length * dt, Xt = jt.number - Dt, Qt = Ot + mt * Xt + dt * (jt.from - qt - Xt);
        return new oO(jt.from, jt.length, Math.max(Ot, Math.min(Qt, Ot + this.height - Ht)), Ht, 0)
      }
      forEachLine(tt, et, Vt, Ot, qt, Dt) {
        tt = Math.max(tt, qt), et = Math.min(et, qt + this.length);
        let {
          firstLine: mt,
          perLine: dt,
          perChar: jt
        } = this.heightMetrics(Vt, qt);
        for (let Ht = tt, Xt = Ot; Ht <= et;) {
          let et = Vt.doc.lineAt(Ht);
          if (Ht == tt) {
            let Vt = et.number - mt;
            Xt += dt * Vt + jt * (tt - qt - Vt)
          }
          let Ot = dt + jt * et.length;
          Dt(new oO(et.from, et.length, Xt, Ot, 0)), Xt += Ot, Ht = et.to + 1
        }
      }
      replace(tt, et, Vt) {
        let Ot = this.length - et;
        if (Ot > 0) {
          let tt = Vt[Vt.length - 1];
          tt instanceof xO ? Vt[Vt.length - 1] = new xO(tt.length + Ot) : Vt.push(null, new xO(Ot - 1))
        }
        if (tt > 0) {
          let et = Vt[0];
          et instanceof xO ? Vt[0] = new xO(tt + et.length) : Vt.unshift(new xO(tt - 1), null)
        }
        return AO.of(Vt)
      }
      decomposeLeft(tt, et) {
        et.push(new xO(tt - 1), null)
      }
      decomposeRight(tt, et) {
        et.push(null, new xO(this.length - tt - 1))
      }
      updateHeight(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 ? arguments[3] : void 0,
          qt = et + this.length;
        if (Ot && Ot.from <= et + this.length && Ot.more) {
          let Vt = [],
            Dt = Math.max(et, Ot.from),
            mt = -1;
          for (Ot.from > et && Vt.push(new xO(Ot.from - et - 1).updateHeight(tt, et)); Dt <= qt && Ot.more;) {
            let et = tt.doc.lineAt(Dt).length;
            Vt.length && Vt.push(null);
            let qt = Ot.heights[Ot.index++],
              dt = 0;
            qt < 0 && (dt = -qt, qt = Ot.heights[Ot.index++]), -1 == mt ? mt = qt : Math.abs(qt - mt) >= UO && (mt = -2);
            let jt = new pO(et, qt, dt);
            jt.outdated = !1, Vt.push(jt), Dt += et + 1
          }
          Dt <= qt && Vt.push(null, new xO(qt - Dt).updateHeight(tt, Dt));
          let dt = AO.of(Vt);
          return (mt < 0 || Math.abs(dt.height - this.height) >= UO || Math.abs(mt - this.heightMetrics(tt, et).perLine) >= UO) && (FO = !0), iO(this, dt)
        }
        return (Vt || this.outdated) && (this.setHeight(tt.heightForGap(et, et + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class TO extends AO {
      constructor(tt, et, Vt) {
        super(tt.length + et + Vt.length, tt.height + Vt.height, et | (tt.outdated || Vt.outdated ? 2 : 0)), this.left = tt, this.right = Vt, this.size = tt.size + Vt.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(tt, et, Vt, Ot) {
        let qt = Vt + this.left.height;
        return tt < qt ? this.left.blockAt(tt, et, Vt, Ot) : this.right.blockAt(tt, et, qt, Ot + this.left.length + this.break)
      }
      lineAt(tt, et, Vt, Ot, qt) {
        let Dt = Ot + this.left.height,
          mt = qt + this.left.length + this.break,
          dt = et == rO.ByHeight ? tt < Dt : tt < mt,
          jt = dt ? this.left.lineAt(tt, et, Vt, Ot, qt) : this.right.lineAt(tt, et, Vt, Dt, mt);
        if (this.break || (dt ? jt.to < mt : jt.from > mt)) return jt;
        let Ht = et == rO.ByPosNoHeight ? rO.ByPosNoHeight : rO.ByPos;
        return dt ? jt.join(this.right.lineAt(mt, Ht, Vt, Dt, mt)) : this.left.lineAt(mt, Ht, Vt, Ot, qt).join(jt)
      }
      forEachLine(tt, et, Vt, Ot, qt, Dt) {
        let mt = Ot + this.left.height,
          dt = qt + this.left.length + this.break;
        if (this.break) tt < dt && this.left.forEachLine(tt, et, Vt, Ot, qt, Dt), et >= dt && this.right.forEachLine(tt, et, Vt, mt, dt, Dt);
        else {
          let jt = this.lineAt(dt, rO.ByPos, Vt, Ot, qt);
          tt < jt.from && this.left.forEachLine(tt, jt.from - 1, Vt, Ot, qt, Dt), jt.to >= tt && jt.from <= et && Dt(jt), et > jt.to && this.right.forEachLine(jt.to + 1, et, Vt, mt, dt, Dt)
        }
      }
      replace(tt, et, Vt) {
        let Ot = this.left.length + this.break;
        if (et < Ot) return this.balanced(this.left.replace(tt, et, Vt), this.right);
        if (tt > this.left.length) return this.balanced(this.left, this.right.replace(tt - Ot, et - Ot, Vt));
        let qt = [];
        tt > 0 && this.decomposeLeft(tt, qt);
        let Dt = qt.length;
        for (let mt of Vt) qt.push(mt);
        if (tt > 0 && gO(qt, Dt - 1), et < this.length) {
          let tt = qt.length;
          this.decomposeRight(et, qt), gO(qt, tt)
        }
        return AO.of(qt)
      }
      decomposeLeft(tt, et) {
        let Vt = this.left.length;
        if (tt <= Vt) return this.left.decomposeLeft(tt, et);
        et.push(this.left), this.break && (Vt++, tt >= Vt && et.push(null)), tt > Vt && this.right.decomposeLeft(tt - Vt, et)
      }
      decomposeRight(tt, et) {
        let Vt = this.left.length,
          Ot = Vt + this.break;
        if (tt >= Ot) return this.right.decomposeRight(tt - Ot, et);
        tt < Vt && this.left.decomposeRight(tt, et), this.break && tt < Ot && et.push(null), et.push(this.right)
      }
      balanced(tt, et) {
        return tt.size > 2 * et.size || et.size > 2 * tt.size ? AO.of(this.break ? [tt, null, et] : [tt, et]) : (this.left = iO(this.left, tt), this.right = iO(this.right, et), this.setHeight(tt.height + et.height), this.outdated = tt.outdated || et.outdated, this.size = tt.size + et.size, this.length = tt.length + this.break+et.length, this)
      }
      updateHeight(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: qt,
            right: Dt
          } = this,
          mt = et + qt.length + this.break,
          dt = null;
        return Ot && Ot.from <= et + qt.length && Ot.more ? dt = qt = qt.updateHeight(tt, et, Vt, Ot) : qt.updateHeight(tt, et, Vt), Ot && Ot.from <= mt + Dt.length && Ot.more ? dt = Dt = Dt.updateHeight(tt, mt, Vt, Ot) : Dt.updateHeight(tt, mt, Vt), dt ? this.balanced(qt, Dt) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function gO(tt, et) {
      let Vt, Ot;
      null == tt[et] && (Vt = tt[et - 1]) instanceof xO && (Ot = tt[et + 1]) instanceof xO && tt.splice(et - 1, 3, new xO(Vt.length + 1 + Ot.length))
    }
    class sO {
      constructor(tt, et) {
        this.pos = tt, this.oracle = et, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = tt
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(tt, et) {
        if (this.lineStart > -1) {
          let tt = Math.min(et, this.lineEnd),
            Vt = this.nodes[this.nodes.length - 1];
          Vt instanceof pO ? Vt.length += tt - this.pos : (tt > this.pos || !this.isCovered) && this.nodes.push(new pO(tt - this.pos, -1, 0)), this.writtenTo = tt, et > tt && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = et
      }
      point(tt, et, Vt) {
        if (tt < et || Vt.heightRelevant) {
          let Ot = Vt.widget ? Vt.widget.estimatedHeight : 0,
            qt = Vt.widget ? Vt.widget.lineBreaks : 0;
          Ot < 0 && (Ot = this.oracle.lineHeight);
          let Dt = et - tt;
          Vt.block ? this.Iet(new BO(Dt, Ot, Vt)) : (Dt || qt || Ot >= 5) && this.addLineDeco(Ot, qt, Dt)
        } else et > tt && this.span(tt, et);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: tt,
          to: et
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = tt, this.lineEnd = et, this.writtenTo < tt && ((this.writtenTo < tt - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, tt - 1)), this.nodes.push(null)), this.pos > tt && this.nodes.push(new pO(this.pos - tt, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(tt, et) {
        let Vt = new xO(et - tt);
        return this.oracle.doc.lineAt(tt).to == et && (Vt.flags |= 4), Vt
      }
      ensureLine() {
        this.enterLine();
        let tt = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (tt instanceof pO) return tt;
        let et = new pO(0, -1, 0);
        return this.nodes.push(et), et
      }
      Iet(tt) {
        this.enterLine();
        let et = tt.deco;
        et && et.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(tt), this.writtenTo = this.pos = this.pos + tt.length, et && et.endSide > 0 && (this.covering = tt)
      }
      addLineDeco(tt, et, Vt) {
        let Ot = this.ensureLine();
        Ot.length += Vt, Ot.collapsed += Vt, Ot.widgetHeight = Math.max(Ot.widgetHeight, tt), Ot.breaks += et, this.writtenTo = this.pos = this.pos + Vt
      }
      finish(tt) {
        let et = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || et instanceof pO || this.isCovered ? (this.writtenTo < this.pos || null == et) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new pO(0, -1, 0));
        let Vt = tt;
        for (let Ot of this.nodes) Ot instanceof pO && Ot.updateHeight(this.oracle, Vt), Vt += Ot ? Ot.length : 1;
        return this.nodes
      }
      static build(tt, et, Vt, qt) {
        let Dt = new sO(Vt, tt);
        return Ot.B.spans(et, Vt, qt, Dt, 0), Dt.finish(Vt)
      }
    }
    class nO {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(tt, et, Vt, Ot) {
        (tt < et || Vt && Vt.heightRelevant || Ot && Ot.heightRelevant) && Gt(tt, et, this.changes, 5)
      }
    }

    function tq(tt, et) {
      let Vt = tt.getBoundingClientRect(),
        Ot = tt.ownerDocument,
        qt = Ot.defaultView || window,
        Dt = Math.max(0, Vt.left),
        mt = Math.min(qt.innerWidth, Vt.right),
        dt = Math.max(0, Vt.top),
        jt = Math.min(qt.innerHeight, Vt.bottom);
      for (let Ht = tt.parentNode; Ht && Ht != Ot.body;)
        if (1 == Ht.nodeType) {
          let et = Ht,
            Vt = window.getComputedStyle(et);
          if ((et.scrollHeight > et.clientHeight || et.scrollWidth > et.clientWidth) && "visible" != Vt.overflow) {
            let Vt = et.getBoundingClientRect();
            Dt = Math.max(Dt, Vt.left), mt = Math.min(mt, Vt.right), dt = Math.max(dt, Vt.top), jt = Math.min(Ht == tt.parentNode ? qt.innerHeight : jt, Vt.bottom)
          }
          Ht = "absolute" == Vt.position || "fixed" == Vt.position ? et.offsetParent : et.parentNode
        } else {
          if (11 != Ht.nodeType) break;
          Ht = Ht.host
        } return {
        left: Dt - Vt.left,
        right: Math.max(Dt, mt) - Vt.left,
        top: dt - (Vt.top + et),
        bottom: Math.max(dt, jt) - (Vt.top + et)
      }
    }

    function eq(tt, et) {
      let Vt = tt.getBoundingClientRect();
      return {
        left: 0,
        right: Vt.right - Vt.left,
        top: et,
        bottom: Vt.bottom - (Vt.top + et)
      }
    }
    class Vq {
      constructor(tt, et, Vt, Ot) {
        this.from = tt, this.to = et, this.size = Vt, this.displaySize = Ot
      }
      static same(tt, et) {
        if (tt.length != et.length) return !1;
        for (let Vt = 0; Vt < tt.length; Vt++) {
          let Ot = tt[Vt],
            qt = et[Vt];
          if (Ot.from != qt.from || Ot.to != qt.to || Ot.size != qt.size) return !1
        }
        return !0
      }
      draw(tt, et) {
        return Pt.replace({
          widget: new Oq(this.displaySize * (et ? tt.scaleY : tt.scaleX), et)
        }).range(this.from, this.to)
      }
    }
    class Oq extends Rt {
      constructor(tt, et) {
        super(), this.size = tt, this.vertical = et
      }
      eq(tt) {
        return tt.size == this.size && tt.vertical == this.vertical
      }
      toDOM() {
        let tt = document.createElement("div");
        return this.vertical ? tt.style.height = this.size + "px" : (tt.style.width = this.size + "px", tt.style.height = "2px", tt.style.display = "inline-block"), tt
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class qq {
      constructor(tt, et) {
        this.view = tt, this.state = et, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = jq, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Xe.LTR, this.Z4 = [], this.mustEnforceCursorAssoc = !1;
        let Vt = et.facet(tV).some((tt => "function" != typeof tt && "cm-lineWrapping" == tt.class));
        this.heightOracle = new GO(Vt), this.stateDeco = Hq(et), this.heightMap = AO.empty().applyChanges(this.stateDeco, Ot.K.empty, this.heightOracle.setDoc(et.doc), [new XV(0, 0, 0, et.doc.length)]);
        for (let Ot = 0; Ot < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Ot++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Pt.set(this.lineGaps.map((tt => tt.draw(this, !1)))), this.scrollParent = tt.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let tt = [this.viewport],
          {
            main: et
          } = this.state.selection;
        for (let Vt = 0; Vt <= 1; Vt++) {
          let Ot = Vt ? et.head : et.anchor;
          if (!tt.some((tt => {
              let {
                from: et,
                to: Vt
              } = tt;
              return Ot >= et && Ot <= Vt
            }))) {
            let {
              from: et,
              to: Vt
            } = this.lineBlockAt(Ot);
            tt.push(new Dq(et, Vt))
          }
        }
        return this.viewports = tt.sort(((tt, et) => tt.from - et.from)), this.updateScaler()
      }
      updateScaler() {
        let tt = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? jq : new Xq(this.heightOracle, this.heightMap, this.viewports), tt.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (tt => {
          this.viewportLines.push(Qq(tt, this.scaler))
        }))
      }
      update(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = tt.state;
        let Vt = this.stateDeco;
        this.stateDeco = Hq(this.state);
        let qt = tt.changedRanges,
          Dt = XV.extendWithRanges(qt, function(tt, et, Vt) {
            let qt = new nO;
            return Ot.B.compare(tt, et, Vt, qt, 0), qt.changes
          }(Vt, this.stateDeco, tt ? tt.changes : Ot.ChangeSet.empty(this.state.doc.length))),
          mt = this.heightMap.height,
          dt = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        kO(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, tt.startState.doc, this.heightOracle.setDoc(this.state.doc), Dt), (this.heightMap.height != mt || FO) && (tt.flags |= 2), dt ? (this.scrollAnchorPos = tt.changes.mapPos(dt.from, -1), this.scrollAnchorHeight = dt.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = mt);
        let jt = Dt.length ? this.mapViewport(this.viewport, tt.changes) : this.viewport;
        (et && (et.range.head < jt.from || et.range.head > jt.to) || !this.viewportIsAppropriate(jt)) && (jt = this.getViewport(0, et));
        let Ht = jt.from != this.viewport.from || jt.to != this.viewport.to;
        this.viewport = jt, tt.flags |= this.updateForViewport(), (Ht || !tt.changes.empty || 2 & tt.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, tt.changes))), tt.flags |= this.computeVisibleRanges(tt.changes), et && (this.scrollTarget = et), !this.mustEnforceCursorAssoc && (tt.selectionSet || tt.focusChanged) && tt.view.lineWrapping && tt.state.selection.main.empty && tt.state.selection.main.assoc && !tt.state.facet(re) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: tt
        } = this, et = tt.contentDOM, Vt = window.getComputedStyle(et), qt = this.heightOracle, Dt = Vt.whiteSpace;
        this.defaultTextDirection = "rtl" == Vt.direction ? Xe.RTL : Xe.LTR;
        let mt = this.heightOracle.mustRefreshForWrapping(Dt) || "refresh" === this.mustMeasureContent,
          dt = et.getBoundingClientRect(),
          jt = mt || this.mustMeasureContent || this.contentDOMHeight != dt.height;
        this.contentDOMHeight = dt.height, this.mustMeasureContent = !1;
        let Ht = 0,
          Xt = 0;
        if (dt.width && dt.height) {
          let {
            scaleX: tt,
            scaleY: Vt
          } = st(et, dt);
          (tt > .005 && Math.abs(this.scaleX - tt) > .005 || Vt > .005 && Math.abs(this.scaleY - Vt) > .005) && (this.scaleX = tt, this.scaleY = Vt, Ht |= 16, mt = jt = !0)
        }
        let Qt = (parseInt(Vt.paddingTop) || 0) * this.scaleY,
          lt = (parseInt(Vt.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == Qt && this.paddingBottom == lt || (this.paddingTop = Qt, this.paddingBottom = lt, Ht |= 18), this.editorWidth != tt.scrollDOM.clientWidth && (qt.lineWrapping && (jt = !0), this.editorWidth = tt.scrollDOM.clientWidth, Ht |= 16);
        let Et = nt(this.view.contentDOM, !1).y;
        Et != this.scrollParent && (this.scrollParent = Et, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let ft = this.getScrollOffset();
        this.scrollOffset != ft && (this.scrollAnchorHeight = -1, this.scrollOffset = ft), this.scrolledToBottom = me(this.scrollParent || tt.win);
        let wt = (this.printing ? eq : tq)(et, this.paddingTop),
          yt = wt.top - this.pixelViewport.top,
          Nt = wt.bottom - this.pixelViewport.bottom;
        this.pixelViewport = wt;
        let Mt = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (Mt != this.inView && (this.inView = Mt, Mt && (jt = !0)), !this.inView && !this.scrollTarget && ! function(tt) {
            let et = tt.getBoundingClientRect(),
              Vt = tt.ownerDocument.defaultView || window;
            return et.left < Vt.innerWidth && et.right > 0 && et.top < Vt.innerHeight && et.bottom > 0
          }(tt.dom)) return 0;
        let bt = dt.width;
        if (this.contentDOMWidth == bt && this.editorHeight == tt.scrollDOM.clientHeight || (this.contentDOMWidth = dt.width, this.editorHeight = tt.scrollDOM.clientHeight, Ht |= 16), jt) {
          let et = tt.docView.measureVisibleLineHeights(this.viewport);
          if (qt.mustRefreshForHeights(et) && (mt = !0), mt || qt.lineWrapping && Math.abs(bt - this.contentDOMWidth) > qt.charWidth) {
            let {
              lineHeight: Vt,
              charWidth: Ot,
              textHeight: dt
            } = tt.docView.measureTextSize();
            mt = Vt > 0 && qt.refresh(Dt, Vt, Ot, dt, Math.max(5, bt / Ot), et), mt && (tt.docView.minWidth = 0, Ht |= 16)
          }
          yt > 0 && Nt > 0 ? Xt = Math.max(yt, Nt) : yt < 0 && Nt < 0 && (Xt = Math.min(yt, Nt)), kO();
          for (let Vt of this.viewports) {
            let Dt = Vt.from == this.viewport.from ? et : tt.docView.measureVisibleLineHeights(Vt);
            this.heightMap = (mt ? AO.empty().applyChanges(this.stateDeco, Ot.K.empty, this.heightOracle, [new XV(0, 0, 0, tt.state.doc.length)]) : this.heightMap).updateHeight(qt, 0, mt, new zO(Vt.from, Dt))
          }
          FO && (Ht |= 2)
        }
        let Jt = !this.viewportIsAppropriate(this.viewport, Xt) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return Jt && (2 & Ht && (Ht |= this.updateScaler()), this.viewport = this.getViewport(Xt, this.scrollTarget), Ht |= this.updateForViewport()), (2 & Ht || Jt) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(mt ? [] : this.lineGaps, tt)), Ht |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, tt.docView.enforceCursorAssoc()), Ht
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(tt, et) {
        let Vt = .5 - Math.max(-.5, Math.min(.5, tt / 1e3 / 2)),
          Ot = this.heightMap,
          qt = this.heightOracle,
          {
            visibleTop: Dt,
            visibleBottom: mt
          } = this,
          dt = new Dq(Ot.lineAt(Dt - 1e3 * Vt, rO.ByHeight, qt, 0, 0).from, Ot.lineAt(mt + 1e3 * (1 - Vt), rO.ByHeight, qt, 0, 0).to);
        if (et) {
          let {
            head: tt
          } = et.range;
          if (tt < dt.from || tt > dt.to) {
            let Vt, Dt = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              mt = Ot.lineAt(tt, rO.ByPos, qt, 0, 0);
            Vt = "center" == et.y ? (mt.top + mt.bottom) / 2 - Dt / 2 : "start" == et.y || "nearest" == et.y && tt < dt.from ? mt.top : mt.bottom - Dt, dt = new Dq(Ot.lineAt(Vt - 500, rO.ByHeight, qt, 0, 0).from, Ot.lineAt(Vt + Dt + 500, rO.ByHeight, qt, 0, 0).to)
          }
        }
        return dt
      }
      mapViewport(tt, et) {
        let Vt = et.mapPos(tt.from, -1),
          Ot = et.mapPos(tt.to, 1);
        return new Dq(this.heightMap.lineAt(Vt, rO.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Ot, rO.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(tt) {
        let {
          from: et,
          to: Vt
        } = tt, Ot = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: qt
        } = this.heightMap.lineAt(et, rO.ByPos, this.heightOracle, 0, 0), {
          bottom: Dt
        } = this.heightMap.lineAt(Vt, rO.ByPos, this.heightOracle, 0, 0), {
          visibleTop: mt,
          visibleBottom: dt
        } = this;
        return (0 == et || qt <= mt - Math.max(10, Math.min(-Ot, 250))) && (Vt == this.state.doc.length || Dt >= dt + Math.max(10, Math.min(Ot, 250))) && qt > mt - 2e3 && Dt < dt + 2e3
      }
      mapLineGaps(tt, et) {
        if (!tt.length || et.empty) return tt;
        let Vt = [];
        for (let Ot of tt) et.touchesRange(Ot.from, Ot.to) || Vt.push(new Vq(et.mapPos(Ot.from), et.mapPos(Ot.to), Ot.size, Ot.displaySize));
        return Vt
      }
      ensureLineGaps(tt, et) {
        let Vt = this.heightOracle.lineWrapping,
          qt = Vt ? 1e4 : 2e3,
          Dt = qt >> 1,
          mt = qt << 1;
        if (this.defaultTextDirection != Xe.LTR && !Vt) return [];
        let dt = [],
          jt = (qt, mt, Ht, Xt) => {
            if (mt - qt < Dt) return;
            let Qt = this.state.selection.main,
              lt = [Qt.from];
            Qt.empty || lt.push(Qt.to);
            for (let tt of lt)
              if (tt > qt && tt < mt) return jt(qt, tt - 10, Ht, Xt), void jt(tt + 10, mt, Ht, Xt);
            let Et = function(tt, et) {
              for (let Vt of tt)
                if (et(Vt)) return Vt;
              return
            }(tt, (tt => tt.from >= Ht.from && tt.to <= Ht.to && Math.abs(tt.from - qt) < Dt && Math.abs(tt.to - mt) < Dt && !lt.some((et => tt.from < et && tt.to > et))));
            if (!Et) {
              if (mt < Ht.to && et && Vt && et.Z4.some((tt => tt.from <= mt && tt.to >= mt))) {
                let tt = et.moveToLineBoundary(Ot.n.cursor(mt), !1, !0).head;
                tt > qt && (mt = tt)
              }
              let tt = this.gapSize(Ht, qt, mt, Xt);
              Et = new Vq(qt, mt, tt, Vt || tt < 2e6 ? tt : 2e6)
            }
            dt.push(Et)
          },
          Ht = et => {
            if (et.length < mt || et.type != It.Text) return;
            let Dt = function(tt, et, Vt) {
              let qt = [],
                Dt = tt,
                mt = 0;
              Ot.B.spans(Vt, tt, et, {
                span() {},
                point(tt, et) {
                  tt > Dt && (qt.push({
                    from: Dt,
                    to: tt
                  }), mt += tt - Dt), Dt = et
                }
              }, 20), Dt < et && (qt.push({
                from: Dt,
                to: et
              }), mt += et - Dt);
              return {
                total: mt,
                nw: qt
              }
            }(et.from, et.to, this.stateDeco);
            if (Dt.total < mt) return;
            let dt, Ht, Xt = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (Vt) {
              let tt, Vt, Ot = qt / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != Xt) {
                let qt = dq(Dt, Xt),
                  mt = ((this.visibleBottom - this.visibleTop) / 2 + Ot) / et.height;
                tt = qt - mt, Vt = qt + mt
              } else tt = (this.visibleTop - et.top - Ot) / et.height, Vt = (this.visibleBottom - et.top + Ot) / et.height;
              dt = mq(Dt, tt), Ht = mq(Dt, Vt)
            } else {
              let Vt = Dt.total * this.heightOracle.charWidth,
                Ot = qt * this.heightOracle.charWidth,
                mt = 0;
              if (Vt > 2e6)
                for (let qt of tt) qt.from >= et.from && qt.from < et.to && qt.size != qt.displaySize && qt.from * this.heightOracle.charWidth + mt < this.pixelViewport.left && (mt = qt.size - qt.displaySize);
              let jt, Qt, lt = this.pixelViewport.left + mt,
                Et = this.pixelViewport.right + mt;
              if (null != Xt) {
                let tt = dq(Dt, Xt),
                  et = ((Et - lt) / 2 + Ot) / Vt;
                jt = tt - et, Qt = tt + et
              } else jt = (lt - Ot) / Vt, Qt = (Et + Ot) / Vt;
              dt = mq(Dt, jt), Ht = mq(Dt, Qt)
            }
            dt > et.from && jt(et.from, dt, et, Dt), Ht < et.to && jt(Ht, et.to, et, Dt)
          };
        for (let Ot of this.viewportLines) Array.isArray(Ot.type) ? Ot.type.forEach(Ht) : Ht(Ot);
        return dt
      }
      gapSize(tt, et, Vt, Ot) {
        let qt = dq(Ot, Vt) - dq(Ot, et);
        return this.heightOracle.lineWrapping ? tt.height * qt : Ot.total * this.heightOracle.charWidth * qt
      }
      updateLineGaps(tt) {
        Vq.same(tt, this.lineGaps) || (this.lineGaps = tt, this.lineGapDeco = Pt.set(tt.map((tt => tt.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(tt) {
        let et = this.stateDeco;
        this.lineGaps.length && (et = et.concat(this.lineGapDeco));
        let Vt = [];
        Ot.B.spans(et, this.viewport.from, this.viewport.to, {
          span(tt, et) {
            Vt.push({
              from: tt,
              to: et
            })
          },
          point() {}
        }, 20);
        let qt = 0;
        if (Vt.length != this.Z4.length) qt = 12;
        else
          for (let Ot = 0; Ot < Vt.length && !(8 & qt); Ot++) {
            let et = this.Z4[Ot],
              Dt = Vt[Ot];
            et.from == Dt.from && et.to == Dt.to || (qt |= 4, tt && tt.mapPos(et.from, -1) == Dt.from && tt.mapPos(et.to, 1) == Dt.to || (qt |= 8))
          }
        return this.Z4 = Vt, qt
      }
      lineBlockAt(tt) {
        return tt >= this.viewport.from && tt <= this.viewport.to && this.viewportLines.find((et => et.from <= tt && et.to >= tt)) || Qq(this.heightMap.lineAt(tt, rO.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(tt) {
        return tt >= this.viewportLines[0].top && tt <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((et => et.top <= tt && et.bottom >= tt)) || Qq(this.heightMap.lineAt(this.scaler.fromDOM(tt), rO.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(tt) {
        let et = this.lineBlockAtHeight(tt + 8);
        return et.from >= this.viewport.from || this.viewportLines[0].top - tt > 200 ? et : this.viewportLines[0]
      }
      elementAtHeight(tt) {
        return Qq(this.heightMap.blockAt(this.scaler.fromDOM(tt), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class Dq {
      constructor(tt, et) {
        this.from = tt, this.to = et
      }
    }

    function mq(tt, et) {
      let {
        total: Vt,
        nw: Ot
      } = tt;
      if (et <= 0) return Ot[0].from;
      if (et >= 1) return Ot[Ot.length - 1].to;
      let qt = Math.floor(Vt * et);
      for (let Dt = 0;; Dt++) {
        let {
          from: tt,
          to: et
        } = Ot[Dt], Vt = et - tt;
        if (qt <= Vt) return tt + qt;
        qt -= Vt
      }
    }

    function dq(tt, et) {
      let Vt = 0;
      for (let {
          from: Ot,
          to: qt
        }
        of tt.nw) {
        if (et <= qt) {
          Vt += et - Ot;
          break
        }
        Vt += qt - Ot
      }
      return Vt / tt.total
    }
    const jq = {
      toDOM: tt => tt,
      fromDOM: tt => tt,
      scale: 1,
      eq(tt) {
        return tt == this
      }
    };

    function Hq(tt) {
      let et = tt.facet(eV).filter((tt => "function" != typeof tt)),
        Vt = tt.facet(OV).filter((tt => "function" != typeof tt));
      return Vt.length && et.push(Ot.B.join(Vt)), et
    }
    class Xq {
      constructor(tt, et, Vt) {
        let Ot = 0,
          qt = 0,
          Dt = 0;
        this.viewports = Vt.map((Vt => {
          let {
            from: qt,
            to: Dt
          } = Vt, mt = et.lineAt(qt, rO.ByPos, tt, 0, 0).top, dt = et.lineAt(Dt, rO.ByPos, tt, 0, 0).bottom;
          return Ot += dt - mt, {
            from: qt,
            to: Dt,
            top: mt,
            bottom: dt,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Ot) / (et.height - Ot);
        for (let mt of this.viewports) mt.domTop = Dt + (mt.top - qt) * this.scale, Dt = mt.domBottom = mt.domTop + (mt.bottom - mt.top), qt = mt.bottom
      }
      toDOM(tt) {
        for (let et = 0, Vt = 0, Ot = 0;; et++) {
          let qt = et < this.viewports.length ? this.viewports[et] : null;
          if (!qt || tt < qt.top) return Ot + (tt - Vt) * this.scale;
          if (tt <= qt.bottom) return qt.domTop + (tt - qt.top);
          Vt = qt.bottom, Ot = qt.domBottom
        }
      }
      fromDOM(tt) {
        for (let et = 0, Vt = 0, Ot = 0;; et++) {
          let qt = et < this.viewports.length ? this.viewports[et] : null;
          if (!qt || tt < qt.domTop) return Vt + (tt - Ot) / this.scale;
          if (tt <= qt.domBottom) return qt.top + (tt - qt.domTop);
          Vt = qt.bottom, Ot = qt.domBottom
        }
      }
      eq(tt) {
        return tt instanceof Xq && (this.scale == tt.scale && this.viewports.length == tt.viewports.length && this.viewports.every(((et, Vt) => et.from == tt.viewports[Vt].from && et.to == tt.viewports[Vt].to)))
      }
    }

    function Qq(tt, et) {
      if (1 == et.scale) return tt;
      let Vt = et.toDOM(tt.top),
        Ot = et.toDOM(tt.bottom);
      return new oO(tt.from, tt.length, Vt, Ot - Vt, Array.isArray(tt._content) ? tt._content.map((tt => Qq(tt, et))) : tt._content)
    }
    const lq = Ot.s.define({
        combine: tt => tt.join(" ")
      }),
      Eq = Ot.s.define({
        combine: tt => tt.indexOf(!0) > -1
      }),
      fq = qt.c.newName(),
      wq = qt.c.newName(),
      yq = qt.c.newName(),
      Nq = {
        "&light": "." + wq,
        "&dark": "." + yq
      };

    function aq(tt, et, Vt) {
      return new qt.c(et, {
        finish: et => /&/.test(et) ? et.replace(/&\w*/, (et => {
          if ("&" == et) return tt;
          if (!Vt || !Vt[et]) throw new RangeError(`Unsupported selector: ${et}`);
          return Vt[et]
        })) : tt + " " + et
      })
    }
    const Mq = aq("." + fq, {
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
      }, Nq),
      bq = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Jq = Kt.ie && Kt.ie_version <= 11;
    class Cq {
      constructor(tt) {
        this.view = tt, this.active = !1, this.editContext = null, this.selectionRange = new te, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = tt.contentDOM, this.observer = new MutationObserver((et => {
          for (let tt of et) this.queue.push(tt);
          (Kt.ie && Kt.ie_version <= 11 || Kt.ios && tt.composing) && et.some((tt => "childList" == tt.type && tt.removedNodes.length || "characterData" == tt.type && tt.oldValue.length > tt.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !Kt.android || !1 === tt.constructor.EDIT_CONTEXT || Kt.chrome && Kt.chrome_version < 126 || (this.editContext = new hq(tt), tt.state.facet(pe) && (tt.contentDOM.editContext = this.editContext.editContext)), Jq && (this.onCharData = tt => {
          this.queue.push({
            target: tt.target,
            type: "characterData",
            oldValue: tt.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.iN = this.iN.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var tt;
          (null === (tt = this.view.docView) || void 0 === tt ? void 0 : tt.lastUpdate) < Date.now() - 75 && this.iN()
        })), this.resizeScroll.observe(tt.scrollDOM)), this.addWindowListeners(this.win = tt.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((tt => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), tt.length > 0 && tt[tt.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((tt => {
          tt.length > 0 && tt[tt.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(tt) {
        this.view.inputState.runHandlers("scroll", tt), this.intersecting && this.view.measure()
      }
      onScroll(tt) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(tt)
      }
      iN() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(tt) {
        ("change" != tt.type && tt.type || tt.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(tt) {
        if (this.gapIntersection && (tt.length != this.gaps.length || this.gaps.some(((et, Vt) => et != tt[Vt])))) {
          this.gapIntersection.disconnect();
          for (let et of tt) this.gapIntersection.observe(et);
          this.gaps = tt
        }
      }
      onSelectionChange(tt) {
        let et = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: Vt
        } = this, Ot = this.selectionRange;
        if (Vt.state.facet(pe) ? Vt.root.activeElement != this.dom : !Ut(this.dom, Ot)) return;
        let qt = Ot.anchorNode && Vt.docView.tile.nearest(Ot.anchorNode);
        qt && qt.isWidget() && qt.widget.ignoreEvent(tt) ? et || (this.selectionChanged = !1) : (Kt.ie && Kt.ie_version <= 11 || Kt.android && Kt.chrome) && !Vt.state.selection.main.empty && Ot.focusNode && it(Ot.focusNode, Ot.focusOffset, Ot.anchorNode, Ot.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: tt
        } = this, et = ot(tt.root);
        if (!et) return !1;
        let Vt = Kt.safari && 11 == tt.root.nodeType && tt.root.activeElement == this.dom && function(tt, et) {
          if (et.getComposedRanges) {
            let Vt = et.getComposedRanges(tt.root)[0];
            if (Vt) return Kq(tt, Vt)
          }
          let Vt = null;

          function Ot(tt) {
            tt.preventDefault(), tt.stopImmediatePropagation(), Vt = tt.getTargetRanges()[0]
          }
          return tt.contentDOM.addEventListener("beforeinput", Ot, !0), tt.dom.ownerDocument.execCommand("indent"), tt.contentDOM.removeEventListener("beforeinput", Ot, !0), Vt ? Kq(tt, Vt) : null
        }(this.view, et) || et;
        if (!Vt || this.selectionRange.eq(Vt)) return !1;
        let Ot = Ut(this.dom, Vt);
        return Ot && !this.selectionChanged && tt.inputState.lastFocusTime > Date.now() - 200 && tt.inputState.lastTouchTime < Date.now() - 300 && function(tt, et) {
          let Vt = et.focusNode,
            Ot = et.focusOffset;
          if (!Vt || et.anchorNode != Vt || et.anchorOffset != Ot) return !1;
          for (Ot = Math.min(Ot, xt(Vt));;)
            if (Ot) {
              if (1 != Vt.nodeType) return !1;
              let tt = Vt.childNodes[Ot - 1];
              "false" == tt.contentEditable ? Ot-- : (Vt = tt, Ot = xt(Vt))
            } else {
              if (Vt == tt) return !0;
              Ot = Yt(Vt), Vt = Vt.parentNode
            }
        }(this.dom, Vt) ? (this.view.inputState.lastFocusTime = 0, tt.docView.updateSelection(), !1) : (this.selectionRange.setRange(Vt), Ot && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(tt, et) {
        this.selectionRange.set(tt.node, tt.offset, et.node, et.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let tt = 0,
          et = null;
        for (let Vt = this.dom; Vt;)
          if (1 == Vt.nodeType) !et && tt < this.scrollTargets.length && this.scrollTargets[tt] == Vt ? tt++ : et || (et = this.scrollTargets.slice(0, tt)), et && et.push(Vt), Vt = Vt.assignedSlot || Vt.parentNode;
          else {
            if (11 != Vt.nodeType) break;
            Vt = Vt.host
          } if (tt < this.scrollTargets.length && !et && (et = this.scrollTargets.slice(0, tt)), et) {
          for (let tt of this.scrollTargets) tt.removeEventListener("scroll", this.onScroll);
          for (let tt of this.scrollTargets = et) tt.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(tt) {
        if (!this.active) return tt();
        try {
          return this.stop(), tt()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, bq), Jq && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Jq && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(tt, et) {
        var Vt;
        if (!this.delayedAndroidKey) {
          let tt = () => {
            let tt = this.delayedAndroidKey;
            if (tt) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = tt.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && tt.force && De(this.dom, tt.key, tt.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(tt)
        }
        this.delayedAndroidKey && "Enter" != tt || (this.delayedAndroidKey = {
          key: tt,
          keyCode: et,
          force: this.lastChange < Date.now() - 50 || !!(null === (Vt = this.delayedAndroidKey) || void 0 === Vt ? void 0 : Vt.force)
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
        for (let tt of this.observer.takeRecords()) this.queue.push(tt);
        return this.queue
      }
      processRecords() {
        let tt = this.pendingRecords();
        tt.length && (this.queue = []);
        let et = -1,
          Vt = -1,
          Ot = !1;
        for (let qt of tt) {
          let tt = this.readMutation(qt);
          tt && (tt.typeOver && (Ot = !0), -1 == et ? ({
            from: et,
            to: Vt
          } = tt) : (et = Math.min(tt.from, et), Vt = Math.max(tt.to, Vt)))
        }
        return {
          from: et,
          to: Vt,
          typeOver: Ot
        }
      }
      readChange() {
        let {
          from: tt,
          to: et,
          typeOver: Vt
        } = this.processRecords(), Ot = this.selectionChanged && Ut(this.dom, this.selectionRange);
        if (tt < 0 && !Ot) return null;
        tt > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let qt = new OO(this.view, tt, et, Vt);
        return this.view.docView.domChanged = {
          newSel: qt.newSel ? qt.newSel.main : null
        }, qt
      }
      flush() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        tt && this.readSelectionRange();
        let et = this.readChange();
        if (!et) return this.view.requestMeasure(), !1;
        let Vt = this.view.state,
          Ot = DO(this.view, et);
        return this.view.state == Vt && (et.domChanged || et.newSel && !jO(this.view.state.selection, et.newSel.main)) && this.view.update([]), Ot
      }
      readMutation(tt) {
        let et = this.view.docView.tile.nearest(tt.target);
        if (!et || et.isWidget()) return null;
        if (et.markDirty("attributes" == tt.type), "childList" == tt.type) {
          let Vt = uq(et, tt.previousSibling || tt.target.previousSibling, -1),
            Ot = uq(et, tt.nextSibling || tt.target.nextSibling, 1);
          return {
            from: Vt ? et.posAfter(Vt) : et.posAtStart,
            to: Ot ? et.posBefore(Ot) : et.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == tt.type ? {
          from: et.posAtStart,
          to: et.posAtEnd,
          typeOver: tt.target.nodeValue == tt.oldValue
        } : null
      }
      setWindow(tt) {
        tt != this.win && (this.removeWindowListeners(this.win), this.win = tt, this.addWindowListeners(this.win))
      }
      addWindowListeners(tt) {
        tt.addEventListener("resize", this.iN), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : tt.addEventListener("beforeprint", this.onPrint), tt.addEventListener("scroll", this.onScroll), tt.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(tt) {
        tt.removeEventListener("scroll", this.onScroll), tt.removeEventListener("resize", this.iN), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : tt.removeEventListener("beforeprint", this.onPrint), tt.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(tt) {
        this.editContext && (this.editContext.update(tt), tt.startState.facet(pe) != tt.state.facet(pe) && (tt.view.contentDOM.editContext = tt.state.facet(pe) ? this.editContext.editContext : null))
      }
      destroy() {
        var tt, et, Vt;
        this.stop(), null === (tt = this.intersection) || void 0 === tt || tt.disconnect(), null === (et = this.gapIntersection) || void 0 === et || et.disconnect(), null === (Vt = this.resizeScroll) || void 0 === Vt || Vt.disconnect();
        for (let Ot of this.scrollTargets) Ot.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function uq(tt, et, Vt) {
      for (; et;) {
        let Ot = EV.get(et);
        if (Ot && Ot.parent == tt) return Ot;
        let qt = et.parentNode;
        et = qt != tt.dom ? qt : Vt > 0 ? et.nextSibling : et.previousSibling
      }
      return null
    }

    function Kq(tt, et) {
      let Vt = et.startContainer,
        Ot = et.startOffset,
        qt = et.endContainer,
        Dt = et.endOffset,
        mt = tt.docView.domAtPos(tt.state.selection.main.anchor, 1);
      return it(mt.node, mt.offset, qt, Dt) && ([Vt, Ot, qt, Dt] = [qt, Dt, Vt, Ot]), {
        anchorNode: Vt,
        anchorOffset: Ot,
        focusNode: qt,
        focusOffset: Dt
      }
    }
    class hq {
      constructor(tt) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(tt.state);
        let et = this.editContext = new window.EditContext({
          text: tt.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, tt.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(tt.state.selection.main.head)
        });
        this.handlers.textupdate = Vt => {
          let qt = tt.state.selection.main,
            {
              anchor: Dt,
              head: mt
            } = qt,
            dt = this.toEditorPos(Vt.updateRangeStart),
            jt = this.toEditorPos(Vt.updateRangeEnd);
          tt.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: Vt.updateRangeStart,
            editorBase: dt,
            drifted: !1
          });
          let Ht = jt - dt > Vt.text.length;
          dt == this.from && Dt < this.from ? dt = Dt : jt == this.to && Dt > this.to && (jt = Dt);
          let Xt = dO(tt.state.sliceDoc(dt, jt), Vt.text, (Ht ? qt.from : qt.to) - dt, Ht ? "end" : null);
          if (!Xt) {
            let et = Ot.n.single(this.toEditorPos(Vt.selectionStart), this.toEditorPos(Vt.selectionEnd));
            return void(jO(et, qt) || tt.dispatch({
              selection: et,
              userEvent: "select"
            }))
          }
          let Qt = {
            from: Xt.from + dt,
            to: Xt.toA + dt,
            insert: Ot.K.of(Vt.text.slice(Xt.from, Xt.toB).split("\n"))
          };
          if ((Kt.mac || Kt.android) && Qt.from == mt - 1 && /^\. ?$/.test(Vt.text) && "off" == tt.contentDOM.getAttribute("autocorrect") && (Qt = {
              from: dt,
              to: jt,
              insert: Ot.K.of([Vt.text.replace(".", " ")])
            }), this.pendingContextChange = Qt, !tt.state.readOnly) {
            let et = this.to - this.from + (Qt.to - Qt.from + Qt.insert.length);
            mO(tt, Qt, Ot.n.single(this.toEditorPos(Vt.selectionStart, et), this.toEditorPos(Vt.selectionEnd, et)))
          }
          this.pendingContextChange && (this.revertPending(tt.state), this.setSelection(tt.state)), Qt.from < Qt.to && !Qt.insert.length && tt.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(et.text.slice(Math.max(0, Vt.updateRangeStart - 1), Math.min(et.text.length, Vt.updateRangeStart + 1))) && this.handlers.compositionend(Vt)
        }, this.handlers.characterboundsupdate = Vt => {
          let Ot = [],
            qt = null;
          for (let et = this.toEditorPos(Vt.rangeStart), Dt = this.toEditorPos(Vt.rangeEnd); et < Dt; et++) {
            let Vt = tt.coordsForChar(et);
            qt = Vt && new DOMRect(Vt.left, Vt.top, Vt.right - Vt.left, Vt.bottom - Vt.top) || qt || new DOMRect, Ot.push(qt)
          }
          et.updateCharacterBounds(Vt.rangeStart, Ot)
        }, this.handlers.textformatupdate = et => {
          let Vt = [];
          for (let tt of et.getTextFormats()) {
            let et = tt.underlineStyle,
              Ot = tt.underlineThickness;
            if (!/none/i.test(et) && !/none/i.test(Ot)) {
              let qt = this.toEditorPos(tt.rangeStart),
                Dt = this.toEditorPos(tt.rangeEnd);
              if (qt < Dt) {
                let tt = `text-decoration: underline ${/^[a-z]/.test(et)?et+" ":"Dashed"==et?"dashed ":"Squiggle"==et?"wavy ":""}${/thin/i.test(Ot)?1:2}px`;
                Vt.push(Pt.mark({
                  attributes: {
                    style: tt
                  }
                }).range(qt, Dt))
              }
            }
          }
          tt.dispatch({
            effects: Ye.of(Pt.set(Vt))
          })
        }, this.handlers.compositionstart = () => {
          tt.inputState.composing < 0 && (tt.inputState.composing = 0, tt.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (tt.inputState.composing = -1, tt.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: et
            } = this.composing;
            this.composing = null, et && this.reset(tt.state)
          }
        };
        for (let Vt in this.handlers) et.addEventListener(Vt, this.handlers[Vt]);
        this.measureReq = {
          read: tt => {
            this.editContext.updateControlBounds(tt.contentDOM.getBoundingClientRect());
            let et = ot(tt.root);
            et && et.rangeCount && this.editContext.updateSelectionBounds(et.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(tt) {
        let et = 0,
          Vt = !1,
          Ot = this.pendingContextChange;
        return tt.changes.iterChanges(((qt, Dt, mt, dt, jt) => {
          if (Vt) return;
          let Ht = jt.length - (Dt - qt);
          if (Ot && Dt >= Ot.to) {
            if (Ot.from == qt && Ot.to == Dt && Ot.insert.eq(jt)) return Ot = this.pendingContextChange = null, et += Ht, void(this.to += Ht);
            Ot = null, this.revertPending(tt.state)
          }
          if (qt += et, (Dt += et) <= this.from) this.from += Ht, this.to += Ht;
          else if (qt < this.to) {
            if (qt < this.from || Dt > this.to || this.to - this.from + jt.length > 3e4) return void(Vt = !0);
            this.editContext.updateText(this.toContextPos(qt), this.toContextPos(Dt), jt.toString()), this.to += Ht
          }
          et += Ht
        })), Ot && !Vt && this.revertPending(tt.state), !Vt
      }
      update(tt) {
        let et = this.pendingContextChange,
          Vt = tt.startState.selection.main;
        this.composing && (this.composing.drifted || !tt.changes.touchesRange(Vt.from, Vt.to) && tt.transactions.some((tt => !tt.isUserEvent("input.type") && tt.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = tt.changes.mapPos(this.composing.editorBase)) : this.applyEdits(tt) && this.rangeIsValid(tt.state) ? (tt.docChanged || tt.selectionSet || et) && this.setSelection(tt.state) : (this.pendingContextChange = null, this.reset(tt.state)), (tt.geometryChanged || tt.docChanged || tt.selectionSet) && tt.view.requestMeasure(this.measureReq)
      }
      resetRange(tt) {
        let {
          head: et
        } = tt.selection.main;
        this.from = Math.max(0, et - 1e4), this.to = Math.min(tt.doc.length, et + 1e4)
      }
      reset(tt) {
        this.resetRange(tt), this.editContext.updateText(0, this.editContext.text.length, tt.doc.sliceString(this.from, this.to)), this.setSelection(tt)
      }
      revertPending(tt) {
        let et = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(et.from), this.toContextPos(et.from + et.insert.length), tt.doc.sliceString(et.from, et.to))
      }
      setSelection(tt) {
        let {
          main: et
        } = tt.selection, Vt = this.toContextPos(Math.max(this.from, Math.min(this.to, et.anchor))), Ot = this.toContextPos(et.head);
        this.editContext.selectionStart == Vt && this.editContext.selectionEnd == Ot || this.editContext.updateSelection(Vt, Ot)
      }
      rangeIsValid(tt) {
        let {
          head: et
        } = tt.selection.main;
        return !(this.from > 0 && et - this.from < 500 || this.to < tt.doc.length && this.to - et < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        tt = Math.min(tt, et);
        let Vt = this.composing;
        return Vt && Vt.drifted ? Vt.editorBase + (tt - Vt.contextBase) : tt + this.from
      }
      toContextPos(tt) {
        let et = this.composing;
        return et && et.drifted ? et.contextBase + (tt - et.editorBase) : tt - this.from
      }
      destroy() {
        for (let tt in this.handlers) this.editContext.removeEventListener(tt, this.handlers[tt])
      }
    }
    class vq {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get Z4() {
        return this.viewState.Z4
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
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var et;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), tt.parent && tt.parent.appendChild(this.dom);
        let {
          dispatch: Vt
        } = tt;
        this.dispatchTransactions = tt.dispatchTransactions || Vt && (tt => tt.forEach((tt => Vt(tt, this)))) || (tt => this.update(tt)), this.dispatch = this.dispatch.bind(this), this._root = tt.root || function(tt) {
          for (; tt;) {
            if (tt && (9 == tt.nodeType || 11 == tt.nodeType && tt.host)) return tt;
            tt = tt.assignedSlot || tt.parentNode
          }
          return null
        }(tt.parent) || document, this.viewState = new qq(this, tt.state || Ot.q.create(tt)), tt.scrollTo && tt.scrollTo.is(ie) && (this.viewState.scrollTarget = tt.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Te).map((tt => new se(tt)));
        for (let Ot of this.plugins) Ot.update(this);
        this.observer = new Cq(this), this.inputState = new HO(this), this.inputState.ensureHandlers(this.plugins), this.docView = new kV(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (et = document.fonts) || void 0 === et ? void 0 : et.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        let qt = 1 == et.length && et[0] instanceof Ot.O ? et : 1 == et.length && Array.isArray(et[0]) ? et[0] : [this.state.update(...et)];
        this.dispatchTransactions(qt, this)
      }
      update(tt) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let et, Vt = !1,
          qt = !1,
          Dt = this.state;
        for (let Ot of tt) {
          if (Ot.startState != Dt) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          Dt = Ot.state
        }
        if (this.destroyed) return void(this.viewState.state = Dt);
        let mt = this.hasFocus,
          dt = 0,
          jt = null;
        tt.some((tt => tt.annotation(RO))) ? (this.inputState.notifiedFocused = mt, dt = 1) : mt != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = mt, jt = IO(Dt, mt), jt || (dt = 1));
        let Ht = this.observer.delayedAndroidKey,
          Xt = null;
        if (Ht ? (this.observer.clearDelayedAndroidKey(), Xt = this.observer.readChange(), (Xt && !this.state.doc.eq(Dt.doc) || !this.state.selection.eq(Dt.selection)) && (Xt = null)) : this.observer.clear(), Dt.facet(Ot.q.phrases) != this.state.facet(Ot.q.phrases)) return this.setState(Dt);
        et = QV.create(this, Dt, tt), et.flags |= dt;
        let Qt = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let et of tt) {
            if (Qt && (Qt = Qt.map(et.changes)), et.scrollIntoView) {
              let {
                main: tt
              } = et.state.selection, {
                x: Vt,
                y: qt
              } = this.state.facet(vq.cursorScrollMargin);
              Qt = new Ae(tt.empty ? tt : Ot.n.cursor(tt.head, tt.head > tt.anchor ? -1 : 1), "nearest", "nearest", qt, Vt)
            }
            for (let tt of et.effects) tt.is(ie) && (Qt = tt.value.clip(this.state))
          }
          this.viewState.update(et, Qt), this.bidiCache = cq.update(this.bidiCache, et.changes), et.empty || (this.updatePlugins(et), this.inputState.update(et)), Vt = this.docView.update(et), this.state.facet(HV) != this.styleModules && this.mountStyles(), qt = this.updateAttrs(), this.showAnnouncements(tt), this.docView.updateSelection(Vt, tt.some((tt => tt.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (et.startState.facet(lq) != et.state.facet(lq) && (this.viewState.mustMeasureContent = !0), (Vt || qt || Qt || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), Vt && this.docViewUpdate(), !et.empty)
          for (let Ot of this.state.facet(Le)) try {
            Ot(et)
          } catch (lt) {
            Be(this.state, lt, "update listener")
          }(jt || Xt) && Promise.resolve().then((() => {
            jt && this.state == jt.startState && this.dispatch(jt), Xt && !DO(this, Xt) && Ht.force && De(this.contentDOM, Ht.key, Ht.keyCode)
          }))
      }
      setState(tt) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = tt);
        this.updateState = 2;
        let et = this.hasFocus;
        try {
          for (let tt of this.plugins) tt.destroy(this);
          this.viewState = new qq(this, tt), this.plugins = tt.facet(Te).map((tt => new se(tt))), this.pluginMap.clear();
          for (let tt of this.plugins) tt.update(this);
          this.docView.destroy(), this.docView = new kV(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        et && this.focus(), this.requestMeasure()
      }
      updatePlugins(tt) {
        let et = tt.startState.facet(Te),
          Vt = tt.state.facet(Te);
        if (et != Vt) {
          let Ot = [];
          for (let qt of Vt) {
            let Vt = et.indexOf(qt);
            if (Vt < 0) Ot.push(new se(qt));
            else {
              let et = this.plugins[Vt];
              et.mustUpdate = tt, Ot.push(et)
            }
          }
          for (let et of this.plugins) et.mustUpdate != tt && et.destroy(this);
          this.plugins = Ot, this.pluginMap.clear()
        } else
          for (let Ot of this.plugins) Ot.mustUpdate = tt;
        for (let Ot = 0; Ot < this.plugins.length; Ot++) this.plugins[Ot].update(this);
        et != Vt && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let et of this.plugins) {
          let Vt = et.value;
          if (Vt && Vt.docViewUpdate) try {
            Vt.docViewUpdate(this)
          } catch (tt) {
            Be(this.state, tt, "doc view update listener")
          }
        }
      }
      measure() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, tt && this.observer.forceFlush();
        let et = null,
          Vt = this.viewState.scrollParent,
          Ot = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: qt,
            scrollAnchorHeight: Dt
          } = this.viewState;
        Math.abs(Ot - this.viewState.scrollOffset) > 1 && (Dt = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let tt = 0;; tt++) {
            if (Dt < 0)
              if (me(Vt || this.win)) qt = -1, Dt = this.viewState.heightMap.height;
              else {
                let tt = this.viewState.scrollAnchorAt(Ot);
                qt = tt.from, Dt = tt.top
              } this.updateState = 1;
            let dt = this.viewState.measure();
            if (!dt && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (tt > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let jt = [];
            4 & dt || ([this.measureRequests, jt] = [jt, this.measureRequests]);
            let Ht = jt.map((tt => {
                try {
                  return tt.read(this)
                } catch (et) {
                  return Be(this.state, et), Sq
                }
              })),
              Xt = QV.create(this, this.state, []),
              Qt = !1;
            Xt.flags |= dt, et ? et.flags |= dt : et = Xt, this.updateState = 2, Xt.empty || (this.updatePlugins(Xt), this.inputState.update(Xt), this.updateAttrs(), Qt = this.docView.update(Xt), Qt && this.docViewUpdate());
            for (let tt = 0; tt < jt.length; tt++)
              if (Ht[tt] != Sq) try {
                let et = jt[tt];
                et.write && et.write(Ht[tt], this)
              } catch (mt) {
                Be(this.state, mt)
              }
            if (Qt && this.docView.updateSelection(!0), !Xt.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, Dt = -1;
                  continue
                } {
                  let tt = ((qt < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(qt).top) - Dt) / this.scaleY;
                  if ((tt > 1 || tt < -1) && (Vt == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Ot += tt, Vt ? Vt.scrollTop += tt : this.win.scrollBy(0, tt), Dt = -1;
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
        if (et && !et.empty)
          for (let dt of this.state.facet(Le)) dt(et)
      }
      get themeClasses() {
        return fq + " " + (this.state.facet(Eq) ? yq : wq) + " " + this.state.facet(lq)
      }
      updateAttrs() {
        let tt = Rq(this, ne, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          et = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(pe) ? "true" : "false",
            class: "cm-content",
            style: `${Kt.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (et["aria-readonly"] = "true"), Rq(this, tV, et);
        let Vt = this.observer.ignore((() => {
          let Vt = St(this.contentDOM, this.contentAttrs, et),
            Ot = St(this.dom, this.editorAttrs, tt);
          return Vt || Ot
        }));
        return this.editorAttrs = tt, this.contentAttrs = et, Vt
      }
      showAnnouncements(tt) {
        let et = !0;
        for (let Vt of tt)
          for (let tt of Vt.effects)
            if (tt.is(vq.announce)) {
              et && (this.announceDOM.textContent = ""), et = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = tt.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(HV);
        let tt = this.state.facet(vq.cspNonce);
        qt.c.mount(this.root, this.styleModules.concat(Mq).reverse(), tt ? {
          nonce: tt
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(tt) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), tt) {
          if (this.measureRequests.indexOf(tt) > -1) return;
          if (null != tt.key)
            for (let et = 0; et < this.measureRequests.length; et++)
              if (this.measureRequests[et].key === tt.key) return void(this.measureRequests[et] = tt);
          this.measureRequests.push(tt)
        }
      }
      plugin(tt) {
        let et = this.pluginMap.get(tt);
        return (void 0 === et || et && et.plugin != tt) && this.pluginMap.set(tt, et = this.plugins.find((et => et.plugin == tt)) || null), et && et.update(this).value
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
      elementAtHeight(tt) {
        return this.readMeasured(), this.viewState.elementAtHeight(tt)
      }
      lineBlockAtHeight(tt) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(tt)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(tt) {
        return this.viewState.lineBlockAt(tt)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(tt, et, Vt) {
        return pV(this, tt, iV(this, tt, et, Vt))
      }
      moveByGroup(tt, et) {
        return pV(this, tt, iV(this, tt, et, (et => function(tt, et, Vt) {
          let qt = tt.state.charCategorizer(et),
            Dt = qt(Vt);
          return tt => {
            let et = qt(tt);
            return Dt == Ot.k.Space && (Dt = et), Dt == et
          }
        }(this, tt.head, et))))
      }
      visualLineSide(tt, et) {
        let Vt = this.bidiSpans(tt),
          qt = this.textDirectionAt(tt.from),
          Dt = Vt[et ? Vt.length - 1 : 0];
        return Ot.n.cursor(Dt.side(et, qt) + tt.from, Dt.forward(!et, qt) ? 1 : -1)
      }
      moveToLineBoundary(tt, et) {
        return function(tt, et, Vt, qt) {
          let Dt = AV(tt, et.head, et.assoc || -1),
            mt = qt && Dt.type == It.Text && (tt.lineWrapping || Dt.widgetLineBreaks) ? tt.coordsAtPos(et.assoc < 0 && et.head > Dt.from ? et.head - 1 : et.head) : null;
          if (mt) {
            let et = tt.dom.getBoundingClientRect(),
              qt = tt.textDirectionAt(Dt.from),
              dt = tt.posAtCoords({
                x: Vt == (qt == Xe.LTR) ? et.right - 1 : et.left + 1,
                y: (mt.top + mt.bottom) / 2
              });
            if (null != dt) return Ot.n.cursor(dt, Vt ? -1 : 1)
          }
          return Ot.n.cursor(Vt ? Dt.to : Dt.from, Vt ? -1 : 1)
        }(this, tt, et, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(tt, et, Vt) {
        return pV(this, tt, function(tt, et, Vt, qt) {
          let Dt = et.head,
            mt = Vt ? 1 : -1;
          if (Dt == (Vt ? tt.state.doc.length : 0)) return Ot.n.cursor(Dt, et.assoc);
          let dt, jt = et.goalColumn,
            Ht = tt.contentDOM.getBoundingClientRect(),
            Xt = tt.coordsAtPos(Dt, et.assoc || ((et.empty ? Vt : et.head == et.from) ? 1 : -1)),
            Qt = tt.documentTop;
          if (Xt) null == jt && (jt = Xt.left - Ht.left), dt = mt < 0 ? Xt.top : Xt.bottom;
          else {
            let et = tt.viewState.lineBlockAt(Dt);
            null == jt && (jt = Math.min(Ht.right - Ht.left, tt.defaultCharacterWidth * (Dt - et.from))), dt = (mt < 0 ? et.top : et.bottom) + Qt
          }
          let lt = Ht.left + jt,
            Et = tt.viewState.heightOracle.textHeight >> 1,
            ft = null !== qt && void 0 !== qt ? qt : Et;
          for (let wt = 0;; wt += Et) {
            let et = dt + (ft + wt) * mt,
              qt = TV(tt, {
                x: lt,
                y: et
              }, !1, mt);
            if (Vt ? et > Ht.bottom : et < Ht.top) return Ot.n.cursor(qt.pos, qt.assoc);
            let Dt = tt.coordsAtPos(qt.pos, qt.assoc),
              Xt = Dt ? (Dt.top + Dt.bottom) / 2 : 0;
            if (!Dt || (Vt ? Xt > dt : Xt < dt)) return Ot.n.cursor(qt.pos, qt.assoc, void 0, jt)
          }
        }(this, tt, et, Vt))
      }
      domAtPos(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(tt, et)
      }
      posAtDOM(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(tt, et)
      }
      posAtCoords(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let Vt = TV(this, tt, et);
        return Vt && Vt.pos
      }
      posAndSideAtCoords(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), TV(this, tt, et)
      }
      coordsAtPos(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let Vt = this.docView.coordsAt(tt, et);
        if (!Vt || Vt.left == Vt.right) return Vt;
        let Ot = this.state.doc.lineAt(tt),
          qt = this.bidiSpans(Ot);
        return Tt(Vt, qt[be.find(qt, tt - Ot.from, -1, et)].dir == Xe.LTR == et > 0)
      }
      coordsForChar(tt) {
        return this.readMeasured(), this.docView.coordsForChar(tt)
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
      textDirectionAt(tt) {
        return !this.state.facet(oe) || tt < this.viewport.from || tt > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(tt))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(tt) {
        if (tt.length > Wq) return ve(tt.length);
        let et, Vt = this.textDirectionAt(tt.from);
        for (let qt of this.bidiCache)
          if (qt.from == tt.from && qt.dir == Vt && (qt.fresh || Je(qt.isolates, et = mV(this, tt)))) return qt.order;
        et || (et = mV(this, tt));
        let Ot = he(tt.text, Vt, et);
        return this.bidiCache.push(new cq(tt.from, tt.to, Vt, et, !0, Ot)), Ot
      }
      get hasFocus() {
        var tt;
        return (this.dom.ownerDocument.hasFocus() || Kt.safari && (null === (tt = this.inputState) || void 0 === tt ? void 0 : tt.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          Oe(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(tt) {
        this._root != tt && (this._root = tt, this.observer.setWindow((9 == tt.nodeType ? tt : tt.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let tt of this.plugins) tt.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var Vt, qt, Dt, mt;
        return ie.of(new Ae("number" == typeof tt ? Ot.n.cursor(tt) : tt, null !== (Vt = et.y) && void 0 !== Vt ? Vt : "nearest", null !== (qt = et.x) && void 0 !== qt ? qt : "nearest", null !== (Dt = et.yMargin) && void 0 !== Dt ? Dt : 5, null !== (mt = et.xMargin) && void 0 !== mt ? mt : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: tt,
          scrollLeft: et
        } = this.scrollDOM, Vt = this.viewState.scrollAnchorAt(tt);
        return ie.of(new Ae(Ot.n.cursor(Vt.from), "start", "start", Vt.top - tt, et, !0))
      }
      setTabFocusMode(tt) {
        null == tt ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof tt ? this.inputState.tabFocusMode = tt ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + tt)
      }
      static domEventHandlers(tt) {
        return ge.define((() => ({})), {
          eventHandlers: tt
        })
      }
      static domEventObservers(tt) {
        return ge.define((() => ({})), {
          eventObservers: tt
        })
      }
      static theme(tt, et) {
        let Vt = qt.c.newName(),
          Ot = [lq.of(Vt), HV.of(aq(`.${Vt}`, tt))];
        return et && et.dark && Ot.push(Eq.of(!0)), Ot
      }
      static baseTheme(tt) {
        return Ot.u.lowest(HV.of(aq("." + fq, tt, Nq)))
      }
      static findFromDOM(tt) {
        var et;
        let Vt = tt.querySelector(".cm-content"),
          Ot = Vt && EV.get(Vt) || EV.get(tt);
        return (null === (et = null === Ot || void 0 === Ot ? void 0 : Ot.root) || void 0 === et ? void 0 : et.view) || null
      }
    }
    vq.styleModule = HV, vq.inputHandler = Fe, vq.clipboardInputFilter = Ge, vq.clipboardOutputFilter = ze, vq.scrollHandler = Ue, vq.focusChangeEffect = ke, vq.perLineTextDirection = oe, vq.exceptionSink = Ze, vq.updateListener = Le, vq.editable = pe, vq.mouseSelectionStyle = Pe, vq.dragMovesSelection = Ie, vq.clickAddsSelectionRange = Re, vq.NO = eV, vq.blockWrappers = VV, vq.outerDecorations = OV, vq.atomicRanges = qV, vq.bidiIsolatedRanges = DV, vq.cursorScrollMargin = Ot.s.define({
      combine: tt => {
        let et = 5,
          Vt = 5;
        for (let Ot of tt) "number" == typeof Ot ? et = Vt = Ot : ({
          x: et,
          y: Vt
        } = Ot);
        return {
          x: et,
          y: Vt
        }
      }
    }), vq.scrollMargins = dV, vq.darkTheme = Eq, vq.cspNonce = Ot.s.define({
      combine: tt => tt.length ? tt[0] : ""
    }), vq.contentAttributes = tV, vq.editorAttributes = ne, vq.lineWrapping = vq.contentAttributes.of({
      class: "cm-lineWrapping"
    }), vq.announce = Ot.I.define();
    const Wq = 4096,
      Sq = {};
    class cq {
      constructor(tt, et, Vt, Ot, qt, Dt) {
        this.from = tt, this.to = et, this.dir = Vt, this.isolates = Ot, this.fresh = qt, this.order = Dt
      }
      static update(tt, et) {
        if (et.empty && !tt.some((tt => tt.fresh))) return tt;
        let Vt = [],
          Ot = tt.length ? tt[tt.length - 1].dir : Xe.LTR;
        for (let qt = Math.max(0, tt.length - 10); qt < tt.length; qt++) {
          let Dt = tt[qt];
          Dt.dir != Ot || et.touchesRange(Dt.from, Dt.to) || Vt.push(new cq(et.mapPos(Dt.from, 1), et.mapPos(Dt.to, -1), Dt.dir, Dt.isolates, !1, Dt.order))
        }
        return Vt
      }
    }

    function Rq(tt, et, Vt) {
      for (let Ot = tt.state.facet(et), qt = Ot.length - 1; qt >= 0; qt--) {
        let et = Ot[qt],
          Dt = "function" == typeof et ? et(tt) : et;
        Dt && ht(Dt, Vt)
      }
      return Vt
    }
    const Iq = Kt.mac ? "mac" : Kt.windows ? "win" : Kt.linux ? "linux" : "key";

    function Pq(tt, et, Vt) {
      return et.altKey && (tt = "Alt-" + tt), et.ctrlKey && (tt = "Ctrl-" + tt), et.metaKey && (tt = "Meta-" + tt), !1 !== Vt && et.shiftKey && (tt = "Shift-" + tt), tt
    }
    const Zq = Ot.u.default(vq.domEventHandlers({
        keydown: (tt, et) => Uq(kq(et.state), tt, et, "editor")
      })),
      Lq = Ot.s.define({
        enables: Zq
      }),
      Fq = new WeakMap;

    function kq(tt) {
      let et = tt.facet(Lq),
        Vt = Fq.get(et);
      return Vt || Fq.set(et, Vt = function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Iq,
          Vt = Object.create(null),
          Ot = Object.create(null),
          qt = (tt, et) => {
            let Vt = Ot[tt];
            if (null == Vt) Ot[tt] = et;
            else if (Vt != et) throw new Error("Key binding " + tt + " is used both as a regular binding and as a multi-stroke prefix")
          },
          Dt = (tt, Ot, Dt, mt, dt) => {
            var jt, Ht;
            let Xt = Vt[tt] || (Vt[tt] = Object.create(null)),
              Qt = Ot.split(/ (?!$)/).map((tt => function(tt, et) {
                const Vt = tt.split(/-(?!$)/);
                let Ot, qt, Dt, mt, dt = Vt[Vt.length - 1];
                "Space" == dt && (dt = " ");
                for (let jt = 0; jt < Vt.length - 1; ++jt) {
                  const tt = Vt[jt];
                  if (/^(cmd|meta|m)$/i.test(tt)) mt = !0;
                  else if (/^a(lt)?$/i.test(tt)) Ot = !0;
                  else if (/^(c|ctrl|control)$/i.test(tt)) qt = !0;
                  else if (/^s(hift)?$/i.test(tt)) Dt = !0;
                  else {
                    if (!/^mod$/i.test(tt)) throw new Error("Unrecognized modifier name: " + tt);
                    "mac" == et ? mt = !0 : qt = !0
                  }
                }
                return Ot && (dt = "Alt-" + dt), qt && (dt = "Ctrl-" + dt), mt && (dt = "Meta-" + dt), Dt && (dt = "Shift-" + dt), dt
              }(tt, et)));
            for (let et = 1; et < Qt.length; et++) {
              let Vt = Qt.slice(0, et).join(" ");
              qt(Vt, !0), Xt[Vt] || (Xt[Vt] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [et => {
                  let Ot = zq = {
                    view: et,
                    prefix: Vt,
                    scope: tt
                  };
                  return setTimeout((() => {
                    zq == Ot && (zq = null)
                  }), oq), !0
                }]
              })
            }
            let lt = Qt.join(" ");
            qt(lt, !1);
            let Et = Xt[lt] || (Xt[lt] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (Ht = null === (jt = Xt._any) || void 0 === jt ? void 0 : jt.run) || void 0 === Ht ? void 0 : Ht.slice()) || []
            });
            Dt && Et.run.push(Dt), mt && (Et.preventDefault = !0), dt && (Et.stopPropagation = !0)
          };
        for (let mt of tt) {
          let tt = mt.scope ? mt.scope.split(" ") : ["editor"];
          if (mt.any)
            for (let et of tt) {
              let tt = Vt[et] || (Vt[et] = Object.create(null));
              tt._any || (tt._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Ot
              } = mt;
              for (let et in tt) tt[et].run.push((tt => Ot(tt, rq)))
            }
          let Ot = mt[et] || mt.key;
          if (Ot)
            for (let et of tt) Dt(et, Ot, mt.run, mt.preventDefault, mt.stopPropagation), mt.shift && Dt(et, "Shift-" + Ot, mt.shift, mt.preventDefault, mt.stopPropagation)
        }
        return Vt
      }(et.reduce(((tt, et) => tt.concat(et)), []))), Vt
    }

    function Gq(tt, et, Vt) {
      return Uq(kq(tt.state), et, tt, Vt)
    }
    let zq = null;
    const oq = 4e3;
    let rq = null;

    function Uq(tt, et, Vt, qt) {
      rq = et;
      let Ht = function(tt) {
          var et = !(dt && tt.metaKey && tt.shiftKey && !tt.ctrlKey && !tt.altKey || jt && tt.shiftKey && tt.key && 1 == tt.key.length || "Unidentified" == tt.key) && tt.key || (tt.shiftKey ? mt : Dt)[tt.keyCode] || tt.key || "Unidentified";
          return "Esc" == et && (et = "Escape"), "Del" == et && (et = "Delete"), "Left" == et && (et = "ArrowLeft"), "Up" == et && (et = "ArrowUp"), "Right" == et && (et = "ArrowRight"), "Down" == et && (et = "ArrowDown"), et
        }(et),
        Xt = (0, Ot.S)(Ht, 0),
        Qt = (0, Ot.W)(Xt) == Ht.length && " " != Ht,
        lt = "",
        Et = !1,
        ft = !1,
        wt = !1;
      zq && zq.view == Vt && zq.scope == qt && (lt = zq.prefix + " ", fO.indexOf(et.keyCode) < 0 && (ft = !0, zq = null));
      let yt, Nt, Mt = new Set,
        bt = tt => {
          if (tt) {
            for (let et of tt.run)
              if (!Mt.has(et) && (Mt.add(et), et(Vt))) return tt.stopPropagation && (wt = !0), !0;
            tt.preventDefault && (tt.stopPropagation && (wt = !0), ft = !0)
          }
          return !1
        },
        Jt = tt[qt];
      return Jt && (bt(Jt[lt + Pq(Ht, et, !Qt)]) ? Et = !0 : !Qt || !(et.altKey || et.metaKey || et.ctrlKey) || Kt.windows && et.ctrlKey && et.altKey || Kt.mac && et.altKey && !et.ctrlKey && !et.metaKey || !(yt = Dt[et.keyCode]) || yt == Ht ? Qt && et.shiftKey && bt(Jt[lt + Pq(Ht, et, !0)]) && (Et = !0) : (bt(Jt[lt + Pq(yt, et, !0)]) || et.shiftKey && (Nt = mt[et.keyCode]) != Ht && Nt != yt && bt(Jt[lt + Pq(Nt, et, !1)])) && (Et = !0), !Et && bt(Jt._any) && (Et = !0)), ft && (Et = !0), Et && wt && et.stopPropagation(), rq = null, Et
    }
    class Aq {
      constructor(tt, et, Vt, Ot, qt) {
        this.className = tt, this.left = et, this.top = Vt, this.width = Ot, this.height = qt
      }
      draw() {
        let tt = document.createElement("div");
        return tt.className = this.className, this.adjust(tt), tt
      }
      update(tt, et) {
        return et.className == this.className && (this.adjust(tt), !0)
      }
      adjust(tt) {
        tt.style.left = this.left + "px", tt.style.top = this.top + "px", null != this.width && (tt.style.width = this.width + "px"), tt.style.height = this.height + "px"
      }
      eq(tt) {
        return this.left == tt.left && this.top == tt.top && this.width == tt.width && this.height == tt.height && this.className == tt.className
      }
      static forRange(tt, et, Vt) {
        if (Vt.empty) {
          let Ot = tt.coordsAtPos(Vt.head, Vt.assoc || 1);
          if (!Ot) return [];
          let qt = iq(tt);
          return [new Aq(et, Ot.left - qt.left, Ot.top - qt.top, null, Ot.bottom - Ot.top)]
        }
        return function(tt, et, Vt) {
          if (Vt.to <= tt.viewport.from || Vt.from >= tt.viewport.to) return [];
          let Ot = Math.max(Vt.from, tt.viewport.from),
            qt = Math.min(Vt.to, tt.viewport.to),
            Dt = tt.textDirection == Xe.LTR,
            mt = tt.contentDOM,
            dt = mt.getBoundingClientRect(),
            jt = iq(tt),
            Ht = mt.querySelector(".cm-line"),
            Xt = Ht && window.getComputedStyle(Ht),
            Qt = dt.left + (Xt ? parseInt(Xt.paddingLeft) + Math.min(0, parseInt(Xt.textIndent)) : 0),
            lt = dt.right - (Xt ? parseInt(Xt.paddingRight) : 0),
            Et = AV(tt, Ot, 1),
            ft = AV(tt, qt, -1),
            wt = Et.type == It.Text ? Et : null,
            yt = ft.type == It.Text ? ft : null;
          wt && (tt.lineWrapping || Et.widgetLineBreaks) && (wt = Yq(tt, Ot, 1, wt));
          yt && (tt.lineWrapping || ft.widgetLineBreaks) && (yt = Yq(tt, qt, -1, yt));
          if (wt && yt && wt.from == yt.from && wt.to == yt.to) return Mt(bt(Vt.from, Vt.to, wt));
          {
            let et = wt ? bt(Vt.from, null, wt) : Jt(Et, !1),
              Ot = yt ? bt(null, Vt.to, yt) : Jt(ft, !0),
              qt = [];
            return (wt || Et).to < (yt || ft).from - (wt && yt ? 1 : 0) || Et.widgetLineBreaks > 1 && et.bottom + tt.defaultLineHeight / 2 < Ot.top ? qt.push(Nt(Qt, et.bottom, lt, Ot.top)) : et.bottom < Ot.top && tt.elementAtHeight((et.bottom + Ot.top) / 2).type == It.Text && (et.bottom = Ot.top = (et.bottom + Ot.top) / 2), Mt(et).concat(qt).concat(Mt(Ot))
          }

          function Nt(tt, Vt, Ot, qt) {
            return new Aq(et, tt - jt.left, Vt - jt.top, Math.max(0, Ot - tt), qt - Vt)
          }

          function Mt(tt) {
            let {
              top: et,
              bottom: Vt,
              horizontal: Ot
            } = tt, qt = [];
            for (let Dt = 0; Dt < Ot.length; Dt += 2) qt.push(Nt(Ot[Dt], et, Ot[Dt + 1], Vt));
            return qt
          }

          function bt(et, Vt, Ot) {
            let qt = 1e9,
              mt = -1e9,
              dt = [];

            function jt(et, Vt, jt, Ht, Xt) {
              let Et = tt.coordsAtPos(et, et == Ot.to ? -2 : 2),
                ft = tt.coordsAtPos(jt, jt == Ot.from ? 2 : -2);
              Et && ft && (qt = Math.min(Et.top, ft.top, qt), mt = Math.max(Et.bottom, ft.bottom, mt), Xt == Xe.LTR ? dt.push(Dt && Vt ? Qt : Et.left, Dt && Ht ? lt : ft.right) : dt.push(!Dt && Ht ? Qt : ft.left, !Dt && Vt ? lt : Et.right))
            }
            let Ht = null !== et && void 0 !== et ? et : Ot.from,
              Xt = null !== Vt && void 0 !== Vt ? Vt : Ot.to;
            for (let Dt of tt.Z4)
              if (Dt.to > Ht && Dt.from < Xt)
                for (let Ot = Math.max(Dt.from, Ht), qt = Math.min(Dt.to, Xt);;) {
                  let Dt = tt.state.doc.lineAt(Ot);
                  for (let mt of tt.bidiSpans(Dt)) {
                    let tt = mt.from + Dt.from,
                      dt = mt.to + Dt.from;
                    if (tt >= qt) break;
                    dt > Ot && jt(Math.max(tt, Ot), null == et && tt <= Ht, Math.min(dt, qt), null == Vt && dt >= Xt, mt.dir)
                  }
                  if (Ot = Dt.to + 1, Ot >= qt) break
                }
            return 0 == dt.length && jt(Ht, null == et, Xt, null == Vt, tt.textDirection), {
              top: qt,
              bottom: mt,
              horizontal: dt
            }
          }

          function Jt(tt, et) {
            let Vt = dt.top + (et ? tt.top : tt.bottom);
            return {
              top: Vt,
              bottom: Vt,
              horizontal: []
            }
          }
        }(tt, et, Vt)
      }
    }

    function iq(tt) {
      let et = tt.scrollDOM.getBoundingClientRect();
      return {
        left: (tt.textDirection == Xe.LTR ? et.left : et.right - tt.scrollDOM.clientWidth * tt.scaleX) - tt.scrollDOM.scrollLeft * tt.scaleX,
        top: et.top - tt.scrollDOM.scrollTop * tt.scaleY
      }
    }

    function Yq(tt, et, Vt, Ot) {
      let qt = tt.coordsAtPos(et, 2 * Vt);
      if (!qt) return Ot;
      let Dt = tt.dom.getBoundingClientRect(),
        mt = (qt.top + qt.bottom) / 2,
        dt = tt.posAtCoords({
          x: Dt.left + 1,
          y: mt
        }),
        jt = tt.posAtCoords({
          x: Dt.right - 1,
          y: mt
        });
      return null == dt || null == jt ? Ot : {
        from: Math.max(Ot.from, Math.min(dt, jt)),
        to: Math.min(Ot.to, Math.max(dt, jt))
      }
    }
    class Bq {
      constructor(tt, et) {
        this.view = tt, this.layer = et, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = tt.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), et.above && this.dom.classList.add("cm-layer-above"), et.class && this.dom.classList.add(et.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(tt.state), tt.requestMeasure(this.measureReq), et.mount && et.mount(this.dom, tt)
      }
      update(tt) {
        tt.startState.facet(pq) != tt.state.facet(pq) && this.setOrder(tt.state), (this.layer.update(tt, this.dom) || tt.geometryChanged) && (this.scale(), tt.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(tt) {
        !1 !== this.layer.updateOnDocViewUpdate && tt.requestMeasure(this.measureReq)
      }
      setOrder(tt) {
        let et = 0,
          Vt = tt.facet(pq);
        for (; et < Vt.length && Vt[et] != this.layer;) et++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - et)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: tt,
          scaleY: et
        } = this.view;
        tt == this.scaleX && et == this.scaleY || (this.scaleX = tt, this.scaleY = et, this.dom.style.transform = `scale(${1/tt}, ${1/et})`)
      }
      draw(tt) {
        if (tt.length != this.drawn.length || tt.some(((tt, et) => {
            return Vt = tt, Ot = this.drawn[et], !(Vt.constructor == Ot.constructor && Vt.eq(Ot));
            var Vt, Ot
          }))) {
          let et = this.dom.firstChild,
            Vt = 0;
          for (let Ot of tt) Ot.update && et && Ot.constructor && this.drawn[Vt].constructor && Ot.update(et, this.drawn[Vt]) ? (et = et.nextSibling, Vt++) : this.dom.insertBefore(Ot.draw(), et);
          for (; et;) {
            let tt = et.nextSibling;
            et.remove(), et = tt
          }
          this.drawn = tt, Kt.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const pq = Ot.s.define();

    function xq(tt) {
      return [ge.define((et => new Bq(et, tt))), pq.of(tt)]
    }
    const Tq = Ot.s.define({
      combine: tt => (0, Ot.Y)(tt, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (tt, et) => Math.min(tt, et),
        drawRangeCursor: (tt, et) => tt || et
      })
    });

    function gq() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Tq.of(tt), nq, eD, VD, re.of(!0)]
    }

    function sq(tt) {
      return tt.startState.facet(Tq) != tt.state.facet(Tq)
    }
    const nq = xq({
      above: !0,
      markers(tt) {
        let {
          state: et
        } = tt, Vt = et.facet(Tq), qt = [];
        for (let Dt of et.selection.nw) {
          let mt = Dt == et.selection.main;
          if (Dt.empty || Vt.drawRangeCursor && !(mt && Kt.ios && Vt.iosSelectionHandles)) {
            let et = mt ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              Vt = Dt.empty ? Dt : Ot.n.cursor(Dt.head, Dt.assoc);
            for (let Ot of Aq.forRange(tt, et, Vt)) qt.push(Ot)
          }
        }
        return qt
      },
      update(tt, et) {
        tt.transactions.some((tt => tt.selection)) && (et.style.animationName = "cm-blink" == et.style.animationName ? "cm-blink2" : "cm-blink");
        let Vt = sq(tt);
        return Vt && tD(tt.state, et), tt.docChanged || tt.selectionSet || Vt
      },
      mount(tt, et) {
        tD(et.state, tt)
      },
      class: "cm-cursorLayer"
    });

    function tD(tt, et) {
      et.style.animationDuration = tt.facet(Tq).cursorBlinkRate + "ms"
    }
    const eD = xq({
        above: !1,
        markers(tt) {
          let et = [],
            {
              main: Vt,
              nw: qt
            } = tt.state.selection;
          for (let Ot of qt)
            if (!Ot.empty)
              for (let Vt of Aq.forRange(tt, "cm-selectionBackground", Ot)) et.push(Vt);
          if (Kt.ios && !Vt.empty && tt.state.facet(Tq).iosSelectionHandles) {
            for (let qt of Aq.forRange(tt, "cm-selectionHandle cm-selectionHandle-start", Ot.n.cursor(Vt.from, 1))) et.push(qt);
            for (let qt of Aq.forRange(tt, "cm-selectionHandle cm-selectionHandle-end", Ot.n.cursor(Vt.to, 1))) et.push(qt)
          }
          return et
        },
        update: (tt, et) => tt.docChanged || tt.selectionSet || tt.viewportChanged || sq(tt),
        class: "cm-selectionLayer"
      }),
      VD = Ot.u.highest(vq.theme({
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
      OD = Ot.I.define({
        map: (tt, et) => null == tt ? null : et.mapPos(tt)
      }),
      qD = Ot.J.define({
        create: () => null,
        update: (tt, et) => (null != tt && (tt = et.changes.mapPos(tt)), et.effects.reduce(((tt, et) => et.is(OD) ? et.value : tt), tt))
      }),
      DD = ge.fromClass(class {
        constructor(tt) {
          this.view = tt, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(tt) {
          var et;
          let Vt = tt.state.field(qD);
          null == Vt ? null != this.cursor && (null === (et = this.cursor) || void 0 === et || et.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (tt.startState.field(qD) != Vt || tt.docChanged || tt.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: tt
          } = this, et = tt.state.field(qD), Vt = null != et && tt.coordsAtPos(et);
          if (!Vt) return null;
          let Ot = tt.scrollDOM.getBoundingClientRect();
          return {
            left: Vt.left - Ot.left + tt.scrollDOM.scrollLeft * tt.scaleX,
            top: Vt.top - Ot.top + tt.scrollDOM.scrollTop * tt.scaleY,
            height: Vt.bottom - Vt.top
          }
        }
        drawCursor(tt) {
          if (this.cursor) {
            let {
              scaleX: et,
              scaleY: Vt
            } = this.view;
            tt ? (this.cursor.style.left = tt.left / et + "px", this.cursor.style.top = tt.top / Vt + "px", this.cursor.style.height = tt.height / Vt + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(tt) {
          this.view.state.field(qD) != tt && this.view.dispatch({
            effects: OD.of(tt)
          })
        }
      }, {
        eventObservers: {
          dragover(tt) {
            this.setDropPos(this.view.posAtCoords({
              x: tt.clientX,
              y: tt.clientY
            }))
          },
          dragleave(tt) {
            tt.target != this.view.contentDOM && this.view.contentDOM.contains(tt.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function mD() {
      return [qD, DD]
    }

    function dD(tt, et, Vt, Ot, qt) {
      et.lastIndex = 0;
      for (let Dt, mt = tt.iterRange(Vt, Ot), dt = Vt; !mt.next().done; dt += mt.value.length)
        if (!mt.lineBreak)
          for (; Dt = et.exec(mt.value);) qt(dt + Dt.index, Dt)
    }
    class jD {
      constructor(tt) {
        const {
          regexp: et,
          decoration: Vt,
          decorate: Ot,
          boundary: qt,
          maxLength: Dt = 1e3
        } = tt;
        if (!et.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = et, Ot) this.addMatch = (tt, et, Vt, qt) => Ot(qt, Vt, Vt + tt[0].length, tt, et);
        else if ("function" == typeof Vt) this.addMatch = (tt, et, Ot, qt) => {
          let Dt = Vt(tt, et, Ot);
          Dt && qt(Ot, Ot + tt[0].length, Dt)
        };
        else {
          if (!Vt) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (tt, et, Ot, qt) => qt(Ot, Ot + tt[0].length, Vt)
        }
        this.boundary = qt, this.maxLength = Dt
      }
      createDeco(tt) {
        let et = new Ot.x,
          Vt = et.add.bind(et);
        for (let {
            from: Ot,
            to: qt
          }
          of
          function(tt, et) {
            let Vt = tt.Z4;
            if (1 == Vt.length && Vt[0].from == tt.viewport.from && Vt[0].to == tt.viewport.to) return Vt;
            let Ot = [];
            for (let {
                from: qt,
                to: Dt
              }
              of Vt) qt = Math.max(tt.state.doc.lineAt(qt).from, qt - et), Dt = Math.min(tt.state.doc.lineAt(Dt).to, Dt + et), Ot.length && Ot[Ot.length - 1].to >= qt ? Ot[Ot.length - 1].to = Dt : Ot.push({
              from: qt,
              to: Dt
            });
            return Ot
          }(tt, this.maxLength)) dD(tt.state.doc, this.regexp, Ot, qt, ((et, Ot) => this.addMatch(Ot, tt, et, Vt)));
        return et.finish()
      }
      updateDeco(tt, et) {
        let Vt = 1e9,
          Ot = -1;
        return tt.docChanged && tt.changes.iterChanges(((et, qt, Dt, mt) => {
          mt >= tt.view.viewport.from && Dt <= tt.view.viewport.to && (Vt = Math.min(Dt, Vt), Ot = Math.max(mt, Ot))
        })), tt.viewportMoved || Ot - Vt > 1e3 ? this.createDeco(tt.view) : Ot > -1 ? this.updateRange(tt.view, et.map(tt.changes), Vt, Ot) : et
      }
      updateRange(tt, et, Vt, Ot) {
        for (let qt of tt.Z4) {
          let Dt = Math.max(qt.from, Vt),
            mt = Math.min(qt.to, Ot);
          if (mt >= Dt) {
            let Vt = tt.state.doc.lineAt(Dt),
              Ot = Vt.to < mt ? tt.state.doc.lineAt(mt) : Vt,
              dt = Math.max(qt.from, Vt.from),
              jt = Math.min(qt.to, Ot.to);
            if (this.boundary) {
              for (; Dt > Vt.from; Dt--)
                if (this.boundary.test(Vt.text[Dt - 1 - Vt.from])) {
                  dt = Dt;
                  break
                } for (; mt < Ot.to; mt++)
                if (this.boundary.test(Ot.text[mt - Ot.from])) {
                  jt = mt;
                  break
                }
            }
            let Ht, Xt = [],
              Qt = (tt, et, Vt) => Xt.push(Vt.range(tt, et));
            if (Vt == Ot)
              for (this.regexp.lastIndex = dt - Vt.from;
                (Ht = this.regexp.exec(Vt.text)) && Ht.index < jt - Vt.from;) this.addMatch(Ht, tt, Ht.index + Vt.from, Qt);
            else dD(tt.state.doc, this.regexp, dt, jt, ((et, Vt) => this.addMatch(Vt, tt, et, Qt)));
            et = et.update({
              filterFrom: dt,
              filterTo: jt,
              filter: (tt, et) => tt < dt || et > jt,
              add: Xt
            })
          }
        }
        return et
      }
    }
    const HD = null != /x/.unicode ? "gu" : "g",
      XD = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", HD),
      QD = {
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
    let lD = null;
    const ED = Ot.s.define({
      combine(tt) {
        let et = (0, Ot.Y)(tt, {
          render: null,
          specialChars: XD,
          addSpecialChars: null
        });
        return (et.replaceTabs = ! function() {
          var tt;
          if (null == lD && "undefined" != typeof document && document.body) {
            let et = document.body.style;
            lD = null != (null !== (tt = et.tabSize) && void 0 !== tt ? tt : et.MozTabSize)
          }
          return lD || !1
        }()) && (et.specialChars = new RegExp("\t|" + et.specialChars.source, HD)), et.addSpecialChars && (et.specialChars = new RegExp(et.specialChars.source + "|" + et.addSpecialChars.source, HD)), et
      }
    });

    function fD() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ED.of(tt), wD || (wD = ge.fromClass(class {
        constructor(tt) {
          this.view = tt, this.NO = Pt.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(tt.state.facet(ED)), this.NO = this.decorator.createDeco(tt)
        }
        makeDecorator(tt) {
          return new jD({
            regexp: tt.specialChars,
            decoration: (et, Vt, qt) => {
              let {
                doc: Dt
              } = Vt.state, mt = (0, Ot.S)(et[0], 0);
              if (9 == mt) {
                let tt = Dt.lineAt(qt),
                  et = Vt.state.tabSize,
                  mt = (0, Ot.Z)(tt.text, et, qt - tt.from);
                return Pt.replace({
                  widget: new ND((et - mt % et) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[mt] || (this.decorationCache[mt] = Pt.replace({
                widget: new yD(tt, mt)
              }))
            },
            boundary: tt.replaceTabs ? void 0 : /[^]/
          })
        }
        update(tt) {
          let et = tt.state.facet(ED);
          tt.startState.facet(ED) != et ? (this.decorator = this.makeDecorator(et), this.NO = this.decorator.createDeco(tt.view)) : this.NO = this.decorator.updateDeco(tt, this.NO)
        }
      }, {
        NO: tt => tt.NO
      }))]
    }
    let wD = null;
    class yD extends Rt {
      constructor(tt, et) {
        super(), this.options = tt, this.code = et
      }
      eq(tt) {
        return tt.code == this.code
      }
      toDOM(tt) {
        let et = function(tt) {
            return tt >= 32 ? "\u2022" : 10 == tt ? "\u2424" : String.fromCharCode(9216 + tt)
          }(this.code),
          Vt = tt.state.phrase("Control character") + " " + (QD[this.code] || "0x" + this.code.toString(16)),
          Ot = this.options.render && this.options.render(this.code, Vt, et);
        if (Ot) return Ot;
        let qt = document.createElement("span");
        return qt.textContent = et, qt.title = Vt, qt.setAttribute("aria-label", Vt), qt.className = "cm-specialChar", qt
      }
      ignoreEvent() {
        return !1
      }
    }
    class ND extends Rt {
      constructor(tt) {
        super(), this.width = tt
      }
      eq(tt) {
        return tt.width == this.width
      }
      toDOM() {
        let tt = document.createElement("span");
        return tt.textContent = "\t", tt.className = "cm-tab", tt.style.width = this.width + "px", tt
      }
      ignoreEvent() {
        return !1
      }
    }

    function aD() {
      return bD
    }
    const MD = Pt.line({
        class: "cm-activeLine"
      }),
      bD = ge.fromClass(class {
        constructor(tt) {
          this.NO = this.getDeco(tt)
        }
        update(tt) {
          (tt.docChanged || tt.selectionSet) && (this.NO = this.getDeco(tt.view))
        }
        getDeco(tt) {
          let et = -1,
            Vt = [];
          for (let Ot of tt.state.selection.nw) {
            let qt = tt.lineBlockAt(Ot.head);
            qt.from > et && (Vt.push(MD.range(qt.from)), et = qt.from)
          }
          return Pt.set(Vt)
        }
      }, {
        NO: tt => tt.NO
      });
    class JD extends Rt {
      constructor(tt) {
        super(), this.content = tt
      }
      toDOM(tt) {
        let et = document.createElement("span");
        return et.className = "cm-placeholder", et.style.pointerEvents = "none", et.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(tt) : this.content.cloneNode(!0)), et.setAttribute("aria-hidden", "true"), et
      }
      coordsAt(tt) {
        let et = tt.firstChild ? At(tt.firstChild) : [];
        if (!et.length) return null;
        let Vt = window.getComputedStyle(tt.parentNode),
          Ot = Tt(et[0], "rtl" != Vt.direction),
          qt = parseInt(Vt.lineHeight);
        return Ot.bottom - Ot.top > 1.5 * qt ? {
          left: Ot.left,
          right: Ot.right,
          top: Ot.top,
          bottom: Ot.top + qt
        } : Ot
      }
      ignoreEvent() {
        return !1
      }
    }

    function CD(tt) {
      let et = ge.fromClass(class {
        constructor(et) {
          this.view = et, this.placeholder = tt ? Pt.set([Pt.widget({
            widget: new JD(tt),
            side: 1
          }).range(0)]) : Pt.none
        }
        get NO() {
          return this.view.state.doc.length ? Pt.none : this.placeholder
        }
      }, {
        NO: tt => tt.NO
      });
      return "string" == typeof tt ? [et, vq.contentAttributes.of({
        "aria-placeholder": tt
      })] : et
    }
    const uD = 2e3;

    function KD(tt, et) {
      let Vt = tt.posAtCoords({
          x: et.clientX,
          y: et.clientY
        }, !1),
        qt = tt.state.doc.lineAt(Vt),
        Dt = Vt - qt.from,
        mt = Dt > uD ? -1 : Dt == qt.length ? function(tt, et) {
          let Vt = tt.coordsAtPos(tt.viewport.from);
          return Vt ? Math.round(Math.abs((Vt.left - et) / tt.defaultCharacterWidth)) : -1
        }(tt, et.clientX) : (0, Ot.Z)(qt.text, tt.state.tabSize, Vt - qt.from);
      return {
        line: qt.number,
        col: mt,
        off: Dt
      }
    }

    function hD(tt, et) {
      let Vt = KD(tt, et),
        qt = tt.state.selection;
      return Vt ? {
        update(tt) {
          if (tt.docChanged) {
            let et = tt.changes.mapPos(tt.startState.doc.line(Vt.line).from),
              Ot = tt.state.doc.lineAt(et);
            Vt = {
              line: Ot.number,
              col: Vt.col,
              off: Math.min(Vt.off, Ot.length)
            }, qt = qt.map(tt.changes)
          }
        },
        get(et, Dt, mt) {
          let dt = KD(tt, et);
          if (!dt) return qt;
          let jt = function(tt, et, Vt) {
            let qt = Math.min(et.line, Vt.line),
              Dt = Math.max(et.line, Vt.line),
              mt = [];
            if (et.off > uD || Vt.off > uD || et.col < 0 || Vt.col < 0) {
              let dt = Math.min(et.off, Vt.off),
                jt = Math.max(et.off, Vt.off);
              for (let et = qt; et <= Dt; et++) {
                let Vt = tt.doc.line(et);
                Vt.length <= jt && mt.push(Ot.n.range(Vt.from + dt, Vt.to + jt))
              }
            } else {
              let dt = Math.min(et.col, Vt.col),
                jt = Math.max(et.col, Vt.col);
              for (let et = qt; et <= Dt; et++) {
                let Vt = tt.doc.line(et),
                  qt = (0, Ot.db)(Vt.text, dt, tt.tabSize, !0);
                if (qt < 0) mt.push(Ot.n.cursor(Vt.to));
                else {
                  let et = (0, Ot.db)(Vt.text, jt, tt.tabSize);
                  mt.push(Ot.n.range(Vt.from + qt, Vt.from + et))
                }
              }
            }
            return mt
          }(tt.state, Vt, dt);
          return jt.length ? mt ? Ot.n.create(jt.concat(qt.nw)) : Ot.n.create(jt) : qt
        }
      } : null
    }

    function vD(tt) {
      let et = (null === tt || void 0 === tt ? void 0 : tt.eventFilter) || (tt => tt.altKey && 0 == tt.button);
      return vq.mouseSelectionStyle.of(((tt, Vt) => et(Vt) ? hD(tt, Vt) : null))
    }
    const WD = {
        Alt: [18, tt => !!tt.altKey],
        Control: [17, tt => !!tt.ctrlKey],
        Shift: [16, tt => !!tt.shiftKey],
        Meta: [91, tt => !!tt.metaKey]
      },
      SD = {
        style: "cursor: crosshair"
      };

    function cD() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [et, Vt] = WD[tt.key || "Alt"],
        Ot = ge.fromClass(class {
          constructor(tt) {
            this.view = tt, this.isDown = !1
          }
          set(tt) {
            this.isDown != tt && (this.isDown = tt, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(tt) {
              this.set(tt.keyCode == et || Vt(tt))
            },
            keyup(tt) {
              tt.keyCode != et && Vt(tt) || this.set(!1)
            },
            mousemove(tt) {
              this.set(Vt(tt))
            }
          }
        });
      return [Ot, vq.contentAttributes.of((tt => {
        var et;
        return (null === (et = tt.plugin(Ot)) || void 0 === et ? void 0 : et.isDown) ? SD : null
      }))]
    }
    const RD = "-10000px";
    class ID {
      constructor(tt, et, Vt, Ot) {
        this.facet = et, this.createTooltipView = Vt, this.removeTooltipView = Ot, this.input = tt.state.facet(et), this.tooltips = this.input.filter((tt => tt));
        let qt = null;
        this.tooltipViews = this.tooltips.map((tt => qt = Vt(tt, qt)))
      }
      update(tt, et) {
        var Vt;
        let Ot = tt.state.facet(this.facet),
          qt = Ot.filter((tt => tt));
        if (Ot === this.input) {
          for (let et of this.tooltipViews) et.update && et.update(tt);
          return !1
        }
        let Dt = [],
          mt = et ? [] : null;
        for (let dt = 0; dt < qt.length; dt++) {
          let Vt = qt[dt],
            Ot = -1;
          if (Vt) {
            for (let tt = 0; tt < this.tooltips.length; tt++) {
              let et = this.tooltips[tt];
              et && et.create == Vt.create && (Ot = tt)
            }
            if (Ot < 0) Dt[dt] = this.createTooltipView(Vt, dt ? Dt[dt - 1] : null), mt && (mt[dt] = !!Vt.above);
            else {
              let Vt = Dt[dt] = this.tooltipViews[Ot];
              mt && (mt[dt] = et[Ot]), Vt.update && Vt.update(tt)
            }
          }
        }
        for (let dt of this.tooltipViews) Dt.indexOf(dt) < 0 && (this.removeTooltipView(dt), null === (Vt = dt.destroy) || void 0 === Vt || Vt.call(dt));
        return et && (mt.forEach(((tt, Vt) => et[Vt] = tt)), et.length = mt.length), this.input = Ot, this.tooltips = qt, this.tooltipViews = Dt, !0
      }
    }

    function PD(tt) {
      let et = tt.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: et.clientHeight,
        right: et.clientWidth
      }
    }
    const ZD = Ot.s.define({
        combine: tt => {
          var et, Vt, Ot;
          return {
            position: Kt.ios ? "absolute" : (null === (et = tt.find((tt => tt.position))) || void 0 === et ? void 0 : et.position) || "fixed",
            parent: (null === (Vt = tt.find((tt => tt.parent))) || void 0 === Vt ? void 0 : Vt.parent) || null,
            tooltipSpace: (null === (Ot = tt.find((tt => tt.tooltipSpace))) || void 0 === Ot ? void 0 : Ot.tooltipSpace) || PD
          }
        }
      }),
      LD = new WeakMap,
      FD = ge.fromClass(class {
        constructor(tt) {
          this.view = tt, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let et = tt.state.facet(ZD);
          this.position = et.position, this.parent = et.parent, this.classes = tt.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new ID(tt, oD, ((tt, et) => this.createTooltip(tt, et)), (tt => {
            this.resizeObserver && this.resizeObserver.unobserve(tt.dom), tt.dom.remove()
          })), this.above = this.manager.tooltips.map((tt => !!tt.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((tt => {
            Date.now() > this.lastTransaction - 50 && tt.length > 0 && tt[tt.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), tt.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let tt of this.manager.tooltipViews) this.intersectionObserver.observe(tt.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(tt) {
          tt.transactions.length && (this.lastTransaction = Date.now());
          let et = this.manager.update(tt, this.above);
          et && this.observeIntersection();
          let Vt = et || tt.geometryChanged,
            Ot = tt.state.facet(ZD);
          if (Ot.position != this.position && !this.madeAbsolute) {
            this.position = Ot.position;
            for (let tt of this.manager.tooltipViews) tt.dom.style.position = this.position;
            Vt = !0
          }
          if (Ot.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Ot.parent, this.createContainer();
            for (let tt of this.manager.tooltipViews) this.container.appendChild(tt.dom);
            Vt = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          Vt && this.maybeMeasure()
        }
        createTooltip(tt, et) {
          let Vt = tt.create(this.view),
            Ot = et ? et.dom : null;
          if (Vt.dom.classList.add("cm-tooltip"), tt.arrow && !Vt.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let tt = document.createElement("div");
            tt.className = "cm-tooltip-arrow", Vt.dom.appendChild(tt)
          }
          return Vt.dom.style.position = this.position, Vt.dom.style.top = RD, Vt.dom.style.left = "0px", this.container.insertBefore(Vt.dom, Ot), Vt.mount && Vt.mount(this.view), this.resizeObserver && this.resizeObserver.observe(Vt.dom), Vt
        }
        destroy() {
          var tt, et, Vt;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Ot of this.manager.tooltipViews) Ot.dom.remove(), null === (tt = Ot.destroy) || void 0 === tt || tt.call(Ot);
          this.parent && this.container.remove(), null === (et = this.resizeObserver) || void 0 === et || et.disconnect(), null === (Vt = this.intersectionObserver) || void 0 === Vt || Vt.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let tt = 1,
            et = 1,
            Vt = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: tt
            } = this.manager.tooltipViews[0];
            if (Kt.safari) {
              let et = tt.getBoundingClientRect();
              Vt = Math.abs(et.top + 1e4) > 1 || Math.abs(et.left) > 1
            } else Vt = !!tt.offsetParent && tt.offsetParent != this.container.ownerDocument.body
          }
          if (Vt || "absolute" == this.position)
            if (this.parent) {
              let Vt = this.parent.getBoundingClientRect();
              Vt.width && Vt.height && (tt = Vt.width / this.parent.offsetWidth, et = Vt.height / this.parent.offsetHeight)
            } else({
              scaleX: tt,
              scaleY: et
            } = this.view.viewState);
          let Ot = this.view.scrollDOM.getBoundingClientRect(),
            qt = jV(this.view);
          return {
            visible: {
              left: Ot.left + qt.left,
              top: Ot.top + qt.top,
              right: Ot.right - qt.right,
              bottom: Ot.bottom - qt.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((tt, et) => {
              let Vt = this.manager.tooltipViews[et];
              return Vt.getCoords ? Vt.getCoords(tt.pos) : this.view.coordsAtPos(tt.pos)
            })),
            size: this.manager.tooltipViews.map((tt => {
              let {
                dom: et
              } = tt;
              return et.getBoundingClientRect()
            })),
            space: this.view.state.facet(ZD).tooltipSpace(this.view),
            scaleX: tt,
            scaleY: et,
            makeAbsolute: Vt
          }
        }
        writeMeasure(tt) {
          var et;
          if (tt.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let tt of this.manager.tooltipViews) tt.dom.style.position = "absolute"
          }
          let {
            visible: Vt,
            space: Ot,
            scaleX: qt,
            scaleY: Dt
          } = tt, mt = [];
          for (let dt = 0; dt < this.manager.tooltips.length; dt++) {
            let jt = this.manager.tooltips[dt],
              Ht = this.manager.tooltipViews[dt],
              {
                dom: Xt
              } = Ht,
              Qt = tt.pos[dt],
              lt = tt.size[dt];
            if (!Qt || !1 !== jt.clip && (Qt.bottom <= Math.max(Vt.top, Ot.top) || Qt.top >= Math.min(Vt.bottom, Ot.bottom) || Qt.right < Math.max(Vt.left, Ot.left) - .1 || Qt.left > Math.min(Vt.right, Ot.right) + .1)) {
              Xt.style.top = RD;
              continue
            }
            let Et = jt.arrow ? Ht.dom.querySelector(".cm-tooltip-arrow") : null,
              ft = Et ? 7 : 0,
              wt = lt.right - lt.left,
              yt = null !== (et = LD.get(Ht)) && void 0 !== et ? et : lt.bottom - lt.top,
              Nt = Ht.offset || zD,
              Mt = this.view.textDirection == Xe.LTR,
              bt = lt.width > Ot.right - Ot.left ? Mt ? Ot.left : Ot.right - lt.width : Mt ? Math.max(Ot.left, Math.min(Qt.left - (Et ? 14 : 0) + Nt.x, Ot.right - wt)) : Math.min(Math.max(Ot.left, Qt.left - wt + (Et ? 14 : 0) - Nt.x), Ot.right - wt),
              Jt = this.above[dt];
            !jt.strictSide && (Jt ? Qt.top - yt - ft - Nt.y < Ot.top : Qt.bottom + yt + ft + Nt.y > Ot.bottom) && Jt == Ot.bottom - Qt.bottom > Qt.top - Ot.top && (Jt = this.above[dt] = !Jt);
            let Ct = (Jt ? Qt.top - Ot.top : Ot.bottom - Qt.bottom) - ft;
            if (Ct < yt && !1 !== Ht.resize) {
              if (Ct < this.view.defaultLineHeight) {
                Xt.style.top = RD;
                continue
              }
              LD.set(Ht, yt), Xt.style.height = (yt = Ct) / Dt + "px"
            } else Xt.style.height && (Xt.style.height = "");
            let ut = Jt ? Qt.top - yt - ft - Nt.y : Qt.bottom + ft + Nt.y,
              Kt = bt + wt;
            if (!0 !== Ht.overlap)
              for (let tt of mt) tt.left < Kt && tt.right > bt && tt.top < ut + yt && tt.bottom > ut && (ut = Jt ? tt.top - yt - 2 - ft : tt.bottom + ft + 2);
            if ("absolute" == this.position ? (Xt.style.top = (ut - tt.parent.top) / Dt + "px", kD(Xt, (bt - tt.parent.left) / qt)) : (Xt.style.top = ut / Dt + "px", kD(Xt, bt / qt)), Et) {
              let tt = Qt.left + (Mt ? Nt.x : -Nt.x) - (bt + 14 - 7);
              Et.style.left = tt / qt + "px"
            }!0 !== Ht.overlap && mt.push({
              left: bt,
              top: ut,
              right: Kt,
              bottom: ut + yt
            }), Xt.classList.toggle("cm-tooltip-above", Jt), Xt.classList.toggle("cm-tooltip-below", !Jt), Ht.positioned && Ht.positioned(tt.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let tt of this.manager.tooltipViews) tt.dom.style.top = RD
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function kD(tt, et) {
      let Vt = parseInt(tt.style.left, 10);
      (isNaN(Vt) || Math.abs(et - Vt) > 1) && (tt.style.left = et + "px")
    }
    const GD = vq.baseTheme({
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
      zD = {
        x: 0,
        y: 0
      },
      oD = Ot.s.define({
        enables: [FD, GD]
      }),
      rD = Ot.s.define({
        combine: tt => tt.reduce(((tt, et) => tt.concat(et)), [])
      });
    class UD {
      static create(tt) {
        return new UD(tt)
      }
      constructor(tt) {
        this.view = tt, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new ID(tt, rD, ((tt, et) => this.createHostedView(tt, et)), (tt => tt.dom.remove()))
      }
      createHostedView(tt, et) {
        let Vt = tt.create(this.view);
        return Vt.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(Vt.dom, et ? et.dom.nextSibling : this.dom.firstChild), this.mounted && Vt.mount && Vt.mount(this.view), Vt
      }
      mount(tt) {
        for (let et of this.manager.tooltipViews) et.mount && et.mount(tt);
        this.mounted = !0
      }
      positioned(tt) {
        for (let et of this.manager.tooltipViews) et.positioned && et.positioned(tt)
      }
      update(tt) {
        this.manager.update(tt)
      }
      destroy() {
        var tt;
        for (let et of this.manager.tooltipViews) null === (tt = et.destroy) || void 0 === tt || tt.call(et)
      }
      passProp(tt) {
        let et;
        for (let Vt of this.manager.tooltipViews) {
          let Ot = Vt[tt];
          if (void 0 !== Ot)
            if (void 0 === et) et = Ot;
            else if (et !== Ot) return
        }
        return et
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
    const AD = oD.compute([rD], (tt => {
      let et = tt.facet(rD);
      return 0 === et.length ? null : {
        pos: Math.min(...et.map((tt => tt.pos))),
        end: Math.max(...et.map((tt => {
          var et;
          return null !== (et = tt.end) && void 0 !== et ? et : tt.pos
        }))),
        create: UD.create,
        above: et[0].above,
        arrow: et.some((tt => tt.arrow))
      }
    }));
    class iD {
      constructor(tt, et, Vt, Ot, qt) {
        this.view = tt, this.source = et, this.field = Vt, this.setHover = Ot, this.hoverTime = qt, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: tt.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), tt.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), tt.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let tt = Date.now() - this.lastMove.time;
        tt < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - tt) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: tt,
          lastMove: et
        } = this, Vt = tt.docView.tile.nearest(et.target);
        if (!Vt) return;
        let Ot, qt = 1;
        if (Vt.isWidget()) Ot = Vt.posAtStart;
        else {
          if (Ot = tt.posAtCoords(et), null == Ot) return;
          let Vt = tt.coordsAtPos(Ot);
          if (!Vt || et.y < Vt.top || et.y > Vt.bottom || et.x < Vt.left - tt.defaultCharacterWidth || et.x > Vt.right + tt.defaultCharacterWidth) return;
          let Dt = tt.bidiSpans(tt.state.doc.lineAt(Ot)).find((tt => tt.from <= Ot && tt.to >= Ot)),
            mt = Dt && Dt.dir == Xe.RTL ? -1 : 1;
          qt = et.x < Vt.left ? -mt : mt
        }
        let Dt = this.source(tt, Ot, qt);
        if (null === Dt || void 0 === Dt ? void 0 : Dt.then) {
          let et = this.pending = {
            pos: Ot
          };
          Dt.then((Vt => {
            this.pending == et && (this.pending = null, !Vt || Array.isArray(Vt) && !Vt.length || tt.dispatch({
              effects: this.setHover.of(Array.isArray(Vt) ? Vt : [Vt])
            }))
          }), (et => Be(tt.state, et, "hover tooltip")))
        } else !Dt || Array.isArray(Dt) && !Dt.length || tt.dispatch({
          effects: this.setHover.of(Array.isArray(Dt) ? Dt : [Dt])
        })
      }
      get tooltip() {
        let tt = this.view.plugin(FD),
          et = tt ? tt.manager.tooltips.findIndex((tt => tt.create == UD.create)) : -1;
        return et > -1 ? tt.manager.tooltipViews[et] : null
      }
      mousemove(tt) {
        var et, Vt;
        this.lastMove = {
          x: tt.clientX,
          y: tt.clientY,
          target: tt.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Ot,
          tooltip: qt
        } = this;
        if (Ot.length && qt && ! function(tt, et) {
            let Vt, {
              left: Ot,
              right: qt,
              top: Dt,
              bottom: mt
            } = tt.getBoundingClientRect();
            if (Vt = tt.querySelector(".cm-tooltip-arrow")) {
              let tt = Vt.getBoundingClientRect();
              Dt = Math.min(tt.top, Dt), mt = Math.max(tt.bottom, mt)
            }
            return et.clientX >= Ot - YD && et.clientX <= qt + YD && et.clientY >= Dt - YD && et.clientY <= mt + YD
          }(qt.dom, tt) || this.pending) {
          let {
            pos: qt
          } = Ot[0] || this.pending, Dt = null !== (Vt = null === (et = Ot[0]) || void 0 === et ? void 0 : et.end) && void 0 !== Vt ? Vt : qt;
          (qt == Dt ? this.view.posAtCoords(this.lastMove) == qt : function(tt, et, Vt, Ot, qt) {
            let Dt = tt.scrollDOM.getBoundingClientRect(),
              mt = tt.documentTop + tt.documentPadding.top + tt.contentHeight;
            if (Dt.left > Ot || Dt.right < Ot || Dt.top > qt || Math.min(Dt.bottom, mt) < qt) return !1;
            let dt = tt.posAtCoords({
              x: Ot,
              y: qt
            }, !1);
            return dt >= et && dt <= Vt
          }(this.view, qt, Dt, tt.clientX, tt.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(tt) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: et
        } = this;
        if (et.length) {
          let {
            tooltip: et
          } = this;
          et && et.dom.contains(tt.relatedTarget) ? this.watchTooltipLeave(et.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(tt) {
        let et = Vt => {
          tt.removeEventListener("mouseleave", et), this.active.length && !this.view.dom.contains(Vt.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        tt.addEventListener("mouseleave", et)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const YD = 4;

    function BD(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Vt = Ot.I.define(),
        qt = Ot.J.define({
          create: () => [],
          update(tt, qt) {
            if (tt.length && (et.hideOnChange && (qt.docChanged || qt.selection) ? tt = [] : et.hideOn && (tt = tt.filter((tt => !et.hideOn(qt, tt)))), qt.docChanged)) {
              let et = [];
              for (let Vt of tt) {
                let tt = qt.changes.mapPos(Vt.pos, -1, Ot.t.TrackDel);
                if (null != tt) {
                  let Ot = Object.assign(Object.create(null), Vt);
                  Ot.pos = tt, null != Ot.end && (Ot.end = qt.changes.mapPos(Ot.end)), et.push(Ot)
                }
              }
              tt = et
            }
            for (let et of qt.effects) et.is(Vt) && (tt = et.value), et.is(xD) && (tt = []);
            return tt
          },
          provide: tt => rD.from(tt)
        });
      return {
        active: qt,
        extension: [qt, ge.define((Ot => new iD(Ot, tt, qt, Vt, et.hoverTime || 300))), AD]
      }
    }

    function pD(tt, et) {
      let Vt = tt.plugin(FD);
      if (!Vt) return null;
      let Ot = Vt.manager.tooltips.indexOf(et);
      return Ot < 0 ? null : Vt.manager.tooltipViews[Ot]
    }
    const xD = Ot.I.define();
    const TD = Ot.s.define({
      combine(tt) {
        let et, Vt;
        for (let Ot of tt) et = et || Ot.topContainer, Vt = Vt || Ot.bottomContainer;
        return {
          topContainer: et,
          bottomContainer: Vt
        }
      }
    });

    function gD(tt, et) {
      let Vt = tt.plugin(sD),
        Ot = Vt ? Vt.specs.indexOf(et) : -1;
      return Ot > -1 ? Vt.panels[Ot] : null
    }
    const sD = ge.fromClass(class {
      constructor(tt) {
        this.input = tt.state.facet(em), this.specs = this.input.filter((tt => tt)), this.panels = this.specs.map((et => et(tt)));
        let et = tt.state.facet(TD);
        this.top = new nD(tt, !0, et.topContainer), this.bottom = new nD(tt, !1, et.bottomContainer), this.top.sync(this.panels.filter((tt => tt.top))), this.bottom.sync(this.panels.filter((tt => !tt.top)));
        for (let Vt of this.panels) Vt.dom.classList.add("cm-panel"), Vt.mount && Vt.mount()
      }
      update(tt) {
        let et = tt.state.facet(TD);
        this.top.container != et.topContainer && (this.top.sync([]), this.top = new nD(tt.view, !0, et.topContainer)), this.bottom.container != et.bottomContainer && (this.bottom.sync([]), this.bottom = new nD(tt.view, !1, et.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let Vt = tt.state.facet(em);
        if (Vt != this.input) {
          let et = Vt.filter((tt => tt)),
            Ot = [],
            qt = [],
            Dt = [],
            mt = [];
          for (let Vt of et) {
            let et, dt = this.specs.indexOf(Vt);
            dt < 0 ? (et = Vt(tt.view), mt.push(et)) : (et = this.panels[dt], et.update && et.update(tt)), Ot.push(et), (et.top ? qt : Dt).push(et)
          }
          this.specs = et, this.panels = Ot, this.top.sync(qt), this.bottom.sync(Dt);
          for (let tt of mt) tt.dom.classList.add("cm-panel"), tt.mount && tt.mount()
        } else
          for (let Ot of this.panels) Ot.update && Ot.update(tt)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: tt => vq.scrollMargins.of((et => {
        let Vt = et.plugin(tt);
        return Vt && {
          top: Vt.top.scrollMargin(),
          bottom: Vt.bottom.scrollMargin()
        }
      }))
    });
    class nD {
      constructor(tt, et, Vt) {
        this.view = tt, this.top = et, this.container = Vt, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(tt) {
        for (let et of this.panels) et.destroy && tt.indexOf(et) < 0 && et.destroy();
        this.panels = tt, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let tt = this.container || this.view.dom;
          tt.insertBefore(this.dom, this.top ? tt.firstChild : null)
        }
        let tt = this.dom.firstChild;
        for (let et of this.panels)
          if (et.dom.parentNode == this.dom) {
            for (; tt != et.dom;) tt = tm(tt);
            tt = tt.nextSibling
          } else this.dom.insertBefore(et.dom, tt);
        for (; tt;) tt = tm(tt)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let tt of this.classes.split(" ")) tt && this.container.classList.remove(tt);
          for (let tt of (this.classes = this.view.themeClasses).split(" ")) tt && this.container.classList.add(tt)
        }
      }
    }

    function tm(tt) {
      let et = tt.nextSibling;
      return tt.remove(), et
    }
    const em = Ot.s.define({
      enables: sD
    });

    function Vm(tt, et) {
      let Vt, qt = new Promise((tt => Vt = tt)),
        Dt = tt => function(tt, et, Vt) {
          let Ot = et.content ? et.content(tt, (() => mt(null))) : null;
          if (!Ot) {
            if (Ot = (0, Qt.b)("form"), et.input) {
              let tt = (0, Qt.b)("input", et.input);
              /^(text|password|number|email|tel|url)$/.test(tt.type) && tt.classList.add("cm-textfield"), tt.name || (tt.name = "input"), Ot.appendChild((0, Qt.b)("label", (et.label || "") + ": ", tt))
            } else Ot.appendChild(document.createTextNode(et.label || ""));
            Ot.appendChild(document.createTextNode(" ")), Ot.appendChild((0, Qt.b)("button", {
              class: "cm-button",
              type: "submit"
            }, et.submitLabel || "OK"))
          }
          let qt = "FORM" == Ot.nodeName ? [Ot] : Ot.querySelectorAll("form");
          for (let dt = 0; dt < qt.length; dt++) {
            let tt = qt[dt];
            tt.addEventListener("keydown", (et => {
              27 == et.keyCode ? (et.preventDefault(), mt(null)) : 13 == et.keyCode && (et.preventDefault(), mt(tt))
            })), tt.addEventListener("submit", (et => {
              et.preventDefault(), mt(tt)
            }))
          }
          let Dt = (0, Qt.b)("div", Ot, (0, Qt.b)("button", {
            onclick: () => mt(null),
            "aria-label": tt.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          et.class && (Dt.className = et.class);

          function mt(et) {
            Dt.contains(Dt.ownerDocument.activeElement) && tt.focus(), Vt(et)
          }
          return Dt.classList.add("cm-dialog"), {
            dom: Dt,
            top: et.top,
            mount: () => {
              if (et.focus) {
                let tt;
                tt = "string" == typeof et.focus ? Ot.querySelector(et.focus) : Ot.querySelector("input") || Ot.querySelector("button"), tt && "select" in tt ? tt.select() : tt && "focus" in tt && tt.focus()
              }
            }
          }
        }(tt, et, Vt);
      tt.state.field(Om, !1) ? tt.dispatch({
        effects: qm.of(Dt)
      }) : tt.dispatch({
        effects: Ot.I.appendConfig.of(Om.init((() => [Dt])))
      });
      let mt = Dm.of(Dt);
      return {
        close: mt,
        result: qt.then((et => ((tt.win.queueMicrotask || (et => tt.win.setTimeout(et, 10)))((() => {
          tt.state.field(Om).indexOf(Dt) > -1 && tt.dispatch({
            effects: mt
          })
        })), et)))
      }
    }
    const Om = Ot.J.define({
        create: () => [],
        update(tt, et) {
          for (let Vt of et.effects) Vt.is(qm) ? tt = [Vt.value].concat(tt) : Vt.is(Dm) && (tt = tt.filter((tt => tt != Vt.value)));
          return tt
        },
        provide: tt => em.computeN([tt], (et => et.field(tt)))
      }),
      qm = Ot.I.define(),
      Dm = Ot.I.define();
    class mm extends Ot.E {
      compare(tt) {
        return this == tt || this.constructor == tt.constructor && this.eq(tt)
      }
      eq(tt) {
        return !1
      }
      destroy(tt) {}
    }
    mm.prototype.elementClass = "", mm.prototype.toDOM = void 0, mm.prototype.mapMode = Ot.t.TrackBefore, mm.prototype.startSide = mm.prototype.endSide = -1, mm.prototype.point = !0;
    const dm = Ot.s.define(),
      jm = Ot.s.define(),
      Hm = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Ot.B.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      Xm = Ot.s.define();

    function Qm(tt) {
      return [Em(), Xm.of({
        ...Hm,
        ...tt
      })]
    }
    const lm = Ot.s.define({
      combine: tt => tt.some((tt => tt))
    });

    function Em(tt) {
      let et = [fm];
      return tt && !1 === tt.fixed && et.push(lm.of(!0)), et
    }
    const fm = ge.fromClass(class {
      constructor(tt) {
        this.view = tt, this.domAfter = null, this.prevViewport = tt.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = tt.state.facet(Xm).map((et => new am(tt, et))), this.fixed = !tt.state.facet(lm);
        for (let et of this.gutters) "after" == et.config.side ? this.getDOMAfter().appendChild(et.dom) : this.dom.appendChild(et.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), tt.scrollDOM.insertBefore(this.dom, tt.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(tt) {
        if (this.updateGutters(tt)) {
          let et = this.prevViewport,
            Vt = tt.view.viewport,
            Ot = Math.min(et.to, Vt.to) - Math.max(et.from, Vt.from);
          this.syncGutters(Ot < .8 * (Vt.to - Vt.from))
        }
        if (tt.geometryChanged) {
          let tt = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = tt, this.domAfter && (this.domAfter.style.minHeight = tt)
        }
        this.view.state.facet(lm) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = tt.view.viewport
      }
      syncGutters(tt) {
        let et = this.dom.nextSibling;
        tt && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let Vt = Ot.B.iter(this.view.state.facet(dm), this.view.viewport.from),
          qt = [],
          Dt = this.gutters.map((tt => new Nm(tt, this.view.viewport, -this.view.documentPadding.top)));
        for (let Ot of this.view.viewportLineBlocks)
          if (qt.length && (qt = []), Array.isArray(Ot.type)) {
            let tt = !0;
            for (let et of Ot.type)
              if (et.type == It.Text && tt) {
                ym(Vt, qt, et.from);
                for (let tt of Dt) tt.line(this.view, et, qt);
                tt = !1
              } else if (et.widget)
              for (let tt of Dt) tt.widget(this.view, et)
          } else if (Ot.type == It.Text) {
          ym(Vt, qt, Ot.from);
          for (let tt of Dt) tt.line(this.view, Ot, qt)
        } else if (Ot.widget)
          for (let tt of Dt) tt.widget(this.view, Ot);
        for (let Ot of Dt) Ot.finish();
        tt && (this.view.scrollDOM.insertBefore(this.dom, et), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(tt) {
        let et = tt.startState.facet(Xm),
          Vt = tt.state.facet(Xm),
          qt = tt.docChanged || tt.heightChanged || tt.viewportChanged || !Ot.B.eq(tt.startState.facet(dm), tt.state.facet(dm), tt.view.viewport.from, tt.view.viewport.to);
        if (et == Vt)
          for (let Ot of this.gutters) Ot.update(tt) && (qt = !0);
        else {
          qt = !0;
          let Ot = [];
          for (let qt of Vt) {
            let Vt = et.indexOf(qt);
            Vt < 0 ? Ot.push(new am(this.view, qt)) : (this.gutters[Vt].update(tt), Ot.push(this.gutters[Vt]))
          }
          for (let tt of this.gutters) tt.dom.remove(), Ot.indexOf(tt) < 0 && tt.destroy();
          for (let tt of Ot) "after" == tt.config.side ? this.getDOMAfter().appendChild(tt.dom) : this.dom.appendChild(tt.dom);
          this.gutters = Ot
        }
        return qt
      }
      destroy() {
        for (let tt of this.gutters) tt.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: tt => vq.scrollMargins.of((et => {
        let Vt = et.plugin(tt);
        if (!Vt || 0 == Vt.gutters.length || !Vt.fixed) return null;
        let Ot = Vt.dom.offsetWidth * et.scaleX,
          qt = Vt.domAfter ? Vt.domAfter.offsetWidth * et.scaleX : 0;
        return et.textDirection == Xe.LTR ? {
          left: Ot,
          right: qt
        } : {
          right: Ot,
          left: qt
        }
      }))
    });

    function wm(tt) {
      return Array.isArray(tt) ? tt : [tt]
    }

    function ym(tt, et, Vt) {
      for (; tt.value && tt.from <= Vt;) tt.from == Vt && et.push(tt.value), tt.next()
    }
    class Nm {
      constructor(tt, et, Vt) {
        this.gutter = tt, this.height = Vt, this.i = 0, this.cursor = Ot.B.iter(tt.markers, et.from)
      }
      addElement(tt, et, Vt) {
        let {
          gutter: Ot
        } = this, qt = (et.top - this.height) / tt.scaleY, Dt = et.height / tt.scaleY;
        if (this.i == Ot.elements.length) {
          let et = new Mm(tt, Dt, qt, Vt);
          Ot.elements.push(et), Ot.dom.appendChild(et.dom)
        } else Ot.elements[this.i].update(tt, Dt, qt, Vt);
        this.height = et.bottom, this.i++
      }
      line(tt, et, Vt) {
        let Ot = [];
        ym(this.cursor, Ot, et.from), Vt.length && (Ot = Ot.concat(Vt));
        let qt = this.gutter.config.lineMarker(tt, et, Ot);
        qt && Ot.unshift(qt);
        let Dt = this.gutter;
        (0 != Ot.length || Dt.config.renderEmptyElements) && this.addElement(tt, et, Ot)
      }
      widget(tt, et) {
        let Vt = this.gutter.config.widgetMarker(tt, et.widget, et),
          Ot = Vt ? [Vt] : null;
        for (let qt of tt.state.facet(jm)) {
          let Vt = qt(tt, et.widget, et);
          Vt && (Ot || (Ot = [])).push(Vt)
        }
        Ot && this.addElement(tt, et, Ot)
      }
      finish() {
        let tt = this.gutter;
        for (; tt.elements.length > this.i;) {
          let et = tt.elements.pop();
          tt.dom.removeChild(et.dom), et.destroy()
        }
      }
    }
    class am {
      constructor(tt, et) {
        this.view = tt, this.config = et, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let Vt in et.domEventHandlers) this.dom.addEventListener(Vt, (Ot => {
          let qt, Dt = Ot.target;
          if (Dt != this.dom && this.dom.contains(Dt)) {
            for (; Dt.parentNode != this.dom;) Dt = Dt.parentNode;
            let tt = Dt.getBoundingClientRect();
            qt = (tt.top + tt.bottom) / 2
          } else qt = Ot.clientY;
          let mt = tt.lineBlockAtHeight(qt - tt.documentTop);
          et.domEventHandlers[Vt](tt, mt, Ot) && Ot.preventDefault()
        }));
        this.markers = wm(et.markers(tt)), et.initialSpacer && (this.spacer = new Mm(tt, 0, 0, [et.initialSpacer(tt)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(tt) {
        let et = this.markers;
        if (this.markers = wm(this.config.markers(tt.view)), this.spacer && this.config.updateSpacer) {
          let et = this.config.updateSpacer(this.spacer.markers[0], tt);
          et != this.spacer.markers[0] && this.spacer.update(tt.view, 0, 0, [et])
        }
        let Vt = tt.view.viewport;
        return !Ot.B.eq(this.markers, et, Vt.from, Vt.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(tt)
      }
      destroy() {
        for (let tt of this.elements) tt.destroy()
      }
    }
    class Mm {
      constructor(tt, et, Vt, Ot) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(tt, et, Vt, Ot)
      }
      update(tt, et, Vt, Ot) {
        this.height != et && (this.height = et, this.dom.style.height = et + "px"), this.above != Vt && (this.dom.style.marginTop = (this.above = Vt) ? Vt + "px" : ""),
          function(tt, et) {
            if (tt.length != et.length) return !1;
            for (let Vt = 0; Vt < tt.length; Vt++)
              if (!tt[Vt].compare(et[Vt])) return !1;
            return !0
          }(this.markers, Ot) || this.setMarkers(tt, Ot)
      }
      setMarkers(tt, et) {
        let Vt = "cm-gutterElement",
          Ot = this.dom.firstChild;
        for (let qt = 0, Dt = 0;;) {
          let mt = Dt,
            dt = qt < et.length ? et[qt++] : null,
            jt = !1;
          if (dt) {
            let tt = dt.elementClass;
            tt && (Vt += " " + tt);
            for (let et = Dt; et < this.markers.length; et++)
              if (this.markers[et].compare(dt)) {
                mt = et, jt = !0;
                break
              }
          } else mt = this.markers.length;
          for (; Dt < mt;) {
            let tt = this.markers[Dt++];
            if (tt.toDOM) {
              tt.destroy(Ot);
              let et = Ot.nextSibling;
              Ot.remove(), Ot = et
            }
          }
          if (!dt) break;
          dt.toDOM && (jt ? Ot = Ot.nextSibling : this.dom.insertBefore(dt.toDOM(tt), Ot)), jt && Dt++
        }
        this.dom.className = Vt, this.markers = et
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const bm = Ot.s.define(),
      Jm = Ot.s.define(),
      Cm = Ot.s.define({
        combine: tt => (0, Ot.Y)(tt, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(tt, et) {
            let Vt = Object.assign({}, tt);
            for (let Ot in et) {
              let tt = Vt[Ot],
                qt = et[Ot];
              Vt[Ot] = tt ? (et, Vt, Ot) => tt(et, Vt, Ot) || qt(et, Vt, Ot) : qt
            }
            return Vt
          }
        })
      });
    class um extends mm {
      constructor(tt) {
        super(), this.number = tt
      }
      eq(tt) {
        return this.number == tt.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function Km(tt, et) {
      return tt.state.facet(Cm).formatNumber(et, tt.state)
    }
    const hm = Xm.compute([Cm], (tt => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: tt => tt.state.facet(bm),
      lineMarker: (tt, et, Vt) => Vt.some((tt => tt.toDOM)) ? null : new um(Km(tt, tt.state.doc.lineAt(et.from).number)),
      widgetMarker: (tt, et, Vt) => {
        for (let Ot of tt.state.facet(Jm)) {
          let qt = Ot(tt, et, Vt);
          if (qt) return qt
        }
        return null
      },
      lineMarkerChange: tt => tt.startState.facet(Cm) != tt.state.facet(Cm),
      initialSpacer: tt => new um(Km(tt, Sm(tt.state.doc.lines))),
      updateSpacer(tt, et) {
        let Vt = Km(et.view, Sm(et.view.state.doc.lines));
        return Vt == tt.number ? tt : new um(Vt)
      },
      domEventHandlers: tt.facet(Cm).domEventHandlers,
      side: "before"
    })));

    function Wm() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Cm.of(tt), Em(), hm]
    }

    function Sm(tt) {
      let et = 9;
      for (; et < tt;) et = 10 * et + 9;
      return et
    }
    const cm = new class extends mm {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      Rm = dm.compute(["selection"], (tt => {
        let et = [],
          Vt = -1;
        for (let Ot of tt.selection.nw) {
          let qt = tt.doc.lineAt(Ot.head).from;
          qt > Vt && (Vt = qt, et.push(cm.range(qt)))
        }
        return Ot.B.of(et)
      }));

    function Im() {
      return Rm
    }
  },
  41570: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot,
      d: () => Et,
      f: () => mt,
      g: () => Xt,
      j: () => Ht,
      m: () => Zt,
      o: () => Ft,
      s: () => Lt,
      u: () => ft
    });
    const Ot = 1024;
    let qt = 0;
    class Dt {
      constructor(tt, et) {
        this.from = tt, this.to = et
      }
    }
    class mt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = qt++, this.perNode = !!tt.perNode, this.deserialize = tt.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = tt.combine || null
      }
      add(tt) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof tt && (tt = Ht.match(tt)), et => {
          let Vt = tt(et);
          return void 0 === Vt ? null : [this, Vt]
        }
      }
    }
    mt.closedBy = new mt({
      deserialize: tt => tt.split(" ")
    }), mt.openedBy = new mt({
      deserialize: tt => tt.split(" ")
    }), mt.group = new mt({
      deserialize: tt => tt.split(" ")
    }), mt.isolate = new mt({
      deserialize: tt => {
        if (tt && "rtl" != tt && "ltr" != tt && "auto" != tt) throw new RangeError("Invalid value for isolate: " + tt);
        return tt || "auto"
      }
    }), mt.contextHash = new mt({
      perNode: !0
    }), mt.lookAhead = new mt({
      perNode: !0
    }), mt.mounted = new mt({
      perNode: !0
    });
    class dt {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = tt, this.overlay = et, this.parser = Vt, this.bracketed = Ot
      }
      static get(tt) {
        return tt && tt.props && tt.props[mt.mounted.id]
      }
    }
    const jt = Object.create(null);
    class Ht {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = tt, this.props = et, this.id = Vt, this.flags = Ot
      }
      static define(tt) {
        let et = tt.props && tt.props.length ? Object.create(null) : jt,
          Vt = (tt.top ? 1 : 0) | (tt.skipped ? 2 : 0) | (tt.error ? 4 : 0) | (null == tt.name ? 8 : 0),
          Ot = new Ht(tt.name || "", et, tt.id, Vt);
        if (tt.props)
          for (let qt of tt.props)
            if (Array.isArray(qt) || (qt = qt(Ot)), qt) {
              if (qt[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              et[qt[0].id] = qt[1]
            } return Ot
      }
      prop(tt) {
        return this.props[tt.id]
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
      is(tt) {
        if ("string" == typeof tt) {
          if (this.name == tt) return !0;
          let et = this.prop(mt.group);
          return !!et && et.indexOf(tt) > -1
        }
        return this.id == tt
      }
      static match(tt) {
        let et = Object.create(null);
        for (let Vt in tt)
          for (let Ot of Vt.split(" ")) et[Ot] = tt[Vt];
        return tt => {
          for (let Vt = tt.prop(mt.group), Ot = -1; Ot < (Vt ? Vt.length : 0); Ot++) {
            let qt = et[Ot < 0 ? tt.name : Vt[Ot]];
            if (qt) return qt
          }
        }
      }
    }
    Ht.none = new Ht("", Object.create(null), 0, 8);
    class Xt {
      constructor(tt) {
        this.types = tt;
        for (let et = 0; et < tt.length; et++)
          if (tt[et].id != et) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let tt = [];
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        for (let qt of this.types) {
          let et = null;
          for (let tt of Vt) {
            let Vt = tt(qt);
            if (Vt) {
              et || (et = Object.assign({}, qt.props));
              let tt = Vt[1],
                Ot = Vt[0];
              Ot.combine && Ot.id in et && (tt = Ot.combine(et[Ot.id], tt)), et[Ot.id] = tt
            }
          }
          tt.push(et ? new Ht(qt.name, et, qt.id, qt.flags) : qt)
        }
        return new Xt(tt)
      }
    }
    const Qt = new WeakMap,
      lt = new WeakMap;
    var Et;
    ! function(tt) {
      tt[tt.ExcludeBuffers = 1] = "ExcludeBuffers", tt[tt.IncludeAnonymous = 2] = "IncludeAnonymous", tt[tt.IgnoreMounts = 4] = "IgnoreMounts", tt[tt.IgnoreOverlays = 8] = "IgnoreOverlays", tt[tt.EnterBracketed = 16] = "EnterBracketed"
    }(Et || (Et = {}));
    class ft {
      constructor(tt, et, Vt, Ot, qt) {
        if (this.type = tt, this.children = et, this.positions = Vt, this.length = Ot, this.props = null, qt && qt.length) {
          this.props = Object.create(null);
          for (let [tt, et] of qt) this.props["number" == typeof tt ? tt : tt.id] = et
        }
      }
      toString() {
        let tt = dt.get(this);
        if (tt && !tt.overlay) return tt.tree.toString();
        let et = "";
        for (let Vt of this.children) {
          let tt = Vt.toString();
          tt && (et && (et += ","), et += tt)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (et.length ? "(" + et + ")" : "") : et
      }
      cursor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new St(this.topNode, tt)
      }
      cursorAt(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = Qt.get(this) || this.topNode,
          Ot = new St(Vt);
        return Ot.moveTo(tt, et), Qt.set(this, Ot._tree), Ot
      }
      get topNode() {
        return new Jt(this, 0, 0, null)
      }
      resolve(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = Mt(Qt.get(this) || this.topNode, tt, et, !1);
        return Qt.set(this, Vt), Vt
      }
      resolveInner(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = Mt(lt.get(this) || this.topNode, tt, et, !0);
        return lt.set(this, Vt), Vt
      }
      resolveStack(tt) {
        return function(tt, et, Vt) {
          let Ot = tt.resolveInner(et, Vt),
            qt = null;
          for (let Dt = Ot instanceof Jt ? Ot : Ot.context.parent; Dt; Dt = Dt.parent)
            if (Dt.index < 0) {
              let tt = Dt.parent;
              (qt || (qt = [Ot])).push(tt.resolve(et, Vt)), Dt = tt
            } else {
              let tt = dt.get(Dt.tree);
              if (tt && tt.overlay && tt.overlay[0].from <= et && tt.overlay[tt.overlay.length - 1].to >= et) {
                let mt = new Jt(tt.tree, tt.overlay[0].from + Dt.from, -1, Dt);
                (qt || (qt = [Ot])).push(Mt(mt, et, Vt, !1))
              }
            } return qt ? vt(qt) : Ot
        }(this, tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(tt) {
        let {
          enter: et,
          leave: Vt,
          from: Ot = 0,
          to: qt = this.length
        } = tt, Dt = tt.mode || 0, mt = (Dt & Et.IncludeAnonymous) > 0;
        for (let dt = this.cursor(Dt | Et.IncludeAnonymous);;) {
          let tt = !1;
          if (dt.from <= qt && dt.to >= Ot && (!mt && dt.type.isAnonymous || !1 !== et(dt))) {
            if (dt.firstChild()) continue;
            tt = !0
          }
          for (; tt && Vt && (mt || !dt.type.isAnonymous) && Vt(dt), !dt.nextSibling();) {
            if (!dt.parent()) return;
            tt = !0
          }
        }
      }
      prop(tt) {
        return tt.perNode ? this.props ? this.props[tt.id] : void 0 : this.type.prop(tt)
      }
      get propValues() {
        let tt = [];
        if (this.props)
          for (let et in this.props) tt.push([+et, this.props[et]]);
        return tt
      }
      balance() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Pt(Ht.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((tt, et, Vt) => new ft(this.type, tt, et, Vt, this.propValues)), tt.makeTree || ((tt, et, Vt) => new ft(Ht.none, tt, et, Vt)))
      }
      static build(tt) {
        return function(tt) {
          var et;
          let {
            buffer: Vt,
            nodeSet: qt,
            maxBufferLength: Dt = Ot,
            reused: dt = [],
            minRepeatType: jt = qt.types.length
          } = tt, Ht = Array.isArray(Vt) ? new wt(Vt, Vt.length) : Vt, Xt = qt.types, Qt = 0, lt = 0;

          function Et(tt, et, Vt, Ot, mt, ft) {
            let {
              id: wt,
              start: Kt,
              end: ht,
              size: vt
            } = Ht, Wt = lt, St = Qt;
            if (vt < 0) {
              if (Ht.next(), -1 == vt) {
                let et = dt[wt];
                return Vt.push(et), void Ot.push(Kt - tt)
              }
              if (-3 == vt) return void(Qt = wt);
              if (-4 == vt) return void(lt = wt);
              throw new RangeError(`Unrecognized record size: ${vt}`)
            }
            let ct, Rt, It = Xt[wt],
              Zt = Kt - tt;
            if (ht - Kt <= Dt && (Rt = Ct(Ht.pos - et, mt))) {
              let et = new Uint16Array(Rt.size - Rt.skip),
                Vt = Ht.pos - Rt.size,
                Ot = et.length;
              for (; Ht.pos > Vt;) Ot = ut(Rt.start, et, Ot);
              ct = new yt(et, ht - Rt.start, qt), Zt = Rt.start - tt
            } else {
              let tt = Ht.pos - vt;
              Ht.next();
              let et = [],
                Vt = [],
                Ot = wt >= jt ? wt : -1,
                qt = 0,
                mt = ht;
              for (; Ht.pos > tt;) Ot >= 0 && Ht.id == Ot && Ht.size >= 0 ? (Ht.end <= mt - Dt && (bt(et, Vt, Kt, qt, Ht.end, mt, Ot, Wt, St), qt = et.length, mt = Ht.end), Ht.next()) : ft > 2500 ? Nt(Kt, tt, et, Vt) : Et(Kt, tt, et, Vt, Ot, ft + 1);
              if (Ot >= 0 && qt > 0 && qt < et.length && bt(et, Vt, Kt, qt, Kt, mt, Ot, Wt, St), et.reverse(), Vt.reverse(), Ot > -1 && qt > 0) {
                let tt = Mt(It, St);
                ct = Pt(It, et, Vt, 0, et.length, 0, ht - Kt, tt, tt)
              } else ct = Jt(It, et, Vt, ht - Kt, Wt - ht, St)
            }
            Vt.push(ct), Ot.push(Zt)
          }

          function Nt(tt, et, Vt, Ot) {
            let mt = [],
              dt = 0,
              jt = -1;
            for (; Ht.pos > et;) {
              let {
                id: tt,
                start: et,
                end: Vt,
                size: Ot
              } = Ht;
              if (Ot > 4) Ht.next();
              else {
                if (jt > -1 && et < jt) break;
                jt < 0 && (jt = Vt - Dt), mt.push(tt, et, Vt), dt++, Ht.next()
              }
            }
            if (dt) {
              let et = new Uint16Array(4 * dt),
                Dt = mt[mt.length - 2];
              for (let tt = mt.length - 3, Vt = 0; tt >= 0; tt -= 3) et[Vt++] = mt[tt], et[Vt++] = mt[tt + 1] - Dt, et[Vt++] = mt[tt + 2] - Dt, et[Vt++] = Vt;
              Vt.push(new yt(et, mt[2] - Dt, qt)), Ot.push(Dt - tt)
            }
          }

          function Mt(tt, et) {
            return (Vt, Ot, qt) => {
              let Dt, dt, jt = 0,
                Ht = Vt.length - 1;
              if (Ht >= 0 && (Dt = Vt[Ht]) instanceof ft) {
                if (!Ht && Dt.type == tt && Dt.length == qt) return Dt;
                (dt = Dt.prop(mt.lookAhead)) && (jt = Ot[Ht] + Dt.length + dt)
              }
              return Jt(tt, Vt, Ot, qt, jt, et)
            }
          }

          function bt(tt, et, Vt, Ot, Dt, mt, dt, jt, Ht) {
            let Xt = [],
              Qt = [];
            for (; tt.length > Ot;) Xt.push(tt.pop()), Qt.push(et.pop() + Vt - Dt);
            tt.push(Jt(qt.types[dt], Xt, Qt, mt - Dt, jt - mt, Ht)), et.push(Dt - Vt)
          }

          function Jt(tt, et, Vt, Ot, qt, Dt, dt) {
            if (Dt) {
              let tt = [mt.contextHash, Dt];
              dt = dt ? [tt].concat(dt) : [tt]
            }
            if (qt > 25) {
              let tt = [mt.lookAhead, qt];
              dt = dt ? [tt].concat(dt) : [tt]
            }
            return new ft(tt, et, Vt, Ot, dt)
          }

          function Ct(tt, et) {
            let Vt = Ht.fork(),
              Ot = 0,
              qt = 0,
              mt = 0,
              dt = Vt.end - Dt,
              Xt = {
                size: 0,
                start: 0,
                skip: 0
              };
            tt: for (let Dt = Vt.pos - tt; Vt.pos > Dt;) {
              let tt = Vt.size;
              if (Vt.id == et && tt >= 0) {
                Xt.size = Ot, Xt.start = qt, Xt.skip = mt, mt += 4, Ot += 4, Vt.next();
                continue
              }
              let Ht = Vt.pos - tt;
              if (tt < 0 || Ht < Dt || Vt.start < dt) break;
              let Qt = Vt.id >= jt ? 4 : 0,
                lt = Vt.start;
              for (Vt.next(); Vt.pos > Ht;) {
                if (Vt.size < 0) {
                  if (-3 != Vt.size && -4 != Vt.size) break tt;
                  Qt += 4
                } else Vt.id >= jt && (Qt += 4);
                Vt.next()
              }
              qt = lt, Ot += tt, mt += Qt
            }
            return (et < 0 || Ot == tt) && (Xt.size = Ot, Xt.start = qt, Xt.skip = mt), Xt.size > 4 ? Xt : void 0
          }

          function ut(tt, et, Vt) {
            let {
              id: Ot,
              start: qt,
              end: Dt,
              size: mt
            } = Ht;
            if (Ht.next(), mt >= 0 && Ot < jt) {
              let dt = Vt;
              if (mt > 4) {
                let Ot = Ht.pos - (mt - 4);
                for (; Ht.pos > Ot;) Vt = ut(tt, et, Vt)
              }
              et[--Vt] = dt, et[--Vt] = Dt - tt, et[--Vt] = qt - tt, et[--Vt] = Ot
            } else - 3 == mt ? Qt = Ot : -4 == mt && (lt = Ot);
            return Vt
          }
          let Kt = [],
            ht = [];
          for (; Ht.pos > 0;) Et(tt.start || 0, tt.bufferStart || 0, Kt, ht, -1, 0);
          let vt = null !== (et = tt.length) && void 0 !== et ? et : Kt.length ? ht[0] + Kt[0].length : 0;
          return new ft(Xt[tt.topID], Kt.reverse(), ht.reverse(), vt)
        }(tt)
      }
    }
    ft.empty = new ft(Ht.none, [], [], 0);
    class wt {
      constructor(tt, et) {
        this.buffer = tt, this.index = et
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
        return new wt(this.buffer, this.index)
      }
    }
    class yt {
      constructor(tt, et, Vt) {
        this.buffer = tt, this.length = et, this.set = Vt
      }
      get type() {
        return Ht.none
      }
      toString() {
        let tt = [];
        for (let et = 0; et < this.buffer.length;) tt.push(this.childString(et)), et = this.buffer[et + 3];
        return tt.join(",")
      }
      childString(tt) {
        let et = this.buffer[tt],
          Vt = this.buffer[tt + 3],
          Ot = this.set.types[et],
          qt = Ot.name;
        if (/\W/.test(qt) && !Ot.isError && (qt = JSON.stringify(qt)), Vt == (tt += 4)) return qt;
        let Dt = [];
        for (; tt < Vt;) Dt.push(this.childString(tt)), tt = this.buffer[tt + 3];
        return qt + "(" + Dt.join(",") + ")"
      }
      findChild(tt, et, Vt, Ot, qt) {
        let {
          buffer: Dt
        } = this, mt = -1;
        for (let dt = tt; dt != et && !(Nt(qt, Ot, Dt[dt + 1], Dt[dt + 2]) && (mt = dt, Vt > 0)); dt = Dt[dt + 3]);
        return mt
      }
      slice(tt, et, Vt) {
        let Ot = this.buffer,
          qt = new Uint16Array(et - tt),
          Dt = 0;
        for (let mt = tt, dt = 0; mt < et;) {
          qt[dt++] = Ot[mt++], qt[dt++] = Ot[mt++] - Vt;
          let et = qt[dt++] = Ot[mt++] - Vt;
          qt[dt++] = Ot[mt++] - tt, Dt = Math.max(Dt, et)
        }
        return new yt(qt, Dt, this.set)
      }
    }

    function Nt(tt, et, Vt, Ot) {
      switch (tt) {
        case -2:
          return Vt < et;
        case -1:
          return Ot >= et && Vt < et;
        case 0:
          return Vt < et && Ot > et;
        case 1:
          return Vt <= et && Ot > et;
        case 2:
          return Ot > et;
        case 4:
          return !0
      }
    }

    function Mt(tt, et, Vt, Ot) {
      for (var qt; tt.from == tt.to || (Vt < 1 ? tt.from >= et : tt.from > et) || (Vt > -1 ? tt.to <= et : tt.to < et);) {
        let et = !Ot && tt instanceof Jt && tt.index < 0 ? null : tt.parent;
        if (!et) return tt;
        tt = et
      }
      let Dt = Ot ? 0 : Et.IgnoreOverlays;
      if (Ot)
        for (let mt = tt, dt = mt.parent; dt; mt = dt, dt = mt.parent) mt instanceof Jt && mt.index < 0 && (null === (qt = dt.enter(et, Vt, Dt)) || void 0 === qt ? void 0 : qt.from) != mt.from && (tt = dt);
      for (;;) {
        let Ot = tt.enter(et, Vt, Dt);
        if (!Ot) return tt;
        tt = Ot
      }
    }
    class bt {
      cursor() {
        return new St(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(tt) {
        let et = Ct(this, tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return et.length ? et[0] : null
      }
      getChildren(tt) {
        return Ct(this, tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(tt) {
        return Mt(this, tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(tt) {
        return Mt(this, tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(tt) {
        return ut(this.parent, tt)
      }
      enterUnfinishedNodesBefore(tt) {
        let et = this.childBefore(tt),
          Vt = this;
        for (; et;) {
          let tt = et.lastChild;
          if (!tt || tt.to != et.to) break;
          tt.type.isError && tt.from == tt.to ? (Vt = et, et = tt.prevSibling) : et = tt
        }
        return Vt
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class Jt extends bt {
      constructor(tt, et, Vt, Ot) {
        super(), this._tree = tt, this.from = et, this.index = Vt, this._parent = Ot
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
      nextChild(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let Dt = this;;) {
          for (let {
              children: mt,
              positions: jt
            } = Dt._tree, Ht = et > 0 ? mt.length : -1; tt != Ht; tt += et) {
            let Ht, Xt = mt[tt],
              Qt = jt[tt] + Dt.from;
            if (qt & Et.EnterBracketed && Xt instanceof ft && (Ht = dt.get(Xt)) && !Ht.overlay && Ht.bracketed && Vt >= Qt && Vt <= Qt + Xt.length || Nt(Ot, Vt, Qt, Qt + Xt.length))
              if (Xt instanceof yt) {
                if (qt & Et.ExcludeBuffers) continue;
                let mt = Xt.findChild(0, Xt.buffer.length, et, Vt - Qt, Ot);
                if (mt > -1) return new ht(new Kt(Dt, Xt, tt, Qt), null, mt)
              } else if (qt & Et.IncludeAnonymous || !Xt.type.isAnonymous || ct(Xt)) {
              let mt;
              if (!(qt & Et.IgnoreMounts) && (mt = dt.get(Xt)) && !mt.overlay) return new Jt(mt.tree, Qt, tt, Dt);
              let jt = new Jt(Xt, Qt, tt, Dt);
              return qt & Et.IncludeAnonymous || !jt.type.isAnonymous ? jt : jt.nextChild(et < 0 ? Xt.children.length - 1 : 0, et, Vt, Ot, qt)
            }
          }
          if (qt & Et.IncludeAnonymous || !Dt.type.isAnonymous) return null;
          if (tt = Dt.index >= 0 ? Dt.index + et : et < 0 ? -1 : Dt._parent._tree.children.length, Dt = Dt._parent, !Dt) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(tt) {
        return this.nextChild(0, 1, tt, 2)
      }
      childBefore(tt) {
        return this.nextChild(this._tree.children.length - 1, -1, tt, -2)
      }
      prop(tt) {
        return this._tree.prop(tt)
      }
      enter(tt, et) {
        let Vt, Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Ot & Et.IgnoreOverlays) && (Vt = dt.get(this._tree)) && Vt.overlay) {
          let qt = tt - this.from,
            Dt = Ot & Et.EnterBracketed && Vt.bracketed;
          for (let {
              from: tt,
              to: Ot
            }
            of Vt.overlay)
            if ((et > 0 || Dt ? tt <= qt : tt < qt) && (et < 0 || Dt ? Ot >= qt : Ot > qt)) return new Jt(Vt.tree, Vt.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, tt, et, Ot)
      }
      nextSignificantParent() {
        let tt = this;
        for (; tt.type.isAnonymous && tt._parent;) tt = tt._parent;
        return tt
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

    function Ct(tt, et, Vt, Ot) {
      let qt = tt.cursor(),
        Dt = [];
      if (!qt.firstChild()) return Dt;
      if (null != Vt)
        for (let mt = !1; !mt;)
          if (mt = qt.type.is(Vt), !qt.nextSibling()) return Dt;
      for (;;) {
        if (null != Ot && qt.type.is(Ot)) return Dt;
        if (qt.type.is(et) && Dt.push(qt.node), !qt.nextSibling()) return null == Ot ? Dt : []
      }
    }

    function ut(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : et.length - 1;
      for (let Ot = tt; Vt >= 0; Ot = Ot.parent) {
        if (!Ot) return !1;
        if (!Ot.type.isAnonymous) {
          if (et[Vt] && et[Vt] != Ot.name) return !1;
          Vt--
        }
      }
      return !0
    }
    class Kt {
      constructor(tt, et, Vt, Ot) {
        this.parent = tt, this.buffer = et, this.index = Vt, this.start = Ot
      }
    }
    class ht extends bt {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(tt, et, Vt) {
        super(), this.context = tt, this._parent = et, this.index = Vt, this.type = tt.buffer.set.types[tt.buffer.buffer[Vt]]
      }
      child(tt, et, Vt) {
        let {
          buffer: Ot
        } = this.context, qt = Ot.findChild(this.index + 4, Ot.buffer[this.index + 3], tt, et - this.context.start, Vt);
        return qt < 0 ? null : new ht(this.context, this, qt)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(tt) {
        return this.child(1, tt, 2)
      }
      childBefore(tt) {
        return this.child(-1, tt, -2)
      }
      prop(tt) {
        return this.type.prop(tt)
      }
      enter(tt, et) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & Et.ExcludeBuffers) return null;
        let {
          buffer: Vt
        } = this.context, Ot = Vt.findChild(this.index + 4, Vt.buffer[this.index + 3], et > 0 ? 1 : -1, tt - this.context.start, et);
        return Ot < 0 ? null : new ht(this.context, this, Ot)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(tt) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + tt, tt, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: tt
        } = this.context, et = tt.buffer[this.index + 3];
        return et < (this._parent ? tt.buffer[this._parent.index + 3] : tt.buffer.length) ? new ht(this.context, this._parent, et) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: tt
        } = this.context, et = this._parent ? this._parent.index + 4 : 0;
        return this.index == et ? this.externalSibling(-1) : new ht(this.context, this._parent, tt.findChild(et, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let tt = [],
          et = [],
          {
            buffer: Vt
          } = this.context,
          Ot = this.index + 4,
          qt = Vt.buffer[this.index + 3];
        if (qt > Ot) {
          let Dt = Vt.buffer[this.index + 1];
          tt.push(Vt.slice(Ot, qt, Dt)), et.push(0)
        }
        return new ft(this.type, tt, et, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function vt(tt) {
      if (!tt.length) return null;
      let et = 0,
        Vt = tt[0];
      for (let Dt = 1; Dt < tt.length; Dt++) {
        let Ot = tt[Dt];
        (Ot.from > Vt.from || Ot.to < Vt.to) && (Vt = Ot, et = Dt)
      }
      let Ot = Vt instanceof Jt && Vt.index < 0 ? null : Vt.parent,
        qt = tt.slice();
      return Ot ? qt[et] = Ot : qt.splice(et, 1), new Wt(qt, Vt)
    }
    class Wt {
      constructor(tt, et) {
        this.heads = tt, this.node = et
      }
      get next() {
        return vt(this.heads)
      }
    }
    class St {
      get name() {
        return this.type.name
      }
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = et & ~Et.EnterBracketed, tt instanceof Jt) this.yieldNode(tt);
        else {
          this._tree = tt.context.parent, this.buffer = tt.context;
          for (let et = tt._parent; et; et = et._parent) this.stack.unshift(et.index);
          this.bufferNode = tt, this.yieldBuf(tt.index)
        }
      }
      yieldNode(tt) {
        return !!tt && (this._tree = tt, this.type = tt.type, this.from = tt.from, this.to = tt.to, !0)
      }
      yieldBuf(tt, et) {
        this.index = tt;
        let {
          start: Vt,
          buffer: Ot
        } = this.buffer;
        return this.type = et || Ot.set.types[Ot.buffer[tt]], this.from = Vt + Ot.buffer[tt + 1], this.to = Vt + Ot.buffer[tt + 2], !0
      }
      yield(tt) {
        return !!tt && (tt instanceof Jt ? (this.buffer = null, this.yieldNode(tt)) : (this.buffer = tt.context, this.yieldBuf(tt.index, tt.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(tt, et, Vt) {
        if (!this.buffer) return this.yield(this._tree.nextChild(tt < 0 ? this._tree._tree.children.length - 1 : 0, tt, et, Vt, this.mode));
        let {
          buffer: Ot
        } = this.buffer, qt = Ot.findChild(this.index + 4, Ot.buffer[this.index + 3], tt, et - this.buffer.start, Vt);
        return !(qt < 0) && (this.stack.push(this.index), this.yieldBuf(qt))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(tt) {
        return this.enterChild(1, tt, 2)
      }
      childBefore(tt) {
        return this.enterChild(-1, tt, -2)
      }
      enter(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(Vt & Et.ExcludeBuffers) && this.enterChild(1, tt, et) : this.yield(this._tree.enter(tt, et, Vt))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & Et.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let tt = this.mode & Et.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(tt)
      }
      sibling(tt) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + tt, tt, 0, 4, this.mode));
        let {
          buffer: et
        } = this.buffer, Vt = this.stack.length - 1;
        if (tt < 0) {
          let tt = Vt < 0 ? 0 : this.stack[Vt] + 4;
          if (this.index != tt) return this.yieldBuf(et.findChild(tt, this.index, -1, 0, 4))
        } else {
          let tt = et.buffer[this.index + 3];
          if (tt < (Vt < 0 ? et.buffer.length : et.buffer[this.stack[Vt] + 3])) return this.yieldBuf(tt)
        }
        return Vt < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + tt, tt, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(tt) {
        let et, Vt, {
          buffer: Ot
        } = this;
        if (Ot) {
          if (tt > 0) {
            if (this.index < Ot.buffer.buffer.length) return !1
          } else
            for (let tt = 0; tt < this.index; tt++)
              if (Ot.buffer.buffer[tt + 3] < this.index) return !1;
          ({
            index: et,
            parent: Vt
          } = Ot)
        } else({
          index: et,
          _parent: Vt
        } = this._tree);
        for (; Vt;
          ({
            index: et,
            _parent: Vt
          } = Vt))
          if (et > -1)
            for (let Ot = et + tt, qt = tt < 0 ? -1 : Vt._tree.children.length; Ot != qt; Ot += tt) {
              let tt = Vt._tree.children[Ot];
              if (this.mode & Et.IncludeAnonymous || tt instanceof yt || !tt.type.isAnonymous || ct(tt)) return !1
            }
        return !0
      }
      move(tt, et) {
        if (et && this.enterChild(tt, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(tt)) return !0;
          if (this.atLastNode(tt) || !this.parent()) return !1
        }
      }
      next() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, tt)
      }
      prev() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, tt)
      }
      moveTo(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (et < 1 ? this.from >= tt : this.from > tt) || (et > -1 ? this.to <= tt : this.to < tt)) && this.parent(););
        for (; this.enterChild(1, tt, et););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let tt = this.bufferNode,
          et = null,
          Vt = 0;
        if (tt && tt.context == this.buffer) tt: for (let Ot = this.index, qt = this.stack.length; qt >= 0;) {
          for (let Dt = tt; Dt; Dt = Dt._parent)
            if (Dt.index == Ot) {
              if (Ot == this.index) return Dt;
              et = Dt, Vt = qt + 1;
              break tt
            } Ot = this.stack[--qt]
        }
        for (let Ot = Vt; Ot < this.stack.length; Ot++) et = new ht(this.buffer, et, this.stack[Ot]);
        return this.bufferNode = new ht(this.buffer, et, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(tt, et) {
        for (let Vt = 0;;) {
          let Ot = !1;
          if (this.type.isAnonymous || !1 !== tt(this)) {
            if (this.firstChild()) {
              Vt++;
              continue
            }
            this.type.isAnonymous || (Ot = !0)
          }
          for (;;) {
            if (Ot && et && et(this), Ot = this.type.isAnonymous, !Vt) return;
            if (this.nextSibling()) break;
            this.parent(), Vt--, Ot = !0
          }
        }
      }
      matchContext(tt) {
        if (!this.buffer) return ut(this.node.parent, tt);
        let {
          buffer: et
        } = this.buffer, {
          types: Vt
        } = et.set;
        for (let Ot = tt.length - 1, qt = this.stack.length - 1; Ot >= 0; qt--) {
          if (qt < 0) return ut(this._tree, tt, Ot);
          let Dt = Vt[et.buffer[this.stack[qt]]];
          if (!Dt.isAnonymous) {
            if (tt[Ot] && tt[Ot] != Dt.name) return !1;
            Ot--
          }
        }
        return !0
      }
    }

    function ct(tt) {
      return tt.children.some((tt => tt instanceof yt || !tt.type.isAnonymous || ct(tt)))
    }
    const Rt = new WeakMap;

    function It(tt, et) {
      if (!tt.isAnonymous || et instanceof yt || et.type != tt) return 1;
      let Vt = Rt.get(et);
      if (null == Vt) {
        Vt = 1;
        for (let Ot of et.children) {
          if (Ot.type != tt || !(Ot instanceof ft)) {
            Vt = 1;
            break
          }
          Vt += It(tt, Ot)
        }
        Rt.set(et, Vt)
      }
      return Vt
    }

    function Pt(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
      let Ht = 0;
      for (let Et = Ot; Et < qt; Et++) Ht += It(tt, et[Et]);
      let Xt = Math.ceil(1.5 * Ht / 8),
        Qt = [],
        lt = [];
      return function et(Vt, Ot, qt, mt, dt) {
        for (let Ht = qt; Ht < mt;) {
          let qt = Ht,
            Et = Ot[Ht],
            ft = It(tt, Vt[Ht]);
          for (Ht++; Ht < mt; Ht++) {
            let et = It(tt, Vt[Ht]);
            if (ft + et >= Xt) break;
            ft += et
          }
          if (Ht == qt + 1) {
            if (ft > Xt) {
              let tt = Vt[qt];
              et(tt.children, tt.positions, 0, tt.children.length, Ot[qt] + dt);
              continue
            }
            Qt.push(Vt[qt])
          } else {
            let et = Ot[Ht - 1] + Vt[Ht - 1].length - Et;
            Qt.push(Pt(tt, Vt, Ot, qt, Ht, Et, et, null, jt))
          }
          lt.push(Et + dt - Dt)
        }
      }(et, Vt, Ot, qt, 0), (dt || jt)(Qt, lt, mt)
    }
    class Zt {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(tt, et, Vt) {
        let Ot = this.map.get(tt);
        Ot || this.map.set(tt, Ot = new Map), Ot.set(et, Vt)
      }
      getBuffer(tt, et) {
        let Vt = this.map.get(tt);
        return Vt && Vt.get(et)
      }
      set(tt, et) {
        tt instanceof ht ? this.setBuffer(tt.context.buffer, tt.index, et) : tt instanceof Jt && this.map.set(tt.tree, et)
      }
      get(tt) {
        return tt instanceof ht ? this.getBuffer(tt.context.buffer, tt.index) : tt instanceof Jt ? this.map.get(tt.tree) : void 0
      }
      cursorSet(tt, et) {
        tt.buffer ? this.setBuffer(tt.buffer.buffer, tt.index, et) : this.map.set(tt.tree, et)
      }
      cursorGet(tt) {
        return tt.buffer ? this.getBuffer(tt.buffer.buffer, tt.index) : this.map.get(tt.tree)
      }
    }
    class Lt {
      constructor(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = tt, this.to = et, this.tree = Vt, this.offset = Ot, this.open = (qt ? 1 : 0) | (Dt ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = [new Lt(0, tt.length, tt, 0, !1, Vt)];
        for (let qt of et) qt.to > tt.length && Ot.push(qt);
        return Ot
      }
      static applyChanges(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!et.length) return tt;
        let Ot = [],
          qt = 1,
          Dt = tt.length ? tt[0] : null;
        for (let mt = 0, dt = 0, jt = 0;; mt++) {
          let Ht = mt < et.length ? et[mt] : null,
            Xt = Ht ? Ht.fromA : 1e9;
          if (Xt - dt >= Vt)
            for (; Dt && Dt.from < Xt;) {
              let et = Dt;
              if (dt >= et.from || Xt <= et.to || jt) {
                let tt = Math.max(et.from, dt) - jt,
                  Vt = Math.min(et.to, Xt) - jt;
                et = tt >= Vt ? null : new Lt(tt, Vt, et.tree, et.offset + jt, mt > 0, !!Ht)
              }
              if (et && Ot.push(et), Dt.to > Xt) break;
              Dt = qt < tt.length ? tt[qt++] : null
            }
          if (!Ht) break;
          dt = Ht.toA, jt = Ht.toA - Ht.toB
        }
        return Ot
      }
    }
    class Ft {
      startParse(tt, et, Vt) {
        return "string" == typeof tt && (tt = new kt(tt)), Vt = Vt ? Vt.length ? Vt.map((tt => new Dt(tt.from, tt.to))) : [new Dt(0, 0)] : [new Dt(0, tt.length)], this.createParse(tt, et || [], Vt)
      }
      parse(tt, et, Vt) {
        let Ot = this.startParse(tt, et, Vt);
        for (;;) {
          let tt = Ot.advance();
          if (tt) return tt
        }
      }
    }
    class kt {
      constructor(tt) {
        this.string = tt
      }
      get length() {
        return this.string.length
      }
      chunk(tt) {
        return this.string.slice(tt)
      }
      get lineChunks() {
        return !1
      }
      read(tt, et) {
        return this.string.slice(tt, et)
      }
    }
    new mt({
      perNode: !0
    })
  },
  41577: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => lt,
      f: () => jt,
      h: () => Qt,
      i: () => Rt
    });
    var Ot = Vt(41570);
    let qt = 0;
    class Dt {
      constructor(tt, et, Vt, Ot) {
        this.name = tt, this.set = et, this.base = Vt, this.modified = Ot, this.id = qt++
      }
      toString() {
        let {
          name: tt
        } = this;
        for (let et of this.modified) et.name && (tt = `${et.name}(${tt})`);
        return tt
      }
      static define(tt, et) {
        let Vt = "string" == typeof tt ? tt : "?";
        if (tt instanceof Dt && (et = tt), null === et || void 0 === et ? void 0 : et.base) throw new Error("Can not derive from a modified tag");
        let Ot = new Dt(Vt, [], null, []);
        if (Ot.set.push(Ot), et)
          for (let qt of et.set) Ot.set.push(qt);
        return Ot
      }
      static defineModifier(tt) {
        let et = new dt(tt);
        return tt => tt.modified.indexOf(et) > -1 ? tt : dt.get(tt.base || tt, tt.modified.concat(et).sort(((tt, et) => tt.id - et.id)))
      }
    }
    let mt = 0;
    class dt {
      constructor(tt) {
        this.name = tt, this.instances = [], this.id = mt++
      }
      static get(tt, et) {
        if (!et.length) return tt;
        let Vt = et[0].instances.find((Vt => {
          return Vt.base == tt && (Ot = et, qt = Vt.modified, Ot.length == qt.length && Ot.every(((tt, et) => tt == qt[et])));
          var Ot, qt
        }));
        if (Vt) return Vt;
        let Ot = [],
          qt = new Dt(tt.name, Ot, tt, et);
        for (let Dt of et) Dt.instances.push(qt);
        let mt = function(tt) {
          let et = [
            []
          ];
          for (let Vt = 0; Vt < tt.length; Vt++)
            for (let Ot = 0, qt = et.length; Ot < qt; Ot++) et.push(et[Ot].concat(tt[Vt]));
          return et.sort(((tt, et) => et.length - tt.length))
        }(et);
        for (let Dt of tt.set)
          if (!Dt.modified.length)
            for (let tt of mt) Ot.push(dt.get(Dt, tt));
        return qt
      }
    }

    function jt(tt) {
      let et = Object.create(null);
      for (let Vt in tt) {
        let Ot = tt[Vt];
        Array.isArray(Ot) || (Ot = [Ot]);
        for (let tt of Vt.split(" "))
          if (tt) {
            let Vt = [],
              qt = 2,
              Dt = tt;
            for (let et = 0;;) {
              if ("..." == Dt && et > 0 && et + 3 == tt.length) {
                qt = 1;
                break
              }
              let Ot = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(Dt);
              if (!Ot) throw new RangeError("Invalid path: " + tt);
              if (Vt.push("*" == Ot[0] ? "" : '"' == Ot[0][0] ? JSON.parse(Ot[0]) : Ot[0]), et += Ot[0].length, et == tt.length) break;
              let mt = tt[et++];
              if (et == tt.length && "!" == mt) {
                qt = 0;
                break
              }
              if ("/" != mt) throw new RangeError("Invalid path: " + tt);
              Dt = tt.slice(et)
            }
            let mt = Vt.length - 1,
              dt = Vt[mt];
            if (!dt) throw new RangeError("Invalid path: " + tt);
            let jt = new Xt(Ot, qt, mt > 0 ? Vt.slice(0, mt) : null);
            et[dt] = jt.sort(et[dt])
          }
      }
      return Ht.add(et)
    }
    const Ht = new Ot.f({
      combine(tt, et) {
        let Vt, Ot, qt;
        for (; tt || et;) {
          if (!tt || et && tt.depth >= et.depth ? (qt = et, et = et.next) : (qt = tt, tt = tt.next), Vt && Vt.mode == qt.mode && !qt.context && !Vt.context) continue;
          let Dt = new Xt(qt.tags, qt.mode, qt.context);
          Vt ? Vt.next = Dt : Ot = Dt, Vt = Dt
        }
        return Ot
      }
    });
    class Xt {
      constructor(tt, et, Vt, Ot) {
        this.tags = tt, this.mode = et, this.context = Vt, this.next = Ot
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(tt) {
        return !tt || tt.depth < this.depth ? (this.next = tt, this) : (tt.next = this.sort(tt.next), tt)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function Qt(tt, et) {
      let Vt = Object.create(null);
      for (let Dt of tt)
        if (Array.isArray(Dt.tag))
          for (let tt of Dt.tag) Vt[tt.id] = Dt.class;
        else Vt[Dt.tag.id] = Dt.class;
      let {
        scope: Ot,
        all: qt = null
      } = et || {};
      return {
        style: tt => {
          let et = qt;
          for (let Ot of tt)
            for (let tt of Ot.set) {
              let Ot = Vt[tt.id];
              if (Ot) {
                et = et ? et + " " + Ot : Ot;
                break
              }
            }
          return et
        },
        scope: Ot
      }
    }

    function lt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tt.length,
        Dt = new Et(Ot, Array.isArray(et) ? et : [et], Vt);
      Dt.highlightRange(tt.cursor(), Ot, qt, "", Dt.highlighters), Dt.flush(qt)
    }
    Xt.empty = new Xt([], 2, null);
    class Et {
      constructor(tt, et, Vt) {
        this.at = tt, this.highlighters = et, this.span = Vt, this.class = ""
      }
      startSpan(tt, et) {
        et != this.class && (this.flush(tt), tt > this.at && (this.at = tt), this.class = et)
      }
      flush(tt) {
        tt > this.at && this.class && this.span(this.at, tt, this.class)
      }
      highlightRange(tt, et, Vt, qt, Dt) {
        let {
          type: mt,
          from: dt,
          to: jt
        } = tt;
        if (dt >= Vt || jt <= et) return;
        mt.isTop && (Dt = this.highlighters.filter((tt => !tt.scope || tt.scope(mt))));
        let Qt = qt,
          lt = function(tt) {
            let et = tt.type.prop(Ht);
            for (; et && et.context && !tt.matchContext(et.context);) et = et.next;
            return et || null
          }(tt) || Xt.empty,
          Et = function(tt, et) {
            let Vt = null;
            for (let Ot of tt) {
              let tt = Ot.style(et);
              tt && (Vt = Vt ? Vt + " " + tt : tt)
            }
            return Vt
          }(Dt, lt.tags);
        if (Et && (Qt && (Qt += " "), Qt += Et, 1 == lt.mode && (qt += (qt ? " " : "") + Et)), this.startSpan(Math.max(et, dt), Qt), lt.opaque) return;
        let ft = tt.tree && tt.tree.prop(Ot.f.mounted);
        if (ft && ft.overlay) {
          let Ot = tt.node.enter(ft.overlay[0].from + dt, 1),
            mt = this.highlighters.filter((tt => !tt.scope || tt.scope(ft.tree.type))),
            Ht = tt.firstChild();
          for (let Xt = 0, lt = dt;; Xt++) {
            let Et = Xt < ft.overlay.length ? ft.overlay[Xt] : null,
              wt = Et ? Et.from + dt : jt,
              yt = Math.max(et, lt),
              Nt = Math.min(Vt, wt);
            if (yt < Nt && Ht)
              for (; tt.from < Nt && (this.highlightRange(tt, yt, Nt, qt, Dt), this.startSpan(Math.min(Nt, tt.to), Qt), !(tt.to >= wt) && tt.nextSibling()););
            if (!Et || wt > Vt) break;
            lt = Et.to + dt, lt > et && (this.highlightRange(Ot.cursor(), Math.max(et, Et.from + dt), Math.min(Vt, lt), "", mt), this.startSpan(Math.min(Vt, lt), Qt))
          }
          Ht && tt.parent()
        } else if (tt.firstChild()) {
          ft && (qt = "");
          do {
            if (!(tt.to <= et)) {
              if (tt.from >= Vt) break;
              this.highlightRange(tt, et, Vt, qt, Dt), this.startSpan(Math.min(Vt, tt.to), Qt)
            }
          } while (tt.nextSibling());
          tt.parent()
        }
      }
    }
    const ft = Dt.define,
      wt = ft(),
      yt = ft(),
      Nt = ft(yt),
      Mt = ft(yt),
      bt = ft(),
      Jt = ft(bt),
      Ct = ft(bt),
      ut = ft(),
      Kt = ft(ut),
      ht = ft(),
      vt = ft(),
      Wt = ft(),
      St = ft(Wt),
      ct = ft(),
      Rt = {
        comment: wt,
        lineComment: ft(wt),
        blockComment: ft(wt),
        docComment: ft(wt),
        name: yt,
        variableName: ft(yt),
        typeName: Nt,
        tagName: ft(Nt),
        propertyName: Mt,
        attributeName: ft(Mt),
        className: ft(yt),
        labelName: ft(yt),
        namespace: ft(yt),
        macroName: ft(yt),
        literal: bt,
        string: Jt,
        docString: ft(Jt),
        character: ft(Jt),
        attributeValue: ft(Jt),
        number: Ct,
        integer: ft(Ct),
        float: ft(Ct),
        bool: ft(bt),
        regexp: ft(bt),
        escape: ft(bt),
        color: ft(bt),
        url: ft(bt),
        keyword: ht,
        self: ft(ht),
        null: ft(ht),
        atom: ft(ht),
        unit: ft(ht),
        modifier: ft(ht),
        operatorKeyword: ft(ht),
        controlKeyword: ft(ht),
        definitionKeyword: ft(ht),
        moduleKeyword: ft(ht),
        operator: vt,
        derefOperator: ft(vt),
        arithmeticOperator: ft(vt),
        logicOperator: ft(vt),
        bitwiseOperator: ft(vt),
        compareOperator: ft(vt),
        updateOperator: ft(vt),
        definitionOperator: ft(vt),
        typeOperator: ft(vt),
        controlOperator: ft(vt),
        punctuation: Wt,
        separator: ft(Wt),
        bracket: St,
        angleBracket: ft(St),
        squareBracket: ft(St),
        paren: ft(St),
        brace: ft(St),
        content: ut,
        heading: Kt,
        heading1: ft(Kt),
        heading2: ft(Kt),
        heading3: ft(Kt),
        heading4: ft(Kt),
        heading5: ft(Kt),
        heading6: ft(Kt),
        contentSeparator: ft(ut),
        list: ft(ut),
        quote: ft(ut),
        emphasis: ft(ut),
        strong: ft(ut),
        link: ft(ut),
        monospace: ft(ut),
        strikethrough: ft(ut),
        inserted: ft(),
        deleted: ft(),
        changed: ft(),
        invalid: ft(),
        meta: ct,
        documentMeta: ft(ct),
        annotation: ft(ct),
        processingInstruction: ft(ct),
        definition: Dt.defineModifier("definition"),
        constant: Dt.defineModifier("constant"),
        function: Dt.defineModifier("function"),
        standard: Dt.defineModifier("standard"),
        local: Dt.defineModifier("local"),
        special: Dt.defineModifier("special")
      };
    for (let It in Rt) {
      let tt = Rt[It];
      tt instanceof Dt && (tt.name = It)
    }
    Qt([{
      tag: Rt.link,
      class: "tok-link"
    }, {
      tag: Rt.heading,
      class: "tok-heading"
    }, {
      tag: Rt.emphasis,
      class: "tok-emphasis"
    }, {
      tag: Rt.strong,
      class: "tok-strong"
    }, {
      tag: Rt.keyword,
      class: "tok-keyword"
    }, {
      tag: Rt.atom,
      class: "tok-atom"
    }, {
      tag: Rt.bool,
      class: "tok-bool"
    }, {
      tag: Rt.url,
      class: "tok-url"
    }, {
      tag: Rt.labelName,
      class: "tok-labelName"
    }, {
      tag: Rt.inserted,
      class: "tok-inserted"
    }, {
      tag: Rt.deleted,
      class: "tok-deleted"
    }, {
      tag: Rt.literal,
      class: "tok-literal"
    }, {
      tag: Rt.string,
      class: "tok-string"
    }, {
      tag: Rt.number,
      class: "tok-number"
    }, {
      tag: [Rt.regexp, Rt.escape, Rt.special(Rt.string)],
      class: "tok-string2"
    }, {
      tag: Rt.variableName,
      class: "tok-variableName"
    }, {
      tag: Rt.local(Rt.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: Rt.definition(Rt.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: Rt.special(Rt.variableName),
      class: "tok-variableName2"
    }, {
      tag: Rt.definition(Rt.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: Rt.typeName,
      class: "tok-typeName"
    }, {
      tag: Rt.namespace,
      class: "tok-namespace"
    }, {
      tag: Rt.className,
      class: "tok-className"
    }, {
      tag: Rt.macroName,
      class: "tok-macroName"
    }, {
      tag: Rt.propertyName,
      class: "tok-propertyName"
    }, {
      tag: Rt.operator,
      class: "tok-operator"
    }, {
      tag: Rt.comment,
      class: "tok-comment"
    }, {
      tag: Rt.meta,
      class: "tok-meta"
    }, {
      tag: Rt.invalid,
      class: "tok-invalid"
    }, {
      tag: Rt.punctuation,
      class: "tok-punctuation"
    }])
  },
  41591: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => dt.j,
      i: () => mt.u,
      j: () => mt.I,
      n: () => mt.J,
      p: () => dt.p,
      q: () => KV,
      u: () => dt.T,
      w: () => dt.sb
    });
    var Ot = Vt(1484),
      qt = Vt(1480),
      Dt = Vt(63),
      mt = Vt(41540),
      dt = Vt(41548),
      jt = Vt(41565),
      Ht = Vt(41570);

    function Xt(tt, et) {
      return Vt => {
        let {
          state: Ot,
          dispatch: qt
        } = Vt;
        if (Ot.readOnly) return !1;
        let Dt = tt(et, Ot);
        return !!Dt && (qt(Ot.update(Dt)), !0)
      }
    }
    const Qt = Xt(Nt, 0),
      lt = Xt(yt, 0),
      Et = Xt(((tt, et) => yt(tt, et, function(tt) {
        let et = [];
        for (let Vt of tt.selection.nw) {
          let Ot = tt.doc.lineAt(Vt.from),
            qt = Vt.to <= Ot.to ? Ot : tt.doc.lineAt(Vt.to);
          qt.from > Ot.from && qt.from == Vt.to && (qt = Vt.to == Ot.to + 1 ? Ot : tt.doc.lineAt(Vt.to - 1));
          let Dt = et.length - 1;
          Dt >= 0 && et[Dt].to > Ot.from ? et[Dt].to = qt.to : et.push({
            from: Ot.from + /^\s*/.exec(Ot.text)[0].length,
            to: qt.to
          })
        }
        return et
      }(et))), 0);

    function ft(tt, et) {
      let Vt = tt.languageDataAt("commentTokens", et, 1);
      return Vt.length ? Vt[0] : {}
    }
    const wt = 50;

    function yt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : et.selection.nw,
        Ot = Vt.map((tt => ft(et, tt.from).block));
      if (!Ot.every((tt => tt))) return null;
      let qt = Vt.map(((tt, Vt) => function(tt, et, Vt, Ot) {
        let qt, Dt, {
            open: mt,
            close: dt
          } = et,
          jt = tt.sliceDoc(Vt - wt, Vt),
          Ht = tt.sliceDoc(Ot, Ot + wt),
          Xt = /\s*$/.exec(jt)[0].length,
          Qt = /^\s*/.exec(Ht)[0].length,
          lt = jt.length - Xt;
        if (jt.slice(lt - mt.length, lt) == mt && Ht.slice(Qt, Qt + dt.length) == dt) return {
          open: {
            pos: Vt - Xt,
            margin: Xt && 1
          },
          close: {
            pos: Ot + Qt,
            margin: Qt && 1
          }
        };
        Ot - Vt <= 2 * wt ? qt = Dt = tt.sliceDoc(Vt, Ot) : (qt = tt.sliceDoc(Vt, Vt + wt), Dt = tt.sliceDoc(Ot - wt, Ot));
        let Et = /^\s*/.exec(qt)[0].length,
          ft = /\s*$/.exec(Dt)[0].length,
          yt = Dt.length - ft - dt.length;
        return qt.slice(Et, Et + mt.length) == mt && Dt.slice(yt, yt + dt.length) == dt ? {
          open: {
            pos: Vt + Et + mt.length,
            margin: /\s/.test(qt.charAt(Et + mt.length)) ? 1 : 0
          },
          close: {
            pos: Ot - ft - dt.length,
            margin: /\s/.test(Dt.charAt(yt - 1)) ? 1 : 0
          }
        } : null
      }(et, Ot[Vt], tt.from, tt.to)));
      if (2 != tt && !qt.every((tt => tt))) return {
        changes: et.changes(Vt.map(((tt, et) => qt[et] ? [] : [{
          from: tt.from,
          insert: Ot[et].open + " "
        }, {
          from: tt.to,
          insert: " " + Ot[et].close
        }])))
      };
      if (1 != tt && qt.some((tt => tt))) {
        let tt = [];
        for (let et, Vt = 0; Vt < qt.length; Vt++)
          if (et = qt[Vt]) {
            let qt = Ot[Vt],
              {
                open: Dt,
                close: mt
              } = et;
            tt.push({
              from: Dt.pos - qt.open.length,
              to: Dt.pos + Dt.margin
            }, {
              from: mt.pos - mt.margin,
              to: mt.pos + qt.close.length
            })
          } return {
          changes: tt
        }
      }
      return null
    }

    function Nt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : et.selection.nw,
        Ot = [],
        qt = -1;
      tt: for (let {
          from: Dt,
          to: mt
        }
        of Vt) {
        let tt, Vt = Ot.length,
          dt = 1e9;
        for (let jt = Dt; jt <= mt;) {
          let Vt = et.doc.lineAt(jt);
          if (void 0 == tt && (tt = ft(et, Vt.from).line, !tt)) continue tt;
          if (Vt.from > qt && (Dt == mt || mt > Vt.from)) {
            qt = Vt.from;
            let et = /^\s*/.exec(Vt.text)[0].length,
              Dt = et == Vt.length,
              mt = Vt.text.slice(et, et + tt.length) == tt ? et : -1;
            et < Vt.text.length && et < dt && (dt = et), Ot.push({
              line: Vt,
              comment: mt,
              token: tt,
              indent: et,
              empty: Dt,
              single: !1
            })
          }
          jt = Vt.to + 1
        }
        if (dt < 1e9)
          for (let et = Vt; et < Ot.length; et++) Ot[et].indent < Ot[et].line.text.length && (Ot[et].indent = dt);
        Ot.length == Vt + 1 && (Ot[Vt].single = !0)
      }
      if (2 != tt && Ot.some((tt => tt.comment < 0 && (!tt.empty || tt.single)))) {
        let tt = [];
        for (let {
            line: et,
            token: qt,
            indent: Dt,
            empty: mt,
            single: dt
          }
          of Ot) !dt && mt || tt.push({
          from: et.from + Dt,
          insert: qt + " "
        });
        let Vt = et.changes(tt);
        return {
          changes: Vt,
          selection: et.selection.map(Vt, 1)
        }
      }
      if (1 != tt && Ot.some((tt => tt.comment >= 0))) {
        let tt = [];
        for (let {
            line: et,
            comment: Vt,
            token: qt
          }
          of Ot)
          if (Vt >= 0) {
            let Ot = et.from + Vt,
              Dt = Ot + qt.length;
            " " == et.text[Dt - et.from] && Dt++, tt.push({
              from: Ot,
              to: Dt
            })
          } return {
          changes: tt
        }
      }
      return null
    }
    const Mt = mt.c.define(),
      bt = mt.c.define(),
      Jt = mt.s.define(),
      Ct = mt.s.define({
        combine: tt => (0, mt.Y)(tt, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (tt, et) => et
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (tt, et) => (Vt, Ot) => tt(Vt, Ot) || et(Vt, Ot)
        })
      }),
      ut = mt.J.define({
        create: () => ot.empty,
        update(tt, et) {
          let Vt = et.state.facet(Ct),
            Ot = et.annotation(Mt);
          if (Ot) {
            let qt = ct.fromTransaction(et, Ot.selection),
              Dt = Ot.side,
              mt = 0 == Dt ? tt.undone : tt.done;
            return mt = qt ? Rt(mt, mt.length, Vt.minDepth, qt) : Lt(mt, et.startState.selection), new ot(0 == Dt ? Ot.rest : mt, 0 == Dt ? mt : Ot.rest)
          }
          let qt = et.annotation(bt);
          if ("full" != qt && "before" != qt || (tt = tt.isolate()), !1 === et.annotation(mt.O.addToHistory)) return et.changes.empty ? tt : tt.addMapping(et.changes.desc);
          let Dt = ct.fromTransaction(et),
            dt = et.annotation(mt.O.time),
            jt = et.annotation(mt.O.userEvent);
          return Dt ? tt = tt.addChanges(Dt, dt, jt, Vt, et) : et.selection && (tt = tt.addSelection(et.startState.selection, dt, jt, Vt.newGroupDelay)), "full" != qt && "after" != qt || (tt = tt.isolate()), tt
        },
        toJSON: tt => ({
          done: tt.done.map((tt => tt.toJSON())),
          undone: tt.undone.map((tt => tt.toJSON()))
        }),
        fromJSON: tt => new ot(tt.done.map(ct.fromJSON), tt.undone.map(ct.fromJSON))
      });

    function Kt(tt, et) {
      return function(Vt) {
        let {
          state: Ot,
          dispatch: qt
        } = Vt;
        if (!et && Ot.readOnly) return !1;
        let Dt = Ot.field(ut, !1);
        if (!Dt) return !1;
        let mt = Dt.pop(tt, Ot, et);
        return !!mt && (qt(mt), !0)
      }
    }
    const ht = Kt(0, !1),
      vt = Kt(1, !1),
      Wt = Kt(0, !0),
      St = Kt(1, !0);
    class ct {
      constructor(tt, et, Vt, Ot, qt) {
        this.changes = tt, this.effects = et, this.mapped = Vt, this.startSelection = Ot, this.selectionsAfter = qt
      }
      setSelAfter(tt) {
        return new ct(this.changes, this.effects, this.mapped, this.startSelection, tt)
      }
      toJSON() {
        var tt, et, Vt;
        return {
          changes: null === (tt = this.changes) || void 0 === tt ? void 0 : tt.toJSON(),
          mapped: null === (et = this.mapped) || void 0 === et ? void 0 : et.toJSON(),
          startSelection: null === (Vt = this.startSelection) || void 0 === Vt ? void 0 : Vt.toJSON(),
          selectionsAfter: this.selectionsAfter.map((tt => tt.toJSON()))
        }
      }
      static fromJSON(tt) {
        return new ct(tt.changes && mt.ChangeSet.fromJSON(tt.changes), [], tt.mapped && mt.g.fromJSON(tt.mapped), tt.startSelection && mt.n.fromJSON(tt.startSelection), tt.selectionsAfter.map(mt.n.fromJSON))
      }
      static fromTransaction(tt, et) {
        let Vt = Pt;
        for (let Ot of tt.startState.facet(Jt)) {
          let et = Ot(tt);
          et.length && (Vt = Vt.concat(et))
        }
        return !Vt.length && tt.changes.empty ? null : new ct(tt.changes.invert(tt.startState.doc), Vt, void 0, et || tt.startState.selection, Pt)
      }
      static selection(tt) {
        return new ct(void 0, Pt, void 0, void 0, tt)
      }
    }

    function Rt(tt, et, Vt, Ot) {
      let qt = et + 1 > Vt + 20 ? et - Vt - 1 : 0,
        Dt = tt.slice(qt, et);
      return Dt.push(Ot), Dt
    }

    function It(tt, et) {
      return tt.length ? et.length ? tt.concat(et) : tt : et
    }
    const Pt = [],
      Zt = 200;

    function Lt(tt, et) {
      if (tt.length) {
        let Vt = tt[tt.length - 1],
          Ot = Vt.selectionsAfter.slice(Math.max(0, Vt.selectionsAfter.length - Zt));
        return Ot.length && Ot[Ot.length - 1].eq(et) ? tt : (Ot.push(et), Rt(tt, tt.length - 1, 1e9, Vt.setSelAfter(Ot)))
      }
      return [ct.selection([et])]
    }

    function Ft(tt) {
      let et = tt[tt.length - 1],
        Vt = tt.slice();
      return Vt[tt.length - 1] = et.setSelAfter(et.selectionsAfter.slice(0, et.selectionsAfter.length - 1)), Vt
    }

    function kt(tt, et) {
      if (!tt.length) return tt;
      let Vt = tt.length,
        Ot = Pt;
      for (; Vt;) {
        let qt = Gt(tt[Vt - 1], et, Ot);
        if (qt.changes && !qt.changes.empty || qt.effects.length) {
          let et = tt.slice(0, Vt);
          return et[Vt - 1] = qt, et
        }
        et = qt.mapped, Vt--, Ot = qt.selectionsAfter
      }
      return Ot.length ? [ct.selection(Ot)] : Pt
    }

    function Gt(tt, et, Vt) {
      let Ot = It(tt.selectionsAfter.length ? tt.selectionsAfter.map((tt => tt.map(et))) : Pt, Vt);
      if (!tt.changes) return ct.selection(Ot);
      let qt = tt.changes.map(et),
        Dt = et.mapDesc(tt.changes, !0),
        dt = tt.mapped ? tt.mapped.composeDesc(Dt) : Dt;
      return new ct(qt, mt.I.mapEffects(tt.effects, et), dt, tt.startSelection.map(Dt), Ot)
    }
    const zt = /^(input\.type|delete)($|\.)/;
    class ot {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = tt, this.undone = et, this.prevTime = Vt, this.prevUserEvent = Ot
      }
      isolate() {
        return this.prevTime ? new ot(this.done, this.undone) : this
      }
      addChanges(tt, et, Vt, Ot, qt) {
        let Dt = this.done,
          dt = Dt[Dt.length - 1];
        return Dt = dt && dt.changes && !dt.changes.empty && tt.changes && (!Vt || zt.test(Vt)) && (!dt.selectionsAfter.length && et - this.prevTime < Ot.newGroupDelay && Ot.joinToEvent(qt, function(tt, et) {
          let Vt = [],
            Ot = !1;
          return tt.iterChangedRanges(((tt, et) => Vt.push(tt, et))), et.iterChangedRanges(((tt, et, qt, Dt) => {
            for (let mt = 0; mt < Vt.length;) {
              let tt = Vt[mt++],
                et = Vt[mt++];
              Dt >= tt && qt <= et && (Ot = !0)
            }
          })), Ot
        }(dt.changes, tt.changes)) || "input.type.compose" == Vt) ? Rt(Dt, Dt.length - 1, Ot.minDepth, new ct(tt.changes.compose(dt.changes), It(mt.I.mapEffects(tt.effects, dt.changes), dt.effects), dt.mapped, dt.startSelection, Pt)) : Rt(Dt, Dt.length, Ot.minDepth, tt), new ot(Dt, Pt, et, Vt)
      }
      addSelection(tt, et, Vt, Ot) {
        let qt = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Pt;
        return qt.length > 0 && et - this.prevTime < Ot && Vt == this.prevUserEvent && Vt && /^select($|\.)/.test(Vt) && (Dt = qt[qt.length - 1], mt = tt, Dt.nw.length == mt.nw.length && 0 === Dt.nw.filter(((tt, et) => tt.empty != mt.nw[et].empty)).length) ? this : new ot(Lt(this.done, tt), this.undone, et, Vt);
        var Dt, mt
      }
      addMapping(tt) {
        return new ot(kt(this.done, tt), kt(this.undone, tt), this.prevTime, this.prevUserEvent)
      }
      pop(tt, et, Vt) {
        let Ot = 0 == tt ? this.done : this.undone;
        if (0 == Ot.length) return null;
        let qt = Ot[Ot.length - 1],
          Dt = qt.selectionsAfter[0] || (qt.startSelection ? qt.startSelection.map(qt.changes.invertedDesc, 1) : et.selection);
        if (Vt && qt.selectionsAfter.length) return et.update({
          selection: qt.selectionsAfter[qt.selectionsAfter.length - 1],
          annotations: Mt.of({
            side: tt,
            rest: Ft(Ot),
            selection: Dt
          }),
          userEvent: 0 == tt ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (qt.changes) {
          let Vt = 1 == Ot.length ? Pt : Ot.slice(0, Ot.length - 1);
          return qt.mapped && (Vt = kt(Vt, qt.mapped)), et.update({
            changes: qt.changes,
            selection: qt.startSelection,
            effects: qt.effects,
            annotations: Mt.of({
              side: tt,
              rest: Vt,
              selection: Dt
            }),
            filter: !1,
            userEvent: 0 == tt ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    ot.empty = new ot(Pt, Pt);
    const rt = [{
      key: "Mod-z",
      run: ht,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: vt,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: vt,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: Wt,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: St,
      preventDefault: !0
    }];

    function Ut(tt, et) {
      return mt.n.create(tt.nw.map(et), tt.mainIndex)
    }

    function At(tt, et) {
      return tt.update({
        selection: et,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function it(tt, et) {
      let {
        state: Vt,
        dispatch: Ot
      } = tt, qt = Ut(Vt.selection, et);
      return !qt.eq(Vt.selection, !0) && (Ot(At(Vt, qt)), !0)
    }

    function Yt(tt, et) {
      return mt.n.cursor(et ? tt.to : tt.from)
    }

    function Bt(tt, et) {
      return it(tt, (Vt => Vt.empty ? tt.moveByChar(Vt, et) : Yt(Vt, et)))
    }

    function pt(tt) {
      return tt.textDirectionAt(tt.state.selection.main.head) == dt.i.LTR
    }
    const xt = tt => Bt(tt, !pt(tt)),
      Tt = tt => Bt(tt, pt(tt));

    function gt(tt, et) {
      return it(tt, (Vt => Vt.empty ? tt.moveByGroup(Vt, et) : Yt(Vt, et)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function st(tt, et, Vt) {
      if (et.type.prop(Vt)) return !0;
      let Ot = et.to - et.from;
      return Ot && (Ot > 2 || /[^\s,.;:]/.test(tt.sliceDoc(et.from, et.to))) || et.firstChild
    }

    function nt(tt, et, Vt) {
      let Ot, qt, Dt = (0, jt.jb)(tt).resolveInner(et.head),
        dt = Vt ? Ht.f.closedBy : Ht.f.openedBy;
      for (let mt = et.head;;) {
        let et = Vt ? Dt.childAfter(mt) : Dt.childBefore(mt);
        if (!et) break;
        st(tt, et, dt) ? Dt = et : mt = Vt ? et.to : et.from
      }
      return qt = Dt.type.prop(dt) && (Ot = Vt ? (0, jt.cb)(tt, Dt.from, 1) : (0, jt.cb)(tt, Dt.to, -1)) && Ot.matched ? Vt ? Ot.end.to : Ot.end.from : Vt ? Dt.to : Dt.from, mt.n.cursor(qt, Vt ? -1 : 1)
    }

    function te(tt, et) {
      return it(tt, (Vt => {
        if (!Vt.empty) return Yt(Vt, et);
        let Ot = tt.moveVertically(Vt, et);
        return Ot.head != Vt.head ? Ot : tt.moveToLineBoundary(Vt, et)
      }))
    }
    const ee = tt => te(tt, !1),
      Ve = tt => te(tt, !0);

    function Oe(tt) {
      let et, Vt = tt.scrollDOM.clientHeight < tt.scrollDOM.scrollHeight - 2,
        Ot = 0,
        qt = 0;
      if (Vt) {
        for (let et of tt.state.facet(dt.j.scrollMargins)) {
          let Vt = et(tt);
          (null === Vt || void 0 === Vt ? void 0 : Vt.top) && (Ot = Math.max(null === Vt || void 0 === Vt ? void 0 : Vt.top, Ot)), (null === Vt || void 0 === Vt ? void 0 : Vt.bottom) && (qt = Math.max(null === Vt || void 0 === Vt ? void 0 : Vt.bottom, qt))
        }
        et = tt.scrollDOM.clientHeight - Ot - qt
      } else et = (tt.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Ot,
        marginBottom: qt,
        selfScroll: Vt,
        height: Math.max(tt.defaultLineHeight, et - 5)
      }
    }

    function qe(tt, et) {
      let Vt, Ot = Oe(tt),
        {
          state: qt
        } = tt,
        Dt = Ut(qt.selection, (Vt => Vt.empty ? tt.moveVertically(Vt, et, Ot.height) : Yt(Vt, et)));
      if (Dt.eq(qt.selection)) return !1;
      if (Ot.selfScroll) {
        let et = tt.coordsAtPos(qt.selection.main.head),
          mt = tt.scrollDOM.getBoundingClientRect(),
          jt = mt.top + Ot.marginTop,
          Ht = mt.bottom - Ot.marginBottom;
        et && et.top > jt && et.bottom < Ht && (Vt = dt.j.scrollIntoView(Dt.main.head, {
          y: "start",
          yMargin: et.top - jt
        }))
      }
      return tt.dispatch(At(qt, Dt), {
        effects: Vt
      }), !0
    }
    const De = tt => qe(tt, !1),
      me = tt => qe(tt, !0);

    function de(tt, et, Vt) {
      let Ot = tt.lineBlockAt(et.head),
        qt = tt.moveToLineBoundary(et, Vt);
      if (qt.head == et.head && qt.head != (Vt ? Ot.to : Ot.from) && (qt = tt.moveToLineBoundary(et, Vt, !1)), !Vt && qt.head == Ot.from && Ot.length) {
        let Vt = /^\s*/.exec(tt.state.sliceDoc(Ot.from, Math.min(Ot.from + 100, Ot.to)))[0].length;
        Vt && et.head != Ot.from + Vt && (qt = mt.n.cursor(Ot.from + Vt))
      }
      return qt
    }

    function je(tt, et, Vt) {
      let Ot = !1,
        qt = Ut(tt.selection, (et => {
          let qt = (0, jt.cb)(tt, et.head, -1) || (0, jt.cb)(tt, et.head, 1) || et.head > 0 && (0, jt.cb)(tt, et.head - 1, 1) || et.head < tt.doc.length && (0, jt.cb)(tt, et.head + 1, -1);
          if (!qt || !qt.end) return et;
          Ot = !0;
          let Dt = qt.start.from == et.head ? qt.end.to : qt.end.from;
          return Vt ? mt.n.range(et.anchor, Dt) : mt.n.cursor(Dt)
        }));
      return !!Ot && (et(At(tt, qt)), !0)
    }

    function He(tt, et) {
      let Vt = Ut(tt.state.selection, (tt => {
        let Vt = et(tt);
        return mt.n.range(tt.anchor, Vt.head, Vt.goalColumn, Vt.bidiLevel || void 0, Vt.assoc)
      }));
      return !Vt.eq(tt.state.selection) && (tt.dispatch(At(tt.state, Vt)), !0)
    }

    function Xe(tt, et) {
      return He(tt, (Vt => tt.moveByChar(Vt, et)))
    }
    const Qe = tt => Xe(tt, !pt(tt)),
      le = tt => Xe(tt, pt(tt));

    function Ee(tt, et) {
      return He(tt, (Vt => tt.moveByGroup(Vt, et)))
    }

    function fe(tt, et) {
      return He(tt, (Vt => tt.moveVertically(Vt, et)))
    }
    const we = tt => fe(tt, !1),
      ye = tt => fe(tt, !0);

    function Ne(tt, et) {
      return He(tt, (Vt => tt.moveVertically(Vt, et, Oe(tt).height)))
    }
    const ae = tt => Ne(tt, !1),
      Me = tt => Ne(tt, !0),
      be = tt => {
        let {
          state: et,
          dispatch: Vt
        } = tt;
        return Vt(At(et, {
          anchor: 0
        })), !0
      },
      Je = tt => {
        let {
          state: et,
          dispatch: Vt
        } = tt;
        return Vt(At(et, {
          anchor: et.doc.length
        })), !0
      },
      Ce = tt => {
        let {
          state: et,
          dispatch: Vt
        } = tt;
        return Vt(At(et, {
          anchor: et.selection.main.anchor,
          head: 0
        })), !0
      },
      ue = tt => {
        let {
          state: et,
          dispatch: Vt
        } = tt;
        return Vt(At(et, {
          anchor: et.selection.main.anchor,
          head: et.doc.length
        })), !0
      };

    function Ke(tt, et) {
      let {
        state: Vt
      } = tt, Ot = Vt.selection, qt = Vt.selection.nw.slice();
      for (let Dt of Vt.selection.nw) {
        let Ot = Vt.doc.lineAt(Dt.head);
        if (et ? Ot.to < tt.state.doc.length : Ot.from > 0)
          for (let Vt = Dt;;) {
            let Dt = tt.moveVertically(Vt, et);
            if (Dt.head < Ot.from || Dt.head > Ot.to) {
              qt.some((tt => tt.head == Dt.head)) || qt.push(Dt);
              break
            }
            if (Dt.head == Vt.head) break;
            Vt = Dt
          }
      }
      return qt.length != Ot.nw.length && (tt.dispatch(At(Vt, mt.n.create(qt, qt.length - 1))), !0)
    }

    function he(tt, et) {
      if (tt.state.readOnly) return !1;
      let Vt = "delete.selection",
        {
          state: Ot
        } = tt,
        qt = Ot.changeByRange((Ot => {
          let {
            from: qt,
            to: Dt
          } = Ot;
          if (qt == Dt) {
            let mt = et(Ot);
            mt < qt ? (Vt = "delete.backward", mt = ve(tt, mt, !1)) : mt > qt && (Vt = "delete.forward", mt = ve(tt, mt, !0)), qt = Math.min(qt, mt), Dt = Math.max(Dt, mt)
          } else qt = ve(tt, qt, !1), Dt = ve(tt, Dt, !0);
          return qt == Dt ? {
            range: Ot
          } : {
            changes: {
              from: qt,
              to: Dt
            },
            range: mt.n.cursor(qt, qt < Ot.head ? -1 : 1)
          }
        }));
      return !qt.changes.empty && (tt.dispatch(Ot.update(qt, {
        scrollIntoView: !0,
        userEvent: Vt,
        effects: "delete.selection" == Vt ? dt.j.announce.of(Ot.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function ve(tt, et, Vt) {
      if (tt instanceof dt.j)
        for (let Ot of tt.state.facet(dt.j.atomicRanges).map((et => et(tt)))) Ot.between(et, et, ((tt, Ot) => {
          tt < et && Ot > et && (et = Vt ? Ot : tt)
        }));
      return et
    }
    const We = (tt, et, Vt) => he(tt, (Ot => {
        let qt, Dt, dt = Ot.from,
          {
            state: Ht
          } = tt,
          Xt = Ht.doc.lineAt(dt);
        if (Vt && !et && dt > Xt.from && dt < Xt.from + 200 && !/[^ \t]/.test(qt = Xt.text.slice(0, dt - Xt.from))) {
          if ("\t" == qt[qt.length - 1]) return dt - 1;
          let tt = (0, mt.Z)(qt, Ht.tabSize) % (0, jt.J)(Ht) || (0, jt.J)(Ht);
          for (let et = 0; et < tt && " " == qt[qt.length - 1 - et]; et++) dt--;
          Dt = dt
        } else Dt = (0, mt.$)(Xt.text, dt - Xt.from, et, et) + Xt.from, Dt == dt && Xt.number != (et ? Ht.doc.lines : 1) ? Dt += et ? 1 : -1 : !et && /[\ufe00-\ufe0f]/.test(Xt.text.slice(Dt - Xt.from, dt - Xt.from)) && (Dt = (0, mt.$)(Xt.text, Dt - Xt.from, !1, !1) + Xt.from);
        return Dt
      })),
      Se = tt => We(tt, !1, !0),
      ce = tt => We(tt, !0, !1),
      Re = (tt, et) => he(tt, (Vt => {
        let Ot = Vt.head,
          {
            state: qt
          } = tt,
          Dt = qt.doc.lineAt(Ot),
          dt = qt.charCategorizer(Ot);
        for (let tt = null;;) {
          if (Ot == (et ? Dt.to : Dt.from)) {
            Ot == Vt.head && Dt.number != (et ? qt.doc.lines : 1) && (Ot += et ? 1 : -1);
            break
          }
          let jt = (0, mt.$)(Dt.text, Ot - Dt.from, et) + Dt.from,
            Ht = Dt.text.slice(Math.min(Ot, jt) - Dt.from, Math.max(Ot, jt) - Dt.from),
            Xt = dt(Ht);
          if (null != tt && Xt != tt) break;
          " " == Ht && Ot == Vt.head || (tt = Xt), Ot = jt
        }
        return Ot
      })),
      Ie = tt => Re(tt, !1);

    function Pe(tt) {
      let et = [],
        Vt = -1;
      for (let Ot of tt.selection.nw) {
        let qt = tt.doc.lineAt(Ot.from),
          Dt = tt.doc.lineAt(Ot.to);
        if (Ot.empty || Ot.to != Dt.from || (Dt = tt.doc.lineAt(Ot.to - 1)), Vt >= qt.number) {
          let tt = et[et.length - 1];
          tt.to = Dt.to, tt.nw.push(Ot)
        } else et.push({
          from: qt.from,
          to: Dt.to,
          nw: [Ot]
        });
        Vt = Dt.number + 1
      }
      return et
    }

    function Ze(tt, et, Vt) {
      if (tt.readOnly) return !1;
      let Ot = [],
        qt = [];
      for (let Dt of Pe(tt)) {
        if (Vt ? Dt.to == tt.doc.length : 0 == Dt.from) continue;
        let et = tt.doc.lineAt(Vt ? Dt.to + 1 : Dt.from - 1),
          dt = et.length + 1;
        if (Vt) {
          Ot.push({
            from: Dt.to,
            to: et.to
          }, {
            from: Dt.from,
            insert: et.text + tt.lineBreak
          });
          for (let et of Dt.nw) qt.push(mt.n.range(Math.min(tt.doc.length, et.anchor + dt), Math.min(tt.doc.length, et.head + dt)))
        } else {
          Ot.push({
            from: et.from,
            to: Dt.from
          }, {
            from: Dt.to,
            insert: tt.lineBreak + et.text
          });
          for (let tt of Dt.nw) qt.push(mt.n.range(tt.anchor - dt, tt.head - dt))
        }
      }
      return !!Ot.length && (et(tt.update({
        changes: Ot,
        scrollIntoView: !0,
        selection: mt.n.create(qt, tt.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function Le(tt, et, Vt) {
      if (tt.readOnly) return !1;
      let Ot = [];
      for (let Dt of Pe(tt)) Vt ? Ot.push({
        from: Dt.from,
        insert: tt.doc.slice(Dt.from, Dt.to) + tt.lineBreak
      }) : Ot.push({
        from: Dt.to,
        insert: tt.lineBreak + tt.doc.slice(Dt.from, Dt.to)
      });
      let qt = tt.changes(Ot);
      return et(tt.update({
        changes: qt,
        selection: tt.selection.map(qt, Vt ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const Fe = ke(!1);

    function ke(tt) {
      return et => {
        let {
          state: Vt,
          dispatch: Ot
        } = et;
        if (Vt.readOnly) return !1;
        let qt = Vt.changeByRange((et => {
          let {
            from: Ot,
            to: qt
          } = et, Dt = Vt.doc.lineAt(Ot), dt = !tt && Ot == qt && function(tt, et) {
            if (/\(\)|\[\]|\{\}/.test(tt.sliceDoc(et - 1, et + 1))) return {
              from: et,
              to: et
            };
            let Vt, Ot = (0, jt.jb)(tt).resolveInner(et),
              qt = Ot.childBefore(et),
              Dt = Ot.childAfter(et);
            return qt && Dt && qt.to <= et && Dt.from >= et && (Vt = qt.type.prop(Ht.f.closedBy)) && Vt.indexOf(Dt.name) > -1 && tt.doc.lineAt(qt.to).from == tt.doc.lineAt(Dt.from).from && !/\S/.test(tt.sliceDoc(qt.to, Dt.from)) ? {
              from: qt.to,
              to: Dt.from
            } : null
          }(Vt, Ot);
          tt && (Ot = qt = (qt <= Dt.to ? Dt : Vt.doc.lineAt(qt)).to);
          let Xt = new jt.d(Vt, {
              simulateBreak: Ot,
              simulateDoubleBreak: !!dt
            }),
            Qt = (0, jt.K)(Xt, Ot);
          for (null == Qt && (Qt = (0, mt.Z)(/^\s*/.exec(Vt.doc.lineAt(Ot).text)[0], Vt.tabSize)); qt < Dt.to && /\s/.test(Dt.text[qt - Dt.from]);) qt++;
          dt ? ({
            from: Ot,
            to: qt
          } = dt) : Ot > Dt.from && Ot < Dt.from + 100 && !/\S/.test(Dt.text.slice(0, Ot)) && (Ot = Dt.from);
          let lt = ["", (0, jt.W)(Vt, Qt)];
          return dt && lt.push((0, jt.W)(Vt, Xt.lineIndent(Dt.from, -1))), {
            changes: {
              from: Ot,
              to: qt,
              insert: mt.K.of(lt)
            },
            range: mt.n.cursor(Ot + 1 + lt[1].length)
          }
        }));
        return Ot(Vt.update(qt, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function Ge(tt, et) {
      let Vt = -1;
      return tt.changeByRange((Ot => {
        let qt = [];
        for (let mt = Ot.from; mt <= Ot.to;) {
          let Dt = tt.doc.lineAt(mt);
          Dt.number > Vt && (Ot.empty || Ot.to > Dt.from) && (et(Dt, qt, Ot), Vt = Dt.number), mt = Dt.to + 1
        }
        let Dt = tt.changes(qt);
        return {
          changes: qt,
          range: mt.n.range(Dt.mapPos(Ot.anchor, 1), Dt.mapPos(Ot.head, 1))
        }
      }))
    }
    const ze = tt => {
        let {
          state: et,
          dispatch: Vt
        } = tt;
        return !et.readOnly && (Vt(et.update(Ge(et, ((tt, Vt) => {
          Vt.push({
            from: tt.from,
            insert: et.facet(jt._)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      oe = tt => {
        let {
          state: et,
          dispatch: Vt
        } = tt;
        return !et.readOnly && (Vt(et.update(Ge(et, ((tt, Vt) => {
          let Ot = /^\s*/.exec(tt.text)[0];
          if (!Ot) return;
          let qt = (0, mt.Z)(Ot, et.tabSize),
            Dt = 0,
            dt = (0, jt.W)(et, Math.max(0, qt - (0, jt.J)(et)));
          for (; Dt < Ot.length && Dt < dt.length && Ot.charCodeAt(Dt) == dt.charCodeAt(Dt);) Dt++;
          Vt.push({
            from: tt.from + Dt,
            to: tt.from + Ot.length,
            insert: dt.slice(Dt)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      re = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: tt => it(tt, (et => nt(tt.state, et, !pt(tt)))),
        shift: tt => He(tt, (et => nt(tt.state, et, !pt(tt))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: tt => it(tt, (et => nt(tt.state, et, pt(tt)))),
        shift: tt => He(tt, (et => nt(tt.state, et, pt(tt))))
      }, {
        key: "Alt-ArrowUp",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt;
          return Ze(et, Vt, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt;
          return Le(et, Vt, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt;
          return Ze(et, Vt, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt;
          return Le(et, Vt, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: tt => Ke(tt, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: tt => Ke(tt, !0)
      }, {
        key: "Escape",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt, Ot = et.selection, qt = null;
          return Ot.nw.length > 1 ? qt = mt.n.create([Ot.main]) : Ot.main.empty || (qt = mt.n.create([mt.n.cursor(Ot.main.head)])), !!qt && (Vt(At(et, qt)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: ke(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt, Ot = Pe(et).map((tt => {
            let {
              from: Vt,
              to: Ot
            } = tt;
            return mt.n.range(Vt, Math.min(Ot + 1, et.doc.length))
          }));
          return Vt(et.update({
            selection: mt.n.create(Ot),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt, Ot = Ut(et.selection, (tt => {
            let Vt = (0, jt.jb)(et),
              Ot = Vt.resolveStack(tt.from, 1);
            if (tt.empty) {
              let et = Vt.resolveStack(tt.from, -1);
              et.node.from >= Ot.node.from && et.node.to <= Ot.node.to && (Ot = et)
            }
            for (let et = Ot; et; et = et.next) {
              let {
                node: Vt
              } = et;
              if ((Vt.from < tt.from && Vt.to >= tt.to || Vt.to > tt.to && Vt.from <= tt.from) && et.next) return mt.n.range(Vt.to, Vt.from)
            }
            return tt
          }));
          return !Ot.eq(et.selection) && (Vt(At(et, Ot)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: oe
      }, {
        key: "Mod-]",
        run: ze
      }, {
        key: "Mod-Alt-\\",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt;
          if (et.readOnly) return !1;
          let Ot = Object.create(null),
            qt = new jt.d(et, {
              overrideIndentation: tt => {
                let et = Ot[tt];
                return null == et ? -1 : et
              }
            }),
            Dt = Ge(et, ((tt, Vt, Dt) => {
              let mt = (0, jt.K)(qt, tt.from);
              if (null == mt) return;
              /\S/.test(tt.text) || (mt = 0);
              let dt = /^\s*/.exec(tt.text)[0],
                Ht = (0, jt.W)(et, mt);
              (dt != Ht || Dt.from < tt.from + dt.length) && (Ot[tt.from] = mt, Vt.push({
                from: tt.from,
                to: tt.from + dt.length,
                insert: Ht
              }))
            }));
          return Dt.changes.empty || Vt(et.update(Dt, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: tt => {
          if (tt.state.readOnly) return !1;
          let {
            state: et
          } = tt, Vt = et.changes(Pe(et).map((tt => {
            let {
              from: Vt,
              to: Ot
            } = tt;
            return Vt > 0 ? Vt-- : Ot < et.doc.length && Ot++, {
              from: Vt,
              to: Ot
            }
          }))), Ot = Ut(et.selection, (et => {
            let Vt;
            if (tt.lineWrapping) {
              let Ot = tt.lineBlockAt(et.head),
                qt = tt.coordsAtPos(et.head, et.assoc || 1);
              qt && (Vt = Ot.bottom + tt.documentTop - qt.bottom + tt.defaultLineHeight / 2)
            }
            return tt.moveVertically(et, !0, Vt)
          })).map(Vt);
          return tt.dispatch({
            changes: Vt,
            selection: Ot,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt;
          return je(et, Vt, !1)
        }
      }, {
        key: "Mod-/",
        run: tt => {
          let {
            state: et
          } = tt, Vt = et.doc.lineAt(et.selection.main.from), Ot = ft(tt.state, Vt.from);
          return Ot.line ? Qt(tt) : !!Ot.block && Et(tt)
        }
      }, {
        key: "Alt-A",
        run: lt
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: tt => (tt.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: xt,
        shift: Qe,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: tt => gt(tt, !pt(tt)),
        shift: tt => Ee(tt, !pt(tt)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: tt => it(tt, (et => de(tt, et, !pt(tt)))),
        shift: tt => He(tt, (et => de(tt, et, !pt(tt)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: Tt,
        shift: le,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: tt => gt(tt, pt(tt)),
        shift: tt => Ee(tt, pt(tt)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: tt => it(tt, (et => de(tt, et, pt(tt)))),
        shift: tt => He(tt, (et => de(tt, et, pt(tt)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: ee,
        shift: we,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: be,
        shift: Ce
      }, {
        mac: "Ctrl-ArrowUp",
        run: De,
        shift: ae
      }, {
        key: "ArrowDown",
        run: Ve,
        shift: ye,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: Je,
        shift: ue
      }, {
        mac: "Ctrl-ArrowDown",
        run: me,
        shift: Me
      }, {
        key: "PageUp",
        run: De,
        shift: ae
      }, {
        key: "PageDown",
        run: me,
        shift: Me
      }, {
        key: "Home",
        run: tt => it(tt, (et => de(tt, et, !1))),
        shift: tt => He(tt, (et => de(tt, et, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: be,
        shift: Ce
      }, {
        key: "End",
        run: tt => it(tt, (et => de(tt, et, !0))),
        shift: tt => He(tt, (et => de(tt, et, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: Je,
        shift: ue
      }, {
        key: "Enter",
        run: Fe,
        shift: Fe
      }, {
        key: "Mod-a",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt;
          return Vt(et.update({
            selection: {
              anchor: 0,
              head: et.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: Se,
        shift: Se,
        preventDefault: !0
      }, {
        key: "Delete",
        run: ce,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: Ie,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: tt => Re(tt, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: tt => he(tt, (et => {
          let Vt = tt.moveToLineBoundary(et, !1).head;
          return et.head > Vt ? Vt : Math.max(0, et.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: tt => he(tt, (et => {
          let Vt = tt.moveToLineBoundary(et, !0).head;
          return et.head < Vt ? Vt : Math.min(tt.state.doc.length, et.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: xt,
        shift: Qe,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: Tt,
        shift: le
      }, {
        key: "Ctrl-p",
        run: ee,
        shift: we
      }, {
        key: "Ctrl-n",
        run: Ve,
        shift: ye
      }, {
        key: "Ctrl-a",
        run: tt => it(tt, (et => mt.n.cursor(tt.lineBlockAt(et.head).from, 1))),
        shift: tt => He(tt, (et => mt.n.cursor(tt.lineBlockAt(et.head).from)))
      }, {
        key: "Ctrl-e",
        run: tt => it(tt, (et => mt.n.cursor(tt.lineBlockAt(et.head).to, -1))),
        shift: tt => He(tt, (et => mt.n.cursor(tt.lineBlockAt(et.head).to)))
      }, {
        key: "Ctrl-d",
        run: ce
      }, {
        key: "Ctrl-h",
        run: Se
      }, {
        key: "Ctrl-k",
        run: tt => he(tt, (et => {
          let Vt = tt.lineBlockAt(et.head).to;
          return et.head < Vt ? Vt : Math.min(tt.state.doc.length, et.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: Ie
      }, {
        key: "Ctrl-o",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt;
          if (et.readOnly) return !1;
          let Ot = et.changeByRange((tt => ({
            changes: {
              from: tt.from,
              to: tt.to,
              insert: mt.K.of(["", ""])
            },
            range: mt.n.cursor(tt.from)
          })));
          return Vt(et.update(Ot, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: tt => {
          let {
            state: et,
            dispatch: Vt
          } = tt;
          if (et.readOnly) return !1;
          let Ot = et.changeByRange((tt => {
            if (!tt.empty || 0 == tt.from || tt.from == et.doc.length) return {
              range: tt
            };
            let Vt = tt.from,
              Ot = et.doc.lineAt(Vt),
              qt = Vt == Ot.from ? Vt - 1 : (0, mt.$)(Ot.text, Vt - Ot.from, !1) + Ot.from,
              Dt = Vt == Ot.to ? Vt + 1 : (0, mt.$)(Ot.text, Vt - Ot.from, !0) + Ot.from;
            return {
              changes: {
                from: qt,
                to: Dt,
                insert: et.doc.slice(Vt, Dt).append(et.doc.slice(qt, Vt))
              },
              range: mt.n.cursor(Dt)
            }
          }));
          return !Ot.changes.empty && (Vt(et.update(Ot, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: me
      }].map((tt => ({
        mac: tt.key,
        run: tt.run,
        shift: tt.shift
      }))))),
      Ue = {
        key: "Tab",
        run: ze,
        shift: oe
      };
    var Ae = Vt(41593),
      ie = Vt(41532),
      Ye = Vt(41598),
      Be = function(tt) {
        void 0 === tt && (tt = {});
        var {
          crosshairCursor: et = !1
        } = tt, Vt = [];
        !1 !== tt.closeBracketsKeymap && (Vt = Vt.concat(ie.g)), !1 !== tt.defaultKeymap && (Vt = Vt.concat(re)), !1 !== tt.searchKeymap && (Vt = Vt.concat(Ae.j)), !1 !== tt.historyKeymap && (Vt = Vt.concat(rt)), !1 !== tt.foldKeymap && (Vt = Vt.concat(jt.C)), !1 !== tt.completionKeymap && (Vt = Vt.concat(ie.k)), !1 !== tt.lintKeymap && (Vt = Vt.concat(Ye.c));
        var Ot = [];
        return !1 !== tt.lineNumbers && Ot.push((0, dt.Y)()), !1 !== tt.highlightActiveLineGutter && Ot.push((0, dt.P)()), !1 !== tt.highlightSpecialChars && Ot.push((0, dt.S)()), !1 !== tt.history && Ot.push(function() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [ut, Ct.of(tt), dt.j.domEventHandlers({
            beforeinput(tt, et) {
              let Vt = "historyUndo" == tt.inputType ? ht : "historyRedo" == tt.inputType ? vt : null;
              return !!Vt && (tt.preventDefault(), Vt(et))
            }
          })]
        }()), !1 !== tt.foldGutter && Ot.push((0, jt.x)()), !1 !== tt.drawSelection && Ot.push((0, dt.z)()), !1 !== tt.dropCursor && Ot.push((0, dt.B)()), !1 !== tt.allowMultipleSelections && Ot.push(mt.q.allowMultipleSelections.of(!0)), !1 !== tt.indentOnInput && Ot.push((0, jt.S)()), !1 !== tt.syntaxHighlighting && Ot.push((0, jt.gb)(jt.q, {
          fallback: !0
        })), !1 !== tt.bracketMatching && Ot.push((0, jt.k)()), !1 !== tt.closeBrackets && Ot.push((0, ie.i)()), !1 !== tt.autocompletion && Ot.push((0, ie.d)()), !1 !== tt.rectangularSelection && Ot.push((0, dt.gb)()), !1 !== et && Ot.push((0, dt.v)()), !1 !== tt.highlightActiveLine && Ot.push((0, dt.Q)()), !1 !== tt.highlightSelectionMatches && Ot.push((0, Ae.i)()), tt.tabSize && "number" === typeof tt.tabSize && Ot.push(jt._.of(" ".repeat(tt.tabSize))), Ot.concat([dt.X.of(Vt.flat())]).filter(Boolean)
      },
      pe = Vt(41577);
    const xe = "#e5c07b",
      Te = "#e06c75",
      ge = "#56b6c2",
      se = "#ffffff",
      ne = "#abb2bf",
      tV = "#7d8799",
      eV = "#61afef",
      VV = "#98c379",
      OV = "#d19a66",
      qV = "#c678dd",
      DV = "#21252b",
      mV = "#2c313a",
      dV = "#282c34",
      jV = "#353a42",
      HV = "#3E4451",
      XV = "#528bff",
      QV = dt.j.theme({
        "&": {
          color: ne,
          backgroundColor: dV
        },
        ".cm-content": {
          caretColor: XV
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: XV
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: HV
        },
        ".cm-panels": {
          backgroundColor: DV,
          color: ne
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
          backgroundColor: dV,
          color: tV,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: mV
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: jV
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: jV,
          borderBottomColor: jV
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: mV,
            color: ne
          }
        }
      }, {
        dark: !0
      }),
      lV = jt.c.define([{
        tag: pe.i.keyword,
        color: qV
      }, {
        tag: [pe.i.name, pe.i.deleted, pe.i.character, pe.i.propertyName, pe.i.macroName],
        color: Te
      }, {
        tag: [pe.i.function(pe.i.variableName), pe.i.labelName],
        color: eV
      }, {
        tag: [pe.i.color, pe.i.constant(pe.i.name), pe.i.standard(pe.i.name)],
        color: OV
      }, {
        tag: [pe.i.definition(pe.i.name), pe.i.separator],
        color: ne
      }, {
        tag: [pe.i.typeName, pe.i.className, pe.i.number, pe.i.changed, pe.i.annotation, pe.i.modifier, pe.i.self, pe.i.namespace],
        color: xe
      }, {
        tag: [pe.i.operator, pe.i.operatorKeyword, pe.i.url, pe.i.escape, pe.i.regexp, pe.i.link, pe.i.special(pe.i.string)],
        color: ge
      }, {
        tag: [pe.i.meta, pe.i.comment],
        color: tV
      }, {
        tag: pe.i.strong,
        fontWeight: "bold"
      }, {
        tag: pe.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: pe.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: pe.i.link,
        color: tV,
        textDecoration: "underline"
      }, {
        tag: pe.i.heading,
        fontWeight: "bold",
        color: Te
      }, {
        tag: [pe.i.atom, pe.i.bool, pe.i.special(pe.i.variableName)],
        color: OV
      }, {
        tag: [pe.i.processingInstruction, pe.i.string, pe.i.inserted],
        color: VV
      }, {
        tag: pe.i.invalid,
        color: se
      }]),
      EV = [QV, (0, jt.gb)(lV)];
    var fV = dt.j.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class wV {
      constructor(tt, et) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = et, this.timeoutMS = et, this.callbacks.push(tt)
      }
      BQ() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var tt = this.callbacks.slice();
          this.callbacks.length = 0, tt.forEach((tt => {
            try {
              tt()
            } catch (et) {
              console.error("TimeoutLatch callback error:", et)
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
    class yV {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(tt) {
        this.latches.add(tt), this.start()
      }
      remove(tt) {
        this.latches.delete(tt), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((tt => {
            tt.BQ(), tt.isDone && this.remove(tt)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var NV = null,
      aV = mt.c.define(),
      MV = [];

    function bV(tt) {
      var {
        value: et,
        selection: Vt,
        onChange: Ot,
        onStatistics: qt,
        onCreateEditor: jt,
        onUpdate: Ht,
        extensions: Xt = MV,
        autoFocus: Qt,
        theme: lt = "light",
        height: Et = null,
        minHeight: ft = null,
        maxHeight: wt = null,
        width: yt = null,
        minWidth: Nt = null,
        maxWidth: Mt = null,
        placeholder: bt = "",
        editable: Jt = !0,
        readOnly: Ct = !1,
        indentWithTab: ut = !0,
        basicSetup: Kt = !0,
        root: ht,
        initialState: vt
      } = tt, [Wt, St] = (0, Dt.useState)(), [ct, Rt] = (0, Dt.useState)(), [It, Pt] = (0, Dt.useState)(), Zt = (0, Dt.useState)((() => ({
        current: null
      })))[0], Lt = (0, Dt.useState)((() => ({
        current: null
      })))[0], Ft = dt.j.theme({
        "&": {
          height: Et,
          minHeight: ft,
          maxHeight: wt,
          width: yt,
          minWidth: Nt,
          maxWidth: Mt
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), kt = dt.j.updateListener.of((tt => {
        if (tt.docChanged && "function" === typeof Ot && !tt.transactions.some((tt => tt.annotation(aV)))) {
          Zt.current ? Zt.current.reset() : (Zt.current = new wV((() => {
            if (Lt.current) {
              var tt = Lt.current;
              Lt.current = null, tt()
            }
            Zt.current = null
          }), 200), ("undefined" === typeof window ? new yV : (NV || (NV = new yV), NV)).add(Zt.current));
          var et = tt.state.doc.toString();
          Ot(et, tt)
        }
        qt && qt((tt => ({
          line: tt.state.doc.lineAt(tt.state.selection.main.from),
          lineCount: tt.state.doc.lines,
          lineBreak: tt.state.lineBreak,
          length: tt.state.doc.length,
          readOnly: tt.state.readOnly,
          tabSize: tt.state.tabSize,
          selection: tt.state.selection,
          selectionAsSingle: tt.state.selection.asSingle().main,
          nw: tt.state.selection.nw,
          selectionCode: tt.state.sliceDoc(tt.state.selection.main.from, tt.state.selection.main.to),
          selections: tt.state.selection.nw.map((et => tt.state.sliceDoc(et.from, et.to))),
          selectedText: tt.state.selection.nw.some((tt => !tt.empty))
        }))(tt))
      })), Gt = function(tt) {
        void 0 === tt && (tt = {});
        var {
          indentWithTab: et = !0,
          editable: Vt = !0,
          readOnly: Ot = !1,
          theme: qt = "light",
          placeholder: Dt = "",
          basicSetup: jt = !0
        } = tt, Ht = [];
        switch (et && Ht.unshift(dt.X.of([Ue])), jt && ("boolean" === typeof jt ? Ht.unshift(Be()) : Ht.unshift(Be(jt))), Dt && Ht.unshift((0, dt.cb)(Dt)), qt) {
          case "light":
            Ht.push(fV);
            break;
          case "dark":
            Ht.push(EV);
            break;
          case "none":
            break;
          default:
            Ht.push(qt)
        }
        return !1 === Vt && Ht.push(dt.j.editable.of(!1)), Ot && Ht.push(mt.q.readOnly.of(!0)), [...Ht]
      }({
        theme: lt,
        editable: Jt,
        readOnly: Ct,
        placeholder: bt,
        indentWithTab: ut,
        basicSetup: Kt
      }), zt = [kt, Ft, ...Gt];
      return Ht && "function" === typeof Ht && zt.push(dt.j.updateListener.of(Ht)), zt = zt.concat(Xt), (0, Dt.useLayoutEffect)((() => {
        if (Wt && !It) {
          var tt = {
              doc: et,
              selection: Vt,
              extensions: zt
            },
            Ot = vt ? mt.q.fromJSON(vt.json, tt, vt.fields) : mt.q.create(tt);
          if (Pt(Ot), !ct) {
            var qt = new dt.j({
              state: Ot,
              parent: Wt,
              root: ht
            });
            Rt(qt), jt && jt(qt, Ot)
          }
        }
        return () => {
          ct && (Pt(void 0), Rt(void 0))
        }
      }), [Wt, It]), (0, Dt.useEffect)((() => {
        tt.container && St(tt.container)
      }), [tt.container]), (0, Dt.useEffect)((() => () => {
        ct && (ct.destroy(), Rt(void 0)), Zt.current && (Zt.current.cancel(), Zt.current = null)
      }), [ct]), (0, Dt.useEffect)((() => {
        Qt && ct && ct.focus()
      }), [Qt, ct]), (0, Dt.useEffect)((() => {
        ct && ct.dispatch({
          effects: mt.I.reconfigure.of(zt)
        })
      }), [lt, Xt, Et, ft, wt, yt, Nt, Mt, bt, Jt, Ct, ut, Kt, Ot, Ht]), (0, Dt.useEffect)((() => {
        if (void 0 !== et) {
          var tt = ct ? ct.state.doc.toString() : "";
          if (ct && et !== tt) {
            var Vt = () => {
              ct && et !== ct.state.doc.toString() && ct.dispatch({
                changes: {
                  from: 0,
                  to: ct.state.doc.toString().length,
                  insert: et || ""
                },
                annotations: [aV.of(!0)]
              })
            };
            Zt.current && !Zt.current.isDone ? Lt.current = Vt : Vt()
          }
        }
      }), [et, ct]), {
        state: It,
        setState: Pt,
        view: ct,
        setView: Rt,
        container: Wt,
        setContainer: St
      }
    }
    var JV = Vt(1188),
      CV = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      uV = (0, Dt.forwardRef)(((tt, et) => {
        var {
          className: Vt,
          value: mt = "",
          selection: dt,
          extensions: jt = [],
          onChange: Ht,
          onStatistics: Xt,
          onCreateEditor: Qt,
          onUpdate: lt,
          autoFocus: Et,
          theme: ft = "light",
          height: wt,
          minHeight: yt,
          maxHeight: Nt,
          width: Mt,
          minWidth: bt,
          maxWidth: Jt,
          basicSetup: Ct,
          placeholder: ut,
          indentWithTab: Kt,
          editable: ht,
          readOnly: vt,
          root: Wt,
          initialState: St
        } = tt, ct = (0, qt.e)(tt, CV), Rt = (0, Dt.useRef)(null), {
          state: It,
          view: Pt,
          container: Zt,
          setContainer: Lt
        } = bV({
          root: Wt,
          value: mt,
          autoFocus: Et,
          theme: ft,
          height: wt,
          minHeight: yt,
          maxHeight: Nt,
          width: Mt,
          minWidth: bt,
          maxWidth: Jt,
          basicSetup: Ct,
          placeholder: ut,
          indentWithTab: Kt,
          editable: ht,
          readOnly: vt,
          selection: dt,
          onChange: Ht,
          onStatistics: Xt,
          onCreateEditor: Qt,
          onUpdate: lt,
          extensions: jt,
          initialState: St
        });
        (0, Dt.useImperativeHandle)(et, (() => ({
          editor: Rt.current,
          state: It,
          view: Pt
        })), [Rt, Zt, It, Pt]);
        var Ft = (0, Dt.useCallback)((tt => {
          Rt.current = tt, Lt(tt)
        }), [Lt]);
        if ("string" !== typeof mt) throw new Error("value must be typeof string but got " + typeof mt);
        var kt = "string" === typeof ft ? "cm-theme-" + ft : "cm-theme";
        return (0, JV.jsx)("div", (0, Ot.c)({
          ref: Ft,
          className: kt + (Vt ? " " + Vt : "")
        }, ct))
      }));
    uV.displayName = "CodeMirror";
    const KV = uV
  },
  41561: (tt, et, Vt) => {
    function Ot() {
      var tt = arguments[0];
      "string" == typeof tt && (tt = document.createElement(tt));
      var et = 1,
        Vt = arguments[1];
      if (Vt && "object" == typeof Vt && null == Vt.nodeType && !Array.isArray(Vt)) {
        for (var Ot in Vt)
          if (Object.prototype.hasOwnProperty.call(Vt, Ot)) {
            var Dt = Vt[Ot];
            "string" == typeof Dt ? tt.setAttribute(Ot, Dt) : null != Dt && (tt[Ot] = Dt)
          } et++
      }
      for (; et < arguments.length; et++) qt(tt, arguments[et]);
      return tt
    }

    function qt(tt, et) {
      if ("string" == typeof et) tt.appendChild(document.createTextNode(et));
      else if (null == et);
      else if (null != et.nodeType) tt.appendChild(et);
      else {
        if (!Array.isArray(et)) throw new RangeError("Unsupported child node: " + et);
        for (var Vt = 0; Vt < et.length; Vt++) qt(tt, et[Vt])
      }
    }
    Vt.d(et, {
      b: () => Ot
    })
  },
  41553: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    const Ot = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      qt = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      Dt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class mt {
      constructor(tt, et) {
        this.rules = [];
        let {
          finish: Vt
        } = et || {};

        function Ot(tt) {
          return /^@/.test(tt) ? [tt] : tt.split(/,\s*/)
        }

        function qt(tt, et, Dt, mt) {
          let dt = [],
            jt = /^@(\w+)\b/.exec(tt[0]),
            Ht = jt && "keyframes" == jt[1];
          if (jt && null == et) return Dt.push(tt[0] + ";");
          for (let Vt in et) {
            let mt = et[Vt];
            if (/&/.test(Vt)) qt(Vt.split(/,\s*/).map((et => tt.map((tt => et.replace(/&/, tt))))).reduce(((tt, et) => tt.concat(et))), mt, Dt);
            else if (mt && "object" == typeof mt) {
              if (!jt) throw new RangeError("The value of a property (" + Vt + ") should be a primitive value.");
              qt(Ot(Vt), mt, dt, Ht)
            } else null != mt && dt.push(Vt.replace(/_.*/, "").replace(/[A-Z]/g, (tt => "-" + tt.toLowerCase())) + ": " + mt + ";")
          }(dt.length || Ht) && Dt.push((!Vt || jt || mt ? tt : tt.map(Vt)).join(", ") + " {" + dt.join(" ") + "}")
        }
        for (let Dt in tt) qt(Ot(Dt), tt[Dt], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let tt = Dt[Ot] || 1;
        return Dt[Ot] = tt + 1, "\u037c" + tt.toString(36)
      }
      static mount(tt, et, Vt) {
        let Ot = tt[qt],
          Dt = Vt && Vt.nonce;
        Ot ? Dt && Ot.setNonce(Dt) : Ot = new jt(tt, Dt), Ot.mount(Array.isArray(et) ? et : [et], tt)
      }
    }
    let dt = new Map;
    class jt {
      constructor(tt, et) {
        let Vt = tt.ownerDocument || tt,
          Ot = Vt.defaultView;
        if (!tt.head && tt.adoptedStyleSheets && Ot.CSSStyleSheet) {
          let et = dt.get(Vt);
          if (et) return tt[qt] = et;
          this.sheet = new Ot.CSSStyleSheet, dt.set(Vt, this)
        } else this.styleTag = Vt.createElement("style"), et && this.styleTag.setAttribute("nonce", et);
        this.modules = [], tt[qt] = this
      }
      mount(tt, et) {
        let Vt = this.sheet,
          Ot = 0,
          qt = 0;
        for (let Dt = 0; Dt < tt.length; Dt++) {
          let et = tt[Dt],
            mt = this.modules.indexOf(et);
          if (mt < qt && mt > -1 && (this.modules.splice(mt, 1), qt--, mt = -1), -1 == mt) {
            if (this.modules.splice(qt++, 0, et), Vt)
              for (let tt = 0; tt < et.rules.length; tt++) Vt.insertRule(et.rules[tt], Ot++)
          } else {
            for (; qt < mt;) Ot += this.modules[qt++].rules.length;
            Ot += et.rules.length, qt++
          }
        }
        if (Vt) et.adoptedStyleSheets.indexOf(this.sheet) < 0 && (et.adoptedStyleSheets = [this.sheet, ...et.adoptedStyleSheets]);
        else {
          let tt = "";
          for (let et = 0; et < this.modules.length; et++) tt += this.modules[et].getRules() + "\n";
          this.styleTag.textContent = tt;
          let Vt = et.head || et;
          this.styleTag.parentNode != Vt && Vt.insertBefore(this.styleTag, Vt.firstChild)
        }
      }
      setNonce(tt) {
        this.styleTag && this.styleTag.getAttribute("nonce") != tt && this.styleTag.setAttribute("nonce", tt)
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);