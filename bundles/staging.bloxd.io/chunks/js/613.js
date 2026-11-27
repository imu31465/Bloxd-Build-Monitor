export const id = 613;
export const ids = [613];
export const modules = {
  53855: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => qS,
      f: () => TS,
      g: () => YS,
      j: () => fr,
      n: () => RS,
      r: () => Er,
      s: () => mS
    });
    var Zr = Qr(53864),
      Wr = Qr(53872),
      ar = Qr(53892);
    class jr {
      constructor(rr, Sr, Qr, Zr) {
        this.state = rr, this.pos = Sr, this.explicit = Qr, this.view = Zr, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(rr) {
        let Sr = (0, ar.xb)(this.state).resolveInner(this.pos, -1);
        for (; Sr && rr.indexOf(Sr.name) < 0;) Sr = Sr.parent;
        return Sr ? {
          from: Sr.from,
          to: this.pos,
          text: this.state.sliceDoc(Sr.from, this.pos),
          type: Sr.type
        } : null
      }
      matchBefore(rr) {
        let Sr = this.state.doc.lineAt(this.pos),
          Qr = Math.max(Sr.from, this.pos - 250),
          Zr = Sr.text.slice(Qr - Sr.from, this.pos - Sr.from),
          Wr = Zr.search(mr(rr, !1));
        return Wr < 0 ? null : {
          from: Qr + Wr,
          to: this.pos,
          text: Zr.slice(Wr)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(rr, Sr, Qr) {
        "abort" == rr && this.abortListeners && (this.abortListeners.push(Sr), Qr && Qr.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function Ir(rr) {
      let Sr = Object.keys(rr).join(""),
        Qr = /\w/.test(Sr);
      return Qr && (Sr = Sr.replace(/\w/g, "")), `[${Qr?"\\w":""}${Sr.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function fr(rr) {
      let Sr = rr.map((rr => "string" == typeof rr ? {
          label: rr
        } : rr)),
        [Qr, Zr] = Sr.every((rr => /^\w+$/.test(rr.label))) ? [/\w*$/, /\w+$/] : function(rr) {
          let Sr = Object.create(null),
            Qr = Object.create(null);
          for (let {
              label: Wr
            }
            of rr) {
            Sr[Wr[0]] = !0;
            for (let rr = 1; rr < Wr.length; rr++) Qr[Wr[rr]] = !0
          }
          let Zr = Ir(Sr) + Ir(Qr) + "*$";
          return [new RegExp("^" + Zr), new RegExp(Zr)]
        }(Sr);
      return rr => {
        let Wr = rr.matchBefore(Zr);
        return Wr || rr.explicit ? {
          from: Wr ? Wr.from : rr.pos,
          options: Sr,
          validFor: Qr
        } : null
      }
    }

    function Er(rr, Sr) {
      return Qr => {
        for (let Sr = (0, ar.xb)(Qr.state).resolveInner(Qr.pos, -1); Sr; Sr = Sr.parent) {
          if (rr.indexOf(Sr.name) > -1) return null;
          if (Sr.type.isTop) break
        }
        return Sr(Qr)
      }
    }
    class pr {
      constructor(rr, Sr, Qr, Zr) {
        this.completion = rr, this.source = Sr, this.match = Qr, this.score = Zr
      }
    }

    function xr(rr) {
      return rr.selection.main.from
    }

    function mr(rr, Sr) {
      var Qr;
      let {
        source: Zr
      } = rr, Wr = Sr && "^" != Zr[0], ar = "$" != Zr[Zr.length - 1];
      return Wr || ar ? new RegExp(`${Wr?"^":""}(?:${Zr})${ar?"$":""}`, null !== (Qr = rr.flags) && void 0 !== Qr ? Qr : rr.ignoreCase ? "i" : "") : rr
    }
    const Nr = Zr.e.define();

    function Ur(rr, Sr, Qr, Wr) {
      let {
        main: ar
      } = rr.selection, jr = Qr - ar.from, Ir = Wr - ar.from;
      return {
        ...rr.changeByRange((fr => {
          if (fr != ar && Qr != Wr && rr.sliceDoc(fr.from + jr, fr.from + Ir) != rr.sliceDoc(Qr, Wr)) return {
            range: fr
          };
          let Er = rr.toText(Sr);
          return {
            changes: {
              from: fr.from + jr,
              to: Wr == ar.from ? fr.to : fr.from + Ir,
              insert: Er
            },
            range: Zr.m.cursor(fr.from + jr + Er.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const tr = new WeakMap;

    function hr(rr) {
      if (!Array.isArray(rr)) return rr;
      let Sr = tr.get(rr);
      return Sr || tr.set(rr, Sr = fr(rr)), Sr
    }
    const zr = Zr.P.define(),
      Yr = Zr.P.define();
    class nr {
      constructor(rr) {
        this.pattern = rr, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let Sr = 0; Sr < rr.length;) {
          let Qr = (0, Zr.ab)(rr, Sr),
            Wr = (0, Zr.bb)(Qr);
          this.chars.push(Qr);
          let ar = rr.slice(Sr, Sr + Wr),
            jr = ar.toUpperCase();
          this.folded.push((0, Zr.ab)(jr == ar ? ar.toLowerCase() : jr, 0)), Sr += Wr
        }
        this.astral = rr.length != this.chars.length
      }
      ret(rr, Sr) {
        return this.score = rr, this.matched = Sr, this
      }
      match(rr) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (rr.length < this.pattern.length) return null;
        let {
          chars: Sr,
          folded: Qr,
          any: Wr,
          precise: ar,
          byWord: jr
        } = this;
        if (1 == Sr.length) {
          let Wr = (0, Zr.ab)(rr, 0),
            ar = (0, Zr.bb)(Wr),
            jr = ar == rr.length ? 0 : -100;
          if (Wr == Sr[0]);
          else {
            if (Wr != Qr[0]) return null;
            jr += -200
          }
          return this.ret(jr, [0, ar])
        }
        let Ir = rr.indexOf(this.pattern);
        if (0 == Ir) return this.ret(rr.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let fr = Sr.length,
          Er = 0;
        if (Ir < 0) {
          for (let ar = 0, jr = Math.min(rr.length, 200); ar < jr && Er < fr;) {
            let jr = (0, Zr.ab)(rr, ar);
            jr != Sr[Er] && jr != Qr[Er] || (Wr[Er++] = ar), ar += (0, Zr.bb)(jr)
          }
          if (Er < fr) return null
        }
        let pr = 0,
          xr = 0,
          mr = !1,
          Nr = 0,
          Ur = -1,
          tr = -1,
          hr = /[a-z]/.test(rr),
          zr = !0;
        for (let Yr = 0, nr = Math.min(rr.length, 200), er = 0; Yr < nr && xr < fr;) {
          let Wr = (0, Zr.ab)(rr, Yr);
          Ir < 0 && (pr < fr && Wr == Sr[pr] && (ar[pr++] = Yr), Nr < fr && (Wr == Sr[Nr] || Wr == Qr[Nr] ? (0 == Nr && (Ur = Yr), tr = Yr + 1, Nr++) : Nr = 0));
          let Er, nr = Wr < 255 ? Wr >= 48 && Wr <= 57 || Wr >= 97 && Wr <= 122 ? 2 : Wr >= 65 && Wr <= 90 ? 1 : 0 : (Er = (0, Zr.kb)(Wr)) != Er.toLowerCase() ? 1 : Er != Er.toUpperCase() ? 2 : 0;
          (!Yr || 1 == nr && hr || 0 == er && 0 != nr) && (Sr[xr] == Wr || Qr[xr] == Wr && (mr = !0) ? jr[xr++] = Yr : jr.length && (zr = !1)), er = nr, Yr += (0, Zr.bb)(Wr)
        }
        return xr == fr && 0 == jr[0] && zr ? this.result((mr ? -200 : 0) - 100, jr, rr) : Nr == fr && 0 == Ur ? this.ret(-200 - rr.length + (tr == rr.length ? 0 : -100), [0, tr]) : Ir > -1 ? this.ret(-700 - rr.length, [Ir, Ir + this.pattern.length]) : Nr == fr ? this.ret(-900 - rr.length, [Ur, tr]) : xr == fr ? this.result((mr ? -200 : 0) - 100 - 700 + (zr ? 0 : -1100), jr, rr) : 2 == Sr.length ? null : this.result((Wr[0] ? -700 : 0) - 200 - 1100, Wr, rr)
      }
      result(rr, Sr, Qr) {
        let Wr = [],
          ar = 0;
        for (let jr of Sr) {
          let rr = jr + (this.astral ? (0, Zr.bb)((0, Zr.ab)(Qr, jr)) : 1);
          ar && Wr[ar - 1] == jr ? Wr[ar - 1] = rr : (Wr[ar++] = jr, Wr[ar++] = rr)
        }
        return this.ret(rr - Qr.length, Wr)
      }
    }
    class er {
      constructor(rr) {
        this.pattern = rr, this.matched = [], this.score = 0, this.folded = rr.toLowerCase()
      }
      match(rr) {
        if (rr.length < this.pattern.length) return null;
        let Sr = rr.slice(0, this.pattern.length),
          Qr = Sr == this.pattern ? 0 : Sr.toLowerCase() == this.folded ? -200 : null;
        return null == Qr ? null : (this.matched = [0, Sr.length], this.score = Qr + (rr.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const Kr = Zr.u.define({
      combine: rr => (0, Zr.db)(rr, {
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
        positionInfo: Br,
        filterStrict: !1,
        compareCompletions: (rr, Sr) => (rr.sortText || rr.label).localeCompare(Sr.sortText || Sr.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (rr, Sr) => rr && Sr,
        closeOnBlur: (rr, Sr) => rr && Sr,
        icons: (rr, Sr) => rr && Sr,
        tooltipClass: (rr, Sr) => Qr => yr(rr(Qr), Sr(Qr)),
        optionClass: (rr, Sr) => Qr => yr(rr(Qr), Sr(Qr)),
        addToOptions: (rr, Sr) => rr.concat(Sr),
        filterStrict: (rr, Sr) => rr || Sr
      })
    });

    function yr(rr, Sr) {
      return rr ? Sr ? rr + " " + Sr : rr : Sr
    }

    function Br(rr, Sr, Qr, Zr, ar, jr) {
      let Ir, fr, Er = rr.textDirection == Wr.f.RTL,
        pr = Er,
        xr = !1,
        mr = "top",
        Nr = Sr.left - ar.left,
        Ur = ar.right - Sr.right,
        tr = Zr.right - Zr.left,
        hr = Zr.bottom - Zr.top;
      if (pr && Nr < Math.min(tr, Ur) ? pr = !1 : !pr && Ur < Math.min(tr, Nr) && (pr = !0), tr <= (pr ? Nr : Ur)) Ir = Math.max(ar.top, Math.min(Qr.top, ar.bottom - hr)) - Sr.top, fr = Math.min(400, pr ? Nr : Ur);
      else {
        xr = !0, fr = Math.min(400, (Er ? Sr.right : ar.right - Sr.left) - 30);
        let rr = ar.bottom - Sr.bottom;
        rr >= hr || rr > Sr.top ? Ir = Qr.bottom - Sr.top : (mr = "bottom", Ir = Sr.bottom - Qr.top)
      }
      return {
        style: `${mr}: ${Ir/((Sr.bottom-Sr.top)/jr.offsetHeight)}px; max-width: ${fr/((Sr.right-Sr.left)/jr.offsetWidth)}px`,
        class: "cm-completionInfo-" + (xr ? Er ? "left-narrow" : "right-narrow" : pr ? "left" : "right")
      }
    }
    const Tr = Zr.P.define();

    function vr(rr, Sr, Qr) {
      if (rr <= Qr) return {
        from: 0,
        to: rr
      };
      if (Sr < 0 && (Sr = 0), Sr <= rr >> 1) {
        let rr = Math.floor(Sr / Qr);
        return {
          from: rr * Qr,
          to: (rr + 1) * Qr
        }
      }
      let Zr = Math.floor((rr - Sr) / Qr);
      return {
        from: rr - (Zr + 1) * Qr,
        to: rr - Zr * Qr
      }
    }
    class Or {
      constructor(rr, Sr, Qr) {
        this.view = rr, this.stateField = Sr, this.applyCompletion = Qr, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: rr => this.placeInfo(rr),
          key: this
        }, this.space = null, this.currentClass = "";
        let Zr = rr.state.field(Sr),
          {
            options: Wr,
            selected: ar
          } = Zr.open,
          jr = rr.state.facet(Kr);
        this.optionContent = function(rr) {
          let Sr = rr.addToOptions.slice();
          return rr.icons && Sr.push({
            render(rr) {
              let Sr = document.createElement("div");
              return Sr.classList.add("cm-completionIcon"), rr.type && Sr.classList.add(...rr.type.split(/\s+/g).map((rr => "cm-completionIcon-" + rr))), Sr.setAttribute("aria-hidden", "true"), Sr
            },
            position: 20
          }), Sr.push({
            render(rr, Sr, Qr, Zr) {
              let Wr = document.createElement("span");
              Wr.className = "cm-completionLabel";
              let ar = rr.displayLabel || rr.label,
                jr = 0;
              for (let Ir = 0; Ir < Zr.length;) {
                let rr = Zr[Ir++],
                  Sr = Zr[Ir++];
                rr > jr && Wr.appendChild(document.createTextNode(ar.slice(jr, rr)));
                let Qr = Wr.appendChild(document.createElement("span"));
                Qr.appendChild(document.createTextNode(ar.slice(rr, Sr))), Qr.className = "cm-completionMatchedText", jr = Sr
              }
              return jr < ar.length && Wr.appendChild(document.createTextNode(ar.slice(jr))), Wr
            },
            position: 50
          }, {
            render(rr) {
              if (!rr.detail) return null;
              let Sr = document.createElement("span");
              return Sr.className = "cm-completionDetail", Sr.textContent = rr.detail, Sr
            },
            position: 80
          }), Sr.sort(((rr, Sr) => rr.position - Sr.position)).map((rr => rr.render))
        }(jr), this.optionClass = jr.optionClass, this.tooltipClass = jr.tooltipClass, this.range = vr(Wr.length, ar, jr.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(rr.state), this.dom.addEventListener("mousedown", (Qr => {
          let {
            options: Zr
          } = rr.state.field(Sr).open;
          for (let Sr, Wr = Qr.target; Wr && Wr != this.dom; Wr = Wr.parentNode)
            if ("LI" == Wr.nodeName && (Sr = /-(\d+)$/.exec(Wr.id)) && +Sr[1] < Zr.length) return this.applyCompletion(rr, Zr[+Sr[1]]), void Qr.preventDefault();
          if (Qr.target == this.list) {
            let Sr = this.list.classList.contains("cm-completionListIncompleteTop") && Qr.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && Qr.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != Sr && (rr.dispatch({
              effects: Tr.of(Sr)
            }), Qr.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (Sr => {
          let Qr = rr.state.field(this.stateField, !1);
          Qr && Qr.tooltip && rr.state.facet(Kr).closeOnBlur && Sr.relatedTarget != rr.contentDOM && rr.dispatch({
            effects: Yr.of(null)
          })
        })), this.showOptions(Wr, Zr.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(rr, Sr) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(rr, Sr, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(rr) {
        var Sr;
        let Qr = rr.state.field(this.stateField),
          Zr = rr.startState.field(this.stateField);
        if (this.updateTooltipClass(rr.state), Qr != Zr) {
          let {
            options: Wr,
            selected: ar,
            disabled: jr
          } = Qr.open;
          Zr.open && Zr.open.options == Wr || (this.range = vr(Wr.length, ar, rr.state.facet(Kr).maxRenderedOptions), this.showOptions(Wr, Qr.id)), this.updateSel(), jr != (null === (Sr = Zr.open) || void 0 === Sr ? void 0 : Sr.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!jr)
        }
      }
      updateTooltipClass(rr) {
        let Sr = this.tooltipClass(rr);
        if (Sr != this.currentClass) {
          for (let rr of this.currentClass.split(" ")) rr && this.dom.classList.remove(rr);
          for (let rr of Sr.split(" ")) rr && this.dom.classList.add(rr);
          this.currentClass = Sr
        }
      }
      positioned(rr) {
        this.space = rr, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let rr = this.view.state.field(this.stateField),
          Sr = rr.open;
        (Sr.selected > -1 && Sr.selected < this.range.from || Sr.selected >= this.range.to) && (this.range = vr(Sr.options.length, Sr.selected, this.view.state.facet(Kr).maxRenderedOptions), this.showOptions(Sr.options, rr.id));
        let Qr = this.updateSelectedOption(Sr.selected);
        if (Qr) {
          this.destroyInfo();
          let {
            completion: Zr
          } = Sr.options[Sr.selected], {
            info: ar
          } = Zr;
          if (!ar) return;
          let jr = "string" === typeof ar ? document.createTextNode(ar) : ar(Zr);
          if (!jr) return;
          "then" in jr ? jr.then((Sr => {
            Sr && this.view.state.field(this.stateField, !1) == rr && this.addInfoPane(Sr, Zr)
          })).catch((rr => (0, Wr.Y)(this.view.state, rr, "completion info"))) : (this.addInfoPane(jr, Zr), Qr.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(rr, Sr) {
        this.destroyInfo();
        let Qr = this.info = document.createElement("div");
        if (Qr.className = "cm-tooltip cm-completionInfo", Qr.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != rr.nodeType) Qr.appendChild(rr), this.infoDestroy = null;
        else {
          let {
            dom: Sr,
            destroy: Zr
          } = rr;
          Qr.appendChild(Sr), this.infoDestroy = Zr || null
        }
        this.dom.appendChild(Qr), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(rr) {
        let Sr = null;
        for (let Qr = this.list.firstChild, Zr = this.range.from; Qr; Qr = Qr.nextSibling, Zr++) "LI" == Qr.nodeName && Qr.id ? Zr == rr ? Qr.hasAttribute("aria-selected") || (Qr.setAttribute("aria-selected", "true"), Sr = Qr) : Qr.hasAttribute("aria-selected") && (Qr.removeAttribute("aria-selected"), Qr.removeAttribute("aria-describedby")) : Zr--;
        return Sr && function(rr, Sr) {
          let Qr = rr.getBoundingClientRect(),
            Zr = Sr.getBoundingClientRect(),
            Wr = Qr.height / rr.offsetHeight;
          Zr.top < Qr.top ? rr.scrollTop -= (Qr.top - Zr.top) / Wr : Zr.bottom > Qr.bottom && (rr.scrollTop += (Zr.bottom - Qr.bottom) / Wr)
        }(this.list, Sr), Sr
      }
      measureInfo() {
        let rr = this.dom.querySelector("[aria-selected]");
        if (!rr || !this.info) return null;
        let Sr = this.dom.getBoundingClientRect(),
          Qr = this.info.getBoundingClientRect(),
          Zr = rr.getBoundingClientRect(),
          Wr = this.space;
        if (!Wr) {
          let rr = this.dom.ownerDocument.documentElement;
          Wr = {
            left: 0,
            top: 0,
            right: rr.clientWidth,
            bottom: rr.clientHeight
          }
        }
        return Zr.top > Math.min(Wr.bottom, Sr.bottom) - 10 || Zr.bottom < Math.max(Wr.top, Sr.top) + 10 ? null : this.view.state.facet(Kr).positionInfo(this.view, Sr, Zr, Qr, Wr, this.dom)
      }
      placeInfo(rr) {
        this.info && (rr ? (rr.style && (this.info.style.cssText = rr.style), this.info.className = "cm-tooltip cm-completionInfo " + (rr.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(rr, Sr, Qr) {
        const Zr = document.createElement("ul");
        Zr.id = Sr, Zr.setAttribute("role", "listbox"), Zr.setAttribute("aria-expanded", "true"), Zr.setAttribute("aria-label", this.view.state.phrase("Completions")), Zr.addEventListener("mousedown", (rr => {
          rr.target == Zr && rr.preventDefault()
        }));
        let Wr = null;
        for (let ar = Qr.from; ar < Qr.to; ar++) {
          let {
            completion: jr,
            match: Ir
          } = rr[ar], {
            section: fr
          } = jr;
          if (fr) {
            let rr = "string" == typeof fr ? fr : fr.name;
            if (rr != Wr && (ar > Qr.from || 0 == Qr.from))
              if (Wr = rr, "string" != typeof fr && fr.header) Zr.appendChild(fr.header(fr));
              else {
                Zr.appendChild(document.createElement("completion-section")).textContent = rr
              }
          }
          const Er = Zr.appendChild(document.createElement("li"));
          Er.id = Sr + "-" + ar, Er.setAttribute("role", "option");
          let pr = this.optionClass(jr);
          pr && (Er.className = pr);
          for (let rr of this.optionContent) {
            let Sr = rr(jr, this.view.state, this.view, Ir);
            Sr && Er.appendChild(Sr)
          }
        }
        return Qr.from && Zr.classList.add("cm-completionListIncompleteTop"), Qr.to < rr.length && Zr.classList.add("cm-completionListIncompleteBottom"), Zr
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Lr(rr, Sr) {
      return Qr => new Or(Qr, rr, Sr)
    }

    function lr(rr) {
      return 100 * (rr.boost || 0) + (rr.apply ? 10 : 0) + (rr.info ? 5 : 0) + (rr.type ? 1 : 0)
    }
    class Xr {
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        this.options = rr, this.attrs = Sr, this.tooltip = Qr, this.timestamp = Zr, this.selected = Wr, this.disabled = ar
      }
      setSelected(rr, Sr) {
        return rr == this.selected || rr >= this.options.length ? this : new Xr(this.options, Rr(Sr, rr), this.tooltip, this.timestamp, rr, this.disabled)
      }
      static build(rr, Sr, Qr, Zr, Wr, ar) {
        if (Zr && !ar && rr.some((rr => rr.isPending))) return Zr.setDisabled();
        let jr = function(rr, Sr) {
          let Qr = [],
            Zr = null,
            Wr = null,
            ar = rr => {
              Qr.push(rr);
              let {
                section: Sr
              } = rr.completion;
              if (Sr) {
                Zr || (Zr = []);
                let rr = "string" == typeof Sr ? Sr : Sr.name;
                Zr.some((Sr => Sr.name == rr)) || Zr.push("string" == typeof Sr ? {
                  name: rr
                } : Sr)
              }
            },
            jr = Sr.facet(Kr);
          for (let xr of rr)
            if (xr.hasResult()) {
              let rr = xr.result.getMatch;
              if (!1 === xr.result.filter)
                for (let Sr of xr.result.options) ar(new pr(Sr, xr.source, rr ? rr(Sr) : [], 1e9 - Qr.length));
              else {
                let Qr, Zr = Sr.sliceDoc(xr.from, xr.to),
                  Ir = jr.filterStrict ? new er(Zr) : new nr(Zr);
                for (let Sr of xr.result.options)
                  if (Qr = Ir.match(Sr.label)) {
                    let Zr = Sr.displayLabel ? rr ? rr(Sr, Qr.matched) : [] : Qr.matched,
                      jr = Qr.score + (Sr.boost || 0);
                    if (ar(new pr(Sr, xr.source, Zr, jr)), "object" == typeof Sr.section && "dynamic" === Sr.section.rank) {
                      let {
                        name: rr
                      } = Sr.section;
                      Wr || (Wr = Object.create(null)), Wr[rr] = Math.max(jr, Wr[rr] || -1e9)
                    }
                  }
              }
            } if (Zr) {
            let rr = Object.create(null),
              Sr = 0,
              ar = (rr, Sr) => ("dynamic" === rr.rank && "dynamic" === Sr.rank ? Wr[Sr.name] - Wr[rr.name] : 0) || ("number" == typeof rr.rank ? rr.rank : 1e9) - ("number" == typeof Sr.rank ? Sr.rank : 1e9) || (rr.name < Sr.name ? -1 : 1);
            for (let Qr of Zr.sort(ar)) Sr -= 1e5, rr[Qr.name] = Sr;
            for (let Zr of Qr) {
              let {
                section: Sr
              } = Zr.completion;
              Sr && (Zr.score += rr["string" == typeof Sr ? Sr : Sr.name])
            }
          }
          let Ir = [],
            fr = null,
            Er = jr.compareCompletions;
          for (let pr of Qr.sort(((rr, Sr) => Sr.score - rr.score || Er(rr.completion, Sr.completion)))) {
            let rr = pr.completion;
            !fr || fr.label != rr.label || fr.detail != rr.detail || null != fr.type && null != rr.type && fr.type != rr.type || fr.apply != rr.apply || fr.boost != rr.boost ? Ir.push(pr) : lr(pr.completion) > lr(fr) && (Ir[Ir.length - 1] = pr), fr = pr.completion
          }
          return Ir
        }(rr, Sr);
        if (!jr.length) return Zr && rr.some((rr => rr.isPending)) ? Zr.setDisabled() : null;
        let Ir = Sr.facet(Kr).selectOnOpen ? 0 : -1;
        if (Zr && Zr.selected != Ir && -1 != Zr.selected) {
          let rr = Zr.options[Zr.selected].completion;
          for (let Sr = 0; Sr < jr.length; Sr++)
            if (jr[Sr].completion == rr) {
              Ir = Sr;
              break
            }
        }
        return new Xr(jr, Rr(Qr, Ir), {
          pos: rr.reduce(((rr, Sr) => Sr.hasResult() ? Math.min(rr, Sr.from) : rr), 1e8),
          create: ir,
          above: Wr.aboveCursor
        }, Zr ? Zr.timestamp : Date.now(), Ir, !1)
      }
      map(rr) {
        return new Xr(this.options, this.attrs, {
          ...this.tooltip,
          pos: rr.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new Xr(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class Pr {
      constructor(rr, Sr, Qr) {
        this.active = rr, this.id = Sr, this.open = Qr
      }
      static start() {
        return new Pr(gr, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(rr) {
        let {
          state: Sr
        } = rr, Qr = Sr.facet(Kr), Zr = (Qr.override || Sr.languageDataAt("autocomplete", xr(Sr)).map(hr)).map((Sr => (this.active.find((rr => rr.source == Sr)) || new Mr(Sr, this.active.some((rr => 0 != rr.state)) ? 1 : 0)).update(rr, Qr)));
        Zr.length == this.active.length && Zr.every(((rr, Sr) => rr == this.active[Sr])) && (Zr = this.active);
        let Wr = this.open,
          ar = rr.effects.some((rr => rr.is(kr)));
        Wr && rr.docChanged && (Wr = Wr.map(rr.changes)), rr.selection || Zr.some((Sr => Sr.hasResult() && rr.changes.touchesRange(Sr.from, Sr.to))) || ! function(rr, Sr) {
          if (rr == Sr) return !0;
          for (let Qr = 0, Zr = 0;;) {
            for (; Qr < rr.length && !rr[Qr].hasResult();) Qr++;
            for (; Zr < Sr.length && !Sr[Zr].hasResult();) Zr++;
            let Wr = Qr == rr.length,
              ar = Zr == Sr.length;
            if (Wr || ar) return Wr == ar;
            if (rr[Qr++].result != Sr[Zr++].result) return !1
          }
        }(Zr, this.active) || ar ? Wr = Xr.build(Zr, Sr, this.id, Wr, Qr, ar) : Wr && Wr.disabled && !Zr.some((rr => rr.isPending)) && (Wr = null), !Wr && Zr.every((rr => !rr.isPending)) && Zr.some((rr => rr.hasResult())) && (Zr = Zr.map((rr => rr.hasResult() ? new Mr(rr.source, 0) : rr)));
        for (let jr of rr.effects) jr.is(Tr) && (Wr = Wr && Wr.setSelected(jr.value, this.id));
        return Zr == this.active && Wr == this.open ? this : new Pr(Zr, this.id, Wr)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Hr : qr
      }
    }
    const Hr = {
        "aria-autocomplete": "list"
      },
      qr = {};

    function Rr(rr, Sr) {
      let Qr = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": rr
      };
      return Sr > -1 && (Qr["aria-activedescendant"] = rr + "-" + Sr), Qr
    }
    const gr = [];

    function Cr(rr, Sr) {
      if (rr.isUserEvent("input.complete")) {
        let Qr = rr.annotation(Nr);
        if (Qr && Sr.activateOnCompletion(Qr)) return 12
      }
      let Qr = rr.isUserEvent("input.type");
      return Qr && Sr.activateOnTyping ? 5 : Qr ? 1 : rr.isUserEvent("delete.backward") ? 2 : rr.selection ? 8 : rr.docChanged ? 16 : 0
    }
    class Mr {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = rr, this.state = Sr, this.explicit = Qr
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(rr, Sr) {
        let Qr = Cr(rr, Sr),
          Zr = this;
        (8 & Qr || 16 & Qr && this.touches(rr)) && (Zr = new Mr(Zr.source, 0)), 4 & Qr && 0 == Zr.state && (Zr = new Mr(this.source, 1)), Zr = Zr.updateFor(rr, Qr);
        for (let Wr of rr.effects)
          if (Wr.is(zr)) Zr = new Mr(Zr.source, 1, Wr.value);
          else if (Wr.is(Yr)) Zr = new Mr(Zr.source, 0);
        else if (Wr.is(kr))
          for (let rr of Wr.value) rr.source == Zr.source && (Zr = rr);
        return Zr
      }
      updateFor(rr, Sr) {
        return this.map(rr.changes)
      }
      map(rr) {
        return this
      }
      touches(rr) {
        return rr.changes.touchesRange(xr(rr.state))
      }
    }
    class Gr extends Mr {
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        super(rr, 3, Sr), this.limit = Qr, this.result = Zr, this.from = Wr, this.to = ar
      }
      hasResult() {
        return !0
      }
      updateFor(rr, Sr) {
        var Qr;
        if (!(3 & Sr)) return this.map(rr.changes);
        let Zr = this.result;
        Zr.map && !rr.changes.empty && (Zr = Zr.map(Zr, rr.changes));
        let Wr = rr.changes.mapPos(this.from),
          ar = rr.changes.mapPos(this.to, 1),
          Ir = xr(rr.state);
        if (Ir > ar || !Zr || 2 & Sr && (xr(rr.startState) == this.from || Ir < this.limit)) return new Mr(this.source, 4 & Sr ? 1 : 0);
        let fr = rr.changes.mapPos(this.limit);
        return function(rr, Sr, Qr, Zr) {
          if (!rr) return !1;
          let Wr = Sr.sliceDoc(Qr, Zr);
          return "function" == typeof rr ? rr(Wr, Qr, Zr, Sr) : mr(rr, !0).test(Wr)
        }(Zr.validFor, rr.state, Wr, ar) ? new Gr(this.source, this.explicit, fr, Zr, Wr, ar) : Zr.update && (Zr = Zr.update(Zr, Wr, ar, new jr(rr.state, Ir, !1))) ? new Gr(this.source, this.explicit, fr, Zr, Zr.from, null !== (Qr = Zr.to) && void 0 !== Qr ? Qr : xr(rr.state)) : new Mr(this.source, 1, this.explicit)
      }
      map(rr) {
        if (rr.empty) return this;
        return (this.result.map ? this.result.map(this.result, rr) : this.result) ? new Gr(this.source, this.explicit, rr.mapPos(this.limit), this.result, rr.mapPos(this.from), rr.mapPos(this.to, 1)) : new Mr(this.source, 0)
      }
      touches(rr) {
        return rr.changes.touchesRange(this.from, this.to)
      }
    }
    const kr = Zr.P.define({
        map: (rr, Sr) => rr.map((rr => rr.map(Sr)))
      }),
      Ar = Zr.T.define({
        create: () => Pr.start(),
        update: (rr, Sr) => rr.update(Sr),
        provide: rr => [Wr.nb.from(rr, (rr => rr.tooltip)), Wr.i.contentAttributes.from(rr, (rr => rr.attrs))]
      });

    function Vr(rr, Sr) {
      const Qr = Sr.completion.apply || Sr.completion.label;
      let Zr = rr.state.field(Ar).active.find((rr => rr.source == Sr.source));
      return Zr instanceof Gr && ("string" == typeof Qr ? rr.dispatch({
        ...Ur(rr.state, Qr, Zr.from, Zr.to),
        annotations: Nr.of(Sr.completion)
      }) : Qr(rr, Sr.completion, Zr.from, Zr.to), !0)
    }
    const ir = Lr(Ar, Vr);

    function wr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return Qr => {
        let Zr = Qr.state.field(Ar, !1);
        if (!Zr || !Zr.open || Zr.open.disabled || Date.now() - Zr.open.timestamp < Qr.state.facet(Kr).interactionDelay) return !1;
        let ar, jr = 1;
        "page" == Sr && (ar = (0, Wr.D)(Qr, Zr.open.tooltip)) && (jr = Math.max(2, Math.floor(ar.dom.offsetHeight / ar.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: Ir
        } = Zr.open.options, fr = Zr.open.selected > -1 ? Zr.open.selected + jr * (rr ? 1 : -1) : rr ? 0 : Ir - 1;
        return fr < 0 ? fr = "page" == Sr ? 0 : Ir - 1 : fr >= Ir && (fr = "page" == Sr ? Ir - 1 : 0), Qr.dispatch({
          effects: Tr.of(fr)
        }), !0
      }
    }
    const cr = rr => !!rr.state.field(Ar, !1) && (rr.dispatch({
      effects: zr.of(!0)
    }), !0);
    class Fr {
      constructor(rr, Sr) {
        this.active = rr, this.context = Sr, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const or = Wr.m.fromClass(class {
        constructor(rr) {
          this.view = rr, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let Sr of rr.state.field(Ar).active) Sr.isPending && this.startQuery(Sr)
        }
        update(rr) {
          let Sr = rr.state.field(Ar),
            Qr = rr.state.facet(Kr);
          if (!rr.selectionSet && !rr.docChanged && rr.startState.field(Ar) == Sr) return;
          let Zr = rr.transactions.some((rr => {
            let Sr = Cr(rr, Qr);
            return 8 & Sr || (rr.selection || rr.docChanged) && !(3 & Sr)
          }));
          for (let Ir = 0; Ir < this.running.length; Ir++) {
            let Sr = this.running[Ir];
            if (Zr || Sr.context.abortOnDocChange && rr.docChanged || Sr.updates.length + rr.transactions.length > 50 && Date.now() - Sr.time > 1e3) {
              for (let rr of Sr.context.abortListeners) try {
                rr()
              } catch (jr) {
                (0, Wr.Y)(this.view.state, jr)
              }
              Sr.context.abortListeners = null, this.running.splice(Ir--, 1)
            } else Sr.updates.push(...rr.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), rr.transactions.some((rr => rr.effects.some((rr => rr.is(zr))))) && (this.pendingStart = !0);
          let ar = this.pendingStart ? 50 : Qr.activateOnTypingDelay;
          if (this.debounceUpdate = Sr.active.some((rr => rr.isPending && !this.running.some((Sr => Sr.active.source == rr.source)))) ? setTimeout((() => this.startUpdate()), ar) : -1, 0 != this.composing)
            for (let Wr of rr.transactions) Wr.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && Wr.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: rr
          } = this.view, Sr = rr.field(Ar);
          for (let Qr of Sr.active) Qr.isPending && !this.running.some((rr => rr.active.source == Qr.source)) && this.startQuery(Qr);
          this.running.length && Sr.open && Sr.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Kr).updateSyncTime))
        }
        startQuery(rr) {
          let {
            state: Sr
          } = this.view, Qr = xr(Sr), Zr = new jr(Sr, Qr, rr.explicit, this.view), ar = new Fr(rr, Zr);
          this.running.push(ar), Promise.resolve(rr.source(Zr)).then((rr => {
            ar.context.aborted || (ar.done = rr || null, this.scheduleAccept())
          }), (rr => {
            this.view.dispatch({
              effects: Yr.of(null)
            }), (0, Wr.Y)(this.view.state, rr)
          }))
        }
        scheduleAccept() {
          this.running.every((rr => void 0 !== rr.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Kr).updateSyncTime))
        }
        accept() {
          var rr;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let Sr = [],
            Qr = this.view.state.facet(Kr),
            Zr = this.view.state.field(Ar);
          for (let Wr = 0; Wr < this.running.length; Wr++) {
            let ar = this.running[Wr];
            if (void 0 === ar.done) continue;
            if (this.running.splice(Wr--, 1), ar.done) {
              let Zr = xr(ar.updates.length ? ar.updates[0].startState : this.view.state),
                Wr = Math.min(Zr, ar.done.from + (ar.active.explicit ? 0 : 1)),
                jr = new Gr(ar.active.source, ar.active.explicit, Wr, ar.done, ar.done.from, null !== (rr = ar.done.to) && void 0 !== rr ? rr : Zr);
              for (let rr of ar.updates) jr = jr.update(rr, Qr);
              if (jr.hasResult()) {
                Sr.push(jr);
                continue
              }
            }
            let jr = Zr.active.find((rr => rr.source == ar.active.source));
            if (jr && jr.isPending)
              if (null == ar.done) {
                let rr = new Mr(ar.active.source, 0);
                for (let Sr of ar.updates) rr = rr.update(Sr, Qr);
                rr.isPending || Sr.push(rr)
              } else this.startQuery(jr)
          }(Sr.length || Zr.open && Zr.open.disabled) && this.view.dispatch({
            effects: kr.of(Sr)
          })
        }
      }, {
        eventHandlers: {
          blur(rr) {
            let Sr = this.view.state.field(Ar, !1);
            if (Sr && Sr.tooltip && this.view.state.facet(Kr).closeOnBlur) {
              let Qr = Sr.open && (0, Wr.D)(this.view, Sr.open.tooltip);
              Qr && Qr.dom.contains(rr.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: Yr.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: zr.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      br = "object" == typeof navigator && /Win/.test(navigator.platform),
      Jr = Zr.C.highest(Wr.i.domEventHandlers({
        keydown(rr, Sr) {
          let Qr = Sr.state.field(Ar, !1);
          if (!Qr || !Qr.open || Qr.open.disabled || Qr.open.selected < 0 || rr.key.length > 1 || rr.ctrlKey && (!br || !rr.altKey) || rr.metaKey) return !1;
          let Zr = Qr.open.options[Qr.open.selected],
            Wr = Qr.active.find((rr => rr.source == Zr.source)),
            ar = Zr.completion.commitCharacters || Wr.result.commitCharacters;
          return ar && ar.indexOf(rr.key) > -1 && Vr(Sr, Zr), !1
        }
      })),
      Dr = Wr.i.baseTheme({
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
    class dr {
      constructor(rr, Sr, Qr, Zr) {
        this.field = rr, this.line = Sr, this.from = Qr, this.to = Zr
      }
    }
    class sr {
      constructor(rr, Sr, Qr) {
        this.field = rr, this.from = Sr, this.to = Qr
      }
      map(rr) {
        let Sr = rr.mapPos(this.from, -1, Zr.y.TrackDel),
          Qr = rr.mapPos(this.to, 1, Zr.y.TrackDel);
        return null == Sr || null == Qr ? null : new sr(this.field, Sr, Qr)
      }
    }
    class ur {
      constructor(rr, Sr) {
        this.lines = rr, this.fieldPositions = Sr
      }
      instantiate(rr, Sr) {
        let Qr = [],
          Zr = [Sr],
          Wr = rr.doc.lineAt(Sr),
          jr = /^\s*/.exec(Wr.text)[0];
        for (let fr of this.lines) {
          if (Qr.length) {
            let Qr = jr,
              Wr = /^\t*/.exec(fr)[0].length;
            for (let Sr = 0; Sr < Wr; Sr++) Qr += rr.facet(ar.hb);
            Zr.push(Sr + Qr.length - Wr), fr = Qr + fr.slice(Wr)
          }
          Qr.push(fr), Sr += fr.length + 1
        }
        let Ir = this.fieldPositions.map((rr => new sr(rr.field, Zr[rr.line] + rr.from, Zr[rr.line] + rr.to)));
        return {
          text: Qr,
          yh: Ir
        }
      }
      static parse(rr) {
        let Sr, Qr = [],
          Zr = [],
          Wr = [];
        for (let ar of rr.split(/\r\n?|\n/)) {
          for (; Sr = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(ar);) {
            let rr = Sr[1] ? +Sr[1] : null,
              jr = Sr[2] || Sr[3] || "",
              Ir = -1,
              fr = jr.replace(/\\[{}]/g, (rr => rr[1]));
            for (let Sr = 0; Sr < Qr.length; Sr++)(null != rr ? Qr[Sr].seq == rr : fr && Qr[Sr].name == fr) && (Ir = Sr);
            if (Ir < 0) {
              let Sr = 0;
              for (; Sr < Qr.length && (null == rr || null != Qr[Sr].seq && Qr[Sr].seq < rr);) Sr++;
              Qr.splice(Sr, 0, {
                seq: rr,
                name: fr
              }), Ir = Sr;
              for (let rr of Wr) rr.field >= Ir && rr.field++
            }
            for (let Qr of Wr)
              if (Qr.line == Zr.length && Qr.from > Sr.index) {
                let rr = Sr[2] ? 3 + (Sr[1] || "").length : 2;
                Qr.from -= rr, Qr.to -= rr
              } Wr.push(new dr(Ir, Zr.length, Sr.index, Sr.index + fr.length)), ar = ar.slice(0, Sr.index) + jr + ar.slice(Sr.index + Sr[0].length)
          }
          ar = ar.replace(/\\([{}])/g, ((rr, Sr, Qr) => {
            for (let ar of Wr) ar.line == Zr.length && ar.from > Qr && (ar.from--, ar.to--);
            return Sr
          })), Zr.push(ar)
        }
        return new ur(Zr, Wr)
      }
    }
    let rS = Wr.c.widget({
        widget: new class extends Wr.q {
          toDOM() {
            let rr = document.createElement("span");
            return rr.className = "cm-snippetFieldPosition", rr
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      SS = Wr.c.mark({
        class: "cm-snippetField"
      });
    class QS {
      constructor(rr, Sr) {
        this.yh = rr, this.active = Sr, this.deco = Wr.c.set(rr.map((rr => (rr.from == rr.to ? rS : SS).range(rr.from, rr.to))), !0)
      }
      map(rr) {
        let Sr = [];
        for (let Qr of this.yh) {
          let Zr = Qr.map(rr);
          if (!Zr) return null;
          Sr.push(Zr)
        }
        return new QS(Sr, this.active)
      }
      selectionInsideField(rr) {
        return rr.yh.every((rr => this.yh.some((Sr => Sr.field == this.active && Sr.from <= rr.from && Sr.to >= rr.to))))
      }
    }
    const ZS = Zr.P.define({
        map: (rr, Sr) => rr && rr.map(Sr)
      }),
      WS = Zr.P.define(),
      aS = Zr.T.define({
        create: () => null,
        update(rr, Sr) {
          for (let Qr of Sr.effects) {
            if (Qr.is(ZS)) return Qr.value;
            if (Qr.is(WS) && rr) return new QS(rr.yh, Qr.value)
          }
          return rr && Sr.docChanged && (rr = rr.map(Sr.changes)), rr && Sr.selection && !rr.selectionInsideField(Sr.selection) && (rr = null), rr
        },
        provide: rr => Wr.i.OZ.from(rr, (rr => rr ? rr.deco : Wr.c.none))
      });

    function jS(rr, Sr) {
      return Zr.m.create(rr.filter((rr => rr.field == Sr)).map((rr => Zr.m.range(rr.from, rr.to))))
    }

    function IS(rr) {
      let Sr = ur.parse(rr);
      return (rr, Qr, Wr, ar) => {
        let {
          text: jr,
          yh: Ir
        } = Sr.instantiate(rr.state, Wr), {
          main: fr
        } = rr.state.selection, Er = {
          changes: {
            from: Wr,
            to: ar == fr.from ? fr.to : ar,
            insert: Zr.V.of(jr)
          },
          scrollIntoView: !0,
          annotations: Qr ? [Nr.of(Qr), Zr.Y.userEvent.of("input.complete")] : void 0
        };
        if (Ir.length && (Er.selection = jS(Ir, 0)), Ir.some((rr => rr.field > 0))) {
          let Sr = new QS(Ir, 0),
            Qr = Er.effects = [ZS.of(Sr)];
          void 0 === rr.state.field(aS, !1) && Qr.push(Zr.P.appendConfig.of([aS, xS, NS, Dr]))
        }
        rr.dispatch(rr.state.update(Er))
      }
    }

    function fS(rr) {
      return Sr => {
        let {
          state: Qr,
          dispatch: Zr
        } = Sr, Wr = Qr.field(aS, !1);
        if (!Wr || rr < 0 && 0 == Wr.active) return !1;
        let ar = Wr.active + rr,
          jr = rr > 0 && !Wr.yh.some((Sr => Sr.field == ar + rr));
        return Zr(Qr.update({
          selection: jS(Wr.yh, ar),
          effects: ZS.of(jr ? null : new QS(Wr.yh, ar)),
          scrollIntoView: !0
        })), !0
      }
    }
    const ES = [{
        key: "Tab",
        run: fS(1),
        shift: fS(-1)
      }, {
        key: "Escape",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr;
          return !!Sr.field(aS, !1) && (Qr(Sr.update({
            effects: ZS.of(null)
          })), !0)
        }
      }],
      pS = Zr.u.define({
        combine: rr => rr.length ? rr[0] : ES
      }),
      xS = Zr.C.highest(Wr.S.compute([pS], (rr => rr.facet(pS))));

    function mS(rr, Sr) {
      return {
        ...Sr,
        apply: IS(rr)
      }
    }
    const NS = Wr.i.domEventHandlers({
      mousedown(rr, Sr) {
        let Qr, Zr = Sr.state.field(aS, !1);
        if (!Zr || null == (Qr = Sr.posAtCoords({
            x: rr.clientX,
            y: rr.clientY
          }))) return !1;
        let Wr = Zr.yh.find((rr => rr.from <= Qr && rr.to >= Qr));
        return !(!Wr || Wr.field == Zr.active) && (Sr.dispatch({
          selection: jS(Zr.yh, Wr.field),
          effects: ZS.of(Zr.yh.some((rr => rr.field > Wr.field)) ? new QS(Zr.yh, Wr.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const US = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      tS = Zr.P.define({
        map(rr, Sr) {
          let Qr = Sr.mapPos(rr, -1, Zr.y.TrackAfter);
          return null == Qr ? void 0 : Qr
        }
      }),
      hS = new class extends Zr.L {};
    hS.startSide = 1, hS.endSide = -1;
    const zS = Zr.T.define({
      create: () => Zr.H.empty,
      update(rr, Sr) {
        if (rr = rr.map(Sr.changes), Sr.selection) {
          let Qr = Sr.state.doc.lineAt(Sr.selection.main.head);
          rr = rr.update({
            filter: rr => rr >= Qr.from && rr <= Qr.to
          })
        }
        for (let Qr of Sr.effects) Qr.is(tS) && (rr = rr.update({
          add: [hS.range(Qr.value, Qr.value + 1)]
        }));
        return rr
      }
    });

    function YS() {
      return [BS, zS]
    }
    const nS = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function eS(rr) {
      for (let Sr = 0; Sr < 16; Sr += 2)
        if (nS.charCodeAt(Sr) == rr) return nS.charAt(Sr + 1);
      return (0, Zr.kb)(rr < 128 ? rr : rr + 1)
    }

    function KS(rr, Sr) {
      return rr.languageDataAt("closeBrackets", Sr)[0] || US
    }
    const yS = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      BS = Wr.i.inputHandler.of(((rr, Sr, Qr, Wr) => {
        if ((yS ? rr.composing : rr.compositionStarted) || rr.state.readOnly) return !1;
        let ar = rr.state.selection.main;
        if (Wr.length > 2 || 2 == Wr.length && 1 == (0, Zr.bb)((0, Zr.ab)(Wr, 0)) || Sr != ar.from || Qr != ar.to) return !1;
        let jr = function(rr, Sr) {
          let Qr = KS(rr, rr.selection.main.head),
            Wr = Qr.brackets || US.brackets;
          for (let ar of Wr) {
            let jr = eS((0, Zr.ab)(ar, 0));
            if (Sr == ar) return jr == ar ? XS(rr, ar, Wr.indexOf(ar + ar + ar) > -1, Qr) : LS(rr, ar, jr, Qr.before || US.before);
            if (Sr == jr && vS(rr, rr.selection.main.from)) return lS(rr, ar, jr)
          }
          return null
        }(rr.state, Wr);
        return !!jr && (rr.dispatch(jr), !0)
      })),
      TS = [{
        key: "Backspace",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr;
          if (Sr.readOnly) return !1;
          let Wr = KS(Sr, Sr.selection.main.head).brackets || US.brackets,
            ar = null,
            jr = Sr.changeByRange((rr => {
              if (rr.empty) {
                let Qr = function(rr, Sr) {
                  let Qr = rr.sliceString(Sr - 2, Sr);
                  return (0, Zr.bb)((0, Zr.ab)(Qr, 0)) == Qr.length ? Qr : Qr.slice(1)
                }(Sr.doc, rr.head);
                for (let ar of Wr)
                  if (ar == Qr && OS(Sr.doc, rr.head) == eS((0, Zr.ab)(ar, 0))) return {
                    changes: {
                      from: rr.head - ar.length,
                      to: rr.head + ar.length
                    },
                    range: Zr.m.cursor(rr.head - ar.length)
                  }
              }
              return {
                range: ar = rr
              }
            }));
          return ar || Qr(Sr.update(jr, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !ar
        }
      }];

    function vS(rr, Sr) {
      let Qr = !1;
      return rr.field(zS).between(0, rr.doc.length, (rr => {
        rr == Sr && (Qr = !0)
      })), Qr
    }

    function OS(rr, Sr) {
      let Qr = rr.sliceString(Sr, Sr + 2);
      return Qr.slice(0, (0, Zr.bb)((0, Zr.ab)(Qr, 0)))
    }

    function LS(rr, Sr, Qr, Wr) {
      let ar = null,
        jr = rr.changeByRange((jr => {
          if (!jr.empty) return {
            changes: [{
              insert: Sr,
              from: jr.from
            }, {
              insert: Qr,
              from: jr.to
            }],
            effects: tS.of(jr.to + Sr.length),
            range: Zr.m.range(jr.anchor + Sr.length, jr.head + Sr.length)
          };
          let Ir = OS(rr.doc, jr.head);
          return !Ir || /\s/.test(Ir) || Wr.indexOf(Ir) > -1 ? {
            changes: {
              insert: Sr + Qr,
              from: jr.head
            },
            effects: tS.of(jr.head + Sr.length),
            range: Zr.m.cursor(jr.head + Sr.length)
          } : {
            range: ar = jr
          }
        }));
      return ar ? null : rr.update(jr, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function lS(rr, Sr, Qr) {
      let Wr = null,
        ar = rr.changeByRange((Sr => Sr.empty && OS(rr.doc, Sr.head) == Qr ? {
          changes: {
            from: Sr.head,
            to: Sr.head + Qr.length,
            insert: Qr
          },
          range: Zr.m.cursor(Sr.head + Qr.length)
        } : Wr = {
          range: Sr
        }));
      return Wr ? null : rr.update(ar, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function XS(rr, Sr, Qr, Wr) {
      let jr = Wr.stringPrefixes || US.stringPrefixes,
        Ir = null,
        fr = rr.changeByRange((Wr => {
          if (!Wr.empty) return {
            changes: [{
              insert: Sr,
              from: Wr.from
            }, {
              insert: Sr,
              from: Wr.to
            }],
            effects: tS.of(Wr.to + Sr.length),
            range: Zr.m.range(Wr.anchor + Sr.length, Wr.head + Sr.length)
          };
          let fr, Er = Wr.head,
            pr = OS(rr.doc, Er);
          if (pr == Sr) {
            if (PS(rr, Er)) return {
              changes: {
                insert: Sr + Sr,
                from: Er
              },
              effects: tS.of(Er + Sr.length),
              range: Zr.m.cursor(Er + Sr.length)
            };
            if (vS(rr, Er)) {
              let Wr = Qr && rr.sliceDoc(Er, Er + 3 * Sr.length) == Sr + Sr + Sr ? Sr + Sr + Sr : Sr;
              return {
                changes: {
                  from: Er,
                  to: Er + Wr.length,
                  insert: Wr
                },
                range: Zr.m.cursor(Er + Wr.length)
              }
            }
          } else {
            if (Qr && rr.sliceDoc(Er - 2 * Sr.length, Er) == Sr + Sr && (fr = HS(rr, Er - 2 * Sr.length, jr)) > -1 && PS(rr, fr)) return {
              changes: {
                insert: Sr + Sr + Sr + Sr,
                from: Er
              },
              effects: tS.of(Er + Sr.length),
              range: Zr.m.cursor(Er + Sr.length)
            };
            if (rr.charCategorizer(Er)(pr) != Zr.k.Word && HS(rr, Er, jr) > -1 && ! function(rr, Sr, Qr, Zr) {
                let Wr = (0, ar.xb)(rr).resolveInner(Sr, -1),
                  jr = Zr.reduce(((rr, Sr) => Math.max(rr, Sr.length)), 0);
                for (let ar = 0; ar < 5; ar++) {
                  let ar = rr.sliceDoc(Wr.from, Math.min(Wr.to, Wr.from + Qr.length + jr)),
                    Ir = ar.indexOf(Qr);
                  if (!Ir || Ir > -1 && Zr.indexOf(ar.slice(0, Ir)) > -1) {
                    let Sr = Wr.firstChild;
                    for (; Sr && Sr.from == Wr.from && Sr.to - Sr.from > Qr.length + Ir;) {
                      if (rr.sliceDoc(Sr.to - Qr.length, Sr.to) == Qr) return !1;
                      Sr = Sr.firstChild
                    }
                    return !0
                  }
                  let fr = Wr.to == Sr && Wr.parent;
                  if (!fr) break;
                  Wr = fr
                }
                return !1
              }(rr, Er, Sr, jr)) return {
              changes: {
                insert: Sr + Sr,
                from: Er
              },
              effects: tS.of(Er + Sr.length),
              range: Zr.m.cursor(Er + Sr.length)
            }
          }
          return {
            range: Ir = Wr
          }
        }));
      return Ir ? null : rr.update(fr, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function PS(rr, Sr) {
      let Qr = (0, ar.xb)(rr).resolveInner(Sr + 1);
      return Qr.parent && Qr.from == Sr
    }

    function HS(rr, Sr, Qr) {
      let Wr = rr.charCategorizer(Sr);
      if (Wr(rr.sliceDoc(Sr - 1, Sr)) != Zr.k.Word) return Sr;
      for (let ar of Qr) {
        let Qr = Sr - ar.length;
        if (rr.sliceDoc(Qr, Sr) == ar && Wr(rr.sliceDoc(Qr - 1, Qr)) != Zr.k.Word) return Qr
      }
      return -1
    }

    function qS() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Jr, Ar, Kr.of(rr), or, gS, Dr]
    }
    const RS = [{
        key: "Ctrl-Space",
        run: cr
      }, {
        mac: "Alt-`",
        run: cr
      }, {
        mac: "Alt-i",
        run: cr
      }, {
        key: "Escape",
        run: rr => {
          let Sr = rr.state.field(Ar, !1);
          return !(!Sr || !Sr.active.some((rr => 0 != rr.state))) && (rr.dispatch({
            effects: Yr.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: wr(!0)
      }, {
        key: "ArrowUp",
        run: wr(!1)
      }, {
        key: "PageDown",
        run: wr(!0, "page")
      }, {
        key: "PageUp",
        run: wr(!1, "page")
      }, {
        key: "Enter",
        run: rr => {
          let Sr = rr.state.field(Ar, !1);
          return !(rr.state.readOnly || !Sr || !Sr.open || Sr.open.selected < 0 || Sr.open.disabled || Date.now() - Sr.open.timestamp < rr.state.facet(Kr).interactionDelay) && Vr(rr, Sr.open.options[Sr.open.selected])
        }
      }],
      gS = Zr.C.highest(Wr.S.computeN([Kr], (rr => rr.facet(Kr).defaultKeymap ? [RS] : [])))
  },
  54016: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Er,
      e: () => mr,
      f: () => pr,
      h: () => xr
    });
    var Zr = Qr(53864);
    class Wr {
      constructor(rr, Sr, Qr, Zr) {
        this.origin = rr, this.changes = Sr, this.effects = Qr, this.clientID = Zr
      }
    }
    class ar {
      constructor(rr, Sr) {
        this.version = rr, this.unconfirmed = Sr
      }
    }
    const jr = Zr.u.define({
        combine(rr) {
          let Sr = (0, Zr.db)(rr, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: rr => rr
          });
          return null == Sr.clientID && (Sr.clientID = rr.length && rr[0].generatedID || ""), Sr
        }
      }),
      Ir = Zr.e.define(),
      fr = Zr.T.define({
        create: rr => new ar(rr.facet(jr).startVersion, []),
        update(rr, Sr) {
          let Qr = Sr.annotation(Ir);
          if (Qr) return Qr;
          let {
            sharedEffects: Zr,
            clientID: fr
          } = Sr.startState.facet(jr), Er = Zr(Sr);
          return Er.length || !Sr.changes.empty ? new ar(rr.version, rr.unconfirmed.concat(new Wr(Sr, Sr.changes, Er, fr))) : rr
        }
      });

    function Er() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [fr, jr.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, rr))]
    }

    function pr(rr, Sr) {
      let {
        version: Qr,
        unconfirmed: Er
      } = rr.field(fr), {
        clientID: pr
      } = rr.facet(jr);
      Qr += Sr.length;
      let xr = [],
        mr = null,
        Nr = 0;
      for (let Wr of Sr) {
        let rr = Nr < Er.length ? Er[Nr] : null;
        rr && rr.clientID == Wr.clientID ? (mr && (mr = mr.map(rr.changes, !0)), xr = Zr.P.mapEffects(xr, Wr.changes), Nr++) : (xr = Zr.P.mapEffects(xr, Wr.changes), Wr.effects && (xr = xr.concat(Wr.effects)), mr = mr ? mr.compose(Wr.changes) : Wr.changes)
      }
      if (Nr && (Er = Er.slice(Nr)), Er.length && (mr && (Er = Er.map((rr => {
          let Sr = rr.changes.map(mr);
          return mr = mr.map(rr.changes, !0), new Wr(rr.origin, Sr, Zr.P.mapEffects(rr.effects, mr), pr)
        }))), xr.length)) {
        let rr = Er.reduce(((rr, Sr) => rr.compose(Sr.changes)), Zr.ChangeSet.empty(Er[0].changes.length));
        xr = Zr.P.mapEffects(xr, rr)
      }
      return mr ? rr.update({
        changes: mr,
        effects: xr,
        annotations: [Zr.Y.addToHistory.of(!1), Zr.Y.remote.of(!0), Ir.of(new ar(Qr, Er))],
        filter: !1
      }) : rr.update({
        annotations: [Ir.of(new ar(Qr, Er))]
      })
    }

    function xr(rr) {
      return rr.field(fr).unconfirmed
    }

    function mr(rr) {
      return rr.field(fr).version
    }
  },
  53902: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => tS
    });
    var Zr = Qr(53895);
    class Wr {
      constructor(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        let Er = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          pr = arguments.length > 10 ? arguments[10] : void 0;
        this.p = rr, this.stack = Sr, this.state = Qr, this.reducePos = Zr, this.pos = Wr, this.score = ar, this.buffer = jr, this.bufferBase = Ir, this.curContext = fr, this.lookAhead = Er, this.parent = pr
      }
      toString() {
        return `[${this.stack.filter(((rr,Sr)=>Sr%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = rr.parser.context;
        return new Wr(rr, [], Sr, Qr, Qr, 0, [], 0, Zr ? new ar(Zr, Zr.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(rr, Sr) {
        this.stack.push(this.state, Sr, this.bufferBase + this.buffer.length), this.state = rr
      }
      reduce(rr) {
        var Sr;
        let Qr = rr >> 19,
          Zr = 65535 & rr,
          {
            parser: Wr
          } = this.p,
          ar = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          jr = Wr.dynamicPrecedence(Zr);
        if (jr && (this.score += jr), 0 == Qr) return this.pushState(Wr.getGoto(this.state, Zr, !0), this.reducePos), Zr < Wr.minRepeatTerm && this.storeNode(Zr, this.reducePos, this.reducePos, ar ? 8 : 4, !0), void this.reduceContext(Zr, this.reducePos);
        let Ir = this.stack.length - 3 * (Qr - 1) - (262144 & rr ? 6 : 0),
          fr = Ir ? this.stack[Ir - 2] : this.p.yh[0].from,
          Er = this.reducePos - fr;
        Er >= 2e3 && !(null === (Sr = this.p.parser.nodeSet.types[Zr]) || void 0 === Sr ? void 0 : Sr.isAnonymous) && (fr == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Er) : this.p.lastBigReductionSize < Er && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = fr, this.p.lastBigReductionSize = Er));
        let pr = Ir ? this.stack[Ir - 1] : 0,
          xr = this.bufferBase + this.buffer.length - pr;
        if (Zr < Wr.minRepeatTerm || 131072 & rr) {
          let rr = Wr.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Zr, fr, rr, xr + 4, !0)
        }
        if (262144 & rr) this.state = this.stack[Ir];
        else {
          let rr = this.stack[Ir - 3];
          this.state = Wr.getGoto(rr, Zr, !0)
        }
        for (; this.stack.length > Ir;) this.stack.pop();
        this.reduceContext(Zr, fr)
      }
      storeNode(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == rr && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let rr = this,
            Zr = this.buffer.length;
          if (0 == Zr && rr.parent && (Zr = rr.bufferBase - rr.parent.bufferBase, rr = rr.parent), Zr > 0 && 0 == rr.buffer[Zr - 4] && rr.buffer[Zr - 1] > -1) {
            if (Sr == Qr) return;
            if (rr.buffer[Zr - 2] >= Sr) return void(rr.buffer[Zr - 2] = Qr)
          }
        }
        if (Wr && this.pos != Qr) {
          let Wr = this.buffer.length;
          if (Wr > 0 && (0 != this.buffer[Wr - 4] || this.buffer[Wr - 1] < 0)) {
            let rr = !1;
            for (let Sr = Wr; Sr > 0 && this.buffer[Sr - 2] > Qr; Sr -= 4)
              if (this.buffer[Sr - 1] >= 0) {
                rr = !0;
                break
              } if (rr)
              for (; Wr > 0 && this.buffer[Wr - 2] > Qr;) this.buffer[Wr] = this.buffer[Wr - 4], this.buffer[Wr + 1] = this.buffer[Wr - 3], this.buffer[Wr + 2] = this.buffer[Wr - 2], this.buffer[Wr + 3] = this.buffer[Wr - 1], Wr -= 4, Zr > 4 && (Zr -= 4)
          }
          this.buffer[Wr] = rr, this.buffer[Wr + 1] = Sr, this.buffer[Wr + 2] = Qr, this.buffer[Wr + 3] = Zr
        } else this.buffer.push(rr, Sr, Qr, Zr)
      }
      shift(rr, Sr, Qr, Zr) {
        if (131072 & rr) this.pushState(65535 & rr, this.pos);
        else if (0 == (262144 & rr)) {
          let Wr = rr,
            {
              parser: ar
            } = this.p;
          this.pos = Zr;
          let jr = ar.stateFlag(Wr, 1);
          !jr && (Zr > Qr || Sr <= ar.maxNode) && (this.reducePos = Zr), this.pushState(Wr, jr ? Qr : Math.min(Qr, this.reducePos)), this.shiftContext(Sr, Qr), Sr <= ar.maxNode && this.buffer.push(Sr, Qr, Zr, 4)
        } else this.pos = Zr, this.shiftContext(Sr, Qr), Sr <= this.p.parser.maxNode && this.buffer.push(Sr, Qr, Zr, 4)
      }
      apply(rr, Sr, Qr, Zr) {
        65536 & rr ? this.reduce(rr) : this.shift(rr, Sr, Qr, Zr)
      }
      useNode(rr, Sr) {
        let Qr = this.p.reused.length - 1;
        (Qr < 0 || this.p.reused[Qr] != rr) && (this.p.reused.push(rr), Qr++);
        let Zr = this.pos;
        this.reducePos = this.pos = Zr + rr.length, this.pushState(Sr, Zr), this.buffer.push(Qr, Zr, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, rr, this, this.p.stream.reset(this.pos - rr.length)))
      }
      split() {
        let rr = this,
          Sr = rr.buffer.length;
        for (; Sr > 0 && rr.buffer[Sr - 2] > rr.reducePos;) Sr -= 4;
        let Qr = rr.buffer.slice(Sr),
          Zr = rr.bufferBase + Sr;
        for (; rr && Zr == rr.bufferBase;) rr = rr.parent;
        return new Wr(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, Qr, Zr, this.curContext, this.lookAhead, rr)
      }
      recoverByDelete(rr, Sr) {
        let Qr = rr <= this.p.parser.maxNode;
        Qr && this.storeNode(rr, this.pos, Sr, 4), this.storeNode(0, this.pos, Sr, Qr ? 8 : 4), this.pos = this.reducePos = Sr, this.score -= 190
      }
      canShift(rr) {
        for (let Sr = new jr(this);;) {
          let Qr = this.p.parser.stateSlot(Sr.state, 4) || this.p.parser.hasAction(Sr.state, rr);
          if (0 == Qr) return !1;
          if (0 == (65536 & Qr)) return !0;
          Sr.reduce(Qr)
        }
      }
      recoverByInsert(rr) {
        if (this.stack.length >= 300) return [];
        let Sr = this.p.parser.nextStates(this.state);
        if (Sr.length > 8 || this.stack.length >= 120) {
          let Qr = [];
          for (let Zr, Wr = 0; Wr < Sr.length; Wr += 2)(Zr = Sr[Wr + 1]) != this.state && this.p.parser.hasAction(Zr, rr) && Qr.push(Sr[Wr], Zr);
          if (this.stack.length < 120)
            for (let rr = 0; Qr.length < 8 && rr < Sr.length; rr += 2) {
              let Zr = Sr[rr + 1];
              Qr.some(((rr, Sr) => 1 & Sr && rr == Zr)) || Qr.push(Sr[rr], Zr)
            }
          Sr = Qr
        }
        let Qr = [];
        for (let Zr = 0; Zr < Sr.length && Qr.length < 4; Zr += 2) {
          let rr = Sr[Zr + 1];
          if (rr == this.state) continue;
          let Wr = this.split();
          Wr.pushState(rr, this.pos), Wr.storeNode(0, Wr.pos, Wr.pos, 4, !0), Wr.shiftContext(Sr[Zr], this.pos), Wr.reducePos = this.pos, Wr.score -= 200, Qr.push(Wr)
        }
        return Qr
      }
      forceReduce() {
        let {
          parser: rr
        } = this.p, Sr = rr.stateSlot(this.state, 5);
        if (0 == (65536 & Sr)) return !1;
        if (!rr.validAction(this.state, Sr)) {
          let Qr = Sr >> 19,
            Zr = 65535 & Sr,
            Wr = this.stack.length - 3 * Qr;
          if (Wr < 0 || rr.getGoto(this.stack[Wr], Zr, !1) < 0) {
            let rr = this.findForcedReduction();
            if (null == rr) return !1;
            Sr = rr
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(Sr), !0
      }
      findForcedReduction() {
        let {
          parser: rr
        } = this.p, Sr = [], Qr = (Zr, Wr) => {
          if (!Sr.includes(Zr)) return Sr.push(Zr), rr.allActions(Zr, (Sr => {
            if (393216 & Sr);
            else if (65536 & Sr) {
              let Qr = (Sr >> 19) - Wr;
              if (Qr > 1) {
                let Zr = 65535 & Sr,
                  Wr = this.stack.length - 3 * Qr;
                if (Wr >= 0 && rr.getGoto(this.stack[Wr], Zr, !1) >= 0) return Qr << 19 | 65536 | Zr
              }
            } else {
              let rr = Qr(Sr, Wr + 1);
              if (null != rr) return rr
            }
          }))
        };
        return Qr(this.state, 0)
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
          parser: rr
        } = this.p;
        return 65535 == rr.data[rr.stateSlot(this.state, 1)] && !rr.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(rr) {
        if (this.state != rr.state || this.stack.length != rr.stack.length) return !1;
        for (let Sr = 0; Sr < this.stack.length; Sr += 3)
          if (this.stack[Sr] != rr.stack[Sr]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(rr) {
        return this.p.parser.dialect.flags[rr]
      }
      shiftContext(rr, Sr) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, rr, this, this.p.stream.reset(Sr)))
      }
      reduceContext(rr, Sr) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, rr, this, this.p.stream.reset(Sr)))
      }
      emitContext() {
        let rr = this.buffer.length - 1;
        (rr < 0 || -3 != this.buffer[rr]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let rr = this.buffer.length - 1;
        (rr < 0 || -4 != this.buffer[rr]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(rr) {
        if (rr != this.curContext.context) {
          let Sr = new ar(this.curContext.tracker, rr);
          Sr.hash != this.curContext.hash && this.emitContext(), this.curContext = Sr
        }
      }
      setLookAhead(rr) {
        return !(rr <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = rr, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class ar {
      constructor(rr, Sr) {
        this.tracker = rr, this.context = Sr, this.hash = rr.strict ? rr.hash(Sr) : 0
      }
    }
    class jr {
      constructor(rr) {
        this.start = rr, this.state = rr.state, this.stack = rr.stack, this.base = this.stack.length
      }
      reduce(rr) {
        let Sr = 65535 & rr,
          Qr = rr >> 19;
        0 == Qr ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (Qr - 1);
        let Zr = this.start.p.parser.getGoto(this.stack[this.base - 3], Sr, !0);
        this.state = Zr
      }
    }
    class Ir {
      constructor(rr, Sr, Qr) {
        this.stack = rr, this.pos = Sr, this.index = Qr, this.buffer = rr.buffer, 0 == this.index && this.maybeNext()
      }
      static create(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr.bufferBase + rr.buffer.length;
        return new Ir(rr, Sr, Sr - rr.bufferBase)
      }
      maybeNext() {
        let rr = this.stack.parent;
        null != rr && (this.index = this.stack.bufferBase - rr.bufferBase, this.stack = rr, this.buffer = rr.buffer)
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
        return new Ir(this.stack, this.pos, this.index)
      }
    }

    function fr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof rr) return rr;
      let Qr = null;
      for (let Zr = 0, Wr = 0; Zr < rr.length;) {
        let ar = 0;
        for (;;) {
          let Sr = rr.charCodeAt(Zr++),
            Qr = !1;
          if (126 == Sr) {
            ar = 65535;
            break
          }
          Sr >= 92 && Sr--, Sr >= 34 && Sr--;
          let Wr = Sr - 32;
          if (Wr >= 46 && (Wr -= 46, Qr = !0), ar += Wr, Qr) break;
          ar *= 46
        }
        Qr ? Qr[Wr++] = ar : Qr = new Sr(ar)
      }
      return Qr
    }
    class Er {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const pr = new Er;
    class xr {
      constructor(rr, Sr) {
        this.input = rr, this.yh = Sr, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = pr, this.rangeIndex = 0, this.pos = this.chunkPos = Sr[0].from, this.range = Sr[0], this.end = Sr[Sr.length - 1].to, this.readNext()
      }
      resolveOffset(rr, Sr) {
        let Qr = this.range,
          Zr = this.rangeIndex,
          Wr = this.pos + rr;
        for (; Wr < Qr.from;) {
          if (!Zr) return null;
          let rr = this.yh[--Zr];
          Wr -= Qr.from - rr.to, Qr = rr
        }
        for (; Sr < 0 ? Wr > Qr.to : Wr >= Qr.to;) {
          if (Zr == this.yh.length - 1) return null;
          let rr = this.yh[++Zr];
          Wr += rr.from - Qr.to, Qr = rr
        }
        return Wr
      }
      clipPos(rr) {
        if (rr >= this.range.from && rr < this.range.to) return rr;
        for (let Sr of this.yh)
          if (Sr.to > rr) return Math.max(rr, Sr.from);
        return this.end
      }
      peek(rr) {
        let Sr, Qr, Zr = this.chunkOff + rr;
        if (Zr >= 0 && Zr < this.chunk.length) Sr = this.pos + rr, Qr = this.chunk.charCodeAt(Zr);
        else {
          let Zr = this.resolveOffset(rr, 1);
          if (null == Zr) return -1;
          if (Sr = Zr, Sr >= this.chunk2Pos && Sr < this.chunk2Pos + this.chunk2.length) Qr = this.chunk2.charCodeAt(Sr - this.chunk2Pos);
          else {
            let rr = this.rangeIndex,
              Zr = this.range;
            for (; Zr.to <= Sr;) Zr = this.yh[++rr];
            this.chunk2 = this.input.chunk(this.chunk2Pos = Sr), Sr + this.chunk2.length > Zr.to && (this.chunk2 = this.chunk2.slice(0, Zr.to - Sr)), Qr = this.chunk2.charCodeAt(0)
          }
        }
        return Sr >= this.token.lookAhead && (this.token.lookAhead = Sr + 1), Qr
      }
      acceptToken(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = Sr ? this.resolveOffset(Sr, -1) : this.pos;
        if (null == Qr || Qr < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = rr, this.token.end = Qr
      }
      acceptTokenTo(rr, Sr) {
        this.token.value = rr, this.token.end = Sr
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: rr,
            chunkPos: Sr
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = rr, this.chunk2Pos = Sr, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let rr = this.input.chunk(this.pos),
            Sr = this.pos + rr.length;
          this.chunk = Sr > this.range.to ? rr.slice(0, this.range.to - this.pos) : rr, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += rr; this.pos + rr >= this.range.to;) {
          if (this.rangeIndex == this.yh.length - 1) return this.setDone();
          rr -= this.range.to - this.pos, this.range = this.yh[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += rr, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.yh[this.rangeIndex = this.yh.length - 1], this.chunk = "", this.next = -1
      }
      reset(rr, Sr) {
        if (Sr ? (this.token = Sr, Sr.start = rr, Sr.lookAhead = rr + 1, Sr.value = Sr.extended = -1) : this.token = pr, this.pos != rr) {
          if (this.pos = rr, rr == this.end) return this.setDone(), this;
          for (; rr < this.range.from;) this.range = this.yh[--this.rangeIndex];
          for (; rr >= this.range.to;) this.range = this.yh[++this.rangeIndex];
          rr >= this.chunkPos && rr < this.chunkPos + this.chunk.length ? this.chunkOff = rr - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(rr, Sr) {
        if (rr >= this.chunkPos && Sr <= this.chunkPos + this.chunk.length) return this.chunk.slice(rr - this.chunkPos, Sr - this.chunkPos);
        if (rr >= this.chunk2Pos && Sr <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(rr - this.chunk2Pos, Sr - this.chunk2Pos);
        if (rr >= this.range.from && Sr <= this.range.to) return this.input.read(rr, Sr);
        let Qr = "";
        for (let Zr of this.yh) {
          if (Zr.from >= Sr) break;
          Zr.to > rr && (Qr += this.input.read(Math.max(Zr.from, rr), Math.min(Zr.to, Sr)))
        }
        return Qr
      }
    }
    class mr {
      constructor(rr, Sr) {
        this.data = rr, this.id = Sr
      }
      token(rr, Sr) {
        let {
          parser: Qr
        } = Sr.p;
        tr(this.data, rr, Sr, this.id, Qr.data, Qr.tokenPrecTable)
      }
    }
    mr.prototype.contextual = mr.prototype.fallback = mr.prototype.extend = !1;
    class Nr {
      constructor(rr, Sr, Qr) {
        this.precTable = Sr, this.elseToken = Qr, this.data = "string" == typeof rr ? fr(rr) : rr
      }
      token(rr, Sr) {
        let Qr = rr.pos,
          Zr = 0;
        for (;;) {
          let Qr = rr.next < 0,
            Wr = rr.resolveOffset(1, 1);
          if (tr(this.data, rr, Sr, 0, this.data, this.precTable), rr.token.value > -1) break;
          if (null == this.elseToken) return;
          if (Qr || Zr++, null == Wr) break;
          rr.reset(Wr, rr.token)
        }
        Zr && (rr.reset(Qr, rr.token), rr.acceptToken(this.elseToken, Zr))
      }
    }
    Nr.prototype.contextual = mr.prototype.fallback = mr.prototype.extend = !1;
    class Ur {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = rr, this.contextual = !!Sr.contextual, this.fallback = !!Sr.fallback, this.extend = !!Sr.extend
      }
    }

    function tr(rr, Sr, Qr, Zr, Wr, ar) {
      let jr = 0,
        Ir = 1 << Zr,
        {
          dialect: fr
        } = Qr.p.parser;
      rr: for (; 0 != (Ir & rr[jr]);) {
        let Qr = rr[jr + 1];
        for (let xr = jr + 3; xr < Qr; xr += 2)
          if ((rr[xr + 1] & Ir) > 0) {
            let Qr = rr[xr];
            if (fr.allows(Qr) && (-1 == Sr.token.value || Sr.token.value == Qr || zr(Qr, Sr.token.value, Wr, ar))) {
              Sr.acceptToken(Qr);
              break
            }
          } let Zr = Sr.next,
          Er = 0,
          pr = rr[jr + 2];
        if (!(Sr.next < 0 && pr > Er && 65535 == rr[Qr + 3 * pr - 3])) {
          for (; Er < pr;) {
            let Wr = Er + pr >> 1,
              ar = Qr + Wr + (Wr << 1),
              Ir = rr[ar],
              fr = rr[ar + 1] || 65536;
            if (Zr < Ir) pr = Wr;
            else {
              if (!(Zr >= fr)) {
                jr = rr[ar + 2], Sr.advance();
                continue rr
              }
              Er = Wr + 1
            }
          }
          break
        }
        jr = rr[Qr + 3 * pr - 1]
      }
    }

    function hr(rr, Sr, Qr) {
      for (let Zr, Wr = Sr; 65535 != (Zr = rr[Wr]); Wr++)
        if (Zr == Qr) return Wr - Sr;
      return -1
    }

    function zr(rr, Sr, Qr, Zr) {
      let Wr = hr(Qr, Zr, Sr);
      return Wr < 0 || hr(Qr, Zr, rr) < Wr
    }
    const Yr = "undefined" != typeof process && {
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
    let nr = null;

    function er(rr, Sr, Qr) {
      let Wr = rr.cursor(Zr.f.IncludeAnonymous);
      for (Wr.moveTo(Sr);;)
        if (!(Qr < 0 ? Wr.childBefore(Sr) : Wr.childAfter(Sr)))
          for (;;) {
            if ((Qr < 0 ? Wr.to < Sr : Wr.from > Sr) && !Wr.type.isError) return Qr < 0 ? Math.max(0, Math.min(Wr.to - 1, Sr - 25)) : Math.min(rr.length, Math.max(Wr.from + 1, Sr + 25));
            if (Qr < 0 ? Wr.prevSibling() : Wr.nextSibling()) break;
            if (!Wr.parent()) return Qr < 0 ? 0 : rr.length
          }
    }
    class Kr {
      constructor(rr, Sr) {
        this.fragments = rr, this.nodeSet = Sr, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let rr = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (rr) {
          for (this.safeFrom = rr.openStart ? er(rr.tree, rr.from + rr.offset, 1) - rr.offset : rr.from, this.safeTo = rr.openEnd ? er(rr.tree, rr.to + rr.offset, -1) - rr.offset : rr.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(rr.tree), this.start.push(-rr.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(rr) {
        if (rr < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= rr;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let Sr = this.trees.length - 1;
          if (Sr < 0) return this.nextFragment(), null;
          let Qr = this.trees[Sr],
            Wr = this.index[Sr];
          if (Wr == Qr.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let ar = Qr.children[Wr],
            jr = this.start[Sr] + Qr.positions[Wr];
          if (jr > rr) return this.nextStart = jr, null;
          if (ar instanceof Zr.A) {
            if (jr == rr) {
              if (jr < this.safeFrom) return null;
              let rr = jr + ar.length;
              if (rr <= this.safeTo) {
                let Sr = ar.prop(Zr.g.lookAhead);
                if (!Sr || rr + Sr < this.fragment.to) return ar
              }
            }
            this.index[Sr]++, jr + ar.length >= Math.max(this.safeFrom, rr) && (this.trees.push(ar), this.start.push(jr), this.index.push(0))
          } else this.index[Sr]++, this.nextStart = jr + ar.length
        }
      }
    }
    class yr {
      constructor(rr, Sr) {
        this.stream = Sr, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = rr.tokenizers.map((rr => new Er))
      }
      getActions(rr) {
        let Sr = 0,
          Qr = null,
          {
            parser: Zr
          } = rr.p,
          {
            tokenizers: Wr
          } = Zr,
          ar = Zr.stateSlot(rr.state, 3),
          jr = rr.curContext ? rr.curContext.hash : 0,
          Ir = 0;
        for (let fr = 0; fr < Wr.length; fr++) {
          if (0 == (1 << fr & ar)) continue;
          let Zr = Wr[fr],
            Er = this.tokens[fr];
          if ((!Qr || Zr.fallback) && ((Zr.contextual || Er.start != rr.pos || Er.mask != ar || Er.context != jr) && (this.updateCachedToken(Er, Zr, rr), Er.mask = ar, Er.context = jr), Er.lookAhead > Er.end + 25 && (Ir = Math.max(Er.lookAhead, Ir)), 0 != Er.value)) {
            let Wr = Sr;
            if (Er.extended > -1 && (Sr = this.addActions(rr, Er.extended, Er.end, Sr)), Sr = this.addActions(rr, Er.value, Er.end, Sr), !Zr.extend && (Qr = Er, Sr > Wr)) break
          }
        }
        for (; this.actions.length > Sr;) this.actions.pop();
        return Ir && rr.setLookAhead(Ir), Qr || rr.pos != this.stream.end || (Qr = new Er, Qr.value = rr.p.parser.eofTerm, Qr.start = Qr.end = rr.pos, Sr = this.addActions(rr, Qr.value, Qr.end, Sr)), this.mainToken = Qr, this.actions
      }
      getMainToken(rr) {
        if (this.mainToken) return this.mainToken;
        let Sr = new Er,
          {
            pos: Qr,
            p: Zr
          } = rr;
        return Sr.start = Qr, Sr.end = Math.min(Qr + 1, Zr.stream.end), Sr.value = Qr == Zr.stream.end ? Zr.parser.eofTerm : 0, Sr
      }
      updateCachedToken(rr, Sr, Qr) {
        let Zr = this.stream.clipPos(Qr.pos);
        if (Sr.token(this.stream.reset(Zr, rr), Qr), rr.value > -1) {
          let {
            parser: Sr
          } = Qr.p;
          for (let Zr = 0; Zr < Sr.specialized.length; Zr++)
            if (Sr.specialized[Zr] == rr.value) {
              let Wr = Sr.specializers[Zr](this.stream.read(rr.start, rr.end), Qr);
              if (Wr >= 0 && Qr.p.parser.dialect.allows(Wr >> 1)) {
                0 == (1 & Wr) ? rr.value = Wr >> 1 : rr.extended = Wr >> 1;
                break
              }
            }
        } else rr.value = 0, rr.end = this.stream.clipPos(Zr + 1)
      }
      putAction(rr, Sr, Qr, Zr) {
        for (let Wr = 0; Wr < Zr; Wr += 3)
          if (this.actions[Wr] == rr) return Zr;
        return this.actions[Zr++] = rr, this.actions[Zr++] = Sr, this.actions[Zr++] = Qr, Zr
      }
      addActions(rr, Sr, Qr, Zr) {
        let {
          state: Wr
        } = rr, {
          parser: ar
        } = rr.p, {
          data: jr
        } = ar;
        for (let Ir = 0; Ir < 2; Ir++)
          for (let rr = ar.stateSlot(Wr, Ir ? 2 : 1);; rr += 3) {
            if (65535 == jr[rr]) {
              if (1 != jr[rr + 1]) {
                0 == Zr && 2 == jr[rr + 1] && (Zr = this.putAction(lr(jr, rr + 2), Sr, Qr, Zr));
                break
              }
              rr = lr(jr, rr + 2)
            }
            jr[rr] == Sr && (Zr = this.putAction(lr(jr, rr + 1), Sr, Qr, Zr))
          }
        return Zr
      }
    }
    class Br {
      constructor(rr, Sr, Qr, Zr) {
        this.parser = rr, this.input = Sr, this.yh = Zr, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new xr(Sr, Zr), this.tokens = new yr(rr, this.stream), this.topTerm = rr.top[1];
        let {
          from: ar
        } = Zr[0];
        this.stacks = [Wr.start(this, rr.top[0], ar)], this.fragments = Qr.length && this.stream.end - ar > 4 * rr.bufferLength ? new Kr(Qr, rr.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let rr, Sr, Qr = this.stacks,
          Zr = this.minStackPos,
          Wr = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == Qr.length) {
          let [rr] = Qr;
          for (; rr.forceReduce() && rr.stack.length && rr.stack[rr.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let ar = 0; ar < Qr.length; ar++) {
          let jr = Qr[ar];
          for (;;) {
            if (this.tokens.mainToken = null, jr.pos > Zr) Wr.push(jr);
            else {
              if (this.advanceStack(jr, Wr, Qr)) continue;
              {
                rr || (rr = [], Sr = []), rr.push(jr);
                let Qr = this.tokens.getMainToken(jr);
                Sr.push(Qr.value, Qr.end)
              }
            }
            break
          }
        }
        if (!Wr.length) {
          let Sr = rr && function(rr) {
            let Sr = null;
            for (let Qr of rr) {
              let rr = Qr.p.stoppedAt;
              (Qr.pos == Qr.p.stream.end || null != rr && Qr.pos > rr) && Qr.p.parser.stateFlag(Qr.state, 2) && (!Sr || Sr.score < Qr.score) && (Sr = Qr)
            }
            return Sr
          }(rr);
          if (Sr) return Yr && console.log("Finish with " + this.stackID(Sr)), this.stackToTree(Sr);
          if (this.parser.strict) throw Yr && rr && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Zr);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && rr) {
          let Qr = null != this.stoppedAt && rr[0].pos > this.stoppedAt ? rr[0] : this.runRecovery(rr, Sr, Wr);
          if (Qr) return Yr && console.log("Force-finish " + this.stackID(Qr)), this.stackToTree(Qr.forceAll())
        }
        if (this.recovering) {
          let rr = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (Wr.length > rr)
            for (Wr.sort(((rr, Sr) => Sr.score - rr.score)); Wr.length > rr;) Wr.pop();
          Wr.some((rr => rr.reducePos > Zr)) && this.recovering--
        } else if (Wr.length > 1) {
          rr: for (let rr = 0; rr < Wr.length - 1; rr++) {
            let Sr = Wr[rr];
            for (let Qr = rr + 1; Qr < Wr.length; Qr++) {
              let Zr = Wr[Qr];
              if (Sr.sameState(Zr) || Sr.buffer.length > 500 && Zr.buffer.length > 500) {
                if (!((Sr.score - Zr.score || Sr.buffer.length - Zr.buffer.length) > 0)) {
                  Wr.splice(rr--, 1);
                  continue rr
                }
                Wr.splice(Qr--, 1)
              }
            }
          }
          Wr.length > 12 && (Wr.sort(((rr, Sr) => Sr.score - rr.score)), Wr.splice(12, Wr.length - 12))
        }
        this.minStackPos = Wr[0].pos;
        for (let ar = 1; ar < Wr.length; ar++) Wr[ar].pos < this.minStackPos && (this.minStackPos = Wr[ar].pos);
        return null
      }
      stopAt(rr) {
        if (null != this.stoppedAt && this.stoppedAt < rr) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = rr
      }
      advanceStack(rr, Sr, Qr) {
        let Wr = rr.pos,
          {
            parser: ar
          } = this,
          jr = Yr ? this.stackID(rr) + " -> " : "";
        if (null != this.stoppedAt && Wr > this.stoppedAt) return rr.forceReduce() ? rr : null;
        if (this.fragments) {
          let Sr = rr.curContext && rr.curContext.tracker.strict,
            Qr = Sr ? rr.curContext.hash : 0;
          for (let Ir = this.fragments.nodeAt(Wr); Ir;) {
            let Wr = this.parser.nodeSet.types[Ir.type.id] == Ir.type ? ar.getGoto(rr.state, Ir.type.id) : -1;
            if (Wr > -1 && Ir.length && (!Sr || (Ir.prop(Zr.g.contextHash) || 0) == Qr)) return rr.useNode(Ir, Wr), Yr && console.log(jr + this.stackID(rr) + ` (via reuse of ${ar.getName(Ir.type.id)})`), !0;
            if (!(Ir instanceof Zr.A) || 0 == Ir.children.length || Ir.positions[0] > 0) break;
            let fr = Ir.children[0];
            if (!(fr instanceof Zr.A && 0 == Ir.positions[0])) break;
            Ir = fr
          }
        }
        let Ir = ar.stateSlot(rr.state, 4);
        if (Ir > 0) return rr.reduce(Ir), Yr && console.log(jr + this.stackID(rr) + ` (via always-reduce ${ar.getName(65535&Ir)})`), !0;
        if (rr.stack.length >= 8400)
          for (; rr.stack.length > 6e3 && rr.forceReduce(););
        let fr = this.tokens.getActions(rr);
        for (let Zr = 0; Zr < fr.length;) {
          let Ir = fr[Zr++],
            Er = fr[Zr++],
            pr = fr[Zr++],
            xr = Zr == fr.length || !Qr,
            mr = xr ? rr : rr.split(),
            Nr = this.tokens.mainToken;
          if (mr.apply(Ir, Er, Nr ? Nr.start : mr.pos, pr), Yr && console.log(jr + this.stackID(mr) + ` (via ${0==(65536&Ir)?"shift":`reduce of ${ar.getName(65535&Ir)}`} for ${ar.getName(Er)} @ ${Wr}${mr==rr?"":", split"})`), xr) return !0;
          mr.pos > Wr ? Sr.push(mr) : Qr.push(mr)
        }
        return !1
      }
      advanceFully(rr, Sr) {
        let Qr = rr.pos;
        for (;;) {
          if (!this.advanceStack(rr, null, null)) return !1;
          if (rr.pos > Qr) return Tr(rr, Sr), !0
        }
      }
      runRecovery(rr, Sr, Qr) {
        let Zr = null,
          Wr = !1;
        for (let ar = 0; ar < rr.length; ar++) {
          let jr = rr[ar],
            Ir = Sr[ar << 1],
            fr = Sr[1 + (ar << 1)],
            Er = Yr ? this.stackID(jr) + " -> " : "";
          if (jr.deadEnd) {
            if (Wr) continue;
            if (Wr = !0, jr.restart(), Yr && console.log(Er + this.stackID(jr) + " (restarted)"), this.advanceFully(jr, Qr)) continue
          }
          let pr = jr.split(),
            xr = Er;
          for (let rr = 0; rr < 10 && pr.forceReduce(); rr++) {
            if (Yr && console.log(xr + this.stackID(pr) + " (via force-reduce)"), this.advanceFully(pr, Qr)) break;
            Yr && (xr = this.stackID(pr) + " -> ")
          }
          for (let rr of jr.recoverByInsert(Ir)) Yr && console.log(Er + this.stackID(rr) + " (via recover-insert)"), this.advanceFully(rr, Qr);
          this.stream.end > jr.pos ? (fr == jr.pos && (fr++, Ir = 0), jr.recoverByDelete(Ir, fr), Yr && console.log(Er + this.stackID(jr) + ` (via recover-delete ${this.parser.getName(Ir)})`), Tr(jr, Qr)) : (!Zr || Zr.score < pr.score) && (Zr = pr)
        }
        return Zr
      }
      stackToTree(rr) {
        return rr.close(), Zr.A.build({
          buffer: Ir.create(rr),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.yh[0].from,
          length: rr.pos - this.yh[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(rr) {
        let Sr = (nr || (nr = new WeakMap)).get(rr);
        return Sr || nr.set(rr, Sr = String.fromCodePoint(this.nextStackID++)), Sr + rr
      }
    }

    function Tr(rr, Sr) {
      for (let Qr = 0; Qr < Sr.length; Qr++) {
        let Zr = Sr[Qr];
        if (Zr.pos == rr.pos && Zr.sameState(rr)) return void(Sr[Qr].score < rr.score && (Sr[Qr] = rr))
      }
      Sr.push(rr)
    }
    class vr {
      constructor(rr, Sr, Qr) {
        this.source = rr, this.flags = Sr, this.disabled = Qr
      }
      allows(rr) {
        return !this.disabled || 0 == this.disabled[rr]
      }
    }
    const Or = rr => rr;
    class Lr extends Zr.u {
      constructor(rr) {
        if (super(), this.wrappers = [], 14 != rr.version) throw new RangeError(`Parser version (${rr.version}) doesn't match runtime version (14)`);
        let Sr = rr.nodeNames.split(" ");
        this.minRepeatTerm = Sr.length;
        for (let Zr = 0; Zr < rr.repeatNodeCount; Zr++) Sr.push("");
        let Qr = Object.keys(rr.topRules).map((Sr => rr.topRules[Sr][1])),
          Wr = [];
        for (let Zr = 0; Zr < Sr.length; Zr++) Wr.push([]);

        function ar(rr, Sr, Qr) {
          Wr[rr].push([Sr, Sr.deserialize(String(Qr))])
        }
        if (rr.nodeProps)
          for (let Ir of rr.nodeProps) {
            let rr = Ir[0];
            "string" == typeof rr && (rr = Zr.g[rr]);
            for (let Sr = 1; Sr < Ir.length;) {
              let Qr = Ir[Sr++];
              if (Qr >= 0) ar(Qr, rr, Ir[Sr++]);
              else {
                let Zr = Ir[Sr + -Qr];
                for (let Wr = -Qr; Wr > 0; Wr--) ar(Ir[Sr++], rr, Zr);
                Sr++
              }
            }
          }
        this.nodeSet = new Zr.j(Sr.map(((Sr, ar) => Zr.m.define({
          name: ar >= this.minRepeatTerm ? void 0 : Sr,
          id: ar,
          props: Wr[ar],
          top: Qr.indexOf(ar) > -1,
          error: 0 == ar,
          skipped: rr.skippedNodes && rr.skippedNodes.indexOf(ar) > -1
        })))), rr.propSources && (this.nodeSet = this.nodeSet.extend(...rr.propSources)), this.strict = !1, this.bufferLength = Zr.c;
        let jr = fr(rr.tokenData);
        this.context = rr.context, this.specializerSpecs = rr.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Zr = 0; Zr < this.specializerSpecs.length; Zr++) this.specialized[Zr] = this.specializerSpecs[Zr].term;
        this.specializers = this.specializerSpecs.map(Xr), this.states = fr(rr.states, Uint32Array), this.data = fr(rr.stateData), this.goto = fr(rr.goto), this.maxTerm = rr.maxTerm, this.tokenizers = rr.tokenizers.map((rr => "number" == typeof rr ? new mr(jr, rr) : rr)), this.topRules = rr.topRules, this.dialects = rr.dialects || {}, this.dynamicPrecedences = rr.dynamicPrecedences || null, this.tokenPrecTable = rr.tokenPrec, this.termNames = rr.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(rr, Sr, Qr) {
        let Zr = new Br(this, rr, Sr, Qr);
        for (let Wr of this.wrappers) Zr = Wr(Zr, rr, Sr, Qr);
        return Zr
      }
      getGoto(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = this.goto;
        if (Sr >= Zr[0]) return -1;
        for (let Wr = Zr[Sr + 1];;) {
          let Sr = Zr[Wr++],
            ar = 1 & Sr,
            jr = Zr[Wr++];
          if (ar && Qr) return jr;
          for (let Qr = Wr + (Sr >> 1); Wr < Qr; Wr++)
            if (Zr[Wr] == rr) return jr;
          if (ar) return -1
        }
      }
      hasAction(rr, Sr) {
        let Qr = this.data;
        for (let Zr = 0; Zr < 2; Zr++)
          for (let Wr, ar = this.stateSlot(rr, Zr ? 2 : 1);; ar += 3) {
            if (65535 == (Wr = Qr[ar])) {
              if (1 != Qr[ar + 1]) {
                if (2 == Qr[ar + 1]) return lr(Qr, ar + 2);
                break
              }
              Wr = Qr[ar = lr(Qr, ar + 2)]
            }
            if (Wr == Sr || 0 == Wr) return lr(Qr, ar + 1)
          }
        return 0
      }
      stateSlot(rr, Sr) {
        return this.states[6 * rr + Sr]
      }
      stateFlag(rr, Sr) {
        return (this.stateSlot(rr, 0) & Sr) > 0
      }
      validAction(rr, Sr) {
        return !!this.allActions(rr, (rr => rr == Sr || null))
      }
      allActions(rr, Sr) {
        let Qr = this.stateSlot(rr, 4),
          Zr = Qr ? Sr(Qr) : void 0;
        for (let Wr = this.stateSlot(rr, 1); null == Zr; Wr += 3) {
          if (65535 == this.data[Wr]) {
            if (1 != this.data[Wr + 1]) break;
            Wr = lr(this.data, Wr + 2)
          }
          Zr = Sr(lr(this.data, Wr + 1))
        }
        return Zr
      }
      nextStates(rr) {
        let Sr = [];
        for (let Qr = this.stateSlot(rr, 1);; Qr += 3) {
          if (65535 == this.data[Qr]) {
            if (1 != this.data[Qr + 1]) break;
            Qr = lr(this.data, Qr + 2)
          }
          if (0 == (1 & this.data[Qr + 2])) {
            let rr = this.data[Qr + 1];
            Sr.some(((Sr, Qr) => 1 & Qr && Sr == rr)) || Sr.push(this.data[Qr], rr)
          }
        }
        return Sr
      }
      configure(rr) {
        let Sr = Object.assign(Object.create(Lr.prototype), this);
        if (rr.props && (Sr.nodeSet = this.nodeSet.extend(...rr.props)), rr.top) {
          let Qr = this.topRules[rr.top];
          if (!Qr) throw new RangeError(`Invalid top rule name ${rr.top}`);
          Sr.top = Qr
        }
        return rr.tokenizers && (Sr.tokenizers = this.tokenizers.map((Sr => {
          let Qr = rr.tokenizers.find((rr => rr.from == Sr));
          return Qr ? Qr.to : Sr
        }))), rr.specializers && (Sr.specializers = this.specializers.slice(), Sr.specializerSpecs = this.specializerSpecs.map(((Qr, Zr) => {
          let Wr = rr.specializers.find((rr => rr.from == Qr.external));
          if (!Wr) return Qr;
          let ar = Object.assign(Object.assign({}, Qr), {
            external: Wr.to
          });
          return Sr.specializers[Zr] = Xr(ar), ar
        }))), rr.contextTracker && (Sr.context = rr.contextTracker), rr.dialect && (Sr.dialect = this.parseDialect(rr.dialect)), null != rr.strict && (Sr.strict = rr.strict), rr.wrap && (Sr.wrappers = Sr.wrappers.concat(rr.wrap)), null != rr.bufferLength && (Sr.bufferLength = rr.bufferLength), Sr
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(rr) {
        return this.termNames ? this.termNames[rr] : String(rr <= this.maxNode && this.nodeSet.types[rr].name || rr)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(rr) {
        let Sr = this.dynamicPrecedences;
        return null == Sr ? 0 : Sr[rr] || 0
      }
      parseDialect(rr) {
        let Sr = Object.keys(this.dialects),
          Qr = Sr.map((() => !1));
        if (rr)
          for (let Wr of rr.split(" ")) {
            let rr = Sr.indexOf(Wr);
            rr >= 0 && (Qr[rr] = !0)
          }
        let Zr = null;
        for (let Wr = 0; Wr < Sr.length; Wr++)
          if (!Qr[Wr])
            for (let rr, Qr = this.dialects[Sr[Wr]]; 65535 != (rr = this.data[Qr++]);)(Zr || (Zr = new Uint8Array(this.maxTerm + 1)))[rr] = 1;
        return new vr(rr, Qr, Zr)
      }
      static deserialize(rr) {
        return new Lr(rr)
      }
    }

    function lr(rr, Sr) {
      return rr[Sr] | rr[Sr + 1] << 16
    }

    function Xr(rr) {
      if (rr.external) {
        let Sr = rr.extend ? 1 : 0;
        return (Qr, Zr) => rr.external(Qr, Zr) << 1 | Sr
      }
      return rr.get
    }
    var Pr = Qr(53897);
    const Hr = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      qr = new class {
        constructor(rr) {
          this.start = rr.start, this.shift = rr.shift || Or, this.reduce = rr.reduce || Or, this.reuse = rr.reuse || Or, this.hash = rr.hash || (() => 0), this.strict = !1 !== rr.strict
        }
      }({
        start: !1,
        shift: (rr, Sr) => 5 == Sr || 6 == Sr || 320 == Sr ? rr : 321 == Sr,
        strict: !1
      }),
      Rr = new Ur(((rr, Sr) => {
        let {
          next: Qr
        } = rr;
        (125 == Qr || -1 == Qr || Sr.context) && rr.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      gr = new Ur(((rr, Sr) => {
        let Qr, {
          next: Zr
        } = rr;
        Hr.indexOf(Zr) > -1 || (47 != Zr || 47 != (Qr = rr.peek(1)) && 42 != Qr) && (125 == Zr || 59 == Zr || -1 == Zr || Sr.context || rr.acceptToken(316))
      }), {
        contextual: !0
      }),
      Cr = new Ur(((rr, Sr) => {
        91 != rr.next || Sr.context || rr.acceptToken(317)
      }), {
        contextual: !0
      }),
      Mr = new Ur(((rr, Sr) => {
        let {
          next: Qr
        } = rr;
        if (43 == Qr || 45 == Qr) {
          if (rr.advance(), Qr == rr.next) {
            rr.advance();
            let Qr = !Sr.context && Sr.canShift(1);
            rr.acceptToken(Qr ? 1 : 2)
          }
        } else 63 == Qr && 46 == rr.peek(1) && (rr.advance(), rr.advance(), (rr.next < 48 || rr.next > 57) && rr.acceptToken(3))
      }), {
        contextual: !0
      });

    function Gr(rr, Sr) {
      return rr >= 65 && rr <= 90 || rr >= 97 && rr <= 122 || 95 == rr || rr >= 192 || !Sr && rr >= 48 && rr <= 57
    }
    const kr = new Ur(((rr, Sr) => {
        if (60 != rr.next || !Sr.dialectEnabled(0)) return;
        if (rr.advance(), 47 == rr.next) return;
        let Qr = 0;
        for (; Hr.indexOf(rr.next) > -1;) rr.advance(), Qr++;
        if (Gr(rr.next, !0)) {
          for (rr.advance(), Qr++; Gr(rr.next, !1);) rr.advance(), Qr++;
          for (; Hr.indexOf(rr.next) > -1;) rr.advance(), Qr++;
          if (44 == rr.next) return;
          for (let Sr = 0;; Sr++) {
            if (7 == Sr) {
              if (!Gr(rr.next, !0)) return;
              break
            }
            if (rr.next != "extends".charCodeAt(Sr)) break;
            rr.advance(), Qr++
          }
        }
        rr.acceptToken(4, -Qr)
      })),
      Ar = (0, Pr.g)({
        "get set async static": Pr.m.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": Pr.m.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": Pr.m.operatorKeyword,
        "let var const using function class extends": Pr.m.definitionKeyword,
        "import export from": Pr.m.moduleKeyword,
        "with debugger new": Pr.m.keyword,
        TemplateString: Pr.m.special(Pr.m.string),
        super: Pr.m.atom,
        BooleanLiteral: Pr.m.bool,
        this: Pr.m.self,
        null: Pr.m.null,
        Star: Pr.m.modifier,
        VariableName: Pr.m.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": Pr.m.function(Pr.m.variableName),
        VariableDefinition: Pr.m.definition(Pr.m.variableName),
        Label: Pr.m.labelName,
        PropertyName: Pr.m.propertyName,
        PrivatePropertyName: Pr.m.special(Pr.m.propertyName),
        "CallExpression/MemberExpression/PropertyName": Pr.m.function(Pr.m.propertyName),
        "FunctionDeclaration/VariableDefinition": Pr.m.function(Pr.m.definition(Pr.m.variableName)),
        "ClassDeclaration/VariableDefinition": Pr.m.definition(Pr.m.className),
        "NewExpression/VariableName": Pr.m.className,
        PropertyDefinition: Pr.m.definition(Pr.m.propertyName),
        PrivatePropertyDefinition: Pr.m.definition(Pr.m.special(Pr.m.propertyName)),
        UpdateOp: Pr.m.updateOperator,
        "LineComment Hashbang": Pr.m.lineComment,
        BlockComment: Pr.m.blockComment,
        Number: Pr.m.number,
        String: Pr.m.string,
        Escape: Pr.m.escape,
        ArithOp: Pr.m.arithmeticOperator,
        LogicOp: Pr.m.logicOperator,
        BitOp: Pr.m.bitwiseOperator,
        CompareOp: Pr.m.compareOperator,
        RegExp: Pr.m.regexp,
        Equals: Pr.m.definitionOperator,
        Arrow: Pr.m.function(Pr.m.punctuation),
        ": Spread": Pr.m.punctuation,
        "( )": Pr.m.paren,
        "[ ]": Pr.m.squareBracket,
        "{ }": Pr.m.brace,
        "InterpolationStart InterpolationEnd": Pr.m.special(Pr.m.brace),
        ".": Pr.m.derefOperator,
        ", ;": Pr.m.separator,
        "@": Pr.m.meta,
        TypeName: Pr.m.typeName,
        TypeDefinition: Pr.m.definition(Pr.m.typeName),
        "type enum interface implements namespace module declare": Pr.m.definitionKeyword,
        "abstract global Privacy readonly override": Pr.m.modifier,
        "is keyof unique infer asserts": Pr.m.operatorKeyword,
        JSXAttributeValue: Pr.m.attributeValue,
        JSXText: Pr.m.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": Pr.m.angleBracket,
        "JSXIdentifier JSXNameSpacedName": Pr.m.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": Pr.m.attributeName,
        "JSXBuiltin/JSXIdentifier": Pr.m.standard(Pr.m.tagName)
      }),
      Vr = {
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
      ir = {
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
      wr = {
        __proto__: null,
        "<": 193
      },
      cr = Lr.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: qr,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [Ar],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [gr, Cr, Mr, kr, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Rr, new Nr("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new Nr("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: rr => Vr[rr] || -1
        }, {
          term: 343,
          get: rr => ir[rr] || -1
        }, {
          term: 95,
          get: rr => wr[rr] || -1
        }],
        tokenPrec: 15201
      });
    var Fr = Qr(53892),
      or = Qr(53864),
      br = Qr(53872),
      Jr = Qr(53855);
    const Dr = [(0, Jr.s)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, Jr.s)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, Jr.s)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, Jr.s)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, Jr.s)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, Jr.s)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, Jr.s)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, Jr.s)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, Jr.s)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, Jr.s)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, Jr.s)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      dr = Dr.concat([(0, Jr.s)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, Jr.s)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, Jr.s)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      sr = new Zr.q,
      ur = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function rS(rr) {
      return (Sr, Qr) => {
        let Zr = Sr.node.getChild("VariableDefinition");
        return Zr && Qr(Zr, rr), !0
      }
    }
    const SS = ["FunctionDeclaration"],
      QS = {
        FunctionDeclaration: rS("function"),
        ClassDeclaration: rS("class"),
        ClassExpression: () => !0,
        EnumDeclaration: rS("constant"),
        TypeAliasDeclaration: rS("type"),
        NamespaceDeclaration: rS("namespace"),
        VariableDefinition(rr, Sr) {
          rr.matchContext(SS) || Sr(rr, "variable")
        },
        TypeDefinition(rr, Sr) {
          Sr(rr, "type")
        },
        __proto__: null
      };

    function ZS(rr, Sr) {
      let Qr = sr.get(Sr);
      if (Qr) return Qr;
      let Wr = [],
        ar = !0;

      function jr(Sr, Qr) {
        let Zr = rr.sliceString(Sr.from, Sr.to);
        Wr.push({
          label: Zr,
          type: Qr
        })
      }
      return Sr.cursor(Zr.f.IncludeAnonymous).iterate((Sr => {
        if (ar) ar = !1;
        else if (Sr.name) {
          let rr = QS[Sr.name];
          if (rr && rr(Sr, jr) || ur.has(Sr.name)) return !1
        } else if (Sr.to - Sr.from > 8192) {
          for (let Qr of ZS(rr, Sr.node)) Wr.push(Qr);
          return !1
        }
      })), sr.set(Sr, Wr), Wr
    }
    const WS = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      aS = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function jS(rr) {
      let Sr = (0, Fr.xb)(rr.state).resolveInner(rr.pos, -1);
      if (aS.indexOf(Sr.name) > -1) return null;
      let Qr = "VariableName" == Sr.name || Sr.to - Sr.from < 20 && WS.test(rr.state.sliceDoc(Sr.from, Sr.to));
      if (!Qr && !rr.explicit) return null;
      let Zr = [];
      for (let Wr = Sr; Wr; Wr = Wr.parent) ur.has(Wr.name) && (Zr = Zr.concat(ZS(rr.state.doc, Wr)));
      return {
        options: Zr,
        from: Qr ? Sr.from : rr.pos,
        validFor: WS
      }
    }
    const IS = Fr.h.define({
        name: "javascript",
        parser: cr.configure({
          props: [Fr.Z.add({
            IfStatement: (0, Fr.o)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, Fr.o)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: Fr.A,
            SwitchBody: rr => {
              let Sr = rr.textAfter,
                Qr = /^\s*\}/.test(Sr),
                Zr = /^\s*(case|default)\b/.test(Sr);
              return rr.baseIndent + (Qr ? 0 : Zr ? 1 : 2) * rr.unit
            },
            Block: (0, Fr.z)({
              closing: "}"
            }),
            ArrowFunction: rr => rr.baseIndent + rr.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, Fr.o)({
              except: /^\s*{/
            }),
            JSXElement(rr) {
              let Sr = /^\s*<\//.test(rr.textAfter);
              return rr.lineIndent(rr.node.from) + (Sr ? 0 : rr.unit)
            },
            JSXEscape(rr) {
              let Sr = /\s*\}/.test(rr.textAfter);
              return rr.lineIndent(rr.node.from) + (Sr ? 0 : rr.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": rr => rr.column(rr.node.from) + rr.unit
          }), Fr.O.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": Fr.I,
            BlockComment: rr => ({
              from: rr.from + 2,
              to: rr.to - 2
            }),
            JSXElement(rr) {
              let Sr = rr.firstChild;
              if (!Sr || "JSXSelfClosingTag" == Sr.name) return null;
              let Qr = rr.lastChild;
              return {
                from: Sr.to,
                to: Qr.type.isError ? rr.to : Qr.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(rr) {
              var Sr;
              let Qr = null === (Sr = rr.firstChild) || void 0 === Sr ? void 0 : Sr.nextSibling,
                Zr = rr.lastChild;
              return !Qr || Qr.type.isError ? null : {
                from: Qr.to,
                to: Zr.type.isError ? rr.to : Zr.from
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
      fS = {
        test: rr => /^JSX/.test(rr.name),
        facet: (0, Fr.v)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      ES = IS.configure({
        dialect: "ts"
      }, "typescript"),
      pS = IS.configure({
        dialect: "jsx",
        props: [Fr.mb.add((rr => rr.isTop ? [fS] : void 0))]
      }),
      xS = IS.configure({
        dialect: "jsx ts",
        props: [Fr.mb.add((rr => rr.isTop ? [fS] : void 0))]
      }, "typescript");
    let mS = rr => ({
      label: rr,
      type: "keyword"
    });
    const NS = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(mS),
      US = NS.concat(["declare", "implements", "private", "protected", "public"].map(mS));

    function tS() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Sr = rr.jsx ? rr.typescript ? xS : pS : rr.typescript ? ES : IS,
        Qr = rr.typescript ? dr.concat(US) : Dr.concat(NS);
      return new Fr.i(Sr, [IS.data.of({
        autocomplete: (0, Jr.r)(aS, (0, Jr.j)(Qr))
      }), IS.data.of({
        autocomplete: jS
      }), rr.jsx ? YS : []])
    }

    function hS(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rr.length;
      for (let Zr = null === Sr || void 0 === Sr ? void 0 : Sr.firstChild; Zr; Zr = Zr.nextSibling)
        if ("JSXIdentifier" == Zr.name || "JSXBuiltin" == Zr.name || "JSXNamespacedName" == Zr.name || "JSXMemberExpression" == Zr.name) return rr.sliceString(Zr.from, Math.min(Zr.to, Qr));
      return ""
    }
    const zS = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      YS = br.i.inputHandler.of(((rr, Sr, Qr, Zr, Wr) => {
        if ((zS ? rr.composing : rr.compositionStarted) || rr.state.readOnly || Sr != Qr || ">" != Zr && "/" != Zr || !IS.isActiveAt(rr.state, Sr, -1)) return !1;
        let ar = Wr(),
          {
            state: jr
          } = ar,
          Ir = jr.changeByRange((rr => {
            var Sr;
            let Qr, {
                head: Wr
              } = rr,
              ar = (0, Fr.xb)(jr).resolveInner(Wr - 1, -1);
            if ("JSXStartTag" == ar.name && (ar = ar.parent), jr.doc.sliceString(Wr - 1, Wr) != Zr || "JSXAttributeValue" == ar.name && ar.to > Wr);
            else {
              if (">" == Zr && "JSXFragmentTag" == ar.name) return {
                range: rr,
                changes: {
                  from: Wr,
                  insert: "</>"
                }
              };
              if ("/" == Zr && "JSXStartCloseTag" == ar.name) {
                let rr = ar.parent,
                  Zr = rr.parent;
                if (Zr && rr.from == Wr - 2 && ((Qr = hS(jr.doc, Zr.firstChild, Wr)) || "JSXFragmentTag" == (null === (Sr = Zr.firstChild) || void 0 === Sr ? void 0 : Sr.name))) {
                  let rr = `${Qr}>`;
                  return {
                    range: or.m.cursor(Wr + rr.length, -1),
                    changes: {
                      from: Wr,
                      insert: rr
                    }
                  }
                }
              } else if (">" == Zr) {
                let Sr = function(rr) {
                  for (;;) {
                    if ("JSXOpenTag" == rr.name || "JSXSelfClosingTag" == rr.name || "JSXFragmentTag" == rr.name) return rr;
                    if ("JSXEscape" == rr.name || !rr.parent) return null;
                    rr = rr.parent
                  }
                }(ar);
                if (Sr && "JSXOpenTag" == Sr.name && !/^\/?>|^<\//.test(jr.doc.sliceString(Wr, Wr + 2)) && (Qr = hS(jr.doc, Sr, Wr))) return {
                  range: rr,
                  changes: {
                    from: Wr,
                    insert: `</${Qr}>`
                  }
                }
              }
            }
            return {
              range: rr
            }
          }));
        return !Ir.changes.empty && (rr.dispatch([ar, jr.update(Ir, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  53892: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      A: () => wr,
      E: () => YS,
      I: () => Dr,
      L: () => ES,
      O: () => Jr,
      P: () => zr,
      S: () => Pr,
      V: () => qr,
      Z: () => gr,
      ab: () => or,
      b: () => eS,
      d: () => Rr,
      eb: () => Hr,
      h: () => Ur,
      hb: () => Xr,
      i: () => Lr,
      jb: () => iS,
      l: () => GS,
      mb: () => xr,
      o: () => cr,
      qb: () => TS,
      s: () => LS,
      ub: () => hr,
      v: () => pr,
      xb: () => tr,
      z: () => Vr
    });
    var Zr, Wr = Qr(53895),
      ar = Qr(53864),
      jr = Qr(53872),
      Ir = Qr(53897),
      fr = Qr(53878);
    const Er = new Wr.g;

    function pr(rr) {
      return ar.u.define({
        combine: rr ? Sr => Sr.concat(rr) : void 0
      })
    }
    const xr = new Wr.g;
    class mr {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = rr, this.name = Zr, ar.q.prototype.hasOwnProperty("tree") || Object.defineProperty(ar.q.prototype, "tree", {
          get() {
            return tr(this)
          }
        }), this.parser = Sr, this.extension = [Or.of(this), ar.q.languageData.of(((rr, Sr, Qr) => {
          let Zr = Nr(rr, Sr, Qr),
            Wr = Zr.type.prop(Er);
          if (!Wr) return [];
          let ar = rr.facet(Wr),
            jr = Zr.type.prop(xr);
          if (jr) {
            let Wr = Zr.resolve(Sr - Zr.from, Qr);
            for (let Sr of jr)
              if (Sr.test(Wr, rr)) {
                let Qr = rr.facet(Sr.facet);
                return "replace" == Sr.type ? Qr : Qr.concat(ar)
              }
          }
          return ar
        }))].concat(Qr)
      }
      isActiveAt(rr, Sr) {
        return Nr(rr, Sr, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Er) == this.data
      }
      findRegions(rr) {
        let Sr = rr.facet(Or);
        if ((null === Sr || void 0 === Sr ? void 0 : Sr.data) == this.data) return [{
          from: 0,
          to: rr.doc.length
        }];
        if (!Sr || !Sr.allowsNesting) return [];
        let Qr = [],
          Zr = (rr, Sr) => {
            if (rr.prop(Er) == this.data) return void Qr.push({
              from: Sr,
              to: Sr + rr.length
            });
            let ar = rr.prop(Wr.g.mounted);
            if (ar) {
              if (ar.tree.prop(Er) == this.data) {
                if (ar.overlay)
                  for (let rr of ar.overlay) Qr.push({
                    from: rr.from + Sr,
                    to: rr.to + Sr
                  });
                else Qr.push({
                  from: Sr,
                  to: Sr + rr.length
                });
                return
              }
              if (ar.overlay) {
                let rr = Qr.length;
                if (Zr(ar.tree, ar.overlay[0].from + Sr), Qr.length > rr) return
              }
            }
            for (let Qr = 0; Qr < rr.children.length; Qr++) {
              let ar = rr.children[Qr];
              ar instanceof Wr.A && Zr(ar, rr.positions[Qr] + Sr)
            }
          };
        return Zr(tr(rr), 0), Qr
      }
      get allowsNesting() {
        return !0
      }
    }

    function Nr(rr, Sr, Qr) {
      let Zr = rr.facet(Or),
        ar = tr(rr).topNode;
      if (!Zr || Zr.allowsNesting)
        for (let jr = ar; jr; jr = jr.enter(Sr, Qr, Wr.f.ExcludeBuffers | Wr.f.EnterBracketed)) jr.type.isTop && (ar = jr);
      return ar
    }
    mr.setState = ar.P.define();
    class Ur extends mr {
      constructor(rr, Sr, Qr) {
        super(rr, Sr, [], Qr), this.parser = Sr
      }
      static define(rr) {
        let Sr = pr(rr.languageData);
        return new Ur(Sr, rr.parser.configure({
          props: [Er.add((rr => rr.isTop ? Sr : void 0))]
        }), rr.name)
      }
      configure(rr, Sr) {
        return new Ur(this.data, this.parser.configure(rr), Sr || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function tr(rr) {
      let Sr = rr.field(mr.state, !1);
      return Sr ? Sr.tree : Wr.A.empty
    }

    function hr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr.doc.length;
      var Qr;
      return (null === (Qr = rr.field(mr.state, !1)) || void 0 === Qr ? void 0 : Qr.context.isDone(Sr)) || !1
    }

    function zr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr.viewport.to,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Zr = function(rr, Sr) {
          let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Zr;
          let Wr = null === (Zr = rr.field(mr.state, !1)) || void 0 === Zr ? void 0 : Zr.context;
          if (!Wr) return null;
          let ar = Wr.viewport;
          Wr.updateViewport({
            from: 0,
            to: Sr
          });
          let jr = Wr.isDone(Sr) || Wr.work(Qr, Sr) ? Wr.tree : null;
          return Wr.updateViewport(ar), jr
        }(rr.state, Sr, Qr);
      return Zr != tr(rr.state) && rr.dispatch({}), !!Zr
    }
    class Yr {
      constructor(rr) {
        this.doc = rr, this.cursorPos = 0, this.string = "", this.cursor = rr.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(rr) {
        return this.string = this.cursor.next(rr - this.cursorPos).value, this.cursorPos = rr + this.string.length, this.cursorPos - this.string.length
      }
      chunk(rr) {
        return this.syncTo(rr), this.string
      }
      get lineChunks() {
        return !0
      }
      read(rr, Sr) {
        let Qr = this.cursorPos - this.string.length;
        return rr < Qr || Sr >= this.cursorPos ? this.doc.sliceString(rr, Sr) : this.string.slice(rr - Qr, Sr - Qr)
      }
    }
    let nr = null;
    class er {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Zr = arguments.length > 3 ? arguments[3] : void 0,
          Wr = arguments.length > 4 ? arguments[4] : void 0,
          ar = arguments.length > 5 ? arguments[5] : void 0,
          jr = arguments.length > 6 ? arguments[6] : void 0,
          Ir = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = rr, this.state = Sr, this.fragments = Qr, this.tree = Zr, this.treeLen = Wr, this.viewport = ar, this.skipped = jr, this.scheduleOn = Ir, this.parse = null, this.tempSkipped = []
      }
      static create(rr, Sr, Qr) {
        return new er(rr, Sr, [], Wr.A.empty, 0, Qr, [], null)
      }
      startParse() {
        return this.parser.startParse(new Yr(this.state.doc), this.fragments)
      }
      work(rr, Sr) {
        return null != Sr && Sr >= this.state.doc.length && (Sr = void 0), this.tree != Wr.A.empty && this.isDone(null !== Sr && void 0 !== Sr ? Sr : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var Qr;
          if ("number" == typeof rr) {
            let Sr = Date.now() + rr;
            rr = () => Date.now() > Sr
          }
          for (this.parse || (this.parse = this.startParse()), null != Sr && (null == this.parse.stoppedAt || this.parse.stoppedAt > Sr) && Sr < this.state.doc.length && this.parse.stopAt(Sr);;) {
            let Zr = this.parse.advance();
            if (Zr) {
              if (this.fragments = this.withoutTempSkipped(Wr.y.addTree(Zr, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (Qr = this.parse.stoppedAt) && void 0 !== Qr ? Qr : this.state.doc.length, this.tree = Zr, this.parse = null, !(this.treeLen < (null !== Sr && void 0 !== Sr ? Sr : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (rr()) return !1
          }
        }))
      }
      takeTree() {
        let rr, Sr;
        this.parse && (rr = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > rr) && this.parse.stopAt(rr), this.withContext((() => {
          for (; !(Sr = this.parse.advance()););
        })), this.treeLen = rr, this.tree = Sr, this.fragments = this.withoutTempSkipped(Wr.y.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(rr) {
        let Sr = nr;
        nr = this;
        try {
          return rr()
        } finally {
          nr = Sr
        }
      }
      withoutTempSkipped(rr) {
        for (let Sr; Sr = this.tempSkipped.pop();) rr = Kr(rr, Sr.from, Sr.to);
        return rr
      }
      changes(rr, Sr) {
        let {
          fragments: Qr,
          tree: Zr,
          treeLen: ar,
          viewport: jr,
          skipped: Ir
        } = this;
        if (this.takeTree(), !rr.empty) {
          let Sr = [];
          if (rr.iterChangedRanges(((rr, Qr, Zr, Wr) => Sr.push({
              fromA: rr,
              toA: Qr,
              fromB: Zr,
              toB: Wr
            }))), Qr = Wr.y.applyChanges(Qr, Sr), Zr = Wr.A.empty, ar = 0, jr = {
              from: rr.mapPos(jr.from, -1),
              to: rr.mapPos(jr.to, 1)
            }, this.skipped.length) {
            Ir = [];
            for (let Sr of this.skipped) {
              let Qr = rr.mapPos(Sr.from, 1),
                Zr = rr.mapPos(Sr.to, -1);
              Qr < Zr && Ir.push({
                from: Qr,
                to: Zr
              })
            }
          }
        }
        return new er(this.parser, Sr, Qr, Zr, ar, jr, Ir, this.scheduleOn)
      }
      updateViewport(rr) {
        if (this.viewport.from == rr.from && this.viewport.to == rr.to) return !1;
        this.viewport = rr;
        let Sr = this.skipped.length;
        for (let Qr = 0; Qr < this.skipped.length; Qr++) {
          let {
            from: Sr,
            to: Zr
          } = this.skipped[Qr];
          Sr < rr.to && Zr > rr.from && (this.fragments = Kr(this.fragments, Sr, Zr), this.skipped.splice(Qr--, 1))
        }
        return !(this.skipped.length >= Sr) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(rr, Sr) {
        this.skipped.push({
          from: rr,
          to: Sr
        })
      }
      static getSkippingParser(rr) {
        return new class extends Wr.u {
          createParse(Sr, Qr, Zr) {
            let ar = Zr[0].from,
              jr = Zr[Zr.length - 1].to;
            return {
              parsedPos: ar,
              advance() {
                let Sr = nr;
                if (Sr) {
                  for (let rr of Zr) Sr.tempSkipped.push(rr);
                  rr && (Sr.scheduleOn = Sr.scheduleOn ? Promise.all([Sr.scheduleOn, rr]) : rr)
                }
                return this.parsedPos = jr, new Wr.A(Wr.m.none, [], [], jr - ar)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(rr) {
        rr = Math.min(rr, this.state.doc.length);
        let Sr = this.fragments;
        return this.treeLen >= rr && Sr.length && 0 == Sr[0].from && Sr[0].to >= rr
      }
      static get() {
        return nr
      }
    }

    function Kr(rr, Sr, Qr) {
      return Wr.y.applyChanges(rr, [{
        fromA: Sr,
        toA: Qr,
        fromB: Sr,
        toB: Qr
      }])
    }
    class yr {
      constructor(rr) {
        this.context = rr, this.tree = rr.tree
      }
      apply(rr) {
        if (!rr.docChanged && this.tree == this.context.tree) return this;
        let Sr = this.context.changes(rr.changes, rr.state),
          Qr = this.context.treeLen == rr.startState.doc.length ? void 0 : Math.max(rr.changes.mapPos(this.context.treeLen), Sr.viewport.to);
        return Sr.work(20, Qr) || Sr.takeTree(), new yr(Sr)
      }
      static init(rr) {
        let Sr = Math.min(3e3, rr.doc.length),
          Qr = er.create(rr.facet(Or).parser, rr, {
            from: 0,
            to: Sr
          });
        return Qr.work(20, Sr) || Qr.takeTree(), new yr(Qr)
      }
    }
    mr.state = ar.T.define({
      create: yr.init,
      update(rr, Sr) {
        for (let Qr of Sr.effects)
          if (Qr.is(mr.setState)) return Qr.value;
        return Sr.startState.facet(Or) != Sr.state.facet(Or) ? yr.init(Sr.state) : rr.apply(Sr)
      }
    });
    let Br = rr => {
      let Sr = setTimeout((() => rr()), 500);
      return () => clearTimeout(Sr)
    };
    "undefined" != typeof requestIdleCallback && (Br = rr => {
      let Sr = -1,
        Qr = setTimeout((() => {
          Sr = requestIdleCallback(rr, {
            timeout: 400
          })
        }), 100);
      return () => Sr < 0 ? clearTimeout(Qr) : cancelIdleCallback(Sr)
    });
    const Tr = "undefined" != typeof navigator && (null === (Zr = navigator.scheduling) || void 0 === Zr ? void 0 : Zr.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      vr = jr.m.fromClass(class {
        constructor(rr) {
          this.view = rr, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(rr) {
          let Sr = this.view.state.field(mr.state).context;
          (Sr.updateViewport(rr.view.viewport) || this.view.viewport.to > Sr.treeLen) && this.scheduleWork(), (rr.docChanged || rr.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(Sr)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: rr
          } = this.view, Sr = rr.field(mr.state);
          Sr.tree == Sr.context.tree && Sr.context.isDone(rr.doc.length) || (this.working = Br(this.work))
        }
        work(rr) {
          this.working = null;
          let Sr = Date.now();
          if (this.chunkEnd < Sr && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = Sr + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: Qr,
            viewport: {
              to: Zr
            }
          } = this.view, Wr = Qr.field(mr.state);
          if (Wr.tree == Wr.context.tree && Wr.context.isDone(Zr + 1e5)) return;
          let ar = Date.now() + Math.min(this.chunkBudget, 100, rr && !Tr ? Math.max(25, rr.timeRemaining() - 5) : 1e9),
            jr = Wr.context.treeLen < Zr && Qr.doc.length > Zr + 1e3,
            Ir = Wr.context.work((() => Tr && Tr() || Date.now() > ar), Zr + (jr ? 0 : 1e5));
          this.chunkBudget -= Date.now() - Sr, (Ir || this.chunkBudget <= 0) && (Wr.context.takeTree(), this.view.dispatch({
            effects: mr.setState.of(new yr(Wr.context))
          })), this.chunkBudget > 0 && (!Ir || jr) && this.scheduleWork(), this.checkAsyncSchedule(Wr.context)
        }
        checkAsyncSchedule(rr) {
          rr.scheduleOn && (this.workScheduled++, rr.scheduleOn.then((() => this.scheduleWork())).catch((rr => (0, jr.Y)(this.view.state, rr))).then((() => this.workScheduled--)), rr.scheduleOn = null)
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
      Or = ar.u.define({
        combine: rr => rr.length ? rr[0] : null,
        enables: rr => [mr.state, vr, jr.i.contentAttributes.compute([rr], (Sr => {
          let Qr = Sr.facet(rr);
          return Qr && Qr.name ? {
            "data-language": Qr.name
          } : {}
        }))]
      });
    class Lr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = rr, this.support = Sr, this.extension = [rr, Sr]
      }
    }
    const lr = ar.u.define(),
      Xr = ar.u.define({
        combine: rr => {
          if (!rr.length) return "  ";
          let Sr = rr[0];
          if (!Sr || /\S/.test(Sr) || Array.from(Sr).some((rr => rr != Sr[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(rr[0]));
          return Sr
        }
      });

    function Pr(rr) {
      let Sr = rr.facet(Xr);
      return 9 == Sr.charCodeAt(0) ? rr.tabSize * Sr.length : Sr.length
    }

    function Hr(rr, Sr) {
      let Qr = "",
        Zr = rr.tabSize,
        Wr = rr.facet(Xr)[0];
      if ("\t" == Wr) {
        for (; Sr >= Zr;) Qr += "\t", Sr -= Zr;
        Wr = " "
      }
      for (let ar = 0; ar < Sr; ar++) Qr += Wr;
      return Qr
    }

    function qr(rr, Sr) {
      rr instanceof ar.q && (rr = new Rr(rr));
      for (let Zr of rr.state.facet(lr)) {
        let Qr = Zr(rr, Sr);
        if (void 0 !== Qr) return Qr
      }
      let Qr = tr(rr.state);
      return Qr.length >= Sr ? function(rr, Sr, Qr) {
        let Zr = Sr.resolveStack(Qr),
          Wr = Sr.resolveInner(Qr, -1).resolve(Qr, 0).enterUnfinishedNodesBefore(Qr);
        if (Wr != Zr.node) {
          let rr = [];
          for (let Sr = Wr; Sr && !(Sr.from < Zr.node.from || Sr.to > Zr.node.to || Sr.from == Zr.node.from && Sr.type == Zr.node.type); Sr = Sr.parent) rr.push(Sr);
          for (let Sr = rr.length - 1; Sr >= 0; Sr--) Zr = {
            node: rr[Sr],
            next: Zr
          }
        }
        return Cr(Zr, rr, Qr)
      }(rr, Qr, Sr) : null
    }
    class Rr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = rr, this.options = Sr, this.unit = Pr(rr)
      }
      lineAt(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Qr = this.state.doc.lineAt(rr),
          {
            simulateBreak: Zr,
            simulateDoubleBreak: Wr
          } = this.options;
        return null != Zr && Zr >= Qr.from && Zr <= Qr.to ? Wr && Zr == rr ? {
          text: "",
          from: rr
        } : (Sr < 0 ? Zr < rr : Zr <= rr) ? {
          text: Qr.text.slice(Zr - Qr.from),
          from: Zr
        } : {
          text: Qr.text.slice(0, Zr - Qr.from),
          from: Qr.from
        } : Qr
      }
      textAfterPos(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && rr == this.options.simulateBreak) return "";
        let {
          text: Qr,
          from: Zr
        } = this.lineAt(rr, Sr);
        return Qr.slice(rr - Zr, Math.min(Qr.length, rr + 100 - Zr))
      }
      column(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Qr,
            from: Zr
          } = this.lineAt(rr, Sr),
          Wr = this.countColumn(Qr, rr - Zr),
          ar = this.options.overrideIndentation ? this.options.overrideIndentation(Zr) : -1;
        return ar > -1 && (Wr += ar - this.countColumn(Qr, Qr.search(/\S|$/))), Wr
      }
      countColumn(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr.length;
        return (0, ar.eb)(rr, this.state.tabSize, Sr)
      }
      lineIndent(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Qr,
            from: Zr
          } = this.lineAt(rr, Sr),
          Wr = this.options.overrideIndentation;
        if (Wr) {
          let rr = Wr(Zr);
          if (rr > -1) return rr
        }
        return this.countColumn(Qr, Qr.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const gr = new Wr.g;

    function Cr(rr, Sr, Qr) {
      for (let Zr = rr; Zr; Zr = Zr.next) {
        let rr = Mr(Zr.node);
        if (rr) return rr(kr.create(Sr, Qr, Zr))
      }
      return 0
    }

    function Mr(rr) {
      let Sr = rr.type.prop(gr);
      if (Sr) return Sr;
      let Qr, Zr = rr.firstChild;
      if (Zr && (Qr = Zr.type.prop(Wr.g.closedBy))) {
        let Sr = rr.lastChild,
          Zr = Sr && Qr.indexOf(Sr.name) > -1;
        return rr => ir(rr, !0, 1, void 0, Zr && ! function(rr) {
          return rr.pos == rr.options.simulateBreak && rr.options.simulateDoubleBreak
        }(rr) ? Sr.from : void 0)
      }
      return null == rr.parent ? Gr : null
    }

    function Gr() {
      return 0
    }
    class kr extends Rr {
      constructor(rr, Sr, Qr) {
        super(rr.state, rr.options), this.base = rr, this.pos = Sr, this.context = Qr
      }
      get node() {
        return this.context.node
      }
      static create(rr, Sr, Qr) {
        return new kr(rr, Sr, Qr)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(rr) {
        let Sr = this.state.doc.lineAt(rr.from);
        for (;;) {
          let Qr = rr.resolve(Sr.from);
          for (; Qr.parent && Qr.parent.from == Qr.from;) Qr = Qr.parent;
          if (Ar(Qr, rr)) break;
          Sr = this.state.doc.lineAt(Qr.from)
        }
        return this.lineIndent(Sr.from)
      }
      continue () {
        return Cr(this.context.next, this.base, this.pos)
      }
    }

    function Ar(rr, Sr) {
      for (let Qr = Sr; Qr; Qr = Qr.parent)
        if (rr == Qr) return !0;
      return !1
    }

    function Vr(rr) {
      let {
        closing: Sr,
        align: Qr = !0,
        units: Zr = 1
      } = rr;
      return rr => ir(rr, Qr, Zr, Sr)
    }

    function ir(rr, Sr, Qr, Zr, Wr) {
      let ar = rr.textAfter,
        jr = ar.match(/^\s*/)[0].length,
        Ir = Zr && ar.slice(jr, jr + Zr.length) == Zr || Wr == rr.pos + jr,
        fr = Sr ? function(rr) {
          let Sr = rr.node,
            Qr = Sr.childAfter(Sr.from),
            Zr = Sr.lastChild;
          if (!Qr) return null;
          let Wr = rr.options.simulateBreak,
            ar = rr.state.doc.lineAt(Qr.from),
            jr = null == Wr || Wr <= ar.from ? ar.to : Math.min(ar.to, Wr);
          for (let Ir = Qr.to;;) {
            let rr = Sr.childAfter(Ir);
            if (!rr || rr == Zr) return null;
            if (!rr.type.isSkipped) {
              if (rr.from >= jr) return null;
              let Sr = /^ */.exec(ar.text.slice(Qr.to - ar.from))[0].length;
              return {
                from: Qr.from,
                to: Qr.to + Sr
              }
            }
            Ir = rr.to
          }
        }(rr) : null;
      return fr ? Ir ? rr.column(fr.from) : rr.column(fr.to) : rr.baseIndent + (Ir ? 0 : rr.unit * Qr)
    }
    const wr = rr => rr.baseIndent;

    function cr() {
      let {
        except: rr,
        units: Sr = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Qr => {
        let Zr = rr && rr.test(Qr.textAfter);
        return Qr.baseIndent + (Zr ? 0 : Sr * Qr.unit)
      }
    }
    const Fr = 200;

    function or() {
      return ar.q.transactionFilter.of((rr => {
        if (!rr.docChanged || !rr.isUserEvent("input.type") && !rr.isUserEvent("input.complete")) return rr;
        let Sr = rr.startState.languageDataAt("indentOnInput", rr.startState.selection.main.head);
        if (!Sr.length) return rr;
        let Qr = rr.newDoc,
          {
            head: Zr
          } = rr.newSelection.main,
          Wr = Qr.lineAt(Zr);
        if (Zr > Wr.from + Fr) return rr;
        let ar = Qr.sliceString(Wr.from, Zr);
        if (!Sr.some((rr => rr.test(ar)))) return rr;
        let {
          state: jr
        } = rr, Ir = -1, fr = [];
        for (let {
            head: Er
          }
          of jr.selection.yh) {
          let rr = jr.doc.lineAt(Er);
          if (rr.from == Ir) continue;
          Ir = rr.from;
          let Sr = qr(jr, rr.from);
          if (null == Sr) continue;
          let Qr = /^\s*/.exec(rr.text)[0],
            Zr = Hr(jr, Sr);
          Qr != Zr && fr.push({
            from: rr.from,
            to: rr.from + Qr.length,
            insert: Zr
          })
        }
        return fr.length ? [rr, {
          changes: fr,
          sequential: !0
        }] : rr
      }))
    }
    const br = ar.u.define(),
      Jr = new Wr.g;

    function Dr(rr) {
      let Sr = rr.firstChild,
        Qr = rr.lastChild;
      return Sr && Sr.to < Qr.from ? {
        from: Sr.to,
        to: Qr.type.isError ? rr.to : Qr.from
      } : null
    }

    function dr(rr) {
      let Sr = rr.lastChild;
      return Sr && Sr.to == rr.to && Sr.type.isError
    }

    function sr(rr, Sr, Qr) {
      for (let Zr of rr.facet(br)) {
        let Wr = Zr(rr, Sr, Qr);
        if (Wr) return Wr
      }
      return function(rr, Sr, Qr) {
        let Zr = tr(rr);
        if (Zr.length < Qr) return null;
        let Wr = null;
        for (let ar = Zr.resolveStack(Qr, 1); ar; ar = ar.next) {
          let jr = ar.node;
          if (jr.to <= Qr || jr.from > Qr) continue;
          if (Wr && jr.from < Sr) break;
          let Ir = jr.type.prop(Jr);
          if (Ir && (jr.to < Zr.length - 50 || Zr.length == rr.doc.length || !dr(jr))) {
            let Zr = Ir(jr, rr);
            Zr && Zr.from <= Qr && Zr.from >= Sr && Zr.to > Qr && (Wr = Zr)
          }
        }
        return Wr
      }(rr, Sr, Qr)
    }

    function ur(rr, Sr) {
      let Qr = Sr.mapPos(rr.from, 1),
        Zr = Sr.mapPos(rr.to, -1);
      return Qr >= Zr ? void 0 : {
        from: Qr,
        to: Zr
      }
    }
    const rS = ar.P.define({
        map: ur
      }),
      SS = ar.P.define({
        map: ur
      });

    function QS(rr) {
      let Sr = [];
      for (let {
          head: Qr
        }
        of rr.state.selection.yh) Sr.some((rr => rr.from <= Qr && rr.to >= Qr)) || Sr.push(rr.lineBlockAt(Qr));
      return Sr
    }
    const ZS = ar.T.define({
      create: () => jr.c.none,
      update(rr, Sr) {
        Sr.isUserEvent("delete") && Sr.changes.iterChangedRanges(((Sr, Qr) => rr = WS(rr, Sr, Qr))), rr = rr.map(Sr.changes);
        for (let Qr of Sr.effects)
          if (Qr.is(rS) && !jS(rr, Qr.value.from, Qr.value.to)) {
            let {
              preparePlaceholder: Zr
            } = Sr.state.facet(xS), Wr = Zr ? jr.c.replace({
              widget: new tS(Zr(Sr.state, Qr.value))
            }) : US;
            rr = rr.update({
              add: [Wr.range(Qr.value.from, Qr.value.to)]
            })
          } else Qr.is(SS) && (rr = rr.update({
            filter: (rr, Sr) => Qr.value.from != rr || Qr.value.to != Sr,
            filterFrom: Qr.value.from,
            filterTo: Qr.value.to
          }));
        return Sr.selection && (rr = WS(rr, Sr.selection.main.head)), rr
      },
      provide: rr => jr.i.OZ.from(rr),
      toJSON(rr, Sr) {
        let Qr = [];
        return rr.between(0, Sr.doc.length, ((rr, Sr) => {
          Qr.push(rr, Sr)
        })), Qr
      },
      fromJSON(rr) {
        if (!Array.isArray(rr) || rr.length % 2) throw new RangeError("Invalid JSON for fold state");
        let Sr = [];
        for (let Qr = 0; Qr < rr.length;) {
          let Zr = rr[Qr++],
            Wr = rr[Qr++];
          if ("number" != typeof Zr || "number" != typeof Wr) throw new RangeError("Invalid JSON for fold state");
          Sr.push(US.range(Zr, Wr))
        }
        return jr.c.set(Sr, !0)
      }
    });

    function WS(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sr,
        Zr = !1;
      return rr.between(Sr, Qr, ((rr, Wr) => {
        rr < Qr && Wr > Sr && (Zr = !0)
      })), Zr ? rr.update({
        filterFrom: Sr,
        filterTo: Qr,
        filter: (rr, Zr) => rr >= Qr || Zr <= Sr
      }) : rr
    }

    function aS(rr, Sr, Qr) {
      var Zr;
      let Wr = null;
      return null === (Zr = rr.field(ZS, !1)) || void 0 === Zr || Zr.between(Sr, Qr, ((rr, Sr) => {
        (!Wr || Wr.from > rr) && (Wr = {
          from: rr,
          to: Sr
        })
      })), Wr
    }

    function jS(rr, Sr, Qr) {
      let Zr = !1;
      return rr.between(Sr, Sr, ((rr, Wr) => {
        rr == Sr && Wr == Qr && (Zr = !0)
      })), Zr
    }

    function IS(rr, Sr) {
      return rr.field(ZS, !1) ? Sr : Sr.concat(ar.P.appendConfig.of(mS()))
    }

    function fS(rr, Sr) {
      let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Zr = rr.state.doc.lineAt(Sr.from).number,
        Wr = rr.state.doc.lineAt(Sr.to).number;
      return jr.i.announce.of(`${rr.state.phrase(Qr?"Folded lines":"Unfolded lines")} ${Zr} ${rr.state.phrase("to")} ${Wr}.`)
    }
    const ES = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: rr => {
          for (let Sr of QS(rr)) {
            let Qr = sr(rr.state, Sr.from, Sr.to);
            if (Qr) return rr.dispatch({
              effects: IS(rr.state, [rS.of(Qr), fS(rr, Qr)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: rr => {
          if (!rr.state.field(ZS, !1)) return !1;
          let Sr = [];
          for (let Qr of QS(rr)) {
            let Zr = aS(rr.state, Qr.from, Qr.to);
            Zr && Sr.push(SS.of(Zr), fS(rr, Zr, !1))
          }
          return Sr.length && rr.dispatch({
            effects: Sr
          }), Sr.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: rr => {
          let {
            state: Sr
          } = rr, Qr = [];
          for (let Zr = 0; Zr < Sr.doc.length;) {
            let Wr = rr.lineBlockAt(Zr),
              ar = sr(Sr, Wr.from, Wr.to);
            ar && Qr.push(rS.of(ar)), Zr = (ar ? rr.lineBlockAt(ar.to) : Wr).to + 1
          }
          return Qr.length && rr.dispatch({
            effects: IS(rr.state, Qr)
          }), !!Qr.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: rr => {
          let Sr = rr.state.field(ZS, !1);
          if (!Sr || !Sr.size) return !1;
          let Qr = [];
          return Sr.between(0, rr.state.doc.length, ((rr, Sr) => {
            Qr.push(SS.of({
              from: rr,
              to: Sr
            }))
          })), rr.dispatch({
            effects: Qr
          }), !0
        }
      }],
      pS = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      xS = ar.u.define({
        combine: rr => (0, ar.db)(rr, pS)
      });

    function mS(rr) {
      let Sr = [ZS, nS];
      return rr && Sr.push(xS.of(rr)), Sr
    }

    function NS(rr, Sr) {
      let {
        state: Qr
      } = rr, Zr = Qr.facet(xS), Wr = Sr => {
        let Qr = rr.lineBlockAt(rr.posAtDOM(Sr.target)),
          Zr = aS(rr.state, Qr.from, Qr.to);
        Zr && rr.dispatch({
          effects: SS.of(Zr)
        }), Sr.preventDefault()
      };
      if (Zr.placeholderDOM) return Zr.placeholderDOM(rr, Wr, Sr);
      let ar = document.createElement("span");
      return ar.textContent = Zr.placeholderText, ar.setAttribute("aria-label", Qr.phrase("folded code")), ar.title = Qr.phrase("unfold"), ar.className = "cm-foldPlaceholder", ar.onclick = Wr, ar
    }
    const US = jr.c.replace({
      widget: new class extends jr.q {
        toDOM(rr) {
          return NS(rr, null)
        }
      }
    });
    class tS extends jr.q {
      constructor(rr) {
        super(), this.value = rr
      }
      eq(rr) {
        return this.value == rr.value
      }
      toDOM(rr) {
        return NS(rr, this.value)
      }
    }
    const hS = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class zS extends jr.k {
      constructor(rr, Sr) {
        super(), this.config = rr, this.open = Sr
      }
      eq(rr) {
        return this.config == rr.config && this.open == rr.open
      }
      toDOM(rr) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let Sr = document.createElement("span");
        return Sr.textContent = this.open ? this.config.openText : this.config.closedText, Sr.title = rr.state.phrase(this.open ? "Fold line" : "Unfold line"), Sr
      }
    }

    function YS() {
      let rr = {
          ...hS,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        Sr = new zS(rr, !0),
        Qr = new zS(rr, !1),
        Zr = jr.m.fromClass(class {
          constructor(rr) {
            this.from = rr.viewport.from, this.markers = this.buildMarkers(rr)
          }
          update(Sr) {
            (Sr.docChanged || Sr.viewportChanged || Sr.startState.facet(Or) != Sr.state.facet(Or) || Sr.startState.field(ZS, !1) != Sr.state.field(ZS, !1) || tr(Sr.startState) != tr(Sr.state) || rr.foldingChanged(Sr)) && (this.markers = this.buildMarkers(Sr.view))
          }
          buildMarkers(rr) {
            let Zr = new ar.E;
            for (let Wr of rr.viewportLineBlocks) {
              let ar = aS(rr.state, Wr.from, Wr.to) ? Qr : sr(rr.state, Wr.from, Wr.to) ? Sr : null;
              ar && Zr.add(Wr.from, Wr.from, ar)
            }
            return Zr.finish()
          }
        }),
        {
          domEventHandlers: Wr
        } = rr;
      return [Zr, (0, jr.F)({
        class: "cm-foldGutter",
        markers(rr) {
          var Sr;
          return (null === (Sr = rr.plugin(Zr)) || void 0 === Sr ? void 0 : Sr.markers) || ar.H.empty
        },
        initialSpacer: () => new zS(rr, !1),
        domEventHandlers: {
          ...Wr,
          click: (rr, Sr, Qr) => {
            if (Wr.click && Wr.click(rr, Sr, Qr)) return !0;
            let Zr = aS(rr.state, Sr.from, Sr.to);
            if (Zr) return rr.dispatch({
              effects: SS.of(Zr)
            }), !0;
            let ar = sr(rr.state, Sr.from, Sr.to);
            return !!ar && (rr.dispatch({
              effects: rS.of(ar)
            }), !0)
          }
        }
      }), mS()]
    }
    const nS = jr.i.baseTheme({
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
    class eS {
      constructor(rr, Sr) {
        let Qr;

        function Zr(rr) {
          let Sr = fr.d.newName();
          return (Qr || (Qr = Object.create(null)))["." + Sr] = rr, Sr
        }
        this.specs = rr;
        const Wr = "string" == typeof Sr.all ? Sr.all : Sr.all ? Zr(Sr.all) : void 0,
          ar = Sr.scope;
        this.scope = ar instanceof mr ? rr => rr.prop(Er) == ar.data : ar ? rr => rr == ar : void 0, this.style = (0, Ir.j)(rr.map((rr => ({
          tag: rr.tag,
          class: rr.class || Zr(Object.assign({}, rr, {
            tag: null
          }))
        }))), {
          all: Wr
        }).style, this.module = Qr ? new fr.d(Qr) : null, this.themeType = Sr.themeType
      }
      static define(rr, Sr) {
        return new eS(rr, Sr || {})
      }
    }
    const KS = ar.u.define(),
      yS = ar.u.define({
        combine: rr => rr.length ? [rr[0]] : null
      });

    function BS(rr) {
      let Sr = rr.facet(KS);
      return Sr.length ? Sr : rr.facet(yS)
    }

    function TS(rr, Sr) {
      let Qr, Zr = [OS];
      return rr instanceof eS && (rr.module && Zr.push(jr.i.styleModule.of(rr.module)), Qr = rr.themeType), (null === Sr || void 0 === Sr ? void 0 : Sr.fallback) ? Zr.push(yS.of(rr)) : Qr ? Zr.push(KS.computeN([jr.i.darkTheme], (Sr => Sr.facet(jr.i.darkTheme) == ("dark" == Qr) ? [rr] : []))) : Zr.push(KS.of(rr)), Zr
    }
    class vS {
      constructor(rr) {
        this.markCache = Object.create(null), this.tree = tr(rr.state), this.OZ = this.buildDeco(rr, BS(rr.state)), this.decoratedTo = rr.viewport.to
      }
      update(rr) {
        let Sr = tr(rr.state),
          Qr = BS(rr.state),
          Zr = Qr != BS(rr.startState),
          {
            viewport: Wr
          } = rr.view,
          ar = rr.changes.mapPos(this.decoratedTo, 1);
        Sr.length < Wr.to && !Zr && Sr.type == this.tree.type && ar >= Wr.to ? (this.OZ = this.OZ.map(rr.changes), this.decoratedTo = ar) : (Sr != this.tree || rr.viewportChanged || Zr) && (this.tree = Sr, this.OZ = this.buildDeco(rr.view, Qr), this.decoratedTo = Wr.to)
      }
      buildDeco(rr, Sr) {
        if (!Sr || !this.tree.length) return jr.c.none;
        let Qr = new ar.E;
        for (let {
            from: Zr,
            to: Wr
          }
          of rr.Brr)(0, Ir.d)(this.tree, Sr, ((rr, Sr, Zr) => {
          Qr.add(rr, Sr, this.markCache[Zr] || (this.markCache[Zr] = jr.c.mark({
            class: Zr
          })))
        }), Zr, Wr);
        return Qr.finish()
      }
    }
    const OS = ar.C.high(jr.m.fromClass(vS, {
        OZ: rr => rr.OZ
      })),
      LS = eS.define([{
        tag: Ir.m.meta,
        color: "#404740"
      }, {
        tag: Ir.m.link,
        textDecoration: "underline"
      }, {
        tag: Ir.m.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: Ir.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: Ir.m.strong,
        fontWeight: "bold"
      }, {
        tag: Ir.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Ir.m.keyword,
        color: "#708"
      }, {
        tag: [Ir.m.atom, Ir.m.bool, Ir.m.url, Ir.m.contentSeparator, Ir.m.labelName],
        color: "#219"
      }, {
        tag: [Ir.m.literal, Ir.m.inserted],
        color: "#164"
      }, {
        tag: [Ir.m.string, Ir.m.deleted],
        color: "#a11"
      }, {
        tag: [Ir.m.regexp, Ir.m.escape, Ir.m.special(Ir.m.string)],
        color: "#e40"
      }, {
        tag: Ir.m.definition(Ir.m.variableName),
        color: "#00f"
      }, {
        tag: Ir.m.local(Ir.m.variableName),
        color: "#30a"
      }, {
        tag: [Ir.m.typeName, Ir.m.namespace],
        color: "#085"
      }, {
        tag: Ir.m.className,
        color: "#167"
      }, {
        tag: [Ir.m.special(Ir.m.variableName), Ir.m.macroName],
        color: "#256"
      }, {
        tag: Ir.m.definition(Ir.m.propertyName),
        color: "#00c"
      }, {
        tag: Ir.m.comment,
        color: "#940"
      }, {
        tag: Ir.m.invalid,
        color: "#f00"
      }]),
      lS = jr.i.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      XS = 1e4,
      PS = "()[]{}",
      HS = ar.u.define({
        combine: rr => (0, ar.db)(rr, {
          afterCursor: !0,
          brackets: PS,
          maxScanDistance: XS,
          renderMatch: gS
        })
      }),
      qS = jr.c.mark({
        class: "cm-matchingBracket"
      }),
      RS = jr.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function gS(rr) {
      let Sr = [],
        Qr = rr.matched ? qS : RS;
      return Sr.push(Qr.range(rr.start.from, rr.start.to)), rr.end && Sr.push(Qr.range(rr.end.from, rr.end.to)), Sr
    }

    function CS(rr) {
      let Sr = [],
        Qr = rr.facet(HS);
      for (let Zr of rr.selection.yh) {
        if (!Zr.empty) continue;
        let Wr = iS(rr, Zr.head, -1, Qr) || Zr.head > 0 && iS(rr, Zr.head - 1, 1, Qr) || Qr.afterCursor && (iS(rr, Zr.head, 1, Qr) || Zr.head < rr.doc.length && iS(rr, Zr.head + 1, -1, Qr));
        Wr && (Sr = Sr.concat(Qr.renderMatch(Wr, rr)))
      }
      return jr.c.set(Sr, !0)
    }
    const MS = [jr.m.fromClass(class {
      constructor(rr) {
        this.paused = !1, this.OZ = CS(rr.state)
      }
      update(rr) {
        (rr.docChanged || rr.selectionSet || this.paused) && (rr.view.composing ? (this.OZ = this.OZ.map(rr.changes), this.paused = !0) : (this.OZ = CS(rr.state), this.paused = !1))
      }
    }, {
      OZ: rr => rr.OZ
    }), lS];

    function GS() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [HS.of(rr), MS]
    }
    const kS = new Wr.g;

    function AS(rr, Sr, Qr) {
      let Zr = rr.prop(Sr < 0 ? Wr.g.openedBy : Wr.g.closedBy);
      if (Zr) return Zr;
      if (1 == rr.name.length) {
        let Zr = Qr.indexOf(rr.name);
        if (Zr > -1 && Zr % 2 == (Sr < 0 ? 1 : 0)) return [Qr[Zr + Sr]]
      }
      return null
    }

    function VS(rr) {
      let Sr = rr.type.prop(kS);
      return Sr ? Sr(rr.node) : rr
    }

    function iS(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        Wr = Zr.maxScanDistance || XS,
        ar = Zr.brackets || PS,
        jr = tr(rr),
        Ir = jr.resolveInner(Sr, Qr);
      for (let fr = Ir; fr; fr = fr.parent) {
        let Zr = AS(fr.type, Qr, ar);
        if (Zr && fr.from < fr.to) {
          let Wr = VS(fr);
          if (Wr && (Qr > 0 ? Sr >= Wr.from && Sr < Wr.to : Sr > Wr.from && Sr <= Wr.to)) return wS(rr, Sr, Qr, fr, Wr, Zr, ar)
        }
      }
      return function(rr, Sr, Qr, Zr, Wr, ar, jr) {
        if (Qr < 0 ? !Sr : Sr == rr.doc.length) return null;
        let Ir = Qr < 0 ? rr.sliceDoc(Sr - 1, Sr) : rr.sliceDoc(Sr, Sr + 1),
          fr = jr.indexOf(Ir);
        if (fr < 0 || fr % 2 == 0 != Qr > 0) return null;
        let Er = {
            from: Qr < 0 ? Sr - 1 : Sr,
            to: Qr > 0 ? Sr + 1 : Sr
          },
          pr = rr.doc.iterRange(Sr, Qr > 0 ? rr.doc.length : 0),
          xr = 0;
        for (let mr = 0; !pr.next().done && mr <= ar;) {
          let rr = pr.value;
          Qr < 0 && (mr += rr.length);
          let ar = Sr + mr * Qr;
          for (let Sr = Qr > 0 ? 0 : rr.length - 1, Ir = Qr > 0 ? rr.length : -1; Sr != Ir; Sr += Qr) {
            let Ir = jr.indexOf(rr[Sr]);
            if (!(Ir < 0 || Zr.resolveInner(ar + Sr, 1).type != Wr))
              if (Ir % 2 == 0 == Qr > 0) xr++;
              else {
                if (1 == xr) return {
                  start: Er,
                  end: {
                    from: ar + Sr,
                    to: ar + Sr + 1
                  },
                  matched: Ir >> 1 == fr >> 1
                };
                xr--
              }
          }
          Qr > 0 && (mr += rr.length)
        }
        return pr.done ? {
          start: Er,
          matched: !1
        } : null
      }(rr, Sr, Qr, jr, Ir.type, Wr, ar)
    }

    function wS(rr, Sr, Qr, Zr, Wr, ar, jr) {
      let Ir = Zr.parent,
        fr = {
          from: Wr.from,
          to: Wr.to
        },
        Er = 0,
        pr = null === Ir || void 0 === Ir ? void 0 : Ir.cursor();
      if (pr && (Qr < 0 ? pr.childBefore(Zr.from) : pr.childAfter(Zr.to)))
        do {
          if (Qr < 0 ? pr.to <= Zr.from : pr.from >= Zr.to) {
            if (0 == Er && ar.indexOf(pr.type.name) > -1 && pr.from < pr.to) {
              let rr = VS(pr);
              return {
                start: fr,
                end: rr ? {
                  from: rr.from,
                  to: rr.to
                } : void 0,
                matched: !0
              }
            }
            if (AS(pr.type, Qr, jr)) Er++;
            else if (AS(pr.type, -Qr, jr)) {
              if (0 == Er) {
                let rr = VS(pr);
                return {
                  start: fr,
                  end: rr && rr.from < rr.to ? {
                    from: rr.from,
                    to: rr.to
                  } : void 0,
                  matched: !1
                }
              }
              Er--
            }
          }
        } while (Qr < 0 ? pr.prevSibling() : pr.nextSibling());
      return {
        start: fr,
        matched: !1
      }
    }
    const cS = Object.create(null),
      FS = [Wr.m.none],
      oS = [],
      bS = Object.create(null),
      JS = Object.create(null);
    for (let [sS, uS] of [
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
      ]) JS[sS] = dS(cS, uS);

    function DS(rr, Sr) {
      oS.indexOf(rr) > -1 || (oS.push(rr), console.warn(Sr))
    }

    function dS(rr, Sr) {
      let Qr = [];
      for (let Wr of Sr.split(" ")) {
        let Sr = [];
        for (let Qr of Wr.split(".")) {
          let Zr = rr[Qr] || Ir.m[Qr];
          Zr ? "function" == typeof Zr ? Sr.length ? Sr = Sr.map(Zr) : DS(Qr, `Modifier ${Qr} used at start of tag`) : Sr.length ? DS(Qr, `Tag ${Qr} used as modifier`) : Sr = Array.isArray(Zr) ? Zr : [Zr] : DS(Qr, `Unknown highlighting tag ${Qr}`)
        }
        for (let rr of Sr) Qr.push(rr)
      }
      if (!Qr.length) return 0;
      let Zr = Sr.replace(/ /g, "_"),
        ar = Zr + " " + Qr.map((rr => rr.id)),
        jr = bS[ar];
      if (jr) return jr.id;
      let fr = bS[ar] = Wr.m.define({
        id: FS.length,
        name: Zr,
        props: [(0, Ir.g)({
          [Zr]: Qr
        })]
      });
      return FS.push(fr), fr.id
    }
    jr.f.RTL, jr.f.LTR
  },
  53919: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => nr,
      c: () => Br
    });
    var Zr = Qr(53872),
      Wr = Qr(53864),
      ar = Qr(53886);
    class jr {
      constructor(rr, Sr, Qr) {
        this.from = rr, this.to = Sr, this.diagnostic = Qr
      }
    }
    class Ir {
      constructor(rr, Sr, Qr) {
        this.diagnostics = rr, this.panel = Sr, this.selected = Qr
      }
      static init(rr, Sr, Qr) {
        let ar = Qr.facet(Kr).markerFilter;
        ar && (rr = ar(rr, Qr));
        let jr = rr.slice().sort(((rr, Sr) => rr.from - Sr.from || rr.to - Sr.to)),
          Er = new Wr.E,
          pr = [],
          xr = 0,
          mr = Qr.doc.iter(),
          Nr = 0,
          Ur = Qr.doc.length;
        for (let Wr = 0;;) {
          let rr, Sr, Qr = Wr == jr.length ? null : jr[Wr];
          if (!Qr && !pr.length) break;
          if (pr.length) rr = xr, Sr = pr.reduce(((rr, Sr) => Math.min(rr, Sr.to)), Qr && Qr.from > rr ? Qr.from : 1e8);
          else {
            if (rr = Qr.from, rr > Ur) break;
            Sr = Qr.to, pr.push(Qr), Wr++
          }
          for (; Wr < jr.length;) {
            let Qr = jr[Wr];
            if (Qr.from != rr || !(Qr.to > Qr.from || Qr.to == rr)) {
              Sr = Math.min(Qr.from, Sr);
              break
            }
            pr.push(Qr), Wr++, Sr = Math.min(Qr.to, Sr)
          }
          Sr = Math.min(Sr, Ur);
          let ar = !1;
          if (pr.some((Qr => Qr.from == rr && (Qr.to == Sr || Sr == Ur))) && (ar = rr == Sr, !ar && Sr - rr < 10)) {
            let Qr = rr - (Nr + mr.value.length);
            Qr > 0 && (mr.next(Qr), Nr = rr);
            for (let Zr = rr;;) {
              if (Zr >= Sr) {
                ar = !0;
                break
              }
              if (!mr.lineBreak && Nr + mr.value.length > Zr) break;
              Zr = Nr + mr.value.length, Nr += mr.value.length, mr.next()
            }
          }
          let Ir = Rr(pr);
          if (ar) Er.add(rr, rr, Zr.c.widget({
            widget: new Or(Ir),
            diagnostics: pr.slice()
          }));
          else {
            let Qr = pr.reduce(((rr, Sr) => Sr.markClass ? rr + " " + Sr.markClass : rr), "");
            Er.add(rr, Sr, Zr.c.mark({
              class: "cm-lintRange cm-lintRange-" + Ir + Qr,
              diagnostics: pr.slice(),
              inclusiveEnd: pr.some((rr => rr.to > Sr))
            }))
          }
          if (xr = Sr, xr == Ur) break;
          for (let Zr = 0; Zr < pr.length; Zr++) pr[Zr].to <= xr && pr.splice(Zr--, 1)
        }
        let tr = Er.finish();
        return new Ir(tr, Sr, fr(tr))
      }
    }

    function fr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Zr = null;
      return rr.between(Qr, 1e9, ((rr, Qr, Wr) => {
        let {
          spec: ar
        } = Wr;
        if (!(Sr && ar.diagnostics.indexOf(Sr) < 0))
          if (Zr) {
            if (ar.diagnostics.indexOf(Zr.diagnostic) < 0) return !1;
            Zr = new jr(Zr.from, Qr, Zr.diagnostic)
          } else Zr = new jr(rr, Qr, Sr || ar.diagnostics[0])
      })), Zr
    }

    function Er(rr, Sr) {
      let Qr = Sr.pos,
        Zr = Sr.end || Qr,
        Wr = rr.state.facet(Kr).hideOn(rr, Qr, Zr);
      if (null != Wr) return Wr;
      let ar = rr.startState.doc.lineAt(Sr.pos);
      return !(!rr.effects.some((rr => rr.is(xr))) && !rr.changes.touchesRange(ar.from, Math.max(ar.to, Zr)))
    }

    function pr(rr, Sr) {
      return rr.field(Ur, !1) ? Sr : Sr.concat(Wr.P.appendConfig.of(gr))
    }
    const xr = Wr.P.define(),
      mr = Wr.P.define(),
      Nr = Wr.P.define(),
      Ur = Wr.T.define({
        create: () => new Ir(Zr.c.none, null, null),
        update(rr, Sr) {
          if (Sr.docChanged && rr.diagnostics.size) {
            let Qr = rr.diagnostics.map(Sr.changes),
              Zr = null,
              Wr = rr.panel;
            if (rr.selected) {
              let Wr = Sr.changes.mapPos(rr.selected.from, 1);
              Zr = fr(Qr, rr.selected.diagnostic, Wr) || fr(Qr, null, Wr)
            }!Qr.size && Wr && Sr.state.facet(Kr).autoPanel && (Wr = null), rr = new Ir(Qr, Wr, Zr)
          }
          for (let Qr of Sr.effects)
            if (Qr.is(xr)) {
              let Zr = Sr.state.facet(Kr).autoPanel ? Qr.value.length ? lr.open : null : rr.panel;
              rr = Ir.init(Qr.value, Zr, Sr.state)
            } else Qr.is(mr) ? rr = new Ir(rr.diagnostics, Qr.value ? lr.open : null, rr.selected) : Qr.is(Nr) && (rr = new Ir(rr.diagnostics, rr.panel, Qr.value));
          return rr
        },
        provide: rr => [Zr.kb.from(rr, (rr => rr.panel)), Zr.i.OZ.from(rr, (rr => rr.diagnostics))]
      });
    const tr = Zr.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function hr(rr, Sr, Qr) {
      let Zr, {
          diagnostics: Wr
        } = rr.state.field(Ur),
        ar = -1,
        jr = -1;
      Wr.between(Sr - (Qr < 0 ? 1 : 0), Sr + (Qr > 0 ? 1 : 0), ((rr, Wr, Ir) => {
        let {
          spec: fr
        } = Ir;
        if (Sr >= rr && Sr <= Wr && (rr == Wr || (Sr > rr || Qr > 0) && (Sr < Wr || Qr < 0))) return Zr = fr.diagnostics, ar = rr, jr = Wr, !1
      }));
      let Ir = rr.state.facet(Kr).tooltipFilter;
      return Zr && Ir && (Zr = Ir(Zr, rr.state)), Zr ? {
        pos: ar,
        end: jr,
        above: rr.state.doc.lineAt(ar).to < jr,
        create: () => ({
          dom: zr(rr, Zr)
        })
      } : null
    }

    function zr(rr, Sr) {
      return (0, ar.d)("ul", {
        class: "cm-tooltip-lint"
      }, Sr.map((Sr => vr(rr, Sr, !1))))
    }
    const Yr = rr => {
        let Sr = rr.state.field(Ur, !1);
        return !(!Sr || !Sr.panel) && (rr.dispatch({
          effects: mr.of(!1)
        }), !0)
      },
      nr = [{
        key: "Mod-Shift-m",
        run: rr => {
          let Sr = rr.state.field(Ur, !1);
          Sr && Sr.panel || rr.dispatch({
            effects: pr(rr.state, [mr.of(!0)])
          });
          let Qr = (0, Zr.B)(rr, lr.open);
          return Qr && Qr.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: rr => {
          let Sr = rr.state.field(Ur, !1);
          if (!Sr) return !1;
          let Qr = rr.state.selection.main,
            Zr = fr(Sr.diagnostics, null, Qr.to + 1);
          return !(!Zr && (Zr = fr(Sr.diagnostics, null, 0), !Zr || Zr.from == Qr.from && Zr.to == Qr.to)) && (rr.dispatch({
            selection: {
              anchor: Zr.from,
              head: Zr.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      er = Zr.m.fromClass(class {
        constructor(rr) {
          this.view = rr, this.timeout = -1, this.set = !0;
          let {
            delay: Sr
          } = rr.state.facet(Kr);
          this.lintTime = Date.now() + Sr, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, Sr)
        }
        run() {
          clearTimeout(this.timeout);
          let rr = Date.now();
          if (rr < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - rr);
          else {
            this.set = !1;
            let {
              state: rr
            } = this.view, {
              sources: Sr
            } = rr.facet(Kr);
            Sr.length && function(rr, Sr, Qr) {
              let Zr = [],
                Wr = -1;
              for (let ar of rr) ar.then((Qr => {
                Zr.push(Qr), clearTimeout(Wr), Zr.length == rr.length ? Sr(Zr) : Wr = setTimeout((() => Sr(Zr)), 200)
              }), Qr)
            }(Sr.map((rr => Promise.resolve(rr(this.view)))), (Sr => {
              this.view.state.doc == rr.doc && this.view.dispatch(function(rr, Sr) {
                return {
                  effects: pr(rr, [xr.of(Sr)])
                }
              }(this.view.state, Sr.reduce(((rr, Sr) => rr.concat(Sr)))))
            }), (rr => {
              (0, Zr.Y)(this.view.state, rr)
            }))
          }
        }
        update(rr) {
          let Sr = rr.state.facet(Kr);
          (rr.docChanged || Sr != rr.startState.facet(Kr) || Sr.needsRefresh && Sr.needsRefresh(rr)) && (this.lintTime = Date.now() + Sr.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, Sr.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const Kr = Wr.u.define({
      combine: rr => ({
        sources: rr.map((rr => rr.source)).filter((rr => null != rr)),
        ...(0, Wr.db)(rr.map((rr => rr.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: yr,
          tooltipFilter: yr,
          needsRefresh: (rr, Sr) => rr ? Sr ? Qr => rr(Qr) || Sr(Qr) : rr : Sr,
          hideOn: (rr, Sr) => rr ? Sr ? (Qr, Zr, Wr) => rr(Qr, Zr, Wr) || Sr(Qr, Zr, Wr) : rr : Sr,
          autoPanel: (rr, Sr) => rr || Sr
        })
      })
    });

    function yr(rr, Sr) {
      return rr ? Sr ? (Qr, Zr) => Sr(rr(Qr, Zr), Zr) : rr : Sr
    }

    function Br(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [Kr.of({
        source: rr,
        config: Sr
      }), er, gr]
    }

    function Tr(rr) {
      let Sr = [];
      if (rr) rr: for (let {
          name: Qr
        }
        of rr) {
        for (let rr = 0; rr < Qr.length; rr++) {
          let Zr = Qr[rr];
          if (/[a-zA-Z]/.test(Zr) && !Sr.some((rr => rr.toLowerCase() == Zr.toLowerCase()))) {
            Sr.push(Zr);
            continue rr
          }
        }
        Sr.push("")
      }
      return Sr
    }

    function vr(rr, Sr, Qr) {
      var Zr;
      let Wr = Qr ? Tr(Sr.actions) : [];
      return (0, ar.d)("li", {
        class: "cm-diagnostic cm-diagnostic-" + Sr.severity
      }, (0, ar.d)("span", {
        class: "cm-diagnosticText"
      }, Sr.renderMessage ? Sr.renderMessage(rr) : Sr.message), null === (Zr = Sr.actions) || void 0 === Zr ? void 0 : Zr.map(((Qr, Zr) => {
        let jr = !1,
          Ir = Zr => {
            if (Zr.preventDefault(), jr) return;
            jr = !0;
            let Wr = fr(rr.state.field(Ur).diagnostics, Sr);
            Wr && Qr.apply(rr, Wr.from, Wr.to)
          },
          {
            name: Er
          } = Qr,
          pr = Wr[Zr] ? Er.indexOf(Wr[Zr]) : -1,
          xr = pr < 0 ? Er : [Er.slice(0, pr), (0, ar.d)("u", Er.slice(pr, pr + 1)), Er.slice(pr + 1)],
          mr = Qr.markClass ? " " + Qr.markClass : "";
        return (0, ar.d)("button", {
          type: "button",
          class: "cm-diagnosticAction" + mr,
          onclick: Ir,
          onmousedown: Ir,
          "aria-label": ` Action: ${Er}${pr<0?"":` (access key "${Wr[Zr]})"`}.`
        }, xr)
      })), Sr.source && (0, ar.d)("div", {
        class: "cm-diagnosticSource"
      }, Sr.source))
    }
    class Or extends Zr.q {
      constructor(rr) {
        super(), this.sev = rr
      }
      eq(rr) {
        return rr.sev == this.sev
      }
      toDOM() {
        return (0, ar.d)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Lr {
      constructor(rr, Sr) {
        this.diagnostic = Sr, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = vr(rr, Sr, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class lr {
      constructor(rr) {
        this.view = rr, this.items = [];
        this.list = (0, ar.d)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: Sr => {
            if (!(Sr.ctrlKey || Sr.altKey || Sr.metaKey)) {
              if (27 == Sr.keyCode) Yr(this.view), this.view.focus();
              else if (38 == Sr.keyCode || 33 == Sr.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == Sr.keyCode || 34 == Sr.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == Sr.keyCode) this.moveSelection(0);
              else if (35 == Sr.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == Sr.keyCode) this.view.focus();
              else {
                if (!(Sr.keyCode >= 65 && Sr.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: Qr
                  } = this.items[this.selectedIndex], Zr = Tr(Qr.actions);
                  for (let Wr = 0; Wr < Zr.length; Wr++)
                    if (Zr[Wr].toUpperCase().charCodeAt(0) == Sr.keyCode) {
                      let Sr = fr(this.view.state.field(Ur).diagnostics, Qr);
                      Sr && Qr.actions[Wr].apply(rr, Sr.from, Sr.to)
                    }
                }
              }
              Sr.preventDefault()
            }
          },
          onclick: rr => {
            for (let Sr = 0; Sr < this.items.length; Sr++) this.items[Sr].dom.contains(rr.target) && this.moveSelection(Sr)
          }
        }), this.dom = (0, ar.d)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, ar.d)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => Yr(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let rr = this.view.state.field(Ur).selected;
        if (!rr) return -1;
        for (let Sr = 0; Sr < this.items.length; Sr++)
          if (this.items[Sr].diagnostic == rr.diagnostic) return Sr;
        return -1
      }
      update() {
        let {
          diagnostics: rr,
          selected: Sr
        } = this.view.state.field(Ur), Qr = 0, Zr = !1, Wr = null, ar = new Set;
        for (rr.between(0, this.view.state.doc.length, ((rr, jr, Ir) => {
            let {
              spec: fr
            } = Ir;
            for (let Er of fr.diagnostics) {
              if (ar.has(Er)) continue;
              ar.add(Er);
              let rr, jr = -1;
              for (let Sr = Qr; Sr < this.items.length; Sr++)
                if (this.items[Sr].diagnostic == Er) {
                  jr = Sr;
                  break
                } jr < 0 ? (rr = new Lr(this.view, Er), this.items.splice(Qr, 0, rr), Zr = !0) : (rr = this.items[jr], jr > Qr && (this.items.splice(Qr, jr - Qr), Zr = !0)), Sr && rr.diagnostic == Sr.diagnostic ? rr.dom.hasAttribute("aria-selected") || (rr.dom.setAttribute("aria-selected", "true"), Wr = rr) : rr.dom.hasAttribute("aria-selected") && rr.dom.removeAttribute("aria-selected"), Qr++
            }
          })); Qr < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Zr = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Lr(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Zr = !0), Wr ? (this.list.setAttribute("aria-activedescendant", Wr.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: Wr.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: rr => {
            let {
              sel: Sr,
              panel: Qr
            } = rr, Zr = Qr.height / this.list.offsetHeight;
            Sr.top < Qr.top ? this.list.scrollTop -= (Qr.top - Sr.top) / Zr : Sr.bottom > Qr.bottom && (this.list.scrollTop += (Sr.bottom - Qr.bottom) / Zr)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Zr && this.sync()
      }
      sync() {
        let rr = this.list.firstChild;

        function Sr() {
          let Sr = rr;
          rr = Sr.nextSibling, Sr.remove()
        }
        for (let Qr of this.items)
          if (Qr.dom.parentNode == this.list) {
            for (; rr != Qr.dom;) Sr();
            rr = Qr.dom.nextSibling
          } else this.list.insertBefore(Qr.dom, rr);
        for (; rr;) Sr()
      }
      moveSelection(rr) {
        if (this.selectedIndex < 0) return;
        let Sr = fr(this.view.state.field(Ur).diagnostics, this.items[rr].diagnostic);
        Sr && this.view.dispatch({
          selection: {
            anchor: Sr.from,
            head: Sr.to
          },
          scrollIntoView: !0,
          effects: Nr.of(Sr)
        })
      }
      static open(rr) {
        return new lr(rr)
      }
    }

    function Xr(rr) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(rr)}</svg>')`
    }

    function Pr(rr) {
      return Xr(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${rr}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Hr = Zr.i.baseTheme({
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
        backgroundImage: Pr("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: Pr("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: Pr("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: Pr("#66d")
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

    function qr(rr) {
      return "error" == rr ? 4 : "warning" == rr ? 3 : "info" == rr ? 2 : 1
    }

    function Rr(rr) {
      let Sr = "hint",
        Qr = 1;
      for (let Zr of rr) {
        let rr = qr(Zr.severity);
        rr > Qr && (Qr = rr, Sr = Zr.severity)
      }
      return Sr
    }
    Zr.k;
    const gr = [Ur, Zr.i.OZ.compute([Ur], (rr => {
      let {
        selected: Sr,
        panel: Qr
      } = rr.field(Ur);
      return Sr && Qr && Sr.from != Sr.to ? Zr.c.set([tr.range(Sr.from, Sr.to)]) : Zr.c.none
    })), (0, Zr.Q)(hr, {
      hideOn: Er
    }), Hr]
  },
  53915: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => sr,
      e: () => zr,
      f: () => ur
    });
    var Zr = Qr(53872),
      Wr = Qr(53864),
      ar = Qr(53886);
    const jr = "function" == typeof String.prototype.normalize ? rr => rr.normalize("NFKD") : rr => rr;
    class Ir {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rr.length,
          Wr = arguments.length > 4 ? arguments[4] : void 0,
          ar = arguments.length > 5 ? arguments[5] : void 0;
        this.test = ar, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = rr.iterRange(Qr, Zr), this.bufferStart = Qr, this.normalize = Wr ? rr => Wr(jr(rr)) : jr, this.query = this.normalize(Sr)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, Wr.ab)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let rr = this.peek();
          if (rr < 0) return this.done = !0, this;
          let Sr = (0, Wr.kb)(rr),
            Qr = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, Wr.bb)(rr);
          let Zr = this.normalize(Sr);
          if (Zr.length)
            for (let Wr = 0, ar = Qr;; Wr++) {
              let rr = Zr.charCodeAt(Wr),
                jr = this.match(rr, ar, this.bufferPos + this.bufferStart);
              if (Wr == Zr.length - 1) {
                if (jr) return this.value = jr, this;
                break
              }
              ar == Qr && Wr < Sr.length && Sr.charCodeAt(Wr) == rr && ar++
            }
        }
      }
      match(rr, Sr, Qr) {
        let Zr = null;
        for (let Wr = 0; Wr < this.matches.length; Wr += 2) {
          let Sr = this.matches[Wr],
            ar = !1;
          this.query.charCodeAt(Sr) == rr && (Sr == this.query.length - 1 ? Zr = {
            from: this.matches[Wr + 1],
            to: Qr
          } : (this.matches[Wr]++, ar = !0)), ar || (this.matches.splice(Wr, 2), Wr -= 2)
        }
        return this.query.charCodeAt(0) == rr && (1 == this.query.length ? Zr = {
          from: Sr,
          to: Qr
        } : this.matches.push(1, Sr)), Zr && this.test && !this.test(Zr.from, Zr.to, this.buffer, this.bufferStart) && (Zr = null), Zr
      }
    }
    "undefined" != typeof Symbol && (Ir.prototype[Symbol.iterator] = function() {
      return this
    });
    const fr = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      Er = "gm" + (null == /x/.unicode ? "" : "u");
    class pr {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rr.length;
        if (this.text = rr, this.to = Wr, this.curLine = "", this.done = !1, this.value = fr, /\\[sWDnr]|\n|\r|\[\^/.test(Sr)) return new Nr(rr, Sr, Qr, Zr, Wr);
        this.re = new RegExp(Sr, Er + ((null === Qr || void 0 === Qr ? void 0 : Qr.ignoreCase) ? "i" : "")), this.test = null === Qr || void 0 === Qr ? void 0 : Qr.test, this.iter = rr.iter();
        let ar = rr.lineAt(Zr);
        this.curLineStart = ar.from, this.matchPos = Ur(rr, Zr), this.getLine(this.curLineStart)
      }
      getLine(rr) {
        this.iter.next(rr), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let rr = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = rr;
          let Sr = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (Sr) {
            let Qr = this.curLineStart + Sr.index,
              Zr = Qr + Sr[0].length;
            if (this.matchPos = Ur(this.text, Zr + (Qr == Zr ? 1 : 0)), Qr == this.curLineStart + this.curLine.length && this.nextLine(), (Qr < Zr || Qr > this.value.to) && (!this.test || this.test(Qr, Zr, Sr))) return this.value = {
              from: Qr,
              to: Zr,
              match: Sr
            }, this;
            rr = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), rr = 0
          }
        }
      }
    }
    const xr = new WeakMap;
    class mr {
      constructor(rr, Sr) {
        this.from = rr, this.text = Sr
      }
      get to() {
        return this.from + this.text.length
      }
      static get(rr, Sr, Qr) {
        let Zr = xr.get(rr);
        if (!Zr || Zr.from >= Qr || Zr.to <= Sr) {
          let Zr = new mr(Sr, rr.sliceString(Sr, Qr));
          return xr.set(rr, Zr), Zr
        }
        if (Zr.from == Sr && Zr.to == Qr) return Zr;
        let {
          text: Wr,
          from: ar
        } = Zr;
        return ar > Sr && (Wr = rr.sliceString(Sr, ar) + Wr, ar = Sr), Zr.to < Qr && (Wr += rr.sliceString(Zr.to, Qr)), xr.set(rr, new mr(ar, Wr)), new mr(Sr, Wr.slice(Sr - ar, Qr - ar))
      }
    }
    class Nr {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.text = rr, this.to = Wr, this.done = !1, this.value = fr, this.matchPos = Ur(rr, Zr), this.re = new RegExp(Sr, Er + ((null === Qr || void 0 === Qr ? void 0 : Qr.ignoreCase) ? "i" : "")), this.test = null === Qr || void 0 === Qr ? void 0 : Qr.test, this.flat = mr.get(rr, Zr, this.chunkEnd(Zr + 5e3))
      }
      chunkEnd(rr) {
        return rr >= this.to ? this.to : this.text.lineAt(rr).to
      }
      next() {
        for (;;) {
          let rr = this.re.lastIndex = this.matchPos - this.flat.from,
            Sr = this.re.exec(this.flat.text);
          if (Sr && !Sr[0] && Sr.index == rr && (this.re.lastIndex = rr + 1, Sr = this.re.exec(this.flat.text)), Sr) {
            let rr = this.flat.from + Sr.index,
              Qr = rr + Sr[0].length;
            if ((this.flat.to >= this.to || Sr.index + Sr[0].length <= this.flat.text.length - 10) && (!this.test || this.test(rr, Qr, Sr))) return this.value = {
              from: rr,
              to: Qr,
              match: Sr
            }, this.matchPos = Ur(this.text, Qr + (rr == Qr ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = mr.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function Ur(rr, Sr) {
      if (Sr >= rr.length) return Sr;
      let Qr, Zr = rr.lineAt(Sr);
      for (; Sr < Zr.to && (Qr = Zr.text.charCodeAt(Sr - Zr.from)) >= 56320 && Qr < 57344;) Sr++;
      return Sr
    }
    "undefined" != typeof Symbol && (pr.prototype[Symbol.iterator] = Nr.prototype[Symbol.iterator] = function() {
      return this
    });
    const tr = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      hr = Wr.u.define({
        combine: rr => (0, Wr.db)(rr, tr, {
          highlightWordAroundCursor: (rr, Sr) => rr || Sr,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function zr(rr) {
      let Sr = [yr, Kr];
      return rr && Sr.push(hr.of(rr)), Sr
    }
    const Yr = Zr.c.mark({
        class: "cm-selectionMatch"
      }),
      nr = Zr.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function er(rr, Sr, Qr, Zr) {
      return (0 == Qr || rr(Sr.sliceDoc(Qr - 1, Qr)) != Wr.k.Word) && (Zr == Sr.doc.length || rr(Sr.sliceDoc(Zr, Zr + 1)) != Wr.k.Word)
    }
    const Kr = Zr.m.fromClass(class {
        constructor(rr) {
          this.OZ = this.getDeco(rr)
        }
        update(rr) {
          (rr.selectionSet || rr.docChanged || rr.viewportChanged) && (this.OZ = this.getDeco(rr.view))
        }
        getDeco(rr) {
          let Sr = rr.state.facet(hr),
            {
              state: Qr
            } = rr,
            ar = Qr.selection;
          if (ar.yh.length > 1) return Zr.c.none;
          let jr, fr = ar.main,
            Er = null;
          if (fr.empty) {
            if (!Sr.highlightWordAroundCursor) return Zr.c.none;
            let rr = Qr.wordAt(fr.head);
            if (!rr) return Zr.c.none;
            Er = Qr.charCategorizer(fr.head), jr = Qr.sliceDoc(rr.from, rr.to)
          } else {
            let rr = fr.to - fr.from;
            if (rr < Sr.minSelectionLength || rr > 200) return Zr.c.none;
            if (Sr.wholeWords) {
              if (jr = Qr.sliceDoc(fr.from, fr.to), Er = Qr.charCategorizer(fr.head), !er(Er, Qr, fr.from, fr.to) || ! function(rr, Sr, Qr, Zr) {
                  return rr(Sr.sliceDoc(Qr, Qr + 1)) == Wr.k.Word && rr(Sr.sliceDoc(Zr - 1, Zr)) == Wr.k.Word
                }(Er, Qr, fr.from, fr.to)) return Zr.c.none
            } else if (jr = Qr.sliceDoc(fr.from, fr.to), !jr) return Zr.c.none
          }
          let pr = [];
          for (let Wr of rr.Brr) {
            let rr = new Ir(Qr.doc, jr, Wr.from, Wr.to);
            for (; !rr.next().done;) {
              let {
                from: Wr,
                to: ar
              } = rr.value;
              if ((!Er || er(Er, Qr, Wr, ar)) && (fr.empty && Wr <= fr.from && ar >= fr.to ? pr.push(nr.range(Wr, ar)) : (Wr >= fr.to || ar <= fr.from) && pr.push(Yr.range(Wr, ar)), pr.length > Sr.maxMatches)) return Zr.c.none
            }
          }
          return Zr.c.set(pr)
        }
      }, {
        OZ: rr => rr.OZ
      }),
      yr = Zr.i.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const Br = Wr.u.define({
      combine: rr => (0, Wr.db)(rr, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: rr => new rS(rr),
        scrollToMatch: rr => Zr.i.scrollIntoView(rr)
      })
    });
    class Tr {
      constructor(rr) {
        this.search = rr.search, this.caseSensitive = !!rr.caseSensitive, this.literal = !!rr.literal, this.regexp = !!rr.regexp, this.replace = rr.replace || "", this.valid = !!this.search && (!this.regexp || function(rr) {
          try {
            return new RegExp(rr, Er), !0
          } catch (Sr) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!rr.wholeWord, this.test = rr.test
      }
      unquote(rr) {
        return this.literal ? rr : rr.replace(/\\([nrt\\])/g, ((rr, Sr) => "n" == Sr ? "\n" : "r" == Sr ? "\r" : "t" == Sr ? "\t" : "\\"))
      }
      eq(rr) {
        return this.search == rr.search && this.replace == rr.replace && this.caseSensitive == rr.caseSensitive && this.regexp == rr.regexp && this.wholeWord == rr.wholeWord && this.test == rr.test
      }
      create() {
        return this.regexp ? new Hr(this) : new Lr(this)
      }
      getCursor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = rr.doc ? rr : Wr.q.create({
            doc: rr
          });
        return null == Qr && (Qr = Zr.doc.length), this.regexp ? lr(this, Zr, Sr, Qr) : Or(this, Zr, Sr, Qr)
      }
    }
    class vr {
      constructor(rr) {
        this.spec = rr
      }
    }

    function Or(rr, Sr, Qr, Zr) {
      let ar;
      var jr, fr;
      return rr.wholeWord && (jr = Sr.doc, fr = Sr.charCategorizer(Sr.selection.main.head), ar = (rr, Sr, Qr, Zr) => ((Zr > rr || Zr + Qr.length < Sr) && (Zr = Math.max(0, rr - 2), Qr = jr.sliceString(Zr, Math.min(jr.length, Sr + 2))), (fr(Xr(Qr, rr - Zr)) != Wr.k.Word || fr(Pr(Qr, rr - Zr)) != Wr.k.Word) && (fr(Pr(Qr, Sr - Zr)) != Wr.k.Word || fr(Xr(Qr, Sr - Zr)) != Wr.k.Word))), rr.test && (ar = function(rr, Sr, Qr) {
        return (Zr, Wr, ar, jr) => {
          if (Qr && !Qr(Zr, Wr, ar, jr)) return !1;
          let Ir = Zr >= jr && Wr <= jr + ar.length ? ar.slice(Zr - jr, Wr - jr) : Sr.doc.sliceString(Zr, Wr);
          return rr(Ir, Sr, Zr, Wr)
        }
      }(rr.test, Sr, ar)), new Ir(Sr.doc, rr.unquoted, Qr, Zr, rr.caseSensitive ? void 0 : rr => rr.toLowerCase(), ar)
    }
    class Lr extends vr {
      constructor(rr) {
        super(rr)
      }
      nextMatch(rr, Sr, Qr) {
        let Zr = Or(this.spec, rr, Qr, rr.doc.length).nextOverlapping();
        if (Zr.done) {
          let Qr = Math.min(rr.doc.length, Sr + this.spec.unquoted.length);
          Zr = Or(this.spec, rr, 0, Qr).nextOverlapping()
        }
        return Zr.done || Zr.value.from == Sr && Zr.value.to == Qr ? null : Zr.value
      }
      prevMatchInRange(rr, Sr, Qr) {
        for (let Zr = Qr;;) {
          let Qr = Math.max(Sr, Zr - 1e4 - this.spec.unquoted.length),
            Wr = Or(this.spec, rr, Qr, Zr),
            ar = null;
          for (; !Wr.nextOverlapping().done;) ar = Wr.value;
          if (ar) return ar;
          if (Qr == Sr) return null;
          Zr -= 1e4
        }
      }
      prevMatch(rr, Sr, Qr) {
        let Zr = this.prevMatchInRange(rr, 0, Sr);
        return Zr || (Zr = this.prevMatchInRange(rr, Math.max(0, Qr - this.spec.unquoted.length), rr.doc.length)), !Zr || Zr.from == Sr && Zr.to == Qr ? null : Zr
      }
      getReplacement(rr) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(rr, Sr) {
        let Qr = Or(this.spec, rr, 0, rr.doc.length),
          Zr = [];
        for (; !Qr.next().done;) {
          if (Zr.length >= Sr) return null;
          Zr.push(Qr.value)
        }
        return Zr
      }
      highlight(rr, Sr, Qr, Zr) {
        let Wr = Or(this.spec, rr, Math.max(0, Sr - this.spec.unquoted.length), Math.min(Qr + this.spec.unquoted.length, rr.doc.length));
        for (; !Wr.next().done;) Zr(Wr.value.from, Wr.value.to)
      }
    }

    function lr(rr, Sr, Qr, Zr) {
      let ar;
      var jr;
      return rr.wholeWord && (jr = Sr.charCategorizer(Sr.selection.main.head), ar = (rr, Sr, Qr) => !Qr[0].length || (jr(Xr(Qr.input, Qr.index)) != Wr.k.Word || jr(Pr(Qr.input, Qr.index)) != Wr.k.Word) && (jr(Pr(Qr.input, Qr.index + Qr[0].length)) != Wr.k.Word || jr(Xr(Qr.input, Qr.index + Qr[0].length)) != Wr.k.Word)), rr.test && (ar = function(rr, Sr, Qr) {
        return (Zr, Wr, ar) => (!Qr || Qr(Zr, Wr, ar)) && rr(ar[0], Sr, Zr, Wr)
      }(rr.test, Sr, ar)), new pr(Sr.doc, rr.search, {
        ignoreCase: !rr.caseSensitive,
        test: ar
      }, Qr, Zr)
    }

    function Xr(rr, Sr) {
      return rr.slice((0, Wr.ib)(rr, Sr, !1), Sr)
    }

    function Pr(rr, Sr) {
      return rr.slice(Sr, (0, Wr.ib)(rr, Sr))
    }
    class Hr extends vr {
      nextMatch(rr, Sr, Qr) {
        let Zr = lr(this.spec, rr, Qr, rr.doc.length).next();
        return Zr.done && (Zr = lr(this.spec, rr, 0, Sr).next()), Zr.done ? null : Zr.value
      }
      prevMatchInRange(rr, Sr, Qr) {
        for (let Zr = 1;; Zr++) {
          let Wr = Math.max(Sr, Qr - 1e4 * Zr),
            ar = lr(this.spec, rr, Wr, Qr),
            jr = null;
          for (; !ar.next().done;) jr = ar.value;
          if (jr && (Wr == Sr || jr.from > Wr + 10)) return jr;
          if (Wr == Sr) return null
        }
      }
      prevMatch(rr, Sr, Qr) {
        return this.prevMatchInRange(rr, 0, Sr) || this.prevMatchInRange(rr, Qr, rr.doc.length)
      }
      getReplacement(rr) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((Sr, Qr) => {
          if ("&" == Qr) return rr.match[0];
          if ("$" == Qr) return "$";
          for (let Zr = Qr.length; Zr > 0; Zr--) {
            let Sr = +Qr.slice(0, Zr);
            if (Sr > 0 && Sr < rr.match.length) return rr.match[Sr] + Qr.slice(Zr)
          }
          return Sr
        }))
      }
      matchAll(rr, Sr) {
        let Qr = lr(this.spec, rr, 0, rr.doc.length),
          Zr = [];
        for (; !Qr.next().done;) {
          if (Zr.length >= Sr) return null;
          Zr.push(Qr.value)
        }
        return Zr
      }
      highlight(rr, Sr, Qr, Zr) {
        let Wr = lr(this.spec, rr, Math.max(0, Sr - 250), Math.min(Qr + 250, rr.doc.length));
        for (; !Wr.next().done;) Zr(Wr.value.from, Wr.value.to)
      }
    }
    const qr = Wr.P.define(),
      Rr = Wr.P.define(),
      gr = Wr.T.define({
        create: rr => new Cr(br(rr).create(), null),
        update(rr, Sr) {
          for (let Qr of Sr.effects) Qr.is(qr) ? rr = new Cr(Qr.value.create(), rr.panel) : Qr.is(Rr) && (rr = new Cr(rr.query, Qr.value ? or : null));
          return rr
        },
        provide: rr => Zr.kb.from(rr, (rr => rr.panel))
      });
    class Cr {
      constructor(rr, Sr) {
        this.query = rr, this.panel = Sr
      }
    }
    const Mr = Zr.c.mark({
        class: "cm-searchMatch"
      }),
      Gr = Zr.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      kr = Zr.m.fromClass(class {
        constructor(rr) {
          this.view = rr, this.OZ = this.highlight(rr.state.field(gr))
        }
        update(rr) {
          let Sr = rr.state.field(gr);
          (Sr != rr.startState.field(gr) || rr.docChanged || rr.selectionSet || rr.viewportChanged) && (this.OZ = this.highlight(Sr))
        }
        highlight(rr) {
          let {
            query: Sr,
            panel: Qr
          } = rr;
          if (!Qr || !Sr.spec.valid) return Zr.c.none;
          let {
            view: ar
          } = this, jr = new Wr.E;
          for (let Zr = 0, Wr = ar.Brr, Ir = Wr.length; Zr < Ir; Zr++) {
            let {
              from: rr,
              to: Qr
            } = Wr[Zr];
            for (; Zr < Ir - 1 && Qr > Wr[Zr + 1].from - 500;) Qr = Wr[++Zr].to;
            Sr.highlight(ar.state, rr, Qr, ((rr, Sr) => {
              let Qr = ar.state.selection.yh.some((Qr => Qr.from == rr && Qr.to == Sr));
              jr.add(rr, Sr, Qr ? Gr : Mr)
            }))
          }
          return jr.finish()
        }
      }, {
        OZ: rr => rr.OZ
      });

    function Ar(rr) {
      return Sr => {
        let Qr = Sr.state.field(gr, !1);
        return Qr && Qr.query.spec.valid ? rr(Sr, Qr) : dr(Sr)
      }
    }
    const Vr = Ar(((rr, Sr) => {
        let {
          query: Qr
        } = Sr, {
          to: Zr
        } = rr.state.selection.main, ar = Qr.nextMatch(rr.state, Zr, Zr);
        if (!ar) return !1;
        let jr = Wr.m.single(ar.from, ar.to),
          Ir = rr.state.facet(Br);
        return rr.dispatch({
          selection: jr,
          effects: [WS(rr, ar), Ir.scrollToMatch(jr.main, rr)],
          userEvent: "select.search"
        }), Dr(rr), !0
      })),
      ir = Ar(((rr, Sr) => {
        let {
          query: Qr
        } = Sr, {
          state: Zr
        } = rr, {
          from: ar
        } = Zr.selection.main, jr = Qr.prevMatch(Zr, ar, ar);
        if (!jr) return !1;
        let Ir = Wr.m.single(jr.from, jr.to),
          fr = rr.state.facet(Br);
        return rr.dispatch({
          selection: Ir,
          effects: [WS(rr, jr), fr.scrollToMatch(Ir.main, rr)],
          userEvent: "select.search"
        }), Dr(rr), !0
      })),
      wr = Ar(((rr, Sr) => {
        let {
          query: Qr
        } = Sr, Zr = Qr.matchAll(rr.state, 1e3);
        return !(!Zr || !Zr.length) && (rr.dispatch({
          selection: Wr.m.create(Zr.map((rr => Wr.m.range(rr.from, rr.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      cr = Ar(((rr, Sr) => {
        let {
          query: Qr
        } = Sr, {
          state: ar
        } = rr, {
          from: jr,
          to: Ir
        } = ar.selection.main;
        if (ar.readOnly) return !1;
        let fr = Qr.nextMatch(ar, jr, jr);
        if (!fr) return !1;
        let Er, pr, xr = fr,
          mr = [],
          Nr = [];
        xr.from == jr && xr.to == Ir && (pr = ar.toText(Qr.getReplacement(xr)), mr.push({
          from: xr.from,
          to: xr.to,
          insert: pr
        }), xr = Qr.nextMatch(ar, xr.from, xr.to), Nr.push(Zr.i.announce.of(ar.phrase("replaced match on line $", ar.doc.lineAt(jr).number) + ".")));
        let Ur = rr.state.changes(mr);
        return xr && (Er = Wr.m.single(xr.from, xr.to).map(Ur), Nr.push(WS(rr, xr)), Nr.push(ar.facet(Br).scrollToMatch(Er.main, rr))), rr.dispatch({
          changes: Ur,
          selection: Er,
          effects: Nr,
          userEvent: "input.replace"
        }), !0
      })),
      Fr = Ar(((rr, Sr) => {
        let {
          query: Qr
        } = Sr;
        if (rr.state.readOnly) return !1;
        let Wr = Qr.matchAll(rr.state, 1e9).map((rr => {
          let {
            from: Sr,
            to: Zr
          } = rr;
          return {
            from: Sr,
            to: Zr,
            insert: Qr.getReplacement(rr)
          }
        }));
        if (!Wr.length) return !1;
        let ar = rr.state.phrase("replaced $ matches", Wr.length) + ".";
        return rr.dispatch({
          changes: Wr,
          effects: Zr.i.announce.of(ar),
          userEvent: "input.replace.all"
        }), !0
      }));

    function or(rr) {
      return rr.state.facet(Br).createPanel(rr)
    }

    function br(rr, Sr) {
      var Qr, Zr, Wr, ar, jr;
      let Ir = rr.selection.main,
        fr = Ir.empty || Ir.to > Ir.from + 100 ? "" : rr.sliceDoc(Ir.from, Ir.to);
      if (Sr && !fr) return Sr;
      let Er = rr.facet(Br);
      return new Tr({
        search: (null !== (Qr = null === Sr || void 0 === Sr ? void 0 : Sr.literal) && void 0 !== Qr ? Qr : Er.literal) ? fr : fr.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Zr = null === Sr || void 0 === Sr ? void 0 : Sr.caseSensitive) && void 0 !== Zr ? Zr : Er.caseSensitive,
        literal: null !== (Wr = null === Sr || void 0 === Sr ? void 0 : Sr.literal) && void 0 !== Wr ? Wr : Er.literal,
        regexp: null !== (ar = null === Sr || void 0 === Sr ? void 0 : Sr.regexp) && void 0 !== ar ? ar : Er.regexp,
        wholeWord: null !== (jr = null === Sr || void 0 === Sr ? void 0 : Sr.wholeWord) && void 0 !== jr ? jr : Er.wholeWord
      })
    }

    function Jr(rr) {
      let Sr = (0, Zr.B)(rr, or);
      return Sr && Sr.dom.querySelector("[main-field]")
    }

    function Dr(rr) {
      let Sr = Jr(rr);
      Sr && Sr == rr.root.activeElement && Sr.select()
    }
    const dr = rr => {
        let Sr = rr.state.field(gr, !1);
        if (Sr && Sr.panel) {
          let Qr = Jr(rr);
          if (Qr && Qr != rr.root.activeElement) {
            let Zr = br(rr.state, Sr.query.spec);
            Zr.valid && rr.dispatch({
              effects: qr.of(Zr)
            }), Qr.focus(), Qr.select()
          }
        } else rr.dispatch({
          effects: [Rr.of(!0), Sr ? qr.of(br(rr.state, Sr.query.spec)) : Wr.P.appendConfig.of(jS)]
        });
        return !0
      },
      sr = rr => {
        let Sr = rr.state.field(gr, !1);
        if (!Sr || !Sr.panel) return !1;
        let Qr = (0, Zr.B)(rr, or);
        return Qr && Qr.dom.contains(rr.root.activeElement) && rr.focus(), rr.dispatch({
          effects: Rr.of(!1)
        }), !0
      },
      ur = [{
        key: "Mod-f",
        run: dr,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: Vr,
        shift: ir,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: Vr,
        shift: ir,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: sr,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr, Zr = Sr.selection;
          if (Zr.yh.length > 1 || Zr.main.empty) return !1;
          let {
            from: ar,
            to: jr
          } = Zr.main, fr = [], Er = 0;
          for (let pr = new Ir(Sr.doc, Sr.sliceDoc(ar, jr)); !pr.next().done;) {
            if (fr.length > 1e3) return !1;
            pr.value.from == ar && (Er = fr.length), fr.push(Wr.m.range(pr.value.from, pr.value.to))
          }
          return Qr(Sr.update({
            selection: Wr.m.create(fr, Er),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: rr => {
          let {
            state: Sr
          } = rr, Qr = String(Sr.doc.lineAt(rr.state.selection.main.head).number), {
            close: ar,
            result: jr
          } = (0, Zr.jb)(rr, {
            label: Sr.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: Qr
            },
            focus: !0,
            submitLabel: Sr.phrase("go")
          });
          return jr.then((Qr => {
            let jr = Qr && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(Qr.elements.line.value);
            if (!jr) return void rr.dispatch({
              effects: ar
            });
            let Ir = Sr.doc.lineAt(Sr.selection.main.head),
              [, fr, Er, pr, xr] = jr,
              mr = pr ? +pr.slice(1) : 0,
              Nr = Er ? +Er : Ir.number;
            if (Er && xr) {
              let rr = Nr / 100;
              fr && (rr = rr * ("-" == fr ? -1 : 1) + Ir.number / Sr.doc.lines), Nr = Math.round(Sr.doc.lines * rr)
            } else Er && fr && (Nr = Nr * ("-" == fr ? -1 : 1) + Ir.number);
            let Ur = Sr.doc.line(Math.max(1, Math.min(Sr.doc.lines, Nr))),
              tr = Wr.m.cursor(Ur.from + Math.max(0, Math.min(mr, Ur.length)));
            rr.dispatch({
              effects: [ar, Zr.i.scrollIntoView(tr.from, {
                y: "center"
              })],
              selection: tr
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr, {
            yh: ar
          } = Sr.selection;
          if (ar.some((rr => rr.from === rr.to))) return (rr => {
            let {
              state: Sr,
              dispatch: Qr
            } = rr, {
              selection: Zr
            } = Sr, ar = Wr.m.create(Zr.yh.map((rr => Sr.wordAt(rr.head) || Wr.m.cursor(rr.head))), Zr.mainIndex);
            return !ar.eq(Zr) && (Qr(Sr.update({
              selection: ar
            })), !0)
          })({
            state: Sr,
            dispatch: Qr
          });
          let jr = Sr.sliceDoc(ar[0].from, ar[0].to);
          if (Sr.selection.yh.some((rr => Sr.sliceDoc(rr.from, rr.to) != jr))) return !1;
          let fr = function(rr, Sr) {
            let {
              main: Qr,
              yh: Zr
            } = rr.selection, Wr = rr.wordAt(Qr.head), ar = Wr && Wr.from == Qr.from && Wr.to == Qr.to;
            for (let jr = !1, fr = new Ir(rr.doc, Sr, Zr[Zr.length - 1].to);;) {
              if (fr.next(), !fr.done) {
                if (jr && Zr.some((rr => rr.from == fr.value.from))) continue;
                if (ar) {
                  let Sr = rr.wordAt(fr.value.from);
                  if (!Sr || Sr.from != fr.value.from || Sr.to != fr.value.to) continue
                }
                return fr.value
              }
              if (jr) return null;
              fr = new Ir(rr.doc, Sr, 0, Math.max(0, Zr[Zr.length - 1].from - 1)), jr = !0
            }
          }(Sr, jr);
          return !!fr && (Qr(Sr.update({
            selection: Sr.selection.addRange(Wr.m.range(fr.from, fr.to), !1),
            effects: Zr.i.scrollIntoView(fr.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class rS {
      constructor(rr) {
        this.view = rr;
        let Sr = this.query = rr.state.field(gr).query.spec;

        function Qr(rr, Sr, Qr) {
          return (0, ar.d)("button", {
            class: "cm-button",
            name: rr,
            onclick: Sr,
            type: "button"
          }, Qr)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, ar.d)("input", {
          value: Sr.search,
          placeholder: SS(rr, "Find"),
          "aria-label": SS(rr, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, ar.d)("input", {
          value: Sr.replace,
          placeholder: SS(rr, "Replace"),
          "aria-label": SS(rr, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, ar.d)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: Sr.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, ar.d)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: Sr.regexp,
          onchange: this.commit
        }), this.wordField = (0, ar.d)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: Sr.wholeWord,
          onchange: this.commit
        }), this.dom = (0, ar.d)("div", {
          onkeydown: rr => this.keydown(rr),
          class: "cm-search"
        }, [this.searchField, Qr("next", (() => Vr(rr)), [SS(rr, "next")]), Qr("prev", (() => ir(rr)), [SS(rr, "previous")]), Qr("select", (() => wr(rr)), [SS(rr, "all")]), (0, ar.d)("label", null, [this.caseField, SS(rr, "match case")]), (0, ar.d)("label", null, [this.reField, SS(rr, "regexp")]), (0, ar.d)("label", null, [this.wordField, SS(rr, "by word")]), ...rr.state.readOnly ? [] : [(0, ar.d)("br"), this.replaceField, Qr("replace", (() => cr(rr)), [SS(rr, "replace")]), Qr("replaceAll", (() => Fr(rr)), [SS(rr, "replace all")])], (0, ar.d)("button", {
          name: "close",
          onclick: () => sr(rr),
          "aria-label": SS(rr, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let rr = new Tr({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        rr.eq(this.query) || (this.query = rr, this.view.dispatch({
          effects: qr.of(rr)
        }))
      }
      keydown(rr) {
        (0, Zr.fb)(this.view, rr, "search-panel") ? rr.preventDefault(): 13 == rr.keyCode && rr.target == this.searchField ? (rr.preventDefault(), (rr.shiftKey ? ir : Vr)(this.view)) : 13 == rr.keyCode && rr.target == this.replaceField && (rr.preventDefault(), cr(this.view))
      }
      update(rr) {
        for (let Sr of rr.transactions)
          for (let rr of Sr.effects) rr.is(qr) && !rr.value.eq(this.query) && this.setQuery(rr.value)
      }
      setQuery(rr) {
        this.query = rr, this.searchField.value = rr.search, this.replaceField.value = rr.replace, this.caseField.checked = rr.caseSensitive, this.reField.checked = rr.regexp, this.wordField.checked = rr.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(Br).top
      }
    }

    function SS(rr, Sr) {
      return rr.state.phrase(Sr)
    }
    const QS = 30,
      ZS = /[\s\.,:;?!]/;

    function WS(rr, Sr) {
      let {
        from: Qr,
        to: Wr
      } = Sr, ar = rr.state.doc.lineAt(Qr), jr = rr.state.doc.lineAt(Wr).to, Ir = Math.max(ar.from, Qr - QS), fr = Math.min(jr, Wr + QS), Er = rr.state.sliceDoc(Ir, fr);
      if (Ir != ar.from)
        for (let Zr = 0; Zr < QS; Zr++)
          if (!ZS.test(Er[Zr + 1]) && ZS.test(Er[Zr])) {
            Er = Er.slice(Zr);
            break
          } if (fr != jr)
        for (let Zr = Er.length - 1; Zr > Er.length - QS; Zr--)
          if (!ZS.test(Er[Zr - 1]) && ZS.test(Er[Zr])) {
            Er = Er.slice(0, Zr);
            break
          } return Zr.i.announce.of(`${rr.state.phrase("current match")}. ${Er} ${rr.state.phrase("on line")} ${ar.number}.`)
    }
    const aS = Zr.i.baseTheme({
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
      jS = [gr, Wr.C.low(kr), aS]
  },
  53872: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Hr,
      f: () => ES,
      i: () => vW,
      k: () => aj,
      m: () => DS,
      q: () => Xr,
      u: () => la,
      v: () => DW,
      y: () => aa,
      B: () => Da,
      D: () => oa,
      F: () => pj,
      J: () => za,
      G: () => Xj,
      N: () => Na,
      Q: () => Fa,
      S: () => RW,
      W: () => vj,
      Y: () => FS,
      ab: () => Ka,
      bb: () => va,
      fb: () => MW,
      jb: () => Sj,
      kb: () => rj,
      nb: () => ka
    });
    for (var Zr = Qr(53864), Wr = Qr(53878), ar = {
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
      }, jr = {
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
      }, Ir = "undefined" != typeof navigator && /Mac/.test(navigator.platform), fr = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Er = 0; Er < 10; Er++) ar[48 + Er] = ar[96 + Er] = String(Er);
    for (Er = 1; Er <= 24; Er++) ar[Er + 111] = "F" + Er;
    for (Er = 65; Er <= 90; Er++) ar[Er] = String.fromCharCode(Er + 32), jr[Er] = String.fromCharCode(Er);
    for (var pr in ar) jr.hasOwnProperty(pr) || (jr[pr] = ar[pr]);
    var xr = Qr(53886);
    let mr = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      Nr = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const Ur = /Edge\/(\d+)/.exec(mr.userAgent),
      tr = /MSIE \d/.test(mr.userAgent),
      hr = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(mr.userAgent),
      zr = !!(tr || hr || Ur),
      Yr = !zr && /gecko\/(\d+)/i.test(mr.userAgent),
      nr = !zr && /Chrome\/(\d+)/.exec(mr.userAgent),
      er = "webkitFontSmoothing" in Nr.documentElement.style,
      Kr = !zr && /Apple Computer/.test(mr.vendor),
      yr = Kr && (/Mobile\/\w+/.test(mr.userAgent) || mr.maxTouchPoints > 2);
    var Br = {
      mac: yr || /Mac/.test(mr.platform),
      windows: /Win/.test(mr.platform),
      linux: /Linux|X11/.test(mr.platform),
      ie: zr,
      ie_version: tr ? Nr.documentMode || 6 : hr ? +hr[1] : Ur ? +Ur[1] : 0,
      gecko: Yr,
      gecko_version: Yr ? +(/Firefox\/(\d+)/.exec(mr.userAgent) || [0, 0])[1] : 0,
      chrome: !!nr,
      chrome_version: nr ? +nr[1] : 0,
      ios: yr,
      android: /Android\b/.test(mr.userAgent),
      webkit: er,
      webkit_version: er ? +(/\bAppleWebKit\/(\d+)/.exec(mr.userAgent) || [0, 0])[1] : 0,
      safari: Kr,
      safari_version: Kr ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(mr.userAgent) || [0, 0])[1] : 0,
      tabSize: null != Nr.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function Tr(rr, Sr) {
      for (let Qr in rr) "class" == Qr && Sr.class ? Sr.class += " " + rr.class : "style" == Qr && Sr.style ? Sr.style += ";" + rr.style : Sr[Qr] = rr[Qr];
      return Sr
    }
    const vr = Object.create(null);

    function Or(rr, Sr, Qr) {
      if (rr == Sr) return !0;
      rr || (rr = vr), Sr || (Sr = vr);
      let Zr = Object.keys(rr),
        Wr = Object.keys(Sr);
      if (Zr.length - (Qr && Zr.indexOf(Qr) > -1 ? 1 : 0) != Wr.length - (Qr && Wr.indexOf(Qr) > -1 ? 1 : 0)) return !1;
      for (let ar of Zr)
        if (ar != Qr && (-1 == Wr.indexOf(ar) || rr[ar] !== Sr[ar])) return !1;
      return !0
    }

    function Lr(rr, Sr, Qr) {
      let Zr = !1;
      if (Sr)
        for (let Wr in Sr) Qr && Wr in Qr || (Zr = !0, "style" == Wr ? rr.style.cssText = "" : rr.removeAttribute(Wr));
      if (Qr)
        for (let Wr in Qr) Sr && Sr[Wr] == Qr[Wr] || (Zr = !0, "style" == Wr ? rr.style.cssText = Qr[Wr] : rr.setAttribute(Wr, Qr[Wr]));
      return Zr
    }

    function lr(rr) {
      let Sr = Object.create(null);
      for (let Qr = 0; Qr < rr.attributes.length; Qr++) {
        let Zr = rr.attributes[Qr];
        Sr[Zr.name] = Zr.value
      }
      return Sr
    }
    class Xr {
      eq(rr) {
        return !1
      }
      updateDOM(rr, Sr, Qr) {
        return !1
      }
      compare(rr) {
        return this == rr || this.constructor == rr.constructor && this.eq(rr)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(rr) {
        return !0
      }
      coordsAt(rr, Sr, Qr) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(rr) {}
    }
    var Pr = function(rr) {
      return rr[rr.Text = 0] = "Text", rr[rr.WidgetBefore = 1] = "WidgetBefore", rr[rr.WidgetAfter = 2] = "WidgetAfter", rr[rr.WidgetRange = 3] = "WidgetRange", rr
    }(Pr || (Pr = {}));
    class Hr extends Zr.L {
      constructor(rr, Sr, Qr, Zr) {
        super(), this.startSide = rr, this.endSide = Sr, this.widget = Qr, this.spec = Zr
      }
      get heightRelevant() {
        return !1
      }
      static mark(rr) {
        return new qr(rr)
      }
      static widget(rr) {
        let Sr = Math.max(-1e4, Math.min(1e4, rr.side || 0)),
          Qr = !!rr.block;
        return Sr += Qr && !rr.inlineOrder ? Sr > 0 ? 3e8 : -4e8 : Sr > 0 ? 1e8 : -1e8, new gr(rr, Sr, Sr, Qr, rr.widget || null, !1)
      }
      static replace(rr) {
        let Sr, Qr, Zr = !!rr.block;
        if (rr.isBlockGap) Sr = -5e8, Qr = 4e8;
        else {
          let {
            start: Wr,
            end: ar
          } = Cr(rr, Zr);
          Sr = (Wr ? Zr ? -3e8 : -1 : 5e8) - 1, Qr = 1 + (ar ? Zr ? 2e8 : 1 : -6e8)
        }
        return new gr(rr, Sr, Qr, Zr, rr.widget || null, !0)
      }
      static line(rr) {
        return new Rr(rr)
      }
      static set(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Zr.H.of(rr, Sr)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Hr.none = Zr.H.empty;
    class qr extends Hr {
      constructor(rr) {
        let {
          start: Sr,
          end: Qr
        } = Cr(rr);
        super(Sr ? -1 : 5e8, Qr ? 1 : -6e8, null, rr), this.tagName = rr.tagName || "span", this.attrs = rr.class && rr.attributes ? Tr(rr.attributes, {
          class: rr.class
        }) : rr.class ? {
          class: rr.class
        } : rr.attributes || vr
      }
      eq(rr) {
        return this == rr || rr instanceof qr && this.tagName == rr.tagName && Or(this.attrs, rr.attrs)
      }
      range(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr;
        if (rr >= Sr) throw new RangeError("Mark decorations may not be empty");
        return super.range(rr, Sr)
      }
    }
    qr.prototype.point = !1;
    class Rr extends Hr {
      constructor(rr) {
        super(-2e8, -2e8, null, rr)
      }
      eq(rr) {
        return rr instanceof Rr && this.spec.class == rr.spec.class && Or(this.spec.attributes, rr.spec.attributes)
      }
      range(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr;
        if (Sr != rr) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(rr, Sr)
      }
    }
    Rr.prototype.mapMode = Zr.y.TrackBefore, Rr.prototype.point = !0;
    class gr extends Hr {
      constructor(rr, Sr, Qr, Wr, ar, jr) {
        super(Sr, Qr, ar, rr), this.block = Wr, this.isReplace = jr, this.mapMode = Wr ? Sr <= 0 ? Zr.y.TrackBefore : Zr.y.TrackAfter : Zr.y.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? Pr.WidgetRange : this.startSide <= 0 ? Pr.WidgetBefore : Pr.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(rr) {
        return rr instanceof gr && (Sr = this.widget, Qr = rr.widget, Sr == Qr || !!(Sr && Qr && Sr.compare(Qr))) && this.block == rr.block && this.startSide == rr.startSide && this.endSide == rr.endSide;
        var Sr, Qr
      }
      range(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr;
        if (this.isReplace && (rr > Sr || rr == Sr && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && Sr != rr) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(rr, Sr)
      }
    }

    function Cr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: Qr,
          inclusiveEnd: Zr
        } = rr;
      return null == Qr && (Qr = rr.inclusive), null == Zr && (Zr = rr.inclusive), {
        start: null !== Qr && void 0 !== Qr ? Qr : Sr,
        end: null !== Zr && void 0 !== Zr ? Zr : Sr
      }
    }

    function Mr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wr = Qr.length - 1;
      Wr >= 0 && Qr[Wr] + Zr >= rr ? Qr[Wr] = Math.max(Qr[Wr], Sr) : Qr.push(rr, Sr)
    }
    gr.prototype.point = !0;
    class Gr extends Zr.L {
      constructor(rr, Sr) {
        super(), this.tagName = rr, this.attributes = Sr
      }
      eq(rr) {
        return rr == this || rr instanceof Gr && this.tagName == rr.tagName && Or(this.attributes, rr.attributes)
      }
      static create(rr) {
        return new Gr(rr.tagName, rr.attributes || vr)
      }
      static set(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Zr.H.of(rr, Sr)
      }
    }

    function kr(rr) {
      let Sr;
      return Sr = 11 == rr.nodeType ? rr.getSelection ? rr : rr.ownerDocument : rr, Sr.getSelection()
    }

    function Ar(rr, Sr) {
      return !!Sr && (rr == Sr || rr.contains(1 != Sr.nodeType ? Sr.parentNode : Sr))
    }

    function Vr(rr, Sr) {
      if (!Sr.anchorNode) return !1;
      try {
        return Ar(rr, Sr.anchorNode)
      } catch (Qr) {
        return !1
      }
    }

    function ir(rr) {
      return 3 == rr.nodeType ? ZS(rr, 0, rr.nodeValue.length).getClientRects() : 1 == rr.nodeType ? rr.getClientRects() : []
    }

    function wr(rr, Sr, Qr, Zr) {
      return !!Qr && (or(rr, Sr, Qr, Zr, -1) || or(rr, Sr, Qr, Zr, 1))
    }

    function cr(rr) {
      for (var Sr = 0;; Sr++)
        if (!(rr = rr.previousSibling)) return Sr
    }

    function Fr(rr) {
      return 1 == rr.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(rr.nodeName)
    }

    function or(rr, Sr, Qr, Zr, Wr) {
      for (;;) {
        if (rr == Qr && Sr == Zr) return !0;
        if (Sr == (Wr < 0 ? 0 : br(rr))) {
          if ("DIV" == rr.nodeName) return !1;
          let Qr = rr.parentNode;
          if (!Qr || 1 != Qr.nodeType) return !1;
          Sr = cr(rr) + (Wr < 0 ? 0 : 1), rr = Qr
        } else {
          if (1 != rr.nodeType) return !1;
          if (1 == (rr = rr.childNodes[Sr + (Wr < 0 ? -1 : 0)]).nodeType && "false" == rr.contentEditable) return !1;
          Sr = Wr < 0 ? br(rr) : 0
        }
      }
    }

    function br(rr) {
      return 3 == rr.nodeType ? rr.nodeValue.length : rr.childNodes.length
    }

    function Jr(rr, Sr) {
      let Qr = Sr ? rr.left : rr.right;
      return {
        left: Qr,
        right: Qr,
        top: rr.top,
        bottom: rr.bottom
      }
    }

    function Dr(rr) {
      let Sr = rr.visualViewport;
      return Sr ? {
        left: 0,
        right: Sr.width,
        top: 0,
        bottom: Sr.height
      } : {
        left: 0,
        right: rr.innerWidth,
        top: 0,
        bottom: rr.innerHeight
      }
    }

    function dr(rr, Sr) {
      let Qr = Sr.width / rr.offsetWidth,
        Zr = Sr.height / rr.offsetHeight;
      return (Qr > .995 && Qr < 1.005 || !isFinite(Qr) || Math.abs(Sr.width - rr.offsetWidth) < 1) && (Qr = 1), (Zr > .995 && Zr < 1.005 || !isFinite(Zr) || Math.abs(Sr.height - rr.offsetHeight) < 1) && (Zr = 1), {
        scaleX: Qr,
        scaleY: Zr
      }
    }

    function sr(rr) {
      let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        Qr = rr.ownerDocument,
        Zr = null,
        Wr = null;
      for (let ar = rr.parentNode; ar && (ar != Qr.body && (Sr && !Zr || !Wr));)
        if (1 == ar.nodeType) !Wr && ar.scrollHeight > ar.clientHeight && (Wr = ar), Sr && !Zr && ar.scrollWidth > ar.clientWidth && (Zr = ar), ar = ar.assignedSlot || ar.parentNode;
        else {
          if (11 != ar.nodeType) break;
          ar = ar.host
        } return {
        x: Zr,
        y: Wr
      }
    }
    Gr.prototype.startSide = Gr.prototype.endSide = -1;
    class ur {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(rr) {
        return this.anchorNode == rr.anchorNode && this.anchorOffset == rr.anchorOffset && this.focusNode == rr.focusNode && this.focusOffset == rr.focusOffset
      }
      setRange(rr) {
        let {
          anchorNode: Sr,
          focusNode: Qr
        } = rr;
        this.set(Sr, Math.min(rr.anchorOffset, Sr ? br(Sr) : 0), Qr, Math.min(rr.focusOffset, Qr ? br(Qr) : 0))
      }
      set(rr, Sr, Qr, Zr) {
        this.anchorNode = rr, this.anchorOffset = Sr, this.focusNode = Qr, this.focusOffset = Zr
      }
    }
    let rS, SS = null;

    function QS(rr) {
      if (rr.setActive) return rr.setActive();
      if (SS) return rr.focus(SS);
      let Sr = [];
      for (let Qr = rr; Qr && (Sr.push(Qr, Qr.scrollTop, Qr.scrollLeft), Qr != Qr.ownerDocument); Qr = Qr.parentNode);
      if (rr.focus(null == SS ? {
          get preventScroll() {
            return SS = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !SS) {
        SS = !1;
        for (let rr = 0; rr < Sr.length;) {
          let Qr = Sr[rr++],
            Zr = Sr[rr++],
            Wr = Sr[rr++];
          Qr.scrollTop != Zr && (Qr.scrollTop = Zr), Qr.scrollLeft != Wr && (Qr.scrollLeft = Wr)
        }
      }
    }

    function ZS(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sr,
        Zr = rS || (rS = document.createRange());
      return Zr.setEnd(rr, Qr), Zr.setStart(rr, Sr), Zr
    }

    function WS(rr, Sr, Qr, Zr) {
      let Wr = {
        key: Sr,
        code: Sr,
        keyCode: Qr,
        which: Qr,
        cancelable: !0
      };
      Zr && ({
        altKey: Wr.altKey,
        ctrlKey: Wr.ctrlKey,
        shiftKey: Wr.shiftKey,
        metaKey: Wr.metaKey
      } = Zr);
      let ar = new KeyboardEvent("keydown", Wr);
      ar.synthetic = !0, rr.dispatchEvent(ar);
      let jr = new KeyboardEvent("keyup", Wr);
      return jr.synthetic = !0, rr.dispatchEvent(jr), ar.defaultPrevented || jr.defaultPrevented
    }

    function aS(rr) {
      return rr instanceof Window ? rr.pageYOffset > Math.max(0, rr.document.documentElement.scrollHeight - rr.innerHeight - 4) : rr.scrollTop > Math.max(1, rr.scrollHeight - rr.clientHeight - 4)
    }

    function jS(rr, Sr) {
      for (let Qr = rr, Zr = Sr;;) {
        if (3 == Qr.nodeType && Zr > 0) return {
          node: Qr,
          offset: Zr
        };
        if (1 == Qr.nodeType && Zr > 0) {
          if ("false" == Qr.contentEditable) return null;
          Qr = Qr.childNodes[Zr - 1], Zr = br(Qr)
        } else {
          if (!Qr.parentNode || Fr(Qr)) return null;
          Zr = cr(Qr), Qr = Qr.parentNode
        }
      }
    }

    function IS(rr, Sr) {
      for (let Qr = rr, Zr = Sr;;) {
        if (3 == Qr.nodeType && Zr < Qr.nodeValue.length) return {
          node: Qr,
          offset: Zr
        };
        if (1 == Qr.nodeType && Zr < Qr.childNodes.length) {
          if ("false" == Qr.contentEditable) return null;
          Qr = Qr.childNodes[Zr], Zr = 0
        } else {
          if (!Qr.parentNode || Fr(Qr)) return null;
          Zr = cr(Qr) + 1, Qr = Qr.parentNode
        }
      }
    }
    Br.safari && Br.safari_version >= 26 && (SS = !1);
    class fS {
      constructor(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = rr, this.offset = Sr, this.precise = Qr
      }
      static before(rr, Sr) {
        return new fS(rr.parentNode, cr(rr), Sr)
      }
      static after(rr, Sr) {
        return new fS(rr.parentNode, cr(rr) + 1, Sr)
      }
    }
    var ES = function(rr) {
      return rr[rr.LTR = 0] = "LTR", rr[rr.RTL = 1] = "RTL", rr
    }(ES || (ES = {}));
    const pS = ES.LTR,
      xS = ES.RTL;

    function mS(rr) {
      let Sr = [];
      for (let Qr = 0; Qr < rr.length; Qr++) Sr.push(1 << +rr[Qr]);
      return Sr
    }
    const NS = mS("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      US = mS("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      tS = Object.create(null),
      hS = [];
    for (let Pj of ["()", "[]", "{}"]) {
      let rr = Pj.charCodeAt(0),
        Sr = Pj.charCodeAt(1);
      tS[rr] = Sr, tS[Sr] = -rr
    }

    function zS(rr) {
      return rr <= 247 ? NS[rr] : 1424 <= rr && rr <= 1524 ? 2 : 1536 <= rr && rr <= 1785 ? US[rr - 1536] : 1774 <= rr && rr <= 2220 ? 4 : 8192 <= rr && rr <= 8204 ? 256 : 64336 <= rr && rr <= 65023 ? 4 : 1
    }
    const YS = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class nS {
      get dir() {
        return this.level % 2 ? xS : pS
      }
      constructor(rr, Sr, Qr) {
        this.from = rr, this.to = Sr, this.level = Qr
      }
      side(rr, Sr) {
        return this.dir == Sr == rr ? this.to : this.from
      }
      forward(rr, Sr) {
        return rr == (this.dir == Sr)
      }
      static find(rr, Sr, Qr, Zr) {
        let Wr = -1;
        for (let ar = 0; ar < rr.length; ar++) {
          let jr = rr[ar];
          if (jr.from <= Sr && jr.to >= Sr) {
            if (jr.level == Qr) return ar;
            (Wr < 0 || (0 != Zr ? Zr < 0 ? jr.from < Sr : jr.to > Sr : rr[Wr].level > jr.level)) && (Wr = ar)
          }
        }
        if (Wr < 0) throw new RangeError("Index out of range");
        return Wr
      }
    }

    function eS(rr, Sr) {
      if (rr.length != Sr.length) return !1;
      for (let Qr = 0; Qr < rr.length; Qr++) {
        let Zr = rr[Qr],
          Wr = Sr[Qr];
        if (Zr.from != Wr.from || Zr.to != Wr.to || Zr.direction != Wr.direction || !eS(Zr.inner, Wr.inner)) return !1
      }
      return !0
    }
    const KS = [];

    function yS(rr, Sr, Qr, Zr, Wr, ar, jr) {
      let Ir = Zr % 2 ? 2 : 1;
      if (Zr % 2 == Wr % 2)
        for (let fr = Sr, Er = 0; fr < Qr;) {
          let Sr = !0,
            pr = !1;
          if (Er == ar.length || fr < ar[Er].from) {
            let rr = KS[fr];
            rr != Ir && (Sr = !1, pr = 16 == rr)
          }
          let xr = Sr || 1 != Ir ? null : [],
            mr = Sr ? Zr : Zr + 1,
            Nr = fr;
          rr: for (;;)
            if (Er < ar.length && Nr == ar[Er].from) {
              if (pr) break rr;
              let Ur = ar[Er];
              if (!Sr)
                for (let rr = Ur.to, Sr = Er + 1;;) {
                  if (rr == Qr) break rr;
                  if (!(Sr < ar.length && ar[Sr].from == rr)) {
                    if (KS[rr] == Ir) break rr;
                    break
                  }
                  rr = ar[Sr++].to
                }
              if (Er++, xr) xr.push(Ur);
              else {
                Ur.from > fr && jr.push(new nS(fr, Ur.from, mr)), BS(rr, Ur.direction == pS != !(mr % 2) ? Zr + 1 : Zr, Wr, Ur.inner, Ur.from, Ur.to, jr), fr = Ur.to
              }
              Nr = Ur.to
            } else {
              if (Nr == Qr || (Sr ? KS[Nr] != Ir : KS[Nr] == Ir)) break;
              Nr++
            } xr ? yS(rr, fr, Nr, Zr + 1, Wr, xr, jr) : fr < Nr && jr.push(new nS(fr, Nr, mr)), fr = Nr
        } else
          for (let fr = Qr, Er = ar.length; fr > Sr;) {
            let Qr = !0,
              pr = !1;
            if (!Er || fr > ar[Er - 1].to) {
              let rr = KS[fr - 1];
              rr != Ir && (Qr = !1, pr = 16 == rr)
            }
            let xr = Qr || 1 != Ir ? null : [],
              mr = Qr ? Zr : Zr + 1,
              Nr = fr;
            rr: for (;;)
              if (Er && Nr == ar[Er - 1].to) {
                if (pr) break rr;
                let Ur = ar[--Er];
                if (!Qr)
                  for (let rr = Ur.from, Qr = Er;;) {
                    if (rr == Sr) break rr;
                    if (!Qr || ar[Qr - 1].to != rr) {
                      if (KS[rr - 1] == Ir) break rr;
                      break
                    }
                    rr = ar[--Qr].from
                  }
                if (xr) xr.push(Ur);
                else {
                  Ur.to < fr && jr.push(new nS(Ur.to, fr, mr)), BS(rr, Ur.direction == pS != !(mr % 2) ? Zr + 1 : Zr, Wr, Ur.inner, Ur.from, Ur.to, jr), fr = Ur.from
                }
                Nr = Ur.from
              } else {
                if (Nr == Sr || (Qr ? KS[Nr - 1] != Ir : KS[Nr - 1] == Ir)) break;
                Nr--
              } xr ? yS(rr, Nr, fr, Zr + 1, Wr, xr, jr) : Nr < fr && jr.push(new nS(Nr, fr, mr)), fr = Nr
          }
    }

    function BS(rr, Sr, Qr, Zr, Wr, ar, jr) {
      let Ir = Sr % 2 ? 2 : 1;
      ! function(rr, Sr, Qr, Zr, Wr) {
        for (let ar = 0; ar <= Zr.length; ar++) {
          let jr = ar ? Zr[ar - 1].to : Sr,
            Ir = ar < Zr.length ? Zr[ar].from : Qr,
            fr = ar ? 256 : Wr;
          for (let Sr = jr, Qr = fr, Zr = fr; Sr < Ir; Sr++) {
            let Wr = zS(rr.charCodeAt(Sr));
            512 == Wr ? Wr = Qr : 8 == Wr && 4 == Zr && (Wr = 16), KS[Sr] = 4 == Wr ? 2 : Wr, 7 & Wr && (Zr = Wr), Qr = Wr
          }
          for (let rr = jr, Sr = fr, Zr = fr; rr < Ir; rr++) {
            let Wr = KS[rr];
            if (128 == Wr) rr < Ir - 1 && Sr == KS[rr + 1] && 24 & Sr ? Wr = KS[rr] = Sr : KS[rr] = 256;
            else if (64 == Wr) {
              let Wr = rr + 1;
              for (; Wr < Ir && 64 == KS[Wr];) Wr++;
              let ar = rr && 8 == Sr || Wr < Qr && 8 == KS[Wr] ? 1 == Zr ? 1 : 8 : 256;
              for (let Sr = rr; Sr < Wr; Sr++) KS[Sr] = ar;
              rr = Wr - 1
            } else 8 == Wr && 1 == Zr && (KS[rr] = 1);
            Sr = Wr, 7 & Wr && (Zr = Wr)
          }
        }
      }(rr, Wr, ar, Zr, Ir),
      function(rr, Sr, Qr, Zr, Wr) {
        let ar = 1 == Wr ? 2 : 1;
        for (let jr = 0, Ir = 0, fr = 0; jr <= Zr.length; jr++) {
          let Er = jr ? Zr[jr - 1].to : Sr,
            pr = jr < Zr.length ? Zr[jr].from : Qr;
          for (let Sr, Qr, Zr, jr = Er; jr < pr; jr++)
            if (Qr = tS[Sr = rr.charCodeAt(jr)])
              if (Qr < 0) {
                for (let rr = Ir - 3; rr >= 0; rr -= 3)
                  if (hS[rr + 1] == -Qr) {
                    let Sr = hS[rr + 2],
                      Qr = 2 & Sr ? Wr : 4 & Sr ? 1 & Sr ? ar : Wr : 0;
                    Qr && (KS[jr] = KS[hS[rr]] = Qr), Ir = rr;
                    break
                  }
              } else {
                if (189 == hS.length) break;
                hS[Ir++] = jr, hS[Ir++] = Sr, hS[Ir++] = fr
              }
          else if (2 == (Zr = KS[jr]) || 1 == Zr) {
            let rr = Zr == Wr;
            fr = rr ? 0 : 1;
            for (let Sr = Ir - 3; Sr >= 0; Sr -= 3) {
              let Qr = hS[Sr + 2];
              if (2 & Qr) break;
              if (rr) hS[Sr + 2] |= 2;
              else {
                if (4 & Qr) break;
                hS[Sr + 2] |= 4
              }
            }
          }
        }
      }(rr, Wr, ar, Zr, Ir),
      function(rr, Sr, Qr, Zr) {
        for (let Wr = 0, ar = Zr; Wr <= Qr.length; Wr++) {
          let jr = Wr ? Qr[Wr - 1].to : rr,
            Ir = Wr < Qr.length ? Qr[Wr].from : Sr;
          for (let fr = jr; fr < Ir;) {
            let jr = KS[fr];
            if (256 == jr) {
              let jr = fr + 1;
              for (;;)
                if (jr == Ir) {
                  if (Wr == Qr.length) break;
                  jr = Qr[Wr++].to, Ir = Wr < Qr.length ? Qr[Wr].from : Sr
                } else {
                  if (256 != KS[jr]) break;
                  jr++
                } let Er = 1 == ar,
                pr = Er == (1 == (jr < Sr ? KS[jr] : Zr)) ? Er ? 1 : 2 : Zr;
              for (let Sr = jr, Zr = Wr, ar = Zr ? Qr[Zr - 1].to : rr; Sr > fr;) Sr == ar && (Sr = Qr[--Zr].from, ar = Zr ? Qr[Zr - 1].to : rr), KS[--Sr] = pr;
              fr = jr
            } else ar = jr, fr++
          }
        }
      }(Wr, ar, Zr, Ir), yS(rr, Wr, ar, Sr, Qr, Zr, jr)
    }

    function TS(rr, Sr, Qr) {
      if (!rr) return [new nS(0, 0, Sr == xS ? 1 : 0)];
      if (Sr == pS && !Qr.length && !YS.test(rr)) return vS(rr.length);
      if (Qr.length)
        for (; rr.length > KS.length;) KS[KS.length] = 256;
      let Zr = [],
        Wr = Sr == pS ? 0 : 1;
      return BS(rr, Wr, Wr, Qr, 0, rr.length, Zr), Zr
    }

    function vS(rr) {
      return [new nS(0, rr, 0)]
    }
    let OS = "";

    function LS(rr, Sr, Qr, Wr, ar) {
      var jr;
      let Ir = Wr.head - rr.from,
        fr = nS.find(Sr, Ir, null !== (jr = Wr.bidiLevel) && void 0 !== jr ? jr : -1, Wr.assoc),
        Er = Sr[fr],
        pr = Er.side(ar, Qr);
      if (Ir == pr) {
        let rr = fr += ar ? 1 : -1;
        if (rr < 0 || rr >= Sr.length) return null;
        Er = Sr[fr = rr], Ir = Er.side(!ar, Qr), pr = Er.side(ar, Qr)
      }
      let xr = (0, Zr.ib)(rr.text, Ir, Er.forward(ar, Qr));
      (xr < Er.from || xr > Er.to) && (xr = pr), OS = rr.text.slice(Math.min(Ir, xr), Math.max(Ir, xr));
      let mr = fr == (ar ? Sr.length - 1 : 0) ? null : Sr[fr + (ar ? 1 : -1)];
      return mr && xr == pr && mr.level + (ar ? 0 : 1) < Er.level ? Zr.m.cursor(mr.side(!ar, Qr) + rr.from, mr.forward(ar, Qr) ? 1 : -1, mr.level) : Zr.m.cursor(xr + rr.from, Er.forward(ar, Qr) ? -1 : 1, Er.level)
    }

    function lS(rr, Sr, Qr) {
      for (let Zr = Sr; Zr < Qr; Zr++) {
        let Sr = zS(rr.charCodeAt(Zr));
        if (1 == Sr) return pS;
        if (2 == Sr || 4 == Sr) return xS
      }
      return pS
    }
    const XS = Zr.u.define(),
      PS = Zr.u.define(),
      HS = Zr.u.define(),
      qS = Zr.u.define(),
      RS = Zr.u.define(),
      gS = Zr.u.define(),
      CS = Zr.u.define(),
      MS = Zr.u.define(),
      GS = Zr.u.define(),
      kS = Zr.u.define({
        combine: rr => rr.some((rr => rr))
      }),
      AS = Zr.u.define({
        combine: rr => rr.some((rr => rr))
      }),
      VS = Zr.u.define();
    class iS {
      constructor(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = rr, this.y = Sr, this.x = Qr, this.yMargin = Zr, this.xMargin = Wr, this.isSnapshot = ar
      }
      map(rr) {
        return rr.empty ? this : new iS(this.range.map(rr), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(rr) {
        return this.range.to <= rr.doc.length ? this : new iS(Zr.m.cursor(rr.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const wS = Zr.P.define({
        map: (rr, Sr) => rr.map(Sr)
      }),
      cS = Zr.P.define();

    function FS(rr, Sr, Qr) {
      let Zr = rr.facet(qS);
      Zr.length ? Zr[0](Sr) : window.onerror && window.onerror(String(Sr), Qr, void 0, void 0, Sr) || (Qr ? console.error(Qr + ":", Sr) : console.error(Sr))
    }
    const oS = Zr.u.define({
      combine: rr => !rr.length || rr[0]
    });
    let bS = 0;
    const JS = Zr.u.define({
      combine: rr => rr.filter(((Sr, Qr) => {
        for (let Zr = 0; Zr < Qr; Zr++)
          if (rr[Zr].plugin == Sr.plugin) return !1;
        return !0
      }))
    });
    class DS {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.id = rr, this.create = Sr, this.domEventHandlers = Qr, this.domEventObservers = Zr, this.baseExtensions = Wr(this), this.extension = this.baseExtensions.concat(JS.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(rr) {
        return this.baseExtensions.concat(JS.of({
          plugin: this,
          arg: rr
        }))
      }
      static define(rr, Sr) {
        const {
          eventHandlers: Qr,
          eventObservers: Zr,
          provide: Wr,
          OZ: ar
        } = Sr || {};
        return new DS(bS++, rr, Qr, Zr, (rr => {
          let Sr = [];
          return ar && Sr.push(rQ.of((Sr => {
            let Qr = Sr.plugin(rr);
            return Qr ? ar(Qr) : Hr.none
          }))), Wr && Sr.push(Wr(rr)), Sr
        }))
      }
      static fromClass(rr, Sr) {
        return DS.define(((Sr, Qr) => new rr(Sr, Qr)), Sr)
      }
    }
    class dS {
      constructor(rr) {
        this.spec = rr, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(rr) {
        if (this.value) {
          if (this.mustUpdate) {
            let rr = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(rr)
            } catch (Sr) {
              if (FS(rr.state, Sr, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (Qr) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(rr, this.spec.arg)
        } catch (Sr) {
          FS(rr.state, Sr, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(rr) {
        var Sr;
        if (null === (Sr = this.value) || void 0 === Sr ? void 0 : Sr.destroy) try {
          this.value.destroy()
        } catch (Qr) {
          FS(rr.state, Qr, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const sS = Zr.u.define(),
      uS = Zr.u.define(),
      rQ = Zr.u.define(),
      SQ = Zr.u.define(),
      QQ = Zr.u.define(),
      ZQ = Zr.u.define(),
      WQ = Zr.u.define();

    function aQ(rr, Sr) {
      let Qr = rr.state.facet(WQ);
      if (!Qr.length) return Qr;
      let Wr = Qr.map((Sr => Sr instanceof Function ? Sr(rr) : Sr)),
        ar = [];
      return Zr.H.spans(Wr, Sr.from, Sr.to, {
        point() {},
        span(rr, Qr, Zr, Wr) {
          let jr = rr - Sr.from,
            Ir = Qr - Sr.from,
            fr = ar;
          for (let ar = Zr.length - 1; ar >= 0; ar--, Wr--) {
            let rr, Qr = Zr[ar].spec.bidiIsolate;
            if (null == Qr && (Qr = lS(Sr.text, jr, Ir)), Wr > 0 && fr.length && (rr = fr[fr.length - 1]).to == jr && rr.direction == Qr) rr.to = Ir, fr = rr.inner;
            else {
              let rr = {
                from: jr,
                to: Ir,
                direction: Qr,
                inner: []
              };
              fr.push(rr), fr = rr.inner
            }
          }
        }
      }), ar
    }
    const jQ = Zr.u.define();

    function IQ(rr) {
      let Sr = 0,
        Qr = 0,
        Zr = 0,
        Wr = 0;
      for (let ar of rr.state.facet(jQ)) {
        let jr = ar(rr);
        jr && (null != jr.left && (Sr = Math.max(Sr, jr.left)), null != jr.right && (Qr = Math.max(Qr, jr.right)), null != jr.top && (Zr = Math.max(Zr, jr.top)), null != jr.bottom && (Wr = Math.max(Wr, jr.bottom)))
      }
      return {
        left: Sr,
        right: Qr,
        top: Zr,
        bottom: Wr
      }
    }
    const fQ = Zr.u.define();
    class EQ {
      constructor(rr, Sr, Qr, Zr) {
        this.fromA = rr, this.toA = Sr, this.fromB = Qr, this.toB = Zr
      }
      join(rr) {
        return new EQ(Math.min(this.fromA, rr.fromA), Math.max(this.toA, rr.toA), Math.min(this.fromB, rr.fromB), Math.max(this.toB, rr.toB))
      }
      addToSet(rr) {
        let Sr = rr.length,
          Qr = this;
        for (; Sr > 0; Sr--) {
          let Zr = rr[Sr - 1];
          if (!(Zr.fromA > Qr.toA)) {
            if (Zr.toA < Qr.fromA) break;
            Qr = Qr.join(Zr), rr.splice(Sr - 1, 1)
          }
        }
        return rr.splice(Sr, 0, Qr), rr
      }
      static extendWithRanges(rr, Sr) {
        if (0 == Sr.length) return rr;
        let Qr = [];
        for (let Zr = 0, Wr = 0, ar = 0;;) {
          let jr = Zr < rr.length ? rr[Zr].fromB : 1e9,
            Ir = Wr < Sr.length ? Sr[Wr] : 1e9,
            fr = Math.min(jr, Ir);
          if (1e9 == fr) break;
          let Er = fr + ar,
            pr = fr,
            xr = Er;
          for (;;)
            if (Wr < Sr.length && Sr[Wr] <= pr) {
              let Qr = Sr[Wr + 1];
              Wr += 2, pr = Math.max(pr, Qr);
              for (let Sr = Zr; Sr < rr.length && rr[Sr].fromB <= pr; Sr++) ar = rr[Sr].toA - rr[Sr].toB;
              xr = Math.max(xr, Qr + ar)
            } else {
              if (!(Zr < rr.length && rr[Zr].fromB <= pr)) break;
              {
                let Sr = rr[Zr++];
                pr = Math.max(pr, Sr.toB), xr = Math.max(xr, Sr.toA), ar = Sr.toA - Sr.toB
              }
            } Qr.push(new EQ(Er, xr, fr, pr))
        }
        return Qr
      }
    }
    class pQ {
      constructor(rr, Sr, Qr) {
        this.view = rr, this.state = Sr, this.transactions = Qr, this.flags = 0, this.startState = rr.state, this.changes = Zr.ChangeSet.empty(this.startState.doc.length);
        for (let Zr of Qr) this.changes = this.changes.compose(Zr.changes);
        let Wr = [];
        this.changes.iterChangedRanges(((rr, Sr, Qr, Zr) => Wr.push(new EQ(rr, Sr, Qr, Zr)))), this.changedRanges = Wr
      }
      static create(rr, Sr, Qr) {
        return new pQ(rr, Sr, Qr)
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
        return this.transactions.some((rr => rr.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const xQ = [];
    class mQ {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = rr, this.length = Sr, this.flags = Qr, this.parent = null, rr.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return xQ
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
      sync(rr) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let rr = this.domAttrs;
          rr && function(rr, Sr) {
            for (let Qr = rr.attributes.length - 1; Qr >= 0; Qr--) {
              let Zr = rr.attributes[Qr].name;
              null == Sr[Zr] && rr.removeAttribute(Zr)
            }
            for (let Qr in Sr) {
              let Zr = Sr[Qr];
              "style" == Qr ? rr.style.cssText = Zr : rr.getAttribute(Qr) != Zr && rr.setAttribute(Qr, Zr)
            }
          }(this.dom, rr)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(rr) {
        this.dom = rr, rr.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let Qr of this.children) {
          if (Qr == rr) return Sr;
          Sr += Qr.length + Qr.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(rr) {
        return this.posBefore(rr) + rr.length
      }
      covers(rr) {
        return !0
      }
      coordsIn(rr, Sr) {
        return null
      }
      domPosFor(rr, Sr) {
        let Qr = cr(this.dom),
          Zr = this.length ? rr > 0 : Sr > 0;
        return new fS(this.parent.dom, Qr + (Zr ? 1 : 0), 0 == rr || rr == this.length)
      }
      markDirty(rr) {
        this.flags &= -3, rr && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let rr = this; rr; rr = rr.parent)
          if (rr instanceof tQ) return rr;
        return null
      }
      static get(rr) {
        return rr.cmTile
      }
    }
    class NQ extends mQ {
      constructor(rr) {
        super(rr, 0), this._children = []
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
      append(rr) {
        this.children.push(rr), rr.parent = this
      }
      sync(rr) {
        if (2 & this.flags) return;
        super.sync(rr);
        let Sr, Qr = this.dom,
          Zr = null,
          Wr = (null === rr || void 0 === rr ? void 0 : rr.node) == Qr ? rr : null,
          ar = 0;
        for (let jr of this.children) {
          if (jr.sync(rr), ar += jr.length + jr.breakAfter, Sr = Zr ? Zr.nextSibling : Qr.firstChild, Wr && Sr != jr.dom && (Wr.written = !0), jr.dom.parentNode == Qr)
            for (; Sr && Sr != jr.dom;) Sr = UQ(Sr);
          else Qr.insertBefore(jr.dom, Sr);
          Zr = jr.dom
        }
        for (Sr = Zr ? Zr.nextSibling : Qr.firstChild, Wr && Sr && (Wr.written = !0); Sr;) Sr = UQ(Sr);
        this.length = ar
      }
    }

    function UQ(rr) {
      let Sr = rr.nextSibling;
      return rr.parentNode.removeChild(rr), Sr
    }
    class tQ extends NQ {
      constructor(rr, Sr) {
        super(Sr), this.view = rr
      }
      owns(rr) {
        for (; rr; rr = rr.parent)
          if (rr == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(rr) {
        for (;;) {
          if (!rr) return null;
          let Sr = mQ.get(rr);
          if (Sr && this.owns(Sr)) return Sr;
          rr = rr.parentNode
        }
      }
      blockTiles(rr) {
        for (let Sr = [], Qr = this, Zr = 0, Wr = 0;;)
          if (Zr == Qr.children.length) {
            if (!Sr.length) return;
            Qr = Qr.parent, Qr.breakAfter && Wr++, Zr = Sr.pop()
          } else {
            let ar = Qr.children[Zr++];
            if (ar instanceof hQ) Sr.push(Zr), Qr = ar, Zr = 0;
            else {
              let Sr = Wr + ar.length,
                Qr = rr(ar, Wr);
              if (void 0 !== Qr) return Qr;
              Wr = Sr + ar.breakAfter
            }
          }
      }
      resolveBlock(rr, Sr) {
        let Qr, Zr, Wr = -1,
          ar = -1;
        if (this.blockTiles(((jr, Ir) => {
            let fr = Ir + jr.length;
            if (rr >= Ir && rr <= fr) {
              if (jr.isWidget() && Sr >= -1 && Sr <= 1) {
                if (32 & jr.flags) return !0;
                16 & jr.flags && (Qr = void 0)
              }(Ir < rr || rr == fr && (Sr < -1 ? jr.length : jr.covers(1))) && (!Qr || !jr.isWidget() && Qr.isWidget()) && (Qr = jr, Wr = rr - Ir), (fr > rr || rr == Ir && (Sr > 1 ? jr.length : jr.covers(-1))) && (!Zr || !jr.isWidget() && Zr.isWidget()) && (Zr = jr, ar = rr - Ir)
            }
          })), !Qr && !Zr) throw new Error("No tile at position " + rr);
        return Qr && Sr < 0 || !Zr ? {
          tile: Qr,
          offset: Wr
        } : {
          tile: Zr,
          offset: ar
        }
      }
    }
    class hQ extends NQ {
      constructor(rr, Sr) {
        super(rr), this.wrapper = Sr
      }
      isBlock() {
        return !0
      }
      covers(rr) {
        return !!this.children.length && (rr < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (rr, Sr) {
        let Qr = new hQ(Sr || document.createElement(rr.tagName), rr);
        return Sr || (Qr.flags |= 4), Qr
      }
    }
    class zQ extends NQ {
      constructor(rr, Sr) {
        super(rr), this.attrs = Sr
      }
      isLine() {
        return !0
      }
      static start(rr, Sr, Qr) {
        let Zr = new zQ(Sr || document.createElement("div"), rr);
        return Sr && Qr || (Zr.flags |= 4), Zr
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(rr, Sr, Qr) {
        let Zr = null,
          Wr = -1,
          ar = null,
          jr = -1;
        ! function rr(Ir, fr) {
          for (let Er = 0, pr = 0; Er < Ir.children.length && pr <= fr; Er++) {
            let xr = Ir.children[Er],
              mr = pr + xr.length;
            mr >= fr && (xr.isComposite() ? rr(xr, fr - pr) : (!ar || ar.isHidden && (Sr > 0 || Qr && YQ(ar, xr))) && (mr > fr || 32 & xr.flags) ? (ar = xr, jr = fr - pr) : (pr < fr || 16 & xr.flags && !xr.isHidden) && (Zr = xr, Wr = fr - pr)), pr = mr
          }
        }(this, rr);
        let Ir = (Sr < 0 ? Zr : ar) || Zr || ar;
        return Ir ? {
          tile: Ir,
          offset: Ir == Zr ? Wr : jr
        } : null
      }
      coordsIn(rr, Sr) {
        let Qr = this.resolveInline(rr, Sr, !0);
        return Qr ? Qr.tile.coordsIn(Math.max(0, Qr.offset), Sr) : function(rr) {
          let Sr = rr.dom.lastChild;
          if (!Sr) return rr.dom.getBoundingClientRect();
          let Qr = ir(Sr);
          return Qr[Qr.length - 1] || null
        }(this)
      }
      domIn(rr, Sr) {
        let Qr = this.resolveInline(rr, Sr);
        if (Qr) {
          let {
            tile: rr,
            offset: Zr
          } = Qr;
          if (this.dom.contains(rr.dom)) return rr.isText() ? new fS(rr.dom, Math.min(rr.dom.nodeValue.length, Zr)) : rr.domPosFor(Zr, 16 & rr.flags ? 1 : 32 & rr.flags ? -1 : Sr);
          let Wr = Qr.tile.parent,
            ar = !1;
          for (let Sr of Wr.children) {
            if (ar) return new fS(Sr.dom, 0);
            Sr == Qr.tile && (ar = !0)
          }
        }
        return new fS(this.dom, 0)
      }
    }

    function YQ(rr, Sr) {
      let Qr = rr.coordsIn(0, 1),
        Zr = Sr.coordsIn(0, 1);
      return Qr && Zr && Zr.top < Qr.bottom
    }
    class nQ extends NQ {
      constructor(rr, Sr) {
        super(rr), this.mark = Sr
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (rr, Sr) {
        let Qr = new nQ(Sr || document.createElement(rr.tagName), rr);
        return Sr || (Qr.flags |= 4), Qr
      }
    }
    class eQ extends mQ {
      constructor(rr, Sr) {
        super(rr, Sr.length), this.text = Sr
      }
      sync(rr) {
        2 & this.flags || (super.sync(rr), this.dom.nodeValue != this.text && (rr && rr.node == this.dom && (rr.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(rr, Sr) {
        let Qr = this.dom.nodeValue.length;
        rr > Qr && (rr = Qr);
        let Zr = rr,
          Wr = rr,
          ar = 0;
        0 == rr && Sr < 0 || rr == Qr && Sr >= 0 ? Br.chrome || Br.gecko || (rr ? (Zr--, ar = 1) : Wr < Qr && (Wr++, ar = -1)) : Sr < 0 ? Zr-- : Wr < Qr && Wr++;
        let jr = ZS(this.dom, Zr, Wr).getClientRects();
        if (!jr.length) return null;
        let Ir = jr[(ar ? ar < 0 : Sr >= 0) ? 0 : jr.length - 1];
        return Br.safari && !ar && 0 == Ir.width && (Ir = Array.prototype.find.call(jr, (rr => rr.width)) || Ir), ar ? Jr(Ir, ar < 0) : Ir || null
      }
      static of (rr, Sr) {
        let Qr = new eQ(Sr || document.createTextNode(rr), rr);
        return Sr || (Qr.flags |= 2), Qr
      }
    }
    class KQ extends mQ {
      constructor(rr, Sr, Qr, Zr) {
        super(rr, Sr, Zr), this.widget = Qr
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(rr) {
        return !(48 & this.flags) && (this.flags & (rr < 0 ? 64 : 128)) > 0
      }
      coordsIn(rr, Sr) {
        return this.coordsInWidget(rr, Sr, !1)
      }
      coordsInWidget(rr, Sr, Qr) {
        let Zr = this.widget.coordsAt(this.dom, rr, Sr);
        if (Zr) return Zr;
        if (Qr) return Jr(this.dom.getBoundingClientRect(), this.length ? 0 == rr : Sr <= 0);
        {
          let Sr = this.dom.getClientRects(),
            Qr = null;
          if (!Sr.length) return null;
          let Zr = !!(16 & this.flags) || !(32 & this.flags) && rr > 0;
          for (let Wr = Zr ? Sr.length - 1 : 0; Qr = Sr[Wr], !(rr > 0 ? 0 == Wr : Wr == Sr.length - 1 || Qr.top < Qr.bottom); Wr += Zr ? -1 : 1);
          return Jr(Qr, !Zr)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Zr.V.empty;
        let {
          root: rr
        } = this;
        if (!rr) return Zr.V.empty;
        let Sr = this.posAtStart;
        return rr.view.state.doc.slice(Sr, Sr + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (rr, Sr, Qr, Zr, Wr) {
        return Wr || (Wr = rr.toDOM(Sr), rr.editable || (Wr.contentEditable = "false")), new KQ(Wr, Qr, rr, Zr)
      }
    }
    class yQ extends mQ {
      constructor(rr) {
        let Sr = document.createElement("img");
        Sr.className = "cm-widgetBuffer", Sr.setAttribute("aria-hidden", "true"), super(Sr, 0, rr)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Zr.V.empty
      }
      coordsIn(rr) {
        return this.dom.getBoundingClientRect()
      }
    }
    class BQ {
      constructor(rr) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = rr
      }
      advance(rr, Sr, Qr) {
        let {
          tile: Zr,
          index: Wr,
          beforeBreak: ar,
          parents: jr
        } = this;
        for (; rr || Sr > 0;)
          if (Zr.isComposite())
            if (ar) {
              if (!rr) break;
              Qr && Qr.break(), rr--, ar = !1
            } else if (Wr == Zr.children.length) {
          if (!rr && !jr.length) break;
          Qr && Qr.leave(Zr), ar = !!Zr.breakAfter, ({
            tile: Zr,
            index: Wr
          } = jr.pop()), Wr++
        } else {
          let Ir = Zr.children[Wr],
            fr = Ir.breakAfter;
          !(Sr > 0 ? Ir.length <= rr : Ir.length < rr) || Qr && !1 === Qr.skip(Ir, 0, Ir.length) && Ir.isComposite ? (jr.push({
            tile: Zr,
            index: Wr
          }), Zr = Ir, Wr = 0, Qr && Ir.isComposite() && Qr.enter(Ir)) : (ar = !!fr, Wr++, rr -= Ir.length)
        } else if (Wr == Zr.length) ar = !!Zr.breakAfter, ({
          tile: Zr,
          index: Wr
        } = jr.pop()), Wr++;
        else {
          if (!rr) break;
          {
            let Sr = Math.min(rr, Zr.length - Wr);
            Qr && Qr.skip(Zr, Wr, Wr + Sr), rr -= Sr, Wr += Sr
          }
        }
        return this.tile = Zr, this.index = Wr, this.beforeBreak = ar, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class TQ {
      constructor(rr, Sr, Qr, Zr) {
        this.from = rr, this.to = Sr, this.wrapper = Qr, this.rank = Zr
      }
    }
    class vQ {
      constructor(rr, Sr, Qr) {
        this.cache = rr, this.root = Sr, this.blockWrappers = Qr, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(rr, Sr, Qr, Zr) {
        var Wr;
        this.flushBuffer();
        let ar = this.ensureMarks(Sr, Qr),
          jr = ar.lastChild;
        if (jr && jr.isText() && !(8 & jr.flags) && jr.length + rr.length < 512) {
          this.cache.reused.set(jr, 2), (ar.children[ar.children.length - 1] = new eQ(jr.dom, jr.text + rr)).parent = ar
        } else ar.append(Zr || eQ.of(rr, null === (Wr = this.cache.find(eQ)) || void 0 === Wr ? void 0 : Wr.dom));
        this.pos += rr.length, this.afterWidget = null
      }
      addComposition(rr, Sr) {
        let Qr = this.curLine;
        Qr.dom != Sr.line.dom && (Qr.setDOM(this.cache.reused.has(Sr.line) ? qQ(Sr.line.dom) : Sr.line.dom), this.cache.reused.set(Sr.line, 2));
        let Zr = Qr;
        for (let jr = Sr.marks.length - 1; jr >= 0; jr--) {
          let rr = Sr.marks[jr],
            Qr = Zr.lastChild;
          if (Qr instanceof nQ && Qr.mark.eq(rr.mark)) Qr.dom != rr.dom && Qr.setDOM(qQ(rr.dom)), Zr = Qr;
          else {
            if (this.cache.reused.get(rr)) {
              let Sr = mQ.get(rr.dom);
              Sr && Sr.setDOM(qQ(rr.dom))
            }
            let Sr = nQ.of(rr.mark, rr.dom);
            Zr.append(Sr), Zr = Sr
          }
          this.cache.reused.set(rr, 2)
        }
        let Wr = mQ.get(rr.text);
        Wr && this.cache.reused.set(Wr, 2);
        let ar = new eQ(rr.text, rr.text.nodeValue);
        ar.flags |= 8, Zr.append(ar)
      }
      addInlineWidget(rr, Sr, Qr) {
        let Zr = this.afterWidget && 48 & rr.flags && (48 & this.afterWidget.flags) == (48 & rr.flags);
        Zr || this.flushBuffer();
        let Wr = this.ensureMarks(Sr, Qr);
        Zr || 16 & rr.flags || Wr.append(this.getBuffer(1)), Wr.append(rr), this.pos += rr.length, this.afterWidget = rr
      }
      addMark(rr, Sr, Qr) {
        this.flushBuffer(), this.ensureMarks(Sr, Qr).append(rr), this.pos += rr.length, this.afterWidget = null
      }
      addBlockWidget(rr) {
        this.getBlockPos().append(rr), this.pos += rr.length, this.lastBlock = rr, this.endLine()
      }
      continueWidget(rr) {
        (this.afterWidget || this.lastBlock).length += rr, this.pos += rr
      }
      addLineStart(rr, Sr) {
        var Qr;
        rr || (rr = HQ);
        let Zr = zQ.start(rr, Sr || (null === (Qr = this.cache.find(zQ)) || void 0 === Qr ? void 0 : Qr.dom), !!Sr);
        this.getBlockPos().append(this.lastBlock = this.curLine = Zr)
      }
      addLine(rr) {
        this.getBlockPos().append(rr), this.pos += rr.length, this.lastBlock = rr, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(rr) {
        this.blockPosCovered() || this.addLineStart(rr)
      }
      ensureLine(rr) {
        this.curLine || this.addLineStart(rr)
      }
      ensureMarks(rr, Sr) {
        var Qr;
        let Zr = this.curLine;
        for (let Wr = rr.length - 1; Wr >= 0; Wr--) {
          let ar, jr = rr[Wr];
          if (Sr > 0 && (ar = Zr.lastChild) && ar instanceof nQ && ar.mark.eq(jr)) Zr = ar, Sr--;
          else {
            let rr = nQ.of(jr, null === (Qr = this.cache.find(nQ, (rr => rr.mark.eq(jr)))) || void 0 === Qr ? void 0 : Qr.dom);
            Zr.append(rr), Zr = rr, Sr = 0
          }
        }
        return Zr
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let rr = this.curLine.lastChild;
          rr && PQ(this.curLine, !1) && ("BR" == rr.dom.nodeName || !rr.isWidget() || Br.ios && PQ(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(gQ, 0, 32) || new KQ(gQ.toDOM(), 0, gQ, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let rr = this.wrappers.length - 1; rr >= 0; rr--) this.wrappers[rr].to < this.pos && this.wrappers.splice(rr, 1);
        for (let rr = this.blockWrappers; rr.value && rr.from <= this.pos; rr.next())
          if (rr.to >= this.pos) {
            let Sr = new TQ(rr.from, rr.to, rr.value, rr.rank),
              Qr = this.wrappers.length;
            for (; Qr > 0 && (this.wrappers[Qr - 1].rank - Sr.rank || this.wrappers[Qr - 1].to - Sr.to) < 0;) Qr--;
            this.wrappers.splice(Qr, 0, Sr)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var rr;
        this.updateBlockWrappers();
        let Sr = this.root;
        for (let Qr of this.wrappers) {
          let Zr = Sr.lastChild;
          if (Qr.from < this.pos && Zr instanceof hQ && Zr.wrapper.eq(Qr.wrapper)) Sr = Zr;
          else {
            let Zr = hQ.of(Qr.wrapper, null === (rr = this.cache.find(hQ, (rr => rr.wrapper.eq(Qr.wrapper)))) || void 0 === rr ? void 0 : rr.dom);
            Sr.append(Zr), Sr = Zr
          }
        }
        return Sr
      }
      blockPosCovered() {
        let rr = this.lastBlock;
        return null != rr && !rr.breakAfter && (!rr.isWidget() || (160 & rr.flags) > 0)
      }
      getBuffer(rr) {
        let Sr = 2 | (rr < 0 ? 16 : 32),
          Qr = this.cache.find(yQ, void 0, 1);
        return Qr && (Qr.flags = Sr), Qr || new yQ(Sr)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class OQ {
      constructor(rr) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = rr.iter()
      }
      skip(rr) {
        this.textOff + rr <= this.text.length ? this.textOff += rr : (this.skipCount += rr - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(rr) {
        if (this.textOff == this.text.length) {
          let {
            value: Sr,
            lineBreak: Qr,
            done: Zr
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Zr) throw new Error("Ran out of text content when drawing inline views");
          this.text = Sr;
          let Wr = this.textOff = Math.min(rr, Sr.length);
          return Qr ? null : Sr.slice(0, Wr)
        }
        let Sr = Math.min(this.text.length, this.textOff + rr),
          Qr = this.text.slice(this.textOff, Sr);
        return this.textOff = Sr, Qr
      }
    }
    const LQ = [KQ, zQ, eQ, nQ, yQ, hQ, tQ];
    for (let Pj = 0; Pj < LQ.length; Pj++) LQ[Pj].bucket = Pj;
    class lQ {
      constructor(rr) {
        this.view = rr, this.buckets = LQ.map((() => [])), this.index = LQ.map((() => 0)), this.reused = new Map
      }
      add(rr) {
        let Sr = rr.constructor.bucket,
          Qr = this.buckets[Sr];
        Qr.length < 6 ? Qr.push(rr) : Qr[this.index[Sr] = (this.index[Sr] + 1) % 6] = rr
      }
      find(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Zr = rr.bucket,
          Wr = this.buckets[Zr],
          ar = this.index[Zr];
        for (let jr = Wr.length - 1; jr >= 0; jr--) {
          let rr = (jr + ar) % Wr.length,
            Ir = Wr[rr];
          if ((!Sr || Sr(Ir)) && !this.reused.has(Ir)) return Wr.splice(rr, 1), rr < ar && this.index[Zr]--, this.reused.set(Ir, Qr), Ir
        }
        return null
      }
      findWidget(rr, Sr, Qr) {
        let Zr = this.buckets[0];
        if (Zr.length)
          for (let Wr = 0, ar = 0;; Wr++) {
            if (Wr == Zr.length) {
              if (ar) return null;
              ar = 1, Wr = 0
            }
            let jr = Zr[Wr];
            if (!this.reused.has(jr) && (0 == ar ? jr.widget.compare(rr) : jr.widget.constructor == rr.constructor && rr.updateDOM(jr.dom, this.view, jr.widget))) return Zr.splice(Wr, 1), Wr < this.index[0] && this.index[0]--, jr.widget == rr && jr.length == Sr && (497 & jr.flags) == Qr ? (this.reused.set(jr, 1), jr) : (this.reused.set(jr, 2), new KQ(jr.dom, Sr, rr, -498 & jr.flags | Qr))
          }
      }
      reuse(rr) {
        return this.reused.set(rr, 1), rr
      }
      maybeReuse(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(rr)) return this.reused.set(rr, Sr), rr.dom
      }
      clear() {
        for (let rr = 0; rr < this.buckets.length; rr++) this.buckets[rr].length = this.index[rr] = 0
      }
    }
    class XQ {
      constructor(rr, Sr, Qr, Wr, ar) {
        this.view = rr, this.OZ = Wr, this.disallowBlockEffectsFor = ar, this.openWidget = !1, this.openMarks = 0, this.cache = new lQ(rr), this.text = new OQ(rr.state.doc), this.builder = new vQ(this.cache, new tQ(rr, rr.contentDOM), Zr.H.iter(Qr)), this.cache.reused.set(Sr, 2), this.old = new BQ(Sr), this.reuseWalker = {
          skip: (rr, Sr, Qr) => {
            if (this.cache.add(rr), rr.isComposite()) return !1
          },
          enter: rr => this.cache.add(rr),
          leave: () => {},
          break: () => {}
        }
      }
      run(rr, Sr) {
        let Qr = Sr && this.getCompositionContext(Sr.text);
        for (let Zr = 0, Wr = 0, ar = 0;;) {
          let jr = ar < rr.length ? rr[ar++] : null,
            Ir = jr ? jr.fromA : this.old.root.length;
          if (Ir > Zr) {
            let rr = Ir - Zr;
            this.preserve(rr, !ar, !jr), Zr = Ir, Wr += rr
          }
          if (!jr) break;
          Sr && jr.fromA <= Sr.range.fromA && jr.toA >= Sr.range.toA ? (this.forward(jr.fromA, Sr.range.fromA, Sr.range.fromA < Sr.range.toA ? 1 : -1), this.emit(Wr, Sr.range.fromB), this.cache.clear(), this.builder.addComposition(Sr, Qr), this.text.skip(Sr.range.toB - Sr.range.fromB), this.forward(Sr.range.fromA, jr.toA), this.emit(Sr.range.toB, jr.toB)) : (this.forward(jr.fromA, jr.toA), this.emit(Wr, jr.toB)), Wr = jr.toB, Zr = jr.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(rr, Sr, Qr) {
        let Zr = function(rr) {
            let Sr = [];
            for (let Qr = rr.parents.length; Qr > 1; Qr--) {
              let Zr = Qr == rr.parents.length ? rr.tile : rr.parents[Qr].tile;
              Zr instanceof nQ && Sr.push(Zr.mark)
            }
            return Sr
          }(this.old),
          Wr = this.openMarks;
        this.old.advance(rr, Qr ? 1 : -1, {
          skip: (rr, Sr, Qr) => {
            if (rr.isWidget())
              if (this.openWidget) this.builder.continueWidget(Qr - Sr);
              else {
                let ar = Qr > 0 || Sr < rr.length ? KQ.of(rr.widget, this.view, Qr - Sr, 496 & rr.flags, this.cache.maybeReuse(rr)) : this.cache.reuse(rr);
                256 & ar.flags ? (ar.flags &= -2, this.builder.addBlockWidget(ar)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(ar, Zr, Wr), Wr = Zr.length)
              }
            else if (rr.isText()) this.builder.ensureLine(null), Sr || Qr != rr.length || this.cache.reused.has(rr) ? (this.cache.add(rr), this.builder.addText(rr.text.slice(Sr, Qr), Zr, Wr)) : this.builder.addText(rr.text, Zr, Wr, this.cache.reuse(rr)), Wr = Zr.length;
            else if (rr.isLine()) rr.flags &= -2, this.cache.reused.set(rr, 1), this.builder.addLine(rr);
            else if (rr instanceof yQ) this.cache.add(rr);
            else {
              if (!(rr instanceof nQ)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(rr, Zr, Wr), this.cache.reused.set(rr, 1), Wr = Zr.length
            }
            this.openWidget = !1
          },
          enter: rr => {
            rr.isLine() ? this.builder.addLineStart(rr.attrs, this.cache.maybeReuse(rr)) : (this.cache.add(rr), rr instanceof nQ && Zr.unshift(rr.mark)), this.openWidget = !1
          },
          leave: rr => {
            rr.isLine() ? Zr.length && (Zr.length = Wr = 0) : rr instanceof nQ && (Zr.shift(), Wr = Math.min(Wr, Zr.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(rr)
      }
      emit(rr, Sr) {
        let Qr = null,
          Wr = this.builder,
          ar = 0,
          jr = Zr.H.spans(this.OZ, rr, Sr, {
            point: (rr, Sr, Zr, jr, Ir, fr) => {
              if (Zr instanceof gr) {
                if (this.disallowBlockEffectsFor[fr]) {
                  if (Zr.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (Sr > this.view.state.doc.lineAt(rr).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (ar = jr.length, Ir > jr.length) Wr.continueWidget(Sr - rr);
                else {
                  let ar = Zr.widget || (Zr.block ? RQ.block : RQ.inline),
                    fr = function(rr) {
                      let Sr = rr.isReplace ? (rr.startSide < 0 ? 64 : 0) | (rr.endSide > 0 ? 128 : 0) : rr.startSide > 0 ? 32 : 16;
                      rr.block && (Sr |= 256);
                      return Sr
                    }(Zr),
                    Er = this.cache.findWidget(ar, Sr - rr, fr) || KQ.of(ar, this.view, Sr - rr, fr);
                  Zr.block ? (Zr.startSide > 0 && Wr.addLineStartIfNotCovered(Qr), Wr.addBlockWidget(Er)) : (Wr.ensureLine(Qr), Wr.addInlineWidget(Er, jr, Ir))
                }
                Qr = null
              } else Qr = function(rr, Sr) {
                let Qr = Sr.spec.attributes,
                  Zr = Sr.spec.class;
                if (!Qr && !Zr) return rr;
                rr || (rr = {
                  class: "cm-line"
                });
                Qr && Tr(Qr, rr);
                Zr && (rr.class += " " + Zr);
                return rr
              }(Qr, Zr);
              Sr > rr && this.text.skip(Sr - rr)
            },
            span: (rr, Sr, Zr, ar) => {
              for (let jr = rr; jr < Sr;) {
                let Ir = this.text.next(Math.min(512, Sr - jr));
                null == Ir ? (Wr.addLineStartIfNotCovered(Qr), Wr.addBreak(), jr++) : (Wr.ensureLine(Qr), Wr.addText(Ir, Zr, jr == rr ? ar : Zr.length), jr += Ir.length), Qr = null
              }
            }
          });
        Wr.addLineStartIfNotCovered(Qr), this.openWidget = jr > ar, this.openMarks = jr
      }
      forward(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        Sr - rr <= 10 ? this.old.advance(Sr - rr, Qr, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(Sr - rr - 10, -1), this.old.advance(5, Qr, this.reuseWalker))
      }
      getCompositionContext(rr) {
        let Sr = [],
          Qr = null;
        for (let Zr = rr.parentNode;; Zr = Zr.parentNode) {
          let rr = mQ.get(Zr);
          if (Zr == this.view.contentDOM) break;
          rr instanceof nQ ? Sr.push(rr) : (null === rr || void 0 === rr ? void 0 : rr.isLine()) ? Qr = rr : rr instanceof hQ || ("DIV" != Zr.nodeName || Qr || Zr == this.view.contentDOM ? Qr || Sr.push(nQ.of(new qr({
            tagName: Zr.nodeName.toLowerCase(),
            attributes: lr(Zr)
          }), Zr)) : Qr = new zQ(Zr, HQ))
        }
        return {
          line: Qr,
          marks: Sr
        }
      }
    }

    function PQ(rr, Sr) {
      let Qr = rr => {
        for (let Zr of rr.children)
          if ((Sr ? Zr.isText() : Zr.length) || Qr(Zr)) return !0;
        return !1
      };
      return Qr(rr)
    }
    const HQ = {
      class: "cm-line"
    };

    function qQ(rr) {
      let Sr = mQ.get(rr);
      return Sr && Sr.setDOM(rr.cloneNode()), rr
    }
    class RQ extends Xr {
      constructor(rr) {
        super(), this.tag = rr
      }
      eq(rr) {
        return rr.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(rr) {
        return rr.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    RQ.inline = new RQ("span"), RQ.block = new RQ("div");
    const gQ = new class extends Xr {
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
    class CQ {
      constructor(rr) {
        this.view = rr, this.OZ = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Hr.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new tQ(rr, rr.contentDOM), this.updateInner([new EQ(0, 0, 0, rr.state.doc.length)], null)
      }
      update(rr) {
        var Sr;
        let Qr = rr.changedRanges;
        this.minWidth > 0 && Qr.length && (Qr.every((rr => {
          let {
            fromA: Sr,
            toA: Qr
          } = rr;
          return Qr < this.minWidthFrom || Sr > this.minWidthTo
        })) ? (this.minWidthFrom = rr.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = rr.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(rr);
        let Wr = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (Sr = this.domChanged) || void 0 === Sr ? void 0 : Sr.newSel) ? Wr = this.domChanged.newSel.head : function(rr, Sr) {
          let Qr = !1;
          Sr && rr.iterChangedRanges(((rr, Zr) => {
            rr < Sr.to && Zr > Sr.from && (Qr = !0)
          }));
          return Qr
        }(rr.changes, this.hasComposition) || rr.selectionSet || (Wr = rr.state.selection.main.head));
        let ar = Wr > -1 ? function(rr, Sr, Qr) {
          let Zr = GQ(rr, Qr);
          if (!Zr) return null;
          let {
            node: Wr,
            from: ar,
            to: jr
          } = Zr, Ir = Wr.nodeValue;
          if (/[\n\r]/.test(Ir)) return null;
          if (rr.state.doc.sliceString(Zr.from, Zr.to) != Ir) return null;
          let fr = Sr.invertedDesc;
          return {
            range: new EQ(fr.mapPos(ar), fr.mapPos(jr), ar, jr),
            text: Wr
          }
        }(this.view, rr.changes, Wr) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: Sr,
            to: Zr
          } = this.hasComposition;
          Qr = new EQ(Sr, Zr, rr.changes.mapPos(Sr, -1), rr.changes.mapPos(Zr, 1)).addToSet(Qr.slice())
        }
        this.hasComposition = ar ? {
          from: ar.range.fromB,
          to: ar.range.toB
        } : null, (Br.ie || Br.chrome) && !ar && rr && rr.state.doc.lines != rr.startState.doc.lines && (this.forceSelection = !0);
        let jr = this.OZ,
          Ir = this.blockWrappers;
        this.updateDeco();
        let fr = function(rr, Sr, Qr) {
          let Wr = new kQ;
          return Zr.H.compare(rr, Sr, Qr, Wr), Wr.changes
        }(jr, this.OZ, rr.changes);
        fr.length && (Qr = EQ.extendWithRanges(Qr, fr));
        let Er = function(rr, Sr, Qr) {
          let Wr = new AQ;
          return Zr.H.compare(rr, Sr, Qr, Wr), Wr.changes
        }(Ir, this.blockWrappers, rr.changes);
        return Er.length && (Qr = EQ.extendWithRanges(Qr, Er)), ar && !Qr.some((rr => rr.fromA <= ar.range.fromA && rr.toA >= ar.range.toA)) && (Qr = ar.range.addToSet(Qr.slice())), !(2 & this.tile.flags && 0 == Qr.length) && (this.updateInner(Qr, ar), rr.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(rr, Sr) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: Qr
        } = this.view;
        Qr.ignore((() => {
          if (Sr || rr.length) {
            let Qr = this.tile,
              Zr = new XQ(this.view, Qr, this.blockWrappers, this.OZ, this.dynamicDecorationMap);
            Sr && mQ.get(Sr.text) && Zr.cache.reused.set(mQ.get(Sr.text), 2), this.tile = Zr.run(rr, Sr), MQ(Qr, Zr.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Zr = Br.chrome || Br.ios ? {
            node: Qr.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Zr), !Zr || !Zr.written && Qr.selectionRange.focusNode == Zr.node && this.tile.dom.contains(Zr.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Zr = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let Wr of this.tile.children) Wr.isWidget() && Wr.widget instanceof VQ && Zr.push(Wr.dom);
        Qr.updateGaps(Zr)
      }
      updateEditContextFormatting(rr) {
        this.editContextFormatting = this.editContextFormatting.map(rr.changes);
        for (let Sr of rr.transactions)
          for (let rr of Sr.effects) rr.is(cS) && (this.editContextFormatting = rr.value)
      }
      updateSelection() {
        let rr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: Sr
        } = this.tile, Qr = this.view.root.activeElement, Zr = Qr == Sr, Wr = !Zr && !(this.view.state.facet(oS) || Sr.tabIndex > -1) && Vr(Sr, this.view.observer.selectionRange) && !(Qr && Sr.contains(Qr));
        if (!(Zr || rr || Wr)) return;
        let ar = this.forceSelection;
        this.forceSelection = !1;
        let jr, Ir, fr = this.view.state.selection.main;
        if (fr.empty ? Ir = jr = this.inlineDOMNearPos(fr.anchor, fr.assoc || 1) : (Ir = this.inlineDOMNearPos(fr.head, fr.head == fr.from ? 1 : -1), jr = this.inlineDOMNearPos(fr.anchor, fr.anchor == fr.from ? 1 : -1)), Br.gecko && fr.empty && !this.hasComposition && (1 == (Er = jr).node.nodeType && Er.node.firstChild && (0 == Er.offset || "false" == Er.node.childNodes[Er.offset - 1].contentEditable) && (Er.offset == Er.node.childNodes.length || "false" == Er.node.childNodes[Er.offset].contentEditable))) {
          let rr = document.createTextNode("");
          this.view.observer.ignore((() => jr.node.insertBefore(rr, jr.node.childNodes[jr.offset] || null))), jr = Ir = new fS(rr, 0), ar = !0
        }
        var Er;
        let pr = this.view.observer.selectionRange;
        !ar && pr.focusNode && (wr(jr.node, jr.offset, pr.anchorNode, pr.anchorOffset) && wr(Ir.node, Ir.offset, pr.focusNode, pr.focusOffset) || this.suppressWidgetCursorChange(pr, fr)) || (this.view.observer.ignore((() => {
          Br.android && Br.chrome && Sr.contains(pr.focusNode) && function(rr, Sr) {
            for (let Qr = rr; Qr && Qr != Sr; Qr = Qr.assignedSlot || Qr.parentNode)
              if (1 == Qr.nodeType && "false" == Qr.contentEditable) return !0;
            return !1
          }(pr.focusNode, Sr) && (Sr.blur(), Sr.focus({
            preventScroll: !0
          }));
          let rr = kr(this.view.root);
          if (rr)
            if (fr.empty) {
              if (Br.gecko) {
                let rr = (Zr = jr.node, ar = jr.offset, 1 != Zr.nodeType ? 0 : (ar && "false" == Zr.childNodes[ar - 1].contentEditable ? 1 : 0) | (ar < Zr.childNodes.length && "false" == Zr.childNodes[ar].contentEditable ? 2 : 0));
                if (rr && 3 != rr) {
                  let Sr = (1 == rr ? jS : IS)(jr.node, jr.offset);
                  Sr && (jr = new fS(Sr.node, Sr.offset))
                }
              }
              rr.collapse(jr.node, jr.offset), null != fr.bidiLevel && void 0 !== rr.caretBidiLevel && (rr.caretBidiLevel = fr.bidiLevel)
            } else if (rr.extend) {
            rr.collapse(jr.node, jr.offset);
            try {
              rr.extend(Ir.node, Ir.offset)
            } catch (Er) {}
          } else {
            let Sr = document.createRange();
            fr.anchor > fr.head && ([jr, Ir] = [Ir, jr]), Sr.setEnd(Ir.node, Ir.offset), Sr.setStart(jr.node, jr.offset), rr.removeAllRanges(), rr.addRange(Sr)
          } else;
          var Zr, ar;
          Wr && this.view.root.activeElement == Sr && (Sr.blur(), Qr && Qr.focus())
        })), this.view.observer.setSelectionRange(jr, Ir)), this.impreciseAnchor = jr.precise ? null : new fS(pr.anchorNode, pr.anchorOffset), this.impreciseHead = Ir.precise ? null : new fS(pr.focusNode, pr.focusOffset)
      }
      suppressWidgetCursorChange(rr, Sr) {
        return this.hasComposition && Sr.empty && wr(rr.focusNode, rr.focusOffset, rr.anchorNode, rr.anchorOffset) && this.posFromDOM(rr.focusNode, rr.focusOffset) == Sr.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: rr
        } = this, Sr = rr.state.selection.main, Qr = kr(rr.root), {
          anchorNode: Zr,
          anchorOffset: Wr
        } = rr.observer.selectionRange;
        if (!Qr || !Sr.empty || !Sr.assoc || !Qr.modify) return;
        let ar = this.lineAt(Sr.head, Sr.assoc);
        if (!ar) return;
        let jr = ar.posAtStart;
        if (Sr.head == jr || Sr.head == jr + ar.length) return;
        let Ir = this.coordsAt(Sr.head, -1),
          fr = this.coordsAt(Sr.head, 1);
        if (!Ir || !fr || Ir.bottom > fr.top) return;
        let Er = this.domAtPos(Sr.head + Sr.assoc, Sr.assoc);
        Qr.collapse(Er.node, Er.offset), Qr.modify("move", Sr.assoc < 0 ? "forward" : "backward", "lineboundary"), rr.observer.readSelectionRange();
        let pr = rr.observer.selectionRange;
        rr.docView.posFromDOM(pr.anchorNode, pr.anchorOffset) != Sr.from && Qr.collapse(Zr, Wr)
      }
      posFromDOM(rr, Sr) {
        let Qr = this.tile.nearest(rr);
        if (!Qr) return 2 & this.tile.dom.compareDocumentPosition(rr) ? 0 : this.view.state.doc.length;
        let Zr = Qr.posAtStart;
        if (!Qr.isComposite()) return Qr.isText() ? rr == Qr.dom ? Zr + Sr : Zr + (Sr ? Qr.length : 0) : Zr;
        {
          let Wr;
          if (rr == Qr.dom) Wr = Qr.dom.childNodes[Sr];
          else {
            let Zr = 0 == br(rr) ? 0 : 0 == Sr ? -1 : 1;
            for (;;) {
              let Sr = rr.parentNode;
              if (Sr == Qr.dom) break;
              0 == Zr && Sr.firstChild != Sr.lastChild && (Zr = rr == Sr.firstChild ? -1 : 1), rr = Sr
            }
            Wr = Zr < 0 ? rr : rr.nextSibling
          }
          if (Wr == Qr.dom.firstChild) return Zr;
          for (; Wr && !mQ.get(Wr);) Wr = Wr.nextSibling;
          if (!Wr) return Zr + Qr.length;
          for (let rr = 0, Sr = Zr;; rr++) {
            let Zr = Qr.children[rr];
            if (Zr.dom == Wr) return Sr;
            Sr += Zr.length + Zr.breakAfter
          }
        }
      }
      domAtPos(rr, Sr) {
        let {
          tile: Qr,
          offset: Zr
        } = this.tile.resolveBlock(rr, Sr);
        return Qr.isWidget() ? Qr.domPosFor(rr, Sr) : Qr.domIn(Zr, Sr)
      }
      inlineDOMNearPos(rr, Sr) {
        let Qr, Zr, Wr = -1,
          ar = !1,
          jr = -1,
          Ir = !1;
        return this.tile.blockTiles(((Sr, fr) => {
          if (Sr.isWidget()) {
            if (32 & Sr.flags && fr >= rr) return !0;
            16 & Sr.flags && (ar = !0)
          } else {
            let Er = fr + Sr.length;
            if (fr <= rr && (Qr = Sr, Wr = rr - fr, ar = Er < rr), Er >= rr && !Zr && (Zr = Sr, jr = rr - fr, Ir = fr > rr), fr > rr && Zr) return !0
          }
        })), Qr || Zr ? (ar && Zr ? Qr = null : Ir && Qr && (Zr = null), Qr && Sr < 0 || !Zr ? Qr.domIn(Wr, Sr) : Zr.domIn(jr, Sr)) : this.domAtPos(rr, Sr)
      }
      coordsAt(rr, Sr) {
        let {
          tile: Qr,
          offset: Zr
        } = this.tile.resolveBlock(rr, Sr);
        return Qr.isWidget() ? Qr.widget instanceof VQ ? null : Qr.coordsInWidget(Zr, Sr, !0) : Qr.coordsIn(Zr, Sr)
      }
      lineAt(rr, Sr) {
        let {
          tile: Qr
        } = this.tile.resolveBlock(rr, Sr);
        return Qr.isLine() ? Qr : null
      }
      coordsForChar(rr) {
        let {
          tile: Sr,
          offset: Qr
        } = this.tile.resolveBlock(rr, 1);
        if (!Sr.isLine()) return null;
        return function rr(Sr, Qr) {
          if (Sr.isComposite())
            for (let Zr of Sr.children) {
              if (Zr.length >= Qr) {
                let Sr = rr(Zr, Qr);
                if (Sr) return Sr
              }
              if ((Qr -= Zr.length) < 0) break
            } else if (Sr.isText() && Qr < Sr.length) {
              let rr = (0, Zr.ib)(Sr.text, Qr);
              if (rr == Qr) return null;
              let Wr = ZS(Sr.dom, Qr, rr).getClientRects();
              for (let Sr = 0; Sr < Wr.length; Sr++) {
                let rr = Wr[Sr];
                if (Sr == Wr.length - 1 || rr.top < rr.bottom && rr.left < rr.right) return rr
              }
            } return null
        }(Sr, Qr)
      }
      measureVisibleLineHeights(rr) {
        let Sr = [],
          {
            from: Qr,
            to: Zr
          } = rr,
          Wr = this.view.contentDOM.clientWidth,
          ar = Wr > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          jr = -1,
          Ir = this.view.textDirection == ES.LTR,
          fr = 0,
          Er = (rr, pr, xr) => {
            for (let mr = 0; mr < rr.children.length && !(pr > Zr); mr++) {
              let Zr = rr.children[mr],
                Nr = pr + Zr.length,
                Ur = Zr.dom.getBoundingClientRect(),
                {
                  height: tr
                } = Ur;
              if (xr && !mr && (fr += Ur.top - xr.top), Zr instanceof hQ) Nr > Qr && Er(Zr, pr, Ur);
              else if (pr >= Qr && (fr > 0 && Sr.push(-fr), Sr.push(tr + fr), fr = 0, ar)) {
                let rr = Zr.dom.lastChild,
                  Sr = rr ? ir(rr) : [];
                if (Sr.length) {
                  let rr = Sr[Sr.length - 1],
                    Qr = Ir ? rr.right - Ur.left : Ur.right - rr.left;
                  Qr > jr && (jr = Qr, this.minWidth = Wr, this.minWidthFrom = pr, this.minWidthTo = Nr)
                }
              }
              xr && mr == rr.children.length - 1 && (fr += xr.bottom - Ur.bottom), pr = Nr + Zr.breakAfter
            }
          };
        return Er(this.tile, 0, null), Sr
      }
      textDirectionAt(rr) {
        let {
          tile: Sr
        } = this.tile.resolveBlock(rr, 1);
        return "rtl" == getComputedStyle(Sr.dom).direction ? ES.RTL : ES.LTR
      }
      measureTextSize() {
        let rr = this.tile.blockTiles((rr => {
          if (rr.isLine() && rr.children.length && rr.length <= 20) {
            let Sr, Qr = 0;
            for (let Zr of rr.children) {
              if (!Zr.isText() || /[^ -~]/.test(Zr.text)) return;
              let rr = ir(Zr.dom);
              if (1 != rr.length) return;
              Qr += rr[0].width, Sr = rr[0].height
            }
            if (Qr) return {
              lineHeight: rr.dom.getBoundingClientRect().height,
              charWidth: Qr / rr.length,
              textHeight: Sr
            }
          }
        }));
        if (rr) return rr;
        let Sr, Qr, Zr, Wr = document.createElement("div");
        return Wr.className = "cm-line", Wr.style.width = "99999px", Wr.style.position = "absolute", Wr.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(Wr);
          let rr = ir(Wr.firstChild)[0];
          Sr = Wr.getBoundingClientRect().height, Qr = rr && rr.width ? rr.width / 27 : 7, Zr = rr && rr.height ? rr.height : Sr, Wr.remove()
        })), {
          lineHeight: Sr,
          charWidth: Qr,
          textHeight: Zr
        }
      }
      computeBlockGapDeco() {
        let rr = [],
          Sr = this.view.viewState;
        for (let Qr = 0, Zr = 0;; Zr++) {
          let Wr = Zr == Sr.viewports.length ? null : Sr.viewports[Zr],
            ar = Wr ? Wr.from - 1 : this.view.state.doc.length;
          if (ar > Qr) {
            let Zr = (Sr.lineBlockAt(ar).bottom - Sr.lineBlockAt(Qr).top) / this.view.scaleY;
            rr.push(Hr.replace({
              widget: new VQ(Zr),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(Qr, ar))
          }
          if (!Wr) break;
          Qr = Wr.to + 1
        }
        return Hr.set(rr)
      }
      updateDeco() {
        let rr = 1,
          Sr = this.view.state.facet(rQ).map((Sr => (this.dynamicDecorationMap[rr++] = "function" == typeof Sr) ? Sr(this.view) : Sr)),
          Qr = !1,
          Wr = this.view.state.facet(QQ).map(((rr, Sr) => {
            let Zr = "function" == typeof rr;
            return Zr && (Qr = !0), Zr ? rr(this.view) : rr
          }));
        for (Wr.length && (this.dynamicDecorationMap[rr++] = Qr, Sr.push(Zr.H.join(Wr))), this.OZ = [this.editContextFormatting, ...Sr, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; rr < this.OZ.length;) this.dynamicDecorationMap[rr++] = !1;
        this.blockWrappers = this.view.state.facet(SQ).map((rr => "function" == typeof rr ? rr(this.view) : rr))
      }
      scrollIntoView(rr) {
        var Sr;
        if (rr.isSnapshot) {
          let Sr = this.view.viewState.lineBlockAt(rr.range.head);
          return this.view.scrollDOM.scrollTop = Sr.top - rr.yMargin, void(this.view.scrollDOM.scrollLeft = rr.xMargin)
        }
        for (let pr of this.view.state.facet(VS)) try {
          if (pr(this.view, rr.range, rr)) return !0
        } catch (Er) {
          FS(this.view.state, Er, "scroll handler")
        }
        let Qr, {
            range: Zr
          } = rr,
          Wr = this.coordsAt(Zr.head, null !== (Sr = Zr.assoc) && void 0 !== Sr ? Sr : Zr.empty ? 0 : Zr.head > Zr.anchor ? -1 : 1);
        if (!Wr) return;
        !Zr.empty && (Qr = this.coordsAt(Zr.anchor, Zr.anchor > Zr.head ? -1 : 1)) && (Wr = {
          left: Math.min(Wr.left, Qr.left),
          top: Math.min(Wr.top, Qr.top),
          right: Math.max(Wr.right, Qr.right),
          bottom: Math.max(Wr.bottom, Qr.bottom)
        });
        let ar = IQ(this.view),
          jr = {
            left: Wr.left - ar.left,
            top: Wr.top - ar.top,
            right: Wr.right + ar.right,
            bottom: Wr.bottom + ar.bottom
          },
          {
            offsetWidth: Ir,
            offsetHeight: fr
          } = this.view.scrollDOM;
        if (function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
            let fr = rr.ownerDocument,
              Er = fr.defaultView || window;
            for (let pr = rr, xr = !1; pr && !xr;)
              if (1 == pr.nodeType) {
                let rr, mr = pr == fr.body,
                  Nr = 1,
                  Ur = 1;
                if (mr) rr = Dr(Er);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(pr).position) && (xr = !0), pr.scrollHeight <= pr.clientHeight && pr.scrollWidth <= pr.clientWidth) {
                    pr = pr.assignedSlot || pr.parentNode;
                    continue
                  }
                  let Sr = pr.getBoundingClientRect();
                  ({
                    scaleX: Nr,
                    scaleY: Ur
                  } = dr(pr, Sr)), rr = {
                    left: Sr.left,
                    right: Sr.left + pr.clientWidth * Nr,
                    top: Sr.top,
                    bottom: Sr.top + pr.clientHeight * Ur
                  }
                }
                let tr = 0,
                  hr = 0;
                if ("nearest" == Wr) Sr.top < rr.top + jr ? (hr = Sr.top - (rr.top + jr), Qr > 0 && Sr.bottom > rr.bottom + hr && (hr = Sr.bottom - rr.bottom + jr)) : Sr.bottom > rr.bottom - jr && (hr = Sr.bottom - rr.bottom + jr, Qr < 0 && Sr.top - hr < rr.top && (hr = Sr.top - (rr.top + jr)));
                else {
                  let Zr = Sr.bottom - Sr.top,
                    ar = rr.bottom - rr.top;
                  hr = ("center" == Wr && Zr <= ar ? Sr.top + Zr / 2 - ar / 2 : "start" == Wr || "center" == Wr && Qr < 0 ? Sr.top - jr : Sr.bottom - ar + jr) - rr.top
                }
                if ("nearest" == Zr ? Sr.left < rr.left + ar ? (tr = Sr.left - (rr.left + ar), Qr > 0 && Sr.right > rr.right + tr && (tr = Sr.right - rr.right + ar)) : Sr.right > rr.right - ar && (tr = Sr.right - rr.right + ar, Qr < 0 && Sr.left < rr.left + tr && (tr = Sr.left - (rr.left + ar))) : tr = ("center" == Zr ? Sr.left + (Sr.right - Sr.left) / 2 - (rr.right - rr.left) / 2 : "start" == Zr == Ir ? Sr.left - ar : Sr.right - (rr.right - rr.left) + ar) - rr.left, tr || hr)
                  if (mr) Er.scrollBy(tr, hr);
                  else {
                    let rr = 0,
                      Qr = 0;
                    if (hr) {
                      let rr = pr.scrollTop;
                      pr.scrollTop += hr / Ur, Qr = (pr.scrollTop - rr) * Ur
                    }
                    if (tr) {
                      let Sr = pr.scrollLeft;
                      pr.scrollLeft += tr / Nr, rr = (pr.scrollLeft - Sr) * Nr
                    }
                    Sr = {
                      left: Sr.left - rr,
                      top: Sr.top - Qr,
                      right: Sr.right - rr,
                      bottom: Sr.bottom - Qr
                    }, rr && Math.abs(rr - tr) < 1 && (Zr = "nearest"), Qr && Math.abs(Qr - hr) < 1 && (Wr = "nearest")
                  } if (mr) break;
                (Sr.top < rr.top || Sr.bottom > rr.bottom || Sr.left < rr.left || Sr.right > rr.right) && (Sr = {
                  left: Math.max(Sr.left, rr.left),
                  right: Math.min(Sr.right, rr.right),
                  top: Math.max(Sr.top, rr.top),
                  bottom: Math.min(Sr.bottom, rr.bottom)
                }), pr = pr.assignedSlot || pr.parentNode
              } else {
                if (11 != pr.nodeType) break;
                pr = pr.host
              }
          }(this.view.scrollDOM, jr, Zr.head < Zr.anchor ? -1 : 1, rr.x, rr.y, Math.max(Math.min(rr.xMargin, Ir), -Ir), Math.max(Math.min(rr.yMargin, fr), -fr), this.view.textDirection == ES.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (Wr.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || Wr.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let rr = this.view.docView.lineAt(Zr.head, 1);
          rr && rr.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(rr) {
        let Sr = rr => rr.isWidget() || rr.children.some(Sr);
        return Sr(this.tile.resolveBlock(rr, 1).tile)
      }
      destroy() {
        MQ(this.tile)
      }
    }

    function MQ(rr, Sr) {
      let Qr = null === Sr || void 0 === Sr ? void 0 : Sr.get(rr);
      if (1 != Qr) {
        null == Qr && rr.destroy();
        for (let Qr of rr.children) MQ(Qr, Sr)
      }
    }

    function GQ(rr, Sr) {
      let Qr = rr.observer.selectionRange;
      if (!Qr.focusNode) return null;
      let Zr = jS(Qr.focusNode, Qr.focusOffset),
        Wr = IS(Qr.focusNode, Qr.focusOffset),
        ar = Zr || Wr;
      if (Wr && Zr && Wr.node != Zr.node) {
        let Sr = mQ.get(Wr.node);
        if (!Sr || Sr.isText() && Sr.text != Wr.node.nodeValue) ar = Wr;
        else if (rr.docView.lastCompositionAfterCursor) {
          let rr = mQ.get(Zr.node);
          !rr || rr.isText() && rr.text != Zr.node.nodeValue || (ar = Wr)
        }
      }
      if (rr.docView.lastCompositionAfterCursor = ar != Zr, !ar) return null;
      let jr = Sr - ar.offset;
      return {
        from: jr,
        to: jr + ar.node.nodeValue.length,
        node: ar.node
      }
    }
    let kQ = class {
      constructor() {
        this.changes = []
      }
      compareRange(rr, Sr) {
        Mr(rr, Sr, this.changes)
      }
      comparePoint(rr, Sr) {
        Mr(rr, Sr, this.changes)
      }
      boundChange(rr) {
        Mr(rr, rr, this.changes)
      }
    };
    class AQ {
      constructor() {
        this.changes = []
      }
      compareRange(rr, Sr) {
        Mr(rr, Sr, this.changes)
      }
      comparePoint() {}
      boundChange(rr) {
        Mr(rr, rr, this.changes)
      }
    }
    class VQ extends Xr {
      constructor(rr) {
        super(), this.height = rr
      }
      toDOM() {
        let rr = document.createElement("div");
        return rr.className = "cm-gap", this.updateDOM(rr), rr
      }
      eq(rr) {
        return rr.height == this.height
      }
      updateDOM(rr) {
        return rr.style.height = this.height + "px", !0
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

    function iQ(rr, Sr, Qr) {
      let Zr = rr.lineBlockAt(Sr);
      if (Array.isArray(Zr.type)) {
        let rr;
        for (let Wr of Zr.type) {
          if (Wr.from > Sr) break;
          if (!(Wr.to < Sr)) {
            if (Wr.from < Sr && Wr.to > Sr) return Wr;
            rr && (Wr.type != Pr.Text || rr.type == Wr.type && !(Qr < 0 ? Wr.from < Sr : Wr.to > Sr)) || (rr = Wr)
          }
        }
        return rr || Zr
      }
      return Zr
    }

    function wQ(rr, Sr, Qr, Zr) {
      let Wr = rr.state.doc.lineAt(Sr.head),
        ar = rr.bidiSpans(Wr),
        jr = rr.textDirectionAt(Wr.from);
      for (let Ir = Sr, fr = null;;) {
        let Sr = LS(Wr, ar, jr, Ir, Qr),
          Er = OS;
        if (!Sr) {
          if (Wr.number == (Qr ? rr.state.doc.lines : 1)) return Ir;
          Er = "\n", Wr = rr.state.doc.line(Wr.number + (Qr ? 1 : -1)), ar = rr.bidiSpans(Wr), Sr = rr.visualLineSide(Wr, !Qr)
        }
        if (fr) {
          if (!fr(Er)) return Ir
        } else {
          if (!Zr) return Sr;
          fr = Zr(Er)
        }
        Ir = Sr
      }
    }

    function cQ(rr, Sr, Qr) {
      for (;;) {
        let Zr = 0;
        for (let Wr of rr) Wr.between(Sr - 1, Sr + 1, ((rr, Wr, ar) => {
          if (Sr > rr && Sr < Wr) {
            let ar = Zr || Qr || (Sr - rr < Wr - Sr ? -1 : 1);
            Sr = ar < 0 ? rr : Wr, Zr = ar
          }
        }));
        if (!Zr) return Sr
      }
    }

    function FQ(rr, Sr) {
      let Qr = null;
      for (let Wr = 0; Wr < Sr.yh.length; Wr++) {
        let ar = Sr.yh[Wr],
          jr = null;
        if (ar.empty) {
          let Sr = cQ(rr, ar.from, 0);
          Sr != ar.from && (jr = Zr.m.cursor(Sr, -1))
        } else {
          let Sr = cQ(rr, ar.from, -1),
            Qr = cQ(rr, ar.to, 1);
          Sr == ar.from && Qr == ar.to || (jr = Zr.m.range(ar.from == ar.anchor ? Sr : Qr, ar.from == ar.head ? Sr : Qr))
        }
        jr && (Qr || (Qr = Sr.yh.slice()), Qr[Wr] = jr)
      }
      return Qr ? Zr.m.create(Qr, Sr.mainIndex) : Sr
    }

    function oQ(rr, Sr, Qr) {
      let Wr = cQ(rr.state.facet(ZQ).map((Sr => Sr(rr))), Qr.from, Sr.head > Qr.from ? -1 : 1);
      return Wr == Qr.from ? Qr : Zr.m.cursor(Wr, Wr < Qr.from ? 1 : -1)
    }
    class bQ {
      constructor(rr, Sr) {
        this.pos = rr, this.assoc = Sr
      }
    }

    function JQ(rr, Sr, Qr, Wr) {
      let ar, jr = rr.contentDOM.getBoundingClientRect(),
        Ir = jr.top + rr.viewState.paddingTop,
        {
          x: fr,
          y: Er
        } = Sr,
        pr = Er - Ir;
      for (;;) {
        if (pr < 0) return new bQ(0, 1);
        if (pr > rr.viewState.docHeight) return new bQ(rr.state.doc.length, -1);
        if (ar = rr.elementAtHeight(pr), null == Wr) break;
        if (ar.type == Pr.Text) {
          if (Wr < 0 ? ar.to < rr.viewport.from : ar.from > rr.viewport.to) break;
          let Sr = rr.docView.coordsAt(Wr < 0 ? ar.from : ar.to, Wr > 0 ? -1 : 1);
          if (Sr && (Wr < 0 ? Sr.top <= pr + Ir : Sr.bottom >= pr + Ir)) break
        }
        let Sr = rr.viewState.heightOracle.textHeight / 2;
        pr = Wr > 0 ? ar.bottom + Sr : ar.top - Sr
      }
      if (rr.viewport.from >= ar.to || rr.viewport.to <= ar.from) {
        if (Qr) return null;
        if (ar.type == Pr.Text) {
          let Sr = function(rr, Sr, Qr, Wr, ar) {
            let jr = Math.round((Wr - Sr.left) * rr.defaultCharacterWidth);
            if (rr.lineWrapping && Qr.height > 1.5 * rr.defaultLineHeight) {
              let Sr = rr.viewState.heightOracle.textHeight;
              jr += Math.floor((ar - Qr.top - .5 * (rr.defaultLineHeight - Sr)) / Sr) * rr.viewState.heightOracle.lineLength
            }
            let Ir = rr.state.sliceDoc(Qr.from, Qr.to);
            return Qr.from + (0, Zr.jb)(Ir, jr, rr.state.tabSize)
          }(rr, jr, ar, fr, Er);
          return new bQ(Sr, Sr == ar.from ? 1 : -1)
        }
      }
      if (ar.type != Pr.Text) return pr < (ar.top + ar.bottom) / 2 ? new bQ(ar.from, 1) : new bQ(ar.to, -1);
      let xr = rr.docView.lineAt(ar.from, 2);
      return xr && xr.length == ar.length || (xr = rr.docView.lineAt(ar.from, -2)), new DQ(rr, fr, Er, rr.textDirectionAt(ar.from)).scanTile(xr, ar.from)
    }
    class DQ {
      constructor(rr, Sr, Qr, Zr) {
        this.view = rr, this.x = Sr, this.y = Qr, this.baseDir = Zr, this.line = null, this.spans = null
      }
      bidiSpansAt(rr) {
        return (!this.line || this.line.from > rr || this.line.to < rr) && (this.line = this.view.state.doc.lineAt(rr), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(rr, Sr) {
        let {
          line: Qr,
          spans: Zr
        } = this.bidiSpansAt(rr);
        return Zr[nS.find(Zr, rr - Qr.from, -1, Sr)].level == this.baseDir
      }
      dirAt(rr, Sr) {
        let {
          line: Qr,
          spans: Zr
        } = this.bidiSpansAt(rr);
        return Zr[nS.find(Zr, rr - Qr.from, -1, Sr)].dir
      }
      bidiIn(rr, Sr) {
        let {
          spans: Qr,
          line: Zr
        } = this.bidiSpansAt(rr);
        return Qr.length > 1 || Qr.length && (Qr[0].level != this.baseDir || Qr[0].to + Zr.from < Sr)
      }
      scan(rr, Sr) {
        let Qr, Zr, Wr, ar = 0,
          jr = rr.length - 1,
          Ir = new Set,
          fr = this.bidiIn(rr[0], rr[jr]),
          Er = -1,
          pr = 1e9;
        rr: for (; ar < jr;) {
          let xr = jr - ar,
            mr = ar + jr >> 1;
          Sr: if (Ir.has(mr)) {
            let rr = ar + Math.floor(Math.random() * xr);
            for (let Sr = 0; Sr < xr; Sr++) {
              if (!Ir.has(rr)) {
                mr = rr;
                break Sr
              }
              rr++, rr == jr && (rr = ar)
            }
            break rr
          } Ir.add(mr);
          let Nr = Sr(mr);
          if (Nr)
            for (let Sr = 0; Sr < Nr.length; Sr++) {
              let Ir = Nr[Sr],
                xr = 0;
              if (!(0 == Ir.width && Nr.length > 1)) {
                if (Ir.bottom < this.y)(!Qr || Qr.bottom < Ir.bottom) && (Qr = Ir), xr = 1;
                else if (Ir.top > this.y)(!Zr || Zr.top > Ir.top) && (Zr = Ir), xr = -1;
                else {
                  let rr = Ir.left > this.x ? this.x - Ir.left : Ir.right < this.x ? this.x - Ir.right : 0,
                    Sr = Math.abs(rr);
                  Sr < pr && (Er = mr, pr = Sr, Wr = Ir), rr && (xr = rr < 0 == (this.baseDir == ES.LTR) ? -1 : 1)
                } - 1 != xr || fr && !this.baseDirAt(rr[mr], 1) ? 1 != xr || fr && !this.baseDirAt(rr[mr + 1], -1) || (ar = mr + 1) : jr = mr
              }
            }
        }
        if (!Wr) {
          let Wr = Qr && (!Zr || this.y - Qr.bottom < Zr.top - this.y) ? Qr : Zr;
          return this.y = (Wr.top + Wr.bottom) / 2, this.scan(rr, Sr)
        }
        if (pr) {
          if (Qr && Qr.bottom > Wr.top) return this.y = Qr.bottom - 1, this.scan(rr, Sr);
          if (Zr && Zr.top < Wr.bottom) return this.y = Zr.top + 1, this.scan(rr, Sr)
        }
        let xr = (fr ? this.dirAt(rr[Er], 1) : this.baseDir) == ES.LTR;
        return {
          i: Er,
          after: this.x > (Wr.left + Wr.right) / 2 == xr
        }
      }
      scanText(rr, Sr) {
        let Qr = [];
        for (let ar = 0; ar < rr.length; ar = (0, Zr.ib)(rr.text, ar)) Qr.push(Sr + ar);
        Qr.push(Sr + rr.length);
        let Wr = this.scan(Qr, (Zr => {
          let Wr = Qr[Zr] - Sr,
            ar = Qr[Zr + 1] - Sr;
          return ZS(rr.dom, Wr, ar).getClientRects()
        }));
        return Wr.after ? new bQ(Qr[Wr.i + 1], -1) : new bQ(Qr[Wr.i], 1)
      }
      scanTile(rr, Sr) {
        if (!rr.length) return new bQ(Sr, 1);
        if (1 == rr.children.length) {
          let Qr = rr.children[0];
          if (Qr.isText()) return this.scanText(Qr, Sr);
          if (Qr.isComposite()) return this.scanTile(Qr, Sr)
        }
        let Qr = [Sr];
        for (let jr = 0, Ir = Sr; jr < rr.children.length; jr++) Qr.push(Ir += rr.children[jr].length);
        let Zr = this.scan(Qr, (Sr => {
            let Qr = rr.children[Sr];
            return 48 & Qr.flags ? null : (1 == Qr.dom.nodeType ? Qr.dom : ZS(Qr.dom, 0, Qr.length)).getClientRects()
          })),
          Wr = rr.children[Zr.i],
          ar = Qr[Zr.i];
        return Wr.isText() ? this.scanText(Wr, ar) : Wr.isComposite() ? this.scanTile(Wr, ar) : Zr.after ? new bQ(Qr[Zr.i + 1], -1) : new bQ(ar, 1)
      }
    }
    const dQ = "\uffff";
    class sQ {
      constructor(rr, Sr) {
        this.points = rr, this.view = Sr, this.text = "", this.lineSeparator = Sr.state.facet(Zr.q.lineSeparator)
      }
      append(rr) {
        this.text += rr
      }
      lineBreak() {
        this.text += dQ
      }
      readRange(rr, Sr) {
        if (!rr) return this;
        let Qr = rr.parentNode;
        for (let Zr = rr;;) {
          this.findPointBefore(Qr, Zr);
          let rr = this.text.length;
          this.readNode(Zr);
          let Wr = mQ.get(Zr),
            ar = Zr.nextSibling;
          if (ar == Sr) {
            (null === Wr || void 0 === Wr ? void 0 : Wr.breakAfter) && !ar && Qr != this.view.contentDOM && this.lineBreak();
            break
          }
          let jr = mQ.get(ar);
          (Wr && jr ? Wr.breakAfter : (Wr ? Wr.breakAfter : Fr(Zr)) || Fr(ar) && ("BR" != Zr.nodeName || (null === Wr || void 0 === Wr ? void 0 : Wr.isWidget())) && this.text.length > rr) && !rZ(ar, Sr) && this.lineBreak(), Zr = ar
        }
        return this.findPointBefore(Qr, Sr), this
      }
      readTextNode(rr) {
        let Sr = rr.nodeValue;
        for (let Qr of this.points) Qr.node == rr && (Qr.pos = this.text.length + Math.min(Qr.offset, Sr.length));
        for (let Qr = 0, Zr = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let Wr, ar = -1,
            jr = 1;
          if (this.lineSeparator ? (ar = Sr.indexOf(this.lineSeparator, Qr), jr = this.lineSeparator.length) : (Wr = Zr.exec(Sr)) && (ar = Wr.index, jr = Wr[0].length), this.append(Sr.slice(Qr, ar < 0 ? Sr.length : ar)), ar < 0) break;
          if (this.lineBreak(), jr > 1)
            for (let Sr of this.points) Sr.node == rr && Sr.pos > this.text.length && (Sr.pos -= jr - 1);
          Qr = ar + jr
        }
      }
      readNode(rr) {
        let Sr = mQ.get(rr),
          Qr = Sr && Sr.overrideDOMText;
        if (null != Qr) {
          this.findPointInside(rr, Qr.length);
          for (let rr = Qr.iter(); !rr.next().done;) rr.lineBreak ? this.lineBreak() : this.append(rr.value)
        } else 3 == rr.nodeType ? this.readTextNode(rr) : "BR" == rr.nodeName ? rr.nextSibling && this.lineBreak() : 1 == rr.nodeType && this.readRange(rr.firstChild, null)
      }
      findPointBefore(rr, Sr) {
        for (let Qr of this.points) Qr.node == rr && rr.childNodes[Qr.offset] == Sr && (Qr.pos = this.text.length)
      }
      findPointInside(rr, Sr) {
        for (let Qr of this.points)(3 == rr.nodeType ? Qr.node == rr : rr.contains(Qr.node)) && (Qr.pos = this.text.length + (uQ(rr, Qr.node, Qr.offset) ? Sr : 0))
      }
    }

    function uQ(rr, Sr, Qr) {
      for (;;) {
        if (!Sr || Qr < br(Sr)) return !1;
        if (Sr == rr) return !0;
        Qr = cr(Sr) + 1, Sr = Sr.parentNode
      }
    }

    function rZ(rr, Sr) {
      let Qr;
      for (; rr != Sr && rr; rr = rr.nextSibling) {
        let Sr = mQ.get(rr);
        if (!(null === Sr || void 0 === Sr ? void 0 : Sr.isWidget())) return !1;
        Sr && (Qr || (Qr = [])).push(Sr)
      }
      if (Qr)
        for (let Zr of Qr) {
          let rr = Zr.overrideDOMText;
          if (null === rr || void 0 === rr ? void 0 : rr.length) return !1
        }
      return !0
    }
    class SZ {
      constructor(rr, Sr) {
        this.node = rr, this.offset = Sr, this.pos = -1
      }
    }
    class QZ {
      constructor(rr, Sr, Qr, Wr) {
        this.typeOver = Wr, this.bounds = null, this.text = "", this.domChanged = Sr > -1;
        let {
          impreciseHead: ar,
          impreciseAnchor: jr
        } = rr.docView, Ir = rr.state.selection;
        if (rr.state.readOnly && Sr > -1) this.newSel = null;
        else if (Sr > -1 && (this.bounds = ZZ(rr.docView.tile, Sr, Qr, 0))) {
          let Sr = ar || jr ? [] : function(rr) {
              let Sr = [];
              if (rr.root.activeElement != rr.contentDOM) return Sr;
              let {
                anchorNode: Qr,
                anchorOffset: Zr,
                focusNode: Wr,
                focusOffset: ar
              } = rr.observer.selectionRange;
              Qr && (Sr.push(new SZ(Qr, Zr)), Wr == Qr && ar == Zr || Sr.push(new SZ(Wr, ar)));
              return Sr
            }(rr),
            Qr = new sQ(Sr, rr);
          Qr.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = Qr.text, this.newSel = function(rr, Sr) {
            if (0 == rr.length) return null;
            let Qr = rr[0].pos,
              Wr = 2 == rr.length ? rr[1].pos : Qr;
            return Qr > -1 && Wr > -1 ? Zr.m.single(Qr + Sr, Wr + Sr) : null
          }(Sr, this.bounds.from)
        } else {
          let Sr = rr.observer.selectionRange,
            Qr = ar && ar.node == Sr.focusNode && ar.offset == Sr.focusOffset || !Ar(rr.contentDOM, Sr.focusNode) ? Ir.main.head : rr.docView.posFromDOM(Sr.focusNode, Sr.focusOffset),
            Wr = jr && jr.node == Sr.anchorNode && jr.offset == Sr.anchorOffset || !Ar(rr.contentDOM, Sr.anchorNode) ? Ir.main.anchor : rr.docView.posFromDOM(Sr.anchorNode, Sr.anchorOffset),
            fr = rr.viewport;
          if ((Br.ios || Br.chrome) && Ir.main.empty && Qr != Wr && (fr.from > 0 || fr.to < rr.state.doc.length)) {
            let Sr = Math.min(Qr, Wr),
              Zr = Math.max(Qr, Wr),
              ar = fr.from - Sr,
              jr = fr.to - Zr;
            0 != ar && 1 != ar && 0 != Sr || 0 != jr && -1 != jr && Zr != rr.state.doc.length || (Qr = 0, Wr = rr.state.doc.length)
          }
          if (rr.inputState.composing > -1 && Ir.yh.length > 1) this.newSel = Ir.replaceRange(Zr.m.range(Wr, Qr));
          else if (rr.lineWrapping && Wr == Qr && (!Ir.main.empty || Ir.main.head != Qr) && rr.inputState.lastTouchTime > Date.now() - 100) {
            let Sr = rr.coordsAtPos(Qr, -1),
              Wr = 0;
            Sr && (Wr = rr.inputState.lastTouchY <= Sr.bottom ? -1 : 1), this.newSel = Zr.m.create([Zr.m.cursor(Qr, Wr)])
          } else this.newSel = Zr.m.single(Wr, Qr)
        }
      }
    }

    function ZZ(rr, Sr, Qr, Zr) {
      if (rr.isComposite()) {
        let Wr = -1,
          ar = -1,
          jr = -1,
          Ir = -1;
        for (let fr = 0, Er = Zr, pr = Zr; fr < rr.children.length; fr++) {
          let Zr = rr.children[fr],
            xr = Er + Zr.length;
          if (Er < Sr && xr > Qr) return ZZ(Zr, Sr, Qr, Er);
          if (xr >= Sr && -1 == Wr && (Wr = fr, ar = Er), Er > Qr && Zr.dom.parentNode == rr.dom) {
            jr = fr, Ir = pr;
            break
          }
          pr = xr, Er = xr + Zr.breakAfter
        }
        return {
          from: ar,
          to: Ir < 0 ? Zr + rr.length : Ir,
          startDOM: (Wr ? rr.children[Wr - 1].dom.nextSibling : null) || rr.dom.firstChild,
          endDOM: jr < rr.children.length && jr >= 0 ? rr.children[jr].dom : null
        }
      }
      return rr.isText() ? {
        from: Zr,
        to: Zr + rr.length,
        startDOM: rr.dom,
        endDOM: rr.dom.nextSibling
      } : null
    }

    function WZ(rr, Sr) {
      let Qr, {
          newSel: Wr
        } = Sr,
        {
          state: ar
        } = rr,
        jr = ar.selection.main,
        Ir = rr.inputState.lastKeyTime > Date.now() - 100 ? rr.inputState.lastKeyCode : -1;
      if (Sr.bounds) {
        let {
          from: rr,
          to: Wr
        } = Sr.bounds, fr = jr.from, Er = null;
        (8 === Ir || Br.android && Sr.text.length < Wr - rr) && (fr = jr.to, Er = "end");
        let pr, xr, mr = ar.doc.sliceString(rr, Wr, dQ);
        !jr.empty && jr.from >= rr && jr.to <= Wr && (Sr.typeOver || mr != Sr.text) && mr.slice(0, jr.from - rr) == Sr.text.slice(0, jr.from - rr) && mr.slice(jr.to - rr) == Sr.text.slice(pr = Sr.text.length - (mr.length - (jr.to - rr))) ? Qr = {
          from: jr.from,
          to: jr.to,
          insert: Zr.V.of(Sr.text.slice(jr.from - rr, pr).split(dQ))
        } : (xr = jZ(mr, Sr.text, fr - rr, Er)) && (Br.chrome && 13 == Ir && xr.toB == xr.from + 2 && Sr.text.slice(xr.from, xr.toB) == dQ + dQ && xr.toB--, Qr = {
          from: rr + xr.from,
          to: rr + xr.toA,
          insert: Zr.V.of(Sr.text.slice(xr.from, xr.toB).split(dQ))
        })
      } else Wr && (!rr.hasFocus && ar.facet(oS) || IZ(Wr, jr)) && (Wr = null);
      if (!Qr && !Wr) return !1;
      if ((Br.mac || Br.android) && Qr && Qr.from == Qr.to && Qr.from == jr.head - 1 && /^\. ?$/.test(Qr.insert.toString()) && "off" == rr.contentDOM.getAttribute("autocorrect") ? (Wr && 2 == Qr.insert.length && (Wr = Zr.m.single(Wr.main.anchor - 1, Wr.main.head - 1)), Qr = {
          from: Qr.from,
          to: Qr.to,
          insert: Zr.V.of([Qr.insert.toString().replace(".", " ")])
        }) : ar.doc.lineAt(jr.from).to < jr.to && rr.docView.lineHasWidget(jr.to) && rr.inputState.insertingTextAt > Date.now() - 50 ? Qr = {
          from: jr.from,
          to: jr.to,
          insert: ar.toText(rr.inputState.insertingText)
        } : Br.chrome && Qr && Qr.from == Qr.to && Qr.from == jr.head && "\n " == Qr.insert.toString() && rr.lineWrapping && (Wr && (Wr = Zr.m.single(Wr.main.anchor - 1, Wr.main.head - 1)), Qr = {
          from: jr.from,
          to: jr.to,
          insert: Zr.V.of([" "])
        }), Qr) return aZ(rr, Qr, Wr, Ir);
      if (Wr && !IZ(Wr, jr)) {
        let Sr = !1,
          Qr = "select";
        return rr.inputState.lastSelectionTime > Date.now() - 50 && ("select" == rr.inputState.lastSelectionOrigin && (Sr = !0), Qr = rr.inputState.lastSelectionOrigin, "select.pointer" == Qr && (Wr = FQ(ar.facet(ZQ).map((Sr => Sr(rr))), Wr))), rr.dispatch({
          selection: Wr,
          scrollIntoView: Sr,
          userEvent: Qr
        }), !0
      }
      return !1
    }

    function aZ(rr, Sr, Qr) {
      let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (Br.ios && rr.inputState.flushIOSKey(Sr)) return !0;
      let ar = rr.state.selection.main;
      if (Br.android && (Sr.to == ar.to && (Sr.from == ar.from || Sr.from == ar.from - 1 && " " == rr.state.sliceDoc(Sr.from, ar.from)) && 1 == Sr.insert.length && 2 == Sr.insert.lines && WS(rr.contentDOM, "Enter", 13) || (Sr.from == ar.from - 1 && Sr.to == ar.to && 0 == Sr.insert.length || 8 == Wr && Sr.insert.length < Sr.to - Sr.from && Sr.to > ar.head) && WS(rr.contentDOM, "Backspace", 8) || Sr.from == ar.from && Sr.to == ar.to + 1 && 0 == Sr.insert.length && WS(rr.contentDOM, "Delete", 46))) return !0;
      let jr, Ir = Sr.insert.toString();
      rr.inputState.composing >= 0 && rr.inputState.composing++;
      let fr = () => jr || (jr = function(rr, Sr, Qr) {
        let Wr, ar = rr.state,
          jr = ar.selection.main,
          Ir = -1;
        if (Sr.from == Sr.to && Sr.from < jr.from || Sr.from > jr.to) {
          let Qr = Sr.from < jr.from ? -1 : 1,
            Zr = Qr < 0 ? jr.from : jr.to,
            Wr = cQ(ar.facet(ZQ).map((Sr => Sr(rr))), Zr, Qr);
          Sr.from == Wr && (Ir = Wr)
        }
        if (Ir > -1) Wr = {
          changes: Sr,
          selection: Zr.m.cursor(Sr.from + Sr.insert.length, -1)
        };
        else if (Sr.from >= jr.from && Sr.to <= jr.to && Sr.to - Sr.from >= (jr.to - jr.from) / 3 && (!Qr || Qr.main.empty && Qr.main.from == Sr.from + Sr.insert.length) && rr.inputState.composing < 0) {
          let Qr = jr.from < Sr.from ? ar.sliceDoc(jr.from, Sr.from) : "",
            Zr = jr.to > Sr.to ? ar.sliceDoc(Sr.to, jr.to) : "";
          Wr = ar.replaceSelection(rr.state.toText(Qr + Sr.insert.sliceString(0, void 0, rr.state.lineBreak) + Zr))
        } else {
          let Ir = ar.changes(Sr),
            fr = Qr && Qr.main.to <= Ir.newLength ? Qr.main : void 0;
          if (ar.selection.yh.length > 1 && (rr.inputState.composing >= 0 || rr.inputState.compositionPendingChange) && Sr.to <= jr.to + 10 && Sr.to >= jr.to - 10) {
            let Er, pr = rr.state.sliceDoc(Sr.from, Sr.to),
              xr = Qr && GQ(rr, Qr.main.head);
            if (xr) {
              let rr = Sr.insert.length - (Sr.to - Sr.from);
              Er = {
                from: xr.from,
                to: xr.to - rr
              }
            } else Er = rr.state.doc.lineAt(jr.head);
            let mr = jr.to - Sr.to;
            Wr = ar.changeByRange((Qr => {
              if (Qr.from == jr.from && Qr.to == jr.to) return {
                changes: Ir,
                range: fr || Qr.map(Ir)
              };
              let Wr = Qr.to - mr,
                xr = Wr - pr.length;
              if (rr.state.sliceDoc(xr, Wr) != pr || Wr >= Er.from && xr <= Er.to) return {
                range: Qr
              };
              let Nr = ar.changes({
                  from: xr,
                  to: Wr,
                  insert: Sr.insert
                }),
                Ur = Qr.to - jr.to;
              return {
                changes: Nr,
                range: fr ? Zr.m.range(Math.max(0, fr.anchor + Ur), Math.max(0, fr.head + Ur)) : Qr.map(Nr)
              }
            }))
          } else Wr = {
            changes: Ir,
            selection: fr && ar.selection.replaceRange(fr)
          }
        }
        let fr = "input.type";
        (rr.composing || rr.inputState.compositionPendingChange && rr.inputState.compositionEndedAt > Date.now() - 50) && (rr.inputState.compositionPendingChange = !1, fr += ".compose", rr.inputState.compositionFirstChange && (fr += ".start", rr.inputState.compositionFirstChange = !1));
        return ar.update(Wr, {
          userEvent: fr,
          scrollIntoView: !0
        })
      }(rr, Sr, Qr));
      return rr.state.facet(gS).some((Qr => Qr(rr, Sr.from, Sr.to, Ir, fr))) || rr.dispatch(fr()), !0
    }

    function jZ(rr, Sr, Qr, Zr) {
      let Wr = Math.min(rr.length, Sr.length),
        ar = 0;
      for (; ar < Wr && rr.charCodeAt(ar) == Sr.charCodeAt(ar);) ar++;
      if (ar == Wr && rr.length == Sr.length) return null;
      let jr = rr.length,
        Ir = Sr.length;
      for (; jr > 0 && Ir > 0 && rr.charCodeAt(jr - 1) == Sr.charCodeAt(Ir - 1);) jr--, Ir--;
      if ("end" == Zr) {
        Qr -= jr + Math.max(0, ar - Math.min(jr, Ir)) - ar
      }
      if (jr < ar && rr.length < Sr.length) {
        ar -= Qr <= ar && Qr >= jr ? ar - Qr : 0, Ir = ar + (Ir - jr), jr = ar
      } else if (Ir < ar) {
        ar -= Qr <= ar && Qr >= Ir ? ar - Qr : 0, jr = ar + (jr - Ir), Ir = ar
      }
      return {
        from: ar,
        toA: jr,
        toB: Ir
      }
    }

    function IZ(rr, Sr) {
      return Sr.head == rr.main.head && Sr.anchor == rr.main.anchor
    }
    class fZ {
      setSelectionOrigin(rr) {
        this.lastSelectionOrigin = rr, this.lastSelectionTime = Date.now()
      }
      constructor(rr) {
        this.view = rr, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = rr.hasFocus, Br.safari && rr.contentDOM.addEventListener("input", (() => null)), Br.gecko && function(rr) {
          qZ.has(rr) || (qZ.add(rr), rr.addEventListener("copy", (() => {})), rr.addEventListener("cut", (() => {})))
        }(rr.contentDOM.ownerDocument)
      }
      handleEvent(rr) {
        (function(rr, Sr) {
          if (!Sr.bubbles) return !0;
          if (Sr.defaultPrevented) return !1;
          for (let Qr, Zr = Sr.target; Zr != rr.contentDOM; Zr = Zr.parentNode)
            if (!Zr || 11 == Zr.nodeType || (Qr = mQ.get(Zr)) && Qr.isWidget() && !Qr.isHidden && Qr.widget.ignoreEvent(Sr)) return !1;
          return !0
        })(this.view, rr) && !this.ignoreDuringComposition(rr) && ("keydown" == rr.type && this.keydown(rr) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(rr.type, rr))) : this.runHandlers(rr.type, rr)))
      }
      runHandlers(rr, Sr) {
        let Qr = this.handlers[rr];
        if (Qr) {
          for (let rr of Qr.observers) rr(this.view, Sr);
          for (let rr of Qr.handlers) {
            if (Sr.defaultPrevented) break;
            if (rr(this.view, Sr)) {
              Sr.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(rr) {
        let Sr = pZ(rr),
          Qr = this.handlers,
          Zr = this.view.contentDOM;
        for (let Wr in Sr)
          if ("scroll" != Wr) {
            let rr = !Sr[Wr].handlers.length,
              ar = Qr[Wr];
            ar && rr != !ar.handlers.length && (Zr.removeEventListener(Wr, this.handleEvent), ar = null), ar || Zr.addEventListener(Wr, this.handleEvent, {
              passive: rr
            })
          } for (let Wr in Qr) "scroll" == Wr || Sr[Wr] || Zr.removeEventListener(Wr, this.handleEvent);
        this.handlers = Sr
      }
      keydown(rr) {
        if (this.lastKeyCode = rr.keyCode, this.lastKeyTime = Date.now(), 9 == rr.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != rr.keyCode && NZ.indexOf(rr.keyCode) < 0 && (this.tabFocusMode = -1), Br.android && Br.chrome && !rr.synthetic && (13 == rr.keyCode || 8 == rr.keyCode)) return this.view.observer.delayAndroidKey(rr.key, rr.keyCode), !0;
        let Sr;
        return !Br.ios || rr.synthetic || rr.altKey || rr.metaKey || rr.shiftKey || !((Sr = xZ.find((Sr => Sr.keyCode == rr.keyCode))) && !rr.ctrlKey || mZ.indexOf(rr.key) > -1 && rr.ctrlKey) ? (229 != rr.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = Sr || rr, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(rr) {
        let Sr = this.pendingIOSKey;
        return !!Sr && (!("Enter" == Sr.key && rr && rr.from < rr.to && /^\S+$/.test(rr.insert.toString())) && (this.pendingIOSKey = void 0, WS(this.view.contentDOM, Sr.key, Sr.keyCode, Sr instanceof KeyboardEvent ? Sr : void 0)))
      }
      ignoreDuringComposition(rr) {
        return !(!/^key/.test(rr.type) || rr.synthetic) && (this.composing > 0 || !!(Br.safari && !Br.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(rr) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = rr
      }
      update(rr) {
        this.view.observer.update(rr), this.mouseSelection && this.mouseSelection.update(rr), this.draggedContent && rr.docChanged && (this.draggedContent = this.draggedContent.map(rr.changes)), rr.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function EZ(rr, Sr) {
      return (Qr, Zr) => {
        try {
          return Sr.call(rr, Zr, Qr)
        } catch (Wr) {
          FS(Qr.state, Wr)
        }
      }
    }

    function pZ(rr) {
      let Sr = Object.create(null);

      function Qr(rr) {
        return Sr[rr] || (Sr[rr] = {
          observers: [],
          handlers: []
        })
      }
      for (let Zr of rr) {
        let rr = Zr.spec,
          Sr = rr && rr.plugin.domEventHandlers,
          Wr = rr && rr.plugin.domEventObservers;
        if (Sr)
          for (let ar in Sr) {
            let rr = Sr[ar];
            rr && Qr(ar).handlers.push(EZ(Zr.value, rr))
          }
        if (Wr)
          for (let ar in Wr) {
            let rr = Wr[ar];
            rr && Qr(ar).observers.push(EZ(Zr.value, rr))
          }
      }
      for (let Zr in hZ) Qr(Zr).handlers.push(hZ[Zr]);
      for (let Zr in zZ) Qr(Zr).observers.push(zZ[Zr]);
      return Sr
    }
    const xZ = [{
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
      mZ = "dthko",
      NZ = [16, 17, 18, 20, 91, 92, 224, 225];

    function UZ(rr) {
      return .7 * Math.max(0, rr) + 8
    }
    class tZ {
      constructor(rr, Sr, Qr, Wr) {
        this.view = rr, this.startEvent = Sr, this.style = Qr, this.mustSelect = Wr, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = Sr, this.scrollParents = sr(rr.contentDOM), this.atoms = rr.state.facet(ZQ).map((Sr => Sr(rr)));
        let ar = rr.contentDOM.ownerDocument;
        ar.addEventListener("mousemove", this.move = this.move.bind(this)), ar.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = Sr.shiftKey, this.multiple = rr.state.facet(Zr.q.allowMultipleSelections) && function(rr, Sr) {
          let Qr = rr.state.facet(XS);
          return Qr.length ? Qr[0](Sr) : Br.mac ? Sr.metaKey : Sr.ctrlKey
        }(rr, Sr), this.dragging = !(! function(rr, Sr) {
          let {
            main: Qr
          } = rr.state.selection;
          if (Qr.empty) return !1;
          let Zr = kr(rr.root);
          if (!Zr || 0 == Zr.rangeCount) return !0;
          let Wr = Zr.getRangeAt(0).getClientRects();
          for (let ar = 0; ar < Wr.length; ar++) {
            let rr = Wr[ar];
            if (rr.left <= Sr.clientX && rr.right >= Sr.clientX && rr.top <= Sr.clientY && rr.bottom >= Sr.clientY) return !0
          }
          return !1
        }(rr, Sr) || 1 != OZ(Sr)) && null
      }
      start(rr) {
        !1 === this.dragging && this.select(rr)
      }
      move(rr) {
        if (0 == rr.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (Sr = this.startEvent, Qr = rr, Math.max(Math.abs(Sr.clientX - Qr.clientX), Math.abs(Sr.clientY - Qr.clientY)) < 10)) return;
        var Sr, Qr;
        this.select(this.lastEvent = rr);
        let Zr = 0,
          Wr = 0,
          ar = 0,
          jr = 0,
          Ir = this.view.win.innerWidth,
          fr = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: ar,
          right: Ir
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: jr,
          bottom: fr
        } = this.scrollParents.y.getBoundingClientRect());
        let Er = IQ(this.view);
        rr.clientX - Er.left <= ar + 6 ? Zr = -UZ(ar - rr.clientX) : rr.clientX + Er.right >= Ir - 6 && (Zr = UZ(rr.clientX - Ir)), rr.clientY - Er.top <= jr + 6 ? Wr = -UZ(jr - rr.clientY) : rr.clientY + Er.bottom >= fr - 6 && (Wr = UZ(rr.clientY - fr)), this.setScrollSpeed(Zr, Wr)
      }
      up(rr) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || rr.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let rr = this.view.contentDOM.ownerDocument;
        rr.removeEventListener("mousemove", this.move), rr.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(rr, Sr) {
        this.scrollSpeed = {
          x: rr,
          y: Sr
        }, rr || Sr ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: rr,
          y: Sr
        } = this.scrollSpeed;
        rr && this.scrollParents.x && (this.scrollParents.x.scrollLeft += rr, rr = 0), Sr && this.scrollParents.y && (this.scrollParents.y.scrollTop += Sr, Sr = 0), (rr || Sr) && this.view.win.scrollBy(rr, Sr), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(rr) {
        let {
          view: Sr
        } = this, Qr = FQ(this.atoms, this.style.get(rr, this.extend, this.multiple));
        !this.mustSelect && Qr.eq(Sr.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: Qr,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(rr) {
        rr.transactions.some((rr => rr.isUserEvent("input.type"))) ? this.destroy() : this.style.update(rr) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const hZ = Object.create(null),
      zZ = Object.create(null),
      YZ = Br.ie && Br.ie_version < 15 || Br.ios && Br.webkit_version < 604;

    function nZ(rr, Sr, Qr) {
      for (let Zr of rr.facet(Sr)) Qr = Zr(Qr, rr);
      return Qr
    }

    function eZ(rr, Sr) {
      Sr = nZ(rr.state, MS, Sr);
      let Qr, {
          state: Wr
        } = rr,
        ar = 1,
        jr = Wr.toText(Sr),
        Ir = jr.lines == Wr.selection.yh.length;
      if (null != lZ && Wr.selection.yh.every((rr => rr.empty)) && lZ == jr.toString()) {
        let rr = -1;
        Qr = Wr.changeByRange((Qr => {
          let fr = Wr.doc.lineAt(Qr.from);
          if (fr.from == rr) return {
            range: Qr
          };
          rr = fr.from;
          let Er = Wr.toText((Ir ? jr.line(ar++).text : Sr) + Wr.lineBreak);
          return {
            changes: {
              from: fr.from,
              insert: Er
            },
            range: Zr.m.cursor(Qr.from + Er.length)
          }
        }))
      } else Qr = Ir ? Wr.changeByRange((rr => {
        let Sr = jr.line(ar++);
        return {
          changes: {
            from: rr.from,
            to: rr.to,
            insert: Sr.text
          },
          range: Zr.m.cursor(rr.from + Sr.length)
        }
      })) : Wr.replaceSelection(jr);
      rr.dispatch(Qr, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function KZ(rr, Sr, Qr, Wr) {
      if (1 == Wr) return Zr.m.cursor(Sr, Qr);
      if (2 == Wr) return function(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Wr = rr.charCategorizer(Sr),
          ar = rr.doc.lineAt(Sr),
          jr = Sr - ar.from;
        if (0 == ar.length) return Zr.m.cursor(Sr);
        0 == jr ? Qr = 1 : jr == ar.length && (Qr = -1);
        let Ir = jr,
          fr = jr;
        Qr < 0 ? Ir = (0, Zr.ib)(ar.text, jr, !1) : fr = (0, Zr.ib)(ar.text, jr);
        let Er = Wr(ar.text.slice(Ir, fr));
        for (; Ir > 0;) {
          let rr = (0, Zr.ib)(ar.text, Ir, !1);
          if (Wr(ar.text.slice(rr, Ir)) != Er) break;
          Ir = rr
        }
        for (; fr < ar.length;) {
          let rr = (0, Zr.ib)(ar.text, fr);
          if (Wr(ar.text.slice(fr, rr)) != Er) break;
          fr = rr
        }
        return Zr.m.range(Ir + ar.from, fr + ar.from)
      }(rr.state, Sr, Qr);
      {
        let Wr = rr.docView.lineAt(Sr, Qr),
          ar = rr.state.doc.lineAt(Wr ? Wr.posAtEnd : Sr),
          jr = Wr ? Wr.posAtStart : ar.from,
          Ir = Wr ? Wr.posAtEnd : ar.to;
        return Ir < rr.state.doc.length && Ir == ar.to && Ir++, Zr.m.range(jr, Ir)
      }
    }
    zZ.scroll = rr => {
      rr.inputState.lastScrollTop = rr.scrollDOM.scrollTop, rr.inputState.lastScrollLeft = rr.scrollDOM.scrollLeft
    }, zZ.wheel = zZ.mousewheel = rr => {
      rr.inputState.lastWheelEvent = Date.now()
    }, hZ.keydown = (rr, Sr) => (rr.inputState.setSelectionOrigin("select"), 27 == Sr.keyCode && 0 != rr.inputState.tabFocusMode && (rr.inputState.tabFocusMode = Date.now() + 2e3), !1), zZ.touchstart = (rr, Sr) => {
      let Qr = rr.inputState,
        Zr = Sr.targetTouches[0];
      Qr.lastTouchTime = Date.now(), Zr && (Qr.lastTouchX = Zr.clientX, Qr.lastTouchY = Zr.clientY), Qr.setSelectionOrigin("select.pointer")
    }, zZ.touchmove = rr => {
      rr.inputState.setSelectionOrigin("select.pointer")
    }, hZ.mousedown = (rr, Sr) => {
      if (rr.observer.flush(), rr.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let Qr = null;
      for (let Zr of rr.state.facet(HS))
        if (Qr = Zr(rr, Sr), Qr) break;
      if (Qr || 0 != Sr.button || (Qr = function(rr, Sr) {
          let Qr = rr.posAndSideAtCoords({
              x: Sr.clientX,
              y: Sr.clientY
            }, !1),
            Wr = OZ(Sr),
            ar = rr.state.selection;
          return {
            update(rr) {
              rr.docChanged && (Qr.pos = rr.changes.mapPos(Qr.pos), ar = ar.map(rr.changes))
            },
            get(Sr, jr, Ir) {
              let fr, Er = rr.posAndSideAtCoords({
                  x: Sr.clientX,
                  y: Sr.clientY
                }, !1),
                pr = KZ(rr, Er.pos, Er.assoc, Wr);
              if (Qr.pos != Er.pos && !jr) {
                let Sr = KZ(rr, Qr.pos, Qr.assoc, Wr),
                  ar = Math.min(Sr.from, pr.from),
                  jr = Math.max(Sr.to, pr.to);
                pr = ar < pr.from ? Zr.m.range(ar, jr, pr.assoc) : Zr.m.range(jr, ar, pr.assoc)
              }
              return jr ? ar.replaceRange(ar.main.extend(pr.from, pr.to, pr.assoc)) : Ir && 1 == Wr && ar.yh.length > 1 && (fr = function(rr, Sr) {
                for (let Qr = 0; Qr < rr.yh.length; Qr++) {
                  let {
                    from: Wr,
                    to: ar
                  } = rr.yh[Qr];
                  if (Wr <= Sr && ar >= Sr) return Zr.m.create(rr.yh.slice(0, Qr).concat(rr.yh.slice(Qr + 1)), rr.mainIndex == Qr ? 0 : rr.mainIndex - (rr.mainIndex > Qr ? 1 : 0))
                }
                return null
              }(ar, Er.pos)) ? fr : Ir ? ar.addRange(pr) : Zr.m.create([pr])
            }
          }
        }(rr, Sr)), Qr) {
        let Zr = !rr.hasFocus;
        rr.inputState.startMouseSelection(new tZ(rr, Sr, Qr, Zr)), Zr && rr.observer.ignore((() => {
          QS(rr.contentDOM);
          let Sr = rr.root.activeElement;
          Sr && !Sr.contains(rr.contentDOM) && Sr.blur()
        }));
        let Wr = rr.inputState.mouseSelection;
        if (Wr) return Wr.start(Sr), !1 === Wr.dragging
      } else rr.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const yZ = Br.ie && Br.ie_version <= 11;
    let BZ = null,
      TZ = 0,
      vZ = 0;

    function OZ(rr) {
      if (!yZ) return rr.detail;
      let Sr = BZ,
        Qr = vZ;
      return BZ = rr, vZ = Date.now(), TZ = !Sr || Qr > Date.now() - 400 && Math.abs(Sr.clientX - rr.clientX) < 2 && Math.abs(Sr.clientY - rr.clientY) < 2 ? (TZ + 1) % 3 : 1
    }

    function LZ(rr, Sr, Qr, Zr) {
      if (!(Qr = nZ(rr.state, MS, Qr))) return;
      let Wr = rr.posAtCoords({
          x: Sr.clientX,
          y: Sr.clientY
        }, !1),
        {
          draggedContent: ar
        } = rr.inputState,
        jr = Zr && ar && function(rr, Sr) {
          let Qr = rr.state.facet(PS);
          return Qr.length ? Qr[0](Sr) : Br.mac ? !Sr.altKey : !Sr.ctrlKey
        }(rr, Sr) ? {
          from: ar.from,
          to: ar.to
        } : null,
        Ir = {
          from: Wr,
          insert: Qr
        },
        fr = rr.state.changes(jr ? [jr, Ir] : Ir);
      rr.focus(), rr.dispatch({
        changes: fr,
        selection: {
          anchor: fr.mapPos(Wr, -1),
          head: fr.mapPos(Wr, 1)
        },
        userEvent: jr ? "move.drop" : "input.drop"
      }), rr.inputState.draggedContent = null
    }
    hZ.dragstart = (rr, Sr) => {
      let {
        selection: {
          main: Qr
        }
      } = rr.state;
      if (Sr.target.draggable) {
        let Wr = rr.docView.tile.nearest(Sr.target);
        if (Wr && Wr.isWidget()) {
          let rr = Wr.posAtStart,
            Sr = rr + Wr.length;
          (rr >= Qr.to || Sr <= Qr.from) && (Qr = Zr.m.range(rr, Sr))
        }
      }
      let {
        inputState: Wr
      } = rr;
      return Wr.mouseSelection && (Wr.mouseSelection.dragging = !0), Wr.draggedContent = Qr, Sr.dataTransfer && (Sr.dataTransfer.setData("Text", nZ(rr.state, GS, rr.state.sliceDoc(Qr.from, Qr.to))), Sr.dataTransfer.effectAllowed = "copyMove"), !1
    }, hZ.dragend = rr => (rr.inputState.draggedContent = null, !1), hZ.drop = (rr, Sr) => {
      if (!Sr.dataTransfer) return !1;
      if (rr.state.readOnly) return !0;
      let Qr = Sr.dataTransfer.files;
      if (Qr && Qr.length) {
        let Zr = Array(Qr.length),
          Wr = 0,
          ar = () => {
            ++Wr == Qr.length && LZ(rr, Sr, Zr.filter((rr => null != rr)).join(rr.state.lineBreak), !1)
          };
        for (let rr = 0; rr < Qr.length; rr++) {
          let Sr = new FileReader;
          Sr.onerror = ar, Sr.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(Sr.result) || (Zr[rr] = Sr.result), ar()
          }, Sr.readAsText(Qr[rr])
        }
        return !0
      } {
        let Qr = Sr.dataTransfer.getData("Text");
        if (Qr) return LZ(rr, Sr, Qr, !0), !0
      }
      return !1
    }, hZ.paste = (rr, Sr) => {
      if (rr.state.readOnly) return !0;
      rr.observer.flush();
      let Qr = YZ ? null : Sr.clipboardData;
      return Qr ? (eZ(rr, Qr.getData("text/plain") || Qr.getData("text/uri-list")), !0) : (function(rr) {
        let Sr = rr.dom.parentNode;
        if (!Sr) return;
        let Qr = Sr.appendChild(document.createElement("textarea"));
        Qr.style.cssText = "position: fixed; left: -10000px; top: 10px", Qr.focus(), setTimeout((() => {
          rr.focus(), Qr.remove(), eZ(rr, Qr.value)
        }), 50)
      }(rr), !1)
    };
    let lZ = null;
    hZ.copy = hZ.cut = (rr, Sr) => {
      if (!Vr(rr.contentDOM, rr.observer.selectionRange)) return !1;
      let {
        text: Qr,
        yh: Zr,
        linewise: Wr
      } = function(rr) {
        let Sr = [],
          Qr = [],
          Zr = !1;
        for (let Wr of rr.selection.yh) Wr.empty || (Sr.push(rr.sliceDoc(Wr.from, Wr.to)), Qr.push(Wr));
        if (!Sr.length) {
          let Wr = -1;
          for (let {
              from: Zr
            }
            of rr.selection.yh) {
            let ar = rr.doc.lineAt(Zr);
            ar.number > Wr && (Sr.push(ar.text), Qr.push({
              from: ar.from,
              to: Math.min(rr.doc.length, ar.to + 1)
            })), Wr = ar.number
          }
          Zr = !0
        }
        return {
          text: nZ(rr, GS, Sr.join(rr.lineBreak)),
          yh: Qr,
          linewise: Zr
        }
      }(rr.state);
      if (!Qr && !Wr) return !1;
      lZ = Wr ? Qr : null, "cut" != Sr.type || rr.state.readOnly || rr.dispatch({
        changes: Zr,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let ar = YZ ? null : Sr.clipboardData;
      return ar ? (ar.clearData(), ar.setData("text/plain", Qr), !0) : (function(rr, Sr) {
        let Qr = rr.dom.parentNode;
        if (!Qr) return;
        let Zr = Qr.appendChild(document.createElement("textarea"));
        Zr.style.cssText = "position: fixed; left: -10000px; top: 10px", Zr.value = Sr, Zr.focus(), Zr.selectionEnd = Sr.length, Zr.selectionStart = 0, setTimeout((() => {
          Zr.remove(), rr.focus()
        }), 50)
      }(rr, Qr), !1)
    };
    const XZ = Zr.e.define();

    function PZ(rr, Sr) {
      let Qr = [];
      for (let Zr of rr.facet(CS)) {
        let Wr = Zr(rr, Sr);
        Wr && Qr.push(Wr)
      }
      return Qr.length ? rr.update({
        effects: Qr,
        annotations: XZ.of(!0)
      }) : null
    }

    function HZ(rr) {
      setTimeout((() => {
        let Sr = rr.hasFocus;
        if (Sr != rr.inputState.notifiedFocused) {
          let Qr = PZ(rr.state, Sr);
          Qr ? rr.dispatch(Qr) : rr.update([])
        }
      }), 10)
    }
    zZ.focus = rr => {
      rr.inputState.lastFocusTime = Date.now(), rr.scrollDOM.scrollTop || !rr.inputState.lastScrollTop && !rr.inputState.lastScrollLeft || (rr.scrollDOM.scrollTop = rr.inputState.lastScrollTop, rr.scrollDOM.scrollLeft = rr.inputState.lastScrollLeft), HZ(rr)
    }, zZ.blur = rr => {
      rr.observer.clearSelectionRange(), HZ(rr)
    }, zZ.compositionstart = zZ.compositionupdate = rr => {
      rr.observer.editContext || (null == rr.inputState.compositionFirstChange && (rr.inputState.compositionFirstChange = !0), rr.inputState.composing < 0 && (rr.inputState.composing = 0))
    }, zZ.compositionend = rr => {
      rr.observer.editContext || (rr.inputState.composing = -1, rr.inputState.compositionEndedAt = Date.now(), rr.inputState.compositionPendingKey = !0, rr.inputState.compositionPendingChange = rr.observer.pendingRecords().length > 0, rr.inputState.compositionFirstChange = null, Br.chrome && Br.android ? rr.observer.flushSoon() : rr.inputState.compositionPendingChange ? Promise.resolve().then((() => rr.observer.flush())) : setTimeout((() => {
        rr.inputState.composing < 0 && rr.docView.hasComposition && rr.update([])
      }), 50))
    }, zZ.contextmenu = rr => {
      rr.inputState.lastContextMenu = Date.now()
    }, hZ.beforeinput = (rr, Sr) => {
      var Qr, Zr;
      if ("insertText" != Sr.inputType && "insertCompositionText" != Sr.inputType || (rr.inputState.insertingText = Sr.data, rr.inputState.insertingTextAt = Date.now()), "insertReplacementText" == Sr.inputType && rr.observer.editContext) {
        let Zr = null === (Qr = Sr.dataTransfer) || void 0 === Qr ? void 0 : Qr.getData("text/plain"),
          Wr = Sr.getTargetRanges();
        if (Zr && Wr.length) {
          let Sr = Wr[0],
            Qr = rr.posAtDOM(Sr.startContainer, Sr.startOffset),
            ar = rr.posAtDOM(Sr.endContainer, Sr.endOffset);
          return aZ(rr, {
            from: Qr,
            to: ar,
            insert: rr.state.toText(Zr)
          }, null), !0
        }
      }
      let Wr;
      if (Br.chrome && Br.android && (Wr = xZ.find((rr => rr.inputType == Sr.inputType))) && (rr.observer.delayAndroidKey(Wr.key, Wr.keyCode), "Backspace" == Wr.key || "Delete" == Wr.key)) {
        let Sr = (null === (Zr = window.visualViewport) || void 0 === Zr ? void 0 : Zr.height) || 0;
        setTimeout((() => {
          var Qr;
          ((null === (Qr = window.visualViewport) || void 0 === Qr ? void 0 : Qr.height) || 0) > Sr + 10 && rr.hasFocus && (rr.contentDOM.blur(), rr.focus())
        }), 100)
      }
      return Br.ios && "deleteContentForward" == Sr.inputType && rr.observer.flushSoon(), Br.safari && "insertText" == Sr.inputType && rr.inputState.composing >= 0 && setTimeout((() => zZ.compositionend(rr, Sr)), 20), !1
    };
    const qZ = new Set;
    const RZ = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let gZ = !1;

    function CZ() {
      gZ = !1
    }
    class MZ {
      constructor(rr) {
        this.lineWrapping = rr, this.doc = Zr.V.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(rr, Sr) {
        let Qr = this.doc.lineAt(Sr).number - this.doc.lineAt(rr).number + 1;
        return this.lineWrapping && (Qr += Math.max(0, Math.ceil((Sr - rr - Qr * this.lineLength * .5) / this.lineLength))), this.lineHeight * Qr
      }
      heightForLine(rr) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((rr - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(rr) {
        return this.doc = rr, this
      }
      mustRefreshForWrapping(rr) {
        return RZ.indexOf(rr) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(rr) {
        let Sr = !1;
        for (let Qr = 0; Qr < rr.length; Qr++) {
          let Zr = rr[Qr];
          Zr < 0 ? Qr++ : this.heightSamples[Math.floor(10 * Zr)] || (Sr = !0, this.heightSamples[Math.floor(10 * Zr)] = !0)
        }
        return Sr
      }
      refresh(rr, Sr, Qr, Zr, Wr, ar) {
        let jr = RZ.indexOf(rr) > -1,
          Ir = Math.abs(Sr - this.lineHeight) > .3 || this.lineWrapping != jr || Math.abs(Qr - this.charWidth) > .1;
        if (this.lineWrapping = jr, this.lineHeight = Sr, this.charWidth = Qr, this.textHeight = Zr, this.lineLength = Wr, Ir) {
          this.heightSamples = {};
          for (let rr = 0; rr < ar.length; rr++) {
            let Sr = ar[rr];
            Sr < 0 ? rr++ : this.heightSamples[Math.floor(10 * Sr)] = !0
          }
        }
        return Ir
      }
    }
    class GZ {
      constructor(rr, Sr) {
        this.from = rr, this.heights = Sr, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class kZ {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.from = rr, this.length = Sr, this.top = Qr, this.height = Zr, this._content = Wr
      }
      get type() {
        return "number" == typeof this._content ? Pr.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof gr ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(rr) {
        let Sr = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(rr._content) ? rr._content : [rr]);
        return new kZ(this.from, this.length + rr.length, this.top, this.height + rr.height, Sr)
      }
    }
    var AZ = function(rr) {
      return rr[rr.ByPos = 0] = "ByPos", rr[rr.ByHeight = 1] = "ByHeight", rr[rr.ByPosNoHeight = 2] = "ByPosNoHeight", rr
    }(AZ || (AZ = {}));
    const VZ = .001;
    class iZ {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = rr, this.height = Sr, this.flags = Qr
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(rr) {
        this.flags = (rr ? 2 : 0) | -3 & this.flags
      }
      setHeight(rr) {
        this.height != rr && (Math.abs(this.height - rr) > VZ && (gZ = !0), this.height = rr)
      }
      replace(rr, Sr, Qr) {
        return iZ.of(Qr)
      }
      decomposeLeft(rr, Sr) {
        Sr.push(this)
      }
      decomposeRight(rr, Sr) {
        Sr.push(this)
      }
      applyChanges(rr, Sr, Qr, Zr) {
        let Wr = this,
          ar = Qr.doc;
        for (let jr = Zr.length - 1; jr >= 0; jr--) {
          let {
            fromA: Ir,
            toA: fr,
            fromB: Er,
            toB: pr
          } = Zr[jr], xr = Wr.lineAt(Ir, AZ.ByPosNoHeight, Qr.setDoc(Sr), 0, 0), mr = xr.to >= fr ? xr : Wr.lineAt(fr, AZ.ByPosNoHeight, Qr, 0, 0);
          for (pr += mr.to - fr, fr = mr.to; jr > 0 && xr.from <= Zr[jr - 1].toA;) Ir = Zr[jr - 1].fromA, Er = Zr[jr - 1].fromB, jr--, Ir < xr.from && (xr = Wr.lineAt(Ir, AZ.ByPosNoHeight, Qr, 0, 0));
          Er += xr.from - Ir, Ir = xr.from;
          let Nr = dZ.build(Qr.setDoc(ar), rr, Er, pr);
          Wr = wZ(Wr, Wr.replace(Ir, fr, Nr))
        }
        return Wr.updateHeight(Qr, 0)
      }
      static empty() {
        return new oZ(0, 0, 0)
      }
      static of (rr) {
        if (1 == rr.length) return rr[0];
        let Sr = 0,
          Qr = rr.length,
          Zr = 0,
          Wr = 0;
        for (;;)
          if (Sr == Qr)
            if (Zr > 2 * Wr) {
              let Wr = rr[Sr - 1];
              Wr.break ? rr.splice(--Sr, 1, Wr.left, null, Wr.right) : rr.splice(--Sr, 1, Wr.left, Wr.right), Qr += 1 + Wr.break, Zr -= Wr.size
            } else {
              if (!(Wr > 2 * Zr)) break;
              {
                let Sr = rr[Qr];
                Sr.break ? rr.splice(Qr, 1, Sr.left, null, Sr.right) : rr.splice(Qr, 1, Sr.left, Sr.right), Qr += 2 + Sr.break, Wr -= Sr.size
              }
            }
        else if (Zr < Wr) {
          let Qr = rr[Sr++];
          Qr && (Zr += Qr.size)
        } else {
          let Sr = rr[--Qr];
          Sr && (Wr += Sr.size)
        }
        let ar = 0;
        return null == rr[Sr - 1] ? (ar = 1, Sr--) : null == rr[Sr] && (ar = 1, Qr++), new JZ(iZ.of(rr.slice(0, Sr)), ar, iZ.of(rr.slice(Qr)))
      }
    }

    function wZ(rr, Sr) {
      return rr == Sr ? rr : (rr.constructor != Sr.constructor && (gZ = !0), Sr)
    }
    iZ.prototype.size = 1;
    const cZ = Hr.replace({});
    class FZ extends iZ {
      constructor(rr, Sr, Qr) {
        super(rr, Sr), this.deco = Qr, this.spaceAbove = 0
      }
      mainBlock(rr, Sr) {
        return new kZ(Sr, this.length, rr + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(rr, Sr, Qr, Zr) {
        return this.spaceAbove && rr < Qr + this.spaceAbove ? new kZ(Zr, 0, Qr, this.spaceAbove, cZ) : this.mainBlock(Qr, Zr)
      }
      lineAt(rr, Sr, Qr, Zr, Wr) {
        let ar = this.mainBlock(Zr, Wr);
        return this.spaceAbove ? this.blockAt(0, Qr, Zr, Wr).join(ar) : ar
      }
      forEachLine(rr, Sr, Qr, Zr, Wr, ar) {
        rr <= Wr + this.length && Sr >= Wr && ar(this.lineAt(0, AZ.ByPos, Qr, Zr, Wr))
      }
      setMeasuredHeight(rr) {
        let Sr = rr.heights[rr.index++];
        Sr < 0 ? (this.spaceAbove = -Sr, Sr = rr.heights[rr.index++]) : this.spaceAbove = 0, this.setHeight(Sr)
      }
      updateHeight(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 3 ? arguments[3] : void 0;
        return Qr && Qr.from <= Sr && Qr.more && this.setMeasuredHeight(Qr), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class oZ extends FZ {
      constructor(rr, Sr, Qr) {
        super(rr, Sr, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = Qr
      }
      mainBlock(rr, Sr) {
        return new kZ(Sr, this.length, rr + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(rr, Sr, Qr) {
        let Zr = Qr[0];
        return 1 == Qr.length && (Zr instanceof oZ || Zr instanceof bZ && 4 & Zr.flags) && Math.abs(this.length - Zr.length) < 10 ? (Zr instanceof bZ ? Zr = new oZ(Zr.length, this.height, this.spaceAbove) : Zr.height = this.height, this.outdated || (Zr.outdated = !1), Zr) : iZ.of(Qr)
      }
      updateHeight(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        return Zr && Zr.from <= Sr && Zr.more ? this.setMeasuredHeight(Zr) : (Qr || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, rr.heightForLine(this.length - this.collapsed)) + this.breaks * rr.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class bZ extends iZ {
      constructor(rr) {
        super(rr, 0)
      }
      heightMetrics(rr, Sr) {
        let Qr, Zr = rr.doc.lineAt(Sr).number,
          Wr = rr.doc.lineAt(Sr + this.length).number,
          ar = Wr - Zr + 1,
          jr = 0;
        if (rr.lineWrapping) {
          let Sr = Math.min(this.height, rr.lineHeight * ar);
          Qr = Sr / ar, this.length > ar + 1 && (jr = (this.height - Sr) / (this.length - ar - 1))
        } else Qr = this.height / ar;
        return {
          firstLine: Zr,
          lastLine: Wr,
          perLine: Qr,
          perChar: jr
        }
      }
      blockAt(rr, Sr, Qr, Zr) {
        let {
          firstLine: Wr,
          lastLine: ar,
          perLine: jr,
          perChar: Ir
        } = this.heightMetrics(Sr, Zr);
        if (Sr.lineWrapping) {
          let Wr = Zr + (rr < Sr.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (rr - Qr) / this.height)) * this.length)),
            ar = Sr.doc.lineAt(Wr),
            fr = jr + ar.length * Ir,
            Er = Math.max(Qr, rr - fr / 2);
          return new kZ(ar.from, ar.length, Er, fr, 0)
        } {
          let Zr = Math.max(0, Math.min(ar - Wr, Math.floor((rr - Qr) / jr))),
            {
              from: Ir,
              length: fr
            } = Sr.doc.line(Wr + Zr);
          return new kZ(Ir, fr, Qr + jr * Zr, jr, 0)
        }
      }
      lineAt(rr, Sr, Qr, Zr, Wr) {
        if (Sr == AZ.ByHeight) return this.blockAt(rr, Qr, Zr, Wr);
        if (Sr == AZ.ByPosNoHeight) {
          let {
            from: Sr,
            to: Zr
          } = Qr.doc.lineAt(rr);
          return new kZ(Sr, Zr - Sr, 0, 0, 0)
        }
        let {
          firstLine: ar,
          perLine: jr,
          perChar: Ir
        } = this.heightMetrics(Qr, Wr), fr = Qr.doc.lineAt(rr), Er = jr + fr.length * Ir, pr = fr.number - ar, xr = Zr + jr * pr + Ir * (fr.from - Wr - pr);
        return new kZ(fr.from, fr.length, Math.max(Zr, Math.min(xr, Zr + this.height - Er)), Er, 0)
      }
      forEachLine(rr, Sr, Qr, Zr, Wr, ar) {
        rr = Math.max(rr, Wr), Sr = Math.min(Sr, Wr + this.length);
        let {
          firstLine: jr,
          perLine: Ir,
          perChar: fr
        } = this.heightMetrics(Qr, Wr);
        for (let Er = rr, pr = Zr; Er <= Sr;) {
          let Sr = Qr.doc.lineAt(Er);
          if (Er == rr) {
            let Qr = Sr.number - jr;
            pr += Ir * Qr + fr * (rr - Wr - Qr)
          }
          let Zr = Ir + fr * Sr.length;
          ar(new kZ(Sr.from, Sr.length, pr, Zr, 0)), pr += Zr, Er = Sr.to + 1
        }
      }
      replace(rr, Sr, Qr) {
        let Zr = this.length - Sr;
        if (Zr > 0) {
          let rr = Qr[Qr.length - 1];
          rr instanceof bZ ? Qr[Qr.length - 1] = new bZ(rr.length + Zr) : Qr.push(null, new bZ(Zr - 1))
        }
        if (rr > 0) {
          let Sr = Qr[0];
          Sr instanceof bZ ? Qr[0] = new bZ(rr + Sr.length) : Qr.unshift(new bZ(rr - 1), null)
        }
        return iZ.of(Qr)
      }
      decomposeLeft(rr, Sr) {
        Sr.push(new bZ(rr - 1), null)
      }
      decomposeRight(rr, Sr) {
        Sr.push(null, new bZ(this.length - rr - 1))
      }
      updateHeight(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 ? arguments[3] : void 0,
          Wr = Sr + this.length;
        if (Zr && Zr.from <= Sr + this.length && Zr.more) {
          let Qr = [],
            ar = Math.max(Sr, Zr.from),
            jr = -1;
          for (Zr.from > Sr && Qr.push(new bZ(Zr.from - Sr - 1).updateHeight(rr, Sr)); ar <= Wr && Zr.more;) {
            let Sr = rr.doc.lineAt(ar).length;
            Qr.length && Qr.push(null);
            let Wr = Zr.heights[Zr.index++],
              Ir = 0;
            Wr < 0 && (Ir = -Wr, Wr = Zr.heights[Zr.index++]), -1 == jr ? jr = Wr : Math.abs(Wr - jr) >= VZ && (jr = -2);
            let fr = new oZ(Sr, Wr, Ir);
            fr.outdated = !1, Qr.push(fr), ar += Sr + 1
          }
          ar <= Wr && Qr.push(null, new bZ(Wr - ar).updateHeight(rr, ar));
          let Ir = iZ.of(Qr);
          return (jr < 0 || Math.abs(Ir.height - this.height) >= VZ || Math.abs(jr - this.heightMetrics(rr, Sr).perLine) >= VZ) && (gZ = !0), wZ(this, Ir)
        }
        return (Qr || this.outdated) && (this.setHeight(rr.heightForGap(Sr, Sr + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class JZ extends iZ {
      constructor(rr, Sr, Qr) {
        super(rr.length + Sr + Qr.length, rr.height + Qr.height, Sr | (rr.outdated || Qr.outdated ? 2 : 0)), this.left = rr, this.right = Qr, this.size = rr.size + Qr.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(rr, Sr, Qr, Zr) {
        let Wr = Qr + this.left.height;
        return rr < Wr ? this.left.blockAt(rr, Sr, Qr, Zr) : this.right.blockAt(rr, Sr, Wr, Zr + this.left.length + this.break)
      }
      lineAt(rr, Sr, Qr, Zr, Wr) {
        let ar = Zr + this.left.height,
          jr = Wr + this.left.length + this.break,
          Ir = Sr == AZ.ByHeight ? rr < ar : rr < jr,
          fr = Ir ? this.left.lineAt(rr, Sr, Qr, Zr, Wr) : this.right.lineAt(rr, Sr, Qr, ar, jr);
        if (this.break || (Ir ? fr.to < jr : fr.from > jr)) return fr;
        let Er = Sr == AZ.ByPosNoHeight ? AZ.ByPosNoHeight : AZ.ByPos;
        return Ir ? fr.join(this.right.lineAt(jr, Er, Qr, ar, jr)) : this.left.lineAt(jr, Er, Qr, Zr, Wr).join(fr)
      }
      forEachLine(rr, Sr, Qr, Zr, Wr, ar) {
        let jr = Zr + this.left.height,
          Ir = Wr + this.left.length + this.break;
        if (this.break) rr < Ir && this.left.forEachLine(rr, Sr, Qr, Zr, Wr, ar), Sr >= Ir && this.right.forEachLine(rr, Sr, Qr, jr, Ir, ar);
        else {
          let fr = this.lineAt(Ir, AZ.ByPos, Qr, Zr, Wr);
          rr < fr.from && this.left.forEachLine(rr, fr.from - 1, Qr, Zr, Wr, ar), fr.to >= rr && fr.from <= Sr && ar(fr), Sr > fr.to && this.right.forEachLine(fr.to + 1, Sr, Qr, jr, Ir, ar)
        }
      }
      replace(rr, Sr, Qr) {
        let Zr = this.left.length + this.break;
        if (Sr < Zr) return this.balanced(this.left.replace(rr, Sr, Qr), this.right);
        if (rr > this.left.length) return this.balanced(this.left, this.right.replace(rr - Zr, Sr - Zr, Qr));
        let Wr = [];
        rr > 0 && this.decomposeLeft(rr, Wr);
        let ar = Wr.length;
        for (let jr of Qr) Wr.push(jr);
        if (rr > 0 && DZ(Wr, ar - 1), Sr < this.length) {
          let rr = Wr.length;
          this.decomposeRight(Sr, Wr), DZ(Wr, rr)
        }
        return iZ.of(Wr)
      }
      decomposeLeft(rr, Sr) {
        let Qr = this.left.length;
        if (rr <= Qr) return this.left.decomposeLeft(rr, Sr);
        Sr.push(this.left), this.break && (Qr++, rr >= Qr && Sr.push(null)), rr > Qr && this.right.decomposeLeft(rr - Qr, Sr)
      }
      decomposeRight(rr, Sr) {
        let Qr = this.left.length,
          Zr = Qr + this.break;
        if (rr >= Zr) return this.right.decomposeRight(rr - Zr, Sr);
        rr < Qr && this.left.decomposeRight(rr, Sr), this.break && rr < Zr && Sr.push(null), Sr.push(this.right)
      }
      balanced(rr, Sr) {
        return rr.size > 2 * Sr.size || Sr.size > 2 * rr.size ? iZ.of(this.break ? [rr, null, Sr] : [rr, Sr]) : (this.left = wZ(this.left, rr), this.right = wZ(this.right, Sr), this.setHeight(rr.height + Sr.height), this.outdated = rr.outdated || Sr.outdated, this.size = rr.size + Sr.size, this.length = rr.length + this.break+Sr.length, this)
      }
      updateHeight(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: Wr,
            right: ar
          } = this,
          jr = Sr + Wr.length + this.break,
          Ir = null;
        return Zr && Zr.from <= Sr + Wr.length && Zr.more ? Ir = Wr = Wr.updateHeight(rr, Sr, Qr, Zr) : Wr.updateHeight(rr, Sr, Qr), Zr && Zr.from <= jr + ar.length && Zr.more ? Ir = ar = ar.updateHeight(rr, jr, Qr, Zr) : ar.updateHeight(rr, jr, Qr), Ir ? this.balanced(Wr, ar) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function DZ(rr, Sr) {
      let Qr, Zr;
      null == rr[Sr] && (Qr = rr[Sr - 1]) instanceof bZ && (Zr = rr[Sr + 1]) instanceof bZ && rr.splice(Sr - 1, 3, new bZ(Qr.length + 1 + Zr.length))
    }
    class dZ {
      constructor(rr, Sr) {
        this.pos = rr, this.oracle = Sr, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = rr
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(rr, Sr) {
        if (this.lineStart > -1) {
          let rr = Math.min(Sr, this.lineEnd),
            Qr = this.nodes[this.nodes.length - 1];
          Qr instanceof oZ ? Qr.length += rr - this.pos : (rr > this.pos || !this.isCovered) && this.nodes.push(new oZ(rr - this.pos, -1, 0)), this.writtenTo = rr, Sr > rr && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = Sr
      }
      point(rr, Sr, Qr) {
        if (rr < Sr || Qr.heightRelevant) {
          let Zr = Qr.widget ? Qr.widget.estimatedHeight : 0,
            Wr = Qr.widget ? Qr.widget.lineBreaks : 0;
          Zr < 0 && (Zr = this.oracle.lineHeight);
          let ar = Sr - rr;
          Qr.block ? this.DSr(new FZ(ar, Zr, Qr)) : (ar || Wr || Zr >= 5) && this.addLineDeco(Zr, Wr, ar)
        } else Sr > rr && this.span(rr, Sr);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: rr,
          to: Sr
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = rr, this.lineEnd = Sr, this.writtenTo < rr && ((this.writtenTo < rr - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, rr - 1)), this.nodes.push(null)), this.pos > rr && this.nodes.push(new oZ(this.pos - rr, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(rr, Sr) {
        let Qr = new bZ(Sr - rr);
        return this.oracle.doc.lineAt(rr).to == Sr && (Qr.flags |= 4), Qr
      }
      ensureLine() {
        this.enterLine();
        let rr = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (rr instanceof oZ) return rr;
        let Sr = new oZ(0, -1, 0);
        return this.nodes.push(Sr), Sr
      }
      DSr(rr) {
        this.enterLine();
        let Sr = rr.deco;
        Sr && Sr.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(rr), this.writtenTo = this.pos = this.pos + rr.length, Sr && Sr.endSide > 0 && (this.covering = rr)
      }
      addLineDeco(rr, Sr, Qr) {
        let Zr = this.ensureLine();
        Zr.length += Qr, Zr.collapsed += Qr, Zr.widgetHeight = Math.max(Zr.widgetHeight, rr), Zr.breaks += Sr, this.writtenTo = this.pos = this.pos + Qr
      }
      finish(rr) {
        let Sr = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || Sr instanceof oZ || this.isCovered ? (this.writtenTo < this.pos || null == Sr) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new oZ(0, -1, 0));
        let Qr = rr;
        for (let Zr of this.nodes) Zr instanceof oZ && Zr.updateHeight(this.oracle, Qr), Qr += Zr ? Zr.length : 1;
        return this.nodes
      }
      static build(rr, Sr, Qr, Wr) {
        let ar = new dZ(Qr, rr);
        return Zr.H.spans(Sr, Qr, Wr, ar, 0), ar.finish(Qr)
      }
    }
    class sZ {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(rr, Sr, Qr, Zr) {
        (rr < Sr || Qr && Qr.heightRelevant || Zr && Zr.heightRelevant) && Mr(rr, Sr, this.changes, 5)
      }
    }

    function uZ(rr, Sr) {
      let Qr = rr.getBoundingClientRect(),
        Zr = rr.ownerDocument,
        Wr = Zr.defaultView || window,
        ar = Math.max(0, Qr.left),
        jr = Math.min(Wr.innerWidth, Qr.right),
        Ir = Math.max(0, Qr.top),
        fr = Math.min(Wr.innerHeight, Qr.bottom);
      for (let Er = rr.parentNode; Er && Er != Zr.body;)
        if (1 == Er.nodeType) {
          let Sr = Er,
            Qr = window.getComputedStyle(Sr);
          if ((Sr.scrollHeight > Sr.clientHeight || Sr.scrollWidth > Sr.clientWidth) && "visible" != Qr.overflow) {
            let Qr = Sr.getBoundingClientRect();
            ar = Math.max(ar, Qr.left), jr = Math.min(jr, Qr.right), Ir = Math.max(Ir, Qr.top), fr = Math.min(Er == rr.parentNode ? Wr.innerHeight : fr, Qr.bottom)
          }
          Er = "absolute" == Qr.position || "fixed" == Qr.position ? Sr.offsetParent : Sr.parentNode
        } else {
          if (11 != Er.nodeType) break;
          Er = Er.host
        } return {
        left: ar - Qr.left,
        right: Math.max(ar, jr) - Qr.left,
        top: Ir - (Qr.top + Sr),
        bottom: Math.max(Ir, fr) - (Qr.top + Sr)
      }
    }

    function rW(rr, Sr) {
      let Qr = rr.getBoundingClientRect();
      return {
        left: 0,
        right: Qr.right - Qr.left,
        top: Sr,
        bottom: Qr.bottom - (Qr.top + Sr)
      }
    }
    class SW {
      constructor(rr, Sr, Qr, Zr) {
        this.from = rr, this.to = Sr, this.size = Qr, this.displaySize = Zr
      }
      static same(rr, Sr) {
        if (rr.length != Sr.length) return !1;
        for (let Qr = 0; Qr < rr.length; Qr++) {
          let Zr = rr[Qr],
            Wr = Sr[Qr];
          if (Zr.from != Wr.from || Zr.to != Wr.to || Zr.size != Wr.size) return !1
        }
        return !0
      }
      draw(rr, Sr) {
        return Hr.replace({
          widget: new QW(this.displaySize * (Sr ? rr.scaleY : rr.scaleX), Sr)
        }).range(this.from, this.to)
      }
    }
    class QW extends Xr {
      constructor(rr, Sr) {
        super(), this.size = rr, this.vertical = Sr
      }
      eq(rr) {
        return rr.size == this.size && rr.vertical == this.vertical
      }
      toDOM() {
        let rr = document.createElement("div");
        return this.vertical ? rr.style.height = this.size + "px" : (rr.style.width = this.size + "px", rr.style.height = "2px", rr.style.display = "inline-block"), rr
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class ZW {
      constructor(rr, Sr) {
        this.view = rr, this.state = Sr, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = IW, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = ES.LTR, this.Brr = [], this.mustEnforceCursorAssoc = !1;
        let Qr = Sr.facet(uS).some((rr => "function" != typeof rr && "cm-lineWrapping" == rr.class));
        this.heightOracle = new MZ(Qr), this.stateDeco = fW(Sr), this.heightMap = iZ.empty().applyChanges(this.stateDeco, Zr.V.empty, this.heightOracle.setDoc(Sr.doc), [new EQ(0, 0, 0, Sr.doc.length)]);
        for (let Zr = 0; Zr < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Zr++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Hr.set(this.lineGaps.map((rr => rr.draw(this, !1)))), this.scrollParent = rr.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let rr = [this.viewport],
          {
            main: Sr
          } = this.state.selection;
        for (let Qr = 0; Qr <= 1; Qr++) {
          let Zr = Qr ? Sr.head : Sr.anchor;
          if (!rr.some((rr => {
              let {
                from: Sr,
                to: Qr
              } = rr;
              return Zr >= Sr && Zr <= Qr
            }))) {
            let {
              from: Sr,
              to: Qr
            } = this.lineBlockAt(Zr);
            rr.push(new WW(Sr, Qr))
          }
        }
        return this.viewports = rr.sort(((rr, Sr) => rr.from - Sr.from)), this.updateScaler()
      }
      updateScaler() {
        let rr = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? IW : new EW(this.heightOracle, this.heightMap, this.viewports), rr.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (rr => {
          this.viewportLines.push(pW(rr, this.scaler))
        }))
      }
      update(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = rr.state;
        let Qr = this.stateDeco;
        this.stateDeco = fW(this.state);
        let Wr = rr.changedRanges,
          ar = EQ.extendWithRanges(Wr, function(rr, Sr, Qr) {
            let Wr = new sZ;
            return Zr.H.compare(rr, Sr, Qr, Wr, 0), Wr.changes
          }(Qr, this.stateDeco, rr ? rr.changes : Zr.ChangeSet.empty(this.state.doc.length))),
          jr = this.heightMap.height,
          Ir = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        CZ(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, rr.startState.doc, this.heightOracle.setDoc(this.state.doc), ar), (this.heightMap.height != jr || gZ) && (rr.flags |= 2), Ir ? (this.scrollAnchorPos = rr.changes.mapPos(Ir.from, -1), this.scrollAnchorHeight = Ir.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = jr);
        let fr = ar.length ? this.mapViewport(this.viewport, rr.changes) : this.viewport;
        (Sr && (Sr.range.head < fr.from || Sr.range.head > fr.to) || !this.viewportIsAppropriate(fr)) && (fr = this.getViewport(0, Sr));
        let Er = fr.from != this.viewport.from || fr.to != this.viewport.to;
        this.viewport = fr, rr.flags |= this.updateForViewport(), (Er || !rr.changes.empty || 2 & rr.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, rr.changes))), rr.flags |= this.computeVisibleRanges(rr.changes), Sr && (this.scrollTarget = Sr), !this.mustEnforceCursorAssoc && (rr.selectionSet || rr.focusChanged) && rr.view.lineWrapping && rr.state.selection.main.empty && rr.state.selection.main.assoc && !rr.state.facet(AS) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: rr
        } = this, Sr = rr.contentDOM, Qr = window.getComputedStyle(Sr), Wr = this.heightOracle, ar = Qr.whiteSpace;
        this.defaultTextDirection = "rtl" == Qr.direction ? ES.RTL : ES.LTR;
        let jr = this.heightOracle.mustRefreshForWrapping(ar) || "refresh" === this.mustMeasureContent,
          Ir = Sr.getBoundingClientRect(),
          fr = jr || this.mustMeasureContent || this.contentDOMHeight != Ir.height;
        this.contentDOMHeight = Ir.height, this.mustMeasureContent = !1;
        let Er = 0,
          pr = 0;
        if (Ir.width && Ir.height) {
          let {
            scaleX: rr,
            scaleY: Qr
          } = dr(Sr, Ir);
          (rr > .005 && Math.abs(this.scaleX - rr) > .005 || Qr > .005 && Math.abs(this.scaleY - Qr) > .005) && (this.scaleX = rr, this.scaleY = Qr, Er |= 16, jr = fr = !0)
        }
        let xr = (parseInt(Qr.paddingTop) || 0) * this.scaleY,
          mr = (parseInt(Qr.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == xr && this.paddingBottom == mr || (this.paddingTop = xr, this.paddingBottom = mr, Er |= 18), this.editorWidth != rr.scrollDOM.clientWidth && (Wr.lineWrapping && (fr = !0), this.editorWidth = rr.scrollDOM.clientWidth, Er |= 16);
        let Nr = sr(this.view.contentDOM, !1).y;
        Nr != this.scrollParent && (this.scrollParent = Nr, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let Ur = this.getScrollOffset();
        this.scrollOffset != Ur && (this.scrollAnchorHeight = -1, this.scrollOffset = Ur), this.scrolledToBottom = aS(this.scrollParent || rr.win);
        let tr = (this.printing ? rW : uZ)(Sr, this.paddingTop),
          hr = tr.top - this.pixelViewport.top,
          zr = tr.bottom - this.pixelViewport.bottom;
        this.pixelViewport = tr;
        let Yr = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (Yr != this.inView && (this.inView = Yr, Yr && (fr = !0)), !this.inView && !this.scrollTarget && ! function(rr) {
            let Sr = rr.getBoundingClientRect(),
              Qr = rr.ownerDocument.defaultView || window;
            return Sr.left < Qr.innerWidth && Sr.right > 0 && Sr.top < Qr.innerHeight && Sr.bottom > 0
          }(rr.dom)) return 0;
        let nr = Ir.width;
        if (this.contentDOMWidth == nr && this.editorHeight == rr.scrollDOM.clientHeight || (this.contentDOMWidth = Ir.width, this.editorHeight = rr.scrollDOM.clientHeight, Er |= 16), fr) {
          let Sr = rr.docView.measureVisibleLineHeights(this.viewport);
          if (Wr.mustRefreshForHeights(Sr) && (jr = !0), jr || Wr.lineWrapping && Math.abs(nr - this.contentDOMWidth) > Wr.charWidth) {
            let {
              lineHeight: Qr,
              charWidth: Zr,
              textHeight: Ir
            } = rr.docView.measureTextSize();
            jr = Qr > 0 && Wr.refresh(ar, Qr, Zr, Ir, Math.max(5, nr / Zr), Sr), jr && (rr.docView.minWidth = 0, Er |= 16)
          }
          hr > 0 && zr > 0 ? pr = Math.max(hr, zr) : hr < 0 && zr < 0 && (pr = Math.min(hr, zr)), CZ();
          for (let Qr of this.viewports) {
            let ar = Qr.from == this.viewport.from ? Sr : rr.docView.measureVisibleLineHeights(Qr);
            this.heightMap = (jr ? iZ.empty().applyChanges(this.stateDeco, Zr.V.empty, this.heightOracle, [new EQ(0, 0, 0, rr.state.doc.length)]) : this.heightMap).updateHeight(Wr, 0, jr, new GZ(Qr.from, ar))
          }
          gZ && (Er |= 2)
        }
        let er = !this.viewportIsAppropriate(this.viewport, pr) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return er && (2 & Er && (Er |= this.updateScaler()), this.viewport = this.getViewport(pr, this.scrollTarget), Er |= this.updateForViewport()), (2 & Er || er) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(jr ? [] : this.lineGaps, rr)), Er |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, rr.docView.enforceCursorAssoc()), Er
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(rr, Sr) {
        let Qr = .5 - Math.max(-.5, Math.min(.5, rr / 1e3 / 2)),
          Zr = this.heightMap,
          Wr = this.heightOracle,
          {
            visibleTop: ar,
            visibleBottom: jr
          } = this,
          Ir = new WW(Zr.lineAt(ar - 1e3 * Qr, AZ.ByHeight, Wr, 0, 0).from, Zr.lineAt(jr + 1e3 * (1 - Qr), AZ.ByHeight, Wr, 0, 0).to);
        if (Sr) {
          let {
            head: rr
          } = Sr.range;
          if (rr < Ir.from || rr > Ir.to) {
            let Qr, ar = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              jr = Zr.lineAt(rr, AZ.ByPos, Wr, 0, 0);
            Qr = "center" == Sr.y ? (jr.top + jr.bottom) / 2 - ar / 2 : "start" == Sr.y || "nearest" == Sr.y && rr < Ir.from ? jr.top : jr.bottom - ar, Ir = new WW(Zr.lineAt(Qr - 500, AZ.ByHeight, Wr, 0, 0).from, Zr.lineAt(Qr + ar + 500, AZ.ByHeight, Wr, 0, 0).to)
          }
        }
        return Ir
      }
      mapViewport(rr, Sr) {
        let Qr = Sr.mapPos(rr.from, -1),
          Zr = Sr.mapPos(rr.to, 1);
        return new WW(this.heightMap.lineAt(Qr, AZ.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Zr, AZ.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(rr) {
        let {
          from: Sr,
          to: Qr
        } = rr, Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: Wr
        } = this.heightMap.lineAt(Sr, AZ.ByPos, this.heightOracle, 0, 0), {
          bottom: ar
        } = this.heightMap.lineAt(Qr, AZ.ByPos, this.heightOracle, 0, 0), {
          visibleTop: jr,
          visibleBottom: Ir
        } = this;
        return (0 == Sr || Wr <= jr - Math.max(10, Math.min(-Zr, 250))) && (Qr == this.state.doc.length || ar >= Ir + Math.max(10, Math.min(Zr, 250))) && Wr > jr - 2e3 && ar < Ir + 2e3
      }
      mapLineGaps(rr, Sr) {
        if (!rr.length || Sr.empty) return rr;
        let Qr = [];
        for (let Zr of rr) Sr.touchesRange(Zr.from, Zr.to) || Qr.push(new SW(Sr.mapPos(Zr.from), Sr.mapPos(Zr.to), Zr.size, Zr.displaySize));
        return Qr
      }
      ensureLineGaps(rr, Sr) {
        let Qr = this.heightOracle.lineWrapping,
          Wr = Qr ? 1e4 : 2e3,
          ar = Wr >> 1,
          jr = Wr << 1;
        if (this.defaultTextDirection != ES.LTR && !Qr) return [];
        let Ir = [],
          fr = (Wr, jr, Er, pr) => {
            if (jr - Wr < ar) return;
            let xr = this.state.selection.main,
              mr = [xr.from];
            xr.empty || mr.push(xr.to);
            for (let rr of mr)
              if (rr > Wr && rr < jr) return fr(Wr, rr - 10, Er, pr), void fr(rr + 10, jr, Er, pr);
            let Nr = function(rr, Sr) {
              for (let Qr of rr)
                if (Sr(Qr)) return Qr;
              return
            }(rr, (rr => rr.from >= Er.from && rr.to <= Er.to && Math.abs(rr.from - Wr) < ar && Math.abs(rr.to - jr) < ar && !mr.some((Sr => rr.from < Sr && rr.to > Sr))));
            if (!Nr) {
              if (jr < Er.to && Sr && Qr && Sr.Brr.some((rr => rr.from <= jr && rr.to >= jr))) {
                let rr = Sr.moveToLineBoundary(Zr.m.cursor(jr), !1, !0).head;
                rr > Wr && (jr = rr)
              }
              let rr = this.gapSize(Er, Wr, jr, pr);
              Nr = new SW(Wr, jr, rr, Qr || rr < 2e6 ? rr : 2e6)
            }
            Ir.push(Nr)
          },
          Er = Sr => {
            if (Sr.length < jr || Sr.type != Pr.Text) return;
            let ar = function(rr, Sr, Qr) {
              let Wr = [],
                ar = rr,
                jr = 0;
              Zr.H.spans(Qr, rr, Sr, {
                span() {},
                point(rr, Sr) {
                  rr > ar && (Wr.push({
                    from: ar,
                    to: rr
                  }), jr += rr - ar), ar = Sr
                }
              }, 20), ar < Sr && (Wr.push({
                from: ar,
                to: Sr
              }), jr += Sr - ar);
              return {
                total: jr,
                yh: Wr
              }
            }(Sr.from, Sr.to, this.stateDeco);
            if (ar.total < jr) return;
            let Ir, Er, pr = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (Qr) {
              let rr, Qr, Zr = Wr / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != pr) {
                let Wr = jW(ar, pr),
                  jr = ((this.visibleBottom - this.visibleTop) / 2 + Zr) / Sr.height;
                rr = Wr - jr, Qr = Wr + jr
              } else rr = (this.visibleTop - Sr.top - Zr) / Sr.height, Qr = (this.visibleBottom - Sr.top + Zr) / Sr.height;
              Ir = aW(ar, rr), Er = aW(ar, Qr)
            } else {
              let Qr = ar.total * this.heightOracle.charWidth,
                Zr = Wr * this.heightOracle.charWidth,
                jr = 0;
              if (Qr > 2e6)
                for (let Wr of rr) Wr.from >= Sr.from && Wr.from < Sr.to && Wr.size != Wr.displaySize && Wr.from * this.heightOracle.charWidth + jr < this.pixelViewport.left && (jr = Wr.size - Wr.displaySize);
              let fr, xr, mr = this.pixelViewport.left + jr,
                Nr = this.pixelViewport.right + jr;
              if (null != pr) {
                let rr = jW(ar, pr),
                  Sr = ((Nr - mr) / 2 + Zr) / Qr;
                fr = rr - Sr, xr = rr + Sr
              } else fr = (mr - Zr) / Qr, xr = (Nr + Zr) / Qr;
              Ir = aW(ar, fr), Er = aW(ar, xr)
            }
            Ir > Sr.from && fr(Sr.from, Ir, Sr, ar), Er < Sr.to && fr(Er, Sr.to, Sr, ar)
          };
        for (let Zr of this.viewportLines) Array.isArray(Zr.type) ? Zr.type.forEach(Er) : Er(Zr);
        return Ir
      }
      gapSize(rr, Sr, Qr, Zr) {
        let Wr = jW(Zr, Qr) - jW(Zr, Sr);
        return this.heightOracle.lineWrapping ? rr.height * Wr : Zr.total * this.heightOracle.charWidth * Wr
      }
      updateLineGaps(rr) {
        SW.same(rr, this.lineGaps) || (this.lineGaps = rr, this.lineGapDeco = Hr.set(rr.map((rr => rr.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(rr) {
        let Sr = this.stateDeco;
        this.lineGaps.length && (Sr = Sr.concat(this.lineGapDeco));
        let Qr = [];
        Zr.H.spans(Sr, this.viewport.from, this.viewport.to, {
          span(rr, Sr) {
            Qr.push({
              from: rr,
              to: Sr
            })
          },
          point() {}
        }, 20);
        let Wr = 0;
        if (Qr.length != this.Brr.length) Wr = 12;
        else
          for (let Zr = 0; Zr < Qr.length && !(8 & Wr); Zr++) {
            let Sr = this.Brr[Zr],
              ar = Qr[Zr];
            Sr.from == ar.from && Sr.to == ar.to || (Wr |= 4, rr && rr.mapPos(Sr.from, -1) == ar.from && rr.mapPos(Sr.to, 1) == ar.to || (Wr |= 8))
          }
        return this.Brr = Qr, Wr
      }
      lineBlockAt(rr) {
        return rr >= this.viewport.from && rr <= this.viewport.to && this.viewportLines.find((Sr => Sr.from <= rr && Sr.to >= rr)) || pW(this.heightMap.lineAt(rr, AZ.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(rr) {
        return rr >= this.viewportLines[0].top && rr <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((Sr => Sr.top <= rr && Sr.bottom >= rr)) || pW(this.heightMap.lineAt(this.scaler.fromDOM(rr), AZ.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(rr) {
        let Sr = this.lineBlockAtHeight(rr + 8);
        return Sr.from >= this.viewport.from || this.viewportLines[0].top - rr > 200 ? Sr : this.viewportLines[0]
      }
      elementAtHeight(rr) {
        return pW(this.heightMap.blockAt(this.scaler.fromDOM(rr), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class WW {
      constructor(rr, Sr) {
        this.from = rr, this.to = Sr
      }
    }

    function aW(rr, Sr) {
      let {
        total: Qr,
        yh: Zr
      } = rr;
      if (Sr <= 0) return Zr[0].from;
      if (Sr >= 1) return Zr[Zr.length - 1].to;
      let Wr = Math.floor(Qr * Sr);
      for (let ar = 0;; ar++) {
        let {
          from: rr,
          to: Sr
        } = Zr[ar], Qr = Sr - rr;
        if (Wr <= Qr) return rr + Wr;
        Wr -= Qr
      }
    }

    function jW(rr, Sr) {
      let Qr = 0;
      for (let {
          from: Zr,
          to: Wr
        }
        of rr.yh) {
        if (Sr <= Wr) {
          Qr += Sr - Zr;
          break
        }
        Qr += Wr - Zr
      }
      return Qr / rr.total
    }
    const IW = {
      toDOM: rr => rr,
      fromDOM: rr => rr,
      scale: 1,
      eq(rr) {
        return rr == this
      }
    };

    function fW(rr) {
      let Sr = rr.facet(rQ).filter((rr => "function" != typeof rr)),
        Qr = rr.facet(QQ).filter((rr => "function" != typeof rr));
      return Qr.length && Sr.push(Zr.H.join(Qr)), Sr
    }
    class EW {
      constructor(rr, Sr, Qr) {
        let Zr = 0,
          Wr = 0,
          ar = 0;
        this.viewports = Qr.map((Qr => {
          let {
            from: Wr,
            to: ar
          } = Qr, jr = Sr.lineAt(Wr, AZ.ByPos, rr, 0, 0).top, Ir = Sr.lineAt(ar, AZ.ByPos, rr, 0, 0).bottom;
          return Zr += Ir - jr, {
            from: Wr,
            to: ar,
            top: jr,
            bottom: Ir,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Zr) / (Sr.height - Zr);
        for (let jr of this.viewports) jr.domTop = ar + (jr.top - Wr) * this.scale, ar = jr.domBottom = jr.domTop + (jr.bottom - jr.top), Wr = jr.bottom
      }
      toDOM(rr) {
        for (let Sr = 0, Qr = 0, Zr = 0;; Sr++) {
          let Wr = Sr < this.viewports.length ? this.viewports[Sr] : null;
          if (!Wr || rr < Wr.top) return Zr + (rr - Qr) * this.scale;
          if (rr <= Wr.bottom) return Wr.domTop + (rr - Wr.top);
          Qr = Wr.bottom, Zr = Wr.domBottom
        }
      }
      fromDOM(rr) {
        for (let Sr = 0, Qr = 0, Zr = 0;; Sr++) {
          let Wr = Sr < this.viewports.length ? this.viewports[Sr] : null;
          if (!Wr || rr < Wr.domTop) return Qr + (rr - Zr) / this.scale;
          if (rr <= Wr.domBottom) return Wr.top + (rr - Wr.domTop);
          Qr = Wr.bottom, Zr = Wr.domBottom
        }
      }
      eq(rr) {
        return rr instanceof EW && (this.scale == rr.scale && this.viewports.length == rr.viewports.length && this.viewports.every(((Sr, Qr) => Sr.from == rr.viewports[Qr].from && Sr.to == rr.viewports[Qr].to)))
      }
    }

    function pW(rr, Sr) {
      if (1 == Sr.scale) return rr;
      let Qr = Sr.toDOM(rr.top),
        Zr = Sr.toDOM(rr.bottom);
      return new kZ(rr.from, rr.length, Qr, Zr - Qr, Array.isArray(rr._content) ? rr._content.map((rr => pW(rr, Sr))) : rr._content)
    }
    const xW = Zr.u.define({
        combine: rr => rr.join(" ")
      }),
      mW = Zr.u.define({
        combine: rr => rr.indexOf(!0) > -1
      }),
      NW = Wr.d.newName(),
      UW = Wr.d.newName(),
      tW = Wr.d.newName(),
      hW = {
        "&light": "." + UW,
        "&dark": "." + tW
      };

    function zW(rr, Sr, Qr) {
      return new Wr.d(Sr, {
        finish: Sr => /&/.test(Sr) ? Sr.replace(/&\w*/, (Sr => {
          if ("&" == Sr) return rr;
          if (!Qr || !Qr[Sr]) throw new RangeError(`Unsupported selector: ${Sr}`);
          return Qr[Sr]
        })) : rr + " " + Sr
      })
    }
    const YW = zW("." + NW, {
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
      }, hW),
      nW = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      eW = Br.ie && Br.ie_version <= 11;
    class KW {
      constructor(rr) {
        this.view = rr, this.active = !1, this.editContext = null, this.selectionRange = new ur, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = rr.contentDOM, this.observer = new MutationObserver((Sr => {
          for (let rr of Sr) this.queue.push(rr);
          (Br.ie && Br.ie_version <= 11 || Br.ios && rr.composing) && Sr.some((rr => "childList" == rr.type && rr.removedNodes.length || "characterData" == rr.type && rr.oldValue.length > rr.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !Br.android || !1 === rr.constructor.EDIT_CONTEXT || Br.chrome && Br.chrome_version < 126 || (this.editContext = new TW(rr), rr.state.facet(oS) && (rr.contentDOM.editContext = this.editContext.editContext)), eW && (this.onCharData = rr => {
          this.queue.push({
            target: rr.target,
            type: "characterData",
            oldValue: rr.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.kY = this.kY.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var rr;
          (null === (rr = this.view.docView) || void 0 === rr ? void 0 : rr.lastUpdate) < Date.now() - 75 && this.kY()
        })), this.resizeScroll.observe(rr.scrollDOM)), this.addWindowListeners(this.win = rr.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((rr => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), rr.length > 0 && rr[rr.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((rr => {
          rr.length > 0 && rr[rr.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(rr) {
        this.view.inputState.runHandlers("scroll", rr), this.intersecting && this.view.measure()
      }
      onScroll(rr) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(rr)
      }
      kY() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(rr) {
        ("change" != rr.type && rr.type || rr.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(rr) {
        if (this.gapIntersection && (rr.length != this.gaps.length || this.gaps.some(((Sr, Qr) => Sr != rr[Qr])))) {
          this.gapIntersection.disconnect();
          for (let Sr of rr) this.gapIntersection.observe(Sr);
          this.gaps = rr
        }
      }
      onSelectionChange(rr) {
        let Sr = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: Qr
        } = this, Zr = this.selectionRange;
        if (Qr.state.facet(oS) ? Qr.root.activeElement != this.dom : !Vr(this.dom, Zr)) return;
        let Wr = Zr.anchorNode && Qr.docView.tile.nearest(Zr.anchorNode);
        Wr && Wr.isWidget() && Wr.widget.ignoreEvent(rr) ? Sr || (this.selectionChanged = !1) : (Br.ie && Br.ie_version <= 11 || Br.android && Br.chrome) && !Qr.state.selection.main.empty && Zr.focusNode && wr(Zr.focusNode, Zr.focusOffset, Zr.anchorNode, Zr.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: rr
        } = this, Sr = kr(rr.root);
        if (!Sr) return !1;
        let Qr = Br.safari && 11 == rr.root.nodeType && rr.root.activeElement == this.dom && function(rr, Sr) {
          if (Sr.getComposedRanges) {
            let Qr = Sr.getComposedRanges(rr.root)[0];
            if (Qr) return BW(rr, Qr)
          }
          let Qr = null;

          function Zr(rr) {
            rr.preventDefault(), rr.stopImmediatePropagation(), Qr = rr.getTargetRanges()[0]
          }
          return rr.contentDOM.addEventListener("beforeinput", Zr, !0), rr.dom.ownerDocument.execCommand("indent"), rr.contentDOM.removeEventListener("beforeinput", Zr, !0), Qr ? BW(rr, Qr) : null
        }(this.view, Sr) || Sr;
        if (!Qr || this.selectionRange.eq(Qr)) return !1;
        let Zr = Vr(this.dom, Qr);
        return Zr && !this.selectionChanged && rr.inputState.lastFocusTime > Date.now() - 200 && rr.inputState.lastTouchTime < Date.now() - 300 && function(rr, Sr) {
          let Qr = Sr.focusNode,
            Zr = Sr.focusOffset;
          if (!Qr || Sr.anchorNode != Qr || Sr.anchorOffset != Zr) return !1;
          for (Zr = Math.min(Zr, br(Qr));;)
            if (Zr) {
              if (1 != Qr.nodeType) return !1;
              let rr = Qr.childNodes[Zr - 1];
              "false" == rr.contentEditable ? Zr-- : (Qr = rr, Zr = br(Qr))
            } else {
              if (Qr == rr) return !0;
              Zr = cr(Qr), Qr = Qr.parentNode
            }
        }(this.dom, Qr) ? (this.view.inputState.lastFocusTime = 0, rr.docView.updateSelection(), !1) : (this.selectionRange.setRange(Qr), Zr && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(rr, Sr) {
        this.selectionRange.set(rr.node, rr.offset, Sr.node, Sr.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let rr = 0,
          Sr = null;
        for (let Qr = this.dom; Qr;)
          if (1 == Qr.nodeType) !Sr && rr < this.scrollTargets.length && this.scrollTargets[rr] == Qr ? rr++ : Sr || (Sr = this.scrollTargets.slice(0, rr)), Sr && Sr.push(Qr), Qr = Qr.assignedSlot || Qr.parentNode;
          else {
            if (11 != Qr.nodeType) break;
            Qr = Qr.host
          } if (rr < this.scrollTargets.length && !Sr && (Sr = this.scrollTargets.slice(0, rr)), Sr) {
          for (let rr of this.scrollTargets) rr.removeEventListener("scroll", this.onScroll);
          for (let rr of this.scrollTargets = Sr) rr.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(rr) {
        if (!this.active) return rr();
        try {
          return this.stop(), rr()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, nW), eW && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), eW && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(rr, Sr) {
        var Qr;
        if (!this.delayedAndroidKey) {
          let rr = () => {
            let rr = this.delayedAndroidKey;
            if (rr) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = rr.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && rr.force && WS(this.dom, rr.key, rr.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(rr)
        }
        this.delayedAndroidKey && "Enter" != rr || (this.delayedAndroidKey = {
          key: rr,
          keyCode: Sr,
          force: this.lastChange < Date.now() - 50 || !!(null === (Qr = this.delayedAndroidKey) || void 0 === Qr ? void 0 : Qr.force)
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
        for (let rr of this.observer.takeRecords()) this.queue.push(rr);
        return this.queue
      }
      processRecords() {
        let rr = this.pendingRecords();
        rr.length && (this.queue = []);
        let Sr = -1,
          Qr = -1,
          Zr = !1;
        for (let Wr of rr) {
          let rr = this.readMutation(Wr);
          rr && (rr.typeOver && (Zr = !0), -1 == Sr ? ({
            from: Sr,
            to: Qr
          } = rr) : (Sr = Math.min(rr.from, Sr), Qr = Math.max(rr.to, Qr)))
        }
        return {
          from: Sr,
          to: Qr,
          typeOver: Zr
        }
      }
      readChange() {
        let {
          from: rr,
          to: Sr,
          typeOver: Qr
        } = this.processRecords(), Zr = this.selectionChanged && Vr(this.dom, this.selectionRange);
        if (rr < 0 && !Zr) return null;
        rr > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let Wr = new QZ(this.view, rr, Sr, Qr);
        return this.view.docView.domChanged = {
          newSel: Wr.newSel ? Wr.newSel.main : null
        }, Wr
      }
      flush() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        rr && this.readSelectionRange();
        let Sr = this.readChange();
        if (!Sr) return this.view.requestMeasure(), !1;
        let Qr = this.view.state,
          Zr = WZ(this.view, Sr);
        return this.view.state == Qr && (Sr.domChanged || Sr.newSel && !IZ(this.view.state.selection, Sr.newSel.main)) && this.view.update([]), Zr
      }
      readMutation(rr) {
        let Sr = this.view.docView.tile.nearest(rr.target);
        if (!Sr || Sr.isWidget()) return null;
        if (Sr.markDirty("attributes" == rr.type), "childList" == rr.type) {
          let Qr = yW(Sr, rr.previousSibling || rr.target.previousSibling, -1),
            Zr = yW(Sr, rr.nextSibling || rr.target.nextSibling, 1);
          return {
            from: Qr ? Sr.posAfter(Qr) : Sr.posAtStart,
            to: Zr ? Sr.posBefore(Zr) : Sr.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == rr.type ? {
          from: Sr.posAtStart,
          to: Sr.posAtEnd,
          typeOver: rr.target.nodeValue == rr.oldValue
        } : null
      }
      setWindow(rr) {
        rr != this.win && (this.removeWindowListeners(this.win), this.win = rr, this.addWindowListeners(this.win))
      }
      addWindowListeners(rr) {
        rr.addEventListener("resize", this.kY), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : rr.addEventListener("beforeprint", this.onPrint), rr.addEventListener("scroll", this.onScroll), rr.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(rr) {
        rr.removeEventListener("scroll", this.onScroll), rr.removeEventListener("resize", this.kY), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : rr.removeEventListener("beforeprint", this.onPrint), rr.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(rr) {
        this.editContext && (this.editContext.update(rr), rr.startState.facet(oS) != rr.state.facet(oS) && (rr.view.contentDOM.editContext = rr.state.facet(oS) ? this.editContext.editContext : null))
      }
      destroy() {
        var rr, Sr, Qr;
        this.stop(), null === (rr = this.intersection) || void 0 === rr || rr.disconnect(), null === (Sr = this.gapIntersection) || void 0 === Sr || Sr.disconnect(), null === (Qr = this.resizeScroll) || void 0 === Qr || Qr.disconnect();
        for (let Zr of this.scrollTargets) Zr.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function yW(rr, Sr, Qr) {
      for (; Sr;) {
        let Zr = mQ.get(Sr);
        if (Zr && Zr.parent == rr) return Zr;
        let Wr = Sr.parentNode;
        Sr = Wr != rr.dom ? Wr : Qr > 0 ? Sr.nextSibling : Sr.previousSibling
      }
      return null
    }

    function BW(rr, Sr) {
      let Qr = Sr.startContainer,
        Zr = Sr.startOffset,
        Wr = Sr.endContainer,
        ar = Sr.endOffset,
        jr = rr.docView.domAtPos(rr.state.selection.main.anchor, 1);
      return wr(jr.node, jr.offset, Wr, ar) && ([Qr, Zr, Wr, ar] = [Wr, ar, Qr, Zr]), {
        anchorNode: Qr,
        anchorOffset: Zr,
        focusNode: Wr,
        focusOffset: ar
      }
    }
    class TW {
      constructor(rr) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(rr.state);
        let Sr = this.editContext = new window.EditContext({
          text: rr.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, rr.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(rr.state.selection.main.head)
        });
        this.handlers.textupdate = Qr => {
          let Wr = rr.state.selection.main,
            {
              anchor: ar,
              head: jr
            } = Wr,
            Ir = this.toEditorPos(Qr.updateRangeStart),
            fr = this.toEditorPos(Qr.updateRangeEnd);
          rr.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: Qr.updateRangeStart,
            editorBase: Ir,
            drifted: !1
          });
          let Er = fr - Ir > Qr.text.length;
          Ir == this.from && ar < this.from ? Ir = ar : fr == this.to && ar > this.to && (fr = ar);
          let pr = jZ(rr.state.sliceDoc(Ir, fr), Qr.text, (Er ? Wr.from : Wr.to) - Ir, Er ? "end" : null);
          if (!pr) {
            let Sr = Zr.m.single(this.toEditorPos(Qr.selectionStart), this.toEditorPos(Qr.selectionEnd));
            return void(IZ(Sr, Wr) || rr.dispatch({
              selection: Sr,
              userEvent: "select"
            }))
          }
          let xr = {
            from: pr.from + Ir,
            to: pr.toA + Ir,
            insert: Zr.V.of(Qr.text.slice(pr.from, pr.toB).split("\n"))
          };
          if ((Br.mac || Br.android) && xr.from == jr - 1 && /^\. ?$/.test(Qr.text) && "off" == rr.contentDOM.getAttribute("autocorrect") && (xr = {
              from: Ir,
              to: fr,
              insert: Zr.V.of([Qr.text.replace(".", " ")])
            }), this.pendingContextChange = xr, !rr.state.readOnly) {
            let Sr = this.to - this.from + (xr.to - xr.from + xr.insert.length);
            aZ(rr, xr, Zr.m.single(this.toEditorPos(Qr.selectionStart, Sr), this.toEditorPos(Qr.selectionEnd, Sr)))
          }
          this.pendingContextChange && (this.revertPending(rr.state), this.setSelection(rr.state)), xr.from < xr.to && !xr.insert.length && rr.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(Sr.text.slice(Math.max(0, Qr.updateRangeStart - 1), Math.min(Sr.text.length, Qr.updateRangeStart + 1))) && this.handlers.compositionend(Qr)
        }, this.handlers.characterboundsupdate = Qr => {
          let Zr = [],
            Wr = null;
          for (let Sr = this.toEditorPos(Qr.rangeStart), ar = this.toEditorPos(Qr.rangeEnd); Sr < ar; Sr++) {
            let Qr = rr.coordsForChar(Sr);
            Wr = Qr && new DOMRect(Qr.left, Qr.top, Qr.right - Qr.left, Qr.bottom - Qr.top) || Wr || new DOMRect, Zr.push(Wr)
          }
          Sr.updateCharacterBounds(Qr.rangeStart, Zr)
        }, this.handlers.textformatupdate = Sr => {
          let Qr = [];
          for (let rr of Sr.getTextFormats()) {
            let Sr = rr.underlineStyle,
              Zr = rr.underlineThickness;
            if (!/none/i.test(Sr) && !/none/i.test(Zr)) {
              let Wr = this.toEditorPos(rr.rangeStart),
                ar = this.toEditorPos(rr.rangeEnd);
              if (Wr < ar) {
                let rr = `text-decoration: underline ${/^[a-z]/.test(Sr)?Sr+" ":"Dashed"==Sr?"dashed ":"Squiggle"==Sr?"wavy ":""}${/thin/i.test(Zr)?1:2}px`;
                Qr.push(Hr.mark({
                  attributes: {
                    style: rr
                  }
                }).range(Wr, ar))
              }
            }
          }
          rr.dispatch({
            effects: cS.of(Hr.set(Qr))
          })
        }, this.handlers.compositionstart = () => {
          rr.inputState.composing < 0 && (rr.inputState.composing = 0, rr.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (rr.inputState.composing = -1, rr.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: Sr
            } = this.composing;
            this.composing = null, Sr && this.reset(rr.state)
          }
        };
        for (let Qr in this.handlers) Sr.addEventListener(Qr, this.handlers[Qr]);
        this.measureReq = {
          read: rr => {
            this.editContext.updateControlBounds(rr.contentDOM.getBoundingClientRect());
            let Sr = kr(rr.root);
            Sr && Sr.rangeCount && this.editContext.updateSelectionBounds(Sr.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(rr) {
        let Sr = 0,
          Qr = !1,
          Zr = this.pendingContextChange;
        return rr.changes.iterChanges(((Wr, ar, jr, Ir, fr) => {
          if (Qr) return;
          let Er = fr.length - (ar - Wr);
          if (Zr && ar >= Zr.to) {
            if (Zr.from == Wr && Zr.to == ar && Zr.insert.eq(fr)) return Zr = this.pendingContextChange = null, Sr += Er, void(this.to += Er);
            Zr = null, this.revertPending(rr.state)
          }
          if (Wr += Sr, (ar += Sr) <= this.from) this.from += Er, this.to += Er;
          else if (Wr < this.to) {
            if (Wr < this.from || ar > this.to || this.to - this.from + fr.length > 3e4) return void(Qr = !0);
            this.editContext.updateText(this.toContextPos(Wr), this.toContextPos(ar), fr.toString()), this.to += Er
          }
          Sr += Er
        })), Zr && !Qr && this.revertPending(rr.state), !Qr
      }
      update(rr) {
        let Sr = this.pendingContextChange,
          Qr = rr.startState.selection.main;
        this.composing && (this.composing.drifted || !rr.changes.touchesRange(Qr.from, Qr.to) && rr.transactions.some((rr => !rr.isUserEvent("input.type") && rr.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = rr.changes.mapPos(this.composing.editorBase)) : this.applyEdits(rr) && this.rangeIsValid(rr.state) ? (rr.docChanged || rr.selectionSet || Sr) && this.setSelection(rr.state) : (this.pendingContextChange = null, this.reset(rr.state)), (rr.geometryChanged || rr.docChanged || rr.selectionSet) && rr.view.requestMeasure(this.measureReq)
      }
      resetRange(rr) {
        let {
          head: Sr
        } = rr.selection.main;
        this.from = Math.max(0, Sr - 1e4), this.to = Math.min(rr.doc.length, Sr + 1e4)
      }
      reset(rr) {
        this.resetRange(rr), this.editContext.updateText(0, this.editContext.text.length, rr.doc.sliceString(this.from, this.to)), this.setSelection(rr)
      }
      revertPending(rr) {
        let Sr = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(Sr.from), this.toContextPos(Sr.from + Sr.insert.length), rr.doc.sliceString(Sr.from, Sr.to))
      }
      setSelection(rr) {
        let {
          main: Sr
        } = rr.selection, Qr = this.toContextPos(Math.max(this.from, Math.min(this.to, Sr.anchor))), Zr = this.toContextPos(Sr.head);
        this.editContext.selectionStart == Qr && this.editContext.selectionEnd == Zr || this.editContext.updateSelection(Qr, Zr)
      }
      rangeIsValid(rr) {
        let {
          head: Sr
        } = rr.selection.main;
        return !(this.from > 0 && Sr - this.from < 500 || this.to < rr.doc.length && this.to - Sr < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        rr = Math.min(rr, Sr);
        let Qr = this.composing;
        return Qr && Qr.drifted ? Qr.editorBase + (rr - Qr.contextBase) : rr + this.from
      }
      toContextPos(rr) {
        let Sr = this.composing;
        return Sr && Sr.drifted ? Sr.contextBase + (rr - Sr.editorBase) : rr - this.from
      }
      destroy() {
        for (let rr in this.handlers) this.editContext.removeEventListener(rr, this.handlers[rr])
      }
    }
    class vW {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get Brr() {
        return this.viewState.Brr
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
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Sr;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), rr.parent && rr.parent.appendChild(this.dom);
        let {
          dispatch: Qr
        } = rr;
        this.dispatchTransactions = rr.dispatchTransactions || Qr && (rr => rr.forEach((rr => Qr(rr, this)))) || (rr => this.update(rr)), this.dispatch = this.dispatch.bind(this), this._root = rr.root || function(rr) {
          for (; rr;) {
            if (rr && (9 == rr.nodeType || 11 == rr.nodeType && rr.host)) return rr;
            rr = rr.assignedSlot || rr.parentNode
          }
          return null
        }(rr.parent) || document, this.viewState = new ZW(this, rr.state || Zr.q.create(rr)), rr.scrollTo && rr.scrollTo.is(wS) && (this.viewState.scrollTarget = rr.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(JS).map((rr => new dS(rr)));
        for (let Zr of this.plugins) Zr.update(this);
        this.observer = new KW(this), this.inputState = new fZ(this), this.inputState.ensureHandlers(this.plugins), this.docView = new CQ(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (Sr = document.fonts) || void 0 === Sr ? void 0 : Sr.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        let Wr = 1 == Sr.length && Sr[0] instanceof Zr.Y ? Sr : 1 == Sr.length && Array.isArray(Sr[0]) ? Sr[0] : [this.state.update(...Sr)];
        this.dispatchTransactions(Wr, this)
      }
      update(rr) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let Sr, Qr = !1,
          Wr = !1,
          ar = this.state;
        for (let Zr of rr) {
          if (Zr.startState != ar) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          ar = Zr.state
        }
        if (this.destroyed) return void(this.viewState.state = ar);
        let jr = this.hasFocus,
          Ir = 0,
          fr = null;
        rr.some((rr => rr.annotation(XZ))) ? (this.inputState.notifiedFocused = jr, Ir = 1) : jr != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = jr, fr = PZ(ar, jr), fr || (Ir = 1));
        let Er = this.observer.delayedAndroidKey,
          pr = null;
        if (Er ? (this.observer.clearDelayedAndroidKey(), pr = this.observer.readChange(), (pr && !this.state.doc.eq(ar.doc) || !this.state.selection.eq(ar.selection)) && (pr = null)) : this.observer.clear(), ar.facet(Zr.q.phrases) != this.state.facet(Zr.q.phrases)) return this.setState(ar);
        Sr = pQ.create(this, ar, rr), Sr.flags |= Ir;
        let xr = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let Sr of rr) {
            if (xr && (xr = xr.map(Sr.changes)), Sr.scrollIntoView) {
              let {
                main: rr
              } = Sr.state.selection, {
                x: Qr,
                y: Wr
              } = this.state.facet(vW.cursorScrollMargin);
              xr = new iS(rr.empty ? rr : Zr.m.cursor(rr.head, rr.head > rr.anchor ? -1 : 1), "nearest", "nearest", Wr, Qr)
            }
            for (let rr of Sr.effects) rr.is(wS) && (xr = rr.value.clip(this.state))
          }
          this.viewState.update(Sr, xr), this.bidiCache = lW.update(this.bidiCache, Sr.changes), Sr.empty || (this.updatePlugins(Sr), this.inputState.update(Sr)), Qr = this.docView.update(Sr), this.state.facet(fQ) != this.styleModules && this.mountStyles(), Wr = this.updateAttrs(), this.showAnnouncements(rr), this.docView.updateSelection(Qr, rr.some((rr => rr.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (Sr.startState.facet(xW) != Sr.state.facet(xW) && (this.viewState.mustMeasureContent = !0), (Qr || Wr || xr || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), Qr && this.docViewUpdate(), !Sr.empty)
          for (let Zr of this.state.facet(RS)) try {
            Zr(Sr)
          } catch (mr) {
            FS(this.state, mr, "update listener")
          }(fr || pr) && Promise.resolve().then((() => {
            fr && this.state == fr.startState && this.dispatch(fr), pr && !WZ(this, pr) && Er.force && WS(this.contentDOM, Er.key, Er.keyCode)
          }))
      }
      setState(rr) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = rr);
        this.updateState = 2;
        let Sr = this.hasFocus;
        try {
          for (let rr of this.plugins) rr.destroy(this);
          this.viewState = new ZW(this, rr), this.plugins = rr.facet(JS).map((rr => new dS(rr))), this.pluginMap.clear();
          for (let rr of this.plugins) rr.update(this);
          this.docView.destroy(), this.docView = new CQ(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        Sr && this.focus(), this.requestMeasure()
      }
      updatePlugins(rr) {
        let Sr = rr.startState.facet(JS),
          Qr = rr.state.facet(JS);
        if (Sr != Qr) {
          let Zr = [];
          for (let Wr of Qr) {
            let Qr = Sr.indexOf(Wr);
            if (Qr < 0) Zr.push(new dS(Wr));
            else {
              let Sr = this.plugins[Qr];
              Sr.mustUpdate = rr, Zr.push(Sr)
            }
          }
          for (let Sr of this.plugins) Sr.mustUpdate != rr && Sr.destroy(this);
          this.plugins = Zr, this.pluginMap.clear()
        } else
          for (let Zr of this.plugins) Zr.mustUpdate = rr;
        for (let Zr = 0; Zr < this.plugins.length; Zr++) this.plugins[Zr].update(this);
        Sr != Qr && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let Sr of this.plugins) {
          let Qr = Sr.value;
          if (Qr && Qr.docViewUpdate) try {
            Qr.docViewUpdate(this)
          } catch (rr) {
            FS(this.state, rr, "doc view update listener")
          }
        }
      }
      measure() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, rr && this.observer.forceFlush();
        let Sr = null,
          Qr = this.viewState.scrollParent,
          Zr = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: Wr,
            scrollAnchorHeight: ar
          } = this.viewState;
        Math.abs(Zr - this.viewState.scrollOffset) > 1 && (ar = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let rr = 0;; rr++) {
            if (ar < 0)
              if (aS(Qr || this.win)) Wr = -1, ar = this.viewState.heightMap.height;
              else {
                let rr = this.viewState.scrollAnchorAt(Zr);
                Wr = rr.from, ar = rr.top
              } this.updateState = 1;
            let Ir = this.viewState.measure();
            if (!Ir && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (rr > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let fr = [];
            4 & Ir || ([this.measureRequests, fr] = [fr, this.measureRequests]);
            let Er = fr.map((rr => {
                try {
                  return rr.read(this)
                } catch (Sr) {
                  return FS(this.state, Sr), LW
                }
              })),
              pr = pQ.create(this, this.state, []),
              xr = !1;
            pr.flags |= Ir, Sr ? Sr.flags |= Ir : Sr = pr, this.updateState = 2, pr.empty || (this.updatePlugins(pr), this.inputState.update(pr), this.updateAttrs(), xr = this.docView.update(pr), xr && this.docViewUpdate());
            for (let rr = 0; rr < fr.length; rr++)
              if (Er[rr] != LW) try {
                let Sr = fr[rr];
                Sr.write && Sr.write(Er[rr], this)
              } catch (jr) {
                FS(this.state, jr)
              }
            if (xr && this.docView.updateSelection(!0), !pr.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, ar = -1;
                  continue
                } {
                  let rr = ((Wr < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(Wr).top) - ar) / this.scaleY;
                  if ((rr > 1 || rr < -1) && (Qr == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Zr += rr, Qr ? Qr.scrollTop += rr : this.win.scrollBy(0, rr), ar = -1;
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
        if (Sr && !Sr.empty)
          for (let Ir of this.state.facet(RS)) Ir(Sr)
      }
      get themeClasses() {
        return NW + " " + (this.state.facet(mW) ? tW : UW) + " " + this.state.facet(xW)
      }
      updateAttrs() {
        let rr = XW(this, sS, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          Sr = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(oS) ? "true" : "false",
            class: "cm-content",
            style: `${Br.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (Sr["aria-readonly"] = "true"), XW(this, uS, Sr);
        let Qr = this.observer.ignore((() => {
          let Qr = Lr(this.contentDOM, this.contentAttrs, Sr),
            Zr = Lr(this.dom, this.editorAttrs, rr);
          return Qr || Zr
        }));
        return this.editorAttrs = rr, this.contentAttrs = Sr, Qr
      }
      showAnnouncements(rr) {
        let Sr = !0;
        for (let Qr of rr)
          for (let rr of Qr.effects)
            if (rr.is(vW.announce)) {
              Sr && (this.announceDOM.textContent = ""), Sr = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = rr.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(fQ);
        let rr = this.state.facet(vW.cspNonce);
        Wr.d.mount(this.root, this.styleModules.concat(YW).reverse(), rr ? {
          nonce: rr
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(rr) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), rr) {
          if (this.measureRequests.indexOf(rr) > -1) return;
          if (null != rr.key)
            for (let Sr = 0; Sr < this.measureRequests.length; Sr++)
              if (this.measureRequests[Sr].key === rr.key) return void(this.measureRequests[Sr] = rr);
          this.measureRequests.push(rr)
        }
      }
      plugin(rr) {
        let Sr = this.pluginMap.get(rr);
        return (void 0 === Sr || Sr && Sr.plugin != rr) && this.pluginMap.set(rr, Sr = this.plugins.find((Sr => Sr.plugin == rr)) || null), Sr && Sr.update(this).value
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
      elementAtHeight(rr) {
        return this.readMeasured(), this.viewState.elementAtHeight(rr)
      }
      lineBlockAtHeight(rr) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(rr)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(rr) {
        return this.viewState.lineBlockAt(rr)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(rr, Sr, Qr) {
        return oQ(this, rr, wQ(this, rr, Sr, Qr))
      }
      moveByGroup(rr, Sr) {
        return oQ(this, rr, wQ(this, rr, Sr, (Sr => function(rr, Sr, Qr) {
          let Wr = rr.state.charCategorizer(Sr),
            ar = Wr(Qr);
          return rr => {
            let Sr = Wr(rr);
            return ar == Zr.k.Space && (ar = Sr), ar == Sr
          }
        }(this, rr.head, Sr))))
      }
      visualLineSide(rr, Sr) {
        let Qr = this.bidiSpans(rr),
          Wr = this.textDirectionAt(rr.from),
          ar = Qr[Sr ? Qr.length - 1 : 0];
        return Zr.m.cursor(ar.side(Sr, Wr) + rr.from, ar.forward(!Sr, Wr) ? 1 : -1)
      }
      moveToLineBoundary(rr, Sr) {
        return function(rr, Sr, Qr, Wr) {
          let ar = iQ(rr, Sr.head, Sr.assoc || -1),
            jr = Wr && ar.type == Pr.Text && (rr.lineWrapping || ar.widgetLineBreaks) ? rr.coordsAtPos(Sr.assoc < 0 && Sr.head > ar.from ? Sr.head - 1 : Sr.head) : null;
          if (jr) {
            let Sr = rr.dom.getBoundingClientRect(),
              Wr = rr.textDirectionAt(ar.from),
              Ir = rr.posAtCoords({
                x: Qr == (Wr == ES.LTR) ? Sr.right - 1 : Sr.left + 1,
                y: (jr.top + jr.bottom) / 2
              });
            if (null != Ir) return Zr.m.cursor(Ir, Qr ? -1 : 1)
          }
          return Zr.m.cursor(Qr ? ar.to : ar.from, Qr ? -1 : 1)
        }(this, rr, Sr, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(rr, Sr, Qr) {
        return oQ(this, rr, function(rr, Sr, Qr, Wr) {
          let ar = Sr.head,
            jr = Qr ? 1 : -1;
          if (ar == (Qr ? rr.state.doc.length : 0)) return Zr.m.cursor(ar, Sr.assoc);
          let Ir, fr = Sr.goalColumn,
            Er = rr.contentDOM.getBoundingClientRect(),
            pr = rr.coordsAtPos(ar, Sr.assoc || ((Sr.empty ? Qr : Sr.head == Sr.from) ? 1 : -1)),
            xr = rr.documentTop;
          if (pr) null == fr && (fr = pr.left - Er.left), Ir = jr < 0 ? pr.top : pr.bottom;
          else {
            let Sr = rr.viewState.lineBlockAt(ar);
            null == fr && (fr = Math.min(Er.right - Er.left, rr.defaultCharacterWidth * (ar - Sr.from))), Ir = (jr < 0 ? Sr.top : Sr.bottom) + xr
          }
          let mr = Er.left + fr,
            Nr = rr.viewState.heightOracle.textHeight >> 1,
            Ur = null !== Wr && void 0 !== Wr ? Wr : Nr;
          for (let tr = 0;; tr += Nr) {
            let Sr = Ir + (Ur + tr) * jr,
              Wr = JQ(rr, {
                x: mr,
                y: Sr
              }, !1, jr);
            if (Qr ? Sr > Er.bottom : Sr < Er.top) return Zr.m.cursor(Wr.pos, Wr.assoc);
            let ar = rr.coordsAtPos(Wr.pos, Wr.assoc),
              pr = ar ? (ar.top + ar.bottom) / 2 : 0;
            if (!ar || (Qr ? pr > Ir : pr < Ir)) return Zr.m.cursor(Wr.pos, Wr.assoc, void 0, fr)
          }
        }(this, rr, Sr, Qr))
      }
      domAtPos(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(rr, Sr)
      }
      posAtDOM(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(rr, Sr)
      }
      posAtCoords(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let Qr = JQ(this, rr, Sr);
        return Qr && Qr.pos
      }
      posAndSideAtCoords(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), JQ(this, rr, Sr)
      }
      coordsAtPos(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let Qr = this.docView.coordsAt(rr, Sr);
        if (!Qr || Qr.left == Qr.right) return Qr;
        let Zr = this.state.doc.lineAt(rr),
          Wr = this.bidiSpans(Zr);
        return Jr(Qr, Wr[nS.find(Wr, rr - Zr.from, -1, Sr)].dir == ES.LTR == Sr > 0)
      }
      coordsForChar(rr) {
        return this.readMeasured(), this.docView.coordsForChar(rr)
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
      textDirectionAt(rr) {
        return !this.state.facet(kS) || rr < this.viewport.from || rr > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(rr))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(rr) {
        if (rr.length > OW) return vS(rr.length);
        let Sr, Qr = this.textDirectionAt(rr.from);
        for (let Wr of this.bidiCache)
          if (Wr.from == rr.from && Wr.dir == Qr && (Wr.fresh || eS(Wr.isolates, Sr = aQ(this, rr)))) return Wr.order;
        Sr || (Sr = aQ(this, rr));
        let Zr = TS(rr.text, Qr, Sr);
        return this.bidiCache.push(new lW(rr.from, rr.to, Qr, Sr, !0, Zr)), Zr
      }
      get hasFocus() {
        var rr;
        return (this.dom.ownerDocument.hasFocus() || Br.safari && (null === (rr = this.inputState) || void 0 === rr ? void 0 : rr.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          QS(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(rr) {
        this._root != rr && (this._root = rr, this.observer.setWindow((9 == rr.nodeType ? rr : rr.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let rr of this.plugins) rr.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var Qr, Wr, ar, jr;
        return wS.of(new iS("number" == typeof rr ? Zr.m.cursor(rr) : rr, null !== (Qr = Sr.y) && void 0 !== Qr ? Qr : "nearest", null !== (Wr = Sr.x) && void 0 !== Wr ? Wr : "nearest", null !== (ar = Sr.yMargin) && void 0 !== ar ? ar : 5, null !== (jr = Sr.xMargin) && void 0 !== jr ? jr : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: rr,
          scrollLeft: Sr
        } = this.scrollDOM, Qr = this.viewState.scrollAnchorAt(rr);
        return wS.of(new iS(Zr.m.cursor(Qr.from), "start", "start", Qr.top - rr, Sr, !0))
      }
      setTabFocusMode(rr) {
        null == rr ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof rr ? this.inputState.tabFocusMode = rr ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + rr)
      }
      static domEventHandlers(rr) {
        return DS.define((() => ({})), {
          eventHandlers: rr
        })
      }
      static domEventObservers(rr) {
        return DS.define((() => ({})), {
          eventObservers: rr
        })
      }
      static theme(rr, Sr) {
        let Qr = Wr.d.newName(),
          Zr = [xW.of(Qr), fQ.of(zW(`.${Qr}`, rr))];
        return Sr && Sr.dark && Zr.push(mW.of(!0)), Zr
      }
      static baseTheme(rr) {
        return Zr.C.lowest(fQ.of(zW("." + NW, rr, hW)))
      }
      static findFromDOM(rr) {
        var Sr;
        let Qr = rr.querySelector(".cm-content"),
          Zr = Qr && mQ.get(Qr) || mQ.get(rr);
        return (null === (Sr = null === Zr || void 0 === Zr ? void 0 : Zr.root) || void 0 === Sr ? void 0 : Sr.view) || null
      }
    }
    vW.styleModule = fQ, vW.inputHandler = gS, vW.clipboardInputFilter = MS, vW.clipboardOutputFilter = GS, vW.scrollHandler = VS, vW.focusChangeEffect = CS, vW.perLineTextDirection = kS, vW.exceptionSink = qS, vW.updateListener = RS, vW.editable = oS, vW.mouseSelectionStyle = HS, vW.dragMovesSelection = PS, vW.clickAddsSelectionRange = XS, vW.OZ = rQ, vW.blockWrappers = SQ, vW.outerDecorations = QQ, vW.atomicRanges = ZQ, vW.bidiIsolatedRanges = WQ, vW.cursorScrollMargin = Zr.u.define({
      combine: rr => {
        let Sr = 5,
          Qr = 5;
        for (let Zr of rr) "number" == typeof Zr ? Sr = Qr = Zr : ({
          x: Sr,
          y: Qr
        } = Zr);
        return {
          x: Sr,
          y: Qr
        }
      }
    }), vW.scrollMargins = jQ, vW.darkTheme = mW, vW.cspNonce = Zr.u.define({
      combine: rr => rr.length ? rr[0] : ""
    }), vW.contentAttributes = uS, vW.editorAttributes = sS, vW.lineWrapping = vW.contentAttributes.of({
      class: "cm-lineWrapping"
    }), vW.announce = Zr.P.define();
    const OW = 4096,
      LW = {};
    class lW {
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        this.from = rr, this.to = Sr, this.dir = Qr, this.isolates = Zr, this.fresh = Wr, this.order = ar
      }
      static update(rr, Sr) {
        if (Sr.empty && !rr.some((rr => rr.fresh))) return rr;
        let Qr = [],
          Zr = rr.length ? rr[rr.length - 1].dir : ES.LTR;
        for (let Wr = Math.max(0, rr.length - 10); Wr < rr.length; Wr++) {
          let ar = rr[Wr];
          ar.dir != Zr || Sr.touchesRange(ar.from, ar.to) || Qr.push(new lW(Sr.mapPos(ar.from, 1), Sr.mapPos(ar.to, -1), ar.dir, ar.isolates, !1, ar.order))
        }
        return Qr
      }
    }

    function XW(rr, Sr, Qr) {
      for (let Zr = rr.state.facet(Sr), Wr = Zr.length - 1; Wr >= 0; Wr--) {
        let Sr = Zr[Wr],
          ar = "function" == typeof Sr ? Sr(rr) : Sr;
        ar && Tr(ar, Qr)
      }
      return Qr
    }
    const PW = Br.mac ? "mac" : Br.windows ? "win" : Br.linux ? "linux" : "key";

    function HW(rr, Sr, Qr) {
      return Sr.altKey && (rr = "Alt-" + rr), Sr.ctrlKey && (rr = "Ctrl-" + rr), Sr.metaKey && (rr = "Meta-" + rr), !1 !== Qr && Sr.shiftKey && (rr = "Shift-" + rr), rr
    }
    const qW = Zr.C.default(vW.domEventHandlers({
        keydown: (rr, Sr) => VW(CW(Sr.state), rr, Sr, "editor")
      })),
      RW = Zr.u.define({
        enables: qW
      }),
      gW = new WeakMap;

    function CW(rr) {
      let Sr = rr.facet(RW),
        Qr = gW.get(Sr);
      return Qr || gW.set(Sr, Qr = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW,
          Qr = Object.create(null),
          Zr = Object.create(null),
          Wr = (rr, Sr) => {
            let Qr = Zr[rr];
            if (null == Qr) Zr[rr] = Sr;
            else if (Qr != Sr) throw new Error("Key binding " + rr + " is used both as a regular binding and as a multi-stroke prefix")
          },
          ar = (rr, Zr, ar, jr, Ir) => {
            var fr, Er;
            let pr = Qr[rr] || (Qr[rr] = Object.create(null)),
              xr = Zr.split(/ (?!$)/).map((rr => function(rr, Sr) {
                const Qr = rr.split(/-(?!$)/);
                let Zr, Wr, ar, jr, Ir = Qr[Qr.length - 1];
                "Space" == Ir && (Ir = " ");
                for (let fr = 0; fr < Qr.length - 1; ++fr) {
                  const rr = Qr[fr];
                  if (/^(cmd|meta|m)$/i.test(rr)) jr = !0;
                  else if (/^a(lt)?$/i.test(rr)) Zr = !0;
                  else if (/^(c|ctrl|control)$/i.test(rr)) Wr = !0;
                  else if (/^s(hift)?$/i.test(rr)) ar = !0;
                  else {
                    if (!/^mod$/i.test(rr)) throw new Error("Unrecognized modifier name: " + rr);
                    "mac" == Sr ? jr = !0 : Wr = !0
                  }
                }
                return Zr && (Ir = "Alt-" + Ir), Wr && (Ir = "Ctrl-" + Ir), jr && (Ir = "Meta-" + Ir), ar && (Ir = "Shift-" + Ir), Ir
              }(rr, Sr)));
            for (let Sr = 1; Sr < xr.length; Sr++) {
              let Qr = xr.slice(0, Sr).join(" ");
              Wr(Qr, !0), pr[Qr] || (pr[Qr] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [Sr => {
                  let Zr = GW = {
                    view: Sr,
                    prefix: Qr,
                    scope: rr
                  };
                  return setTimeout((() => {
                    GW == Zr && (GW = null)
                  }), kW), !0
                }]
              })
            }
            let mr = xr.join(" ");
            Wr(mr, !1);
            let Nr = pr[mr] || (pr[mr] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (Er = null === (fr = pr._any) || void 0 === fr ? void 0 : fr.run) || void 0 === Er ? void 0 : Er.slice()) || []
            });
            ar && Nr.run.push(ar), jr && (Nr.preventDefault = !0), Ir && (Nr.stopPropagation = !0)
          };
        for (let jr of rr) {
          let rr = jr.scope ? jr.scope.split(" ") : ["editor"];
          if (jr.any)
            for (let Sr of rr) {
              let rr = Qr[Sr] || (Qr[Sr] = Object.create(null));
              rr._any || (rr._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Zr
              } = jr;
              for (let Sr in rr) rr[Sr].run.push((rr => Zr(rr, AW)))
            }
          let Zr = jr[Sr] || jr.key;
          if (Zr)
            for (let Sr of rr) ar(Sr, Zr, jr.run, jr.preventDefault, jr.stopPropagation), jr.shift && ar(Sr, "Shift-" + Zr, jr.shift, jr.preventDefault, jr.stopPropagation)
        }
        return Qr
      }(Sr.reduce(((rr, Sr) => rr.concat(Sr)), []))), Qr
    }

    function MW(rr, Sr, Qr) {
      return VW(CW(rr.state), Sr, rr, Qr)
    }
    let GW = null;
    const kW = 4e3;
    let AW = null;

    function VW(rr, Sr, Qr, Wr) {
      AW = Sr;
      let Er = function(rr) {
          var Sr = !(Ir && rr.metaKey && rr.shiftKey && !rr.ctrlKey && !rr.altKey || fr && rr.shiftKey && rr.key && 1 == rr.key.length || "Unidentified" == rr.key) && rr.key || (rr.shiftKey ? jr : ar)[rr.keyCode] || rr.key || "Unidentified";
          return "Esc" == Sr && (Sr = "Escape"), "Del" == Sr && (Sr = "Delete"), "Left" == Sr && (Sr = "ArrowLeft"), "Up" == Sr && (Sr = "ArrowUp"), "Right" == Sr && (Sr = "ArrowRight"), "Down" == Sr && (Sr = "ArrowDown"), Sr
        }(Sr),
        pr = (0, Zr.ab)(Er, 0),
        xr = (0, Zr.bb)(pr) == Er.length && " " != Er,
        mr = "",
        Nr = !1,
        Ur = !1,
        tr = !1;
      GW && GW.view == Qr && GW.scope == Wr && (mr = GW.prefix + " ", NZ.indexOf(Sr.keyCode) < 0 && (Ur = !0, GW = null));
      let hr, zr, Yr = new Set,
        nr = rr => {
          if (rr) {
            for (let Sr of rr.run)
              if (!Yr.has(Sr) && (Yr.add(Sr), Sr(Qr))) return rr.stopPropagation && (tr = !0), !0;
            rr.preventDefault && (rr.stopPropagation && (tr = !0), Ur = !0)
          }
          return !1
        },
        er = rr[Wr];
      return er && (nr(er[mr + HW(Er, Sr, !xr)]) ? Nr = !0 : !xr || !(Sr.altKey || Sr.metaKey || Sr.ctrlKey) || Br.windows && Sr.ctrlKey && Sr.altKey || Br.mac && Sr.altKey && !Sr.ctrlKey && !Sr.metaKey || !(hr = ar[Sr.keyCode]) || hr == Er ? xr && Sr.shiftKey && nr(er[mr + HW(Er, Sr, !0)]) && (Nr = !0) : (nr(er[mr + HW(hr, Sr, !0)]) || Sr.shiftKey && (zr = jr[Sr.keyCode]) != Er && zr != hr && nr(er[mr + HW(zr, Sr, !1)])) && (Nr = !0), !Nr && nr(er._any) && (Nr = !0)), Ur && (Nr = !0), Nr && tr && Sr.stopPropagation(), AW = null, Nr
    }
    class iW {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.className = rr, this.left = Sr, this.top = Qr, this.width = Zr, this.height = Wr
      }
      draw() {
        let rr = document.createElement("div");
        return rr.className = this.className, this.adjust(rr), rr
      }
      update(rr, Sr) {
        return Sr.className == this.className && (this.adjust(rr), !0)
      }
      adjust(rr) {
        rr.style.left = this.left + "px", rr.style.top = this.top + "px", null != this.width && (rr.style.width = this.width + "px"), rr.style.height = this.height + "px"
      }
      eq(rr) {
        return this.left == rr.left && this.top == rr.top && this.width == rr.width && this.height == rr.height && this.className == rr.className
      }
      static forRange(rr, Sr, Qr) {
        if (Qr.empty) {
          let Zr = rr.coordsAtPos(Qr.head, Qr.assoc || 1);
          if (!Zr) return [];
          let Wr = wW(rr);
          return [new iW(Sr, Zr.left - Wr.left, Zr.top - Wr.top, null, Zr.bottom - Zr.top)]
        }
        return function(rr, Sr, Qr) {
          if (Qr.to <= rr.viewport.from || Qr.from >= rr.viewport.to) return [];
          let Zr = Math.max(Qr.from, rr.viewport.from),
            Wr = Math.min(Qr.to, rr.viewport.to),
            ar = rr.textDirection == ES.LTR,
            jr = rr.contentDOM,
            Ir = jr.getBoundingClientRect(),
            fr = wW(rr),
            Er = jr.querySelector(".cm-line"),
            pr = Er && window.getComputedStyle(Er),
            xr = Ir.left + (pr ? parseInt(pr.paddingLeft) + Math.min(0, parseInt(pr.textIndent)) : 0),
            mr = Ir.right - (pr ? parseInt(pr.paddingRight) : 0),
            Nr = iQ(rr, Zr, 1),
            Ur = iQ(rr, Wr, -1),
            tr = Nr.type == Pr.Text ? Nr : null,
            hr = Ur.type == Pr.Text ? Ur : null;
          tr && (rr.lineWrapping || Nr.widgetLineBreaks) && (tr = cW(rr, Zr, 1, tr));
          hr && (rr.lineWrapping || Ur.widgetLineBreaks) && (hr = cW(rr, Wr, -1, hr));
          if (tr && hr && tr.from == hr.from && tr.to == hr.to) return Yr(nr(Qr.from, Qr.to, tr));
          {
            let Sr = tr ? nr(Qr.from, null, tr) : er(Nr, !1),
              Zr = hr ? nr(null, Qr.to, hr) : er(Ur, !0),
              Wr = [];
            return (tr || Nr).to < (hr || Ur).from - (tr && hr ? 1 : 0) || Nr.widgetLineBreaks > 1 && Sr.bottom + rr.defaultLineHeight / 2 < Zr.top ? Wr.push(zr(xr, Sr.bottom, mr, Zr.top)) : Sr.bottom < Zr.top && rr.elementAtHeight((Sr.bottom + Zr.top) / 2).type == Pr.Text && (Sr.bottom = Zr.top = (Sr.bottom + Zr.top) / 2), Yr(Sr).concat(Wr).concat(Yr(Zr))
          }

          function zr(rr, Qr, Zr, Wr) {
            return new iW(Sr, rr - fr.left, Qr - fr.top, Math.max(0, Zr - rr), Wr - Qr)
          }

          function Yr(rr) {
            let {
              top: Sr,
              bottom: Qr,
              horizontal: Zr
            } = rr, Wr = [];
            for (let ar = 0; ar < Zr.length; ar += 2) Wr.push(zr(Zr[ar], Sr, Zr[ar + 1], Qr));
            return Wr
          }

          function nr(Sr, Qr, Zr) {
            let Wr = 1e9,
              jr = -1e9,
              Ir = [];

            function fr(Sr, Qr, fr, Er, pr) {
              let Nr = rr.coordsAtPos(Sr, Sr == Zr.to ? -2 : 2),
                Ur = rr.coordsAtPos(fr, fr == Zr.from ? 2 : -2);
              Nr && Ur && (Wr = Math.min(Nr.top, Ur.top, Wr), jr = Math.max(Nr.bottom, Ur.bottom, jr), pr == ES.LTR ? Ir.push(ar && Qr ? xr : Nr.left, ar && Er ? mr : Ur.right) : Ir.push(!ar && Er ? xr : Ur.left, !ar && Qr ? mr : Nr.right))
            }
            let Er = null !== Sr && void 0 !== Sr ? Sr : Zr.from,
              pr = null !== Qr && void 0 !== Qr ? Qr : Zr.to;
            for (let ar of rr.Brr)
              if (ar.to > Er && ar.from < pr)
                for (let Zr = Math.max(ar.from, Er), Wr = Math.min(ar.to, pr);;) {
                  let ar = rr.state.doc.lineAt(Zr);
                  for (let jr of rr.bidiSpans(ar)) {
                    let rr = jr.from + ar.from,
                      Ir = jr.to + ar.from;
                    if (rr >= Wr) break;
                    Ir > Zr && fr(Math.max(rr, Zr), null == Sr && rr <= Er, Math.min(Ir, Wr), null == Qr && Ir >= pr, jr.dir)
                  }
                  if (Zr = ar.to + 1, Zr >= Wr) break
                }
            return 0 == Ir.length && fr(Er, null == Sr, pr, null == Qr, rr.textDirection), {
              top: Wr,
              bottom: jr,
              horizontal: Ir
            }
          }

          function er(rr, Sr) {
            let Qr = Ir.top + (Sr ? rr.top : rr.bottom);
            return {
              top: Qr,
              bottom: Qr,
              horizontal: []
            }
          }
        }(rr, Sr, Qr)
      }
    }

    function wW(rr) {
      let Sr = rr.scrollDOM.getBoundingClientRect();
      return {
        left: (rr.textDirection == ES.LTR ? Sr.left : Sr.right - rr.scrollDOM.clientWidth * rr.scaleX) - rr.scrollDOM.scrollLeft * rr.scaleX,
        top: Sr.top - rr.scrollDOM.scrollTop * rr.scaleY
      }
    }

    function cW(rr, Sr, Qr, Zr) {
      let Wr = rr.coordsAtPos(Sr, 2 * Qr);
      if (!Wr) return Zr;
      let ar = rr.dom.getBoundingClientRect(),
        jr = (Wr.top + Wr.bottom) / 2,
        Ir = rr.posAtCoords({
          x: ar.left + 1,
          y: jr
        }),
        fr = rr.posAtCoords({
          x: ar.right - 1,
          y: jr
        });
      return null == Ir || null == fr ? Zr : {
        from: Math.max(Zr.from, Math.min(Ir, fr)),
        to: Math.min(Zr.to, Math.max(Ir, fr))
      }
    }
    class FW {
      constructor(rr, Sr) {
        this.view = rr, this.layer = Sr, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = rr.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), Sr.above && this.dom.classList.add("cm-layer-above"), Sr.class && this.dom.classList.add(Sr.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(rr.state), rr.requestMeasure(this.measureReq), Sr.mount && Sr.mount(this.dom, rr)
      }
      update(rr) {
        rr.startState.facet(oW) != rr.state.facet(oW) && this.setOrder(rr.state), (this.layer.update(rr, this.dom) || rr.geometryChanged) && (this.scale(), rr.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(rr) {
        !1 !== this.layer.updateOnDocViewUpdate && rr.requestMeasure(this.measureReq)
      }
      setOrder(rr) {
        let Sr = 0,
          Qr = rr.facet(oW);
        for (; Sr < Qr.length && Qr[Sr] != this.layer;) Sr++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - Sr)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: rr,
          scaleY: Sr
        } = this.view;
        rr == this.scaleX && Sr == this.scaleY || (this.scaleX = rr, this.scaleY = Sr, this.dom.style.transform = `scale(${1/rr}, ${1/Sr})`)
      }
      draw(rr) {
        if (rr.length != this.drawn.length || rr.some(((rr, Sr) => {
            return Qr = rr, Zr = this.drawn[Sr], !(Qr.constructor == Zr.constructor && Qr.eq(Zr));
            var Qr, Zr
          }))) {
          let Sr = this.dom.firstChild,
            Qr = 0;
          for (let Zr of rr) Zr.update && Sr && Zr.constructor && this.drawn[Qr].constructor && Zr.update(Sr, this.drawn[Qr]) ? (Sr = Sr.nextSibling, Qr++) : this.dom.insertBefore(Zr.draw(), Sr);
          for (; Sr;) {
            let rr = Sr.nextSibling;
            Sr.remove(), Sr = rr
          }
          this.drawn = rr, Br.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const oW = Zr.u.define();

    function bW(rr) {
      return [DS.define((Sr => new FW(Sr, rr))), oW.of(rr)]
    }
    const JW = Zr.u.define({
      combine: rr => (0, Zr.db)(rr, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (rr, Sr) => Math.min(rr, Sr),
        drawRangeCursor: (rr, Sr) => rr || Sr
      })
    });

    function DW() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [JW.of(rr), sW, ra, Sa, AS.of(!0)]
    }

    function dW(rr) {
      return rr.startState.facet(JW) != rr.state.facet(JW)
    }
    const sW = bW({
      above: !0,
      markers(rr) {
        let {
          state: Sr
        } = rr, Qr = Sr.facet(JW), Wr = [];
        for (let ar of Sr.selection.yh) {
          let jr = ar == Sr.selection.main;
          if (ar.empty || Qr.drawRangeCursor && !(jr && Br.ios && Qr.iosSelectionHandles)) {
            let Sr = jr ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              Qr = ar.empty ? ar : Zr.m.cursor(ar.head, ar.assoc);
            for (let Zr of iW.forRange(rr, Sr, Qr)) Wr.push(Zr)
          }
        }
        return Wr
      },
      update(rr, Sr) {
        rr.transactions.some((rr => rr.selection)) && (Sr.style.animationName = "cm-blink" == Sr.style.animationName ? "cm-blink2" : "cm-blink");
        let Qr = dW(rr);
        return Qr && uW(rr.state, Sr), rr.docChanged || rr.selectionSet || Qr
      },
      mount(rr, Sr) {
        uW(Sr.state, rr)
      },
      class: "cm-cursorLayer"
    });

    function uW(rr, Sr) {
      Sr.style.animationDuration = rr.facet(JW).cursorBlinkRate + "ms"
    }
    const ra = bW({
        above: !1,
        markers(rr) {
          let Sr = [],
            {
              main: Qr,
              yh: Wr
            } = rr.state.selection;
          for (let Zr of Wr)
            if (!Zr.empty)
              for (let Qr of iW.forRange(rr, "cm-selectionBackground", Zr)) Sr.push(Qr);
          if (Br.ios && !Qr.empty && rr.state.facet(JW).iosSelectionHandles) {
            for (let Wr of iW.forRange(rr, "cm-selectionHandle cm-selectionHandle-start", Zr.m.cursor(Qr.from, 1))) Sr.push(Wr);
            for (let Wr of iW.forRange(rr, "cm-selectionHandle cm-selectionHandle-end", Zr.m.cursor(Qr.to, 1))) Sr.push(Wr)
          }
          return Sr
        },
        update: (rr, Sr) => rr.docChanged || rr.selectionSet || rr.viewportChanged || dW(rr),
        class: "cm-selectionLayer"
      }),
      Sa = Zr.C.highest(vW.theme({
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
      Qa = Zr.P.define({
        map: (rr, Sr) => null == rr ? null : Sr.mapPos(rr)
      }),
      Za = Zr.T.define({
        create: () => null,
        update: (rr, Sr) => (null != rr && (rr = Sr.changes.mapPos(rr)), Sr.effects.reduce(((rr, Sr) => Sr.is(Qa) ? Sr.value : rr), rr))
      }),
      Wa = DS.fromClass(class {
        constructor(rr) {
          this.view = rr, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(rr) {
          var Sr;
          let Qr = rr.state.field(Za);
          null == Qr ? null != this.cursor && (null === (Sr = this.cursor) || void 0 === Sr || Sr.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (rr.startState.field(Za) != Qr || rr.docChanged || rr.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: rr
          } = this, Sr = rr.state.field(Za), Qr = null != Sr && rr.coordsAtPos(Sr);
          if (!Qr) return null;
          let Zr = rr.scrollDOM.getBoundingClientRect();
          return {
            left: Qr.left - Zr.left + rr.scrollDOM.scrollLeft * rr.scaleX,
            top: Qr.top - Zr.top + rr.scrollDOM.scrollTop * rr.scaleY,
            height: Qr.bottom - Qr.top
          }
        }
        drawCursor(rr) {
          if (this.cursor) {
            let {
              scaleX: Sr,
              scaleY: Qr
            } = this.view;
            rr ? (this.cursor.style.left = rr.left / Sr + "px", this.cursor.style.top = rr.top / Qr + "px", this.cursor.style.height = rr.height / Qr + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(rr) {
          this.view.state.field(Za) != rr && this.view.dispatch({
            effects: Qa.of(rr)
          })
        }
      }, {
        eventObservers: {
          dragover(rr) {
            this.setDropPos(this.view.posAtCoords({
              x: rr.clientX,
              y: rr.clientY
            }))
          },
          dragleave(rr) {
            rr.target != this.view.contentDOM && this.view.contentDOM.contains(rr.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function aa() {
      return [Za, Wa]
    }

    function ja(rr, Sr, Qr, Zr, Wr) {
      Sr.lastIndex = 0;
      for (let ar, jr = rr.iterRange(Qr, Zr), Ir = Qr; !jr.next().done; Ir += jr.value.length)
        if (!jr.lineBreak)
          for (; ar = Sr.exec(jr.value);) Wr(Ir + ar.index, ar)
    }
    class Ia {
      constructor(rr) {
        const {
          regexp: Sr,
          decoration: Qr,
          decorate: Zr,
          boundary: Wr,
          maxLength: ar = 1e3
        } = rr;
        if (!Sr.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = Sr, Zr) this.addMatch = (rr, Sr, Qr, Wr) => Zr(Wr, Qr, Qr + rr[0].length, rr, Sr);
        else if ("function" == typeof Qr) this.addMatch = (rr, Sr, Zr, Wr) => {
          let ar = Qr(rr, Sr, Zr);
          ar && Wr(Zr, Zr + rr[0].length, ar)
        };
        else {
          if (!Qr) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (rr, Sr, Zr, Wr) => Wr(Zr, Zr + rr[0].length, Qr)
        }
        this.boundary = Wr, this.maxLength = ar
      }
      createDeco(rr) {
        let Sr = new Zr.E,
          Qr = Sr.add.bind(Sr);
        for (let {
            from: Zr,
            to: Wr
          }
          of
          function(rr, Sr) {
            let Qr = rr.Brr;
            if (1 == Qr.length && Qr[0].from == rr.viewport.from && Qr[0].to == rr.viewport.to) return Qr;
            let Zr = [];
            for (let {
                from: Wr,
                to: ar
              }
              of Qr) Wr = Math.max(rr.state.doc.lineAt(Wr).from, Wr - Sr), ar = Math.min(rr.state.doc.lineAt(ar).to, ar + Sr), Zr.length && Zr[Zr.length - 1].to >= Wr ? Zr[Zr.length - 1].to = ar : Zr.push({
              from: Wr,
              to: ar
            });
            return Zr
          }(rr, this.maxLength)) ja(rr.state.doc, this.regexp, Zr, Wr, ((Sr, Zr) => this.addMatch(Zr, rr, Sr, Qr)));
        return Sr.finish()
      }
      updateDeco(rr, Sr) {
        let Qr = 1e9,
          Zr = -1;
        return rr.docChanged && rr.changes.iterChanges(((Sr, Wr, ar, jr) => {
          jr >= rr.view.viewport.from && ar <= rr.view.viewport.to && (Qr = Math.min(ar, Qr), Zr = Math.max(jr, Zr))
        })), rr.viewportMoved || Zr - Qr > 1e3 ? this.createDeco(rr.view) : Zr > -1 ? this.updateRange(rr.view, Sr.map(rr.changes), Qr, Zr) : Sr
      }
      updateRange(rr, Sr, Qr, Zr) {
        for (let Wr of rr.Brr) {
          let ar = Math.max(Wr.from, Qr),
            jr = Math.min(Wr.to, Zr);
          if (jr >= ar) {
            let Qr = rr.state.doc.lineAt(ar),
              Zr = Qr.to < jr ? rr.state.doc.lineAt(jr) : Qr,
              Ir = Math.max(Wr.from, Qr.from),
              fr = Math.min(Wr.to, Zr.to);
            if (this.boundary) {
              for (; ar > Qr.from; ar--)
                if (this.boundary.test(Qr.text[ar - 1 - Qr.from])) {
                  Ir = ar;
                  break
                } for (; jr < Zr.to; jr++)
                if (this.boundary.test(Zr.text[jr - Zr.from])) {
                  fr = jr;
                  break
                }
            }
            let Er, pr = [],
              xr = (rr, Sr, Qr) => pr.push(Qr.range(rr, Sr));
            if (Qr == Zr)
              for (this.regexp.lastIndex = Ir - Qr.from;
                (Er = this.regexp.exec(Qr.text)) && Er.index < fr - Qr.from;) this.addMatch(Er, rr, Er.index + Qr.from, xr);
            else ja(rr.state.doc, this.regexp, Ir, fr, ((Sr, Qr) => this.addMatch(Qr, rr, Sr, xr)));
            Sr = Sr.update({
              filterFrom: Ir,
              filterTo: fr,
              filter: (rr, Sr) => rr < Ir || Sr > fr,
              add: pr
            })
          }
        }
        return Sr
      }
    }
    const fa = null != /x/.unicode ? "gu" : "g",
      Ea = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", fa),
      pa = {
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
    let xa = null;
    const ma = Zr.u.define({
      combine(rr) {
        let Sr = (0, Zr.db)(rr, {
          render: null,
          specialChars: Ea,
          addSpecialChars: null
        });
        return (Sr.replaceTabs = ! function() {
          var rr;
          if (null == xa && "undefined" != typeof document && document.body) {
            let Sr = document.body.style;
            xa = null != (null !== (rr = Sr.tabSize) && void 0 !== rr ? rr : Sr.MozTabSize)
          }
          return xa || !1
        }()) && (Sr.specialChars = new RegExp("\t|" + Sr.specialChars.source, fa)), Sr.addSpecialChars && (Sr.specialChars = new RegExp(Sr.specialChars.source + "|" + Sr.addSpecialChars.source, fa)), Sr
      }
    });

    function Na() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ma.of(rr), Ua || (Ua = DS.fromClass(class {
        constructor(rr) {
          this.view = rr, this.OZ = Hr.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(rr.state.facet(ma)), this.OZ = this.decorator.createDeco(rr)
        }
        makeDecorator(rr) {
          return new Ia({
            regexp: rr.specialChars,
            decoration: (Sr, Qr, Wr) => {
              let {
                doc: ar
              } = Qr.state, jr = (0, Zr.ab)(Sr[0], 0);
              if (9 == jr) {
                let rr = ar.lineAt(Wr),
                  Sr = Qr.state.tabSize,
                  jr = (0, Zr.eb)(rr.text, Sr, Wr - rr.from);
                return Hr.replace({
                  widget: new ha((Sr - jr % Sr) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[jr] || (this.decorationCache[jr] = Hr.replace({
                widget: new ta(rr, jr)
              }))
            },
            boundary: rr.replaceTabs ? void 0 : /[^]/
          })
        }
        update(rr) {
          let Sr = rr.state.facet(ma);
          rr.startState.facet(ma) != Sr ? (this.decorator = this.makeDecorator(Sr), this.OZ = this.decorator.createDeco(rr.view)) : this.OZ = this.decorator.updateDeco(rr, this.OZ)
        }
      }, {
        OZ: rr => rr.OZ
      }))]
    }
    let Ua = null;
    class ta extends Xr {
      constructor(rr, Sr) {
        super(), this.options = rr, this.code = Sr
      }
      eq(rr) {
        return rr.code == this.code
      }
      toDOM(rr) {
        let Sr = function(rr) {
            return rr >= 32 ? "\u2022" : 10 == rr ? "\u2424" : String.fromCharCode(9216 + rr)
          }(this.code),
          Qr = rr.state.phrase("Control character") + " " + (pa[this.code] || "0x" + this.code.toString(16)),
          Zr = this.options.render && this.options.render(this.code, Qr, Sr);
        if (Zr) return Zr;
        let Wr = document.createElement("span");
        return Wr.textContent = Sr, Wr.title = Qr, Wr.setAttribute("aria-label", Qr), Wr.className = "cm-specialChar", Wr
      }
      ignoreEvent() {
        return !1
      }
    }
    class ha extends Xr {
      constructor(rr) {
        super(), this.width = rr
      }
      eq(rr) {
        return rr.width == this.width
      }
      toDOM() {
        let rr = document.createElement("span");
        return rr.textContent = "\t", rr.className = "cm-tab", rr.style.width = this.width + "px", rr
      }
      ignoreEvent() {
        return !1
      }
    }

    function za() {
      return na
    }
    const Ya = Hr.line({
        class: "cm-activeLine"
      }),
      na = DS.fromClass(class {
        constructor(rr) {
          this.OZ = this.getDeco(rr)
        }
        update(rr) {
          (rr.docChanged || rr.selectionSet) && (this.OZ = this.getDeco(rr.view))
        }
        getDeco(rr) {
          let Sr = -1,
            Qr = [];
          for (let Zr of rr.state.selection.yh) {
            let Wr = rr.lineBlockAt(Zr.head);
            Wr.from > Sr && (Qr.push(Ya.range(Wr.from)), Sr = Wr.from)
          }
          return Hr.set(Qr)
        }
      }, {
        OZ: rr => rr.OZ
      });
    class ea extends Xr {
      constructor(rr) {
        super(), this.content = rr
      }
      toDOM(rr) {
        let Sr = document.createElement("span");
        return Sr.className = "cm-placeholder", Sr.style.pointerEvents = "none", Sr.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(rr) : this.content.cloneNode(!0)), Sr.setAttribute("aria-hidden", "true"), Sr
      }
      coordsAt(rr) {
        let Sr = rr.firstChild ? ir(rr.firstChild) : [];
        if (!Sr.length) return null;
        let Qr = window.getComputedStyle(rr.parentNode),
          Zr = Jr(Sr[0], "rtl" != Qr.direction),
          Wr = parseInt(Qr.lineHeight);
        return Zr.bottom - Zr.top > 1.5 * Wr ? {
          left: Zr.left,
          right: Zr.right,
          top: Zr.top,
          bottom: Zr.top + Wr
        } : Zr
      }
      ignoreEvent() {
        return !1
      }
    }

    function Ka(rr) {
      let Sr = DS.fromClass(class {
        constructor(Sr) {
          this.view = Sr, this.placeholder = rr ? Hr.set([Hr.widget({
            widget: new ea(rr),
            side: 1
          }).range(0)]) : Hr.none
        }
        get OZ() {
          return this.view.state.doc.length ? Hr.none : this.placeholder
        }
      }, {
        OZ: rr => rr.OZ
      });
      return "string" == typeof rr ? [Sr, vW.contentAttributes.of({
        "aria-placeholder": rr
      })] : Sr
    }
    const ya = 2e3;

    function Ba(rr, Sr) {
      let Qr = rr.posAtCoords({
          x: Sr.clientX,
          y: Sr.clientY
        }, !1),
        Wr = rr.state.doc.lineAt(Qr),
        ar = Qr - Wr.from,
        jr = ar > ya ? -1 : ar == Wr.length ? function(rr, Sr) {
          let Qr = rr.coordsAtPos(rr.viewport.from);
          return Qr ? Math.round(Math.abs((Qr.left - Sr) / rr.defaultCharacterWidth)) : -1
        }(rr, Sr.clientX) : (0, Zr.eb)(Wr.text, rr.state.tabSize, Qr - Wr.from);
      return {
        line: Wr.number,
        col: jr,
        off: ar
      }
    }

    function Ta(rr, Sr) {
      let Qr = Ba(rr, Sr),
        Wr = rr.state.selection;
      return Qr ? {
        update(rr) {
          if (rr.docChanged) {
            let Sr = rr.changes.mapPos(rr.startState.doc.line(Qr.line).from),
              Zr = rr.state.doc.lineAt(Sr);
            Qr = {
              line: Zr.number,
              col: Qr.col,
              off: Math.min(Qr.off, Zr.length)
            }, Wr = Wr.map(rr.changes)
          }
        },
        get(Sr, ar, jr) {
          let Ir = Ba(rr, Sr);
          if (!Ir) return Wr;
          let fr = function(rr, Sr, Qr) {
            let Wr = Math.min(Sr.line, Qr.line),
              ar = Math.max(Sr.line, Qr.line),
              jr = [];
            if (Sr.off > ya || Qr.off > ya || Sr.col < 0 || Qr.col < 0) {
              let Ir = Math.min(Sr.off, Qr.off),
                fr = Math.max(Sr.off, Qr.off);
              for (let Sr = Wr; Sr <= ar; Sr++) {
                let Qr = rr.doc.line(Sr);
                Qr.length <= fr && jr.push(Zr.m.range(Qr.from + Ir, Qr.to + fr))
              }
            } else {
              let Ir = Math.min(Sr.col, Qr.col),
                fr = Math.max(Sr.col, Qr.col);
              for (let Sr = Wr; Sr <= ar; Sr++) {
                let Qr = rr.doc.line(Sr),
                  Wr = (0, Zr.jb)(Qr.text, Ir, rr.tabSize, !0);
                if (Wr < 0) jr.push(Zr.m.cursor(Qr.to));
                else {
                  let Sr = (0, Zr.jb)(Qr.text, fr, rr.tabSize);
                  jr.push(Zr.m.range(Qr.from + Wr, Qr.from + Sr))
                }
              }
            }
            return jr
          }(rr.state, Qr, Ir);
          return fr.length ? jr ? Zr.m.create(fr.concat(Wr.yh)) : Zr.m.create(fr) : Wr
        }
      } : null
    }

    function va(rr) {
      let Sr = (null === rr || void 0 === rr ? void 0 : rr.eventFilter) || (rr => rr.altKey && 0 == rr.button);
      return vW.mouseSelectionStyle.of(((rr, Qr) => Sr(Qr) ? Ta(rr, Qr) : null))
    }
    const Oa = {
        Alt: [18, rr => !!rr.altKey],
        Control: [17, rr => !!rr.ctrlKey],
        Shift: [16, rr => !!rr.shiftKey],
        Meta: [91, rr => !!rr.metaKey]
      },
      La = {
        style: "cursor: crosshair"
      };

    function la() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [Sr, Qr] = Oa[rr.key || "Alt"],
        Zr = DS.fromClass(class {
          constructor(rr) {
            this.view = rr, this.isDown = !1
          }
          set(rr) {
            this.isDown != rr && (this.isDown = rr, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(rr) {
              this.set(rr.keyCode == Sr || Qr(rr))
            },
            keyup(rr) {
              rr.keyCode != Sr && Qr(rr) || this.set(!1)
            },
            mousemove(rr) {
              this.set(Qr(rr))
            }
          }
        });
      return [Zr, vW.contentAttributes.of((rr => {
        var Sr;
        return (null === (Sr = rr.plugin(Zr)) || void 0 === Sr ? void 0 : Sr.isDown) ? La : null
      }))]
    }
    const Xa = "-10000px";
    class Pa {
      constructor(rr, Sr, Qr, Zr) {
        this.facet = Sr, this.createTooltipView = Qr, this.removeTooltipView = Zr, this.input = rr.state.facet(Sr), this.tooltips = this.input.filter((rr => rr));
        let Wr = null;
        this.tooltipViews = this.tooltips.map((rr => Wr = Qr(rr, Wr)))
      }
      update(rr, Sr) {
        var Qr;
        let Zr = rr.state.facet(this.facet),
          Wr = Zr.filter((rr => rr));
        if (Zr === this.input) {
          for (let Sr of this.tooltipViews) Sr.update && Sr.update(rr);
          return !1
        }
        let ar = [],
          jr = Sr ? [] : null;
        for (let Ir = 0; Ir < Wr.length; Ir++) {
          let Qr = Wr[Ir],
            Zr = -1;
          if (Qr) {
            for (let rr = 0; rr < this.tooltips.length; rr++) {
              let Sr = this.tooltips[rr];
              Sr && Sr.create == Qr.create && (Zr = rr)
            }
            if (Zr < 0) ar[Ir] = this.createTooltipView(Qr, Ir ? ar[Ir - 1] : null), jr && (jr[Ir] = !!Qr.above);
            else {
              let Qr = ar[Ir] = this.tooltipViews[Zr];
              jr && (jr[Ir] = Sr[Zr]), Qr.update && Qr.update(rr)
            }
          }
        }
        for (let Ir of this.tooltipViews) ar.indexOf(Ir) < 0 && (this.removeTooltipView(Ir), null === (Qr = Ir.destroy) || void 0 === Qr || Qr.call(Ir));
        return Sr && (jr.forEach(((rr, Qr) => Sr[Qr] = rr)), Sr.length = jr.length), this.input = Zr, this.tooltips = Wr, this.tooltipViews = ar, !0
      }
    }

    function Ha(rr) {
      let Sr = rr.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: Sr.clientHeight,
        right: Sr.clientWidth
      }
    }
    const qa = Zr.u.define({
        combine: rr => {
          var Sr, Qr, Zr;
          return {
            position: Br.ios ? "absolute" : (null === (Sr = rr.find((rr => rr.position))) || void 0 === Sr ? void 0 : Sr.position) || "fixed",
            parent: (null === (Qr = rr.find((rr => rr.parent))) || void 0 === Qr ? void 0 : Qr.parent) || null,
            tooltipSpace: (null === (Zr = rr.find((rr => rr.tooltipSpace))) || void 0 === Zr ? void 0 : Zr.tooltipSpace) || Ha
          }
        }
      }),
      Ra = new WeakMap,
      ga = DS.fromClass(class {
        constructor(rr) {
          this.view = rr, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let Sr = rr.state.facet(qa);
          this.position = Sr.position, this.parent = Sr.parent, this.classes = rr.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new Pa(rr, ka, ((rr, Sr) => this.createTooltip(rr, Sr)), (rr => {
            this.resizeObserver && this.resizeObserver.unobserve(rr.dom), rr.dom.remove()
          })), this.above = this.manager.tooltips.map((rr => !!rr.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((rr => {
            Date.now() > this.lastTransaction - 50 && rr.length > 0 && rr[rr.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), rr.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let rr of this.manager.tooltipViews) this.intersectionObserver.observe(rr.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(rr) {
          rr.transactions.length && (this.lastTransaction = Date.now());
          let Sr = this.manager.update(rr, this.above);
          Sr && this.observeIntersection();
          let Qr = Sr || rr.geometryChanged,
            Zr = rr.state.facet(qa);
          if (Zr.position != this.position && !this.madeAbsolute) {
            this.position = Zr.position;
            for (let rr of this.manager.tooltipViews) rr.dom.style.position = this.position;
            Qr = !0
          }
          if (Zr.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Zr.parent, this.createContainer();
            for (let rr of this.manager.tooltipViews) this.container.appendChild(rr.dom);
            Qr = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          Qr && this.maybeMeasure()
        }
        createTooltip(rr, Sr) {
          let Qr = rr.create(this.view),
            Zr = Sr ? Sr.dom : null;
          if (Qr.dom.classList.add("cm-tooltip"), rr.arrow && !Qr.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let rr = document.createElement("div");
            rr.className = "cm-tooltip-arrow", Qr.dom.appendChild(rr)
          }
          return Qr.dom.style.position = this.position, Qr.dom.style.top = Xa, Qr.dom.style.left = "0px", this.container.insertBefore(Qr.dom, Zr), Qr.mount && Qr.mount(this.view), this.resizeObserver && this.resizeObserver.observe(Qr.dom), Qr
        }
        destroy() {
          var rr, Sr, Qr;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Zr of this.manager.tooltipViews) Zr.dom.remove(), null === (rr = Zr.destroy) || void 0 === rr || rr.call(Zr);
          this.parent && this.container.remove(), null === (Sr = this.resizeObserver) || void 0 === Sr || Sr.disconnect(), null === (Qr = this.intersectionObserver) || void 0 === Qr || Qr.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let rr = 1,
            Sr = 1,
            Qr = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: rr
            } = this.manager.tooltipViews[0];
            if (Br.safari) {
              let Sr = rr.getBoundingClientRect();
              Qr = Math.abs(Sr.top + 1e4) > 1 || Math.abs(Sr.left) > 1
            } else Qr = !!rr.offsetParent && rr.offsetParent != this.container.ownerDocument.body
          }
          if (Qr || "absolute" == this.position)
            if (this.parent) {
              let Qr = this.parent.getBoundingClientRect();
              Qr.width && Qr.height && (rr = Qr.width / this.parent.offsetWidth, Sr = Qr.height / this.parent.offsetHeight)
            } else({
              scaleX: rr,
              scaleY: Sr
            } = this.view.viewState);
          let Zr = this.view.scrollDOM.getBoundingClientRect(),
            Wr = IQ(this.view);
          return {
            visible: {
              left: Zr.left + Wr.left,
              top: Zr.top + Wr.top,
              right: Zr.right - Wr.right,
              bottom: Zr.bottom - Wr.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((rr, Sr) => {
              let Qr = this.manager.tooltipViews[Sr];
              return Qr.getCoords ? Qr.getCoords(rr.pos) : this.view.coordsAtPos(rr.pos)
            })),
            size: this.manager.tooltipViews.map((rr => {
              let {
                dom: Sr
              } = rr;
              return Sr.getBoundingClientRect()
            })),
            space: this.view.state.facet(qa).tooltipSpace(this.view),
            scaleX: rr,
            scaleY: Sr,
            makeAbsolute: Qr
          }
        }
        writeMeasure(rr) {
          var Sr;
          if (rr.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let rr of this.manager.tooltipViews) rr.dom.style.position = "absolute"
          }
          let {
            visible: Qr,
            space: Zr,
            scaleX: Wr,
            scaleY: ar
          } = rr, jr = [];
          for (let Ir = 0; Ir < this.manager.tooltips.length; Ir++) {
            let fr = this.manager.tooltips[Ir],
              Er = this.manager.tooltipViews[Ir],
              {
                dom: pr
              } = Er,
              xr = rr.pos[Ir],
              mr = rr.size[Ir];
            if (!xr || !1 !== fr.clip && (xr.bottom <= Math.max(Qr.top, Zr.top) || xr.top >= Math.min(Qr.bottom, Zr.bottom) || xr.right < Math.max(Qr.left, Zr.left) - .1 || xr.left > Math.min(Qr.right, Zr.right) + .1)) {
              pr.style.top = Xa;
              continue
            }
            let Nr = fr.arrow ? Er.dom.querySelector(".cm-tooltip-arrow") : null,
              Ur = Nr ? 7 : 0,
              tr = mr.right - mr.left,
              hr = null !== (Sr = Ra.get(Er)) && void 0 !== Sr ? Sr : mr.bottom - mr.top,
              zr = Er.offset || Ga,
              Yr = this.view.textDirection == ES.LTR,
              nr = mr.width > Zr.right - Zr.left ? Yr ? Zr.left : Zr.right - mr.width : Yr ? Math.max(Zr.left, Math.min(xr.left - (Nr ? 14 : 0) + zr.x, Zr.right - tr)) : Math.min(Math.max(Zr.left, xr.left - tr + (Nr ? 14 : 0) - zr.x), Zr.right - tr),
              er = this.above[Ir];
            !fr.strictSide && (er ? xr.top - hr - Ur - zr.y < Zr.top : xr.bottom + hr + Ur + zr.y > Zr.bottom) && er == Zr.bottom - xr.bottom > xr.top - Zr.top && (er = this.above[Ir] = !er);
            let Kr = (er ? xr.top - Zr.top : Zr.bottom - xr.bottom) - Ur;
            if (Kr < hr && !1 !== Er.resize) {
              if (Kr < this.view.defaultLineHeight) {
                pr.style.top = Xa;
                continue
              }
              Ra.set(Er, hr), pr.style.height = (hr = Kr) / ar + "px"
            } else pr.style.height && (pr.style.height = "");
            let yr = er ? xr.top - hr - Ur - zr.y : xr.bottom + Ur + zr.y,
              Br = nr + tr;
            if (!0 !== Er.overlap)
              for (let rr of jr) rr.left < Br && rr.right > nr && rr.top < yr + hr && rr.bottom > yr && (yr = er ? rr.top - hr - 2 - Ur : rr.bottom + Ur + 2);
            if ("absolute" == this.position ? (pr.style.top = (yr - rr.parent.top) / ar + "px", Ca(pr, (nr - rr.parent.left) / Wr)) : (pr.style.top = yr / ar + "px", Ca(pr, nr / Wr)), Nr) {
              let rr = xr.left + (Yr ? zr.x : -zr.x) - (nr + 14 - 7);
              Nr.style.left = rr / Wr + "px"
            }!0 !== Er.overlap && jr.push({
              left: nr,
              top: yr,
              right: Br,
              bottom: yr + hr
            }), pr.classList.toggle("cm-tooltip-above", er), pr.classList.toggle("cm-tooltip-below", !er), Er.positioned && Er.positioned(rr.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let rr of this.manager.tooltipViews) rr.dom.style.top = Xa
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function Ca(rr, Sr) {
      let Qr = parseInt(rr.style.left, 10);
      (isNaN(Qr) || Math.abs(Sr - Qr) > 1) && (rr.style.left = Sr + "px")
    }
    const Ma = vW.baseTheme({
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
      Ga = {
        x: 0,
        y: 0
      },
      ka = Zr.u.define({
        enables: [ga, Ma]
      }),
      Aa = Zr.u.define({
        combine: rr => rr.reduce(((rr, Sr) => rr.concat(Sr)), [])
      });
    class Va {
      static create(rr) {
        return new Va(rr)
      }
      constructor(rr) {
        this.view = rr, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Pa(rr, Aa, ((rr, Sr) => this.createHostedView(rr, Sr)), (rr => rr.dom.remove()))
      }
      createHostedView(rr, Sr) {
        let Qr = rr.create(this.view);
        return Qr.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(Qr.dom, Sr ? Sr.dom.nextSibling : this.dom.firstChild), this.mounted && Qr.mount && Qr.mount(this.view), Qr
      }
      mount(rr) {
        for (let Sr of this.manager.tooltipViews) Sr.mount && Sr.mount(rr);
        this.mounted = !0
      }
      positioned(rr) {
        for (let Sr of this.manager.tooltipViews) Sr.positioned && Sr.positioned(rr)
      }
      update(rr) {
        this.manager.update(rr)
      }
      destroy() {
        var rr;
        for (let Sr of this.manager.tooltipViews) null === (rr = Sr.destroy) || void 0 === rr || rr.call(Sr)
      }
      passProp(rr) {
        let Sr;
        for (let Qr of this.manager.tooltipViews) {
          let Zr = Qr[rr];
          if (void 0 !== Zr)
            if (void 0 === Sr) Sr = Zr;
            else if (Sr !== Zr) return
        }
        return Sr
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
    const ia = ka.compute([Aa], (rr => {
      let Sr = rr.facet(Aa);
      return 0 === Sr.length ? null : {
        pos: Math.min(...Sr.map((rr => rr.pos))),
        end: Math.max(...Sr.map((rr => {
          var Sr;
          return null !== (Sr = rr.end) && void 0 !== Sr ? Sr : rr.pos
        }))),
        create: Va.create,
        above: Sr[0].above,
        arrow: Sr.some((rr => rr.arrow))
      }
    }));
    class wa {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.view = rr, this.source = Sr, this.field = Qr, this.setHover = Zr, this.hoverTime = Wr, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: rr.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), rr.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), rr.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let rr = Date.now() - this.lastMove.time;
        rr < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - rr) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: rr,
          lastMove: Sr
        } = this, Qr = rr.docView.tile.nearest(Sr.target);
        if (!Qr) return;
        let Zr, Wr = 1;
        if (Qr.isWidget()) Zr = Qr.posAtStart;
        else {
          if (Zr = rr.posAtCoords(Sr), null == Zr) return;
          let Qr = rr.coordsAtPos(Zr);
          if (!Qr || Sr.y < Qr.top || Sr.y > Qr.bottom || Sr.x < Qr.left - rr.defaultCharacterWidth || Sr.x > Qr.right + rr.defaultCharacterWidth) return;
          let ar = rr.bidiSpans(rr.state.doc.lineAt(Zr)).find((rr => rr.from <= Zr && rr.to >= Zr)),
            jr = ar && ar.dir == ES.RTL ? -1 : 1;
          Wr = Sr.x < Qr.left ? -jr : jr
        }
        let ar = this.source(rr, Zr, Wr);
        if (null === ar || void 0 === ar ? void 0 : ar.then) {
          let Sr = this.pending = {
            pos: Zr
          };
          ar.then((Qr => {
            this.pending == Sr && (this.pending = null, !Qr || Array.isArray(Qr) && !Qr.length || rr.dispatch({
              effects: this.setHover.of(Array.isArray(Qr) ? Qr : [Qr])
            }))
          }), (Sr => FS(rr.state, Sr, "hover tooltip")))
        } else !ar || Array.isArray(ar) && !ar.length || rr.dispatch({
          effects: this.setHover.of(Array.isArray(ar) ? ar : [ar])
        })
      }
      get tooltip() {
        let rr = this.view.plugin(ga),
          Sr = rr ? rr.manager.tooltips.findIndex((rr => rr.create == Va.create)) : -1;
        return Sr > -1 ? rr.manager.tooltipViews[Sr] : null
      }
      mousemove(rr) {
        var Sr, Qr;
        this.lastMove = {
          x: rr.clientX,
          y: rr.clientY,
          target: rr.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Zr,
          tooltip: Wr
        } = this;
        if (Zr.length && Wr && ! function(rr, Sr) {
            let Qr, {
              left: Zr,
              right: Wr,
              top: ar,
              bottom: jr
            } = rr.getBoundingClientRect();
            if (Qr = rr.querySelector(".cm-tooltip-arrow")) {
              let rr = Qr.getBoundingClientRect();
              ar = Math.min(rr.top, ar), jr = Math.max(rr.bottom, jr)
            }
            return Sr.clientX >= Zr - ca && Sr.clientX <= Wr + ca && Sr.clientY >= ar - ca && Sr.clientY <= jr + ca
          }(Wr.dom, rr) || this.pending) {
          let {
            pos: Wr
          } = Zr[0] || this.pending, ar = null !== (Qr = null === (Sr = Zr[0]) || void 0 === Sr ? void 0 : Sr.end) && void 0 !== Qr ? Qr : Wr;
          (Wr == ar ? this.view.posAtCoords(this.lastMove) == Wr : function(rr, Sr, Qr, Zr, Wr) {
            let ar = rr.scrollDOM.getBoundingClientRect(),
              jr = rr.documentTop + rr.documentPadding.top + rr.contentHeight;
            if (ar.left > Zr || ar.right < Zr || ar.top > Wr || Math.min(ar.bottom, jr) < Wr) return !1;
            let Ir = rr.posAtCoords({
              x: Zr,
              y: Wr
            }, !1);
            return Ir >= Sr && Ir <= Qr
          }(this.view, Wr, ar, rr.clientX, rr.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(rr) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: Sr
        } = this;
        if (Sr.length) {
          let {
            tooltip: Sr
          } = this;
          Sr && Sr.dom.contains(rr.relatedTarget) ? this.watchTooltipLeave(Sr.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(rr) {
        let Sr = Qr => {
          rr.removeEventListener("mouseleave", Sr), this.active.length && !this.view.dom.contains(Qr.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        rr.addEventListener("mouseleave", Sr)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const ca = 4;

    function Fa(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Qr = Zr.P.define(),
        Wr = Zr.T.define({
          create: () => [],
          update(rr, Wr) {
            if (rr.length && (Sr.hideOnChange && (Wr.docChanged || Wr.selection) ? rr = [] : Sr.hideOn && (rr = rr.filter((rr => !Sr.hideOn(Wr, rr)))), Wr.docChanged)) {
              let Sr = [];
              for (let Qr of rr) {
                let rr = Wr.changes.mapPos(Qr.pos, -1, Zr.y.TrackDel);
                if (null != rr) {
                  let Zr = Object.assign(Object.create(null), Qr);
                  Zr.pos = rr, null != Zr.end && (Zr.end = Wr.changes.mapPos(Zr.end)), Sr.push(Zr)
                }
              }
              rr = Sr
            }
            for (let Sr of Wr.effects) Sr.is(Qr) && (rr = Sr.value), Sr.is(ba) && (rr = []);
            return rr
          },
          provide: rr => Aa.from(rr)
        });
      return {
        active: Wr,
        extension: [Wr, DS.define((Zr => new wa(Zr, rr, Wr, Qr, Sr.hoverTime || 300))), ia]
      }
    }

    function oa(rr, Sr) {
      let Qr = rr.plugin(ga);
      if (!Qr) return null;
      let Zr = Qr.manager.tooltips.indexOf(Sr);
      return Zr < 0 ? null : Qr.manager.tooltipViews[Zr]
    }
    const ba = Zr.P.define();
    const Ja = Zr.u.define({
      combine(rr) {
        let Sr, Qr;
        for (let Zr of rr) Sr = Sr || Zr.topContainer, Qr = Qr || Zr.bottomContainer;
        return {
          topContainer: Sr,
          bottomContainer: Qr
        }
      }
    });

    function Da(rr, Sr) {
      let Qr = rr.plugin(da),
        Zr = Qr ? Qr.specs.indexOf(Sr) : -1;
      return Zr > -1 ? Qr.panels[Zr] : null
    }
    const da = DS.fromClass(class {
      constructor(rr) {
        this.input = rr.state.facet(rj), this.specs = this.input.filter((rr => rr)), this.panels = this.specs.map((Sr => Sr(rr)));
        let Sr = rr.state.facet(Ja);
        this.top = new sa(rr, !0, Sr.topContainer), this.bottom = new sa(rr, !1, Sr.bottomContainer), this.top.sync(this.panels.filter((rr => rr.top))), this.bottom.sync(this.panels.filter((rr => !rr.top)));
        for (let Qr of this.panels) Qr.dom.classList.add("cm-panel"), Qr.mount && Qr.mount()
      }
      update(rr) {
        let Sr = rr.state.facet(Ja);
        this.top.container != Sr.topContainer && (this.top.sync([]), this.top = new sa(rr.view, !0, Sr.topContainer)), this.bottom.container != Sr.bottomContainer && (this.bottom.sync([]), this.bottom = new sa(rr.view, !1, Sr.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let Qr = rr.state.facet(rj);
        if (Qr != this.input) {
          let Sr = Qr.filter((rr => rr)),
            Zr = [],
            Wr = [],
            ar = [],
            jr = [];
          for (let Qr of Sr) {
            let Sr, Ir = this.specs.indexOf(Qr);
            Ir < 0 ? (Sr = Qr(rr.view), jr.push(Sr)) : (Sr = this.panels[Ir], Sr.update && Sr.update(rr)), Zr.push(Sr), (Sr.top ? Wr : ar).push(Sr)
          }
          this.specs = Sr, this.panels = Zr, this.top.sync(Wr), this.bottom.sync(ar);
          for (let rr of jr) rr.dom.classList.add("cm-panel"), rr.mount && rr.mount()
        } else
          for (let Zr of this.panels) Zr.update && Zr.update(rr)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: rr => vW.scrollMargins.of((Sr => {
        let Qr = Sr.plugin(rr);
        return Qr && {
          top: Qr.top.scrollMargin(),
          bottom: Qr.bottom.scrollMargin()
        }
      }))
    });
    class sa {
      constructor(rr, Sr, Qr) {
        this.view = rr, this.top = Sr, this.container = Qr, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(rr) {
        for (let Sr of this.panels) Sr.destroy && rr.indexOf(Sr) < 0 && Sr.destroy();
        this.panels = rr, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let rr = this.container || this.view.dom;
          rr.insertBefore(this.dom, this.top ? rr.firstChild : null)
        }
        let rr = this.dom.firstChild;
        for (let Sr of this.panels)
          if (Sr.dom.parentNode == this.dom) {
            for (; rr != Sr.dom;) rr = ua(rr);
            rr = rr.nextSibling
          } else this.dom.insertBefore(Sr.dom, rr);
        for (; rr;) rr = ua(rr)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let rr of this.classes.split(" ")) rr && this.container.classList.remove(rr);
          for (let rr of (this.classes = this.view.themeClasses).split(" ")) rr && this.container.classList.add(rr)
        }
      }
    }

    function ua(rr) {
      let Sr = rr.nextSibling;
      return rr.remove(), Sr
    }
    const rj = Zr.u.define({
      enables: da
    });

    function Sj(rr, Sr) {
      let Qr, Wr = new Promise((rr => Qr = rr)),
        ar = rr => function(rr, Sr, Qr) {
          let Zr = Sr.content ? Sr.content(rr, (() => jr(null))) : null;
          if (!Zr) {
            if (Zr = (0, xr.d)("form"), Sr.input) {
              let rr = (0, xr.d)("input", Sr.input);
              /^(text|password|number|email|tel|url)$/.test(rr.type) && rr.classList.add("cm-textfield"), rr.name || (rr.name = "input"), Zr.appendChild((0, xr.d)("label", (Sr.label || "") + ": ", rr))
            } else Zr.appendChild(document.createTextNode(Sr.label || ""));
            Zr.appendChild(document.createTextNode(" ")), Zr.appendChild((0, xr.d)("button", {
              class: "cm-button",
              type: "submit"
            }, Sr.submitLabel || "OK"))
          }
          let Wr = "FORM" == Zr.nodeName ? [Zr] : Zr.querySelectorAll("form");
          for (let Ir = 0; Ir < Wr.length; Ir++) {
            let rr = Wr[Ir];
            rr.addEventListener("keydown", (Sr => {
              27 == Sr.keyCode ? (Sr.preventDefault(), jr(null)) : 13 == Sr.keyCode && (Sr.preventDefault(), jr(rr))
            })), rr.addEventListener("submit", (Sr => {
              Sr.preventDefault(), jr(rr)
            }))
          }
          let ar = (0, xr.d)("div", Zr, (0, xr.d)("button", {
            onclick: () => jr(null),
            "aria-label": rr.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          Sr.class && (ar.className = Sr.class);

          function jr(Sr) {
            ar.contains(ar.ownerDocument.activeElement) && rr.focus(), Qr(Sr)
          }
          return ar.classList.add("cm-dialog"), {
            dom: ar,
            top: Sr.top,
            mount: () => {
              if (Sr.focus) {
                let rr;
                rr = "string" == typeof Sr.focus ? Zr.querySelector(Sr.focus) : Zr.querySelector("input") || Zr.querySelector("button"), rr && "select" in rr ? rr.select() : rr && "focus" in rr && rr.focus()
              }
            }
          }
        }(rr, Sr, Qr);
      rr.state.field(Qj, !1) ? rr.dispatch({
        effects: Zj.of(ar)
      }) : rr.dispatch({
        effects: Zr.P.appendConfig.of(Qj.init((() => [ar])))
      });
      let jr = Wj.of(ar);
      return {
        close: jr,
        result: Wr.then((Sr => ((rr.win.queueMicrotask || (Sr => rr.win.setTimeout(Sr, 10)))((() => {
          rr.state.field(Qj).indexOf(ar) > -1 && rr.dispatch({
            effects: jr
          })
        })), Sr)))
      }
    }
    const Qj = Zr.T.define({
        create: () => [],
        update(rr, Sr) {
          for (let Qr of Sr.effects) Qr.is(Zj) ? rr = [Qr.value].concat(rr) : Qr.is(Wj) && (rr = rr.filter((rr => rr != Qr.value)));
          return rr
        },
        provide: rr => rj.computeN([rr], (Sr => Sr.field(rr)))
      }),
      Zj = Zr.P.define(),
      Wj = Zr.P.define();
    class aj extends Zr.L {
      compare(rr) {
        return this == rr || this.constructor == rr.constructor && this.eq(rr)
      }
      eq(rr) {
        return !1
      }
      destroy(rr) {}
    }
    aj.prototype.elementClass = "", aj.prototype.toDOM = void 0, aj.prototype.mapMode = Zr.y.TrackBefore, aj.prototype.startSide = aj.prototype.endSide = -1, aj.prototype.point = !0;
    const jj = Zr.u.define(),
      Ij = Zr.u.define(),
      fj = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Zr.H.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      Ej = Zr.u.define();

    function pj(rr) {
      return [mj(), Ej.of({
        ...fj,
        ...rr
      })]
    }
    const xj = Zr.u.define({
      combine: rr => rr.some((rr => rr))
    });

    function mj(rr) {
      let Sr = [Nj];
      return rr && !1 === rr.fixed && Sr.push(xj.of(!0)), Sr
    }
    const Nj = DS.fromClass(class {
      constructor(rr) {
        this.view = rr, this.domAfter = null, this.prevViewport = rr.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = rr.state.facet(Ej).map((Sr => new zj(rr, Sr))), this.fixed = !rr.state.facet(xj);
        for (let Sr of this.gutters) "after" == Sr.config.side ? this.getDOMAfter().appendChild(Sr.dom) : this.dom.appendChild(Sr.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), rr.scrollDOM.insertBefore(this.dom, rr.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(rr) {
        if (this.updateGutters(rr)) {
          let Sr = this.prevViewport,
            Qr = rr.view.viewport,
            Zr = Math.min(Sr.to, Qr.to) - Math.max(Sr.from, Qr.from);
          this.syncGutters(Zr < .8 * (Qr.to - Qr.from))
        }
        if (rr.geometryChanged) {
          let rr = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = rr, this.domAfter && (this.domAfter.style.minHeight = rr)
        }
        this.view.state.facet(xj) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = rr.view.viewport
      }
      syncGutters(rr) {
        let Sr = this.dom.nextSibling;
        rr && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let Qr = Zr.H.iter(this.view.state.facet(jj), this.view.viewport.from),
          Wr = [],
          ar = this.gutters.map((rr => new hj(rr, this.view.viewport, -this.view.documentPadding.top)));
        for (let Zr of this.view.viewportLineBlocks)
          if (Wr.length && (Wr = []), Array.isArray(Zr.type)) {
            let rr = !0;
            for (let Sr of Zr.type)
              if (Sr.type == Pr.Text && rr) {
                tj(Qr, Wr, Sr.from);
                for (let rr of ar) rr.line(this.view, Sr, Wr);
                rr = !1
              } else if (Sr.widget)
              for (let rr of ar) rr.widget(this.view, Sr)
          } else if (Zr.type == Pr.Text) {
          tj(Qr, Wr, Zr.from);
          for (let rr of ar) rr.line(this.view, Zr, Wr)
        } else if (Zr.widget)
          for (let rr of ar) rr.widget(this.view, Zr);
        for (let Zr of ar) Zr.finish();
        rr && (this.view.scrollDOM.insertBefore(this.dom, Sr), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(rr) {
        let Sr = rr.startState.facet(Ej),
          Qr = rr.state.facet(Ej),
          Wr = rr.docChanged || rr.heightChanged || rr.viewportChanged || !Zr.H.eq(rr.startState.facet(jj), rr.state.facet(jj), rr.view.viewport.from, rr.view.viewport.to);
        if (Sr == Qr)
          for (let Zr of this.gutters) Zr.update(rr) && (Wr = !0);
        else {
          Wr = !0;
          let Zr = [];
          for (let Wr of Qr) {
            let Qr = Sr.indexOf(Wr);
            Qr < 0 ? Zr.push(new zj(this.view, Wr)) : (this.gutters[Qr].update(rr), Zr.push(this.gutters[Qr]))
          }
          for (let rr of this.gutters) rr.dom.remove(), Zr.indexOf(rr) < 0 && rr.destroy();
          for (let rr of Zr) "after" == rr.config.side ? this.getDOMAfter().appendChild(rr.dom) : this.dom.appendChild(rr.dom);
          this.gutters = Zr
        }
        return Wr
      }
      destroy() {
        for (let rr of this.gutters) rr.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: rr => vW.scrollMargins.of((Sr => {
        let Qr = Sr.plugin(rr);
        if (!Qr || 0 == Qr.gutters.length || !Qr.fixed) return null;
        let Zr = Qr.dom.offsetWidth * Sr.scaleX,
          Wr = Qr.domAfter ? Qr.domAfter.offsetWidth * Sr.scaleX : 0;
        return Sr.textDirection == ES.LTR ? {
          left: Zr,
          right: Wr
        } : {
          right: Zr,
          left: Wr
        }
      }))
    });

    function Uj(rr) {
      return Array.isArray(rr) ? rr : [rr]
    }

    function tj(rr, Sr, Qr) {
      for (; rr.value && rr.from <= Qr;) rr.from == Qr && Sr.push(rr.value), rr.next()
    }
    class hj {
      constructor(rr, Sr, Qr) {
        this.gutter = rr, this.height = Qr, this.i = 0, this.cursor = Zr.H.iter(rr.markers, Sr.from)
      }
      addElement(rr, Sr, Qr) {
        let {
          gutter: Zr
        } = this, Wr = (Sr.top - this.height) / rr.scaleY, ar = Sr.height / rr.scaleY;
        if (this.i == Zr.elements.length) {
          let Sr = new Yj(rr, ar, Wr, Qr);
          Zr.elements.push(Sr), Zr.dom.appendChild(Sr.dom)
        } else Zr.elements[this.i].update(rr, ar, Wr, Qr);
        this.height = Sr.bottom, this.i++
      }
      line(rr, Sr, Qr) {
        let Zr = [];
        tj(this.cursor, Zr, Sr.from), Qr.length && (Zr = Zr.concat(Qr));
        let Wr = this.gutter.config.lineMarker(rr, Sr, Zr);
        Wr && Zr.unshift(Wr);
        let ar = this.gutter;
        (0 != Zr.length || ar.config.renderEmptyElements) && this.addElement(rr, Sr, Zr)
      }
      widget(rr, Sr) {
        let Qr = this.gutter.config.widgetMarker(rr, Sr.widget, Sr),
          Zr = Qr ? [Qr] : null;
        for (let Wr of rr.state.facet(Ij)) {
          let Qr = Wr(rr, Sr.widget, Sr);
          Qr && (Zr || (Zr = [])).push(Qr)
        }
        Zr && this.addElement(rr, Sr, Zr)
      }
      finish() {
        let rr = this.gutter;
        for (; rr.elements.length > this.i;) {
          let Sr = rr.elements.pop();
          rr.dom.removeChild(Sr.dom), Sr.destroy()
        }
      }
    }
    class zj {
      constructor(rr, Sr) {
        this.view = rr, this.config = Sr, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let Qr in Sr.domEventHandlers) this.dom.addEventListener(Qr, (Zr => {
          let Wr, ar = Zr.target;
          if (ar != this.dom && this.dom.contains(ar)) {
            for (; ar.parentNode != this.dom;) ar = ar.parentNode;
            let rr = ar.getBoundingClientRect();
            Wr = (rr.top + rr.bottom) / 2
          } else Wr = Zr.clientY;
          let jr = rr.lineBlockAtHeight(Wr - rr.documentTop);
          Sr.domEventHandlers[Qr](rr, jr, Zr) && Zr.preventDefault()
        }));
        this.markers = Uj(Sr.markers(rr)), Sr.initialSpacer && (this.spacer = new Yj(rr, 0, 0, [Sr.initialSpacer(rr)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(rr) {
        let Sr = this.markers;
        if (this.markers = Uj(this.config.markers(rr.view)), this.spacer && this.config.updateSpacer) {
          let Sr = this.config.updateSpacer(this.spacer.markers[0], rr);
          Sr != this.spacer.markers[0] && this.spacer.update(rr.view, 0, 0, [Sr])
        }
        let Qr = rr.view.viewport;
        return !Zr.H.eq(this.markers, Sr, Qr.from, Qr.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(rr)
      }
      destroy() {
        for (let rr of this.elements) rr.destroy()
      }
    }
    class Yj {
      constructor(rr, Sr, Qr, Zr) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(rr, Sr, Qr, Zr)
      }
      update(rr, Sr, Qr, Zr) {
        this.height != Sr && (this.height = Sr, this.dom.style.height = Sr + "px"), this.above != Qr && (this.dom.style.marginTop = (this.above = Qr) ? Qr + "px" : ""),
          function(rr, Sr) {
            if (rr.length != Sr.length) return !1;
            for (let Qr = 0; Qr < rr.length; Qr++)
              if (!rr[Qr].compare(Sr[Qr])) return !1;
            return !0
          }(this.markers, Zr) || this.setMarkers(rr, Zr)
      }
      setMarkers(rr, Sr) {
        let Qr = "cm-gutterElement",
          Zr = this.dom.firstChild;
        for (let Wr = 0, ar = 0;;) {
          let jr = ar,
            Ir = Wr < Sr.length ? Sr[Wr++] : null,
            fr = !1;
          if (Ir) {
            let rr = Ir.elementClass;
            rr && (Qr += " " + rr);
            for (let Sr = ar; Sr < this.markers.length; Sr++)
              if (this.markers[Sr].compare(Ir)) {
                jr = Sr, fr = !0;
                break
              }
          } else jr = this.markers.length;
          for (; ar < jr;) {
            let rr = this.markers[ar++];
            if (rr.toDOM) {
              rr.destroy(Zr);
              let Sr = Zr.nextSibling;
              Zr.remove(), Zr = Sr
            }
          }
          if (!Ir) break;
          Ir.toDOM && (fr ? Zr = Zr.nextSibling : this.dom.insertBefore(Ir.toDOM(rr), Zr)), fr && ar++
        }
        this.dom.className = Qr, this.markers = Sr
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const nj = Zr.u.define(),
      ej = Zr.u.define(),
      Kj = Zr.u.define({
        combine: rr => (0, Zr.db)(rr, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(rr, Sr) {
            let Qr = Object.assign({}, rr);
            for (let Zr in Sr) {
              let rr = Qr[Zr],
                Wr = Sr[Zr];
              Qr[Zr] = rr ? (Sr, Qr, Zr) => rr(Sr, Qr, Zr) || Wr(Sr, Qr, Zr) : Wr
            }
            return Qr
          }
        })
      });
    class yj extends aj {
      constructor(rr) {
        super(), this.number = rr
      }
      eq(rr) {
        return this.number == rr.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function Bj(rr, Sr) {
      return rr.state.facet(Kj).formatNumber(Sr, rr.state)
    }
    const Tj = Ej.compute([Kj], (rr => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: rr => rr.state.facet(nj),
      lineMarker: (rr, Sr, Qr) => Qr.some((rr => rr.toDOM)) ? null : new yj(Bj(rr, rr.state.doc.lineAt(Sr.from).number)),
      widgetMarker: (rr, Sr, Qr) => {
        for (let Zr of rr.state.facet(ej)) {
          let Wr = Zr(rr, Sr, Qr);
          if (Wr) return Wr
        }
        return null
      },
      lineMarkerChange: rr => rr.startState.facet(Kj) != rr.state.facet(Kj),
      initialSpacer: rr => new yj(Bj(rr, Oj(rr.state.doc.lines))),
      updateSpacer(rr, Sr) {
        let Qr = Bj(Sr.view, Oj(Sr.view.state.doc.lines));
        return Qr == rr.number ? rr : new yj(Qr)
      },
      domEventHandlers: rr.facet(Kj).domEventHandlers,
      side: "before"
    })));

    function vj() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Kj.of(rr), mj(), Tj]
    }

    function Oj(rr) {
      let Sr = 9;
      for (; Sr < rr;) Sr = 10 * Sr + 9;
      return Sr
    }
    const Lj = new class extends aj {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      lj = jj.compute(["selection"], (rr => {
        let Sr = [],
          Qr = -1;
        for (let Zr of rr.selection.yh) {
          let Wr = rr.doc.lineAt(Zr.head).from;
          Wr > Qr && (Qr = Wr, Sr.push(Lj.range(Wr)))
        }
        return Zr.H.of(Sr)
      }));

    function Xj() {
      return lj
    }
  },
  53895: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      A: () => Ur,
      c: () => Zr,
      f: () => Nr,
      g: () => jr,
      j: () => pr,
      m: () => Er,
      q: () => qr,
      u: () => gr,
      y: () => Rr
    });
    const Zr = 1024;
    let Wr = 0;
    class ar {
      constructor(rr, Sr) {
        this.from = rr, this.to = Sr
      }
    }
    class jr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = Wr++, this.perNode = !!rr.perNode, this.deserialize = rr.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = rr.combine || null
      }
      add(rr) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof rr && (rr = Er.match(rr)), Sr => {
          let Qr = rr(Sr);
          return void 0 === Qr ? null : [this, Qr]
        }
      }
    }
    jr.closedBy = new jr({
      deserialize: rr => rr.split(" ")
    }), jr.openedBy = new jr({
      deserialize: rr => rr.split(" ")
    }), jr.group = new jr({
      deserialize: rr => rr.split(" ")
    }), jr.isolate = new jr({
      deserialize: rr => {
        if (rr && "rtl" != rr && "ltr" != rr && "auto" != rr) throw new RangeError("Invalid value for isolate: " + rr);
        return rr || "auto"
      }
    }), jr.contextHash = new jr({
      perNode: !0
    }), jr.lookAhead = new jr({
      perNode: !0
    }), jr.mounted = new jr({
      perNode: !0
    });
    class Ir {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = rr, this.overlay = Sr, this.parser = Qr, this.bracketed = Zr
      }
      static get(rr) {
        return rr && rr.props && rr.props[jr.mounted.id]
      }
    }
    const fr = Object.create(null);
    class Er {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = rr, this.props = Sr, this.id = Qr, this.flags = Zr
      }
      static define(rr) {
        let Sr = rr.props && rr.props.length ? Object.create(null) : fr,
          Qr = (rr.top ? 1 : 0) | (rr.skipped ? 2 : 0) | (rr.error ? 4 : 0) | (null == rr.name ? 8 : 0),
          Zr = new Er(rr.name || "", Sr, rr.id, Qr);
        if (rr.props)
          for (let Wr of rr.props)
            if (Array.isArray(Wr) || (Wr = Wr(Zr)), Wr) {
              if (Wr[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              Sr[Wr[0].id] = Wr[1]
            } return Zr
      }
      prop(rr) {
        return this.props[rr.id]
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
      is(rr) {
        if ("string" == typeof rr) {
          if (this.name == rr) return !0;
          let Sr = this.prop(jr.group);
          return !!Sr && Sr.indexOf(rr) > -1
        }
        return this.id == rr
      }
      static match(rr) {
        let Sr = Object.create(null);
        for (let Qr in rr)
          for (let Zr of Qr.split(" ")) Sr[Zr] = rr[Qr];
        return rr => {
          for (let Qr = rr.prop(jr.group), Zr = -1; Zr < (Qr ? Qr.length : 0); Zr++) {
            let Wr = Sr[Zr < 0 ? rr.name : Qr[Zr]];
            if (Wr) return Wr
          }
        }
      }
    }
    Er.none = new Er("", Object.create(null), 0, 8);
    class pr {
      constructor(rr) {
        this.types = rr;
        for (let Sr = 0; Sr < rr.length; Sr++)
          if (rr[Sr].id != Sr) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let rr = [];
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        for (let Wr of this.types) {
          let Sr = null;
          for (let rr of Qr) {
            let Qr = rr(Wr);
            if (Qr) {
              Sr || (Sr = Object.assign({}, Wr.props));
              let rr = Qr[1],
                Zr = Qr[0];
              Zr.combine && Zr.id in Sr && (rr = Zr.combine(Sr[Zr.id], rr)), Sr[Zr.id] = rr
            }
          }
          rr.push(Sr ? new Er(Wr.name, Sr, Wr.id, Wr.flags) : Wr)
        }
        return new pr(rr)
      }
    }
    const xr = new WeakMap,
      mr = new WeakMap;
    var Nr;
    ! function(rr) {
      rr[rr.ExcludeBuffers = 1] = "ExcludeBuffers", rr[rr.IncludeAnonymous = 2] = "IncludeAnonymous", rr[rr.IgnoreMounts = 4] = "IgnoreMounts", rr[rr.IgnoreOverlays = 8] = "IgnoreOverlays", rr[rr.EnterBracketed = 16] = "EnterBracketed"
    }(Nr || (Nr = {}));
    class Ur {
      constructor(rr, Sr, Qr, Zr, Wr) {
        if (this.type = rr, this.children = Sr, this.positions = Qr, this.length = Zr, this.props = null, Wr && Wr.length) {
          this.props = Object.create(null);
          for (let [rr, Sr] of Wr) this.props["number" == typeof rr ? rr : rr.id] = Sr
        }
      }
      toString() {
        let rr = Ir.get(this);
        if (rr && !rr.overlay) return rr.tree.toString();
        let Sr = "";
        for (let Qr of this.children) {
          let rr = Qr.toString();
          rr && (Sr && (Sr += ","), Sr += rr)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (Sr.length ? "(" + Sr + ")" : "") : Sr
      }
      cursor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Lr(this.topNode, rr)
      }
      cursorAt(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = xr.get(this) || this.topNode,
          Zr = new Lr(Qr);
        return Zr.moveTo(rr, Sr), xr.set(this, Zr._tree), Zr
      }
      get topNode() {
        return new er(this, 0, 0, null)
      }
      resolve(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = Yr(xr.get(this) || this.topNode, rr, Sr, !1);
        return xr.set(this, Qr), Qr
      }
      resolveInner(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = Yr(mr.get(this) || this.topNode, rr, Sr, !0);
        return mr.set(this, Qr), Qr
      }
      resolveStack(rr) {
        return function(rr, Sr, Qr) {
          let Zr = rr.resolveInner(Sr, Qr),
            Wr = null;
          for (let ar = Zr instanceof er ? Zr : Zr.context.parent; ar; ar = ar.parent)
            if (ar.index < 0) {
              let rr = ar.parent;
              (Wr || (Wr = [Zr])).push(rr.resolve(Sr, Qr)), ar = rr
            } else {
              let rr = Ir.get(ar.tree);
              if (rr && rr.overlay && rr.overlay[0].from <= Sr && rr.overlay[rr.overlay.length - 1].to >= Sr) {
                let jr = new er(rr.tree, rr.overlay[0].from + ar.from, -1, ar);
                (Wr || (Wr = [Zr])).push(Yr(jr, Sr, Qr, !1))
              }
            } return Wr ? vr(Wr) : Zr
        }(this, rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(rr) {
        let {
          enter: Sr,
          leave: Qr,
          from: Zr = 0,
          to: Wr = this.length
        } = rr, ar = rr.mode || 0, jr = (ar & Nr.IncludeAnonymous) > 0;
        for (let Ir = this.cursor(ar | Nr.IncludeAnonymous);;) {
          let rr = !1;
          if (Ir.from <= Wr && Ir.to >= Zr && (!jr && Ir.type.isAnonymous || !1 !== Sr(Ir))) {
            if (Ir.firstChild()) continue;
            rr = !0
          }
          for (; rr && Qr && (jr || !Ir.type.isAnonymous) && Qr(Ir), !Ir.nextSibling();) {
            if (!Ir.parent()) return;
            rr = !0
          }
        }
      }
      prop(rr) {
        return rr.perNode ? this.props ? this.props[rr.id] : void 0 : this.type.prop(rr)
      }
      get propValues() {
        let rr = [];
        if (this.props)
          for (let Sr in this.props) rr.push([+Sr, this.props[Sr]]);
        return rr
      }
      balance() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Hr(Er.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((rr, Sr, Qr) => new Ur(this.type, rr, Sr, Qr, this.propValues)), rr.makeTree || ((rr, Sr, Qr) => new Ur(Er.none, rr, Sr, Qr)))
      }
      static build(rr) {
        return function(rr) {
          var Sr;
          let {
            buffer: Qr,
            nodeSet: Wr,
            maxBufferLength: ar = Zr,
            reused: Ir = [],
            minRepeatType: fr = Wr.types.length
          } = rr, Er = Array.isArray(Qr) ? new tr(Qr, Qr.length) : Qr, pr = Wr.types, xr = 0, mr = 0;

          function Nr(rr, Sr, Qr, Zr, jr, Ur) {
            let {
              id: tr,
              start: Br,
              end: Tr,
              size: vr
            } = Er, Or = mr, Lr = xr;
            if (vr < 0) {
              if (Er.next(), -1 == vr) {
                let Sr = Ir[tr];
                return Qr.push(Sr), void Zr.push(Br - rr)
              }
              if (-3 == vr) return void(xr = tr);
              if (-4 == vr) return void(mr = tr);
              throw new RangeError(`Unrecognized record size: ${vr}`)
            }
            let lr, Xr, Pr = pr[tr],
              qr = Br - rr;
            if (Tr - Br <= ar && (Xr = Kr(Er.pos - Sr, jr))) {
              let Sr = new Uint16Array(Xr.size - Xr.skip),
                Qr = Er.pos - Xr.size,
                Zr = Sr.length;
              for (; Er.pos > Qr;) Zr = yr(Xr.start, Sr, Zr);
              lr = new hr(Sr, Tr - Xr.start, Wr), qr = Xr.start - rr
            } else {
              let rr = Er.pos - vr;
              Er.next();
              let Sr = [],
                Qr = [],
                Zr = tr >= fr ? tr : -1,
                Wr = 0,
                jr = Tr;
              for (; Er.pos > rr;) Zr >= 0 && Er.id == Zr && Er.size >= 0 ? (Er.end <= jr - ar && (nr(Sr, Qr, Br, Wr, Er.end, jr, Zr, Or, Lr), Wr = Sr.length, jr = Er.end), Er.next()) : Ur > 2500 ? zr(Br, rr, Sr, Qr) : Nr(Br, rr, Sr, Qr, Zr, Ur + 1);
              if (Zr >= 0 && Wr > 0 && Wr < Sr.length && nr(Sr, Qr, Br, Wr, Br, jr, Zr, Or, Lr), Sr.reverse(), Qr.reverse(), Zr > -1 && Wr > 0) {
                let rr = Yr(Pr, Lr);
                lr = Hr(Pr, Sr, Qr, 0, Sr.length, 0, Tr - Br, rr, rr)
              } else lr = er(Pr, Sr, Qr, Tr - Br, Or - Tr, Lr)
            }
            Qr.push(lr), Zr.push(qr)
          }

          function zr(rr, Sr, Qr, Zr) {
            let jr = [],
              Ir = 0,
              fr = -1;
            for (; Er.pos > Sr;) {
              let {
                id: rr,
                start: Sr,
                end: Qr,
                size: Zr
              } = Er;
              if (Zr > 4) Er.next();
              else {
                if (fr > -1 && Sr < fr) break;
                fr < 0 && (fr = Qr - ar), jr.push(rr, Sr, Qr), Ir++, Er.next()
              }
            }
            if (Ir) {
              let Sr = new Uint16Array(4 * Ir),
                ar = jr[jr.length - 2];
              for (let rr = jr.length - 3, Qr = 0; rr >= 0; rr -= 3) Sr[Qr++] = jr[rr], Sr[Qr++] = jr[rr + 1] - ar, Sr[Qr++] = jr[rr + 2] - ar, Sr[Qr++] = Qr;
              Qr.push(new hr(Sr, jr[2] - ar, Wr)), Zr.push(ar - rr)
            }
          }

          function Yr(rr, Sr) {
            return (Qr, Zr, Wr) => {
              let ar, Ir, fr = 0,
                Er = Qr.length - 1;
              if (Er >= 0 && (ar = Qr[Er]) instanceof Ur) {
                if (!Er && ar.type == rr && ar.length == Wr) return ar;
                (Ir = ar.prop(jr.lookAhead)) && (fr = Zr[Er] + ar.length + Ir)
              }
              return er(rr, Qr, Zr, Wr, fr, Sr)
            }
          }

          function nr(rr, Sr, Qr, Zr, ar, jr, Ir, fr, Er) {
            let pr = [],
              xr = [];
            for (; rr.length > Zr;) pr.push(rr.pop()), xr.push(Sr.pop() + Qr - ar);
            rr.push(er(Wr.types[Ir], pr, xr, jr - ar, fr - jr, Er)), Sr.push(ar - Qr)
          }

          function er(rr, Sr, Qr, Zr, Wr, ar, Ir) {
            if (ar) {
              let rr = [jr.contextHash, ar];
              Ir = Ir ? [rr].concat(Ir) : [rr]
            }
            if (Wr > 25) {
              let rr = [jr.lookAhead, Wr];
              Ir = Ir ? [rr].concat(Ir) : [rr]
            }
            return new Ur(rr, Sr, Qr, Zr, Ir)
          }

          function Kr(rr, Sr) {
            let Qr = Er.fork(),
              Zr = 0,
              Wr = 0,
              jr = 0,
              Ir = Qr.end - ar,
              pr = {
                size: 0,
                start: 0,
                skip: 0
              };
            rr: for (let ar = Qr.pos - rr; Qr.pos > ar;) {
              let rr = Qr.size;
              if (Qr.id == Sr && rr >= 0) {
                pr.size = Zr, pr.start = Wr, pr.skip = jr, jr += 4, Zr += 4, Qr.next();
                continue
              }
              let Er = Qr.pos - rr;
              if (rr < 0 || Er < ar || Qr.start < Ir) break;
              let xr = Qr.id >= fr ? 4 : 0,
                mr = Qr.start;
              for (Qr.next(); Qr.pos > Er;) {
                if (Qr.size < 0) {
                  if (-3 != Qr.size && -4 != Qr.size) break rr;
                  xr += 4
                } else Qr.id >= fr && (xr += 4);
                Qr.next()
              }
              Wr = mr, Zr += rr, jr += xr
            }
            return (Sr < 0 || Zr == rr) && (pr.size = Zr, pr.start = Wr, pr.skip = jr), pr.size > 4 ? pr : void 0
          }

          function yr(rr, Sr, Qr) {
            let {
              id: Zr,
              start: Wr,
              end: ar,
              size: jr
            } = Er;
            if (Er.next(), jr >= 0 && Zr < fr) {
              let Ir = Qr;
              if (jr > 4) {
                let Zr = Er.pos - (jr - 4);
                for (; Er.pos > Zr;) Qr = yr(rr, Sr, Qr)
              }
              Sr[--Qr] = Ir, Sr[--Qr] = ar - rr, Sr[--Qr] = Wr - rr, Sr[--Qr] = Zr
            } else - 3 == jr ? xr = Zr : -4 == jr && (mr = Zr);
            return Qr
          }
          let Br = [],
            Tr = [];
          for (; Er.pos > 0;) Nr(rr.start || 0, rr.bufferStart || 0, Br, Tr, -1, 0);
          let vr = null !== (Sr = rr.length) && void 0 !== Sr ? Sr : Br.length ? Tr[0] + Br[0].length : 0;
          return new Ur(pr[rr.topID], Br.reverse(), Tr.reverse(), vr)
        }(rr)
      }
    }
    Ur.empty = new Ur(Er.none, [], [], 0);
    class tr {
      constructor(rr, Sr) {
        this.buffer = rr, this.index = Sr
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
        return new tr(this.buffer, this.index)
      }
    }
    class hr {
      constructor(rr, Sr, Qr) {
        this.buffer = rr, this.length = Sr, this.set = Qr
      }
      get type() {
        return Er.none
      }
      toString() {
        let rr = [];
        for (let Sr = 0; Sr < this.buffer.length;) rr.push(this.childString(Sr)), Sr = this.buffer[Sr + 3];
        return rr.join(",")
      }
      childString(rr) {
        let Sr = this.buffer[rr],
          Qr = this.buffer[rr + 3],
          Zr = this.set.types[Sr],
          Wr = Zr.name;
        if (/\W/.test(Wr) && !Zr.isError && (Wr = JSON.stringify(Wr)), Qr == (rr += 4)) return Wr;
        let ar = [];
        for (; rr < Qr;) ar.push(this.childString(rr)), rr = this.buffer[rr + 3];
        return Wr + "(" + ar.join(",") + ")"
      }
      findChild(rr, Sr, Qr, Zr, Wr) {
        let {
          buffer: ar
        } = this, jr = -1;
        for (let Ir = rr; Ir != Sr && !(zr(Wr, Zr, ar[Ir + 1], ar[Ir + 2]) && (jr = Ir, Qr > 0)); Ir = ar[Ir + 3]);
        return jr
      }
      slice(rr, Sr, Qr) {
        let Zr = this.buffer,
          Wr = new Uint16Array(Sr - rr),
          ar = 0;
        for (let jr = rr, Ir = 0; jr < Sr;) {
          Wr[Ir++] = Zr[jr++], Wr[Ir++] = Zr[jr++] - Qr;
          let Sr = Wr[Ir++] = Zr[jr++] - Qr;
          Wr[Ir++] = Zr[jr++] - rr, ar = Math.max(ar, Sr)
        }
        return new hr(Wr, ar, this.set)
      }
    }

    function zr(rr, Sr, Qr, Zr) {
      switch (rr) {
        case -2:
          return Qr < Sr;
        case -1:
          return Zr >= Sr && Qr < Sr;
        case 0:
          return Qr < Sr && Zr > Sr;
        case 1:
          return Qr <= Sr && Zr > Sr;
        case 2:
          return Zr > Sr;
        case 4:
          return !0
      }
    }

    function Yr(rr, Sr, Qr, Zr) {
      for (var Wr; rr.from == rr.to || (Qr < 1 ? rr.from >= Sr : rr.from > Sr) || (Qr > -1 ? rr.to <= Sr : rr.to < Sr);) {
        let Sr = !Zr && rr instanceof er && rr.index < 0 ? null : rr.parent;
        if (!Sr) return rr;
        rr = Sr
      }
      let ar = Zr ? 0 : Nr.IgnoreOverlays;
      if (Zr)
        for (let jr = rr, Ir = jr.parent; Ir; jr = Ir, Ir = jr.parent) jr instanceof er && jr.index < 0 && (null === (Wr = Ir.enter(Sr, Qr, ar)) || void 0 === Wr ? void 0 : Wr.from) != jr.from && (rr = Ir);
      for (;;) {
        let Zr = rr.enter(Sr, Qr, ar);
        if (!Zr) return rr;
        rr = Zr
      }
    }
    class nr {
      cursor() {
        return new Lr(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(rr) {
        let Sr = Kr(this, rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return Sr.length ? Sr[0] : null
      }
      getChildren(rr) {
        return Kr(this, rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(rr) {
        return Yr(this, rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(rr) {
        return Yr(this, rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(rr) {
        return yr(this.parent, rr)
      }
      enterUnfinishedNodesBefore(rr) {
        let Sr = this.childBefore(rr),
          Qr = this;
        for (; Sr;) {
          let rr = Sr.lastChild;
          if (!rr || rr.to != Sr.to) break;
          rr.type.isError && rr.from == rr.to ? (Qr = Sr, Sr = rr.prevSibling) : Sr = rr
        }
        return Qr
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class er extends nr {
      constructor(rr, Sr, Qr, Zr) {
        super(), this._tree = rr, this.from = Sr, this.index = Qr, this._parent = Zr
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
      nextChild(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let ar = this;;) {
          for (let {
              children: jr,
              positions: fr
            } = ar._tree, Er = Sr > 0 ? jr.length : -1; rr != Er; rr += Sr) {
            let Er, pr = jr[rr],
              xr = fr[rr] + ar.from;
            if (Wr & Nr.EnterBracketed && pr instanceof Ur && (Er = Ir.get(pr)) && !Er.overlay && Er.bracketed && Qr >= xr && Qr <= xr + pr.length || zr(Zr, Qr, xr, xr + pr.length))
              if (pr instanceof hr) {
                if (Wr & Nr.ExcludeBuffers) continue;
                let jr = pr.findChild(0, pr.buffer.length, Sr, Qr - xr, Zr);
                if (jr > -1) return new Tr(new Br(ar, pr, rr, xr), null, jr)
              } else if (Wr & Nr.IncludeAnonymous || !pr.type.isAnonymous || lr(pr)) {
              let jr;
              if (!(Wr & Nr.IgnoreMounts) && (jr = Ir.get(pr)) && !jr.overlay) return new er(jr.tree, xr, rr, ar);
              let fr = new er(pr, xr, rr, ar);
              return Wr & Nr.IncludeAnonymous || !fr.type.isAnonymous ? fr : fr.nextChild(Sr < 0 ? pr.children.length - 1 : 0, Sr, Qr, Zr, Wr)
            }
          }
          if (Wr & Nr.IncludeAnonymous || !ar.type.isAnonymous) return null;
          if (rr = ar.index >= 0 ? ar.index + Sr : Sr < 0 ? -1 : ar._parent._tree.children.length, ar = ar._parent, !ar) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(rr) {
        return this.nextChild(0, 1, rr, 2)
      }
      childBefore(rr) {
        return this.nextChild(this._tree.children.length - 1, -1, rr, -2)
      }
      prop(rr) {
        return this._tree.prop(rr)
      }
      enter(rr, Sr) {
        let Qr, Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Zr & Nr.IgnoreOverlays) && (Qr = Ir.get(this._tree)) && Qr.overlay) {
          let Wr = rr - this.from,
            ar = Zr & Nr.EnterBracketed && Qr.bracketed;
          for (let {
              from: rr,
              to: Zr
            }
            of Qr.overlay)
            if ((Sr > 0 || ar ? rr <= Wr : rr < Wr) && (Sr < 0 || ar ? Zr >= Wr : Zr > Wr)) return new er(Qr.tree, Qr.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, rr, Sr, Zr)
      }
      nextSignificantParent() {
        let rr = this;
        for (; rr.type.isAnonymous && rr._parent;) rr = rr._parent;
        return rr
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

    function Kr(rr, Sr, Qr, Zr) {
      let Wr = rr.cursor(),
        ar = [];
      if (!Wr.firstChild()) return ar;
      if (null != Qr)
        for (let jr = !1; !jr;)
          if (jr = Wr.type.is(Qr), !Wr.nextSibling()) return ar;
      for (;;) {
        if (null != Zr && Wr.type.is(Zr)) return ar;
        if (Wr.type.is(Sr) && ar.push(Wr.node), !Wr.nextSibling()) return null == Zr ? ar : []
      }
    }

    function yr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sr.length - 1;
      for (let Zr = rr; Qr >= 0; Zr = Zr.parent) {
        if (!Zr) return !1;
        if (!Zr.type.isAnonymous) {
          if (Sr[Qr] && Sr[Qr] != Zr.name) return !1;
          Qr--
        }
      }
      return !0
    }
    class Br {
      constructor(rr, Sr, Qr, Zr) {
        this.parent = rr, this.buffer = Sr, this.index = Qr, this.start = Zr
      }
    }
    class Tr extends nr {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(rr, Sr, Qr) {
        super(), this.context = rr, this._parent = Sr, this.index = Qr, this.type = rr.buffer.set.types[rr.buffer.buffer[Qr]]
      }
      child(rr, Sr, Qr) {
        let {
          buffer: Zr
        } = this.context, Wr = Zr.findChild(this.index + 4, Zr.buffer[this.index + 3], rr, Sr - this.context.start, Qr);
        return Wr < 0 ? null : new Tr(this.context, this, Wr)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(rr) {
        return this.child(1, rr, 2)
      }
      childBefore(rr) {
        return this.child(-1, rr, -2)
      }
      prop(rr) {
        return this.type.prop(rr)
      }
      enter(rr, Sr) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & Nr.ExcludeBuffers) return null;
        let {
          buffer: Qr
        } = this.context, Zr = Qr.findChild(this.index + 4, Qr.buffer[this.index + 3], Sr > 0 ? 1 : -1, rr - this.context.start, Sr);
        return Zr < 0 ? null : new Tr(this.context, this, Zr)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(rr) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + rr, rr, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: rr
        } = this.context, Sr = rr.buffer[this.index + 3];
        return Sr < (this._parent ? rr.buffer[this._parent.index + 3] : rr.buffer.length) ? new Tr(this.context, this._parent, Sr) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: rr
        } = this.context, Sr = this._parent ? this._parent.index + 4 : 0;
        return this.index == Sr ? this.externalSibling(-1) : new Tr(this.context, this._parent, rr.findChild(Sr, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let rr = [],
          Sr = [],
          {
            buffer: Qr
          } = this.context,
          Zr = this.index + 4,
          Wr = Qr.buffer[this.index + 3];
        if (Wr > Zr) {
          let ar = Qr.buffer[this.index + 1];
          rr.push(Qr.slice(Zr, Wr, ar)), Sr.push(0)
        }
        return new Ur(this.type, rr, Sr, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function vr(rr) {
      if (!rr.length) return null;
      let Sr = 0,
        Qr = rr[0];
      for (let ar = 1; ar < rr.length; ar++) {
        let Zr = rr[ar];
        (Zr.from > Qr.from || Zr.to < Qr.to) && (Qr = Zr, Sr = ar)
      }
      let Zr = Qr instanceof er && Qr.index < 0 ? null : Qr.parent,
        Wr = rr.slice();
      return Zr ? Wr[Sr] = Zr : Wr.splice(Sr, 1), new Or(Wr, Qr)
    }
    class Or {
      constructor(rr, Sr) {
        this.heads = rr, this.node = Sr
      }
      get next() {
        return vr(this.heads)
      }
    }
    class Lr {
      get name() {
        return this.type.name
      }
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = Sr & ~Nr.EnterBracketed, rr instanceof er) this.yieldNode(rr);
        else {
          this._tree = rr.context.parent, this.buffer = rr.context;
          for (let Sr = rr._parent; Sr; Sr = Sr._parent) this.stack.unshift(Sr.index);
          this.bufferNode = rr, this.yieldBuf(rr.index)
        }
      }
      yieldNode(rr) {
        return !!rr && (this._tree = rr, this.type = rr.type, this.from = rr.from, this.to = rr.to, !0)
      }
      yieldBuf(rr, Sr) {
        this.index = rr;
        let {
          start: Qr,
          buffer: Zr
        } = this.buffer;
        return this.type = Sr || Zr.set.types[Zr.buffer[rr]], this.from = Qr + Zr.buffer[rr + 1], this.to = Qr + Zr.buffer[rr + 2], !0
      }
      yield(rr) {
        return !!rr && (rr instanceof er ? (this.buffer = null, this.yieldNode(rr)) : (this.buffer = rr.context, this.yieldBuf(rr.index, rr.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(rr, Sr, Qr) {
        if (!this.buffer) return this.yield(this._tree.nextChild(rr < 0 ? this._tree._tree.children.length - 1 : 0, rr, Sr, Qr, this.mode));
        let {
          buffer: Zr
        } = this.buffer, Wr = Zr.findChild(this.index + 4, Zr.buffer[this.index + 3], rr, Sr - this.buffer.start, Qr);
        return !(Wr < 0) && (this.stack.push(this.index), this.yieldBuf(Wr))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(rr) {
        return this.enterChild(1, rr, 2)
      }
      childBefore(rr) {
        return this.enterChild(-1, rr, -2)
      }
      enter(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(Qr & Nr.ExcludeBuffers) && this.enterChild(1, rr, Sr) : this.yield(this._tree.enter(rr, Sr, Qr))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & Nr.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let rr = this.mode & Nr.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(rr)
      }
      sibling(rr) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + rr, rr, 0, 4, this.mode));
        let {
          buffer: Sr
        } = this.buffer, Qr = this.stack.length - 1;
        if (rr < 0) {
          let rr = Qr < 0 ? 0 : this.stack[Qr] + 4;
          if (this.index != rr) return this.yieldBuf(Sr.findChild(rr, this.index, -1, 0, 4))
        } else {
          let rr = Sr.buffer[this.index + 3];
          if (rr < (Qr < 0 ? Sr.buffer.length : Sr.buffer[this.stack[Qr] + 3])) return this.yieldBuf(rr)
        }
        return Qr < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + rr, rr, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(rr) {
        let Sr, Qr, {
          buffer: Zr
        } = this;
        if (Zr) {
          if (rr > 0) {
            if (this.index < Zr.buffer.buffer.length) return !1
          } else
            for (let rr = 0; rr < this.index; rr++)
              if (Zr.buffer.buffer[rr + 3] < this.index) return !1;
          ({
            index: Sr,
            parent: Qr
          } = Zr)
        } else({
          index: Sr,
          _parent: Qr
        } = this._tree);
        for (; Qr;
          ({
            index: Sr,
            _parent: Qr
          } = Qr))
          if (Sr > -1)
            for (let Zr = Sr + rr, Wr = rr < 0 ? -1 : Qr._tree.children.length; Zr != Wr; Zr += rr) {
              let rr = Qr._tree.children[Zr];
              if (this.mode & Nr.IncludeAnonymous || rr instanceof hr || !rr.type.isAnonymous || lr(rr)) return !1
            }
        return !0
      }
      move(rr, Sr) {
        if (Sr && this.enterChild(rr, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(rr)) return !0;
          if (this.atLastNode(rr) || !this.parent()) return !1
        }
      }
      next() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, rr)
      }
      prev() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, rr)
      }
      moveTo(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (Sr < 1 ? this.from >= rr : this.from > rr) || (Sr > -1 ? this.to <= rr : this.to < rr)) && this.parent(););
        for (; this.enterChild(1, rr, Sr););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let rr = this.bufferNode,
          Sr = null,
          Qr = 0;
        if (rr && rr.context == this.buffer) rr: for (let Zr = this.index, Wr = this.stack.length; Wr >= 0;) {
          for (let ar = rr; ar; ar = ar._parent)
            if (ar.index == Zr) {
              if (Zr == this.index) return ar;
              Sr = ar, Qr = Wr + 1;
              break rr
            } Zr = this.stack[--Wr]
        }
        for (let Zr = Qr; Zr < this.stack.length; Zr++) Sr = new Tr(this.buffer, Sr, this.stack[Zr]);
        return this.bufferNode = new Tr(this.buffer, Sr, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(rr, Sr) {
        for (let Qr = 0;;) {
          let Zr = !1;
          if (this.type.isAnonymous || !1 !== rr(this)) {
            if (this.firstChild()) {
              Qr++;
              continue
            }
            this.type.isAnonymous || (Zr = !0)
          }
          for (;;) {
            if (Zr && Sr && Sr(this), Zr = this.type.isAnonymous, !Qr) return;
            if (this.nextSibling()) break;
            this.parent(), Qr--, Zr = !0
          }
        }
      }
      matchContext(rr) {
        if (!this.buffer) return yr(this.node.parent, rr);
        let {
          buffer: Sr
        } = this.buffer, {
          types: Qr
        } = Sr.set;
        for (let Zr = rr.length - 1, Wr = this.stack.length - 1; Zr >= 0; Wr--) {
          if (Wr < 0) return yr(this._tree, rr, Zr);
          let ar = Qr[Sr.buffer[this.stack[Wr]]];
          if (!ar.isAnonymous) {
            if (rr[Zr] && rr[Zr] != ar.name) return !1;
            Zr--
          }
        }
        return !0
      }
    }

    function lr(rr) {
      return rr.children.some((rr => rr instanceof hr || !rr.type.isAnonymous || lr(rr)))
    }
    const Xr = new WeakMap;

    function Pr(rr, Sr) {
      if (!rr.isAnonymous || Sr instanceof hr || Sr.type != rr) return 1;
      let Qr = Xr.get(Sr);
      if (null == Qr) {
        Qr = 1;
        for (let Zr of Sr.children) {
          if (Zr.type != rr || !(Zr instanceof Ur)) {
            Qr = 1;
            break
          }
          Qr += Pr(rr, Zr)
        }
        Xr.set(Sr, Qr)
      }
      return Qr
    }

    function Hr(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
      let Er = 0;
      for (let Nr = Zr; Nr < Wr; Nr++) Er += Pr(rr, Sr[Nr]);
      let pr = Math.ceil(1.5 * Er / 8),
        xr = [],
        mr = [];
      return function Sr(Qr, Zr, Wr, jr, Ir) {
        for (let Er = Wr; Er < jr;) {
          let Wr = Er,
            Nr = Zr[Er],
            Ur = Pr(rr, Qr[Er]);
          for (Er++; Er < jr; Er++) {
            let Sr = Pr(rr, Qr[Er]);
            if (Ur + Sr >= pr) break;
            Ur += Sr
          }
          if (Er == Wr + 1) {
            if (Ur > pr) {
              let rr = Qr[Wr];
              Sr(rr.children, rr.positions, 0, rr.children.length, Zr[Wr] + Ir);
              continue
            }
            xr.push(Qr[Wr])
          } else {
            let Sr = Zr[Er - 1] + Qr[Er - 1].length - Nr;
            xr.push(Hr(rr, Qr, Zr, Wr, Er, Nr, Sr, null, fr))
          }
          mr.push(Nr + Ir - ar)
        }
      }(Sr, Qr, Zr, Wr, 0), (Ir || fr)(xr, mr, jr)
    }
    class qr {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(rr, Sr, Qr) {
        let Zr = this.map.get(rr);
        Zr || this.map.set(rr, Zr = new Map), Zr.set(Sr, Qr)
      }
      getBuffer(rr, Sr) {
        let Qr = this.map.get(rr);
        return Qr && Qr.get(Sr)
      }
      set(rr, Sr) {
        rr instanceof Tr ? this.setBuffer(rr.context.buffer, rr.index, Sr) : rr instanceof er && this.map.set(rr.tree, Sr)
      }
      get(rr) {
        return rr instanceof Tr ? this.getBuffer(rr.context.buffer, rr.index) : rr instanceof er ? this.map.get(rr.tree) : void 0
      }
      cursorSet(rr, Sr) {
        rr.buffer ? this.setBuffer(rr.buffer.buffer, rr.index, Sr) : this.map.set(rr.tree, Sr)
      }
      cursorGet(rr) {
        return rr.buffer ? this.getBuffer(rr.buffer.buffer, rr.index) : this.map.get(rr.tree)
      }
    }
    class Rr {
      constructor(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = rr, this.to = Sr, this.tree = Qr, this.offset = Zr, this.open = (Wr ? 1 : 0) | (ar ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = [new Rr(0, rr.length, rr, 0, !1, Qr)];
        for (let Wr of Sr) Wr.to > rr.length && Zr.push(Wr);
        return Zr
      }
      static applyChanges(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!Sr.length) return rr;
        let Zr = [],
          Wr = 1,
          ar = rr.length ? rr[0] : null;
        for (let jr = 0, Ir = 0, fr = 0;; jr++) {
          let Er = jr < Sr.length ? Sr[jr] : null,
            pr = Er ? Er.fromA : 1e9;
          if (pr - Ir >= Qr)
            for (; ar && ar.from < pr;) {
              let Sr = ar;
              if (Ir >= Sr.from || pr <= Sr.to || fr) {
                let rr = Math.max(Sr.from, Ir) - fr,
                  Qr = Math.min(Sr.to, pr) - fr;
                Sr = rr >= Qr ? null : new Rr(rr, Qr, Sr.tree, Sr.offset + fr, jr > 0, !!Er)
              }
              if (Sr && Zr.push(Sr), ar.to > pr) break;
              ar = Wr < rr.length ? rr[Wr++] : null
            }
          if (!Er) break;
          Ir = Er.toA, fr = Er.toA - Er.toB
        }
        return Zr
      }
    }
    class gr {
      startParse(rr, Sr, Qr) {
        return "string" == typeof rr && (rr = new Cr(rr)), Qr = Qr ? Qr.length ? Qr.map((rr => new ar(rr.from, rr.to))) : [new ar(0, 0)] : [new ar(0, rr.length)], this.createParse(rr, Sr || [], Qr)
      }
      parse(rr, Sr, Qr) {
        let Zr = this.startParse(rr, Sr, Qr);
        for (;;) {
          let rr = Zr.advance();
          if (rr) return rr
        }
      }
    }
    class Cr {
      constructor(rr) {
        this.string = rr
      }
      get length() {
        return this.string.length
      }
      chunk(rr) {
        return this.string.slice(rr)
      }
      get lineChunks() {
        return !1
      }
      read(rr, Sr) {
        return this.string.slice(rr, Sr)
      }
    }
    new jr({
      perNode: !0
    })
  },
  53897: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => mr,
      g: () => fr,
      j: () => xr,
      m: () => Xr
    });
    var Zr = Qr(53895);
    let Wr = 0;
    class ar {
      constructor(rr, Sr, Qr, Zr) {
        this.name = rr, this.set = Sr, this.base = Qr, this.modified = Zr, this.id = Wr++
      }
      toString() {
        let {
          name: rr
        } = this;
        for (let Sr of this.modified) Sr.name && (rr = `${Sr.name}(${rr})`);
        return rr
      }
      static define(rr, Sr) {
        let Qr = "string" == typeof rr ? rr : "?";
        if (rr instanceof ar && (Sr = rr), null === Sr || void 0 === Sr ? void 0 : Sr.base) throw new Error("Can not derive from a modified tag");
        let Zr = new ar(Qr, [], null, []);
        if (Zr.set.push(Zr), Sr)
          for (let Wr of Sr.set) Zr.set.push(Wr);
        return Zr
      }
      static defineModifier(rr) {
        let Sr = new Ir(rr);
        return rr => rr.modified.indexOf(Sr) > -1 ? rr : Ir.get(rr.base || rr, rr.modified.concat(Sr).sort(((rr, Sr) => rr.id - Sr.id)))
      }
    }
    let jr = 0;
    class Ir {
      constructor(rr) {
        this.name = rr, this.instances = [], this.id = jr++
      }
      static get(rr, Sr) {
        if (!Sr.length) return rr;
        let Qr = Sr[0].instances.find((Qr => {
          return Qr.base == rr && (Zr = Sr, Wr = Qr.modified, Zr.length == Wr.length && Zr.every(((rr, Sr) => rr == Wr[Sr])));
          var Zr, Wr
        }));
        if (Qr) return Qr;
        let Zr = [],
          Wr = new ar(rr.name, Zr, rr, Sr);
        for (let ar of Sr) ar.instances.push(Wr);
        let jr = function(rr) {
          let Sr = [
            []
          ];
          for (let Qr = 0; Qr < rr.length; Qr++)
            for (let Zr = 0, Wr = Sr.length; Zr < Wr; Zr++) Sr.push(Sr[Zr].concat(rr[Qr]));
          return Sr.sort(((rr, Sr) => Sr.length - rr.length))
        }(Sr);
        for (let ar of rr.set)
          if (!ar.modified.length)
            for (let rr of jr) Zr.push(Ir.get(ar, rr));
        return Wr
      }
    }

    function fr(rr) {
      let Sr = Object.create(null);
      for (let Qr in rr) {
        let Zr = rr[Qr];
        Array.isArray(Zr) || (Zr = [Zr]);
        for (let rr of Qr.split(" "))
          if (rr) {
            let Qr = [],
              Wr = 2,
              ar = rr;
            for (let Sr = 0;;) {
              if ("..." == ar && Sr > 0 && Sr + 3 == rr.length) {
                Wr = 1;
                break
              }
              let Zr = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(ar);
              if (!Zr) throw new RangeError("Invalid path: " + rr);
              if (Qr.push("*" == Zr[0] ? "" : '"' == Zr[0][0] ? JSON.parse(Zr[0]) : Zr[0]), Sr += Zr[0].length, Sr == rr.length) break;
              let jr = rr[Sr++];
              if (Sr == rr.length && "!" == jr) {
                Wr = 0;
                break
              }
              if ("/" != jr) throw new RangeError("Invalid path: " + rr);
              ar = rr.slice(Sr)
            }
            let jr = Qr.length - 1,
              Ir = Qr[jr];
            if (!Ir) throw new RangeError("Invalid path: " + rr);
            let fr = new pr(Zr, Wr, jr > 0 ? Qr.slice(0, jr) : null);
            Sr[Ir] = fr.sort(Sr[Ir])
          }
      }
      return Er.add(Sr)
    }
    const Er = new Zr.g({
      combine(rr, Sr) {
        let Qr, Zr, Wr;
        for (; rr || Sr;) {
          if (!rr || Sr && rr.depth >= Sr.depth ? (Wr = Sr, Sr = Sr.next) : (Wr = rr, rr = rr.next), Qr && Qr.mode == Wr.mode && !Wr.context && !Qr.context) continue;
          let ar = new pr(Wr.tags, Wr.mode, Wr.context);
          Qr ? Qr.next = ar : Zr = ar, Qr = ar
        }
        return Zr
      }
    });
    class pr {
      constructor(rr, Sr, Qr, Zr) {
        this.tags = rr, this.mode = Sr, this.context = Qr, this.next = Zr
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(rr) {
        return !rr || rr.depth < this.depth ? (this.next = rr, this) : (rr.next = this.sort(rr.next), rr)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function xr(rr, Sr) {
      let Qr = Object.create(null);
      for (let ar of rr)
        if (Array.isArray(ar.tag))
          for (let rr of ar.tag) Qr[rr.id] = ar.class;
        else Qr[ar.tag.id] = ar.class;
      let {
        scope: Zr,
        all: Wr = null
      } = Sr || {};
      return {
        style: rr => {
          let Sr = Wr;
          for (let Zr of rr)
            for (let rr of Zr.set) {
              let Zr = Qr[rr.id];
              if (Zr) {
                Sr = Sr ? Sr + " " + Zr : Zr;
                break
              }
            }
          return Sr
        },
        scope: Zr
      }
    }

    function mr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rr.length,
        ar = new Nr(Zr, Array.isArray(Sr) ? Sr : [Sr], Qr);
      ar.highlightRange(rr.cursor(), Zr, Wr, "", ar.highlighters), ar.flush(Wr)
    }
    pr.empty = new pr([], 2, null);
    class Nr {
      constructor(rr, Sr, Qr) {
        this.at = rr, this.highlighters = Sr, this.span = Qr, this.class = ""
      }
      startSpan(rr, Sr) {
        Sr != this.class && (this.flush(rr), rr > this.at && (this.at = rr), this.class = Sr)
      }
      flush(rr) {
        rr > this.at && this.class && this.span(this.at, rr, this.class)
      }
      highlightRange(rr, Sr, Qr, Wr, ar) {
        let {
          type: jr,
          from: Ir,
          to: fr
        } = rr;
        if (Ir >= Qr || fr <= Sr) return;
        jr.isTop && (ar = this.highlighters.filter((rr => !rr.scope || rr.scope(jr))));
        let xr = Wr,
          mr = function(rr) {
            let Sr = rr.type.prop(Er);
            for (; Sr && Sr.context && !rr.matchContext(Sr.context);) Sr = Sr.next;
            return Sr || null
          }(rr) || pr.empty,
          Nr = function(rr, Sr) {
            let Qr = null;
            for (let Zr of rr) {
              let rr = Zr.style(Sr);
              rr && (Qr = Qr ? Qr + " " + rr : rr)
            }
            return Qr
          }(ar, mr.tags);
        if (Nr && (xr && (xr += " "), xr += Nr, 1 == mr.mode && (Wr += (Wr ? " " : "") + Nr)), this.startSpan(Math.max(Sr, Ir), xr), mr.opaque) return;
        let Ur = rr.tree && rr.tree.prop(Zr.g.mounted);
        if (Ur && Ur.overlay) {
          let Zr = rr.node.enter(Ur.overlay[0].from + Ir, 1),
            jr = this.highlighters.filter((rr => !rr.scope || rr.scope(Ur.tree.type))),
            Er = rr.firstChild();
          for (let pr = 0, mr = Ir;; pr++) {
            let Nr = pr < Ur.overlay.length ? Ur.overlay[pr] : null,
              tr = Nr ? Nr.from + Ir : fr,
              hr = Math.max(Sr, mr),
              zr = Math.min(Qr, tr);
            if (hr < zr && Er)
              for (; rr.from < zr && (this.highlightRange(rr, hr, zr, Wr, ar), this.startSpan(Math.min(zr, rr.to), xr), !(rr.to >= tr) && rr.nextSibling()););
            if (!Nr || tr > Qr) break;
            mr = Nr.to + Ir, mr > Sr && (this.highlightRange(Zr.cursor(), Math.max(Sr, Nr.from + Ir), Math.min(Qr, mr), "", jr), this.startSpan(Math.min(Qr, mr), xr))
          }
          Er && rr.parent()
        } else if (rr.firstChild()) {
          Ur && (Wr = "");
          do {
            if (!(rr.to <= Sr)) {
              if (rr.from >= Qr) break;
              this.highlightRange(rr, Sr, Qr, Wr, ar), this.startSpan(Math.min(Qr, rr.to), xr)
            }
          } while (rr.nextSibling());
          rr.parent()
        }
      }
    }
    const Ur = ar.define,
      tr = Ur(),
      hr = Ur(),
      zr = Ur(hr),
      Yr = Ur(hr),
      nr = Ur(),
      er = Ur(nr),
      Kr = Ur(nr),
      yr = Ur(),
      Br = Ur(yr),
      Tr = Ur(),
      vr = Ur(),
      Or = Ur(),
      Lr = Ur(Or),
      lr = Ur(),
      Xr = {
        comment: tr,
        lineComment: Ur(tr),
        blockComment: Ur(tr),
        docComment: Ur(tr),
        name: hr,
        variableName: Ur(hr),
        typeName: zr,
        tagName: Ur(zr),
        propertyName: Yr,
        attributeName: Ur(Yr),
        className: Ur(hr),
        labelName: Ur(hr),
        namespace: Ur(hr),
        macroName: Ur(hr),
        literal: nr,
        string: er,
        docString: Ur(er),
        character: Ur(er),
        attributeValue: Ur(er),
        number: Kr,
        integer: Ur(Kr),
        float: Ur(Kr),
        bool: Ur(nr),
        regexp: Ur(nr),
        escape: Ur(nr),
        color: Ur(nr),
        url: Ur(nr),
        keyword: Tr,
        self: Ur(Tr),
        null: Ur(Tr),
        atom: Ur(Tr),
        unit: Ur(Tr),
        modifier: Ur(Tr),
        operatorKeyword: Ur(Tr),
        controlKeyword: Ur(Tr),
        definitionKeyword: Ur(Tr),
        moduleKeyword: Ur(Tr),
        operator: vr,
        derefOperator: Ur(vr),
        arithmeticOperator: Ur(vr),
        logicOperator: Ur(vr),
        bitwiseOperator: Ur(vr),
        compareOperator: Ur(vr),
        updateOperator: Ur(vr),
        definitionOperator: Ur(vr),
        typeOperator: Ur(vr),
        controlOperator: Ur(vr),
        punctuation: Or,
        separator: Ur(Or),
        bracket: Lr,
        angleBracket: Ur(Lr),
        squareBracket: Ur(Lr),
        paren: Ur(Lr),
        brace: Ur(Lr),
        content: yr,
        heading: Br,
        heading1: Ur(Br),
        heading2: Ur(Br),
        heading3: Ur(Br),
        heading4: Ur(Br),
        heading5: Ur(Br),
        heading6: Ur(Br),
        contentSeparator: Ur(yr),
        list: Ur(yr),
        quote: Ur(yr),
        emphasis: Ur(yr),
        strong: Ur(yr),
        link: Ur(yr),
        monospace: Ur(yr),
        strikethrough: Ur(yr),
        inserted: Ur(),
        deleted: Ur(),
        changed: Ur(),
        invalid: Ur(),
        meta: lr,
        documentMeta: Ur(lr),
        annotation: Ur(lr),
        processingInstruction: Ur(lr),
        definition: ar.defineModifier("definition"),
        constant: ar.defineModifier("constant"),
        function: ar.defineModifier("function"),
        standard: ar.defineModifier("standard"),
        local: ar.defineModifier("local"),
        special: ar.defineModifier("special")
      };
    for (let Pr in Xr) {
      let rr = Xr[Pr];
      rr instanceof ar && (rr.name = Pr)
    }
    xr([{
      tag: Xr.link,
      class: "tok-link"
    }, {
      tag: Xr.heading,
      class: "tok-heading"
    }, {
      tag: Xr.emphasis,
      class: "tok-emphasis"
    }, {
      tag: Xr.strong,
      class: "tok-strong"
    }, {
      tag: Xr.keyword,
      class: "tok-keyword"
    }, {
      tag: Xr.atom,
      class: "tok-atom"
    }, {
      tag: Xr.bool,
      class: "tok-bool"
    }, {
      tag: Xr.url,
      class: "tok-url"
    }, {
      tag: Xr.labelName,
      class: "tok-labelName"
    }, {
      tag: Xr.inserted,
      class: "tok-inserted"
    }, {
      tag: Xr.deleted,
      class: "tok-deleted"
    }, {
      tag: Xr.literal,
      class: "tok-literal"
    }, {
      tag: Xr.string,
      class: "tok-string"
    }, {
      tag: Xr.number,
      class: "tok-number"
    }, {
      tag: [Xr.regexp, Xr.escape, Xr.special(Xr.string)],
      class: "tok-string2"
    }, {
      tag: Xr.variableName,
      class: "tok-variableName"
    }, {
      tag: Xr.local(Xr.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: Xr.definition(Xr.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: Xr.special(Xr.variableName),
      class: "tok-variableName2"
    }, {
      tag: Xr.definition(Xr.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: Xr.typeName,
      class: "tok-typeName"
    }, {
      tag: Xr.namespace,
      class: "tok-namespace"
    }, {
      tag: Xr.className,
      class: "tok-className"
    }, {
      tag: Xr.macroName,
      class: "tok-macroName"
    }, {
      tag: Xr.propertyName,
      class: "tok-propertyName"
    }, {
      tag: Xr.operator,
      class: "tok-operator"
    }, {
      tag: Xr.comment,
      class: "tok-comment"
    }, {
      tag: Xr.meta,
      class: "tok-meta"
    }, {
      tag: Xr.invalid,
      class: "tok-invalid"
    }, {
      tag: Xr.punctuation,
      class: "tok-punctuation"
    }])
  },
  53908: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir.i,
      d: () => jr.C,
      f: () => jr.P,
      i: () => jr.T,
      m: () => Ir.m,
      o: () => BQ,
      p: () => Ir.Q,
      t: () => Ir.nb
    });
    var Zr = Qr(1508),
      Wr = Qr(1505),
      ar = Qr(72),
      jr = Qr(53864),
      Ir = Qr(53872),
      fr = Qr(53892),
      Er = Qr(53895);

    function pr(rr, Sr) {
      return Qr => {
        let {
          state: Zr,
          dispatch: Wr
        } = Qr;
        if (Zr.readOnly) return !1;
        let ar = rr(Sr, Zr);
        return !!ar && (Wr(Zr.update(ar)), !0)
      }
    }
    const xr = pr(zr, 0),
      mr = pr(hr, 0),
      Nr = pr(((rr, Sr) => hr(rr, Sr, function(rr) {
        let Sr = [];
        for (let Qr of rr.selection.yh) {
          let Zr = rr.doc.lineAt(Qr.from),
            Wr = Qr.to <= Zr.to ? Zr : rr.doc.lineAt(Qr.to);
          Wr.from > Zr.from && Wr.from == Qr.to && (Wr = Qr.to == Zr.to + 1 ? Zr : rr.doc.lineAt(Qr.to - 1));
          let ar = Sr.length - 1;
          ar >= 0 && Sr[ar].to > Zr.from ? Sr[ar].to = Wr.to : Sr.push({
            from: Zr.from + /^\s*/.exec(Zr.text)[0].length,
            to: Wr.to
          })
        }
        return Sr
      }(Sr))), 0);

    function Ur(rr, Sr) {
      let Qr = rr.languageDataAt("commentTokens", Sr, 1);
      return Qr.length ? Qr[0] : {}
    }
    const tr = 50;

    function hr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sr.selection.yh,
        Zr = Qr.map((rr => Ur(Sr, rr.from).block));
      if (!Zr.every((rr => rr))) return null;
      let Wr = Qr.map(((rr, Qr) => function(rr, Sr, Qr, Zr) {
        let Wr, ar, {
            open: jr,
            close: Ir
          } = Sr,
          fr = rr.sliceDoc(Qr - tr, Qr),
          Er = rr.sliceDoc(Zr, Zr + tr),
          pr = /\s*$/.exec(fr)[0].length,
          xr = /^\s*/.exec(Er)[0].length,
          mr = fr.length - pr;
        if (fr.slice(mr - jr.length, mr) == jr && Er.slice(xr, xr + Ir.length) == Ir) return {
          open: {
            pos: Qr - pr,
            margin: pr && 1
          },
          close: {
            pos: Zr + xr,
            margin: xr && 1
          }
        };
        Zr - Qr <= 2 * tr ? Wr = ar = rr.sliceDoc(Qr, Zr) : (Wr = rr.sliceDoc(Qr, Qr + tr), ar = rr.sliceDoc(Zr - tr, Zr));
        let Nr = /^\s*/.exec(Wr)[0].length,
          Ur = /\s*$/.exec(ar)[0].length,
          hr = ar.length - Ur - Ir.length;
        return Wr.slice(Nr, Nr + jr.length) == jr && ar.slice(hr, hr + Ir.length) == Ir ? {
          open: {
            pos: Qr + Nr + jr.length,
            margin: /\s/.test(Wr.charAt(Nr + jr.length)) ? 1 : 0
          },
          close: {
            pos: Zr - Ur - Ir.length,
            margin: /\s/.test(ar.charAt(hr - 1)) ? 1 : 0
          }
        } : null
      }(Sr, Zr[Qr], rr.from, rr.to)));
      if (2 != rr && !Wr.every((rr => rr))) return {
        changes: Sr.changes(Qr.map(((rr, Sr) => Wr[Sr] ? [] : [{
          from: rr.from,
          insert: Zr[Sr].open + " "
        }, {
          from: rr.to,
          insert: " " + Zr[Sr].close
        }])))
      };
      if (1 != rr && Wr.some((rr => rr))) {
        let rr = [];
        for (let Sr, Qr = 0; Qr < Wr.length; Qr++)
          if (Sr = Wr[Qr]) {
            let Wr = Zr[Qr],
              {
                open: ar,
                close: jr
              } = Sr;
            rr.push({
              from: ar.pos - Wr.open.length,
              to: ar.pos + ar.margin
            }, {
              from: jr.pos - jr.margin,
              to: jr.pos + Wr.close.length
            })
          } return {
          changes: rr
        }
      }
      return null
    }

    function zr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sr.selection.yh,
        Zr = [],
        Wr = -1;
      rr: for (let {
          from: ar,
          to: jr
        }
        of Qr) {
        let rr, Qr = Zr.length,
          Ir = 1e9;
        for (let fr = ar; fr <= jr;) {
          let Qr = Sr.doc.lineAt(fr);
          if (void 0 == rr && (rr = Ur(Sr, Qr.from).line, !rr)) continue rr;
          if (Qr.from > Wr && (ar == jr || jr > Qr.from)) {
            Wr = Qr.from;
            let Sr = /^\s*/.exec(Qr.text)[0].length,
              ar = Sr == Qr.length,
              jr = Qr.text.slice(Sr, Sr + rr.length) == rr ? Sr : -1;
            Sr < Qr.text.length && Sr < Ir && (Ir = Sr), Zr.push({
              line: Qr,
              comment: jr,
              token: rr,
              indent: Sr,
              empty: ar,
              single: !1
            })
          }
          fr = Qr.to + 1
        }
        if (Ir < 1e9)
          for (let Sr = Qr; Sr < Zr.length; Sr++) Zr[Sr].indent < Zr[Sr].line.text.length && (Zr[Sr].indent = Ir);
        Zr.length == Qr + 1 && (Zr[Qr].single = !0)
      }
      if (2 != rr && Zr.some((rr => rr.comment < 0 && (!rr.empty || rr.single)))) {
        let rr = [];
        for (let {
            line: Sr,
            token: Wr,
            indent: ar,
            empty: jr,
            single: Ir
          }
          of Zr) !Ir && jr || rr.push({
          from: Sr.from + ar,
          insert: Wr + " "
        });
        let Qr = Sr.changes(rr);
        return {
          changes: Qr,
          selection: Sr.selection.map(Qr, 1)
        }
      }
      if (1 != rr && Zr.some((rr => rr.comment >= 0))) {
        let rr = [];
        for (let {
            line: Sr,
            comment: Qr,
            token: Wr
          }
          of Zr)
          if (Qr >= 0) {
            let Zr = Sr.from + Qr,
              ar = Zr + Wr.length;
            " " == Sr.text[ar - Sr.from] && ar++, rr.push({
              from: Zr,
              to: ar
            })
          } return {
          changes: rr
        }
      }
      return null
    }
    const Yr = jr.e.define(),
      nr = jr.e.define(),
      er = jr.u.define(),
      Kr = jr.u.define({
        combine: rr => (0, jr.db)(rr, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (rr, Sr) => Sr
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (rr, Sr) => (Qr, Zr) => rr(Qr, Zr) || Sr(Qr, Zr)
        })
      }),
      yr = jr.T.define({
        create: () => kr.empty,
        update(rr, Sr) {
          let Qr = Sr.state.facet(Kr),
            Zr = Sr.annotation(Yr);
          if (Zr) {
            let Wr = lr.fromTransaction(Sr, Zr.selection),
              ar = Zr.side,
              jr = 0 == ar ? rr.undone : rr.done;
            return jr = Wr ? Xr(jr, jr.length, Qr.minDepth, Wr) : Rr(jr, Sr.startState.selection), new kr(0 == ar ? Zr.rest : jr, 0 == ar ? jr : Zr.rest)
          }
          let Wr = Sr.annotation(nr);
          if ("full" != Wr && "before" != Wr || (rr = rr.isolate()), !1 === Sr.annotation(jr.Y.addToHistory)) return Sr.changes.empty ? rr : rr.addMapping(Sr.changes.desc);
          let ar = lr.fromTransaction(Sr),
            Ir = Sr.annotation(jr.Y.time),
            fr = Sr.annotation(jr.Y.userEvent);
          return ar ? rr = rr.addChanges(ar, Ir, fr, Qr, Sr) : Sr.selection && (rr = rr.addSelection(Sr.startState.selection, Ir, fr, Qr.newGroupDelay)), "full" != Wr && "after" != Wr || (rr = rr.isolate()), rr
        },
        toJSON: rr => ({
          done: rr.done.map((rr => rr.toJSON())),
          undone: rr.undone.map((rr => rr.toJSON()))
        }),
        fromJSON: rr => new kr(rr.done.map(lr.fromJSON), rr.undone.map(lr.fromJSON))
      });

    function Br(rr, Sr) {
      return function(Qr) {
        let {
          state: Zr,
          dispatch: Wr
        } = Qr;
        if (!Sr && Zr.readOnly) return !1;
        let ar = Zr.field(yr, !1);
        if (!ar) return !1;
        let jr = ar.pop(rr, Zr, Sr);
        return !!jr && (Wr(jr), !0)
      }
    }
    const Tr = Br(0, !1),
      vr = Br(1, !1),
      Or = Br(0, !0),
      Lr = Br(1, !0);
    class lr {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.changes = rr, this.effects = Sr, this.mapped = Qr, this.startSelection = Zr, this.selectionsAfter = Wr
      }
      setSelAfter(rr) {
        return new lr(this.changes, this.effects, this.mapped, this.startSelection, rr)
      }
      toJSON() {
        var rr, Sr, Qr;
        return {
          changes: null === (rr = this.changes) || void 0 === rr ? void 0 : rr.toJSON(),
          mapped: null === (Sr = this.mapped) || void 0 === Sr ? void 0 : Sr.toJSON(),
          startSelection: null === (Qr = this.startSelection) || void 0 === Qr ? void 0 : Qr.toJSON(),
          selectionsAfter: this.selectionsAfter.map((rr => rr.toJSON()))
        }
      }
      static fromJSON(rr) {
        return new lr(rr.changes && jr.ChangeSet.fromJSON(rr.changes), [], rr.mapped && jr.g.fromJSON(rr.mapped), rr.startSelection && jr.m.fromJSON(rr.startSelection), rr.selectionsAfter.map(jr.m.fromJSON))
      }
      static fromTransaction(rr, Sr) {
        let Qr = Hr;
        for (let Zr of rr.startState.facet(er)) {
          let Sr = Zr(rr);
          Sr.length && (Qr = Qr.concat(Sr))
        }
        return !Qr.length && rr.changes.empty ? null : new lr(rr.changes.invert(rr.startState.doc), Qr, void 0, Sr || rr.startState.selection, Hr)
      }
      static selection(rr) {
        return new lr(void 0, Hr, void 0, void 0, rr)
      }
    }

    function Xr(rr, Sr, Qr, Zr) {
      let Wr = Sr + 1 > Qr + 20 ? Sr - Qr - 1 : 0,
        ar = rr.slice(Wr, Sr);
      return ar.push(Zr), ar
    }

    function Pr(rr, Sr) {
      return rr.length ? Sr.length ? rr.concat(Sr) : rr : Sr
    }
    const Hr = [],
      qr = 200;

    function Rr(rr, Sr) {
      if (rr.length) {
        let Qr = rr[rr.length - 1],
          Zr = Qr.selectionsAfter.slice(Math.max(0, Qr.selectionsAfter.length - qr));
        return Zr.length && Zr[Zr.length - 1].eq(Sr) ? rr : (Zr.push(Sr), Xr(rr, rr.length - 1, 1e9, Qr.setSelAfter(Zr)))
      }
      return [lr.selection([Sr])]
    }

    function gr(rr) {
      let Sr = rr[rr.length - 1],
        Qr = rr.slice();
      return Qr[rr.length - 1] = Sr.setSelAfter(Sr.selectionsAfter.slice(0, Sr.selectionsAfter.length - 1)), Qr
    }

    function Cr(rr, Sr) {
      if (!rr.length) return rr;
      let Qr = rr.length,
        Zr = Hr;
      for (; Qr;) {
        let Wr = Mr(rr[Qr - 1], Sr, Zr);
        if (Wr.changes && !Wr.changes.empty || Wr.effects.length) {
          let Sr = rr.slice(0, Qr);
          return Sr[Qr - 1] = Wr, Sr
        }
        Sr = Wr.mapped, Qr--, Zr = Wr.selectionsAfter
      }
      return Zr.length ? [lr.selection(Zr)] : Hr
    }

    function Mr(rr, Sr, Qr) {
      let Zr = Pr(rr.selectionsAfter.length ? rr.selectionsAfter.map((rr => rr.map(Sr))) : Hr, Qr);
      if (!rr.changes) return lr.selection(Zr);
      let Wr = rr.changes.map(Sr),
        ar = Sr.mapDesc(rr.changes, !0),
        Ir = rr.mapped ? rr.mapped.composeDesc(ar) : ar;
      return new lr(Wr, jr.P.mapEffects(rr.effects, Sr), Ir, rr.startSelection.map(ar), Zr)
    }
    const Gr = /^(input\.type|delete)($|\.)/;
    class kr {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = rr, this.undone = Sr, this.prevTime = Qr, this.prevUserEvent = Zr
      }
      isolate() {
        return this.prevTime ? new kr(this.done, this.undone) : this
      }
      addChanges(rr, Sr, Qr, Zr, Wr) {
        let ar = this.done,
          Ir = ar[ar.length - 1];
        return ar = Ir && Ir.changes && !Ir.changes.empty && rr.changes && (!Qr || Gr.test(Qr)) && (!Ir.selectionsAfter.length && Sr - this.prevTime < Zr.newGroupDelay && Zr.joinToEvent(Wr, function(rr, Sr) {
          let Qr = [],
            Zr = !1;
          return rr.iterChangedRanges(((rr, Sr) => Qr.push(rr, Sr))), Sr.iterChangedRanges(((rr, Sr, Wr, ar) => {
            for (let jr = 0; jr < Qr.length;) {
              let rr = Qr[jr++],
                Sr = Qr[jr++];
              ar >= rr && Wr <= Sr && (Zr = !0)
            }
          })), Zr
        }(Ir.changes, rr.changes)) || "input.type.compose" == Qr) ? Xr(ar, ar.length - 1, Zr.minDepth, new lr(rr.changes.compose(Ir.changes), Pr(jr.P.mapEffects(rr.effects, Ir.changes), Ir.effects), Ir.mapped, Ir.startSelection, Hr)) : Xr(ar, ar.length, Zr.minDepth, rr), new kr(ar, Hr, Sr, Qr)
      }
      addSelection(rr, Sr, Qr, Zr) {
        let Wr = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Hr;
        return Wr.length > 0 && Sr - this.prevTime < Zr && Qr == this.prevUserEvent && Qr && /^select($|\.)/.test(Qr) && (ar = Wr[Wr.length - 1], jr = rr, ar.yh.length == jr.yh.length && 0 === ar.yh.filter(((rr, Sr) => rr.empty != jr.yh[Sr].empty)).length) ? this : new kr(Rr(this.done, rr), this.undone, Sr, Qr);
        var ar, jr
      }
      addMapping(rr) {
        return new kr(Cr(this.done, rr), Cr(this.undone, rr), this.prevTime, this.prevUserEvent)
      }
      pop(rr, Sr, Qr) {
        let Zr = 0 == rr ? this.done : this.undone;
        if (0 == Zr.length) return null;
        let Wr = Zr[Zr.length - 1],
          ar = Wr.selectionsAfter[0] || (Wr.startSelection ? Wr.startSelection.map(Wr.changes.invertedDesc, 1) : Sr.selection);
        if (Qr && Wr.selectionsAfter.length) return Sr.update({
          selection: Wr.selectionsAfter[Wr.selectionsAfter.length - 1],
          annotations: Yr.of({
            side: rr,
            rest: gr(Zr),
            selection: ar
          }),
          userEvent: 0 == rr ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (Wr.changes) {
          let Qr = 1 == Zr.length ? Hr : Zr.slice(0, Zr.length - 1);
          return Wr.mapped && (Qr = Cr(Qr, Wr.mapped)), Sr.update({
            changes: Wr.changes,
            selection: Wr.startSelection,
            effects: Wr.effects,
            annotations: Yr.of({
              side: rr,
              rest: Qr,
              selection: ar
            }),
            filter: !1,
            userEvent: 0 == rr ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    kr.empty = new kr(Hr, Hr);
    const Ar = [{
      key: "Mod-z",
      run: Tr,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: vr,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: vr,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: Or,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Lr,
      preventDefault: !0
    }];

    function Vr(rr, Sr) {
      return jr.m.create(rr.yh.map(Sr), rr.mainIndex)
    }

    function ir(rr, Sr) {
      return rr.update({
        selection: Sr,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function wr(rr, Sr) {
      let {
        state: Qr,
        dispatch: Zr
      } = rr, Wr = Vr(Qr.selection, Sr);
      return !Wr.eq(Qr.selection, !0) && (Zr(ir(Qr, Wr)), !0)
    }

    function cr(rr, Sr) {
      return jr.m.cursor(Sr ? rr.to : rr.from)
    }

    function Fr(rr, Sr) {
      return wr(rr, (Qr => Qr.empty ? rr.moveByChar(Qr, Sr) : cr(Qr, Sr)))
    }

    function or(rr) {
      return rr.textDirectionAt(rr.state.selection.main.head) == Ir.f.LTR
    }
    const br = rr => Fr(rr, !or(rr)),
      Jr = rr => Fr(rr, or(rr));

    function Dr(rr, Sr) {
      return wr(rr, (Qr => Qr.empty ? rr.moveByGroup(Qr, Sr) : cr(Qr, Sr)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function dr(rr, Sr, Qr) {
      if (Sr.type.prop(Qr)) return !0;
      let Zr = Sr.to - Sr.from;
      return Zr && (Zr > 2 || /[^\s,.;:]/.test(rr.sliceDoc(Sr.from, Sr.to))) || Sr.firstChild
    }

    function sr(rr, Sr, Qr) {
      let Zr, Wr, ar = (0, fr.xb)(rr).resolveInner(Sr.head),
        Ir = Qr ? Er.g.closedBy : Er.g.openedBy;
      for (let jr = Sr.head;;) {
        let Sr = Qr ? ar.childAfter(jr) : ar.childBefore(jr);
        if (!Sr) break;
        dr(rr, Sr, Ir) ? ar = Sr : jr = Qr ? Sr.to : Sr.from
      }
      return Wr = ar.type.prop(Ir) && (Zr = Qr ? (0, fr.jb)(rr, ar.from, 1) : (0, fr.jb)(rr, ar.to, -1)) && Zr.matched ? Qr ? Zr.end.to : Zr.end.from : Qr ? ar.to : ar.from, jr.m.cursor(Wr, Qr ? -1 : 1)
    }

    function ur(rr, Sr) {
      return wr(rr, (Qr => {
        if (!Qr.empty) return cr(Qr, Sr);
        let Zr = rr.moveVertically(Qr, Sr);
        return Zr.head != Qr.head ? Zr : rr.moveToLineBoundary(Qr, Sr)
      }))
    }
    const rS = rr => ur(rr, !1),
      SS = rr => ur(rr, !0);

    function QS(rr) {
      let Sr, Qr = rr.scrollDOM.clientHeight < rr.scrollDOM.scrollHeight - 2,
        Zr = 0,
        Wr = 0;
      if (Qr) {
        for (let Sr of rr.state.facet(Ir.i.scrollMargins)) {
          let Qr = Sr(rr);
          (null === Qr || void 0 === Qr ? void 0 : Qr.top) && (Zr = Math.max(null === Qr || void 0 === Qr ? void 0 : Qr.top, Zr)), (null === Qr || void 0 === Qr ? void 0 : Qr.bottom) && (Wr = Math.max(null === Qr || void 0 === Qr ? void 0 : Qr.bottom, Wr))
        }
        Sr = rr.scrollDOM.clientHeight - Zr - Wr
      } else Sr = (rr.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Zr,
        marginBottom: Wr,
        selfScroll: Qr,
        height: Math.max(rr.defaultLineHeight, Sr - 5)
      }
    }

    function ZS(rr, Sr) {
      let Qr, Zr = QS(rr),
        {
          state: Wr
        } = rr,
        ar = Vr(Wr.selection, (Qr => Qr.empty ? rr.moveVertically(Qr, Sr, Zr.height) : cr(Qr, Sr)));
      if (ar.eq(Wr.selection)) return !1;
      if (Zr.selfScroll) {
        let Sr = rr.coordsAtPos(Wr.selection.main.head),
          jr = rr.scrollDOM.getBoundingClientRect(),
          fr = jr.top + Zr.marginTop,
          Er = jr.bottom - Zr.marginBottom;
        Sr && Sr.top > fr && Sr.bottom < Er && (Qr = Ir.i.scrollIntoView(ar.main.head, {
          y: "start",
          yMargin: Sr.top - fr
        }))
      }
      return rr.dispatch(ir(Wr, ar), {
        effects: Qr
      }), !0
    }
    const WS = rr => ZS(rr, !1),
      aS = rr => ZS(rr, !0);

    function jS(rr, Sr, Qr) {
      let Zr = rr.lineBlockAt(Sr.head),
        Wr = rr.moveToLineBoundary(Sr, Qr);
      if (Wr.head == Sr.head && Wr.head != (Qr ? Zr.to : Zr.from) && (Wr = rr.moveToLineBoundary(Sr, Qr, !1)), !Qr && Wr.head == Zr.from && Zr.length) {
        let Qr = /^\s*/.exec(rr.state.sliceDoc(Zr.from, Math.min(Zr.from + 100, Zr.to)))[0].length;
        Qr && Sr.head != Zr.from + Qr && (Wr = jr.m.cursor(Zr.from + Qr))
      }
      return Wr
    }

    function IS(rr, Sr, Qr) {
      let Zr = !1,
        Wr = Vr(rr.selection, (Sr => {
          let Wr = (0, fr.jb)(rr, Sr.head, -1) || (0, fr.jb)(rr, Sr.head, 1) || Sr.head > 0 && (0, fr.jb)(rr, Sr.head - 1, 1) || Sr.head < rr.doc.length && (0, fr.jb)(rr, Sr.head + 1, -1);
          if (!Wr || !Wr.end) return Sr;
          Zr = !0;
          let ar = Wr.start.from == Sr.head ? Wr.end.to : Wr.end.from;
          return Qr ? jr.m.range(Sr.anchor, ar) : jr.m.cursor(ar)
        }));
      return !!Zr && (Sr(ir(rr, Wr)), !0)
    }

    function fS(rr, Sr) {
      let Qr = Vr(rr.state.selection, (rr => {
        let Qr = Sr(rr);
        return jr.m.range(rr.anchor, Qr.head, Qr.goalColumn, Qr.bidiLevel || void 0, Qr.assoc)
      }));
      return !Qr.eq(rr.state.selection) && (rr.dispatch(ir(rr.state, Qr)), !0)
    }

    function ES(rr, Sr) {
      return fS(rr, (Qr => rr.moveByChar(Qr, Sr)))
    }
    const pS = rr => ES(rr, !or(rr)),
      xS = rr => ES(rr, or(rr));

    function mS(rr, Sr) {
      return fS(rr, (Qr => rr.moveByGroup(Qr, Sr)))
    }

    function NS(rr, Sr) {
      return fS(rr, (Qr => rr.moveVertically(Qr, Sr)))
    }
    const US = rr => NS(rr, !1),
      tS = rr => NS(rr, !0);

    function hS(rr, Sr) {
      return fS(rr, (Qr => rr.moveVertically(Qr, Sr, QS(rr).height)))
    }
    const zS = rr => hS(rr, !1),
      YS = rr => hS(rr, !0),
      nS = rr => {
        let {
          state: Sr,
          dispatch: Qr
        } = rr;
        return Qr(ir(Sr, {
          anchor: 0
        })), !0
      },
      eS = rr => {
        let {
          state: Sr,
          dispatch: Qr
        } = rr;
        return Qr(ir(Sr, {
          anchor: Sr.doc.length
        })), !0
      },
      KS = rr => {
        let {
          state: Sr,
          dispatch: Qr
        } = rr;
        return Qr(ir(Sr, {
          anchor: Sr.selection.main.anchor,
          head: 0
        })), !0
      },
      yS = rr => {
        let {
          state: Sr,
          dispatch: Qr
        } = rr;
        return Qr(ir(Sr, {
          anchor: Sr.selection.main.anchor,
          head: Sr.doc.length
        })), !0
      };

    function BS(rr, Sr) {
      let {
        state: Qr
      } = rr, Zr = Qr.selection, Wr = Qr.selection.yh.slice();
      for (let ar of Qr.selection.yh) {
        let Zr = Qr.doc.lineAt(ar.head);
        if (Sr ? Zr.to < rr.state.doc.length : Zr.from > 0)
          for (let Qr = ar;;) {
            let ar = rr.moveVertically(Qr, Sr);
            if (ar.head < Zr.from || ar.head > Zr.to) {
              Wr.some((rr => rr.head == ar.head)) || Wr.push(ar);
              break
            }
            if (ar.head == Qr.head) break;
            Qr = ar
          }
      }
      return Wr.length != Zr.yh.length && (rr.dispatch(ir(Qr, jr.m.create(Wr, Wr.length - 1))), !0)
    }

    function TS(rr, Sr) {
      if (rr.state.readOnly) return !1;
      let Qr = "delete.selection",
        {
          state: Zr
        } = rr,
        Wr = Zr.changeByRange((Zr => {
          let {
            from: Wr,
            to: ar
          } = Zr;
          if (Wr == ar) {
            let jr = Sr(Zr);
            jr < Wr ? (Qr = "delete.backward", jr = vS(rr, jr, !1)) : jr > Wr && (Qr = "delete.forward", jr = vS(rr, jr, !0)), Wr = Math.min(Wr, jr), ar = Math.max(ar, jr)
          } else Wr = vS(rr, Wr, !1), ar = vS(rr, ar, !0);
          return Wr == ar ? {
            range: Zr
          } : {
            changes: {
              from: Wr,
              to: ar
            },
            range: jr.m.cursor(Wr, Wr < Zr.head ? -1 : 1)
          }
        }));
      return !Wr.changes.empty && (rr.dispatch(Zr.update(Wr, {
        scrollIntoView: !0,
        userEvent: Qr,
        effects: "delete.selection" == Qr ? Ir.i.announce.of(Zr.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function vS(rr, Sr, Qr) {
      if (rr instanceof Ir.i)
        for (let Zr of rr.state.facet(Ir.i.atomicRanges).map((Sr => Sr(rr)))) Zr.between(Sr, Sr, ((rr, Zr) => {
          rr < Sr && Zr > Sr && (Sr = Qr ? Zr : rr)
        }));
      return Sr
    }
    const OS = (rr, Sr, Qr) => TS(rr, (Zr => {
        let Wr, ar, Ir = Zr.from,
          {
            state: Er
          } = rr,
          pr = Er.doc.lineAt(Ir);
        if (Qr && !Sr && Ir > pr.from && Ir < pr.from + 200 && !/[^ \t]/.test(Wr = pr.text.slice(0, Ir - pr.from))) {
          if ("\t" == Wr[Wr.length - 1]) return Ir - 1;
          let rr = (0, jr.eb)(Wr, Er.tabSize) % (0, fr.S)(Er) || (0, fr.S)(Er);
          for (let Sr = 0; Sr < rr && " " == Wr[Wr.length - 1 - Sr]; Sr++) Ir--;
          ar = Ir
        } else ar = (0, jr.ib)(pr.text, Ir - pr.from, Sr, Sr) + pr.from, ar == Ir && pr.number != (Sr ? Er.doc.lines : 1) ? ar += Sr ? 1 : -1 : !Sr && /[\ufe00-\ufe0f]/.test(pr.text.slice(ar - pr.from, Ir - pr.from)) && (ar = (0, jr.ib)(pr.text, ar - pr.from, !1, !1) + pr.from);
        return ar
      })),
      LS = rr => OS(rr, !1, !0),
      lS = rr => OS(rr, !0, !1),
      XS = (rr, Sr) => TS(rr, (Qr => {
        let Zr = Qr.head,
          {
            state: Wr
          } = rr,
          ar = Wr.doc.lineAt(Zr),
          Ir = Wr.charCategorizer(Zr);
        for (let rr = null;;) {
          if (Zr == (Sr ? ar.to : ar.from)) {
            Zr == Qr.head && ar.number != (Sr ? Wr.doc.lines : 1) && (Zr += Sr ? 1 : -1);
            break
          }
          let fr = (0, jr.ib)(ar.text, Zr - ar.from, Sr) + ar.from,
            Er = ar.text.slice(Math.min(Zr, fr) - ar.from, Math.max(Zr, fr) - ar.from),
            pr = Ir(Er);
          if (null != rr && pr != rr) break;
          " " == Er && Zr == Qr.head || (rr = pr), Zr = fr
        }
        return Zr
      })),
      PS = rr => XS(rr, !1);

    function HS(rr) {
      let Sr = [],
        Qr = -1;
      for (let Zr of rr.selection.yh) {
        let Wr = rr.doc.lineAt(Zr.from),
          ar = rr.doc.lineAt(Zr.to);
        if (Zr.empty || Zr.to != ar.from || (ar = rr.doc.lineAt(Zr.to - 1)), Qr >= Wr.number) {
          let rr = Sr[Sr.length - 1];
          rr.to = ar.to, rr.yh.push(Zr)
        } else Sr.push({
          from: Wr.from,
          to: ar.to,
          yh: [Zr]
        });
        Qr = ar.number + 1
      }
      return Sr
    }

    function qS(rr, Sr, Qr) {
      if (rr.readOnly) return !1;
      let Zr = [],
        Wr = [];
      for (let ar of HS(rr)) {
        if (Qr ? ar.to == rr.doc.length : 0 == ar.from) continue;
        let Sr = rr.doc.lineAt(Qr ? ar.to + 1 : ar.from - 1),
          Ir = Sr.length + 1;
        if (Qr) {
          Zr.push({
            from: ar.to,
            to: Sr.to
          }, {
            from: ar.from,
            insert: Sr.text + rr.lineBreak
          });
          for (let Sr of ar.yh) Wr.push(jr.m.range(Math.min(rr.doc.length, Sr.anchor + Ir), Math.min(rr.doc.length, Sr.head + Ir)))
        } else {
          Zr.push({
            from: Sr.from,
            to: ar.from
          }, {
            from: ar.to,
            insert: rr.lineBreak + Sr.text
          });
          for (let rr of ar.yh) Wr.push(jr.m.range(rr.anchor - Ir, rr.head - Ir))
        }
      }
      return !!Zr.length && (Sr(rr.update({
        changes: Zr,
        scrollIntoView: !0,
        selection: jr.m.create(Wr, rr.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function RS(rr, Sr, Qr) {
      if (rr.readOnly) return !1;
      let Zr = [];
      for (let ar of HS(rr)) Qr ? Zr.push({
        from: ar.from,
        insert: rr.doc.slice(ar.from, ar.to) + rr.lineBreak
      }) : Zr.push({
        from: ar.to,
        insert: rr.lineBreak + rr.doc.slice(ar.from, ar.to)
      });
      let Wr = rr.changes(Zr);
      return Sr(rr.update({
        changes: Wr,
        selection: rr.selection.map(Wr, Qr ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const gS = CS(!1);

    function CS(rr) {
      return Sr => {
        let {
          state: Qr,
          dispatch: Zr
        } = Sr;
        if (Qr.readOnly) return !1;
        let Wr = Qr.changeByRange((Sr => {
          let {
            from: Zr,
            to: Wr
          } = Sr, ar = Qr.doc.lineAt(Zr), Ir = !rr && Zr == Wr && function(rr, Sr) {
            if (/\(\)|\[\]|\{\}/.test(rr.sliceDoc(Sr - 1, Sr + 1))) return {
              from: Sr,
              to: Sr
            };
            let Qr, Zr = (0, fr.xb)(rr).resolveInner(Sr),
              Wr = Zr.childBefore(Sr),
              ar = Zr.childAfter(Sr);
            return Wr && ar && Wr.to <= Sr && ar.from >= Sr && (Qr = Wr.type.prop(Er.g.closedBy)) && Qr.indexOf(ar.name) > -1 && rr.doc.lineAt(Wr.to).from == rr.doc.lineAt(ar.from).from && !/\S/.test(rr.sliceDoc(Wr.to, ar.from)) ? {
              from: Wr.to,
              to: ar.from
            } : null
          }(Qr, Zr);
          rr && (Zr = Wr = (Wr <= ar.to ? ar : Qr.doc.lineAt(Wr)).to);
          let pr = new fr.d(Qr, {
              simulateBreak: Zr,
              simulateDoubleBreak: !!Ir
            }),
            xr = (0, fr.V)(pr, Zr);
          for (null == xr && (xr = (0, jr.eb)(/^\s*/.exec(Qr.doc.lineAt(Zr).text)[0], Qr.tabSize)); Wr < ar.to && /\s/.test(ar.text[Wr - ar.from]);) Wr++;
          Ir ? ({
            from: Zr,
            to: Wr
          } = Ir) : Zr > ar.from && Zr < ar.from + 100 && !/\S/.test(ar.text.slice(0, Zr)) && (Zr = ar.from);
          let mr = ["", (0, fr.eb)(Qr, xr)];
          return Ir && mr.push((0, fr.eb)(Qr, pr.lineIndent(ar.from, -1))), {
            changes: {
              from: Zr,
              to: Wr,
              insert: jr.V.of(mr)
            },
            range: jr.m.cursor(Zr + 1 + mr[1].length)
          }
        }));
        return Zr(Qr.update(Wr, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function MS(rr, Sr) {
      let Qr = -1;
      return rr.changeByRange((Zr => {
        let Wr = [];
        for (let jr = Zr.from; jr <= Zr.to;) {
          let ar = rr.doc.lineAt(jr);
          ar.number > Qr && (Zr.empty || Zr.to > ar.from) && (Sr(ar, Wr, Zr), Qr = ar.number), jr = ar.to + 1
        }
        let ar = rr.changes(Wr);
        return {
          changes: Wr,
          range: jr.m.range(ar.mapPos(Zr.anchor, 1), ar.mapPos(Zr.head, 1))
        }
      }))
    }
    const GS = rr => {
        let {
          state: Sr,
          dispatch: Qr
        } = rr;
        return !Sr.readOnly && (Qr(Sr.update(MS(Sr, ((rr, Qr) => {
          Qr.push({
            from: rr.from,
            insert: Sr.facet(fr.hb)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      kS = rr => {
        let {
          state: Sr,
          dispatch: Qr
        } = rr;
        return !Sr.readOnly && (Qr(Sr.update(MS(Sr, ((rr, Qr) => {
          let Zr = /^\s*/.exec(rr.text)[0];
          if (!Zr) return;
          let Wr = (0, jr.eb)(Zr, Sr.tabSize),
            ar = 0,
            Ir = (0, fr.eb)(Sr, Math.max(0, Wr - (0, fr.S)(Sr)));
          for (; ar < Zr.length && ar < Ir.length && Zr.charCodeAt(ar) == Ir.charCodeAt(ar);) ar++;
          Qr.push({
            from: rr.from + ar,
            to: rr.from + Zr.length,
            insert: Ir.slice(ar)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      AS = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: rr => wr(rr, (Sr => sr(rr.state, Sr, !or(rr)))),
        shift: rr => fS(rr, (Sr => sr(rr.state, Sr, !or(rr))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: rr => wr(rr, (Sr => sr(rr.state, Sr, or(rr)))),
        shift: rr => fS(rr, (Sr => sr(rr.state, Sr, or(rr))))
      }, {
        key: "Alt-ArrowUp",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr;
          return qS(Sr, Qr, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr;
          return RS(Sr, Qr, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr;
          return qS(Sr, Qr, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr;
          return RS(Sr, Qr, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: rr => BS(rr, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: rr => BS(rr, !0)
      }, {
        key: "Escape",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr, Zr = Sr.selection, Wr = null;
          return Zr.yh.length > 1 ? Wr = jr.m.create([Zr.main]) : Zr.main.empty || (Wr = jr.m.create([jr.m.cursor(Zr.main.head)])), !!Wr && (Qr(ir(Sr, Wr)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: CS(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr, Zr = HS(Sr).map((rr => {
            let {
              from: Qr,
              to: Zr
            } = rr;
            return jr.m.range(Qr, Math.min(Zr + 1, Sr.doc.length))
          }));
          return Qr(Sr.update({
            selection: jr.m.create(Zr),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr, Zr = Vr(Sr.selection, (rr => {
            let Qr = (0, fr.xb)(Sr),
              Zr = Qr.resolveStack(rr.from, 1);
            if (rr.empty) {
              let Sr = Qr.resolveStack(rr.from, -1);
              Sr.node.from >= Zr.node.from && Sr.node.to <= Zr.node.to && (Zr = Sr)
            }
            for (let Sr = Zr; Sr; Sr = Sr.next) {
              let {
                node: Qr
              } = Sr;
              if ((Qr.from < rr.from && Qr.to >= rr.to || Qr.to > rr.to && Qr.from <= rr.from) && Sr.next) return jr.m.range(Qr.to, Qr.from)
            }
            return rr
          }));
          return !Zr.eq(Sr.selection) && (Qr(ir(Sr, Zr)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: kS
      }, {
        key: "Mod-]",
        run: GS
      }, {
        key: "Mod-Alt-\\",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr;
          if (Sr.readOnly) return !1;
          let Zr = Object.create(null),
            Wr = new fr.d(Sr, {
              overrideIndentation: rr => {
                let Sr = Zr[rr];
                return null == Sr ? -1 : Sr
              }
            }),
            ar = MS(Sr, ((rr, Qr, ar) => {
              let jr = (0, fr.V)(Wr, rr.from);
              if (null == jr) return;
              /\S/.test(rr.text) || (jr = 0);
              let Ir = /^\s*/.exec(rr.text)[0],
                Er = (0, fr.eb)(Sr, jr);
              (Ir != Er || ar.from < rr.from + Ir.length) && (Zr[rr.from] = jr, Qr.push({
                from: rr.from,
                to: rr.from + Ir.length,
                insert: Er
              }))
            }));
          return ar.changes.empty || Qr(Sr.update(ar, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: rr => {
          if (rr.state.readOnly) return !1;
          let {
            state: Sr
          } = rr, Qr = Sr.changes(HS(Sr).map((rr => {
            let {
              from: Qr,
              to: Zr
            } = rr;
            return Qr > 0 ? Qr-- : Zr < Sr.doc.length && Zr++, {
              from: Qr,
              to: Zr
            }
          }))), Zr = Vr(Sr.selection, (Sr => {
            let Qr;
            if (rr.lineWrapping) {
              let Zr = rr.lineBlockAt(Sr.head),
                Wr = rr.coordsAtPos(Sr.head, Sr.assoc || 1);
              Wr && (Qr = Zr.bottom + rr.documentTop - Wr.bottom + rr.defaultLineHeight / 2)
            }
            return rr.moveVertically(Sr, !0, Qr)
          })).map(Qr);
          return rr.dispatch({
            changes: Qr,
            selection: Zr,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr;
          return IS(Sr, Qr, !1)
        }
      }, {
        key: "Mod-/",
        run: rr => {
          let {
            state: Sr
          } = rr, Qr = Sr.doc.lineAt(Sr.selection.main.from), Zr = Ur(rr.state, Qr.from);
          return Zr.line ? xr(rr) : !!Zr.block && Nr(rr)
        }
      }, {
        key: "Alt-A",
        run: mr
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: rr => (rr.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: br,
        shift: pS,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: rr => Dr(rr, !or(rr)),
        shift: rr => mS(rr, !or(rr)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: rr => wr(rr, (Sr => jS(rr, Sr, !or(rr)))),
        shift: rr => fS(rr, (Sr => jS(rr, Sr, !or(rr)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: Jr,
        shift: xS,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: rr => Dr(rr, or(rr)),
        shift: rr => mS(rr, or(rr)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: rr => wr(rr, (Sr => jS(rr, Sr, or(rr)))),
        shift: rr => fS(rr, (Sr => jS(rr, Sr, or(rr)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: rS,
        shift: US,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: nS,
        shift: KS
      }, {
        mac: "Ctrl-ArrowUp",
        run: WS,
        shift: zS
      }, {
        key: "ArrowDown",
        run: SS,
        shift: tS,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: eS,
        shift: yS
      }, {
        mac: "Ctrl-ArrowDown",
        run: aS,
        shift: YS
      }, {
        key: "PageUp",
        run: WS,
        shift: zS
      }, {
        key: "PageDown",
        run: aS,
        shift: YS
      }, {
        key: "Home",
        run: rr => wr(rr, (Sr => jS(rr, Sr, !1))),
        shift: rr => fS(rr, (Sr => jS(rr, Sr, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: nS,
        shift: KS
      }, {
        key: "End",
        run: rr => wr(rr, (Sr => jS(rr, Sr, !0))),
        shift: rr => fS(rr, (Sr => jS(rr, Sr, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: eS,
        shift: yS
      }, {
        key: "Enter",
        run: gS,
        shift: gS
      }, {
        key: "Mod-a",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr;
          return Qr(Sr.update({
            selection: {
              anchor: 0,
              head: Sr.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: LS,
        shift: LS,
        preventDefault: !0
      }, {
        key: "Delete",
        run: lS,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: PS,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: rr => XS(rr, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: rr => TS(rr, (Sr => {
          let Qr = rr.moveToLineBoundary(Sr, !1).head;
          return Sr.head > Qr ? Qr : Math.max(0, Sr.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: rr => TS(rr, (Sr => {
          let Qr = rr.moveToLineBoundary(Sr, !0).head;
          return Sr.head < Qr ? Qr : Math.min(rr.state.doc.length, Sr.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: br,
        shift: pS,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: Jr,
        shift: xS
      }, {
        key: "Ctrl-p",
        run: rS,
        shift: US
      }, {
        key: "Ctrl-n",
        run: SS,
        shift: tS
      }, {
        key: "Ctrl-a",
        run: rr => wr(rr, (Sr => jr.m.cursor(rr.lineBlockAt(Sr.head).from, 1))),
        shift: rr => fS(rr, (Sr => jr.m.cursor(rr.lineBlockAt(Sr.head).from)))
      }, {
        key: "Ctrl-e",
        run: rr => wr(rr, (Sr => jr.m.cursor(rr.lineBlockAt(Sr.head).to, -1))),
        shift: rr => fS(rr, (Sr => jr.m.cursor(rr.lineBlockAt(Sr.head).to)))
      }, {
        key: "Ctrl-d",
        run: lS
      }, {
        key: "Ctrl-h",
        run: LS
      }, {
        key: "Ctrl-k",
        run: rr => TS(rr, (Sr => {
          let Qr = rr.lineBlockAt(Sr.head).to;
          return Sr.head < Qr ? Qr : Math.min(rr.state.doc.length, Sr.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: PS
      }, {
        key: "Ctrl-o",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr;
          if (Sr.readOnly) return !1;
          let Zr = Sr.changeByRange((rr => ({
            changes: {
              from: rr.from,
              to: rr.to,
              insert: jr.V.of(["", ""])
            },
            range: jr.m.cursor(rr.from)
          })));
          return Qr(Sr.update(Zr, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: rr => {
          let {
            state: Sr,
            dispatch: Qr
          } = rr;
          if (Sr.readOnly) return !1;
          let Zr = Sr.changeByRange((rr => {
            if (!rr.empty || 0 == rr.from || rr.from == Sr.doc.length) return {
              range: rr
            };
            let Qr = rr.from,
              Zr = Sr.doc.lineAt(Qr),
              Wr = Qr == Zr.from ? Qr - 1 : (0, jr.ib)(Zr.text, Qr - Zr.from, !1) + Zr.from,
              ar = Qr == Zr.to ? Qr + 1 : (0, jr.ib)(Zr.text, Qr - Zr.from, !0) + Zr.from;
            return {
              changes: {
                from: Wr,
                to: ar,
                insert: Sr.doc.slice(Qr, ar).append(Sr.doc.slice(Wr, Qr))
              },
              range: jr.m.cursor(ar)
            }
          }));
          return !Zr.changes.empty && (Qr(Sr.update(Zr, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: aS
      }].map((rr => ({
        mac: rr.key,
        run: rr.run,
        shift: rr.shift
      }))))),
      VS = {
        key: "Tab",
        run: GS,
        shift: kS
      };
    var iS = Qr(53915),
      wS = Qr(53855),
      cS = Qr(53919),
      FS = function(rr) {
        void 0 === rr && (rr = {});
        var {
          crosshairCursor: Sr = !1
        } = rr, Qr = [];
        !1 !== rr.closeBracketsKeymap && (Qr = Qr.concat(wS.f)), !1 !== rr.defaultKeymap && (Qr = Qr.concat(AS)), !1 !== rr.searchKeymap && (Qr = Qr.concat(iS.f)), !1 !== rr.historyKeymap && (Qr = Qr.concat(Ar)), !1 !== rr.foldKeymap && (Qr = Qr.concat(fr.L)), !1 !== rr.completionKeymap && (Qr = Qr.concat(wS.n)), !1 !== rr.lintKeymap && (Qr = Qr.concat(cS.b));
        var Zr = [];
        return !1 !== rr.lineNumbers && Zr.push((0, Ir.W)()), !1 !== rr.highlightActiveLineGutter && Zr.push((0, Ir.G)()), !1 !== rr.highlightSpecialChars && Zr.push((0, Ir.N)()), !1 !== rr.history && Zr.push(function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [yr, Kr.of(rr), Ir.i.domEventHandlers({
            beforeinput(rr, Sr) {
              let Qr = "historyUndo" == rr.inputType ? Tr : "historyRedo" == rr.inputType ? vr : null;
              return !!Qr && (rr.preventDefault(), Qr(Sr))
            }
          })]
        }()), !1 !== rr.foldGutter && Zr.push((0, fr.E)()), !1 !== rr.drawSelection && Zr.push((0, Ir.v)()), !1 !== rr.dropCursor && Zr.push((0, Ir.y)()), !1 !== rr.allowMultipleSelections && Zr.push(jr.q.allowMultipleSelections.of(!0)), !1 !== rr.indentOnInput && Zr.push((0, fr.ab)()), !1 !== rr.syntaxHighlighting && Zr.push((0, fr.qb)(fr.s, {
          fallback: !0
        })), !1 !== rr.bracketMatching && Zr.push((0, fr.l)()), !1 !== rr.closeBrackets && Zr.push((0, wS.g)()), !1 !== rr.autocompletion && Zr.push((0, wS.c)()), !1 !== rr.rectangularSelection && Zr.push((0, Ir.bb)()), !1 !== Sr && Zr.push((0, Ir.u)()), !1 !== rr.highlightActiveLine && Zr.push((0, Ir.J)()), !1 !== rr.highlightSelectionMatches && Zr.push((0, iS.e)()), rr.tabSize && "number" === typeof rr.tabSize && Zr.push(fr.hb.of(" ".repeat(rr.tabSize))), Zr.concat([Ir.S.of(Qr.flat())]).filter(Boolean)
      },
      oS = Qr(53897);
    const bS = "#e5c07b",
      JS = "#e06c75",
      DS = "#56b6c2",
      dS = "#ffffff",
      sS = "#abb2bf",
      uS = "#7d8799",
      rQ = "#61afef",
      SQ = "#98c379",
      QQ = "#d19a66",
      ZQ = "#c678dd",
      WQ = "#21252b",
      aQ = "#2c313a",
      jQ = "#282c34",
      IQ = "#353a42",
      fQ = "#3E4451",
      EQ = "#528bff",
      pQ = Ir.i.theme({
        "&": {
          color: sS,
          backgroundColor: jQ
        },
        ".cm-content": {
          caretColor: EQ
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: EQ
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: fQ
        },
        ".cm-panels": {
          backgroundColor: WQ,
          color: sS
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
          backgroundColor: jQ,
          color: uS,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: aQ
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: IQ
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: IQ,
          borderBottomColor: IQ
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: aQ,
            color: sS
          }
        }
      }, {
        dark: !0
      }),
      xQ = fr.b.define([{
        tag: oS.m.keyword,
        color: ZQ
      }, {
        tag: [oS.m.name, oS.m.deleted, oS.m.character, oS.m.propertyName, oS.m.macroName],
        color: JS
      }, {
        tag: [oS.m.function(oS.m.variableName), oS.m.labelName],
        color: rQ
      }, {
        tag: [oS.m.color, oS.m.constant(oS.m.name), oS.m.standard(oS.m.name)],
        color: QQ
      }, {
        tag: [oS.m.definition(oS.m.name), oS.m.separator],
        color: sS
      }, {
        tag: [oS.m.typeName, oS.m.className, oS.m.number, oS.m.changed, oS.m.annotation, oS.m.modifier, oS.m.self, oS.m.namespace],
        color: bS
      }, {
        tag: [oS.m.operator, oS.m.operatorKeyword, oS.m.url, oS.m.escape, oS.m.regexp, oS.m.link, oS.m.special(oS.m.string)],
        color: DS
      }, {
        tag: [oS.m.meta, oS.m.comment],
        color: uS
      }, {
        tag: oS.m.strong,
        fontWeight: "bold"
      }, {
        tag: oS.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: oS.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: oS.m.link,
        color: uS,
        textDecoration: "underline"
      }, {
        tag: oS.m.heading,
        fontWeight: "bold",
        color: JS
      }, {
        tag: [oS.m.atom, oS.m.bool, oS.m.special(oS.m.variableName)],
        color: QQ
      }, {
        tag: [oS.m.processingInstruction, oS.m.string, oS.m.inserted],
        color: SQ
      }, {
        tag: oS.m.invalid,
        color: dS
      }]),
      mQ = [pQ, (0, fr.qb)(xQ)];
    var NQ = Ir.i.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class UQ {
      constructor(rr, Sr) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = Sr, this.timeoutMS = Sr, this.callbacks.push(rr)
      }
      lx() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var rr = this.callbacks.slice();
          this.callbacks.length = 0, rr.forEach((rr => {
            try {
              rr()
            } catch (Sr) {
              console.error("TimeoutLatch callback error:", Sr)
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
    class tQ {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(rr) {
        this.latches.add(rr), this.start()
      }
      remove(rr) {
        this.latches.delete(rr), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((rr => {
            rr.lx(), rr.isDone && this.remove(rr)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var hQ = null,
      zQ = jr.e.define(),
      YQ = [];

    function nQ(rr) {
      var {
        value: Sr,
        selection: Qr,
        onChange: Zr,
        onStatistics: Wr,
        onCreateEditor: fr,
        onUpdate: Er,
        extensions: pr = YQ,
        autoFocus: xr,
        theme: mr = "light",
        height: Nr = null,
        minHeight: Ur = null,
        maxHeight: tr = null,
        width: hr = null,
        minWidth: zr = null,
        maxWidth: Yr = null,
        placeholder: nr = "",
        editable: er = !0,
        readOnly: Kr = !1,
        indentWithTab: yr = !0,
        basicSetup: Br = !0,
        root: Tr,
        initialState: vr
      } = rr, [Or, Lr] = (0, ar.useState)(), [lr, Xr] = (0, ar.useState)(), [Pr, Hr] = (0, ar.useState)(), qr = (0, ar.useState)((() => ({
        current: null
      })))[0], Rr = (0, ar.useState)((() => ({
        current: null
      })))[0], gr = Ir.i.theme({
        "&": {
          height: Nr,
          minHeight: Ur,
          maxHeight: tr,
          width: hr,
          minWidth: zr,
          maxWidth: Yr
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), Cr = Ir.i.updateListener.of((rr => {
        if (rr.docChanged && "function" === typeof Zr && !rr.transactions.some((rr => rr.annotation(zQ)))) {
          qr.current ? qr.current.reset() : (qr.current = new UQ((() => {
            if (Rr.current) {
              var rr = Rr.current;
              Rr.current = null, rr()
            }
            qr.current = null
          }), 200), ("undefined" === typeof window ? new tQ : (hQ || (hQ = new tQ), hQ)).add(qr.current));
          var Sr = rr.state.doc.toString();
          Zr(Sr, rr)
        }
        Wr && Wr((rr => ({
          line: rr.state.doc.lineAt(rr.state.selection.main.from),
          lineCount: rr.state.doc.lines,
          lineBreak: rr.state.lineBreak,
          length: rr.state.doc.length,
          readOnly: rr.state.readOnly,
          tabSize: rr.state.tabSize,
          selection: rr.state.selection,
          selectionAsSingle: rr.state.selection.asSingle().main,
          yh: rr.state.selection.yh,
          selectionCode: rr.state.sliceDoc(rr.state.selection.main.from, rr.state.selection.main.to),
          selections: rr.state.selection.yh.map((Sr => rr.state.sliceDoc(Sr.from, Sr.to))),
          selectedText: rr.state.selection.yh.some((rr => !rr.empty))
        }))(rr))
      })), Mr = function(rr) {
        void 0 === rr && (rr = {});
        var {
          indentWithTab: Sr = !0,
          editable: Qr = !0,
          readOnly: Zr = !1,
          theme: Wr = "light",
          placeholder: ar = "",
          basicSetup: fr = !0
        } = rr, Er = [];
        switch (Sr && Er.unshift(Ir.S.of([VS])), fr && ("boolean" === typeof fr ? Er.unshift(FS()) : Er.unshift(FS(fr))), ar && Er.unshift((0, Ir.ab)(ar)), Wr) {
          case "light":
            Er.push(NQ);
            break;
          case "dark":
            Er.push(mQ);
            break;
          case "none":
            break;
          default:
            Er.push(Wr)
        }
        return !1 === Qr && Er.push(Ir.i.editable.of(!1)), Zr && Er.push(jr.q.readOnly.of(!0)), [...Er]
      }({
        theme: mr,
        editable: er,
        readOnly: Kr,
        placeholder: nr,
        indentWithTab: yr,
        basicSetup: Br
      }), Gr = [Cr, gr, ...Mr];
      return Er && "function" === typeof Er && Gr.push(Ir.i.updateListener.of(Er)), Gr = Gr.concat(pr), (0, ar.useLayoutEffect)((() => {
        if (Or && !Pr) {
          var rr = {
              doc: Sr,
              selection: Qr,
              extensions: Gr
            },
            Zr = vr ? jr.q.fromJSON(vr.json, rr, vr.fields) : jr.q.create(rr);
          if (Hr(Zr), !lr) {
            var Wr = new Ir.i({
              state: Zr,
              parent: Or,
              root: Tr
            });
            Xr(Wr), fr && fr(Wr, Zr)
          }
        }
        return () => {
          lr && (Hr(void 0), Xr(void 0))
        }
      }), [Or, Pr]), (0, ar.useEffect)((() => {
        rr.container && Lr(rr.container)
      }), [rr.container]), (0, ar.useEffect)((() => () => {
        lr && (lr.destroy(), Xr(void 0)), qr.current && (qr.current.cancel(), qr.current = null)
      }), [lr]), (0, ar.useEffect)((() => {
        xr && lr && lr.focus()
      }), [xr, lr]), (0, ar.useEffect)((() => {
        lr && lr.dispatch({
          effects: jr.P.reconfigure.of(Gr)
        })
      }), [mr, pr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Zr, Er]), (0, ar.useEffect)((() => {
        if (void 0 !== Sr) {
          var rr = lr ? lr.state.doc.toString() : "";
          if (lr && Sr !== rr) {
            var Qr = () => {
              lr && Sr !== lr.state.doc.toString() && lr.dispatch({
                changes: {
                  from: 0,
                  to: lr.state.doc.toString().length,
                  insert: Sr || ""
                },
                annotations: [zQ.of(!0)]
              })
            };
            qr.current && !qr.current.isDone ? Rr.current = Qr : Qr()
          }
        }
      }), [Sr, lr]), {
        state: Pr,
        setState: Hr,
        view: lr,
        setView: Xr,
        container: Or,
        setContainer: Lr
      }
    }
    var eQ = Qr(1338),
      KQ = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      yQ = (0, ar.forwardRef)(((rr, Sr) => {
        var {
          className: Qr,
          value: jr = "",
          selection: Ir,
          extensions: fr = [],
          onChange: Er,
          onStatistics: pr,
          onCreateEditor: xr,
          onUpdate: mr,
          autoFocus: Nr,
          theme: Ur = "light",
          height: tr,
          minHeight: hr,
          maxHeight: zr,
          width: Yr,
          minWidth: nr,
          maxWidth: er,
          basicSetup: Kr,
          placeholder: yr,
          indentWithTab: Br,
          editable: Tr,
          readOnly: vr,
          root: Or,
          initialState: Lr
        } = rr, lr = (0, Wr.d)(rr, KQ), Xr = (0, ar.useRef)(null), {
          state: Pr,
          view: Hr,
          container: qr,
          setContainer: Rr
        } = nQ({
          root: Or,
          value: jr,
          autoFocus: Nr,
          theme: Ur,
          height: tr,
          minHeight: hr,
          maxHeight: zr,
          width: Yr,
          minWidth: nr,
          maxWidth: er,
          basicSetup: Kr,
          placeholder: yr,
          indentWithTab: Br,
          editable: Tr,
          readOnly: vr,
          selection: Ir,
          onChange: Er,
          onStatistics: pr,
          onCreateEditor: xr,
          onUpdate: mr,
          extensions: fr,
          initialState: Lr
        });
        (0, ar.useImperativeHandle)(Sr, (() => ({
          editor: Xr.current,
          state: Pr,
          view: Hr
        })), [Xr, qr, Pr, Hr]);
        var gr = (0, ar.useCallback)((rr => {
          Xr.current = rr, Rr(rr)
        }), [Rr]);
        if ("string" !== typeof jr) throw new Error("value must be typeof string but got " + typeof jr);
        var Cr = "string" === typeof Ur ? "cm-theme-" + Ur : "cm-theme";
        return (0, eQ.jsx)("div", (0, Zr.d)({
          ref: gr,
          className: Cr + (Qr ? " " + Qr : "")
        }, lr))
      }));
    yQ.displayName = "CodeMirror";
    const BQ = yQ
  },
  53886: (rr, Sr, Qr) => {
    function Zr() {
      var rr = arguments[0];
      "string" == typeof rr && (rr = document.createElement(rr));
      var Sr = 1,
        Qr = arguments[1];
      if (Qr && "object" == typeof Qr && null == Qr.nodeType && !Array.isArray(Qr)) {
        for (var Zr in Qr)
          if (Object.prototype.hasOwnProperty.call(Qr, Zr)) {
            var ar = Qr[Zr];
            "string" == typeof ar ? rr.setAttribute(Zr, ar) : null != ar && (rr[Zr] = ar)
          } Sr++
      }
      for (; Sr < arguments.length; Sr++) Wr(rr, arguments[Sr]);
      return rr
    }

    function Wr(rr, Sr) {
      if ("string" == typeof Sr) rr.appendChild(document.createTextNode(Sr));
      else if (null == Sr);
      else if (null != Sr.nodeType) rr.appendChild(Sr);
      else {
        if (!Array.isArray(Sr)) throw new RangeError("Unsupported child node: " + Sr);
        for (var Qr = 0; Qr < Sr.length; Qr++) Wr(rr, Sr[Qr])
      }
    }
    Qr.d(Sr, {
      d: () => Zr
    })
  },
  53878: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr
    });
    const Zr = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      Wr = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      ar = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class jr {
      constructor(rr, Sr) {
        this.rules = [];
        let {
          finish: Qr
        } = Sr || {};

        function Zr(rr) {
          return /^@/.test(rr) ? [rr] : rr.split(/,\s*/)
        }

        function Wr(rr, Sr, ar, jr) {
          let Ir = [],
            fr = /^@(\w+)\b/.exec(rr[0]),
            Er = fr && "keyframes" == fr[1];
          if (fr && null == Sr) return ar.push(rr[0] + ";");
          for (let Qr in Sr) {
            let jr = Sr[Qr];
            if (/&/.test(Qr)) Wr(Qr.split(/,\s*/).map((Sr => rr.map((rr => Sr.replace(/&/, rr))))).reduce(((rr, Sr) => rr.concat(Sr))), jr, ar);
            else if (jr && "object" == typeof jr) {
              if (!fr) throw new RangeError("The value of a property (" + Qr + ") should be a primitive value.");
              Wr(Zr(Qr), jr, Ir, Er)
            } else null != jr && Ir.push(Qr.replace(/_.*/, "").replace(/[A-Z]/g, (rr => "-" + rr.toLowerCase())) + ": " + jr + ";")
          }(Ir.length || Er) && ar.push((!Qr || fr || jr ? rr : rr.map(Qr)).join(", ") + " {" + Ir.join(" ") + "}")
        }
        for (let ar in rr) Wr(Zr(ar), rr[ar], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let rr = ar[Zr] || 1;
        return ar[Zr] = rr + 1, "\u037c" + rr.toString(36)
      }
      static mount(rr, Sr, Qr) {
        let Zr = rr[Wr],
          ar = Qr && Qr.nonce;
        Zr ? ar && Zr.setNonce(ar) : Zr = new fr(rr, ar), Zr.mount(Array.isArray(Sr) ? Sr : [Sr], rr)
      }
    }
    let Ir = new Map;
    class fr {
      constructor(rr, Sr) {
        let Qr = rr.ownerDocument || rr,
          Zr = Qr.defaultView;
        if (!rr.head && rr.adoptedStyleSheets && Zr.CSSStyleSheet) {
          let Sr = Ir.get(Qr);
          if (Sr) return rr[Wr] = Sr;
          this.sheet = new Zr.CSSStyleSheet, Ir.set(Qr, this)
        } else this.styleTag = Qr.createElement("style"), Sr && this.styleTag.setAttribute("nonce", Sr);
        this.modules = [], rr[Wr] = this
      }
      mount(rr, Sr) {
        let Qr = this.sheet,
          Zr = 0,
          Wr = 0;
        for (let ar = 0; ar < rr.length; ar++) {
          let Sr = rr[ar],
            jr = this.modules.indexOf(Sr);
          if (jr < Wr && jr > -1 && (this.modules.splice(jr, 1), Wr--, jr = -1), -1 == jr) {
            if (this.modules.splice(Wr++, 0, Sr), Qr)
              for (let rr = 0; rr < Sr.rules.length; rr++) Qr.insertRule(Sr.rules[rr], Zr++)
          } else {
            for (; Wr < jr;) Zr += this.modules[Wr++].rules.length;
            Zr += Sr.rules.length, Wr++
          }
        }
        if (Qr) Sr.adoptedStyleSheets.indexOf(this.sheet) < 0 && (Sr.adoptedStyleSheets = [this.sheet, ...Sr.adoptedStyleSheets]);
        else {
          let rr = "";
          for (let Sr = 0; Sr < this.modules.length; Sr++) rr += this.modules[Sr].getRules() + "\n";
          this.styleTag.textContent = rr;
          let Qr = Sr.head || Sr;
          this.styleTag.parentNode != Qr && Qr.insertBefore(this.styleTag, Qr.firstChild)
        }
      }
      setNonce(rr) {
        this.styleTag && this.styleTag.getAttribute("nonce") != rr && this.styleTag.setAttribute("nonce", rr)
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);