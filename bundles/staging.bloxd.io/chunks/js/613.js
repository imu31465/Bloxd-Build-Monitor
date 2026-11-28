export const id = 613;
export const ids = [613];
export const modules = {
  53497: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Aw,
      h: () => jw,
      k: () => sw,
      m: () => lb,
      n: () => Ww,
      q: () => Lb,
      r: () => Uw
    });
    var eb = Mb(53501),
      Hb = Mb(53510),
      pb = Mb(53528);
    class Vb {
      constructor(bb, wb, Mb, eb) {
        this.state = bb, this.pos = wb, this.explicit = Mb, this.view = eb, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(bb) {
        let wb = (0, pb.qb)(this.state).resolveInner(this.pos, -1);
        for (; wb && bb.indexOf(wb.name) < 0;) wb = wb.parent;
        return wb ? {
          from: wb.from,
          to: this.pos,
          text: this.state.sliceDoc(wb.from, this.pos),
          type: wb.type
        } : null
      }
      matchBefore(bb) {
        let wb = this.state.doc.lineAt(this.pos),
          Mb = Math.max(wb.from, this.pos - 250),
          eb = wb.text.slice(Mb - wb.from, this.pos - wb.from),
          Hb = eb.search(Ub(bb, !1));
        return Hb < 0 ? null : {
          from: Mb + Hb,
          to: this.pos,
          text: eb.slice(Hb)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(bb, wb, Mb) {
        "abort" == bb && this.abortListeners && (this.abortListeners.push(wb), Mb && Mb.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function gb(bb) {
      let wb = Object.keys(bb).join(""),
        Mb = /\w/.test(wb);
      return Mb && (wb = wb.replace(/\w/g, "")), `[${Mb?"\\w":""}${wb.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function lb(bb) {
      let wb = bb.map((bb => "string" == typeof bb ? {
          label: bb
        } : bb)),
        [Mb, eb] = wb.every((bb => /^\w+$/.test(bb.label))) ? [/\w*$/, /\w+$/] : function(bb) {
          let wb = Object.create(null),
            Mb = Object.create(null);
          for (let {
              label: Hb
            }
            of bb) {
            wb[Hb[0]] = !0;
            for (let bb = 1; bb < Hb.length; bb++) Mb[Hb[bb]] = !0
          }
          let eb = gb(wb) + gb(Mb) + "*$";
          return [new RegExp("^" + eb), new RegExp(eb)]
        }(wb);
      return bb => {
        let Hb = bb.matchBefore(eb);
        return Hb || bb.explicit ? {
          from: Hb ? Hb.from : bb.pos,
          options: wb,
          validFor: Mb
        } : null
      }
    }

    function Lb(bb, wb) {
      return Mb => {
        for (let wb = (0, pb.qb)(Mb.state).resolveInner(Mb.pos, -1); wb; wb = wb.parent) {
          if (bb.indexOf(wb.name) > -1) return null;
          if (wb.type.isTop) break
        }
        return wb(Mb)
      }
    }
    class Ib {
      constructor(bb, wb, Mb, eb) {
        this.completion = bb, this.source = wb, this.match = Mb, this.score = eb
      }
    }

    function Ob(bb) {
      return bb.selection.main.from
    }

    function Ub(bb, wb) {
      var Mb;
      let {
        source: eb
      } = bb, Hb = wb && "^" != eb[0], pb = "$" != eb[eb.length - 1];
      return Hb || pb ? new RegExp(`${Hb?"^":""}(?:${eb})${pb?"$":""}`, null !== (Mb = bb.flags) && void 0 !== Mb ? Mb : bb.ignoreCase ? "i" : "") : bb
    }
    const tb = eb.c.define();

    function Cb(bb, wb, Mb, Hb) {
      let {
        main: pb
      } = bb.selection, Vb = Mb - pb.from, gb = Hb - pb.from;
      return {
        ...bb.changeByRange((lb => {
          if (lb != pb && Mb != Hb && bb.sliceDoc(lb.from + Vb, lb.from + gb) != bb.sliceDoc(Mb, Hb)) return {
            range: lb
          };
          let Lb = bb.toText(wb);
          return {
            changes: {
              from: lb.from + Vb,
              to: Hb == pb.from ? lb.to : lb.from + gb,
              insert: Lb
            },
            range: eb.j.cursor(lb.from + Vb + Lb.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const Eb = new WeakMap;

    function Fb(bb) {
      if (!Array.isArray(bb)) return bb;
      let wb = Eb.get(bb);
      return wb || Eb.set(bb, wb = lb(bb)), wb
    }
    const Bb = eb.E.define(),
      sb = eb.E.define();
    class mb {
      constructor(bb) {
        this.pattern = bb, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let wb = 0; wb < bb.length;) {
          let Mb = (0, eb.L)(bb, wb),
            Hb = (0, eb.M)(Mb);
          this.chars.push(Mb);
          let pb = bb.slice(wb, wb + Hb),
            Vb = pb.toUpperCase();
          this.folded.push((0, eb.L)(Vb == pb ? pb.toLowerCase() : Vb, 0)), wb += Hb
        }
        this.astral = bb.length != this.chars.length
      }
      ret(bb, wb) {
        return this.score = bb, this.matched = wb, this
      }
      match(bb) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (bb.length < this.pattern.length) return null;
        let {
          chars: wb,
          folded: Mb,
          any: Hb,
          precise: pb,
          byWord: Vb
        } = this;
        if (1 == wb.length) {
          let Hb = (0, eb.L)(bb, 0),
            pb = (0, eb.M)(Hb),
            Vb = pb == bb.length ? 0 : -100;
          if (Hb == wb[0]);
          else {
            if (Hb != Mb[0]) return null;
            Vb += -200
          }
          return this.ret(Vb, [0, pb])
        }
        let gb = bb.indexOf(this.pattern);
        if (0 == gb) return this.ret(bb.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let lb = wb.length,
          Lb = 0;
        if (gb < 0) {
          for (let pb = 0, Vb = Math.min(bb.length, 200); pb < Vb && Lb < lb;) {
            let Vb = (0, eb.L)(bb, pb);
            Vb != wb[Lb] && Vb != Mb[Lb] || (Hb[Lb++] = pb), pb += (0, eb.M)(Vb)
          }
          if (Lb < lb) return null
        }
        let Ib = 0,
          Ob = 0,
          Ub = !1,
          tb = 0,
          Cb = -1,
          Eb = -1,
          Fb = /[a-z]/.test(bb),
          Bb = !0;
        for (let sb = 0, mb = Math.min(bb.length, 200), hb = 0; sb < mb && Ob < lb;) {
          let Hb = (0, eb.L)(bb, sb);
          gb < 0 && (Ib < lb && Hb == wb[Ib] && (pb[Ib++] = sb), tb < lb && (Hb == wb[tb] || Hb == Mb[tb] ? (0 == tb && (Cb = sb), Eb = sb + 1, tb++) : tb = 0));
          let Lb, mb = Hb < 255 ? Hb >= 48 && Hb <= 57 || Hb >= 97 && Hb <= 122 ? 2 : Hb >= 65 && Hb <= 90 ? 1 : 0 : (Lb = (0, eb.Z)(Hb)) != Lb.toLowerCase() ? 1 : Lb != Lb.toUpperCase() ? 2 : 0;
          (!sb || 1 == mb && Fb || 0 == hb && 0 != mb) && (wb[Ob] == Hb || Mb[Ob] == Hb && (Ub = !0) ? Vb[Ob++] = sb : Vb.length && (Bb = !1)), hb = mb, sb += (0, eb.M)(Hb)
        }
        return Ob == lb && 0 == Vb[0] && Bb ? this.result((Ub ? -200 : 0) - 100, Vb, bb) : tb == lb && 0 == Cb ? this.ret(-200 - bb.length + (Eb == bb.length ? 0 : -100), [0, Eb]) : gb > -1 ? this.ret(-700 - bb.length, [gb, gb + this.pattern.length]) : tb == lb ? this.ret(-900 - bb.length, [Cb, Eb]) : Ob == lb ? this.result((Ub ? -200 : 0) - 100 - 700 + (Bb ? 0 : -1100), Vb, bb) : 2 == wb.length ? null : this.result((Hb[0] ? -700 : 0) - 200 - 1100, Hb, bb)
      }
      result(bb, wb, Mb) {
        let Hb = [],
          pb = 0;
        for (let Vb of wb) {
          let bb = Vb + (this.astral ? (0, eb.M)((0, eb.L)(Mb, Vb)) : 1);
          pb && Hb[pb - 1] == Vb ? Hb[pb - 1] = bb : (Hb[pb++] = Vb, Hb[pb++] = bb)
        }
        return this.ret(bb - Mb.length, Hb)
      }
    }
    class hb {
      constructor(bb) {
        this.pattern = bb, this.matched = [], this.score = 0, this.folded = bb.toLowerCase()
      }
      match(bb) {
        if (bb.length < this.pattern.length) return null;
        let wb = bb.slice(0, this.pattern.length),
          Mb = wb == this.pattern ? 0 : wb.toLowerCase() == this.folded ? -200 : null;
        return null == Mb ? null : (this.matched = [0, wb.length], this.score = Mb + (bb.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const zb = eb.o.define({
      combine: bb => (0, eb.P)(bb, {
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
        positionInfo: xb,
        filterStrict: !1,
        compareCompletions: (bb, wb) => (bb.sortText || bb.label).localeCompare(wb.sortText || wb.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (bb, wb) => bb && wb,
        closeOnBlur: (bb, wb) => bb && wb,
        icons: (bb, wb) => bb && wb,
        tooltipClass: (bb, wb) => Mb => Xb(bb(Mb), wb(Mb)),
        optionClass: (bb, wb) => Mb => Xb(bb(Mb), wb(Mb)),
        addToOptions: (bb, wb) => bb.concat(wb),
        filterStrict: (bb, wb) => bb || wb
      })
    });

    function Xb(bb, wb) {
      return bb ? wb ? bb + " " + wb : bb : wb
    }

    function xb(bb, wb, Mb, eb, pb, Vb) {
      let gb, lb, Lb = bb.textDirection == Hb.e.RTL,
        Ib = Lb,
        Ob = !1,
        Ub = "top",
        tb = wb.left - pb.left,
        Cb = pb.right - wb.right,
        Eb = eb.right - eb.left,
        Fb = eb.bottom - eb.top;
      if (Ib && tb < Math.min(Eb, Cb) ? Ib = !1 : !Ib && Cb < Math.min(Eb, tb) && (Ib = !0), Eb <= (Ib ? tb : Cb)) gb = Math.max(pb.top, Math.min(Mb.top, pb.bottom - Fb)) - wb.top, lb = Math.min(400, Ib ? tb : Cb);
      else {
        Ob = !0, lb = Math.min(400, (Lb ? wb.right : pb.right - wb.left) - 30);
        let bb = pb.bottom - wb.bottom;
        bb >= Fb || bb > wb.top ? gb = Mb.bottom - wb.top : (Ub = "bottom", gb = wb.bottom - Mb.top)
      }
      return {
        style: `${Ub}: ${gb/((wb.bottom-wb.top)/Vb.offsetHeight)}px; max-width: ${lb/((wb.right-wb.left)/Vb.offsetWidth)}px`,
        class: "cm-completionInfo-" + (Ob ? Lb ? "left-narrow" : "right-narrow" : Ib ? "left" : "right")
      }
    }
    const jb = eb.E.define();

    function Kb(bb, wb, Mb) {
      if (bb <= Mb) return {
        from: 0,
        to: bb
      };
      if (wb < 0 && (wb = 0), wb <= bb >> 1) {
        let bb = Math.floor(wb / Mb);
        return {
          from: bb * Mb,
          to: (bb + 1) * Mb
        }
      }
      let eb = Math.floor((bb - wb) / Mb);
      return {
        from: bb - (eb + 1) * Mb,
        to: bb - eb * Mb
      }
    }
    class rb {
      constructor(bb, wb, Mb) {
        this.view = bb, this.stateField = wb, this.applyCompletion = Mb, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: bb => this.placeInfo(bb),
          key: this
        }, this.space = null, this.currentClass = "";
        let eb = bb.state.field(wb),
          {
            options: Hb,
            selected: pb
          } = eb.open,
          Vb = bb.state.facet(zb);
        this.optionContent = function(bb) {
          let wb = bb.addToOptions.slice();
          return bb.icons && wb.push({
            render(bb) {
              let wb = document.createElement("div");
              return wb.classList.add("cm-completionIcon"), bb.type && wb.classList.add(...bb.type.split(/\s+/g).map((bb => "cm-completionIcon-" + bb))), wb.setAttribute("aria-hidden", "true"), wb
            },
            position: 20
          }), wb.push({
            render(bb, wb, Mb, eb) {
              let Hb = document.createElement("span");
              Hb.className = "cm-completionLabel";
              let pb = bb.displayLabel || bb.label,
                Vb = 0;
              for (let gb = 0; gb < eb.length;) {
                let bb = eb[gb++],
                  wb = eb[gb++];
                bb > Vb && Hb.appendChild(document.createTextNode(pb.slice(Vb, bb)));
                let Mb = Hb.appendChild(document.createElement("span"));
                Mb.appendChild(document.createTextNode(pb.slice(bb, wb))), Mb.className = "cm-completionMatchedText", Vb = wb
              }
              return Vb < pb.length && Hb.appendChild(document.createTextNode(pb.slice(Vb))), Hb
            },
            position: 50
          }, {
            render(bb) {
              if (!bb.detail) return null;
              let wb = document.createElement("span");
              return wb.className = "cm-completionDetail", wb.textContent = bb.detail, wb
            },
            position: 80
          }), wb.sort(((bb, wb) => bb.position - wb.position)).map((bb => bb.render))
        }(Vb), this.optionClass = Vb.optionClass, this.tooltipClass = Vb.tooltipClass, this.range = Kb(Hb.length, pb, Vb.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(bb.state), this.dom.addEventListener("mousedown", (Mb => {
          let {
            options: eb
          } = bb.state.field(wb).open;
          for (let wb, Hb = Mb.target; Hb && Hb != this.dom; Hb = Hb.parentNode)
            if ("LI" == Hb.nodeName && (wb = /-(\d+)$/.exec(Hb.id)) && +wb[1] < eb.length) return this.applyCompletion(bb, eb[+wb[1]]), void Mb.preventDefault();
          if (Mb.target == this.list) {
            let wb = this.list.classList.contains("cm-completionListIncompleteTop") && Mb.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && Mb.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != wb && (bb.dispatch({
              effects: jb.of(wb)
            }), Mb.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (wb => {
          let Mb = bb.state.field(this.stateField, !1);
          Mb && Mb.tooltip && bb.state.facet(zb).closeOnBlur && wb.relatedTarget != bb.contentDOM && bb.dispatch({
            effects: sb.of(null)
          })
        })), this.showOptions(Hb, eb.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(bb, wb) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(bb, wb, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(bb) {
        var wb;
        let Mb = bb.state.field(this.stateField),
          eb = bb.startState.field(this.stateField);
        if (this.updateTooltipClass(bb.state), Mb != eb) {
          let {
            options: Hb,
            selected: pb,
            disabled: Vb
          } = Mb.open;
          eb.open && eb.open.options == Hb || (this.range = Kb(Hb.length, pb, bb.state.facet(zb).maxRenderedOptions), this.showOptions(Hb, Mb.id)), this.updateSel(), Vb != (null === (wb = eb.open) || void 0 === wb ? void 0 : wb.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!Vb)
        }
      }
      updateTooltipClass(bb) {
        let wb = this.tooltipClass(bb);
        if (wb != this.currentClass) {
          for (let bb of this.currentClass.split(" ")) bb && this.dom.classList.remove(bb);
          for (let bb of wb.split(" ")) bb && this.dom.classList.add(bb);
          this.currentClass = wb
        }
      }
      positioned(bb) {
        this.space = bb, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let bb = this.view.state.field(this.stateField),
          wb = bb.open;
        (wb.selected > -1 && wb.selected < this.range.from || wb.selected >= this.range.to) && (this.range = Kb(wb.options.length, wb.selected, this.view.state.facet(zb).maxRenderedOptions), this.showOptions(wb.options, bb.id));
        let Mb = this.updateSelectedOption(wb.selected);
        if (Mb) {
          this.destroyInfo();
          let {
            completion: eb
          } = wb.options[wb.selected], {
            info: pb
          } = eb;
          if (!pb) return;
          let Vb = "string" === typeof pb ? document.createTextNode(pb) : pb(eb);
          if (!Vb) return;
          "then" in Vb ? Vb.then((wb => {
            wb && this.view.state.field(this.stateField, !1) == bb && this.addInfoPane(wb, eb)
          })).catch((bb => (0, Hb.ab)(this.view.state, bb, "completion info"))) : (this.addInfoPane(Vb, eb), Mb.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(bb, wb) {
        this.destroyInfo();
        let Mb = this.info = document.createElement("div");
        if (Mb.className = "cm-tooltip cm-completionInfo", Mb.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != bb.nodeType) Mb.appendChild(bb), this.infoDestroy = null;
        else {
          let {
            dom: wb,
            destroy: eb
          } = bb;
          Mb.appendChild(wb), this.infoDestroy = eb || null
        }
        this.dom.appendChild(Mb), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(bb) {
        let wb = null;
        for (let Mb = this.list.firstChild, eb = this.range.from; Mb; Mb = Mb.nextSibling, eb++) "LI" == Mb.nodeName && Mb.id ? eb == bb ? Mb.hasAttribute("aria-selected") || (Mb.setAttribute("aria-selected", "true"), wb = Mb) : Mb.hasAttribute("aria-selected") && (Mb.removeAttribute("aria-selected"), Mb.removeAttribute("aria-describedby")) : eb--;
        return wb && function(bb, wb) {
          let Mb = bb.getBoundingClientRect(),
            eb = wb.getBoundingClientRect(),
            Hb = Mb.height / bb.offsetHeight;
          eb.top < Mb.top ? bb.scrollTop -= (Mb.top - eb.top) / Hb : eb.bottom > Mb.bottom && (bb.scrollTop += (eb.bottom - Mb.bottom) / Hb)
        }(this.list, wb), wb
      }
      measureInfo() {
        let bb = this.dom.querySelector("[aria-selected]");
        if (!bb || !this.info) return null;
        let wb = this.dom.getBoundingClientRect(),
          Mb = this.info.getBoundingClientRect(),
          eb = bb.getBoundingClientRect(),
          Hb = this.space;
        if (!Hb) {
          let bb = this.dom.ownerDocument.documentElement;
          Hb = {
            left: 0,
            top: 0,
            right: bb.clientWidth,
            bottom: bb.clientHeight
          }
        }
        return eb.top > Math.min(Hb.bottom, wb.bottom) - 10 || eb.bottom < Math.max(Hb.top, wb.top) + 10 ? null : this.view.state.facet(zb).positionInfo(this.view, wb, eb, Mb, Hb, this.dom)
      }
      placeInfo(bb) {
        this.info && (bb ? (bb.style && (this.info.style.cssText = bb.style), this.info.className = "cm-tooltip cm-completionInfo " + (bb.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(bb, wb, Mb) {
        const eb = document.createElement("ul");
        eb.id = wb, eb.setAttribute("role", "listbox"), eb.setAttribute("aria-expanded", "true"), eb.setAttribute("aria-label", this.view.state.phrase("Completions")), eb.addEventListener("mousedown", (bb => {
          bb.target == eb && bb.preventDefault()
        }));
        let Hb = null;
        for (let pb = Mb.from; pb < Mb.to; pb++) {
          let {
            completion: Vb,
            match: gb
          } = bb[pb], {
            section: lb
          } = Vb;
          if (lb) {
            let bb = "string" == typeof lb ? lb : lb.name;
            if (bb != Hb && (pb > Mb.from || 0 == Mb.from))
              if (Hb = bb, "string" != typeof lb && lb.header) eb.appendChild(lb.header(lb));
              else {
                eb.appendChild(document.createElement("completion-section")).textContent = bb
              }
          }
          const Lb = eb.appendChild(document.createElement("li"));
          Lb.id = wb + "-" + pb, Lb.setAttribute("role", "option");
          let Ib = this.optionClass(Vb);
          Ib && (Lb.className = Ib);
          for (let bb of this.optionContent) {
            let wb = bb(Vb, this.view.state, this.view, gb);
            wb && Lb.appendChild(wb)
          }
        }
        return Mb.from && eb.classList.add("cm-completionListIncompleteTop"), Mb.to < bb.length && eb.classList.add("cm-completionListIncompleteBottom"), eb
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Rb(bb, wb) {
      return Mb => new rb(Mb, bb, wb)
    }

    function Db(bb) {
      return 100 * (bb.boost || 0) + (bb.apply ? 10 : 0) + (bb.info ? 5 : 0) + (bb.type ? 1 : 0)
    }
    class cb {
      constructor(bb, wb, Mb, eb, Hb, pb) {
        this.options = bb, this.attrs = wb, this.tooltip = Mb, this.timestamp = eb, this.selected = Hb, this.disabled = pb
      }
      setSelected(bb, wb) {
        return bb == this.selected || bb >= this.options.length ? this : new cb(this.options, Ab(wb, bb), this.tooltip, this.timestamp, bb, this.disabled)
      }
      static build(bb, wb, Mb, eb, Hb, pb) {
        if (eb && !pb && bb.some((bb => bb.isPending))) return eb.setDisabled();
        let Vb = function(bb, wb) {
          let Mb = [],
            eb = null,
            Hb = null,
            pb = bb => {
              Mb.push(bb);
              let {
                section: wb
              } = bb.completion;
              if (wb) {
                eb || (eb = []);
                let bb = "string" == typeof wb ? wb : wb.name;
                eb.some((wb => wb.name == bb)) || eb.push("string" == typeof wb ? {
                  name: bb
                } : wb)
              }
            },
            Vb = wb.facet(zb);
          for (let Ob of bb)
            if (Ob.hasResult()) {
              let bb = Ob.result.getMatch;
              if (!1 === Ob.result.filter)
                for (let wb of Ob.result.options) pb(new Ib(wb, Ob.source, bb ? bb(wb) : [], 1e9 - Mb.length));
              else {
                let Mb, eb = wb.sliceDoc(Ob.from, Ob.to),
                  gb = Vb.filterStrict ? new hb(eb) : new mb(eb);
                for (let wb of Ob.result.options)
                  if (Mb = gb.match(wb.label)) {
                    let eb = wb.displayLabel ? bb ? bb(wb, Mb.matched) : [] : Mb.matched,
                      Vb = Mb.score + (wb.boost || 0);
                    if (pb(new Ib(wb, Ob.source, eb, Vb)), "object" == typeof wb.section && "dynamic" === wb.section.rank) {
                      let {
                        name: bb
                      } = wb.section;
                      Hb || (Hb = Object.create(null)), Hb[bb] = Math.max(Vb, Hb[bb] || -1e9)
                    }
                  }
              }
            } if (eb) {
            let bb = Object.create(null),
              wb = 0,
              pb = (bb, wb) => ("dynamic" === bb.rank && "dynamic" === wb.rank ? Hb[wb.name] - Hb[bb.name] : 0) || ("number" == typeof bb.rank ? bb.rank : 1e9) - ("number" == typeof wb.rank ? wb.rank : 1e9) || (bb.name < wb.name ? -1 : 1);
            for (let Mb of eb.sort(pb)) wb -= 1e5, bb[Mb.name] = wb;
            for (let eb of Mb) {
              let {
                section: wb
              } = eb.completion;
              wb && (eb.score += bb["string" == typeof wb ? wb : wb.name])
            }
          }
          let gb = [],
            lb = null,
            Lb = Vb.compareCompletions;
          for (let Ib of Mb.sort(((bb, wb) => wb.score - bb.score || Lb(bb.completion, wb.completion)))) {
            let bb = Ib.completion;
            !lb || lb.label != bb.label || lb.detail != bb.detail || null != lb.type && null != bb.type && lb.type != bb.type || lb.apply != bb.apply || lb.boost != bb.boost ? gb.push(Ib) : Db(Ib.completion) > Db(lb) && (gb[gb.length - 1] = Ib), lb = Ib.completion
          }
          return gb
        }(bb, wb);
        if (!Vb.length) return eb && bb.some((bb => bb.isPending)) ? eb.setDisabled() : null;
        let gb = wb.facet(zb).selectOnOpen ? 0 : -1;
        if (eb && eb.selected != gb && -1 != eb.selected) {
          let bb = eb.options[eb.selected].completion;
          for (let wb = 0; wb < Vb.length; wb++)
            if (Vb[wb].completion == bb) {
              gb = wb;
              break
            }
        }
        return new cb(Vb, Ab(Mb, gb), {
          pos: bb.reduce(((bb, wb) => wb.hasResult() ? Math.min(bb, wb.from) : bb), 1e8),
          create: qb,
          above: Hb.aboveCursor
        }, eb ? eb.timestamp : Date.now(), gb, !1)
      }
      map(bb) {
        return new cb(this.options, this.attrs, {
          ...this.tooltip,
          pos: bb.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new cb(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class Yb {
      constructor(bb, wb, Mb) {
        this.active = bb, this.id = wb, this.open = Mb
      }
      static start() {
        return new Yb(Wb, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(bb) {
        let {
          state: wb
        } = bb, Mb = wb.facet(zb), eb = (Mb.override || wb.languageDataAt("autocomplete", Ob(wb)).map(Fb)).map((wb => (this.active.find((bb => bb.source == wb)) || new Sb(wb, this.active.some((bb => 0 != bb.state)) ? 1 : 0)).update(bb, Mb)));
        eb.length == this.active.length && eb.every(((bb, wb) => bb == this.active[wb])) && (eb = this.active);
        let Hb = this.open,
          pb = bb.effects.some((bb => bb.is(vb)));
        Hb && bb.docChanged && (Hb = Hb.map(bb.changes)), bb.selection || eb.some((wb => wb.hasResult() && bb.changes.touchesRange(wb.from, wb.to))) || ! function(bb, wb) {
          if (bb == wb) return !0;
          for (let Mb = 0, eb = 0;;) {
            for (; Mb < bb.length && !bb[Mb].hasResult();) Mb++;
            for (; eb < wb.length && !wb[eb].hasResult();) eb++;
            let Hb = Mb == bb.length,
              pb = eb == wb.length;
            if (Hb || pb) return Hb == pb;
            if (bb[Mb++].result != wb[eb++].result) return !1
          }
        }(eb, this.active) || pb ? Hb = cb.build(eb, wb, this.id, Hb, Mb, pb) : Hb && Hb.disabled && !eb.some((bb => bb.isPending)) && (Hb = null), !Hb && eb.every((bb => !bb.isPending)) && eb.some((bb => bb.hasResult())) && (eb = eb.map((bb => bb.hasResult() ? new Sb(bb.source, 0) : bb)));
        for (let Vb of bb.effects) Vb.is(jb) && (Hb = Hb && Hb.setSelected(Vb.value, this.id));
        return eb == this.active && Hb == this.open ? this : new Yb(eb, this.id, Hb)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Zb : fb
      }
    }
    const Zb = {
        "aria-autocomplete": "list"
      },
      fb = {};

    function Ab(bb, wb) {
      let Mb = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": bb
      };
      return wb > -1 && (Mb["aria-activedescendant"] = bb + "-" + wb), Mb
    }
    const Wb = [];

    function Jb(bb, wb) {
      if (bb.isUserEvent("input.complete")) {
        let Mb = bb.annotation(tb);
        if (Mb && wb.activateOnCompletion(Mb)) return 12
      }
      let Mb = bb.isUserEvent("input.type");
      return Mb && wb.activateOnTyping ? 5 : Mb ? 1 : bb.isUserEvent("delete.backward") ? 2 : bb.selection ? 8 : bb.docChanged ? 16 : 0
    }
    class Sb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = bb, this.state = wb, this.explicit = Mb
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(bb, wb) {
        let Mb = Jb(bb, wb),
          eb = this;
        (8 & Mb || 16 & Mb && this.touches(bb)) && (eb = new Sb(eb.source, 0)), 4 & Mb && 0 == eb.state && (eb = new Sb(this.source, 1)), eb = eb.updateFor(bb, Mb);
        for (let Hb of bb.effects)
          if (Hb.is(Bb)) eb = new Sb(eb.source, 1, Hb.value);
          else if (Hb.is(sb)) eb = new Sb(eb.source, 0);
        else if (Hb.is(vb))
          for (let bb of Hb.value) bb.source == eb.source && (eb = bb);
        return eb
      }
      updateFor(bb, wb) {
        return this.map(bb.changes)
      }
      map(bb) {
        return this
      }
      touches(bb) {
        return bb.changes.touchesRange(Ob(bb.state))
      }
    }
    class Nb extends Sb {
      constructor(bb, wb, Mb, eb, Hb, pb) {
        super(bb, 3, wb), this.limit = Mb, this.result = eb, this.from = Hb, this.to = pb
      }
      hasResult() {
        return !0
      }
      updateFor(bb, wb) {
        var Mb;
        if (!(3 & wb)) return this.map(bb.changes);
        let eb = this.result;
        eb.map && !bb.changes.empty && (eb = eb.map(eb, bb.changes));
        let Hb = bb.changes.mapPos(this.from),
          pb = bb.changes.mapPos(this.to, 1),
          gb = Ob(bb.state);
        if (gb > pb || !eb || 2 & wb && (Ob(bb.startState) == this.from || gb < this.limit)) return new Sb(this.source, 4 & wb ? 1 : 0);
        let lb = bb.changes.mapPos(this.limit);
        return function(bb, wb, Mb, eb) {
          if (!bb) return !1;
          let Hb = wb.sliceDoc(Mb, eb);
          return "function" == typeof bb ? bb(Hb, Mb, eb, wb) : Ub(bb, !0).test(Hb)
        }(eb.validFor, bb.state, Hb, pb) ? new Nb(this.source, this.explicit, lb, eb, Hb, pb) : eb.update && (eb = eb.update(eb, Hb, pb, new Vb(bb.state, gb, !1))) ? new Nb(this.source, this.explicit, lb, eb, eb.from, null !== (Mb = eb.to) && void 0 !== Mb ? Mb : Ob(bb.state)) : new Sb(this.source, 1, this.explicit)
      }
      map(bb) {
        if (bb.empty) return this;
        return (this.result.map ? this.result.map(this.result, bb) : this.result) ? new Nb(this.source, this.explicit, bb.mapPos(this.limit), this.result, bb.mapPos(this.from), bb.mapPos(this.to, 1)) : new Sb(this.source, 0)
      }
      touches(bb) {
        return bb.changes.touchesRange(this.from, this.to)
      }
    }
    const vb = eb.E.define({
        map: (bb, wb) => bb.map((bb => bb.map(wb)))
      }),
      Qb = eb.G.define({
        create: () => Yb.start(),
        update: (bb, wb) => bb.update(wb),
        provide: bb => [Hb.mb.from(bb, (bb => bb.tooltip)), Hb.g.contentAttributes.from(bb, (bb => bb.attrs))]
      });

    function Gb(bb, wb) {
      const Mb = wb.completion.apply || wb.completion.label;
      let eb = bb.state.field(Qb).active.find((bb => bb.source == wb.source));
      return eb instanceof Nb && ("string" == typeof Mb ? bb.dispatch({
        ...Cb(bb.state, Mb, eb.from, eb.to),
        annotations: tb.of(wb.completion)
      }) : Mb(bb, wb.completion, eb.from, eb.to), !0)
    }
    const qb = Rb(Qb, Gb);

    function ab(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return Mb => {
        let eb = Mb.state.field(Qb, !1);
        if (!eb || !eb.open || eb.open.disabled || Date.now() - eb.open.timestamp < Mb.state.facet(zb).interactionDelay) return !1;
        let pb, Vb = 1;
        "page" == wb && (pb = (0, Hb.C)(Mb, eb.open.tooltip)) && (Vb = Math.max(2, Math.floor(pb.dom.offsetHeight / pb.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: gb
        } = eb.open.options, lb = eb.open.selected > -1 ? eb.open.selected + Vb * (bb ? 1 : -1) : bb ? 0 : gb - 1;
        return lb < 0 ? lb = "page" == wb ? 0 : gb - 1 : lb >= gb && (lb = "page" == wb ? gb - 1 : 0), Mb.dispatch({
          effects: jb.of(lb)
        }), !0
      }
    }
    const ib = bb => !!bb.state.field(Qb, !1) && (bb.dispatch({
      effects: Bb.of(!0)
    }), !0);
    class ub {
      constructor(bb, wb) {
        this.active = bb, this.context = wb, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const db = Hb.n.fromClass(class {
        constructor(bb) {
          this.view = bb, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let wb of bb.state.field(Qb).active) wb.isPending && this.startQuery(wb)
        }
        update(bb) {
          let wb = bb.state.field(Qb),
            Mb = bb.state.facet(zb);
          if (!bb.selectionSet && !bb.docChanged && bb.startState.field(Qb) == wb) return;
          let eb = bb.transactions.some((bb => {
            let wb = Jb(bb, Mb);
            return 8 & wb || (bb.selection || bb.docChanged) && !(3 & wb)
          }));
          for (let gb = 0; gb < this.running.length; gb++) {
            let wb = this.running[gb];
            if (eb || wb.context.abortOnDocChange && bb.docChanged || wb.updates.length + bb.transactions.length > 50 && Date.now() - wb.time > 1e3) {
              for (let bb of wb.context.abortListeners) try {
                bb()
              } catch (Vb) {
                (0, Hb.ab)(this.view.state, Vb)
              }
              wb.context.abortListeners = null, this.running.splice(gb--, 1)
            } else wb.updates.push(...bb.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), bb.transactions.some((bb => bb.effects.some((bb => bb.is(Bb))))) && (this.pendingStart = !0);
          let pb = this.pendingStart ? 50 : Mb.activateOnTypingDelay;
          if (this.debounceUpdate = wb.active.some((bb => bb.isPending && !this.running.some((wb => wb.active.source == bb.source)))) ? setTimeout((() => this.startUpdate()), pb) : -1, 0 != this.composing)
            for (let Hb of bb.transactions) Hb.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && Hb.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: bb
          } = this.view, wb = bb.field(Qb);
          for (let Mb of wb.active) Mb.isPending && !this.running.some((bb => bb.active.source == Mb.source)) && this.startQuery(Mb);
          this.running.length && wb.open && wb.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(zb).updateSyncTime))
        }
        startQuery(bb) {
          let {
            state: wb
          } = this.view, Mb = Ob(wb), eb = new Vb(wb, Mb, bb.explicit, this.view), pb = new ub(bb, eb);
          this.running.push(pb), Promise.resolve(bb.source(eb)).then((bb => {
            pb.context.aborted || (pb.done = bb || null, this.scheduleAccept())
          }), (bb => {
            this.view.dispatch({
              effects: sb.of(null)
            }), (0, Hb.ab)(this.view.state, bb)
          }))
        }
        scheduleAccept() {
          this.running.every((bb => void 0 !== bb.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(zb).updateSyncTime))
        }
        accept() {
          var bb;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let wb = [],
            Mb = this.view.state.facet(zb),
            eb = this.view.state.field(Qb);
          for (let Hb = 0; Hb < this.running.length; Hb++) {
            let pb = this.running[Hb];
            if (void 0 === pb.done) continue;
            if (this.running.splice(Hb--, 1), pb.done) {
              let eb = Ob(pb.updates.length ? pb.updates[0].startState : this.view.state),
                Hb = Math.min(eb, pb.done.from + (pb.active.explicit ? 0 : 1)),
                Vb = new Nb(pb.active.source, pb.active.explicit, Hb, pb.done, pb.done.from, null !== (bb = pb.done.to) && void 0 !== bb ? bb : eb);
              for (let bb of pb.updates) Vb = Vb.update(bb, Mb);
              if (Vb.hasResult()) {
                wb.push(Vb);
                continue
              }
            }
            let Vb = eb.active.find((bb => bb.source == pb.active.source));
            if (Vb && Vb.isPending)
              if (null == pb.done) {
                let bb = new Sb(pb.active.source, 0);
                for (let wb of pb.updates) bb = bb.update(wb, Mb);
                bb.isPending || wb.push(bb)
              } else this.startQuery(Vb)
          }(wb.length || eb.open && eb.open.disabled) && this.view.dispatch({
            effects: vb.of(wb)
          })
        }
      }, {
        eventHandlers: {
          blur(bb) {
            let wb = this.view.state.field(Qb, !1);
            if (wb && wb.tooltip && this.view.state.facet(zb).closeOnBlur) {
              let Mb = wb.open && (0, Hb.C)(this.view, wb.open.tooltip);
              Mb && Mb.dom.contains(bb.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: sb.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: Bb.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      Pb = "object" == typeof navigator && /Win/.test(navigator.platform),
      nb = eb.v.highest(Hb.g.domEventHandlers({
        keydown(bb, wb) {
          let Mb = wb.state.field(Qb, !1);
          if (!Mb || !Mb.open || Mb.open.disabled || Mb.open.selected < 0 || bb.key.length > 1 || bb.ctrlKey && (!Pb || !bb.altKey) || bb.metaKey) return !1;
          let eb = Mb.open.options[Mb.open.selected],
            Hb = Mb.active.find((bb => bb.source == eb.source)),
            pb = eb.completion.commitCharacters || Hb.result.commitCharacters;
          return pb && pb.indexOf(bb.key) > -1 && Gb(wb, eb), !1
        }
      })),
      yb = Hb.g.baseTheme({
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
    class ob {
      constructor(bb, wb, Mb, eb) {
        this.field = bb, this.line = wb, this.from = Mb, this.to = eb
      }
    }
    class Tb {
      constructor(bb, wb, Mb) {
        this.field = bb, this.from = wb, this.to = Mb
      }
      map(bb) {
        let wb = bb.mapPos(this.from, -1, eb.s.TrackDel),
          Mb = bb.mapPos(this.to, 1, eb.s.TrackDel);
        return null == wb || null == Mb ? null : new Tb(this.field, wb, Mb)
      }
    }
    class kb {
      constructor(bb, wb) {
        this.lines = bb, this.fieldPositions = wb
      }
      instantiate(bb, wb) {
        let Mb = [],
          eb = [wb],
          Hb = bb.doc.lineAt(wb),
          Vb = /^\s*/.exec(Hb.text)[0];
        for (let lb of this.lines) {
          if (Mb.length) {
            let Mb = Vb,
              Hb = /^\t*/.exec(lb)[0].length;
            for (let wb = 0; wb < Hb; wb++) Mb += bb.facet(pb.eb);
            eb.push(wb + Mb.length - Hb), lb = Mb + lb.slice(Hb)
          }
          Mb.push(lb), wb += lb.length + 1
        }
        let gb = this.fieldPositions.map((bb => new Tb(bb.field, eb[bb.line] + bb.from, eb[bb.line] + bb.to)));
        return {
          text: Mb,
          gF: gb
        }
      }
      static parse(bb) {
        let wb, Mb = [],
          eb = [],
          Hb = [];
        for (let pb of bb.split(/\r\n?|\n/)) {
          for (; wb = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(pb);) {
            let bb = wb[1] ? +wb[1] : null,
              Vb = wb[2] || wb[3] || "",
              gb = -1,
              lb = Vb.replace(/\\[{}]/g, (bb => bb[1]));
            for (let wb = 0; wb < Mb.length; wb++)(null != bb ? Mb[wb].seq == bb : lb && Mb[wb].name == lb) && (gb = wb);
            if (gb < 0) {
              let wb = 0;
              for (; wb < Mb.length && (null == bb || null != Mb[wb].seq && Mb[wb].seq < bb);) wb++;
              Mb.splice(wb, 0, {
                seq: bb,
                name: lb
              }), gb = wb;
              for (let bb of Hb) bb.field >= gb && bb.field++
            }
            for (let Mb of Hb)
              if (Mb.line == eb.length && Mb.from > wb.index) {
                let bb = wb[2] ? 3 + (wb[1] || "").length : 2;
                Mb.from -= bb, Mb.to -= bb
              } Hb.push(new ob(gb, eb.length, wb.index, wb.index + lb.length)), pb = pb.slice(0, wb.index) + Vb + pb.slice(wb.index + wb[0].length)
          }
          pb = pb.replace(/\\([{}])/g, ((bb, wb, Mb) => {
            for (let pb of Hb) pb.line == eb.length && pb.from > Mb && (pb.from--, pb.to--);
            return wb
          })), eb.push(pb)
        }
        return new kb(eb, Hb)
      }
    }
    let bw = Hb.d.widget({
        widget: new class extends Hb.o {
          toDOM() {
            let bb = document.createElement("span");
            return bb.className = "cm-snippetFieldPosition", bb
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      ww = Hb.d.mark({
        class: "cm-snippetField"
      });
    class Mw {
      constructor(bb, wb) {
        this.gF = bb, this.active = wb, this.deco = Hb.d.set(bb.map((bb => (bb.from == bb.to ? bw : ww).range(bb.from, bb.to))), !0)
      }
      map(bb) {
        let wb = [];
        for (let Mb of this.gF) {
          let eb = Mb.map(bb);
          if (!eb) return null;
          wb.push(eb)
        }
        return new Mw(wb, this.active)
      }
      selectionInsideField(bb) {
        return bb.gF.every((bb => this.gF.some((wb => wb.field == this.active && wb.from <= bb.from && wb.to >= bb.to))))
      }
    }
    const ew = eb.E.define({
        map: (bb, wb) => bb && bb.map(wb)
      }),
      Hw = eb.E.define(),
      pw = eb.G.define({
        create: () => null,
        update(bb, wb) {
          for (let Mb of wb.effects) {
            if (Mb.is(ew)) return Mb.value;
            if (Mb.is(Hw) && bb) return new Mw(bb.gF, Mb.value)
          }
          return bb && wb.docChanged && (bb = bb.map(wb.changes)), bb && wb.selection && !bb.selectionInsideField(wb.selection) && (bb = null), bb
        },
        provide: bb => Hb.g.ze.from(bb, (bb => bb ? bb.deco : Hb.d.none))
      });

    function Vw(bb, wb) {
      return eb.j.create(bb.filter((bb => bb.field == wb)).map((bb => eb.j.range(bb.from, bb.to))))
    }

    function gw(bb) {
      let wb = kb.parse(bb);
      return (bb, Mb, Hb, pb) => {
        let {
          text: Vb,
          gF: gb
        } = wb.instantiate(bb.state, Hb), {
          main: lb
        } = bb.state.selection, Lb = {
          changes: {
            from: Hb,
            to: pb == lb.from ? lb.to : pb,
            insert: eb.H.of(Vb)
          },
          scrollIntoView: !0,
          annotations: Mb ? [tb.of(Mb), eb.J.userEvent.of("input.complete")] : void 0
        };
        if (gb.length && (Lb.selection = Vw(gb, 0)), gb.some((bb => bb.field > 0))) {
          let wb = new Mw(gb, 0),
            Mb = Lb.effects = [ew.of(wb)];
          void 0 === bb.state.field(pw, !1) && Mb.push(eb.E.appendConfig.of([pw, Ow, tw, yb]))
        }
        bb.dispatch(bb.state.update(Lb))
      }
    }

    function lw(bb) {
      return wb => {
        let {
          state: Mb,
          dispatch: eb
        } = wb, Hb = Mb.field(pw, !1);
        if (!Hb || bb < 0 && 0 == Hb.active) return !1;
        let pb = Hb.active + bb,
          Vb = bb > 0 && !Hb.gF.some((wb => wb.field == pb + bb));
        return eb(Mb.update({
          selection: Vw(Hb.gF, pb),
          effects: ew.of(Vb ? null : new Mw(Hb.gF, pb)),
          scrollIntoView: !0
        })), !0
      }
    }
    const Lw = [{
        key: "Tab",
        run: lw(1),
        shift: lw(-1)
      }, {
        key: "Escape",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb;
          return !!wb.field(pw, !1) && (Mb(wb.update({
            effects: ew.of(null)
          })), !0)
        }
      }],
      Iw = eb.o.define({
        combine: bb => bb.length ? bb[0] : Lw
      }),
      Ow = eb.v.highest(Hb.X.compute([Iw], (bb => bb.facet(Iw))));

    function Uw(bb, wb) {
      return {
        ...wb,
        apply: gw(bb)
      }
    }
    const tw = Hb.g.domEventHandlers({
      mousedown(bb, wb) {
        let Mb, eb = wb.state.field(pw, !1);
        if (!eb || null == (Mb = wb.posAtCoords({
            x: bb.clientX,
            y: bb.clientY
          }))) return !1;
        let Hb = eb.gF.find((bb => bb.from <= Mb && bb.to >= Mb));
        return !(!Hb || Hb.field == eb.active) && (wb.dispatch({
          selection: Vw(eb.gF, Hb.field),
          effects: ew.of(eb.gF.some((bb => bb.field > Hb.field)) ? new Mw(eb.gF, Hb.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const Cw = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      Ew = eb.E.define({
        map(bb, wb) {
          let Mb = wb.mapPos(bb, -1, eb.s.TrackAfter);
          return null == Mb ? void 0 : Mb
        }
      }),
      Fw = new class extends eb.C {};
    Fw.startSide = 1, Fw.endSide = -1;
    const Bw = eb.G.define({
      create: () => eb.B.empty,
      update(bb, wb) {
        if (bb = bb.map(wb.changes), wb.selection) {
          let Mb = wb.state.doc.lineAt(wb.selection.main.head);
          bb = bb.update({
            filter: bb => bb >= Mb.from && bb <= Mb.to
          })
        }
        for (let Mb of wb.effects) Mb.is(Ew) && (bb = bb.update({
          add: [Fw.range(Mb.value, Mb.value + 1)]
        }));
        return bb
      }
    });

    function sw() {
      return [xw, Bw]
    }
    const mw = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function hw(bb) {
      for (let wb = 0; wb < 16; wb += 2)
        if (mw.charCodeAt(wb) == bb) return mw.charAt(wb + 1);
      return (0, eb.Z)(bb < 128 ? bb : bb + 1)
    }

    function zw(bb, wb) {
      return bb.languageDataAt("closeBrackets", wb)[0] || Cw
    }
    const Xw = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      xw = Hb.g.inputHandler.of(((bb, wb, Mb, Hb) => {
        if ((Xw ? bb.composing : bb.compositionStarted) || bb.state.readOnly) return !1;
        let pb = bb.state.selection.main;
        if (Hb.length > 2 || 2 == Hb.length && 1 == (0, eb.M)((0, eb.L)(Hb, 0)) || wb != pb.from || Mb != pb.to) return !1;
        let Vb = function(bb, wb) {
          let Mb = zw(bb, bb.selection.main.head),
            Hb = Mb.brackets || Cw.brackets;
          for (let pb of Hb) {
            let Vb = hw((0, eb.L)(pb, 0));
            if (wb == pb) return Vb == pb ? Yw(bb, pb, Hb.indexOf(pb + pb + pb) > -1, Mb) : Rw(bb, pb, Vb, Mb.before || Cw.before);
            if (wb == Vb && Kw(bb, bb.selection.main.from)) return Dw(bb, pb, Vb)
          }
          return null
        }(bb.state, Hb);
        return !!Vb && (bb.dispatch(Vb), !0)
      })),
      jw = [{
        key: "Backspace",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb;
          if (wb.readOnly) return !1;
          let Hb = zw(wb, wb.selection.main.head).brackets || Cw.brackets,
            pb = null,
            Vb = wb.changeByRange((bb => {
              if (bb.empty) {
                let Mb = function(bb, wb) {
                  let Mb = bb.sliceString(wb - 2, wb);
                  return (0, eb.M)((0, eb.L)(Mb, 0)) == Mb.length ? Mb : Mb.slice(1)
                }(wb.doc, bb.head);
                for (let pb of Hb)
                  if (pb == Mb && rw(wb.doc, bb.head) == hw((0, eb.L)(pb, 0))) return {
                    changes: {
                      from: bb.head - pb.length,
                      to: bb.head + pb.length
                    },
                    range: eb.j.cursor(bb.head - pb.length)
                  }
              }
              return {
                range: pb = bb
              }
            }));
          return pb || Mb(wb.update(Vb, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !pb
        }
      }];

    function Kw(bb, wb) {
      let Mb = !1;
      return bb.field(Bw).between(0, bb.doc.length, (bb => {
        bb == wb && (Mb = !0)
      })), Mb
    }

    function rw(bb, wb) {
      let Mb = bb.sliceString(wb, wb + 2);
      return Mb.slice(0, (0, eb.M)((0, eb.L)(Mb, 0)))
    }

    function Rw(bb, wb, Mb, Hb) {
      let pb = null,
        Vb = bb.changeByRange((Vb => {
          if (!Vb.empty) return {
            changes: [{
              insert: wb,
              from: Vb.from
            }, {
              insert: Mb,
              from: Vb.to
            }],
            effects: Ew.of(Vb.to + wb.length),
            range: eb.j.range(Vb.anchor + wb.length, Vb.head + wb.length)
          };
          let gb = rw(bb.doc, Vb.head);
          return !gb || /\s/.test(gb) || Hb.indexOf(gb) > -1 ? {
            changes: {
              insert: wb + Mb,
              from: Vb.head
            },
            effects: Ew.of(Vb.head + wb.length),
            range: eb.j.cursor(Vb.head + wb.length)
          } : {
            range: pb = Vb
          }
        }));
      return pb ? null : bb.update(Vb, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Dw(bb, wb, Mb) {
      let Hb = null,
        pb = bb.changeByRange((wb => wb.empty && rw(bb.doc, wb.head) == Mb ? {
          changes: {
            from: wb.head,
            to: wb.head + Mb.length,
            insert: Mb
          },
          range: eb.j.cursor(wb.head + Mb.length)
        } : Hb = {
          range: wb
        }));
      return Hb ? null : bb.update(pb, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Yw(bb, wb, Mb, Hb) {
      let Vb = Hb.stringPrefixes || Cw.stringPrefixes,
        gb = null,
        lb = bb.changeByRange((Hb => {
          if (!Hb.empty) return {
            changes: [{
              insert: wb,
              from: Hb.from
            }, {
              insert: wb,
              from: Hb.to
            }],
            effects: Ew.of(Hb.to + wb.length),
            range: eb.j.range(Hb.anchor + wb.length, Hb.head + wb.length)
          };
          let lb, Lb = Hb.head,
            Ib = rw(bb.doc, Lb);
          if (Ib == wb) {
            if (Zw(bb, Lb)) return {
              changes: {
                insert: wb + wb,
                from: Lb
              },
              effects: Ew.of(Lb + wb.length),
              range: eb.j.cursor(Lb + wb.length)
            };
            if (Kw(bb, Lb)) {
              let Hb = Mb && bb.sliceDoc(Lb, Lb + 3 * wb.length) == wb + wb + wb ? wb + wb + wb : wb;
              return {
                changes: {
                  from: Lb,
                  to: Lb + Hb.length,
                  insert: Hb
                },
                range: eb.j.cursor(Lb + Hb.length)
              }
            }
          } else {
            if (Mb && bb.sliceDoc(Lb - 2 * wb.length, Lb) == wb + wb && (lb = fw(bb, Lb - 2 * wb.length, Vb)) > -1 && Zw(bb, lb)) return {
              changes: {
                insert: wb + wb + wb + wb,
                from: Lb
              },
              effects: Ew.of(Lb + wb.length),
              range: eb.j.cursor(Lb + wb.length)
            };
            if (bb.charCategorizer(Lb)(Ib) != eb.h.Word && fw(bb, Lb, Vb) > -1 && ! function(bb, wb, Mb, eb) {
                let Hb = (0, pb.qb)(bb).resolveInner(wb, -1),
                  Vb = eb.reduce(((bb, wb) => Math.max(bb, wb.length)), 0);
                for (let pb = 0; pb < 5; pb++) {
                  let pb = bb.sliceDoc(Hb.from, Math.min(Hb.to, Hb.from + Mb.length + Vb)),
                    gb = pb.indexOf(Mb);
                  if (!gb || gb > -1 && eb.indexOf(pb.slice(0, gb)) > -1) {
                    let wb = Hb.firstChild;
                    for (; wb && wb.from == Hb.from && wb.to - wb.from > Mb.length + gb;) {
                      if (bb.sliceDoc(wb.to - Mb.length, wb.to) == Mb) return !1;
                      wb = wb.firstChild
                    }
                    return !0
                  }
                  let lb = Hb.to == wb && Hb.parent;
                  if (!lb) break;
                  Hb = lb
                }
                return !1
              }(bb, Lb, wb, Vb)) return {
              changes: {
                insert: wb + wb,
                from: Lb
              },
              effects: Ew.of(Lb + wb.length),
              range: eb.j.cursor(Lb + wb.length)
            }
          }
          return {
            range: gb = Hb
          }
        }));
      return gb ? null : bb.update(lb, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Zw(bb, wb) {
      let Mb = (0, pb.qb)(bb).resolveInner(wb + 1);
      return Mb.parent && Mb.from == wb
    }

    function fw(bb, wb, Mb) {
      let Hb = bb.charCategorizer(wb);
      if (Hb(bb.sliceDoc(wb - 1, wb)) != eb.h.Word) return wb;
      for (let pb of Mb) {
        let Mb = wb - pb.length;
        if (bb.sliceDoc(Mb, wb) == pb && Hb(bb.sliceDoc(Mb - 1, Mb)) != eb.h.Word) return Mb
      }
      return -1
    }

    function Aw() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [nb, Qb, zb.of(bb), db, Jw, yb]
    }
    const Ww = [{
        key: "Ctrl-Space",
        run: ib
      }, {
        mac: "Alt-`",
        run: ib
      }, {
        mac: "Alt-i",
        run: ib
      }, {
        key: "Escape",
        run: bb => {
          let wb = bb.state.field(Qb, !1);
          return !(!wb || !wb.active.some((bb => 0 != bb.state))) && (bb.dispatch({
            effects: sb.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: ab(!0)
      }, {
        key: "ArrowUp",
        run: ab(!1)
      }, {
        key: "PageDown",
        run: ab(!0, "page")
      }, {
        key: "PageUp",
        run: ab(!1, "page")
      }, {
        key: "Enter",
        run: bb => {
          let wb = bb.state.field(Qb, !1);
          return !(bb.state.readOnly || !wb || !wb.open || wb.open.selected < 0 || wb.open.disabled || Date.now() - wb.open.timestamp < bb.state.facet(zb).interactionDelay) && Gb(bb, wb.open.options[wb.open.selected])
        }
      }],
      Jw = eb.v.highest(Hb.X.computeN([zb], (bb => bb.facet(zb).defaultKeymap ? [Ww] : [])))
  },
  53667: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Lb,
      f: () => Ub,
      i: () => Ib,
      m: () => Ob
    });
    var eb = Mb(53501);
    class Hb {
      constructor(bb, wb, Mb, eb) {
        this.origin = bb, this.changes = wb, this.effects = Mb, this.clientID = eb
      }
    }
    class pb {
      constructor(bb, wb) {
        this.version = bb, this.unconfirmed = wb
      }
    }
    const Vb = eb.o.define({
        combine(bb) {
          let wb = (0, eb.P)(bb, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: bb => bb
          });
          return null == wb.clientID && (wb.clientID = bb.length && bb[0].generatedID || ""), wb
        }
      }),
      gb = eb.c.define(),
      lb = eb.G.define({
        create: bb => new pb(bb.facet(Vb).startVersion, []),
        update(bb, wb) {
          let Mb = wb.annotation(gb);
          if (Mb) return Mb;
          let {
            sharedEffects: eb,
            clientID: lb
          } = wb.startState.facet(Vb), Lb = eb(wb);
          return Lb.length || !wb.changes.empty ? new pb(bb.version, bb.unconfirmed.concat(new Hb(wb, wb.changes, Lb, lb))) : bb
        }
      });

    function Lb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [lb, Vb.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, bb))]
    }

    function Ib(bb, wb) {
      let {
        version: Mb,
        unconfirmed: Lb
      } = bb.field(lb), {
        clientID: Ib
      } = bb.facet(Vb);
      Mb += wb.length;
      let Ob = [],
        Ub = null,
        tb = 0;
      for (let Hb of wb) {
        let bb = tb < Lb.length ? Lb[tb] : null;
        bb && bb.clientID == Hb.clientID ? (Ub && (Ub = Ub.map(bb.changes, !0)), Ob = eb.E.mapEffects(Ob, Hb.changes), tb++) : (Ob = eb.E.mapEffects(Ob, Hb.changes), Hb.effects && (Ob = Ob.concat(Hb.effects)), Ub = Ub ? Ub.compose(Hb.changes) : Hb.changes)
      }
      if (tb && (Lb = Lb.slice(tb)), Lb.length && (Ub && (Lb = Lb.map((bb => {
          let wb = bb.changes.map(Ub);
          return Ub = Ub.map(bb.changes, !0), new Hb(bb.origin, wb, eb.E.mapEffects(bb.effects, Ub), Ib)
        }))), Ob.length)) {
        let bb = Lb.reduce(((bb, wb) => bb.compose(wb.changes)), eb.ChangeSet.empty(Lb[0].changes.length));
        Ob = eb.E.mapEffects(Ob, bb)
      }
      return Ub ? bb.update({
        changes: Ub,
        effects: Ob,
        annotations: [eb.J.addToHistory.of(!1), eb.J.remote.of(!0), gb.of(new pb(Mb, Lb))],
        filter: !1
      }) : bb.update({
        annotations: [gb.of(new pb(Mb, Lb))]
      })
    }

    function Ob(bb) {
      return bb.field(lb).unconfirmed
    }

    function Ub(bb) {
      return bb.field(lb).version
    }
  },
  53544: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ew
    });
    var eb = Mb(53533);
    class Hb {
      constructor(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        let Lb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Ib = arguments.length > 10 ? arguments[10] : void 0;
        this.p = bb, this.stack = wb, this.state = Mb, this.reducePos = eb, this.pos = Hb, this.score = pb, this.buffer = Vb, this.bufferBase = gb, this.curContext = lb, this.lookAhead = Lb, this.parent = Ib
      }
      toString() {
        return `[${this.stack.filter(((bb,wb)=>wb%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = bb.parser.context;
        return new Hb(bb, [], wb, Mb, Mb, 0, [], 0, eb ? new pb(eb, eb.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(bb, wb) {
        this.stack.push(this.state, wb, this.bufferBase + this.buffer.length), this.state = bb
      }
      reduce(bb) {
        var wb;
        let Mb = bb >> 19,
          eb = 65535 & bb,
          {
            parser: Hb
          } = this.p,
          pb = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          Vb = Hb.dynamicPrecedence(eb);
        if (Vb && (this.score += Vb), 0 == Mb) return this.pushState(Hb.getGoto(this.state, eb, !0), this.reducePos), eb < Hb.minRepeatTerm && this.storeNode(eb, this.reducePos, this.reducePos, pb ? 8 : 4, !0), void this.reduceContext(eb, this.reducePos);
        let gb = this.stack.length - 3 * (Mb - 1) - (262144 & bb ? 6 : 0),
          lb = gb ? this.stack[gb - 2] : this.p.gF[0].from,
          Lb = this.reducePos - lb;
        Lb >= 2e3 && !(null === (wb = this.p.parser.nodeSet.types[eb]) || void 0 === wb ? void 0 : wb.isAnonymous) && (lb == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Lb) : this.p.lastBigReductionSize < Lb && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = lb, this.p.lastBigReductionSize = Lb));
        let Ib = gb ? this.stack[gb - 1] : 0,
          Ob = this.bufferBase + this.buffer.length - Ib;
        if (eb < Hb.minRepeatTerm || 131072 & bb) {
          let bb = Hb.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(eb, lb, bb, Ob + 4, !0)
        }
        if (262144 & bb) this.state = this.stack[gb];
        else {
          let bb = this.stack[gb - 3];
          this.state = Hb.getGoto(bb, eb, !0)
        }
        for (; this.stack.length > gb;) this.stack.pop();
        this.reduceContext(eb, lb)
      }
      storeNode(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == bb && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let bb = this,
            eb = this.buffer.length;
          if (0 == eb && bb.parent && (eb = bb.bufferBase - bb.parent.bufferBase, bb = bb.parent), eb > 0 && 0 == bb.buffer[eb - 4] && bb.buffer[eb - 1] > -1) {
            if (wb == Mb) return;
            if (bb.buffer[eb - 2] >= wb) return void(bb.buffer[eb - 2] = Mb)
          }
        }
        if (Hb && this.pos != Mb) {
          let Hb = this.buffer.length;
          if (Hb > 0 && (0 != this.buffer[Hb - 4] || this.buffer[Hb - 1] < 0)) {
            let bb = !1;
            for (let wb = Hb; wb > 0 && this.buffer[wb - 2] > Mb; wb -= 4)
              if (this.buffer[wb - 1] >= 0) {
                bb = !0;
                break
              } if (bb)
              for (; Hb > 0 && this.buffer[Hb - 2] > Mb;) this.buffer[Hb] = this.buffer[Hb - 4], this.buffer[Hb + 1] = this.buffer[Hb - 3], this.buffer[Hb + 2] = this.buffer[Hb - 2], this.buffer[Hb + 3] = this.buffer[Hb - 1], Hb -= 4, eb > 4 && (eb -= 4)
          }
          this.buffer[Hb] = bb, this.buffer[Hb + 1] = wb, this.buffer[Hb + 2] = Mb, this.buffer[Hb + 3] = eb
        } else this.buffer.push(bb, wb, Mb, eb)
      }
      shift(bb, wb, Mb, eb) {
        if (131072 & bb) this.pushState(65535 & bb, this.pos);
        else if (0 == (262144 & bb)) {
          let Hb = bb,
            {
              parser: pb
            } = this.p;
          this.pos = eb;
          let Vb = pb.stateFlag(Hb, 1);
          !Vb && (eb > Mb || wb <= pb.maxNode) && (this.reducePos = eb), this.pushState(Hb, Vb ? Mb : Math.min(Mb, this.reducePos)), this.shiftContext(wb, Mb), wb <= pb.maxNode && this.buffer.push(wb, Mb, eb, 4)
        } else this.pos = eb, this.shiftContext(wb, Mb), wb <= this.p.parser.maxNode && this.buffer.push(wb, Mb, eb, 4)
      }
      apply(bb, wb, Mb, eb) {
        65536 & bb ? this.reduce(bb) : this.shift(bb, wb, Mb, eb)
      }
      useNode(bb, wb) {
        let Mb = this.p.reused.length - 1;
        (Mb < 0 || this.p.reused[Mb] != bb) && (this.p.reused.push(bb), Mb++);
        let eb = this.pos;
        this.reducePos = this.pos = eb + bb.length, this.pushState(wb, eb), this.buffer.push(Mb, eb, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, bb, this, this.p.stream.reset(this.pos - bb.length)))
      }
      split() {
        let bb = this,
          wb = bb.buffer.length;
        for (; wb > 0 && bb.buffer[wb - 2] > bb.reducePos;) wb -= 4;
        let Mb = bb.buffer.slice(wb),
          eb = bb.bufferBase + wb;
        for (; bb && eb == bb.bufferBase;) bb = bb.parent;
        return new Hb(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, Mb, eb, this.curContext, this.lookAhead, bb)
      }
      recoverByDelete(bb, wb) {
        let Mb = bb <= this.p.parser.maxNode;
        Mb && this.storeNode(bb, this.pos, wb, 4), this.storeNode(0, this.pos, wb, Mb ? 8 : 4), this.pos = this.reducePos = wb, this.score -= 190
      }
      canShift(bb) {
        for (let wb = new Vb(this);;) {
          let Mb = this.p.parser.stateSlot(wb.state, 4) || this.p.parser.hasAction(wb.state, bb);
          if (0 == Mb) return !1;
          if (0 == (65536 & Mb)) return !0;
          wb.reduce(Mb)
        }
      }
      recoverByInsert(bb) {
        if (this.stack.length >= 300) return [];
        let wb = this.p.parser.nextStates(this.state);
        if (wb.length > 8 || this.stack.length >= 120) {
          let Mb = [];
          for (let eb, Hb = 0; Hb < wb.length; Hb += 2)(eb = wb[Hb + 1]) != this.state && this.p.parser.hasAction(eb, bb) && Mb.push(wb[Hb], eb);
          if (this.stack.length < 120)
            for (let bb = 0; Mb.length < 8 && bb < wb.length; bb += 2) {
              let eb = wb[bb + 1];
              Mb.some(((bb, wb) => 1 & wb && bb == eb)) || Mb.push(wb[bb], eb)
            }
          wb = Mb
        }
        let Mb = [];
        for (let eb = 0; eb < wb.length && Mb.length < 4; eb += 2) {
          let bb = wb[eb + 1];
          if (bb == this.state) continue;
          let Hb = this.split();
          Hb.pushState(bb, this.pos), Hb.storeNode(0, Hb.pos, Hb.pos, 4, !0), Hb.shiftContext(wb[eb], this.pos), Hb.reducePos = this.pos, Hb.score -= 200, Mb.push(Hb)
        }
        return Mb
      }
      forceReduce() {
        let {
          parser: bb
        } = this.p, wb = bb.stateSlot(this.state, 5);
        if (0 == (65536 & wb)) return !1;
        if (!bb.validAction(this.state, wb)) {
          let Mb = wb >> 19,
            eb = 65535 & wb,
            Hb = this.stack.length - 3 * Mb;
          if (Hb < 0 || bb.getGoto(this.stack[Hb], eb, !1) < 0) {
            let bb = this.findForcedReduction();
            if (null == bb) return !1;
            wb = bb
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(wb), !0
      }
      findForcedReduction() {
        let {
          parser: bb
        } = this.p, wb = [], Mb = (eb, Hb) => {
          if (!wb.includes(eb)) return wb.push(eb), bb.allActions(eb, (wb => {
            if (393216 & wb);
            else if (65536 & wb) {
              let Mb = (wb >> 19) - Hb;
              if (Mb > 1) {
                let eb = 65535 & wb,
                  Hb = this.stack.length - 3 * Mb;
                if (Hb >= 0 && bb.getGoto(this.stack[Hb], eb, !1) >= 0) return Mb << 19 | 65536 | eb
              }
            } else {
              let bb = Mb(wb, Hb + 1);
              if (null != bb) return bb
            }
          }))
        };
        return Mb(this.state, 0)
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
        for (let wb = 0; wb < this.stack.length; wb += 3)
          if (this.stack[wb] != bb.stack[wb]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(bb) {
        return this.p.parser.dialect.flags[bb]
      }
      shiftContext(bb, wb) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, bb, this, this.p.stream.reset(wb)))
      }
      reduceContext(bb, wb) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, bb, this, this.p.stream.reset(wb)))
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
          let wb = new pb(this.curContext.tracker, bb);
          wb.hash != this.curContext.hash && this.emitContext(), this.curContext = wb
        }
      }
      setLookAhead(bb) {
        return !(bb <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = bb, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class pb {
      constructor(bb, wb) {
        this.tracker = bb, this.context = wb, this.hash = bb.strict ? bb.hash(wb) : 0
      }
    }
    class Vb {
      constructor(bb) {
        this.start = bb, this.state = bb.state, this.stack = bb.stack, this.base = this.stack.length
      }
      reduce(bb) {
        let wb = 65535 & bb,
          Mb = bb >> 19;
        0 == Mb ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (Mb - 1);
        let eb = this.start.p.parser.getGoto(this.stack[this.base - 3], wb, !0);
        this.state = eb
      }
    }
    class gb {
      constructor(bb, wb, Mb) {
        this.stack = bb, this.pos = wb, this.index = Mb, this.buffer = bb.buffer, 0 == this.index && this.maybeNext()
      }
      static create(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.bufferBase + bb.buffer.length;
        return new gb(bb, wb, wb - bb.bufferBase)
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
        return new gb(this.stack, this.pos, this.index)
      }
    }

    function lb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof bb) return bb;
      let Mb = null;
      for (let eb = 0, Hb = 0; eb < bb.length;) {
        let pb = 0;
        for (;;) {
          let wb = bb.charCodeAt(eb++),
            Mb = !1;
          if (126 == wb) {
            pb = 65535;
            break
          }
          wb >= 92 && wb--, wb >= 34 && wb--;
          let Hb = wb - 32;
          if (Hb >= 46 && (Hb -= 46, Mb = !0), pb += Hb, Mb) break;
          pb *= 46
        }
        Mb ? Mb[Hb++] = pb : Mb = new wb(pb)
      }
      return Mb
    }
    class Lb {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const Ib = new Lb;
    class Ob {
      constructor(bb, wb) {
        this.input = bb, this.gF = wb, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Ib, this.rangeIndex = 0, this.pos = this.chunkPos = wb[0].from, this.range = wb[0], this.end = wb[wb.length - 1].to, this.readNext()
      }
      resolveOffset(bb, wb) {
        let Mb = this.range,
          eb = this.rangeIndex,
          Hb = this.pos + bb;
        for (; Hb < Mb.from;) {
          if (!eb) return null;
          let bb = this.gF[--eb];
          Hb -= Mb.from - bb.to, Mb = bb
        }
        for (; wb < 0 ? Hb > Mb.to : Hb >= Mb.to;) {
          if (eb == this.gF.length - 1) return null;
          let bb = this.gF[++eb];
          Hb += bb.from - Mb.to, Mb = bb
        }
        return Hb
      }
      clipPos(bb) {
        if (bb >= this.range.from && bb < this.range.to) return bb;
        for (let wb of this.gF)
          if (wb.to > bb) return Math.max(bb, wb.from);
        return this.end
      }
      peek(bb) {
        let wb, Mb, eb = this.chunkOff + bb;
        if (eb >= 0 && eb < this.chunk.length) wb = this.pos + bb, Mb = this.chunk.charCodeAt(eb);
        else {
          let eb = this.resolveOffset(bb, 1);
          if (null == eb) return -1;
          if (wb = eb, wb >= this.chunk2Pos && wb < this.chunk2Pos + this.chunk2.length) Mb = this.chunk2.charCodeAt(wb - this.chunk2Pos);
          else {
            let bb = this.rangeIndex,
              eb = this.range;
            for (; eb.to <= wb;) eb = this.gF[++bb];
            this.chunk2 = this.input.chunk(this.chunk2Pos = wb), wb + this.chunk2.length > eb.to && (this.chunk2 = this.chunk2.slice(0, eb.to - wb)), Mb = this.chunk2.charCodeAt(0)
          }
        }
        return wb >= this.token.lookAhead && (this.token.lookAhead = wb + 1), Mb
      }
      acceptToken(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = wb ? this.resolveOffset(wb, -1) : this.pos;
        if (null == Mb || Mb < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = bb, this.token.end = Mb
      }
      acceptTokenTo(bb, wb) {
        this.token.value = bb, this.token.end = wb
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: bb,
            chunkPos: wb
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = bb, this.chunk2Pos = wb, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let bb = this.input.chunk(this.pos),
            wb = this.pos + bb.length;
          this.chunk = wb > this.range.to ? bb.slice(0, this.range.to - this.pos) : bb, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += bb; this.pos + bb >= this.range.to;) {
          if (this.rangeIndex == this.gF.length - 1) return this.setDone();
          bb -= this.range.to - this.pos, this.range = this.gF[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += bb, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.gF[this.rangeIndex = this.gF.length - 1], this.chunk = "", this.next = -1
      }
      reset(bb, wb) {
        if (wb ? (this.token = wb, wb.start = bb, wb.lookAhead = bb + 1, wb.value = wb.extended = -1) : this.token = Ib, this.pos != bb) {
          if (this.pos = bb, bb == this.end) return this.setDone(), this;
          for (; bb < this.range.from;) this.range = this.gF[--this.rangeIndex];
          for (; bb >= this.range.to;) this.range = this.gF[++this.rangeIndex];
          bb >= this.chunkPos && bb < this.chunkPos + this.chunk.length ? this.chunkOff = bb - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(bb, wb) {
        if (bb >= this.chunkPos && wb <= this.chunkPos + this.chunk.length) return this.chunk.slice(bb - this.chunkPos, wb - this.chunkPos);
        if (bb >= this.chunk2Pos && wb <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(bb - this.chunk2Pos, wb - this.chunk2Pos);
        if (bb >= this.range.from && wb <= this.range.to) return this.input.read(bb, wb);
        let Mb = "";
        for (let eb of this.gF) {
          if (eb.from >= wb) break;
          eb.to > bb && (Mb += this.input.read(Math.max(eb.from, bb), Math.min(eb.to, wb)))
        }
        return Mb
      }
    }
    class Ub {
      constructor(bb, wb) {
        this.data = bb, this.id = wb
      }
      token(bb, wb) {
        let {
          parser: Mb
        } = wb.p;
        Eb(this.data, bb, wb, this.id, Mb.data, Mb.tokenPrecTable)
      }
    }
    Ub.prototype.contextual = Ub.prototype.fallback = Ub.prototype.extend = !1;
    class tb {
      constructor(bb, wb, Mb) {
        this.precTable = wb, this.elseToken = Mb, this.data = "string" == typeof bb ? lb(bb) : bb
      }
      token(bb, wb) {
        let Mb = bb.pos,
          eb = 0;
        for (;;) {
          let Mb = bb.next < 0,
            Hb = bb.resolveOffset(1, 1);
          if (Eb(this.data, bb, wb, 0, this.data, this.precTable), bb.token.value > -1) break;
          if (null == this.elseToken) return;
          if (Mb || eb++, null == Hb) break;
          bb.reset(Hb, bb.token)
        }
        eb && (bb.reset(Mb, bb.token), bb.acceptToken(this.elseToken, eb))
      }
    }
    tb.prototype.contextual = Ub.prototype.fallback = Ub.prototype.extend = !1;
    class Cb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = bb, this.contextual = !!wb.contextual, this.fallback = !!wb.fallback, this.extend = !!wb.extend
      }
    }

    function Eb(bb, wb, Mb, eb, Hb, pb) {
      let Vb = 0,
        gb = 1 << eb,
        {
          dialect: lb
        } = Mb.p.parser;
      bb: for (; 0 != (gb & bb[Vb]);) {
        let Mb = bb[Vb + 1];
        for (let Ob = Vb + 3; Ob < Mb; Ob += 2)
          if ((bb[Ob + 1] & gb) > 0) {
            let Mb = bb[Ob];
            if (lb.allows(Mb) && (-1 == wb.token.value || wb.token.value == Mb || Bb(Mb, wb.token.value, Hb, pb))) {
              wb.acceptToken(Mb);
              break
            }
          } let eb = wb.next,
          Lb = 0,
          Ib = bb[Vb + 2];
        if (!(wb.next < 0 && Ib > Lb && 65535 == bb[Mb + 3 * Ib - 3])) {
          for (; Lb < Ib;) {
            let Hb = Lb + Ib >> 1,
              pb = Mb + Hb + (Hb << 1),
              gb = bb[pb],
              lb = bb[pb + 1] || 65536;
            if (eb < gb) Ib = Hb;
            else {
              if (!(eb >= lb)) {
                Vb = bb[pb + 2], wb.advance();
                continue bb
              }
              Lb = Hb + 1
            }
          }
          break
        }
        Vb = bb[Mb + 3 * Ib - 1]
      }
    }

    function Fb(bb, wb, Mb) {
      for (let eb, Hb = wb; 65535 != (eb = bb[Hb]); Hb++)
        if (eb == Mb) return Hb - wb;
      return -1
    }

    function Bb(bb, wb, Mb, eb) {
      let Hb = Fb(Mb, eb, wb);
      return Hb < 0 || Fb(Mb, eb, bb) < Hb
    }
    const sb = "undefined" != typeof process && {
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
    let mb = null;

    function hb(bb, wb, Mb) {
      let Hb = bb.cursor(eb.c.IncludeAnonymous);
      for (Hb.moveTo(wb);;)
        if (!(Mb < 0 ? Hb.childBefore(wb) : Hb.childAfter(wb)))
          for (;;) {
            if ((Mb < 0 ? Hb.to < wb : Hb.from > wb) && !Hb.type.isError) return Mb < 0 ? Math.max(0, Math.min(Hb.to - 1, wb - 25)) : Math.min(bb.length, Math.max(Hb.from + 1, wb + 25));
            if (Mb < 0 ? Hb.prevSibling() : Hb.nextSibling()) break;
            if (!Hb.parent()) return Mb < 0 ? 0 : bb.length
          }
    }
    class zb {
      constructor(bb, wb) {
        this.fragments = bb, this.nodeSet = wb, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let bb = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (bb) {
          for (this.safeFrom = bb.openStart ? hb(bb.tree, bb.from + bb.offset, 1) - bb.offset : bb.from, this.safeTo = bb.openEnd ? hb(bb.tree, bb.to + bb.offset, -1) - bb.offset : bb.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(bb.tree), this.start.push(-bb.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(bb) {
        if (bb < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= bb;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let wb = this.trees.length - 1;
          if (wb < 0) return this.nextFragment(), null;
          let Mb = this.trees[wb],
            Hb = this.index[wb];
          if (Hb == Mb.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let pb = Mb.children[Hb],
            Vb = this.start[wb] + Mb.positions[Hb];
          if (Vb > bb) return this.nextStart = Vb, null;
          if (pb instanceof eb.t) {
            if (Vb == bb) {
              if (Vb < this.safeFrom) return null;
              let bb = Vb + pb.length;
              if (bb <= this.safeTo) {
                let wb = pb.prop(eb.d.lookAhead);
                if (!wb || bb + wb < this.fragment.to) return pb
              }
            }
            this.index[wb]++, Vb + pb.length >= Math.max(this.safeFrom, bb) && (this.trees.push(pb), this.start.push(Vb), this.index.push(0))
          } else this.index[wb]++, this.nextStart = Vb + pb.length
        }
      }
    }
    class Xb {
      constructor(bb, wb) {
        this.stream = wb, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = bb.tokenizers.map((bb => new Lb))
      }
      getActions(bb) {
        let wb = 0,
          Mb = null,
          {
            parser: eb
          } = bb.p,
          {
            tokenizers: Hb
          } = eb,
          pb = eb.stateSlot(bb.state, 3),
          Vb = bb.curContext ? bb.curContext.hash : 0,
          gb = 0;
        for (let lb = 0; lb < Hb.length; lb++) {
          if (0 == (1 << lb & pb)) continue;
          let eb = Hb[lb],
            Lb = this.tokens[lb];
          if ((!Mb || eb.fallback) && ((eb.contextual || Lb.start != bb.pos || Lb.mask != pb || Lb.context != Vb) && (this.updateCachedToken(Lb, eb, bb), Lb.mask = pb, Lb.context = Vb), Lb.lookAhead > Lb.end + 25 && (gb = Math.max(Lb.lookAhead, gb)), 0 != Lb.value)) {
            let Hb = wb;
            if (Lb.extended > -1 && (wb = this.addActions(bb, Lb.extended, Lb.end, wb)), wb = this.addActions(bb, Lb.value, Lb.end, wb), !eb.extend && (Mb = Lb, wb > Hb)) break
          }
        }
        for (; this.actions.length > wb;) this.actions.pop();
        return gb && bb.setLookAhead(gb), Mb || bb.pos != this.stream.end || (Mb = new Lb, Mb.value = bb.p.parser.eofTerm, Mb.start = Mb.end = bb.pos, wb = this.addActions(bb, Mb.value, Mb.end, wb)), this.mainToken = Mb, this.actions
      }
      getMainToken(bb) {
        if (this.mainToken) return this.mainToken;
        let wb = new Lb,
          {
            pos: Mb,
            p: eb
          } = bb;
        return wb.start = Mb, wb.end = Math.min(Mb + 1, eb.stream.end), wb.value = Mb == eb.stream.end ? eb.parser.eofTerm : 0, wb
      }
      updateCachedToken(bb, wb, Mb) {
        let eb = this.stream.clipPos(Mb.pos);
        if (wb.token(this.stream.reset(eb, bb), Mb), bb.value > -1) {
          let {
            parser: wb
          } = Mb.p;
          for (let eb = 0; eb < wb.specialized.length; eb++)
            if (wb.specialized[eb] == bb.value) {
              let Hb = wb.specializers[eb](this.stream.read(bb.start, bb.end), Mb);
              if (Hb >= 0 && Mb.p.parser.dialect.allows(Hb >> 1)) {
                0 == (1 & Hb) ? bb.value = Hb >> 1 : bb.extended = Hb >> 1;
                break
              }
            }
        } else bb.value = 0, bb.end = this.stream.clipPos(eb + 1)
      }
      putAction(bb, wb, Mb, eb) {
        for (let Hb = 0; Hb < eb; Hb += 3)
          if (this.actions[Hb] == bb) return eb;
        return this.actions[eb++] = bb, this.actions[eb++] = wb, this.actions[eb++] = Mb, eb
      }
      addActions(bb, wb, Mb, eb) {
        let {
          state: Hb
        } = bb, {
          parser: pb
        } = bb.p, {
          data: Vb
        } = pb;
        for (let gb = 0; gb < 2; gb++)
          for (let bb = pb.stateSlot(Hb, gb ? 2 : 1);; bb += 3) {
            if (65535 == Vb[bb]) {
              if (1 != Vb[bb + 1]) {
                0 == eb && 2 == Vb[bb + 1] && (eb = this.putAction(Db(Vb, bb + 2), wb, Mb, eb));
                break
              }
              bb = Db(Vb, bb + 2)
            }
            Vb[bb] == wb && (eb = this.putAction(Db(Vb, bb + 1), wb, Mb, eb))
          }
        return eb
      }
    }
    class xb {
      constructor(bb, wb, Mb, eb) {
        this.parser = bb, this.input = wb, this.gF = eb, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Ob(wb, eb), this.tokens = new Xb(bb, this.stream), this.topTerm = bb.top[1];
        let {
          from: pb
        } = eb[0];
        this.stacks = [Hb.start(this, bb.top[0], pb)], this.fragments = Mb.length && this.stream.end - pb > 4 * bb.bufferLength ? new zb(Mb, bb.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let bb, wb, Mb = this.stacks,
          eb = this.minStackPos,
          Hb = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == Mb.length) {
          let [bb] = Mb;
          for (; bb.forceReduce() && bb.stack.length && bb.stack[bb.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let pb = 0; pb < Mb.length; pb++) {
          let Vb = Mb[pb];
          for (;;) {
            if (this.tokens.mainToken = null, Vb.pos > eb) Hb.push(Vb);
            else {
              if (this.advanceStack(Vb, Hb, Mb)) continue;
              {
                bb || (bb = [], wb = []), bb.push(Vb);
                let Mb = this.tokens.getMainToken(Vb);
                wb.push(Mb.value, Mb.end)
              }
            }
            break
          }
        }
        if (!Hb.length) {
          let wb = bb && function(bb) {
            let wb = null;
            for (let Mb of bb) {
              let bb = Mb.p.stoppedAt;
              (Mb.pos == Mb.p.stream.end || null != bb && Mb.pos > bb) && Mb.p.parser.stateFlag(Mb.state, 2) && (!wb || wb.score < Mb.score) && (wb = Mb)
            }
            return wb
          }(bb);
          if (wb) return sb && console.log("Finish with " + this.stackID(wb)), this.stackToTree(wb);
          if (this.parser.strict) throw sb && bb && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + eb);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && bb) {
          let Mb = null != this.stoppedAt && bb[0].pos > this.stoppedAt ? bb[0] : this.runRecovery(bb, wb, Hb);
          if (Mb) return sb && console.log("Force-finish " + this.stackID(Mb)), this.stackToTree(Mb.forceAll())
        }
        if (this.recovering) {
          let bb = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (Hb.length > bb)
            for (Hb.sort(((bb, wb) => wb.score - bb.score)); Hb.length > bb;) Hb.pop();
          Hb.some((bb => bb.reducePos > eb)) && this.recovering--
        } else if (Hb.length > 1) {
          bb: for (let bb = 0; bb < Hb.length - 1; bb++) {
            let wb = Hb[bb];
            for (let Mb = bb + 1; Mb < Hb.length; Mb++) {
              let eb = Hb[Mb];
              if (wb.sameState(eb) || wb.buffer.length > 500 && eb.buffer.length > 500) {
                if (!((wb.score - eb.score || wb.buffer.length - eb.buffer.length) > 0)) {
                  Hb.splice(bb--, 1);
                  continue bb
                }
                Hb.splice(Mb--, 1)
              }
            }
          }
          Hb.length > 12 && (Hb.sort(((bb, wb) => wb.score - bb.score)), Hb.splice(12, Hb.length - 12))
        }
        this.minStackPos = Hb[0].pos;
        for (let pb = 1; pb < Hb.length; pb++) Hb[pb].pos < this.minStackPos && (this.minStackPos = Hb[pb].pos);
        return null
      }
      stopAt(bb) {
        if (null != this.stoppedAt && this.stoppedAt < bb) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = bb
      }
      advanceStack(bb, wb, Mb) {
        let Hb = bb.pos,
          {
            parser: pb
          } = this,
          Vb = sb ? this.stackID(bb) + " -> " : "";
        if (null != this.stoppedAt && Hb > this.stoppedAt) return bb.forceReduce() ? bb : null;
        if (this.fragments) {
          let wb = bb.curContext && bb.curContext.tracker.strict,
            Mb = wb ? bb.curContext.hash : 0;
          for (let gb = this.fragments.nodeAt(Hb); gb;) {
            let Hb = this.parser.nodeSet.types[gb.type.id] == gb.type ? pb.getGoto(bb.state, gb.type.id) : -1;
            if (Hb > -1 && gb.length && (!wb || (gb.prop(eb.d.contextHash) || 0) == Mb)) return bb.useNode(gb, Hb), sb && console.log(Vb + this.stackID(bb) + ` (via reuse of ${pb.getName(gb.type.id)})`), !0;
            if (!(gb instanceof eb.t) || 0 == gb.children.length || gb.positions[0] > 0) break;
            let lb = gb.children[0];
            if (!(lb instanceof eb.t && 0 == gb.positions[0])) break;
            gb = lb
          }
        }
        let gb = pb.stateSlot(bb.state, 4);
        if (gb > 0) return bb.reduce(gb), sb && console.log(Vb + this.stackID(bb) + ` (via always-reduce ${pb.getName(65535&gb)})`), !0;
        if (bb.stack.length >= 8400)
          for (; bb.stack.length > 6e3 && bb.forceReduce(););
        let lb = this.tokens.getActions(bb);
        for (let eb = 0; eb < lb.length;) {
          let gb = lb[eb++],
            Lb = lb[eb++],
            Ib = lb[eb++],
            Ob = eb == lb.length || !Mb,
            Ub = Ob ? bb : bb.split(),
            tb = this.tokens.mainToken;
          if (Ub.apply(gb, Lb, tb ? tb.start : Ub.pos, Ib), sb && console.log(Vb + this.stackID(Ub) + ` (via ${0==(65536&gb)?"shift":`reduce of ${pb.getName(65535&gb)}`} for ${pb.getName(Lb)} @ ${Hb}${Ub==bb?"":", split"})`), Ob) return !0;
          Ub.pos > Hb ? wb.push(Ub) : Mb.push(Ub)
        }
        return !1
      }
      advanceFully(bb, wb) {
        let Mb = bb.pos;
        for (;;) {
          if (!this.advanceStack(bb, null, null)) return !1;
          if (bb.pos > Mb) return jb(bb, wb), !0
        }
      }
      runRecovery(bb, wb, Mb) {
        let eb = null,
          Hb = !1;
        for (let pb = 0; pb < bb.length; pb++) {
          let Vb = bb[pb],
            gb = wb[pb << 1],
            lb = wb[1 + (pb << 1)],
            Lb = sb ? this.stackID(Vb) + " -> " : "";
          if (Vb.deadEnd) {
            if (Hb) continue;
            if (Hb = !0, Vb.restart(), sb && console.log(Lb + this.stackID(Vb) + " (restarted)"), this.advanceFully(Vb, Mb)) continue
          }
          let Ib = Vb.split(),
            Ob = Lb;
          for (let bb = 0; bb < 10 && Ib.forceReduce(); bb++) {
            if (sb && console.log(Ob + this.stackID(Ib) + " (via force-reduce)"), this.advanceFully(Ib, Mb)) break;
            sb && (Ob = this.stackID(Ib) + " -> ")
          }
          for (let bb of Vb.recoverByInsert(gb)) sb && console.log(Lb + this.stackID(bb) + " (via recover-insert)"), this.advanceFully(bb, Mb);
          this.stream.end > Vb.pos ? (lb == Vb.pos && (lb++, gb = 0), Vb.recoverByDelete(gb, lb), sb && console.log(Lb + this.stackID(Vb) + ` (via recover-delete ${this.parser.getName(gb)})`), jb(Vb, Mb)) : (!eb || eb.score < Ib.score) && (eb = Ib)
        }
        return eb
      }
      stackToTree(bb) {
        return bb.close(), eb.t.build({
          buffer: gb.create(bb),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.gF[0].from,
          length: bb.pos - this.gF[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(bb) {
        let wb = (mb || (mb = new WeakMap)).get(bb);
        return wb || mb.set(bb, wb = String.fromCodePoint(this.nextStackID++)), wb + bb
      }
    }

    function jb(bb, wb) {
      for (let Mb = 0; Mb < wb.length; Mb++) {
        let eb = wb[Mb];
        if (eb.pos == bb.pos && eb.sameState(bb)) return void(wb[Mb].score < bb.score && (wb[Mb] = bb))
      }
      wb.push(bb)
    }
    class Kb {
      constructor(bb, wb, Mb) {
        this.source = bb, this.flags = wb, this.disabled = Mb
      }
      allows(bb) {
        return !this.disabled || 0 == this.disabled[bb]
      }
    }
    const rb = bb => bb;
    class Rb extends eb.m {
      constructor(bb) {
        if (super(), this.wrappers = [], 14 != bb.version) throw new RangeError(`Parser version (${bb.version}) doesn't match runtime version (14)`);
        let wb = bb.nodeNames.split(" ");
        this.minRepeatTerm = wb.length;
        for (let eb = 0; eb < bb.repeatNodeCount; eb++) wb.push("");
        let Mb = Object.keys(bb.topRules).map((wb => bb.topRules[wb][1])),
          Hb = [];
        for (let eb = 0; eb < wb.length; eb++) Hb.push([]);

        function pb(bb, wb, Mb) {
          Hb[bb].push([wb, wb.deserialize(String(Mb))])
        }
        if (bb.nodeProps)
          for (let gb of bb.nodeProps) {
            let bb = gb[0];
            "string" == typeof bb && (bb = eb.d[bb]);
            for (let wb = 1; wb < gb.length;) {
              let Mb = gb[wb++];
              if (Mb >= 0) pb(Mb, bb, gb[wb++]);
              else {
                let eb = gb[wb + -Mb];
                for (let Hb = -Mb; Hb > 0; Hb--) pb(gb[wb++], bb, eb);
                wb++
              }
            }
          }
        this.nodeSet = new eb.h(wb.map(((wb, pb) => eb.k.define({
          name: pb >= this.minRepeatTerm ? void 0 : wb,
          id: pb,
          props: Hb[pb],
          top: Mb.indexOf(pb) > -1,
          error: 0 == pb,
          skipped: bb.skippedNodes && bb.skippedNodes.indexOf(pb) > -1
        })))), bb.propSources && (this.nodeSet = this.nodeSet.extend(...bb.propSources)), this.strict = !1, this.bufferLength = eb.b;
        let Vb = lb(bb.tokenData);
        this.context = bb.context, this.specializerSpecs = bb.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let eb = 0; eb < this.specializerSpecs.length; eb++) this.specialized[eb] = this.specializerSpecs[eb].term;
        this.specializers = this.specializerSpecs.map(cb), this.states = lb(bb.states, Uint32Array), this.data = lb(bb.stateData), this.goto = lb(bb.goto), this.maxTerm = bb.maxTerm, this.tokenizers = bb.tokenizers.map((bb => "number" == typeof bb ? new Ub(Vb, bb) : bb)), this.topRules = bb.topRules, this.dialects = bb.dialects || {}, this.dynamicPrecedences = bb.dynamicPrecedences || null, this.tokenPrecTable = bb.tokenPrec, this.termNames = bb.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(bb, wb, Mb) {
        let eb = new xb(this, bb, wb, Mb);
        for (let Hb of this.wrappers) eb = Hb(eb, bb, wb, Mb);
        return eb
      }
      getGoto(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = this.goto;
        if (wb >= eb[0]) return -1;
        for (let Hb = eb[wb + 1];;) {
          let wb = eb[Hb++],
            pb = 1 & wb,
            Vb = eb[Hb++];
          if (pb && Mb) return Vb;
          for (let Mb = Hb + (wb >> 1); Hb < Mb; Hb++)
            if (eb[Hb] == bb) return Vb;
          if (pb) return -1
        }
      }
      hasAction(bb, wb) {
        let Mb = this.data;
        for (let eb = 0; eb < 2; eb++)
          for (let Hb, pb = this.stateSlot(bb, eb ? 2 : 1);; pb += 3) {
            if (65535 == (Hb = Mb[pb])) {
              if (1 != Mb[pb + 1]) {
                if (2 == Mb[pb + 1]) return Db(Mb, pb + 2);
                break
              }
              Hb = Mb[pb = Db(Mb, pb + 2)]
            }
            if (Hb == wb || 0 == Hb) return Db(Mb, pb + 1)
          }
        return 0
      }
      stateSlot(bb, wb) {
        return this.states[6 * bb + wb]
      }
      stateFlag(bb, wb) {
        return (this.stateSlot(bb, 0) & wb) > 0
      }
      validAction(bb, wb) {
        return !!this.allActions(bb, (bb => bb == wb || null))
      }
      allActions(bb, wb) {
        let Mb = this.stateSlot(bb, 4),
          eb = Mb ? wb(Mb) : void 0;
        for (let Hb = this.stateSlot(bb, 1); null == eb; Hb += 3) {
          if (65535 == this.data[Hb]) {
            if (1 != this.data[Hb + 1]) break;
            Hb = Db(this.data, Hb + 2)
          }
          eb = wb(Db(this.data, Hb + 1))
        }
        return eb
      }
      nextStates(bb) {
        let wb = [];
        for (let Mb = this.stateSlot(bb, 1);; Mb += 3) {
          if (65535 == this.data[Mb]) {
            if (1 != this.data[Mb + 1]) break;
            Mb = Db(this.data, Mb + 2)
          }
          if (0 == (1 & this.data[Mb + 2])) {
            let bb = this.data[Mb + 1];
            wb.some(((wb, Mb) => 1 & Mb && wb == bb)) || wb.push(this.data[Mb], bb)
          }
        }
        return wb
      }
      configure(bb) {
        let wb = Object.assign(Object.create(Rb.prototype), this);
        if (bb.props && (wb.nodeSet = this.nodeSet.extend(...bb.props)), bb.top) {
          let Mb = this.topRules[bb.top];
          if (!Mb) throw new RangeError(`Invalid top rule name ${bb.top}`);
          wb.top = Mb
        }
        return bb.tokenizers && (wb.tokenizers = this.tokenizers.map((wb => {
          let Mb = bb.tokenizers.find((bb => bb.from == wb));
          return Mb ? Mb.to : wb
        }))), bb.specializers && (wb.specializers = this.specializers.slice(), wb.specializerSpecs = this.specializerSpecs.map(((Mb, eb) => {
          let Hb = bb.specializers.find((bb => bb.from == Mb.external));
          if (!Hb) return Mb;
          let pb = Object.assign(Object.assign({}, Mb), {
            external: Hb.to
          });
          return wb.specializers[eb] = cb(pb), pb
        }))), bb.contextTracker && (wb.context = bb.contextTracker), bb.dialect && (wb.dialect = this.parseDialect(bb.dialect)), null != bb.strict && (wb.strict = bb.strict), bb.wrap && (wb.wrappers = wb.wrappers.concat(bb.wrap)), null != bb.bufferLength && (wb.bufferLength = bb.bufferLength), wb
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
        let wb = this.dynamicPrecedences;
        return null == wb ? 0 : wb[bb] || 0
      }
      parseDialect(bb) {
        let wb = Object.keys(this.dialects),
          Mb = wb.map((() => !1));
        if (bb)
          for (let Hb of bb.split(" ")) {
            let bb = wb.indexOf(Hb);
            bb >= 0 && (Mb[bb] = !0)
          }
        let eb = null;
        for (let Hb = 0; Hb < wb.length; Hb++)
          if (!Mb[Hb])
            for (let bb, Mb = this.dialects[wb[Hb]]; 65535 != (bb = this.data[Mb++]);)(eb || (eb = new Uint8Array(this.maxTerm + 1)))[bb] = 1;
        return new Kb(bb, Mb, eb)
      }
      static deserialize(bb) {
        return new Rb(bb)
      }
    }

    function Db(bb, wb) {
      return bb[wb] | bb[wb + 1] << 16
    }

    function cb(bb) {
      if (bb.external) {
        let wb = bb.extend ? 1 : 0;
        return (Mb, eb) => bb.external(Mb, eb) << 1 | wb
      }
      return bb.get
    }
    var Yb = Mb(53539);
    const Zb = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      fb = new class {
        constructor(bb) {
          this.start = bb.start, this.shift = bb.shift || rb, this.reduce = bb.reduce || rb, this.reuse = bb.reuse || rb, this.hash = bb.hash || (() => 0), this.strict = !1 !== bb.strict
        }
      }({
        start: !1,
        shift: (bb, wb) => 5 == wb || 6 == wb || 320 == wb ? bb : 321 == wb,
        strict: !1
      }),
      Ab = new Cb(((bb, wb) => {
        let {
          next: Mb
        } = bb;
        (125 == Mb || -1 == Mb || wb.context) && bb.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      Wb = new Cb(((bb, wb) => {
        let Mb, {
          next: eb
        } = bb;
        Zb.indexOf(eb) > -1 || (47 != eb || 47 != (Mb = bb.peek(1)) && 42 != Mb) && (125 == eb || 59 == eb || -1 == eb || wb.context || bb.acceptToken(316))
      }), {
        contextual: !0
      }),
      Jb = new Cb(((bb, wb) => {
        91 != bb.next || wb.context || bb.acceptToken(317)
      }), {
        contextual: !0
      }),
      Sb = new Cb(((bb, wb) => {
        let {
          next: Mb
        } = bb;
        if (43 == Mb || 45 == Mb) {
          if (bb.advance(), Mb == bb.next) {
            bb.advance();
            let Mb = !wb.context && wb.canShift(1);
            bb.acceptToken(Mb ? 1 : 2)
          }
        } else 63 == Mb && 46 == bb.peek(1) && (bb.advance(), bb.advance(), (bb.next < 48 || bb.next > 57) && bb.acceptToken(3))
      }), {
        contextual: !0
      });

    function Nb(bb, wb) {
      return bb >= 65 && bb <= 90 || bb >= 97 && bb <= 122 || 95 == bb || bb >= 192 || !wb && bb >= 48 && bb <= 57
    }
    const vb = new Cb(((bb, wb) => {
        if (60 != bb.next || !wb.dialectEnabled(0)) return;
        if (bb.advance(), 47 == bb.next) return;
        let Mb = 0;
        for (; Zb.indexOf(bb.next) > -1;) bb.advance(), Mb++;
        if (Nb(bb.next, !0)) {
          for (bb.advance(), Mb++; Nb(bb.next, !1);) bb.advance(), Mb++;
          for (; Zb.indexOf(bb.next) > -1;) bb.advance(), Mb++;
          if (44 == bb.next) return;
          for (let wb = 0;; wb++) {
            if (7 == wb) {
              if (!Nb(bb.next, !0)) return;
              break
            }
            if (bb.next != "extends".charCodeAt(wb)) break;
            bb.advance(), Mb++
          }
        }
        bb.acceptToken(4, -Mb)
      })),
      Qb = (0, Yb.h)({
        "get set async static": Yb.l.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": Yb.l.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": Yb.l.operatorKeyword,
        "let var const using function class extends": Yb.l.definitionKeyword,
        "import export from": Yb.l.moduleKeyword,
        "with debugger new": Yb.l.keyword,
        TemplateString: Yb.l.special(Yb.l.string),
        super: Yb.l.atom,
        BooleanLiteral: Yb.l.bool,
        this: Yb.l.self,
        null: Yb.l.null,
        Star: Yb.l.modifier,
        VariableName: Yb.l.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": Yb.l.function(Yb.l.variableName),
        VariableDefinition: Yb.l.definition(Yb.l.variableName),
        Label: Yb.l.labelName,
        PropertyName: Yb.l.propertyName,
        PrivatePropertyName: Yb.l.special(Yb.l.propertyName),
        "CallExpression/MemberExpression/PropertyName": Yb.l.function(Yb.l.propertyName),
        "FunctionDeclaration/VariableDefinition": Yb.l.function(Yb.l.definition(Yb.l.variableName)),
        "ClassDeclaration/VariableDefinition": Yb.l.definition(Yb.l.className),
        "NewExpression/VariableName": Yb.l.className,
        PropertyDefinition: Yb.l.definition(Yb.l.propertyName),
        PrivatePropertyDefinition: Yb.l.definition(Yb.l.special(Yb.l.propertyName)),
        UpdateOp: Yb.l.updateOperator,
        "LineComment Hashbang": Yb.l.lineComment,
        BlockComment: Yb.l.blockComment,
        Number: Yb.l.number,
        String: Yb.l.string,
        Escape: Yb.l.escape,
        ArithOp: Yb.l.arithmeticOperator,
        LogicOp: Yb.l.logicOperator,
        BitOp: Yb.l.bitwiseOperator,
        CompareOp: Yb.l.compareOperator,
        RegExp: Yb.l.regexp,
        Equals: Yb.l.definitionOperator,
        Arrow: Yb.l.function(Yb.l.punctuation),
        ": Spread": Yb.l.punctuation,
        "( )": Yb.l.paren,
        "[ ]": Yb.l.squareBracket,
        "{ }": Yb.l.brace,
        "InterpolationStart InterpolationEnd": Yb.l.special(Yb.l.brace),
        ".": Yb.l.derefOperator,
        ", ;": Yb.l.separator,
        "@": Yb.l.meta,
        TypeName: Yb.l.typeName,
        TypeDefinition: Yb.l.definition(Yb.l.typeName),
        "type enum interface implements namespace module declare": Yb.l.definitionKeyword,
        "abstract global Privacy readonly override": Yb.l.modifier,
        "is keyof unique infer asserts": Yb.l.operatorKeyword,
        JSXAttributeValue: Yb.l.attributeValue,
        JSXText: Yb.l.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": Yb.l.angleBracket,
        "JSXIdentifier JSXNameSpacedName": Yb.l.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": Yb.l.attributeName,
        "JSXBuiltin/JSXIdentifier": Yb.l.standard(Yb.l.tagName)
      }),
      Gb = {
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
      ab = {
        __proto__: null,
        "<": 193
      },
      ib = Rb.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: fb,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [Qb],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [Wb, Jb, Sb, vb, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Ab, new tb("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new tb("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: bb => Gb[bb] || -1
        }, {
          term: 343,
          get: bb => qb[bb] || -1
        }, {
          term: 95,
          get: bb => ab[bb] || -1
        }],
        tokenPrec: 15201
      });
    var ub = Mb(53528),
      db = Mb(53501),
      Pb = Mb(53510),
      nb = Mb(53497);
    const yb = [(0, nb.r)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, nb.r)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, nb.r)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, nb.r)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, nb.r)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, nb.r)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, nb.r)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, nb.r)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, nb.r)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, nb.r)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, nb.r)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      ob = yb.concat([(0, nb.r)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, nb.r)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, nb.r)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      Tb = new eb.l,
      kb = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function bw(bb) {
      return (wb, Mb) => {
        let eb = wb.node.getChild("VariableDefinition");
        return eb && Mb(eb, bb), !0
      }
    }
    const ww = ["FunctionDeclaration"],
      Mw = {
        FunctionDeclaration: bw("function"),
        ClassDeclaration: bw("class"),
        ClassExpression: () => !0,
        EnumDeclaration: bw("constant"),
        TypeAliasDeclaration: bw("type"),
        NamespaceDeclaration: bw("namespace"),
        VariableDefinition(bb, wb) {
          bb.matchContext(ww) || wb(bb, "variable")
        },
        TypeDefinition(bb, wb) {
          wb(bb, "type")
        },
        __proto__: null
      };

    function ew(bb, wb) {
      let Mb = Tb.get(wb);
      if (Mb) return Mb;
      let Hb = [],
        pb = !0;

      function Vb(wb, Mb) {
        let eb = bb.sliceString(wb.from, wb.to);
        Hb.push({
          label: eb,
          type: Mb
        })
      }
      return wb.cursor(eb.c.IncludeAnonymous).iterate((wb => {
        if (pb) pb = !1;
        else if (wb.name) {
          let bb = Mw[wb.name];
          if (bb && bb(wb, Vb) || kb.has(wb.name)) return !1
        } else if (wb.to - wb.from > 8192) {
          for (let Mb of ew(bb, wb.node)) Hb.push(Mb);
          return !1
        }
      })), Tb.set(wb, Hb), Hb
    }
    const Hw = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      pw = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function Vw(bb) {
      let wb = (0, ub.qb)(bb.state).resolveInner(bb.pos, -1);
      if (pw.indexOf(wb.name) > -1) return null;
      let Mb = "VariableName" == wb.name || wb.to - wb.from < 20 && Hw.test(bb.state.sliceDoc(wb.from, wb.to));
      if (!Mb && !bb.explicit) return null;
      let eb = [];
      for (let Hb = wb; Hb; Hb = Hb.parent) kb.has(Hb.name) && (eb = eb.concat(ew(bb.state.doc, Hb)));
      return {
        options: eb,
        from: Mb ? wb.from : bb.pos,
        validFor: Hw
      }
    }
    const gw = ub.j.define({
        name: "javascript",
        parser: ib.configure({
          props: [ub.Y.add({
            IfStatement: (0, ub.t)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, ub.t)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: ub.E,
            SwitchBody: bb => {
              let wb = bb.textAfter,
                Mb = /^\s*\}/.test(wb),
                eb = /^\s*(case|default)\b/.test(wb);
              return bb.baseIndent + (Mb ? 0 : eb ? 1 : 2) * bb.unit
            },
            Block: (0, ub.C)({
              closing: "}"
            }),
            ArrowFunction: bb => bb.baseIndent + bb.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, ub.t)({
              except: /^\s*{/
            }),
            JSXElement(bb) {
              let wb = /^\s*<\//.test(bb.textAfter);
              return bb.lineIndent(bb.node.from) + (wb ? 0 : bb.unit)
            },
            JSXEscape(bb) {
              let wb = /\s*\}/.test(bb.textAfter);
              return bb.lineIndent(bb.node.from) + (wb ? 0 : bb.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": bb => bb.column(bb.node.from) + bb.unit
          }), ub.P.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": ub.J,
            BlockComment: bb => ({
              from: bb.from + 2,
              to: bb.to - 2
            }),
            JSXElement(bb) {
              let wb = bb.firstChild;
              if (!wb || "JSXSelfClosingTag" == wb.name) return null;
              let Mb = bb.lastChild;
              return {
                from: wb.to,
                to: Mb.type.isError ? bb.to : Mb.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(bb) {
              var wb;
              let Mb = null === (wb = bb.firstChild) || void 0 === wb ? void 0 : wb.nextSibling,
                eb = bb.lastChild;
              return !Mb || Mb.type.isError ? null : {
                from: Mb.to,
                to: eb.type.isError ? bb.to : eb.from
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
      lw = {
        test: bb => /^JSX/.test(bb.name),
        facet: (0, ub.B)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      Lw = gw.configure({
        dialect: "ts"
      }, "typescript"),
      Iw = gw.configure({
        dialect: "jsx",
        props: [ub.jb.add((bb => bb.isTop ? [lw] : void 0))]
      }),
      Ow = gw.configure({
        dialect: "jsx ts",
        props: [ub.jb.add((bb => bb.isTop ? [lw] : void 0))]
      }, "typescript");
    let Uw = bb => ({
      label: bb,
      type: "keyword"
    });
    const tw = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Uw),
      Cw = tw.concat(["declare", "implements", "private", "protected", "public"].map(Uw));

    function Ew() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        wb = bb.jsx ? bb.typescript ? Ow : Iw : bb.typescript ? Lw : gw,
        Mb = bb.typescript ? ob.concat(Cw) : yb.concat(tw);
      return new ub.n(wb, [gw.data.of({
        autocomplete: (0, nb.q)(pw, (0, nb.m)(Mb))
      }), gw.data.of({
        autocomplete: Vw
      }), bb.jsx ? sw : []])
    }

    function Fw(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.length;
      for (let eb = null === wb || void 0 === wb ? void 0 : wb.firstChild; eb; eb = eb.nextSibling)
        if ("JSXIdentifier" == eb.name || "JSXBuiltin" == eb.name || "JSXNamespacedName" == eb.name || "JSXMemberExpression" == eb.name) return bb.sliceString(eb.from, Math.min(eb.to, Mb));
      return ""
    }
    const Bw = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      sw = Pb.g.inputHandler.of(((bb, wb, Mb, eb, Hb) => {
        if ((Bw ? bb.composing : bb.compositionStarted) || bb.state.readOnly || wb != Mb || ">" != eb && "/" != eb || !gw.isActiveAt(bb.state, wb, -1)) return !1;
        let pb = Hb(),
          {
            state: Vb
          } = pb,
          gb = Vb.changeByRange((bb => {
            var wb;
            let Mb, {
                head: Hb
              } = bb,
              pb = (0, ub.qb)(Vb).resolveInner(Hb - 1, -1);
            if ("JSXStartTag" == pb.name && (pb = pb.parent), Vb.doc.sliceString(Hb - 1, Hb) != eb || "JSXAttributeValue" == pb.name && pb.to > Hb);
            else {
              if (">" == eb && "JSXFragmentTag" == pb.name) return {
                range: bb,
                changes: {
                  from: Hb,
                  insert: "</>"
                }
              };
              if ("/" == eb && "JSXStartCloseTag" == pb.name) {
                let bb = pb.parent,
                  eb = bb.parent;
                if (eb && bb.from == Hb - 2 && ((Mb = Fw(Vb.doc, eb.firstChild, Hb)) || "JSXFragmentTag" == (null === (wb = eb.firstChild) || void 0 === wb ? void 0 : wb.name))) {
                  let bb = `${Mb}>`;
                  return {
                    range: db.j.cursor(Hb + bb.length, -1),
                    changes: {
                      from: Hb,
                      insert: bb
                    }
                  }
                }
              } else if (">" == eb) {
                let wb = function(bb) {
                  for (;;) {
                    if ("JSXOpenTag" == bb.name || "JSXSelfClosingTag" == bb.name || "JSXFragmentTag" == bb.name) return bb;
                    if ("JSXEscape" == bb.name || !bb.parent) return null;
                    bb = bb.parent
                  }
                }(pb);
                if (wb && "JSXOpenTag" == wb.name && !/^\/?>|^<\//.test(Vb.doc.sliceString(Hb, Hb + 2)) && (Mb = Fw(Vb.doc, wb, Hb))) return {
                  range: bb,
                  changes: {
                    from: Hb,
                    insert: `</${Mb}>`
                  }
                }
              }
            }
            return {
              range: bb
            }
          }));
        return !gb.changes.empty && (bb.dispatch([pb, Vb.update(gb, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  53528: (bb, wb, Mb) => {
    Mb.d(wb, {
      B: () => Ib,
      C: () => Gb,
      E: () => ab,
      F: () => sw,
      J: () => yb,
      N: () => Lw,
      P: () => nb,
      R: () => Bb,
      T: () => Yb,
      U: () => fb,
      Y: () => Wb,
      _: () => db,
      ab: () => Zb,
      e: () => hw,
      eb: () => cb,
      f: () => Ab,
      fb: () => aw,
      j: () => Cb,
      jb: () => Ob,
      mb: () => jw,
      n: () => Rb,
      ob: () => Fb,
      qb: () => Eb,
      r: () => vw,
      t: () => ib,
      x: () => Rw
    });
    var eb, Hb = Mb(53533),
      pb = Mb(53501),
      Vb = Mb(53510),
      gb = Mb(53539),
      lb = Mb(53517);
    const Lb = new Hb.d;

    function Ib(bb) {
      return pb.o.define({
        combine: bb ? wb => wb.concat(bb) : void 0
      })
    }
    const Ob = new Hb.d;
    class Ub {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = bb, this.name = eb, pb.n.prototype.hasOwnProperty("tree") || Object.defineProperty(pb.n.prototype, "tree", {
          get() {
            return Eb(this)
          }
        }), this.parser = wb, this.extension = [rb.of(this), pb.n.languageData.of(((bb, wb, Mb) => {
          let eb = tb(bb, wb, Mb),
            Hb = eb.type.prop(Lb);
          if (!Hb) return [];
          let pb = bb.facet(Hb),
            Vb = eb.type.prop(Ob);
          if (Vb) {
            let Hb = eb.resolve(wb - eb.from, Mb);
            for (let wb of Vb)
              if (wb.test(Hb, bb)) {
                let Mb = bb.facet(wb.facet);
                return "replace" == wb.type ? Mb : Mb.concat(pb)
              }
          }
          return pb
        }))].concat(Mb)
      }
      isActiveAt(bb, wb) {
        return tb(bb, wb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Lb) == this.data
      }
      findRegions(bb) {
        let wb = bb.facet(rb);
        if ((null === wb || void 0 === wb ? void 0 : wb.data) == this.data) return [{
          from: 0,
          to: bb.doc.length
        }];
        if (!wb || !wb.allowsNesting) return [];
        let Mb = [],
          eb = (bb, wb) => {
            if (bb.prop(Lb) == this.data) return void Mb.push({
              from: wb,
              to: wb + bb.length
            });
            let pb = bb.prop(Hb.d.mounted);
            if (pb) {
              if (pb.tree.prop(Lb) == this.data) {
                if (pb.overlay)
                  for (let bb of pb.overlay) Mb.push({
                    from: bb.from + wb,
                    to: bb.to + wb
                  });
                else Mb.push({
                  from: wb,
                  to: wb + bb.length
                });
                return
              }
              if (pb.overlay) {
                let bb = Mb.length;
                if (eb(pb.tree, pb.overlay[0].from + wb), Mb.length > bb) return
              }
            }
            for (let Mb = 0; Mb < bb.children.length; Mb++) {
              let pb = bb.children[Mb];
              pb instanceof Hb.t && eb(pb, bb.positions[Mb] + wb)
            }
          };
        return eb(Eb(bb), 0), Mb
      }
      get allowsNesting() {
        return !0
      }
    }

    function tb(bb, wb, Mb) {
      let eb = bb.facet(rb),
        pb = Eb(bb).topNode;
      if (!eb || eb.allowsNesting)
        for (let Vb = pb; Vb; Vb = Vb.enter(wb, Mb, Hb.c.ExcludeBuffers | Hb.c.EnterBracketed)) Vb.type.isTop && (pb = Vb);
      return pb
    }
    Ub.setState = pb.E.define();
    class Cb extends Ub {
      constructor(bb, wb, Mb) {
        super(bb, wb, [], Mb), this.parser = wb
      }
      static define(bb) {
        let wb = Ib(bb.languageData);
        return new Cb(wb, bb.parser.configure({
          props: [Lb.add((bb => bb.isTop ? wb : void 0))]
        }), bb.name)
      }
      configure(bb, wb) {
        return new Cb(this.data, this.parser.configure(bb), wb || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function Eb(bb) {
      let wb = bb.field(Ub.state, !1);
      return wb ? wb.tree : Hb.t.empty
    }

    function Fb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.doc.length;
      var Mb;
      return (null === (Mb = bb.field(Ub.state, !1)) || void 0 === Mb ? void 0 : Mb.context.isDone(wb)) || !1
    }

    function Bb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.viewport.to,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        eb = function(bb, wb) {
          let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var eb;
          let Hb = null === (eb = bb.field(Ub.state, !1)) || void 0 === eb ? void 0 : eb.context;
          if (!Hb) return null;
          let pb = Hb.viewport;
          Hb.updateViewport({
            from: 0,
            to: wb
          });
          let Vb = Hb.isDone(wb) || Hb.work(Mb, wb) ? Hb.tree : null;
          return Hb.updateViewport(pb), Vb
        }(bb.state, wb, Mb);
      return eb != Eb(bb.state) && bb.dispatch({}), !!eb
    }
    class sb {
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
      read(bb, wb) {
        let Mb = this.cursorPos - this.string.length;
        return bb < Mb || wb >= this.cursorPos ? this.doc.sliceString(bb, wb) : this.string.slice(bb - Mb, wb - Mb)
      }
    }
    let mb = null;
    class hb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          eb = arguments.length > 3 ? arguments[3] : void 0,
          Hb = arguments.length > 4 ? arguments[4] : void 0,
          pb = arguments.length > 5 ? arguments[5] : void 0,
          Vb = arguments.length > 6 ? arguments[6] : void 0,
          gb = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = bb, this.state = wb, this.fragments = Mb, this.tree = eb, this.treeLen = Hb, this.viewport = pb, this.skipped = Vb, this.scheduleOn = gb, this.parse = null, this.tempSkipped = []
      }
      static create(bb, wb, Mb) {
        return new hb(bb, wb, [], Hb.t.empty, 0, Mb, [], null)
      }
      startParse() {
        return this.parser.startParse(new sb(this.state.doc), this.fragments)
      }
      work(bb, wb) {
        return null != wb && wb >= this.state.doc.length && (wb = void 0), this.tree != Hb.t.empty && this.isDone(null !== wb && void 0 !== wb ? wb : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var Mb;
          if ("number" == typeof bb) {
            let wb = Date.now() + bb;
            bb = () => Date.now() > wb
          }
          for (this.parse || (this.parse = this.startParse()), null != wb && (null == this.parse.stoppedAt || this.parse.stoppedAt > wb) && wb < this.state.doc.length && this.parse.stopAt(wb);;) {
            let eb = this.parse.advance();
            if (eb) {
              if (this.fragments = this.withoutTempSkipped(Hb.q.addTree(eb, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (Mb = this.parse.stoppedAt) && void 0 !== Mb ? Mb : this.state.doc.length, this.tree = eb, this.parse = null, !(this.treeLen < (null !== wb && void 0 !== wb ? wb : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (bb()) return !1
          }
        }))
      }
      takeTree() {
        let bb, wb;
        this.parse && (bb = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > bb) && this.parse.stopAt(bb), this.withContext((() => {
          for (; !(wb = this.parse.advance()););
        })), this.treeLen = bb, this.tree = wb, this.fragments = this.withoutTempSkipped(Hb.q.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(bb) {
        let wb = mb;
        mb = this;
        try {
          return bb()
        } finally {
          mb = wb
        }
      }
      withoutTempSkipped(bb) {
        for (let wb; wb = this.tempSkipped.pop();) bb = zb(bb, wb.from, wb.to);
        return bb
      }
      changes(bb, wb) {
        let {
          fragments: Mb,
          tree: eb,
          treeLen: pb,
          viewport: Vb,
          skipped: gb
        } = this;
        if (this.takeTree(), !bb.empty) {
          let wb = [];
          if (bb.iterChangedRanges(((bb, Mb, eb, Hb) => wb.push({
              fromA: bb,
              toA: Mb,
              fromB: eb,
              toB: Hb
            }))), Mb = Hb.q.applyChanges(Mb, wb), eb = Hb.t.empty, pb = 0, Vb = {
              from: bb.mapPos(Vb.from, -1),
              to: bb.mapPos(Vb.to, 1)
            }, this.skipped.length) {
            gb = [];
            for (let wb of this.skipped) {
              let Mb = bb.mapPos(wb.from, 1),
                eb = bb.mapPos(wb.to, -1);
              Mb < eb && gb.push({
                from: Mb,
                to: eb
              })
            }
          }
        }
        return new hb(this.parser, wb, Mb, eb, pb, Vb, gb, this.scheduleOn)
      }
      updateViewport(bb) {
        if (this.viewport.from == bb.from && this.viewport.to == bb.to) return !1;
        this.viewport = bb;
        let wb = this.skipped.length;
        for (let Mb = 0; Mb < this.skipped.length; Mb++) {
          let {
            from: wb,
            to: eb
          } = this.skipped[Mb];
          wb < bb.to && eb > bb.from && (this.fragments = zb(this.fragments, wb, eb), this.skipped.splice(Mb--, 1))
        }
        return !(this.skipped.length >= wb) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(bb, wb) {
        this.skipped.push({
          from: bb,
          to: wb
        })
      }
      static getSkippingParser(bb) {
        return new class extends Hb.m {
          createParse(wb, Mb, eb) {
            let pb = eb[0].from,
              Vb = eb[eb.length - 1].to;
            return {
              parsedPos: pb,
              advance() {
                let wb = mb;
                if (wb) {
                  for (let bb of eb) wb.tempSkipped.push(bb);
                  bb && (wb.scheduleOn = wb.scheduleOn ? Promise.all([wb.scheduleOn, bb]) : bb)
                }
                return this.parsedPos = Vb, new Hb.t(Hb.k.none, [], [], Vb - pb)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(bb) {
        bb = Math.min(bb, this.state.doc.length);
        let wb = this.fragments;
        return this.treeLen >= bb && wb.length && 0 == wb[0].from && wb[0].to >= bb
      }
      static get() {
        return mb
      }
    }

    function zb(bb, wb, Mb) {
      return Hb.q.applyChanges(bb, [{
        fromA: wb,
        toA: Mb,
        fromB: wb,
        toB: Mb
      }])
    }
    class Xb {
      constructor(bb) {
        this.context = bb, this.tree = bb.tree
      }
      apply(bb) {
        if (!bb.docChanged && this.tree == this.context.tree) return this;
        let wb = this.context.changes(bb.changes, bb.state),
          Mb = this.context.treeLen == bb.startState.doc.length ? void 0 : Math.max(bb.changes.mapPos(this.context.treeLen), wb.viewport.to);
        return wb.work(20, Mb) || wb.takeTree(), new Xb(wb)
      }
      static init(bb) {
        let wb = Math.min(3e3, bb.doc.length),
          Mb = hb.create(bb.facet(rb).parser, bb, {
            from: 0,
            to: wb
          });
        return Mb.work(20, wb) || Mb.takeTree(), new Xb(Mb)
      }
    }
    Ub.state = pb.G.define({
      create: Xb.init,
      update(bb, wb) {
        for (let Mb of wb.effects)
          if (Mb.is(Ub.setState)) return Mb.value;
        return wb.startState.facet(rb) != wb.state.facet(rb) ? Xb.init(wb.state) : bb.apply(wb)
      }
    });
    let xb = bb => {
      let wb = setTimeout((() => bb()), 500);
      return () => clearTimeout(wb)
    };
    "undefined" != typeof requestIdleCallback && (xb = bb => {
      let wb = -1,
        Mb = setTimeout((() => {
          wb = requestIdleCallback(bb, {
            timeout: 400
          })
        }), 100);
      return () => wb < 0 ? clearTimeout(Mb) : cancelIdleCallback(wb)
    });
    const jb = "undefined" != typeof navigator && (null === (eb = navigator.scheduling) || void 0 === eb ? void 0 : eb.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      Kb = Vb.n.fromClass(class {
        constructor(bb) {
          this.view = bb, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(bb) {
          let wb = this.view.state.field(Ub.state).context;
          (wb.updateViewport(bb.view.viewport) || this.view.viewport.to > wb.treeLen) && this.scheduleWork(), (bb.docChanged || bb.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(wb)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: bb
          } = this.view, wb = bb.field(Ub.state);
          wb.tree == wb.context.tree && wb.context.isDone(bb.doc.length) || (this.working = xb(this.work))
        }
        work(bb) {
          this.working = null;
          let wb = Date.now();
          if (this.chunkEnd < wb && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = wb + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: Mb,
            viewport: {
              to: eb
            }
          } = this.view, Hb = Mb.field(Ub.state);
          if (Hb.tree == Hb.context.tree && Hb.context.isDone(eb + 1e5)) return;
          let pb = Date.now() + Math.min(this.chunkBudget, 100, bb && !jb ? Math.max(25, bb.timeRemaining() - 5) : 1e9),
            Vb = Hb.context.treeLen < eb && Mb.doc.length > eb + 1e3,
            gb = Hb.context.work((() => jb && jb() || Date.now() > pb), eb + (Vb ? 0 : 1e5));
          this.chunkBudget -= Date.now() - wb, (gb || this.chunkBudget <= 0) && (Hb.context.takeTree(), this.view.dispatch({
            effects: Ub.setState.of(new Xb(Hb.context))
          })), this.chunkBudget > 0 && (!gb || Vb) && this.scheduleWork(), this.checkAsyncSchedule(Hb.context)
        }
        checkAsyncSchedule(bb) {
          bb.scheduleOn && (this.workScheduled++, bb.scheduleOn.then((() => this.scheduleWork())).catch((bb => (0, Vb.ab)(this.view.state, bb))).then((() => this.workScheduled--)), bb.scheduleOn = null)
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
      rb = pb.o.define({
        combine: bb => bb.length ? bb[0] : null,
        enables: bb => [Ub.state, Kb, Vb.g.contentAttributes.compute([bb], (wb => {
          let Mb = wb.facet(bb);
          return Mb && Mb.name ? {
            "data-language": Mb.name
          } : {}
        }))]
      });
    class Rb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = bb, this.support = wb, this.extension = [bb, wb]
      }
    }
    const Db = pb.o.define(),
      cb = pb.o.define({
        combine: bb => {
          if (!bb.length) return "  ";
          let wb = bb[0];
          if (!wb || /\S/.test(wb) || Array.from(wb).some((bb => bb != wb[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(bb[0]));
          return wb
        }
      });

    function Yb(bb) {
      let wb = bb.facet(cb);
      return 9 == wb.charCodeAt(0) ? bb.tabSize * wb.length : wb.length
    }

    function Zb(bb, wb) {
      let Mb = "",
        eb = bb.tabSize,
        Hb = bb.facet(cb)[0];
      if ("\t" == Hb) {
        for (; wb >= eb;) Mb += "\t", wb -= eb;
        Hb = " "
      }
      for (let pb = 0; pb < wb; pb++) Mb += Hb;
      return Mb
    }

    function fb(bb, wb) {
      bb instanceof pb.n && (bb = new Ab(bb));
      for (let eb of bb.state.facet(Db)) {
        let Mb = eb(bb, wb);
        if (void 0 !== Mb) return Mb
      }
      let Mb = Eb(bb.state);
      return Mb.length >= wb ? function(bb, wb, Mb) {
        let eb = wb.resolveStack(Mb),
          Hb = wb.resolveInner(Mb, -1).resolve(Mb, 0).enterUnfinishedNodesBefore(Mb);
        if (Hb != eb.node) {
          let bb = [];
          for (let wb = Hb; wb && !(wb.from < eb.node.from || wb.to > eb.node.to || wb.from == eb.node.from && wb.type == eb.node.type); wb = wb.parent) bb.push(wb);
          for (let wb = bb.length - 1; wb >= 0; wb--) eb = {
            node: bb[wb],
            next: eb
          }
        }
        return Jb(eb, bb, Mb)
      }(bb, Mb, wb) : null
    }
    class Ab {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = bb, this.options = wb, this.unit = Yb(bb)
      }
      lineAt(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Mb = this.state.doc.lineAt(bb),
          {
            simulateBreak: eb,
            simulateDoubleBreak: Hb
          } = this.options;
        return null != eb && eb >= Mb.from && eb <= Mb.to ? Hb && eb == bb ? {
          text: "",
          from: bb
        } : (wb < 0 ? eb < bb : eb <= bb) ? {
          text: Mb.text.slice(eb - Mb.from),
          from: eb
        } : {
          text: Mb.text.slice(0, eb - Mb.from),
          from: Mb.from
        } : Mb
      }
      textAfterPos(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && bb == this.options.simulateBreak) return "";
        let {
          text: Mb,
          from: eb
        } = this.lineAt(bb, wb);
        return Mb.slice(bb - eb, Math.min(Mb.length, bb + 100 - eb))
      }
      column(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Mb,
            from: eb
          } = this.lineAt(bb, wb),
          Hb = this.countColumn(Mb, bb - eb),
          pb = this.options.overrideIndentation ? this.options.overrideIndentation(eb) : -1;
        return pb > -1 && (Hb += pb - this.countColumn(Mb, Mb.search(/\S|$/))), Hb
      }
      countColumn(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.length;
        return (0, pb.S)(bb, this.state.tabSize, wb)
      }
      lineIndent(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Mb,
            from: eb
          } = this.lineAt(bb, wb),
          Hb = this.options.overrideIndentation;
        if (Hb) {
          let bb = Hb(eb);
          if (bb > -1) return bb
        }
        return this.countColumn(Mb, Mb.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const Wb = new Hb.d;

    function Jb(bb, wb, Mb) {
      for (let eb = bb; eb; eb = eb.next) {
        let bb = Sb(eb.node);
        if (bb) return bb(vb.create(wb, Mb, eb))
      }
      return 0
    }

    function Sb(bb) {
      let wb = bb.type.prop(Wb);
      if (wb) return wb;
      let Mb, eb = bb.firstChild;
      if (eb && (Mb = eb.type.prop(Hb.d.closedBy))) {
        let wb = bb.lastChild,
          eb = wb && Mb.indexOf(wb.name) > -1;
        return bb => qb(bb, !0, 1, void 0, eb && ! function(bb) {
          return bb.pos == bb.options.simulateBreak && bb.options.simulateDoubleBreak
        }(bb) ? wb.from : void 0)
      }
      return null == bb.parent ? Nb : null
    }

    function Nb() {
      return 0
    }
    class vb extends Ab {
      constructor(bb, wb, Mb) {
        super(bb.state, bb.options), this.base = bb, this.pos = wb, this.context = Mb
      }
      get node() {
        return this.context.node
      }
      static create(bb, wb, Mb) {
        return new vb(bb, wb, Mb)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(bb) {
        let wb = this.state.doc.lineAt(bb.from);
        for (;;) {
          let Mb = bb.resolve(wb.from);
          for (; Mb.parent && Mb.parent.from == Mb.from;) Mb = Mb.parent;
          if (Qb(Mb, bb)) break;
          wb = this.state.doc.lineAt(Mb.from)
        }
        return this.lineIndent(wb.from)
      }
      continue () {
        return Jb(this.context.next, this.base, this.pos)
      }
    }

    function Qb(bb, wb) {
      for (let Mb = wb; Mb; Mb = Mb.parent)
        if (bb == Mb) return !0;
      return !1
    }

    function Gb(bb) {
      let {
        closing: wb,
        align: Mb = !0,
        units: eb = 1
      } = bb;
      return bb => qb(bb, Mb, eb, wb)
    }

    function qb(bb, wb, Mb, eb, Hb) {
      let pb = bb.textAfter,
        Vb = pb.match(/^\s*/)[0].length,
        gb = eb && pb.slice(Vb, Vb + eb.length) == eb || Hb == bb.pos + Vb,
        lb = wb ? function(bb) {
          let wb = bb.node,
            Mb = wb.childAfter(wb.from),
            eb = wb.lastChild;
          if (!Mb) return null;
          let Hb = bb.options.simulateBreak,
            pb = bb.state.doc.lineAt(Mb.from),
            Vb = null == Hb || Hb <= pb.from ? pb.to : Math.min(pb.to, Hb);
          for (let gb = Mb.to;;) {
            let bb = wb.childAfter(gb);
            if (!bb || bb == eb) return null;
            if (!bb.type.isSkipped) {
              if (bb.from >= Vb) return null;
              let wb = /^ */.exec(pb.text.slice(Mb.to - pb.from))[0].length;
              return {
                from: Mb.from,
                to: Mb.to + wb
              }
            }
            gb = bb.to
          }
        }(bb) : null;
      return lb ? gb ? bb.column(lb.from) : bb.column(lb.to) : bb.baseIndent + (gb ? 0 : bb.unit * Mb)
    }
    const ab = bb => bb.baseIndent;

    function ib() {
      let {
        except: bb,
        units: wb = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Mb => {
        let eb = bb && bb.test(Mb.textAfter);
        return Mb.baseIndent + (eb ? 0 : wb * Mb.unit)
      }
    }
    const ub = 200;

    function db() {
      return pb.n.transactionFilter.of((bb => {
        if (!bb.docChanged || !bb.isUserEvent("input.type") && !bb.isUserEvent("input.complete")) return bb;
        let wb = bb.startState.languageDataAt("indentOnInput", bb.startState.selection.main.head);
        if (!wb.length) return bb;
        let Mb = bb.newDoc,
          {
            head: eb
          } = bb.newSelection.main,
          Hb = Mb.lineAt(eb);
        if (eb > Hb.from + ub) return bb;
        let pb = Mb.sliceString(Hb.from, eb);
        if (!wb.some((bb => bb.test(pb)))) return bb;
        let {
          state: Vb
        } = bb, gb = -1, lb = [];
        for (let {
            head: Lb
          }
          of Vb.selection.gF) {
          let bb = Vb.doc.lineAt(Lb);
          if (bb.from == gb) continue;
          gb = bb.from;
          let wb = fb(Vb, bb.from);
          if (null == wb) continue;
          let Mb = /^\s*/.exec(bb.text)[0],
            eb = Zb(Vb, wb);
          Mb != eb && lb.push({
            from: bb.from,
            to: bb.from + Mb.length,
            insert: eb
          })
        }
        return lb.length ? [bb, {
          changes: lb,
          sequential: !0
        }] : bb
      }))
    }
    const Pb = pb.o.define(),
      nb = new Hb.d;

    function yb(bb) {
      let wb = bb.firstChild,
        Mb = bb.lastChild;
      return wb && wb.to < Mb.from ? {
        from: wb.to,
        to: Mb.type.isError ? bb.to : Mb.from
      } : null
    }

    function ob(bb) {
      let wb = bb.lastChild;
      return wb && wb.to == bb.to && wb.type.isError
    }

    function Tb(bb, wb, Mb) {
      for (let eb of bb.facet(Pb)) {
        let Hb = eb(bb, wb, Mb);
        if (Hb) return Hb
      }
      return function(bb, wb, Mb) {
        let eb = Eb(bb);
        if (eb.length < Mb) return null;
        let Hb = null;
        for (let pb = eb.resolveStack(Mb, 1); pb; pb = pb.next) {
          let Vb = pb.node;
          if (Vb.to <= Mb || Vb.from > Mb) continue;
          if (Hb && Vb.from < wb) break;
          let gb = Vb.type.prop(nb);
          if (gb && (Vb.to < eb.length - 50 || eb.length == bb.doc.length || !ob(Vb))) {
            let eb = gb(Vb, bb);
            eb && eb.from <= Mb && eb.from >= wb && eb.to > Mb && (Hb = eb)
          }
        }
        return Hb
      }(bb, wb, Mb)
    }

    function kb(bb, wb) {
      let Mb = wb.mapPos(bb.from, 1),
        eb = wb.mapPos(bb.to, -1);
      return Mb >= eb ? void 0 : {
        from: Mb,
        to: eb
      }
    }
    const bw = pb.E.define({
        map: kb
      }),
      ww = pb.E.define({
        map: kb
      });

    function Mw(bb) {
      let wb = [];
      for (let {
          head: Mb
        }
        of bb.state.selection.gF) wb.some((bb => bb.from <= Mb && bb.to >= Mb)) || wb.push(bb.lineBlockAt(Mb));
      return wb
    }
    const ew = pb.G.define({
      create: () => Vb.d.none,
      update(bb, wb) {
        wb.isUserEvent("delete") && wb.changes.iterChangedRanges(((wb, Mb) => bb = Hw(bb, wb, Mb))), bb = bb.map(wb.changes);
        for (let Mb of wb.effects)
          if (Mb.is(bw) && !Vw(bb, Mb.value.from, Mb.value.to)) {
            let {
              preparePlaceholder: eb
            } = wb.state.facet(Ow), Hb = eb ? Vb.d.replace({
              widget: new Ew(eb(wb.state, Mb.value))
            }) : Cw;
            bb = bb.update({
              add: [Hb.range(Mb.value.from, Mb.value.to)]
            })
          } else Mb.is(ww) && (bb = bb.update({
            filter: (bb, wb) => Mb.value.from != bb || Mb.value.to != wb,
            filterFrom: Mb.value.from,
            filterTo: Mb.value.to
          }));
        return wb.selection && (bb = Hw(bb, wb.selection.main.head)), bb
      },
      provide: bb => Vb.g.ze.from(bb),
      toJSON(bb, wb) {
        let Mb = [];
        return bb.between(0, wb.doc.length, ((bb, wb) => {
          Mb.push(bb, wb)
        })), Mb
      },
      fromJSON(bb) {
        if (!Array.isArray(bb) || bb.length % 2) throw new RangeError("Invalid JSON for fold state");
        let wb = [];
        for (let Mb = 0; Mb < bb.length;) {
          let eb = bb[Mb++],
            Hb = bb[Mb++];
          if ("number" != typeof eb || "number" != typeof Hb) throw new RangeError("Invalid JSON for fold state");
          wb.push(Cw.range(eb, Hb))
        }
        return Vb.d.set(wb, !0)
      }
    });

    function Hw(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wb,
        eb = !1;
      return bb.between(wb, Mb, ((bb, Hb) => {
        bb < Mb && Hb > wb && (eb = !0)
      })), eb ? bb.update({
        filterFrom: wb,
        filterTo: Mb,
        filter: (bb, eb) => bb >= Mb || eb <= wb
      }) : bb
    }

    function pw(bb, wb, Mb) {
      var eb;
      let Hb = null;
      return null === (eb = bb.field(ew, !1)) || void 0 === eb || eb.between(wb, Mb, ((bb, wb) => {
        (!Hb || Hb.from > bb) && (Hb = {
          from: bb,
          to: wb
        })
      })), Hb
    }

    function Vw(bb, wb, Mb) {
      let eb = !1;
      return bb.between(wb, wb, ((bb, Hb) => {
        bb == wb && Hb == Mb && (eb = !0)
      })), eb
    }

    function gw(bb, wb) {
      return bb.field(ew, !1) ? wb : wb.concat(pb.E.appendConfig.of(Uw()))
    }

    function lw(bb, wb) {
      let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        eb = bb.state.doc.lineAt(wb.from).number,
        Hb = bb.state.doc.lineAt(wb.to).number;
      return Vb.g.announce.of(`${bb.state.phrase(Mb?"Folded lines":"Unfolded lines")} ${eb} ${bb.state.phrase("to")} ${Hb}.`)
    }
    const Lw = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: bb => {
          for (let wb of Mw(bb)) {
            let Mb = Tb(bb.state, wb.from, wb.to);
            if (Mb) return bb.dispatch({
              effects: gw(bb.state, [bw.of(Mb), lw(bb, Mb)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: bb => {
          if (!bb.state.field(ew, !1)) return !1;
          let wb = [];
          for (let Mb of Mw(bb)) {
            let eb = pw(bb.state, Mb.from, Mb.to);
            eb && wb.push(ww.of(eb), lw(bb, eb, !1))
          }
          return wb.length && bb.dispatch({
            effects: wb
          }), wb.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: bb => {
          let {
            state: wb
          } = bb, Mb = [];
          for (let eb = 0; eb < wb.doc.length;) {
            let Hb = bb.lineBlockAt(eb),
              pb = Tb(wb, Hb.from, Hb.to);
            pb && Mb.push(bw.of(pb)), eb = (pb ? bb.lineBlockAt(pb.to) : Hb).to + 1
          }
          return Mb.length && bb.dispatch({
            effects: gw(bb.state, Mb)
          }), !!Mb.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: bb => {
          let wb = bb.state.field(ew, !1);
          if (!wb || !wb.size) return !1;
          let Mb = [];
          return wb.between(0, bb.state.doc.length, ((bb, wb) => {
            Mb.push(ww.of({
              from: bb,
              to: wb
            }))
          })), bb.dispatch({
            effects: Mb
          }), !0
        }
      }],
      Iw = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      Ow = pb.o.define({
        combine: bb => (0, pb.P)(bb, Iw)
      });

    function Uw(bb) {
      let wb = [ew, mw];
      return bb && wb.push(Ow.of(bb)), wb
    }

    function tw(bb, wb) {
      let {
        state: Mb
      } = bb, eb = Mb.facet(Ow), Hb = wb => {
        let Mb = bb.lineBlockAt(bb.posAtDOM(wb.target)),
          eb = pw(bb.state, Mb.from, Mb.to);
        eb && bb.dispatch({
          effects: ww.of(eb)
        }), wb.preventDefault()
      };
      if (eb.placeholderDOM) return eb.placeholderDOM(bb, Hb, wb);
      let pb = document.createElement("span");
      return pb.textContent = eb.placeholderText, pb.setAttribute("aria-label", Mb.phrase("folded code")), pb.title = Mb.phrase("unfold"), pb.className = "cm-foldPlaceholder", pb.onclick = Hb, pb
    }
    const Cw = Vb.d.replace({
      widget: new class extends Vb.o {
        toDOM(bb) {
          return tw(bb, null)
        }
      }
    });
    class Ew extends Vb.o {
      constructor(bb) {
        super(), this.value = bb
      }
      eq(bb) {
        return this.value == bb.value
      }
      toDOM(bb) {
        return tw(bb, this.value)
      }
    }
    const Fw = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class Bw extends Vb.k {
      constructor(bb, wb) {
        super(), this.config = bb, this.open = wb
      }
      eq(bb) {
        return this.config == bb.config && this.open == bb.open
      }
      toDOM(bb) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let wb = document.createElement("span");
        return wb.textContent = this.open ? this.config.openText : this.config.closedText, wb.title = bb.state.phrase(this.open ? "Fold line" : "Unfold line"), wb
      }
    }

    function sw() {
      let bb = {
          ...Fw,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        wb = new Bw(bb, !0),
        Mb = new Bw(bb, !1),
        eb = Vb.n.fromClass(class {
          constructor(bb) {
            this.from = bb.viewport.from, this.markers = this.buildMarkers(bb)
          }
          update(wb) {
            (wb.docChanged || wb.viewportChanged || wb.startState.facet(rb) != wb.state.facet(rb) || wb.startState.field(ew, !1) != wb.state.field(ew, !1) || Eb(wb.startState) != Eb(wb.state) || bb.foldingChanged(wb)) && (this.markers = this.buildMarkers(wb.view))
          }
          buildMarkers(bb) {
            let eb = new pb.z;
            for (let Hb of bb.viewportLineBlocks) {
              let pb = pw(bb.state, Hb.from, Hb.to) ? Mb : Tb(bb.state, Hb.from, Hb.to) ? wb : null;
              pb && eb.add(Hb.from, Hb.from, pb)
            }
            return eb.finish()
          }
        }),
        {
          domEventHandlers: Hb
        } = bb;
      return [eb, (0, Vb.G)({
        class: "cm-foldGutter",
        markers(bb) {
          var wb;
          return (null === (wb = bb.plugin(eb)) || void 0 === wb ? void 0 : wb.markers) || pb.B.empty
        },
        initialSpacer: () => new Bw(bb, !1),
        domEventHandlers: {
          ...Hb,
          click: (bb, wb, Mb) => {
            if (Hb.click && Hb.click(bb, wb, Mb)) return !0;
            let eb = pw(bb.state, wb.from, wb.to);
            if (eb) return bb.dispatch({
              effects: ww.of(eb)
            }), !0;
            let pb = Tb(bb.state, wb.from, wb.to);
            return !!pb && (bb.dispatch({
              effects: bw.of(pb)
            }), !0)
          }
        }
      }), Uw()]
    }
    const mw = Vb.g.baseTheme({
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
    class hw {
      constructor(bb, wb) {
        let Mb;

        function eb(bb) {
          let wb = lb.e.newName();
          return (Mb || (Mb = Object.create(null)))["." + wb] = bb, wb
        }
        this.specs = bb;
        const Hb = "string" == typeof wb.all ? wb.all : wb.all ? eb(wb.all) : void 0,
          pb = wb.scope;
        this.scope = pb instanceof Ub ? bb => bb.prop(Lb) == pb.data : pb ? bb => bb == pb : void 0, this.style = (0, gb.k)(bb.map((bb => ({
          tag: bb.tag,
          class: bb.class || eb(Object.assign({}, bb, {
            tag: null
          }))
        }))), {
          all: Hb
        }).style, this.module = Mb ? new lb.e(Mb) : null, this.themeType = wb.themeType
      }
      static define(bb, wb) {
        return new hw(bb, wb || {})
      }
    }
    const zw = pb.o.define(),
      Xw = pb.o.define({
        combine: bb => bb.length ? [bb[0]] : null
      });

    function xw(bb) {
      let wb = bb.facet(zw);
      return wb.length ? wb : bb.facet(Xw)
    }

    function jw(bb, wb) {
      let Mb, eb = [rw];
      return bb instanceof hw && (bb.module && eb.push(Vb.g.styleModule.of(bb.module)), Mb = bb.themeType), (null === wb || void 0 === wb ? void 0 : wb.fallback) ? eb.push(Xw.of(bb)) : Mb ? eb.push(zw.computeN([Vb.g.darkTheme], (wb => wb.facet(Vb.g.darkTheme) == ("dark" == Mb) ? [bb] : []))) : eb.push(zw.of(bb)), eb
    }
    class Kw {
      constructor(bb) {
        this.markCache = Object.create(null), this.tree = Eb(bb.state), this.ze = this.buildDeco(bb, xw(bb.state)), this.decoratedTo = bb.viewport.to
      }
      update(bb) {
        let wb = Eb(bb.state),
          Mb = xw(bb.state),
          eb = Mb != xw(bb.startState),
          {
            viewport: Hb
          } = bb.view,
          pb = bb.changes.mapPos(this.decoratedTo, 1);
        wb.length < Hb.to && !eb && wb.type == this.tree.type && pb >= Hb.to ? (this.ze = this.ze.map(bb.changes), this.decoratedTo = pb) : (wb != this.tree || bb.viewportChanged || eb) && (this.tree = wb, this.ze = this.buildDeco(bb.view, Mb), this.decoratedTo = Hb.to)
      }
      buildDeco(bb, wb) {
        if (!wb || !this.tree.length) return Vb.d.none;
        let Mb = new pb.z;
        for (let {
            from: eb,
            to: Hb
          }
          of bb.pwb)(0, gb.e)(this.tree, wb, ((bb, wb, eb) => {
          Mb.add(bb, wb, this.markCache[eb] || (this.markCache[eb] = Vb.d.mark({
            class: eb
          })))
        }), eb, Hb);
        return Mb.finish()
      }
    }
    const rw = pb.v.high(Vb.n.fromClass(Kw, {
        ze: bb => bb.ze
      })),
      Rw = hw.define([{
        tag: gb.l.meta,
        color: "#404740"
      }, {
        tag: gb.l.link,
        textDecoration: "underline"
      }, {
        tag: gb.l.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: gb.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: gb.l.strong,
        fontWeight: "bold"
      }, {
        tag: gb.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: gb.l.keyword,
        color: "#708"
      }, {
        tag: [gb.l.atom, gb.l.bool, gb.l.url, gb.l.contentSeparator, gb.l.labelName],
        color: "#219"
      }, {
        tag: [gb.l.literal, gb.l.inserted],
        color: "#164"
      }, {
        tag: [gb.l.string, gb.l.deleted],
        color: "#a11"
      }, {
        tag: [gb.l.regexp, gb.l.escape, gb.l.special(gb.l.string)],
        color: "#e40"
      }, {
        tag: gb.l.definition(gb.l.variableName),
        color: "#00f"
      }, {
        tag: gb.l.local(gb.l.variableName),
        color: "#30a"
      }, {
        tag: [gb.l.typeName, gb.l.namespace],
        color: "#085"
      }, {
        tag: gb.l.className,
        color: "#167"
      }, {
        tag: [gb.l.special(gb.l.variableName), gb.l.macroName],
        color: "#256"
      }, {
        tag: gb.l.definition(gb.l.propertyName),
        color: "#00c"
      }, {
        tag: gb.l.comment,
        color: "#940"
      }, {
        tag: gb.l.invalid,
        color: "#f00"
      }]),
      Dw = Vb.g.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Yw = 1e4,
      Zw = "()[]{}",
      fw = pb.o.define({
        combine: bb => (0, pb.P)(bb, {
          afterCursor: !0,
          brackets: Zw,
          maxScanDistance: Yw,
          renderMatch: Jw
        })
      }),
      Aw = Vb.d.mark({
        class: "cm-matchingBracket"
      }),
      Ww = Vb.d.mark({
        class: "cm-nonmatchingBracket"
      });

    function Jw(bb) {
      let wb = [],
        Mb = bb.matched ? Aw : Ww;
      return wb.push(Mb.range(bb.start.from, bb.start.to)), bb.end && wb.push(Mb.range(bb.end.from, bb.end.to)), wb
    }

    function Sw(bb) {
      let wb = [],
        Mb = bb.facet(fw);
      for (let eb of bb.selection.gF) {
        if (!eb.empty) continue;
        let Hb = aw(bb, eb.head, -1, Mb) || eb.head > 0 && aw(bb, eb.head - 1, 1, Mb) || Mb.afterCursor && (aw(bb, eb.head, 1, Mb) || eb.head < bb.doc.length && aw(bb, eb.head + 1, -1, Mb));
        Hb && (wb = wb.concat(Mb.renderMatch(Hb, bb)))
      }
      return Vb.d.set(wb, !0)
    }
    const Nw = [Vb.n.fromClass(class {
      constructor(bb) {
        this.paused = !1, this.ze = Sw(bb.state)
      }
      update(bb) {
        (bb.docChanged || bb.selectionSet || this.paused) && (bb.view.composing ? (this.ze = this.ze.map(bb.changes), this.paused = !0) : (this.ze = Sw(bb.state), this.paused = !1))
      }
    }, {
      ze: bb => bb.ze
    }), Dw];

    function vw() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [fw.of(bb), Nw]
    }
    const Qw = new Hb.d;

    function Gw(bb, wb, Mb) {
      let eb = bb.prop(wb < 0 ? Hb.d.openedBy : Hb.d.closedBy);
      if (eb) return eb;
      if (1 == bb.name.length) {
        let eb = Mb.indexOf(bb.name);
        if (eb > -1 && eb % 2 == (wb < 0 ? 1 : 0)) return [Mb[eb + wb]]
      }
      return null
    }

    function qw(bb) {
      let wb = bb.type.prop(Qw);
      return wb ? wb(bb.node) : bb
    }

    function aw(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        Hb = eb.maxScanDistance || Yw,
        pb = eb.brackets || Zw,
        Vb = Eb(bb),
        gb = Vb.resolveInner(wb, Mb);
      for (let lb = gb; lb; lb = lb.parent) {
        let eb = Gw(lb.type, Mb, pb);
        if (eb && lb.from < lb.to) {
          let Hb = qw(lb);
          if (Hb && (Mb > 0 ? wb >= Hb.from && wb < Hb.to : wb > Hb.from && wb <= Hb.to)) return iw(bb, wb, Mb, lb, Hb, eb, pb)
        }
      }
      return function(bb, wb, Mb, eb, Hb, pb, Vb) {
        if (Mb < 0 ? !wb : wb == bb.doc.length) return null;
        let gb = Mb < 0 ? bb.sliceDoc(wb - 1, wb) : bb.sliceDoc(wb, wb + 1),
          lb = Vb.indexOf(gb);
        if (lb < 0 || lb % 2 == 0 != Mb > 0) return null;
        let Lb = {
            from: Mb < 0 ? wb - 1 : wb,
            to: Mb > 0 ? wb + 1 : wb
          },
          Ib = bb.doc.iterRange(wb, Mb > 0 ? bb.doc.length : 0),
          Ob = 0;
        for (let Ub = 0; !Ib.next().done && Ub <= pb;) {
          let bb = Ib.value;
          Mb < 0 && (Ub += bb.length);
          let pb = wb + Ub * Mb;
          for (let wb = Mb > 0 ? 0 : bb.length - 1, gb = Mb > 0 ? bb.length : -1; wb != gb; wb += Mb) {
            let gb = Vb.indexOf(bb[wb]);
            if (!(gb < 0 || eb.resolveInner(pb + wb, 1).type != Hb))
              if (gb % 2 == 0 == Mb > 0) Ob++;
              else {
                if (1 == Ob) return {
                  start: Lb,
                  end: {
                    from: pb + wb,
                    to: pb + wb + 1
                  },
                  matched: gb >> 1 == lb >> 1
                };
                Ob--
              }
          }
          Mb > 0 && (Ub += bb.length)
        }
        return Ib.done ? {
          start: Lb,
          matched: !1
        } : null
      }(bb, wb, Mb, Vb, gb.type, Hb, pb)
    }

    function iw(bb, wb, Mb, eb, Hb, pb, Vb) {
      let gb = eb.parent,
        lb = {
          from: Hb.from,
          to: Hb.to
        },
        Lb = 0,
        Ib = null === gb || void 0 === gb ? void 0 : gb.cursor();
      if (Ib && (Mb < 0 ? Ib.childBefore(eb.from) : Ib.childAfter(eb.to)))
        do {
          if (Mb < 0 ? Ib.to <= eb.from : Ib.from >= eb.to) {
            if (0 == Lb && pb.indexOf(Ib.type.name) > -1 && Ib.from < Ib.to) {
              let bb = qw(Ib);
              return {
                start: lb,
                end: bb ? {
                  from: bb.from,
                  to: bb.to
                } : void 0,
                matched: !0
              }
            }
            if (Gw(Ib.type, Mb, Vb)) Lb++;
            else if (Gw(Ib.type, -Mb, Vb)) {
              if (0 == Lb) {
                let bb = qw(Ib);
                return {
                  start: lb,
                  end: bb && bb.from < bb.to ? {
                    from: bb.from,
                    to: bb.to
                  } : void 0,
                  matched: !1
                }
              }
              Lb--
            }
          }
        } while (Mb < 0 ? Ib.prevSibling() : Ib.nextSibling());
      return {
        start: lb,
        matched: !1
      }
    }
    const uw = Object.create(null),
      dw = [Hb.k.none],
      Pw = [],
      nw = Object.create(null),
      yw = Object.create(null);
    for (let [kw, bM] of [
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
      ]) yw[kw] = Tw(uw, bM);

    function ow(bb, wb) {
      Pw.indexOf(bb) > -1 || (Pw.push(bb), console.warn(wb))
    }

    function Tw(bb, wb) {
      let Mb = [];
      for (let Hb of wb.split(" ")) {
        let wb = [];
        for (let Mb of Hb.split(".")) {
          let eb = bb[Mb] || gb.l[Mb];
          eb ? "function" == typeof eb ? wb.length ? wb = wb.map(eb) : ow(Mb, `Modifier ${Mb} used at start of tag`) : wb.length ? ow(Mb, `Tag ${Mb} used as modifier`) : wb = Array.isArray(eb) ? eb : [eb] : ow(Mb, `Unknown highlighting tag ${Mb}`)
        }
        for (let bb of wb) Mb.push(bb)
      }
      if (!Mb.length) return 0;
      let eb = wb.replace(/ /g, "_"),
        pb = eb + " " + Mb.map((bb => bb.id)),
        Vb = nw[pb];
      if (Vb) return Vb.id;
      let lb = nw[pb] = Hb.k.define({
        id: dw.length,
        name: eb,
        props: [(0, gb.h)({
          [eb]: Mb
        })]
      });
      return dw.push(lb), lb.id
    }
    Vb.e.RTL, Vb.e.LTR
  },
  53564: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => mb,
      g: () => xb
    });
    var eb = Mb(53510),
      Hb = Mb(53501),
      pb = Mb(53522);
    class Vb {
      constructor(bb, wb, Mb) {
        this.from = bb, this.to = wb, this.diagnostic = Mb
      }
    }
    class gb {
      constructor(bb, wb, Mb) {
        this.diagnostics = bb, this.panel = wb, this.selected = Mb
      }
      static init(bb, wb, Mb) {
        let pb = Mb.facet(zb).markerFilter;
        pb && (bb = pb(bb, Mb));
        let Vb = bb.slice().sort(((bb, wb) => bb.from - wb.from || bb.to - wb.to)),
          Lb = new Hb.z,
          Ib = [],
          Ob = 0,
          Ub = Mb.doc.iter(),
          tb = 0,
          Cb = Mb.doc.length;
        for (let Hb = 0;;) {
          let bb, wb, Mb = Hb == Vb.length ? null : Vb[Hb];
          if (!Mb && !Ib.length) break;
          if (Ib.length) bb = Ob, wb = Ib.reduce(((bb, wb) => Math.min(bb, wb.to)), Mb && Mb.from > bb ? Mb.from : 1e8);
          else {
            if (bb = Mb.from, bb > Cb) break;
            wb = Mb.to, Ib.push(Mb), Hb++
          }
          for (; Hb < Vb.length;) {
            let Mb = Vb[Hb];
            if (Mb.from != bb || !(Mb.to > Mb.from || Mb.to == bb)) {
              wb = Math.min(Mb.from, wb);
              break
            }
            Ib.push(Mb), Hb++, wb = Math.min(Mb.to, wb)
          }
          wb = Math.min(wb, Cb);
          let pb = !1;
          if (Ib.some((Mb => Mb.from == bb && (Mb.to == wb || wb == Cb))) && (pb = bb == wb, !pb && wb - bb < 10)) {
            let Mb = bb - (tb + Ub.value.length);
            Mb > 0 && (Ub.next(Mb), tb = bb);
            for (let eb = bb;;) {
              if (eb >= wb) {
                pb = !0;
                break
              }
              if (!Ub.lineBreak && tb + Ub.value.length > eb) break;
              eb = tb + Ub.value.length, tb += Ub.value.length, Ub.next()
            }
          }
          let gb = Ab(Ib);
          if (pb) Lb.add(bb, bb, eb.d.widget({
            widget: new rb(gb),
            diagnostics: Ib.slice()
          }));
          else {
            let Mb = Ib.reduce(((bb, wb) => wb.markClass ? bb + " " + wb.markClass : bb), "");
            Lb.add(bb, wb, eb.d.mark({
              class: "cm-lintRange cm-lintRange-" + gb + Mb,
              diagnostics: Ib.slice(),
              inclusiveEnd: Ib.some((bb => bb.to > wb))
            }))
          }
          if (Ob = wb, Ob == Cb) break;
          for (let eb = 0; eb < Ib.length; eb++) Ib[eb].to <= Ob && Ib.splice(eb--, 1)
        }
        let Eb = Lb.finish();
        return new gb(Eb, wb, lb(Eb))
      }
    }

    function lb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        eb = null;
      return bb.between(Mb, 1e9, ((bb, Mb, Hb) => {
        let {
          spec: pb
        } = Hb;
        if (!(wb && pb.diagnostics.indexOf(wb) < 0))
          if (eb) {
            if (pb.diagnostics.indexOf(eb.diagnostic) < 0) return !1;
            eb = new Vb(eb.from, Mb, eb.diagnostic)
          } else eb = new Vb(bb, Mb, wb || pb.diagnostics[0])
      })), eb
    }

    function Lb(bb, wb) {
      let Mb = wb.pos,
        eb = wb.end || Mb,
        Hb = bb.state.facet(zb).hideOn(bb, Mb, eb);
      if (null != Hb) return Hb;
      let pb = bb.startState.doc.lineAt(wb.pos);
      return !(!bb.effects.some((bb => bb.is(Ob))) && !bb.changes.touchesRange(pb.from, Math.max(pb.to, eb)))
    }

    function Ib(bb, wb) {
      return bb.field(Cb, !1) ? wb : wb.concat(Hb.E.appendConfig.of(Wb))
    }
    const Ob = Hb.E.define(),
      Ub = Hb.E.define(),
      tb = Hb.E.define(),
      Cb = Hb.G.define({
        create: () => new gb(eb.d.none, null, null),
        update(bb, wb) {
          if (wb.docChanged && bb.diagnostics.size) {
            let Mb = bb.diagnostics.map(wb.changes),
              eb = null,
              Hb = bb.panel;
            if (bb.selected) {
              let Hb = wb.changes.mapPos(bb.selected.from, 1);
              eb = lb(Mb, bb.selected.diagnostic, Hb) || lb(Mb, null, Hb)
            }!Mb.size && Hb && wb.state.facet(zb).autoPanel && (Hb = null), bb = new gb(Mb, Hb, eb)
          }
          for (let Mb of wb.effects)
            if (Mb.is(Ob)) {
              let eb = wb.state.facet(zb).autoPanel ? Mb.value.length ? Db.open : null : bb.panel;
              bb = gb.init(Mb.value, eb, wb.state)
            } else Mb.is(Ub) ? bb = new gb(bb.diagnostics, Mb.value ? Db.open : null, bb.selected) : Mb.is(tb) && (bb = new gb(bb.diagnostics, bb.panel, Mb.value));
          return bb
        },
        provide: bb => [eb.lb.from(bb, (bb => bb.panel)), eb.g.ze.from(bb, (bb => bb.diagnostics))]
      });
    const Eb = eb.d.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function Fb(bb, wb, Mb) {
      let eb, {
          diagnostics: Hb
        } = bb.state.field(Cb),
        pb = -1,
        Vb = -1;
      Hb.between(wb - (Mb < 0 ? 1 : 0), wb + (Mb > 0 ? 1 : 0), ((bb, Hb, gb) => {
        let {
          spec: lb
        } = gb;
        if (wb >= bb && wb <= Hb && (bb == Hb || (wb > bb || Mb > 0) && (wb < Hb || Mb < 0))) return eb = lb.diagnostics, pb = bb, Vb = Hb, !1
      }));
      let gb = bb.state.facet(zb).tooltipFilter;
      return eb && gb && (eb = gb(eb, bb.state)), eb ? {
        pos: pb,
        end: Vb,
        above: bb.state.doc.lineAt(pb).to < Vb,
        create: () => ({
          dom: Bb(bb, eb)
        })
      } : null
    }

    function Bb(bb, wb) {
      return (0, pb.c)("ul", {
        class: "cm-tooltip-lint"
      }, wb.map((wb => Kb(bb, wb, !1))))
    }
    const sb = bb => {
        let wb = bb.state.field(Cb, !1);
        return !(!wb || !wb.panel) && (bb.dispatch({
          effects: Ub.of(!1)
        }), !0)
      },
      mb = [{
        key: "Mod-Shift-m",
        run: bb => {
          let wb = bb.state.field(Cb, !1);
          wb && wb.panel || bb.dispatch({
            effects: Ib(bb.state, [Ub.of(!0)])
          });
          let Mb = (0, eb.y)(bb, Db.open);
          return Mb && Mb.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: bb => {
          let wb = bb.state.field(Cb, !1);
          if (!wb) return !1;
          let Mb = bb.state.selection.main,
            eb = lb(wb.diagnostics, null, Mb.to + 1);
          return !(!eb && (eb = lb(wb.diagnostics, null, 0), !eb || eb.from == Mb.from && eb.to == Mb.to)) && (bb.dispatch({
            selection: {
              anchor: eb.from,
              head: eb.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      hb = eb.n.fromClass(class {
        constructor(bb) {
          this.view = bb, this.timeout = -1, this.set = !0;
          let {
            delay: wb
          } = bb.state.facet(zb);
          this.lintTime = Date.now() + wb, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, wb)
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
              sources: wb
            } = bb.facet(zb);
            wb.length && function(bb, wb, Mb) {
              let eb = [],
                Hb = -1;
              for (let pb of bb) pb.then((Mb => {
                eb.push(Mb), clearTimeout(Hb), eb.length == bb.length ? wb(eb) : Hb = setTimeout((() => wb(eb)), 200)
              }), Mb)
            }(wb.map((bb => Promise.resolve(bb(this.view)))), (wb => {
              this.view.state.doc == bb.doc && this.view.dispatch(function(bb, wb) {
                return {
                  effects: Ib(bb, [Ob.of(wb)])
                }
              }(this.view.state, wb.reduce(((bb, wb) => bb.concat(wb)))))
            }), (bb => {
              (0, eb.ab)(this.view.state, bb)
            }))
          }
        }
        update(bb) {
          let wb = bb.state.facet(zb);
          (bb.docChanged || wb != bb.startState.facet(zb) || wb.needsRefresh && wb.needsRefresh(bb)) && (this.lintTime = Date.now() + wb.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, wb.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const zb = Hb.o.define({
      combine: bb => ({
        sources: bb.map((bb => bb.source)).filter((bb => null != bb)),
        ...(0, Hb.P)(bb.map((bb => bb.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: Xb,
          tooltipFilter: Xb,
          needsRefresh: (bb, wb) => bb ? wb ? Mb => bb(Mb) || wb(Mb) : bb : wb,
          hideOn: (bb, wb) => bb ? wb ? (Mb, eb, Hb) => bb(Mb, eb, Hb) || wb(Mb, eb, Hb) : bb : wb,
          autoPanel: (bb, wb) => bb || wb
        })
      })
    });

    function Xb(bb, wb) {
      return bb ? wb ? (Mb, eb) => wb(bb(Mb, eb), eb) : bb : wb
    }

    function xb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [zb.of({
        source: bb,
        config: wb
      }), hb, Wb]
    }

    function jb(bb) {
      let wb = [];
      if (bb) bb: for (let {
          name: Mb
        }
        of bb) {
        for (let bb = 0; bb < Mb.length; bb++) {
          let eb = Mb[bb];
          if (/[a-zA-Z]/.test(eb) && !wb.some((bb => bb.toLowerCase() == eb.toLowerCase()))) {
            wb.push(eb);
            continue bb
          }
        }
        wb.push("")
      }
      return wb
    }

    function Kb(bb, wb, Mb) {
      var eb;
      let Hb = Mb ? jb(wb.actions) : [];
      return (0, pb.c)("li", {
        class: "cm-diagnostic cm-diagnostic-" + wb.severity
      }, (0, pb.c)("span", {
        class: "cm-diagnosticText"
      }, wb.renderMessage ? wb.renderMessage(bb) : wb.message), null === (eb = wb.actions) || void 0 === eb ? void 0 : eb.map(((Mb, eb) => {
        let Vb = !1,
          gb = eb => {
            if (eb.preventDefault(), Vb) return;
            Vb = !0;
            let Hb = lb(bb.state.field(Cb).diagnostics, wb);
            Hb && Mb.apply(bb, Hb.from, Hb.to)
          },
          {
            name: Lb
          } = Mb,
          Ib = Hb[eb] ? Lb.indexOf(Hb[eb]) : -1,
          Ob = Ib < 0 ? Lb : [Lb.slice(0, Ib), (0, pb.c)("u", Lb.slice(Ib, Ib + 1)), Lb.slice(Ib + 1)],
          Ub = Mb.markClass ? " " + Mb.markClass : "";
        return (0, pb.c)("button", {
          type: "button",
          class: "cm-diagnosticAction" + Ub,
          onclick: gb,
          onmousedown: gb,
          "aria-label": ` Action: ${Lb}${Ib<0?"":` (access key "${Hb[eb]})"`}.`
        }, Ob)
      })), wb.source && (0, pb.c)("div", {
        class: "cm-diagnosticSource"
      }, wb.source))
    }
    class rb extends eb.o {
      constructor(bb) {
        super(), this.sev = bb
      }
      eq(bb) {
        return bb.sev == this.sev
      }
      toDOM() {
        return (0, pb.c)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Rb {
      constructor(bb, wb) {
        this.diagnostic = wb, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = Kb(bb, wb, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class Db {
      constructor(bb) {
        this.view = bb, this.items = [];
        this.list = (0, pb.c)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: wb => {
            if (!(wb.ctrlKey || wb.altKey || wb.metaKey)) {
              if (27 == wb.keyCode) sb(this.view), this.view.focus();
              else if (38 == wb.keyCode || 33 == wb.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == wb.keyCode || 34 == wb.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == wb.keyCode) this.moveSelection(0);
              else if (35 == wb.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == wb.keyCode) this.view.focus();
              else {
                if (!(wb.keyCode >= 65 && wb.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: Mb
                  } = this.items[this.selectedIndex], eb = jb(Mb.actions);
                  for (let Hb = 0; Hb < eb.length; Hb++)
                    if (eb[Hb].toUpperCase().charCodeAt(0) == wb.keyCode) {
                      let wb = lb(this.view.state.field(Cb).diagnostics, Mb);
                      wb && Mb.actions[Hb].apply(bb, wb.from, wb.to)
                    }
                }
              }
              wb.preventDefault()
            }
          },
          onclick: bb => {
            for (let wb = 0; wb < this.items.length; wb++) this.items[wb].dom.contains(bb.target) && this.moveSelection(wb)
          }
        }), this.dom = (0, pb.c)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, pb.c)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => sb(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let bb = this.view.state.field(Cb).selected;
        if (!bb) return -1;
        for (let wb = 0; wb < this.items.length; wb++)
          if (this.items[wb].diagnostic == bb.diagnostic) return wb;
        return -1
      }
      update() {
        let {
          diagnostics: bb,
          selected: wb
        } = this.view.state.field(Cb), Mb = 0, eb = !1, Hb = null, pb = new Set;
        for (bb.between(0, this.view.state.doc.length, ((bb, Vb, gb) => {
            let {
              spec: lb
            } = gb;
            for (let Lb of lb.diagnostics) {
              if (pb.has(Lb)) continue;
              pb.add(Lb);
              let bb, Vb = -1;
              for (let wb = Mb; wb < this.items.length; wb++)
                if (this.items[wb].diagnostic == Lb) {
                  Vb = wb;
                  break
                } Vb < 0 ? (bb = new Rb(this.view, Lb), this.items.splice(Mb, 0, bb), eb = !0) : (bb = this.items[Vb], Vb > Mb && (this.items.splice(Mb, Vb - Mb), eb = !0)), wb && bb.diagnostic == wb.diagnostic ? bb.dom.hasAttribute("aria-selected") || (bb.dom.setAttribute("aria-selected", "true"), Hb = bb) : bb.dom.hasAttribute("aria-selected") && bb.dom.removeAttribute("aria-selected"), Mb++
            }
          })); Mb < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) eb = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Rb(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), eb = !0), Hb ? (this.list.setAttribute("aria-activedescendant", Hb.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: Hb.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: bb => {
            let {
              sel: wb,
              panel: Mb
            } = bb, eb = Mb.height / this.list.offsetHeight;
            wb.top < Mb.top ? this.list.scrollTop -= (Mb.top - wb.top) / eb : wb.bottom > Mb.bottom && (this.list.scrollTop += (wb.bottom - Mb.bottom) / eb)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), eb && this.sync()
      }
      sync() {
        let bb = this.list.firstChild;

        function wb() {
          let wb = bb;
          bb = wb.nextSibling, wb.remove()
        }
        for (let Mb of this.items)
          if (Mb.dom.parentNode == this.list) {
            for (; bb != Mb.dom;) wb();
            bb = Mb.dom.nextSibling
          } else this.list.insertBefore(Mb.dom, bb);
        for (; bb;) wb()
      }
      moveSelection(bb) {
        if (this.selectedIndex < 0) return;
        let wb = lb(this.view.state.field(Cb).diagnostics, this.items[bb].diagnostic);
        wb && this.view.dispatch({
          selection: {
            anchor: wb.from,
            head: wb.to
          },
          scrollIntoView: !0,
          effects: tb.of(wb)
        })
      }
      static open(bb) {
        return new Db(bb)
      }
    }

    function cb(bb) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(bb)}</svg>')`
    }

    function Yb(bb) {
      return cb(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${bb}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Zb = eb.g.baseTheme({
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
        backgroundImage: Yb("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: Yb("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: Yb("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: Yb("#66d")
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

    function fb(bb) {
      return "error" == bb ? 4 : "warning" == bb ? 3 : "info" == bb ? 2 : 1
    }

    function Ab(bb) {
      let wb = "hint",
        Mb = 1;
      for (let eb of bb) {
        let bb = fb(eb.severity);
        bb > Mb && (Mb = bb, wb = eb.severity)
      }
      return wb
    }
    eb.k;
    const Wb = [Cb, eb.g.ze.compute([Cb], (bb => {
      let {
        selected: wb,
        panel: Mb
      } = bb.field(Cb);
      return wb && Mb && wb.from != wb.to ? eb.d.set([Eb.range(wb.from, wb.to)]) : eb.d.none
    })), (0, eb.T)(Fb, {
      hideOn: Lb
    }), Zb]
  },
  53555: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Tb,
      h: () => Bb,
      j: () => kb
    });
    var eb = Mb(53510),
      Hb = Mb(53501),
      pb = Mb(53522);
    const Vb = "function" == typeof String.prototype.normalize ? bb => bb.normalize("NFKD") : bb => bb;
    class gb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length,
          Hb = arguments.length > 4 ? arguments[4] : void 0,
          pb = arguments.length > 5 ? arguments[5] : void 0;
        this.test = pb, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = bb.iterRange(Mb, eb), this.bufferStart = Mb, this.normalize = Hb ? bb => Hb(Vb(bb)) : Vb, this.query = this.normalize(wb)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, Hb.L)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let bb = this.peek();
          if (bb < 0) return this.done = !0, this;
          let wb = (0, Hb.Z)(bb),
            Mb = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, Hb.M)(bb);
          let eb = this.normalize(wb);
          if (eb.length)
            for (let Hb = 0, pb = Mb;; Hb++) {
              let bb = eb.charCodeAt(Hb),
                Vb = this.match(bb, pb, this.bufferPos + this.bufferStart);
              if (Hb == eb.length - 1) {
                if (Vb) return this.value = Vb, this;
                break
              }
              pb == Mb && Hb < wb.length && wb.charCodeAt(Hb) == bb && pb++
            }
        }
      }
      match(bb, wb, Mb) {
        let eb = null;
        for (let Hb = 0; Hb < this.matches.length; Hb += 2) {
          let wb = this.matches[Hb],
            pb = !1;
          this.query.charCodeAt(wb) == bb && (wb == this.query.length - 1 ? eb = {
            from: this.matches[Hb + 1],
            to: Mb
          } : (this.matches[Hb]++, pb = !0)), pb || (this.matches.splice(Hb, 2), Hb -= 2)
        }
        return this.query.charCodeAt(0) == bb && (1 == this.query.length ? eb = {
          from: wb,
          to: Mb
        } : this.matches.push(1, wb)), eb && this.test && !this.test(eb.from, eb.to, this.buffer, this.bufferStart) && (eb = null), eb
      }
    }
    "undefined" != typeof Symbol && (gb.prototype[Symbol.iterator] = function() {
      return this
    });
    const lb = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      Lb = "gm" + (null == /x/.unicode ? "" : "u");
    class Ib {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.length;
        if (this.text = bb, this.to = Hb, this.curLine = "", this.done = !1, this.value = lb, /\\[sWDnr]|\n|\r|\[\^/.test(wb)) return new tb(bb, wb, Mb, eb, Hb);
        this.re = new RegExp(wb, Lb + ((null === Mb || void 0 === Mb ? void 0 : Mb.ignoreCase) ? "i" : "")), this.test = null === Mb || void 0 === Mb ? void 0 : Mb.test, this.iter = bb.iter();
        let pb = bb.lineAt(eb);
        this.curLineStart = pb.from, this.matchPos = Cb(bb, eb), this.getLine(this.curLineStart)
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
          let wb = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (wb) {
            let Mb = this.curLineStart + wb.index,
              eb = Mb + wb[0].length;
            if (this.matchPos = Cb(this.text, eb + (Mb == eb ? 1 : 0)), Mb == this.curLineStart + this.curLine.length && this.nextLine(), (Mb < eb || Mb > this.value.to) && (!this.test || this.test(Mb, eb, wb))) return this.value = {
              from: Mb,
              to: eb,
              match: wb
            }, this;
            bb = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), bb = 0
          }
        }
      }
    }
    const Ob = new WeakMap;
    class Ub {
      constructor(bb, wb) {
        this.from = bb, this.text = wb
      }
      get to() {
        return this.from + this.text.length
      }
      static get(bb, wb, Mb) {
        let eb = Ob.get(bb);
        if (!eb || eb.from >= Mb || eb.to <= wb) {
          let eb = new Ub(wb, bb.sliceString(wb, Mb));
          return Ob.set(bb, eb), eb
        }
        if (eb.from == wb && eb.to == Mb) return eb;
        let {
          text: Hb,
          from: pb
        } = eb;
        return pb > wb && (Hb = bb.sliceString(wb, pb) + Hb, pb = wb), eb.to < Mb && (Hb += bb.sliceString(eb.to, Mb)), Ob.set(bb, new Ub(pb, Hb)), new Ub(wb, Hb.slice(wb - pb, Mb - pb))
      }
    }
    class tb {
      constructor(bb, wb, Mb, eb, Hb) {
        this.text = bb, this.to = Hb, this.done = !1, this.value = lb, this.matchPos = Cb(bb, eb), this.re = new RegExp(wb, Lb + ((null === Mb || void 0 === Mb ? void 0 : Mb.ignoreCase) ? "i" : "")), this.test = null === Mb || void 0 === Mb ? void 0 : Mb.test, this.flat = Ub.get(bb, eb, this.chunkEnd(eb + 5e3))
      }
      chunkEnd(bb) {
        return bb >= this.to ? this.to : this.text.lineAt(bb).to
      }
      next() {
        for (;;) {
          let bb = this.re.lastIndex = this.matchPos - this.flat.from,
            wb = this.re.exec(this.flat.text);
          if (wb && !wb[0] && wb.index == bb && (this.re.lastIndex = bb + 1, wb = this.re.exec(this.flat.text)), wb) {
            let bb = this.flat.from + wb.index,
              Mb = bb + wb[0].length;
            if ((this.flat.to >= this.to || wb.index + wb[0].length <= this.flat.text.length - 10) && (!this.test || this.test(bb, Mb, wb))) return this.value = {
              from: bb,
              to: Mb,
              match: wb
            }, this.matchPos = Cb(this.text, Mb + (bb == Mb ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = Ub.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function Cb(bb, wb) {
      if (wb >= bb.length) return wb;
      let Mb, eb = bb.lineAt(wb);
      for (; wb < eb.to && (Mb = eb.text.charCodeAt(wb - eb.from)) >= 56320 && Mb < 57344;) wb++;
      return wb
    }
    "undefined" != typeof Symbol && (Ib.prototype[Symbol.iterator] = tb.prototype[Symbol.iterator] = function() {
      return this
    });
    const Eb = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      Fb = Hb.o.define({
        combine: bb => (0, Hb.P)(bb, Eb, {
          highlightWordAroundCursor: (bb, wb) => bb || wb,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function Bb(bb) {
      let wb = [Xb, zb];
      return bb && wb.push(Fb.of(bb)), wb
    }
    const sb = eb.d.mark({
        class: "cm-selectionMatch"
      }),
      mb = eb.d.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function hb(bb, wb, Mb, eb) {
      return (0 == Mb || bb(wb.sliceDoc(Mb - 1, Mb)) != Hb.h.Word) && (eb == wb.doc.length || bb(wb.sliceDoc(eb, eb + 1)) != Hb.h.Word)
    }
    const zb = eb.n.fromClass(class {
        constructor(bb) {
          this.ze = this.getDeco(bb)
        }
        update(bb) {
          (bb.selectionSet || bb.docChanged || bb.viewportChanged) && (this.ze = this.getDeco(bb.view))
        }
        getDeco(bb) {
          let wb = bb.state.facet(Fb),
            {
              state: Mb
            } = bb,
            pb = Mb.selection;
          if (pb.gF.length > 1) return eb.d.none;
          let Vb, lb = pb.main,
            Lb = null;
          if (lb.empty) {
            if (!wb.highlightWordAroundCursor) return eb.d.none;
            let bb = Mb.wordAt(lb.head);
            if (!bb) return eb.d.none;
            Lb = Mb.charCategorizer(lb.head), Vb = Mb.sliceDoc(bb.from, bb.to)
          } else {
            let bb = lb.to - lb.from;
            if (bb < wb.minSelectionLength || bb > 200) return eb.d.none;
            if (wb.wholeWords) {
              if (Vb = Mb.sliceDoc(lb.from, lb.to), Lb = Mb.charCategorizer(lb.head), !hb(Lb, Mb, lb.from, lb.to) || ! function(bb, wb, Mb, eb) {
                  return bb(wb.sliceDoc(Mb, Mb + 1)) == Hb.h.Word && bb(wb.sliceDoc(eb - 1, eb)) == Hb.h.Word
                }(Lb, Mb, lb.from, lb.to)) return eb.d.none
            } else if (Vb = Mb.sliceDoc(lb.from, lb.to), !Vb) return eb.d.none
          }
          let Ib = [];
          for (let Hb of bb.pwb) {
            let bb = new gb(Mb.doc, Vb, Hb.from, Hb.to);
            for (; !bb.next().done;) {
              let {
                from: Hb,
                to: pb
              } = bb.value;
              if ((!Lb || hb(Lb, Mb, Hb, pb)) && (lb.empty && Hb <= lb.from && pb >= lb.to ? Ib.push(mb.range(Hb, pb)) : (Hb >= lb.to || pb <= lb.from) && Ib.push(sb.range(Hb, pb)), Ib.length > wb.maxMatches)) return eb.d.none
            }
          }
          return eb.d.set(Ib)
        }
      }, {
        ze: bb => bb.ze
      }),
      Xb = eb.g.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const xb = Hb.o.define({
      combine: bb => (0, Hb.P)(bb, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: bb => new bw(bb),
        scrollToMatch: bb => eb.g.scrollIntoView(bb)
      })
    });
    class jb {
      constructor(bb) {
        this.search = bb.search, this.caseSensitive = !!bb.caseSensitive, this.literal = !!bb.literal, this.regexp = !!bb.regexp, this.replace = bb.replace || "", this.valid = !!this.search && (!this.regexp || function(bb) {
          try {
            return new RegExp(bb, Lb), !0
          } catch (wb) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!bb.wholeWord, this.test = bb.test
      }
      unquote(bb) {
        return this.literal ? bb : bb.replace(/\\([nrt\\])/g, ((bb, wb) => "n" == wb ? "\n" : "r" == wb ? "\r" : "t" == wb ? "\t" : "\\"))
      }
      eq(bb) {
        return this.search == bb.search && this.replace == bb.replace && this.caseSensitive == bb.caseSensitive && this.regexp == bb.regexp && this.wholeWord == bb.wholeWord && this.test == bb.test
      }
      create() {
        return this.regexp ? new Zb(this) : new Rb(this)
      }
      getCursor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = bb.doc ? bb : Hb.n.create({
            doc: bb
          });
        return null == Mb && (Mb = eb.doc.length), this.regexp ? Db(this, eb, wb, Mb) : rb(this, eb, wb, Mb)
      }
    }
    class Kb {
      constructor(bb) {
        this.spec = bb
      }
    }

    function rb(bb, wb, Mb, eb) {
      let pb;
      var Vb, lb;
      return bb.wholeWord && (Vb = wb.doc, lb = wb.charCategorizer(wb.selection.main.head), pb = (bb, wb, Mb, eb) => ((eb > bb || eb + Mb.length < wb) && (eb = Math.max(0, bb - 2), Mb = Vb.sliceString(eb, Math.min(Vb.length, wb + 2))), (lb(cb(Mb, bb - eb)) != Hb.h.Word || lb(Yb(Mb, bb - eb)) != Hb.h.Word) && (lb(Yb(Mb, wb - eb)) != Hb.h.Word || lb(cb(Mb, wb - eb)) != Hb.h.Word))), bb.test && (pb = function(bb, wb, Mb) {
        return (eb, Hb, pb, Vb) => {
          if (Mb && !Mb(eb, Hb, pb, Vb)) return !1;
          let gb = eb >= Vb && Hb <= Vb + pb.length ? pb.slice(eb - Vb, Hb - Vb) : wb.doc.sliceString(eb, Hb);
          return bb(gb, wb, eb, Hb)
        }
      }(bb.test, wb, pb)), new gb(wb.doc, bb.unquoted, Mb, eb, bb.caseSensitive ? void 0 : bb => bb.toLowerCase(), pb)
    }
    class Rb extends Kb {
      constructor(bb) {
        super(bb)
      }
      nextMatch(bb, wb, Mb) {
        let eb = rb(this.spec, bb, Mb, bb.doc.length).nextOverlapping();
        if (eb.done) {
          let Mb = Math.min(bb.doc.length, wb + this.spec.unquoted.length);
          eb = rb(this.spec, bb, 0, Mb).nextOverlapping()
        }
        return eb.done || eb.value.from == wb && eb.value.to == Mb ? null : eb.value
      }
      prevMatchInRange(bb, wb, Mb) {
        for (let eb = Mb;;) {
          let Mb = Math.max(wb, eb - 1e4 - this.spec.unquoted.length),
            Hb = rb(this.spec, bb, Mb, eb),
            pb = null;
          for (; !Hb.nextOverlapping().done;) pb = Hb.value;
          if (pb) return pb;
          if (Mb == wb) return null;
          eb -= 1e4
        }
      }
      prevMatch(bb, wb, Mb) {
        let eb = this.prevMatchInRange(bb, 0, wb);
        return eb || (eb = this.prevMatchInRange(bb, Math.max(0, Mb - this.spec.unquoted.length), bb.doc.length)), !eb || eb.from == wb && eb.to == Mb ? null : eb
      }
      getReplacement(bb) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(bb, wb) {
        let Mb = rb(this.spec, bb, 0, bb.doc.length),
          eb = [];
        for (; !Mb.next().done;) {
          if (eb.length >= wb) return null;
          eb.push(Mb.value)
        }
        return eb
      }
      highlight(bb, wb, Mb, eb) {
        let Hb = rb(this.spec, bb, Math.max(0, wb - this.spec.unquoted.length), Math.min(Mb + this.spec.unquoted.length, bb.doc.length));
        for (; !Hb.next().done;) eb(Hb.value.from, Hb.value.to)
      }
    }

    function Db(bb, wb, Mb, eb) {
      let pb;
      var Vb;
      return bb.wholeWord && (Vb = wb.charCategorizer(wb.selection.main.head), pb = (bb, wb, Mb) => !Mb[0].length || (Vb(cb(Mb.input, Mb.index)) != Hb.h.Word || Vb(Yb(Mb.input, Mb.index)) != Hb.h.Word) && (Vb(Yb(Mb.input, Mb.index + Mb[0].length)) != Hb.h.Word || Vb(cb(Mb.input, Mb.index + Mb[0].length)) != Hb.h.Word)), bb.test && (pb = function(bb, wb, Mb) {
        return (eb, Hb, pb) => (!Mb || Mb(eb, Hb, pb)) && bb(pb[0], wb, eb, Hb)
      }(bb.test, wb, pb)), new Ib(wb.doc, bb.search, {
        ignoreCase: !bb.caseSensitive,
        test: pb
      }, Mb, eb)
    }

    function cb(bb, wb) {
      return bb.slice((0, Hb.U)(bb, wb, !1), wb)
    }

    function Yb(bb, wb) {
      return bb.slice(wb, (0, Hb.U)(bb, wb))
    }
    class Zb extends Kb {
      nextMatch(bb, wb, Mb) {
        let eb = Db(this.spec, bb, Mb, bb.doc.length).next();
        return eb.done && (eb = Db(this.spec, bb, 0, wb).next()), eb.done ? null : eb.value
      }
      prevMatchInRange(bb, wb, Mb) {
        for (let eb = 1;; eb++) {
          let Hb = Math.max(wb, Mb - 1e4 * eb),
            pb = Db(this.spec, bb, Hb, Mb),
            Vb = null;
          for (; !pb.next().done;) Vb = pb.value;
          if (Vb && (Hb == wb || Vb.from > Hb + 10)) return Vb;
          if (Hb == wb) return null
        }
      }
      prevMatch(bb, wb, Mb) {
        return this.prevMatchInRange(bb, 0, wb) || this.prevMatchInRange(bb, Mb, bb.doc.length)
      }
      getReplacement(bb) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((wb, Mb) => {
          if ("&" == Mb) return bb.match[0];
          if ("$" == Mb) return "$";
          for (let eb = Mb.length; eb > 0; eb--) {
            let wb = +Mb.slice(0, eb);
            if (wb > 0 && wb < bb.match.length) return bb.match[wb] + Mb.slice(eb)
          }
          return wb
        }))
      }
      matchAll(bb, wb) {
        let Mb = Db(this.spec, bb, 0, bb.doc.length),
          eb = [];
        for (; !Mb.next().done;) {
          if (eb.length >= wb) return null;
          eb.push(Mb.value)
        }
        return eb
      }
      highlight(bb, wb, Mb, eb) {
        let Hb = Db(this.spec, bb, Math.max(0, wb - 250), Math.min(Mb + 250, bb.doc.length));
        for (; !Hb.next().done;) eb(Hb.value.from, Hb.value.to)
      }
    }
    const fb = Hb.E.define(),
      Ab = Hb.E.define(),
      Wb = Hb.G.define({
        create: bb => new Jb(Pb(bb).create(), null),
        update(bb, wb) {
          for (let Mb of wb.effects) Mb.is(fb) ? bb = new Jb(Mb.value.create(), bb.panel) : Mb.is(Ab) && (bb = new Jb(bb.query, Mb.value ? db : null));
          return bb
        },
        provide: bb => eb.lb.from(bb, (bb => bb.panel))
      });
    class Jb {
      constructor(bb, wb) {
        this.query = bb, this.panel = wb
      }
    }
    const Sb = eb.d.mark({
        class: "cm-searchMatch"
      }),
      Nb = eb.d.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      vb = eb.n.fromClass(class {
        constructor(bb) {
          this.view = bb, this.ze = this.highlight(bb.state.field(Wb))
        }
        update(bb) {
          let wb = bb.state.field(Wb);
          (wb != bb.startState.field(Wb) || bb.docChanged || bb.selectionSet || bb.viewportChanged) && (this.ze = this.highlight(wb))
        }
        highlight(bb) {
          let {
            query: wb,
            panel: Mb
          } = bb;
          if (!Mb || !wb.spec.valid) return eb.d.none;
          let {
            view: pb
          } = this, Vb = new Hb.z;
          for (let eb = 0, Hb = pb.pwb, gb = Hb.length; eb < gb; eb++) {
            let {
              from: bb,
              to: Mb
            } = Hb[eb];
            for (; eb < gb - 1 && Mb > Hb[eb + 1].from - 500;) Mb = Hb[++eb].to;
            wb.highlight(pb.state, bb, Mb, ((bb, wb) => {
              let Mb = pb.state.selection.gF.some((Mb => Mb.from == bb && Mb.to == wb));
              Vb.add(bb, wb, Mb ? Nb : Sb)
            }))
          }
          return Vb.finish()
        }
      }, {
        ze: bb => bb.ze
      });

    function Qb(bb) {
      return wb => {
        let Mb = wb.state.field(Wb, !1);
        return Mb && Mb.query.spec.valid ? bb(wb, Mb) : ob(wb)
      }
    }
    const Gb = Qb(((bb, wb) => {
        let {
          query: Mb
        } = wb, {
          to: eb
        } = bb.state.selection.main, pb = Mb.nextMatch(bb.state, eb, eb);
        if (!pb) return !1;
        let Vb = Hb.j.single(pb.from, pb.to),
          gb = bb.state.facet(xb);
        return bb.dispatch({
          selection: Vb,
          effects: [Hw(bb, pb), gb.scrollToMatch(Vb.main, bb)],
          userEvent: "select.search"
        }), yb(bb), !0
      })),
      qb = Qb(((bb, wb) => {
        let {
          query: Mb
        } = wb, {
          state: eb
        } = bb, {
          from: pb
        } = eb.selection.main, Vb = Mb.prevMatch(eb, pb, pb);
        if (!Vb) return !1;
        let gb = Hb.j.single(Vb.from, Vb.to),
          lb = bb.state.facet(xb);
        return bb.dispatch({
          selection: gb,
          effects: [Hw(bb, Vb), lb.scrollToMatch(gb.main, bb)],
          userEvent: "select.search"
        }), yb(bb), !0
      })),
      ab = Qb(((bb, wb) => {
        let {
          query: Mb
        } = wb, eb = Mb.matchAll(bb.state, 1e3);
        return !(!eb || !eb.length) && (bb.dispatch({
          selection: Hb.j.create(eb.map((bb => Hb.j.range(bb.from, bb.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      ib = Qb(((bb, wb) => {
        let {
          query: Mb
        } = wb, {
          state: pb
        } = bb, {
          from: Vb,
          to: gb
        } = pb.selection.main;
        if (pb.readOnly) return !1;
        let lb = Mb.nextMatch(pb, Vb, Vb);
        if (!lb) return !1;
        let Lb, Ib, Ob = lb,
          Ub = [],
          tb = [];
        Ob.from == Vb && Ob.to == gb && (Ib = pb.toText(Mb.getReplacement(Ob)), Ub.push({
          from: Ob.from,
          to: Ob.to,
          insert: Ib
        }), Ob = Mb.nextMatch(pb, Ob.from, Ob.to), tb.push(eb.g.announce.of(pb.phrase("replaced match on line $", pb.doc.lineAt(Vb).number) + ".")));
        let Cb = bb.state.changes(Ub);
        return Ob && (Lb = Hb.j.single(Ob.from, Ob.to).map(Cb), tb.push(Hw(bb, Ob)), tb.push(pb.facet(xb).scrollToMatch(Lb.main, bb))), bb.dispatch({
          changes: Cb,
          selection: Lb,
          effects: tb,
          userEvent: "input.replace"
        }), !0
      })),
      ub = Qb(((bb, wb) => {
        let {
          query: Mb
        } = wb;
        if (bb.state.readOnly) return !1;
        let Hb = Mb.matchAll(bb.state, 1e9).map((bb => {
          let {
            from: wb,
            to: eb
          } = bb;
          return {
            from: wb,
            to: eb,
            insert: Mb.getReplacement(bb)
          }
        }));
        if (!Hb.length) return !1;
        let pb = bb.state.phrase("replaced $ matches", Hb.length) + ".";
        return bb.dispatch({
          changes: Hb,
          effects: eb.g.announce.of(pb),
          userEvent: "input.replace.all"
        }), !0
      }));

    function db(bb) {
      return bb.state.facet(xb).createPanel(bb)
    }

    function Pb(bb, wb) {
      var Mb, eb, Hb, pb, Vb;
      let gb = bb.selection.main,
        lb = gb.empty || gb.to > gb.from + 100 ? "" : bb.sliceDoc(gb.from, gb.to);
      if (wb && !lb) return wb;
      let Lb = bb.facet(xb);
      return new jb({
        search: (null !== (Mb = null === wb || void 0 === wb ? void 0 : wb.literal) && void 0 !== Mb ? Mb : Lb.literal) ? lb : lb.replace(/\n/g, "\\n"),
        caseSensitive: null !== (eb = null === wb || void 0 === wb ? void 0 : wb.caseSensitive) && void 0 !== eb ? eb : Lb.caseSensitive,
        literal: null !== (Hb = null === wb || void 0 === wb ? void 0 : wb.literal) && void 0 !== Hb ? Hb : Lb.literal,
        regexp: null !== (pb = null === wb || void 0 === wb ? void 0 : wb.regexp) && void 0 !== pb ? pb : Lb.regexp,
        wholeWord: null !== (Vb = null === wb || void 0 === wb ? void 0 : wb.wholeWord) && void 0 !== Vb ? Vb : Lb.wholeWord
      })
    }

    function nb(bb) {
      let wb = (0, eb.y)(bb, db);
      return wb && wb.dom.querySelector("[main-field]")
    }

    function yb(bb) {
      let wb = nb(bb);
      wb && wb == bb.root.activeElement && wb.select()
    }
    const ob = bb => {
        let wb = bb.state.field(Wb, !1);
        if (wb && wb.panel) {
          let Mb = nb(bb);
          if (Mb && Mb != bb.root.activeElement) {
            let eb = Pb(bb.state, wb.query.spec);
            eb.valid && bb.dispatch({
              effects: fb.of(eb)
            }), Mb.focus(), Mb.select()
          }
        } else bb.dispatch({
          effects: [Ab.of(!0), wb ? fb.of(Pb(bb.state, wb.query.spec)) : Hb.E.appendConfig.of(Vw)]
        });
        return !0
      },
      Tb = bb => {
        let wb = bb.state.field(Wb, !1);
        if (!wb || !wb.panel) return !1;
        let Mb = (0, eb.y)(bb, db);
        return Mb && Mb.dom.contains(bb.root.activeElement) && bb.focus(), bb.dispatch({
          effects: Ab.of(!1)
        }), !0
      },
      kb = [{
        key: "Mod-f",
        run: ob,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: Gb,
        shift: qb,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: Gb,
        shift: qb,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: Tb,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb, eb = wb.selection;
          if (eb.gF.length > 1 || eb.main.empty) return !1;
          let {
            from: pb,
            to: Vb
          } = eb.main, lb = [], Lb = 0;
          for (let Ib = new gb(wb.doc, wb.sliceDoc(pb, Vb)); !Ib.next().done;) {
            if (lb.length > 1e3) return !1;
            Ib.value.from == pb && (Lb = lb.length), lb.push(Hb.j.range(Ib.value.from, Ib.value.to))
          }
          return Mb(wb.update({
            selection: Hb.j.create(lb, Lb),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: bb => {
          let {
            state: wb
          } = bb, Mb = String(wb.doc.lineAt(bb.state.selection.main.head).number), {
            close: pb,
            result: Vb
          } = (0, eb.jb)(bb, {
            label: wb.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: Mb
            },
            focus: !0,
            submitLabel: wb.phrase("go")
          });
          return Vb.then((Mb => {
            let Vb = Mb && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(Mb.elements.line.value);
            if (!Vb) return void bb.dispatch({
              effects: pb
            });
            let gb = wb.doc.lineAt(wb.selection.main.head),
              [, lb, Lb, Ib, Ob] = Vb,
              Ub = Ib ? +Ib.slice(1) : 0,
              tb = Lb ? +Lb : gb.number;
            if (Lb && Ob) {
              let bb = tb / 100;
              lb && (bb = bb * ("-" == lb ? -1 : 1) + gb.number / wb.doc.lines), tb = Math.round(wb.doc.lines * bb)
            } else Lb && lb && (tb = tb * ("-" == lb ? -1 : 1) + gb.number);
            let Cb = wb.doc.line(Math.max(1, Math.min(wb.doc.lines, tb))),
              Eb = Hb.j.cursor(Cb.from + Math.max(0, Math.min(Ub, Cb.length)));
            bb.dispatch({
              effects: [pb, eb.g.scrollIntoView(Eb.from, {
                y: "center"
              })],
              selection: Eb
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb, {
            gF: pb
          } = wb.selection;
          if (pb.some((bb => bb.from === bb.to))) return (bb => {
            let {
              state: wb,
              dispatch: Mb
            } = bb, {
              selection: eb
            } = wb, pb = Hb.j.create(eb.gF.map((bb => wb.wordAt(bb.head) || Hb.j.cursor(bb.head))), eb.mainIndex);
            return !pb.eq(eb) && (Mb(wb.update({
              selection: pb
            })), !0)
          })({
            state: wb,
            dispatch: Mb
          });
          let Vb = wb.sliceDoc(pb[0].from, pb[0].to);
          if (wb.selection.gF.some((bb => wb.sliceDoc(bb.from, bb.to) != Vb))) return !1;
          let lb = function(bb, wb) {
            let {
              main: Mb,
              gF: eb
            } = bb.selection, Hb = bb.wordAt(Mb.head), pb = Hb && Hb.from == Mb.from && Hb.to == Mb.to;
            for (let Vb = !1, lb = new gb(bb.doc, wb, eb[eb.length - 1].to);;) {
              if (lb.next(), !lb.done) {
                if (Vb && eb.some((bb => bb.from == lb.value.from))) continue;
                if (pb) {
                  let wb = bb.wordAt(lb.value.from);
                  if (!wb || wb.from != lb.value.from || wb.to != lb.value.to) continue
                }
                return lb.value
              }
              if (Vb) return null;
              lb = new gb(bb.doc, wb, 0, Math.max(0, eb[eb.length - 1].from - 1)), Vb = !0
            }
          }(wb, Vb);
          return !!lb && (Mb(wb.update({
            selection: wb.selection.addRange(Hb.j.range(lb.from, lb.to), !1),
            effects: eb.g.scrollIntoView(lb.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class bw {
      constructor(bb) {
        this.view = bb;
        let wb = this.query = bb.state.field(Wb).query.spec;

        function Mb(bb, wb, Mb) {
          return (0, pb.c)("button", {
            class: "cm-button",
            name: bb,
            onclick: wb,
            type: "button"
          }, Mb)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, pb.c)("input", {
          value: wb.search,
          placeholder: ww(bb, "Find"),
          "aria-label": ww(bb, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, pb.c)("input", {
          value: wb.replace,
          placeholder: ww(bb, "Replace"),
          "aria-label": ww(bb, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, pb.c)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: wb.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, pb.c)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: wb.regexp,
          onchange: this.commit
        }), this.wordField = (0, pb.c)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: wb.wholeWord,
          onchange: this.commit
        }), this.dom = (0, pb.c)("div", {
          onkeydown: bb => this.keydown(bb),
          class: "cm-search"
        }, [this.searchField, Mb("next", (() => Gb(bb)), [ww(bb, "next")]), Mb("prev", (() => qb(bb)), [ww(bb, "previous")]), Mb("select", (() => ab(bb)), [ww(bb, "all")]), (0, pb.c)("label", null, [this.caseField, ww(bb, "match case")]), (0, pb.c)("label", null, [this.reField, ww(bb, "regexp")]), (0, pb.c)("label", null, [this.wordField, ww(bb, "by word")]), ...bb.state.readOnly ? [] : [(0, pb.c)("br"), this.replaceField, Mb("replace", (() => ib(bb)), [ww(bb, "replace")]), Mb("replaceAll", (() => ub(bb)), [ww(bb, "replace all")])], (0, pb.c)("button", {
          name: "close",
          onclick: () => Tb(bb),
          "aria-label": ww(bb, "close"),
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
          effects: fb.of(bb)
        }))
      }
      keydown(bb) {
        (0, eb.ib)(this.view, bb, "search-panel") ? bb.preventDefault(): 13 == bb.keyCode && bb.target == this.searchField ? (bb.preventDefault(), (bb.shiftKey ? qb : Gb)(this.view)) : 13 == bb.keyCode && bb.target == this.replaceField && (bb.preventDefault(), ib(this.view))
      }
      update(bb) {
        for (let wb of bb.transactions)
          for (let bb of wb.effects) bb.is(fb) && !bb.value.eq(this.query) && this.setQuery(bb.value)
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
        return this.view.state.facet(xb).top
      }
    }

    function ww(bb, wb) {
      return bb.state.phrase(wb)
    }
    const Mw = 30,
      ew = /[\s\.,:;?!]/;

    function Hw(bb, wb) {
      let {
        from: Mb,
        to: Hb
      } = wb, pb = bb.state.doc.lineAt(Mb), Vb = bb.state.doc.lineAt(Hb).to, gb = Math.max(pb.from, Mb - Mw), lb = Math.min(Vb, Hb + Mw), Lb = bb.state.sliceDoc(gb, lb);
      if (gb != pb.from)
        for (let eb = 0; eb < Mw; eb++)
          if (!ew.test(Lb[eb + 1]) && ew.test(Lb[eb])) {
            Lb = Lb.slice(eb);
            break
          } if (lb != Vb)
        for (let eb = Lb.length - 1; eb > Lb.length - Mw; eb--)
          if (!ew.test(Lb[eb - 1]) && ew.test(Lb[eb])) {
            Lb = Lb.slice(0, eb);
            break
          } return eb.g.announce.of(`${bb.state.phrase("current match")}. ${Lb} ${bb.state.phrase("on line")} ${pb.number}.`)
    }
    const pw = eb.g.baseTheme({
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
      Vw = [Wb, Hb.v.low(vb), pw]
  },
  53510: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Zb,
      e: () => Lw,
      g: () => rH,
      k: () => gV,
      n: () => ow,
      o: () => cb,
      q: () => cp,
      t: () => oH,
      w: () => Vp,
      y: () => Tp,
      C: () => np,
      G: () => UV,
      N: () => sp,
      K: () => ZV,
      P: () => Cp,
      T: () => Pp,
      X: () => WH,
      $: () => RV,
      ab: () => dw,
      cb: () => Xp,
      eb: () => rp,
      ib: () => NH,
      jb: () => eV,
      lb: () => MV,
      mb: () => Qp
    });
    for (var eb = Mb(53501), Hb = Mb(53517), pb = {
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
      }, Vb = {
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
      }, gb = "undefined" != typeof navigator && /Mac/.test(navigator.platform), lb = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Lb = 0; Lb < 10; Lb++) pb[48 + Lb] = pb[96 + Lb] = String(Lb);
    for (Lb = 1; Lb <= 24; Lb++) pb[Lb + 111] = "F" + Lb;
    for (Lb = 65; Lb <= 90; Lb++) pb[Lb] = String.fromCharCode(Lb + 32), Vb[Lb] = String.fromCharCode(Lb);
    for (var Ib in pb) Vb.hasOwnProperty(Ib) || (Vb[Ib] = pb[Ib]);
    var Ob = Mb(53522);
    let Ub = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      tb = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const Cb = /Edge\/(\d+)/.exec(Ub.userAgent),
      Eb = /MSIE \d/.test(Ub.userAgent),
      Fb = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ub.userAgent),
      Bb = !!(Eb || Fb || Cb),
      sb = !Bb && /gecko\/(\d+)/i.test(Ub.userAgent),
      mb = !Bb && /Chrome\/(\d+)/.exec(Ub.userAgent),
      hb = "webkitFontSmoothing" in tb.documentElement.style,
      zb = !Bb && /Apple Computer/.test(Ub.vendor),
      Xb = zb && (/Mobile\/\w+/.test(Ub.userAgent) || Ub.maxTouchPoints > 2);
    var xb = {
      mac: Xb || /Mac/.test(Ub.platform),
      windows: /Win/.test(Ub.platform),
      linux: /Linux|X11/.test(Ub.platform),
      ie: Bb,
      ie_version: Eb ? tb.documentMode || 6 : Fb ? +Fb[1] : Cb ? +Cb[1] : 0,
      gecko: sb,
      gecko_version: sb ? +(/Firefox\/(\d+)/.exec(Ub.userAgent) || [0, 0])[1] : 0,
      chrome: !!mb,
      chrome_version: mb ? +mb[1] : 0,
      ios: Xb,
      android: /Android\b/.test(Ub.userAgent),
      webkit: hb,
      webkit_version: hb ? +(/\bAppleWebKit\/(\d+)/.exec(Ub.userAgent) || [0, 0])[1] : 0,
      safari: zb,
      safari_version: zb ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Ub.userAgent) || [0, 0])[1] : 0,
      tabSize: null != tb.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function jb(bb, wb) {
      for (let Mb in bb) "class" == Mb && wb.class ? wb.class += " " + bb.class : "style" == Mb && wb.style ? wb.style += ";" + bb.style : wb[Mb] = bb[Mb];
      return wb
    }
    const Kb = Object.create(null);

    function rb(bb, wb, Mb) {
      if (bb == wb) return !0;
      bb || (bb = Kb), wb || (wb = Kb);
      let eb = Object.keys(bb),
        Hb = Object.keys(wb);
      if (eb.length - (Mb && eb.indexOf(Mb) > -1 ? 1 : 0) != Hb.length - (Mb && Hb.indexOf(Mb) > -1 ? 1 : 0)) return !1;
      for (let pb of eb)
        if (pb != Mb && (-1 == Hb.indexOf(pb) || bb[pb] !== wb[pb])) return !1;
      return !0
    }

    function Rb(bb, wb, Mb) {
      let eb = !1;
      if (wb)
        for (let Hb in wb) Mb && Hb in Mb || (eb = !0, "style" == Hb ? bb.style.cssText = "" : bb.removeAttribute(Hb));
      if (Mb)
        for (let Hb in Mb) wb && wb[Hb] == Mb[Hb] || (eb = !0, "style" == Hb ? bb.style.cssText = Mb[Hb] : bb.setAttribute(Hb, Mb[Hb]));
      return eb
    }

    function Db(bb) {
      let wb = Object.create(null);
      for (let Mb = 0; Mb < bb.attributes.length; Mb++) {
        let eb = bb.attributes[Mb];
        wb[eb.name] = eb.value
      }
      return wb
    }
    class cb {
      eq(bb) {
        return !1
      }
      updateDOM(bb, wb, Mb) {
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
      coordsAt(bb, wb, Mb) {
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
    var Yb = function(bb) {
      return bb[bb.Text = 0] = "Text", bb[bb.WidgetBefore = 1] = "WidgetBefore", bb[bb.WidgetAfter = 2] = "WidgetAfter", bb[bb.WidgetRange = 3] = "WidgetRange", bb
    }(Yb || (Yb = {}));
    class Zb extends eb.C {
      constructor(bb, wb, Mb, eb) {
        super(), this.startSide = bb, this.endSide = wb, this.widget = Mb, this.spec = eb
      }
      get heightRelevant() {
        return !1
      }
      static mark(bb) {
        return new fb(bb)
      }
      static widget(bb) {
        let wb = Math.max(-1e4, Math.min(1e4, bb.side || 0)),
          Mb = !!bb.block;
        return wb += Mb && !bb.inlineOrder ? wb > 0 ? 3e8 : -4e8 : wb > 0 ? 1e8 : -1e8, new Wb(bb, wb, wb, Mb, bb.widget || null, !1)
      }
      static replace(bb) {
        let wb, Mb, eb = !!bb.block;
        if (bb.isBlockGap) wb = -5e8, Mb = 4e8;
        else {
          let {
            start: Hb,
            end: pb
          } = Jb(bb, eb);
          wb = (Hb ? eb ? -3e8 : -1 : 5e8) - 1, Mb = 1 + (pb ? eb ? 2e8 : 1 : -6e8)
        }
        return new Wb(bb, wb, Mb, eb, bb.widget || null, !0)
      }
      static line(bb) {
        return new Ab(bb)
      }
      static set(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return eb.B.of(bb, wb)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Zb.none = eb.B.empty;
    class fb extends Zb {
      constructor(bb) {
        let {
          start: wb,
          end: Mb
        } = Jb(bb);
        super(wb ? -1 : 5e8, Mb ? 1 : -6e8, null, bb), this.tagName = bb.tagName || "span", this.attrs = bb.class && bb.attributes ? jb(bb.attributes, {
          class: bb.class
        }) : bb.class ? {
          class: bb.class
        } : bb.attributes || Kb
      }
      eq(bb) {
        return this == bb || bb instanceof fb && this.tagName == bb.tagName && rb(this.attrs, bb.attrs)
      }
      range(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        if (bb >= wb) throw new RangeError("Mark decorations may not be empty");
        return super.range(bb, wb)
      }
    }
    fb.prototype.point = !1;
    class Ab extends Zb {
      constructor(bb) {
        super(-2e8, -2e8, null, bb)
      }
      eq(bb) {
        return bb instanceof Ab && this.spec.class == bb.spec.class && rb(this.spec.attributes, bb.spec.attributes)
      }
      range(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        if (wb != bb) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(bb, wb)
      }
    }
    Ab.prototype.mapMode = eb.s.TrackBefore, Ab.prototype.point = !0;
    class Wb extends Zb {
      constructor(bb, wb, Mb, Hb, pb, Vb) {
        super(wb, Mb, pb, bb), this.block = Hb, this.isReplace = Vb, this.mapMode = Hb ? wb <= 0 ? eb.s.TrackBefore : eb.s.TrackAfter : eb.s.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? Yb.WidgetRange : this.startSide <= 0 ? Yb.WidgetBefore : Yb.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(bb) {
        return bb instanceof Wb && (wb = this.widget, Mb = bb.widget, wb == Mb || !!(wb && Mb && wb.compare(Mb))) && this.block == bb.block && this.startSide == bb.startSide && this.endSide == bb.endSide;
        var wb, Mb
      }
      range(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        if (this.isReplace && (bb > wb || bb == wb && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && wb != bb) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(bb, wb)
      }
    }

    function Jb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: Mb,
          inclusiveEnd: eb
        } = bb;
      return null == Mb && (Mb = bb.inclusive), null == eb && (eb = bb.inclusive), {
        start: null !== Mb && void 0 !== Mb ? Mb : wb,
        end: null !== eb && void 0 !== eb ? eb : wb
      }
    }

    function Sb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Hb = Mb.length - 1;
      Hb >= 0 && Mb[Hb] + eb >= bb ? Mb[Hb] = Math.max(Mb[Hb], wb) : Mb.push(bb, wb)
    }
    Wb.prototype.point = !0;
    class Nb extends eb.C {
      constructor(bb, wb) {
        super(), this.tagName = bb, this.attributes = wb
      }
      eq(bb) {
        return bb == this || bb instanceof Nb && this.tagName == bb.tagName && rb(this.attributes, bb.attributes)
      }
      static create(bb) {
        return new Nb(bb.tagName, bb.attributes || Kb)
      }
      static set(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return eb.B.of(bb, wb)
      }
    }

    function vb(bb) {
      let wb;
      return wb = 11 == bb.nodeType ? bb.getSelection ? bb : bb.ownerDocument : bb, wb.getSelection()
    }

    function Qb(bb, wb) {
      return !!wb && (bb == wb || bb.contains(1 != wb.nodeType ? wb.parentNode : wb))
    }

    function Gb(bb, wb) {
      if (!wb.anchorNode) return !1;
      try {
        return Qb(bb, wb.anchorNode)
      } catch (Mb) {
        return !1
      }
    }

    function qb(bb) {
      return 3 == bb.nodeType ? ew(bb, 0, bb.nodeValue.length).getClientRects() : 1 == bb.nodeType ? bb.getClientRects() : []
    }

    function ab(bb, wb, Mb, eb) {
      return !!Mb && (db(bb, wb, Mb, eb, -1) || db(bb, wb, Mb, eb, 1))
    }

    function ib(bb) {
      for (var wb = 0;; wb++)
        if (!(bb = bb.previousSibling)) return wb
    }

    function ub(bb) {
      return 1 == bb.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(bb.nodeName)
    }

    function db(bb, wb, Mb, eb, Hb) {
      for (;;) {
        if (bb == Mb && wb == eb) return !0;
        if (wb == (Hb < 0 ? 0 : Pb(bb))) {
          if ("DIV" == bb.nodeName) return !1;
          let Mb = bb.parentNode;
          if (!Mb || 1 != Mb.nodeType) return !1;
          wb = ib(bb) + (Hb < 0 ? 0 : 1), bb = Mb
        } else {
          if (1 != bb.nodeType) return !1;
          if (1 == (bb = bb.childNodes[wb + (Hb < 0 ? -1 : 0)]).nodeType && "false" == bb.contentEditable) return !1;
          wb = Hb < 0 ? Pb(bb) : 0
        }
      }
    }

    function Pb(bb) {
      return 3 == bb.nodeType ? bb.nodeValue.length : bb.childNodes.length
    }

    function nb(bb, wb) {
      let Mb = wb ? bb.left : bb.right;
      return {
        left: Mb,
        right: Mb,
        top: bb.top,
        bottom: bb.bottom
      }
    }

    function yb(bb) {
      let wb = bb.visualViewport;
      return wb ? {
        left: 0,
        right: wb.width,
        top: 0,
        bottom: wb.height
      } : {
        left: 0,
        right: bb.innerWidth,
        top: 0,
        bottom: bb.innerHeight
      }
    }

    function ob(bb, wb) {
      let Mb = wb.width / bb.offsetWidth,
        eb = wb.height / bb.offsetHeight;
      return (Mb > .995 && Mb < 1.005 || !isFinite(Mb) || Math.abs(wb.width - bb.offsetWidth) < 1) && (Mb = 1), (eb > .995 && eb < 1.005 || !isFinite(eb) || Math.abs(wb.height - bb.offsetHeight) < 1) && (eb = 1), {
        scaleX: Mb,
        scaleY: eb
      }
    }

    function Tb(bb) {
      let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        Mb = bb.ownerDocument,
        eb = null,
        Hb = null;
      for (let pb = bb.parentNode; pb && (pb != Mb.body && (wb && !eb || !Hb));)
        if (1 == pb.nodeType) !Hb && pb.scrollHeight > pb.clientHeight && (Hb = pb), wb && !eb && pb.scrollWidth > pb.clientWidth && (eb = pb), pb = pb.assignedSlot || pb.parentNode;
        else {
          if (11 != pb.nodeType) break;
          pb = pb.host
        } return {
        x: eb,
        y: Hb
      }
    }
    Nb.prototype.startSide = Nb.prototype.endSide = -1;
    class kb {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(bb) {
        return this.anchorNode == bb.anchorNode && this.anchorOffset == bb.anchorOffset && this.focusNode == bb.focusNode && this.focusOffset == bb.focusOffset
      }
      setRange(bb) {
        let {
          anchorNode: wb,
          focusNode: Mb
        } = bb;
        this.set(wb, Math.min(bb.anchorOffset, wb ? Pb(wb) : 0), Mb, Math.min(bb.focusOffset, Mb ? Pb(Mb) : 0))
      }
      set(bb, wb, Mb, eb) {
        this.anchorNode = bb, this.anchorOffset = wb, this.focusNode = Mb, this.focusOffset = eb
      }
    }
    let bw, ww = null;

    function Mw(bb) {
      if (bb.setActive) return bb.setActive();
      if (ww) return bb.focus(ww);
      let wb = [];
      for (let Mb = bb; Mb && (wb.push(Mb, Mb.scrollTop, Mb.scrollLeft), Mb != Mb.ownerDocument); Mb = Mb.parentNode);
      if (bb.focus(null == ww ? {
          get preventScroll() {
            return ww = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !ww) {
        ww = !1;
        for (let bb = 0; bb < wb.length;) {
          let Mb = wb[bb++],
            eb = wb[bb++],
            Hb = wb[bb++];
          Mb.scrollTop != eb && (Mb.scrollTop = eb), Mb.scrollLeft != Hb && (Mb.scrollLeft = Hb)
        }
      }
    }

    function ew(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wb,
        eb = bw || (bw = document.createRange());
      return eb.setEnd(bb, Mb), eb.setStart(bb, wb), eb
    }

    function Hw(bb, wb, Mb, eb) {
      let Hb = {
        key: wb,
        code: wb,
        keyCode: Mb,
        which: Mb,
        cancelable: !0
      };
      eb && ({
        altKey: Hb.altKey,
        ctrlKey: Hb.ctrlKey,
        shiftKey: Hb.shiftKey,
        metaKey: Hb.metaKey
      } = eb);
      let pb = new KeyboardEvent("keydown", Hb);
      pb.synthetic = !0, bb.dispatchEvent(pb);
      let Vb = new KeyboardEvent("keyup", Hb);
      return Vb.synthetic = !0, bb.dispatchEvent(Vb), pb.defaultPrevented || Vb.defaultPrevented
    }

    function pw(bb) {
      return bb instanceof Window ? bb.pageYOffset > Math.max(0, bb.document.documentElement.scrollHeight - bb.innerHeight - 4) : bb.scrollTop > Math.max(1, bb.scrollHeight - bb.clientHeight - 4)
    }

    function Vw(bb, wb) {
      for (let Mb = bb, eb = wb;;) {
        if (3 == Mb.nodeType && eb > 0) return {
          node: Mb,
          offset: eb
        };
        if (1 == Mb.nodeType && eb > 0) {
          if ("false" == Mb.contentEditable) return null;
          Mb = Mb.childNodes[eb - 1], eb = Pb(Mb)
        } else {
          if (!Mb.parentNode || ub(Mb)) return null;
          eb = ib(Mb), Mb = Mb.parentNode
        }
      }
    }

    function gw(bb, wb) {
      for (let Mb = bb, eb = wb;;) {
        if (3 == Mb.nodeType && eb < Mb.nodeValue.length) return {
          node: Mb,
          offset: eb
        };
        if (1 == Mb.nodeType && eb < Mb.childNodes.length) {
          if ("false" == Mb.contentEditable) return null;
          Mb = Mb.childNodes[eb], eb = 0
        } else {
          if (!Mb.parentNode || ub(Mb)) return null;
          eb = ib(Mb) + 1, Mb = Mb.parentNode
        }
      }
    }
    xb.safari && xb.safari_version >= 26 && (ww = !1);
    class lw {
      constructor(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = bb, this.offset = wb, this.precise = Mb
      }
      static before(bb, wb) {
        return new lw(bb.parentNode, ib(bb), wb)
      }
      static after(bb, wb) {
        return new lw(bb.parentNode, ib(bb) + 1, wb)
      }
    }
    var Lw = function(bb) {
      return bb[bb.LTR = 0] = "LTR", bb[bb.RTL = 1] = "RTL", bb
    }(Lw || (Lw = {}));
    const Iw = Lw.LTR,
      Ow = Lw.RTL;

    function Uw(bb) {
      let wb = [];
      for (let Mb = 0; Mb < bb.length; Mb++) wb.push(1 << +bb[Mb]);
      return wb
    }
    const tw = Uw("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      Cw = Uw("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      Ew = Object.create(null),
      Fw = [];
    for (let fV of ["()", "[]", "{}"]) {
      let bb = fV.charCodeAt(0),
        wb = fV.charCodeAt(1);
      Ew[bb] = wb, Ew[wb] = -bb
    }

    function Bw(bb) {
      return bb <= 247 ? tw[bb] : 1424 <= bb && bb <= 1524 ? 2 : 1536 <= bb && bb <= 1785 ? Cw[bb - 1536] : 1774 <= bb && bb <= 2220 ? 4 : 8192 <= bb && bb <= 8204 ? 256 : 64336 <= bb && bb <= 65023 ? 4 : 1
    }
    const sw = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class mw {
      get dir() {
        return this.level % 2 ? Ow : Iw
      }
      constructor(bb, wb, Mb) {
        this.from = bb, this.to = wb, this.level = Mb
      }
      side(bb, wb) {
        return this.dir == wb == bb ? this.to : this.from
      }
      forward(bb, wb) {
        return bb == (this.dir == wb)
      }
      static find(bb, wb, Mb, eb) {
        let Hb = -1;
        for (let pb = 0; pb < bb.length; pb++) {
          let Vb = bb[pb];
          if (Vb.from <= wb && Vb.to >= wb) {
            if (Vb.level == Mb) return pb;
            (Hb < 0 || (0 != eb ? eb < 0 ? Vb.from < wb : Vb.to > wb : bb[Hb].level > Vb.level)) && (Hb = pb)
          }
        }
        if (Hb < 0) throw new RangeError("Index out of range");
        return Hb
      }
    }

    function hw(bb, wb) {
      if (bb.length != wb.length) return !1;
      for (let Mb = 0; Mb < bb.length; Mb++) {
        let eb = bb[Mb],
          Hb = wb[Mb];
        if (eb.from != Hb.from || eb.to != Hb.to || eb.direction != Hb.direction || !hw(eb.inner, Hb.inner)) return !1
      }
      return !0
    }
    const zw = [];

    function Xw(bb, wb, Mb, eb, Hb, pb, Vb) {
      let gb = eb % 2 ? 2 : 1;
      if (eb % 2 == Hb % 2)
        for (let lb = wb, Lb = 0; lb < Mb;) {
          let wb = !0,
            Ib = !1;
          if (Lb == pb.length || lb < pb[Lb].from) {
            let bb = zw[lb];
            bb != gb && (wb = !1, Ib = 16 == bb)
          }
          let Ob = wb || 1 != gb ? null : [],
            Ub = wb ? eb : eb + 1,
            tb = lb;
          bb: for (;;)
            if (Lb < pb.length && tb == pb[Lb].from) {
              if (Ib) break bb;
              let Cb = pb[Lb];
              if (!wb)
                for (let bb = Cb.to, wb = Lb + 1;;) {
                  if (bb == Mb) break bb;
                  if (!(wb < pb.length && pb[wb].from == bb)) {
                    if (zw[bb] == gb) break bb;
                    break
                  }
                  bb = pb[wb++].to
                }
              if (Lb++, Ob) Ob.push(Cb);
              else {
                Cb.from > lb && Vb.push(new mw(lb, Cb.from, Ub)), xw(bb, Cb.direction == Iw != !(Ub % 2) ? eb + 1 : eb, Hb, Cb.inner, Cb.from, Cb.to, Vb), lb = Cb.to
              }
              tb = Cb.to
            } else {
              if (tb == Mb || (wb ? zw[tb] != gb : zw[tb] == gb)) break;
              tb++
            } Ob ? Xw(bb, lb, tb, eb + 1, Hb, Ob, Vb) : lb < tb && Vb.push(new mw(lb, tb, Ub)), lb = tb
        } else
          for (let lb = Mb, Lb = pb.length; lb > wb;) {
            let Mb = !0,
              Ib = !1;
            if (!Lb || lb > pb[Lb - 1].to) {
              let bb = zw[lb - 1];
              bb != gb && (Mb = !1, Ib = 16 == bb)
            }
            let Ob = Mb || 1 != gb ? null : [],
              Ub = Mb ? eb : eb + 1,
              tb = lb;
            bb: for (;;)
              if (Lb && tb == pb[Lb - 1].to) {
                if (Ib) break bb;
                let Cb = pb[--Lb];
                if (!Mb)
                  for (let bb = Cb.from, Mb = Lb;;) {
                    if (bb == wb) break bb;
                    if (!Mb || pb[Mb - 1].to != bb) {
                      if (zw[bb - 1] == gb) break bb;
                      break
                    }
                    bb = pb[--Mb].from
                  }
                if (Ob) Ob.push(Cb);
                else {
                  Cb.to < lb && Vb.push(new mw(Cb.to, lb, Ub)), xw(bb, Cb.direction == Iw != !(Ub % 2) ? eb + 1 : eb, Hb, Cb.inner, Cb.from, Cb.to, Vb), lb = Cb.from
                }
                tb = Cb.from
              } else {
                if (tb == wb || (Mb ? zw[tb - 1] != gb : zw[tb - 1] == gb)) break;
                tb--
              } Ob ? Xw(bb, tb, lb, eb + 1, Hb, Ob, Vb) : tb < lb && Vb.push(new mw(tb, lb, Ub)), lb = tb
          }
    }

    function xw(bb, wb, Mb, eb, Hb, pb, Vb) {
      let gb = wb % 2 ? 2 : 1;
      ! function(bb, wb, Mb, eb, Hb) {
        for (let pb = 0; pb <= eb.length; pb++) {
          let Vb = pb ? eb[pb - 1].to : wb,
            gb = pb < eb.length ? eb[pb].from : Mb,
            lb = pb ? 256 : Hb;
          for (let wb = Vb, Mb = lb, eb = lb; wb < gb; wb++) {
            let Hb = Bw(bb.charCodeAt(wb));
            512 == Hb ? Hb = Mb : 8 == Hb && 4 == eb && (Hb = 16), zw[wb] = 4 == Hb ? 2 : Hb, 7 & Hb && (eb = Hb), Mb = Hb
          }
          for (let bb = Vb, wb = lb, eb = lb; bb < gb; bb++) {
            let Hb = zw[bb];
            if (128 == Hb) bb < gb - 1 && wb == zw[bb + 1] && 24 & wb ? Hb = zw[bb] = wb : zw[bb] = 256;
            else if (64 == Hb) {
              let Hb = bb + 1;
              for (; Hb < gb && 64 == zw[Hb];) Hb++;
              let pb = bb && 8 == wb || Hb < Mb && 8 == zw[Hb] ? 1 == eb ? 1 : 8 : 256;
              for (let wb = bb; wb < Hb; wb++) zw[wb] = pb;
              bb = Hb - 1
            } else 8 == Hb && 1 == eb && (zw[bb] = 1);
            wb = Hb, 7 & Hb && (eb = Hb)
          }
        }
      }(bb, Hb, pb, eb, gb),
      function(bb, wb, Mb, eb, Hb) {
        let pb = 1 == Hb ? 2 : 1;
        for (let Vb = 0, gb = 0, lb = 0; Vb <= eb.length; Vb++) {
          let Lb = Vb ? eb[Vb - 1].to : wb,
            Ib = Vb < eb.length ? eb[Vb].from : Mb;
          for (let wb, Mb, eb, Vb = Lb; Vb < Ib; Vb++)
            if (Mb = Ew[wb = bb.charCodeAt(Vb)])
              if (Mb < 0) {
                for (let bb = gb - 3; bb >= 0; bb -= 3)
                  if (Fw[bb + 1] == -Mb) {
                    let wb = Fw[bb + 2],
                      Mb = 2 & wb ? Hb : 4 & wb ? 1 & wb ? pb : Hb : 0;
                    Mb && (zw[Vb] = zw[Fw[bb]] = Mb), gb = bb;
                    break
                  }
              } else {
                if (189 == Fw.length) break;
                Fw[gb++] = Vb, Fw[gb++] = wb, Fw[gb++] = lb
              }
          else if (2 == (eb = zw[Vb]) || 1 == eb) {
            let bb = eb == Hb;
            lb = bb ? 0 : 1;
            for (let wb = gb - 3; wb >= 0; wb -= 3) {
              let Mb = Fw[wb + 2];
              if (2 & Mb) break;
              if (bb) Fw[wb + 2] |= 2;
              else {
                if (4 & Mb) break;
                Fw[wb + 2] |= 4
              }
            }
          }
        }
      }(bb, Hb, pb, eb, gb),
      function(bb, wb, Mb, eb) {
        for (let Hb = 0, pb = eb; Hb <= Mb.length; Hb++) {
          let Vb = Hb ? Mb[Hb - 1].to : bb,
            gb = Hb < Mb.length ? Mb[Hb].from : wb;
          for (let lb = Vb; lb < gb;) {
            let Vb = zw[lb];
            if (256 == Vb) {
              let Vb = lb + 1;
              for (;;)
                if (Vb == gb) {
                  if (Hb == Mb.length) break;
                  Vb = Mb[Hb++].to, gb = Hb < Mb.length ? Mb[Hb].from : wb
                } else {
                  if (256 != zw[Vb]) break;
                  Vb++
                } let Lb = 1 == pb,
                Ib = Lb == (1 == (Vb < wb ? zw[Vb] : eb)) ? Lb ? 1 : 2 : eb;
              for (let wb = Vb, eb = Hb, pb = eb ? Mb[eb - 1].to : bb; wb > lb;) wb == pb && (wb = Mb[--eb].from, pb = eb ? Mb[eb - 1].to : bb), zw[--wb] = Ib;
              lb = Vb
            } else pb = Vb, lb++
          }
        }
      }(Hb, pb, eb, gb), Xw(bb, Hb, pb, wb, Mb, eb, Vb)
    }

    function jw(bb, wb, Mb) {
      if (!bb) return [new mw(0, 0, wb == Ow ? 1 : 0)];
      if (wb == Iw && !Mb.length && !sw.test(bb)) return Kw(bb.length);
      if (Mb.length)
        for (; bb.length > zw.length;) zw[zw.length] = 256;
      let eb = [],
        Hb = wb == Iw ? 0 : 1;
      return xw(bb, Hb, Hb, Mb, 0, bb.length, eb), eb
    }

    function Kw(bb) {
      return [new mw(0, bb, 0)]
    }
    let rw = "";

    function Rw(bb, wb, Mb, Hb, pb) {
      var Vb;
      let gb = Hb.head - bb.from,
        lb = mw.find(wb, gb, null !== (Vb = Hb.bidiLevel) && void 0 !== Vb ? Vb : -1, Hb.assoc),
        Lb = wb[lb],
        Ib = Lb.side(pb, Mb);
      if (gb == Ib) {
        let bb = lb += pb ? 1 : -1;
        if (bb < 0 || bb >= wb.length) return null;
        Lb = wb[lb = bb], gb = Lb.side(!pb, Mb), Ib = Lb.side(pb, Mb)
      }
      let Ob = (0, eb.U)(bb.text, gb, Lb.forward(pb, Mb));
      (Ob < Lb.from || Ob > Lb.to) && (Ob = Ib), rw = bb.text.slice(Math.min(gb, Ob), Math.max(gb, Ob));
      let Ub = lb == (pb ? wb.length - 1 : 0) ? null : wb[lb + (pb ? 1 : -1)];
      return Ub && Ob == Ib && Ub.level + (pb ? 0 : 1) < Lb.level ? eb.j.cursor(Ub.side(!pb, Mb) + bb.from, Ub.forward(pb, Mb) ? 1 : -1, Ub.level) : eb.j.cursor(Ob + bb.from, Lb.forward(pb, Mb) ? -1 : 1, Lb.level)
    }

    function Dw(bb, wb, Mb) {
      for (let eb = wb; eb < Mb; eb++) {
        let wb = Bw(bb.charCodeAt(eb));
        if (1 == wb) return Iw;
        if (2 == wb || 4 == wb) return Ow
      }
      return Iw
    }
    const Yw = eb.o.define(),
      Zw = eb.o.define(),
      fw = eb.o.define(),
      Aw = eb.o.define(),
      Ww = eb.o.define(),
      Jw = eb.o.define(),
      Sw = eb.o.define(),
      Nw = eb.o.define(),
      vw = eb.o.define(),
      Qw = eb.o.define({
        combine: bb => bb.some((bb => bb))
      }),
      Gw = eb.o.define({
        combine: bb => bb.some((bb => bb))
      }),
      qw = eb.o.define();
    class aw {
      constructor(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = bb, this.y = wb, this.x = Mb, this.yMargin = eb, this.xMargin = Hb, this.isSnapshot = pb
      }
      map(bb) {
        return bb.empty ? this : new aw(this.range.map(bb), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(bb) {
        return this.range.to <= bb.doc.length ? this : new aw(eb.j.cursor(bb.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const iw = eb.E.define({
        map: (bb, wb) => bb.map(wb)
      }),
      uw = eb.E.define();

    function dw(bb, wb, Mb) {
      let eb = bb.facet(Aw);
      eb.length ? eb[0](wb) : window.onerror && window.onerror(String(wb), Mb, void 0, void 0, wb) || (Mb ? console.error(Mb + ":", wb) : console.error(wb))
    }
    const Pw = eb.o.define({
      combine: bb => !bb.length || bb[0]
    });
    let nw = 0;
    const yw = eb.o.define({
      combine: bb => bb.filter(((wb, Mb) => {
        for (let eb = 0; eb < Mb; eb++)
          if (bb[eb].plugin == wb.plugin) return !1;
        return !0
      }))
    });
    class ow {
      constructor(bb, wb, Mb, eb, Hb) {
        this.id = bb, this.create = wb, this.domEventHandlers = Mb, this.domEventObservers = eb, this.baseExtensions = Hb(this), this.extension = this.baseExtensions.concat(yw.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(bb) {
        return this.baseExtensions.concat(yw.of({
          plugin: this,
          arg: bb
        }))
      }
      static define(bb, wb) {
        const {
          eventHandlers: Mb,
          eventObservers: eb,
          provide: Hb,
          ze: pb
        } = wb || {};
        return new ow(nw++, bb, Mb, eb, (bb => {
          let wb = [];
          return pb && wb.push(wM.of((wb => {
            let Mb = wb.plugin(bb);
            return Mb ? pb(Mb) : Zb.none
          }))), Hb && wb.push(Hb(bb)), wb
        }))
      }
      static fromClass(bb, wb) {
        return ow.define(((wb, Mb) => new bb(wb, Mb)), wb)
      }
    }
    class Tw {
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
            } catch (wb) {
              if (dw(bb.state, wb, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (Mb) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(bb, this.spec.arg)
        } catch (wb) {
          dw(bb.state, wb, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(bb) {
        var wb;
        if (null === (wb = this.value) || void 0 === wb ? void 0 : wb.destroy) try {
          this.value.destroy()
        } catch (Mb) {
          dw(bb.state, Mb, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const kw = eb.o.define(),
      bM = eb.o.define(),
      wM = eb.o.define(),
      MM = eb.o.define(),
      eM = eb.o.define(),
      HM = eb.o.define(),
      pM = eb.o.define();

    function VM(bb, wb) {
      let Mb = bb.state.facet(pM);
      if (!Mb.length) return Mb;
      let Hb = Mb.map((wb => wb instanceof Function ? wb(bb) : wb)),
        pb = [];
      return eb.B.spans(Hb, wb.from, wb.to, {
        point() {},
        span(bb, Mb, eb, Hb) {
          let Vb = bb - wb.from,
            gb = Mb - wb.from,
            lb = pb;
          for (let pb = eb.length - 1; pb >= 0; pb--, Hb--) {
            let bb, Mb = eb[pb].spec.bidiIsolate;
            if (null == Mb && (Mb = Dw(wb.text, Vb, gb)), Hb > 0 && lb.length && (bb = lb[lb.length - 1]).to == Vb && bb.direction == Mb) bb.to = gb, lb = bb.inner;
            else {
              let bb = {
                from: Vb,
                to: gb,
                direction: Mb,
                inner: []
              };
              lb.push(bb), lb = bb.inner
            }
          }
        }
      }), pb
    }
    const gM = eb.o.define();

    function lM(bb) {
      let wb = 0,
        Mb = 0,
        eb = 0,
        Hb = 0;
      for (let pb of bb.state.facet(gM)) {
        let Vb = pb(bb);
        Vb && (null != Vb.left && (wb = Math.max(wb, Vb.left)), null != Vb.right && (Mb = Math.max(Mb, Vb.right)), null != Vb.top && (eb = Math.max(eb, Vb.top)), null != Vb.bottom && (Hb = Math.max(Hb, Vb.bottom)))
      }
      return {
        left: wb,
        right: Mb,
        top: eb,
        bottom: Hb
      }
    }
    const LM = eb.o.define();
    class IM {
      constructor(bb, wb, Mb, eb) {
        this.fromA = bb, this.toA = wb, this.fromB = Mb, this.toB = eb
      }
      join(bb) {
        return new IM(Math.min(this.fromA, bb.fromA), Math.max(this.toA, bb.toA), Math.min(this.fromB, bb.fromB), Math.max(this.toB, bb.toB))
      }
      addToSet(bb) {
        let wb = bb.length,
          Mb = this;
        for (; wb > 0; wb--) {
          let eb = bb[wb - 1];
          if (!(eb.fromA > Mb.toA)) {
            if (eb.toA < Mb.fromA) break;
            Mb = Mb.join(eb), bb.splice(wb - 1, 1)
          }
        }
        return bb.splice(wb, 0, Mb), bb
      }
      static extendWithRanges(bb, wb) {
        if (0 == wb.length) return bb;
        let Mb = [];
        for (let eb = 0, Hb = 0, pb = 0;;) {
          let Vb = eb < bb.length ? bb[eb].fromB : 1e9,
            gb = Hb < wb.length ? wb[Hb] : 1e9,
            lb = Math.min(Vb, gb);
          if (1e9 == lb) break;
          let Lb = lb + pb,
            Ib = lb,
            Ob = Lb;
          for (;;)
            if (Hb < wb.length && wb[Hb] <= Ib) {
              let Mb = wb[Hb + 1];
              Hb += 2, Ib = Math.max(Ib, Mb);
              for (let wb = eb; wb < bb.length && bb[wb].fromB <= Ib; wb++) pb = bb[wb].toA - bb[wb].toB;
              Ob = Math.max(Ob, Mb + pb)
            } else {
              if (!(eb < bb.length && bb[eb].fromB <= Ib)) break;
              {
                let wb = bb[eb++];
                Ib = Math.max(Ib, wb.toB), Ob = Math.max(Ob, wb.toA), pb = wb.toA - wb.toB
              }
            } Mb.push(new IM(Lb, Ob, lb, Ib))
        }
        return Mb
      }
    }
    class OM {
      constructor(bb, wb, Mb) {
        this.view = bb, this.state = wb, this.transactions = Mb, this.flags = 0, this.startState = bb.state, this.changes = eb.ChangeSet.empty(this.startState.doc.length);
        for (let eb of Mb) this.changes = this.changes.compose(eb.changes);
        let Hb = [];
        this.changes.iterChangedRanges(((bb, wb, Mb, eb) => Hb.push(new IM(bb, wb, Mb, eb)))), this.changedRanges = Hb
      }
      static create(bb, wb, Mb) {
        return new OM(bb, wb, Mb)
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
    const UM = [];
    class tM {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = bb, this.length = wb, this.flags = Mb, this.parent = null, bb.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return UM
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
          bb && function(bb, wb) {
            for (let Mb = bb.attributes.length - 1; Mb >= 0; Mb--) {
              let eb = bb.attributes[Mb].name;
              null == wb[eb] && bb.removeAttribute(eb)
            }
            for (let Mb in wb) {
              let eb = wb[Mb];
              "style" == Mb ? bb.style.cssText = eb : bb.getAttribute(Mb) != eb && bb.setAttribute(Mb, eb)
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
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let Mb of this.children) {
          if (Mb == bb) return wb;
          wb += Mb.length + Mb.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(bb) {
        return this.posBefore(bb) + bb.length
      }
      covers(bb) {
        return !0
      }
      coordsIn(bb, wb) {
        return null
      }
      domPosFor(bb, wb) {
        let Mb = ib(this.dom),
          eb = this.length ? bb > 0 : wb > 0;
        return new lw(this.parent.dom, Mb + (eb ? 1 : 0), 0 == bb || bb == this.length)
      }
      markDirty(bb) {
        this.flags &= -3, bb && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let bb = this; bb; bb = bb.parent)
          if (bb instanceof FM) return bb;
        return null
      }
      static get(bb) {
        return bb.cmTile
      }
    }
    class CM extends tM {
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
        let wb, Mb = this.dom,
          eb = null,
          Hb = (null === bb || void 0 === bb ? void 0 : bb.node) == Mb ? bb : null,
          pb = 0;
        for (let Vb of this.children) {
          if (Vb.sync(bb), pb += Vb.length + Vb.breakAfter, wb = eb ? eb.nextSibling : Mb.firstChild, Hb && wb != Vb.dom && (Hb.written = !0), Vb.dom.parentNode == Mb)
            for (; wb && wb != Vb.dom;) wb = EM(wb);
          else Mb.insertBefore(Vb.dom, wb);
          eb = Vb.dom
        }
        for (wb = eb ? eb.nextSibling : Mb.firstChild, Hb && wb && (Hb.written = !0); wb;) wb = EM(wb);
        this.length = pb
      }
    }

    function EM(bb) {
      let wb = bb.nextSibling;
      return bb.parentNode.removeChild(bb), wb
    }
    class FM extends CM {
      constructor(bb, wb) {
        super(wb), this.view = bb
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
          let wb = tM.get(bb);
          if (wb && this.owns(wb)) return wb;
          bb = bb.parentNode
        }
      }
      blockTiles(bb) {
        for (let wb = [], Mb = this, eb = 0, Hb = 0;;)
          if (eb == Mb.children.length) {
            if (!wb.length) return;
            Mb = Mb.parent, Mb.breakAfter && Hb++, eb = wb.pop()
          } else {
            let pb = Mb.children[eb++];
            if (pb instanceof BM) wb.push(eb), Mb = pb, eb = 0;
            else {
              let wb = Hb + pb.length,
                Mb = bb(pb, Hb);
              if (void 0 !== Mb) return Mb;
              Hb = wb + pb.breakAfter
            }
          }
      }
      resolveBlock(bb, wb) {
        let Mb, eb, Hb = -1,
          pb = -1;
        if (this.blockTiles(((Vb, gb) => {
            let lb = gb + Vb.length;
            if (bb >= gb && bb <= lb) {
              if (Vb.isWidget() && wb >= -1 && wb <= 1) {
                if (32 & Vb.flags) return !0;
                16 & Vb.flags && (Mb = void 0)
              }(gb < bb || bb == lb && (wb < -1 ? Vb.length : Vb.covers(1))) && (!Mb || !Vb.isWidget() && Mb.isWidget()) && (Mb = Vb, Hb = bb - gb), (lb > bb || bb == gb && (wb > 1 ? Vb.length : Vb.covers(-1))) && (!eb || !Vb.isWidget() && eb.isWidget()) && (eb = Vb, pb = bb - gb)
            }
          })), !Mb && !eb) throw new Error("No tile at position " + bb);
        return Mb && wb < 0 || !eb ? {
          tile: Mb,
          offset: Hb
        } : {
          tile: eb,
          offset: pb
        }
      }
    }
    class BM extends CM {
      constructor(bb, wb) {
        super(bb), this.wrapper = wb
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
      static of (bb, wb) {
        let Mb = new BM(wb || document.createElement(bb.tagName), bb);
        return wb || (Mb.flags |= 4), Mb
      }
    }
    class sM extends CM {
      constructor(bb, wb) {
        super(bb), this.attrs = wb
      }
      isLine() {
        return !0
      }
      static start(bb, wb, Mb) {
        let eb = new sM(wb || document.createElement("div"), bb);
        return wb && Mb || (eb.flags |= 4), eb
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(bb, wb, Mb) {
        let eb = null,
          Hb = -1,
          pb = null,
          Vb = -1;
        ! function bb(gb, lb) {
          for (let Lb = 0, Ib = 0; Lb < gb.children.length && Ib <= lb; Lb++) {
            let Ob = gb.children[Lb],
              Ub = Ib + Ob.length;
            Ub >= lb && (Ob.isComposite() ? bb(Ob, lb - Ib) : (!pb || pb.isHidden && (wb > 0 || Mb && mM(pb, Ob))) && (Ub > lb || 32 & Ob.flags) ? (pb = Ob, Vb = lb - Ib) : (Ib < lb || 16 & Ob.flags && !Ob.isHidden) && (eb = Ob, Hb = lb - Ib)), Ib = Ub
          }
        }(this, bb);
        let gb = (wb < 0 ? eb : pb) || eb || pb;
        return gb ? {
          tile: gb,
          offset: gb == eb ? Hb : Vb
        } : null
      }
      coordsIn(bb, wb) {
        let Mb = this.resolveInline(bb, wb, !0);
        return Mb ? Mb.tile.coordsIn(Math.max(0, Mb.offset), wb) : function(bb) {
          let wb = bb.dom.lastChild;
          if (!wb) return bb.dom.getBoundingClientRect();
          let Mb = qb(wb);
          return Mb[Mb.length - 1] || null
        }(this)
      }
      domIn(bb, wb) {
        let Mb = this.resolveInline(bb, wb);
        if (Mb) {
          let {
            tile: bb,
            offset: eb
          } = Mb;
          if (this.dom.contains(bb.dom)) return bb.isText() ? new lw(bb.dom, Math.min(bb.dom.nodeValue.length, eb)) : bb.domPosFor(eb, 16 & bb.flags ? 1 : 32 & bb.flags ? -1 : wb);
          let Hb = Mb.tile.parent,
            pb = !1;
          for (let wb of Hb.children) {
            if (pb) return new lw(wb.dom, 0);
            wb == Mb.tile && (pb = !0)
          }
        }
        return new lw(this.dom, 0)
      }
    }

    function mM(bb, wb) {
      let Mb = bb.coordsIn(0, 1),
        eb = wb.coordsIn(0, 1);
      return Mb && eb && eb.top < Mb.bottom
    }
    class hM extends CM {
      constructor(bb, wb) {
        super(bb), this.mark = wb
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (bb, wb) {
        let Mb = new hM(wb || document.createElement(bb.tagName), bb);
        return wb || (Mb.flags |= 4), Mb
      }
    }
    class zM extends tM {
      constructor(bb, wb) {
        super(bb, wb.length), this.text = wb
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
      coordsIn(bb, wb) {
        let Mb = this.dom.nodeValue.length;
        bb > Mb && (bb = Mb);
        let eb = bb,
          Hb = bb,
          pb = 0;
        0 == bb && wb < 0 || bb == Mb && wb >= 0 ? xb.chrome || xb.gecko || (bb ? (eb--, pb = 1) : Hb < Mb && (Hb++, pb = -1)) : wb < 0 ? eb-- : Hb < Mb && Hb++;
        let Vb = ew(this.dom, eb, Hb).getClientRects();
        if (!Vb.length) return null;
        let gb = Vb[(pb ? pb < 0 : wb >= 0) ? 0 : Vb.length - 1];
        return xb.safari && !pb && 0 == gb.width && (gb = Array.prototype.find.call(Vb, (bb => bb.width)) || gb), pb ? nb(gb, pb < 0) : gb || null
      }
      static of (bb, wb) {
        let Mb = new zM(wb || document.createTextNode(bb), bb);
        return wb || (Mb.flags |= 2), Mb
      }
    }
    class XM extends tM {
      constructor(bb, wb, Mb, eb) {
        super(bb, wb, eb), this.widget = Mb
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
      coordsIn(bb, wb) {
        return this.coordsInWidget(bb, wb, !1)
      }
      coordsInWidget(bb, wb, Mb) {
        let eb = this.widget.coordsAt(this.dom, bb, wb);
        if (eb) return eb;
        if (Mb) return nb(this.dom.getBoundingClientRect(), this.length ? 0 == bb : wb <= 0);
        {
          let wb = this.dom.getClientRects(),
            Mb = null;
          if (!wb.length) return null;
          let eb = !!(16 & this.flags) || !(32 & this.flags) && bb > 0;
          for (let Hb = eb ? wb.length - 1 : 0; Mb = wb[Hb], !(bb > 0 ? 0 == Hb : Hb == wb.length - 1 || Mb.top < Mb.bottom); Hb += eb ? -1 : 1);
          return nb(Mb, !eb)
        }
      }
      get overrideDOMText() {
        if (!this.length) return eb.H.empty;
        let {
          root: bb
        } = this;
        if (!bb) return eb.H.empty;
        let wb = this.posAtStart;
        return bb.view.state.doc.slice(wb, wb + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (bb, wb, Mb, eb, Hb) {
        return Hb || (Hb = bb.toDOM(wb), bb.editable || (Hb.contentEditable = "false")), new XM(Hb, Mb, bb, eb)
      }
    }
    class xM extends tM {
      constructor(bb) {
        let wb = document.createElement("img");
        wb.className = "cm-widgetBuffer", wb.setAttribute("aria-hidden", "true"), super(wb, 0, bb)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return eb.H.empty
      }
      coordsIn(bb) {
        return this.dom.getBoundingClientRect()
      }
    }
    class jM {
      constructor(bb) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = bb
      }
      advance(bb, wb, Mb) {
        let {
          tile: eb,
          index: Hb,
          beforeBreak: pb,
          parents: Vb
        } = this;
        for (; bb || wb > 0;)
          if (eb.isComposite())
            if (pb) {
              if (!bb) break;
              Mb && Mb.break(), bb--, pb = !1
            } else if (Hb == eb.children.length) {
          if (!bb && !Vb.length) break;
          Mb && Mb.leave(eb), pb = !!eb.breakAfter, ({
            tile: eb,
            index: Hb
          } = Vb.pop()), Hb++
        } else {
          let gb = eb.children[Hb],
            lb = gb.breakAfter;
          !(wb > 0 ? gb.length <= bb : gb.length < bb) || Mb && !1 === Mb.skip(gb, 0, gb.length) && gb.isComposite ? (Vb.push({
            tile: eb,
            index: Hb
          }), eb = gb, Hb = 0, Mb && gb.isComposite() && Mb.enter(gb)) : (pb = !!lb, Hb++, bb -= gb.length)
        } else if (Hb == eb.length) pb = !!eb.breakAfter, ({
          tile: eb,
          index: Hb
        } = Vb.pop()), Hb++;
        else {
          if (!bb) break;
          {
            let wb = Math.min(bb, eb.length - Hb);
            Mb && Mb.skip(eb, Hb, Hb + wb), bb -= wb, Hb += wb
          }
        }
        return this.tile = eb, this.index = Hb, this.beforeBreak = pb, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class KM {
      constructor(bb, wb, Mb, eb) {
        this.from = bb, this.to = wb, this.wrapper = Mb, this.rank = eb
      }
    }
    class rM {
      constructor(bb, wb, Mb) {
        this.cache = bb, this.root = wb, this.blockWrappers = Mb, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(bb, wb, Mb, eb) {
        var Hb;
        this.flushBuffer();
        let pb = this.ensureMarks(wb, Mb),
          Vb = pb.lastChild;
        if (Vb && Vb.isText() && !(8 & Vb.flags) && Vb.length + bb.length < 512) {
          this.cache.reused.set(Vb, 2), (pb.children[pb.children.length - 1] = new zM(Vb.dom, Vb.text + bb)).parent = pb
        } else pb.append(eb || zM.of(bb, null === (Hb = this.cache.find(zM)) || void 0 === Hb ? void 0 : Hb.dom));
        this.pos += bb.length, this.afterWidget = null
      }
      addComposition(bb, wb) {
        let Mb = this.curLine;
        Mb.dom != wb.line.dom && (Mb.setDOM(this.cache.reused.has(wb.line) ? AM(wb.line.dom) : wb.line.dom), this.cache.reused.set(wb.line, 2));
        let eb = Mb;
        for (let Vb = wb.marks.length - 1; Vb >= 0; Vb--) {
          let bb = wb.marks[Vb],
            Mb = eb.lastChild;
          if (Mb instanceof hM && Mb.mark.eq(bb.mark)) Mb.dom != bb.dom && Mb.setDOM(AM(bb.dom)), eb = Mb;
          else {
            if (this.cache.reused.get(bb)) {
              let wb = tM.get(bb.dom);
              wb && wb.setDOM(AM(bb.dom))
            }
            let wb = hM.of(bb.mark, bb.dom);
            eb.append(wb), eb = wb
          }
          this.cache.reused.set(bb, 2)
        }
        let Hb = tM.get(bb.text);
        Hb && this.cache.reused.set(Hb, 2);
        let pb = new zM(bb.text, bb.text.nodeValue);
        pb.flags |= 8, eb.append(pb)
      }
      addInlineWidget(bb, wb, Mb) {
        let eb = this.afterWidget && 48 & bb.flags && (48 & this.afterWidget.flags) == (48 & bb.flags);
        eb || this.flushBuffer();
        let Hb = this.ensureMarks(wb, Mb);
        eb || 16 & bb.flags || Hb.append(this.getBuffer(1)), Hb.append(bb), this.pos += bb.length, this.afterWidget = bb
      }
      addMark(bb, wb, Mb) {
        this.flushBuffer(), this.ensureMarks(wb, Mb).append(bb), this.pos += bb.length, this.afterWidget = null
      }
      addBlockWidget(bb) {
        this.getBlockPos().append(bb), this.pos += bb.length, this.lastBlock = bb, this.endLine()
      }
      continueWidget(bb) {
        (this.afterWidget || this.lastBlock).length += bb, this.pos += bb
      }
      addLineStart(bb, wb) {
        var Mb;
        bb || (bb = fM);
        let eb = sM.start(bb, wb || (null === (Mb = this.cache.find(sM)) || void 0 === Mb ? void 0 : Mb.dom), !!wb);
        this.getBlockPos().append(this.lastBlock = this.curLine = eb)
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
      ensureMarks(bb, wb) {
        var Mb;
        let eb = this.curLine;
        for (let Hb = bb.length - 1; Hb >= 0; Hb--) {
          let pb, Vb = bb[Hb];
          if (wb > 0 && (pb = eb.lastChild) && pb instanceof hM && pb.mark.eq(Vb)) eb = pb, wb--;
          else {
            let bb = hM.of(Vb, null === (Mb = this.cache.find(hM, (bb => bb.mark.eq(Vb)))) || void 0 === Mb ? void 0 : Mb.dom);
            eb.append(bb), eb = bb, wb = 0
          }
        }
        return eb
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let bb = this.curLine.lastChild;
          bb && ZM(this.curLine, !1) && ("BR" == bb.dom.nodeName || !bb.isWidget() || xb.ios && ZM(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(JM, 0, 32) || new XM(JM.toDOM(), 0, JM, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let bb = this.wrappers.length - 1; bb >= 0; bb--) this.wrappers[bb].to < this.pos && this.wrappers.splice(bb, 1);
        for (let bb = this.blockWrappers; bb.value && bb.from <= this.pos; bb.next())
          if (bb.to >= this.pos) {
            let wb = new KM(bb.from, bb.to, bb.value, bb.rank),
              Mb = this.wrappers.length;
            for (; Mb > 0 && (this.wrappers[Mb - 1].rank - wb.rank || this.wrappers[Mb - 1].to - wb.to) < 0;) Mb--;
            this.wrappers.splice(Mb, 0, wb)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var bb;
        this.updateBlockWrappers();
        let wb = this.root;
        for (let Mb of this.wrappers) {
          let eb = wb.lastChild;
          if (Mb.from < this.pos && eb instanceof BM && eb.wrapper.eq(Mb.wrapper)) wb = eb;
          else {
            let eb = BM.of(Mb.wrapper, null === (bb = this.cache.find(BM, (bb => bb.wrapper.eq(Mb.wrapper)))) || void 0 === bb ? void 0 : bb.dom);
            wb.append(eb), wb = eb
          }
        }
        return wb
      }
      blockPosCovered() {
        let bb = this.lastBlock;
        return null != bb && !bb.breakAfter && (!bb.isWidget() || (160 & bb.flags) > 0)
      }
      getBuffer(bb) {
        let wb = 2 | (bb < 0 ? 16 : 32),
          Mb = this.cache.find(xM, void 0, 1);
        return Mb && (Mb.flags = wb), Mb || new xM(wb)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class RM {
      constructor(bb) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = bb.iter()
      }
      skip(bb) {
        this.textOff + bb <= this.text.length ? this.textOff += bb : (this.skipCount += bb - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(bb) {
        if (this.textOff == this.text.length) {
          let {
            value: wb,
            lineBreak: Mb,
            done: eb
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, eb) throw new Error("Ran out of text content when drawing inline views");
          this.text = wb;
          let Hb = this.textOff = Math.min(bb, wb.length);
          return Mb ? null : wb.slice(0, Hb)
        }
        let wb = Math.min(this.text.length, this.textOff + bb),
          Mb = this.text.slice(this.textOff, wb);
        return this.textOff = wb, Mb
      }
    }
    const DM = [XM, sM, zM, hM, xM, BM, FM];
    for (let fV = 0; fV < DM.length; fV++) DM[fV].bucket = fV;
    class cM {
      constructor(bb) {
        this.view = bb, this.buckets = DM.map((() => [])), this.index = DM.map((() => 0)), this.reused = new Map
      }
      add(bb) {
        let wb = bb.constructor.bucket,
          Mb = this.buckets[wb];
        Mb.length < 6 ? Mb.push(bb) : Mb[this.index[wb] = (this.index[wb] + 1) % 6] = bb
      }
      find(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          eb = bb.bucket,
          Hb = this.buckets[eb],
          pb = this.index[eb];
        for (let Vb = Hb.length - 1; Vb >= 0; Vb--) {
          let bb = (Vb + pb) % Hb.length,
            gb = Hb[bb];
          if ((!wb || wb(gb)) && !this.reused.has(gb)) return Hb.splice(bb, 1), bb < pb && this.index[eb]--, this.reused.set(gb, Mb), gb
        }
        return null
      }
      findWidget(bb, wb, Mb) {
        let eb = this.buckets[0];
        if (eb.length)
          for (let Hb = 0, pb = 0;; Hb++) {
            if (Hb == eb.length) {
              if (pb) return null;
              pb = 1, Hb = 0
            }
            let Vb = eb[Hb];
            if (!this.reused.has(Vb) && (0 == pb ? Vb.widget.compare(bb) : Vb.widget.constructor == bb.constructor && bb.updateDOM(Vb.dom, this.view, Vb.widget))) return eb.splice(Hb, 1), Hb < this.index[0] && this.index[0]--, Vb.widget == bb && Vb.length == wb && (497 & Vb.flags) == Mb ? (this.reused.set(Vb, 1), Vb) : (this.reused.set(Vb, 2), new XM(Vb.dom, wb, bb, -498 & Vb.flags | Mb))
          }
      }
      reuse(bb) {
        return this.reused.set(bb, 1), bb
      }
      maybeReuse(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(bb)) return this.reused.set(bb, wb), bb.dom
      }
      clear() {
        for (let bb = 0; bb < this.buckets.length; bb++) this.buckets[bb].length = this.index[bb] = 0
      }
    }
    class YM {
      constructor(bb, wb, Mb, Hb, pb) {
        this.view = bb, this.ze = Hb, this.disallowBlockEffectsFor = pb, this.openWidget = !1, this.openMarks = 0, this.cache = new cM(bb), this.text = new RM(bb.state.doc), this.builder = new rM(this.cache, new FM(bb, bb.contentDOM), eb.B.iter(Mb)), this.cache.reused.set(wb, 2), this.old = new jM(wb), this.reuseWalker = {
          skip: (bb, wb, Mb) => {
            if (this.cache.add(bb), bb.isComposite()) return !1
          },
          enter: bb => this.cache.add(bb),
          leave: () => {},
          break: () => {}
        }
      }
      run(bb, wb) {
        let Mb = wb && this.getCompositionContext(wb.text);
        for (let eb = 0, Hb = 0, pb = 0;;) {
          let Vb = pb < bb.length ? bb[pb++] : null,
            gb = Vb ? Vb.fromA : this.old.root.length;
          if (gb > eb) {
            let bb = gb - eb;
            this.preserve(bb, !pb, !Vb), eb = gb, Hb += bb
          }
          if (!Vb) break;
          wb && Vb.fromA <= wb.range.fromA && Vb.toA >= wb.range.toA ? (this.forward(Vb.fromA, wb.range.fromA, wb.range.fromA < wb.range.toA ? 1 : -1), this.emit(Hb, wb.range.fromB), this.cache.clear(), this.builder.addComposition(wb, Mb), this.text.skip(wb.range.toB - wb.range.fromB), this.forward(wb.range.fromA, Vb.toA), this.emit(wb.range.toB, Vb.toB)) : (this.forward(Vb.fromA, Vb.toA), this.emit(Hb, Vb.toB)), Hb = Vb.toB, eb = Vb.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(bb, wb, Mb) {
        let eb = function(bb) {
            let wb = [];
            for (let Mb = bb.parents.length; Mb > 1; Mb--) {
              let eb = Mb == bb.parents.length ? bb.tile : bb.parents[Mb].tile;
              eb instanceof hM && wb.push(eb.mark)
            }
            return wb
          }(this.old),
          Hb = this.openMarks;
        this.old.advance(bb, Mb ? 1 : -1, {
          skip: (bb, wb, Mb) => {
            if (bb.isWidget())
              if (this.openWidget) this.builder.continueWidget(Mb - wb);
              else {
                let pb = Mb > 0 || wb < bb.length ? XM.of(bb.widget, this.view, Mb - wb, 496 & bb.flags, this.cache.maybeReuse(bb)) : this.cache.reuse(bb);
                256 & pb.flags ? (pb.flags &= -2, this.builder.addBlockWidget(pb)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(pb, eb, Hb), Hb = eb.length)
              }
            else if (bb.isText()) this.builder.ensureLine(null), wb || Mb != bb.length || this.cache.reused.has(bb) ? (this.cache.add(bb), this.builder.addText(bb.text.slice(wb, Mb), eb, Hb)) : this.builder.addText(bb.text, eb, Hb, this.cache.reuse(bb)), Hb = eb.length;
            else if (bb.isLine()) bb.flags &= -2, this.cache.reused.set(bb, 1), this.builder.addLine(bb);
            else if (bb instanceof xM) this.cache.add(bb);
            else {
              if (!(bb instanceof hM)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(bb, eb, Hb), this.cache.reused.set(bb, 1), Hb = eb.length
            }
            this.openWidget = !1
          },
          enter: bb => {
            bb.isLine() ? this.builder.addLineStart(bb.attrs, this.cache.maybeReuse(bb)) : (this.cache.add(bb), bb instanceof hM && eb.unshift(bb.mark)), this.openWidget = !1
          },
          leave: bb => {
            bb.isLine() ? eb.length && (eb.length = Hb = 0) : bb instanceof hM && (eb.shift(), Hb = Math.min(Hb, eb.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(bb)
      }
      emit(bb, wb) {
        let Mb = null,
          Hb = this.builder,
          pb = 0,
          Vb = eb.B.spans(this.ze, bb, wb, {
            point: (bb, wb, eb, Vb, gb, lb) => {
              if (eb instanceof Wb) {
                if (this.disallowBlockEffectsFor[lb]) {
                  if (eb.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (wb > this.view.state.doc.lineAt(bb).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (pb = Vb.length, gb > Vb.length) Hb.continueWidget(wb - bb);
                else {
                  let pb = eb.widget || (eb.block ? WM.block : WM.inline),
                    lb = function(bb) {
                      let wb = bb.isReplace ? (bb.startSide < 0 ? 64 : 0) | (bb.endSide > 0 ? 128 : 0) : bb.startSide > 0 ? 32 : 16;
                      bb.block && (wb |= 256);
                      return wb
                    }(eb),
                    Lb = this.cache.findWidget(pb, wb - bb, lb) || XM.of(pb, this.view, wb - bb, lb);
                  eb.block ? (eb.startSide > 0 && Hb.addLineStartIfNotCovered(Mb), Hb.addBlockWidget(Lb)) : (Hb.ensureLine(Mb), Hb.addInlineWidget(Lb, Vb, gb))
                }
                Mb = null
              } else Mb = function(bb, wb) {
                let Mb = wb.spec.attributes,
                  eb = wb.spec.class;
                if (!Mb && !eb) return bb;
                bb || (bb = {
                  class: "cm-line"
                });
                Mb && jb(Mb, bb);
                eb && (bb.class += " " + eb);
                return bb
              }(Mb, eb);
              wb > bb && this.text.skip(wb - bb)
            },
            span: (bb, wb, eb, pb) => {
              for (let Vb = bb; Vb < wb;) {
                let gb = this.text.next(Math.min(512, wb - Vb));
                null == gb ? (Hb.addLineStartIfNotCovered(Mb), Hb.addBreak(), Vb++) : (Hb.ensureLine(Mb), Hb.addText(gb, eb, Vb == bb ? pb : eb.length), Vb += gb.length), Mb = null
              }
            }
          });
        Hb.addLineStartIfNotCovered(Mb), this.openWidget = Vb > pb, this.openMarks = Vb
      }
      forward(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        wb - bb <= 10 ? this.old.advance(wb - bb, Mb, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(wb - bb - 10, -1), this.old.advance(5, Mb, this.reuseWalker))
      }
      getCompositionContext(bb) {
        let wb = [],
          Mb = null;
        for (let eb = bb.parentNode;; eb = eb.parentNode) {
          let bb = tM.get(eb);
          if (eb == this.view.contentDOM) break;
          bb instanceof hM ? wb.push(bb) : (null === bb || void 0 === bb ? void 0 : bb.isLine()) ? Mb = bb : bb instanceof BM || ("DIV" != eb.nodeName || Mb || eb == this.view.contentDOM ? Mb || wb.push(hM.of(new fb({
            tagName: eb.nodeName.toLowerCase(),
            attributes: Db(eb)
          }), eb)) : Mb = new sM(eb, fM))
        }
        return {
          line: Mb,
          marks: wb
        }
      }
    }

    function ZM(bb, wb) {
      let Mb = bb => {
        for (let eb of bb.children)
          if ((wb ? eb.isText() : eb.length) || Mb(eb)) return !0;
        return !1
      };
      return Mb(bb)
    }
    const fM = {
      class: "cm-line"
    };

    function AM(bb) {
      let wb = tM.get(bb);
      return wb && wb.setDOM(bb.cloneNode()), bb
    }
    class WM extends cb {
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
    WM.inline = new WM("span"), WM.block = new WM("div");
    const JM = new class extends cb {
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
    class SM {
      constructor(bb) {
        this.view = bb, this.ze = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Zb.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new FM(bb, bb.contentDOM), this.updateInner([new IM(0, 0, 0, bb.state.doc.length)], null)
      }
      update(bb) {
        var wb;
        let Mb = bb.changedRanges;
        this.minWidth > 0 && Mb.length && (Mb.every((bb => {
          let {
            fromA: wb,
            toA: Mb
          } = bb;
          return Mb < this.minWidthFrom || wb > this.minWidthTo
        })) ? (this.minWidthFrom = bb.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = bb.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(bb);
        let Hb = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (wb = this.domChanged) || void 0 === wb ? void 0 : wb.newSel) ? Hb = this.domChanged.newSel.head : function(bb, wb) {
          let Mb = !1;
          wb && bb.iterChangedRanges(((bb, eb) => {
            bb < wb.to && eb > wb.from && (Mb = !0)
          }));
          return Mb
        }(bb.changes, this.hasComposition) || bb.selectionSet || (Hb = bb.state.selection.main.head));
        let pb = Hb > -1 ? function(bb, wb, Mb) {
          let eb = vM(bb, Mb);
          if (!eb) return null;
          let {
            node: Hb,
            from: pb,
            to: Vb
          } = eb, gb = Hb.nodeValue;
          if (/[\n\r]/.test(gb)) return null;
          if (bb.state.doc.sliceString(eb.from, eb.to) != gb) return null;
          let lb = wb.invertedDesc;
          return {
            range: new IM(lb.mapPos(pb), lb.mapPos(Vb), pb, Vb),
            text: Hb
          }
        }(this.view, bb.changes, Hb) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: wb,
            to: eb
          } = this.hasComposition;
          Mb = new IM(wb, eb, bb.changes.mapPos(wb, -1), bb.changes.mapPos(eb, 1)).addToSet(Mb.slice())
        }
        this.hasComposition = pb ? {
          from: pb.range.fromB,
          to: pb.range.toB
        } : null, (xb.ie || xb.chrome) && !pb && bb && bb.state.doc.lines != bb.startState.doc.lines && (this.forceSelection = !0);
        let Vb = this.ze,
          gb = this.blockWrappers;
        this.updateDeco();
        let lb = function(bb, wb, Mb) {
          let Hb = new QM;
          return eb.B.compare(bb, wb, Mb, Hb), Hb.changes
        }(Vb, this.ze, bb.changes);
        lb.length && (Mb = IM.extendWithRanges(Mb, lb));
        let Lb = function(bb, wb, Mb) {
          let Hb = new GM;
          return eb.B.compare(bb, wb, Mb, Hb), Hb.changes
        }(gb, this.blockWrappers, bb.changes);
        return Lb.length && (Mb = IM.extendWithRanges(Mb, Lb)), pb && !Mb.some((bb => bb.fromA <= pb.range.fromA && bb.toA >= pb.range.toA)) && (Mb = pb.range.addToSet(Mb.slice())), !(2 & this.tile.flags && 0 == Mb.length) && (this.updateInner(Mb, pb), bb.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(bb, wb) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: Mb
        } = this.view;
        Mb.ignore((() => {
          if (wb || bb.length) {
            let Mb = this.tile,
              eb = new YM(this.view, Mb, this.blockWrappers, this.ze, this.dynamicDecorationMap);
            wb && tM.get(wb.text) && eb.cache.reused.set(tM.get(wb.text), 2), this.tile = eb.run(bb, wb), NM(Mb, eb.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let eb = xb.chrome || xb.ios ? {
            node: Mb.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(eb), !eb || !eb.written && Mb.selectionRange.focusNode == eb.node && this.tile.dom.contains(eb.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let eb = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let Hb of this.tile.children) Hb.isWidget() && Hb.widget instanceof qM && eb.push(Hb.dom);
        Mb.updateGaps(eb)
      }
      updateEditContextFormatting(bb) {
        this.editContextFormatting = this.editContextFormatting.map(bb.changes);
        for (let wb of bb.transactions)
          for (let bb of wb.effects) bb.is(uw) && (this.editContextFormatting = bb.value)
      }
      updateSelection() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: wb
        } = this.tile, Mb = this.view.root.activeElement, eb = Mb == wb, Hb = !eb && !(this.view.state.facet(Pw) || wb.tabIndex > -1) && Gb(wb, this.view.observer.selectionRange) && !(Mb && wb.contains(Mb));
        if (!(eb || bb || Hb)) return;
        let pb = this.forceSelection;
        this.forceSelection = !1;
        let Vb, gb, lb = this.view.state.selection.main;
        if (lb.empty ? gb = Vb = this.inlineDOMNearPos(lb.anchor, lb.assoc || 1) : (gb = this.inlineDOMNearPos(lb.head, lb.head == lb.from ? 1 : -1), Vb = this.inlineDOMNearPos(lb.anchor, lb.anchor == lb.from ? 1 : -1)), xb.gecko && lb.empty && !this.hasComposition && (1 == (Lb = Vb).node.nodeType && Lb.node.firstChild && (0 == Lb.offset || "false" == Lb.node.childNodes[Lb.offset - 1].contentEditable) && (Lb.offset == Lb.node.childNodes.length || "false" == Lb.node.childNodes[Lb.offset].contentEditable))) {
          let bb = document.createTextNode("");
          this.view.observer.ignore((() => Vb.node.insertBefore(bb, Vb.node.childNodes[Vb.offset] || null))), Vb = gb = new lw(bb, 0), pb = !0
        }
        var Lb;
        let Ib = this.view.observer.selectionRange;
        !pb && Ib.focusNode && (ab(Vb.node, Vb.offset, Ib.anchorNode, Ib.anchorOffset) && ab(gb.node, gb.offset, Ib.focusNode, Ib.focusOffset) || this.suppressWidgetCursorChange(Ib, lb)) || (this.view.observer.ignore((() => {
          xb.android && xb.chrome && wb.contains(Ib.focusNode) && function(bb, wb) {
            for (let Mb = bb; Mb && Mb != wb; Mb = Mb.assignedSlot || Mb.parentNode)
              if (1 == Mb.nodeType && "false" == Mb.contentEditable) return !0;
            return !1
          }(Ib.focusNode, wb) && (wb.blur(), wb.focus({
            preventScroll: !0
          }));
          let bb = vb(this.view.root);
          if (bb)
            if (lb.empty) {
              if (xb.gecko) {
                let bb = (eb = Vb.node, pb = Vb.offset, 1 != eb.nodeType ? 0 : (pb && "false" == eb.childNodes[pb - 1].contentEditable ? 1 : 0) | (pb < eb.childNodes.length && "false" == eb.childNodes[pb].contentEditable ? 2 : 0));
                if (bb && 3 != bb) {
                  let wb = (1 == bb ? Vw : gw)(Vb.node, Vb.offset);
                  wb && (Vb = new lw(wb.node, wb.offset))
                }
              }
              bb.collapse(Vb.node, Vb.offset), null != lb.bidiLevel && void 0 !== bb.caretBidiLevel && (bb.caretBidiLevel = lb.bidiLevel)
            } else if (bb.extend) {
            bb.collapse(Vb.node, Vb.offset);
            try {
              bb.extend(gb.node, gb.offset)
            } catch (Lb) {}
          } else {
            let wb = document.createRange();
            lb.anchor > lb.head && ([Vb, gb] = [gb, Vb]), wb.setEnd(gb.node, gb.offset), wb.setStart(Vb.node, Vb.offset), bb.removeAllRanges(), bb.addRange(wb)
          } else;
          var eb, pb;
          Hb && this.view.root.activeElement == wb && (wb.blur(), Mb && Mb.focus())
        })), this.view.observer.setSelectionRange(Vb, gb)), this.impreciseAnchor = Vb.precise ? null : new lw(Ib.anchorNode, Ib.anchorOffset), this.impreciseHead = gb.precise ? null : new lw(Ib.focusNode, Ib.focusOffset)
      }
      suppressWidgetCursorChange(bb, wb) {
        return this.hasComposition && wb.empty && ab(bb.focusNode, bb.focusOffset, bb.anchorNode, bb.anchorOffset) && this.posFromDOM(bb.focusNode, bb.focusOffset) == wb.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: bb
        } = this, wb = bb.state.selection.main, Mb = vb(bb.root), {
          anchorNode: eb,
          anchorOffset: Hb
        } = bb.observer.selectionRange;
        if (!Mb || !wb.empty || !wb.assoc || !Mb.modify) return;
        let pb = this.lineAt(wb.head, wb.assoc);
        if (!pb) return;
        let Vb = pb.posAtStart;
        if (wb.head == Vb || wb.head == Vb + pb.length) return;
        let gb = this.coordsAt(wb.head, -1),
          lb = this.coordsAt(wb.head, 1);
        if (!gb || !lb || gb.bottom > lb.top) return;
        let Lb = this.domAtPos(wb.head + wb.assoc, wb.assoc);
        Mb.collapse(Lb.node, Lb.offset), Mb.modify("move", wb.assoc < 0 ? "forward" : "backward", "lineboundary"), bb.observer.readSelectionRange();
        let Ib = bb.observer.selectionRange;
        bb.docView.posFromDOM(Ib.anchorNode, Ib.anchorOffset) != wb.from && Mb.collapse(eb, Hb)
      }
      posFromDOM(bb, wb) {
        let Mb = this.tile.nearest(bb);
        if (!Mb) return 2 & this.tile.dom.compareDocumentPosition(bb) ? 0 : this.view.state.doc.length;
        let eb = Mb.posAtStart;
        if (!Mb.isComposite()) return Mb.isText() ? bb == Mb.dom ? eb + wb : eb + (wb ? Mb.length : 0) : eb;
        {
          let Hb;
          if (bb == Mb.dom) Hb = Mb.dom.childNodes[wb];
          else {
            let eb = 0 == Pb(bb) ? 0 : 0 == wb ? -1 : 1;
            for (;;) {
              let wb = bb.parentNode;
              if (wb == Mb.dom) break;
              0 == eb && wb.firstChild != wb.lastChild && (eb = bb == wb.firstChild ? -1 : 1), bb = wb
            }
            Hb = eb < 0 ? bb : bb.nextSibling
          }
          if (Hb == Mb.dom.firstChild) return eb;
          for (; Hb && !tM.get(Hb);) Hb = Hb.nextSibling;
          if (!Hb) return eb + Mb.length;
          for (let bb = 0, wb = eb;; bb++) {
            let eb = Mb.children[bb];
            if (eb.dom == Hb) return wb;
            wb += eb.length + eb.breakAfter
          }
        }
      }
      domAtPos(bb, wb) {
        let {
          tile: Mb,
          offset: eb
        } = this.tile.resolveBlock(bb, wb);
        return Mb.isWidget() ? Mb.domPosFor(bb, wb) : Mb.domIn(eb, wb)
      }
      inlineDOMNearPos(bb, wb) {
        let Mb, eb, Hb = -1,
          pb = !1,
          Vb = -1,
          gb = !1;
        return this.tile.blockTiles(((wb, lb) => {
          if (wb.isWidget()) {
            if (32 & wb.flags && lb >= bb) return !0;
            16 & wb.flags && (pb = !0)
          } else {
            let Lb = lb + wb.length;
            if (lb <= bb && (Mb = wb, Hb = bb - lb, pb = Lb < bb), Lb >= bb && !eb && (eb = wb, Vb = bb - lb, gb = lb > bb), lb > bb && eb) return !0
          }
        })), Mb || eb ? (pb && eb ? Mb = null : gb && Mb && (eb = null), Mb && wb < 0 || !eb ? Mb.domIn(Hb, wb) : eb.domIn(Vb, wb)) : this.domAtPos(bb, wb)
      }
      coordsAt(bb, wb) {
        let {
          tile: Mb,
          offset: eb
        } = this.tile.resolveBlock(bb, wb);
        return Mb.isWidget() ? Mb.widget instanceof qM ? null : Mb.coordsInWidget(eb, wb, !0) : Mb.coordsIn(eb, wb)
      }
      lineAt(bb, wb) {
        let {
          tile: Mb
        } = this.tile.resolveBlock(bb, wb);
        return Mb.isLine() ? Mb : null
      }
      coordsForChar(bb) {
        let {
          tile: wb,
          offset: Mb
        } = this.tile.resolveBlock(bb, 1);
        if (!wb.isLine()) return null;
        return function bb(wb, Mb) {
          if (wb.isComposite())
            for (let eb of wb.children) {
              if (eb.length >= Mb) {
                let wb = bb(eb, Mb);
                if (wb) return wb
              }
              if ((Mb -= eb.length) < 0) break
            } else if (wb.isText() && Mb < wb.length) {
              let bb = (0, eb.U)(wb.text, Mb);
              if (bb == Mb) return null;
              let Hb = ew(wb.dom, Mb, bb).getClientRects();
              for (let wb = 0; wb < Hb.length; wb++) {
                let bb = Hb[wb];
                if (wb == Hb.length - 1 || bb.top < bb.bottom && bb.left < bb.right) return bb
              }
            } return null
        }(wb, Mb)
      }
      measureVisibleLineHeights(bb) {
        let wb = [],
          {
            from: Mb,
            to: eb
          } = bb,
          Hb = this.view.contentDOM.clientWidth,
          pb = Hb > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          Vb = -1,
          gb = this.view.textDirection == Lw.LTR,
          lb = 0,
          Lb = (bb, Ib, Ob) => {
            for (let Ub = 0; Ub < bb.children.length && !(Ib > eb); Ub++) {
              let eb = bb.children[Ub],
                tb = Ib + eb.length,
                Cb = eb.dom.getBoundingClientRect(),
                {
                  height: Eb
                } = Cb;
              if (Ob && !Ub && (lb += Cb.top - Ob.top), eb instanceof BM) tb > Mb && Lb(eb, Ib, Cb);
              else if (Ib >= Mb && (lb > 0 && wb.push(-lb), wb.push(Eb + lb), lb = 0, pb)) {
                let bb = eb.dom.lastChild,
                  wb = bb ? qb(bb) : [];
                if (wb.length) {
                  let bb = wb[wb.length - 1],
                    Mb = gb ? bb.right - Cb.left : Cb.right - bb.left;
                  Mb > Vb && (Vb = Mb, this.minWidth = Hb, this.minWidthFrom = Ib, this.minWidthTo = tb)
                }
              }
              Ob && Ub == bb.children.length - 1 && (lb += Ob.bottom - Cb.bottom), Ib = tb + eb.breakAfter
            }
          };
        return Lb(this.tile, 0, null), wb
      }
      textDirectionAt(bb) {
        let {
          tile: wb
        } = this.tile.resolveBlock(bb, 1);
        return "rtl" == getComputedStyle(wb.dom).direction ? Lw.RTL : Lw.LTR
      }
      measureTextSize() {
        let bb = this.tile.blockTiles((bb => {
          if (bb.isLine() && bb.children.length && bb.length <= 20) {
            let wb, Mb = 0;
            for (let eb of bb.children) {
              if (!eb.isText() || /[^ -~]/.test(eb.text)) return;
              let bb = qb(eb.dom);
              if (1 != bb.length) return;
              Mb += bb[0].width, wb = bb[0].height
            }
            if (Mb) return {
              lineHeight: bb.dom.getBoundingClientRect().height,
              charWidth: Mb / bb.length,
              textHeight: wb
            }
          }
        }));
        if (bb) return bb;
        let wb, Mb, eb, Hb = document.createElement("div");
        return Hb.className = "cm-line", Hb.style.width = "99999px", Hb.style.position = "absolute", Hb.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(Hb);
          let bb = qb(Hb.firstChild)[0];
          wb = Hb.getBoundingClientRect().height, Mb = bb && bb.width ? bb.width / 27 : 7, eb = bb && bb.height ? bb.height : wb, Hb.remove()
        })), {
          lineHeight: wb,
          charWidth: Mb,
          textHeight: eb
        }
      }
      computeBlockGapDeco() {
        let bb = [],
          wb = this.view.viewState;
        for (let Mb = 0, eb = 0;; eb++) {
          let Hb = eb == wb.viewports.length ? null : wb.viewports[eb],
            pb = Hb ? Hb.from - 1 : this.view.state.doc.length;
          if (pb > Mb) {
            let eb = (wb.lineBlockAt(pb).bottom - wb.lineBlockAt(Mb).top) / this.view.scaleY;
            bb.push(Zb.replace({
              widget: new qM(eb),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(Mb, pb))
          }
          if (!Hb) break;
          Mb = Hb.to + 1
        }
        return Zb.set(bb)
      }
      updateDeco() {
        let bb = 1,
          wb = this.view.state.facet(wM).map((wb => (this.dynamicDecorationMap[bb++] = "function" == typeof wb) ? wb(this.view) : wb)),
          Mb = !1,
          Hb = this.view.state.facet(eM).map(((bb, wb) => {
            let eb = "function" == typeof bb;
            return eb && (Mb = !0), eb ? bb(this.view) : bb
          }));
        for (Hb.length && (this.dynamicDecorationMap[bb++] = Mb, wb.push(eb.B.join(Hb))), this.ze = [this.editContextFormatting, ...wb, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; bb < this.ze.length;) this.dynamicDecorationMap[bb++] = !1;
        this.blockWrappers = this.view.state.facet(MM).map((bb => "function" == typeof bb ? bb(this.view) : bb))
      }
      scrollIntoView(bb) {
        var wb;
        if (bb.isSnapshot) {
          let wb = this.view.viewState.lineBlockAt(bb.range.head);
          return this.view.scrollDOM.scrollTop = wb.top - bb.yMargin, void(this.view.scrollDOM.scrollLeft = bb.xMargin)
        }
        for (let Ib of this.view.state.facet(qw)) try {
          if (Ib(this.view, bb.range, bb)) return !0
        } catch (Lb) {
          dw(this.view.state, Lb, "scroll handler")
        }
        let Mb, {
            range: eb
          } = bb,
          Hb = this.coordsAt(eb.head, null !== (wb = eb.assoc) && void 0 !== wb ? wb : eb.empty ? 0 : eb.head > eb.anchor ? -1 : 1);
        if (!Hb) return;
        !eb.empty && (Mb = this.coordsAt(eb.anchor, eb.anchor > eb.head ? -1 : 1)) && (Hb = {
          left: Math.min(Hb.left, Mb.left),
          top: Math.min(Hb.top, Mb.top),
          right: Math.max(Hb.right, Mb.right),
          bottom: Math.max(Hb.bottom, Mb.bottom)
        });
        let pb = lM(this.view),
          Vb = {
            left: Hb.left - pb.left,
            top: Hb.top - pb.top,
            right: Hb.right + pb.right,
            bottom: Hb.bottom + pb.bottom
          },
          {
            offsetWidth: gb,
            offsetHeight: lb
          } = this.view.scrollDOM;
        if (function(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
            let lb = bb.ownerDocument,
              Lb = lb.defaultView || window;
            for (let Ib = bb, Ob = !1; Ib && !Ob;)
              if (1 == Ib.nodeType) {
                let bb, Ub = Ib == lb.body,
                  tb = 1,
                  Cb = 1;
                if (Ub) bb = yb(Lb);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(Ib).position) && (Ob = !0), Ib.scrollHeight <= Ib.clientHeight && Ib.scrollWidth <= Ib.clientWidth) {
                    Ib = Ib.assignedSlot || Ib.parentNode;
                    continue
                  }
                  let wb = Ib.getBoundingClientRect();
                  ({
                    scaleX: tb,
                    scaleY: Cb
                  } = ob(Ib, wb)), bb = {
                    left: wb.left,
                    right: wb.left + Ib.clientWidth * tb,
                    top: wb.top,
                    bottom: wb.top + Ib.clientHeight * Cb
                  }
                }
                let Eb = 0,
                  Fb = 0;
                if ("nearest" == Hb) wb.top < bb.top + Vb ? (Fb = wb.top - (bb.top + Vb), Mb > 0 && wb.bottom > bb.bottom + Fb && (Fb = wb.bottom - bb.bottom + Vb)) : wb.bottom > bb.bottom - Vb && (Fb = wb.bottom - bb.bottom + Vb, Mb < 0 && wb.top - Fb < bb.top && (Fb = wb.top - (bb.top + Vb)));
                else {
                  let eb = wb.bottom - wb.top,
                    pb = bb.bottom - bb.top;
                  Fb = ("center" == Hb && eb <= pb ? wb.top + eb / 2 - pb / 2 : "start" == Hb || "center" == Hb && Mb < 0 ? wb.top - Vb : wb.bottom - pb + Vb) - bb.top
                }
                if ("nearest" == eb ? wb.left < bb.left + pb ? (Eb = wb.left - (bb.left + pb), Mb > 0 && wb.right > bb.right + Eb && (Eb = wb.right - bb.right + pb)) : wb.right > bb.right - pb && (Eb = wb.right - bb.right + pb, Mb < 0 && wb.left < bb.left + Eb && (Eb = wb.left - (bb.left + pb))) : Eb = ("center" == eb ? wb.left + (wb.right - wb.left) / 2 - (bb.right - bb.left) / 2 : "start" == eb == gb ? wb.left - pb : wb.right - (bb.right - bb.left) + pb) - bb.left, Eb || Fb)
                  if (Ub) Lb.scrollBy(Eb, Fb);
                  else {
                    let bb = 0,
                      Mb = 0;
                    if (Fb) {
                      let bb = Ib.scrollTop;
                      Ib.scrollTop += Fb / Cb, Mb = (Ib.scrollTop - bb) * Cb
                    }
                    if (Eb) {
                      let wb = Ib.scrollLeft;
                      Ib.scrollLeft += Eb / tb, bb = (Ib.scrollLeft - wb) * tb
                    }
                    wb = {
                      left: wb.left - bb,
                      top: wb.top - Mb,
                      right: wb.right - bb,
                      bottom: wb.bottom - Mb
                    }, bb && Math.abs(bb - Eb) < 1 && (eb = "nearest"), Mb && Math.abs(Mb - Fb) < 1 && (Hb = "nearest")
                  } if (Ub) break;
                (wb.top < bb.top || wb.bottom > bb.bottom || wb.left < bb.left || wb.right > bb.right) && (wb = {
                  left: Math.max(wb.left, bb.left),
                  right: Math.min(wb.right, bb.right),
                  top: Math.max(wb.top, bb.top),
                  bottom: Math.min(wb.bottom, bb.bottom)
                }), Ib = Ib.assignedSlot || Ib.parentNode
              } else {
                if (11 != Ib.nodeType) break;
                Ib = Ib.host
              }
          }(this.view.scrollDOM, Vb, eb.head < eb.anchor ? -1 : 1, bb.x, bb.y, Math.max(Math.min(bb.xMargin, gb), -gb), Math.max(Math.min(bb.yMargin, lb), -lb), this.view.textDirection == Lw.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (Hb.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || Hb.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let bb = this.view.docView.lineAt(eb.head, 1);
          bb && bb.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(bb) {
        let wb = bb => bb.isWidget() || bb.children.some(wb);
        return wb(this.tile.resolveBlock(bb, 1).tile)
      }
      destroy() {
        NM(this.tile)
      }
    }

    function NM(bb, wb) {
      let Mb = null === wb || void 0 === wb ? void 0 : wb.get(bb);
      if (1 != Mb) {
        null == Mb && bb.destroy();
        for (let Mb of bb.children) NM(Mb, wb)
      }
    }

    function vM(bb, wb) {
      let Mb = bb.observer.selectionRange;
      if (!Mb.focusNode) return null;
      let eb = Vw(Mb.focusNode, Mb.focusOffset),
        Hb = gw(Mb.focusNode, Mb.focusOffset),
        pb = eb || Hb;
      if (Hb && eb && Hb.node != eb.node) {
        let wb = tM.get(Hb.node);
        if (!wb || wb.isText() && wb.text != Hb.node.nodeValue) pb = Hb;
        else if (bb.docView.lastCompositionAfterCursor) {
          let bb = tM.get(eb.node);
          !bb || bb.isText() && bb.text != eb.node.nodeValue || (pb = Hb)
        }
      }
      if (bb.docView.lastCompositionAfterCursor = pb != eb, !pb) return null;
      let Vb = wb - pb.offset;
      return {
        from: Vb,
        to: Vb + pb.node.nodeValue.length,
        node: pb.node
      }
    }
    let QM = class {
      constructor() {
        this.changes = []
      }
      compareRange(bb, wb) {
        Sb(bb, wb, this.changes)
      }
      comparePoint(bb, wb) {
        Sb(bb, wb, this.changes)
      }
      boundChange(bb) {
        Sb(bb, bb, this.changes)
      }
    };
    class GM {
      constructor() {
        this.changes = []
      }
      compareRange(bb, wb) {
        Sb(bb, wb, this.changes)
      }
      comparePoint() {}
      boundChange(bb) {
        Sb(bb, bb, this.changes)
      }
    }
    class qM extends cb {
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

    function aM(bb, wb, Mb) {
      let eb = bb.lineBlockAt(wb);
      if (Array.isArray(eb.type)) {
        let bb;
        for (let Hb of eb.type) {
          if (Hb.from > wb) break;
          if (!(Hb.to < wb)) {
            if (Hb.from < wb && Hb.to > wb) return Hb;
            bb && (Hb.type != Yb.Text || bb.type == Hb.type && !(Mb < 0 ? Hb.from < wb : Hb.to > wb)) || (bb = Hb)
          }
        }
        return bb || eb
      }
      return eb
    }

    function iM(bb, wb, Mb, eb) {
      let Hb = bb.state.doc.lineAt(wb.head),
        pb = bb.bidiSpans(Hb),
        Vb = bb.textDirectionAt(Hb.from);
      for (let gb = wb, lb = null;;) {
        let wb = Rw(Hb, pb, Vb, gb, Mb),
          Lb = rw;
        if (!wb) {
          if (Hb.number == (Mb ? bb.state.doc.lines : 1)) return gb;
          Lb = "\n", Hb = bb.state.doc.line(Hb.number + (Mb ? 1 : -1)), pb = bb.bidiSpans(Hb), wb = bb.visualLineSide(Hb, !Mb)
        }
        if (lb) {
          if (!lb(Lb)) return gb
        } else {
          if (!eb) return wb;
          lb = eb(Lb)
        }
        gb = wb
      }
    }

    function uM(bb, wb, Mb) {
      for (;;) {
        let eb = 0;
        for (let Hb of bb) Hb.between(wb - 1, wb + 1, ((bb, Hb, pb) => {
          if (wb > bb && wb < Hb) {
            let pb = eb || Mb || (wb - bb < Hb - wb ? -1 : 1);
            wb = pb < 0 ? bb : Hb, eb = pb
          }
        }));
        if (!eb) return wb
      }
    }

    function dM(bb, wb) {
      let Mb = null;
      for (let Hb = 0; Hb < wb.gF.length; Hb++) {
        let pb = wb.gF[Hb],
          Vb = null;
        if (pb.empty) {
          let wb = uM(bb, pb.from, 0);
          wb != pb.from && (Vb = eb.j.cursor(wb, -1))
        } else {
          let wb = uM(bb, pb.from, -1),
            Mb = uM(bb, pb.to, 1);
          wb == pb.from && Mb == pb.to || (Vb = eb.j.range(pb.from == pb.anchor ? wb : Mb, pb.from == pb.head ? wb : Mb))
        }
        Vb && (Mb || (Mb = wb.gF.slice()), Mb[Hb] = Vb)
      }
      return Mb ? eb.j.create(Mb, wb.mainIndex) : wb
    }

    function PM(bb, wb, Mb) {
      let Hb = uM(bb.state.facet(HM).map((wb => wb(bb))), Mb.from, wb.head > Mb.from ? -1 : 1);
      return Hb == Mb.from ? Mb : eb.j.cursor(Hb, Hb < Mb.from ? 1 : -1)
    }
    class nM {
      constructor(bb, wb) {
        this.pos = bb, this.assoc = wb
      }
    }

    function yM(bb, wb, Mb, Hb) {
      let pb, Vb = bb.contentDOM.getBoundingClientRect(),
        gb = Vb.top + bb.viewState.paddingTop,
        {
          x: lb,
          y: Lb
        } = wb,
        Ib = Lb - gb;
      for (;;) {
        if (Ib < 0) return new nM(0, 1);
        if (Ib > bb.viewState.docHeight) return new nM(bb.state.doc.length, -1);
        if (pb = bb.elementAtHeight(Ib), null == Hb) break;
        if (pb.type == Yb.Text) {
          if (Hb < 0 ? pb.to < bb.viewport.from : pb.from > bb.viewport.to) break;
          let wb = bb.docView.coordsAt(Hb < 0 ? pb.from : pb.to, Hb > 0 ? -1 : 1);
          if (wb && (Hb < 0 ? wb.top <= Ib + gb : wb.bottom >= Ib + gb)) break
        }
        let wb = bb.viewState.heightOracle.textHeight / 2;
        Ib = Hb > 0 ? pb.bottom + wb : pb.top - wb
      }
      if (bb.viewport.from >= pb.to || bb.viewport.to <= pb.from) {
        if (Mb) return null;
        if (pb.type == Yb.Text) {
          let wb = function(bb, wb, Mb, Hb, pb) {
            let Vb = Math.round((Hb - wb.left) * bb.defaultCharacterWidth);
            if (bb.lineWrapping && Mb.height > 1.5 * bb.defaultLineHeight) {
              let wb = bb.viewState.heightOracle.textHeight;
              Vb += Math.floor((pb - Mb.top - .5 * (bb.defaultLineHeight - wb)) / wb) * bb.viewState.heightOracle.lineLength
            }
            let gb = bb.state.sliceDoc(Mb.from, Mb.to);
            return Mb.from + (0, eb.Y)(gb, Vb, bb.state.tabSize)
          }(bb, Vb, pb, lb, Lb);
          return new nM(wb, wb == pb.from ? 1 : -1)
        }
      }
      if (pb.type != Yb.Text) return Ib < (pb.top + pb.bottom) / 2 ? new nM(pb.from, 1) : new nM(pb.to, -1);
      let Ob = bb.docView.lineAt(pb.from, 2);
      return Ob && Ob.length == pb.length || (Ob = bb.docView.lineAt(pb.from, -2)), new oM(bb, lb, Lb, bb.textDirectionAt(pb.from)).scanTile(Ob, pb.from)
    }
    class oM {
      constructor(bb, wb, Mb, eb) {
        this.view = bb, this.x = wb, this.y = Mb, this.baseDir = eb, this.line = null, this.spans = null
      }
      bidiSpansAt(bb) {
        return (!this.line || this.line.from > bb || this.line.to < bb) && (this.line = this.view.state.doc.lineAt(bb), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(bb, wb) {
        let {
          line: Mb,
          spans: eb
        } = this.bidiSpansAt(bb);
        return eb[mw.find(eb, bb - Mb.from, -1, wb)].level == this.baseDir
      }
      dirAt(bb, wb) {
        let {
          line: Mb,
          spans: eb
        } = this.bidiSpansAt(bb);
        return eb[mw.find(eb, bb - Mb.from, -1, wb)].dir
      }
      bidiIn(bb, wb) {
        let {
          spans: Mb,
          line: eb
        } = this.bidiSpansAt(bb);
        return Mb.length > 1 || Mb.length && (Mb[0].level != this.baseDir || Mb[0].to + eb.from < wb)
      }
      scan(bb, wb) {
        let Mb, eb, Hb, pb = 0,
          Vb = bb.length - 1,
          gb = new Set,
          lb = this.bidiIn(bb[0], bb[Vb]),
          Lb = -1,
          Ib = 1e9;
        bb: for (; pb < Vb;) {
          let Ob = Vb - pb,
            Ub = pb + Vb >> 1;
          wb: if (gb.has(Ub)) {
            let bb = pb + Math.floor(Math.random() * Ob);
            for (let wb = 0; wb < Ob; wb++) {
              if (!gb.has(bb)) {
                Ub = bb;
                break wb
              }
              bb++, bb == Vb && (bb = pb)
            }
            break bb
          } gb.add(Ub);
          let tb = wb(Ub);
          if (tb)
            for (let wb = 0; wb < tb.length; wb++) {
              let gb = tb[wb],
                Ob = 0;
              if (!(0 == gb.width && tb.length > 1)) {
                if (gb.bottom < this.y)(!Mb || Mb.bottom < gb.bottom) && (Mb = gb), Ob = 1;
                else if (gb.top > this.y)(!eb || eb.top > gb.top) && (eb = gb), Ob = -1;
                else {
                  let bb = gb.left > this.x ? this.x - gb.left : gb.right < this.x ? this.x - gb.right : 0,
                    wb = Math.abs(bb);
                  wb < Ib && (Lb = Ub, Ib = wb, Hb = gb), bb && (Ob = bb < 0 == (this.baseDir == Lw.LTR) ? -1 : 1)
                } - 1 != Ob || lb && !this.baseDirAt(bb[Ub], 1) ? 1 != Ob || lb && !this.baseDirAt(bb[Ub + 1], -1) || (pb = Ub + 1) : Vb = Ub
              }
            }
        }
        if (!Hb) {
          let Hb = Mb && (!eb || this.y - Mb.bottom < eb.top - this.y) ? Mb : eb;
          return this.y = (Hb.top + Hb.bottom) / 2, this.scan(bb, wb)
        }
        if (Ib) {
          if (Mb && Mb.bottom > Hb.top) return this.y = Mb.bottom - 1, this.scan(bb, wb);
          if (eb && eb.top < Hb.bottom) return this.y = eb.top + 1, this.scan(bb, wb)
        }
        let Ob = (lb ? this.dirAt(bb[Lb], 1) : this.baseDir) == Lw.LTR;
        return {
          i: Lb,
          after: this.x > (Hb.left + Hb.right) / 2 == Ob
        }
      }
      scanText(bb, wb) {
        let Mb = [];
        for (let pb = 0; pb < bb.length; pb = (0, eb.U)(bb.text, pb)) Mb.push(wb + pb);
        Mb.push(wb + bb.length);
        let Hb = this.scan(Mb, (eb => {
          let Hb = Mb[eb] - wb,
            pb = Mb[eb + 1] - wb;
          return ew(bb.dom, Hb, pb).getClientRects()
        }));
        return Hb.after ? new nM(Mb[Hb.i + 1], -1) : new nM(Mb[Hb.i], 1)
      }
      scanTile(bb, wb) {
        if (!bb.length) return new nM(wb, 1);
        if (1 == bb.children.length) {
          let Mb = bb.children[0];
          if (Mb.isText()) return this.scanText(Mb, wb);
          if (Mb.isComposite()) return this.scanTile(Mb, wb)
        }
        let Mb = [wb];
        for (let Vb = 0, gb = wb; Vb < bb.children.length; Vb++) Mb.push(gb += bb.children[Vb].length);
        let eb = this.scan(Mb, (wb => {
            let Mb = bb.children[wb];
            return 48 & Mb.flags ? null : (1 == Mb.dom.nodeType ? Mb.dom : ew(Mb.dom, 0, Mb.length)).getClientRects()
          })),
          Hb = bb.children[eb.i],
          pb = Mb[eb.i];
        return Hb.isText() ? this.scanText(Hb, pb) : Hb.isComposite() ? this.scanTile(Hb, pb) : eb.after ? new nM(Mb[eb.i + 1], -1) : new nM(pb, 1)
      }
    }
    const TM = "\uffff";
    class kM {
      constructor(bb, wb) {
        this.points = bb, this.view = wb, this.text = "", this.lineSeparator = wb.state.facet(eb.n.lineSeparator)
      }
      append(bb) {
        this.text += bb
      }
      lineBreak() {
        this.text += TM
      }
      readRange(bb, wb) {
        if (!bb) return this;
        let Mb = bb.parentNode;
        for (let eb = bb;;) {
          this.findPointBefore(Mb, eb);
          let bb = this.text.length;
          this.readNode(eb);
          let Hb = tM.get(eb),
            pb = eb.nextSibling;
          if (pb == wb) {
            (null === Hb || void 0 === Hb ? void 0 : Hb.breakAfter) && !pb && Mb != this.view.contentDOM && this.lineBreak();
            break
          }
          let Vb = tM.get(pb);
          (Hb && Vb ? Hb.breakAfter : (Hb ? Hb.breakAfter : ub(eb)) || ub(pb) && ("BR" != eb.nodeName || (null === Hb || void 0 === Hb ? void 0 : Hb.isWidget())) && this.text.length > bb) && !we(pb, wb) && this.lineBreak(), eb = pb
        }
        return this.findPointBefore(Mb, wb), this
      }
      readTextNode(bb) {
        let wb = bb.nodeValue;
        for (let Mb of this.points) Mb.node == bb && (Mb.pos = this.text.length + Math.min(Mb.offset, wb.length));
        for (let Mb = 0, eb = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let Hb, pb = -1,
            Vb = 1;
          if (this.lineSeparator ? (pb = wb.indexOf(this.lineSeparator, Mb), Vb = this.lineSeparator.length) : (Hb = eb.exec(wb)) && (pb = Hb.index, Vb = Hb[0].length), this.append(wb.slice(Mb, pb < 0 ? wb.length : pb)), pb < 0) break;
          if (this.lineBreak(), Vb > 1)
            for (let wb of this.points) wb.node == bb && wb.pos > this.text.length && (wb.pos -= Vb - 1);
          Mb = pb + Vb
        }
      }
      readNode(bb) {
        let wb = tM.get(bb),
          Mb = wb && wb.overrideDOMText;
        if (null != Mb) {
          this.findPointInside(bb, Mb.length);
          for (let bb = Mb.iter(); !bb.next().done;) bb.lineBreak ? this.lineBreak() : this.append(bb.value)
        } else 3 == bb.nodeType ? this.readTextNode(bb) : "BR" == bb.nodeName ? bb.nextSibling && this.lineBreak() : 1 == bb.nodeType && this.readRange(bb.firstChild, null)
      }
      findPointBefore(bb, wb) {
        for (let Mb of this.points) Mb.node == bb && bb.childNodes[Mb.offset] == wb && (Mb.pos = this.text.length)
      }
      findPointInside(bb, wb) {
        for (let Mb of this.points)(3 == bb.nodeType ? Mb.node == bb : bb.contains(Mb.node)) && (Mb.pos = this.text.length + (be(bb, Mb.node, Mb.offset) ? wb : 0))
      }
    }

    function be(bb, wb, Mb) {
      for (;;) {
        if (!wb || Mb < Pb(wb)) return !1;
        if (wb == bb) return !0;
        Mb = ib(wb) + 1, wb = wb.parentNode
      }
    }

    function we(bb, wb) {
      let Mb;
      for (; bb != wb && bb; bb = bb.nextSibling) {
        let wb = tM.get(bb);
        if (!(null === wb || void 0 === wb ? void 0 : wb.isWidget())) return !1;
        wb && (Mb || (Mb = [])).push(wb)
      }
      if (Mb)
        for (let eb of Mb) {
          let bb = eb.overrideDOMText;
          if (null === bb || void 0 === bb ? void 0 : bb.length) return !1
        }
      return !0
    }
    class Me {
      constructor(bb, wb) {
        this.node = bb, this.offset = wb, this.pos = -1
      }
    }
    class ee {
      constructor(bb, wb, Mb, Hb) {
        this.typeOver = Hb, this.bounds = null, this.text = "", this.domChanged = wb > -1;
        let {
          impreciseHead: pb,
          impreciseAnchor: Vb
        } = bb.docView, gb = bb.state.selection;
        if (bb.state.readOnly && wb > -1) this.newSel = null;
        else if (wb > -1 && (this.bounds = He(bb.docView.tile, wb, Mb, 0))) {
          let wb = pb || Vb ? [] : function(bb) {
              let wb = [];
              if (bb.root.activeElement != bb.contentDOM) return wb;
              let {
                anchorNode: Mb,
                anchorOffset: eb,
                focusNode: Hb,
                focusOffset: pb
              } = bb.observer.selectionRange;
              Mb && (wb.push(new Me(Mb, eb)), Hb == Mb && pb == eb || wb.push(new Me(Hb, pb)));
              return wb
            }(bb),
            Mb = new kM(wb, bb);
          Mb.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = Mb.text, this.newSel = function(bb, wb) {
            if (0 == bb.length) return null;
            let Mb = bb[0].pos,
              Hb = 2 == bb.length ? bb[1].pos : Mb;
            return Mb > -1 && Hb > -1 ? eb.j.single(Mb + wb, Hb + wb) : null
          }(wb, this.bounds.from)
        } else {
          let wb = bb.observer.selectionRange,
            Mb = pb && pb.node == wb.focusNode && pb.offset == wb.focusOffset || !Qb(bb.contentDOM, wb.focusNode) ? gb.main.head : bb.docView.posFromDOM(wb.focusNode, wb.focusOffset),
            Hb = Vb && Vb.node == wb.anchorNode && Vb.offset == wb.anchorOffset || !Qb(bb.contentDOM, wb.anchorNode) ? gb.main.anchor : bb.docView.posFromDOM(wb.anchorNode, wb.anchorOffset),
            lb = bb.viewport;
          if ((xb.ios || xb.chrome) && gb.main.empty && Mb != Hb && (lb.from > 0 || lb.to < bb.state.doc.length)) {
            let wb = Math.min(Mb, Hb),
              eb = Math.max(Mb, Hb),
              pb = lb.from - wb,
              Vb = lb.to - eb;
            0 != pb && 1 != pb && 0 != wb || 0 != Vb && -1 != Vb && eb != bb.state.doc.length || (Mb = 0, Hb = bb.state.doc.length)
          }
          if (bb.inputState.composing > -1 && gb.gF.length > 1) this.newSel = gb.replaceRange(eb.j.range(Hb, Mb));
          else if (bb.lineWrapping && Hb == Mb && (!gb.main.empty || gb.main.head != Mb) && bb.inputState.lastTouchTime > Date.now() - 100) {
            let wb = bb.coordsAtPos(Mb, -1),
              Hb = 0;
            wb && (Hb = bb.inputState.lastTouchY <= wb.bottom ? -1 : 1), this.newSel = eb.j.create([eb.j.cursor(Mb, Hb)])
          } else this.newSel = eb.j.single(Hb, Mb)
        }
      }
    }

    function He(bb, wb, Mb, eb) {
      if (bb.isComposite()) {
        let Hb = -1,
          pb = -1,
          Vb = -1,
          gb = -1;
        for (let lb = 0, Lb = eb, Ib = eb; lb < bb.children.length; lb++) {
          let eb = bb.children[lb],
            Ob = Lb + eb.length;
          if (Lb < wb && Ob > Mb) return He(eb, wb, Mb, Lb);
          if (Ob >= wb && -1 == Hb && (Hb = lb, pb = Lb), Lb > Mb && eb.dom.parentNode == bb.dom) {
            Vb = lb, gb = Ib;
            break
          }
          Ib = Ob, Lb = Ob + eb.breakAfter
        }
        return {
          from: pb,
          to: gb < 0 ? eb + bb.length : gb,
          startDOM: (Hb ? bb.children[Hb - 1].dom.nextSibling : null) || bb.dom.firstChild,
          endDOM: Vb < bb.children.length && Vb >= 0 ? bb.children[Vb].dom : null
        }
      }
      return bb.isText() ? {
        from: eb,
        to: eb + bb.length,
        startDOM: bb.dom,
        endDOM: bb.dom.nextSibling
      } : null
    }

    function pe(bb, wb) {
      let Mb, {
          newSel: Hb
        } = wb,
        {
          state: pb
        } = bb,
        Vb = pb.selection.main,
        gb = bb.inputState.lastKeyTime > Date.now() - 100 ? bb.inputState.lastKeyCode : -1;
      if (wb.bounds) {
        let {
          from: bb,
          to: Hb
        } = wb.bounds, lb = Vb.from, Lb = null;
        (8 === gb || xb.android && wb.text.length < Hb - bb) && (lb = Vb.to, Lb = "end");
        let Ib, Ob, Ub = pb.doc.sliceString(bb, Hb, TM);
        !Vb.empty && Vb.from >= bb && Vb.to <= Hb && (wb.typeOver || Ub != wb.text) && Ub.slice(0, Vb.from - bb) == wb.text.slice(0, Vb.from - bb) && Ub.slice(Vb.to - bb) == wb.text.slice(Ib = wb.text.length - (Ub.length - (Vb.to - bb))) ? Mb = {
          from: Vb.from,
          to: Vb.to,
          insert: eb.H.of(wb.text.slice(Vb.from - bb, Ib).split(TM))
        } : (Ob = ge(Ub, wb.text, lb - bb, Lb)) && (xb.chrome && 13 == gb && Ob.toB == Ob.from + 2 && wb.text.slice(Ob.from, Ob.toB) == TM + TM && Ob.toB--, Mb = {
          from: bb + Ob.from,
          to: bb + Ob.toA,
          insert: eb.H.of(wb.text.slice(Ob.from, Ob.toB).split(TM))
        })
      } else Hb && (!bb.hasFocus && pb.facet(Pw) || le(Hb, Vb)) && (Hb = null);
      if (!Mb && !Hb) return !1;
      if ((xb.mac || xb.android) && Mb && Mb.from == Mb.to && Mb.from == Vb.head - 1 && /^\. ?$/.test(Mb.insert.toString()) && "off" == bb.contentDOM.getAttribute("autocorrect") ? (Hb && 2 == Mb.insert.length && (Hb = eb.j.single(Hb.main.anchor - 1, Hb.main.head - 1)), Mb = {
          from: Mb.from,
          to: Mb.to,
          insert: eb.H.of([Mb.insert.toString().replace(".", " ")])
        }) : pb.doc.lineAt(Vb.from).to < Vb.to && bb.docView.lineHasWidget(Vb.to) && bb.inputState.insertingTextAt > Date.now() - 50 ? Mb = {
          from: Vb.from,
          to: Vb.to,
          insert: pb.toText(bb.inputState.insertingText)
        } : xb.chrome && Mb && Mb.from == Mb.to && Mb.from == Vb.head && "\n " == Mb.insert.toString() && bb.lineWrapping && (Hb && (Hb = eb.j.single(Hb.main.anchor - 1, Hb.main.head - 1)), Mb = {
          from: Vb.from,
          to: Vb.to,
          insert: eb.H.of([" "])
        }), Mb) return Ve(bb, Mb, Hb, gb);
      if (Hb && !le(Hb, Vb)) {
        let wb = !1,
          Mb = "select";
        return bb.inputState.lastSelectionTime > Date.now() - 50 && ("select" == bb.inputState.lastSelectionOrigin && (wb = !0), Mb = bb.inputState.lastSelectionOrigin, "select.pointer" == Mb && (Hb = dM(pb.facet(HM).map((wb => wb(bb))), Hb))), bb.dispatch({
          selection: Hb,
          scrollIntoView: wb,
          userEvent: Mb
        }), !0
      }
      return !1
    }

    function Ve(bb, wb, Mb) {
      let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (xb.ios && bb.inputState.flushIOSKey(wb)) return !0;
      let pb = bb.state.selection.main;
      if (xb.android && (wb.to == pb.to && (wb.from == pb.from || wb.from == pb.from - 1 && " " == bb.state.sliceDoc(wb.from, pb.from)) && 1 == wb.insert.length && 2 == wb.insert.lines && Hw(bb.contentDOM, "Enter", 13) || (wb.from == pb.from - 1 && wb.to == pb.to && 0 == wb.insert.length || 8 == Hb && wb.insert.length < wb.to - wb.from && wb.to > pb.head) && Hw(bb.contentDOM, "Backspace", 8) || wb.from == pb.from && wb.to == pb.to + 1 && 0 == wb.insert.length && Hw(bb.contentDOM, "Delete", 46))) return !0;
      let Vb, gb = wb.insert.toString();
      bb.inputState.composing >= 0 && bb.inputState.composing++;
      let lb = () => Vb || (Vb = function(bb, wb, Mb) {
        let Hb, pb = bb.state,
          Vb = pb.selection.main,
          gb = -1;
        if (wb.from == wb.to && wb.from < Vb.from || wb.from > Vb.to) {
          let Mb = wb.from < Vb.from ? -1 : 1,
            eb = Mb < 0 ? Vb.from : Vb.to,
            Hb = uM(pb.facet(HM).map((wb => wb(bb))), eb, Mb);
          wb.from == Hb && (gb = Hb)
        }
        if (gb > -1) Hb = {
          changes: wb,
          selection: eb.j.cursor(wb.from + wb.insert.length, -1)
        };
        else if (wb.from >= Vb.from && wb.to <= Vb.to && wb.to - wb.from >= (Vb.to - Vb.from) / 3 && (!Mb || Mb.main.empty && Mb.main.from == wb.from + wb.insert.length) && bb.inputState.composing < 0) {
          let Mb = Vb.from < wb.from ? pb.sliceDoc(Vb.from, wb.from) : "",
            eb = Vb.to > wb.to ? pb.sliceDoc(wb.to, Vb.to) : "";
          Hb = pb.replaceSelection(bb.state.toText(Mb + wb.insert.sliceString(0, void 0, bb.state.lineBreak) + eb))
        } else {
          let gb = pb.changes(wb),
            lb = Mb && Mb.main.to <= gb.newLength ? Mb.main : void 0;
          if (pb.selection.gF.length > 1 && (bb.inputState.composing >= 0 || bb.inputState.compositionPendingChange) && wb.to <= Vb.to + 10 && wb.to >= Vb.to - 10) {
            let Lb, Ib = bb.state.sliceDoc(wb.from, wb.to),
              Ob = Mb && vM(bb, Mb.main.head);
            if (Ob) {
              let bb = wb.insert.length - (wb.to - wb.from);
              Lb = {
                from: Ob.from,
                to: Ob.to - bb
              }
            } else Lb = bb.state.doc.lineAt(Vb.head);
            let Ub = Vb.to - wb.to;
            Hb = pb.changeByRange((Mb => {
              if (Mb.from == Vb.from && Mb.to == Vb.to) return {
                changes: gb,
                range: lb || Mb.map(gb)
              };
              let Hb = Mb.to - Ub,
                Ob = Hb - Ib.length;
              if (bb.state.sliceDoc(Ob, Hb) != Ib || Hb >= Lb.from && Ob <= Lb.to) return {
                range: Mb
              };
              let tb = pb.changes({
                  from: Ob,
                  to: Hb,
                  insert: wb.insert
                }),
                Cb = Mb.to - Vb.to;
              return {
                changes: tb,
                range: lb ? eb.j.range(Math.max(0, lb.anchor + Cb), Math.max(0, lb.head + Cb)) : Mb.map(tb)
              }
            }))
          } else Hb = {
            changes: gb,
            selection: lb && pb.selection.replaceRange(lb)
          }
        }
        let lb = "input.type";
        (bb.composing || bb.inputState.compositionPendingChange && bb.inputState.compositionEndedAt > Date.now() - 50) && (bb.inputState.compositionPendingChange = !1, lb += ".compose", bb.inputState.compositionFirstChange && (lb += ".start", bb.inputState.compositionFirstChange = !1));
        return pb.update(Hb, {
          userEvent: lb,
          scrollIntoView: !0
        })
      }(bb, wb, Mb));
      return bb.state.facet(Jw).some((Mb => Mb(bb, wb.from, wb.to, gb, lb))) || bb.dispatch(lb()), !0
    }

    function ge(bb, wb, Mb, eb) {
      let Hb = Math.min(bb.length, wb.length),
        pb = 0;
      for (; pb < Hb && bb.charCodeAt(pb) == wb.charCodeAt(pb);) pb++;
      if (pb == Hb && bb.length == wb.length) return null;
      let Vb = bb.length,
        gb = wb.length;
      for (; Vb > 0 && gb > 0 && bb.charCodeAt(Vb - 1) == wb.charCodeAt(gb - 1);) Vb--, gb--;
      if ("end" == eb) {
        Mb -= Vb + Math.max(0, pb - Math.min(Vb, gb)) - pb
      }
      if (Vb < pb && bb.length < wb.length) {
        pb -= Mb <= pb && Mb >= Vb ? pb - Mb : 0, gb = pb + (gb - Vb), Vb = pb
      } else if (gb < pb) {
        pb -= Mb <= pb && Mb >= gb ? pb - Mb : 0, Vb = pb + (Vb - gb), gb = pb
      }
      return {
        from: pb,
        toA: Vb,
        toB: gb
      }
    }

    function le(bb, wb) {
      return wb.head == bb.main.head && wb.anchor == bb.main.anchor
    }
    class Le {
      setSelectionOrigin(bb) {
        this.lastSelectionOrigin = bb, this.lastSelectionTime = Date.now()
      }
      constructor(bb) {
        this.view = bb, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = bb.hasFocus, xb.safari && bb.contentDOM.addEventListener("input", (() => null)), xb.gecko && function(bb) {
          Ae.has(bb) || (Ae.add(bb), bb.addEventListener("copy", (() => {})), bb.addEventListener("cut", (() => {})))
        }(bb.contentDOM.ownerDocument)
      }
      handleEvent(bb) {
        (function(bb, wb) {
          if (!wb.bubbles) return !0;
          if (wb.defaultPrevented) return !1;
          for (let Mb, eb = wb.target; eb != bb.contentDOM; eb = eb.parentNode)
            if (!eb || 11 == eb.nodeType || (Mb = tM.get(eb)) && Mb.isWidget() && !Mb.isHidden && Mb.widget.ignoreEvent(wb)) return !1;
          return !0
        })(this.view, bb) && !this.ignoreDuringComposition(bb) && ("keydown" == bb.type && this.keydown(bb) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(bb.type, bb))) : this.runHandlers(bb.type, bb)))
      }
      runHandlers(bb, wb) {
        let Mb = this.handlers[bb];
        if (Mb) {
          for (let bb of Mb.observers) bb(this.view, wb);
          for (let bb of Mb.handlers) {
            if (wb.defaultPrevented) break;
            if (bb(this.view, wb)) {
              wb.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(bb) {
        let wb = Oe(bb),
          Mb = this.handlers,
          eb = this.view.contentDOM;
        for (let Hb in wb)
          if ("scroll" != Hb) {
            let bb = !wb[Hb].handlers.length,
              pb = Mb[Hb];
            pb && bb != !pb.handlers.length && (eb.removeEventListener(Hb, this.handleEvent), pb = null), pb || eb.addEventListener(Hb, this.handleEvent, {
              passive: bb
            })
          } for (let Hb in Mb) "scroll" == Hb || wb[Hb] || eb.removeEventListener(Hb, this.handleEvent);
        this.handlers = wb
      }
      keydown(bb) {
        if (this.lastKeyCode = bb.keyCode, this.lastKeyTime = Date.now(), 9 == bb.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != bb.keyCode && Ce.indexOf(bb.keyCode) < 0 && (this.tabFocusMode = -1), xb.android && xb.chrome && !bb.synthetic && (13 == bb.keyCode || 8 == bb.keyCode)) return this.view.observer.delayAndroidKey(bb.key, bb.keyCode), !0;
        let wb;
        return !xb.ios || bb.synthetic || bb.altKey || bb.metaKey || bb.shiftKey || !((wb = Ue.find((wb => wb.keyCode == bb.keyCode))) && !bb.ctrlKey || te.indexOf(bb.key) > -1 && bb.ctrlKey) ? (229 != bb.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = wb || bb, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(bb) {
        let wb = this.pendingIOSKey;
        return !!wb && (!("Enter" == wb.key && bb && bb.from < bb.to && /^\S+$/.test(bb.insert.toString())) && (this.pendingIOSKey = void 0, Hw(this.view.contentDOM, wb.key, wb.keyCode, wb instanceof KeyboardEvent ? wb : void 0)))
      }
      ignoreDuringComposition(bb) {
        return !(!/^key/.test(bb.type) || bb.synthetic) && (this.composing > 0 || !!(xb.safari && !xb.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function Ie(bb, wb) {
      return (Mb, eb) => {
        try {
          return wb.call(bb, eb, Mb)
        } catch (Hb) {
          dw(Mb.state, Hb)
        }
      }
    }

    function Oe(bb) {
      let wb = Object.create(null);

      function Mb(bb) {
        return wb[bb] || (wb[bb] = {
          observers: [],
          handlers: []
        })
      }
      for (let eb of bb) {
        let bb = eb.spec,
          wb = bb && bb.plugin.domEventHandlers,
          Hb = bb && bb.plugin.domEventObservers;
        if (wb)
          for (let pb in wb) {
            let bb = wb[pb];
            bb && Mb(pb).handlers.push(Ie(eb.value, bb))
          }
        if (Hb)
          for (let pb in Hb) {
            let bb = Hb[pb];
            bb && Mb(pb).observers.push(Ie(eb.value, bb))
          }
      }
      for (let eb in Be) Mb(eb).handlers.push(Be[eb]);
      for (let eb in se) Mb(eb).observers.push(se[eb]);
      return wb
    }
    const Ue = [{
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
      te = "dthko",
      Ce = [16, 17, 18, 20, 91, 92, 224, 225];

    function Ee(bb) {
      return .7 * Math.max(0, bb) + 8
    }
    class Fe {
      constructor(bb, wb, Mb, Hb) {
        this.view = bb, this.startEvent = wb, this.style = Mb, this.mustSelect = Hb, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = wb, this.scrollParents = Tb(bb.contentDOM), this.atoms = bb.state.facet(HM).map((wb => wb(bb)));
        let pb = bb.contentDOM.ownerDocument;
        pb.addEventListener("mousemove", this.move = this.move.bind(this)), pb.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = wb.shiftKey, this.multiple = bb.state.facet(eb.n.allowMultipleSelections) && function(bb, wb) {
          let Mb = bb.state.facet(Yw);
          return Mb.length ? Mb[0](wb) : xb.mac ? wb.metaKey : wb.ctrlKey
        }(bb, wb), this.dragging = !(! function(bb, wb) {
          let {
            main: Mb
          } = bb.state.selection;
          if (Mb.empty) return !1;
          let eb = vb(bb.root);
          if (!eb || 0 == eb.rangeCount) return !0;
          let Hb = eb.getRangeAt(0).getClientRects();
          for (let pb = 0; pb < Hb.length; pb++) {
            let bb = Hb[pb];
            if (bb.left <= wb.clientX && bb.right >= wb.clientX && bb.top <= wb.clientY && bb.bottom >= wb.clientY) return !0
          }
          return !1
        }(bb, wb) || 1 != Re(wb)) && null
      }
      start(bb) {
        !1 === this.dragging && this.select(bb)
      }
      move(bb) {
        if (0 == bb.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (wb = this.startEvent, Mb = bb, Math.max(Math.abs(wb.clientX - Mb.clientX), Math.abs(wb.clientY - Mb.clientY)) < 10)) return;
        var wb, Mb;
        this.select(this.lastEvent = bb);
        let eb = 0,
          Hb = 0,
          pb = 0,
          Vb = 0,
          gb = this.view.win.innerWidth,
          lb = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: pb,
          right: gb
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: Vb,
          bottom: lb
        } = this.scrollParents.y.getBoundingClientRect());
        let Lb = lM(this.view);
        bb.clientX - Lb.left <= pb + 6 ? eb = -Ee(pb - bb.clientX) : bb.clientX + Lb.right >= gb - 6 && (eb = Ee(bb.clientX - gb)), bb.clientY - Lb.top <= Vb + 6 ? Hb = -Ee(Vb - bb.clientY) : bb.clientY + Lb.bottom >= lb - 6 && (Hb = Ee(bb.clientY - lb)), this.setScrollSpeed(eb, Hb)
      }
      up(bb) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || bb.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let bb = this.view.contentDOM.ownerDocument;
        bb.removeEventListener("mousemove", this.move), bb.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(bb, wb) {
        this.scrollSpeed = {
          x: bb,
          y: wb
        }, bb || wb ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: bb,
          y: wb
        } = this.scrollSpeed;
        bb && this.scrollParents.x && (this.scrollParents.x.scrollLeft += bb, bb = 0), wb && this.scrollParents.y && (this.scrollParents.y.scrollTop += wb, wb = 0), (bb || wb) && this.view.win.scrollBy(bb, wb), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(bb) {
        let {
          view: wb
        } = this, Mb = dM(this.atoms, this.style.get(bb, this.extend, this.multiple));
        !this.mustSelect && Mb.eq(wb.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: Mb,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(bb) {
        bb.transactions.some((bb => bb.isUserEvent("input.type"))) ? this.destroy() : this.style.update(bb) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const Be = Object.create(null),
      se = Object.create(null),
      me = xb.ie && xb.ie_version < 15 || xb.ios && xb.webkit_version < 604;

    function he(bb, wb, Mb) {
      for (let eb of bb.facet(wb)) Mb = eb(Mb, bb);
      return Mb
    }

    function ze(bb, wb) {
      wb = he(bb.state, Nw, wb);
      let Mb, {
          state: Hb
        } = bb,
        pb = 1,
        Vb = Hb.toText(wb),
        gb = Vb.lines == Hb.selection.gF.length;
      if (null != ce && Hb.selection.gF.every((bb => bb.empty)) && ce == Vb.toString()) {
        let bb = -1;
        Mb = Hb.changeByRange((Mb => {
          let lb = Hb.doc.lineAt(Mb.from);
          if (lb.from == bb) return {
            range: Mb
          };
          bb = lb.from;
          let Lb = Hb.toText((gb ? Vb.line(pb++).text : wb) + Hb.lineBreak);
          return {
            changes: {
              from: lb.from,
              insert: Lb
            },
            range: eb.j.cursor(Mb.from + Lb.length)
          }
        }))
      } else Mb = gb ? Hb.changeByRange((bb => {
        let wb = Vb.line(pb++);
        return {
          changes: {
            from: bb.from,
            to: bb.to,
            insert: wb.text
          },
          range: eb.j.cursor(bb.from + wb.length)
        }
      })) : Hb.replaceSelection(Vb);
      bb.dispatch(Mb, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function Xe(bb, wb, Mb, Hb) {
      if (1 == Hb) return eb.j.cursor(wb, Mb);
      if (2 == Hb) return function(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Hb = bb.charCategorizer(wb),
          pb = bb.doc.lineAt(wb),
          Vb = wb - pb.from;
        if (0 == pb.length) return eb.j.cursor(wb);
        0 == Vb ? Mb = 1 : Vb == pb.length && (Mb = -1);
        let gb = Vb,
          lb = Vb;
        Mb < 0 ? gb = (0, eb.U)(pb.text, Vb, !1) : lb = (0, eb.U)(pb.text, Vb);
        let Lb = Hb(pb.text.slice(gb, lb));
        for (; gb > 0;) {
          let bb = (0, eb.U)(pb.text, gb, !1);
          if (Hb(pb.text.slice(bb, gb)) != Lb) break;
          gb = bb
        }
        for (; lb < pb.length;) {
          let bb = (0, eb.U)(pb.text, lb);
          if (Hb(pb.text.slice(lb, bb)) != Lb) break;
          lb = bb
        }
        return eb.j.range(gb + pb.from, lb + pb.from)
      }(bb.state, wb, Mb);
      {
        let Hb = bb.docView.lineAt(wb, Mb),
          pb = bb.state.doc.lineAt(Hb ? Hb.posAtEnd : wb),
          Vb = Hb ? Hb.posAtStart : pb.from,
          gb = Hb ? Hb.posAtEnd : pb.to;
        return gb < bb.state.doc.length && gb == pb.to && gb++, eb.j.range(Vb, gb)
      }
    }
    se.scroll = bb => {
      bb.inputState.lastScrollTop = bb.scrollDOM.scrollTop, bb.inputState.lastScrollLeft = bb.scrollDOM.scrollLeft
    }, se.wheel = se.mousewheel = bb => {
      bb.inputState.lastWheelEvent = Date.now()
    }, Be.keydown = (bb, wb) => (bb.inputState.setSelectionOrigin("select"), 27 == wb.keyCode && 0 != bb.inputState.tabFocusMode && (bb.inputState.tabFocusMode = Date.now() + 2e3), !1), se.touchstart = (bb, wb) => {
      let Mb = bb.inputState,
        eb = wb.targetTouches[0];
      Mb.lastTouchTime = Date.now(), eb && (Mb.lastTouchX = eb.clientX, Mb.lastTouchY = eb.clientY), Mb.setSelectionOrigin("select.pointer")
    }, se.touchmove = bb => {
      bb.inputState.setSelectionOrigin("select.pointer")
    }, Be.mousedown = (bb, wb) => {
      if (bb.observer.flush(), bb.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let Mb = null;
      for (let eb of bb.state.facet(fw))
        if (Mb = eb(bb, wb), Mb) break;
      if (Mb || 0 != wb.button || (Mb = function(bb, wb) {
          let Mb = bb.posAndSideAtCoords({
              x: wb.clientX,
              y: wb.clientY
            }, !1),
            Hb = Re(wb),
            pb = bb.state.selection;
          return {
            update(bb) {
              bb.docChanged && (Mb.pos = bb.changes.mapPos(Mb.pos), pb = pb.map(bb.changes))
            },
            get(wb, Vb, gb) {
              let lb, Lb = bb.posAndSideAtCoords({
                  x: wb.clientX,
                  y: wb.clientY
                }, !1),
                Ib = Xe(bb, Lb.pos, Lb.assoc, Hb);
              if (Mb.pos != Lb.pos && !Vb) {
                let wb = Xe(bb, Mb.pos, Mb.assoc, Hb),
                  pb = Math.min(wb.from, Ib.from),
                  Vb = Math.max(wb.to, Ib.to);
                Ib = pb < Ib.from ? eb.j.range(pb, Vb, Ib.assoc) : eb.j.range(Vb, pb, Ib.assoc)
              }
              return Vb ? pb.replaceRange(pb.main.extend(Ib.from, Ib.to, Ib.assoc)) : gb && 1 == Hb && pb.gF.length > 1 && (lb = function(bb, wb) {
                for (let Mb = 0; Mb < bb.gF.length; Mb++) {
                  let {
                    from: Hb,
                    to: pb
                  } = bb.gF[Mb];
                  if (Hb <= wb && pb >= wb) return eb.j.create(bb.gF.slice(0, Mb).concat(bb.gF.slice(Mb + 1)), bb.mainIndex == Mb ? 0 : bb.mainIndex - (bb.mainIndex > Mb ? 1 : 0))
                }
                return null
              }(pb, Lb.pos)) ? lb : gb ? pb.addRange(Ib) : eb.j.create([Ib])
            }
          }
        }(bb, wb)), Mb) {
        let eb = !bb.hasFocus;
        bb.inputState.startMouseSelection(new Fe(bb, wb, Mb, eb)), eb && bb.observer.ignore((() => {
          Mw(bb.contentDOM);
          let wb = bb.root.activeElement;
          wb && !wb.contains(bb.contentDOM) && wb.blur()
        }));
        let Hb = bb.inputState.mouseSelection;
        if (Hb) return Hb.start(wb), !1 === Hb.dragging
      } else bb.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const xe = xb.ie && xb.ie_version <= 11;
    let je = null,
      Ke = 0,
      re = 0;

    function Re(bb) {
      if (!xe) return bb.detail;
      let wb = je,
        Mb = re;
      return je = bb, re = Date.now(), Ke = !wb || Mb > Date.now() - 400 && Math.abs(wb.clientX - bb.clientX) < 2 && Math.abs(wb.clientY - bb.clientY) < 2 ? (Ke + 1) % 3 : 1
    }

    function De(bb, wb, Mb, eb) {
      if (!(Mb = he(bb.state, Nw, Mb))) return;
      let Hb = bb.posAtCoords({
          x: wb.clientX,
          y: wb.clientY
        }, !1),
        {
          draggedContent: pb
        } = bb.inputState,
        Vb = eb && pb && function(bb, wb) {
          let Mb = bb.state.facet(Zw);
          return Mb.length ? Mb[0](wb) : xb.mac ? !wb.altKey : !wb.ctrlKey
        }(bb, wb) ? {
          from: pb.from,
          to: pb.to
        } : null,
        gb = {
          from: Hb,
          insert: Mb
        },
        lb = bb.state.changes(Vb ? [Vb, gb] : gb);
      bb.focus(), bb.dispatch({
        changes: lb,
        selection: {
          anchor: lb.mapPos(Hb, -1),
          head: lb.mapPos(Hb, 1)
        },
        userEvent: Vb ? "move.drop" : "input.drop"
      }), bb.inputState.draggedContent = null
    }
    Be.dragstart = (bb, wb) => {
      let {
        selection: {
          main: Mb
        }
      } = bb.state;
      if (wb.target.draggable) {
        let Hb = bb.docView.tile.nearest(wb.target);
        if (Hb && Hb.isWidget()) {
          let bb = Hb.posAtStart,
            wb = bb + Hb.length;
          (bb >= Mb.to || wb <= Mb.from) && (Mb = eb.j.range(bb, wb))
        }
      }
      let {
        inputState: Hb
      } = bb;
      return Hb.mouseSelection && (Hb.mouseSelection.dragging = !0), Hb.draggedContent = Mb, wb.dataTransfer && (wb.dataTransfer.setData("Text", he(bb.state, vw, bb.state.sliceDoc(Mb.from, Mb.to))), wb.dataTransfer.effectAllowed = "copyMove"), !1
    }, Be.dragend = bb => (bb.inputState.draggedContent = null, !1), Be.drop = (bb, wb) => {
      if (!wb.dataTransfer) return !1;
      if (bb.state.readOnly) return !0;
      let Mb = wb.dataTransfer.files;
      if (Mb && Mb.length) {
        let eb = Array(Mb.length),
          Hb = 0,
          pb = () => {
            ++Hb == Mb.length && De(bb, wb, eb.filter((bb => null != bb)).join(bb.state.lineBreak), !1)
          };
        for (let bb = 0; bb < Mb.length; bb++) {
          let wb = new FileReader;
          wb.onerror = pb, wb.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(wb.result) || (eb[bb] = wb.result), pb()
          }, wb.readAsText(Mb[bb])
        }
        return !0
      } {
        let Mb = wb.dataTransfer.getData("Text");
        if (Mb) return De(bb, wb, Mb, !0), !0
      }
      return !1
    }, Be.paste = (bb, wb) => {
      if (bb.state.readOnly) return !0;
      bb.observer.flush();
      let Mb = me ? null : wb.clipboardData;
      return Mb ? (ze(bb, Mb.getData("text/plain") || Mb.getData("text/uri-list")), !0) : (function(bb) {
        let wb = bb.dom.parentNode;
        if (!wb) return;
        let Mb = wb.appendChild(document.createElement("textarea"));
        Mb.style.cssText = "position: fixed; left: -10000px; top: 10px", Mb.focus(), setTimeout((() => {
          bb.focus(), Mb.remove(), ze(bb, Mb.value)
        }), 50)
      }(bb), !1)
    };
    let ce = null;
    Be.copy = Be.cut = (bb, wb) => {
      if (!Gb(bb.contentDOM, bb.observer.selectionRange)) return !1;
      let {
        text: Mb,
        gF: eb,
        linewise: Hb
      } = function(bb) {
        let wb = [],
          Mb = [],
          eb = !1;
        for (let Hb of bb.selection.gF) Hb.empty || (wb.push(bb.sliceDoc(Hb.from, Hb.to)), Mb.push(Hb));
        if (!wb.length) {
          let Hb = -1;
          for (let {
              from: eb
            }
            of bb.selection.gF) {
            let pb = bb.doc.lineAt(eb);
            pb.number > Hb && (wb.push(pb.text), Mb.push({
              from: pb.from,
              to: Math.min(bb.doc.length, pb.to + 1)
            })), Hb = pb.number
          }
          eb = !0
        }
        return {
          text: he(bb, vw, wb.join(bb.lineBreak)),
          gF: Mb,
          linewise: eb
        }
      }(bb.state);
      if (!Mb && !Hb) return !1;
      ce = Hb ? Mb : null, "cut" != wb.type || bb.state.readOnly || bb.dispatch({
        changes: eb,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let pb = me ? null : wb.clipboardData;
      return pb ? (pb.clearData(), pb.setData("text/plain", Mb), !0) : (function(bb, wb) {
        let Mb = bb.dom.parentNode;
        if (!Mb) return;
        let eb = Mb.appendChild(document.createElement("textarea"));
        eb.style.cssText = "position: fixed; left: -10000px; top: 10px", eb.value = wb, eb.focus(), eb.selectionEnd = wb.length, eb.selectionStart = 0, setTimeout((() => {
          eb.remove(), bb.focus()
        }), 50)
      }(bb, Mb), !1)
    };
    const Ye = eb.c.define();

    function Ze(bb, wb) {
      let Mb = [];
      for (let eb of bb.facet(Sw)) {
        let Hb = eb(bb, wb);
        Hb && Mb.push(Hb)
      }
      return Mb.length ? bb.update({
        effects: Mb,
        annotations: Ye.of(!0)
      }) : null
    }

    function fe(bb) {
      setTimeout((() => {
        let wb = bb.hasFocus;
        if (wb != bb.inputState.notifiedFocused) {
          let Mb = Ze(bb.state, wb);
          Mb ? bb.dispatch(Mb) : bb.update([])
        }
      }), 10)
    }
    se.focus = bb => {
      bb.inputState.lastFocusTime = Date.now(), bb.scrollDOM.scrollTop || !bb.inputState.lastScrollTop && !bb.inputState.lastScrollLeft || (bb.scrollDOM.scrollTop = bb.inputState.lastScrollTop, bb.scrollDOM.scrollLeft = bb.inputState.lastScrollLeft), fe(bb)
    }, se.blur = bb => {
      bb.observer.clearSelectionRange(), fe(bb)
    }, se.compositionstart = se.compositionupdate = bb => {
      bb.observer.editContext || (null == bb.inputState.compositionFirstChange && (bb.inputState.compositionFirstChange = !0), bb.inputState.composing < 0 && (bb.inputState.composing = 0))
    }, se.compositionend = bb => {
      bb.observer.editContext || (bb.inputState.composing = -1, bb.inputState.compositionEndedAt = Date.now(), bb.inputState.compositionPendingKey = !0, bb.inputState.compositionPendingChange = bb.observer.pendingRecords().length > 0, bb.inputState.compositionFirstChange = null, xb.chrome && xb.android ? bb.observer.flushSoon() : bb.inputState.compositionPendingChange ? Promise.resolve().then((() => bb.observer.flush())) : setTimeout((() => {
        bb.inputState.composing < 0 && bb.docView.hasComposition && bb.update([])
      }), 50))
    }, se.contextmenu = bb => {
      bb.inputState.lastContextMenu = Date.now()
    }, Be.beforeinput = (bb, wb) => {
      var Mb, eb;
      if ("insertText" != wb.inputType && "insertCompositionText" != wb.inputType || (bb.inputState.insertingText = wb.data, bb.inputState.insertingTextAt = Date.now()), "insertReplacementText" == wb.inputType && bb.observer.editContext) {
        let eb = null === (Mb = wb.dataTransfer) || void 0 === Mb ? void 0 : Mb.getData("text/plain"),
          Hb = wb.getTargetRanges();
        if (eb && Hb.length) {
          let wb = Hb[0],
            Mb = bb.posAtDOM(wb.startContainer, wb.startOffset),
            pb = bb.posAtDOM(wb.endContainer, wb.endOffset);
          return Ve(bb, {
            from: Mb,
            to: pb,
            insert: bb.state.toText(eb)
          }, null), !0
        }
      }
      let Hb;
      if (xb.chrome && xb.android && (Hb = Ue.find((bb => bb.inputType == wb.inputType))) && (bb.observer.delayAndroidKey(Hb.key, Hb.keyCode), "Backspace" == Hb.key || "Delete" == Hb.key)) {
        let wb = (null === (eb = window.visualViewport) || void 0 === eb ? void 0 : eb.height) || 0;
        setTimeout((() => {
          var Mb;
          ((null === (Mb = window.visualViewport) || void 0 === Mb ? void 0 : Mb.height) || 0) > wb + 10 && bb.hasFocus && (bb.contentDOM.blur(), bb.focus())
        }), 100)
      }
      return xb.ios && "deleteContentForward" == wb.inputType && bb.observer.flushSoon(), xb.safari && "insertText" == wb.inputType && bb.inputState.composing >= 0 && setTimeout((() => se.compositionend(bb, wb)), 20), !1
    };
    const Ae = new Set;
    const We = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let Je = !1;

    function Se() {
      Je = !1
    }
    class Ne {
      constructor(bb) {
        this.lineWrapping = bb, this.doc = eb.H.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(bb, wb) {
        let Mb = this.doc.lineAt(wb).number - this.doc.lineAt(bb).number + 1;
        return this.lineWrapping && (Mb += Math.max(0, Math.ceil((wb - bb - Mb * this.lineLength * .5) / this.lineLength))), this.lineHeight * Mb
      }
      heightForLine(bb) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((bb - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(bb) {
        return this.doc = bb, this
      }
      mustRefreshForWrapping(bb) {
        return We.indexOf(bb) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(bb) {
        let wb = !1;
        for (let Mb = 0; Mb < bb.length; Mb++) {
          let eb = bb[Mb];
          eb < 0 ? Mb++ : this.heightSamples[Math.floor(10 * eb)] || (wb = !0, this.heightSamples[Math.floor(10 * eb)] = !0)
        }
        return wb
      }
      refresh(bb, wb, Mb, eb, Hb, pb) {
        let Vb = We.indexOf(bb) > -1,
          gb = Math.abs(wb - this.lineHeight) > .3 || this.lineWrapping != Vb || Math.abs(Mb - this.charWidth) > .1;
        if (this.lineWrapping = Vb, this.lineHeight = wb, this.charWidth = Mb, this.textHeight = eb, this.lineLength = Hb, gb) {
          this.heightSamples = {};
          for (let bb = 0; bb < pb.length; bb++) {
            let wb = pb[bb];
            wb < 0 ? bb++ : this.heightSamples[Math.floor(10 * wb)] = !0
          }
        }
        return gb
      }
    }
    class ve {
      constructor(bb, wb) {
        this.from = bb, this.heights = wb, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class Qe {
      constructor(bb, wb, Mb, eb, Hb) {
        this.from = bb, this.length = wb, this.top = Mb, this.height = eb, this._content = Hb
      }
      get type() {
        return "number" == typeof this._content ? Yb.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof Wb ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(bb) {
        let wb = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(bb._content) ? bb._content : [bb]);
        return new Qe(this.from, this.length + bb.length, this.top, this.height + bb.height, wb)
      }
    }
    var Ge = function(bb) {
      return bb[bb.ByPos = 0] = "ByPos", bb[bb.ByHeight = 1] = "ByHeight", bb[bb.ByPosNoHeight = 2] = "ByPosNoHeight", bb
    }(Ge || (Ge = {}));
    const qe = .001;
    class ae {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = bb, this.height = wb, this.flags = Mb
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(bb) {
        this.flags = (bb ? 2 : 0) | -3 & this.flags
      }
      setHeight(bb) {
        this.height != bb && (Math.abs(this.height - bb) > qe && (Je = !0), this.height = bb)
      }
      replace(bb, wb, Mb) {
        return ae.of(Mb)
      }
      decomposeLeft(bb, wb) {
        wb.push(this)
      }
      decomposeRight(bb, wb) {
        wb.push(this)
      }
      applyChanges(bb, wb, Mb, eb) {
        let Hb = this,
          pb = Mb.doc;
        for (let Vb = eb.length - 1; Vb >= 0; Vb--) {
          let {
            fromA: gb,
            toA: lb,
            fromB: Lb,
            toB: Ib
          } = eb[Vb], Ob = Hb.lineAt(gb, Ge.ByPosNoHeight, Mb.setDoc(wb), 0, 0), Ub = Ob.to >= lb ? Ob : Hb.lineAt(lb, Ge.ByPosNoHeight, Mb, 0, 0);
          for (Ib += Ub.to - lb, lb = Ub.to; Vb > 0 && Ob.from <= eb[Vb - 1].toA;) gb = eb[Vb - 1].fromA, Lb = eb[Vb - 1].fromB, Vb--, gb < Ob.from && (Ob = Hb.lineAt(gb, Ge.ByPosNoHeight, Mb, 0, 0));
          Lb += Ob.from - gb, gb = Ob.from;
          let tb = Te.build(Mb.setDoc(pb), bb, Lb, Ib);
          Hb = ie(Hb, Hb.replace(gb, lb, tb))
        }
        return Hb.updateHeight(Mb, 0)
      }
      static empty() {
        return new Pe(0, 0, 0)
      }
      static of (bb) {
        if (1 == bb.length) return bb[0];
        let wb = 0,
          Mb = bb.length,
          eb = 0,
          Hb = 0;
        for (;;)
          if (wb == Mb)
            if (eb > 2 * Hb) {
              let Hb = bb[wb - 1];
              Hb.break ? bb.splice(--wb, 1, Hb.left, null, Hb.right) : bb.splice(--wb, 1, Hb.left, Hb.right), Mb += 1 + Hb.break, eb -= Hb.size
            } else {
              if (!(Hb > 2 * eb)) break;
              {
                let wb = bb[Mb];
                wb.break ? bb.splice(Mb, 1, wb.left, null, wb.right) : bb.splice(Mb, 1, wb.left, wb.right), Mb += 2 + wb.break, Hb -= wb.size
              }
            }
        else if (eb < Hb) {
          let Mb = bb[wb++];
          Mb && (eb += Mb.size)
        } else {
          let wb = bb[--Mb];
          wb && (Hb += wb.size)
        }
        let pb = 0;
        return null == bb[wb - 1] ? (pb = 1, wb--) : null == bb[wb] && (pb = 1, Mb++), new ye(ae.of(bb.slice(0, wb)), pb, ae.of(bb.slice(Mb)))
      }
    }

    function ie(bb, wb) {
      return bb == wb ? bb : (bb.constructor != wb.constructor && (Je = !0), wb)
    }
    ae.prototype.size = 1;
    const ue = Zb.replace({});
    class de extends ae {
      constructor(bb, wb, Mb) {
        super(bb, wb), this.deco = Mb, this.spaceAbove = 0
      }
      mainBlock(bb, wb) {
        return new Qe(wb, this.length, bb + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(bb, wb, Mb, eb) {
        return this.spaceAbove && bb < Mb + this.spaceAbove ? new Qe(eb, 0, Mb, this.spaceAbove, ue) : this.mainBlock(Mb, eb)
      }
      lineAt(bb, wb, Mb, eb, Hb) {
        let pb = this.mainBlock(eb, Hb);
        return this.spaceAbove ? this.blockAt(0, Mb, eb, Hb).join(pb) : pb
      }
      forEachLine(bb, wb, Mb, eb, Hb, pb) {
        bb <= Hb + this.length && wb >= Hb && pb(this.lineAt(0, Ge.ByPos, Mb, eb, Hb))
      }
      setMeasuredHeight(bb) {
        let wb = bb.heights[bb.index++];
        wb < 0 ? (this.spaceAbove = -wb, wb = bb.heights[bb.index++]) : this.spaceAbove = 0, this.setHeight(wb)
      }
      updateHeight(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 3 ? arguments[3] : void 0;
        return Mb && Mb.from <= wb && Mb.more && this.setMeasuredHeight(Mb), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class Pe extends de {
      constructor(bb, wb, Mb) {
        super(bb, wb, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = Mb
      }
      mainBlock(bb, wb) {
        return new Qe(wb, this.length, bb + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(bb, wb, Mb) {
        let eb = Mb[0];
        return 1 == Mb.length && (eb instanceof Pe || eb instanceof ne && 4 & eb.flags) && Math.abs(this.length - eb.length) < 10 ? (eb instanceof ne ? eb = new Pe(eb.length, this.height, this.spaceAbove) : eb.height = this.height, this.outdated || (eb.outdated = !1), eb) : ae.of(Mb)
      }
      updateHeight(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 ? arguments[3] : void 0;
        return eb && eb.from <= wb && eb.more ? this.setMeasuredHeight(eb) : (Mb || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, bb.heightForLine(this.length - this.collapsed)) + this.breaks * bb.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class ne extends ae {
      constructor(bb) {
        super(bb, 0)
      }
      heightMetrics(bb, wb) {
        let Mb, eb = bb.doc.lineAt(wb).number,
          Hb = bb.doc.lineAt(wb + this.length).number,
          pb = Hb - eb + 1,
          Vb = 0;
        if (bb.lineWrapping) {
          let wb = Math.min(this.height, bb.lineHeight * pb);
          Mb = wb / pb, this.length > pb + 1 && (Vb = (this.height - wb) / (this.length - pb - 1))
        } else Mb = this.height / pb;
        return {
          firstLine: eb,
          lastLine: Hb,
          perLine: Mb,
          perChar: Vb
        }
      }
      blockAt(bb, wb, Mb, eb) {
        let {
          firstLine: Hb,
          lastLine: pb,
          perLine: Vb,
          perChar: gb
        } = this.heightMetrics(wb, eb);
        if (wb.lineWrapping) {
          let Hb = eb + (bb < wb.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (bb - Mb) / this.height)) * this.length)),
            pb = wb.doc.lineAt(Hb),
            lb = Vb + pb.length * gb,
            Lb = Math.max(Mb, bb - lb / 2);
          return new Qe(pb.from, pb.length, Lb, lb, 0)
        } {
          let eb = Math.max(0, Math.min(pb - Hb, Math.floor((bb - Mb) / Vb))),
            {
              from: gb,
              length: lb
            } = wb.doc.line(Hb + eb);
          return new Qe(gb, lb, Mb + Vb * eb, Vb, 0)
        }
      }
      lineAt(bb, wb, Mb, eb, Hb) {
        if (wb == Ge.ByHeight) return this.blockAt(bb, Mb, eb, Hb);
        if (wb == Ge.ByPosNoHeight) {
          let {
            from: wb,
            to: eb
          } = Mb.doc.lineAt(bb);
          return new Qe(wb, eb - wb, 0, 0, 0)
        }
        let {
          firstLine: pb,
          perLine: Vb,
          perChar: gb
        } = this.heightMetrics(Mb, Hb), lb = Mb.doc.lineAt(bb), Lb = Vb + lb.length * gb, Ib = lb.number - pb, Ob = eb + Vb * Ib + gb * (lb.from - Hb - Ib);
        return new Qe(lb.from, lb.length, Math.max(eb, Math.min(Ob, eb + this.height - Lb)), Lb, 0)
      }
      forEachLine(bb, wb, Mb, eb, Hb, pb) {
        bb = Math.max(bb, Hb), wb = Math.min(wb, Hb + this.length);
        let {
          firstLine: Vb,
          perLine: gb,
          perChar: lb
        } = this.heightMetrics(Mb, Hb);
        for (let Lb = bb, Ib = eb; Lb <= wb;) {
          let wb = Mb.doc.lineAt(Lb);
          if (Lb == bb) {
            let Mb = wb.number - Vb;
            Ib += gb * Mb + lb * (bb - Hb - Mb)
          }
          let eb = gb + lb * wb.length;
          pb(new Qe(wb.from, wb.length, Ib, eb, 0)), Ib += eb, Lb = wb.to + 1
        }
      }
      replace(bb, wb, Mb) {
        let eb = this.length - wb;
        if (eb > 0) {
          let bb = Mb[Mb.length - 1];
          bb instanceof ne ? Mb[Mb.length - 1] = new ne(bb.length + eb) : Mb.push(null, new ne(eb - 1))
        }
        if (bb > 0) {
          let wb = Mb[0];
          wb instanceof ne ? Mb[0] = new ne(bb + wb.length) : Mb.unshift(new ne(bb - 1), null)
        }
        return ae.of(Mb)
      }
      decomposeLeft(bb, wb) {
        wb.push(new ne(bb - 1), null)
      }
      decomposeRight(bb, wb) {
        wb.push(null, new ne(this.length - bb - 1))
      }
      updateHeight(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 ? arguments[3] : void 0,
          Hb = wb + this.length;
        if (eb && eb.from <= wb + this.length && eb.more) {
          let Mb = [],
            pb = Math.max(wb, eb.from),
            Vb = -1;
          for (eb.from > wb && Mb.push(new ne(eb.from - wb - 1).updateHeight(bb, wb)); pb <= Hb && eb.more;) {
            let wb = bb.doc.lineAt(pb).length;
            Mb.length && Mb.push(null);
            let Hb = eb.heights[eb.index++],
              gb = 0;
            Hb < 0 && (gb = -Hb, Hb = eb.heights[eb.index++]), -1 == Vb ? Vb = Hb : Math.abs(Hb - Vb) >= qe && (Vb = -2);
            let lb = new Pe(wb, Hb, gb);
            lb.outdated = !1, Mb.push(lb), pb += wb + 1
          }
          pb <= Hb && Mb.push(null, new ne(Hb - pb).updateHeight(bb, pb));
          let gb = ae.of(Mb);
          return (Vb < 0 || Math.abs(gb.height - this.height) >= qe || Math.abs(Vb - this.heightMetrics(bb, wb).perLine) >= qe) && (Je = !0), ie(this, gb)
        }
        return (Mb || this.outdated) && (this.setHeight(bb.heightForGap(wb, wb + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class ye extends ae {
      constructor(bb, wb, Mb) {
        super(bb.length + wb + Mb.length, bb.height + Mb.height, wb | (bb.outdated || Mb.outdated ? 2 : 0)), this.left = bb, this.right = Mb, this.size = bb.size + Mb.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(bb, wb, Mb, eb) {
        let Hb = Mb + this.left.height;
        return bb < Hb ? this.left.blockAt(bb, wb, Mb, eb) : this.right.blockAt(bb, wb, Hb, eb + this.left.length + this.break)
      }
      lineAt(bb, wb, Mb, eb, Hb) {
        let pb = eb + this.left.height,
          Vb = Hb + this.left.length + this.break,
          gb = wb == Ge.ByHeight ? bb < pb : bb < Vb,
          lb = gb ? this.left.lineAt(bb, wb, Mb, eb, Hb) : this.right.lineAt(bb, wb, Mb, pb, Vb);
        if (this.break || (gb ? lb.to < Vb : lb.from > Vb)) return lb;
        let Lb = wb == Ge.ByPosNoHeight ? Ge.ByPosNoHeight : Ge.ByPos;
        return gb ? lb.join(this.right.lineAt(Vb, Lb, Mb, pb, Vb)) : this.left.lineAt(Vb, Lb, Mb, eb, Hb).join(lb)
      }
      forEachLine(bb, wb, Mb, eb, Hb, pb) {
        let Vb = eb + this.left.height,
          gb = Hb + this.left.length + this.break;
        if (this.break) bb < gb && this.left.forEachLine(bb, wb, Mb, eb, Hb, pb), wb >= gb && this.right.forEachLine(bb, wb, Mb, Vb, gb, pb);
        else {
          let lb = this.lineAt(gb, Ge.ByPos, Mb, eb, Hb);
          bb < lb.from && this.left.forEachLine(bb, lb.from - 1, Mb, eb, Hb, pb), lb.to >= bb && lb.from <= wb && pb(lb), wb > lb.to && this.right.forEachLine(lb.to + 1, wb, Mb, Vb, gb, pb)
        }
      }
      replace(bb, wb, Mb) {
        let eb = this.left.length + this.break;
        if (wb < eb) return this.balanced(this.left.replace(bb, wb, Mb), this.right);
        if (bb > this.left.length) return this.balanced(this.left, this.right.replace(bb - eb, wb - eb, Mb));
        let Hb = [];
        bb > 0 && this.decomposeLeft(bb, Hb);
        let pb = Hb.length;
        for (let Vb of Mb) Hb.push(Vb);
        if (bb > 0 && oe(Hb, pb - 1), wb < this.length) {
          let bb = Hb.length;
          this.decomposeRight(wb, Hb), oe(Hb, bb)
        }
        return ae.of(Hb)
      }
      decomposeLeft(bb, wb) {
        let Mb = this.left.length;
        if (bb <= Mb) return this.left.decomposeLeft(bb, wb);
        wb.push(this.left), this.break && (Mb++, bb >= Mb && wb.push(null)), bb > Mb && this.right.decomposeLeft(bb - Mb, wb)
      }
      decomposeRight(bb, wb) {
        let Mb = this.left.length,
          eb = Mb + this.break;
        if (bb >= eb) return this.right.decomposeRight(bb - eb, wb);
        bb < Mb && this.left.decomposeRight(bb, wb), this.break && bb < eb && wb.push(null), wb.push(this.right)
      }
      balanced(bb, wb) {
        return bb.size > 2 * wb.size || wb.size > 2 * bb.size ? ae.of(this.break ? [bb, null, wb] : [bb, wb]) : (this.left = ie(this.left, bb), this.right = ie(this.right, wb), this.setHeight(bb.height + wb.height), this.outdated = bb.outdated || wb.outdated, this.size = bb.size + wb.size, this.length = bb.length + this.break+wb.length, this)
      }
      updateHeight(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: Hb,
            right: pb
          } = this,
          Vb = wb + Hb.length + this.break,
          gb = null;
        return eb && eb.from <= wb + Hb.length && eb.more ? gb = Hb = Hb.updateHeight(bb, wb, Mb, eb) : Hb.updateHeight(bb, wb, Mb), eb && eb.from <= Vb + pb.length && eb.more ? gb = pb = pb.updateHeight(bb, Vb, Mb, eb) : pb.updateHeight(bb, Vb, Mb), gb ? this.balanced(Hb, pb) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function oe(bb, wb) {
      let Mb, eb;
      null == bb[wb] && (Mb = bb[wb - 1]) instanceof ne && (eb = bb[wb + 1]) instanceof ne && bb.splice(wb - 1, 3, new ne(Mb.length + 1 + eb.length))
    }
    class Te {
      constructor(bb, wb) {
        this.pos = bb, this.oracle = wb, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = bb
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(bb, wb) {
        if (this.lineStart > -1) {
          let bb = Math.min(wb, this.lineEnd),
            Mb = this.nodes[this.nodes.length - 1];
          Mb instanceof Pe ? Mb.length += bb - this.pos : (bb > this.pos || !this.isCovered) && this.nodes.push(new Pe(bb - this.pos, -1, 0)), this.writtenTo = bb, wb > bb && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = wb
      }
      point(bb, wb, Mb) {
        if (bb < wb || Mb.heightRelevant) {
          let eb = Mb.widget ? Mb.widget.estimatedHeight : 0,
            Hb = Mb.widget ? Mb.widget.lineBreaks : 0;
          eb < 0 && (eb = this.oracle.lineHeight);
          let pb = wb - bb;
          Mb.block ? this.RMb(new de(pb, eb, Mb)) : (pb || Hb || eb >= 5) && this.addLineDeco(eb, Hb, pb)
        } else wb > bb && this.span(bb, wb);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: bb,
          to: wb
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = bb, this.lineEnd = wb, this.writtenTo < bb && ((this.writtenTo < bb - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, bb - 1)), this.nodes.push(null)), this.pos > bb && this.nodes.push(new Pe(this.pos - bb, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(bb, wb) {
        let Mb = new ne(wb - bb);
        return this.oracle.doc.lineAt(bb).to == wb && (Mb.flags |= 4), Mb
      }
      ensureLine() {
        this.enterLine();
        let bb = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (bb instanceof Pe) return bb;
        let wb = new Pe(0, -1, 0);
        return this.nodes.push(wb), wb
      }
      RMb(bb) {
        this.enterLine();
        let wb = bb.deco;
        wb && wb.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(bb), this.writtenTo = this.pos = this.pos + bb.length, wb && wb.endSide > 0 && (this.covering = bb)
      }
      addLineDeco(bb, wb, Mb) {
        let eb = this.ensureLine();
        eb.length += Mb, eb.collapsed += Mb, eb.widgetHeight = Math.max(eb.widgetHeight, bb), eb.breaks += wb, this.writtenTo = this.pos = this.pos + Mb
      }
      finish(bb) {
        let wb = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || wb instanceof Pe || this.isCovered ? (this.writtenTo < this.pos || null == wb) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new Pe(0, -1, 0));
        let Mb = bb;
        for (let eb of this.nodes) eb instanceof Pe && eb.updateHeight(this.oracle, Mb), Mb += eb ? eb.length : 1;
        return this.nodes
      }
      static build(bb, wb, Mb, Hb) {
        let pb = new Te(Mb, bb);
        return eb.B.spans(wb, Mb, Hb, pb, 0), pb.finish(Mb)
      }
    }
    class ke {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(bb, wb, Mb, eb) {
        (bb < wb || Mb && Mb.heightRelevant || eb && eb.heightRelevant) && Sb(bb, wb, this.changes, 5)
      }
    }

    function bH(bb, wb) {
      let Mb = bb.getBoundingClientRect(),
        eb = bb.ownerDocument,
        Hb = eb.defaultView || window,
        pb = Math.max(0, Mb.left),
        Vb = Math.min(Hb.innerWidth, Mb.right),
        gb = Math.max(0, Mb.top),
        lb = Math.min(Hb.innerHeight, Mb.bottom);
      for (let Lb = bb.parentNode; Lb && Lb != eb.body;)
        if (1 == Lb.nodeType) {
          let wb = Lb,
            Mb = window.getComputedStyle(wb);
          if ((wb.scrollHeight > wb.clientHeight || wb.scrollWidth > wb.clientWidth) && "visible" != Mb.overflow) {
            let Mb = wb.getBoundingClientRect();
            pb = Math.max(pb, Mb.left), Vb = Math.min(Vb, Mb.right), gb = Math.max(gb, Mb.top), lb = Math.min(Lb == bb.parentNode ? Hb.innerHeight : lb, Mb.bottom)
          }
          Lb = "absolute" == Mb.position || "fixed" == Mb.position ? wb.offsetParent : wb.parentNode
        } else {
          if (11 != Lb.nodeType) break;
          Lb = Lb.host
        } return {
        left: pb - Mb.left,
        right: Math.max(pb, Vb) - Mb.left,
        top: gb - (Mb.top + wb),
        bottom: Math.max(gb, lb) - (Mb.top + wb)
      }
    }

    function wH(bb, wb) {
      let Mb = bb.getBoundingClientRect();
      return {
        left: 0,
        right: Mb.right - Mb.left,
        top: wb,
        bottom: Mb.bottom - (Mb.top + wb)
      }
    }
    class MH {
      constructor(bb, wb, Mb, eb) {
        this.from = bb, this.to = wb, this.size = Mb, this.displaySize = eb
      }
      static same(bb, wb) {
        if (bb.length != wb.length) return !1;
        for (let Mb = 0; Mb < bb.length; Mb++) {
          let eb = bb[Mb],
            Hb = wb[Mb];
          if (eb.from != Hb.from || eb.to != Hb.to || eb.size != Hb.size) return !1
        }
        return !0
      }
      draw(bb, wb) {
        return Zb.replace({
          widget: new eH(this.displaySize * (wb ? bb.scaleY : bb.scaleX), wb)
        }).range(this.from, this.to)
      }
    }
    class eH extends cb {
      constructor(bb, wb) {
        super(), this.size = bb, this.vertical = wb
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
    class HH {
      constructor(bb, wb) {
        this.view = bb, this.state = wb, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = lH, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Lw.LTR, this.pwb = [], this.mustEnforceCursorAssoc = !1;
        let Mb = wb.facet(bM).some((bb => "function" != typeof bb && "cm-lineWrapping" == bb.class));
        this.heightOracle = new Ne(Mb), this.stateDeco = LH(wb), this.heightMap = ae.empty().applyChanges(this.stateDeco, eb.H.empty, this.heightOracle.setDoc(wb.doc), [new IM(0, 0, 0, wb.doc.length)]);
        for (let eb = 0; eb < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); eb++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Zb.set(this.lineGaps.map((bb => bb.draw(this, !1)))), this.scrollParent = bb.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let bb = [this.viewport],
          {
            main: wb
          } = this.state.selection;
        for (let Mb = 0; Mb <= 1; Mb++) {
          let eb = Mb ? wb.head : wb.anchor;
          if (!bb.some((bb => {
              let {
                from: wb,
                to: Mb
              } = bb;
              return eb >= wb && eb <= Mb
            }))) {
            let {
              from: wb,
              to: Mb
            } = this.lineBlockAt(eb);
            bb.push(new pH(wb, Mb))
          }
        }
        return this.viewports = bb.sort(((bb, wb) => bb.from - wb.from)), this.updateScaler()
      }
      updateScaler() {
        let bb = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? lH : new IH(this.heightOracle, this.heightMap, this.viewports), bb.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (bb => {
          this.viewportLines.push(OH(bb, this.scaler))
        }))
      }
      update(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = bb.state;
        let Mb = this.stateDeco;
        this.stateDeco = LH(this.state);
        let Hb = bb.changedRanges,
          pb = IM.extendWithRanges(Hb, function(bb, wb, Mb) {
            let Hb = new ke;
            return eb.B.compare(bb, wb, Mb, Hb, 0), Hb.changes
          }(Mb, this.stateDeco, bb ? bb.changes : eb.ChangeSet.empty(this.state.doc.length))),
          Vb = this.heightMap.height,
          gb = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        Se(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, bb.startState.doc, this.heightOracle.setDoc(this.state.doc), pb), (this.heightMap.height != Vb || Je) && (bb.flags |= 2), gb ? (this.scrollAnchorPos = bb.changes.mapPos(gb.from, -1), this.scrollAnchorHeight = gb.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = Vb);
        let lb = pb.length ? this.mapViewport(this.viewport, bb.changes) : this.viewport;
        (wb && (wb.range.head < lb.from || wb.range.head > lb.to) || !this.viewportIsAppropriate(lb)) && (lb = this.getViewport(0, wb));
        let Lb = lb.from != this.viewport.from || lb.to != this.viewport.to;
        this.viewport = lb, bb.flags |= this.updateForViewport(), (Lb || !bb.changes.empty || 2 & bb.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, bb.changes))), bb.flags |= this.computeVisibleRanges(bb.changes), wb && (this.scrollTarget = wb), !this.mustEnforceCursorAssoc && (bb.selectionSet || bb.focusChanged) && bb.view.lineWrapping && bb.state.selection.main.empty && bb.state.selection.main.assoc && !bb.state.facet(Gw) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: bb
        } = this, wb = bb.contentDOM, Mb = window.getComputedStyle(wb), Hb = this.heightOracle, pb = Mb.whiteSpace;
        this.defaultTextDirection = "rtl" == Mb.direction ? Lw.RTL : Lw.LTR;
        let Vb = this.heightOracle.mustRefreshForWrapping(pb) || "refresh" === this.mustMeasureContent,
          gb = wb.getBoundingClientRect(),
          lb = Vb || this.mustMeasureContent || this.contentDOMHeight != gb.height;
        this.contentDOMHeight = gb.height, this.mustMeasureContent = !1;
        let Lb = 0,
          Ib = 0;
        if (gb.width && gb.height) {
          let {
            scaleX: bb,
            scaleY: Mb
          } = ob(wb, gb);
          (bb > .005 && Math.abs(this.scaleX - bb) > .005 || Mb > .005 && Math.abs(this.scaleY - Mb) > .005) && (this.scaleX = bb, this.scaleY = Mb, Lb |= 16, Vb = lb = !0)
        }
        let Ob = (parseInt(Mb.paddingTop) || 0) * this.scaleY,
          Ub = (parseInt(Mb.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == Ob && this.paddingBottom == Ub || (this.paddingTop = Ob, this.paddingBottom = Ub, Lb |= 18), this.editorWidth != bb.scrollDOM.clientWidth && (Hb.lineWrapping && (lb = !0), this.editorWidth = bb.scrollDOM.clientWidth, Lb |= 16);
        let tb = Tb(this.view.contentDOM, !1).y;
        tb != this.scrollParent && (this.scrollParent = tb, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let Cb = this.getScrollOffset();
        this.scrollOffset != Cb && (this.scrollAnchorHeight = -1, this.scrollOffset = Cb), this.scrolledToBottom = pw(this.scrollParent || bb.win);
        let Eb = (this.printing ? wH : bH)(wb, this.paddingTop),
          Fb = Eb.top - this.pixelViewport.top,
          Bb = Eb.bottom - this.pixelViewport.bottom;
        this.pixelViewport = Eb;
        let sb = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (sb != this.inView && (this.inView = sb, sb && (lb = !0)), !this.inView && !this.scrollTarget && ! function(bb) {
            let wb = bb.getBoundingClientRect(),
              Mb = bb.ownerDocument.defaultView || window;
            return wb.left < Mb.innerWidth && wb.right > 0 && wb.top < Mb.innerHeight && wb.bottom > 0
          }(bb.dom)) return 0;
        let mb = gb.width;
        if (this.contentDOMWidth == mb && this.editorHeight == bb.scrollDOM.clientHeight || (this.contentDOMWidth = gb.width, this.editorHeight = bb.scrollDOM.clientHeight, Lb |= 16), lb) {
          let wb = bb.docView.measureVisibleLineHeights(this.viewport);
          if (Hb.mustRefreshForHeights(wb) && (Vb = !0), Vb || Hb.lineWrapping && Math.abs(mb - this.contentDOMWidth) > Hb.charWidth) {
            let {
              lineHeight: Mb,
              charWidth: eb,
              textHeight: gb
            } = bb.docView.measureTextSize();
            Vb = Mb > 0 && Hb.refresh(pb, Mb, eb, gb, Math.max(5, mb / eb), wb), Vb && (bb.docView.minWidth = 0, Lb |= 16)
          }
          Fb > 0 && Bb > 0 ? Ib = Math.max(Fb, Bb) : Fb < 0 && Bb < 0 && (Ib = Math.min(Fb, Bb)), Se();
          for (let Mb of this.viewports) {
            let pb = Mb.from == this.viewport.from ? wb : bb.docView.measureVisibleLineHeights(Mb);
            this.heightMap = (Vb ? ae.empty().applyChanges(this.stateDeco, eb.H.empty, this.heightOracle, [new IM(0, 0, 0, bb.state.doc.length)]) : this.heightMap).updateHeight(Hb, 0, Vb, new ve(Mb.from, pb))
          }
          Je && (Lb |= 2)
        }
        let hb = !this.viewportIsAppropriate(this.viewport, Ib) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return hb && (2 & Lb && (Lb |= this.updateScaler()), this.viewport = this.getViewport(Ib, this.scrollTarget), Lb |= this.updateForViewport()), (2 & Lb || hb) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(Vb ? [] : this.lineGaps, bb)), Lb |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, bb.docView.enforceCursorAssoc()), Lb
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(bb, wb) {
        let Mb = .5 - Math.max(-.5, Math.min(.5, bb / 1e3 / 2)),
          eb = this.heightMap,
          Hb = this.heightOracle,
          {
            visibleTop: pb,
            visibleBottom: Vb
          } = this,
          gb = new pH(eb.lineAt(pb - 1e3 * Mb, Ge.ByHeight, Hb, 0, 0).from, eb.lineAt(Vb + 1e3 * (1 - Mb), Ge.ByHeight, Hb, 0, 0).to);
        if (wb) {
          let {
            head: bb
          } = wb.range;
          if (bb < gb.from || bb > gb.to) {
            let Mb, pb = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              Vb = eb.lineAt(bb, Ge.ByPos, Hb, 0, 0);
            Mb = "center" == wb.y ? (Vb.top + Vb.bottom) / 2 - pb / 2 : "start" == wb.y || "nearest" == wb.y && bb < gb.from ? Vb.top : Vb.bottom - pb, gb = new pH(eb.lineAt(Mb - 500, Ge.ByHeight, Hb, 0, 0).from, eb.lineAt(Mb + pb + 500, Ge.ByHeight, Hb, 0, 0).to)
          }
        }
        return gb
      }
      mapViewport(bb, wb) {
        let Mb = wb.mapPos(bb.from, -1),
          eb = wb.mapPos(bb.to, 1);
        return new pH(this.heightMap.lineAt(Mb, Ge.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(eb, Ge.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(bb) {
        let {
          from: wb,
          to: Mb
        } = bb, eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: Hb
        } = this.heightMap.lineAt(wb, Ge.ByPos, this.heightOracle, 0, 0), {
          bottom: pb
        } = this.heightMap.lineAt(Mb, Ge.ByPos, this.heightOracle, 0, 0), {
          visibleTop: Vb,
          visibleBottom: gb
        } = this;
        return (0 == wb || Hb <= Vb - Math.max(10, Math.min(-eb, 250))) && (Mb == this.state.doc.length || pb >= gb + Math.max(10, Math.min(eb, 250))) && Hb > Vb - 2e3 && pb < gb + 2e3
      }
      mapLineGaps(bb, wb) {
        if (!bb.length || wb.empty) return bb;
        let Mb = [];
        for (let eb of bb) wb.touchesRange(eb.from, eb.to) || Mb.push(new MH(wb.mapPos(eb.from), wb.mapPos(eb.to), eb.size, eb.displaySize));
        return Mb
      }
      ensureLineGaps(bb, wb) {
        let Mb = this.heightOracle.lineWrapping,
          Hb = Mb ? 1e4 : 2e3,
          pb = Hb >> 1,
          Vb = Hb << 1;
        if (this.defaultTextDirection != Lw.LTR && !Mb) return [];
        let gb = [],
          lb = (Hb, Vb, Lb, Ib) => {
            if (Vb - Hb < pb) return;
            let Ob = this.state.selection.main,
              Ub = [Ob.from];
            Ob.empty || Ub.push(Ob.to);
            for (let bb of Ub)
              if (bb > Hb && bb < Vb) return lb(Hb, bb - 10, Lb, Ib), void lb(bb + 10, Vb, Lb, Ib);
            let tb = function(bb, wb) {
              for (let Mb of bb)
                if (wb(Mb)) return Mb;
              return
            }(bb, (bb => bb.from >= Lb.from && bb.to <= Lb.to && Math.abs(bb.from - Hb) < pb && Math.abs(bb.to - Vb) < pb && !Ub.some((wb => bb.from < wb && bb.to > wb))));
            if (!tb) {
              if (Vb < Lb.to && wb && Mb && wb.pwb.some((bb => bb.from <= Vb && bb.to >= Vb))) {
                let bb = wb.moveToLineBoundary(eb.j.cursor(Vb), !1, !0).head;
                bb > Hb && (Vb = bb)
              }
              let bb = this.gapSize(Lb, Hb, Vb, Ib);
              tb = new MH(Hb, Vb, bb, Mb || bb < 2e6 ? bb : 2e6)
            }
            gb.push(tb)
          },
          Lb = wb => {
            if (wb.length < Vb || wb.type != Yb.Text) return;
            let pb = function(bb, wb, Mb) {
              let Hb = [],
                pb = bb,
                Vb = 0;
              eb.B.spans(Mb, bb, wb, {
                span() {},
                point(bb, wb) {
                  bb > pb && (Hb.push({
                    from: pb,
                    to: bb
                  }), Vb += bb - pb), pb = wb
                }
              }, 20), pb < wb && (Hb.push({
                from: pb,
                to: wb
              }), Vb += wb - pb);
              return {
                total: Vb,
                gF: Hb
              }
            }(wb.from, wb.to, this.stateDeco);
            if (pb.total < Vb) return;
            let gb, Lb, Ib = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (Mb) {
              let bb, Mb, eb = Hb / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != Ib) {
                let Hb = gH(pb, Ib),
                  Vb = ((this.visibleBottom - this.visibleTop) / 2 + eb) / wb.height;
                bb = Hb - Vb, Mb = Hb + Vb
              } else bb = (this.visibleTop - wb.top - eb) / wb.height, Mb = (this.visibleBottom - wb.top + eb) / wb.height;
              gb = VH(pb, bb), Lb = VH(pb, Mb)
            } else {
              let Mb = pb.total * this.heightOracle.charWidth,
                eb = Hb * this.heightOracle.charWidth,
                Vb = 0;
              if (Mb > 2e6)
                for (let Hb of bb) Hb.from >= wb.from && Hb.from < wb.to && Hb.size != Hb.displaySize && Hb.from * this.heightOracle.charWidth + Vb < this.pixelViewport.left && (Vb = Hb.size - Hb.displaySize);
              let lb, Ob, Ub = this.pixelViewport.left + Vb,
                tb = this.pixelViewport.right + Vb;
              if (null != Ib) {
                let bb = gH(pb, Ib),
                  wb = ((tb - Ub) / 2 + eb) / Mb;
                lb = bb - wb, Ob = bb + wb
              } else lb = (Ub - eb) / Mb, Ob = (tb + eb) / Mb;
              gb = VH(pb, lb), Lb = VH(pb, Ob)
            }
            gb > wb.from && lb(wb.from, gb, wb, pb), Lb < wb.to && lb(Lb, wb.to, wb, pb)
          };
        for (let eb of this.viewportLines) Array.isArray(eb.type) ? eb.type.forEach(Lb) : Lb(eb);
        return gb
      }
      gapSize(bb, wb, Mb, eb) {
        let Hb = gH(eb, Mb) - gH(eb, wb);
        return this.heightOracle.lineWrapping ? bb.height * Hb : eb.total * this.heightOracle.charWidth * Hb
      }
      updateLineGaps(bb) {
        MH.same(bb, this.lineGaps) || (this.lineGaps = bb, this.lineGapDeco = Zb.set(bb.map((bb => bb.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(bb) {
        let wb = this.stateDeco;
        this.lineGaps.length && (wb = wb.concat(this.lineGapDeco));
        let Mb = [];
        eb.B.spans(wb, this.viewport.from, this.viewport.to, {
          span(bb, wb) {
            Mb.push({
              from: bb,
              to: wb
            })
          },
          point() {}
        }, 20);
        let Hb = 0;
        if (Mb.length != this.pwb.length) Hb = 12;
        else
          for (let eb = 0; eb < Mb.length && !(8 & Hb); eb++) {
            let wb = this.pwb[eb],
              pb = Mb[eb];
            wb.from == pb.from && wb.to == pb.to || (Hb |= 4, bb && bb.mapPos(wb.from, -1) == pb.from && bb.mapPos(wb.to, 1) == pb.to || (Hb |= 8))
          }
        return this.pwb = Mb, Hb
      }
      lineBlockAt(bb) {
        return bb >= this.viewport.from && bb <= this.viewport.to && this.viewportLines.find((wb => wb.from <= bb && wb.to >= bb)) || OH(this.heightMap.lineAt(bb, Ge.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(bb) {
        return bb >= this.viewportLines[0].top && bb <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((wb => wb.top <= bb && wb.bottom >= bb)) || OH(this.heightMap.lineAt(this.scaler.fromDOM(bb), Ge.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(bb) {
        let wb = this.lineBlockAtHeight(bb + 8);
        return wb.from >= this.viewport.from || this.viewportLines[0].top - bb > 200 ? wb : this.viewportLines[0]
      }
      elementAtHeight(bb) {
        return OH(this.heightMap.blockAt(this.scaler.fromDOM(bb), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class pH {
      constructor(bb, wb) {
        this.from = bb, this.to = wb
      }
    }

    function VH(bb, wb) {
      let {
        total: Mb,
        gF: eb
      } = bb;
      if (wb <= 0) return eb[0].from;
      if (wb >= 1) return eb[eb.length - 1].to;
      let Hb = Math.floor(Mb * wb);
      for (let pb = 0;; pb++) {
        let {
          from: bb,
          to: wb
        } = eb[pb], Mb = wb - bb;
        if (Hb <= Mb) return bb + Hb;
        Hb -= Mb
      }
    }

    function gH(bb, wb) {
      let Mb = 0;
      for (let {
          from: eb,
          to: Hb
        }
        of bb.gF) {
        if (wb <= Hb) {
          Mb += wb - eb;
          break
        }
        Mb += Hb - eb
      }
      return Mb / bb.total
    }
    const lH = {
      toDOM: bb => bb,
      fromDOM: bb => bb,
      scale: 1,
      eq(bb) {
        return bb == this
      }
    };

    function LH(bb) {
      let wb = bb.facet(wM).filter((bb => "function" != typeof bb)),
        Mb = bb.facet(eM).filter((bb => "function" != typeof bb));
      return Mb.length && wb.push(eb.B.join(Mb)), wb
    }
    class IH {
      constructor(bb, wb, Mb) {
        let eb = 0,
          Hb = 0,
          pb = 0;
        this.viewports = Mb.map((Mb => {
          let {
            from: Hb,
            to: pb
          } = Mb, Vb = wb.lineAt(Hb, Ge.ByPos, bb, 0, 0).top, gb = wb.lineAt(pb, Ge.ByPos, bb, 0, 0).bottom;
          return eb += gb - Vb, {
            from: Hb,
            to: pb,
            top: Vb,
            bottom: gb,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - eb) / (wb.height - eb);
        for (let Vb of this.viewports) Vb.domTop = pb + (Vb.top - Hb) * this.scale, pb = Vb.domBottom = Vb.domTop + (Vb.bottom - Vb.top), Hb = Vb.bottom
      }
      toDOM(bb) {
        for (let wb = 0, Mb = 0, eb = 0;; wb++) {
          let Hb = wb < this.viewports.length ? this.viewports[wb] : null;
          if (!Hb || bb < Hb.top) return eb + (bb - Mb) * this.scale;
          if (bb <= Hb.bottom) return Hb.domTop + (bb - Hb.top);
          Mb = Hb.bottom, eb = Hb.domBottom
        }
      }
      fromDOM(bb) {
        for (let wb = 0, Mb = 0, eb = 0;; wb++) {
          let Hb = wb < this.viewports.length ? this.viewports[wb] : null;
          if (!Hb || bb < Hb.domTop) return Mb + (bb - eb) / this.scale;
          if (bb <= Hb.domBottom) return Hb.top + (bb - Hb.domTop);
          Mb = Hb.bottom, eb = Hb.domBottom
        }
      }
      eq(bb) {
        return bb instanceof IH && (this.scale == bb.scale && this.viewports.length == bb.viewports.length && this.viewports.every(((wb, Mb) => wb.from == bb.viewports[Mb].from && wb.to == bb.viewports[Mb].to)))
      }
    }

    function OH(bb, wb) {
      if (1 == wb.scale) return bb;
      let Mb = wb.toDOM(bb.top),
        eb = wb.toDOM(bb.bottom);
      return new Qe(bb.from, bb.length, Mb, eb - Mb, Array.isArray(bb._content) ? bb._content.map((bb => OH(bb, wb))) : bb._content)
    }
    const UH = eb.o.define({
        combine: bb => bb.join(" ")
      }),
      tH = eb.o.define({
        combine: bb => bb.indexOf(!0) > -1
      }),
      CH = Hb.e.newName(),
      EH = Hb.e.newName(),
      FH = Hb.e.newName(),
      BH = {
        "&light": "." + EH,
        "&dark": "." + FH
      };

    function sH(bb, wb, Mb) {
      return new Hb.e(wb, {
        finish: wb => /&/.test(wb) ? wb.replace(/&\w*/, (wb => {
          if ("&" == wb) return bb;
          if (!Mb || !Mb[wb]) throw new RangeError(`Unsupported selector: ${wb}`);
          return Mb[wb]
        })) : bb + " " + wb
      })
    }
    const mH = sH("." + CH, {
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
      }, BH),
      hH = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      zH = xb.ie && xb.ie_version <= 11;
    class XH {
      constructor(bb) {
        this.view = bb, this.active = !1, this.editContext = null, this.selectionRange = new kb, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = bb.contentDOM, this.observer = new MutationObserver((wb => {
          for (let bb of wb) this.queue.push(bb);
          (xb.ie && xb.ie_version <= 11 || xb.ios && bb.composing) && wb.some((bb => "childList" == bb.type && bb.removedNodes.length || "characterData" == bb.type && bb.oldValue.length > bb.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !xb.android || !1 === bb.constructor.EDIT_CONTEXT || xb.chrome && xb.chrome_version < 126 || (this.editContext = new KH(bb), bb.state.facet(Pw) && (bb.contentDOM.editContext = this.editContext.editContext)), zH && (this.onCharData = bb => {
          this.queue.push({
            target: bb.target,
            type: "characterData",
            oldValue: bb.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.Rm = this.Rm.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var bb;
          (null === (bb = this.view.docView) || void 0 === bb ? void 0 : bb.lastUpdate) < Date.now() - 75 && this.Rm()
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
      Rm() {
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
        if (this.gapIntersection && (bb.length != this.gaps.length || this.gaps.some(((wb, Mb) => wb != bb[Mb])))) {
          this.gapIntersection.disconnect();
          for (let wb of bb) this.gapIntersection.observe(wb);
          this.gaps = bb
        }
      }
      onSelectionChange(bb) {
        let wb = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: Mb
        } = this, eb = this.selectionRange;
        if (Mb.state.facet(Pw) ? Mb.root.activeElement != this.dom : !Gb(this.dom, eb)) return;
        let Hb = eb.anchorNode && Mb.docView.tile.nearest(eb.anchorNode);
        Hb && Hb.isWidget() && Hb.widget.ignoreEvent(bb) ? wb || (this.selectionChanged = !1) : (xb.ie && xb.ie_version <= 11 || xb.android && xb.chrome) && !Mb.state.selection.main.empty && eb.focusNode && ab(eb.focusNode, eb.focusOffset, eb.anchorNode, eb.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: bb
        } = this, wb = vb(bb.root);
        if (!wb) return !1;
        let Mb = xb.safari && 11 == bb.root.nodeType && bb.root.activeElement == this.dom && function(bb, wb) {
          if (wb.getComposedRanges) {
            let Mb = wb.getComposedRanges(bb.root)[0];
            if (Mb) return jH(bb, Mb)
          }
          let Mb = null;

          function eb(bb) {
            bb.preventDefault(), bb.stopImmediatePropagation(), Mb = bb.getTargetRanges()[0]
          }
          return bb.contentDOM.addEventListener("beforeinput", eb, !0), bb.dom.ownerDocument.execCommand("indent"), bb.contentDOM.removeEventListener("beforeinput", eb, !0), Mb ? jH(bb, Mb) : null
        }(this.view, wb) || wb;
        if (!Mb || this.selectionRange.eq(Mb)) return !1;
        let eb = Gb(this.dom, Mb);
        return eb && !this.selectionChanged && bb.inputState.lastFocusTime > Date.now() - 200 && bb.inputState.lastTouchTime < Date.now() - 300 && function(bb, wb) {
          let Mb = wb.focusNode,
            eb = wb.focusOffset;
          if (!Mb || wb.anchorNode != Mb || wb.anchorOffset != eb) return !1;
          for (eb = Math.min(eb, Pb(Mb));;)
            if (eb) {
              if (1 != Mb.nodeType) return !1;
              let bb = Mb.childNodes[eb - 1];
              "false" == bb.contentEditable ? eb-- : (Mb = bb, eb = Pb(Mb))
            } else {
              if (Mb == bb) return !0;
              eb = ib(Mb), Mb = Mb.parentNode
            }
        }(this.dom, Mb) ? (this.view.inputState.lastFocusTime = 0, bb.docView.updateSelection(), !1) : (this.selectionRange.setRange(Mb), eb && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(bb, wb) {
        this.selectionRange.set(bb.node, bb.offset, wb.node, wb.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let bb = 0,
          wb = null;
        for (let Mb = this.dom; Mb;)
          if (1 == Mb.nodeType) !wb && bb < this.scrollTargets.length && this.scrollTargets[bb] == Mb ? bb++ : wb || (wb = this.scrollTargets.slice(0, bb)), wb && wb.push(Mb), Mb = Mb.assignedSlot || Mb.parentNode;
          else {
            if (11 != Mb.nodeType) break;
            Mb = Mb.host
          } if (bb < this.scrollTargets.length && !wb && (wb = this.scrollTargets.slice(0, bb)), wb) {
          for (let bb of this.scrollTargets) bb.removeEventListener("scroll", this.onScroll);
          for (let bb of this.scrollTargets = wb) bb.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, hH), zH && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), zH && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(bb, wb) {
        var Mb;
        if (!this.delayedAndroidKey) {
          let bb = () => {
            let bb = this.delayedAndroidKey;
            if (bb) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = bb.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && bb.force && Hw(this.dom, bb.key, bb.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(bb)
        }
        this.delayedAndroidKey && "Enter" != bb || (this.delayedAndroidKey = {
          key: bb,
          keyCode: wb,
          force: this.lastChange < Date.now() - 50 || !!(null === (Mb = this.delayedAndroidKey) || void 0 === Mb ? void 0 : Mb.force)
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
        let wb = -1,
          Mb = -1,
          eb = !1;
        for (let Hb of bb) {
          let bb = this.readMutation(Hb);
          bb && (bb.typeOver && (eb = !0), -1 == wb ? ({
            from: wb,
            to: Mb
          } = bb) : (wb = Math.min(bb.from, wb), Mb = Math.max(bb.to, Mb)))
        }
        return {
          from: wb,
          to: Mb,
          typeOver: eb
        }
      }
      readChange() {
        let {
          from: bb,
          to: wb,
          typeOver: Mb
        } = this.processRecords(), eb = this.selectionChanged && Gb(this.dom, this.selectionRange);
        if (bb < 0 && !eb) return null;
        bb > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let Hb = new ee(this.view, bb, wb, Mb);
        return this.view.docView.domChanged = {
          newSel: Hb.newSel ? Hb.newSel.main : null
        }, Hb
      }
      flush() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        bb && this.readSelectionRange();
        let wb = this.readChange();
        if (!wb) return this.view.requestMeasure(), !1;
        let Mb = this.view.state,
          eb = pe(this.view, wb);
        return this.view.state == Mb && (wb.domChanged || wb.newSel && !le(this.view.state.selection, wb.newSel.main)) && this.view.update([]), eb
      }
      readMutation(bb) {
        let wb = this.view.docView.tile.nearest(bb.target);
        if (!wb || wb.isWidget()) return null;
        if (wb.markDirty("attributes" == bb.type), "childList" == bb.type) {
          let Mb = xH(wb, bb.previousSibling || bb.target.previousSibling, -1),
            eb = xH(wb, bb.nextSibling || bb.target.nextSibling, 1);
          return {
            from: Mb ? wb.posAfter(Mb) : wb.posAtStart,
            to: eb ? wb.posBefore(eb) : wb.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == bb.type ? {
          from: wb.posAtStart,
          to: wb.posAtEnd,
          typeOver: bb.target.nodeValue == bb.oldValue
        } : null
      }
      setWindow(bb) {
        bb != this.win && (this.removeWindowListeners(this.win), this.win = bb, this.addWindowListeners(this.win))
      }
      addWindowListeners(bb) {
        bb.addEventListener("resize", this.Rm), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : bb.addEventListener("beforeprint", this.onPrint), bb.addEventListener("scroll", this.onScroll), bb.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(bb) {
        bb.removeEventListener("scroll", this.onScroll), bb.removeEventListener("resize", this.Rm), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : bb.removeEventListener("beforeprint", this.onPrint), bb.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(bb) {
        this.editContext && (this.editContext.update(bb), bb.startState.facet(Pw) != bb.state.facet(Pw) && (bb.view.contentDOM.editContext = bb.state.facet(Pw) ? this.editContext.editContext : null))
      }
      destroy() {
        var bb, wb, Mb;
        this.stop(), null === (bb = this.intersection) || void 0 === bb || bb.disconnect(), null === (wb = this.gapIntersection) || void 0 === wb || wb.disconnect(), null === (Mb = this.resizeScroll) || void 0 === Mb || Mb.disconnect();
        for (let eb of this.scrollTargets) eb.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function xH(bb, wb, Mb) {
      for (; wb;) {
        let eb = tM.get(wb);
        if (eb && eb.parent == bb) return eb;
        let Hb = wb.parentNode;
        wb = Hb != bb.dom ? Hb : Mb > 0 ? wb.nextSibling : wb.previousSibling
      }
      return null
    }

    function jH(bb, wb) {
      let Mb = wb.startContainer,
        eb = wb.startOffset,
        Hb = wb.endContainer,
        pb = wb.endOffset,
        Vb = bb.docView.domAtPos(bb.state.selection.main.anchor, 1);
      return ab(Vb.node, Vb.offset, Hb, pb) && ([Mb, eb, Hb, pb] = [Hb, pb, Mb, eb]), {
        anchorNode: Mb,
        anchorOffset: eb,
        focusNode: Hb,
        focusOffset: pb
      }
    }
    class KH {
      constructor(bb) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(bb.state);
        let wb = this.editContext = new window.EditContext({
          text: bb.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, bb.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(bb.state.selection.main.head)
        });
        this.handlers.textupdate = Mb => {
          let Hb = bb.state.selection.main,
            {
              anchor: pb,
              head: Vb
            } = Hb,
            gb = this.toEditorPos(Mb.updateRangeStart),
            lb = this.toEditorPos(Mb.updateRangeEnd);
          bb.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: Mb.updateRangeStart,
            editorBase: gb,
            drifted: !1
          });
          let Lb = lb - gb > Mb.text.length;
          gb == this.from && pb < this.from ? gb = pb : lb == this.to && pb > this.to && (lb = pb);
          let Ib = ge(bb.state.sliceDoc(gb, lb), Mb.text, (Lb ? Hb.from : Hb.to) - gb, Lb ? "end" : null);
          if (!Ib) {
            let wb = eb.j.single(this.toEditorPos(Mb.selectionStart), this.toEditorPos(Mb.selectionEnd));
            return void(le(wb, Hb) || bb.dispatch({
              selection: wb,
              userEvent: "select"
            }))
          }
          let Ob = {
            from: Ib.from + gb,
            to: Ib.toA + gb,
            insert: eb.H.of(Mb.text.slice(Ib.from, Ib.toB).split("\n"))
          };
          if ((xb.mac || xb.android) && Ob.from == Vb - 1 && /^\. ?$/.test(Mb.text) && "off" == bb.contentDOM.getAttribute("autocorrect") && (Ob = {
              from: gb,
              to: lb,
              insert: eb.H.of([Mb.text.replace(".", " ")])
            }), this.pendingContextChange = Ob, !bb.state.readOnly) {
            let wb = this.to - this.from + (Ob.to - Ob.from + Ob.insert.length);
            Ve(bb, Ob, eb.j.single(this.toEditorPos(Mb.selectionStart, wb), this.toEditorPos(Mb.selectionEnd, wb)))
          }
          this.pendingContextChange && (this.revertPending(bb.state), this.setSelection(bb.state)), Ob.from < Ob.to && !Ob.insert.length && bb.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(wb.text.slice(Math.max(0, Mb.updateRangeStart - 1), Math.min(wb.text.length, Mb.updateRangeStart + 1))) && this.handlers.compositionend(Mb)
        }, this.handlers.characterboundsupdate = Mb => {
          let eb = [],
            Hb = null;
          for (let wb = this.toEditorPos(Mb.rangeStart), pb = this.toEditorPos(Mb.rangeEnd); wb < pb; wb++) {
            let Mb = bb.coordsForChar(wb);
            Hb = Mb && new DOMRect(Mb.left, Mb.top, Mb.right - Mb.left, Mb.bottom - Mb.top) || Hb || new DOMRect, eb.push(Hb)
          }
          wb.updateCharacterBounds(Mb.rangeStart, eb)
        }, this.handlers.textformatupdate = wb => {
          let Mb = [];
          for (let bb of wb.getTextFormats()) {
            let wb = bb.underlineStyle,
              eb = bb.underlineThickness;
            if (!/none/i.test(wb) && !/none/i.test(eb)) {
              let Hb = this.toEditorPos(bb.rangeStart),
                pb = this.toEditorPos(bb.rangeEnd);
              if (Hb < pb) {
                let bb = `text-decoration: underline ${/^[a-z]/.test(wb)?wb+" ":"Dashed"==wb?"dashed ":"Squiggle"==wb?"wavy ":""}${/thin/i.test(eb)?1:2}px`;
                Mb.push(Zb.mark({
                  attributes: {
                    style: bb
                  }
                }).range(Hb, pb))
              }
            }
          }
          bb.dispatch({
            effects: uw.of(Zb.set(Mb))
          })
        }, this.handlers.compositionstart = () => {
          bb.inputState.composing < 0 && (bb.inputState.composing = 0, bb.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (bb.inputState.composing = -1, bb.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: wb
            } = this.composing;
            this.composing = null, wb && this.reset(bb.state)
          }
        };
        for (let Mb in this.handlers) wb.addEventListener(Mb, this.handlers[Mb]);
        this.measureReq = {
          read: bb => {
            this.editContext.updateControlBounds(bb.contentDOM.getBoundingClientRect());
            let wb = vb(bb.root);
            wb && wb.rangeCount && this.editContext.updateSelectionBounds(wb.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(bb) {
        let wb = 0,
          Mb = !1,
          eb = this.pendingContextChange;
        return bb.changes.iterChanges(((Hb, pb, Vb, gb, lb) => {
          if (Mb) return;
          let Lb = lb.length - (pb - Hb);
          if (eb && pb >= eb.to) {
            if (eb.from == Hb && eb.to == pb && eb.insert.eq(lb)) return eb = this.pendingContextChange = null, wb += Lb, void(this.to += Lb);
            eb = null, this.revertPending(bb.state)
          }
          if (Hb += wb, (pb += wb) <= this.from) this.from += Lb, this.to += Lb;
          else if (Hb < this.to) {
            if (Hb < this.from || pb > this.to || this.to - this.from + lb.length > 3e4) return void(Mb = !0);
            this.editContext.updateText(this.toContextPos(Hb), this.toContextPos(pb), lb.toString()), this.to += Lb
          }
          wb += Lb
        })), eb && !Mb && this.revertPending(bb.state), !Mb
      }
      update(bb) {
        let wb = this.pendingContextChange,
          Mb = bb.startState.selection.main;
        this.composing && (this.composing.drifted || !bb.changes.touchesRange(Mb.from, Mb.to) && bb.transactions.some((bb => !bb.isUserEvent("input.type") && bb.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = bb.changes.mapPos(this.composing.editorBase)) : this.applyEdits(bb) && this.rangeIsValid(bb.state) ? (bb.docChanged || bb.selectionSet || wb) && this.setSelection(bb.state) : (this.pendingContextChange = null, this.reset(bb.state)), (bb.geometryChanged || bb.docChanged || bb.selectionSet) && bb.view.requestMeasure(this.measureReq)
      }
      resetRange(bb) {
        let {
          head: wb
        } = bb.selection.main;
        this.from = Math.max(0, wb - 1e4), this.to = Math.min(bb.doc.length, wb + 1e4)
      }
      reset(bb) {
        this.resetRange(bb), this.editContext.updateText(0, this.editContext.text.length, bb.doc.sliceString(this.from, this.to)), this.setSelection(bb)
      }
      revertPending(bb) {
        let wb = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(wb.from), this.toContextPos(wb.from + wb.insert.length), bb.doc.sliceString(wb.from, wb.to))
      }
      setSelection(bb) {
        let {
          main: wb
        } = bb.selection, Mb = this.toContextPos(Math.max(this.from, Math.min(this.to, wb.anchor))), eb = this.toContextPos(wb.head);
        this.editContext.selectionStart == Mb && this.editContext.selectionEnd == eb || this.editContext.updateSelection(Mb, eb)
      }
      rangeIsValid(bb) {
        let {
          head: wb
        } = bb.selection.main;
        return !(this.from > 0 && wb - this.from < 500 || this.to < bb.doc.length && this.to - wb < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        bb = Math.min(bb, wb);
        let Mb = this.composing;
        return Mb && Mb.drifted ? Mb.editorBase + (bb - Mb.contextBase) : bb + this.from
      }
      toContextPos(bb) {
        let wb = this.composing;
        return wb && wb.drifted ? wb.contextBase + (bb - wb.editorBase) : bb - this.from
      }
      destroy() {
        for (let bb in this.handlers) this.editContext.removeEventListener(bb, this.handlers[bb])
      }
    }
    class rH {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get pwb() {
        return this.viewState.pwb
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
        var wb;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), bb.parent && bb.parent.appendChild(this.dom);
        let {
          dispatch: Mb
        } = bb;
        this.dispatchTransactions = bb.dispatchTransactions || Mb && (bb => bb.forEach((bb => Mb(bb, this)))) || (bb => this.update(bb)), this.dispatch = this.dispatch.bind(this), this._root = bb.root || function(bb) {
          for (; bb;) {
            if (bb && (9 == bb.nodeType || 11 == bb.nodeType && bb.host)) return bb;
            bb = bb.assignedSlot || bb.parentNode
          }
          return null
        }(bb.parent) || document, this.viewState = new HH(this, bb.state || eb.n.create(bb)), bb.scrollTo && bb.scrollTo.is(iw) && (this.viewState.scrollTarget = bb.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(yw).map((bb => new Tw(bb)));
        for (let eb of this.plugins) eb.update(this);
        this.observer = new XH(this), this.inputState = new Le(this), this.inputState.ensureHandlers(this.plugins), this.docView = new SM(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (wb = document.fonts) || void 0 === wb ? void 0 : wb.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        let Hb = 1 == wb.length && wb[0] instanceof eb.J ? wb : 1 == wb.length && Array.isArray(wb[0]) ? wb[0] : [this.state.update(...wb)];
        this.dispatchTransactions(Hb, this)
      }
      update(bb) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let wb, Mb = !1,
          Hb = !1,
          pb = this.state;
        for (let eb of bb) {
          if (eb.startState != pb) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          pb = eb.state
        }
        if (this.destroyed) return void(this.viewState.state = pb);
        let Vb = this.hasFocus,
          gb = 0,
          lb = null;
        bb.some((bb => bb.annotation(Ye))) ? (this.inputState.notifiedFocused = Vb, gb = 1) : Vb != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = Vb, lb = Ze(pb, Vb), lb || (gb = 1));
        let Lb = this.observer.delayedAndroidKey,
          Ib = null;
        if (Lb ? (this.observer.clearDelayedAndroidKey(), Ib = this.observer.readChange(), (Ib && !this.state.doc.eq(pb.doc) || !this.state.selection.eq(pb.selection)) && (Ib = null)) : this.observer.clear(), pb.facet(eb.n.phrases) != this.state.facet(eb.n.phrases)) return this.setState(pb);
        wb = OM.create(this, pb, bb), wb.flags |= gb;
        let Ob = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let wb of bb) {
            if (Ob && (Ob = Ob.map(wb.changes)), wb.scrollIntoView) {
              let {
                main: bb
              } = wb.state.selection, {
                x: Mb,
                y: Hb
              } = this.state.facet(rH.cursorScrollMargin);
              Ob = new aw(bb.empty ? bb : eb.j.cursor(bb.head, bb.head > bb.anchor ? -1 : 1), "nearest", "nearest", Hb, Mb)
            }
            for (let bb of wb.effects) bb.is(iw) && (Ob = bb.value.clip(this.state))
          }
          this.viewState.update(wb, Ob), this.bidiCache = cH.update(this.bidiCache, wb.changes), wb.empty || (this.updatePlugins(wb), this.inputState.update(wb)), Mb = this.docView.update(wb), this.state.facet(LM) != this.styleModules && this.mountStyles(), Hb = this.updateAttrs(), this.showAnnouncements(bb), this.docView.updateSelection(Mb, bb.some((bb => bb.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (wb.startState.facet(UH) != wb.state.facet(UH) && (this.viewState.mustMeasureContent = !0), (Mb || Hb || Ob || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), Mb && this.docViewUpdate(), !wb.empty)
          for (let eb of this.state.facet(Ww)) try {
            eb(wb)
          } catch (Ub) {
            dw(this.state, Ub, "update listener")
          }(lb || Ib) && Promise.resolve().then((() => {
            lb && this.state == lb.startState && this.dispatch(lb), Ib && !pe(this, Ib) && Lb.force && Hw(this.contentDOM, Lb.key, Lb.keyCode)
          }))
      }
      setState(bb) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = bb);
        this.updateState = 2;
        let wb = this.hasFocus;
        try {
          for (let bb of this.plugins) bb.destroy(this);
          this.viewState = new HH(this, bb), this.plugins = bb.facet(yw).map((bb => new Tw(bb))), this.pluginMap.clear();
          for (let bb of this.plugins) bb.update(this);
          this.docView.destroy(), this.docView = new SM(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        wb && this.focus(), this.requestMeasure()
      }
      updatePlugins(bb) {
        let wb = bb.startState.facet(yw),
          Mb = bb.state.facet(yw);
        if (wb != Mb) {
          let eb = [];
          for (let Hb of Mb) {
            let Mb = wb.indexOf(Hb);
            if (Mb < 0) eb.push(new Tw(Hb));
            else {
              let wb = this.plugins[Mb];
              wb.mustUpdate = bb, eb.push(wb)
            }
          }
          for (let wb of this.plugins) wb.mustUpdate != bb && wb.destroy(this);
          this.plugins = eb, this.pluginMap.clear()
        } else
          for (let eb of this.plugins) eb.mustUpdate = bb;
        for (let eb = 0; eb < this.plugins.length; eb++) this.plugins[eb].update(this);
        wb != Mb && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let wb of this.plugins) {
          let Mb = wb.value;
          if (Mb && Mb.docViewUpdate) try {
            Mb.docViewUpdate(this)
          } catch (bb) {
            dw(this.state, bb, "doc view update listener")
          }
        }
      }
      measure() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, bb && this.observer.forceFlush();
        let wb = null,
          Mb = this.viewState.scrollParent,
          eb = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: Hb,
            scrollAnchorHeight: pb
          } = this.viewState;
        Math.abs(eb - this.viewState.scrollOffset) > 1 && (pb = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let bb = 0;; bb++) {
            if (pb < 0)
              if (pw(Mb || this.win)) Hb = -1, pb = this.viewState.heightMap.height;
              else {
                let bb = this.viewState.scrollAnchorAt(eb);
                Hb = bb.from, pb = bb.top
              } this.updateState = 1;
            let gb = this.viewState.measure();
            if (!gb && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (bb > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let lb = [];
            4 & gb || ([this.measureRequests, lb] = [lb, this.measureRequests]);
            let Lb = lb.map((bb => {
                try {
                  return bb.read(this)
                } catch (wb) {
                  return dw(this.state, wb), DH
                }
              })),
              Ib = OM.create(this, this.state, []),
              Ob = !1;
            Ib.flags |= gb, wb ? wb.flags |= gb : wb = Ib, this.updateState = 2, Ib.empty || (this.updatePlugins(Ib), this.inputState.update(Ib), this.updateAttrs(), Ob = this.docView.update(Ib), Ob && this.docViewUpdate());
            for (let bb = 0; bb < lb.length; bb++)
              if (Lb[bb] != DH) try {
                let wb = lb[bb];
                wb.write && wb.write(Lb[bb], this)
              } catch (Vb) {
                dw(this.state, Vb)
              }
            if (Ob && this.docView.updateSelection(!0), !Ib.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, pb = -1;
                  continue
                } {
                  let bb = ((Hb < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(Hb).top) - pb) / this.scaleY;
                  if ((bb > 1 || bb < -1) && (Mb == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    eb += bb, Mb ? Mb.scrollTop += bb : this.win.scrollBy(0, bb), pb = -1;
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
        if (wb && !wb.empty)
          for (let gb of this.state.facet(Ww)) gb(wb)
      }
      get themeClasses() {
        return CH + " " + (this.state.facet(tH) ? FH : EH) + " " + this.state.facet(UH)
      }
      updateAttrs() {
        let bb = YH(this, kw, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          wb = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(Pw) ? "true" : "false",
            class: "cm-content",
            style: `${xb.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (wb["aria-readonly"] = "true"), YH(this, bM, wb);
        let Mb = this.observer.ignore((() => {
          let Mb = Rb(this.contentDOM, this.contentAttrs, wb),
            eb = Rb(this.dom, this.editorAttrs, bb);
          return Mb || eb
        }));
        return this.editorAttrs = bb, this.contentAttrs = wb, Mb
      }
      showAnnouncements(bb) {
        let wb = !0;
        for (let Mb of bb)
          for (let bb of Mb.effects)
            if (bb.is(rH.announce)) {
              wb && (this.announceDOM.textContent = ""), wb = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = bb.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(LM);
        let bb = this.state.facet(rH.cspNonce);
        Hb.e.mount(this.root, this.styleModules.concat(mH).reverse(), bb ? {
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
            for (let wb = 0; wb < this.measureRequests.length; wb++)
              if (this.measureRequests[wb].key === bb.key) return void(this.measureRequests[wb] = bb);
          this.measureRequests.push(bb)
        }
      }
      plugin(bb) {
        let wb = this.pluginMap.get(bb);
        return (void 0 === wb || wb && wb.plugin != bb) && this.pluginMap.set(bb, wb = this.plugins.find((wb => wb.plugin == bb)) || null), wb && wb.update(this).value
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
      moveByChar(bb, wb, Mb) {
        return PM(this, bb, iM(this, bb, wb, Mb))
      }
      moveByGroup(bb, wb) {
        return PM(this, bb, iM(this, bb, wb, (wb => function(bb, wb, Mb) {
          let Hb = bb.state.charCategorizer(wb),
            pb = Hb(Mb);
          return bb => {
            let wb = Hb(bb);
            return pb == eb.h.Space && (pb = wb), pb == wb
          }
        }(this, bb.head, wb))))
      }
      visualLineSide(bb, wb) {
        let Mb = this.bidiSpans(bb),
          Hb = this.textDirectionAt(bb.from),
          pb = Mb[wb ? Mb.length - 1 : 0];
        return eb.j.cursor(pb.side(wb, Hb) + bb.from, pb.forward(!wb, Hb) ? 1 : -1)
      }
      moveToLineBoundary(bb, wb) {
        return function(bb, wb, Mb, Hb) {
          let pb = aM(bb, wb.head, wb.assoc || -1),
            Vb = Hb && pb.type == Yb.Text && (bb.lineWrapping || pb.widgetLineBreaks) ? bb.coordsAtPos(wb.assoc < 0 && wb.head > pb.from ? wb.head - 1 : wb.head) : null;
          if (Vb) {
            let wb = bb.dom.getBoundingClientRect(),
              Hb = bb.textDirectionAt(pb.from),
              gb = bb.posAtCoords({
                x: Mb == (Hb == Lw.LTR) ? wb.right - 1 : wb.left + 1,
                y: (Vb.top + Vb.bottom) / 2
              });
            if (null != gb) return eb.j.cursor(gb, Mb ? -1 : 1)
          }
          return eb.j.cursor(Mb ? pb.to : pb.from, Mb ? -1 : 1)
        }(this, bb, wb, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(bb, wb, Mb) {
        return PM(this, bb, function(bb, wb, Mb, Hb) {
          let pb = wb.head,
            Vb = Mb ? 1 : -1;
          if (pb == (Mb ? bb.state.doc.length : 0)) return eb.j.cursor(pb, wb.assoc);
          let gb, lb = wb.goalColumn,
            Lb = bb.contentDOM.getBoundingClientRect(),
            Ib = bb.coordsAtPos(pb, wb.assoc || ((wb.empty ? Mb : wb.head == wb.from) ? 1 : -1)),
            Ob = bb.documentTop;
          if (Ib) null == lb && (lb = Ib.left - Lb.left), gb = Vb < 0 ? Ib.top : Ib.bottom;
          else {
            let wb = bb.viewState.lineBlockAt(pb);
            null == lb && (lb = Math.min(Lb.right - Lb.left, bb.defaultCharacterWidth * (pb - wb.from))), gb = (Vb < 0 ? wb.top : wb.bottom) + Ob
          }
          let Ub = Lb.left + lb,
            tb = bb.viewState.heightOracle.textHeight >> 1,
            Cb = null !== Hb && void 0 !== Hb ? Hb : tb;
          for (let Eb = 0;; Eb += tb) {
            let wb = gb + (Cb + Eb) * Vb,
              Hb = yM(bb, {
                x: Ub,
                y: wb
              }, !1, Vb);
            if (Mb ? wb > Lb.bottom : wb < Lb.top) return eb.j.cursor(Hb.pos, Hb.assoc);
            let pb = bb.coordsAtPos(Hb.pos, Hb.assoc),
              Ib = pb ? (pb.top + pb.bottom) / 2 : 0;
            if (!pb || (Mb ? Ib > gb : Ib < gb)) return eb.j.cursor(Hb.pos, Hb.assoc, void 0, lb)
          }
        }(this, bb, wb, Mb))
      }
      domAtPos(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(bb, wb)
      }
      posAtDOM(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(bb, wb)
      }
      posAtCoords(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let Mb = yM(this, bb, wb);
        return Mb && Mb.pos
      }
      posAndSideAtCoords(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), yM(this, bb, wb)
      }
      coordsAtPos(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let Mb = this.docView.coordsAt(bb, wb);
        if (!Mb || Mb.left == Mb.right) return Mb;
        let eb = this.state.doc.lineAt(bb),
          Hb = this.bidiSpans(eb);
        return nb(Mb, Hb[mw.find(Hb, bb - eb.from, -1, wb)].dir == Lw.LTR == wb > 0)
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
        return !this.state.facet(Qw) || bb < this.viewport.from || bb > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(bb))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(bb) {
        if (bb.length > RH) return Kw(bb.length);
        let wb, Mb = this.textDirectionAt(bb.from);
        for (let Hb of this.bidiCache)
          if (Hb.from == bb.from && Hb.dir == Mb && (Hb.fresh || hw(Hb.isolates, wb = VM(this, bb)))) return Hb.order;
        wb || (wb = VM(this, bb));
        let eb = jw(bb.text, Mb, wb);
        return this.bidiCache.push(new cH(bb.from, bb.to, Mb, wb, !0, eb)), eb
      }
      get hasFocus() {
        var bb;
        return (this.dom.ownerDocument.hasFocus() || xb.safari && (null === (bb = this.inputState) || void 0 === bb ? void 0 : bb.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          Mw(this.contentDOM), this.docView.updateSelection()
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
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var Mb, Hb, pb, Vb;
        return iw.of(new aw("number" == typeof bb ? eb.j.cursor(bb) : bb, null !== (Mb = wb.y) && void 0 !== Mb ? Mb : "nearest", null !== (Hb = wb.x) && void 0 !== Hb ? Hb : "nearest", null !== (pb = wb.yMargin) && void 0 !== pb ? pb : 5, null !== (Vb = wb.xMargin) && void 0 !== Vb ? Vb : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: bb,
          scrollLeft: wb
        } = this.scrollDOM, Mb = this.viewState.scrollAnchorAt(bb);
        return iw.of(new aw(eb.j.cursor(Mb.from), "start", "start", Mb.top - bb, wb, !0))
      }
      setTabFocusMode(bb) {
        null == bb ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof bb ? this.inputState.tabFocusMode = bb ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + bb)
      }
      static domEventHandlers(bb) {
        return ow.define((() => ({})), {
          eventHandlers: bb
        })
      }
      static domEventObservers(bb) {
        return ow.define((() => ({})), {
          eventObservers: bb
        })
      }
      static theme(bb, wb) {
        let Mb = Hb.e.newName(),
          eb = [UH.of(Mb), LM.of(sH(`.${Mb}`, bb))];
        return wb && wb.dark && eb.push(tH.of(!0)), eb
      }
      static baseTheme(bb) {
        return eb.v.lowest(LM.of(sH("." + CH, bb, BH)))
      }
      static findFromDOM(bb) {
        var wb;
        let Mb = bb.querySelector(".cm-content"),
          eb = Mb && tM.get(Mb) || tM.get(bb);
        return (null === (wb = null === eb || void 0 === eb ? void 0 : eb.root) || void 0 === wb ? void 0 : wb.view) || null
      }
    }
    rH.styleModule = LM, rH.inputHandler = Jw, rH.clipboardInputFilter = Nw, rH.clipboardOutputFilter = vw, rH.scrollHandler = qw, rH.focusChangeEffect = Sw, rH.perLineTextDirection = Qw, rH.exceptionSink = Aw, rH.updateListener = Ww, rH.editable = Pw, rH.mouseSelectionStyle = fw, rH.dragMovesSelection = Zw, rH.clickAddsSelectionRange = Yw, rH.ze = wM, rH.blockWrappers = MM, rH.outerDecorations = eM, rH.atomicRanges = HM, rH.bidiIsolatedRanges = pM, rH.cursorScrollMargin = eb.o.define({
      combine: bb => {
        let wb = 5,
          Mb = 5;
        for (let eb of bb) "number" == typeof eb ? wb = Mb = eb : ({
          x: wb,
          y: Mb
        } = eb);
        return {
          x: wb,
          y: Mb
        }
      }
    }), rH.scrollMargins = gM, rH.darkTheme = tH, rH.cspNonce = eb.o.define({
      combine: bb => bb.length ? bb[0] : ""
    }), rH.contentAttributes = bM, rH.editorAttributes = kw, rH.lineWrapping = rH.contentAttributes.of({
      class: "cm-lineWrapping"
    }), rH.announce = eb.E.define();
    const RH = 4096,
      DH = {};
    class cH {
      constructor(bb, wb, Mb, eb, Hb, pb) {
        this.from = bb, this.to = wb, this.dir = Mb, this.isolates = eb, this.fresh = Hb, this.order = pb
      }
      static update(bb, wb) {
        if (wb.empty && !bb.some((bb => bb.fresh))) return bb;
        let Mb = [],
          eb = bb.length ? bb[bb.length - 1].dir : Lw.LTR;
        for (let Hb = Math.max(0, bb.length - 10); Hb < bb.length; Hb++) {
          let pb = bb[Hb];
          pb.dir != eb || wb.touchesRange(pb.from, pb.to) || Mb.push(new cH(wb.mapPos(pb.from, 1), wb.mapPos(pb.to, -1), pb.dir, pb.isolates, !1, pb.order))
        }
        return Mb
      }
    }

    function YH(bb, wb, Mb) {
      for (let eb = bb.state.facet(wb), Hb = eb.length - 1; Hb >= 0; Hb--) {
        let wb = eb[Hb],
          pb = "function" == typeof wb ? wb(bb) : wb;
        pb && jb(pb, Mb)
      }
      return Mb
    }
    const ZH = xb.mac ? "mac" : xb.windows ? "win" : xb.linux ? "linux" : "key";

    function fH(bb, wb, Mb) {
      return wb.altKey && (bb = "Alt-" + bb), wb.ctrlKey && (bb = "Ctrl-" + bb), wb.metaKey && (bb = "Meta-" + bb), !1 !== Mb && wb.shiftKey && (bb = "Shift-" + bb), bb
    }
    const AH = eb.v.default(rH.domEventHandlers({
        keydown: (bb, wb) => qH(SH(wb.state), bb, wb, "editor")
      })),
      WH = eb.o.define({
        enables: AH
      }),
      JH = new WeakMap;

    function SH(bb) {
      let wb = bb.facet(WH),
        Mb = JH.get(wb);
      return Mb || JH.set(wb, Mb = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZH,
          Mb = Object.create(null),
          eb = Object.create(null),
          Hb = (bb, wb) => {
            let Mb = eb[bb];
            if (null == Mb) eb[bb] = wb;
            else if (Mb != wb) throw new Error("Key binding " + bb + " is used both as a regular binding and as a multi-stroke prefix")
          },
          pb = (bb, eb, pb, Vb, gb) => {
            var lb, Lb;
            let Ib = Mb[bb] || (Mb[bb] = Object.create(null)),
              Ob = eb.split(/ (?!$)/).map((bb => function(bb, wb) {
                const Mb = bb.split(/-(?!$)/);
                let eb, Hb, pb, Vb, gb = Mb[Mb.length - 1];
                "Space" == gb && (gb = " ");
                for (let lb = 0; lb < Mb.length - 1; ++lb) {
                  const bb = Mb[lb];
                  if (/^(cmd|meta|m)$/i.test(bb)) Vb = !0;
                  else if (/^a(lt)?$/i.test(bb)) eb = !0;
                  else if (/^(c|ctrl|control)$/i.test(bb)) Hb = !0;
                  else if (/^s(hift)?$/i.test(bb)) pb = !0;
                  else {
                    if (!/^mod$/i.test(bb)) throw new Error("Unrecognized modifier name: " + bb);
                    "mac" == wb ? Vb = !0 : Hb = !0
                  }
                }
                return eb && (gb = "Alt-" + gb), Hb && (gb = "Ctrl-" + gb), Vb && (gb = "Meta-" + gb), pb && (gb = "Shift-" + gb), gb
              }(bb, wb)));
            for (let wb = 1; wb < Ob.length; wb++) {
              let Mb = Ob.slice(0, wb).join(" ");
              Hb(Mb, !0), Ib[Mb] || (Ib[Mb] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [wb => {
                  let eb = vH = {
                    view: wb,
                    prefix: Mb,
                    scope: bb
                  };
                  return setTimeout((() => {
                    vH == eb && (vH = null)
                  }), QH), !0
                }]
              })
            }
            let Ub = Ob.join(" ");
            Hb(Ub, !1);
            let tb = Ib[Ub] || (Ib[Ub] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (Lb = null === (lb = Ib._any) || void 0 === lb ? void 0 : lb.run) || void 0 === Lb ? void 0 : Lb.slice()) || []
            });
            pb && tb.run.push(pb), Vb && (tb.preventDefault = !0), gb && (tb.stopPropagation = !0)
          };
        for (let Vb of bb) {
          let bb = Vb.scope ? Vb.scope.split(" ") : ["editor"];
          if (Vb.any)
            for (let wb of bb) {
              let bb = Mb[wb] || (Mb[wb] = Object.create(null));
              bb._any || (bb._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: eb
              } = Vb;
              for (let wb in bb) bb[wb].run.push((bb => eb(bb, GH)))
            }
          let eb = Vb[wb] || Vb.key;
          if (eb)
            for (let wb of bb) pb(wb, eb, Vb.run, Vb.preventDefault, Vb.stopPropagation), Vb.shift && pb(wb, "Shift-" + eb, Vb.shift, Vb.preventDefault, Vb.stopPropagation)
        }
        return Mb
      }(wb.reduce(((bb, wb) => bb.concat(wb)), []))), Mb
    }

    function NH(bb, wb, Mb) {
      return qH(SH(bb.state), wb, bb, Mb)
    }
    let vH = null;
    const QH = 4e3;
    let GH = null;

    function qH(bb, wb, Mb, Hb) {
      GH = wb;
      let Lb = function(bb) {
          var wb = !(gb && bb.metaKey && bb.shiftKey && !bb.ctrlKey && !bb.altKey || lb && bb.shiftKey && bb.key && 1 == bb.key.length || "Unidentified" == bb.key) && bb.key || (bb.shiftKey ? Vb : pb)[bb.keyCode] || bb.key || "Unidentified";
          return "Esc" == wb && (wb = "Escape"), "Del" == wb && (wb = "Delete"), "Left" == wb && (wb = "ArrowLeft"), "Up" == wb && (wb = "ArrowUp"), "Right" == wb && (wb = "ArrowRight"), "Down" == wb && (wb = "ArrowDown"), wb
        }(wb),
        Ib = (0, eb.L)(Lb, 0),
        Ob = (0, eb.M)(Ib) == Lb.length && " " != Lb,
        Ub = "",
        tb = !1,
        Cb = !1,
        Eb = !1;
      vH && vH.view == Mb && vH.scope == Hb && (Ub = vH.prefix + " ", Ce.indexOf(wb.keyCode) < 0 && (Cb = !0, vH = null));
      let Fb, Bb, sb = new Set,
        mb = bb => {
          if (bb) {
            for (let wb of bb.run)
              if (!sb.has(wb) && (sb.add(wb), wb(Mb))) return bb.stopPropagation && (Eb = !0), !0;
            bb.preventDefault && (bb.stopPropagation && (Eb = !0), Cb = !0)
          }
          return !1
        },
        hb = bb[Hb];
      return hb && (mb(hb[Ub + fH(Lb, wb, !Ob)]) ? tb = !0 : !Ob || !(wb.altKey || wb.metaKey || wb.ctrlKey) || xb.windows && wb.ctrlKey && wb.altKey || xb.mac && wb.altKey && !wb.ctrlKey && !wb.metaKey || !(Fb = pb[wb.keyCode]) || Fb == Lb ? Ob && wb.shiftKey && mb(hb[Ub + fH(Lb, wb, !0)]) && (tb = !0) : (mb(hb[Ub + fH(Fb, wb, !0)]) || wb.shiftKey && (Bb = Vb[wb.keyCode]) != Lb && Bb != Fb && mb(hb[Ub + fH(Bb, wb, !1)])) && (tb = !0), !tb && mb(hb._any) && (tb = !0)), Cb && (tb = !0), tb && Eb && wb.stopPropagation(), GH = null, tb
    }
    class aH {
      constructor(bb, wb, Mb, eb, Hb) {
        this.className = bb, this.left = wb, this.top = Mb, this.width = eb, this.height = Hb
      }
      draw() {
        let bb = document.createElement("div");
        return bb.className = this.className, this.adjust(bb), bb
      }
      update(bb, wb) {
        return wb.className == this.className && (this.adjust(bb), !0)
      }
      adjust(bb) {
        bb.style.left = this.left + "px", bb.style.top = this.top + "px", null != this.width && (bb.style.width = this.width + "px"), bb.style.height = this.height + "px"
      }
      eq(bb) {
        return this.left == bb.left && this.top == bb.top && this.width == bb.width && this.height == bb.height && this.className == bb.className
      }
      static forRange(bb, wb, Mb) {
        if (Mb.empty) {
          let eb = bb.coordsAtPos(Mb.head, Mb.assoc || 1);
          if (!eb) return [];
          let Hb = iH(bb);
          return [new aH(wb, eb.left - Hb.left, eb.top - Hb.top, null, eb.bottom - eb.top)]
        }
        return function(bb, wb, Mb) {
          if (Mb.to <= bb.viewport.from || Mb.from >= bb.viewport.to) return [];
          let eb = Math.max(Mb.from, bb.viewport.from),
            Hb = Math.min(Mb.to, bb.viewport.to),
            pb = bb.textDirection == Lw.LTR,
            Vb = bb.contentDOM,
            gb = Vb.getBoundingClientRect(),
            lb = iH(bb),
            Lb = Vb.querySelector(".cm-line"),
            Ib = Lb && window.getComputedStyle(Lb),
            Ob = gb.left + (Ib ? parseInt(Ib.paddingLeft) + Math.min(0, parseInt(Ib.textIndent)) : 0),
            Ub = gb.right - (Ib ? parseInt(Ib.paddingRight) : 0),
            tb = aM(bb, eb, 1),
            Cb = aM(bb, Hb, -1),
            Eb = tb.type == Yb.Text ? tb : null,
            Fb = Cb.type == Yb.Text ? Cb : null;
          Eb && (bb.lineWrapping || tb.widgetLineBreaks) && (Eb = uH(bb, eb, 1, Eb));
          Fb && (bb.lineWrapping || Cb.widgetLineBreaks) && (Fb = uH(bb, Hb, -1, Fb));
          if (Eb && Fb && Eb.from == Fb.from && Eb.to == Fb.to) return sb(mb(Mb.from, Mb.to, Eb));
          {
            let wb = Eb ? mb(Mb.from, null, Eb) : hb(tb, !1),
              eb = Fb ? mb(null, Mb.to, Fb) : hb(Cb, !0),
              Hb = [];
            return (Eb || tb).to < (Fb || Cb).from - (Eb && Fb ? 1 : 0) || tb.widgetLineBreaks > 1 && wb.bottom + bb.defaultLineHeight / 2 < eb.top ? Hb.push(Bb(Ob, wb.bottom, Ub, eb.top)) : wb.bottom < eb.top && bb.elementAtHeight((wb.bottom + eb.top) / 2).type == Yb.Text && (wb.bottom = eb.top = (wb.bottom + eb.top) / 2), sb(wb).concat(Hb).concat(sb(eb))
          }

          function Bb(bb, Mb, eb, Hb) {
            return new aH(wb, bb - lb.left, Mb - lb.top, Math.max(0, eb - bb), Hb - Mb)
          }

          function sb(bb) {
            let {
              top: wb,
              bottom: Mb,
              horizontal: eb
            } = bb, Hb = [];
            for (let pb = 0; pb < eb.length; pb += 2) Hb.push(Bb(eb[pb], wb, eb[pb + 1], Mb));
            return Hb
          }

          function mb(wb, Mb, eb) {
            let Hb = 1e9,
              Vb = -1e9,
              gb = [];

            function lb(wb, Mb, lb, Lb, Ib) {
              let tb = bb.coordsAtPos(wb, wb == eb.to ? -2 : 2),
                Cb = bb.coordsAtPos(lb, lb == eb.from ? 2 : -2);
              tb && Cb && (Hb = Math.min(tb.top, Cb.top, Hb), Vb = Math.max(tb.bottom, Cb.bottom, Vb), Ib == Lw.LTR ? gb.push(pb && Mb ? Ob : tb.left, pb && Lb ? Ub : Cb.right) : gb.push(!pb && Lb ? Ob : Cb.left, !pb && Mb ? Ub : tb.right))
            }
            let Lb = null !== wb && void 0 !== wb ? wb : eb.from,
              Ib = null !== Mb && void 0 !== Mb ? Mb : eb.to;
            for (let pb of bb.pwb)
              if (pb.to > Lb && pb.from < Ib)
                for (let eb = Math.max(pb.from, Lb), Hb = Math.min(pb.to, Ib);;) {
                  let pb = bb.state.doc.lineAt(eb);
                  for (let Vb of bb.bidiSpans(pb)) {
                    let bb = Vb.from + pb.from,
                      gb = Vb.to + pb.from;
                    if (bb >= Hb) break;
                    gb > eb && lb(Math.max(bb, eb), null == wb && bb <= Lb, Math.min(gb, Hb), null == Mb && gb >= Ib, Vb.dir)
                  }
                  if (eb = pb.to + 1, eb >= Hb) break
                }
            return 0 == gb.length && lb(Lb, null == wb, Ib, null == Mb, bb.textDirection), {
              top: Hb,
              bottom: Vb,
              horizontal: gb
            }
          }

          function hb(bb, wb) {
            let Mb = gb.top + (wb ? bb.top : bb.bottom);
            return {
              top: Mb,
              bottom: Mb,
              horizontal: []
            }
          }
        }(bb, wb, Mb)
      }
    }

    function iH(bb) {
      let wb = bb.scrollDOM.getBoundingClientRect();
      return {
        left: (bb.textDirection == Lw.LTR ? wb.left : wb.right - bb.scrollDOM.clientWidth * bb.scaleX) - bb.scrollDOM.scrollLeft * bb.scaleX,
        top: wb.top - bb.scrollDOM.scrollTop * bb.scaleY
      }
    }

    function uH(bb, wb, Mb, eb) {
      let Hb = bb.coordsAtPos(wb, 2 * Mb);
      if (!Hb) return eb;
      let pb = bb.dom.getBoundingClientRect(),
        Vb = (Hb.top + Hb.bottom) / 2,
        gb = bb.posAtCoords({
          x: pb.left + 1,
          y: Vb
        }),
        lb = bb.posAtCoords({
          x: pb.right - 1,
          y: Vb
        });
      return null == gb || null == lb ? eb : {
        from: Math.max(eb.from, Math.min(gb, lb)),
        to: Math.min(eb.to, Math.max(gb, lb))
      }
    }
    class dH {
      constructor(bb, wb) {
        this.view = bb, this.layer = wb, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = bb.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), wb.above && this.dom.classList.add("cm-layer-above"), wb.class && this.dom.classList.add(wb.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(bb.state), bb.requestMeasure(this.measureReq), wb.mount && wb.mount(this.dom, bb)
      }
      update(bb) {
        bb.startState.facet(PH) != bb.state.facet(PH) && this.setOrder(bb.state), (this.layer.update(bb, this.dom) || bb.geometryChanged) && (this.scale(), bb.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(bb) {
        !1 !== this.layer.updateOnDocViewUpdate && bb.requestMeasure(this.measureReq)
      }
      setOrder(bb) {
        let wb = 0,
          Mb = bb.facet(PH);
        for (; wb < Mb.length && Mb[wb] != this.layer;) wb++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - wb)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: bb,
          scaleY: wb
        } = this.view;
        bb == this.scaleX && wb == this.scaleY || (this.scaleX = bb, this.scaleY = wb, this.dom.style.transform = `scale(${1/bb}, ${1/wb})`)
      }
      draw(bb) {
        if (bb.length != this.drawn.length || bb.some(((bb, wb) => {
            return Mb = bb, eb = this.drawn[wb], !(Mb.constructor == eb.constructor && Mb.eq(eb));
            var Mb, eb
          }))) {
          let wb = this.dom.firstChild,
            Mb = 0;
          for (let eb of bb) eb.update && wb && eb.constructor && this.drawn[Mb].constructor && eb.update(wb, this.drawn[Mb]) ? (wb = wb.nextSibling, Mb++) : this.dom.insertBefore(eb.draw(), wb);
          for (; wb;) {
            let bb = wb.nextSibling;
            wb.remove(), wb = bb
          }
          this.drawn = bb, xb.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const PH = eb.o.define();

    function nH(bb) {
      return [ow.define((wb => new dH(wb, bb))), PH.of(bb)]
    }
    const yH = eb.o.define({
      combine: bb => (0, eb.P)(bb, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (bb, wb) => Math.min(bb, wb),
        drawRangeCursor: (bb, wb) => bb || wb
      })
    });

    function oH() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [yH.of(bb), kH, wp, Mp, Gw.of(!0)]
    }

    function TH(bb) {
      return bb.startState.facet(yH) != bb.state.facet(yH)
    }
    const kH = nH({
      above: !0,
      markers(bb) {
        let {
          state: wb
        } = bb, Mb = wb.facet(yH), Hb = [];
        for (let pb of wb.selection.gF) {
          let Vb = pb == wb.selection.main;
          if (pb.empty || Mb.drawRangeCursor && !(Vb && xb.ios && Mb.iosSelectionHandles)) {
            let wb = Vb ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              Mb = pb.empty ? pb : eb.j.cursor(pb.head, pb.assoc);
            for (let eb of aH.forRange(bb, wb, Mb)) Hb.push(eb)
          }
        }
        return Hb
      },
      update(bb, wb) {
        bb.transactions.some((bb => bb.selection)) && (wb.style.animationName = "cm-blink" == wb.style.animationName ? "cm-blink2" : "cm-blink");
        let Mb = TH(bb);
        return Mb && bp(bb.state, wb), bb.docChanged || bb.selectionSet || Mb
      },
      mount(bb, wb) {
        bp(wb.state, bb)
      },
      class: "cm-cursorLayer"
    });

    function bp(bb, wb) {
      wb.style.animationDuration = bb.facet(yH).cursorBlinkRate + "ms"
    }
    const wp = nH({
        above: !1,
        markers(bb) {
          let wb = [],
            {
              main: Mb,
              gF: Hb
            } = bb.state.selection;
          for (let eb of Hb)
            if (!eb.empty)
              for (let Mb of aH.forRange(bb, "cm-selectionBackground", eb)) wb.push(Mb);
          if (xb.ios && !Mb.empty && bb.state.facet(yH).iosSelectionHandles) {
            for (let Hb of aH.forRange(bb, "cm-selectionHandle cm-selectionHandle-start", eb.j.cursor(Mb.from, 1))) wb.push(Hb);
            for (let Hb of aH.forRange(bb, "cm-selectionHandle cm-selectionHandle-end", eb.j.cursor(Mb.to, 1))) wb.push(Hb)
          }
          return wb
        },
        update: (bb, wb) => bb.docChanged || bb.selectionSet || bb.viewportChanged || TH(bb),
        class: "cm-selectionLayer"
      }),
      Mp = eb.v.highest(rH.theme({
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
      ep = eb.E.define({
        map: (bb, wb) => null == bb ? null : wb.mapPos(bb)
      }),
      Hp = eb.G.define({
        create: () => null,
        update: (bb, wb) => (null != bb && (bb = wb.changes.mapPos(bb)), wb.effects.reduce(((bb, wb) => wb.is(ep) ? wb.value : bb), bb))
      }),
      pp = ow.fromClass(class {
        constructor(bb) {
          this.view = bb, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(bb) {
          var wb;
          let Mb = bb.state.field(Hp);
          null == Mb ? null != this.cursor && (null === (wb = this.cursor) || void 0 === wb || wb.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (bb.startState.field(Hp) != Mb || bb.docChanged || bb.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: bb
          } = this, wb = bb.state.field(Hp), Mb = null != wb && bb.coordsAtPos(wb);
          if (!Mb) return null;
          let eb = bb.scrollDOM.getBoundingClientRect();
          return {
            left: Mb.left - eb.left + bb.scrollDOM.scrollLeft * bb.scaleX,
            top: Mb.top - eb.top + bb.scrollDOM.scrollTop * bb.scaleY,
            height: Mb.bottom - Mb.top
          }
        }
        drawCursor(bb) {
          if (this.cursor) {
            let {
              scaleX: wb,
              scaleY: Mb
            } = this.view;
            bb ? (this.cursor.style.left = bb.left / wb + "px", this.cursor.style.top = bb.top / Mb + "px", this.cursor.style.height = bb.height / Mb + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(bb) {
          this.view.state.field(Hp) != bb && this.view.dispatch({
            effects: ep.of(bb)
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

    function Vp() {
      return [Hp, pp]
    }

    function gp(bb, wb, Mb, eb, Hb) {
      wb.lastIndex = 0;
      for (let pb, Vb = bb.iterRange(Mb, eb), gb = Mb; !Vb.next().done; gb += Vb.value.length)
        if (!Vb.lineBreak)
          for (; pb = wb.exec(Vb.value);) Hb(gb + pb.index, pb)
    }
    class lp {
      constructor(bb) {
        const {
          regexp: wb,
          decoration: Mb,
          decorate: eb,
          boundary: Hb,
          maxLength: pb = 1e3
        } = bb;
        if (!wb.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = wb, eb) this.addMatch = (bb, wb, Mb, Hb) => eb(Hb, Mb, Mb + bb[0].length, bb, wb);
        else if ("function" == typeof Mb) this.addMatch = (bb, wb, eb, Hb) => {
          let pb = Mb(bb, wb, eb);
          pb && Hb(eb, eb + bb[0].length, pb)
        };
        else {
          if (!Mb) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (bb, wb, eb, Hb) => Hb(eb, eb + bb[0].length, Mb)
        }
        this.boundary = Hb, this.maxLength = pb
      }
      createDeco(bb) {
        let wb = new eb.z,
          Mb = wb.add.bind(wb);
        for (let {
            from: eb,
            to: Hb
          }
          of
          function(bb, wb) {
            let Mb = bb.pwb;
            if (1 == Mb.length && Mb[0].from == bb.viewport.from && Mb[0].to == bb.viewport.to) return Mb;
            let eb = [];
            for (let {
                from: Hb,
                to: pb
              }
              of Mb) Hb = Math.max(bb.state.doc.lineAt(Hb).from, Hb - wb), pb = Math.min(bb.state.doc.lineAt(pb).to, pb + wb), eb.length && eb[eb.length - 1].to >= Hb ? eb[eb.length - 1].to = pb : eb.push({
              from: Hb,
              to: pb
            });
            return eb
          }(bb, this.maxLength)) gp(bb.state.doc, this.regexp, eb, Hb, ((wb, eb) => this.addMatch(eb, bb, wb, Mb)));
        return wb.finish()
      }
      updateDeco(bb, wb) {
        let Mb = 1e9,
          eb = -1;
        return bb.docChanged && bb.changes.iterChanges(((wb, Hb, pb, Vb) => {
          Vb >= bb.view.viewport.from && pb <= bb.view.viewport.to && (Mb = Math.min(pb, Mb), eb = Math.max(Vb, eb))
        })), bb.viewportMoved || eb - Mb > 1e3 ? this.createDeco(bb.view) : eb > -1 ? this.updateRange(bb.view, wb.map(bb.changes), Mb, eb) : wb
      }
      updateRange(bb, wb, Mb, eb) {
        for (let Hb of bb.pwb) {
          let pb = Math.max(Hb.from, Mb),
            Vb = Math.min(Hb.to, eb);
          if (Vb >= pb) {
            let Mb = bb.state.doc.lineAt(pb),
              eb = Mb.to < Vb ? bb.state.doc.lineAt(Vb) : Mb,
              gb = Math.max(Hb.from, Mb.from),
              lb = Math.min(Hb.to, eb.to);
            if (this.boundary) {
              for (; pb > Mb.from; pb--)
                if (this.boundary.test(Mb.text[pb - 1 - Mb.from])) {
                  gb = pb;
                  break
                } for (; Vb < eb.to; Vb++)
                if (this.boundary.test(eb.text[Vb - eb.from])) {
                  lb = Vb;
                  break
                }
            }
            let Lb, Ib = [],
              Ob = (bb, wb, Mb) => Ib.push(Mb.range(bb, wb));
            if (Mb == eb)
              for (this.regexp.lastIndex = gb - Mb.from;
                (Lb = this.regexp.exec(Mb.text)) && Lb.index < lb - Mb.from;) this.addMatch(Lb, bb, Lb.index + Mb.from, Ob);
            else gp(bb.state.doc, this.regexp, gb, lb, ((wb, Mb) => this.addMatch(Mb, bb, wb, Ob)));
            wb = wb.update({
              filterFrom: gb,
              filterTo: lb,
              filter: (bb, wb) => bb < gb || wb > lb,
              add: Ib
            })
          }
        }
        return wb
      }
    }
    const Lp = null != /x/.unicode ? "gu" : "g",
      Ip = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", Lp),
      Op = {
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
    let Up = null;
    const tp = eb.o.define({
      combine(bb) {
        let wb = (0, eb.P)(bb, {
          render: null,
          specialChars: Ip,
          addSpecialChars: null
        });
        return (wb.replaceTabs = ! function() {
          var bb;
          if (null == Up && "undefined" != typeof document && document.body) {
            let wb = document.body.style;
            Up = null != (null !== (bb = wb.tabSize) && void 0 !== bb ? bb : wb.MozTabSize)
          }
          return Up || !1
        }()) && (wb.specialChars = new RegExp("\t|" + wb.specialChars.source, Lp)), wb.addSpecialChars && (wb.specialChars = new RegExp(wb.specialChars.source + "|" + wb.addSpecialChars.source, Lp)), wb
      }
    });

    function Cp() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [tp.of(bb), Ep || (Ep = ow.fromClass(class {
        constructor(bb) {
          this.view = bb, this.ze = Zb.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(bb.state.facet(tp)), this.ze = this.decorator.createDeco(bb)
        }
        makeDecorator(bb) {
          return new lp({
            regexp: bb.specialChars,
            decoration: (wb, Mb, Hb) => {
              let {
                doc: pb
              } = Mb.state, Vb = (0, eb.L)(wb[0], 0);
              if (9 == Vb) {
                let bb = pb.lineAt(Hb),
                  wb = Mb.state.tabSize,
                  Vb = (0, eb.S)(bb.text, wb, Hb - bb.from);
                return Zb.replace({
                  widget: new Bp((wb - Vb % wb) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[Vb] || (this.decorationCache[Vb] = Zb.replace({
                widget: new Fp(bb, Vb)
              }))
            },
            boundary: bb.replaceTabs ? void 0 : /[^]/
          })
        }
        update(bb) {
          let wb = bb.state.facet(tp);
          bb.startState.facet(tp) != wb ? (this.decorator = this.makeDecorator(wb), this.ze = this.decorator.createDeco(bb.view)) : this.ze = this.decorator.updateDeco(bb, this.ze)
        }
      }, {
        ze: bb => bb.ze
      }))]
    }
    let Ep = null;
    class Fp extends cb {
      constructor(bb, wb) {
        super(), this.options = bb, this.code = wb
      }
      eq(bb) {
        return bb.code == this.code
      }
      toDOM(bb) {
        let wb = function(bb) {
            return bb >= 32 ? "\u2022" : 10 == bb ? "\u2424" : String.fromCharCode(9216 + bb)
          }(this.code),
          Mb = bb.state.phrase("Control character") + " " + (Op[this.code] || "0x" + this.code.toString(16)),
          eb = this.options.render && this.options.render(this.code, Mb, wb);
        if (eb) return eb;
        let Hb = document.createElement("span");
        return Hb.textContent = wb, Hb.title = Mb, Hb.setAttribute("aria-label", Mb), Hb.className = "cm-specialChar", Hb
      }
      ignoreEvent() {
        return !1
      }
    }
    class Bp extends cb {
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

    function sp() {
      return hp
    }
    const mp = Zb.line({
        class: "cm-activeLine"
      }),
      hp = ow.fromClass(class {
        constructor(bb) {
          this.ze = this.getDeco(bb)
        }
        update(bb) {
          (bb.docChanged || bb.selectionSet) && (this.ze = this.getDeco(bb.view))
        }
        getDeco(bb) {
          let wb = -1,
            Mb = [];
          for (let eb of bb.state.selection.gF) {
            let Hb = bb.lineBlockAt(eb.head);
            Hb.from > wb && (Mb.push(mp.range(Hb.from)), wb = Hb.from)
          }
          return Zb.set(Mb)
        }
      }, {
        ze: bb => bb.ze
      });
    class zp extends cb {
      constructor(bb) {
        super(), this.content = bb
      }
      toDOM(bb) {
        let wb = document.createElement("span");
        return wb.className = "cm-placeholder", wb.style.pointerEvents = "none", wb.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(bb) : this.content.cloneNode(!0)), wb.setAttribute("aria-hidden", "true"), wb
      }
      coordsAt(bb) {
        let wb = bb.firstChild ? qb(bb.firstChild) : [];
        if (!wb.length) return null;
        let Mb = window.getComputedStyle(bb.parentNode),
          eb = nb(wb[0], "rtl" != Mb.direction),
          Hb = parseInt(Mb.lineHeight);
        return eb.bottom - eb.top > 1.5 * Hb ? {
          left: eb.left,
          right: eb.right,
          top: eb.top,
          bottom: eb.top + Hb
        } : eb
      }
      ignoreEvent() {
        return !1
      }
    }

    function Xp(bb) {
      let wb = ow.fromClass(class {
        constructor(wb) {
          this.view = wb, this.placeholder = bb ? Zb.set([Zb.widget({
            widget: new zp(bb),
            side: 1
          }).range(0)]) : Zb.none
        }
        get ze() {
          return this.view.state.doc.length ? Zb.none : this.placeholder
        }
      }, {
        ze: bb => bb.ze
      });
      return "string" == typeof bb ? [wb, rH.contentAttributes.of({
        "aria-placeholder": bb
      })] : wb
    }
    const xp = 2e3;

    function jp(bb, wb) {
      let Mb = bb.posAtCoords({
          x: wb.clientX,
          y: wb.clientY
        }, !1),
        Hb = bb.state.doc.lineAt(Mb),
        pb = Mb - Hb.from,
        Vb = pb > xp ? -1 : pb == Hb.length ? function(bb, wb) {
          let Mb = bb.coordsAtPos(bb.viewport.from);
          return Mb ? Math.round(Math.abs((Mb.left - wb) / bb.defaultCharacterWidth)) : -1
        }(bb, wb.clientX) : (0, eb.S)(Hb.text, bb.state.tabSize, Mb - Hb.from);
      return {
        line: Hb.number,
        col: Vb,
        off: pb
      }
    }

    function Kp(bb, wb) {
      let Mb = jp(bb, wb),
        Hb = bb.state.selection;
      return Mb ? {
        update(bb) {
          if (bb.docChanged) {
            let wb = bb.changes.mapPos(bb.startState.doc.line(Mb.line).from),
              eb = bb.state.doc.lineAt(wb);
            Mb = {
              line: eb.number,
              col: Mb.col,
              off: Math.min(Mb.off, eb.length)
            }, Hb = Hb.map(bb.changes)
          }
        },
        get(wb, pb, Vb) {
          let gb = jp(bb, wb);
          if (!gb) return Hb;
          let lb = function(bb, wb, Mb) {
            let Hb = Math.min(wb.line, Mb.line),
              pb = Math.max(wb.line, Mb.line),
              Vb = [];
            if (wb.off > xp || Mb.off > xp || wb.col < 0 || Mb.col < 0) {
              let gb = Math.min(wb.off, Mb.off),
                lb = Math.max(wb.off, Mb.off);
              for (let wb = Hb; wb <= pb; wb++) {
                let Mb = bb.doc.line(wb);
                Mb.length <= lb && Vb.push(eb.j.range(Mb.from + gb, Mb.to + lb))
              }
            } else {
              let gb = Math.min(wb.col, Mb.col),
                lb = Math.max(wb.col, Mb.col);
              for (let wb = Hb; wb <= pb; wb++) {
                let Mb = bb.doc.line(wb),
                  Hb = (0, eb.Y)(Mb.text, gb, bb.tabSize, !0);
                if (Hb < 0) Vb.push(eb.j.cursor(Mb.to));
                else {
                  let wb = (0, eb.Y)(Mb.text, lb, bb.tabSize);
                  Vb.push(eb.j.range(Mb.from + Hb, Mb.from + wb))
                }
              }
            }
            return Vb
          }(bb.state, Mb, gb);
          return lb.length ? Vb ? eb.j.create(lb.concat(Hb.gF)) : eb.j.create(lb) : Hb
        }
      } : null
    }

    function rp(bb) {
      let wb = (null === bb || void 0 === bb ? void 0 : bb.eventFilter) || (bb => bb.altKey && 0 == bb.button);
      return rH.mouseSelectionStyle.of(((bb, Mb) => wb(Mb) ? Kp(bb, Mb) : null))
    }
    const Rp = {
        Alt: [18, bb => !!bb.altKey],
        Control: [17, bb => !!bb.ctrlKey],
        Shift: [16, bb => !!bb.shiftKey],
        Meta: [91, bb => !!bb.metaKey]
      },
      Dp = {
        style: "cursor: crosshair"
      };

    function cp() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [wb, Mb] = Rp[bb.key || "Alt"],
        eb = ow.fromClass(class {
          constructor(bb) {
            this.view = bb, this.isDown = !1
          }
          set(bb) {
            this.isDown != bb && (this.isDown = bb, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(bb) {
              this.set(bb.keyCode == wb || Mb(bb))
            },
            keyup(bb) {
              bb.keyCode != wb && Mb(bb) || this.set(!1)
            },
            mousemove(bb) {
              this.set(Mb(bb))
            }
          }
        });
      return [eb, rH.contentAttributes.of((bb => {
        var wb;
        return (null === (wb = bb.plugin(eb)) || void 0 === wb ? void 0 : wb.isDown) ? Dp : null
      }))]
    }
    const Yp = "-10000px";
    class Zp {
      constructor(bb, wb, Mb, eb) {
        this.facet = wb, this.createTooltipView = Mb, this.removeTooltipView = eb, this.input = bb.state.facet(wb), this.tooltips = this.input.filter((bb => bb));
        let Hb = null;
        this.tooltipViews = this.tooltips.map((bb => Hb = Mb(bb, Hb)))
      }
      update(bb, wb) {
        var Mb;
        let eb = bb.state.facet(this.facet),
          Hb = eb.filter((bb => bb));
        if (eb === this.input) {
          for (let wb of this.tooltipViews) wb.update && wb.update(bb);
          return !1
        }
        let pb = [],
          Vb = wb ? [] : null;
        for (let gb = 0; gb < Hb.length; gb++) {
          let Mb = Hb[gb],
            eb = -1;
          if (Mb) {
            for (let bb = 0; bb < this.tooltips.length; bb++) {
              let wb = this.tooltips[bb];
              wb && wb.create == Mb.create && (eb = bb)
            }
            if (eb < 0) pb[gb] = this.createTooltipView(Mb, gb ? pb[gb - 1] : null), Vb && (Vb[gb] = !!Mb.above);
            else {
              let Mb = pb[gb] = this.tooltipViews[eb];
              Vb && (Vb[gb] = wb[eb]), Mb.update && Mb.update(bb)
            }
          }
        }
        for (let gb of this.tooltipViews) pb.indexOf(gb) < 0 && (this.removeTooltipView(gb), null === (Mb = gb.destroy) || void 0 === Mb || Mb.call(gb));
        return wb && (Vb.forEach(((bb, Mb) => wb[Mb] = bb)), wb.length = Vb.length), this.input = eb, this.tooltips = Hb, this.tooltipViews = pb, !0
      }
    }

    function fp(bb) {
      let wb = bb.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: wb.clientHeight,
        right: wb.clientWidth
      }
    }
    const Ap = eb.o.define({
        combine: bb => {
          var wb, Mb, eb;
          return {
            position: xb.ios ? "absolute" : (null === (wb = bb.find((bb => bb.position))) || void 0 === wb ? void 0 : wb.position) || "fixed",
            parent: (null === (Mb = bb.find((bb => bb.parent))) || void 0 === Mb ? void 0 : Mb.parent) || null,
            tooltipSpace: (null === (eb = bb.find((bb => bb.tooltipSpace))) || void 0 === eb ? void 0 : eb.tooltipSpace) || fp
          }
        }
      }),
      Wp = new WeakMap,
      Jp = ow.fromClass(class {
        constructor(bb) {
          this.view = bb, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let wb = bb.state.facet(Ap);
          this.position = wb.position, this.parent = wb.parent, this.classes = bb.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new Zp(bb, Qp, ((bb, wb) => this.createTooltip(bb, wb)), (bb => {
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
          let wb = this.manager.update(bb, this.above);
          wb && this.observeIntersection();
          let Mb = wb || bb.geometryChanged,
            eb = bb.state.facet(Ap);
          if (eb.position != this.position && !this.madeAbsolute) {
            this.position = eb.position;
            for (let bb of this.manager.tooltipViews) bb.dom.style.position = this.position;
            Mb = !0
          }
          if (eb.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = eb.parent, this.createContainer();
            for (let bb of this.manager.tooltipViews) this.container.appendChild(bb.dom);
            Mb = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          Mb && this.maybeMeasure()
        }
        createTooltip(bb, wb) {
          let Mb = bb.create(this.view),
            eb = wb ? wb.dom : null;
          if (Mb.dom.classList.add("cm-tooltip"), bb.arrow && !Mb.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let bb = document.createElement("div");
            bb.className = "cm-tooltip-arrow", Mb.dom.appendChild(bb)
          }
          return Mb.dom.style.position = this.position, Mb.dom.style.top = Yp, Mb.dom.style.left = "0px", this.container.insertBefore(Mb.dom, eb), Mb.mount && Mb.mount(this.view), this.resizeObserver && this.resizeObserver.observe(Mb.dom), Mb
        }
        destroy() {
          var bb, wb, Mb;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let eb of this.manager.tooltipViews) eb.dom.remove(), null === (bb = eb.destroy) || void 0 === bb || bb.call(eb);
          this.parent && this.container.remove(), null === (wb = this.resizeObserver) || void 0 === wb || wb.disconnect(), null === (Mb = this.intersectionObserver) || void 0 === Mb || Mb.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let bb = 1,
            wb = 1,
            Mb = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: bb
            } = this.manager.tooltipViews[0];
            if (xb.safari) {
              let wb = bb.getBoundingClientRect();
              Mb = Math.abs(wb.top + 1e4) > 1 || Math.abs(wb.left) > 1
            } else Mb = !!bb.offsetParent && bb.offsetParent != this.container.ownerDocument.body
          }
          if (Mb || "absolute" == this.position)
            if (this.parent) {
              let Mb = this.parent.getBoundingClientRect();
              Mb.width && Mb.height && (bb = Mb.width / this.parent.offsetWidth, wb = Mb.height / this.parent.offsetHeight)
            } else({
              scaleX: bb,
              scaleY: wb
            } = this.view.viewState);
          let eb = this.view.scrollDOM.getBoundingClientRect(),
            Hb = lM(this.view);
          return {
            visible: {
              left: eb.left + Hb.left,
              top: eb.top + Hb.top,
              right: eb.right - Hb.right,
              bottom: eb.bottom - Hb.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((bb, wb) => {
              let Mb = this.manager.tooltipViews[wb];
              return Mb.getCoords ? Mb.getCoords(bb.pos) : this.view.coordsAtPos(bb.pos)
            })),
            size: this.manager.tooltipViews.map((bb => {
              let {
                dom: wb
              } = bb;
              return wb.getBoundingClientRect()
            })),
            space: this.view.state.facet(Ap).tooltipSpace(this.view),
            scaleX: bb,
            scaleY: wb,
            makeAbsolute: Mb
          }
        }
        writeMeasure(bb) {
          var wb;
          if (bb.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let bb of this.manager.tooltipViews) bb.dom.style.position = "absolute"
          }
          let {
            visible: Mb,
            space: eb,
            scaleX: Hb,
            scaleY: pb
          } = bb, Vb = [];
          for (let gb = 0; gb < this.manager.tooltips.length; gb++) {
            let lb = this.manager.tooltips[gb],
              Lb = this.manager.tooltipViews[gb],
              {
                dom: Ib
              } = Lb,
              Ob = bb.pos[gb],
              Ub = bb.size[gb];
            if (!Ob || !1 !== lb.clip && (Ob.bottom <= Math.max(Mb.top, eb.top) || Ob.top >= Math.min(Mb.bottom, eb.bottom) || Ob.right < Math.max(Mb.left, eb.left) - .1 || Ob.left > Math.min(Mb.right, eb.right) + .1)) {
              Ib.style.top = Yp;
              continue
            }
            let tb = lb.arrow ? Lb.dom.querySelector(".cm-tooltip-arrow") : null,
              Cb = tb ? 7 : 0,
              Eb = Ub.right - Ub.left,
              Fb = null !== (wb = Wp.get(Lb)) && void 0 !== wb ? wb : Ub.bottom - Ub.top,
              Bb = Lb.offset || vp,
              sb = this.view.textDirection == Lw.LTR,
              mb = Ub.width > eb.right - eb.left ? sb ? eb.left : eb.right - Ub.width : sb ? Math.max(eb.left, Math.min(Ob.left - (tb ? 14 : 0) + Bb.x, eb.right - Eb)) : Math.min(Math.max(eb.left, Ob.left - Eb + (tb ? 14 : 0) - Bb.x), eb.right - Eb),
              hb = this.above[gb];
            !lb.strictSide && (hb ? Ob.top - Fb - Cb - Bb.y < eb.top : Ob.bottom + Fb + Cb + Bb.y > eb.bottom) && hb == eb.bottom - Ob.bottom > Ob.top - eb.top && (hb = this.above[gb] = !hb);
            let zb = (hb ? Ob.top - eb.top : eb.bottom - Ob.bottom) - Cb;
            if (zb < Fb && !1 !== Lb.resize) {
              if (zb < this.view.defaultLineHeight) {
                Ib.style.top = Yp;
                continue
              }
              Wp.set(Lb, Fb), Ib.style.height = (Fb = zb) / pb + "px"
            } else Ib.style.height && (Ib.style.height = "");
            let Xb = hb ? Ob.top - Fb - Cb - Bb.y : Ob.bottom + Cb + Bb.y,
              xb = mb + Eb;
            if (!0 !== Lb.overlap)
              for (let bb of Vb) bb.left < xb && bb.right > mb && bb.top < Xb + Fb && bb.bottom > Xb && (Xb = hb ? bb.top - Fb - 2 - Cb : bb.bottom + Cb + 2);
            if ("absolute" == this.position ? (Ib.style.top = (Xb - bb.parent.top) / pb + "px", Sp(Ib, (mb - bb.parent.left) / Hb)) : (Ib.style.top = Xb / pb + "px", Sp(Ib, mb / Hb)), tb) {
              let bb = Ob.left + (sb ? Bb.x : -Bb.x) - (mb + 14 - 7);
              tb.style.left = bb / Hb + "px"
            }!0 !== Lb.overlap && Vb.push({
              left: mb,
              top: Xb,
              right: xb,
              bottom: Xb + Fb
            }), Ib.classList.toggle("cm-tooltip-above", hb), Ib.classList.toggle("cm-tooltip-below", !hb), Lb.positioned && Lb.positioned(bb.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let bb of this.manager.tooltipViews) bb.dom.style.top = Yp
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function Sp(bb, wb) {
      let Mb = parseInt(bb.style.left, 10);
      (isNaN(Mb) || Math.abs(wb - Mb) > 1) && (bb.style.left = wb + "px")
    }
    const Np = rH.baseTheme({
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
      vp = {
        x: 0,
        y: 0
      },
      Qp = eb.o.define({
        enables: [Jp, Np]
      }),
      Gp = eb.o.define({
        combine: bb => bb.reduce(((bb, wb) => bb.concat(wb)), [])
      });
    class qp {
      static create(bb) {
        return new qp(bb)
      }
      constructor(bb) {
        this.view = bb, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Zp(bb, Gp, ((bb, wb) => this.createHostedView(bb, wb)), (bb => bb.dom.remove()))
      }
      createHostedView(bb, wb) {
        let Mb = bb.create(this.view);
        return Mb.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(Mb.dom, wb ? wb.dom.nextSibling : this.dom.firstChild), this.mounted && Mb.mount && Mb.mount(this.view), Mb
      }
      mount(bb) {
        for (let wb of this.manager.tooltipViews) wb.mount && wb.mount(bb);
        this.mounted = !0
      }
      positioned(bb) {
        for (let wb of this.manager.tooltipViews) wb.positioned && wb.positioned(bb)
      }
      update(bb) {
        this.manager.update(bb)
      }
      destroy() {
        var bb;
        for (let wb of this.manager.tooltipViews) null === (bb = wb.destroy) || void 0 === bb || bb.call(wb)
      }
      passProp(bb) {
        let wb;
        for (let Mb of this.manager.tooltipViews) {
          let eb = Mb[bb];
          if (void 0 !== eb)
            if (void 0 === wb) wb = eb;
            else if (wb !== eb) return
        }
        return wb
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
    const ap = Qp.compute([Gp], (bb => {
      let wb = bb.facet(Gp);
      return 0 === wb.length ? null : {
        pos: Math.min(...wb.map((bb => bb.pos))),
        end: Math.max(...wb.map((bb => {
          var wb;
          return null !== (wb = bb.end) && void 0 !== wb ? wb : bb.pos
        }))),
        create: qp.create,
        above: wb[0].above,
        arrow: wb.some((bb => bb.arrow))
      }
    }));
    class ip {
      constructor(bb, wb, Mb, eb, Hb) {
        this.view = bb, this.source = wb, this.field = Mb, this.setHover = eb, this.hoverTime = Hb, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: wb
        } = this, Mb = bb.docView.tile.nearest(wb.target);
        if (!Mb) return;
        let eb, Hb = 1;
        if (Mb.isWidget()) eb = Mb.posAtStart;
        else {
          if (eb = bb.posAtCoords(wb), null == eb) return;
          let Mb = bb.coordsAtPos(eb);
          if (!Mb || wb.y < Mb.top || wb.y > Mb.bottom || wb.x < Mb.left - bb.defaultCharacterWidth || wb.x > Mb.right + bb.defaultCharacterWidth) return;
          let pb = bb.bidiSpans(bb.state.doc.lineAt(eb)).find((bb => bb.from <= eb && bb.to >= eb)),
            Vb = pb && pb.dir == Lw.RTL ? -1 : 1;
          Hb = wb.x < Mb.left ? -Vb : Vb
        }
        let pb = this.source(bb, eb, Hb);
        if (null === pb || void 0 === pb ? void 0 : pb.then) {
          let wb = this.pending = {
            pos: eb
          };
          pb.then((Mb => {
            this.pending == wb && (this.pending = null, !Mb || Array.isArray(Mb) && !Mb.length || bb.dispatch({
              effects: this.setHover.of(Array.isArray(Mb) ? Mb : [Mb])
            }))
          }), (wb => dw(bb.state, wb, "hover tooltip")))
        } else !pb || Array.isArray(pb) && !pb.length || bb.dispatch({
          effects: this.setHover.of(Array.isArray(pb) ? pb : [pb])
        })
      }
      get tooltip() {
        let bb = this.view.plugin(Jp),
          wb = bb ? bb.manager.tooltips.findIndex((bb => bb.create == qp.create)) : -1;
        return wb > -1 ? bb.manager.tooltipViews[wb] : null
      }
      mousemove(bb) {
        var wb, Mb;
        this.lastMove = {
          x: bb.clientX,
          y: bb.clientY,
          target: bb.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: eb,
          tooltip: Hb
        } = this;
        if (eb.length && Hb && ! function(bb, wb) {
            let Mb, {
              left: eb,
              right: Hb,
              top: pb,
              bottom: Vb
            } = bb.getBoundingClientRect();
            if (Mb = bb.querySelector(".cm-tooltip-arrow")) {
              let bb = Mb.getBoundingClientRect();
              pb = Math.min(bb.top, pb), Vb = Math.max(bb.bottom, Vb)
            }
            return wb.clientX >= eb - dp && wb.clientX <= Hb + dp && wb.clientY >= pb - dp && wb.clientY <= Vb + dp
          }(Hb.dom, bb) || this.pending) {
          let {
            pos: Hb
          } = eb[0] || this.pending, pb = null !== (Mb = null === (wb = eb[0]) || void 0 === wb ? void 0 : wb.end) && void 0 !== Mb ? Mb : Hb;
          (Hb == pb ? this.view.posAtCoords(this.lastMove) == Hb : function(bb, wb, Mb, eb, Hb) {
            let pb = bb.scrollDOM.getBoundingClientRect(),
              Vb = bb.documentTop + bb.documentPadding.top + bb.contentHeight;
            if (pb.left > eb || pb.right < eb || pb.top > Hb || Math.min(pb.bottom, Vb) < Hb) return !1;
            let gb = bb.posAtCoords({
              x: eb,
              y: Hb
            }, !1);
            return gb >= wb && gb <= Mb
          }(this.view, Hb, pb, bb.clientX, bb.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(bb) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: wb
        } = this;
        if (wb.length) {
          let {
            tooltip: wb
          } = this;
          wb && wb.dom.contains(bb.relatedTarget) ? this.watchTooltipLeave(wb.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(bb) {
        let wb = Mb => {
          bb.removeEventListener("mouseleave", wb), this.active.length && !this.view.dom.contains(Mb.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        bb.addEventListener("mouseleave", wb)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const dp = 4;

    function Pp(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Mb = eb.E.define(),
        Hb = eb.G.define({
          create: () => [],
          update(bb, Hb) {
            if (bb.length && (wb.hideOnChange && (Hb.docChanged || Hb.selection) ? bb = [] : wb.hideOn && (bb = bb.filter((bb => !wb.hideOn(Hb, bb)))), Hb.docChanged)) {
              let wb = [];
              for (let Mb of bb) {
                let bb = Hb.changes.mapPos(Mb.pos, -1, eb.s.TrackDel);
                if (null != bb) {
                  let eb = Object.assign(Object.create(null), Mb);
                  eb.pos = bb, null != eb.end && (eb.end = Hb.changes.mapPos(eb.end)), wb.push(eb)
                }
              }
              bb = wb
            }
            for (let wb of Hb.effects) wb.is(Mb) && (bb = wb.value), wb.is(yp) && (bb = []);
            return bb
          },
          provide: bb => Gp.from(bb)
        });
      return {
        active: Hb,
        extension: [Hb, ow.define((eb => new ip(eb, bb, Hb, Mb, wb.hoverTime || 300))), ap]
      }
    }

    function np(bb, wb) {
      let Mb = bb.plugin(Jp);
      if (!Mb) return null;
      let eb = Mb.manager.tooltips.indexOf(wb);
      return eb < 0 ? null : Mb.manager.tooltipViews[eb]
    }
    const yp = eb.E.define();
    const op = eb.o.define({
      combine(bb) {
        let wb, Mb;
        for (let eb of bb) wb = wb || eb.topContainer, Mb = Mb || eb.bottomContainer;
        return {
          topContainer: wb,
          bottomContainer: Mb
        }
      }
    });

    function Tp(bb, wb) {
      let Mb = bb.plugin(kp),
        eb = Mb ? Mb.specs.indexOf(wb) : -1;
      return eb > -1 ? Mb.panels[eb] : null
    }
    const kp = ow.fromClass(class {
      constructor(bb) {
        this.input = bb.state.facet(MV), this.specs = this.input.filter((bb => bb)), this.panels = this.specs.map((wb => wb(bb)));
        let wb = bb.state.facet(op);
        this.top = new bV(bb, !0, wb.topContainer), this.bottom = new bV(bb, !1, wb.bottomContainer), this.top.sync(this.panels.filter((bb => bb.top))), this.bottom.sync(this.panels.filter((bb => !bb.top)));
        for (let Mb of this.panels) Mb.dom.classList.add("cm-panel"), Mb.mount && Mb.mount()
      }
      update(bb) {
        let wb = bb.state.facet(op);
        this.top.container != wb.topContainer && (this.top.sync([]), this.top = new bV(bb.view, !0, wb.topContainer)), this.bottom.container != wb.bottomContainer && (this.bottom.sync([]), this.bottom = new bV(bb.view, !1, wb.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let Mb = bb.state.facet(MV);
        if (Mb != this.input) {
          let wb = Mb.filter((bb => bb)),
            eb = [],
            Hb = [],
            pb = [],
            Vb = [];
          for (let Mb of wb) {
            let wb, gb = this.specs.indexOf(Mb);
            gb < 0 ? (wb = Mb(bb.view), Vb.push(wb)) : (wb = this.panels[gb], wb.update && wb.update(bb)), eb.push(wb), (wb.top ? Hb : pb).push(wb)
          }
          this.specs = wb, this.panels = eb, this.top.sync(Hb), this.bottom.sync(pb);
          for (let bb of Vb) bb.dom.classList.add("cm-panel"), bb.mount && bb.mount()
        } else
          for (let eb of this.panels) eb.update && eb.update(bb)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: bb => rH.scrollMargins.of((wb => {
        let Mb = wb.plugin(bb);
        return Mb && {
          top: Mb.top.scrollMargin(),
          bottom: Mb.bottom.scrollMargin()
        }
      }))
    });
    class bV {
      constructor(bb, wb, Mb) {
        this.view = bb, this.top = wb, this.container = Mb, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(bb) {
        for (let wb of this.panels) wb.destroy && bb.indexOf(wb) < 0 && wb.destroy();
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
        for (let wb of this.panels)
          if (wb.dom.parentNode == this.dom) {
            for (; bb != wb.dom;) bb = wV(bb);
            bb = bb.nextSibling
          } else this.dom.insertBefore(wb.dom, bb);
        for (; bb;) bb = wV(bb)
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

    function wV(bb) {
      let wb = bb.nextSibling;
      return bb.remove(), wb
    }
    const MV = eb.o.define({
      enables: kp
    });

    function eV(bb, wb) {
      let Mb, Hb = new Promise((bb => Mb = bb)),
        pb = bb => function(bb, wb, Mb) {
          let eb = wb.content ? wb.content(bb, (() => Vb(null))) : null;
          if (!eb) {
            if (eb = (0, Ob.c)("form"), wb.input) {
              let bb = (0, Ob.c)("input", wb.input);
              /^(text|password|number|email|tel|url)$/.test(bb.type) && bb.classList.add("cm-textfield"), bb.name || (bb.name = "input"), eb.appendChild((0, Ob.c)("label", (wb.label || "") + ": ", bb))
            } else eb.appendChild(document.createTextNode(wb.label || ""));
            eb.appendChild(document.createTextNode(" ")), eb.appendChild((0, Ob.c)("button", {
              class: "cm-button",
              type: "submit"
            }, wb.submitLabel || "OK"))
          }
          let Hb = "FORM" == eb.nodeName ? [eb] : eb.querySelectorAll("form");
          for (let gb = 0; gb < Hb.length; gb++) {
            let bb = Hb[gb];
            bb.addEventListener("keydown", (wb => {
              27 == wb.keyCode ? (wb.preventDefault(), Vb(null)) : 13 == wb.keyCode && (wb.preventDefault(), Vb(bb))
            })), bb.addEventListener("submit", (wb => {
              wb.preventDefault(), Vb(bb)
            }))
          }
          let pb = (0, Ob.c)("div", eb, (0, Ob.c)("button", {
            onclick: () => Vb(null),
            "aria-label": bb.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          wb.class && (pb.className = wb.class);

          function Vb(wb) {
            pb.contains(pb.ownerDocument.activeElement) && bb.focus(), Mb(wb)
          }
          return pb.classList.add("cm-dialog"), {
            dom: pb,
            top: wb.top,
            mount: () => {
              if (wb.focus) {
                let bb;
                bb = "string" == typeof wb.focus ? eb.querySelector(wb.focus) : eb.querySelector("input") || eb.querySelector("button"), bb && "select" in bb ? bb.select() : bb && "focus" in bb && bb.focus()
              }
            }
          }
        }(bb, wb, Mb);
      bb.state.field(HV, !1) ? bb.dispatch({
        effects: pV.of(pb)
      }) : bb.dispatch({
        effects: eb.E.appendConfig.of(HV.init((() => [pb])))
      });
      let Vb = VV.of(pb);
      return {
        close: Vb,
        result: Hb.then((wb => ((bb.win.queueMicrotask || (wb => bb.win.setTimeout(wb, 10)))((() => {
          bb.state.field(HV).indexOf(pb) > -1 && bb.dispatch({
            effects: Vb
          })
        })), wb)))
      }
    }
    const HV = eb.G.define({
        create: () => [],
        update(bb, wb) {
          for (let Mb of wb.effects) Mb.is(pV) ? bb = [Mb.value].concat(bb) : Mb.is(VV) && (bb = bb.filter((bb => bb != Mb.value)));
          return bb
        },
        provide: bb => MV.computeN([bb], (wb => wb.field(bb)))
      }),
      pV = eb.E.define(),
      VV = eb.E.define();
    class gV extends eb.C {
      compare(bb) {
        return this == bb || this.constructor == bb.constructor && this.eq(bb)
      }
      eq(bb) {
        return !1
      }
      destroy(bb) {}
    }
    gV.prototype.elementClass = "", gV.prototype.toDOM = void 0, gV.prototype.mapMode = eb.s.TrackBefore, gV.prototype.startSide = gV.prototype.endSide = -1, gV.prototype.point = !0;
    const lV = eb.o.define(),
      LV = eb.o.define(),
      IV = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => eb.B.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      OV = eb.o.define();

    function UV(bb) {
      return [CV(), OV.of({
        ...IV,
        ...bb
      })]
    }
    const tV = eb.o.define({
      combine: bb => bb.some((bb => bb))
    });

    function CV(bb) {
      let wb = [EV];
      return bb && !1 === bb.fixed && wb.push(tV.of(!0)), wb
    }
    const EV = ow.fromClass(class {
      constructor(bb) {
        this.view = bb, this.domAfter = null, this.prevViewport = bb.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = bb.state.facet(OV).map((wb => new mV(bb, wb))), this.fixed = !bb.state.facet(tV);
        for (let wb of this.gutters) "after" == wb.config.side ? this.getDOMAfter().appendChild(wb.dom) : this.dom.appendChild(wb.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), bb.scrollDOM.insertBefore(this.dom, bb.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(bb) {
        if (this.updateGutters(bb)) {
          let wb = this.prevViewport,
            Mb = bb.view.viewport,
            eb = Math.min(wb.to, Mb.to) - Math.max(wb.from, Mb.from);
          this.syncGutters(eb < .8 * (Mb.to - Mb.from))
        }
        if (bb.geometryChanged) {
          let bb = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = bb, this.domAfter && (this.domAfter.style.minHeight = bb)
        }
        this.view.state.facet(tV) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = bb.view.viewport
      }
      syncGutters(bb) {
        let wb = this.dom.nextSibling;
        bb && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let Mb = eb.B.iter(this.view.state.facet(lV), this.view.viewport.from),
          Hb = [],
          pb = this.gutters.map((bb => new sV(bb, this.view.viewport, -this.view.documentPadding.top)));
        for (let eb of this.view.viewportLineBlocks)
          if (Hb.length && (Hb = []), Array.isArray(eb.type)) {
            let bb = !0;
            for (let wb of eb.type)
              if (wb.type == Yb.Text && bb) {
                BV(Mb, Hb, wb.from);
                for (let bb of pb) bb.line(this.view, wb, Hb);
                bb = !1
              } else if (wb.widget)
              for (let bb of pb) bb.widget(this.view, wb)
          } else if (eb.type == Yb.Text) {
          BV(Mb, Hb, eb.from);
          for (let bb of pb) bb.line(this.view, eb, Hb)
        } else if (eb.widget)
          for (let bb of pb) bb.widget(this.view, eb);
        for (let eb of pb) eb.finish();
        bb && (this.view.scrollDOM.insertBefore(this.dom, wb), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(bb) {
        let wb = bb.startState.facet(OV),
          Mb = bb.state.facet(OV),
          Hb = bb.docChanged || bb.heightChanged || bb.viewportChanged || !eb.B.eq(bb.startState.facet(lV), bb.state.facet(lV), bb.view.viewport.from, bb.view.viewport.to);
        if (wb == Mb)
          for (let eb of this.gutters) eb.update(bb) && (Hb = !0);
        else {
          Hb = !0;
          let eb = [];
          for (let Hb of Mb) {
            let Mb = wb.indexOf(Hb);
            Mb < 0 ? eb.push(new mV(this.view, Hb)) : (this.gutters[Mb].update(bb), eb.push(this.gutters[Mb]))
          }
          for (let bb of this.gutters) bb.dom.remove(), eb.indexOf(bb) < 0 && bb.destroy();
          for (let bb of eb) "after" == bb.config.side ? this.getDOMAfter().appendChild(bb.dom) : this.dom.appendChild(bb.dom);
          this.gutters = eb
        }
        return Hb
      }
      destroy() {
        for (let bb of this.gutters) bb.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: bb => rH.scrollMargins.of((wb => {
        let Mb = wb.plugin(bb);
        if (!Mb || 0 == Mb.gutters.length || !Mb.fixed) return null;
        let eb = Mb.dom.offsetWidth * wb.scaleX,
          Hb = Mb.domAfter ? Mb.domAfter.offsetWidth * wb.scaleX : 0;
        return wb.textDirection == Lw.LTR ? {
          left: eb,
          right: Hb
        } : {
          right: eb,
          left: Hb
        }
      }))
    });

    function FV(bb) {
      return Array.isArray(bb) ? bb : [bb]
    }

    function BV(bb, wb, Mb) {
      for (; bb.value && bb.from <= Mb;) bb.from == Mb && wb.push(bb.value), bb.next()
    }
    class sV {
      constructor(bb, wb, Mb) {
        this.gutter = bb, this.height = Mb, this.i = 0, this.cursor = eb.B.iter(bb.markers, wb.from)
      }
      addElement(bb, wb, Mb) {
        let {
          gutter: eb
        } = this, Hb = (wb.top - this.height) / bb.scaleY, pb = wb.height / bb.scaleY;
        if (this.i == eb.elements.length) {
          let wb = new hV(bb, pb, Hb, Mb);
          eb.elements.push(wb), eb.dom.appendChild(wb.dom)
        } else eb.elements[this.i].update(bb, pb, Hb, Mb);
        this.height = wb.bottom, this.i++
      }
      line(bb, wb, Mb) {
        let eb = [];
        BV(this.cursor, eb, wb.from), Mb.length && (eb = eb.concat(Mb));
        let Hb = this.gutter.config.lineMarker(bb, wb, eb);
        Hb && eb.unshift(Hb);
        let pb = this.gutter;
        (0 != eb.length || pb.config.renderEmptyElements) && this.addElement(bb, wb, eb)
      }
      widget(bb, wb) {
        let Mb = this.gutter.config.widgetMarker(bb, wb.widget, wb),
          eb = Mb ? [Mb] : null;
        for (let Hb of bb.state.facet(LV)) {
          let Mb = Hb(bb, wb.widget, wb);
          Mb && (eb || (eb = [])).push(Mb)
        }
        eb && this.addElement(bb, wb, eb)
      }
      finish() {
        let bb = this.gutter;
        for (; bb.elements.length > this.i;) {
          let wb = bb.elements.pop();
          bb.dom.removeChild(wb.dom), wb.destroy()
        }
      }
    }
    class mV {
      constructor(bb, wb) {
        this.view = bb, this.config = wb, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let Mb in wb.domEventHandlers) this.dom.addEventListener(Mb, (eb => {
          let Hb, pb = eb.target;
          if (pb != this.dom && this.dom.contains(pb)) {
            for (; pb.parentNode != this.dom;) pb = pb.parentNode;
            let bb = pb.getBoundingClientRect();
            Hb = (bb.top + bb.bottom) / 2
          } else Hb = eb.clientY;
          let Vb = bb.lineBlockAtHeight(Hb - bb.documentTop);
          wb.domEventHandlers[Mb](bb, Vb, eb) && eb.preventDefault()
        }));
        this.markers = FV(wb.markers(bb)), wb.initialSpacer && (this.spacer = new hV(bb, 0, 0, [wb.initialSpacer(bb)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(bb) {
        let wb = this.markers;
        if (this.markers = FV(this.config.markers(bb.view)), this.spacer && this.config.updateSpacer) {
          let wb = this.config.updateSpacer(this.spacer.markers[0], bb);
          wb != this.spacer.markers[0] && this.spacer.update(bb.view, 0, 0, [wb])
        }
        let Mb = bb.view.viewport;
        return !eb.B.eq(this.markers, wb, Mb.from, Mb.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(bb)
      }
      destroy() {
        for (let bb of this.elements) bb.destroy()
      }
    }
    class hV {
      constructor(bb, wb, Mb, eb) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(bb, wb, Mb, eb)
      }
      update(bb, wb, Mb, eb) {
        this.height != wb && (this.height = wb, this.dom.style.height = wb + "px"), this.above != Mb && (this.dom.style.marginTop = (this.above = Mb) ? Mb + "px" : ""),
          function(bb, wb) {
            if (bb.length != wb.length) return !1;
            for (let Mb = 0; Mb < bb.length; Mb++)
              if (!bb[Mb].compare(wb[Mb])) return !1;
            return !0
          }(this.markers, eb) || this.setMarkers(bb, eb)
      }
      setMarkers(bb, wb) {
        let Mb = "cm-gutterElement",
          eb = this.dom.firstChild;
        for (let Hb = 0, pb = 0;;) {
          let Vb = pb,
            gb = Hb < wb.length ? wb[Hb++] : null,
            lb = !1;
          if (gb) {
            let bb = gb.elementClass;
            bb && (Mb += " " + bb);
            for (let wb = pb; wb < this.markers.length; wb++)
              if (this.markers[wb].compare(gb)) {
                Vb = wb, lb = !0;
                break
              }
          } else Vb = this.markers.length;
          for (; pb < Vb;) {
            let bb = this.markers[pb++];
            if (bb.toDOM) {
              bb.destroy(eb);
              let wb = eb.nextSibling;
              eb.remove(), eb = wb
            }
          }
          if (!gb) break;
          gb.toDOM && (lb ? eb = eb.nextSibling : this.dom.insertBefore(gb.toDOM(bb), eb)), lb && pb++
        }
        this.dom.className = Mb, this.markers = wb
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const zV = eb.o.define(),
      XV = eb.o.define(),
      xV = eb.o.define({
        combine: bb => (0, eb.P)(bb, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(bb, wb) {
            let Mb = Object.assign({}, bb);
            for (let eb in wb) {
              let bb = Mb[eb],
                Hb = wb[eb];
              Mb[eb] = bb ? (wb, Mb, eb) => bb(wb, Mb, eb) || Hb(wb, Mb, eb) : Hb
            }
            return Mb
          }
        })
      });
    class jV extends gV {
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

    function KV(bb, wb) {
      return bb.state.facet(xV).formatNumber(wb, bb.state)
    }
    const rV = OV.compute([xV], (bb => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: bb => bb.state.facet(zV),
      lineMarker: (bb, wb, Mb) => Mb.some((bb => bb.toDOM)) ? null : new jV(KV(bb, bb.state.doc.lineAt(wb.from).number)),
      widgetMarker: (bb, wb, Mb) => {
        for (let eb of bb.state.facet(XV)) {
          let Hb = eb(bb, wb, Mb);
          if (Hb) return Hb
        }
        return null
      },
      lineMarkerChange: bb => bb.startState.facet(xV) != bb.state.facet(xV),
      initialSpacer: bb => new jV(KV(bb, DV(bb.state.doc.lines))),
      updateSpacer(bb, wb) {
        let Mb = KV(wb.view, DV(wb.view.state.doc.lines));
        return Mb == bb.number ? bb : new jV(Mb)
      },
      domEventHandlers: bb.facet(xV).domEventHandlers,
      side: "before"
    })));

    function RV() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [xV.of(bb), CV(), rV]
    }

    function DV(bb) {
      let wb = 9;
      for (; wb < bb;) wb = 10 * wb + 9;
      return wb
    }
    const cV = new class extends gV {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      YV = lV.compute(["selection"], (bb => {
        let wb = [],
          Mb = -1;
        for (let eb of bb.selection.gF) {
          let Hb = bb.doc.lineAt(eb.head).from;
          Hb > Mb && (Mb = Hb, wb.push(cV.range(Hb)))
        }
        return eb.B.of(wb)
      }));

    function ZV() {
      return YV
    }
  },
  53533: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      c: () => tb,
      d: () => Vb,
      h: () => Ib,
      k: () => Lb,
      l: () => fb,
      m: () => Wb,
      q: () => Ab,
      t: () => Cb
    });
    const eb = 1024;
    let Hb = 0;
    class pb {
      constructor(bb, wb) {
        this.from = bb, this.to = wb
      }
    }
    class Vb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = Hb++, this.perNode = !!bb.perNode, this.deserialize = bb.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = bb.combine || null
      }
      add(bb) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof bb && (bb = Lb.match(bb)), wb => {
          let Mb = bb(wb);
          return void 0 === Mb ? null : [this, Mb]
        }
      }
    }
    Vb.closedBy = new Vb({
      deserialize: bb => bb.split(" ")
    }), Vb.openedBy = new Vb({
      deserialize: bb => bb.split(" ")
    }), Vb.group = new Vb({
      deserialize: bb => bb.split(" ")
    }), Vb.isolate = new Vb({
      deserialize: bb => {
        if (bb && "rtl" != bb && "ltr" != bb && "auto" != bb) throw new RangeError("Invalid value for isolate: " + bb);
        return bb || "auto"
      }
    }), Vb.contextHash = new Vb({
      perNode: !0
    }), Vb.lookAhead = new Vb({
      perNode: !0
    }), Vb.mounted = new Vb({
      perNode: !0
    });
    class gb {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = bb, this.overlay = wb, this.parser = Mb, this.bracketed = eb
      }
      static get(bb) {
        return bb && bb.props && bb.props[Vb.mounted.id]
      }
    }
    const lb = Object.create(null);
    class Lb {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = bb, this.props = wb, this.id = Mb, this.flags = eb
      }
      static define(bb) {
        let wb = bb.props && bb.props.length ? Object.create(null) : lb,
          Mb = (bb.top ? 1 : 0) | (bb.skipped ? 2 : 0) | (bb.error ? 4 : 0) | (null == bb.name ? 8 : 0),
          eb = new Lb(bb.name || "", wb, bb.id, Mb);
        if (bb.props)
          for (let Hb of bb.props)
            if (Array.isArray(Hb) || (Hb = Hb(eb)), Hb) {
              if (Hb[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              wb[Hb[0].id] = Hb[1]
            } return eb
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
          let wb = this.prop(Vb.group);
          return !!wb && wb.indexOf(bb) > -1
        }
        return this.id == bb
      }
      static match(bb) {
        let wb = Object.create(null);
        for (let Mb in bb)
          for (let eb of Mb.split(" ")) wb[eb] = bb[Mb];
        return bb => {
          for (let Mb = bb.prop(Vb.group), eb = -1; eb < (Mb ? Mb.length : 0); eb++) {
            let Hb = wb[eb < 0 ? bb.name : Mb[eb]];
            if (Hb) return Hb
          }
        }
      }
    }
    Lb.none = new Lb("", Object.create(null), 0, 8);
    class Ib {
      constructor(bb) {
        this.types = bb;
        for (let wb = 0; wb < bb.length; wb++)
          if (bb[wb].id != wb) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let bb = [];
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        for (let Hb of this.types) {
          let wb = null;
          for (let bb of Mb) {
            let Mb = bb(Hb);
            if (Mb) {
              wb || (wb = Object.assign({}, Hb.props));
              let bb = Mb[1],
                eb = Mb[0];
              eb.combine && eb.id in wb && (bb = eb.combine(wb[eb.id], bb)), wb[eb.id] = bb
            }
          }
          bb.push(wb ? new Lb(Hb.name, wb, Hb.id, Hb.flags) : Hb)
        }
        return new Ib(bb)
      }
    }
    const Ob = new WeakMap,
      Ub = new WeakMap;
    var tb;
    ! function(bb) {
      bb[bb.ExcludeBuffers = 1] = "ExcludeBuffers", bb[bb.IncludeAnonymous = 2] = "IncludeAnonymous", bb[bb.IgnoreMounts = 4] = "IgnoreMounts", bb[bb.IgnoreOverlays = 8] = "IgnoreOverlays", bb[bb.EnterBracketed = 16] = "EnterBracketed"
    }(tb || (tb = {}));
    class Cb {
      constructor(bb, wb, Mb, eb, Hb) {
        if (this.type = bb, this.children = wb, this.positions = Mb, this.length = eb, this.props = null, Hb && Hb.length) {
          this.props = Object.create(null);
          for (let [bb, wb] of Hb) this.props["number" == typeof bb ? bb : bb.id] = wb
        }
      }
      toString() {
        let bb = gb.get(this);
        if (bb && !bb.overlay) return bb.tree.toString();
        let wb = "";
        for (let Mb of this.children) {
          let bb = Mb.toString();
          bb && (wb && (wb += ","), wb += bb)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (wb.length ? "(" + wb + ")" : "") : wb
      }
      cursor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Rb(this.topNode, bb)
      }
      cursorAt(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = Ob.get(this) || this.topNode,
          eb = new Rb(Mb);
        return eb.moveTo(bb, wb), Ob.set(this, eb._tree), eb
      }
      get topNode() {
        return new hb(this, 0, 0, null)
      }
      resolve(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = sb(Ob.get(this) || this.topNode, bb, wb, !1);
        return Ob.set(this, Mb), Mb
      }
      resolveInner(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = sb(Ub.get(this) || this.topNode, bb, wb, !0);
        return Ub.set(this, Mb), Mb
      }
      resolveStack(bb) {
        return function(bb, wb, Mb) {
          let eb = bb.resolveInner(wb, Mb),
            Hb = null;
          for (let pb = eb instanceof hb ? eb : eb.context.parent; pb; pb = pb.parent)
            if (pb.index < 0) {
              let bb = pb.parent;
              (Hb || (Hb = [eb])).push(bb.resolve(wb, Mb)), pb = bb
            } else {
              let bb = gb.get(pb.tree);
              if (bb && bb.overlay && bb.overlay[0].from <= wb && bb.overlay[bb.overlay.length - 1].to >= wb) {
                let Vb = new hb(bb.tree, bb.overlay[0].from + pb.from, -1, pb);
                (Hb || (Hb = [eb])).push(sb(Vb, wb, Mb, !1))
              }
            } return Hb ? Kb(Hb) : eb
        }(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(bb) {
        let {
          enter: wb,
          leave: Mb,
          from: eb = 0,
          to: Hb = this.length
        } = bb, pb = bb.mode || 0, Vb = (pb & tb.IncludeAnonymous) > 0;
        for (let gb = this.cursor(pb | tb.IncludeAnonymous);;) {
          let bb = !1;
          if (gb.from <= Hb && gb.to >= eb && (!Vb && gb.type.isAnonymous || !1 !== wb(gb))) {
            if (gb.firstChild()) continue;
            bb = !0
          }
          for (; bb && Mb && (Vb || !gb.type.isAnonymous) && Mb(gb), !gb.nextSibling();) {
            if (!gb.parent()) return;
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
          for (let wb in this.props) bb.push([+wb, this.props[wb]]);
        return bb
      }
      balance() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Zb(Lb.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((bb, wb, Mb) => new Cb(this.type, bb, wb, Mb, this.propValues)), bb.makeTree || ((bb, wb, Mb) => new Cb(Lb.none, bb, wb, Mb)))
      }
      static build(bb) {
        return function(bb) {
          var wb;
          let {
            buffer: Mb,
            nodeSet: Hb,
            maxBufferLength: pb = eb,
            reused: gb = [],
            minRepeatType: lb = Hb.types.length
          } = bb, Lb = Array.isArray(Mb) ? new Eb(Mb, Mb.length) : Mb, Ib = Hb.types, Ob = 0, Ub = 0;

          function tb(bb, wb, Mb, eb, Vb, Cb) {
            let {
              id: Eb,
              start: xb,
              end: jb,
              size: Kb
            } = Lb, rb = Ub, Rb = Ob;
            if (Kb < 0) {
              if (Lb.next(), -1 == Kb) {
                let wb = gb[Eb];
                return Mb.push(wb), void eb.push(xb - bb)
              }
              if (-3 == Kb) return void(Ob = Eb);
              if (-4 == Kb) return void(Ub = Eb);
              throw new RangeError(`Unrecognized record size: ${Kb}`)
            }
            let Db, cb, Yb = Ib[Eb],
              fb = xb - bb;
            if (jb - xb <= pb && (cb = zb(Lb.pos - wb, Vb))) {
              let wb = new Uint16Array(cb.size - cb.skip),
                Mb = Lb.pos - cb.size,
                eb = wb.length;
              for (; Lb.pos > Mb;) eb = Xb(cb.start, wb, eb);
              Db = new Fb(wb, jb - cb.start, Hb), fb = cb.start - bb
            } else {
              let bb = Lb.pos - Kb;
              Lb.next();
              let wb = [],
                Mb = [],
                eb = Eb >= lb ? Eb : -1,
                Hb = 0,
                Vb = jb;
              for (; Lb.pos > bb;) eb >= 0 && Lb.id == eb && Lb.size >= 0 ? (Lb.end <= Vb - pb && (mb(wb, Mb, xb, Hb, Lb.end, Vb, eb, rb, Rb), Hb = wb.length, Vb = Lb.end), Lb.next()) : Cb > 2500 ? Bb(xb, bb, wb, Mb) : tb(xb, bb, wb, Mb, eb, Cb + 1);
              if (eb >= 0 && Hb > 0 && Hb < wb.length && mb(wb, Mb, xb, Hb, xb, Vb, eb, rb, Rb), wb.reverse(), Mb.reverse(), eb > -1 && Hb > 0) {
                let bb = sb(Yb, Rb);
                Db = Zb(Yb, wb, Mb, 0, wb.length, 0, jb - xb, bb, bb)
              } else Db = hb(Yb, wb, Mb, jb - xb, rb - jb, Rb)
            }
            Mb.push(Db), eb.push(fb)
          }

          function Bb(bb, wb, Mb, eb) {
            let Vb = [],
              gb = 0,
              lb = -1;
            for (; Lb.pos > wb;) {
              let {
                id: bb,
                start: wb,
                end: Mb,
                size: eb
              } = Lb;
              if (eb > 4) Lb.next();
              else {
                if (lb > -1 && wb < lb) break;
                lb < 0 && (lb = Mb - pb), Vb.push(bb, wb, Mb), gb++, Lb.next()
              }
            }
            if (gb) {
              let wb = new Uint16Array(4 * gb),
                pb = Vb[Vb.length - 2];
              for (let bb = Vb.length - 3, Mb = 0; bb >= 0; bb -= 3) wb[Mb++] = Vb[bb], wb[Mb++] = Vb[bb + 1] - pb, wb[Mb++] = Vb[bb + 2] - pb, wb[Mb++] = Mb;
              Mb.push(new Fb(wb, Vb[2] - pb, Hb)), eb.push(pb - bb)
            }
          }

          function sb(bb, wb) {
            return (Mb, eb, Hb) => {
              let pb, gb, lb = 0,
                Lb = Mb.length - 1;
              if (Lb >= 0 && (pb = Mb[Lb]) instanceof Cb) {
                if (!Lb && pb.type == bb && pb.length == Hb) return pb;
                (gb = pb.prop(Vb.lookAhead)) && (lb = eb[Lb] + pb.length + gb)
              }
              return hb(bb, Mb, eb, Hb, lb, wb)
            }
          }

          function mb(bb, wb, Mb, eb, pb, Vb, gb, lb, Lb) {
            let Ib = [],
              Ob = [];
            for (; bb.length > eb;) Ib.push(bb.pop()), Ob.push(wb.pop() + Mb - pb);
            bb.push(hb(Hb.types[gb], Ib, Ob, Vb - pb, lb - Vb, Lb)), wb.push(pb - Mb)
          }

          function hb(bb, wb, Mb, eb, Hb, pb, gb) {
            if (pb) {
              let bb = [Vb.contextHash, pb];
              gb = gb ? [bb].concat(gb) : [bb]
            }
            if (Hb > 25) {
              let bb = [Vb.lookAhead, Hb];
              gb = gb ? [bb].concat(gb) : [bb]
            }
            return new Cb(bb, wb, Mb, eb, gb)
          }

          function zb(bb, wb) {
            let Mb = Lb.fork(),
              eb = 0,
              Hb = 0,
              Vb = 0,
              gb = Mb.end - pb,
              Ib = {
                size: 0,
                start: 0,
                skip: 0
              };
            bb: for (let pb = Mb.pos - bb; Mb.pos > pb;) {
              let bb = Mb.size;
              if (Mb.id == wb && bb >= 0) {
                Ib.size = eb, Ib.start = Hb, Ib.skip = Vb, Vb += 4, eb += 4, Mb.next();
                continue
              }
              let Lb = Mb.pos - bb;
              if (bb < 0 || Lb < pb || Mb.start < gb) break;
              let Ob = Mb.id >= lb ? 4 : 0,
                Ub = Mb.start;
              for (Mb.next(); Mb.pos > Lb;) {
                if (Mb.size < 0) {
                  if (-3 != Mb.size && -4 != Mb.size) break bb;
                  Ob += 4
                } else Mb.id >= lb && (Ob += 4);
                Mb.next()
              }
              Hb = Ub, eb += bb, Vb += Ob
            }
            return (wb < 0 || eb == bb) && (Ib.size = eb, Ib.start = Hb, Ib.skip = Vb), Ib.size > 4 ? Ib : void 0
          }

          function Xb(bb, wb, Mb) {
            let {
              id: eb,
              start: Hb,
              end: pb,
              size: Vb
            } = Lb;
            if (Lb.next(), Vb >= 0 && eb < lb) {
              let gb = Mb;
              if (Vb > 4) {
                let eb = Lb.pos - (Vb - 4);
                for (; Lb.pos > eb;) Mb = Xb(bb, wb, Mb)
              }
              wb[--Mb] = gb, wb[--Mb] = pb - bb, wb[--Mb] = Hb - bb, wb[--Mb] = eb
            } else - 3 == Vb ? Ob = eb : -4 == Vb && (Ub = eb);
            return Mb
          }
          let xb = [],
            jb = [];
          for (; Lb.pos > 0;) tb(bb.start || 0, bb.bufferStart || 0, xb, jb, -1, 0);
          let Kb = null !== (wb = bb.length) && void 0 !== wb ? wb : xb.length ? jb[0] + xb[0].length : 0;
          return new Cb(Ib[bb.topID], xb.reverse(), jb.reverse(), Kb)
        }(bb)
      }
    }
    Cb.empty = new Cb(Lb.none, [], [], 0);
    class Eb {
      constructor(bb, wb) {
        this.buffer = bb, this.index = wb
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
        return new Eb(this.buffer, this.index)
      }
    }
    class Fb {
      constructor(bb, wb, Mb) {
        this.buffer = bb, this.length = wb, this.set = Mb
      }
      get type() {
        return Lb.none
      }
      toString() {
        let bb = [];
        for (let wb = 0; wb < this.buffer.length;) bb.push(this.childString(wb)), wb = this.buffer[wb + 3];
        return bb.join(",")
      }
      childString(bb) {
        let wb = this.buffer[bb],
          Mb = this.buffer[bb + 3],
          eb = this.set.types[wb],
          Hb = eb.name;
        if (/\W/.test(Hb) && !eb.isError && (Hb = JSON.stringify(Hb)), Mb == (bb += 4)) return Hb;
        let pb = [];
        for (; bb < Mb;) pb.push(this.childString(bb)), bb = this.buffer[bb + 3];
        return Hb + "(" + pb.join(",") + ")"
      }
      findChild(bb, wb, Mb, eb, Hb) {
        let {
          buffer: pb
        } = this, Vb = -1;
        for (let gb = bb; gb != wb && !(Bb(Hb, eb, pb[gb + 1], pb[gb + 2]) && (Vb = gb, Mb > 0)); gb = pb[gb + 3]);
        return Vb
      }
      slice(bb, wb, Mb) {
        let eb = this.buffer,
          Hb = new Uint16Array(wb - bb),
          pb = 0;
        for (let Vb = bb, gb = 0; Vb < wb;) {
          Hb[gb++] = eb[Vb++], Hb[gb++] = eb[Vb++] - Mb;
          let wb = Hb[gb++] = eb[Vb++] - Mb;
          Hb[gb++] = eb[Vb++] - bb, pb = Math.max(pb, wb)
        }
        return new Fb(Hb, pb, this.set)
      }
    }

    function Bb(bb, wb, Mb, eb) {
      switch (bb) {
        case -2:
          return Mb < wb;
        case -1:
          return eb >= wb && Mb < wb;
        case 0:
          return Mb < wb && eb > wb;
        case 1:
          return Mb <= wb && eb > wb;
        case 2:
          return eb > wb;
        case 4:
          return !0
      }
    }

    function sb(bb, wb, Mb, eb) {
      for (var Hb; bb.from == bb.to || (Mb < 1 ? bb.from >= wb : bb.from > wb) || (Mb > -1 ? bb.to <= wb : bb.to < wb);) {
        let wb = !eb && bb instanceof hb && bb.index < 0 ? null : bb.parent;
        if (!wb) return bb;
        bb = wb
      }
      let pb = eb ? 0 : tb.IgnoreOverlays;
      if (eb)
        for (let Vb = bb, gb = Vb.parent; gb; Vb = gb, gb = Vb.parent) Vb instanceof hb && Vb.index < 0 && (null === (Hb = gb.enter(wb, Mb, pb)) || void 0 === Hb ? void 0 : Hb.from) != Vb.from && (bb = gb);
      for (;;) {
        let eb = bb.enter(wb, Mb, pb);
        if (!eb) return bb;
        bb = eb
      }
    }
    class mb {
      cursor() {
        return new Rb(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(bb) {
        let wb = zb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return wb.length ? wb[0] : null
      }
      getChildren(bb) {
        return zb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(bb) {
        return sb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(bb) {
        return sb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(bb) {
        return Xb(this.parent, bb)
      }
      enterUnfinishedNodesBefore(bb) {
        let wb = this.childBefore(bb),
          Mb = this;
        for (; wb;) {
          let bb = wb.lastChild;
          if (!bb || bb.to != wb.to) break;
          bb.type.isError && bb.from == bb.to ? (Mb = wb, wb = bb.prevSibling) : wb = bb
        }
        return Mb
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class hb extends mb {
      constructor(bb, wb, Mb, eb) {
        super(), this._tree = bb, this.from = wb, this.index = Mb, this._parent = eb
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
      nextChild(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let pb = this;;) {
          for (let {
              children: Vb,
              positions: lb
            } = pb._tree, Lb = wb > 0 ? Vb.length : -1; bb != Lb; bb += wb) {
            let Lb, Ib = Vb[bb],
              Ob = lb[bb] + pb.from;
            if (Hb & tb.EnterBracketed && Ib instanceof Cb && (Lb = gb.get(Ib)) && !Lb.overlay && Lb.bracketed && Mb >= Ob && Mb <= Ob + Ib.length || Bb(eb, Mb, Ob, Ob + Ib.length))
              if (Ib instanceof Fb) {
                if (Hb & tb.ExcludeBuffers) continue;
                let Vb = Ib.findChild(0, Ib.buffer.length, wb, Mb - Ob, eb);
                if (Vb > -1) return new jb(new xb(pb, Ib, bb, Ob), null, Vb)
              } else if (Hb & tb.IncludeAnonymous || !Ib.type.isAnonymous || Db(Ib)) {
              let Vb;
              if (!(Hb & tb.IgnoreMounts) && (Vb = gb.get(Ib)) && !Vb.overlay) return new hb(Vb.tree, Ob, bb, pb);
              let lb = new hb(Ib, Ob, bb, pb);
              return Hb & tb.IncludeAnonymous || !lb.type.isAnonymous ? lb : lb.nextChild(wb < 0 ? Ib.children.length - 1 : 0, wb, Mb, eb, Hb)
            }
          }
          if (Hb & tb.IncludeAnonymous || !pb.type.isAnonymous) return null;
          if (bb = pb.index >= 0 ? pb.index + wb : wb < 0 ? -1 : pb._parent._tree.children.length, pb = pb._parent, !pb) return null
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
      enter(bb, wb) {
        let Mb, eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(eb & tb.IgnoreOverlays) && (Mb = gb.get(this._tree)) && Mb.overlay) {
          let Hb = bb - this.from,
            pb = eb & tb.EnterBracketed && Mb.bracketed;
          for (let {
              from: bb,
              to: eb
            }
            of Mb.overlay)
            if ((wb > 0 || pb ? bb <= Hb : bb < Hb) && (wb < 0 || pb ? eb >= Hb : eb > Hb)) return new hb(Mb.tree, Mb.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, bb, wb, eb)
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

    function zb(bb, wb, Mb, eb) {
      let Hb = bb.cursor(),
        pb = [];
      if (!Hb.firstChild()) return pb;
      if (null != Mb)
        for (let Vb = !1; !Vb;)
          if (Vb = Hb.type.is(Mb), !Hb.nextSibling()) return pb;
      for (;;) {
        if (null != eb && Hb.type.is(eb)) return pb;
        if (Hb.type.is(wb) && pb.push(Hb.node), !Hb.nextSibling()) return null == eb ? pb : []
      }
    }

    function Xb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wb.length - 1;
      for (let eb = bb; Mb >= 0; eb = eb.parent) {
        if (!eb) return !1;
        if (!eb.type.isAnonymous) {
          if (wb[Mb] && wb[Mb] != eb.name) return !1;
          Mb--
        }
      }
      return !0
    }
    class xb {
      constructor(bb, wb, Mb, eb) {
        this.parent = bb, this.buffer = wb, this.index = Mb, this.start = eb
      }
    }
    class jb extends mb {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(bb, wb, Mb) {
        super(), this.context = bb, this._parent = wb, this.index = Mb, this.type = bb.buffer.set.types[bb.buffer.buffer[Mb]]
      }
      child(bb, wb, Mb) {
        let {
          buffer: eb
        } = this.context, Hb = eb.findChild(this.index + 4, eb.buffer[this.index + 3], bb, wb - this.context.start, Mb);
        return Hb < 0 ? null : new jb(this.context, this, Hb)
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
      enter(bb, wb) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & tb.ExcludeBuffers) return null;
        let {
          buffer: Mb
        } = this.context, eb = Mb.findChild(this.index + 4, Mb.buffer[this.index + 3], wb > 0 ? 1 : -1, bb - this.context.start, wb);
        return eb < 0 ? null : new jb(this.context, this, eb)
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
        } = this.context, wb = bb.buffer[this.index + 3];
        return wb < (this._parent ? bb.buffer[this._parent.index + 3] : bb.buffer.length) ? new jb(this.context, this._parent, wb) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: bb
        } = this.context, wb = this._parent ? this._parent.index + 4 : 0;
        return this.index == wb ? this.externalSibling(-1) : new jb(this.context, this._parent, bb.findChild(wb, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let bb = [],
          wb = [],
          {
            buffer: Mb
          } = this.context,
          eb = this.index + 4,
          Hb = Mb.buffer[this.index + 3];
        if (Hb > eb) {
          let pb = Mb.buffer[this.index + 1];
          bb.push(Mb.slice(eb, Hb, pb)), wb.push(0)
        }
        return new Cb(this.type, bb, wb, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function Kb(bb) {
      if (!bb.length) return null;
      let wb = 0,
        Mb = bb[0];
      for (let pb = 1; pb < bb.length; pb++) {
        let eb = bb[pb];
        (eb.from > Mb.from || eb.to < Mb.to) && (Mb = eb, wb = pb)
      }
      let eb = Mb instanceof hb && Mb.index < 0 ? null : Mb.parent,
        Hb = bb.slice();
      return eb ? Hb[wb] = eb : Hb.splice(wb, 1), new rb(Hb, Mb)
    }
    class rb {
      constructor(bb, wb) {
        this.heads = bb, this.node = wb
      }
      get next() {
        return Kb(this.heads)
      }
    }
    class Rb {
      get name() {
        return this.type.name
      }
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = wb & ~tb.EnterBracketed, bb instanceof hb) this.yieldNode(bb);
        else {
          this._tree = bb.context.parent, this.buffer = bb.context;
          for (let wb = bb._parent; wb; wb = wb._parent) this.stack.unshift(wb.index);
          this.bufferNode = bb, this.yieldBuf(bb.index)
        }
      }
      yieldNode(bb) {
        return !!bb && (this._tree = bb, this.type = bb.type, this.from = bb.from, this.to = bb.to, !0)
      }
      yieldBuf(bb, wb) {
        this.index = bb;
        let {
          start: Mb,
          buffer: eb
        } = this.buffer;
        return this.type = wb || eb.set.types[eb.buffer[bb]], this.from = Mb + eb.buffer[bb + 1], this.to = Mb + eb.buffer[bb + 2], !0
      }
      yield(bb) {
        return !!bb && (bb instanceof hb ? (this.buffer = null, this.yieldNode(bb)) : (this.buffer = bb.context, this.yieldBuf(bb.index, bb.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(bb, wb, Mb) {
        if (!this.buffer) return this.yield(this._tree.nextChild(bb < 0 ? this._tree._tree.children.length - 1 : 0, bb, wb, Mb, this.mode));
        let {
          buffer: eb
        } = this.buffer, Hb = eb.findChild(this.index + 4, eb.buffer[this.index + 3], bb, wb - this.buffer.start, Mb);
        return !(Hb < 0) && (this.stack.push(this.index), this.yieldBuf(Hb))
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
      enter(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(Mb & tb.ExcludeBuffers) && this.enterChild(1, bb, wb) : this.yield(this._tree.enter(bb, wb, Mb))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & tb.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let bb = this.mode & tb.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(bb)
      }
      sibling(bb) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + bb, bb, 0, 4, this.mode));
        let {
          buffer: wb
        } = this.buffer, Mb = this.stack.length - 1;
        if (bb < 0) {
          let bb = Mb < 0 ? 0 : this.stack[Mb] + 4;
          if (this.index != bb) return this.yieldBuf(wb.findChild(bb, this.index, -1, 0, 4))
        } else {
          let bb = wb.buffer[this.index + 3];
          if (bb < (Mb < 0 ? wb.buffer.length : wb.buffer[this.stack[Mb] + 3])) return this.yieldBuf(bb)
        }
        return Mb < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + bb, bb, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(bb) {
        let wb, Mb, {
          buffer: eb
        } = this;
        if (eb) {
          if (bb > 0) {
            if (this.index < eb.buffer.buffer.length) return !1
          } else
            for (let bb = 0; bb < this.index; bb++)
              if (eb.buffer.buffer[bb + 3] < this.index) return !1;
          ({
            index: wb,
            parent: Mb
          } = eb)
        } else({
          index: wb,
          _parent: Mb
        } = this._tree);
        for (; Mb;
          ({
            index: wb,
            _parent: Mb
          } = Mb))
          if (wb > -1)
            for (let eb = wb + bb, Hb = bb < 0 ? -1 : Mb._tree.children.length; eb != Hb; eb += bb) {
              let bb = Mb._tree.children[eb];
              if (this.mode & tb.IncludeAnonymous || bb instanceof Fb || !bb.type.isAnonymous || Db(bb)) return !1
            }
        return !0
      }
      move(bb, wb) {
        if (wb && this.enterChild(bb, 0, 4)) return !0;
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
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (wb < 1 ? this.from >= bb : this.from > bb) || (wb > -1 ? this.to <= bb : this.to < bb)) && this.parent(););
        for (; this.enterChild(1, bb, wb););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let bb = this.bufferNode,
          wb = null,
          Mb = 0;
        if (bb && bb.context == this.buffer) bb: for (let eb = this.index, Hb = this.stack.length; Hb >= 0;) {
          for (let pb = bb; pb; pb = pb._parent)
            if (pb.index == eb) {
              if (eb == this.index) return pb;
              wb = pb, Mb = Hb + 1;
              break bb
            } eb = this.stack[--Hb]
        }
        for (let eb = Mb; eb < this.stack.length; eb++) wb = new jb(this.buffer, wb, this.stack[eb]);
        return this.bufferNode = new jb(this.buffer, wb, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(bb, wb) {
        for (let Mb = 0;;) {
          let eb = !1;
          if (this.type.isAnonymous || !1 !== bb(this)) {
            if (this.firstChild()) {
              Mb++;
              continue
            }
            this.type.isAnonymous || (eb = !0)
          }
          for (;;) {
            if (eb && wb && wb(this), eb = this.type.isAnonymous, !Mb) return;
            if (this.nextSibling()) break;
            this.parent(), Mb--, eb = !0
          }
        }
      }
      matchContext(bb) {
        if (!this.buffer) return Xb(this.node.parent, bb);
        let {
          buffer: wb
        } = this.buffer, {
          types: Mb
        } = wb.set;
        for (let eb = bb.length - 1, Hb = this.stack.length - 1; eb >= 0; Hb--) {
          if (Hb < 0) return Xb(this._tree, bb, eb);
          let pb = Mb[wb.buffer[this.stack[Hb]]];
          if (!pb.isAnonymous) {
            if (bb[eb] && bb[eb] != pb.name) return !1;
            eb--
          }
        }
        return !0
      }
    }

    function Db(bb) {
      return bb.children.some((bb => bb instanceof Fb || !bb.type.isAnonymous || Db(bb)))
    }
    const cb = new WeakMap;

    function Yb(bb, wb) {
      if (!bb.isAnonymous || wb instanceof Fb || wb.type != bb) return 1;
      let Mb = cb.get(wb);
      if (null == Mb) {
        Mb = 1;
        for (let eb of wb.children) {
          if (eb.type != bb || !(eb instanceof Cb)) {
            Mb = 1;
            break
          }
          Mb += Yb(bb, eb)
        }
        cb.set(wb, Mb)
      }
      return Mb
    }

    function Zb(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
      let Lb = 0;
      for (let tb = eb; tb < Hb; tb++) Lb += Yb(bb, wb[tb]);
      let Ib = Math.ceil(1.5 * Lb / 8),
        Ob = [],
        Ub = [];
      return function wb(Mb, eb, Hb, Vb, gb) {
        for (let Lb = Hb; Lb < Vb;) {
          let Hb = Lb,
            tb = eb[Lb],
            Cb = Yb(bb, Mb[Lb]);
          for (Lb++; Lb < Vb; Lb++) {
            let wb = Yb(bb, Mb[Lb]);
            if (Cb + wb >= Ib) break;
            Cb += wb
          }
          if (Lb == Hb + 1) {
            if (Cb > Ib) {
              let bb = Mb[Hb];
              wb(bb.children, bb.positions, 0, bb.children.length, eb[Hb] + gb);
              continue
            }
            Ob.push(Mb[Hb])
          } else {
            let wb = eb[Lb - 1] + Mb[Lb - 1].length - tb;
            Ob.push(Zb(bb, Mb, eb, Hb, Lb, tb, wb, null, lb))
          }
          Ub.push(tb + gb - pb)
        }
      }(wb, Mb, eb, Hb, 0), (gb || lb)(Ob, Ub, Vb)
    }
    class fb {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(bb, wb, Mb) {
        let eb = this.map.get(bb);
        eb || this.map.set(bb, eb = new Map), eb.set(wb, Mb)
      }
      getBuffer(bb, wb) {
        let Mb = this.map.get(bb);
        return Mb && Mb.get(wb)
      }
      set(bb, wb) {
        bb instanceof jb ? this.setBuffer(bb.context.buffer, bb.index, wb) : bb instanceof hb && this.map.set(bb.tree, wb)
      }
      get(bb) {
        return bb instanceof jb ? this.getBuffer(bb.context.buffer, bb.index) : bb instanceof hb ? this.map.get(bb.tree) : void 0
      }
      cursorSet(bb, wb) {
        bb.buffer ? this.setBuffer(bb.buffer.buffer, bb.index, wb) : this.map.set(bb.tree, wb)
      }
      cursorGet(bb) {
        return bb.buffer ? this.getBuffer(bb.buffer.buffer, bb.index) : this.map.get(bb.tree)
      }
    }
    class Ab {
      constructor(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = bb, this.to = wb, this.tree = Mb, this.offset = eb, this.open = (Hb ? 1 : 0) | (pb ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = [new Ab(0, bb.length, bb, 0, !1, Mb)];
        for (let Hb of wb) Hb.to > bb.length && eb.push(Hb);
        return eb
      }
      static applyChanges(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!wb.length) return bb;
        let eb = [],
          Hb = 1,
          pb = bb.length ? bb[0] : null;
        for (let Vb = 0, gb = 0, lb = 0;; Vb++) {
          let Lb = Vb < wb.length ? wb[Vb] : null,
            Ib = Lb ? Lb.fromA : 1e9;
          if (Ib - gb >= Mb)
            for (; pb && pb.from < Ib;) {
              let wb = pb;
              if (gb >= wb.from || Ib <= wb.to || lb) {
                let bb = Math.max(wb.from, gb) - lb,
                  Mb = Math.min(wb.to, Ib) - lb;
                wb = bb >= Mb ? null : new Ab(bb, Mb, wb.tree, wb.offset + lb, Vb > 0, !!Lb)
              }
              if (wb && eb.push(wb), pb.to > Ib) break;
              pb = Hb < bb.length ? bb[Hb++] : null
            }
          if (!Lb) break;
          gb = Lb.toA, lb = Lb.toA - Lb.toB
        }
        return eb
      }
    }
    class Wb {
      startParse(bb, wb, Mb) {
        return "string" == typeof bb && (bb = new Jb(bb)), Mb = Mb ? Mb.length ? Mb.map((bb => new pb(bb.from, bb.to))) : [new pb(0, 0)] : [new pb(0, bb.length)], this.createParse(bb, wb || [], Mb)
      }
      parse(bb, wb, Mb) {
        let eb = this.startParse(bb, wb, Mb);
        for (;;) {
          let bb = eb.advance();
          if (bb) return bb
        }
      }
    }
    class Jb {
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
      read(bb, wb) {
        return this.string.slice(bb, wb)
      }
    }
    new Vb({
      perNode: !0
    })
  },
  53539: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ub,
      h: () => lb,
      k: () => Ob,
      l: () => cb
    });
    var eb = Mb(53533);
    let Hb = 0;
    class pb {
      constructor(bb, wb, Mb, eb) {
        this.name = bb, this.set = wb, this.base = Mb, this.modified = eb, this.id = Hb++
      }
      toString() {
        let {
          name: bb
        } = this;
        for (let wb of this.modified) wb.name && (bb = `${wb.name}(${bb})`);
        return bb
      }
      static define(bb, wb) {
        let Mb = "string" == typeof bb ? bb : "?";
        if (bb instanceof pb && (wb = bb), null === wb || void 0 === wb ? void 0 : wb.base) throw new Error("Can not derive from a modified tag");
        let eb = new pb(Mb, [], null, []);
        if (eb.set.push(eb), wb)
          for (let Hb of wb.set) eb.set.push(Hb);
        return eb
      }
      static defineModifier(bb) {
        let wb = new gb(bb);
        return bb => bb.modified.indexOf(wb) > -1 ? bb : gb.get(bb.base || bb, bb.modified.concat(wb).sort(((bb, wb) => bb.id - wb.id)))
      }
    }
    let Vb = 0;
    class gb {
      constructor(bb) {
        this.name = bb, this.instances = [], this.id = Vb++
      }
      static get(bb, wb) {
        if (!wb.length) return bb;
        let Mb = wb[0].instances.find((Mb => {
          return Mb.base == bb && (eb = wb, Hb = Mb.modified, eb.length == Hb.length && eb.every(((bb, wb) => bb == Hb[wb])));
          var eb, Hb
        }));
        if (Mb) return Mb;
        let eb = [],
          Hb = new pb(bb.name, eb, bb, wb);
        for (let pb of wb) pb.instances.push(Hb);
        let Vb = function(bb) {
          let wb = [
            []
          ];
          for (let Mb = 0; Mb < bb.length; Mb++)
            for (let eb = 0, Hb = wb.length; eb < Hb; eb++) wb.push(wb[eb].concat(bb[Mb]));
          return wb.sort(((bb, wb) => wb.length - bb.length))
        }(wb);
        for (let pb of bb.set)
          if (!pb.modified.length)
            for (let bb of Vb) eb.push(gb.get(pb, bb));
        return Hb
      }
    }

    function lb(bb) {
      let wb = Object.create(null);
      for (let Mb in bb) {
        let eb = bb[Mb];
        Array.isArray(eb) || (eb = [eb]);
        for (let bb of Mb.split(" "))
          if (bb) {
            let Mb = [],
              Hb = 2,
              pb = bb;
            for (let wb = 0;;) {
              if ("..." == pb && wb > 0 && wb + 3 == bb.length) {
                Hb = 1;
                break
              }
              let eb = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(pb);
              if (!eb) throw new RangeError("Invalid path: " + bb);
              if (Mb.push("*" == eb[0] ? "" : '"' == eb[0][0] ? JSON.parse(eb[0]) : eb[0]), wb += eb[0].length, wb == bb.length) break;
              let Vb = bb[wb++];
              if (wb == bb.length && "!" == Vb) {
                Hb = 0;
                break
              }
              if ("/" != Vb) throw new RangeError("Invalid path: " + bb);
              pb = bb.slice(wb)
            }
            let Vb = Mb.length - 1,
              gb = Mb[Vb];
            if (!gb) throw new RangeError("Invalid path: " + bb);
            let lb = new Ib(eb, Hb, Vb > 0 ? Mb.slice(0, Vb) : null);
            wb[gb] = lb.sort(wb[gb])
          }
      }
      return Lb.add(wb)
    }
    const Lb = new eb.d({
      combine(bb, wb) {
        let Mb, eb, Hb;
        for (; bb || wb;) {
          if (!bb || wb && bb.depth >= wb.depth ? (Hb = wb, wb = wb.next) : (Hb = bb, bb = bb.next), Mb && Mb.mode == Hb.mode && !Hb.context && !Mb.context) continue;
          let pb = new Ib(Hb.tags, Hb.mode, Hb.context);
          Mb ? Mb.next = pb : eb = pb, Mb = pb
        }
        return eb
      }
    });
    class Ib {
      constructor(bb, wb, Mb, eb) {
        this.tags = bb, this.mode = wb, this.context = Mb, this.next = eb
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

    function Ob(bb, wb) {
      let Mb = Object.create(null);
      for (let pb of bb)
        if (Array.isArray(pb.tag))
          for (let bb of pb.tag) Mb[bb.id] = pb.class;
        else Mb[pb.tag.id] = pb.class;
      let {
        scope: eb,
        all: Hb = null
      } = wb || {};
      return {
        style: bb => {
          let wb = Hb;
          for (let eb of bb)
            for (let bb of eb.set) {
              let eb = Mb[bb.id];
              if (eb) {
                wb = wb ? wb + " " + eb : eb;
                break
              }
            }
          return wb
        },
        scope: eb
      }
    }

    function Ub(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.length,
        pb = new tb(eb, Array.isArray(wb) ? wb : [wb], Mb);
      pb.highlightRange(bb.cursor(), eb, Hb, "", pb.highlighters), pb.flush(Hb)
    }
    Ib.empty = new Ib([], 2, null);
    class tb {
      constructor(bb, wb, Mb) {
        this.at = bb, this.highlighters = wb, this.span = Mb, this.class = ""
      }
      startSpan(bb, wb) {
        wb != this.class && (this.flush(bb), bb > this.at && (this.at = bb), this.class = wb)
      }
      flush(bb) {
        bb > this.at && this.class && this.span(this.at, bb, this.class)
      }
      highlightRange(bb, wb, Mb, Hb, pb) {
        let {
          type: Vb,
          from: gb,
          to: lb
        } = bb;
        if (gb >= Mb || lb <= wb) return;
        Vb.isTop && (pb = this.highlighters.filter((bb => !bb.scope || bb.scope(Vb))));
        let Ob = Hb,
          Ub = function(bb) {
            let wb = bb.type.prop(Lb);
            for (; wb && wb.context && !bb.matchContext(wb.context);) wb = wb.next;
            return wb || null
          }(bb) || Ib.empty,
          tb = function(bb, wb) {
            let Mb = null;
            for (let eb of bb) {
              let bb = eb.style(wb);
              bb && (Mb = Mb ? Mb + " " + bb : bb)
            }
            return Mb
          }(pb, Ub.tags);
        if (tb && (Ob && (Ob += " "), Ob += tb, 1 == Ub.mode && (Hb += (Hb ? " " : "") + tb)), this.startSpan(Math.max(wb, gb), Ob), Ub.opaque) return;
        let Cb = bb.tree && bb.tree.prop(eb.d.mounted);
        if (Cb && Cb.overlay) {
          let eb = bb.node.enter(Cb.overlay[0].from + gb, 1),
            Vb = this.highlighters.filter((bb => !bb.scope || bb.scope(Cb.tree.type))),
            Lb = bb.firstChild();
          for (let Ib = 0, Ub = gb;; Ib++) {
            let tb = Ib < Cb.overlay.length ? Cb.overlay[Ib] : null,
              Eb = tb ? tb.from + gb : lb,
              Fb = Math.max(wb, Ub),
              Bb = Math.min(Mb, Eb);
            if (Fb < Bb && Lb)
              for (; bb.from < Bb && (this.highlightRange(bb, Fb, Bb, Hb, pb), this.startSpan(Math.min(Bb, bb.to), Ob), !(bb.to >= Eb) && bb.nextSibling()););
            if (!tb || Eb > Mb) break;
            Ub = tb.to + gb, Ub > wb && (this.highlightRange(eb.cursor(), Math.max(wb, tb.from + gb), Math.min(Mb, Ub), "", Vb), this.startSpan(Math.min(Mb, Ub), Ob))
          }
          Lb && bb.parent()
        } else if (bb.firstChild()) {
          Cb && (Hb = "");
          do {
            if (!(bb.to <= wb)) {
              if (bb.from >= Mb) break;
              this.highlightRange(bb, wb, Mb, Hb, pb), this.startSpan(Math.min(Mb, bb.to), Ob)
            }
          } while (bb.nextSibling());
          bb.parent()
        }
      }
    }
    const Cb = pb.define,
      Eb = Cb(),
      Fb = Cb(),
      Bb = Cb(Fb),
      sb = Cb(Fb),
      mb = Cb(),
      hb = Cb(mb),
      zb = Cb(mb),
      Xb = Cb(),
      xb = Cb(Xb),
      jb = Cb(),
      Kb = Cb(),
      rb = Cb(),
      Rb = Cb(rb),
      Db = Cb(),
      cb = {
        comment: Eb,
        lineComment: Cb(Eb),
        blockComment: Cb(Eb),
        docComment: Cb(Eb),
        name: Fb,
        variableName: Cb(Fb),
        typeName: Bb,
        tagName: Cb(Bb),
        propertyName: sb,
        attributeName: Cb(sb),
        className: Cb(Fb),
        labelName: Cb(Fb),
        namespace: Cb(Fb),
        macroName: Cb(Fb),
        literal: mb,
        string: hb,
        docString: Cb(hb),
        character: Cb(hb),
        attributeValue: Cb(hb),
        number: zb,
        integer: Cb(zb),
        float: Cb(zb),
        bool: Cb(mb),
        regexp: Cb(mb),
        escape: Cb(mb),
        color: Cb(mb),
        url: Cb(mb),
        keyword: jb,
        self: Cb(jb),
        null: Cb(jb),
        atom: Cb(jb),
        unit: Cb(jb),
        modifier: Cb(jb),
        operatorKeyword: Cb(jb),
        controlKeyword: Cb(jb),
        definitionKeyword: Cb(jb),
        moduleKeyword: Cb(jb),
        operator: Kb,
        derefOperator: Cb(Kb),
        arithmeticOperator: Cb(Kb),
        logicOperator: Cb(Kb),
        bitwiseOperator: Cb(Kb),
        compareOperator: Cb(Kb),
        updateOperator: Cb(Kb),
        definitionOperator: Cb(Kb),
        typeOperator: Cb(Kb),
        controlOperator: Cb(Kb),
        punctuation: rb,
        separator: Cb(rb),
        bracket: Rb,
        angleBracket: Cb(Rb),
        squareBracket: Cb(Rb),
        paren: Cb(Rb),
        brace: Cb(Rb),
        content: Xb,
        heading: xb,
        heading1: Cb(xb),
        heading2: Cb(xb),
        heading3: Cb(xb),
        heading4: Cb(xb),
        heading5: Cb(xb),
        heading6: Cb(xb),
        contentSeparator: Cb(Xb),
        list: Cb(Xb),
        quote: Cb(Xb),
        emphasis: Cb(Xb),
        strong: Cb(Xb),
        link: Cb(Xb),
        monospace: Cb(Xb),
        strikethrough: Cb(Xb),
        inserted: Cb(),
        deleted: Cb(),
        changed: Cb(),
        invalid: Cb(),
        meta: Db,
        documentMeta: Cb(Db),
        annotation: Cb(Db),
        processingInstruction: Cb(Db),
        definition: pb.defineModifier("definition"),
        constant: pb.defineModifier("constant"),
        function: pb.defineModifier("function"),
        standard: pb.defineModifier("standard"),
        local: pb.defineModifier("local"),
        special: pb.defineModifier("special")
      };
    for (let Yb in cb) {
      let bb = cb[Yb];
      bb instanceof pb && (bb.name = Yb)
    }
    Ob([{
      tag: cb.link,
      class: "tok-link"
    }, {
      tag: cb.heading,
      class: "tok-heading"
    }, {
      tag: cb.emphasis,
      class: "tok-emphasis"
    }, {
      tag: cb.strong,
      class: "tok-strong"
    }, {
      tag: cb.keyword,
      class: "tok-keyword"
    }, {
      tag: cb.atom,
      class: "tok-atom"
    }, {
      tag: cb.bool,
      class: "tok-bool"
    }, {
      tag: cb.url,
      class: "tok-url"
    }, {
      tag: cb.labelName,
      class: "tok-labelName"
    }, {
      tag: cb.inserted,
      class: "tok-inserted"
    }, {
      tag: cb.deleted,
      class: "tok-deleted"
    }, {
      tag: cb.literal,
      class: "tok-literal"
    }, {
      tag: cb.string,
      class: "tok-string"
    }, {
      tag: cb.number,
      class: "tok-number"
    }, {
      tag: [cb.regexp, cb.escape, cb.special(cb.string)],
      class: "tok-string2"
    }, {
      tag: cb.variableName,
      class: "tok-variableName"
    }, {
      tag: cb.local(cb.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: cb.definition(cb.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: cb.special(cb.variableName),
      class: "tok-variableName2"
    }, {
      tag: cb.definition(cb.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: cb.typeName,
      class: "tok-typeName"
    }, {
      tag: cb.namespace,
      class: "tok-namespace"
    }, {
      tag: cb.className,
      class: "tok-className"
    }, {
      tag: cb.macroName,
      class: "tok-macroName"
    }, {
      tag: cb.propertyName,
      class: "tok-propertyName"
    }, {
      tag: cb.operator,
      class: "tok-operator"
    }, {
      tag: cb.comment,
      class: "tok-comment"
    }, {
      tag: cb.meta,
      class: "tok-meta"
    }, {
      tag: cb.invalid,
      class: "tok-invalid"
    }, {
      tag: cb.punctuation,
      class: "tok-punctuation"
    }])
  },
  53552: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb.g,
      c: () => Vb.v,
      d: () => Vb.E,
      f: () => Vb.G,
      j: () => gb.n,
      l: () => jM,
      n: () => gb.T,
      p: () => gb.mb
    });
    var eb = Mb(1536),
      Hb = Mb(1531),
      pb = Mb(64),
      Vb = Mb(53501),
      gb = Mb(53510),
      lb = Mb(53528),
      Lb = Mb(53533);

    function Ib(bb, wb) {
      return Mb => {
        let {
          state: eb,
          dispatch: Hb
        } = Mb;
        if (eb.readOnly) return !1;
        let pb = bb(wb, eb);
        return !!pb && (Hb(eb.update(pb)), !0)
      }
    }
    const Ob = Ib(Bb, 0),
      Ub = Ib(Fb, 0),
      tb = Ib(((bb, wb) => Fb(bb, wb, function(bb) {
        let wb = [];
        for (let Mb of bb.selection.gF) {
          let eb = bb.doc.lineAt(Mb.from),
            Hb = Mb.to <= eb.to ? eb : bb.doc.lineAt(Mb.to);
          Hb.from > eb.from && Hb.from == Mb.to && (Hb = Mb.to == eb.to + 1 ? eb : bb.doc.lineAt(Mb.to - 1));
          let pb = wb.length - 1;
          pb >= 0 && wb[pb].to > eb.from ? wb[pb].to = Hb.to : wb.push({
            from: eb.from + /^\s*/.exec(eb.text)[0].length,
            to: Hb.to
          })
        }
        return wb
      }(wb))), 0);

    function Cb(bb, wb) {
      let Mb = bb.languageDataAt("commentTokens", wb, 1);
      return Mb.length ? Mb[0] : {}
    }
    const Eb = 50;

    function Fb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wb.selection.gF,
        eb = Mb.map((bb => Cb(wb, bb.from).block));
      if (!eb.every((bb => bb))) return null;
      let Hb = Mb.map(((bb, Mb) => function(bb, wb, Mb, eb) {
        let Hb, pb, {
            open: Vb,
            close: gb
          } = wb,
          lb = bb.sliceDoc(Mb - Eb, Mb),
          Lb = bb.sliceDoc(eb, eb + Eb),
          Ib = /\s*$/.exec(lb)[0].length,
          Ob = /^\s*/.exec(Lb)[0].length,
          Ub = lb.length - Ib;
        if (lb.slice(Ub - Vb.length, Ub) == Vb && Lb.slice(Ob, Ob + gb.length) == gb) return {
          open: {
            pos: Mb - Ib,
            margin: Ib && 1
          },
          close: {
            pos: eb + Ob,
            margin: Ob && 1
          }
        };
        eb - Mb <= 2 * Eb ? Hb = pb = bb.sliceDoc(Mb, eb) : (Hb = bb.sliceDoc(Mb, Mb + Eb), pb = bb.sliceDoc(eb - Eb, eb));
        let tb = /^\s*/.exec(Hb)[0].length,
          Cb = /\s*$/.exec(pb)[0].length,
          Fb = pb.length - Cb - gb.length;
        return Hb.slice(tb, tb + Vb.length) == Vb && pb.slice(Fb, Fb + gb.length) == gb ? {
          open: {
            pos: Mb + tb + Vb.length,
            margin: /\s/.test(Hb.charAt(tb + Vb.length)) ? 1 : 0
          },
          close: {
            pos: eb - Cb - gb.length,
            margin: /\s/.test(pb.charAt(Fb - 1)) ? 1 : 0
          }
        } : null
      }(wb, eb[Mb], bb.from, bb.to)));
      if (2 != bb && !Hb.every((bb => bb))) return {
        changes: wb.changes(Mb.map(((bb, wb) => Hb[wb] ? [] : [{
          from: bb.from,
          insert: eb[wb].open + " "
        }, {
          from: bb.to,
          insert: " " + eb[wb].close
        }])))
      };
      if (1 != bb && Hb.some((bb => bb))) {
        let bb = [];
        for (let wb, Mb = 0; Mb < Hb.length; Mb++)
          if (wb = Hb[Mb]) {
            let Hb = eb[Mb],
              {
                open: pb,
                close: Vb
              } = wb;
            bb.push({
              from: pb.pos - Hb.open.length,
              to: pb.pos + pb.margin
            }, {
              from: Vb.pos - Vb.margin,
              to: Vb.pos + Hb.close.length
            })
          } return {
          changes: bb
        }
      }
      return null
    }

    function Bb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wb.selection.gF,
        eb = [],
        Hb = -1;
      bb: for (let {
          from: pb,
          to: Vb
        }
        of Mb) {
        let bb, Mb = eb.length,
          gb = 1e9;
        for (let lb = pb; lb <= Vb;) {
          let Mb = wb.doc.lineAt(lb);
          if (void 0 == bb && (bb = Cb(wb, Mb.from).line, !bb)) continue bb;
          if (Mb.from > Hb && (pb == Vb || Vb > Mb.from)) {
            Hb = Mb.from;
            let wb = /^\s*/.exec(Mb.text)[0].length,
              pb = wb == Mb.length,
              Vb = Mb.text.slice(wb, wb + bb.length) == bb ? wb : -1;
            wb < Mb.text.length && wb < gb && (gb = wb), eb.push({
              line: Mb,
              comment: Vb,
              token: bb,
              indent: wb,
              empty: pb,
              single: !1
            })
          }
          lb = Mb.to + 1
        }
        if (gb < 1e9)
          for (let wb = Mb; wb < eb.length; wb++) eb[wb].indent < eb[wb].line.text.length && (eb[wb].indent = gb);
        eb.length == Mb + 1 && (eb[Mb].single = !0)
      }
      if (2 != bb && eb.some((bb => bb.comment < 0 && (!bb.empty || bb.single)))) {
        let bb = [];
        for (let {
            line: wb,
            token: Hb,
            indent: pb,
            empty: Vb,
            single: gb
          }
          of eb) !gb && Vb || bb.push({
          from: wb.from + pb,
          insert: Hb + " "
        });
        let Mb = wb.changes(bb);
        return {
          changes: Mb,
          selection: wb.selection.map(Mb, 1)
        }
      }
      if (1 != bb && eb.some((bb => bb.comment >= 0))) {
        let bb = [];
        for (let {
            line: wb,
            comment: Mb,
            token: Hb
          }
          of eb)
          if (Mb >= 0) {
            let eb = wb.from + Mb,
              pb = eb + Hb.length;
            " " == wb.text[pb - wb.from] && pb++, bb.push({
              from: eb,
              to: pb
            })
          } return {
          changes: bb
        }
      }
      return null
    }
    const sb = Vb.c.define(),
      mb = Vb.c.define(),
      hb = Vb.o.define(),
      zb = Vb.o.define({
        combine: bb => (0, Vb.P)(bb, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (bb, wb) => wb
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (bb, wb) => (Mb, eb) => bb(Mb, eb) || wb(Mb, eb)
        })
      }),
      Xb = Vb.G.define({
        create: () => vb.empty,
        update(bb, wb) {
          let Mb = wb.state.facet(zb),
            eb = wb.annotation(sb);
          if (eb) {
            let Hb = Db.fromTransaction(wb, eb.selection),
              pb = eb.side,
              Vb = 0 == pb ? bb.undone : bb.done;
            return Vb = Hb ? cb(Vb, Vb.length, Mb.minDepth, Hb) : Ab(Vb, wb.startState.selection), new vb(0 == pb ? eb.rest : Vb, 0 == pb ? Vb : eb.rest)
          }
          let Hb = wb.annotation(mb);
          if ("full" != Hb && "before" != Hb || (bb = bb.isolate()), !1 === wb.annotation(Vb.J.addToHistory)) return wb.changes.empty ? bb : bb.addMapping(wb.changes.desc);
          let pb = Db.fromTransaction(wb),
            gb = wb.annotation(Vb.J.time),
            lb = wb.annotation(Vb.J.userEvent);
          return pb ? bb = bb.addChanges(pb, gb, lb, Mb, wb) : wb.selection && (bb = bb.addSelection(wb.startState.selection, gb, lb, Mb.newGroupDelay)), "full" != Hb && "after" != Hb || (bb = bb.isolate()), bb
        },
        toJSON: bb => ({
          done: bb.done.map((bb => bb.toJSON())),
          undone: bb.undone.map((bb => bb.toJSON()))
        }),
        fromJSON: bb => new vb(bb.done.map(Db.fromJSON), bb.undone.map(Db.fromJSON))
      });

    function xb(bb, wb) {
      return function(Mb) {
        let {
          state: eb,
          dispatch: Hb
        } = Mb;
        if (!wb && eb.readOnly) return !1;
        let pb = eb.field(Xb, !1);
        if (!pb) return !1;
        let Vb = pb.pop(bb, eb, wb);
        return !!Vb && (Hb(Vb), !0)
      }
    }
    const jb = xb(0, !1),
      Kb = xb(1, !1),
      rb = xb(0, !0),
      Rb = xb(1, !0);
    class Db {
      constructor(bb, wb, Mb, eb, Hb) {
        this.changes = bb, this.effects = wb, this.mapped = Mb, this.startSelection = eb, this.selectionsAfter = Hb
      }
      setSelAfter(bb) {
        return new Db(this.changes, this.effects, this.mapped, this.startSelection, bb)
      }
      toJSON() {
        var bb, wb, Mb;
        return {
          changes: null === (bb = this.changes) || void 0 === bb ? void 0 : bb.toJSON(),
          mapped: null === (wb = this.mapped) || void 0 === wb ? void 0 : wb.toJSON(),
          startSelection: null === (Mb = this.startSelection) || void 0 === Mb ? void 0 : Mb.toJSON(),
          selectionsAfter: this.selectionsAfter.map((bb => bb.toJSON()))
        }
      }
      static fromJSON(bb) {
        return new Db(bb.changes && Vb.ChangeSet.fromJSON(bb.changes), [], bb.mapped && Vb.d.fromJSON(bb.mapped), bb.startSelection && Vb.j.fromJSON(bb.startSelection), bb.selectionsAfter.map(Vb.j.fromJSON))
      }
      static fromTransaction(bb, wb) {
        let Mb = Zb;
        for (let eb of bb.startState.facet(hb)) {
          let wb = eb(bb);
          wb.length && (Mb = Mb.concat(wb))
        }
        return !Mb.length && bb.changes.empty ? null : new Db(bb.changes.invert(bb.startState.doc), Mb, void 0, wb || bb.startState.selection, Zb)
      }
      static selection(bb) {
        return new Db(void 0, Zb, void 0, void 0, bb)
      }
    }

    function cb(bb, wb, Mb, eb) {
      let Hb = wb + 1 > Mb + 20 ? wb - Mb - 1 : 0,
        pb = bb.slice(Hb, wb);
      return pb.push(eb), pb
    }

    function Yb(bb, wb) {
      return bb.length ? wb.length ? bb.concat(wb) : bb : wb
    }
    const Zb = [],
      fb = 200;

    function Ab(bb, wb) {
      if (bb.length) {
        let Mb = bb[bb.length - 1],
          eb = Mb.selectionsAfter.slice(Math.max(0, Mb.selectionsAfter.length - fb));
        return eb.length && eb[eb.length - 1].eq(wb) ? bb : (eb.push(wb), cb(bb, bb.length - 1, 1e9, Mb.setSelAfter(eb)))
      }
      return [Db.selection([wb])]
    }

    function Wb(bb) {
      let wb = bb[bb.length - 1],
        Mb = bb.slice();
      return Mb[bb.length - 1] = wb.setSelAfter(wb.selectionsAfter.slice(0, wb.selectionsAfter.length - 1)), Mb
    }

    function Jb(bb, wb) {
      if (!bb.length) return bb;
      let Mb = bb.length,
        eb = Zb;
      for (; Mb;) {
        let Hb = Sb(bb[Mb - 1], wb, eb);
        if (Hb.changes && !Hb.changes.empty || Hb.effects.length) {
          let wb = bb.slice(0, Mb);
          return wb[Mb - 1] = Hb, wb
        }
        wb = Hb.mapped, Mb--, eb = Hb.selectionsAfter
      }
      return eb.length ? [Db.selection(eb)] : Zb
    }

    function Sb(bb, wb, Mb) {
      let eb = Yb(bb.selectionsAfter.length ? bb.selectionsAfter.map((bb => bb.map(wb))) : Zb, Mb);
      if (!bb.changes) return Db.selection(eb);
      let Hb = bb.changes.map(wb),
        pb = wb.mapDesc(bb.changes, !0),
        gb = bb.mapped ? bb.mapped.composeDesc(pb) : pb;
      return new Db(Hb, Vb.E.mapEffects(bb.effects, wb), gb, bb.startSelection.map(pb), eb)
    }
    const Nb = /^(input\.type|delete)($|\.)/;
    class vb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = bb, this.undone = wb, this.prevTime = Mb, this.prevUserEvent = eb
      }
      isolate() {
        return this.prevTime ? new vb(this.done, this.undone) : this
      }
      addChanges(bb, wb, Mb, eb, Hb) {
        let pb = this.done,
          gb = pb[pb.length - 1];
        return pb = gb && gb.changes && !gb.changes.empty && bb.changes && (!Mb || Nb.test(Mb)) && (!gb.selectionsAfter.length && wb - this.prevTime < eb.newGroupDelay && eb.joinToEvent(Hb, function(bb, wb) {
          let Mb = [],
            eb = !1;
          return bb.iterChangedRanges(((bb, wb) => Mb.push(bb, wb))), wb.iterChangedRanges(((bb, wb, Hb, pb) => {
            for (let Vb = 0; Vb < Mb.length;) {
              let bb = Mb[Vb++],
                wb = Mb[Vb++];
              pb >= bb && Hb <= wb && (eb = !0)
            }
          })), eb
        }(gb.changes, bb.changes)) || "input.type.compose" == Mb) ? cb(pb, pb.length - 1, eb.minDepth, new Db(bb.changes.compose(gb.changes), Yb(Vb.E.mapEffects(bb.effects, gb.changes), gb.effects), gb.mapped, gb.startSelection, Zb)) : cb(pb, pb.length, eb.minDepth, bb), new vb(pb, Zb, wb, Mb)
      }
      addSelection(bb, wb, Mb, eb) {
        let Hb = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Zb;
        return Hb.length > 0 && wb - this.prevTime < eb && Mb == this.prevUserEvent && Mb && /^select($|\.)/.test(Mb) && (pb = Hb[Hb.length - 1], Vb = bb, pb.gF.length == Vb.gF.length && 0 === pb.gF.filter(((bb, wb) => bb.empty != Vb.gF[wb].empty)).length) ? this : new vb(Ab(this.done, bb), this.undone, wb, Mb);
        var pb, Vb
      }
      addMapping(bb) {
        return new vb(Jb(this.done, bb), Jb(this.undone, bb), this.prevTime, this.prevUserEvent)
      }
      pop(bb, wb, Mb) {
        let eb = 0 == bb ? this.done : this.undone;
        if (0 == eb.length) return null;
        let Hb = eb[eb.length - 1],
          pb = Hb.selectionsAfter[0] || (Hb.startSelection ? Hb.startSelection.map(Hb.changes.invertedDesc, 1) : wb.selection);
        if (Mb && Hb.selectionsAfter.length) return wb.update({
          selection: Hb.selectionsAfter[Hb.selectionsAfter.length - 1],
          annotations: sb.of({
            side: bb,
            rest: Wb(eb),
            selection: pb
          }),
          userEvent: 0 == bb ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (Hb.changes) {
          let Mb = 1 == eb.length ? Zb : eb.slice(0, eb.length - 1);
          return Hb.mapped && (Mb = Jb(Mb, Hb.mapped)), wb.update({
            changes: Hb.changes,
            selection: Hb.startSelection,
            effects: Hb.effects,
            annotations: sb.of({
              side: bb,
              rest: Mb,
              selection: pb
            }),
            filter: !1,
            userEvent: 0 == bb ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    vb.empty = new vb(Zb, Zb);
    const Qb = [{
      key: "Mod-z",
      run: jb,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: Kb,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: Kb,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: rb,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Rb,
      preventDefault: !0
    }];

    function Gb(bb, wb) {
      return Vb.j.create(bb.gF.map(wb), bb.mainIndex)
    }

    function qb(bb, wb) {
      return bb.update({
        selection: wb,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function ab(bb, wb) {
      let {
        state: Mb,
        dispatch: eb
      } = bb, Hb = Gb(Mb.selection, wb);
      return !Hb.eq(Mb.selection, !0) && (eb(qb(Mb, Hb)), !0)
    }

    function ib(bb, wb) {
      return Vb.j.cursor(wb ? bb.to : bb.from)
    }

    function ub(bb, wb) {
      return ab(bb, (Mb => Mb.empty ? bb.moveByChar(Mb, wb) : ib(Mb, wb)))
    }

    function db(bb) {
      return bb.textDirectionAt(bb.state.selection.main.head) == gb.e.LTR
    }
    const Pb = bb => ub(bb, !db(bb)),
      nb = bb => ub(bb, db(bb));

    function yb(bb, wb) {
      return ab(bb, (Mb => Mb.empty ? bb.moveByGroup(Mb, wb) : ib(Mb, wb)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function ob(bb, wb, Mb) {
      if (wb.type.prop(Mb)) return !0;
      let eb = wb.to - wb.from;
      return eb && (eb > 2 || /[^\s,.;:]/.test(bb.sliceDoc(wb.from, wb.to))) || wb.firstChild
    }

    function Tb(bb, wb, Mb) {
      let eb, Hb, pb = (0, lb.qb)(bb).resolveInner(wb.head),
        gb = Mb ? Lb.d.closedBy : Lb.d.openedBy;
      for (let Vb = wb.head;;) {
        let wb = Mb ? pb.childAfter(Vb) : pb.childBefore(Vb);
        if (!wb) break;
        ob(bb, wb, gb) ? pb = wb : Vb = Mb ? wb.to : wb.from
      }
      return Hb = pb.type.prop(gb) && (eb = Mb ? (0, lb.fb)(bb, pb.from, 1) : (0, lb.fb)(bb, pb.to, -1)) && eb.matched ? Mb ? eb.end.to : eb.end.from : Mb ? pb.to : pb.from, Vb.j.cursor(Hb, Mb ? -1 : 1)
    }

    function kb(bb, wb) {
      return ab(bb, (Mb => {
        if (!Mb.empty) return ib(Mb, wb);
        let eb = bb.moveVertically(Mb, wb);
        return eb.head != Mb.head ? eb : bb.moveToLineBoundary(Mb, wb)
      }))
    }
    const bw = bb => kb(bb, !1),
      ww = bb => kb(bb, !0);

    function Mw(bb) {
      let wb, Mb = bb.scrollDOM.clientHeight < bb.scrollDOM.scrollHeight - 2,
        eb = 0,
        Hb = 0;
      if (Mb) {
        for (let wb of bb.state.facet(gb.g.scrollMargins)) {
          let Mb = wb(bb);
          (null === Mb || void 0 === Mb ? void 0 : Mb.top) && (eb = Math.max(null === Mb || void 0 === Mb ? void 0 : Mb.top, eb)), (null === Mb || void 0 === Mb ? void 0 : Mb.bottom) && (Hb = Math.max(null === Mb || void 0 === Mb ? void 0 : Mb.bottom, Hb))
        }
        wb = bb.scrollDOM.clientHeight - eb - Hb
      } else wb = (bb.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: eb,
        marginBottom: Hb,
        selfScroll: Mb,
        height: Math.max(bb.defaultLineHeight, wb - 5)
      }
    }

    function ew(bb, wb) {
      let Mb, eb = Mw(bb),
        {
          state: Hb
        } = bb,
        pb = Gb(Hb.selection, (Mb => Mb.empty ? bb.moveVertically(Mb, wb, eb.height) : ib(Mb, wb)));
      if (pb.eq(Hb.selection)) return !1;
      if (eb.selfScroll) {
        let wb = bb.coordsAtPos(Hb.selection.main.head),
          Vb = bb.scrollDOM.getBoundingClientRect(),
          lb = Vb.top + eb.marginTop,
          Lb = Vb.bottom - eb.marginBottom;
        wb && wb.top > lb && wb.bottom < Lb && (Mb = gb.g.scrollIntoView(pb.main.head, {
          y: "start",
          yMargin: wb.top - lb
        }))
      }
      return bb.dispatch(qb(Hb, pb), {
        effects: Mb
      }), !0
    }
    const Hw = bb => ew(bb, !1),
      pw = bb => ew(bb, !0);

    function Vw(bb, wb, Mb) {
      let eb = bb.lineBlockAt(wb.head),
        Hb = bb.moveToLineBoundary(wb, Mb);
      if (Hb.head == wb.head && Hb.head != (Mb ? eb.to : eb.from) && (Hb = bb.moveToLineBoundary(wb, Mb, !1)), !Mb && Hb.head == eb.from && eb.length) {
        let Mb = /^\s*/.exec(bb.state.sliceDoc(eb.from, Math.min(eb.from + 100, eb.to)))[0].length;
        Mb && wb.head != eb.from + Mb && (Hb = Vb.j.cursor(eb.from + Mb))
      }
      return Hb
    }

    function gw(bb, wb, Mb) {
      let eb = !1,
        Hb = Gb(bb.selection, (wb => {
          let Hb = (0, lb.fb)(bb, wb.head, -1) || (0, lb.fb)(bb, wb.head, 1) || wb.head > 0 && (0, lb.fb)(bb, wb.head - 1, 1) || wb.head < bb.doc.length && (0, lb.fb)(bb, wb.head + 1, -1);
          if (!Hb || !Hb.end) return wb;
          eb = !0;
          let pb = Hb.start.from == wb.head ? Hb.end.to : Hb.end.from;
          return Mb ? Vb.j.range(wb.anchor, pb) : Vb.j.cursor(pb)
        }));
      return !!eb && (wb(qb(bb, Hb)), !0)
    }

    function lw(bb, wb) {
      let Mb = Gb(bb.state.selection, (bb => {
        let Mb = wb(bb);
        return Vb.j.range(bb.anchor, Mb.head, Mb.goalColumn, Mb.bidiLevel || void 0, Mb.assoc)
      }));
      return !Mb.eq(bb.state.selection) && (bb.dispatch(qb(bb.state, Mb)), !0)
    }

    function Lw(bb, wb) {
      return lw(bb, (Mb => bb.moveByChar(Mb, wb)))
    }
    const Iw = bb => Lw(bb, !db(bb)),
      Ow = bb => Lw(bb, db(bb));

    function Uw(bb, wb) {
      return lw(bb, (Mb => bb.moveByGroup(Mb, wb)))
    }

    function tw(bb, wb) {
      return lw(bb, (Mb => bb.moveVertically(Mb, wb)))
    }
    const Cw = bb => tw(bb, !1),
      Ew = bb => tw(bb, !0);

    function Fw(bb, wb) {
      return lw(bb, (Mb => bb.moveVertically(Mb, wb, Mw(bb).height)))
    }
    const Bw = bb => Fw(bb, !1),
      sw = bb => Fw(bb, !0),
      mw = bb => {
        let {
          state: wb,
          dispatch: Mb
        } = bb;
        return Mb(qb(wb, {
          anchor: 0
        })), !0
      },
      hw = bb => {
        let {
          state: wb,
          dispatch: Mb
        } = bb;
        return Mb(qb(wb, {
          anchor: wb.doc.length
        })), !0
      },
      zw = bb => {
        let {
          state: wb,
          dispatch: Mb
        } = bb;
        return Mb(qb(wb, {
          anchor: wb.selection.main.anchor,
          head: 0
        })), !0
      },
      Xw = bb => {
        let {
          state: wb,
          dispatch: Mb
        } = bb;
        return Mb(qb(wb, {
          anchor: wb.selection.main.anchor,
          head: wb.doc.length
        })), !0
      };

    function xw(bb, wb) {
      let {
        state: Mb
      } = bb, eb = Mb.selection, Hb = Mb.selection.gF.slice();
      for (let pb of Mb.selection.gF) {
        let eb = Mb.doc.lineAt(pb.head);
        if (wb ? eb.to < bb.state.doc.length : eb.from > 0)
          for (let Mb = pb;;) {
            let pb = bb.moveVertically(Mb, wb);
            if (pb.head < eb.from || pb.head > eb.to) {
              Hb.some((bb => bb.head == pb.head)) || Hb.push(pb);
              break
            }
            if (pb.head == Mb.head) break;
            Mb = pb
          }
      }
      return Hb.length != eb.gF.length && (bb.dispatch(qb(Mb, Vb.j.create(Hb, Hb.length - 1))), !0)
    }

    function jw(bb, wb) {
      if (bb.state.readOnly) return !1;
      let Mb = "delete.selection",
        {
          state: eb
        } = bb,
        Hb = eb.changeByRange((eb => {
          let {
            from: Hb,
            to: pb
          } = eb;
          if (Hb == pb) {
            let Vb = wb(eb);
            Vb < Hb ? (Mb = "delete.backward", Vb = Kw(bb, Vb, !1)) : Vb > Hb && (Mb = "delete.forward", Vb = Kw(bb, Vb, !0)), Hb = Math.min(Hb, Vb), pb = Math.max(pb, Vb)
          } else Hb = Kw(bb, Hb, !1), pb = Kw(bb, pb, !0);
          return Hb == pb ? {
            range: eb
          } : {
            changes: {
              from: Hb,
              to: pb
            },
            range: Vb.j.cursor(Hb, Hb < eb.head ? -1 : 1)
          }
        }));
      return !Hb.changes.empty && (bb.dispatch(eb.update(Hb, {
        scrollIntoView: !0,
        userEvent: Mb,
        effects: "delete.selection" == Mb ? gb.g.announce.of(eb.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function Kw(bb, wb, Mb) {
      if (bb instanceof gb.g)
        for (let eb of bb.state.facet(gb.g.atomicRanges).map((wb => wb(bb)))) eb.between(wb, wb, ((bb, eb) => {
          bb < wb && eb > wb && (wb = Mb ? eb : bb)
        }));
      return wb
    }
    const rw = (bb, wb, Mb) => jw(bb, (eb => {
        let Hb, pb, gb = eb.from,
          {
            state: Lb
          } = bb,
          Ib = Lb.doc.lineAt(gb);
        if (Mb && !wb && gb > Ib.from && gb < Ib.from + 200 && !/[^ \t]/.test(Hb = Ib.text.slice(0, gb - Ib.from))) {
          if ("\t" == Hb[Hb.length - 1]) return gb - 1;
          let bb = (0, Vb.S)(Hb, Lb.tabSize) % (0, lb.T)(Lb) || (0, lb.T)(Lb);
          for (let wb = 0; wb < bb && " " == Hb[Hb.length - 1 - wb]; wb++) gb--;
          pb = gb
        } else pb = (0, Vb.U)(Ib.text, gb - Ib.from, wb, wb) + Ib.from, pb == gb && Ib.number != (wb ? Lb.doc.lines : 1) ? pb += wb ? 1 : -1 : !wb && /[\ufe00-\ufe0f]/.test(Ib.text.slice(pb - Ib.from, gb - Ib.from)) && (pb = (0, Vb.U)(Ib.text, pb - Ib.from, !1, !1) + Ib.from);
        return pb
      })),
      Rw = bb => rw(bb, !1, !0),
      Dw = bb => rw(bb, !0, !1),
      Yw = (bb, wb) => jw(bb, (Mb => {
        let eb = Mb.head,
          {
            state: Hb
          } = bb,
          pb = Hb.doc.lineAt(eb),
          gb = Hb.charCategorizer(eb);
        for (let bb = null;;) {
          if (eb == (wb ? pb.to : pb.from)) {
            eb == Mb.head && pb.number != (wb ? Hb.doc.lines : 1) && (eb += wb ? 1 : -1);
            break
          }
          let lb = (0, Vb.U)(pb.text, eb - pb.from, wb) + pb.from,
            Lb = pb.text.slice(Math.min(eb, lb) - pb.from, Math.max(eb, lb) - pb.from),
            Ib = gb(Lb);
          if (null != bb && Ib != bb) break;
          " " == Lb && eb == Mb.head || (bb = Ib), eb = lb
        }
        return eb
      })),
      Zw = bb => Yw(bb, !1);

    function fw(bb) {
      let wb = [],
        Mb = -1;
      for (let eb of bb.selection.gF) {
        let Hb = bb.doc.lineAt(eb.from),
          pb = bb.doc.lineAt(eb.to);
        if (eb.empty || eb.to != pb.from || (pb = bb.doc.lineAt(eb.to - 1)), Mb >= Hb.number) {
          let bb = wb[wb.length - 1];
          bb.to = pb.to, bb.gF.push(eb)
        } else wb.push({
          from: Hb.from,
          to: pb.to,
          gF: [eb]
        });
        Mb = pb.number + 1
      }
      return wb
    }

    function Aw(bb, wb, Mb) {
      if (bb.readOnly) return !1;
      let eb = [],
        Hb = [];
      for (let pb of fw(bb)) {
        if (Mb ? pb.to == bb.doc.length : 0 == pb.from) continue;
        let wb = bb.doc.lineAt(Mb ? pb.to + 1 : pb.from - 1),
          gb = wb.length + 1;
        if (Mb) {
          eb.push({
            from: pb.to,
            to: wb.to
          }, {
            from: pb.from,
            insert: wb.text + bb.lineBreak
          });
          for (let wb of pb.gF) Hb.push(Vb.j.range(Math.min(bb.doc.length, wb.anchor + gb), Math.min(bb.doc.length, wb.head + gb)))
        } else {
          eb.push({
            from: wb.from,
            to: pb.from
          }, {
            from: pb.to,
            insert: bb.lineBreak + wb.text
          });
          for (let bb of pb.gF) Hb.push(Vb.j.range(bb.anchor - gb, bb.head - gb))
        }
      }
      return !!eb.length && (wb(bb.update({
        changes: eb,
        scrollIntoView: !0,
        selection: Vb.j.create(Hb, bb.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function Ww(bb, wb, Mb) {
      if (bb.readOnly) return !1;
      let eb = [];
      for (let pb of fw(bb)) Mb ? eb.push({
        from: pb.from,
        insert: bb.doc.slice(pb.from, pb.to) + bb.lineBreak
      }) : eb.push({
        from: pb.to,
        insert: bb.lineBreak + bb.doc.slice(pb.from, pb.to)
      });
      let Hb = bb.changes(eb);
      return wb(bb.update({
        changes: Hb,
        selection: bb.selection.map(Hb, Mb ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const Jw = Sw(!1);

    function Sw(bb) {
      return wb => {
        let {
          state: Mb,
          dispatch: eb
        } = wb;
        if (Mb.readOnly) return !1;
        let Hb = Mb.changeByRange((wb => {
          let {
            from: eb,
            to: Hb
          } = wb, pb = Mb.doc.lineAt(eb), gb = !bb && eb == Hb && function(bb, wb) {
            if (/\(\)|\[\]|\{\}/.test(bb.sliceDoc(wb - 1, wb + 1))) return {
              from: wb,
              to: wb
            };
            let Mb, eb = (0, lb.qb)(bb).resolveInner(wb),
              Hb = eb.childBefore(wb),
              pb = eb.childAfter(wb);
            return Hb && pb && Hb.to <= wb && pb.from >= wb && (Mb = Hb.type.prop(Lb.d.closedBy)) && Mb.indexOf(pb.name) > -1 && bb.doc.lineAt(Hb.to).from == bb.doc.lineAt(pb.from).from && !/\S/.test(bb.sliceDoc(Hb.to, pb.from)) ? {
              from: Hb.to,
              to: pb.from
            } : null
          }(Mb, eb);
          bb && (eb = Hb = (Hb <= pb.to ? pb : Mb.doc.lineAt(Hb)).to);
          let Ib = new lb.f(Mb, {
              simulateBreak: eb,
              simulateDoubleBreak: !!gb
            }),
            Ob = (0, lb.U)(Ib, eb);
          for (null == Ob && (Ob = (0, Vb.S)(/^\s*/.exec(Mb.doc.lineAt(eb).text)[0], Mb.tabSize)); Hb < pb.to && /\s/.test(pb.text[Hb - pb.from]);) Hb++;
          gb ? ({
            from: eb,
            to: Hb
          } = gb) : eb > pb.from && eb < pb.from + 100 && !/\S/.test(pb.text.slice(0, eb)) && (eb = pb.from);
          let Ub = ["", (0, lb.ab)(Mb, Ob)];
          return gb && Ub.push((0, lb.ab)(Mb, Ib.lineIndent(pb.from, -1))), {
            changes: {
              from: eb,
              to: Hb,
              insert: Vb.H.of(Ub)
            },
            range: Vb.j.cursor(eb + 1 + Ub[1].length)
          }
        }));
        return eb(Mb.update(Hb, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function Nw(bb, wb) {
      let Mb = -1;
      return bb.changeByRange((eb => {
        let Hb = [];
        for (let Vb = eb.from; Vb <= eb.to;) {
          let pb = bb.doc.lineAt(Vb);
          pb.number > Mb && (eb.empty || eb.to > pb.from) && (wb(pb, Hb, eb), Mb = pb.number), Vb = pb.to + 1
        }
        let pb = bb.changes(Hb);
        return {
          changes: Hb,
          range: Vb.j.range(pb.mapPos(eb.anchor, 1), pb.mapPos(eb.head, 1))
        }
      }))
    }
    const vw = bb => {
        let {
          state: wb,
          dispatch: Mb
        } = bb;
        return !wb.readOnly && (Mb(wb.update(Nw(wb, ((bb, Mb) => {
          Mb.push({
            from: bb.from,
            insert: wb.facet(lb.eb)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      Qw = bb => {
        let {
          state: wb,
          dispatch: Mb
        } = bb;
        return !wb.readOnly && (Mb(wb.update(Nw(wb, ((bb, Mb) => {
          let eb = /^\s*/.exec(bb.text)[0];
          if (!eb) return;
          let Hb = (0, Vb.S)(eb, wb.tabSize),
            pb = 0,
            gb = (0, lb.ab)(wb, Math.max(0, Hb - (0, lb.T)(wb)));
          for (; pb < eb.length && pb < gb.length && eb.charCodeAt(pb) == gb.charCodeAt(pb);) pb++;
          Mb.push({
            from: bb.from + pb,
            to: bb.from + eb.length,
            insert: gb.slice(pb)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      Gw = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: bb => ab(bb, (wb => Tb(bb.state, wb, !db(bb)))),
        shift: bb => lw(bb, (wb => Tb(bb.state, wb, !db(bb))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: bb => ab(bb, (wb => Tb(bb.state, wb, db(bb)))),
        shift: bb => lw(bb, (wb => Tb(bb.state, wb, db(bb))))
      }, {
        key: "Alt-ArrowUp",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb;
          return Aw(wb, Mb, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb;
          return Ww(wb, Mb, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb;
          return Aw(wb, Mb, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb;
          return Ww(wb, Mb, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: bb => xw(bb, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: bb => xw(bb, !0)
      }, {
        key: "Escape",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb, eb = wb.selection, Hb = null;
          return eb.gF.length > 1 ? Hb = Vb.j.create([eb.main]) : eb.main.empty || (Hb = Vb.j.create([Vb.j.cursor(eb.main.head)])), !!Hb && (Mb(qb(wb, Hb)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Sw(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb, eb = fw(wb).map((bb => {
            let {
              from: Mb,
              to: eb
            } = bb;
            return Vb.j.range(Mb, Math.min(eb + 1, wb.doc.length))
          }));
          return Mb(wb.update({
            selection: Vb.j.create(eb),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb, eb = Gb(wb.selection, (bb => {
            let Mb = (0, lb.qb)(wb),
              eb = Mb.resolveStack(bb.from, 1);
            if (bb.empty) {
              let wb = Mb.resolveStack(bb.from, -1);
              wb.node.from >= eb.node.from && wb.node.to <= eb.node.to && (eb = wb)
            }
            for (let wb = eb; wb; wb = wb.next) {
              let {
                node: Mb
              } = wb;
              if ((Mb.from < bb.from && Mb.to >= bb.to || Mb.to > bb.to && Mb.from <= bb.from) && wb.next) return Vb.j.range(Mb.to, Mb.from)
            }
            return bb
          }));
          return !eb.eq(wb.selection) && (Mb(qb(wb, eb)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: Qw
      }, {
        key: "Mod-]",
        run: vw
      }, {
        key: "Mod-Alt-\\",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb;
          if (wb.readOnly) return !1;
          let eb = Object.create(null),
            Hb = new lb.f(wb, {
              overrideIndentation: bb => {
                let wb = eb[bb];
                return null == wb ? -1 : wb
              }
            }),
            pb = Nw(wb, ((bb, Mb, pb) => {
              let Vb = (0, lb.U)(Hb, bb.from);
              if (null == Vb) return;
              /\S/.test(bb.text) || (Vb = 0);
              let gb = /^\s*/.exec(bb.text)[0],
                Lb = (0, lb.ab)(wb, Vb);
              (gb != Lb || pb.from < bb.from + gb.length) && (eb[bb.from] = Vb, Mb.push({
                from: bb.from,
                to: bb.from + gb.length,
                insert: Lb
              }))
            }));
          return pb.changes.empty || Mb(wb.update(pb, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: bb => {
          if (bb.state.readOnly) return !1;
          let {
            state: wb
          } = bb, Mb = wb.changes(fw(wb).map((bb => {
            let {
              from: Mb,
              to: eb
            } = bb;
            return Mb > 0 ? Mb-- : eb < wb.doc.length && eb++, {
              from: Mb,
              to: eb
            }
          }))), eb = Gb(wb.selection, (wb => {
            let Mb;
            if (bb.lineWrapping) {
              let eb = bb.lineBlockAt(wb.head),
                Hb = bb.coordsAtPos(wb.head, wb.assoc || 1);
              Hb && (Mb = eb.bottom + bb.documentTop - Hb.bottom + bb.defaultLineHeight / 2)
            }
            return bb.moveVertically(wb, !0, Mb)
          })).map(Mb);
          return bb.dispatch({
            changes: Mb,
            selection: eb,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb;
          return gw(wb, Mb, !1)
        }
      }, {
        key: "Mod-/",
        run: bb => {
          let {
            state: wb
          } = bb, Mb = wb.doc.lineAt(wb.selection.main.from), eb = Cb(bb.state, Mb.from);
          return eb.line ? Ob(bb) : !!eb.block && tb(bb)
        }
      }, {
        key: "Alt-A",
        run: Ub
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: bb => (bb.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: Pb,
        shift: Iw,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: bb => yb(bb, !db(bb)),
        shift: bb => Uw(bb, !db(bb)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: bb => ab(bb, (wb => Vw(bb, wb, !db(bb)))),
        shift: bb => lw(bb, (wb => Vw(bb, wb, !db(bb)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: nb,
        shift: Ow,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: bb => yb(bb, db(bb)),
        shift: bb => Uw(bb, db(bb)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: bb => ab(bb, (wb => Vw(bb, wb, db(bb)))),
        shift: bb => lw(bb, (wb => Vw(bb, wb, db(bb)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: bw,
        shift: Cw,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: mw,
        shift: zw
      }, {
        mac: "Ctrl-ArrowUp",
        run: Hw,
        shift: Bw
      }, {
        key: "ArrowDown",
        run: ww,
        shift: Ew,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: hw,
        shift: Xw
      }, {
        mac: "Ctrl-ArrowDown",
        run: pw,
        shift: sw
      }, {
        key: "PageUp",
        run: Hw,
        shift: Bw
      }, {
        key: "PageDown",
        run: pw,
        shift: sw
      }, {
        key: "Home",
        run: bb => ab(bb, (wb => Vw(bb, wb, !1))),
        shift: bb => lw(bb, (wb => Vw(bb, wb, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: mw,
        shift: zw
      }, {
        key: "End",
        run: bb => ab(bb, (wb => Vw(bb, wb, !0))),
        shift: bb => lw(bb, (wb => Vw(bb, wb, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: hw,
        shift: Xw
      }, {
        key: "Enter",
        run: Jw,
        shift: Jw
      }, {
        key: "Mod-a",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb;
          return Mb(wb.update({
            selection: {
              anchor: 0,
              head: wb.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: Rw,
        shift: Rw,
        preventDefault: !0
      }, {
        key: "Delete",
        run: Dw,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: Zw,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: bb => Yw(bb, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: bb => jw(bb, (wb => {
          let Mb = bb.moveToLineBoundary(wb, !1).head;
          return wb.head > Mb ? Mb : Math.max(0, wb.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: bb => jw(bb, (wb => {
          let Mb = bb.moveToLineBoundary(wb, !0).head;
          return wb.head < Mb ? Mb : Math.min(bb.state.doc.length, wb.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: Pb,
        shift: Iw,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: nb,
        shift: Ow
      }, {
        key: "Ctrl-p",
        run: bw,
        shift: Cw
      }, {
        key: "Ctrl-n",
        run: ww,
        shift: Ew
      }, {
        key: "Ctrl-a",
        run: bb => ab(bb, (wb => Vb.j.cursor(bb.lineBlockAt(wb.head).from, 1))),
        shift: bb => lw(bb, (wb => Vb.j.cursor(bb.lineBlockAt(wb.head).from)))
      }, {
        key: "Ctrl-e",
        run: bb => ab(bb, (wb => Vb.j.cursor(bb.lineBlockAt(wb.head).to, -1))),
        shift: bb => lw(bb, (wb => Vb.j.cursor(bb.lineBlockAt(wb.head).to)))
      }, {
        key: "Ctrl-d",
        run: Dw
      }, {
        key: "Ctrl-h",
        run: Rw
      }, {
        key: "Ctrl-k",
        run: bb => jw(bb, (wb => {
          let Mb = bb.lineBlockAt(wb.head).to;
          return wb.head < Mb ? Mb : Math.min(bb.state.doc.length, wb.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: Zw
      }, {
        key: "Ctrl-o",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb;
          if (wb.readOnly) return !1;
          let eb = wb.changeByRange((bb => ({
            changes: {
              from: bb.from,
              to: bb.to,
              insert: Vb.H.of(["", ""])
            },
            range: Vb.j.cursor(bb.from)
          })));
          return Mb(wb.update(eb, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: bb => {
          let {
            state: wb,
            dispatch: Mb
          } = bb;
          if (wb.readOnly) return !1;
          let eb = wb.changeByRange((bb => {
            if (!bb.empty || 0 == bb.from || bb.from == wb.doc.length) return {
              range: bb
            };
            let Mb = bb.from,
              eb = wb.doc.lineAt(Mb),
              Hb = Mb == eb.from ? Mb - 1 : (0, Vb.U)(eb.text, Mb - eb.from, !1) + eb.from,
              pb = Mb == eb.to ? Mb + 1 : (0, Vb.U)(eb.text, Mb - eb.from, !0) + eb.from;
            return {
              changes: {
                from: Hb,
                to: pb,
                insert: wb.doc.slice(Mb, pb).append(wb.doc.slice(Hb, Mb))
              },
              range: Vb.j.cursor(pb)
            }
          }));
          return !eb.changes.empty && (Mb(wb.update(eb, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: pw
      }].map((bb => ({
        mac: bb.key,
        run: bb.run,
        shift: bb.shift
      }))))),
      qw = {
        key: "Tab",
        run: vw,
        shift: Qw
      };
    var aw = Mb(53555),
      iw = Mb(53497),
      uw = Mb(53564),
      dw = function(bb) {
        void 0 === bb && (bb = {});
        var {
          crosshairCursor: wb = !1
        } = bb, Mb = [];
        !1 !== bb.closeBracketsKeymap && (Mb = Mb.concat(iw.h)), !1 !== bb.defaultKeymap && (Mb = Mb.concat(Gw)), !1 !== bb.searchKeymap && (Mb = Mb.concat(aw.j)), !1 !== bb.historyKeymap && (Mb = Mb.concat(Qb)), !1 !== bb.foldKeymap && (Mb = Mb.concat(lb.N)), !1 !== bb.completionKeymap && (Mb = Mb.concat(iw.n)), !1 !== bb.lintKeymap && (Mb = Mb.concat(uw.d));
        var eb = [];
        return !1 !== bb.lineNumbers && eb.push((0, gb.$)()), !1 !== bb.highlightActiveLineGutter && eb.push((0, gb.K)()), !1 !== bb.highlightSpecialChars && eb.push((0, gb.P)()), !1 !== bb.history && eb.push(function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [Xb, zb.of(bb), gb.g.domEventHandlers({
            beforeinput(bb, wb) {
              let Mb = "historyUndo" == bb.inputType ? jb : "historyRedo" == bb.inputType ? Kb : null;
              return !!Mb && (bb.preventDefault(), Mb(wb))
            }
          })]
        }()), !1 !== bb.foldGutter && eb.push((0, lb.F)()), !1 !== bb.drawSelection && eb.push((0, gb.t)()), !1 !== bb.dropCursor && eb.push((0, gb.w)()), !1 !== bb.allowMultipleSelections && eb.push(Vb.n.allowMultipleSelections.of(!0)), !1 !== bb.indentOnInput && eb.push((0, lb._)()), !1 !== bb.syntaxHighlighting && eb.push((0, lb.mb)(lb.x, {
          fallback: !0
        })), !1 !== bb.bracketMatching && eb.push((0, lb.r)()), !1 !== bb.closeBrackets && eb.push((0, iw.k)()), !1 !== bb.autocompletion && eb.push((0, iw.e)()), !1 !== bb.rectangularSelection && eb.push((0, gb.eb)()), !1 !== wb && eb.push((0, gb.q)()), !1 !== bb.highlightActiveLine && eb.push((0, gb.N)()), !1 !== bb.highlightSelectionMatches && eb.push((0, aw.h)()), bb.tabSize && "number" === typeof bb.tabSize && eb.push(lb.eb.of(" ".repeat(bb.tabSize))), eb.concat([gb.X.of(Mb.flat())]).filter(Boolean)
      },
      Pw = Mb(53539);
    const nw = "#e5c07b",
      yw = "#e06c75",
      ow = "#56b6c2",
      Tw = "#ffffff",
      kw = "#abb2bf",
      bM = "#7d8799",
      wM = "#61afef",
      MM = "#98c379",
      eM = "#d19a66",
      HM = "#c678dd",
      pM = "#21252b",
      VM = "#2c313a",
      gM = "#282c34",
      lM = "#353a42",
      LM = "#3E4451",
      IM = "#528bff",
      OM = gb.g.theme({
        "&": {
          color: kw,
          backgroundColor: gM
        },
        ".cm-content": {
          caretColor: IM
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: IM
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: LM
        },
        ".cm-panels": {
          backgroundColor: pM,
          color: kw
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
          backgroundColor: gM,
          color: bM,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: VM
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: lM
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: lM,
          borderBottomColor: lM
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: VM,
            color: kw
          }
        }
      }, {
        dark: !0
      }),
      UM = lb.e.define([{
        tag: Pw.l.keyword,
        color: HM
      }, {
        tag: [Pw.l.name, Pw.l.deleted, Pw.l.character, Pw.l.propertyName, Pw.l.macroName],
        color: yw
      }, {
        tag: [Pw.l.function(Pw.l.variableName), Pw.l.labelName],
        color: wM
      }, {
        tag: [Pw.l.color, Pw.l.constant(Pw.l.name), Pw.l.standard(Pw.l.name)],
        color: eM
      }, {
        tag: [Pw.l.definition(Pw.l.name), Pw.l.separator],
        color: kw
      }, {
        tag: [Pw.l.typeName, Pw.l.className, Pw.l.number, Pw.l.changed, Pw.l.annotation, Pw.l.modifier, Pw.l.self, Pw.l.namespace],
        color: nw
      }, {
        tag: [Pw.l.operator, Pw.l.operatorKeyword, Pw.l.url, Pw.l.escape, Pw.l.regexp, Pw.l.link, Pw.l.special(Pw.l.string)],
        color: ow
      }, {
        tag: [Pw.l.meta, Pw.l.comment],
        color: bM
      }, {
        tag: Pw.l.strong,
        fontWeight: "bold"
      }, {
        tag: Pw.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: Pw.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Pw.l.link,
        color: bM,
        textDecoration: "underline"
      }, {
        tag: Pw.l.heading,
        fontWeight: "bold",
        color: yw
      }, {
        tag: [Pw.l.atom, Pw.l.bool, Pw.l.special(Pw.l.variableName)],
        color: eM
      }, {
        tag: [Pw.l.processingInstruction, Pw.l.string, Pw.l.inserted],
        color: MM
      }, {
        tag: Pw.l.invalid,
        color: Tw
      }]),
      tM = [OM, (0, lb.mb)(UM)];
    var CM = gb.g.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class EM {
      constructor(bb, wb) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = wb, this.timeoutMS = wb, this.callbacks.push(bb)
      }
      sO() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var bb = this.callbacks.slice();
          this.callbacks.length = 0, bb.forEach((bb => {
            try {
              bb()
            } catch (wb) {
              console.error("TimeoutLatch callback error:", wb)
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
    class FM {
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
            bb.sO(), bb.isDone && this.remove(bb)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var BM = null,
      sM = Vb.c.define(),
      mM = [];

    function hM(bb) {
      var {
        value: wb,
        selection: Mb,
        onChange: eb,
        onStatistics: Hb,
        onCreateEditor: lb,
        onUpdate: Lb,
        extensions: Ib = mM,
        autoFocus: Ob,
        theme: Ub = "light",
        height: tb = null,
        minHeight: Cb = null,
        maxHeight: Eb = null,
        width: Fb = null,
        minWidth: Bb = null,
        maxWidth: sb = null,
        placeholder: mb = "",
        editable: hb = !0,
        readOnly: zb = !1,
        indentWithTab: Xb = !0,
        basicSetup: xb = !0,
        root: jb,
        initialState: Kb
      } = bb, [rb, Rb] = (0, pb.useState)(), [Db, cb] = (0, pb.useState)(), [Yb, Zb] = (0, pb.useState)(), fb = (0, pb.useState)((() => ({
        current: null
      })))[0], Ab = (0, pb.useState)((() => ({
        current: null
      })))[0], Wb = gb.g.theme({
        "&": {
          height: tb,
          minHeight: Cb,
          maxHeight: Eb,
          width: Fb,
          minWidth: Bb,
          maxWidth: sb
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), Jb = gb.g.updateListener.of((bb => {
        if (bb.docChanged && "function" === typeof eb && !bb.transactions.some((bb => bb.annotation(sM)))) {
          fb.current ? fb.current.reset() : (fb.current = new EM((() => {
            if (Ab.current) {
              var bb = Ab.current;
              Ab.current = null, bb()
            }
            fb.current = null
          }), 200), ("undefined" === typeof window ? new FM : (BM || (BM = new FM), BM)).add(fb.current));
          var wb = bb.state.doc.toString();
          eb(wb, bb)
        }
        Hb && Hb((bb => ({
          line: bb.state.doc.lineAt(bb.state.selection.main.from),
          lineCount: bb.state.doc.lines,
          lineBreak: bb.state.lineBreak,
          length: bb.state.doc.length,
          readOnly: bb.state.readOnly,
          tabSize: bb.state.tabSize,
          selection: bb.state.selection,
          selectionAsSingle: bb.state.selection.asSingle().main,
          gF: bb.state.selection.gF,
          selectionCode: bb.state.sliceDoc(bb.state.selection.main.from, bb.state.selection.main.to),
          selections: bb.state.selection.gF.map((wb => bb.state.sliceDoc(wb.from, wb.to))),
          selectedText: bb.state.selection.gF.some((bb => !bb.empty))
        }))(bb))
      })), Sb = function(bb) {
        void 0 === bb && (bb = {});
        var {
          indentWithTab: wb = !0,
          editable: Mb = !0,
          readOnly: eb = !1,
          theme: Hb = "light",
          placeholder: pb = "",
          basicSetup: lb = !0
        } = bb, Lb = [];
        switch (wb && Lb.unshift(gb.X.of([qw])), lb && ("boolean" === typeof lb ? Lb.unshift(dw()) : Lb.unshift(dw(lb))), pb && Lb.unshift((0, gb.cb)(pb)), Hb) {
          case "light":
            Lb.push(CM);
            break;
          case "dark":
            Lb.push(tM);
            break;
          case "none":
            break;
          default:
            Lb.push(Hb)
        }
        return !1 === Mb && Lb.push(gb.g.editable.of(!1)), eb && Lb.push(Vb.n.readOnly.of(!0)), [...Lb]
      }({
        theme: Ub,
        editable: hb,
        readOnly: zb,
        placeholder: mb,
        indentWithTab: Xb,
        basicSetup: xb
      }), Nb = [Jb, Wb, ...Sb];
      return Lb && "function" === typeof Lb && Nb.push(gb.g.updateListener.of(Lb)), Nb = Nb.concat(Ib), (0, pb.useLayoutEffect)((() => {
        if (rb && !Yb) {
          var bb = {
              doc: wb,
              selection: Mb,
              extensions: Nb
            },
            eb = Kb ? Vb.n.fromJSON(Kb.json, bb, Kb.fields) : Vb.n.create(bb);
          if (Zb(eb), !Db) {
            var Hb = new gb.g({
              state: eb,
              parent: rb,
              root: jb
            });
            cb(Hb), lb && lb(Hb, eb)
          }
        }
        return () => {
          Db && (Zb(void 0), cb(void 0))
        }
      }), [rb, Yb]), (0, pb.useEffect)((() => {
        bb.container && Rb(bb.container)
      }), [bb.container]), (0, pb.useEffect)((() => () => {
        Db && (Db.destroy(), cb(void 0)), fb.current && (fb.current.cancel(), fb.current = null)
      }), [Db]), (0, pb.useEffect)((() => {
        Ob && Db && Db.focus()
      }), [Ob, Db]), (0, pb.useEffect)((() => {
        Db && Db.dispatch({
          effects: Vb.E.reconfigure.of(Nb)
        })
      }), [Ub, Ib, tb, Cb, Eb, Fb, Bb, sb, mb, hb, zb, Xb, xb, eb, Lb]), (0, pb.useEffect)((() => {
        if (void 0 !== wb) {
          var bb = Db ? Db.state.doc.toString() : "";
          if (Db && wb !== bb) {
            var Mb = () => {
              Db && wb !== Db.state.doc.toString() && Db.dispatch({
                changes: {
                  from: 0,
                  to: Db.state.doc.toString().length,
                  insert: wb || ""
                },
                annotations: [sM.of(!0)]
              })
            };
            fb.current && !fb.current.isDone ? Ab.current = Mb : Mb()
          }
        }
      }), [wb, Db]), {
        state: Yb,
        setState: Zb,
        view: Db,
        setView: cb,
        container: rb,
        setContainer: Rb
      }
    }
    var zM = Mb(1364),
      XM = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      xM = (0, pb.forwardRef)(((bb, wb) => {
        var {
          className: Mb,
          value: Vb = "",
          selection: gb,
          extensions: lb = [],
          onChange: Lb,
          onStatistics: Ib,
          onCreateEditor: Ob,
          onUpdate: Ub,
          autoFocus: tb,
          theme: Cb = "light",
          height: Eb,
          minHeight: Fb,
          maxHeight: Bb,
          width: sb,
          minWidth: mb,
          maxWidth: hb,
          basicSetup: zb,
          placeholder: Xb,
          indentWithTab: xb,
          editable: jb,
          readOnly: Kb,
          root: rb,
          initialState: Rb
        } = bb, Db = (0, Hb.b)(bb, XM), cb = (0, pb.useRef)(null), {
          state: Yb,
          view: Zb,
          container: fb,
          setContainer: Ab
        } = hM({
          root: rb,
          value: Vb,
          autoFocus: tb,
          theme: Cb,
          height: Eb,
          minHeight: Fb,
          maxHeight: Bb,
          width: sb,
          minWidth: mb,
          maxWidth: hb,
          basicSetup: zb,
          placeholder: Xb,
          indentWithTab: xb,
          editable: jb,
          readOnly: Kb,
          selection: gb,
          onChange: Lb,
          onStatistics: Ib,
          onCreateEditor: Ob,
          onUpdate: Ub,
          extensions: lb,
          initialState: Rb
        });
        (0, pb.useImperativeHandle)(wb, (() => ({
          editor: cb.current,
          state: Yb,
          view: Zb
        })), [cb, fb, Yb, Zb]);
        var Wb = (0, pb.useCallback)((bb => {
          cb.current = bb, Ab(bb)
        }), [Ab]);
        if ("string" !== typeof Vb) throw new Error("value must be typeof string but got " + typeof Vb);
        var Jb = "string" === typeof Cb ? "cm-theme-" + Cb : "cm-theme";
        return (0, zM.jsx)("div", (0, eb.e)({
          ref: Wb,
          className: Jb + (Mb ? " " + Mb : "")
        }, Db))
      }));
    xM.displayName = "CodeMirror";
    const jM = xM
  },
  53522: (bb, wb, Mb) => {
    function eb() {
      var bb = arguments[0];
      "string" == typeof bb && (bb = document.createElement(bb));
      var wb = 1,
        Mb = arguments[1];
      if (Mb && "object" == typeof Mb && null == Mb.nodeType && !Array.isArray(Mb)) {
        for (var eb in Mb)
          if (Object.prototype.hasOwnProperty.call(Mb, eb)) {
            var pb = Mb[eb];
            "string" == typeof pb ? bb.setAttribute(eb, pb) : null != pb && (bb[eb] = pb)
          } wb++
      }
      for (; wb < arguments.length; wb++) Hb(bb, arguments[wb]);
      return bb
    }

    function Hb(bb, wb) {
      if ("string" == typeof wb) bb.appendChild(document.createTextNode(wb));
      else if (null == wb);
      else if (null != wb.nodeType) bb.appendChild(wb);
      else {
        if (!Array.isArray(wb)) throw new RangeError("Unsupported child node: " + wb);
        for (var Mb = 0; Mb < wb.length; Mb++) Hb(bb, wb[Mb])
      }
    }
    Mb.d(wb, {
      c: () => eb
    })
  },
  53517: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    const eb = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      Hb = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      pb = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class Vb {
      constructor(bb, wb) {
        this.rules = [];
        let {
          finish: Mb
        } = wb || {};

        function eb(bb) {
          return /^@/.test(bb) ? [bb] : bb.split(/,\s*/)
        }

        function Hb(bb, wb, pb, Vb) {
          let gb = [],
            lb = /^@(\w+)\b/.exec(bb[0]),
            Lb = lb && "keyframes" == lb[1];
          if (lb && null == wb) return pb.push(bb[0] + ";");
          for (let Mb in wb) {
            let Vb = wb[Mb];
            if (/&/.test(Mb)) Hb(Mb.split(/,\s*/).map((wb => bb.map((bb => wb.replace(/&/, bb))))).reduce(((bb, wb) => bb.concat(wb))), Vb, pb);
            else if (Vb && "object" == typeof Vb) {
              if (!lb) throw new RangeError("The value of a property (" + Mb + ") should be a primitive value.");
              Hb(eb(Mb), Vb, gb, Lb)
            } else null != Vb && gb.push(Mb.replace(/_.*/, "").replace(/[A-Z]/g, (bb => "-" + bb.toLowerCase())) + ": " + Vb + ";")
          }(gb.length || Lb) && pb.push((!Mb || lb || Vb ? bb : bb.map(Mb)).join(", ") + " {" + gb.join(" ") + "}")
        }
        for (let pb in bb) Hb(eb(pb), bb[pb], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let bb = pb[eb] || 1;
        return pb[eb] = bb + 1, "\u037c" + bb.toString(36)
      }
      static mount(bb, wb, Mb) {
        let eb = bb[Hb],
          pb = Mb && Mb.nonce;
        eb ? pb && eb.setNonce(pb) : eb = new lb(bb, pb), eb.mount(Array.isArray(wb) ? wb : [wb], bb)
      }
    }
    let gb = new Map;
    class lb {
      constructor(bb, wb) {
        let Mb = bb.ownerDocument || bb,
          eb = Mb.defaultView;
        if (!bb.head && bb.adoptedStyleSheets && eb.CSSStyleSheet) {
          let wb = gb.get(Mb);
          if (wb) return bb[Hb] = wb;
          this.sheet = new eb.CSSStyleSheet, gb.set(Mb, this)
        } else this.styleTag = Mb.createElement("style"), wb && this.styleTag.setAttribute("nonce", wb);
        this.modules = [], bb[Hb] = this
      }
      mount(bb, wb) {
        let Mb = this.sheet,
          eb = 0,
          Hb = 0;
        for (let pb = 0; pb < bb.length; pb++) {
          let wb = bb[pb],
            Vb = this.modules.indexOf(wb);
          if (Vb < Hb && Vb > -1 && (this.modules.splice(Vb, 1), Hb--, Vb = -1), -1 == Vb) {
            if (this.modules.splice(Hb++, 0, wb), Mb)
              for (let bb = 0; bb < wb.rules.length; bb++) Mb.insertRule(wb.rules[bb], eb++)
          } else {
            for (; Hb < Vb;) eb += this.modules[Hb++].rules.length;
            eb += wb.rules.length, Hb++
          }
        }
        if (Mb) wb.adoptedStyleSheets.indexOf(this.sheet) < 0 && (wb.adoptedStyleSheets = [this.sheet, ...wb.adoptedStyleSheets]);
        else {
          let bb = "";
          for (let wb = 0; wb < this.modules.length; wb++) bb += this.modules[wb].getRules() + "\n";
          this.styleTag.textContent = bb;
          let Mb = wb.head || wb;
          this.styleTag.parentNode != Mb && Mb.insertBefore(this.styleTag, Mb.firstChild)
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