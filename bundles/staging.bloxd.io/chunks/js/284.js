export const id = 284;
export const ids = [284];
export const modules = {
  40738: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => cF,
      h: () => EF,
      k: () => vF,
      m: () => wk,
      n: () => GF,
      o: () => dk,
      q: () => AF
    });
    var Rk = Bk(40741),
      tk = Bk(40748),
      ak = Bk(40759);
    class Xk {
      constructor(kk, Fk, Bk, Rk) {
        this.state = kk, this.pos = Fk, this.explicit = Bk, this.view = Rk, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(kk) {
        let Fk = (0, ak.rb)(this.state).resolveInner(this.pos, -1);
        for (; Fk && kk.indexOf(Fk.name) < 0;) Fk = Fk.parent;
        return Fk ? {
          from: Fk.from,
          to: this.pos,
          text: this.state.sliceDoc(Fk.from, this.pos),
          type: Fk.type
        } : null
      }
      matchBefore(kk) {
        let Fk = this.state.doc.lineAt(this.pos),
          Bk = Math.max(Fk.from, this.pos - 250),
          Rk = Fk.text.slice(Bk - Fk.from, this.pos - Fk.from),
          tk = Rk.search(Jk(kk, !1));
        return tk < 0 ? null : {
          from: Bk + tk,
          to: this.pos,
          text: Rk.slice(tk)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(kk, Fk, Bk) {
        "abort" == kk && this.abortListeners && (this.abortListeners.push(Fk), Bk && Bk.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function bk(kk) {
      let Fk = Object.keys(kk).join(""),
        Bk = /\w/.test(Fk);
      return Bk && (Fk = Fk.replace(/\w/g, "")), `[${Bk?"\\w":""}${Fk.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function wk(kk) {
      let Fk = kk.map((kk => "string" == typeof kk ? {
          label: kk
        } : kk)),
        [Bk, Rk] = Fk.every((kk => /^\w+$/.test(kk.label))) ? [/\w*$/, /\w+$/] : function(kk) {
          let Fk = Object.create(null),
            Bk = Object.create(null);
          for (let {
              label: tk
            }
            of kk) {
            Fk[tk[0]] = !0;
            for (let kk = 1; kk < tk.length; kk++) Bk[tk[kk]] = !0
          }
          let Rk = bk(Fk) + bk(Bk) + "*$";
          return [new RegExp("^" + Rk), new RegExp(Rk)]
        }(Fk);
      return kk => {
        let tk = kk.matchBefore(Rk);
        return tk || kk.explicit ? {
          from: tk ? tk.from : kk.pos,
          options: Fk,
          validFor: Bk
        } : null
      }
    }

    function dk(kk, Fk) {
      return Bk => {
        for (let Fk = (0, ak.rb)(Bk.state).resolveInner(Bk.pos, -1); Fk; Fk = Fk.parent) {
          if (kk.indexOf(Fk.name) > -1) return null;
          if (Fk.type.isTop) break
        }
        return Fk(Bk)
      }
    }
    class sk {
      constructor(kk, Fk, Bk, Rk) {
        this.completion = kk, this.source = Fk, this.match = Bk, this.score = Rk
      }
    }

    function Vk(kk) {
      return kk.selection.main.from
    }

    function Jk(kk, Fk) {
      var Bk;
      let {
        source: Rk
      } = kk, tk = Fk && "^" != Rk[0], ak = "$" != Rk[Rk.length - 1];
      return tk || ak ? new RegExp(`${tk?"^":""}(?:${Rk})${ak?"$":""}`, null !== (Bk = kk.flags) && void 0 !== Bk ? Bk : kk.ignoreCase ? "i" : "") : kk
    }
    const Ak = Rk.b.define();

    function ek(kk, Fk, Bk, tk) {
      let {
        main: ak
      } = kk.selection, Xk = Bk - ak.from, bk = tk - ak.from;
      return {
        ...kk.changeByRange((wk => {
          if (wk != ak && Bk != tk && kk.sliceDoc(wk.from + Xk, wk.from + bk) != kk.sliceDoc(Bk, tk)) return {
            range: wk
          };
          let dk = kk.toText(Fk);
          return {
            changes: {
              from: wk.from + Xk,
              to: tk == ak.from ? wk.to : wk.from + bk,
              insert: dk
            },
            range: Rk.f.cursor(wk.from + Xk + dk.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const yk = new WeakMap;

    function fk(kk) {
      if (!Array.isArray(kk)) return kk;
      let Fk = yk.get(kk);
      return Fk || yk.set(kk, Fk = wk(kk)), Fk
    }
    const mk = Rk.z.define(),
      Wk = Rk.z.define();
    class vk {
      constructor(kk) {
        this.pattern = kk, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let Fk = 0; Fk < kk.length;) {
          let Bk = (0, Rk.I)(kk, Fk),
            tk = (0, Rk.J)(Bk);
          this.chars.push(Bk);
          let ak = kk.slice(Fk, Fk + tk),
            Xk = ak.toUpperCase();
          this.folded.push((0, Rk.I)(Xk == ak ? ak.toLowerCase() : Xk, 0)), Fk += tk
        }
        this.astral = kk.length != this.chars.length
      }
      ret(kk, Fk) {
        return this.score = kk, this.matched = Fk, this
      }
      match(kk) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (kk.length < this.pattern.length) return null;
        let {
          chars: Fk,
          folded: Bk,
          any: tk,
          precise: ak,
          byWord: Xk
        } = this;
        if (1 == Fk.length) {
          let tk = (0, Rk.I)(kk, 0),
            ak = (0, Rk.J)(tk),
            Xk = ak == kk.length ? 0 : -100;
          if (tk == Fk[0]);
          else {
            if (tk != Bk[0]) return null;
            Xk += -200
          }
          return this.ret(Xk, [0, ak])
        }
        let bk = kk.indexOf(this.pattern);
        if (0 == bk) return this.ret(kk.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let wk = Fk.length,
          dk = 0;
        if (bk < 0) {
          for (let ak = 0, Xk = Math.min(kk.length, 200); ak < Xk && dk < wk;) {
            let Xk = (0, Rk.I)(kk, ak);
            Xk != Fk[dk] && Xk != Bk[dk] || (tk[dk++] = ak), ak += (0, Rk.J)(Xk)
          }
          if (dk < wk) return null
        }
        let sk = 0,
          Vk = 0,
          Jk = !1,
          Ak = 0,
          ek = -1,
          yk = -1,
          fk = /[a-z]/.test(kk),
          mk = !0;
        for (let Wk = 0, vk = Math.min(kk.length, 200), ik = 0; Wk < vk && Vk < wk;) {
          let tk = (0, Rk.I)(kk, Wk);
          bk < 0 && (sk < wk && tk == Fk[sk] && (ak[sk++] = Wk), Ak < wk && (tk == Fk[Ak] || tk == Bk[Ak] ? (0 == Ak && (ek = Wk), yk = Wk + 1, Ak++) : Ak = 0));
          let dk, vk = tk < 255 ? tk >= 48 && tk <= 57 || tk >= 97 && tk <= 122 ? 2 : tk >= 65 && tk <= 90 ? 1 : 0 : (dk = (0, Rk.R)(tk)) != dk.toLowerCase() ? 1 : dk != dk.toUpperCase() ? 2 : 0;
          (!Wk || 1 == vk && fk || 0 == ik && 0 != vk) && (Fk[Vk] == tk || Bk[Vk] == tk && (Jk = !0) ? Xk[Vk++] = Wk : Xk.length && (mk = !1)), ik = vk, Wk += (0, Rk.J)(tk)
        }
        return Vk == wk && 0 == Xk[0] && mk ? this.result((Jk ? -200 : 0) - 100, Xk, kk) : Ak == wk && 0 == ek ? this.ret(-200 - kk.length + (yk == kk.length ? 0 : -100), [0, yk]) : bk > -1 ? this.ret(-700 - kk.length, [bk, bk + this.pattern.length]) : Ak == wk ? this.ret(-900 - kk.length, [ek, yk]) : Vk == wk ? this.result((Jk ? -200 : 0) - 100 - 700 + (mk ? 0 : -1100), Xk, kk) : 2 == Fk.length ? null : this.result((tk[0] ? -700 : 0) - 200 - 1100, tk, kk)
      }
      result(kk, Fk, Bk) {
        let tk = [],
          ak = 0;
        for (let Xk of Fk) {
          let kk = Xk + (this.astral ? (0, Rk.J)((0, Rk.I)(Bk, Xk)) : 1);
          ak && tk[ak - 1] == Xk ? tk[ak - 1] = kk : (tk[ak++] = Xk, tk[ak++] = kk)
        }
        return this.ret(kk - Bk.length, tk)
      }
    }
    class ik {
      constructor(kk) {
        this.pattern = kk, this.matched = [], this.score = 0, this.folded = kk.toLowerCase()
      }
      match(kk) {
        if (kk.length < this.pattern.length) return null;
        let Fk = kk.slice(0, this.pattern.length),
          Bk = Fk == this.pattern ? 0 : Fk.toLowerCase() == this.folded ? -200 : null;
        return null == Bk ? null : (this.matched = [0, Fk.length], this.score = Bk + (kk.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const Yk = Rk.i.define({
      combine: kk => (0, Rk.K)(kk, {
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
        positionInfo: Ok,
        filterStrict: !1,
        compareCompletions: (kk, Fk) => (kk.sortText || kk.label).localeCompare(Fk.sortText || Fk.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (kk, Fk) => kk && Fk,
        closeOnBlur: (kk, Fk) => kk && Fk,
        icons: (kk, Fk) => kk && Fk,
        tooltipClass: (kk, Fk) => Bk => Lk(kk(Bk), Fk(Bk)),
        optionClass: (kk, Fk) => Bk => Lk(kk(Bk), Fk(Bk)),
        addToOptions: (kk, Fk) => kk.concat(Fk),
        filterStrict: (kk, Fk) => kk || Fk
      })
    });

    function Lk(kk, Fk) {
      return kk ? Fk ? kk + " " + Fk : kk : Fk
    }

    function Ok(kk, Fk, Bk, Rk, ak, Xk) {
      let bk, wk, dk = kk.textDirection == tk.h.RTL,
        sk = dk,
        Vk = !1,
        Jk = "top",
        Ak = Fk.left - ak.left,
        ek = ak.right - Fk.right,
        yk = Rk.right - Rk.left,
        fk = Rk.bottom - Rk.top;
      if (sk && Ak < Math.min(yk, ek) ? sk = !1 : !sk && ek < Math.min(yk, Ak) && (sk = !0), yk <= (sk ? Ak : ek)) bk = Math.max(ak.top, Math.min(Bk.top, ak.bottom - fk)) - Fk.top, wk = Math.min(400, sk ? Ak : ek);
      else {
        Vk = !0, wk = Math.min(400, (dk ? Fk.right : ak.right - Fk.left) - 30);
        let kk = ak.bottom - Fk.bottom;
        kk >= fk || kk > Fk.top ? bk = Bk.bottom - Fk.top : (Jk = "bottom", bk = Fk.bottom - Bk.top)
      }
      return {
        style: `${Jk}: ${bk/((Fk.bottom-Fk.top)/Xk.offsetHeight)}px; max-width: ${wk/((Fk.right-Fk.left)/Xk.offsetWidth)}px`,
        class: "cm-completionInfo-" + (Vk ? dk ? "left-narrow" : "right-narrow" : sk ? "left" : "right")
      }
    }
    const Ek = Rk.z.define();

    function Sk(kk, Fk, Bk) {
      if (kk <= Bk) return {
        from: 0,
        to: kk
      };
      if (Fk < 0 && (Fk = 0), Fk <= kk >> 1) {
        let kk = Math.floor(Fk / Bk);
        return {
          from: kk * Bk,
          to: (kk + 1) * Bk
        }
      }
      let Rk = Math.floor((kk - Fk) / Bk);
      return {
        from: kk - (Rk + 1) * Bk,
        to: kk - Rk * Bk
      }
    }
    class Nk {
      constructor(kk, Fk, Bk) {
        this.view = kk, this.stateField = Fk, this.applyCompletion = Bk, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: kk => this.placeInfo(kk),
          key: this
        }, this.space = null, this.currentClass = "";
        let Rk = kk.state.field(Fk),
          {
            options: tk,
            selected: ak
          } = Rk.open,
          Xk = kk.state.facet(Yk);
        this.optionContent = function(kk) {
          let Fk = kk.addToOptions.slice();
          return kk.icons && Fk.push({
            render(kk) {
              let Fk = document.createElement("div");
              return Fk.classList.add("cm-completionIcon"), kk.type && Fk.classList.add(...kk.type.split(/\s+/g).map((kk => "cm-completionIcon-" + kk))), Fk.setAttribute("aria-hidden", "true"), Fk
            },
            position: 20
          }), Fk.push({
            render(kk, Fk, Bk, Rk) {
              let tk = document.createElement("span");
              tk.className = "cm-completionLabel";
              let ak = kk.displayLabel || kk.label,
                Xk = 0;
              for (let bk = 0; bk < Rk.length;) {
                let kk = Rk[bk++],
                  Fk = Rk[bk++];
                kk > Xk && tk.appendChild(document.createTextNode(ak.slice(Xk, kk)));
                let Bk = tk.appendChild(document.createElement("span"));
                Bk.appendChild(document.createTextNode(ak.slice(kk, Fk))), Bk.className = "cm-completionMatchedText", Xk = Fk
              }
              return Xk < ak.length && tk.appendChild(document.createTextNode(ak.slice(Xk))), tk
            },
            position: 50
          }, {
            render(kk) {
              if (!kk.detail) return null;
              let Fk = document.createElement("span");
              return Fk.className = "cm-completionDetail", Fk.textContent = kk.detail, Fk
            },
            position: 80
          }), Fk.sort(((kk, Fk) => kk.position - Fk.position)).map((kk => kk.render))
        }(Xk), this.optionClass = Xk.optionClass, this.tooltipClass = Xk.tooltipClass, this.range = Sk(tk.length, ak, Xk.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(kk.state), this.dom.addEventListener("mousedown", (Bk => {
          let {
            options: Rk
          } = kk.state.field(Fk).open;
          for (let Fk, tk = Bk.target; tk && tk != this.dom; tk = tk.parentNode)
            if ("LI" == tk.nodeName && (Fk = /-(\d+)$/.exec(tk.id)) && +Fk[1] < Rk.length) return this.applyCompletion(kk, Rk[+Fk[1]]), void Bk.preventDefault();
          if (Bk.target == this.list) {
            let Fk = this.list.classList.contains("cm-completionListIncompleteTop") && Bk.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && Bk.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != Fk && (kk.dispatch({
              effects: Ek.of(Fk)
            }), Bk.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (Fk => {
          let Bk = kk.state.field(this.stateField, !1);
          Bk && Bk.tooltip && kk.state.facet(Yk).closeOnBlur && Fk.relatedTarget != kk.contentDOM && kk.dispatch({
            effects: Wk.of(null)
          })
        })), this.showOptions(tk, Rk.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(kk, Fk) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(kk, Fk, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(kk) {
        var Fk;
        let Bk = kk.state.field(this.stateField),
          Rk = kk.startState.field(this.stateField);
        if (this.updateTooltipClass(kk.state), Bk != Rk) {
          let {
            options: tk,
            selected: ak,
            disabled: Xk
          } = Bk.open;
          Rk.open && Rk.open.options == tk || (this.range = Sk(tk.length, ak, kk.state.facet(Yk).maxRenderedOptions), this.showOptions(tk, Bk.id)), this.updateSel(), Xk != (null === (Fk = Rk.open) || void 0 === Fk ? void 0 : Fk.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!Xk)
        }
      }
      updateTooltipClass(kk) {
        let Fk = this.tooltipClass(kk);
        if (Fk != this.currentClass) {
          for (let kk of this.currentClass.split(" ")) kk && this.dom.classList.remove(kk);
          for (let kk of Fk.split(" ")) kk && this.dom.classList.add(kk);
          this.currentClass = Fk
        }
      }
      positioned(kk) {
        this.space = kk, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let kk = this.view.state.field(this.stateField),
          Fk = kk.open;
        (Fk.selected > -1 && Fk.selected < this.range.from || Fk.selected >= this.range.to) && (this.range = Sk(Fk.options.length, Fk.selected, this.view.state.facet(Yk).maxRenderedOptions), this.showOptions(Fk.options, kk.id));
        let Bk = this.updateSelectedOption(Fk.selected);
        if (Bk) {
          this.destroyInfo();
          let {
            completion: Rk
          } = Fk.options[Fk.selected], {
            info: ak
          } = Rk;
          if (!ak) return;
          let Xk = "string" === typeof ak ? document.createTextNode(ak) : ak(Rk);
          if (!Xk) return;
          "then" in Xk ? Xk.then((Fk => {
            Fk && this.view.state.field(this.stateField, !1) == kk && this.addInfoPane(Fk, Rk)
          })).catch((kk => (0, tk._)(this.view.state, kk, "completion info"))) : (this.addInfoPane(Xk, Rk), Bk.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(kk, Fk) {
        this.destroyInfo();
        let Bk = this.info = document.createElement("div");
        if (Bk.className = "cm-tooltip cm-completionInfo", Bk.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != kk.nodeType) Bk.appendChild(kk), this.infoDestroy = null;
        else {
          let {
            dom: Fk,
            destroy: Rk
          } = kk;
          Bk.appendChild(Fk), this.infoDestroy = Rk || null
        }
        this.dom.appendChild(Bk), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(kk) {
        let Fk = null;
        for (let Bk = this.list.firstChild, Rk = this.range.from; Bk; Bk = Bk.nextSibling, Rk++) "LI" == Bk.nodeName && Bk.id ? Rk == kk ? Bk.hasAttribute("aria-selected") || (Bk.setAttribute("aria-selected", "true"), Fk = Bk) : Bk.hasAttribute("aria-selected") && (Bk.removeAttribute("aria-selected"), Bk.removeAttribute("aria-describedby")) : Rk--;
        return Fk && function(kk, Fk) {
          let Bk = kk.getBoundingClientRect(),
            Rk = Fk.getBoundingClientRect(),
            tk = Bk.height / kk.offsetHeight;
          Rk.top < Bk.top ? kk.scrollTop -= (Bk.top - Rk.top) / tk : Rk.bottom > Bk.bottom && (kk.scrollTop += (Rk.bottom - Bk.bottom) / tk)
        }(this.list, Fk), Fk
      }
      measureInfo() {
        let kk = this.dom.querySelector("[aria-selected]");
        if (!kk || !this.info) return null;
        let Fk = this.dom.getBoundingClientRect(),
          Bk = this.info.getBoundingClientRect(),
          Rk = kk.getBoundingClientRect(),
          tk = this.space;
        if (!tk) {
          let kk = this.dom.ownerDocument.documentElement;
          tk = {
            left: 0,
            top: 0,
            right: kk.clientWidth,
            bottom: kk.clientHeight
          }
        }
        return Rk.top > Math.min(tk.bottom, Fk.bottom) - 10 || Rk.bottom < Math.max(tk.top, Fk.top) + 10 ? null : this.view.state.facet(Yk).positionInfo(this.view, Fk, Rk, Bk, tk, this.dom)
      }
      placeInfo(kk) {
        this.info && (kk ? (kk.style && (this.info.style.cssText = kk.style), this.info.className = "cm-tooltip cm-completionInfo " + (kk.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(kk, Fk, Bk) {
        const Rk = document.createElement("ul");
        Rk.id = Fk, Rk.setAttribute("role", "listbox"), Rk.setAttribute("aria-expanded", "true"), Rk.setAttribute("aria-label", this.view.state.phrase("Completions")), Rk.addEventListener("mousedown", (kk => {
          kk.target == Rk && kk.preventDefault()
        }));
        let tk = null;
        for (let ak = Bk.from; ak < Bk.to; ak++) {
          let {
            completion: Xk,
            match: bk
          } = kk[ak], {
            section: wk
          } = Xk;
          if (wk) {
            let kk = "string" == typeof wk ? wk : wk.name;
            if (kk != tk && (ak > Bk.from || 0 == Bk.from))
              if (tk = kk, "string" != typeof wk && wk.header) Rk.appendChild(wk.header(wk));
              else {
                Rk.appendChild(document.createElement("completion-section")).textContent = kk
              }
          }
          const dk = Rk.appendChild(document.createElement("li"));
          dk.id = Fk + "-" + ak, dk.setAttribute("role", "option");
          let sk = this.optionClass(Xk);
          sk && (dk.className = sk);
          for (let kk of this.optionContent) {
            let Fk = kk(Xk, this.view.state, this.view, bk);
            Fk && dk.appendChild(Fk)
          }
        }
        return Bk.from && Rk.classList.add("cm-completionListIncompleteTop"), Bk.to < kk.length && Rk.classList.add("cm-completionListIncompleteBottom"), Rk
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Hk(kk, Fk) {
      return Bk => new Nk(Bk, kk, Fk)
    }

    function uk(kk) {
      return 100 * (kk.boost || 0) + (kk.apply ? 10 : 0) + (kk.info ? 5 : 0) + (kk.type ? 1 : 0)
    }
    class Mk {
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        this.options = kk, this.attrs = Fk, this.tooltip = Bk, this.timestamp = Rk, this.selected = tk, this.disabled = ak
      }
      setSelected(kk, Fk) {
        return kk == this.selected || kk >= this.options.length ? this : new Mk(this.options, Gk(Fk, kk), this.tooltip, this.timestamp, kk, this.disabled)
      }
      static build(kk, Fk, Bk, Rk, tk, ak) {
        if (Rk && !ak && kk.some((kk => kk.isPending))) return Rk.setDisabled();
        let Xk = function(kk, Fk) {
          let Bk = [],
            Rk = null,
            tk = null,
            ak = kk => {
              Bk.push(kk);
              let {
                section: Fk
              } = kk.completion;
              if (Fk) {
                Rk || (Rk = []);
                let kk = "string" == typeof Fk ? Fk : Fk.name;
                Rk.some((Fk => Fk.name == kk)) || Rk.push("string" == typeof Fk ? {
                  name: kk
                } : Fk)
              }
            },
            Xk = Fk.facet(Yk);
          for (let Vk of kk)
            if (Vk.hasResult()) {
              let kk = Vk.result.getMatch;
              if (!1 === Vk.result.filter)
                for (let Fk of Vk.result.options) ak(new sk(Fk, Vk.source, kk ? kk(Fk) : [], 1e9 - Bk.length));
              else {
                let Bk, Rk = Fk.sliceDoc(Vk.from, Vk.to),
                  bk = Xk.filterStrict ? new ik(Rk) : new vk(Rk);
                for (let Fk of Vk.result.options)
                  if (Bk = bk.match(Fk.label)) {
                    let Rk = Fk.displayLabel ? kk ? kk(Fk, Bk.matched) : [] : Bk.matched,
                      Xk = Bk.score + (Fk.boost || 0);
                    if (ak(new sk(Fk, Vk.source, Rk, Xk)), "object" == typeof Fk.section && "dynamic" === Fk.section.rank) {
                      let {
                        name: kk
                      } = Fk.section;
                      tk || (tk = Object.create(null)), tk[kk] = Math.max(Xk, tk[kk] || -1e9)
                    }
                  }
              }
            } if (Rk) {
            let kk = Object.create(null),
              Fk = 0,
              ak = (kk, Fk) => ("dynamic" === kk.rank && "dynamic" === Fk.rank ? tk[Fk.name] - tk[kk.name] : 0) || ("number" == typeof kk.rank ? kk.rank : 1e9) - ("number" == typeof Fk.rank ? Fk.rank : 1e9) || (kk.name < Fk.name ? -1 : 1);
            for (let Bk of Rk.sort(ak)) Fk -= 1e5, kk[Bk.name] = Fk;
            for (let Rk of Bk) {
              let {
                section: Fk
              } = Rk.completion;
              Fk && (Rk.score += kk["string" == typeof Fk ? Fk : Fk.name])
            }
          }
          let bk = [],
            wk = null,
            dk = Xk.compareCompletions;
          for (let sk of Bk.sort(((kk, Fk) => Fk.score - kk.score || dk(kk.completion, Fk.completion)))) {
            let kk = sk.completion;
            !wk || wk.label != kk.label || wk.detail != kk.detail || null != wk.type && null != kk.type && wk.type != kk.type || wk.apply != kk.apply || wk.boost != kk.boost ? bk.push(sk) : uk(sk.completion) > uk(wk) && (bk[bk.length - 1] = sk), wk = sk.completion
          }
          return bk
        }(kk, Fk);
        if (!Xk.length) return Rk && kk.some((kk => kk.isPending)) ? Rk.setDisabled() : null;
        let bk = Fk.facet(Yk).selectOnOpen ? 0 : -1;
        if (Rk && Rk.selected != bk && -1 != Rk.selected) {
          let kk = Rk.options[Rk.selected].completion;
          for (let Fk = 0; Fk < Xk.length; Fk++)
            if (Xk[Fk].completion == kk) {
              bk = Fk;
              break
            }
        }
        return new Mk(Xk, Gk(Bk, bk), {
          pos: kk.reduce(((kk, Fk) => Fk.hasResult() ? Math.min(kk, Fk.from) : kk), 1e8),
          create: Ck,
          above: tk.aboveCursor
        }, Rk ? Rk.timestamp : Date.now(), bk, !1)
      }
      map(kk) {
        return new Mk(this.options, this.attrs, {
          ...this.tooltip,
          pos: kk.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new Mk(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class gk {
      constructor(kk, Fk, Bk) {
        this.active = kk, this.id = Fk, this.open = Bk
      }
      static start() {
        return new gk(Tk, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(kk) {
        let {
          state: Fk
        } = kk, Bk = Fk.facet(Yk), Rk = (Bk.override || Fk.languageDataAt("autocomplete", Vk(Fk)).map(fk)).map((Fk => (this.active.find((kk => kk.source == Fk)) || new Dk(Fk, this.active.some((kk => 0 != kk.state)) ? 1 : 0)).update(kk, Bk)));
        Rk.length == this.active.length && Rk.every(((kk, Fk) => kk == this.active[Fk])) && (Rk = this.active);
        let tk = this.open,
          ak = kk.effects.some((kk => kk.is(Pk)));
        tk && kk.docChanged && (tk = tk.map(kk.changes)), kk.selection || Rk.some((Fk => Fk.hasResult() && kk.changes.touchesRange(Fk.from, Fk.to))) || ! function(kk, Fk) {
          if (kk == Fk) return !0;
          for (let Bk = 0, Rk = 0;;) {
            for (; Bk < kk.length && !kk[Bk].hasResult();) Bk++;
            for (; Rk < Fk.length && !Fk[Rk].hasResult();) Rk++;
            let tk = Bk == kk.length,
              ak = Rk == Fk.length;
            if (tk || ak) return tk == ak;
            if (kk[Bk++].result != Fk[Rk++].result) return !1
          }
        }(Rk, this.active) || ak ? tk = Mk.build(Rk, Fk, this.id, tk, Bk, ak) : tk && tk.disabled && !Rk.some((kk => kk.isPending)) && (tk = null), !tk && Rk.every((kk => !kk.isPending)) && Rk.some((kk => kk.hasResult())) && (Rk = Rk.map((kk => kk.hasResult() ? new Dk(kk.source, 0) : kk)));
        for (let Xk of kk.effects) Xk.is(Ek) && (tk = tk && tk.setSelected(Xk.value, this.id));
        return Rk == this.active && tk == this.open ? this : new gk(Rk, this.id, tk)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Uk : ck
      }
    }
    const Uk = {
        "aria-autocomplete": "list"
      },
      ck = {};

    function Gk(kk, Fk) {
      let Bk = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": kk
      };
      return Fk > -1 && (Bk["aria-activedescendant"] = kk + "-" + Fk), Bk
    }
    const Tk = [];

    function rk(kk, Fk) {
      if (kk.isUserEvent("input.complete")) {
        let Bk = kk.annotation(Ak);
        if (Bk && Fk.activateOnCompletion(Bk)) return 12
      }
      let Bk = kk.isUserEvent("input.type");
      return Bk && Fk.activateOnTyping ? 5 : Bk ? 1 : kk.isUserEvent("delete.backward") ? 2 : kk.selection ? 8 : kk.docChanged ? 16 : 0
    }
    class Dk {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = kk, this.state = Fk, this.explicit = Bk
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(kk, Fk) {
        let Bk = rk(kk, Fk),
          Rk = this;
        (8 & Bk || 16 & Bk && this.touches(kk)) && (Rk = new Dk(Rk.source, 0)), 4 & Bk && 0 == Rk.state && (Rk = new Dk(this.source, 1)), Rk = Rk.updateFor(kk, Bk);
        for (let tk of kk.effects)
          if (tk.is(mk)) Rk = new Dk(Rk.source, 1, tk.value);
          else if (tk.is(Wk)) Rk = new Dk(Rk.source, 0);
        else if (tk.is(Pk))
          for (let kk of tk.value) kk.source == Rk.source && (Rk = kk);
        return Rk
      }
      updateFor(kk, Fk) {
        return this.map(kk.changes)
      }
      map(kk) {
        return this
      }
      touches(kk) {
        return kk.changes.touchesRange(Vk(kk.state))
      }
    }
    class zk extends Dk {
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        super(kk, 3, Fk), this.limit = Bk, this.result = Rk, this.from = tk, this.to = ak
      }
      hasResult() {
        return !0
      }
      updateFor(kk, Fk) {
        var Bk;
        if (!(3 & Fk)) return this.map(kk.changes);
        let Rk = this.result;
        Rk.map && !kk.changes.empty && (Rk = Rk.map(Rk, kk.changes));
        let tk = kk.changes.mapPos(this.from),
          ak = kk.changes.mapPos(this.to, 1),
          bk = Vk(kk.state);
        if (bk > ak || !Rk || 2 & Fk && (Vk(kk.startState) == this.from || bk < this.limit)) return new Dk(this.source, 4 & Fk ? 1 : 0);
        let wk = kk.changes.mapPos(this.limit);
        return function(kk, Fk, Bk, Rk) {
          if (!kk) return !1;
          let tk = Fk.sliceDoc(Bk, Rk);
          return "function" == typeof kk ? kk(tk, Bk, Rk, Fk) : Jk(kk, !0).test(tk)
        }(Rk.validFor, kk.state, tk, ak) ? new zk(this.source, this.explicit, wk, Rk, tk, ak) : Rk.update && (Rk = Rk.update(Rk, tk, ak, new Xk(kk.state, bk, !1))) ? new zk(this.source, this.explicit, wk, Rk, Rk.from, null !== (Bk = Rk.to) && void 0 !== Bk ? Bk : Vk(kk.state)) : new Dk(this.source, 1, this.explicit)
      }
      map(kk) {
        if (kk.empty) return this;
        return (this.result.map ? this.result.map(this.result, kk) : this.result) ? new zk(this.source, this.explicit, kk.mapPos(this.limit), this.result, kk.mapPos(this.from), kk.mapPos(this.to, 1)) : new Dk(this.source, 0)
      }
      touches(kk) {
        return kk.changes.touchesRange(this.from, this.to)
      }
    }
    const Pk = Rk.z.define({
        map: (kk, Fk) => kk.map((kk => kk.map(Fk)))
      }),
      hk = Rk.A.define({
        create: () => gk.start(),
        update: (kk, Fk) => kk.update(Fk),
        provide: kk => [tk.hb.from(kk, (kk => kk.tooltip)), tk.l.contentAttributes.from(kk, (kk => kk.attrs))]
      });

    function qk(kk, Fk) {
      const Bk = Fk.completion.apply || Fk.completion.label;
      let Rk = kk.state.field(hk).active.find((kk => kk.source == Fk.source));
      return Rk instanceof zk && ("string" == typeof Bk ? kk.dispatch({
        ...ek(kk.state, Bk, Rk.from, Rk.to),
        annotations: Ak.of(Fk.completion)
      }) : Bk(kk, Fk.completion, Rk.from, Rk.to), !0)
    }
    const Ck = Hk(hk, qk);

    function Zk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return Bk => {
        let Rk = Bk.state.field(hk, !1);
        if (!Rk || !Rk.open || Rk.open.disabled || Date.now() - Rk.open.timestamp < Bk.state.facet(Yk).interactionDelay) return !1;
        let ak, Xk = 1;
        "page" == Fk && (ak = (0, tk.J)(Bk, Rk.open.tooltip)) && (Xk = Math.max(2, Math.floor(ak.dom.offsetHeight / ak.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: bk
        } = Rk.open.options, wk = Rk.open.selected > -1 ? Rk.open.selected + Xk * (kk ? 1 : -1) : kk ? 0 : bk - 1;
        return wk < 0 ? wk = "page" == Fk ? 0 : bk - 1 : wk >= bk && (wk = "page" == Fk ? bk - 1 : 0), Bk.dispatch({
          effects: Ek.of(wk)
        }), !0
      }
    }
    const pk = kk => !!kk.state.field(hk, !1) && (kk.dispatch({
      effects: mk.of(!0)
    }), !0);
    class Kk {
      constructor(kk, Fk) {
        this.active = kk, this.context = Fk, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const xk = tk.q.fromClass(class {
        constructor(kk) {
          this.view = kk, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let Fk of kk.state.field(hk).active) Fk.isPending && this.startQuery(Fk)
        }
        update(kk) {
          let Fk = kk.state.field(hk),
            Bk = kk.state.facet(Yk);
          if (!kk.selectionSet && !kk.docChanged && kk.startState.field(hk) == Fk) return;
          let Rk = kk.transactions.some((kk => {
            let Fk = rk(kk, Bk);
            return 8 & Fk || (kk.selection || kk.docChanged) && !(3 & Fk)
          }));
          for (let bk = 0; bk < this.running.length; bk++) {
            let Fk = this.running[bk];
            if (Rk || Fk.context.abortOnDocChange && kk.docChanged || Fk.updates.length + kk.transactions.length > 50 && Date.now() - Fk.time > 1e3) {
              for (let kk of Fk.context.abortListeners) try {
                kk()
              } catch (Xk) {
                (0, tk._)(this.view.state, Xk)
              }
              Fk.context.abortListeners = null, this.running.splice(bk--, 1)
            } else Fk.updates.push(...kk.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), kk.transactions.some((kk => kk.effects.some((kk => kk.is(mk))))) && (this.pendingStart = !0);
          let ak = this.pendingStart ? 50 : Bk.activateOnTypingDelay;
          if (this.debounceUpdate = Fk.active.some((kk => kk.isPending && !this.running.some((Fk => Fk.active.source == kk.source)))) ? setTimeout((() => this.startUpdate()), ak) : -1, 0 != this.composing)
            for (let tk of kk.transactions) tk.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && tk.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: kk
          } = this.view, Fk = kk.field(hk);
          for (let Bk of Fk.active) Bk.isPending && !this.running.some((kk => kk.active.source == Bk.source)) && this.startQuery(Bk);
          this.running.length && Fk.open && Fk.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Yk).updateSyncTime))
        }
        startQuery(kk) {
          let {
            state: Fk
          } = this.view, Bk = Vk(Fk), Rk = new Xk(Fk, Bk, kk.explicit, this.view), ak = new Kk(kk, Rk);
          this.running.push(ak), Promise.resolve(kk.source(Rk)).then((kk => {
            ak.context.aborted || (ak.done = kk || null, this.scheduleAccept())
          }), (kk => {
            this.view.dispatch({
              effects: Wk.of(null)
            }), (0, tk._)(this.view.state, kk)
          }))
        }
        scheduleAccept() {
          this.running.every((kk => void 0 !== kk.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Yk).updateSyncTime))
        }
        accept() {
          var kk;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let Fk = [],
            Bk = this.view.state.facet(Yk),
            Rk = this.view.state.field(hk);
          for (let tk = 0; tk < this.running.length; tk++) {
            let ak = this.running[tk];
            if (void 0 === ak.done) continue;
            if (this.running.splice(tk--, 1), ak.done) {
              let Rk = Vk(ak.updates.length ? ak.updates[0].startState : this.view.state),
                tk = Math.min(Rk, ak.done.from + (ak.active.explicit ? 0 : 1)),
                Xk = new zk(ak.active.source, ak.active.explicit, tk, ak.done, ak.done.from, null !== (kk = ak.done.to) && void 0 !== kk ? kk : Rk);
              for (let kk of ak.updates) Xk = Xk.update(kk, Bk);
              if (Xk.hasResult()) {
                Fk.push(Xk);
                continue
              }
            }
            let Xk = Rk.active.find((kk => kk.source == ak.active.source));
            if (Xk && Xk.isPending)
              if (null == ak.done) {
                let kk = new Dk(ak.active.source, 0);
                for (let Fk of ak.updates) kk = kk.update(Fk, Bk);
                kk.isPending || Fk.push(kk)
              } else this.startQuery(Xk)
          }(Fk.length || Rk.open && Rk.open.disabled) && this.view.dispatch({
            effects: Pk.of(Fk)
          })
        }
      }, {
        eventHandlers: {
          blur(kk) {
            let Fk = this.view.state.field(hk, !1);
            if (Fk && Fk.tooltip && this.view.state.facet(Yk).closeOnBlur) {
              let Bk = Fk.open && (0, tk.J)(this.view, Fk.open.tooltip);
              Bk && Bk.dom.contains(kk.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: Wk.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: mk.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      jk = "object" == typeof navigator && /Win/.test(navigator.platform),
      lk = Rk.o.highest(tk.l.domEventHandlers({
        keydown(kk, Fk) {
          let Bk = Fk.state.field(hk, !1);
          if (!Bk || !Bk.open || Bk.open.disabled || Bk.open.selected < 0 || kk.key.length > 1 || kk.ctrlKey && (!jk || !kk.altKey) || kk.metaKey) return !1;
          let Rk = Bk.open.options[Bk.open.selected],
            tk = Bk.active.find((kk => kk.source == Rk.source)),
            ak = Rk.completion.commitCharacters || tk.result.commitCharacters;
          return ak && ak.indexOf(kk.key) > -1 && qk(Fk, Rk), !1
        }
      })),
      nk = tk.l.baseTheme({
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
    class Ik {
      constructor(kk, Fk, Bk, Rk) {
        this.field = kk, this.line = Fk, this.from = Bk, this.to = Rk
      }
    }
    class Qk {
      constructor(kk, Fk, Bk) {
        this.field = kk, this.from = Fk, this.to = Bk
      }
      map(kk) {
        let Fk = kk.mapPos(this.from, -1, Rk.l.TrackDel),
          Bk = kk.mapPos(this.to, 1, Rk.l.TrackDel);
        return null == Fk || null == Bk ? null : new Qk(this.field, Fk, Bk)
      }
    }
    class kF {
      constructor(kk, Fk) {
        this.lines = kk, this.fieldPositions = Fk
      }
      instantiate(kk, Fk) {
        let Bk = [],
          Rk = [Fk],
          tk = kk.doc.lineAt(Fk),
          Xk = /^\s*/.exec(tk.text)[0];
        for (let wk of this.lines) {
          if (Bk.length) {
            let Bk = Xk,
              tk = /^\t*/.exec(wk)[0].length;
            for (let Fk = 0; Fk < tk; Fk++) Bk += kk.facet(ak.fb);
            Rk.push(Fk + Bk.length - tk), wk = Bk + wk.slice(tk)
          }
          Bk.push(wk), Fk += wk.length + 1
        }
        let bk = this.fieldPositions.map((kk => new Qk(kk.field, Rk[kk.line] + kk.from, Rk[kk.line] + kk.to)));
        return {
          text: Bk,
          hb: bk
        }
      }
      static parse(kk) {
        let Fk, Bk = [],
          Rk = [],
          tk = [];
        for (let ak of kk.split(/\r\n?|\n/)) {
          for (; Fk = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(ak);) {
            let kk = Fk[1] ? +Fk[1] : null,
              Xk = Fk[2] || Fk[3] || "",
              bk = -1,
              wk = Xk.replace(/\\[{}]/g, (kk => kk[1]));
            for (let Fk = 0; Fk < Bk.length; Fk++)(null != kk ? Bk[Fk].seq == kk : wk && Bk[Fk].name == wk) && (bk = Fk);
            if (bk < 0) {
              let Fk = 0;
              for (; Fk < Bk.length && (null == kk || null != Bk[Fk].seq && Bk[Fk].seq < kk);) Fk++;
              Bk.splice(Fk, 0, {
                seq: kk,
                name: wk
              }), bk = Fk;
              for (let kk of tk) kk.field >= bk && kk.field++
            }
            for (let Bk of tk)
              if (Bk.line == Rk.length && Bk.from > Fk.index) {
                let kk = Fk[2] ? 3 + (Fk[1] || "").length : 2;
                Bk.from -= kk, Bk.to -= kk
              } tk.push(new Ik(bk, Rk.length, Fk.index, Fk.index + wk.length)), ak = ak.slice(0, Fk.index) + Xk + ak.slice(Fk.index + Fk[0].length)
          }
          ak = ak.replace(/\\([{}])/g, ((kk, Fk, Bk) => {
            for (let ak of tk) ak.line == Rk.length && ak.from > Bk && (ak.from--, ak.to--);
            return Fk
          })), Rk.push(ak)
        }
        return new kF(Rk, tk)
      }
    }
    let FF = tk.d.widget({
        widget: new class extends tk.u {
          toDOM() {
            let kk = document.createElement("span");
            return kk.className = "cm-snippetFieldPosition", kk
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      BF = tk.d.mark({
        class: "cm-snippetField"
      });
    class RF {
      constructor(kk, Fk) {
        this.hb = kk, this.active = Fk, this.deco = tk.d.set(kk.map((kk => (kk.from == kk.to ? FF : BF).range(kk.from, kk.to))), !0)
      }
      map(kk) {
        let Fk = [];
        for (let Bk of this.hb) {
          let Rk = Bk.map(kk);
          if (!Rk) return null;
          Fk.push(Rk)
        }
        return new RF(Fk, this.active)
      }
      selectionInsideField(kk) {
        return kk.hb.every((kk => this.hb.some((Fk => Fk.field == this.active && Fk.from <= kk.from && Fk.to >= kk.to))))
      }
    }
    const tF = Rk.z.define({
        map: (kk, Fk) => kk && kk.map(Fk)
      }),
      aF = Rk.z.define(),
      XF = Rk.A.define({
        create: () => null,
        update(kk, Fk) {
          for (let Bk of Fk.effects) {
            if (Bk.is(tF)) return Bk.value;
            if (Bk.is(aF) && kk) return new RF(kk.hb, Bk.value)
          }
          return kk && Fk.docChanged && (kk = kk.map(Fk.changes)), kk && Fk.selection && !kk.selectionInsideField(Fk.selection) && (kk = null), kk
        },
        provide: kk => tk.l.uR.from(kk, (kk => kk ? kk.deco : tk.d.none))
      });

    function bF(kk, Fk) {
      return Rk.f.create(kk.filter((kk => kk.field == Fk)).map((kk => Rk.f.range(kk.from, kk.to))))
    }

    function wF(kk) {
      let Fk = kF.parse(kk);
      return (kk, Bk, tk, ak) => {
        let {
          text: Xk,
          hb: bk
        } = Fk.instantiate(kk.state, tk), {
          main: wk
        } = kk.state.selection, dk = {
          changes: {
            from: tk,
            to: ak == wk.from ? wk.to : ak,
            insert: Rk.B.of(Xk)
          },
          scrollIntoView: !0,
          annotations: Bk ? [Ak.of(Bk), Rk.E.userEvent.of("input.complete")] : void 0
        };
        if (bk.length && (dk.selection = bF(bk, 0)), bk.some((kk => kk.field > 0))) {
          let Fk = new RF(bk, 0),
            Bk = dk.effects = [tF.of(Fk)];
          void 0 === kk.state.field(XF, !1) && Bk.push(Rk.z.appendConfig.of([XF, JF, eF, nk]))
        }
        kk.dispatch(kk.state.update(dk))
      }
    }

    function dF(kk) {
      return Fk => {
        let {
          state: Bk,
          dispatch: Rk
        } = Fk, tk = Bk.field(XF, !1);
        if (!tk || kk < 0 && 0 == tk.active) return !1;
        let ak = tk.active + kk,
          Xk = kk > 0 && !tk.hb.some((Fk => Fk.field == ak + kk));
        return Rk(Bk.update({
          selection: bF(tk.hb, ak),
          effects: tF.of(Xk ? null : new RF(tk.hb, ak)),
          scrollIntoView: !0
        })), !0
      }
    }
    const sF = [{
        key: "Tab",
        run: dF(1),
        shift: dF(-1)
      }, {
        key: "Escape",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk;
          return !!Fk.field(XF, !1) && (Bk(Fk.update({
            effects: tF.of(null)
          })), !0)
        }
      }],
      VF = Rk.i.define({
        combine: kk => kk.length ? kk[0] : sF
      }),
      JF = Rk.o.highest(tk.W.compute([VF], (kk => kk.facet(VF))));

    function AF(kk, Fk) {
      return {
        ...Fk,
        apply: wF(kk)
      }
    }
    const eF = tk.l.domEventHandlers({
      mousedown(kk, Fk) {
        let Bk, Rk = Fk.state.field(XF, !1);
        if (!Rk || null == (Bk = Fk.posAtCoords({
            x: kk.clientX,
            y: kk.clientY
          }))) return !1;
        let tk = Rk.hb.find((kk => kk.from <= Bk && kk.to >= Bk));
        return !(!tk || tk.field == Rk.active) && (Fk.dispatch({
          selection: bF(Rk.hb, tk.field),
          effects: tF.of(Rk.hb.some((kk => kk.field > tk.field)) ? new RF(Rk.hb, tk.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const yF = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      fF = Rk.z.define({
        map(kk, Fk) {
          let Bk = Fk.mapPos(kk, -1, Rk.l.TrackAfter);
          return null == Bk ? void 0 : Bk
        }
      }),
      mF = new class extends Rk.v {};
    mF.startSide = 1, mF.endSide = -1;
    const WF = Rk.A.define({
      create: () => Rk.u.empty,
      update(kk, Fk) {
        if (kk = kk.map(Fk.changes), Fk.selection) {
          let Bk = Fk.state.doc.lineAt(Fk.selection.main.head);
          kk = kk.update({
            filter: kk => kk >= Bk.from && kk <= Bk.to
          })
        }
        for (let Bk of Fk.effects) Bk.is(fF) && (kk = kk.update({
          add: [mF.range(Bk.value, Bk.value + 1)]
        }));
        return kk
      }
    });

    function vF() {
      return [OF, WF]
    }
    const iF = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function YF(kk) {
      for (let Fk = 0; Fk < 16; Fk += 2)
        if (iF.charCodeAt(Fk) == kk) return iF.charAt(Fk + 1);
      return (0, Rk.R)(kk < 128 ? kk : kk + 1)
    }

    function oF(kk, Fk) {
      return kk.languageDataAt("closeBrackets", Fk)[0] || yF
    }
    const LF = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      OF = tk.l.inputHandler.of(((kk, Fk, Bk, tk) => {
        if ((LF ? kk.composing : kk.compositionStarted) || kk.state.readOnly) return !1;
        let ak = kk.state.selection.main;
        if (tk.length > 2 || 2 == tk.length && 1 == (0, Rk.J)((0, Rk.I)(tk, 0)) || Fk != ak.from || Bk != ak.to) return !1;
        let Xk = function(kk, Fk) {
          let Bk = oF(kk, kk.selection.main.head),
            tk = Bk.brackets || yF.brackets;
          for (let ak of tk) {
            let Xk = YF((0, Rk.I)(ak, 0));
            if (Fk == ak) return Xk == ak ? MF(kk, ak, tk.indexOf(ak + ak + ak) > -1, Bk) : HF(kk, ak, Xk, Bk.before || yF.before);
            if (Fk == Xk && SF(kk, kk.selection.main.from)) return uF(kk, ak, Xk)
          }
          return null
        }(kk.state, tk);
        return !!Xk && (kk.dispatch(Xk), !0)
      })),
      EF = [{
        key: "Backspace",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk;
          if (Fk.readOnly) return !1;
          let tk = oF(Fk, Fk.selection.main.head).brackets || yF.brackets,
            ak = null,
            Xk = Fk.changeByRange((kk => {
              if (kk.empty) {
                let Bk = function(kk, Fk) {
                  let Bk = kk.sliceString(Fk - 2, Fk);
                  return (0, Rk.J)((0, Rk.I)(Bk, 0)) == Bk.length ? Bk : Bk.slice(1)
                }(Fk.doc, kk.head);
                for (let ak of tk)
                  if (ak == Bk && NF(Fk.doc, kk.head) == YF((0, Rk.I)(ak, 0))) return {
                    changes: {
                      from: kk.head - ak.length,
                      to: kk.head + ak.length
                    },
                    range: Rk.f.cursor(kk.head - ak.length)
                  }
              }
              return {
                range: ak = kk
              }
            }));
          return ak || Bk(Fk.update(Xk, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !ak
        }
      }];

    function SF(kk, Fk) {
      let Bk = !1;
      return kk.field(WF).between(0, kk.doc.length, (kk => {
        kk == Fk && (Bk = !0)
      })), Bk
    }

    function NF(kk, Fk) {
      let Bk = kk.sliceString(Fk, Fk + 2);
      return Bk.slice(0, (0, Rk.J)((0, Rk.I)(Bk, 0)))
    }

    function HF(kk, Fk, Bk, tk) {
      let ak = null,
        Xk = kk.changeByRange((Xk => {
          if (!Xk.empty) return {
            changes: [{
              insert: Fk,
              from: Xk.from
            }, {
              insert: Bk,
              from: Xk.to
            }],
            effects: fF.of(Xk.to + Fk.length),
            range: Rk.f.range(Xk.anchor + Fk.length, Xk.head + Fk.length)
          };
          let bk = NF(kk.doc, Xk.head);
          return !bk || /\s/.test(bk) || tk.indexOf(bk) > -1 ? {
            changes: {
              insert: Fk + Bk,
              from: Xk.head
            },
            effects: fF.of(Xk.head + Fk.length),
            range: Rk.f.cursor(Xk.head + Fk.length)
          } : {
            range: ak = Xk
          }
        }));
      return ak ? null : kk.update(Xk, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function uF(kk, Fk, Bk) {
      let tk = null,
        ak = kk.changeByRange((Fk => Fk.empty && NF(kk.doc, Fk.head) == Bk ? {
          changes: {
            from: Fk.head,
            to: Fk.head + Bk.length,
            insert: Bk
          },
          range: Rk.f.cursor(Fk.head + Bk.length)
        } : tk = {
          range: Fk
        }));
      return tk ? null : kk.update(ak, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function MF(kk, Fk, Bk, tk) {
      let Xk = tk.stringPrefixes || yF.stringPrefixes,
        bk = null,
        wk = kk.changeByRange((tk => {
          if (!tk.empty) return {
            changes: [{
              insert: Fk,
              from: tk.from
            }, {
              insert: Fk,
              from: tk.to
            }],
            effects: fF.of(tk.to + Fk.length),
            range: Rk.f.range(tk.anchor + Fk.length, tk.head + Fk.length)
          };
          let wk, dk = tk.head,
            sk = NF(kk.doc, dk);
          if (sk == Fk) {
            if (gF(kk, dk)) return {
              changes: {
                insert: Fk + Fk,
                from: dk
              },
              effects: fF.of(dk + Fk.length),
              range: Rk.f.cursor(dk + Fk.length)
            };
            if (SF(kk, dk)) {
              let tk = Bk && kk.sliceDoc(dk, dk + 3 * Fk.length) == Fk + Fk + Fk ? Fk + Fk + Fk : Fk;
              return {
                changes: {
                  from: dk,
                  to: dk + tk.length,
                  insert: tk
                },
                range: Rk.f.cursor(dk + tk.length)
              }
            }
          } else {
            if (Bk && kk.sliceDoc(dk - 2 * Fk.length, dk) == Fk + Fk && (wk = UF(kk, dk - 2 * Fk.length, Xk)) > -1 && gF(kk, wk)) return {
              changes: {
                insert: Fk + Fk + Fk + Fk,
                from: dk
              },
              effects: fF.of(dk + Fk.length),
              range: Rk.f.cursor(dk + Fk.length)
            };
            if (kk.charCategorizer(dk)(sk) != Rk.e.Word && UF(kk, dk, Xk) > -1 && ! function(kk, Fk, Bk, Rk) {
                let tk = (0, ak.rb)(kk).resolveInner(Fk, -1),
                  Xk = Rk.reduce(((kk, Fk) => Math.max(kk, Fk.length)), 0);
                for (let ak = 0; ak < 5; ak++) {
                  let ak = kk.sliceDoc(tk.from, Math.min(tk.to, tk.from + Bk.length + Xk)),
                    bk = ak.indexOf(Bk);
                  if (!bk || bk > -1 && Rk.indexOf(ak.slice(0, bk)) > -1) {
                    let Fk = tk.firstChild;
                    for (; Fk && Fk.from == tk.from && Fk.to - Fk.from > Bk.length + bk;) {
                      if (kk.sliceDoc(Fk.to - Bk.length, Fk.to) == Bk) return !1;
                      Fk = Fk.firstChild
                    }
                    return !0
                  }
                  let wk = tk.to == Fk && tk.parent;
                  if (!wk) break;
                  tk = wk
                }
                return !1
              }(kk, dk, Fk, Xk)) return {
              changes: {
                insert: Fk + Fk,
                from: dk
              },
              effects: fF.of(dk + Fk.length),
              range: Rk.f.cursor(dk + Fk.length)
            }
          }
          return {
            range: bk = tk
          }
        }));
      return bk ? null : kk.update(wk, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function gF(kk, Fk) {
      let Bk = (0, ak.rb)(kk).resolveInner(Fk + 1);
      return Bk.parent && Bk.from == Fk
    }

    function UF(kk, Fk, Bk) {
      let tk = kk.charCategorizer(Fk);
      if (tk(kk.sliceDoc(Fk - 1, Fk)) != Rk.e.Word) return Fk;
      for (let ak of Bk) {
        let Bk = Fk - ak.length;
        if (kk.sliceDoc(Bk, Fk) == ak && tk(kk.sliceDoc(Bk - 1, Bk)) != Rk.e.Word) return Bk
      }
      return -1
    }

    function cF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [lk, hk, Yk.of(kk), xk, TF, nk]
    }
    const GF = [{
        key: "Ctrl-Space",
        run: pk
      }, {
        mac: "Alt-`",
        run: pk
      }, {
        mac: "Alt-i",
        run: pk
      }, {
        key: "Escape",
        run: kk => {
          let Fk = kk.state.field(hk, !1);
          return !(!Fk || !Fk.active.some((kk => 0 != kk.state))) && (kk.dispatch({
            effects: Wk.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: Zk(!0)
      }, {
        key: "ArrowUp",
        run: Zk(!1)
      }, {
        key: "PageDown",
        run: Zk(!0, "page")
      }, {
        key: "PageUp",
        run: Zk(!1, "page")
      }, {
        key: "Enter",
        run: kk => {
          let Fk = kk.state.field(hk, !1);
          return !(kk.state.readOnly || !Fk || !Fk.open || Fk.open.selected < 0 || Fk.open.disabled || Date.now() - Fk.open.timestamp < kk.state.facet(Yk).interactionDelay) && qk(kk, Fk.open.options[Fk.open.selected])
        }
      }],
      TF = Rk.o.highest(tk.W.computeN([Yk], (kk => kk.facet(Yk).defaultKeymap ? [GF] : [])))
  },
  40880: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => dk,
      f: () => Jk,
      j: () => sk,
      n: () => Vk
    });
    var Rk = Bk(40741);
    class tk {
      constructor(kk, Fk, Bk, Rk) {
        this.origin = kk, this.changes = Fk, this.effects = Bk, this.clientID = Rk
      }
    }
    class ak {
      constructor(kk, Fk) {
        this.version = kk, this.unconfirmed = Fk
      }
    }
    const Xk = Rk.i.define({
        combine(kk) {
          let Fk = (0, Rk.K)(kk, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: kk => kk
          });
          return null == Fk.clientID && (Fk.clientID = kk.length && kk[0].generatedID || ""), Fk
        }
      }),
      bk = Rk.b.define(),
      wk = Rk.A.define({
        create: kk => new ak(kk.facet(Xk).startVersion, []),
        update(kk, Fk) {
          let Bk = Fk.annotation(bk);
          if (Bk) return Bk;
          let {
            sharedEffects: Rk,
            clientID: wk
          } = Fk.startState.facet(Xk), dk = Rk(Fk);
          return dk.length || !Fk.changes.empty ? new ak(kk.version, kk.unconfirmed.concat(new tk(Fk, Fk.changes, dk, wk))) : kk
        }
      });

    function dk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [wk, Xk.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, kk))]
    }

    function sk(kk, Fk) {
      let {
        version: Bk,
        unconfirmed: dk
      } = kk.field(wk), {
        clientID: sk
      } = kk.facet(Xk);
      Bk += Fk.length;
      let Vk = [],
        Jk = null,
        Ak = 0;
      for (let tk of Fk) {
        let kk = Ak < dk.length ? dk[Ak] : null;
        kk && kk.clientID == tk.clientID ? (Jk && (Jk = Jk.map(kk.changes, !0)), Vk = Rk.z.mapEffects(Vk, tk.changes), Ak++) : (Vk = Rk.z.mapEffects(Vk, tk.changes), tk.effects && (Vk = Vk.concat(tk.effects)), Jk = Jk ? Jk.compose(tk.changes) : tk.changes)
      }
      if (Ak && (dk = dk.slice(Ak)), dk.length && (Jk && (dk = dk.map((kk => {
          let Fk = kk.changes.map(Jk);
          return Jk = Jk.map(kk.changes, !0), new tk(kk.origin, Fk, Rk.z.mapEffects(kk.effects, Jk), sk)
        }))), Vk.length)) {
        let kk = dk.reduce(((kk, Fk) => kk.compose(Fk.changes)), Rk.ChangeSet.empty(dk[0].changes.length));
        Vk = Rk.z.mapEffects(Vk, kk)
      }
      return Jk ? kk.update({
        changes: Jk,
        effects: Vk,
        annotations: [Rk.E.addToHistory.of(!1), Rk.E.remote.of(!0), bk.of(new ak(Bk, dk))],
        filter: !1
      }) : kk.update({
        annotations: [bk.of(new ak(Bk, dk))]
      })
    }

    function Vk(kk) {
      return kk.field(wk).unconfirmed
    }

    function Jk(kk) {
      return kk.field(wk).version
    }
  },
  40774: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => fF
    });
    var Rk = Bk(40762);
    class tk {
      constructor(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        let dk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          sk = arguments.length > 10 ? arguments[10] : void 0;
        this.p = kk, this.stack = Fk, this.state = Bk, this.reducePos = Rk, this.pos = tk, this.score = ak, this.buffer = Xk, this.bufferBase = bk, this.curContext = wk, this.lookAhead = dk, this.parent = sk
      }
      toString() {
        return `[${this.stack.filter(((kk,Fk)=>Fk%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = kk.parser.context;
        return new tk(kk, [], Fk, Bk, Bk, 0, [], 0, Rk ? new ak(Rk, Rk.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(kk, Fk) {
        this.stack.push(this.state, Fk, this.bufferBase + this.buffer.length), this.state = kk
      }
      reduce(kk) {
        var Fk;
        let Bk = kk >> 19,
          Rk = 65535 & kk,
          {
            parser: tk
          } = this.p,
          ak = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          Xk = tk.dynamicPrecedence(Rk);
        if (Xk && (this.score += Xk), 0 == Bk) return this.pushState(tk.getGoto(this.state, Rk, !0), this.reducePos), Rk < tk.minRepeatTerm && this.storeNode(Rk, this.reducePos, this.reducePos, ak ? 8 : 4, !0), void this.reduceContext(Rk, this.reducePos);
        let bk = this.stack.length - 3 * (Bk - 1) - (262144 & kk ? 6 : 0),
          wk = bk ? this.stack[bk - 2] : this.p.hb[0].from,
          dk = this.reducePos - wk;
        dk >= 2e3 && !(null === (Fk = this.p.parser.nodeSet.types[Rk]) || void 0 === Fk ? void 0 : Fk.isAnonymous) && (wk == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = dk) : this.p.lastBigReductionSize < dk && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = wk, this.p.lastBigReductionSize = dk));
        let sk = bk ? this.stack[bk - 1] : 0,
          Vk = this.bufferBase + this.buffer.length - sk;
        if (Rk < tk.minRepeatTerm || 131072 & kk) {
          let kk = tk.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Rk, wk, kk, Vk + 4, !0)
        }
        if (262144 & kk) this.state = this.stack[bk];
        else {
          let kk = this.stack[bk - 3];
          this.state = tk.getGoto(kk, Rk, !0)
        }
        for (; this.stack.length > bk;) this.stack.pop();
        this.reduceContext(Rk, wk)
      }
      storeNode(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == kk && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let kk = this,
            Rk = this.buffer.length;
          if (0 == Rk && kk.parent && (Rk = kk.bufferBase - kk.parent.bufferBase, kk = kk.parent), Rk > 0 && 0 == kk.buffer[Rk - 4] && kk.buffer[Rk - 1] > -1) {
            if (Fk == Bk) return;
            if (kk.buffer[Rk - 2] >= Fk) return void(kk.buffer[Rk - 2] = Bk)
          }
        }
        if (tk && this.pos != Bk) {
          let tk = this.buffer.length;
          if (tk > 0 && (0 != this.buffer[tk - 4] || this.buffer[tk - 1] < 0)) {
            let kk = !1;
            for (let Fk = tk; Fk > 0 && this.buffer[Fk - 2] > Bk; Fk -= 4)
              if (this.buffer[Fk - 1] >= 0) {
                kk = !0;
                break
              } if (kk)
              for (; tk > 0 && this.buffer[tk - 2] > Bk;) this.buffer[tk] = this.buffer[tk - 4], this.buffer[tk + 1] = this.buffer[tk - 3], this.buffer[tk + 2] = this.buffer[tk - 2], this.buffer[tk + 3] = this.buffer[tk - 1], tk -= 4, Rk > 4 && (Rk -= 4)
          }
          this.buffer[tk] = kk, this.buffer[tk + 1] = Fk, this.buffer[tk + 2] = Bk, this.buffer[tk + 3] = Rk
        } else this.buffer.push(kk, Fk, Bk, Rk)
      }
      shift(kk, Fk, Bk, Rk) {
        if (131072 & kk) this.pushState(65535 & kk, this.pos);
        else if (0 == (262144 & kk)) {
          let tk = kk,
            {
              parser: ak
            } = this.p;
          this.pos = Rk;
          let Xk = ak.stateFlag(tk, 1);
          !Xk && (Rk > Bk || Fk <= ak.maxNode) && (this.reducePos = Rk), this.pushState(tk, Xk ? Bk : Math.min(Bk, this.reducePos)), this.shiftContext(Fk, Bk), Fk <= ak.maxNode && this.buffer.push(Fk, Bk, Rk, 4)
        } else this.pos = Rk, this.shiftContext(Fk, Bk), Fk <= this.p.parser.maxNode && this.buffer.push(Fk, Bk, Rk, 4)
      }
      apply(kk, Fk, Bk, Rk) {
        65536 & kk ? this.reduce(kk) : this.shift(kk, Fk, Bk, Rk)
      }
      useNode(kk, Fk) {
        let Bk = this.p.reused.length - 1;
        (Bk < 0 || this.p.reused[Bk] != kk) && (this.p.reused.push(kk), Bk++);
        let Rk = this.pos;
        this.reducePos = this.pos = Rk + kk.length, this.pushState(Fk, Rk), this.buffer.push(Bk, Rk, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, kk, this, this.p.stream.reset(this.pos - kk.length)))
      }
      split() {
        let kk = this,
          Fk = kk.buffer.length;
        for (; Fk > 0 && kk.buffer[Fk - 2] > kk.reducePos;) Fk -= 4;
        let Bk = kk.buffer.slice(Fk),
          Rk = kk.bufferBase + Fk;
        for (; kk && Rk == kk.bufferBase;) kk = kk.parent;
        return new tk(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, Bk, Rk, this.curContext, this.lookAhead, kk)
      }
      recoverByDelete(kk, Fk) {
        let Bk = kk <= this.p.parser.maxNode;
        Bk && this.storeNode(kk, this.pos, Fk, 4), this.storeNode(0, this.pos, Fk, Bk ? 8 : 4), this.pos = this.reducePos = Fk, this.score -= 190
      }
      canShift(kk) {
        for (let Fk = new Xk(this);;) {
          let Bk = this.p.parser.stateSlot(Fk.state, 4) || this.p.parser.hasAction(Fk.state, kk);
          if (0 == Bk) return !1;
          if (0 == (65536 & Bk)) return !0;
          Fk.reduce(Bk)
        }
      }
      recoverByInsert(kk) {
        if (this.stack.length >= 300) return [];
        let Fk = this.p.parser.nextStates(this.state);
        if (Fk.length > 8 || this.stack.length >= 120) {
          let Bk = [];
          for (let Rk, tk = 0; tk < Fk.length; tk += 2)(Rk = Fk[tk + 1]) != this.state && this.p.parser.hasAction(Rk, kk) && Bk.push(Fk[tk], Rk);
          if (this.stack.length < 120)
            for (let kk = 0; Bk.length < 8 && kk < Fk.length; kk += 2) {
              let Rk = Fk[kk + 1];
              Bk.some(((kk, Fk) => 1 & Fk && kk == Rk)) || Bk.push(Fk[kk], Rk)
            }
          Fk = Bk
        }
        let Bk = [];
        for (let Rk = 0; Rk < Fk.length && Bk.length < 4; Rk += 2) {
          let kk = Fk[Rk + 1];
          if (kk == this.state) continue;
          let tk = this.split();
          tk.pushState(kk, this.pos), tk.storeNode(0, tk.pos, tk.pos, 4, !0), tk.shiftContext(Fk[Rk], this.pos), tk.reducePos = this.pos, tk.score -= 200, Bk.push(tk)
        }
        return Bk
      }
      forceReduce() {
        let {
          parser: kk
        } = this.p, Fk = kk.stateSlot(this.state, 5);
        if (0 == (65536 & Fk)) return !1;
        if (!kk.validAction(this.state, Fk)) {
          let Bk = Fk >> 19,
            Rk = 65535 & Fk,
            tk = this.stack.length - 3 * Bk;
          if (tk < 0 || kk.getGoto(this.stack[tk], Rk, !1) < 0) {
            let kk = this.findForcedReduction();
            if (null == kk) return !1;
            Fk = kk
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(Fk), !0
      }
      findForcedReduction() {
        let {
          parser: kk
        } = this.p, Fk = [], Bk = (Rk, tk) => {
          if (!Fk.includes(Rk)) return Fk.push(Rk), kk.allActions(Rk, (Fk => {
            if (393216 & Fk);
            else if (65536 & Fk) {
              let Bk = (Fk >> 19) - tk;
              if (Bk > 1) {
                let Rk = 65535 & Fk,
                  tk = this.stack.length - 3 * Bk;
                if (tk >= 0 && kk.getGoto(this.stack[tk], Rk, !1) >= 0) return Bk << 19 | 65536 | Rk
              }
            } else {
              let kk = Bk(Fk, tk + 1);
              if (null != kk) return kk
            }
          }))
        };
        return Bk(this.state, 0)
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
          parser: kk
        } = this.p;
        return 65535 == kk.data[kk.stateSlot(this.state, 1)] && !kk.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(kk) {
        if (this.state != kk.state || this.stack.length != kk.stack.length) return !1;
        for (let Fk = 0; Fk < this.stack.length; Fk += 3)
          if (this.stack[Fk] != kk.stack[Fk]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(kk) {
        return this.p.parser.dialect.flags[kk]
      }
      shiftContext(kk, Fk) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, kk, this, this.p.stream.reset(Fk)))
      }
      reduceContext(kk, Fk) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, kk, this, this.p.stream.reset(Fk)))
      }
      emitContext() {
        let kk = this.buffer.length - 1;
        (kk < 0 || -3 != this.buffer[kk]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let kk = this.buffer.length - 1;
        (kk < 0 || -4 != this.buffer[kk]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(kk) {
        if (kk != this.curContext.context) {
          let Fk = new ak(this.curContext.tracker, kk);
          Fk.hash != this.curContext.hash && this.emitContext(), this.curContext = Fk
        }
      }
      setLookAhead(kk) {
        return !(kk <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = kk, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class ak {
      constructor(kk, Fk) {
        this.tracker = kk, this.context = Fk, this.hash = kk.strict ? kk.hash(Fk) : 0
      }
    }
    class Xk {
      constructor(kk) {
        this.start = kk, this.state = kk.state, this.stack = kk.stack, this.base = this.stack.length
      }
      reduce(kk) {
        let Fk = 65535 & kk,
          Bk = kk >> 19;
        0 == Bk ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (Bk - 1);
        let Rk = this.start.p.parser.getGoto(this.stack[this.base - 3], Fk, !0);
        this.state = Rk
      }
    }
    class bk {
      constructor(kk, Fk, Bk) {
        this.stack = kk, this.pos = Fk, this.index = Bk, this.buffer = kk.buffer, 0 == this.index && this.maybeNext()
      }
      static create(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.bufferBase + kk.buffer.length;
        return new bk(kk, Fk, Fk - kk.bufferBase)
      }
      maybeNext() {
        let kk = this.stack.parent;
        null != kk && (this.index = this.stack.bufferBase - kk.bufferBase, this.stack = kk, this.buffer = kk.buffer)
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
        return new bk(this.stack, this.pos, this.index)
      }
    }

    function wk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof kk) return kk;
      let Bk = null;
      for (let Rk = 0, tk = 0; Rk < kk.length;) {
        let ak = 0;
        for (;;) {
          let Fk = kk.charCodeAt(Rk++),
            Bk = !1;
          if (126 == Fk) {
            ak = 65535;
            break
          }
          Fk >= 92 && Fk--, Fk >= 34 && Fk--;
          let tk = Fk - 32;
          if (tk >= 46 && (tk -= 46, Bk = !0), ak += tk, Bk) break;
          ak *= 46
        }
        Bk ? Bk[tk++] = ak : Bk = new Fk(ak)
      }
      return Bk
    }
    class dk {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const sk = new dk;
    class Vk {
      constructor(kk, Fk) {
        this.input = kk, this.hb = Fk, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = sk, this.rangeIndex = 0, this.pos = this.chunkPos = Fk[0].from, this.range = Fk[0], this.end = Fk[Fk.length - 1].to, this.readNext()
      }
      resolveOffset(kk, Fk) {
        let Bk = this.range,
          Rk = this.rangeIndex,
          tk = this.pos + kk;
        for (; tk < Bk.from;) {
          if (!Rk) return null;
          let kk = this.hb[--Rk];
          tk -= Bk.from - kk.to, Bk = kk
        }
        for (; Fk < 0 ? tk > Bk.to : tk >= Bk.to;) {
          if (Rk == this.hb.length - 1) return null;
          let kk = this.hb[++Rk];
          tk += kk.from - Bk.to, Bk = kk
        }
        return tk
      }
      clipPos(kk) {
        if (kk >= this.range.from && kk < this.range.to) return kk;
        for (let Fk of this.hb)
          if (Fk.to > kk) return Math.max(kk, Fk.from);
        return this.end
      }
      peek(kk) {
        let Fk, Bk, Rk = this.chunkOff + kk;
        if (Rk >= 0 && Rk < this.chunk.length) Fk = this.pos + kk, Bk = this.chunk.charCodeAt(Rk);
        else {
          let Rk = this.resolveOffset(kk, 1);
          if (null == Rk) return -1;
          if (Fk = Rk, Fk >= this.chunk2Pos && Fk < this.chunk2Pos + this.chunk2.length) Bk = this.chunk2.charCodeAt(Fk - this.chunk2Pos);
          else {
            let kk = this.rangeIndex,
              Rk = this.range;
            for (; Rk.to <= Fk;) Rk = this.hb[++kk];
            this.chunk2 = this.input.chunk(this.chunk2Pos = Fk), Fk + this.chunk2.length > Rk.to && (this.chunk2 = this.chunk2.slice(0, Rk.to - Fk)), Bk = this.chunk2.charCodeAt(0)
          }
        }
        return Fk >= this.token.lookAhead && (this.token.lookAhead = Fk + 1), Bk
      }
      acceptToken(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = Fk ? this.resolveOffset(Fk, -1) : this.pos;
        if (null == Bk || Bk < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = kk, this.token.end = Bk
      }
      acceptTokenTo(kk, Fk) {
        this.token.value = kk, this.token.end = Fk
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: kk,
            chunkPos: Fk
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = kk, this.chunk2Pos = Fk, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let kk = this.input.chunk(this.pos),
            Fk = this.pos + kk.length;
          this.chunk = Fk > this.range.to ? kk.slice(0, this.range.to - this.pos) : kk, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += kk; this.pos + kk >= this.range.to;) {
          if (this.rangeIndex == this.hb.length - 1) return this.setDone();
          kk -= this.range.to - this.pos, this.range = this.hb[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += kk, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.hb[this.rangeIndex = this.hb.length - 1], this.chunk = "", this.next = -1
      }
      reset(kk, Fk) {
        if (Fk ? (this.token = Fk, Fk.start = kk, Fk.lookAhead = kk + 1, Fk.value = Fk.extended = -1) : this.token = sk, this.pos != kk) {
          if (this.pos = kk, kk == this.end) return this.setDone(), this;
          for (; kk < this.range.from;) this.range = this.hb[--this.rangeIndex];
          for (; kk >= this.range.to;) this.range = this.hb[++this.rangeIndex];
          kk >= this.chunkPos && kk < this.chunkPos + this.chunk.length ? this.chunkOff = kk - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(kk, Fk) {
        if (kk >= this.chunkPos && Fk <= this.chunkPos + this.chunk.length) return this.chunk.slice(kk - this.chunkPos, Fk - this.chunkPos);
        if (kk >= this.chunk2Pos && Fk <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(kk - this.chunk2Pos, Fk - this.chunk2Pos);
        if (kk >= this.range.from && Fk <= this.range.to) return this.input.read(kk, Fk);
        let Bk = "";
        for (let Rk of this.hb) {
          if (Rk.from >= Fk) break;
          Rk.to > kk && (Bk += this.input.read(Math.max(Rk.from, kk), Math.min(Rk.to, Fk)))
        }
        return Bk
      }
    }
    class Jk {
      constructor(kk, Fk) {
        this.data = kk, this.id = Fk
      }
      token(kk, Fk) {
        let {
          parser: Bk
        } = Fk.p;
        yk(this.data, kk, Fk, this.id, Bk.data, Bk.tokenPrecTable)
      }
    }
    Jk.prototype.contextual = Jk.prototype.fallback = Jk.prototype.extend = !1;
    class Ak {
      constructor(kk, Fk, Bk) {
        this.precTable = Fk, this.elseToken = Bk, this.data = "string" == typeof kk ? wk(kk) : kk
      }
      token(kk, Fk) {
        let Bk = kk.pos,
          Rk = 0;
        for (;;) {
          let Bk = kk.next < 0,
            tk = kk.resolveOffset(1, 1);
          if (yk(this.data, kk, Fk, 0, this.data, this.precTable), kk.token.value > -1) break;
          if (null == this.elseToken) return;
          if (Bk || Rk++, null == tk) break;
          kk.reset(tk, kk.token)
        }
        Rk && (kk.reset(Bk, kk.token), kk.acceptToken(this.elseToken, Rk))
      }
    }
    Ak.prototype.contextual = Jk.prototype.fallback = Jk.prototype.extend = !1;
    class ek {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = kk, this.contextual = !!Fk.contextual, this.fallback = !!Fk.fallback, this.extend = !!Fk.extend
      }
    }

    function yk(kk, Fk, Bk, Rk, tk, ak) {
      let Xk = 0,
        bk = 1 << Rk,
        {
          dialect: wk
        } = Bk.p.parser;
      kk: for (; 0 != (bk & kk[Xk]);) {
        let Bk = kk[Xk + 1];
        for (let Vk = Xk + 3; Vk < Bk; Vk += 2)
          if ((kk[Vk + 1] & bk) > 0) {
            let Bk = kk[Vk];
            if (wk.allows(Bk) && (-1 == Fk.token.value || Fk.token.value == Bk || mk(Bk, Fk.token.value, tk, ak))) {
              Fk.acceptToken(Bk);
              break
            }
          } let Rk = Fk.next,
          dk = 0,
          sk = kk[Xk + 2];
        if (!(Fk.next < 0 && sk > dk && 65535 == kk[Bk + 3 * sk - 3])) {
          for (; dk < sk;) {
            let tk = dk + sk >> 1,
              ak = Bk + tk + (tk << 1),
              bk = kk[ak],
              wk = kk[ak + 1] || 65536;
            if (Rk < bk) sk = tk;
            else {
              if (!(Rk >= wk)) {
                Xk = kk[ak + 2], Fk.advance();
                continue kk
              }
              dk = tk + 1
            }
          }
          break
        }
        Xk = kk[Bk + 3 * sk - 1]
      }
    }

    function fk(kk, Fk, Bk) {
      for (let Rk, tk = Fk; 65535 != (Rk = kk[tk]); tk++)
        if (Rk == Bk) return tk - Fk;
      return -1
    }

    function mk(kk, Fk, Bk, Rk) {
      let tk = fk(Bk, Rk, Fk);
      return tk < 0 || fk(Bk, Rk, kk) < tk
    }
    const Wk = "undefined" != typeof process && {
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
    let vk = null;

    function ik(kk, Fk, Bk) {
      let tk = kk.cursor(Rk.c.IncludeAnonymous);
      for (tk.moveTo(Fk);;)
        if (!(Bk < 0 ? tk.childBefore(Fk) : tk.childAfter(Fk)))
          for (;;) {
            if ((Bk < 0 ? tk.to < Fk : tk.from > Fk) && !tk.type.isError) return Bk < 0 ? Math.max(0, Math.min(tk.to - 1, Fk - 25)) : Math.min(kk.length, Math.max(tk.from + 1, Fk + 25));
            if (Bk < 0 ? tk.prevSibling() : tk.nextSibling()) break;
            if (!tk.parent()) return Bk < 0 ? 0 : kk.length
          }
    }
    class Yk {
      constructor(kk, Fk) {
        this.fragments = kk, this.nodeSet = Fk, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let kk = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (kk) {
          for (this.safeFrom = kk.openStart ? ik(kk.tree, kk.from + kk.offset, 1) - kk.offset : kk.from, this.safeTo = kk.openEnd ? ik(kk.tree, kk.to + kk.offset, -1) - kk.offset : kk.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(kk.tree), this.start.push(-kk.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(kk) {
        if (kk < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= kk;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let Fk = this.trees.length - 1;
          if (Fk < 0) return this.nextFragment(), null;
          let Bk = this.trees[Fk],
            tk = this.index[Fk];
          if (tk == Bk.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let ak = Bk.children[tk],
            Xk = this.start[Fk] + Bk.positions[tk];
          if (Xk > kk) return this.nextStart = Xk, null;
          if (ak instanceof Rk.w) {
            if (Xk == kk) {
              if (Xk < this.safeFrom) return null;
              let kk = Xk + ak.length;
              if (kk <= this.safeTo) {
                let Fk = ak.prop(Rk.g.lookAhead);
                if (!Fk || kk + Fk < this.fragment.to) return ak
              }
            }
            this.index[Fk]++, Xk + ak.length >= Math.max(this.safeFrom, kk) && (this.trees.push(ak), this.start.push(Xk), this.index.push(0))
          } else this.index[Fk]++, this.nextStart = Xk + ak.length
        }
      }
    }
    class Lk {
      constructor(kk, Fk) {
        this.stream = Fk, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = kk.tokenizers.map((kk => new dk))
      }
      getActions(kk) {
        let Fk = 0,
          Bk = null,
          {
            parser: Rk
          } = kk.p,
          {
            tokenizers: tk
          } = Rk,
          ak = Rk.stateSlot(kk.state, 3),
          Xk = kk.curContext ? kk.curContext.hash : 0,
          bk = 0;
        for (let wk = 0; wk < tk.length; wk++) {
          if (0 == (1 << wk & ak)) continue;
          let Rk = tk[wk],
            dk = this.tokens[wk];
          if ((!Bk || Rk.fallback) && ((Rk.contextual || dk.start != kk.pos || dk.mask != ak || dk.context != Xk) && (this.updateCachedToken(dk, Rk, kk), dk.mask = ak, dk.context = Xk), dk.lookAhead > dk.end + 25 && (bk = Math.max(dk.lookAhead, bk)), 0 != dk.value)) {
            let tk = Fk;
            if (dk.extended > -1 && (Fk = this.addActions(kk, dk.extended, dk.end, Fk)), Fk = this.addActions(kk, dk.value, dk.end, Fk), !Rk.extend && (Bk = dk, Fk > tk)) break
          }
        }
        for (; this.actions.length > Fk;) this.actions.pop();
        return bk && kk.setLookAhead(bk), Bk || kk.pos != this.stream.end || (Bk = new dk, Bk.value = kk.p.parser.eofTerm, Bk.start = Bk.end = kk.pos, Fk = this.addActions(kk, Bk.value, Bk.end, Fk)), this.mainToken = Bk, this.actions
      }
      getMainToken(kk) {
        if (this.mainToken) return this.mainToken;
        let Fk = new dk,
          {
            pos: Bk,
            p: Rk
          } = kk;
        return Fk.start = Bk, Fk.end = Math.min(Bk + 1, Rk.stream.end), Fk.value = Bk == Rk.stream.end ? Rk.parser.eofTerm : 0, Fk
      }
      updateCachedToken(kk, Fk, Bk) {
        let Rk = this.stream.clipPos(Bk.pos);
        if (Fk.token(this.stream.reset(Rk, kk), Bk), kk.value > -1) {
          let {
            parser: Fk
          } = Bk.p;
          for (let Rk = 0; Rk < Fk.specialized.length; Rk++)
            if (Fk.specialized[Rk] == kk.value) {
              let tk = Fk.specializers[Rk](this.stream.read(kk.start, kk.end), Bk);
              if (tk >= 0 && Bk.p.parser.dialect.allows(tk >> 1)) {
                0 == (1 & tk) ? kk.value = tk >> 1 : kk.extended = tk >> 1;
                break
              }
            }
        } else kk.value = 0, kk.end = this.stream.clipPos(Rk + 1)
      }
      putAction(kk, Fk, Bk, Rk) {
        for (let tk = 0; tk < Rk; tk += 3)
          if (this.actions[tk] == kk) return Rk;
        return this.actions[Rk++] = kk, this.actions[Rk++] = Fk, this.actions[Rk++] = Bk, Rk
      }
      addActions(kk, Fk, Bk, Rk) {
        let {
          state: tk
        } = kk, {
          parser: ak
        } = kk.p, {
          data: Xk
        } = ak;
        for (let bk = 0; bk < 2; bk++)
          for (let kk = ak.stateSlot(tk, bk ? 2 : 1);; kk += 3) {
            if (65535 == Xk[kk]) {
              if (1 != Xk[kk + 1]) {
                0 == Rk && 2 == Xk[kk + 1] && (Rk = this.putAction(uk(Xk, kk + 2), Fk, Bk, Rk));
                break
              }
              kk = uk(Xk, kk + 2)
            }
            Xk[kk] == Fk && (Rk = this.putAction(uk(Xk, kk + 1), Fk, Bk, Rk))
          }
        return Rk
      }
    }
    class Ok {
      constructor(kk, Fk, Bk, Rk) {
        this.parser = kk, this.input = Fk, this.hb = Rk, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Vk(Fk, Rk), this.tokens = new Lk(kk, this.stream), this.topTerm = kk.top[1];
        let {
          from: ak
        } = Rk[0];
        this.stacks = [tk.start(this, kk.top[0], ak)], this.fragments = Bk.length && this.stream.end - ak > 4 * kk.bufferLength ? new Yk(Bk, kk.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let kk, Fk, Bk = this.stacks,
          Rk = this.minStackPos,
          tk = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == Bk.length) {
          let [kk] = Bk;
          for (; kk.forceReduce() && kk.stack.length && kk.stack[kk.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let ak = 0; ak < Bk.length; ak++) {
          let Xk = Bk[ak];
          for (;;) {
            if (this.tokens.mainToken = null, Xk.pos > Rk) tk.push(Xk);
            else {
              if (this.advanceStack(Xk, tk, Bk)) continue;
              {
                kk || (kk = [], Fk = []), kk.push(Xk);
                let Bk = this.tokens.getMainToken(Xk);
                Fk.push(Bk.value, Bk.end)
              }
            }
            break
          }
        }
        if (!tk.length) {
          let Fk = kk && function(kk) {
            let Fk = null;
            for (let Bk of kk) {
              let kk = Bk.p.stoppedAt;
              (Bk.pos == Bk.p.stream.end || null != kk && Bk.pos > kk) && Bk.p.parser.stateFlag(Bk.state, 2) && (!Fk || Fk.score < Bk.score) && (Fk = Bk)
            }
            return Fk
          }(kk);
          if (Fk) return Wk && console.log("Finish with " + this.stackID(Fk)), this.stackToTree(Fk);
          if (this.parser.strict) throw Wk && kk && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Rk);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && kk) {
          let Bk = null != this.stoppedAt && kk[0].pos > this.stoppedAt ? kk[0] : this.runRecovery(kk, Fk, tk);
          if (Bk) return Wk && console.log("Force-finish " + this.stackID(Bk)), this.stackToTree(Bk.forceAll())
        }
        if (this.recovering) {
          let kk = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (tk.length > kk)
            for (tk.sort(((kk, Fk) => Fk.score - kk.score)); tk.length > kk;) tk.pop();
          tk.some((kk => kk.reducePos > Rk)) && this.recovering--
        } else if (tk.length > 1) {
          kk: for (let kk = 0; kk < tk.length - 1; kk++) {
            let Fk = tk[kk];
            for (let Bk = kk + 1; Bk < tk.length; Bk++) {
              let Rk = tk[Bk];
              if (Fk.sameState(Rk) || Fk.buffer.length > 500 && Rk.buffer.length > 500) {
                if (!((Fk.score - Rk.score || Fk.buffer.length - Rk.buffer.length) > 0)) {
                  tk.splice(kk--, 1);
                  continue kk
                }
                tk.splice(Bk--, 1)
              }
            }
          }
          tk.length > 12 && (tk.sort(((kk, Fk) => Fk.score - kk.score)), tk.splice(12, tk.length - 12))
        }
        this.minStackPos = tk[0].pos;
        for (let ak = 1; ak < tk.length; ak++) tk[ak].pos < this.minStackPos && (this.minStackPos = tk[ak].pos);
        return null
      }
      stopAt(kk) {
        if (null != this.stoppedAt && this.stoppedAt < kk) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = kk
      }
      advanceStack(kk, Fk, Bk) {
        let tk = kk.pos,
          {
            parser: ak
          } = this,
          Xk = Wk ? this.stackID(kk) + " -> " : "";
        if (null != this.stoppedAt && tk > this.stoppedAt) return kk.forceReduce() ? kk : null;
        if (this.fragments) {
          let Fk = kk.curContext && kk.curContext.tracker.strict,
            Bk = Fk ? kk.curContext.hash : 0;
          for (let bk = this.fragments.nodeAt(tk); bk;) {
            let tk = this.parser.nodeSet.types[bk.type.id] == bk.type ? ak.getGoto(kk.state, bk.type.id) : -1;
            if (tk > -1 && bk.length && (!Fk || (bk.prop(Rk.g.contextHash) || 0) == Bk)) return kk.useNode(bk, tk), Wk && console.log(Xk + this.stackID(kk) + ` (via reuse of ${ak.getName(bk.type.id)})`), !0;
            if (!(bk instanceof Rk.w) || 0 == bk.children.length || bk.positions[0] > 0) break;
            let wk = bk.children[0];
            if (!(wk instanceof Rk.w && 0 == bk.positions[0])) break;
            bk = wk
          }
        }
        let bk = ak.stateSlot(kk.state, 4);
        if (bk > 0) return kk.reduce(bk), Wk && console.log(Xk + this.stackID(kk) + ` (via always-reduce ${ak.getName(65535&bk)})`), !0;
        if (kk.stack.length >= 8400)
          for (; kk.stack.length > 6e3 && kk.forceReduce(););
        let wk = this.tokens.getActions(kk);
        for (let Rk = 0; Rk < wk.length;) {
          let bk = wk[Rk++],
            dk = wk[Rk++],
            sk = wk[Rk++],
            Vk = Rk == wk.length || !Bk,
            Jk = Vk ? kk : kk.split(),
            Ak = this.tokens.mainToken;
          if (Jk.apply(bk, dk, Ak ? Ak.start : Jk.pos, sk), Wk && console.log(Xk + this.stackID(Jk) + ` (via ${0==(65536&bk)?"shift":`reduce of ${ak.getName(65535&bk)}`} for ${ak.getName(dk)} @ ${tk}${Jk==kk?"":", split"})`), Vk) return !0;
          Jk.pos > tk ? Fk.push(Jk) : Bk.push(Jk)
        }
        return !1
      }
      advanceFully(kk, Fk) {
        let Bk = kk.pos;
        for (;;) {
          if (!this.advanceStack(kk, null, null)) return !1;
          if (kk.pos > Bk) return Ek(kk, Fk), !0
        }
      }
      runRecovery(kk, Fk, Bk) {
        let Rk = null,
          tk = !1;
        for (let ak = 0; ak < kk.length; ak++) {
          let Xk = kk[ak],
            bk = Fk[ak << 1],
            wk = Fk[1 + (ak << 1)],
            dk = Wk ? this.stackID(Xk) + " -> " : "";
          if (Xk.deadEnd) {
            if (tk) continue;
            if (tk = !0, Xk.restart(), Wk && console.log(dk + this.stackID(Xk) + " (restarted)"), this.advanceFully(Xk, Bk)) continue
          }
          let sk = Xk.split(),
            Vk = dk;
          for (let kk = 0; kk < 10 && sk.forceReduce(); kk++) {
            if (Wk && console.log(Vk + this.stackID(sk) + " (via force-reduce)"), this.advanceFully(sk, Bk)) break;
            Wk && (Vk = this.stackID(sk) + " -> ")
          }
          for (let kk of Xk.recoverByInsert(bk)) Wk && console.log(dk + this.stackID(kk) + " (via recover-insert)"), this.advanceFully(kk, Bk);
          this.stream.end > Xk.pos ? (wk == Xk.pos && (wk++, bk = 0), Xk.recoverByDelete(bk, wk), Wk && console.log(dk + this.stackID(Xk) + ` (via recover-delete ${this.parser.getName(bk)})`), Ek(Xk, Bk)) : (!Rk || Rk.score < sk.score) && (Rk = sk)
        }
        return Rk
      }
      stackToTree(kk) {
        return kk.close(), Rk.w.build({
          buffer: bk.create(kk),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.hb[0].from,
          length: kk.pos - this.hb[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(kk) {
        let Fk = (vk || (vk = new WeakMap)).get(kk);
        return Fk || vk.set(kk, Fk = String.fromCodePoint(this.nextStackID++)), Fk + kk
      }
    }

    function Ek(kk, Fk) {
      for (let Bk = 0; Bk < Fk.length; Bk++) {
        let Rk = Fk[Bk];
        if (Rk.pos == kk.pos && Rk.sameState(kk)) return void(Fk[Bk].score < kk.score && (Fk[Bk] = kk))
      }
      Fk.push(kk)
    }
    class Sk {
      constructor(kk, Fk, Bk) {
        this.source = kk, this.flags = Fk, this.disabled = Bk
      }
      allows(kk) {
        return !this.disabled || 0 == this.disabled[kk]
      }
    }
    const Nk = kk => kk;
    class Hk extends Rk.p {
      constructor(kk) {
        if (super(), this.wrappers = [], 14 != kk.version) throw new RangeError(`Parser version (${kk.version}) doesn't match runtime version (14)`);
        let Fk = kk.nodeNames.split(" ");
        this.minRepeatTerm = Fk.length;
        for (let Rk = 0; Rk < kk.repeatNodeCount; Rk++) Fk.push("");
        let Bk = Object.keys(kk.topRules).map((Fk => kk.topRules[Fk][1])),
          tk = [];
        for (let Rk = 0; Rk < Fk.length; Rk++) tk.push([]);

        function ak(kk, Fk, Bk) {
          tk[kk].push([Fk, Fk.deserialize(String(Bk))])
        }
        if (kk.nodeProps)
          for (let bk of kk.nodeProps) {
            let kk = bk[0];
            "string" == typeof kk && (kk = Rk.g[kk]);
            for (let Fk = 1; Fk < bk.length;) {
              let Bk = bk[Fk++];
              if (Bk >= 0) ak(Bk, kk, bk[Fk++]);
              else {
                let Rk = bk[Fk + -Bk];
                for (let tk = -Bk; tk > 0; tk--) ak(bk[Fk++], kk, Rk);
                Fk++
              }
            }
          }
        this.nodeSet = new Rk.i(Fk.map(((Fk, ak) => Rk.l.define({
          name: ak >= this.minRepeatTerm ? void 0 : Fk,
          id: ak,
          props: tk[ak],
          top: Bk.indexOf(ak) > -1,
          error: 0 == ak,
          skipped: kk.skippedNodes && kk.skippedNodes.indexOf(ak) > -1
        })))), kk.propSources && (this.nodeSet = this.nodeSet.extend(...kk.propSources)), this.strict = !1, this.bufferLength = Rk.b;
        let Xk = wk(kk.tokenData);
        this.context = kk.context, this.specializerSpecs = kk.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Rk = 0; Rk < this.specializerSpecs.length; Rk++) this.specialized[Rk] = this.specializerSpecs[Rk].term;
        this.specializers = this.specializerSpecs.map(Mk), this.states = wk(kk.states, Uint32Array), this.data = wk(kk.stateData), this.goto = wk(kk.goto), this.maxTerm = kk.maxTerm, this.tokenizers = kk.tokenizers.map((kk => "number" == typeof kk ? new Jk(Xk, kk) : kk)), this.topRules = kk.topRules, this.dialects = kk.dialects || {}, this.dynamicPrecedences = kk.dynamicPrecedences || null, this.tokenPrecTable = kk.tokenPrec, this.termNames = kk.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(kk, Fk, Bk) {
        let Rk = new Ok(this, kk, Fk, Bk);
        for (let tk of this.wrappers) Rk = tk(Rk, kk, Fk, Bk);
        return Rk
      }
      getGoto(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = this.goto;
        if (Fk >= Rk[0]) return -1;
        for (let tk = Rk[Fk + 1];;) {
          let Fk = Rk[tk++],
            ak = 1 & Fk,
            Xk = Rk[tk++];
          if (ak && Bk) return Xk;
          for (let Bk = tk + (Fk >> 1); tk < Bk; tk++)
            if (Rk[tk] == kk) return Xk;
          if (ak) return -1
        }
      }
      hasAction(kk, Fk) {
        let Bk = this.data;
        for (let Rk = 0; Rk < 2; Rk++)
          for (let tk, ak = this.stateSlot(kk, Rk ? 2 : 1);; ak += 3) {
            if (65535 == (tk = Bk[ak])) {
              if (1 != Bk[ak + 1]) {
                if (2 == Bk[ak + 1]) return uk(Bk, ak + 2);
                break
              }
              tk = Bk[ak = uk(Bk, ak + 2)]
            }
            if (tk == Fk || 0 == tk) return uk(Bk, ak + 1)
          }
        return 0
      }
      stateSlot(kk, Fk) {
        return this.states[6 * kk + Fk]
      }
      stateFlag(kk, Fk) {
        return (this.stateSlot(kk, 0) & Fk) > 0
      }
      validAction(kk, Fk) {
        return !!this.allActions(kk, (kk => kk == Fk || null))
      }
      allActions(kk, Fk) {
        let Bk = this.stateSlot(kk, 4),
          Rk = Bk ? Fk(Bk) : void 0;
        for (let tk = this.stateSlot(kk, 1); null == Rk; tk += 3) {
          if (65535 == this.data[tk]) {
            if (1 != this.data[tk + 1]) break;
            tk = uk(this.data, tk + 2)
          }
          Rk = Fk(uk(this.data, tk + 1))
        }
        return Rk
      }
      nextStates(kk) {
        let Fk = [];
        for (let Bk = this.stateSlot(kk, 1);; Bk += 3) {
          if (65535 == this.data[Bk]) {
            if (1 != this.data[Bk + 1]) break;
            Bk = uk(this.data, Bk + 2)
          }
          if (0 == (1 & this.data[Bk + 2])) {
            let kk = this.data[Bk + 1];
            Fk.some(((Fk, Bk) => 1 & Bk && Fk == kk)) || Fk.push(this.data[Bk], kk)
          }
        }
        return Fk
      }
      configure(kk) {
        let Fk = Object.assign(Object.create(Hk.prototype), this);
        if (kk.props && (Fk.nodeSet = this.nodeSet.extend(...kk.props)), kk.top) {
          let Bk = this.topRules[kk.top];
          if (!Bk) throw new RangeError(`Invalid top rule name ${kk.top}`);
          Fk.top = Bk
        }
        return kk.tokenizers && (Fk.tokenizers = this.tokenizers.map((Fk => {
          let Bk = kk.tokenizers.find((kk => kk.from == Fk));
          return Bk ? Bk.to : Fk
        }))), kk.specializers && (Fk.specializers = this.specializers.slice(), Fk.specializerSpecs = this.specializerSpecs.map(((Bk, Rk) => {
          let tk = kk.specializers.find((kk => kk.from == Bk.external));
          if (!tk) return Bk;
          let ak = Object.assign(Object.assign({}, Bk), {
            external: tk.to
          });
          return Fk.specializers[Rk] = Mk(ak), ak
        }))), kk.contextTracker && (Fk.context = kk.contextTracker), kk.dialect && (Fk.dialect = this.parseDialect(kk.dialect)), null != kk.strict && (Fk.strict = kk.strict), kk.wrap && (Fk.wrappers = Fk.wrappers.concat(kk.wrap)), null != kk.bufferLength && (Fk.bufferLength = kk.bufferLength), Fk
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(kk) {
        return this.termNames ? this.termNames[kk] : String(kk <= this.maxNode && this.nodeSet.types[kk].name || kk)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(kk) {
        let Fk = this.dynamicPrecedences;
        return null == Fk ? 0 : Fk[kk] || 0
      }
      parseDialect(kk) {
        let Fk = Object.keys(this.dialects),
          Bk = Fk.map((() => !1));
        if (kk)
          for (let tk of kk.split(" ")) {
            let kk = Fk.indexOf(tk);
            kk >= 0 && (Bk[kk] = !0)
          }
        let Rk = null;
        for (let tk = 0; tk < Fk.length; tk++)
          if (!Bk[tk])
            for (let kk, Bk = this.dialects[Fk[tk]]; 65535 != (kk = this.data[Bk++]);)(Rk || (Rk = new Uint8Array(this.maxTerm + 1)))[kk] = 1;
        return new Sk(kk, Bk, Rk)
      }
      static deserialize(kk) {
        return new Hk(kk)
      }
    }

    function uk(kk, Fk) {
      return kk[Fk] | kk[Fk + 1] << 16
    }

    function Mk(kk) {
      if (kk.external) {
        let Fk = kk.extend ? 1 : 0;
        return (Bk, Rk) => kk.external(Bk, Rk) << 1 | Fk
      }
      return kk.get
    }
    var gk = Bk(40765);
    const Uk = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      ck = new class {
        constructor(kk) {
          this.start = kk.start, this.shift = kk.shift || Nk, this.reduce = kk.reduce || Nk, this.reuse = kk.reuse || Nk, this.hash = kk.hash || (() => 0), this.strict = !1 !== kk.strict
        }
      }({
        start: !1,
        shift: (kk, Fk) => 5 == Fk || 6 == Fk || 320 == Fk ? kk : 321 == Fk,
        strict: !1
      }),
      Gk = new ek(((kk, Fk) => {
        let {
          next: Bk
        } = kk;
        (125 == Bk || -1 == Bk || Fk.context) && kk.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      Tk = new ek(((kk, Fk) => {
        let Bk, {
          next: Rk
        } = kk;
        Uk.indexOf(Rk) > -1 || (47 != Rk || 47 != (Bk = kk.peek(1)) && 42 != Bk) && (125 == Rk || 59 == Rk || -1 == Rk || Fk.context || kk.acceptToken(316))
      }), {
        contextual: !0
      }),
      rk = new ek(((kk, Fk) => {
        91 != kk.next || Fk.context || kk.acceptToken(317)
      }), {
        contextual: !0
      }),
      Dk = new ek(((kk, Fk) => {
        let {
          next: Bk
        } = kk;
        if (43 == Bk || 45 == Bk) {
          if (kk.advance(), Bk == kk.next) {
            kk.advance();
            let Bk = !Fk.context && Fk.canShift(1);
            kk.acceptToken(Bk ? 1 : 2)
          }
        } else 63 == Bk && 46 == kk.peek(1) && (kk.advance(), kk.advance(), (kk.next < 48 || kk.next > 57) && kk.acceptToken(3))
      }), {
        contextual: !0
      });

    function zk(kk, Fk) {
      return kk >= 65 && kk <= 90 || kk >= 97 && kk <= 122 || 95 == kk || kk >= 192 || !Fk && kk >= 48 && kk <= 57
    }
    const Pk = new ek(((kk, Fk) => {
        if (60 != kk.next || !Fk.dialectEnabled(0)) return;
        if (kk.advance(), 47 == kk.next) return;
        let Bk = 0;
        for (; Uk.indexOf(kk.next) > -1;) kk.advance(), Bk++;
        if (zk(kk.next, !0)) {
          for (kk.advance(), Bk++; zk(kk.next, !1);) kk.advance(), Bk++;
          for (; Uk.indexOf(kk.next) > -1;) kk.advance(), Bk++;
          if (44 == kk.next) return;
          for (let Fk = 0;; Fk++) {
            if (7 == Fk) {
              if (!zk(kk.next, !0)) return;
              break
            }
            if (kk.next != "extends".charCodeAt(Fk)) break;
            kk.advance(), Bk++
          }
        }
        kk.acceptToken(4, -Bk)
      })),
      hk = (0, gk.g)({
        "get set async static": gk.n.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": gk.n.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": gk.n.operatorKeyword,
        "let var const using function class extends": gk.n.definitionKeyword,
        "import export from": gk.n.moduleKeyword,
        "with debugger new": gk.n.keyword,
        TemplateString: gk.n.special(gk.n.string),
        super: gk.n.atom,
        BooleanLiteral: gk.n.bool,
        this: gk.n.self,
        null: gk.n.null,
        Star: gk.n.modifier,
        VariableName: gk.n.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": gk.n.function(gk.n.variableName),
        VariableDefinition: gk.n.definition(gk.n.variableName),
        Label: gk.n.labelName,
        PropertyName: gk.n.propertyName,
        PrivatePropertyName: gk.n.special(gk.n.propertyName),
        "CallExpression/MemberExpression/PropertyName": gk.n.function(gk.n.propertyName),
        "FunctionDeclaration/VariableDefinition": gk.n.function(gk.n.definition(gk.n.variableName)),
        "ClassDeclaration/VariableDefinition": gk.n.definition(gk.n.className),
        "NewExpression/VariableName": gk.n.className,
        PropertyDefinition: gk.n.definition(gk.n.propertyName),
        PrivatePropertyDefinition: gk.n.definition(gk.n.special(gk.n.propertyName)),
        UpdateOp: gk.n.updateOperator,
        "LineComment Hashbang": gk.n.lineComment,
        BlockComment: gk.n.blockComment,
        Number: gk.n.number,
        String: gk.n.string,
        Escape: gk.n.escape,
        ArithOp: gk.n.arithmeticOperator,
        LogicOp: gk.n.logicOperator,
        BitOp: gk.n.bitwiseOperator,
        CompareOp: gk.n.compareOperator,
        RegExp: gk.n.regexp,
        Equals: gk.n.definitionOperator,
        Arrow: gk.n.function(gk.n.punctuation),
        ": Spread": gk.n.punctuation,
        "( )": gk.n.paren,
        "[ ]": gk.n.squareBracket,
        "{ }": gk.n.brace,
        "InterpolationStart InterpolationEnd": gk.n.special(gk.n.brace),
        ".": gk.n.derefOperator,
        ", ;": gk.n.separator,
        "@": gk.n.meta,
        TypeName: gk.n.typeName,
        TypeDefinition: gk.n.definition(gk.n.typeName),
        "type enum interface implements namespace module declare": gk.n.definitionKeyword,
        "abstract global Privacy readonly override": gk.n.modifier,
        "is keyof unique infer asserts": gk.n.operatorKeyword,
        JSXAttributeValue: gk.n.attributeValue,
        JSXText: gk.n.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": gk.n.angleBracket,
        "JSXIdentifier JSXNameSpacedName": gk.n.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": gk.n.attributeName,
        "JSXBuiltin/JSXIdentifier": gk.n.standard(gk.n.tagName)
      }),
      qk = {
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
      Ck = {
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
      Zk = {
        __proto__: null,
        "<": 193
      },
      pk = Hk.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: ck,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [hk],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [Tk, rk, Dk, Pk, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Gk, new Ak("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new Ak("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: kk => qk[kk] || -1
        }, {
          term: 343,
          get: kk => Ck[kk] || -1
        }, {
          term: 95,
          get: kk => Zk[kk] || -1
        }],
        tokenPrec: 15201
      });
    var Kk = Bk(40759),
      xk = Bk(40741),
      jk = Bk(40748),
      lk = Bk(40738);
    const nk = [(0, lk.q)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, lk.q)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, lk.q)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, lk.q)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, lk.q)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, lk.q)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, lk.q)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, lk.q)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, lk.q)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, lk.q)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, lk.q)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      Ik = nk.concat([(0, lk.q)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, lk.q)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, lk.q)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      Qk = new Rk.o,
      kF = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function FF(kk) {
      return (Fk, Bk) => {
        let Rk = Fk.node.getChild("VariableDefinition");
        return Rk && Bk(Rk, kk), !0
      }
    }
    const BF = ["FunctionDeclaration"],
      RF = {
        FunctionDeclaration: FF("function"),
        ClassDeclaration: FF("class"),
        ClassExpression: () => !0,
        EnumDeclaration: FF("constant"),
        TypeAliasDeclaration: FF("type"),
        NamespaceDeclaration: FF("namespace"),
        VariableDefinition(kk, Fk) {
          kk.matchContext(BF) || Fk(kk, "variable")
        },
        TypeDefinition(kk, Fk) {
          Fk(kk, "type")
        },
        __proto__: null
      };

    function tF(kk, Fk) {
      let Bk = Qk.get(Fk);
      if (Bk) return Bk;
      let tk = [],
        ak = !0;

      function Xk(Fk, Bk) {
        let Rk = kk.sliceString(Fk.from, Fk.to);
        tk.push({
          label: Rk,
          type: Bk
        })
      }
      return Fk.cursor(Rk.c.IncludeAnonymous).iterate((Fk => {
        if (ak) ak = !1;
        else if (Fk.name) {
          let kk = RF[Fk.name];
          if (kk && kk(Fk, Xk) || kF.has(Fk.name)) return !1
        } else if (Fk.to - Fk.from > 8192) {
          for (let Bk of tF(kk, Fk.node)) tk.push(Bk);
          return !1
        }
      })), Qk.set(Fk, tk), tk
    }
    const aF = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      XF = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function bF(kk) {
      let Fk = (0, Kk.rb)(kk.state).resolveInner(kk.pos, -1);
      if (XF.indexOf(Fk.name) > -1) return null;
      let Bk = "VariableName" == Fk.name || Fk.to - Fk.from < 20 && aF.test(kk.state.sliceDoc(Fk.from, Fk.to));
      if (!Bk && !kk.explicit) return null;
      let Rk = [];
      for (let tk = Fk; tk; tk = tk.parent) kF.has(tk.name) && (Rk = Rk.concat(tF(kk.state.doc, tk)));
      return {
        options: Rk,
        from: Bk ? Fk.from : kk.pos,
        validFor: aF
      }
    }
    const wF = Kk.l.define({
        name: "javascript",
        parser: pk.configure({
          props: [Kk.bb.add({
            IfStatement: (0, Kk.x)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, Kk.x)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: Kk.I,
            SwitchBody: kk => {
              let Fk = kk.textAfter,
                Bk = /^\s*\}/.test(Fk),
                Rk = /^\s*(case|default)\b/.test(Fk);
              return kk.baseIndent + (Bk ? 0 : Rk ? 1 : 2) * kk.unit
            },
            Block: (0, Kk.E)({
              closing: "}"
            }),
            ArrowFunction: kk => kk.baseIndent + kk.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, Kk.x)({
              except: /^\s*{/
            }),
            JSXElement(kk) {
              let Fk = /^\s*<\//.test(kk.textAfter);
              return kk.lineIndent(kk.node.from) + (Fk ? 0 : kk.unit)
            },
            JSXEscape(kk) {
              let Fk = /\s*\}/.test(kk.textAfter);
              return kk.lineIndent(kk.node.from) + (Fk ? 0 : kk.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": kk => kk.column(kk.node.from) + kk.unit
          }), Kk.R.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": Kk.M,
            BlockComment: kk => ({
              from: kk.from + 2,
              to: kk.to - 2
            }),
            JSXElement(kk) {
              let Fk = kk.firstChild;
              if (!Fk || "JSXSelfClosingTag" == Fk.name) return null;
              let Bk = kk.lastChild;
              return {
                from: Fk.to,
                to: Bk.type.isError ? kk.to : Bk.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(kk) {
              var Fk;
              let Bk = null === (Fk = kk.firstChild) || void 0 === Fk ? void 0 : Fk.nextSibling,
                Rk = kk.lastChild;
              return !Bk || Bk.type.isError ? null : {
                from: Bk.to,
                to: Rk.type.isError ? kk.to : Rk.from
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
      dF = {
        test: kk => /^JSX/.test(kk.name),
        facet: (0, Kk.D)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      sF = wF.configure({
        dialect: "ts"
      }, "typescript"),
      VF = wF.configure({
        dialect: "jsx",
        props: [Kk.kb.add((kk => kk.isTop ? [dF] : void 0))]
      }),
      JF = wF.configure({
        dialect: "jsx ts",
        props: [Kk.kb.add((kk => kk.isTop ? [dF] : void 0))]
      }, "typescript");
    let AF = kk => ({
      label: kk,
      type: "keyword"
    });
    const eF = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(AF),
      yF = eF.concat(["declare", "implements", "private", "protected", "public"].map(AF));

    function fF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Fk = kk.jsx ? kk.typescript ? JF : VF : kk.typescript ? sF : wF,
        Bk = kk.typescript ? Ik.concat(yF) : nk.concat(eF);
      return new Kk.p(Fk, [wF.data.of({
        autocomplete: (0, lk.o)(XF, (0, lk.m)(Bk))
      }), wF.data.of({
        autocomplete: bF
      }), kk.jsx ? vF : []])
    }

    function mF(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk.length;
      for (let Rk = null === Fk || void 0 === Fk ? void 0 : Fk.firstChild; Rk; Rk = Rk.nextSibling)
        if ("JSXIdentifier" == Rk.name || "JSXBuiltin" == Rk.name || "JSXNamespacedName" == Rk.name || "JSXMemberExpression" == Rk.name) return kk.sliceString(Rk.from, Math.min(Rk.to, Bk));
      return ""
    }
    const WF = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      vF = jk.l.inputHandler.of(((kk, Fk, Bk, Rk, tk) => {
        if ((WF ? kk.composing : kk.compositionStarted) || kk.state.readOnly || Fk != Bk || ">" != Rk && "/" != Rk || !wF.isActiveAt(kk.state, Fk, -1)) return !1;
        let ak = tk(),
          {
            state: Xk
          } = ak,
          bk = Xk.changeByRange((kk => {
            var Fk;
            let Bk, {
                head: tk
              } = kk,
              ak = (0, Kk.rb)(Xk).resolveInner(tk - 1, -1);
            if ("JSXStartTag" == ak.name && (ak = ak.parent), Xk.doc.sliceString(tk - 1, tk) != Rk || "JSXAttributeValue" == ak.name && ak.to > tk);
            else {
              if (">" == Rk && "JSXFragmentTag" == ak.name) return {
                range: kk,
                changes: {
                  from: tk,
                  insert: "</>"
                }
              };
              if ("/" == Rk && "JSXStartCloseTag" == ak.name) {
                let kk = ak.parent,
                  Rk = kk.parent;
                if (Rk && kk.from == tk - 2 && ((Bk = mF(Xk.doc, Rk.firstChild, tk)) || "JSXFragmentTag" == (null === (Fk = Rk.firstChild) || void 0 === Fk ? void 0 : Fk.name))) {
                  let kk = `${Bk}>`;
                  return {
                    range: xk.f.cursor(tk + kk.length, -1),
                    changes: {
                      from: tk,
                      insert: kk
                    }
                  }
                }
              } else if (">" == Rk) {
                let Fk = function(kk) {
                  for (;;) {
                    if ("JSXOpenTag" == kk.name || "JSXSelfClosingTag" == kk.name || "JSXFragmentTag" == kk.name) return kk;
                    if ("JSXEscape" == kk.name || !kk.parent) return null;
                    kk = kk.parent
                  }
                }(ak);
                if (Fk && "JSXOpenTag" == Fk.name && !/^\/?>|^<\//.test(Xk.doc.sliceString(tk, tk + 2)) && (Bk = mF(Xk.doc, Fk, tk))) return {
                  range: kk,
                  changes: {
                    from: tk,
                    insert: `</${Bk}>`
                  }
                }
              }
            }
            return {
              range: kk
            }
          }));
        return !bk.changes.empty && (kk.dispatch([ak, Xk.update(bk, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40759: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => HF,
      D: () => sk,
      E: () => qk,
      I: () => Zk,
      L: () => vF,
      M: () => nk,
      O: () => sF,
      R: () => lk,
      V: () => mk,
      W: () => gk,
      Z: () => ck,
      bb: () => Tk,
      cb: () => xk,
      e: () => YF,
      eb: () => Uk,
      fb: () => Mk,
      hb: () => CF,
      i: () => Gk,
      kb: () => Vk,
      l: () => ek,
      mb: () => EF,
      nb: () => fk,
      p: () => Hk,
      rb: () => yk,
      t: () => zF,
      x: () => pk
    });
    var Rk, tk = Bk(40762),
      ak = Bk(40741),
      Xk = Bk(40748),
      bk = Bk(40765),
      wk = Bk(40750);
    const dk = new tk.g;

    function sk(kk) {
      return ak.i.define({
        combine: kk ? Fk => Fk.concat(kk) : void 0
      })
    }
    const Vk = new tk.g;
    class Jk {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = kk, this.name = Rk, ak.h.prototype.hasOwnProperty("tree") || Object.defineProperty(ak.h.prototype, "tree", {
          get() {
            return yk(this)
          }
        }), this.parser = Fk, this.extension = [Nk.of(this), ak.h.languageData.of(((kk, Fk, Bk) => {
          let Rk = Ak(kk, Fk, Bk),
            tk = Rk.type.prop(dk);
          if (!tk) return [];
          let ak = kk.facet(tk),
            Xk = Rk.type.prop(Vk);
          if (Xk) {
            let tk = Rk.resolve(Fk - Rk.from, Bk);
            for (let Fk of Xk)
              if (Fk.test(tk, kk)) {
                let Bk = kk.facet(Fk.facet);
                return "replace" == Fk.type ? Bk : Bk.concat(ak)
              }
          }
          return ak
        }))].concat(Bk)
      }
      isActiveAt(kk, Fk) {
        return Ak(kk, Fk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(dk) == this.data
      }
      findRegions(kk) {
        let Fk = kk.facet(Nk);
        if ((null === Fk || void 0 === Fk ? void 0 : Fk.data) == this.data) return [{
          from: 0,
          to: kk.doc.length
        }];
        if (!Fk || !Fk.allowsNesting) return [];
        let Bk = [],
          Rk = (kk, Fk) => {
            if (kk.prop(dk) == this.data) return void Bk.push({
              from: Fk,
              to: Fk + kk.length
            });
            let ak = kk.prop(tk.g.mounted);
            if (ak) {
              if (ak.tree.prop(dk) == this.data) {
                if (ak.overlay)
                  for (let kk of ak.overlay) Bk.push({
                    from: kk.from + Fk,
                    to: kk.to + Fk
                  });
                else Bk.push({
                  from: Fk,
                  to: Fk + kk.length
                });
                return
              }
              if (ak.overlay) {
                let kk = Bk.length;
                if (Rk(ak.tree, ak.overlay[0].from + Fk), Bk.length > kk) return
              }
            }
            for (let Bk = 0; Bk < kk.children.length; Bk++) {
              let ak = kk.children[Bk];
              ak instanceof tk.w && Rk(ak, kk.positions[Bk] + Fk)
            }
          };
        return Rk(yk(kk), 0), Bk
      }
      get allowsNesting() {
        return !0
      }
    }

    function Ak(kk, Fk, Bk) {
      let Rk = kk.facet(Nk),
        ak = yk(kk).topNode;
      if (!Rk || Rk.allowsNesting)
        for (let Xk = ak; Xk; Xk = Xk.enter(Fk, Bk, tk.c.ExcludeBuffers | tk.c.EnterBracketed)) Xk.type.isTop && (ak = Xk);
      return ak
    }
    Jk.setState = ak.z.define();
    class ek extends Jk {
      constructor(kk, Fk, Bk) {
        super(kk, Fk, [], Bk), this.parser = Fk
      }
      static define(kk) {
        let Fk = sk(kk.languageData);
        return new ek(Fk, kk.parser.configure({
          props: [dk.add((kk => kk.isTop ? Fk : void 0))]
        }), kk.name)
      }
      configure(kk, Fk) {
        return new ek(this.data, this.parser.configure(kk), Fk || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function yk(kk) {
      let Fk = kk.field(Jk.state, !1);
      return Fk ? Fk.tree : tk.w.empty
    }

    function fk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.doc.length;
      var Bk;
      return (null === (Bk = kk.field(Jk.state, !1)) || void 0 === Bk ? void 0 : Bk.context.isDone(Fk)) || !1
    }

    function mk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.viewport.to,
        Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Rk = function(kk, Fk) {
          let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Rk;
          let tk = null === (Rk = kk.field(Jk.state, !1)) || void 0 === Rk ? void 0 : Rk.context;
          if (!tk) return null;
          let ak = tk.viewport;
          tk.updateViewport({
            from: 0,
            to: Fk
          });
          let Xk = tk.isDone(Fk) || tk.work(Bk, Fk) ? tk.tree : null;
          return tk.updateViewport(ak), Xk
        }(kk.state, Fk, Bk);
      return Rk != yk(kk.state) && kk.dispatch({}), !!Rk
    }
    class Wk {
      constructor(kk) {
        this.doc = kk, this.cursorPos = 0, this.string = "", this.cursor = kk.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(kk) {
        return this.string = this.cursor.next(kk - this.cursorPos).value, this.cursorPos = kk + this.string.length, this.cursorPos - this.string.length
      }
      chunk(kk) {
        return this.syncTo(kk), this.string
      }
      get lineChunks() {
        return !0
      }
      read(kk, Fk) {
        let Bk = this.cursorPos - this.string.length;
        return kk < Bk || Fk >= this.cursorPos ? this.doc.sliceString(kk, Fk) : this.string.slice(kk - Bk, Fk - Bk)
      }
    }
    let vk = null;
    class ik {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Rk = arguments.length > 3 ? arguments[3] : void 0,
          tk = arguments.length > 4 ? arguments[4] : void 0,
          ak = arguments.length > 5 ? arguments[5] : void 0,
          Xk = arguments.length > 6 ? arguments[6] : void 0,
          bk = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = kk, this.state = Fk, this.fragments = Bk, this.tree = Rk, this.treeLen = tk, this.viewport = ak, this.skipped = Xk, this.scheduleOn = bk, this.parse = null, this.tempSkipped = []
      }
      static create(kk, Fk, Bk) {
        return new ik(kk, Fk, [], tk.w.empty, 0, Bk, [], null)
      }
      startParse() {
        return this.parser.startParse(new Wk(this.state.doc), this.fragments)
      }
      work(kk, Fk) {
        return null != Fk && Fk >= this.state.doc.length && (Fk = void 0), this.tree != tk.w.empty && this.isDone(null !== Fk && void 0 !== Fk ? Fk : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var Bk;
          if ("number" == typeof kk) {
            let Fk = Date.now() + kk;
            kk = () => Date.now() > Fk
          }
          for (this.parse || (this.parse = this.startParse()), null != Fk && (null == this.parse.stoppedAt || this.parse.stoppedAt > Fk) && Fk < this.state.doc.length && this.parse.stopAt(Fk);;) {
            let Rk = this.parse.advance();
            if (Rk) {
              if (this.fragments = this.withoutTempSkipped(tk.t.addTree(Rk, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (Bk = this.parse.stoppedAt) && void 0 !== Bk ? Bk : this.state.doc.length, this.tree = Rk, this.parse = null, !(this.treeLen < (null !== Fk && void 0 !== Fk ? Fk : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (kk()) return !1
          }
        }))
      }
      takeTree() {
        let kk, Fk;
        this.parse && (kk = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > kk) && this.parse.stopAt(kk), this.withContext((() => {
          for (; !(Fk = this.parse.advance()););
        })), this.treeLen = kk, this.tree = Fk, this.fragments = this.withoutTempSkipped(tk.t.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(kk) {
        let Fk = vk;
        vk = this;
        try {
          return kk()
        } finally {
          vk = Fk
        }
      }
      withoutTempSkipped(kk) {
        for (let Fk; Fk = this.tempSkipped.pop();) kk = Yk(kk, Fk.from, Fk.to);
        return kk
      }
      changes(kk, Fk) {
        let {
          fragments: Bk,
          tree: Rk,
          treeLen: ak,
          viewport: Xk,
          skipped: bk
        } = this;
        if (this.takeTree(), !kk.empty) {
          let Fk = [];
          if (kk.iterChangedRanges(((kk, Bk, Rk, tk) => Fk.push({
              fromA: kk,
              toA: Bk,
              fromB: Rk,
              toB: tk
            }))), Bk = tk.t.applyChanges(Bk, Fk), Rk = tk.w.empty, ak = 0, Xk = {
              from: kk.mapPos(Xk.from, -1),
              to: kk.mapPos(Xk.to, 1)
            }, this.skipped.length) {
            bk = [];
            for (let Fk of this.skipped) {
              let Bk = kk.mapPos(Fk.from, 1),
                Rk = kk.mapPos(Fk.to, -1);
              Bk < Rk && bk.push({
                from: Bk,
                to: Rk
              })
            }
          }
        }
        return new ik(this.parser, Fk, Bk, Rk, ak, Xk, bk, this.scheduleOn)
      }
      updateViewport(kk) {
        if (this.viewport.from == kk.from && this.viewport.to == kk.to) return !1;
        this.viewport = kk;
        let Fk = this.skipped.length;
        for (let Bk = 0; Bk < this.skipped.length; Bk++) {
          let {
            from: Fk,
            to: Rk
          } = this.skipped[Bk];
          Fk < kk.to && Rk > kk.from && (this.fragments = Yk(this.fragments, Fk, Rk), this.skipped.splice(Bk--, 1))
        }
        return !(this.skipped.length >= Fk) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(kk, Fk) {
        this.skipped.push({
          from: kk,
          to: Fk
        })
      }
      static getSkippingParser(kk) {
        return new class extends tk.p {
          createParse(Fk, Bk, Rk) {
            let ak = Rk[0].from,
              Xk = Rk[Rk.length - 1].to;
            return {
              parsedPos: ak,
              advance() {
                let Fk = vk;
                if (Fk) {
                  for (let kk of Rk) Fk.tempSkipped.push(kk);
                  kk && (Fk.scheduleOn = Fk.scheduleOn ? Promise.all([Fk.scheduleOn, kk]) : kk)
                }
                return this.parsedPos = Xk, new tk.w(tk.l.none, [], [], Xk - ak)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(kk) {
        kk = Math.min(kk, this.state.doc.length);
        let Fk = this.fragments;
        return this.treeLen >= kk && Fk.length && 0 == Fk[0].from && Fk[0].to >= kk
      }
      static get() {
        return vk
      }
    }

    function Yk(kk, Fk, Bk) {
      return tk.t.applyChanges(kk, [{
        fromA: Fk,
        toA: Bk,
        fromB: Fk,
        toB: Bk
      }])
    }
    class Lk {
      constructor(kk) {
        this.context = kk, this.tree = kk.tree
      }
      apply(kk) {
        if (!kk.docChanged && this.tree == this.context.tree) return this;
        let Fk = this.context.changes(kk.changes, kk.state),
          Bk = this.context.treeLen == kk.startState.doc.length ? void 0 : Math.max(kk.changes.mapPos(this.context.treeLen), Fk.viewport.to);
        return Fk.work(20, Bk) || Fk.takeTree(), new Lk(Fk)
      }
      static init(kk) {
        let Fk = Math.min(3e3, kk.doc.length),
          Bk = ik.create(kk.facet(Nk).parser, kk, {
            from: 0,
            to: Fk
          });
        return Bk.work(20, Fk) || Bk.takeTree(), new Lk(Bk)
      }
    }
    Jk.state = ak.A.define({
      create: Lk.init,
      update(kk, Fk) {
        for (let Bk of Fk.effects)
          if (Bk.is(Jk.setState)) return Bk.value;
        return Fk.startState.facet(Nk) != Fk.state.facet(Nk) ? Lk.init(Fk.state) : kk.apply(Fk)
      }
    });
    let Ok = kk => {
      let Fk = setTimeout((() => kk()), 500);
      return () => clearTimeout(Fk)
    };
    "undefined" != typeof requestIdleCallback && (Ok = kk => {
      let Fk = -1,
        Bk = setTimeout((() => {
          Fk = requestIdleCallback(kk, {
            timeout: 400
          })
        }), 100);
      return () => Fk < 0 ? clearTimeout(Bk) : cancelIdleCallback(Fk)
    });
    const Ek = "undefined" != typeof navigator && (null === (Rk = navigator.scheduling) || void 0 === Rk ? void 0 : Rk.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      Sk = Xk.q.fromClass(class {
        constructor(kk) {
          this.view = kk, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(kk) {
          let Fk = this.view.state.field(Jk.state).context;
          (Fk.updateViewport(kk.view.viewport) || this.view.viewport.to > Fk.treeLen) && this.scheduleWork(), (kk.docChanged || kk.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(Fk)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: kk
          } = this.view, Fk = kk.field(Jk.state);
          Fk.tree == Fk.context.tree && Fk.context.isDone(kk.doc.length) || (this.working = Ok(this.work))
        }
        work(kk) {
          this.working = null;
          let Fk = Date.now();
          if (this.chunkEnd < Fk && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = Fk + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: Bk,
            viewport: {
              to: Rk
            }
          } = this.view, tk = Bk.field(Jk.state);
          if (tk.tree == tk.context.tree && tk.context.isDone(Rk + 1e5)) return;
          let ak = Date.now() + Math.min(this.chunkBudget, 100, kk && !Ek ? Math.max(25, kk.timeRemaining() - 5) : 1e9),
            Xk = tk.context.treeLen < Rk && Bk.doc.length > Rk + 1e3,
            bk = tk.context.work((() => Ek && Ek() || Date.now() > ak), Rk + (Xk ? 0 : 1e5));
          this.chunkBudget -= Date.now() - Fk, (bk || this.chunkBudget <= 0) && (tk.context.takeTree(), this.view.dispatch({
            effects: Jk.setState.of(new Lk(tk.context))
          })), this.chunkBudget > 0 && (!bk || Xk) && this.scheduleWork(), this.checkAsyncSchedule(tk.context)
        }
        checkAsyncSchedule(kk) {
          kk.scheduleOn && (this.workScheduled++, kk.scheduleOn.then((() => this.scheduleWork())).catch((kk => (0, Xk._)(this.view.state, kk))).then((() => this.workScheduled--)), kk.scheduleOn = null)
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
      Nk = ak.i.define({
        combine: kk => kk.length ? kk[0] : null,
        enables: kk => [Jk.state, Sk, Xk.l.contentAttributes.compute([kk], (Fk => {
          let Bk = Fk.facet(kk);
          return Bk && Bk.name ? {
            "data-language": Bk.name
          } : {}
        }))]
      });
    class Hk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = kk, this.support = Fk, this.extension = [kk, Fk]
      }
    }
    const uk = ak.i.define(),
      Mk = ak.i.define({
        combine: kk => {
          if (!kk.length) return "  ";
          let Fk = kk[0];
          if (!Fk || /\S/.test(Fk) || Array.from(Fk).some((kk => kk != Fk[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(kk[0]));
          return Fk
        }
      });

    function gk(kk) {
      let Fk = kk.facet(Mk);
      return 9 == Fk.charCodeAt(0) ? kk.tabSize * Fk.length : Fk.length
    }

    function Uk(kk, Fk) {
      let Bk = "",
        Rk = kk.tabSize,
        tk = kk.facet(Mk)[0];
      if ("\t" == tk) {
        for (; Fk >= Rk;) Bk += "\t", Fk -= Rk;
        tk = " "
      }
      for (let ak = 0; ak < Fk; ak++) Bk += tk;
      return Bk
    }

    function ck(kk, Fk) {
      kk instanceof ak.h && (kk = new Gk(kk));
      for (let Rk of kk.state.facet(uk)) {
        let Bk = Rk(kk, Fk);
        if (void 0 !== Bk) return Bk
      }
      let Bk = yk(kk.state);
      return Bk.length >= Fk ? function(kk, Fk, Bk) {
        let Rk = Fk.resolveStack(Bk),
          tk = Fk.resolveInner(Bk, -1).resolve(Bk, 0).enterUnfinishedNodesBefore(Bk);
        if (tk != Rk.node) {
          let kk = [];
          for (let Fk = tk; Fk && !(Fk.from < Rk.node.from || Fk.to > Rk.node.to || Fk.from == Rk.node.from && Fk.type == Rk.node.type); Fk = Fk.parent) kk.push(Fk);
          for (let Fk = kk.length - 1; Fk >= 0; Fk--) Rk = {
            node: kk[Fk],
            next: Rk
          }
        }
        return rk(Rk, kk, Bk)
      }(kk, Bk, Fk) : null
    }
    class Gk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = kk, this.options = Fk, this.unit = gk(kk)
      }
      lineAt(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Bk = this.state.doc.lineAt(kk),
          {
            simulateBreak: Rk,
            simulateDoubleBreak: tk
          } = this.options;
        return null != Rk && Rk >= Bk.from && Rk <= Bk.to ? tk && Rk == kk ? {
          text: "",
          from: kk
        } : (Fk < 0 ? Rk < kk : Rk <= kk) ? {
          text: Bk.text.slice(Rk - Bk.from),
          from: Rk
        } : {
          text: Bk.text.slice(0, Rk - Bk.from),
          from: Bk.from
        } : Bk
      }
      textAfterPos(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && kk == this.options.simulateBreak) return "";
        let {
          text: Bk,
          from: Rk
        } = this.lineAt(kk, Fk);
        return Bk.slice(kk - Rk, Math.min(Bk.length, kk + 100 - Rk))
      }
      column(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Bk,
            from: Rk
          } = this.lineAt(kk, Fk),
          tk = this.countColumn(Bk, kk - Rk),
          ak = this.options.overrideIndentation ? this.options.overrideIndentation(Rk) : -1;
        return ak > -1 && (tk += ak - this.countColumn(Bk, Bk.search(/\S|$/))), tk
      }
      countColumn(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.length;
        return (0, ak.M)(kk, this.state.tabSize, Fk)
      }
      lineIndent(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Bk,
            from: Rk
          } = this.lineAt(kk, Fk),
          tk = this.options.overrideIndentation;
        if (tk) {
          let kk = tk(Rk);
          if (kk > -1) return kk
        }
        return this.countColumn(Bk, Bk.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const Tk = new tk.g;

    function rk(kk, Fk, Bk) {
      for (let Rk = kk; Rk; Rk = Rk.next) {
        let kk = Dk(Rk.node);
        if (kk) return kk(Pk.create(Fk, Bk, Rk))
      }
      return 0
    }

    function Dk(kk) {
      let Fk = kk.type.prop(Tk);
      if (Fk) return Fk;
      let Bk, Rk = kk.firstChild;
      if (Rk && (Bk = Rk.type.prop(tk.g.closedBy))) {
        let Fk = kk.lastChild,
          Rk = Fk && Bk.indexOf(Fk.name) > -1;
        return kk => Ck(kk, !0, 1, void 0, Rk && ! function(kk) {
          return kk.pos == kk.options.simulateBreak && kk.options.simulateDoubleBreak
        }(kk) ? Fk.from : void 0)
      }
      return null == kk.parent ? zk : null
    }

    function zk() {
      return 0
    }
    class Pk extends Gk {
      constructor(kk, Fk, Bk) {
        super(kk.state, kk.options), this.base = kk, this.pos = Fk, this.context = Bk
      }
      get node() {
        return this.context.node
      }
      static create(kk, Fk, Bk) {
        return new Pk(kk, Fk, Bk)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(kk) {
        let Fk = this.state.doc.lineAt(kk.from);
        for (;;) {
          let Bk = kk.resolve(Fk.from);
          for (; Bk.parent && Bk.parent.from == Bk.from;) Bk = Bk.parent;
          if (hk(Bk, kk)) break;
          Fk = this.state.doc.lineAt(Bk.from)
        }
        return this.lineIndent(Fk.from)
      }
      continue () {
        return rk(this.context.next, this.base, this.pos)
      }
    }

    function hk(kk, Fk) {
      for (let Bk = Fk; Bk; Bk = Bk.parent)
        if (kk == Bk) return !0;
      return !1
    }

    function qk(kk) {
      let {
        closing: Fk,
        align: Bk = !0,
        units: Rk = 1
      } = kk;
      return kk => Ck(kk, Bk, Rk, Fk)
    }

    function Ck(kk, Fk, Bk, Rk, tk) {
      let ak = kk.textAfter,
        Xk = ak.match(/^\s*/)[0].length,
        bk = Rk && ak.slice(Xk, Xk + Rk.length) == Rk || tk == kk.pos + Xk,
        wk = Fk ? function(kk) {
          let Fk = kk.node,
            Bk = Fk.childAfter(Fk.from),
            Rk = Fk.lastChild;
          if (!Bk) return null;
          let tk = kk.options.simulateBreak,
            ak = kk.state.doc.lineAt(Bk.from),
            Xk = null == tk || tk <= ak.from ? ak.to : Math.min(ak.to, tk);
          for (let bk = Bk.to;;) {
            let kk = Fk.childAfter(bk);
            if (!kk || kk == Rk) return null;
            if (!kk.type.isSkipped) {
              if (kk.from >= Xk) return null;
              let Fk = /^ */.exec(ak.text.slice(Bk.to - ak.from))[0].length;
              return {
                from: Bk.from,
                to: Bk.to + Fk
              }
            }
            bk = kk.to
          }
        }(kk) : null;
      return wk ? bk ? kk.column(wk.from) : kk.column(wk.to) : kk.baseIndent + (bk ? 0 : kk.unit * Bk)
    }
    const Zk = kk => kk.baseIndent;

    function pk() {
      let {
        except: kk,
        units: Fk = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Bk => {
        let Rk = kk && kk.test(Bk.textAfter);
        return Bk.baseIndent + (Rk ? 0 : Fk * Bk.unit)
      }
    }
    const Kk = 200;

    function xk() {
      return ak.h.transactionFilter.of((kk => {
        if (!kk.docChanged || !kk.isUserEvent("input.type") && !kk.isUserEvent("input.complete")) return kk;
        let Fk = kk.startState.languageDataAt("indentOnInput", kk.startState.selection.main.head);
        if (!Fk.length) return kk;
        let Bk = kk.newDoc,
          {
            head: Rk
          } = kk.newSelection.main,
          tk = Bk.lineAt(Rk);
        if (Rk > tk.from + Kk) return kk;
        let ak = Bk.sliceString(tk.from, Rk);
        if (!Fk.some((kk => kk.test(ak)))) return kk;
        let {
          state: Xk
        } = kk, bk = -1, wk = [];
        for (let {
            head: dk
          }
          of Xk.selection.hb) {
          let kk = Xk.doc.lineAt(dk);
          if (kk.from == bk) continue;
          bk = kk.from;
          let Fk = ck(Xk, kk.from);
          if (null == Fk) continue;
          let Bk = /^\s*/.exec(kk.text)[0],
            Rk = Uk(Xk, Fk);
          Bk != Rk && wk.push({
            from: kk.from,
            to: kk.from + Bk.length,
            insert: Rk
          })
        }
        return wk.length ? [kk, {
          changes: wk,
          sequential: !0
        }] : kk
      }))
    }
    const jk = ak.i.define(),
      lk = new tk.g;

    function nk(kk) {
      let Fk = kk.firstChild,
        Bk = kk.lastChild;
      return Fk && Fk.to < Bk.from ? {
        from: Fk.to,
        to: Bk.type.isError ? kk.to : Bk.from
      } : null
    }

    function Ik(kk) {
      let Fk = kk.lastChild;
      return Fk && Fk.to == kk.to && Fk.type.isError
    }

    function Qk(kk, Fk, Bk) {
      for (let Rk of kk.facet(jk)) {
        let tk = Rk(kk, Fk, Bk);
        if (tk) return tk
      }
      return function(kk, Fk, Bk) {
        let Rk = yk(kk);
        if (Rk.length < Bk) return null;
        let tk = null;
        for (let ak = Rk.resolveStack(Bk, 1); ak; ak = ak.next) {
          let Xk = ak.node;
          if (Xk.to <= Bk || Xk.from > Bk) continue;
          if (tk && Xk.from < Fk) break;
          let bk = Xk.type.prop(lk);
          if (bk && (Xk.to < Rk.length - 50 || Rk.length == kk.doc.length || !Ik(Xk))) {
            let Rk = bk(Xk, kk);
            Rk && Rk.from <= Bk && Rk.from >= Fk && Rk.to > Bk && (tk = Rk)
          }
        }
        return tk
      }(kk, Fk, Bk)
    }

    function kF(kk, Fk) {
      let Bk = Fk.mapPos(kk.from, 1),
        Rk = Fk.mapPos(kk.to, -1);
      return Bk >= Rk ? void 0 : {
        from: Bk,
        to: Rk
      }
    }
    const FF = ak.z.define({
        map: kF
      }),
      BF = ak.z.define({
        map: kF
      });

    function RF(kk) {
      let Fk = [];
      for (let {
          head: Bk
        }
        of kk.state.selection.hb) Fk.some((kk => kk.from <= Bk && kk.to >= Bk)) || Fk.push(kk.lineBlockAt(Bk));
      return Fk
    }
    const tF = ak.A.define({
      create: () => Xk.d.none,
      update(kk, Fk) {
        Fk.isUserEvent("delete") && Fk.changes.iterChangedRanges(((Fk, Bk) => kk = aF(kk, Fk, Bk))), kk = kk.map(Fk.changes);
        for (let Bk of Fk.effects)
          if (Bk.is(FF) && !bF(kk, Bk.value.from, Bk.value.to)) {
            let {
              preparePlaceholder: Rk
            } = Fk.state.facet(JF), tk = Rk ? Xk.d.replace({
              widget: new fF(Rk(Fk.state, Bk.value))
            }) : yF;
            kk = kk.update({
              add: [tk.range(Bk.value.from, Bk.value.to)]
            })
          } else Bk.is(BF) && (kk = kk.update({
            filter: (kk, Fk) => Bk.value.from != kk || Bk.value.to != Fk,
            filterFrom: Bk.value.from,
            filterTo: Bk.value.to
          }));
        return Fk.selection && (kk = aF(kk, Fk.selection.main.head)), kk
      },
      provide: kk => Xk.l.uR.from(kk),
      toJSON(kk, Fk) {
        let Bk = [];
        return kk.between(0, Fk.doc.length, ((kk, Fk) => {
          Bk.push(kk, Fk)
        })), Bk
      },
      fromJSON(kk) {
        if (!Array.isArray(kk) || kk.length % 2) throw new RangeError("Invalid JSON for fold state");
        let Fk = [];
        for (let Bk = 0; Bk < kk.length;) {
          let Rk = kk[Bk++],
            tk = kk[Bk++];
          if ("number" != typeof Rk || "number" != typeof tk) throw new RangeError("Invalid JSON for fold state");
          Fk.push(yF.range(Rk, tk))
        }
        return Xk.d.set(Fk, !0)
      }
    });

    function aF(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fk,
        Rk = !1;
      return kk.between(Fk, Bk, ((kk, tk) => {
        kk < Bk && tk > Fk && (Rk = !0)
      })), Rk ? kk.update({
        filterFrom: Fk,
        filterTo: Bk,
        filter: (kk, Rk) => kk >= Bk || Rk <= Fk
      }) : kk
    }

    function XF(kk, Fk, Bk) {
      var Rk;
      let tk = null;
      return null === (Rk = kk.field(tF, !1)) || void 0 === Rk || Rk.between(Fk, Bk, ((kk, Fk) => {
        (!tk || tk.from > kk) && (tk = {
          from: kk,
          to: Fk
        })
      })), tk
    }

    function bF(kk, Fk, Bk) {
      let Rk = !1;
      return kk.between(Fk, Fk, ((kk, tk) => {
        kk == Fk && tk == Bk && (Rk = !0)
      })), Rk
    }

    function wF(kk, Fk) {
      return kk.field(tF, !1) ? Fk : Fk.concat(ak.z.appendConfig.of(AF()))
    }

    function dF(kk, Fk) {
      let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Rk = kk.state.doc.lineAt(Fk.from).number,
        tk = kk.state.doc.lineAt(Fk.to).number;
      return Xk.l.announce.of(`${kk.state.phrase(Bk?"Folded lines":"Unfolded lines")} ${Rk} ${kk.state.phrase("to")} ${tk}.`)
    }
    const sF = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: kk => {
          for (let Fk of RF(kk)) {
            let Bk = Qk(kk.state, Fk.from, Fk.to);
            if (Bk) return kk.dispatch({
              effects: wF(kk.state, [FF.of(Bk), dF(kk, Bk)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: kk => {
          if (!kk.state.field(tF, !1)) return !1;
          let Fk = [];
          for (let Bk of RF(kk)) {
            let Rk = XF(kk.state, Bk.from, Bk.to);
            Rk && Fk.push(BF.of(Rk), dF(kk, Rk, !1))
          }
          return Fk.length && kk.dispatch({
            effects: Fk
          }), Fk.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: kk => {
          let {
            state: Fk
          } = kk, Bk = [];
          for (let Rk = 0; Rk < Fk.doc.length;) {
            let tk = kk.lineBlockAt(Rk),
              ak = Qk(Fk, tk.from, tk.to);
            ak && Bk.push(FF.of(ak)), Rk = (ak ? kk.lineBlockAt(ak.to) : tk).to + 1
          }
          return Bk.length && kk.dispatch({
            effects: wF(kk.state, Bk)
          }), !!Bk.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: kk => {
          let Fk = kk.state.field(tF, !1);
          if (!Fk || !Fk.size) return !1;
          let Bk = [];
          return Fk.between(0, kk.state.doc.length, ((kk, Fk) => {
            Bk.push(BF.of({
              from: kk,
              to: Fk
            }))
          })), kk.dispatch({
            effects: Bk
          }), !0
        }
      }],
      VF = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      JF = ak.i.define({
        combine: kk => (0, ak.K)(kk, VF)
      });

    function AF(kk) {
      let Fk = [tF, iF];
      return kk && Fk.push(JF.of(kk)), Fk
    }

    function eF(kk, Fk) {
      let {
        state: Bk
      } = kk, Rk = Bk.facet(JF), tk = Fk => {
        let Bk = kk.lineBlockAt(kk.posAtDOM(Fk.target)),
          Rk = XF(kk.state, Bk.from, Bk.to);
        Rk && kk.dispatch({
          effects: BF.of(Rk)
        }), Fk.preventDefault()
      };
      if (Rk.placeholderDOM) return Rk.placeholderDOM(kk, tk, Fk);
      let ak = document.createElement("span");
      return ak.textContent = Rk.placeholderText, ak.setAttribute("aria-label", Bk.phrase("folded code")), ak.title = Bk.phrase("unfold"), ak.className = "cm-foldPlaceholder", ak.onclick = tk, ak
    }
    const yF = Xk.d.replace({
      widget: new class extends Xk.u {
        toDOM(kk) {
          return eF(kk, null)
        }
      }
    });
    class fF extends Xk.u {
      constructor(kk) {
        super(), this.value = kk
      }
      eq(kk) {
        return this.value == kk.value
      }
      toDOM(kk) {
        return eF(kk, this.value)
      }
    }
    const mF = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class WF extends Xk.o {
      constructor(kk, Fk) {
        super(), this.config = kk, this.open = Fk
      }
      eq(kk) {
        return this.config == kk.config && this.open == kk.open
      }
      toDOM(kk) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let Fk = document.createElement("span");
        return Fk.textContent = this.open ? this.config.openText : this.config.closedText, Fk.title = kk.state.phrase(this.open ? "Fold line" : "Unfold line"), Fk
      }
    }

    function vF() {
      let kk = {
          ...mF,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        Fk = new WF(kk, !0),
        Bk = new WF(kk, !1),
        Rk = Xk.q.fromClass(class {
          constructor(kk) {
            this.from = kk.viewport.from, this.markers = this.buildMarkers(kk)
          }
          update(Fk) {
            (Fk.docChanged || Fk.viewportChanged || Fk.startState.facet(Nk) != Fk.state.facet(Nk) || Fk.startState.field(tF, !1) != Fk.state.field(tF, !1) || yk(Fk.startState) != yk(Fk.state) || kk.foldingChanged(Fk)) && (this.markers = this.buildMarkers(Fk.view))
          }
          buildMarkers(kk) {
            let Rk = new ak.r;
            for (let tk of kk.viewportLineBlocks) {
              let ak = XF(kk.state, tk.from, tk.to) ? Bk : Qk(kk.state, tk.from, tk.to) ? Fk : null;
              ak && Rk.add(tk.from, tk.from, ak)
            }
            return Rk.finish()
          }
        }),
        {
          domEventHandlers: tk
        } = kk;
      return [Rk, (0, Xk.L)({
        class: "cm-foldGutter",
        markers(kk) {
          var Fk;
          return (null === (Fk = kk.plugin(Rk)) || void 0 === Fk ? void 0 : Fk.markers) || ak.u.empty
        },
        initialSpacer: () => new WF(kk, !1),
        domEventHandlers: {
          ...tk,
          click: (kk, Fk, Bk) => {
            if (tk.click && tk.click(kk, Fk, Bk)) return !0;
            let Rk = XF(kk.state, Fk.from, Fk.to);
            if (Rk) return kk.dispatch({
              effects: BF.of(Rk)
            }), !0;
            let ak = Qk(kk.state, Fk.from, Fk.to);
            return !!ak && (kk.dispatch({
              effects: FF.of(ak)
            }), !0)
          }
        }
      }), AF()]
    }
    const iF = Xk.l.baseTheme({
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
    class YF {
      constructor(kk, Fk) {
        let Bk;

        function Rk(kk) {
          let Fk = wk.d.newName();
          return (Bk || (Bk = Object.create(null)))["." + Fk] = kk, Fk
        }
        this.specs = kk;
        const tk = "string" == typeof Fk.all ? Fk.all : Fk.all ? Rk(Fk.all) : void 0,
          ak = Fk.scope;
        this.scope = ak instanceof Jk ? kk => kk.prop(dk) == ak.data : ak ? kk => kk == ak : void 0, this.style = (0, bk.k)(kk.map((kk => ({
          tag: kk.tag,
          class: kk.class || Rk(Object.assign({}, kk, {
            tag: null
          }))
        }))), {
          all: tk
        }).style, this.module = Bk ? new wk.d(Bk) : null, this.themeType = Fk.themeType
      }
      static define(kk, Fk) {
        return new YF(kk, Fk || {})
      }
    }
    const oF = ak.i.define(),
      LF = ak.i.define({
        combine: kk => kk.length ? [kk[0]] : null
      });

    function OF(kk) {
      let Fk = kk.facet(oF);
      return Fk.length ? Fk : kk.facet(LF)
    }

    function EF(kk, Fk) {
      let Bk, Rk = [NF];
      return kk instanceof YF && (kk.module && Rk.push(Xk.l.styleModule.of(kk.module)), Bk = kk.themeType), (null === Fk || void 0 === Fk ? void 0 : Fk.fallback) ? Rk.push(LF.of(kk)) : Bk ? Rk.push(oF.computeN([Xk.l.darkTheme], (Fk => Fk.facet(Xk.l.darkTheme) == ("dark" == Bk) ? [kk] : []))) : Rk.push(oF.of(kk)), Rk
    }
    class SF {
      constructor(kk) {
        this.markCache = Object.create(null), this.tree = yk(kk.state), this.uR = this.buildDeco(kk, OF(kk.state)), this.decoratedTo = kk.viewport.to
      }
      update(kk) {
        let Fk = yk(kk.state),
          Bk = OF(kk.state),
          Rk = Bk != OF(kk.startState),
          {
            viewport: tk
          } = kk.view,
          ak = kk.changes.mapPos(this.decoratedTo, 1);
        Fk.length < tk.to && !Rk && Fk.type == this.tree.type && ak >= tk.to ? (this.uR = this.uR.map(kk.changes), this.decoratedTo = ak) : (Fk != this.tree || kk.viewportChanged || Rk) && (this.tree = Fk, this.uR = this.buildDeco(kk.view, Bk), this.decoratedTo = tk.to)
      }
      buildDeco(kk, Fk) {
        if (!Fk || !this.tree.length) return Xk.d.none;
        let Bk = new ak.r;
        for (let {
            from: Rk,
            to: tk
          }
          of kk.q_)(0, bk.d)(this.tree, Fk, ((kk, Fk, Rk) => {
          Bk.add(kk, Fk, this.markCache[Rk] || (this.markCache[Rk] = Xk.d.mark({
            class: Rk
          })))
        }), Rk, tk);
        return Bk.finish()
      }
    }
    const NF = ak.o.high(Xk.q.fromClass(SF, {
        uR: kk => kk.uR
      })),
      HF = YF.define([{
        tag: bk.n.meta,
        color: "#404740"
      }, {
        tag: bk.n.link,
        textDecoration: "underline"
      }, {
        tag: bk.n.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: bk.n.emphasis,
        fontStyle: "italic"
      }, {
        tag: bk.n.strong,
        fontWeight: "bold"
      }, {
        tag: bk.n.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: bk.n.keyword,
        color: "#708"
      }, {
        tag: [bk.n.atom, bk.n.bool, bk.n.url, bk.n.contentSeparator, bk.n.labelName],
        color: "#219"
      }, {
        tag: [bk.n.literal, bk.n.inserted],
        color: "#164"
      }, {
        tag: [bk.n.string, bk.n.deleted],
        color: "#a11"
      }, {
        tag: [bk.n.regexp, bk.n.escape, bk.n.special(bk.n.string)],
        color: "#e40"
      }, {
        tag: bk.n.definition(bk.n.variableName),
        color: "#00f"
      }, {
        tag: bk.n.local(bk.n.variableName),
        color: "#30a"
      }, {
        tag: [bk.n.typeName, bk.n.namespace],
        color: "#085"
      }, {
        tag: bk.n.className,
        color: "#167"
      }, {
        tag: [bk.n.special(bk.n.variableName), bk.n.macroName],
        color: "#256"
      }, {
        tag: bk.n.definition(bk.n.propertyName),
        color: "#00c"
      }, {
        tag: bk.n.comment,
        color: "#940"
      }, {
        tag: bk.n.invalid,
        color: "#f00"
      }]),
      uF = Xk.l.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      MF = 1e4,
      gF = "()[]{}",
      UF = ak.i.define({
        combine: kk => (0, ak.K)(kk, {
          afterCursor: !0,
          brackets: gF,
          maxScanDistance: MF,
          renderMatch: TF
        })
      }),
      cF = Xk.d.mark({
        class: "cm-matchingBracket"
      }),
      GF = Xk.d.mark({
        class: "cm-nonmatchingBracket"
      });

    function TF(kk) {
      let Fk = [],
        Bk = kk.matched ? cF : GF;
      return Fk.push(Bk.range(kk.start.from, kk.start.to)), kk.end && Fk.push(Bk.range(kk.end.from, kk.end.to)), Fk
    }

    function rF(kk) {
      let Fk = [],
        Bk = kk.facet(UF);
      for (let Rk of kk.selection.hb) {
        if (!Rk.empty) continue;
        let tk = CF(kk, Rk.head, -1, Bk) || Rk.head > 0 && CF(kk, Rk.head - 1, 1, Bk) || Bk.afterCursor && (CF(kk, Rk.head, 1, Bk) || Rk.head < kk.doc.length && CF(kk, Rk.head + 1, -1, Bk));
        tk && (Fk = Fk.concat(Bk.renderMatch(tk, kk)))
      }
      return Xk.d.set(Fk, !0)
    }
    const DF = [Xk.q.fromClass(class {
      constructor(kk) {
        this.paused = !1, this.uR = rF(kk.state)
      }
      update(kk) {
        (kk.docChanged || kk.selectionSet || this.paused) && (kk.view.composing ? (this.uR = this.uR.map(kk.changes), this.paused = !0) : (this.uR = rF(kk.state), this.paused = !1))
      }
    }, {
      uR: kk => kk.uR
    }), uF];

    function zF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [UF.of(kk), DF]
    }
    const PF = new tk.g;

    function hF(kk, Fk, Bk) {
      let Rk = kk.prop(Fk < 0 ? tk.g.openedBy : tk.g.closedBy);
      if (Rk) return Rk;
      if (1 == kk.name.length) {
        let Rk = Bk.indexOf(kk.name);
        if (Rk > -1 && Rk % 2 == (Fk < 0 ? 1 : 0)) return [Bk[Rk + Fk]]
      }
      return null
    }

    function qF(kk) {
      let Fk = kk.type.prop(PF);
      return Fk ? Fk(kk.node) : kk
    }

    function CF(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        tk = Rk.maxScanDistance || MF,
        ak = Rk.brackets || gF,
        Xk = yk(kk),
        bk = Xk.resolveInner(Fk, Bk);
      for (let wk = bk; wk; wk = wk.parent) {
        let Rk = hF(wk.type, Bk, ak);
        if (Rk && wk.from < wk.to) {
          let tk = qF(wk);
          if (tk && (Bk > 0 ? Fk >= tk.from && Fk < tk.to : Fk > tk.from && Fk <= tk.to)) return ZF(kk, Fk, Bk, wk, tk, Rk, ak)
        }
      }
      return function(kk, Fk, Bk, Rk, tk, ak, Xk) {
        if (Bk < 0 ? !Fk : Fk == kk.doc.length) return null;
        let bk = Bk < 0 ? kk.sliceDoc(Fk - 1, Fk) : kk.sliceDoc(Fk, Fk + 1),
          wk = Xk.indexOf(bk);
        if (wk < 0 || wk % 2 == 0 != Bk > 0) return null;
        let dk = {
            from: Bk < 0 ? Fk - 1 : Fk,
            to: Bk > 0 ? Fk + 1 : Fk
          },
          sk = kk.doc.iterRange(Fk, Bk > 0 ? kk.doc.length : 0),
          Vk = 0;
        for (let Jk = 0; !sk.next().done && Jk <= ak;) {
          let kk = sk.value;
          Bk < 0 && (Jk += kk.length);
          let ak = Fk + Jk * Bk;
          for (let Fk = Bk > 0 ? 0 : kk.length - 1, bk = Bk > 0 ? kk.length : -1; Fk != bk; Fk += Bk) {
            let bk = Xk.indexOf(kk[Fk]);
            if (!(bk < 0 || Rk.resolveInner(ak + Fk, 1).type != tk))
              if (bk % 2 == 0 == Bk > 0) Vk++;
              else {
                if (1 == Vk) return {
                  start: dk,
                  end: {
                    from: ak + Fk,
                    to: ak + Fk + 1
                  },
                  matched: bk >> 1 == wk >> 1
                };
                Vk--
              }
          }
          Bk > 0 && (Jk += kk.length)
        }
        return sk.done ? {
          start: dk,
          matched: !1
        } : null
      }(kk, Fk, Bk, Xk, bk.type, tk, ak)
    }

    function ZF(kk, Fk, Bk, Rk, tk, ak, Xk) {
      let bk = Rk.parent,
        wk = {
          from: tk.from,
          to: tk.to
        },
        dk = 0,
        sk = null === bk || void 0 === bk ? void 0 : bk.cursor();
      if (sk && (Bk < 0 ? sk.childBefore(Rk.from) : sk.childAfter(Rk.to)))
        do {
          if (Bk < 0 ? sk.to <= Rk.from : sk.from >= Rk.to) {
            if (0 == dk && ak.indexOf(sk.type.name) > -1 && sk.from < sk.to) {
              let kk = qF(sk);
              return {
                start: wk,
                end: kk ? {
                  from: kk.from,
                  to: kk.to
                } : void 0,
                matched: !0
              }
            }
            if (hF(sk.type, Bk, Xk)) dk++;
            else if (hF(sk.type, -Bk, Xk)) {
              if (0 == dk) {
                let kk = qF(sk);
                return {
                  start: wk,
                  end: kk && kk.from < kk.to ? {
                    from: kk.from,
                    to: kk.to
                  } : void 0,
                  matched: !1
                }
              }
              dk--
            }
          }
        } while (Bk < 0 ? sk.prevSibling() : sk.nextSibling());
      return {
        start: wk,
        matched: !1
      }
    }
    const pF = Object.create(null),
      KF = [tk.l.none],
      xF = [],
      jF = Object.create(null),
      lF = Object.create(null);
    for (let [QF, kB] of [
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
      ]) lF[QF] = IF(pF, kB);

    function nF(kk, Fk) {
      xF.indexOf(kk) > -1 || (xF.push(kk), console.warn(Fk))
    }

    function IF(kk, Fk) {
      let Bk = [];
      for (let tk of Fk.split(" ")) {
        let Fk = [];
        for (let Bk of tk.split(".")) {
          let Rk = kk[Bk] || bk.n[Bk];
          Rk ? "function" == typeof Rk ? Fk.length ? Fk = Fk.map(Rk) : nF(Bk, `Modifier ${Bk} used at start of tag`) : Fk.length ? nF(Bk, `Tag ${Bk} used as modifier`) : Fk = Array.isArray(Rk) ? Rk : [Rk] : nF(Bk, `Unknown highlighting tag ${Bk}`)
        }
        for (let kk of Fk) Bk.push(kk)
      }
      if (!Bk.length) return 0;
      let Rk = Fk.replace(/ /g, "_"),
        ak = Rk + " " + Bk.map((kk => kk.id)),
        Xk = jF[ak];
      if (Xk) return Xk.id;
      let wk = jF[ak] = tk.l.define({
        id: KF.length,
        name: Rk,
        props: [(0, bk.g)({
          [Rk]: Bk
        })]
      });
      return KF.push(wk), wk.id
    }
    Xk.h.RTL, Xk.h.LTR
  },
  40787: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => vk,
      g: () => Ok
    });
    var Rk = Bk(40748),
      tk = Bk(40741),
      ak = Bk(40755);
    class Xk {
      constructor(kk, Fk, Bk) {
        this.from = kk, this.to = Fk, this.diagnostic = Bk
      }
    }
    class bk {
      constructor(kk, Fk, Bk) {
        this.diagnostics = kk, this.panel = Fk, this.selected = Bk
      }
      static init(kk, Fk, Bk) {
        let ak = Bk.facet(Yk).markerFilter;
        ak && (kk = ak(kk, Bk));
        let Xk = kk.slice().sort(((kk, Fk) => kk.from - Fk.from || kk.to - Fk.to)),
          dk = new tk.r,
          sk = [],
          Vk = 0,
          Jk = Bk.doc.iter(),
          Ak = 0,
          ek = Bk.doc.length;
        for (let tk = 0;;) {
          let kk, Fk, Bk = tk == Xk.length ? null : Xk[tk];
          if (!Bk && !sk.length) break;
          if (sk.length) kk = Vk, Fk = sk.reduce(((kk, Fk) => Math.min(kk, Fk.to)), Bk && Bk.from > kk ? Bk.from : 1e8);
          else {
            if (kk = Bk.from, kk > ek) break;
            Fk = Bk.to, sk.push(Bk), tk++
          }
          for (; tk < Xk.length;) {
            let Bk = Xk[tk];
            if (Bk.from != kk || !(Bk.to > Bk.from || Bk.to == kk)) {
              Fk = Math.min(Bk.from, Fk);
              break
            }
            sk.push(Bk), tk++, Fk = Math.min(Bk.to, Fk)
          }
          Fk = Math.min(Fk, ek);
          let ak = !1;
          if (sk.some((Bk => Bk.from == kk && (Bk.to == Fk || Fk == ek))) && (ak = kk == Fk, !ak && Fk - kk < 10)) {
            let Bk = kk - (Ak + Jk.value.length);
            Bk > 0 && (Jk.next(Bk), Ak = kk);
            for (let Rk = kk;;) {
              if (Rk >= Fk) {
                ak = !0;
                break
              }
              if (!Jk.lineBreak && Ak + Jk.value.length > Rk) break;
              Rk = Ak + Jk.value.length, Ak += Jk.value.length, Jk.next()
            }
          }
          let bk = Gk(sk);
          if (ak) dk.add(kk, kk, Rk.d.widget({
            widget: new Nk(bk),
            diagnostics: sk.slice()
          }));
          else {
            let Bk = sk.reduce(((kk, Fk) => Fk.markClass ? kk + " " + Fk.markClass : kk), "");
            dk.add(kk, Fk, Rk.d.mark({
              class: "cm-lintRange cm-lintRange-" + bk + Bk,
              diagnostics: sk.slice(),
              inclusiveEnd: sk.some((kk => kk.to > Fk))
            }))
          }
          if (Vk = Fk, Vk == ek) break;
          for (let Rk = 0; Rk < sk.length; Rk++) sk[Rk].to <= Vk && sk.splice(Rk--, 1)
        }
        let yk = dk.finish();
        return new bk(yk, Fk, wk(yk))
      }
    }

    function wk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Rk = null;
      return kk.between(Bk, 1e9, ((kk, Bk, tk) => {
        let {
          spec: ak
        } = tk;
        if (!(Fk && ak.diagnostics.indexOf(Fk) < 0))
          if (Rk) {
            if (ak.diagnostics.indexOf(Rk.diagnostic) < 0) return !1;
            Rk = new Xk(Rk.from, Bk, Rk.diagnostic)
          } else Rk = new Xk(kk, Bk, Fk || ak.diagnostics[0])
      })), Rk
    }

    function dk(kk, Fk) {
      let Bk = Fk.pos,
        Rk = Fk.end || Bk,
        tk = kk.state.facet(Yk).hideOn(kk, Bk, Rk);
      if (null != tk) return tk;
      let ak = kk.startState.doc.lineAt(Fk.pos);
      return !(!kk.effects.some((kk => kk.is(Vk))) && !kk.changes.touchesRange(ak.from, Math.max(ak.to, Rk)))
    }

    function sk(kk, Fk) {
      return kk.field(ek, !1) ? Fk : Fk.concat(tk.z.appendConfig.of(Tk))
    }
    const Vk = tk.z.define(),
      Jk = tk.z.define(),
      Ak = tk.z.define(),
      ek = tk.A.define({
        create: () => new bk(Rk.d.none, null, null),
        update(kk, Fk) {
          if (Fk.docChanged && kk.diagnostics.size) {
            let Bk = kk.diagnostics.map(Fk.changes),
              Rk = null,
              tk = kk.panel;
            if (kk.selected) {
              let tk = Fk.changes.mapPos(kk.selected.from, 1);
              Rk = wk(Bk, kk.selected.diagnostic, tk) || wk(Bk, null, tk)
            }!Bk.size && tk && Fk.state.facet(Yk).autoPanel && (tk = null), kk = new bk(Bk, tk, Rk)
          }
          for (let Bk of Fk.effects)
            if (Bk.is(Vk)) {
              let Rk = Fk.state.facet(Yk).autoPanel ? Bk.value.length ? uk.open : null : kk.panel;
              kk = bk.init(Bk.value, Rk, Fk.state)
            } else Bk.is(Jk) ? kk = new bk(kk.diagnostics, Bk.value ? uk.open : null, kk.selected) : Bk.is(Ak) && (kk = new bk(kk.diagnostics, kk.panel, Bk.value));
          return kk
        },
        provide: kk => [Rk.gb.from(kk, (kk => kk.panel)), Rk.l.uR.from(kk, (kk => kk.diagnostics))]
      });
    const yk = Rk.d.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function fk(kk, Fk, Bk) {
      let Rk, {
          diagnostics: tk
        } = kk.state.field(ek),
        ak = -1,
        Xk = -1;
      tk.between(Fk - (Bk < 0 ? 1 : 0), Fk + (Bk > 0 ? 1 : 0), ((kk, tk, bk) => {
        let {
          spec: wk
        } = bk;
        if (Fk >= kk && Fk <= tk && (kk == tk || (Fk > kk || Bk > 0) && (Fk < tk || Bk < 0))) return Rk = wk.diagnostics, ak = kk, Xk = tk, !1
      }));
      let bk = kk.state.facet(Yk).tooltipFilter;
      return Rk && bk && (Rk = bk(Rk, kk.state)), Rk ? {
        pos: ak,
        end: Xk,
        above: kk.state.doc.lineAt(ak).to < Xk,
        create: () => ({
          dom: mk(kk, Rk)
        })
      } : null
    }

    function mk(kk, Fk) {
      return (0, ak.b)("ul", {
        class: "cm-tooltip-lint"
      }, Fk.map((Fk => Sk(kk, Fk, !1))))
    }
    const Wk = kk => {
        let Fk = kk.state.field(ek, !1);
        return !(!Fk || !Fk.panel) && (kk.dispatch({
          effects: Jk.of(!1)
        }), !0)
      },
      vk = [{
        key: "Mod-Shift-m",
        run: kk => {
          let Fk = kk.state.field(ek, !1);
          Fk && Fk.panel || kk.dispatch({
            effects: sk(kk.state, [Jk.of(!0)])
          });
          let Bk = (0, Rk.G)(kk, uk.open);
          return Bk && Bk.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: kk => {
          let Fk = kk.state.field(ek, !1);
          if (!Fk) return !1;
          let Bk = kk.state.selection.main,
            Rk = wk(Fk.diagnostics, null, Bk.to + 1);
          return !(!Rk && (Rk = wk(Fk.diagnostics, null, 0), !Rk || Rk.from == Bk.from && Rk.to == Bk.to)) && (kk.dispatch({
            selection: {
              anchor: Rk.from,
              head: Rk.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      ik = Rk.q.fromClass(class {
        constructor(kk) {
          this.view = kk, this.timeout = -1, this.set = !0;
          let {
            delay: Fk
          } = kk.state.facet(Yk);
          this.lintTime = Date.now() + Fk, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, Fk)
        }
        run() {
          clearTimeout(this.timeout);
          let kk = Date.now();
          if (kk < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - kk);
          else {
            this.set = !1;
            let {
              state: kk
            } = this.view, {
              sources: Fk
            } = kk.facet(Yk);
            Fk.length && function(kk, Fk, Bk) {
              let Rk = [],
                tk = -1;
              for (let ak of kk) ak.then((Bk => {
                Rk.push(Bk), clearTimeout(tk), Rk.length == kk.length ? Fk(Rk) : tk = setTimeout((() => Fk(Rk)), 200)
              }), Bk)
            }(Fk.map((kk => Promise.resolve(kk(this.view)))), (Fk => {
              this.view.state.doc == kk.doc && this.view.dispatch(function(kk, Fk) {
                return {
                  effects: sk(kk, [Vk.of(Fk)])
                }
              }(this.view.state, Fk.reduce(((kk, Fk) => kk.concat(Fk)))))
            }), (kk => {
              (0, Rk._)(this.view.state, kk)
            }))
          }
        }
        update(kk) {
          let Fk = kk.state.facet(Yk);
          (kk.docChanged || Fk != kk.startState.facet(Yk) || Fk.needsRefresh && Fk.needsRefresh(kk)) && (this.lintTime = Date.now() + Fk.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, Fk.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const Yk = tk.i.define({
      combine: kk => ({
        sources: kk.map((kk => kk.source)).filter((kk => null != kk)),
        ...(0, tk.K)(kk.map((kk => kk.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: Lk,
          tooltipFilter: Lk,
          needsRefresh: (kk, Fk) => kk ? Fk ? Bk => kk(Bk) || Fk(Bk) : kk : Fk,
          hideOn: (kk, Fk) => kk ? Fk ? (Bk, Rk, tk) => kk(Bk, Rk, tk) || Fk(Bk, Rk, tk) : kk : Fk,
          autoPanel: (kk, Fk) => kk || Fk
        })
      })
    });

    function Lk(kk, Fk) {
      return kk ? Fk ? (Bk, Rk) => Fk(kk(Bk, Rk), Rk) : kk : Fk
    }

    function Ok(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [Yk.of({
        source: kk,
        config: Fk
      }), ik, Tk]
    }

    function Ek(kk) {
      let Fk = [];
      if (kk) kk: for (let {
          name: Bk
        }
        of kk) {
        for (let kk = 0; kk < Bk.length; kk++) {
          let Rk = Bk[kk];
          if (/[a-zA-Z]/.test(Rk) && !Fk.some((kk => kk.toLowerCase() == Rk.toLowerCase()))) {
            Fk.push(Rk);
            continue kk
          }
        }
        Fk.push("")
      }
      return Fk
    }

    function Sk(kk, Fk, Bk) {
      var Rk;
      let tk = Bk ? Ek(Fk.actions) : [];
      return (0, ak.b)("li", {
        class: "cm-diagnostic cm-diagnostic-" + Fk.severity
      }, (0, ak.b)("span", {
        class: "cm-diagnosticText"
      }, Fk.renderMessage ? Fk.renderMessage(kk) : Fk.message), null === (Rk = Fk.actions) || void 0 === Rk ? void 0 : Rk.map(((Bk, Rk) => {
        let Xk = !1,
          bk = Rk => {
            if (Rk.preventDefault(), Xk) return;
            Xk = !0;
            let tk = wk(kk.state.field(ek).diagnostics, Fk);
            tk && Bk.apply(kk, tk.from, tk.to)
          },
          {
            name: dk
          } = Bk,
          sk = tk[Rk] ? dk.indexOf(tk[Rk]) : -1,
          Vk = sk < 0 ? dk : [dk.slice(0, sk), (0, ak.b)("u", dk.slice(sk, sk + 1)), dk.slice(sk + 1)],
          Jk = Bk.markClass ? " " + Bk.markClass : "";
        return (0, ak.b)("button", {
          type: "button",
          class: "cm-diagnosticAction" + Jk,
          onclick: bk,
          onmousedown: bk,
          "aria-label": ` Action: ${dk}${sk<0?"":` (access key "${tk[Rk]})"`}.`
        }, Vk)
      })), Fk.source && (0, ak.b)("div", {
        class: "cm-diagnosticSource"
      }, Fk.source))
    }
    class Nk extends Rk.u {
      constructor(kk) {
        super(), this.sev = kk
      }
      eq(kk) {
        return kk.sev == this.sev
      }
      toDOM() {
        return (0, ak.b)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Hk {
      constructor(kk, Fk) {
        this.diagnostic = Fk, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = Sk(kk, Fk, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class uk {
      constructor(kk) {
        this.view = kk, this.items = [];
        this.list = (0, ak.b)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: Fk => {
            if (!(Fk.ctrlKey || Fk.altKey || Fk.metaKey)) {
              if (27 == Fk.keyCode) Wk(this.view), this.view.focus();
              else if (38 == Fk.keyCode || 33 == Fk.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == Fk.keyCode || 34 == Fk.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == Fk.keyCode) this.moveSelection(0);
              else if (35 == Fk.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == Fk.keyCode) this.view.focus();
              else {
                if (!(Fk.keyCode >= 65 && Fk.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: Bk
                  } = this.items[this.selectedIndex], Rk = Ek(Bk.actions);
                  for (let tk = 0; tk < Rk.length; tk++)
                    if (Rk[tk].toUpperCase().charCodeAt(0) == Fk.keyCode) {
                      let Fk = wk(this.view.state.field(ek).diagnostics, Bk);
                      Fk && Bk.actions[tk].apply(kk, Fk.from, Fk.to)
                    }
                }
              }
              Fk.preventDefault()
            }
          },
          onclick: kk => {
            for (let Fk = 0; Fk < this.items.length; Fk++) this.items[Fk].dom.contains(kk.target) && this.moveSelection(Fk)
          }
        }), this.dom = (0, ak.b)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, ak.b)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => Wk(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let kk = this.view.state.field(ek).selected;
        if (!kk) return -1;
        for (let Fk = 0; Fk < this.items.length; Fk++)
          if (this.items[Fk].diagnostic == kk.diagnostic) return Fk;
        return -1
      }
      update() {
        let {
          diagnostics: kk,
          selected: Fk
        } = this.view.state.field(ek), Bk = 0, Rk = !1, tk = null, ak = new Set;
        for (kk.between(0, this.view.state.doc.length, ((kk, Xk, bk) => {
            let {
              spec: wk
            } = bk;
            for (let dk of wk.diagnostics) {
              if (ak.has(dk)) continue;
              ak.add(dk);
              let kk, Xk = -1;
              for (let Fk = Bk; Fk < this.items.length; Fk++)
                if (this.items[Fk].diagnostic == dk) {
                  Xk = Fk;
                  break
                } Xk < 0 ? (kk = new Hk(this.view, dk), this.items.splice(Bk, 0, kk), Rk = !0) : (kk = this.items[Xk], Xk > Bk && (this.items.splice(Bk, Xk - Bk), Rk = !0)), Fk && kk.diagnostic == Fk.diagnostic ? kk.dom.hasAttribute("aria-selected") || (kk.dom.setAttribute("aria-selected", "true"), tk = kk) : kk.dom.hasAttribute("aria-selected") && kk.dom.removeAttribute("aria-selected"), Bk++
            }
          })); Bk < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Rk = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Hk(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Rk = !0), tk ? (this.list.setAttribute("aria-activedescendant", tk.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: tk.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: kk => {
            let {
              sel: Fk,
              panel: Bk
            } = kk, Rk = Bk.height / this.list.offsetHeight;
            Fk.top < Bk.top ? this.list.scrollTop -= (Bk.top - Fk.top) / Rk : Fk.bottom > Bk.bottom && (this.list.scrollTop += (Fk.bottom - Bk.bottom) / Rk)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Rk && this.sync()
      }
      sync() {
        let kk = this.list.firstChild;

        function Fk() {
          let Fk = kk;
          kk = Fk.nextSibling, Fk.remove()
        }
        for (let Bk of this.items)
          if (Bk.dom.parentNode == this.list) {
            for (; kk != Bk.dom;) Fk();
            kk = Bk.dom.nextSibling
          } else this.list.insertBefore(Bk.dom, kk);
        for (; kk;) Fk()
      }
      moveSelection(kk) {
        if (this.selectedIndex < 0) return;
        let Fk = wk(this.view.state.field(ek).diagnostics, this.items[kk].diagnostic);
        Fk && this.view.dispatch({
          selection: {
            anchor: Fk.from,
            head: Fk.to
          },
          scrollIntoView: !0,
          effects: Ak.of(Fk)
        })
      }
      static open(kk) {
        return new uk(kk)
      }
    }

    function Mk(kk) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(kk)}</svg>')`
    }

    function gk(kk) {
      return Mk(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${kk}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Uk = Rk.l.baseTheme({
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
        backgroundImage: gk("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: gk("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: gk("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: gk("#66d")
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

    function ck(kk) {
      return "error" == kk ? 4 : "warning" == kk ? 3 : "info" == kk ? 2 : 1
    }

    function Gk(kk) {
      let Fk = "hint",
        Bk = 1;
      for (let Rk of kk) {
        let kk = ck(Rk.severity);
        kk > Bk && (Bk = kk, Fk = Rk.severity)
      }
      return Fk
    }
    Rk.o;
    const Tk = [ek, Rk.l.uR.compute([ek], (kk => {
      let {
        selected: Fk,
        panel: Bk
      } = kk.field(ek);
      return Fk && Bk && Fk.from != Fk.to ? Rk.d.set([yk.range(Fk.from, Fk.to)]) : Rk.d.none
    })), (0, Rk.S)(fk, {
      hideOn: dk
    }), Uk]
  },
  40782: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Qk,
      f: () => mk,
      g: () => kF
    });
    var Rk = Bk(40748),
      tk = Bk(40741),
      ak = Bk(40755);
    const Xk = "function" == typeof String.prototype.normalize ? kk => kk.normalize("NFKD") : kk => kk;
    class bk {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length,
          tk = arguments.length > 4 ? arguments[4] : void 0,
          ak = arguments.length > 5 ? arguments[5] : void 0;
        this.test = ak, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = kk.iterRange(Bk, Rk), this.bufferStart = Bk, this.normalize = tk ? kk => tk(Xk(kk)) : Xk, this.query = this.normalize(Fk)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, tk.I)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let kk = this.peek();
          if (kk < 0) return this.done = !0, this;
          let Fk = (0, tk.R)(kk),
            Bk = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, tk.J)(kk);
          let Rk = this.normalize(Fk);
          if (Rk.length)
            for (let tk = 0, ak = Bk;; tk++) {
              let kk = Rk.charCodeAt(tk),
                Xk = this.match(kk, ak, this.bufferPos + this.bufferStart);
              if (tk == Rk.length - 1) {
                if (Xk) return this.value = Xk, this;
                break
              }
              ak == Bk && tk < Fk.length && Fk.charCodeAt(tk) == kk && ak++
            }
        }
      }
      match(kk, Fk, Bk) {
        let Rk = null;
        for (let tk = 0; tk < this.matches.length; tk += 2) {
          let Fk = this.matches[tk],
            ak = !1;
          this.query.charCodeAt(Fk) == kk && (Fk == this.query.length - 1 ? Rk = {
            from: this.matches[tk + 1],
            to: Bk
          } : (this.matches[tk]++, ak = !0)), ak || (this.matches.splice(tk, 2), tk -= 2)
        }
        return this.query.charCodeAt(0) == kk && (1 == this.query.length ? Rk = {
          from: Fk,
          to: Bk
        } : this.matches.push(1, Fk)), Rk && this.test && !this.test(Rk.from, Rk.to, this.buffer, this.bufferStart) && (Rk = null), Rk
      }
    }
    "undefined" != typeof Symbol && (bk.prototype[Symbol.iterator] = function() {
      return this
    });
    const wk = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      dk = "gm" + (null == /x/.unicode ? "" : "u");
    class sk {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kk.length;
        if (this.text = kk, this.to = tk, this.curLine = "", this.done = !1, this.value = wk, /\\[sWDnr]|\n|\r|\[\^/.test(Fk)) return new Ak(kk, Fk, Bk, Rk, tk);
        this.re = new RegExp(Fk, dk + ((null === Bk || void 0 === Bk ? void 0 : Bk.ignoreCase) ? "i" : "")), this.test = null === Bk || void 0 === Bk ? void 0 : Bk.test, this.iter = kk.iter();
        let ak = kk.lineAt(Rk);
        this.curLineStart = ak.from, this.matchPos = ek(kk, Rk), this.getLine(this.curLineStart)
      }
      getLine(kk) {
        this.iter.next(kk), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let kk = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = kk;
          let Fk = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (Fk) {
            let Bk = this.curLineStart + Fk.index,
              Rk = Bk + Fk[0].length;
            if (this.matchPos = ek(this.text, Rk + (Bk == Rk ? 1 : 0)), Bk == this.curLineStart + this.curLine.length && this.nextLine(), (Bk < Rk || Bk > this.value.to) && (!this.test || this.test(Bk, Rk, Fk))) return this.value = {
              from: Bk,
              to: Rk,
              match: Fk
            }, this;
            kk = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), kk = 0
          }
        }
      }
    }
    const Vk = new WeakMap;
    class Jk {
      constructor(kk, Fk) {
        this.from = kk, this.text = Fk
      }
      get to() {
        return this.from + this.text.length
      }
      static get(kk, Fk, Bk) {
        let Rk = Vk.get(kk);
        if (!Rk || Rk.from >= Bk || Rk.to <= Fk) {
          let Rk = new Jk(Fk, kk.sliceString(Fk, Bk));
          return Vk.set(kk, Rk), Rk
        }
        if (Rk.from == Fk && Rk.to == Bk) return Rk;
        let {
          text: tk,
          from: ak
        } = Rk;
        return ak > Fk && (tk = kk.sliceString(Fk, ak) + tk, ak = Fk), Rk.to < Bk && (tk += kk.sliceString(Rk.to, Bk)), Vk.set(kk, new Jk(ak, tk)), new Jk(Fk, tk.slice(Fk - ak, Bk - ak))
      }
    }
    class Ak {
      constructor(kk, Fk, Bk, Rk, tk) {
        this.text = kk, this.to = tk, this.done = !1, this.value = wk, this.matchPos = ek(kk, Rk), this.re = new RegExp(Fk, dk + ((null === Bk || void 0 === Bk ? void 0 : Bk.ignoreCase) ? "i" : "")), this.test = null === Bk || void 0 === Bk ? void 0 : Bk.test, this.flat = Jk.get(kk, Rk, this.chunkEnd(Rk + 5e3))
      }
      chunkEnd(kk) {
        return kk >= this.to ? this.to : this.text.lineAt(kk).to
      }
      next() {
        for (;;) {
          let kk = this.re.lastIndex = this.matchPos - this.flat.from,
            Fk = this.re.exec(this.flat.text);
          if (Fk && !Fk[0] && Fk.index == kk && (this.re.lastIndex = kk + 1, Fk = this.re.exec(this.flat.text)), Fk) {
            let kk = this.flat.from + Fk.index,
              Bk = kk + Fk[0].length;
            if ((this.flat.to >= this.to || Fk.index + Fk[0].length <= this.flat.text.length - 10) && (!this.test || this.test(kk, Bk, Fk))) return this.value = {
              from: kk,
              to: Bk,
              match: Fk
            }, this.matchPos = ek(this.text, Bk + (kk == Bk ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = Jk.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function ek(kk, Fk) {
      if (Fk >= kk.length) return Fk;
      let Bk, Rk = kk.lineAt(Fk);
      for (; Fk < Rk.to && (Bk = Rk.text.charCodeAt(Fk - Rk.from)) >= 56320 && Bk < 57344;) Fk++;
      return Fk
    }
    "undefined" != typeof Symbol && (sk.prototype[Symbol.iterator] = Ak.prototype[Symbol.iterator] = function() {
      return this
    });
    const yk = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      fk = tk.i.define({
        combine: kk => (0, tk.K)(kk, yk, {
          highlightWordAroundCursor: (kk, Fk) => kk || Fk,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function mk(kk) {
      let Fk = [Lk, Yk];
      return kk && Fk.push(fk.of(kk)), Fk
    }
    const Wk = Rk.d.mark({
        class: "cm-selectionMatch"
      }),
      vk = Rk.d.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function ik(kk, Fk, Bk, Rk) {
      return (0 == Bk || kk(Fk.sliceDoc(Bk - 1, Bk)) != tk.e.Word) && (Rk == Fk.doc.length || kk(Fk.sliceDoc(Rk, Rk + 1)) != tk.e.Word)
    }
    const Yk = Rk.q.fromClass(class {
        constructor(kk) {
          this.uR = this.getDeco(kk)
        }
        update(kk) {
          (kk.selectionSet || kk.docChanged || kk.viewportChanged) && (this.uR = this.getDeco(kk.view))
        }
        getDeco(kk) {
          let Fk = kk.state.facet(fk),
            {
              state: Bk
            } = kk,
            ak = Bk.selection;
          if (ak.hb.length > 1) return Rk.d.none;
          let Xk, wk = ak.main,
            dk = null;
          if (wk.empty) {
            if (!Fk.highlightWordAroundCursor) return Rk.d.none;
            let kk = Bk.wordAt(wk.head);
            if (!kk) return Rk.d.none;
            dk = Bk.charCategorizer(wk.head), Xk = Bk.sliceDoc(kk.from, kk.to)
          } else {
            let kk = wk.to - wk.from;
            if (kk < Fk.minSelectionLength || kk > 200) return Rk.d.none;
            if (Fk.wholeWords) {
              if (Xk = Bk.sliceDoc(wk.from, wk.to), dk = Bk.charCategorizer(wk.head), !ik(dk, Bk, wk.from, wk.to) || ! function(kk, Fk, Bk, Rk) {
                  return kk(Fk.sliceDoc(Bk, Bk + 1)) == tk.e.Word && kk(Fk.sliceDoc(Rk - 1, Rk)) == tk.e.Word
                }(dk, Bk, wk.from, wk.to)) return Rk.d.none
            } else if (Xk = Bk.sliceDoc(wk.from, wk.to), !Xk) return Rk.d.none
          }
          let sk = [];
          for (let tk of kk.q_) {
            let kk = new bk(Bk.doc, Xk, tk.from, tk.to);
            for (; !kk.next().done;) {
              let {
                from: tk,
                to: ak
              } = kk.value;
              if ((!dk || ik(dk, Bk, tk, ak)) && (wk.empty && tk <= wk.from && ak >= wk.to ? sk.push(vk.range(tk, ak)) : (tk >= wk.to || ak <= wk.from) && sk.push(Wk.range(tk, ak)), sk.length > Fk.maxMatches)) return Rk.d.none
            }
          }
          return Rk.d.set(sk)
        }
      }, {
        uR: kk => kk.uR
      }),
      Lk = Rk.l.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const Ok = tk.i.define({
      combine: kk => (0, tk.K)(kk, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: kk => new FF(kk),
        scrollToMatch: kk => Rk.l.scrollIntoView(kk)
      })
    });
    class Ek {
      constructor(kk) {
        this.search = kk.search, this.caseSensitive = !!kk.caseSensitive, this.literal = !!kk.literal, this.regexp = !!kk.regexp, this.replace = kk.replace || "", this.valid = !!this.search && (!this.regexp || function(kk) {
          try {
            return new RegExp(kk, dk), !0
          } catch (Fk) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!kk.wholeWord, this.test = kk.test
      }
      unquote(kk) {
        return this.literal ? kk : kk.replace(/\\([nrt\\])/g, ((kk, Fk) => "n" == Fk ? "\n" : "r" == Fk ? "\r" : "t" == Fk ? "\t" : "\\"))
      }
      eq(kk) {
        return this.search == kk.search && this.replace == kk.replace && this.caseSensitive == kk.caseSensitive && this.regexp == kk.regexp && this.wholeWord == kk.wholeWord && this.test == kk.test
      }
      create() {
        return this.regexp ? new Uk(this) : new Hk(this)
      }
      getCursor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = kk.doc ? kk : tk.h.create({
            doc: kk
          });
        return null == Bk && (Bk = Rk.doc.length), this.regexp ? uk(this, Rk, Fk, Bk) : Nk(this, Rk, Fk, Bk)
      }
    }
    class Sk {
      constructor(kk) {
        this.spec = kk
      }
    }

    function Nk(kk, Fk, Bk, Rk) {
      let ak;
      var Xk, wk;
      return kk.wholeWord && (Xk = Fk.doc, wk = Fk.charCategorizer(Fk.selection.main.head), ak = (kk, Fk, Bk, Rk) => ((Rk > kk || Rk + Bk.length < Fk) && (Rk = Math.max(0, kk - 2), Bk = Xk.sliceString(Rk, Math.min(Xk.length, Fk + 2))), (wk(Mk(Bk, kk - Rk)) != tk.e.Word || wk(gk(Bk, kk - Rk)) != tk.e.Word) && (wk(gk(Bk, Fk - Rk)) != tk.e.Word || wk(Mk(Bk, Fk - Rk)) != tk.e.Word))), kk.test && (ak = function(kk, Fk, Bk) {
        return (Rk, tk, ak, Xk) => {
          if (Bk && !Bk(Rk, tk, ak, Xk)) return !1;
          let bk = Rk >= Xk && tk <= Xk + ak.length ? ak.slice(Rk - Xk, tk - Xk) : Fk.doc.sliceString(Rk, tk);
          return kk(bk, Fk, Rk, tk)
        }
      }(kk.test, Fk, ak)), new bk(Fk.doc, kk.unquoted, Bk, Rk, kk.caseSensitive ? void 0 : kk => kk.toLowerCase(), ak)
    }
    class Hk extends Sk {
      constructor(kk) {
        super(kk)
      }
      nextMatch(kk, Fk, Bk) {
        let Rk = Nk(this.spec, kk, Bk, kk.doc.length).nextOverlapping();
        if (Rk.done) {
          let Bk = Math.min(kk.doc.length, Fk + this.spec.unquoted.length);
          Rk = Nk(this.spec, kk, 0, Bk).nextOverlapping()
        }
        return Rk.done || Rk.value.from == Fk && Rk.value.to == Bk ? null : Rk.value
      }
      prevMatchInRange(kk, Fk, Bk) {
        for (let Rk = Bk;;) {
          let Bk = Math.max(Fk, Rk - 1e4 - this.spec.unquoted.length),
            tk = Nk(this.spec, kk, Bk, Rk),
            ak = null;
          for (; !tk.nextOverlapping().done;) ak = tk.value;
          if (ak) return ak;
          if (Bk == Fk) return null;
          Rk -= 1e4
        }
      }
      prevMatch(kk, Fk, Bk) {
        let Rk = this.prevMatchInRange(kk, 0, Fk);
        return Rk || (Rk = this.prevMatchInRange(kk, Math.max(0, Bk - this.spec.unquoted.length), kk.doc.length)), !Rk || Rk.from == Fk && Rk.to == Bk ? null : Rk
      }
      getReplacement(kk) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(kk, Fk) {
        let Bk = Nk(this.spec, kk, 0, kk.doc.length),
          Rk = [];
        for (; !Bk.next().done;) {
          if (Rk.length >= Fk) return null;
          Rk.push(Bk.value)
        }
        return Rk
      }
      highlight(kk, Fk, Bk, Rk) {
        let tk = Nk(this.spec, kk, Math.max(0, Fk - this.spec.unquoted.length), Math.min(Bk + this.spec.unquoted.length, kk.doc.length));
        for (; !tk.next().done;) Rk(tk.value.from, tk.value.to)
      }
    }

    function uk(kk, Fk, Bk, Rk) {
      let ak;
      var Xk;
      return kk.wholeWord && (Xk = Fk.charCategorizer(Fk.selection.main.head), ak = (kk, Fk, Bk) => !Bk[0].length || (Xk(Mk(Bk.input, Bk.index)) != tk.e.Word || Xk(gk(Bk.input, Bk.index)) != tk.e.Word) && (Xk(gk(Bk.input, Bk.index + Bk[0].length)) != tk.e.Word || Xk(Mk(Bk.input, Bk.index + Bk[0].length)) != tk.e.Word)), kk.test && (ak = function(kk, Fk, Bk) {
        return (Rk, tk, ak) => (!Bk || Bk(Rk, tk, ak)) && kk(ak[0], Fk, Rk, tk)
      }(kk.test, Fk, ak)), new sk(Fk.doc, kk.search, {
        ignoreCase: !kk.caseSensitive,
        test: ak
      }, Bk, Rk)
    }

    function Mk(kk, Fk) {
      return kk.slice((0, tk.N)(kk, Fk, !1), Fk)
    }

    function gk(kk, Fk) {
      return kk.slice(Fk, (0, tk.N)(kk, Fk))
    }
    class Uk extends Sk {
      nextMatch(kk, Fk, Bk) {
        let Rk = uk(this.spec, kk, Bk, kk.doc.length).next();
        return Rk.done && (Rk = uk(this.spec, kk, 0, Fk).next()), Rk.done ? null : Rk.value
      }
      prevMatchInRange(kk, Fk, Bk) {
        for (let Rk = 1;; Rk++) {
          let tk = Math.max(Fk, Bk - 1e4 * Rk),
            ak = uk(this.spec, kk, tk, Bk),
            Xk = null;
          for (; !ak.next().done;) Xk = ak.value;
          if (Xk && (tk == Fk || Xk.from > tk + 10)) return Xk;
          if (tk == Fk) return null
        }
      }
      prevMatch(kk, Fk, Bk) {
        return this.prevMatchInRange(kk, 0, Fk) || this.prevMatchInRange(kk, Bk, kk.doc.length)
      }
      getReplacement(kk) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((Fk, Bk) => {
          if ("&" == Bk) return kk.match[0];
          if ("$" == Bk) return "$";
          for (let Rk = Bk.length; Rk > 0; Rk--) {
            let Fk = +Bk.slice(0, Rk);
            if (Fk > 0 && Fk < kk.match.length) return kk.match[Fk] + Bk.slice(Rk)
          }
          return Fk
        }))
      }
      matchAll(kk, Fk) {
        let Bk = uk(this.spec, kk, 0, kk.doc.length),
          Rk = [];
        for (; !Bk.next().done;) {
          if (Rk.length >= Fk) return null;
          Rk.push(Bk.value)
        }
        return Rk
      }
      highlight(kk, Fk, Bk, Rk) {
        let tk = uk(this.spec, kk, Math.max(0, Fk - 250), Math.min(Bk + 250, kk.doc.length));
        for (; !tk.next().done;) Rk(tk.value.from, tk.value.to)
      }
    }
    const ck = tk.z.define(),
      Gk = tk.z.define(),
      Tk = tk.A.define({
        create: kk => new rk(jk(kk).create(), null),
        update(kk, Fk) {
          for (let Bk of Fk.effects) Bk.is(ck) ? kk = new rk(Bk.value.create(), kk.panel) : Bk.is(Gk) && (kk = new rk(kk.query, Bk.value ? xk : null));
          return kk
        },
        provide: kk => Rk.gb.from(kk, (kk => kk.panel))
      });
    class rk {
      constructor(kk, Fk) {
        this.query = kk, this.panel = Fk
      }
    }
    const Dk = Rk.d.mark({
        class: "cm-searchMatch"
      }),
      zk = Rk.d.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      Pk = Rk.q.fromClass(class {
        constructor(kk) {
          this.view = kk, this.uR = this.highlight(kk.state.field(Tk))
        }
        update(kk) {
          let Fk = kk.state.field(Tk);
          (Fk != kk.startState.field(Tk) || kk.docChanged || kk.selectionSet || kk.viewportChanged) && (this.uR = this.highlight(Fk))
        }
        highlight(kk) {
          let {
            query: Fk,
            panel: Bk
          } = kk;
          if (!Bk || !Fk.spec.valid) return Rk.d.none;
          let {
            view: ak
          } = this, Xk = new tk.r;
          for (let Rk = 0, tk = ak.q_, bk = tk.length; Rk < bk; Rk++) {
            let {
              from: kk,
              to: Bk
            } = tk[Rk];
            for (; Rk < bk - 1 && Bk > tk[Rk + 1].from - 500;) Bk = tk[++Rk].to;
            Fk.highlight(ak.state, kk, Bk, ((kk, Fk) => {
              let Bk = ak.state.selection.hb.some((Bk => Bk.from == kk && Bk.to == Fk));
              Xk.add(kk, Fk, Bk ? zk : Dk)
            }))
          }
          return Xk.finish()
        }
      }, {
        uR: kk => kk.uR
      });

    function hk(kk) {
      return Fk => {
        let Bk = Fk.state.field(Tk, !1);
        return Bk && Bk.query.spec.valid ? kk(Fk, Bk) : Ik(Fk)
      }
    }
    const qk = hk(((kk, Fk) => {
        let {
          query: Bk
        } = Fk, {
          to: Rk
        } = kk.state.selection.main, ak = Bk.nextMatch(kk.state, Rk, Rk);
        if (!ak) return !1;
        let Xk = tk.f.single(ak.from, ak.to),
          bk = kk.state.facet(Ok);
        return kk.dispatch({
          selection: Xk,
          effects: [aF(kk, ak), bk.scrollToMatch(Xk.main, kk)],
          userEvent: "select.search"
        }), nk(kk), !0
      })),
      Ck = hk(((kk, Fk) => {
        let {
          query: Bk
        } = Fk, {
          state: Rk
        } = kk, {
          from: ak
        } = Rk.selection.main, Xk = Bk.prevMatch(Rk, ak, ak);
        if (!Xk) return !1;
        let bk = tk.f.single(Xk.from, Xk.to),
          wk = kk.state.facet(Ok);
        return kk.dispatch({
          selection: bk,
          effects: [aF(kk, Xk), wk.scrollToMatch(bk.main, kk)],
          userEvent: "select.search"
        }), nk(kk), !0
      })),
      Zk = hk(((kk, Fk) => {
        let {
          query: Bk
        } = Fk, Rk = Bk.matchAll(kk.state, 1e3);
        return !(!Rk || !Rk.length) && (kk.dispatch({
          selection: tk.f.create(Rk.map((kk => tk.f.range(kk.from, kk.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      pk = hk(((kk, Fk) => {
        let {
          query: Bk
        } = Fk, {
          state: ak
        } = kk, {
          from: Xk,
          to: bk
        } = ak.selection.main;
        if (ak.readOnly) return !1;
        let wk = Bk.nextMatch(ak, Xk, Xk);
        if (!wk) return !1;
        let dk, sk, Vk = wk,
          Jk = [],
          Ak = [];
        Vk.from == Xk && Vk.to == bk && (sk = ak.toText(Bk.getReplacement(Vk)), Jk.push({
          from: Vk.from,
          to: Vk.to,
          insert: sk
        }), Vk = Bk.nextMatch(ak, Vk.from, Vk.to), Ak.push(Rk.l.announce.of(ak.phrase("replaced match on line $", ak.doc.lineAt(Xk).number) + ".")));
        let ek = kk.state.changes(Jk);
        return Vk && (dk = tk.f.single(Vk.from, Vk.to).map(ek), Ak.push(aF(kk, Vk)), Ak.push(ak.facet(Ok).scrollToMatch(dk.main, kk))), kk.dispatch({
          changes: ek,
          selection: dk,
          effects: Ak,
          userEvent: "input.replace"
        }), !0
      })),
      Kk = hk(((kk, Fk) => {
        let {
          query: Bk
        } = Fk;
        if (kk.state.readOnly) return !1;
        let tk = Bk.matchAll(kk.state, 1e9).map((kk => {
          let {
            from: Fk,
            to: Rk
          } = kk;
          return {
            from: Fk,
            to: Rk,
            insert: Bk.getReplacement(kk)
          }
        }));
        if (!tk.length) return !1;
        let ak = kk.state.phrase("replaced $ matches", tk.length) + ".";
        return kk.dispatch({
          changes: tk,
          effects: Rk.l.announce.of(ak),
          userEvent: "input.replace.all"
        }), !0
      }));

    function xk(kk) {
      return kk.state.facet(Ok).createPanel(kk)
    }

    function jk(kk, Fk) {
      var Bk, Rk, tk, ak, Xk;
      let bk = kk.selection.main,
        wk = bk.empty || bk.to > bk.from + 100 ? "" : kk.sliceDoc(bk.from, bk.to);
      if (Fk && !wk) return Fk;
      let dk = kk.facet(Ok);
      return new Ek({
        search: (null !== (Bk = null === Fk || void 0 === Fk ? void 0 : Fk.literal) && void 0 !== Bk ? Bk : dk.literal) ? wk : wk.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Rk = null === Fk || void 0 === Fk ? void 0 : Fk.caseSensitive) && void 0 !== Rk ? Rk : dk.caseSensitive,
        literal: null !== (tk = null === Fk || void 0 === Fk ? void 0 : Fk.literal) && void 0 !== tk ? tk : dk.literal,
        regexp: null !== (ak = null === Fk || void 0 === Fk ? void 0 : Fk.regexp) && void 0 !== ak ? ak : dk.regexp,
        wholeWord: null !== (Xk = null === Fk || void 0 === Fk ? void 0 : Fk.wholeWord) && void 0 !== Xk ? Xk : dk.wholeWord
      })
    }

    function lk(kk) {
      let Fk = (0, Rk.G)(kk, xk);
      return Fk && Fk.dom.querySelector("[main-field]")
    }

    function nk(kk) {
      let Fk = lk(kk);
      Fk && Fk == kk.root.activeElement && Fk.select()
    }
    const Ik = kk => {
        let Fk = kk.state.field(Tk, !1);
        if (Fk && Fk.panel) {
          let Bk = lk(kk);
          if (Bk && Bk != kk.root.activeElement) {
            let Rk = jk(kk.state, Fk.query.spec);
            Rk.valid && kk.dispatch({
              effects: ck.of(Rk)
            }), Bk.focus(), Bk.select()
          }
        } else kk.dispatch({
          effects: [Gk.of(!0), Fk ? ck.of(jk(kk.state, Fk.query.spec)) : tk.z.appendConfig.of(bF)]
        });
        return !0
      },
      Qk = kk => {
        let Fk = kk.state.field(Tk, !1);
        if (!Fk || !Fk.panel) return !1;
        let Bk = (0, Rk.G)(kk, xk);
        return Bk && Bk.dom.contains(kk.root.activeElement) && kk.focus(), kk.dispatch({
          effects: Gk.of(!1)
        }), !0
      },
      kF = [{
        key: "Mod-f",
        run: Ik,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: qk,
        shift: Ck,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: qk,
        shift: Ck,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: Qk,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk, Rk = Fk.selection;
          if (Rk.hb.length > 1 || Rk.main.empty) return !1;
          let {
            from: ak,
            to: Xk
          } = Rk.main, wk = [], dk = 0;
          for (let sk = new bk(Fk.doc, Fk.sliceDoc(ak, Xk)); !sk.next().done;) {
            if (wk.length > 1e3) return !1;
            sk.value.from == ak && (dk = wk.length), wk.push(tk.f.range(sk.value.from, sk.value.to))
          }
          return Bk(Fk.update({
            selection: tk.f.create(wk, dk),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: kk => {
          let {
            state: Fk
          } = kk, Bk = String(Fk.doc.lineAt(kk.state.selection.main.head).number), {
            close: ak,
            result: Xk
          } = (0, Rk.db)(kk, {
            label: Fk.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: Bk
            },
            focus: !0,
            submitLabel: Fk.phrase("go")
          });
          return Xk.then((Bk => {
            let Xk = Bk && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(Bk.elements.line.value);
            if (!Xk) return void kk.dispatch({
              effects: ak
            });
            let bk = Fk.doc.lineAt(Fk.selection.main.head),
              [, wk, dk, sk, Vk] = Xk,
              Jk = sk ? +sk.slice(1) : 0,
              Ak = dk ? +dk : bk.number;
            if (dk && Vk) {
              let kk = Ak / 100;
              wk && (kk = kk * ("-" == wk ? -1 : 1) + bk.number / Fk.doc.lines), Ak = Math.round(Fk.doc.lines * kk)
            } else dk && wk && (Ak = Ak * ("-" == wk ? -1 : 1) + bk.number);
            let ek = Fk.doc.line(Math.max(1, Math.min(Fk.doc.lines, Ak))),
              yk = tk.f.cursor(ek.from + Math.max(0, Math.min(Jk, ek.length)));
            kk.dispatch({
              effects: [ak, Rk.l.scrollIntoView(yk.from, {
                y: "center"
              })],
              selection: yk
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk, {
            hb: ak
          } = Fk.selection;
          if (ak.some((kk => kk.from === kk.to))) return (kk => {
            let {
              state: Fk,
              dispatch: Bk
            } = kk, {
              selection: Rk
            } = Fk, ak = tk.f.create(Rk.hb.map((kk => Fk.wordAt(kk.head) || tk.f.cursor(kk.head))), Rk.mainIndex);
            return !ak.eq(Rk) && (Bk(Fk.update({
              selection: ak
            })), !0)
          })({
            state: Fk,
            dispatch: Bk
          });
          let Xk = Fk.sliceDoc(ak[0].from, ak[0].to);
          if (Fk.selection.hb.some((kk => Fk.sliceDoc(kk.from, kk.to) != Xk))) return !1;
          let wk = function(kk, Fk) {
            let {
              main: Bk,
              hb: Rk
            } = kk.selection, tk = kk.wordAt(Bk.head), ak = tk && tk.from == Bk.from && tk.to == Bk.to;
            for (let Xk = !1, wk = new bk(kk.doc, Fk, Rk[Rk.length - 1].to);;) {
              if (wk.next(), !wk.done) {
                if (Xk && Rk.some((kk => kk.from == wk.value.from))) continue;
                if (ak) {
                  let Fk = kk.wordAt(wk.value.from);
                  if (!Fk || Fk.from != wk.value.from || Fk.to != wk.value.to) continue
                }
                return wk.value
              }
              if (Xk) return null;
              wk = new bk(kk.doc, Fk, 0, Math.max(0, Rk[Rk.length - 1].from - 1)), Xk = !0
            }
          }(Fk, Xk);
          return !!wk && (Bk(Fk.update({
            selection: Fk.selection.addRange(tk.f.range(wk.from, wk.to), !1),
            effects: Rk.l.scrollIntoView(wk.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class FF {
      constructor(kk) {
        this.view = kk;
        let Fk = this.query = kk.state.field(Tk).query.spec;

        function Bk(kk, Fk, Bk) {
          return (0, ak.b)("button", {
            class: "cm-button",
            name: kk,
            onclick: Fk,
            type: "button"
          }, Bk)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, ak.b)("input", {
          value: Fk.search,
          placeholder: BF(kk, "Find"),
          "aria-label": BF(kk, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, ak.b)("input", {
          value: Fk.replace,
          placeholder: BF(kk, "Replace"),
          "aria-label": BF(kk, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, ak.b)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: Fk.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, ak.b)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: Fk.regexp,
          onchange: this.commit
        }), this.wordField = (0, ak.b)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: Fk.wholeWord,
          onchange: this.commit
        }), this.dom = (0, ak.b)("div", {
          onkeydown: kk => this.keydown(kk),
          class: "cm-search"
        }, [this.searchField, Bk("next", (() => qk(kk)), [BF(kk, "next")]), Bk("prev", (() => Ck(kk)), [BF(kk, "previous")]), Bk("select", (() => Zk(kk)), [BF(kk, "all")]), (0, ak.b)("label", null, [this.caseField, BF(kk, "match case")]), (0, ak.b)("label", null, [this.reField, BF(kk, "regexp")]), (0, ak.b)("label", null, [this.wordField, BF(kk, "by word")]), ...kk.state.readOnly ? [] : [(0, ak.b)("br"), this.replaceField, Bk("replace", (() => pk(kk)), [BF(kk, "replace")]), Bk("replaceAll", (() => Kk(kk)), [BF(kk, "replace all")])], (0, ak.b)("button", {
          name: "close",
          onclick: () => Qk(kk),
          "aria-label": BF(kk, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let kk = new Ek({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        kk.eq(this.query) || (this.query = kk, this.view.dispatch({
          effects: ck.of(kk)
        }))
      }
      keydown(kk) {
        (0, Rk.cb)(this.view, kk, "search-panel") ? kk.preventDefault(): 13 == kk.keyCode && kk.target == this.searchField ? (kk.preventDefault(), (kk.shiftKey ? Ck : qk)(this.view)) : 13 == kk.keyCode && kk.target == this.replaceField && (kk.preventDefault(), pk(this.view))
      }
      update(kk) {
        for (let Fk of kk.transactions)
          for (let kk of Fk.effects) kk.is(ck) && !kk.value.eq(this.query) && this.setQuery(kk.value)
      }
      setQuery(kk) {
        this.query = kk, this.searchField.value = kk.search, this.replaceField.value = kk.replace, this.caseField.checked = kk.caseSensitive, this.reField.checked = kk.regexp, this.wordField.checked = kk.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(Ok).top
      }
    }

    function BF(kk, Fk) {
      return kk.state.phrase(Fk)
    }
    const RF = 30,
      tF = /[\s\.,:;?!]/;

    function aF(kk, Fk) {
      let {
        from: Bk,
        to: tk
      } = Fk, ak = kk.state.doc.lineAt(Bk), Xk = kk.state.doc.lineAt(tk).to, bk = Math.max(ak.from, Bk - RF), wk = Math.min(Xk, tk + RF), dk = kk.state.sliceDoc(bk, wk);
      if (bk != ak.from)
        for (let Rk = 0; Rk < RF; Rk++)
          if (!tF.test(dk[Rk + 1]) && tF.test(dk[Rk])) {
            dk = dk.slice(Rk);
            break
          } if (wk != Xk)
        for (let Rk = dk.length - 1; Rk > dk.length - RF; Rk--)
          if (!tF.test(dk[Rk - 1]) && tF.test(dk[Rk])) {
            dk = dk.slice(0, Rk);
            break
          } return Rk.l.announce.of(`${kk.state.phrase("current match")}. ${dk} ${kk.state.phrase("on line")} ${ak.number}.`)
    }
    const XF = Rk.l.baseTheme({
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
      bF = [Tk, tk.o.low(Pk), XF]
  },
  40748: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Uk,
      h: () => sF,
      l: () => Nt,
      o: () => bX,
      q: () => nF,
      u: () => Mk,
      y: () => Ma,
      z: () => It,
      C: () => ba,
      G: () => Ia,
      J: () => ja,
      L: () => JX,
      N: () => va,
      M: () => gX,
      O: () => ya,
      S: () => xa,
      W: () => Tt,
      X: () => NX,
      _: () => KF,
      $: () => La,
      bb: () => Na,
      cb: () => zt,
      db: () => RX,
      gb: () => BX,
      hb: () => ha
    });
    for (var Rk = Bk(40741), tk = Bk(40750), ak = {
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
      }, Xk = {
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
      }, bk = "undefined" != typeof navigator && /Mac/.test(navigator.platform), wk = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), dk = 0; dk < 10; dk++) ak[48 + dk] = ak[96 + dk] = String(dk);
    for (dk = 1; dk <= 24; dk++) ak[dk + 111] = "F" + dk;
    for (dk = 65; dk <= 90; dk++) ak[dk] = String.fromCharCode(dk + 32), Xk[dk] = String.fromCharCode(dk);
    for (var sk in ak) Xk.hasOwnProperty(sk) || (Xk[sk] = ak[sk]);
    var Vk = Bk(40755);
    let Jk = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      Ak = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const ek = /Edge\/(\d+)/.exec(Jk.userAgent),
      yk = /MSIE \d/.test(Jk.userAgent),
      fk = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Jk.userAgent),
      mk = !!(yk || fk || ek),
      Wk = !mk && /gecko\/(\d+)/i.test(Jk.userAgent),
      vk = !mk && /Chrome\/(\d+)/.exec(Jk.userAgent),
      ik = "webkitFontSmoothing" in Ak.documentElement.style,
      Yk = !mk && /Apple Computer/.test(Jk.vendor),
      Lk = Yk && (/Mobile\/\w+/.test(Jk.userAgent) || Jk.maxTouchPoints > 2);
    var Ok = {
      mac: Lk || /Mac/.test(Jk.platform),
      windows: /Win/.test(Jk.platform),
      linux: /Linux|X11/.test(Jk.platform),
      ie: mk,
      ie_version: yk ? Ak.documentMode || 6 : fk ? +fk[1] : ek ? +ek[1] : 0,
      gecko: Wk,
      gecko_version: Wk ? +(/Firefox\/(\d+)/.exec(Jk.userAgent) || [0, 0])[1] : 0,
      chrome: !!vk,
      chrome_version: vk ? +vk[1] : 0,
      ios: Lk,
      android: /Android\b/.test(Jk.userAgent),
      webkit: ik,
      webkit_version: ik ? +(/\bAppleWebKit\/(\d+)/.exec(Jk.userAgent) || [0, 0])[1] : 0,
      safari: Yk,
      safari_version: Yk ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Jk.userAgent) || [0, 0])[1] : 0,
      tabSize: null != Ak.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function Ek(kk, Fk) {
      for (let Bk in kk) "class" == Bk && Fk.class ? Fk.class += " " + kk.class : "style" == Bk && Fk.style ? Fk.style += ";" + kk.style : Fk[Bk] = kk[Bk];
      return Fk
    }
    const Sk = Object.create(null);

    function Nk(kk, Fk, Bk) {
      if (kk == Fk) return !0;
      kk || (kk = Sk), Fk || (Fk = Sk);
      let Rk = Object.keys(kk),
        tk = Object.keys(Fk);
      if (Rk.length - (Bk && Rk.indexOf(Bk) > -1 ? 1 : 0) != tk.length - (Bk && tk.indexOf(Bk) > -1 ? 1 : 0)) return !1;
      for (let ak of Rk)
        if (ak != Bk && (-1 == tk.indexOf(ak) || kk[ak] !== Fk[ak])) return !1;
      return !0
    }

    function Hk(kk, Fk, Bk) {
      let Rk = !1;
      if (Fk)
        for (let tk in Fk) Bk && tk in Bk || (Rk = !0, "style" == tk ? kk.style.cssText = "" : kk.removeAttribute(tk));
      if (Bk)
        for (let tk in Bk) Fk && Fk[tk] == Bk[tk] || (Rk = !0, "style" == tk ? kk.style.cssText = Bk[tk] : kk.setAttribute(tk, Bk[tk]));
      return Rk
    }

    function uk(kk) {
      let Fk = Object.create(null);
      for (let Bk = 0; Bk < kk.attributes.length; Bk++) {
        let Rk = kk.attributes[Bk];
        Fk[Rk.name] = Rk.value
      }
      return Fk
    }
    class Mk {
      eq(kk) {
        return !1
      }
      updateDOM(kk, Fk, Bk) {
        return !1
      }
      compare(kk) {
        return this == kk || this.constructor == kk.constructor && this.eq(kk)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(kk) {
        return !0
      }
      coordsAt(kk, Fk, Bk) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(kk) {}
    }
    var gk = function(kk) {
      return kk[kk.Text = 0] = "Text", kk[kk.WidgetBefore = 1] = "WidgetBefore", kk[kk.WidgetAfter = 2] = "WidgetAfter", kk[kk.WidgetRange = 3] = "WidgetRange", kk
    }(gk || (gk = {}));
    class Uk extends Rk.v {
      constructor(kk, Fk, Bk, Rk) {
        super(), this.startSide = kk, this.endSide = Fk, this.widget = Bk, this.spec = Rk
      }
      get heightRelevant() {
        return !1
      }
      static mark(kk) {
        return new ck(kk)
      }
      static widget(kk) {
        let Fk = Math.max(-1e4, Math.min(1e4, kk.side || 0)),
          Bk = !!kk.block;
        return Fk += Bk && !kk.inlineOrder ? Fk > 0 ? 3e8 : -4e8 : Fk > 0 ? 1e8 : -1e8, new Tk(kk, Fk, Fk, Bk, kk.widget || null, !1)
      }
      static replace(kk) {
        let Fk, Bk, Rk = !!kk.block;
        if (kk.isBlockGap) Fk = -5e8, Bk = 4e8;
        else {
          let {
            start: tk,
            end: ak
          } = rk(kk, Rk);
          Fk = (tk ? Rk ? -3e8 : -1 : 5e8) - 1, Bk = 1 + (ak ? Rk ? 2e8 : 1 : -6e8)
        }
        return new Tk(kk, Fk, Bk, Rk, kk.widget || null, !0)
      }
      static line(kk) {
        return new Gk(kk)
      }
      static set(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Rk.u.of(kk, Fk)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Uk.none = Rk.u.empty;
    class ck extends Uk {
      constructor(kk) {
        let {
          start: Fk,
          end: Bk
        } = rk(kk);
        super(Fk ? -1 : 5e8, Bk ? 1 : -6e8, null, kk), this.tagName = kk.tagName || "span", this.attrs = kk.class && kk.attributes ? Ek(kk.attributes, {
          class: kk.class
        }) : kk.class ? {
          class: kk.class
        } : kk.attributes || Sk
      }
      eq(kk) {
        return this == kk || kk instanceof ck && this.tagName == kk.tagName && Nk(this.attrs, kk.attrs)
      }
      range(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        if (kk >= Fk) throw new RangeError("Mark decorations may not be empty");
        return super.range(kk, Fk)
      }
    }
    ck.prototype.point = !1;
    class Gk extends Uk {
      constructor(kk) {
        super(-2e8, -2e8, null, kk)
      }
      eq(kk) {
        return kk instanceof Gk && this.spec.class == kk.spec.class && Nk(this.spec.attributes, kk.spec.attributes)
      }
      range(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        if (Fk != kk) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(kk, Fk)
      }
    }
    Gk.prototype.mapMode = Rk.l.TrackBefore, Gk.prototype.point = !0;
    class Tk extends Uk {
      constructor(kk, Fk, Bk, tk, ak, Xk) {
        super(Fk, Bk, ak, kk), this.block = tk, this.isReplace = Xk, this.mapMode = tk ? Fk <= 0 ? Rk.l.TrackBefore : Rk.l.TrackAfter : Rk.l.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? gk.WidgetRange : this.startSide <= 0 ? gk.WidgetBefore : gk.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(kk) {
        return kk instanceof Tk && (Fk = this.widget, Bk = kk.widget, Fk == Bk || !!(Fk && Bk && Fk.compare(Bk))) && this.block == kk.block && this.startSide == kk.startSide && this.endSide == kk.endSide;
        var Fk, Bk
      }
      range(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        if (this.isReplace && (kk > Fk || kk == Fk && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && Fk != kk) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(kk, Fk)
      }
    }

    function rk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: Bk,
          inclusiveEnd: Rk
        } = kk;
      return null == Bk && (Bk = kk.inclusive), null == Rk && (Rk = kk.inclusive), {
        start: null !== Bk && void 0 !== Bk ? Bk : Fk,
        end: null !== Rk && void 0 !== Rk ? Rk : Fk
      }
    }

    function Dk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        tk = Bk.length - 1;
      tk >= 0 && Bk[tk] + Rk >= kk ? Bk[tk] = Math.max(Bk[tk], Fk) : Bk.push(kk, Fk)
    }
    Tk.prototype.point = !0;
    class zk extends Rk.v {
      constructor(kk, Fk) {
        super(), this.tagName = kk, this.attributes = Fk
      }
      eq(kk) {
        return kk == this || kk instanceof zk && this.tagName == kk.tagName && Nk(this.attributes, kk.attributes)
      }
      static create(kk) {
        return new zk(kk.tagName, kk.attributes || Sk)
      }
      static set(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Rk.u.of(kk, Fk)
      }
    }

    function Pk(kk) {
      let Fk;
      return Fk = 11 == kk.nodeType ? kk.getSelection ? kk : kk.ownerDocument : kk, Fk.getSelection()
    }

    function hk(kk, Fk) {
      return !!Fk && (kk == Fk || kk.contains(1 != Fk.nodeType ? Fk.parentNode : Fk))
    }

    function qk(kk, Fk) {
      if (!Fk.anchorNode) return !1;
      try {
        return hk(kk, Fk.anchorNode)
      } catch (Bk) {
        return !1
      }
    }

    function Ck(kk) {
      return 3 == kk.nodeType ? tF(kk, 0, kk.nodeValue.length).getClientRects() : 1 == kk.nodeType ? kk.getClientRects() : []
    }

    function Zk(kk, Fk, Bk, Rk) {
      return !!Bk && (xk(kk, Fk, Bk, Rk, -1) || xk(kk, Fk, Bk, Rk, 1))
    }

    function pk(kk) {
      for (var Fk = 0;; Fk++)
        if (!(kk = kk.previousSibling)) return Fk
    }

    function Kk(kk) {
      return 1 == kk.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(kk.nodeName)
    }

    function xk(kk, Fk, Bk, Rk, tk) {
      for (;;) {
        if (kk == Bk && Fk == Rk) return !0;
        if (Fk == (tk < 0 ? 0 : jk(kk))) {
          if ("DIV" == kk.nodeName) return !1;
          let Bk = kk.parentNode;
          if (!Bk || 1 != Bk.nodeType) return !1;
          Fk = pk(kk) + (tk < 0 ? 0 : 1), kk = Bk
        } else {
          if (1 != kk.nodeType) return !1;
          if (1 == (kk = kk.childNodes[Fk + (tk < 0 ? -1 : 0)]).nodeType && "false" == kk.contentEditable) return !1;
          Fk = tk < 0 ? jk(kk) : 0
        }
      }
    }

    function jk(kk) {
      return 3 == kk.nodeType ? kk.nodeValue.length : kk.childNodes.length
    }

    function lk(kk, Fk) {
      let Bk = Fk ? kk.left : kk.right;
      return {
        left: Bk,
        right: Bk,
        top: kk.top,
        bottom: kk.bottom
      }
    }

    function nk(kk) {
      let Fk = kk.visualViewport;
      return Fk ? {
        left: 0,
        right: Fk.width,
        top: 0,
        bottom: Fk.height
      } : {
        left: 0,
        right: kk.innerWidth,
        top: 0,
        bottom: kk.innerHeight
      }
    }

    function Ik(kk, Fk) {
      let Bk = Fk.width / kk.offsetWidth,
        Rk = Fk.height / kk.offsetHeight;
      return (Bk > .995 && Bk < 1.005 || !isFinite(Bk) || Math.abs(Fk.width - kk.offsetWidth) < 1) && (Bk = 1), (Rk > .995 && Rk < 1.005 || !isFinite(Rk) || Math.abs(Fk.height - kk.offsetHeight) < 1) && (Rk = 1), {
        scaleX: Bk,
        scaleY: Rk
      }
    }

    function Qk(kk) {
      let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        Bk = kk.ownerDocument,
        Rk = null,
        tk = null;
      for (let ak = kk.parentNode; ak && (ak != Bk.body && (Fk && !Rk || !tk));)
        if (1 == ak.nodeType) !tk && ak.scrollHeight > ak.clientHeight && (tk = ak), Fk && !Rk && ak.scrollWidth > ak.clientWidth && (Rk = ak), ak = ak.assignedSlot || ak.parentNode;
        else {
          if (11 != ak.nodeType) break;
          ak = ak.host
        } return {
        x: Rk,
        y: tk
      }
    }
    zk.prototype.startSide = zk.prototype.endSide = -1;
    class kF {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(kk) {
        return this.anchorNode == kk.anchorNode && this.anchorOffset == kk.anchorOffset && this.focusNode == kk.focusNode && this.focusOffset == kk.focusOffset
      }
      setRange(kk) {
        let {
          anchorNode: Fk,
          focusNode: Bk
        } = kk;
        this.set(Fk, Math.min(kk.anchorOffset, Fk ? jk(Fk) : 0), Bk, Math.min(kk.focusOffset, Bk ? jk(Bk) : 0))
      }
      set(kk, Fk, Bk, Rk) {
        this.anchorNode = kk, this.anchorOffset = Fk, this.focusNode = Bk, this.focusOffset = Rk
      }
    }
    let FF, BF = null;

    function RF(kk) {
      if (kk.setActive) return kk.setActive();
      if (BF) return kk.focus(BF);
      let Fk = [];
      for (let Bk = kk; Bk && (Fk.push(Bk, Bk.scrollTop, Bk.scrollLeft), Bk != Bk.ownerDocument); Bk = Bk.parentNode);
      if (kk.focus(null == BF ? {
          get preventScroll() {
            return BF = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !BF) {
        BF = !1;
        for (let kk = 0; kk < Fk.length;) {
          let Bk = Fk[kk++],
            Rk = Fk[kk++],
            tk = Fk[kk++];
          Bk.scrollTop != Rk && (Bk.scrollTop = Rk), Bk.scrollLeft != tk && (Bk.scrollLeft = tk)
        }
      }
    }

    function tF(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fk,
        Rk = FF || (FF = document.createRange());
      return Rk.setEnd(kk, Bk), Rk.setStart(kk, Fk), Rk
    }

    function aF(kk, Fk, Bk, Rk) {
      let tk = {
        key: Fk,
        code: Fk,
        keyCode: Bk,
        which: Bk,
        cancelable: !0
      };
      Rk && ({
        altKey: tk.altKey,
        ctrlKey: tk.ctrlKey,
        shiftKey: tk.shiftKey,
        metaKey: tk.metaKey
      } = Rk);
      let ak = new KeyboardEvent("keydown", tk);
      ak.synthetic = !0, kk.dispatchEvent(ak);
      let Xk = new KeyboardEvent("keyup", tk);
      return Xk.synthetic = !0, kk.dispatchEvent(Xk), ak.defaultPrevented || Xk.defaultPrevented
    }

    function XF(kk) {
      return kk instanceof Window ? kk.pageYOffset > Math.max(0, kk.document.documentElement.scrollHeight - kk.innerHeight - 4) : kk.scrollTop > Math.max(1, kk.scrollHeight - kk.clientHeight - 4)
    }

    function bF(kk, Fk) {
      for (let Bk = kk, Rk = Fk;;) {
        if (3 == Bk.nodeType && Rk > 0) return {
          node: Bk,
          offset: Rk
        };
        if (1 == Bk.nodeType && Rk > 0) {
          if ("false" == Bk.contentEditable) return null;
          Bk = Bk.childNodes[Rk - 1], Rk = jk(Bk)
        } else {
          if (!Bk.parentNode || Kk(Bk)) return null;
          Rk = pk(Bk), Bk = Bk.parentNode
        }
      }
    }

    function wF(kk, Fk) {
      for (let Bk = kk, Rk = Fk;;) {
        if (3 == Bk.nodeType && Rk < Bk.nodeValue.length) return {
          node: Bk,
          offset: Rk
        };
        if (1 == Bk.nodeType && Rk < Bk.childNodes.length) {
          if ("false" == Bk.contentEditable) return null;
          Bk = Bk.childNodes[Rk], Rk = 0
        } else {
          if (!Bk.parentNode || Kk(Bk)) return null;
          Rk = pk(Bk) + 1, Bk = Bk.parentNode
        }
      }
    }
    Ok.safari && Ok.safari_version >= 26 && (BF = !1);
    class dF {
      constructor(kk, Fk) {
        let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = kk, this.offset = Fk, this.precise = Bk
      }
      static before(kk, Fk) {
        return new dF(kk.parentNode, pk(kk), Fk)
      }
      static after(kk, Fk) {
        return new dF(kk.parentNode, pk(kk) + 1, Fk)
      }
    }
    var sF = function(kk) {
      return kk[kk.LTR = 0] = "LTR", kk[kk.RTL = 1] = "RTL", kk
    }(sF || (sF = {}));
    const VF = sF.LTR,
      JF = sF.RTL;

    function AF(kk) {
      let Fk = [];
      for (let Bk = 0; Bk < kk.length; Bk++) Fk.push(1 << +kk[Bk]);
      return Fk
    }
    const eF = AF("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      yF = AF("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      fF = Object.create(null),
      mF = [];
    for (let UX of ["()", "[]", "{}"]) {
      let kk = UX.charCodeAt(0),
        Fk = UX.charCodeAt(1);
      fF[kk] = Fk, fF[Fk] = -kk
    }

    function WF(kk) {
      return kk <= 247 ? eF[kk] : 1424 <= kk && kk <= 1524 ? 2 : 1536 <= kk && kk <= 1785 ? yF[kk - 1536] : 1774 <= kk && kk <= 2220 ? 4 : 8192 <= kk && kk <= 8204 ? 256 : 64336 <= kk && kk <= 65023 ? 4 : 1
    }
    const vF = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class iF {
      get dir() {
        return this.level % 2 ? JF : VF
      }
      constructor(kk, Fk, Bk) {
        this.from = kk, this.to = Fk, this.level = Bk
      }
      side(kk, Fk) {
        return this.dir == Fk == kk ? this.to : this.from
      }
      forward(kk, Fk) {
        return kk == (this.dir == Fk)
      }
      static find(kk, Fk, Bk, Rk) {
        let tk = -1;
        for (let ak = 0; ak < kk.length; ak++) {
          let Xk = kk[ak];
          if (Xk.from <= Fk && Xk.to >= Fk) {
            if (Xk.level == Bk) return ak;
            (tk < 0 || (0 != Rk ? Rk < 0 ? Xk.from < Fk : Xk.to > Fk : kk[tk].level > Xk.level)) && (tk = ak)
          }
        }
        if (tk < 0) throw new RangeError("Index out of range");
        return tk
      }
    }

    function YF(kk, Fk) {
      if (kk.length != Fk.length) return !1;
      for (let Bk = 0; Bk < kk.length; Bk++) {
        let Rk = kk[Bk],
          tk = Fk[Bk];
        if (Rk.from != tk.from || Rk.to != tk.to || Rk.direction != tk.direction || !YF(Rk.inner, tk.inner)) return !1
      }
      return !0
    }
    const oF = [];

    function LF(kk, Fk, Bk, Rk, tk, ak, Xk) {
      let bk = Rk % 2 ? 2 : 1;
      if (Rk % 2 == tk % 2)
        for (let wk = Fk, dk = 0; wk < Bk;) {
          let Fk = !0,
            sk = !1;
          if (dk == ak.length || wk < ak[dk].from) {
            let kk = oF[wk];
            kk != bk && (Fk = !1, sk = 16 == kk)
          }
          let Vk = Fk || 1 != bk ? null : [],
            Jk = Fk ? Rk : Rk + 1,
            Ak = wk;
          kk: for (;;)
            if (dk < ak.length && Ak == ak[dk].from) {
              if (sk) break kk;
              let ek = ak[dk];
              if (!Fk)
                for (let kk = ek.to, Fk = dk + 1;;) {
                  if (kk == Bk) break kk;
                  if (!(Fk < ak.length && ak[Fk].from == kk)) {
                    if (oF[kk] == bk) break kk;
                    break
                  }
                  kk = ak[Fk++].to
                }
              if (dk++, Vk) Vk.push(ek);
              else {
                ek.from > wk && Xk.push(new iF(wk, ek.from, Jk)), OF(kk, ek.direction == VF != !(Jk % 2) ? Rk + 1 : Rk, tk, ek.inner, ek.from, ek.to, Xk), wk = ek.to
              }
              Ak = ek.to
            } else {
              if (Ak == Bk || (Fk ? oF[Ak] != bk : oF[Ak] == bk)) break;
              Ak++
            } Vk ? LF(kk, wk, Ak, Rk + 1, tk, Vk, Xk) : wk < Ak && Xk.push(new iF(wk, Ak, Jk)), wk = Ak
        } else
          for (let wk = Bk, dk = ak.length; wk > Fk;) {
            let Bk = !0,
              sk = !1;
            if (!dk || wk > ak[dk - 1].to) {
              let kk = oF[wk - 1];
              kk != bk && (Bk = !1, sk = 16 == kk)
            }
            let Vk = Bk || 1 != bk ? null : [],
              Jk = Bk ? Rk : Rk + 1,
              Ak = wk;
            kk: for (;;)
              if (dk && Ak == ak[dk - 1].to) {
                if (sk) break kk;
                let ek = ak[--dk];
                if (!Bk)
                  for (let kk = ek.from, Bk = dk;;) {
                    if (kk == Fk) break kk;
                    if (!Bk || ak[Bk - 1].to != kk) {
                      if (oF[kk - 1] == bk) break kk;
                      break
                    }
                    kk = ak[--Bk].from
                  }
                if (Vk) Vk.push(ek);
                else {
                  ek.to < wk && Xk.push(new iF(ek.to, wk, Jk)), OF(kk, ek.direction == VF != !(Jk % 2) ? Rk + 1 : Rk, tk, ek.inner, ek.from, ek.to, Xk), wk = ek.from
                }
                Ak = ek.from
              } else {
                if (Ak == Fk || (Bk ? oF[Ak - 1] != bk : oF[Ak - 1] == bk)) break;
                Ak--
              } Vk ? LF(kk, Ak, wk, Rk + 1, tk, Vk, Xk) : Ak < wk && Xk.push(new iF(Ak, wk, Jk)), wk = Ak
          }
    }

    function OF(kk, Fk, Bk, Rk, tk, ak, Xk) {
      let bk = Fk % 2 ? 2 : 1;
      ! function(kk, Fk, Bk, Rk, tk) {
        for (let ak = 0; ak <= Rk.length; ak++) {
          let Xk = ak ? Rk[ak - 1].to : Fk,
            bk = ak < Rk.length ? Rk[ak].from : Bk,
            wk = ak ? 256 : tk;
          for (let Fk = Xk, Bk = wk, Rk = wk; Fk < bk; Fk++) {
            let tk = WF(kk.charCodeAt(Fk));
            512 == tk ? tk = Bk : 8 == tk && 4 == Rk && (tk = 16), oF[Fk] = 4 == tk ? 2 : tk, 7 & tk && (Rk = tk), Bk = tk
          }
          for (let kk = Xk, Fk = wk, Rk = wk; kk < bk; kk++) {
            let tk = oF[kk];
            if (128 == tk) kk < bk - 1 && Fk == oF[kk + 1] && 24 & Fk ? tk = oF[kk] = Fk : oF[kk] = 256;
            else if (64 == tk) {
              let tk = kk + 1;
              for (; tk < bk && 64 == oF[tk];) tk++;
              let ak = kk && 8 == Fk || tk < Bk && 8 == oF[tk] ? 1 == Rk ? 1 : 8 : 256;
              for (let Fk = kk; Fk < tk; Fk++) oF[Fk] = ak;
              kk = tk - 1
            } else 8 == tk && 1 == Rk && (oF[kk] = 1);
            Fk = tk, 7 & tk && (Rk = tk)
          }
        }
      }(kk, tk, ak, Rk, bk),
      function(kk, Fk, Bk, Rk, tk) {
        let ak = 1 == tk ? 2 : 1;
        for (let Xk = 0, bk = 0, wk = 0; Xk <= Rk.length; Xk++) {
          let dk = Xk ? Rk[Xk - 1].to : Fk,
            sk = Xk < Rk.length ? Rk[Xk].from : Bk;
          for (let Fk, Bk, Rk, Xk = dk; Xk < sk; Xk++)
            if (Bk = fF[Fk = kk.charCodeAt(Xk)])
              if (Bk < 0) {
                for (let kk = bk - 3; kk >= 0; kk -= 3)
                  if (mF[kk + 1] == -Bk) {
                    let Fk = mF[kk + 2],
                      Bk = 2 & Fk ? tk : 4 & Fk ? 1 & Fk ? ak : tk : 0;
                    Bk && (oF[Xk] = oF[mF[kk]] = Bk), bk = kk;
                    break
                  }
              } else {
                if (189 == mF.length) break;
                mF[bk++] = Xk, mF[bk++] = Fk, mF[bk++] = wk
              }
          else if (2 == (Rk = oF[Xk]) || 1 == Rk) {
            let kk = Rk == tk;
            wk = kk ? 0 : 1;
            for (let Fk = bk - 3; Fk >= 0; Fk -= 3) {
              let Bk = mF[Fk + 2];
              if (2 & Bk) break;
              if (kk) mF[Fk + 2] |= 2;
              else {
                if (4 & Bk) break;
                mF[Fk + 2] |= 4
              }
            }
          }
        }
      }(kk, tk, ak, Rk, bk),
      function(kk, Fk, Bk, Rk) {
        for (let tk = 0, ak = Rk; tk <= Bk.length; tk++) {
          let Xk = tk ? Bk[tk - 1].to : kk,
            bk = tk < Bk.length ? Bk[tk].from : Fk;
          for (let wk = Xk; wk < bk;) {
            let Xk = oF[wk];
            if (256 == Xk) {
              let Xk = wk + 1;
              for (;;)
                if (Xk == bk) {
                  if (tk == Bk.length) break;
                  Xk = Bk[tk++].to, bk = tk < Bk.length ? Bk[tk].from : Fk
                } else {
                  if (256 != oF[Xk]) break;
                  Xk++
                } let dk = 1 == ak,
                sk = dk == (1 == (Xk < Fk ? oF[Xk] : Rk)) ? dk ? 1 : 2 : Rk;
              for (let Fk = Xk, Rk = tk, ak = Rk ? Bk[Rk - 1].to : kk; Fk > wk;) Fk == ak && (Fk = Bk[--Rk].from, ak = Rk ? Bk[Rk - 1].to : kk), oF[--Fk] = sk;
              wk = Xk
            } else ak = Xk, wk++
          }
        }
      }(tk, ak, Rk, bk), LF(kk, tk, ak, Fk, Bk, Rk, Xk)
    }

    function EF(kk, Fk, Bk) {
      if (!kk) return [new iF(0, 0, Fk == JF ? 1 : 0)];
      if (Fk == VF && !Bk.length && !vF.test(kk)) return SF(kk.length);
      if (Bk.length)
        for (; kk.length > oF.length;) oF[oF.length] = 256;
      let Rk = [],
        tk = Fk == VF ? 0 : 1;
      return OF(kk, tk, tk, Bk, 0, kk.length, Rk), Rk
    }

    function SF(kk) {
      return [new iF(0, kk, 0)]
    }
    let NF = "";

    function HF(kk, Fk, Bk, tk, ak) {
      var Xk;
      let bk = tk.head - kk.from,
        wk = iF.find(Fk, bk, null !== (Xk = tk.bidiLevel) && void 0 !== Xk ? Xk : -1, tk.assoc),
        dk = Fk[wk],
        sk = dk.side(ak, Bk);
      if (bk == sk) {
        let kk = wk += ak ? 1 : -1;
        if (kk < 0 || kk >= Fk.length) return null;
        dk = Fk[wk = kk], bk = dk.side(!ak, Bk), sk = dk.side(ak, Bk)
      }
      let Vk = (0, Rk.N)(kk.text, bk, dk.forward(ak, Bk));
      (Vk < dk.from || Vk > dk.to) && (Vk = sk), NF = kk.text.slice(Math.min(bk, Vk), Math.max(bk, Vk));
      let Jk = wk == (ak ? Fk.length - 1 : 0) ? null : Fk[wk + (ak ? 1 : -1)];
      return Jk && Vk == sk && Jk.level + (ak ? 0 : 1) < dk.level ? Rk.f.cursor(Jk.side(!ak, Bk) + kk.from, Jk.forward(ak, Bk) ? 1 : -1, Jk.level) : Rk.f.cursor(Vk + kk.from, dk.forward(ak, Bk) ? -1 : 1, dk.level)
    }

    function uF(kk, Fk, Bk) {
      for (let Rk = Fk; Rk < Bk; Rk++) {
        let Fk = WF(kk.charCodeAt(Rk));
        if (1 == Fk) return VF;
        if (2 == Fk || 4 == Fk) return JF
      }
      return VF
    }
    const MF = Rk.i.define(),
      gF = Rk.i.define(),
      UF = Rk.i.define(),
      cF = Rk.i.define(),
      GF = Rk.i.define(),
      TF = Rk.i.define(),
      rF = Rk.i.define(),
      DF = Rk.i.define(),
      zF = Rk.i.define(),
      PF = Rk.i.define({
        combine: kk => kk.some((kk => kk))
      }),
      hF = Rk.i.define({
        combine: kk => kk.some((kk => kk))
      }),
      qF = Rk.i.define();
    class CF {
      constructor(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = kk, this.y = Fk, this.x = Bk, this.yMargin = Rk, this.xMargin = tk, this.isSnapshot = ak
      }
      map(kk) {
        return kk.empty ? this : new CF(this.range.map(kk), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(kk) {
        return this.range.to <= kk.doc.length ? this : new CF(Rk.f.cursor(kk.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const ZF = Rk.z.define({
        map: (kk, Fk) => kk.map(Fk)
      }),
      pF = Rk.z.define();

    function KF(kk, Fk, Bk) {
      let Rk = kk.facet(cF);
      Rk.length ? Rk[0](Fk) : window.onerror && window.onerror(String(Fk), Bk, void 0, void 0, Fk) || (Bk ? console.error(Bk + ":", Fk) : console.error(Fk))
    }
    const xF = Rk.i.define({
      combine: kk => !kk.length || kk[0]
    });
    let jF = 0;
    const lF = Rk.i.define({
      combine: kk => kk.filter(((Fk, Bk) => {
        for (let Rk = 0; Rk < Bk; Rk++)
          if (kk[Rk].plugin == Fk.plugin) return !1;
        return !0
      }))
    });
    class nF {
      constructor(kk, Fk, Bk, Rk, tk) {
        this.id = kk, this.create = Fk, this.domEventHandlers = Bk, this.domEventObservers = Rk, this.baseExtensions = tk(this), this.extension = this.baseExtensions.concat(lF.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(kk) {
        return this.baseExtensions.concat(lF.of({
          plugin: this,
          arg: kk
        }))
      }
      static define(kk, Fk) {
        const {
          eventHandlers: Bk,
          eventObservers: Rk,
          provide: tk,
          uR: ak
        } = Fk || {};
        return new nF(jF++, kk, Bk, Rk, (kk => {
          let Fk = [];
          return ak && Fk.push(FB.of((Fk => {
            let Bk = Fk.plugin(kk);
            return Bk ? ak(Bk) : Uk.none
          }))), tk && Fk.push(tk(kk)), Fk
        }))
      }
      static fromClass(kk, Fk) {
        return nF.define(((Fk, Bk) => new kk(Fk, Bk)), Fk)
      }
    }
    class IF {
      constructor(kk) {
        this.spec = kk, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(kk) {
        if (this.value) {
          if (this.mustUpdate) {
            let kk = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(kk)
            } catch (Fk) {
              if (KF(kk.state, Fk, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (Bk) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(kk, this.spec.arg)
        } catch (Fk) {
          KF(kk.state, Fk, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(kk) {
        var Fk;
        if (null === (Fk = this.value) || void 0 === Fk ? void 0 : Fk.destroy) try {
          this.value.destroy()
        } catch (Bk) {
          KF(kk.state, Bk, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const QF = Rk.i.define(),
      kB = Rk.i.define(),
      FB = Rk.i.define(),
      BB = Rk.i.define(),
      RB = Rk.i.define(),
      tB = Rk.i.define(),
      aB = Rk.i.define();

    function XB(kk, Fk) {
      let Bk = kk.state.facet(aB);
      if (!Bk.length) return Bk;
      let tk = Bk.map((Fk => Fk instanceof Function ? Fk(kk) : Fk)),
        ak = [];
      return Rk.u.spans(tk, Fk.from, Fk.to, {
        point() {},
        span(kk, Bk, Rk, tk) {
          let Xk = kk - Fk.from,
            bk = Bk - Fk.from,
            wk = ak;
          for (let ak = Rk.length - 1; ak >= 0; ak--, tk--) {
            let kk, Bk = Rk[ak].spec.bidiIsolate;
            if (null == Bk && (Bk = uF(Fk.text, Xk, bk)), tk > 0 && wk.length && (kk = wk[wk.length - 1]).to == Xk && kk.direction == Bk) kk.to = bk, wk = kk.inner;
            else {
              let kk = {
                from: Xk,
                to: bk,
                direction: Bk,
                inner: []
              };
              wk.push(kk), wk = kk.inner
            }
          }
        }
      }), ak
    }
    const bB = Rk.i.define();

    function wB(kk) {
      let Fk = 0,
        Bk = 0,
        Rk = 0,
        tk = 0;
      for (let ak of kk.state.facet(bB)) {
        let Xk = ak(kk);
        Xk && (null != Xk.left && (Fk = Math.max(Fk, Xk.left)), null != Xk.right && (Bk = Math.max(Bk, Xk.right)), null != Xk.top && (Rk = Math.max(Rk, Xk.top)), null != Xk.bottom && (tk = Math.max(tk, Xk.bottom)))
      }
      return {
        left: Fk,
        right: Bk,
        top: Rk,
        bottom: tk
      }
    }
    const dB = Rk.i.define();
    class sB {
      constructor(kk, Fk, Bk, Rk) {
        this.fromA = kk, this.toA = Fk, this.fromB = Bk, this.toB = Rk
      }
      join(kk) {
        return new sB(Math.min(this.fromA, kk.fromA), Math.max(this.toA, kk.toA), Math.min(this.fromB, kk.fromB), Math.max(this.toB, kk.toB))
      }
      addToSet(kk) {
        let Fk = kk.length,
          Bk = this;
        for (; Fk > 0; Fk--) {
          let Rk = kk[Fk - 1];
          if (!(Rk.fromA > Bk.toA)) {
            if (Rk.toA < Bk.fromA) break;
            Bk = Bk.join(Rk), kk.splice(Fk - 1, 1)
          }
        }
        return kk.splice(Fk, 0, Bk), kk
      }
      static extendWithRanges(kk, Fk) {
        if (0 == Fk.length) return kk;
        let Bk = [];
        for (let Rk = 0, tk = 0, ak = 0;;) {
          let Xk = Rk < kk.length ? kk[Rk].fromB : 1e9,
            bk = tk < Fk.length ? Fk[tk] : 1e9,
            wk = Math.min(Xk, bk);
          if (1e9 == wk) break;
          let dk = wk + ak,
            sk = wk,
            Vk = dk;
          for (;;)
            if (tk < Fk.length && Fk[tk] <= sk) {
              let Bk = Fk[tk + 1];
              tk += 2, sk = Math.max(sk, Bk);
              for (let Fk = Rk; Fk < kk.length && kk[Fk].fromB <= sk; Fk++) ak = kk[Fk].toA - kk[Fk].toB;
              Vk = Math.max(Vk, Bk + ak)
            } else {
              if (!(Rk < kk.length && kk[Rk].fromB <= sk)) break;
              {
                let Fk = kk[Rk++];
                sk = Math.max(sk, Fk.toB), Vk = Math.max(Vk, Fk.toA), ak = Fk.toA - Fk.toB
              }
            } Bk.push(new sB(dk, Vk, wk, sk))
        }
        return Bk
      }
    }
    class VB {
      constructor(kk, Fk, Bk) {
        this.view = kk, this.state = Fk, this.transactions = Bk, this.flags = 0, this.startState = kk.state, this.changes = Rk.ChangeSet.empty(this.startState.doc.length);
        for (let Rk of Bk) this.changes = this.changes.compose(Rk.changes);
        let tk = [];
        this.changes.iterChangedRanges(((kk, Fk, Bk, Rk) => tk.push(new sB(kk, Fk, Bk, Rk)))), this.changedRanges = tk
      }
      static create(kk, Fk, Bk) {
        return new VB(kk, Fk, Bk)
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
        return this.transactions.some((kk => kk.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const JB = [];
    class AB {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = kk, this.length = Fk, this.flags = Bk, this.parent = null, kk.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return JB
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
      sync(kk) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let kk = this.domAttrs;
          kk && function(kk, Fk) {
            for (let Bk = kk.attributes.length - 1; Bk >= 0; Bk--) {
              let Rk = kk.attributes[Bk].name;
              null == Fk[Rk] && kk.removeAttribute(Rk)
            }
            for (let Bk in Fk) {
              let Rk = Fk[Bk];
              "style" == Bk ? kk.style.cssText = Rk : kk.getAttribute(Bk) != Rk && kk.setAttribute(Bk, Rk)
            }
          }(this.dom, kk)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(kk) {
        this.dom = kk, kk.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let Bk of this.children) {
          if (Bk == kk) return Fk;
          Fk += Bk.length + Bk.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(kk) {
        return this.posBefore(kk) + kk.length
      }
      covers(kk) {
        return !0
      }
      coordsIn(kk, Fk) {
        return null
      }
      domPosFor(kk, Fk) {
        let Bk = pk(this.dom),
          Rk = this.length ? kk > 0 : Fk > 0;
        return new dF(this.parent.dom, Bk + (Rk ? 1 : 0), 0 == kk || kk == this.length)
      }
      markDirty(kk) {
        this.flags &= -3, kk && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let kk = this; kk; kk = kk.parent)
          if (kk instanceof fB) return kk;
        return null
      }
      static get(kk) {
        return kk.cmTile
      }
    }
    class eB extends AB {
      constructor(kk) {
        super(kk, 0), this._children = []
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
      append(kk) {
        this.children.push(kk), kk.parent = this
      }
      sync(kk) {
        if (2 & this.flags) return;
        super.sync(kk);
        let Fk, Bk = this.dom,
          Rk = null,
          tk = (null === kk || void 0 === kk ? void 0 : kk.node) == Bk ? kk : null,
          ak = 0;
        for (let Xk of this.children) {
          if (Xk.sync(kk), ak += Xk.length + Xk.breakAfter, Fk = Rk ? Rk.nextSibling : Bk.firstChild, tk && Fk != Xk.dom && (tk.written = !0), Xk.dom.parentNode == Bk)
            for (; Fk && Fk != Xk.dom;) Fk = yB(Fk);
          else Bk.insertBefore(Xk.dom, Fk);
          Rk = Xk.dom
        }
        for (Fk = Rk ? Rk.nextSibling : Bk.firstChild, tk && Fk && (tk.written = !0); Fk;) Fk = yB(Fk);
        this.length = ak
      }
    }

    function yB(kk) {
      let Fk = kk.nextSibling;
      return kk.parentNode.removeChild(kk), Fk
    }
    class fB extends eB {
      constructor(kk, Fk) {
        super(Fk), this.view = kk
      }
      owns(kk) {
        for (; kk; kk = kk.parent)
          if (kk == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(kk) {
        for (;;) {
          if (!kk) return null;
          let Fk = AB.get(kk);
          if (Fk && this.owns(Fk)) return Fk;
          kk = kk.parentNode
        }
      }
      blockTiles(kk) {
        for (let Fk = [], Bk = this, Rk = 0, tk = 0;;)
          if (Rk == Bk.children.length) {
            if (!Fk.length) return;
            Bk = Bk.parent, Bk.breakAfter && tk++, Rk = Fk.pop()
          } else {
            let ak = Bk.children[Rk++];
            if (ak instanceof mB) Fk.push(Rk), Bk = ak, Rk = 0;
            else {
              let Fk = tk + ak.length,
                Bk = kk(ak, tk);
              if (void 0 !== Bk) return Bk;
              tk = Fk + ak.breakAfter
            }
          }
      }
      resolveBlock(kk, Fk) {
        let Bk, Rk, tk = -1,
          ak = -1;
        if (this.blockTiles(((Xk, bk) => {
            let wk = bk + Xk.length;
            if (kk >= bk && kk <= wk) {
              if (Xk.isWidget() && Fk >= -1 && Fk <= 1) {
                if (32 & Xk.flags) return !0;
                16 & Xk.flags && (Bk = void 0)
              }(bk < kk || kk == wk && (Fk < -1 ? Xk.length : Xk.covers(1))) && (!Bk || !Xk.isWidget() && Bk.isWidget()) && (Bk = Xk, tk = kk - bk), (wk > kk || kk == bk && (Fk > 1 ? Xk.length : Xk.covers(-1))) && (!Rk || !Xk.isWidget() && Rk.isWidget()) && (Rk = Xk, ak = kk - bk)
            }
          })), !Bk && !Rk) throw new Error("No tile at position " + kk);
        return Bk && Fk < 0 || !Rk ? {
          tile: Bk,
          offset: tk
        } : {
          tile: Rk,
          offset: ak
        }
      }
    }
    class mB extends eB {
      constructor(kk, Fk) {
        super(kk), this.wrapper = Fk
      }
      isBlock() {
        return !0
      }
      covers(kk) {
        return !!this.children.length && (kk < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (kk, Fk) {
        let Bk = new mB(Fk || document.createElement(kk.tagName), kk);
        return Fk || (Bk.flags |= 4), Bk
      }
    }
    class WB extends eB {
      constructor(kk, Fk) {
        super(kk), this.attrs = Fk
      }
      isLine() {
        return !0
      }
      static start(kk, Fk, Bk) {
        let Rk = new WB(Fk || document.createElement("div"), kk);
        return Fk && Bk || (Rk.flags |= 4), Rk
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(kk, Fk, Bk) {
        let Rk = null,
          tk = -1,
          ak = null,
          Xk = -1;
        ! function kk(bk, wk) {
          for (let dk = 0, sk = 0; dk < bk.children.length && sk <= wk; dk++) {
            let Vk = bk.children[dk],
              Jk = sk + Vk.length;
            Jk >= wk && (Vk.isComposite() ? kk(Vk, wk - sk) : (!ak || ak.isHidden && (Fk > 0 || Bk && vB(ak, Vk))) && (Jk > wk || 32 & Vk.flags) ? (ak = Vk, Xk = wk - sk) : (sk < wk || 16 & Vk.flags && !Vk.isHidden) && (Rk = Vk, tk = wk - sk)), sk = Jk
          }
        }(this, kk);
        let bk = (Fk < 0 ? Rk : ak) || Rk || ak;
        return bk ? {
          tile: bk,
          offset: bk == Rk ? tk : Xk
        } : null
      }
      coordsIn(kk, Fk) {
        let Bk = this.resolveInline(kk, Fk, !0);
        return Bk ? Bk.tile.coordsIn(Math.max(0, Bk.offset), Fk) : function(kk) {
          let Fk = kk.dom.lastChild;
          if (!Fk) return kk.dom.getBoundingClientRect();
          let Bk = Ck(Fk);
          return Bk[Bk.length - 1] || null
        }(this)
      }
      domIn(kk, Fk) {
        let Bk = this.resolveInline(kk, Fk);
        if (Bk) {
          let {
            tile: kk,
            offset: Rk
          } = Bk;
          if (this.dom.contains(kk.dom)) return kk.isText() ? new dF(kk.dom, Math.min(kk.dom.nodeValue.length, Rk)) : kk.domPosFor(Rk, 16 & kk.flags ? 1 : 32 & kk.flags ? -1 : Fk);
          let tk = Bk.tile.parent,
            ak = !1;
          for (let Fk of tk.children) {
            if (ak) return new dF(Fk.dom, 0);
            Fk == Bk.tile && (ak = !0)
          }
        }
        return new dF(this.dom, 0)
      }
    }

    function vB(kk, Fk) {
      let Bk = kk.coordsIn(0, 1),
        Rk = Fk.coordsIn(0, 1);
      return Bk && Rk && Rk.top < Bk.bottom
    }
    class iB extends eB {
      constructor(kk, Fk) {
        super(kk), this.mark = Fk
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (kk, Fk) {
        let Bk = new iB(Fk || document.createElement(kk.tagName), kk);
        return Fk || (Bk.flags |= 4), Bk
      }
    }
    class YB extends AB {
      constructor(kk, Fk) {
        super(kk, Fk.length), this.text = Fk
      }
      sync(kk) {
        2 & this.flags || (super.sync(kk), this.dom.nodeValue != this.text && (kk && kk.node == this.dom && (kk.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(kk, Fk) {
        let Bk = this.dom.nodeValue.length;
        kk > Bk && (kk = Bk);
        let Rk = kk,
          tk = kk,
          ak = 0;
        0 == kk && Fk < 0 || kk == Bk && Fk >= 0 ? Ok.chrome || Ok.gecko || (kk ? (Rk--, ak = 1) : tk < Bk && (tk++, ak = -1)) : Fk < 0 ? Rk-- : tk < Bk && tk++;
        let Xk = tF(this.dom, Rk, tk).getClientRects();
        if (!Xk.length) return null;
        let bk = Xk[(ak ? ak < 0 : Fk >= 0) ? 0 : Xk.length - 1];
        return Ok.safari && !ak && 0 == bk.width && (bk = Array.prototype.find.call(Xk, (kk => kk.width)) || bk), ak ? lk(bk, ak < 0) : bk || null
      }
      static of (kk, Fk) {
        let Bk = new YB(Fk || document.createTextNode(kk), kk);
        return Fk || (Bk.flags |= 2), Bk
      }
    }
    class oB extends AB {
      constructor(kk, Fk, Bk, Rk) {
        super(kk, Fk, Rk), this.widget = Bk
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(kk) {
        return !(48 & this.flags) && (this.flags & (kk < 0 ? 64 : 128)) > 0
      }
      coordsIn(kk, Fk) {
        return this.coordsInWidget(kk, Fk, !1)
      }
      coordsInWidget(kk, Fk, Bk) {
        let Rk = this.widget.coordsAt(this.dom, kk, Fk);
        if (Rk) return Rk;
        if (Bk) return lk(this.dom.getBoundingClientRect(), this.length ? 0 == kk : Fk <= 0);
        {
          let Fk = this.dom.getClientRects(),
            Bk = null;
          if (!Fk.length) return null;
          let Rk = !!(16 & this.flags) || !(32 & this.flags) && kk > 0;
          for (let tk = Rk ? Fk.length - 1 : 0; Bk = Fk[tk], !(kk > 0 ? 0 == tk : tk == Fk.length - 1 || Bk.top < Bk.bottom); tk += Rk ? -1 : 1);
          return lk(Bk, !Rk)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Rk.B.empty;
        let {
          root: kk
        } = this;
        if (!kk) return Rk.B.empty;
        let Fk = this.posAtStart;
        return kk.view.state.doc.slice(Fk, Fk + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (kk, Fk, Bk, Rk, tk) {
        return tk || (tk = kk.toDOM(Fk), kk.editable || (tk.contentEditable = "false")), new oB(tk, Bk, kk, Rk)
      }
    }
    class LB extends AB {
      constructor(kk) {
        let Fk = document.createElement("img");
        Fk.className = "cm-widgetBuffer", Fk.setAttribute("aria-hidden", "true"), super(Fk, 0, kk)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Rk.B.empty
      }
      coordsIn(kk) {
        return this.dom.getBoundingClientRect()
      }
    }
    class OB {
      constructor(kk) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = kk
      }
      advance(kk, Fk, Bk) {
        let {
          tile: Rk,
          index: tk,
          beforeBreak: ak,
          parents: Xk
        } = this;
        for (; kk || Fk > 0;)
          if (Rk.isComposite())
            if (ak) {
              if (!kk) break;
              Bk && Bk.break(), kk--, ak = !1
            } else if (tk == Rk.children.length) {
          if (!kk && !Xk.length) break;
          Bk && Bk.leave(Rk), ak = !!Rk.breakAfter, ({
            tile: Rk,
            index: tk
          } = Xk.pop()), tk++
        } else {
          let bk = Rk.children[tk],
            wk = bk.breakAfter;
          !(Fk > 0 ? bk.length <= kk : bk.length < kk) || Bk && !1 === Bk.skip(bk, 0, bk.length) && bk.isComposite ? (Xk.push({
            tile: Rk,
            index: tk
          }), Rk = bk, tk = 0, Bk && bk.isComposite() && Bk.enter(bk)) : (ak = !!wk, tk++, kk -= bk.length)
        } else if (tk == Rk.length) ak = !!Rk.breakAfter, ({
          tile: Rk,
          index: tk
        } = Xk.pop()), tk++;
        else {
          if (!kk) break;
          {
            let Fk = Math.min(kk, Rk.length - tk);
            Bk && Bk.skip(Rk, tk, tk + Fk), kk -= Fk, tk += Fk
          }
        }
        return this.tile = Rk, this.index = tk, this.beforeBreak = ak, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class EB {
      constructor(kk, Fk, Bk, Rk) {
        this.from = kk, this.to = Fk, this.wrapper = Bk, this.rank = Rk
      }
    }
    class SB {
      constructor(kk, Fk, Bk) {
        this.cache = kk, this.root = Fk, this.blockWrappers = Bk, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(kk, Fk, Bk, Rk) {
        var tk;
        this.flushBuffer();
        let ak = this.ensureMarks(Fk, Bk),
          Xk = ak.lastChild;
        if (Xk && Xk.isText() && !(8 & Xk.flags) && Xk.length + kk.length < 512) {
          this.cache.reused.set(Xk, 2), (ak.children[ak.children.length - 1] = new YB(Xk.dom, Xk.text + kk)).parent = ak
        } else ak.append(Rk || YB.of(kk, null === (tk = this.cache.find(YB)) || void 0 === tk ? void 0 : tk.dom));
        this.pos += kk.length, this.afterWidget = null
      }
      addComposition(kk, Fk) {
        let Bk = this.curLine;
        Bk.dom != Fk.line.dom && (Bk.setDOM(this.cache.reused.has(Fk.line) ? cB(Fk.line.dom) : Fk.line.dom), this.cache.reused.set(Fk.line, 2));
        let Rk = Bk;
        for (let Xk = Fk.marks.length - 1; Xk >= 0; Xk--) {
          let kk = Fk.marks[Xk],
            Bk = Rk.lastChild;
          if (Bk instanceof iB && Bk.mark.eq(kk.mark)) Bk.dom != kk.dom && Bk.setDOM(cB(kk.dom)), Rk = Bk;
          else {
            if (this.cache.reused.get(kk)) {
              let Fk = AB.get(kk.dom);
              Fk && Fk.setDOM(cB(kk.dom))
            }
            let Fk = iB.of(kk.mark, kk.dom);
            Rk.append(Fk), Rk = Fk
          }
          this.cache.reused.set(kk, 2)
        }
        let tk = AB.get(kk.text);
        tk && this.cache.reused.set(tk, 2);
        let ak = new YB(kk.text, kk.text.nodeValue);
        ak.flags |= 8, Rk.append(ak)
      }
      addInlineWidget(kk, Fk, Bk) {
        let Rk = this.afterWidget && 48 & kk.flags && (48 & this.afterWidget.flags) == (48 & kk.flags);
        Rk || this.flushBuffer();
        let tk = this.ensureMarks(Fk, Bk);
        Rk || 16 & kk.flags || tk.append(this.getBuffer(1)), tk.append(kk), this.pos += kk.length, this.afterWidget = kk
      }
      addMark(kk, Fk, Bk) {
        this.flushBuffer(), this.ensureMarks(Fk, Bk).append(kk), this.pos += kk.length, this.afterWidget = null
      }
      addBlockWidget(kk) {
        this.getBlockPos().append(kk), this.pos += kk.length, this.lastBlock = kk, this.endLine()
      }
      continueWidget(kk) {
        (this.afterWidget || this.lastBlock).length += kk, this.pos += kk
      }
      addLineStart(kk, Fk) {
        var Bk;
        kk || (kk = UB);
        let Rk = WB.start(kk, Fk || (null === (Bk = this.cache.find(WB)) || void 0 === Bk ? void 0 : Bk.dom), !!Fk);
        this.getBlockPos().append(this.lastBlock = this.curLine = Rk)
      }
      addLine(kk) {
        this.getBlockPos().append(kk), this.pos += kk.length, this.lastBlock = kk, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(kk) {
        this.blockPosCovered() || this.addLineStart(kk)
      }
      ensureLine(kk) {
        this.curLine || this.addLineStart(kk)
      }
      ensureMarks(kk, Fk) {
        var Bk;
        let Rk = this.curLine;
        for (let tk = kk.length - 1; tk >= 0; tk--) {
          let ak, Xk = kk[tk];
          if (Fk > 0 && (ak = Rk.lastChild) && ak instanceof iB && ak.mark.eq(Xk)) Rk = ak, Fk--;
          else {
            let kk = iB.of(Xk, null === (Bk = this.cache.find(iB, (kk => kk.mark.eq(Xk)))) || void 0 === Bk ? void 0 : Bk.dom);
            Rk.append(kk), Rk = kk, Fk = 0
          }
        }
        return Rk
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let kk = this.curLine.lastChild;
          kk && gB(this.curLine, !1) && ("BR" == kk.dom.nodeName || !kk.isWidget() || Ok.ios && gB(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(TB, 0, 32) || new oB(TB.toDOM(), 0, TB, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let kk = this.wrappers.length - 1; kk >= 0; kk--) this.wrappers[kk].to < this.pos && this.wrappers.splice(kk, 1);
        for (let kk = this.blockWrappers; kk.value && kk.from <= this.pos; kk.next())
          if (kk.to >= this.pos) {
            let Fk = new EB(kk.from, kk.to, kk.value, kk.rank),
              Bk = this.wrappers.length;
            for (; Bk > 0 && (this.wrappers[Bk - 1].rank - Fk.rank || this.wrappers[Bk - 1].to - Fk.to) < 0;) Bk--;
            this.wrappers.splice(Bk, 0, Fk)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var kk;
        this.updateBlockWrappers();
        let Fk = this.root;
        for (let Bk of this.wrappers) {
          let Rk = Fk.lastChild;
          if (Bk.from < this.pos && Rk instanceof mB && Rk.wrapper.eq(Bk.wrapper)) Fk = Rk;
          else {
            let Rk = mB.of(Bk.wrapper, null === (kk = this.cache.find(mB, (kk => kk.wrapper.eq(Bk.wrapper)))) || void 0 === kk ? void 0 : kk.dom);
            Fk.append(Rk), Fk = Rk
          }
        }
        return Fk
      }
      blockPosCovered() {
        let kk = this.lastBlock;
        return null != kk && !kk.breakAfter && (!kk.isWidget() || (160 & kk.flags) > 0)
      }
      getBuffer(kk) {
        let Fk = 2 | (kk < 0 ? 16 : 32),
          Bk = this.cache.find(LB, void 0, 1);
        return Bk && (Bk.flags = Fk), Bk || new LB(Fk)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class NB {
      constructor(kk) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = kk.iter()
      }
      skip(kk) {
        this.textOff + kk <= this.text.length ? this.textOff += kk : (this.skipCount += kk - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(kk) {
        if (this.textOff == this.text.length) {
          let {
            value: Fk,
            lineBreak: Bk,
            done: Rk
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Rk) throw new Error("Ran out of text content when drawing inline views");
          this.text = Fk;
          let tk = this.textOff = Math.min(kk, Fk.length);
          return Bk ? null : Fk.slice(0, tk)
        }
        let Fk = Math.min(this.text.length, this.textOff + kk),
          Bk = this.text.slice(this.textOff, Fk);
        return this.textOff = Fk, Bk
      }
    }
    const HB = [oB, WB, YB, iB, LB, mB, fB];
    for (let UX = 0; UX < HB.length; UX++) HB[UX].bucket = UX;
    class uB {
      constructor(kk) {
        this.view = kk, this.buckets = HB.map((() => [])), this.index = HB.map((() => 0)), this.reused = new Map
      }
      add(kk) {
        let Fk = kk.constructor.bucket,
          Bk = this.buckets[Fk];
        Bk.length < 6 ? Bk.push(kk) : Bk[this.index[Fk] = (this.index[Fk] + 1) % 6] = kk
      }
      find(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Rk = kk.bucket,
          tk = this.buckets[Rk],
          ak = this.index[Rk];
        for (let Xk = tk.length - 1; Xk >= 0; Xk--) {
          let kk = (Xk + ak) % tk.length,
            bk = tk[kk];
          if ((!Fk || Fk(bk)) && !this.reused.has(bk)) return tk.splice(kk, 1), kk < ak && this.index[Rk]--, this.reused.set(bk, Bk), bk
        }
        return null
      }
      findWidget(kk, Fk, Bk) {
        let Rk = this.buckets[0];
        if (Rk.length)
          for (let tk = 0, ak = 0;; tk++) {
            if (tk == Rk.length) {
              if (ak) return null;
              ak = 1, tk = 0
            }
            let Xk = Rk[tk];
            if (!this.reused.has(Xk) && (0 == ak ? Xk.widget.compare(kk) : Xk.widget.constructor == kk.constructor && kk.updateDOM(Xk.dom, this.view, Xk.widget))) return Rk.splice(tk, 1), tk < this.index[0] && this.index[0]--, Xk.widget == kk && Xk.length == Fk && (497 & Xk.flags) == Bk ? (this.reused.set(Xk, 1), Xk) : (this.reused.set(Xk, 2), new oB(Xk.dom, Fk, kk, -498 & Xk.flags | Bk))
          }
      }
      reuse(kk) {
        return this.reused.set(kk, 1), kk
      }
      maybeReuse(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(kk)) return this.reused.set(kk, Fk), kk.dom
      }
      clear() {
        for (let kk = 0; kk < this.buckets.length; kk++) this.buckets[kk].length = this.index[kk] = 0
      }
    }
    class MB {
      constructor(kk, Fk, Bk, tk, ak) {
        this.view = kk, this.uR = tk, this.disallowBlockEffectsFor = ak, this.openWidget = !1, this.openMarks = 0, this.cache = new uB(kk), this.text = new NB(kk.state.doc), this.builder = new SB(this.cache, new fB(kk, kk.contentDOM), Rk.u.iter(Bk)), this.cache.reused.set(Fk, 2), this.old = new OB(Fk), this.reuseWalker = {
          skip: (kk, Fk, Bk) => {
            if (this.cache.add(kk), kk.isComposite()) return !1
          },
          enter: kk => this.cache.add(kk),
          leave: () => {},
          break: () => {}
        }
      }
      run(kk, Fk) {
        let Bk = Fk && this.getCompositionContext(Fk.text);
        for (let Rk = 0, tk = 0, ak = 0;;) {
          let Xk = ak < kk.length ? kk[ak++] : null,
            bk = Xk ? Xk.fromA : this.old.root.length;
          if (bk > Rk) {
            let kk = bk - Rk;
            this.preserve(kk, !ak, !Xk), Rk = bk, tk += kk
          }
          if (!Xk) break;
          Fk && Xk.fromA <= Fk.range.fromA && Xk.toA >= Fk.range.toA ? (this.forward(Xk.fromA, Fk.range.fromA, Fk.range.fromA < Fk.range.toA ? 1 : -1), this.emit(tk, Fk.range.fromB), this.cache.clear(), this.builder.addComposition(Fk, Bk), this.text.skip(Fk.range.toB - Fk.range.fromB), this.forward(Fk.range.fromA, Xk.toA), this.emit(Fk.range.toB, Xk.toB)) : (this.forward(Xk.fromA, Xk.toA), this.emit(tk, Xk.toB)), tk = Xk.toB, Rk = Xk.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(kk, Fk, Bk) {
        let Rk = function(kk) {
            let Fk = [];
            for (let Bk = kk.parents.length; Bk > 1; Bk--) {
              let Rk = Bk == kk.parents.length ? kk.tile : kk.parents[Bk].tile;
              Rk instanceof iB && Fk.push(Rk.mark)
            }
            return Fk
          }(this.old),
          tk = this.openMarks;
        this.old.advance(kk, Bk ? 1 : -1, {
          skip: (kk, Fk, Bk) => {
            if (kk.isWidget())
              if (this.openWidget) this.builder.continueWidget(Bk - Fk);
              else {
                let ak = Bk > 0 || Fk < kk.length ? oB.of(kk.widget, this.view, Bk - Fk, 496 & kk.flags, this.cache.maybeReuse(kk)) : this.cache.reuse(kk);
                256 & ak.flags ? (ak.flags &= -2, this.builder.addBlockWidget(ak)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(ak, Rk, tk), tk = Rk.length)
              }
            else if (kk.isText()) this.builder.ensureLine(null), Fk || Bk != kk.length || this.cache.reused.has(kk) ? (this.cache.add(kk), this.builder.addText(kk.text.slice(Fk, Bk), Rk, tk)) : this.builder.addText(kk.text, Rk, tk, this.cache.reuse(kk)), tk = Rk.length;
            else if (kk.isLine()) kk.flags &= -2, this.cache.reused.set(kk, 1), this.builder.addLine(kk);
            else if (kk instanceof LB) this.cache.add(kk);
            else {
              if (!(kk instanceof iB)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(kk, Rk, tk), this.cache.reused.set(kk, 1), tk = Rk.length
            }
            this.openWidget = !1
          },
          enter: kk => {
            kk.isLine() ? this.builder.addLineStart(kk.attrs, this.cache.maybeReuse(kk)) : (this.cache.add(kk), kk instanceof iB && Rk.unshift(kk.mark)), this.openWidget = !1
          },
          leave: kk => {
            kk.isLine() ? Rk.length && (Rk.length = tk = 0) : kk instanceof iB && (Rk.shift(), tk = Math.min(tk, Rk.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(kk)
      }
      emit(kk, Fk) {
        let Bk = null,
          tk = this.builder,
          ak = 0,
          Xk = Rk.u.spans(this.uR, kk, Fk, {
            point: (kk, Fk, Rk, Xk, bk, wk) => {
              if (Rk instanceof Tk) {
                if (this.disallowBlockEffectsFor[wk]) {
                  if (Rk.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (Fk > this.view.state.doc.lineAt(kk).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (ak = Xk.length, bk > Xk.length) tk.continueWidget(Fk - kk);
                else {
                  let ak = Rk.widget || (Rk.block ? GB.block : GB.inline),
                    wk = function(kk) {
                      let Fk = kk.isReplace ? (kk.startSide < 0 ? 64 : 0) | (kk.endSide > 0 ? 128 : 0) : kk.startSide > 0 ? 32 : 16;
                      kk.block && (Fk |= 256);
                      return Fk
                    }(Rk),
                    dk = this.cache.findWidget(ak, Fk - kk, wk) || oB.of(ak, this.view, Fk - kk, wk);
                  Rk.block ? (Rk.startSide > 0 && tk.addLineStartIfNotCovered(Bk), tk.addBlockWidget(dk)) : (tk.ensureLine(Bk), tk.addInlineWidget(dk, Xk, bk))
                }
                Bk = null
              } else Bk = function(kk, Fk) {
                let Bk = Fk.spec.attributes,
                  Rk = Fk.spec.class;
                if (!Bk && !Rk) return kk;
                kk || (kk = {
                  class: "cm-line"
                });
                Bk && Ek(Bk, kk);
                Rk && (kk.class += " " + Rk);
                return kk
              }(Bk, Rk);
              Fk > kk && this.text.skip(Fk - kk)
            },
            span: (kk, Fk, Rk, ak) => {
              for (let Xk = kk; Xk < Fk;) {
                let bk = this.text.next(Math.min(512, Fk - Xk));
                null == bk ? (tk.addLineStartIfNotCovered(Bk), tk.addBreak(), Xk++) : (tk.ensureLine(Bk), tk.addText(bk, Rk, Xk == kk ? ak : Rk.length), Xk += bk.length), Bk = null
              }
            }
          });
        tk.addLineStartIfNotCovered(Bk), this.openWidget = Xk > ak, this.openMarks = Xk
      }
      forward(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        Fk - kk <= 10 ? this.old.advance(Fk - kk, Bk, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(Fk - kk - 10, -1), this.old.advance(5, Bk, this.reuseWalker))
      }
      getCompositionContext(kk) {
        let Fk = [],
          Bk = null;
        for (let Rk = kk.parentNode;; Rk = Rk.parentNode) {
          let kk = AB.get(Rk);
          if (Rk == this.view.contentDOM) break;
          kk instanceof iB ? Fk.push(kk) : (null === kk || void 0 === kk ? void 0 : kk.isLine()) ? Bk = kk : kk instanceof mB || ("DIV" != Rk.nodeName || Bk || Rk == this.view.contentDOM ? Bk || Fk.push(iB.of(new ck({
            tagName: Rk.nodeName.toLowerCase(),
            attributes: uk(Rk)
          }), Rk)) : Bk = new WB(Rk, UB))
        }
        return {
          line: Bk,
          marks: Fk
        }
      }
    }

    function gB(kk, Fk) {
      let Bk = kk => {
        for (let Rk of kk.children)
          if ((Fk ? Rk.isText() : Rk.length) || Bk(Rk)) return !0;
        return !1
      };
      return Bk(kk)
    }
    const UB = {
      class: "cm-line"
    };

    function cB(kk) {
      let Fk = AB.get(kk);
      return Fk && Fk.setDOM(kk.cloneNode()), kk
    }
    class GB extends Mk {
      constructor(kk) {
        super(), this.tag = kk
      }
      eq(kk) {
        return kk.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(kk) {
        return kk.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    GB.inline = new GB("span"), GB.block = new GB("div");
    const TB = new class extends Mk {
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
    class rB {
      constructor(kk) {
        this.view = kk, this.uR = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Uk.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new fB(kk, kk.contentDOM), this.updateInner([new sB(0, 0, 0, kk.state.doc.length)], null)
      }
      update(kk) {
        var Fk;
        let Bk = kk.changedRanges;
        this.minWidth > 0 && Bk.length && (Bk.every((kk => {
          let {
            fromA: Fk,
            toA: Bk
          } = kk;
          return Bk < this.minWidthFrom || Fk > this.minWidthTo
        })) ? (this.minWidthFrom = kk.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = kk.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(kk);
        let tk = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (Fk = this.domChanged) || void 0 === Fk ? void 0 : Fk.newSel) ? tk = this.domChanged.newSel.head : function(kk, Fk) {
          let Bk = !1;
          Fk && kk.iterChangedRanges(((kk, Rk) => {
            kk < Fk.to && Rk > Fk.from && (Bk = !0)
          }));
          return Bk
        }(kk.changes, this.hasComposition) || kk.selectionSet || (tk = kk.state.selection.main.head));
        let ak = tk > -1 ? function(kk, Fk, Bk) {
          let Rk = zB(kk, Bk);
          if (!Rk) return null;
          let {
            node: tk,
            from: ak,
            to: Xk
          } = Rk, bk = tk.nodeValue;
          if (/[\n\r]/.test(bk)) return null;
          if (kk.state.doc.sliceString(Rk.from, Rk.to) != bk) return null;
          let wk = Fk.invertedDesc;
          return {
            range: new sB(wk.mapPos(ak), wk.mapPos(Xk), ak, Xk),
            text: tk
          }
        }(this.view, kk.changes, tk) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: Fk,
            to: Rk
          } = this.hasComposition;
          Bk = new sB(Fk, Rk, kk.changes.mapPos(Fk, -1), kk.changes.mapPos(Rk, 1)).addToSet(Bk.slice())
        }
        this.hasComposition = ak ? {
          from: ak.range.fromB,
          to: ak.range.toB
        } : null, (Ok.ie || Ok.chrome) && !ak && kk && kk.state.doc.lines != kk.startState.doc.lines && (this.forceSelection = !0);
        let Xk = this.uR,
          bk = this.blockWrappers;
        this.updateDeco();
        let wk = function(kk, Fk, Bk) {
          let tk = new PB;
          return Rk.u.compare(kk, Fk, Bk, tk), tk.changes
        }(Xk, this.uR, kk.changes);
        wk.length && (Bk = sB.extendWithRanges(Bk, wk));
        let dk = function(kk, Fk, Bk) {
          let tk = new hB;
          return Rk.u.compare(kk, Fk, Bk, tk), tk.changes
        }(bk, this.blockWrappers, kk.changes);
        return dk.length && (Bk = sB.extendWithRanges(Bk, dk)), ak && !Bk.some((kk => kk.fromA <= ak.range.fromA && kk.toA >= ak.range.toA)) && (Bk = ak.range.addToSet(Bk.slice())), !(2 & this.tile.flags && 0 == Bk.length) && (this.updateInner(Bk, ak), kk.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(kk, Fk) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: Bk
        } = this.view;
        Bk.ignore((() => {
          if (Fk || kk.length) {
            let Bk = this.tile,
              Rk = new MB(this.view, Bk, this.blockWrappers, this.uR, this.dynamicDecorationMap);
            Fk && AB.get(Fk.text) && Rk.cache.reused.set(AB.get(Fk.text), 2), this.tile = Rk.run(kk, Fk), DB(Bk, Rk.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Rk = Ok.chrome || Ok.ios ? {
            node: Bk.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Rk), !Rk || !Rk.written && Bk.selectionRange.focusNode == Rk.node && this.tile.dom.contains(Rk.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Rk = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let tk of this.tile.children) tk.isWidget() && tk.widget instanceof qB && Rk.push(tk.dom);
        Bk.updateGaps(Rk)
      }
      updateEditContextFormatting(kk) {
        this.editContextFormatting = this.editContextFormatting.map(kk.changes);
        for (let Fk of kk.transactions)
          for (let kk of Fk.effects) kk.is(pF) && (this.editContextFormatting = kk.value)
      }
      updateSelection() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: Fk
        } = this.tile, Bk = this.view.root.activeElement, Rk = Bk == Fk, tk = !Rk && !(this.view.state.facet(xF) || Fk.tabIndex > -1) && qk(Fk, this.view.observer.selectionRange) && !(Bk && Fk.contains(Bk));
        if (!(Rk || kk || tk)) return;
        let ak = this.forceSelection;
        this.forceSelection = !1;
        let Xk, bk, wk = this.view.state.selection.main;
        if (wk.empty ? bk = Xk = this.inlineDOMNearPos(wk.anchor, wk.assoc || 1) : (bk = this.inlineDOMNearPos(wk.head, wk.head == wk.from ? 1 : -1), Xk = this.inlineDOMNearPos(wk.anchor, wk.anchor == wk.from ? 1 : -1)), Ok.gecko && wk.empty && !this.hasComposition && (1 == (dk = Xk).node.nodeType && dk.node.firstChild && (0 == dk.offset || "false" == dk.node.childNodes[dk.offset - 1].contentEditable) && (dk.offset == dk.node.childNodes.length || "false" == dk.node.childNodes[dk.offset].contentEditable))) {
          let kk = document.createTextNode("");
          this.view.observer.ignore((() => Xk.node.insertBefore(kk, Xk.node.childNodes[Xk.offset] || null))), Xk = bk = new dF(kk, 0), ak = !0
        }
        var dk;
        let sk = this.view.observer.selectionRange;
        !ak && sk.focusNode && (Zk(Xk.node, Xk.offset, sk.anchorNode, sk.anchorOffset) && Zk(bk.node, bk.offset, sk.focusNode, sk.focusOffset) || this.suppressWidgetCursorChange(sk, wk)) || (this.view.observer.ignore((() => {
          Ok.android && Ok.chrome && Fk.contains(sk.focusNode) && function(kk, Fk) {
            for (let Bk = kk; Bk && Bk != Fk; Bk = Bk.assignedSlot || Bk.parentNode)
              if (1 == Bk.nodeType && "false" == Bk.contentEditable) return !0;
            return !1
          }(sk.focusNode, Fk) && (Fk.blur(), Fk.focus({
            preventScroll: !0
          }));
          let kk = Pk(this.view.root);
          if (kk)
            if (wk.empty) {
              if (Ok.gecko) {
                let kk = (Rk = Xk.node, ak = Xk.offset, 1 != Rk.nodeType ? 0 : (ak && "false" == Rk.childNodes[ak - 1].contentEditable ? 1 : 0) | (ak < Rk.childNodes.length && "false" == Rk.childNodes[ak].contentEditable ? 2 : 0));
                if (kk && 3 != kk) {
                  let Fk = (1 == kk ? bF : wF)(Xk.node, Xk.offset);
                  Fk && (Xk = new dF(Fk.node, Fk.offset))
                }
              }
              kk.collapse(Xk.node, Xk.offset), null != wk.bidiLevel && void 0 !== kk.caretBidiLevel && (kk.caretBidiLevel = wk.bidiLevel)
            } else if (kk.extend) {
            kk.collapse(Xk.node, Xk.offset);
            try {
              kk.extend(bk.node, bk.offset)
            } catch (dk) {}
          } else {
            let Fk = document.createRange();
            wk.anchor > wk.head && ([Xk, bk] = [bk, Xk]), Fk.setEnd(bk.node, bk.offset), Fk.setStart(Xk.node, Xk.offset), kk.removeAllRanges(), kk.addRange(Fk)
          } else;
          var Rk, ak;
          tk && this.view.root.activeElement == Fk && (Fk.blur(), Bk && Bk.focus())
        })), this.view.observer.setSelectionRange(Xk, bk)), this.impreciseAnchor = Xk.precise ? null : new dF(sk.anchorNode, sk.anchorOffset), this.impreciseHead = bk.precise ? null : new dF(sk.focusNode, sk.focusOffset)
      }
      suppressWidgetCursorChange(kk, Fk) {
        return this.hasComposition && Fk.empty && Zk(kk.focusNode, kk.focusOffset, kk.anchorNode, kk.anchorOffset) && this.posFromDOM(kk.focusNode, kk.focusOffset) == Fk.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: kk
        } = this, Fk = kk.state.selection.main, Bk = Pk(kk.root), {
          anchorNode: Rk,
          anchorOffset: tk
        } = kk.observer.selectionRange;
        if (!Bk || !Fk.empty || !Fk.assoc || !Bk.modify) return;
        let ak = this.lineAt(Fk.head, Fk.assoc);
        if (!ak) return;
        let Xk = ak.posAtStart;
        if (Fk.head == Xk || Fk.head == Xk + ak.length) return;
        let bk = this.coordsAt(Fk.head, -1),
          wk = this.coordsAt(Fk.head, 1);
        if (!bk || !wk || bk.bottom > wk.top) return;
        let dk = this.domAtPos(Fk.head + Fk.assoc, Fk.assoc);
        Bk.collapse(dk.node, dk.offset), Bk.modify("move", Fk.assoc < 0 ? "forward" : "backward", "lineboundary"), kk.observer.readSelectionRange();
        let sk = kk.observer.selectionRange;
        kk.docView.posFromDOM(sk.anchorNode, sk.anchorOffset) != Fk.from && Bk.collapse(Rk, tk)
      }
      posFromDOM(kk, Fk) {
        let Bk = this.tile.nearest(kk);
        if (!Bk) return 2 & this.tile.dom.compareDocumentPosition(kk) ? 0 : this.view.state.doc.length;
        let Rk = Bk.posAtStart;
        if (!Bk.isComposite()) return Bk.isText() ? kk == Bk.dom ? Rk + Fk : Rk + (Fk ? Bk.length : 0) : Rk;
        {
          let tk;
          if (kk == Bk.dom) tk = Bk.dom.childNodes[Fk];
          else {
            let Rk = 0 == jk(kk) ? 0 : 0 == Fk ? -1 : 1;
            for (;;) {
              let Fk = kk.parentNode;
              if (Fk == Bk.dom) break;
              0 == Rk && Fk.firstChild != Fk.lastChild && (Rk = kk == Fk.firstChild ? -1 : 1), kk = Fk
            }
            tk = Rk < 0 ? kk : kk.nextSibling
          }
          if (tk == Bk.dom.firstChild) return Rk;
          for (; tk && !AB.get(tk);) tk = tk.nextSibling;
          if (!tk) return Rk + Bk.length;
          for (let kk = 0, Fk = Rk;; kk++) {
            let Rk = Bk.children[kk];
            if (Rk.dom == tk) return Fk;
            Fk += Rk.length + Rk.breakAfter
          }
        }
      }
      domAtPos(kk, Fk) {
        let {
          tile: Bk,
          offset: Rk
        } = this.tile.resolveBlock(kk, Fk);
        return Bk.isWidget() ? Bk.domPosFor(kk, Fk) : Bk.domIn(Rk, Fk)
      }
      inlineDOMNearPos(kk, Fk) {
        let Bk, Rk, tk = -1,
          ak = !1,
          Xk = -1,
          bk = !1;
        return this.tile.blockTiles(((Fk, wk) => {
          if (Fk.isWidget()) {
            if (32 & Fk.flags && wk >= kk) return !0;
            16 & Fk.flags && (ak = !0)
          } else {
            let dk = wk + Fk.length;
            if (wk <= kk && (Bk = Fk, tk = kk - wk, ak = dk < kk), dk >= kk && !Rk && (Rk = Fk, Xk = kk - wk, bk = wk > kk), wk > kk && Rk) return !0
          }
        })), Bk || Rk ? (ak && Rk ? Bk = null : bk && Bk && (Rk = null), Bk && Fk < 0 || !Rk ? Bk.domIn(tk, Fk) : Rk.domIn(Xk, Fk)) : this.domAtPos(kk, Fk)
      }
      coordsAt(kk, Fk) {
        let {
          tile: Bk,
          offset: Rk
        } = this.tile.resolveBlock(kk, Fk);
        return Bk.isWidget() ? Bk.widget instanceof qB ? null : Bk.coordsInWidget(Rk, Fk, !0) : Bk.coordsIn(Rk, Fk)
      }
      lineAt(kk, Fk) {
        let {
          tile: Bk
        } = this.tile.resolveBlock(kk, Fk);
        return Bk.isLine() ? Bk : null
      }
      coordsForChar(kk) {
        let {
          tile: Fk,
          offset: Bk
        } = this.tile.resolveBlock(kk, 1);
        if (!Fk.isLine()) return null;
        return function kk(Fk, Bk) {
          if (Fk.isComposite())
            for (let Rk of Fk.children) {
              if (Rk.length >= Bk) {
                let Fk = kk(Rk, Bk);
                if (Fk) return Fk
              }
              if ((Bk -= Rk.length) < 0) break
            } else if (Fk.isText() && Bk < Fk.length) {
              let kk = (0, Rk.N)(Fk.text, Bk);
              if (kk == Bk) return null;
              let tk = tF(Fk.dom, Bk, kk).getClientRects();
              for (let Fk = 0; Fk < tk.length; Fk++) {
                let kk = tk[Fk];
                if (Fk == tk.length - 1 || kk.top < kk.bottom && kk.left < kk.right) return kk
              }
            } return null
        }(Fk, Bk)
      }
      measureVisibleLineHeights(kk) {
        let Fk = [],
          {
            from: Bk,
            to: Rk
          } = kk,
          tk = this.view.contentDOM.clientWidth,
          ak = tk > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          Xk = -1,
          bk = this.view.textDirection == sF.LTR,
          wk = 0,
          dk = (kk, sk, Vk) => {
            for (let Jk = 0; Jk < kk.children.length && !(sk > Rk); Jk++) {
              let Rk = kk.children[Jk],
                Ak = sk + Rk.length,
                ek = Rk.dom.getBoundingClientRect(),
                {
                  height: yk
                } = ek;
              if (Vk && !Jk && (wk += ek.top - Vk.top), Rk instanceof mB) Ak > Bk && dk(Rk, sk, ek);
              else if (sk >= Bk && (wk > 0 && Fk.push(-wk), Fk.push(yk + wk), wk = 0, ak)) {
                let kk = Rk.dom.lastChild,
                  Fk = kk ? Ck(kk) : [];
                if (Fk.length) {
                  let kk = Fk[Fk.length - 1],
                    Bk = bk ? kk.right - ek.left : ek.right - kk.left;
                  Bk > Xk && (Xk = Bk, this.minWidth = tk, this.minWidthFrom = sk, this.minWidthTo = Ak)
                }
              }
              Vk && Jk == kk.children.length - 1 && (wk += Vk.bottom - ek.bottom), sk = Ak + Rk.breakAfter
            }
          };
        return dk(this.tile, 0, null), Fk
      }
      textDirectionAt(kk) {
        let {
          tile: Fk
        } = this.tile.resolveBlock(kk, 1);
        return "rtl" == getComputedStyle(Fk.dom).direction ? sF.RTL : sF.LTR
      }
      measureTextSize() {
        let kk = this.tile.blockTiles((kk => {
          if (kk.isLine() && kk.children.length && kk.length <= 20) {
            let Fk, Bk = 0;
            for (let Rk of kk.children) {
              if (!Rk.isText() || /[^ -~]/.test(Rk.text)) return;
              let kk = Ck(Rk.dom);
              if (1 != kk.length) return;
              Bk += kk[0].width, Fk = kk[0].height
            }
            if (Bk) return {
              lineHeight: kk.dom.getBoundingClientRect().height,
              charWidth: Bk / kk.length,
              textHeight: Fk
            }
          }
        }));
        if (kk) return kk;
        let Fk, Bk, Rk, tk = document.createElement("div");
        return tk.className = "cm-line", tk.style.width = "99999px", tk.style.position = "absolute", tk.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(tk);
          let kk = Ck(tk.firstChild)[0];
          Fk = tk.getBoundingClientRect().height, Bk = kk && kk.width ? kk.width / 27 : 7, Rk = kk && kk.height ? kk.height : Fk, tk.remove()
        })), {
          lineHeight: Fk,
          charWidth: Bk,
          textHeight: Rk
        }
      }
      computeBlockGapDeco() {
        let kk = [],
          Fk = this.view.viewState;
        for (let Bk = 0, Rk = 0;; Rk++) {
          let tk = Rk == Fk.viewports.length ? null : Fk.viewports[Rk],
            ak = tk ? tk.from - 1 : this.view.state.doc.length;
          if (ak > Bk) {
            let Rk = (Fk.lineBlockAt(ak).bottom - Fk.lineBlockAt(Bk).top) / this.view.scaleY;
            kk.push(Uk.replace({
              widget: new qB(Rk),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(Bk, ak))
          }
          if (!tk) break;
          Bk = tk.to + 1
        }
        return Uk.set(kk)
      }
      updateDeco() {
        let kk = 1,
          Fk = this.view.state.facet(FB).map((Fk => (this.dynamicDecorationMap[kk++] = "function" == typeof Fk) ? Fk(this.view) : Fk)),
          Bk = !1,
          tk = this.view.state.facet(RB).map(((kk, Fk) => {
            let Rk = "function" == typeof kk;
            return Rk && (Bk = !0), Rk ? kk(this.view) : kk
          }));
        for (tk.length && (this.dynamicDecorationMap[kk++] = Bk, Fk.push(Rk.u.join(tk))), this.uR = [this.editContextFormatting, ...Fk, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; kk < this.uR.length;) this.dynamicDecorationMap[kk++] = !1;
        this.blockWrappers = this.view.state.facet(BB).map((kk => "function" == typeof kk ? kk(this.view) : kk))
      }
      scrollIntoView(kk) {
        var Fk;
        if (kk.isSnapshot) {
          let Fk = this.view.viewState.lineBlockAt(kk.range.head);
          return this.view.scrollDOM.scrollTop = Fk.top - kk.yMargin, void(this.view.scrollDOM.scrollLeft = kk.xMargin)
        }
        for (let sk of this.view.state.facet(qF)) try {
          if (sk(this.view, kk.range, kk)) return !0
        } catch (dk) {
          KF(this.view.state, dk, "scroll handler")
        }
        let Bk, {
            range: Rk
          } = kk,
          tk = this.coordsAt(Rk.head, null !== (Fk = Rk.assoc) && void 0 !== Fk ? Fk : Rk.empty ? 0 : Rk.head > Rk.anchor ? -1 : 1);
        if (!tk) return;
        !Rk.empty && (Bk = this.coordsAt(Rk.anchor, Rk.anchor > Rk.head ? -1 : 1)) && (tk = {
          left: Math.min(tk.left, Bk.left),
          top: Math.min(tk.top, Bk.top),
          right: Math.max(tk.right, Bk.right),
          bottom: Math.max(tk.bottom, Bk.bottom)
        });
        let ak = wB(this.view),
          Xk = {
            left: tk.left - ak.left,
            top: tk.top - ak.top,
            right: tk.right + ak.right,
            bottom: tk.bottom + ak.bottom
          },
          {
            offsetWidth: bk,
            offsetHeight: wk
          } = this.view.scrollDOM;
        if (function(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
            let wk = kk.ownerDocument,
              dk = wk.defaultView || window;
            for (let sk = kk, Vk = !1; sk && !Vk;)
              if (1 == sk.nodeType) {
                let kk, Jk = sk == wk.body,
                  Ak = 1,
                  ek = 1;
                if (Jk) kk = nk(dk);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(sk).position) && (Vk = !0), sk.scrollHeight <= sk.clientHeight && sk.scrollWidth <= sk.clientWidth) {
                    sk = sk.assignedSlot || sk.parentNode;
                    continue
                  }
                  let Fk = sk.getBoundingClientRect();
                  ({
                    scaleX: Ak,
                    scaleY: ek
                  } = Ik(sk, Fk)), kk = {
                    left: Fk.left,
                    right: Fk.left + sk.clientWidth * Ak,
                    top: Fk.top,
                    bottom: Fk.top + sk.clientHeight * ek
                  }
                }
                let yk = 0,
                  fk = 0;
                if ("nearest" == tk) Fk.top < kk.top + Xk ? (fk = Fk.top - (kk.top + Xk), Bk > 0 && Fk.bottom > kk.bottom + fk && (fk = Fk.bottom - kk.bottom + Xk)) : Fk.bottom > kk.bottom - Xk && (fk = Fk.bottom - kk.bottom + Xk, Bk < 0 && Fk.top - fk < kk.top && (fk = Fk.top - (kk.top + Xk)));
                else {
                  let Rk = Fk.bottom - Fk.top,
                    ak = kk.bottom - kk.top;
                  fk = ("center" == tk && Rk <= ak ? Fk.top + Rk / 2 - ak / 2 : "start" == tk || "center" == tk && Bk < 0 ? Fk.top - Xk : Fk.bottom - ak + Xk) - kk.top
                }
                if ("nearest" == Rk ? Fk.left < kk.left + ak ? (yk = Fk.left - (kk.left + ak), Bk > 0 && Fk.right > kk.right + yk && (yk = Fk.right - kk.right + ak)) : Fk.right > kk.right - ak && (yk = Fk.right - kk.right + ak, Bk < 0 && Fk.left < kk.left + yk && (yk = Fk.left - (kk.left + ak))) : yk = ("center" == Rk ? Fk.left + (Fk.right - Fk.left) / 2 - (kk.right - kk.left) / 2 : "start" == Rk == bk ? Fk.left - ak : Fk.right - (kk.right - kk.left) + ak) - kk.left, yk || fk)
                  if (Jk) dk.scrollBy(yk, fk);
                  else {
                    let kk = 0,
                      Bk = 0;
                    if (fk) {
                      let kk = sk.scrollTop;
                      sk.scrollTop += fk / ek, Bk = (sk.scrollTop - kk) * ek
                    }
                    if (yk) {
                      let Fk = sk.scrollLeft;
                      sk.scrollLeft += yk / Ak, kk = (sk.scrollLeft - Fk) * Ak
                    }
                    Fk = {
                      left: Fk.left - kk,
                      top: Fk.top - Bk,
                      right: Fk.right - kk,
                      bottom: Fk.bottom - Bk
                    }, kk && Math.abs(kk - yk) < 1 && (Rk = "nearest"), Bk && Math.abs(Bk - fk) < 1 && (tk = "nearest")
                  } if (Jk) break;
                (Fk.top < kk.top || Fk.bottom > kk.bottom || Fk.left < kk.left || Fk.right > kk.right) && (Fk = {
                  left: Math.max(Fk.left, kk.left),
                  right: Math.min(Fk.right, kk.right),
                  top: Math.max(Fk.top, kk.top),
                  bottom: Math.min(Fk.bottom, kk.bottom)
                }), sk = sk.assignedSlot || sk.parentNode
              } else {
                if (11 != sk.nodeType) break;
                sk = sk.host
              }
          }(this.view.scrollDOM, Xk, Rk.head < Rk.anchor ? -1 : 1, kk.x, kk.y, Math.max(Math.min(kk.xMargin, bk), -bk), Math.max(Math.min(kk.yMargin, wk), -wk), this.view.textDirection == sF.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (tk.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || tk.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let kk = this.view.docView.lineAt(Rk.head, 1);
          kk && kk.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(kk) {
        let Fk = kk => kk.isWidget() || kk.children.some(Fk);
        return Fk(this.tile.resolveBlock(kk, 1).tile)
      }
      destroy() {
        DB(this.tile)
      }
    }

    function DB(kk, Fk) {
      let Bk = null === Fk || void 0 === Fk ? void 0 : Fk.get(kk);
      if (1 != Bk) {
        null == Bk && kk.destroy();
        for (let Bk of kk.children) DB(Bk, Fk)
      }
    }

    function zB(kk, Fk) {
      let Bk = kk.observer.selectionRange;
      if (!Bk.focusNode) return null;
      let Rk = bF(Bk.focusNode, Bk.focusOffset),
        tk = wF(Bk.focusNode, Bk.focusOffset),
        ak = Rk || tk;
      if (tk && Rk && tk.node != Rk.node) {
        let Fk = AB.get(tk.node);
        if (!Fk || Fk.isText() && Fk.text != tk.node.nodeValue) ak = tk;
        else if (kk.docView.lastCompositionAfterCursor) {
          let kk = AB.get(Rk.node);
          !kk || kk.isText() && kk.text != Rk.node.nodeValue || (ak = tk)
        }
      }
      if (kk.docView.lastCompositionAfterCursor = ak != Rk, !ak) return null;
      let Xk = Fk - ak.offset;
      return {
        from: Xk,
        to: Xk + ak.node.nodeValue.length,
        node: ak.node
      }
    }
    let PB = class {
      constructor() {
        this.changes = []
      }
      compareRange(kk, Fk) {
        Dk(kk, Fk, this.changes)
      }
      comparePoint(kk, Fk) {
        Dk(kk, Fk, this.changes)
      }
      boundChange(kk) {
        Dk(kk, kk, this.changes)
      }
    };
    class hB {
      constructor() {
        this.changes = []
      }
      compareRange(kk, Fk) {
        Dk(kk, Fk, this.changes)
      }
      comparePoint() {}
      boundChange(kk) {
        Dk(kk, kk, this.changes)
      }
    }
    class qB extends Mk {
      constructor(kk) {
        super(), this.height = kk
      }
      toDOM() {
        let kk = document.createElement("div");
        return kk.className = "cm-gap", this.updateDOM(kk), kk
      }
      eq(kk) {
        return kk.height == this.height
      }
      updateDOM(kk) {
        return kk.style.height = this.height + "px", !0
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

    function CB(kk, Fk, Bk) {
      let Rk = kk.lineBlockAt(Fk);
      if (Array.isArray(Rk.type)) {
        let kk;
        for (let tk of Rk.type) {
          if (tk.from > Fk) break;
          if (!(tk.to < Fk)) {
            if (tk.from < Fk && tk.to > Fk) return tk;
            kk && (tk.type != gk.Text || kk.type == tk.type && !(Bk < 0 ? tk.from < Fk : tk.to > Fk)) || (kk = tk)
          }
        }
        return kk || Rk
      }
      return Rk
    }

    function ZB(kk, Fk, Bk, Rk) {
      let tk = kk.state.doc.lineAt(Fk.head),
        ak = kk.bidiSpans(tk),
        Xk = kk.textDirectionAt(tk.from);
      for (let bk = Fk, wk = null;;) {
        let Fk = HF(tk, ak, Xk, bk, Bk),
          dk = NF;
        if (!Fk) {
          if (tk.number == (Bk ? kk.state.doc.lines : 1)) return bk;
          dk = "\n", tk = kk.state.doc.line(tk.number + (Bk ? 1 : -1)), ak = kk.bidiSpans(tk), Fk = kk.visualLineSide(tk, !Bk)
        }
        if (wk) {
          if (!wk(dk)) return bk
        } else {
          if (!Rk) return Fk;
          wk = Rk(dk)
        }
        bk = Fk
      }
    }

    function pB(kk, Fk, Bk) {
      for (;;) {
        let Rk = 0;
        for (let tk of kk) tk.between(Fk - 1, Fk + 1, ((kk, tk, ak) => {
          if (Fk > kk && Fk < tk) {
            let ak = Rk || Bk || (Fk - kk < tk - Fk ? -1 : 1);
            Fk = ak < 0 ? kk : tk, Rk = ak
          }
        }));
        if (!Rk) return Fk
      }
    }

    function KB(kk, Fk) {
      let Bk = null;
      for (let tk = 0; tk < Fk.hb.length; tk++) {
        let ak = Fk.hb[tk],
          Xk = null;
        if (ak.empty) {
          let Fk = pB(kk, ak.from, 0);
          Fk != ak.from && (Xk = Rk.f.cursor(Fk, -1))
        } else {
          let Fk = pB(kk, ak.from, -1),
            Bk = pB(kk, ak.to, 1);
          Fk == ak.from && Bk == ak.to || (Xk = Rk.f.range(ak.from == ak.anchor ? Fk : Bk, ak.from == ak.head ? Fk : Bk))
        }
        Xk && (Bk || (Bk = Fk.hb.slice()), Bk[tk] = Xk)
      }
      return Bk ? Rk.f.create(Bk, Fk.mainIndex) : Fk
    }

    function xB(kk, Fk, Bk) {
      let tk = pB(kk.state.facet(tB).map((Fk => Fk(kk))), Bk.from, Fk.head > Bk.from ? -1 : 1);
      return tk == Bk.from ? Bk : Rk.f.cursor(tk, tk < Bk.from ? 1 : -1)
    }
    class jB {
      constructor(kk, Fk) {
        this.pos = kk, this.assoc = Fk
      }
    }

    function lB(kk, Fk, Bk, tk) {
      let ak, Xk = kk.contentDOM.getBoundingClientRect(),
        bk = Xk.top + kk.viewState.paddingTop,
        {
          x: wk,
          y: dk
        } = Fk,
        sk = dk - bk;
      for (;;) {
        if (sk < 0) return new jB(0, 1);
        if (sk > kk.viewState.docHeight) return new jB(kk.state.doc.length, -1);
        if (ak = kk.elementAtHeight(sk), null == tk) break;
        if (ak.type == gk.Text) {
          if (tk < 0 ? ak.to < kk.viewport.from : ak.from > kk.viewport.to) break;
          let Fk = kk.docView.coordsAt(tk < 0 ? ak.from : ak.to, tk > 0 ? -1 : 1);
          if (Fk && (tk < 0 ? Fk.top <= sk + bk : Fk.bottom >= sk + bk)) break
        }
        let Fk = kk.viewState.heightOracle.textHeight / 2;
        sk = tk > 0 ? ak.bottom + Fk : ak.top - Fk
      }
      if (kk.viewport.from >= ak.to || kk.viewport.to <= ak.from) {
        if (Bk) return null;
        if (ak.type == gk.Text) {
          let Fk = function(kk, Fk, Bk, tk, ak) {
            let Xk = Math.round((tk - Fk.left) * kk.defaultCharacterWidth);
            if (kk.lineWrapping && Bk.height > 1.5 * kk.defaultLineHeight) {
              let Fk = kk.viewState.heightOracle.textHeight;
              Xk += Math.floor((ak - Bk.top - .5 * (kk.defaultLineHeight - Fk)) / Fk) * kk.viewState.heightOracle.lineLength
            }
            let bk = kk.state.sliceDoc(Bk.from, Bk.to);
            return Bk.from + (0, Rk.P)(bk, Xk, kk.state.tabSize)
          }(kk, Xk, ak, wk, dk);
          return new jB(Fk, Fk == ak.from ? 1 : -1)
        }
      }
      if (ak.type != gk.Text) return sk < (ak.top + ak.bottom) / 2 ? new jB(ak.from, 1) : new jB(ak.to, -1);
      let Vk = kk.docView.lineAt(ak.from, 2);
      return Vk && Vk.length == ak.length || (Vk = kk.docView.lineAt(ak.from, -2)), new nB(kk, wk, dk, kk.textDirectionAt(ak.from)).scanTile(Vk, ak.from)
    }
    class nB {
      constructor(kk, Fk, Bk, Rk) {
        this.view = kk, this.x = Fk, this.y = Bk, this.baseDir = Rk, this.line = null, this.spans = null
      }
      bidiSpansAt(kk) {
        return (!this.line || this.line.from > kk || this.line.to < kk) && (this.line = this.view.state.doc.lineAt(kk), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(kk, Fk) {
        let {
          line: Bk,
          spans: Rk
        } = this.bidiSpansAt(kk);
        return Rk[iF.find(Rk, kk - Bk.from, -1, Fk)].level == this.baseDir
      }
      dirAt(kk, Fk) {
        let {
          line: Bk,
          spans: Rk
        } = this.bidiSpansAt(kk);
        return Rk[iF.find(Rk, kk - Bk.from, -1, Fk)].dir
      }
      bidiIn(kk, Fk) {
        let {
          spans: Bk,
          line: Rk
        } = this.bidiSpansAt(kk);
        return Bk.length > 1 || Bk.length && (Bk[0].level != this.baseDir || Bk[0].to + Rk.from < Fk)
      }
      scan(kk, Fk) {
        let Bk, Rk, tk, ak = 0,
          Xk = kk.length - 1,
          bk = new Set,
          wk = this.bidiIn(kk[0], kk[Xk]),
          dk = -1,
          sk = 1e9;
        kk: for (; ak < Xk;) {
          let Vk = Xk - ak,
            Jk = ak + Xk >> 1;
          Fk: if (bk.has(Jk)) {
            let kk = ak + Math.floor(Math.random() * Vk);
            for (let Fk = 0; Fk < Vk; Fk++) {
              if (!bk.has(kk)) {
                Jk = kk;
                break Fk
              }
              kk++, kk == Xk && (kk = ak)
            }
            break kk
          } bk.add(Jk);
          let Ak = Fk(Jk);
          if (Ak)
            for (let Fk = 0; Fk < Ak.length; Fk++) {
              let bk = Ak[Fk],
                Vk = 0;
              if (!(0 == bk.width && Ak.length > 1)) {
                if (bk.bottom < this.y)(!Bk || Bk.bottom < bk.bottom) && (Bk = bk), Vk = 1;
                else if (bk.top > this.y)(!Rk || Rk.top > bk.top) && (Rk = bk), Vk = -1;
                else {
                  let kk = bk.left > this.x ? this.x - bk.left : bk.right < this.x ? this.x - bk.right : 0,
                    Fk = Math.abs(kk);
                  Fk < sk && (dk = Jk, sk = Fk, tk = bk), kk && (Vk = kk < 0 == (this.baseDir == sF.LTR) ? -1 : 1)
                } - 1 != Vk || wk && !this.baseDirAt(kk[Jk], 1) ? 1 != Vk || wk && !this.baseDirAt(kk[Jk + 1], -1) || (ak = Jk + 1) : Xk = Jk
              }
            }
        }
        if (!tk) {
          let tk = Bk && (!Rk || this.y - Bk.bottom < Rk.top - this.y) ? Bk : Rk;
          return this.y = (tk.top + tk.bottom) / 2, this.scan(kk, Fk)
        }
        if (sk) {
          if (Bk && Bk.bottom > tk.top) return this.y = Bk.bottom - 1, this.scan(kk, Fk);
          if (Rk && Rk.top < tk.bottom) return this.y = Rk.top + 1, this.scan(kk, Fk)
        }
        let Vk = (wk ? this.dirAt(kk[dk], 1) : this.baseDir) == sF.LTR;
        return {
          i: dk,
          after: this.x > (tk.left + tk.right) / 2 == Vk
        }
      }
      scanText(kk, Fk) {
        let Bk = [];
        for (let ak = 0; ak < kk.length; ak = (0, Rk.N)(kk.text, ak)) Bk.push(Fk + ak);
        Bk.push(Fk + kk.length);
        let tk = this.scan(Bk, (Rk => {
          let tk = Bk[Rk] - Fk,
            ak = Bk[Rk + 1] - Fk;
          return tF(kk.dom, tk, ak).getClientRects()
        }));
        return tk.after ? new jB(Bk[tk.i + 1], -1) : new jB(Bk[tk.i], 1)
      }
      scanTile(kk, Fk) {
        if (!kk.length) return new jB(Fk, 1);
        if (1 == kk.children.length) {
          let Bk = kk.children[0];
          if (Bk.isText()) return this.scanText(Bk, Fk);
          if (Bk.isComposite()) return this.scanTile(Bk, Fk)
        }
        let Bk = [Fk];
        for (let Xk = 0, bk = Fk; Xk < kk.children.length; Xk++) Bk.push(bk += kk.children[Xk].length);
        let Rk = this.scan(Bk, (Fk => {
            let Bk = kk.children[Fk];
            return 48 & Bk.flags ? null : (1 == Bk.dom.nodeType ? Bk.dom : tF(Bk.dom, 0, Bk.length)).getClientRects()
          })),
          tk = kk.children[Rk.i],
          ak = Bk[Rk.i];
        return tk.isText() ? this.scanText(tk, ak) : tk.isComposite() ? this.scanTile(tk, ak) : Rk.after ? new jB(Bk[Rk.i + 1], -1) : new jB(ak, 1)
      }
    }
    const IB = "\uffff";
    class QB {
      constructor(kk, Fk) {
        this.points = kk, this.view = Fk, this.text = "", this.lineSeparator = Fk.state.facet(Rk.h.lineSeparator)
      }
      append(kk) {
        this.text += kk
      }
      lineBreak() {
        this.text += IB
      }
      readRange(kk, Fk) {
        if (!kk) return this;
        let Bk = kk.parentNode;
        for (let Rk = kk;;) {
          this.findPointBefore(Bk, Rk);
          let kk = this.text.length;
          this.readNode(Rk);
          let tk = AB.get(Rk),
            ak = Rk.nextSibling;
          if (ak == Fk) {
            (null === tk || void 0 === tk ? void 0 : tk.breakAfter) && !ak && Bk != this.view.contentDOM && this.lineBreak();
            break
          }
          let Xk = AB.get(ak);
          (tk && Xk ? tk.breakAfter : (tk ? tk.breakAfter : Kk(Rk)) || Kk(ak) && ("BR" != Rk.nodeName || (null === tk || void 0 === tk ? void 0 : tk.isWidget())) && this.text.length > kk) && !FR(ak, Fk) && this.lineBreak(), Rk = ak
        }
        return this.findPointBefore(Bk, Fk), this
      }
      readTextNode(kk) {
        let Fk = kk.nodeValue;
        for (let Bk of this.points) Bk.node == kk && (Bk.pos = this.text.length + Math.min(Bk.offset, Fk.length));
        for (let Bk = 0, Rk = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let tk, ak = -1,
            Xk = 1;
          if (this.lineSeparator ? (ak = Fk.indexOf(this.lineSeparator, Bk), Xk = this.lineSeparator.length) : (tk = Rk.exec(Fk)) && (ak = tk.index, Xk = tk[0].length), this.append(Fk.slice(Bk, ak < 0 ? Fk.length : ak)), ak < 0) break;
          if (this.lineBreak(), Xk > 1)
            for (let Fk of this.points) Fk.node == kk && Fk.pos > this.text.length && (Fk.pos -= Xk - 1);
          Bk = ak + Xk
        }
      }
      readNode(kk) {
        let Fk = AB.get(kk),
          Bk = Fk && Fk.overrideDOMText;
        if (null != Bk) {
          this.findPointInside(kk, Bk.length);
          for (let kk = Bk.iter(); !kk.next().done;) kk.lineBreak ? this.lineBreak() : this.append(kk.value)
        } else 3 == kk.nodeType ? this.readTextNode(kk) : "BR" == kk.nodeName ? kk.nextSibling && this.lineBreak() : 1 == kk.nodeType && this.readRange(kk.firstChild, null)
      }
      findPointBefore(kk, Fk) {
        for (let Bk of this.points) Bk.node == kk && kk.childNodes[Bk.offset] == Fk && (Bk.pos = this.text.length)
      }
      findPointInside(kk, Fk) {
        for (let Bk of this.points)(3 == kk.nodeType ? Bk.node == kk : kk.contains(Bk.node)) && (Bk.pos = this.text.length + (kR(kk, Bk.node, Bk.offset) ? Fk : 0))
      }
    }

    function kR(kk, Fk, Bk) {
      for (;;) {
        if (!Fk || Bk < jk(Fk)) return !1;
        if (Fk == kk) return !0;
        Bk = pk(Fk) + 1, Fk = Fk.parentNode
      }
    }

    function FR(kk, Fk) {
      let Bk;
      for (; kk != Fk && kk; kk = kk.nextSibling) {
        let Fk = AB.get(kk);
        if (!(null === Fk || void 0 === Fk ? void 0 : Fk.isWidget())) return !1;
        Fk && (Bk || (Bk = [])).push(Fk)
      }
      if (Bk)
        for (let Rk of Bk) {
          let kk = Rk.overrideDOMText;
          if (null === kk || void 0 === kk ? void 0 : kk.length) return !1
        }
      return !0
    }
    class BR {
      constructor(kk, Fk) {
        this.node = kk, this.offset = Fk, this.pos = -1
      }
    }
    class RR {
      constructor(kk, Fk, Bk, tk) {
        this.typeOver = tk, this.bounds = null, this.text = "", this.domChanged = Fk > -1;
        let {
          impreciseHead: ak,
          impreciseAnchor: Xk
        } = kk.docView, bk = kk.state.selection;
        if (kk.state.readOnly && Fk > -1) this.newSel = null;
        else if (Fk > -1 && (this.bounds = tR(kk.docView.tile, Fk, Bk, 0))) {
          let Fk = ak || Xk ? [] : function(kk) {
              let Fk = [];
              if (kk.root.activeElement != kk.contentDOM) return Fk;
              let {
                anchorNode: Bk,
                anchorOffset: Rk,
                focusNode: tk,
                focusOffset: ak
              } = kk.observer.selectionRange;
              Bk && (Fk.push(new BR(Bk, Rk)), tk == Bk && ak == Rk || Fk.push(new BR(tk, ak)));
              return Fk
            }(kk),
            Bk = new QB(Fk, kk);
          Bk.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = Bk.text, this.newSel = function(kk, Fk) {
            if (0 == kk.length) return null;
            let Bk = kk[0].pos,
              tk = 2 == kk.length ? kk[1].pos : Bk;
            return Bk > -1 && tk > -1 ? Rk.f.single(Bk + Fk, tk + Fk) : null
          }(Fk, this.bounds.from)
        } else {
          let Fk = kk.observer.selectionRange,
            Bk = ak && ak.node == Fk.focusNode && ak.offset == Fk.focusOffset || !hk(kk.contentDOM, Fk.focusNode) ? bk.main.head : kk.docView.posFromDOM(Fk.focusNode, Fk.focusOffset),
            tk = Xk && Xk.node == Fk.anchorNode && Xk.offset == Fk.anchorOffset || !hk(kk.contentDOM, Fk.anchorNode) ? bk.main.anchor : kk.docView.posFromDOM(Fk.anchorNode, Fk.anchorOffset),
            wk = kk.viewport;
          if ((Ok.ios || Ok.chrome) && bk.main.empty && Bk != tk && (wk.from > 0 || wk.to < kk.state.doc.length)) {
            let Fk = Math.min(Bk, tk),
              Rk = Math.max(Bk, tk),
              ak = wk.from - Fk,
              Xk = wk.to - Rk;
            0 != ak && 1 != ak && 0 != Fk || 0 != Xk && -1 != Xk && Rk != kk.state.doc.length || (Bk = 0, tk = kk.state.doc.length)
          }
          if (kk.inputState.composing > -1 && bk.hb.length > 1) this.newSel = bk.replaceRange(Rk.f.range(tk, Bk));
          else if (kk.lineWrapping && tk == Bk && (!bk.main.empty || bk.main.head != Bk) && kk.inputState.lastTouchTime > Date.now() - 100) {
            let Fk = kk.coordsAtPos(Bk, -1),
              tk = 0;
            Fk && (tk = kk.inputState.lastTouchY <= Fk.bottom ? -1 : 1), this.newSel = Rk.f.create([Rk.f.cursor(Bk, tk)])
          } else this.newSel = Rk.f.single(tk, Bk)
        }
      }
    }

    function tR(kk, Fk, Bk, Rk) {
      if (kk.isComposite()) {
        let tk = -1,
          ak = -1,
          Xk = -1,
          bk = -1;
        for (let wk = 0, dk = Rk, sk = Rk; wk < kk.children.length; wk++) {
          let Rk = kk.children[wk],
            Vk = dk + Rk.length;
          if (dk < Fk && Vk > Bk) return tR(Rk, Fk, Bk, dk);
          if (Vk >= Fk && -1 == tk && (tk = wk, ak = dk), dk > Bk && Rk.dom.parentNode == kk.dom) {
            Xk = wk, bk = sk;
            break
          }
          sk = Vk, dk = Vk + Rk.breakAfter
        }
        return {
          from: ak,
          to: bk < 0 ? Rk + kk.length : bk,
          startDOM: (tk ? kk.children[tk - 1].dom.nextSibling : null) || kk.dom.firstChild,
          endDOM: Xk < kk.children.length && Xk >= 0 ? kk.children[Xk].dom : null
        }
      }
      return kk.isText() ? {
        from: Rk,
        to: Rk + kk.length,
        startDOM: kk.dom,
        endDOM: kk.dom.nextSibling
      } : null
    }

    function aR(kk, Fk) {
      let Bk, {
          newSel: tk
        } = Fk,
        {
          state: ak
        } = kk,
        Xk = ak.selection.main,
        bk = kk.inputState.lastKeyTime > Date.now() - 100 ? kk.inputState.lastKeyCode : -1;
      if (Fk.bounds) {
        let {
          from: kk,
          to: tk
        } = Fk.bounds, wk = Xk.from, dk = null;
        (8 === bk || Ok.android && Fk.text.length < tk - kk) && (wk = Xk.to, dk = "end");
        let sk, Vk, Jk = ak.doc.sliceString(kk, tk, IB);
        !Xk.empty && Xk.from >= kk && Xk.to <= tk && (Fk.typeOver || Jk != Fk.text) && Jk.slice(0, Xk.from - kk) == Fk.text.slice(0, Xk.from - kk) && Jk.slice(Xk.to - kk) == Fk.text.slice(sk = Fk.text.length - (Jk.length - (Xk.to - kk))) ? Bk = {
          from: Xk.from,
          to: Xk.to,
          insert: Rk.B.of(Fk.text.slice(Xk.from - kk, sk).split(IB))
        } : (Vk = bR(Jk, Fk.text, wk - kk, dk)) && (Ok.chrome && 13 == bk && Vk.toB == Vk.from + 2 && Fk.text.slice(Vk.from, Vk.toB) == IB + IB && Vk.toB--, Bk = {
          from: kk + Vk.from,
          to: kk + Vk.toA,
          insert: Rk.B.of(Fk.text.slice(Vk.from, Vk.toB).split(IB))
        })
      } else tk && (!kk.hasFocus && ak.facet(xF) || wR(tk, Xk)) && (tk = null);
      if (!Bk && !tk) return !1;
      if ((Ok.mac || Ok.android) && Bk && Bk.from == Bk.to && Bk.from == Xk.head - 1 && /^\. ?$/.test(Bk.insert.toString()) && "off" == kk.contentDOM.getAttribute("autocorrect") ? (tk && 2 == Bk.insert.length && (tk = Rk.f.single(tk.main.anchor - 1, tk.main.head - 1)), Bk = {
          from: Bk.from,
          to: Bk.to,
          insert: Rk.B.of([Bk.insert.toString().replace(".", " ")])
        }) : ak.doc.lineAt(Xk.from).to < Xk.to && kk.docView.lineHasWidget(Xk.to) && kk.inputState.insertingTextAt > Date.now() - 50 ? Bk = {
          from: Xk.from,
          to: Xk.to,
          insert: ak.toText(kk.inputState.insertingText)
        } : Ok.chrome && Bk && Bk.from == Bk.to && Bk.from == Xk.head && "\n " == Bk.insert.toString() && kk.lineWrapping && (tk && (tk = Rk.f.single(tk.main.anchor - 1, tk.main.head - 1)), Bk = {
          from: Xk.from,
          to: Xk.to,
          insert: Rk.B.of([" "])
        }), Bk) return XR(kk, Bk, tk, bk);
      if (tk && !wR(tk, Xk)) {
        let Fk = !1,
          Bk = "select";
        return kk.inputState.lastSelectionTime > Date.now() - 50 && ("select" == kk.inputState.lastSelectionOrigin && (Fk = !0), Bk = kk.inputState.lastSelectionOrigin, "select.pointer" == Bk && (tk = KB(ak.facet(tB).map((Fk => Fk(kk))), tk))), kk.dispatch({
          selection: tk,
          scrollIntoView: Fk,
          userEvent: Bk
        }), !0
      }
      return !1
    }

    function XR(kk, Fk, Bk) {
      let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (Ok.ios && kk.inputState.flushIOSKey(Fk)) return !0;
      let ak = kk.state.selection.main;
      if (Ok.android && (Fk.to == ak.to && (Fk.from == ak.from || Fk.from == ak.from - 1 && " " == kk.state.sliceDoc(Fk.from, ak.from)) && 1 == Fk.insert.length && 2 == Fk.insert.lines && aF(kk.contentDOM, "Enter", 13) || (Fk.from == ak.from - 1 && Fk.to == ak.to && 0 == Fk.insert.length || 8 == tk && Fk.insert.length < Fk.to - Fk.from && Fk.to > ak.head) && aF(kk.contentDOM, "Backspace", 8) || Fk.from == ak.from && Fk.to == ak.to + 1 && 0 == Fk.insert.length && aF(kk.contentDOM, "Delete", 46))) return !0;
      let Xk, bk = Fk.insert.toString();
      kk.inputState.composing >= 0 && kk.inputState.composing++;
      let wk = () => Xk || (Xk = function(kk, Fk, Bk) {
        let tk, ak = kk.state,
          Xk = ak.selection.main,
          bk = -1;
        if (Fk.from == Fk.to && Fk.from < Xk.from || Fk.from > Xk.to) {
          let Bk = Fk.from < Xk.from ? -1 : 1,
            Rk = Bk < 0 ? Xk.from : Xk.to,
            tk = pB(ak.facet(tB).map((Fk => Fk(kk))), Rk, Bk);
          Fk.from == tk && (bk = tk)
        }
        if (bk > -1) tk = {
          changes: Fk,
          selection: Rk.f.cursor(Fk.from + Fk.insert.length, -1)
        };
        else if (Fk.from >= Xk.from && Fk.to <= Xk.to && Fk.to - Fk.from >= (Xk.to - Xk.from) / 3 && (!Bk || Bk.main.empty && Bk.main.from == Fk.from + Fk.insert.length) && kk.inputState.composing < 0) {
          let Bk = Xk.from < Fk.from ? ak.sliceDoc(Xk.from, Fk.from) : "",
            Rk = Xk.to > Fk.to ? ak.sliceDoc(Fk.to, Xk.to) : "";
          tk = ak.replaceSelection(kk.state.toText(Bk + Fk.insert.sliceString(0, void 0, kk.state.lineBreak) + Rk))
        } else {
          let bk = ak.changes(Fk),
            wk = Bk && Bk.main.to <= bk.newLength ? Bk.main : void 0;
          if (ak.selection.hb.length > 1 && (kk.inputState.composing >= 0 || kk.inputState.compositionPendingChange) && Fk.to <= Xk.to + 10 && Fk.to >= Xk.to - 10) {
            let dk, sk = kk.state.sliceDoc(Fk.from, Fk.to),
              Vk = Bk && zB(kk, Bk.main.head);
            if (Vk) {
              let kk = Fk.insert.length - (Fk.to - Fk.from);
              dk = {
                from: Vk.from,
                to: Vk.to - kk
              }
            } else dk = kk.state.doc.lineAt(Xk.head);
            let Jk = Xk.to - Fk.to;
            tk = ak.changeByRange((Bk => {
              if (Bk.from == Xk.from && Bk.to == Xk.to) return {
                changes: bk,
                range: wk || Bk.map(bk)
              };
              let tk = Bk.to - Jk,
                Vk = tk - sk.length;
              if (kk.state.sliceDoc(Vk, tk) != sk || tk >= dk.from && Vk <= dk.to) return {
                range: Bk
              };
              let Ak = ak.changes({
                  from: Vk,
                  to: tk,
                  insert: Fk.insert
                }),
                ek = Bk.to - Xk.to;
              return {
                changes: Ak,
                range: wk ? Rk.f.range(Math.max(0, wk.anchor + ek), Math.max(0, wk.head + ek)) : Bk.map(Ak)
              }
            }))
          } else tk = {
            changes: bk,
            selection: wk && ak.selection.replaceRange(wk)
          }
        }
        let wk = "input.type";
        (kk.composing || kk.inputState.compositionPendingChange && kk.inputState.compositionEndedAt > Date.now() - 50) && (kk.inputState.compositionPendingChange = !1, wk += ".compose", kk.inputState.compositionFirstChange && (wk += ".start", kk.inputState.compositionFirstChange = !1));
        return ak.update(tk, {
          userEvent: wk,
          scrollIntoView: !0
        })
      }(kk, Fk, Bk));
      return kk.state.facet(TF).some((Bk => Bk(kk, Fk.from, Fk.to, bk, wk))) || kk.dispatch(wk()), !0
    }

    function bR(kk, Fk, Bk, Rk) {
      let tk = Math.min(kk.length, Fk.length),
        ak = 0;
      for (; ak < tk && kk.charCodeAt(ak) == Fk.charCodeAt(ak);) ak++;
      if (ak == tk && kk.length == Fk.length) return null;
      let Xk = kk.length,
        bk = Fk.length;
      for (; Xk > 0 && bk > 0 && kk.charCodeAt(Xk - 1) == Fk.charCodeAt(bk - 1);) Xk--, bk--;
      if ("end" == Rk) {
        Bk -= Xk + Math.max(0, ak - Math.min(Xk, bk)) - ak
      }
      if (Xk < ak && kk.length < Fk.length) {
        ak -= Bk <= ak && Bk >= Xk ? ak - Bk : 0, bk = ak + (bk - Xk), Xk = ak
      } else if (bk < ak) {
        ak -= Bk <= ak && Bk >= bk ? ak - Bk : 0, Xk = ak + (Xk - bk), bk = ak
      }
      return {
        from: ak,
        toA: Xk,
        toB: bk
      }
    }

    function wR(kk, Fk) {
      return Fk.head == kk.main.head && Fk.anchor == kk.main.anchor
    }
    class dR {
      setSelectionOrigin(kk) {
        this.lastSelectionOrigin = kk, this.lastSelectionTime = Date.now()
      }
      constructor(kk) {
        this.view = kk, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = kk.hasFocus, Ok.safari && kk.contentDOM.addEventListener("input", (() => null)), Ok.gecko && function(kk) {
          cR.has(kk) || (cR.add(kk), kk.addEventListener("copy", (() => {})), kk.addEventListener("cut", (() => {})))
        }(kk.contentDOM.ownerDocument)
      }
      handleEvent(kk) {
        (function(kk, Fk) {
          if (!Fk.bubbles) return !0;
          if (Fk.defaultPrevented) return !1;
          for (let Bk, Rk = Fk.target; Rk != kk.contentDOM; Rk = Rk.parentNode)
            if (!Rk || 11 == Rk.nodeType || (Bk = AB.get(Rk)) && Bk.isWidget() && !Bk.isHidden && Bk.widget.ignoreEvent(Fk)) return !1;
          return !0
        })(this.view, kk) && !this.ignoreDuringComposition(kk) && ("keydown" == kk.type && this.keydown(kk) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(kk.type, kk))) : this.runHandlers(kk.type, kk)))
      }
      runHandlers(kk, Fk) {
        let Bk = this.handlers[kk];
        if (Bk) {
          for (let kk of Bk.observers) kk(this.view, Fk);
          for (let kk of Bk.handlers) {
            if (Fk.defaultPrevented) break;
            if (kk(this.view, Fk)) {
              Fk.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(kk) {
        let Fk = VR(kk),
          Bk = this.handlers,
          Rk = this.view.contentDOM;
        for (let tk in Fk)
          if ("scroll" != tk) {
            let kk = !Fk[tk].handlers.length,
              ak = Bk[tk];
            ak && kk != !ak.handlers.length && (Rk.removeEventListener(tk, this.handleEvent), ak = null), ak || Rk.addEventListener(tk, this.handleEvent, {
              passive: kk
            })
          } for (let tk in Bk) "scroll" == tk || Fk[tk] || Rk.removeEventListener(tk, this.handleEvent);
        this.handlers = Fk
      }
      keydown(kk) {
        if (this.lastKeyCode = kk.keyCode, this.lastKeyTime = Date.now(), 9 == kk.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != kk.keyCode && eR.indexOf(kk.keyCode) < 0 && (this.tabFocusMode = -1), Ok.android && Ok.chrome && !kk.synthetic && (13 == kk.keyCode || 8 == kk.keyCode)) return this.view.observer.delayAndroidKey(kk.key, kk.keyCode), !0;
        let Fk;
        return !Ok.ios || kk.synthetic || kk.altKey || kk.metaKey || kk.shiftKey || !((Fk = JR.find((Fk => Fk.keyCode == kk.keyCode))) && !kk.ctrlKey || AR.indexOf(kk.key) > -1 && kk.ctrlKey) ? (229 != kk.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = Fk || kk, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(kk) {
        let Fk = this.pendingIOSKey;
        return !!Fk && (!("Enter" == Fk.key && kk && kk.from < kk.to && /^\S+$/.test(kk.insert.toString())) && (this.pendingIOSKey = void 0, aF(this.view.contentDOM, Fk.key, Fk.keyCode, Fk instanceof KeyboardEvent ? Fk : void 0)))
      }
      ignoreDuringComposition(kk) {
        return !(!/^key/.test(kk.type) || kk.synthetic) && (this.composing > 0 || !!(Ok.safari && !Ok.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(kk) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = kk
      }
      update(kk) {
        this.view.observer.update(kk), this.mouseSelection && this.mouseSelection.update(kk), this.draggedContent && kk.docChanged && (this.draggedContent = this.draggedContent.map(kk.changes)), kk.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function sR(kk, Fk) {
      return (Bk, Rk) => {
        try {
          return Fk.call(kk, Rk, Bk)
        } catch (tk) {
          KF(Bk.state, tk)
        }
      }
    }

    function VR(kk) {
      let Fk = Object.create(null);

      function Bk(kk) {
        return Fk[kk] || (Fk[kk] = {
          observers: [],
          handlers: []
        })
      }
      for (let Rk of kk) {
        let kk = Rk.spec,
          Fk = kk && kk.plugin.domEventHandlers,
          tk = kk && kk.plugin.domEventObservers;
        if (Fk)
          for (let ak in Fk) {
            let kk = Fk[ak];
            kk && Bk(ak).handlers.push(sR(Rk.value, kk))
          }
        if (tk)
          for (let ak in tk) {
            let kk = tk[ak];
            kk && Bk(ak).observers.push(sR(Rk.value, kk))
          }
      }
      for (let Rk in mR) Bk(Rk).handlers.push(mR[Rk]);
      for (let Rk in WR) Bk(Rk).observers.push(WR[Rk]);
      return Fk
    }
    const JR = [{
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
      AR = "dthko",
      eR = [16, 17, 18, 20, 91, 92, 224, 225];

    function yR(kk) {
      return .7 * Math.max(0, kk) + 8
    }
    class fR {
      constructor(kk, Fk, Bk, tk) {
        this.view = kk, this.startEvent = Fk, this.style = Bk, this.mustSelect = tk, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = Fk, this.scrollParents = Qk(kk.contentDOM), this.atoms = kk.state.facet(tB).map((Fk => Fk(kk)));
        let ak = kk.contentDOM.ownerDocument;
        ak.addEventListener("mousemove", this.move = this.move.bind(this)), ak.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = Fk.shiftKey, this.multiple = kk.state.facet(Rk.h.allowMultipleSelections) && function(kk, Fk) {
          let Bk = kk.state.facet(MF);
          return Bk.length ? Bk[0](Fk) : Ok.mac ? Fk.metaKey : Fk.ctrlKey
        }(kk, Fk), this.dragging = !(! function(kk, Fk) {
          let {
            main: Bk
          } = kk.state.selection;
          if (Bk.empty) return !1;
          let Rk = Pk(kk.root);
          if (!Rk || 0 == Rk.rangeCount) return !0;
          let tk = Rk.getRangeAt(0).getClientRects();
          for (let ak = 0; ak < tk.length; ak++) {
            let kk = tk[ak];
            if (kk.left <= Fk.clientX && kk.right >= Fk.clientX && kk.top <= Fk.clientY && kk.bottom >= Fk.clientY) return !0
          }
          return !1
        }(kk, Fk) || 1 != NR(Fk)) && null
      }
      start(kk) {
        !1 === this.dragging && this.select(kk)
      }
      move(kk) {
        if (0 == kk.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (Fk = this.startEvent, Bk = kk, Math.max(Math.abs(Fk.clientX - Bk.clientX), Math.abs(Fk.clientY - Bk.clientY)) < 10)) return;
        var Fk, Bk;
        this.select(this.lastEvent = kk);
        let Rk = 0,
          tk = 0,
          ak = 0,
          Xk = 0,
          bk = this.view.win.innerWidth,
          wk = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: ak,
          right: bk
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: Xk,
          bottom: wk
        } = this.scrollParents.y.getBoundingClientRect());
        let dk = wB(this.view);
        kk.clientX - dk.left <= ak + 6 ? Rk = -yR(ak - kk.clientX) : kk.clientX + dk.right >= bk - 6 && (Rk = yR(kk.clientX - bk)), kk.clientY - dk.top <= Xk + 6 ? tk = -yR(Xk - kk.clientY) : kk.clientY + dk.bottom >= wk - 6 && (tk = yR(kk.clientY - wk)), this.setScrollSpeed(Rk, tk)
      }
      up(kk) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || kk.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let kk = this.view.contentDOM.ownerDocument;
        kk.removeEventListener("mousemove", this.move), kk.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(kk, Fk) {
        this.scrollSpeed = {
          x: kk,
          y: Fk
        }, kk || Fk ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: kk,
          y: Fk
        } = this.scrollSpeed;
        kk && this.scrollParents.x && (this.scrollParents.x.scrollLeft += kk, kk = 0), Fk && this.scrollParents.y && (this.scrollParents.y.scrollTop += Fk, Fk = 0), (kk || Fk) && this.view.win.scrollBy(kk, Fk), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(kk) {
        let {
          view: Fk
        } = this, Bk = KB(this.atoms, this.style.get(kk, this.extend, this.multiple));
        !this.mustSelect && Bk.eq(Fk.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: Bk,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(kk) {
        kk.transactions.some((kk => kk.isUserEvent("input.type"))) ? this.destroy() : this.style.update(kk) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const mR = Object.create(null),
      WR = Object.create(null),
      vR = Ok.ie && Ok.ie_version < 15 || Ok.ios && Ok.webkit_version < 604;

    function iR(kk, Fk, Bk) {
      for (let Rk of kk.facet(Fk)) Bk = Rk(Bk, kk);
      return Bk
    }

    function YR(kk, Fk) {
      Fk = iR(kk.state, DF, Fk);
      let Bk, {
          state: tk
        } = kk,
        ak = 1,
        Xk = tk.toText(Fk),
        bk = Xk.lines == tk.selection.hb.length;
      if (null != uR && tk.selection.hb.every((kk => kk.empty)) && uR == Xk.toString()) {
        let kk = -1;
        Bk = tk.changeByRange((Bk => {
          let wk = tk.doc.lineAt(Bk.from);
          if (wk.from == kk) return {
            range: Bk
          };
          kk = wk.from;
          let dk = tk.toText((bk ? Xk.line(ak++).text : Fk) + tk.lineBreak);
          return {
            changes: {
              from: wk.from,
              insert: dk
            },
            range: Rk.f.cursor(Bk.from + dk.length)
          }
        }))
      } else Bk = bk ? tk.changeByRange((kk => {
        let Fk = Xk.line(ak++);
        return {
          changes: {
            from: kk.from,
            to: kk.to,
            insert: Fk.text
          },
          range: Rk.f.cursor(kk.from + Fk.length)
        }
      })) : tk.replaceSelection(Xk);
      kk.dispatch(Bk, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function oR(kk, Fk, Bk, tk) {
      if (1 == tk) return Rk.f.cursor(Fk, Bk);
      if (2 == tk) return function(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          tk = kk.charCategorizer(Fk),
          ak = kk.doc.lineAt(Fk),
          Xk = Fk - ak.from;
        if (0 == ak.length) return Rk.f.cursor(Fk);
        0 == Xk ? Bk = 1 : Xk == ak.length && (Bk = -1);
        let bk = Xk,
          wk = Xk;
        Bk < 0 ? bk = (0, Rk.N)(ak.text, Xk, !1) : wk = (0, Rk.N)(ak.text, Xk);
        let dk = tk(ak.text.slice(bk, wk));
        for (; bk > 0;) {
          let kk = (0, Rk.N)(ak.text, bk, !1);
          if (tk(ak.text.slice(kk, bk)) != dk) break;
          bk = kk
        }
        for (; wk < ak.length;) {
          let kk = (0, Rk.N)(ak.text, wk);
          if (tk(ak.text.slice(wk, kk)) != dk) break;
          wk = kk
        }
        return Rk.f.range(bk + ak.from, wk + ak.from)
      }(kk.state, Fk, Bk);
      {
        let tk = kk.docView.lineAt(Fk, Bk),
          ak = kk.state.doc.lineAt(tk ? tk.posAtEnd : Fk),
          Xk = tk ? tk.posAtStart : ak.from,
          bk = tk ? tk.posAtEnd : ak.to;
        return bk < kk.state.doc.length && bk == ak.to && bk++, Rk.f.range(Xk, bk)
      }
    }
    WR.scroll = kk => {
      kk.inputState.lastScrollTop = kk.scrollDOM.scrollTop, kk.inputState.lastScrollLeft = kk.scrollDOM.scrollLeft
    }, WR.wheel = WR.mousewheel = kk => {
      kk.inputState.lastWheelEvent = Date.now()
    }, mR.keydown = (kk, Fk) => (kk.inputState.setSelectionOrigin("select"), 27 == Fk.keyCode && 0 != kk.inputState.tabFocusMode && (kk.inputState.tabFocusMode = Date.now() + 2e3), !1), WR.touchstart = (kk, Fk) => {
      let Bk = kk.inputState,
        Rk = Fk.targetTouches[0];
      Bk.lastTouchTime = Date.now(), Rk && (Bk.lastTouchX = Rk.clientX, Bk.lastTouchY = Rk.clientY), Bk.setSelectionOrigin("select.pointer")
    }, WR.touchmove = kk => {
      kk.inputState.setSelectionOrigin("select.pointer")
    }, mR.mousedown = (kk, Fk) => {
      if (kk.observer.flush(), kk.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let Bk = null;
      for (let Rk of kk.state.facet(UF))
        if (Bk = Rk(kk, Fk), Bk) break;
      if (Bk || 0 != Fk.button || (Bk = function(kk, Fk) {
          let Bk = kk.posAndSideAtCoords({
              x: Fk.clientX,
              y: Fk.clientY
            }, !1),
            tk = NR(Fk),
            ak = kk.state.selection;
          return {
            update(kk) {
              kk.docChanged && (Bk.pos = kk.changes.mapPos(Bk.pos), ak = ak.map(kk.changes))
            },
            get(Fk, Xk, bk) {
              let wk, dk = kk.posAndSideAtCoords({
                  x: Fk.clientX,
                  y: Fk.clientY
                }, !1),
                sk = oR(kk, dk.pos, dk.assoc, tk);
              if (Bk.pos != dk.pos && !Xk) {
                let Fk = oR(kk, Bk.pos, Bk.assoc, tk),
                  ak = Math.min(Fk.from, sk.from),
                  Xk = Math.max(Fk.to, sk.to);
                sk = ak < sk.from ? Rk.f.range(ak, Xk, sk.assoc) : Rk.f.range(Xk, ak, sk.assoc)
              }
              return Xk ? ak.replaceRange(ak.main.extend(sk.from, sk.to, sk.assoc)) : bk && 1 == tk && ak.hb.length > 1 && (wk = function(kk, Fk) {
                for (let Bk = 0; Bk < kk.hb.length; Bk++) {
                  let {
                    from: tk,
                    to: ak
                  } = kk.hb[Bk];
                  if (tk <= Fk && ak >= Fk) return Rk.f.create(kk.hb.slice(0, Bk).concat(kk.hb.slice(Bk + 1)), kk.mainIndex == Bk ? 0 : kk.mainIndex - (kk.mainIndex > Bk ? 1 : 0))
                }
                return null
              }(ak, dk.pos)) ? wk : bk ? ak.addRange(sk) : Rk.f.create([sk])
            }
          }
        }(kk, Fk)), Bk) {
        let Rk = !kk.hasFocus;
        kk.inputState.startMouseSelection(new fR(kk, Fk, Bk, Rk)), Rk && kk.observer.ignore((() => {
          RF(kk.contentDOM);
          let Fk = kk.root.activeElement;
          Fk && !Fk.contains(kk.contentDOM) && Fk.blur()
        }));
        let tk = kk.inputState.mouseSelection;
        if (tk) return tk.start(Fk), !1 === tk.dragging
      } else kk.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const LR = Ok.ie && Ok.ie_version <= 11;
    let OR = null,
      ER = 0,
      SR = 0;

    function NR(kk) {
      if (!LR) return kk.detail;
      let Fk = OR,
        Bk = SR;
      return OR = kk, SR = Date.now(), ER = !Fk || Bk > Date.now() - 400 && Math.abs(Fk.clientX - kk.clientX) < 2 && Math.abs(Fk.clientY - kk.clientY) < 2 ? (ER + 1) % 3 : 1
    }

    function HR(kk, Fk, Bk, Rk) {
      if (!(Bk = iR(kk.state, DF, Bk))) return;
      let tk = kk.posAtCoords({
          x: Fk.clientX,
          y: Fk.clientY
        }, !1),
        {
          draggedContent: ak
        } = kk.inputState,
        Xk = Rk && ak && function(kk, Fk) {
          let Bk = kk.state.facet(gF);
          return Bk.length ? Bk[0](Fk) : Ok.mac ? !Fk.altKey : !Fk.ctrlKey
        }(kk, Fk) ? {
          from: ak.from,
          to: ak.to
        } : null,
        bk = {
          from: tk,
          insert: Bk
        },
        wk = kk.state.changes(Xk ? [Xk, bk] : bk);
      kk.focus(), kk.dispatch({
        changes: wk,
        selection: {
          anchor: wk.mapPos(tk, -1),
          head: wk.mapPos(tk, 1)
        },
        userEvent: Xk ? "move.drop" : "input.drop"
      }), kk.inputState.draggedContent = null
    }
    mR.dragstart = (kk, Fk) => {
      let {
        selection: {
          main: Bk
        }
      } = kk.state;
      if (Fk.target.draggable) {
        let tk = kk.docView.tile.nearest(Fk.target);
        if (tk && tk.isWidget()) {
          let kk = tk.posAtStart,
            Fk = kk + tk.length;
          (kk >= Bk.to || Fk <= Bk.from) && (Bk = Rk.f.range(kk, Fk))
        }
      }
      let {
        inputState: tk
      } = kk;
      return tk.mouseSelection && (tk.mouseSelection.dragging = !0), tk.draggedContent = Bk, Fk.dataTransfer && (Fk.dataTransfer.setData("Text", iR(kk.state, zF, kk.state.sliceDoc(Bk.from, Bk.to))), Fk.dataTransfer.effectAllowed = "copyMove"), !1
    }, mR.dragend = kk => (kk.inputState.draggedContent = null, !1), mR.drop = (kk, Fk) => {
      if (!Fk.dataTransfer) return !1;
      if (kk.state.readOnly) return !0;
      let Bk = Fk.dataTransfer.files;
      if (Bk && Bk.length) {
        let Rk = Array(Bk.length),
          tk = 0,
          ak = () => {
            ++tk == Bk.length && HR(kk, Fk, Rk.filter((kk => null != kk)).join(kk.state.lineBreak), !1)
          };
        for (let kk = 0; kk < Bk.length; kk++) {
          let Fk = new FileReader;
          Fk.onerror = ak, Fk.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(Fk.result) || (Rk[kk] = Fk.result), ak()
          }, Fk.readAsText(Bk[kk])
        }
        return !0
      } {
        let Bk = Fk.dataTransfer.getData("Text");
        if (Bk) return HR(kk, Fk, Bk, !0), !0
      }
      return !1
    }, mR.paste = (kk, Fk) => {
      if (kk.state.readOnly) return !0;
      kk.observer.flush();
      let Bk = vR ? null : Fk.clipboardData;
      return Bk ? (YR(kk, Bk.getData("text/plain") || Bk.getData("text/uri-list")), !0) : (function(kk) {
        let Fk = kk.dom.parentNode;
        if (!Fk) return;
        let Bk = Fk.appendChild(document.createElement("textarea"));
        Bk.style.cssText = "position: fixed; left: -10000px; top: 10px", Bk.focus(), setTimeout((() => {
          kk.focus(), Bk.remove(), YR(kk, Bk.value)
        }), 50)
      }(kk), !1)
    };
    let uR = null;
    mR.copy = mR.cut = (kk, Fk) => {
      if (!qk(kk.contentDOM, kk.observer.selectionRange)) return !1;
      let {
        text: Bk,
        hb: Rk,
        linewise: tk
      } = function(kk) {
        let Fk = [],
          Bk = [],
          Rk = !1;
        for (let tk of kk.selection.hb) tk.empty || (Fk.push(kk.sliceDoc(tk.from, tk.to)), Bk.push(tk));
        if (!Fk.length) {
          let tk = -1;
          for (let {
              from: Rk
            }
            of kk.selection.hb) {
            let ak = kk.doc.lineAt(Rk);
            ak.number > tk && (Fk.push(ak.text), Bk.push({
              from: ak.from,
              to: Math.min(kk.doc.length, ak.to + 1)
            })), tk = ak.number
          }
          Rk = !0
        }
        return {
          text: iR(kk, zF, Fk.join(kk.lineBreak)),
          hb: Bk,
          linewise: Rk
        }
      }(kk.state);
      if (!Bk && !tk) return !1;
      uR = tk ? Bk : null, "cut" != Fk.type || kk.state.readOnly || kk.dispatch({
        changes: Rk,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let ak = vR ? null : Fk.clipboardData;
      return ak ? (ak.clearData(), ak.setData("text/plain", Bk), !0) : (function(kk, Fk) {
        let Bk = kk.dom.parentNode;
        if (!Bk) return;
        let Rk = Bk.appendChild(document.createElement("textarea"));
        Rk.style.cssText = "position: fixed; left: -10000px; top: 10px", Rk.value = Fk, Rk.focus(), Rk.selectionEnd = Fk.length, Rk.selectionStart = 0, setTimeout((() => {
          Rk.remove(), kk.focus()
        }), 50)
      }(kk, Bk), !1)
    };
    const MR = Rk.b.define();

    function gR(kk, Fk) {
      let Bk = [];
      for (let Rk of kk.facet(rF)) {
        let tk = Rk(kk, Fk);
        tk && Bk.push(tk)
      }
      return Bk.length ? kk.update({
        effects: Bk,
        annotations: MR.of(!0)
      }) : null
    }

    function UR(kk) {
      setTimeout((() => {
        let Fk = kk.hasFocus;
        if (Fk != kk.inputState.notifiedFocused) {
          let Bk = gR(kk.state, Fk);
          Bk ? kk.dispatch(Bk) : kk.update([])
        }
      }), 10)
    }
    WR.focus = kk => {
      kk.inputState.lastFocusTime = Date.now(), kk.scrollDOM.scrollTop || !kk.inputState.lastScrollTop && !kk.inputState.lastScrollLeft || (kk.scrollDOM.scrollTop = kk.inputState.lastScrollTop, kk.scrollDOM.scrollLeft = kk.inputState.lastScrollLeft), UR(kk)
    }, WR.blur = kk => {
      kk.observer.clearSelectionRange(), UR(kk)
    }, WR.compositionstart = WR.compositionupdate = kk => {
      kk.observer.editContext || (null == kk.inputState.compositionFirstChange && (kk.inputState.compositionFirstChange = !0), kk.inputState.composing < 0 && (kk.inputState.composing = 0))
    }, WR.compositionend = kk => {
      kk.observer.editContext || (kk.inputState.composing = -1, kk.inputState.compositionEndedAt = Date.now(), kk.inputState.compositionPendingKey = !0, kk.inputState.compositionPendingChange = kk.observer.pendingRecords().length > 0, kk.inputState.compositionFirstChange = null, Ok.chrome && Ok.android ? kk.observer.flushSoon() : kk.inputState.compositionPendingChange ? Promise.resolve().then((() => kk.observer.flush())) : setTimeout((() => {
        kk.inputState.composing < 0 && kk.docView.hasComposition && kk.update([])
      }), 50))
    }, WR.contextmenu = kk => {
      kk.inputState.lastContextMenu = Date.now()
    }, mR.beforeinput = (kk, Fk) => {
      var Bk, Rk;
      if ("insertText" != Fk.inputType && "insertCompositionText" != Fk.inputType || (kk.inputState.insertingText = Fk.data, kk.inputState.insertingTextAt = Date.now()), "insertReplacementText" == Fk.inputType && kk.observer.editContext) {
        let Rk = null === (Bk = Fk.dataTransfer) || void 0 === Bk ? void 0 : Bk.getData("text/plain"),
          tk = Fk.getTargetRanges();
        if (Rk && tk.length) {
          let Fk = tk[0],
            Bk = kk.posAtDOM(Fk.startContainer, Fk.startOffset),
            ak = kk.posAtDOM(Fk.endContainer, Fk.endOffset);
          return XR(kk, {
            from: Bk,
            to: ak,
            insert: kk.state.toText(Rk)
          }, null), !0
        }
      }
      let tk;
      if (Ok.chrome && Ok.android && (tk = JR.find((kk => kk.inputType == Fk.inputType))) && (kk.observer.delayAndroidKey(tk.key, tk.keyCode), "Backspace" == tk.key || "Delete" == tk.key)) {
        let Fk = (null === (Rk = window.visualViewport) || void 0 === Rk ? void 0 : Rk.height) || 0;
        setTimeout((() => {
          var Bk;
          ((null === (Bk = window.visualViewport) || void 0 === Bk ? void 0 : Bk.height) || 0) > Fk + 10 && kk.hasFocus && (kk.contentDOM.blur(), kk.focus())
        }), 100)
      }
      return Ok.ios && "deleteContentForward" == Fk.inputType && kk.observer.flushSoon(), Ok.safari && "insertText" == Fk.inputType && kk.inputState.composing >= 0 && setTimeout((() => WR.compositionend(kk, Fk)), 20), !1
    };
    const cR = new Set;
    const GR = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let TR = !1;

    function rR() {
      TR = !1
    }
    class DR {
      constructor(kk) {
        this.lineWrapping = kk, this.doc = Rk.B.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(kk, Fk) {
        let Bk = this.doc.lineAt(Fk).number - this.doc.lineAt(kk).number + 1;
        return this.lineWrapping && (Bk += Math.max(0, Math.ceil((Fk - kk - Bk * this.lineLength * .5) / this.lineLength))), this.lineHeight * Bk
      }
      heightForLine(kk) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((kk - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(kk) {
        return this.doc = kk, this
      }
      mustRefreshForWrapping(kk) {
        return GR.indexOf(kk) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(kk) {
        let Fk = !1;
        for (let Bk = 0; Bk < kk.length; Bk++) {
          let Rk = kk[Bk];
          Rk < 0 ? Bk++ : this.heightSamples[Math.floor(10 * Rk)] || (Fk = !0, this.heightSamples[Math.floor(10 * Rk)] = !0)
        }
        return Fk
      }
      refresh(kk, Fk, Bk, Rk, tk, ak) {
        let Xk = GR.indexOf(kk) > -1,
          bk = Math.abs(Fk - this.lineHeight) > .3 || this.lineWrapping != Xk || Math.abs(Bk - this.charWidth) > .1;
        if (this.lineWrapping = Xk, this.lineHeight = Fk, this.charWidth = Bk, this.textHeight = Rk, this.lineLength = tk, bk) {
          this.heightSamples = {};
          for (let kk = 0; kk < ak.length; kk++) {
            let Fk = ak[kk];
            Fk < 0 ? kk++ : this.heightSamples[Math.floor(10 * Fk)] = !0
          }
        }
        return bk
      }
    }
    class zR {
      constructor(kk, Fk) {
        this.from = kk, this.heights = Fk, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class PR {
      constructor(kk, Fk, Bk, Rk, tk) {
        this.from = kk, this.length = Fk, this.top = Bk, this.height = Rk, this._content = tk
      }
      get type() {
        return "number" == typeof this._content ? gk.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof Tk ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(kk) {
        let Fk = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(kk._content) ? kk._content : [kk]);
        return new PR(this.from, this.length + kk.length, this.top, this.height + kk.height, Fk)
      }
    }
    var hR = function(kk) {
      return kk[kk.ByPos = 0] = "ByPos", kk[kk.ByHeight = 1] = "ByHeight", kk[kk.ByPosNoHeight = 2] = "ByPosNoHeight", kk
    }(hR || (hR = {}));
    const qR = .001;
    class CR {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = kk, this.height = Fk, this.flags = Bk
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(kk) {
        this.flags = (kk ? 2 : 0) | -3 & this.flags
      }
      setHeight(kk) {
        this.height != kk && (Math.abs(this.height - kk) > qR && (TR = !0), this.height = kk)
      }
      replace(kk, Fk, Bk) {
        return CR.of(Bk)
      }
      decomposeLeft(kk, Fk) {
        Fk.push(this)
      }
      decomposeRight(kk, Fk) {
        Fk.push(this)
      }
      applyChanges(kk, Fk, Bk, Rk) {
        let tk = this,
          ak = Bk.doc;
        for (let Xk = Rk.length - 1; Xk >= 0; Xk--) {
          let {
            fromA: bk,
            toA: wk,
            fromB: dk,
            toB: sk
          } = Rk[Xk], Vk = tk.lineAt(bk, hR.ByPosNoHeight, Bk.setDoc(Fk), 0, 0), Jk = Vk.to >= wk ? Vk : tk.lineAt(wk, hR.ByPosNoHeight, Bk, 0, 0);
          for (sk += Jk.to - wk, wk = Jk.to; Xk > 0 && Vk.from <= Rk[Xk - 1].toA;) bk = Rk[Xk - 1].fromA, dk = Rk[Xk - 1].fromB, Xk--, bk < Vk.from && (Vk = tk.lineAt(bk, hR.ByPosNoHeight, Bk, 0, 0));
          dk += Vk.from - bk, bk = Vk.from;
          let Ak = IR.build(Bk.setDoc(ak), kk, dk, sk);
          tk = ZR(tk, tk.replace(bk, wk, Ak))
        }
        return tk.updateHeight(Bk, 0)
      }
      static empty() {
        return new xR(0, 0, 0)
      }
      static of (kk) {
        if (1 == kk.length) return kk[0];
        let Fk = 0,
          Bk = kk.length,
          Rk = 0,
          tk = 0;
        for (;;)
          if (Fk == Bk)
            if (Rk > 2 * tk) {
              let tk = kk[Fk - 1];
              tk.break ? kk.splice(--Fk, 1, tk.left, null, tk.right) : kk.splice(--Fk, 1, tk.left, tk.right), Bk += 1 + tk.break, Rk -= tk.size
            } else {
              if (!(tk > 2 * Rk)) break;
              {
                let Fk = kk[Bk];
                Fk.break ? kk.splice(Bk, 1, Fk.left, null, Fk.right) : kk.splice(Bk, 1, Fk.left, Fk.right), Bk += 2 + Fk.break, tk -= Fk.size
              }
            }
        else if (Rk < tk) {
          let Bk = kk[Fk++];
          Bk && (Rk += Bk.size)
        } else {
          let Fk = kk[--Bk];
          Fk && (tk += Fk.size)
        }
        let ak = 0;
        return null == kk[Fk - 1] ? (ak = 1, Fk--) : null == kk[Fk] && (ak = 1, Bk++), new lR(CR.of(kk.slice(0, Fk)), ak, CR.of(kk.slice(Bk)))
      }
    }

    function ZR(kk, Fk) {
      return kk == Fk ? kk : (kk.constructor != Fk.constructor && (TR = !0), Fk)
    }
    CR.prototype.size = 1;
    const pR = Uk.replace({});
    class KR extends CR {
      constructor(kk, Fk, Bk) {
        super(kk, Fk), this.deco = Bk, this.spaceAbove = 0
      }
      mainBlock(kk, Fk) {
        return new PR(Fk, this.length, kk + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(kk, Fk, Bk, Rk) {
        return this.spaceAbove && kk < Bk + this.spaceAbove ? new PR(Rk, 0, Bk, this.spaceAbove, pR) : this.mainBlock(Bk, Rk)
      }
      lineAt(kk, Fk, Bk, Rk, tk) {
        let ak = this.mainBlock(Rk, tk);
        return this.spaceAbove ? this.blockAt(0, Bk, Rk, tk).join(ak) : ak
      }
      forEachLine(kk, Fk, Bk, Rk, tk, ak) {
        kk <= tk + this.length && Fk >= tk && ak(this.lineAt(0, hR.ByPos, Bk, Rk, tk))
      }
      setMeasuredHeight(kk) {
        let Fk = kk.heights[kk.index++];
        Fk < 0 ? (this.spaceAbove = -Fk, Fk = kk.heights[kk.index++]) : this.spaceAbove = 0, this.setHeight(Fk)
      }
      updateHeight(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 3 ? arguments[3] : void 0;
        return Bk && Bk.from <= Fk && Bk.more && this.setMeasuredHeight(Bk), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class xR extends KR {
      constructor(kk, Fk, Bk) {
        super(kk, Fk, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = Bk
      }
      mainBlock(kk, Fk) {
        return new PR(Fk, this.length, kk + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(kk, Fk, Bk) {
        let Rk = Bk[0];
        return 1 == Bk.length && (Rk instanceof xR || Rk instanceof jR && 4 & Rk.flags) && Math.abs(this.length - Rk.length) < 10 ? (Rk instanceof jR ? Rk = new xR(Rk.length, this.height, this.spaceAbove) : Rk.height = this.height, this.outdated || (Rk.outdated = !1), Rk) : CR.of(Bk)
      }
      updateHeight(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        return Rk && Rk.from <= Fk && Rk.more ? this.setMeasuredHeight(Rk) : (Bk || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, kk.heightForLine(this.length - this.collapsed)) + this.breaks * kk.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class jR extends CR {
      constructor(kk) {
        super(kk, 0)
      }
      heightMetrics(kk, Fk) {
        let Bk, Rk = kk.doc.lineAt(Fk).number,
          tk = kk.doc.lineAt(Fk + this.length).number,
          ak = tk - Rk + 1,
          Xk = 0;
        if (kk.lineWrapping) {
          let Fk = Math.min(this.height, kk.lineHeight * ak);
          Bk = Fk / ak, this.length > ak + 1 && (Xk = (this.height - Fk) / (this.length - ak - 1))
        } else Bk = this.height / ak;
        return {
          firstLine: Rk,
          lastLine: tk,
          perLine: Bk,
          perChar: Xk
        }
      }
      blockAt(kk, Fk, Bk, Rk) {
        let {
          firstLine: tk,
          lastLine: ak,
          perLine: Xk,
          perChar: bk
        } = this.heightMetrics(Fk, Rk);
        if (Fk.lineWrapping) {
          let tk = Rk + (kk < Fk.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (kk - Bk) / this.height)) * this.length)),
            ak = Fk.doc.lineAt(tk),
            wk = Xk + ak.length * bk,
            dk = Math.max(Bk, kk - wk / 2);
          return new PR(ak.from, ak.length, dk, wk, 0)
        } {
          let Rk = Math.max(0, Math.min(ak - tk, Math.floor((kk - Bk) / Xk))),
            {
              from: bk,
              length: wk
            } = Fk.doc.line(tk + Rk);
          return new PR(bk, wk, Bk + Xk * Rk, Xk, 0)
        }
      }
      lineAt(kk, Fk, Bk, Rk, tk) {
        if (Fk == hR.ByHeight) return this.blockAt(kk, Bk, Rk, tk);
        if (Fk == hR.ByPosNoHeight) {
          let {
            from: Fk,
            to: Rk
          } = Bk.doc.lineAt(kk);
          return new PR(Fk, Rk - Fk, 0, 0, 0)
        }
        let {
          firstLine: ak,
          perLine: Xk,
          perChar: bk
        } = this.heightMetrics(Bk, tk), wk = Bk.doc.lineAt(kk), dk = Xk + wk.length * bk, sk = wk.number - ak, Vk = Rk + Xk * sk + bk * (wk.from - tk - sk);
        return new PR(wk.from, wk.length, Math.max(Rk, Math.min(Vk, Rk + this.height - dk)), dk, 0)
      }
      forEachLine(kk, Fk, Bk, Rk, tk, ak) {
        kk = Math.max(kk, tk), Fk = Math.min(Fk, tk + this.length);
        let {
          firstLine: Xk,
          perLine: bk,
          perChar: wk
        } = this.heightMetrics(Bk, tk);
        for (let dk = kk, sk = Rk; dk <= Fk;) {
          let Fk = Bk.doc.lineAt(dk);
          if (dk == kk) {
            let Bk = Fk.number - Xk;
            sk += bk * Bk + wk * (kk - tk - Bk)
          }
          let Rk = bk + wk * Fk.length;
          ak(new PR(Fk.from, Fk.length, sk, Rk, 0)), sk += Rk, dk = Fk.to + 1
        }
      }
      replace(kk, Fk, Bk) {
        let Rk = this.length - Fk;
        if (Rk > 0) {
          let kk = Bk[Bk.length - 1];
          kk instanceof jR ? Bk[Bk.length - 1] = new jR(kk.length + Rk) : Bk.push(null, new jR(Rk - 1))
        }
        if (kk > 0) {
          let Fk = Bk[0];
          Fk instanceof jR ? Bk[0] = new jR(kk + Fk.length) : Bk.unshift(new jR(kk - 1), null)
        }
        return CR.of(Bk)
      }
      decomposeLeft(kk, Fk) {
        Fk.push(new jR(kk - 1), null)
      }
      decomposeRight(kk, Fk) {
        Fk.push(null, new jR(this.length - kk - 1))
      }
      updateHeight(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 ? arguments[3] : void 0,
          tk = Fk + this.length;
        if (Rk && Rk.from <= Fk + this.length && Rk.more) {
          let Bk = [],
            ak = Math.max(Fk, Rk.from),
            Xk = -1;
          for (Rk.from > Fk && Bk.push(new jR(Rk.from - Fk - 1).updateHeight(kk, Fk)); ak <= tk && Rk.more;) {
            let Fk = kk.doc.lineAt(ak).length;
            Bk.length && Bk.push(null);
            let tk = Rk.heights[Rk.index++],
              bk = 0;
            tk < 0 && (bk = -tk, tk = Rk.heights[Rk.index++]), -1 == Xk ? Xk = tk : Math.abs(tk - Xk) >= qR && (Xk = -2);
            let wk = new xR(Fk, tk, bk);
            wk.outdated = !1, Bk.push(wk), ak += Fk + 1
          }
          ak <= tk && Bk.push(null, new jR(tk - ak).updateHeight(kk, ak));
          let bk = CR.of(Bk);
          return (Xk < 0 || Math.abs(bk.height - this.height) >= qR || Math.abs(Xk - this.heightMetrics(kk, Fk).perLine) >= qR) && (TR = !0), ZR(this, bk)
        }
        return (Bk || this.outdated) && (this.setHeight(kk.heightForGap(Fk, Fk + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class lR extends CR {
      constructor(kk, Fk, Bk) {
        super(kk.length + Fk + Bk.length, kk.height + Bk.height, Fk | (kk.outdated || Bk.outdated ? 2 : 0)), this.left = kk, this.right = Bk, this.size = kk.size + Bk.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(kk, Fk, Bk, Rk) {
        let tk = Bk + this.left.height;
        return kk < tk ? this.left.blockAt(kk, Fk, Bk, Rk) : this.right.blockAt(kk, Fk, tk, Rk + this.left.length + this.break)
      }
      lineAt(kk, Fk, Bk, Rk, tk) {
        let ak = Rk + this.left.height,
          Xk = tk + this.left.length + this.break,
          bk = Fk == hR.ByHeight ? kk < ak : kk < Xk,
          wk = bk ? this.left.lineAt(kk, Fk, Bk, Rk, tk) : this.right.lineAt(kk, Fk, Bk, ak, Xk);
        if (this.break || (bk ? wk.to < Xk : wk.from > Xk)) return wk;
        let dk = Fk == hR.ByPosNoHeight ? hR.ByPosNoHeight : hR.ByPos;
        return bk ? wk.join(this.right.lineAt(Xk, dk, Bk, ak, Xk)) : this.left.lineAt(Xk, dk, Bk, Rk, tk).join(wk)
      }
      forEachLine(kk, Fk, Bk, Rk, tk, ak) {
        let Xk = Rk + this.left.height,
          bk = tk + this.left.length + this.break;
        if (this.break) kk < bk && this.left.forEachLine(kk, Fk, Bk, Rk, tk, ak), Fk >= bk && this.right.forEachLine(kk, Fk, Bk, Xk, bk, ak);
        else {
          let wk = this.lineAt(bk, hR.ByPos, Bk, Rk, tk);
          kk < wk.from && this.left.forEachLine(kk, wk.from - 1, Bk, Rk, tk, ak), wk.to >= kk && wk.from <= Fk && ak(wk), Fk > wk.to && this.right.forEachLine(wk.to + 1, Fk, Bk, Xk, bk, ak)
        }
      }
      replace(kk, Fk, Bk) {
        let Rk = this.left.length + this.break;
        if (Fk < Rk) return this.balanced(this.left.replace(kk, Fk, Bk), this.right);
        if (kk > this.left.length) return this.balanced(this.left, this.right.replace(kk - Rk, Fk - Rk, Bk));
        let tk = [];
        kk > 0 && this.decomposeLeft(kk, tk);
        let ak = tk.length;
        for (let Xk of Bk) tk.push(Xk);
        if (kk > 0 && nR(tk, ak - 1), Fk < this.length) {
          let kk = tk.length;
          this.decomposeRight(Fk, tk), nR(tk, kk)
        }
        return CR.of(tk)
      }
      decomposeLeft(kk, Fk) {
        let Bk = this.left.length;
        if (kk <= Bk) return this.left.decomposeLeft(kk, Fk);
        Fk.push(this.left), this.break && (Bk++, kk >= Bk && Fk.push(null)), kk > Bk && this.right.decomposeLeft(kk - Bk, Fk)
      }
      decomposeRight(kk, Fk) {
        let Bk = this.left.length,
          Rk = Bk + this.break;
        if (kk >= Rk) return this.right.decomposeRight(kk - Rk, Fk);
        kk < Bk && this.left.decomposeRight(kk, Fk), this.break && kk < Rk && Fk.push(null), Fk.push(this.right)
      }
      balanced(kk, Fk) {
        return kk.size > 2 * Fk.size || Fk.size > 2 * kk.size ? CR.of(this.break ? [kk, null, Fk] : [kk, Fk]) : (this.left = ZR(this.left, kk), this.right = ZR(this.right, Fk), this.setHeight(kk.height + Fk.height), this.outdated = kk.outdated || Fk.outdated, this.size = kk.size + Fk.size, this.length = kk.length + this.break+Fk.length, this)
      }
      updateHeight(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: tk,
            right: ak
          } = this,
          Xk = Fk + tk.length + this.break,
          bk = null;
        return Rk && Rk.from <= Fk + tk.length && Rk.more ? bk = tk = tk.updateHeight(kk, Fk, Bk, Rk) : tk.updateHeight(kk, Fk, Bk), Rk && Rk.from <= Xk + ak.length && Rk.more ? bk = ak = ak.updateHeight(kk, Xk, Bk, Rk) : ak.updateHeight(kk, Xk, Bk), bk ? this.balanced(tk, ak) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function nR(kk, Fk) {
      let Bk, Rk;
      null == kk[Fk] && (Bk = kk[Fk - 1]) instanceof jR && (Rk = kk[Fk + 1]) instanceof jR && kk.splice(Fk - 1, 3, new jR(Bk.length + 1 + Rk.length))
    }
    class IR {
      constructor(kk, Fk) {
        this.pos = kk, this.oracle = Fk, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = kk
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(kk, Fk) {
        if (this.lineStart > -1) {
          let kk = Math.min(Fk, this.lineEnd),
            Bk = this.nodes[this.nodes.length - 1];
          Bk instanceof xR ? Bk.length += kk - this.pos : (kk > this.pos || !this.isCovered) && this.nodes.push(new xR(kk - this.pos, -1, 0)), this.writtenTo = kk, Fk > kk && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = Fk
      }
      point(kk, Fk, Bk) {
        if (kk < Fk || Bk.heightRelevant) {
          let Rk = Bk.widget ? Bk.widget.estimatedHeight : 0,
            tk = Bk.widget ? Bk.widget.lineBreaks : 0;
          Rk < 0 && (Rk = this.oracle.lineHeight);
          let ak = Fk - kk;
          Bk.block ? this.Ckk(new KR(ak, Rk, Bk)) : (ak || tk || Rk >= 5) && this.addLineDeco(Rk, tk, ak)
        } else Fk > kk && this.span(kk, Fk);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: kk,
          to: Fk
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = kk, this.lineEnd = Fk, this.writtenTo < kk && ((this.writtenTo < kk - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, kk - 1)), this.nodes.push(null)), this.pos > kk && this.nodes.push(new xR(this.pos - kk, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(kk, Fk) {
        let Bk = new jR(Fk - kk);
        return this.oracle.doc.lineAt(kk).to == Fk && (Bk.flags |= 4), Bk
      }
      ensureLine() {
        this.enterLine();
        let kk = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (kk instanceof xR) return kk;
        let Fk = new xR(0, -1, 0);
        return this.nodes.push(Fk), Fk
      }
      Ckk(kk) {
        this.enterLine();
        let Fk = kk.deco;
        Fk && Fk.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(kk), this.writtenTo = this.pos = this.pos + kk.length, Fk && Fk.endSide > 0 && (this.covering = kk)
      }
      addLineDeco(kk, Fk, Bk) {
        let Rk = this.ensureLine();
        Rk.length += Bk, Rk.collapsed += Bk, Rk.widgetHeight = Math.max(Rk.widgetHeight, kk), Rk.breaks += Fk, this.writtenTo = this.pos = this.pos + Bk
      }
      finish(kk) {
        let Fk = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || Fk instanceof xR || this.isCovered ? (this.writtenTo < this.pos || null == Fk) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new xR(0, -1, 0));
        let Bk = kk;
        for (let Rk of this.nodes) Rk instanceof xR && Rk.updateHeight(this.oracle, Bk), Bk += Rk ? Rk.length : 1;
        return this.nodes
      }
      static build(kk, Fk, Bk, tk) {
        let ak = new IR(Bk, kk);
        return Rk.u.spans(Fk, Bk, tk, ak, 0), ak.finish(Bk)
      }
    }
    class QR {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(kk, Fk, Bk, Rk) {
        (kk < Fk || Bk && Bk.heightRelevant || Rk && Rk.heightRelevant) && Dk(kk, Fk, this.changes, 5)
      }
    }

    function kt(kk, Fk) {
      let Bk = kk.getBoundingClientRect(),
        Rk = kk.ownerDocument,
        tk = Rk.defaultView || window,
        ak = Math.max(0, Bk.left),
        Xk = Math.min(tk.innerWidth, Bk.right),
        bk = Math.max(0, Bk.top),
        wk = Math.min(tk.innerHeight, Bk.bottom);
      for (let dk = kk.parentNode; dk && dk != Rk.body;)
        if (1 == dk.nodeType) {
          let Fk = dk,
            Bk = window.getComputedStyle(Fk);
          if ((Fk.scrollHeight > Fk.clientHeight || Fk.scrollWidth > Fk.clientWidth) && "visible" != Bk.overflow) {
            let Bk = Fk.getBoundingClientRect();
            ak = Math.max(ak, Bk.left), Xk = Math.min(Xk, Bk.right), bk = Math.max(bk, Bk.top), wk = Math.min(dk == kk.parentNode ? tk.innerHeight : wk, Bk.bottom)
          }
          dk = "absolute" == Bk.position || "fixed" == Bk.position ? Fk.offsetParent : Fk.parentNode
        } else {
          if (11 != dk.nodeType) break;
          dk = dk.host
        } return {
        left: ak - Bk.left,
        right: Math.max(ak, Xk) - Bk.left,
        top: bk - (Bk.top + Fk),
        bottom: Math.max(bk, wk) - (Bk.top + Fk)
      }
    }

    function Ft(kk, Fk) {
      let Bk = kk.getBoundingClientRect();
      return {
        left: 0,
        right: Bk.right - Bk.left,
        top: Fk,
        bottom: Bk.bottom - (Bk.top + Fk)
      }
    }
    class Bt {
      constructor(kk, Fk, Bk, Rk) {
        this.from = kk, this.to = Fk, this.size = Bk, this.displaySize = Rk
      }
      static same(kk, Fk) {
        if (kk.length != Fk.length) return !1;
        for (let Bk = 0; Bk < kk.length; Bk++) {
          let Rk = kk[Bk],
            tk = Fk[Bk];
          if (Rk.from != tk.from || Rk.to != tk.to || Rk.size != tk.size) return !1
        }
        return !0
      }
      draw(kk, Fk) {
        return Uk.replace({
          widget: new Rt(this.displaySize * (Fk ? kk.scaleY : kk.scaleX), Fk)
        }).range(this.from, this.to)
      }
    }
    class Rt extends Mk {
      constructor(kk, Fk) {
        super(), this.size = kk, this.vertical = Fk
      }
      eq(kk) {
        return kk.size == this.size && kk.vertical == this.vertical
      }
      toDOM() {
        let kk = document.createElement("div");
        return this.vertical ? kk.style.height = this.size + "px" : (kk.style.width = this.size + "px", kk.style.height = "2px", kk.style.display = "inline-block"), kk
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class tt {
      constructor(kk, Fk) {
        this.view = kk, this.state = Fk, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = dt, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = sF.LTR, this.q_ = [], this.mustEnforceCursorAssoc = !1;
        let Bk = Fk.facet(kB).some((kk => "function" != typeof kk && "cm-lineWrapping" == kk.class));
        this.heightOracle = new DR(Bk), this.stateDeco = st(Fk), this.heightMap = CR.empty().applyChanges(this.stateDeco, Rk.B.empty, this.heightOracle.setDoc(Fk.doc), [new sB(0, 0, 0, Fk.doc.length)]);
        for (let Rk = 0; Rk < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Rk++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Uk.set(this.lineGaps.map((kk => kk.draw(this, !1)))), this.scrollParent = kk.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let kk = [this.viewport],
          {
            main: Fk
          } = this.state.selection;
        for (let Bk = 0; Bk <= 1; Bk++) {
          let Rk = Bk ? Fk.head : Fk.anchor;
          if (!kk.some((kk => {
              let {
                from: Fk,
                to: Bk
              } = kk;
              return Rk >= Fk && Rk <= Bk
            }))) {
            let {
              from: Fk,
              to: Bk
            } = this.lineBlockAt(Rk);
            kk.push(new Xt(Fk, Bk))
          }
        }
        return this.viewports = kk.sort(((kk, Fk) => kk.from - Fk.from)), this.updateScaler()
      }
      updateScaler() {
        let kk = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? dt : new Vt(this.heightOracle, this.heightMap, this.viewports), kk.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (kk => {
          this.viewportLines.push(Jt(kk, this.scaler))
        }))
      }
      update(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = kk.state;
        let Bk = this.stateDeco;
        this.stateDeco = st(this.state);
        let tk = kk.changedRanges,
          ak = sB.extendWithRanges(tk, function(kk, Fk, Bk) {
            let tk = new QR;
            return Rk.u.compare(kk, Fk, Bk, tk, 0), tk.changes
          }(Bk, this.stateDeco, kk ? kk.changes : Rk.ChangeSet.empty(this.state.doc.length))),
          Xk = this.heightMap.height,
          bk = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        rR(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, kk.startState.doc, this.heightOracle.setDoc(this.state.doc), ak), (this.heightMap.height != Xk || TR) && (kk.flags |= 2), bk ? (this.scrollAnchorPos = kk.changes.mapPos(bk.from, -1), this.scrollAnchorHeight = bk.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = Xk);
        let wk = ak.length ? this.mapViewport(this.viewport, kk.changes) : this.viewport;
        (Fk && (Fk.range.head < wk.from || Fk.range.head > wk.to) || !this.viewportIsAppropriate(wk)) && (wk = this.getViewport(0, Fk));
        let dk = wk.from != this.viewport.from || wk.to != this.viewport.to;
        this.viewport = wk, kk.flags |= this.updateForViewport(), (dk || !kk.changes.empty || 2 & kk.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, kk.changes))), kk.flags |= this.computeVisibleRanges(kk.changes), Fk && (this.scrollTarget = Fk), !this.mustEnforceCursorAssoc && (kk.selectionSet || kk.focusChanged) && kk.view.lineWrapping && kk.state.selection.main.empty && kk.state.selection.main.assoc && !kk.state.facet(hF) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: kk
        } = this, Fk = kk.contentDOM, Bk = window.getComputedStyle(Fk), tk = this.heightOracle, ak = Bk.whiteSpace;
        this.defaultTextDirection = "rtl" == Bk.direction ? sF.RTL : sF.LTR;
        let Xk = this.heightOracle.mustRefreshForWrapping(ak) || "refresh" === this.mustMeasureContent,
          bk = Fk.getBoundingClientRect(),
          wk = Xk || this.mustMeasureContent || this.contentDOMHeight != bk.height;
        this.contentDOMHeight = bk.height, this.mustMeasureContent = !1;
        let dk = 0,
          sk = 0;
        if (bk.width && bk.height) {
          let {
            scaleX: kk,
            scaleY: Bk
          } = Ik(Fk, bk);
          (kk > .005 && Math.abs(this.scaleX - kk) > .005 || Bk > .005 && Math.abs(this.scaleY - Bk) > .005) && (this.scaleX = kk, this.scaleY = Bk, dk |= 16, Xk = wk = !0)
        }
        let Vk = (parseInt(Bk.paddingTop) || 0) * this.scaleY,
          Jk = (parseInt(Bk.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == Vk && this.paddingBottom == Jk || (this.paddingTop = Vk, this.paddingBottom = Jk, dk |= 18), this.editorWidth != kk.scrollDOM.clientWidth && (tk.lineWrapping && (wk = !0), this.editorWidth = kk.scrollDOM.clientWidth, dk |= 16);
        let Ak = Qk(this.view.contentDOM, !1).y;
        Ak != this.scrollParent && (this.scrollParent = Ak, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let ek = this.getScrollOffset();
        this.scrollOffset != ek && (this.scrollAnchorHeight = -1, this.scrollOffset = ek), this.scrolledToBottom = XF(this.scrollParent || kk.win);
        let yk = (this.printing ? Ft : kt)(Fk, this.paddingTop),
          fk = yk.top - this.pixelViewport.top,
          mk = yk.bottom - this.pixelViewport.bottom;
        this.pixelViewport = yk;
        let Wk = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (Wk != this.inView && (this.inView = Wk, Wk && (wk = !0)), !this.inView && !this.scrollTarget && ! function(kk) {
            let Fk = kk.getBoundingClientRect(),
              Bk = kk.ownerDocument.defaultView || window;
            return Fk.left < Bk.innerWidth && Fk.right > 0 && Fk.top < Bk.innerHeight && Fk.bottom > 0
          }(kk.dom)) return 0;
        let vk = bk.width;
        if (this.contentDOMWidth == vk && this.editorHeight == kk.scrollDOM.clientHeight || (this.contentDOMWidth = bk.width, this.editorHeight = kk.scrollDOM.clientHeight, dk |= 16), wk) {
          let Fk = kk.docView.measureVisibleLineHeights(this.viewport);
          if (tk.mustRefreshForHeights(Fk) && (Xk = !0), Xk || tk.lineWrapping && Math.abs(vk - this.contentDOMWidth) > tk.charWidth) {
            let {
              lineHeight: Bk,
              charWidth: Rk,
              textHeight: bk
            } = kk.docView.measureTextSize();
            Xk = Bk > 0 && tk.refresh(ak, Bk, Rk, bk, Math.max(5, vk / Rk), Fk), Xk && (kk.docView.minWidth = 0, dk |= 16)
          }
          fk > 0 && mk > 0 ? sk = Math.max(fk, mk) : fk < 0 && mk < 0 && (sk = Math.min(fk, mk)), rR();
          for (let Bk of this.viewports) {
            let ak = Bk.from == this.viewport.from ? Fk : kk.docView.measureVisibleLineHeights(Bk);
            this.heightMap = (Xk ? CR.empty().applyChanges(this.stateDeco, Rk.B.empty, this.heightOracle, [new sB(0, 0, 0, kk.state.doc.length)]) : this.heightMap).updateHeight(tk, 0, Xk, new zR(Bk.from, ak))
          }
          TR && (dk |= 2)
        }
        let ik = !this.viewportIsAppropriate(this.viewport, sk) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return ik && (2 & dk && (dk |= this.updateScaler()), this.viewport = this.getViewport(sk, this.scrollTarget), dk |= this.updateForViewport()), (2 & dk || ik) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(Xk ? [] : this.lineGaps, kk)), dk |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, kk.docView.enforceCursorAssoc()), dk
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(kk, Fk) {
        let Bk = .5 - Math.max(-.5, Math.min(.5, kk / 1e3 / 2)),
          Rk = this.heightMap,
          tk = this.heightOracle,
          {
            visibleTop: ak,
            visibleBottom: Xk
          } = this,
          bk = new Xt(Rk.lineAt(ak - 1e3 * Bk, hR.ByHeight, tk, 0, 0).from, Rk.lineAt(Xk + 1e3 * (1 - Bk), hR.ByHeight, tk, 0, 0).to);
        if (Fk) {
          let {
            head: kk
          } = Fk.range;
          if (kk < bk.from || kk > bk.to) {
            let Bk, ak = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              Xk = Rk.lineAt(kk, hR.ByPos, tk, 0, 0);
            Bk = "center" == Fk.y ? (Xk.top + Xk.bottom) / 2 - ak / 2 : "start" == Fk.y || "nearest" == Fk.y && kk < bk.from ? Xk.top : Xk.bottom - ak, bk = new Xt(Rk.lineAt(Bk - 500, hR.ByHeight, tk, 0, 0).from, Rk.lineAt(Bk + ak + 500, hR.ByHeight, tk, 0, 0).to)
          }
        }
        return bk
      }
      mapViewport(kk, Fk) {
        let Bk = Fk.mapPos(kk.from, -1),
          Rk = Fk.mapPos(kk.to, 1);
        return new Xt(this.heightMap.lineAt(Bk, hR.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Rk, hR.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(kk) {
        let {
          from: Fk,
          to: Bk
        } = kk, Rk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: tk
        } = this.heightMap.lineAt(Fk, hR.ByPos, this.heightOracle, 0, 0), {
          bottom: ak
        } = this.heightMap.lineAt(Bk, hR.ByPos, this.heightOracle, 0, 0), {
          visibleTop: Xk,
          visibleBottom: bk
        } = this;
        return (0 == Fk || tk <= Xk - Math.max(10, Math.min(-Rk, 250))) && (Bk == this.state.doc.length || ak >= bk + Math.max(10, Math.min(Rk, 250))) && tk > Xk - 2e3 && ak < bk + 2e3
      }
      mapLineGaps(kk, Fk) {
        if (!kk.length || Fk.empty) return kk;
        let Bk = [];
        for (let Rk of kk) Fk.touchesRange(Rk.from, Rk.to) || Bk.push(new Bt(Fk.mapPos(Rk.from), Fk.mapPos(Rk.to), Rk.size, Rk.displaySize));
        return Bk
      }
      ensureLineGaps(kk, Fk) {
        let Bk = this.heightOracle.lineWrapping,
          tk = Bk ? 1e4 : 2e3,
          ak = tk >> 1,
          Xk = tk << 1;
        if (this.defaultTextDirection != sF.LTR && !Bk) return [];
        let bk = [],
          wk = (tk, Xk, dk, sk) => {
            if (Xk - tk < ak) return;
            let Vk = this.state.selection.main,
              Jk = [Vk.from];
            Vk.empty || Jk.push(Vk.to);
            for (let kk of Jk)
              if (kk > tk && kk < Xk) return wk(tk, kk - 10, dk, sk), void wk(kk + 10, Xk, dk, sk);
            let Ak = function(kk, Fk) {
              for (let Bk of kk)
                if (Fk(Bk)) return Bk;
              return
            }(kk, (kk => kk.from >= dk.from && kk.to <= dk.to && Math.abs(kk.from - tk) < ak && Math.abs(kk.to - Xk) < ak && !Jk.some((Fk => kk.from < Fk && kk.to > Fk))));
            if (!Ak) {
              if (Xk < dk.to && Fk && Bk && Fk.q_.some((kk => kk.from <= Xk && kk.to >= Xk))) {
                let kk = Fk.moveToLineBoundary(Rk.f.cursor(Xk), !1, !0).head;
                kk > tk && (Xk = kk)
              }
              let kk = this.gapSize(dk, tk, Xk, sk);
              Ak = new Bt(tk, Xk, kk, Bk || kk < 2e6 ? kk : 2e6)
            }
            bk.push(Ak)
          },
          dk = Fk => {
            if (Fk.length < Xk || Fk.type != gk.Text) return;
            let ak = function(kk, Fk, Bk) {
              let tk = [],
                ak = kk,
                Xk = 0;
              Rk.u.spans(Bk, kk, Fk, {
                span() {},
                point(kk, Fk) {
                  kk > ak && (tk.push({
                    from: ak,
                    to: kk
                  }), Xk += kk - ak), ak = Fk
                }
              }, 20), ak < Fk && (tk.push({
                from: ak,
                to: Fk
              }), Xk += Fk - ak);
              return {
                total: Xk,
                hb: tk
              }
            }(Fk.from, Fk.to, this.stateDeco);
            if (ak.total < Xk) return;
            let bk, dk, sk = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (Bk) {
              let kk, Bk, Rk = tk / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != sk) {
                let tk = wt(ak, sk),
                  Xk = ((this.visibleBottom - this.visibleTop) / 2 + Rk) / Fk.height;
                kk = tk - Xk, Bk = tk + Xk
              } else kk = (this.visibleTop - Fk.top - Rk) / Fk.height, Bk = (this.visibleBottom - Fk.top + Rk) / Fk.height;
              bk = bt(ak, kk), dk = bt(ak, Bk)
            } else {
              let Bk = ak.total * this.heightOracle.charWidth,
                Rk = tk * this.heightOracle.charWidth,
                Xk = 0;
              if (Bk > 2e6)
                for (let tk of kk) tk.from >= Fk.from && tk.from < Fk.to && tk.size != tk.displaySize && tk.from * this.heightOracle.charWidth + Xk < this.pixelViewport.left && (Xk = tk.size - tk.displaySize);
              let wk, Vk, Jk = this.pixelViewport.left + Xk,
                Ak = this.pixelViewport.right + Xk;
              if (null != sk) {
                let kk = wt(ak, sk),
                  Fk = ((Ak - Jk) / 2 + Rk) / Bk;
                wk = kk - Fk, Vk = kk + Fk
              } else wk = (Jk - Rk) / Bk, Vk = (Ak + Rk) / Bk;
              bk = bt(ak, wk), dk = bt(ak, Vk)
            }
            bk > Fk.from && wk(Fk.from, bk, Fk, ak), dk < Fk.to && wk(dk, Fk.to, Fk, ak)
          };
        for (let Rk of this.viewportLines) Array.isArray(Rk.type) ? Rk.type.forEach(dk) : dk(Rk);
        return bk
      }
      gapSize(kk, Fk, Bk, Rk) {
        let tk = wt(Rk, Bk) - wt(Rk, Fk);
        return this.heightOracle.lineWrapping ? kk.height * tk : Rk.total * this.heightOracle.charWidth * tk
      }
      updateLineGaps(kk) {
        Bt.same(kk, this.lineGaps) || (this.lineGaps = kk, this.lineGapDeco = Uk.set(kk.map((kk => kk.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(kk) {
        let Fk = this.stateDeco;
        this.lineGaps.length && (Fk = Fk.concat(this.lineGapDeco));
        let Bk = [];
        Rk.u.spans(Fk, this.viewport.from, this.viewport.to, {
          span(kk, Fk) {
            Bk.push({
              from: kk,
              to: Fk
            })
          },
          point() {}
        }, 20);
        let tk = 0;
        if (Bk.length != this.q_.length) tk = 12;
        else
          for (let Rk = 0; Rk < Bk.length && !(8 & tk); Rk++) {
            let Fk = this.q_[Rk],
              ak = Bk[Rk];
            Fk.from == ak.from && Fk.to == ak.to || (tk |= 4, kk && kk.mapPos(Fk.from, -1) == ak.from && kk.mapPos(Fk.to, 1) == ak.to || (tk |= 8))
          }
        return this.q_ = Bk, tk
      }
      lineBlockAt(kk) {
        return kk >= this.viewport.from && kk <= this.viewport.to && this.viewportLines.find((Fk => Fk.from <= kk && Fk.to >= kk)) || Jt(this.heightMap.lineAt(kk, hR.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(kk) {
        return kk >= this.viewportLines[0].top && kk <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((Fk => Fk.top <= kk && Fk.bottom >= kk)) || Jt(this.heightMap.lineAt(this.scaler.fromDOM(kk), hR.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(kk) {
        let Fk = this.lineBlockAtHeight(kk + 8);
        return Fk.from >= this.viewport.from || this.viewportLines[0].top - kk > 200 ? Fk : this.viewportLines[0]
      }
      elementAtHeight(kk) {
        return Jt(this.heightMap.blockAt(this.scaler.fromDOM(kk), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class Xt {
      constructor(kk, Fk) {
        this.from = kk, this.to = Fk
      }
    }

    function bt(kk, Fk) {
      let {
        total: Bk,
        hb: Rk
      } = kk;
      if (Fk <= 0) return Rk[0].from;
      if (Fk >= 1) return Rk[Rk.length - 1].to;
      let tk = Math.floor(Bk * Fk);
      for (let ak = 0;; ak++) {
        let {
          from: kk,
          to: Fk
        } = Rk[ak], Bk = Fk - kk;
        if (tk <= Bk) return kk + tk;
        tk -= Bk
      }
    }

    function wt(kk, Fk) {
      let Bk = 0;
      for (let {
          from: Rk,
          to: tk
        }
        of kk.hb) {
        if (Fk <= tk) {
          Bk += Fk - Rk;
          break
        }
        Bk += tk - Rk
      }
      return Bk / kk.total
    }
    const dt = {
      toDOM: kk => kk,
      fromDOM: kk => kk,
      scale: 1,
      eq(kk) {
        return kk == this
      }
    };

    function st(kk) {
      let Fk = kk.facet(FB).filter((kk => "function" != typeof kk)),
        Bk = kk.facet(RB).filter((kk => "function" != typeof kk));
      return Bk.length && Fk.push(Rk.u.join(Bk)), Fk
    }
    class Vt {
      constructor(kk, Fk, Bk) {
        let Rk = 0,
          tk = 0,
          ak = 0;
        this.viewports = Bk.map((Bk => {
          let {
            from: tk,
            to: ak
          } = Bk, Xk = Fk.lineAt(tk, hR.ByPos, kk, 0, 0).top, bk = Fk.lineAt(ak, hR.ByPos, kk, 0, 0).bottom;
          return Rk += bk - Xk, {
            from: tk,
            to: ak,
            top: Xk,
            bottom: bk,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Rk) / (Fk.height - Rk);
        for (let Xk of this.viewports) Xk.domTop = ak + (Xk.top - tk) * this.scale, ak = Xk.domBottom = Xk.domTop + (Xk.bottom - Xk.top), tk = Xk.bottom
      }
      toDOM(kk) {
        for (let Fk = 0, Bk = 0, Rk = 0;; Fk++) {
          let tk = Fk < this.viewports.length ? this.viewports[Fk] : null;
          if (!tk || kk < tk.top) return Rk + (kk - Bk) * this.scale;
          if (kk <= tk.bottom) return tk.domTop + (kk - tk.top);
          Bk = tk.bottom, Rk = tk.domBottom
        }
      }
      fromDOM(kk) {
        for (let Fk = 0, Bk = 0, Rk = 0;; Fk++) {
          let tk = Fk < this.viewports.length ? this.viewports[Fk] : null;
          if (!tk || kk < tk.domTop) return Bk + (kk - Rk) / this.scale;
          if (kk <= tk.domBottom) return tk.top + (kk - tk.domTop);
          Bk = tk.bottom, Rk = tk.domBottom
        }
      }
      eq(kk) {
        return kk instanceof Vt && (this.scale == kk.scale && this.viewports.length == kk.viewports.length && this.viewports.every(((Fk, Bk) => Fk.from == kk.viewports[Bk].from && Fk.to == kk.viewports[Bk].to)))
      }
    }

    function Jt(kk, Fk) {
      if (1 == Fk.scale) return kk;
      let Bk = Fk.toDOM(kk.top),
        Rk = Fk.toDOM(kk.bottom);
      return new PR(kk.from, kk.length, Bk, Rk - Bk, Array.isArray(kk._content) ? kk._content.map((kk => Jt(kk, Fk))) : kk._content)
    }
    const At = Rk.i.define({
        combine: kk => kk.join(" ")
      }),
      et = Rk.i.define({
        combine: kk => kk.indexOf(!0) > -1
      }),
      yt = tk.d.newName(),
      ft = tk.d.newName(),
      mt = tk.d.newName(),
      Wt = {
        "&light": "." + ft,
        "&dark": "." + mt
      };

    function vt(kk, Fk, Bk) {
      return new tk.d(Fk, {
        finish: Fk => /&/.test(Fk) ? Fk.replace(/&\w*/, (Fk => {
          if ("&" == Fk) return kk;
          if (!Bk || !Bk[Fk]) throw new RangeError(`Unsupported selector: ${Fk}`);
          return Bk[Fk]
        })) : kk + " " + Fk
      })
    }
    const it = vt("." + yt, {
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
      }, Wt),
      Yt = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      ot = Ok.ie && Ok.ie_version <= 11;
    class Lt {
      constructor(kk) {
        this.view = kk, this.active = !1, this.editContext = null, this.selectionRange = new kF, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = kk.contentDOM, this.observer = new MutationObserver((Fk => {
          for (let kk of Fk) this.queue.push(kk);
          (Ok.ie && Ok.ie_version <= 11 || Ok.ios && kk.composing) && Fk.some((kk => "childList" == kk.type && kk.removedNodes.length || "characterData" == kk.type && kk.oldValue.length > kk.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !Ok.android || !1 === kk.constructor.EDIT_CONTEXT || Ok.chrome && Ok.chrome_version < 126 || (this.editContext = new St(kk), kk.state.facet(xF) && (kk.contentDOM.editContext = this.editContext.editContext)), ot && (this.onCharData = kk => {
          this.queue.push({
            target: kk.target,
            type: "characterData",
            oldValue: kk.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.UW = this.UW.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var kk;
          (null === (kk = this.view.docView) || void 0 === kk ? void 0 : kk.lastUpdate) < Date.now() - 75 && this.UW()
        })), this.resizeScroll.observe(kk.scrollDOM)), this.addWindowListeners(this.win = kk.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((kk => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), kk.length > 0 && kk[kk.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((kk => {
          kk.length > 0 && kk[kk.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(kk) {
        this.view.inputState.runHandlers("scroll", kk), this.intersecting && this.view.measure()
      }
      onScroll(kk) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(kk)
      }
      UW() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(kk) {
        ("change" != kk.type && kk.type || kk.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(kk) {
        if (this.gapIntersection && (kk.length != this.gaps.length || this.gaps.some(((Fk, Bk) => Fk != kk[Bk])))) {
          this.gapIntersection.disconnect();
          for (let Fk of kk) this.gapIntersection.observe(Fk);
          this.gaps = kk
        }
      }
      onSelectionChange(kk) {
        let Fk = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: Bk
        } = this, Rk = this.selectionRange;
        if (Bk.state.facet(xF) ? Bk.root.activeElement != this.dom : !qk(this.dom, Rk)) return;
        let tk = Rk.anchorNode && Bk.docView.tile.nearest(Rk.anchorNode);
        tk && tk.isWidget() && tk.widget.ignoreEvent(kk) ? Fk || (this.selectionChanged = !1) : (Ok.ie && Ok.ie_version <= 11 || Ok.android && Ok.chrome) && !Bk.state.selection.main.empty && Rk.focusNode && Zk(Rk.focusNode, Rk.focusOffset, Rk.anchorNode, Rk.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: kk
        } = this, Fk = Pk(kk.root);
        if (!Fk) return !1;
        let Bk = Ok.safari && 11 == kk.root.nodeType && kk.root.activeElement == this.dom && function(kk, Fk) {
          if (Fk.getComposedRanges) {
            let Bk = Fk.getComposedRanges(kk.root)[0];
            if (Bk) return Et(kk, Bk)
          }
          let Bk = null;

          function Rk(kk) {
            kk.preventDefault(), kk.stopImmediatePropagation(), Bk = kk.getTargetRanges()[0]
          }
          return kk.contentDOM.addEventListener("beforeinput", Rk, !0), kk.dom.ownerDocument.execCommand("indent"), kk.contentDOM.removeEventListener("beforeinput", Rk, !0), Bk ? Et(kk, Bk) : null
        }(this.view, Fk) || Fk;
        if (!Bk || this.selectionRange.eq(Bk)) return !1;
        let Rk = qk(this.dom, Bk);
        return Rk && !this.selectionChanged && kk.inputState.lastFocusTime > Date.now() - 200 && kk.inputState.lastTouchTime < Date.now() - 300 && function(kk, Fk) {
          let Bk = Fk.focusNode,
            Rk = Fk.focusOffset;
          if (!Bk || Fk.anchorNode != Bk || Fk.anchorOffset != Rk) return !1;
          for (Rk = Math.min(Rk, jk(Bk));;)
            if (Rk) {
              if (1 != Bk.nodeType) return !1;
              let kk = Bk.childNodes[Rk - 1];
              "false" == kk.contentEditable ? Rk-- : (Bk = kk, Rk = jk(Bk))
            } else {
              if (Bk == kk) return !0;
              Rk = pk(Bk), Bk = Bk.parentNode
            }
        }(this.dom, Bk) ? (this.view.inputState.lastFocusTime = 0, kk.docView.updateSelection(), !1) : (this.selectionRange.setRange(Bk), Rk && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(kk, Fk) {
        this.selectionRange.set(kk.node, kk.offset, Fk.node, Fk.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let kk = 0,
          Fk = null;
        for (let Bk = this.dom; Bk;)
          if (1 == Bk.nodeType) !Fk && kk < this.scrollTargets.length && this.scrollTargets[kk] == Bk ? kk++ : Fk || (Fk = this.scrollTargets.slice(0, kk)), Fk && Fk.push(Bk), Bk = Bk.assignedSlot || Bk.parentNode;
          else {
            if (11 != Bk.nodeType) break;
            Bk = Bk.host
          } if (kk < this.scrollTargets.length && !Fk && (Fk = this.scrollTargets.slice(0, kk)), Fk) {
          for (let kk of this.scrollTargets) kk.removeEventListener("scroll", this.onScroll);
          for (let kk of this.scrollTargets = Fk) kk.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(kk) {
        if (!this.active) return kk();
        try {
          return this.stop(), kk()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, Yt), ot && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), ot && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(kk, Fk) {
        var Bk;
        if (!this.delayedAndroidKey) {
          let kk = () => {
            let kk = this.delayedAndroidKey;
            if (kk) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = kk.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && kk.force && aF(this.dom, kk.key, kk.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(kk)
        }
        this.delayedAndroidKey && "Enter" != kk || (this.delayedAndroidKey = {
          key: kk,
          keyCode: Fk,
          force: this.lastChange < Date.now() - 50 || !!(null === (Bk = this.delayedAndroidKey) || void 0 === Bk ? void 0 : Bk.force)
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
        for (let kk of this.observer.takeRecords()) this.queue.push(kk);
        return this.queue
      }
      processRecords() {
        let kk = this.pendingRecords();
        kk.length && (this.queue = []);
        let Fk = -1,
          Bk = -1,
          Rk = !1;
        for (let tk of kk) {
          let kk = this.readMutation(tk);
          kk && (kk.typeOver && (Rk = !0), -1 == Fk ? ({
            from: Fk,
            to: Bk
          } = kk) : (Fk = Math.min(kk.from, Fk), Bk = Math.max(kk.to, Bk)))
        }
        return {
          from: Fk,
          to: Bk,
          typeOver: Rk
        }
      }
      readChange() {
        let {
          from: kk,
          to: Fk,
          typeOver: Bk
        } = this.processRecords(), Rk = this.selectionChanged && qk(this.dom, this.selectionRange);
        if (kk < 0 && !Rk) return null;
        kk > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let tk = new RR(this.view, kk, Fk, Bk);
        return this.view.docView.domChanged = {
          newSel: tk.newSel ? tk.newSel.main : null
        }, tk
      }
      flush() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        kk && this.readSelectionRange();
        let Fk = this.readChange();
        if (!Fk) return this.view.requestMeasure(), !1;
        let Bk = this.view.state,
          Rk = aR(this.view, Fk);
        return this.view.state == Bk && (Fk.domChanged || Fk.newSel && !wR(this.view.state.selection, Fk.newSel.main)) && this.view.update([]), Rk
      }
      readMutation(kk) {
        let Fk = this.view.docView.tile.nearest(kk.target);
        if (!Fk || Fk.isWidget()) return null;
        if (Fk.markDirty("attributes" == kk.type), "childList" == kk.type) {
          let Bk = Ot(Fk, kk.previousSibling || kk.target.previousSibling, -1),
            Rk = Ot(Fk, kk.nextSibling || kk.target.nextSibling, 1);
          return {
            from: Bk ? Fk.posAfter(Bk) : Fk.posAtStart,
            to: Rk ? Fk.posBefore(Rk) : Fk.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == kk.type ? {
          from: Fk.posAtStart,
          to: Fk.posAtEnd,
          typeOver: kk.target.nodeValue == kk.oldValue
        } : null
      }
      setWindow(kk) {
        kk != this.win && (this.removeWindowListeners(this.win), this.win = kk, this.addWindowListeners(this.win))
      }
      addWindowListeners(kk) {
        kk.addEventListener("resize", this.UW), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : kk.addEventListener("beforeprint", this.onPrint), kk.addEventListener("scroll", this.onScroll), kk.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(kk) {
        kk.removeEventListener("scroll", this.onScroll), kk.removeEventListener("resize", this.UW), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : kk.removeEventListener("beforeprint", this.onPrint), kk.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(kk) {
        this.editContext && (this.editContext.update(kk), kk.startState.facet(xF) != kk.state.facet(xF) && (kk.view.contentDOM.editContext = kk.state.facet(xF) ? this.editContext.editContext : null))
      }
      destroy() {
        var kk, Fk, Bk;
        this.stop(), null === (kk = this.intersection) || void 0 === kk || kk.disconnect(), null === (Fk = this.gapIntersection) || void 0 === Fk || Fk.disconnect(), null === (Bk = this.resizeScroll) || void 0 === Bk || Bk.disconnect();
        for (let Rk of this.scrollTargets) Rk.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function Ot(kk, Fk, Bk) {
      for (; Fk;) {
        let Rk = AB.get(Fk);
        if (Rk && Rk.parent == kk) return Rk;
        let tk = Fk.parentNode;
        Fk = tk != kk.dom ? tk : Bk > 0 ? Fk.nextSibling : Fk.previousSibling
      }
      return null
    }

    function Et(kk, Fk) {
      let Bk = Fk.startContainer,
        Rk = Fk.startOffset,
        tk = Fk.endContainer,
        ak = Fk.endOffset,
        Xk = kk.docView.domAtPos(kk.state.selection.main.anchor, 1);
      return Zk(Xk.node, Xk.offset, tk, ak) && ([Bk, Rk, tk, ak] = [tk, ak, Bk, Rk]), {
        anchorNode: Bk,
        anchorOffset: Rk,
        focusNode: tk,
        focusOffset: ak
      }
    }
    class St {
      constructor(kk) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(kk.state);
        let Fk = this.editContext = new window.EditContext({
          text: kk.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, kk.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(kk.state.selection.main.head)
        });
        this.handlers.textupdate = Bk => {
          let tk = kk.state.selection.main,
            {
              anchor: ak,
              head: Xk
            } = tk,
            bk = this.toEditorPos(Bk.updateRangeStart),
            wk = this.toEditorPos(Bk.updateRangeEnd);
          kk.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: Bk.updateRangeStart,
            editorBase: bk,
            drifted: !1
          });
          let dk = wk - bk > Bk.text.length;
          bk == this.from && ak < this.from ? bk = ak : wk == this.to && ak > this.to && (wk = ak);
          let sk = bR(kk.state.sliceDoc(bk, wk), Bk.text, (dk ? tk.from : tk.to) - bk, dk ? "end" : null);
          if (!sk) {
            let Fk = Rk.f.single(this.toEditorPos(Bk.selectionStart), this.toEditorPos(Bk.selectionEnd));
            return void(wR(Fk, tk) || kk.dispatch({
              selection: Fk,
              userEvent: "select"
            }))
          }
          let Vk = {
            from: sk.from + bk,
            to: sk.toA + bk,
            insert: Rk.B.of(Bk.text.slice(sk.from, sk.toB).split("\n"))
          };
          if ((Ok.mac || Ok.android) && Vk.from == Xk - 1 && /^\. ?$/.test(Bk.text) && "off" == kk.contentDOM.getAttribute("autocorrect") && (Vk = {
              from: bk,
              to: wk,
              insert: Rk.B.of([Bk.text.replace(".", " ")])
            }), this.pendingContextChange = Vk, !kk.state.readOnly) {
            let Fk = this.to - this.from + (Vk.to - Vk.from + Vk.insert.length);
            XR(kk, Vk, Rk.f.single(this.toEditorPos(Bk.selectionStart, Fk), this.toEditorPos(Bk.selectionEnd, Fk)))
          }
          this.pendingContextChange && (this.revertPending(kk.state), this.setSelection(kk.state)), Vk.from < Vk.to && !Vk.insert.length && kk.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(Fk.text.slice(Math.max(0, Bk.updateRangeStart - 1), Math.min(Fk.text.length, Bk.updateRangeStart + 1))) && this.handlers.compositionend(Bk)
        }, this.handlers.characterboundsupdate = Bk => {
          let Rk = [],
            tk = null;
          for (let Fk = this.toEditorPos(Bk.rangeStart), ak = this.toEditorPos(Bk.rangeEnd); Fk < ak; Fk++) {
            let Bk = kk.coordsForChar(Fk);
            tk = Bk && new DOMRect(Bk.left, Bk.top, Bk.right - Bk.left, Bk.bottom - Bk.top) || tk || new DOMRect, Rk.push(tk)
          }
          Fk.updateCharacterBounds(Bk.rangeStart, Rk)
        }, this.handlers.textformatupdate = Fk => {
          let Bk = [];
          for (let kk of Fk.getTextFormats()) {
            let Fk = kk.underlineStyle,
              Rk = kk.underlineThickness;
            if (!/none/i.test(Fk) && !/none/i.test(Rk)) {
              let tk = this.toEditorPos(kk.rangeStart),
                ak = this.toEditorPos(kk.rangeEnd);
              if (tk < ak) {
                let kk = `text-decoration: underline ${/^[a-z]/.test(Fk)?Fk+" ":"Dashed"==Fk?"dashed ":"Squiggle"==Fk?"wavy ":""}${/thin/i.test(Rk)?1:2}px`;
                Bk.push(Uk.mark({
                  attributes: {
                    style: kk
                  }
                }).range(tk, ak))
              }
            }
          }
          kk.dispatch({
            effects: pF.of(Uk.set(Bk))
          })
        }, this.handlers.compositionstart = () => {
          kk.inputState.composing < 0 && (kk.inputState.composing = 0, kk.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (kk.inputState.composing = -1, kk.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: Fk
            } = this.composing;
            this.composing = null, Fk && this.reset(kk.state)
          }
        };
        for (let Bk in this.handlers) Fk.addEventListener(Bk, this.handlers[Bk]);
        this.measureReq = {
          read: kk => {
            this.editContext.updateControlBounds(kk.contentDOM.getBoundingClientRect());
            let Fk = Pk(kk.root);
            Fk && Fk.rangeCount && this.editContext.updateSelectionBounds(Fk.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(kk) {
        let Fk = 0,
          Bk = !1,
          Rk = this.pendingContextChange;
        return kk.changes.iterChanges(((tk, ak, Xk, bk, wk) => {
          if (Bk) return;
          let dk = wk.length - (ak - tk);
          if (Rk && ak >= Rk.to) {
            if (Rk.from == tk && Rk.to == ak && Rk.insert.eq(wk)) return Rk = this.pendingContextChange = null, Fk += dk, void(this.to += dk);
            Rk = null, this.revertPending(kk.state)
          }
          if (tk += Fk, (ak += Fk) <= this.from) this.from += dk, this.to += dk;
          else if (tk < this.to) {
            if (tk < this.from || ak > this.to || this.to - this.from + wk.length > 3e4) return void(Bk = !0);
            this.editContext.updateText(this.toContextPos(tk), this.toContextPos(ak), wk.toString()), this.to += dk
          }
          Fk += dk
        })), Rk && !Bk && this.revertPending(kk.state), !Bk
      }
      update(kk) {
        let Fk = this.pendingContextChange,
          Bk = kk.startState.selection.main;
        this.composing && (this.composing.drifted || !kk.changes.touchesRange(Bk.from, Bk.to) && kk.transactions.some((kk => !kk.isUserEvent("input.type") && kk.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = kk.changes.mapPos(this.composing.editorBase)) : this.applyEdits(kk) && this.rangeIsValid(kk.state) ? (kk.docChanged || kk.selectionSet || Fk) && this.setSelection(kk.state) : (this.pendingContextChange = null, this.reset(kk.state)), (kk.geometryChanged || kk.docChanged || kk.selectionSet) && kk.view.requestMeasure(this.measureReq)
      }
      resetRange(kk) {
        let {
          head: Fk
        } = kk.selection.main;
        this.from = Math.max(0, Fk - 1e4), this.to = Math.min(kk.doc.length, Fk + 1e4)
      }
      reset(kk) {
        this.resetRange(kk), this.editContext.updateText(0, this.editContext.text.length, kk.doc.sliceString(this.from, this.to)), this.setSelection(kk)
      }
      revertPending(kk) {
        let Fk = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(Fk.from), this.toContextPos(Fk.from + Fk.insert.length), kk.doc.sliceString(Fk.from, Fk.to))
      }
      setSelection(kk) {
        let {
          main: Fk
        } = kk.selection, Bk = this.toContextPos(Math.max(this.from, Math.min(this.to, Fk.anchor))), Rk = this.toContextPos(Fk.head);
        this.editContext.selectionStart == Bk && this.editContext.selectionEnd == Rk || this.editContext.updateSelection(Bk, Rk)
      }
      rangeIsValid(kk) {
        let {
          head: Fk
        } = kk.selection.main;
        return !(this.from > 0 && Fk - this.from < 500 || this.to < kk.doc.length && this.to - Fk < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        kk = Math.min(kk, Fk);
        let Bk = this.composing;
        return Bk && Bk.drifted ? Bk.editorBase + (kk - Bk.contextBase) : kk + this.from
      }
      toContextPos(kk) {
        let Fk = this.composing;
        return Fk && Fk.drifted ? Fk.contextBase + (kk - Fk.editorBase) : kk - this.from
      }
      destroy() {
        for (let kk in this.handlers) this.editContext.removeEventListener(kk, this.handlers[kk])
      }
    }
    class Nt {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get q_() {
        return this.viewState.q_
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
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Fk;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), kk.parent && kk.parent.appendChild(this.dom);
        let {
          dispatch: Bk
        } = kk;
        this.dispatchTransactions = kk.dispatchTransactions || Bk && (kk => kk.forEach((kk => Bk(kk, this)))) || (kk => this.update(kk)), this.dispatch = this.dispatch.bind(this), this._root = kk.root || function(kk) {
          for (; kk;) {
            if (kk && (9 == kk.nodeType || 11 == kk.nodeType && kk.host)) return kk;
            kk = kk.assignedSlot || kk.parentNode
          }
          return null
        }(kk.parent) || document, this.viewState = new tt(this, kk.state || Rk.h.create(kk)), kk.scrollTo && kk.scrollTo.is(ZF) && (this.viewState.scrollTarget = kk.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(lF).map((kk => new IF(kk)));
        for (let Rk of this.plugins) Rk.update(this);
        this.observer = new Lt(this), this.inputState = new dR(this), this.inputState.ensureHandlers(this.plugins), this.docView = new rB(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (Fk = document.fonts) || void 0 === Fk ? void 0 : Fk.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        let tk = 1 == Fk.length && Fk[0] instanceof Rk.E ? Fk : 1 == Fk.length && Array.isArray(Fk[0]) ? Fk[0] : [this.state.update(...Fk)];
        this.dispatchTransactions(tk, this)
      }
      update(kk) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let Fk, Bk = !1,
          tk = !1,
          ak = this.state;
        for (let Rk of kk) {
          if (Rk.startState != ak) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          ak = Rk.state
        }
        if (this.destroyed) return void(this.viewState.state = ak);
        let Xk = this.hasFocus,
          bk = 0,
          wk = null;
        kk.some((kk => kk.annotation(MR))) ? (this.inputState.notifiedFocused = Xk, bk = 1) : Xk != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = Xk, wk = gR(ak, Xk), wk || (bk = 1));
        let dk = this.observer.delayedAndroidKey,
          sk = null;
        if (dk ? (this.observer.clearDelayedAndroidKey(), sk = this.observer.readChange(), (sk && !this.state.doc.eq(ak.doc) || !this.state.selection.eq(ak.selection)) && (sk = null)) : this.observer.clear(), ak.facet(Rk.h.phrases) != this.state.facet(Rk.h.phrases)) return this.setState(ak);
        Fk = VB.create(this, ak, kk), Fk.flags |= bk;
        let Vk = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let Fk of kk) {
            if (Vk && (Vk = Vk.map(Fk.changes)), Fk.scrollIntoView) {
              let {
                main: kk
              } = Fk.state.selection, {
                x: Bk,
                y: tk
              } = this.state.facet(Nt.cursorScrollMargin);
              Vk = new CF(kk.empty ? kk : Rk.f.cursor(kk.head, kk.head > kk.anchor ? -1 : 1), "nearest", "nearest", tk, Bk)
            }
            for (let kk of Fk.effects) kk.is(ZF) && (Vk = kk.value.clip(this.state))
          }
          this.viewState.update(Fk, Vk), this.bidiCache = Mt.update(this.bidiCache, Fk.changes), Fk.empty || (this.updatePlugins(Fk), this.inputState.update(Fk)), Bk = this.docView.update(Fk), this.state.facet(dB) != this.styleModules && this.mountStyles(), tk = this.updateAttrs(), this.showAnnouncements(kk), this.docView.updateSelection(Bk, kk.some((kk => kk.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (Fk.startState.facet(At) != Fk.state.facet(At) && (this.viewState.mustMeasureContent = !0), (Bk || tk || Vk || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), Bk && this.docViewUpdate(), !Fk.empty)
          for (let Rk of this.state.facet(GF)) try {
            Rk(Fk)
          } catch (Jk) {
            KF(this.state, Jk, "update listener")
          }(wk || sk) && Promise.resolve().then((() => {
            wk && this.state == wk.startState && this.dispatch(wk), sk && !aR(this, sk) && dk.force && aF(this.contentDOM, dk.key, dk.keyCode)
          }))
      }
      setState(kk) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = kk);
        this.updateState = 2;
        let Fk = this.hasFocus;
        try {
          for (let kk of this.plugins) kk.destroy(this);
          this.viewState = new tt(this, kk), this.plugins = kk.facet(lF).map((kk => new IF(kk))), this.pluginMap.clear();
          for (let kk of this.plugins) kk.update(this);
          this.docView.destroy(), this.docView = new rB(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        Fk && this.focus(), this.requestMeasure()
      }
      updatePlugins(kk) {
        let Fk = kk.startState.facet(lF),
          Bk = kk.state.facet(lF);
        if (Fk != Bk) {
          let Rk = [];
          for (let tk of Bk) {
            let Bk = Fk.indexOf(tk);
            if (Bk < 0) Rk.push(new IF(tk));
            else {
              let Fk = this.plugins[Bk];
              Fk.mustUpdate = kk, Rk.push(Fk)
            }
          }
          for (let Fk of this.plugins) Fk.mustUpdate != kk && Fk.destroy(this);
          this.plugins = Rk, this.pluginMap.clear()
        } else
          for (let Rk of this.plugins) Rk.mustUpdate = kk;
        for (let Rk = 0; Rk < this.plugins.length; Rk++) this.plugins[Rk].update(this);
        Fk != Bk && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let Fk of this.plugins) {
          let Bk = Fk.value;
          if (Bk && Bk.docViewUpdate) try {
            Bk.docViewUpdate(this)
          } catch (kk) {
            KF(this.state, kk, "doc view update listener")
          }
        }
      }
      measure() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, kk && this.observer.forceFlush();
        let Fk = null,
          Bk = this.viewState.scrollParent,
          Rk = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: tk,
            scrollAnchorHeight: ak
          } = this.viewState;
        Math.abs(Rk - this.viewState.scrollOffset) > 1 && (ak = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let kk = 0;; kk++) {
            if (ak < 0)
              if (XF(Bk || this.win)) tk = -1, ak = this.viewState.heightMap.height;
              else {
                let kk = this.viewState.scrollAnchorAt(Rk);
                tk = kk.from, ak = kk.top
              } this.updateState = 1;
            let bk = this.viewState.measure();
            if (!bk && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (kk > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let wk = [];
            4 & bk || ([this.measureRequests, wk] = [wk, this.measureRequests]);
            let dk = wk.map((kk => {
                try {
                  return kk.read(this)
                } catch (Fk) {
                  return KF(this.state, Fk), ut
                }
              })),
              sk = VB.create(this, this.state, []),
              Vk = !1;
            sk.flags |= bk, Fk ? Fk.flags |= bk : Fk = sk, this.updateState = 2, sk.empty || (this.updatePlugins(sk), this.inputState.update(sk), this.updateAttrs(), Vk = this.docView.update(sk), Vk && this.docViewUpdate());
            for (let kk = 0; kk < wk.length; kk++)
              if (dk[kk] != ut) try {
                let Fk = wk[kk];
                Fk.write && Fk.write(dk[kk], this)
              } catch (Xk) {
                KF(this.state, Xk)
              }
            if (Vk && this.docView.updateSelection(!0), !sk.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, ak = -1;
                  continue
                } {
                  let kk = ((tk < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(tk).top) - ak) / this.scaleY;
                  if ((kk > 1 || kk < -1) && (Bk == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Rk += kk, Bk ? Bk.scrollTop += kk : this.win.scrollBy(0, kk), ak = -1;
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
        if (Fk && !Fk.empty)
          for (let bk of this.state.facet(GF)) bk(Fk)
      }
      get themeClasses() {
        return yt + " " + (this.state.facet(et) ? mt : ft) + " " + this.state.facet(At)
      }
      updateAttrs() {
        let kk = gt(this, QF, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          Fk = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(xF) ? "true" : "false",
            class: "cm-content",
            style: `${Ok.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (Fk["aria-readonly"] = "true"), gt(this, kB, Fk);
        let Bk = this.observer.ignore((() => {
          let Bk = Hk(this.contentDOM, this.contentAttrs, Fk),
            Rk = Hk(this.dom, this.editorAttrs, kk);
          return Bk || Rk
        }));
        return this.editorAttrs = kk, this.contentAttrs = Fk, Bk
      }
      showAnnouncements(kk) {
        let Fk = !0;
        for (let Bk of kk)
          for (let kk of Bk.effects)
            if (kk.is(Nt.announce)) {
              Fk && (this.announceDOM.textContent = ""), Fk = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = kk.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(dB);
        let kk = this.state.facet(Nt.cspNonce);
        tk.d.mount(this.root, this.styleModules.concat(it).reverse(), kk ? {
          nonce: kk
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(kk) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), kk) {
          if (this.measureRequests.indexOf(kk) > -1) return;
          if (null != kk.key)
            for (let Fk = 0; Fk < this.measureRequests.length; Fk++)
              if (this.measureRequests[Fk].key === kk.key) return void(this.measureRequests[Fk] = kk);
          this.measureRequests.push(kk)
        }
      }
      plugin(kk) {
        let Fk = this.pluginMap.get(kk);
        return (void 0 === Fk || Fk && Fk.plugin != kk) && this.pluginMap.set(kk, Fk = this.plugins.find((Fk => Fk.plugin == kk)) || null), Fk && Fk.update(this).value
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
      elementAtHeight(kk) {
        return this.readMeasured(), this.viewState.elementAtHeight(kk)
      }
      lineBlockAtHeight(kk) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(kk)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(kk) {
        return this.viewState.lineBlockAt(kk)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(kk, Fk, Bk) {
        return xB(this, kk, ZB(this, kk, Fk, Bk))
      }
      moveByGroup(kk, Fk) {
        return xB(this, kk, ZB(this, kk, Fk, (Fk => function(kk, Fk, Bk) {
          let tk = kk.state.charCategorizer(Fk),
            ak = tk(Bk);
          return kk => {
            let Fk = tk(kk);
            return ak == Rk.e.Space && (ak = Fk), ak == Fk
          }
        }(this, kk.head, Fk))))
      }
      visualLineSide(kk, Fk) {
        let Bk = this.bidiSpans(kk),
          tk = this.textDirectionAt(kk.from),
          ak = Bk[Fk ? Bk.length - 1 : 0];
        return Rk.f.cursor(ak.side(Fk, tk) + kk.from, ak.forward(!Fk, tk) ? 1 : -1)
      }
      moveToLineBoundary(kk, Fk) {
        return function(kk, Fk, Bk, tk) {
          let ak = CB(kk, Fk.head, Fk.assoc || -1),
            Xk = tk && ak.type == gk.Text && (kk.lineWrapping || ak.widgetLineBreaks) ? kk.coordsAtPos(Fk.assoc < 0 && Fk.head > ak.from ? Fk.head - 1 : Fk.head) : null;
          if (Xk) {
            let Fk = kk.dom.getBoundingClientRect(),
              tk = kk.textDirectionAt(ak.from),
              bk = kk.posAtCoords({
                x: Bk == (tk == sF.LTR) ? Fk.right - 1 : Fk.left + 1,
                y: (Xk.top + Xk.bottom) / 2
              });
            if (null != bk) return Rk.f.cursor(bk, Bk ? -1 : 1)
          }
          return Rk.f.cursor(Bk ? ak.to : ak.from, Bk ? -1 : 1)
        }(this, kk, Fk, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(kk, Fk, Bk) {
        return xB(this, kk, function(kk, Fk, Bk, tk) {
          let ak = Fk.head,
            Xk = Bk ? 1 : -1;
          if (ak == (Bk ? kk.state.doc.length : 0)) return Rk.f.cursor(ak, Fk.assoc);
          let bk, wk = Fk.goalColumn,
            dk = kk.contentDOM.getBoundingClientRect(),
            sk = kk.coordsAtPos(ak, Fk.assoc || ((Fk.empty ? Bk : Fk.head == Fk.from) ? 1 : -1)),
            Vk = kk.documentTop;
          if (sk) null == wk && (wk = sk.left - dk.left), bk = Xk < 0 ? sk.top : sk.bottom;
          else {
            let Fk = kk.viewState.lineBlockAt(ak);
            null == wk && (wk = Math.min(dk.right - dk.left, kk.defaultCharacterWidth * (ak - Fk.from))), bk = (Xk < 0 ? Fk.top : Fk.bottom) + Vk
          }
          let Jk = dk.left + wk,
            Ak = kk.viewState.heightOracle.textHeight >> 1,
            ek = null !== tk && void 0 !== tk ? tk : Ak;
          for (let yk = 0;; yk += Ak) {
            let Fk = bk + (ek + yk) * Xk,
              tk = lB(kk, {
                x: Jk,
                y: Fk
              }, !1, Xk);
            if (Bk ? Fk > dk.bottom : Fk < dk.top) return Rk.f.cursor(tk.pos, tk.assoc);
            let ak = kk.coordsAtPos(tk.pos, tk.assoc),
              sk = ak ? (ak.top + ak.bottom) / 2 : 0;
            if (!ak || (Bk ? sk > bk : sk < bk)) return Rk.f.cursor(tk.pos, tk.assoc, void 0, wk)
          }
        }(this, kk, Fk, Bk))
      }
      domAtPos(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(kk, Fk)
      }
      posAtDOM(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(kk, Fk)
      }
      posAtCoords(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let Bk = lB(this, kk, Fk);
        return Bk && Bk.pos
      }
      posAndSideAtCoords(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), lB(this, kk, Fk)
      }
      coordsAtPos(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let Bk = this.docView.coordsAt(kk, Fk);
        if (!Bk || Bk.left == Bk.right) return Bk;
        let Rk = this.state.doc.lineAt(kk),
          tk = this.bidiSpans(Rk);
        return lk(Bk, tk[iF.find(tk, kk - Rk.from, -1, Fk)].dir == sF.LTR == Fk > 0)
      }
      coordsForChar(kk) {
        return this.readMeasured(), this.docView.coordsForChar(kk)
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
      textDirectionAt(kk) {
        return !this.state.facet(PF) || kk < this.viewport.from || kk > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(kk))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(kk) {
        if (kk.length > Ht) return SF(kk.length);
        let Fk, Bk = this.textDirectionAt(kk.from);
        for (let tk of this.bidiCache)
          if (tk.from == kk.from && tk.dir == Bk && (tk.fresh || YF(tk.isolates, Fk = XB(this, kk)))) return tk.order;
        Fk || (Fk = XB(this, kk));
        let Rk = EF(kk.text, Bk, Fk);
        return this.bidiCache.push(new Mt(kk.from, kk.to, Bk, Fk, !0, Rk)), Rk
      }
      get hasFocus() {
        var kk;
        return (this.dom.ownerDocument.hasFocus() || Ok.safari && (null === (kk = this.inputState) || void 0 === kk ? void 0 : kk.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          RF(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(kk) {
        this._root != kk && (this._root = kk, this.observer.setWindow((9 == kk.nodeType ? kk : kk.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let kk of this.plugins) kk.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var Bk, tk, ak, Xk;
        return ZF.of(new CF("number" == typeof kk ? Rk.f.cursor(kk) : kk, null !== (Bk = Fk.y) && void 0 !== Bk ? Bk : "nearest", null !== (tk = Fk.x) && void 0 !== tk ? tk : "nearest", null !== (ak = Fk.yMargin) && void 0 !== ak ? ak : 5, null !== (Xk = Fk.xMargin) && void 0 !== Xk ? Xk : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: kk,
          scrollLeft: Fk
        } = this.scrollDOM, Bk = this.viewState.scrollAnchorAt(kk);
        return ZF.of(new CF(Rk.f.cursor(Bk.from), "start", "start", Bk.top - kk, Fk, !0))
      }
      setTabFocusMode(kk) {
        null == kk ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof kk ? this.inputState.tabFocusMode = kk ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + kk)
      }
      static domEventHandlers(kk) {
        return nF.define((() => ({})), {
          eventHandlers: kk
        })
      }
      static domEventObservers(kk) {
        return nF.define((() => ({})), {
          eventObservers: kk
        })
      }
      static theme(kk, Fk) {
        let Bk = tk.d.newName(),
          Rk = [At.of(Bk), dB.of(vt(`.${Bk}`, kk))];
        return Fk && Fk.dark && Rk.push(et.of(!0)), Rk
      }
      static baseTheme(kk) {
        return Rk.o.lowest(dB.of(vt("." + yt, kk, Wt)))
      }
      static findFromDOM(kk) {
        var Fk;
        let Bk = kk.querySelector(".cm-content"),
          Rk = Bk && AB.get(Bk) || AB.get(kk);
        return (null === (Fk = null === Rk || void 0 === Rk ? void 0 : Rk.root) || void 0 === Fk ? void 0 : Fk.view) || null
      }
    }
    Nt.styleModule = dB, Nt.inputHandler = TF, Nt.clipboardInputFilter = DF, Nt.clipboardOutputFilter = zF, Nt.scrollHandler = qF, Nt.focusChangeEffect = rF, Nt.perLineTextDirection = PF, Nt.exceptionSink = cF, Nt.updateListener = GF, Nt.editable = xF, Nt.mouseSelectionStyle = UF, Nt.dragMovesSelection = gF, Nt.clickAddsSelectionRange = MF, Nt.uR = FB, Nt.blockWrappers = BB, Nt.outerDecorations = RB, Nt.atomicRanges = tB, Nt.bidiIsolatedRanges = aB, Nt.cursorScrollMargin = Rk.i.define({
      combine: kk => {
        let Fk = 5,
          Bk = 5;
        for (let Rk of kk) "number" == typeof Rk ? Fk = Bk = Rk : ({
          x: Fk,
          y: Bk
        } = Rk);
        return {
          x: Fk,
          y: Bk
        }
      }
    }), Nt.scrollMargins = bB, Nt.darkTheme = et, Nt.cspNonce = Rk.i.define({
      combine: kk => kk.length ? kk[0] : ""
    }), Nt.contentAttributes = kB, Nt.editorAttributes = QF, Nt.lineWrapping = Nt.contentAttributes.of({
      class: "cm-lineWrapping"
    }), Nt.announce = Rk.z.define();
    const Ht = 4096,
      ut = {};
    class Mt {
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        this.from = kk, this.to = Fk, this.dir = Bk, this.isolates = Rk, this.fresh = tk, this.order = ak
      }
      static update(kk, Fk) {
        if (Fk.empty && !kk.some((kk => kk.fresh))) return kk;
        let Bk = [],
          Rk = kk.length ? kk[kk.length - 1].dir : sF.LTR;
        for (let tk = Math.max(0, kk.length - 10); tk < kk.length; tk++) {
          let ak = kk[tk];
          ak.dir != Rk || Fk.touchesRange(ak.from, ak.to) || Bk.push(new Mt(Fk.mapPos(ak.from, 1), Fk.mapPos(ak.to, -1), ak.dir, ak.isolates, !1, ak.order))
        }
        return Bk
      }
    }

    function gt(kk, Fk, Bk) {
      for (let Rk = kk.state.facet(Fk), tk = Rk.length - 1; tk >= 0; tk--) {
        let Fk = Rk[tk],
          ak = "function" == typeof Fk ? Fk(kk) : Fk;
        ak && Ek(ak, Bk)
      }
      return Bk
    }
    const Ut = Ok.mac ? "mac" : Ok.windows ? "win" : Ok.linux ? "linux" : "key";

    function ct(kk, Fk, Bk) {
      return Fk.altKey && (kk = "Alt-" + kk), Fk.ctrlKey && (kk = "Ctrl-" + kk), Fk.metaKey && (kk = "Meta-" + kk), !1 !== Bk && Fk.shiftKey && (kk = "Shift-" + kk), kk
    }
    const Gt = Rk.o.default(Nt.domEventHandlers({
        keydown: (kk, Fk) => Ct(Dt(Fk.state), kk, Fk, "editor")
      })),
      Tt = Rk.i.define({
        enables: Gt
      }),
      rt = new WeakMap;

    function Dt(kk) {
      let Fk = kk.facet(Tt),
        Bk = rt.get(Fk);
      return Bk || rt.set(Fk, Bk = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ut,
          Bk = Object.create(null),
          Rk = Object.create(null),
          tk = (kk, Fk) => {
            let Bk = Rk[kk];
            if (null == Bk) Rk[kk] = Fk;
            else if (Bk != Fk) throw new Error("Key binding " + kk + " is used both as a regular binding and as a multi-stroke prefix")
          },
          ak = (kk, Rk, ak, Xk, bk) => {
            var wk, dk;
            let sk = Bk[kk] || (Bk[kk] = Object.create(null)),
              Vk = Rk.split(/ (?!$)/).map((kk => function(kk, Fk) {
                const Bk = kk.split(/-(?!$)/);
                let Rk, tk, ak, Xk, bk = Bk[Bk.length - 1];
                "Space" == bk && (bk = " ");
                for (let wk = 0; wk < Bk.length - 1; ++wk) {
                  const kk = Bk[wk];
                  if (/^(cmd|meta|m)$/i.test(kk)) Xk = !0;
                  else if (/^a(lt)?$/i.test(kk)) Rk = !0;
                  else if (/^(c|ctrl|control)$/i.test(kk)) tk = !0;
                  else if (/^s(hift)?$/i.test(kk)) ak = !0;
                  else {
                    if (!/^mod$/i.test(kk)) throw new Error("Unrecognized modifier name: " + kk);
                    "mac" == Fk ? Xk = !0 : tk = !0
                  }
                }
                return Rk && (bk = "Alt-" + bk), tk && (bk = "Ctrl-" + bk), Xk && (bk = "Meta-" + bk), ak && (bk = "Shift-" + bk), bk
              }(kk, Fk)));
            for (let Fk = 1; Fk < Vk.length; Fk++) {
              let Bk = Vk.slice(0, Fk).join(" ");
              tk(Bk, !0), sk[Bk] || (sk[Bk] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [Fk => {
                  let Rk = Pt = {
                    view: Fk,
                    prefix: Bk,
                    scope: kk
                  };
                  return setTimeout((() => {
                    Pt == Rk && (Pt = null)
                  }), ht), !0
                }]
              })
            }
            let Jk = Vk.join(" ");
            tk(Jk, !1);
            let Ak = sk[Jk] || (sk[Jk] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (dk = null === (wk = sk._any) || void 0 === wk ? void 0 : wk.run) || void 0 === dk ? void 0 : dk.slice()) || []
            });
            ak && Ak.run.push(ak), Xk && (Ak.preventDefault = !0), bk && (Ak.stopPropagation = !0)
          };
        for (let Xk of kk) {
          let kk = Xk.scope ? Xk.scope.split(" ") : ["editor"];
          if (Xk.any)
            for (let Fk of kk) {
              let kk = Bk[Fk] || (Bk[Fk] = Object.create(null));
              kk._any || (kk._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Rk
              } = Xk;
              for (let Fk in kk) kk[Fk].run.push((kk => Rk(kk, qt)))
            }
          let Rk = Xk[Fk] || Xk.key;
          if (Rk)
            for (let Fk of kk) ak(Fk, Rk, Xk.run, Xk.preventDefault, Xk.stopPropagation), Xk.shift && ak(Fk, "Shift-" + Rk, Xk.shift, Xk.preventDefault, Xk.stopPropagation)
        }
        return Bk
      }(Fk.reduce(((kk, Fk) => kk.concat(Fk)), []))), Bk
    }

    function zt(kk, Fk, Bk) {
      return Ct(Dt(kk.state), Fk, kk, Bk)
    }
    let Pt = null;
    const ht = 4e3;
    let qt = null;

    function Ct(kk, Fk, Bk, tk) {
      qt = Fk;
      let dk = function(kk) {
          var Fk = !(bk && kk.metaKey && kk.shiftKey && !kk.ctrlKey && !kk.altKey || wk && kk.shiftKey && kk.key && 1 == kk.key.length || "Unidentified" == kk.key) && kk.key || (kk.shiftKey ? Xk : ak)[kk.keyCode] || kk.key || "Unidentified";
          return "Esc" == Fk && (Fk = "Escape"), "Del" == Fk && (Fk = "Delete"), "Left" == Fk && (Fk = "ArrowLeft"), "Up" == Fk && (Fk = "ArrowUp"), "Right" == Fk && (Fk = "ArrowRight"), "Down" == Fk && (Fk = "ArrowDown"), Fk
        }(Fk),
        sk = (0, Rk.I)(dk, 0),
        Vk = (0, Rk.J)(sk) == dk.length && " " != dk,
        Jk = "",
        Ak = !1,
        ek = !1,
        yk = !1;
      Pt && Pt.view == Bk && Pt.scope == tk && (Jk = Pt.prefix + " ", eR.indexOf(Fk.keyCode) < 0 && (ek = !0, Pt = null));
      let fk, mk, Wk = new Set,
        vk = kk => {
          if (kk) {
            for (let Fk of kk.run)
              if (!Wk.has(Fk) && (Wk.add(Fk), Fk(Bk))) return kk.stopPropagation && (yk = !0), !0;
            kk.preventDefault && (kk.stopPropagation && (yk = !0), ek = !0)
          }
          return !1
        },
        ik = kk[tk];
      return ik && (vk(ik[Jk + ct(dk, Fk, !Vk)]) ? Ak = !0 : !Vk || !(Fk.altKey || Fk.metaKey || Fk.ctrlKey) || Ok.windows && Fk.ctrlKey && Fk.altKey || Ok.mac && Fk.altKey && !Fk.ctrlKey && !Fk.metaKey || !(fk = ak[Fk.keyCode]) || fk == dk ? Vk && Fk.shiftKey && vk(ik[Jk + ct(dk, Fk, !0)]) && (Ak = !0) : (vk(ik[Jk + ct(fk, Fk, !0)]) || Fk.shiftKey && (mk = Xk[Fk.keyCode]) != dk && mk != fk && vk(ik[Jk + ct(mk, Fk, !1)])) && (Ak = !0), !Ak && vk(ik._any) && (Ak = !0)), ek && (Ak = !0), Ak && yk && Fk.stopPropagation(), qt = null, Ak
    }
    class Zt {
      constructor(kk, Fk, Bk, Rk, tk) {
        this.className = kk, this.left = Fk, this.top = Bk, this.width = Rk, this.height = tk
      }
      draw() {
        let kk = document.createElement("div");
        return kk.className = this.className, this.adjust(kk), kk
      }
      update(kk, Fk) {
        return Fk.className == this.className && (this.adjust(kk), !0)
      }
      adjust(kk) {
        kk.style.left = this.left + "px", kk.style.top = this.top + "px", null != this.width && (kk.style.width = this.width + "px"), kk.style.height = this.height + "px"
      }
      eq(kk) {
        return this.left == kk.left && this.top == kk.top && this.width == kk.width && this.height == kk.height && this.className == kk.className
      }
      static forRange(kk, Fk, Bk) {
        if (Bk.empty) {
          let Rk = kk.coordsAtPos(Bk.head, Bk.assoc || 1);
          if (!Rk) return [];
          let tk = pt(kk);
          return [new Zt(Fk, Rk.left - tk.left, Rk.top - tk.top, null, Rk.bottom - Rk.top)]
        }
        return function(kk, Fk, Bk) {
          if (Bk.to <= kk.viewport.from || Bk.from >= kk.viewport.to) return [];
          let Rk = Math.max(Bk.from, kk.viewport.from),
            tk = Math.min(Bk.to, kk.viewport.to),
            ak = kk.textDirection == sF.LTR,
            Xk = kk.contentDOM,
            bk = Xk.getBoundingClientRect(),
            wk = pt(kk),
            dk = Xk.querySelector(".cm-line"),
            sk = dk && window.getComputedStyle(dk),
            Vk = bk.left + (sk ? parseInt(sk.paddingLeft) + Math.min(0, parseInt(sk.textIndent)) : 0),
            Jk = bk.right - (sk ? parseInt(sk.paddingRight) : 0),
            Ak = CB(kk, Rk, 1),
            ek = CB(kk, tk, -1),
            yk = Ak.type == gk.Text ? Ak : null,
            fk = ek.type == gk.Text ? ek : null;
          yk && (kk.lineWrapping || Ak.widgetLineBreaks) && (yk = Kt(kk, Rk, 1, yk));
          fk && (kk.lineWrapping || ek.widgetLineBreaks) && (fk = Kt(kk, tk, -1, fk));
          if (yk && fk && yk.from == fk.from && yk.to == fk.to) return Wk(vk(Bk.from, Bk.to, yk));
          {
            let Fk = yk ? vk(Bk.from, null, yk) : ik(Ak, !1),
              Rk = fk ? vk(null, Bk.to, fk) : ik(ek, !0),
              tk = [];
            return (yk || Ak).to < (fk || ek).from - (yk && fk ? 1 : 0) || Ak.widgetLineBreaks > 1 && Fk.bottom + kk.defaultLineHeight / 2 < Rk.top ? tk.push(mk(Vk, Fk.bottom, Jk, Rk.top)) : Fk.bottom < Rk.top && kk.elementAtHeight((Fk.bottom + Rk.top) / 2).type == gk.Text && (Fk.bottom = Rk.top = (Fk.bottom + Rk.top) / 2), Wk(Fk).concat(tk).concat(Wk(Rk))
          }

          function mk(kk, Bk, Rk, tk) {
            return new Zt(Fk, kk - wk.left, Bk - wk.top, Math.max(0, Rk - kk), tk - Bk)
          }

          function Wk(kk) {
            let {
              top: Fk,
              bottom: Bk,
              horizontal: Rk
            } = kk, tk = [];
            for (let ak = 0; ak < Rk.length; ak += 2) tk.push(mk(Rk[ak], Fk, Rk[ak + 1], Bk));
            return tk
          }

          function vk(Fk, Bk, Rk) {
            let tk = 1e9,
              Xk = -1e9,
              bk = [];

            function wk(Fk, Bk, wk, dk, sk) {
              let Ak = kk.coordsAtPos(Fk, Fk == Rk.to ? -2 : 2),
                ek = kk.coordsAtPos(wk, wk == Rk.from ? 2 : -2);
              Ak && ek && (tk = Math.min(Ak.top, ek.top, tk), Xk = Math.max(Ak.bottom, ek.bottom, Xk), sk == sF.LTR ? bk.push(ak && Bk ? Vk : Ak.left, ak && dk ? Jk : ek.right) : bk.push(!ak && dk ? Vk : ek.left, !ak && Bk ? Jk : Ak.right))
            }
            let dk = null !== Fk && void 0 !== Fk ? Fk : Rk.from,
              sk = null !== Bk && void 0 !== Bk ? Bk : Rk.to;
            for (let ak of kk.q_)
              if (ak.to > dk && ak.from < sk)
                for (let Rk = Math.max(ak.from, dk), tk = Math.min(ak.to, sk);;) {
                  let ak = kk.state.doc.lineAt(Rk);
                  for (let Xk of kk.bidiSpans(ak)) {
                    let kk = Xk.from + ak.from,
                      bk = Xk.to + ak.from;
                    if (kk >= tk) break;
                    bk > Rk && wk(Math.max(kk, Rk), null == Fk && kk <= dk, Math.min(bk, tk), null == Bk && bk >= sk, Xk.dir)
                  }
                  if (Rk = ak.to + 1, Rk >= tk) break
                }
            return 0 == bk.length && wk(dk, null == Fk, sk, null == Bk, kk.textDirection), {
              top: tk,
              bottom: Xk,
              horizontal: bk
            }
          }

          function ik(kk, Fk) {
            let Bk = bk.top + (Fk ? kk.top : kk.bottom);
            return {
              top: Bk,
              bottom: Bk,
              horizontal: []
            }
          }
        }(kk, Fk, Bk)
      }
    }

    function pt(kk) {
      let Fk = kk.scrollDOM.getBoundingClientRect();
      return {
        left: (kk.textDirection == sF.LTR ? Fk.left : Fk.right - kk.scrollDOM.clientWidth * kk.scaleX) - kk.scrollDOM.scrollLeft * kk.scaleX,
        top: Fk.top - kk.scrollDOM.scrollTop * kk.scaleY
      }
    }

    function Kt(kk, Fk, Bk, Rk) {
      let tk = kk.coordsAtPos(Fk, 2 * Bk);
      if (!tk) return Rk;
      let ak = kk.dom.getBoundingClientRect(),
        Xk = (tk.top + tk.bottom) / 2,
        bk = kk.posAtCoords({
          x: ak.left + 1,
          y: Xk
        }),
        wk = kk.posAtCoords({
          x: ak.right - 1,
          y: Xk
        });
      return null == bk || null == wk ? Rk : {
        from: Math.max(Rk.from, Math.min(bk, wk)),
        to: Math.min(Rk.to, Math.max(bk, wk))
      }
    }
    class xt {
      constructor(kk, Fk) {
        this.view = kk, this.layer = Fk, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = kk.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), Fk.above && this.dom.classList.add("cm-layer-above"), Fk.class && this.dom.classList.add(Fk.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(kk.state), kk.requestMeasure(this.measureReq), Fk.mount && Fk.mount(this.dom, kk)
      }
      update(kk) {
        kk.startState.facet(jt) != kk.state.facet(jt) && this.setOrder(kk.state), (this.layer.update(kk, this.dom) || kk.geometryChanged) && (this.scale(), kk.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(kk) {
        !1 !== this.layer.updateOnDocViewUpdate && kk.requestMeasure(this.measureReq)
      }
      setOrder(kk) {
        let Fk = 0,
          Bk = kk.facet(jt);
        for (; Fk < Bk.length && Bk[Fk] != this.layer;) Fk++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - Fk)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: kk,
          scaleY: Fk
        } = this.view;
        kk == this.scaleX && Fk == this.scaleY || (this.scaleX = kk, this.scaleY = Fk, this.dom.style.transform = `scale(${1/kk}, ${1/Fk})`)
      }
      draw(kk) {
        if (kk.length != this.drawn.length || kk.some(((kk, Fk) => {
            return Bk = kk, Rk = this.drawn[Fk], !(Bk.constructor == Rk.constructor && Bk.eq(Rk));
            var Bk, Rk
          }))) {
          let Fk = this.dom.firstChild,
            Bk = 0;
          for (let Rk of kk) Rk.update && Fk && Rk.constructor && this.drawn[Bk].constructor && Rk.update(Fk, this.drawn[Bk]) ? (Fk = Fk.nextSibling, Bk++) : this.dom.insertBefore(Rk.draw(), Fk);
          for (; Fk;) {
            let kk = Fk.nextSibling;
            Fk.remove(), Fk = kk
          }
          this.drawn = kk, Ok.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const jt = Rk.i.define();

    function lt(kk) {
      return [nF.define((Fk => new xt(Fk, kk))), jt.of(kk)]
    }
    const nt = Rk.i.define({
      combine: kk => (0, Rk.K)(kk, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (kk, Fk) => Math.min(kk, Fk),
        drawRangeCursor: (kk, Fk) => kk || Fk
      })
    });

    function It() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [nt.of(kk), ka, Ba, Ra, hF.of(!0)]
    }

    function Qt(kk) {
      return kk.startState.facet(nt) != kk.state.facet(nt)
    }
    const ka = lt({
      above: !0,
      markers(kk) {
        let {
          state: Fk
        } = kk, Bk = Fk.facet(nt), tk = [];
        for (let ak of Fk.selection.hb) {
          let Xk = ak == Fk.selection.main;
          if (ak.empty || Bk.drawRangeCursor && !(Xk && Ok.ios && Bk.iosSelectionHandles)) {
            let Fk = Xk ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              Bk = ak.empty ? ak : Rk.f.cursor(ak.head, ak.assoc);
            for (let Rk of Zt.forRange(kk, Fk, Bk)) tk.push(Rk)
          }
        }
        return tk
      },
      update(kk, Fk) {
        kk.transactions.some((kk => kk.selection)) && (Fk.style.animationName = "cm-blink" == Fk.style.animationName ? "cm-blink2" : "cm-blink");
        let Bk = Qt(kk);
        return Bk && Fa(kk.state, Fk), kk.docChanged || kk.selectionSet || Bk
      },
      mount(kk, Fk) {
        Fa(Fk.state, kk)
      },
      class: "cm-cursorLayer"
    });

    function Fa(kk, Fk) {
      Fk.style.animationDuration = kk.facet(nt).cursorBlinkRate + "ms"
    }
    const Ba = lt({
        above: !1,
        markers(kk) {
          let Fk = [],
            {
              main: Bk,
              hb: tk
            } = kk.state.selection;
          for (let Rk of tk)
            if (!Rk.empty)
              for (let Bk of Zt.forRange(kk, "cm-selectionBackground", Rk)) Fk.push(Bk);
          if (Ok.ios && !Bk.empty && kk.state.facet(nt).iosSelectionHandles) {
            for (let tk of Zt.forRange(kk, "cm-selectionHandle cm-selectionHandle-start", Rk.f.cursor(Bk.from, 1))) Fk.push(tk);
            for (let tk of Zt.forRange(kk, "cm-selectionHandle cm-selectionHandle-end", Rk.f.cursor(Bk.to, 1))) Fk.push(tk)
          }
          return Fk
        },
        update: (kk, Fk) => kk.docChanged || kk.selectionSet || kk.viewportChanged || Qt(kk),
        class: "cm-selectionLayer"
      }),
      Ra = Rk.o.highest(Nt.theme({
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
      ta = Rk.z.define({
        map: (kk, Fk) => null == kk ? null : Fk.mapPos(kk)
      }),
      aa = Rk.A.define({
        create: () => null,
        update: (kk, Fk) => (null != kk && (kk = Fk.changes.mapPos(kk)), Fk.effects.reduce(((kk, Fk) => Fk.is(ta) ? Fk.value : kk), kk))
      }),
      Xa = nF.fromClass(class {
        constructor(kk) {
          this.view = kk, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(kk) {
          var Fk;
          let Bk = kk.state.field(aa);
          null == Bk ? null != this.cursor && (null === (Fk = this.cursor) || void 0 === Fk || Fk.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (kk.startState.field(aa) != Bk || kk.docChanged || kk.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: kk
          } = this, Fk = kk.state.field(aa), Bk = null != Fk && kk.coordsAtPos(Fk);
          if (!Bk) return null;
          let Rk = kk.scrollDOM.getBoundingClientRect();
          return {
            left: Bk.left - Rk.left + kk.scrollDOM.scrollLeft * kk.scaleX,
            top: Bk.top - Rk.top + kk.scrollDOM.scrollTop * kk.scaleY,
            height: Bk.bottom - Bk.top
          }
        }
        drawCursor(kk) {
          if (this.cursor) {
            let {
              scaleX: Fk,
              scaleY: Bk
            } = this.view;
            kk ? (this.cursor.style.left = kk.left / Fk + "px", this.cursor.style.top = kk.top / Bk + "px", this.cursor.style.height = kk.height / Bk + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(kk) {
          this.view.state.field(aa) != kk && this.view.dispatch({
            effects: ta.of(kk)
          })
        }
      }, {
        eventObservers: {
          dragover(kk) {
            this.setDropPos(this.view.posAtCoords({
              x: kk.clientX,
              y: kk.clientY
            }))
          },
          dragleave(kk) {
            kk.target != this.view.contentDOM && this.view.contentDOM.contains(kk.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function ba() {
      return [aa, Xa]
    }

    function wa(kk, Fk, Bk, Rk, tk) {
      Fk.lastIndex = 0;
      for (let ak, Xk = kk.iterRange(Bk, Rk), bk = Bk; !Xk.next().done; bk += Xk.value.length)
        if (!Xk.lineBreak)
          for (; ak = Fk.exec(Xk.value);) tk(bk + ak.index, ak)
    }
    class da {
      constructor(kk) {
        const {
          regexp: Fk,
          decoration: Bk,
          decorate: Rk,
          boundary: tk,
          maxLength: ak = 1e3
        } = kk;
        if (!Fk.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = Fk, Rk) this.addMatch = (kk, Fk, Bk, tk) => Rk(tk, Bk, Bk + kk[0].length, kk, Fk);
        else if ("function" == typeof Bk) this.addMatch = (kk, Fk, Rk, tk) => {
          let ak = Bk(kk, Fk, Rk);
          ak && tk(Rk, Rk + kk[0].length, ak)
        };
        else {
          if (!Bk) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (kk, Fk, Rk, tk) => tk(Rk, Rk + kk[0].length, Bk)
        }
        this.boundary = tk, this.maxLength = ak
      }
      createDeco(kk) {
        let Fk = new Rk.r,
          Bk = Fk.add.bind(Fk);
        for (let {
            from: Rk,
            to: tk
          }
          of
          function(kk, Fk) {
            let Bk = kk.q_;
            if (1 == Bk.length && Bk[0].from == kk.viewport.from && Bk[0].to == kk.viewport.to) return Bk;
            let Rk = [];
            for (let {
                from: tk,
                to: ak
              }
              of Bk) tk = Math.max(kk.state.doc.lineAt(tk).from, tk - Fk), ak = Math.min(kk.state.doc.lineAt(ak).to, ak + Fk), Rk.length && Rk[Rk.length - 1].to >= tk ? Rk[Rk.length - 1].to = ak : Rk.push({
              from: tk,
              to: ak
            });
            return Rk
          }(kk, this.maxLength)) wa(kk.state.doc, this.regexp, Rk, tk, ((Fk, Rk) => this.addMatch(Rk, kk, Fk, Bk)));
        return Fk.finish()
      }
      updateDeco(kk, Fk) {
        let Bk = 1e9,
          Rk = -1;
        return kk.docChanged && kk.changes.iterChanges(((Fk, tk, ak, Xk) => {
          Xk >= kk.view.viewport.from && ak <= kk.view.viewport.to && (Bk = Math.min(ak, Bk), Rk = Math.max(Xk, Rk))
        })), kk.viewportMoved || Rk - Bk > 1e3 ? this.createDeco(kk.view) : Rk > -1 ? this.updateRange(kk.view, Fk.map(kk.changes), Bk, Rk) : Fk
      }
      updateRange(kk, Fk, Bk, Rk) {
        for (let tk of kk.q_) {
          let ak = Math.max(tk.from, Bk),
            Xk = Math.min(tk.to, Rk);
          if (Xk >= ak) {
            let Bk = kk.state.doc.lineAt(ak),
              Rk = Bk.to < Xk ? kk.state.doc.lineAt(Xk) : Bk,
              bk = Math.max(tk.from, Bk.from),
              wk = Math.min(tk.to, Rk.to);
            if (this.boundary) {
              for (; ak > Bk.from; ak--)
                if (this.boundary.test(Bk.text[ak - 1 - Bk.from])) {
                  bk = ak;
                  break
                } for (; Xk < Rk.to; Xk++)
                if (this.boundary.test(Rk.text[Xk - Rk.from])) {
                  wk = Xk;
                  break
                }
            }
            let dk, sk = [],
              Vk = (kk, Fk, Bk) => sk.push(Bk.range(kk, Fk));
            if (Bk == Rk)
              for (this.regexp.lastIndex = bk - Bk.from;
                (dk = this.regexp.exec(Bk.text)) && dk.index < wk - Bk.from;) this.addMatch(dk, kk, dk.index + Bk.from, Vk);
            else wa(kk.state.doc, this.regexp, bk, wk, ((Fk, Bk) => this.addMatch(Bk, kk, Fk, Vk)));
            Fk = Fk.update({
              filterFrom: bk,
              filterTo: wk,
              filter: (kk, Fk) => kk < bk || Fk > wk,
              add: sk
            })
          }
        }
        return Fk
      }
    }
    const sa = null != /x/.unicode ? "gu" : "g",
      Va = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", sa),
      Ja = {
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
    let Aa = null;
    const ea = Rk.i.define({
      combine(kk) {
        let Fk = (0, Rk.K)(kk, {
          render: null,
          specialChars: Va,
          addSpecialChars: null
        });
        return (Fk.replaceTabs = ! function() {
          var kk;
          if (null == Aa && "undefined" != typeof document && document.body) {
            let Fk = document.body.style;
            Aa = null != (null !== (kk = Fk.tabSize) && void 0 !== kk ? kk : Fk.MozTabSize)
          }
          return Aa || !1
        }()) && (Fk.specialChars = new RegExp("\t|" + Fk.specialChars.source, sa)), Fk.addSpecialChars && (Fk.specialChars = new RegExp(Fk.specialChars.source + "|" + Fk.addSpecialChars.source, sa)), Fk
      }
    });

    function ya() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ea.of(kk), fa || (fa = nF.fromClass(class {
        constructor(kk) {
          this.view = kk, this.uR = Uk.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(kk.state.facet(ea)), this.uR = this.decorator.createDeco(kk)
        }
        makeDecorator(kk) {
          return new da({
            regexp: kk.specialChars,
            decoration: (Fk, Bk, tk) => {
              let {
                doc: ak
              } = Bk.state, Xk = (0, Rk.I)(Fk[0], 0);
              if (9 == Xk) {
                let kk = ak.lineAt(tk),
                  Fk = Bk.state.tabSize,
                  Xk = (0, Rk.M)(kk.text, Fk, tk - kk.from);
                return Uk.replace({
                  widget: new Wa((Fk - Xk % Fk) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[Xk] || (this.decorationCache[Xk] = Uk.replace({
                widget: new ma(kk, Xk)
              }))
            },
            boundary: kk.replaceTabs ? void 0 : /[^]/
          })
        }
        update(kk) {
          let Fk = kk.state.facet(ea);
          kk.startState.facet(ea) != Fk ? (this.decorator = this.makeDecorator(Fk), this.uR = this.decorator.createDeco(kk.view)) : this.uR = this.decorator.updateDeco(kk, this.uR)
        }
      }, {
        uR: kk => kk.uR
      }))]
    }
    let fa = null;
    class ma extends Mk {
      constructor(kk, Fk) {
        super(), this.options = kk, this.code = Fk
      }
      eq(kk) {
        return kk.code == this.code
      }
      toDOM(kk) {
        let Fk = function(kk) {
            return kk >= 32 ? "\u2022" : 10 == kk ? "\u2424" : String.fromCharCode(9216 + kk)
          }(this.code),
          Bk = kk.state.phrase("Control character") + " " + (Ja[this.code] || "0x" + this.code.toString(16)),
          Rk = this.options.render && this.options.render(this.code, Bk, Fk);
        if (Rk) return Rk;
        let tk = document.createElement("span");
        return tk.textContent = Fk, tk.title = Bk, tk.setAttribute("aria-label", Bk), tk.className = "cm-specialChar", tk
      }
      ignoreEvent() {
        return !1
      }
    }
    class Wa extends Mk {
      constructor(kk) {
        super(), this.width = kk
      }
      eq(kk) {
        return kk.width == this.width
      }
      toDOM() {
        let kk = document.createElement("span");
        return kk.textContent = "\t", kk.className = "cm-tab", kk.style.width = this.width + "px", kk
      }
      ignoreEvent() {
        return !1
      }
    }

    function va() {
      return Ya
    }
    const ia = Uk.line({
        class: "cm-activeLine"
      }),
      Ya = nF.fromClass(class {
        constructor(kk) {
          this.uR = this.getDeco(kk)
        }
        update(kk) {
          (kk.docChanged || kk.selectionSet) && (this.uR = this.getDeco(kk.view))
        }
        getDeco(kk) {
          let Fk = -1,
            Bk = [];
          for (let Rk of kk.state.selection.hb) {
            let tk = kk.lineBlockAt(Rk.head);
            tk.from > Fk && (Bk.push(ia.range(tk.from)), Fk = tk.from)
          }
          return Uk.set(Bk)
        }
      }, {
        uR: kk => kk.uR
      });
    class oa extends Mk {
      constructor(kk) {
        super(), this.content = kk
      }
      toDOM(kk) {
        let Fk = document.createElement("span");
        return Fk.className = "cm-placeholder", Fk.style.pointerEvents = "none", Fk.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(kk) : this.content.cloneNode(!0)), Fk.setAttribute("aria-hidden", "true"), Fk
      }
      coordsAt(kk) {
        let Fk = kk.firstChild ? Ck(kk.firstChild) : [];
        if (!Fk.length) return null;
        let Bk = window.getComputedStyle(kk.parentNode),
          Rk = lk(Fk[0], "rtl" != Bk.direction),
          tk = parseInt(Bk.lineHeight);
        return Rk.bottom - Rk.top > 1.5 * tk ? {
          left: Rk.left,
          right: Rk.right,
          top: Rk.top,
          bottom: Rk.top + tk
        } : Rk
      }
      ignoreEvent() {
        return !1
      }
    }

    function La(kk) {
      let Fk = nF.fromClass(class {
        constructor(Fk) {
          this.view = Fk, this.placeholder = kk ? Uk.set([Uk.widget({
            widget: new oa(kk),
            side: 1
          }).range(0)]) : Uk.none
        }
        get uR() {
          return this.view.state.doc.length ? Uk.none : this.placeholder
        }
      }, {
        uR: kk => kk.uR
      });
      return "string" == typeof kk ? [Fk, Nt.contentAttributes.of({
        "aria-placeholder": kk
      })] : Fk
    }
    const Oa = 2e3;

    function Ea(kk, Fk) {
      let Bk = kk.posAtCoords({
          x: Fk.clientX,
          y: Fk.clientY
        }, !1),
        tk = kk.state.doc.lineAt(Bk),
        ak = Bk - tk.from,
        Xk = ak > Oa ? -1 : ak == tk.length ? function(kk, Fk) {
          let Bk = kk.coordsAtPos(kk.viewport.from);
          return Bk ? Math.round(Math.abs((Bk.left - Fk) / kk.defaultCharacterWidth)) : -1
        }(kk, Fk.clientX) : (0, Rk.M)(tk.text, kk.state.tabSize, Bk - tk.from);
      return {
        line: tk.number,
        col: Xk,
        off: ak
      }
    }

    function Sa(kk, Fk) {
      let Bk = Ea(kk, Fk),
        tk = kk.state.selection;
      return Bk ? {
        update(kk) {
          if (kk.docChanged) {
            let Fk = kk.changes.mapPos(kk.startState.doc.line(Bk.line).from),
              Rk = kk.state.doc.lineAt(Fk);
            Bk = {
              line: Rk.number,
              col: Bk.col,
              off: Math.min(Bk.off, Rk.length)
            }, tk = tk.map(kk.changes)
          }
        },
        get(Fk, ak, Xk) {
          let bk = Ea(kk, Fk);
          if (!bk) return tk;
          let wk = function(kk, Fk, Bk) {
            let tk = Math.min(Fk.line, Bk.line),
              ak = Math.max(Fk.line, Bk.line),
              Xk = [];
            if (Fk.off > Oa || Bk.off > Oa || Fk.col < 0 || Bk.col < 0) {
              let bk = Math.min(Fk.off, Bk.off),
                wk = Math.max(Fk.off, Bk.off);
              for (let Fk = tk; Fk <= ak; Fk++) {
                let Bk = kk.doc.line(Fk);
                Bk.length <= wk && Xk.push(Rk.f.range(Bk.from + bk, Bk.to + wk))
              }
            } else {
              let bk = Math.min(Fk.col, Bk.col),
                wk = Math.max(Fk.col, Bk.col);
              for (let Fk = tk; Fk <= ak; Fk++) {
                let Bk = kk.doc.line(Fk),
                  tk = (0, Rk.P)(Bk.text, bk, kk.tabSize, !0);
                if (tk < 0) Xk.push(Rk.f.cursor(Bk.to));
                else {
                  let Fk = (0, Rk.P)(Bk.text, wk, kk.tabSize);
                  Xk.push(Rk.f.range(Bk.from + tk, Bk.from + Fk))
                }
              }
            }
            return Xk
          }(kk.state, Bk, bk);
          return wk.length ? Xk ? Rk.f.create(wk.concat(tk.hb)) : Rk.f.create(wk) : tk
        }
      } : null
    }

    function Na(kk) {
      let Fk = (null === kk || void 0 === kk ? void 0 : kk.eventFilter) || (kk => kk.altKey && 0 == kk.button);
      return Nt.mouseSelectionStyle.of(((kk, Bk) => Fk(Bk) ? Sa(kk, Bk) : null))
    }
    const Ha = {
        Alt: [18, kk => !!kk.altKey],
        Control: [17, kk => !!kk.ctrlKey],
        Shift: [16, kk => !!kk.shiftKey],
        Meta: [91, kk => !!kk.metaKey]
      },
      ua = {
        style: "cursor: crosshair"
      };

    function Ma() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [Fk, Bk] = Ha[kk.key || "Alt"],
        Rk = nF.fromClass(class {
          constructor(kk) {
            this.view = kk, this.isDown = !1
          }
          set(kk) {
            this.isDown != kk && (this.isDown = kk, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(kk) {
              this.set(kk.keyCode == Fk || Bk(kk))
            },
            keyup(kk) {
              kk.keyCode != Fk && Bk(kk) || this.set(!1)
            },
            mousemove(kk) {
              this.set(Bk(kk))
            }
          }
        });
      return [Rk, Nt.contentAttributes.of((kk => {
        var Fk;
        return (null === (Fk = kk.plugin(Rk)) || void 0 === Fk ? void 0 : Fk.isDown) ? ua : null
      }))]
    }
    const ga = "-10000px";
    class Ua {
      constructor(kk, Fk, Bk, Rk) {
        this.facet = Fk, this.createTooltipView = Bk, this.removeTooltipView = Rk, this.input = kk.state.facet(Fk), this.tooltips = this.input.filter((kk => kk));
        let tk = null;
        this.tooltipViews = this.tooltips.map((kk => tk = Bk(kk, tk)))
      }
      update(kk, Fk) {
        var Bk;
        let Rk = kk.state.facet(this.facet),
          tk = Rk.filter((kk => kk));
        if (Rk === this.input) {
          for (let Fk of this.tooltipViews) Fk.update && Fk.update(kk);
          return !1
        }
        let ak = [],
          Xk = Fk ? [] : null;
        for (let bk = 0; bk < tk.length; bk++) {
          let Bk = tk[bk],
            Rk = -1;
          if (Bk) {
            for (let kk = 0; kk < this.tooltips.length; kk++) {
              let Fk = this.tooltips[kk];
              Fk && Fk.create == Bk.create && (Rk = kk)
            }
            if (Rk < 0) ak[bk] = this.createTooltipView(Bk, bk ? ak[bk - 1] : null), Xk && (Xk[bk] = !!Bk.above);
            else {
              let Bk = ak[bk] = this.tooltipViews[Rk];
              Xk && (Xk[bk] = Fk[Rk]), Bk.update && Bk.update(kk)
            }
          }
        }
        for (let bk of this.tooltipViews) ak.indexOf(bk) < 0 && (this.removeTooltipView(bk), null === (Bk = bk.destroy) || void 0 === Bk || Bk.call(bk));
        return Fk && (Xk.forEach(((kk, Bk) => Fk[Bk] = kk)), Fk.length = Xk.length), this.input = Rk, this.tooltips = tk, this.tooltipViews = ak, !0
      }
    }

    function ca(kk) {
      let Fk = kk.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: Fk.clientHeight,
        right: Fk.clientWidth
      }
    }
    const Ga = Rk.i.define({
        combine: kk => {
          var Fk, Bk, Rk;
          return {
            position: Ok.ios ? "absolute" : (null === (Fk = kk.find((kk => kk.position))) || void 0 === Fk ? void 0 : Fk.position) || "fixed",
            parent: (null === (Bk = kk.find((kk => kk.parent))) || void 0 === Bk ? void 0 : Bk.parent) || null,
            tooltipSpace: (null === (Rk = kk.find((kk => kk.tooltipSpace))) || void 0 === Rk ? void 0 : Rk.tooltipSpace) || ca
          }
        }
      }),
      Ta = new WeakMap,
      ra = nF.fromClass(class {
        constructor(kk) {
          this.view = kk, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let Fk = kk.state.facet(Ga);
          this.position = Fk.position, this.parent = Fk.parent, this.classes = kk.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new Ua(kk, ha, ((kk, Fk) => this.createTooltip(kk, Fk)), (kk => {
            this.resizeObserver && this.resizeObserver.unobserve(kk.dom), kk.dom.remove()
          })), this.above = this.manager.tooltips.map((kk => !!kk.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((kk => {
            Date.now() > this.lastTransaction - 50 && kk.length > 0 && kk[kk.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), kk.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let kk of this.manager.tooltipViews) this.intersectionObserver.observe(kk.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(kk) {
          kk.transactions.length && (this.lastTransaction = Date.now());
          let Fk = this.manager.update(kk, this.above);
          Fk && this.observeIntersection();
          let Bk = Fk || kk.geometryChanged,
            Rk = kk.state.facet(Ga);
          if (Rk.position != this.position && !this.madeAbsolute) {
            this.position = Rk.position;
            for (let kk of this.manager.tooltipViews) kk.dom.style.position = this.position;
            Bk = !0
          }
          if (Rk.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Rk.parent, this.createContainer();
            for (let kk of this.manager.tooltipViews) this.container.appendChild(kk.dom);
            Bk = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          Bk && this.maybeMeasure()
        }
        createTooltip(kk, Fk) {
          let Bk = kk.create(this.view),
            Rk = Fk ? Fk.dom : null;
          if (Bk.dom.classList.add("cm-tooltip"), kk.arrow && !Bk.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let kk = document.createElement("div");
            kk.className = "cm-tooltip-arrow", Bk.dom.appendChild(kk)
          }
          return Bk.dom.style.position = this.position, Bk.dom.style.top = ga, Bk.dom.style.left = "0px", this.container.insertBefore(Bk.dom, Rk), Bk.mount && Bk.mount(this.view), this.resizeObserver && this.resizeObserver.observe(Bk.dom), Bk
        }
        destroy() {
          var kk, Fk, Bk;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Rk of this.manager.tooltipViews) Rk.dom.remove(), null === (kk = Rk.destroy) || void 0 === kk || kk.call(Rk);
          this.parent && this.container.remove(), null === (Fk = this.resizeObserver) || void 0 === Fk || Fk.disconnect(), null === (Bk = this.intersectionObserver) || void 0 === Bk || Bk.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let kk = 1,
            Fk = 1,
            Bk = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: kk
            } = this.manager.tooltipViews[0];
            if (Ok.safari) {
              let Fk = kk.getBoundingClientRect();
              Bk = Math.abs(Fk.top + 1e4) > 1 || Math.abs(Fk.left) > 1
            } else Bk = !!kk.offsetParent && kk.offsetParent != this.container.ownerDocument.body
          }
          if (Bk || "absolute" == this.position)
            if (this.parent) {
              let Bk = this.parent.getBoundingClientRect();
              Bk.width && Bk.height && (kk = Bk.width / this.parent.offsetWidth, Fk = Bk.height / this.parent.offsetHeight)
            } else({
              scaleX: kk,
              scaleY: Fk
            } = this.view.viewState);
          let Rk = this.view.scrollDOM.getBoundingClientRect(),
            tk = wB(this.view);
          return {
            visible: {
              left: Rk.left + tk.left,
              top: Rk.top + tk.top,
              right: Rk.right - tk.right,
              bottom: Rk.bottom - tk.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((kk, Fk) => {
              let Bk = this.manager.tooltipViews[Fk];
              return Bk.getCoords ? Bk.getCoords(kk.pos) : this.view.coordsAtPos(kk.pos)
            })),
            size: this.manager.tooltipViews.map((kk => {
              let {
                dom: Fk
              } = kk;
              return Fk.getBoundingClientRect()
            })),
            space: this.view.state.facet(Ga).tooltipSpace(this.view),
            scaleX: kk,
            scaleY: Fk,
            makeAbsolute: Bk
          }
        }
        writeMeasure(kk) {
          var Fk;
          if (kk.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let kk of this.manager.tooltipViews) kk.dom.style.position = "absolute"
          }
          let {
            visible: Bk,
            space: Rk,
            scaleX: tk,
            scaleY: ak
          } = kk, Xk = [];
          for (let bk = 0; bk < this.manager.tooltips.length; bk++) {
            let wk = this.manager.tooltips[bk],
              dk = this.manager.tooltipViews[bk],
              {
                dom: sk
              } = dk,
              Vk = kk.pos[bk],
              Jk = kk.size[bk];
            if (!Vk || !1 !== wk.clip && (Vk.bottom <= Math.max(Bk.top, Rk.top) || Vk.top >= Math.min(Bk.bottom, Rk.bottom) || Vk.right < Math.max(Bk.left, Rk.left) - .1 || Vk.left > Math.min(Bk.right, Rk.right) + .1)) {
              sk.style.top = ga;
              continue
            }
            let Ak = wk.arrow ? dk.dom.querySelector(".cm-tooltip-arrow") : null,
              ek = Ak ? 7 : 0,
              yk = Jk.right - Jk.left,
              fk = null !== (Fk = Ta.get(dk)) && void 0 !== Fk ? Fk : Jk.bottom - Jk.top,
              mk = dk.offset || Pa,
              Wk = this.view.textDirection == sF.LTR,
              vk = Jk.width > Rk.right - Rk.left ? Wk ? Rk.left : Rk.right - Jk.width : Wk ? Math.max(Rk.left, Math.min(Vk.left - (Ak ? 14 : 0) + mk.x, Rk.right - yk)) : Math.min(Math.max(Rk.left, Vk.left - yk + (Ak ? 14 : 0) - mk.x), Rk.right - yk),
              ik = this.above[bk];
            !wk.strictSide && (ik ? Vk.top - fk - ek - mk.y < Rk.top : Vk.bottom + fk + ek + mk.y > Rk.bottom) && ik == Rk.bottom - Vk.bottom > Vk.top - Rk.top && (ik = this.above[bk] = !ik);
            let Yk = (ik ? Vk.top - Rk.top : Rk.bottom - Vk.bottom) - ek;
            if (Yk < fk && !1 !== dk.resize) {
              if (Yk < this.view.defaultLineHeight) {
                sk.style.top = ga;
                continue
              }
              Ta.set(dk, fk), sk.style.height = (fk = Yk) / ak + "px"
            } else sk.style.height && (sk.style.height = "");
            let Lk = ik ? Vk.top - fk - ek - mk.y : Vk.bottom + ek + mk.y,
              Ok = vk + yk;
            if (!0 !== dk.overlap)
              for (let kk of Xk) kk.left < Ok && kk.right > vk && kk.top < Lk + fk && kk.bottom > Lk && (Lk = ik ? kk.top - fk - 2 - ek : kk.bottom + ek + 2);
            if ("absolute" == this.position ? (sk.style.top = (Lk - kk.parent.top) / ak + "px", Da(sk, (vk - kk.parent.left) / tk)) : (sk.style.top = Lk / ak + "px", Da(sk, vk / tk)), Ak) {
              let kk = Vk.left + (Wk ? mk.x : -mk.x) - (vk + 14 - 7);
              Ak.style.left = kk / tk + "px"
            }!0 !== dk.overlap && Xk.push({
              left: vk,
              top: Lk,
              right: Ok,
              bottom: Lk + fk
            }), sk.classList.toggle("cm-tooltip-above", ik), sk.classList.toggle("cm-tooltip-below", !ik), dk.positioned && dk.positioned(kk.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let kk of this.manager.tooltipViews) kk.dom.style.top = ga
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function Da(kk, Fk) {
      let Bk = parseInt(kk.style.left, 10);
      (isNaN(Bk) || Math.abs(Fk - Bk) > 1) && (kk.style.left = Fk + "px")
    }
    const za = Nt.baseTheme({
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
      Pa = {
        x: 0,
        y: 0
      },
      ha = Rk.i.define({
        enables: [ra, za]
      }),
      qa = Rk.i.define({
        combine: kk => kk.reduce(((kk, Fk) => kk.concat(Fk)), [])
      });
    class Ca {
      static create(kk) {
        return new Ca(kk)
      }
      constructor(kk) {
        this.view = kk, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Ua(kk, qa, ((kk, Fk) => this.createHostedView(kk, Fk)), (kk => kk.dom.remove()))
      }
      createHostedView(kk, Fk) {
        let Bk = kk.create(this.view);
        return Bk.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(Bk.dom, Fk ? Fk.dom.nextSibling : this.dom.firstChild), this.mounted && Bk.mount && Bk.mount(this.view), Bk
      }
      mount(kk) {
        for (let Fk of this.manager.tooltipViews) Fk.mount && Fk.mount(kk);
        this.mounted = !0
      }
      positioned(kk) {
        for (let Fk of this.manager.tooltipViews) Fk.positioned && Fk.positioned(kk)
      }
      update(kk) {
        this.manager.update(kk)
      }
      destroy() {
        var kk;
        for (let Fk of this.manager.tooltipViews) null === (kk = Fk.destroy) || void 0 === kk || kk.call(Fk)
      }
      passProp(kk) {
        let Fk;
        for (let Bk of this.manager.tooltipViews) {
          let Rk = Bk[kk];
          if (void 0 !== Rk)
            if (void 0 === Fk) Fk = Rk;
            else if (Fk !== Rk) return
        }
        return Fk
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
    const Za = ha.compute([qa], (kk => {
      let Fk = kk.facet(qa);
      return 0 === Fk.length ? null : {
        pos: Math.min(...Fk.map((kk => kk.pos))),
        end: Math.max(...Fk.map((kk => {
          var Fk;
          return null !== (Fk = kk.end) && void 0 !== Fk ? Fk : kk.pos
        }))),
        create: Ca.create,
        above: Fk[0].above,
        arrow: Fk.some((kk => kk.arrow))
      }
    }));
    class pa {
      constructor(kk, Fk, Bk, Rk, tk) {
        this.view = kk, this.source = Fk, this.field = Bk, this.setHover = Rk, this.hoverTime = tk, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: kk.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), kk.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), kk.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let kk = Date.now() - this.lastMove.time;
        kk < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - kk) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: kk,
          lastMove: Fk
        } = this, Bk = kk.docView.tile.nearest(Fk.target);
        if (!Bk) return;
        let Rk, tk = 1;
        if (Bk.isWidget()) Rk = Bk.posAtStart;
        else {
          if (Rk = kk.posAtCoords(Fk), null == Rk) return;
          let Bk = kk.coordsAtPos(Rk);
          if (!Bk || Fk.y < Bk.top || Fk.y > Bk.bottom || Fk.x < Bk.left - kk.defaultCharacterWidth || Fk.x > Bk.right + kk.defaultCharacterWidth) return;
          let ak = kk.bidiSpans(kk.state.doc.lineAt(Rk)).find((kk => kk.from <= Rk && kk.to >= Rk)),
            Xk = ak && ak.dir == sF.RTL ? -1 : 1;
          tk = Fk.x < Bk.left ? -Xk : Xk
        }
        let ak = this.source(kk, Rk, tk);
        if (null === ak || void 0 === ak ? void 0 : ak.then) {
          let Fk = this.pending = {
            pos: Rk
          };
          ak.then((Bk => {
            this.pending == Fk && (this.pending = null, !Bk || Array.isArray(Bk) && !Bk.length || kk.dispatch({
              effects: this.setHover.of(Array.isArray(Bk) ? Bk : [Bk])
            }))
          }), (Fk => KF(kk.state, Fk, "hover tooltip")))
        } else !ak || Array.isArray(ak) && !ak.length || kk.dispatch({
          effects: this.setHover.of(Array.isArray(ak) ? ak : [ak])
        })
      }
      get tooltip() {
        let kk = this.view.plugin(ra),
          Fk = kk ? kk.manager.tooltips.findIndex((kk => kk.create == Ca.create)) : -1;
        return Fk > -1 ? kk.manager.tooltipViews[Fk] : null
      }
      mousemove(kk) {
        var Fk, Bk;
        this.lastMove = {
          x: kk.clientX,
          y: kk.clientY,
          target: kk.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Rk,
          tooltip: tk
        } = this;
        if (Rk.length && tk && ! function(kk, Fk) {
            let Bk, {
              left: Rk,
              right: tk,
              top: ak,
              bottom: Xk
            } = kk.getBoundingClientRect();
            if (Bk = kk.querySelector(".cm-tooltip-arrow")) {
              let kk = Bk.getBoundingClientRect();
              ak = Math.min(kk.top, ak), Xk = Math.max(kk.bottom, Xk)
            }
            return Fk.clientX >= Rk - Ka && Fk.clientX <= tk + Ka && Fk.clientY >= ak - Ka && Fk.clientY <= Xk + Ka
          }(tk.dom, kk) || this.pending) {
          let {
            pos: tk
          } = Rk[0] || this.pending, ak = null !== (Bk = null === (Fk = Rk[0]) || void 0 === Fk ? void 0 : Fk.end) && void 0 !== Bk ? Bk : tk;
          (tk == ak ? this.view.posAtCoords(this.lastMove) == tk : function(kk, Fk, Bk, Rk, tk) {
            let ak = kk.scrollDOM.getBoundingClientRect(),
              Xk = kk.documentTop + kk.documentPadding.top + kk.contentHeight;
            if (ak.left > Rk || ak.right < Rk || ak.top > tk || Math.min(ak.bottom, Xk) < tk) return !1;
            let bk = kk.posAtCoords({
              x: Rk,
              y: tk
            }, !1);
            return bk >= Fk && bk <= Bk
          }(this.view, tk, ak, kk.clientX, kk.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(kk) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: Fk
        } = this;
        if (Fk.length) {
          let {
            tooltip: Fk
          } = this;
          Fk && Fk.dom.contains(kk.relatedTarget) ? this.watchTooltipLeave(Fk.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(kk) {
        let Fk = Bk => {
          kk.removeEventListener("mouseleave", Fk), this.active.length && !this.view.dom.contains(Bk.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        kk.addEventListener("mouseleave", Fk)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const Ka = 4;

    function xa(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Bk = Rk.z.define(),
        tk = Rk.A.define({
          create: () => [],
          update(kk, tk) {
            if (kk.length && (Fk.hideOnChange && (tk.docChanged || tk.selection) ? kk = [] : Fk.hideOn && (kk = kk.filter((kk => !Fk.hideOn(tk, kk)))), tk.docChanged)) {
              let Fk = [];
              for (let Bk of kk) {
                let kk = tk.changes.mapPos(Bk.pos, -1, Rk.l.TrackDel);
                if (null != kk) {
                  let Rk = Object.assign(Object.create(null), Bk);
                  Rk.pos = kk, null != Rk.end && (Rk.end = tk.changes.mapPos(Rk.end)), Fk.push(Rk)
                }
              }
              kk = Fk
            }
            for (let Fk of tk.effects) Fk.is(Bk) && (kk = Fk.value), Fk.is(la) && (kk = []);
            return kk
          },
          provide: kk => qa.from(kk)
        });
      return {
        active: tk,
        extension: [tk, nF.define((Rk => new pa(Rk, kk, tk, Bk, Fk.hoverTime || 300))), Za]
      }
    }

    function ja(kk, Fk) {
      let Bk = kk.plugin(ra);
      if (!Bk) return null;
      let Rk = Bk.manager.tooltips.indexOf(Fk);
      return Rk < 0 ? null : Bk.manager.tooltipViews[Rk]
    }
    const la = Rk.z.define();
    const na = Rk.i.define({
      combine(kk) {
        let Fk, Bk;
        for (let Rk of kk) Fk = Fk || Rk.topContainer, Bk = Bk || Rk.bottomContainer;
        return {
          topContainer: Fk,
          bottomContainer: Bk
        }
      }
    });

    function Ia(kk, Fk) {
      let Bk = kk.plugin(Qa),
        Rk = Bk ? Bk.specs.indexOf(Fk) : -1;
      return Rk > -1 ? Bk.panels[Rk] : null
    }
    const Qa = nF.fromClass(class {
      constructor(kk) {
        this.input = kk.state.facet(BX), this.specs = this.input.filter((kk => kk)), this.panels = this.specs.map((Fk => Fk(kk)));
        let Fk = kk.state.facet(na);
        this.top = new kX(kk, !0, Fk.topContainer), this.bottom = new kX(kk, !1, Fk.bottomContainer), this.top.sync(this.panels.filter((kk => kk.top))), this.bottom.sync(this.panels.filter((kk => !kk.top)));
        for (let Bk of this.panels) Bk.dom.classList.add("cm-panel"), Bk.mount && Bk.mount()
      }
      update(kk) {
        let Fk = kk.state.facet(na);
        this.top.container != Fk.topContainer && (this.top.sync([]), this.top = new kX(kk.view, !0, Fk.topContainer)), this.bottom.container != Fk.bottomContainer && (this.bottom.sync([]), this.bottom = new kX(kk.view, !1, Fk.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let Bk = kk.state.facet(BX);
        if (Bk != this.input) {
          let Fk = Bk.filter((kk => kk)),
            Rk = [],
            tk = [],
            ak = [],
            Xk = [];
          for (let Bk of Fk) {
            let Fk, bk = this.specs.indexOf(Bk);
            bk < 0 ? (Fk = Bk(kk.view), Xk.push(Fk)) : (Fk = this.panels[bk], Fk.update && Fk.update(kk)), Rk.push(Fk), (Fk.top ? tk : ak).push(Fk)
          }
          this.specs = Fk, this.panels = Rk, this.top.sync(tk), this.bottom.sync(ak);
          for (let kk of Xk) kk.dom.classList.add("cm-panel"), kk.mount && kk.mount()
        } else
          for (let Rk of this.panels) Rk.update && Rk.update(kk)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: kk => Nt.scrollMargins.of((Fk => {
        let Bk = Fk.plugin(kk);
        return Bk && {
          top: Bk.top.scrollMargin(),
          bottom: Bk.bottom.scrollMargin()
        }
      }))
    });
    class kX {
      constructor(kk, Fk, Bk) {
        this.view = kk, this.top = Fk, this.container = Bk, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(kk) {
        for (let Fk of this.panels) Fk.destroy && kk.indexOf(Fk) < 0 && Fk.destroy();
        this.panels = kk, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let kk = this.container || this.view.dom;
          kk.insertBefore(this.dom, this.top ? kk.firstChild : null)
        }
        let kk = this.dom.firstChild;
        for (let Fk of this.panels)
          if (Fk.dom.parentNode == this.dom) {
            for (; kk != Fk.dom;) kk = FX(kk);
            kk = kk.nextSibling
          } else this.dom.insertBefore(Fk.dom, kk);
        for (; kk;) kk = FX(kk)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let kk of this.classes.split(" ")) kk && this.container.classList.remove(kk);
          for (let kk of (this.classes = this.view.themeClasses).split(" ")) kk && this.container.classList.add(kk)
        }
      }
    }

    function FX(kk) {
      let Fk = kk.nextSibling;
      return kk.remove(), Fk
    }
    const BX = Rk.i.define({
      enables: Qa
    });

    function RX(kk, Fk) {
      let Bk, tk = new Promise((kk => Bk = kk)),
        ak = kk => function(kk, Fk, Bk) {
          let Rk = Fk.content ? Fk.content(kk, (() => Xk(null))) : null;
          if (!Rk) {
            if (Rk = (0, Vk.b)("form"), Fk.input) {
              let kk = (0, Vk.b)("input", Fk.input);
              /^(text|password|number|email|tel|url)$/.test(kk.type) && kk.classList.add("cm-textfield"), kk.name || (kk.name = "input"), Rk.appendChild((0, Vk.b)("label", (Fk.label || "") + ": ", kk))
            } else Rk.appendChild(document.createTextNode(Fk.label || ""));
            Rk.appendChild(document.createTextNode(" ")), Rk.appendChild((0, Vk.b)("button", {
              class: "cm-button",
              type: "submit"
            }, Fk.submitLabel || "OK"))
          }
          let tk = "FORM" == Rk.nodeName ? [Rk] : Rk.querySelectorAll("form");
          for (let bk = 0; bk < tk.length; bk++) {
            let kk = tk[bk];
            kk.addEventListener("keydown", (Fk => {
              27 == Fk.keyCode ? (Fk.preventDefault(), Xk(null)) : 13 == Fk.keyCode && (Fk.preventDefault(), Xk(kk))
            })), kk.addEventListener("submit", (Fk => {
              Fk.preventDefault(), Xk(kk)
            }))
          }
          let ak = (0, Vk.b)("div", Rk, (0, Vk.b)("button", {
            onclick: () => Xk(null),
            "aria-label": kk.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          Fk.class && (ak.className = Fk.class);

          function Xk(Fk) {
            ak.contains(ak.ownerDocument.activeElement) && kk.focus(), Bk(Fk)
          }
          return ak.classList.add("cm-dialog"), {
            dom: ak,
            top: Fk.top,
            mount: () => {
              if (Fk.focus) {
                let kk;
                kk = "string" == typeof Fk.focus ? Rk.querySelector(Fk.focus) : Rk.querySelector("input") || Rk.querySelector("button"), kk && "select" in kk ? kk.select() : kk && "focus" in kk && kk.focus()
              }
            }
          }
        }(kk, Fk, Bk);
      kk.state.field(tX, !1) ? kk.dispatch({
        effects: aX.of(ak)
      }) : kk.dispatch({
        effects: Rk.z.appendConfig.of(tX.init((() => [ak])))
      });
      let Xk = XX.of(ak);
      return {
        close: Xk,
        result: tk.then((Fk => ((kk.win.queueMicrotask || (Fk => kk.win.setTimeout(Fk, 10)))((() => {
          kk.state.field(tX).indexOf(ak) > -1 && kk.dispatch({
            effects: Xk
          })
        })), Fk)))
      }
    }
    const tX = Rk.A.define({
        create: () => [],
        update(kk, Fk) {
          for (let Bk of Fk.effects) Bk.is(aX) ? kk = [Bk.value].concat(kk) : Bk.is(XX) && (kk = kk.filter((kk => kk != Bk.value)));
          return kk
        },
        provide: kk => BX.computeN([kk], (Fk => Fk.field(kk)))
      }),
      aX = Rk.z.define(),
      XX = Rk.z.define();
    class bX extends Rk.v {
      compare(kk) {
        return this == kk || this.constructor == kk.constructor && this.eq(kk)
      }
      eq(kk) {
        return !1
      }
      destroy(kk) {}
    }
    bX.prototype.elementClass = "", bX.prototype.toDOM = void 0, bX.prototype.mapMode = Rk.l.TrackBefore, bX.prototype.startSide = bX.prototype.endSide = -1, bX.prototype.point = !0;
    const wX = Rk.i.define(),
      dX = Rk.i.define(),
      sX = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Rk.u.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      VX = Rk.i.define();

    function JX(kk) {
      return [eX(), VX.of({
        ...sX,
        ...kk
      })]
    }
    const AX = Rk.i.define({
      combine: kk => kk.some((kk => kk))
    });

    function eX(kk) {
      let Fk = [yX];
      return kk && !1 === kk.fixed && Fk.push(AX.of(!0)), Fk
    }
    const yX = nF.fromClass(class {
      constructor(kk) {
        this.view = kk, this.domAfter = null, this.prevViewport = kk.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = kk.state.facet(VX).map((Fk => new vX(kk, Fk))), this.fixed = !kk.state.facet(AX);
        for (let Fk of this.gutters) "after" == Fk.config.side ? this.getDOMAfter().appendChild(Fk.dom) : this.dom.appendChild(Fk.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), kk.scrollDOM.insertBefore(this.dom, kk.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(kk) {
        if (this.updateGutters(kk)) {
          let Fk = this.prevViewport,
            Bk = kk.view.viewport,
            Rk = Math.min(Fk.to, Bk.to) - Math.max(Fk.from, Bk.from);
          this.syncGutters(Rk < .8 * (Bk.to - Bk.from))
        }
        if (kk.geometryChanged) {
          let kk = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = kk, this.domAfter && (this.domAfter.style.minHeight = kk)
        }
        this.view.state.facet(AX) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = kk.view.viewport
      }
      syncGutters(kk) {
        let Fk = this.dom.nextSibling;
        kk && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let Bk = Rk.u.iter(this.view.state.facet(wX), this.view.viewport.from),
          tk = [],
          ak = this.gutters.map((kk => new WX(kk, this.view.viewport, -this.view.documentPadding.top)));
        for (let Rk of this.view.viewportLineBlocks)
          if (tk.length && (tk = []), Array.isArray(Rk.type)) {
            let kk = !0;
            for (let Fk of Rk.type)
              if (Fk.type == gk.Text && kk) {
                mX(Bk, tk, Fk.from);
                for (let kk of ak) kk.line(this.view, Fk, tk);
                kk = !1
              } else if (Fk.widget)
              for (let kk of ak) kk.widget(this.view, Fk)
          } else if (Rk.type == gk.Text) {
          mX(Bk, tk, Rk.from);
          for (let kk of ak) kk.line(this.view, Rk, tk)
        } else if (Rk.widget)
          for (let kk of ak) kk.widget(this.view, Rk);
        for (let Rk of ak) Rk.finish();
        kk && (this.view.scrollDOM.insertBefore(this.dom, Fk), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(kk) {
        let Fk = kk.startState.facet(VX),
          Bk = kk.state.facet(VX),
          tk = kk.docChanged || kk.heightChanged || kk.viewportChanged || !Rk.u.eq(kk.startState.facet(wX), kk.state.facet(wX), kk.view.viewport.from, kk.view.viewport.to);
        if (Fk == Bk)
          for (let Rk of this.gutters) Rk.update(kk) && (tk = !0);
        else {
          tk = !0;
          let Rk = [];
          for (let tk of Bk) {
            let Bk = Fk.indexOf(tk);
            Bk < 0 ? Rk.push(new vX(this.view, tk)) : (this.gutters[Bk].update(kk), Rk.push(this.gutters[Bk]))
          }
          for (let kk of this.gutters) kk.dom.remove(), Rk.indexOf(kk) < 0 && kk.destroy();
          for (let kk of Rk) "after" == kk.config.side ? this.getDOMAfter().appendChild(kk.dom) : this.dom.appendChild(kk.dom);
          this.gutters = Rk
        }
        return tk
      }
      destroy() {
        for (let kk of this.gutters) kk.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: kk => Nt.scrollMargins.of((Fk => {
        let Bk = Fk.plugin(kk);
        if (!Bk || 0 == Bk.gutters.length || !Bk.fixed) return null;
        let Rk = Bk.dom.offsetWidth * Fk.scaleX,
          tk = Bk.domAfter ? Bk.domAfter.offsetWidth * Fk.scaleX : 0;
        return Fk.textDirection == sF.LTR ? {
          left: Rk,
          right: tk
        } : {
          right: Rk,
          left: tk
        }
      }))
    });

    function fX(kk) {
      return Array.isArray(kk) ? kk : [kk]
    }

    function mX(kk, Fk, Bk) {
      for (; kk.value && kk.from <= Bk;) kk.from == Bk && Fk.push(kk.value), kk.next()
    }
    class WX {
      constructor(kk, Fk, Bk) {
        this.gutter = kk, this.height = Bk, this.i = 0, this.cursor = Rk.u.iter(kk.markers, Fk.from)
      }
      addElement(kk, Fk, Bk) {
        let {
          gutter: Rk
        } = this, tk = (Fk.top - this.height) / kk.scaleY, ak = Fk.height / kk.scaleY;
        if (this.i == Rk.elements.length) {
          let Fk = new iX(kk, ak, tk, Bk);
          Rk.elements.push(Fk), Rk.dom.appendChild(Fk.dom)
        } else Rk.elements[this.i].update(kk, ak, tk, Bk);
        this.height = Fk.bottom, this.i++
      }
      line(kk, Fk, Bk) {
        let Rk = [];
        mX(this.cursor, Rk, Fk.from), Bk.length && (Rk = Rk.concat(Bk));
        let tk = this.gutter.config.lineMarker(kk, Fk, Rk);
        tk && Rk.unshift(tk);
        let ak = this.gutter;
        (0 != Rk.length || ak.config.renderEmptyElements) && this.addElement(kk, Fk, Rk)
      }
      widget(kk, Fk) {
        let Bk = this.gutter.config.widgetMarker(kk, Fk.widget, Fk),
          Rk = Bk ? [Bk] : null;
        for (let tk of kk.state.facet(dX)) {
          let Bk = tk(kk, Fk.widget, Fk);
          Bk && (Rk || (Rk = [])).push(Bk)
        }
        Rk && this.addElement(kk, Fk, Rk)
      }
      finish() {
        let kk = this.gutter;
        for (; kk.elements.length > this.i;) {
          let Fk = kk.elements.pop();
          kk.dom.removeChild(Fk.dom), Fk.destroy()
        }
      }
    }
    class vX {
      constructor(kk, Fk) {
        this.view = kk, this.config = Fk, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let Bk in Fk.domEventHandlers) this.dom.addEventListener(Bk, (Rk => {
          let tk, ak = Rk.target;
          if (ak != this.dom && this.dom.contains(ak)) {
            for (; ak.parentNode != this.dom;) ak = ak.parentNode;
            let kk = ak.getBoundingClientRect();
            tk = (kk.top + kk.bottom) / 2
          } else tk = Rk.clientY;
          let Xk = kk.lineBlockAtHeight(tk - kk.documentTop);
          Fk.domEventHandlers[Bk](kk, Xk, Rk) && Rk.preventDefault()
        }));
        this.markers = fX(Fk.markers(kk)), Fk.initialSpacer && (this.spacer = new iX(kk, 0, 0, [Fk.initialSpacer(kk)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(kk) {
        let Fk = this.markers;
        if (this.markers = fX(this.config.markers(kk.view)), this.spacer && this.config.updateSpacer) {
          let Fk = this.config.updateSpacer(this.spacer.markers[0], kk);
          Fk != this.spacer.markers[0] && this.spacer.update(kk.view, 0, 0, [Fk])
        }
        let Bk = kk.view.viewport;
        return !Rk.u.eq(this.markers, Fk, Bk.from, Bk.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(kk)
      }
      destroy() {
        for (let kk of this.elements) kk.destroy()
      }
    }
    class iX {
      constructor(kk, Fk, Bk, Rk) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(kk, Fk, Bk, Rk)
      }
      update(kk, Fk, Bk, Rk) {
        this.height != Fk && (this.height = Fk, this.dom.style.height = Fk + "px"), this.above != Bk && (this.dom.style.marginTop = (this.above = Bk) ? Bk + "px" : ""),
          function(kk, Fk) {
            if (kk.length != Fk.length) return !1;
            for (let Bk = 0; Bk < kk.length; Bk++)
              if (!kk[Bk].compare(Fk[Bk])) return !1;
            return !0
          }(this.markers, Rk) || this.setMarkers(kk, Rk)
      }
      setMarkers(kk, Fk) {
        let Bk = "cm-gutterElement",
          Rk = this.dom.firstChild;
        for (let tk = 0, ak = 0;;) {
          let Xk = ak,
            bk = tk < Fk.length ? Fk[tk++] : null,
            wk = !1;
          if (bk) {
            let kk = bk.elementClass;
            kk && (Bk += " " + kk);
            for (let Fk = ak; Fk < this.markers.length; Fk++)
              if (this.markers[Fk].compare(bk)) {
                Xk = Fk, wk = !0;
                break
              }
          } else Xk = this.markers.length;
          for (; ak < Xk;) {
            let kk = this.markers[ak++];
            if (kk.toDOM) {
              kk.destroy(Rk);
              let Fk = Rk.nextSibling;
              Rk.remove(), Rk = Fk
            }
          }
          if (!bk) break;
          bk.toDOM && (wk ? Rk = Rk.nextSibling : this.dom.insertBefore(bk.toDOM(kk), Rk)), wk && ak++
        }
        this.dom.className = Bk, this.markers = Fk
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const YX = Rk.i.define(),
      oX = Rk.i.define(),
      LX = Rk.i.define({
        combine: kk => (0, Rk.K)(kk, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(kk, Fk) {
            let Bk = Object.assign({}, kk);
            for (let Rk in Fk) {
              let kk = Bk[Rk],
                tk = Fk[Rk];
              Bk[Rk] = kk ? (Fk, Bk, Rk) => kk(Fk, Bk, Rk) || tk(Fk, Bk, Rk) : tk
            }
            return Bk
          }
        })
      });
    class OX extends bX {
      constructor(kk) {
        super(), this.number = kk
      }
      eq(kk) {
        return this.number == kk.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function EX(kk, Fk) {
      return kk.state.facet(LX).formatNumber(Fk, kk.state)
    }
    const SX = VX.compute([LX], (kk => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: kk => kk.state.facet(YX),
      lineMarker: (kk, Fk, Bk) => Bk.some((kk => kk.toDOM)) ? null : new OX(EX(kk, kk.state.doc.lineAt(Fk.from).number)),
      widgetMarker: (kk, Fk, Bk) => {
        for (let Rk of kk.state.facet(oX)) {
          let tk = Rk(kk, Fk, Bk);
          if (tk) return tk
        }
        return null
      },
      lineMarkerChange: kk => kk.startState.facet(LX) != kk.state.facet(LX),
      initialSpacer: kk => new OX(EX(kk, HX(kk.state.doc.lines))),
      updateSpacer(kk, Fk) {
        let Bk = EX(Fk.view, HX(Fk.view.state.doc.lines));
        return Bk == kk.number ? kk : new OX(Bk)
      },
      domEventHandlers: kk.facet(LX).domEventHandlers,
      side: "before"
    })));

    function NX() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [LX.of(kk), eX(), SX]
    }

    function HX(kk) {
      let Fk = 9;
      for (; Fk < kk;) Fk = 10 * Fk + 9;
      return Fk
    }
    const uX = new class extends bX {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      MX = wX.compute(["selection"], (kk => {
        let Fk = [],
          Bk = -1;
        for (let Rk of kk.selection.hb) {
          let tk = kk.doc.lineAt(Rk.head).from;
          tk > Bk && (Bk = tk, Fk.push(uX.range(tk)))
        }
        return Rk.u.of(Fk)
      }));

    function gX() {
      return MX
    }
  },
  40762: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk,
      c: () => Ak,
      g: () => Xk,
      i: () => sk,
      l: () => dk,
      o: () => ck,
      p: () => Tk,
      t: () => Gk,
      w: () => ek
    });
    const Rk = 1024;
    let tk = 0;
    class ak {
      constructor(kk, Fk) {
        this.from = kk, this.to = Fk
      }
    }
    class Xk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = tk++, this.perNode = !!kk.perNode, this.deserialize = kk.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = kk.combine || null
      }
      add(kk) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof kk && (kk = dk.match(kk)), Fk => {
          let Bk = kk(Fk);
          return void 0 === Bk ? null : [this, Bk]
        }
      }
    }
    Xk.closedBy = new Xk({
      deserialize: kk => kk.split(" ")
    }), Xk.openedBy = new Xk({
      deserialize: kk => kk.split(" ")
    }), Xk.group = new Xk({
      deserialize: kk => kk.split(" ")
    }), Xk.isolate = new Xk({
      deserialize: kk => {
        if (kk && "rtl" != kk && "ltr" != kk && "auto" != kk) throw new RangeError("Invalid value for isolate: " + kk);
        return kk || "auto"
      }
    }), Xk.contextHash = new Xk({
      perNode: !0
    }), Xk.lookAhead = new Xk({
      perNode: !0
    }), Xk.mounted = new Xk({
      perNode: !0
    });
    class bk {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = kk, this.overlay = Fk, this.parser = Bk, this.bracketed = Rk
      }
      static get(kk) {
        return kk && kk.props && kk.props[Xk.mounted.id]
      }
    }
    const wk = Object.create(null);
    class dk {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = kk, this.props = Fk, this.id = Bk, this.flags = Rk
      }
      static define(kk) {
        let Fk = kk.props && kk.props.length ? Object.create(null) : wk,
          Bk = (kk.top ? 1 : 0) | (kk.skipped ? 2 : 0) | (kk.error ? 4 : 0) | (null == kk.name ? 8 : 0),
          Rk = new dk(kk.name || "", Fk, kk.id, Bk);
        if (kk.props)
          for (let tk of kk.props)
            if (Array.isArray(tk) || (tk = tk(Rk)), tk) {
              if (tk[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              Fk[tk[0].id] = tk[1]
            } return Rk
      }
      prop(kk) {
        return this.props[kk.id]
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
      is(kk) {
        if ("string" == typeof kk) {
          if (this.name == kk) return !0;
          let Fk = this.prop(Xk.group);
          return !!Fk && Fk.indexOf(kk) > -1
        }
        return this.id == kk
      }
      static match(kk) {
        let Fk = Object.create(null);
        for (let Bk in kk)
          for (let Rk of Bk.split(" ")) Fk[Rk] = kk[Bk];
        return kk => {
          for (let Bk = kk.prop(Xk.group), Rk = -1; Rk < (Bk ? Bk.length : 0); Rk++) {
            let tk = Fk[Rk < 0 ? kk.name : Bk[Rk]];
            if (tk) return tk
          }
        }
      }
    }
    dk.none = new dk("", Object.create(null), 0, 8);
    class sk {
      constructor(kk) {
        this.types = kk;
        for (let Fk = 0; Fk < kk.length; Fk++)
          if (kk[Fk].id != Fk) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let kk = [];
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        for (let tk of this.types) {
          let Fk = null;
          for (let kk of Bk) {
            let Bk = kk(tk);
            if (Bk) {
              Fk || (Fk = Object.assign({}, tk.props));
              let kk = Bk[1],
                Rk = Bk[0];
              Rk.combine && Rk.id in Fk && (kk = Rk.combine(Fk[Rk.id], kk)), Fk[Rk.id] = kk
            }
          }
          kk.push(Fk ? new dk(tk.name, Fk, tk.id, tk.flags) : tk)
        }
        return new sk(kk)
      }
    }
    const Vk = new WeakMap,
      Jk = new WeakMap;
    var Ak;
    ! function(kk) {
      kk[kk.ExcludeBuffers = 1] = "ExcludeBuffers", kk[kk.IncludeAnonymous = 2] = "IncludeAnonymous", kk[kk.IgnoreMounts = 4] = "IgnoreMounts", kk[kk.IgnoreOverlays = 8] = "IgnoreOverlays", kk[kk.EnterBracketed = 16] = "EnterBracketed"
    }(Ak || (Ak = {}));
    class ek {
      constructor(kk, Fk, Bk, Rk, tk) {
        if (this.type = kk, this.children = Fk, this.positions = Bk, this.length = Rk, this.props = null, tk && tk.length) {
          this.props = Object.create(null);
          for (let [kk, Fk] of tk) this.props["number" == typeof kk ? kk : kk.id] = Fk
        }
      }
      toString() {
        let kk = bk.get(this);
        if (kk && !kk.overlay) return kk.tree.toString();
        let Fk = "";
        for (let Bk of this.children) {
          let kk = Bk.toString();
          kk && (Fk && (Fk += ","), Fk += kk)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (Fk.length ? "(" + Fk + ")" : "") : Fk
      }
      cursor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Hk(this.topNode, kk)
      }
      cursorAt(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = Vk.get(this) || this.topNode,
          Rk = new Hk(Bk);
        return Rk.moveTo(kk, Fk), Vk.set(this, Rk._tree), Rk
      }
      get topNode() {
        return new ik(this, 0, 0, null)
      }
      resolve(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = Wk(Vk.get(this) || this.topNode, kk, Fk, !1);
        return Vk.set(this, Bk), Bk
      }
      resolveInner(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = Wk(Jk.get(this) || this.topNode, kk, Fk, !0);
        return Jk.set(this, Bk), Bk
      }
      resolveStack(kk) {
        return function(kk, Fk, Bk) {
          let Rk = kk.resolveInner(Fk, Bk),
            tk = null;
          for (let ak = Rk instanceof ik ? Rk : Rk.context.parent; ak; ak = ak.parent)
            if (ak.index < 0) {
              let kk = ak.parent;
              (tk || (tk = [Rk])).push(kk.resolve(Fk, Bk)), ak = kk
            } else {
              let kk = bk.get(ak.tree);
              if (kk && kk.overlay && kk.overlay[0].from <= Fk && kk.overlay[kk.overlay.length - 1].to >= Fk) {
                let Xk = new ik(kk.tree, kk.overlay[0].from + ak.from, -1, ak);
                (tk || (tk = [Rk])).push(Wk(Xk, Fk, Bk, !1))
              }
            } return tk ? Sk(tk) : Rk
        }(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(kk) {
        let {
          enter: Fk,
          leave: Bk,
          from: Rk = 0,
          to: tk = this.length
        } = kk, ak = kk.mode || 0, Xk = (ak & Ak.IncludeAnonymous) > 0;
        for (let bk = this.cursor(ak | Ak.IncludeAnonymous);;) {
          let kk = !1;
          if (bk.from <= tk && bk.to >= Rk && (!Xk && bk.type.isAnonymous || !1 !== Fk(bk))) {
            if (bk.firstChild()) continue;
            kk = !0
          }
          for (; kk && Bk && (Xk || !bk.type.isAnonymous) && Bk(bk), !bk.nextSibling();) {
            if (!bk.parent()) return;
            kk = !0
          }
        }
      }
      prop(kk) {
        return kk.perNode ? this.props ? this.props[kk.id] : void 0 : this.type.prop(kk)
      }
      get propValues() {
        let kk = [];
        if (this.props)
          for (let Fk in this.props) kk.push([+Fk, this.props[Fk]]);
        return kk
      }
      balance() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Uk(dk.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((kk, Fk, Bk) => new ek(this.type, kk, Fk, Bk, this.propValues)), kk.makeTree || ((kk, Fk, Bk) => new ek(dk.none, kk, Fk, Bk)))
      }
      static build(kk) {
        return function(kk) {
          var Fk;
          let {
            buffer: Bk,
            nodeSet: tk,
            maxBufferLength: ak = Rk,
            reused: bk = [],
            minRepeatType: wk = tk.types.length
          } = kk, dk = Array.isArray(Bk) ? new yk(Bk, Bk.length) : Bk, sk = tk.types, Vk = 0, Jk = 0;

          function Ak(kk, Fk, Bk, Rk, Xk, ek) {
            let {
              id: yk,
              start: Ok,
              end: Ek,
              size: Sk
            } = dk, Nk = Jk, Hk = Vk;
            if (Sk < 0) {
              if (dk.next(), -1 == Sk) {
                let Fk = bk[yk];
                return Bk.push(Fk), void Rk.push(Ok - kk)
              }
              if (-3 == Sk) return void(Vk = yk);
              if (-4 == Sk) return void(Jk = yk);
              throw new RangeError(`Unrecognized record size: ${Sk}`)
            }
            let uk, Mk, gk = sk[yk],
              ck = Ok - kk;
            if (Ek - Ok <= ak && (Mk = Yk(dk.pos - Fk, Xk))) {
              let Fk = new Uint16Array(Mk.size - Mk.skip),
                Bk = dk.pos - Mk.size,
                Rk = Fk.length;
              for (; dk.pos > Bk;) Rk = Lk(Mk.start, Fk, Rk);
              uk = new fk(Fk, Ek - Mk.start, tk), ck = Mk.start - kk
            } else {
              let kk = dk.pos - Sk;
              dk.next();
              let Fk = [],
                Bk = [],
                Rk = yk >= wk ? yk : -1,
                tk = 0,
                Xk = Ek;
              for (; dk.pos > kk;) Rk >= 0 && dk.id == Rk && dk.size >= 0 ? (dk.end <= Xk - ak && (vk(Fk, Bk, Ok, tk, dk.end, Xk, Rk, Nk, Hk), tk = Fk.length, Xk = dk.end), dk.next()) : ek > 2500 ? mk(Ok, kk, Fk, Bk) : Ak(Ok, kk, Fk, Bk, Rk, ek + 1);
              if (Rk >= 0 && tk > 0 && tk < Fk.length && vk(Fk, Bk, Ok, tk, Ok, Xk, Rk, Nk, Hk), Fk.reverse(), Bk.reverse(), Rk > -1 && tk > 0) {
                let kk = Wk(gk, Hk);
                uk = Uk(gk, Fk, Bk, 0, Fk.length, 0, Ek - Ok, kk, kk)
              } else uk = ik(gk, Fk, Bk, Ek - Ok, Nk - Ek, Hk)
            }
            Bk.push(uk), Rk.push(ck)
          }

          function mk(kk, Fk, Bk, Rk) {
            let Xk = [],
              bk = 0,
              wk = -1;
            for (; dk.pos > Fk;) {
              let {
                id: kk,
                start: Fk,
                end: Bk,
                size: Rk
              } = dk;
              if (Rk > 4) dk.next();
              else {
                if (wk > -1 && Fk < wk) break;
                wk < 0 && (wk = Bk - ak), Xk.push(kk, Fk, Bk), bk++, dk.next()
              }
            }
            if (bk) {
              let Fk = new Uint16Array(4 * bk),
                ak = Xk[Xk.length - 2];
              for (let kk = Xk.length - 3, Bk = 0; kk >= 0; kk -= 3) Fk[Bk++] = Xk[kk], Fk[Bk++] = Xk[kk + 1] - ak, Fk[Bk++] = Xk[kk + 2] - ak, Fk[Bk++] = Bk;
              Bk.push(new fk(Fk, Xk[2] - ak, tk)), Rk.push(ak - kk)
            }
          }

          function Wk(kk, Fk) {
            return (Bk, Rk, tk) => {
              let ak, bk, wk = 0,
                dk = Bk.length - 1;
              if (dk >= 0 && (ak = Bk[dk]) instanceof ek) {
                if (!dk && ak.type == kk && ak.length == tk) return ak;
                (bk = ak.prop(Xk.lookAhead)) && (wk = Rk[dk] + ak.length + bk)
              }
              return ik(kk, Bk, Rk, tk, wk, Fk)
            }
          }

          function vk(kk, Fk, Bk, Rk, ak, Xk, bk, wk, dk) {
            let sk = [],
              Vk = [];
            for (; kk.length > Rk;) sk.push(kk.pop()), Vk.push(Fk.pop() + Bk - ak);
            kk.push(ik(tk.types[bk], sk, Vk, Xk - ak, wk - Xk, dk)), Fk.push(ak - Bk)
          }

          function ik(kk, Fk, Bk, Rk, tk, ak, bk) {
            if (ak) {
              let kk = [Xk.contextHash, ak];
              bk = bk ? [kk].concat(bk) : [kk]
            }
            if (tk > 25) {
              let kk = [Xk.lookAhead, tk];
              bk = bk ? [kk].concat(bk) : [kk]
            }
            return new ek(kk, Fk, Bk, Rk, bk)
          }

          function Yk(kk, Fk) {
            let Bk = dk.fork(),
              Rk = 0,
              tk = 0,
              Xk = 0,
              bk = Bk.end - ak,
              sk = {
                size: 0,
                start: 0,
                skip: 0
              };
            kk: for (let ak = Bk.pos - kk; Bk.pos > ak;) {
              let kk = Bk.size;
              if (Bk.id == Fk && kk >= 0) {
                sk.size = Rk, sk.start = tk, sk.skip = Xk, Xk += 4, Rk += 4, Bk.next();
                continue
              }
              let dk = Bk.pos - kk;
              if (kk < 0 || dk < ak || Bk.start < bk) break;
              let Vk = Bk.id >= wk ? 4 : 0,
                Jk = Bk.start;
              for (Bk.next(); Bk.pos > dk;) {
                if (Bk.size < 0) {
                  if (-3 != Bk.size && -4 != Bk.size) break kk;
                  Vk += 4
                } else Bk.id >= wk && (Vk += 4);
                Bk.next()
              }
              tk = Jk, Rk += kk, Xk += Vk
            }
            return (Fk < 0 || Rk == kk) && (sk.size = Rk, sk.start = tk, sk.skip = Xk), sk.size > 4 ? sk : void 0
          }

          function Lk(kk, Fk, Bk) {
            let {
              id: Rk,
              start: tk,
              end: ak,
              size: Xk
            } = dk;
            if (dk.next(), Xk >= 0 && Rk < wk) {
              let bk = Bk;
              if (Xk > 4) {
                let Rk = dk.pos - (Xk - 4);
                for (; dk.pos > Rk;) Bk = Lk(kk, Fk, Bk)
              }
              Fk[--Bk] = bk, Fk[--Bk] = ak - kk, Fk[--Bk] = tk - kk, Fk[--Bk] = Rk
            } else - 3 == Xk ? Vk = Rk : -4 == Xk && (Jk = Rk);
            return Bk
          }
          let Ok = [],
            Ek = [];
          for (; dk.pos > 0;) Ak(kk.start || 0, kk.bufferStart || 0, Ok, Ek, -1, 0);
          let Sk = null !== (Fk = kk.length) && void 0 !== Fk ? Fk : Ok.length ? Ek[0] + Ok[0].length : 0;
          return new ek(sk[kk.topID], Ok.reverse(), Ek.reverse(), Sk)
        }(kk)
      }
    }
    ek.empty = new ek(dk.none, [], [], 0);
    class yk {
      constructor(kk, Fk) {
        this.buffer = kk, this.index = Fk
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
        return new yk(this.buffer, this.index)
      }
    }
    class fk {
      constructor(kk, Fk, Bk) {
        this.buffer = kk, this.length = Fk, this.set = Bk
      }
      get type() {
        return dk.none
      }
      toString() {
        let kk = [];
        for (let Fk = 0; Fk < this.buffer.length;) kk.push(this.childString(Fk)), Fk = this.buffer[Fk + 3];
        return kk.join(",")
      }
      childString(kk) {
        let Fk = this.buffer[kk],
          Bk = this.buffer[kk + 3],
          Rk = this.set.types[Fk],
          tk = Rk.name;
        if (/\W/.test(tk) && !Rk.isError && (tk = JSON.stringify(tk)), Bk == (kk += 4)) return tk;
        let ak = [];
        for (; kk < Bk;) ak.push(this.childString(kk)), kk = this.buffer[kk + 3];
        return tk + "(" + ak.join(",") + ")"
      }
      findChild(kk, Fk, Bk, Rk, tk) {
        let {
          buffer: ak
        } = this, Xk = -1;
        for (let bk = kk; bk != Fk && !(mk(tk, Rk, ak[bk + 1], ak[bk + 2]) && (Xk = bk, Bk > 0)); bk = ak[bk + 3]);
        return Xk
      }
      slice(kk, Fk, Bk) {
        let Rk = this.buffer,
          tk = new Uint16Array(Fk - kk),
          ak = 0;
        for (let Xk = kk, bk = 0; Xk < Fk;) {
          tk[bk++] = Rk[Xk++], tk[bk++] = Rk[Xk++] - Bk;
          let Fk = tk[bk++] = Rk[Xk++] - Bk;
          tk[bk++] = Rk[Xk++] - kk, ak = Math.max(ak, Fk)
        }
        return new fk(tk, ak, this.set)
      }
    }

    function mk(kk, Fk, Bk, Rk) {
      switch (kk) {
        case -2:
          return Bk < Fk;
        case -1:
          return Rk >= Fk && Bk < Fk;
        case 0:
          return Bk < Fk && Rk > Fk;
        case 1:
          return Bk <= Fk && Rk > Fk;
        case 2:
          return Rk > Fk;
        case 4:
          return !0
      }
    }

    function Wk(kk, Fk, Bk, Rk) {
      for (var tk; kk.from == kk.to || (Bk < 1 ? kk.from >= Fk : kk.from > Fk) || (Bk > -1 ? kk.to <= Fk : kk.to < Fk);) {
        let Fk = !Rk && kk instanceof ik && kk.index < 0 ? null : kk.parent;
        if (!Fk) return kk;
        kk = Fk
      }
      let ak = Rk ? 0 : Ak.IgnoreOverlays;
      if (Rk)
        for (let Xk = kk, bk = Xk.parent; bk; Xk = bk, bk = Xk.parent) Xk instanceof ik && Xk.index < 0 && (null === (tk = bk.enter(Fk, Bk, ak)) || void 0 === tk ? void 0 : tk.from) != Xk.from && (kk = bk);
      for (;;) {
        let Rk = kk.enter(Fk, Bk, ak);
        if (!Rk) return kk;
        kk = Rk
      }
    }
    class vk {
      cursor() {
        return new Hk(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(kk) {
        let Fk = Yk(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return Fk.length ? Fk[0] : null
      }
      getChildren(kk) {
        return Yk(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(kk) {
        return Wk(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(kk) {
        return Wk(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(kk) {
        return Lk(this.parent, kk)
      }
      enterUnfinishedNodesBefore(kk) {
        let Fk = this.childBefore(kk),
          Bk = this;
        for (; Fk;) {
          let kk = Fk.lastChild;
          if (!kk || kk.to != Fk.to) break;
          kk.type.isError && kk.from == kk.to ? (Bk = Fk, Fk = kk.prevSibling) : Fk = kk
        }
        return Bk
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class ik extends vk {
      constructor(kk, Fk, Bk, Rk) {
        super(), this._tree = kk, this.from = Fk, this.index = Bk, this._parent = Rk
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
      nextChild(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let ak = this;;) {
          for (let {
              children: Xk,
              positions: wk
            } = ak._tree, dk = Fk > 0 ? Xk.length : -1; kk != dk; kk += Fk) {
            let dk, sk = Xk[kk],
              Vk = wk[kk] + ak.from;
            if (tk & Ak.EnterBracketed && sk instanceof ek && (dk = bk.get(sk)) && !dk.overlay && dk.bracketed && Bk >= Vk && Bk <= Vk + sk.length || mk(Rk, Bk, Vk, Vk + sk.length))
              if (sk instanceof fk) {
                if (tk & Ak.ExcludeBuffers) continue;
                let Xk = sk.findChild(0, sk.buffer.length, Fk, Bk - Vk, Rk);
                if (Xk > -1) return new Ek(new Ok(ak, sk, kk, Vk), null, Xk)
              } else if (tk & Ak.IncludeAnonymous || !sk.type.isAnonymous || uk(sk)) {
              let Xk;
              if (!(tk & Ak.IgnoreMounts) && (Xk = bk.get(sk)) && !Xk.overlay) return new ik(Xk.tree, Vk, kk, ak);
              let wk = new ik(sk, Vk, kk, ak);
              return tk & Ak.IncludeAnonymous || !wk.type.isAnonymous ? wk : wk.nextChild(Fk < 0 ? sk.children.length - 1 : 0, Fk, Bk, Rk, tk)
            }
          }
          if (tk & Ak.IncludeAnonymous || !ak.type.isAnonymous) return null;
          if (kk = ak.index >= 0 ? ak.index + Fk : Fk < 0 ? -1 : ak._parent._tree.children.length, ak = ak._parent, !ak) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(kk) {
        return this.nextChild(0, 1, kk, 2)
      }
      childBefore(kk) {
        return this.nextChild(this._tree.children.length - 1, -1, kk, -2)
      }
      prop(kk) {
        return this._tree.prop(kk)
      }
      enter(kk, Fk) {
        let Bk, Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Rk & Ak.IgnoreOverlays) && (Bk = bk.get(this._tree)) && Bk.overlay) {
          let tk = kk - this.from,
            ak = Rk & Ak.EnterBracketed && Bk.bracketed;
          for (let {
              from: kk,
              to: Rk
            }
            of Bk.overlay)
            if ((Fk > 0 || ak ? kk <= tk : kk < tk) && (Fk < 0 || ak ? Rk >= tk : Rk > tk)) return new ik(Bk.tree, Bk.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, kk, Fk, Rk)
      }
      nextSignificantParent() {
        let kk = this;
        for (; kk.type.isAnonymous && kk._parent;) kk = kk._parent;
        return kk
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

    function Yk(kk, Fk, Bk, Rk) {
      let tk = kk.cursor(),
        ak = [];
      if (!tk.firstChild()) return ak;
      if (null != Bk)
        for (let Xk = !1; !Xk;)
          if (Xk = tk.type.is(Bk), !tk.nextSibling()) return ak;
      for (;;) {
        if (null != Rk && tk.type.is(Rk)) return ak;
        if (tk.type.is(Fk) && ak.push(tk.node), !tk.nextSibling()) return null == Rk ? ak : []
      }
    }

    function Lk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fk.length - 1;
      for (let Rk = kk; Bk >= 0; Rk = Rk.parent) {
        if (!Rk) return !1;
        if (!Rk.type.isAnonymous) {
          if (Fk[Bk] && Fk[Bk] != Rk.name) return !1;
          Bk--
        }
      }
      return !0
    }
    class Ok {
      constructor(kk, Fk, Bk, Rk) {
        this.parent = kk, this.buffer = Fk, this.index = Bk, this.start = Rk
      }
    }
    class Ek extends vk {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(kk, Fk, Bk) {
        super(), this.context = kk, this._parent = Fk, this.index = Bk, this.type = kk.buffer.set.types[kk.buffer.buffer[Bk]]
      }
      child(kk, Fk, Bk) {
        let {
          buffer: Rk
        } = this.context, tk = Rk.findChild(this.index + 4, Rk.buffer[this.index + 3], kk, Fk - this.context.start, Bk);
        return tk < 0 ? null : new Ek(this.context, this, tk)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(kk) {
        return this.child(1, kk, 2)
      }
      childBefore(kk) {
        return this.child(-1, kk, -2)
      }
      prop(kk) {
        return this.type.prop(kk)
      }
      enter(kk, Fk) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & Ak.ExcludeBuffers) return null;
        let {
          buffer: Bk
        } = this.context, Rk = Bk.findChild(this.index + 4, Bk.buffer[this.index + 3], Fk > 0 ? 1 : -1, kk - this.context.start, Fk);
        return Rk < 0 ? null : new Ek(this.context, this, Rk)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(kk) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + kk, kk, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: kk
        } = this.context, Fk = kk.buffer[this.index + 3];
        return Fk < (this._parent ? kk.buffer[this._parent.index + 3] : kk.buffer.length) ? new Ek(this.context, this._parent, Fk) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: kk
        } = this.context, Fk = this._parent ? this._parent.index + 4 : 0;
        return this.index == Fk ? this.externalSibling(-1) : new Ek(this.context, this._parent, kk.findChild(Fk, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let kk = [],
          Fk = [],
          {
            buffer: Bk
          } = this.context,
          Rk = this.index + 4,
          tk = Bk.buffer[this.index + 3];
        if (tk > Rk) {
          let ak = Bk.buffer[this.index + 1];
          kk.push(Bk.slice(Rk, tk, ak)), Fk.push(0)
        }
        return new ek(this.type, kk, Fk, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function Sk(kk) {
      if (!kk.length) return null;
      let Fk = 0,
        Bk = kk[0];
      for (let ak = 1; ak < kk.length; ak++) {
        let Rk = kk[ak];
        (Rk.from > Bk.from || Rk.to < Bk.to) && (Bk = Rk, Fk = ak)
      }
      let Rk = Bk instanceof ik && Bk.index < 0 ? null : Bk.parent,
        tk = kk.slice();
      return Rk ? tk[Fk] = Rk : tk.splice(Fk, 1), new Nk(tk, Bk)
    }
    class Nk {
      constructor(kk, Fk) {
        this.heads = kk, this.node = Fk
      }
      get next() {
        return Sk(this.heads)
      }
    }
    class Hk {
      get name() {
        return this.type.name
      }
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = Fk & ~Ak.EnterBracketed, kk instanceof ik) this.yieldNode(kk);
        else {
          this._tree = kk.context.parent, this.buffer = kk.context;
          for (let Fk = kk._parent; Fk; Fk = Fk._parent) this.stack.unshift(Fk.index);
          this.bufferNode = kk, this.yieldBuf(kk.index)
        }
      }
      yieldNode(kk) {
        return !!kk && (this._tree = kk, this.type = kk.type, this.from = kk.from, this.to = kk.to, !0)
      }
      yieldBuf(kk, Fk) {
        this.index = kk;
        let {
          start: Bk,
          buffer: Rk
        } = this.buffer;
        return this.type = Fk || Rk.set.types[Rk.buffer[kk]], this.from = Bk + Rk.buffer[kk + 1], this.to = Bk + Rk.buffer[kk + 2], !0
      }
      yield(kk) {
        return !!kk && (kk instanceof ik ? (this.buffer = null, this.yieldNode(kk)) : (this.buffer = kk.context, this.yieldBuf(kk.index, kk.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(kk, Fk, Bk) {
        if (!this.buffer) return this.yield(this._tree.nextChild(kk < 0 ? this._tree._tree.children.length - 1 : 0, kk, Fk, Bk, this.mode));
        let {
          buffer: Rk
        } = this.buffer, tk = Rk.findChild(this.index + 4, Rk.buffer[this.index + 3], kk, Fk - this.buffer.start, Bk);
        return !(tk < 0) && (this.stack.push(this.index), this.yieldBuf(tk))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(kk) {
        return this.enterChild(1, kk, 2)
      }
      childBefore(kk) {
        return this.enterChild(-1, kk, -2)
      }
      enter(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(Bk & Ak.ExcludeBuffers) && this.enterChild(1, kk, Fk) : this.yield(this._tree.enter(kk, Fk, Bk))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & Ak.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let kk = this.mode & Ak.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(kk)
      }
      sibling(kk) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + kk, kk, 0, 4, this.mode));
        let {
          buffer: Fk
        } = this.buffer, Bk = this.stack.length - 1;
        if (kk < 0) {
          let kk = Bk < 0 ? 0 : this.stack[Bk] + 4;
          if (this.index != kk) return this.yieldBuf(Fk.findChild(kk, this.index, -1, 0, 4))
        } else {
          let kk = Fk.buffer[this.index + 3];
          if (kk < (Bk < 0 ? Fk.buffer.length : Fk.buffer[this.stack[Bk] + 3])) return this.yieldBuf(kk)
        }
        return Bk < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + kk, kk, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(kk) {
        let Fk, Bk, {
          buffer: Rk
        } = this;
        if (Rk) {
          if (kk > 0) {
            if (this.index < Rk.buffer.buffer.length) return !1
          } else
            for (let kk = 0; kk < this.index; kk++)
              if (Rk.buffer.buffer[kk + 3] < this.index) return !1;
          ({
            index: Fk,
            parent: Bk
          } = Rk)
        } else({
          index: Fk,
          _parent: Bk
        } = this._tree);
        for (; Bk;
          ({
            index: Fk,
            _parent: Bk
          } = Bk))
          if (Fk > -1)
            for (let Rk = Fk + kk, tk = kk < 0 ? -1 : Bk._tree.children.length; Rk != tk; Rk += kk) {
              let kk = Bk._tree.children[Rk];
              if (this.mode & Ak.IncludeAnonymous || kk instanceof fk || !kk.type.isAnonymous || uk(kk)) return !1
            }
        return !0
      }
      move(kk, Fk) {
        if (Fk && this.enterChild(kk, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(kk)) return !0;
          if (this.atLastNode(kk) || !this.parent()) return !1
        }
      }
      next() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, kk)
      }
      prev() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, kk)
      }
      moveTo(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (Fk < 1 ? this.from >= kk : this.from > kk) || (Fk > -1 ? this.to <= kk : this.to < kk)) && this.parent(););
        for (; this.enterChild(1, kk, Fk););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let kk = this.bufferNode,
          Fk = null,
          Bk = 0;
        if (kk && kk.context == this.buffer) kk: for (let Rk = this.index, tk = this.stack.length; tk >= 0;) {
          for (let ak = kk; ak; ak = ak._parent)
            if (ak.index == Rk) {
              if (Rk == this.index) return ak;
              Fk = ak, Bk = tk + 1;
              break kk
            } Rk = this.stack[--tk]
        }
        for (let Rk = Bk; Rk < this.stack.length; Rk++) Fk = new Ek(this.buffer, Fk, this.stack[Rk]);
        return this.bufferNode = new Ek(this.buffer, Fk, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(kk, Fk) {
        for (let Bk = 0;;) {
          let Rk = !1;
          if (this.type.isAnonymous || !1 !== kk(this)) {
            if (this.firstChild()) {
              Bk++;
              continue
            }
            this.type.isAnonymous || (Rk = !0)
          }
          for (;;) {
            if (Rk && Fk && Fk(this), Rk = this.type.isAnonymous, !Bk) return;
            if (this.nextSibling()) break;
            this.parent(), Bk--, Rk = !0
          }
        }
      }
      matchContext(kk) {
        if (!this.buffer) return Lk(this.node.parent, kk);
        let {
          buffer: Fk
        } = this.buffer, {
          types: Bk
        } = Fk.set;
        for (let Rk = kk.length - 1, tk = this.stack.length - 1; Rk >= 0; tk--) {
          if (tk < 0) return Lk(this._tree, kk, Rk);
          let ak = Bk[Fk.buffer[this.stack[tk]]];
          if (!ak.isAnonymous) {
            if (kk[Rk] && kk[Rk] != ak.name) return !1;
            Rk--
          }
        }
        return !0
      }
    }

    function uk(kk) {
      return kk.children.some((kk => kk instanceof fk || !kk.type.isAnonymous || uk(kk)))
    }
    const Mk = new WeakMap;

    function gk(kk, Fk) {
      if (!kk.isAnonymous || Fk instanceof fk || Fk.type != kk) return 1;
      let Bk = Mk.get(Fk);
      if (null == Bk) {
        Bk = 1;
        for (let Rk of Fk.children) {
          if (Rk.type != kk || !(Rk instanceof ek)) {
            Bk = 1;
            break
          }
          Bk += gk(kk, Rk)
        }
        Mk.set(Fk, Bk)
      }
      return Bk
    }

    function Uk(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
      let dk = 0;
      for (let Ak = Rk; Ak < tk; Ak++) dk += gk(kk, Fk[Ak]);
      let sk = Math.ceil(1.5 * dk / 8),
        Vk = [],
        Jk = [];
      return function Fk(Bk, Rk, tk, Xk, bk) {
        for (let dk = tk; dk < Xk;) {
          let tk = dk,
            Ak = Rk[dk],
            ek = gk(kk, Bk[dk]);
          for (dk++; dk < Xk; dk++) {
            let Fk = gk(kk, Bk[dk]);
            if (ek + Fk >= sk) break;
            ek += Fk
          }
          if (dk == tk + 1) {
            if (ek > sk) {
              let kk = Bk[tk];
              Fk(kk.children, kk.positions, 0, kk.children.length, Rk[tk] + bk);
              continue
            }
            Vk.push(Bk[tk])
          } else {
            let Fk = Rk[dk - 1] + Bk[dk - 1].length - Ak;
            Vk.push(Uk(kk, Bk, Rk, tk, dk, Ak, Fk, null, wk))
          }
          Jk.push(Ak + bk - ak)
        }
      }(Fk, Bk, Rk, tk, 0), (bk || wk)(Vk, Jk, Xk)
    }
    class ck {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(kk, Fk, Bk) {
        let Rk = this.map.get(kk);
        Rk || this.map.set(kk, Rk = new Map), Rk.set(Fk, Bk)
      }
      getBuffer(kk, Fk) {
        let Bk = this.map.get(kk);
        return Bk && Bk.get(Fk)
      }
      set(kk, Fk) {
        kk instanceof Ek ? this.setBuffer(kk.context.buffer, kk.index, Fk) : kk instanceof ik && this.map.set(kk.tree, Fk)
      }
      get(kk) {
        return kk instanceof Ek ? this.getBuffer(kk.context.buffer, kk.index) : kk instanceof ik ? this.map.get(kk.tree) : void 0
      }
      cursorSet(kk, Fk) {
        kk.buffer ? this.setBuffer(kk.buffer.buffer, kk.index, Fk) : this.map.set(kk.tree, Fk)
      }
      cursorGet(kk) {
        return kk.buffer ? this.getBuffer(kk.buffer.buffer, kk.index) : this.map.get(kk.tree)
      }
    }
    class Gk {
      constructor(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = kk, this.to = Fk, this.tree = Bk, this.offset = Rk, this.open = (tk ? 1 : 0) | (ak ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = [new Gk(0, kk.length, kk, 0, !1, Bk)];
        for (let tk of Fk) tk.to > kk.length && Rk.push(tk);
        return Rk
      }
      static applyChanges(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!Fk.length) return kk;
        let Rk = [],
          tk = 1,
          ak = kk.length ? kk[0] : null;
        for (let Xk = 0, bk = 0, wk = 0;; Xk++) {
          let dk = Xk < Fk.length ? Fk[Xk] : null,
            sk = dk ? dk.fromA : 1e9;
          if (sk - bk >= Bk)
            for (; ak && ak.from < sk;) {
              let Fk = ak;
              if (bk >= Fk.from || sk <= Fk.to || wk) {
                let kk = Math.max(Fk.from, bk) - wk,
                  Bk = Math.min(Fk.to, sk) - wk;
                Fk = kk >= Bk ? null : new Gk(kk, Bk, Fk.tree, Fk.offset + wk, Xk > 0, !!dk)
              }
              if (Fk && Rk.push(Fk), ak.to > sk) break;
              ak = tk < kk.length ? kk[tk++] : null
            }
          if (!dk) break;
          bk = dk.toA, wk = dk.toA - dk.toB
        }
        return Rk
      }
    }
    class Tk {
      startParse(kk, Fk, Bk) {
        return "string" == typeof kk && (kk = new rk(kk)), Bk = Bk ? Bk.length ? Bk.map((kk => new ak(kk.from, kk.to))) : [new ak(0, 0)] : [new ak(0, kk.length)], this.createParse(kk, Fk || [], Bk)
      }
      parse(kk, Fk, Bk) {
        let Rk = this.startParse(kk, Fk, Bk);
        for (;;) {
          let kk = Rk.advance();
          if (kk) return kk
        }
      }
    }
    class rk {
      constructor(kk) {
        this.string = kk
      }
      get length() {
        return this.string.length
      }
      chunk(kk) {
        return this.string.slice(kk)
      }
      get lineChunks() {
        return !1
      }
      read(kk, Fk) {
        return this.string.slice(kk, Fk)
      }
    }
    new Xk({
      perNode: !0
    })
  },
  40765: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Jk,
      g: () => wk,
      k: () => Vk,
      n: () => Mk
    });
    var Rk = Bk(40762);
    let tk = 0;
    class ak {
      constructor(kk, Fk, Bk, Rk) {
        this.name = kk, this.set = Fk, this.base = Bk, this.modified = Rk, this.id = tk++
      }
      toString() {
        let {
          name: kk
        } = this;
        for (let Fk of this.modified) Fk.name && (kk = `${Fk.name}(${kk})`);
        return kk
      }
      static define(kk, Fk) {
        let Bk = "string" == typeof kk ? kk : "?";
        if (kk instanceof ak && (Fk = kk), null === Fk || void 0 === Fk ? void 0 : Fk.base) throw new Error("Can not derive from a modified tag");
        let Rk = new ak(Bk, [], null, []);
        if (Rk.set.push(Rk), Fk)
          for (let tk of Fk.set) Rk.set.push(tk);
        return Rk
      }
      static defineModifier(kk) {
        let Fk = new bk(kk);
        return kk => kk.modified.indexOf(Fk) > -1 ? kk : bk.get(kk.base || kk, kk.modified.concat(Fk).sort(((kk, Fk) => kk.id - Fk.id)))
      }
    }
    let Xk = 0;
    class bk {
      constructor(kk) {
        this.name = kk, this.instances = [], this.id = Xk++
      }
      static get(kk, Fk) {
        if (!Fk.length) return kk;
        let Bk = Fk[0].instances.find((Bk => {
          return Bk.base == kk && (Rk = Fk, tk = Bk.modified, Rk.length == tk.length && Rk.every(((kk, Fk) => kk == tk[Fk])));
          var Rk, tk
        }));
        if (Bk) return Bk;
        let Rk = [],
          tk = new ak(kk.name, Rk, kk, Fk);
        for (let ak of Fk) ak.instances.push(tk);
        let Xk = function(kk) {
          let Fk = [
            []
          ];
          for (let Bk = 0; Bk < kk.length; Bk++)
            for (let Rk = 0, tk = Fk.length; Rk < tk; Rk++) Fk.push(Fk[Rk].concat(kk[Bk]));
          return Fk.sort(((kk, Fk) => Fk.length - kk.length))
        }(Fk);
        for (let ak of kk.set)
          if (!ak.modified.length)
            for (let kk of Xk) Rk.push(bk.get(ak, kk));
        return tk
      }
    }

    function wk(kk) {
      let Fk = Object.create(null);
      for (let Bk in kk) {
        let Rk = kk[Bk];
        Array.isArray(Rk) || (Rk = [Rk]);
        for (let kk of Bk.split(" "))
          if (kk) {
            let Bk = [],
              tk = 2,
              ak = kk;
            for (let Fk = 0;;) {
              if ("..." == ak && Fk > 0 && Fk + 3 == kk.length) {
                tk = 1;
                break
              }
              let Rk = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(ak);
              if (!Rk) throw new RangeError("Invalid path: " + kk);
              if (Bk.push("*" == Rk[0] ? "" : '"' == Rk[0][0] ? JSON.parse(Rk[0]) : Rk[0]), Fk += Rk[0].length, Fk == kk.length) break;
              let Xk = kk[Fk++];
              if (Fk == kk.length && "!" == Xk) {
                tk = 0;
                break
              }
              if ("/" != Xk) throw new RangeError("Invalid path: " + kk);
              ak = kk.slice(Fk)
            }
            let Xk = Bk.length - 1,
              bk = Bk[Xk];
            if (!bk) throw new RangeError("Invalid path: " + kk);
            let wk = new sk(Rk, tk, Xk > 0 ? Bk.slice(0, Xk) : null);
            Fk[bk] = wk.sort(Fk[bk])
          }
      }
      return dk.add(Fk)
    }
    const dk = new Rk.g({
      combine(kk, Fk) {
        let Bk, Rk, tk;
        for (; kk || Fk;) {
          if (!kk || Fk && kk.depth >= Fk.depth ? (tk = Fk, Fk = Fk.next) : (tk = kk, kk = kk.next), Bk && Bk.mode == tk.mode && !tk.context && !Bk.context) continue;
          let ak = new sk(tk.tags, tk.mode, tk.context);
          Bk ? Bk.next = ak : Rk = ak, Bk = ak
        }
        return Rk
      }
    });
    class sk {
      constructor(kk, Fk, Bk, Rk) {
        this.tags = kk, this.mode = Fk, this.context = Bk, this.next = Rk
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(kk) {
        return !kk || kk.depth < this.depth ? (this.next = kk, this) : (kk.next = this.sort(kk.next), kk)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function Vk(kk, Fk) {
      let Bk = Object.create(null);
      for (let ak of kk)
        if (Array.isArray(ak.tag))
          for (let kk of ak.tag) Bk[kk.id] = ak.class;
        else Bk[ak.tag.id] = ak.class;
      let {
        scope: Rk,
        all: tk = null
      } = Fk || {};
      return {
        style: kk => {
          let Fk = tk;
          for (let Rk of kk)
            for (let kk of Rk.set) {
              let Rk = Bk[kk.id];
              if (Rk) {
                Fk = Fk ? Fk + " " + Rk : Rk;
                break
              }
            }
          return Fk
        },
        scope: Rk
      }
    }

    function Jk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kk.length,
        ak = new Ak(Rk, Array.isArray(Fk) ? Fk : [Fk], Bk);
      ak.highlightRange(kk.cursor(), Rk, tk, "", ak.highlighters), ak.flush(tk)
    }
    sk.empty = new sk([], 2, null);
    class Ak {
      constructor(kk, Fk, Bk) {
        this.at = kk, this.highlighters = Fk, this.span = Bk, this.class = ""
      }
      startSpan(kk, Fk) {
        Fk != this.class && (this.flush(kk), kk > this.at && (this.at = kk), this.class = Fk)
      }
      flush(kk) {
        kk > this.at && this.class && this.span(this.at, kk, this.class)
      }
      highlightRange(kk, Fk, Bk, tk, ak) {
        let {
          type: Xk,
          from: bk,
          to: wk
        } = kk;
        if (bk >= Bk || wk <= Fk) return;
        Xk.isTop && (ak = this.highlighters.filter((kk => !kk.scope || kk.scope(Xk))));
        let Vk = tk,
          Jk = function(kk) {
            let Fk = kk.type.prop(dk);
            for (; Fk && Fk.context && !kk.matchContext(Fk.context);) Fk = Fk.next;
            return Fk || null
          }(kk) || sk.empty,
          Ak = function(kk, Fk) {
            let Bk = null;
            for (let Rk of kk) {
              let kk = Rk.style(Fk);
              kk && (Bk = Bk ? Bk + " " + kk : kk)
            }
            return Bk
          }(ak, Jk.tags);
        if (Ak && (Vk && (Vk += " "), Vk += Ak, 1 == Jk.mode && (tk += (tk ? " " : "") + Ak)), this.startSpan(Math.max(Fk, bk), Vk), Jk.opaque) return;
        let ek = kk.tree && kk.tree.prop(Rk.g.mounted);
        if (ek && ek.overlay) {
          let Rk = kk.node.enter(ek.overlay[0].from + bk, 1),
            Xk = this.highlighters.filter((kk => !kk.scope || kk.scope(ek.tree.type))),
            dk = kk.firstChild();
          for (let sk = 0, Jk = bk;; sk++) {
            let Ak = sk < ek.overlay.length ? ek.overlay[sk] : null,
              yk = Ak ? Ak.from + bk : wk,
              fk = Math.max(Fk, Jk),
              mk = Math.min(Bk, yk);
            if (fk < mk && dk)
              for (; kk.from < mk && (this.highlightRange(kk, fk, mk, tk, ak), this.startSpan(Math.min(mk, kk.to), Vk), !(kk.to >= yk) && kk.nextSibling()););
            if (!Ak || yk > Bk) break;
            Jk = Ak.to + bk, Jk > Fk && (this.highlightRange(Rk.cursor(), Math.max(Fk, Ak.from + bk), Math.min(Bk, Jk), "", Xk), this.startSpan(Math.min(Bk, Jk), Vk))
          }
          dk && kk.parent()
        } else if (kk.firstChild()) {
          ek && (tk = "");
          do {
            if (!(kk.to <= Fk)) {
              if (kk.from >= Bk) break;
              this.highlightRange(kk, Fk, Bk, tk, ak), this.startSpan(Math.min(Bk, kk.to), Vk)
            }
          } while (kk.nextSibling());
          kk.parent()
        }
      }
    }
    const ek = ak.define,
      yk = ek(),
      fk = ek(),
      mk = ek(fk),
      Wk = ek(fk),
      vk = ek(),
      ik = ek(vk),
      Yk = ek(vk),
      Lk = ek(),
      Ok = ek(Lk),
      Ek = ek(),
      Sk = ek(),
      Nk = ek(),
      Hk = ek(Nk),
      uk = ek(),
      Mk = {
        comment: yk,
        lineComment: ek(yk),
        blockComment: ek(yk),
        docComment: ek(yk),
        name: fk,
        variableName: ek(fk),
        typeName: mk,
        tagName: ek(mk),
        propertyName: Wk,
        attributeName: ek(Wk),
        className: ek(fk),
        labelName: ek(fk),
        namespace: ek(fk),
        macroName: ek(fk),
        literal: vk,
        string: ik,
        docString: ek(ik),
        character: ek(ik),
        attributeValue: ek(ik),
        number: Yk,
        integer: ek(Yk),
        float: ek(Yk),
        bool: ek(vk),
        regexp: ek(vk),
        escape: ek(vk),
        color: ek(vk),
        url: ek(vk),
        keyword: Ek,
        self: ek(Ek),
        null: ek(Ek),
        atom: ek(Ek),
        unit: ek(Ek),
        modifier: ek(Ek),
        operatorKeyword: ek(Ek),
        controlKeyword: ek(Ek),
        definitionKeyword: ek(Ek),
        moduleKeyword: ek(Ek),
        operator: Sk,
        derefOperator: ek(Sk),
        arithmeticOperator: ek(Sk),
        logicOperator: ek(Sk),
        bitwiseOperator: ek(Sk),
        compareOperator: ek(Sk),
        updateOperator: ek(Sk),
        definitionOperator: ek(Sk),
        typeOperator: ek(Sk),
        controlOperator: ek(Sk),
        punctuation: Nk,
        separator: ek(Nk),
        bracket: Hk,
        angleBracket: ek(Hk),
        squareBracket: ek(Hk),
        paren: ek(Hk),
        brace: ek(Hk),
        content: Lk,
        heading: Ok,
        heading1: ek(Ok),
        heading2: ek(Ok),
        heading3: ek(Ok),
        heading4: ek(Ok),
        heading5: ek(Ok),
        heading6: ek(Ok),
        contentSeparator: ek(Lk),
        list: ek(Lk),
        quote: ek(Lk),
        emphasis: ek(Lk),
        strong: ek(Lk),
        link: ek(Lk),
        monospace: ek(Lk),
        strikethrough: ek(Lk),
        inserted: ek(),
        deleted: ek(),
        changed: ek(),
        invalid: ek(),
        meta: uk,
        documentMeta: ek(uk),
        annotation: ek(uk),
        processingInstruction: ek(uk),
        definition: ak.defineModifier("definition"),
        constant: ak.defineModifier("constant"),
        function: ak.defineModifier("function"),
        standard: ak.defineModifier("standard"),
        local: ak.defineModifier("local"),
        special: ak.defineModifier("special")
      };
    for (let gk in Mk) {
      let kk = Mk[gk];
      kk instanceof ak && (kk.name = gk)
    }
    Vk([{
      tag: Mk.link,
      class: "tok-link"
    }, {
      tag: Mk.heading,
      class: "tok-heading"
    }, {
      tag: Mk.emphasis,
      class: "tok-emphasis"
    }, {
      tag: Mk.strong,
      class: "tok-strong"
    }, {
      tag: Mk.keyword,
      class: "tok-keyword"
    }, {
      tag: Mk.atom,
      class: "tok-atom"
    }, {
      tag: Mk.bool,
      class: "tok-bool"
    }, {
      tag: Mk.url,
      class: "tok-url"
    }, {
      tag: Mk.labelName,
      class: "tok-labelName"
    }, {
      tag: Mk.inserted,
      class: "tok-inserted"
    }, {
      tag: Mk.deleted,
      class: "tok-deleted"
    }, {
      tag: Mk.literal,
      class: "tok-literal"
    }, {
      tag: Mk.string,
      class: "tok-string"
    }, {
      tag: Mk.number,
      class: "tok-number"
    }, {
      tag: [Mk.regexp, Mk.escape, Mk.special(Mk.string)],
      class: "tok-string2"
    }, {
      tag: Mk.variableName,
      class: "tok-variableName"
    }, {
      tag: Mk.local(Mk.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: Mk.definition(Mk.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: Mk.special(Mk.variableName),
      class: "tok-variableName2"
    }, {
      tag: Mk.definition(Mk.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: Mk.typeName,
      class: "tok-typeName"
    }, {
      tag: Mk.namespace,
      class: "tok-namespace"
    }, {
      tag: Mk.className,
      class: "tok-className"
    }, {
      tag: Mk.macroName,
      class: "tok-macroName"
    }, {
      tag: Mk.propertyName,
      class: "tok-propertyName"
    }, {
      tag: Mk.operator,
      class: "tok-operator"
    }, {
      tag: Mk.comment,
      class: "tok-comment"
    }, {
      tag: Mk.meta,
      class: "tok-meta"
    }, {
      tag: Mk.invalid,
      class: "tok-invalid"
    }, {
      tag: Mk.punctuation,
      class: "tok-punctuation"
    }])
  },
  40776: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk.l,
      e: () => Xk.o,
      f: () => Xk.z,
      j: () => Xk.A,
      l: () => bk.q,
      p: () => OB,
      r: () => bk.S,
      u: () => bk.hb
    });
    var Rk = Bk(1328),
      tk = Bk(1324),
      ak = Bk(61),
      Xk = Bk(40741),
      bk = Bk(40748),
      wk = Bk(40759),
      dk = Bk(40762);

    function sk(kk, Fk) {
      return Bk => {
        let {
          state: Rk,
          dispatch: tk
        } = Bk;
        if (Rk.readOnly) return !1;
        let ak = kk(Fk, Rk);
        return !!ak && (tk(Rk.update(ak)), !0)
      }
    }
    const Vk = sk(mk, 0),
      Jk = sk(fk, 0),
      Ak = sk(((kk, Fk) => fk(kk, Fk, function(kk) {
        let Fk = [];
        for (let Bk of kk.selection.hb) {
          let Rk = kk.doc.lineAt(Bk.from),
            tk = Bk.to <= Rk.to ? Rk : kk.doc.lineAt(Bk.to);
          tk.from > Rk.from && tk.from == Bk.to && (tk = Bk.to == Rk.to + 1 ? Rk : kk.doc.lineAt(Bk.to - 1));
          let ak = Fk.length - 1;
          ak >= 0 && Fk[ak].to > Rk.from ? Fk[ak].to = tk.to : Fk.push({
            from: Rk.from + /^\s*/.exec(Rk.text)[0].length,
            to: tk.to
          })
        }
        return Fk
      }(Fk))), 0);

    function ek(kk, Fk) {
      let Bk = kk.languageDataAt("commentTokens", Fk, 1);
      return Bk.length ? Bk[0] : {}
    }
    const yk = 50;

    function fk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fk.selection.hb,
        Rk = Bk.map((kk => ek(Fk, kk.from).block));
      if (!Rk.every((kk => kk))) return null;
      let tk = Bk.map(((kk, Bk) => function(kk, Fk, Bk, Rk) {
        let tk, ak, {
            open: Xk,
            close: bk
          } = Fk,
          wk = kk.sliceDoc(Bk - yk, Bk),
          dk = kk.sliceDoc(Rk, Rk + yk),
          sk = /\s*$/.exec(wk)[0].length,
          Vk = /^\s*/.exec(dk)[0].length,
          Jk = wk.length - sk;
        if (wk.slice(Jk - Xk.length, Jk) == Xk && dk.slice(Vk, Vk + bk.length) == bk) return {
          open: {
            pos: Bk - sk,
            margin: sk && 1
          },
          close: {
            pos: Rk + Vk,
            margin: Vk && 1
          }
        };
        Rk - Bk <= 2 * yk ? tk = ak = kk.sliceDoc(Bk, Rk) : (tk = kk.sliceDoc(Bk, Bk + yk), ak = kk.sliceDoc(Rk - yk, Rk));
        let Ak = /^\s*/.exec(tk)[0].length,
          ek = /\s*$/.exec(ak)[0].length,
          fk = ak.length - ek - bk.length;
        return tk.slice(Ak, Ak + Xk.length) == Xk && ak.slice(fk, fk + bk.length) == bk ? {
          open: {
            pos: Bk + Ak + Xk.length,
            margin: /\s/.test(tk.charAt(Ak + Xk.length)) ? 1 : 0
          },
          close: {
            pos: Rk - ek - bk.length,
            margin: /\s/.test(ak.charAt(fk - 1)) ? 1 : 0
          }
        } : null
      }(Fk, Rk[Bk], kk.from, kk.to)));
      if (2 != kk && !tk.every((kk => kk))) return {
        changes: Fk.changes(Bk.map(((kk, Fk) => tk[Fk] ? [] : [{
          from: kk.from,
          insert: Rk[Fk].open + " "
        }, {
          from: kk.to,
          insert: " " + Rk[Fk].close
        }])))
      };
      if (1 != kk && tk.some((kk => kk))) {
        let kk = [];
        for (let Fk, Bk = 0; Bk < tk.length; Bk++)
          if (Fk = tk[Bk]) {
            let tk = Rk[Bk],
              {
                open: ak,
                close: Xk
              } = Fk;
            kk.push({
              from: ak.pos - tk.open.length,
              to: ak.pos + ak.margin
            }, {
              from: Xk.pos - Xk.margin,
              to: Xk.pos + tk.close.length
            })
          } return {
          changes: kk
        }
      }
      return null
    }

    function mk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fk.selection.hb,
        Rk = [],
        tk = -1;
      kk: for (let {
          from: ak,
          to: Xk
        }
        of Bk) {
        let kk, Bk = Rk.length,
          bk = 1e9;
        for (let wk = ak; wk <= Xk;) {
          let Bk = Fk.doc.lineAt(wk);
          if (void 0 == kk && (kk = ek(Fk, Bk.from).line, !kk)) continue kk;
          if (Bk.from > tk && (ak == Xk || Xk > Bk.from)) {
            tk = Bk.from;
            let Fk = /^\s*/.exec(Bk.text)[0].length,
              ak = Fk == Bk.length,
              Xk = Bk.text.slice(Fk, Fk + kk.length) == kk ? Fk : -1;
            Fk < Bk.text.length && Fk < bk && (bk = Fk), Rk.push({
              line: Bk,
              comment: Xk,
              token: kk,
              indent: Fk,
              empty: ak,
              single: !1
            })
          }
          wk = Bk.to + 1
        }
        if (bk < 1e9)
          for (let Fk = Bk; Fk < Rk.length; Fk++) Rk[Fk].indent < Rk[Fk].line.text.length && (Rk[Fk].indent = bk);
        Rk.length == Bk + 1 && (Rk[Bk].single = !0)
      }
      if (2 != kk && Rk.some((kk => kk.comment < 0 && (!kk.empty || kk.single)))) {
        let kk = [];
        for (let {
            line: Fk,
            token: tk,
            indent: ak,
            empty: Xk,
            single: bk
          }
          of Rk) !bk && Xk || kk.push({
          from: Fk.from + ak,
          insert: tk + " "
        });
        let Bk = Fk.changes(kk);
        return {
          changes: Bk,
          selection: Fk.selection.map(Bk, 1)
        }
      }
      if (1 != kk && Rk.some((kk => kk.comment >= 0))) {
        let kk = [];
        for (let {
            line: Fk,
            comment: Bk,
            token: tk
          }
          of Rk)
          if (Bk >= 0) {
            let Rk = Fk.from + Bk,
              ak = Rk + tk.length;
            " " == Fk.text[ak - Fk.from] && ak++, kk.push({
              from: Rk,
              to: ak
            })
          } return {
          changes: kk
        }
      }
      return null
    }
    const Wk = Xk.b.define(),
      vk = Xk.b.define(),
      ik = Xk.i.define(),
      Yk = Xk.i.define({
        combine: kk => (0, Xk.K)(kk, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (kk, Fk) => Fk
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (kk, Fk) => (Bk, Rk) => kk(Bk, Rk) || Fk(Bk, Rk)
        })
      }),
      Lk = Xk.A.define({
        create: () => Pk.empty,
        update(kk, Fk) {
          let Bk = Fk.state.facet(Yk),
            Rk = Fk.annotation(Wk);
          if (Rk) {
            let tk = uk.fromTransaction(Fk, Rk.selection),
              ak = Rk.side,
              Xk = 0 == ak ? kk.undone : kk.done;
            return Xk = tk ? Mk(Xk, Xk.length, Bk.minDepth, tk) : Gk(Xk, Fk.startState.selection), new Pk(0 == ak ? Rk.rest : Xk, 0 == ak ? Xk : Rk.rest)
          }
          let tk = Fk.annotation(vk);
          if ("full" != tk && "before" != tk || (kk = kk.isolate()), !1 === Fk.annotation(Xk.E.addToHistory)) return Fk.changes.empty ? kk : kk.addMapping(Fk.changes.desc);
          let ak = uk.fromTransaction(Fk),
            bk = Fk.annotation(Xk.E.time),
            wk = Fk.annotation(Xk.E.userEvent);
          return ak ? kk = kk.addChanges(ak, bk, wk, Bk, Fk) : Fk.selection && (kk = kk.addSelection(Fk.startState.selection, bk, wk, Bk.newGroupDelay)), "full" != tk && "after" != tk || (kk = kk.isolate()), kk
        },
        toJSON: kk => ({
          done: kk.done.map((kk => kk.toJSON())),
          undone: kk.undone.map((kk => kk.toJSON()))
        }),
        fromJSON: kk => new Pk(kk.done.map(uk.fromJSON), kk.undone.map(uk.fromJSON))
      });

    function Ok(kk, Fk) {
      return function(Bk) {
        let {
          state: Rk,
          dispatch: tk
        } = Bk;
        if (!Fk && Rk.readOnly) return !1;
        let ak = Rk.field(Lk, !1);
        if (!ak) return !1;
        let Xk = ak.pop(kk, Rk, Fk);
        return !!Xk && (tk(Xk), !0)
      }
    }
    const Ek = Ok(0, !1),
      Sk = Ok(1, !1),
      Nk = Ok(0, !0),
      Hk = Ok(1, !0);
    class uk {
      constructor(kk, Fk, Bk, Rk, tk) {
        this.changes = kk, this.effects = Fk, this.mapped = Bk, this.startSelection = Rk, this.selectionsAfter = tk
      }
      setSelAfter(kk) {
        return new uk(this.changes, this.effects, this.mapped, this.startSelection, kk)
      }
      toJSON() {
        var kk, Fk, Bk;
        return {
          changes: null === (kk = this.changes) || void 0 === kk ? void 0 : kk.toJSON(),
          mapped: null === (Fk = this.mapped) || void 0 === Fk ? void 0 : Fk.toJSON(),
          startSelection: null === (Bk = this.startSelection) || void 0 === Bk ? void 0 : Bk.toJSON(),
          selectionsAfter: this.selectionsAfter.map((kk => kk.toJSON()))
        }
      }
      static fromJSON(kk) {
        return new uk(kk.changes && Xk.ChangeSet.fromJSON(kk.changes), [], kk.mapped && Xk.d.fromJSON(kk.mapped), kk.startSelection && Xk.f.fromJSON(kk.startSelection), kk.selectionsAfter.map(Xk.f.fromJSON))
      }
      static fromTransaction(kk, Fk) {
        let Bk = Uk;
        for (let Rk of kk.startState.facet(ik)) {
          let Fk = Rk(kk);
          Fk.length && (Bk = Bk.concat(Fk))
        }
        return !Bk.length && kk.changes.empty ? null : new uk(kk.changes.invert(kk.startState.doc), Bk, void 0, Fk || kk.startState.selection, Uk)
      }
      static selection(kk) {
        return new uk(void 0, Uk, void 0, void 0, kk)
      }
    }

    function Mk(kk, Fk, Bk, Rk) {
      let tk = Fk + 1 > Bk + 20 ? Fk - Bk - 1 : 0,
        ak = kk.slice(tk, Fk);
      return ak.push(Rk), ak
    }

    function gk(kk, Fk) {
      return kk.length ? Fk.length ? kk.concat(Fk) : kk : Fk
    }
    const Uk = [],
      ck = 200;

    function Gk(kk, Fk) {
      if (kk.length) {
        let Bk = kk[kk.length - 1],
          Rk = Bk.selectionsAfter.slice(Math.max(0, Bk.selectionsAfter.length - ck));
        return Rk.length && Rk[Rk.length - 1].eq(Fk) ? kk : (Rk.push(Fk), Mk(kk, kk.length - 1, 1e9, Bk.setSelAfter(Rk)))
      }
      return [uk.selection([Fk])]
    }

    function Tk(kk) {
      let Fk = kk[kk.length - 1],
        Bk = kk.slice();
      return Bk[kk.length - 1] = Fk.setSelAfter(Fk.selectionsAfter.slice(0, Fk.selectionsAfter.length - 1)), Bk
    }

    function rk(kk, Fk) {
      if (!kk.length) return kk;
      let Bk = kk.length,
        Rk = Uk;
      for (; Bk;) {
        let tk = Dk(kk[Bk - 1], Fk, Rk);
        if (tk.changes && !tk.changes.empty || tk.effects.length) {
          let Fk = kk.slice(0, Bk);
          return Fk[Bk - 1] = tk, Fk
        }
        Fk = tk.mapped, Bk--, Rk = tk.selectionsAfter
      }
      return Rk.length ? [uk.selection(Rk)] : Uk
    }

    function Dk(kk, Fk, Bk) {
      let Rk = gk(kk.selectionsAfter.length ? kk.selectionsAfter.map((kk => kk.map(Fk))) : Uk, Bk);
      if (!kk.changes) return uk.selection(Rk);
      let tk = kk.changes.map(Fk),
        ak = Fk.mapDesc(kk.changes, !0),
        bk = kk.mapped ? kk.mapped.composeDesc(ak) : ak;
      return new uk(tk, Xk.z.mapEffects(kk.effects, Fk), bk, kk.startSelection.map(ak), Rk)
    }
    const zk = /^(input\.type|delete)($|\.)/;
    class Pk {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = kk, this.undone = Fk, this.prevTime = Bk, this.prevUserEvent = Rk
      }
      isolate() {
        return this.prevTime ? new Pk(this.done, this.undone) : this
      }
      addChanges(kk, Fk, Bk, Rk, tk) {
        let ak = this.done,
          bk = ak[ak.length - 1];
        return ak = bk && bk.changes && !bk.changes.empty && kk.changes && (!Bk || zk.test(Bk)) && (!bk.selectionsAfter.length && Fk - this.prevTime < Rk.newGroupDelay && Rk.joinToEvent(tk, function(kk, Fk) {
          let Bk = [],
            Rk = !1;
          return kk.iterChangedRanges(((kk, Fk) => Bk.push(kk, Fk))), Fk.iterChangedRanges(((kk, Fk, tk, ak) => {
            for (let Xk = 0; Xk < Bk.length;) {
              let kk = Bk[Xk++],
                Fk = Bk[Xk++];
              ak >= kk && tk <= Fk && (Rk = !0)
            }
          })), Rk
        }(bk.changes, kk.changes)) || "input.type.compose" == Bk) ? Mk(ak, ak.length - 1, Rk.minDepth, new uk(kk.changes.compose(bk.changes), gk(Xk.z.mapEffects(kk.effects, bk.changes), bk.effects), bk.mapped, bk.startSelection, Uk)) : Mk(ak, ak.length, Rk.minDepth, kk), new Pk(ak, Uk, Fk, Bk)
      }
      addSelection(kk, Fk, Bk, Rk) {
        let tk = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Uk;
        return tk.length > 0 && Fk - this.prevTime < Rk && Bk == this.prevUserEvent && Bk && /^select($|\.)/.test(Bk) && (ak = tk[tk.length - 1], Xk = kk, ak.hb.length == Xk.hb.length && 0 === ak.hb.filter(((kk, Fk) => kk.empty != Xk.hb[Fk].empty)).length) ? this : new Pk(Gk(this.done, kk), this.undone, Fk, Bk);
        var ak, Xk
      }
      addMapping(kk) {
        return new Pk(rk(this.done, kk), rk(this.undone, kk), this.prevTime, this.prevUserEvent)
      }
      pop(kk, Fk, Bk) {
        let Rk = 0 == kk ? this.done : this.undone;
        if (0 == Rk.length) return null;
        let tk = Rk[Rk.length - 1],
          ak = tk.selectionsAfter[0] || (tk.startSelection ? tk.startSelection.map(tk.changes.invertedDesc, 1) : Fk.selection);
        if (Bk && tk.selectionsAfter.length) return Fk.update({
          selection: tk.selectionsAfter[tk.selectionsAfter.length - 1],
          annotations: Wk.of({
            side: kk,
            rest: Tk(Rk),
            selection: ak
          }),
          userEvent: 0 == kk ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (tk.changes) {
          let Bk = 1 == Rk.length ? Uk : Rk.slice(0, Rk.length - 1);
          return tk.mapped && (Bk = rk(Bk, tk.mapped)), Fk.update({
            changes: tk.changes,
            selection: tk.startSelection,
            effects: tk.effects,
            annotations: Wk.of({
              side: kk,
              rest: Bk,
              selection: ak
            }),
            filter: !1,
            userEvent: 0 == kk ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    Pk.empty = new Pk(Uk, Uk);
    const hk = [{
      key: "Mod-z",
      run: Ek,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: Sk,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: Sk,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: Nk,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Hk,
      preventDefault: !0
    }];

    function qk(kk, Fk) {
      return Xk.f.create(kk.hb.map(Fk), kk.mainIndex)
    }

    function Ck(kk, Fk) {
      return kk.update({
        selection: Fk,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function Zk(kk, Fk) {
      let {
        state: Bk,
        dispatch: Rk
      } = kk, tk = qk(Bk.selection, Fk);
      return !tk.eq(Bk.selection, !0) && (Rk(Ck(Bk, tk)), !0)
    }

    function pk(kk, Fk) {
      return Xk.f.cursor(Fk ? kk.to : kk.from)
    }

    function Kk(kk, Fk) {
      return Zk(kk, (Bk => Bk.empty ? kk.moveByChar(Bk, Fk) : pk(Bk, Fk)))
    }

    function xk(kk) {
      return kk.textDirectionAt(kk.state.selection.main.head) == bk.h.LTR
    }
    const jk = kk => Kk(kk, !xk(kk)),
      lk = kk => Kk(kk, xk(kk));

    function nk(kk, Fk) {
      return Zk(kk, (Bk => Bk.empty ? kk.moveByGroup(Bk, Fk) : pk(Bk, Fk)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function Ik(kk, Fk, Bk) {
      if (Fk.type.prop(Bk)) return !0;
      let Rk = Fk.to - Fk.from;
      return Rk && (Rk > 2 || /[^\s,.;:]/.test(kk.sliceDoc(Fk.from, Fk.to))) || Fk.firstChild
    }

    function Qk(kk, Fk, Bk) {
      let Rk, tk, ak = (0, wk.rb)(kk).resolveInner(Fk.head),
        bk = Bk ? dk.g.closedBy : dk.g.openedBy;
      for (let Xk = Fk.head;;) {
        let Fk = Bk ? ak.childAfter(Xk) : ak.childBefore(Xk);
        if (!Fk) break;
        Ik(kk, Fk, bk) ? ak = Fk : Xk = Bk ? Fk.to : Fk.from
      }
      return tk = ak.type.prop(bk) && (Rk = Bk ? (0, wk.hb)(kk, ak.from, 1) : (0, wk.hb)(kk, ak.to, -1)) && Rk.matched ? Bk ? Rk.end.to : Rk.end.from : Bk ? ak.to : ak.from, Xk.f.cursor(tk, Bk ? -1 : 1)
    }

    function kF(kk, Fk) {
      return Zk(kk, (Bk => {
        if (!Bk.empty) return pk(Bk, Fk);
        let Rk = kk.moveVertically(Bk, Fk);
        return Rk.head != Bk.head ? Rk : kk.moveToLineBoundary(Bk, Fk)
      }))
    }
    const FF = kk => kF(kk, !1),
      BF = kk => kF(kk, !0);

    function RF(kk) {
      let Fk, Bk = kk.scrollDOM.clientHeight < kk.scrollDOM.scrollHeight - 2,
        Rk = 0,
        tk = 0;
      if (Bk) {
        for (let Fk of kk.state.facet(bk.l.scrollMargins)) {
          let Bk = Fk(kk);
          (null === Bk || void 0 === Bk ? void 0 : Bk.top) && (Rk = Math.max(null === Bk || void 0 === Bk ? void 0 : Bk.top, Rk)), (null === Bk || void 0 === Bk ? void 0 : Bk.bottom) && (tk = Math.max(null === Bk || void 0 === Bk ? void 0 : Bk.bottom, tk))
        }
        Fk = kk.scrollDOM.clientHeight - Rk - tk
      } else Fk = (kk.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Rk,
        marginBottom: tk,
        selfScroll: Bk,
        height: Math.max(kk.defaultLineHeight, Fk - 5)
      }
    }

    function tF(kk, Fk) {
      let Bk, Rk = RF(kk),
        {
          state: tk
        } = kk,
        ak = qk(tk.selection, (Bk => Bk.empty ? kk.moveVertically(Bk, Fk, Rk.height) : pk(Bk, Fk)));
      if (ak.eq(tk.selection)) return !1;
      if (Rk.selfScroll) {
        let Fk = kk.coordsAtPos(tk.selection.main.head),
          Xk = kk.scrollDOM.getBoundingClientRect(),
          wk = Xk.top + Rk.marginTop,
          dk = Xk.bottom - Rk.marginBottom;
        Fk && Fk.top > wk && Fk.bottom < dk && (Bk = bk.l.scrollIntoView(ak.main.head, {
          y: "start",
          yMargin: Fk.top - wk
        }))
      }
      return kk.dispatch(Ck(tk, ak), {
        effects: Bk
      }), !0
    }
    const aF = kk => tF(kk, !1),
      XF = kk => tF(kk, !0);

    function bF(kk, Fk, Bk) {
      let Rk = kk.lineBlockAt(Fk.head),
        tk = kk.moveToLineBoundary(Fk, Bk);
      if (tk.head == Fk.head && tk.head != (Bk ? Rk.to : Rk.from) && (tk = kk.moveToLineBoundary(Fk, Bk, !1)), !Bk && tk.head == Rk.from && Rk.length) {
        let Bk = /^\s*/.exec(kk.state.sliceDoc(Rk.from, Math.min(Rk.from + 100, Rk.to)))[0].length;
        Bk && Fk.head != Rk.from + Bk && (tk = Xk.f.cursor(Rk.from + Bk))
      }
      return tk
    }

    function wF(kk, Fk, Bk) {
      let Rk = !1,
        tk = qk(kk.selection, (Fk => {
          let tk = (0, wk.hb)(kk, Fk.head, -1) || (0, wk.hb)(kk, Fk.head, 1) || Fk.head > 0 && (0, wk.hb)(kk, Fk.head - 1, 1) || Fk.head < kk.doc.length && (0, wk.hb)(kk, Fk.head + 1, -1);
          if (!tk || !tk.end) return Fk;
          Rk = !0;
          let ak = tk.start.from == Fk.head ? tk.end.to : tk.end.from;
          return Bk ? Xk.f.range(Fk.anchor, ak) : Xk.f.cursor(ak)
        }));
      return !!Rk && (Fk(Ck(kk, tk)), !0)
    }

    function dF(kk, Fk) {
      let Bk = qk(kk.state.selection, (kk => {
        let Bk = Fk(kk);
        return Xk.f.range(kk.anchor, Bk.head, Bk.goalColumn, Bk.bidiLevel || void 0, Bk.assoc)
      }));
      return !Bk.eq(kk.state.selection) && (kk.dispatch(Ck(kk.state, Bk)), !0)
    }

    function sF(kk, Fk) {
      return dF(kk, (Bk => kk.moveByChar(Bk, Fk)))
    }
    const VF = kk => sF(kk, !xk(kk)),
      JF = kk => sF(kk, xk(kk));

    function AF(kk, Fk) {
      return dF(kk, (Bk => kk.moveByGroup(Bk, Fk)))
    }

    function eF(kk, Fk) {
      return dF(kk, (Bk => kk.moveVertically(Bk, Fk)))
    }
    const yF = kk => eF(kk, !1),
      fF = kk => eF(kk, !0);

    function mF(kk, Fk) {
      return dF(kk, (Bk => kk.moveVertically(Bk, Fk, RF(kk).height)))
    }
    const WF = kk => mF(kk, !1),
      vF = kk => mF(kk, !0),
      iF = kk => {
        let {
          state: Fk,
          dispatch: Bk
        } = kk;
        return Bk(Ck(Fk, {
          anchor: 0
        })), !0
      },
      YF = kk => {
        let {
          state: Fk,
          dispatch: Bk
        } = kk;
        return Bk(Ck(Fk, {
          anchor: Fk.doc.length
        })), !0
      },
      oF = kk => {
        let {
          state: Fk,
          dispatch: Bk
        } = kk;
        return Bk(Ck(Fk, {
          anchor: Fk.selection.main.anchor,
          head: 0
        })), !0
      },
      LF = kk => {
        let {
          state: Fk,
          dispatch: Bk
        } = kk;
        return Bk(Ck(Fk, {
          anchor: Fk.selection.main.anchor,
          head: Fk.doc.length
        })), !0
      };

    function OF(kk, Fk) {
      let {
        state: Bk
      } = kk, Rk = Bk.selection, tk = Bk.selection.hb.slice();
      for (let ak of Bk.selection.hb) {
        let Rk = Bk.doc.lineAt(ak.head);
        if (Fk ? Rk.to < kk.state.doc.length : Rk.from > 0)
          for (let Bk = ak;;) {
            let ak = kk.moveVertically(Bk, Fk);
            if (ak.head < Rk.from || ak.head > Rk.to) {
              tk.some((kk => kk.head == ak.head)) || tk.push(ak);
              break
            }
            if (ak.head == Bk.head) break;
            Bk = ak
          }
      }
      return tk.length != Rk.hb.length && (kk.dispatch(Ck(Bk, Xk.f.create(tk, tk.length - 1))), !0)
    }

    function EF(kk, Fk) {
      if (kk.state.readOnly) return !1;
      let Bk = "delete.selection",
        {
          state: Rk
        } = kk,
        tk = Rk.changeByRange((Rk => {
          let {
            from: tk,
            to: ak
          } = Rk;
          if (tk == ak) {
            let Xk = Fk(Rk);
            Xk < tk ? (Bk = "delete.backward", Xk = SF(kk, Xk, !1)) : Xk > tk && (Bk = "delete.forward", Xk = SF(kk, Xk, !0)), tk = Math.min(tk, Xk), ak = Math.max(ak, Xk)
          } else tk = SF(kk, tk, !1), ak = SF(kk, ak, !0);
          return tk == ak ? {
            range: Rk
          } : {
            changes: {
              from: tk,
              to: ak
            },
            range: Xk.f.cursor(tk, tk < Rk.head ? -1 : 1)
          }
        }));
      return !tk.changes.empty && (kk.dispatch(Rk.update(tk, {
        scrollIntoView: !0,
        userEvent: Bk,
        effects: "delete.selection" == Bk ? bk.l.announce.of(Rk.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function SF(kk, Fk, Bk) {
      if (kk instanceof bk.l)
        for (let Rk of kk.state.facet(bk.l.atomicRanges).map((Fk => Fk(kk)))) Rk.between(Fk, Fk, ((kk, Rk) => {
          kk < Fk && Rk > Fk && (Fk = Bk ? Rk : kk)
        }));
      return Fk
    }
    const NF = (kk, Fk, Bk) => EF(kk, (Rk => {
        let tk, ak, bk = Rk.from,
          {
            state: dk
          } = kk,
          sk = dk.doc.lineAt(bk);
        if (Bk && !Fk && bk > sk.from && bk < sk.from + 200 && !/[^ \t]/.test(tk = sk.text.slice(0, bk - sk.from))) {
          if ("\t" == tk[tk.length - 1]) return bk - 1;
          let kk = (0, Xk.M)(tk, dk.tabSize) % (0, wk.W)(dk) || (0, wk.W)(dk);
          for (let Fk = 0; Fk < kk && " " == tk[tk.length - 1 - Fk]; Fk++) bk--;
          ak = bk
        } else ak = (0, Xk.N)(sk.text, bk - sk.from, Fk, Fk) + sk.from, ak == bk && sk.number != (Fk ? dk.doc.lines : 1) ? ak += Fk ? 1 : -1 : !Fk && /[\ufe00-\ufe0f]/.test(sk.text.slice(ak - sk.from, bk - sk.from)) && (ak = (0, Xk.N)(sk.text, ak - sk.from, !1, !1) + sk.from);
        return ak
      })),
      HF = kk => NF(kk, !1, !0),
      uF = kk => NF(kk, !0, !1),
      MF = (kk, Fk) => EF(kk, (Bk => {
        let Rk = Bk.head,
          {
            state: tk
          } = kk,
          ak = tk.doc.lineAt(Rk),
          bk = tk.charCategorizer(Rk);
        for (let kk = null;;) {
          if (Rk == (Fk ? ak.to : ak.from)) {
            Rk == Bk.head && ak.number != (Fk ? tk.doc.lines : 1) && (Rk += Fk ? 1 : -1);
            break
          }
          let wk = (0, Xk.N)(ak.text, Rk - ak.from, Fk) + ak.from,
            dk = ak.text.slice(Math.min(Rk, wk) - ak.from, Math.max(Rk, wk) - ak.from),
            sk = bk(dk);
          if (null != kk && sk != kk) break;
          " " == dk && Rk == Bk.head || (kk = sk), Rk = wk
        }
        return Rk
      })),
      gF = kk => MF(kk, !1);

    function UF(kk) {
      let Fk = [],
        Bk = -1;
      for (let Rk of kk.selection.hb) {
        let tk = kk.doc.lineAt(Rk.from),
          ak = kk.doc.lineAt(Rk.to);
        if (Rk.empty || Rk.to != ak.from || (ak = kk.doc.lineAt(Rk.to - 1)), Bk >= tk.number) {
          let kk = Fk[Fk.length - 1];
          kk.to = ak.to, kk.hb.push(Rk)
        } else Fk.push({
          from: tk.from,
          to: ak.to,
          hb: [Rk]
        });
        Bk = ak.number + 1
      }
      return Fk
    }

    function cF(kk, Fk, Bk) {
      if (kk.readOnly) return !1;
      let Rk = [],
        tk = [];
      for (let ak of UF(kk)) {
        if (Bk ? ak.to == kk.doc.length : 0 == ak.from) continue;
        let Fk = kk.doc.lineAt(Bk ? ak.to + 1 : ak.from - 1),
          bk = Fk.length + 1;
        if (Bk) {
          Rk.push({
            from: ak.to,
            to: Fk.to
          }, {
            from: ak.from,
            insert: Fk.text + kk.lineBreak
          });
          for (let Fk of ak.hb) tk.push(Xk.f.range(Math.min(kk.doc.length, Fk.anchor + bk), Math.min(kk.doc.length, Fk.head + bk)))
        } else {
          Rk.push({
            from: Fk.from,
            to: ak.from
          }, {
            from: ak.to,
            insert: kk.lineBreak + Fk.text
          });
          for (let kk of ak.hb) tk.push(Xk.f.range(kk.anchor - bk, kk.head - bk))
        }
      }
      return !!Rk.length && (Fk(kk.update({
        changes: Rk,
        scrollIntoView: !0,
        selection: Xk.f.create(tk, kk.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function GF(kk, Fk, Bk) {
      if (kk.readOnly) return !1;
      let Rk = [];
      for (let ak of UF(kk)) Bk ? Rk.push({
        from: ak.from,
        insert: kk.doc.slice(ak.from, ak.to) + kk.lineBreak
      }) : Rk.push({
        from: ak.to,
        insert: kk.lineBreak + kk.doc.slice(ak.from, ak.to)
      });
      let tk = kk.changes(Rk);
      return Fk(kk.update({
        changes: tk,
        selection: kk.selection.map(tk, Bk ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const TF = rF(!1);

    function rF(kk) {
      return Fk => {
        let {
          state: Bk,
          dispatch: Rk
        } = Fk;
        if (Bk.readOnly) return !1;
        let tk = Bk.changeByRange((Fk => {
          let {
            from: Rk,
            to: tk
          } = Fk, ak = Bk.doc.lineAt(Rk), bk = !kk && Rk == tk && function(kk, Fk) {
            if (/\(\)|\[\]|\{\}/.test(kk.sliceDoc(Fk - 1, Fk + 1))) return {
              from: Fk,
              to: Fk
            };
            let Bk, Rk = (0, wk.rb)(kk).resolveInner(Fk),
              tk = Rk.childBefore(Fk),
              ak = Rk.childAfter(Fk);
            return tk && ak && tk.to <= Fk && ak.from >= Fk && (Bk = tk.type.prop(dk.g.closedBy)) && Bk.indexOf(ak.name) > -1 && kk.doc.lineAt(tk.to).from == kk.doc.lineAt(ak.from).from && !/\S/.test(kk.sliceDoc(tk.to, ak.from)) ? {
              from: tk.to,
              to: ak.from
            } : null
          }(Bk, Rk);
          kk && (Rk = tk = (tk <= ak.to ? ak : Bk.doc.lineAt(tk)).to);
          let sk = new wk.i(Bk, {
              simulateBreak: Rk,
              simulateDoubleBreak: !!bk
            }),
            Vk = (0, wk.Z)(sk, Rk);
          for (null == Vk && (Vk = (0, Xk.M)(/^\s*/.exec(Bk.doc.lineAt(Rk).text)[0], Bk.tabSize)); tk < ak.to && /\s/.test(ak.text[tk - ak.from]);) tk++;
          bk ? ({
            from: Rk,
            to: tk
          } = bk) : Rk > ak.from && Rk < ak.from + 100 && !/\S/.test(ak.text.slice(0, Rk)) && (Rk = ak.from);
          let Jk = ["", (0, wk.eb)(Bk, Vk)];
          return bk && Jk.push((0, wk.eb)(Bk, sk.lineIndent(ak.from, -1))), {
            changes: {
              from: Rk,
              to: tk,
              insert: Xk.B.of(Jk)
            },
            range: Xk.f.cursor(Rk + 1 + Jk[1].length)
          }
        }));
        return Rk(Bk.update(tk, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function DF(kk, Fk) {
      let Bk = -1;
      return kk.changeByRange((Rk => {
        let tk = [];
        for (let Xk = Rk.from; Xk <= Rk.to;) {
          let ak = kk.doc.lineAt(Xk);
          ak.number > Bk && (Rk.empty || Rk.to > ak.from) && (Fk(ak, tk, Rk), Bk = ak.number), Xk = ak.to + 1
        }
        let ak = kk.changes(tk);
        return {
          changes: tk,
          range: Xk.f.range(ak.mapPos(Rk.anchor, 1), ak.mapPos(Rk.head, 1))
        }
      }))
    }
    const zF = kk => {
        let {
          state: Fk,
          dispatch: Bk
        } = kk;
        return !Fk.readOnly && (Bk(Fk.update(DF(Fk, ((kk, Bk) => {
          Bk.push({
            from: kk.from,
            insert: Fk.facet(wk.fb)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      PF = kk => {
        let {
          state: Fk,
          dispatch: Bk
        } = kk;
        return !Fk.readOnly && (Bk(Fk.update(DF(Fk, ((kk, Bk) => {
          let Rk = /^\s*/.exec(kk.text)[0];
          if (!Rk) return;
          let tk = (0, Xk.M)(Rk, Fk.tabSize),
            ak = 0,
            bk = (0, wk.eb)(Fk, Math.max(0, tk - (0, wk.W)(Fk)));
          for (; ak < Rk.length && ak < bk.length && Rk.charCodeAt(ak) == bk.charCodeAt(ak);) ak++;
          Bk.push({
            from: kk.from + ak,
            to: kk.from + Rk.length,
            insert: bk.slice(ak)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      hF = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: kk => Zk(kk, (Fk => Qk(kk.state, Fk, !xk(kk)))),
        shift: kk => dF(kk, (Fk => Qk(kk.state, Fk, !xk(kk))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: kk => Zk(kk, (Fk => Qk(kk.state, Fk, xk(kk)))),
        shift: kk => dF(kk, (Fk => Qk(kk.state, Fk, xk(kk))))
      }, {
        key: "Alt-ArrowUp",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk;
          return cF(Fk, Bk, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk;
          return GF(Fk, Bk, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk;
          return cF(Fk, Bk, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk;
          return GF(Fk, Bk, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: kk => OF(kk, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: kk => OF(kk, !0)
      }, {
        key: "Escape",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk, Rk = Fk.selection, tk = null;
          return Rk.hb.length > 1 ? tk = Xk.f.create([Rk.main]) : Rk.main.empty || (tk = Xk.f.create([Xk.f.cursor(Rk.main.head)])), !!tk && (Bk(Ck(Fk, tk)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: rF(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk, Rk = UF(Fk).map((kk => {
            let {
              from: Bk,
              to: Rk
            } = kk;
            return Xk.f.range(Bk, Math.min(Rk + 1, Fk.doc.length))
          }));
          return Bk(Fk.update({
            selection: Xk.f.create(Rk),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk, Rk = qk(Fk.selection, (kk => {
            let Bk = (0, wk.rb)(Fk),
              Rk = Bk.resolveStack(kk.from, 1);
            if (kk.empty) {
              let Fk = Bk.resolveStack(kk.from, -1);
              Fk.node.from >= Rk.node.from && Fk.node.to <= Rk.node.to && (Rk = Fk)
            }
            for (let Fk = Rk; Fk; Fk = Fk.next) {
              let {
                node: Bk
              } = Fk;
              if ((Bk.from < kk.from && Bk.to >= kk.to || Bk.to > kk.to && Bk.from <= kk.from) && Fk.next) return Xk.f.range(Bk.to, Bk.from)
            }
            return kk
          }));
          return !Rk.eq(Fk.selection) && (Bk(Ck(Fk, Rk)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: PF
      }, {
        key: "Mod-]",
        run: zF
      }, {
        key: "Mod-Alt-\\",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk;
          if (Fk.readOnly) return !1;
          let Rk = Object.create(null),
            tk = new wk.i(Fk, {
              overrideIndentation: kk => {
                let Fk = Rk[kk];
                return null == Fk ? -1 : Fk
              }
            }),
            ak = DF(Fk, ((kk, Bk, ak) => {
              let Xk = (0, wk.Z)(tk, kk.from);
              if (null == Xk) return;
              /\S/.test(kk.text) || (Xk = 0);
              let bk = /^\s*/.exec(kk.text)[0],
                dk = (0, wk.eb)(Fk, Xk);
              (bk != dk || ak.from < kk.from + bk.length) && (Rk[kk.from] = Xk, Bk.push({
                from: kk.from,
                to: kk.from + bk.length,
                insert: dk
              }))
            }));
          return ak.changes.empty || Bk(Fk.update(ak, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: kk => {
          if (kk.state.readOnly) return !1;
          let {
            state: Fk
          } = kk, Bk = Fk.changes(UF(Fk).map((kk => {
            let {
              from: Bk,
              to: Rk
            } = kk;
            return Bk > 0 ? Bk-- : Rk < Fk.doc.length && Rk++, {
              from: Bk,
              to: Rk
            }
          }))), Rk = qk(Fk.selection, (Fk => {
            let Bk;
            if (kk.lineWrapping) {
              let Rk = kk.lineBlockAt(Fk.head),
                tk = kk.coordsAtPos(Fk.head, Fk.assoc || 1);
              tk && (Bk = Rk.bottom + kk.documentTop - tk.bottom + kk.defaultLineHeight / 2)
            }
            return kk.moveVertically(Fk, !0, Bk)
          })).map(Bk);
          return kk.dispatch({
            changes: Bk,
            selection: Rk,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk;
          return wF(Fk, Bk, !1)
        }
      }, {
        key: "Mod-/",
        run: kk => {
          let {
            state: Fk
          } = kk, Bk = Fk.doc.lineAt(Fk.selection.main.from), Rk = ek(kk.state, Bk.from);
          return Rk.line ? Vk(kk) : !!Rk.block && Ak(kk)
        }
      }, {
        key: "Alt-A",
        run: Jk
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: kk => (kk.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: jk,
        shift: VF,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: kk => nk(kk, !xk(kk)),
        shift: kk => AF(kk, !xk(kk)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: kk => Zk(kk, (Fk => bF(kk, Fk, !xk(kk)))),
        shift: kk => dF(kk, (Fk => bF(kk, Fk, !xk(kk)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: lk,
        shift: JF,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: kk => nk(kk, xk(kk)),
        shift: kk => AF(kk, xk(kk)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: kk => Zk(kk, (Fk => bF(kk, Fk, xk(kk)))),
        shift: kk => dF(kk, (Fk => bF(kk, Fk, xk(kk)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: FF,
        shift: yF,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: iF,
        shift: oF
      }, {
        mac: "Ctrl-ArrowUp",
        run: aF,
        shift: WF
      }, {
        key: "ArrowDown",
        run: BF,
        shift: fF,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: YF,
        shift: LF
      }, {
        mac: "Ctrl-ArrowDown",
        run: XF,
        shift: vF
      }, {
        key: "PageUp",
        run: aF,
        shift: WF
      }, {
        key: "PageDown",
        run: XF,
        shift: vF
      }, {
        key: "Home",
        run: kk => Zk(kk, (Fk => bF(kk, Fk, !1))),
        shift: kk => dF(kk, (Fk => bF(kk, Fk, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: iF,
        shift: oF
      }, {
        key: "End",
        run: kk => Zk(kk, (Fk => bF(kk, Fk, !0))),
        shift: kk => dF(kk, (Fk => bF(kk, Fk, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: YF,
        shift: LF
      }, {
        key: "Enter",
        run: TF,
        shift: TF
      }, {
        key: "Mod-a",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk;
          return Bk(Fk.update({
            selection: {
              anchor: 0,
              head: Fk.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: HF,
        shift: HF,
        preventDefault: !0
      }, {
        key: "Delete",
        run: uF,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: gF,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: kk => MF(kk, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: kk => EF(kk, (Fk => {
          let Bk = kk.moveToLineBoundary(Fk, !1).head;
          return Fk.head > Bk ? Bk : Math.max(0, Fk.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: kk => EF(kk, (Fk => {
          let Bk = kk.moveToLineBoundary(Fk, !0).head;
          return Fk.head < Bk ? Bk : Math.min(kk.state.doc.length, Fk.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: jk,
        shift: VF,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: lk,
        shift: JF
      }, {
        key: "Ctrl-p",
        run: FF,
        shift: yF
      }, {
        key: "Ctrl-n",
        run: BF,
        shift: fF
      }, {
        key: "Ctrl-a",
        run: kk => Zk(kk, (Fk => Xk.f.cursor(kk.lineBlockAt(Fk.head).from, 1))),
        shift: kk => dF(kk, (Fk => Xk.f.cursor(kk.lineBlockAt(Fk.head).from)))
      }, {
        key: "Ctrl-e",
        run: kk => Zk(kk, (Fk => Xk.f.cursor(kk.lineBlockAt(Fk.head).to, -1))),
        shift: kk => dF(kk, (Fk => Xk.f.cursor(kk.lineBlockAt(Fk.head).to)))
      }, {
        key: "Ctrl-d",
        run: uF
      }, {
        key: "Ctrl-h",
        run: HF
      }, {
        key: "Ctrl-k",
        run: kk => EF(kk, (Fk => {
          let Bk = kk.lineBlockAt(Fk.head).to;
          return Fk.head < Bk ? Bk : Math.min(kk.state.doc.length, Fk.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: gF
      }, {
        key: "Ctrl-o",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk;
          if (Fk.readOnly) return !1;
          let Rk = Fk.changeByRange((kk => ({
            changes: {
              from: kk.from,
              to: kk.to,
              insert: Xk.B.of(["", ""])
            },
            range: Xk.f.cursor(kk.from)
          })));
          return Bk(Fk.update(Rk, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: kk => {
          let {
            state: Fk,
            dispatch: Bk
          } = kk;
          if (Fk.readOnly) return !1;
          let Rk = Fk.changeByRange((kk => {
            if (!kk.empty || 0 == kk.from || kk.from == Fk.doc.length) return {
              range: kk
            };
            let Bk = kk.from,
              Rk = Fk.doc.lineAt(Bk),
              tk = Bk == Rk.from ? Bk - 1 : (0, Xk.N)(Rk.text, Bk - Rk.from, !1) + Rk.from,
              ak = Bk == Rk.to ? Bk + 1 : (0, Xk.N)(Rk.text, Bk - Rk.from, !0) + Rk.from;
            return {
              changes: {
                from: tk,
                to: ak,
                insert: Fk.doc.slice(Bk, ak).append(Fk.doc.slice(tk, Bk))
              },
              range: Xk.f.cursor(ak)
            }
          }));
          return !Rk.changes.empty && (Bk(Fk.update(Rk, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: XF
      }].map((kk => ({
        mac: kk.key,
        run: kk.run,
        shift: kk.shift
      }))))),
      qF = {
        key: "Tab",
        run: zF,
        shift: PF
      };
    var CF = Bk(40782),
      ZF = Bk(40738),
      pF = Bk(40787),
      KF = function(kk) {
        void 0 === kk && (kk = {});
        var {
          crosshairCursor: Fk = !1
        } = kk, Bk = [];
        !1 !== kk.closeBracketsKeymap && (Bk = Bk.concat(ZF.h)), !1 !== kk.defaultKeymap && (Bk = Bk.concat(hF)), !1 !== kk.searchKeymap && (Bk = Bk.concat(CF.g)), !1 !== kk.historyKeymap && (Bk = Bk.concat(hk)), !1 !== kk.foldKeymap && (Bk = Bk.concat(wk.O)), !1 !== kk.completionKeymap && (Bk = Bk.concat(ZF.n)), !1 !== kk.lintKeymap && (Bk = Bk.concat(pF.d));
        var Rk = [];
        return !1 !== kk.lineNumbers && Rk.push((0, bk.X)()), !1 !== kk.highlightActiveLineGutter && Rk.push((0, bk.M)()), !1 !== kk.highlightSpecialChars && Rk.push((0, bk.O)()), !1 !== kk.history && Rk.push(function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [Lk, Yk.of(kk), bk.l.domEventHandlers({
            beforeinput(kk, Fk) {
              let Bk = "historyUndo" == kk.inputType ? Ek : "historyRedo" == kk.inputType ? Sk : null;
              return !!Bk && (kk.preventDefault(), Bk(Fk))
            }
          })]
        }()), !1 !== kk.foldGutter && Rk.push((0, wk.L)()), !1 !== kk.drawSelection && Rk.push((0, bk.z)()), !1 !== kk.dropCursor && Rk.push((0, bk.C)()), !1 !== kk.allowMultipleSelections && Rk.push(Xk.h.allowMultipleSelections.of(!0)), !1 !== kk.indentOnInput && Rk.push((0, wk.cb)()), !1 !== kk.syntaxHighlighting && Rk.push((0, wk.mb)(wk.A, {
          fallback: !0
        })), !1 !== kk.bracketMatching && Rk.push((0, wk.t)()), !1 !== kk.closeBrackets && Rk.push((0, ZF.k)()), !1 !== kk.autocompletion && Rk.push((0, ZF.d)()), !1 !== kk.rectangularSelection && Rk.push((0, bk.bb)()), !1 !== Fk && Rk.push((0, bk.y)()), !1 !== kk.highlightActiveLine && Rk.push((0, bk.N)()), !1 !== kk.highlightSelectionMatches && Rk.push((0, CF.f)()), kk.tabSize && "number" === typeof kk.tabSize && Rk.push(wk.fb.of(" ".repeat(kk.tabSize))), Rk.concat([bk.W.of(Bk.flat())]).filter(Boolean)
      },
      xF = Bk(40765);
    const jF = "#e5c07b",
      lF = "#e06c75",
      nF = "#56b6c2",
      IF = "#ffffff",
      QF = "#abb2bf",
      kB = "#7d8799",
      FB = "#61afef",
      BB = "#98c379",
      RB = "#d19a66",
      tB = "#c678dd",
      aB = "#21252b",
      XB = "#2c313a",
      bB = "#282c34",
      wB = "#353a42",
      dB = "#3E4451",
      sB = "#528bff",
      VB = bk.l.theme({
        "&": {
          color: QF,
          backgroundColor: bB
        },
        ".cm-content": {
          caretColor: sB
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: sB
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: dB
        },
        ".cm-panels": {
          backgroundColor: aB,
          color: QF
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
          backgroundColor: bB,
          color: kB,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: XB
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: wB
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: wB,
          borderBottomColor: wB
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: XB,
            color: QF
          }
        }
      }, {
        dark: !0
      }),
      JB = wk.e.define([{
        tag: xF.n.keyword,
        color: tB
      }, {
        tag: [xF.n.name, xF.n.deleted, xF.n.character, xF.n.propertyName, xF.n.macroName],
        color: lF
      }, {
        tag: [xF.n.function(xF.n.variableName), xF.n.labelName],
        color: FB
      }, {
        tag: [xF.n.color, xF.n.constant(xF.n.name), xF.n.standard(xF.n.name)],
        color: RB
      }, {
        tag: [xF.n.definition(xF.n.name), xF.n.separator],
        color: QF
      }, {
        tag: [xF.n.typeName, xF.n.className, xF.n.number, xF.n.changed, xF.n.annotation, xF.n.modifier, xF.n.self, xF.n.namespace],
        color: jF
      }, {
        tag: [xF.n.operator, xF.n.operatorKeyword, xF.n.url, xF.n.escape, xF.n.regexp, xF.n.link, xF.n.special(xF.n.string)],
        color: nF
      }, {
        tag: [xF.n.meta, xF.n.comment],
        color: kB
      }, {
        tag: xF.n.strong,
        fontWeight: "bold"
      }, {
        tag: xF.n.emphasis,
        fontStyle: "italic"
      }, {
        tag: xF.n.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: xF.n.link,
        color: kB,
        textDecoration: "underline"
      }, {
        tag: xF.n.heading,
        fontWeight: "bold",
        color: lF
      }, {
        tag: [xF.n.atom, xF.n.bool, xF.n.special(xF.n.variableName)],
        color: RB
      }, {
        tag: [xF.n.processingInstruction, xF.n.string, xF.n.inserted],
        color: BB
      }, {
        tag: xF.n.invalid,
        color: IF
      }]),
      AB = [VB, (0, wk.mb)(JB)];
    var eB = bk.l.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class yB {
      constructor(kk, Fk) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = Fk, this.timeoutMS = Fk, this.callbacks.push(kk)
      }
      yJ() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var kk = this.callbacks.slice();
          this.callbacks.length = 0, kk.forEach((kk => {
            try {
              kk()
            } catch (Fk) {
              console.error("TimeoutLatch callback error:", Fk)
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
    class fB {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(kk) {
        this.latches.add(kk), this.start()
      }
      remove(kk) {
        this.latches.delete(kk), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((kk => {
            kk.yJ(), kk.isDone && this.remove(kk)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var mB = null,
      WB = Xk.b.define(),
      vB = [];

    function iB(kk) {
      var {
        value: Fk,
        selection: Bk,
        onChange: Rk,
        onStatistics: tk,
        onCreateEditor: wk,
        onUpdate: dk,
        extensions: sk = vB,
        autoFocus: Vk,
        theme: Jk = "light",
        height: Ak = null,
        minHeight: ek = null,
        maxHeight: yk = null,
        width: fk = null,
        minWidth: mk = null,
        maxWidth: Wk = null,
        placeholder: vk = "",
        editable: ik = !0,
        readOnly: Yk = !1,
        indentWithTab: Lk = !0,
        basicSetup: Ok = !0,
        root: Ek,
        initialState: Sk
      } = kk, [Nk, Hk] = (0, ak.useState)(), [uk, Mk] = (0, ak.useState)(), [gk, Uk] = (0, ak.useState)(), ck = (0, ak.useState)((() => ({
        current: null
      })))[0], Gk = (0, ak.useState)((() => ({
        current: null
      })))[0], Tk = bk.l.theme({
        "&": {
          height: Ak,
          minHeight: ek,
          maxHeight: yk,
          width: fk,
          minWidth: mk,
          maxWidth: Wk
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), rk = bk.l.updateListener.of((kk => {
        if (kk.docChanged && "function" === typeof Rk && !kk.transactions.some((kk => kk.annotation(WB)))) {
          ck.current ? ck.current.reset() : (ck.current = new yB((() => {
            if (Gk.current) {
              var kk = Gk.current;
              Gk.current = null, kk()
            }
            ck.current = null
          }), 200), ("undefined" === typeof window ? new fB : (mB || (mB = new fB), mB)).add(ck.current));
          var Fk = kk.state.doc.toString();
          Rk(Fk, kk)
        }
        tk && tk((kk => ({
          line: kk.state.doc.lineAt(kk.state.selection.main.from),
          lineCount: kk.state.doc.lines,
          lineBreak: kk.state.lineBreak,
          length: kk.state.doc.length,
          readOnly: kk.state.readOnly,
          tabSize: kk.state.tabSize,
          selection: kk.state.selection,
          selectionAsSingle: kk.state.selection.asSingle().main,
          hb: kk.state.selection.hb,
          selectionCode: kk.state.sliceDoc(kk.state.selection.main.from, kk.state.selection.main.to),
          selections: kk.state.selection.hb.map((Fk => kk.state.sliceDoc(Fk.from, Fk.to))),
          selectedText: kk.state.selection.hb.some((kk => !kk.empty))
        }))(kk))
      })), Dk = function(kk) {
        void 0 === kk && (kk = {});
        var {
          indentWithTab: Fk = !0,
          editable: Bk = !0,
          readOnly: Rk = !1,
          theme: tk = "light",
          placeholder: ak = "",
          basicSetup: wk = !0
        } = kk, dk = [];
        switch (Fk && dk.unshift(bk.W.of([qF])), wk && ("boolean" === typeof wk ? dk.unshift(KF()) : dk.unshift(KF(wk))), ak && dk.unshift((0, bk.$)(ak)), tk) {
          case "light":
            dk.push(eB);
            break;
          case "dark":
            dk.push(AB);
            break;
          case "none":
            break;
          default:
            dk.push(tk)
        }
        return !1 === Bk && dk.push(bk.l.editable.of(!1)), Rk && dk.push(Xk.h.readOnly.of(!0)), [...dk]
      }({
        theme: Jk,
        editable: ik,
        readOnly: Yk,
        placeholder: vk,
        indentWithTab: Lk,
        basicSetup: Ok
      }), zk = [rk, Tk, ...Dk];
      return dk && "function" === typeof dk && zk.push(bk.l.updateListener.of(dk)), zk = zk.concat(sk), (0, ak.useLayoutEffect)((() => {
        if (Nk && !gk) {
          var kk = {
              doc: Fk,
              selection: Bk,
              extensions: zk
            },
            Rk = Sk ? Xk.h.fromJSON(Sk.json, kk, Sk.fields) : Xk.h.create(kk);
          if (Uk(Rk), !uk) {
            var tk = new bk.l({
              state: Rk,
              parent: Nk,
              root: Ek
            });
            Mk(tk), wk && wk(tk, Rk)
          }
        }
        return () => {
          uk && (Uk(void 0), Mk(void 0))
        }
      }), [Nk, gk]), (0, ak.useEffect)((() => {
        kk.container && Hk(kk.container)
      }), [kk.container]), (0, ak.useEffect)((() => () => {
        uk && (uk.destroy(), Mk(void 0)), ck.current && (ck.current.cancel(), ck.current = null)
      }), [uk]), (0, ak.useEffect)((() => {
        Vk && uk && uk.focus()
      }), [Vk, uk]), (0, ak.useEffect)((() => {
        uk && uk.dispatch({
          effects: Xk.z.reconfigure.of(zk)
        })
      }), [Jk, sk, Ak, ek, yk, fk, mk, Wk, vk, ik, Yk, Lk, Ok, Rk, dk]), (0, ak.useEffect)((() => {
        if (void 0 !== Fk) {
          var kk = uk ? uk.state.doc.toString() : "";
          if (uk && Fk !== kk) {
            var Bk = () => {
              uk && Fk !== uk.state.doc.toString() && uk.dispatch({
                changes: {
                  from: 0,
                  to: uk.state.doc.toString().length,
                  insert: Fk || ""
                },
                annotations: [WB.of(!0)]
              })
            };
            ck.current && !ck.current.isDone ? Gk.current = Bk : Bk()
          }
        }
      }), [Fk, uk]), {
        state: gk,
        setState: Uk,
        view: uk,
        setView: Mk,
        container: Nk,
        setContainer: Hk
      }
    }
    var YB = Bk(1069),
      oB = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      LB = (0, ak.forwardRef)(((kk, Fk) => {
        var {
          className: Bk,
          value: Xk = "",
          selection: bk,
          extensions: wk = [],
          onChange: dk,
          onStatistics: sk,
          onCreateEditor: Vk,
          onUpdate: Jk,
          autoFocus: Ak,
          theme: ek = "light",
          height: yk,
          minHeight: fk,
          maxHeight: mk,
          width: Wk,
          minWidth: vk,
          maxWidth: ik,
          basicSetup: Yk,
          placeholder: Lk,
          indentWithTab: Ok,
          editable: Ek,
          readOnly: Sk,
          root: Nk,
          initialState: Hk
        } = kk, uk = (0, tk.e)(kk, oB), Mk = (0, ak.useRef)(null), {
          state: gk,
          view: Uk,
          container: ck,
          setContainer: Gk
        } = iB({
          root: Nk,
          value: Xk,
          autoFocus: Ak,
          theme: ek,
          height: yk,
          minHeight: fk,
          maxHeight: mk,
          width: Wk,
          minWidth: vk,
          maxWidth: ik,
          basicSetup: Yk,
          placeholder: Lk,
          indentWithTab: Ok,
          editable: Ek,
          readOnly: Sk,
          selection: bk,
          onChange: dk,
          onStatistics: sk,
          onCreateEditor: Vk,
          onUpdate: Jk,
          extensions: wk,
          initialState: Hk
        });
        (0, ak.useImperativeHandle)(Fk, (() => ({
          editor: Mk.current,
          state: gk,
          view: Uk
        })), [Mk, ck, gk, Uk]);
        var Tk = (0, ak.useCallback)((kk => {
          Mk.current = kk, Gk(kk)
        }), [Gk]);
        if ("string" !== typeof Xk) throw new Error("value must be typeof string but got " + typeof Xk);
        var rk = "string" === typeof ek ? "cm-theme-" + ek : "cm-theme";
        return (0, YB.jsx)("div", (0, Rk.d)({
          ref: Tk,
          className: rk + (Bk ? " " + Bk : "")
        }, uk))
      }));
    LB.displayName = "CodeMirror";
    const OB = LB
  },
  40755: (kk, Fk, Bk) => {
    function Rk() {
      var kk = arguments[0];
      "string" == typeof kk && (kk = document.createElement(kk));
      var Fk = 1,
        Bk = arguments[1];
      if (Bk && "object" == typeof Bk && null == Bk.nodeType && !Array.isArray(Bk)) {
        for (var Rk in Bk)
          if (Object.prototype.hasOwnProperty.call(Bk, Rk)) {
            var ak = Bk[Rk];
            "string" == typeof ak ? kk.setAttribute(Rk, ak) : null != ak && (kk[Rk] = ak)
          } Fk++
      }
      for (; Fk < arguments.length; Fk++) tk(kk, arguments[Fk]);
      return kk
    }

    function tk(kk, Fk) {
      if ("string" == typeof Fk) kk.appendChild(document.createTextNode(Fk));
      else if (null == Fk);
      else if (null != Fk.nodeType) kk.appendChild(Fk);
      else {
        if (!Array.isArray(Fk)) throw new RangeError("Unsupported child node: " + Fk);
        for (var Bk = 0; Bk < Fk.length; Bk++) tk(kk, Fk[Bk])
      }
    }
    Bk.d(Fk, {
      b: () => Rk
    })
  },
  40750: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    const Rk = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      tk = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      ak = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class Xk {
      constructor(kk, Fk) {
        this.rules = [];
        let {
          finish: Bk
        } = Fk || {};

        function Rk(kk) {
          return /^@/.test(kk) ? [kk] : kk.split(/,\s*/)
        }

        function tk(kk, Fk, ak, Xk) {
          let bk = [],
            wk = /^@(\w+)\b/.exec(kk[0]),
            dk = wk && "keyframes" == wk[1];
          if (wk && null == Fk) return ak.push(kk[0] + ";");
          for (let Bk in Fk) {
            let Xk = Fk[Bk];
            if (/&/.test(Bk)) tk(Bk.split(/,\s*/).map((Fk => kk.map((kk => Fk.replace(/&/, kk))))).reduce(((kk, Fk) => kk.concat(Fk))), Xk, ak);
            else if (Xk && "object" == typeof Xk) {
              if (!wk) throw new RangeError("The value of a property (" + Bk + ") should be a primitive value.");
              tk(Rk(Bk), Xk, bk, dk)
            } else null != Xk && bk.push(Bk.replace(/_.*/, "").replace(/[A-Z]/g, (kk => "-" + kk.toLowerCase())) + ": " + Xk + ";")
          }(bk.length || dk) && ak.push((!Bk || wk || Xk ? kk : kk.map(Bk)).join(", ") + " {" + bk.join(" ") + "}")
        }
        for (let ak in kk) tk(Rk(ak), kk[ak], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let kk = ak[Rk] || 1;
        return ak[Rk] = kk + 1, "\u037c" + kk.toString(36)
      }
      static mount(kk, Fk, Bk) {
        let Rk = kk[tk],
          ak = Bk && Bk.nonce;
        Rk ? ak && Rk.setNonce(ak) : Rk = new wk(kk, ak), Rk.mount(Array.isArray(Fk) ? Fk : [Fk], kk)
      }
    }
    let bk = new Map;
    class wk {
      constructor(kk, Fk) {
        let Bk = kk.ownerDocument || kk,
          Rk = Bk.defaultView;
        if (!kk.head && kk.adoptedStyleSheets && Rk.CSSStyleSheet) {
          let Fk = bk.get(Bk);
          if (Fk) return kk[tk] = Fk;
          this.sheet = new Rk.CSSStyleSheet, bk.set(Bk, this)
        } else this.styleTag = Bk.createElement("style"), Fk && this.styleTag.setAttribute("nonce", Fk);
        this.modules = [], kk[tk] = this
      }
      mount(kk, Fk) {
        let Bk = this.sheet,
          Rk = 0,
          tk = 0;
        for (let ak = 0; ak < kk.length; ak++) {
          let Fk = kk[ak],
            Xk = this.modules.indexOf(Fk);
          if (Xk < tk && Xk > -1 && (this.modules.splice(Xk, 1), tk--, Xk = -1), -1 == Xk) {
            if (this.modules.splice(tk++, 0, Fk), Bk)
              for (let kk = 0; kk < Fk.rules.length; kk++) Bk.insertRule(Fk.rules[kk], Rk++)
          } else {
            for (; tk < Xk;) Rk += this.modules[tk++].rules.length;
            Rk += Fk.rules.length, tk++
          }
        }
        if (Bk) Fk.adoptedStyleSheets.indexOf(this.sheet) < 0 && (Fk.adoptedStyleSheets = [this.sheet, ...Fk.adoptedStyleSheets]);
        else {
          let kk = "";
          for (let Fk = 0; Fk < this.modules.length; Fk++) kk += this.modules[Fk].getRules() + "\n";
          this.styleTag.textContent = kk;
          let Bk = Fk.head || Fk;
          this.styleTag.parentNode != Bk && Bk.insertBefore(this.styleTag, Bk.firstChild)
        }
      }
      setNonce(kk) {
        this.styleTag && this.styleTag.getAttribute("nonce") != kk && this.styleTag.setAttribute("nonce", kk)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);