export const id = 284;
export const ids = [284];
export const modules = {
  40733: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ec,
      f: () => hc,
      h: () => Cc,
      l: () => Ib,
      o: () => ic,
      r: () => Hb,
      u: () => Xc
    });
    var kb = sb(40738),
      Wb = sb(40744),
      ab = sb(40763);
    class Tb {
      constructor(bb, cb, sb, kb) {
        this.state = bb, this.pos = cb, this.explicit = sb, this.view = kb, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(bb) {
        let cb = (0, ab.lb)(this.state).resolveInner(this.pos, -1);
        for (; cb && bb.indexOf(cb.name) < 0;) cb = cb.parent;
        return cb ? {
          from: cb.from,
          to: this.pos,
          text: this.state.sliceDoc(cb.from, this.pos),
          type: cb.type
        } : null
      }
      matchBefore(bb) {
        let cb = this.state.doc.lineAt(this.pos),
          sb = Math.max(cb.from, this.pos - 250),
          kb = cb.text.slice(sb - cb.from, this.pos - cb.from),
          Wb = kb.search(Xb(bb, !1));
        return Wb < 0 ? null : {
          from: sb + Wb,
          to: this.pos,
          text: kb.slice(Wb)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(bb, cb, sb) {
        "abort" == bb && this.abortListeners && (this.abortListeners.push(cb), sb && sb.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function Ub(bb) {
      let cb = Object.keys(bb).join(""),
        sb = /\w/.test(cb);
      return sb && (cb = cb.replace(/\w/g, "")), `[${sb?"\\w":""}${cb.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function Ib(bb) {
      let cb = bb.map((bb => "string" == typeof bb ? {
          label: bb
        } : bb)),
        [sb, kb] = cb.every((bb => /^\w+$/.test(bb.label))) ? [/\w*$/, /\w+$/] : function(bb) {
          let cb = Object.create(null),
            sb = Object.create(null);
          for (let {
              label: Wb
            }
            of bb) {
            cb[Wb[0]] = !0;
            for (let bb = 1; bb < Wb.length; bb++) sb[Wb[bb]] = !0
          }
          let kb = Ub(cb) + Ub(sb) + "*$";
          return [new RegExp("^" + kb), new RegExp(kb)]
        }(cb);
      return bb => {
        let Wb = bb.matchBefore(kb);
        return Wb || bb.explicit ? {
          from: Wb ? Wb.from : bb.pos,
          options: cb,
          validFor: sb
        } : null
      }
    }

    function Hb(bb, cb) {
      return sb => {
        for (let cb = (0, ab.lb)(sb.state).resolveInner(sb.pos, -1); cb; cb = cb.parent) {
          if (bb.indexOf(cb.name) > -1) return null;
          if (cb.type.isTop) break
        }
        return cb(sb)
      }
    }
    class fb {
      constructor(bb, cb, sb, kb) {
        this.completion = bb, this.source = cb, this.match = sb, this.score = kb
      }
    }

    function Mb(bb) {
      return bb.selection.main.from
    }

    function Xb(bb, cb) {
      var sb;
      let {
        source: kb
      } = bb, Wb = cb && "^" != kb[0], ab = "$" != kb[kb.length - 1];
      return Wb || ab ? new RegExp(`${Wb?"^":""}(?:${kb})${ab?"$":""}`, null !== (sb = bb.flags) && void 0 !== sb ? sb : bb.ignoreCase ? "i" : "") : bb
    }
    const nb = kb.e.define();

    function mb(bb, cb, sb, Wb) {
      let {
        main: ab
      } = bb.selection, Tb = sb - ab.from, Ub = Wb - ab.from;
      return {
        ...bb.changeByRange((Ib => {
          if (Ib != ab && sb != Wb && bb.sliceDoc(Ib.from + Tb, Ib.from + Ub) != bb.sliceDoc(sb, Wb)) return {
            range: Ib
          };
          let Hb = bb.toText(cb);
          return {
            changes: {
              from: Ib.from + Tb,
              to: Wb == ab.from ? Ib.to : Ib.from + Ub,
              insert: Hb
            },
            range: kb.j.cursor(Ib.from + Tb + Hb.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const lb = new WeakMap;

    function Qb(bb) {
      if (!Array.isArray(bb)) return bb;
      let cb = lb.get(bb);
      return cb || lb.set(bb, cb = Ib(bb)), cb
    }
    const eb = kb.F.define(),
      Cb = kb.F.define();
    class Nb {
      constructor(bb) {
        this.pattern = bb, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let cb = 0; cb < bb.length;) {
          let sb = (0, kb.S)(bb, cb),
            Wb = (0, kb.V)(sb);
          this.chars.push(sb);
          let ab = bb.slice(cb, cb + Wb),
            Tb = ab.toUpperCase();
          this.folded.push((0, kb.S)(Tb == ab ? ab.toLowerCase() : Tb, 0)), cb += Wb
        }
        this.astral = bb.length != this.chars.length
      }
      ret(bb, cb) {
        return this.score = bb, this.matched = cb, this
      }
      match(bb) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (bb.length < this.pattern.length) return null;
        let {
          chars: cb,
          folded: sb,
          any: Wb,
          precise: ab,
          byWord: Tb
        } = this;
        if (1 == cb.length) {
          let Wb = (0, kb.S)(bb, 0),
            ab = (0, kb.V)(Wb),
            Tb = ab == bb.length ? 0 : -100;
          if (Wb == cb[0]);
          else {
            if (Wb != sb[0]) return null;
            Tb += -200
          }
          return this.ret(Tb, [0, ab])
        }
        let Ub = bb.indexOf(this.pattern);
        if (0 == Ub) return this.ret(bb.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let Ib = cb.length,
          Hb = 0;
        if (Ub < 0) {
          for (let ab = 0, Tb = Math.min(bb.length, 200); ab < Tb && Hb < Ib;) {
            let Tb = (0, kb.S)(bb, ab);
            Tb != cb[Hb] && Tb != sb[Hb] || (Wb[Hb++] = ab), ab += (0, kb.V)(Tb)
          }
          if (Hb < Ib) return null
        }
        let fb = 0,
          Mb = 0,
          Xb = !1,
          nb = 0,
          mb = -1,
          lb = -1,
          Qb = /[a-z]/.test(bb),
          eb = !0;
        for (let Cb = 0, Nb = Math.min(bb.length, 200), Vb = 0; Cb < Nb && Mb < Ib;) {
          let Wb = (0, kb.S)(bb, Cb);
          Ub < 0 && (fb < Ib && Wb == cb[fb] && (ab[fb++] = Cb), nb < Ib && (Wb == cb[nb] || Wb == sb[nb] ? (0 == nb && (mb = Cb), lb = Cb + 1, nb++) : nb = 0));
          let Hb, Nb = Wb < 255 ? Wb >= 48 && Wb <= 57 || Wb >= 97 && Wb <= 122 ? 2 : Wb >= 65 && Wb <= 90 ? 1 : 0 : (Hb = (0, kb.db)(Wb)) != Hb.toLowerCase() ? 1 : Hb != Hb.toUpperCase() ? 2 : 0;
          (!Cb || 1 == Nb && Qb || 0 == Vb && 0 != Nb) && (cb[Mb] == Wb || sb[Mb] == Wb && (Xb = !0) ? Tb[Mb++] = Cb : Tb.length && (eb = !1)), Vb = Nb, Cb += (0, kb.V)(Wb)
        }
        return Mb == Ib && 0 == Tb[0] && eb ? this.result((Xb ? -200 : 0) - 100, Tb, bb) : nb == Ib && 0 == mb ? this.ret(-200 - bb.length + (lb == bb.length ? 0 : -100), [0, lb]) : Ub > -1 ? this.ret(-700 - bb.length, [Ub, Ub + this.pattern.length]) : nb == Ib ? this.ret(-900 - bb.length, [mb, lb]) : Mb == Ib ? this.result((Xb ? -200 : 0) - 100 - 700 + (eb ? 0 : -1100), Tb, bb) : 2 == cb.length ? null : this.result((Wb[0] ? -700 : 0) - 200 - 1100, Wb, bb)
      }
      result(bb, cb, sb) {
        let Wb = [],
          ab = 0;
        for (let Tb of cb) {
          let bb = Tb + (this.astral ? (0, kb.V)((0, kb.S)(sb, Tb)) : 1);
          ab && Wb[ab - 1] == Tb ? Wb[ab - 1] = bb : (Wb[ab++] = Tb, Wb[ab++] = bb)
        }
        return this.ret(bb - sb.length, Wb)
      }
    }
    class Vb {
      constructor(bb) {
        this.pattern = bb, this.matched = [], this.score = 0, this.folded = bb.toLowerCase()
      }
      match(bb) {
        if (bb.length < this.pattern.length) return null;
        let cb = bb.slice(0, this.pattern.length),
          sb = cb == this.pattern ? 0 : cb.toLowerCase() == this.folded ? -200 : null;
        return null == sb ? null : (this.matched = [0, cb.length], this.score = sb + (bb.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const Lb = kb.n.define({
      combine: bb => (0, kb.X)(bb, {
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
        positionInfo: Yb,
        filterStrict: !1,
        compareCompletions: (bb, cb) => (bb.sortText || bb.label).localeCompare(cb.sortText || cb.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (bb, cb) => bb && cb,
        closeOnBlur: (bb, cb) => bb && cb,
        icons: (bb, cb) => bb && cb,
        tooltipClass: (bb, cb) => sb => ub(bb(sb), cb(sb)),
        optionClass: (bb, cb) => sb => ub(bb(sb), cb(sb)),
        addToOptions: (bb, cb) => bb.concat(cb),
        filterStrict: (bb, cb) => bb || cb
      })
    });

    function ub(bb, cb) {
      return bb ? cb ? bb + " " + cb : bb : cb
    }

    function Yb(bb, cb, sb, kb, ab, Tb) {
      let Ub, Ib, Hb = bb.textDirection == Wb.g.RTL,
        fb = Hb,
        Mb = !1,
        Xb = "top",
        nb = cb.left - ab.left,
        mb = ab.right - cb.right,
        lb = kb.right - kb.left,
        Qb = kb.bottom - kb.top;
      if (fb && nb < Math.min(lb, mb) ? fb = !1 : !fb && mb < Math.min(lb, nb) && (fb = !0), lb <= (fb ? nb : mb)) Ub = Math.max(ab.top, Math.min(sb.top, ab.bottom - Qb)) - cb.top, Ib = Math.min(400, fb ? nb : mb);
      else {
        Mb = !0, Ib = Math.min(400, (Hb ? cb.right : ab.right - cb.left) - 30);
        let bb = ab.bottom - cb.bottom;
        bb >= Qb || bb > cb.top ? Ub = sb.bottom - cb.top : (Xb = "bottom", Ub = cb.bottom - sb.top)
      }
      return {
        style: `${Xb}: ${Ub/((cb.bottom-cb.top)/Tb.offsetHeight)}px; max-width: ${Ib/((cb.right-cb.left)/Tb.offsetWidth)}px`,
        class: "cm-completionInfo-" + (Mb ? Hb ? "left-narrow" : "right-narrow" : fb ? "left" : "right")
      }
    }
    const hb = kb.F.define();

    function Jb(bb, cb, sb) {
      if (bb <= sb) return {
        from: 0,
        to: bb
      };
      if (cb < 0 && (cb = 0), cb <= bb >> 1) {
        let bb = Math.floor(cb / sb);
        return {
          from: bb * sb,
          to: (bb + 1) * sb
        }
      }
      let kb = Math.floor((bb - cb) / sb);
      return {
        from: bb - (kb + 1) * sb,
        to: bb - kb * sb
      }
    }
    class gb {
      constructor(bb, cb, sb) {
        this.view = bb, this.stateField = cb, this.applyCompletion = sb, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: bb => this.placeInfo(bb),
          key: this
        }, this.space = null, this.currentClass = "";
        let kb = bb.state.field(cb),
          {
            options: Wb,
            selected: ab
          } = kb.open,
          Tb = bb.state.facet(Lb);
        this.optionContent = function(bb) {
          let cb = bb.addToOptions.slice();
          return bb.icons && cb.push({
            render(bb) {
              let cb = document.createElement("div");
              return cb.classList.add("cm-completionIcon"), bb.type && cb.classList.add(...bb.type.split(/\s+/g).map((bb => "cm-completionIcon-" + bb))), cb.setAttribute("aria-hidden", "true"), cb
            },
            position: 20
          }), cb.push({
            render(bb, cb, sb, kb) {
              let Wb = document.createElement("span");
              Wb.className = "cm-completionLabel";
              let ab = bb.displayLabel || bb.label,
                Tb = 0;
              for (let Ub = 0; Ub < kb.length;) {
                let bb = kb[Ub++],
                  cb = kb[Ub++];
                bb > Tb && Wb.appendChild(document.createTextNode(ab.slice(Tb, bb)));
                let sb = Wb.appendChild(document.createElement("span"));
                sb.appendChild(document.createTextNode(ab.slice(bb, cb))), sb.className = "cm-completionMatchedText", Tb = cb
              }
              return Tb < ab.length && Wb.appendChild(document.createTextNode(ab.slice(Tb))), Wb
            },
            position: 50
          }, {
            render(bb) {
              if (!bb.detail) return null;
              let cb = document.createElement("span");
              return cb.className = "cm-completionDetail", cb.textContent = bb.detail, cb
            },
            position: 80
          }), cb.sort(((bb, cb) => bb.position - cb.position)).map((bb => bb.render))
        }(Tb), this.optionClass = Tb.optionClass, this.tooltipClass = Tb.tooltipClass, this.range = Jb(Wb.length, ab, Tb.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(bb.state), this.dom.addEventListener("mousedown", (sb => {
          let {
            options: kb
          } = bb.state.field(cb).open;
          for (let cb, Wb = sb.target; Wb && Wb != this.dom; Wb = Wb.parentNode)
            if ("LI" == Wb.nodeName && (cb = /-(\d+)$/.exec(Wb.id)) && +cb[1] < kb.length) return this.applyCompletion(bb, kb[+cb[1]]), void sb.preventDefault();
          if (sb.target == this.list) {
            let cb = this.list.classList.contains("cm-completionListIncompleteTop") && sb.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && sb.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != cb && (bb.dispatch({
              effects: hb.of(cb)
            }), sb.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (cb => {
          let sb = bb.state.field(this.stateField, !1);
          sb && sb.tooltip && bb.state.facet(Lb).closeOnBlur && cb.relatedTarget != bb.contentDOM && bb.dispatch({
            effects: Cb.of(null)
          })
        })), this.showOptions(Wb, kb.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(bb, cb) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(bb, cb, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(bb) {
        var cb;
        let sb = bb.state.field(this.stateField),
          kb = bb.startState.field(this.stateField);
        if (this.updateTooltipClass(bb.state), sb != kb) {
          let {
            options: Wb,
            selected: ab,
            disabled: Tb
          } = sb.open;
          kb.open && kb.open.options == Wb || (this.range = Jb(Wb.length, ab, bb.state.facet(Lb).maxRenderedOptions), this.showOptions(Wb, sb.id)), this.updateSel(), Tb != (null === (cb = kb.open) || void 0 === cb ? void 0 : cb.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!Tb)
        }
      }
      updateTooltipClass(bb) {
        let cb = this.tooltipClass(bb);
        if (cb != this.currentClass) {
          for (let bb of this.currentClass.split(" ")) bb && this.dom.classList.remove(bb);
          for (let bb of cb.split(" ")) bb && this.dom.classList.add(bb);
          this.currentClass = cb
        }
      }
      positioned(bb) {
        this.space = bb, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let bb = this.view.state.field(this.stateField),
          cb = bb.open;
        (cb.selected > -1 && cb.selected < this.range.from || cb.selected >= this.range.to) && (this.range = Jb(cb.options.length, cb.selected, this.view.state.facet(Lb).maxRenderedOptions), this.showOptions(cb.options, bb.id));
        let sb = this.updateSelectedOption(cb.selected);
        if (sb) {
          this.destroyInfo();
          let {
            completion: kb
          } = cb.options[cb.selected], {
            info: ab
          } = kb;
          if (!ab) return;
          let Tb = "string" === typeof ab ? document.createTextNode(ab) : ab(kb);
          if (!Tb) return;
          "then" in Tb ? Tb.then((cb => {
            cb && this.view.state.field(this.stateField, !1) == bb && this.addInfoPane(cb, kb)
          })).catch((bb => (0, Wb.ab)(this.view.state, bb, "completion info"))) : (this.addInfoPane(Tb, kb), sb.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(bb, cb) {
        this.destroyInfo();
        let sb = this.info = document.createElement("div");
        if (sb.className = "cm-tooltip cm-completionInfo", sb.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != bb.nodeType) sb.appendChild(bb), this.infoDestroy = null;
        else {
          let {
            dom: cb,
            destroy: kb
          } = bb;
          sb.appendChild(cb), this.infoDestroy = kb || null
        }
        this.dom.appendChild(sb), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(bb) {
        let cb = null;
        for (let sb = this.list.firstChild, kb = this.range.from; sb; sb = sb.nextSibling, kb++) "LI" == sb.nodeName && sb.id ? kb == bb ? sb.hasAttribute("aria-selected") || (sb.setAttribute("aria-selected", "true"), cb = sb) : sb.hasAttribute("aria-selected") && (sb.removeAttribute("aria-selected"), sb.removeAttribute("aria-describedby")) : kb--;
        return cb && function(bb, cb) {
          let sb = bb.getBoundingClientRect(),
            kb = cb.getBoundingClientRect(),
            Wb = sb.height / bb.offsetHeight;
          kb.top < sb.top ? bb.scrollTop -= (sb.top - kb.top) / Wb : kb.bottom > sb.bottom && (bb.scrollTop += (kb.bottom - sb.bottom) / Wb)
        }(this.list, cb), cb
      }
      measureInfo() {
        let bb = this.dom.querySelector("[aria-selected]");
        if (!bb || !this.info) return null;
        let cb = this.dom.getBoundingClientRect(),
          sb = this.info.getBoundingClientRect(),
          kb = bb.getBoundingClientRect(),
          Wb = this.space;
        if (!Wb) {
          let bb = this.dom.ownerDocument.documentElement;
          Wb = {
            left: 0,
            top: 0,
            right: bb.clientWidth,
            bottom: bb.clientHeight
          }
        }
        return kb.top > Math.min(Wb.bottom, cb.bottom) - 10 || kb.bottom < Math.max(Wb.top, cb.top) + 10 ? null : this.view.state.facet(Lb).positionInfo(this.view, cb, kb, sb, Wb, this.dom)
      }
      placeInfo(bb) {
        this.info && (bb ? (bb.style && (this.info.style.cssText = bb.style), this.info.className = "cm-tooltip cm-completionInfo " + (bb.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(bb, cb, sb) {
        const kb = document.createElement("ul");
        kb.id = cb, kb.setAttribute("role", "listbox"), kb.setAttribute("aria-expanded", "true"), kb.setAttribute("aria-label", this.view.state.phrase("Completions")), kb.addEventListener("mousedown", (bb => {
          bb.target == kb && bb.preventDefault()
        }));
        let Wb = null;
        for (let ab = sb.from; ab < sb.to; ab++) {
          let {
            completion: Tb,
            match: Ub
          } = bb[ab], {
            section: Ib
          } = Tb;
          if (Ib) {
            let bb = "string" == typeof Ib ? Ib : Ib.name;
            if (bb != Wb && (ab > sb.from || 0 == sb.from))
              if (Wb = bb, "string" != typeof Ib && Ib.header) kb.appendChild(Ib.header(Ib));
              else {
                kb.appendChild(document.createElement("completion-section")).textContent = bb
              }
          }
          const Hb = kb.appendChild(document.createElement("li"));
          Hb.id = cb + "-" + ab, Hb.setAttribute("role", "option");
          let fb = this.optionClass(Tb);
          fb && (Hb.className = fb);
          for (let bb of this.optionContent) {
            let cb = bb(Tb, this.view.state, this.view, Ub);
            cb && Hb.appendChild(cb)
          }
        }
        return sb.from && kb.classList.add("cm-completionListIncompleteTop"), sb.to < bb.length && kb.classList.add("cm-completionListIncompleteBottom"), kb
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Bb(bb, cb) {
      return sb => new gb(sb, bb, cb)
    }

    function tb(bb) {
      return 100 * (bb.boost || 0) + (bb.apply ? 10 : 0) + (bb.info ? 5 : 0) + (bb.type ? 1 : 0)
    }
    class yb {
      constructor(bb, cb, sb, kb, Wb, ab) {
        this.options = bb, this.attrs = cb, this.tooltip = sb, this.timestamp = kb, this.selected = Wb, this.disabled = ab
      }
      setSelected(bb, cb) {
        return bb == this.selected || bb >= this.options.length ? this : new yb(this.options, ib(cb, bb), this.tooltip, this.timestamp, bb, this.disabled)
      }
      static build(bb, cb, sb, kb, Wb, ab) {
        if (kb && !ab && bb.some((bb => bb.isPending))) return kb.setDisabled();
        let Tb = function(bb, cb) {
          let sb = [],
            kb = null,
            Wb = null,
            ab = bb => {
              sb.push(bb);
              let {
                section: cb
              } = bb.completion;
              if (cb) {
                kb || (kb = []);
                let bb = "string" == typeof cb ? cb : cb.name;
                kb.some((cb => cb.name == bb)) || kb.push("string" == typeof cb ? {
                  name: bb
                } : cb)
              }
            },
            Tb = cb.facet(Lb);
          for (let Mb of bb)
            if (Mb.hasResult()) {
              let bb = Mb.result.getMatch;
              if (!1 === Mb.result.filter)
                for (let cb of Mb.result.options) ab(new fb(cb, Mb.source, bb ? bb(cb) : [], 1e9 - sb.length));
              else {
                let sb, kb = cb.sliceDoc(Mb.from, Mb.to),
                  Ub = Tb.filterStrict ? new Vb(kb) : new Nb(kb);
                for (let cb of Mb.result.options)
                  if (sb = Ub.match(cb.label)) {
                    let kb = cb.displayLabel ? bb ? bb(cb, sb.matched) : [] : sb.matched,
                      Tb = sb.score + (cb.boost || 0);
                    if (ab(new fb(cb, Mb.source, kb, Tb)), "object" == typeof cb.section && "dynamic" === cb.section.rank) {
                      let {
                        name: bb
                      } = cb.section;
                      Wb || (Wb = Object.create(null)), Wb[bb] = Math.max(Tb, Wb[bb] || -1e9)
                    }
                  }
              }
            } if (kb) {
            let bb = Object.create(null),
              cb = 0,
              ab = (bb, cb) => ("dynamic" === bb.rank && "dynamic" === cb.rank ? Wb[cb.name] - Wb[bb.name] : 0) || ("number" == typeof bb.rank ? bb.rank : 1e9) - ("number" == typeof cb.rank ? cb.rank : 1e9) || (bb.name < cb.name ? -1 : 1);
            for (let sb of kb.sort(ab)) cb -= 1e5, bb[sb.name] = cb;
            for (let kb of sb) {
              let {
                section: cb
              } = kb.completion;
              cb && (kb.score += bb["string" == typeof cb ? cb : cb.name])
            }
          }
          let Ub = [],
            Ib = null,
            Hb = Tb.compareCompletions;
          for (let fb of sb.sort(((bb, cb) => cb.score - bb.score || Hb(bb.completion, cb.completion)))) {
            let bb = fb.completion;
            !Ib || Ib.label != bb.label || Ib.detail != bb.detail || null != Ib.type && null != bb.type && Ib.type != bb.type || Ib.apply != bb.apply || Ib.boost != bb.boost ? Ub.push(fb) : tb(fb.completion) > tb(Ib) && (Ub[Ub.length - 1] = fb), Ib = fb.completion
          }
          return Ub
        }(bb, cb);
        if (!Tb.length) return kb && bb.some((bb => bb.isPending)) ? kb.setDisabled() : null;
        let Ub = cb.facet(Lb).selectOnOpen ? 0 : -1;
        if (kb && kb.selected != Ub && -1 != kb.selected) {
          let bb = kb.options[kb.selected].completion;
          for (let cb = 0; cb < Tb.length; cb++)
            if (Tb[cb].completion == bb) {
              Ub = cb;
              break
            }
        }
        return new yb(Tb, ib(sb, Ub), {
          pos: bb.reduce(((bb, cb) => cb.hasResult() ? Math.min(bb, cb.from) : bb), 1e8),
          create: Ab,
          above: Wb.aboveCursor
        }, kb ? kb.timestamp : Date.now(), Ub, !1)
      }
      map(bb) {
        return new yb(this.options, this.attrs, {
          ...this.tooltip,
          pos: bb.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new yb(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class Pb {
      constructor(bb, cb, sb) {
        this.active = bb, this.id = cb, this.open = sb
      }
      static start() {
        return new Pb(Ob, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(bb) {
        let {
          state: cb
        } = bb, sb = cb.facet(Lb), kb = (sb.override || cb.languageDataAt("autocomplete", Mb(cb)).map(Qb)).map((cb => (this.active.find((bb => bb.source == cb)) || new Kb(cb, this.active.some((bb => 0 != bb.state)) ? 1 : 0)).update(bb, sb)));
        kb.length == this.active.length && kb.every(((bb, cb) => bb == this.active[cb])) && (kb = this.active);
        let Wb = this.open,
          ab = bb.effects.some((bb => bb.is(zb)));
        Wb && bb.docChanged && (Wb = Wb.map(bb.changes)), bb.selection || kb.some((cb => cb.hasResult() && bb.changes.touchesRange(cb.from, cb.to))) || ! function(bb, cb) {
          if (bb == cb) return !0;
          for (let sb = 0, kb = 0;;) {
            for (; sb < bb.length && !bb[sb].hasResult();) sb++;
            for (; kb < cb.length && !cb[kb].hasResult();) kb++;
            let Wb = sb == bb.length,
              ab = kb == cb.length;
            if (Wb || ab) return Wb == ab;
            if (bb[sb++].result != cb[kb++].result) return !1
          }
        }(kb, this.active) || ab ? Wb = yb.build(kb, cb, this.id, Wb, sb, ab) : Wb && Wb.disabled && !kb.some((bb => bb.isPending)) && (Wb = null), !Wb && kb.every((bb => !bb.isPending)) && kb.some((bb => bb.hasResult())) && (kb = kb.map((bb => bb.hasResult() ? new Kb(bb.source, 0) : bb)));
        for (let Tb of bb.effects) Tb.is(hb) && (Wb = Wb && Wb.setSelected(Tb.value, this.id));
        return kb == this.active && Wb == this.open ? this : new Pb(kb, this.id, Wb)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Db : Eb
      }
    }
    const Db = {
        "aria-autocomplete": "list"
      },
      Eb = {};

    function ib(bb, cb) {
      let sb = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": bb
      };
      return cb > -1 && (sb["aria-activedescendant"] = bb + "-" + cb), sb
    }
    const Ob = [];

    function Gb(bb, cb) {
      if (bb.isUserEvent("input.complete")) {
        let sb = bb.annotation(nb);
        if (sb && cb.activateOnCompletion(sb)) return 12
      }
      let sb = bb.isUserEvent("input.type");
      return sb && cb.activateOnTyping ? 5 : sb ? 1 : bb.isUserEvent("delete.backward") ? 2 : bb.selection ? 8 : bb.docChanged ? 16 : 0
    }
    class Kb {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = bb, this.state = cb, this.explicit = sb
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(bb, cb) {
        let sb = Gb(bb, cb),
          kb = this;
        (8 & sb || 16 & sb && this.touches(bb)) && (kb = new Kb(kb.source, 0)), 4 & sb && 0 == kb.state && (kb = new Kb(this.source, 1)), kb = kb.updateFor(bb, sb);
        for (let Wb of bb.effects)
          if (Wb.is(eb)) kb = new Kb(kb.source, 1, Wb.value);
          else if (Wb.is(Cb)) kb = new Kb(kb.source, 0);
        else if (Wb.is(zb))
          for (let bb of Wb.value) bb.source == kb.source && (kb = bb);
        return kb
      }
      updateFor(bb, cb) {
        return this.map(bb.changes)
      }
      map(bb) {
        return this
      }
      touches(bb) {
        return bb.changes.touchesRange(Mb(bb.state))
      }
    }
    class Zb extends Kb {
      constructor(bb, cb, sb, kb, Wb, ab) {
        super(bb, 3, cb), this.limit = sb, this.result = kb, this.from = Wb, this.to = ab
      }
      hasResult() {
        return !0
      }
      updateFor(bb, cb) {
        var sb;
        if (!(3 & cb)) return this.map(bb.changes);
        let kb = this.result;
        kb.map && !bb.changes.empty && (kb = kb.map(kb, bb.changes));
        let Wb = bb.changes.mapPos(this.from),
          ab = bb.changes.mapPos(this.to, 1),
          Ub = Mb(bb.state);
        if (Ub > ab || !kb || 2 & cb && (Mb(bb.startState) == this.from || Ub < this.limit)) return new Kb(this.source, 4 & cb ? 1 : 0);
        let Ib = bb.changes.mapPos(this.limit);
        return function(bb, cb, sb, kb) {
          if (!bb) return !1;
          let Wb = cb.sliceDoc(sb, kb);
          return "function" == typeof bb ? bb(Wb, sb, kb, cb) : Xb(bb, !0).test(Wb)
        }(kb.validFor, bb.state, Wb, ab) ? new Zb(this.source, this.explicit, Ib, kb, Wb, ab) : kb.update && (kb = kb.update(kb, Wb, ab, new Tb(bb.state, Ub, !1))) ? new Zb(this.source, this.explicit, Ib, kb, kb.from, null !== (sb = kb.to) && void 0 !== sb ? sb : Mb(bb.state)) : new Kb(this.source, 1, this.explicit)
      }
      map(bb) {
        if (bb.empty) return this;
        return (this.result.map ? this.result.map(this.result, bb) : this.result) ? new Zb(this.source, this.explicit, bb.mapPos(this.limit), this.result, bb.mapPos(this.from), bb.mapPos(this.to, 1)) : new Kb(this.source, 0)
      }
      touches(bb) {
        return bb.changes.touchesRange(this.from, this.to)
      }
    }
    const zb = kb.F.define({
        map: (bb, cb) => bb.map((bb => bb.map(cb)))
      }),
      qb = kb.H.define({
        create: () => Pb.start(),
        update: (bb, cb) => bb.update(cb),
        provide: bb => [Wb.pb.from(bb, (bb => bb.tooltip)), Wb.h.contentAttributes.from(bb, (bb => bb.attrs))]
      });

    function db(bb, cb) {
      const sb = cb.completion.apply || cb.completion.label;
      let kb = bb.state.field(qb).active.find((bb => bb.source == cb.source));
      return kb instanceof Zb && ("string" == typeof sb ? bb.dispatch({
        ...mb(bb.state, sb, kb.from, kb.to),
        annotations: nb.of(cb.completion)
      }) : sb(bb, cb.completion, kb.from, kb.to), !0)
    }
    const Ab = Bb(qb, db);

    function wb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return sb => {
        let kb = sb.state.field(qb, !1);
        if (!kb || !kb.open || kb.open.disabled || Date.now() - kb.open.timestamp < sb.state.facet(Lb).interactionDelay) return !1;
        let ab, Tb = 1;
        "page" == cb && (ab = (0, Wb.G)(sb, kb.open.tooltip)) && (Tb = Math.max(2, Math.floor(ab.dom.offsetHeight / ab.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: Ub
        } = kb.open.options, Ib = kb.open.selected > -1 ? kb.open.selected + Tb * (bb ? 1 : -1) : bb ? 0 : Ub - 1;
        return Ib < 0 ? Ib = "page" == cb ? 0 : Ub - 1 : Ib >= Ub && (Ib = "page" == cb ? Ub - 1 : 0), sb.dispatch({
          effects: hb.of(Ib)
        }), !0
      }
    }
    const rb = bb => !!bb.state.field(qb, !1) && (bb.dispatch({
      effects: eb.of(!0)
    }), !0);
    class ob {
      constructor(bb, cb) {
        this.active = bb, this.context = cb, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const Sb = Wb.m.fromClass(class {
        constructor(bb) {
          this.view = bb, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let cb of bb.state.field(qb).active) cb.isPending && this.startQuery(cb)
        }
        update(bb) {
          let cb = bb.state.field(qb),
            sb = bb.state.facet(Lb);
          if (!bb.selectionSet && !bb.docChanged && bb.startState.field(qb) == cb) return;
          let kb = bb.transactions.some((bb => {
            let cb = Gb(bb, sb);
            return 8 & cb || (bb.selection || bb.docChanged) && !(3 & cb)
          }));
          for (let Ub = 0; Ub < this.running.length; Ub++) {
            let cb = this.running[Ub];
            if (kb || cb.context.abortOnDocChange && bb.docChanged || cb.updates.length + bb.transactions.length > 50 && Date.now() - cb.time > 1e3) {
              for (let bb of cb.context.abortListeners) try {
                bb()
              } catch (Tb) {
                (0, Wb.ab)(this.view.state, Tb)
              }
              cb.context.abortListeners = null, this.running.splice(Ub--, 1)
            } else cb.updates.push(...bb.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), bb.transactions.some((bb => bb.effects.some((bb => bb.is(eb))))) && (this.pendingStart = !0);
          let ab = this.pendingStart ? 50 : sb.activateOnTypingDelay;
          if (this.debounceUpdate = cb.active.some((bb => bb.isPending && !this.running.some((cb => cb.active.source == bb.source)))) ? setTimeout((() => this.startUpdate()), ab) : -1, 0 != this.composing)
            for (let Wb of bb.transactions) Wb.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && Wb.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: bb
          } = this.view, cb = bb.field(qb);
          for (let sb of cb.active) sb.isPending && !this.running.some((bb => bb.active.source == sb.source)) && this.startQuery(sb);
          this.running.length && cb.open && cb.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Lb).updateSyncTime))
        }
        startQuery(bb) {
          let {
            state: cb
          } = this.view, sb = Mb(cb), kb = new Tb(cb, sb, bb.explicit, this.view), ab = new ob(bb, kb);
          this.running.push(ab), Promise.resolve(bb.source(kb)).then((bb => {
            ab.context.aborted || (ab.done = bb || null, this.scheduleAccept())
          }), (bb => {
            this.view.dispatch({
              effects: Cb.of(null)
            }), (0, Wb.ab)(this.view.state, bb)
          }))
        }
        scheduleAccept() {
          this.running.every((bb => void 0 !== bb.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Lb).updateSyncTime))
        }
        accept() {
          var bb;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let cb = [],
            sb = this.view.state.facet(Lb),
            kb = this.view.state.field(qb);
          for (let Wb = 0; Wb < this.running.length; Wb++) {
            let ab = this.running[Wb];
            if (void 0 === ab.done) continue;
            if (this.running.splice(Wb--, 1), ab.done) {
              let kb = Mb(ab.updates.length ? ab.updates[0].startState : this.view.state),
                Wb = Math.min(kb, ab.done.from + (ab.active.explicit ? 0 : 1)),
                Tb = new Zb(ab.active.source, ab.active.explicit, Wb, ab.done, ab.done.from, null !== (bb = ab.done.to) && void 0 !== bb ? bb : kb);
              for (let bb of ab.updates) Tb = Tb.update(bb, sb);
              if (Tb.hasResult()) {
                cb.push(Tb);
                continue
              }
            }
            let Tb = kb.active.find((bb => bb.source == ab.active.source));
            if (Tb && Tb.isPending)
              if (null == ab.done) {
                let bb = new Kb(ab.active.source, 0);
                for (let cb of ab.updates) bb = bb.update(cb, sb);
                bb.isPending || cb.push(bb)
              } else this.startQuery(Tb)
          }(cb.length || kb.open && kb.open.disabled) && this.view.dispatch({
            effects: zb.of(cb)
          })
        }
      }, {
        eventHandlers: {
          blur(bb) {
            let cb = this.view.state.field(qb, !1);
            if (cb && cb.tooltip && this.view.state.facet(Lb).closeOnBlur) {
              let sb = cb.open && (0, Wb.G)(this.view, cb.open.tooltip);
              sb && sb.dom.contains(bb.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: Cb.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: eb.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      Rb = "object" == typeof navigator && /Win/.test(navigator.platform),
      vb = kb.s.highest(Wb.h.domEventHandlers({
        keydown(bb, cb) {
          let sb = cb.state.field(qb, !1);
          if (!sb || !sb.open || sb.open.disabled || sb.open.selected < 0 || bb.key.length > 1 || bb.ctrlKey && (!Rb || !bb.altKey) || bb.metaKey) return !1;
          let kb = sb.open.options[sb.open.selected],
            Wb = sb.active.find((bb => bb.source == kb.source)),
            ab = kb.completion.commitCharacters || Wb.result.commitCharacters;
          return ab && ab.indexOf(bb.key) > -1 && db(cb, kb), !1
        }
      })),
      Fb = Wb.h.baseTheme({
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
    class xb {
      constructor(bb, cb, sb, kb) {
        this.field = bb, this.line = cb, this.from = sb, this.to = kb
      }
    }
    class jb {
      constructor(bb, cb, sb) {
        this.field = bb, this.from = cb, this.to = sb
      }
      map(bb) {
        let cb = bb.mapPos(this.from, -1, kb.r.TrackDel),
          sb = bb.mapPos(this.to, 1, kb.r.TrackDel);
        return null == cb || null == sb ? null : new jb(this.field, cb, sb)
      }
    }
    class pb {
      constructor(bb, cb) {
        this.lines = bb, this.fieldPositions = cb
      }
      instantiate(bb, cb) {
        let sb = [],
          kb = [cb],
          Wb = bb.doc.lineAt(cb),
          Tb = /^\s*/.exec(Wb.text)[0];
        for (let Ib of this.lines) {
          if (sb.length) {
            let sb = Tb,
              Wb = /^\t*/.exec(Ib)[0].length;
            for (let cb = 0; cb < Wb; cb++) sb += bb.facet(ab.db);
            kb.push(cb + sb.length - Wb), Ib = sb + Ib.slice(Wb)
          }
          sb.push(Ib), cb += Ib.length + 1
        }
        let Ub = this.fieldPositions.map((bb => new jb(bb.field, kb[bb.line] + bb.from, kb[bb.line] + bb.to)));
        return {
          text: sb,
          uQ: Ub
        }
      }
      static parse(bb) {
        let cb, sb = [],
          kb = [],
          Wb = [];
        for (let ab of bb.split(/\r\n?|\n/)) {
          for (; cb = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(ab);) {
            let bb = cb[1] ? +cb[1] : null,
              Tb = cb[2] || cb[3] || "",
              Ub = -1,
              Ib = Tb.replace(/\\[{}]/g, (bb => bb[1]));
            for (let cb = 0; cb < sb.length; cb++)(null != bb ? sb[cb].seq == bb : Ib && sb[cb].name == Ib) && (Ub = cb);
            if (Ub < 0) {
              let cb = 0;
              for (; cb < sb.length && (null == bb || null != sb[cb].seq && sb[cb].seq < bb);) cb++;
              sb.splice(cb, 0, {
                seq: bb,
                name: Ib
              }), Ub = cb;
              for (let bb of Wb) bb.field >= Ub && bb.field++
            }
            for (let sb of Wb)
              if (sb.line == kb.length && sb.from > cb.index) {
                let bb = cb[2] ? 3 + (cb[1] || "").length : 2;
                sb.from -= bb, sb.to -= bb
              } Wb.push(new xb(Ub, kb.length, cb.index, cb.index + Ib.length)), ab = ab.slice(0, cb.index) + Tb + ab.slice(cb.index + cb[0].length)
          }
          ab = ab.replace(/\\([{}])/g, ((bb, cb, sb) => {
            for (let ab of Wb) ab.line == kb.length && ab.from > sb && (ab.from--, ab.to--);
            return cb
          })), kb.push(ab)
        }
        return new pb(kb, Wb)
      }
    }
    let bc = Wb.e.widget({
        widget: new class extends Wb.p {
          toDOM() {
            let bb = document.createElement("span");
            return bb.className = "cm-snippetFieldPosition", bb
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      cc = Wb.e.mark({
        class: "cm-snippetField"
      });
    class sc {
      constructor(bb, cb) {
        this.uQ = bb, this.active = cb, this.deco = Wb.e.set(bb.map((bb => (bb.from == bb.to ? bc : cc).range(bb.from, bb.to))), !0)
      }
      map(bb) {
        let cb = [];
        for (let sb of this.uQ) {
          let kb = sb.map(bb);
          if (!kb) return null;
          cb.push(kb)
        }
        return new sc(cb, this.active)
      }
      selectionInsideField(bb) {
        return bb.uQ.every((bb => this.uQ.some((cb => cb.field == this.active && cb.from <= bb.from && cb.to >= bb.to))))
      }
    }
    const kc = kb.F.define({
        map: (bb, cb) => bb && bb.map(cb)
      }),
      Wc = kb.F.define(),
      ac = kb.H.define({
        create: () => null,
        update(bb, cb) {
          for (let sb of cb.effects) {
            if (sb.is(kc)) return sb.value;
            if (sb.is(Wc) && bb) return new sc(bb.uQ, sb.value)
          }
          return bb && cb.docChanged && (bb = bb.map(cb.changes)), bb && cb.selection && !bb.selectionInsideField(cb.selection) && (bb = null), bb
        },
        provide: bb => Wb.h.aW.from(bb, (bb => bb ? bb.deco : Wb.e.none))
      });

    function Tc(bb, cb) {
      return kb.j.create(bb.filter((bb => bb.field == cb)).map((bb => kb.j.range(bb.from, bb.to))))
    }

    function Uc(bb) {
      let cb = pb.parse(bb);
      return (bb, sb, Wb, ab) => {
        let {
          text: Tb,
          uQ: Ub
        } = cb.instantiate(bb.state, Wb), {
          main: Ib
        } = bb.state.selection, Hb = {
          changes: {
            from: Wb,
            to: ab == Ib.from ? Ib.to : ab,
            insert: kb.L.of(Tb)
          },
          scrollIntoView: !0,
          annotations: sb ? [nb.of(sb), kb.O.userEvent.of("input.complete")] : void 0
        };
        if (Ub.length && (Hb.selection = Tc(Ub, 0)), Ub.some((bb => bb.field > 0))) {
          let cb = new sc(Ub, 0),
            sb = Hb.effects = [kc.of(cb)];
          void 0 === bb.state.field(ac, !1) && sb.push(kb.F.appendConfig.of([ac, Mc, nc, Fb]))
        }
        bb.dispatch(bb.state.update(Hb))
      }
    }

    function Ic(bb) {
      return cb => {
        let {
          state: sb,
          dispatch: kb
        } = cb, Wb = sb.field(ac, !1);
        if (!Wb || bb < 0 && 0 == Wb.active) return !1;
        let ab = Wb.active + bb,
          Tb = bb > 0 && !Wb.uQ.some((cb => cb.field == ab + bb));
        return kb(sb.update({
          selection: Tc(Wb.uQ, ab),
          effects: kc.of(Tb ? null : new sc(Wb.uQ, ab)),
          scrollIntoView: !0
        })), !0
      }
    }
    const Hc = [{
        key: "Tab",
        run: Ic(1),
        shift: Ic(-1)
      }, {
        key: "Escape",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb;
          return !!cb.field(ac, !1) && (sb(cb.update({
            effects: kc.of(null)
          })), !0)
        }
      }],
      fc = kb.n.define({
        combine: bb => bb.length ? bb[0] : Hc
      }),
      Mc = kb.s.highest(Wb.V.compute([fc], (bb => bb.facet(fc))));

    function Xc(bb, cb) {
      return {
        ...cb,
        apply: Uc(bb)
      }
    }
    const nc = Wb.h.domEventHandlers({
      mousedown(bb, cb) {
        let sb, kb = cb.state.field(ac, !1);
        if (!kb || null == (sb = cb.posAtCoords({
            x: bb.clientX,
            y: bb.clientY
          }))) return !1;
        let Wb = kb.uQ.find((bb => bb.from <= sb && bb.to >= sb));
        return !(!Wb || Wb.field == kb.active) && (cb.dispatch({
          selection: Tc(kb.uQ, Wb.field),
          effects: kc.of(kb.uQ.some((bb => bb.field > Wb.field)) ? new sc(kb.uQ, Wb.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const mc = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      lc = kb.F.define({
        map(bb, cb) {
          let sb = cb.mapPos(bb, -1, kb.r.TrackAfter);
          return null == sb ? void 0 : sb
        }
      }),
      Qc = new class extends kb.B {};
    Qc.startSide = 1, Qc.endSide = -1;
    const ec = kb.H.define({
      create: () => kb.z.empty,
      update(bb, cb) {
        if (bb = bb.map(cb.changes), cb.selection) {
          let sb = cb.state.doc.lineAt(cb.selection.main.head);
          bb = bb.update({
            filter: bb => bb >= sb.from && bb <= sb.to
          })
        }
        for (let sb of cb.effects) sb.is(lc) && (bb = bb.update({
          add: [Qc.range(sb.value, sb.value + 1)]
        }));
        return bb
      }
    });

    function Cc() {
      return [Yc, ec]
    }
    const Nc = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function Vc(bb) {
      for (let cb = 0; cb < 16; cb += 2)
        if (Nc.charCodeAt(cb) == bb) return Nc.charAt(cb + 1);
      return (0, kb.db)(bb < 128 ? bb : bb + 1)
    }

    function Lc(bb, cb) {
      return bb.languageDataAt("closeBrackets", cb)[0] || mc
    }
    const uc = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Yc = Wb.h.inputHandler.of(((bb, cb, sb, Wb) => {
        if ((uc ? bb.composing : bb.compositionStarted) || bb.state.readOnly) return !1;
        let ab = bb.state.selection.main;
        if (Wb.length > 2 || 2 == Wb.length && 1 == (0, kb.V)((0, kb.S)(Wb, 0)) || cb != ab.from || sb != ab.to) return !1;
        let Tb = function(bb, cb) {
          let sb = Lc(bb, bb.selection.main.head),
            Wb = sb.brackets || mc.brackets;
          for (let ab of Wb) {
            let Tb = Vc((0, kb.S)(ab, 0));
            if (cb == ab) return Tb == ab ? yc(bb, ab, Wb.indexOf(ab + ab + ab) > -1, sb) : Bc(bb, ab, Tb, sb.before || mc.before);
            if (cb == Tb && Jc(bb, bb.selection.main.from)) return tc(bb, ab, Tb)
          }
          return null
        }(bb.state, Wb);
        return !!Tb && (bb.dispatch(Tb), !0)
      })),
      hc = [{
        key: "Backspace",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb;
          if (cb.readOnly) return !1;
          let Wb = Lc(cb, cb.selection.main.head).brackets || mc.brackets,
            ab = null,
            Tb = cb.changeByRange((bb => {
              if (bb.empty) {
                let sb = function(bb, cb) {
                  let sb = bb.sliceString(cb - 2, cb);
                  return (0, kb.V)((0, kb.S)(sb, 0)) == sb.length ? sb : sb.slice(1)
                }(cb.doc, bb.head);
                for (let ab of Wb)
                  if (ab == sb && gc(cb.doc, bb.head) == Vc((0, kb.S)(ab, 0))) return {
                    changes: {
                      from: bb.head - ab.length,
                      to: bb.head + ab.length
                    },
                    range: kb.j.cursor(bb.head - ab.length)
                  }
              }
              return {
                range: ab = bb
              }
            }));
          return ab || sb(cb.update(Tb, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !ab
        }
      }];

    function Jc(bb, cb) {
      let sb = !1;
      return bb.field(ec).between(0, bb.doc.length, (bb => {
        bb == cb && (sb = !0)
      })), sb
    }

    function gc(bb, cb) {
      let sb = bb.sliceString(cb, cb + 2);
      return sb.slice(0, (0, kb.V)((0, kb.S)(sb, 0)))
    }

    function Bc(bb, cb, sb, Wb) {
      let ab = null,
        Tb = bb.changeByRange((Tb => {
          if (!Tb.empty) return {
            changes: [{
              insert: cb,
              from: Tb.from
            }, {
              insert: sb,
              from: Tb.to
            }],
            effects: lc.of(Tb.to + cb.length),
            range: kb.j.range(Tb.anchor + cb.length, Tb.head + cb.length)
          };
          let Ub = gc(bb.doc, Tb.head);
          return !Ub || /\s/.test(Ub) || Wb.indexOf(Ub) > -1 ? {
            changes: {
              insert: cb + sb,
              from: Tb.head
            },
            effects: lc.of(Tb.head + cb.length),
            range: kb.j.cursor(Tb.head + cb.length)
          } : {
            range: ab = Tb
          }
        }));
      return ab ? null : bb.update(Tb, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function tc(bb, cb, sb) {
      let Wb = null,
        ab = bb.changeByRange((cb => cb.empty && gc(bb.doc, cb.head) == sb ? {
          changes: {
            from: cb.head,
            to: cb.head + sb.length,
            insert: sb
          },
          range: kb.j.cursor(cb.head + sb.length)
        } : Wb = {
          range: cb
        }));
      return Wb ? null : bb.update(ab, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function yc(bb, cb, sb, Wb) {
      let Tb = Wb.stringPrefixes || mc.stringPrefixes,
        Ub = null,
        Ib = bb.changeByRange((Wb => {
          if (!Wb.empty) return {
            changes: [{
              insert: cb,
              from: Wb.from
            }, {
              insert: cb,
              from: Wb.to
            }],
            effects: lc.of(Wb.to + cb.length),
            range: kb.j.range(Wb.anchor + cb.length, Wb.head + cb.length)
          };
          let Ib, Hb = Wb.head,
            fb = gc(bb.doc, Hb);
          if (fb == cb) {
            if (Pc(bb, Hb)) return {
              changes: {
                insert: cb + cb,
                from: Hb
              },
              effects: lc.of(Hb + cb.length),
              range: kb.j.cursor(Hb + cb.length)
            };
            if (Jc(bb, Hb)) {
              let Wb = sb && bb.sliceDoc(Hb, Hb + 3 * cb.length) == cb + cb + cb ? cb + cb + cb : cb;
              return {
                changes: {
                  from: Hb,
                  to: Hb + Wb.length,
                  insert: Wb
                },
                range: kb.j.cursor(Hb + Wb.length)
              }
            }
          } else {
            if (sb && bb.sliceDoc(Hb - 2 * cb.length, Hb) == cb + cb && (Ib = Dc(bb, Hb - 2 * cb.length, Tb)) > -1 && Pc(bb, Ib)) return {
              changes: {
                insert: cb + cb + cb + cb,
                from: Hb
              },
              effects: lc.of(Hb + cb.length),
              range: kb.j.cursor(Hb + cb.length)
            };
            if (bb.charCategorizer(Hb)(fb) != kb.i.Word && Dc(bb, Hb, Tb) > -1 && ! function(bb, cb, sb, kb) {
                let Wb = (0, ab.lb)(bb).resolveInner(cb, -1),
                  Tb = kb.reduce(((bb, cb) => Math.max(bb, cb.length)), 0);
                for (let ab = 0; ab < 5; ab++) {
                  let ab = bb.sliceDoc(Wb.from, Math.min(Wb.to, Wb.from + sb.length + Tb)),
                    Ub = ab.indexOf(sb);
                  if (!Ub || Ub > -1 && kb.indexOf(ab.slice(0, Ub)) > -1) {
                    let cb = Wb.firstChild;
                    for (; cb && cb.from == Wb.from && cb.to - cb.from > sb.length + Ub;) {
                      if (bb.sliceDoc(cb.to - sb.length, cb.to) == sb) return !1;
                      cb = cb.firstChild
                    }
                    return !0
                  }
                  let Ib = Wb.to == cb && Wb.parent;
                  if (!Ib) break;
                  Wb = Ib
                }
                return !1
              }(bb, Hb, cb, Tb)) return {
              changes: {
                insert: cb + cb,
                from: Hb
              },
              effects: lc.of(Hb + cb.length),
              range: kb.j.cursor(Hb + cb.length)
            }
          }
          return {
            range: Ub = Wb
          }
        }));
      return Ub ? null : bb.update(Ib, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Pc(bb, cb) {
      let sb = (0, ab.lb)(bb).resolveInner(cb + 1);
      return sb.parent && sb.from == cb
    }

    function Dc(bb, cb, sb) {
      let Wb = bb.charCategorizer(cb);
      if (Wb(bb.sliceDoc(cb - 1, cb)) != kb.i.Word) return cb;
      for (let ab of sb) {
        let sb = cb - ab.length;
        if (bb.sliceDoc(sb, cb) == ab && Wb(bb.sliceDoc(sb - 1, sb)) != kb.i.Word) return sb
      }
      return -1
    }

    function Ec() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [vb, qb, Lb.of(bb), Sb, Oc, Fb]
    }
    const ic = [{
        key: "Ctrl-Space",
        run: rb
      }, {
        mac: "Alt-`",
        run: rb
      }, {
        mac: "Alt-i",
        run: rb
      }, {
        key: "Escape",
        run: bb => {
          let cb = bb.state.field(qb, !1);
          return !(!cb || !cb.active.some((bb => 0 != bb.state))) && (bb.dispatch({
            effects: Cb.of(null)
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
          let cb = bb.state.field(qb, !1);
          return !(bb.state.readOnly || !cb || !cb.open || cb.open.selected < 0 || cb.open.disabled || Date.now() - cb.open.timestamp < bb.state.facet(Lb).interactionDelay) && db(bb, cb.open.options[cb.open.selected])
        }
      }],
      Oc = kb.s.highest(Wb.V.computeN([Lb], (bb => bb.facet(Lb).defaultKeymap ? [ic] : [])))
  },
  40870: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Hb,
      d: () => Xb,
      h: () => fb,
      l: () => Mb
    });
    var kb = sb(40738);
    class Wb {
      constructor(bb, cb, sb, kb) {
        this.origin = bb, this.changes = cb, this.effects = sb, this.clientID = kb
      }
    }
    class ab {
      constructor(bb, cb) {
        this.version = bb, this.unconfirmed = cb
      }
    }
    const Tb = kb.n.define({
        combine(bb) {
          let cb = (0, kb.X)(bb, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: bb => bb
          });
          return null == cb.clientID && (cb.clientID = bb.length && bb[0].generatedID || ""), cb
        }
      }),
      Ub = kb.e.define(),
      Ib = kb.H.define({
        create: bb => new ab(bb.facet(Tb).startVersion, []),
        update(bb, cb) {
          let sb = cb.annotation(Ub);
          if (sb) return sb;
          let {
            sharedEffects: kb,
            clientID: Ib
          } = cb.startState.facet(Tb), Hb = kb(cb);
          return Hb.length || !cb.changes.empty ? new ab(bb.version, bb.unconfirmed.concat(new Wb(cb, cb.changes, Hb, Ib))) : bb
        }
      });

    function Hb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Ib, Tb.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, bb))]
    }

    function fb(bb, cb) {
      let {
        version: sb,
        unconfirmed: Hb
      } = bb.field(Ib), {
        clientID: fb
      } = bb.facet(Tb);
      sb += cb.length;
      let Mb = [],
        Xb = null,
        nb = 0;
      for (let Wb of cb) {
        let bb = nb < Hb.length ? Hb[nb] : null;
        bb && bb.clientID == Wb.clientID ? (Xb && (Xb = Xb.map(bb.changes, !0)), Mb = kb.F.mapEffects(Mb, Wb.changes), nb++) : (Mb = kb.F.mapEffects(Mb, Wb.changes), Wb.effects && (Mb = Mb.concat(Wb.effects)), Xb = Xb ? Xb.compose(Wb.changes) : Wb.changes)
      }
      if (nb && (Hb = Hb.slice(nb)), Hb.length && (Xb && (Hb = Hb.map((bb => {
          let cb = bb.changes.map(Xb);
          return Xb = Xb.map(bb.changes, !0), new Wb(bb.origin, cb, kb.F.mapEffects(bb.effects, Xb), fb)
        }))), Mb.length)) {
        let bb = Hb.reduce(((bb, cb) => bb.compose(cb.changes)), kb.ChangeSet.empty(Hb[0].changes.length));
        Mb = kb.F.mapEffects(Mb, bb)
      }
      return Xb ? bb.update({
        changes: Xb,
        effects: Mb,
        annotations: [kb.O.addToHistory.of(!1), kb.O.remote.of(!0), Ub.of(new ab(sb, Hb))],
        filter: !1
      }) : bb.update({
        annotations: [Ub.of(new ab(sb, Hb))]
      })
    }

    function Mb(bb) {
      return bb.field(Ib).unconfirmed
    }

    function Xb(bb) {
      return bb.field(Ib).version
    }
  },
  40780: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => lc
    });
    var kb = sb(40767);
    class Wb {
      constructor(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        let Hb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          fb = arguments.length > 10 ? arguments[10] : void 0;
        this.p = bb, this.stack = cb, this.state = sb, this.reducePos = kb, this.pos = Wb, this.score = ab, this.buffer = Tb, this.bufferBase = Ub, this.curContext = Ib, this.lookAhead = Hb, this.parent = fb
      }
      toString() {
        return `[${this.stack.filter(((bb,cb)=>cb%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = bb.parser.context;
        return new Wb(bb, [], cb, sb, sb, 0, [], 0, kb ? new ab(kb, kb.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(bb, cb) {
        this.stack.push(this.state, cb, this.bufferBase + this.buffer.length), this.state = bb
      }
      reduce(bb) {
        var cb;
        let sb = bb >> 19,
          kb = 65535 & bb,
          {
            parser: Wb
          } = this.p,
          ab = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          Tb = Wb.dynamicPrecedence(kb);
        if (Tb && (this.score += Tb), 0 == sb) return this.pushState(Wb.getGoto(this.state, kb, !0), this.reducePos), kb < Wb.minRepeatTerm && this.storeNode(kb, this.reducePos, this.reducePos, ab ? 8 : 4, !0), void this.reduceContext(kb, this.reducePos);
        let Ub = this.stack.length - 3 * (sb - 1) - (262144 & bb ? 6 : 0),
          Ib = Ub ? this.stack[Ub - 2] : this.p.uQ[0].from,
          Hb = this.reducePos - Ib;
        Hb >= 2e3 && !(null === (cb = this.p.parser.nodeSet.types[kb]) || void 0 === cb ? void 0 : cb.isAnonymous) && (Ib == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Hb) : this.p.lastBigReductionSize < Hb && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = Ib, this.p.lastBigReductionSize = Hb));
        let fb = Ub ? this.stack[Ub - 1] : 0,
          Mb = this.bufferBase + this.buffer.length - fb;
        if (kb < Wb.minRepeatTerm || 131072 & bb) {
          let bb = Wb.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(kb, Ib, bb, Mb + 4, !0)
        }
        if (262144 & bb) this.state = this.stack[Ub];
        else {
          let bb = this.stack[Ub - 3];
          this.state = Wb.getGoto(bb, kb, !0)
        }
        for (; this.stack.length > Ub;) this.stack.pop();
        this.reduceContext(kb, Ib)
      }
      storeNode(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == bb && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let bb = this,
            kb = this.buffer.length;
          if (0 == kb && bb.parent && (kb = bb.bufferBase - bb.parent.bufferBase, bb = bb.parent), kb > 0 && 0 == bb.buffer[kb - 4] && bb.buffer[kb - 1] > -1) {
            if (cb == sb) return;
            if (bb.buffer[kb - 2] >= cb) return void(bb.buffer[kb - 2] = sb)
          }
        }
        if (Wb && this.pos != sb) {
          let Wb = this.buffer.length;
          if (Wb > 0 && (0 != this.buffer[Wb - 4] || this.buffer[Wb - 1] < 0)) {
            let bb = !1;
            for (let cb = Wb; cb > 0 && this.buffer[cb - 2] > sb; cb -= 4)
              if (this.buffer[cb - 1] >= 0) {
                bb = !0;
                break
              } if (bb)
              for (; Wb > 0 && this.buffer[Wb - 2] > sb;) this.buffer[Wb] = this.buffer[Wb - 4], this.buffer[Wb + 1] = this.buffer[Wb - 3], this.buffer[Wb + 2] = this.buffer[Wb - 2], this.buffer[Wb + 3] = this.buffer[Wb - 1], Wb -= 4, kb > 4 && (kb -= 4)
          }
          this.buffer[Wb] = bb, this.buffer[Wb + 1] = cb, this.buffer[Wb + 2] = sb, this.buffer[Wb + 3] = kb
        } else this.buffer.push(bb, cb, sb, kb)
      }
      shift(bb, cb, sb, kb) {
        if (131072 & bb) this.pushState(65535 & bb, this.pos);
        else if (0 == (262144 & bb)) {
          let Wb = bb,
            {
              parser: ab
            } = this.p;
          this.pos = kb;
          let Tb = ab.stateFlag(Wb, 1);
          !Tb && (kb > sb || cb <= ab.maxNode) && (this.reducePos = kb), this.pushState(Wb, Tb ? sb : Math.min(sb, this.reducePos)), this.shiftContext(cb, sb), cb <= ab.maxNode && this.buffer.push(cb, sb, kb, 4)
        } else this.pos = kb, this.shiftContext(cb, sb), cb <= this.p.parser.maxNode && this.buffer.push(cb, sb, kb, 4)
      }
      apply(bb, cb, sb, kb) {
        65536 & bb ? this.reduce(bb) : this.shift(bb, cb, sb, kb)
      }
      useNode(bb, cb) {
        let sb = this.p.reused.length - 1;
        (sb < 0 || this.p.reused[sb] != bb) && (this.p.reused.push(bb), sb++);
        let kb = this.pos;
        this.reducePos = this.pos = kb + bb.length, this.pushState(cb, kb), this.buffer.push(sb, kb, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, bb, this, this.p.stream.reset(this.pos - bb.length)))
      }
      split() {
        let bb = this,
          cb = bb.buffer.length;
        for (; cb > 0 && bb.buffer[cb - 2] > bb.reducePos;) cb -= 4;
        let sb = bb.buffer.slice(cb),
          kb = bb.bufferBase + cb;
        for (; bb && kb == bb.bufferBase;) bb = bb.parent;
        return new Wb(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, sb, kb, this.curContext, this.lookAhead, bb)
      }
      recoverByDelete(bb, cb) {
        let sb = bb <= this.p.parser.maxNode;
        sb && this.storeNode(bb, this.pos, cb, 4), this.storeNode(0, this.pos, cb, sb ? 8 : 4), this.pos = this.reducePos = cb, this.score -= 190
      }
      canShift(bb) {
        for (let cb = new Tb(this);;) {
          let sb = this.p.parser.stateSlot(cb.state, 4) || this.p.parser.hasAction(cb.state, bb);
          if (0 == sb) return !1;
          if (0 == (65536 & sb)) return !0;
          cb.reduce(sb)
        }
      }
      recoverByInsert(bb) {
        if (this.stack.length >= 300) return [];
        let cb = this.p.parser.nextStates(this.state);
        if (cb.length > 8 || this.stack.length >= 120) {
          let sb = [];
          for (let kb, Wb = 0; Wb < cb.length; Wb += 2)(kb = cb[Wb + 1]) != this.state && this.p.parser.hasAction(kb, bb) && sb.push(cb[Wb], kb);
          if (this.stack.length < 120)
            for (let bb = 0; sb.length < 8 && bb < cb.length; bb += 2) {
              let kb = cb[bb + 1];
              sb.some(((bb, cb) => 1 & cb && bb == kb)) || sb.push(cb[bb], kb)
            }
          cb = sb
        }
        let sb = [];
        for (let kb = 0; kb < cb.length && sb.length < 4; kb += 2) {
          let bb = cb[kb + 1];
          if (bb == this.state) continue;
          let Wb = this.split();
          Wb.pushState(bb, this.pos), Wb.storeNode(0, Wb.pos, Wb.pos, 4, !0), Wb.shiftContext(cb[kb], this.pos), Wb.reducePos = this.pos, Wb.score -= 200, sb.push(Wb)
        }
        return sb
      }
      forceReduce() {
        let {
          parser: bb
        } = this.p, cb = bb.stateSlot(this.state, 5);
        if (0 == (65536 & cb)) return !1;
        if (!bb.validAction(this.state, cb)) {
          let sb = cb >> 19,
            kb = 65535 & cb,
            Wb = this.stack.length - 3 * sb;
          if (Wb < 0 || bb.getGoto(this.stack[Wb], kb, !1) < 0) {
            let bb = this.findForcedReduction();
            if (null == bb) return !1;
            cb = bb
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(cb), !0
      }
      findForcedReduction() {
        let {
          parser: bb
        } = this.p, cb = [], sb = (kb, Wb) => {
          if (!cb.includes(kb)) return cb.push(kb), bb.allActions(kb, (cb => {
            if (393216 & cb);
            else if (65536 & cb) {
              let sb = (cb >> 19) - Wb;
              if (sb > 1) {
                let kb = 65535 & cb,
                  Wb = this.stack.length - 3 * sb;
                if (Wb >= 0 && bb.getGoto(this.stack[Wb], kb, !1) >= 0) return sb << 19 | 65536 | kb
              }
            } else {
              let bb = sb(cb, Wb + 1);
              if (null != bb) return bb
            }
          }))
        };
        return sb(this.state, 0)
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
        for (let cb = 0; cb < this.stack.length; cb += 3)
          if (this.stack[cb] != bb.stack[cb]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(bb) {
        return this.p.parser.dialect.flags[bb]
      }
      shiftContext(bb, cb) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, bb, this, this.p.stream.reset(cb)))
      }
      reduceContext(bb, cb) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, bb, this, this.p.stream.reset(cb)))
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
          let cb = new ab(this.curContext.tracker, bb);
          cb.hash != this.curContext.hash && this.emitContext(), this.curContext = cb
        }
      }
      setLookAhead(bb) {
        return !(bb <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = bb, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class ab {
      constructor(bb, cb) {
        this.tracker = bb, this.context = cb, this.hash = bb.strict ? bb.hash(cb) : 0
      }
    }
    class Tb {
      constructor(bb) {
        this.start = bb, this.state = bb.state, this.stack = bb.stack, this.base = this.stack.length
      }
      reduce(bb) {
        let cb = 65535 & bb,
          sb = bb >> 19;
        0 == sb ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (sb - 1);
        let kb = this.start.p.parser.getGoto(this.stack[this.base - 3], cb, !0);
        this.state = kb
      }
    }
    class Ub {
      constructor(bb, cb, sb) {
        this.stack = bb, this.pos = cb, this.index = sb, this.buffer = bb.buffer, 0 == this.index && this.maybeNext()
      }
      static create(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.bufferBase + bb.buffer.length;
        return new Ub(bb, cb, cb - bb.bufferBase)
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
        return new Ub(this.stack, this.pos, this.index)
      }
    }

    function Ib(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof bb) return bb;
      let sb = null;
      for (let kb = 0, Wb = 0; kb < bb.length;) {
        let ab = 0;
        for (;;) {
          let cb = bb.charCodeAt(kb++),
            sb = !1;
          if (126 == cb) {
            ab = 65535;
            break
          }
          cb >= 92 && cb--, cb >= 34 && cb--;
          let Wb = cb - 32;
          if (Wb >= 46 && (Wb -= 46, sb = !0), ab += Wb, sb) break;
          ab *= 46
        }
        sb ? sb[Wb++] = ab : sb = new cb(ab)
      }
      return sb
    }
    class Hb {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const fb = new Hb;
    class Mb {
      constructor(bb, cb) {
        this.input = bb, this.uQ = cb, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = fb, this.rangeIndex = 0, this.pos = this.chunkPos = cb[0].from, this.range = cb[0], this.end = cb[cb.length - 1].to, this.readNext()
      }
      resolveOffset(bb, cb) {
        let sb = this.range,
          kb = this.rangeIndex,
          Wb = this.pos + bb;
        for (; Wb < sb.from;) {
          if (!kb) return null;
          let bb = this.uQ[--kb];
          Wb -= sb.from - bb.to, sb = bb
        }
        for (; cb < 0 ? Wb > sb.to : Wb >= sb.to;) {
          if (kb == this.uQ.length - 1) return null;
          let bb = this.uQ[++kb];
          Wb += bb.from - sb.to, sb = bb
        }
        return Wb
      }
      clipPos(bb) {
        if (bb >= this.range.from && bb < this.range.to) return bb;
        for (let cb of this.uQ)
          if (cb.to > bb) return Math.max(bb, cb.from);
        return this.end
      }
      peek(bb) {
        let cb, sb, kb = this.chunkOff + bb;
        if (kb >= 0 && kb < this.chunk.length) cb = this.pos + bb, sb = this.chunk.charCodeAt(kb);
        else {
          let kb = this.resolveOffset(bb, 1);
          if (null == kb) return -1;
          if (cb = kb, cb >= this.chunk2Pos && cb < this.chunk2Pos + this.chunk2.length) sb = this.chunk2.charCodeAt(cb - this.chunk2Pos);
          else {
            let bb = this.rangeIndex,
              kb = this.range;
            for (; kb.to <= cb;) kb = this.uQ[++bb];
            this.chunk2 = this.input.chunk(this.chunk2Pos = cb), cb + this.chunk2.length > kb.to && (this.chunk2 = this.chunk2.slice(0, kb.to - cb)), sb = this.chunk2.charCodeAt(0)
          }
        }
        return cb >= this.token.lookAhead && (this.token.lookAhead = cb + 1), sb
      }
      acceptToken(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = cb ? this.resolveOffset(cb, -1) : this.pos;
        if (null == sb || sb < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = bb, this.token.end = sb
      }
      acceptTokenTo(bb, cb) {
        this.token.value = bb, this.token.end = cb
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: bb,
            chunkPos: cb
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = bb, this.chunk2Pos = cb, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let bb = this.input.chunk(this.pos),
            cb = this.pos + bb.length;
          this.chunk = cb > this.range.to ? bb.slice(0, this.range.to - this.pos) : bb, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += bb; this.pos + bb >= this.range.to;) {
          if (this.rangeIndex == this.uQ.length - 1) return this.setDone();
          bb -= this.range.to - this.pos, this.range = this.uQ[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += bb, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.uQ[this.rangeIndex = this.uQ.length - 1], this.chunk = "", this.next = -1
      }
      reset(bb, cb) {
        if (cb ? (this.token = cb, cb.start = bb, cb.lookAhead = bb + 1, cb.value = cb.extended = -1) : this.token = fb, this.pos != bb) {
          if (this.pos = bb, bb == this.end) return this.setDone(), this;
          for (; bb < this.range.from;) this.range = this.uQ[--this.rangeIndex];
          for (; bb >= this.range.to;) this.range = this.uQ[++this.rangeIndex];
          bb >= this.chunkPos && bb < this.chunkPos + this.chunk.length ? this.chunkOff = bb - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(bb, cb) {
        if (bb >= this.chunkPos && cb <= this.chunkPos + this.chunk.length) return this.chunk.slice(bb - this.chunkPos, cb - this.chunkPos);
        if (bb >= this.chunk2Pos && cb <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(bb - this.chunk2Pos, cb - this.chunk2Pos);
        if (bb >= this.range.from && cb <= this.range.to) return this.input.read(bb, cb);
        let sb = "";
        for (let kb of this.uQ) {
          if (kb.from >= cb) break;
          kb.to > bb && (sb += this.input.read(Math.max(kb.from, bb), Math.min(kb.to, cb)))
        }
        return sb
      }
    }
    class Xb {
      constructor(bb, cb) {
        this.data = bb, this.id = cb
      }
      token(bb, cb) {
        let {
          parser: sb
        } = cb.p;
        lb(this.data, bb, cb, this.id, sb.data, sb.tokenPrecTable)
      }
    }
    Xb.prototype.contextual = Xb.prototype.fallback = Xb.prototype.extend = !1;
    class nb {
      constructor(bb, cb, sb) {
        this.precTable = cb, this.elseToken = sb, this.data = "string" == typeof bb ? Ib(bb) : bb
      }
      token(bb, cb) {
        let sb = bb.pos,
          kb = 0;
        for (;;) {
          let sb = bb.next < 0,
            Wb = bb.resolveOffset(1, 1);
          if (lb(this.data, bb, cb, 0, this.data, this.precTable), bb.token.value > -1) break;
          if (null == this.elseToken) return;
          if (sb || kb++, null == Wb) break;
          bb.reset(Wb, bb.token)
        }
        kb && (bb.reset(sb, bb.token), bb.acceptToken(this.elseToken, kb))
      }
    }
    nb.prototype.contextual = Xb.prototype.fallback = Xb.prototype.extend = !1;
    class mb {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = bb, this.contextual = !!cb.contextual, this.fallback = !!cb.fallback, this.extend = !!cb.extend
      }
    }

    function lb(bb, cb, sb, kb, Wb, ab) {
      let Tb = 0,
        Ub = 1 << kb,
        {
          dialect: Ib
        } = sb.p.parser;
      bb: for (; 0 != (Ub & bb[Tb]);) {
        let sb = bb[Tb + 1];
        for (let Mb = Tb + 3; Mb < sb; Mb += 2)
          if ((bb[Mb + 1] & Ub) > 0) {
            let sb = bb[Mb];
            if (Ib.allows(sb) && (-1 == cb.token.value || cb.token.value == sb || eb(sb, cb.token.value, Wb, ab))) {
              cb.acceptToken(sb);
              break
            }
          } let kb = cb.next,
          Hb = 0,
          fb = bb[Tb + 2];
        if (!(cb.next < 0 && fb > Hb && 65535 == bb[sb + 3 * fb - 3])) {
          for (; Hb < fb;) {
            let Wb = Hb + fb >> 1,
              ab = sb + Wb + (Wb << 1),
              Ub = bb[ab],
              Ib = bb[ab + 1] || 65536;
            if (kb < Ub) fb = Wb;
            else {
              if (!(kb >= Ib)) {
                Tb = bb[ab + 2], cb.advance();
                continue bb
              }
              Hb = Wb + 1
            }
          }
          break
        }
        Tb = bb[sb + 3 * fb - 1]
      }
    }

    function Qb(bb, cb, sb) {
      for (let kb, Wb = cb; 65535 != (kb = bb[Wb]); Wb++)
        if (kb == sb) return Wb - cb;
      return -1
    }

    function eb(bb, cb, sb, kb) {
      let Wb = Qb(sb, kb, cb);
      return Wb < 0 || Qb(sb, kb, bb) < Wb
    }
    const Cb = "undefined" != typeof process && {
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
    let Nb = null;

    function Vb(bb, cb, sb) {
      let Wb = bb.cursor(kb.g.IncludeAnonymous);
      for (Wb.moveTo(cb);;)
        if (!(sb < 0 ? Wb.childBefore(cb) : Wb.childAfter(cb)))
          for (;;) {
            if ((sb < 0 ? Wb.to < cb : Wb.from > cb) && !Wb.type.isError) return sb < 0 ? Math.max(0, Math.min(Wb.to - 1, cb - 25)) : Math.min(bb.length, Math.max(Wb.from + 1, cb + 25));
            if (sb < 0 ? Wb.prevSibling() : Wb.nextSibling()) break;
            if (!Wb.parent()) return sb < 0 ? 0 : bb.length
          }
    }
    class Lb {
      constructor(bb, cb) {
        this.fragments = bb, this.nodeSet = cb, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let bb = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (bb) {
          for (this.safeFrom = bb.openStart ? Vb(bb.tree, bb.from + bb.offset, 1) - bb.offset : bb.from, this.safeTo = bb.openEnd ? Vb(bb.tree, bb.to + bb.offset, -1) - bb.offset : bb.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(bb.tree), this.start.push(-bb.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(bb) {
        if (bb < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= bb;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let cb = this.trees.length - 1;
          if (cb < 0) return this.nextFragment(), null;
          let sb = this.trees[cb],
            Wb = this.index[cb];
          if (Wb == sb.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let ab = sb.children[Wb],
            Tb = this.start[cb] + sb.positions[Wb];
          if (Tb > bb) return this.nextStart = Tb, null;
          if (ab instanceof kb.u) {
            if (Tb == bb) {
              if (Tb < this.safeFrom) return null;
              let bb = Tb + ab.length;
              if (bb <= this.safeTo) {
                let cb = ab.prop(kb.i.lookAhead);
                if (!cb || bb + cb < this.fragment.to) return ab
              }
            }
            this.index[cb]++, Tb + ab.length >= Math.max(this.safeFrom, bb) && (this.trees.push(ab), this.start.push(Tb), this.index.push(0))
          } else this.index[cb]++, this.nextStart = Tb + ab.length
        }
      }
    }
    class ub {
      constructor(bb, cb) {
        this.stream = cb, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = bb.tokenizers.map((bb => new Hb))
      }
      getActions(bb) {
        let cb = 0,
          sb = null,
          {
            parser: kb
          } = bb.p,
          {
            tokenizers: Wb
          } = kb,
          ab = kb.stateSlot(bb.state, 3),
          Tb = bb.curContext ? bb.curContext.hash : 0,
          Ub = 0;
        for (let Ib = 0; Ib < Wb.length; Ib++) {
          if (0 == (1 << Ib & ab)) continue;
          let kb = Wb[Ib],
            Hb = this.tokens[Ib];
          if ((!sb || kb.fallback) && ((kb.contextual || Hb.start != bb.pos || Hb.mask != ab || Hb.context != Tb) && (this.updateCachedToken(Hb, kb, bb), Hb.mask = ab, Hb.context = Tb), Hb.lookAhead > Hb.end + 25 && (Ub = Math.max(Hb.lookAhead, Ub)), 0 != Hb.value)) {
            let Wb = cb;
            if (Hb.extended > -1 && (cb = this.addActions(bb, Hb.extended, Hb.end, cb)), cb = this.addActions(bb, Hb.value, Hb.end, cb), !kb.extend && (sb = Hb, cb > Wb)) break
          }
        }
        for (; this.actions.length > cb;) this.actions.pop();
        return Ub && bb.setLookAhead(Ub), sb || bb.pos != this.stream.end || (sb = new Hb, sb.value = bb.p.parser.eofTerm, sb.start = sb.end = bb.pos, cb = this.addActions(bb, sb.value, sb.end, cb)), this.mainToken = sb, this.actions
      }
      getMainToken(bb) {
        if (this.mainToken) return this.mainToken;
        let cb = new Hb,
          {
            pos: sb,
            p: kb
          } = bb;
        return cb.start = sb, cb.end = Math.min(sb + 1, kb.stream.end), cb.value = sb == kb.stream.end ? kb.parser.eofTerm : 0, cb
      }
      updateCachedToken(bb, cb, sb) {
        let kb = this.stream.clipPos(sb.pos);
        if (cb.token(this.stream.reset(kb, bb), sb), bb.value > -1) {
          let {
            parser: cb
          } = sb.p;
          for (let kb = 0; kb < cb.specialized.length; kb++)
            if (cb.specialized[kb] == bb.value) {
              let Wb = cb.specializers[kb](this.stream.read(bb.start, bb.end), sb);
              if (Wb >= 0 && sb.p.parser.dialect.allows(Wb >> 1)) {
                0 == (1 & Wb) ? bb.value = Wb >> 1 : bb.extended = Wb >> 1;
                break
              }
            }
        } else bb.value = 0, bb.end = this.stream.clipPos(kb + 1)
      }
      putAction(bb, cb, sb, kb) {
        for (let Wb = 0; Wb < kb; Wb += 3)
          if (this.actions[Wb] == bb) return kb;
        return this.actions[kb++] = bb, this.actions[kb++] = cb, this.actions[kb++] = sb, kb
      }
      addActions(bb, cb, sb, kb) {
        let {
          state: Wb
        } = bb, {
          parser: ab
        } = bb.p, {
          data: Tb
        } = ab;
        for (let Ub = 0; Ub < 2; Ub++)
          for (let bb = ab.stateSlot(Wb, Ub ? 2 : 1);; bb += 3) {
            if (65535 == Tb[bb]) {
              if (1 != Tb[bb + 1]) {
                0 == kb && 2 == Tb[bb + 1] && (kb = this.putAction(tb(Tb, bb + 2), cb, sb, kb));
                break
              }
              bb = tb(Tb, bb + 2)
            }
            Tb[bb] == cb && (kb = this.putAction(tb(Tb, bb + 1), cb, sb, kb))
          }
        return kb
      }
    }
    class Yb {
      constructor(bb, cb, sb, kb) {
        this.parser = bb, this.input = cb, this.uQ = kb, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Mb(cb, kb), this.tokens = new ub(bb, this.stream), this.topTerm = bb.top[1];
        let {
          from: ab
        } = kb[0];
        this.stacks = [Wb.start(this, bb.top[0], ab)], this.fragments = sb.length && this.stream.end - ab > 4 * bb.bufferLength ? new Lb(sb, bb.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let bb, cb, sb = this.stacks,
          kb = this.minStackPos,
          Wb = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == sb.length) {
          let [bb] = sb;
          for (; bb.forceReduce() && bb.stack.length && bb.stack[bb.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let ab = 0; ab < sb.length; ab++) {
          let Tb = sb[ab];
          for (;;) {
            if (this.tokens.mainToken = null, Tb.pos > kb) Wb.push(Tb);
            else {
              if (this.advanceStack(Tb, Wb, sb)) continue;
              {
                bb || (bb = [], cb = []), bb.push(Tb);
                let sb = this.tokens.getMainToken(Tb);
                cb.push(sb.value, sb.end)
              }
            }
            break
          }
        }
        if (!Wb.length) {
          let cb = bb && function(bb) {
            let cb = null;
            for (let sb of bb) {
              let bb = sb.p.stoppedAt;
              (sb.pos == sb.p.stream.end || null != bb && sb.pos > bb) && sb.p.parser.stateFlag(sb.state, 2) && (!cb || cb.score < sb.score) && (cb = sb)
            }
            return cb
          }(bb);
          if (cb) return Cb && console.log("Finish with " + this.stackID(cb)), this.stackToTree(cb);
          if (this.parser.strict) throw Cb && bb && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + kb);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && bb) {
          let sb = null != this.stoppedAt && bb[0].pos > this.stoppedAt ? bb[0] : this.runRecovery(bb, cb, Wb);
          if (sb) return Cb && console.log("Force-finish " + this.stackID(sb)), this.stackToTree(sb.forceAll())
        }
        if (this.recovering) {
          let bb = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (Wb.length > bb)
            for (Wb.sort(((bb, cb) => cb.score - bb.score)); Wb.length > bb;) Wb.pop();
          Wb.some((bb => bb.reducePos > kb)) && this.recovering--
        } else if (Wb.length > 1) {
          bb: for (let bb = 0; bb < Wb.length - 1; bb++) {
            let cb = Wb[bb];
            for (let sb = bb + 1; sb < Wb.length; sb++) {
              let kb = Wb[sb];
              if (cb.sameState(kb) || cb.buffer.length > 500 && kb.buffer.length > 500) {
                if (!((cb.score - kb.score || cb.buffer.length - kb.buffer.length) > 0)) {
                  Wb.splice(bb--, 1);
                  continue bb
                }
                Wb.splice(sb--, 1)
              }
            }
          }
          Wb.length > 12 && (Wb.sort(((bb, cb) => cb.score - bb.score)), Wb.splice(12, Wb.length - 12))
        }
        this.minStackPos = Wb[0].pos;
        for (let ab = 1; ab < Wb.length; ab++) Wb[ab].pos < this.minStackPos && (this.minStackPos = Wb[ab].pos);
        return null
      }
      stopAt(bb) {
        if (null != this.stoppedAt && this.stoppedAt < bb) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = bb
      }
      advanceStack(bb, cb, sb) {
        let Wb = bb.pos,
          {
            parser: ab
          } = this,
          Tb = Cb ? this.stackID(bb) + " -> " : "";
        if (null != this.stoppedAt && Wb > this.stoppedAt) return bb.forceReduce() ? bb : null;
        if (this.fragments) {
          let cb = bb.curContext && bb.curContext.tracker.strict,
            sb = cb ? bb.curContext.hash : 0;
          for (let Ub = this.fragments.nodeAt(Wb); Ub;) {
            let Wb = this.parser.nodeSet.types[Ub.type.id] == Ub.type ? ab.getGoto(bb.state, Ub.type.id) : -1;
            if (Wb > -1 && Ub.length && (!cb || (Ub.prop(kb.i.contextHash) || 0) == sb)) return bb.useNode(Ub, Wb), Cb && console.log(Tb + this.stackID(bb) + ` (via reuse of ${ab.getName(Ub.type.id)})`), !0;
            if (!(Ub instanceof kb.u) || 0 == Ub.children.length || Ub.positions[0] > 0) break;
            let Ib = Ub.children[0];
            if (!(Ib instanceof kb.u && 0 == Ub.positions[0])) break;
            Ub = Ib
          }
        }
        let Ub = ab.stateSlot(bb.state, 4);
        if (Ub > 0) return bb.reduce(Ub), Cb && console.log(Tb + this.stackID(bb) + ` (via always-reduce ${ab.getName(65535&Ub)})`), !0;
        if (bb.stack.length >= 8400)
          for (; bb.stack.length > 6e3 && bb.forceReduce(););
        let Ib = this.tokens.getActions(bb);
        for (let kb = 0; kb < Ib.length;) {
          let Ub = Ib[kb++],
            Hb = Ib[kb++],
            fb = Ib[kb++],
            Mb = kb == Ib.length || !sb,
            Xb = Mb ? bb : bb.split(),
            nb = this.tokens.mainToken;
          if (Xb.apply(Ub, Hb, nb ? nb.start : Xb.pos, fb), Cb && console.log(Tb + this.stackID(Xb) + ` (via ${0==(65536&Ub)?"shift":`reduce of ${ab.getName(65535&Ub)}`} for ${ab.getName(Hb)} @ ${Wb}${Xb==bb?"":", split"})`), Mb) return !0;
          Xb.pos > Wb ? cb.push(Xb) : sb.push(Xb)
        }
        return !1
      }
      advanceFully(bb, cb) {
        let sb = bb.pos;
        for (;;) {
          if (!this.advanceStack(bb, null, null)) return !1;
          if (bb.pos > sb) return hb(bb, cb), !0
        }
      }
      runRecovery(bb, cb, sb) {
        let kb = null,
          Wb = !1;
        for (let ab = 0; ab < bb.length; ab++) {
          let Tb = bb[ab],
            Ub = cb[ab << 1],
            Ib = cb[1 + (ab << 1)],
            Hb = Cb ? this.stackID(Tb) + " -> " : "";
          if (Tb.deadEnd) {
            if (Wb) continue;
            if (Wb = !0, Tb.restart(), Cb && console.log(Hb + this.stackID(Tb) + " (restarted)"), this.advanceFully(Tb, sb)) continue
          }
          let fb = Tb.split(),
            Mb = Hb;
          for (let bb = 0; bb < 10 && fb.forceReduce(); bb++) {
            if (Cb && console.log(Mb + this.stackID(fb) + " (via force-reduce)"), this.advanceFully(fb, sb)) break;
            Cb && (Mb = this.stackID(fb) + " -> ")
          }
          for (let bb of Tb.recoverByInsert(Ub)) Cb && console.log(Hb + this.stackID(bb) + " (via recover-insert)"), this.advanceFully(bb, sb);
          this.stream.end > Tb.pos ? (Ib == Tb.pos && (Ib++, Ub = 0), Tb.recoverByDelete(Ub, Ib), Cb && console.log(Hb + this.stackID(Tb) + ` (via recover-delete ${this.parser.getName(Ub)})`), hb(Tb, sb)) : (!kb || kb.score < fb.score) && (kb = fb)
        }
        return kb
      }
      stackToTree(bb) {
        return bb.close(), kb.u.build({
          buffer: Ub.create(bb),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.uQ[0].from,
          length: bb.pos - this.uQ[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(bb) {
        let cb = (Nb || (Nb = new WeakMap)).get(bb);
        return cb || Nb.set(bb, cb = String.fromCodePoint(this.nextStackID++)), cb + bb
      }
    }

    function hb(bb, cb) {
      for (let sb = 0; sb < cb.length; sb++) {
        let kb = cb[sb];
        if (kb.pos == bb.pos && kb.sameState(bb)) return void(cb[sb].score < bb.score && (cb[sb] = bb))
      }
      cb.push(bb)
    }
    class Jb {
      constructor(bb, cb, sb) {
        this.source = bb, this.flags = cb, this.disabled = sb
      }
      allows(bb) {
        return !this.disabled || 0 == this.disabled[bb]
      }
    }
    const gb = bb => bb;
    class Bb extends kb.p {
      constructor(bb) {
        if (super(), this.wrappers = [], 14 != bb.version) throw new RangeError(`Parser version (${bb.version}) doesn't match runtime version (14)`);
        let cb = bb.nodeNames.split(" ");
        this.minRepeatTerm = cb.length;
        for (let kb = 0; kb < bb.repeatNodeCount; kb++) cb.push("");
        let sb = Object.keys(bb.topRules).map((cb => bb.topRules[cb][1])),
          Wb = [];
        for (let kb = 0; kb < cb.length; kb++) Wb.push([]);

        function ab(bb, cb, sb) {
          Wb[bb].push([cb, cb.deserialize(String(sb))])
        }
        if (bb.nodeProps)
          for (let Ub of bb.nodeProps) {
            let bb = Ub[0];
            "string" == typeof bb && (bb = kb.i[bb]);
            for (let cb = 1; cb < Ub.length;) {
              let sb = Ub[cb++];
              if (sb >= 0) ab(sb, bb, Ub[cb++]);
              else {
                let kb = Ub[cb + -sb];
                for (let Wb = -sb; Wb > 0; Wb--) ab(Ub[cb++], bb, kb);
                cb++
              }
            }
          }
        this.nodeSet = new kb.k(cb.map(((cb, ab) => kb.l.define({
          name: ab >= this.minRepeatTerm ? void 0 : cb,
          id: ab,
          props: Wb[ab],
          top: sb.indexOf(ab) > -1,
          error: 0 == ab,
          skipped: bb.skippedNodes && bb.skippedNodes.indexOf(ab) > -1
        })))), bb.propSources && (this.nodeSet = this.nodeSet.extend(...bb.propSources)), this.strict = !1, this.bufferLength = kb.c;
        let Tb = Ib(bb.tokenData);
        this.context = bb.context, this.specializerSpecs = bb.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let kb = 0; kb < this.specializerSpecs.length; kb++) this.specialized[kb] = this.specializerSpecs[kb].term;
        this.specializers = this.specializerSpecs.map(yb), this.states = Ib(bb.states, Uint32Array), this.data = Ib(bb.stateData), this.goto = Ib(bb.goto), this.maxTerm = bb.maxTerm, this.tokenizers = bb.tokenizers.map((bb => "number" == typeof bb ? new Xb(Tb, bb) : bb)), this.topRules = bb.topRules, this.dialects = bb.dialects || {}, this.dynamicPrecedences = bb.dynamicPrecedences || null, this.tokenPrecTable = bb.tokenPrec, this.termNames = bb.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(bb, cb, sb) {
        let kb = new Yb(this, bb, cb, sb);
        for (let Wb of this.wrappers) kb = Wb(kb, bb, cb, sb);
        return kb
      }
      getGoto(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = this.goto;
        if (cb >= kb[0]) return -1;
        for (let Wb = kb[cb + 1];;) {
          let cb = kb[Wb++],
            ab = 1 & cb,
            Tb = kb[Wb++];
          if (ab && sb) return Tb;
          for (let sb = Wb + (cb >> 1); Wb < sb; Wb++)
            if (kb[Wb] == bb) return Tb;
          if (ab) return -1
        }
      }
      hasAction(bb, cb) {
        let sb = this.data;
        for (let kb = 0; kb < 2; kb++)
          for (let Wb, ab = this.stateSlot(bb, kb ? 2 : 1);; ab += 3) {
            if (65535 == (Wb = sb[ab])) {
              if (1 != sb[ab + 1]) {
                if (2 == sb[ab + 1]) return tb(sb, ab + 2);
                break
              }
              Wb = sb[ab = tb(sb, ab + 2)]
            }
            if (Wb == cb || 0 == Wb) return tb(sb, ab + 1)
          }
        return 0
      }
      stateSlot(bb, cb) {
        return this.states[6 * bb + cb]
      }
      stateFlag(bb, cb) {
        return (this.stateSlot(bb, 0) & cb) > 0
      }
      validAction(bb, cb) {
        return !!this.allActions(bb, (bb => bb == cb || null))
      }
      allActions(bb, cb) {
        let sb = this.stateSlot(bb, 4),
          kb = sb ? cb(sb) : void 0;
        for (let Wb = this.stateSlot(bb, 1); null == kb; Wb += 3) {
          if (65535 == this.data[Wb]) {
            if (1 != this.data[Wb + 1]) break;
            Wb = tb(this.data, Wb + 2)
          }
          kb = cb(tb(this.data, Wb + 1))
        }
        return kb
      }
      nextStates(bb) {
        let cb = [];
        for (let sb = this.stateSlot(bb, 1);; sb += 3) {
          if (65535 == this.data[sb]) {
            if (1 != this.data[sb + 1]) break;
            sb = tb(this.data, sb + 2)
          }
          if (0 == (1 & this.data[sb + 2])) {
            let bb = this.data[sb + 1];
            cb.some(((cb, sb) => 1 & sb && cb == bb)) || cb.push(this.data[sb], bb)
          }
        }
        return cb
      }
      configure(bb) {
        let cb = Object.assign(Object.create(Bb.prototype), this);
        if (bb.props && (cb.nodeSet = this.nodeSet.extend(...bb.props)), bb.top) {
          let sb = this.topRules[bb.top];
          if (!sb) throw new RangeError(`Invalid top rule name ${bb.top}`);
          cb.top = sb
        }
        return bb.tokenizers && (cb.tokenizers = this.tokenizers.map((cb => {
          let sb = bb.tokenizers.find((bb => bb.from == cb));
          return sb ? sb.to : cb
        }))), bb.specializers && (cb.specializers = this.specializers.slice(), cb.specializerSpecs = this.specializerSpecs.map(((sb, kb) => {
          let Wb = bb.specializers.find((bb => bb.from == sb.external));
          if (!Wb) return sb;
          let ab = Object.assign(Object.assign({}, sb), {
            external: Wb.to
          });
          return cb.specializers[kb] = yb(ab), ab
        }))), bb.contextTracker && (cb.context = bb.contextTracker), bb.dialect && (cb.dialect = this.parseDialect(bb.dialect)), null != bb.strict && (cb.strict = bb.strict), bb.wrap && (cb.wrappers = cb.wrappers.concat(bb.wrap)), null != bb.bufferLength && (cb.bufferLength = bb.bufferLength), cb
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
        let cb = this.dynamicPrecedences;
        return null == cb ? 0 : cb[bb] || 0
      }
      parseDialect(bb) {
        let cb = Object.keys(this.dialects),
          sb = cb.map((() => !1));
        if (bb)
          for (let Wb of bb.split(" ")) {
            let bb = cb.indexOf(Wb);
            bb >= 0 && (sb[bb] = !0)
          }
        let kb = null;
        for (let Wb = 0; Wb < cb.length; Wb++)
          if (!sb[Wb])
            for (let bb, sb = this.dialects[cb[Wb]]; 65535 != (bb = this.data[sb++]);)(kb || (kb = new Uint8Array(this.maxTerm + 1)))[bb] = 1;
        return new Jb(bb, sb, kb)
      }
      static deserialize(bb) {
        return new Bb(bb)
      }
    }

    function tb(bb, cb) {
      return bb[cb] | bb[cb + 1] << 16
    }

    function yb(bb) {
      if (bb.external) {
        let cb = bb.extend ? 1 : 0;
        return (sb, kb) => bb.external(sb, kb) << 1 | cb
      }
      return bb.get
    }
    var Pb = sb(40775);
    const Db = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      Eb = new class {
        constructor(bb) {
          this.start = bb.start, this.shift = bb.shift || gb, this.reduce = bb.reduce || gb, this.reuse = bb.reuse || gb, this.hash = bb.hash || (() => 0), this.strict = !1 !== bb.strict
        }
      }({
        start: !1,
        shift: (bb, cb) => 5 == cb || 6 == cb || 320 == cb ? bb : 321 == cb,
        strict: !1
      }),
      ib = new mb(((bb, cb) => {
        let {
          next: sb
        } = bb;
        (125 == sb || -1 == sb || cb.context) && bb.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      Ob = new mb(((bb, cb) => {
        let sb, {
          next: kb
        } = bb;
        Db.indexOf(kb) > -1 || (47 != kb || 47 != (sb = bb.peek(1)) && 42 != sb) && (125 == kb || 59 == kb || -1 == kb || cb.context || bb.acceptToken(316))
      }), {
        contextual: !0
      }),
      Gb = new mb(((bb, cb) => {
        91 != bb.next || cb.context || bb.acceptToken(317)
      }), {
        contextual: !0
      }),
      Kb = new mb(((bb, cb) => {
        let {
          next: sb
        } = bb;
        if (43 == sb || 45 == sb) {
          if (bb.advance(), sb == bb.next) {
            bb.advance();
            let sb = !cb.context && cb.canShift(1);
            bb.acceptToken(sb ? 1 : 2)
          }
        } else 63 == sb && 46 == bb.peek(1) && (bb.advance(), bb.advance(), (bb.next < 48 || bb.next > 57) && bb.acceptToken(3))
      }), {
        contextual: !0
      });

    function Zb(bb, cb) {
      return bb >= 65 && bb <= 90 || bb >= 97 && bb <= 122 || 95 == bb || bb >= 192 || !cb && bb >= 48 && bb <= 57
    }
    const zb = new mb(((bb, cb) => {
        if (60 != bb.next || !cb.dialectEnabled(0)) return;
        if (bb.advance(), 47 == bb.next) return;
        let sb = 0;
        for (; Db.indexOf(bb.next) > -1;) bb.advance(), sb++;
        if (Zb(bb.next, !0)) {
          for (bb.advance(), sb++; Zb(bb.next, !1);) bb.advance(), sb++;
          for (; Db.indexOf(bb.next) > -1;) bb.advance(), sb++;
          if (44 == bb.next) return;
          for (let cb = 0;; cb++) {
            if (7 == cb) {
              if (!Zb(bb.next, !0)) return;
              break
            }
            if (bb.next != "extends".charCodeAt(cb)) break;
            bb.advance(), sb++
          }
        }
        bb.acceptToken(4, -sb)
      })),
      qb = (0, Pb.e)({
        "get set async static": Pb.h.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": Pb.h.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": Pb.h.operatorKeyword,
        "let var const using function class extends": Pb.h.definitionKeyword,
        "import export from": Pb.h.moduleKeyword,
        "with debugger new": Pb.h.keyword,
        TemplateString: Pb.h.special(Pb.h.string),
        super: Pb.h.atom,
        BooleanLiteral: Pb.h.bool,
        this: Pb.h.self,
        null: Pb.h.null,
        Star: Pb.h.modifier,
        VariableName: Pb.h.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": Pb.h.function(Pb.h.variableName),
        VariableDefinition: Pb.h.definition(Pb.h.variableName),
        Label: Pb.h.labelName,
        PropertyName: Pb.h.propertyName,
        PrivatePropertyName: Pb.h.special(Pb.h.propertyName),
        "CallExpression/MemberExpression/PropertyName": Pb.h.function(Pb.h.propertyName),
        "FunctionDeclaration/VariableDefinition": Pb.h.function(Pb.h.definition(Pb.h.variableName)),
        "ClassDeclaration/VariableDefinition": Pb.h.definition(Pb.h.className),
        "NewExpression/VariableName": Pb.h.className,
        PropertyDefinition: Pb.h.definition(Pb.h.propertyName),
        PrivatePropertyDefinition: Pb.h.definition(Pb.h.special(Pb.h.propertyName)),
        UpdateOp: Pb.h.updateOperator,
        "LineComment Hashbang": Pb.h.lineComment,
        BlockComment: Pb.h.blockComment,
        Number: Pb.h.number,
        String: Pb.h.string,
        Escape: Pb.h.escape,
        ArithOp: Pb.h.arithmeticOperator,
        LogicOp: Pb.h.logicOperator,
        BitOp: Pb.h.bitwiseOperator,
        CompareOp: Pb.h.compareOperator,
        RegExp: Pb.h.regexp,
        Equals: Pb.h.definitionOperator,
        Arrow: Pb.h.function(Pb.h.punctuation),
        ": Spread": Pb.h.punctuation,
        "( )": Pb.h.paren,
        "[ ]": Pb.h.squareBracket,
        "{ }": Pb.h.brace,
        "InterpolationStart InterpolationEnd": Pb.h.special(Pb.h.brace),
        ".": Pb.h.derefOperator,
        ", ;": Pb.h.separator,
        "@": Pb.h.meta,
        TypeName: Pb.h.typeName,
        TypeDefinition: Pb.h.definition(Pb.h.typeName),
        "type enum interface implements namespace module declare": Pb.h.definitionKeyword,
        "abstract global Privacy readonly override": Pb.h.modifier,
        "is keyof unique infer asserts": Pb.h.operatorKeyword,
        JSXAttributeValue: Pb.h.attributeValue,
        JSXText: Pb.h.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": Pb.h.angleBracket,
        "JSXIdentifier JSXNameSpacedName": Pb.h.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": Pb.h.attributeName,
        "JSXBuiltin/JSXIdentifier": Pb.h.standard(Pb.h.tagName)
      }),
      db = {
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
      Ab = {
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
      rb = Bb.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: Eb,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [qb],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [Ob, Gb, Kb, zb, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, ib, new nb("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new nb("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: bb => db[bb] || -1
        }, {
          term: 343,
          get: bb => Ab[bb] || -1
        }, {
          term: 95,
          get: bb => wb[bb] || -1
        }],
        tokenPrec: 15201
      });
    var ob = sb(40763),
      Sb = sb(40738),
      Rb = sb(40744),
      vb = sb(40733);
    const Fb = [(0, vb.u)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, vb.u)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, vb.u)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, vb.u)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, vb.u)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, vb.u)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, vb.u)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, vb.u)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, vb.u)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, vb.u)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, vb.u)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      xb = Fb.concat([(0, vb.u)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, vb.u)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, vb.u)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      jb = new kb.n,
      pb = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function bc(bb) {
      return (cb, sb) => {
        let kb = cb.node.getChild("VariableDefinition");
        return kb && sb(kb, bb), !0
      }
    }
    const cc = ["FunctionDeclaration"],
      sc = {
        FunctionDeclaration: bc("function"),
        ClassDeclaration: bc("class"),
        ClassExpression: () => !0,
        EnumDeclaration: bc("constant"),
        TypeAliasDeclaration: bc("type"),
        NamespaceDeclaration: bc("namespace"),
        VariableDefinition(bb, cb) {
          bb.matchContext(cc) || cb(bb, "variable")
        },
        TypeDefinition(bb, cb) {
          cb(bb, "type")
        },
        __proto__: null
      };

    function kc(bb, cb) {
      let sb = jb.get(cb);
      if (sb) return sb;
      let Wb = [],
        ab = !0;

      function Tb(cb, sb) {
        let kb = bb.sliceString(cb.from, cb.to);
        Wb.push({
          label: kb,
          type: sb
        })
      }
      return cb.cursor(kb.g.IncludeAnonymous).iterate((cb => {
        if (ab) ab = !1;
        else if (cb.name) {
          let bb = sc[cb.name];
          if (bb && bb(cb, Tb) || pb.has(cb.name)) return !1
        } else if (cb.to - cb.from > 8192) {
          for (let sb of kc(bb, cb.node)) Wb.push(sb);
          return !1
        }
      })), jb.set(cb, Wb), Wb
    }
    const Wc = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      ac = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function Tc(bb) {
      let cb = (0, ob.lb)(bb.state).resolveInner(bb.pos, -1);
      if (ac.indexOf(cb.name) > -1) return null;
      let sb = "VariableName" == cb.name || cb.to - cb.from < 20 && Wc.test(bb.state.sliceDoc(cb.from, cb.to));
      if (!sb && !bb.explicit) return null;
      let kb = [];
      for (let Wb = cb; Wb; Wb = Wb.parent) pb.has(Wb.name) && (kb = kb.concat(kc(bb.state.doc, Wb)));
      return {
        options: kb,
        from: sb ? cb.from : bb.pos,
        validFor: Wc
      }
    }
    const Uc = ob.k.define({
        name: "javascript",
        parser: rb.configure({
          props: [ob.$.add({
            IfStatement: (0, ob.s)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, ob.s)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: ob.E,
            SwitchBody: bb => {
              let cb = bb.textAfter,
                sb = /^\s*\}/.test(cb),
                kb = /^\s*(case|default)\b/.test(cb);
              return bb.baseIndent + (sb ? 0 : kb ? 1 : 2) * bb.unit
            },
            Block: (0, ob.A)({
              closing: "}"
            }),
            ArrowFunction: bb => bb.baseIndent + bb.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, ob.s)({
              except: /^\s*{/
            }),
            JSXElement(bb) {
              let cb = /^\s*<\//.test(bb.textAfter);
              return bb.lineIndent(bb.node.from) + (cb ? 0 : bb.unit)
            },
            JSXEscape(bb) {
              let cb = /\s*\}/.test(bb.textAfter);
              return bb.lineIndent(bb.node.from) + (cb ? 0 : bb.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": bb => bb.column(bb.node.from) + bb.unit
          }), ob.P.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": ob.H,
            BlockComment: bb => ({
              from: bb.from + 2,
              to: bb.to - 2
            }),
            JSXElement(bb) {
              let cb = bb.firstChild;
              if (!cb || "JSXSelfClosingTag" == cb.name) return null;
              let sb = bb.lastChild;
              return {
                from: cb.to,
                to: sb.type.isError ? bb.to : sb.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(bb) {
              var cb;
              let sb = null === (cb = bb.firstChild) || void 0 === cb ? void 0 : cb.nextSibling,
                kb = bb.lastChild;
              return !sb || sb.type.isError ? null : {
                from: sb.to,
                to: kb.type.isError ? bb.to : kb.from
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
      Ic = {
        test: bb => /^JSX/.test(bb.name),
        facet: (0, ob.x)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      Hc = Uc.configure({
        dialect: "ts"
      }, "typescript"),
      fc = Uc.configure({
        dialect: "jsx",
        props: [ob.gb.add((bb => bb.isTop ? [Ic] : void 0))]
      }),
      Mc = Uc.configure({
        dialect: "jsx ts",
        props: [ob.gb.add((bb => bb.isTop ? [Ic] : void 0))]
      }, "typescript");
    let Xc = bb => ({
      label: bb,
      type: "keyword"
    });
    const nc = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Xc),
      mc = nc.concat(["declare", "implements", "private", "protected", "public"].map(Xc));

    function lc() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        cb = bb.jsx ? bb.typescript ? Mc : fc : bb.typescript ? Hc : Uc,
        sb = bb.typescript ? xb.concat(mc) : Fb.concat(nc);
      return new ob.l(cb, [Uc.data.of({
        autocomplete: (0, vb.r)(ac, (0, vb.l)(sb))
      }), Uc.data.of({
        autocomplete: Tc
      }), bb.jsx ? Cc : []])
    }

    function Qc(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.length;
      for (let kb = null === cb || void 0 === cb ? void 0 : cb.firstChild; kb; kb = kb.nextSibling)
        if ("JSXIdentifier" == kb.name || "JSXBuiltin" == kb.name || "JSXNamespacedName" == kb.name || "JSXMemberExpression" == kb.name) return bb.sliceString(kb.from, Math.min(kb.to, sb));
      return ""
    }
    const ec = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Cc = Rb.h.inputHandler.of(((bb, cb, sb, kb, Wb) => {
        if ((ec ? bb.composing : bb.compositionStarted) || bb.state.readOnly || cb != sb || ">" != kb && "/" != kb || !Uc.isActiveAt(bb.state, cb, -1)) return !1;
        let ab = Wb(),
          {
            state: Tb
          } = ab,
          Ub = Tb.changeByRange((bb => {
            var cb;
            let sb, {
                head: Wb
              } = bb,
              ab = (0, ob.lb)(Tb).resolveInner(Wb - 1, -1);
            if ("JSXStartTag" == ab.name && (ab = ab.parent), Tb.doc.sliceString(Wb - 1, Wb) != kb || "JSXAttributeValue" == ab.name && ab.to > Wb);
            else {
              if (">" == kb && "JSXFragmentTag" == ab.name) return {
                range: bb,
                changes: {
                  from: Wb,
                  insert: "</>"
                }
              };
              if ("/" == kb && "JSXStartCloseTag" == ab.name) {
                let bb = ab.parent,
                  kb = bb.parent;
                if (kb && bb.from == Wb - 2 && ((sb = Qc(Tb.doc, kb.firstChild, Wb)) || "JSXFragmentTag" == (null === (cb = kb.firstChild) || void 0 === cb ? void 0 : cb.name))) {
                  let bb = `${sb}>`;
                  return {
                    range: Sb.j.cursor(Wb + bb.length, -1),
                    changes: {
                      from: Wb,
                      insert: bb
                    }
                  }
                }
              } else if (">" == kb) {
                let cb = function(bb) {
                  for (;;) {
                    if ("JSXOpenTag" == bb.name || "JSXSelfClosingTag" == bb.name || "JSXFragmentTag" == bb.name) return bb;
                    if ("JSXEscape" == bb.name || !bb.parent) return null;
                    bb = bb.parent
                  }
                }(ab);
                if (cb && "JSXOpenTag" == cb.name && !/^\/?>|^<\//.test(Tb.doc.sliceString(Wb, Wb + 2)) && (sb = Qc(Tb.doc, cb, Wb))) return {
                  range: bb,
                  changes: {
                    from: Wb,
                    insert: `</${sb}>`
                  }
                }
              }
            }
            return {
              range: bb
            }
          }));
        return !Ub.changes.empty && (bb.dispatch([ab, Tb.update(Ub, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40763: (bb, cb, sb) => {
    sb.d(cb, {
      $: () => Ob,
      A: () => db,
      E: () => wb,
      F: () => Cc,
      H: () => Fb,
      L: () => Hc,
      P: () => vb,
      Q: () => eb,
      T: () => Pb,
      X: () => Eb,
      ab: () => Sb,
      bb: () => Db,
      d: () => Vc,
      db: () => yb,
      eb: () => Ac,
      gb: () => Mb,
      h: () => ib,
      ib: () => hc,
      jb: () => Qb,
      k: () => mb,
      l: () => Bb,
      lb: () => lb,
      o: () => Zc,
      s: () => rb,
      v: () => Bc,
      x: () => fb
    });
    var kb, Wb = sb(40767),
      ab = sb(40738),
      Tb = sb(40744),
      Ub = sb(40775),
      Ib = sb(40750);
    const Hb = new Wb.i;

    function fb(bb) {
      return ab.n.define({
        combine: bb ? cb => cb.concat(bb) : void 0
      })
    }
    const Mb = new Wb.i;
    class Xb {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = bb, this.name = kb, ab.m.prototype.hasOwnProperty("tree") || Object.defineProperty(ab.m.prototype, "tree", {
          get() {
            return lb(this)
          }
        }), this.parser = cb, this.extension = [gb.of(this), ab.m.languageData.of(((bb, cb, sb) => {
          let kb = nb(bb, cb, sb),
            Wb = kb.type.prop(Hb);
          if (!Wb) return [];
          let ab = bb.facet(Wb),
            Tb = kb.type.prop(Mb);
          if (Tb) {
            let Wb = kb.resolve(cb - kb.from, sb);
            for (let cb of Tb)
              if (cb.test(Wb, bb)) {
                let sb = bb.facet(cb.facet);
                return "replace" == cb.type ? sb : sb.concat(ab)
              }
          }
          return ab
        }))].concat(sb)
      }
      isActiveAt(bb, cb) {
        return nb(bb, cb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Hb) == this.data
      }
      findRegions(bb) {
        let cb = bb.facet(gb);
        if ((null === cb || void 0 === cb ? void 0 : cb.data) == this.data) return [{
          from: 0,
          to: bb.doc.length
        }];
        if (!cb || !cb.allowsNesting) return [];
        let sb = [],
          kb = (bb, cb) => {
            if (bb.prop(Hb) == this.data) return void sb.push({
              from: cb,
              to: cb + bb.length
            });
            let ab = bb.prop(Wb.i.mounted);
            if (ab) {
              if (ab.tree.prop(Hb) == this.data) {
                if (ab.overlay)
                  for (let bb of ab.overlay) sb.push({
                    from: bb.from + cb,
                    to: bb.to + cb
                  });
                else sb.push({
                  from: cb,
                  to: cb + bb.length
                });
                return
              }
              if (ab.overlay) {
                let bb = sb.length;
                if (kb(ab.tree, ab.overlay[0].from + cb), sb.length > bb) return
              }
            }
            for (let sb = 0; sb < bb.children.length; sb++) {
              let ab = bb.children[sb];
              ab instanceof Wb.u && kb(ab, bb.positions[sb] + cb)
            }
          };
        return kb(lb(bb), 0), sb
      }
      get allowsNesting() {
        return !0
      }
    }

    function nb(bb, cb, sb) {
      let kb = bb.facet(gb),
        ab = lb(bb).topNode;
      if (!kb || kb.allowsNesting)
        for (let Tb = ab; Tb; Tb = Tb.enter(cb, sb, Wb.g.ExcludeBuffers | Wb.g.EnterBracketed)) Tb.type.isTop && (ab = Tb);
      return ab
    }
    Xb.setState = ab.F.define();
    class mb extends Xb {
      constructor(bb, cb, sb) {
        super(bb, cb, [], sb), this.parser = cb
      }
      static define(bb) {
        let cb = fb(bb.languageData);
        return new mb(cb, bb.parser.configure({
          props: [Hb.add((bb => bb.isTop ? cb : void 0))]
        }), bb.name)
      }
      configure(bb, cb) {
        return new mb(this.data, this.parser.configure(bb), cb || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function lb(bb) {
      let cb = bb.field(Xb.state, !1);
      return cb ? cb.tree : Wb.u.empty
    }

    function Qb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.doc.length;
      var sb;
      return (null === (sb = bb.field(Xb.state, !1)) || void 0 === sb ? void 0 : sb.context.isDone(cb)) || !1
    }

    function eb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.viewport.to,
        sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        kb = function(bb, cb) {
          let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var kb;
          let Wb = null === (kb = bb.field(Xb.state, !1)) || void 0 === kb ? void 0 : kb.context;
          if (!Wb) return null;
          let ab = Wb.viewport;
          Wb.updateViewport({
            from: 0,
            to: cb
          });
          let Tb = Wb.isDone(cb) || Wb.work(sb, cb) ? Wb.tree : null;
          return Wb.updateViewport(ab), Tb
        }(bb.state, cb, sb);
      return kb != lb(bb.state) && bb.dispatch({}), !!kb
    }
    class Cb {
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
      read(bb, cb) {
        let sb = this.cursorPos - this.string.length;
        return bb < sb || cb >= this.cursorPos ? this.doc.sliceString(bb, cb) : this.string.slice(bb - sb, cb - sb)
      }
    }
    let Nb = null;
    class Vb {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          kb = arguments.length > 3 ? arguments[3] : void 0,
          Wb = arguments.length > 4 ? arguments[4] : void 0,
          ab = arguments.length > 5 ? arguments[5] : void 0,
          Tb = arguments.length > 6 ? arguments[6] : void 0,
          Ub = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = bb, this.state = cb, this.fragments = sb, this.tree = kb, this.treeLen = Wb, this.viewport = ab, this.skipped = Tb, this.scheduleOn = Ub, this.parse = null, this.tempSkipped = []
      }
      static create(bb, cb, sb) {
        return new Vb(bb, cb, [], Wb.u.empty, 0, sb, [], null)
      }
      startParse() {
        return this.parser.startParse(new Cb(this.state.doc), this.fragments)
      }
      work(bb, cb) {
        return null != cb && cb >= this.state.doc.length && (cb = void 0), this.tree != Wb.u.empty && this.isDone(null !== cb && void 0 !== cb ? cb : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var sb;
          if ("number" == typeof bb) {
            let cb = Date.now() + bb;
            bb = () => Date.now() > cb
          }
          for (this.parse || (this.parse = this.startParse()), null != cb && (null == this.parse.stoppedAt || this.parse.stoppedAt > cb) && cb < this.state.doc.length && this.parse.stopAt(cb);;) {
            let kb = this.parse.advance();
            if (kb) {
              if (this.fragments = this.withoutTempSkipped(Wb.q.addTree(kb, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (sb = this.parse.stoppedAt) && void 0 !== sb ? sb : this.state.doc.length, this.tree = kb, this.parse = null, !(this.treeLen < (null !== cb && void 0 !== cb ? cb : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (bb()) return !1
          }
        }))
      }
      takeTree() {
        let bb, cb;
        this.parse && (bb = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > bb) && this.parse.stopAt(bb), this.withContext((() => {
          for (; !(cb = this.parse.advance()););
        })), this.treeLen = bb, this.tree = cb, this.fragments = this.withoutTempSkipped(Wb.q.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(bb) {
        let cb = Nb;
        Nb = this;
        try {
          return bb()
        } finally {
          Nb = cb
        }
      }
      withoutTempSkipped(bb) {
        for (let cb; cb = this.tempSkipped.pop();) bb = Lb(bb, cb.from, cb.to);
        return bb
      }
      changes(bb, cb) {
        let {
          fragments: sb,
          tree: kb,
          treeLen: ab,
          viewport: Tb,
          skipped: Ub
        } = this;
        if (this.takeTree(), !bb.empty) {
          let cb = [];
          if (bb.iterChangedRanges(((bb, sb, kb, Wb) => cb.push({
              fromA: bb,
              toA: sb,
              fromB: kb,
              toB: Wb
            }))), sb = Wb.q.applyChanges(sb, cb), kb = Wb.u.empty, ab = 0, Tb = {
              from: bb.mapPos(Tb.from, -1),
              to: bb.mapPos(Tb.to, 1)
            }, this.skipped.length) {
            Ub = [];
            for (let cb of this.skipped) {
              let sb = bb.mapPos(cb.from, 1),
                kb = bb.mapPos(cb.to, -1);
              sb < kb && Ub.push({
                from: sb,
                to: kb
              })
            }
          }
        }
        return new Vb(this.parser, cb, sb, kb, ab, Tb, Ub, this.scheduleOn)
      }
      updateViewport(bb) {
        if (this.viewport.from == bb.from && this.viewport.to == bb.to) return !1;
        this.viewport = bb;
        let cb = this.skipped.length;
        for (let sb = 0; sb < this.skipped.length; sb++) {
          let {
            from: cb,
            to: kb
          } = this.skipped[sb];
          cb < bb.to && kb > bb.from && (this.fragments = Lb(this.fragments, cb, kb), this.skipped.splice(sb--, 1))
        }
        return !(this.skipped.length >= cb) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(bb, cb) {
        this.skipped.push({
          from: bb,
          to: cb
        })
      }
      static getSkippingParser(bb) {
        return new class extends Wb.p {
          createParse(cb, sb, kb) {
            let ab = kb[0].from,
              Tb = kb[kb.length - 1].to;
            return {
              parsedPos: ab,
              advance() {
                let cb = Nb;
                if (cb) {
                  for (let bb of kb) cb.tempSkipped.push(bb);
                  bb && (cb.scheduleOn = cb.scheduleOn ? Promise.all([cb.scheduleOn, bb]) : bb)
                }
                return this.parsedPos = Tb, new Wb.u(Wb.l.none, [], [], Tb - ab)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(bb) {
        bb = Math.min(bb, this.state.doc.length);
        let cb = this.fragments;
        return this.treeLen >= bb && cb.length && 0 == cb[0].from && cb[0].to >= bb
      }
      static get() {
        return Nb
      }
    }

    function Lb(bb, cb, sb) {
      return Wb.q.applyChanges(bb, [{
        fromA: cb,
        toA: sb,
        fromB: cb,
        toB: sb
      }])
    }
    class ub {
      constructor(bb) {
        this.context = bb, this.tree = bb.tree
      }
      apply(bb) {
        if (!bb.docChanged && this.tree == this.context.tree) return this;
        let cb = this.context.changes(bb.changes, bb.state),
          sb = this.context.treeLen == bb.startState.doc.length ? void 0 : Math.max(bb.changes.mapPos(this.context.treeLen), cb.viewport.to);
        return cb.work(20, sb) || cb.takeTree(), new ub(cb)
      }
      static init(bb) {
        let cb = Math.min(3e3, bb.doc.length),
          sb = Vb.create(bb.facet(gb).parser, bb, {
            from: 0,
            to: cb
          });
        return sb.work(20, cb) || sb.takeTree(), new ub(sb)
      }
    }
    Xb.state = ab.H.define({
      create: ub.init,
      update(bb, cb) {
        for (let sb of cb.effects)
          if (sb.is(Xb.setState)) return sb.value;
        return cb.startState.facet(gb) != cb.state.facet(gb) ? ub.init(cb.state) : bb.apply(cb)
      }
    });
    let Yb = bb => {
      let cb = setTimeout((() => bb()), 500);
      return () => clearTimeout(cb)
    };
    "undefined" != typeof requestIdleCallback && (Yb = bb => {
      let cb = -1,
        sb = setTimeout((() => {
          cb = requestIdleCallback(bb, {
            timeout: 400
          })
        }), 100);
      return () => cb < 0 ? clearTimeout(sb) : cancelIdleCallback(cb)
    });
    const hb = "undefined" != typeof navigator && (null === (kb = navigator.scheduling) || void 0 === kb ? void 0 : kb.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      Jb = Tb.m.fromClass(class {
        constructor(bb) {
          this.view = bb, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(bb) {
          let cb = this.view.state.field(Xb.state).context;
          (cb.updateViewport(bb.view.viewport) || this.view.viewport.to > cb.treeLen) && this.scheduleWork(), (bb.docChanged || bb.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(cb)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: bb
          } = this.view, cb = bb.field(Xb.state);
          cb.tree == cb.context.tree && cb.context.isDone(bb.doc.length) || (this.working = Yb(this.work))
        }
        work(bb) {
          this.working = null;
          let cb = Date.now();
          if (this.chunkEnd < cb && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = cb + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: sb,
            viewport: {
              to: kb
            }
          } = this.view, Wb = sb.field(Xb.state);
          if (Wb.tree == Wb.context.tree && Wb.context.isDone(kb + 1e5)) return;
          let ab = Date.now() + Math.min(this.chunkBudget, 100, bb && !hb ? Math.max(25, bb.timeRemaining() - 5) : 1e9),
            Tb = Wb.context.treeLen < kb && sb.doc.length > kb + 1e3,
            Ub = Wb.context.work((() => hb && hb() || Date.now() > ab), kb + (Tb ? 0 : 1e5));
          this.chunkBudget -= Date.now() - cb, (Ub || this.chunkBudget <= 0) && (Wb.context.takeTree(), this.view.dispatch({
            effects: Xb.setState.of(new ub(Wb.context))
          })), this.chunkBudget > 0 && (!Ub || Tb) && this.scheduleWork(), this.checkAsyncSchedule(Wb.context)
        }
        checkAsyncSchedule(bb) {
          bb.scheduleOn && (this.workScheduled++, bb.scheduleOn.then((() => this.scheduleWork())).catch((bb => (0, Tb.ab)(this.view.state, bb))).then((() => this.workScheduled--)), bb.scheduleOn = null)
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
      gb = ab.n.define({
        combine: bb => bb.length ? bb[0] : null,
        enables: bb => [Xb.state, Jb, Tb.h.contentAttributes.compute([bb], (cb => {
          let sb = cb.facet(bb);
          return sb && sb.name ? {
            "data-language": sb.name
          } : {}
        }))]
      });
    class Bb {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = bb, this.support = cb, this.extension = [bb, cb]
      }
    }
    const tb = ab.n.define(),
      yb = ab.n.define({
        combine: bb => {
          if (!bb.length) return "  ";
          let cb = bb[0];
          if (!cb || /\S/.test(cb) || Array.from(cb).some((bb => bb != cb[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(bb[0]));
          return cb
        }
      });

    function Pb(bb) {
      let cb = bb.facet(yb);
      return 9 == cb.charCodeAt(0) ? bb.tabSize * cb.length : cb.length
    }

    function Db(bb, cb) {
      let sb = "",
        kb = bb.tabSize,
        Wb = bb.facet(yb)[0];
      if ("\t" == Wb) {
        for (; cb >= kb;) sb += "\t", cb -= kb;
        Wb = " "
      }
      for (let ab = 0; ab < cb; ab++) sb += Wb;
      return sb
    }

    function Eb(bb, cb) {
      bb instanceof ab.m && (bb = new ib(bb));
      for (let kb of bb.state.facet(tb)) {
        let sb = kb(bb, cb);
        if (void 0 !== sb) return sb
      }
      let sb = lb(bb.state);
      return sb.length >= cb ? function(bb, cb, sb) {
        let kb = cb.resolveStack(sb),
          Wb = cb.resolveInner(sb, -1).resolve(sb, 0).enterUnfinishedNodesBefore(sb);
        if (Wb != kb.node) {
          let bb = [];
          for (let cb = Wb; cb && !(cb.from < kb.node.from || cb.to > kb.node.to || cb.from == kb.node.from && cb.type == kb.node.type); cb = cb.parent) bb.push(cb);
          for (let cb = bb.length - 1; cb >= 0; cb--) kb = {
            node: bb[cb],
            next: kb
          }
        }
        return Gb(kb, bb, sb)
      }(bb, sb, cb) : null
    }
    class ib {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = bb, this.options = cb, this.unit = Pb(bb)
      }
      lineAt(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sb = this.state.doc.lineAt(bb),
          {
            simulateBreak: kb,
            simulateDoubleBreak: Wb
          } = this.options;
        return null != kb && kb >= sb.from && kb <= sb.to ? Wb && kb == bb ? {
          text: "",
          from: bb
        } : (cb < 0 ? kb < bb : kb <= bb) ? {
          text: sb.text.slice(kb - sb.from),
          from: kb
        } : {
          text: sb.text.slice(0, kb - sb.from),
          from: sb.from
        } : sb
      }
      textAfterPos(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && bb == this.options.simulateBreak) return "";
        let {
          text: sb,
          from: kb
        } = this.lineAt(bb, cb);
        return sb.slice(bb - kb, Math.min(sb.length, bb + 100 - kb))
      }
      column(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: sb,
            from: kb
          } = this.lineAt(bb, cb),
          Wb = this.countColumn(sb, bb - kb),
          ab = this.options.overrideIndentation ? this.options.overrideIndentation(kb) : -1;
        return ab > -1 && (Wb += ab - this.countColumn(sb, sb.search(/\S|$/))), Wb
      }
      countColumn(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.length;
        return (0, ab.Z)(bb, this.state.tabSize, cb)
      }
      lineIndent(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: sb,
            from: kb
          } = this.lineAt(bb, cb),
          Wb = this.options.overrideIndentation;
        if (Wb) {
          let bb = Wb(kb);
          if (bb > -1) return bb
        }
        return this.countColumn(sb, sb.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const Ob = new Wb.i;

    function Gb(bb, cb, sb) {
      for (let kb = bb; kb; kb = kb.next) {
        let bb = Kb(kb.node);
        if (bb) return bb(zb.create(cb, sb, kb))
      }
      return 0
    }

    function Kb(bb) {
      let cb = bb.type.prop(Ob);
      if (cb) return cb;
      let sb, kb = bb.firstChild;
      if (kb && (sb = kb.type.prop(Wb.i.closedBy))) {
        let cb = bb.lastChild,
          kb = cb && sb.indexOf(cb.name) > -1;
        return bb => Ab(bb, !0, 1, void 0, kb && ! function(bb) {
          return bb.pos == bb.options.simulateBreak && bb.options.simulateDoubleBreak
        }(bb) ? cb.from : void 0)
      }
      return null == bb.parent ? Zb : null
    }

    function Zb() {
      return 0
    }
    class zb extends ib {
      constructor(bb, cb, sb) {
        super(bb.state, bb.options), this.base = bb, this.pos = cb, this.context = sb
      }
      get node() {
        return this.context.node
      }
      static create(bb, cb, sb) {
        return new zb(bb, cb, sb)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(bb) {
        let cb = this.state.doc.lineAt(bb.from);
        for (;;) {
          let sb = bb.resolve(cb.from);
          for (; sb.parent && sb.parent.from == sb.from;) sb = sb.parent;
          if (qb(sb, bb)) break;
          cb = this.state.doc.lineAt(sb.from)
        }
        return this.lineIndent(cb.from)
      }
      continue () {
        return Gb(this.context.next, this.base, this.pos)
      }
    }

    function qb(bb, cb) {
      for (let sb = cb; sb; sb = sb.parent)
        if (bb == sb) return !0;
      return !1
    }

    function db(bb) {
      let {
        closing: cb,
        align: sb = !0,
        units: kb = 1
      } = bb;
      return bb => Ab(bb, sb, kb, cb)
    }

    function Ab(bb, cb, sb, kb, Wb) {
      let ab = bb.textAfter,
        Tb = ab.match(/^\s*/)[0].length,
        Ub = kb && ab.slice(Tb, Tb + kb.length) == kb || Wb == bb.pos + Tb,
        Ib = cb ? function(bb) {
          let cb = bb.node,
            sb = cb.childAfter(cb.from),
            kb = cb.lastChild;
          if (!sb) return null;
          let Wb = bb.options.simulateBreak,
            ab = bb.state.doc.lineAt(sb.from),
            Tb = null == Wb || Wb <= ab.from ? ab.to : Math.min(ab.to, Wb);
          for (let Ub = sb.to;;) {
            let bb = cb.childAfter(Ub);
            if (!bb || bb == kb) return null;
            if (!bb.type.isSkipped) {
              if (bb.from >= Tb) return null;
              let cb = /^ */.exec(ab.text.slice(sb.to - ab.from))[0].length;
              return {
                from: sb.from,
                to: sb.to + cb
              }
            }
            Ub = bb.to
          }
        }(bb) : null;
      return Ib ? Ub ? bb.column(Ib.from) : bb.column(Ib.to) : bb.baseIndent + (Ub ? 0 : bb.unit * sb)
    }
    const wb = bb => bb.baseIndent;

    function rb() {
      let {
        except: bb,
        units: cb = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return sb => {
        let kb = bb && bb.test(sb.textAfter);
        return sb.baseIndent + (kb ? 0 : cb * sb.unit)
      }
    }
    const ob = 200;

    function Sb() {
      return ab.m.transactionFilter.of((bb => {
        if (!bb.docChanged || !bb.isUserEvent("input.type") && !bb.isUserEvent("input.complete")) return bb;
        let cb = bb.startState.languageDataAt("indentOnInput", bb.startState.selection.main.head);
        if (!cb.length) return bb;
        let sb = bb.newDoc,
          {
            head: kb
          } = bb.newSelection.main,
          Wb = sb.lineAt(kb);
        if (kb > Wb.from + ob) return bb;
        let ab = sb.sliceString(Wb.from, kb);
        if (!cb.some((bb => bb.test(ab)))) return bb;
        let {
          state: Tb
        } = bb, Ub = -1, Ib = [];
        for (let {
            head: Hb
          }
          of Tb.selection.uQ) {
          let bb = Tb.doc.lineAt(Hb);
          if (bb.from == Ub) continue;
          Ub = bb.from;
          let cb = Eb(Tb, bb.from);
          if (null == cb) continue;
          let sb = /^\s*/.exec(bb.text)[0],
            kb = Db(Tb, cb);
          sb != kb && Ib.push({
            from: bb.from,
            to: bb.from + sb.length,
            insert: kb
          })
        }
        return Ib.length ? [bb, {
          changes: Ib,
          sequential: !0
        }] : bb
      }))
    }
    const Rb = ab.n.define(),
      vb = new Wb.i;

    function Fb(bb) {
      let cb = bb.firstChild,
        sb = bb.lastChild;
      return cb && cb.to < sb.from ? {
        from: cb.to,
        to: sb.type.isError ? bb.to : sb.from
      } : null
    }

    function xb(bb) {
      let cb = bb.lastChild;
      return cb && cb.to == bb.to && cb.type.isError
    }

    function jb(bb, cb, sb) {
      for (let kb of bb.facet(Rb)) {
        let Wb = kb(bb, cb, sb);
        if (Wb) return Wb
      }
      return function(bb, cb, sb) {
        let kb = lb(bb);
        if (kb.length < sb) return null;
        let Wb = null;
        for (let ab = kb.resolveStack(sb, 1); ab; ab = ab.next) {
          let Tb = ab.node;
          if (Tb.to <= sb || Tb.from > sb) continue;
          if (Wb && Tb.from < cb) break;
          let Ub = Tb.type.prop(vb);
          if (Ub && (Tb.to < kb.length - 50 || kb.length == bb.doc.length || !xb(Tb))) {
            let kb = Ub(Tb, bb);
            kb && kb.from <= sb && kb.from >= cb && kb.to > sb && (Wb = kb)
          }
        }
        return Wb
      }(bb, cb, sb)
    }

    function pb(bb, cb) {
      let sb = cb.mapPos(bb.from, 1),
        kb = cb.mapPos(bb.to, -1);
      return sb >= kb ? void 0 : {
        from: sb,
        to: kb
      }
    }
    const bc = ab.F.define({
        map: pb
      }),
      cc = ab.F.define({
        map: pb
      });

    function sc(bb) {
      let cb = [];
      for (let {
          head: sb
        }
        of bb.state.selection.uQ) cb.some((bb => bb.from <= sb && bb.to >= sb)) || cb.push(bb.lineBlockAt(sb));
      return cb
    }
    const kc = ab.H.define({
      create: () => Tb.e.none,
      update(bb, cb) {
        cb.isUserEvent("delete") && cb.changes.iterChangedRanges(((cb, sb) => bb = Wc(bb, cb, sb))), bb = bb.map(cb.changes);
        for (let sb of cb.effects)
          if (sb.is(bc) && !Tc(bb, sb.value.from, sb.value.to)) {
            let {
              preparePlaceholder: kb
            } = cb.state.facet(Mc), Wb = kb ? Tb.e.replace({
              widget: new lc(kb(cb.state, sb.value))
            }) : mc;
            bb = bb.update({
              add: [Wb.range(sb.value.from, sb.value.to)]
            })
          } else sb.is(cc) && (bb = bb.update({
            filter: (bb, cb) => sb.value.from != bb || sb.value.to != cb,
            filterFrom: sb.value.from,
            filterTo: sb.value.to
          }));
        return cb.selection && (bb = Wc(bb, cb.selection.main.head)), bb
      },
      provide: bb => Tb.h.aW.from(bb),
      toJSON(bb, cb) {
        let sb = [];
        return bb.between(0, cb.doc.length, ((bb, cb) => {
          sb.push(bb, cb)
        })), sb
      },
      fromJSON(bb) {
        if (!Array.isArray(bb) || bb.length % 2) throw new RangeError("Invalid JSON for fold state");
        let cb = [];
        for (let sb = 0; sb < bb.length;) {
          let kb = bb[sb++],
            Wb = bb[sb++];
          if ("number" != typeof kb || "number" != typeof Wb) throw new RangeError("Invalid JSON for fold state");
          cb.push(mc.range(kb, Wb))
        }
        return Tb.e.set(cb, !0)
      }
    });

    function Wc(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cb,
        kb = !1;
      return bb.between(cb, sb, ((bb, Wb) => {
        bb < sb && Wb > cb && (kb = !0)
      })), kb ? bb.update({
        filterFrom: cb,
        filterTo: sb,
        filter: (bb, kb) => bb >= sb || kb <= cb
      }) : bb
    }

    function ac(bb, cb, sb) {
      var kb;
      let Wb = null;
      return null === (kb = bb.field(kc, !1)) || void 0 === kb || kb.between(cb, sb, ((bb, cb) => {
        (!Wb || Wb.from > bb) && (Wb = {
          from: bb,
          to: cb
        })
      })), Wb
    }

    function Tc(bb, cb, sb) {
      let kb = !1;
      return bb.between(cb, cb, ((bb, Wb) => {
        bb == cb && Wb == sb && (kb = !0)
      })), kb
    }

    function Uc(bb, cb) {
      return bb.field(kc, !1) ? cb : cb.concat(ab.F.appendConfig.of(Xc()))
    }

    function Ic(bb, cb) {
      let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        kb = bb.state.doc.lineAt(cb.from).number,
        Wb = bb.state.doc.lineAt(cb.to).number;
      return Tb.h.announce.of(`${bb.state.phrase(sb?"Folded lines":"Unfolded lines")} ${kb} ${bb.state.phrase("to")} ${Wb}.`)
    }
    const Hc = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: bb => {
          for (let cb of sc(bb)) {
            let sb = jb(bb.state, cb.from, cb.to);
            if (sb) return bb.dispatch({
              effects: Uc(bb.state, [bc.of(sb), Ic(bb, sb)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: bb => {
          if (!bb.state.field(kc, !1)) return !1;
          let cb = [];
          for (let sb of sc(bb)) {
            let kb = ac(bb.state, sb.from, sb.to);
            kb && cb.push(cc.of(kb), Ic(bb, kb, !1))
          }
          return cb.length && bb.dispatch({
            effects: cb
          }), cb.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: bb => {
          let {
            state: cb
          } = bb, sb = [];
          for (let kb = 0; kb < cb.doc.length;) {
            let Wb = bb.lineBlockAt(kb),
              ab = jb(cb, Wb.from, Wb.to);
            ab && sb.push(bc.of(ab)), kb = (ab ? bb.lineBlockAt(ab.to) : Wb).to + 1
          }
          return sb.length && bb.dispatch({
            effects: Uc(bb.state, sb)
          }), !!sb.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: bb => {
          let cb = bb.state.field(kc, !1);
          if (!cb || !cb.size) return !1;
          let sb = [];
          return cb.between(0, bb.state.doc.length, ((bb, cb) => {
            sb.push(cc.of({
              from: bb,
              to: cb
            }))
          })), bb.dispatch({
            effects: sb
          }), !0
        }
      }],
      fc = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      Mc = ab.n.define({
        combine: bb => (0, ab.X)(bb, fc)
      });

    function Xc(bb) {
      let cb = [kc, Nc];
      return bb && cb.push(Mc.of(bb)), cb
    }

    function nc(bb, cb) {
      let {
        state: sb
      } = bb, kb = sb.facet(Mc), Wb = cb => {
        let sb = bb.lineBlockAt(bb.posAtDOM(cb.target)),
          kb = ac(bb.state, sb.from, sb.to);
        kb && bb.dispatch({
          effects: cc.of(kb)
        }), cb.preventDefault()
      };
      if (kb.placeholderDOM) return kb.placeholderDOM(bb, Wb, cb);
      let ab = document.createElement("span");
      return ab.textContent = kb.placeholderText, ab.setAttribute("aria-label", sb.phrase("folded code")), ab.title = sb.phrase("unfold"), ab.className = "cm-foldPlaceholder", ab.onclick = Wb, ab
    }
    const mc = Tb.e.replace({
      widget: new class extends Tb.p {
        toDOM(bb) {
          return nc(bb, null)
        }
      }
    });
    class lc extends Tb.p {
      constructor(bb) {
        super(), this.value = bb
      }
      eq(bb) {
        return this.value == bb.value
      }
      toDOM(bb) {
        return nc(bb, this.value)
      }
    }
    const Qc = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class ec extends Tb.l {
      constructor(bb, cb) {
        super(), this.config = bb, this.open = cb
      }
      eq(bb) {
        return this.config == bb.config && this.open == bb.open
      }
      toDOM(bb) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let cb = document.createElement("span");
        return cb.textContent = this.open ? this.config.openText : this.config.closedText, cb.title = bb.state.phrase(this.open ? "Fold line" : "Unfold line"), cb
      }
    }

    function Cc() {
      let bb = {
          ...Qc,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        cb = new ec(bb, !0),
        sb = new ec(bb, !1),
        kb = Tb.m.fromClass(class {
          constructor(bb) {
            this.from = bb.viewport.from, this.markers = this.buildMarkers(bb)
          }
          update(cb) {
            (cb.docChanged || cb.viewportChanged || cb.startState.facet(gb) != cb.state.facet(gb) || cb.startState.field(kc, !1) != cb.state.field(kc, !1) || lb(cb.startState) != lb(cb.state) || bb.foldingChanged(cb)) && (this.markers = this.buildMarkers(cb.view))
          }
          buildMarkers(bb) {
            let kb = new ab.w;
            for (let Wb of bb.viewportLineBlocks) {
              let ab = ac(bb.state, Wb.from, Wb.to) ? sb : jb(bb.state, Wb.from, Wb.to) ? cb : null;
              ab && kb.add(Wb.from, Wb.from, ab)
            }
            return kb.finish()
          }
        }),
        {
          domEventHandlers: Wb
        } = bb;
      return [kb, (0, Tb.J)({
        class: "cm-foldGutter",
        markers(bb) {
          var cb;
          return (null === (cb = bb.plugin(kb)) || void 0 === cb ? void 0 : cb.markers) || ab.z.empty
        },
        initialSpacer: () => new ec(bb, !1),
        domEventHandlers: {
          ...Wb,
          click: (bb, cb, sb) => {
            if (Wb.click && Wb.click(bb, cb, sb)) return !0;
            let kb = ac(bb.state, cb.from, cb.to);
            if (kb) return bb.dispatch({
              effects: cc.of(kb)
            }), !0;
            let ab = jb(bb.state, cb.from, cb.to);
            return !!ab && (bb.dispatch({
              effects: bc.of(ab)
            }), !0)
          }
        }
      }), Xc()]
    }
    const Nc = Tb.h.baseTheme({
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
    class Vc {
      constructor(bb, cb) {
        let sb;

        function kb(bb) {
          let cb = Ib.e.newName();
          return (sb || (sb = Object.create(null)))["." + cb] = bb, cb
        }
        this.specs = bb;
        const Wb = "string" == typeof cb.all ? cb.all : cb.all ? kb(cb.all) : void 0,
          ab = cb.scope;
        this.scope = ab instanceof Xb ? bb => bb.prop(Hb) == ab.data : ab ? bb => bb == ab : void 0, this.style = (0, Ub.g)(bb.map((bb => ({
          tag: bb.tag,
          class: bb.class || kb(Object.assign({}, bb, {
            tag: null
          }))
        }))), {
          all: Wb
        }).style, this.module = sb ? new Ib.e(sb) : null, this.themeType = cb.themeType
      }
      static define(bb, cb) {
        return new Vc(bb, cb || {})
      }
    }
    const Lc = ab.n.define(),
      uc = ab.n.define({
        combine: bb => bb.length ? [bb[0]] : null
      });

    function Yc(bb) {
      let cb = bb.facet(Lc);
      return cb.length ? cb : bb.facet(uc)
    }

    function hc(bb, cb) {
      let sb, kb = [gc];
      return bb instanceof Vc && (bb.module && kb.push(Tb.h.styleModule.of(bb.module)), sb = bb.themeType), (null === cb || void 0 === cb ? void 0 : cb.fallback) ? kb.push(uc.of(bb)) : sb ? kb.push(Lc.computeN([Tb.h.darkTheme], (cb => cb.facet(Tb.h.darkTheme) == ("dark" == sb) ? [bb] : []))) : kb.push(Lc.of(bb)), kb
    }
    class Jc {
      constructor(bb) {
        this.markCache = Object.create(null), this.tree = lb(bb.state), this.aW = this.buildDeco(bb, Yc(bb.state)), this.decoratedTo = bb.viewport.to
      }
      update(bb) {
        let cb = lb(bb.state),
          sb = Yc(bb.state),
          kb = sb != Yc(bb.startState),
          {
            viewport: Wb
          } = bb.view,
          ab = bb.changes.mapPos(this.decoratedTo, 1);
        cb.length < Wb.to && !kb && cb.type == this.tree.type && ab >= Wb.to ? (this.aW = this.aW.map(bb.changes), this.decoratedTo = ab) : (cb != this.tree || bb.viewportChanged || kb) && (this.tree = cb, this.aW = this.buildDeco(bb.view, sb), this.decoratedTo = Wb.to)
      }
      buildDeco(bb, cb) {
        if (!cb || !this.tree.length) return Tb.e.none;
        let sb = new ab.w;
        for (let {
            from: kb,
            to: Wb
          }
          of bb.J7)(0, Ub.d)(this.tree, cb, ((bb, cb, kb) => {
          sb.add(bb, cb, this.markCache[kb] || (this.markCache[kb] = Tb.e.mark({
            class: kb
          })))
        }), kb, Wb);
        return sb.finish()
      }
    }
    const gc = ab.s.high(Tb.m.fromClass(Jc, {
        aW: bb => bb.aW
      })),
      Bc = Vc.define([{
        tag: Ub.h.meta,
        color: "#404740"
      }, {
        tag: Ub.h.link,
        textDecoration: "underline"
      }, {
        tag: Ub.h.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: Ub.h.emphasis,
        fontStyle: "italic"
      }, {
        tag: Ub.h.strong,
        fontWeight: "bold"
      }, {
        tag: Ub.h.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Ub.h.keyword,
        color: "#708"
      }, {
        tag: [Ub.h.atom, Ub.h.bool, Ub.h.url, Ub.h.contentSeparator, Ub.h.labelName],
        color: "#219"
      }, {
        tag: [Ub.h.literal, Ub.h.inserted],
        color: "#164"
      }, {
        tag: [Ub.h.string, Ub.h.deleted],
        color: "#a11"
      }, {
        tag: [Ub.h.regexp, Ub.h.escape, Ub.h.special(Ub.h.string)],
        color: "#e40"
      }, {
        tag: Ub.h.definition(Ub.h.variableName),
        color: "#00f"
      }, {
        tag: Ub.h.local(Ub.h.variableName),
        color: "#30a"
      }, {
        tag: [Ub.h.typeName, Ub.h.namespace],
        color: "#085"
      }, {
        tag: Ub.h.className,
        color: "#167"
      }, {
        tag: [Ub.h.special(Ub.h.variableName), Ub.h.macroName],
        color: "#256"
      }, {
        tag: Ub.h.definition(Ub.h.propertyName),
        color: "#00c"
      }, {
        tag: Ub.h.comment,
        color: "#940"
      }, {
        tag: Ub.h.invalid,
        color: "#f00"
      }]),
      tc = Tb.h.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      yc = 1e4,
      Pc = "()[]{}",
      Dc = ab.n.define({
        combine: bb => (0, ab.X)(bb, {
          afterCursor: !0,
          brackets: Pc,
          maxScanDistance: yc,
          renderMatch: Oc
        })
      }),
      Ec = Tb.e.mark({
        class: "cm-matchingBracket"
      }),
      ic = Tb.e.mark({
        class: "cm-nonmatchingBracket"
      });

    function Oc(bb) {
      let cb = [],
        sb = bb.matched ? Ec : ic;
      return cb.push(sb.range(bb.start.from, bb.start.to)), bb.end && cb.push(sb.range(bb.end.from, bb.end.to)), cb
    }

    function Gc(bb) {
      let cb = [],
        sb = bb.facet(Dc);
      for (let kb of bb.selection.uQ) {
        if (!kb.empty) continue;
        let Wb = Ac(bb, kb.head, -1, sb) || kb.head > 0 && Ac(bb, kb.head - 1, 1, sb) || sb.afterCursor && (Ac(bb, kb.head, 1, sb) || kb.head < bb.doc.length && Ac(bb, kb.head + 1, -1, sb));
        Wb && (cb = cb.concat(sb.renderMatch(Wb, bb)))
      }
      return Tb.e.set(cb, !0)
    }
    const Kc = [Tb.m.fromClass(class {
      constructor(bb) {
        this.paused = !1, this.aW = Gc(bb.state)
      }
      update(bb) {
        (bb.docChanged || bb.selectionSet || this.paused) && (bb.view.composing ? (this.aW = this.aW.map(bb.changes), this.paused = !0) : (this.aW = Gc(bb.state), this.paused = !1))
      }
    }, {
      aW: bb => bb.aW
    }), tc];

    function Zc() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Dc.of(bb), Kc]
    }
    const zc = new Wb.i;

    function qc(bb, cb, sb) {
      let kb = bb.prop(cb < 0 ? Wb.i.openedBy : Wb.i.closedBy);
      if (kb) return kb;
      if (1 == bb.name.length) {
        let kb = sb.indexOf(bb.name);
        if (kb > -1 && kb % 2 == (cb < 0 ? 1 : 0)) return [sb[kb + cb]]
      }
      return null
    }

    function dc(bb) {
      let cb = bb.type.prop(zc);
      return cb ? cb(bb.node) : bb
    }

    function Ac(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        Wb = kb.maxScanDistance || yc,
        ab = kb.brackets || Pc,
        Tb = lb(bb),
        Ub = Tb.resolveInner(cb, sb);
      for (let Ib = Ub; Ib; Ib = Ib.parent) {
        let kb = qc(Ib.type, sb, ab);
        if (kb && Ib.from < Ib.to) {
          let Wb = dc(Ib);
          if (Wb && (sb > 0 ? cb >= Wb.from && cb < Wb.to : cb > Wb.from && cb <= Wb.to)) return wc(bb, cb, sb, Ib, Wb, kb, ab)
        }
      }
      return function(bb, cb, sb, kb, Wb, ab, Tb) {
        if (sb < 0 ? !cb : cb == bb.doc.length) return null;
        let Ub = sb < 0 ? bb.sliceDoc(cb - 1, cb) : bb.sliceDoc(cb, cb + 1),
          Ib = Tb.indexOf(Ub);
        if (Ib < 0 || Ib % 2 == 0 != sb > 0) return null;
        let Hb = {
            from: sb < 0 ? cb - 1 : cb,
            to: sb > 0 ? cb + 1 : cb
          },
          fb = bb.doc.iterRange(cb, sb > 0 ? bb.doc.length : 0),
          Mb = 0;
        for (let Xb = 0; !fb.next().done && Xb <= ab;) {
          let bb = fb.value;
          sb < 0 && (Xb += bb.length);
          let ab = cb + Xb * sb;
          for (let cb = sb > 0 ? 0 : bb.length - 1, Ub = sb > 0 ? bb.length : -1; cb != Ub; cb += sb) {
            let Ub = Tb.indexOf(bb[cb]);
            if (!(Ub < 0 || kb.resolveInner(ab + cb, 1).type != Wb))
              if (Ub % 2 == 0 == sb > 0) Mb++;
              else {
                if (1 == Mb) return {
                  start: Hb,
                  end: {
                    from: ab + cb,
                    to: ab + cb + 1
                  },
                  matched: Ub >> 1 == Ib >> 1
                };
                Mb--
              }
          }
          sb > 0 && (Xb += bb.length)
        }
        return fb.done ? {
          start: Hb,
          matched: !1
        } : null
      }(bb, cb, sb, Tb, Ub.type, Wb, ab)
    }

    function wc(bb, cb, sb, kb, Wb, ab, Tb) {
      let Ub = kb.parent,
        Ib = {
          from: Wb.from,
          to: Wb.to
        },
        Hb = 0,
        fb = null === Ub || void 0 === Ub ? void 0 : Ub.cursor();
      if (fb && (sb < 0 ? fb.childBefore(kb.from) : fb.childAfter(kb.to)))
        do {
          if (sb < 0 ? fb.to <= kb.from : fb.from >= kb.to) {
            if (0 == Hb && ab.indexOf(fb.type.name) > -1 && fb.from < fb.to) {
              let bb = dc(fb);
              return {
                start: Ib,
                end: bb ? {
                  from: bb.from,
                  to: bb.to
                } : void 0,
                matched: !0
              }
            }
            if (qc(fb.type, sb, Tb)) Hb++;
            else if (qc(fb.type, -sb, Tb)) {
              if (0 == Hb) {
                let bb = dc(fb);
                return {
                  start: Ib,
                  end: bb && bb.from < bb.to ? {
                    from: bb.from,
                    to: bb.to
                  } : void 0,
                  matched: !1
                }
              }
              Hb--
            }
          }
        } while (sb < 0 ? fb.prevSibling() : fb.nextSibling());
      return {
        start: Ib,
        matched: !1
      }
    }
    const rc = Object.create(null),
      oc = [Wb.l.none],
      Sc = [],
      Rc = Object.create(null),
      vc = Object.create(null);
    for (let [jc, pc] of [
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
      ]) vc[jc] = xc(rc, pc);

    function Fc(bb, cb) {
      Sc.indexOf(bb) > -1 || (Sc.push(bb), console.warn(cb))
    }

    function xc(bb, cb) {
      let sb = [];
      for (let Wb of cb.split(" ")) {
        let cb = [];
        for (let sb of Wb.split(".")) {
          let kb = bb[sb] || Ub.h[sb];
          kb ? "function" == typeof kb ? cb.length ? cb = cb.map(kb) : Fc(sb, `Modifier ${sb} used at start of tag`) : cb.length ? Fc(sb, `Tag ${sb} used as modifier`) : cb = Array.isArray(kb) ? kb : [kb] : Fc(sb, `Unknown highlighting tag ${sb}`)
        }
        for (let bb of cb) sb.push(bb)
      }
      if (!sb.length) return 0;
      let kb = cb.replace(/ /g, "_"),
        ab = kb + " " + sb.map((bb => bb.id)),
        Tb = Rc[ab];
      if (Tb) return Tb.id;
      let Ib = Rc[ab] = Wb.l.define({
        id: oc.length,
        name: kb,
        props: [(0, Ub.e)({
          [kb]: sb
        })]
      });
      return oc.push(Ib), Ib.id
    }
    Tb.g.RTL, Tb.g.LTR
  },
  40792: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Nb,
      d: () => Yb
    });
    var kb = sb(40744),
      Wb = sb(40738),
      ab = sb(40754);
    class Tb {
      constructor(bb, cb, sb) {
        this.from = bb, this.to = cb, this.diagnostic = sb
      }
    }
    class Ub {
      constructor(bb, cb, sb) {
        this.diagnostics = bb, this.panel = cb, this.selected = sb
      }
      static init(bb, cb, sb) {
        let ab = sb.facet(Lb).markerFilter;
        ab && (bb = ab(bb, sb));
        let Tb = bb.slice().sort(((bb, cb) => bb.from - cb.from || bb.to - cb.to)),
          Hb = new Wb.w,
          fb = [],
          Mb = 0,
          Xb = sb.doc.iter(),
          nb = 0,
          mb = sb.doc.length;
        for (let Wb = 0;;) {
          let bb, cb, sb = Wb == Tb.length ? null : Tb[Wb];
          if (!sb && !fb.length) break;
          if (fb.length) bb = Mb, cb = fb.reduce(((bb, cb) => Math.min(bb, cb.to)), sb && sb.from > bb ? sb.from : 1e8);
          else {
            if (bb = sb.from, bb > mb) break;
            cb = sb.to, fb.push(sb), Wb++
          }
          for (; Wb < Tb.length;) {
            let sb = Tb[Wb];
            if (sb.from != bb || !(sb.to > sb.from || sb.to == bb)) {
              cb = Math.min(sb.from, cb);
              break
            }
            fb.push(sb), Wb++, cb = Math.min(sb.to, cb)
          }
          cb = Math.min(cb, mb);
          let ab = !1;
          if (fb.some((sb => sb.from == bb && (sb.to == cb || cb == mb))) && (ab = bb == cb, !ab && cb - bb < 10)) {
            let sb = bb - (nb + Xb.value.length);
            sb > 0 && (Xb.next(sb), nb = bb);
            for (let kb = bb;;) {
              if (kb >= cb) {
                ab = !0;
                break
              }
              if (!Xb.lineBreak && nb + Xb.value.length > kb) break;
              kb = nb + Xb.value.length, nb += Xb.value.length, Xb.next()
            }
          }
          let Ub = ib(fb);
          if (ab) Hb.add(bb, bb, kb.e.widget({
            widget: new gb(Ub),
            diagnostics: fb.slice()
          }));
          else {
            let sb = fb.reduce(((bb, cb) => cb.markClass ? bb + " " + cb.markClass : bb), "");
            Hb.add(bb, cb, kb.e.mark({
              class: "cm-lintRange cm-lintRange-" + Ub + sb,
              diagnostics: fb.slice(),
              inclusiveEnd: fb.some((bb => bb.to > cb))
            }))
          }
          if (Mb = cb, Mb == mb) break;
          for (let kb = 0; kb < fb.length; kb++) fb[kb].to <= Mb && fb.splice(kb--, 1)
        }
        let lb = Hb.finish();
        return new Ub(lb, cb, Ib(lb))
      }
    }

    function Ib(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        kb = null;
      return bb.between(sb, 1e9, ((bb, sb, Wb) => {
        let {
          spec: ab
        } = Wb;
        if (!(cb && ab.diagnostics.indexOf(cb) < 0))
          if (kb) {
            if (ab.diagnostics.indexOf(kb.diagnostic) < 0) return !1;
            kb = new Tb(kb.from, sb, kb.diagnostic)
          } else kb = new Tb(bb, sb, cb || ab.diagnostics[0])
      })), kb
    }

    function Hb(bb, cb) {
      let sb = cb.pos,
        kb = cb.end || sb,
        Wb = bb.state.facet(Lb).hideOn(bb, sb, kb);
      if (null != Wb) return Wb;
      let ab = bb.startState.doc.lineAt(cb.pos);
      return !(!bb.effects.some((bb => bb.is(Mb))) && !bb.changes.touchesRange(ab.from, Math.max(ab.to, kb)))
    }

    function fb(bb, cb) {
      return bb.field(mb, !1) ? cb : cb.concat(Wb.F.appendConfig.of(Ob))
    }
    const Mb = Wb.F.define(),
      Xb = Wb.F.define(),
      nb = Wb.F.define(),
      mb = Wb.H.define({
        create: () => new Ub(kb.e.none, null, null),
        update(bb, cb) {
          if (cb.docChanged && bb.diagnostics.size) {
            let sb = bb.diagnostics.map(cb.changes),
              kb = null,
              Wb = bb.panel;
            if (bb.selected) {
              let Wb = cb.changes.mapPos(bb.selected.from, 1);
              kb = Ib(sb, bb.selected.diagnostic, Wb) || Ib(sb, null, Wb)
            }!sb.size && Wb && cb.state.facet(Lb).autoPanel && (Wb = null), bb = new Ub(sb, Wb, kb)
          }
          for (let sb of cb.effects)
            if (sb.is(Mb)) {
              let kb = cb.state.facet(Lb).autoPanel ? sb.value.length ? tb.open : null : bb.panel;
              bb = Ub.init(sb.value, kb, cb.state)
            } else sb.is(Xb) ? bb = new Ub(bb.diagnostics, sb.value ? tb.open : null, bb.selected) : sb.is(nb) && (bb = new Ub(bb.diagnostics, bb.panel, sb.value));
          return bb
        },
        provide: bb => [kb.nb.from(bb, (bb => bb.panel)), kb.h.aW.from(bb, (bb => bb.diagnostics))]
      });
    const lb = kb.e.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function Qb(bb, cb, sb) {
      let kb, {
          diagnostics: Wb
        } = bb.state.field(mb),
        ab = -1,
        Tb = -1;
      Wb.between(cb - (sb < 0 ? 1 : 0), cb + (sb > 0 ? 1 : 0), ((bb, Wb, Ub) => {
        let {
          spec: Ib
        } = Ub;
        if (cb >= bb && cb <= Wb && (bb == Wb || (cb > bb || sb > 0) && (cb < Wb || sb < 0))) return kb = Ib.diagnostics, ab = bb, Tb = Wb, !1
      }));
      let Ub = bb.state.facet(Lb).tooltipFilter;
      return kb && Ub && (kb = Ub(kb, bb.state)), kb ? {
        pos: ab,
        end: Tb,
        above: bb.state.doc.lineAt(ab).to < Tb,
        create: () => ({
          dom: eb(bb, kb)
        })
      } : null
    }

    function eb(bb, cb) {
      return (0, ab.d)("ul", {
        class: "cm-tooltip-lint"
      }, cb.map((cb => Jb(bb, cb, !1))))
    }
    const Cb = bb => {
        let cb = bb.state.field(mb, !1);
        return !(!cb || !cb.panel) && (bb.dispatch({
          effects: Xb.of(!1)
        }), !0)
      },
      Nb = [{
        key: "Mod-Shift-m",
        run: bb => {
          let cb = bb.state.field(mb, !1);
          cb && cb.panel || bb.dispatch({
            effects: fb(bb.state, [Xb.of(!0)])
          });
          let sb = (0, kb.C)(bb, tb.open);
          return sb && sb.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: bb => {
          let cb = bb.state.field(mb, !1);
          if (!cb) return !1;
          let sb = bb.state.selection.main,
            kb = Ib(cb.diagnostics, null, sb.to + 1);
          return !(!kb && (kb = Ib(cb.diagnostics, null, 0), !kb || kb.from == sb.from && kb.to == sb.to)) && (bb.dispatch({
            selection: {
              anchor: kb.from,
              head: kb.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      Vb = kb.m.fromClass(class {
        constructor(bb) {
          this.view = bb, this.timeout = -1, this.set = !0;
          let {
            delay: cb
          } = bb.state.facet(Lb);
          this.lintTime = Date.now() + cb, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, cb)
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
              sources: cb
            } = bb.facet(Lb);
            cb.length && function(bb, cb, sb) {
              let kb = [],
                Wb = -1;
              for (let ab of bb) ab.then((sb => {
                kb.push(sb), clearTimeout(Wb), kb.length == bb.length ? cb(kb) : Wb = setTimeout((() => cb(kb)), 200)
              }), sb)
            }(cb.map((bb => Promise.resolve(bb(this.view)))), (cb => {
              this.view.state.doc == bb.doc && this.view.dispatch(function(bb, cb) {
                return {
                  effects: fb(bb, [Mb.of(cb)])
                }
              }(this.view.state, cb.reduce(((bb, cb) => bb.concat(cb)))))
            }), (bb => {
              (0, kb.ab)(this.view.state, bb)
            }))
          }
        }
        update(bb) {
          let cb = bb.state.facet(Lb);
          (bb.docChanged || cb != bb.startState.facet(Lb) || cb.needsRefresh && cb.needsRefresh(bb)) && (this.lintTime = Date.now() + cb.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, cb.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const Lb = Wb.n.define({
      combine: bb => ({
        sources: bb.map((bb => bb.source)).filter((bb => null != bb)),
        ...(0, Wb.X)(bb.map((bb => bb.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: ub,
          tooltipFilter: ub,
          needsRefresh: (bb, cb) => bb ? cb ? sb => bb(sb) || cb(sb) : bb : cb,
          hideOn: (bb, cb) => bb ? cb ? (sb, kb, Wb) => bb(sb, kb, Wb) || cb(sb, kb, Wb) : bb : cb,
          autoPanel: (bb, cb) => bb || cb
        })
      })
    });

    function ub(bb, cb) {
      return bb ? cb ? (sb, kb) => cb(bb(sb, kb), kb) : bb : cb
    }

    function Yb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [Lb.of({
        source: bb,
        config: cb
      }), Vb, Ob]
    }

    function hb(bb) {
      let cb = [];
      if (bb) bb: for (let {
          name: sb
        }
        of bb) {
        for (let bb = 0; bb < sb.length; bb++) {
          let kb = sb[bb];
          if (/[a-zA-Z]/.test(kb) && !cb.some((bb => bb.toLowerCase() == kb.toLowerCase()))) {
            cb.push(kb);
            continue bb
          }
        }
        cb.push("")
      }
      return cb
    }

    function Jb(bb, cb, sb) {
      var kb;
      let Wb = sb ? hb(cb.actions) : [];
      return (0, ab.d)("li", {
        class: "cm-diagnostic cm-diagnostic-" + cb.severity
      }, (0, ab.d)("span", {
        class: "cm-diagnosticText"
      }, cb.renderMessage ? cb.renderMessage(bb) : cb.message), null === (kb = cb.actions) || void 0 === kb ? void 0 : kb.map(((sb, kb) => {
        let Tb = !1,
          Ub = kb => {
            if (kb.preventDefault(), Tb) return;
            Tb = !0;
            let Wb = Ib(bb.state.field(mb).diagnostics, cb);
            Wb && sb.apply(bb, Wb.from, Wb.to)
          },
          {
            name: Hb
          } = sb,
          fb = Wb[kb] ? Hb.indexOf(Wb[kb]) : -1,
          Mb = fb < 0 ? Hb : [Hb.slice(0, fb), (0, ab.d)("u", Hb.slice(fb, fb + 1)), Hb.slice(fb + 1)],
          Xb = sb.markClass ? " " + sb.markClass : "";
        return (0, ab.d)("button", {
          type: "button",
          class: "cm-diagnosticAction" + Xb,
          onclick: Ub,
          onmousedown: Ub,
          "aria-label": ` Action: ${Hb}${fb<0?"":` (access key "${Wb[kb]})"`}.`
        }, Mb)
      })), cb.source && (0, ab.d)("div", {
        class: "cm-diagnosticSource"
      }, cb.source))
    }
    class gb extends kb.p {
      constructor(bb) {
        super(), this.sev = bb
      }
      eq(bb) {
        return bb.sev == this.sev
      }
      toDOM() {
        return (0, ab.d)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Bb {
      constructor(bb, cb) {
        this.diagnostic = cb, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = Jb(bb, cb, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class tb {
      constructor(bb) {
        this.view = bb, this.items = [];
        this.list = (0, ab.d)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: cb => {
            if (!(cb.ctrlKey || cb.altKey || cb.metaKey)) {
              if (27 == cb.keyCode) Cb(this.view), this.view.focus();
              else if (38 == cb.keyCode || 33 == cb.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == cb.keyCode || 34 == cb.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == cb.keyCode) this.moveSelection(0);
              else if (35 == cb.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == cb.keyCode) this.view.focus();
              else {
                if (!(cb.keyCode >= 65 && cb.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: sb
                  } = this.items[this.selectedIndex], kb = hb(sb.actions);
                  for (let Wb = 0; Wb < kb.length; Wb++)
                    if (kb[Wb].toUpperCase().charCodeAt(0) == cb.keyCode) {
                      let cb = Ib(this.view.state.field(mb).diagnostics, sb);
                      cb && sb.actions[Wb].apply(bb, cb.from, cb.to)
                    }
                }
              }
              cb.preventDefault()
            }
          },
          onclick: bb => {
            for (let cb = 0; cb < this.items.length; cb++) this.items[cb].dom.contains(bb.target) && this.moveSelection(cb)
          }
        }), this.dom = (0, ab.d)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, ab.d)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => Cb(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let bb = this.view.state.field(mb).selected;
        if (!bb) return -1;
        for (let cb = 0; cb < this.items.length; cb++)
          if (this.items[cb].diagnostic == bb.diagnostic) return cb;
        return -1
      }
      update() {
        let {
          diagnostics: bb,
          selected: cb
        } = this.view.state.field(mb), sb = 0, kb = !1, Wb = null, ab = new Set;
        for (bb.between(0, this.view.state.doc.length, ((bb, Tb, Ub) => {
            let {
              spec: Ib
            } = Ub;
            for (let Hb of Ib.diagnostics) {
              if (ab.has(Hb)) continue;
              ab.add(Hb);
              let bb, Tb = -1;
              for (let cb = sb; cb < this.items.length; cb++)
                if (this.items[cb].diagnostic == Hb) {
                  Tb = cb;
                  break
                } Tb < 0 ? (bb = new Bb(this.view, Hb), this.items.splice(sb, 0, bb), kb = !0) : (bb = this.items[Tb], Tb > sb && (this.items.splice(sb, Tb - sb), kb = !0)), cb && bb.diagnostic == cb.diagnostic ? bb.dom.hasAttribute("aria-selected") || (bb.dom.setAttribute("aria-selected", "true"), Wb = bb) : bb.dom.hasAttribute("aria-selected") && bb.dom.removeAttribute("aria-selected"), sb++
            }
          })); sb < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) kb = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Bb(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), kb = !0), Wb ? (this.list.setAttribute("aria-activedescendant", Wb.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: Wb.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: bb => {
            let {
              sel: cb,
              panel: sb
            } = bb, kb = sb.height / this.list.offsetHeight;
            cb.top < sb.top ? this.list.scrollTop -= (sb.top - cb.top) / kb : cb.bottom > sb.bottom && (this.list.scrollTop += (cb.bottom - sb.bottom) / kb)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), kb && this.sync()
      }
      sync() {
        let bb = this.list.firstChild;

        function cb() {
          let cb = bb;
          bb = cb.nextSibling, cb.remove()
        }
        for (let sb of this.items)
          if (sb.dom.parentNode == this.list) {
            for (; bb != sb.dom;) cb();
            bb = sb.dom.nextSibling
          } else this.list.insertBefore(sb.dom, bb);
        for (; bb;) cb()
      }
      moveSelection(bb) {
        if (this.selectedIndex < 0) return;
        let cb = Ib(this.view.state.field(mb).diagnostics, this.items[bb].diagnostic);
        cb && this.view.dispatch({
          selection: {
            anchor: cb.from,
            head: cb.to
          },
          scrollIntoView: !0,
          effects: nb.of(cb)
        })
      }
      static open(bb) {
        return new tb(bb)
      }
    }

    function yb(bb) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(bb)}</svg>')`
    }

    function Pb(bb) {
      return yb(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${bb}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Db = kb.h.baseTheme({
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
        backgroundImage: Pb("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: Pb("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: Pb("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: Pb("#66d")
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

    function Eb(bb) {
      return "error" == bb ? 4 : "warning" == bb ? 3 : "info" == bb ? 2 : 1
    }

    function ib(bb) {
      let cb = "hint",
        sb = 1;
      for (let kb of bb) {
        let bb = Eb(kb.severity);
        bb > sb && (sb = bb, cb = kb.severity)
      }
      return cb
    }
    kb.l;
    const Ob = [mb, kb.h.aW.compute([mb], (bb => {
      let {
        selected: cb,
        panel: sb
      } = bb.field(mb);
      return cb && sb && cb.from != cb.to ? kb.e.set([lb.range(cb.from, cb.to)]) : kb.e.none
    })), (0, kb.S)(Qb, {
      hideOn: Hb
    }), Db]
  },
  40787: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => jb,
      f: () => eb,
      h: () => pb
    });
    var kb = sb(40744),
      Wb = sb(40738),
      ab = sb(40754);
    const Tb = "function" == typeof String.prototype.normalize ? bb => bb.normalize("NFKD") : bb => bb;
    class Ub {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length,
          Wb = arguments.length > 4 ? arguments[4] : void 0,
          ab = arguments.length > 5 ? arguments[5] : void 0;
        this.test = ab, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = bb.iterRange(sb, kb), this.bufferStart = sb, this.normalize = Wb ? bb => Wb(Tb(bb)) : Tb, this.query = this.normalize(cb)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, Wb.S)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let bb = this.peek();
          if (bb < 0) return this.done = !0, this;
          let cb = (0, Wb.db)(bb),
            sb = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, Wb.V)(bb);
          let kb = this.normalize(cb);
          if (kb.length)
            for (let Wb = 0, ab = sb;; Wb++) {
              let bb = kb.charCodeAt(Wb),
                Tb = this.match(bb, ab, this.bufferPos + this.bufferStart);
              if (Wb == kb.length - 1) {
                if (Tb) return this.value = Tb, this;
                break
              }
              ab == sb && Wb < cb.length && cb.charCodeAt(Wb) == bb && ab++
            }
        }
      }
      match(bb, cb, sb) {
        let kb = null;
        for (let Wb = 0; Wb < this.matches.length; Wb += 2) {
          let cb = this.matches[Wb],
            ab = !1;
          this.query.charCodeAt(cb) == bb && (cb == this.query.length - 1 ? kb = {
            from: this.matches[Wb + 1],
            to: sb
          } : (this.matches[Wb]++, ab = !0)), ab || (this.matches.splice(Wb, 2), Wb -= 2)
        }
        return this.query.charCodeAt(0) == bb && (1 == this.query.length ? kb = {
          from: cb,
          to: sb
        } : this.matches.push(1, cb)), kb && this.test && !this.test(kb.from, kb.to, this.buffer, this.bufferStart) && (kb = null), kb
      }
    }
    "undefined" != typeof Symbol && (Ub.prototype[Symbol.iterator] = function() {
      return this
    });
    const Ib = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      Hb = "gm" + (null == /x/.unicode ? "" : "u");
    class fb {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.length;
        if (this.text = bb, this.to = Wb, this.curLine = "", this.done = !1, this.value = Ib, /\\[sWDnr]|\n|\r|\[\^/.test(cb)) return new nb(bb, cb, sb, kb, Wb);
        this.re = new RegExp(cb, Hb + ((null === sb || void 0 === sb ? void 0 : sb.ignoreCase) ? "i" : "")), this.test = null === sb || void 0 === sb ? void 0 : sb.test, this.iter = bb.iter();
        let ab = bb.lineAt(kb);
        this.curLineStart = ab.from, this.matchPos = mb(bb, kb), this.getLine(this.curLineStart)
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
          let cb = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (cb) {
            let sb = this.curLineStart + cb.index,
              kb = sb + cb[0].length;
            if (this.matchPos = mb(this.text, kb + (sb == kb ? 1 : 0)), sb == this.curLineStart + this.curLine.length && this.nextLine(), (sb < kb || sb > this.value.to) && (!this.test || this.test(sb, kb, cb))) return this.value = {
              from: sb,
              to: kb,
              match: cb
            }, this;
            bb = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), bb = 0
          }
        }
      }
    }
    const Mb = new WeakMap;
    class Xb {
      constructor(bb, cb) {
        this.from = bb, this.text = cb
      }
      get to() {
        return this.from + this.text.length
      }
      static get(bb, cb, sb) {
        let kb = Mb.get(bb);
        if (!kb || kb.from >= sb || kb.to <= cb) {
          let kb = new Xb(cb, bb.sliceString(cb, sb));
          return Mb.set(bb, kb), kb
        }
        if (kb.from == cb && kb.to == sb) return kb;
        let {
          text: Wb,
          from: ab
        } = kb;
        return ab > cb && (Wb = bb.sliceString(cb, ab) + Wb, ab = cb), kb.to < sb && (Wb += bb.sliceString(kb.to, sb)), Mb.set(bb, new Xb(ab, Wb)), new Xb(cb, Wb.slice(cb - ab, sb - ab))
      }
    }
    class nb {
      constructor(bb, cb, sb, kb, Wb) {
        this.text = bb, this.to = Wb, this.done = !1, this.value = Ib, this.matchPos = mb(bb, kb), this.re = new RegExp(cb, Hb + ((null === sb || void 0 === sb ? void 0 : sb.ignoreCase) ? "i" : "")), this.test = null === sb || void 0 === sb ? void 0 : sb.test, this.flat = Xb.get(bb, kb, this.chunkEnd(kb + 5e3))
      }
      chunkEnd(bb) {
        return bb >= this.to ? this.to : this.text.lineAt(bb).to
      }
      next() {
        for (;;) {
          let bb = this.re.lastIndex = this.matchPos - this.flat.from,
            cb = this.re.exec(this.flat.text);
          if (cb && !cb[0] && cb.index == bb && (this.re.lastIndex = bb + 1, cb = this.re.exec(this.flat.text)), cb) {
            let bb = this.flat.from + cb.index,
              sb = bb + cb[0].length;
            if ((this.flat.to >= this.to || cb.index + cb[0].length <= this.flat.text.length - 10) && (!this.test || this.test(bb, sb, cb))) return this.value = {
              from: bb,
              to: sb,
              match: cb
            }, this.matchPos = mb(this.text, sb + (bb == sb ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = Xb.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function mb(bb, cb) {
      if (cb >= bb.length) return cb;
      let sb, kb = bb.lineAt(cb);
      for (; cb < kb.to && (sb = kb.text.charCodeAt(cb - kb.from)) >= 56320 && sb < 57344;) cb++;
      return cb
    }
    "undefined" != typeof Symbol && (fb.prototype[Symbol.iterator] = nb.prototype[Symbol.iterator] = function() {
      return this
    });
    const lb = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      Qb = Wb.n.define({
        combine: bb => (0, Wb.X)(bb, lb, {
          highlightWordAroundCursor: (bb, cb) => bb || cb,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function eb(bb) {
      let cb = [ub, Lb];
      return bb && cb.push(Qb.of(bb)), cb
    }
    const Cb = kb.e.mark({
        class: "cm-selectionMatch"
      }),
      Nb = kb.e.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function Vb(bb, cb, sb, kb) {
      return (0 == sb || bb(cb.sliceDoc(sb - 1, sb)) != Wb.i.Word) && (kb == cb.doc.length || bb(cb.sliceDoc(kb, kb + 1)) != Wb.i.Word)
    }
    const Lb = kb.m.fromClass(class {
        constructor(bb) {
          this.aW = this.getDeco(bb)
        }
        update(bb) {
          (bb.selectionSet || bb.docChanged || bb.viewportChanged) && (this.aW = this.getDeco(bb.view))
        }
        getDeco(bb) {
          let cb = bb.state.facet(Qb),
            {
              state: sb
            } = bb,
            ab = sb.selection;
          if (ab.uQ.length > 1) return kb.e.none;
          let Tb, Ib = ab.main,
            Hb = null;
          if (Ib.empty) {
            if (!cb.highlightWordAroundCursor) return kb.e.none;
            let bb = sb.wordAt(Ib.head);
            if (!bb) return kb.e.none;
            Hb = sb.charCategorizer(Ib.head), Tb = sb.sliceDoc(bb.from, bb.to)
          } else {
            let bb = Ib.to - Ib.from;
            if (bb < cb.minSelectionLength || bb > 200) return kb.e.none;
            if (cb.wholeWords) {
              if (Tb = sb.sliceDoc(Ib.from, Ib.to), Hb = sb.charCategorizer(Ib.head), !Vb(Hb, sb, Ib.from, Ib.to) || ! function(bb, cb, sb, kb) {
                  return bb(cb.sliceDoc(sb, sb + 1)) == Wb.i.Word && bb(cb.sliceDoc(kb - 1, kb)) == Wb.i.Word
                }(Hb, sb, Ib.from, Ib.to)) return kb.e.none
            } else if (Tb = sb.sliceDoc(Ib.from, Ib.to), !Tb) return kb.e.none
          }
          let fb = [];
          for (let Wb of bb.J7) {
            let bb = new Ub(sb.doc, Tb, Wb.from, Wb.to);
            for (; !bb.next().done;) {
              let {
                from: Wb,
                to: ab
              } = bb.value;
              if ((!Hb || Vb(Hb, sb, Wb, ab)) && (Ib.empty && Wb <= Ib.from && ab >= Ib.to ? fb.push(Nb.range(Wb, ab)) : (Wb >= Ib.to || ab <= Ib.from) && fb.push(Cb.range(Wb, ab)), fb.length > cb.maxMatches)) return kb.e.none
            }
          }
          return kb.e.set(fb)
        }
      }, {
        aW: bb => bb.aW
      }),
      ub = kb.h.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const Yb = Wb.n.define({
      combine: bb => (0, Wb.X)(bb, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: bb => new bc(bb),
        scrollToMatch: bb => kb.h.scrollIntoView(bb)
      })
    });
    class hb {
      constructor(bb) {
        this.search = bb.search, this.caseSensitive = !!bb.caseSensitive, this.literal = !!bb.literal, this.regexp = !!bb.regexp, this.replace = bb.replace || "", this.valid = !!this.search && (!this.regexp || function(bb) {
          try {
            return new RegExp(bb, Hb), !0
          } catch (cb) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!bb.wholeWord, this.test = bb.test
      }
      unquote(bb) {
        return this.literal ? bb : bb.replace(/\\([nrt\\])/g, ((bb, cb) => "n" == cb ? "\n" : "r" == cb ? "\r" : "t" == cb ? "\t" : "\\"))
      }
      eq(bb) {
        return this.search == bb.search && this.replace == bb.replace && this.caseSensitive == bb.caseSensitive && this.regexp == bb.regexp && this.wholeWord == bb.wholeWord && this.test == bb.test
      }
      create() {
        return this.regexp ? new Db(this) : new Bb(this)
      }
      getCursor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = bb.doc ? bb : Wb.m.create({
            doc: bb
          });
        return null == sb && (sb = kb.doc.length), this.regexp ? tb(this, kb, cb, sb) : gb(this, kb, cb, sb)
      }
    }
    class Jb {
      constructor(bb) {
        this.spec = bb
      }
    }

    function gb(bb, cb, sb, kb) {
      let ab;
      var Tb, Ib;
      return bb.wholeWord && (Tb = cb.doc, Ib = cb.charCategorizer(cb.selection.main.head), ab = (bb, cb, sb, kb) => ((kb > bb || kb + sb.length < cb) && (kb = Math.max(0, bb - 2), sb = Tb.sliceString(kb, Math.min(Tb.length, cb + 2))), (Ib(yb(sb, bb - kb)) != Wb.i.Word || Ib(Pb(sb, bb - kb)) != Wb.i.Word) && (Ib(Pb(sb, cb - kb)) != Wb.i.Word || Ib(yb(sb, cb - kb)) != Wb.i.Word))), bb.test && (ab = function(bb, cb, sb) {
        return (kb, Wb, ab, Tb) => {
          if (sb && !sb(kb, Wb, ab, Tb)) return !1;
          let Ub = kb >= Tb && Wb <= Tb + ab.length ? ab.slice(kb - Tb, Wb - Tb) : cb.doc.sliceString(kb, Wb);
          return bb(Ub, cb, kb, Wb)
        }
      }(bb.test, cb, ab)), new Ub(cb.doc, bb.unquoted, sb, kb, bb.caseSensitive ? void 0 : bb => bb.toLowerCase(), ab)
    }
    class Bb extends Jb {
      constructor(bb) {
        super(bb)
      }
      nextMatch(bb, cb, sb) {
        let kb = gb(this.spec, bb, sb, bb.doc.length).nextOverlapping();
        if (kb.done) {
          let sb = Math.min(bb.doc.length, cb + this.spec.unquoted.length);
          kb = gb(this.spec, bb, 0, sb).nextOverlapping()
        }
        return kb.done || kb.value.from == cb && kb.value.to == sb ? null : kb.value
      }
      prevMatchInRange(bb, cb, sb) {
        for (let kb = sb;;) {
          let sb = Math.max(cb, kb - 1e4 - this.spec.unquoted.length),
            Wb = gb(this.spec, bb, sb, kb),
            ab = null;
          for (; !Wb.nextOverlapping().done;) ab = Wb.value;
          if (ab) return ab;
          if (sb == cb) return null;
          kb -= 1e4
        }
      }
      prevMatch(bb, cb, sb) {
        let kb = this.prevMatchInRange(bb, 0, cb);
        return kb || (kb = this.prevMatchInRange(bb, Math.max(0, sb - this.spec.unquoted.length), bb.doc.length)), !kb || kb.from == cb && kb.to == sb ? null : kb
      }
      getReplacement(bb) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(bb, cb) {
        let sb = gb(this.spec, bb, 0, bb.doc.length),
          kb = [];
        for (; !sb.next().done;) {
          if (kb.length >= cb) return null;
          kb.push(sb.value)
        }
        return kb
      }
      highlight(bb, cb, sb, kb) {
        let Wb = gb(this.spec, bb, Math.max(0, cb - this.spec.unquoted.length), Math.min(sb + this.spec.unquoted.length, bb.doc.length));
        for (; !Wb.next().done;) kb(Wb.value.from, Wb.value.to)
      }
    }

    function tb(bb, cb, sb, kb) {
      let ab;
      var Tb;
      return bb.wholeWord && (Tb = cb.charCategorizer(cb.selection.main.head), ab = (bb, cb, sb) => !sb[0].length || (Tb(yb(sb.input, sb.index)) != Wb.i.Word || Tb(Pb(sb.input, sb.index)) != Wb.i.Word) && (Tb(Pb(sb.input, sb.index + sb[0].length)) != Wb.i.Word || Tb(yb(sb.input, sb.index + sb[0].length)) != Wb.i.Word)), bb.test && (ab = function(bb, cb, sb) {
        return (kb, Wb, ab) => (!sb || sb(kb, Wb, ab)) && bb(ab[0], cb, kb, Wb)
      }(bb.test, cb, ab)), new fb(cb.doc, bb.search, {
        ignoreCase: !bb.caseSensitive,
        test: ab
      }, sb, kb)
    }

    function yb(bb, cb) {
      return bb.slice((0, Wb._)(bb, cb, !1), cb)
    }

    function Pb(bb, cb) {
      return bb.slice(cb, (0, Wb._)(bb, cb))
    }
    class Db extends Jb {
      nextMatch(bb, cb, sb) {
        let kb = tb(this.spec, bb, sb, bb.doc.length).next();
        return kb.done && (kb = tb(this.spec, bb, 0, cb).next()), kb.done ? null : kb.value
      }
      prevMatchInRange(bb, cb, sb) {
        for (let kb = 1;; kb++) {
          let Wb = Math.max(cb, sb - 1e4 * kb),
            ab = tb(this.spec, bb, Wb, sb),
            Tb = null;
          for (; !ab.next().done;) Tb = ab.value;
          if (Tb && (Wb == cb || Tb.from > Wb + 10)) return Tb;
          if (Wb == cb) return null
        }
      }
      prevMatch(bb, cb, sb) {
        return this.prevMatchInRange(bb, 0, cb) || this.prevMatchInRange(bb, sb, bb.doc.length)
      }
      getReplacement(bb) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((cb, sb) => {
          if ("&" == sb) return bb.match[0];
          if ("$" == sb) return "$";
          for (let kb = sb.length; kb > 0; kb--) {
            let cb = +sb.slice(0, kb);
            if (cb > 0 && cb < bb.match.length) return bb.match[cb] + sb.slice(kb)
          }
          return cb
        }))
      }
      matchAll(bb, cb) {
        let sb = tb(this.spec, bb, 0, bb.doc.length),
          kb = [];
        for (; !sb.next().done;) {
          if (kb.length >= cb) return null;
          kb.push(sb.value)
        }
        return kb
      }
      highlight(bb, cb, sb, kb) {
        let Wb = tb(this.spec, bb, Math.max(0, cb - 250), Math.min(sb + 250, bb.doc.length));
        for (; !Wb.next().done;) kb(Wb.value.from, Wb.value.to)
      }
    }
    const Eb = Wb.F.define(),
      ib = Wb.F.define(),
      Ob = Wb.H.define({
        create: bb => new Gb(Rb(bb).create(), null),
        update(bb, cb) {
          for (let sb of cb.effects) sb.is(Eb) ? bb = new Gb(sb.value.create(), bb.panel) : sb.is(ib) && (bb = new Gb(bb.query, sb.value ? Sb : null));
          return bb
        },
        provide: bb => kb.nb.from(bb, (bb => bb.panel))
      });
    class Gb {
      constructor(bb, cb) {
        this.query = bb, this.panel = cb
      }
    }
    const Kb = kb.e.mark({
        class: "cm-searchMatch"
      }),
      Zb = kb.e.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      zb = kb.m.fromClass(class {
        constructor(bb) {
          this.view = bb, this.aW = this.highlight(bb.state.field(Ob))
        }
        update(bb) {
          let cb = bb.state.field(Ob);
          (cb != bb.startState.field(Ob) || bb.docChanged || bb.selectionSet || bb.viewportChanged) && (this.aW = this.highlight(cb))
        }
        highlight(bb) {
          let {
            query: cb,
            panel: sb
          } = bb;
          if (!sb || !cb.spec.valid) return kb.e.none;
          let {
            view: ab
          } = this, Tb = new Wb.w;
          for (let kb = 0, Wb = ab.J7, Ub = Wb.length; kb < Ub; kb++) {
            let {
              from: bb,
              to: sb
            } = Wb[kb];
            for (; kb < Ub - 1 && sb > Wb[kb + 1].from - 500;) sb = Wb[++kb].to;
            cb.highlight(ab.state, bb, sb, ((bb, cb) => {
              let sb = ab.state.selection.uQ.some((sb => sb.from == bb && sb.to == cb));
              Tb.add(bb, cb, sb ? Zb : Kb)
            }))
          }
          return Tb.finish()
        }
      }, {
        aW: bb => bb.aW
      });

    function qb(bb) {
      return cb => {
        let sb = cb.state.field(Ob, !1);
        return sb && sb.query.spec.valid ? bb(cb, sb) : xb(cb)
      }
    }
    const db = qb(((bb, cb) => {
        let {
          query: sb
        } = cb, {
          to: kb
        } = bb.state.selection.main, ab = sb.nextMatch(bb.state, kb, kb);
        if (!ab) return !1;
        let Tb = Wb.j.single(ab.from, ab.to),
          Ub = bb.state.facet(Yb);
        return bb.dispatch({
          selection: Tb,
          effects: [Wc(bb, ab), Ub.scrollToMatch(Tb.main, bb)],
          userEvent: "select.search"
        }), Fb(bb), !0
      })),
      Ab = qb(((bb, cb) => {
        let {
          query: sb
        } = cb, {
          state: kb
        } = bb, {
          from: ab
        } = kb.selection.main, Tb = sb.prevMatch(kb, ab, ab);
        if (!Tb) return !1;
        let Ub = Wb.j.single(Tb.from, Tb.to),
          Ib = bb.state.facet(Yb);
        return bb.dispatch({
          selection: Ub,
          effects: [Wc(bb, Tb), Ib.scrollToMatch(Ub.main, bb)],
          userEvent: "select.search"
        }), Fb(bb), !0
      })),
      wb = qb(((bb, cb) => {
        let {
          query: sb
        } = cb, kb = sb.matchAll(bb.state, 1e3);
        return !(!kb || !kb.length) && (bb.dispatch({
          selection: Wb.j.create(kb.map((bb => Wb.j.range(bb.from, bb.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      rb = qb(((bb, cb) => {
        let {
          query: sb
        } = cb, {
          state: ab
        } = bb, {
          from: Tb,
          to: Ub
        } = ab.selection.main;
        if (ab.readOnly) return !1;
        let Ib = sb.nextMatch(ab, Tb, Tb);
        if (!Ib) return !1;
        let Hb, fb, Mb = Ib,
          Xb = [],
          nb = [];
        Mb.from == Tb && Mb.to == Ub && (fb = ab.toText(sb.getReplacement(Mb)), Xb.push({
          from: Mb.from,
          to: Mb.to,
          insert: fb
        }), Mb = sb.nextMatch(ab, Mb.from, Mb.to), nb.push(kb.h.announce.of(ab.phrase("replaced match on line $", ab.doc.lineAt(Tb).number) + ".")));
        let mb = bb.state.changes(Xb);
        return Mb && (Hb = Wb.j.single(Mb.from, Mb.to).map(mb), nb.push(Wc(bb, Mb)), nb.push(ab.facet(Yb).scrollToMatch(Hb.main, bb))), bb.dispatch({
          changes: mb,
          selection: Hb,
          effects: nb,
          userEvent: "input.replace"
        }), !0
      })),
      ob = qb(((bb, cb) => {
        let {
          query: sb
        } = cb;
        if (bb.state.readOnly) return !1;
        let Wb = sb.matchAll(bb.state, 1e9).map((bb => {
          let {
            from: cb,
            to: kb
          } = bb;
          return {
            from: cb,
            to: kb,
            insert: sb.getReplacement(bb)
          }
        }));
        if (!Wb.length) return !1;
        let ab = bb.state.phrase("replaced $ matches", Wb.length) + ".";
        return bb.dispatch({
          changes: Wb,
          effects: kb.h.announce.of(ab),
          userEvent: "input.replace.all"
        }), !0
      }));

    function Sb(bb) {
      return bb.state.facet(Yb).createPanel(bb)
    }

    function Rb(bb, cb) {
      var sb, kb, Wb, ab, Tb;
      let Ub = bb.selection.main,
        Ib = Ub.empty || Ub.to > Ub.from + 100 ? "" : bb.sliceDoc(Ub.from, Ub.to);
      if (cb && !Ib) return cb;
      let Hb = bb.facet(Yb);
      return new hb({
        search: (null !== (sb = null === cb || void 0 === cb ? void 0 : cb.literal) && void 0 !== sb ? sb : Hb.literal) ? Ib : Ib.replace(/\n/g, "\\n"),
        caseSensitive: null !== (kb = null === cb || void 0 === cb ? void 0 : cb.caseSensitive) && void 0 !== kb ? kb : Hb.caseSensitive,
        literal: null !== (Wb = null === cb || void 0 === cb ? void 0 : cb.literal) && void 0 !== Wb ? Wb : Hb.literal,
        regexp: null !== (ab = null === cb || void 0 === cb ? void 0 : cb.regexp) && void 0 !== ab ? ab : Hb.regexp,
        wholeWord: null !== (Tb = null === cb || void 0 === cb ? void 0 : cb.wholeWord) && void 0 !== Tb ? Tb : Hb.wholeWord
      })
    }

    function vb(bb) {
      let cb = (0, kb.C)(bb, Sb);
      return cb && cb.dom.querySelector("[main-field]")
    }

    function Fb(bb) {
      let cb = vb(bb);
      cb && cb == bb.root.activeElement && cb.select()
    }
    const xb = bb => {
        let cb = bb.state.field(Ob, !1);
        if (cb && cb.panel) {
          let sb = vb(bb);
          if (sb && sb != bb.root.activeElement) {
            let kb = Rb(bb.state, cb.query.spec);
            kb.valid && bb.dispatch({
              effects: Eb.of(kb)
            }), sb.focus(), sb.select()
          }
        } else bb.dispatch({
          effects: [ib.of(!0), cb ? Eb.of(Rb(bb.state, cb.query.spec)) : Wb.F.appendConfig.of(Tc)]
        });
        return !0
      },
      jb = bb => {
        let cb = bb.state.field(Ob, !1);
        if (!cb || !cb.panel) return !1;
        let sb = (0, kb.C)(bb, Sb);
        return sb && sb.dom.contains(bb.root.activeElement) && bb.focus(), bb.dispatch({
          effects: ib.of(!1)
        }), !0
      },
      pb = [{
        key: "Mod-f",
        run: xb,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: db,
        shift: Ab,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: db,
        shift: Ab,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: jb,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb, kb = cb.selection;
          if (kb.uQ.length > 1 || kb.main.empty) return !1;
          let {
            from: ab,
            to: Tb
          } = kb.main, Ib = [], Hb = 0;
          for (let fb = new Ub(cb.doc, cb.sliceDoc(ab, Tb)); !fb.next().done;) {
            if (Ib.length > 1e3) return !1;
            fb.value.from == ab && (Hb = Ib.length), Ib.push(Wb.j.range(fb.value.from, fb.value.to))
          }
          return sb(cb.update({
            selection: Wb.j.create(Ib, Hb),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: bb => {
          let {
            state: cb
          } = bb, sb = String(cb.doc.lineAt(bb.state.selection.main.head).number), {
            close: ab,
            result: Tb
          } = (0, kb.kb)(bb, {
            label: cb.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: sb
            },
            focus: !0,
            submitLabel: cb.phrase("go")
          });
          return Tb.then((sb => {
            let Tb = sb && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(sb.elements.line.value);
            if (!Tb) return void bb.dispatch({
              effects: ab
            });
            let Ub = cb.doc.lineAt(cb.selection.main.head),
              [, Ib, Hb, fb, Mb] = Tb,
              Xb = fb ? +fb.slice(1) : 0,
              nb = Hb ? +Hb : Ub.number;
            if (Hb && Mb) {
              let bb = nb / 100;
              Ib && (bb = bb * ("-" == Ib ? -1 : 1) + Ub.number / cb.doc.lines), nb = Math.round(cb.doc.lines * bb)
            } else Hb && Ib && (nb = nb * ("-" == Ib ? -1 : 1) + Ub.number);
            let mb = cb.doc.line(Math.max(1, Math.min(cb.doc.lines, nb))),
              lb = Wb.j.cursor(mb.from + Math.max(0, Math.min(Xb, mb.length)));
            bb.dispatch({
              effects: [ab, kb.h.scrollIntoView(lb.from, {
                y: "center"
              })],
              selection: lb
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb, {
            uQ: ab
          } = cb.selection;
          if (ab.some((bb => bb.from === bb.to))) return (bb => {
            let {
              state: cb,
              dispatch: sb
            } = bb, {
              selection: kb
            } = cb, ab = Wb.j.create(kb.uQ.map((bb => cb.wordAt(bb.head) || Wb.j.cursor(bb.head))), kb.mainIndex);
            return !ab.eq(kb) && (sb(cb.update({
              selection: ab
            })), !0)
          })({
            state: cb,
            dispatch: sb
          });
          let Tb = cb.sliceDoc(ab[0].from, ab[0].to);
          if (cb.selection.uQ.some((bb => cb.sliceDoc(bb.from, bb.to) != Tb))) return !1;
          let Ib = function(bb, cb) {
            let {
              main: sb,
              uQ: kb
            } = bb.selection, Wb = bb.wordAt(sb.head), ab = Wb && Wb.from == sb.from && Wb.to == sb.to;
            for (let Tb = !1, Ib = new Ub(bb.doc, cb, kb[kb.length - 1].to);;) {
              if (Ib.next(), !Ib.done) {
                if (Tb && kb.some((bb => bb.from == Ib.value.from))) continue;
                if (ab) {
                  let cb = bb.wordAt(Ib.value.from);
                  if (!cb || cb.from != Ib.value.from || cb.to != Ib.value.to) continue
                }
                return Ib.value
              }
              if (Tb) return null;
              Ib = new Ub(bb.doc, cb, 0, Math.max(0, kb[kb.length - 1].from - 1)), Tb = !0
            }
          }(cb, Tb);
          return !!Ib && (sb(cb.update({
            selection: cb.selection.addRange(Wb.j.range(Ib.from, Ib.to), !1),
            effects: kb.h.scrollIntoView(Ib.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class bc {
      constructor(bb) {
        this.view = bb;
        let cb = this.query = bb.state.field(Ob).query.spec;

        function sb(bb, cb, sb) {
          return (0, ab.d)("button", {
            class: "cm-button",
            name: bb,
            onclick: cb,
            type: "button"
          }, sb)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, ab.d)("input", {
          value: cb.search,
          placeholder: cc(bb, "Find"),
          "aria-label": cc(bb, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, ab.d)("input", {
          value: cb.replace,
          placeholder: cc(bb, "Replace"),
          "aria-label": cc(bb, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, ab.d)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: cb.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, ab.d)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: cb.regexp,
          onchange: this.commit
        }), this.wordField = (0, ab.d)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: cb.wholeWord,
          onchange: this.commit
        }), this.dom = (0, ab.d)("div", {
          onkeydown: bb => this.keydown(bb),
          class: "cm-search"
        }, [this.searchField, sb("next", (() => db(bb)), [cc(bb, "next")]), sb("prev", (() => Ab(bb)), [cc(bb, "previous")]), sb("select", (() => wb(bb)), [cc(bb, "all")]), (0, ab.d)("label", null, [this.caseField, cc(bb, "match case")]), (0, ab.d)("label", null, [this.reField, cc(bb, "regexp")]), (0, ab.d)("label", null, [this.wordField, cc(bb, "by word")]), ...bb.state.readOnly ? [] : [(0, ab.d)("br"), this.replaceField, sb("replace", (() => rb(bb)), [cc(bb, "replace")]), sb("replaceAll", (() => ob(bb)), [cc(bb, "replace all")])], (0, ab.d)("button", {
          name: "close",
          onclick: () => jb(bb),
          "aria-label": cc(bb, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let bb = new hb({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        bb.eq(this.query) || (this.query = bb, this.view.dispatch({
          effects: Eb.of(bb)
        }))
      }
      keydown(bb) {
        (0, kb.jb)(this.view, bb, "search-panel") ? bb.preventDefault(): 13 == bb.keyCode && bb.target == this.searchField ? (bb.preventDefault(), (bb.shiftKey ? Ab : db)(this.view)) : 13 == bb.keyCode && bb.target == this.replaceField && (bb.preventDefault(), rb(this.view))
      }
      update(bb) {
        for (let cb of bb.transactions)
          for (let bb of cb.effects) bb.is(Eb) && !bb.value.eq(this.query) && this.setQuery(bb.value)
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
        return this.view.state.facet(Yb).top
      }
    }

    function cc(bb, cb) {
      return bb.state.phrase(cb)
    }
    const sc = 30,
      kc = /[\s\.,:;?!]/;

    function Wc(bb, cb) {
      let {
        from: sb,
        to: Wb
      } = cb, ab = bb.state.doc.lineAt(sb), Tb = bb.state.doc.lineAt(Wb).to, Ub = Math.max(ab.from, sb - sc), Ib = Math.min(Tb, Wb + sc), Hb = bb.state.sliceDoc(Ub, Ib);
      if (Ub != ab.from)
        for (let kb = 0; kb < sc; kb++)
          if (!kc.test(Hb[kb + 1]) && kc.test(Hb[kb])) {
            Hb = Hb.slice(kb);
            break
          } if (Ib != Tb)
        for (let kb = Hb.length - 1; kb > Hb.length - sc; kb--)
          if (!kc.test(Hb[kb - 1]) && kc.test(Hb[kb])) {
            Hb = Hb.slice(0, kb);
            break
          } return kb.h.announce.of(`${bb.state.phrase("current match")}. ${Hb} ${bb.state.phrase("on line")} ${ab.number}.`)
    }
    const ac = kb.h.baseTheme({
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
      Tc = [Ob, Wb.s.low(zb), ac]
  },
  40744: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Db,
      g: () => Hc,
      h: () => tW,
      l: () => IT,
      m: () => Fc,
      p: () => yb,
      s: () => Da,
      u: () => pW,
      y: () => Ia,
      C: () => pa,
      G: () => Fa,
      J: () => nT,
      L: () => Va,
      K: () => ET,
      P: () => Qa,
      S: () => va,
      V: () => KW,
      Z: () => tT,
      ab: () => oc,
      bb: () => ha,
      fb: () => ta,
      jb: () => qW,
      kb: () => WT,
      nb: () => kT,
      pb: () => Aa
    });
    for (var kb = sb(40738), Wb = sb(40750), ab = {
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
      }, Tb = {
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
      }, Ub = "undefined" != typeof navigator && /Mac/.test(navigator.platform), Ib = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Hb = 0; Hb < 10; Hb++) ab[48 + Hb] = ab[96 + Hb] = String(Hb);
    for (Hb = 1; Hb <= 24; Hb++) ab[Hb + 111] = "F" + Hb;
    for (Hb = 65; Hb <= 90; Hb++) ab[Hb] = String.fromCharCode(Hb + 32), Tb[Hb] = String.fromCharCode(Hb);
    for (var fb in ab) Tb.hasOwnProperty(fb) || (Tb[fb] = ab[fb]);
    var Mb = sb(40754);
    let Xb = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      nb = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const mb = /Edge\/(\d+)/.exec(Xb.userAgent),
      lb = /MSIE \d/.test(Xb.userAgent),
      Qb = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Xb.userAgent),
      eb = !!(lb || Qb || mb),
      Cb = !eb && /gecko\/(\d+)/i.test(Xb.userAgent),
      Nb = !eb && /Chrome\/(\d+)/.exec(Xb.userAgent),
      Vb = "webkitFontSmoothing" in nb.documentElement.style,
      Lb = !eb && /Apple Computer/.test(Xb.vendor),
      ub = Lb && (/Mobile\/\w+/.test(Xb.userAgent) || Xb.maxTouchPoints > 2);
    var Yb = {
      mac: ub || /Mac/.test(Xb.platform),
      windows: /Win/.test(Xb.platform),
      linux: /Linux|X11/.test(Xb.platform),
      ie: eb,
      ie_version: lb ? nb.documentMode || 6 : Qb ? +Qb[1] : mb ? +mb[1] : 0,
      gecko: Cb,
      gecko_version: Cb ? +(/Firefox\/(\d+)/.exec(Xb.userAgent) || [0, 0])[1] : 0,
      chrome: !!Nb,
      chrome_version: Nb ? +Nb[1] : 0,
      ios: ub,
      android: /Android\b/.test(Xb.userAgent),
      webkit: Vb,
      webkit_version: Vb ? +(/\bAppleWebKit\/(\d+)/.exec(Xb.userAgent) || [0, 0])[1] : 0,
      safari: Lb,
      safari_version: Lb ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Xb.userAgent) || [0, 0])[1] : 0,
      tabSize: null != nb.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function hb(bb, cb) {
      for (let sb in bb) "class" == sb && cb.class ? cb.class += " " + bb.class : "style" == sb && cb.style ? cb.style += ";" + bb.style : cb[sb] = bb[sb];
      return cb
    }
    const Jb = Object.create(null);

    function gb(bb, cb, sb) {
      if (bb == cb) return !0;
      bb || (bb = Jb), cb || (cb = Jb);
      let kb = Object.keys(bb),
        Wb = Object.keys(cb);
      if (kb.length - (sb && kb.indexOf(sb) > -1 ? 1 : 0) != Wb.length - (sb && Wb.indexOf(sb) > -1 ? 1 : 0)) return !1;
      for (let ab of kb)
        if (ab != sb && (-1 == Wb.indexOf(ab) || bb[ab] !== cb[ab])) return !1;
      return !0
    }

    function Bb(bb, cb, sb) {
      let kb = !1;
      if (cb)
        for (let Wb in cb) sb && Wb in sb || (kb = !0, "style" == Wb ? bb.style.cssText = "" : bb.removeAttribute(Wb));
      if (sb)
        for (let Wb in sb) cb && cb[Wb] == sb[Wb] || (kb = !0, "style" == Wb ? bb.style.cssText = sb[Wb] : bb.setAttribute(Wb, sb[Wb]));
      return kb
    }

    function tb(bb) {
      let cb = Object.create(null);
      for (let sb = 0; sb < bb.attributes.length; sb++) {
        let kb = bb.attributes[sb];
        cb[kb.name] = kb.value
      }
      return cb
    }
    class yb {
      eq(bb) {
        return !1
      }
      updateDOM(bb, cb, sb) {
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
      coordsAt(bb, cb, sb) {
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
    var Pb = function(bb) {
      return bb[bb.Text = 0] = "Text", bb[bb.WidgetBefore = 1] = "WidgetBefore", bb[bb.WidgetAfter = 2] = "WidgetAfter", bb[bb.WidgetRange = 3] = "WidgetRange", bb
    }(Pb || (Pb = {}));
    class Db extends kb.B {
      constructor(bb, cb, sb, kb) {
        super(), this.startSide = bb, this.endSide = cb, this.widget = sb, this.spec = kb
      }
      get heightRelevant() {
        return !1
      }
      static mark(bb) {
        return new Eb(bb)
      }
      static widget(bb) {
        let cb = Math.max(-1e4, Math.min(1e4, bb.side || 0)),
          sb = !!bb.block;
        return cb += sb && !bb.inlineOrder ? cb > 0 ? 3e8 : -4e8 : cb > 0 ? 1e8 : -1e8, new Ob(bb, cb, cb, sb, bb.widget || null, !1)
      }
      static replace(bb) {
        let cb, sb, kb = !!bb.block;
        if (bb.isBlockGap) cb = -5e8, sb = 4e8;
        else {
          let {
            start: Wb,
            end: ab
          } = Gb(bb, kb);
          cb = (Wb ? kb ? -3e8 : -1 : 5e8) - 1, sb = 1 + (ab ? kb ? 2e8 : 1 : -6e8)
        }
        return new Ob(bb, cb, sb, kb, bb.widget || null, !0)
      }
      static line(bb) {
        return new ib(bb)
      }
      static set(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return kb.z.of(bb, cb)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Db.none = kb.z.empty;
    class Eb extends Db {
      constructor(bb) {
        let {
          start: cb,
          end: sb
        } = Gb(bb);
        super(cb ? -1 : 5e8, sb ? 1 : -6e8, null, bb), this.tagName = bb.tagName || "span", this.attrs = bb.class && bb.attributes ? hb(bb.attributes, {
          class: bb.class
        }) : bb.class ? {
          class: bb.class
        } : bb.attributes || Jb
      }
      eq(bb) {
        return this == bb || bb instanceof Eb && this.tagName == bb.tagName && gb(this.attrs, bb.attrs)
      }
      range(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        if (bb >= cb) throw new RangeError("Mark decorations may not be empty");
        return super.range(bb, cb)
      }
    }
    Eb.prototype.point = !1;
    class ib extends Db {
      constructor(bb) {
        super(-2e8, -2e8, null, bb)
      }
      eq(bb) {
        return bb instanceof ib && this.spec.class == bb.spec.class && gb(this.spec.attributes, bb.spec.attributes)
      }
      range(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        if (cb != bb) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(bb, cb)
      }
    }
    ib.prototype.mapMode = kb.r.TrackBefore, ib.prototype.point = !0;
    class Ob extends Db {
      constructor(bb, cb, sb, Wb, ab, Tb) {
        super(cb, sb, ab, bb), this.block = Wb, this.isReplace = Tb, this.mapMode = Wb ? cb <= 0 ? kb.r.TrackBefore : kb.r.TrackAfter : kb.r.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? Pb.WidgetRange : this.startSide <= 0 ? Pb.WidgetBefore : Pb.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(bb) {
        return bb instanceof Ob && (cb = this.widget, sb = bb.widget, cb == sb || !!(cb && sb && cb.compare(sb))) && this.block == bb.block && this.startSide == bb.startSide && this.endSide == bb.endSide;
        var cb, sb
      }
      range(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        if (this.isReplace && (bb > cb || bb == cb && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && cb != bb) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(bb, cb)
      }
    }

    function Gb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: sb,
          inclusiveEnd: kb
        } = bb;
      return null == sb && (sb = bb.inclusive), null == kb && (kb = bb.inclusive), {
        start: null !== sb && void 0 !== sb ? sb : cb,
        end: null !== kb && void 0 !== kb ? kb : cb
      }
    }

    function Kb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wb = sb.length - 1;
      Wb >= 0 && sb[Wb] + kb >= bb ? sb[Wb] = Math.max(sb[Wb], cb) : sb.push(bb, cb)
    }
    Ob.prototype.point = !0;
    class Zb extends kb.B {
      constructor(bb, cb) {
        super(), this.tagName = bb, this.attributes = cb
      }
      eq(bb) {
        return bb == this || bb instanceof Zb && this.tagName == bb.tagName && gb(this.attributes, bb.attributes)
      }
      static create(bb) {
        return new Zb(bb.tagName, bb.attributes || Jb)
      }
      static set(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return kb.z.of(bb, cb)
      }
    }

    function zb(bb) {
      let cb;
      return cb = 11 == bb.nodeType ? bb.getSelection ? bb : bb.ownerDocument : bb, cb.getSelection()
    }

    function qb(bb, cb) {
      return !!cb && (bb == cb || bb.contains(1 != cb.nodeType ? cb.parentNode : cb))
    }

    function db(bb, cb) {
      if (!cb.anchorNode) return !1;
      try {
        return qb(bb, cb.anchorNode)
      } catch (sb) {
        return !1
      }
    }

    function Ab(bb) {
      return 3 == bb.nodeType ? kc(bb, 0, bb.nodeValue.length).getClientRects() : 1 == bb.nodeType ? bb.getClientRects() : []
    }

    function wb(bb, cb, sb, kb) {
      return !!sb && (Sb(bb, cb, sb, kb, -1) || Sb(bb, cb, sb, kb, 1))
    }

    function rb(bb) {
      for (var cb = 0;; cb++)
        if (!(bb = bb.previousSibling)) return cb
    }

    function ob(bb) {
      return 1 == bb.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(bb.nodeName)
    }

    function Sb(bb, cb, sb, kb, Wb) {
      for (;;) {
        if (bb == sb && cb == kb) return !0;
        if (cb == (Wb < 0 ? 0 : Rb(bb))) {
          if ("DIV" == bb.nodeName) return !1;
          let sb = bb.parentNode;
          if (!sb || 1 != sb.nodeType) return !1;
          cb = rb(bb) + (Wb < 0 ? 0 : 1), bb = sb
        } else {
          if (1 != bb.nodeType) return !1;
          if (1 == (bb = bb.childNodes[cb + (Wb < 0 ? -1 : 0)]).nodeType && "false" == bb.contentEditable) return !1;
          cb = Wb < 0 ? Rb(bb) : 0
        }
      }
    }

    function Rb(bb) {
      return 3 == bb.nodeType ? bb.nodeValue.length : bb.childNodes.length
    }

    function vb(bb, cb) {
      let sb = cb ? bb.left : bb.right;
      return {
        left: sb,
        right: sb,
        top: bb.top,
        bottom: bb.bottom
      }
    }

    function Fb(bb) {
      let cb = bb.visualViewport;
      return cb ? {
        left: 0,
        right: cb.width,
        top: 0,
        bottom: cb.height
      } : {
        left: 0,
        right: bb.innerWidth,
        top: 0,
        bottom: bb.innerHeight
      }
    }

    function xb(bb, cb) {
      let sb = cb.width / bb.offsetWidth,
        kb = cb.height / bb.offsetHeight;
      return (sb > .995 && sb < 1.005 || !isFinite(sb) || Math.abs(cb.width - bb.offsetWidth) < 1) && (sb = 1), (kb > .995 && kb < 1.005 || !isFinite(kb) || Math.abs(cb.height - bb.offsetHeight) < 1) && (kb = 1), {
        scaleX: sb,
        scaleY: kb
      }
    }

    function jb(bb) {
      let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        sb = bb.ownerDocument,
        kb = null,
        Wb = null;
      for (let ab = bb.parentNode; ab && (ab != sb.body && (cb && !kb || !Wb));)
        if (1 == ab.nodeType) !Wb && ab.scrollHeight > ab.clientHeight && (Wb = ab), cb && !kb && ab.scrollWidth > ab.clientWidth && (kb = ab), ab = ab.assignedSlot || ab.parentNode;
        else {
          if (11 != ab.nodeType) break;
          ab = ab.host
        } return {
        x: kb,
        y: Wb
      }
    }
    Zb.prototype.startSide = Zb.prototype.endSide = -1;
    class pb {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(bb) {
        return this.anchorNode == bb.anchorNode && this.anchorOffset == bb.anchorOffset && this.focusNode == bb.focusNode && this.focusOffset == bb.focusOffset
      }
      setRange(bb) {
        let {
          anchorNode: cb,
          focusNode: sb
        } = bb;
        this.set(cb, Math.min(bb.anchorOffset, cb ? Rb(cb) : 0), sb, Math.min(bb.focusOffset, sb ? Rb(sb) : 0))
      }
      set(bb, cb, sb, kb) {
        this.anchorNode = bb, this.anchorOffset = cb, this.focusNode = sb, this.focusOffset = kb
      }
    }
    let bc, cc = null;

    function sc(bb) {
      if (bb.setActive) return bb.setActive();
      if (cc) return bb.focus(cc);
      let cb = [];
      for (let sb = bb; sb && (cb.push(sb, sb.scrollTop, sb.scrollLeft), sb != sb.ownerDocument); sb = sb.parentNode);
      if (bb.focus(null == cc ? {
          get preventScroll() {
            return cc = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !cc) {
        cc = !1;
        for (let bb = 0; bb < cb.length;) {
          let sb = cb[bb++],
            kb = cb[bb++],
            Wb = cb[bb++];
          sb.scrollTop != kb && (sb.scrollTop = kb), sb.scrollLeft != Wb && (sb.scrollLeft = Wb)
        }
      }
    }

    function kc(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cb,
        kb = bc || (bc = document.createRange());
      return kb.setEnd(bb, sb), kb.setStart(bb, cb), kb
    }

    function Wc(bb, cb, sb, kb) {
      let Wb = {
        key: cb,
        code: cb,
        keyCode: sb,
        which: sb,
        cancelable: !0
      };
      kb && ({
        altKey: Wb.altKey,
        ctrlKey: Wb.ctrlKey,
        shiftKey: Wb.shiftKey,
        metaKey: Wb.metaKey
      } = kb);
      let ab = new KeyboardEvent("keydown", Wb);
      ab.synthetic = !0, bb.dispatchEvent(ab);
      let Tb = new KeyboardEvent("keyup", Wb);
      return Tb.synthetic = !0, bb.dispatchEvent(Tb), ab.defaultPrevented || Tb.defaultPrevented
    }

    function ac(bb) {
      return bb instanceof Window ? bb.pageYOffset > Math.max(0, bb.document.documentElement.scrollHeight - bb.innerHeight - 4) : bb.scrollTop > Math.max(1, bb.scrollHeight - bb.clientHeight - 4)
    }

    function Tc(bb, cb) {
      for (let sb = bb, kb = cb;;) {
        if (3 == sb.nodeType && kb > 0) return {
          node: sb,
          offset: kb
        };
        if (1 == sb.nodeType && kb > 0) {
          if ("false" == sb.contentEditable) return null;
          sb = sb.childNodes[kb - 1], kb = Rb(sb)
        } else {
          if (!sb.parentNode || ob(sb)) return null;
          kb = rb(sb), sb = sb.parentNode
        }
      }
    }

    function Uc(bb, cb) {
      for (let sb = bb, kb = cb;;) {
        if (3 == sb.nodeType && kb < sb.nodeValue.length) return {
          node: sb,
          offset: kb
        };
        if (1 == sb.nodeType && kb < sb.childNodes.length) {
          if ("false" == sb.contentEditable) return null;
          sb = sb.childNodes[kb], kb = 0
        } else {
          if (!sb.parentNode || ob(sb)) return null;
          kb = rb(sb) + 1, sb = sb.parentNode
        }
      }
    }
    Yb.safari && Yb.safari_version >= 26 && (cc = !1);
    class Ic {
      constructor(bb, cb) {
        let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = bb, this.offset = cb, this.precise = sb
      }
      static before(bb, cb) {
        return new Ic(bb.parentNode, rb(bb), cb)
      }
      static after(bb, cb) {
        return new Ic(bb.parentNode, rb(bb) + 1, cb)
      }
    }
    var Hc = function(bb) {
      return bb[bb.LTR = 0] = "LTR", bb[bb.RTL = 1] = "RTL", bb
    }(Hc || (Hc = {}));
    const fc = Hc.LTR,
      Mc = Hc.RTL;

    function Xc(bb) {
      let cb = [];
      for (let sb = 0; sb < bb.length; sb++) cb.push(1 << +bb[sb]);
      return cb
    }
    const nc = Xc("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      mc = Xc("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      lc = Object.create(null),
      Qc = [];
    for (let iT of ["()", "[]", "{}"]) {
      let bb = iT.charCodeAt(0),
        cb = iT.charCodeAt(1);
      lc[bb] = cb, lc[cb] = -bb
    }

    function ec(bb) {
      return bb <= 247 ? nc[bb] : 1424 <= bb && bb <= 1524 ? 2 : 1536 <= bb && bb <= 1785 ? mc[bb - 1536] : 1774 <= bb && bb <= 2220 ? 4 : 8192 <= bb && bb <= 8204 ? 256 : 64336 <= bb && bb <= 65023 ? 4 : 1
    }
    const Cc = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class Nc {
      get dir() {
        return this.level % 2 ? Mc : fc
      }
      constructor(bb, cb, sb) {
        this.from = bb, this.to = cb, this.level = sb
      }
      side(bb, cb) {
        return this.dir == cb == bb ? this.to : this.from
      }
      forward(bb, cb) {
        return bb == (this.dir == cb)
      }
      static find(bb, cb, sb, kb) {
        let Wb = -1;
        for (let ab = 0; ab < bb.length; ab++) {
          let Tb = bb[ab];
          if (Tb.from <= cb && Tb.to >= cb) {
            if (Tb.level == sb) return ab;
            (Wb < 0 || (0 != kb ? kb < 0 ? Tb.from < cb : Tb.to > cb : bb[Wb].level > Tb.level)) && (Wb = ab)
          }
        }
        if (Wb < 0) throw new RangeError("Index out of range");
        return Wb
      }
    }

    function Vc(bb, cb) {
      if (bb.length != cb.length) return !1;
      for (let sb = 0; sb < bb.length; sb++) {
        let kb = bb[sb],
          Wb = cb[sb];
        if (kb.from != Wb.from || kb.to != Wb.to || kb.direction != Wb.direction || !Vc(kb.inner, Wb.inner)) return !1
      }
      return !0
    }
    const Lc = [];

    function uc(bb, cb, sb, kb, Wb, ab, Tb) {
      let Ub = kb % 2 ? 2 : 1;
      if (kb % 2 == Wb % 2)
        for (let Ib = cb, Hb = 0; Ib < sb;) {
          let cb = !0,
            fb = !1;
          if (Hb == ab.length || Ib < ab[Hb].from) {
            let bb = Lc[Ib];
            bb != Ub && (cb = !1, fb = 16 == bb)
          }
          let Mb = cb || 1 != Ub ? null : [],
            Xb = cb ? kb : kb + 1,
            nb = Ib;
          bb: for (;;)
            if (Hb < ab.length && nb == ab[Hb].from) {
              if (fb) break bb;
              let mb = ab[Hb];
              if (!cb)
                for (let bb = mb.to, cb = Hb + 1;;) {
                  if (bb == sb) break bb;
                  if (!(cb < ab.length && ab[cb].from == bb)) {
                    if (Lc[bb] == Ub) break bb;
                    break
                  }
                  bb = ab[cb++].to
                }
              if (Hb++, Mb) Mb.push(mb);
              else {
                mb.from > Ib && Tb.push(new Nc(Ib, mb.from, Xb)), Yc(bb, mb.direction == fc != !(Xb % 2) ? kb + 1 : kb, Wb, mb.inner, mb.from, mb.to, Tb), Ib = mb.to
              }
              nb = mb.to
            } else {
              if (nb == sb || (cb ? Lc[nb] != Ub : Lc[nb] == Ub)) break;
              nb++
            } Mb ? uc(bb, Ib, nb, kb + 1, Wb, Mb, Tb) : Ib < nb && Tb.push(new Nc(Ib, nb, Xb)), Ib = nb
        } else
          for (let Ib = sb, Hb = ab.length; Ib > cb;) {
            let sb = !0,
              fb = !1;
            if (!Hb || Ib > ab[Hb - 1].to) {
              let bb = Lc[Ib - 1];
              bb != Ub && (sb = !1, fb = 16 == bb)
            }
            let Mb = sb || 1 != Ub ? null : [],
              Xb = sb ? kb : kb + 1,
              nb = Ib;
            bb: for (;;)
              if (Hb && nb == ab[Hb - 1].to) {
                if (fb) break bb;
                let mb = ab[--Hb];
                if (!sb)
                  for (let bb = mb.from, sb = Hb;;) {
                    if (bb == cb) break bb;
                    if (!sb || ab[sb - 1].to != bb) {
                      if (Lc[bb - 1] == Ub) break bb;
                      break
                    }
                    bb = ab[--sb].from
                  }
                if (Mb) Mb.push(mb);
                else {
                  mb.to < Ib && Tb.push(new Nc(mb.to, Ib, Xb)), Yc(bb, mb.direction == fc != !(Xb % 2) ? kb + 1 : kb, Wb, mb.inner, mb.from, mb.to, Tb), Ib = mb.from
                }
                nb = mb.from
              } else {
                if (nb == cb || (sb ? Lc[nb - 1] != Ub : Lc[nb - 1] == Ub)) break;
                nb--
              } Mb ? uc(bb, nb, Ib, kb + 1, Wb, Mb, Tb) : nb < Ib && Tb.push(new Nc(nb, Ib, Xb)), Ib = nb
          }
    }

    function Yc(bb, cb, sb, kb, Wb, ab, Tb) {
      let Ub = cb % 2 ? 2 : 1;
      ! function(bb, cb, sb, kb, Wb) {
        for (let ab = 0; ab <= kb.length; ab++) {
          let Tb = ab ? kb[ab - 1].to : cb,
            Ub = ab < kb.length ? kb[ab].from : sb,
            Ib = ab ? 256 : Wb;
          for (let cb = Tb, sb = Ib, kb = Ib; cb < Ub; cb++) {
            let Wb = ec(bb.charCodeAt(cb));
            512 == Wb ? Wb = sb : 8 == Wb && 4 == kb && (Wb = 16), Lc[cb] = 4 == Wb ? 2 : Wb, 7 & Wb && (kb = Wb), sb = Wb
          }
          for (let bb = Tb, cb = Ib, kb = Ib; bb < Ub; bb++) {
            let Wb = Lc[bb];
            if (128 == Wb) bb < Ub - 1 && cb == Lc[bb + 1] && 24 & cb ? Wb = Lc[bb] = cb : Lc[bb] = 256;
            else if (64 == Wb) {
              let Wb = bb + 1;
              for (; Wb < Ub && 64 == Lc[Wb];) Wb++;
              let ab = bb && 8 == cb || Wb < sb && 8 == Lc[Wb] ? 1 == kb ? 1 : 8 : 256;
              for (let cb = bb; cb < Wb; cb++) Lc[cb] = ab;
              bb = Wb - 1
            } else 8 == Wb && 1 == kb && (Lc[bb] = 1);
            cb = Wb, 7 & Wb && (kb = Wb)
          }
        }
      }(bb, Wb, ab, kb, Ub),
      function(bb, cb, sb, kb, Wb) {
        let ab = 1 == Wb ? 2 : 1;
        for (let Tb = 0, Ub = 0, Ib = 0; Tb <= kb.length; Tb++) {
          let Hb = Tb ? kb[Tb - 1].to : cb,
            fb = Tb < kb.length ? kb[Tb].from : sb;
          for (let cb, sb, kb, Tb = Hb; Tb < fb; Tb++)
            if (sb = lc[cb = bb.charCodeAt(Tb)])
              if (sb < 0) {
                for (let bb = Ub - 3; bb >= 0; bb -= 3)
                  if (Qc[bb + 1] == -sb) {
                    let cb = Qc[bb + 2],
                      sb = 2 & cb ? Wb : 4 & cb ? 1 & cb ? ab : Wb : 0;
                    sb && (Lc[Tb] = Lc[Qc[bb]] = sb), Ub = bb;
                    break
                  }
              } else {
                if (189 == Qc.length) break;
                Qc[Ub++] = Tb, Qc[Ub++] = cb, Qc[Ub++] = Ib
              }
          else if (2 == (kb = Lc[Tb]) || 1 == kb) {
            let bb = kb == Wb;
            Ib = bb ? 0 : 1;
            for (let cb = Ub - 3; cb >= 0; cb -= 3) {
              let sb = Qc[cb + 2];
              if (2 & sb) break;
              if (bb) Qc[cb + 2] |= 2;
              else {
                if (4 & sb) break;
                Qc[cb + 2] |= 4
              }
            }
          }
        }
      }(bb, Wb, ab, kb, Ub),
      function(bb, cb, sb, kb) {
        for (let Wb = 0, ab = kb; Wb <= sb.length; Wb++) {
          let Tb = Wb ? sb[Wb - 1].to : bb,
            Ub = Wb < sb.length ? sb[Wb].from : cb;
          for (let Ib = Tb; Ib < Ub;) {
            let Tb = Lc[Ib];
            if (256 == Tb) {
              let Tb = Ib + 1;
              for (;;)
                if (Tb == Ub) {
                  if (Wb == sb.length) break;
                  Tb = sb[Wb++].to, Ub = Wb < sb.length ? sb[Wb].from : cb
                } else {
                  if (256 != Lc[Tb]) break;
                  Tb++
                } let Hb = 1 == ab,
                fb = Hb == (1 == (Tb < cb ? Lc[Tb] : kb)) ? Hb ? 1 : 2 : kb;
              for (let cb = Tb, kb = Wb, ab = kb ? sb[kb - 1].to : bb; cb > Ib;) cb == ab && (cb = sb[--kb].from, ab = kb ? sb[kb - 1].to : bb), Lc[--cb] = fb;
              Ib = Tb
            } else ab = Tb, Ib++
          }
        }
      }(Wb, ab, kb, Ub), uc(bb, Wb, ab, cb, sb, kb, Tb)
    }

    function hc(bb, cb, sb) {
      if (!bb) return [new Nc(0, 0, cb == Mc ? 1 : 0)];
      if (cb == fc && !sb.length && !Cc.test(bb)) return Jc(bb.length);
      if (sb.length)
        for (; bb.length > Lc.length;) Lc[Lc.length] = 256;
      let kb = [],
        Wb = cb == fc ? 0 : 1;
      return Yc(bb, Wb, Wb, sb, 0, bb.length, kb), kb
    }

    function Jc(bb) {
      return [new Nc(0, bb, 0)]
    }
    let gc = "";

    function Bc(bb, cb, sb, Wb, ab) {
      var Tb;
      let Ub = Wb.head - bb.from,
        Ib = Nc.find(cb, Ub, null !== (Tb = Wb.bidiLevel) && void 0 !== Tb ? Tb : -1, Wb.assoc),
        Hb = cb[Ib],
        fb = Hb.side(ab, sb);
      if (Ub == fb) {
        let bb = Ib += ab ? 1 : -1;
        if (bb < 0 || bb >= cb.length) return null;
        Hb = cb[Ib = bb], Ub = Hb.side(!ab, sb), fb = Hb.side(ab, sb)
      }
      let Mb = (0, kb._)(bb.text, Ub, Hb.forward(ab, sb));
      (Mb < Hb.from || Mb > Hb.to) && (Mb = fb), gc = bb.text.slice(Math.min(Ub, Mb), Math.max(Ub, Mb));
      let Xb = Ib == (ab ? cb.length - 1 : 0) ? null : cb[Ib + (ab ? 1 : -1)];
      return Xb && Mb == fb && Xb.level + (ab ? 0 : 1) < Hb.level ? kb.j.cursor(Xb.side(!ab, sb) + bb.from, Xb.forward(ab, sb) ? 1 : -1, Xb.level) : kb.j.cursor(Mb + bb.from, Hb.forward(ab, sb) ? -1 : 1, Hb.level)
    }

    function tc(bb, cb, sb) {
      for (let kb = cb; kb < sb; kb++) {
        let cb = ec(bb.charCodeAt(kb));
        if (1 == cb) return fc;
        if (2 == cb || 4 == cb) return Mc
      }
      return fc
    }
    const yc = kb.n.define(),
      Pc = kb.n.define(),
      Dc = kb.n.define(),
      Ec = kb.n.define(),
      ic = kb.n.define(),
      Oc = kb.n.define(),
      Gc = kb.n.define(),
      Kc = kb.n.define(),
      Zc = kb.n.define(),
      zc = kb.n.define({
        combine: bb => bb.some((bb => bb))
      }),
      qc = kb.n.define({
        combine: bb => bb.some((bb => bb))
      }),
      dc = kb.n.define();
    class Ac {
      constructor(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = bb, this.y = cb, this.x = sb, this.yMargin = kb, this.xMargin = Wb, this.isSnapshot = ab
      }
      map(bb) {
        return bb.empty ? this : new Ac(this.range.map(bb), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(bb) {
        return this.range.to <= bb.doc.length ? this : new Ac(kb.j.cursor(bb.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const wc = kb.F.define({
        map: (bb, cb) => bb.map(cb)
      }),
      rc = kb.F.define();

    function oc(bb, cb, sb) {
      let kb = bb.facet(Ec);
      kb.length ? kb[0](cb) : window.onerror && window.onerror(String(cb), sb, void 0, void 0, cb) || (sb ? console.error(sb + ":", cb) : console.error(cb))
    }
    const Sc = kb.n.define({
      combine: bb => !bb.length || bb[0]
    });
    let Rc = 0;
    const vc = kb.n.define({
      combine: bb => bb.filter(((cb, sb) => {
        for (let kb = 0; kb < sb; kb++)
          if (bb[kb].plugin == cb.plugin) return !1;
        return !0
      }))
    });
    class Fc {
      constructor(bb, cb, sb, kb, Wb) {
        this.id = bb, this.create = cb, this.domEventHandlers = sb, this.domEventObservers = kb, this.baseExtensions = Wb(this), this.extension = this.baseExtensions.concat(vc.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(bb) {
        return this.baseExtensions.concat(vc.of({
          plugin: this,
          arg: bb
        }))
      }
      static define(bb, cb) {
        const {
          eventHandlers: sb,
          eventObservers: kb,
          provide: Wb,
          aW: ab
        } = cb || {};
        return new Fc(Rc++, bb, sb, kb, (bb => {
          let cb = [];
          return ab && cb.push(bs.of((cb => {
            let sb = cb.plugin(bb);
            return sb ? ab(sb) : Db.none
          }))), Wb && cb.push(Wb(bb)), cb
        }))
      }
      static fromClass(bb, cb) {
        return Fc.define(((cb, sb) => new bb(cb, sb)), cb)
      }
    }
    class xc {
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
            } catch (cb) {
              if (oc(bb.state, cb, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (sb) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(bb, this.spec.arg)
        } catch (cb) {
          oc(bb.state, cb, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(bb) {
        var cb;
        if (null === (cb = this.value) || void 0 === cb ? void 0 : cb.destroy) try {
          this.value.destroy()
        } catch (sb) {
          oc(bb.state, sb, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const jc = kb.n.define(),
      pc = kb.n.define(),
      bs = kb.n.define(),
      cs = kb.n.define(),
      ss = kb.n.define(),
      ks = kb.n.define(),
      Ws = kb.n.define();

    function as(bb, cb) {
      let sb = bb.state.facet(Ws);
      if (!sb.length) return sb;
      let Wb = sb.map((cb => cb instanceof Function ? cb(bb) : cb)),
        ab = [];
      return kb.z.spans(Wb, cb.from, cb.to, {
        point() {},
        span(bb, sb, kb, Wb) {
          let Tb = bb - cb.from,
            Ub = sb - cb.from,
            Ib = ab;
          for (let ab = kb.length - 1; ab >= 0; ab--, Wb--) {
            let bb, sb = kb[ab].spec.bidiIsolate;
            if (null == sb && (sb = tc(cb.text, Tb, Ub)), Wb > 0 && Ib.length && (bb = Ib[Ib.length - 1]).to == Tb && bb.direction == sb) bb.to = Ub, Ib = bb.inner;
            else {
              let bb = {
                from: Tb,
                to: Ub,
                direction: sb,
                inner: []
              };
              Ib.push(bb), Ib = bb.inner
            }
          }
        }
      }), ab
    }
    const Ts = kb.n.define();

    function Us(bb) {
      let cb = 0,
        sb = 0,
        kb = 0,
        Wb = 0;
      for (let ab of bb.state.facet(Ts)) {
        let Tb = ab(bb);
        Tb && (null != Tb.left && (cb = Math.max(cb, Tb.left)), null != Tb.right && (sb = Math.max(sb, Tb.right)), null != Tb.top && (kb = Math.max(kb, Tb.top)), null != Tb.bottom && (Wb = Math.max(Wb, Tb.bottom)))
      }
      return {
        left: cb,
        right: sb,
        top: kb,
        bottom: Wb
      }
    }
    const Is = kb.n.define();
    class Hs {
      constructor(bb, cb, sb, kb) {
        this.fromA = bb, this.toA = cb, this.fromB = sb, this.toB = kb
      }
      join(bb) {
        return new Hs(Math.min(this.fromA, bb.fromA), Math.max(this.toA, bb.toA), Math.min(this.fromB, bb.fromB), Math.max(this.toB, bb.toB))
      }
      addToSet(bb) {
        let cb = bb.length,
          sb = this;
        for (; cb > 0; cb--) {
          let kb = bb[cb - 1];
          if (!(kb.fromA > sb.toA)) {
            if (kb.toA < sb.fromA) break;
            sb = sb.join(kb), bb.splice(cb - 1, 1)
          }
        }
        return bb.splice(cb, 0, sb), bb
      }
      static extendWithRanges(bb, cb) {
        if (0 == cb.length) return bb;
        let sb = [];
        for (let kb = 0, Wb = 0, ab = 0;;) {
          let Tb = kb < bb.length ? bb[kb].fromB : 1e9,
            Ub = Wb < cb.length ? cb[Wb] : 1e9,
            Ib = Math.min(Tb, Ub);
          if (1e9 == Ib) break;
          let Hb = Ib + ab,
            fb = Ib,
            Mb = Hb;
          for (;;)
            if (Wb < cb.length && cb[Wb] <= fb) {
              let sb = cb[Wb + 1];
              Wb += 2, fb = Math.max(fb, sb);
              for (let cb = kb; cb < bb.length && bb[cb].fromB <= fb; cb++) ab = bb[cb].toA - bb[cb].toB;
              Mb = Math.max(Mb, sb + ab)
            } else {
              if (!(kb < bb.length && bb[kb].fromB <= fb)) break;
              {
                let cb = bb[kb++];
                fb = Math.max(fb, cb.toB), Mb = Math.max(Mb, cb.toA), ab = cb.toA - cb.toB
              }
            } sb.push(new Hs(Hb, Mb, Ib, fb))
        }
        return sb
      }
    }
    class fs {
      constructor(bb, cb, sb) {
        this.view = bb, this.state = cb, this.transactions = sb, this.flags = 0, this.startState = bb.state, this.changes = kb.ChangeSet.empty(this.startState.doc.length);
        for (let kb of sb) this.changes = this.changes.compose(kb.changes);
        let Wb = [];
        this.changes.iterChangedRanges(((bb, cb, sb, kb) => Wb.push(new Hs(bb, cb, sb, kb)))), this.changedRanges = Wb
      }
      static create(bb, cb, sb) {
        return new fs(bb, cb, sb)
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
    const Ms = [];
    class Xs {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = bb, this.length = cb, this.flags = sb, this.parent = null, bb.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return Ms
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
          bb && function(bb, cb) {
            for (let sb = bb.attributes.length - 1; sb >= 0; sb--) {
              let kb = bb.attributes[sb].name;
              null == cb[kb] && bb.removeAttribute(kb)
            }
            for (let sb in cb) {
              let kb = cb[sb];
              "style" == sb ? bb.style.cssText = kb : bb.getAttribute(sb) != kb && bb.setAttribute(sb, kb)
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let sb of this.children) {
          if (sb == bb) return cb;
          cb += sb.length + sb.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(bb) {
        return this.posBefore(bb) + bb.length
      }
      covers(bb) {
        return !0
      }
      coordsIn(bb, cb) {
        return null
      }
      domPosFor(bb, cb) {
        let sb = rb(this.dom),
          kb = this.length ? bb > 0 : cb > 0;
        return new Ic(this.parent.dom, sb + (kb ? 1 : 0), 0 == bb || bb == this.length)
      }
      markDirty(bb) {
        this.flags &= -3, bb && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let bb = this; bb; bb = bb.parent)
          if (bb instanceof ls) return bb;
        return null
      }
      static get(bb) {
        return bb.cmTile
      }
    }
    class ns extends Xs {
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
        let cb, sb = this.dom,
          kb = null,
          Wb = (null === bb || void 0 === bb ? void 0 : bb.node) == sb ? bb : null,
          ab = 0;
        for (let Tb of this.children) {
          if (Tb.sync(bb), ab += Tb.length + Tb.breakAfter, cb = kb ? kb.nextSibling : sb.firstChild, Wb && cb != Tb.dom && (Wb.written = !0), Tb.dom.parentNode == sb)
            for (; cb && cb != Tb.dom;) cb = ms(cb);
          else sb.insertBefore(Tb.dom, cb);
          kb = Tb.dom
        }
        for (cb = kb ? kb.nextSibling : sb.firstChild, Wb && cb && (Wb.written = !0); cb;) cb = ms(cb);
        this.length = ab
      }
    }

    function ms(bb) {
      let cb = bb.nextSibling;
      return bb.parentNode.removeChild(bb), cb
    }
    class ls extends ns {
      constructor(bb, cb) {
        super(cb), this.view = bb
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
          let cb = Xs.get(bb);
          if (cb && this.owns(cb)) return cb;
          bb = bb.parentNode
        }
      }
      blockTiles(bb) {
        for (let cb = [], sb = this, kb = 0, Wb = 0;;)
          if (kb == sb.children.length) {
            if (!cb.length) return;
            sb = sb.parent, sb.breakAfter && Wb++, kb = cb.pop()
          } else {
            let ab = sb.children[kb++];
            if (ab instanceof Qs) cb.push(kb), sb = ab, kb = 0;
            else {
              let cb = Wb + ab.length,
                sb = bb(ab, Wb);
              if (void 0 !== sb) return sb;
              Wb = cb + ab.breakAfter
            }
          }
      }
      resolveBlock(bb, cb) {
        let sb, kb, Wb = -1,
          ab = -1;
        if (this.blockTiles(((Tb, Ub) => {
            let Ib = Ub + Tb.length;
            if (bb >= Ub && bb <= Ib) {
              if (Tb.isWidget() && cb >= -1 && cb <= 1) {
                if (32 & Tb.flags) return !0;
                16 & Tb.flags && (sb = void 0)
              }(Ub < bb || bb == Ib && (cb < -1 ? Tb.length : Tb.covers(1))) && (!sb || !Tb.isWidget() && sb.isWidget()) && (sb = Tb, Wb = bb - Ub), (Ib > bb || bb == Ub && (cb > 1 ? Tb.length : Tb.covers(-1))) && (!kb || !Tb.isWidget() && kb.isWidget()) && (kb = Tb, ab = bb - Ub)
            }
          })), !sb && !kb) throw new Error("No tile at position " + bb);
        return sb && cb < 0 || !kb ? {
          tile: sb,
          offset: Wb
        } : {
          tile: kb,
          offset: ab
        }
      }
    }
    class Qs extends ns {
      constructor(bb, cb) {
        super(bb), this.wrapper = cb
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
      static of (bb, cb) {
        let sb = new Qs(cb || document.createElement(bb.tagName), bb);
        return cb || (sb.flags |= 4), sb
      }
    }
    class es extends ns {
      constructor(bb, cb) {
        super(bb), this.attrs = cb
      }
      isLine() {
        return !0
      }
      static start(bb, cb, sb) {
        let kb = new es(cb || document.createElement("div"), bb);
        return cb && sb || (kb.flags |= 4), kb
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(bb, cb, sb) {
        let kb = null,
          Wb = -1,
          ab = null,
          Tb = -1;
        ! function bb(Ub, Ib) {
          for (let Hb = 0, fb = 0; Hb < Ub.children.length && fb <= Ib; Hb++) {
            let Mb = Ub.children[Hb],
              Xb = fb + Mb.length;
            Xb >= Ib && (Mb.isComposite() ? bb(Mb, Ib - fb) : (!ab || ab.isHidden && (cb > 0 || sb && Cs(ab, Mb))) && (Xb > Ib || 32 & Mb.flags) ? (ab = Mb, Tb = Ib - fb) : (fb < Ib || 16 & Mb.flags && !Mb.isHidden) && (kb = Mb, Wb = Ib - fb)), fb = Xb
          }
        }(this, bb);
        let Ub = (cb < 0 ? kb : ab) || kb || ab;
        return Ub ? {
          tile: Ub,
          offset: Ub == kb ? Wb : Tb
        } : null
      }
      coordsIn(bb, cb) {
        let sb = this.resolveInline(bb, cb, !0);
        return sb ? sb.tile.coordsIn(Math.max(0, sb.offset), cb) : function(bb) {
          let cb = bb.dom.lastChild;
          if (!cb) return bb.dom.getBoundingClientRect();
          let sb = Ab(cb);
          return sb[sb.length - 1] || null
        }(this)
      }
      domIn(bb, cb) {
        let sb = this.resolveInline(bb, cb);
        if (sb) {
          let {
            tile: bb,
            offset: kb
          } = sb;
          if (this.dom.contains(bb.dom)) return bb.isText() ? new Ic(bb.dom, Math.min(bb.dom.nodeValue.length, kb)) : bb.domPosFor(kb, 16 & bb.flags ? 1 : 32 & bb.flags ? -1 : cb);
          let Wb = sb.tile.parent,
            ab = !1;
          for (let cb of Wb.children) {
            if (ab) return new Ic(cb.dom, 0);
            cb == sb.tile && (ab = !0)
          }
        }
        return new Ic(this.dom, 0)
      }
    }

    function Cs(bb, cb) {
      let sb = bb.coordsIn(0, 1),
        kb = cb.coordsIn(0, 1);
      return sb && kb && kb.top < sb.bottom
    }
    class Ns extends ns {
      constructor(bb, cb) {
        super(bb), this.mark = cb
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (bb, cb) {
        let sb = new Ns(cb || document.createElement(bb.tagName), bb);
        return cb || (sb.flags |= 4), sb
      }
    }
    class Vs extends Xs {
      constructor(bb, cb) {
        super(bb, cb.length), this.text = cb
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
      coordsIn(bb, cb) {
        let sb = this.dom.nodeValue.length;
        bb > sb && (bb = sb);
        let kb = bb,
          Wb = bb,
          ab = 0;
        0 == bb && cb < 0 || bb == sb && cb >= 0 ? Yb.chrome || Yb.gecko || (bb ? (kb--, ab = 1) : Wb < sb && (Wb++, ab = -1)) : cb < 0 ? kb-- : Wb < sb && Wb++;
        let Tb = kc(this.dom, kb, Wb).getClientRects();
        if (!Tb.length) return null;
        let Ub = Tb[(ab ? ab < 0 : cb >= 0) ? 0 : Tb.length - 1];
        return Yb.safari && !ab && 0 == Ub.width && (Ub = Array.prototype.find.call(Tb, (bb => bb.width)) || Ub), ab ? vb(Ub, ab < 0) : Ub || null
      }
      static of (bb, cb) {
        let sb = new Vs(cb || document.createTextNode(bb), bb);
        return cb || (sb.flags |= 2), sb
      }
    }
    class Ls extends Xs {
      constructor(bb, cb, sb, kb) {
        super(bb, cb, kb), this.widget = sb
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
      coordsIn(bb, cb) {
        return this.coordsInWidget(bb, cb, !1)
      }
      coordsInWidget(bb, cb, sb) {
        let kb = this.widget.coordsAt(this.dom, bb, cb);
        if (kb) return kb;
        if (sb) return vb(this.dom.getBoundingClientRect(), this.length ? 0 == bb : cb <= 0);
        {
          let cb = this.dom.getClientRects(),
            sb = null;
          if (!cb.length) return null;
          let kb = !!(16 & this.flags) || !(32 & this.flags) && bb > 0;
          for (let Wb = kb ? cb.length - 1 : 0; sb = cb[Wb], !(bb > 0 ? 0 == Wb : Wb == cb.length - 1 || sb.top < sb.bottom); Wb += kb ? -1 : 1);
          return vb(sb, !kb)
        }
      }
      get overrideDOMText() {
        if (!this.length) return kb.L.empty;
        let {
          root: bb
        } = this;
        if (!bb) return kb.L.empty;
        let cb = this.posAtStart;
        return bb.view.state.doc.slice(cb, cb + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (bb, cb, sb, kb, Wb) {
        return Wb || (Wb = bb.toDOM(cb), bb.editable || (Wb.contentEditable = "false")), new Ls(Wb, sb, bb, kb)
      }
    }
    class us extends Xs {
      constructor(bb) {
        let cb = document.createElement("img");
        cb.className = "cm-widgetBuffer", cb.setAttribute("aria-hidden", "true"), super(cb, 0, bb)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return kb.L.empty
      }
      coordsIn(bb) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Ys {
      constructor(bb) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = bb
      }
      advance(bb, cb, sb) {
        let {
          tile: kb,
          index: Wb,
          beforeBreak: ab,
          parents: Tb
        } = this;
        for (; bb || cb > 0;)
          if (kb.isComposite())
            if (ab) {
              if (!bb) break;
              sb && sb.break(), bb--, ab = !1
            } else if (Wb == kb.children.length) {
          if (!bb && !Tb.length) break;
          sb && sb.leave(kb), ab = !!kb.breakAfter, ({
            tile: kb,
            index: Wb
          } = Tb.pop()), Wb++
        } else {
          let Ub = kb.children[Wb],
            Ib = Ub.breakAfter;
          !(cb > 0 ? Ub.length <= bb : Ub.length < bb) || sb && !1 === sb.skip(Ub, 0, Ub.length) && Ub.isComposite ? (Tb.push({
            tile: kb,
            index: Wb
          }), kb = Ub, Wb = 0, sb && Ub.isComposite() && sb.enter(Ub)) : (ab = !!Ib, Wb++, bb -= Ub.length)
        } else if (Wb == kb.length) ab = !!kb.breakAfter, ({
          tile: kb,
          index: Wb
        } = Tb.pop()), Wb++;
        else {
          if (!bb) break;
          {
            let cb = Math.min(bb, kb.length - Wb);
            sb && sb.skip(kb, Wb, Wb + cb), bb -= cb, Wb += cb
          }
        }
        return this.tile = kb, this.index = Wb, this.beforeBreak = ab, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class hs {
      constructor(bb, cb, sb, kb) {
        this.from = bb, this.to = cb, this.wrapper = sb, this.rank = kb
      }
    }
    class gs {
      constructor(bb, cb, sb) {
        this.cache = bb, this.root = cb, this.blockWrappers = sb, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(bb, cb, sb, kb) {
        var Wb;
        this.flushBuffer();
        let ab = this.ensureMarks(cb, sb),
          Tb = ab.lastChild;
        if (Tb && Tb.isText() && !(8 & Tb.flags) && Tb.length + bb.length < 512) {
          this.cache.reused.set(Tb, 2), (ab.children[ab.children.length - 1] = new Vs(Tb.dom, Tb.text + bb)).parent = ab
        } else ab.append(kb || Vs.of(bb, null === (Wb = this.cache.find(Vs)) || void 0 === Wb ? void 0 : Wb.dom));
        this.pos += bb.length, this.afterWidget = null
      }
      addComposition(bb, cb) {
        let sb = this.curLine;
        sb.dom != cb.line.dom && (sb.setDOM(this.cache.reused.has(cb.line) ? is(cb.line.dom) : cb.line.dom), this.cache.reused.set(cb.line, 2));
        let kb = sb;
        for (let Tb = cb.marks.length - 1; Tb >= 0; Tb--) {
          let bb = cb.marks[Tb],
            sb = kb.lastChild;
          if (sb instanceof Ns && sb.mark.eq(bb.mark)) sb.dom != bb.dom && sb.setDOM(is(bb.dom)), kb = sb;
          else {
            if (this.cache.reused.get(bb)) {
              let cb = Xs.get(bb.dom);
              cb && cb.setDOM(is(bb.dom))
            }
            let cb = Ns.of(bb.mark, bb.dom);
            kb.append(cb), kb = cb
          }
          this.cache.reused.set(bb, 2)
        }
        let Wb = Xs.get(bb.text);
        Wb && this.cache.reused.set(Wb, 2);
        let ab = new Vs(bb.text, bb.text.nodeValue);
        ab.flags |= 8, kb.append(ab)
      }
      addInlineWidget(bb, cb, sb) {
        let kb = this.afterWidget && 48 & bb.flags && (48 & this.afterWidget.flags) == (48 & bb.flags);
        kb || this.flushBuffer();
        let Wb = this.ensureMarks(cb, sb);
        kb || 16 & bb.flags || Wb.append(this.getBuffer(1)), Wb.append(bb), this.pos += bb.length, this.afterWidget = bb
      }
      addMark(bb, cb, sb) {
        this.flushBuffer(), this.ensureMarks(cb, sb).append(bb), this.pos += bb.length, this.afterWidget = null
      }
      addBlockWidget(bb) {
        this.getBlockPos().append(bb), this.pos += bb.length, this.lastBlock = bb, this.endLine()
      }
      continueWidget(bb) {
        (this.afterWidget || this.lastBlock).length += bb, this.pos += bb
      }
      addLineStart(bb, cb) {
        var sb;
        bb || (bb = Es);
        let kb = es.start(bb, cb || (null === (sb = this.cache.find(es)) || void 0 === sb ? void 0 : sb.dom), !!cb);
        this.getBlockPos().append(this.lastBlock = this.curLine = kb)
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
      ensureMarks(bb, cb) {
        var sb;
        let kb = this.curLine;
        for (let Wb = bb.length - 1; Wb >= 0; Wb--) {
          let ab, Tb = bb[Wb];
          if (cb > 0 && (ab = kb.lastChild) && ab instanceof Ns && ab.mark.eq(Tb)) kb = ab, cb--;
          else {
            let bb = Ns.of(Tb, null === (sb = this.cache.find(Ns, (bb => bb.mark.eq(Tb)))) || void 0 === sb ? void 0 : sb.dom);
            kb.append(bb), kb = bb, cb = 0
          }
        }
        return kb
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let bb = this.curLine.lastChild;
          bb && Ds(this.curLine, !1) && ("BR" == bb.dom.nodeName || !bb.isWidget() || Yb.ios && Ds(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(Gs, 0, 32) || new Ls(Gs.toDOM(), 0, Gs, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let bb = this.wrappers.length - 1; bb >= 0; bb--) this.wrappers[bb].to < this.pos && this.wrappers.splice(bb, 1);
        for (let bb = this.blockWrappers; bb.value && bb.from <= this.pos; bb.next())
          if (bb.to >= this.pos) {
            let cb = new hs(bb.from, bb.to, bb.value, bb.rank),
              sb = this.wrappers.length;
            for (; sb > 0 && (this.wrappers[sb - 1].rank - cb.rank || this.wrappers[sb - 1].to - cb.to) < 0;) sb--;
            this.wrappers.splice(sb, 0, cb)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var bb;
        this.updateBlockWrappers();
        let cb = this.root;
        for (let sb of this.wrappers) {
          let kb = cb.lastChild;
          if (sb.from < this.pos && kb instanceof Qs && kb.wrapper.eq(sb.wrapper)) cb = kb;
          else {
            let kb = Qs.of(sb.wrapper, null === (bb = this.cache.find(Qs, (bb => bb.wrapper.eq(sb.wrapper)))) || void 0 === bb ? void 0 : bb.dom);
            cb.append(kb), cb = kb
          }
        }
        return cb
      }
      blockPosCovered() {
        let bb = this.lastBlock;
        return null != bb && !bb.breakAfter && (!bb.isWidget() || (160 & bb.flags) > 0)
      }
      getBuffer(bb) {
        let cb = 2 | (bb < 0 ? 16 : 32),
          sb = this.cache.find(us, void 0, 1);
        return sb && (sb.flags = cb), sb || new us(cb)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Bs {
      constructor(bb) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = bb.iter()
      }
      skip(bb) {
        this.textOff + bb <= this.text.length ? this.textOff += bb : (this.skipCount += bb - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(bb) {
        if (this.textOff == this.text.length) {
          let {
            value: cb,
            lineBreak: sb,
            done: kb
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, kb) throw new Error("Ran out of text content when drawing inline views");
          this.text = cb;
          let Wb = this.textOff = Math.min(bb, cb.length);
          return sb ? null : cb.slice(0, Wb)
        }
        let cb = Math.min(this.text.length, this.textOff + bb),
          sb = this.text.slice(this.textOff, cb);
        return this.textOff = cb, sb
      }
    }
    const ts = [Ls, es, Vs, Ns, us, Qs, ls];
    for (let iT = 0; iT < ts.length; iT++) ts[iT].bucket = iT;
    class ys {
      constructor(bb) {
        this.view = bb, this.buckets = ts.map((() => [])), this.index = ts.map((() => 0)), this.reused = new Map
      }
      add(bb) {
        let cb = bb.constructor.bucket,
          sb = this.buckets[cb];
        sb.length < 6 ? sb.push(bb) : sb[this.index[cb] = (this.index[cb] + 1) % 6] = bb
      }
      find(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          kb = bb.bucket,
          Wb = this.buckets[kb],
          ab = this.index[kb];
        for (let Tb = Wb.length - 1; Tb >= 0; Tb--) {
          let bb = (Tb + ab) % Wb.length,
            Ub = Wb[bb];
          if ((!cb || cb(Ub)) && !this.reused.has(Ub)) return Wb.splice(bb, 1), bb < ab && this.index[kb]--, this.reused.set(Ub, sb), Ub
        }
        return null
      }
      findWidget(bb, cb, sb) {
        let kb = this.buckets[0];
        if (kb.length)
          for (let Wb = 0, ab = 0;; Wb++) {
            if (Wb == kb.length) {
              if (ab) return null;
              ab = 1, Wb = 0
            }
            let Tb = kb[Wb];
            if (!this.reused.has(Tb) && (0 == ab ? Tb.widget.compare(bb) : Tb.widget.constructor == bb.constructor && bb.updateDOM(Tb.dom, this.view, Tb.widget))) return kb.splice(Wb, 1), Wb < this.index[0] && this.index[0]--, Tb.widget == bb && Tb.length == cb && (497 & Tb.flags) == sb ? (this.reused.set(Tb, 1), Tb) : (this.reused.set(Tb, 2), new Ls(Tb.dom, cb, bb, -498 & Tb.flags | sb))
          }
      }
      reuse(bb) {
        return this.reused.set(bb, 1), bb
      }
      maybeReuse(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(bb)) return this.reused.set(bb, cb), bb.dom
      }
      clear() {
        for (let bb = 0; bb < this.buckets.length; bb++) this.buckets[bb].length = this.index[bb] = 0
      }
    }
    class Ps {
      constructor(bb, cb, sb, Wb, ab) {
        this.view = bb, this.aW = Wb, this.disallowBlockEffectsFor = ab, this.openWidget = !1, this.openMarks = 0, this.cache = new ys(bb), this.text = new Bs(bb.state.doc), this.builder = new gs(this.cache, new ls(bb, bb.contentDOM), kb.z.iter(sb)), this.cache.reused.set(cb, 2), this.old = new Ys(cb), this.reuseWalker = {
          skip: (bb, cb, sb) => {
            if (this.cache.add(bb), bb.isComposite()) return !1
          },
          enter: bb => this.cache.add(bb),
          leave: () => {},
          break: () => {}
        }
      }
      run(bb, cb) {
        let sb = cb && this.getCompositionContext(cb.text);
        for (let kb = 0, Wb = 0, ab = 0;;) {
          let Tb = ab < bb.length ? bb[ab++] : null,
            Ub = Tb ? Tb.fromA : this.old.root.length;
          if (Ub > kb) {
            let bb = Ub - kb;
            this.preserve(bb, !ab, !Tb), kb = Ub, Wb += bb
          }
          if (!Tb) break;
          cb && Tb.fromA <= cb.range.fromA && Tb.toA >= cb.range.toA ? (this.forward(Tb.fromA, cb.range.fromA, cb.range.fromA < cb.range.toA ? 1 : -1), this.emit(Wb, cb.range.fromB), this.cache.clear(), this.builder.addComposition(cb, sb), this.text.skip(cb.range.toB - cb.range.fromB), this.forward(cb.range.fromA, Tb.toA), this.emit(cb.range.toB, Tb.toB)) : (this.forward(Tb.fromA, Tb.toA), this.emit(Wb, Tb.toB)), Wb = Tb.toB, kb = Tb.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(bb, cb, sb) {
        let kb = function(bb) {
            let cb = [];
            for (let sb = bb.parents.length; sb > 1; sb--) {
              let kb = sb == bb.parents.length ? bb.tile : bb.parents[sb].tile;
              kb instanceof Ns && cb.push(kb.mark)
            }
            return cb
          }(this.old),
          Wb = this.openMarks;
        this.old.advance(bb, sb ? 1 : -1, {
          skip: (bb, cb, sb) => {
            if (bb.isWidget())
              if (this.openWidget) this.builder.continueWidget(sb - cb);
              else {
                let ab = sb > 0 || cb < bb.length ? Ls.of(bb.widget, this.view, sb - cb, 496 & bb.flags, this.cache.maybeReuse(bb)) : this.cache.reuse(bb);
                256 & ab.flags ? (ab.flags &= -2, this.builder.addBlockWidget(ab)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(ab, kb, Wb), Wb = kb.length)
              }
            else if (bb.isText()) this.builder.ensureLine(null), cb || sb != bb.length || this.cache.reused.has(bb) ? (this.cache.add(bb), this.builder.addText(bb.text.slice(cb, sb), kb, Wb)) : this.builder.addText(bb.text, kb, Wb, this.cache.reuse(bb)), Wb = kb.length;
            else if (bb.isLine()) bb.flags &= -2, this.cache.reused.set(bb, 1), this.builder.addLine(bb);
            else if (bb instanceof us) this.cache.add(bb);
            else {
              if (!(bb instanceof Ns)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(bb, kb, Wb), this.cache.reused.set(bb, 1), Wb = kb.length
            }
            this.openWidget = !1
          },
          enter: bb => {
            bb.isLine() ? this.builder.addLineStart(bb.attrs, this.cache.maybeReuse(bb)) : (this.cache.add(bb), bb instanceof Ns && kb.unshift(bb.mark)), this.openWidget = !1
          },
          leave: bb => {
            bb.isLine() ? kb.length && (kb.length = Wb = 0) : bb instanceof Ns && (kb.shift(), Wb = Math.min(Wb, kb.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(bb)
      }
      emit(bb, cb) {
        let sb = null,
          Wb = this.builder,
          ab = 0,
          Tb = kb.z.spans(this.aW, bb, cb, {
            point: (bb, cb, kb, Tb, Ub, Ib) => {
              if (kb instanceof Ob) {
                if (this.disallowBlockEffectsFor[Ib]) {
                  if (kb.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (cb > this.view.state.doc.lineAt(bb).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (ab = Tb.length, Ub > Tb.length) Wb.continueWidget(cb - bb);
                else {
                  let ab = kb.widget || (kb.block ? Os.block : Os.inline),
                    Ib = function(bb) {
                      let cb = bb.isReplace ? (bb.startSide < 0 ? 64 : 0) | (bb.endSide > 0 ? 128 : 0) : bb.startSide > 0 ? 32 : 16;
                      bb.block && (cb |= 256);
                      return cb
                    }(kb),
                    Hb = this.cache.findWidget(ab, cb - bb, Ib) || Ls.of(ab, this.view, cb - bb, Ib);
                  kb.block ? (kb.startSide > 0 && Wb.addLineStartIfNotCovered(sb), Wb.addBlockWidget(Hb)) : (Wb.ensureLine(sb), Wb.addInlineWidget(Hb, Tb, Ub))
                }
                sb = null
              } else sb = function(bb, cb) {
                let sb = cb.spec.attributes,
                  kb = cb.spec.class;
                if (!sb && !kb) return bb;
                bb || (bb = {
                  class: "cm-line"
                });
                sb && hb(sb, bb);
                kb && (bb.class += " " + kb);
                return bb
              }(sb, kb);
              cb > bb && this.text.skip(cb - bb)
            },
            span: (bb, cb, kb, ab) => {
              for (let Tb = bb; Tb < cb;) {
                let Ub = this.text.next(Math.min(512, cb - Tb));
                null == Ub ? (Wb.addLineStartIfNotCovered(sb), Wb.addBreak(), Tb++) : (Wb.ensureLine(sb), Wb.addText(Ub, kb, Tb == bb ? ab : kb.length), Tb += Ub.length), sb = null
              }
            }
          });
        Wb.addLineStartIfNotCovered(sb), this.openWidget = Tb > ab, this.openMarks = Tb
      }
      forward(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        cb - bb <= 10 ? this.old.advance(cb - bb, sb, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(cb - bb - 10, -1), this.old.advance(5, sb, this.reuseWalker))
      }
      getCompositionContext(bb) {
        let cb = [],
          sb = null;
        for (let kb = bb.parentNode;; kb = kb.parentNode) {
          let bb = Xs.get(kb);
          if (kb == this.view.contentDOM) break;
          bb instanceof Ns ? cb.push(bb) : (null === bb || void 0 === bb ? void 0 : bb.isLine()) ? sb = bb : bb instanceof Qs || ("DIV" != kb.nodeName || sb || kb == this.view.contentDOM ? sb || cb.push(Ns.of(new Eb({
            tagName: kb.nodeName.toLowerCase(),
            attributes: tb(kb)
          }), kb)) : sb = new es(kb, Es))
        }
        return {
          line: sb,
          marks: cb
        }
      }
    }

    function Ds(bb, cb) {
      let sb = bb => {
        for (let kb of bb.children)
          if ((cb ? kb.isText() : kb.length) || sb(kb)) return !0;
        return !1
      };
      return sb(bb)
    }
    const Es = {
      class: "cm-line"
    };

    function is(bb) {
      let cb = Xs.get(bb);
      return cb && cb.setDOM(bb.cloneNode()), bb
    }
    class Os extends yb {
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
    Os.inline = new Os("span"), Os.block = new Os("div");
    const Gs = new class extends yb {
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
    class Ks {
      constructor(bb) {
        this.view = bb, this.aW = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Db.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new ls(bb, bb.contentDOM), this.updateInner([new Hs(0, 0, 0, bb.state.doc.length)], null)
      }
      update(bb) {
        var cb;
        let sb = bb.changedRanges;
        this.minWidth > 0 && sb.length && (sb.every((bb => {
          let {
            fromA: cb,
            toA: sb
          } = bb;
          return sb < this.minWidthFrom || cb > this.minWidthTo
        })) ? (this.minWidthFrom = bb.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = bb.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(bb);
        let Wb = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (cb = this.domChanged) || void 0 === cb ? void 0 : cb.newSel) ? Wb = this.domChanged.newSel.head : function(bb, cb) {
          let sb = !1;
          cb && bb.iterChangedRanges(((bb, kb) => {
            bb < cb.to && kb > cb.from && (sb = !0)
          }));
          return sb
        }(bb.changes, this.hasComposition) || bb.selectionSet || (Wb = bb.state.selection.main.head));
        let ab = Wb > -1 ? function(bb, cb, sb) {
          let kb = zs(bb, sb);
          if (!kb) return null;
          let {
            node: Wb,
            from: ab,
            to: Tb
          } = kb, Ub = Wb.nodeValue;
          if (/[\n\r]/.test(Ub)) return null;
          if (bb.state.doc.sliceString(kb.from, kb.to) != Ub) return null;
          let Ib = cb.invertedDesc;
          return {
            range: new Hs(Ib.mapPos(ab), Ib.mapPos(Tb), ab, Tb),
            text: Wb
          }
        }(this.view, bb.changes, Wb) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: cb,
            to: kb
          } = this.hasComposition;
          sb = new Hs(cb, kb, bb.changes.mapPos(cb, -1), bb.changes.mapPos(kb, 1)).addToSet(sb.slice())
        }
        this.hasComposition = ab ? {
          from: ab.range.fromB,
          to: ab.range.toB
        } : null, (Yb.ie || Yb.chrome) && !ab && bb && bb.state.doc.lines != bb.startState.doc.lines && (this.forceSelection = !0);
        let Tb = this.aW,
          Ub = this.blockWrappers;
        this.updateDeco();
        let Ib = function(bb, cb, sb) {
          let Wb = new qs;
          return kb.z.compare(bb, cb, sb, Wb), Wb.changes
        }(Tb, this.aW, bb.changes);
        Ib.length && (sb = Hs.extendWithRanges(sb, Ib));
        let Hb = function(bb, cb, sb) {
          let Wb = new ds;
          return kb.z.compare(bb, cb, sb, Wb), Wb.changes
        }(Ub, this.blockWrappers, bb.changes);
        return Hb.length && (sb = Hs.extendWithRanges(sb, Hb)), ab && !sb.some((bb => bb.fromA <= ab.range.fromA && bb.toA >= ab.range.toA)) && (sb = ab.range.addToSet(sb.slice())), !(2 & this.tile.flags && 0 == sb.length) && (this.updateInner(sb, ab), bb.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(bb, cb) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: sb
        } = this.view;
        sb.ignore((() => {
          if (cb || bb.length) {
            let sb = this.tile,
              kb = new Ps(this.view, sb, this.blockWrappers, this.aW, this.dynamicDecorationMap);
            cb && Xs.get(cb.text) && kb.cache.reused.set(Xs.get(cb.text), 2), this.tile = kb.run(bb, cb), Zs(sb, kb.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let kb = Yb.chrome || Yb.ios ? {
            node: sb.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(kb), !kb || !kb.written && sb.selectionRange.focusNode == kb.node && this.tile.dom.contains(kb.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let kb = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let Wb of this.tile.children) Wb.isWidget() && Wb.widget instanceof As && kb.push(Wb.dom);
        sb.updateGaps(kb)
      }
      updateEditContextFormatting(bb) {
        this.editContextFormatting = this.editContextFormatting.map(bb.changes);
        for (let cb of bb.transactions)
          for (let bb of cb.effects) bb.is(rc) && (this.editContextFormatting = bb.value)
      }
      updateSelection() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: cb
        } = this.tile, sb = this.view.root.activeElement, kb = sb == cb, Wb = !kb && !(this.view.state.facet(Sc) || cb.tabIndex > -1) && db(cb, this.view.observer.selectionRange) && !(sb && cb.contains(sb));
        if (!(kb || bb || Wb)) return;
        let ab = this.forceSelection;
        this.forceSelection = !1;
        let Tb, Ub, Ib = this.view.state.selection.main;
        if (Ib.empty ? Ub = Tb = this.inlineDOMNearPos(Ib.anchor, Ib.assoc || 1) : (Ub = this.inlineDOMNearPos(Ib.head, Ib.head == Ib.from ? 1 : -1), Tb = this.inlineDOMNearPos(Ib.anchor, Ib.anchor == Ib.from ? 1 : -1)), Yb.gecko && Ib.empty && !this.hasComposition && (1 == (Hb = Tb).node.nodeType && Hb.node.firstChild && (0 == Hb.offset || "false" == Hb.node.childNodes[Hb.offset - 1].contentEditable) && (Hb.offset == Hb.node.childNodes.length || "false" == Hb.node.childNodes[Hb.offset].contentEditable))) {
          let bb = document.createTextNode("");
          this.view.observer.ignore((() => Tb.node.insertBefore(bb, Tb.node.childNodes[Tb.offset] || null))), Tb = Ub = new Ic(bb, 0), ab = !0
        }
        var Hb;
        let fb = this.view.observer.selectionRange;
        !ab && fb.focusNode && (wb(Tb.node, Tb.offset, fb.anchorNode, fb.anchorOffset) && wb(Ub.node, Ub.offset, fb.focusNode, fb.focusOffset) || this.suppressWidgetCursorChange(fb, Ib)) || (this.view.observer.ignore((() => {
          Yb.android && Yb.chrome && cb.contains(fb.focusNode) && function(bb, cb) {
            for (let sb = bb; sb && sb != cb; sb = sb.assignedSlot || sb.parentNode)
              if (1 == sb.nodeType && "false" == sb.contentEditable) return !0;
            return !1
          }(fb.focusNode, cb) && (cb.blur(), cb.focus({
            preventScroll: !0
          }));
          let bb = zb(this.view.root);
          if (bb)
            if (Ib.empty) {
              if (Yb.gecko) {
                let bb = (kb = Tb.node, ab = Tb.offset, 1 != kb.nodeType ? 0 : (ab && "false" == kb.childNodes[ab - 1].contentEditable ? 1 : 0) | (ab < kb.childNodes.length && "false" == kb.childNodes[ab].contentEditable ? 2 : 0));
                if (bb && 3 != bb) {
                  let cb = (1 == bb ? Tc : Uc)(Tb.node, Tb.offset);
                  cb && (Tb = new Ic(cb.node, cb.offset))
                }
              }
              bb.collapse(Tb.node, Tb.offset), null != Ib.bidiLevel && void 0 !== bb.caretBidiLevel && (bb.caretBidiLevel = Ib.bidiLevel)
            } else if (bb.extend) {
            bb.collapse(Tb.node, Tb.offset);
            try {
              bb.extend(Ub.node, Ub.offset)
            } catch (Hb) {}
          } else {
            let cb = document.createRange();
            Ib.anchor > Ib.head && ([Tb, Ub] = [Ub, Tb]), cb.setEnd(Ub.node, Ub.offset), cb.setStart(Tb.node, Tb.offset), bb.removeAllRanges(), bb.addRange(cb)
          } else;
          var kb, ab;
          Wb && this.view.root.activeElement == cb && (cb.blur(), sb && sb.focus())
        })), this.view.observer.setSelectionRange(Tb, Ub)), this.impreciseAnchor = Tb.precise ? null : new Ic(fb.anchorNode, fb.anchorOffset), this.impreciseHead = Ub.precise ? null : new Ic(fb.focusNode, fb.focusOffset)
      }
      suppressWidgetCursorChange(bb, cb) {
        return this.hasComposition && cb.empty && wb(bb.focusNode, bb.focusOffset, bb.anchorNode, bb.anchorOffset) && this.posFromDOM(bb.focusNode, bb.focusOffset) == cb.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: bb
        } = this, cb = bb.state.selection.main, sb = zb(bb.root), {
          anchorNode: kb,
          anchorOffset: Wb
        } = bb.observer.selectionRange;
        if (!sb || !cb.empty || !cb.assoc || !sb.modify) return;
        let ab = this.lineAt(cb.head, cb.assoc);
        if (!ab) return;
        let Tb = ab.posAtStart;
        if (cb.head == Tb || cb.head == Tb + ab.length) return;
        let Ub = this.coordsAt(cb.head, -1),
          Ib = this.coordsAt(cb.head, 1);
        if (!Ub || !Ib || Ub.bottom > Ib.top) return;
        let Hb = this.domAtPos(cb.head + cb.assoc, cb.assoc);
        sb.collapse(Hb.node, Hb.offset), sb.modify("move", cb.assoc < 0 ? "forward" : "backward", "lineboundary"), bb.observer.readSelectionRange();
        let fb = bb.observer.selectionRange;
        bb.docView.posFromDOM(fb.anchorNode, fb.anchorOffset) != cb.from && sb.collapse(kb, Wb)
      }
      posFromDOM(bb, cb) {
        let sb = this.tile.nearest(bb);
        if (!sb) return 2 & this.tile.dom.compareDocumentPosition(bb) ? 0 : this.view.state.doc.length;
        let kb = sb.posAtStart;
        if (!sb.isComposite()) return sb.isText() ? bb == sb.dom ? kb + cb : kb + (cb ? sb.length : 0) : kb;
        {
          let Wb;
          if (bb == sb.dom) Wb = sb.dom.childNodes[cb];
          else {
            let kb = 0 == Rb(bb) ? 0 : 0 == cb ? -1 : 1;
            for (;;) {
              let cb = bb.parentNode;
              if (cb == sb.dom) break;
              0 == kb && cb.firstChild != cb.lastChild && (kb = bb == cb.firstChild ? -1 : 1), bb = cb
            }
            Wb = kb < 0 ? bb : bb.nextSibling
          }
          if (Wb == sb.dom.firstChild) return kb;
          for (; Wb && !Xs.get(Wb);) Wb = Wb.nextSibling;
          if (!Wb) return kb + sb.length;
          for (let bb = 0, cb = kb;; bb++) {
            let kb = sb.children[bb];
            if (kb.dom == Wb) return cb;
            cb += kb.length + kb.breakAfter
          }
        }
      }
      domAtPos(bb, cb) {
        let {
          tile: sb,
          offset: kb
        } = this.tile.resolveBlock(bb, cb);
        return sb.isWidget() ? sb.domPosFor(bb, cb) : sb.domIn(kb, cb)
      }
      inlineDOMNearPos(bb, cb) {
        let sb, kb, Wb = -1,
          ab = !1,
          Tb = -1,
          Ub = !1;
        return this.tile.blockTiles(((cb, Ib) => {
          if (cb.isWidget()) {
            if (32 & cb.flags && Ib >= bb) return !0;
            16 & cb.flags && (ab = !0)
          } else {
            let Hb = Ib + cb.length;
            if (Ib <= bb && (sb = cb, Wb = bb - Ib, ab = Hb < bb), Hb >= bb && !kb && (kb = cb, Tb = bb - Ib, Ub = Ib > bb), Ib > bb && kb) return !0
          }
        })), sb || kb ? (ab && kb ? sb = null : Ub && sb && (kb = null), sb && cb < 0 || !kb ? sb.domIn(Wb, cb) : kb.domIn(Tb, cb)) : this.domAtPos(bb, cb)
      }
      coordsAt(bb, cb) {
        let {
          tile: sb,
          offset: kb
        } = this.tile.resolveBlock(bb, cb);
        return sb.isWidget() ? sb.widget instanceof As ? null : sb.coordsInWidget(kb, cb, !0) : sb.coordsIn(kb, cb)
      }
      lineAt(bb, cb) {
        let {
          tile: sb
        } = this.tile.resolveBlock(bb, cb);
        return sb.isLine() ? sb : null
      }
      coordsForChar(bb) {
        let {
          tile: cb,
          offset: sb
        } = this.tile.resolveBlock(bb, 1);
        if (!cb.isLine()) return null;
        return function bb(cb, sb) {
          if (cb.isComposite())
            for (let kb of cb.children) {
              if (kb.length >= sb) {
                let cb = bb(kb, sb);
                if (cb) return cb
              }
              if ((sb -= kb.length) < 0) break
            } else if (cb.isText() && sb < cb.length) {
              let bb = (0, kb._)(cb.text, sb);
              if (bb == sb) return null;
              let Wb = kc(cb.dom, sb, bb).getClientRects();
              for (let cb = 0; cb < Wb.length; cb++) {
                let bb = Wb[cb];
                if (cb == Wb.length - 1 || bb.top < bb.bottom && bb.left < bb.right) return bb
              }
            } return null
        }(cb, sb)
      }
      measureVisibleLineHeights(bb) {
        let cb = [],
          {
            from: sb,
            to: kb
          } = bb,
          Wb = this.view.contentDOM.clientWidth,
          ab = Wb > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          Tb = -1,
          Ub = this.view.textDirection == Hc.LTR,
          Ib = 0,
          Hb = (bb, fb, Mb) => {
            for (let Xb = 0; Xb < bb.children.length && !(fb > kb); Xb++) {
              let kb = bb.children[Xb],
                nb = fb + kb.length,
                mb = kb.dom.getBoundingClientRect(),
                {
                  height: lb
                } = mb;
              if (Mb && !Xb && (Ib += mb.top - Mb.top), kb instanceof Qs) nb > sb && Hb(kb, fb, mb);
              else if (fb >= sb && (Ib > 0 && cb.push(-Ib), cb.push(lb + Ib), Ib = 0, ab)) {
                let bb = kb.dom.lastChild,
                  cb = bb ? Ab(bb) : [];
                if (cb.length) {
                  let bb = cb[cb.length - 1],
                    sb = Ub ? bb.right - mb.left : mb.right - bb.left;
                  sb > Tb && (Tb = sb, this.minWidth = Wb, this.minWidthFrom = fb, this.minWidthTo = nb)
                }
              }
              Mb && Xb == bb.children.length - 1 && (Ib += Mb.bottom - mb.bottom), fb = nb + kb.breakAfter
            }
          };
        return Hb(this.tile, 0, null), cb
      }
      textDirectionAt(bb) {
        let {
          tile: cb
        } = this.tile.resolveBlock(bb, 1);
        return "rtl" == getComputedStyle(cb.dom).direction ? Hc.RTL : Hc.LTR
      }
      measureTextSize() {
        let bb = this.tile.blockTiles((bb => {
          if (bb.isLine() && bb.children.length && bb.length <= 20) {
            let cb, sb = 0;
            for (let kb of bb.children) {
              if (!kb.isText() || /[^ -~]/.test(kb.text)) return;
              let bb = Ab(kb.dom);
              if (1 != bb.length) return;
              sb += bb[0].width, cb = bb[0].height
            }
            if (sb) return {
              lineHeight: bb.dom.getBoundingClientRect().height,
              charWidth: sb / bb.length,
              textHeight: cb
            }
          }
        }));
        if (bb) return bb;
        let cb, sb, kb, Wb = document.createElement("div");
        return Wb.className = "cm-line", Wb.style.width = "99999px", Wb.style.position = "absolute", Wb.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(Wb);
          let bb = Ab(Wb.firstChild)[0];
          cb = Wb.getBoundingClientRect().height, sb = bb && bb.width ? bb.width / 27 : 7, kb = bb && bb.height ? bb.height : cb, Wb.remove()
        })), {
          lineHeight: cb,
          charWidth: sb,
          textHeight: kb
        }
      }
      computeBlockGapDeco() {
        let bb = [],
          cb = this.view.viewState;
        for (let sb = 0, kb = 0;; kb++) {
          let Wb = kb == cb.viewports.length ? null : cb.viewports[kb],
            ab = Wb ? Wb.from - 1 : this.view.state.doc.length;
          if (ab > sb) {
            let kb = (cb.lineBlockAt(ab).bottom - cb.lineBlockAt(sb).top) / this.view.scaleY;
            bb.push(Db.replace({
              widget: new As(kb),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(sb, ab))
          }
          if (!Wb) break;
          sb = Wb.to + 1
        }
        return Db.set(bb)
      }
      updateDeco() {
        let bb = 1,
          cb = this.view.state.facet(bs).map((cb => (this.dynamicDecorationMap[bb++] = "function" == typeof cb) ? cb(this.view) : cb)),
          sb = !1,
          Wb = this.view.state.facet(ss).map(((bb, cb) => {
            let kb = "function" == typeof bb;
            return kb && (sb = !0), kb ? bb(this.view) : bb
          }));
        for (Wb.length && (this.dynamicDecorationMap[bb++] = sb, cb.push(kb.z.join(Wb))), this.aW = [this.editContextFormatting, ...cb, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; bb < this.aW.length;) this.dynamicDecorationMap[bb++] = !1;
        this.blockWrappers = this.view.state.facet(cs).map((bb => "function" == typeof bb ? bb(this.view) : bb))
      }
      scrollIntoView(bb) {
        var cb;
        if (bb.isSnapshot) {
          let cb = this.view.viewState.lineBlockAt(bb.range.head);
          return this.view.scrollDOM.scrollTop = cb.top - bb.yMargin, void(this.view.scrollDOM.scrollLeft = bb.xMargin)
        }
        for (let fb of this.view.state.facet(dc)) try {
          if (fb(this.view, bb.range, bb)) return !0
        } catch (Hb) {
          oc(this.view.state, Hb, "scroll handler")
        }
        let sb, {
            range: kb
          } = bb,
          Wb = this.coordsAt(kb.head, null !== (cb = kb.assoc) && void 0 !== cb ? cb : kb.empty ? 0 : kb.head > kb.anchor ? -1 : 1);
        if (!Wb) return;
        !kb.empty && (sb = this.coordsAt(kb.anchor, kb.anchor > kb.head ? -1 : 1)) && (Wb = {
          left: Math.min(Wb.left, sb.left),
          top: Math.min(Wb.top, sb.top),
          right: Math.max(Wb.right, sb.right),
          bottom: Math.max(Wb.bottom, sb.bottom)
        });
        let ab = Us(this.view),
          Tb = {
            left: Wb.left - ab.left,
            top: Wb.top - ab.top,
            right: Wb.right + ab.right,
            bottom: Wb.bottom + ab.bottom
          },
          {
            offsetWidth: Ub,
            offsetHeight: Ib
          } = this.view.scrollDOM;
        if (function(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
            let Ib = bb.ownerDocument,
              Hb = Ib.defaultView || window;
            for (let fb = bb, Mb = !1; fb && !Mb;)
              if (1 == fb.nodeType) {
                let bb, Xb = fb == Ib.body,
                  nb = 1,
                  mb = 1;
                if (Xb) bb = Fb(Hb);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(fb).position) && (Mb = !0), fb.scrollHeight <= fb.clientHeight && fb.scrollWidth <= fb.clientWidth) {
                    fb = fb.assignedSlot || fb.parentNode;
                    continue
                  }
                  let cb = fb.getBoundingClientRect();
                  ({
                    scaleX: nb,
                    scaleY: mb
                  } = xb(fb, cb)), bb = {
                    left: cb.left,
                    right: cb.left + fb.clientWidth * nb,
                    top: cb.top,
                    bottom: cb.top + fb.clientHeight * mb
                  }
                }
                let lb = 0,
                  Qb = 0;
                if ("nearest" == Wb) cb.top < bb.top + Tb ? (Qb = cb.top - (bb.top + Tb), sb > 0 && cb.bottom > bb.bottom + Qb && (Qb = cb.bottom - bb.bottom + Tb)) : cb.bottom > bb.bottom - Tb && (Qb = cb.bottom - bb.bottom + Tb, sb < 0 && cb.top - Qb < bb.top && (Qb = cb.top - (bb.top + Tb)));
                else {
                  let kb = cb.bottom - cb.top,
                    ab = bb.bottom - bb.top;
                  Qb = ("center" == Wb && kb <= ab ? cb.top + kb / 2 - ab / 2 : "start" == Wb || "center" == Wb && sb < 0 ? cb.top - Tb : cb.bottom - ab + Tb) - bb.top
                }
                if ("nearest" == kb ? cb.left < bb.left + ab ? (lb = cb.left - (bb.left + ab), sb > 0 && cb.right > bb.right + lb && (lb = cb.right - bb.right + ab)) : cb.right > bb.right - ab && (lb = cb.right - bb.right + ab, sb < 0 && cb.left < bb.left + lb && (lb = cb.left - (bb.left + ab))) : lb = ("center" == kb ? cb.left + (cb.right - cb.left) / 2 - (bb.right - bb.left) / 2 : "start" == kb == Ub ? cb.left - ab : cb.right - (bb.right - bb.left) + ab) - bb.left, lb || Qb)
                  if (Xb) Hb.scrollBy(lb, Qb);
                  else {
                    let bb = 0,
                      sb = 0;
                    if (Qb) {
                      let bb = fb.scrollTop;
                      fb.scrollTop += Qb / mb, sb = (fb.scrollTop - bb) * mb
                    }
                    if (lb) {
                      let cb = fb.scrollLeft;
                      fb.scrollLeft += lb / nb, bb = (fb.scrollLeft - cb) * nb
                    }
                    cb = {
                      left: cb.left - bb,
                      top: cb.top - sb,
                      right: cb.right - bb,
                      bottom: cb.bottom - sb
                    }, bb && Math.abs(bb - lb) < 1 && (kb = "nearest"), sb && Math.abs(sb - Qb) < 1 && (Wb = "nearest")
                  } if (Xb) break;
                (cb.top < bb.top || cb.bottom > bb.bottom || cb.left < bb.left || cb.right > bb.right) && (cb = {
                  left: Math.max(cb.left, bb.left),
                  right: Math.min(cb.right, bb.right),
                  top: Math.max(cb.top, bb.top),
                  bottom: Math.min(cb.bottom, bb.bottom)
                }), fb = fb.assignedSlot || fb.parentNode
              } else {
                if (11 != fb.nodeType) break;
                fb = fb.host
              }
          }(this.view.scrollDOM, Tb, kb.head < kb.anchor ? -1 : 1, bb.x, bb.y, Math.max(Math.min(bb.xMargin, Ub), -Ub), Math.max(Math.min(bb.yMargin, Ib), -Ib), this.view.textDirection == Hc.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (Wb.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || Wb.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let bb = this.view.docView.lineAt(kb.head, 1);
          bb && bb.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(bb) {
        let cb = bb => bb.isWidget() || bb.children.some(cb);
        return cb(this.tile.resolveBlock(bb, 1).tile)
      }
      destroy() {
        Zs(this.tile)
      }
    }

    function Zs(bb, cb) {
      let sb = null === cb || void 0 === cb ? void 0 : cb.get(bb);
      if (1 != sb) {
        null == sb && bb.destroy();
        for (let sb of bb.children) Zs(sb, cb)
      }
    }

    function zs(bb, cb) {
      let sb = bb.observer.selectionRange;
      if (!sb.focusNode) return null;
      let kb = Tc(sb.focusNode, sb.focusOffset),
        Wb = Uc(sb.focusNode, sb.focusOffset),
        ab = kb || Wb;
      if (Wb && kb && Wb.node != kb.node) {
        let cb = Xs.get(Wb.node);
        if (!cb || cb.isText() && cb.text != Wb.node.nodeValue) ab = Wb;
        else if (bb.docView.lastCompositionAfterCursor) {
          let bb = Xs.get(kb.node);
          !bb || bb.isText() && bb.text != kb.node.nodeValue || (ab = Wb)
        }
      }
      if (bb.docView.lastCompositionAfterCursor = ab != kb, !ab) return null;
      let Tb = cb - ab.offset;
      return {
        from: Tb,
        to: Tb + ab.node.nodeValue.length,
        node: ab.node
      }
    }
    let qs = class {
      constructor() {
        this.changes = []
      }
      compareRange(bb, cb) {
        Kb(bb, cb, this.changes)
      }
      comparePoint(bb, cb) {
        Kb(bb, cb, this.changes)
      }
      boundChange(bb) {
        Kb(bb, bb, this.changes)
      }
    };
    class ds {
      constructor() {
        this.changes = []
      }
      compareRange(bb, cb) {
        Kb(bb, cb, this.changes)
      }
      comparePoint() {}
      boundChange(bb) {
        Kb(bb, bb, this.changes)
      }
    }
    class As extends yb {
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

    function ws(bb, cb, sb) {
      let kb = bb.lineBlockAt(cb);
      if (Array.isArray(kb.type)) {
        let bb;
        for (let Wb of kb.type) {
          if (Wb.from > cb) break;
          if (!(Wb.to < cb)) {
            if (Wb.from < cb && Wb.to > cb) return Wb;
            bb && (Wb.type != Pb.Text || bb.type == Wb.type && !(sb < 0 ? Wb.from < cb : Wb.to > cb)) || (bb = Wb)
          }
        }
        return bb || kb
      }
      return kb
    }

    function rs(bb, cb, sb, kb) {
      let Wb = bb.state.doc.lineAt(cb.head),
        ab = bb.bidiSpans(Wb),
        Tb = bb.textDirectionAt(Wb.from);
      for (let Ub = cb, Ib = null;;) {
        let cb = Bc(Wb, ab, Tb, Ub, sb),
          Hb = gc;
        if (!cb) {
          if (Wb.number == (sb ? bb.state.doc.lines : 1)) return Ub;
          Hb = "\n", Wb = bb.state.doc.line(Wb.number + (sb ? 1 : -1)), ab = bb.bidiSpans(Wb), cb = bb.visualLineSide(Wb, !sb)
        }
        if (Ib) {
          if (!Ib(Hb)) return Ub
        } else {
          if (!kb) return cb;
          Ib = kb(Hb)
        }
        Ub = cb
      }
    }

    function os(bb, cb, sb) {
      for (;;) {
        let kb = 0;
        for (let Wb of bb) Wb.between(cb - 1, cb + 1, ((bb, Wb, ab) => {
          if (cb > bb && cb < Wb) {
            let ab = kb || sb || (cb - bb < Wb - cb ? -1 : 1);
            cb = ab < 0 ? bb : Wb, kb = ab
          }
        }));
        if (!kb) return cb
      }
    }

    function Ss(bb, cb) {
      let sb = null;
      for (let Wb = 0; Wb < cb.uQ.length; Wb++) {
        let ab = cb.uQ[Wb],
          Tb = null;
        if (ab.empty) {
          let cb = os(bb, ab.from, 0);
          cb != ab.from && (Tb = kb.j.cursor(cb, -1))
        } else {
          let cb = os(bb, ab.from, -1),
            sb = os(bb, ab.to, 1);
          cb == ab.from && sb == ab.to || (Tb = kb.j.range(ab.from == ab.anchor ? cb : sb, ab.from == ab.head ? cb : sb))
        }
        Tb && (sb || (sb = cb.uQ.slice()), sb[Wb] = Tb)
      }
      return sb ? kb.j.create(sb, cb.mainIndex) : cb
    }

    function Rs(bb, cb, sb) {
      let Wb = os(bb.state.facet(ks).map((cb => cb(bb))), sb.from, cb.head > sb.from ? -1 : 1);
      return Wb == sb.from ? sb : kb.j.cursor(Wb, Wb < sb.from ? 1 : -1)
    }
    class vs {
      constructor(bb, cb) {
        this.pos = bb, this.assoc = cb
      }
    }

    function Fs(bb, cb, sb, Wb) {
      let ab, Tb = bb.contentDOM.getBoundingClientRect(),
        Ub = Tb.top + bb.viewState.paddingTop,
        {
          x: Ib,
          y: Hb
        } = cb,
        fb = Hb - Ub;
      for (;;) {
        if (fb < 0) return new vs(0, 1);
        if (fb > bb.viewState.docHeight) return new vs(bb.state.doc.length, -1);
        if (ab = bb.elementAtHeight(fb), null == Wb) break;
        if (ab.type == Pb.Text) {
          if (Wb < 0 ? ab.to < bb.viewport.from : ab.from > bb.viewport.to) break;
          let cb = bb.docView.coordsAt(Wb < 0 ? ab.from : ab.to, Wb > 0 ? -1 : 1);
          if (cb && (Wb < 0 ? cb.top <= fb + Ub : cb.bottom >= fb + Ub)) break
        }
        let cb = bb.viewState.heightOracle.textHeight / 2;
        fb = Wb > 0 ? ab.bottom + cb : ab.top - cb
      }
      if (bb.viewport.from >= ab.to || bb.viewport.to <= ab.from) {
        if (sb) return null;
        if (ab.type == Pb.Text) {
          let cb = function(bb, cb, sb, Wb, ab) {
            let Tb = Math.round((Wb - cb.left) * bb.defaultCharacterWidth);
            if (bb.lineWrapping && sb.height > 1.5 * bb.defaultLineHeight) {
              let cb = bb.viewState.heightOracle.textHeight;
              Tb += Math.floor((ab - sb.top - .5 * (bb.defaultLineHeight - cb)) / cb) * bb.viewState.heightOracle.lineLength
            }
            let Ub = bb.state.sliceDoc(sb.from, sb.to);
            return sb.from + (0, kb.bb)(Ub, Tb, bb.state.tabSize)
          }(bb, Tb, ab, Ib, Hb);
          return new vs(cb, cb == ab.from ? 1 : -1)
        }
      }
      if (ab.type != Pb.Text) return fb < (ab.top + ab.bottom) / 2 ? new vs(ab.from, 1) : new vs(ab.to, -1);
      let Mb = bb.docView.lineAt(ab.from, 2);
      return Mb && Mb.length == ab.length || (Mb = bb.docView.lineAt(ab.from, -2)), new xs(bb, Ib, Hb, bb.textDirectionAt(ab.from)).scanTile(Mb, ab.from)
    }
    class xs {
      constructor(bb, cb, sb, kb) {
        this.view = bb, this.x = cb, this.y = sb, this.baseDir = kb, this.line = null, this.spans = null
      }
      bidiSpansAt(bb) {
        return (!this.line || this.line.from > bb || this.line.to < bb) && (this.line = this.view.state.doc.lineAt(bb), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(bb, cb) {
        let {
          line: sb,
          spans: kb
        } = this.bidiSpansAt(bb);
        return kb[Nc.find(kb, bb - sb.from, -1, cb)].level == this.baseDir
      }
      dirAt(bb, cb) {
        let {
          line: sb,
          spans: kb
        } = this.bidiSpansAt(bb);
        return kb[Nc.find(kb, bb - sb.from, -1, cb)].dir
      }
      bidiIn(bb, cb) {
        let {
          spans: sb,
          line: kb
        } = this.bidiSpansAt(bb);
        return sb.length > 1 || sb.length && (sb[0].level != this.baseDir || sb[0].to + kb.from < cb)
      }
      scan(bb, cb) {
        let sb, kb, Wb, ab = 0,
          Tb = bb.length - 1,
          Ub = new Set,
          Ib = this.bidiIn(bb[0], bb[Tb]),
          Hb = -1,
          fb = 1e9;
        bb: for (; ab < Tb;) {
          let Mb = Tb - ab,
            Xb = ab + Tb >> 1;
          cb: if (Ub.has(Xb)) {
            let bb = ab + Math.floor(Math.random() * Mb);
            for (let cb = 0; cb < Mb; cb++) {
              if (!Ub.has(bb)) {
                Xb = bb;
                break cb
              }
              bb++, bb == Tb && (bb = ab)
            }
            break bb
          } Ub.add(Xb);
          let nb = cb(Xb);
          if (nb)
            for (let cb = 0; cb < nb.length; cb++) {
              let Ub = nb[cb],
                Mb = 0;
              if (!(0 == Ub.width && nb.length > 1)) {
                if (Ub.bottom < this.y)(!sb || sb.bottom < Ub.bottom) && (sb = Ub), Mb = 1;
                else if (Ub.top > this.y)(!kb || kb.top > Ub.top) && (kb = Ub), Mb = -1;
                else {
                  let bb = Ub.left > this.x ? this.x - Ub.left : Ub.right < this.x ? this.x - Ub.right : 0,
                    cb = Math.abs(bb);
                  cb < fb && (Hb = Xb, fb = cb, Wb = Ub), bb && (Mb = bb < 0 == (this.baseDir == Hc.LTR) ? -1 : 1)
                } - 1 != Mb || Ib && !this.baseDirAt(bb[Xb], 1) ? 1 != Mb || Ib && !this.baseDirAt(bb[Xb + 1], -1) || (ab = Xb + 1) : Tb = Xb
              }
            }
        }
        if (!Wb) {
          let Wb = sb && (!kb || this.y - sb.bottom < kb.top - this.y) ? sb : kb;
          return this.y = (Wb.top + Wb.bottom) / 2, this.scan(bb, cb)
        }
        if (fb) {
          if (sb && sb.bottom > Wb.top) return this.y = sb.bottom - 1, this.scan(bb, cb);
          if (kb && kb.top < Wb.bottom) return this.y = kb.top + 1, this.scan(bb, cb)
        }
        let Mb = (Ib ? this.dirAt(bb[Hb], 1) : this.baseDir) == Hc.LTR;
        return {
          i: Hb,
          after: this.x > (Wb.left + Wb.right) / 2 == Mb
        }
      }
      scanText(bb, cb) {
        let sb = [];
        for (let ab = 0; ab < bb.length; ab = (0, kb._)(bb.text, ab)) sb.push(cb + ab);
        sb.push(cb + bb.length);
        let Wb = this.scan(sb, (kb => {
          let Wb = sb[kb] - cb,
            ab = sb[kb + 1] - cb;
          return kc(bb.dom, Wb, ab).getClientRects()
        }));
        return Wb.after ? new vs(sb[Wb.i + 1], -1) : new vs(sb[Wb.i], 1)
      }
      scanTile(bb, cb) {
        if (!bb.length) return new vs(cb, 1);
        if (1 == bb.children.length) {
          let sb = bb.children[0];
          if (sb.isText()) return this.scanText(sb, cb);
          if (sb.isComposite()) return this.scanTile(sb, cb)
        }
        let sb = [cb];
        for (let Tb = 0, Ub = cb; Tb < bb.children.length; Tb++) sb.push(Ub += bb.children[Tb].length);
        let kb = this.scan(sb, (cb => {
            let sb = bb.children[cb];
            return 48 & sb.flags ? null : (1 == sb.dom.nodeType ? sb.dom : kc(sb.dom, 0, sb.length)).getClientRects()
          })),
          Wb = bb.children[kb.i],
          ab = sb[kb.i];
        return Wb.isText() ? this.scanText(Wb, ab) : Wb.isComposite() ? this.scanTile(Wb, ab) : kb.after ? new vs(sb[kb.i + 1], -1) : new vs(ab, 1)
      }
    }
    const ps = "\uffff";
    class bk {
      constructor(bb, cb) {
        this.points = bb, this.view = cb, this.text = "", this.lineSeparator = cb.state.facet(kb.m.lineSeparator)
      }
      append(bb) {
        this.text += bb
      }
      lineBreak() {
        this.text += ps
      }
      readRange(bb, cb) {
        if (!bb) return this;
        let sb = bb.parentNode;
        for (let kb = bb;;) {
          this.findPointBefore(sb, kb);
          let bb = this.text.length;
          this.readNode(kb);
          let Wb = Xs.get(kb),
            ab = kb.nextSibling;
          if (ab == cb) {
            (null === Wb || void 0 === Wb ? void 0 : Wb.breakAfter) && !ab && sb != this.view.contentDOM && this.lineBreak();
            break
          }
          let Tb = Xs.get(ab);
          (Wb && Tb ? Wb.breakAfter : (Wb ? Wb.breakAfter : ob(kb)) || ob(ab) && ("BR" != kb.nodeName || (null === Wb || void 0 === Wb ? void 0 : Wb.isWidget())) && this.text.length > bb) && !sk(ab, cb) && this.lineBreak(), kb = ab
        }
        return this.findPointBefore(sb, cb), this
      }
      readTextNode(bb) {
        let cb = bb.nodeValue;
        for (let sb of this.points) sb.node == bb && (sb.pos = this.text.length + Math.min(sb.offset, cb.length));
        for (let sb = 0, kb = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let Wb, ab = -1,
            Tb = 1;
          if (this.lineSeparator ? (ab = cb.indexOf(this.lineSeparator, sb), Tb = this.lineSeparator.length) : (Wb = kb.exec(cb)) && (ab = Wb.index, Tb = Wb[0].length), this.append(cb.slice(sb, ab < 0 ? cb.length : ab)), ab < 0) break;
          if (this.lineBreak(), Tb > 1)
            for (let cb of this.points) cb.node == bb && cb.pos > this.text.length && (cb.pos -= Tb - 1);
          sb = ab + Tb
        }
      }
      readNode(bb) {
        let cb = Xs.get(bb),
          sb = cb && cb.overrideDOMText;
        if (null != sb) {
          this.findPointInside(bb, sb.length);
          for (let bb = sb.iter(); !bb.next().done;) bb.lineBreak ? this.lineBreak() : this.append(bb.value)
        } else 3 == bb.nodeType ? this.readTextNode(bb) : "BR" == bb.nodeName ? bb.nextSibling && this.lineBreak() : 1 == bb.nodeType && this.readRange(bb.firstChild, null)
      }
      findPointBefore(bb, cb) {
        for (let sb of this.points) sb.node == bb && bb.childNodes[sb.offset] == cb && (sb.pos = this.text.length)
      }
      findPointInside(bb, cb) {
        for (let sb of this.points)(3 == bb.nodeType ? sb.node == bb : bb.contains(sb.node)) && (sb.pos = this.text.length + (ck(bb, sb.node, sb.offset) ? cb : 0))
      }
    }

    function ck(bb, cb, sb) {
      for (;;) {
        if (!cb || sb < Rb(cb)) return !1;
        if (cb == bb) return !0;
        sb = rb(cb) + 1, cb = cb.parentNode
      }
    }

    function sk(bb, cb) {
      let sb;
      for (; bb != cb && bb; bb = bb.nextSibling) {
        let cb = Xs.get(bb);
        if (!(null === cb || void 0 === cb ? void 0 : cb.isWidget())) return !1;
        cb && (sb || (sb = [])).push(cb)
      }
      if (sb)
        for (let kb of sb) {
          let bb = kb.overrideDOMText;
          if (null === bb || void 0 === bb ? void 0 : bb.length) return !1
        }
      return !0
    }
    class kk {
      constructor(bb, cb) {
        this.node = bb, this.offset = cb, this.pos = -1
      }
    }
    class Wk {
      constructor(bb, cb, sb, Wb) {
        this.typeOver = Wb, this.bounds = null, this.text = "", this.domChanged = cb > -1;
        let {
          impreciseHead: ab,
          impreciseAnchor: Tb
        } = bb.docView, Ub = bb.state.selection;
        if (bb.state.readOnly && cb > -1) this.newSel = null;
        else if (cb > -1 && (this.bounds = ak(bb.docView.tile, cb, sb, 0))) {
          let cb = ab || Tb ? [] : function(bb) {
              let cb = [];
              if (bb.root.activeElement != bb.contentDOM) return cb;
              let {
                anchorNode: sb,
                anchorOffset: kb,
                focusNode: Wb,
                focusOffset: ab
              } = bb.observer.selectionRange;
              sb && (cb.push(new kk(sb, kb)), Wb == sb && ab == kb || cb.push(new kk(Wb, ab)));
              return cb
            }(bb),
            sb = new bk(cb, bb);
          sb.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = sb.text, this.newSel = function(bb, cb) {
            if (0 == bb.length) return null;
            let sb = bb[0].pos,
              Wb = 2 == bb.length ? bb[1].pos : sb;
            return sb > -1 && Wb > -1 ? kb.j.single(sb + cb, Wb + cb) : null
          }(cb, this.bounds.from)
        } else {
          let cb = bb.observer.selectionRange,
            sb = ab && ab.node == cb.focusNode && ab.offset == cb.focusOffset || !qb(bb.contentDOM, cb.focusNode) ? Ub.main.head : bb.docView.posFromDOM(cb.focusNode, cb.focusOffset),
            Wb = Tb && Tb.node == cb.anchorNode && Tb.offset == cb.anchorOffset || !qb(bb.contentDOM, cb.anchorNode) ? Ub.main.anchor : bb.docView.posFromDOM(cb.anchorNode, cb.anchorOffset),
            Ib = bb.viewport;
          if ((Yb.ios || Yb.chrome) && Ub.main.empty && sb != Wb && (Ib.from > 0 || Ib.to < bb.state.doc.length)) {
            let cb = Math.min(sb, Wb),
              kb = Math.max(sb, Wb),
              ab = Ib.from - cb,
              Tb = Ib.to - kb;
            0 != ab && 1 != ab && 0 != cb || 0 != Tb && -1 != Tb && kb != bb.state.doc.length || (sb = 0, Wb = bb.state.doc.length)
          }
          if (bb.inputState.composing > -1 && Ub.uQ.length > 1) this.newSel = Ub.replaceRange(kb.j.range(Wb, sb));
          else if (bb.lineWrapping && Wb == sb && (!Ub.main.empty || Ub.main.head != sb) && bb.inputState.lastTouchTime > Date.now() - 100) {
            let cb = bb.coordsAtPos(sb, -1),
              Wb = 0;
            cb && (Wb = bb.inputState.lastTouchY <= cb.bottom ? -1 : 1), this.newSel = kb.j.create([kb.j.cursor(sb, Wb)])
          } else this.newSel = kb.j.single(Wb, sb)
        }
      }
    }

    function ak(bb, cb, sb, kb) {
      if (bb.isComposite()) {
        let Wb = -1,
          ab = -1,
          Tb = -1,
          Ub = -1;
        for (let Ib = 0, Hb = kb, fb = kb; Ib < bb.children.length; Ib++) {
          let kb = bb.children[Ib],
            Mb = Hb + kb.length;
          if (Hb < cb && Mb > sb) return ak(kb, cb, sb, Hb);
          if (Mb >= cb && -1 == Wb && (Wb = Ib, ab = Hb), Hb > sb && kb.dom.parentNode == bb.dom) {
            Tb = Ib, Ub = fb;
            break
          }
          fb = Mb, Hb = Mb + kb.breakAfter
        }
        return {
          from: ab,
          to: Ub < 0 ? kb + bb.length : Ub,
          startDOM: (Wb ? bb.children[Wb - 1].dom.nextSibling : null) || bb.dom.firstChild,
          endDOM: Tb < bb.children.length && Tb >= 0 ? bb.children[Tb].dom : null
        }
      }
      return bb.isText() ? {
        from: kb,
        to: kb + bb.length,
        startDOM: bb.dom,
        endDOM: bb.dom.nextSibling
      } : null
    }

    function Tk(bb, cb) {
      let sb, {
          newSel: Wb
        } = cb,
        {
          state: ab
        } = bb,
        Tb = ab.selection.main,
        Ub = bb.inputState.lastKeyTime > Date.now() - 100 ? bb.inputState.lastKeyCode : -1;
      if (cb.bounds) {
        let {
          from: bb,
          to: Wb
        } = cb.bounds, Ib = Tb.from, Hb = null;
        (8 === Ub || Yb.android && cb.text.length < Wb - bb) && (Ib = Tb.to, Hb = "end");
        let fb, Mb, Xb = ab.doc.sliceString(bb, Wb, ps);
        !Tb.empty && Tb.from >= bb && Tb.to <= Wb && (cb.typeOver || Xb != cb.text) && Xb.slice(0, Tb.from - bb) == cb.text.slice(0, Tb.from - bb) && Xb.slice(Tb.to - bb) == cb.text.slice(fb = cb.text.length - (Xb.length - (Tb.to - bb))) ? sb = {
          from: Tb.from,
          to: Tb.to,
          insert: kb.L.of(cb.text.slice(Tb.from - bb, fb).split(ps))
        } : (Mb = Ik(Xb, cb.text, Ib - bb, Hb)) && (Yb.chrome && 13 == Ub && Mb.toB == Mb.from + 2 && cb.text.slice(Mb.from, Mb.toB) == ps + ps && Mb.toB--, sb = {
          from: bb + Mb.from,
          to: bb + Mb.toA,
          insert: kb.L.of(cb.text.slice(Mb.from, Mb.toB).split(ps))
        })
      } else Wb && (!bb.hasFocus && ab.facet(Sc) || Hk(Wb, Tb)) && (Wb = null);
      if (!sb && !Wb) return !1;
      if ((Yb.mac || Yb.android) && sb && sb.from == sb.to && sb.from == Tb.head - 1 && /^\. ?$/.test(sb.insert.toString()) && "off" == bb.contentDOM.getAttribute("autocorrect") ? (Wb && 2 == sb.insert.length && (Wb = kb.j.single(Wb.main.anchor - 1, Wb.main.head - 1)), sb = {
          from: sb.from,
          to: sb.to,
          insert: kb.L.of([sb.insert.toString().replace(".", " ")])
        }) : ab.doc.lineAt(Tb.from).to < Tb.to && bb.docView.lineHasWidget(Tb.to) && bb.inputState.insertingTextAt > Date.now() - 50 ? sb = {
          from: Tb.from,
          to: Tb.to,
          insert: ab.toText(bb.inputState.insertingText)
        } : Yb.chrome && sb && sb.from == sb.to && sb.from == Tb.head && "\n " == sb.insert.toString() && bb.lineWrapping && (Wb && (Wb = kb.j.single(Wb.main.anchor - 1, Wb.main.head - 1)), sb = {
          from: Tb.from,
          to: Tb.to,
          insert: kb.L.of([" "])
        }), sb) return Uk(bb, sb, Wb, Ub);
      if (Wb && !Hk(Wb, Tb)) {
        let cb = !1,
          sb = "select";
        return bb.inputState.lastSelectionTime > Date.now() - 50 && ("select" == bb.inputState.lastSelectionOrigin && (cb = !0), sb = bb.inputState.lastSelectionOrigin, "select.pointer" == sb && (Wb = Ss(ab.facet(ks).map((cb => cb(bb))), Wb))), bb.dispatch({
          selection: Wb,
          scrollIntoView: cb,
          userEvent: sb
        }), !0
      }
      return !1
    }

    function Uk(bb, cb, sb) {
      let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (Yb.ios && bb.inputState.flushIOSKey(cb)) return !0;
      let ab = bb.state.selection.main;
      if (Yb.android && (cb.to == ab.to && (cb.from == ab.from || cb.from == ab.from - 1 && " " == bb.state.sliceDoc(cb.from, ab.from)) && 1 == cb.insert.length && 2 == cb.insert.lines && Wc(bb.contentDOM, "Enter", 13) || (cb.from == ab.from - 1 && cb.to == ab.to && 0 == cb.insert.length || 8 == Wb && cb.insert.length < cb.to - cb.from && cb.to > ab.head) && Wc(bb.contentDOM, "Backspace", 8) || cb.from == ab.from && cb.to == ab.to + 1 && 0 == cb.insert.length && Wc(bb.contentDOM, "Delete", 46))) return !0;
      let Tb, Ub = cb.insert.toString();
      bb.inputState.composing >= 0 && bb.inputState.composing++;
      let Ib = () => Tb || (Tb = function(bb, cb, sb) {
        let Wb, ab = bb.state,
          Tb = ab.selection.main,
          Ub = -1;
        if (cb.from == cb.to && cb.from < Tb.from || cb.from > Tb.to) {
          let sb = cb.from < Tb.from ? -1 : 1,
            kb = sb < 0 ? Tb.from : Tb.to,
            Wb = os(ab.facet(ks).map((cb => cb(bb))), kb, sb);
          cb.from == Wb && (Ub = Wb)
        }
        if (Ub > -1) Wb = {
          changes: cb,
          selection: kb.j.cursor(cb.from + cb.insert.length, -1)
        };
        else if (cb.from >= Tb.from && cb.to <= Tb.to && cb.to - cb.from >= (Tb.to - Tb.from) / 3 && (!sb || sb.main.empty && sb.main.from == cb.from + cb.insert.length) && bb.inputState.composing < 0) {
          let sb = Tb.from < cb.from ? ab.sliceDoc(Tb.from, cb.from) : "",
            kb = Tb.to > cb.to ? ab.sliceDoc(cb.to, Tb.to) : "";
          Wb = ab.replaceSelection(bb.state.toText(sb + cb.insert.sliceString(0, void 0, bb.state.lineBreak) + kb))
        } else {
          let Ub = ab.changes(cb),
            Ib = sb && sb.main.to <= Ub.newLength ? sb.main : void 0;
          if (ab.selection.uQ.length > 1 && (bb.inputState.composing >= 0 || bb.inputState.compositionPendingChange) && cb.to <= Tb.to + 10 && cb.to >= Tb.to - 10) {
            let Hb, fb = bb.state.sliceDoc(cb.from, cb.to),
              Mb = sb && zs(bb, sb.main.head);
            if (Mb) {
              let bb = cb.insert.length - (cb.to - cb.from);
              Hb = {
                from: Mb.from,
                to: Mb.to - bb
              }
            } else Hb = bb.state.doc.lineAt(Tb.head);
            let Xb = Tb.to - cb.to;
            Wb = ab.changeByRange((sb => {
              if (sb.from == Tb.from && sb.to == Tb.to) return {
                changes: Ub,
                range: Ib || sb.map(Ub)
              };
              let Wb = sb.to - Xb,
                Mb = Wb - fb.length;
              if (bb.state.sliceDoc(Mb, Wb) != fb || Wb >= Hb.from && Mb <= Hb.to) return {
                range: sb
              };
              let nb = ab.changes({
                  from: Mb,
                  to: Wb,
                  insert: cb.insert
                }),
                mb = sb.to - Tb.to;
              return {
                changes: nb,
                range: Ib ? kb.j.range(Math.max(0, Ib.anchor + mb), Math.max(0, Ib.head + mb)) : sb.map(nb)
              }
            }))
          } else Wb = {
            changes: Ub,
            selection: Ib && ab.selection.replaceRange(Ib)
          }
        }
        let Ib = "input.type";
        (bb.composing || bb.inputState.compositionPendingChange && bb.inputState.compositionEndedAt > Date.now() - 50) && (bb.inputState.compositionPendingChange = !1, Ib += ".compose", bb.inputState.compositionFirstChange && (Ib += ".start", bb.inputState.compositionFirstChange = !1));
        return ab.update(Wb, {
          userEvent: Ib,
          scrollIntoView: !0
        })
      }(bb, cb, sb));
      return bb.state.facet(Oc).some((sb => sb(bb, cb.from, cb.to, Ub, Ib))) || bb.dispatch(Ib()), !0
    }

    function Ik(bb, cb, sb, kb) {
      let Wb = Math.min(bb.length, cb.length),
        ab = 0;
      for (; ab < Wb && bb.charCodeAt(ab) == cb.charCodeAt(ab);) ab++;
      if (ab == Wb && bb.length == cb.length) return null;
      let Tb = bb.length,
        Ub = cb.length;
      for (; Tb > 0 && Ub > 0 && bb.charCodeAt(Tb - 1) == cb.charCodeAt(Ub - 1);) Tb--, Ub--;
      if ("end" == kb) {
        sb -= Tb + Math.max(0, ab - Math.min(Tb, Ub)) - ab
      }
      if (Tb < ab && bb.length < cb.length) {
        ab -= sb <= ab && sb >= Tb ? ab - sb : 0, Ub = ab + (Ub - Tb), Tb = ab
      } else if (Ub < ab) {
        ab -= sb <= ab && sb >= Ub ? ab - sb : 0, Tb = ab + (Tb - Ub), Ub = ab
      }
      return {
        from: ab,
        toA: Tb,
        toB: Ub
      }
    }

    function Hk(bb, cb) {
      return cb.head == bb.main.head && cb.anchor == bb.main.anchor
    }
    class fk {
      setSelectionOrigin(bb) {
        this.lastSelectionOrigin = bb, this.lastSelectionTime = Date.now()
      }
      constructor(bb) {
        this.view = bb, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = bb.hasFocus, Yb.safari && bb.contentDOM.addEventListener("input", (() => null)), Yb.gecko && function(bb) {
          Ok.has(bb) || (Ok.add(bb), bb.addEventListener("copy", (() => {})), bb.addEventListener("cut", (() => {})))
        }(bb.contentDOM.ownerDocument)
      }
      handleEvent(bb) {
        (function(bb, cb) {
          if (!cb.bubbles) return !0;
          if (cb.defaultPrevented) return !1;
          for (let sb, kb = cb.target; kb != bb.contentDOM; kb = kb.parentNode)
            if (!kb || 11 == kb.nodeType || (sb = Xs.get(kb)) && sb.isWidget() && !sb.isHidden && sb.widget.ignoreEvent(cb)) return !1;
          return !0
        })(this.view, bb) && !this.ignoreDuringComposition(bb) && ("keydown" == bb.type && this.keydown(bb) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(bb.type, bb))) : this.runHandlers(bb.type, bb)))
      }
      runHandlers(bb, cb) {
        let sb = this.handlers[bb];
        if (sb) {
          for (let bb of sb.observers) bb(this.view, cb);
          for (let bb of sb.handlers) {
            if (cb.defaultPrevented) break;
            if (bb(this.view, cb)) {
              cb.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(bb) {
        let cb = Xk(bb),
          sb = this.handlers,
          kb = this.view.contentDOM;
        for (let Wb in cb)
          if ("scroll" != Wb) {
            let bb = !cb[Wb].handlers.length,
              ab = sb[Wb];
            ab && bb != !ab.handlers.length && (kb.removeEventListener(Wb, this.handleEvent), ab = null), ab || kb.addEventListener(Wb, this.handleEvent, {
              passive: bb
            })
          } for (let Wb in sb) "scroll" == Wb || cb[Wb] || kb.removeEventListener(Wb, this.handleEvent);
        this.handlers = cb
      }
      keydown(bb) {
        if (this.lastKeyCode = bb.keyCode, this.lastKeyTime = Date.now(), 9 == bb.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != bb.keyCode && lk.indexOf(bb.keyCode) < 0 && (this.tabFocusMode = -1), Yb.android && Yb.chrome && !bb.synthetic && (13 == bb.keyCode || 8 == bb.keyCode)) return this.view.observer.delayAndroidKey(bb.key, bb.keyCode), !0;
        let cb;
        return !Yb.ios || bb.synthetic || bb.altKey || bb.metaKey || bb.shiftKey || !((cb = nk.find((cb => cb.keyCode == bb.keyCode))) && !bb.ctrlKey || mk.indexOf(bb.key) > -1 && bb.ctrlKey) ? (229 != bb.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = cb || bb, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(bb) {
        let cb = this.pendingIOSKey;
        return !!cb && (!("Enter" == cb.key && bb && bb.from < bb.to && /^\S+$/.test(bb.insert.toString())) && (this.pendingIOSKey = void 0, Wc(this.view.contentDOM, cb.key, cb.keyCode, cb instanceof KeyboardEvent ? cb : void 0)))
      }
      ignoreDuringComposition(bb) {
        return !(!/^key/.test(bb.type) || bb.synthetic) && (this.composing > 0 || !!(Yb.safari && !Yb.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function Mk(bb, cb) {
      return (sb, kb) => {
        try {
          return cb.call(bb, kb, sb)
        } catch (Wb) {
          oc(sb.state, Wb)
        }
      }
    }

    function Xk(bb) {
      let cb = Object.create(null);

      function sb(bb) {
        return cb[bb] || (cb[bb] = {
          observers: [],
          handlers: []
        })
      }
      for (let kb of bb) {
        let bb = kb.spec,
          cb = bb && bb.plugin.domEventHandlers,
          Wb = bb && bb.plugin.domEventObservers;
        if (cb)
          for (let ab in cb) {
            let bb = cb[ab];
            bb && sb(ab).handlers.push(Mk(kb.value, bb))
          }
        if (Wb)
          for (let ab in Wb) {
            let bb = Wb[ab];
            bb && sb(ab).observers.push(Mk(kb.value, bb))
          }
      }
      for (let kb in Ck) sb(kb).handlers.push(Ck[kb]);
      for (let kb in Nk) sb(kb).observers.push(Nk[kb]);
      return cb
    }
    const nk = [{
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
      mk = "dthko",
      lk = [16, 17, 18, 20, 91, 92, 224, 225];

    function Qk(bb) {
      return .7 * Math.max(0, bb) + 8
    }
    class ek {
      constructor(bb, cb, sb, Wb) {
        this.view = bb, this.startEvent = cb, this.style = sb, this.mustSelect = Wb, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = cb, this.scrollParents = jb(bb.contentDOM), this.atoms = bb.state.facet(ks).map((cb => cb(bb)));
        let ab = bb.contentDOM.ownerDocument;
        ab.addEventListener("mousemove", this.move = this.move.bind(this)), ab.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = cb.shiftKey, this.multiple = bb.state.facet(kb.m.allowMultipleSelections) && function(bb, cb) {
          let sb = bb.state.facet(yc);
          return sb.length ? sb[0](cb) : Yb.mac ? cb.metaKey : cb.ctrlKey
        }(bb, cb), this.dragging = !(! function(bb, cb) {
          let {
            main: sb
          } = bb.state.selection;
          if (sb.empty) return !1;
          let kb = zb(bb.root);
          if (!kb || 0 == kb.rangeCount) return !0;
          let Wb = kb.getRangeAt(0).getClientRects();
          for (let ab = 0; ab < Wb.length; ab++) {
            let bb = Wb[ab];
            if (bb.left <= cb.clientX && bb.right >= cb.clientX && bb.top <= cb.clientY && bb.bottom >= cb.clientY) return !0
          }
          return !1
        }(bb, cb) || 1 != tk(cb)) && null
      }
      start(bb) {
        !1 === this.dragging && this.select(bb)
      }
      move(bb) {
        if (0 == bb.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (cb = this.startEvent, sb = bb, Math.max(Math.abs(cb.clientX - sb.clientX), Math.abs(cb.clientY - sb.clientY)) < 10)) return;
        var cb, sb;
        this.select(this.lastEvent = bb);
        let kb = 0,
          Wb = 0,
          ab = 0,
          Tb = 0,
          Ub = this.view.win.innerWidth,
          Ib = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: ab,
          right: Ub
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: Tb,
          bottom: Ib
        } = this.scrollParents.y.getBoundingClientRect());
        let Hb = Us(this.view);
        bb.clientX - Hb.left <= ab + 6 ? kb = -Qk(ab - bb.clientX) : bb.clientX + Hb.right >= Ub - 6 && (kb = Qk(bb.clientX - Ub)), bb.clientY - Hb.top <= Tb + 6 ? Wb = -Qk(Tb - bb.clientY) : bb.clientY + Hb.bottom >= Ib - 6 && (Wb = Qk(bb.clientY - Ib)), this.setScrollSpeed(kb, Wb)
      }
      up(bb) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || bb.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let bb = this.view.contentDOM.ownerDocument;
        bb.removeEventListener("mousemove", this.move), bb.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(bb, cb) {
        this.scrollSpeed = {
          x: bb,
          y: cb
        }, bb || cb ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: bb,
          y: cb
        } = this.scrollSpeed;
        bb && this.scrollParents.x && (this.scrollParents.x.scrollLeft += bb, bb = 0), cb && this.scrollParents.y && (this.scrollParents.y.scrollTop += cb, cb = 0), (bb || cb) && this.view.win.scrollBy(bb, cb), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(bb) {
        let {
          view: cb
        } = this, sb = Ss(this.atoms, this.style.get(bb, this.extend, this.multiple));
        !this.mustSelect && sb.eq(cb.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: sb,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(bb) {
        bb.transactions.some((bb => bb.isUserEvent("input.type"))) ? this.destroy() : this.style.update(bb) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const Ck = Object.create(null),
      Nk = Object.create(null),
      Vk = Yb.ie && Yb.ie_version < 15 || Yb.ios && Yb.webkit_version < 604;

    function Lk(bb, cb, sb) {
      for (let kb of bb.facet(cb)) sb = kb(sb, bb);
      return sb
    }

    function uk(bb, cb) {
      cb = Lk(bb.state, Kc, cb);
      let sb, {
          state: Wb
        } = bb,
        ab = 1,
        Tb = Wb.toText(cb),
        Ub = Tb.lines == Wb.selection.uQ.length;
      if (null != Pk && Wb.selection.uQ.every((bb => bb.empty)) && Pk == Tb.toString()) {
        let bb = -1;
        sb = Wb.changeByRange((sb => {
          let Ib = Wb.doc.lineAt(sb.from);
          if (Ib.from == bb) return {
            range: sb
          };
          bb = Ib.from;
          let Hb = Wb.toText((Ub ? Tb.line(ab++).text : cb) + Wb.lineBreak);
          return {
            changes: {
              from: Ib.from,
              insert: Hb
            },
            range: kb.j.cursor(sb.from + Hb.length)
          }
        }))
      } else sb = Ub ? Wb.changeByRange((bb => {
        let cb = Tb.line(ab++);
        return {
          changes: {
            from: bb.from,
            to: bb.to,
            insert: cb.text
          },
          range: kb.j.cursor(bb.from + cb.length)
        }
      })) : Wb.replaceSelection(Tb);
      bb.dispatch(sb, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function Yk(bb, cb, sb, Wb) {
      if (1 == Wb) return kb.j.cursor(cb, sb);
      if (2 == Wb) return function(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Wb = bb.charCategorizer(cb),
          ab = bb.doc.lineAt(cb),
          Tb = cb - ab.from;
        if (0 == ab.length) return kb.j.cursor(cb);
        0 == Tb ? sb = 1 : Tb == ab.length && (sb = -1);
        let Ub = Tb,
          Ib = Tb;
        sb < 0 ? Ub = (0, kb._)(ab.text, Tb, !1) : Ib = (0, kb._)(ab.text, Tb);
        let Hb = Wb(ab.text.slice(Ub, Ib));
        for (; Ub > 0;) {
          let bb = (0, kb._)(ab.text, Ub, !1);
          if (Wb(ab.text.slice(bb, Ub)) != Hb) break;
          Ub = bb
        }
        for (; Ib < ab.length;) {
          let bb = (0, kb._)(ab.text, Ib);
          if (Wb(ab.text.slice(Ib, bb)) != Hb) break;
          Ib = bb
        }
        return kb.j.range(Ub + ab.from, Ib + ab.from)
      }(bb.state, cb, sb);
      {
        let Wb = bb.docView.lineAt(cb, sb),
          ab = bb.state.doc.lineAt(Wb ? Wb.posAtEnd : cb),
          Tb = Wb ? Wb.posAtStart : ab.from,
          Ub = Wb ? Wb.posAtEnd : ab.to;
        return Ub < bb.state.doc.length && Ub == ab.to && Ub++, kb.j.range(Tb, Ub)
      }
    }
    Nk.scroll = bb => {
      bb.inputState.lastScrollTop = bb.scrollDOM.scrollTop, bb.inputState.lastScrollLeft = bb.scrollDOM.scrollLeft
    }, Nk.wheel = Nk.mousewheel = bb => {
      bb.inputState.lastWheelEvent = Date.now()
    }, Ck.keydown = (bb, cb) => (bb.inputState.setSelectionOrigin("select"), 27 == cb.keyCode && 0 != bb.inputState.tabFocusMode && (bb.inputState.tabFocusMode = Date.now() + 2e3), !1), Nk.touchstart = (bb, cb) => {
      let sb = bb.inputState,
        kb = cb.targetTouches[0];
      sb.lastTouchTime = Date.now(), kb && (sb.lastTouchX = kb.clientX, sb.lastTouchY = kb.clientY), sb.setSelectionOrigin("select.pointer")
    }, Nk.touchmove = bb => {
      bb.inputState.setSelectionOrigin("select.pointer")
    }, Ck.mousedown = (bb, cb) => {
      if (bb.observer.flush(), bb.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let sb = null;
      for (let kb of bb.state.facet(Dc))
        if (sb = kb(bb, cb), sb) break;
      if (sb || 0 != cb.button || (sb = function(bb, cb) {
          let sb = bb.posAndSideAtCoords({
              x: cb.clientX,
              y: cb.clientY
            }, !1),
            Wb = tk(cb),
            ab = bb.state.selection;
          return {
            update(bb) {
              bb.docChanged && (sb.pos = bb.changes.mapPos(sb.pos), ab = ab.map(bb.changes))
            },
            get(cb, Tb, Ub) {
              let Ib, Hb = bb.posAndSideAtCoords({
                  x: cb.clientX,
                  y: cb.clientY
                }, !1),
                fb = Yk(bb, Hb.pos, Hb.assoc, Wb);
              if (sb.pos != Hb.pos && !Tb) {
                let cb = Yk(bb, sb.pos, sb.assoc, Wb),
                  ab = Math.min(cb.from, fb.from),
                  Tb = Math.max(cb.to, fb.to);
                fb = ab < fb.from ? kb.j.range(ab, Tb, fb.assoc) : kb.j.range(Tb, ab, fb.assoc)
              }
              return Tb ? ab.replaceRange(ab.main.extend(fb.from, fb.to, fb.assoc)) : Ub && 1 == Wb && ab.uQ.length > 1 && (Ib = function(bb, cb) {
                for (let sb = 0; sb < bb.uQ.length; sb++) {
                  let {
                    from: Wb,
                    to: ab
                  } = bb.uQ[sb];
                  if (Wb <= cb && ab >= cb) return kb.j.create(bb.uQ.slice(0, sb).concat(bb.uQ.slice(sb + 1)), bb.mainIndex == sb ? 0 : bb.mainIndex - (bb.mainIndex > sb ? 1 : 0))
                }
                return null
              }(ab, Hb.pos)) ? Ib : Ub ? ab.addRange(fb) : kb.j.create([fb])
            }
          }
        }(bb, cb)), sb) {
        let kb = !bb.hasFocus;
        bb.inputState.startMouseSelection(new ek(bb, cb, sb, kb)), kb && bb.observer.ignore((() => {
          sc(bb.contentDOM);
          let cb = bb.root.activeElement;
          cb && !cb.contains(bb.contentDOM) && cb.blur()
        }));
        let Wb = bb.inputState.mouseSelection;
        if (Wb) return Wb.start(cb), !1 === Wb.dragging
      } else bb.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const hk = Yb.ie && Yb.ie_version <= 11;
    let Jk = null,
      gk = 0,
      Bk = 0;

    function tk(bb) {
      if (!hk) return bb.detail;
      let cb = Jk,
        sb = Bk;
      return Jk = bb, Bk = Date.now(), gk = !cb || sb > Date.now() - 400 && Math.abs(cb.clientX - bb.clientX) < 2 && Math.abs(cb.clientY - bb.clientY) < 2 ? (gk + 1) % 3 : 1
    }

    function yk(bb, cb, sb, kb) {
      if (!(sb = Lk(bb.state, Kc, sb))) return;
      let Wb = bb.posAtCoords({
          x: cb.clientX,
          y: cb.clientY
        }, !1),
        {
          draggedContent: ab
        } = bb.inputState,
        Tb = kb && ab && function(bb, cb) {
          let sb = bb.state.facet(Pc);
          return sb.length ? sb[0](cb) : Yb.mac ? !cb.altKey : !cb.ctrlKey
        }(bb, cb) ? {
          from: ab.from,
          to: ab.to
        } : null,
        Ub = {
          from: Wb,
          insert: sb
        },
        Ib = bb.state.changes(Tb ? [Tb, Ub] : Ub);
      bb.focus(), bb.dispatch({
        changes: Ib,
        selection: {
          anchor: Ib.mapPos(Wb, -1),
          head: Ib.mapPos(Wb, 1)
        },
        userEvent: Tb ? "move.drop" : "input.drop"
      }), bb.inputState.draggedContent = null
    }
    Ck.dragstart = (bb, cb) => {
      let {
        selection: {
          main: sb
        }
      } = bb.state;
      if (cb.target.draggable) {
        let Wb = bb.docView.tile.nearest(cb.target);
        if (Wb && Wb.isWidget()) {
          let bb = Wb.posAtStart,
            cb = bb + Wb.length;
          (bb >= sb.to || cb <= sb.from) && (sb = kb.j.range(bb, cb))
        }
      }
      let {
        inputState: Wb
      } = bb;
      return Wb.mouseSelection && (Wb.mouseSelection.dragging = !0), Wb.draggedContent = sb, cb.dataTransfer && (cb.dataTransfer.setData("Text", Lk(bb.state, Zc, bb.state.sliceDoc(sb.from, sb.to))), cb.dataTransfer.effectAllowed = "copyMove"), !1
    }, Ck.dragend = bb => (bb.inputState.draggedContent = null, !1), Ck.drop = (bb, cb) => {
      if (!cb.dataTransfer) return !1;
      if (bb.state.readOnly) return !0;
      let sb = cb.dataTransfer.files;
      if (sb && sb.length) {
        let kb = Array(sb.length),
          Wb = 0,
          ab = () => {
            ++Wb == sb.length && yk(bb, cb, kb.filter((bb => null != bb)).join(bb.state.lineBreak), !1)
          };
        for (let bb = 0; bb < sb.length; bb++) {
          let cb = new FileReader;
          cb.onerror = ab, cb.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(cb.result) || (kb[bb] = cb.result), ab()
          }, cb.readAsText(sb[bb])
        }
        return !0
      } {
        let sb = cb.dataTransfer.getData("Text");
        if (sb) return yk(bb, cb, sb, !0), !0
      }
      return !1
    }, Ck.paste = (bb, cb) => {
      if (bb.state.readOnly) return !0;
      bb.observer.flush();
      let sb = Vk ? null : cb.clipboardData;
      return sb ? (uk(bb, sb.getData("text/plain") || sb.getData("text/uri-list")), !0) : (function(bb) {
        let cb = bb.dom.parentNode;
        if (!cb) return;
        let sb = cb.appendChild(document.createElement("textarea"));
        sb.style.cssText = "position: fixed; left: -10000px; top: 10px", sb.focus(), setTimeout((() => {
          bb.focus(), sb.remove(), uk(bb, sb.value)
        }), 50)
      }(bb), !1)
    };
    let Pk = null;
    Ck.copy = Ck.cut = (bb, cb) => {
      if (!db(bb.contentDOM, bb.observer.selectionRange)) return !1;
      let {
        text: sb,
        uQ: kb,
        linewise: Wb
      } = function(bb) {
        let cb = [],
          sb = [],
          kb = !1;
        for (let Wb of bb.selection.uQ) Wb.empty || (cb.push(bb.sliceDoc(Wb.from, Wb.to)), sb.push(Wb));
        if (!cb.length) {
          let Wb = -1;
          for (let {
              from: kb
            }
            of bb.selection.uQ) {
            let ab = bb.doc.lineAt(kb);
            ab.number > Wb && (cb.push(ab.text), sb.push({
              from: ab.from,
              to: Math.min(bb.doc.length, ab.to + 1)
            })), Wb = ab.number
          }
          kb = !0
        }
        return {
          text: Lk(bb, Zc, cb.join(bb.lineBreak)),
          uQ: sb,
          linewise: kb
        }
      }(bb.state);
      if (!sb && !Wb) return !1;
      Pk = Wb ? sb : null, "cut" != cb.type || bb.state.readOnly || bb.dispatch({
        changes: kb,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let ab = Vk ? null : cb.clipboardData;
      return ab ? (ab.clearData(), ab.setData("text/plain", sb), !0) : (function(bb, cb) {
        let sb = bb.dom.parentNode;
        if (!sb) return;
        let kb = sb.appendChild(document.createElement("textarea"));
        kb.style.cssText = "position: fixed; left: -10000px; top: 10px", kb.value = cb, kb.focus(), kb.selectionEnd = cb.length, kb.selectionStart = 0, setTimeout((() => {
          kb.remove(), bb.focus()
        }), 50)
      }(bb, sb), !1)
    };
    const Dk = kb.e.define();

    function Ek(bb, cb) {
      let sb = [];
      for (let kb of bb.facet(Gc)) {
        let Wb = kb(bb, cb);
        Wb && sb.push(Wb)
      }
      return sb.length ? bb.update({
        effects: sb,
        annotations: Dk.of(!0)
      }) : null
    }

    function ik(bb) {
      setTimeout((() => {
        let cb = bb.hasFocus;
        if (cb != bb.inputState.notifiedFocused) {
          let sb = Ek(bb.state, cb);
          sb ? bb.dispatch(sb) : bb.update([])
        }
      }), 10)
    }
    Nk.focus = bb => {
      bb.inputState.lastFocusTime = Date.now(), bb.scrollDOM.scrollTop || !bb.inputState.lastScrollTop && !bb.inputState.lastScrollLeft || (bb.scrollDOM.scrollTop = bb.inputState.lastScrollTop, bb.scrollDOM.scrollLeft = bb.inputState.lastScrollLeft), ik(bb)
    }, Nk.blur = bb => {
      bb.observer.clearSelectionRange(), ik(bb)
    }, Nk.compositionstart = Nk.compositionupdate = bb => {
      bb.observer.editContext || (null == bb.inputState.compositionFirstChange && (bb.inputState.compositionFirstChange = !0), bb.inputState.composing < 0 && (bb.inputState.composing = 0))
    }, Nk.compositionend = bb => {
      bb.observer.editContext || (bb.inputState.composing = -1, bb.inputState.compositionEndedAt = Date.now(), bb.inputState.compositionPendingKey = !0, bb.inputState.compositionPendingChange = bb.observer.pendingRecords().length > 0, bb.inputState.compositionFirstChange = null, Yb.chrome && Yb.android ? bb.observer.flushSoon() : bb.inputState.compositionPendingChange ? Promise.resolve().then((() => bb.observer.flush())) : setTimeout((() => {
        bb.inputState.composing < 0 && bb.docView.hasComposition && bb.update([])
      }), 50))
    }, Nk.contextmenu = bb => {
      bb.inputState.lastContextMenu = Date.now()
    }, Ck.beforeinput = (bb, cb) => {
      var sb, kb;
      if ("insertText" != cb.inputType && "insertCompositionText" != cb.inputType || (bb.inputState.insertingText = cb.data, bb.inputState.insertingTextAt = Date.now()), "insertReplacementText" == cb.inputType && bb.observer.editContext) {
        let kb = null === (sb = cb.dataTransfer) || void 0 === sb ? void 0 : sb.getData("text/plain"),
          Wb = cb.getTargetRanges();
        if (kb && Wb.length) {
          let cb = Wb[0],
            sb = bb.posAtDOM(cb.startContainer, cb.startOffset),
            ab = bb.posAtDOM(cb.endContainer, cb.endOffset);
          return Uk(bb, {
            from: sb,
            to: ab,
            insert: bb.state.toText(kb)
          }, null), !0
        }
      }
      let Wb;
      if (Yb.chrome && Yb.android && (Wb = nk.find((bb => bb.inputType == cb.inputType))) && (bb.observer.delayAndroidKey(Wb.key, Wb.keyCode), "Backspace" == Wb.key || "Delete" == Wb.key)) {
        let cb = (null === (kb = window.visualViewport) || void 0 === kb ? void 0 : kb.height) || 0;
        setTimeout((() => {
          var sb;
          ((null === (sb = window.visualViewport) || void 0 === sb ? void 0 : sb.height) || 0) > cb + 10 && bb.hasFocus && (bb.contentDOM.blur(), bb.focus())
        }), 100)
      }
      return Yb.ios && "deleteContentForward" == cb.inputType && bb.observer.flushSoon(), Yb.safari && "insertText" == cb.inputType && bb.inputState.composing >= 0 && setTimeout((() => Nk.compositionend(bb, cb)), 20), !1
    };
    const Ok = new Set;
    const Gk = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let Kk = !1;

    function Zk() {
      Kk = !1
    }
    class zk {
      constructor(bb) {
        this.lineWrapping = bb, this.doc = kb.L.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(bb, cb) {
        let sb = this.doc.lineAt(cb).number - this.doc.lineAt(bb).number + 1;
        return this.lineWrapping && (sb += Math.max(0, Math.ceil((cb - bb - sb * this.lineLength * .5) / this.lineLength))), this.lineHeight * sb
      }
      heightForLine(bb) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((bb - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(bb) {
        return this.doc = bb, this
      }
      mustRefreshForWrapping(bb) {
        return Gk.indexOf(bb) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(bb) {
        let cb = !1;
        for (let sb = 0; sb < bb.length; sb++) {
          let kb = bb[sb];
          kb < 0 ? sb++ : this.heightSamples[Math.floor(10 * kb)] || (cb = !0, this.heightSamples[Math.floor(10 * kb)] = !0)
        }
        return cb
      }
      refresh(bb, cb, sb, kb, Wb, ab) {
        let Tb = Gk.indexOf(bb) > -1,
          Ub = Math.abs(cb - this.lineHeight) > .3 || this.lineWrapping != Tb || Math.abs(sb - this.charWidth) > .1;
        if (this.lineWrapping = Tb, this.lineHeight = cb, this.charWidth = sb, this.textHeight = kb, this.lineLength = Wb, Ub) {
          this.heightSamples = {};
          for (let bb = 0; bb < ab.length; bb++) {
            let cb = ab[bb];
            cb < 0 ? bb++ : this.heightSamples[Math.floor(10 * cb)] = !0
          }
        }
        return Ub
      }
    }
    class qk {
      constructor(bb, cb) {
        this.from = bb, this.heights = cb, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class dk {
      constructor(bb, cb, sb, kb, Wb) {
        this.from = bb, this.length = cb, this.top = sb, this.height = kb, this._content = Wb
      }
      get type() {
        return "number" == typeof this._content ? Pb.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof Ob ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(bb) {
        let cb = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(bb._content) ? bb._content : [bb]);
        return new dk(this.from, this.length + bb.length, this.top, this.height + bb.height, cb)
      }
    }
    var Ak = function(bb) {
      return bb[bb.ByPos = 0] = "ByPos", bb[bb.ByHeight = 1] = "ByHeight", bb[bb.ByPosNoHeight = 2] = "ByPosNoHeight", bb
    }(Ak || (Ak = {}));
    const wk = .001;
    class rk {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = bb, this.height = cb, this.flags = sb
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(bb) {
        this.flags = (bb ? 2 : 0) | -3 & this.flags
      }
      setHeight(bb) {
        this.height != bb && (Math.abs(this.height - bb) > wk && (Kk = !0), this.height = bb)
      }
      replace(bb, cb, sb) {
        return rk.of(sb)
      }
      decomposeLeft(bb, cb) {
        cb.push(this)
      }
      decomposeRight(bb, cb) {
        cb.push(this)
      }
      applyChanges(bb, cb, sb, kb) {
        let Wb = this,
          ab = sb.doc;
        for (let Tb = kb.length - 1; Tb >= 0; Tb--) {
          let {
            fromA: Ub,
            toA: Ib,
            fromB: Hb,
            toB: fb
          } = kb[Tb], Mb = Wb.lineAt(Ub, Ak.ByPosNoHeight, sb.setDoc(cb), 0, 0), Xb = Mb.to >= Ib ? Mb : Wb.lineAt(Ib, Ak.ByPosNoHeight, sb, 0, 0);
          for (fb += Xb.to - Ib, Ib = Xb.to; Tb > 0 && Mb.from <= kb[Tb - 1].toA;) Ub = kb[Tb - 1].fromA, Hb = kb[Tb - 1].fromB, Tb--, Ub < Mb.from && (Mb = Wb.lineAt(Ub, Ak.ByPosNoHeight, sb, 0, 0));
          Hb += Mb.from - Ub, Ub = Mb.from;
          let nb = bW.build(sb.setDoc(ab), bb, Hb, fb);
          Wb = Sk(Wb, Wb.replace(Ub, Ib, nb))
        }
        return Wb.updateHeight(sb, 0)
      }
      static empty() {
        return new Fk(0, 0, 0)
      }
      static of (bb) {
        if (1 == bb.length) return bb[0];
        let cb = 0,
          sb = bb.length,
          kb = 0,
          Wb = 0;
        for (;;)
          if (cb == sb)
            if (kb > 2 * Wb) {
              let Wb = bb[cb - 1];
              Wb.break ? bb.splice(--cb, 1, Wb.left, null, Wb.right) : bb.splice(--cb, 1, Wb.left, Wb.right), sb += 1 + Wb.break, kb -= Wb.size
            } else {
              if (!(Wb > 2 * kb)) break;
              {
                let cb = bb[sb];
                cb.break ? bb.splice(sb, 1, cb.left, null, cb.right) : bb.splice(sb, 1, cb.left, cb.right), sb += 2 + cb.break, Wb -= cb.size
              }
            }
        else if (kb < Wb) {
          let sb = bb[cb++];
          sb && (kb += sb.size)
        } else {
          let cb = bb[--sb];
          cb && (Wb += cb.size)
        }
        let ab = 0;
        return null == bb[cb - 1] ? (ab = 1, cb--) : null == bb[cb] && (ab = 1, sb++), new jk(rk.of(bb.slice(0, cb)), ab, rk.of(bb.slice(sb)))
      }
    }

    function Sk(bb, cb) {
      return bb == cb ? bb : (bb.constructor != cb.constructor && (Kk = !0), cb)
    }
    rk.prototype.size = 1;
    const Rk = Db.replace({});
    class vk extends rk {
      constructor(bb, cb, sb) {
        super(bb, cb), this.deco = sb, this.spaceAbove = 0
      }
      mainBlock(bb, cb) {
        return new dk(cb, this.length, bb + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(bb, cb, sb, kb) {
        return this.spaceAbove && bb < sb + this.spaceAbove ? new dk(kb, 0, sb, this.spaceAbove, Rk) : this.mainBlock(sb, kb)
      }
      lineAt(bb, cb, sb, kb, Wb) {
        let ab = this.mainBlock(kb, Wb);
        return this.spaceAbove ? this.blockAt(0, sb, kb, Wb).join(ab) : ab
      }
      forEachLine(bb, cb, sb, kb, Wb, ab) {
        bb <= Wb + this.length && cb >= Wb && ab(this.lineAt(0, Ak.ByPos, sb, kb, Wb))
      }
      setMeasuredHeight(bb) {
        let cb = bb.heights[bb.index++];
        cb < 0 ? (this.spaceAbove = -cb, cb = bb.heights[bb.index++]) : this.spaceAbove = 0, this.setHeight(cb)
      }
      updateHeight(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 3 ? arguments[3] : void 0;
        return sb && sb.from <= cb && sb.more && this.setMeasuredHeight(sb), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class Fk extends vk {
      constructor(bb, cb, sb) {
        super(bb, cb, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = sb
      }
      mainBlock(bb, cb) {
        return new dk(cb, this.length, bb + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(bb, cb, sb) {
        let kb = sb[0];
        return 1 == sb.length && (kb instanceof Fk || kb instanceof xk && 4 & kb.flags) && Math.abs(this.length - kb.length) < 10 ? (kb instanceof xk ? kb = new Fk(kb.length, this.height, this.spaceAbove) : kb.height = this.height, this.outdated || (kb.outdated = !1), kb) : rk.of(sb)
      }
      updateHeight(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 ? arguments[3] : void 0;
        return kb && kb.from <= cb && kb.more ? this.setMeasuredHeight(kb) : (sb || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, bb.heightForLine(this.length - this.collapsed)) + this.breaks * bb.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class xk extends rk {
      constructor(bb) {
        super(bb, 0)
      }
      heightMetrics(bb, cb) {
        let sb, kb = bb.doc.lineAt(cb).number,
          Wb = bb.doc.lineAt(cb + this.length).number,
          ab = Wb - kb + 1,
          Tb = 0;
        if (bb.lineWrapping) {
          let cb = Math.min(this.height, bb.lineHeight * ab);
          sb = cb / ab, this.length > ab + 1 && (Tb = (this.height - cb) / (this.length - ab - 1))
        } else sb = this.height / ab;
        return {
          firstLine: kb,
          lastLine: Wb,
          perLine: sb,
          perChar: Tb
        }
      }
      blockAt(bb, cb, sb, kb) {
        let {
          firstLine: Wb,
          lastLine: ab,
          perLine: Tb,
          perChar: Ub
        } = this.heightMetrics(cb, kb);
        if (cb.lineWrapping) {
          let Wb = kb + (bb < cb.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (bb - sb) / this.height)) * this.length)),
            ab = cb.doc.lineAt(Wb),
            Ib = Tb + ab.length * Ub,
            Hb = Math.max(sb, bb - Ib / 2);
          return new dk(ab.from, ab.length, Hb, Ib, 0)
        } {
          let kb = Math.max(0, Math.min(ab - Wb, Math.floor((bb - sb) / Tb))),
            {
              from: Ub,
              length: Ib
            } = cb.doc.line(Wb + kb);
          return new dk(Ub, Ib, sb + Tb * kb, Tb, 0)
        }
      }
      lineAt(bb, cb, sb, kb, Wb) {
        if (cb == Ak.ByHeight) return this.blockAt(bb, sb, kb, Wb);
        if (cb == Ak.ByPosNoHeight) {
          let {
            from: cb,
            to: kb
          } = sb.doc.lineAt(bb);
          return new dk(cb, kb - cb, 0, 0, 0)
        }
        let {
          firstLine: ab,
          perLine: Tb,
          perChar: Ub
        } = this.heightMetrics(sb, Wb), Ib = sb.doc.lineAt(bb), Hb = Tb + Ib.length * Ub, fb = Ib.number - ab, Mb = kb + Tb * fb + Ub * (Ib.from - Wb - fb);
        return new dk(Ib.from, Ib.length, Math.max(kb, Math.min(Mb, kb + this.height - Hb)), Hb, 0)
      }
      forEachLine(bb, cb, sb, kb, Wb, ab) {
        bb = Math.max(bb, Wb), cb = Math.min(cb, Wb + this.length);
        let {
          firstLine: Tb,
          perLine: Ub,
          perChar: Ib
        } = this.heightMetrics(sb, Wb);
        for (let Hb = bb, fb = kb; Hb <= cb;) {
          let cb = sb.doc.lineAt(Hb);
          if (Hb == bb) {
            let sb = cb.number - Tb;
            fb += Ub * sb + Ib * (bb - Wb - sb)
          }
          let kb = Ub + Ib * cb.length;
          ab(new dk(cb.from, cb.length, fb, kb, 0)), fb += kb, Hb = cb.to + 1
        }
      }
      replace(bb, cb, sb) {
        let kb = this.length - cb;
        if (kb > 0) {
          let bb = sb[sb.length - 1];
          bb instanceof xk ? sb[sb.length - 1] = new xk(bb.length + kb) : sb.push(null, new xk(kb - 1))
        }
        if (bb > 0) {
          let cb = sb[0];
          cb instanceof xk ? sb[0] = new xk(bb + cb.length) : sb.unshift(new xk(bb - 1), null)
        }
        return rk.of(sb)
      }
      decomposeLeft(bb, cb) {
        cb.push(new xk(bb - 1), null)
      }
      decomposeRight(bb, cb) {
        cb.push(null, new xk(this.length - bb - 1))
      }
      updateHeight(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 ? arguments[3] : void 0,
          Wb = cb + this.length;
        if (kb && kb.from <= cb + this.length && kb.more) {
          let sb = [],
            ab = Math.max(cb, kb.from),
            Tb = -1;
          for (kb.from > cb && sb.push(new xk(kb.from - cb - 1).updateHeight(bb, cb)); ab <= Wb && kb.more;) {
            let cb = bb.doc.lineAt(ab).length;
            sb.length && sb.push(null);
            let Wb = kb.heights[kb.index++],
              Ub = 0;
            Wb < 0 && (Ub = -Wb, Wb = kb.heights[kb.index++]), -1 == Tb ? Tb = Wb : Math.abs(Wb - Tb) >= wk && (Tb = -2);
            let Ib = new Fk(cb, Wb, Ub);
            Ib.outdated = !1, sb.push(Ib), ab += cb + 1
          }
          ab <= Wb && sb.push(null, new xk(Wb - ab).updateHeight(bb, ab));
          let Ub = rk.of(sb);
          return (Tb < 0 || Math.abs(Ub.height - this.height) >= wk || Math.abs(Tb - this.heightMetrics(bb, cb).perLine) >= wk) && (Kk = !0), Sk(this, Ub)
        }
        return (sb || this.outdated) && (this.setHeight(bb.heightForGap(cb, cb + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class jk extends rk {
      constructor(bb, cb, sb) {
        super(bb.length + cb + sb.length, bb.height + sb.height, cb | (bb.outdated || sb.outdated ? 2 : 0)), this.left = bb, this.right = sb, this.size = bb.size + sb.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(bb, cb, sb, kb) {
        let Wb = sb + this.left.height;
        return bb < Wb ? this.left.blockAt(bb, cb, sb, kb) : this.right.blockAt(bb, cb, Wb, kb + this.left.length + this.break)
      }
      lineAt(bb, cb, sb, kb, Wb) {
        let ab = kb + this.left.height,
          Tb = Wb + this.left.length + this.break,
          Ub = cb == Ak.ByHeight ? bb < ab : bb < Tb,
          Ib = Ub ? this.left.lineAt(bb, cb, sb, kb, Wb) : this.right.lineAt(bb, cb, sb, ab, Tb);
        if (this.break || (Ub ? Ib.to < Tb : Ib.from > Tb)) return Ib;
        let Hb = cb == Ak.ByPosNoHeight ? Ak.ByPosNoHeight : Ak.ByPos;
        return Ub ? Ib.join(this.right.lineAt(Tb, Hb, sb, ab, Tb)) : this.left.lineAt(Tb, Hb, sb, kb, Wb).join(Ib)
      }
      forEachLine(bb, cb, sb, kb, Wb, ab) {
        let Tb = kb + this.left.height,
          Ub = Wb + this.left.length + this.break;
        if (this.break) bb < Ub && this.left.forEachLine(bb, cb, sb, kb, Wb, ab), cb >= Ub && this.right.forEachLine(bb, cb, sb, Tb, Ub, ab);
        else {
          let Ib = this.lineAt(Ub, Ak.ByPos, sb, kb, Wb);
          bb < Ib.from && this.left.forEachLine(bb, Ib.from - 1, sb, kb, Wb, ab), Ib.to >= bb && Ib.from <= cb && ab(Ib), cb > Ib.to && this.right.forEachLine(Ib.to + 1, cb, sb, Tb, Ub, ab)
        }
      }
      replace(bb, cb, sb) {
        let kb = this.left.length + this.break;
        if (cb < kb) return this.balanced(this.left.replace(bb, cb, sb), this.right);
        if (bb > this.left.length) return this.balanced(this.left, this.right.replace(bb - kb, cb - kb, sb));
        let Wb = [];
        bb > 0 && this.decomposeLeft(bb, Wb);
        let ab = Wb.length;
        for (let Tb of sb) Wb.push(Tb);
        if (bb > 0 && pk(Wb, ab - 1), cb < this.length) {
          let bb = Wb.length;
          this.decomposeRight(cb, Wb), pk(Wb, bb)
        }
        return rk.of(Wb)
      }
      decomposeLeft(bb, cb) {
        let sb = this.left.length;
        if (bb <= sb) return this.left.decomposeLeft(bb, cb);
        cb.push(this.left), this.break && (sb++, bb >= sb && cb.push(null)), bb > sb && this.right.decomposeLeft(bb - sb, cb)
      }
      decomposeRight(bb, cb) {
        let sb = this.left.length,
          kb = sb + this.break;
        if (bb >= kb) return this.right.decomposeRight(bb - kb, cb);
        bb < sb && this.left.decomposeRight(bb, cb), this.break && bb < kb && cb.push(null), cb.push(this.right)
      }
      balanced(bb, cb) {
        return bb.size > 2 * cb.size || cb.size > 2 * bb.size ? rk.of(this.break ? [bb, null, cb] : [bb, cb]) : (this.left = Sk(this.left, bb), this.right = Sk(this.right, cb), this.setHeight(bb.height + cb.height), this.outdated = bb.outdated || cb.outdated, this.size = bb.size + cb.size, this.length = bb.length + this.break+cb.length, this)
      }
      updateHeight(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: Wb,
            right: ab
          } = this,
          Tb = cb + Wb.length + this.break,
          Ub = null;
        return kb && kb.from <= cb + Wb.length && kb.more ? Ub = Wb = Wb.updateHeight(bb, cb, sb, kb) : Wb.updateHeight(bb, cb, sb), kb && kb.from <= Tb + ab.length && kb.more ? Ub = ab = ab.updateHeight(bb, Tb, sb, kb) : ab.updateHeight(bb, Tb, sb), Ub ? this.balanced(Wb, ab) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function pk(bb, cb) {
      let sb, kb;
      null == bb[cb] && (sb = bb[cb - 1]) instanceof xk && (kb = bb[cb + 1]) instanceof xk && bb.splice(cb - 1, 3, new xk(sb.length + 1 + kb.length))
    }
    class bW {
      constructor(bb, cb) {
        this.pos = bb, this.oracle = cb, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = bb
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(bb, cb) {
        if (this.lineStart > -1) {
          let bb = Math.min(cb, this.lineEnd),
            sb = this.nodes[this.nodes.length - 1];
          sb instanceof Fk ? sb.length += bb - this.pos : (bb > this.pos || !this.isCovered) && this.nodes.push(new Fk(bb - this.pos, -1, 0)), this.writtenTo = bb, cb > bb && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = cb
      }
      point(bb, cb, sb) {
        if (bb < cb || sb.heightRelevant) {
          let kb = sb.widget ? sb.widget.estimatedHeight : 0,
            Wb = sb.widget ? sb.widget.lineBreaks : 0;
          kb < 0 && (kb = this.oracle.lineHeight);
          let ab = cb - bb;
          sb.block ? this.tbb(new vk(ab, kb, sb)) : (ab || Wb || kb >= 5) && this.addLineDeco(kb, Wb, ab)
        } else cb > bb && this.span(bb, cb);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: bb,
          to: cb
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = bb, this.lineEnd = cb, this.writtenTo < bb && ((this.writtenTo < bb - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, bb - 1)), this.nodes.push(null)), this.pos > bb && this.nodes.push(new Fk(this.pos - bb, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(bb, cb) {
        let sb = new xk(cb - bb);
        return this.oracle.doc.lineAt(bb).to == cb && (sb.flags |= 4), sb
      }
      ensureLine() {
        this.enterLine();
        let bb = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (bb instanceof Fk) return bb;
        let cb = new Fk(0, -1, 0);
        return this.nodes.push(cb), cb
      }
      tbb(bb) {
        this.enterLine();
        let cb = bb.deco;
        cb && cb.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(bb), this.writtenTo = this.pos = this.pos + bb.length, cb && cb.endSide > 0 && (this.covering = bb)
      }
      addLineDeco(bb, cb, sb) {
        let kb = this.ensureLine();
        kb.length += sb, kb.collapsed += sb, kb.widgetHeight = Math.max(kb.widgetHeight, bb), kb.breaks += cb, this.writtenTo = this.pos = this.pos + sb
      }
      finish(bb) {
        let cb = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || cb instanceof Fk || this.isCovered ? (this.writtenTo < this.pos || null == cb) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new Fk(0, -1, 0));
        let sb = bb;
        for (let kb of this.nodes) kb instanceof Fk && kb.updateHeight(this.oracle, sb), sb += kb ? kb.length : 1;
        return this.nodes
      }
      static build(bb, cb, sb, Wb) {
        let ab = new bW(sb, bb);
        return kb.z.spans(cb, sb, Wb, ab, 0), ab.finish(sb)
      }
    }
    class cW {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(bb, cb, sb, kb) {
        (bb < cb || sb && sb.heightRelevant || kb && kb.heightRelevant) && Kb(bb, cb, this.changes, 5)
      }
    }

    function sW(bb, cb) {
      let sb = bb.getBoundingClientRect(),
        kb = bb.ownerDocument,
        Wb = kb.defaultView || window,
        ab = Math.max(0, sb.left),
        Tb = Math.min(Wb.innerWidth, sb.right),
        Ub = Math.max(0, sb.top),
        Ib = Math.min(Wb.innerHeight, sb.bottom);
      for (let Hb = bb.parentNode; Hb && Hb != kb.body;)
        if (1 == Hb.nodeType) {
          let cb = Hb,
            sb = window.getComputedStyle(cb);
          if ((cb.scrollHeight > cb.clientHeight || cb.scrollWidth > cb.clientWidth) && "visible" != sb.overflow) {
            let sb = cb.getBoundingClientRect();
            ab = Math.max(ab, sb.left), Tb = Math.min(Tb, sb.right), Ub = Math.max(Ub, sb.top), Ib = Math.min(Hb == bb.parentNode ? Wb.innerHeight : Ib, sb.bottom)
          }
          Hb = "absolute" == sb.position || "fixed" == sb.position ? cb.offsetParent : cb.parentNode
        } else {
          if (11 != Hb.nodeType) break;
          Hb = Hb.host
        } return {
        left: ab - sb.left,
        right: Math.max(ab, Tb) - sb.left,
        top: Ub - (sb.top + cb),
        bottom: Math.max(Ub, Ib) - (sb.top + cb)
      }
    }

    function kW(bb, cb) {
      let sb = bb.getBoundingClientRect();
      return {
        left: 0,
        right: sb.right - sb.left,
        top: cb,
        bottom: sb.bottom - (sb.top + cb)
      }
    }
    class WW {
      constructor(bb, cb, sb, kb) {
        this.from = bb, this.to = cb, this.size = sb, this.displaySize = kb
      }
      static same(bb, cb) {
        if (bb.length != cb.length) return !1;
        for (let sb = 0; sb < bb.length; sb++) {
          let kb = bb[sb],
            Wb = cb[sb];
          if (kb.from != Wb.from || kb.to != Wb.to || kb.size != Wb.size) return !1
        }
        return !0
      }
      draw(bb, cb) {
        return Db.replace({
          widget: new aW(this.displaySize * (cb ? bb.scaleY : bb.scaleX), cb)
        }).range(this.from, this.to)
      }
    }
    class aW extends yb {
      constructor(bb, cb) {
        super(), this.size = bb, this.vertical = cb
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
    class TW {
      constructor(bb, cb) {
        this.view = bb, this.state = cb, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = fW, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Hc.LTR, this.J7 = [], this.mustEnforceCursorAssoc = !1;
        let sb = cb.facet(pc).some((bb => "function" != typeof bb && "cm-lineWrapping" == bb.class));
        this.heightOracle = new zk(sb), this.stateDeco = MW(cb), this.heightMap = rk.empty().applyChanges(this.stateDeco, kb.L.empty, this.heightOracle.setDoc(cb.doc), [new Hs(0, 0, 0, cb.doc.length)]);
        for (let kb = 0; kb < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); kb++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Db.set(this.lineGaps.map((bb => bb.draw(this, !1)))), this.scrollParent = bb.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let bb = [this.viewport],
          {
            main: cb
          } = this.state.selection;
        for (let sb = 0; sb <= 1; sb++) {
          let kb = sb ? cb.head : cb.anchor;
          if (!bb.some((bb => {
              let {
                from: cb,
                to: sb
              } = bb;
              return kb >= cb && kb <= sb
            }))) {
            let {
              from: cb,
              to: sb
            } = this.lineBlockAt(kb);
            bb.push(new UW(cb, sb))
          }
        }
        return this.viewports = bb.sort(((bb, cb) => bb.from - cb.from)), this.updateScaler()
      }
      updateScaler() {
        let bb = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? fW : new XW(this.heightOracle, this.heightMap, this.viewports), bb.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (bb => {
          this.viewportLines.push(nW(bb, this.scaler))
        }))
      }
      update(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = bb.state;
        let sb = this.stateDeco;
        this.stateDeco = MW(this.state);
        let Wb = bb.changedRanges,
          ab = Hs.extendWithRanges(Wb, function(bb, cb, sb) {
            let Wb = new cW;
            return kb.z.compare(bb, cb, sb, Wb, 0), Wb.changes
          }(sb, this.stateDeco, bb ? bb.changes : kb.ChangeSet.empty(this.state.doc.length))),
          Tb = this.heightMap.height,
          Ub = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        Zk(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, bb.startState.doc, this.heightOracle.setDoc(this.state.doc), ab), (this.heightMap.height != Tb || Kk) && (bb.flags |= 2), Ub ? (this.scrollAnchorPos = bb.changes.mapPos(Ub.from, -1), this.scrollAnchorHeight = Ub.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = Tb);
        let Ib = ab.length ? this.mapViewport(this.viewport, bb.changes) : this.viewport;
        (cb && (cb.range.head < Ib.from || cb.range.head > Ib.to) || !this.viewportIsAppropriate(Ib)) && (Ib = this.getViewport(0, cb));
        let Hb = Ib.from != this.viewport.from || Ib.to != this.viewport.to;
        this.viewport = Ib, bb.flags |= this.updateForViewport(), (Hb || !bb.changes.empty || 2 & bb.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, bb.changes))), bb.flags |= this.computeVisibleRanges(bb.changes), cb && (this.scrollTarget = cb), !this.mustEnforceCursorAssoc && (bb.selectionSet || bb.focusChanged) && bb.view.lineWrapping && bb.state.selection.main.empty && bb.state.selection.main.assoc && !bb.state.facet(qc) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: bb
        } = this, cb = bb.contentDOM, sb = window.getComputedStyle(cb), Wb = this.heightOracle, ab = sb.whiteSpace;
        this.defaultTextDirection = "rtl" == sb.direction ? Hc.RTL : Hc.LTR;
        let Tb = this.heightOracle.mustRefreshForWrapping(ab) || "refresh" === this.mustMeasureContent,
          Ub = cb.getBoundingClientRect(),
          Ib = Tb || this.mustMeasureContent || this.contentDOMHeight != Ub.height;
        this.contentDOMHeight = Ub.height, this.mustMeasureContent = !1;
        let Hb = 0,
          fb = 0;
        if (Ub.width && Ub.height) {
          let {
            scaleX: bb,
            scaleY: sb
          } = xb(cb, Ub);
          (bb > .005 && Math.abs(this.scaleX - bb) > .005 || sb > .005 && Math.abs(this.scaleY - sb) > .005) && (this.scaleX = bb, this.scaleY = sb, Hb |= 16, Tb = Ib = !0)
        }
        let Mb = (parseInt(sb.paddingTop) || 0) * this.scaleY,
          Xb = (parseInt(sb.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == Mb && this.paddingBottom == Xb || (this.paddingTop = Mb, this.paddingBottom = Xb, Hb |= 18), this.editorWidth != bb.scrollDOM.clientWidth && (Wb.lineWrapping && (Ib = !0), this.editorWidth = bb.scrollDOM.clientWidth, Hb |= 16);
        let nb = jb(this.view.contentDOM, !1).y;
        nb != this.scrollParent && (this.scrollParent = nb, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let mb = this.getScrollOffset();
        this.scrollOffset != mb && (this.scrollAnchorHeight = -1, this.scrollOffset = mb), this.scrolledToBottom = ac(this.scrollParent || bb.win);
        let lb = (this.printing ? kW : sW)(cb, this.paddingTop),
          Qb = lb.top - this.pixelViewport.top,
          eb = lb.bottom - this.pixelViewport.bottom;
        this.pixelViewport = lb;
        let Cb = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (Cb != this.inView && (this.inView = Cb, Cb && (Ib = !0)), !this.inView && !this.scrollTarget && ! function(bb) {
            let cb = bb.getBoundingClientRect(),
              sb = bb.ownerDocument.defaultView || window;
            return cb.left < sb.innerWidth && cb.right > 0 && cb.top < sb.innerHeight && cb.bottom > 0
          }(bb.dom)) return 0;
        let Nb = Ub.width;
        if (this.contentDOMWidth == Nb && this.editorHeight == bb.scrollDOM.clientHeight || (this.contentDOMWidth = Ub.width, this.editorHeight = bb.scrollDOM.clientHeight, Hb |= 16), Ib) {
          let cb = bb.docView.measureVisibleLineHeights(this.viewport);
          if (Wb.mustRefreshForHeights(cb) && (Tb = !0), Tb || Wb.lineWrapping && Math.abs(Nb - this.contentDOMWidth) > Wb.charWidth) {
            let {
              lineHeight: sb,
              charWidth: kb,
              textHeight: Ub
            } = bb.docView.measureTextSize();
            Tb = sb > 0 && Wb.refresh(ab, sb, kb, Ub, Math.max(5, Nb / kb), cb), Tb && (bb.docView.minWidth = 0, Hb |= 16)
          }
          Qb > 0 && eb > 0 ? fb = Math.max(Qb, eb) : Qb < 0 && eb < 0 && (fb = Math.min(Qb, eb)), Zk();
          for (let sb of this.viewports) {
            let ab = sb.from == this.viewport.from ? cb : bb.docView.measureVisibleLineHeights(sb);
            this.heightMap = (Tb ? rk.empty().applyChanges(this.stateDeco, kb.L.empty, this.heightOracle, [new Hs(0, 0, 0, bb.state.doc.length)]) : this.heightMap).updateHeight(Wb, 0, Tb, new qk(sb.from, ab))
          }
          Kk && (Hb |= 2)
        }
        let Vb = !this.viewportIsAppropriate(this.viewport, fb) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return Vb && (2 & Hb && (Hb |= this.updateScaler()), this.viewport = this.getViewport(fb, this.scrollTarget), Hb |= this.updateForViewport()), (2 & Hb || Vb) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(Tb ? [] : this.lineGaps, bb)), Hb |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, bb.docView.enforceCursorAssoc()), Hb
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(bb, cb) {
        let sb = .5 - Math.max(-.5, Math.min(.5, bb / 1e3 / 2)),
          kb = this.heightMap,
          Wb = this.heightOracle,
          {
            visibleTop: ab,
            visibleBottom: Tb
          } = this,
          Ub = new UW(kb.lineAt(ab - 1e3 * sb, Ak.ByHeight, Wb, 0, 0).from, kb.lineAt(Tb + 1e3 * (1 - sb), Ak.ByHeight, Wb, 0, 0).to);
        if (cb) {
          let {
            head: bb
          } = cb.range;
          if (bb < Ub.from || bb > Ub.to) {
            let sb, ab = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              Tb = kb.lineAt(bb, Ak.ByPos, Wb, 0, 0);
            sb = "center" == cb.y ? (Tb.top + Tb.bottom) / 2 - ab / 2 : "start" == cb.y || "nearest" == cb.y && bb < Ub.from ? Tb.top : Tb.bottom - ab, Ub = new UW(kb.lineAt(sb - 500, Ak.ByHeight, Wb, 0, 0).from, kb.lineAt(sb + ab + 500, Ak.ByHeight, Wb, 0, 0).to)
          }
        }
        return Ub
      }
      mapViewport(bb, cb) {
        let sb = cb.mapPos(bb.from, -1),
          kb = cb.mapPos(bb.to, 1);
        return new UW(this.heightMap.lineAt(sb, Ak.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(kb, Ak.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(bb) {
        let {
          from: cb,
          to: sb
        } = bb, kb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: Wb
        } = this.heightMap.lineAt(cb, Ak.ByPos, this.heightOracle, 0, 0), {
          bottom: ab
        } = this.heightMap.lineAt(sb, Ak.ByPos, this.heightOracle, 0, 0), {
          visibleTop: Tb,
          visibleBottom: Ub
        } = this;
        return (0 == cb || Wb <= Tb - Math.max(10, Math.min(-kb, 250))) && (sb == this.state.doc.length || ab >= Ub + Math.max(10, Math.min(kb, 250))) && Wb > Tb - 2e3 && ab < Ub + 2e3
      }
      mapLineGaps(bb, cb) {
        if (!bb.length || cb.empty) return bb;
        let sb = [];
        for (let kb of bb) cb.touchesRange(kb.from, kb.to) || sb.push(new WW(cb.mapPos(kb.from), cb.mapPos(kb.to), kb.size, kb.displaySize));
        return sb
      }
      ensureLineGaps(bb, cb) {
        let sb = this.heightOracle.lineWrapping,
          Wb = sb ? 1e4 : 2e3,
          ab = Wb >> 1,
          Tb = Wb << 1;
        if (this.defaultTextDirection != Hc.LTR && !sb) return [];
        let Ub = [],
          Ib = (Wb, Tb, Hb, fb) => {
            if (Tb - Wb < ab) return;
            let Mb = this.state.selection.main,
              Xb = [Mb.from];
            Mb.empty || Xb.push(Mb.to);
            for (let bb of Xb)
              if (bb > Wb && bb < Tb) return Ib(Wb, bb - 10, Hb, fb), void Ib(bb + 10, Tb, Hb, fb);
            let nb = function(bb, cb) {
              for (let sb of bb)
                if (cb(sb)) return sb;
              return
            }(bb, (bb => bb.from >= Hb.from && bb.to <= Hb.to && Math.abs(bb.from - Wb) < ab && Math.abs(bb.to - Tb) < ab && !Xb.some((cb => bb.from < cb && bb.to > cb))));
            if (!nb) {
              if (Tb < Hb.to && cb && sb && cb.J7.some((bb => bb.from <= Tb && bb.to >= Tb))) {
                let bb = cb.moveToLineBoundary(kb.j.cursor(Tb), !1, !0).head;
                bb > Wb && (Tb = bb)
              }
              let bb = this.gapSize(Hb, Wb, Tb, fb);
              nb = new WW(Wb, Tb, bb, sb || bb < 2e6 ? bb : 2e6)
            }
            Ub.push(nb)
          },
          Hb = cb => {
            if (cb.length < Tb || cb.type != Pb.Text) return;
            let ab = function(bb, cb, sb) {
              let Wb = [],
                ab = bb,
                Tb = 0;
              kb.z.spans(sb, bb, cb, {
                span() {},
                point(bb, cb) {
                  bb > ab && (Wb.push({
                    from: ab,
                    to: bb
                  }), Tb += bb - ab), ab = cb
                }
              }, 20), ab < cb && (Wb.push({
                from: ab,
                to: cb
              }), Tb += cb - ab);
              return {
                total: Tb,
                uQ: Wb
              }
            }(cb.from, cb.to, this.stateDeco);
            if (ab.total < Tb) return;
            let Ub, Hb, fb = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (sb) {
              let bb, sb, kb = Wb / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != fb) {
                let Wb = HW(ab, fb),
                  Tb = ((this.visibleBottom - this.visibleTop) / 2 + kb) / cb.height;
                bb = Wb - Tb, sb = Wb + Tb
              } else bb = (this.visibleTop - cb.top - kb) / cb.height, sb = (this.visibleBottom - cb.top + kb) / cb.height;
              Ub = IW(ab, bb), Hb = IW(ab, sb)
            } else {
              let sb = ab.total * this.heightOracle.charWidth,
                kb = Wb * this.heightOracle.charWidth,
                Tb = 0;
              if (sb > 2e6)
                for (let Wb of bb) Wb.from >= cb.from && Wb.from < cb.to && Wb.size != Wb.displaySize && Wb.from * this.heightOracle.charWidth + Tb < this.pixelViewport.left && (Tb = Wb.size - Wb.displaySize);
              let Ib, Mb, Xb = this.pixelViewport.left + Tb,
                nb = this.pixelViewport.right + Tb;
              if (null != fb) {
                let bb = HW(ab, fb),
                  cb = ((nb - Xb) / 2 + kb) / sb;
                Ib = bb - cb, Mb = bb + cb
              } else Ib = (Xb - kb) / sb, Mb = (nb + kb) / sb;
              Ub = IW(ab, Ib), Hb = IW(ab, Mb)
            }
            Ub > cb.from && Ib(cb.from, Ub, cb, ab), Hb < cb.to && Ib(Hb, cb.to, cb, ab)
          };
        for (let kb of this.viewportLines) Array.isArray(kb.type) ? kb.type.forEach(Hb) : Hb(kb);
        return Ub
      }
      gapSize(bb, cb, sb, kb) {
        let Wb = HW(kb, sb) - HW(kb, cb);
        return this.heightOracle.lineWrapping ? bb.height * Wb : kb.total * this.heightOracle.charWidth * Wb
      }
      updateLineGaps(bb) {
        WW.same(bb, this.lineGaps) || (this.lineGaps = bb, this.lineGapDeco = Db.set(bb.map((bb => bb.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(bb) {
        let cb = this.stateDeco;
        this.lineGaps.length && (cb = cb.concat(this.lineGapDeco));
        let sb = [];
        kb.z.spans(cb, this.viewport.from, this.viewport.to, {
          span(bb, cb) {
            sb.push({
              from: bb,
              to: cb
            })
          },
          point() {}
        }, 20);
        let Wb = 0;
        if (sb.length != this.J7.length) Wb = 12;
        else
          for (let kb = 0; kb < sb.length && !(8 & Wb); kb++) {
            let cb = this.J7[kb],
              ab = sb[kb];
            cb.from == ab.from && cb.to == ab.to || (Wb |= 4, bb && bb.mapPos(cb.from, -1) == ab.from && bb.mapPos(cb.to, 1) == ab.to || (Wb |= 8))
          }
        return this.J7 = sb, Wb
      }
      lineBlockAt(bb) {
        return bb >= this.viewport.from && bb <= this.viewport.to && this.viewportLines.find((cb => cb.from <= bb && cb.to >= bb)) || nW(this.heightMap.lineAt(bb, Ak.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(bb) {
        return bb >= this.viewportLines[0].top && bb <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((cb => cb.top <= bb && cb.bottom >= bb)) || nW(this.heightMap.lineAt(this.scaler.fromDOM(bb), Ak.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(bb) {
        let cb = this.lineBlockAtHeight(bb + 8);
        return cb.from >= this.viewport.from || this.viewportLines[0].top - bb > 200 ? cb : this.viewportLines[0]
      }
      elementAtHeight(bb) {
        return nW(this.heightMap.blockAt(this.scaler.fromDOM(bb), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class UW {
      constructor(bb, cb) {
        this.from = bb, this.to = cb
      }
    }

    function IW(bb, cb) {
      let {
        total: sb,
        uQ: kb
      } = bb;
      if (cb <= 0) return kb[0].from;
      if (cb >= 1) return kb[kb.length - 1].to;
      let Wb = Math.floor(sb * cb);
      for (let ab = 0;; ab++) {
        let {
          from: bb,
          to: cb
        } = kb[ab], sb = cb - bb;
        if (Wb <= sb) return bb + Wb;
        Wb -= sb
      }
    }

    function HW(bb, cb) {
      let sb = 0;
      for (let {
          from: kb,
          to: Wb
        }
        of bb.uQ) {
        if (cb <= Wb) {
          sb += cb - kb;
          break
        }
        sb += Wb - kb
      }
      return sb / bb.total
    }
    const fW = {
      toDOM: bb => bb,
      fromDOM: bb => bb,
      scale: 1,
      eq(bb) {
        return bb == this
      }
    };

    function MW(bb) {
      let cb = bb.facet(bs).filter((bb => "function" != typeof bb)),
        sb = bb.facet(ss).filter((bb => "function" != typeof bb));
      return sb.length && cb.push(kb.z.join(sb)), cb
    }
    class XW {
      constructor(bb, cb, sb) {
        let kb = 0,
          Wb = 0,
          ab = 0;
        this.viewports = sb.map((sb => {
          let {
            from: Wb,
            to: ab
          } = sb, Tb = cb.lineAt(Wb, Ak.ByPos, bb, 0, 0).top, Ub = cb.lineAt(ab, Ak.ByPos, bb, 0, 0).bottom;
          return kb += Ub - Tb, {
            from: Wb,
            to: ab,
            top: Tb,
            bottom: Ub,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - kb) / (cb.height - kb);
        for (let Tb of this.viewports) Tb.domTop = ab + (Tb.top - Wb) * this.scale, ab = Tb.domBottom = Tb.domTop + (Tb.bottom - Tb.top), Wb = Tb.bottom
      }
      toDOM(bb) {
        for (let cb = 0, sb = 0, kb = 0;; cb++) {
          let Wb = cb < this.viewports.length ? this.viewports[cb] : null;
          if (!Wb || bb < Wb.top) return kb + (bb - sb) * this.scale;
          if (bb <= Wb.bottom) return Wb.domTop + (bb - Wb.top);
          sb = Wb.bottom, kb = Wb.domBottom
        }
      }
      fromDOM(bb) {
        for (let cb = 0, sb = 0, kb = 0;; cb++) {
          let Wb = cb < this.viewports.length ? this.viewports[cb] : null;
          if (!Wb || bb < Wb.domTop) return sb + (bb - kb) / this.scale;
          if (bb <= Wb.domBottom) return Wb.top + (bb - Wb.domTop);
          sb = Wb.bottom, kb = Wb.domBottom
        }
      }
      eq(bb) {
        return bb instanceof XW && (this.scale == bb.scale && this.viewports.length == bb.viewports.length && this.viewports.every(((cb, sb) => cb.from == bb.viewports[sb].from && cb.to == bb.viewports[sb].to)))
      }
    }

    function nW(bb, cb) {
      if (1 == cb.scale) return bb;
      let sb = cb.toDOM(bb.top),
        kb = cb.toDOM(bb.bottom);
      return new dk(bb.from, bb.length, sb, kb - sb, Array.isArray(bb._content) ? bb._content.map((bb => nW(bb, cb))) : bb._content)
    }
    const mW = kb.n.define({
        combine: bb => bb.join(" ")
      }),
      lW = kb.n.define({
        combine: bb => bb.indexOf(!0) > -1
      }),
      QW = Wb.e.newName(),
      eW = Wb.e.newName(),
      CW = Wb.e.newName(),
      NW = {
        "&light": "." + eW,
        "&dark": "." + CW
      };

    function VW(bb, cb, sb) {
      return new Wb.e(cb, {
        finish: cb => /&/.test(cb) ? cb.replace(/&\w*/, (cb => {
          if ("&" == cb) return bb;
          if (!sb || !sb[cb]) throw new RangeError(`Unsupported selector: ${cb}`);
          return sb[cb]
        })) : bb + " " + cb
      })
    }
    const LW = VW("." + QW, {
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
      }, NW),
      uW = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      YW = Yb.ie && Yb.ie_version <= 11;
    class hW {
      constructor(bb) {
        this.view = bb, this.active = !1, this.editContext = null, this.selectionRange = new pb, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = bb.contentDOM, this.observer = new MutationObserver((cb => {
          for (let bb of cb) this.queue.push(bb);
          (Yb.ie && Yb.ie_version <= 11 || Yb.ios && bb.composing) && cb.some((bb => "childList" == bb.type && bb.removedNodes.length || "characterData" == bb.type && bb.oldValue.length > bb.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !Yb.android || !1 === bb.constructor.EDIT_CONTEXT || Yb.chrome && Yb.chrome_version < 126 || (this.editContext = new BW(bb), bb.state.facet(Sc) && (bb.contentDOM.editContext = this.editContext.editContext)), YW && (this.onCharData = bb => {
          this.queue.push({
            target: bb.target,
            type: "characterData",
            oldValue: bb.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.pC = this.pC.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var bb;
          (null === (bb = this.view.docView) || void 0 === bb ? void 0 : bb.lastUpdate) < Date.now() - 75 && this.pC()
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
      pC() {
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
        if (this.gapIntersection && (bb.length != this.gaps.length || this.gaps.some(((cb, sb) => cb != bb[sb])))) {
          this.gapIntersection.disconnect();
          for (let cb of bb) this.gapIntersection.observe(cb);
          this.gaps = bb
        }
      }
      onSelectionChange(bb) {
        let cb = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: sb
        } = this, kb = this.selectionRange;
        if (sb.state.facet(Sc) ? sb.root.activeElement != this.dom : !db(this.dom, kb)) return;
        let Wb = kb.anchorNode && sb.docView.tile.nearest(kb.anchorNode);
        Wb && Wb.isWidget() && Wb.widget.ignoreEvent(bb) ? cb || (this.selectionChanged = !1) : (Yb.ie && Yb.ie_version <= 11 || Yb.android && Yb.chrome) && !sb.state.selection.main.empty && kb.focusNode && wb(kb.focusNode, kb.focusOffset, kb.anchorNode, kb.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: bb
        } = this, cb = zb(bb.root);
        if (!cb) return !1;
        let sb = Yb.safari && 11 == bb.root.nodeType && bb.root.activeElement == this.dom && function(bb, cb) {
          if (cb.getComposedRanges) {
            let sb = cb.getComposedRanges(bb.root)[0];
            if (sb) return gW(bb, sb)
          }
          let sb = null;

          function kb(bb) {
            bb.preventDefault(), bb.stopImmediatePropagation(), sb = bb.getTargetRanges()[0]
          }
          return bb.contentDOM.addEventListener("beforeinput", kb, !0), bb.dom.ownerDocument.execCommand("indent"), bb.contentDOM.removeEventListener("beforeinput", kb, !0), sb ? gW(bb, sb) : null
        }(this.view, cb) || cb;
        if (!sb || this.selectionRange.eq(sb)) return !1;
        let kb = db(this.dom, sb);
        return kb && !this.selectionChanged && bb.inputState.lastFocusTime > Date.now() - 200 && bb.inputState.lastTouchTime < Date.now() - 300 && function(bb, cb) {
          let sb = cb.focusNode,
            kb = cb.focusOffset;
          if (!sb || cb.anchorNode != sb || cb.anchorOffset != kb) return !1;
          for (kb = Math.min(kb, Rb(sb));;)
            if (kb) {
              if (1 != sb.nodeType) return !1;
              let bb = sb.childNodes[kb - 1];
              "false" == bb.contentEditable ? kb-- : (sb = bb, kb = Rb(sb))
            } else {
              if (sb == bb) return !0;
              kb = rb(sb), sb = sb.parentNode
            }
        }(this.dom, sb) ? (this.view.inputState.lastFocusTime = 0, bb.docView.updateSelection(), !1) : (this.selectionRange.setRange(sb), kb && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(bb, cb) {
        this.selectionRange.set(bb.node, bb.offset, cb.node, cb.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let bb = 0,
          cb = null;
        for (let sb = this.dom; sb;)
          if (1 == sb.nodeType) !cb && bb < this.scrollTargets.length && this.scrollTargets[bb] == sb ? bb++ : cb || (cb = this.scrollTargets.slice(0, bb)), cb && cb.push(sb), sb = sb.assignedSlot || sb.parentNode;
          else {
            if (11 != sb.nodeType) break;
            sb = sb.host
          } if (bb < this.scrollTargets.length && !cb && (cb = this.scrollTargets.slice(0, bb)), cb) {
          for (let bb of this.scrollTargets) bb.removeEventListener("scroll", this.onScroll);
          for (let bb of this.scrollTargets = cb) bb.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, uW), YW && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), YW && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(bb, cb) {
        var sb;
        if (!this.delayedAndroidKey) {
          let bb = () => {
            let bb = this.delayedAndroidKey;
            if (bb) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = bb.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && bb.force && Wc(this.dom, bb.key, bb.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(bb)
        }
        this.delayedAndroidKey && "Enter" != bb || (this.delayedAndroidKey = {
          key: bb,
          keyCode: cb,
          force: this.lastChange < Date.now() - 50 || !!(null === (sb = this.delayedAndroidKey) || void 0 === sb ? void 0 : sb.force)
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
        let cb = -1,
          sb = -1,
          kb = !1;
        for (let Wb of bb) {
          let bb = this.readMutation(Wb);
          bb && (bb.typeOver && (kb = !0), -1 == cb ? ({
            from: cb,
            to: sb
          } = bb) : (cb = Math.min(bb.from, cb), sb = Math.max(bb.to, sb)))
        }
        return {
          from: cb,
          to: sb,
          typeOver: kb
        }
      }
      readChange() {
        let {
          from: bb,
          to: cb,
          typeOver: sb
        } = this.processRecords(), kb = this.selectionChanged && db(this.dom, this.selectionRange);
        if (bb < 0 && !kb) return null;
        bb > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let Wb = new Wk(this.view, bb, cb, sb);
        return this.view.docView.domChanged = {
          newSel: Wb.newSel ? Wb.newSel.main : null
        }, Wb
      }
      flush() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        bb && this.readSelectionRange();
        let cb = this.readChange();
        if (!cb) return this.view.requestMeasure(), !1;
        let sb = this.view.state,
          kb = Tk(this.view, cb);
        return this.view.state == sb && (cb.domChanged || cb.newSel && !Hk(this.view.state.selection, cb.newSel.main)) && this.view.update([]), kb
      }
      readMutation(bb) {
        let cb = this.view.docView.tile.nearest(bb.target);
        if (!cb || cb.isWidget()) return null;
        if (cb.markDirty("attributes" == bb.type), "childList" == bb.type) {
          let sb = JW(cb, bb.previousSibling || bb.target.previousSibling, -1),
            kb = JW(cb, bb.nextSibling || bb.target.nextSibling, 1);
          return {
            from: sb ? cb.posAfter(sb) : cb.posAtStart,
            to: kb ? cb.posBefore(kb) : cb.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == bb.type ? {
          from: cb.posAtStart,
          to: cb.posAtEnd,
          typeOver: bb.target.nodeValue == bb.oldValue
        } : null
      }
      setWindow(bb) {
        bb != this.win && (this.removeWindowListeners(this.win), this.win = bb, this.addWindowListeners(this.win))
      }
      addWindowListeners(bb) {
        bb.addEventListener("resize", this.pC), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : bb.addEventListener("beforeprint", this.onPrint), bb.addEventListener("scroll", this.onScroll), bb.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(bb) {
        bb.removeEventListener("scroll", this.onScroll), bb.removeEventListener("resize", this.pC), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : bb.removeEventListener("beforeprint", this.onPrint), bb.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(bb) {
        this.editContext && (this.editContext.update(bb), bb.startState.facet(Sc) != bb.state.facet(Sc) && (bb.view.contentDOM.editContext = bb.state.facet(Sc) ? this.editContext.editContext : null))
      }
      destroy() {
        var bb, cb, sb;
        this.stop(), null === (bb = this.intersection) || void 0 === bb || bb.disconnect(), null === (cb = this.gapIntersection) || void 0 === cb || cb.disconnect(), null === (sb = this.resizeScroll) || void 0 === sb || sb.disconnect();
        for (let kb of this.scrollTargets) kb.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function JW(bb, cb, sb) {
      for (; cb;) {
        let kb = Xs.get(cb);
        if (kb && kb.parent == bb) return kb;
        let Wb = cb.parentNode;
        cb = Wb != bb.dom ? Wb : sb > 0 ? cb.nextSibling : cb.previousSibling
      }
      return null
    }

    function gW(bb, cb) {
      let sb = cb.startContainer,
        kb = cb.startOffset,
        Wb = cb.endContainer,
        ab = cb.endOffset,
        Tb = bb.docView.domAtPos(bb.state.selection.main.anchor, 1);
      return wb(Tb.node, Tb.offset, Wb, ab) && ([sb, kb, Wb, ab] = [Wb, ab, sb, kb]), {
        anchorNode: sb,
        anchorOffset: kb,
        focusNode: Wb,
        focusOffset: ab
      }
    }
    class BW {
      constructor(bb) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(bb.state);
        let cb = this.editContext = new window.EditContext({
          text: bb.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, bb.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(bb.state.selection.main.head)
        });
        this.handlers.textupdate = sb => {
          let Wb = bb.state.selection.main,
            {
              anchor: ab,
              head: Tb
            } = Wb,
            Ub = this.toEditorPos(sb.updateRangeStart),
            Ib = this.toEditorPos(sb.updateRangeEnd);
          bb.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: sb.updateRangeStart,
            editorBase: Ub,
            drifted: !1
          });
          let Hb = Ib - Ub > sb.text.length;
          Ub == this.from && ab < this.from ? Ub = ab : Ib == this.to && ab > this.to && (Ib = ab);
          let fb = Ik(bb.state.sliceDoc(Ub, Ib), sb.text, (Hb ? Wb.from : Wb.to) - Ub, Hb ? "end" : null);
          if (!fb) {
            let cb = kb.j.single(this.toEditorPos(sb.selectionStart), this.toEditorPos(sb.selectionEnd));
            return void(Hk(cb, Wb) || bb.dispatch({
              selection: cb,
              userEvent: "select"
            }))
          }
          let Mb = {
            from: fb.from + Ub,
            to: fb.toA + Ub,
            insert: kb.L.of(sb.text.slice(fb.from, fb.toB).split("\n"))
          };
          if ((Yb.mac || Yb.android) && Mb.from == Tb - 1 && /^\. ?$/.test(sb.text) && "off" == bb.contentDOM.getAttribute("autocorrect") && (Mb = {
              from: Ub,
              to: Ib,
              insert: kb.L.of([sb.text.replace(".", " ")])
            }), this.pendingContextChange = Mb, !bb.state.readOnly) {
            let cb = this.to - this.from + (Mb.to - Mb.from + Mb.insert.length);
            Uk(bb, Mb, kb.j.single(this.toEditorPos(sb.selectionStart, cb), this.toEditorPos(sb.selectionEnd, cb)))
          }
          this.pendingContextChange && (this.revertPending(bb.state), this.setSelection(bb.state)), Mb.from < Mb.to && !Mb.insert.length && bb.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(cb.text.slice(Math.max(0, sb.updateRangeStart - 1), Math.min(cb.text.length, sb.updateRangeStart + 1))) && this.handlers.compositionend(sb)
        }, this.handlers.characterboundsupdate = sb => {
          let kb = [],
            Wb = null;
          for (let cb = this.toEditorPos(sb.rangeStart), ab = this.toEditorPos(sb.rangeEnd); cb < ab; cb++) {
            let sb = bb.coordsForChar(cb);
            Wb = sb && new DOMRect(sb.left, sb.top, sb.right - sb.left, sb.bottom - sb.top) || Wb || new DOMRect, kb.push(Wb)
          }
          cb.updateCharacterBounds(sb.rangeStart, kb)
        }, this.handlers.textformatupdate = cb => {
          let sb = [];
          for (let bb of cb.getTextFormats()) {
            let cb = bb.underlineStyle,
              kb = bb.underlineThickness;
            if (!/none/i.test(cb) && !/none/i.test(kb)) {
              let Wb = this.toEditorPos(bb.rangeStart),
                ab = this.toEditorPos(bb.rangeEnd);
              if (Wb < ab) {
                let bb = `text-decoration: underline ${/^[a-z]/.test(cb)?cb+" ":"Dashed"==cb?"dashed ":"Squiggle"==cb?"wavy ":""}${/thin/i.test(kb)?1:2}px`;
                sb.push(Db.mark({
                  attributes: {
                    style: bb
                  }
                }).range(Wb, ab))
              }
            }
          }
          bb.dispatch({
            effects: rc.of(Db.set(sb))
          })
        }, this.handlers.compositionstart = () => {
          bb.inputState.composing < 0 && (bb.inputState.composing = 0, bb.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (bb.inputState.composing = -1, bb.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: cb
            } = this.composing;
            this.composing = null, cb && this.reset(bb.state)
          }
        };
        for (let sb in this.handlers) cb.addEventListener(sb, this.handlers[sb]);
        this.measureReq = {
          read: bb => {
            this.editContext.updateControlBounds(bb.contentDOM.getBoundingClientRect());
            let cb = zb(bb.root);
            cb && cb.rangeCount && this.editContext.updateSelectionBounds(cb.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(bb) {
        let cb = 0,
          sb = !1,
          kb = this.pendingContextChange;
        return bb.changes.iterChanges(((Wb, ab, Tb, Ub, Ib) => {
          if (sb) return;
          let Hb = Ib.length - (ab - Wb);
          if (kb && ab >= kb.to) {
            if (kb.from == Wb && kb.to == ab && kb.insert.eq(Ib)) return kb = this.pendingContextChange = null, cb += Hb, void(this.to += Hb);
            kb = null, this.revertPending(bb.state)
          }
          if (Wb += cb, (ab += cb) <= this.from) this.from += Hb, this.to += Hb;
          else if (Wb < this.to) {
            if (Wb < this.from || ab > this.to || this.to - this.from + Ib.length > 3e4) return void(sb = !0);
            this.editContext.updateText(this.toContextPos(Wb), this.toContextPos(ab), Ib.toString()), this.to += Hb
          }
          cb += Hb
        })), kb && !sb && this.revertPending(bb.state), !sb
      }
      update(bb) {
        let cb = this.pendingContextChange,
          sb = bb.startState.selection.main;
        this.composing && (this.composing.drifted || !bb.changes.touchesRange(sb.from, sb.to) && bb.transactions.some((bb => !bb.isUserEvent("input.type") && bb.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = bb.changes.mapPos(this.composing.editorBase)) : this.applyEdits(bb) && this.rangeIsValid(bb.state) ? (bb.docChanged || bb.selectionSet || cb) && this.setSelection(bb.state) : (this.pendingContextChange = null, this.reset(bb.state)), (bb.geometryChanged || bb.docChanged || bb.selectionSet) && bb.view.requestMeasure(this.measureReq)
      }
      resetRange(bb) {
        let {
          head: cb
        } = bb.selection.main;
        this.from = Math.max(0, cb - 1e4), this.to = Math.min(bb.doc.length, cb + 1e4)
      }
      reset(bb) {
        this.resetRange(bb), this.editContext.updateText(0, this.editContext.text.length, bb.doc.sliceString(this.from, this.to)), this.setSelection(bb)
      }
      revertPending(bb) {
        let cb = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(cb.from), this.toContextPos(cb.from + cb.insert.length), bb.doc.sliceString(cb.from, cb.to))
      }
      setSelection(bb) {
        let {
          main: cb
        } = bb.selection, sb = this.toContextPos(Math.max(this.from, Math.min(this.to, cb.anchor))), kb = this.toContextPos(cb.head);
        this.editContext.selectionStart == sb && this.editContext.selectionEnd == kb || this.editContext.updateSelection(sb, kb)
      }
      rangeIsValid(bb) {
        let {
          head: cb
        } = bb.selection.main;
        return !(this.from > 0 && cb - this.from < 500 || this.to < bb.doc.length && this.to - cb < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        bb = Math.min(bb, cb);
        let sb = this.composing;
        return sb && sb.drifted ? sb.editorBase + (bb - sb.contextBase) : bb + this.from
      }
      toContextPos(bb) {
        let cb = this.composing;
        return cb && cb.drifted ? cb.contextBase + (bb - cb.editorBase) : bb - this.from
      }
      destroy() {
        for (let bb in this.handlers) this.editContext.removeEventListener(bb, this.handlers[bb])
      }
    }
    class tW {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get J7() {
        return this.viewState.J7
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
        var cb;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), bb.parent && bb.parent.appendChild(this.dom);
        let {
          dispatch: sb
        } = bb;
        this.dispatchTransactions = bb.dispatchTransactions || sb && (bb => bb.forEach((bb => sb(bb, this)))) || (bb => this.update(bb)), this.dispatch = this.dispatch.bind(this), this._root = bb.root || function(bb) {
          for (; bb;) {
            if (bb && (9 == bb.nodeType || 11 == bb.nodeType && bb.host)) return bb;
            bb = bb.assignedSlot || bb.parentNode
          }
          return null
        }(bb.parent) || document, this.viewState = new TW(this, bb.state || kb.m.create(bb)), bb.scrollTo && bb.scrollTo.is(wc) && (this.viewState.scrollTarget = bb.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(vc).map((bb => new xc(bb)));
        for (let kb of this.plugins) kb.update(this);
        this.observer = new hW(this), this.inputState = new fk(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Ks(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (cb = document.fonts) || void 0 === cb ? void 0 : cb.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        let Wb = 1 == cb.length && cb[0] instanceof kb.O ? cb : 1 == cb.length && Array.isArray(cb[0]) ? cb[0] : [this.state.update(...cb)];
        this.dispatchTransactions(Wb, this)
      }
      update(bb) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let cb, sb = !1,
          Wb = !1,
          ab = this.state;
        for (let kb of bb) {
          if (kb.startState != ab) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          ab = kb.state
        }
        if (this.destroyed) return void(this.viewState.state = ab);
        let Tb = this.hasFocus,
          Ub = 0,
          Ib = null;
        bb.some((bb => bb.annotation(Dk))) ? (this.inputState.notifiedFocused = Tb, Ub = 1) : Tb != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = Tb, Ib = Ek(ab, Tb), Ib || (Ub = 1));
        let Hb = this.observer.delayedAndroidKey,
          fb = null;
        if (Hb ? (this.observer.clearDelayedAndroidKey(), fb = this.observer.readChange(), (fb && !this.state.doc.eq(ab.doc) || !this.state.selection.eq(ab.selection)) && (fb = null)) : this.observer.clear(), ab.facet(kb.m.phrases) != this.state.facet(kb.m.phrases)) return this.setState(ab);
        cb = fs.create(this, ab, bb), cb.flags |= Ub;
        let Mb = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let cb of bb) {
            if (Mb && (Mb = Mb.map(cb.changes)), cb.scrollIntoView) {
              let {
                main: bb
              } = cb.state.selection, {
                x: sb,
                y: Wb
              } = this.state.facet(tW.cursorScrollMargin);
              Mb = new Ac(bb.empty ? bb : kb.j.cursor(bb.head, bb.head > bb.anchor ? -1 : 1), "nearest", "nearest", Wb, sb)
            }
            for (let bb of cb.effects) bb.is(wc) && (Mb = bb.value.clip(this.state))
          }
          this.viewState.update(cb, Mb), this.bidiCache = DW.update(this.bidiCache, cb.changes), cb.empty || (this.updatePlugins(cb), this.inputState.update(cb)), sb = this.docView.update(cb), this.state.facet(Is) != this.styleModules && this.mountStyles(), Wb = this.updateAttrs(), this.showAnnouncements(bb), this.docView.updateSelection(sb, bb.some((bb => bb.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (cb.startState.facet(mW) != cb.state.facet(mW) && (this.viewState.mustMeasureContent = !0), (sb || Wb || Mb || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), sb && this.docViewUpdate(), !cb.empty)
          for (let kb of this.state.facet(ic)) try {
            kb(cb)
          } catch (Xb) {
            oc(this.state, Xb, "update listener")
          }(Ib || fb) && Promise.resolve().then((() => {
            Ib && this.state == Ib.startState && this.dispatch(Ib), fb && !Tk(this, fb) && Hb.force && Wc(this.contentDOM, Hb.key, Hb.keyCode)
          }))
      }
      setState(bb) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = bb);
        this.updateState = 2;
        let cb = this.hasFocus;
        try {
          for (let bb of this.plugins) bb.destroy(this);
          this.viewState = new TW(this, bb), this.plugins = bb.facet(vc).map((bb => new xc(bb))), this.pluginMap.clear();
          for (let bb of this.plugins) bb.update(this);
          this.docView.destroy(), this.docView = new Ks(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        cb && this.focus(), this.requestMeasure()
      }
      updatePlugins(bb) {
        let cb = bb.startState.facet(vc),
          sb = bb.state.facet(vc);
        if (cb != sb) {
          let kb = [];
          for (let Wb of sb) {
            let sb = cb.indexOf(Wb);
            if (sb < 0) kb.push(new xc(Wb));
            else {
              let cb = this.plugins[sb];
              cb.mustUpdate = bb, kb.push(cb)
            }
          }
          for (let cb of this.plugins) cb.mustUpdate != bb && cb.destroy(this);
          this.plugins = kb, this.pluginMap.clear()
        } else
          for (let kb of this.plugins) kb.mustUpdate = bb;
        for (let kb = 0; kb < this.plugins.length; kb++) this.plugins[kb].update(this);
        cb != sb && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let cb of this.plugins) {
          let sb = cb.value;
          if (sb && sb.docViewUpdate) try {
            sb.docViewUpdate(this)
          } catch (bb) {
            oc(this.state, bb, "doc view update listener")
          }
        }
      }
      measure() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, bb && this.observer.forceFlush();
        let cb = null,
          sb = this.viewState.scrollParent,
          kb = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: Wb,
            scrollAnchorHeight: ab
          } = this.viewState;
        Math.abs(kb - this.viewState.scrollOffset) > 1 && (ab = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let bb = 0;; bb++) {
            if (ab < 0)
              if (ac(sb || this.win)) Wb = -1, ab = this.viewState.heightMap.height;
              else {
                let bb = this.viewState.scrollAnchorAt(kb);
                Wb = bb.from, ab = bb.top
              } this.updateState = 1;
            let Ub = this.viewState.measure();
            if (!Ub && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (bb > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let Ib = [];
            4 & Ub || ([this.measureRequests, Ib] = [Ib, this.measureRequests]);
            let Hb = Ib.map((bb => {
                try {
                  return bb.read(this)
                } catch (cb) {
                  return oc(this.state, cb), PW
                }
              })),
              fb = fs.create(this, this.state, []),
              Mb = !1;
            fb.flags |= Ub, cb ? cb.flags |= Ub : cb = fb, this.updateState = 2, fb.empty || (this.updatePlugins(fb), this.inputState.update(fb), this.updateAttrs(), Mb = this.docView.update(fb), Mb && this.docViewUpdate());
            for (let bb = 0; bb < Ib.length; bb++)
              if (Hb[bb] != PW) try {
                let cb = Ib[bb];
                cb.write && cb.write(Hb[bb], this)
              } catch (Tb) {
                oc(this.state, Tb)
              }
            if (Mb && this.docView.updateSelection(!0), !fb.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, ab = -1;
                  continue
                } {
                  let bb = ((Wb < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(Wb).top) - ab) / this.scaleY;
                  if ((bb > 1 || bb < -1) && (sb == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    kb += bb, sb ? sb.scrollTop += bb : this.win.scrollBy(0, bb), ab = -1;
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
        if (cb && !cb.empty)
          for (let Ub of this.state.facet(ic)) Ub(cb)
      }
      get themeClasses() {
        return QW + " " + (this.state.facet(lW) ? CW : eW) + " " + this.state.facet(mW)
      }
      updateAttrs() {
        let bb = EW(this, jc, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          cb = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(Sc) ? "true" : "false",
            class: "cm-content",
            style: `${Yb.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (cb["aria-readonly"] = "true"), EW(this, pc, cb);
        let sb = this.observer.ignore((() => {
          let sb = Bb(this.contentDOM, this.contentAttrs, cb),
            kb = Bb(this.dom, this.editorAttrs, bb);
          return sb || kb
        }));
        return this.editorAttrs = bb, this.contentAttrs = cb, sb
      }
      showAnnouncements(bb) {
        let cb = !0;
        for (let sb of bb)
          for (let bb of sb.effects)
            if (bb.is(tW.announce)) {
              cb && (this.announceDOM.textContent = ""), cb = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = bb.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(Is);
        let bb = this.state.facet(tW.cspNonce);
        Wb.e.mount(this.root, this.styleModules.concat(LW).reverse(), bb ? {
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
            for (let cb = 0; cb < this.measureRequests.length; cb++)
              if (this.measureRequests[cb].key === bb.key) return void(this.measureRequests[cb] = bb);
          this.measureRequests.push(bb)
        }
      }
      plugin(bb) {
        let cb = this.pluginMap.get(bb);
        return (void 0 === cb || cb && cb.plugin != bb) && this.pluginMap.set(bb, cb = this.plugins.find((cb => cb.plugin == bb)) || null), cb && cb.update(this).value
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
      moveByChar(bb, cb, sb) {
        return Rs(this, bb, rs(this, bb, cb, sb))
      }
      moveByGroup(bb, cb) {
        return Rs(this, bb, rs(this, bb, cb, (cb => function(bb, cb, sb) {
          let Wb = bb.state.charCategorizer(cb),
            ab = Wb(sb);
          return bb => {
            let cb = Wb(bb);
            return ab == kb.i.Space && (ab = cb), ab == cb
          }
        }(this, bb.head, cb))))
      }
      visualLineSide(bb, cb) {
        let sb = this.bidiSpans(bb),
          Wb = this.textDirectionAt(bb.from),
          ab = sb[cb ? sb.length - 1 : 0];
        return kb.j.cursor(ab.side(cb, Wb) + bb.from, ab.forward(!cb, Wb) ? 1 : -1)
      }
      moveToLineBoundary(bb, cb) {
        return function(bb, cb, sb, Wb) {
          let ab = ws(bb, cb.head, cb.assoc || -1),
            Tb = Wb && ab.type == Pb.Text && (bb.lineWrapping || ab.widgetLineBreaks) ? bb.coordsAtPos(cb.assoc < 0 && cb.head > ab.from ? cb.head - 1 : cb.head) : null;
          if (Tb) {
            let cb = bb.dom.getBoundingClientRect(),
              Wb = bb.textDirectionAt(ab.from),
              Ub = bb.posAtCoords({
                x: sb == (Wb == Hc.LTR) ? cb.right - 1 : cb.left + 1,
                y: (Tb.top + Tb.bottom) / 2
              });
            if (null != Ub) return kb.j.cursor(Ub, sb ? -1 : 1)
          }
          return kb.j.cursor(sb ? ab.to : ab.from, sb ? -1 : 1)
        }(this, bb, cb, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(bb, cb, sb) {
        return Rs(this, bb, function(bb, cb, sb, Wb) {
          let ab = cb.head,
            Tb = sb ? 1 : -1;
          if (ab == (sb ? bb.state.doc.length : 0)) return kb.j.cursor(ab, cb.assoc);
          let Ub, Ib = cb.goalColumn,
            Hb = bb.contentDOM.getBoundingClientRect(),
            fb = bb.coordsAtPos(ab, cb.assoc || ((cb.empty ? sb : cb.head == cb.from) ? 1 : -1)),
            Mb = bb.documentTop;
          if (fb) null == Ib && (Ib = fb.left - Hb.left), Ub = Tb < 0 ? fb.top : fb.bottom;
          else {
            let cb = bb.viewState.lineBlockAt(ab);
            null == Ib && (Ib = Math.min(Hb.right - Hb.left, bb.defaultCharacterWidth * (ab - cb.from))), Ub = (Tb < 0 ? cb.top : cb.bottom) + Mb
          }
          let Xb = Hb.left + Ib,
            nb = bb.viewState.heightOracle.textHeight >> 1,
            mb = null !== Wb && void 0 !== Wb ? Wb : nb;
          for (let lb = 0;; lb += nb) {
            let cb = Ub + (mb + lb) * Tb,
              Wb = Fs(bb, {
                x: Xb,
                y: cb
              }, !1, Tb);
            if (sb ? cb > Hb.bottom : cb < Hb.top) return kb.j.cursor(Wb.pos, Wb.assoc);
            let ab = bb.coordsAtPos(Wb.pos, Wb.assoc),
              fb = ab ? (ab.top + ab.bottom) / 2 : 0;
            if (!ab || (sb ? fb > Ub : fb < Ub)) return kb.j.cursor(Wb.pos, Wb.assoc, void 0, Ib)
          }
        }(this, bb, cb, sb))
      }
      domAtPos(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(bb, cb)
      }
      posAtDOM(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(bb, cb)
      }
      posAtCoords(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let sb = Fs(this, bb, cb);
        return sb && sb.pos
      }
      posAndSideAtCoords(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), Fs(this, bb, cb)
      }
      coordsAtPos(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let sb = this.docView.coordsAt(bb, cb);
        if (!sb || sb.left == sb.right) return sb;
        let kb = this.state.doc.lineAt(bb),
          Wb = this.bidiSpans(kb);
        return vb(sb, Wb[Nc.find(Wb, bb - kb.from, -1, cb)].dir == Hc.LTR == cb > 0)
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
        return !this.state.facet(zc) || bb < this.viewport.from || bb > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(bb))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(bb) {
        if (bb.length > yW) return Jc(bb.length);
        let cb, sb = this.textDirectionAt(bb.from);
        for (let Wb of this.bidiCache)
          if (Wb.from == bb.from && Wb.dir == sb && (Wb.fresh || Vc(Wb.isolates, cb = as(this, bb)))) return Wb.order;
        cb || (cb = as(this, bb));
        let kb = hc(bb.text, sb, cb);
        return this.bidiCache.push(new DW(bb.from, bb.to, sb, cb, !0, kb)), kb
      }
      get hasFocus() {
        var bb;
        return (this.dom.ownerDocument.hasFocus() || Yb.safari && (null === (bb = this.inputState) || void 0 === bb ? void 0 : bb.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          sc(this.contentDOM), this.docView.updateSelection()
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var sb, Wb, ab, Tb;
        return wc.of(new Ac("number" == typeof bb ? kb.j.cursor(bb) : bb, null !== (sb = cb.y) && void 0 !== sb ? sb : "nearest", null !== (Wb = cb.x) && void 0 !== Wb ? Wb : "nearest", null !== (ab = cb.yMargin) && void 0 !== ab ? ab : 5, null !== (Tb = cb.xMargin) && void 0 !== Tb ? Tb : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: bb,
          scrollLeft: cb
        } = this.scrollDOM, sb = this.viewState.scrollAnchorAt(bb);
        return wc.of(new Ac(kb.j.cursor(sb.from), "start", "start", sb.top - bb, cb, !0))
      }
      setTabFocusMode(bb) {
        null == bb ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof bb ? this.inputState.tabFocusMode = bb ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + bb)
      }
      static domEventHandlers(bb) {
        return Fc.define((() => ({})), {
          eventHandlers: bb
        })
      }
      static domEventObservers(bb) {
        return Fc.define((() => ({})), {
          eventObservers: bb
        })
      }
      static theme(bb, cb) {
        let sb = Wb.e.newName(),
          kb = [mW.of(sb), Is.of(VW(`.${sb}`, bb))];
        return cb && cb.dark && kb.push(lW.of(!0)), kb
      }
      static baseTheme(bb) {
        return kb.s.lowest(Is.of(VW("." + QW, bb, NW)))
      }
      static findFromDOM(bb) {
        var cb;
        let sb = bb.querySelector(".cm-content"),
          kb = sb && Xs.get(sb) || Xs.get(bb);
        return (null === (cb = null === kb || void 0 === kb ? void 0 : kb.root) || void 0 === cb ? void 0 : cb.view) || null
      }
    }
    tW.styleModule = Is, tW.inputHandler = Oc, tW.clipboardInputFilter = Kc, tW.clipboardOutputFilter = Zc, tW.scrollHandler = dc, tW.focusChangeEffect = Gc, tW.perLineTextDirection = zc, tW.exceptionSink = Ec, tW.updateListener = ic, tW.editable = Sc, tW.mouseSelectionStyle = Dc, tW.dragMovesSelection = Pc, tW.clickAddsSelectionRange = yc, tW.aW = bs, tW.blockWrappers = cs, tW.outerDecorations = ss, tW.atomicRanges = ks, tW.bidiIsolatedRanges = Ws, tW.cursorScrollMargin = kb.n.define({
      combine: bb => {
        let cb = 5,
          sb = 5;
        for (let kb of bb) "number" == typeof kb ? cb = sb = kb : ({
          x: cb,
          y: sb
        } = kb);
        return {
          x: cb,
          y: sb
        }
      }
    }), tW.scrollMargins = Ts, tW.darkTheme = lW, tW.cspNonce = kb.n.define({
      combine: bb => bb.length ? bb[0] : ""
    }), tW.contentAttributes = pc, tW.editorAttributes = jc, tW.lineWrapping = tW.contentAttributes.of({
      class: "cm-lineWrapping"
    }), tW.announce = kb.F.define();
    const yW = 4096,
      PW = {};
    class DW {
      constructor(bb, cb, sb, kb, Wb, ab) {
        this.from = bb, this.to = cb, this.dir = sb, this.isolates = kb, this.fresh = Wb, this.order = ab
      }
      static update(bb, cb) {
        if (cb.empty && !bb.some((bb => bb.fresh))) return bb;
        let sb = [],
          kb = bb.length ? bb[bb.length - 1].dir : Hc.LTR;
        for (let Wb = Math.max(0, bb.length - 10); Wb < bb.length; Wb++) {
          let ab = bb[Wb];
          ab.dir != kb || cb.touchesRange(ab.from, ab.to) || sb.push(new DW(cb.mapPos(ab.from, 1), cb.mapPos(ab.to, -1), ab.dir, ab.isolates, !1, ab.order))
        }
        return sb
      }
    }

    function EW(bb, cb, sb) {
      for (let kb = bb.state.facet(cb), Wb = kb.length - 1; Wb >= 0; Wb--) {
        let cb = kb[Wb],
          ab = "function" == typeof cb ? cb(bb) : cb;
        ab && hb(ab, sb)
      }
      return sb
    }
    const iW = Yb.mac ? "mac" : Yb.windows ? "win" : Yb.linux ? "linux" : "key";

    function OW(bb, cb, sb) {
      return cb.altKey && (bb = "Alt-" + bb), cb.ctrlKey && (bb = "Ctrl-" + bb), cb.metaKey && (bb = "Meta-" + bb), !1 !== sb && cb.shiftKey && (bb = "Shift-" + bb), bb
    }
    const GW = kb.s.default(tW.domEventHandlers({
        keydown: (bb, cb) => rW(zW(cb.state), bb, cb, "editor")
      })),
      KW = kb.n.define({
        enables: GW
      }),
      ZW = new WeakMap;

    function zW(bb) {
      let cb = bb.facet(KW),
        sb = ZW.get(cb);
      return sb || ZW.set(cb, sb = function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iW,
          sb = Object.create(null),
          kb = Object.create(null),
          Wb = (bb, cb) => {
            let sb = kb[bb];
            if (null == sb) kb[bb] = cb;
            else if (sb != cb) throw new Error("Key binding " + bb + " is used both as a regular binding and as a multi-stroke prefix")
          },
          ab = (bb, kb, ab, Tb, Ub) => {
            var Ib, Hb;
            let fb = sb[bb] || (sb[bb] = Object.create(null)),
              Mb = kb.split(/ (?!$)/).map((bb => function(bb, cb) {
                const sb = bb.split(/-(?!$)/);
                let kb, Wb, ab, Tb, Ub = sb[sb.length - 1];
                "Space" == Ub && (Ub = " ");
                for (let Ib = 0; Ib < sb.length - 1; ++Ib) {
                  const bb = sb[Ib];
                  if (/^(cmd|meta|m)$/i.test(bb)) Tb = !0;
                  else if (/^a(lt)?$/i.test(bb)) kb = !0;
                  else if (/^(c|ctrl|control)$/i.test(bb)) Wb = !0;
                  else if (/^s(hift)?$/i.test(bb)) ab = !0;
                  else {
                    if (!/^mod$/i.test(bb)) throw new Error("Unrecognized modifier name: " + bb);
                    "mac" == cb ? Tb = !0 : Wb = !0
                  }
                }
                return kb && (Ub = "Alt-" + Ub), Wb && (Ub = "Ctrl-" + Ub), Tb && (Ub = "Meta-" + Ub), ab && (Ub = "Shift-" + Ub), Ub
              }(bb, cb)));
            for (let cb = 1; cb < Mb.length; cb++) {
              let sb = Mb.slice(0, cb).join(" ");
              Wb(sb, !0), fb[sb] || (fb[sb] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [cb => {
                  let kb = dW = {
                    view: cb,
                    prefix: sb,
                    scope: bb
                  };
                  return setTimeout((() => {
                    dW == kb && (dW = null)
                  }), AW), !0
                }]
              })
            }
            let Xb = Mb.join(" ");
            Wb(Xb, !1);
            let nb = fb[Xb] || (fb[Xb] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (Hb = null === (Ib = fb._any) || void 0 === Ib ? void 0 : Ib.run) || void 0 === Hb ? void 0 : Hb.slice()) || []
            });
            ab && nb.run.push(ab), Tb && (nb.preventDefault = !0), Ub && (nb.stopPropagation = !0)
          };
        for (let Tb of bb) {
          let bb = Tb.scope ? Tb.scope.split(" ") : ["editor"];
          if (Tb.any)
            for (let cb of bb) {
              let bb = sb[cb] || (sb[cb] = Object.create(null));
              bb._any || (bb._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: kb
              } = Tb;
              for (let cb in bb) bb[cb].run.push((bb => kb(bb, wW)))
            }
          let kb = Tb[cb] || Tb.key;
          if (kb)
            for (let cb of bb) ab(cb, kb, Tb.run, Tb.preventDefault, Tb.stopPropagation), Tb.shift && ab(cb, "Shift-" + kb, Tb.shift, Tb.preventDefault, Tb.stopPropagation)
        }
        return sb
      }(cb.reduce(((bb, cb) => bb.concat(cb)), []))), sb
    }

    function qW(bb, cb, sb) {
      return rW(zW(bb.state), cb, bb, sb)
    }
    let dW = null;
    const AW = 4e3;
    let wW = null;

    function rW(bb, cb, sb, Wb) {
      wW = cb;
      let Hb = function(bb) {
          var cb = !(Ub && bb.metaKey && bb.shiftKey && !bb.ctrlKey && !bb.altKey || Ib && bb.shiftKey && bb.key && 1 == bb.key.length || "Unidentified" == bb.key) && bb.key || (bb.shiftKey ? Tb : ab)[bb.keyCode] || bb.key || "Unidentified";
          return "Esc" == cb && (cb = "Escape"), "Del" == cb && (cb = "Delete"), "Left" == cb && (cb = "ArrowLeft"), "Up" == cb && (cb = "ArrowUp"), "Right" == cb && (cb = "ArrowRight"), "Down" == cb && (cb = "ArrowDown"), cb
        }(cb),
        fb = (0, kb.S)(Hb, 0),
        Mb = (0, kb.V)(fb) == Hb.length && " " != Hb,
        Xb = "",
        nb = !1,
        mb = !1,
        lb = !1;
      dW && dW.view == sb && dW.scope == Wb && (Xb = dW.prefix + " ", lk.indexOf(cb.keyCode) < 0 && (mb = !0, dW = null));
      let Qb, eb, Cb = new Set,
        Nb = bb => {
          if (bb) {
            for (let cb of bb.run)
              if (!Cb.has(cb) && (Cb.add(cb), cb(sb))) return bb.stopPropagation && (lb = !0), !0;
            bb.preventDefault && (bb.stopPropagation && (lb = !0), mb = !0)
          }
          return !1
        },
        Vb = bb[Wb];
      return Vb && (Nb(Vb[Xb + OW(Hb, cb, !Mb)]) ? nb = !0 : !Mb || !(cb.altKey || cb.metaKey || cb.ctrlKey) || Yb.windows && cb.ctrlKey && cb.altKey || Yb.mac && cb.altKey && !cb.ctrlKey && !cb.metaKey || !(Qb = ab[cb.keyCode]) || Qb == Hb ? Mb && cb.shiftKey && Nb(Vb[Xb + OW(Hb, cb, !0)]) && (nb = !0) : (Nb(Vb[Xb + OW(Qb, cb, !0)]) || cb.shiftKey && (eb = Tb[cb.keyCode]) != Hb && eb != Qb && Nb(Vb[Xb + OW(eb, cb, !1)])) && (nb = !0), !nb && Nb(Vb._any) && (nb = !0)), mb && (nb = !0), nb && lb && cb.stopPropagation(), wW = null, nb
    }
    class oW {
      constructor(bb, cb, sb, kb, Wb) {
        this.className = bb, this.left = cb, this.top = sb, this.width = kb, this.height = Wb
      }
      draw() {
        let bb = document.createElement("div");
        return bb.className = this.className, this.adjust(bb), bb
      }
      update(bb, cb) {
        return cb.className == this.className && (this.adjust(bb), !0)
      }
      adjust(bb) {
        bb.style.left = this.left + "px", bb.style.top = this.top + "px", null != this.width && (bb.style.width = this.width + "px"), bb.style.height = this.height + "px"
      }
      eq(bb) {
        return this.left == bb.left && this.top == bb.top && this.width == bb.width && this.height == bb.height && this.className == bb.className
      }
      static forRange(bb, cb, sb) {
        if (sb.empty) {
          let kb = bb.coordsAtPos(sb.head, sb.assoc || 1);
          if (!kb) return [];
          let Wb = SW(bb);
          return [new oW(cb, kb.left - Wb.left, kb.top - Wb.top, null, kb.bottom - kb.top)]
        }
        return function(bb, cb, sb) {
          if (sb.to <= bb.viewport.from || sb.from >= bb.viewport.to) return [];
          let kb = Math.max(sb.from, bb.viewport.from),
            Wb = Math.min(sb.to, bb.viewport.to),
            ab = bb.textDirection == Hc.LTR,
            Tb = bb.contentDOM,
            Ub = Tb.getBoundingClientRect(),
            Ib = SW(bb),
            Hb = Tb.querySelector(".cm-line"),
            fb = Hb && window.getComputedStyle(Hb),
            Mb = Ub.left + (fb ? parseInt(fb.paddingLeft) + Math.min(0, parseInt(fb.textIndent)) : 0),
            Xb = Ub.right - (fb ? parseInt(fb.paddingRight) : 0),
            nb = ws(bb, kb, 1),
            mb = ws(bb, Wb, -1),
            lb = nb.type == Pb.Text ? nb : null,
            Qb = mb.type == Pb.Text ? mb : null;
          lb && (bb.lineWrapping || nb.widgetLineBreaks) && (lb = RW(bb, kb, 1, lb));
          Qb && (bb.lineWrapping || mb.widgetLineBreaks) && (Qb = RW(bb, Wb, -1, Qb));
          if (lb && Qb && lb.from == Qb.from && lb.to == Qb.to) return Cb(Nb(sb.from, sb.to, lb));
          {
            let cb = lb ? Nb(sb.from, null, lb) : Vb(nb, !1),
              kb = Qb ? Nb(null, sb.to, Qb) : Vb(mb, !0),
              Wb = [];
            return (lb || nb).to < (Qb || mb).from - (lb && Qb ? 1 : 0) || nb.widgetLineBreaks > 1 && cb.bottom + bb.defaultLineHeight / 2 < kb.top ? Wb.push(eb(Mb, cb.bottom, Xb, kb.top)) : cb.bottom < kb.top && bb.elementAtHeight((cb.bottom + kb.top) / 2).type == Pb.Text && (cb.bottom = kb.top = (cb.bottom + kb.top) / 2), Cb(cb).concat(Wb).concat(Cb(kb))
          }

          function eb(bb, sb, kb, Wb) {
            return new oW(cb, bb - Ib.left, sb - Ib.top, Math.max(0, kb - bb), Wb - sb)
          }

          function Cb(bb) {
            let {
              top: cb,
              bottom: sb,
              horizontal: kb
            } = bb, Wb = [];
            for (let ab = 0; ab < kb.length; ab += 2) Wb.push(eb(kb[ab], cb, kb[ab + 1], sb));
            return Wb
          }

          function Nb(cb, sb, kb) {
            let Wb = 1e9,
              Tb = -1e9,
              Ub = [];

            function Ib(cb, sb, Ib, Hb, fb) {
              let nb = bb.coordsAtPos(cb, cb == kb.to ? -2 : 2),
                mb = bb.coordsAtPos(Ib, Ib == kb.from ? 2 : -2);
              nb && mb && (Wb = Math.min(nb.top, mb.top, Wb), Tb = Math.max(nb.bottom, mb.bottom, Tb), fb == Hc.LTR ? Ub.push(ab && sb ? Mb : nb.left, ab && Hb ? Xb : mb.right) : Ub.push(!ab && Hb ? Mb : mb.left, !ab && sb ? Xb : nb.right))
            }
            let Hb = null !== cb && void 0 !== cb ? cb : kb.from,
              fb = null !== sb && void 0 !== sb ? sb : kb.to;
            for (let ab of bb.J7)
              if (ab.to > Hb && ab.from < fb)
                for (let kb = Math.max(ab.from, Hb), Wb = Math.min(ab.to, fb);;) {
                  let ab = bb.state.doc.lineAt(kb);
                  for (let Tb of bb.bidiSpans(ab)) {
                    let bb = Tb.from + ab.from,
                      Ub = Tb.to + ab.from;
                    if (bb >= Wb) break;
                    Ub > kb && Ib(Math.max(bb, kb), null == cb && bb <= Hb, Math.min(Ub, Wb), null == sb && Ub >= fb, Tb.dir)
                  }
                  if (kb = ab.to + 1, kb >= Wb) break
                }
            return 0 == Ub.length && Ib(Hb, null == cb, fb, null == sb, bb.textDirection), {
              top: Wb,
              bottom: Tb,
              horizontal: Ub
            }
          }

          function Vb(bb, cb) {
            let sb = Ub.top + (cb ? bb.top : bb.bottom);
            return {
              top: sb,
              bottom: sb,
              horizontal: []
            }
          }
        }(bb, cb, sb)
      }
    }

    function SW(bb) {
      let cb = bb.scrollDOM.getBoundingClientRect();
      return {
        left: (bb.textDirection == Hc.LTR ? cb.left : cb.right - bb.scrollDOM.clientWidth * bb.scaleX) - bb.scrollDOM.scrollLeft * bb.scaleX,
        top: cb.top - bb.scrollDOM.scrollTop * bb.scaleY
      }
    }

    function RW(bb, cb, sb, kb) {
      let Wb = bb.coordsAtPos(cb, 2 * sb);
      if (!Wb) return kb;
      let ab = bb.dom.getBoundingClientRect(),
        Tb = (Wb.top + Wb.bottom) / 2,
        Ub = bb.posAtCoords({
          x: ab.left + 1,
          y: Tb
        }),
        Ib = bb.posAtCoords({
          x: ab.right - 1,
          y: Tb
        });
      return null == Ub || null == Ib ? kb : {
        from: Math.max(kb.from, Math.min(Ub, Ib)),
        to: Math.min(kb.to, Math.max(Ub, Ib))
      }
    }
    class vW {
      constructor(bb, cb) {
        this.view = bb, this.layer = cb, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = bb.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), cb.above && this.dom.classList.add("cm-layer-above"), cb.class && this.dom.classList.add(cb.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(bb.state), bb.requestMeasure(this.measureReq), cb.mount && cb.mount(this.dom, bb)
      }
      update(bb) {
        bb.startState.facet(FW) != bb.state.facet(FW) && this.setOrder(bb.state), (this.layer.update(bb, this.dom) || bb.geometryChanged) && (this.scale(), bb.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(bb) {
        !1 !== this.layer.updateOnDocViewUpdate && bb.requestMeasure(this.measureReq)
      }
      setOrder(bb) {
        let cb = 0,
          sb = bb.facet(FW);
        for (; cb < sb.length && sb[cb] != this.layer;) cb++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - cb)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: bb,
          scaleY: cb
        } = this.view;
        bb == this.scaleX && cb == this.scaleY || (this.scaleX = bb, this.scaleY = cb, this.dom.style.transform = `scale(${1/bb}, ${1/cb})`)
      }
      draw(bb) {
        if (bb.length != this.drawn.length || bb.some(((bb, cb) => {
            return sb = bb, kb = this.drawn[cb], !(sb.constructor == kb.constructor && sb.eq(kb));
            var sb, kb
          }))) {
          let cb = this.dom.firstChild,
            sb = 0;
          for (let kb of bb) kb.update && cb && kb.constructor && this.drawn[sb].constructor && kb.update(cb, this.drawn[sb]) ? (cb = cb.nextSibling, sb++) : this.dom.insertBefore(kb.draw(), cb);
          for (; cb;) {
            let bb = cb.nextSibling;
            cb.remove(), cb = bb
          }
          this.drawn = bb, Yb.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const FW = kb.n.define();

    function xW(bb) {
      return [Fc.define((cb => new vW(cb, bb))), FW.of(bb)]
    }
    const jW = kb.n.define({
      combine: bb => (0, kb.X)(bb, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (bb, cb) => Math.min(bb, cb),
        drawRangeCursor: (bb, cb) => bb || cb
      })
    });

    function pW() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [jW.of(bb), ca, ka, Wa, qc.of(!0)]
    }

    function ba(bb) {
      return bb.startState.facet(jW) != bb.state.facet(jW)
    }
    const ca = xW({
      above: !0,
      markers(bb) {
        let {
          state: cb
        } = bb, sb = cb.facet(jW), Wb = [];
        for (let ab of cb.selection.uQ) {
          let Tb = ab == cb.selection.main;
          if (ab.empty || sb.drawRangeCursor && !(Tb && Yb.ios && sb.iosSelectionHandles)) {
            let cb = Tb ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              sb = ab.empty ? ab : kb.j.cursor(ab.head, ab.assoc);
            for (let kb of oW.forRange(bb, cb, sb)) Wb.push(kb)
          }
        }
        return Wb
      },
      update(bb, cb) {
        bb.transactions.some((bb => bb.selection)) && (cb.style.animationName = "cm-blink" == cb.style.animationName ? "cm-blink2" : "cm-blink");
        let sb = ba(bb);
        return sb && sa(bb.state, cb), bb.docChanged || bb.selectionSet || sb
      },
      mount(bb, cb) {
        sa(cb.state, bb)
      },
      class: "cm-cursorLayer"
    });

    function sa(bb, cb) {
      cb.style.animationDuration = bb.facet(jW).cursorBlinkRate + "ms"
    }
    const ka = xW({
        above: !1,
        markers(bb) {
          let cb = [],
            {
              main: sb,
              uQ: Wb
            } = bb.state.selection;
          for (let kb of Wb)
            if (!kb.empty)
              for (let sb of oW.forRange(bb, "cm-selectionBackground", kb)) cb.push(sb);
          if (Yb.ios && !sb.empty && bb.state.facet(jW).iosSelectionHandles) {
            for (let Wb of oW.forRange(bb, "cm-selectionHandle cm-selectionHandle-start", kb.j.cursor(sb.from, 1))) cb.push(Wb);
            for (let Wb of oW.forRange(bb, "cm-selectionHandle cm-selectionHandle-end", kb.j.cursor(sb.to, 1))) cb.push(Wb)
          }
          return cb
        },
        update: (bb, cb) => bb.docChanged || bb.selectionSet || bb.viewportChanged || ba(bb),
        class: "cm-selectionLayer"
      }),
      Wa = kb.s.highest(tW.theme({
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
      aa = kb.F.define({
        map: (bb, cb) => null == bb ? null : cb.mapPos(bb)
      }),
      Ta = kb.H.define({
        create: () => null,
        update: (bb, cb) => (null != bb && (bb = cb.changes.mapPos(bb)), cb.effects.reduce(((bb, cb) => cb.is(aa) ? cb.value : bb), bb))
      }),
      Ua = Fc.fromClass(class {
        constructor(bb) {
          this.view = bb, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(bb) {
          var cb;
          let sb = bb.state.field(Ta);
          null == sb ? null != this.cursor && (null === (cb = this.cursor) || void 0 === cb || cb.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (bb.startState.field(Ta) != sb || bb.docChanged || bb.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: bb
          } = this, cb = bb.state.field(Ta), sb = null != cb && bb.coordsAtPos(cb);
          if (!sb) return null;
          let kb = bb.scrollDOM.getBoundingClientRect();
          return {
            left: sb.left - kb.left + bb.scrollDOM.scrollLeft * bb.scaleX,
            top: sb.top - kb.top + bb.scrollDOM.scrollTop * bb.scaleY,
            height: sb.bottom - sb.top
          }
        }
        drawCursor(bb) {
          if (this.cursor) {
            let {
              scaleX: cb,
              scaleY: sb
            } = this.view;
            bb ? (this.cursor.style.left = bb.left / cb + "px", this.cursor.style.top = bb.top / sb + "px", this.cursor.style.height = bb.height / sb + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(bb) {
          this.view.state.field(Ta) != bb && this.view.dispatch({
            effects: aa.of(bb)
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

    function Ia() {
      return [Ta, Ua]
    }

    function Ha(bb, cb, sb, kb, Wb) {
      cb.lastIndex = 0;
      for (let ab, Tb = bb.iterRange(sb, kb), Ub = sb; !Tb.next().done; Ub += Tb.value.length)
        if (!Tb.lineBreak)
          for (; ab = cb.exec(Tb.value);) Wb(Ub + ab.index, ab)
    }
    class fa {
      constructor(bb) {
        const {
          regexp: cb,
          decoration: sb,
          decorate: kb,
          boundary: Wb,
          maxLength: ab = 1e3
        } = bb;
        if (!cb.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = cb, kb) this.addMatch = (bb, cb, sb, Wb) => kb(Wb, sb, sb + bb[0].length, bb, cb);
        else if ("function" == typeof sb) this.addMatch = (bb, cb, kb, Wb) => {
          let ab = sb(bb, cb, kb);
          ab && Wb(kb, kb + bb[0].length, ab)
        };
        else {
          if (!sb) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (bb, cb, kb, Wb) => Wb(kb, kb + bb[0].length, sb)
        }
        this.boundary = Wb, this.maxLength = ab
      }
      createDeco(bb) {
        let cb = new kb.w,
          sb = cb.add.bind(cb);
        for (let {
            from: kb,
            to: Wb
          }
          of
          function(bb, cb) {
            let sb = bb.J7;
            if (1 == sb.length && sb[0].from == bb.viewport.from && sb[0].to == bb.viewport.to) return sb;
            let kb = [];
            for (let {
                from: Wb,
                to: ab
              }
              of sb) Wb = Math.max(bb.state.doc.lineAt(Wb).from, Wb - cb), ab = Math.min(bb.state.doc.lineAt(ab).to, ab + cb), kb.length && kb[kb.length - 1].to >= Wb ? kb[kb.length - 1].to = ab : kb.push({
              from: Wb,
              to: ab
            });
            return kb
          }(bb, this.maxLength)) Ha(bb.state.doc, this.regexp, kb, Wb, ((cb, kb) => this.addMatch(kb, bb, cb, sb)));
        return cb.finish()
      }
      updateDeco(bb, cb) {
        let sb = 1e9,
          kb = -1;
        return bb.docChanged && bb.changes.iterChanges(((cb, Wb, ab, Tb) => {
          Tb >= bb.view.viewport.from && ab <= bb.view.viewport.to && (sb = Math.min(ab, sb), kb = Math.max(Tb, kb))
        })), bb.viewportMoved || kb - sb > 1e3 ? this.createDeco(bb.view) : kb > -1 ? this.updateRange(bb.view, cb.map(bb.changes), sb, kb) : cb
      }
      updateRange(bb, cb, sb, kb) {
        for (let Wb of bb.J7) {
          let ab = Math.max(Wb.from, sb),
            Tb = Math.min(Wb.to, kb);
          if (Tb >= ab) {
            let sb = bb.state.doc.lineAt(ab),
              kb = sb.to < Tb ? bb.state.doc.lineAt(Tb) : sb,
              Ub = Math.max(Wb.from, sb.from),
              Ib = Math.min(Wb.to, kb.to);
            if (this.boundary) {
              for (; ab > sb.from; ab--)
                if (this.boundary.test(sb.text[ab - 1 - sb.from])) {
                  Ub = ab;
                  break
                } for (; Tb < kb.to; Tb++)
                if (this.boundary.test(kb.text[Tb - kb.from])) {
                  Ib = Tb;
                  break
                }
            }
            let Hb, fb = [],
              Mb = (bb, cb, sb) => fb.push(sb.range(bb, cb));
            if (sb == kb)
              for (this.regexp.lastIndex = Ub - sb.from;
                (Hb = this.regexp.exec(sb.text)) && Hb.index < Ib - sb.from;) this.addMatch(Hb, bb, Hb.index + sb.from, Mb);
            else Ha(bb.state.doc, this.regexp, Ub, Ib, ((cb, sb) => this.addMatch(sb, bb, cb, Mb)));
            cb = cb.update({
              filterFrom: Ub,
              filterTo: Ib,
              filter: (bb, cb) => bb < Ub || cb > Ib,
              add: fb
            })
          }
        }
        return cb
      }
    }
    const Ma = null != /x/.unicode ? "gu" : "g",
      Xa = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", Ma),
      na = {
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
    let ma = null;
    const la = kb.n.define({
      combine(bb) {
        let cb = (0, kb.X)(bb, {
          render: null,
          specialChars: Xa,
          addSpecialChars: null
        });
        return (cb.replaceTabs = ! function() {
          var bb;
          if (null == ma && "undefined" != typeof document && document.body) {
            let cb = document.body.style;
            ma = null != (null !== (bb = cb.tabSize) && void 0 !== bb ? bb : cb.MozTabSize)
          }
          return ma || !1
        }()) && (cb.specialChars = new RegExp("\t|" + cb.specialChars.source, Ma)), cb.addSpecialChars && (cb.specialChars = new RegExp(cb.specialChars.source + "|" + cb.addSpecialChars.source, Ma)), cb
      }
    });

    function Qa() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [la.of(bb), ea || (ea = Fc.fromClass(class {
        constructor(bb) {
          this.view = bb, this.aW = Db.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(bb.state.facet(la)), this.aW = this.decorator.createDeco(bb)
        }
        makeDecorator(bb) {
          return new fa({
            regexp: bb.specialChars,
            decoration: (cb, sb, Wb) => {
              let {
                doc: ab
              } = sb.state, Tb = (0, kb.S)(cb[0], 0);
              if (9 == Tb) {
                let bb = ab.lineAt(Wb),
                  cb = sb.state.tabSize,
                  Tb = (0, kb.Z)(bb.text, cb, Wb - bb.from);
                return Db.replace({
                  widget: new Na((cb - Tb % cb) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[Tb] || (this.decorationCache[Tb] = Db.replace({
                widget: new Ca(bb, Tb)
              }))
            },
            boundary: bb.replaceTabs ? void 0 : /[^]/
          })
        }
        update(bb) {
          let cb = bb.state.facet(la);
          bb.startState.facet(la) != cb ? (this.decorator = this.makeDecorator(cb), this.aW = this.decorator.createDeco(bb.view)) : this.aW = this.decorator.updateDeco(bb, this.aW)
        }
      }, {
        aW: bb => bb.aW
      }))]
    }
    let ea = null;
    class Ca extends yb {
      constructor(bb, cb) {
        super(), this.options = bb, this.code = cb
      }
      eq(bb) {
        return bb.code == this.code
      }
      toDOM(bb) {
        let cb = function(bb) {
            return bb >= 32 ? "\u2022" : 10 == bb ? "\u2424" : String.fromCharCode(9216 + bb)
          }(this.code),
          sb = bb.state.phrase("Control character") + " " + (na[this.code] || "0x" + this.code.toString(16)),
          kb = this.options.render && this.options.render(this.code, sb, cb);
        if (kb) return kb;
        let Wb = document.createElement("span");
        return Wb.textContent = cb, Wb.title = sb, Wb.setAttribute("aria-label", sb), Wb.className = "cm-specialChar", Wb
      }
      ignoreEvent() {
        return !1
      }
    }
    class Na extends yb {
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

    function Va() {
      return ua
    }
    const La = Db.line({
        class: "cm-activeLine"
      }),
      ua = Fc.fromClass(class {
        constructor(bb) {
          this.aW = this.getDeco(bb)
        }
        update(bb) {
          (bb.docChanged || bb.selectionSet) && (this.aW = this.getDeco(bb.view))
        }
        getDeco(bb) {
          let cb = -1,
            sb = [];
          for (let kb of bb.state.selection.uQ) {
            let Wb = bb.lineBlockAt(kb.head);
            Wb.from > cb && (sb.push(La.range(Wb.from)), cb = Wb.from)
          }
          return Db.set(sb)
        }
      }, {
        aW: bb => bb.aW
      });
    class Ya extends yb {
      constructor(bb) {
        super(), this.content = bb
      }
      toDOM(bb) {
        let cb = document.createElement("span");
        return cb.className = "cm-placeholder", cb.style.pointerEvents = "none", cb.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(bb) : this.content.cloneNode(!0)), cb.setAttribute("aria-hidden", "true"), cb
      }
      coordsAt(bb) {
        let cb = bb.firstChild ? Ab(bb.firstChild) : [];
        if (!cb.length) return null;
        let sb = window.getComputedStyle(bb.parentNode),
          kb = vb(cb[0], "rtl" != sb.direction),
          Wb = parseInt(sb.lineHeight);
        return kb.bottom - kb.top > 1.5 * Wb ? {
          left: kb.left,
          right: kb.right,
          top: kb.top,
          bottom: kb.top + Wb
        } : kb
      }
      ignoreEvent() {
        return !1
      }
    }

    function ha(bb) {
      let cb = Fc.fromClass(class {
        constructor(cb) {
          this.view = cb, this.placeholder = bb ? Db.set([Db.widget({
            widget: new Ya(bb),
            side: 1
          }).range(0)]) : Db.none
        }
        get aW() {
          return this.view.state.doc.length ? Db.none : this.placeholder
        }
      }, {
        aW: bb => bb.aW
      });
      return "string" == typeof bb ? [cb, tW.contentAttributes.of({
        "aria-placeholder": bb
      })] : cb
    }
    const Ja = 2e3;

    function ga(bb, cb) {
      let sb = bb.posAtCoords({
          x: cb.clientX,
          y: cb.clientY
        }, !1),
        Wb = bb.state.doc.lineAt(sb),
        ab = sb - Wb.from,
        Tb = ab > Ja ? -1 : ab == Wb.length ? function(bb, cb) {
          let sb = bb.coordsAtPos(bb.viewport.from);
          return sb ? Math.round(Math.abs((sb.left - cb) / bb.defaultCharacterWidth)) : -1
        }(bb, cb.clientX) : (0, kb.Z)(Wb.text, bb.state.tabSize, sb - Wb.from);
      return {
        line: Wb.number,
        col: Tb,
        off: ab
      }
    }

    function Ba(bb, cb) {
      let sb = ga(bb, cb),
        Wb = bb.state.selection;
      return sb ? {
        update(bb) {
          if (bb.docChanged) {
            let cb = bb.changes.mapPos(bb.startState.doc.line(sb.line).from),
              kb = bb.state.doc.lineAt(cb);
            sb = {
              line: kb.number,
              col: sb.col,
              off: Math.min(sb.off, kb.length)
            }, Wb = Wb.map(bb.changes)
          }
        },
        get(cb, ab, Tb) {
          let Ub = ga(bb, cb);
          if (!Ub) return Wb;
          let Ib = function(bb, cb, sb) {
            let Wb = Math.min(cb.line, sb.line),
              ab = Math.max(cb.line, sb.line),
              Tb = [];
            if (cb.off > Ja || sb.off > Ja || cb.col < 0 || sb.col < 0) {
              let Ub = Math.min(cb.off, sb.off),
                Ib = Math.max(cb.off, sb.off);
              for (let cb = Wb; cb <= ab; cb++) {
                let sb = bb.doc.line(cb);
                sb.length <= Ib && Tb.push(kb.j.range(sb.from + Ub, sb.to + Ib))
              }
            } else {
              let Ub = Math.min(cb.col, sb.col),
                Ib = Math.max(cb.col, sb.col);
              for (let cb = Wb; cb <= ab; cb++) {
                let sb = bb.doc.line(cb),
                  Wb = (0, kb.bb)(sb.text, Ub, bb.tabSize, !0);
                if (Wb < 0) Tb.push(kb.j.cursor(sb.to));
                else {
                  let cb = (0, kb.bb)(sb.text, Ib, bb.tabSize);
                  Tb.push(kb.j.range(sb.from + Wb, sb.from + cb))
                }
              }
            }
            return Tb
          }(bb.state, sb, Ub);
          return Ib.length ? Tb ? kb.j.create(Ib.concat(Wb.uQ)) : kb.j.create(Ib) : Wb
        }
      } : null
    }

    function ta(bb) {
      let cb = (null === bb || void 0 === bb ? void 0 : bb.eventFilter) || (bb => bb.altKey && 0 == bb.button);
      return tW.mouseSelectionStyle.of(((bb, sb) => cb(sb) ? Ba(bb, sb) : null))
    }
    const ya = {
        Alt: [18, bb => !!bb.altKey],
        Control: [17, bb => !!bb.ctrlKey],
        Shift: [16, bb => !!bb.shiftKey],
        Meta: [91, bb => !!bb.metaKey]
      },
      Pa = {
        style: "cursor: crosshair"
      };

    function Da() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [cb, sb] = ya[bb.key || "Alt"],
        kb = Fc.fromClass(class {
          constructor(bb) {
            this.view = bb, this.isDown = !1
          }
          set(bb) {
            this.isDown != bb && (this.isDown = bb, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(bb) {
              this.set(bb.keyCode == cb || sb(bb))
            },
            keyup(bb) {
              bb.keyCode != cb && sb(bb) || this.set(!1)
            },
            mousemove(bb) {
              this.set(sb(bb))
            }
          }
        });
      return [kb, tW.contentAttributes.of((bb => {
        var cb;
        return (null === (cb = bb.plugin(kb)) || void 0 === cb ? void 0 : cb.isDown) ? Pa : null
      }))]
    }
    const Ea = "-10000px";
    class ia {
      constructor(bb, cb, sb, kb) {
        this.facet = cb, this.createTooltipView = sb, this.removeTooltipView = kb, this.input = bb.state.facet(cb), this.tooltips = this.input.filter((bb => bb));
        let Wb = null;
        this.tooltipViews = this.tooltips.map((bb => Wb = sb(bb, Wb)))
      }
      update(bb, cb) {
        var sb;
        let kb = bb.state.facet(this.facet),
          Wb = kb.filter((bb => bb));
        if (kb === this.input) {
          for (let cb of this.tooltipViews) cb.update && cb.update(bb);
          return !1
        }
        let ab = [],
          Tb = cb ? [] : null;
        for (let Ub = 0; Ub < Wb.length; Ub++) {
          let sb = Wb[Ub],
            kb = -1;
          if (sb) {
            for (let bb = 0; bb < this.tooltips.length; bb++) {
              let cb = this.tooltips[bb];
              cb && cb.create == sb.create && (kb = bb)
            }
            if (kb < 0) ab[Ub] = this.createTooltipView(sb, Ub ? ab[Ub - 1] : null), Tb && (Tb[Ub] = !!sb.above);
            else {
              let sb = ab[Ub] = this.tooltipViews[kb];
              Tb && (Tb[Ub] = cb[kb]), sb.update && sb.update(bb)
            }
          }
        }
        for (let Ub of this.tooltipViews) ab.indexOf(Ub) < 0 && (this.removeTooltipView(Ub), null === (sb = Ub.destroy) || void 0 === sb || sb.call(Ub));
        return cb && (Tb.forEach(((bb, sb) => cb[sb] = bb)), cb.length = Tb.length), this.input = kb, this.tooltips = Wb, this.tooltipViews = ab, !0
      }
    }

    function Oa(bb) {
      let cb = bb.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: cb.clientHeight,
        right: cb.clientWidth
      }
    }
    const Ga = kb.n.define({
        combine: bb => {
          var cb, sb, kb;
          return {
            position: Yb.ios ? "absolute" : (null === (cb = bb.find((bb => bb.position))) || void 0 === cb ? void 0 : cb.position) || "fixed",
            parent: (null === (sb = bb.find((bb => bb.parent))) || void 0 === sb ? void 0 : sb.parent) || null,
            tooltipSpace: (null === (kb = bb.find((bb => bb.tooltipSpace))) || void 0 === kb ? void 0 : kb.tooltipSpace) || Oa
          }
        }
      }),
      Ka = new WeakMap,
      Za = Fc.fromClass(class {
        constructor(bb) {
          this.view = bb, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let cb = bb.state.facet(Ga);
          this.position = cb.position, this.parent = cb.parent, this.classes = bb.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new ia(bb, Aa, ((bb, cb) => this.createTooltip(bb, cb)), (bb => {
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
          let cb = this.manager.update(bb, this.above);
          cb && this.observeIntersection();
          let sb = cb || bb.geometryChanged,
            kb = bb.state.facet(Ga);
          if (kb.position != this.position && !this.madeAbsolute) {
            this.position = kb.position;
            for (let bb of this.manager.tooltipViews) bb.dom.style.position = this.position;
            sb = !0
          }
          if (kb.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = kb.parent, this.createContainer();
            for (let bb of this.manager.tooltipViews) this.container.appendChild(bb.dom);
            sb = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          sb && this.maybeMeasure()
        }
        createTooltip(bb, cb) {
          let sb = bb.create(this.view),
            kb = cb ? cb.dom : null;
          if (sb.dom.classList.add("cm-tooltip"), bb.arrow && !sb.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let bb = document.createElement("div");
            bb.className = "cm-tooltip-arrow", sb.dom.appendChild(bb)
          }
          return sb.dom.style.position = this.position, sb.dom.style.top = Ea, sb.dom.style.left = "0px", this.container.insertBefore(sb.dom, kb), sb.mount && sb.mount(this.view), this.resizeObserver && this.resizeObserver.observe(sb.dom), sb
        }
        destroy() {
          var bb, cb, sb;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let kb of this.manager.tooltipViews) kb.dom.remove(), null === (bb = kb.destroy) || void 0 === bb || bb.call(kb);
          this.parent && this.container.remove(), null === (cb = this.resizeObserver) || void 0 === cb || cb.disconnect(), null === (sb = this.intersectionObserver) || void 0 === sb || sb.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let bb = 1,
            cb = 1,
            sb = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: bb
            } = this.manager.tooltipViews[0];
            if (Yb.safari) {
              let cb = bb.getBoundingClientRect();
              sb = Math.abs(cb.top + 1e4) > 1 || Math.abs(cb.left) > 1
            } else sb = !!bb.offsetParent && bb.offsetParent != this.container.ownerDocument.body
          }
          if (sb || "absolute" == this.position)
            if (this.parent) {
              let sb = this.parent.getBoundingClientRect();
              sb.width && sb.height && (bb = sb.width / this.parent.offsetWidth, cb = sb.height / this.parent.offsetHeight)
            } else({
              scaleX: bb,
              scaleY: cb
            } = this.view.viewState);
          let kb = this.view.scrollDOM.getBoundingClientRect(),
            Wb = Us(this.view);
          return {
            visible: {
              left: kb.left + Wb.left,
              top: kb.top + Wb.top,
              right: kb.right - Wb.right,
              bottom: kb.bottom - Wb.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((bb, cb) => {
              let sb = this.manager.tooltipViews[cb];
              return sb.getCoords ? sb.getCoords(bb.pos) : this.view.coordsAtPos(bb.pos)
            })),
            size: this.manager.tooltipViews.map((bb => {
              let {
                dom: cb
              } = bb;
              return cb.getBoundingClientRect()
            })),
            space: this.view.state.facet(Ga).tooltipSpace(this.view),
            scaleX: bb,
            scaleY: cb,
            makeAbsolute: sb
          }
        }
        writeMeasure(bb) {
          var cb;
          if (bb.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let bb of this.manager.tooltipViews) bb.dom.style.position = "absolute"
          }
          let {
            visible: sb,
            space: kb,
            scaleX: Wb,
            scaleY: ab
          } = bb, Tb = [];
          for (let Ub = 0; Ub < this.manager.tooltips.length; Ub++) {
            let Ib = this.manager.tooltips[Ub],
              Hb = this.manager.tooltipViews[Ub],
              {
                dom: fb
              } = Hb,
              Mb = bb.pos[Ub],
              Xb = bb.size[Ub];
            if (!Mb || !1 !== Ib.clip && (Mb.bottom <= Math.max(sb.top, kb.top) || Mb.top >= Math.min(sb.bottom, kb.bottom) || Mb.right < Math.max(sb.left, kb.left) - .1 || Mb.left > Math.min(sb.right, kb.right) + .1)) {
              fb.style.top = Ea;
              continue
            }
            let nb = Ib.arrow ? Hb.dom.querySelector(".cm-tooltip-arrow") : null,
              mb = nb ? 7 : 0,
              lb = Xb.right - Xb.left,
              Qb = null !== (cb = Ka.get(Hb)) && void 0 !== cb ? cb : Xb.bottom - Xb.top,
              eb = Hb.offset || da,
              Cb = this.view.textDirection == Hc.LTR,
              Nb = Xb.width > kb.right - kb.left ? Cb ? kb.left : kb.right - Xb.width : Cb ? Math.max(kb.left, Math.min(Mb.left - (nb ? 14 : 0) + eb.x, kb.right - lb)) : Math.min(Math.max(kb.left, Mb.left - lb + (nb ? 14 : 0) - eb.x), kb.right - lb),
              Vb = this.above[Ub];
            !Ib.strictSide && (Vb ? Mb.top - Qb - mb - eb.y < kb.top : Mb.bottom + Qb + mb + eb.y > kb.bottom) && Vb == kb.bottom - Mb.bottom > Mb.top - kb.top && (Vb = this.above[Ub] = !Vb);
            let Lb = (Vb ? Mb.top - kb.top : kb.bottom - Mb.bottom) - mb;
            if (Lb < Qb && !1 !== Hb.resize) {
              if (Lb < this.view.defaultLineHeight) {
                fb.style.top = Ea;
                continue
              }
              Ka.set(Hb, Qb), fb.style.height = (Qb = Lb) / ab + "px"
            } else fb.style.height && (fb.style.height = "");
            let ub = Vb ? Mb.top - Qb - mb - eb.y : Mb.bottom + mb + eb.y,
              Yb = Nb + lb;
            if (!0 !== Hb.overlap)
              for (let bb of Tb) bb.left < Yb && bb.right > Nb && bb.top < ub + Qb && bb.bottom > ub && (ub = Vb ? bb.top - Qb - 2 - mb : bb.bottom + mb + 2);
            if ("absolute" == this.position ? (fb.style.top = (ub - bb.parent.top) / ab + "px", za(fb, (Nb - bb.parent.left) / Wb)) : (fb.style.top = ub / ab + "px", za(fb, Nb / Wb)), nb) {
              let bb = Mb.left + (Cb ? eb.x : -eb.x) - (Nb + 14 - 7);
              nb.style.left = bb / Wb + "px"
            }!0 !== Hb.overlap && Tb.push({
              left: Nb,
              top: ub,
              right: Yb,
              bottom: ub + Qb
            }), fb.classList.toggle("cm-tooltip-above", Vb), fb.classList.toggle("cm-tooltip-below", !Vb), Hb.positioned && Hb.positioned(bb.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let bb of this.manager.tooltipViews) bb.dom.style.top = Ea
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function za(bb, cb) {
      let sb = parseInt(bb.style.left, 10);
      (isNaN(sb) || Math.abs(cb - sb) > 1) && (bb.style.left = cb + "px")
    }
    const qa = tW.baseTheme({
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
      da = {
        x: 0,
        y: 0
      },
      Aa = kb.n.define({
        enables: [Za, qa]
      }),
      wa = kb.n.define({
        combine: bb => bb.reduce(((bb, cb) => bb.concat(cb)), [])
      });
    class ra {
      static create(bb) {
        return new ra(bb)
      }
      constructor(bb) {
        this.view = bb, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new ia(bb, wa, ((bb, cb) => this.createHostedView(bb, cb)), (bb => bb.dom.remove()))
      }
      createHostedView(bb, cb) {
        let sb = bb.create(this.view);
        return sb.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(sb.dom, cb ? cb.dom.nextSibling : this.dom.firstChild), this.mounted && sb.mount && sb.mount(this.view), sb
      }
      mount(bb) {
        for (let cb of this.manager.tooltipViews) cb.mount && cb.mount(bb);
        this.mounted = !0
      }
      positioned(bb) {
        for (let cb of this.manager.tooltipViews) cb.positioned && cb.positioned(bb)
      }
      update(bb) {
        this.manager.update(bb)
      }
      destroy() {
        var bb;
        for (let cb of this.manager.tooltipViews) null === (bb = cb.destroy) || void 0 === bb || bb.call(cb)
      }
      passProp(bb) {
        let cb;
        for (let sb of this.manager.tooltipViews) {
          let kb = sb[bb];
          if (void 0 !== kb)
            if (void 0 === cb) cb = kb;
            else if (cb !== kb) return
        }
        return cb
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
    const oa = Aa.compute([wa], (bb => {
      let cb = bb.facet(wa);
      return 0 === cb.length ? null : {
        pos: Math.min(...cb.map((bb => bb.pos))),
        end: Math.max(...cb.map((bb => {
          var cb;
          return null !== (cb = bb.end) && void 0 !== cb ? cb : bb.pos
        }))),
        create: ra.create,
        above: cb[0].above,
        arrow: cb.some((bb => bb.arrow))
      }
    }));
    class Sa {
      constructor(bb, cb, sb, kb, Wb) {
        this.view = bb, this.source = cb, this.field = sb, this.setHover = kb, this.hoverTime = Wb, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: cb
        } = this, sb = bb.docView.tile.nearest(cb.target);
        if (!sb) return;
        let kb, Wb = 1;
        if (sb.isWidget()) kb = sb.posAtStart;
        else {
          if (kb = bb.posAtCoords(cb), null == kb) return;
          let sb = bb.coordsAtPos(kb);
          if (!sb || cb.y < sb.top || cb.y > sb.bottom || cb.x < sb.left - bb.defaultCharacterWidth || cb.x > sb.right + bb.defaultCharacterWidth) return;
          let ab = bb.bidiSpans(bb.state.doc.lineAt(kb)).find((bb => bb.from <= kb && bb.to >= kb)),
            Tb = ab && ab.dir == Hc.RTL ? -1 : 1;
          Wb = cb.x < sb.left ? -Tb : Tb
        }
        let ab = this.source(bb, kb, Wb);
        if (null === ab || void 0 === ab ? void 0 : ab.then) {
          let cb = this.pending = {
            pos: kb
          };
          ab.then((sb => {
            this.pending == cb && (this.pending = null, !sb || Array.isArray(sb) && !sb.length || bb.dispatch({
              effects: this.setHover.of(Array.isArray(sb) ? sb : [sb])
            }))
          }), (cb => oc(bb.state, cb, "hover tooltip")))
        } else !ab || Array.isArray(ab) && !ab.length || bb.dispatch({
          effects: this.setHover.of(Array.isArray(ab) ? ab : [ab])
        })
      }
      get tooltip() {
        let bb = this.view.plugin(Za),
          cb = bb ? bb.manager.tooltips.findIndex((bb => bb.create == ra.create)) : -1;
        return cb > -1 ? bb.manager.tooltipViews[cb] : null
      }
      mousemove(bb) {
        var cb, sb;
        this.lastMove = {
          x: bb.clientX,
          y: bb.clientY,
          target: bb.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: kb,
          tooltip: Wb
        } = this;
        if (kb.length && Wb && ! function(bb, cb) {
            let sb, {
              left: kb,
              right: Wb,
              top: ab,
              bottom: Tb
            } = bb.getBoundingClientRect();
            if (sb = bb.querySelector(".cm-tooltip-arrow")) {
              let bb = sb.getBoundingClientRect();
              ab = Math.min(bb.top, ab), Tb = Math.max(bb.bottom, Tb)
            }
            return cb.clientX >= kb - Ra && cb.clientX <= Wb + Ra && cb.clientY >= ab - Ra && cb.clientY <= Tb + Ra
          }(Wb.dom, bb) || this.pending) {
          let {
            pos: Wb
          } = kb[0] || this.pending, ab = null !== (sb = null === (cb = kb[0]) || void 0 === cb ? void 0 : cb.end) && void 0 !== sb ? sb : Wb;
          (Wb == ab ? this.view.posAtCoords(this.lastMove) == Wb : function(bb, cb, sb, kb, Wb) {
            let ab = bb.scrollDOM.getBoundingClientRect(),
              Tb = bb.documentTop + bb.documentPadding.top + bb.contentHeight;
            if (ab.left > kb || ab.right < kb || ab.top > Wb || Math.min(ab.bottom, Tb) < Wb) return !1;
            let Ub = bb.posAtCoords({
              x: kb,
              y: Wb
            }, !1);
            return Ub >= cb && Ub <= sb
          }(this.view, Wb, ab, bb.clientX, bb.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(bb) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: cb
        } = this;
        if (cb.length) {
          let {
            tooltip: cb
          } = this;
          cb && cb.dom.contains(bb.relatedTarget) ? this.watchTooltipLeave(cb.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(bb) {
        let cb = sb => {
          bb.removeEventListener("mouseleave", cb), this.active.length && !this.view.dom.contains(sb.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        bb.addEventListener("mouseleave", cb)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const Ra = 4;

    function va(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        sb = kb.F.define(),
        Wb = kb.H.define({
          create: () => [],
          update(bb, Wb) {
            if (bb.length && (cb.hideOnChange && (Wb.docChanged || Wb.selection) ? bb = [] : cb.hideOn && (bb = bb.filter((bb => !cb.hideOn(Wb, bb)))), Wb.docChanged)) {
              let cb = [];
              for (let sb of bb) {
                let bb = Wb.changes.mapPos(sb.pos, -1, kb.r.TrackDel);
                if (null != bb) {
                  let kb = Object.assign(Object.create(null), sb);
                  kb.pos = bb, null != kb.end && (kb.end = Wb.changes.mapPos(kb.end)), cb.push(kb)
                }
              }
              bb = cb
            }
            for (let cb of Wb.effects) cb.is(sb) && (bb = cb.value), cb.is(xa) && (bb = []);
            return bb
          },
          provide: bb => wa.from(bb)
        });
      return {
        active: Wb,
        extension: [Wb, Fc.define((kb => new Sa(kb, bb, Wb, sb, cb.hoverTime || 300))), oa]
      }
    }

    function Fa(bb, cb) {
      let sb = bb.plugin(Za);
      if (!sb) return null;
      let kb = sb.manager.tooltips.indexOf(cb);
      return kb < 0 ? null : sb.manager.tooltipViews[kb]
    }
    const xa = kb.F.define();
    const ja = kb.n.define({
      combine(bb) {
        let cb, sb;
        for (let kb of bb) cb = cb || kb.topContainer, sb = sb || kb.bottomContainer;
        return {
          topContainer: cb,
          bottomContainer: sb
        }
      }
    });

    function pa(bb, cb) {
      let sb = bb.plugin(bT),
        kb = sb ? sb.specs.indexOf(cb) : -1;
      return kb > -1 ? sb.panels[kb] : null
    }
    const bT = Fc.fromClass(class {
      constructor(bb) {
        this.input = bb.state.facet(kT), this.specs = this.input.filter((bb => bb)), this.panels = this.specs.map((cb => cb(bb)));
        let cb = bb.state.facet(ja);
        this.top = new cT(bb, !0, cb.topContainer), this.bottom = new cT(bb, !1, cb.bottomContainer), this.top.sync(this.panels.filter((bb => bb.top))), this.bottom.sync(this.panels.filter((bb => !bb.top)));
        for (let sb of this.panels) sb.dom.classList.add("cm-panel"), sb.mount && sb.mount()
      }
      update(bb) {
        let cb = bb.state.facet(ja);
        this.top.container != cb.topContainer && (this.top.sync([]), this.top = new cT(bb.view, !0, cb.topContainer)), this.bottom.container != cb.bottomContainer && (this.bottom.sync([]), this.bottom = new cT(bb.view, !1, cb.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let sb = bb.state.facet(kT);
        if (sb != this.input) {
          let cb = sb.filter((bb => bb)),
            kb = [],
            Wb = [],
            ab = [],
            Tb = [];
          for (let sb of cb) {
            let cb, Ub = this.specs.indexOf(sb);
            Ub < 0 ? (cb = sb(bb.view), Tb.push(cb)) : (cb = this.panels[Ub], cb.update && cb.update(bb)), kb.push(cb), (cb.top ? Wb : ab).push(cb)
          }
          this.specs = cb, this.panels = kb, this.top.sync(Wb), this.bottom.sync(ab);
          for (let bb of Tb) bb.dom.classList.add("cm-panel"), bb.mount && bb.mount()
        } else
          for (let kb of this.panels) kb.update && kb.update(bb)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: bb => tW.scrollMargins.of((cb => {
        let sb = cb.plugin(bb);
        return sb && {
          top: sb.top.scrollMargin(),
          bottom: sb.bottom.scrollMargin()
        }
      }))
    });
    class cT {
      constructor(bb, cb, sb) {
        this.view = bb, this.top = cb, this.container = sb, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(bb) {
        for (let cb of this.panels) cb.destroy && bb.indexOf(cb) < 0 && cb.destroy();
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
        for (let cb of this.panels)
          if (cb.dom.parentNode == this.dom) {
            for (; bb != cb.dom;) bb = sT(bb);
            bb = bb.nextSibling
          } else this.dom.insertBefore(cb.dom, bb);
        for (; bb;) bb = sT(bb)
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

    function sT(bb) {
      let cb = bb.nextSibling;
      return bb.remove(), cb
    }
    const kT = kb.n.define({
      enables: bT
    });

    function WT(bb, cb) {
      let sb, Wb = new Promise((bb => sb = bb)),
        ab = bb => function(bb, cb, sb) {
          let kb = cb.content ? cb.content(bb, (() => Tb(null))) : null;
          if (!kb) {
            if (kb = (0, Mb.d)("form"), cb.input) {
              let bb = (0, Mb.d)("input", cb.input);
              /^(text|password|number|email|tel|url)$/.test(bb.type) && bb.classList.add("cm-textfield"), bb.name || (bb.name = "input"), kb.appendChild((0, Mb.d)("label", (cb.label || "") + ": ", bb))
            } else kb.appendChild(document.createTextNode(cb.label || ""));
            kb.appendChild(document.createTextNode(" ")), kb.appendChild((0, Mb.d)("button", {
              class: "cm-button",
              type: "submit"
            }, cb.submitLabel || "OK"))
          }
          let Wb = "FORM" == kb.nodeName ? [kb] : kb.querySelectorAll("form");
          for (let Ub = 0; Ub < Wb.length; Ub++) {
            let bb = Wb[Ub];
            bb.addEventListener("keydown", (cb => {
              27 == cb.keyCode ? (cb.preventDefault(), Tb(null)) : 13 == cb.keyCode && (cb.preventDefault(), Tb(bb))
            })), bb.addEventListener("submit", (cb => {
              cb.preventDefault(), Tb(bb)
            }))
          }
          let ab = (0, Mb.d)("div", kb, (0, Mb.d)("button", {
            onclick: () => Tb(null),
            "aria-label": bb.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          cb.class && (ab.className = cb.class);

          function Tb(cb) {
            ab.contains(ab.ownerDocument.activeElement) && bb.focus(), sb(cb)
          }
          return ab.classList.add("cm-dialog"), {
            dom: ab,
            top: cb.top,
            mount: () => {
              if (cb.focus) {
                let bb;
                bb = "string" == typeof cb.focus ? kb.querySelector(cb.focus) : kb.querySelector("input") || kb.querySelector("button"), bb && "select" in bb ? bb.select() : bb && "focus" in bb && bb.focus()
              }
            }
          }
        }(bb, cb, sb);
      bb.state.field(aT, !1) ? bb.dispatch({
        effects: TT.of(ab)
      }) : bb.dispatch({
        effects: kb.F.appendConfig.of(aT.init((() => [ab])))
      });
      let Tb = UT.of(ab);
      return {
        close: Tb,
        result: Wb.then((cb => ((bb.win.queueMicrotask || (cb => bb.win.setTimeout(cb, 10)))((() => {
          bb.state.field(aT).indexOf(ab) > -1 && bb.dispatch({
            effects: Tb
          })
        })), cb)))
      }
    }
    const aT = kb.H.define({
        create: () => [],
        update(bb, cb) {
          for (let sb of cb.effects) sb.is(TT) ? bb = [sb.value].concat(bb) : sb.is(UT) && (bb = bb.filter((bb => bb != sb.value)));
          return bb
        },
        provide: bb => kT.computeN([bb], (cb => cb.field(bb)))
      }),
      TT = kb.F.define(),
      UT = kb.F.define();
    class IT extends kb.B {
      compare(bb) {
        return this == bb || this.constructor == bb.constructor && this.eq(bb)
      }
      eq(bb) {
        return !1
      }
      destroy(bb) {}
    }
    IT.prototype.elementClass = "", IT.prototype.toDOM = void 0, IT.prototype.mapMode = kb.r.TrackBefore, IT.prototype.startSide = IT.prototype.endSide = -1, IT.prototype.point = !0;
    const HT = kb.n.define(),
      fT = kb.n.define(),
      MT = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => kb.z.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      XT = kb.n.define();

    function nT(bb) {
      return [lT(), XT.of({
        ...MT,
        ...bb
      })]
    }
    const mT = kb.n.define({
      combine: bb => bb.some((bb => bb))
    });

    function lT(bb) {
      let cb = [QT];
      return bb && !1 === bb.fixed && cb.push(mT.of(!0)), cb
    }
    const QT = Fc.fromClass(class {
      constructor(bb) {
        this.view = bb, this.domAfter = null, this.prevViewport = bb.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = bb.state.facet(XT).map((cb => new VT(bb, cb))), this.fixed = !bb.state.facet(mT);
        for (let cb of this.gutters) "after" == cb.config.side ? this.getDOMAfter().appendChild(cb.dom) : this.dom.appendChild(cb.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), bb.scrollDOM.insertBefore(this.dom, bb.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(bb) {
        if (this.updateGutters(bb)) {
          let cb = this.prevViewport,
            sb = bb.view.viewport,
            kb = Math.min(cb.to, sb.to) - Math.max(cb.from, sb.from);
          this.syncGutters(kb < .8 * (sb.to - sb.from))
        }
        if (bb.geometryChanged) {
          let bb = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = bb, this.domAfter && (this.domAfter.style.minHeight = bb)
        }
        this.view.state.facet(mT) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = bb.view.viewport
      }
      syncGutters(bb) {
        let cb = this.dom.nextSibling;
        bb && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let sb = kb.z.iter(this.view.state.facet(HT), this.view.viewport.from),
          Wb = [],
          ab = this.gutters.map((bb => new NT(bb, this.view.viewport, -this.view.documentPadding.top)));
        for (let kb of this.view.viewportLineBlocks)
          if (Wb.length && (Wb = []), Array.isArray(kb.type)) {
            let bb = !0;
            for (let cb of kb.type)
              if (cb.type == Pb.Text && bb) {
                CT(sb, Wb, cb.from);
                for (let bb of ab) bb.line(this.view, cb, Wb);
                bb = !1
              } else if (cb.widget)
              for (let bb of ab) bb.widget(this.view, cb)
          } else if (kb.type == Pb.Text) {
          CT(sb, Wb, kb.from);
          for (let bb of ab) bb.line(this.view, kb, Wb)
        } else if (kb.widget)
          for (let bb of ab) bb.widget(this.view, kb);
        for (let kb of ab) kb.finish();
        bb && (this.view.scrollDOM.insertBefore(this.dom, cb), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(bb) {
        let cb = bb.startState.facet(XT),
          sb = bb.state.facet(XT),
          Wb = bb.docChanged || bb.heightChanged || bb.viewportChanged || !kb.z.eq(bb.startState.facet(HT), bb.state.facet(HT), bb.view.viewport.from, bb.view.viewport.to);
        if (cb == sb)
          for (let kb of this.gutters) kb.update(bb) && (Wb = !0);
        else {
          Wb = !0;
          let kb = [];
          for (let Wb of sb) {
            let sb = cb.indexOf(Wb);
            sb < 0 ? kb.push(new VT(this.view, Wb)) : (this.gutters[sb].update(bb), kb.push(this.gutters[sb]))
          }
          for (let bb of this.gutters) bb.dom.remove(), kb.indexOf(bb) < 0 && bb.destroy();
          for (let bb of kb) "after" == bb.config.side ? this.getDOMAfter().appendChild(bb.dom) : this.dom.appendChild(bb.dom);
          this.gutters = kb
        }
        return Wb
      }
      destroy() {
        for (let bb of this.gutters) bb.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: bb => tW.scrollMargins.of((cb => {
        let sb = cb.plugin(bb);
        if (!sb || 0 == sb.gutters.length || !sb.fixed) return null;
        let kb = sb.dom.offsetWidth * cb.scaleX,
          Wb = sb.domAfter ? sb.domAfter.offsetWidth * cb.scaleX : 0;
        return cb.textDirection == Hc.LTR ? {
          left: kb,
          right: Wb
        } : {
          right: kb,
          left: Wb
        }
      }))
    });

    function eT(bb) {
      return Array.isArray(bb) ? bb : [bb]
    }

    function CT(bb, cb, sb) {
      for (; bb.value && bb.from <= sb;) bb.from == sb && cb.push(bb.value), bb.next()
    }
    class NT {
      constructor(bb, cb, sb) {
        this.gutter = bb, this.height = sb, this.i = 0, this.cursor = kb.z.iter(bb.markers, cb.from)
      }
      addElement(bb, cb, sb) {
        let {
          gutter: kb
        } = this, Wb = (cb.top - this.height) / bb.scaleY, ab = cb.height / bb.scaleY;
        if (this.i == kb.elements.length) {
          let cb = new LT(bb, ab, Wb, sb);
          kb.elements.push(cb), kb.dom.appendChild(cb.dom)
        } else kb.elements[this.i].update(bb, ab, Wb, sb);
        this.height = cb.bottom, this.i++
      }
      line(bb, cb, sb) {
        let kb = [];
        CT(this.cursor, kb, cb.from), sb.length && (kb = kb.concat(sb));
        let Wb = this.gutter.config.lineMarker(bb, cb, kb);
        Wb && kb.unshift(Wb);
        let ab = this.gutter;
        (0 != kb.length || ab.config.renderEmptyElements) && this.addElement(bb, cb, kb)
      }
      widget(bb, cb) {
        let sb = this.gutter.config.widgetMarker(bb, cb.widget, cb),
          kb = sb ? [sb] : null;
        for (let Wb of bb.state.facet(fT)) {
          let sb = Wb(bb, cb.widget, cb);
          sb && (kb || (kb = [])).push(sb)
        }
        kb && this.addElement(bb, cb, kb)
      }
      finish() {
        let bb = this.gutter;
        for (; bb.elements.length > this.i;) {
          let cb = bb.elements.pop();
          bb.dom.removeChild(cb.dom), cb.destroy()
        }
      }
    }
    class VT {
      constructor(bb, cb) {
        this.view = bb, this.config = cb, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let sb in cb.domEventHandlers) this.dom.addEventListener(sb, (kb => {
          let Wb, ab = kb.target;
          if (ab != this.dom && this.dom.contains(ab)) {
            for (; ab.parentNode != this.dom;) ab = ab.parentNode;
            let bb = ab.getBoundingClientRect();
            Wb = (bb.top + bb.bottom) / 2
          } else Wb = kb.clientY;
          let Tb = bb.lineBlockAtHeight(Wb - bb.documentTop);
          cb.domEventHandlers[sb](bb, Tb, kb) && kb.preventDefault()
        }));
        this.markers = eT(cb.markers(bb)), cb.initialSpacer && (this.spacer = new LT(bb, 0, 0, [cb.initialSpacer(bb)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(bb) {
        let cb = this.markers;
        if (this.markers = eT(this.config.markers(bb.view)), this.spacer && this.config.updateSpacer) {
          let cb = this.config.updateSpacer(this.spacer.markers[0], bb);
          cb != this.spacer.markers[0] && this.spacer.update(bb.view, 0, 0, [cb])
        }
        let sb = bb.view.viewport;
        return !kb.z.eq(this.markers, cb, sb.from, sb.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(bb)
      }
      destroy() {
        for (let bb of this.elements) bb.destroy()
      }
    }
    class LT {
      constructor(bb, cb, sb, kb) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(bb, cb, sb, kb)
      }
      update(bb, cb, sb, kb) {
        this.height != cb && (this.height = cb, this.dom.style.height = cb + "px"), this.above != sb && (this.dom.style.marginTop = (this.above = sb) ? sb + "px" : ""),
          function(bb, cb) {
            if (bb.length != cb.length) return !1;
            for (let sb = 0; sb < bb.length; sb++)
              if (!bb[sb].compare(cb[sb])) return !1;
            return !0
          }(this.markers, kb) || this.setMarkers(bb, kb)
      }
      setMarkers(bb, cb) {
        let sb = "cm-gutterElement",
          kb = this.dom.firstChild;
        for (let Wb = 0, ab = 0;;) {
          let Tb = ab,
            Ub = Wb < cb.length ? cb[Wb++] : null,
            Ib = !1;
          if (Ub) {
            let bb = Ub.elementClass;
            bb && (sb += " " + bb);
            for (let cb = ab; cb < this.markers.length; cb++)
              if (this.markers[cb].compare(Ub)) {
                Tb = cb, Ib = !0;
                break
              }
          } else Tb = this.markers.length;
          for (; ab < Tb;) {
            let bb = this.markers[ab++];
            if (bb.toDOM) {
              bb.destroy(kb);
              let cb = kb.nextSibling;
              kb.remove(), kb = cb
            }
          }
          if (!Ub) break;
          Ub.toDOM && (Ib ? kb = kb.nextSibling : this.dom.insertBefore(Ub.toDOM(bb), kb)), Ib && ab++
        }
        this.dom.className = sb, this.markers = cb
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const uT = kb.n.define(),
      YT = kb.n.define(),
      hT = kb.n.define({
        combine: bb => (0, kb.X)(bb, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(bb, cb) {
            let sb = Object.assign({}, bb);
            for (let kb in cb) {
              let bb = sb[kb],
                Wb = cb[kb];
              sb[kb] = bb ? (cb, sb, kb) => bb(cb, sb, kb) || Wb(cb, sb, kb) : Wb
            }
            return sb
          }
        })
      });
    class JT extends IT {
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

    function gT(bb, cb) {
      return bb.state.facet(hT).formatNumber(cb, bb.state)
    }
    const BT = XT.compute([hT], (bb => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: bb => bb.state.facet(uT),
      lineMarker: (bb, cb, sb) => sb.some((bb => bb.toDOM)) ? null : new JT(gT(bb, bb.state.doc.lineAt(cb.from).number)),
      widgetMarker: (bb, cb, sb) => {
        for (let kb of bb.state.facet(YT)) {
          let Wb = kb(bb, cb, sb);
          if (Wb) return Wb
        }
        return null
      },
      lineMarkerChange: bb => bb.startState.facet(hT) != bb.state.facet(hT),
      initialSpacer: bb => new JT(gT(bb, yT(bb.state.doc.lines))),
      updateSpacer(bb, cb) {
        let sb = gT(cb.view, yT(cb.view.state.doc.lines));
        return sb == bb.number ? bb : new JT(sb)
      },
      domEventHandlers: bb.facet(hT).domEventHandlers,
      side: "before"
    })));

    function tT() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [hT.of(bb), lT(), BT]
    }

    function yT(bb) {
      let cb = 9;
      for (; cb < bb;) cb = 10 * cb + 9;
      return cb
    }
    const PT = new class extends IT {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      DT = HT.compute(["selection"], (bb => {
        let cb = [],
          sb = -1;
        for (let kb of bb.selection.uQ) {
          let Wb = bb.doc.lineAt(kb.head).from;
          Wb > sb && (sb = Wb, cb.push(PT.range(Wb)))
        }
        return kb.z.of(cb)
      }));

    function ET() {
      return DT
    }
  },
  40767: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb,
      g: () => nb,
      i: () => Tb,
      k: () => fb,
      l: () => Hb,
      n: () => Eb,
      p: () => Ob,
      q: () => ib,
      u: () => mb
    });
    const kb = 1024;
    let Wb = 0;
    class ab {
      constructor(bb, cb) {
        this.from = bb, this.to = cb
      }
    }
    class Tb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = Wb++, this.perNode = !!bb.perNode, this.deserialize = bb.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = bb.combine || null
      }
      add(bb) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof bb && (bb = Hb.match(bb)), cb => {
          let sb = bb(cb);
          return void 0 === sb ? null : [this, sb]
        }
      }
    }
    Tb.closedBy = new Tb({
      deserialize: bb => bb.split(" ")
    }), Tb.openedBy = new Tb({
      deserialize: bb => bb.split(" ")
    }), Tb.group = new Tb({
      deserialize: bb => bb.split(" ")
    }), Tb.isolate = new Tb({
      deserialize: bb => {
        if (bb && "rtl" != bb && "ltr" != bb && "auto" != bb) throw new RangeError("Invalid value for isolate: " + bb);
        return bb || "auto"
      }
    }), Tb.contextHash = new Tb({
      perNode: !0
    }), Tb.lookAhead = new Tb({
      perNode: !0
    }), Tb.mounted = new Tb({
      perNode: !0
    });
    class Ub {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = bb, this.overlay = cb, this.parser = sb, this.bracketed = kb
      }
      static get(bb) {
        return bb && bb.props && bb.props[Tb.mounted.id]
      }
    }
    const Ib = Object.create(null);
    class Hb {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = bb, this.props = cb, this.id = sb, this.flags = kb
      }
      static define(bb) {
        let cb = bb.props && bb.props.length ? Object.create(null) : Ib,
          sb = (bb.top ? 1 : 0) | (bb.skipped ? 2 : 0) | (bb.error ? 4 : 0) | (null == bb.name ? 8 : 0),
          kb = new Hb(bb.name || "", cb, bb.id, sb);
        if (bb.props)
          for (let Wb of bb.props)
            if (Array.isArray(Wb) || (Wb = Wb(kb)), Wb) {
              if (Wb[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              cb[Wb[0].id] = Wb[1]
            } return kb
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
          let cb = this.prop(Tb.group);
          return !!cb && cb.indexOf(bb) > -1
        }
        return this.id == bb
      }
      static match(bb) {
        let cb = Object.create(null);
        for (let sb in bb)
          for (let kb of sb.split(" ")) cb[kb] = bb[sb];
        return bb => {
          for (let sb = bb.prop(Tb.group), kb = -1; kb < (sb ? sb.length : 0); kb++) {
            let Wb = cb[kb < 0 ? bb.name : sb[kb]];
            if (Wb) return Wb
          }
        }
      }
    }
    Hb.none = new Hb("", Object.create(null), 0, 8);
    class fb {
      constructor(bb) {
        this.types = bb;
        for (let cb = 0; cb < bb.length; cb++)
          if (bb[cb].id != cb) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let bb = [];
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        for (let Wb of this.types) {
          let cb = null;
          for (let bb of sb) {
            let sb = bb(Wb);
            if (sb) {
              cb || (cb = Object.assign({}, Wb.props));
              let bb = sb[1],
                kb = sb[0];
              kb.combine && kb.id in cb && (bb = kb.combine(cb[kb.id], bb)), cb[kb.id] = bb
            }
          }
          bb.push(cb ? new Hb(Wb.name, cb, Wb.id, Wb.flags) : Wb)
        }
        return new fb(bb)
      }
    }
    const Mb = new WeakMap,
      Xb = new WeakMap;
    var nb;
    ! function(bb) {
      bb[bb.ExcludeBuffers = 1] = "ExcludeBuffers", bb[bb.IncludeAnonymous = 2] = "IncludeAnonymous", bb[bb.IgnoreMounts = 4] = "IgnoreMounts", bb[bb.IgnoreOverlays = 8] = "IgnoreOverlays", bb[bb.EnterBracketed = 16] = "EnterBracketed"
    }(nb || (nb = {}));
    class mb {
      constructor(bb, cb, sb, kb, Wb) {
        if (this.type = bb, this.children = cb, this.positions = sb, this.length = kb, this.props = null, Wb && Wb.length) {
          this.props = Object.create(null);
          for (let [bb, cb] of Wb) this.props["number" == typeof bb ? bb : bb.id] = cb
        }
      }
      toString() {
        let bb = Ub.get(this);
        if (bb && !bb.overlay) return bb.tree.toString();
        let cb = "";
        for (let sb of this.children) {
          let bb = sb.toString();
          bb && (cb && (cb += ","), cb += bb)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (cb.length ? "(" + cb + ")" : "") : cb
      }
      cursor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Bb(this.topNode, bb)
      }
      cursorAt(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = Mb.get(this) || this.topNode,
          kb = new Bb(sb);
        return kb.moveTo(bb, cb), Mb.set(this, kb._tree), kb
      }
      get topNode() {
        return new Vb(this, 0, 0, null)
      }
      resolve(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = Cb(Mb.get(this) || this.topNode, bb, cb, !1);
        return Mb.set(this, sb), sb
      }
      resolveInner(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = Cb(Xb.get(this) || this.topNode, bb, cb, !0);
        return Xb.set(this, sb), sb
      }
      resolveStack(bb) {
        return function(bb, cb, sb) {
          let kb = bb.resolveInner(cb, sb),
            Wb = null;
          for (let ab = kb instanceof Vb ? kb : kb.context.parent; ab; ab = ab.parent)
            if (ab.index < 0) {
              let bb = ab.parent;
              (Wb || (Wb = [kb])).push(bb.resolve(cb, sb)), ab = bb
            } else {
              let bb = Ub.get(ab.tree);
              if (bb && bb.overlay && bb.overlay[0].from <= cb && bb.overlay[bb.overlay.length - 1].to >= cb) {
                let Tb = new Vb(bb.tree, bb.overlay[0].from + ab.from, -1, ab);
                (Wb || (Wb = [kb])).push(Cb(Tb, cb, sb, !1))
              }
            } return Wb ? Jb(Wb) : kb
        }(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(bb) {
        let {
          enter: cb,
          leave: sb,
          from: kb = 0,
          to: Wb = this.length
        } = bb, ab = bb.mode || 0, Tb = (ab & nb.IncludeAnonymous) > 0;
        for (let Ub = this.cursor(ab | nb.IncludeAnonymous);;) {
          let bb = !1;
          if (Ub.from <= Wb && Ub.to >= kb && (!Tb && Ub.type.isAnonymous || !1 !== cb(Ub))) {
            if (Ub.firstChild()) continue;
            bb = !0
          }
          for (; bb && sb && (Tb || !Ub.type.isAnonymous) && sb(Ub), !Ub.nextSibling();) {
            if (!Ub.parent()) return;
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
          for (let cb in this.props) bb.push([+cb, this.props[cb]]);
        return bb
      }
      balance() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Db(Hb.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((bb, cb, sb) => new mb(this.type, bb, cb, sb, this.propValues)), bb.makeTree || ((bb, cb, sb) => new mb(Hb.none, bb, cb, sb)))
      }
      static build(bb) {
        return function(bb) {
          var cb;
          let {
            buffer: sb,
            nodeSet: Wb,
            maxBufferLength: ab = kb,
            reused: Ub = [],
            minRepeatType: Ib = Wb.types.length
          } = bb, Hb = Array.isArray(sb) ? new lb(sb, sb.length) : sb, fb = Wb.types, Mb = 0, Xb = 0;

          function nb(bb, cb, sb, kb, Tb, mb) {
            let {
              id: lb,
              start: Yb,
              end: hb,
              size: Jb
            } = Hb, gb = Xb, Bb = Mb;
            if (Jb < 0) {
              if (Hb.next(), -1 == Jb) {
                let cb = Ub[lb];
                return sb.push(cb), void kb.push(Yb - bb)
              }
              if (-3 == Jb) return void(Mb = lb);
              if (-4 == Jb) return void(Xb = lb);
              throw new RangeError(`Unrecognized record size: ${Jb}`)
            }
            let tb, yb, Pb = fb[lb],
              Eb = Yb - bb;
            if (hb - Yb <= ab && (yb = Lb(Hb.pos - cb, Tb))) {
              let cb = new Uint16Array(yb.size - yb.skip),
                sb = Hb.pos - yb.size,
                kb = cb.length;
              for (; Hb.pos > sb;) kb = ub(yb.start, cb, kb);
              tb = new Qb(cb, hb - yb.start, Wb), Eb = yb.start - bb
            } else {
              let bb = Hb.pos - Jb;
              Hb.next();
              let cb = [],
                sb = [],
                kb = lb >= Ib ? lb : -1,
                Wb = 0,
                Tb = hb;
              for (; Hb.pos > bb;) kb >= 0 && Hb.id == kb && Hb.size >= 0 ? (Hb.end <= Tb - ab && (Nb(cb, sb, Yb, Wb, Hb.end, Tb, kb, gb, Bb), Wb = cb.length, Tb = Hb.end), Hb.next()) : mb > 2500 ? eb(Yb, bb, cb, sb) : nb(Yb, bb, cb, sb, kb, mb + 1);
              if (kb >= 0 && Wb > 0 && Wb < cb.length && Nb(cb, sb, Yb, Wb, Yb, Tb, kb, gb, Bb), cb.reverse(), sb.reverse(), kb > -1 && Wb > 0) {
                let bb = Cb(Pb, Bb);
                tb = Db(Pb, cb, sb, 0, cb.length, 0, hb - Yb, bb, bb)
              } else tb = Vb(Pb, cb, sb, hb - Yb, gb - hb, Bb)
            }
            sb.push(tb), kb.push(Eb)
          }

          function eb(bb, cb, sb, kb) {
            let Tb = [],
              Ub = 0,
              Ib = -1;
            for (; Hb.pos > cb;) {
              let {
                id: bb,
                start: cb,
                end: sb,
                size: kb
              } = Hb;
              if (kb > 4) Hb.next();
              else {
                if (Ib > -1 && cb < Ib) break;
                Ib < 0 && (Ib = sb - ab), Tb.push(bb, cb, sb), Ub++, Hb.next()
              }
            }
            if (Ub) {
              let cb = new Uint16Array(4 * Ub),
                ab = Tb[Tb.length - 2];
              for (let bb = Tb.length - 3, sb = 0; bb >= 0; bb -= 3) cb[sb++] = Tb[bb], cb[sb++] = Tb[bb + 1] - ab, cb[sb++] = Tb[bb + 2] - ab, cb[sb++] = sb;
              sb.push(new Qb(cb, Tb[2] - ab, Wb)), kb.push(ab - bb)
            }
          }

          function Cb(bb, cb) {
            return (sb, kb, Wb) => {
              let ab, Ub, Ib = 0,
                Hb = sb.length - 1;
              if (Hb >= 0 && (ab = sb[Hb]) instanceof mb) {
                if (!Hb && ab.type == bb && ab.length == Wb) return ab;
                (Ub = ab.prop(Tb.lookAhead)) && (Ib = kb[Hb] + ab.length + Ub)
              }
              return Vb(bb, sb, kb, Wb, Ib, cb)
            }
          }

          function Nb(bb, cb, sb, kb, ab, Tb, Ub, Ib, Hb) {
            let fb = [],
              Mb = [];
            for (; bb.length > kb;) fb.push(bb.pop()), Mb.push(cb.pop() + sb - ab);
            bb.push(Vb(Wb.types[Ub], fb, Mb, Tb - ab, Ib - Tb, Hb)), cb.push(ab - sb)
          }

          function Vb(bb, cb, sb, kb, Wb, ab, Ub) {
            if (ab) {
              let bb = [Tb.contextHash, ab];
              Ub = Ub ? [bb].concat(Ub) : [bb]
            }
            if (Wb > 25) {
              let bb = [Tb.lookAhead, Wb];
              Ub = Ub ? [bb].concat(Ub) : [bb]
            }
            return new mb(bb, cb, sb, kb, Ub)
          }

          function Lb(bb, cb) {
            let sb = Hb.fork(),
              kb = 0,
              Wb = 0,
              Tb = 0,
              Ub = sb.end - ab,
              fb = {
                size: 0,
                start: 0,
                skip: 0
              };
            bb: for (let ab = sb.pos - bb; sb.pos > ab;) {
              let bb = sb.size;
              if (sb.id == cb && bb >= 0) {
                fb.size = kb, fb.start = Wb, fb.skip = Tb, Tb += 4, kb += 4, sb.next();
                continue
              }
              let Hb = sb.pos - bb;
              if (bb < 0 || Hb < ab || sb.start < Ub) break;
              let Mb = sb.id >= Ib ? 4 : 0,
                Xb = sb.start;
              for (sb.next(); sb.pos > Hb;) {
                if (sb.size < 0) {
                  if (-3 != sb.size && -4 != sb.size) break bb;
                  Mb += 4
                } else sb.id >= Ib && (Mb += 4);
                sb.next()
              }
              Wb = Xb, kb += bb, Tb += Mb
            }
            return (cb < 0 || kb == bb) && (fb.size = kb, fb.start = Wb, fb.skip = Tb), fb.size > 4 ? fb : void 0
          }

          function ub(bb, cb, sb) {
            let {
              id: kb,
              start: Wb,
              end: ab,
              size: Tb
            } = Hb;
            if (Hb.next(), Tb >= 0 && kb < Ib) {
              let Ub = sb;
              if (Tb > 4) {
                let kb = Hb.pos - (Tb - 4);
                for (; Hb.pos > kb;) sb = ub(bb, cb, sb)
              }
              cb[--sb] = Ub, cb[--sb] = ab - bb, cb[--sb] = Wb - bb, cb[--sb] = kb
            } else - 3 == Tb ? Mb = kb : -4 == Tb && (Xb = kb);
            return sb
          }
          let Yb = [],
            hb = [];
          for (; Hb.pos > 0;) nb(bb.start || 0, bb.bufferStart || 0, Yb, hb, -1, 0);
          let Jb = null !== (cb = bb.length) && void 0 !== cb ? cb : Yb.length ? hb[0] + Yb[0].length : 0;
          return new mb(fb[bb.topID], Yb.reverse(), hb.reverse(), Jb)
        }(bb)
      }
    }
    mb.empty = new mb(Hb.none, [], [], 0);
    class lb {
      constructor(bb, cb) {
        this.buffer = bb, this.index = cb
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
        return new lb(this.buffer, this.index)
      }
    }
    class Qb {
      constructor(bb, cb, sb) {
        this.buffer = bb, this.length = cb, this.set = sb
      }
      get type() {
        return Hb.none
      }
      toString() {
        let bb = [];
        for (let cb = 0; cb < this.buffer.length;) bb.push(this.childString(cb)), cb = this.buffer[cb + 3];
        return bb.join(",")
      }
      childString(bb) {
        let cb = this.buffer[bb],
          sb = this.buffer[bb + 3],
          kb = this.set.types[cb],
          Wb = kb.name;
        if (/\W/.test(Wb) && !kb.isError && (Wb = JSON.stringify(Wb)), sb == (bb += 4)) return Wb;
        let ab = [];
        for (; bb < sb;) ab.push(this.childString(bb)), bb = this.buffer[bb + 3];
        return Wb + "(" + ab.join(",") + ")"
      }
      findChild(bb, cb, sb, kb, Wb) {
        let {
          buffer: ab
        } = this, Tb = -1;
        for (let Ub = bb; Ub != cb && !(eb(Wb, kb, ab[Ub + 1], ab[Ub + 2]) && (Tb = Ub, sb > 0)); Ub = ab[Ub + 3]);
        return Tb
      }
      slice(bb, cb, sb) {
        let kb = this.buffer,
          Wb = new Uint16Array(cb - bb),
          ab = 0;
        for (let Tb = bb, Ub = 0; Tb < cb;) {
          Wb[Ub++] = kb[Tb++], Wb[Ub++] = kb[Tb++] - sb;
          let cb = Wb[Ub++] = kb[Tb++] - sb;
          Wb[Ub++] = kb[Tb++] - bb, ab = Math.max(ab, cb)
        }
        return new Qb(Wb, ab, this.set)
      }
    }

    function eb(bb, cb, sb, kb) {
      switch (bb) {
        case -2:
          return sb < cb;
        case -1:
          return kb >= cb && sb < cb;
        case 0:
          return sb < cb && kb > cb;
        case 1:
          return sb <= cb && kb > cb;
        case 2:
          return kb > cb;
        case 4:
          return !0
      }
    }

    function Cb(bb, cb, sb, kb) {
      for (var Wb; bb.from == bb.to || (sb < 1 ? bb.from >= cb : bb.from > cb) || (sb > -1 ? bb.to <= cb : bb.to < cb);) {
        let cb = !kb && bb instanceof Vb && bb.index < 0 ? null : bb.parent;
        if (!cb) return bb;
        bb = cb
      }
      let ab = kb ? 0 : nb.IgnoreOverlays;
      if (kb)
        for (let Tb = bb, Ub = Tb.parent; Ub; Tb = Ub, Ub = Tb.parent) Tb instanceof Vb && Tb.index < 0 && (null === (Wb = Ub.enter(cb, sb, ab)) || void 0 === Wb ? void 0 : Wb.from) != Tb.from && (bb = Ub);
      for (;;) {
        let kb = bb.enter(cb, sb, ab);
        if (!kb) return bb;
        bb = kb
      }
    }
    class Nb {
      cursor() {
        return new Bb(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(bb) {
        let cb = Lb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return cb.length ? cb[0] : null
      }
      getChildren(bb) {
        return Lb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(bb) {
        return Cb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(bb) {
        return Cb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(bb) {
        return ub(this.parent, bb)
      }
      enterUnfinishedNodesBefore(bb) {
        let cb = this.childBefore(bb),
          sb = this;
        for (; cb;) {
          let bb = cb.lastChild;
          if (!bb || bb.to != cb.to) break;
          bb.type.isError && bb.from == bb.to ? (sb = cb, cb = bb.prevSibling) : cb = bb
        }
        return sb
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class Vb extends Nb {
      constructor(bb, cb, sb, kb) {
        super(), this._tree = bb, this.from = cb, this.index = sb, this._parent = kb
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
      nextChild(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let ab = this;;) {
          for (let {
              children: Tb,
              positions: Ib
            } = ab._tree, Hb = cb > 0 ? Tb.length : -1; bb != Hb; bb += cb) {
            let Hb, fb = Tb[bb],
              Mb = Ib[bb] + ab.from;
            if (Wb & nb.EnterBracketed && fb instanceof mb && (Hb = Ub.get(fb)) && !Hb.overlay && Hb.bracketed && sb >= Mb && sb <= Mb + fb.length || eb(kb, sb, Mb, Mb + fb.length))
              if (fb instanceof Qb) {
                if (Wb & nb.ExcludeBuffers) continue;
                let Tb = fb.findChild(0, fb.buffer.length, cb, sb - Mb, kb);
                if (Tb > -1) return new hb(new Yb(ab, fb, bb, Mb), null, Tb)
              } else if (Wb & nb.IncludeAnonymous || !fb.type.isAnonymous || tb(fb)) {
              let Tb;
              if (!(Wb & nb.IgnoreMounts) && (Tb = Ub.get(fb)) && !Tb.overlay) return new Vb(Tb.tree, Mb, bb, ab);
              let Ib = new Vb(fb, Mb, bb, ab);
              return Wb & nb.IncludeAnonymous || !Ib.type.isAnonymous ? Ib : Ib.nextChild(cb < 0 ? fb.children.length - 1 : 0, cb, sb, kb, Wb)
            }
          }
          if (Wb & nb.IncludeAnonymous || !ab.type.isAnonymous) return null;
          if (bb = ab.index >= 0 ? ab.index + cb : cb < 0 ? -1 : ab._parent._tree.children.length, ab = ab._parent, !ab) return null
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
      enter(bb, cb) {
        let sb, kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(kb & nb.IgnoreOverlays) && (sb = Ub.get(this._tree)) && sb.overlay) {
          let Wb = bb - this.from,
            ab = kb & nb.EnterBracketed && sb.bracketed;
          for (let {
              from: bb,
              to: kb
            }
            of sb.overlay)
            if ((cb > 0 || ab ? bb <= Wb : bb < Wb) && (cb < 0 || ab ? kb >= Wb : kb > Wb)) return new Vb(sb.tree, sb.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, bb, cb, kb)
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

    function Lb(bb, cb, sb, kb) {
      let Wb = bb.cursor(),
        ab = [];
      if (!Wb.firstChild()) return ab;
      if (null != sb)
        for (let Tb = !1; !Tb;)
          if (Tb = Wb.type.is(sb), !Wb.nextSibling()) return ab;
      for (;;) {
        if (null != kb && Wb.type.is(kb)) return ab;
        if (Wb.type.is(cb) && ab.push(Wb.node), !Wb.nextSibling()) return null == kb ? ab : []
      }
    }

    function ub(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cb.length - 1;
      for (let kb = bb; sb >= 0; kb = kb.parent) {
        if (!kb) return !1;
        if (!kb.type.isAnonymous) {
          if (cb[sb] && cb[sb] != kb.name) return !1;
          sb--
        }
      }
      return !0
    }
    class Yb {
      constructor(bb, cb, sb, kb) {
        this.parent = bb, this.buffer = cb, this.index = sb, this.start = kb
      }
    }
    class hb extends Nb {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(bb, cb, sb) {
        super(), this.context = bb, this._parent = cb, this.index = sb, this.type = bb.buffer.set.types[bb.buffer.buffer[sb]]
      }
      child(bb, cb, sb) {
        let {
          buffer: kb
        } = this.context, Wb = kb.findChild(this.index + 4, kb.buffer[this.index + 3], bb, cb - this.context.start, sb);
        return Wb < 0 ? null : new hb(this.context, this, Wb)
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
      enter(bb, cb) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & nb.ExcludeBuffers) return null;
        let {
          buffer: sb
        } = this.context, kb = sb.findChild(this.index + 4, sb.buffer[this.index + 3], cb > 0 ? 1 : -1, bb - this.context.start, cb);
        return kb < 0 ? null : new hb(this.context, this, kb)
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
        } = this.context, cb = bb.buffer[this.index + 3];
        return cb < (this._parent ? bb.buffer[this._parent.index + 3] : bb.buffer.length) ? new hb(this.context, this._parent, cb) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: bb
        } = this.context, cb = this._parent ? this._parent.index + 4 : 0;
        return this.index == cb ? this.externalSibling(-1) : new hb(this.context, this._parent, bb.findChild(cb, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let bb = [],
          cb = [],
          {
            buffer: sb
          } = this.context,
          kb = this.index + 4,
          Wb = sb.buffer[this.index + 3];
        if (Wb > kb) {
          let ab = sb.buffer[this.index + 1];
          bb.push(sb.slice(kb, Wb, ab)), cb.push(0)
        }
        return new mb(this.type, bb, cb, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function Jb(bb) {
      if (!bb.length) return null;
      let cb = 0,
        sb = bb[0];
      for (let ab = 1; ab < bb.length; ab++) {
        let kb = bb[ab];
        (kb.from > sb.from || kb.to < sb.to) && (sb = kb, cb = ab)
      }
      let kb = sb instanceof Vb && sb.index < 0 ? null : sb.parent,
        Wb = bb.slice();
      return kb ? Wb[cb] = kb : Wb.splice(cb, 1), new gb(Wb, sb)
    }
    class gb {
      constructor(bb, cb) {
        this.heads = bb, this.node = cb
      }
      get next() {
        return Jb(this.heads)
      }
    }
    class Bb {
      get name() {
        return this.type.name
      }
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = cb & ~nb.EnterBracketed, bb instanceof Vb) this.yieldNode(bb);
        else {
          this._tree = bb.context.parent, this.buffer = bb.context;
          for (let cb = bb._parent; cb; cb = cb._parent) this.stack.unshift(cb.index);
          this.bufferNode = bb, this.yieldBuf(bb.index)
        }
      }
      yieldNode(bb) {
        return !!bb && (this._tree = bb, this.type = bb.type, this.from = bb.from, this.to = bb.to, !0)
      }
      yieldBuf(bb, cb) {
        this.index = bb;
        let {
          start: sb,
          buffer: kb
        } = this.buffer;
        return this.type = cb || kb.set.types[kb.buffer[bb]], this.from = sb + kb.buffer[bb + 1], this.to = sb + kb.buffer[bb + 2], !0
      }
      yield(bb) {
        return !!bb && (bb instanceof Vb ? (this.buffer = null, this.yieldNode(bb)) : (this.buffer = bb.context, this.yieldBuf(bb.index, bb.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(bb, cb, sb) {
        if (!this.buffer) return this.yield(this._tree.nextChild(bb < 0 ? this._tree._tree.children.length - 1 : 0, bb, cb, sb, this.mode));
        let {
          buffer: kb
        } = this.buffer, Wb = kb.findChild(this.index + 4, kb.buffer[this.index + 3], bb, cb - this.buffer.start, sb);
        return !(Wb < 0) && (this.stack.push(this.index), this.yieldBuf(Wb))
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
      enter(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(sb & nb.ExcludeBuffers) && this.enterChild(1, bb, cb) : this.yield(this._tree.enter(bb, cb, sb))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & nb.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let bb = this.mode & nb.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(bb)
      }
      sibling(bb) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + bb, bb, 0, 4, this.mode));
        let {
          buffer: cb
        } = this.buffer, sb = this.stack.length - 1;
        if (bb < 0) {
          let bb = sb < 0 ? 0 : this.stack[sb] + 4;
          if (this.index != bb) return this.yieldBuf(cb.findChild(bb, this.index, -1, 0, 4))
        } else {
          let bb = cb.buffer[this.index + 3];
          if (bb < (sb < 0 ? cb.buffer.length : cb.buffer[this.stack[sb] + 3])) return this.yieldBuf(bb)
        }
        return sb < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + bb, bb, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(bb) {
        let cb, sb, {
          buffer: kb
        } = this;
        if (kb) {
          if (bb > 0) {
            if (this.index < kb.buffer.buffer.length) return !1
          } else
            for (let bb = 0; bb < this.index; bb++)
              if (kb.buffer.buffer[bb + 3] < this.index) return !1;
          ({
            index: cb,
            parent: sb
          } = kb)
        } else({
          index: cb,
          _parent: sb
        } = this._tree);
        for (; sb;
          ({
            index: cb,
            _parent: sb
          } = sb))
          if (cb > -1)
            for (let kb = cb + bb, Wb = bb < 0 ? -1 : sb._tree.children.length; kb != Wb; kb += bb) {
              let bb = sb._tree.children[kb];
              if (this.mode & nb.IncludeAnonymous || bb instanceof Qb || !bb.type.isAnonymous || tb(bb)) return !1
            }
        return !0
      }
      move(bb, cb) {
        if (cb && this.enterChild(bb, 0, 4)) return !0;
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (cb < 1 ? this.from >= bb : this.from > bb) || (cb > -1 ? this.to <= bb : this.to < bb)) && this.parent(););
        for (; this.enterChild(1, bb, cb););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let bb = this.bufferNode,
          cb = null,
          sb = 0;
        if (bb && bb.context == this.buffer) bb: for (let kb = this.index, Wb = this.stack.length; Wb >= 0;) {
          for (let ab = bb; ab; ab = ab._parent)
            if (ab.index == kb) {
              if (kb == this.index) return ab;
              cb = ab, sb = Wb + 1;
              break bb
            } kb = this.stack[--Wb]
        }
        for (let kb = sb; kb < this.stack.length; kb++) cb = new hb(this.buffer, cb, this.stack[kb]);
        return this.bufferNode = new hb(this.buffer, cb, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(bb, cb) {
        for (let sb = 0;;) {
          let kb = !1;
          if (this.type.isAnonymous || !1 !== bb(this)) {
            if (this.firstChild()) {
              sb++;
              continue
            }
            this.type.isAnonymous || (kb = !0)
          }
          for (;;) {
            if (kb && cb && cb(this), kb = this.type.isAnonymous, !sb) return;
            if (this.nextSibling()) break;
            this.parent(), sb--, kb = !0
          }
        }
      }
      matchContext(bb) {
        if (!this.buffer) return ub(this.node.parent, bb);
        let {
          buffer: cb
        } = this.buffer, {
          types: sb
        } = cb.set;
        for (let kb = bb.length - 1, Wb = this.stack.length - 1; kb >= 0; Wb--) {
          if (Wb < 0) return ub(this._tree, bb, kb);
          let ab = sb[cb.buffer[this.stack[Wb]]];
          if (!ab.isAnonymous) {
            if (bb[kb] && bb[kb] != ab.name) return !1;
            kb--
          }
        }
        return !0
      }
    }

    function tb(bb) {
      return bb.children.some((bb => bb instanceof Qb || !bb.type.isAnonymous || tb(bb)))
    }
    const yb = new WeakMap;

    function Pb(bb, cb) {
      if (!bb.isAnonymous || cb instanceof Qb || cb.type != bb) return 1;
      let sb = yb.get(cb);
      if (null == sb) {
        sb = 1;
        for (let kb of cb.children) {
          if (kb.type != bb || !(kb instanceof mb)) {
            sb = 1;
            break
          }
          sb += Pb(bb, kb)
        }
        yb.set(cb, sb)
      }
      return sb
    }

    function Db(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
      let Hb = 0;
      for (let nb = kb; nb < Wb; nb++) Hb += Pb(bb, cb[nb]);
      let fb = Math.ceil(1.5 * Hb / 8),
        Mb = [],
        Xb = [];
      return function cb(sb, kb, Wb, Tb, Ub) {
        for (let Hb = Wb; Hb < Tb;) {
          let Wb = Hb,
            nb = kb[Hb],
            mb = Pb(bb, sb[Hb]);
          for (Hb++; Hb < Tb; Hb++) {
            let cb = Pb(bb, sb[Hb]);
            if (mb + cb >= fb) break;
            mb += cb
          }
          if (Hb == Wb + 1) {
            if (mb > fb) {
              let bb = sb[Wb];
              cb(bb.children, bb.positions, 0, bb.children.length, kb[Wb] + Ub);
              continue
            }
            Mb.push(sb[Wb])
          } else {
            let cb = kb[Hb - 1] + sb[Hb - 1].length - nb;
            Mb.push(Db(bb, sb, kb, Wb, Hb, nb, cb, null, Ib))
          }
          Xb.push(nb + Ub - ab)
        }
      }(cb, sb, kb, Wb, 0), (Ub || Ib)(Mb, Xb, Tb)
    }
    class Eb {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(bb, cb, sb) {
        let kb = this.map.get(bb);
        kb || this.map.set(bb, kb = new Map), kb.set(cb, sb)
      }
      getBuffer(bb, cb) {
        let sb = this.map.get(bb);
        return sb && sb.get(cb)
      }
      set(bb, cb) {
        bb instanceof hb ? this.setBuffer(bb.context.buffer, bb.index, cb) : bb instanceof Vb && this.map.set(bb.tree, cb)
      }
      get(bb) {
        return bb instanceof hb ? this.getBuffer(bb.context.buffer, bb.index) : bb instanceof Vb ? this.map.get(bb.tree) : void 0
      }
      cursorSet(bb, cb) {
        bb.buffer ? this.setBuffer(bb.buffer.buffer, bb.index, cb) : this.map.set(bb.tree, cb)
      }
      cursorGet(bb) {
        return bb.buffer ? this.getBuffer(bb.buffer.buffer, bb.index) : this.map.get(bb.tree)
      }
    }
    class ib {
      constructor(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = bb, this.to = cb, this.tree = sb, this.offset = kb, this.open = (Wb ? 1 : 0) | (ab ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = [new ib(0, bb.length, bb, 0, !1, sb)];
        for (let Wb of cb) Wb.to > bb.length && kb.push(Wb);
        return kb
      }
      static applyChanges(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!cb.length) return bb;
        let kb = [],
          Wb = 1,
          ab = bb.length ? bb[0] : null;
        for (let Tb = 0, Ub = 0, Ib = 0;; Tb++) {
          let Hb = Tb < cb.length ? cb[Tb] : null,
            fb = Hb ? Hb.fromA : 1e9;
          if (fb - Ub >= sb)
            for (; ab && ab.from < fb;) {
              let cb = ab;
              if (Ub >= cb.from || fb <= cb.to || Ib) {
                let bb = Math.max(cb.from, Ub) - Ib,
                  sb = Math.min(cb.to, fb) - Ib;
                cb = bb >= sb ? null : new ib(bb, sb, cb.tree, cb.offset + Ib, Tb > 0, !!Hb)
              }
              if (cb && kb.push(cb), ab.to > fb) break;
              ab = Wb < bb.length ? bb[Wb++] : null
            }
          if (!Hb) break;
          Ub = Hb.toA, Ib = Hb.toA - Hb.toB
        }
        return kb
      }
    }
    class Ob {
      startParse(bb, cb, sb) {
        return "string" == typeof bb && (bb = new Gb(bb)), sb = sb ? sb.length ? sb.map((bb => new ab(bb.from, bb.to))) : [new ab(0, 0)] : [new ab(0, bb.length)], this.createParse(bb, cb || [], sb)
      }
      parse(bb, cb, sb) {
        let kb = this.startParse(bb, cb, sb);
        for (;;) {
          let bb = kb.advance();
          if (bb) return bb
        }
      }
    }
    class Gb {
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
      read(bb, cb) {
        return this.string.slice(bb, cb)
      }
    }
    new Tb({
      perNode: !0
    })
  },
  40775: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Xb,
      e: () => Ib,
      g: () => Mb,
      h: () => yb
    });
    var kb = sb(40767);
    let Wb = 0;
    class ab {
      constructor(bb, cb, sb, kb) {
        this.name = bb, this.set = cb, this.base = sb, this.modified = kb, this.id = Wb++
      }
      toString() {
        let {
          name: bb
        } = this;
        for (let cb of this.modified) cb.name && (bb = `${cb.name}(${bb})`);
        return bb
      }
      static define(bb, cb) {
        let sb = "string" == typeof bb ? bb : "?";
        if (bb instanceof ab && (cb = bb), null === cb || void 0 === cb ? void 0 : cb.base) throw new Error("Can not derive from a modified tag");
        let kb = new ab(sb, [], null, []);
        if (kb.set.push(kb), cb)
          for (let Wb of cb.set) kb.set.push(Wb);
        return kb
      }
      static defineModifier(bb) {
        let cb = new Ub(bb);
        return bb => bb.modified.indexOf(cb) > -1 ? bb : Ub.get(bb.base || bb, bb.modified.concat(cb).sort(((bb, cb) => bb.id - cb.id)))
      }
    }
    let Tb = 0;
    class Ub {
      constructor(bb) {
        this.name = bb, this.instances = [], this.id = Tb++
      }
      static get(bb, cb) {
        if (!cb.length) return bb;
        let sb = cb[0].instances.find((sb => {
          return sb.base == bb && (kb = cb, Wb = sb.modified, kb.length == Wb.length && kb.every(((bb, cb) => bb == Wb[cb])));
          var kb, Wb
        }));
        if (sb) return sb;
        let kb = [],
          Wb = new ab(bb.name, kb, bb, cb);
        for (let ab of cb) ab.instances.push(Wb);
        let Tb = function(bb) {
          let cb = [
            []
          ];
          for (let sb = 0; sb < bb.length; sb++)
            for (let kb = 0, Wb = cb.length; kb < Wb; kb++) cb.push(cb[kb].concat(bb[sb]));
          return cb.sort(((bb, cb) => cb.length - bb.length))
        }(cb);
        for (let ab of bb.set)
          if (!ab.modified.length)
            for (let bb of Tb) kb.push(Ub.get(ab, bb));
        return Wb
      }
    }

    function Ib(bb) {
      let cb = Object.create(null);
      for (let sb in bb) {
        let kb = bb[sb];
        Array.isArray(kb) || (kb = [kb]);
        for (let bb of sb.split(" "))
          if (bb) {
            let sb = [],
              Wb = 2,
              ab = bb;
            for (let cb = 0;;) {
              if ("..." == ab && cb > 0 && cb + 3 == bb.length) {
                Wb = 1;
                break
              }
              let kb = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(ab);
              if (!kb) throw new RangeError("Invalid path: " + bb);
              if (sb.push("*" == kb[0] ? "" : '"' == kb[0][0] ? JSON.parse(kb[0]) : kb[0]), cb += kb[0].length, cb == bb.length) break;
              let Tb = bb[cb++];
              if (cb == bb.length && "!" == Tb) {
                Wb = 0;
                break
              }
              if ("/" != Tb) throw new RangeError("Invalid path: " + bb);
              ab = bb.slice(cb)
            }
            let Tb = sb.length - 1,
              Ub = sb[Tb];
            if (!Ub) throw new RangeError("Invalid path: " + bb);
            let Ib = new fb(kb, Wb, Tb > 0 ? sb.slice(0, Tb) : null);
            cb[Ub] = Ib.sort(cb[Ub])
          }
      }
      return Hb.add(cb)
    }
    const Hb = new kb.i({
      combine(bb, cb) {
        let sb, kb, Wb;
        for (; bb || cb;) {
          if (!bb || cb && bb.depth >= cb.depth ? (Wb = cb, cb = cb.next) : (Wb = bb, bb = bb.next), sb && sb.mode == Wb.mode && !Wb.context && !sb.context) continue;
          let ab = new fb(Wb.tags, Wb.mode, Wb.context);
          sb ? sb.next = ab : kb = ab, sb = ab
        }
        return kb
      }
    });
    class fb {
      constructor(bb, cb, sb, kb) {
        this.tags = bb, this.mode = cb, this.context = sb, this.next = kb
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

    function Mb(bb, cb) {
      let sb = Object.create(null);
      for (let ab of bb)
        if (Array.isArray(ab.tag))
          for (let bb of ab.tag) sb[bb.id] = ab.class;
        else sb[ab.tag.id] = ab.class;
      let {
        scope: kb,
        all: Wb = null
      } = cb || {};
      return {
        style: bb => {
          let cb = Wb;
          for (let kb of bb)
            for (let bb of kb.set) {
              let kb = sb[bb.id];
              if (kb) {
                cb = cb ? cb + " " + kb : kb;
                break
              }
            }
          return cb
        },
        scope: kb
      }
    }

    function Xb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.length,
        ab = new nb(kb, Array.isArray(cb) ? cb : [cb], sb);
      ab.highlightRange(bb.cursor(), kb, Wb, "", ab.highlighters), ab.flush(Wb)
    }
    fb.empty = new fb([], 2, null);
    class nb {
      constructor(bb, cb, sb) {
        this.at = bb, this.highlighters = cb, this.span = sb, this.class = ""
      }
      startSpan(bb, cb) {
        cb != this.class && (this.flush(bb), bb > this.at && (this.at = bb), this.class = cb)
      }
      flush(bb) {
        bb > this.at && this.class && this.span(this.at, bb, this.class)
      }
      highlightRange(bb, cb, sb, Wb, ab) {
        let {
          type: Tb,
          from: Ub,
          to: Ib
        } = bb;
        if (Ub >= sb || Ib <= cb) return;
        Tb.isTop && (ab = this.highlighters.filter((bb => !bb.scope || bb.scope(Tb))));
        let Mb = Wb,
          Xb = function(bb) {
            let cb = bb.type.prop(Hb);
            for (; cb && cb.context && !bb.matchContext(cb.context);) cb = cb.next;
            return cb || null
          }(bb) || fb.empty,
          nb = function(bb, cb) {
            let sb = null;
            for (let kb of bb) {
              let bb = kb.style(cb);
              bb && (sb = sb ? sb + " " + bb : bb)
            }
            return sb
          }(ab, Xb.tags);
        if (nb && (Mb && (Mb += " "), Mb += nb, 1 == Xb.mode && (Wb += (Wb ? " " : "") + nb)), this.startSpan(Math.max(cb, Ub), Mb), Xb.opaque) return;
        let mb = bb.tree && bb.tree.prop(kb.i.mounted);
        if (mb && mb.overlay) {
          let kb = bb.node.enter(mb.overlay[0].from + Ub, 1),
            Tb = this.highlighters.filter((bb => !bb.scope || bb.scope(mb.tree.type))),
            Hb = bb.firstChild();
          for (let fb = 0, Xb = Ub;; fb++) {
            let nb = fb < mb.overlay.length ? mb.overlay[fb] : null,
              lb = nb ? nb.from + Ub : Ib,
              Qb = Math.max(cb, Xb),
              eb = Math.min(sb, lb);
            if (Qb < eb && Hb)
              for (; bb.from < eb && (this.highlightRange(bb, Qb, eb, Wb, ab), this.startSpan(Math.min(eb, bb.to), Mb), !(bb.to >= lb) && bb.nextSibling()););
            if (!nb || lb > sb) break;
            Xb = nb.to + Ub, Xb > cb && (this.highlightRange(kb.cursor(), Math.max(cb, nb.from + Ub), Math.min(sb, Xb), "", Tb), this.startSpan(Math.min(sb, Xb), Mb))
          }
          Hb && bb.parent()
        } else if (bb.firstChild()) {
          mb && (Wb = "");
          do {
            if (!(bb.to <= cb)) {
              if (bb.from >= sb) break;
              this.highlightRange(bb, cb, sb, Wb, ab), this.startSpan(Math.min(sb, bb.to), Mb)
            }
          } while (bb.nextSibling());
          bb.parent()
        }
      }
    }
    const mb = ab.define,
      lb = mb(),
      Qb = mb(),
      eb = mb(Qb),
      Cb = mb(Qb),
      Nb = mb(),
      Vb = mb(Nb),
      Lb = mb(Nb),
      ub = mb(),
      Yb = mb(ub),
      hb = mb(),
      Jb = mb(),
      gb = mb(),
      Bb = mb(gb),
      tb = mb(),
      yb = {
        comment: lb,
        lineComment: mb(lb),
        blockComment: mb(lb),
        docComment: mb(lb),
        name: Qb,
        variableName: mb(Qb),
        typeName: eb,
        tagName: mb(eb),
        propertyName: Cb,
        attributeName: mb(Cb),
        className: mb(Qb),
        labelName: mb(Qb),
        namespace: mb(Qb),
        macroName: mb(Qb),
        literal: Nb,
        string: Vb,
        docString: mb(Vb),
        character: mb(Vb),
        attributeValue: mb(Vb),
        number: Lb,
        integer: mb(Lb),
        float: mb(Lb),
        bool: mb(Nb),
        regexp: mb(Nb),
        escape: mb(Nb),
        color: mb(Nb),
        url: mb(Nb),
        keyword: hb,
        self: mb(hb),
        null: mb(hb),
        atom: mb(hb),
        unit: mb(hb),
        modifier: mb(hb),
        operatorKeyword: mb(hb),
        controlKeyword: mb(hb),
        definitionKeyword: mb(hb),
        moduleKeyword: mb(hb),
        operator: Jb,
        derefOperator: mb(Jb),
        arithmeticOperator: mb(Jb),
        logicOperator: mb(Jb),
        bitwiseOperator: mb(Jb),
        compareOperator: mb(Jb),
        updateOperator: mb(Jb),
        definitionOperator: mb(Jb),
        typeOperator: mb(Jb),
        controlOperator: mb(Jb),
        punctuation: gb,
        separator: mb(gb),
        bracket: Bb,
        angleBracket: mb(Bb),
        squareBracket: mb(Bb),
        paren: mb(Bb),
        brace: mb(Bb),
        content: ub,
        heading: Yb,
        heading1: mb(Yb),
        heading2: mb(Yb),
        heading3: mb(Yb),
        heading4: mb(Yb),
        heading5: mb(Yb),
        heading6: mb(Yb),
        contentSeparator: mb(ub),
        list: mb(ub),
        quote: mb(ub),
        emphasis: mb(ub),
        strong: mb(ub),
        link: mb(ub),
        monospace: mb(ub),
        strikethrough: mb(ub),
        inserted: mb(),
        deleted: mb(),
        changed: mb(),
        invalid: mb(),
        meta: tb,
        documentMeta: mb(tb),
        annotation: mb(tb),
        processingInstruction: mb(tb),
        definition: ab.defineModifier("definition"),
        constant: ab.defineModifier("constant"),
        function: ab.defineModifier("function"),
        standard: ab.defineModifier("standard"),
        local: ab.defineModifier("local"),
        special: ab.defineModifier("special")
      };
    for (let Pb in yb) {
      let bb = yb[Pb];
      bb instanceof ab && (bb.name = Pb)
    }
    Mb([{
      tag: yb.link,
      class: "tok-link"
    }, {
      tag: yb.heading,
      class: "tok-heading"
    }, {
      tag: yb.emphasis,
      class: "tok-emphasis"
    }, {
      tag: yb.strong,
      class: "tok-strong"
    }, {
      tag: yb.keyword,
      class: "tok-keyword"
    }, {
      tag: yb.atom,
      class: "tok-atom"
    }, {
      tag: yb.bool,
      class: "tok-bool"
    }, {
      tag: yb.url,
      class: "tok-url"
    }, {
      tag: yb.labelName,
      class: "tok-labelName"
    }, {
      tag: yb.inserted,
      class: "tok-inserted"
    }, {
      tag: yb.deleted,
      class: "tok-deleted"
    }, {
      tag: yb.literal,
      class: "tok-literal"
    }, {
      tag: yb.string,
      class: "tok-string"
    }, {
      tag: yb.number,
      class: "tok-number"
    }, {
      tag: [yb.regexp, yb.escape, yb.special(yb.string)],
      class: "tok-string2"
    }, {
      tag: yb.variableName,
      class: "tok-variableName"
    }, {
      tag: yb.local(yb.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: yb.definition(yb.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: yb.special(yb.variableName),
      class: "tok-variableName2"
    }, {
      tag: yb.definition(yb.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: yb.typeName,
      class: "tok-typeName"
    }, {
      tag: yb.namespace,
      class: "tok-namespace"
    }, {
      tag: yb.className,
      class: "tok-className"
    }, {
      tag: yb.macroName,
      class: "tok-macroName"
    }, {
      tag: yb.propertyName,
      class: "tok-propertyName"
    }, {
      tag: yb.operator,
      class: "tok-operator"
    }, {
      tag: yb.comment,
      class: "tok-comment"
    }, {
      tag: yb.meta,
      class: "tok-meta"
    }, {
      tag: yb.invalid,
      class: "tok-invalid"
    }, {
      tag: yb.punctuation,
      class: "tok-punctuation"
    }])
  },
  40784: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ub.h,
      g: () => Tb.s,
      j: () => Tb.F,
      n: () => Tb.H,
      r: () => Ub.m,
      s: () => Ys,
      u: () => Ub.S,
      y: () => Ub.pb
    });
    var kb = sb(1362),
      Wb = sb(1356),
      ab = sb(64),
      Tb = sb(40738),
      Ub = sb(40744),
      Ib = sb(40763),
      Hb = sb(40767);

    function fb(bb, cb) {
      return sb => {
        let {
          state: kb,
          dispatch: Wb
        } = sb;
        if (kb.readOnly) return !1;
        let ab = bb(cb, kb);
        return !!ab && (Wb(kb.update(ab)), !0)
      }
    }
    const Mb = fb(eb, 0),
      Xb = fb(Qb, 0),
      nb = fb(((bb, cb) => Qb(bb, cb, function(bb) {
        let cb = [];
        for (let sb of bb.selection.uQ) {
          let kb = bb.doc.lineAt(sb.from),
            Wb = sb.to <= kb.to ? kb : bb.doc.lineAt(sb.to);
          Wb.from > kb.from && Wb.from == sb.to && (Wb = sb.to == kb.to + 1 ? kb : bb.doc.lineAt(sb.to - 1));
          let ab = cb.length - 1;
          ab >= 0 && cb[ab].to > kb.from ? cb[ab].to = Wb.to : cb.push({
            from: kb.from + /^\s*/.exec(kb.text)[0].length,
            to: Wb.to
          })
        }
        return cb
      }(cb))), 0);

    function mb(bb, cb) {
      let sb = bb.languageDataAt("commentTokens", cb, 1);
      return sb.length ? sb[0] : {}
    }
    const lb = 50;

    function Qb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cb.selection.uQ,
        kb = sb.map((bb => mb(cb, bb.from).block));
      if (!kb.every((bb => bb))) return null;
      let Wb = sb.map(((bb, sb) => function(bb, cb, sb, kb) {
        let Wb, ab, {
            open: Tb,
            close: Ub
          } = cb,
          Ib = bb.sliceDoc(sb - lb, sb),
          Hb = bb.sliceDoc(kb, kb + lb),
          fb = /\s*$/.exec(Ib)[0].length,
          Mb = /^\s*/.exec(Hb)[0].length,
          Xb = Ib.length - fb;
        if (Ib.slice(Xb - Tb.length, Xb) == Tb && Hb.slice(Mb, Mb + Ub.length) == Ub) return {
          open: {
            pos: sb - fb,
            margin: fb && 1
          },
          close: {
            pos: kb + Mb,
            margin: Mb && 1
          }
        };
        kb - sb <= 2 * lb ? Wb = ab = bb.sliceDoc(sb, kb) : (Wb = bb.sliceDoc(sb, sb + lb), ab = bb.sliceDoc(kb - lb, kb));
        let nb = /^\s*/.exec(Wb)[0].length,
          mb = /\s*$/.exec(ab)[0].length,
          Qb = ab.length - mb - Ub.length;
        return Wb.slice(nb, nb + Tb.length) == Tb && ab.slice(Qb, Qb + Ub.length) == Ub ? {
          open: {
            pos: sb + nb + Tb.length,
            margin: /\s/.test(Wb.charAt(nb + Tb.length)) ? 1 : 0
          },
          close: {
            pos: kb - mb - Ub.length,
            margin: /\s/.test(ab.charAt(Qb - 1)) ? 1 : 0
          }
        } : null
      }(cb, kb[sb], bb.from, bb.to)));
      if (2 != bb && !Wb.every((bb => bb))) return {
        changes: cb.changes(sb.map(((bb, cb) => Wb[cb] ? [] : [{
          from: bb.from,
          insert: kb[cb].open + " "
        }, {
          from: bb.to,
          insert: " " + kb[cb].close
        }])))
      };
      if (1 != bb && Wb.some((bb => bb))) {
        let bb = [];
        for (let cb, sb = 0; sb < Wb.length; sb++)
          if (cb = Wb[sb]) {
            let Wb = kb[sb],
              {
                open: ab,
                close: Tb
              } = cb;
            bb.push({
              from: ab.pos - Wb.open.length,
              to: ab.pos + ab.margin
            }, {
              from: Tb.pos - Tb.margin,
              to: Tb.pos + Wb.close.length
            })
          } return {
          changes: bb
        }
      }
      return null
    }

    function eb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cb.selection.uQ,
        kb = [],
        Wb = -1;
      bb: for (let {
          from: ab,
          to: Tb
        }
        of sb) {
        let bb, sb = kb.length,
          Ub = 1e9;
        for (let Ib = ab; Ib <= Tb;) {
          let sb = cb.doc.lineAt(Ib);
          if (void 0 == bb && (bb = mb(cb, sb.from).line, !bb)) continue bb;
          if (sb.from > Wb && (ab == Tb || Tb > sb.from)) {
            Wb = sb.from;
            let cb = /^\s*/.exec(sb.text)[0].length,
              ab = cb == sb.length,
              Tb = sb.text.slice(cb, cb + bb.length) == bb ? cb : -1;
            cb < sb.text.length && cb < Ub && (Ub = cb), kb.push({
              line: sb,
              comment: Tb,
              token: bb,
              indent: cb,
              empty: ab,
              single: !1
            })
          }
          Ib = sb.to + 1
        }
        if (Ub < 1e9)
          for (let cb = sb; cb < kb.length; cb++) kb[cb].indent < kb[cb].line.text.length && (kb[cb].indent = Ub);
        kb.length == sb + 1 && (kb[sb].single = !0)
      }
      if (2 != bb && kb.some((bb => bb.comment < 0 && (!bb.empty || bb.single)))) {
        let bb = [];
        for (let {
            line: cb,
            token: Wb,
            indent: ab,
            empty: Tb,
            single: Ub
          }
          of kb) !Ub && Tb || bb.push({
          from: cb.from + ab,
          insert: Wb + " "
        });
        let sb = cb.changes(bb);
        return {
          changes: sb,
          selection: cb.selection.map(sb, 1)
        }
      }
      if (1 != bb && kb.some((bb => bb.comment >= 0))) {
        let bb = [];
        for (let {
            line: cb,
            comment: sb,
            token: Wb
          }
          of kb)
          if (sb >= 0) {
            let kb = cb.from + sb,
              ab = kb + Wb.length;
            " " == cb.text[ab - cb.from] && ab++, bb.push({
              from: kb,
              to: ab
            })
          } return {
          changes: bb
        }
      }
      return null
    }
    const Cb = Tb.e.define(),
      Nb = Tb.e.define(),
      Vb = Tb.n.define(),
      Lb = Tb.n.define({
        combine: bb => (0, Tb.X)(bb, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (bb, cb) => cb
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (bb, cb) => (sb, kb) => bb(sb, kb) || cb(sb, kb)
        })
      }),
      ub = Tb.H.define({
        create: () => zb.empty,
        update(bb, cb) {
          let sb = cb.state.facet(Lb),
            kb = cb.annotation(Cb);
          if (kb) {
            let Wb = tb.fromTransaction(cb, kb.selection),
              ab = kb.side,
              Tb = 0 == ab ? bb.undone : bb.done;
            return Tb = Wb ? yb(Tb, Tb.length, sb.minDepth, Wb) : ib(Tb, cb.startState.selection), new zb(0 == ab ? kb.rest : Tb, 0 == ab ? Tb : kb.rest)
          }
          let Wb = cb.annotation(Nb);
          if ("full" != Wb && "before" != Wb || (bb = bb.isolate()), !1 === cb.annotation(Tb.O.addToHistory)) return cb.changes.empty ? bb : bb.addMapping(cb.changes.desc);
          let ab = tb.fromTransaction(cb),
            Ub = cb.annotation(Tb.O.time),
            Ib = cb.annotation(Tb.O.userEvent);
          return ab ? bb = bb.addChanges(ab, Ub, Ib, sb, cb) : cb.selection && (bb = bb.addSelection(cb.startState.selection, Ub, Ib, sb.newGroupDelay)), "full" != Wb && "after" != Wb || (bb = bb.isolate()), bb
        },
        toJSON: bb => ({
          done: bb.done.map((bb => bb.toJSON())),
          undone: bb.undone.map((bb => bb.toJSON()))
        }),
        fromJSON: bb => new zb(bb.done.map(tb.fromJSON), bb.undone.map(tb.fromJSON))
      });

    function Yb(bb, cb) {
      return function(sb) {
        let {
          state: kb,
          dispatch: Wb
        } = sb;
        if (!cb && kb.readOnly) return !1;
        let ab = kb.field(ub, !1);
        if (!ab) return !1;
        let Tb = ab.pop(bb, kb, cb);
        return !!Tb && (Wb(Tb), !0)
      }
    }
    const hb = Yb(0, !1),
      Jb = Yb(1, !1),
      gb = Yb(0, !0),
      Bb = Yb(1, !0);
    class tb {
      constructor(bb, cb, sb, kb, Wb) {
        this.changes = bb, this.effects = cb, this.mapped = sb, this.startSelection = kb, this.selectionsAfter = Wb
      }
      setSelAfter(bb) {
        return new tb(this.changes, this.effects, this.mapped, this.startSelection, bb)
      }
      toJSON() {
        var bb, cb, sb;
        return {
          changes: null === (bb = this.changes) || void 0 === bb ? void 0 : bb.toJSON(),
          mapped: null === (cb = this.mapped) || void 0 === cb ? void 0 : cb.toJSON(),
          startSelection: null === (sb = this.startSelection) || void 0 === sb ? void 0 : sb.toJSON(),
          selectionsAfter: this.selectionsAfter.map((bb => bb.toJSON()))
        }
      }
      static fromJSON(bb) {
        return new tb(bb.changes && Tb.ChangeSet.fromJSON(bb.changes), [], bb.mapped && Tb.g.fromJSON(bb.mapped), bb.startSelection && Tb.j.fromJSON(bb.startSelection), bb.selectionsAfter.map(Tb.j.fromJSON))
      }
      static fromTransaction(bb, cb) {
        let sb = Db;
        for (let kb of bb.startState.facet(Vb)) {
          let cb = kb(bb);
          cb.length && (sb = sb.concat(cb))
        }
        return !sb.length && bb.changes.empty ? null : new tb(bb.changes.invert(bb.startState.doc), sb, void 0, cb || bb.startState.selection, Db)
      }
      static selection(bb) {
        return new tb(void 0, Db, void 0, void 0, bb)
      }
    }

    function yb(bb, cb, sb, kb) {
      let Wb = cb + 1 > sb + 20 ? cb - sb - 1 : 0,
        ab = bb.slice(Wb, cb);
      return ab.push(kb), ab
    }

    function Pb(bb, cb) {
      return bb.length ? cb.length ? bb.concat(cb) : bb : cb
    }
    const Db = [],
      Eb = 200;

    function ib(bb, cb) {
      if (bb.length) {
        let sb = bb[bb.length - 1],
          kb = sb.selectionsAfter.slice(Math.max(0, sb.selectionsAfter.length - Eb));
        return kb.length && kb[kb.length - 1].eq(cb) ? bb : (kb.push(cb), yb(bb, bb.length - 1, 1e9, sb.setSelAfter(kb)))
      }
      return [tb.selection([cb])]
    }

    function Ob(bb) {
      let cb = bb[bb.length - 1],
        sb = bb.slice();
      return sb[bb.length - 1] = cb.setSelAfter(cb.selectionsAfter.slice(0, cb.selectionsAfter.length - 1)), sb
    }

    function Gb(bb, cb) {
      if (!bb.length) return bb;
      let sb = bb.length,
        kb = Db;
      for (; sb;) {
        let Wb = Kb(bb[sb - 1], cb, kb);
        if (Wb.changes && !Wb.changes.empty || Wb.effects.length) {
          let cb = bb.slice(0, sb);
          return cb[sb - 1] = Wb, cb
        }
        cb = Wb.mapped, sb--, kb = Wb.selectionsAfter
      }
      return kb.length ? [tb.selection(kb)] : Db
    }

    function Kb(bb, cb, sb) {
      let kb = Pb(bb.selectionsAfter.length ? bb.selectionsAfter.map((bb => bb.map(cb))) : Db, sb);
      if (!bb.changes) return tb.selection(kb);
      let Wb = bb.changes.map(cb),
        ab = cb.mapDesc(bb.changes, !0),
        Ub = bb.mapped ? bb.mapped.composeDesc(ab) : ab;
      return new tb(Wb, Tb.F.mapEffects(bb.effects, cb), Ub, bb.startSelection.map(ab), kb)
    }
    const Zb = /^(input\.type|delete)($|\.)/;
    class zb {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = bb, this.undone = cb, this.prevTime = sb, this.prevUserEvent = kb
      }
      isolate() {
        return this.prevTime ? new zb(this.done, this.undone) : this
      }
      addChanges(bb, cb, sb, kb, Wb) {
        let ab = this.done,
          Ub = ab[ab.length - 1];
        return ab = Ub && Ub.changes && !Ub.changes.empty && bb.changes && (!sb || Zb.test(sb)) && (!Ub.selectionsAfter.length && cb - this.prevTime < kb.newGroupDelay && kb.joinToEvent(Wb, function(bb, cb) {
          let sb = [],
            kb = !1;
          return bb.iterChangedRanges(((bb, cb) => sb.push(bb, cb))), cb.iterChangedRanges(((bb, cb, Wb, ab) => {
            for (let Tb = 0; Tb < sb.length;) {
              let bb = sb[Tb++],
                cb = sb[Tb++];
              ab >= bb && Wb <= cb && (kb = !0)
            }
          })), kb
        }(Ub.changes, bb.changes)) || "input.type.compose" == sb) ? yb(ab, ab.length - 1, kb.minDepth, new tb(bb.changes.compose(Ub.changes), Pb(Tb.F.mapEffects(bb.effects, Ub.changes), Ub.effects), Ub.mapped, Ub.startSelection, Db)) : yb(ab, ab.length, kb.minDepth, bb), new zb(ab, Db, cb, sb)
      }
      addSelection(bb, cb, sb, kb) {
        let Wb = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Db;
        return Wb.length > 0 && cb - this.prevTime < kb && sb == this.prevUserEvent && sb && /^select($|\.)/.test(sb) && (ab = Wb[Wb.length - 1], Tb = bb, ab.uQ.length == Tb.uQ.length && 0 === ab.uQ.filter(((bb, cb) => bb.empty != Tb.uQ[cb].empty)).length) ? this : new zb(ib(this.done, bb), this.undone, cb, sb);
        var ab, Tb
      }
      addMapping(bb) {
        return new zb(Gb(this.done, bb), Gb(this.undone, bb), this.prevTime, this.prevUserEvent)
      }
      pop(bb, cb, sb) {
        let kb = 0 == bb ? this.done : this.undone;
        if (0 == kb.length) return null;
        let Wb = kb[kb.length - 1],
          ab = Wb.selectionsAfter[0] || (Wb.startSelection ? Wb.startSelection.map(Wb.changes.invertedDesc, 1) : cb.selection);
        if (sb && Wb.selectionsAfter.length) return cb.update({
          selection: Wb.selectionsAfter[Wb.selectionsAfter.length - 1],
          annotations: Cb.of({
            side: bb,
            rest: Ob(kb),
            selection: ab
          }),
          userEvent: 0 == bb ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (Wb.changes) {
          let sb = 1 == kb.length ? Db : kb.slice(0, kb.length - 1);
          return Wb.mapped && (sb = Gb(sb, Wb.mapped)), cb.update({
            changes: Wb.changes,
            selection: Wb.startSelection,
            effects: Wb.effects,
            annotations: Cb.of({
              side: bb,
              rest: sb,
              selection: ab
            }),
            filter: !1,
            userEvent: 0 == bb ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    zb.empty = new zb(Db, Db);
    const qb = [{
      key: "Mod-z",
      run: hb,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: Jb,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: Jb,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: gb,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Bb,
      preventDefault: !0
    }];

    function db(bb, cb) {
      return Tb.j.create(bb.uQ.map(cb), bb.mainIndex)
    }

    function Ab(bb, cb) {
      return bb.update({
        selection: cb,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function wb(bb, cb) {
      let {
        state: sb,
        dispatch: kb
      } = bb, Wb = db(sb.selection, cb);
      return !Wb.eq(sb.selection, !0) && (kb(Ab(sb, Wb)), !0)
    }

    function rb(bb, cb) {
      return Tb.j.cursor(cb ? bb.to : bb.from)
    }

    function ob(bb, cb) {
      return wb(bb, (sb => sb.empty ? bb.moveByChar(sb, cb) : rb(sb, cb)))
    }

    function Sb(bb) {
      return bb.textDirectionAt(bb.state.selection.main.head) == Ub.g.LTR
    }
    const Rb = bb => ob(bb, !Sb(bb)),
      vb = bb => ob(bb, Sb(bb));

    function Fb(bb, cb) {
      return wb(bb, (sb => sb.empty ? bb.moveByGroup(sb, cb) : rb(sb, cb)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function xb(bb, cb, sb) {
      if (cb.type.prop(sb)) return !0;
      let kb = cb.to - cb.from;
      return kb && (kb > 2 || /[^\s,.;:]/.test(bb.sliceDoc(cb.from, cb.to))) || cb.firstChild
    }

    function jb(bb, cb, sb) {
      let kb, Wb, ab = (0, Ib.lb)(bb).resolveInner(cb.head),
        Ub = sb ? Hb.i.closedBy : Hb.i.openedBy;
      for (let Tb = cb.head;;) {
        let cb = sb ? ab.childAfter(Tb) : ab.childBefore(Tb);
        if (!cb) break;
        xb(bb, cb, Ub) ? ab = cb : Tb = sb ? cb.to : cb.from
      }
      return Wb = ab.type.prop(Ub) && (kb = sb ? (0, Ib.eb)(bb, ab.from, 1) : (0, Ib.eb)(bb, ab.to, -1)) && kb.matched ? sb ? kb.end.to : kb.end.from : sb ? ab.to : ab.from, Tb.j.cursor(Wb, sb ? -1 : 1)
    }

    function pb(bb, cb) {
      return wb(bb, (sb => {
        if (!sb.empty) return rb(sb, cb);
        let kb = bb.moveVertically(sb, cb);
        return kb.head != sb.head ? kb : bb.moveToLineBoundary(sb, cb)
      }))
    }
    const bc = bb => pb(bb, !1),
      cc = bb => pb(bb, !0);

    function sc(bb) {
      let cb, sb = bb.scrollDOM.clientHeight < bb.scrollDOM.scrollHeight - 2,
        kb = 0,
        Wb = 0;
      if (sb) {
        for (let cb of bb.state.facet(Ub.h.scrollMargins)) {
          let sb = cb(bb);
          (null === sb || void 0 === sb ? void 0 : sb.top) && (kb = Math.max(null === sb || void 0 === sb ? void 0 : sb.top, kb)), (null === sb || void 0 === sb ? void 0 : sb.bottom) && (Wb = Math.max(null === sb || void 0 === sb ? void 0 : sb.bottom, Wb))
        }
        cb = bb.scrollDOM.clientHeight - kb - Wb
      } else cb = (bb.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: kb,
        marginBottom: Wb,
        selfScroll: sb,
        height: Math.max(bb.defaultLineHeight, cb - 5)
      }
    }

    function kc(bb, cb) {
      let sb, kb = sc(bb),
        {
          state: Wb
        } = bb,
        ab = db(Wb.selection, (sb => sb.empty ? bb.moveVertically(sb, cb, kb.height) : rb(sb, cb)));
      if (ab.eq(Wb.selection)) return !1;
      if (kb.selfScroll) {
        let cb = bb.coordsAtPos(Wb.selection.main.head),
          Tb = bb.scrollDOM.getBoundingClientRect(),
          Ib = Tb.top + kb.marginTop,
          Hb = Tb.bottom - kb.marginBottom;
        cb && cb.top > Ib && cb.bottom < Hb && (sb = Ub.h.scrollIntoView(ab.main.head, {
          y: "start",
          yMargin: cb.top - Ib
        }))
      }
      return bb.dispatch(Ab(Wb, ab), {
        effects: sb
      }), !0
    }
    const Wc = bb => kc(bb, !1),
      ac = bb => kc(bb, !0);

    function Tc(bb, cb, sb) {
      let kb = bb.lineBlockAt(cb.head),
        Wb = bb.moveToLineBoundary(cb, sb);
      if (Wb.head == cb.head && Wb.head != (sb ? kb.to : kb.from) && (Wb = bb.moveToLineBoundary(cb, sb, !1)), !sb && Wb.head == kb.from && kb.length) {
        let sb = /^\s*/.exec(bb.state.sliceDoc(kb.from, Math.min(kb.from + 100, kb.to)))[0].length;
        sb && cb.head != kb.from + sb && (Wb = Tb.j.cursor(kb.from + sb))
      }
      return Wb
    }

    function Uc(bb, cb, sb) {
      let kb = !1,
        Wb = db(bb.selection, (cb => {
          let Wb = (0, Ib.eb)(bb, cb.head, -1) || (0, Ib.eb)(bb, cb.head, 1) || cb.head > 0 && (0, Ib.eb)(bb, cb.head - 1, 1) || cb.head < bb.doc.length && (0, Ib.eb)(bb, cb.head + 1, -1);
          if (!Wb || !Wb.end) return cb;
          kb = !0;
          let ab = Wb.start.from == cb.head ? Wb.end.to : Wb.end.from;
          return sb ? Tb.j.range(cb.anchor, ab) : Tb.j.cursor(ab)
        }));
      return !!kb && (cb(Ab(bb, Wb)), !0)
    }

    function Ic(bb, cb) {
      let sb = db(bb.state.selection, (bb => {
        let sb = cb(bb);
        return Tb.j.range(bb.anchor, sb.head, sb.goalColumn, sb.bidiLevel || void 0, sb.assoc)
      }));
      return !sb.eq(bb.state.selection) && (bb.dispatch(Ab(bb.state, sb)), !0)
    }

    function Hc(bb, cb) {
      return Ic(bb, (sb => bb.moveByChar(sb, cb)))
    }
    const fc = bb => Hc(bb, !Sb(bb)),
      Mc = bb => Hc(bb, Sb(bb));

    function Xc(bb, cb) {
      return Ic(bb, (sb => bb.moveByGroup(sb, cb)))
    }

    function nc(bb, cb) {
      return Ic(bb, (sb => bb.moveVertically(sb, cb)))
    }
    const mc = bb => nc(bb, !1),
      lc = bb => nc(bb, !0);

    function Qc(bb, cb) {
      return Ic(bb, (sb => bb.moveVertically(sb, cb, sc(bb).height)))
    }
    const ec = bb => Qc(bb, !1),
      Cc = bb => Qc(bb, !0),
      Nc = bb => {
        let {
          state: cb,
          dispatch: sb
        } = bb;
        return sb(Ab(cb, {
          anchor: 0
        })), !0
      },
      Vc = bb => {
        let {
          state: cb,
          dispatch: sb
        } = bb;
        return sb(Ab(cb, {
          anchor: cb.doc.length
        })), !0
      },
      Lc = bb => {
        let {
          state: cb,
          dispatch: sb
        } = bb;
        return sb(Ab(cb, {
          anchor: cb.selection.main.anchor,
          head: 0
        })), !0
      },
      uc = bb => {
        let {
          state: cb,
          dispatch: sb
        } = bb;
        return sb(Ab(cb, {
          anchor: cb.selection.main.anchor,
          head: cb.doc.length
        })), !0
      };

    function Yc(bb, cb) {
      let {
        state: sb
      } = bb, kb = sb.selection, Wb = sb.selection.uQ.slice();
      for (let ab of sb.selection.uQ) {
        let kb = sb.doc.lineAt(ab.head);
        if (cb ? kb.to < bb.state.doc.length : kb.from > 0)
          for (let sb = ab;;) {
            let ab = bb.moveVertically(sb, cb);
            if (ab.head < kb.from || ab.head > kb.to) {
              Wb.some((bb => bb.head == ab.head)) || Wb.push(ab);
              break
            }
            if (ab.head == sb.head) break;
            sb = ab
          }
      }
      return Wb.length != kb.uQ.length && (bb.dispatch(Ab(sb, Tb.j.create(Wb, Wb.length - 1))), !0)
    }

    function hc(bb, cb) {
      if (bb.state.readOnly) return !1;
      let sb = "delete.selection",
        {
          state: kb
        } = bb,
        Wb = kb.changeByRange((kb => {
          let {
            from: Wb,
            to: ab
          } = kb;
          if (Wb == ab) {
            let Tb = cb(kb);
            Tb < Wb ? (sb = "delete.backward", Tb = Jc(bb, Tb, !1)) : Tb > Wb && (sb = "delete.forward", Tb = Jc(bb, Tb, !0)), Wb = Math.min(Wb, Tb), ab = Math.max(ab, Tb)
          } else Wb = Jc(bb, Wb, !1), ab = Jc(bb, ab, !0);
          return Wb == ab ? {
            range: kb
          } : {
            changes: {
              from: Wb,
              to: ab
            },
            range: Tb.j.cursor(Wb, Wb < kb.head ? -1 : 1)
          }
        }));
      return !Wb.changes.empty && (bb.dispatch(kb.update(Wb, {
        scrollIntoView: !0,
        userEvent: sb,
        effects: "delete.selection" == sb ? Ub.h.announce.of(kb.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function Jc(bb, cb, sb) {
      if (bb instanceof Ub.h)
        for (let kb of bb.state.facet(Ub.h.atomicRanges).map((cb => cb(bb)))) kb.between(cb, cb, ((bb, kb) => {
          bb < cb && kb > cb && (cb = sb ? kb : bb)
        }));
      return cb
    }
    const gc = (bb, cb, sb) => hc(bb, (kb => {
        let Wb, ab, Ub = kb.from,
          {
            state: Hb
          } = bb,
          fb = Hb.doc.lineAt(Ub);
        if (sb && !cb && Ub > fb.from && Ub < fb.from + 200 && !/[^ \t]/.test(Wb = fb.text.slice(0, Ub - fb.from))) {
          if ("\t" == Wb[Wb.length - 1]) return Ub - 1;
          let bb = (0, Tb.Z)(Wb, Hb.tabSize) % (0, Ib.T)(Hb) || (0, Ib.T)(Hb);
          for (let cb = 0; cb < bb && " " == Wb[Wb.length - 1 - cb]; cb++) Ub--;
          ab = Ub
        } else ab = (0, Tb._)(fb.text, Ub - fb.from, cb, cb) + fb.from, ab == Ub && fb.number != (cb ? Hb.doc.lines : 1) ? ab += cb ? 1 : -1 : !cb && /[\ufe00-\ufe0f]/.test(fb.text.slice(ab - fb.from, Ub - fb.from)) && (ab = (0, Tb._)(fb.text, ab - fb.from, !1, !1) + fb.from);
        return ab
      })),
      Bc = bb => gc(bb, !1, !0),
      tc = bb => gc(bb, !0, !1),
      yc = (bb, cb) => hc(bb, (sb => {
        let kb = sb.head,
          {
            state: Wb
          } = bb,
          ab = Wb.doc.lineAt(kb),
          Ub = Wb.charCategorizer(kb);
        for (let bb = null;;) {
          if (kb == (cb ? ab.to : ab.from)) {
            kb == sb.head && ab.number != (cb ? Wb.doc.lines : 1) && (kb += cb ? 1 : -1);
            break
          }
          let Ib = (0, Tb._)(ab.text, kb - ab.from, cb) + ab.from,
            Hb = ab.text.slice(Math.min(kb, Ib) - ab.from, Math.max(kb, Ib) - ab.from),
            fb = Ub(Hb);
          if (null != bb && fb != bb) break;
          " " == Hb && kb == sb.head || (bb = fb), kb = Ib
        }
        return kb
      })),
      Pc = bb => yc(bb, !1);

    function Dc(bb) {
      let cb = [],
        sb = -1;
      for (let kb of bb.selection.uQ) {
        let Wb = bb.doc.lineAt(kb.from),
          ab = bb.doc.lineAt(kb.to);
        if (kb.empty || kb.to != ab.from || (ab = bb.doc.lineAt(kb.to - 1)), sb >= Wb.number) {
          let bb = cb[cb.length - 1];
          bb.to = ab.to, bb.uQ.push(kb)
        } else cb.push({
          from: Wb.from,
          to: ab.to,
          uQ: [kb]
        });
        sb = ab.number + 1
      }
      return cb
    }

    function Ec(bb, cb, sb) {
      if (bb.readOnly) return !1;
      let kb = [],
        Wb = [];
      for (let ab of Dc(bb)) {
        if (sb ? ab.to == bb.doc.length : 0 == ab.from) continue;
        let cb = bb.doc.lineAt(sb ? ab.to + 1 : ab.from - 1),
          Ub = cb.length + 1;
        if (sb) {
          kb.push({
            from: ab.to,
            to: cb.to
          }, {
            from: ab.from,
            insert: cb.text + bb.lineBreak
          });
          for (let cb of ab.uQ) Wb.push(Tb.j.range(Math.min(bb.doc.length, cb.anchor + Ub), Math.min(bb.doc.length, cb.head + Ub)))
        } else {
          kb.push({
            from: cb.from,
            to: ab.from
          }, {
            from: ab.to,
            insert: bb.lineBreak + cb.text
          });
          for (let bb of ab.uQ) Wb.push(Tb.j.range(bb.anchor - Ub, bb.head - Ub))
        }
      }
      return !!kb.length && (cb(bb.update({
        changes: kb,
        scrollIntoView: !0,
        selection: Tb.j.create(Wb, bb.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function ic(bb, cb, sb) {
      if (bb.readOnly) return !1;
      let kb = [];
      for (let ab of Dc(bb)) sb ? kb.push({
        from: ab.from,
        insert: bb.doc.slice(ab.from, ab.to) + bb.lineBreak
      }) : kb.push({
        from: ab.to,
        insert: bb.lineBreak + bb.doc.slice(ab.from, ab.to)
      });
      let Wb = bb.changes(kb);
      return cb(bb.update({
        changes: Wb,
        selection: bb.selection.map(Wb, sb ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const Oc = Gc(!1);

    function Gc(bb) {
      return cb => {
        let {
          state: sb,
          dispatch: kb
        } = cb;
        if (sb.readOnly) return !1;
        let Wb = sb.changeByRange((cb => {
          let {
            from: kb,
            to: Wb
          } = cb, ab = sb.doc.lineAt(kb), Ub = !bb && kb == Wb && function(bb, cb) {
            if (/\(\)|\[\]|\{\}/.test(bb.sliceDoc(cb - 1, cb + 1))) return {
              from: cb,
              to: cb
            };
            let sb, kb = (0, Ib.lb)(bb).resolveInner(cb),
              Wb = kb.childBefore(cb),
              ab = kb.childAfter(cb);
            return Wb && ab && Wb.to <= cb && ab.from >= cb && (sb = Wb.type.prop(Hb.i.closedBy)) && sb.indexOf(ab.name) > -1 && bb.doc.lineAt(Wb.to).from == bb.doc.lineAt(ab.from).from && !/\S/.test(bb.sliceDoc(Wb.to, ab.from)) ? {
              from: Wb.to,
              to: ab.from
            } : null
          }(sb, kb);
          bb && (kb = Wb = (Wb <= ab.to ? ab : sb.doc.lineAt(Wb)).to);
          let fb = new Ib.h(sb, {
              simulateBreak: kb,
              simulateDoubleBreak: !!Ub
            }),
            Mb = (0, Ib.X)(fb, kb);
          for (null == Mb && (Mb = (0, Tb.Z)(/^\s*/.exec(sb.doc.lineAt(kb).text)[0], sb.tabSize)); Wb < ab.to && /\s/.test(ab.text[Wb - ab.from]);) Wb++;
          Ub ? ({
            from: kb,
            to: Wb
          } = Ub) : kb > ab.from && kb < ab.from + 100 && !/\S/.test(ab.text.slice(0, kb)) && (kb = ab.from);
          let Xb = ["", (0, Ib.bb)(sb, Mb)];
          return Ub && Xb.push((0, Ib.bb)(sb, fb.lineIndent(ab.from, -1))), {
            changes: {
              from: kb,
              to: Wb,
              insert: Tb.L.of(Xb)
            },
            range: Tb.j.cursor(kb + 1 + Xb[1].length)
          }
        }));
        return kb(sb.update(Wb, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function Kc(bb, cb) {
      let sb = -1;
      return bb.changeByRange((kb => {
        let Wb = [];
        for (let Tb = kb.from; Tb <= kb.to;) {
          let ab = bb.doc.lineAt(Tb);
          ab.number > sb && (kb.empty || kb.to > ab.from) && (cb(ab, Wb, kb), sb = ab.number), Tb = ab.to + 1
        }
        let ab = bb.changes(Wb);
        return {
          changes: Wb,
          range: Tb.j.range(ab.mapPos(kb.anchor, 1), ab.mapPos(kb.head, 1))
        }
      }))
    }
    const Zc = bb => {
        let {
          state: cb,
          dispatch: sb
        } = bb;
        return !cb.readOnly && (sb(cb.update(Kc(cb, ((bb, sb) => {
          sb.push({
            from: bb.from,
            insert: cb.facet(Ib.db)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      zc = bb => {
        let {
          state: cb,
          dispatch: sb
        } = bb;
        return !cb.readOnly && (sb(cb.update(Kc(cb, ((bb, sb) => {
          let kb = /^\s*/.exec(bb.text)[0];
          if (!kb) return;
          let Wb = (0, Tb.Z)(kb, cb.tabSize),
            ab = 0,
            Ub = (0, Ib.bb)(cb, Math.max(0, Wb - (0, Ib.T)(cb)));
          for (; ab < kb.length && ab < Ub.length && kb.charCodeAt(ab) == Ub.charCodeAt(ab);) ab++;
          sb.push({
            from: bb.from + ab,
            to: bb.from + kb.length,
            insert: Ub.slice(ab)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      qc = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: bb => wb(bb, (cb => jb(bb.state, cb, !Sb(bb)))),
        shift: bb => Ic(bb, (cb => jb(bb.state, cb, !Sb(bb))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: bb => wb(bb, (cb => jb(bb.state, cb, Sb(bb)))),
        shift: bb => Ic(bb, (cb => jb(bb.state, cb, Sb(bb))))
      }, {
        key: "Alt-ArrowUp",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb;
          return Ec(cb, sb, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb;
          return ic(cb, sb, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb;
          return Ec(cb, sb, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb;
          return ic(cb, sb, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: bb => Yc(bb, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: bb => Yc(bb, !0)
      }, {
        key: "Escape",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb, kb = cb.selection, Wb = null;
          return kb.uQ.length > 1 ? Wb = Tb.j.create([kb.main]) : kb.main.empty || (Wb = Tb.j.create([Tb.j.cursor(kb.main.head)])), !!Wb && (sb(Ab(cb, Wb)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Gc(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb, kb = Dc(cb).map((bb => {
            let {
              from: sb,
              to: kb
            } = bb;
            return Tb.j.range(sb, Math.min(kb + 1, cb.doc.length))
          }));
          return sb(cb.update({
            selection: Tb.j.create(kb),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb, kb = db(cb.selection, (bb => {
            let sb = (0, Ib.lb)(cb),
              kb = sb.resolveStack(bb.from, 1);
            if (bb.empty) {
              let cb = sb.resolveStack(bb.from, -1);
              cb.node.from >= kb.node.from && cb.node.to <= kb.node.to && (kb = cb)
            }
            for (let cb = kb; cb; cb = cb.next) {
              let {
                node: sb
              } = cb;
              if ((sb.from < bb.from && sb.to >= bb.to || sb.to > bb.to && sb.from <= bb.from) && cb.next) return Tb.j.range(sb.to, sb.from)
            }
            return bb
          }));
          return !kb.eq(cb.selection) && (sb(Ab(cb, kb)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: zc
      }, {
        key: "Mod-]",
        run: Zc
      }, {
        key: "Mod-Alt-\\",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb;
          if (cb.readOnly) return !1;
          let kb = Object.create(null),
            Wb = new Ib.h(cb, {
              overrideIndentation: bb => {
                let cb = kb[bb];
                return null == cb ? -1 : cb
              }
            }),
            ab = Kc(cb, ((bb, sb, ab) => {
              let Tb = (0, Ib.X)(Wb, bb.from);
              if (null == Tb) return;
              /\S/.test(bb.text) || (Tb = 0);
              let Ub = /^\s*/.exec(bb.text)[0],
                Hb = (0, Ib.bb)(cb, Tb);
              (Ub != Hb || ab.from < bb.from + Ub.length) && (kb[bb.from] = Tb, sb.push({
                from: bb.from,
                to: bb.from + Ub.length,
                insert: Hb
              }))
            }));
          return ab.changes.empty || sb(cb.update(ab, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: bb => {
          if (bb.state.readOnly) return !1;
          let {
            state: cb
          } = bb, sb = cb.changes(Dc(cb).map((bb => {
            let {
              from: sb,
              to: kb
            } = bb;
            return sb > 0 ? sb-- : kb < cb.doc.length && kb++, {
              from: sb,
              to: kb
            }
          }))), kb = db(cb.selection, (cb => {
            let sb;
            if (bb.lineWrapping) {
              let kb = bb.lineBlockAt(cb.head),
                Wb = bb.coordsAtPos(cb.head, cb.assoc || 1);
              Wb && (sb = kb.bottom + bb.documentTop - Wb.bottom + bb.defaultLineHeight / 2)
            }
            return bb.moveVertically(cb, !0, sb)
          })).map(sb);
          return bb.dispatch({
            changes: sb,
            selection: kb,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb;
          return Uc(cb, sb, !1)
        }
      }, {
        key: "Mod-/",
        run: bb => {
          let {
            state: cb
          } = bb, sb = cb.doc.lineAt(cb.selection.main.from), kb = mb(bb.state, sb.from);
          return kb.line ? Mb(bb) : !!kb.block && nb(bb)
        }
      }, {
        key: "Alt-A",
        run: Xb
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: bb => (bb.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: Rb,
        shift: fc,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: bb => Fb(bb, !Sb(bb)),
        shift: bb => Xc(bb, !Sb(bb)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: bb => wb(bb, (cb => Tc(bb, cb, !Sb(bb)))),
        shift: bb => Ic(bb, (cb => Tc(bb, cb, !Sb(bb)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: vb,
        shift: Mc,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: bb => Fb(bb, Sb(bb)),
        shift: bb => Xc(bb, Sb(bb)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: bb => wb(bb, (cb => Tc(bb, cb, Sb(bb)))),
        shift: bb => Ic(bb, (cb => Tc(bb, cb, Sb(bb)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: bc,
        shift: mc,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: Nc,
        shift: Lc
      }, {
        mac: "Ctrl-ArrowUp",
        run: Wc,
        shift: ec
      }, {
        key: "ArrowDown",
        run: cc,
        shift: lc,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: Vc,
        shift: uc
      }, {
        mac: "Ctrl-ArrowDown",
        run: ac,
        shift: Cc
      }, {
        key: "PageUp",
        run: Wc,
        shift: ec
      }, {
        key: "PageDown",
        run: ac,
        shift: Cc
      }, {
        key: "Home",
        run: bb => wb(bb, (cb => Tc(bb, cb, !1))),
        shift: bb => Ic(bb, (cb => Tc(bb, cb, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: Nc,
        shift: Lc
      }, {
        key: "End",
        run: bb => wb(bb, (cb => Tc(bb, cb, !0))),
        shift: bb => Ic(bb, (cb => Tc(bb, cb, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: Vc,
        shift: uc
      }, {
        key: "Enter",
        run: Oc,
        shift: Oc
      }, {
        key: "Mod-a",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb;
          return sb(cb.update({
            selection: {
              anchor: 0,
              head: cb.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: Bc,
        shift: Bc,
        preventDefault: !0
      }, {
        key: "Delete",
        run: tc,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: Pc,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: bb => yc(bb, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: bb => hc(bb, (cb => {
          let sb = bb.moveToLineBoundary(cb, !1).head;
          return cb.head > sb ? sb : Math.max(0, cb.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: bb => hc(bb, (cb => {
          let sb = bb.moveToLineBoundary(cb, !0).head;
          return cb.head < sb ? sb : Math.min(bb.state.doc.length, cb.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: Rb,
        shift: fc,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: vb,
        shift: Mc
      }, {
        key: "Ctrl-p",
        run: bc,
        shift: mc
      }, {
        key: "Ctrl-n",
        run: cc,
        shift: lc
      }, {
        key: "Ctrl-a",
        run: bb => wb(bb, (cb => Tb.j.cursor(bb.lineBlockAt(cb.head).from, 1))),
        shift: bb => Ic(bb, (cb => Tb.j.cursor(bb.lineBlockAt(cb.head).from)))
      }, {
        key: "Ctrl-e",
        run: bb => wb(bb, (cb => Tb.j.cursor(bb.lineBlockAt(cb.head).to, -1))),
        shift: bb => Ic(bb, (cb => Tb.j.cursor(bb.lineBlockAt(cb.head).to)))
      }, {
        key: "Ctrl-d",
        run: tc
      }, {
        key: "Ctrl-h",
        run: Bc
      }, {
        key: "Ctrl-k",
        run: bb => hc(bb, (cb => {
          let sb = bb.lineBlockAt(cb.head).to;
          return cb.head < sb ? sb : Math.min(bb.state.doc.length, cb.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: Pc
      }, {
        key: "Ctrl-o",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb;
          if (cb.readOnly) return !1;
          let kb = cb.changeByRange((bb => ({
            changes: {
              from: bb.from,
              to: bb.to,
              insert: Tb.L.of(["", ""])
            },
            range: Tb.j.cursor(bb.from)
          })));
          return sb(cb.update(kb, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: bb => {
          let {
            state: cb,
            dispatch: sb
          } = bb;
          if (cb.readOnly) return !1;
          let kb = cb.changeByRange((bb => {
            if (!bb.empty || 0 == bb.from || bb.from == cb.doc.length) return {
              range: bb
            };
            let sb = bb.from,
              kb = cb.doc.lineAt(sb),
              Wb = sb == kb.from ? sb - 1 : (0, Tb._)(kb.text, sb - kb.from, !1) + kb.from,
              ab = sb == kb.to ? sb + 1 : (0, Tb._)(kb.text, sb - kb.from, !0) + kb.from;
            return {
              changes: {
                from: Wb,
                to: ab,
                insert: cb.doc.slice(sb, ab).append(cb.doc.slice(Wb, sb))
              },
              range: Tb.j.cursor(ab)
            }
          }));
          return !kb.changes.empty && (sb(cb.update(kb, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: ac
      }].map((bb => ({
        mac: bb.key,
        run: bb.run,
        shift: bb.shift
      }))))),
      dc = {
        key: "Tab",
        run: Zc,
        shift: zc
      };
    var Ac = sb(40787),
      wc = sb(40733),
      rc = sb(40792),
      oc = function(bb) {
        void 0 === bb && (bb = {});
        var {
          crosshairCursor: cb = !1
        } = bb, sb = [];
        !1 !== bb.closeBracketsKeymap && (sb = sb.concat(wc.f)), !1 !== bb.defaultKeymap && (sb = sb.concat(qc)), !1 !== bb.searchKeymap && (sb = sb.concat(Ac.h)), !1 !== bb.historyKeymap && (sb = sb.concat(qb)), !1 !== bb.foldKeymap && (sb = sb.concat(Ib.L)), !1 !== bb.completionKeymap && (sb = sb.concat(wc.o)), !1 !== bb.lintKeymap && (sb = sb.concat(rc.b));
        var kb = [];
        return !1 !== bb.lineNumbers && kb.push((0, Ub.Z)()), !1 !== bb.highlightActiveLineGutter && kb.push((0, Ub.K)()), !1 !== bb.highlightSpecialChars && kb.push((0, Ub.P)()), !1 !== bb.history && kb.push(function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [ub, Lb.of(bb), Ub.h.domEventHandlers({
            beforeinput(bb, cb) {
              let sb = "historyUndo" == bb.inputType ? hb : "historyRedo" == bb.inputType ? Jb : null;
              return !!sb && (bb.preventDefault(), sb(cb))
            }
          })]
        }()), !1 !== bb.foldGutter && kb.push((0, Ib.F)()), !1 !== bb.drawSelection && kb.push((0, Ub.u)()), !1 !== bb.dropCursor && kb.push((0, Ub.y)()), !1 !== bb.allowMultipleSelections && kb.push(Tb.m.allowMultipleSelections.of(!0)), !1 !== bb.indentOnInput && kb.push((0, Ib.ab)()), !1 !== bb.syntaxHighlighting && kb.push((0, Ib.ib)(Ib.v, {
          fallback: !0
        })), !1 !== bb.bracketMatching && kb.push((0, Ib.o)()), !1 !== bb.closeBrackets && kb.push((0, wc.h)()), !1 !== bb.autocompletion && kb.push((0, wc.c)()), !1 !== bb.rectangularSelection && kb.push((0, Ub.fb)()), !1 !== cb && kb.push((0, Ub.s)()), !1 !== bb.highlightActiveLine && kb.push((0, Ub.L)()), !1 !== bb.highlightSelectionMatches && kb.push((0, Ac.f)()), bb.tabSize && "number" === typeof bb.tabSize && kb.push(Ib.db.of(" ".repeat(bb.tabSize))), kb.concat([Ub.V.of(sb.flat())]).filter(Boolean)
      },
      Sc = sb(40775);
    const Rc = "#e5c07b",
      vc = "#e06c75",
      Fc = "#56b6c2",
      xc = "#ffffff",
      jc = "#abb2bf",
      pc = "#7d8799",
      bs = "#61afef",
      cs = "#98c379",
      ss = "#d19a66",
      ks = "#c678dd",
      Ws = "#21252b",
      as = "#2c313a",
      Ts = "#282c34",
      Us = "#353a42",
      Is = "#3E4451",
      Hs = "#528bff",
      fs = Ub.h.theme({
        "&": {
          color: jc,
          backgroundColor: Ts
        },
        ".cm-content": {
          caretColor: Hs
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Hs
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: Is
        },
        ".cm-panels": {
          backgroundColor: Ws,
          color: jc
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
          backgroundColor: Ts,
          color: pc,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: as
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Us
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Us,
          borderBottomColor: Us
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: as,
            color: jc
          }
        }
      }, {
        dark: !0
      }),
      Ms = Ib.d.define([{
        tag: Sc.h.keyword,
        color: ks
      }, {
        tag: [Sc.h.name, Sc.h.deleted, Sc.h.character, Sc.h.propertyName, Sc.h.macroName],
        color: vc
      }, {
        tag: [Sc.h.function(Sc.h.variableName), Sc.h.labelName],
        color: bs
      }, {
        tag: [Sc.h.color, Sc.h.constant(Sc.h.name), Sc.h.standard(Sc.h.name)],
        color: ss
      }, {
        tag: [Sc.h.definition(Sc.h.name), Sc.h.separator],
        color: jc
      }, {
        tag: [Sc.h.typeName, Sc.h.className, Sc.h.number, Sc.h.changed, Sc.h.annotation, Sc.h.modifier, Sc.h.self, Sc.h.namespace],
        color: Rc
      }, {
        tag: [Sc.h.operator, Sc.h.operatorKeyword, Sc.h.url, Sc.h.escape, Sc.h.regexp, Sc.h.link, Sc.h.special(Sc.h.string)],
        color: Fc
      }, {
        tag: [Sc.h.meta, Sc.h.comment],
        color: pc
      }, {
        tag: Sc.h.strong,
        fontWeight: "bold"
      }, {
        tag: Sc.h.emphasis,
        fontStyle: "italic"
      }, {
        tag: Sc.h.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Sc.h.link,
        color: pc,
        textDecoration: "underline"
      }, {
        tag: Sc.h.heading,
        fontWeight: "bold",
        color: vc
      }, {
        tag: [Sc.h.atom, Sc.h.bool, Sc.h.special(Sc.h.variableName)],
        color: ss
      }, {
        tag: [Sc.h.processingInstruction, Sc.h.string, Sc.h.inserted],
        color: cs
      }, {
        tag: Sc.h.invalid,
        color: xc
      }]),
      Xs = [fs, (0, Ib.ib)(Ms)];
    var ns = Ub.h.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class ms {
      constructor(bb, cb) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = cb, this.timeoutMS = cb, this.callbacks.push(bb)
      }
      aX() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var bb = this.callbacks.slice();
          this.callbacks.length = 0, bb.forEach((bb => {
            try {
              bb()
            } catch (cb) {
              console.error("TimeoutLatch callback error:", cb)
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
    class ls {
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
            bb.aX(), bb.isDone && this.remove(bb)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var Qs = null,
      es = Tb.e.define(),
      Cs = [];

    function Ns(bb) {
      var {
        value: cb,
        selection: sb,
        onChange: kb,
        onStatistics: Wb,
        onCreateEditor: Ib,
        onUpdate: Hb,
        extensions: fb = Cs,
        autoFocus: Mb,
        theme: Xb = "light",
        height: nb = null,
        minHeight: mb = null,
        maxHeight: lb = null,
        width: Qb = null,
        minWidth: eb = null,
        maxWidth: Cb = null,
        placeholder: Nb = "",
        editable: Vb = !0,
        readOnly: Lb = !1,
        indentWithTab: ub = !0,
        basicSetup: Yb = !0,
        root: hb,
        initialState: Jb
      } = bb, [gb, Bb] = (0, ab.useState)(), [tb, yb] = (0, ab.useState)(), [Pb, Db] = (0, ab.useState)(), Eb = (0, ab.useState)((() => ({
        current: null
      })))[0], ib = (0, ab.useState)((() => ({
        current: null
      })))[0], Ob = Ub.h.theme({
        "&": {
          height: nb,
          minHeight: mb,
          maxHeight: lb,
          width: Qb,
          minWidth: eb,
          maxWidth: Cb
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), Gb = Ub.h.updateListener.of((bb => {
        if (bb.docChanged && "function" === typeof kb && !bb.transactions.some((bb => bb.annotation(es)))) {
          Eb.current ? Eb.current.reset() : (Eb.current = new ms((() => {
            if (ib.current) {
              var bb = ib.current;
              ib.current = null, bb()
            }
            Eb.current = null
          }), 200), ("undefined" === typeof window ? new ls : (Qs || (Qs = new ls), Qs)).add(Eb.current));
          var cb = bb.state.doc.toString();
          kb(cb, bb)
        }
        Wb && Wb((bb => ({
          line: bb.state.doc.lineAt(bb.state.selection.main.from),
          lineCount: bb.state.doc.lines,
          lineBreak: bb.state.lineBreak,
          length: bb.state.doc.length,
          readOnly: bb.state.readOnly,
          tabSize: bb.state.tabSize,
          selection: bb.state.selection,
          selectionAsSingle: bb.state.selection.asSingle().main,
          uQ: bb.state.selection.uQ,
          selectionCode: bb.state.sliceDoc(bb.state.selection.main.from, bb.state.selection.main.to),
          selections: bb.state.selection.uQ.map((cb => bb.state.sliceDoc(cb.from, cb.to))),
          selectedText: bb.state.selection.uQ.some((bb => !bb.empty))
        }))(bb))
      })), Kb = function(bb) {
        void 0 === bb && (bb = {});
        var {
          indentWithTab: cb = !0,
          editable: sb = !0,
          readOnly: kb = !1,
          theme: Wb = "light",
          placeholder: ab = "",
          basicSetup: Ib = !0
        } = bb, Hb = [];
        switch (cb && Hb.unshift(Ub.V.of([dc])), Ib && ("boolean" === typeof Ib ? Hb.unshift(oc()) : Hb.unshift(oc(Ib))), ab && Hb.unshift((0, Ub.bb)(ab)), Wb) {
          case "light":
            Hb.push(ns);
            break;
          case "dark":
            Hb.push(Xs);
            break;
          case "none":
            break;
          default:
            Hb.push(Wb)
        }
        return !1 === sb && Hb.push(Ub.h.editable.of(!1)), kb && Hb.push(Tb.m.readOnly.of(!0)), [...Hb]
      }({
        theme: Xb,
        editable: Vb,
        readOnly: Lb,
        placeholder: Nb,
        indentWithTab: ub,
        basicSetup: Yb
      }), Zb = [Gb, Ob, ...Kb];
      return Hb && "function" === typeof Hb && Zb.push(Ub.h.updateListener.of(Hb)), Zb = Zb.concat(fb), (0, ab.useLayoutEffect)((() => {
        if (gb && !Pb) {
          var bb = {
              doc: cb,
              selection: sb,
              extensions: Zb
            },
            kb = Jb ? Tb.m.fromJSON(Jb.json, bb, Jb.fields) : Tb.m.create(bb);
          if (Db(kb), !tb) {
            var Wb = new Ub.h({
              state: kb,
              parent: gb,
              root: hb
            });
            yb(Wb), Ib && Ib(Wb, kb)
          }
        }
        return () => {
          tb && (Db(void 0), yb(void 0))
        }
      }), [gb, Pb]), (0, ab.useEffect)((() => {
        bb.container && Bb(bb.container)
      }), [bb.container]), (0, ab.useEffect)((() => () => {
        tb && (tb.destroy(), yb(void 0)), Eb.current && (Eb.current.cancel(), Eb.current = null)
      }), [tb]), (0, ab.useEffect)((() => {
        Mb && tb && tb.focus()
      }), [Mb, tb]), (0, ab.useEffect)((() => {
        tb && tb.dispatch({
          effects: Tb.F.reconfigure.of(Zb)
        })
      }), [Xb, fb, nb, mb, lb, Qb, eb, Cb, Nb, Vb, Lb, ub, Yb, kb, Hb]), (0, ab.useEffect)((() => {
        if (void 0 !== cb) {
          var bb = tb ? tb.state.doc.toString() : "";
          if (tb && cb !== bb) {
            var sb = () => {
              tb && cb !== tb.state.doc.toString() && tb.dispatch({
                changes: {
                  from: 0,
                  to: tb.state.doc.toString().length,
                  insert: cb || ""
                },
                annotations: [es.of(!0)]
              })
            };
            Eb.current && !Eb.current.isDone ? ib.current = sb : sb()
          }
        }
      }), [cb, tb]), {
        state: Pb,
        setState: Db,
        view: tb,
        setView: yb,
        container: gb,
        setContainer: Bb
      }
    }
    var Vs = sb(1087),
      Ls = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      us = (0, ab.forwardRef)(((bb, cb) => {
        var {
          className: sb,
          value: Tb = "",
          selection: Ub,
          extensions: Ib = [],
          onChange: Hb,
          onStatistics: fb,
          onCreateEditor: Mb,
          onUpdate: Xb,
          autoFocus: nb,
          theme: mb = "light",
          height: lb,
          minHeight: Qb,
          maxHeight: eb,
          width: Cb,
          minWidth: Nb,
          maxWidth: Vb,
          basicSetup: Lb,
          placeholder: ub,
          indentWithTab: Yb,
          editable: hb,
          readOnly: Jb,
          root: gb,
          initialState: Bb
        } = bb, tb = (0, Wb.d)(bb, Ls), yb = (0, ab.useRef)(null), {
          state: Pb,
          view: Db,
          container: Eb,
          setContainer: ib
        } = Ns({
          root: gb,
          value: Tb,
          autoFocus: nb,
          theme: mb,
          height: lb,
          minHeight: Qb,
          maxHeight: eb,
          width: Cb,
          minWidth: Nb,
          maxWidth: Vb,
          basicSetup: Lb,
          placeholder: ub,
          indentWithTab: Yb,
          editable: hb,
          readOnly: Jb,
          selection: Ub,
          onChange: Hb,
          onStatistics: fb,
          onCreateEditor: Mb,
          onUpdate: Xb,
          extensions: Ib,
          initialState: Bb
        });
        (0, ab.useImperativeHandle)(cb, (() => ({
          editor: yb.current,
          state: Pb,
          view: Db
        })), [yb, Eb, Pb, Db]);
        var Ob = (0, ab.useCallback)((bb => {
          yb.current = bb, ib(bb)
        }), [ib]);
        if ("string" !== typeof Tb) throw new Error("value must be typeof string but got " + typeof Tb);
        var Gb = "string" === typeof mb ? "cm-theme-" + mb : "cm-theme";
        return (0, Vs.jsx)("div", (0, kb.d)({
          ref: Ob,
          className: Gb + (sb ? " " + sb : "")
        }, tb))
      }));
    us.displayName = "CodeMirror";
    const Ys = us
  },
  40754: (bb, cb, sb) => {
    function kb() {
      var bb = arguments[0];
      "string" == typeof bb && (bb = document.createElement(bb));
      var cb = 1,
        sb = arguments[1];
      if (sb && "object" == typeof sb && null == sb.nodeType && !Array.isArray(sb)) {
        for (var kb in sb)
          if (Object.prototype.hasOwnProperty.call(sb, kb)) {
            var ab = sb[kb];
            "string" == typeof ab ? bb.setAttribute(kb, ab) : null != ab && (bb[kb] = ab)
          } cb++
      }
      for (; cb < arguments.length; cb++) Wb(bb, arguments[cb]);
      return bb
    }

    function Wb(bb, cb) {
      if ("string" == typeof cb) bb.appendChild(document.createTextNode(cb));
      else if (null == cb);
      else if (null != cb.nodeType) bb.appendChild(cb);
      else {
        if (!Array.isArray(cb)) throw new RangeError("Unsupported child node: " + cb);
        for (var sb = 0; sb < cb.length; sb++) Wb(bb, cb[sb])
      }
    }
    sb.d(cb, {
      d: () => kb
    })
  },
  40750: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb
    });
    const kb = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      Wb = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      ab = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class Tb {
      constructor(bb, cb) {
        this.rules = [];
        let {
          finish: sb
        } = cb || {};

        function kb(bb) {
          return /^@/.test(bb) ? [bb] : bb.split(/,\s*/)
        }

        function Wb(bb, cb, ab, Tb) {
          let Ub = [],
            Ib = /^@(\w+)\b/.exec(bb[0]),
            Hb = Ib && "keyframes" == Ib[1];
          if (Ib && null == cb) return ab.push(bb[0] + ";");
          for (let sb in cb) {
            let Tb = cb[sb];
            if (/&/.test(sb)) Wb(sb.split(/,\s*/).map((cb => bb.map((bb => cb.replace(/&/, bb))))).reduce(((bb, cb) => bb.concat(cb))), Tb, ab);
            else if (Tb && "object" == typeof Tb) {
              if (!Ib) throw new RangeError("The value of a property (" + sb + ") should be a primitive value.");
              Wb(kb(sb), Tb, Ub, Hb)
            } else null != Tb && Ub.push(sb.replace(/_.*/, "").replace(/[A-Z]/g, (bb => "-" + bb.toLowerCase())) + ": " + Tb + ";")
          }(Ub.length || Hb) && ab.push((!sb || Ib || Tb ? bb : bb.map(sb)).join(", ") + " {" + Ub.join(" ") + "}")
        }
        for (let ab in bb) Wb(kb(ab), bb[ab], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let bb = ab[kb] || 1;
        return ab[kb] = bb + 1, "\u037c" + bb.toString(36)
      }
      static mount(bb, cb, sb) {
        let kb = bb[Wb],
          ab = sb && sb.nonce;
        kb ? ab && kb.setNonce(ab) : kb = new Ib(bb, ab), kb.mount(Array.isArray(cb) ? cb : [cb], bb)
      }
    }
    let Ub = new Map;
    class Ib {
      constructor(bb, cb) {
        let sb = bb.ownerDocument || bb,
          kb = sb.defaultView;
        if (!bb.head && bb.adoptedStyleSheets && kb.CSSStyleSheet) {
          let cb = Ub.get(sb);
          if (cb) return bb[Wb] = cb;
          this.sheet = new kb.CSSStyleSheet, Ub.set(sb, this)
        } else this.styleTag = sb.createElement("style"), cb && this.styleTag.setAttribute("nonce", cb);
        this.modules = [], bb[Wb] = this
      }
      mount(bb, cb) {
        let sb = this.sheet,
          kb = 0,
          Wb = 0;
        for (let ab = 0; ab < bb.length; ab++) {
          let cb = bb[ab],
            Tb = this.modules.indexOf(cb);
          if (Tb < Wb && Tb > -1 && (this.modules.splice(Tb, 1), Wb--, Tb = -1), -1 == Tb) {
            if (this.modules.splice(Wb++, 0, cb), sb)
              for (let bb = 0; bb < cb.rules.length; bb++) sb.insertRule(cb.rules[bb], kb++)
          } else {
            for (; Wb < Tb;) kb += this.modules[Wb++].rules.length;
            kb += cb.rules.length, Wb++
          }
        }
        if (sb) cb.adoptedStyleSheets.indexOf(this.sheet) < 0 && (cb.adoptedStyleSheets = [this.sheet, ...cb.adoptedStyleSheets]);
        else {
          let bb = "";
          for (let cb = 0; cb < this.modules.length; cb++) bb += this.modules[cb].getRules() + "\n";
          this.styleTag.textContent = bb;
          let sb = cb.head || cb;
          this.styleTag.parentNode != sb && sb.insertBefore(this.styleTag, sb.firstChild)
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