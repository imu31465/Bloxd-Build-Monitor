export const id = 293;
export const ids = [293];
export const modules = {
  41309: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => uF,
      d: () => SF,
      h: () => PF,
      i: () => ak,
      l: () => bF,
      m: () => qk,
      q: () => jF
    });
    var Xk = Ik(41315),
      Tk = Ik(41319),
      ik = Ik(41335);
    class yk {
      constructor(kk, Fk, Ik, Xk) {
        this.state = kk, this.pos = Fk, this.explicit = Ik, this.view = Xk, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(kk) {
        let Fk = (0, ik.rb)(this.state).resolveInner(this.pos, -1);
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
          Ik = Math.max(Fk.from, this.pos - 250),
          Xk = Fk.text.slice(Ik - Fk.from, this.pos - Fk.from),
          Tk = Xk.search(Zk(kk, !1));
        return Tk < 0 ? null : {
          from: Ik + Tk,
          to: this.pos,
          text: Xk.slice(Tk)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(kk, Fk, Ik) {
        "abort" == kk && this.abortListeners && (this.abortListeners.push(Fk), Ik && Ik.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function lk(kk) {
      let Fk = Object.keys(kk).join(""),
        Ik = /\w/.test(Fk);
      return Ik && (Fk = Fk.replace(/\w/g, "")), `[${Ik?"\\w":""}${Fk.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function ak(kk) {
      let Fk = kk.map((kk => "string" == typeof kk ? {
          label: kk
        } : kk)),
        [Ik, Xk] = Fk.every((kk => /^\w+$/.test(kk.label))) ? [/\w*$/, /\w+$/] : function(kk) {
          let Fk = Object.create(null),
            Ik = Object.create(null);
          for (let {
              label: Tk
            }
            of kk) {
            Fk[Tk[0]] = !0;
            for (let kk = 1; kk < Tk.length; kk++) Ik[Tk[kk]] = !0
          }
          let Xk = lk(Fk) + lk(Ik) + "*$";
          return [new RegExp("^" + Xk), new RegExp(Xk)]
        }(Fk);
      return kk => {
        let Tk = kk.matchBefore(Xk);
        return Tk || kk.explicit ? {
          from: Tk ? Tk.from : kk.pos,
          options: Fk,
          validFor: Ik
        } : null
      }
    }

    function qk(kk, Fk) {
      return Ik => {
        for (let Fk = (0, ik.rb)(Ik.state).resolveInner(Ik.pos, -1); Fk; Fk = Fk.parent) {
          if (kk.indexOf(Fk.name) > -1) return null;
          if (Fk.type.isTop) break
        }
        return Fk(Ik)
      }
    }
    class Lk {
      constructor(kk, Fk, Ik, Xk) {
        this.completion = kk, this.source = Fk, this.match = Ik, this.score = Xk
      }
    }

    function tk(kk) {
      return kk.selection.main.from
    }

    function Zk(kk, Fk) {
      var Ik;
      let {
        source: Xk
      } = kk, Tk = Fk && "^" != Xk[0], ik = "$" != Xk[Xk.length - 1];
      return Tk || ik ? new RegExp(`${Tk?"^":""}(?:${Xk})${ik?"$":""}`, null !== (Ik = kk.flags) && void 0 !== Ik ? Ik : kk.ignoreCase ? "i" : "") : kk
    }
    const jk = Xk.d.define();

    function ek(kk, Fk, Ik, Tk) {
      let {
        main: ik
      } = kk.selection, yk = Ik - ik.from, lk = Tk - ik.from;
      return {
        ...kk.changeByRange((ak => {
          if (ak != ik && Ik != Tk && kk.sliceDoc(ak.from + yk, ak.from + lk) != kk.sliceDoc(Ik, Tk)) return {
            range: ak
          };
          let qk = kk.toText(Fk);
          return {
            changes: {
              from: ak.from + yk,
              to: Tk == ik.from ? ak.to : ak.from + lk,
              insert: qk
            },
            range: Xk.k.cursor(ak.from + yk + qk.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const wk = new WeakMap;

    function Hk(kk) {
      if (!Array.isArray(kk)) return kk;
      let Fk = wk.get(kk);
      return Fk || wk.set(kk, Fk = ak(kk)), Fk
    }
    const Jk = Xk.F.define(),
      xk = Xk.F.define();
    class Pk {
      constructor(kk) {
        this.pattern = kk, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let Fk = 0; Fk < kk.length;) {
          let Ik = (0, Xk.M)(kk, Fk),
            Tk = (0, Xk.O)(Ik);
          this.chars.push(Ik);
          let ik = kk.slice(Fk, Fk + Tk),
            yk = ik.toUpperCase();
          this.folded.push((0, Xk.M)(yk == ik ? ik.toLowerCase() : yk, 0)), Fk += Tk
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
          folded: Ik,
          any: Tk,
          precise: ik,
          byWord: yk
        } = this;
        if (1 == Fk.length) {
          let Tk = (0, Xk.M)(kk, 0),
            ik = (0, Xk.O)(Tk),
            yk = ik == kk.length ? 0 : -100;
          if (Tk == Fk[0]);
          else {
            if (Tk != Ik[0]) return null;
            yk += -200
          }
          return this.ret(yk, [0, ik])
        }
        let lk = kk.indexOf(this.pattern);
        if (0 == lk) return this.ret(kk.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let ak = Fk.length,
          qk = 0;
        if (lk < 0) {
          for (let ik = 0, yk = Math.min(kk.length, 200); ik < yk && qk < ak;) {
            let yk = (0, Xk.M)(kk, ik);
            yk != Fk[qk] && yk != Ik[qk] || (Tk[qk++] = ik), ik += (0, Xk.O)(yk)
          }
          if (qk < ak) return null
        }
        let Lk = 0,
          tk = 0,
          Zk = !1,
          jk = 0,
          ek = -1,
          wk = -1,
          Hk = /[a-z]/.test(kk),
          Jk = !0;
        for (let xk = 0, Pk = Math.min(kk.length, 200), Kk = 0; xk < Pk && tk < ak;) {
          let Tk = (0, Xk.M)(kk, xk);
          lk < 0 && (Lk < ak && Tk == Fk[Lk] && (ik[Lk++] = xk), jk < ak && (Tk == Fk[jk] || Tk == Ik[jk] ? (0 == jk && (ek = xk), wk = xk + 1, jk++) : jk = 0));
          let qk, Pk = Tk < 255 ? Tk >= 48 && Tk <= 57 || Tk >= 97 && Tk <= 122 ? 2 : Tk >= 65 && Tk <= 90 ? 1 : 0 : (qk = (0, Xk.db)(Tk)) != qk.toLowerCase() ? 1 : qk != qk.toUpperCase() ? 2 : 0;
          (!xk || 1 == Pk && Hk || 0 == Kk && 0 != Pk) && (Fk[tk] == Tk || Ik[tk] == Tk && (Zk = !0) ? yk[tk++] = xk : yk.length && (Jk = !1)), Kk = Pk, xk += (0, Xk.O)(Tk)
        }
        return tk == ak && 0 == yk[0] && Jk ? this.result((Zk ? -200 : 0) - 100, yk, kk) : jk == ak && 0 == ek ? this.ret(-200 - kk.length + (wk == kk.length ? 0 : -100), [0, wk]) : lk > -1 ? this.ret(-700 - kk.length, [lk, lk + this.pattern.length]) : jk == ak ? this.ret(-900 - kk.length, [ek, wk]) : tk == ak ? this.result((Zk ? -200 : 0) - 100 - 700 + (Jk ? 0 : -1100), yk, kk) : 2 == Fk.length ? null : this.result((Tk[0] ? -700 : 0) - 200 - 1100, Tk, kk)
      }
      result(kk, Fk, Ik) {
        let Tk = [],
          ik = 0;
        for (let yk of Fk) {
          let kk = yk + (this.astral ? (0, Xk.O)((0, Xk.M)(Ik, yk)) : 1);
          ik && Tk[ik - 1] == yk ? Tk[ik - 1] = kk : (Tk[ik++] = yk, Tk[ik++] = kk)
        }
        return this.ret(kk - Ik.length, Tk)
      }
    }
    class Kk {
      constructor(kk) {
        this.pattern = kk, this.matched = [], this.score = 0, this.folded = kk.toLowerCase()
      }
      match(kk) {
        if (kk.length < this.pattern.length) return null;
        let Fk = kk.slice(0, this.pattern.length),
          Ik = Fk == this.pattern ? 0 : Fk.toLowerCase() == this.folded ? -200 : null;
        return null == Ik ? null : (this.matched = [0, Fk.length], this.score = Ik + (kk.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const Qk = Xk.p.define({
      combine: kk => (0, Xk.R)(kk, {
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
        positionInfo: Vk,
        filterStrict: !1,
        compareCompletions: (kk, Fk) => (kk.sortText || kk.label).localeCompare(Fk.sortText || Fk.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (kk, Fk) => kk && Fk,
        closeOnBlur: (kk, Fk) => kk && Fk,
        icons: (kk, Fk) => kk && Fk,
        tooltipClass: (kk, Fk) => Ik => sk(kk(Ik), Fk(Ik)),
        optionClass: (kk, Fk) => Ik => sk(kk(Ik), Fk(Ik)),
        addToOptions: (kk, Fk) => kk.concat(Fk),
        filterStrict: (kk, Fk) => kk || Fk
      })
    });

    function sk(kk, Fk) {
      return kk ? Fk ? kk + " " + Fk : kk : Fk
    }

    function Vk(kk, Fk, Ik, Xk, ik, yk) {
      let lk, ak, qk = kk.textDirection == Tk.f.RTL,
        Lk = qk,
        tk = !1,
        Zk = "top",
        jk = Fk.left - ik.left,
        ek = ik.right - Fk.right,
        wk = Xk.right - Xk.left,
        Hk = Xk.bottom - Xk.top;
      if (Lk && jk < Math.min(wk, ek) ? Lk = !1 : !Lk && ek < Math.min(wk, jk) && (Lk = !0), wk <= (Lk ? jk : ek)) lk = Math.max(ik.top, Math.min(Ik.top, ik.bottom - Hk)) - Fk.top, ak = Math.min(400, Lk ? jk : ek);
      else {
        tk = !0, ak = Math.min(400, (qk ? Fk.right : ik.right - Fk.left) - 30);
        let kk = ik.bottom - Fk.bottom;
        kk >= Hk || kk > Fk.top ? lk = Ik.bottom - Fk.top : (Zk = "bottom", lk = Fk.bottom - Ik.top)
      }
      return {
        style: `${Zk}: ${lk/((Fk.bottom-Fk.top)/yk.offsetHeight)}px; max-width: ${ak/((Fk.right-Fk.left)/yk.offsetWidth)}px`,
        class: "cm-completionInfo-" + (tk ? qk ? "left-narrow" : "right-narrow" : Lk ? "left" : "right")
      }
    }
    const zk = Xk.F.define();

    function Sk(kk, Fk, Ik) {
      if (kk <= Ik) return {
        from: 0,
        to: kk
      };
      if (Fk < 0 && (Fk = 0), Fk <= kk >> 1) {
        let kk = Math.floor(Fk / Ik);
        return {
          from: kk * Ik,
          to: (kk + 1) * Ik
        }
      }
      let Xk = Math.floor((kk - Fk) / Ik);
      return {
        from: kk - (Xk + 1) * Ik,
        to: kk - Xk * Ik
      }
    }
    class vk {
      constructor(kk, Fk, Ik) {
        this.view = kk, this.stateField = Fk, this.applyCompletion = Ik, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: kk => this.placeInfo(kk),
          key: this
        }, this.space = null, this.currentClass = "";
        let Xk = kk.state.field(Fk),
          {
            options: Tk,
            selected: ik
          } = Xk.open,
          yk = kk.state.facet(Qk);
        this.optionContent = function(kk) {
          let Fk = kk.addToOptions.slice();
          return kk.icons && Fk.push({
            render(kk) {
              let Fk = document.createElement("div");
              return Fk.classList.add("cm-completionIcon"), kk.type && Fk.classList.add(...kk.type.split(/\s+/g).map((kk => "cm-completionIcon-" + kk))), Fk.setAttribute("aria-hidden", "true"), Fk
            },
            position: 20
          }), Fk.push({
            render(kk, Fk, Ik, Xk) {
              let Tk = document.createElement("span");
              Tk.className = "cm-completionLabel";
              let ik = kk.displayLabel || kk.label,
                yk = 0;
              for (let lk = 0; lk < Xk.length;) {
                let kk = Xk[lk++],
                  Fk = Xk[lk++];
                kk > yk && Tk.appendChild(document.createTextNode(ik.slice(yk, kk)));
                let Ik = Tk.appendChild(document.createElement("span"));
                Ik.appendChild(document.createTextNode(ik.slice(kk, Fk))), Ik.className = "cm-completionMatchedText", yk = Fk
              }
              return yk < ik.length && Tk.appendChild(document.createTextNode(ik.slice(yk))), Tk
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
        }(yk), this.optionClass = yk.optionClass, this.tooltipClass = yk.tooltipClass, this.range = Sk(Tk.length, ik, yk.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(kk.state), this.dom.addEventListener("mousedown", (Ik => {
          let {
            options: Xk
          } = kk.state.field(Fk).open;
          for (let Fk, Tk = Ik.target; Tk && Tk != this.dom; Tk = Tk.parentNode)
            if ("LI" == Tk.nodeName && (Fk = /-(\d+)$/.exec(Tk.id)) && +Fk[1] < Xk.length) return this.applyCompletion(kk, Xk[+Fk[1]]), void Ik.preventDefault();
          if (Ik.target == this.list) {
            let Fk = this.list.classList.contains("cm-completionListIncompleteTop") && Ik.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && Ik.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != Fk && (kk.dispatch({
              effects: zk.of(Fk)
            }), Ik.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (Fk => {
          let Ik = kk.state.field(this.stateField, !1);
          Ik && Ik.tooltip && kk.state.facet(Qk).closeOnBlur && Fk.relatedTarget != kk.contentDOM && kk.dispatch({
            effects: xk.of(null)
          })
        })), this.showOptions(Tk, Xk.id)
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
        let Ik = kk.state.field(this.stateField),
          Xk = kk.startState.field(this.stateField);
        if (this.updateTooltipClass(kk.state), Ik != Xk) {
          let {
            options: Tk,
            selected: ik,
            disabled: yk
          } = Ik.open;
          Xk.open && Xk.open.options == Tk || (this.range = Sk(Tk.length, ik, kk.state.facet(Qk).maxRenderedOptions), this.showOptions(Tk, Ik.id)), this.updateSel(), yk != (null === (Fk = Xk.open) || void 0 === Fk ? void 0 : Fk.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!yk)
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
        (Fk.selected > -1 && Fk.selected < this.range.from || Fk.selected >= this.range.to) && (this.range = Sk(Fk.options.length, Fk.selected, this.view.state.facet(Qk).maxRenderedOptions), this.showOptions(Fk.options, kk.id));
        let Ik = this.updateSelectedOption(Fk.selected);
        if (Ik) {
          this.destroyInfo();
          let {
            completion: Xk
          } = Fk.options[Fk.selected], {
            info: ik
          } = Xk;
          if (!ik) return;
          let yk = "string" === typeof ik ? document.createTextNode(ik) : ik(Xk);
          if (!yk) return;
          "then" in yk ? yk.then((Fk => {
            Fk && this.view.state.field(this.stateField, !1) == kk && this.addInfoPane(Fk, Xk)
          })).catch((kk => (0, Tk.V)(this.view.state, kk, "completion info"))) : (this.addInfoPane(yk, Xk), Ik.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(kk, Fk) {
        this.destroyInfo();
        let Ik = this.info = document.createElement("div");
        if (Ik.className = "cm-tooltip cm-completionInfo", Ik.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != kk.nodeType) Ik.appendChild(kk), this.infoDestroy = null;
        else {
          let {
            dom: Fk,
            destroy: Xk
          } = kk;
          Ik.appendChild(Fk), this.infoDestroy = Xk || null
        }
        this.dom.appendChild(Ik), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(kk) {
        let Fk = null;
        for (let Ik = this.list.firstChild, Xk = this.range.from; Ik; Ik = Ik.nextSibling, Xk++) "LI" == Ik.nodeName && Ik.id ? Xk == kk ? Ik.hasAttribute("aria-selected") || (Ik.setAttribute("aria-selected", "true"), Fk = Ik) : Ik.hasAttribute("aria-selected") && (Ik.removeAttribute("aria-selected"), Ik.removeAttribute("aria-describedby")) : Xk--;
        return Fk && function(kk, Fk) {
          let Ik = kk.getBoundingClientRect(),
            Xk = Fk.getBoundingClientRect(),
            Tk = Ik.height / kk.offsetHeight;
          Xk.top < Ik.top ? kk.scrollTop -= (Ik.top - Xk.top) / Tk : Xk.bottom > Ik.bottom && (kk.scrollTop += (Xk.bottom - Ik.bottom) / Tk)
        }(this.list, Fk), Fk
      }
      measureInfo() {
        let kk = this.dom.querySelector("[aria-selected]");
        if (!kk || !this.info) return null;
        let Fk = this.dom.getBoundingClientRect(),
          Ik = this.info.getBoundingClientRect(),
          Xk = kk.getBoundingClientRect(),
          Tk = this.space;
        if (!Tk) {
          let kk = this.dom.ownerDocument.documentElement;
          Tk = {
            left: 0,
            top: 0,
            right: kk.clientWidth,
            bottom: kk.clientHeight
          }
        }
        return Xk.top > Math.min(Tk.bottom, Fk.bottom) - 10 || Xk.bottom < Math.max(Tk.top, Fk.top) + 10 ? null : this.view.state.facet(Qk).positionInfo(this.view, Fk, Xk, Ik, Tk, this.dom)
      }
      placeInfo(kk) {
        this.info && (kk ? (kk.style && (this.info.style.cssText = kk.style), this.info.className = "cm-tooltip cm-completionInfo " + (kk.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(kk, Fk, Ik) {
        const Xk = document.createElement("ul");
        Xk.id = Fk, Xk.setAttribute("role", "listbox"), Xk.setAttribute("aria-expanded", "true"), Xk.setAttribute("aria-label", this.view.state.phrase("Completions")), Xk.addEventListener("mousedown", (kk => {
          kk.target == Xk && kk.preventDefault()
        }));
        let Tk = null;
        for (let ik = Ik.from; ik < Ik.to; ik++) {
          let {
            completion: yk,
            match: lk
          } = kk[ik], {
            section: ak
          } = yk;
          if (ak) {
            let kk = "string" == typeof ak ? ak : ak.name;
            if (kk != Tk && (ik > Ik.from || 0 == Ik.from))
              if (Tk = kk, "string" != typeof ak && ak.header) Xk.appendChild(ak.header(ak));
              else {
                Xk.appendChild(document.createElement("completion-section")).textContent = kk
              }
          }
          const qk = Xk.appendChild(document.createElement("li"));
          qk.id = Fk + "-" + ik, qk.setAttribute("role", "option");
          let Lk = this.optionClass(yk);
          Lk && (qk.className = Lk);
          for (let kk of this.optionContent) {
            let Fk = kk(yk, this.view.state, this.view, lk);
            Fk && qk.appendChild(Fk)
          }
        }
        return Ik.from && Xk.classList.add("cm-completionListIncompleteTop"), Ik.to < kk.length && Xk.classList.add("cm-completionListIncompleteBottom"), Xk
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Ek(kk, Fk) {
      return Ik => new vk(Ik, kk, Fk)
    }

    function Ok(kk) {
      return 100 * (kk.boost || 0) + (kk.apply ? 10 : 0) + (kk.info ? 5 : 0) + (kk.type ? 1 : 0)
    }
    class nk {
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        this.options = kk, this.attrs = Fk, this.tooltip = Ik, this.timestamp = Xk, this.selected = Tk, this.disabled = ik
      }
      setSelected(kk, Fk) {
        return kk == this.selected || kk >= this.options.length ? this : new nk(this.options, bk(Fk, kk), this.tooltip, this.timestamp, kk, this.disabled)
      }
      static build(kk, Fk, Ik, Xk, Tk, ik) {
        if (Xk && !ik && kk.some((kk => kk.isPending))) return Xk.setDisabled();
        let yk = function(kk, Fk) {
          let Ik = [],
            Xk = null,
            Tk = null,
            ik = kk => {
              Ik.push(kk);
              let {
                section: Fk
              } = kk.completion;
              if (Fk) {
                Xk || (Xk = []);
                let kk = "string" == typeof Fk ? Fk : Fk.name;
                Xk.some((Fk => Fk.name == kk)) || Xk.push("string" == typeof Fk ? {
                  name: kk
                } : Fk)
              }
            },
            yk = Fk.facet(Qk);
          for (let tk of kk)
            if (tk.hasResult()) {
              let kk = tk.result.getMatch;
              if (!1 === tk.result.filter)
                for (let Fk of tk.result.options) ik(new Lk(Fk, tk.source, kk ? kk(Fk) : [], 1e9 - Ik.length));
              else {
                let Ik, Xk = Fk.sliceDoc(tk.from, tk.to),
                  lk = yk.filterStrict ? new Kk(Xk) : new Pk(Xk);
                for (let Fk of tk.result.options)
                  if (Ik = lk.match(Fk.label)) {
                    let Xk = Fk.displayLabel ? kk ? kk(Fk, Ik.matched) : [] : Ik.matched,
                      yk = Ik.score + (Fk.boost || 0);
                    if (ik(new Lk(Fk, tk.source, Xk, yk)), "object" == typeof Fk.section && "dynamic" === Fk.section.rank) {
                      let {
                        name: kk
                      } = Fk.section;
                      Tk || (Tk = Object.create(null)), Tk[kk] = Math.max(yk, Tk[kk] || -1e9)
                    }
                  }
              }
            } if (Xk) {
            let kk = Object.create(null),
              Fk = 0,
              ik = (kk, Fk) => ("dynamic" === kk.rank && "dynamic" === Fk.rank ? Tk[Fk.name] - Tk[kk.name] : 0) || ("number" == typeof kk.rank ? kk.rank : 1e9) - ("number" == typeof Fk.rank ? Fk.rank : 1e9) || (kk.name < Fk.name ? -1 : 1);
            for (let Ik of Xk.sort(ik)) Fk -= 1e5, kk[Ik.name] = Fk;
            for (let Xk of Ik) {
              let {
                section: Fk
              } = Xk.completion;
              Fk && (Xk.score += kk["string" == typeof Fk ? Fk : Fk.name])
            }
          }
          let lk = [],
            ak = null,
            qk = yk.compareCompletions;
          for (let Lk of Ik.sort(((kk, Fk) => Fk.score - kk.score || qk(kk.completion, Fk.completion)))) {
            let kk = Lk.completion;
            !ak || ak.label != kk.label || ak.detail != kk.detail || null != ak.type && null != kk.type && ak.type != kk.type || ak.apply != kk.apply || ak.boost != kk.boost ? lk.push(Lk) : Ok(Lk.completion) > Ok(ak) && (lk[lk.length - 1] = Lk), ak = Lk.completion
          }
          return lk
        }(kk, Fk);
        if (!yk.length) return Xk && kk.some((kk => kk.isPending)) ? Xk.setDisabled() : null;
        let lk = Fk.facet(Qk).selectOnOpen ? 0 : -1;
        if (Xk && Xk.selected != lk && -1 != Xk.selected) {
          let kk = Xk.options[Xk.selected].completion;
          for (let Fk = 0; Fk < yk.length; Fk++)
            if (yk[Fk].completion == kk) {
              lk = Fk;
              break
            }
        }
        return new nk(yk, bk(Ik, lk), {
          pos: kk.reduce(((kk, Fk) => Fk.hasResult() ? Math.min(kk, Fk.from) : kk), 1e8),
          create: Bk,
          above: Tk.aboveCursor
        }, Xk ? Xk.timestamp : Date.now(), lk, !1)
      }
      map(kk) {
        return new nk(this.options, this.attrs, {
          ...this.tooltip,
          pos: kk.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new nk(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class Gk {
      constructor(kk, Fk, Ik) {
        this.active = kk, this.id = Fk, this.open = Ik
      }
      static start() {
        return new Gk(Rk, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(kk) {
        let {
          state: Fk
        } = kk, Ik = Fk.facet(Qk), Xk = (Ik.override || Fk.languageDataAt("autocomplete", tk(Fk)).map(Hk)).map((Fk => (this.active.find((kk => kk.source == Fk)) || new Ck(Fk, this.active.some((kk => 0 != kk.state)) ? 1 : 0)).update(kk, Ik)));
        Xk.length == this.active.length && Xk.every(((kk, Fk) => kk == this.active[Fk])) && (Xk = this.active);
        let Tk = this.open,
          ik = kk.effects.some((kk => kk.is(ck)));
        Tk && kk.docChanged && (Tk = Tk.map(kk.changes)), kk.selection || Xk.some((Fk => Fk.hasResult() && kk.changes.touchesRange(Fk.from, Fk.to))) || ! function(kk, Fk) {
          if (kk == Fk) return !0;
          for (let Ik = 0, Xk = 0;;) {
            for (; Ik < kk.length && !kk[Ik].hasResult();) Ik++;
            for (; Xk < Fk.length && !Fk[Xk].hasResult();) Xk++;
            let Tk = Ik == kk.length,
              ik = Xk == Fk.length;
            if (Tk || ik) return Tk == ik;
            if (kk[Ik++].result != Fk[Xk++].result) return !1
          }
        }(Xk, this.active) || ik ? Tk = nk.build(Xk, Fk, this.id, Tk, Ik, ik) : Tk && Tk.disabled && !Xk.some((kk => kk.isPending)) && (Tk = null), !Tk && Xk.every((kk => !kk.isPending)) && Xk.some((kk => kk.hasResult())) && (Xk = Xk.map((kk => kk.hasResult() ? new Ck(kk.source, 0) : kk)));
        for (let yk of kk.effects) yk.is(zk) && (Tk = Tk && Tk.setSelected(yk.value, this.id));
        return Xk == this.active && Tk == this.open ? this : new Gk(Xk, this.id, Tk)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? pk : uk
      }
    }
    const pk = {
        "aria-autocomplete": "list"
      },
      uk = {};

    function bk(kk, Fk) {
      let Ik = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": kk
      };
      return Fk > -1 && (Ik["aria-activedescendant"] = kk + "-" + Fk), Ik
    }
    const Rk = [];

    function Uk(kk, Fk) {
      if (kk.isUserEvent("input.complete")) {
        let Ik = kk.annotation(jk);
        if (Ik && Fk.activateOnCompletion(Ik)) return 12
      }
      let Ik = kk.isUserEvent("input.type");
      return Ik && Fk.activateOnTyping ? 5 : Ik ? 1 : kk.isUserEvent("delete.backward") ? 2 : kk.selection ? 8 : kk.docChanged ? 16 : 0
    }
    class Ck {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = kk, this.state = Fk, this.explicit = Ik
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(kk, Fk) {
        let Ik = Uk(kk, Fk),
          Xk = this;
        (8 & Ik || 16 & Ik && this.touches(kk)) && (Xk = new Ck(Xk.source, 0)), 4 & Ik && 0 == Xk.state && (Xk = new Ck(this.source, 1)), Xk = Xk.updateFor(kk, Ik);
        for (let Tk of kk.effects)
          if (Tk.is(Jk)) Xk = new Ck(Xk.source, 1, Tk.value);
          else if (Tk.is(xk)) Xk = new Ck(Xk.source, 0);
        else if (Tk.is(ck))
          for (let kk of Tk.value) kk.source == Xk.source && (Xk = kk);
        return Xk
      }
      updateFor(kk, Fk) {
        return this.map(kk.changes)
      }
      map(kk) {
        return this
      }
      touches(kk) {
        return kk.changes.touchesRange(tk(kk.state))
      }
    }
    class Nk extends Ck {
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        super(kk, 3, Fk), this.limit = Ik, this.result = Xk, this.from = Tk, this.to = ik
      }
      hasResult() {
        return !0
      }
      updateFor(kk, Fk) {
        var Ik;
        if (!(3 & Fk)) return this.map(kk.changes);
        let Xk = this.result;
        Xk.map && !kk.changes.empty && (Xk = Xk.map(Xk, kk.changes));
        let Tk = kk.changes.mapPos(this.from),
          ik = kk.changes.mapPos(this.to, 1),
          lk = tk(kk.state);
        if (lk > ik || !Xk || 2 & Fk && (tk(kk.startState) == this.from || lk < this.limit)) return new Ck(this.source, 4 & Fk ? 1 : 0);
        let ak = kk.changes.mapPos(this.limit);
        return function(kk, Fk, Ik, Xk) {
          if (!kk) return !1;
          let Tk = Fk.sliceDoc(Ik, Xk);
          return "function" == typeof kk ? kk(Tk, Ik, Xk, Fk) : Zk(kk, !0).test(Tk)
        }(Xk.validFor, kk.state, Tk, ik) ? new Nk(this.source, this.explicit, ak, Xk, Tk, ik) : Xk.update && (Xk = Xk.update(Xk, Tk, ik, new yk(kk.state, lk, !1))) ? new Nk(this.source, this.explicit, ak, Xk, Xk.from, null !== (Ik = Xk.to) && void 0 !== Ik ? Ik : tk(kk.state)) : new Ck(this.source, 1, this.explicit)
      }
      map(kk) {
        if (kk.empty) return this;
        return (this.result.map ? this.result.map(this.result, kk) : this.result) ? new Nk(this.source, this.explicit, kk.mapPos(this.limit), this.result, kk.mapPos(this.from), kk.mapPos(this.to, 1)) : new Ck(this.source, 0)
      }
      touches(kk) {
        return kk.changes.touchesRange(this.from, this.to)
      }
    }
    const ck = Xk.F.define({
        map: (kk, Fk) => kk.map((kk => kk.map(Fk)))
      }),
      Wk = Xk.I.define({
        create: () => Gk.start(),
        update: (kk, Fk) => kk.update(Fk),
        provide: kk => [Tk.jb.from(kk, (kk => kk.tooltip)), Tk.i.contentAttributes.from(kk, (kk => kk.attrs))]
      });

    function fk(kk, Fk) {
      const Ik = Fk.completion.apply || Fk.completion.label;
      let Xk = kk.state.field(Wk).active.find((kk => kk.source == Fk.source));
      return Xk instanceof Nk && ("string" == typeof Ik ? kk.dispatch({
        ...ek(kk.state, Ik, Xk.from, Xk.to),
        annotations: jk.of(Fk.completion)
      }) : Ik(kk, Fk.completion, Xk.from, Xk.to), !0)
    }
    const Bk = Ek(Wk, fk);

    function dk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return Ik => {
        let Xk = Ik.state.field(Wk, !1);
        if (!Xk || !Xk.open || Xk.open.disabled || Date.now() - Xk.open.timestamp < Ik.state.facet(Qk).interactionDelay) return !1;
        let ik, yk = 1;
        "page" == Fk && (ik = (0, Tk.D)(Ik, Xk.open.tooltip)) && (yk = Math.max(2, Math.floor(ik.dom.offsetHeight / ik.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: lk
        } = Xk.open.options, ak = Xk.open.selected > -1 ? Xk.open.selected + yk * (kk ? 1 : -1) : kk ? 0 : lk - 1;
        return ak < 0 ? ak = "page" == Fk ? 0 : lk - 1 : ak >= lk && (ak = "page" == Fk ? lk - 1 : 0), Ik.dispatch({
          effects: zk.of(ak)
        }), !0
      }
    }
    const Yk = kk => !!kk.state.field(Wk, !1) && (kk.dispatch({
      effects: Jk.of(!0)
    }), !0);
    class Ak {
      constructor(kk, Fk) {
        this.active = kk, this.context = Fk, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const gk = Tk.l.fromClass(class {
        constructor(kk) {
          this.view = kk, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let Fk of kk.state.field(Wk).active) Fk.isPending && this.startQuery(Fk)
        }
        update(kk) {
          let Fk = kk.state.field(Wk),
            Ik = kk.state.facet(Qk);
          if (!kk.selectionSet && !kk.docChanged && kk.startState.field(Wk) == Fk) return;
          let Xk = kk.transactions.some((kk => {
            let Fk = Uk(kk, Ik);
            return 8 & Fk || (kk.selection || kk.docChanged) && !(3 & Fk)
          }));
          for (let lk = 0; lk < this.running.length; lk++) {
            let Fk = this.running[lk];
            if (Xk || Fk.context.abortOnDocChange && kk.docChanged || Fk.updates.length + kk.transactions.length > 50 && Date.now() - Fk.time > 1e3) {
              for (let kk of Fk.context.abortListeners) try {
                kk()
              } catch (yk) {
                (0, Tk.V)(this.view.state, yk)
              }
              Fk.context.abortListeners = null, this.running.splice(lk--, 1)
            } else Fk.updates.push(...kk.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), kk.transactions.some((kk => kk.effects.some((kk => kk.is(Jk))))) && (this.pendingStart = !0);
          let ik = this.pendingStart ? 50 : Ik.activateOnTypingDelay;
          if (this.debounceUpdate = Fk.active.some((kk => kk.isPending && !this.running.some((Fk => Fk.active.source == kk.source)))) ? setTimeout((() => this.startUpdate()), ik) : -1, 0 != this.composing)
            for (let Tk of kk.transactions) Tk.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && Tk.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: kk
          } = this.view, Fk = kk.field(Wk);
          for (let Ik of Fk.active) Ik.isPending && !this.running.some((kk => kk.active.source == Ik.source)) && this.startQuery(Ik);
          this.running.length && Fk.open && Fk.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Qk).updateSyncTime))
        }
        startQuery(kk) {
          let {
            state: Fk
          } = this.view, Ik = tk(Fk), Xk = new yk(Fk, Ik, kk.explicit, this.view), ik = new Ak(kk, Xk);
          this.running.push(ik), Promise.resolve(kk.source(Xk)).then((kk => {
            ik.context.aborted || (ik.done = kk || null, this.scheduleAccept())
          }), (kk => {
            this.view.dispatch({
              effects: xk.of(null)
            }), (0, Tk.V)(this.view.state, kk)
          }))
        }
        scheduleAccept() {
          this.running.every((kk => void 0 !== kk.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Qk).updateSyncTime))
        }
        accept() {
          var kk;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let Fk = [],
            Ik = this.view.state.facet(Qk),
            Xk = this.view.state.field(Wk);
          for (let Tk = 0; Tk < this.running.length; Tk++) {
            let ik = this.running[Tk];
            if (void 0 === ik.done) continue;
            if (this.running.splice(Tk--, 1), ik.done) {
              let Xk = tk(ik.updates.length ? ik.updates[0].startState : this.view.state),
                Tk = Math.min(Xk, ik.done.from + (ik.active.explicit ? 0 : 1)),
                yk = new Nk(ik.active.source, ik.active.explicit, Tk, ik.done, ik.done.from, null !== (kk = ik.done.to) && void 0 !== kk ? kk : Xk);
              for (let kk of ik.updates) yk = yk.update(kk, Ik);
              if (yk.hasResult()) {
                Fk.push(yk);
                continue
              }
            }
            let yk = Xk.active.find((kk => kk.source == ik.active.source));
            if (yk && yk.isPending)
              if (null == ik.done) {
                let kk = new Ck(ik.active.source, 0);
                for (let Fk of ik.updates) kk = kk.update(Fk, Ik);
                kk.isPending || Fk.push(kk)
              } else this.startQuery(yk)
          }(Fk.length || Xk.open && Xk.open.disabled) && this.view.dispatch({
            effects: ck.of(Fk)
          })
        }
      }, {
        eventHandlers: {
          blur(kk) {
            let Fk = this.view.state.field(Wk, !1);
            if (Fk && Fk.tooltip && this.view.state.facet(Qk).closeOnBlur) {
              let Ik = Fk.open && (0, Tk.D)(this.view, Fk.open.tooltip);
              Ik && Ik.dom.contains(kk.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: xk.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: Jk.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      mk = "object" == typeof navigator && /Win/.test(navigator.platform),
      hk = Xk.u.highest(Tk.i.domEventHandlers({
        keydown(kk, Fk) {
          let Ik = Fk.state.field(Wk, !1);
          if (!Ik || !Ik.open || Ik.open.disabled || Ik.open.selected < 0 || kk.key.length > 1 || kk.ctrlKey && (!mk || !kk.altKey) || kk.metaKey) return !1;
          let Xk = Ik.open.options[Ik.open.selected],
            Tk = Ik.active.find((kk => kk.source == Xk.source)),
            ik = Xk.completion.commitCharacters || Tk.result.commitCharacters;
          return ik && ik.indexOf(kk.key) > -1 && fk(Fk, Xk), !1
        }
      })),
      rk = Tk.i.baseTheme({
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
    class Dk {
      constructor(kk, Fk, Ik, Xk) {
        this.field = kk, this.line = Fk, this.from = Ik, this.to = Xk
      }
    }
    class Mk {
      constructor(kk, Fk, Ik) {
        this.field = kk, this.from = Fk, this.to = Ik
      }
      map(kk) {
        let Fk = kk.mapPos(this.from, -1, Xk.s.TrackDel),
          Ik = kk.mapPos(this.to, 1, Xk.s.TrackDel);
        return null == Fk || null == Ik ? null : new Mk(this.field, Fk, Ik)
      }
    }
    class kF {
      constructor(kk, Fk) {
        this.lines = kk, this.fieldPositions = Fk
      }
      instantiate(kk, Fk) {
        let Ik = [],
          Xk = [Fk],
          Tk = kk.doc.lineAt(Fk),
          yk = /^\s*/.exec(Tk.text)[0];
        for (let ak of this.lines) {
          if (Ik.length) {
            let Ik = yk,
              Tk = /^\t*/.exec(ak)[0].length;
            for (let Fk = 0; Fk < Tk; Fk++) Ik += kk.facet(ik.fb);
            Xk.push(Fk + Ik.length - Tk), ak = Ik + ak.slice(Tk)
          }
          Ik.push(ak), Fk += ak.length + 1
        }
        let lk = this.fieldPositions.map((kk => new Mk(kk.field, Xk[kk.line] + kk.from, Xk[kk.line] + kk.to)));
        return {
          text: Ik,
          nZ: lk
        }
      }
      static parse(kk) {
        let Fk, Ik = [],
          Xk = [],
          Tk = [];
        for (let ik of kk.split(/\r\n?|\n/)) {
          for (; Fk = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(ik);) {
            let kk = Fk[1] ? +Fk[1] : null,
              yk = Fk[2] || Fk[3] || "",
              lk = -1,
              ak = yk.replace(/\\[{}]/g, (kk => kk[1]));
            for (let Fk = 0; Fk < Ik.length; Fk++)(null != kk ? Ik[Fk].seq == kk : ak && Ik[Fk].name == ak) && (lk = Fk);
            if (lk < 0) {
              let Fk = 0;
              for (; Fk < Ik.length && (null == kk || null != Ik[Fk].seq && Ik[Fk].seq < kk);) Fk++;
              Ik.splice(Fk, 0, {
                seq: kk,
                name: ak
              }), lk = Fk;
              for (let kk of Tk) kk.field >= lk && kk.field++
            }
            for (let Ik of Tk)
              if (Ik.line == Xk.length && Ik.from > Fk.index) {
                let kk = Fk[2] ? 3 + (Fk[1] || "").length : 2;
                Ik.from -= kk, Ik.to -= kk
              } Tk.push(new Dk(lk, Xk.length, Fk.index, Fk.index + ak.length)), ik = ik.slice(0, Fk.index) + yk + ik.slice(Fk.index + Fk[0].length)
          }
          ik = ik.replace(/\\([{}])/g, ((kk, Fk, Ik) => {
            for (let ik of Tk) ik.line == Xk.length && ik.from > Ik && (ik.from--, ik.to--);
            return Fk
          })), Xk.push(ik)
        }
        return new kF(Xk, Tk)
      }
    }
    let FF = Tk.b.widget({
        widget: new class extends Tk.o {
          toDOM() {
            let kk = document.createElement("span");
            return kk.className = "cm-snippetFieldPosition", kk
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      IF = Tk.b.mark({
        class: "cm-snippetField"
      });
    class XF {
      constructor(kk, Fk) {
        this.nZ = kk, this.active = Fk, this.deco = Tk.b.set(kk.map((kk => (kk.from == kk.to ? FF : IF).range(kk.from, kk.to))), !0)
      }
      map(kk) {
        let Fk = [];
        for (let Ik of this.nZ) {
          let Xk = Ik.map(kk);
          if (!Xk) return null;
          Fk.push(Xk)
        }
        return new XF(Fk, this.active)
      }
      selectionInsideField(kk) {
        return kk.nZ.every((kk => this.nZ.some((Fk => Fk.field == this.active && Fk.from <= kk.from && Fk.to >= kk.to))))
      }
    }
    const TF = Xk.F.define({
        map: (kk, Fk) => kk && kk.map(Fk)
      }),
      iF = Xk.F.define(),
      yF = Xk.I.define({
        create: () => null,
        update(kk, Fk) {
          for (let Ik of Fk.effects) {
            if (Ik.is(TF)) return Ik.value;
            if (Ik.is(iF) && kk) return new XF(kk.nZ, Ik.value)
          }
          return kk && Fk.docChanged && (kk = kk.map(Fk.changes)), kk && Fk.selection && !kk.selectionInsideField(Fk.selection) && (kk = null), kk
        },
        provide: kk => Tk.i.wk.from(kk, (kk => kk ? kk.deco : Tk.b.none))
      });

    function lF(kk, Fk) {
      return Xk.k.create(kk.filter((kk => kk.field == Fk)).map((kk => Xk.k.range(kk.from, kk.to))))
    }

    function aF(kk) {
      let Fk = kF.parse(kk);
      return (kk, Ik, Tk, ik) => {
        let {
          text: yk,
          nZ: lk
        } = Fk.instantiate(kk.state, Tk), {
          main: ak
        } = kk.state.selection, qk = {
          changes: {
            from: Tk,
            to: ik == ak.from ? ak.to : ik,
            insert: Xk.J.of(yk)
          },
          scrollIntoView: !0,
          annotations: Ik ? [jk.of(Ik), Xk.L.userEvent.of("input.complete")] : void 0
        };
        if (lk.length && (qk.selection = lF(lk, 0)), lk.some((kk => kk.field > 0))) {
          let Fk = new XF(lk, 0),
            Ik = qk.effects = [TF.of(Fk)];
          void 0 === kk.state.field(yF, !1) && Ik.push(Xk.F.appendConfig.of([yF, ZF, eF, rk]))
        }
        kk.dispatch(kk.state.update(qk))
      }
    }

    function qF(kk) {
      return Fk => {
        let {
          state: Ik,
          dispatch: Xk
        } = Fk, Tk = Ik.field(yF, !1);
        if (!Tk || kk < 0 && 0 == Tk.active) return !1;
        let ik = Tk.active + kk,
          yk = kk > 0 && !Tk.nZ.some((Fk => Fk.field == ik + kk));
        return Xk(Ik.update({
          selection: lF(Tk.nZ, ik),
          effects: TF.of(yk ? null : new XF(Tk.nZ, ik)),
          scrollIntoView: !0
        })), !0
      }
    }
    const LF = [{
        key: "Tab",
        run: qF(1),
        shift: qF(-1)
      }, {
        key: "Escape",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk;
          return !!Fk.field(yF, !1) && (Ik(Fk.update({
            effects: TF.of(null)
          })), !0)
        }
      }],
      tF = Xk.p.define({
        combine: kk => kk.length ? kk[0] : LF
      }),
      ZF = Xk.u.highest(Tk.P.compute([tF], (kk => kk.facet(tF))));

    function jF(kk, Fk) {
      return {
        ...Fk,
        apply: aF(kk)
      }
    }
    const eF = Tk.i.domEventHandlers({
      mousedown(kk, Fk) {
        let Ik, Xk = Fk.state.field(yF, !1);
        if (!Xk || null == (Ik = Fk.posAtCoords({
            x: kk.clientX,
            y: kk.clientY
          }))) return !1;
        let Tk = Xk.nZ.find((kk => kk.from <= Ik && kk.to >= Ik));
        return !(!Tk || Tk.field == Xk.active) && (Fk.dispatch({
          selection: lF(Xk.nZ, Tk.field),
          effects: TF.of(Xk.nZ.some((kk => kk.field > Tk.field)) ? new XF(Xk.nZ, Tk.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const wF = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      HF = Xk.F.define({
        map(kk, Fk) {
          let Ik = Fk.mapPos(kk, -1, Xk.s.TrackAfter);
          return null == Ik ? void 0 : Ik
        }
      }),
      JF = new class extends Xk.E {};
    JF.startSide = 1, JF.endSide = -1;
    const xF = Xk.I.define({
      create: () => Xk.A.empty,
      update(kk, Fk) {
        if (kk = kk.map(Fk.changes), Fk.selection) {
          let Ik = Fk.state.doc.lineAt(Fk.selection.main.head);
          kk = kk.update({
            filter: kk => kk >= Ik.from && kk <= Ik.to
          })
        }
        for (let Ik of Fk.effects) Ik.is(HF) && (kk = kk.update({
          add: [JF.range(Ik.value, Ik.value + 1)]
        }));
        return kk
      }
    });

    function PF() {
      return [zF, xF]
    }
    const KF = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function QF(kk) {
      for (let Fk = 0; Fk < 16; Fk += 2)
        if (KF.charCodeAt(Fk) == kk) return KF.charAt(Fk + 1);
      return (0, Xk.db)(kk < 128 ? kk : kk + 1)
    }

    function sF(kk, Fk) {
      return kk.languageDataAt("closeBrackets", Fk)[0] || wF
    }
    const VF = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      zF = Tk.i.inputHandler.of(((kk, Fk, Ik, Tk) => {
        if ((VF ? kk.composing : kk.compositionStarted) || kk.state.readOnly) return !1;
        let ik = kk.state.selection.main;
        if (Tk.length > 2 || 2 == Tk.length && 1 == (0, Xk.O)((0, Xk.M)(Tk, 0)) || Fk != ik.from || Ik != ik.to) return !1;
        let yk = function(kk, Fk) {
          let Ik = sF(kk, kk.selection.main.head),
            Tk = Ik.brackets || wF.brackets;
          for (let ik of Tk) {
            let yk = QF((0, Xk.M)(ik, 0));
            if (Fk == ik) return yk == ik ? nF(kk, ik, Tk.indexOf(ik + ik + ik) > -1, Ik) : EF(kk, ik, yk, Ik.before || wF.before);
            if (Fk == yk && oF(kk, kk.selection.main.from)) return OF(kk, ik, yk)
          }
          return null
        }(kk.state, Tk);
        return !!yk && (kk.dispatch(yk), !0)
      })),
      SF = [{
        key: "Backspace",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk;
          if (Fk.readOnly) return !1;
          let Tk = sF(Fk, Fk.selection.main.head).brackets || wF.brackets,
            ik = null,
            yk = Fk.changeByRange((kk => {
              if (kk.empty) {
                let Ik = function(kk, Fk) {
                  let Ik = kk.sliceString(Fk - 2, Fk);
                  return (0, Xk.O)((0, Xk.M)(Ik, 0)) == Ik.length ? Ik : Ik.slice(1)
                }(Fk.doc, kk.head);
                for (let ik of Tk)
                  if (ik == Ik && vF(Fk.doc, kk.head) == QF((0, Xk.M)(ik, 0))) return {
                    changes: {
                      from: kk.head - ik.length,
                      to: kk.head + ik.length
                    },
                    range: Xk.k.cursor(kk.head - ik.length)
                  }
              }
              return {
                range: ik = kk
              }
            }));
          return ik || Ik(Fk.update(yk, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !ik
        }
      }];

    function oF(kk, Fk) {
      let Ik = !1;
      return kk.field(xF).between(0, kk.doc.length, (kk => {
        kk == Fk && (Ik = !0)
      })), Ik
    }

    function vF(kk, Fk) {
      let Ik = kk.sliceString(Fk, Fk + 2);
      return Ik.slice(0, (0, Xk.O)((0, Xk.M)(Ik, 0)))
    }

    function EF(kk, Fk, Ik, Tk) {
      let ik = null,
        yk = kk.changeByRange((yk => {
          if (!yk.empty) return {
            changes: [{
              insert: Fk,
              from: yk.from
            }, {
              insert: Ik,
              from: yk.to
            }],
            effects: HF.of(yk.to + Fk.length),
            range: Xk.k.range(yk.anchor + Fk.length, yk.head + Fk.length)
          };
          let lk = vF(kk.doc, yk.head);
          return !lk || /\s/.test(lk) || Tk.indexOf(lk) > -1 ? {
            changes: {
              insert: Fk + Ik,
              from: yk.head
            },
            effects: HF.of(yk.head + Fk.length),
            range: Xk.k.cursor(yk.head + Fk.length)
          } : {
            range: ik = yk
          }
        }));
      return ik ? null : kk.update(yk, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function OF(kk, Fk, Ik) {
      let Tk = null,
        ik = kk.changeByRange((Fk => Fk.empty && vF(kk.doc, Fk.head) == Ik ? {
          changes: {
            from: Fk.head,
            to: Fk.head + Ik.length,
            insert: Ik
          },
          range: Xk.k.cursor(Fk.head + Ik.length)
        } : Tk = {
          range: Fk
        }));
      return Tk ? null : kk.update(ik, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function nF(kk, Fk, Ik, Tk) {
      let yk = Tk.stringPrefixes || wF.stringPrefixes,
        lk = null,
        ak = kk.changeByRange((Tk => {
          if (!Tk.empty) return {
            changes: [{
              insert: Fk,
              from: Tk.from
            }, {
              insert: Fk,
              from: Tk.to
            }],
            effects: HF.of(Tk.to + Fk.length),
            range: Xk.k.range(Tk.anchor + Fk.length, Tk.head + Fk.length)
          };
          let ak, qk = Tk.head,
            Lk = vF(kk.doc, qk);
          if (Lk == Fk) {
            if (GF(kk, qk)) return {
              changes: {
                insert: Fk + Fk,
                from: qk
              },
              effects: HF.of(qk + Fk.length),
              range: Xk.k.cursor(qk + Fk.length)
            };
            if (oF(kk, qk)) {
              let Tk = Ik && kk.sliceDoc(qk, qk + 3 * Fk.length) == Fk + Fk + Fk ? Fk + Fk + Fk : Fk;
              return {
                changes: {
                  from: qk,
                  to: qk + Tk.length,
                  insert: Tk
                },
                range: Xk.k.cursor(qk + Tk.length)
              }
            }
          } else {
            if (Ik && kk.sliceDoc(qk - 2 * Fk.length, qk) == Fk + Fk && (ak = pF(kk, qk - 2 * Fk.length, yk)) > -1 && GF(kk, ak)) return {
              changes: {
                insert: Fk + Fk + Fk + Fk,
                from: qk
              },
              effects: HF.of(qk + Fk.length),
              range: Xk.k.cursor(qk + Fk.length)
            };
            if (kk.charCategorizer(qk)(Lk) != Xk.h.Word && pF(kk, qk, yk) > -1 && ! function(kk, Fk, Ik, Xk) {
                let Tk = (0, ik.rb)(kk).resolveInner(Fk, -1),
                  yk = Xk.reduce(((kk, Fk) => Math.max(kk, Fk.length)), 0);
                for (let ik = 0; ik < 5; ik++) {
                  let ik = kk.sliceDoc(Tk.from, Math.min(Tk.to, Tk.from + Ik.length + yk)),
                    lk = ik.indexOf(Ik);
                  if (!lk || lk > -1 && Xk.indexOf(ik.slice(0, lk)) > -1) {
                    let Fk = Tk.firstChild;
                    for (; Fk && Fk.from == Tk.from && Fk.to - Fk.from > Ik.length + lk;) {
                      if (kk.sliceDoc(Fk.to - Ik.length, Fk.to) == Ik) return !1;
                      Fk = Fk.firstChild
                    }
                    return !0
                  }
                  let ak = Tk.to == Fk && Tk.parent;
                  if (!ak) break;
                  Tk = ak
                }
                return !1
              }(kk, qk, Fk, yk)) return {
              changes: {
                insert: Fk + Fk,
                from: qk
              },
              effects: HF.of(qk + Fk.length),
              range: Xk.k.cursor(qk + Fk.length)
            }
          }
          return {
            range: lk = Tk
          }
        }));
      return lk ? null : kk.update(ak, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function GF(kk, Fk) {
      let Ik = (0, ik.rb)(kk).resolveInner(Fk + 1);
      return Ik.parent && Ik.from == Fk
    }

    function pF(kk, Fk, Ik) {
      let Tk = kk.charCategorizer(Fk);
      if (Tk(kk.sliceDoc(Fk - 1, Fk)) != Xk.h.Word) return Fk;
      for (let ik of Ik) {
        let Ik = Fk - ik.length;
        if (kk.sliceDoc(Ik, Fk) == ik && Tk(kk.sliceDoc(Ik - 1, Ik)) != Xk.h.Word) return Ik
      }
      return -1
    }

    function uF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [hk, Wk, Qk.of(kk), gk, RF, rk]
    }
    const bF = [{
        key: "Ctrl-Space",
        run: Yk
      }, {
        mac: "Alt-`",
        run: Yk
      }, {
        mac: "Alt-i",
        run: Yk
      }, {
        key: "Escape",
        run: kk => {
          let Fk = kk.state.field(Wk, !1);
          return !(!Fk || !Fk.active.some((kk => 0 != kk.state))) && (kk.dispatch({
            effects: xk.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: dk(!0)
      }, {
        key: "ArrowUp",
        run: dk(!1)
      }, {
        key: "PageDown",
        run: dk(!0, "page")
      }, {
        key: "PageUp",
        run: dk(!1, "page")
      }, {
        key: "Enter",
        run: kk => {
          let Fk = kk.state.field(Wk, !1);
          return !(kk.state.readOnly || !Fk || !Fk.open || Fk.open.selected < 0 || Fk.open.disabled || Date.now() - Fk.open.timestamp < kk.state.facet(Qk).interactionDelay) && fk(kk, Fk.open.options[Fk.open.selected])
        }
      }],
      RF = Xk.u.highest(Tk.P.computeN([Qk], (kk => kk.facet(Qk).defaultKeymap ? [bF] : [])))
  },
  41460: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk,
      d: () => Zk,
      h: () => Lk,
      k: () => tk
    });
    var Xk = Ik(41315);
    class Tk {
      constructor(kk, Fk, Ik, Xk) {
        this.origin = kk, this.changes = Fk, this.effects = Ik, this.clientID = Xk
      }
    }
    class ik {
      constructor(kk, Fk) {
        this.version = kk, this.unconfirmed = Fk
      }
    }
    const yk = Xk.p.define({
        combine(kk) {
          let Fk = (0, Xk.R)(kk, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: kk => kk
          });
          return null == Fk.clientID && (Fk.clientID = kk.length && kk[0].generatedID || ""), Fk
        }
      }),
      lk = Xk.d.define(),
      ak = Xk.I.define({
        create: kk => new ik(kk.facet(yk).startVersion, []),
        update(kk, Fk) {
          let Ik = Fk.annotation(lk);
          if (Ik) return Ik;
          let {
            sharedEffects: Xk,
            clientID: ak
          } = Fk.startState.facet(yk), qk = Xk(Fk);
          return qk.length || !Fk.changes.empty ? new ik(kk.version, kk.unconfirmed.concat(new Tk(Fk, Fk.changes, qk, ak))) : kk
        }
      });

    function qk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ak, yk.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, kk))]
    }

    function Lk(kk, Fk) {
      let {
        version: Ik,
        unconfirmed: qk
      } = kk.field(ak), {
        clientID: Lk
      } = kk.facet(yk);
      Ik += Fk.length;
      let tk = [],
        Zk = null,
        jk = 0;
      for (let Tk of Fk) {
        let kk = jk < qk.length ? qk[jk] : null;
        kk && kk.clientID == Tk.clientID ? (Zk && (Zk = Zk.map(kk.changes, !0)), tk = Xk.F.mapEffects(tk, Tk.changes), jk++) : (tk = Xk.F.mapEffects(tk, Tk.changes), Tk.effects && (tk = tk.concat(Tk.effects)), Zk = Zk ? Zk.compose(Tk.changes) : Tk.changes)
      }
      if (jk && (qk = qk.slice(jk)), qk.length && (Zk && (qk = qk.map((kk => {
          let Fk = kk.changes.map(Zk);
          return Zk = Zk.map(kk.changes, !0), new Tk(kk.origin, Fk, Xk.F.mapEffects(kk.effects, Zk), Lk)
        }))), tk.length)) {
        let kk = qk.reduce(((kk, Fk) => kk.compose(Fk.changes)), Xk.ChangeSet.empty(qk[0].changes.length));
        tk = Xk.F.mapEffects(tk, kk)
      }
      return Zk ? kk.update({
        changes: Zk,
        effects: tk,
        annotations: [Xk.L.addToHistory.of(!1), Xk.L.remote.of(!0), lk.of(new ik(Ik, qk))],
        filter: !1
      }) : kk.update({
        annotations: [lk.of(new ik(Ik, qk))]
      })
    }

    function tk(kk) {
      return kk.field(ak).unconfirmed
    }

    function Zk(kk) {
      return kk.field(ak).version
    }
  },
  41343: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => HF
    });
    var Xk = Ik(41339);
    class Tk {
      constructor(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        let qk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Lk = arguments.length > 10 ? arguments[10] : void 0;
        this.p = kk, this.stack = Fk, this.state = Ik, this.reducePos = Xk, this.pos = Tk, this.score = ik, this.buffer = yk, this.bufferBase = lk, this.curContext = ak, this.lookAhead = qk, this.parent = Lk
      }
      toString() {
        return `[${this.stack.filter(((kk,Fk)=>Fk%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = kk.parser.context;
        return new Tk(kk, [], Fk, Ik, Ik, 0, [], 0, Xk ? new ik(Xk, Xk.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(kk, Fk) {
        this.stack.push(this.state, Fk, this.bufferBase + this.buffer.length), this.state = kk
      }
      reduce(kk) {
        var Fk;
        let Ik = kk >> 19,
          Xk = 65535 & kk,
          {
            parser: Tk
          } = this.p,
          ik = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          yk = Tk.dynamicPrecedence(Xk);
        if (yk && (this.score += yk), 0 == Ik) return this.pushState(Tk.getGoto(this.state, Xk, !0), this.reducePos), Xk < Tk.minRepeatTerm && this.storeNode(Xk, this.reducePos, this.reducePos, ik ? 8 : 4, !0), void this.reduceContext(Xk, this.reducePos);
        let lk = this.stack.length - 3 * (Ik - 1) - (262144 & kk ? 6 : 0),
          ak = lk ? this.stack[lk - 2] : this.p.nZ[0].from,
          qk = this.reducePos - ak;
        qk >= 2e3 && !(null === (Fk = this.p.parser.nodeSet.types[Xk]) || void 0 === Fk ? void 0 : Fk.isAnonymous) && (ak == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = qk) : this.p.lastBigReductionSize < qk && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = ak, this.p.lastBigReductionSize = qk));
        let Lk = lk ? this.stack[lk - 1] : 0,
          tk = this.bufferBase + this.buffer.length - Lk;
        if (Xk < Tk.minRepeatTerm || 131072 & kk) {
          let kk = Tk.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Xk, ak, kk, tk + 4, !0)
        }
        if (262144 & kk) this.state = this.stack[lk];
        else {
          let kk = this.stack[lk - 3];
          this.state = Tk.getGoto(kk, Xk, !0)
        }
        for (; this.stack.length > lk;) this.stack.pop();
        this.reduceContext(Xk, ak)
      }
      storeNode(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == kk && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let kk = this,
            Xk = this.buffer.length;
          if (0 == Xk && kk.parent && (Xk = kk.bufferBase - kk.parent.bufferBase, kk = kk.parent), Xk > 0 && 0 == kk.buffer[Xk - 4] && kk.buffer[Xk - 1] > -1) {
            if (Fk == Ik) return;
            if (kk.buffer[Xk - 2] >= Fk) return void(kk.buffer[Xk - 2] = Ik)
          }
        }
        if (Tk && this.pos != Ik) {
          let Tk = this.buffer.length;
          if (Tk > 0 && (0 != this.buffer[Tk - 4] || this.buffer[Tk - 1] < 0)) {
            let kk = !1;
            for (let Fk = Tk; Fk > 0 && this.buffer[Fk - 2] > Ik; Fk -= 4)
              if (this.buffer[Fk - 1] >= 0) {
                kk = !0;
                break
              } if (kk)
              for (; Tk > 0 && this.buffer[Tk - 2] > Ik;) this.buffer[Tk] = this.buffer[Tk - 4], this.buffer[Tk + 1] = this.buffer[Tk - 3], this.buffer[Tk + 2] = this.buffer[Tk - 2], this.buffer[Tk + 3] = this.buffer[Tk - 1], Tk -= 4, Xk > 4 && (Xk -= 4)
          }
          this.buffer[Tk] = kk, this.buffer[Tk + 1] = Fk, this.buffer[Tk + 2] = Ik, this.buffer[Tk + 3] = Xk
        } else this.buffer.push(kk, Fk, Ik, Xk)
      }
      shift(kk, Fk, Ik, Xk) {
        if (131072 & kk) this.pushState(65535 & kk, this.pos);
        else if (0 == (262144 & kk)) {
          let Tk = kk,
            {
              parser: ik
            } = this.p;
          this.pos = Xk;
          let yk = ik.stateFlag(Tk, 1);
          !yk && (Xk > Ik || Fk <= ik.maxNode) && (this.reducePos = Xk), this.pushState(Tk, yk ? Ik : Math.min(Ik, this.reducePos)), this.shiftContext(Fk, Ik), Fk <= ik.maxNode && this.buffer.push(Fk, Ik, Xk, 4)
        } else this.pos = Xk, this.shiftContext(Fk, Ik), Fk <= this.p.parser.maxNode && this.buffer.push(Fk, Ik, Xk, 4)
      }
      apply(kk, Fk, Ik, Xk) {
        65536 & kk ? this.reduce(kk) : this.shift(kk, Fk, Ik, Xk)
      }
      useNode(kk, Fk) {
        let Ik = this.p.reused.length - 1;
        (Ik < 0 || this.p.reused[Ik] != kk) && (this.p.reused.push(kk), Ik++);
        let Xk = this.pos;
        this.reducePos = this.pos = Xk + kk.length, this.pushState(Fk, Xk), this.buffer.push(Ik, Xk, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, kk, this, this.p.stream.reset(this.pos - kk.length)))
      }
      split() {
        let kk = this,
          Fk = kk.buffer.length;
        for (; Fk > 0 && kk.buffer[Fk - 2] > kk.reducePos;) Fk -= 4;
        let Ik = kk.buffer.slice(Fk),
          Xk = kk.bufferBase + Fk;
        for (; kk && Xk == kk.bufferBase;) kk = kk.parent;
        return new Tk(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, Ik, Xk, this.curContext, this.lookAhead, kk)
      }
      recoverByDelete(kk, Fk) {
        let Ik = kk <= this.p.parser.maxNode;
        Ik && this.storeNode(kk, this.pos, Fk, 4), this.storeNode(0, this.pos, Fk, Ik ? 8 : 4), this.pos = this.reducePos = Fk, this.score -= 190
      }
      canShift(kk) {
        for (let Fk = new yk(this);;) {
          let Ik = this.p.parser.stateSlot(Fk.state, 4) || this.p.parser.hasAction(Fk.state, kk);
          if (0 == Ik) return !1;
          if (0 == (65536 & Ik)) return !0;
          Fk.reduce(Ik)
        }
      }
      recoverByInsert(kk) {
        if (this.stack.length >= 300) return [];
        let Fk = this.p.parser.nextStates(this.state);
        if (Fk.length > 8 || this.stack.length >= 120) {
          let Ik = [];
          for (let Xk, Tk = 0; Tk < Fk.length; Tk += 2)(Xk = Fk[Tk + 1]) != this.state && this.p.parser.hasAction(Xk, kk) && Ik.push(Fk[Tk], Xk);
          if (this.stack.length < 120)
            for (let kk = 0; Ik.length < 8 && kk < Fk.length; kk += 2) {
              let Xk = Fk[kk + 1];
              Ik.some(((kk, Fk) => 1 & Fk && kk == Xk)) || Ik.push(Fk[kk], Xk)
            }
          Fk = Ik
        }
        let Ik = [];
        for (let Xk = 0; Xk < Fk.length && Ik.length < 4; Xk += 2) {
          let kk = Fk[Xk + 1];
          if (kk == this.state) continue;
          let Tk = this.split();
          Tk.pushState(kk, this.pos), Tk.storeNode(0, Tk.pos, Tk.pos, 4, !0), Tk.shiftContext(Fk[Xk], this.pos), Tk.reducePos = this.pos, Tk.score -= 200, Ik.push(Tk)
        }
        return Ik
      }
      forceReduce() {
        let {
          parser: kk
        } = this.p, Fk = kk.stateSlot(this.state, 5);
        if (0 == (65536 & Fk)) return !1;
        if (!kk.validAction(this.state, Fk)) {
          let Ik = Fk >> 19,
            Xk = 65535 & Fk,
            Tk = this.stack.length - 3 * Ik;
          if (Tk < 0 || kk.getGoto(this.stack[Tk], Xk, !1) < 0) {
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
        } = this.p, Fk = [], Ik = (Xk, Tk) => {
          if (!Fk.includes(Xk)) return Fk.push(Xk), kk.allActions(Xk, (Fk => {
            if (393216 & Fk);
            else if (65536 & Fk) {
              let Ik = (Fk >> 19) - Tk;
              if (Ik > 1) {
                let Xk = 65535 & Fk,
                  Tk = this.stack.length - 3 * Ik;
                if (Tk >= 0 && kk.getGoto(this.stack[Tk], Xk, !1) >= 0) return Ik << 19 | 65536 | Xk
              }
            } else {
              let kk = Ik(Fk, Tk + 1);
              if (null != kk) return kk
            }
          }))
        };
        return Ik(this.state, 0)
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
          let Fk = new ik(this.curContext.tracker, kk);
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
    class ik {
      constructor(kk, Fk) {
        this.tracker = kk, this.context = Fk, this.hash = kk.strict ? kk.hash(Fk) : 0
      }
    }
    class yk {
      constructor(kk) {
        this.start = kk, this.state = kk.state, this.stack = kk.stack, this.base = this.stack.length
      }
      reduce(kk) {
        let Fk = 65535 & kk,
          Ik = kk >> 19;
        0 == Ik ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (Ik - 1);
        let Xk = this.start.p.parser.getGoto(this.stack[this.base - 3], Fk, !0);
        this.state = Xk
      }
    }
    class lk {
      constructor(kk, Fk, Ik) {
        this.stack = kk, this.pos = Fk, this.index = Ik, this.buffer = kk.buffer, 0 == this.index && this.maybeNext()
      }
      static create(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.bufferBase + kk.buffer.length;
        return new lk(kk, Fk, Fk - kk.bufferBase)
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
        return new lk(this.stack, this.pos, this.index)
      }
    }

    function ak(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof kk) return kk;
      let Ik = null;
      for (let Xk = 0, Tk = 0; Xk < kk.length;) {
        let ik = 0;
        for (;;) {
          let Fk = kk.charCodeAt(Xk++),
            Ik = !1;
          if (126 == Fk) {
            ik = 65535;
            break
          }
          Fk >= 92 && Fk--, Fk >= 34 && Fk--;
          let Tk = Fk - 32;
          if (Tk >= 46 && (Tk -= 46, Ik = !0), ik += Tk, Ik) break;
          ik *= 46
        }
        Ik ? Ik[Tk++] = ik : Ik = new Fk(ik)
      }
      return Ik
    }
    class qk {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const Lk = new qk;
    class tk {
      constructor(kk, Fk) {
        this.input = kk, this.nZ = Fk, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Lk, this.rangeIndex = 0, this.pos = this.chunkPos = Fk[0].from, this.range = Fk[0], this.end = Fk[Fk.length - 1].to, this.readNext()
      }
      resolveOffset(kk, Fk) {
        let Ik = this.range,
          Xk = this.rangeIndex,
          Tk = this.pos + kk;
        for (; Tk < Ik.from;) {
          if (!Xk) return null;
          let kk = this.nZ[--Xk];
          Tk -= Ik.from - kk.to, Ik = kk
        }
        for (; Fk < 0 ? Tk > Ik.to : Tk >= Ik.to;) {
          if (Xk == this.nZ.length - 1) return null;
          let kk = this.nZ[++Xk];
          Tk += kk.from - Ik.to, Ik = kk
        }
        return Tk
      }
      clipPos(kk) {
        if (kk >= this.range.from && kk < this.range.to) return kk;
        for (let Fk of this.nZ)
          if (Fk.to > kk) return Math.max(kk, Fk.from);
        return this.end
      }
      peek(kk) {
        let Fk, Ik, Xk = this.chunkOff + kk;
        if (Xk >= 0 && Xk < this.chunk.length) Fk = this.pos + kk, Ik = this.chunk.charCodeAt(Xk);
        else {
          let Xk = this.resolveOffset(kk, 1);
          if (null == Xk) return -1;
          if (Fk = Xk, Fk >= this.chunk2Pos && Fk < this.chunk2Pos + this.chunk2.length) Ik = this.chunk2.charCodeAt(Fk - this.chunk2Pos);
          else {
            let kk = this.rangeIndex,
              Xk = this.range;
            for (; Xk.to <= Fk;) Xk = this.nZ[++kk];
            this.chunk2 = this.input.chunk(this.chunk2Pos = Fk), Fk + this.chunk2.length > Xk.to && (this.chunk2 = this.chunk2.slice(0, Xk.to - Fk)), Ik = this.chunk2.charCodeAt(0)
          }
        }
        return Fk >= this.token.lookAhead && (this.token.lookAhead = Fk + 1), Ik
      }
      acceptToken(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = Fk ? this.resolveOffset(Fk, -1) : this.pos;
        if (null == Ik || Ik < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = kk, this.token.end = Ik
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
          if (this.rangeIndex == this.nZ.length - 1) return this.setDone();
          kk -= this.range.to - this.pos, this.range = this.nZ[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += kk, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.nZ[this.rangeIndex = this.nZ.length - 1], this.chunk = "", this.next = -1
      }
      reset(kk, Fk) {
        if (Fk ? (this.token = Fk, Fk.start = kk, Fk.lookAhead = kk + 1, Fk.value = Fk.extended = -1) : this.token = Lk, this.pos != kk) {
          if (this.pos = kk, kk == this.end) return this.setDone(), this;
          for (; kk < this.range.from;) this.range = this.nZ[--this.rangeIndex];
          for (; kk >= this.range.to;) this.range = this.nZ[++this.rangeIndex];
          kk >= this.chunkPos && kk < this.chunkPos + this.chunk.length ? this.chunkOff = kk - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(kk, Fk) {
        if (kk >= this.chunkPos && Fk <= this.chunkPos + this.chunk.length) return this.chunk.slice(kk - this.chunkPos, Fk - this.chunkPos);
        if (kk >= this.chunk2Pos && Fk <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(kk - this.chunk2Pos, Fk - this.chunk2Pos);
        if (kk >= this.range.from && Fk <= this.range.to) return this.input.read(kk, Fk);
        let Ik = "";
        for (let Xk of this.nZ) {
          if (Xk.from >= Fk) break;
          Xk.to > kk && (Ik += this.input.read(Math.max(Xk.from, kk), Math.min(Xk.to, Fk)))
        }
        return Ik
      }
    }
    class Zk {
      constructor(kk, Fk) {
        this.data = kk, this.id = Fk
      }
      token(kk, Fk) {
        let {
          parser: Ik
        } = Fk.p;
        wk(this.data, kk, Fk, this.id, Ik.data, Ik.tokenPrecTable)
      }
    }
    Zk.prototype.contextual = Zk.prototype.fallback = Zk.prototype.extend = !1;
    class jk {
      constructor(kk, Fk, Ik) {
        this.precTable = Fk, this.elseToken = Ik, this.data = "string" == typeof kk ? ak(kk) : kk
      }
      token(kk, Fk) {
        let Ik = kk.pos,
          Xk = 0;
        for (;;) {
          let Ik = kk.next < 0,
            Tk = kk.resolveOffset(1, 1);
          if (wk(this.data, kk, Fk, 0, this.data, this.precTable), kk.token.value > -1) break;
          if (null == this.elseToken) return;
          if (Ik || Xk++, null == Tk) break;
          kk.reset(Tk, kk.token)
        }
        Xk && (kk.reset(Ik, kk.token), kk.acceptToken(this.elseToken, Xk))
      }
    }
    jk.prototype.contextual = Zk.prototype.fallback = Zk.prototype.extend = !1;
    class ek {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = kk, this.contextual = !!Fk.contextual, this.fallback = !!Fk.fallback, this.extend = !!Fk.extend
      }
    }

    function wk(kk, Fk, Ik, Xk, Tk, ik) {
      let yk = 0,
        lk = 1 << Xk,
        {
          dialect: ak
        } = Ik.p.parser;
      kk: for (; 0 != (lk & kk[yk]);) {
        let Ik = kk[yk + 1];
        for (let tk = yk + 3; tk < Ik; tk += 2)
          if ((kk[tk + 1] & lk) > 0) {
            let Ik = kk[tk];
            if (ak.allows(Ik) && (-1 == Fk.token.value || Fk.token.value == Ik || Jk(Ik, Fk.token.value, Tk, ik))) {
              Fk.acceptToken(Ik);
              break
            }
          } let Xk = Fk.next,
          qk = 0,
          Lk = kk[yk + 2];
        if (!(Fk.next < 0 && Lk > qk && 65535 == kk[Ik + 3 * Lk - 3])) {
          for (; qk < Lk;) {
            let Tk = qk + Lk >> 1,
              ik = Ik + Tk + (Tk << 1),
              lk = kk[ik],
              ak = kk[ik + 1] || 65536;
            if (Xk < lk) Lk = Tk;
            else {
              if (!(Xk >= ak)) {
                yk = kk[ik + 2], Fk.advance();
                continue kk
              }
              qk = Tk + 1
            }
          }
          break
        }
        yk = kk[Ik + 3 * Lk - 1]
      }
    }

    function Hk(kk, Fk, Ik) {
      for (let Xk, Tk = Fk; 65535 != (Xk = kk[Tk]); Tk++)
        if (Xk == Ik) return Tk - Fk;
      return -1
    }

    function Jk(kk, Fk, Ik, Xk) {
      let Tk = Hk(Ik, Xk, Fk);
      return Tk < 0 || Hk(Ik, Xk, kk) < Tk
    }
    const xk = "undefined" != typeof process && {
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
    let Pk = null;

    function Kk(kk, Fk, Ik) {
      let Tk = kk.cursor(Xk.f.IncludeAnonymous);
      for (Tk.moveTo(Fk);;)
        if (!(Ik < 0 ? Tk.childBefore(Fk) : Tk.childAfter(Fk)))
          for (;;) {
            if ((Ik < 0 ? Tk.to < Fk : Tk.from > Fk) && !Tk.type.isError) return Ik < 0 ? Math.max(0, Math.min(Tk.to - 1, Fk - 25)) : Math.min(kk.length, Math.max(Tk.from + 1, Fk + 25));
            if (Ik < 0 ? Tk.prevSibling() : Tk.nextSibling()) break;
            if (!Tk.parent()) return Ik < 0 ? 0 : kk.length
          }
    }
    class Qk {
      constructor(kk, Fk) {
        this.fragments = kk, this.nodeSet = Fk, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let kk = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (kk) {
          for (this.safeFrom = kk.openStart ? Kk(kk.tree, kk.from + kk.offset, 1) - kk.offset : kk.from, this.safeTo = kk.openEnd ? Kk(kk.tree, kk.to + kk.offset, -1) - kk.offset : kk.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
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
          let Ik = this.trees[Fk],
            Tk = this.index[Fk];
          if (Tk == Ik.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let ik = Ik.children[Tk],
            yk = this.start[Fk] + Ik.positions[Tk];
          if (yk > kk) return this.nextStart = yk, null;
          if (ik instanceof Xk.y) {
            if (yk == kk) {
              if (yk < this.safeFrom) return null;
              let kk = yk + ik.length;
              if (kk <= this.safeTo) {
                let Fk = ik.prop(Xk.h.lookAhead);
                if (!Fk || kk + Fk < this.fragment.to) return ik
              }
            }
            this.index[Fk]++, yk + ik.length >= Math.max(this.safeFrom, kk) && (this.trees.push(ik), this.start.push(yk), this.index.push(0))
          } else this.index[Fk]++, this.nextStart = yk + ik.length
        }
      }
    }
    class sk {
      constructor(kk, Fk) {
        this.stream = Fk, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = kk.tokenizers.map((kk => new qk))
      }
      getActions(kk) {
        let Fk = 0,
          Ik = null,
          {
            parser: Xk
          } = kk.p,
          {
            tokenizers: Tk
          } = Xk,
          ik = Xk.stateSlot(kk.state, 3),
          yk = kk.curContext ? kk.curContext.hash : 0,
          lk = 0;
        for (let ak = 0; ak < Tk.length; ak++) {
          if (0 == (1 << ak & ik)) continue;
          let Xk = Tk[ak],
            qk = this.tokens[ak];
          if ((!Ik || Xk.fallback) && ((Xk.contextual || qk.start != kk.pos || qk.mask != ik || qk.context != yk) && (this.updateCachedToken(qk, Xk, kk), qk.mask = ik, qk.context = yk), qk.lookAhead > qk.end + 25 && (lk = Math.max(qk.lookAhead, lk)), 0 != qk.value)) {
            let Tk = Fk;
            if (qk.extended > -1 && (Fk = this.addActions(kk, qk.extended, qk.end, Fk)), Fk = this.addActions(kk, qk.value, qk.end, Fk), !Xk.extend && (Ik = qk, Fk > Tk)) break
          }
        }
        for (; this.actions.length > Fk;) this.actions.pop();
        return lk && kk.setLookAhead(lk), Ik || kk.pos != this.stream.end || (Ik = new qk, Ik.value = kk.p.parser.eofTerm, Ik.start = Ik.end = kk.pos, Fk = this.addActions(kk, Ik.value, Ik.end, Fk)), this.mainToken = Ik, this.actions
      }
      getMainToken(kk) {
        if (this.mainToken) return this.mainToken;
        let Fk = new qk,
          {
            pos: Ik,
            p: Xk
          } = kk;
        return Fk.start = Ik, Fk.end = Math.min(Ik + 1, Xk.stream.end), Fk.value = Ik == Xk.stream.end ? Xk.parser.eofTerm : 0, Fk
      }
      updateCachedToken(kk, Fk, Ik) {
        let Xk = this.stream.clipPos(Ik.pos);
        if (Fk.token(this.stream.reset(Xk, kk), Ik), kk.value > -1) {
          let {
            parser: Fk
          } = Ik.p;
          for (let Xk = 0; Xk < Fk.specialized.length; Xk++)
            if (Fk.specialized[Xk] == kk.value) {
              let Tk = Fk.specializers[Xk](this.stream.read(kk.start, kk.end), Ik);
              if (Tk >= 0 && Ik.p.parser.dialect.allows(Tk >> 1)) {
                0 == (1 & Tk) ? kk.value = Tk >> 1 : kk.extended = Tk >> 1;
                break
              }
            }
        } else kk.value = 0, kk.end = this.stream.clipPos(Xk + 1)
      }
      putAction(kk, Fk, Ik, Xk) {
        for (let Tk = 0; Tk < Xk; Tk += 3)
          if (this.actions[Tk] == kk) return Xk;
        return this.actions[Xk++] = kk, this.actions[Xk++] = Fk, this.actions[Xk++] = Ik, Xk
      }
      addActions(kk, Fk, Ik, Xk) {
        let {
          state: Tk
        } = kk, {
          parser: ik
        } = kk.p, {
          data: yk
        } = ik;
        for (let lk = 0; lk < 2; lk++)
          for (let kk = ik.stateSlot(Tk, lk ? 2 : 1);; kk += 3) {
            if (65535 == yk[kk]) {
              if (1 != yk[kk + 1]) {
                0 == Xk && 2 == yk[kk + 1] && (Xk = this.putAction(Ok(yk, kk + 2), Fk, Ik, Xk));
                break
              }
              kk = Ok(yk, kk + 2)
            }
            yk[kk] == Fk && (Xk = this.putAction(Ok(yk, kk + 1), Fk, Ik, Xk))
          }
        return Xk
      }
    }
    class Vk {
      constructor(kk, Fk, Ik, Xk) {
        this.parser = kk, this.input = Fk, this.nZ = Xk, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new tk(Fk, Xk), this.tokens = new sk(kk, this.stream), this.topTerm = kk.top[1];
        let {
          from: ik
        } = Xk[0];
        this.stacks = [Tk.start(this, kk.top[0], ik)], this.fragments = Ik.length && this.stream.end - ik > 4 * kk.bufferLength ? new Qk(Ik, kk.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let kk, Fk, Ik = this.stacks,
          Xk = this.minStackPos,
          Tk = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == Ik.length) {
          let [kk] = Ik;
          for (; kk.forceReduce() && kk.stack.length && kk.stack[kk.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let ik = 0; ik < Ik.length; ik++) {
          let yk = Ik[ik];
          for (;;) {
            if (this.tokens.mainToken = null, yk.pos > Xk) Tk.push(yk);
            else {
              if (this.advanceStack(yk, Tk, Ik)) continue;
              {
                kk || (kk = [], Fk = []), kk.push(yk);
                let Ik = this.tokens.getMainToken(yk);
                Fk.push(Ik.value, Ik.end)
              }
            }
            break
          }
        }
        if (!Tk.length) {
          let Fk = kk && function(kk) {
            let Fk = null;
            for (let Ik of kk) {
              let kk = Ik.p.stoppedAt;
              (Ik.pos == Ik.p.stream.end || null != kk && Ik.pos > kk) && Ik.p.parser.stateFlag(Ik.state, 2) && (!Fk || Fk.score < Ik.score) && (Fk = Ik)
            }
            return Fk
          }(kk);
          if (Fk) return xk && console.log("Finish with " + this.stackID(Fk)), this.stackToTree(Fk);
          if (this.parser.strict) throw xk && kk && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Xk);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && kk) {
          let Ik = null != this.stoppedAt && kk[0].pos > this.stoppedAt ? kk[0] : this.runRecovery(kk, Fk, Tk);
          if (Ik) return xk && console.log("Force-finish " + this.stackID(Ik)), this.stackToTree(Ik.forceAll())
        }
        if (this.recovering) {
          let kk = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (Tk.length > kk)
            for (Tk.sort(((kk, Fk) => Fk.score - kk.score)); Tk.length > kk;) Tk.pop();
          Tk.some((kk => kk.reducePos > Xk)) && this.recovering--
        } else if (Tk.length > 1) {
          kk: for (let kk = 0; kk < Tk.length - 1; kk++) {
            let Fk = Tk[kk];
            for (let Ik = kk + 1; Ik < Tk.length; Ik++) {
              let Xk = Tk[Ik];
              if (Fk.sameState(Xk) || Fk.buffer.length > 500 && Xk.buffer.length > 500) {
                if (!((Fk.score - Xk.score || Fk.buffer.length - Xk.buffer.length) > 0)) {
                  Tk.splice(kk--, 1);
                  continue kk
                }
                Tk.splice(Ik--, 1)
              }
            }
          }
          Tk.length > 12 && (Tk.sort(((kk, Fk) => Fk.score - kk.score)), Tk.splice(12, Tk.length - 12))
        }
        this.minStackPos = Tk[0].pos;
        for (let ik = 1; ik < Tk.length; ik++) Tk[ik].pos < this.minStackPos && (this.minStackPos = Tk[ik].pos);
        return null
      }
      stopAt(kk) {
        if (null != this.stoppedAt && this.stoppedAt < kk) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = kk
      }
      advanceStack(kk, Fk, Ik) {
        let Tk = kk.pos,
          {
            parser: ik
          } = this,
          yk = xk ? this.stackID(kk) + " -> " : "";
        if (null != this.stoppedAt && Tk > this.stoppedAt) return kk.forceReduce() ? kk : null;
        if (this.fragments) {
          let Fk = kk.curContext && kk.curContext.tracker.strict,
            Ik = Fk ? kk.curContext.hash : 0;
          for (let lk = this.fragments.nodeAt(Tk); lk;) {
            let Tk = this.parser.nodeSet.types[lk.type.id] == lk.type ? ik.getGoto(kk.state, lk.type.id) : -1;
            if (Tk > -1 && lk.length && (!Fk || (lk.prop(Xk.h.contextHash) || 0) == Ik)) return kk.useNode(lk, Tk), xk && console.log(yk + this.stackID(kk) + ` (via reuse of ${ik.getName(lk.type.id)})`), !0;
            if (!(lk instanceof Xk.y) || 0 == lk.children.length || lk.positions[0] > 0) break;
            let ak = lk.children[0];
            if (!(ak instanceof Xk.y && 0 == lk.positions[0])) break;
            lk = ak
          }
        }
        let lk = ik.stateSlot(kk.state, 4);
        if (lk > 0) return kk.reduce(lk), xk && console.log(yk + this.stackID(kk) + ` (via always-reduce ${ik.getName(65535&lk)})`), !0;
        if (kk.stack.length >= 8400)
          for (; kk.stack.length > 6e3 && kk.forceReduce(););
        let ak = this.tokens.getActions(kk);
        for (let Xk = 0; Xk < ak.length;) {
          let lk = ak[Xk++],
            qk = ak[Xk++],
            Lk = ak[Xk++],
            tk = Xk == ak.length || !Ik,
            Zk = tk ? kk : kk.split(),
            jk = this.tokens.mainToken;
          if (Zk.apply(lk, qk, jk ? jk.start : Zk.pos, Lk), xk && console.log(yk + this.stackID(Zk) + ` (via ${0==(65536&lk)?"shift":`reduce of ${ik.getName(65535&lk)}`} for ${ik.getName(qk)} @ ${Tk}${Zk==kk?"":", split"})`), tk) return !0;
          Zk.pos > Tk ? Fk.push(Zk) : Ik.push(Zk)
        }
        return !1
      }
      advanceFully(kk, Fk) {
        let Ik = kk.pos;
        for (;;) {
          if (!this.advanceStack(kk, null, null)) return !1;
          if (kk.pos > Ik) return zk(kk, Fk), !0
        }
      }
      runRecovery(kk, Fk, Ik) {
        let Xk = null,
          Tk = !1;
        for (let ik = 0; ik < kk.length; ik++) {
          let yk = kk[ik],
            lk = Fk[ik << 1],
            ak = Fk[1 + (ik << 1)],
            qk = xk ? this.stackID(yk) + " -> " : "";
          if (yk.deadEnd) {
            if (Tk) continue;
            if (Tk = !0, yk.restart(), xk && console.log(qk + this.stackID(yk) + " (restarted)"), this.advanceFully(yk, Ik)) continue
          }
          let Lk = yk.split(),
            tk = qk;
          for (let kk = 0; kk < 10 && Lk.forceReduce(); kk++) {
            if (xk && console.log(tk + this.stackID(Lk) + " (via force-reduce)"), this.advanceFully(Lk, Ik)) break;
            xk && (tk = this.stackID(Lk) + " -> ")
          }
          for (let kk of yk.recoverByInsert(lk)) xk && console.log(qk + this.stackID(kk) + " (via recover-insert)"), this.advanceFully(kk, Ik);
          this.stream.end > yk.pos ? (ak == yk.pos && (ak++, lk = 0), yk.recoverByDelete(lk, ak), xk && console.log(qk + this.stackID(yk) + ` (via recover-delete ${this.parser.getName(lk)})`), zk(yk, Ik)) : (!Xk || Xk.score < Lk.score) && (Xk = Lk)
        }
        return Xk
      }
      stackToTree(kk) {
        return kk.close(), Xk.y.build({
          buffer: lk.create(kk),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.nZ[0].from,
          length: kk.pos - this.nZ[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(kk) {
        let Fk = (Pk || (Pk = new WeakMap)).get(kk);
        return Fk || Pk.set(kk, Fk = String.fromCodePoint(this.nextStackID++)), Fk + kk
      }
    }

    function zk(kk, Fk) {
      for (let Ik = 0; Ik < Fk.length; Ik++) {
        let Xk = Fk[Ik];
        if (Xk.pos == kk.pos && Xk.sameState(kk)) return void(Fk[Ik].score < kk.score && (Fk[Ik] = kk))
      }
      Fk.push(kk)
    }
    class Sk {
      constructor(kk, Fk, Ik) {
        this.source = kk, this.flags = Fk, this.disabled = Ik
      }
      allows(kk) {
        return !this.disabled || 0 == this.disabled[kk]
      }
    }
    const vk = kk => kk;
    class Ek extends Xk.s {
      constructor(kk) {
        if (super(), this.wrappers = [], 14 != kk.version) throw new RangeError(`Parser version (${kk.version}) doesn't match runtime version (14)`);
        let Fk = kk.nodeNames.split(" ");
        this.minRepeatTerm = Fk.length;
        for (let Xk = 0; Xk < kk.repeatNodeCount; Xk++) Fk.push("");
        let Ik = Object.keys(kk.topRules).map((Fk => kk.topRules[Fk][1])),
          Tk = [];
        for (let Xk = 0; Xk < Fk.length; Xk++) Tk.push([]);

        function ik(kk, Fk, Ik) {
          Tk[kk].push([Fk, Fk.deserialize(String(Ik))])
        }
        if (kk.nodeProps)
          for (let lk of kk.nodeProps) {
            let kk = lk[0];
            "string" == typeof kk && (kk = Xk.h[kk]);
            for (let Fk = 1; Fk < lk.length;) {
              let Ik = lk[Fk++];
              if (Ik >= 0) ik(Ik, kk, lk[Fk++]);
              else {
                let Xk = lk[Fk + -Ik];
                for (let Tk = -Ik; Tk > 0; Tk--) ik(lk[Fk++], kk, Xk);
                Fk++
              }
            }
          }
        this.nodeSet = new Xk.k(Fk.map(((Fk, ik) => Xk.o.define({
          name: ik >= this.minRepeatTerm ? void 0 : Fk,
          id: ik,
          props: Tk[ik],
          top: Ik.indexOf(ik) > -1,
          error: 0 == ik,
          skipped: kk.skippedNodes && kk.skippedNodes.indexOf(ik) > -1
        })))), kk.propSources && (this.nodeSet = this.nodeSet.extend(...kk.propSources)), this.strict = !1, this.bufferLength = Xk.b;
        let yk = ak(kk.tokenData);
        this.context = kk.context, this.specializerSpecs = kk.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Xk = 0; Xk < this.specializerSpecs.length; Xk++) this.specialized[Xk] = this.specializerSpecs[Xk].term;
        this.specializers = this.specializerSpecs.map(nk), this.states = ak(kk.states, Uint32Array), this.data = ak(kk.stateData), this.goto = ak(kk.goto), this.maxTerm = kk.maxTerm, this.tokenizers = kk.tokenizers.map((kk => "number" == typeof kk ? new Zk(yk, kk) : kk)), this.topRules = kk.topRules, this.dialects = kk.dialects || {}, this.dynamicPrecedences = kk.dynamicPrecedences || null, this.tokenPrecTable = kk.tokenPrec, this.termNames = kk.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(kk, Fk, Ik) {
        let Xk = new Vk(this, kk, Fk, Ik);
        for (let Tk of this.wrappers) Xk = Tk(Xk, kk, Fk, Ik);
        return Xk
      }
      getGoto(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = this.goto;
        if (Fk >= Xk[0]) return -1;
        for (let Tk = Xk[Fk + 1];;) {
          let Fk = Xk[Tk++],
            ik = 1 & Fk,
            yk = Xk[Tk++];
          if (ik && Ik) return yk;
          for (let Ik = Tk + (Fk >> 1); Tk < Ik; Tk++)
            if (Xk[Tk] == kk) return yk;
          if (ik) return -1
        }
      }
      hasAction(kk, Fk) {
        let Ik = this.data;
        for (let Xk = 0; Xk < 2; Xk++)
          for (let Tk, ik = this.stateSlot(kk, Xk ? 2 : 1);; ik += 3) {
            if (65535 == (Tk = Ik[ik])) {
              if (1 != Ik[ik + 1]) {
                if (2 == Ik[ik + 1]) return Ok(Ik, ik + 2);
                break
              }
              Tk = Ik[ik = Ok(Ik, ik + 2)]
            }
            if (Tk == Fk || 0 == Tk) return Ok(Ik, ik + 1)
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
        let Ik = this.stateSlot(kk, 4),
          Xk = Ik ? Fk(Ik) : void 0;
        for (let Tk = this.stateSlot(kk, 1); null == Xk; Tk += 3) {
          if (65535 == this.data[Tk]) {
            if (1 != this.data[Tk + 1]) break;
            Tk = Ok(this.data, Tk + 2)
          }
          Xk = Fk(Ok(this.data, Tk + 1))
        }
        return Xk
      }
      nextStates(kk) {
        let Fk = [];
        for (let Ik = this.stateSlot(kk, 1);; Ik += 3) {
          if (65535 == this.data[Ik]) {
            if (1 != this.data[Ik + 1]) break;
            Ik = Ok(this.data, Ik + 2)
          }
          if (0 == (1 & this.data[Ik + 2])) {
            let kk = this.data[Ik + 1];
            Fk.some(((Fk, Ik) => 1 & Ik && Fk == kk)) || Fk.push(this.data[Ik], kk)
          }
        }
        return Fk
      }
      configure(kk) {
        let Fk = Object.assign(Object.create(Ek.prototype), this);
        if (kk.props && (Fk.nodeSet = this.nodeSet.extend(...kk.props)), kk.top) {
          let Ik = this.topRules[kk.top];
          if (!Ik) throw new RangeError(`Invalid top rule name ${kk.top}`);
          Fk.top = Ik
        }
        return kk.tokenizers && (Fk.tokenizers = this.tokenizers.map((Fk => {
          let Ik = kk.tokenizers.find((kk => kk.from == Fk));
          return Ik ? Ik.to : Fk
        }))), kk.specializers && (Fk.specializers = this.specializers.slice(), Fk.specializerSpecs = this.specializerSpecs.map(((Ik, Xk) => {
          let Tk = kk.specializers.find((kk => kk.from == Ik.external));
          if (!Tk) return Ik;
          let ik = Object.assign(Object.assign({}, Ik), {
            external: Tk.to
          });
          return Fk.specializers[Xk] = nk(ik), ik
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
          Ik = Fk.map((() => !1));
        if (kk)
          for (let Tk of kk.split(" ")) {
            let kk = Fk.indexOf(Tk);
            kk >= 0 && (Ik[kk] = !0)
          }
        let Xk = null;
        for (let Tk = 0; Tk < Fk.length; Tk++)
          if (!Ik[Tk])
            for (let kk, Ik = this.dialects[Fk[Tk]]; 65535 != (kk = this.data[Ik++]);)(Xk || (Xk = new Uint8Array(this.maxTerm + 1)))[kk] = 1;
        return new Sk(kk, Ik, Xk)
      }
      static deserialize(kk) {
        return new Ek(kk)
      }
    }

    function Ok(kk, Fk) {
      return kk[Fk] | kk[Fk + 1] << 16
    }

    function nk(kk) {
      if (kk.external) {
        let Fk = kk.extend ? 1 : 0;
        return (Ik, Xk) => kk.external(Ik, Xk) << 1 | Fk
      }
      return kk.get
    }
    var Gk = Ik(41341);
    const pk = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      uk = new class {
        constructor(kk) {
          this.start = kk.start, this.shift = kk.shift || vk, this.reduce = kk.reduce || vk, this.reuse = kk.reuse || vk, this.hash = kk.hash || (() => 0), this.strict = !1 !== kk.strict
        }
      }({
        start: !1,
        shift: (kk, Fk) => 5 == Fk || 6 == Fk || 320 == Fk ? kk : 321 == Fk,
        strict: !1
      }),
      bk = new ek(((kk, Fk) => {
        let {
          next: Ik
        } = kk;
        (125 == Ik || -1 == Ik || Fk.context) && kk.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      Rk = new ek(((kk, Fk) => {
        let Ik, {
          next: Xk
        } = kk;
        pk.indexOf(Xk) > -1 || (47 != Xk || 47 != (Ik = kk.peek(1)) && 42 != Ik) && (125 == Xk || 59 == Xk || -1 == Xk || Fk.context || kk.acceptToken(316))
      }), {
        contextual: !0
      }),
      Uk = new ek(((kk, Fk) => {
        91 != kk.next || Fk.context || kk.acceptToken(317)
      }), {
        contextual: !0
      }),
      Ck = new ek(((kk, Fk) => {
        let {
          next: Ik
        } = kk;
        if (43 == Ik || 45 == Ik) {
          if (kk.advance(), Ik == kk.next) {
            kk.advance();
            let Ik = !Fk.context && Fk.canShift(1);
            kk.acceptToken(Ik ? 1 : 2)
          }
        } else 63 == Ik && 46 == kk.peek(1) && (kk.advance(), kk.advance(), (kk.next < 48 || kk.next > 57) && kk.acceptToken(3))
      }), {
        contextual: !0
      });

    function Nk(kk, Fk) {
      return kk >= 65 && kk <= 90 || kk >= 97 && kk <= 122 || 95 == kk || kk >= 192 || !Fk && kk >= 48 && kk <= 57
    }
    const ck = new ek(((kk, Fk) => {
        if (60 != kk.next || !Fk.dialectEnabled(0)) return;
        if (kk.advance(), 47 == kk.next) return;
        let Ik = 0;
        for (; pk.indexOf(kk.next) > -1;) kk.advance(), Ik++;
        if (Nk(kk.next, !0)) {
          for (kk.advance(), Ik++; Nk(kk.next, !1);) kk.advance(), Ik++;
          for (; pk.indexOf(kk.next) > -1;) kk.advance(), Ik++;
          if (44 == kk.next) return;
          for (let Fk = 0;; Fk++) {
            if (7 == Fk) {
              if (!Nk(kk.next, !0)) return;
              break
            }
            if (kk.next != "extends".charCodeAt(Fk)) break;
            kk.advance(), Ik++
          }
        }
        kk.acceptToken(4, -Ik)
      })),
      Wk = (0, Gk.g)({
        "get set async static": Gk.k.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": Gk.k.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": Gk.k.operatorKeyword,
        "let var const using function class extends": Gk.k.definitionKeyword,
        "import export from": Gk.k.moduleKeyword,
        "with debugger new": Gk.k.keyword,
        TemplateString: Gk.k.special(Gk.k.string),
        super: Gk.k.atom,
        BooleanLiteral: Gk.k.bool,
        this: Gk.k.self,
        null: Gk.k.null,
        Star: Gk.k.modifier,
        VariableName: Gk.k.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": Gk.k.function(Gk.k.variableName),
        VariableDefinition: Gk.k.definition(Gk.k.variableName),
        Label: Gk.k.labelName,
        PropertyName: Gk.k.propertyName,
        PrivatePropertyName: Gk.k.special(Gk.k.propertyName),
        "CallExpression/MemberExpression/PropertyName": Gk.k.function(Gk.k.propertyName),
        "FunctionDeclaration/VariableDefinition": Gk.k.function(Gk.k.definition(Gk.k.variableName)),
        "ClassDeclaration/VariableDefinition": Gk.k.definition(Gk.k.className),
        "NewExpression/VariableName": Gk.k.className,
        PropertyDefinition: Gk.k.definition(Gk.k.propertyName),
        PrivatePropertyDefinition: Gk.k.definition(Gk.k.special(Gk.k.propertyName)),
        UpdateOp: Gk.k.updateOperator,
        "LineComment Hashbang": Gk.k.lineComment,
        BlockComment: Gk.k.blockComment,
        Number: Gk.k.number,
        String: Gk.k.string,
        Escape: Gk.k.escape,
        ArithOp: Gk.k.arithmeticOperator,
        LogicOp: Gk.k.logicOperator,
        BitOp: Gk.k.bitwiseOperator,
        CompareOp: Gk.k.compareOperator,
        RegExp: Gk.k.regexp,
        Equals: Gk.k.definitionOperator,
        Arrow: Gk.k.function(Gk.k.punctuation),
        ": Spread": Gk.k.punctuation,
        "( )": Gk.k.paren,
        "[ ]": Gk.k.squareBracket,
        "{ }": Gk.k.brace,
        "InterpolationStart InterpolationEnd": Gk.k.special(Gk.k.brace),
        ".": Gk.k.derefOperator,
        ", ;": Gk.k.separator,
        "@": Gk.k.meta,
        TypeName: Gk.k.typeName,
        TypeDefinition: Gk.k.definition(Gk.k.typeName),
        "type enum interface implements namespace module declare": Gk.k.definitionKeyword,
        "abstract global Privacy readonly override": Gk.k.modifier,
        "is keyof unique infer asserts": Gk.k.operatorKeyword,
        JSXAttributeValue: Gk.k.attributeValue,
        JSXText: Gk.k.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": Gk.k.angleBracket,
        "JSXIdentifier JSXNameSpacedName": Gk.k.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": Gk.k.attributeName,
        "JSXBuiltin/JSXIdentifier": Gk.k.standard(Gk.k.tagName)
      }),
      fk = {
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
      Bk = {
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
      dk = {
        __proto__: null,
        "<": 193
      },
      Yk = Ek.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: uk,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [Wk],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [Rk, Uk, Ck, ck, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, bk, new jk("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new jk("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: kk => fk[kk] || -1
        }, {
          term: 343,
          get: kk => Bk[kk] || -1
        }, {
          term: 95,
          get: kk => dk[kk] || -1
        }],
        tokenPrec: 15201
      });
    var Ak = Ik(41335),
      gk = Ik(41315),
      mk = Ik(41319),
      hk = Ik(41309);
    const rk = [(0, hk.q)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, hk.q)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, hk.q)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, hk.q)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, hk.q)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, hk.q)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, hk.q)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, hk.q)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, hk.q)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, hk.q)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, hk.q)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      Dk = rk.concat([(0, hk.q)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, hk.q)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, hk.q)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      Mk = new Xk.p,
      kF = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function FF(kk) {
      return (Fk, Ik) => {
        let Xk = Fk.node.getChild("VariableDefinition");
        return Xk && Ik(Xk, kk), !0
      }
    }
    const IF = ["FunctionDeclaration"],
      XF = {
        FunctionDeclaration: FF("function"),
        ClassDeclaration: FF("class"),
        ClassExpression: () => !0,
        EnumDeclaration: FF("constant"),
        TypeAliasDeclaration: FF("type"),
        NamespaceDeclaration: FF("namespace"),
        VariableDefinition(kk, Fk) {
          kk.matchContext(IF) || Fk(kk, "variable")
        },
        TypeDefinition(kk, Fk) {
          Fk(kk, "type")
        },
        __proto__: null
      };

    function TF(kk, Fk) {
      let Ik = Mk.get(Fk);
      if (Ik) return Ik;
      let Tk = [],
        ik = !0;

      function yk(Fk, Ik) {
        let Xk = kk.sliceString(Fk.from, Fk.to);
        Tk.push({
          label: Xk,
          type: Ik
        })
      }
      return Fk.cursor(Xk.f.IncludeAnonymous).iterate((Fk => {
        if (ik) ik = !1;
        else if (Fk.name) {
          let kk = XF[Fk.name];
          if (kk && kk(Fk, yk) || kF.has(Fk.name)) return !1
        } else if (Fk.to - Fk.from > 8192) {
          for (let Ik of TF(kk, Fk.node)) Tk.push(Ik);
          return !1
        }
      })), Mk.set(Fk, Tk), Tk
    }
    const iF = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      yF = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function lF(kk) {
      let Fk = (0, Ak.rb)(kk.state).resolveInner(kk.pos, -1);
      if (yF.indexOf(Fk.name) > -1) return null;
      let Ik = "VariableName" == Fk.name || Fk.to - Fk.from < 20 && iF.test(kk.state.sliceDoc(Fk.from, Fk.to));
      if (!Ik && !kk.explicit) return null;
      let Xk = [];
      for (let Tk = Fk; Tk; Tk = Tk.parent) kF.has(Tk.name) && (Xk = Xk.concat(TF(kk.state.doc, Tk)));
      return {
        options: Xk,
        from: Ik ? Fk.from : kk.pos,
        validFor: iF
      }
    }
    const aF = Ak.k.define({
        name: "javascript",
        parser: Yk.configure({
          props: [Ak.ab.add({
            IfStatement: (0, Ak.s)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, Ak.s)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: Ak.D,
            SwitchBody: kk => {
              let Fk = kk.textAfter,
                Ik = /^\s*\}/.test(Fk),
                Xk = /^\s*(case|default)\b/.test(Fk);
              return kk.baseIndent + (Ik ? 0 : Xk ? 1 : 2) * kk.unit
            },
            Block: (0, Ak.A)({
              closing: "}"
            }),
            ArrowFunction: kk => kk.baseIndent + kk.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, Ak.s)({
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
          }), Ak.Q.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": Ak.K,
            BlockComment: kk => ({
              from: kk.from + 2,
              to: kk.to - 2
            }),
            JSXElement(kk) {
              let Fk = kk.firstChild;
              if (!Fk || "JSXSelfClosingTag" == Fk.name) return null;
              let Ik = kk.lastChild;
              return {
                from: Fk.to,
                to: Ik.type.isError ? kk.to : Ik.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(kk) {
              var Fk;
              let Ik = null === (Fk = kk.firstChild) || void 0 === Fk ? void 0 : Fk.nextSibling,
                Xk = kk.lastChild;
              return !Ik || Ik.type.isError ? null : {
                from: Ik.to,
                to: Xk.type.isError ? kk.to : Xk.from
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
      qF = {
        test: kk => /^JSX/.test(kk.name),
        facet: (0, Ak.x)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      LF = aF.configure({
        dialect: "ts"
      }, "typescript"),
      tF = aF.configure({
        dialect: "jsx",
        props: [Ak.ib.add((kk => kk.isTop ? [qF] : void 0))]
      }),
      ZF = aF.configure({
        dialect: "jsx ts",
        props: [Ak.ib.add((kk => kk.isTop ? [qF] : void 0))]
      }, "typescript");
    let jF = kk => ({
      label: kk,
      type: "keyword"
    });
    const eF = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(jF),
      wF = eF.concat(["declare", "implements", "private", "protected", "public"].map(jF));

    function HF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Fk = kk.jsx ? kk.typescript ? ZF : tF : kk.typescript ? LF : aF,
        Ik = kk.typescript ? Dk.concat(wF) : rk.concat(eF);
      return new Ak.n(Fk, [aF.data.of({
        autocomplete: (0, hk.m)(yF, (0, hk.i)(Ik))
      }), aF.data.of({
        autocomplete: lF
      }), kk.jsx ? PF : []])
    }

    function JF(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk.length;
      for (let Xk = null === Fk || void 0 === Fk ? void 0 : Fk.firstChild; Xk; Xk = Xk.nextSibling)
        if ("JSXIdentifier" == Xk.name || "JSXBuiltin" == Xk.name || "JSXNamespacedName" == Xk.name || "JSXMemberExpression" == Xk.name) return kk.sliceString(Xk.from, Math.min(Xk.to, Ik));
      return ""
    }
    const xF = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      PF = mk.i.inputHandler.of(((kk, Fk, Ik, Xk, Tk) => {
        if ((xF ? kk.composing : kk.compositionStarted) || kk.state.readOnly || Fk != Ik || ">" != Xk && "/" != Xk || !aF.isActiveAt(kk.state, Fk, -1)) return !1;
        let ik = Tk(),
          {
            state: yk
          } = ik,
          lk = yk.changeByRange((kk => {
            var Fk;
            let Ik, {
                head: Tk
              } = kk,
              ik = (0, Ak.rb)(yk).resolveInner(Tk - 1, -1);
            if ("JSXStartTag" == ik.name && (ik = ik.parent), yk.doc.sliceString(Tk - 1, Tk) != Xk || "JSXAttributeValue" == ik.name && ik.to > Tk);
            else {
              if (">" == Xk && "JSXFragmentTag" == ik.name) return {
                range: kk,
                changes: {
                  from: Tk,
                  insert: "</>"
                }
              };
              if ("/" == Xk && "JSXStartCloseTag" == ik.name) {
                let kk = ik.parent,
                  Xk = kk.parent;
                if (Xk && kk.from == Tk - 2 && ((Ik = JF(yk.doc, Xk.firstChild, Tk)) || "JSXFragmentTag" == (null === (Fk = Xk.firstChild) || void 0 === Fk ? void 0 : Fk.name))) {
                  let kk = `${Ik}>`;
                  return {
                    range: gk.k.cursor(Tk + kk.length, -1),
                    changes: {
                      from: Tk,
                      insert: kk
                    }
                  }
                }
              } else if (">" == Xk) {
                let Fk = function(kk) {
                  for (;;) {
                    if ("JSXOpenTag" == kk.name || "JSXSelfClosingTag" == kk.name || "JSXFragmentTag" == kk.name) return kk;
                    if ("JSXEscape" == kk.name || !kk.parent) return null;
                    kk = kk.parent
                  }
                }(ik);
                if (Fk && "JSXOpenTag" == Fk.name && !/^\/?>|^<\//.test(yk.doc.sliceString(Tk, Tk + 2)) && (Ik = JF(yk.doc, Fk, Tk))) return {
                  range: kk,
                  changes: {
                    from: Tk,
                    insert: `</${Ik}>`
                  }
                }
              }
            }
            return {
              range: kk
            }
          }));
        return !lk.changes.empty && (kk.dispatch([ik, yk.update(lk, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41335: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      A: () => fk,
      D: () => dk,
      G: () => PF,
      K: () => rk,
      O: () => LF,
      Q: () => hk,
      U: () => Jk,
      V: () => Gk,
      Y: () => uk,
      ab: () => Rk,
      bb: () => gk,
      c: () => QF,
      cb: () => pk,
      fb: () => nk,
      g: () => bk,
      hb: () => BF,
      ib: () => tk,
      k: () => ek,
      lb: () => SF,
      n: () => Ek,
      pb: () => Hk,
      q: () => NF,
      rb: () => wk,
      s: () => Yk,
      w: () => EF,
      x: () => Lk
    });
    var Xk, Tk = Ik(41339),
      ik = Ik(41315),
      yk = Ik(41319),
      lk = Ik(41341),
      ak = Ik(41325);
    const qk = new Tk.h;

    function Lk(kk) {
      return ik.p.define({
        combine: kk ? Fk => Fk.concat(kk) : void 0
      })
    }
    const tk = new Tk.h;
    class Zk {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = kk, this.name = Xk, ik.m.prototype.hasOwnProperty("tree") || Object.defineProperty(ik.m.prototype, "tree", {
          get() {
            return wk(this)
          }
        }), this.parser = Fk, this.extension = [vk.of(this), ik.m.languageData.of(((kk, Fk, Ik) => {
          let Xk = jk(kk, Fk, Ik),
            Tk = Xk.type.prop(qk);
          if (!Tk) return [];
          let ik = kk.facet(Tk),
            yk = Xk.type.prop(tk);
          if (yk) {
            let Tk = Xk.resolve(Fk - Xk.from, Ik);
            for (let Fk of yk)
              if (Fk.test(Tk, kk)) {
                let Ik = kk.facet(Fk.facet);
                return "replace" == Fk.type ? Ik : Ik.concat(ik)
              }
          }
          return ik
        }))].concat(Ik)
      }
      isActiveAt(kk, Fk) {
        return jk(kk, Fk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(qk) == this.data
      }
      findRegions(kk) {
        let Fk = kk.facet(vk);
        if ((null === Fk || void 0 === Fk ? void 0 : Fk.data) == this.data) return [{
          from: 0,
          to: kk.doc.length
        }];
        if (!Fk || !Fk.allowsNesting) return [];
        let Ik = [],
          Xk = (kk, Fk) => {
            if (kk.prop(qk) == this.data) return void Ik.push({
              from: Fk,
              to: Fk + kk.length
            });
            let ik = kk.prop(Tk.h.mounted);
            if (ik) {
              if (ik.tree.prop(qk) == this.data) {
                if (ik.overlay)
                  for (let kk of ik.overlay) Ik.push({
                    from: kk.from + Fk,
                    to: kk.to + Fk
                  });
                else Ik.push({
                  from: Fk,
                  to: Fk + kk.length
                });
                return
              }
              if (ik.overlay) {
                let kk = Ik.length;
                if (Xk(ik.tree, ik.overlay[0].from + Fk), Ik.length > kk) return
              }
            }
            for (let Ik = 0; Ik < kk.children.length; Ik++) {
              let ik = kk.children[Ik];
              ik instanceof Tk.y && Xk(ik, kk.positions[Ik] + Fk)
            }
          };
        return Xk(wk(kk), 0), Ik
      }
      get allowsNesting() {
        return !0
      }
    }

    function jk(kk, Fk, Ik) {
      let Xk = kk.facet(vk),
        ik = wk(kk).topNode;
      if (!Xk || Xk.allowsNesting)
        for (let yk = ik; yk; yk = yk.enter(Fk, Ik, Tk.f.ExcludeBuffers | Tk.f.EnterBracketed)) yk.type.isTop && (ik = yk);
      return ik
    }
    Zk.setState = ik.F.define();
    class ek extends Zk {
      constructor(kk, Fk, Ik) {
        super(kk, Fk, [], Ik), this.parser = Fk
      }
      static define(kk) {
        let Fk = Lk(kk.languageData);
        return new ek(Fk, kk.parser.configure({
          props: [qk.add((kk => kk.isTop ? Fk : void 0))]
        }), kk.name)
      }
      configure(kk, Fk) {
        return new ek(this.data, this.parser.configure(kk), Fk || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function wk(kk) {
      let Fk = kk.field(Zk.state, !1);
      return Fk ? Fk.tree : Tk.y.empty
    }

    function Hk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.doc.length;
      var Ik;
      return (null === (Ik = kk.field(Zk.state, !1)) || void 0 === Ik ? void 0 : Ik.context.isDone(Fk)) || !1
    }

    function Jk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.viewport.to,
        Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Xk = function(kk, Fk) {
          let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Xk;
          let Tk = null === (Xk = kk.field(Zk.state, !1)) || void 0 === Xk ? void 0 : Xk.context;
          if (!Tk) return null;
          let ik = Tk.viewport;
          Tk.updateViewport({
            from: 0,
            to: Fk
          });
          let yk = Tk.isDone(Fk) || Tk.work(Ik, Fk) ? Tk.tree : null;
          return Tk.updateViewport(ik), yk
        }(kk.state, Fk, Ik);
      return Xk != wk(kk.state) && kk.dispatch({}), !!Xk
    }
    class xk {
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
        let Ik = this.cursorPos - this.string.length;
        return kk < Ik || Fk >= this.cursorPos ? this.doc.sliceString(kk, Fk) : this.string.slice(kk - Ik, Fk - Ik)
      }
    }
    let Pk = null;
    class Kk {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Xk = arguments.length > 3 ? arguments[3] : void 0,
          Tk = arguments.length > 4 ? arguments[4] : void 0,
          ik = arguments.length > 5 ? arguments[5] : void 0,
          yk = arguments.length > 6 ? arguments[6] : void 0,
          lk = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = kk, this.state = Fk, this.fragments = Ik, this.tree = Xk, this.treeLen = Tk, this.viewport = ik, this.skipped = yk, this.scheduleOn = lk, this.parse = null, this.tempSkipped = []
      }
      static create(kk, Fk, Ik) {
        return new Kk(kk, Fk, [], Tk.y.empty, 0, Ik, [], null)
      }
      startParse() {
        return this.parser.startParse(new xk(this.state.doc), this.fragments)
      }
      work(kk, Fk) {
        return null != Fk && Fk >= this.state.doc.length && (Fk = void 0), this.tree != Tk.y.empty && this.isDone(null !== Fk && void 0 !== Fk ? Fk : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var Ik;
          if ("number" == typeof kk) {
            let Fk = Date.now() + kk;
            kk = () => Date.now() > Fk
          }
          for (this.parse || (this.parse = this.startParse()), null != Fk && (null == this.parse.stoppedAt || this.parse.stoppedAt > Fk) && Fk < this.state.doc.length && this.parse.stopAt(Fk);;) {
            let Xk = this.parse.advance();
            if (Xk) {
              if (this.fragments = this.withoutTempSkipped(Tk.u.addTree(Xk, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (Ik = this.parse.stoppedAt) && void 0 !== Ik ? Ik : this.state.doc.length, this.tree = Xk, this.parse = null, !(this.treeLen < (null !== Fk && void 0 !== Fk ? Fk : this.state.doc.length))) return !0;
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
        })), this.treeLen = kk, this.tree = Fk, this.fragments = this.withoutTempSkipped(Tk.u.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(kk) {
        let Fk = Pk;
        Pk = this;
        try {
          return kk()
        } finally {
          Pk = Fk
        }
      }
      withoutTempSkipped(kk) {
        for (let Fk; Fk = this.tempSkipped.pop();) kk = Qk(kk, Fk.from, Fk.to);
        return kk
      }
      changes(kk, Fk) {
        let {
          fragments: Ik,
          tree: Xk,
          treeLen: ik,
          viewport: yk,
          skipped: lk
        } = this;
        if (this.takeTree(), !kk.empty) {
          let Fk = [];
          if (kk.iterChangedRanges(((kk, Ik, Xk, Tk) => Fk.push({
              fromA: kk,
              toA: Ik,
              fromB: Xk,
              toB: Tk
            }))), Ik = Tk.u.applyChanges(Ik, Fk), Xk = Tk.y.empty, ik = 0, yk = {
              from: kk.mapPos(yk.from, -1),
              to: kk.mapPos(yk.to, 1)
            }, this.skipped.length) {
            lk = [];
            for (let Fk of this.skipped) {
              let Ik = kk.mapPos(Fk.from, 1),
                Xk = kk.mapPos(Fk.to, -1);
              Ik < Xk && lk.push({
                from: Ik,
                to: Xk
              })
            }
          }
        }
        return new Kk(this.parser, Fk, Ik, Xk, ik, yk, lk, this.scheduleOn)
      }
      updateViewport(kk) {
        if (this.viewport.from == kk.from && this.viewport.to == kk.to) return !1;
        this.viewport = kk;
        let Fk = this.skipped.length;
        for (let Ik = 0; Ik < this.skipped.length; Ik++) {
          let {
            from: Fk,
            to: Xk
          } = this.skipped[Ik];
          Fk < kk.to && Xk > kk.from && (this.fragments = Qk(this.fragments, Fk, Xk), this.skipped.splice(Ik--, 1))
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
        return new class extends Tk.s {
          createParse(Fk, Ik, Xk) {
            let ik = Xk[0].from,
              yk = Xk[Xk.length - 1].to;
            return {
              parsedPos: ik,
              advance() {
                let Fk = Pk;
                if (Fk) {
                  for (let kk of Xk) Fk.tempSkipped.push(kk);
                  kk && (Fk.scheduleOn = Fk.scheduleOn ? Promise.all([Fk.scheduleOn, kk]) : kk)
                }
                return this.parsedPos = yk, new Tk.y(Tk.o.none, [], [], yk - ik)
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
        return Pk
      }
    }

    function Qk(kk, Fk, Ik) {
      return Tk.u.applyChanges(kk, [{
        fromA: Fk,
        toA: Ik,
        fromB: Fk,
        toB: Ik
      }])
    }
    class sk {
      constructor(kk) {
        this.context = kk, this.tree = kk.tree
      }
      apply(kk) {
        if (!kk.docChanged && this.tree == this.context.tree) return this;
        let Fk = this.context.changes(kk.changes, kk.state),
          Ik = this.context.treeLen == kk.startState.doc.length ? void 0 : Math.max(kk.changes.mapPos(this.context.treeLen), Fk.viewport.to);
        return Fk.work(20, Ik) || Fk.takeTree(), new sk(Fk)
      }
      static init(kk) {
        let Fk = Math.min(3e3, kk.doc.length),
          Ik = Kk.create(kk.facet(vk).parser, kk, {
            from: 0,
            to: Fk
          });
        return Ik.work(20, Fk) || Ik.takeTree(), new sk(Ik)
      }
    }
    Zk.state = ik.I.define({
      create: sk.init,
      update(kk, Fk) {
        for (let Ik of Fk.effects)
          if (Ik.is(Zk.setState)) return Ik.value;
        return Fk.startState.facet(vk) != Fk.state.facet(vk) ? sk.init(Fk.state) : kk.apply(Fk)
      }
    });
    let Vk = kk => {
      let Fk = setTimeout((() => kk()), 500);
      return () => clearTimeout(Fk)
    };
    "undefined" != typeof requestIdleCallback && (Vk = kk => {
      let Fk = -1,
        Ik = setTimeout((() => {
          Fk = requestIdleCallback(kk, {
            timeout: 400
          })
        }), 100);
      return () => Fk < 0 ? clearTimeout(Ik) : cancelIdleCallback(Fk)
    });
    const zk = "undefined" != typeof navigator && (null === (Xk = navigator.scheduling) || void 0 === Xk ? void 0 : Xk.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      Sk = yk.l.fromClass(class {
        constructor(kk) {
          this.view = kk, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(kk) {
          let Fk = this.view.state.field(Zk.state).context;
          (Fk.updateViewport(kk.view.viewport) || this.view.viewport.to > Fk.treeLen) && this.scheduleWork(), (kk.docChanged || kk.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(Fk)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: kk
          } = this.view, Fk = kk.field(Zk.state);
          Fk.tree == Fk.context.tree && Fk.context.isDone(kk.doc.length) || (this.working = Vk(this.work))
        }
        work(kk) {
          this.working = null;
          let Fk = Date.now();
          if (this.chunkEnd < Fk && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = Fk + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: Ik,
            viewport: {
              to: Xk
            }
          } = this.view, Tk = Ik.field(Zk.state);
          if (Tk.tree == Tk.context.tree && Tk.context.isDone(Xk + 1e5)) return;
          let ik = Date.now() + Math.min(this.chunkBudget, 100, kk && !zk ? Math.max(25, kk.timeRemaining() - 5) : 1e9),
            yk = Tk.context.treeLen < Xk && Ik.doc.length > Xk + 1e3,
            lk = Tk.context.work((() => zk && zk() || Date.now() > ik), Xk + (yk ? 0 : 1e5));
          this.chunkBudget -= Date.now() - Fk, (lk || this.chunkBudget <= 0) && (Tk.context.takeTree(), this.view.dispatch({
            effects: Zk.setState.of(new sk(Tk.context))
          })), this.chunkBudget > 0 && (!lk || yk) && this.scheduleWork(), this.checkAsyncSchedule(Tk.context)
        }
        checkAsyncSchedule(kk) {
          kk.scheduleOn && (this.workScheduled++, kk.scheduleOn.then((() => this.scheduleWork())).catch((kk => (0, yk.V)(this.view.state, kk))).then((() => this.workScheduled--)), kk.scheduleOn = null)
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
      vk = ik.p.define({
        combine: kk => kk.length ? kk[0] : null,
        enables: kk => [Zk.state, Sk, yk.i.contentAttributes.compute([kk], (Fk => {
          let Ik = Fk.facet(kk);
          return Ik && Ik.name ? {
            "data-language": Ik.name
          } : {}
        }))]
      });
    class Ek {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = kk, this.support = Fk, this.extension = [kk, Fk]
      }
    }
    const Ok = ik.p.define(),
      nk = ik.p.define({
        combine: kk => {
          if (!kk.length) return "  ";
          let Fk = kk[0];
          if (!Fk || /\S/.test(Fk) || Array.from(Fk).some((kk => kk != Fk[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(kk[0]));
          return Fk
        }
      });

    function Gk(kk) {
      let Fk = kk.facet(nk);
      return 9 == Fk.charCodeAt(0) ? kk.tabSize * Fk.length : Fk.length
    }

    function pk(kk, Fk) {
      let Ik = "",
        Xk = kk.tabSize,
        Tk = kk.facet(nk)[0];
      if ("\t" == Tk) {
        for (; Fk >= Xk;) Ik += "\t", Fk -= Xk;
        Tk = " "
      }
      for (let ik = 0; ik < Fk; ik++) Ik += Tk;
      return Ik
    }

    function uk(kk, Fk) {
      kk instanceof ik.m && (kk = new bk(kk));
      for (let Xk of kk.state.facet(Ok)) {
        let Ik = Xk(kk, Fk);
        if (void 0 !== Ik) return Ik
      }
      let Ik = wk(kk.state);
      return Ik.length >= Fk ? function(kk, Fk, Ik) {
        let Xk = Fk.resolveStack(Ik),
          Tk = Fk.resolveInner(Ik, -1).resolve(Ik, 0).enterUnfinishedNodesBefore(Ik);
        if (Tk != Xk.node) {
          let kk = [];
          for (let Fk = Tk; Fk && !(Fk.from < Xk.node.from || Fk.to > Xk.node.to || Fk.from == Xk.node.from && Fk.type == Xk.node.type); Fk = Fk.parent) kk.push(Fk);
          for (let Fk = kk.length - 1; Fk >= 0; Fk--) Xk = {
            node: kk[Fk],
            next: Xk
          }
        }
        return Uk(Xk, kk, Ik)
      }(kk, Ik, Fk) : null
    }
    class bk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = kk, this.options = Fk, this.unit = Gk(kk)
      }
      lineAt(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ik = this.state.doc.lineAt(kk),
          {
            simulateBreak: Xk,
            simulateDoubleBreak: Tk
          } = this.options;
        return null != Xk && Xk >= Ik.from && Xk <= Ik.to ? Tk && Xk == kk ? {
          text: "",
          from: kk
        } : (Fk < 0 ? Xk < kk : Xk <= kk) ? {
          text: Ik.text.slice(Xk - Ik.from),
          from: Xk
        } : {
          text: Ik.text.slice(0, Xk - Ik.from),
          from: Ik.from
        } : Ik
      }
      textAfterPos(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && kk == this.options.simulateBreak) return "";
        let {
          text: Ik,
          from: Xk
        } = this.lineAt(kk, Fk);
        return Ik.slice(kk - Xk, Math.min(Ik.length, kk + 100 - Xk))
      }
      column(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Ik,
            from: Xk
          } = this.lineAt(kk, Fk),
          Tk = this.countColumn(Ik, kk - Xk),
          ik = this.options.overrideIndentation ? this.options.overrideIndentation(Xk) : -1;
        return ik > -1 && (Tk += ik - this.countColumn(Ik, Ik.search(/\S|$/))), Tk
      }
      countColumn(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.length;
        return (0, ik.V)(kk, this.state.tabSize, Fk)
      }
      lineIndent(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Ik,
            from: Xk
          } = this.lineAt(kk, Fk),
          Tk = this.options.overrideIndentation;
        if (Tk) {
          let kk = Tk(Xk);
          if (kk > -1) return kk
        }
        return this.countColumn(Ik, Ik.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const Rk = new Tk.h;

    function Uk(kk, Fk, Ik) {
      for (let Xk = kk; Xk; Xk = Xk.next) {
        let kk = Ck(Xk.node);
        if (kk) return kk(ck.create(Fk, Ik, Xk))
      }
      return 0
    }

    function Ck(kk) {
      let Fk = kk.type.prop(Rk);
      if (Fk) return Fk;
      let Ik, Xk = kk.firstChild;
      if (Xk && (Ik = Xk.type.prop(Tk.h.closedBy))) {
        let Fk = kk.lastChild,
          Xk = Fk && Ik.indexOf(Fk.name) > -1;
        return kk => Bk(kk, !0, 1, void 0, Xk && ! function(kk) {
          return kk.pos == kk.options.simulateBreak && kk.options.simulateDoubleBreak
        }(kk) ? Fk.from : void 0)
      }
      return null == kk.parent ? Nk : null
    }

    function Nk() {
      return 0
    }
    class ck extends bk {
      constructor(kk, Fk, Ik) {
        super(kk.state, kk.options), this.base = kk, this.pos = Fk, this.context = Ik
      }
      get node() {
        return this.context.node
      }
      static create(kk, Fk, Ik) {
        return new ck(kk, Fk, Ik)
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
          let Ik = kk.resolve(Fk.from);
          for (; Ik.parent && Ik.parent.from == Ik.from;) Ik = Ik.parent;
          if (Wk(Ik, kk)) break;
          Fk = this.state.doc.lineAt(Ik.from)
        }
        return this.lineIndent(Fk.from)
      }
      continue () {
        return Uk(this.context.next, this.base, this.pos)
      }
    }

    function Wk(kk, Fk) {
      for (let Ik = Fk; Ik; Ik = Ik.parent)
        if (kk == Ik) return !0;
      return !1
    }

    function fk(kk) {
      let {
        closing: Fk,
        align: Ik = !0,
        units: Xk = 1
      } = kk;
      return kk => Bk(kk, Ik, Xk, Fk)
    }

    function Bk(kk, Fk, Ik, Xk, Tk) {
      let ik = kk.textAfter,
        yk = ik.match(/^\s*/)[0].length,
        lk = Xk && ik.slice(yk, yk + Xk.length) == Xk || Tk == kk.pos + yk,
        ak = Fk ? function(kk) {
          let Fk = kk.node,
            Ik = Fk.childAfter(Fk.from),
            Xk = Fk.lastChild;
          if (!Ik) return null;
          let Tk = kk.options.simulateBreak,
            ik = kk.state.doc.lineAt(Ik.from),
            yk = null == Tk || Tk <= ik.from ? ik.to : Math.min(ik.to, Tk);
          for (let lk = Ik.to;;) {
            let kk = Fk.childAfter(lk);
            if (!kk || kk == Xk) return null;
            if (!kk.type.isSkipped) {
              if (kk.from >= yk) return null;
              let Fk = /^ */.exec(ik.text.slice(Ik.to - ik.from))[0].length;
              return {
                from: Ik.from,
                to: Ik.to + Fk
              }
            }
            lk = kk.to
          }
        }(kk) : null;
      return ak ? lk ? kk.column(ak.from) : kk.column(ak.to) : kk.baseIndent + (lk ? 0 : kk.unit * Ik)
    }
    const dk = kk => kk.baseIndent;

    function Yk() {
      let {
        except: kk,
        units: Fk = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Ik => {
        let Xk = kk && kk.test(Ik.textAfter);
        return Ik.baseIndent + (Xk ? 0 : Fk * Ik.unit)
      }
    }
    const Ak = 200;

    function gk() {
      return ik.m.transactionFilter.of((kk => {
        if (!kk.docChanged || !kk.isUserEvent("input.type") && !kk.isUserEvent("input.complete")) return kk;
        let Fk = kk.startState.languageDataAt("indentOnInput", kk.startState.selection.main.head);
        if (!Fk.length) return kk;
        let Ik = kk.newDoc,
          {
            head: Xk
          } = kk.newSelection.main,
          Tk = Ik.lineAt(Xk);
        if (Xk > Tk.from + Ak) return kk;
        let ik = Ik.sliceString(Tk.from, Xk);
        if (!Fk.some((kk => kk.test(ik)))) return kk;
        let {
          state: yk
        } = kk, lk = -1, ak = [];
        for (let {
            head: qk
          }
          of yk.selection.nZ) {
          let kk = yk.doc.lineAt(qk);
          if (kk.from == lk) continue;
          lk = kk.from;
          let Fk = uk(yk, kk.from);
          if (null == Fk) continue;
          let Ik = /^\s*/.exec(kk.text)[0],
            Xk = pk(yk, Fk);
          Ik != Xk && ak.push({
            from: kk.from,
            to: kk.from + Ik.length,
            insert: Xk
          })
        }
        return ak.length ? [kk, {
          changes: ak,
          sequential: !0
        }] : kk
      }))
    }
    const mk = ik.p.define(),
      hk = new Tk.h;

    function rk(kk) {
      let Fk = kk.firstChild,
        Ik = kk.lastChild;
      return Fk && Fk.to < Ik.from ? {
        from: Fk.to,
        to: Ik.type.isError ? kk.to : Ik.from
      } : null
    }

    function Dk(kk) {
      let Fk = kk.lastChild;
      return Fk && Fk.to == kk.to && Fk.type.isError
    }

    function Mk(kk, Fk, Ik) {
      for (let Xk of kk.facet(mk)) {
        let Tk = Xk(kk, Fk, Ik);
        if (Tk) return Tk
      }
      return function(kk, Fk, Ik) {
        let Xk = wk(kk);
        if (Xk.length < Ik) return null;
        let Tk = null;
        for (let ik = Xk.resolveStack(Ik, 1); ik; ik = ik.next) {
          let yk = ik.node;
          if (yk.to <= Ik || yk.from > Ik) continue;
          if (Tk && yk.from < Fk) break;
          let lk = yk.type.prop(hk);
          if (lk && (yk.to < Xk.length - 50 || Xk.length == kk.doc.length || !Dk(yk))) {
            let Xk = lk(yk, kk);
            Xk && Xk.from <= Ik && Xk.from >= Fk && Xk.to > Ik && (Tk = Xk)
          }
        }
        return Tk
      }(kk, Fk, Ik)
    }

    function kF(kk, Fk) {
      let Ik = Fk.mapPos(kk.from, 1),
        Xk = Fk.mapPos(kk.to, -1);
      return Ik >= Xk ? void 0 : {
        from: Ik,
        to: Xk
      }
    }
    const FF = ik.F.define({
        map: kF
      }),
      IF = ik.F.define({
        map: kF
      });

    function XF(kk) {
      let Fk = [];
      for (let {
          head: Ik
        }
        of kk.state.selection.nZ) Fk.some((kk => kk.from <= Ik && kk.to >= Ik)) || Fk.push(kk.lineBlockAt(Ik));
      return Fk
    }
    const TF = ik.I.define({
      create: () => yk.b.none,
      update(kk, Fk) {
        Fk.isUserEvent("delete") && Fk.changes.iterChangedRanges(((Fk, Ik) => kk = iF(kk, Fk, Ik))), kk = kk.map(Fk.changes);
        for (let Ik of Fk.effects)
          if (Ik.is(FF) && !lF(kk, Ik.value.from, Ik.value.to)) {
            let {
              preparePlaceholder: Xk
            } = Fk.state.facet(ZF), Tk = Xk ? yk.b.replace({
              widget: new HF(Xk(Fk.state, Ik.value))
            }) : wF;
            kk = kk.update({
              add: [Tk.range(Ik.value.from, Ik.value.to)]
            })
          } else Ik.is(IF) && (kk = kk.update({
            filter: (kk, Fk) => Ik.value.from != kk || Ik.value.to != Fk,
            filterFrom: Ik.value.from,
            filterTo: Ik.value.to
          }));
        return Fk.selection && (kk = iF(kk, Fk.selection.main.head)), kk
      },
      provide: kk => yk.i.wk.from(kk),
      toJSON(kk, Fk) {
        let Ik = [];
        return kk.between(0, Fk.doc.length, ((kk, Fk) => {
          Ik.push(kk, Fk)
        })), Ik
      },
      fromJSON(kk) {
        if (!Array.isArray(kk) || kk.length % 2) throw new RangeError("Invalid JSON for fold state");
        let Fk = [];
        for (let Ik = 0; Ik < kk.length;) {
          let Xk = kk[Ik++],
            Tk = kk[Ik++];
          if ("number" != typeof Xk || "number" != typeof Tk) throw new RangeError("Invalid JSON for fold state");
          Fk.push(wF.range(Xk, Tk))
        }
        return yk.b.set(Fk, !0)
      }
    });

    function iF(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fk,
        Xk = !1;
      return kk.between(Fk, Ik, ((kk, Tk) => {
        kk < Ik && Tk > Fk && (Xk = !0)
      })), Xk ? kk.update({
        filterFrom: Fk,
        filterTo: Ik,
        filter: (kk, Xk) => kk >= Ik || Xk <= Fk
      }) : kk
    }

    function yF(kk, Fk, Ik) {
      var Xk;
      let Tk = null;
      return null === (Xk = kk.field(TF, !1)) || void 0 === Xk || Xk.between(Fk, Ik, ((kk, Fk) => {
        (!Tk || Tk.from > kk) && (Tk = {
          from: kk,
          to: Fk
        })
      })), Tk
    }

    function lF(kk, Fk, Ik) {
      let Xk = !1;
      return kk.between(Fk, Fk, ((kk, Tk) => {
        kk == Fk && Tk == Ik && (Xk = !0)
      })), Xk
    }

    function aF(kk, Fk) {
      return kk.field(TF, !1) ? Fk : Fk.concat(ik.F.appendConfig.of(jF()))
    }

    function qF(kk, Fk) {
      let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Xk = kk.state.doc.lineAt(Fk.from).number,
        Tk = kk.state.doc.lineAt(Fk.to).number;
      return yk.i.announce.of(`${kk.state.phrase(Ik?"Folded lines":"Unfolded lines")} ${Xk} ${kk.state.phrase("to")} ${Tk}.`)
    }
    const LF = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: kk => {
          for (let Fk of XF(kk)) {
            let Ik = Mk(kk.state, Fk.from, Fk.to);
            if (Ik) return kk.dispatch({
              effects: aF(kk.state, [FF.of(Ik), qF(kk, Ik)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: kk => {
          if (!kk.state.field(TF, !1)) return !1;
          let Fk = [];
          for (let Ik of XF(kk)) {
            let Xk = yF(kk.state, Ik.from, Ik.to);
            Xk && Fk.push(IF.of(Xk), qF(kk, Xk, !1))
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
          } = kk, Ik = [];
          for (let Xk = 0; Xk < Fk.doc.length;) {
            let Tk = kk.lineBlockAt(Xk),
              ik = Mk(Fk, Tk.from, Tk.to);
            ik && Ik.push(FF.of(ik)), Xk = (ik ? kk.lineBlockAt(ik.to) : Tk).to + 1
          }
          return Ik.length && kk.dispatch({
            effects: aF(kk.state, Ik)
          }), !!Ik.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: kk => {
          let Fk = kk.state.field(TF, !1);
          if (!Fk || !Fk.size) return !1;
          let Ik = [];
          return Fk.between(0, kk.state.doc.length, ((kk, Fk) => {
            Ik.push(IF.of({
              from: kk,
              to: Fk
            }))
          })), kk.dispatch({
            effects: Ik
          }), !0
        }
      }],
      tF = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      ZF = ik.p.define({
        combine: kk => (0, ik.R)(kk, tF)
      });

    function jF(kk) {
      let Fk = [TF, KF];
      return kk && Fk.push(ZF.of(kk)), Fk
    }

    function eF(kk, Fk) {
      let {
        state: Ik
      } = kk, Xk = Ik.facet(ZF), Tk = Fk => {
        let Ik = kk.lineBlockAt(kk.posAtDOM(Fk.target)),
          Xk = yF(kk.state, Ik.from, Ik.to);
        Xk && kk.dispatch({
          effects: IF.of(Xk)
        }), Fk.preventDefault()
      };
      if (Xk.placeholderDOM) return Xk.placeholderDOM(kk, Tk, Fk);
      let ik = document.createElement("span");
      return ik.textContent = Xk.placeholderText, ik.setAttribute("aria-label", Ik.phrase("folded code")), ik.title = Ik.phrase("unfold"), ik.className = "cm-foldPlaceholder", ik.onclick = Tk, ik
    }
    const wF = yk.b.replace({
      widget: new class extends yk.o {
        toDOM(kk) {
          return eF(kk, null)
        }
      }
    });
    class HF extends yk.o {
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
    const JF = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class xF extends yk.j {
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

    function PF() {
      let kk = {
          ...JF,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        Fk = new xF(kk, !0),
        Ik = new xF(kk, !1),
        Xk = yk.l.fromClass(class {
          constructor(kk) {
            this.from = kk.viewport.from, this.markers = this.buildMarkers(kk)
          }
          update(Fk) {
            (Fk.docChanged || Fk.viewportChanged || Fk.startState.facet(vk) != Fk.state.facet(vk) || Fk.startState.field(TF, !1) != Fk.state.field(TF, !1) || wk(Fk.startState) != wk(Fk.state) || kk.foldingChanged(Fk)) && (this.markers = this.buildMarkers(Fk.view))
          }
          buildMarkers(kk) {
            let Xk = new ik.y;
            for (let Tk of kk.viewportLineBlocks) {
              let ik = yF(kk.state, Tk.from, Tk.to) ? Ik : Mk(kk.state, Tk.from, Tk.to) ? Fk : null;
              ik && Xk.add(Tk.from, Tk.from, ik)
            }
            return Xk.finish()
          }
        }),
        {
          domEventHandlers: Tk
        } = kk;
      return [Xk, (0, yk.E)({
        class: "cm-foldGutter",
        markers(kk) {
          var Fk;
          return (null === (Fk = kk.plugin(Xk)) || void 0 === Fk ? void 0 : Fk.markers) || ik.A.empty
        },
        initialSpacer: () => new xF(kk, !1),
        domEventHandlers: {
          ...Tk,
          click: (kk, Fk, Ik) => {
            if (Tk.click && Tk.click(kk, Fk, Ik)) return !0;
            let Xk = yF(kk.state, Fk.from, Fk.to);
            if (Xk) return kk.dispatch({
              effects: IF.of(Xk)
            }), !0;
            let ik = Mk(kk.state, Fk.from, Fk.to);
            return !!ik && (kk.dispatch({
              effects: FF.of(ik)
            }), !0)
          }
        }
      }), jF()]
    }
    const KF = yk.i.baseTheme({
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
    class QF {
      constructor(kk, Fk) {
        let Ik;

        function Xk(kk) {
          let Fk = ak.e.newName();
          return (Ik || (Ik = Object.create(null)))["." + Fk] = kk, Fk
        }
        this.specs = kk;
        const Tk = "string" == typeof Fk.all ? Fk.all : Fk.all ? Xk(Fk.all) : void 0,
          ik = Fk.scope;
        this.scope = ik instanceof Zk ? kk => kk.prop(qk) == ik.data : ik ? kk => kk == ik : void 0, this.style = (0, lk.j)(kk.map((kk => ({
          tag: kk.tag,
          class: kk.class || Xk(Object.assign({}, kk, {
            tag: null
          }))
        }))), {
          all: Tk
        }).style, this.module = Ik ? new ak.e(Ik) : null, this.themeType = Fk.themeType
      }
      static define(kk, Fk) {
        return new QF(kk, Fk || {})
      }
    }
    const sF = ik.p.define(),
      VF = ik.p.define({
        combine: kk => kk.length ? [kk[0]] : null
      });

    function zF(kk) {
      let Fk = kk.facet(sF);
      return Fk.length ? Fk : kk.facet(VF)
    }

    function SF(kk, Fk) {
      let Ik, Xk = [vF];
      return kk instanceof QF && (kk.module && Xk.push(yk.i.styleModule.of(kk.module)), Ik = kk.themeType), (null === Fk || void 0 === Fk ? void 0 : Fk.fallback) ? Xk.push(VF.of(kk)) : Ik ? Xk.push(sF.computeN([yk.i.darkTheme], (Fk => Fk.facet(yk.i.darkTheme) == ("dark" == Ik) ? [kk] : []))) : Xk.push(sF.of(kk)), Xk
    }
    class oF {
      constructor(kk) {
        this.markCache = Object.create(null), this.tree = wk(kk.state), this.wk = this.buildDeco(kk, zF(kk.state)), this.decoratedTo = kk.viewport.to
      }
      update(kk) {
        let Fk = wk(kk.state),
          Ik = zF(kk.state),
          Xk = Ik != zF(kk.startState),
          {
            viewport: Tk
          } = kk.view,
          ik = kk.changes.mapPos(this.decoratedTo, 1);
        Fk.length < Tk.to && !Xk && Fk.type == this.tree.type && ik >= Tk.to ? (this.wk = this.wk.map(kk.changes), this.decoratedTo = ik) : (Fk != this.tree || kk.viewportChanged || Xk) && (this.tree = Fk, this.wk = this.buildDeco(kk.view, Ik), this.decoratedTo = Tk.to)
      }
      buildDeco(kk, Fk) {
        if (!Fk || !this.tree.length) return yk.b.none;
        let Ik = new ik.y;
        for (let {
            from: Xk,
            to: Tk
          }
          of kk.W9)(0, lk.d)(this.tree, Fk, ((kk, Fk, Xk) => {
          Ik.add(kk, Fk, this.markCache[Xk] || (this.markCache[Xk] = yk.b.mark({
            class: Xk
          })))
        }), Xk, Tk);
        return Ik.finish()
      }
    }
    const vF = ik.u.high(yk.l.fromClass(oF, {
        wk: kk => kk.wk
      })),
      EF = QF.define([{
        tag: lk.k.meta,
        color: "#404740"
      }, {
        tag: lk.k.link,
        textDecoration: "underline"
      }, {
        tag: lk.k.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: lk.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: lk.k.strong,
        fontWeight: "bold"
      }, {
        tag: lk.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: lk.k.keyword,
        color: "#708"
      }, {
        tag: [lk.k.atom, lk.k.bool, lk.k.url, lk.k.contentSeparator, lk.k.labelName],
        color: "#219"
      }, {
        tag: [lk.k.literal, lk.k.inserted],
        color: "#164"
      }, {
        tag: [lk.k.string, lk.k.deleted],
        color: "#a11"
      }, {
        tag: [lk.k.regexp, lk.k.escape, lk.k.special(lk.k.string)],
        color: "#e40"
      }, {
        tag: lk.k.definition(lk.k.variableName),
        color: "#00f"
      }, {
        tag: lk.k.local(lk.k.variableName),
        color: "#30a"
      }, {
        tag: [lk.k.typeName, lk.k.namespace],
        color: "#085"
      }, {
        tag: lk.k.className,
        color: "#167"
      }, {
        tag: [lk.k.special(lk.k.variableName), lk.k.macroName],
        color: "#256"
      }, {
        tag: lk.k.definition(lk.k.propertyName),
        color: "#00c"
      }, {
        tag: lk.k.comment,
        color: "#940"
      }, {
        tag: lk.k.invalid,
        color: "#f00"
      }]),
      OF = yk.i.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      nF = 1e4,
      GF = "()[]{}",
      pF = ik.p.define({
        combine: kk => (0, ik.R)(kk, {
          afterCursor: !0,
          brackets: GF,
          maxScanDistance: nF,
          renderMatch: RF
        })
      }),
      uF = yk.b.mark({
        class: "cm-matchingBracket"
      }),
      bF = yk.b.mark({
        class: "cm-nonmatchingBracket"
      });

    function RF(kk) {
      let Fk = [],
        Ik = kk.matched ? uF : bF;
      return Fk.push(Ik.range(kk.start.from, kk.start.to)), kk.end && Fk.push(Ik.range(kk.end.from, kk.end.to)), Fk
    }

    function UF(kk) {
      let Fk = [],
        Ik = kk.facet(pF);
      for (let Xk of kk.selection.nZ) {
        if (!Xk.empty) continue;
        let Tk = BF(kk, Xk.head, -1, Ik) || Xk.head > 0 && BF(kk, Xk.head - 1, 1, Ik) || Ik.afterCursor && (BF(kk, Xk.head, 1, Ik) || Xk.head < kk.doc.length && BF(kk, Xk.head + 1, -1, Ik));
        Tk && (Fk = Fk.concat(Ik.renderMatch(Tk, kk)))
      }
      return yk.b.set(Fk, !0)
    }
    const CF = [yk.l.fromClass(class {
      constructor(kk) {
        this.paused = !1, this.wk = UF(kk.state)
      }
      update(kk) {
        (kk.docChanged || kk.selectionSet || this.paused) && (kk.view.composing ? (this.wk = this.wk.map(kk.changes), this.paused = !0) : (this.wk = UF(kk.state), this.paused = !1))
      }
    }, {
      wk: kk => kk.wk
    }), OF];

    function NF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [pF.of(kk), CF]
    }
    const cF = new Tk.h;

    function WF(kk, Fk, Ik) {
      let Xk = kk.prop(Fk < 0 ? Tk.h.openedBy : Tk.h.closedBy);
      if (Xk) return Xk;
      if (1 == kk.name.length) {
        let Xk = Ik.indexOf(kk.name);
        if (Xk > -1 && Xk % 2 == (Fk < 0 ? 1 : 0)) return [Ik[Xk + Fk]]
      }
      return null
    }

    function fF(kk) {
      let Fk = kk.type.prop(cF);
      return Fk ? Fk(kk.node) : kk
    }

    function BF(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        Tk = Xk.maxScanDistance || nF,
        ik = Xk.brackets || GF,
        yk = wk(kk),
        lk = yk.resolveInner(Fk, Ik);
      for (let ak = lk; ak; ak = ak.parent) {
        let Xk = WF(ak.type, Ik, ik);
        if (Xk && ak.from < ak.to) {
          let Tk = fF(ak);
          if (Tk && (Ik > 0 ? Fk >= Tk.from && Fk < Tk.to : Fk > Tk.from && Fk <= Tk.to)) return dF(kk, Fk, Ik, ak, Tk, Xk, ik)
        }
      }
      return function(kk, Fk, Ik, Xk, Tk, ik, yk) {
        if (Ik < 0 ? !Fk : Fk == kk.doc.length) return null;
        let lk = Ik < 0 ? kk.sliceDoc(Fk - 1, Fk) : kk.sliceDoc(Fk, Fk + 1),
          ak = yk.indexOf(lk);
        if (ak < 0 || ak % 2 == 0 != Ik > 0) return null;
        let qk = {
            from: Ik < 0 ? Fk - 1 : Fk,
            to: Ik > 0 ? Fk + 1 : Fk
          },
          Lk = kk.doc.iterRange(Fk, Ik > 0 ? kk.doc.length : 0),
          tk = 0;
        for (let Zk = 0; !Lk.next().done && Zk <= ik;) {
          let kk = Lk.value;
          Ik < 0 && (Zk += kk.length);
          let ik = Fk + Zk * Ik;
          for (let Fk = Ik > 0 ? 0 : kk.length - 1, lk = Ik > 0 ? kk.length : -1; Fk != lk; Fk += Ik) {
            let lk = yk.indexOf(kk[Fk]);
            if (!(lk < 0 || Xk.resolveInner(ik + Fk, 1).type != Tk))
              if (lk % 2 == 0 == Ik > 0) tk++;
              else {
                if (1 == tk) return {
                  start: qk,
                  end: {
                    from: ik + Fk,
                    to: ik + Fk + 1
                  },
                  matched: lk >> 1 == ak >> 1
                };
                tk--
              }
          }
          Ik > 0 && (Zk += kk.length)
        }
        return Lk.done ? {
          start: qk,
          matched: !1
        } : null
      }(kk, Fk, Ik, yk, lk.type, Tk, ik)
    }

    function dF(kk, Fk, Ik, Xk, Tk, ik, yk) {
      let lk = Xk.parent,
        ak = {
          from: Tk.from,
          to: Tk.to
        },
        qk = 0,
        Lk = null === lk || void 0 === lk ? void 0 : lk.cursor();
      if (Lk && (Ik < 0 ? Lk.childBefore(Xk.from) : Lk.childAfter(Xk.to)))
        do {
          if (Ik < 0 ? Lk.to <= Xk.from : Lk.from >= Xk.to) {
            if (0 == qk && ik.indexOf(Lk.type.name) > -1 && Lk.from < Lk.to) {
              let kk = fF(Lk);
              return {
                start: ak,
                end: kk ? {
                  from: kk.from,
                  to: kk.to
                } : void 0,
                matched: !0
              }
            }
            if (WF(Lk.type, Ik, yk)) qk++;
            else if (WF(Lk.type, -Ik, yk)) {
              if (0 == qk) {
                let kk = fF(Lk);
                return {
                  start: ak,
                  end: kk && kk.from < kk.to ? {
                    from: kk.from,
                    to: kk.to
                  } : void 0,
                  matched: !1
                }
              }
              qk--
            }
          }
        } while (Ik < 0 ? Lk.prevSibling() : Lk.nextSibling());
      return {
        start: ak,
        matched: !1
      }
    }
    const YF = Object.create(null),
      AF = [Tk.o.none],
      gF = [],
      mF = Object.create(null),
      hF = Object.create(null);
    for (let [MF, kI] of [
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
      ]) hF[MF] = DF(YF, kI);

    function rF(kk, Fk) {
      gF.indexOf(kk) > -1 || (gF.push(kk), console.warn(Fk))
    }

    function DF(kk, Fk) {
      let Ik = [];
      for (let Tk of Fk.split(" ")) {
        let Fk = [];
        for (let Ik of Tk.split(".")) {
          let Xk = kk[Ik] || lk.k[Ik];
          Xk ? "function" == typeof Xk ? Fk.length ? Fk = Fk.map(Xk) : rF(Ik, `Modifier ${Ik} used at start of tag`) : Fk.length ? rF(Ik, `Tag ${Ik} used as modifier`) : Fk = Array.isArray(Xk) ? Xk : [Xk] : rF(Ik, `Unknown highlighting tag ${Ik}`)
        }
        for (let kk of Fk) Ik.push(kk)
      }
      if (!Ik.length) return 0;
      let Xk = Fk.replace(/ /g, "_"),
        ik = Xk + " " + Ik.map((kk => kk.id)),
        yk = mF[ik];
      if (yk) return yk.id;
      let ak = mF[ik] = Tk.o.define({
        id: AF.length,
        name: Xk,
        props: [(0, lk.g)({
          [Xk]: Ik
        })]
      });
      return AF.push(ak), ak.id
    }
    yk.f.RTL, yk.f.LTR
  },
  41362: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Pk,
      h: () => Vk
    });
    var Xk = Ik(41319),
      Tk = Ik(41315),
      ik = Ik(41331);
    class yk {
      constructor(kk, Fk, Ik) {
        this.from = kk, this.to = Fk, this.diagnostic = Ik
      }
    }
    class lk {
      constructor(kk, Fk, Ik) {
        this.diagnostics = kk, this.panel = Fk, this.selected = Ik
      }
      static init(kk, Fk, Ik) {
        let ik = Ik.facet(Qk).markerFilter;
        ik && (kk = ik(kk, Ik));
        let yk = kk.slice().sort(((kk, Fk) => kk.from - Fk.from || kk.to - Fk.to)),
          qk = new Tk.y,
          Lk = [],
          tk = 0,
          Zk = Ik.doc.iter(),
          jk = 0,
          ek = Ik.doc.length;
        for (let Tk = 0;;) {
          let kk, Fk, Ik = Tk == yk.length ? null : yk[Tk];
          if (!Ik && !Lk.length) break;
          if (Lk.length) kk = tk, Fk = Lk.reduce(((kk, Fk) => Math.min(kk, Fk.to)), Ik && Ik.from > kk ? Ik.from : 1e8);
          else {
            if (kk = Ik.from, kk > ek) break;
            Fk = Ik.to, Lk.push(Ik), Tk++
          }
          for (; Tk < yk.length;) {
            let Ik = yk[Tk];
            if (Ik.from != kk || !(Ik.to > Ik.from || Ik.to == kk)) {
              Fk = Math.min(Ik.from, Fk);
              break
            }
            Lk.push(Ik), Tk++, Fk = Math.min(Ik.to, Fk)
          }
          Fk = Math.min(Fk, ek);
          let ik = !1;
          if (Lk.some((Ik => Ik.from == kk && (Ik.to == Fk || Fk == ek))) && (ik = kk == Fk, !ik && Fk - kk < 10)) {
            let Ik = kk - (jk + Zk.value.length);
            Ik > 0 && (Zk.next(Ik), jk = kk);
            for (let Xk = kk;;) {
              if (Xk >= Fk) {
                ik = !0;
                break
              }
              if (!Zk.lineBreak && jk + Zk.value.length > Xk) break;
              Xk = jk + Zk.value.length, jk += Zk.value.length, Zk.next()
            }
          }
          let lk = bk(Lk);
          if (ik) qk.add(kk, kk, Xk.b.widget({
            widget: new vk(lk),
            diagnostics: Lk.slice()
          }));
          else {
            let Ik = Lk.reduce(((kk, Fk) => Fk.markClass ? kk + " " + Fk.markClass : kk), "");
            qk.add(kk, Fk, Xk.b.mark({
              class: "cm-lintRange cm-lintRange-" + lk + Ik,
              diagnostics: Lk.slice(),
              inclusiveEnd: Lk.some((kk => kk.to > Fk))
            }))
          }
          if (tk = Fk, tk == ek) break;
          for (let Xk = 0; Xk < Lk.length; Xk++) Lk[Xk].to <= tk && Lk.splice(Xk--, 1)
        }
        let wk = qk.finish();
        return new lk(wk, Fk, ak(wk))
      }
    }

    function ak(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Xk = null;
      return kk.between(Ik, 1e9, ((kk, Ik, Tk) => {
        let {
          spec: ik
        } = Tk;
        if (!(Fk && ik.diagnostics.indexOf(Fk) < 0))
          if (Xk) {
            if (ik.diagnostics.indexOf(Xk.diagnostic) < 0) return !1;
            Xk = new yk(Xk.from, Ik, Xk.diagnostic)
          } else Xk = new yk(kk, Ik, Fk || ik.diagnostics[0])
      })), Xk
    }

    function qk(kk, Fk) {
      let Ik = Fk.pos,
        Xk = Fk.end || Ik,
        Tk = kk.state.facet(Qk).hideOn(kk, Ik, Xk);
      if (null != Tk) return Tk;
      let ik = kk.startState.doc.lineAt(Fk.pos);
      return !(!kk.effects.some((kk => kk.is(tk))) && !kk.changes.touchesRange(ik.from, Math.max(ik.to, Xk)))
    }

    function Lk(kk, Fk) {
      return kk.field(ek, !1) ? Fk : Fk.concat(Tk.F.appendConfig.of(Rk))
    }
    const tk = Tk.F.define(),
      Zk = Tk.F.define(),
      jk = Tk.F.define(),
      ek = Tk.I.define({
        create: () => new lk(Xk.b.none, null, null),
        update(kk, Fk) {
          if (Fk.docChanged && kk.diagnostics.size) {
            let Ik = kk.diagnostics.map(Fk.changes),
              Xk = null,
              Tk = kk.panel;
            if (kk.selected) {
              let Tk = Fk.changes.mapPos(kk.selected.from, 1);
              Xk = ak(Ik, kk.selected.diagnostic, Tk) || ak(Ik, null, Tk)
            }!Ik.size && Tk && Fk.state.facet(Qk).autoPanel && (Tk = null), kk = new lk(Ik, Tk, Xk)
          }
          for (let Ik of Fk.effects)
            if (Ik.is(tk)) {
              let Xk = Fk.state.facet(Qk).autoPanel ? Ik.value.length ? Ok.open : null : kk.panel;
              kk = lk.init(Ik.value, Xk, Fk.state)
            } else Ik.is(Zk) ? kk = new lk(kk.diagnostics, Ik.value ? Ok.open : null, kk.selected) : Ik.is(jk) && (kk = new lk(kk.diagnostics, kk.panel, Ik.value));
          return kk
        },
        provide: kk => [Xk.hb.from(kk, (kk => kk.panel)), Xk.i.wk.from(kk, (kk => kk.diagnostics))]
      });
    const wk = Xk.b.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function Hk(kk, Fk, Ik) {
      let Xk, {
          diagnostics: Tk
        } = kk.state.field(ek),
        ik = -1,
        yk = -1;
      Tk.between(Fk - (Ik < 0 ? 1 : 0), Fk + (Ik > 0 ? 1 : 0), ((kk, Tk, lk) => {
        let {
          spec: ak
        } = lk;
        if (Fk >= kk && Fk <= Tk && (kk == Tk || (Fk > kk || Ik > 0) && (Fk < Tk || Ik < 0))) return Xk = ak.diagnostics, ik = kk, yk = Tk, !1
      }));
      let lk = kk.state.facet(Qk).tooltipFilter;
      return Xk && lk && (Xk = lk(Xk, kk.state)), Xk ? {
        pos: ik,
        end: yk,
        above: kk.state.doc.lineAt(ik).to < yk,
        create: () => ({
          dom: Jk(kk, Xk)
        })
      } : null
    }

    function Jk(kk, Fk) {
      return (0, ik.d)("ul", {
        class: "cm-tooltip-lint"
      }, Fk.map((Fk => Sk(kk, Fk, !1))))
    }
    const xk = kk => {
        let Fk = kk.state.field(ek, !1);
        return !(!Fk || !Fk.panel) && (kk.dispatch({
          effects: Zk.of(!1)
        }), !0)
      },
      Pk = [{
        key: "Mod-Shift-m",
        run: kk => {
          let Fk = kk.state.field(ek, !1);
          Fk && Fk.panel || kk.dispatch({
            effects: Lk(kk.state, [Zk.of(!0)])
          });
          let Ik = (0, Xk.A)(kk, Ok.open);
          return Ik && Ik.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: kk => {
          let Fk = kk.state.field(ek, !1);
          if (!Fk) return !1;
          let Ik = kk.state.selection.main,
            Xk = ak(Fk.diagnostics, null, Ik.to + 1);
          return !(!Xk && (Xk = ak(Fk.diagnostics, null, 0), !Xk || Xk.from == Ik.from && Xk.to == Ik.to)) && (kk.dispatch({
            selection: {
              anchor: Xk.from,
              head: Xk.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      Kk = Xk.l.fromClass(class {
        constructor(kk) {
          this.view = kk, this.timeout = -1, this.set = !0;
          let {
            delay: Fk
          } = kk.state.facet(Qk);
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
            } = kk.facet(Qk);
            Fk.length && function(kk, Fk, Ik) {
              let Xk = [],
                Tk = -1;
              for (let ik of kk) ik.then((Ik => {
                Xk.push(Ik), clearTimeout(Tk), Xk.length == kk.length ? Fk(Xk) : Tk = setTimeout((() => Fk(Xk)), 200)
              }), Ik)
            }(Fk.map((kk => Promise.resolve(kk(this.view)))), (Fk => {
              this.view.state.doc == kk.doc && this.view.dispatch(function(kk, Fk) {
                return {
                  effects: Lk(kk, [tk.of(Fk)])
                }
              }(this.view.state, Fk.reduce(((kk, Fk) => kk.concat(Fk)))))
            }), (kk => {
              (0, Xk.V)(this.view.state, kk)
            }))
          }
        }
        update(kk) {
          let Fk = kk.state.facet(Qk);
          (kk.docChanged || Fk != kk.startState.facet(Qk) || Fk.needsRefresh && Fk.needsRefresh(kk)) && (this.lintTime = Date.now() + Fk.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, Fk.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const Qk = Tk.p.define({
      combine: kk => ({
        sources: kk.map((kk => kk.source)).filter((kk => null != kk)),
        ...(0, Tk.R)(kk.map((kk => kk.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: sk,
          tooltipFilter: sk,
          needsRefresh: (kk, Fk) => kk ? Fk ? Ik => kk(Ik) || Fk(Ik) : kk : Fk,
          hideOn: (kk, Fk) => kk ? Fk ? (Ik, Xk, Tk) => kk(Ik, Xk, Tk) || Fk(Ik, Xk, Tk) : kk : Fk,
          autoPanel: (kk, Fk) => kk || Fk
        })
      })
    });

    function sk(kk, Fk) {
      return kk ? Fk ? (Ik, Xk) => Fk(kk(Ik, Xk), Xk) : kk : Fk
    }

    function Vk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [Qk.of({
        source: kk,
        config: Fk
      }), Kk, Rk]
    }

    function zk(kk) {
      let Fk = [];
      if (kk) kk: for (let {
          name: Ik
        }
        of kk) {
        for (let kk = 0; kk < Ik.length; kk++) {
          let Xk = Ik[kk];
          if (/[a-zA-Z]/.test(Xk) && !Fk.some((kk => kk.toLowerCase() == Xk.toLowerCase()))) {
            Fk.push(Xk);
            continue kk
          }
        }
        Fk.push("")
      }
      return Fk
    }

    function Sk(kk, Fk, Ik) {
      var Xk;
      let Tk = Ik ? zk(Fk.actions) : [];
      return (0, ik.d)("li", {
        class: "cm-diagnostic cm-diagnostic-" + Fk.severity
      }, (0, ik.d)("span", {
        class: "cm-diagnosticText"
      }, Fk.renderMessage ? Fk.renderMessage(kk) : Fk.message), null === (Xk = Fk.actions) || void 0 === Xk ? void 0 : Xk.map(((Ik, Xk) => {
        let yk = !1,
          lk = Xk => {
            if (Xk.preventDefault(), yk) return;
            yk = !0;
            let Tk = ak(kk.state.field(ek).diagnostics, Fk);
            Tk && Ik.apply(kk, Tk.from, Tk.to)
          },
          {
            name: qk
          } = Ik,
          Lk = Tk[Xk] ? qk.indexOf(Tk[Xk]) : -1,
          tk = Lk < 0 ? qk : [qk.slice(0, Lk), (0, ik.d)("u", qk.slice(Lk, Lk + 1)), qk.slice(Lk + 1)],
          Zk = Ik.markClass ? " " + Ik.markClass : "";
        return (0, ik.d)("button", {
          type: "button",
          class: "cm-diagnosticAction" + Zk,
          onclick: lk,
          onmousedown: lk,
          "aria-label": ` Action: ${qk}${Lk<0?"":` (access key "${Tk[Xk]})"`}.`
        }, tk)
      })), Fk.source && (0, ik.d)("div", {
        class: "cm-diagnosticSource"
      }, Fk.source))
    }
    class vk extends Xk.o {
      constructor(kk) {
        super(), this.sev = kk
      }
      eq(kk) {
        return kk.sev == this.sev
      }
      toDOM() {
        return (0, ik.d)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Ek {
      constructor(kk, Fk) {
        this.diagnostic = Fk, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = Sk(kk, Fk, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class Ok {
      constructor(kk) {
        this.view = kk, this.items = [];
        this.list = (0, ik.d)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: Fk => {
            if (!(Fk.ctrlKey || Fk.altKey || Fk.metaKey)) {
              if (27 == Fk.keyCode) xk(this.view), this.view.focus();
              else if (38 == Fk.keyCode || 33 == Fk.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == Fk.keyCode || 34 == Fk.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == Fk.keyCode) this.moveSelection(0);
              else if (35 == Fk.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == Fk.keyCode) this.view.focus();
              else {
                if (!(Fk.keyCode >= 65 && Fk.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: Ik
                  } = this.items[this.selectedIndex], Xk = zk(Ik.actions);
                  for (let Tk = 0; Tk < Xk.length; Tk++)
                    if (Xk[Tk].toUpperCase().charCodeAt(0) == Fk.keyCode) {
                      let Fk = ak(this.view.state.field(ek).diagnostics, Ik);
                      Fk && Ik.actions[Tk].apply(kk, Fk.from, Fk.to)
                    }
                }
              }
              Fk.preventDefault()
            }
          },
          onclick: kk => {
            for (let Fk = 0; Fk < this.items.length; Fk++) this.items[Fk].dom.contains(kk.target) && this.moveSelection(Fk)
          }
        }), this.dom = (0, ik.d)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, ik.d)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => xk(this.view)
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
        } = this.view.state.field(ek), Ik = 0, Xk = !1, Tk = null, ik = new Set;
        for (kk.between(0, this.view.state.doc.length, ((kk, yk, lk) => {
            let {
              spec: ak
            } = lk;
            for (let qk of ak.diagnostics) {
              if (ik.has(qk)) continue;
              ik.add(qk);
              let kk, yk = -1;
              for (let Fk = Ik; Fk < this.items.length; Fk++)
                if (this.items[Fk].diagnostic == qk) {
                  yk = Fk;
                  break
                } yk < 0 ? (kk = new Ek(this.view, qk), this.items.splice(Ik, 0, kk), Xk = !0) : (kk = this.items[yk], yk > Ik && (this.items.splice(Ik, yk - Ik), Xk = !0)), Fk && kk.diagnostic == Fk.diagnostic ? kk.dom.hasAttribute("aria-selected") || (kk.dom.setAttribute("aria-selected", "true"), Tk = kk) : kk.dom.hasAttribute("aria-selected") && kk.dom.removeAttribute("aria-selected"), Ik++
            }
          })); Ik < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Xk = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Ek(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Xk = !0), Tk ? (this.list.setAttribute("aria-activedescendant", Tk.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: Tk.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: kk => {
            let {
              sel: Fk,
              panel: Ik
            } = kk, Xk = Ik.height / this.list.offsetHeight;
            Fk.top < Ik.top ? this.list.scrollTop -= (Ik.top - Fk.top) / Xk : Fk.bottom > Ik.bottom && (this.list.scrollTop += (Fk.bottom - Ik.bottom) / Xk)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Xk && this.sync()
      }
      sync() {
        let kk = this.list.firstChild;

        function Fk() {
          let Fk = kk;
          kk = Fk.nextSibling, Fk.remove()
        }
        for (let Ik of this.items)
          if (Ik.dom.parentNode == this.list) {
            for (; kk != Ik.dom;) Fk();
            kk = Ik.dom.nextSibling
          } else this.list.insertBefore(Ik.dom, kk);
        for (; kk;) Fk()
      }
      moveSelection(kk) {
        if (this.selectedIndex < 0) return;
        let Fk = ak(this.view.state.field(ek).diagnostics, this.items[kk].diagnostic);
        Fk && this.view.dispatch({
          selection: {
            anchor: Fk.from,
            head: Fk.to
          },
          scrollIntoView: !0,
          effects: jk.of(Fk)
        })
      }
      static open(kk) {
        return new Ok(kk)
      }
    }

    function nk(kk) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(kk)}</svg>')`
    }

    function Gk(kk) {
      return nk(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${kk}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const pk = Xk.i.baseTheme({
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
        backgroundImage: Gk("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: Gk("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: Gk("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: Gk("#66d")
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

    function uk(kk) {
      return "error" == kk ? 4 : "warning" == kk ? 3 : "info" == kk ? 2 : 1
    }

    function bk(kk) {
      let Fk = "hint",
        Ik = 1;
      for (let Xk of kk) {
        let kk = uk(Xk.severity);
        kk > Ik && (Ik = kk, Fk = Xk.severity)
      }
      return Fk
    }
    Xk.j;
    const Rk = [ek, Xk.i.wk.compute([ek], (kk => {
      let {
        selected: Fk,
        panel: Ik
      } = kk.field(ek);
      return Fk && Ik && Fk.from != Fk.to ? Xk.b.set([wk.range(Fk.from, Fk.to)]) : Xk.b.none
    })), (0, Xk.M)(Hk, {
      hideOn: qk
    }), pk]
  },
  41354: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Mk,
      h: () => Jk,
      i: () => kF
    });
    var Xk = Ik(41319),
      Tk = Ik(41315),
      ik = Ik(41331);
    const yk = "function" == typeof String.prototype.normalize ? kk => kk.normalize("NFKD") : kk => kk;
    class lk {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length,
          Tk = arguments.length > 4 ? arguments[4] : void 0,
          ik = arguments.length > 5 ? arguments[5] : void 0;
        this.test = ik, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = kk.iterRange(Ik, Xk), this.bufferStart = Ik, this.normalize = Tk ? kk => Tk(yk(kk)) : yk, this.query = this.normalize(Fk)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, Tk.M)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let kk = this.peek();
          if (kk < 0) return this.done = !0, this;
          let Fk = (0, Tk.db)(kk),
            Ik = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, Tk.O)(kk);
          let Xk = this.normalize(Fk);
          if (Xk.length)
            for (let Tk = 0, ik = Ik;; Tk++) {
              let kk = Xk.charCodeAt(Tk),
                yk = this.match(kk, ik, this.bufferPos + this.bufferStart);
              if (Tk == Xk.length - 1) {
                if (yk) return this.value = yk, this;
                break
              }
              ik == Ik && Tk < Fk.length && Fk.charCodeAt(Tk) == kk && ik++
            }
        }
      }
      match(kk, Fk, Ik) {
        let Xk = null;
        for (let Tk = 0; Tk < this.matches.length; Tk += 2) {
          let Fk = this.matches[Tk],
            ik = !1;
          this.query.charCodeAt(Fk) == kk && (Fk == this.query.length - 1 ? Xk = {
            from: this.matches[Tk + 1],
            to: Ik
          } : (this.matches[Tk]++, ik = !0)), ik || (this.matches.splice(Tk, 2), Tk -= 2)
        }
        return this.query.charCodeAt(0) == kk && (1 == this.query.length ? Xk = {
          from: Fk,
          to: Ik
        } : this.matches.push(1, Fk)), Xk && this.test && !this.test(Xk.from, Xk.to, this.buffer, this.bufferStart) && (Xk = null), Xk
      }
    }
    "undefined" != typeof Symbol && (lk.prototype[Symbol.iterator] = function() {
      return this
    });
    const ak = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      qk = "gm" + (null == /x/.unicode ? "" : "u");
    class Lk {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kk.length;
        if (this.text = kk, this.to = Tk, this.curLine = "", this.done = !1, this.value = ak, /\\[sWDnr]|\n|\r|\[\^/.test(Fk)) return new jk(kk, Fk, Ik, Xk, Tk);
        this.re = new RegExp(Fk, qk + ((null === Ik || void 0 === Ik ? void 0 : Ik.ignoreCase) ? "i" : "")), this.test = null === Ik || void 0 === Ik ? void 0 : Ik.test, this.iter = kk.iter();
        let ik = kk.lineAt(Xk);
        this.curLineStart = ik.from, this.matchPos = ek(kk, Xk), this.getLine(this.curLineStart)
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
            let Ik = this.curLineStart + Fk.index,
              Xk = Ik + Fk[0].length;
            if (this.matchPos = ek(this.text, Xk + (Ik == Xk ? 1 : 0)), Ik == this.curLineStart + this.curLine.length && this.nextLine(), (Ik < Xk || Ik > this.value.to) && (!this.test || this.test(Ik, Xk, Fk))) return this.value = {
              from: Ik,
              to: Xk,
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
    const tk = new WeakMap;
    class Zk {
      constructor(kk, Fk) {
        this.from = kk, this.text = Fk
      }
      get to() {
        return this.from + this.text.length
      }
      static get(kk, Fk, Ik) {
        let Xk = tk.get(kk);
        if (!Xk || Xk.from >= Ik || Xk.to <= Fk) {
          let Xk = new Zk(Fk, kk.sliceString(Fk, Ik));
          return tk.set(kk, Xk), Xk
        }
        if (Xk.from == Fk && Xk.to == Ik) return Xk;
        let {
          text: Tk,
          from: ik
        } = Xk;
        return ik > Fk && (Tk = kk.sliceString(Fk, ik) + Tk, ik = Fk), Xk.to < Ik && (Tk += kk.sliceString(Xk.to, Ik)), tk.set(kk, new Zk(ik, Tk)), new Zk(Fk, Tk.slice(Fk - ik, Ik - ik))
      }
    }
    class jk {
      constructor(kk, Fk, Ik, Xk, Tk) {
        this.text = kk, this.to = Tk, this.done = !1, this.value = ak, this.matchPos = ek(kk, Xk), this.re = new RegExp(Fk, qk + ((null === Ik || void 0 === Ik ? void 0 : Ik.ignoreCase) ? "i" : "")), this.test = null === Ik || void 0 === Ik ? void 0 : Ik.test, this.flat = Zk.get(kk, Xk, this.chunkEnd(Xk + 5e3))
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
              Ik = kk + Fk[0].length;
            if ((this.flat.to >= this.to || Fk.index + Fk[0].length <= this.flat.text.length - 10) && (!this.test || this.test(kk, Ik, Fk))) return this.value = {
              from: kk,
              to: Ik,
              match: Fk
            }, this.matchPos = ek(this.text, Ik + (kk == Ik ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = Zk.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function ek(kk, Fk) {
      if (Fk >= kk.length) return Fk;
      let Ik, Xk = kk.lineAt(Fk);
      for (; Fk < Xk.to && (Ik = Xk.text.charCodeAt(Fk - Xk.from)) >= 56320 && Ik < 57344;) Fk++;
      return Fk
    }
    "undefined" != typeof Symbol && (Lk.prototype[Symbol.iterator] = jk.prototype[Symbol.iterator] = function() {
      return this
    });
    const wk = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      Hk = Tk.p.define({
        combine: kk => (0, Tk.R)(kk, wk, {
          highlightWordAroundCursor: (kk, Fk) => kk || Fk,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function Jk(kk) {
      let Fk = [sk, Qk];
      return kk && Fk.push(Hk.of(kk)), Fk
    }
    const xk = Xk.b.mark({
        class: "cm-selectionMatch"
      }),
      Pk = Xk.b.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function Kk(kk, Fk, Ik, Xk) {
      return (0 == Ik || kk(Fk.sliceDoc(Ik - 1, Ik)) != Tk.h.Word) && (Xk == Fk.doc.length || kk(Fk.sliceDoc(Xk, Xk + 1)) != Tk.h.Word)
    }
    const Qk = Xk.l.fromClass(class {
        constructor(kk) {
          this.wk = this.getDeco(kk)
        }
        update(kk) {
          (kk.selectionSet || kk.docChanged || kk.viewportChanged) && (this.wk = this.getDeco(kk.view))
        }
        getDeco(kk) {
          let Fk = kk.state.facet(Hk),
            {
              state: Ik
            } = kk,
            ik = Ik.selection;
          if (ik.nZ.length > 1) return Xk.b.none;
          let yk, ak = ik.main,
            qk = null;
          if (ak.empty) {
            if (!Fk.highlightWordAroundCursor) return Xk.b.none;
            let kk = Ik.wordAt(ak.head);
            if (!kk) return Xk.b.none;
            qk = Ik.charCategorizer(ak.head), yk = Ik.sliceDoc(kk.from, kk.to)
          } else {
            let kk = ak.to - ak.from;
            if (kk < Fk.minSelectionLength || kk > 200) return Xk.b.none;
            if (Fk.wholeWords) {
              if (yk = Ik.sliceDoc(ak.from, ak.to), qk = Ik.charCategorizer(ak.head), !Kk(qk, Ik, ak.from, ak.to) || ! function(kk, Fk, Ik, Xk) {
                  return kk(Fk.sliceDoc(Ik, Ik + 1)) == Tk.h.Word && kk(Fk.sliceDoc(Xk - 1, Xk)) == Tk.h.Word
                }(qk, Ik, ak.from, ak.to)) return Xk.b.none
            } else if (yk = Ik.sliceDoc(ak.from, ak.to), !yk) return Xk.b.none
          }
          let Lk = [];
          for (let Tk of kk.W9) {
            let kk = new lk(Ik.doc, yk, Tk.from, Tk.to);
            for (; !kk.next().done;) {
              let {
                from: Tk,
                to: ik
              } = kk.value;
              if ((!qk || Kk(qk, Ik, Tk, ik)) && (ak.empty && Tk <= ak.from && ik >= ak.to ? Lk.push(Pk.range(Tk, ik)) : (Tk >= ak.to || ik <= ak.from) && Lk.push(xk.range(Tk, ik)), Lk.length > Fk.maxMatches)) return Xk.b.none
            }
          }
          return Xk.b.set(Lk)
        }
      }, {
        wk: kk => kk.wk
      }),
      sk = Xk.i.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const Vk = Tk.p.define({
      combine: kk => (0, Tk.R)(kk, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: kk => new FF(kk),
        scrollToMatch: kk => Xk.i.scrollIntoView(kk)
      })
    });
    class zk {
      constructor(kk) {
        this.search = kk.search, this.caseSensitive = !!kk.caseSensitive, this.literal = !!kk.literal, this.regexp = !!kk.regexp, this.replace = kk.replace || "", this.valid = !!this.search && (!this.regexp || function(kk) {
          try {
            return new RegExp(kk, qk), !0
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
        return this.regexp ? new pk(this) : new Ek(this)
      }
      getCursor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = kk.doc ? kk : Tk.m.create({
            doc: kk
          });
        return null == Ik && (Ik = Xk.doc.length), this.regexp ? Ok(this, Xk, Fk, Ik) : vk(this, Xk, Fk, Ik)
      }
    }
    class Sk {
      constructor(kk) {
        this.spec = kk
      }
    }

    function vk(kk, Fk, Ik, Xk) {
      let ik;
      var yk, ak;
      return kk.wholeWord && (yk = Fk.doc, ak = Fk.charCategorizer(Fk.selection.main.head), ik = (kk, Fk, Ik, Xk) => ((Xk > kk || Xk + Ik.length < Fk) && (Xk = Math.max(0, kk - 2), Ik = yk.sliceString(Xk, Math.min(yk.length, Fk + 2))), (ak(nk(Ik, kk - Xk)) != Tk.h.Word || ak(Gk(Ik, kk - Xk)) != Tk.h.Word) && (ak(Gk(Ik, Fk - Xk)) != Tk.h.Word || ak(nk(Ik, Fk - Xk)) != Tk.h.Word))), kk.test && (ik = function(kk, Fk, Ik) {
        return (Xk, Tk, ik, yk) => {
          if (Ik && !Ik(Xk, Tk, ik, yk)) return !1;
          let lk = Xk >= yk && Tk <= yk + ik.length ? ik.slice(Xk - yk, Tk - yk) : Fk.doc.sliceString(Xk, Tk);
          return kk(lk, Fk, Xk, Tk)
        }
      }(kk.test, Fk, ik)), new lk(Fk.doc, kk.unquoted, Ik, Xk, kk.caseSensitive ? void 0 : kk => kk.toLowerCase(), ik)
    }
    class Ek extends Sk {
      constructor(kk) {
        super(kk)
      }
      nextMatch(kk, Fk, Ik) {
        let Xk = vk(this.spec, kk, Ik, kk.doc.length).nextOverlapping();
        if (Xk.done) {
          let Ik = Math.min(kk.doc.length, Fk + this.spec.unquoted.length);
          Xk = vk(this.spec, kk, 0, Ik).nextOverlapping()
        }
        return Xk.done || Xk.value.from == Fk && Xk.value.to == Ik ? null : Xk.value
      }
      prevMatchInRange(kk, Fk, Ik) {
        for (let Xk = Ik;;) {
          let Ik = Math.max(Fk, Xk - 1e4 - this.spec.unquoted.length),
            Tk = vk(this.spec, kk, Ik, Xk),
            ik = null;
          for (; !Tk.nextOverlapping().done;) ik = Tk.value;
          if (ik) return ik;
          if (Ik == Fk) return null;
          Xk -= 1e4
        }
      }
      prevMatch(kk, Fk, Ik) {
        let Xk = this.prevMatchInRange(kk, 0, Fk);
        return Xk || (Xk = this.prevMatchInRange(kk, Math.max(0, Ik - this.spec.unquoted.length), kk.doc.length)), !Xk || Xk.from == Fk && Xk.to == Ik ? null : Xk
      }
      getReplacement(kk) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(kk, Fk) {
        let Ik = vk(this.spec, kk, 0, kk.doc.length),
          Xk = [];
        for (; !Ik.next().done;) {
          if (Xk.length >= Fk) return null;
          Xk.push(Ik.value)
        }
        return Xk
      }
      highlight(kk, Fk, Ik, Xk) {
        let Tk = vk(this.spec, kk, Math.max(0, Fk - this.spec.unquoted.length), Math.min(Ik + this.spec.unquoted.length, kk.doc.length));
        for (; !Tk.next().done;) Xk(Tk.value.from, Tk.value.to)
      }
    }

    function Ok(kk, Fk, Ik, Xk) {
      let ik;
      var yk;
      return kk.wholeWord && (yk = Fk.charCategorizer(Fk.selection.main.head), ik = (kk, Fk, Ik) => !Ik[0].length || (yk(nk(Ik.input, Ik.index)) != Tk.h.Word || yk(Gk(Ik.input, Ik.index)) != Tk.h.Word) && (yk(Gk(Ik.input, Ik.index + Ik[0].length)) != Tk.h.Word || yk(nk(Ik.input, Ik.index + Ik[0].length)) != Tk.h.Word)), kk.test && (ik = function(kk, Fk, Ik) {
        return (Xk, Tk, ik) => (!Ik || Ik(Xk, Tk, ik)) && kk(ik[0], Fk, Xk, Tk)
      }(kk.test, Fk, ik)), new Lk(Fk.doc, kk.search, {
        ignoreCase: !kk.caseSensitive,
        test: ik
      }, Ik, Xk)
    }

    function nk(kk, Fk) {
      return kk.slice((0, Tk.Y)(kk, Fk, !1), Fk)
    }

    function Gk(kk, Fk) {
      return kk.slice(Fk, (0, Tk.Y)(kk, Fk))
    }
    class pk extends Sk {
      nextMatch(kk, Fk, Ik) {
        let Xk = Ok(this.spec, kk, Ik, kk.doc.length).next();
        return Xk.done && (Xk = Ok(this.spec, kk, 0, Fk).next()), Xk.done ? null : Xk.value
      }
      prevMatchInRange(kk, Fk, Ik) {
        for (let Xk = 1;; Xk++) {
          let Tk = Math.max(Fk, Ik - 1e4 * Xk),
            ik = Ok(this.spec, kk, Tk, Ik),
            yk = null;
          for (; !ik.next().done;) yk = ik.value;
          if (yk && (Tk == Fk || yk.from > Tk + 10)) return yk;
          if (Tk == Fk) return null
        }
      }
      prevMatch(kk, Fk, Ik) {
        return this.prevMatchInRange(kk, 0, Fk) || this.prevMatchInRange(kk, Ik, kk.doc.length)
      }
      getReplacement(kk) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((Fk, Ik) => {
          if ("&" == Ik) return kk.match[0];
          if ("$" == Ik) return "$";
          for (let Xk = Ik.length; Xk > 0; Xk--) {
            let Fk = +Ik.slice(0, Xk);
            if (Fk > 0 && Fk < kk.match.length) return kk.match[Fk] + Ik.slice(Xk)
          }
          return Fk
        }))
      }
      matchAll(kk, Fk) {
        let Ik = Ok(this.spec, kk, 0, kk.doc.length),
          Xk = [];
        for (; !Ik.next().done;) {
          if (Xk.length >= Fk) return null;
          Xk.push(Ik.value)
        }
        return Xk
      }
      highlight(kk, Fk, Ik, Xk) {
        let Tk = Ok(this.spec, kk, Math.max(0, Fk - 250), Math.min(Ik + 250, kk.doc.length));
        for (; !Tk.next().done;) Xk(Tk.value.from, Tk.value.to)
      }
    }
    const uk = Tk.F.define(),
      bk = Tk.F.define(),
      Rk = Tk.I.define({
        create: kk => new Uk(mk(kk).create(), null),
        update(kk, Fk) {
          for (let Ik of Fk.effects) Ik.is(uk) ? kk = new Uk(Ik.value.create(), kk.panel) : Ik.is(bk) && (kk = new Uk(kk.query, Ik.value ? gk : null));
          return kk
        },
        provide: kk => Xk.hb.from(kk, (kk => kk.panel))
      });
    class Uk {
      constructor(kk, Fk) {
        this.query = kk, this.panel = Fk
      }
    }
    const Ck = Xk.b.mark({
        class: "cm-searchMatch"
      }),
      Nk = Xk.b.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      ck = Xk.l.fromClass(class {
        constructor(kk) {
          this.view = kk, this.wk = this.highlight(kk.state.field(Rk))
        }
        update(kk) {
          let Fk = kk.state.field(Rk);
          (Fk != kk.startState.field(Rk) || kk.docChanged || kk.selectionSet || kk.viewportChanged) && (this.wk = this.highlight(Fk))
        }
        highlight(kk) {
          let {
            query: Fk,
            panel: Ik
          } = kk;
          if (!Ik || !Fk.spec.valid) return Xk.b.none;
          let {
            view: ik
          } = this, yk = new Tk.y;
          for (let Xk = 0, Tk = ik.W9, lk = Tk.length; Xk < lk; Xk++) {
            let {
              from: kk,
              to: Ik
            } = Tk[Xk];
            for (; Xk < lk - 1 && Ik > Tk[Xk + 1].from - 500;) Ik = Tk[++Xk].to;
            Fk.highlight(ik.state, kk, Ik, ((kk, Fk) => {
              let Ik = ik.state.selection.nZ.some((Ik => Ik.from == kk && Ik.to == Fk));
              yk.add(kk, Fk, Ik ? Nk : Ck)
            }))
          }
          return yk.finish()
        }
      }, {
        wk: kk => kk.wk
      });

    function Wk(kk) {
      return Fk => {
        let Ik = Fk.state.field(Rk, !1);
        return Ik && Ik.query.spec.valid ? kk(Fk, Ik) : Dk(Fk)
      }
    }
    const fk = Wk(((kk, Fk) => {
        let {
          query: Ik
        } = Fk, {
          to: Xk
        } = kk.state.selection.main, ik = Ik.nextMatch(kk.state, Xk, Xk);
        if (!ik) return !1;
        let yk = Tk.k.single(ik.from, ik.to),
          lk = kk.state.facet(Vk);
        return kk.dispatch({
          selection: yk,
          effects: [iF(kk, ik), lk.scrollToMatch(yk.main, kk)],
          userEvent: "select.search"
        }), rk(kk), !0
      })),
      Bk = Wk(((kk, Fk) => {
        let {
          query: Ik
        } = Fk, {
          state: Xk
        } = kk, {
          from: ik
        } = Xk.selection.main, yk = Ik.prevMatch(Xk, ik, ik);
        if (!yk) return !1;
        let lk = Tk.k.single(yk.from, yk.to),
          ak = kk.state.facet(Vk);
        return kk.dispatch({
          selection: lk,
          effects: [iF(kk, yk), ak.scrollToMatch(lk.main, kk)],
          userEvent: "select.search"
        }), rk(kk), !0
      })),
      dk = Wk(((kk, Fk) => {
        let {
          query: Ik
        } = Fk, Xk = Ik.matchAll(kk.state, 1e3);
        return !(!Xk || !Xk.length) && (kk.dispatch({
          selection: Tk.k.create(Xk.map((kk => Tk.k.range(kk.from, kk.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      Yk = Wk(((kk, Fk) => {
        let {
          query: Ik
        } = Fk, {
          state: ik
        } = kk, {
          from: yk,
          to: lk
        } = ik.selection.main;
        if (ik.readOnly) return !1;
        let ak = Ik.nextMatch(ik, yk, yk);
        if (!ak) return !1;
        let qk, Lk, tk = ak,
          Zk = [],
          jk = [];
        tk.from == yk && tk.to == lk && (Lk = ik.toText(Ik.getReplacement(tk)), Zk.push({
          from: tk.from,
          to: tk.to,
          insert: Lk
        }), tk = Ik.nextMatch(ik, tk.from, tk.to), jk.push(Xk.i.announce.of(ik.phrase("replaced match on line $", ik.doc.lineAt(yk).number) + ".")));
        let ek = kk.state.changes(Zk);
        return tk && (qk = Tk.k.single(tk.from, tk.to).map(ek), jk.push(iF(kk, tk)), jk.push(ik.facet(Vk).scrollToMatch(qk.main, kk))), kk.dispatch({
          changes: ek,
          selection: qk,
          effects: jk,
          userEvent: "input.replace"
        }), !0
      })),
      Ak = Wk(((kk, Fk) => {
        let {
          query: Ik
        } = Fk;
        if (kk.state.readOnly) return !1;
        let Tk = Ik.matchAll(kk.state, 1e9).map((kk => {
          let {
            from: Fk,
            to: Xk
          } = kk;
          return {
            from: Fk,
            to: Xk,
            insert: Ik.getReplacement(kk)
          }
        }));
        if (!Tk.length) return !1;
        let ik = kk.state.phrase("replaced $ matches", Tk.length) + ".";
        return kk.dispatch({
          changes: Tk,
          effects: Xk.i.announce.of(ik),
          userEvent: "input.replace.all"
        }), !0
      }));

    function gk(kk) {
      return kk.state.facet(Vk).createPanel(kk)
    }

    function mk(kk, Fk) {
      var Ik, Xk, Tk, ik, yk;
      let lk = kk.selection.main,
        ak = lk.empty || lk.to > lk.from + 100 ? "" : kk.sliceDoc(lk.from, lk.to);
      if (Fk && !ak) return Fk;
      let qk = kk.facet(Vk);
      return new zk({
        search: (null !== (Ik = null === Fk || void 0 === Fk ? void 0 : Fk.literal) && void 0 !== Ik ? Ik : qk.literal) ? ak : ak.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Xk = null === Fk || void 0 === Fk ? void 0 : Fk.caseSensitive) && void 0 !== Xk ? Xk : qk.caseSensitive,
        literal: null !== (Tk = null === Fk || void 0 === Fk ? void 0 : Fk.literal) && void 0 !== Tk ? Tk : qk.literal,
        regexp: null !== (ik = null === Fk || void 0 === Fk ? void 0 : Fk.regexp) && void 0 !== ik ? ik : qk.regexp,
        wholeWord: null !== (yk = null === Fk || void 0 === Fk ? void 0 : Fk.wholeWord) && void 0 !== yk ? yk : qk.wholeWord
      })
    }

    function hk(kk) {
      let Fk = (0, Xk.A)(kk, gk);
      return Fk && Fk.dom.querySelector("[main-field]")
    }

    function rk(kk) {
      let Fk = hk(kk);
      Fk && Fk == kk.root.activeElement && Fk.select()
    }
    const Dk = kk => {
        let Fk = kk.state.field(Rk, !1);
        if (Fk && Fk.panel) {
          let Ik = hk(kk);
          if (Ik && Ik != kk.root.activeElement) {
            let Xk = mk(kk.state, Fk.query.spec);
            Xk.valid && kk.dispatch({
              effects: uk.of(Xk)
            }), Ik.focus(), Ik.select()
          }
        } else kk.dispatch({
          effects: [bk.of(!0), Fk ? uk.of(mk(kk.state, Fk.query.spec)) : Tk.F.appendConfig.of(lF)]
        });
        return !0
      },
      Mk = kk => {
        let Fk = kk.state.field(Rk, !1);
        if (!Fk || !Fk.panel) return !1;
        let Ik = (0, Xk.A)(kk, gk);
        return Ik && Ik.dom.contains(kk.root.activeElement) && kk.focus(), kk.dispatch({
          effects: bk.of(!1)
        }), !0
      },
      kF = [{
        key: "Mod-f",
        run: Dk,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: fk,
        shift: Bk,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: fk,
        shift: Bk,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: Mk,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk, Xk = Fk.selection;
          if (Xk.nZ.length > 1 || Xk.main.empty) return !1;
          let {
            from: ik,
            to: yk
          } = Xk.main, ak = [], qk = 0;
          for (let Lk = new lk(Fk.doc, Fk.sliceDoc(ik, yk)); !Lk.next().done;) {
            if (ak.length > 1e3) return !1;
            Lk.value.from == ik && (qk = ak.length), ak.push(Tk.k.range(Lk.value.from, Lk.value.to))
          }
          return Ik(Fk.update({
            selection: Tk.k.create(ak, qk),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: kk => {
          let {
            state: Fk
          } = kk, Ik = String(Fk.doc.lineAt(kk.state.selection.main.head).number), {
            close: ik,
            result: yk
          } = (0, Xk.eb)(kk, {
            label: Fk.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: Ik
            },
            focus: !0,
            submitLabel: Fk.phrase("go")
          });
          return yk.then((Ik => {
            let yk = Ik && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(Ik.elements.line.value);
            if (!yk) return void kk.dispatch({
              effects: ik
            });
            let lk = Fk.doc.lineAt(Fk.selection.main.head),
              [, ak, qk, Lk, tk] = yk,
              Zk = Lk ? +Lk.slice(1) : 0,
              jk = qk ? +qk : lk.number;
            if (qk && tk) {
              let kk = jk / 100;
              ak && (kk = kk * ("-" == ak ? -1 : 1) + lk.number / Fk.doc.lines), jk = Math.round(Fk.doc.lines * kk)
            } else qk && ak && (jk = jk * ("-" == ak ? -1 : 1) + lk.number);
            let ek = Fk.doc.line(Math.max(1, Math.min(Fk.doc.lines, jk))),
              wk = Tk.k.cursor(ek.from + Math.max(0, Math.min(Zk, ek.length)));
            kk.dispatch({
              effects: [ik, Xk.i.scrollIntoView(wk.from, {
                y: "center"
              })],
              selection: wk
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk, {
            nZ: ik
          } = Fk.selection;
          if (ik.some((kk => kk.from === kk.to))) return (kk => {
            let {
              state: Fk,
              dispatch: Ik
            } = kk, {
              selection: Xk
            } = Fk, ik = Tk.k.create(Xk.nZ.map((kk => Fk.wordAt(kk.head) || Tk.k.cursor(kk.head))), Xk.mainIndex);
            return !ik.eq(Xk) && (Ik(Fk.update({
              selection: ik
            })), !0)
          })({
            state: Fk,
            dispatch: Ik
          });
          let yk = Fk.sliceDoc(ik[0].from, ik[0].to);
          if (Fk.selection.nZ.some((kk => Fk.sliceDoc(kk.from, kk.to) != yk))) return !1;
          let ak = function(kk, Fk) {
            let {
              main: Ik,
              nZ: Xk
            } = kk.selection, Tk = kk.wordAt(Ik.head), ik = Tk && Tk.from == Ik.from && Tk.to == Ik.to;
            for (let yk = !1, ak = new lk(kk.doc, Fk, Xk[Xk.length - 1].to);;) {
              if (ak.next(), !ak.done) {
                if (yk && Xk.some((kk => kk.from == ak.value.from))) continue;
                if (ik) {
                  let Fk = kk.wordAt(ak.value.from);
                  if (!Fk || Fk.from != ak.value.from || Fk.to != ak.value.to) continue
                }
                return ak.value
              }
              if (yk) return null;
              ak = new lk(kk.doc, Fk, 0, Math.max(0, Xk[Xk.length - 1].from - 1)), yk = !0
            }
          }(Fk, yk);
          return !!ak && (Ik(Fk.update({
            selection: Fk.selection.addRange(Tk.k.range(ak.from, ak.to), !1),
            effects: Xk.i.scrollIntoView(ak.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class FF {
      constructor(kk) {
        this.view = kk;
        let Fk = this.query = kk.state.field(Rk).query.spec;

        function Ik(kk, Fk, Ik) {
          return (0, ik.d)("button", {
            class: "cm-button",
            name: kk,
            onclick: Fk,
            type: "button"
          }, Ik)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, ik.d)("input", {
          value: Fk.search,
          placeholder: IF(kk, "Find"),
          "aria-label": IF(kk, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, ik.d)("input", {
          value: Fk.replace,
          placeholder: IF(kk, "Replace"),
          "aria-label": IF(kk, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, ik.d)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: Fk.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, ik.d)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: Fk.regexp,
          onchange: this.commit
        }), this.wordField = (0, ik.d)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: Fk.wholeWord,
          onchange: this.commit
        }), this.dom = (0, ik.d)("div", {
          onkeydown: kk => this.keydown(kk),
          class: "cm-search"
        }, [this.searchField, Ik("next", (() => fk(kk)), [IF(kk, "next")]), Ik("prev", (() => Bk(kk)), [IF(kk, "previous")]), Ik("select", (() => dk(kk)), [IF(kk, "all")]), (0, ik.d)("label", null, [this.caseField, IF(kk, "match case")]), (0, ik.d)("label", null, [this.reField, IF(kk, "regexp")]), (0, ik.d)("label", null, [this.wordField, IF(kk, "by word")]), ...kk.state.readOnly ? [] : [(0, ik.d)("br"), this.replaceField, Ik("replace", (() => Yk(kk)), [IF(kk, "replace")]), Ik("replaceAll", (() => Ak(kk)), [IF(kk, "replace all")])], (0, ik.d)("button", {
          name: "close",
          onclick: () => Mk(kk),
          "aria-label": IF(kk, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let kk = new zk({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        kk.eq(this.query) || (this.query = kk, this.view.dispatch({
          effects: uk.of(kk)
        }))
      }
      keydown(kk) {
        (0, Xk.cb)(this.view, kk, "search-panel") ? kk.preventDefault(): 13 == kk.keyCode && kk.target == this.searchField ? (kk.preventDefault(), (kk.shiftKey ? Bk : fk)(this.view)) : 13 == kk.keyCode && kk.target == this.replaceField && (kk.preventDefault(), Yk(this.view))
      }
      update(kk) {
        for (let Fk of kk.transactions)
          for (let kk of Fk.effects) kk.is(uk) && !kk.value.eq(this.query) && this.setQuery(kk.value)
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
        return this.view.state.facet(Vk).top
      }
    }

    function IF(kk, Fk) {
      return kk.state.phrase(Fk)
    }
    const XF = 30,
      TF = /[\s\.,:;?!]/;

    function iF(kk, Fk) {
      let {
        from: Ik,
        to: Tk
      } = Fk, ik = kk.state.doc.lineAt(Ik), yk = kk.state.doc.lineAt(Tk).to, lk = Math.max(ik.from, Ik - XF), ak = Math.min(yk, Tk + XF), qk = kk.state.sliceDoc(lk, ak);
      if (lk != ik.from)
        for (let Xk = 0; Xk < XF; Xk++)
          if (!TF.test(qk[Xk + 1]) && TF.test(qk[Xk])) {
            qk = qk.slice(Xk);
            break
          } if (ak != yk)
        for (let Xk = qk.length - 1; Xk > qk.length - XF; Xk--)
          if (!TF.test(qk[Xk - 1]) && TF.test(qk[Xk])) {
            qk = qk.slice(0, Xk);
            break
          } return Xk.i.announce.of(`${kk.state.phrase("current match")}. ${qk} ${kk.state.phrase("on line")} ${ik.number}.`)
    }
    const yF = Xk.i.baseTheme({
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
      lF = [Rk, Tk.u.low(ck), yF]
  },
  41319: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => pk,
      f: () => LF,
      i: () => oT,
      j: () => ay,
      l: () => rF,
      o: () => nk,
      s: () => Oi,
      v: () => rT,
      y: () => yi,
      A: () => Mi,
      D: () => mi,
      E: () => jy,
      H: () => xi,
      G: () => py,
      I: () => ei,
      M: () => gi,
      P: () => bT,
      S: () => Ey,
      V: () => AF,
      Z: () => si,
      _: () => oi,
      cb: () => CT,
      eb: () => Ty,
      hb: () => Xy,
      jb: () => Wi
    });
    for (var Xk = Ik(41315), Tk = Ik(41325), ik = {
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
      }, yk = {
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
      }, lk = "undefined" != typeof navigator && /Mac/.test(navigator.platform), ak = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), qk = 0; qk < 10; qk++) ik[48 + qk] = ik[96 + qk] = String(qk);
    for (qk = 1; qk <= 24; qk++) ik[qk + 111] = "F" + qk;
    for (qk = 65; qk <= 90; qk++) ik[qk] = String.fromCharCode(qk + 32), yk[qk] = String.fromCharCode(qk);
    for (var Lk in ik) yk.hasOwnProperty(Lk) || (yk[Lk] = ik[Lk]);
    var tk = Ik(41331);
    let Zk = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      jk = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const ek = /Edge\/(\d+)/.exec(Zk.userAgent),
      wk = /MSIE \d/.test(Zk.userAgent),
      Hk = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Zk.userAgent),
      Jk = !!(wk || Hk || ek),
      xk = !Jk && /gecko\/(\d+)/i.test(Zk.userAgent),
      Pk = !Jk && /Chrome\/(\d+)/.exec(Zk.userAgent),
      Kk = "webkitFontSmoothing" in jk.documentElement.style,
      Qk = !Jk && /Apple Computer/.test(Zk.vendor),
      sk = Qk && (/Mobile\/\w+/.test(Zk.userAgent) || Zk.maxTouchPoints > 2);
    var Vk = {
      mac: sk || /Mac/.test(Zk.platform),
      windows: /Win/.test(Zk.platform),
      linux: /Linux|X11/.test(Zk.platform),
      ie: Jk,
      ie_version: wk ? jk.documentMode || 6 : Hk ? +Hk[1] : ek ? +ek[1] : 0,
      gecko: xk,
      gecko_version: xk ? +(/Firefox\/(\d+)/.exec(Zk.userAgent) || [0, 0])[1] : 0,
      chrome: !!Pk,
      chrome_version: Pk ? +Pk[1] : 0,
      ios: sk,
      android: /Android\b/.test(Zk.userAgent),
      webkit: Kk,
      webkit_version: Kk ? +(/\bAppleWebKit\/(\d+)/.exec(Zk.userAgent) || [0, 0])[1] : 0,
      safari: Qk,
      safari_version: Qk ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Zk.userAgent) || [0, 0])[1] : 0,
      tabSize: null != jk.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function zk(kk, Fk) {
      for (let Ik in kk) "class" == Ik && Fk.class ? Fk.class += " " + kk.class : "style" == Ik && Fk.style ? Fk.style += ";" + kk.style : Fk[Ik] = kk[Ik];
      return Fk
    }
    const Sk = Object.create(null);

    function vk(kk, Fk, Ik) {
      if (kk == Fk) return !0;
      kk || (kk = Sk), Fk || (Fk = Sk);
      let Xk = Object.keys(kk),
        Tk = Object.keys(Fk);
      if (Xk.length - (Ik && Xk.indexOf(Ik) > -1 ? 1 : 0) != Tk.length - (Ik && Tk.indexOf(Ik) > -1 ? 1 : 0)) return !1;
      for (let ik of Xk)
        if (ik != Ik && (-1 == Tk.indexOf(ik) || kk[ik] !== Fk[ik])) return !1;
      return !0
    }

    function Ek(kk, Fk, Ik) {
      let Xk = !1;
      if (Fk)
        for (let Tk in Fk) Ik && Tk in Ik || (Xk = !0, "style" == Tk ? kk.style.cssText = "" : kk.removeAttribute(Tk));
      if (Ik)
        for (let Tk in Ik) Fk && Fk[Tk] == Ik[Tk] || (Xk = !0, "style" == Tk ? kk.style.cssText = Ik[Tk] : kk.setAttribute(Tk, Ik[Tk]));
      return Xk
    }

    function Ok(kk) {
      let Fk = Object.create(null);
      for (let Ik = 0; Ik < kk.attributes.length; Ik++) {
        let Xk = kk.attributes[Ik];
        Fk[Xk.name] = Xk.value
      }
      return Fk
    }
    class nk {
      eq(kk) {
        return !1
      }
      updateDOM(kk, Fk, Ik) {
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
      coordsAt(kk, Fk, Ik) {
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
    var Gk = function(kk) {
      return kk[kk.Text = 0] = "Text", kk[kk.WidgetBefore = 1] = "WidgetBefore", kk[kk.WidgetAfter = 2] = "WidgetAfter", kk[kk.WidgetRange = 3] = "WidgetRange", kk
    }(Gk || (Gk = {}));
    class pk extends Xk.E {
      constructor(kk, Fk, Ik, Xk) {
        super(), this.startSide = kk, this.endSide = Fk, this.widget = Ik, this.spec = Xk
      }
      get heightRelevant() {
        return !1
      }
      static mark(kk) {
        return new uk(kk)
      }
      static widget(kk) {
        let Fk = Math.max(-1e4, Math.min(1e4, kk.side || 0)),
          Ik = !!kk.block;
        return Fk += Ik && !kk.inlineOrder ? Fk > 0 ? 3e8 : -4e8 : Fk > 0 ? 1e8 : -1e8, new Rk(kk, Fk, Fk, Ik, kk.widget || null, !1)
      }
      static replace(kk) {
        let Fk, Ik, Xk = !!kk.block;
        if (kk.isBlockGap) Fk = -5e8, Ik = 4e8;
        else {
          let {
            start: Tk,
            end: ik
          } = Uk(kk, Xk);
          Fk = (Tk ? Xk ? -3e8 : -1 : 5e8) - 1, Ik = 1 + (ik ? Xk ? 2e8 : 1 : -6e8)
        }
        return new Rk(kk, Fk, Ik, Xk, kk.widget || null, !0)
      }
      static line(kk) {
        return new bk(kk)
      }
      static set(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Xk.A.of(kk, Fk)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    pk.none = Xk.A.empty;
    class uk extends pk {
      constructor(kk) {
        let {
          start: Fk,
          end: Ik
        } = Uk(kk);
        super(Fk ? -1 : 5e8, Ik ? 1 : -6e8, null, kk), this.tagName = kk.tagName || "span", this.attrs = kk.class && kk.attributes ? zk(kk.attributes, {
          class: kk.class
        }) : kk.class ? {
          class: kk.class
        } : kk.attributes || Sk
      }
      eq(kk) {
        return this == kk || kk instanceof uk && this.tagName == kk.tagName && vk(this.attrs, kk.attrs)
      }
      range(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        if (kk >= Fk) throw new RangeError("Mark decorations may not be empty");
        return super.range(kk, Fk)
      }
    }
    uk.prototype.point = !1;
    class bk extends pk {
      constructor(kk) {
        super(-2e8, -2e8, null, kk)
      }
      eq(kk) {
        return kk instanceof bk && this.spec.class == kk.spec.class && vk(this.spec.attributes, kk.spec.attributes)
      }
      range(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        if (Fk != kk) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(kk, Fk)
      }
    }
    bk.prototype.mapMode = Xk.s.TrackBefore, bk.prototype.point = !0;
    class Rk extends pk {
      constructor(kk, Fk, Ik, Tk, ik, yk) {
        super(Fk, Ik, ik, kk), this.block = Tk, this.isReplace = yk, this.mapMode = Tk ? Fk <= 0 ? Xk.s.TrackBefore : Xk.s.TrackAfter : Xk.s.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? Gk.WidgetRange : this.startSide <= 0 ? Gk.WidgetBefore : Gk.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(kk) {
        return kk instanceof Rk && (Fk = this.widget, Ik = kk.widget, Fk == Ik || !!(Fk && Ik && Fk.compare(Ik))) && this.block == kk.block && this.startSide == kk.startSide && this.endSide == kk.endSide;
        var Fk, Ik
      }
      range(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        if (this.isReplace && (kk > Fk || kk == Fk && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && Fk != kk) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(kk, Fk)
      }
    }

    function Uk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: Ik,
          inclusiveEnd: Xk
        } = kk;
      return null == Ik && (Ik = kk.inclusive), null == Xk && (Xk = kk.inclusive), {
        start: null !== Ik && void 0 !== Ik ? Ik : Fk,
        end: null !== Xk && void 0 !== Xk ? Xk : Fk
      }
    }

    function Ck(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Tk = Ik.length - 1;
      Tk >= 0 && Ik[Tk] + Xk >= kk ? Ik[Tk] = Math.max(Ik[Tk], Fk) : Ik.push(kk, Fk)
    }
    Rk.prototype.point = !0;
    class Nk extends Xk.E {
      constructor(kk, Fk) {
        super(), this.tagName = kk, this.attributes = Fk
      }
      eq(kk) {
        return kk == this || kk instanceof Nk && this.tagName == kk.tagName && vk(this.attributes, kk.attributes)
      }
      static create(kk) {
        return new Nk(kk.tagName, kk.attributes || Sk)
      }
      static set(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Xk.A.of(kk, Fk)
      }
    }

    function ck(kk) {
      let Fk;
      return Fk = 11 == kk.nodeType ? kk.getSelection ? kk : kk.ownerDocument : kk, Fk.getSelection()
    }

    function Wk(kk, Fk) {
      return !!Fk && (kk == Fk || kk.contains(1 != Fk.nodeType ? Fk.parentNode : Fk))
    }

    function fk(kk, Fk) {
      if (!Fk.anchorNode) return !1;
      try {
        return Wk(kk, Fk.anchorNode)
      } catch (Ik) {
        return !1
      }
    }

    function Bk(kk) {
      return 3 == kk.nodeType ? TF(kk, 0, kk.nodeValue.length).getClientRects() : 1 == kk.nodeType ? kk.getClientRects() : []
    }

    function dk(kk, Fk, Ik, Xk) {
      return !!Ik && (gk(kk, Fk, Ik, Xk, -1) || gk(kk, Fk, Ik, Xk, 1))
    }

    function Yk(kk) {
      for (var Fk = 0;; Fk++)
        if (!(kk = kk.previousSibling)) return Fk
    }

    function Ak(kk) {
      return 1 == kk.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(kk.nodeName)
    }

    function gk(kk, Fk, Ik, Xk, Tk) {
      for (;;) {
        if (kk == Ik && Fk == Xk) return !0;
        if (Fk == (Tk < 0 ? 0 : mk(kk))) {
          if ("DIV" == kk.nodeName) return !1;
          let Ik = kk.parentNode;
          if (!Ik || 1 != Ik.nodeType) return !1;
          Fk = Yk(kk) + (Tk < 0 ? 0 : 1), kk = Ik
        } else {
          if (1 != kk.nodeType) return !1;
          if (1 == (kk = kk.childNodes[Fk + (Tk < 0 ? -1 : 0)]).nodeType && "false" == kk.contentEditable) return !1;
          Fk = Tk < 0 ? mk(kk) : 0
        }
      }
    }

    function mk(kk) {
      return 3 == kk.nodeType ? kk.nodeValue.length : kk.childNodes.length
    }

    function hk(kk, Fk) {
      let Ik = Fk ? kk.left : kk.right;
      return {
        left: Ik,
        right: Ik,
        top: kk.top,
        bottom: kk.bottom
      }
    }

    function rk(kk) {
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

    function Dk(kk, Fk) {
      let Ik = Fk.width / kk.offsetWidth,
        Xk = Fk.height / kk.offsetHeight;
      return (Ik > .995 && Ik < 1.005 || !isFinite(Ik) || Math.abs(Fk.width - kk.offsetWidth) < 1) && (Ik = 1), (Xk > .995 && Xk < 1.005 || !isFinite(Xk) || Math.abs(Fk.height - kk.offsetHeight) < 1) && (Xk = 1), {
        scaleX: Ik,
        scaleY: Xk
      }
    }

    function Mk(kk) {
      let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        Ik = kk.ownerDocument,
        Xk = null,
        Tk = null;
      for (let ik = kk.parentNode; ik && (ik != Ik.body && (Fk && !Xk || !Tk));)
        if (1 == ik.nodeType) !Tk && ik.scrollHeight > ik.clientHeight && (Tk = ik), Fk && !Xk && ik.scrollWidth > ik.clientWidth && (Xk = ik), ik = ik.assignedSlot || ik.parentNode;
        else {
          if (11 != ik.nodeType) break;
          ik = ik.host
        } return {
        x: Xk,
        y: Tk
      }
    }
    Nk.prototype.startSide = Nk.prototype.endSide = -1;
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
          focusNode: Ik
        } = kk;
        this.set(Fk, Math.min(kk.anchorOffset, Fk ? mk(Fk) : 0), Ik, Math.min(kk.focusOffset, Ik ? mk(Ik) : 0))
      }
      set(kk, Fk, Ik, Xk) {
        this.anchorNode = kk, this.anchorOffset = Fk, this.focusNode = Ik, this.focusOffset = Xk
      }
    }
    let FF, IF = null;

    function XF(kk) {
      if (kk.setActive) return kk.setActive();
      if (IF) return kk.focus(IF);
      let Fk = [];
      for (let Ik = kk; Ik && (Fk.push(Ik, Ik.scrollTop, Ik.scrollLeft), Ik != Ik.ownerDocument); Ik = Ik.parentNode);
      if (kk.focus(null == IF ? {
          get preventScroll() {
            return IF = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !IF) {
        IF = !1;
        for (let kk = 0; kk < Fk.length;) {
          let Ik = Fk[kk++],
            Xk = Fk[kk++],
            Tk = Fk[kk++];
          Ik.scrollTop != Xk && (Ik.scrollTop = Xk), Ik.scrollLeft != Tk && (Ik.scrollLeft = Tk)
        }
      }
    }

    function TF(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fk,
        Xk = FF || (FF = document.createRange());
      return Xk.setEnd(kk, Ik), Xk.setStart(kk, Fk), Xk
    }

    function iF(kk, Fk, Ik, Xk) {
      let Tk = {
        key: Fk,
        code: Fk,
        keyCode: Ik,
        which: Ik,
        cancelable: !0
      };
      Xk && ({
        altKey: Tk.altKey,
        ctrlKey: Tk.ctrlKey,
        shiftKey: Tk.shiftKey,
        metaKey: Tk.metaKey
      } = Xk);
      let ik = new KeyboardEvent("keydown", Tk);
      ik.synthetic = !0, kk.dispatchEvent(ik);
      let yk = new KeyboardEvent("keyup", Tk);
      return yk.synthetic = !0, kk.dispatchEvent(yk), ik.defaultPrevented || yk.defaultPrevented
    }

    function yF(kk) {
      return kk instanceof Window ? kk.pageYOffset > Math.max(0, kk.document.documentElement.scrollHeight - kk.innerHeight - 4) : kk.scrollTop > Math.max(1, kk.scrollHeight - kk.clientHeight - 4)
    }

    function lF(kk, Fk) {
      for (let Ik = kk, Xk = Fk;;) {
        if (3 == Ik.nodeType && Xk > 0) return {
          node: Ik,
          offset: Xk
        };
        if (1 == Ik.nodeType && Xk > 0) {
          if ("false" == Ik.contentEditable) return null;
          Ik = Ik.childNodes[Xk - 1], Xk = mk(Ik)
        } else {
          if (!Ik.parentNode || Ak(Ik)) return null;
          Xk = Yk(Ik), Ik = Ik.parentNode
        }
      }
    }

    function aF(kk, Fk) {
      for (let Ik = kk, Xk = Fk;;) {
        if (3 == Ik.nodeType && Xk < Ik.nodeValue.length) return {
          node: Ik,
          offset: Xk
        };
        if (1 == Ik.nodeType && Xk < Ik.childNodes.length) {
          if ("false" == Ik.contentEditable) return null;
          Ik = Ik.childNodes[Xk], Xk = 0
        } else {
          if (!Ik.parentNode || Ak(Ik)) return null;
          Xk = Yk(Ik) + 1, Ik = Ik.parentNode
        }
      }
    }
    Vk.safari && Vk.safari_version >= 26 && (IF = !1);
    class qF {
      constructor(kk, Fk) {
        let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = kk, this.offset = Fk, this.precise = Ik
      }
      static before(kk, Fk) {
        return new qF(kk.parentNode, Yk(kk), Fk)
      }
      static after(kk, Fk) {
        return new qF(kk.parentNode, Yk(kk) + 1, Fk)
      }
    }
    var LF = function(kk) {
      return kk[kk.LTR = 0] = "LTR", kk[kk.RTL = 1] = "RTL", kk
    }(LF || (LF = {}));
    const tF = LF.LTR,
      ZF = LF.RTL;

    function jF(kk) {
      let Fk = [];
      for (let Ik = 0; Ik < kk.length; Ik++) Fk.push(1 << +kk[Ik]);
      return Fk
    }
    const eF = jF("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      wF = jF("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      HF = Object.create(null),
      JF = [];
    for (let uy of ["()", "[]", "{}"]) {
      let kk = uy.charCodeAt(0),
        Fk = uy.charCodeAt(1);
      HF[kk] = Fk, HF[Fk] = -kk
    }

    function xF(kk) {
      return kk <= 247 ? eF[kk] : 1424 <= kk && kk <= 1524 ? 2 : 1536 <= kk && kk <= 1785 ? wF[kk - 1536] : 1774 <= kk && kk <= 2220 ? 4 : 8192 <= kk && kk <= 8204 ? 256 : 64336 <= kk && kk <= 65023 ? 4 : 1
    }
    const PF = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class KF {
      get dir() {
        return this.level % 2 ? ZF : tF
      }
      constructor(kk, Fk, Ik) {
        this.from = kk, this.to = Fk, this.level = Ik
      }
      side(kk, Fk) {
        return this.dir == Fk == kk ? this.to : this.from
      }
      forward(kk, Fk) {
        return kk == (this.dir == Fk)
      }
      static find(kk, Fk, Ik, Xk) {
        let Tk = -1;
        for (let ik = 0; ik < kk.length; ik++) {
          let yk = kk[ik];
          if (yk.from <= Fk && yk.to >= Fk) {
            if (yk.level == Ik) return ik;
            (Tk < 0 || (0 != Xk ? Xk < 0 ? yk.from < Fk : yk.to > Fk : kk[Tk].level > yk.level)) && (Tk = ik)
          }
        }
        if (Tk < 0) throw new RangeError("Index out of range");
        return Tk
      }
    }

    function QF(kk, Fk) {
      if (kk.length != Fk.length) return !1;
      for (let Ik = 0; Ik < kk.length; Ik++) {
        let Xk = kk[Ik],
          Tk = Fk[Ik];
        if (Xk.from != Tk.from || Xk.to != Tk.to || Xk.direction != Tk.direction || !QF(Xk.inner, Tk.inner)) return !1
      }
      return !0
    }
    const sF = [];

    function VF(kk, Fk, Ik, Xk, Tk, ik, yk) {
      let lk = Xk % 2 ? 2 : 1;
      if (Xk % 2 == Tk % 2)
        for (let ak = Fk, qk = 0; ak < Ik;) {
          let Fk = !0,
            Lk = !1;
          if (qk == ik.length || ak < ik[qk].from) {
            let kk = sF[ak];
            kk != lk && (Fk = !1, Lk = 16 == kk)
          }
          let tk = Fk || 1 != lk ? null : [],
            Zk = Fk ? Xk : Xk + 1,
            jk = ak;
          kk: for (;;)
            if (qk < ik.length && jk == ik[qk].from) {
              if (Lk) break kk;
              let ek = ik[qk];
              if (!Fk)
                for (let kk = ek.to, Fk = qk + 1;;) {
                  if (kk == Ik) break kk;
                  if (!(Fk < ik.length && ik[Fk].from == kk)) {
                    if (sF[kk] == lk) break kk;
                    break
                  }
                  kk = ik[Fk++].to
                }
              if (qk++, tk) tk.push(ek);
              else {
                ek.from > ak && yk.push(new KF(ak, ek.from, Zk)), zF(kk, ek.direction == tF != !(Zk % 2) ? Xk + 1 : Xk, Tk, ek.inner, ek.from, ek.to, yk), ak = ek.to
              }
              jk = ek.to
            } else {
              if (jk == Ik || (Fk ? sF[jk] != lk : sF[jk] == lk)) break;
              jk++
            } tk ? VF(kk, ak, jk, Xk + 1, Tk, tk, yk) : ak < jk && yk.push(new KF(ak, jk, Zk)), ak = jk
        } else
          for (let ak = Ik, qk = ik.length; ak > Fk;) {
            let Ik = !0,
              Lk = !1;
            if (!qk || ak > ik[qk - 1].to) {
              let kk = sF[ak - 1];
              kk != lk && (Ik = !1, Lk = 16 == kk)
            }
            let tk = Ik || 1 != lk ? null : [],
              Zk = Ik ? Xk : Xk + 1,
              jk = ak;
            kk: for (;;)
              if (qk && jk == ik[qk - 1].to) {
                if (Lk) break kk;
                let ek = ik[--qk];
                if (!Ik)
                  for (let kk = ek.from, Ik = qk;;) {
                    if (kk == Fk) break kk;
                    if (!Ik || ik[Ik - 1].to != kk) {
                      if (sF[kk - 1] == lk) break kk;
                      break
                    }
                    kk = ik[--Ik].from
                  }
                if (tk) tk.push(ek);
                else {
                  ek.to < ak && yk.push(new KF(ek.to, ak, Zk)), zF(kk, ek.direction == tF != !(Zk % 2) ? Xk + 1 : Xk, Tk, ek.inner, ek.from, ek.to, yk), ak = ek.from
                }
                jk = ek.from
              } else {
                if (jk == Fk || (Ik ? sF[jk - 1] != lk : sF[jk - 1] == lk)) break;
                jk--
              } tk ? VF(kk, jk, ak, Xk + 1, Tk, tk, yk) : jk < ak && yk.push(new KF(jk, ak, Zk)), ak = jk
          }
    }

    function zF(kk, Fk, Ik, Xk, Tk, ik, yk) {
      let lk = Fk % 2 ? 2 : 1;
      ! function(kk, Fk, Ik, Xk, Tk) {
        for (let ik = 0; ik <= Xk.length; ik++) {
          let yk = ik ? Xk[ik - 1].to : Fk,
            lk = ik < Xk.length ? Xk[ik].from : Ik,
            ak = ik ? 256 : Tk;
          for (let Fk = yk, Ik = ak, Xk = ak; Fk < lk; Fk++) {
            let Tk = xF(kk.charCodeAt(Fk));
            512 == Tk ? Tk = Ik : 8 == Tk && 4 == Xk && (Tk = 16), sF[Fk] = 4 == Tk ? 2 : Tk, 7 & Tk && (Xk = Tk), Ik = Tk
          }
          for (let kk = yk, Fk = ak, Xk = ak; kk < lk; kk++) {
            let Tk = sF[kk];
            if (128 == Tk) kk < lk - 1 && Fk == sF[kk + 1] && 24 & Fk ? Tk = sF[kk] = Fk : sF[kk] = 256;
            else if (64 == Tk) {
              let Tk = kk + 1;
              for (; Tk < lk && 64 == sF[Tk];) Tk++;
              let ik = kk && 8 == Fk || Tk < Ik && 8 == sF[Tk] ? 1 == Xk ? 1 : 8 : 256;
              for (let Fk = kk; Fk < Tk; Fk++) sF[Fk] = ik;
              kk = Tk - 1
            } else 8 == Tk && 1 == Xk && (sF[kk] = 1);
            Fk = Tk, 7 & Tk && (Xk = Tk)
          }
        }
      }(kk, Tk, ik, Xk, lk),
      function(kk, Fk, Ik, Xk, Tk) {
        let ik = 1 == Tk ? 2 : 1;
        for (let yk = 0, lk = 0, ak = 0; yk <= Xk.length; yk++) {
          let qk = yk ? Xk[yk - 1].to : Fk,
            Lk = yk < Xk.length ? Xk[yk].from : Ik;
          for (let Fk, Ik, Xk, yk = qk; yk < Lk; yk++)
            if (Ik = HF[Fk = kk.charCodeAt(yk)])
              if (Ik < 0) {
                for (let kk = lk - 3; kk >= 0; kk -= 3)
                  if (JF[kk + 1] == -Ik) {
                    let Fk = JF[kk + 2],
                      Ik = 2 & Fk ? Tk : 4 & Fk ? 1 & Fk ? ik : Tk : 0;
                    Ik && (sF[yk] = sF[JF[kk]] = Ik), lk = kk;
                    break
                  }
              } else {
                if (189 == JF.length) break;
                JF[lk++] = yk, JF[lk++] = Fk, JF[lk++] = ak
              }
          else if (2 == (Xk = sF[yk]) || 1 == Xk) {
            let kk = Xk == Tk;
            ak = kk ? 0 : 1;
            for (let Fk = lk - 3; Fk >= 0; Fk -= 3) {
              let Ik = JF[Fk + 2];
              if (2 & Ik) break;
              if (kk) JF[Fk + 2] |= 2;
              else {
                if (4 & Ik) break;
                JF[Fk + 2] |= 4
              }
            }
          }
        }
      }(kk, Tk, ik, Xk, lk),
      function(kk, Fk, Ik, Xk) {
        for (let Tk = 0, ik = Xk; Tk <= Ik.length; Tk++) {
          let yk = Tk ? Ik[Tk - 1].to : kk,
            lk = Tk < Ik.length ? Ik[Tk].from : Fk;
          for (let ak = yk; ak < lk;) {
            let yk = sF[ak];
            if (256 == yk) {
              let yk = ak + 1;
              for (;;)
                if (yk == lk) {
                  if (Tk == Ik.length) break;
                  yk = Ik[Tk++].to, lk = Tk < Ik.length ? Ik[Tk].from : Fk
                } else {
                  if (256 != sF[yk]) break;
                  yk++
                } let qk = 1 == ik,
                Lk = qk == (1 == (yk < Fk ? sF[yk] : Xk)) ? qk ? 1 : 2 : Xk;
              for (let Fk = yk, Xk = Tk, ik = Xk ? Ik[Xk - 1].to : kk; Fk > ak;) Fk == ik && (Fk = Ik[--Xk].from, ik = Xk ? Ik[Xk - 1].to : kk), sF[--Fk] = Lk;
              ak = yk
            } else ik = yk, ak++
          }
        }
      }(Tk, ik, Xk, lk), VF(kk, Tk, ik, Fk, Ik, Xk, yk)
    }

    function SF(kk, Fk, Ik) {
      if (!kk) return [new KF(0, 0, Fk == ZF ? 1 : 0)];
      if (Fk == tF && !Ik.length && !PF.test(kk)) return oF(kk.length);
      if (Ik.length)
        for (; kk.length > sF.length;) sF[sF.length] = 256;
      let Xk = [],
        Tk = Fk == tF ? 0 : 1;
      return zF(kk, Tk, Tk, Ik, 0, kk.length, Xk), Xk
    }

    function oF(kk) {
      return [new KF(0, kk, 0)]
    }
    let vF = "";

    function EF(kk, Fk, Ik, Tk, ik) {
      var yk;
      let lk = Tk.head - kk.from,
        ak = KF.find(Fk, lk, null !== (yk = Tk.bidiLevel) && void 0 !== yk ? yk : -1, Tk.assoc),
        qk = Fk[ak],
        Lk = qk.side(ik, Ik);
      if (lk == Lk) {
        let kk = ak += ik ? 1 : -1;
        if (kk < 0 || kk >= Fk.length) return null;
        qk = Fk[ak = kk], lk = qk.side(!ik, Ik), Lk = qk.side(ik, Ik)
      }
      let tk = (0, Xk.Y)(kk.text, lk, qk.forward(ik, Ik));
      (tk < qk.from || tk > qk.to) && (tk = Lk), vF = kk.text.slice(Math.min(lk, tk), Math.max(lk, tk));
      let Zk = ak == (ik ? Fk.length - 1 : 0) ? null : Fk[ak + (ik ? 1 : -1)];
      return Zk && tk == Lk && Zk.level + (ik ? 0 : 1) < qk.level ? Xk.k.cursor(Zk.side(!ik, Ik) + kk.from, Zk.forward(ik, Ik) ? 1 : -1, Zk.level) : Xk.k.cursor(tk + kk.from, qk.forward(ik, Ik) ? -1 : 1, qk.level)
    }

    function OF(kk, Fk, Ik) {
      for (let Xk = Fk; Xk < Ik; Xk++) {
        let Fk = xF(kk.charCodeAt(Xk));
        if (1 == Fk) return tF;
        if (2 == Fk || 4 == Fk) return ZF
      }
      return tF
    }
    const nF = Xk.p.define(),
      GF = Xk.p.define(),
      pF = Xk.p.define(),
      uF = Xk.p.define(),
      bF = Xk.p.define(),
      RF = Xk.p.define(),
      UF = Xk.p.define(),
      CF = Xk.p.define(),
      NF = Xk.p.define(),
      cF = Xk.p.define({
        combine: kk => kk.some((kk => kk))
      }),
      WF = Xk.p.define({
        combine: kk => kk.some((kk => kk))
      }),
      fF = Xk.p.define();
    class BF {
      constructor(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = kk, this.y = Fk, this.x = Ik, this.yMargin = Xk, this.xMargin = Tk, this.isSnapshot = ik
      }
      map(kk) {
        return kk.empty ? this : new BF(this.range.map(kk), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(kk) {
        return this.range.to <= kk.doc.length ? this : new BF(Xk.k.cursor(kk.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const dF = Xk.F.define({
        map: (kk, Fk) => kk.map(Fk)
      }),
      YF = Xk.F.define();

    function AF(kk, Fk, Ik) {
      let Xk = kk.facet(uF);
      Xk.length ? Xk[0](Fk) : window.onerror && window.onerror(String(Fk), Ik, void 0, void 0, Fk) || (Ik ? console.error(Ik + ":", Fk) : console.error(Fk))
    }
    const gF = Xk.p.define({
      combine: kk => !kk.length || kk[0]
    });
    let mF = 0;
    const hF = Xk.p.define({
      combine: kk => kk.filter(((Fk, Ik) => {
        for (let Xk = 0; Xk < Ik; Xk++)
          if (kk[Xk].plugin == Fk.plugin) return !1;
        return !0
      }))
    });
    class rF {
      constructor(kk, Fk, Ik, Xk, Tk) {
        this.id = kk, this.create = Fk, this.domEventHandlers = Ik, this.domEventObservers = Xk, this.baseExtensions = Tk(this), this.extension = this.baseExtensions.concat(hF.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(kk) {
        return this.baseExtensions.concat(hF.of({
          plugin: this,
          arg: kk
        }))
      }
      static define(kk, Fk) {
        const {
          eventHandlers: Ik,
          eventObservers: Xk,
          provide: Tk,
          wk: ik
        } = Fk || {};
        return new rF(mF++, kk, Ik, Xk, (kk => {
          let Fk = [];
          return ik && Fk.push(FI.of((Fk => {
            let Ik = Fk.plugin(kk);
            return Ik ? ik(Ik) : pk.none
          }))), Tk && Fk.push(Tk(kk)), Fk
        }))
      }
      static fromClass(kk, Fk) {
        return rF.define(((Fk, Ik) => new kk(Fk, Ik)), Fk)
      }
    }
    class DF {
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
              if (AF(kk.state, Fk, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (Ik) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(kk, this.spec.arg)
        } catch (Fk) {
          AF(kk.state, Fk, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(kk) {
        var Fk;
        if (null === (Fk = this.value) || void 0 === Fk ? void 0 : Fk.destroy) try {
          this.value.destroy()
        } catch (Ik) {
          AF(kk.state, Ik, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const MF = Xk.p.define(),
      kI = Xk.p.define(),
      FI = Xk.p.define(),
      II = Xk.p.define(),
      XI = Xk.p.define(),
      TI = Xk.p.define(),
      iI = Xk.p.define();

    function yI(kk, Fk) {
      let Ik = kk.state.facet(iI);
      if (!Ik.length) return Ik;
      let Tk = Ik.map((Fk => Fk instanceof Function ? Fk(kk) : Fk)),
        ik = [];
      return Xk.A.spans(Tk, Fk.from, Fk.to, {
        point() {},
        span(kk, Ik, Xk, Tk) {
          let yk = kk - Fk.from,
            lk = Ik - Fk.from,
            ak = ik;
          for (let ik = Xk.length - 1; ik >= 0; ik--, Tk--) {
            let kk, Ik = Xk[ik].spec.bidiIsolate;
            if (null == Ik && (Ik = OF(Fk.text, yk, lk)), Tk > 0 && ak.length && (kk = ak[ak.length - 1]).to == yk && kk.direction == Ik) kk.to = lk, ak = kk.inner;
            else {
              let kk = {
                from: yk,
                to: lk,
                direction: Ik,
                inner: []
              };
              ak.push(kk), ak = kk.inner
            }
          }
        }
      }), ik
    }
    const lI = Xk.p.define();

    function aI(kk) {
      let Fk = 0,
        Ik = 0,
        Xk = 0,
        Tk = 0;
      for (let ik of kk.state.facet(lI)) {
        let yk = ik(kk);
        yk && (null != yk.left && (Fk = Math.max(Fk, yk.left)), null != yk.right && (Ik = Math.max(Ik, yk.right)), null != yk.top && (Xk = Math.max(Xk, yk.top)), null != yk.bottom && (Tk = Math.max(Tk, yk.bottom)))
      }
      return {
        left: Fk,
        right: Ik,
        top: Xk,
        bottom: Tk
      }
    }
    const qI = Xk.p.define();
    class LI {
      constructor(kk, Fk, Ik, Xk) {
        this.fromA = kk, this.toA = Fk, this.fromB = Ik, this.toB = Xk
      }
      join(kk) {
        return new LI(Math.min(this.fromA, kk.fromA), Math.max(this.toA, kk.toA), Math.min(this.fromB, kk.fromB), Math.max(this.toB, kk.toB))
      }
      addToSet(kk) {
        let Fk = kk.length,
          Ik = this;
        for (; Fk > 0; Fk--) {
          let Xk = kk[Fk - 1];
          if (!(Xk.fromA > Ik.toA)) {
            if (Xk.toA < Ik.fromA) break;
            Ik = Ik.join(Xk), kk.splice(Fk - 1, 1)
          }
        }
        return kk.splice(Fk, 0, Ik), kk
      }
      static extendWithRanges(kk, Fk) {
        if (0 == Fk.length) return kk;
        let Ik = [];
        for (let Xk = 0, Tk = 0, ik = 0;;) {
          let yk = Xk < kk.length ? kk[Xk].fromB : 1e9,
            lk = Tk < Fk.length ? Fk[Tk] : 1e9,
            ak = Math.min(yk, lk);
          if (1e9 == ak) break;
          let qk = ak + ik,
            Lk = ak,
            tk = qk;
          for (;;)
            if (Tk < Fk.length && Fk[Tk] <= Lk) {
              let Ik = Fk[Tk + 1];
              Tk += 2, Lk = Math.max(Lk, Ik);
              for (let Fk = Xk; Fk < kk.length && kk[Fk].fromB <= Lk; Fk++) ik = kk[Fk].toA - kk[Fk].toB;
              tk = Math.max(tk, Ik + ik)
            } else {
              if (!(Xk < kk.length && kk[Xk].fromB <= Lk)) break;
              {
                let Fk = kk[Xk++];
                Lk = Math.max(Lk, Fk.toB), tk = Math.max(tk, Fk.toA), ik = Fk.toA - Fk.toB
              }
            } Ik.push(new LI(qk, tk, ak, Lk))
        }
        return Ik
      }
    }
    class tI {
      constructor(kk, Fk, Ik) {
        this.view = kk, this.state = Fk, this.transactions = Ik, this.flags = 0, this.startState = kk.state, this.changes = Xk.ChangeSet.empty(this.startState.doc.length);
        for (let Xk of Ik) this.changes = this.changes.compose(Xk.changes);
        let Tk = [];
        this.changes.iterChangedRanges(((kk, Fk, Ik, Xk) => Tk.push(new LI(kk, Fk, Ik, Xk)))), this.changedRanges = Tk
      }
      static create(kk, Fk, Ik) {
        return new tI(kk, Fk, Ik)
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
    const ZI = [];
    class jI {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = kk, this.length = Fk, this.flags = Ik, this.parent = null, kk.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return ZI
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
            for (let Ik = kk.attributes.length - 1; Ik >= 0; Ik--) {
              let Xk = kk.attributes[Ik].name;
              null == Fk[Xk] && kk.removeAttribute(Xk)
            }
            for (let Ik in Fk) {
              let Xk = Fk[Ik];
              "style" == Ik ? kk.style.cssText = Xk : kk.getAttribute(Ik) != Xk && kk.setAttribute(Ik, Xk)
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
        for (let Ik of this.children) {
          if (Ik == kk) return Fk;
          Fk += Ik.length + Ik.breakAfter
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
        let Ik = Yk(this.dom),
          Xk = this.length ? kk > 0 : Fk > 0;
        return new qF(this.parent.dom, Ik + (Xk ? 1 : 0), 0 == kk || kk == this.length)
      }
      markDirty(kk) {
        this.flags &= -3, kk && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let kk = this; kk; kk = kk.parent)
          if (kk instanceof HI) return kk;
        return null
      }
      static get(kk) {
        return kk.cmTile
      }
    }
    class eI extends jI {
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
        let Fk, Ik = this.dom,
          Xk = null,
          Tk = (null === kk || void 0 === kk ? void 0 : kk.node) == Ik ? kk : null,
          ik = 0;
        for (let yk of this.children) {
          if (yk.sync(kk), ik += yk.length + yk.breakAfter, Fk = Xk ? Xk.nextSibling : Ik.firstChild, Tk && Fk != yk.dom && (Tk.written = !0), yk.dom.parentNode == Ik)
            for (; Fk && Fk != yk.dom;) Fk = wI(Fk);
          else Ik.insertBefore(yk.dom, Fk);
          Xk = yk.dom
        }
        for (Fk = Xk ? Xk.nextSibling : Ik.firstChild, Tk && Fk && (Tk.written = !0); Fk;) Fk = wI(Fk);
        this.length = ik
      }
    }

    function wI(kk) {
      let Fk = kk.nextSibling;
      return kk.parentNode.removeChild(kk), Fk
    }
    class HI extends eI {
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
          let Fk = jI.get(kk);
          if (Fk && this.owns(Fk)) return Fk;
          kk = kk.parentNode
        }
      }
      blockTiles(kk) {
        for (let Fk = [], Ik = this, Xk = 0, Tk = 0;;)
          if (Xk == Ik.children.length) {
            if (!Fk.length) return;
            Ik = Ik.parent, Ik.breakAfter && Tk++, Xk = Fk.pop()
          } else {
            let ik = Ik.children[Xk++];
            if (ik instanceof JI) Fk.push(Xk), Ik = ik, Xk = 0;
            else {
              let Fk = Tk + ik.length,
                Ik = kk(ik, Tk);
              if (void 0 !== Ik) return Ik;
              Tk = Fk + ik.breakAfter
            }
          }
      }
      resolveBlock(kk, Fk) {
        let Ik, Xk, Tk = -1,
          ik = -1;
        if (this.blockTiles(((yk, lk) => {
            let ak = lk + yk.length;
            if (kk >= lk && kk <= ak) {
              if (yk.isWidget() && Fk >= -1 && Fk <= 1) {
                if (32 & yk.flags) return !0;
                16 & yk.flags && (Ik = void 0)
              }(lk < kk || kk == ak && (Fk < -1 ? yk.length : yk.covers(1))) && (!Ik || !yk.isWidget() && Ik.isWidget()) && (Ik = yk, Tk = kk - lk), (ak > kk || kk == lk && (Fk > 1 ? yk.length : yk.covers(-1))) && (!Xk || !yk.isWidget() && Xk.isWidget()) && (Xk = yk, ik = kk - lk)
            }
          })), !Ik && !Xk) throw new Error("No tile at position " + kk);
        return Ik && Fk < 0 || !Xk ? {
          tile: Ik,
          offset: Tk
        } : {
          tile: Xk,
          offset: ik
        }
      }
    }
    class JI extends eI {
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
        let Ik = new JI(Fk || document.createElement(kk.tagName), kk);
        return Fk || (Ik.flags |= 4), Ik
      }
    }
    class xI extends eI {
      constructor(kk, Fk) {
        super(kk), this.attrs = Fk
      }
      isLine() {
        return !0
      }
      static start(kk, Fk, Ik) {
        let Xk = new xI(Fk || document.createElement("div"), kk);
        return Fk && Ik || (Xk.flags |= 4), Xk
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(kk, Fk, Ik) {
        let Xk = null,
          Tk = -1,
          ik = null,
          yk = -1;
        ! function kk(lk, ak) {
          for (let qk = 0, Lk = 0; qk < lk.children.length && Lk <= ak; qk++) {
            let tk = lk.children[qk],
              Zk = Lk + tk.length;
            Zk >= ak && (tk.isComposite() ? kk(tk, ak - Lk) : (!ik || ik.isHidden && (Fk > 0 || Ik && PI(ik, tk))) && (Zk > ak || 32 & tk.flags) ? (ik = tk, yk = ak - Lk) : (Lk < ak || 16 & tk.flags && !tk.isHidden) && (Xk = tk, Tk = ak - Lk)), Lk = Zk
          }
        }(this, kk);
        let lk = (Fk < 0 ? Xk : ik) || Xk || ik;
        return lk ? {
          tile: lk,
          offset: lk == Xk ? Tk : yk
        } : null
      }
      coordsIn(kk, Fk) {
        let Ik = this.resolveInline(kk, Fk, !0);
        return Ik ? Ik.tile.coordsIn(Math.max(0, Ik.offset), Fk) : function(kk) {
          let Fk = kk.dom.lastChild;
          if (!Fk) return kk.dom.getBoundingClientRect();
          let Ik = Bk(Fk);
          return Ik[Ik.length - 1] || null
        }(this)
      }
      domIn(kk, Fk) {
        let Ik = this.resolveInline(kk, Fk);
        if (Ik) {
          let {
            tile: kk,
            offset: Xk
          } = Ik;
          if (this.dom.contains(kk.dom)) return kk.isText() ? new qF(kk.dom, Math.min(kk.dom.nodeValue.length, Xk)) : kk.domPosFor(Xk, 16 & kk.flags ? 1 : 32 & kk.flags ? -1 : Fk);
          let Tk = Ik.tile.parent,
            ik = !1;
          for (let Fk of Tk.children) {
            if (ik) return new qF(Fk.dom, 0);
            Fk == Ik.tile && (ik = !0)
          }
        }
        return new qF(this.dom, 0)
      }
    }

    function PI(kk, Fk) {
      let Ik = kk.coordsIn(0, 1),
        Xk = Fk.coordsIn(0, 1);
      return Ik && Xk && Xk.top < Ik.bottom
    }
    class KI extends eI {
      constructor(kk, Fk) {
        super(kk), this.mark = Fk
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (kk, Fk) {
        let Ik = new KI(Fk || document.createElement(kk.tagName), kk);
        return Fk || (Ik.flags |= 4), Ik
      }
    }
    class QI extends jI {
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
        let Ik = this.dom.nodeValue.length;
        kk > Ik && (kk = Ik);
        let Xk = kk,
          Tk = kk,
          ik = 0;
        0 == kk && Fk < 0 || kk == Ik && Fk >= 0 ? Vk.chrome || Vk.gecko || (kk ? (Xk--, ik = 1) : Tk < Ik && (Tk++, ik = -1)) : Fk < 0 ? Xk-- : Tk < Ik && Tk++;
        let yk = TF(this.dom, Xk, Tk).getClientRects();
        if (!yk.length) return null;
        let lk = yk[(ik ? ik < 0 : Fk >= 0) ? 0 : yk.length - 1];
        return Vk.safari && !ik && 0 == lk.width && (lk = Array.prototype.find.call(yk, (kk => kk.width)) || lk), ik ? hk(lk, ik < 0) : lk || null
      }
      static of (kk, Fk) {
        let Ik = new QI(Fk || document.createTextNode(kk), kk);
        return Fk || (Ik.flags |= 2), Ik
      }
    }
    class sI extends jI {
      constructor(kk, Fk, Ik, Xk) {
        super(kk, Fk, Xk), this.widget = Ik
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
      coordsInWidget(kk, Fk, Ik) {
        let Xk = this.widget.coordsAt(this.dom, kk, Fk);
        if (Xk) return Xk;
        if (Ik) return hk(this.dom.getBoundingClientRect(), this.length ? 0 == kk : Fk <= 0);
        {
          let Fk = this.dom.getClientRects(),
            Ik = null;
          if (!Fk.length) return null;
          let Xk = !!(16 & this.flags) || !(32 & this.flags) && kk > 0;
          for (let Tk = Xk ? Fk.length - 1 : 0; Ik = Fk[Tk], !(kk > 0 ? 0 == Tk : Tk == Fk.length - 1 || Ik.top < Ik.bottom); Tk += Xk ? -1 : 1);
          return hk(Ik, !Xk)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Xk.J.empty;
        let {
          root: kk
        } = this;
        if (!kk) return Xk.J.empty;
        let Fk = this.posAtStart;
        return kk.view.state.doc.slice(Fk, Fk + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (kk, Fk, Ik, Xk, Tk) {
        return Tk || (Tk = kk.toDOM(Fk), kk.editable || (Tk.contentEditable = "false")), new sI(Tk, Ik, kk, Xk)
      }
    }
    class VI extends jI {
      constructor(kk) {
        let Fk = document.createElement("img");
        Fk.className = "cm-widgetBuffer", Fk.setAttribute("aria-hidden", "true"), super(Fk, 0, kk)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Xk.J.empty
      }
      coordsIn(kk) {
        return this.dom.getBoundingClientRect()
      }
    }
    class zI {
      constructor(kk) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = kk
      }
      advance(kk, Fk, Ik) {
        let {
          tile: Xk,
          index: Tk,
          beforeBreak: ik,
          parents: yk
        } = this;
        for (; kk || Fk > 0;)
          if (Xk.isComposite())
            if (ik) {
              if (!kk) break;
              Ik && Ik.break(), kk--, ik = !1
            } else if (Tk == Xk.children.length) {
          if (!kk && !yk.length) break;
          Ik && Ik.leave(Xk), ik = !!Xk.breakAfter, ({
            tile: Xk,
            index: Tk
          } = yk.pop()), Tk++
        } else {
          let lk = Xk.children[Tk],
            ak = lk.breakAfter;
          !(Fk > 0 ? lk.length <= kk : lk.length < kk) || Ik && !1 === Ik.skip(lk, 0, lk.length) && lk.isComposite ? (yk.push({
            tile: Xk,
            index: Tk
          }), Xk = lk, Tk = 0, Ik && lk.isComposite() && Ik.enter(lk)) : (ik = !!ak, Tk++, kk -= lk.length)
        } else if (Tk == Xk.length) ik = !!Xk.breakAfter, ({
          tile: Xk,
          index: Tk
        } = yk.pop()), Tk++;
        else {
          if (!kk) break;
          {
            let Fk = Math.min(kk, Xk.length - Tk);
            Ik && Ik.skip(Xk, Tk, Tk + Fk), kk -= Fk, Tk += Fk
          }
        }
        return this.tile = Xk, this.index = Tk, this.beforeBreak = ik, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class SI {
      constructor(kk, Fk, Ik, Xk) {
        this.from = kk, this.to = Fk, this.wrapper = Ik, this.rank = Xk
      }
    }
    class oI {
      constructor(kk, Fk, Ik) {
        this.cache = kk, this.root = Fk, this.blockWrappers = Ik, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(kk, Fk, Ik, Xk) {
        var Tk;
        this.flushBuffer();
        let ik = this.ensureMarks(Fk, Ik),
          yk = ik.lastChild;
        if (yk && yk.isText() && !(8 & yk.flags) && yk.length + kk.length < 512) {
          this.cache.reused.set(yk, 2), (ik.children[ik.children.length - 1] = new QI(yk.dom, yk.text + kk)).parent = ik
        } else ik.append(Xk || QI.of(kk, null === (Tk = this.cache.find(QI)) || void 0 === Tk ? void 0 : Tk.dom));
        this.pos += kk.length, this.afterWidget = null
      }
      addComposition(kk, Fk) {
        let Ik = this.curLine;
        Ik.dom != Fk.line.dom && (Ik.setDOM(this.cache.reused.has(Fk.line) ? uI(Fk.line.dom) : Fk.line.dom), this.cache.reused.set(Fk.line, 2));
        let Xk = Ik;
        for (let yk = Fk.marks.length - 1; yk >= 0; yk--) {
          let kk = Fk.marks[yk],
            Ik = Xk.lastChild;
          if (Ik instanceof KI && Ik.mark.eq(kk.mark)) Ik.dom != kk.dom && Ik.setDOM(uI(kk.dom)), Xk = Ik;
          else {
            if (this.cache.reused.get(kk)) {
              let Fk = jI.get(kk.dom);
              Fk && Fk.setDOM(uI(kk.dom))
            }
            let Fk = KI.of(kk.mark, kk.dom);
            Xk.append(Fk), Xk = Fk
          }
          this.cache.reused.set(kk, 2)
        }
        let Tk = jI.get(kk.text);
        Tk && this.cache.reused.set(Tk, 2);
        let ik = new QI(kk.text, kk.text.nodeValue);
        ik.flags |= 8, Xk.append(ik)
      }
      addInlineWidget(kk, Fk, Ik) {
        let Xk = this.afterWidget && 48 & kk.flags && (48 & this.afterWidget.flags) == (48 & kk.flags);
        Xk || this.flushBuffer();
        let Tk = this.ensureMarks(Fk, Ik);
        Xk || 16 & kk.flags || Tk.append(this.getBuffer(1)), Tk.append(kk), this.pos += kk.length, this.afterWidget = kk
      }
      addMark(kk, Fk, Ik) {
        this.flushBuffer(), this.ensureMarks(Fk, Ik).append(kk), this.pos += kk.length, this.afterWidget = null
      }
      addBlockWidget(kk) {
        this.getBlockPos().append(kk), this.pos += kk.length, this.lastBlock = kk, this.endLine()
      }
      continueWidget(kk) {
        (this.afterWidget || this.lastBlock).length += kk, this.pos += kk
      }
      addLineStart(kk, Fk) {
        var Ik;
        kk || (kk = pI);
        let Xk = xI.start(kk, Fk || (null === (Ik = this.cache.find(xI)) || void 0 === Ik ? void 0 : Ik.dom), !!Fk);
        this.getBlockPos().append(this.lastBlock = this.curLine = Xk)
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
        var Ik;
        let Xk = this.curLine;
        for (let Tk = kk.length - 1; Tk >= 0; Tk--) {
          let ik, yk = kk[Tk];
          if (Fk > 0 && (ik = Xk.lastChild) && ik instanceof KI && ik.mark.eq(yk)) Xk = ik, Fk--;
          else {
            let kk = KI.of(yk, null === (Ik = this.cache.find(KI, (kk => kk.mark.eq(yk)))) || void 0 === Ik ? void 0 : Ik.dom);
            Xk.append(kk), Xk = kk, Fk = 0
          }
        }
        return Xk
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let kk = this.curLine.lastChild;
          kk && GI(this.curLine, !1) && ("BR" == kk.dom.nodeName || !kk.isWidget() || Vk.ios && GI(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(RI, 0, 32) || new sI(RI.toDOM(), 0, RI, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let kk = this.wrappers.length - 1; kk >= 0; kk--) this.wrappers[kk].to < this.pos && this.wrappers.splice(kk, 1);
        for (let kk = this.blockWrappers; kk.value && kk.from <= this.pos; kk.next())
          if (kk.to >= this.pos) {
            let Fk = new SI(kk.from, kk.to, kk.value, kk.rank),
              Ik = this.wrappers.length;
            for (; Ik > 0 && (this.wrappers[Ik - 1].rank - Fk.rank || this.wrappers[Ik - 1].to - Fk.to) < 0;) Ik--;
            this.wrappers.splice(Ik, 0, Fk)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var kk;
        this.updateBlockWrappers();
        let Fk = this.root;
        for (let Ik of this.wrappers) {
          let Xk = Fk.lastChild;
          if (Ik.from < this.pos && Xk instanceof JI && Xk.wrapper.eq(Ik.wrapper)) Fk = Xk;
          else {
            let Xk = JI.of(Ik.wrapper, null === (kk = this.cache.find(JI, (kk => kk.wrapper.eq(Ik.wrapper)))) || void 0 === kk ? void 0 : kk.dom);
            Fk.append(Xk), Fk = Xk
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
          Ik = this.cache.find(VI, void 0, 1);
        return Ik && (Ik.flags = Fk), Ik || new VI(Fk)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class vI {
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
            lineBreak: Ik,
            done: Xk
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Xk) throw new Error("Ran out of text content when drawing inline views");
          this.text = Fk;
          let Tk = this.textOff = Math.min(kk, Fk.length);
          return Ik ? null : Fk.slice(0, Tk)
        }
        let Fk = Math.min(this.text.length, this.textOff + kk),
          Ik = this.text.slice(this.textOff, Fk);
        return this.textOff = Fk, Ik
      }
    }
    const EI = [sI, xI, QI, KI, VI, JI, HI];
    for (let uy = 0; uy < EI.length; uy++) EI[uy].bucket = uy;
    class OI {
      constructor(kk) {
        this.view = kk, this.buckets = EI.map((() => [])), this.index = EI.map((() => 0)), this.reused = new Map
      }
      add(kk) {
        let Fk = kk.constructor.bucket,
          Ik = this.buckets[Fk];
        Ik.length < 6 ? Ik.push(kk) : Ik[this.index[Fk] = (this.index[Fk] + 1) % 6] = kk
      }
      find(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Xk = kk.bucket,
          Tk = this.buckets[Xk],
          ik = this.index[Xk];
        for (let yk = Tk.length - 1; yk >= 0; yk--) {
          let kk = (yk + ik) % Tk.length,
            lk = Tk[kk];
          if ((!Fk || Fk(lk)) && !this.reused.has(lk)) return Tk.splice(kk, 1), kk < ik && this.index[Xk]--, this.reused.set(lk, Ik), lk
        }
        return null
      }
      findWidget(kk, Fk, Ik) {
        let Xk = this.buckets[0];
        if (Xk.length)
          for (let Tk = 0, ik = 0;; Tk++) {
            if (Tk == Xk.length) {
              if (ik) return null;
              ik = 1, Tk = 0
            }
            let yk = Xk[Tk];
            if (!this.reused.has(yk) && (0 == ik ? yk.widget.compare(kk) : yk.widget.constructor == kk.constructor && kk.updateDOM(yk.dom, this.view, yk.widget))) return Xk.splice(Tk, 1), Tk < this.index[0] && this.index[0]--, yk.widget == kk && yk.length == Fk && (497 & yk.flags) == Ik ? (this.reused.set(yk, 1), yk) : (this.reused.set(yk, 2), new sI(yk.dom, Fk, kk, -498 & yk.flags | Ik))
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
    class nI {
      constructor(kk, Fk, Ik, Tk, ik) {
        this.view = kk, this.wk = Tk, this.disallowBlockEffectsFor = ik, this.openWidget = !1, this.openMarks = 0, this.cache = new OI(kk), this.text = new vI(kk.state.doc), this.builder = new oI(this.cache, new HI(kk, kk.contentDOM), Xk.A.iter(Ik)), this.cache.reused.set(Fk, 2), this.old = new zI(Fk), this.reuseWalker = {
          skip: (kk, Fk, Ik) => {
            if (this.cache.add(kk), kk.isComposite()) return !1
          },
          enter: kk => this.cache.add(kk),
          leave: () => {},
          break: () => {}
        }
      }
      run(kk, Fk) {
        let Ik = Fk && this.getCompositionContext(Fk.text);
        for (let Xk = 0, Tk = 0, ik = 0;;) {
          let yk = ik < kk.length ? kk[ik++] : null,
            lk = yk ? yk.fromA : this.old.root.length;
          if (lk > Xk) {
            let kk = lk - Xk;
            this.preserve(kk, !ik, !yk), Xk = lk, Tk += kk
          }
          if (!yk) break;
          Fk && yk.fromA <= Fk.range.fromA && yk.toA >= Fk.range.toA ? (this.forward(yk.fromA, Fk.range.fromA, Fk.range.fromA < Fk.range.toA ? 1 : -1), this.emit(Tk, Fk.range.fromB), this.cache.clear(), this.builder.addComposition(Fk, Ik), this.text.skip(Fk.range.toB - Fk.range.fromB), this.forward(Fk.range.fromA, yk.toA), this.emit(Fk.range.toB, yk.toB)) : (this.forward(yk.fromA, yk.toA), this.emit(Tk, yk.toB)), Tk = yk.toB, Xk = yk.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(kk, Fk, Ik) {
        let Xk = function(kk) {
            let Fk = [];
            for (let Ik = kk.parents.length; Ik > 1; Ik--) {
              let Xk = Ik == kk.parents.length ? kk.tile : kk.parents[Ik].tile;
              Xk instanceof KI && Fk.push(Xk.mark)
            }
            return Fk
          }(this.old),
          Tk = this.openMarks;
        this.old.advance(kk, Ik ? 1 : -1, {
          skip: (kk, Fk, Ik) => {
            if (kk.isWidget())
              if (this.openWidget) this.builder.continueWidget(Ik - Fk);
              else {
                let ik = Ik > 0 || Fk < kk.length ? sI.of(kk.widget, this.view, Ik - Fk, 496 & kk.flags, this.cache.maybeReuse(kk)) : this.cache.reuse(kk);
                256 & ik.flags ? (ik.flags &= -2, this.builder.addBlockWidget(ik)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(ik, Xk, Tk), Tk = Xk.length)
              }
            else if (kk.isText()) this.builder.ensureLine(null), Fk || Ik != kk.length || this.cache.reused.has(kk) ? (this.cache.add(kk), this.builder.addText(kk.text.slice(Fk, Ik), Xk, Tk)) : this.builder.addText(kk.text, Xk, Tk, this.cache.reuse(kk)), Tk = Xk.length;
            else if (kk.isLine()) kk.flags &= -2, this.cache.reused.set(kk, 1), this.builder.addLine(kk);
            else if (kk instanceof VI) this.cache.add(kk);
            else {
              if (!(kk instanceof KI)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(kk, Xk, Tk), this.cache.reused.set(kk, 1), Tk = Xk.length
            }
            this.openWidget = !1
          },
          enter: kk => {
            kk.isLine() ? this.builder.addLineStart(kk.attrs, this.cache.maybeReuse(kk)) : (this.cache.add(kk), kk instanceof KI && Xk.unshift(kk.mark)), this.openWidget = !1
          },
          leave: kk => {
            kk.isLine() ? Xk.length && (Xk.length = Tk = 0) : kk instanceof KI && (Xk.shift(), Tk = Math.min(Tk, Xk.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(kk)
      }
      emit(kk, Fk) {
        let Ik = null,
          Tk = this.builder,
          ik = 0,
          yk = Xk.A.spans(this.wk, kk, Fk, {
            point: (kk, Fk, Xk, yk, lk, ak) => {
              if (Xk instanceof Rk) {
                if (this.disallowBlockEffectsFor[ak]) {
                  if (Xk.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (Fk > this.view.state.doc.lineAt(kk).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (ik = yk.length, lk > yk.length) Tk.continueWidget(Fk - kk);
                else {
                  let ik = Xk.widget || (Xk.block ? bI.block : bI.inline),
                    ak = function(kk) {
                      let Fk = kk.isReplace ? (kk.startSide < 0 ? 64 : 0) | (kk.endSide > 0 ? 128 : 0) : kk.startSide > 0 ? 32 : 16;
                      kk.block && (Fk |= 256);
                      return Fk
                    }(Xk),
                    qk = this.cache.findWidget(ik, Fk - kk, ak) || sI.of(ik, this.view, Fk - kk, ak);
                  Xk.block ? (Xk.startSide > 0 && Tk.addLineStartIfNotCovered(Ik), Tk.addBlockWidget(qk)) : (Tk.ensureLine(Ik), Tk.addInlineWidget(qk, yk, lk))
                }
                Ik = null
              } else Ik = function(kk, Fk) {
                let Ik = Fk.spec.attributes,
                  Xk = Fk.spec.class;
                if (!Ik && !Xk) return kk;
                kk || (kk = {
                  class: "cm-line"
                });
                Ik && zk(Ik, kk);
                Xk && (kk.class += " " + Xk);
                return kk
              }(Ik, Xk);
              Fk > kk && this.text.skip(Fk - kk)
            },
            span: (kk, Fk, Xk, ik) => {
              for (let yk = kk; yk < Fk;) {
                let lk = this.text.next(Math.min(512, Fk - yk));
                null == lk ? (Tk.addLineStartIfNotCovered(Ik), Tk.addBreak(), yk++) : (Tk.ensureLine(Ik), Tk.addText(lk, Xk, yk == kk ? ik : Xk.length), yk += lk.length), Ik = null
              }
            }
          });
        Tk.addLineStartIfNotCovered(Ik), this.openWidget = yk > ik, this.openMarks = yk
      }
      forward(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        Fk - kk <= 10 ? this.old.advance(Fk - kk, Ik, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(Fk - kk - 10, -1), this.old.advance(5, Ik, this.reuseWalker))
      }
      getCompositionContext(kk) {
        let Fk = [],
          Ik = null;
        for (let Xk = kk.parentNode;; Xk = Xk.parentNode) {
          let kk = jI.get(Xk);
          if (Xk == this.view.contentDOM) break;
          kk instanceof KI ? Fk.push(kk) : (null === kk || void 0 === kk ? void 0 : kk.isLine()) ? Ik = kk : kk instanceof JI || ("DIV" != Xk.nodeName || Ik || Xk == this.view.contentDOM ? Ik || Fk.push(KI.of(new uk({
            tagName: Xk.nodeName.toLowerCase(),
            attributes: Ok(Xk)
          }), Xk)) : Ik = new xI(Xk, pI))
        }
        return {
          line: Ik,
          marks: Fk
        }
      }
    }

    function GI(kk, Fk) {
      let Ik = kk => {
        for (let Xk of kk.children)
          if ((Fk ? Xk.isText() : Xk.length) || Ik(Xk)) return !0;
        return !1
      };
      return Ik(kk)
    }
    const pI = {
      class: "cm-line"
    };

    function uI(kk) {
      let Fk = jI.get(kk);
      return Fk && Fk.setDOM(kk.cloneNode()), kk
    }
    class bI extends nk {
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
    bI.inline = new bI("span"), bI.block = new bI("div");
    const RI = new class extends nk {
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
    class UI {
      constructor(kk) {
        this.view = kk, this.wk = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = pk.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new HI(kk, kk.contentDOM), this.updateInner([new LI(0, 0, 0, kk.state.doc.length)], null)
      }
      update(kk) {
        var Fk;
        let Ik = kk.changedRanges;
        this.minWidth > 0 && Ik.length && (Ik.every((kk => {
          let {
            fromA: Fk,
            toA: Ik
          } = kk;
          return Ik < this.minWidthFrom || Fk > this.minWidthTo
        })) ? (this.minWidthFrom = kk.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = kk.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(kk);
        let Tk = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (Fk = this.domChanged) || void 0 === Fk ? void 0 : Fk.newSel) ? Tk = this.domChanged.newSel.head : function(kk, Fk) {
          let Ik = !1;
          Fk && kk.iterChangedRanges(((kk, Xk) => {
            kk < Fk.to && Xk > Fk.from && (Ik = !0)
          }));
          return Ik
        }(kk.changes, this.hasComposition) || kk.selectionSet || (Tk = kk.state.selection.main.head));
        let ik = Tk > -1 ? function(kk, Fk, Ik) {
          let Xk = NI(kk, Ik);
          if (!Xk) return null;
          let {
            node: Tk,
            from: ik,
            to: yk
          } = Xk, lk = Tk.nodeValue;
          if (/[\n\r]/.test(lk)) return null;
          if (kk.state.doc.sliceString(Xk.from, Xk.to) != lk) return null;
          let ak = Fk.invertedDesc;
          return {
            range: new LI(ak.mapPos(ik), ak.mapPos(yk), ik, yk),
            text: Tk
          }
        }(this.view, kk.changes, Tk) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: Fk,
            to: Xk
          } = this.hasComposition;
          Ik = new LI(Fk, Xk, kk.changes.mapPos(Fk, -1), kk.changes.mapPos(Xk, 1)).addToSet(Ik.slice())
        }
        this.hasComposition = ik ? {
          from: ik.range.fromB,
          to: ik.range.toB
        } : null, (Vk.ie || Vk.chrome) && !ik && kk && kk.state.doc.lines != kk.startState.doc.lines && (this.forceSelection = !0);
        let yk = this.wk,
          lk = this.blockWrappers;
        this.updateDeco();
        let ak = function(kk, Fk, Ik) {
          let Tk = new cI;
          return Xk.A.compare(kk, Fk, Ik, Tk), Tk.changes
        }(yk, this.wk, kk.changes);
        ak.length && (Ik = LI.extendWithRanges(Ik, ak));
        let qk = function(kk, Fk, Ik) {
          let Tk = new WI;
          return Xk.A.compare(kk, Fk, Ik, Tk), Tk.changes
        }(lk, this.blockWrappers, kk.changes);
        return qk.length && (Ik = LI.extendWithRanges(Ik, qk)), ik && !Ik.some((kk => kk.fromA <= ik.range.fromA && kk.toA >= ik.range.toA)) && (Ik = ik.range.addToSet(Ik.slice())), !(2 & this.tile.flags && 0 == Ik.length) && (this.updateInner(Ik, ik), kk.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(kk, Fk) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: Ik
        } = this.view;
        Ik.ignore((() => {
          if (Fk || kk.length) {
            let Ik = this.tile,
              Xk = new nI(this.view, Ik, this.blockWrappers, this.wk, this.dynamicDecorationMap);
            Fk && jI.get(Fk.text) && Xk.cache.reused.set(jI.get(Fk.text), 2), this.tile = Xk.run(kk, Fk), CI(Ik, Xk.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Xk = Vk.chrome || Vk.ios ? {
            node: Ik.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Xk), !Xk || !Xk.written && Ik.selectionRange.focusNode == Xk.node && this.tile.dom.contains(Xk.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Xk = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let Tk of this.tile.children) Tk.isWidget() && Tk.widget instanceof fI && Xk.push(Tk.dom);
        Ik.updateGaps(Xk)
      }
      updateEditContextFormatting(kk) {
        this.editContextFormatting = this.editContextFormatting.map(kk.changes);
        for (let Fk of kk.transactions)
          for (let kk of Fk.effects) kk.is(YF) && (this.editContextFormatting = kk.value)
      }
      updateSelection() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: Fk
        } = this.tile, Ik = this.view.root.activeElement, Xk = Ik == Fk, Tk = !Xk && !(this.view.state.facet(gF) || Fk.tabIndex > -1) && fk(Fk, this.view.observer.selectionRange) && !(Ik && Fk.contains(Ik));
        if (!(Xk || kk || Tk)) return;
        let ik = this.forceSelection;
        this.forceSelection = !1;
        let yk, lk, ak = this.view.state.selection.main;
        if (ak.empty ? lk = yk = this.inlineDOMNearPos(ak.anchor, ak.assoc || 1) : (lk = this.inlineDOMNearPos(ak.head, ak.head == ak.from ? 1 : -1), yk = this.inlineDOMNearPos(ak.anchor, ak.anchor == ak.from ? 1 : -1)), Vk.gecko && ak.empty && !this.hasComposition && (1 == (qk = yk).node.nodeType && qk.node.firstChild && (0 == qk.offset || "false" == qk.node.childNodes[qk.offset - 1].contentEditable) && (qk.offset == qk.node.childNodes.length || "false" == qk.node.childNodes[qk.offset].contentEditable))) {
          let kk = document.createTextNode("");
          this.view.observer.ignore((() => yk.node.insertBefore(kk, yk.node.childNodes[yk.offset] || null))), yk = lk = new qF(kk, 0), ik = !0
        }
        var qk;
        let Lk = this.view.observer.selectionRange;
        !ik && Lk.focusNode && (dk(yk.node, yk.offset, Lk.anchorNode, Lk.anchorOffset) && dk(lk.node, lk.offset, Lk.focusNode, Lk.focusOffset) || this.suppressWidgetCursorChange(Lk, ak)) || (this.view.observer.ignore((() => {
          Vk.android && Vk.chrome && Fk.contains(Lk.focusNode) && function(kk, Fk) {
            for (let Ik = kk; Ik && Ik != Fk; Ik = Ik.assignedSlot || Ik.parentNode)
              if (1 == Ik.nodeType && "false" == Ik.contentEditable) return !0;
            return !1
          }(Lk.focusNode, Fk) && (Fk.blur(), Fk.focus({
            preventScroll: !0
          }));
          let kk = ck(this.view.root);
          if (kk)
            if (ak.empty) {
              if (Vk.gecko) {
                let kk = (Xk = yk.node, ik = yk.offset, 1 != Xk.nodeType ? 0 : (ik && "false" == Xk.childNodes[ik - 1].contentEditable ? 1 : 0) | (ik < Xk.childNodes.length && "false" == Xk.childNodes[ik].contentEditable ? 2 : 0));
                if (kk && 3 != kk) {
                  let Fk = (1 == kk ? lF : aF)(yk.node, yk.offset);
                  Fk && (yk = new qF(Fk.node, Fk.offset))
                }
              }
              kk.collapse(yk.node, yk.offset), null != ak.bidiLevel && void 0 !== kk.caretBidiLevel && (kk.caretBidiLevel = ak.bidiLevel)
            } else if (kk.extend) {
            kk.collapse(yk.node, yk.offset);
            try {
              kk.extend(lk.node, lk.offset)
            } catch (qk) {}
          } else {
            let Fk = document.createRange();
            ak.anchor > ak.head && ([yk, lk] = [lk, yk]), Fk.setEnd(lk.node, lk.offset), Fk.setStart(yk.node, yk.offset), kk.removeAllRanges(), kk.addRange(Fk)
          } else;
          var Xk, ik;
          Tk && this.view.root.activeElement == Fk && (Fk.blur(), Ik && Ik.focus())
        })), this.view.observer.setSelectionRange(yk, lk)), this.impreciseAnchor = yk.precise ? null : new qF(Lk.anchorNode, Lk.anchorOffset), this.impreciseHead = lk.precise ? null : new qF(Lk.focusNode, Lk.focusOffset)
      }
      suppressWidgetCursorChange(kk, Fk) {
        return this.hasComposition && Fk.empty && dk(kk.focusNode, kk.focusOffset, kk.anchorNode, kk.anchorOffset) && this.posFromDOM(kk.focusNode, kk.focusOffset) == Fk.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: kk
        } = this, Fk = kk.state.selection.main, Ik = ck(kk.root), {
          anchorNode: Xk,
          anchorOffset: Tk
        } = kk.observer.selectionRange;
        if (!Ik || !Fk.empty || !Fk.assoc || !Ik.modify) return;
        let ik = this.lineAt(Fk.head, Fk.assoc);
        if (!ik) return;
        let yk = ik.posAtStart;
        if (Fk.head == yk || Fk.head == yk + ik.length) return;
        let lk = this.coordsAt(Fk.head, -1),
          ak = this.coordsAt(Fk.head, 1);
        if (!lk || !ak || lk.bottom > ak.top) return;
        let qk = this.domAtPos(Fk.head + Fk.assoc, Fk.assoc);
        Ik.collapse(qk.node, qk.offset), Ik.modify("move", Fk.assoc < 0 ? "forward" : "backward", "lineboundary"), kk.observer.readSelectionRange();
        let Lk = kk.observer.selectionRange;
        kk.docView.posFromDOM(Lk.anchorNode, Lk.anchorOffset) != Fk.from && Ik.collapse(Xk, Tk)
      }
      posFromDOM(kk, Fk) {
        let Ik = this.tile.nearest(kk);
        if (!Ik) return 2 & this.tile.dom.compareDocumentPosition(kk) ? 0 : this.view.state.doc.length;
        let Xk = Ik.posAtStart;
        if (!Ik.isComposite()) return Ik.isText() ? kk == Ik.dom ? Xk + Fk : Xk + (Fk ? Ik.length : 0) : Xk;
        {
          let Tk;
          if (kk == Ik.dom) Tk = Ik.dom.childNodes[Fk];
          else {
            let Xk = 0 == mk(kk) ? 0 : 0 == Fk ? -1 : 1;
            for (;;) {
              let Fk = kk.parentNode;
              if (Fk == Ik.dom) break;
              0 == Xk && Fk.firstChild != Fk.lastChild && (Xk = kk == Fk.firstChild ? -1 : 1), kk = Fk
            }
            Tk = Xk < 0 ? kk : kk.nextSibling
          }
          if (Tk == Ik.dom.firstChild) return Xk;
          for (; Tk && !jI.get(Tk);) Tk = Tk.nextSibling;
          if (!Tk) return Xk + Ik.length;
          for (let kk = 0, Fk = Xk;; kk++) {
            let Xk = Ik.children[kk];
            if (Xk.dom == Tk) return Fk;
            Fk += Xk.length + Xk.breakAfter
          }
        }
      }
      domAtPos(kk, Fk) {
        let {
          tile: Ik,
          offset: Xk
        } = this.tile.resolveBlock(kk, Fk);
        return Ik.isWidget() ? Ik.domPosFor(kk, Fk) : Ik.domIn(Xk, Fk)
      }
      inlineDOMNearPos(kk, Fk) {
        let Ik, Xk, Tk = -1,
          ik = !1,
          yk = -1,
          lk = !1;
        return this.tile.blockTiles(((Fk, ak) => {
          if (Fk.isWidget()) {
            if (32 & Fk.flags && ak >= kk) return !0;
            16 & Fk.flags && (ik = !0)
          } else {
            let qk = ak + Fk.length;
            if (ak <= kk && (Ik = Fk, Tk = kk - ak, ik = qk < kk), qk >= kk && !Xk && (Xk = Fk, yk = kk - ak, lk = ak > kk), ak > kk && Xk) return !0
          }
        })), Ik || Xk ? (ik && Xk ? Ik = null : lk && Ik && (Xk = null), Ik && Fk < 0 || !Xk ? Ik.domIn(Tk, Fk) : Xk.domIn(yk, Fk)) : this.domAtPos(kk, Fk)
      }
      coordsAt(kk, Fk) {
        let {
          tile: Ik,
          offset: Xk
        } = this.tile.resolveBlock(kk, Fk);
        return Ik.isWidget() ? Ik.widget instanceof fI ? null : Ik.coordsInWidget(Xk, Fk, !0) : Ik.coordsIn(Xk, Fk)
      }
      lineAt(kk, Fk) {
        let {
          tile: Ik
        } = this.tile.resolveBlock(kk, Fk);
        return Ik.isLine() ? Ik : null
      }
      coordsForChar(kk) {
        let {
          tile: Fk,
          offset: Ik
        } = this.tile.resolveBlock(kk, 1);
        if (!Fk.isLine()) return null;
        return function kk(Fk, Ik) {
          if (Fk.isComposite())
            for (let Xk of Fk.children) {
              if (Xk.length >= Ik) {
                let Fk = kk(Xk, Ik);
                if (Fk) return Fk
              }
              if ((Ik -= Xk.length) < 0) break
            } else if (Fk.isText() && Ik < Fk.length) {
              let kk = (0, Xk.Y)(Fk.text, Ik);
              if (kk == Ik) return null;
              let Tk = TF(Fk.dom, Ik, kk).getClientRects();
              for (let Fk = 0; Fk < Tk.length; Fk++) {
                let kk = Tk[Fk];
                if (Fk == Tk.length - 1 || kk.top < kk.bottom && kk.left < kk.right) return kk
              }
            } return null
        }(Fk, Ik)
      }
      measureVisibleLineHeights(kk) {
        let Fk = [],
          {
            from: Ik,
            to: Xk
          } = kk,
          Tk = this.view.contentDOM.clientWidth,
          ik = Tk > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          yk = -1,
          lk = this.view.textDirection == LF.LTR,
          ak = 0,
          qk = (kk, Lk, tk) => {
            for (let Zk = 0; Zk < kk.children.length && !(Lk > Xk); Zk++) {
              let Xk = kk.children[Zk],
                jk = Lk + Xk.length,
                ek = Xk.dom.getBoundingClientRect(),
                {
                  height: wk
                } = ek;
              if (tk && !Zk && (ak += ek.top - tk.top), Xk instanceof JI) jk > Ik && qk(Xk, Lk, ek);
              else if (Lk >= Ik && (ak > 0 && Fk.push(-ak), Fk.push(wk + ak), ak = 0, ik)) {
                let kk = Xk.dom.lastChild,
                  Fk = kk ? Bk(kk) : [];
                if (Fk.length) {
                  let kk = Fk[Fk.length - 1],
                    Ik = lk ? kk.right - ek.left : ek.right - kk.left;
                  Ik > yk && (yk = Ik, this.minWidth = Tk, this.minWidthFrom = Lk, this.minWidthTo = jk)
                }
              }
              tk && Zk == kk.children.length - 1 && (ak += tk.bottom - ek.bottom), Lk = jk + Xk.breakAfter
            }
          };
        return qk(this.tile, 0, null), Fk
      }
      textDirectionAt(kk) {
        let {
          tile: Fk
        } = this.tile.resolveBlock(kk, 1);
        return "rtl" == getComputedStyle(Fk.dom).direction ? LF.RTL : LF.LTR
      }
      measureTextSize() {
        let kk = this.tile.blockTiles((kk => {
          if (kk.isLine() && kk.children.length && kk.length <= 20) {
            let Fk, Ik = 0;
            for (let Xk of kk.children) {
              if (!Xk.isText() || /[^ -~]/.test(Xk.text)) return;
              let kk = Bk(Xk.dom);
              if (1 != kk.length) return;
              Ik += kk[0].width, Fk = kk[0].height
            }
            if (Ik) return {
              lineHeight: kk.dom.getBoundingClientRect().height,
              charWidth: Ik / kk.length,
              textHeight: Fk
            }
          }
        }));
        if (kk) return kk;
        let Fk, Ik, Xk, Tk = document.createElement("div");
        return Tk.className = "cm-line", Tk.style.width = "99999px", Tk.style.position = "absolute", Tk.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(Tk);
          let kk = Bk(Tk.firstChild)[0];
          Fk = Tk.getBoundingClientRect().height, Ik = kk && kk.width ? kk.width / 27 : 7, Xk = kk && kk.height ? kk.height : Fk, Tk.remove()
        })), {
          lineHeight: Fk,
          charWidth: Ik,
          textHeight: Xk
        }
      }
      computeBlockGapDeco() {
        let kk = [],
          Fk = this.view.viewState;
        for (let Ik = 0, Xk = 0;; Xk++) {
          let Tk = Xk == Fk.viewports.length ? null : Fk.viewports[Xk],
            ik = Tk ? Tk.from - 1 : this.view.state.doc.length;
          if (ik > Ik) {
            let Xk = (Fk.lineBlockAt(ik).bottom - Fk.lineBlockAt(Ik).top) / this.view.scaleY;
            kk.push(pk.replace({
              widget: new fI(Xk),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(Ik, ik))
          }
          if (!Tk) break;
          Ik = Tk.to + 1
        }
        return pk.set(kk)
      }
      updateDeco() {
        let kk = 1,
          Fk = this.view.state.facet(FI).map((Fk => (this.dynamicDecorationMap[kk++] = "function" == typeof Fk) ? Fk(this.view) : Fk)),
          Ik = !1,
          Tk = this.view.state.facet(XI).map(((kk, Fk) => {
            let Xk = "function" == typeof kk;
            return Xk && (Ik = !0), Xk ? kk(this.view) : kk
          }));
        for (Tk.length && (this.dynamicDecorationMap[kk++] = Ik, Fk.push(Xk.A.join(Tk))), this.wk = [this.editContextFormatting, ...Fk, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; kk < this.wk.length;) this.dynamicDecorationMap[kk++] = !1;
        this.blockWrappers = this.view.state.facet(II).map((kk => "function" == typeof kk ? kk(this.view) : kk))
      }
      scrollIntoView(kk) {
        var Fk;
        if (kk.isSnapshot) {
          let Fk = this.view.viewState.lineBlockAt(kk.range.head);
          return this.view.scrollDOM.scrollTop = Fk.top - kk.yMargin, void(this.view.scrollDOM.scrollLeft = kk.xMargin)
        }
        for (let Lk of this.view.state.facet(fF)) try {
          if (Lk(this.view, kk.range, kk)) return !0
        } catch (qk) {
          AF(this.view.state, qk, "scroll handler")
        }
        let Ik, {
            range: Xk
          } = kk,
          Tk = this.coordsAt(Xk.head, null !== (Fk = Xk.assoc) && void 0 !== Fk ? Fk : Xk.empty ? 0 : Xk.head > Xk.anchor ? -1 : 1);
        if (!Tk) return;
        !Xk.empty && (Ik = this.coordsAt(Xk.anchor, Xk.anchor > Xk.head ? -1 : 1)) && (Tk = {
          left: Math.min(Tk.left, Ik.left),
          top: Math.min(Tk.top, Ik.top),
          right: Math.max(Tk.right, Ik.right),
          bottom: Math.max(Tk.bottom, Ik.bottom)
        });
        let ik = aI(this.view),
          yk = {
            left: Tk.left - ik.left,
            top: Tk.top - ik.top,
            right: Tk.right + ik.right,
            bottom: Tk.bottom + ik.bottom
          },
          {
            offsetWidth: lk,
            offsetHeight: ak
          } = this.view.scrollDOM;
        if (function(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
            let ak = kk.ownerDocument,
              qk = ak.defaultView || window;
            for (let Lk = kk, tk = !1; Lk && !tk;)
              if (1 == Lk.nodeType) {
                let kk, Zk = Lk == ak.body,
                  jk = 1,
                  ek = 1;
                if (Zk) kk = rk(qk);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(Lk).position) && (tk = !0), Lk.scrollHeight <= Lk.clientHeight && Lk.scrollWidth <= Lk.clientWidth) {
                    Lk = Lk.assignedSlot || Lk.parentNode;
                    continue
                  }
                  let Fk = Lk.getBoundingClientRect();
                  ({
                    scaleX: jk,
                    scaleY: ek
                  } = Dk(Lk, Fk)), kk = {
                    left: Fk.left,
                    right: Fk.left + Lk.clientWidth * jk,
                    top: Fk.top,
                    bottom: Fk.top + Lk.clientHeight * ek
                  }
                }
                let wk = 0,
                  Hk = 0;
                if ("nearest" == Tk) Fk.top < kk.top + yk ? (Hk = Fk.top - (kk.top + yk), Ik > 0 && Fk.bottom > kk.bottom + Hk && (Hk = Fk.bottom - kk.bottom + yk)) : Fk.bottom > kk.bottom - yk && (Hk = Fk.bottom - kk.bottom + yk, Ik < 0 && Fk.top - Hk < kk.top && (Hk = Fk.top - (kk.top + yk)));
                else {
                  let Xk = Fk.bottom - Fk.top,
                    ik = kk.bottom - kk.top;
                  Hk = ("center" == Tk && Xk <= ik ? Fk.top + Xk / 2 - ik / 2 : "start" == Tk || "center" == Tk && Ik < 0 ? Fk.top - yk : Fk.bottom - ik + yk) - kk.top
                }
                if ("nearest" == Xk ? Fk.left < kk.left + ik ? (wk = Fk.left - (kk.left + ik), Ik > 0 && Fk.right > kk.right + wk && (wk = Fk.right - kk.right + ik)) : Fk.right > kk.right - ik && (wk = Fk.right - kk.right + ik, Ik < 0 && Fk.left < kk.left + wk && (wk = Fk.left - (kk.left + ik))) : wk = ("center" == Xk ? Fk.left + (Fk.right - Fk.left) / 2 - (kk.right - kk.left) / 2 : "start" == Xk == lk ? Fk.left - ik : Fk.right - (kk.right - kk.left) + ik) - kk.left, wk || Hk)
                  if (Zk) qk.scrollBy(wk, Hk);
                  else {
                    let kk = 0,
                      Ik = 0;
                    if (Hk) {
                      let kk = Lk.scrollTop;
                      Lk.scrollTop += Hk / ek, Ik = (Lk.scrollTop - kk) * ek
                    }
                    if (wk) {
                      let Fk = Lk.scrollLeft;
                      Lk.scrollLeft += wk / jk, kk = (Lk.scrollLeft - Fk) * jk
                    }
                    Fk = {
                      left: Fk.left - kk,
                      top: Fk.top - Ik,
                      right: Fk.right - kk,
                      bottom: Fk.bottom - Ik
                    }, kk && Math.abs(kk - wk) < 1 && (Xk = "nearest"), Ik && Math.abs(Ik - Hk) < 1 && (Tk = "nearest")
                  } if (Zk) break;
                (Fk.top < kk.top || Fk.bottom > kk.bottom || Fk.left < kk.left || Fk.right > kk.right) && (Fk = {
                  left: Math.max(Fk.left, kk.left),
                  right: Math.min(Fk.right, kk.right),
                  top: Math.max(Fk.top, kk.top),
                  bottom: Math.min(Fk.bottom, kk.bottom)
                }), Lk = Lk.assignedSlot || Lk.parentNode
              } else {
                if (11 != Lk.nodeType) break;
                Lk = Lk.host
              }
          }(this.view.scrollDOM, yk, Xk.head < Xk.anchor ? -1 : 1, kk.x, kk.y, Math.max(Math.min(kk.xMargin, lk), -lk), Math.max(Math.min(kk.yMargin, ak), -ak), this.view.textDirection == LF.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (Tk.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || Tk.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let kk = this.view.docView.lineAt(Xk.head, 1);
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
        CI(this.tile)
      }
    }

    function CI(kk, Fk) {
      let Ik = null === Fk || void 0 === Fk ? void 0 : Fk.get(kk);
      if (1 != Ik) {
        null == Ik && kk.destroy();
        for (let Ik of kk.children) CI(Ik, Fk)
      }
    }

    function NI(kk, Fk) {
      let Ik = kk.observer.selectionRange;
      if (!Ik.focusNode) return null;
      let Xk = lF(Ik.focusNode, Ik.focusOffset),
        Tk = aF(Ik.focusNode, Ik.focusOffset),
        ik = Xk || Tk;
      if (Tk && Xk && Tk.node != Xk.node) {
        let Fk = jI.get(Tk.node);
        if (!Fk || Fk.isText() && Fk.text != Tk.node.nodeValue) ik = Tk;
        else if (kk.docView.lastCompositionAfterCursor) {
          let kk = jI.get(Xk.node);
          !kk || kk.isText() && kk.text != Xk.node.nodeValue || (ik = Tk)
        }
      }
      if (kk.docView.lastCompositionAfterCursor = ik != Xk, !ik) return null;
      let yk = Fk - ik.offset;
      return {
        from: yk,
        to: yk + ik.node.nodeValue.length,
        node: ik.node
      }
    }
    let cI = class {
      constructor() {
        this.changes = []
      }
      compareRange(kk, Fk) {
        Ck(kk, Fk, this.changes)
      }
      comparePoint(kk, Fk) {
        Ck(kk, Fk, this.changes)
      }
      boundChange(kk) {
        Ck(kk, kk, this.changes)
      }
    };
    class WI {
      constructor() {
        this.changes = []
      }
      compareRange(kk, Fk) {
        Ck(kk, Fk, this.changes)
      }
      comparePoint() {}
      boundChange(kk) {
        Ck(kk, kk, this.changes)
      }
    }
    class fI extends nk {
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

    function BI(kk, Fk, Ik) {
      let Xk = kk.lineBlockAt(Fk);
      if (Array.isArray(Xk.type)) {
        let kk;
        for (let Tk of Xk.type) {
          if (Tk.from > Fk) break;
          if (!(Tk.to < Fk)) {
            if (Tk.from < Fk && Tk.to > Fk) return Tk;
            kk && (Tk.type != Gk.Text || kk.type == Tk.type && !(Ik < 0 ? Tk.from < Fk : Tk.to > Fk)) || (kk = Tk)
          }
        }
        return kk || Xk
      }
      return Xk
    }

    function dI(kk, Fk, Ik, Xk) {
      let Tk = kk.state.doc.lineAt(Fk.head),
        ik = kk.bidiSpans(Tk),
        yk = kk.textDirectionAt(Tk.from);
      for (let lk = Fk, ak = null;;) {
        let Fk = EF(Tk, ik, yk, lk, Ik),
          qk = vF;
        if (!Fk) {
          if (Tk.number == (Ik ? kk.state.doc.lines : 1)) return lk;
          qk = "\n", Tk = kk.state.doc.line(Tk.number + (Ik ? 1 : -1)), ik = kk.bidiSpans(Tk), Fk = kk.visualLineSide(Tk, !Ik)
        }
        if (ak) {
          if (!ak(qk)) return lk
        } else {
          if (!Xk) return Fk;
          ak = Xk(qk)
        }
        lk = Fk
      }
    }

    function YI(kk, Fk, Ik) {
      for (;;) {
        let Xk = 0;
        for (let Tk of kk) Tk.between(Fk - 1, Fk + 1, ((kk, Tk, ik) => {
          if (Fk > kk && Fk < Tk) {
            let ik = Xk || Ik || (Fk - kk < Tk - Fk ? -1 : 1);
            Fk = ik < 0 ? kk : Tk, Xk = ik
          }
        }));
        if (!Xk) return Fk
      }
    }

    function AI(kk, Fk) {
      let Ik = null;
      for (let Tk = 0; Tk < Fk.nZ.length; Tk++) {
        let ik = Fk.nZ[Tk],
          yk = null;
        if (ik.empty) {
          let Fk = YI(kk, ik.from, 0);
          Fk != ik.from && (yk = Xk.k.cursor(Fk, -1))
        } else {
          let Fk = YI(kk, ik.from, -1),
            Ik = YI(kk, ik.to, 1);
          Fk == ik.from && Ik == ik.to || (yk = Xk.k.range(ik.from == ik.anchor ? Fk : Ik, ik.from == ik.head ? Fk : Ik))
        }
        yk && (Ik || (Ik = Fk.nZ.slice()), Ik[Tk] = yk)
      }
      return Ik ? Xk.k.create(Ik, Fk.mainIndex) : Fk
    }

    function gI(kk, Fk, Ik) {
      let Tk = YI(kk.state.facet(TI).map((Fk => Fk(kk))), Ik.from, Fk.head > Ik.from ? -1 : 1);
      return Tk == Ik.from ? Ik : Xk.k.cursor(Tk, Tk < Ik.from ? 1 : -1)
    }
    class mI {
      constructor(kk, Fk) {
        this.pos = kk, this.assoc = Fk
      }
    }

    function hI(kk, Fk, Ik, Tk) {
      let ik, yk = kk.contentDOM.getBoundingClientRect(),
        lk = yk.top + kk.viewState.paddingTop,
        {
          x: ak,
          y: qk
        } = Fk,
        Lk = qk - lk;
      for (;;) {
        if (Lk < 0) return new mI(0, 1);
        if (Lk > kk.viewState.docHeight) return new mI(kk.state.doc.length, -1);
        if (ik = kk.elementAtHeight(Lk), null == Tk) break;
        if (ik.type == Gk.Text) {
          if (Tk < 0 ? ik.to < kk.viewport.from : ik.from > kk.viewport.to) break;
          let Fk = kk.docView.coordsAt(Tk < 0 ? ik.from : ik.to, Tk > 0 ? -1 : 1);
          if (Fk && (Tk < 0 ? Fk.top <= Lk + lk : Fk.bottom >= Lk + lk)) break
        }
        let Fk = kk.viewState.heightOracle.textHeight / 2;
        Lk = Tk > 0 ? ik.bottom + Fk : ik.top - Fk
      }
      if (kk.viewport.from >= ik.to || kk.viewport.to <= ik.from) {
        if (Ik) return null;
        if (ik.type == Gk.Text) {
          let Fk = function(kk, Fk, Ik, Tk, ik) {
            let yk = Math.round((Tk - Fk.left) * kk.defaultCharacterWidth);
            if (kk.lineWrapping && Ik.height > 1.5 * kk.defaultLineHeight) {
              let Fk = kk.viewState.heightOracle.textHeight;
              yk += Math.floor((ik - Ik.top - .5 * (kk.defaultLineHeight - Fk)) / Fk) * kk.viewState.heightOracle.lineLength
            }
            let lk = kk.state.sliceDoc(Ik.from, Ik.to);
            return Ik.from + (0, Xk.$)(lk, yk, kk.state.tabSize)
          }(kk, yk, ik, ak, qk);
          return new mI(Fk, Fk == ik.from ? 1 : -1)
        }
      }
      if (ik.type != Gk.Text) return Lk < (ik.top + ik.bottom) / 2 ? new mI(ik.from, 1) : new mI(ik.to, -1);
      let tk = kk.docView.lineAt(ik.from, 2);
      return tk && tk.length == ik.length || (tk = kk.docView.lineAt(ik.from, -2)), new rI(kk, ak, qk, kk.textDirectionAt(ik.from)).scanTile(tk, ik.from)
    }
    class rI {
      constructor(kk, Fk, Ik, Xk) {
        this.view = kk, this.x = Fk, this.y = Ik, this.baseDir = Xk, this.line = null, this.spans = null
      }
      bidiSpansAt(kk) {
        return (!this.line || this.line.from > kk || this.line.to < kk) && (this.line = this.view.state.doc.lineAt(kk), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(kk, Fk) {
        let {
          line: Ik,
          spans: Xk
        } = this.bidiSpansAt(kk);
        return Xk[KF.find(Xk, kk - Ik.from, -1, Fk)].level == this.baseDir
      }
      dirAt(kk, Fk) {
        let {
          line: Ik,
          spans: Xk
        } = this.bidiSpansAt(kk);
        return Xk[KF.find(Xk, kk - Ik.from, -1, Fk)].dir
      }
      bidiIn(kk, Fk) {
        let {
          spans: Ik,
          line: Xk
        } = this.bidiSpansAt(kk);
        return Ik.length > 1 || Ik.length && (Ik[0].level != this.baseDir || Ik[0].to + Xk.from < Fk)
      }
      scan(kk, Fk) {
        let Ik, Xk, Tk, ik = 0,
          yk = kk.length - 1,
          lk = new Set,
          ak = this.bidiIn(kk[0], kk[yk]),
          qk = -1,
          Lk = 1e9;
        kk: for (; ik < yk;) {
          let tk = yk - ik,
            Zk = ik + yk >> 1;
          Fk: if (lk.has(Zk)) {
            let kk = ik + Math.floor(Math.random() * tk);
            for (let Fk = 0; Fk < tk; Fk++) {
              if (!lk.has(kk)) {
                Zk = kk;
                break Fk
              }
              kk++, kk == yk && (kk = ik)
            }
            break kk
          } lk.add(Zk);
          let jk = Fk(Zk);
          if (jk)
            for (let Fk = 0; Fk < jk.length; Fk++) {
              let lk = jk[Fk],
                tk = 0;
              if (!(0 == lk.width && jk.length > 1)) {
                if (lk.bottom < this.y)(!Ik || Ik.bottom < lk.bottom) && (Ik = lk), tk = 1;
                else if (lk.top > this.y)(!Xk || Xk.top > lk.top) && (Xk = lk), tk = -1;
                else {
                  let kk = lk.left > this.x ? this.x - lk.left : lk.right < this.x ? this.x - lk.right : 0,
                    Fk = Math.abs(kk);
                  Fk < Lk && (qk = Zk, Lk = Fk, Tk = lk), kk && (tk = kk < 0 == (this.baseDir == LF.LTR) ? -1 : 1)
                } - 1 != tk || ak && !this.baseDirAt(kk[Zk], 1) ? 1 != tk || ak && !this.baseDirAt(kk[Zk + 1], -1) || (ik = Zk + 1) : yk = Zk
              }
            }
        }
        if (!Tk) {
          let Tk = Ik && (!Xk || this.y - Ik.bottom < Xk.top - this.y) ? Ik : Xk;
          return this.y = (Tk.top + Tk.bottom) / 2, this.scan(kk, Fk)
        }
        if (Lk) {
          if (Ik && Ik.bottom > Tk.top) return this.y = Ik.bottom - 1, this.scan(kk, Fk);
          if (Xk && Xk.top < Tk.bottom) return this.y = Xk.top + 1, this.scan(kk, Fk)
        }
        let tk = (ak ? this.dirAt(kk[qk], 1) : this.baseDir) == LF.LTR;
        return {
          i: qk,
          after: this.x > (Tk.left + Tk.right) / 2 == tk
        }
      }
      scanText(kk, Fk) {
        let Ik = [];
        for (let ik = 0; ik < kk.length; ik = (0, Xk.Y)(kk.text, ik)) Ik.push(Fk + ik);
        Ik.push(Fk + kk.length);
        let Tk = this.scan(Ik, (Xk => {
          let Tk = Ik[Xk] - Fk,
            ik = Ik[Xk + 1] - Fk;
          return TF(kk.dom, Tk, ik).getClientRects()
        }));
        return Tk.after ? new mI(Ik[Tk.i + 1], -1) : new mI(Ik[Tk.i], 1)
      }
      scanTile(kk, Fk) {
        if (!kk.length) return new mI(Fk, 1);
        if (1 == kk.children.length) {
          let Ik = kk.children[0];
          if (Ik.isText()) return this.scanText(Ik, Fk);
          if (Ik.isComposite()) return this.scanTile(Ik, Fk)
        }
        let Ik = [Fk];
        for (let yk = 0, lk = Fk; yk < kk.children.length; yk++) Ik.push(lk += kk.children[yk].length);
        let Xk = this.scan(Ik, (Fk => {
            let Ik = kk.children[Fk];
            return 48 & Ik.flags ? null : (1 == Ik.dom.nodeType ? Ik.dom : TF(Ik.dom, 0, Ik.length)).getClientRects()
          })),
          Tk = kk.children[Xk.i],
          ik = Ik[Xk.i];
        return Tk.isText() ? this.scanText(Tk, ik) : Tk.isComposite() ? this.scanTile(Tk, ik) : Xk.after ? new mI(Ik[Xk.i + 1], -1) : new mI(ik, 1)
      }
    }
    const DI = "\uffff";
    class MI {
      constructor(kk, Fk) {
        this.points = kk, this.view = Fk, this.text = "", this.lineSeparator = Fk.state.facet(Xk.m.lineSeparator)
      }
      append(kk) {
        this.text += kk
      }
      lineBreak() {
        this.text += DI
      }
      readRange(kk, Fk) {
        if (!kk) return this;
        let Ik = kk.parentNode;
        for (let Xk = kk;;) {
          this.findPointBefore(Ik, Xk);
          let kk = this.text.length;
          this.readNode(Xk);
          let Tk = jI.get(Xk),
            ik = Xk.nextSibling;
          if (ik == Fk) {
            (null === Tk || void 0 === Tk ? void 0 : Tk.breakAfter) && !ik && Ik != this.view.contentDOM && this.lineBreak();
            break
          }
          let yk = jI.get(ik);
          (Tk && yk ? Tk.breakAfter : (Tk ? Tk.breakAfter : Ak(Xk)) || Ak(ik) && ("BR" != Xk.nodeName || (null === Tk || void 0 === Tk ? void 0 : Tk.isWidget())) && this.text.length > kk) && !FX(ik, Fk) && this.lineBreak(), Xk = ik
        }
        return this.findPointBefore(Ik, Fk), this
      }
      readTextNode(kk) {
        let Fk = kk.nodeValue;
        for (let Ik of this.points) Ik.node == kk && (Ik.pos = this.text.length + Math.min(Ik.offset, Fk.length));
        for (let Ik = 0, Xk = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let Tk, ik = -1,
            yk = 1;
          if (this.lineSeparator ? (ik = Fk.indexOf(this.lineSeparator, Ik), yk = this.lineSeparator.length) : (Tk = Xk.exec(Fk)) && (ik = Tk.index, yk = Tk[0].length), this.append(Fk.slice(Ik, ik < 0 ? Fk.length : ik)), ik < 0) break;
          if (this.lineBreak(), yk > 1)
            for (let Fk of this.points) Fk.node == kk && Fk.pos > this.text.length && (Fk.pos -= yk - 1);
          Ik = ik + yk
        }
      }
      readNode(kk) {
        let Fk = jI.get(kk),
          Ik = Fk && Fk.overrideDOMText;
        if (null != Ik) {
          this.findPointInside(kk, Ik.length);
          for (let kk = Ik.iter(); !kk.next().done;) kk.lineBreak ? this.lineBreak() : this.append(kk.value)
        } else 3 == kk.nodeType ? this.readTextNode(kk) : "BR" == kk.nodeName ? kk.nextSibling && this.lineBreak() : 1 == kk.nodeType && this.readRange(kk.firstChild, null)
      }
      findPointBefore(kk, Fk) {
        for (let Ik of this.points) Ik.node == kk && kk.childNodes[Ik.offset] == Fk && (Ik.pos = this.text.length)
      }
      findPointInside(kk, Fk) {
        for (let Ik of this.points)(3 == kk.nodeType ? Ik.node == kk : kk.contains(Ik.node)) && (Ik.pos = this.text.length + (kX(kk, Ik.node, Ik.offset) ? Fk : 0))
      }
    }

    function kX(kk, Fk, Ik) {
      for (;;) {
        if (!Fk || Ik < mk(Fk)) return !1;
        if (Fk == kk) return !0;
        Ik = Yk(Fk) + 1, Fk = Fk.parentNode
      }
    }

    function FX(kk, Fk) {
      let Ik;
      for (; kk != Fk && kk; kk = kk.nextSibling) {
        let Fk = jI.get(kk);
        if (!(null === Fk || void 0 === Fk ? void 0 : Fk.isWidget())) return !1;
        Fk && (Ik || (Ik = [])).push(Fk)
      }
      if (Ik)
        for (let Xk of Ik) {
          let kk = Xk.overrideDOMText;
          if (null === kk || void 0 === kk ? void 0 : kk.length) return !1
        }
      return !0
    }
    class IX {
      constructor(kk, Fk) {
        this.node = kk, this.offset = Fk, this.pos = -1
      }
    }
    class XX {
      constructor(kk, Fk, Ik, Tk) {
        this.typeOver = Tk, this.bounds = null, this.text = "", this.domChanged = Fk > -1;
        let {
          impreciseHead: ik,
          impreciseAnchor: yk
        } = kk.docView, lk = kk.state.selection;
        if (kk.state.readOnly && Fk > -1) this.newSel = null;
        else if (Fk > -1 && (this.bounds = TX(kk.docView.tile, Fk, Ik, 0))) {
          let Fk = ik || yk ? [] : function(kk) {
              let Fk = [];
              if (kk.root.activeElement != kk.contentDOM) return Fk;
              let {
                anchorNode: Ik,
                anchorOffset: Xk,
                focusNode: Tk,
                focusOffset: ik
              } = kk.observer.selectionRange;
              Ik && (Fk.push(new IX(Ik, Xk)), Tk == Ik && ik == Xk || Fk.push(new IX(Tk, ik)));
              return Fk
            }(kk),
            Ik = new MI(Fk, kk);
          Ik.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = Ik.text, this.newSel = function(kk, Fk) {
            if (0 == kk.length) return null;
            let Ik = kk[0].pos,
              Tk = 2 == kk.length ? kk[1].pos : Ik;
            return Ik > -1 && Tk > -1 ? Xk.k.single(Ik + Fk, Tk + Fk) : null
          }(Fk, this.bounds.from)
        } else {
          let Fk = kk.observer.selectionRange,
            Ik = ik && ik.node == Fk.focusNode && ik.offset == Fk.focusOffset || !Wk(kk.contentDOM, Fk.focusNode) ? lk.main.head : kk.docView.posFromDOM(Fk.focusNode, Fk.focusOffset),
            Tk = yk && yk.node == Fk.anchorNode && yk.offset == Fk.anchorOffset || !Wk(kk.contentDOM, Fk.anchorNode) ? lk.main.anchor : kk.docView.posFromDOM(Fk.anchorNode, Fk.anchorOffset),
            ak = kk.viewport;
          if ((Vk.ios || Vk.chrome) && lk.main.empty && Ik != Tk && (ak.from > 0 || ak.to < kk.state.doc.length)) {
            let Fk = Math.min(Ik, Tk),
              Xk = Math.max(Ik, Tk),
              ik = ak.from - Fk,
              yk = ak.to - Xk;
            0 != ik && 1 != ik && 0 != Fk || 0 != yk && -1 != yk && Xk != kk.state.doc.length || (Ik = 0, Tk = kk.state.doc.length)
          }
          if (kk.inputState.composing > -1 && lk.nZ.length > 1) this.newSel = lk.replaceRange(Xk.k.range(Tk, Ik));
          else if (kk.lineWrapping && Tk == Ik && (!lk.main.empty || lk.main.head != Ik) && kk.inputState.lastTouchTime > Date.now() - 100) {
            let Fk = kk.coordsAtPos(Ik, -1),
              Tk = 0;
            Fk && (Tk = kk.inputState.lastTouchY <= Fk.bottom ? -1 : 1), this.newSel = Xk.k.create([Xk.k.cursor(Ik, Tk)])
          } else this.newSel = Xk.k.single(Tk, Ik)
        }
      }
    }

    function TX(kk, Fk, Ik, Xk) {
      if (kk.isComposite()) {
        let Tk = -1,
          ik = -1,
          yk = -1,
          lk = -1;
        for (let ak = 0, qk = Xk, Lk = Xk; ak < kk.children.length; ak++) {
          let Xk = kk.children[ak],
            tk = qk + Xk.length;
          if (qk < Fk && tk > Ik) return TX(Xk, Fk, Ik, qk);
          if (tk >= Fk && -1 == Tk && (Tk = ak, ik = qk), qk > Ik && Xk.dom.parentNode == kk.dom) {
            yk = ak, lk = Lk;
            break
          }
          Lk = tk, qk = tk + Xk.breakAfter
        }
        return {
          from: ik,
          to: lk < 0 ? Xk + kk.length : lk,
          startDOM: (Tk ? kk.children[Tk - 1].dom.nextSibling : null) || kk.dom.firstChild,
          endDOM: yk < kk.children.length && yk >= 0 ? kk.children[yk].dom : null
        }
      }
      return kk.isText() ? {
        from: Xk,
        to: Xk + kk.length,
        startDOM: kk.dom,
        endDOM: kk.dom.nextSibling
      } : null
    }

    function iX(kk, Fk) {
      let Ik, {
          newSel: Tk
        } = Fk,
        {
          state: ik
        } = kk,
        yk = ik.selection.main,
        lk = kk.inputState.lastKeyTime > Date.now() - 100 ? kk.inputState.lastKeyCode : -1;
      if (Fk.bounds) {
        let {
          from: kk,
          to: Tk
        } = Fk.bounds, ak = yk.from, qk = null;
        (8 === lk || Vk.android && Fk.text.length < Tk - kk) && (ak = yk.to, qk = "end");
        let Lk, tk, Zk = ik.doc.sliceString(kk, Tk, DI);
        !yk.empty && yk.from >= kk && yk.to <= Tk && (Fk.typeOver || Zk != Fk.text) && Zk.slice(0, yk.from - kk) == Fk.text.slice(0, yk.from - kk) && Zk.slice(yk.to - kk) == Fk.text.slice(Lk = Fk.text.length - (Zk.length - (yk.to - kk))) ? Ik = {
          from: yk.from,
          to: yk.to,
          insert: Xk.J.of(Fk.text.slice(yk.from - kk, Lk).split(DI))
        } : (tk = lX(Zk, Fk.text, ak - kk, qk)) && (Vk.chrome && 13 == lk && tk.toB == tk.from + 2 && Fk.text.slice(tk.from, tk.toB) == DI + DI && tk.toB--, Ik = {
          from: kk + tk.from,
          to: kk + tk.toA,
          insert: Xk.J.of(Fk.text.slice(tk.from, tk.toB).split(DI))
        })
      } else Tk && (!kk.hasFocus && ik.facet(gF) || aX(Tk, yk)) && (Tk = null);
      if (!Ik && !Tk) return !1;
      if ((Vk.mac || Vk.android) && Ik && Ik.from == Ik.to && Ik.from == yk.head - 1 && /^\. ?$/.test(Ik.insert.toString()) && "off" == kk.contentDOM.getAttribute("autocorrect") ? (Tk && 2 == Ik.insert.length && (Tk = Xk.k.single(Tk.main.anchor - 1, Tk.main.head - 1)), Ik = {
          from: Ik.from,
          to: Ik.to,
          insert: Xk.J.of([Ik.insert.toString().replace(".", " ")])
        }) : ik.doc.lineAt(yk.from).to < yk.to && kk.docView.lineHasWidget(yk.to) && kk.inputState.insertingTextAt > Date.now() - 50 ? Ik = {
          from: yk.from,
          to: yk.to,
          insert: ik.toText(kk.inputState.insertingText)
        } : Vk.chrome && Ik && Ik.from == Ik.to && Ik.from == yk.head && "\n " == Ik.insert.toString() && kk.lineWrapping && (Tk && (Tk = Xk.k.single(Tk.main.anchor - 1, Tk.main.head - 1)), Ik = {
          from: yk.from,
          to: yk.to,
          insert: Xk.J.of([" "])
        }), Ik) return yX(kk, Ik, Tk, lk);
      if (Tk && !aX(Tk, yk)) {
        let Fk = !1,
          Ik = "select";
        return kk.inputState.lastSelectionTime > Date.now() - 50 && ("select" == kk.inputState.lastSelectionOrigin && (Fk = !0), Ik = kk.inputState.lastSelectionOrigin, "select.pointer" == Ik && (Tk = AI(ik.facet(TI).map((Fk => Fk(kk))), Tk))), kk.dispatch({
          selection: Tk,
          scrollIntoView: Fk,
          userEvent: Ik
        }), !0
      }
      return !1
    }

    function yX(kk, Fk, Ik) {
      let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (Vk.ios && kk.inputState.flushIOSKey(Fk)) return !0;
      let ik = kk.state.selection.main;
      if (Vk.android && (Fk.to == ik.to && (Fk.from == ik.from || Fk.from == ik.from - 1 && " " == kk.state.sliceDoc(Fk.from, ik.from)) && 1 == Fk.insert.length && 2 == Fk.insert.lines && iF(kk.contentDOM, "Enter", 13) || (Fk.from == ik.from - 1 && Fk.to == ik.to && 0 == Fk.insert.length || 8 == Tk && Fk.insert.length < Fk.to - Fk.from && Fk.to > ik.head) && iF(kk.contentDOM, "Backspace", 8) || Fk.from == ik.from && Fk.to == ik.to + 1 && 0 == Fk.insert.length && iF(kk.contentDOM, "Delete", 46))) return !0;
      let yk, lk = Fk.insert.toString();
      kk.inputState.composing >= 0 && kk.inputState.composing++;
      let ak = () => yk || (yk = function(kk, Fk, Ik) {
        let Tk, ik = kk.state,
          yk = ik.selection.main,
          lk = -1;
        if (Fk.from == Fk.to && Fk.from < yk.from || Fk.from > yk.to) {
          let Ik = Fk.from < yk.from ? -1 : 1,
            Xk = Ik < 0 ? yk.from : yk.to,
            Tk = YI(ik.facet(TI).map((Fk => Fk(kk))), Xk, Ik);
          Fk.from == Tk && (lk = Tk)
        }
        if (lk > -1) Tk = {
          changes: Fk,
          selection: Xk.k.cursor(Fk.from + Fk.insert.length, -1)
        };
        else if (Fk.from >= yk.from && Fk.to <= yk.to && Fk.to - Fk.from >= (yk.to - yk.from) / 3 && (!Ik || Ik.main.empty && Ik.main.from == Fk.from + Fk.insert.length) && kk.inputState.composing < 0) {
          let Ik = yk.from < Fk.from ? ik.sliceDoc(yk.from, Fk.from) : "",
            Xk = yk.to > Fk.to ? ik.sliceDoc(Fk.to, yk.to) : "";
          Tk = ik.replaceSelection(kk.state.toText(Ik + Fk.insert.sliceString(0, void 0, kk.state.lineBreak) + Xk))
        } else {
          let lk = ik.changes(Fk),
            ak = Ik && Ik.main.to <= lk.newLength ? Ik.main : void 0;
          if (ik.selection.nZ.length > 1 && (kk.inputState.composing >= 0 || kk.inputState.compositionPendingChange) && Fk.to <= yk.to + 10 && Fk.to >= yk.to - 10) {
            let qk, Lk = kk.state.sliceDoc(Fk.from, Fk.to),
              tk = Ik && NI(kk, Ik.main.head);
            if (tk) {
              let kk = Fk.insert.length - (Fk.to - Fk.from);
              qk = {
                from: tk.from,
                to: tk.to - kk
              }
            } else qk = kk.state.doc.lineAt(yk.head);
            let Zk = yk.to - Fk.to;
            Tk = ik.changeByRange((Ik => {
              if (Ik.from == yk.from && Ik.to == yk.to) return {
                changes: lk,
                range: ak || Ik.map(lk)
              };
              let Tk = Ik.to - Zk,
                tk = Tk - Lk.length;
              if (kk.state.sliceDoc(tk, Tk) != Lk || Tk >= qk.from && tk <= qk.to) return {
                range: Ik
              };
              let jk = ik.changes({
                  from: tk,
                  to: Tk,
                  insert: Fk.insert
                }),
                ek = Ik.to - yk.to;
              return {
                changes: jk,
                range: ak ? Xk.k.range(Math.max(0, ak.anchor + ek), Math.max(0, ak.head + ek)) : Ik.map(jk)
              }
            }))
          } else Tk = {
            changes: lk,
            selection: ak && ik.selection.replaceRange(ak)
          }
        }
        let ak = "input.type";
        (kk.composing || kk.inputState.compositionPendingChange && kk.inputState.compositionEndedAt > Date.now() - 50) && (kk.inputState.compositionPendingChange = !1, ak += ".compose", kk.inputState.compositionFirstChange && (ak += ".start", kk.inputState.compositionFirstChange = !1));
        return ik.update(Tk, {
          userEvent: ak,
          scrollIntoView: !0
        })
      }(kk, Fk, Ik));
      return kk.state.facet(RF).some((Ik => Ik(kk, Fk.from, Fk.to, lk, ak))) || kk.dispatch(ak()), !0
    }

    function lX(kk, Fk, Ik, Xk) {
      let Tk = Math.min(kk.length, Fk.length),
        ik = 0;
      for (; ik < Tk && kk.charCodeAt(ik) == Fk.charCodeAt(ik);) ik++;
      if (ik == Tk && kk.length == Fk.length) return null;
      let yk = kk.length,
        lk = Fk.length;
      for (; yk > 0 && lk > 0 && kk.charCodeAt(yk - 1) == Fk.charCodeAt(lk - 1);) yk--, lk--;
      if ("end" == Xk) {
        Ik -= yk + Math.max(0, ik - Math.min(yk, lk)) - ik
      }
      if (yk < ik && kk.length < Fk.length) {
        ik -= Ik <= ik && Ik >= yk ? ik - Ik : 0, lk = ik + (lk - yk), yk = ik
      } else if (lk < ik) {
        ik -= Ik <= ik && Ik >= lk ? ik - Ik : 0, yk = ik + (yk - lk), lk = ik
      }
      return {
        from: ik,
        toA: yk,
        toB: lk
      }
    }

    function aX(kk, Fk) {
      return Fk.head == kk.main.head && Fk.anchor == kk.main.anchor
    }
    class qX {
      setSelectionOrigin(kk) {
        this.lastSelectionOrigin = kk, this.lastSelectionTime = Date.now()
      }
      constructor(kk) {
        this.view = kk, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = kk.hasFocus, Vk.safari && kk.contentDOM.addEventListener("input", (() => null)), Vk.gecko && function(kk) {
          uX.has(kk) || (uX.add(kk), kk.addEventListener("copy", (() => {})), kk.addEventListener("cut", (() => {})))
        }(kk.contentDOM.ownerDocument)
      }
      handleEvent(kk) {
        (function(kk, Fk) {
          if (!Fk.bubbles) return !0;
          if (Fk.defaultPrevented) return !1;
          for (let Ik, Xk = Fk.target; Xk != kk.contentDOM; Xk = Xk.parentNode)
            if (!Xk || 11 == Xk.nodeType || (Ik = jI.get(Xk)) && Ik.isWidget() && !Ik.isHidden && Ik.widget.ignoreEvent(Fk)) return !1;
          return !0
        })(this.view, kk) && !this.ignoreDuringComposition(kk) && ("keydown" == kk.type && this.keydown(kk) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(kk.type, kk))) : this.runHandlers(kk.type, kk)))
      }
      runHandlers(kk, Fk) {
        let Ik = this.handlers[kk];
        if (Ik) {
          for (let kk of Ik.observers) kk(this.view, Fk);
          for (let kk of Ik.handlers) {
            if (Fk.defaultPrevented) break;
            if (kk(this.view, Fk)) {
              Fk.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(kk) {
        let Fk = tX(kk),
          Ik = this.handlers,
          Xk = this.view.contentDOM;
        for (let Tk in Fk)
          if ("scroll" != Tk) {
            let kk = !Fk[Tk].handlers.length,
              ik = Ik[Tk];
            ik && kk != !ik.handlers.length && (Xk.removeEventListener(Tk, this.handleEvent), ik = null), ik || Xk.addEventListener(Tk, this.handleEvent, {
              passive: kk
            })
          } for (let Tk in Ik) "scroll" == Tk || Fk[Tk] || Xk.removeEventListener(Tk, this.handleEvent);
        this.handlers = Fk
      }
      keydown(kk) {
        if (this.lastKeyCode = kk.keyCode, this.lastKeyTime = Date.now(), 9 == kk.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != kk.keyCode && eX.indexOf(kk.keyCode) < 0 && (this.tabFocusMode = -1), Vk.android && Vk.chrome && !kk.synthetic && (13 == kk.keyCode || 8 == kk.keyCode)) return this.view.observer.delayAndroidKey(kk.key, kk.keyCode), !0;
        let Fk;
        return !Vk.ios || kk.synthetic || kk.altKey || kk.metaKey || kk.shiftKey || !((Fk = ZX.find((Fk => Fk.keyCode == kk.keyCode))) && !kk.ctrlKey || jX.indexOf(kk.key) > -1 && kk.ctrlKey) ? (229 != kk.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = Fk || kk, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(kk) {
        let Fk = this.pendingIOSKey;
        return !!Fk && (!("Enter" == Fk.key && kk && kk.from < kk.to && /^\S+$/.test(kk.insert.toString())) && (this.pendingIOSKey = void 0, iF(this.view.contentDOM, Fk.key, Fk.keyCode, Fk instanceof KeyboardEvent ? Fk : void 0)))
      }
      ignoreDuringComposition(kk) {
        return !(!/^key/.test(kk.type) || kk.synthetic) && (this.composing > 0 || !!(Vk.safari && !Vk.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function LX(kk, Fk) {
      return (Ik, Xk) => {
        try {
          return Fk.call(kk, Xk, Ik)
        } catch (Tk) {
          AF(Ik.state, Tk)
        }
      }
    }

    function tX(kk) {
      let Fk = Object.create(null);

      function Ik(kk) {
        return Fk[kk] || (Fk[kk] = {
          observers: [],
          handlers: []
        })
      }
      for (let Xk of kk) {
        let kk = Xk.spec,
          Fk = kk && kk.plugin.domEventHandlers,
          Tk = kk && kk.plugin.domEventObservers;
        if (Fk)
          for (let ik in Fk) {
            let kk = Fk[ik];
            kk && Ik(ik).handlers.push(LX(Xk.value, kk))
          }
        if (Tk)
          for (let ik in Tk) {
            let kk = Tk[ik];
            kk && Ik(ik).observers.push(LX(Xk.value, kk))
          }
      }
      for (let Xk in JX) Ik(Xk).handlers.push(JX[Xk]);
      for (let Xk in xX) Ik(Xk).observers.push(xX[Xk]);
      return Fk
    }
    const ZX = [{
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
      jX = "dthko",
      eX = [16, 17, 18, 20, 91, 92, 224, 225];

    function wX(kk) {
      return .7 * Math.max(0, kk) + 8
    }
    class HX {
      constructor(kk, Fk, Ik, Tk) {
        this.view = kk, this.startEvent = Fk, this.style = Ik, this.mustSelect = Tk, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = Fk, this.scrollParents = Mk(kk.contentDOM), this.atoms = kk.state.facet(TI).map((Fk => Fk(kk)));
        let ik = kk.contentDOM.ownerDocument;
        ik.addEventListener("mousemove", this.move = this.move.bind(this)), ik.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = Fk.shiftKey, this.multiple = kk.state.facet(Xk.m.allowMultipleSelections) && function(kk, Fk) {
          let Ik = kk.state.facet(nF);
          return Ik.length ? Ik[0](Fk) : Vk.mac ? Fk.metaKey : Fk.ctrlKey
        }(kk, Fk), this.dragging = !(! function(kk, Fk) {
          let {
            main: Ik
          } = kk.state.selection;
          if (Ik.empty) return !1;
          let Xk = ck(kk.root);
          if (!Xk || 0 == Xk.rangeCount) return !0;
          let Tk = Xk.getRangeAt(0).getClientRects();
          for (let ik = 0; ik < Tk.length; ik++) {
            let kk = Tk[ik];
            if (kk.left <= Fk.clientX && kk.right >= Fk.clientX && kk.top <= Fk.clientY && kk.bottom >= Fk.clientY) return !0
          }
          return !1
        }(kk, Fk) || 1 != vX(Fk)) && null
      }
      start(kk) {
        !1 === this.dragging && this.select(kk)
      }
      move(kk) {
        if (0 == kk.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (Fk = this.startEvent, Ik = kk, Math.max(Math.abs(Fk.clientX - Ik.clientX), Math.abs(Fk.clientY - Ik.clientY)) < 10)) return;
        var Fk, Ik;
        this.select(this.lastEvent = kk);
        let Xk = 0,
          Tk = 0,
          ik = 0,
          yk = 0,
          lk = this.view.win.innerWidth,
          ak = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: ik,
          right: lk
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: yk,
          bottom: ak
        } = this.scrollParents.y.getBoundingClientRect());
        let qk = aI(this.view);
        kk.clientX - qk.left <= ik + 6 ? Xk = -wX(ik - kk.clientX) : kk.clientX + qk.right >= lk - 6 && (Xk = wX(kk.clientX - lk)), kk.clientY - qk.top <= yk + 6 ? Tk = -wX(yk - kk.clientY) : kk.clientY + qk.bottom >= ak - 6 && (Tk = wX(kk.clientY - ak)), this.setScrollSpeed(Xk, Tk)
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
        } = this, Ik = AI(this.atoms, this.style.get(kk, this.extend, this.multiple));
        !this.mustSelect && Ik.eq(Fk.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: Ik,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(kk) {
        kk.transactions.some((kk => kk.isUserEvent("input.type"))) ? this.destroy() : this.style.update(kk) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const JX = Object.create(null),
      xX = Object.create(null),
      PX = Vk.ie && Vk.ie_version < 15 || Vk.ios && Vk.webkit_version < 604;

    function KX(kk, Fk, Ik) {
      for (let Xk of kk.facet(Fk)) Ik = Xk(Ik, kk);
      return Ik
    }

    function QX(kk, Fk) {
      Fk = KX(kk.state, CF, Fk);
      let Ik, {
          state: Tk
        } = kk,
        ik = 1,
        yk = Tk.toText(Fk),
        lk = yk.lines == Tk.selection.nZ.length;
      if (null != OX && Tk.selection.nZ.every((kk => kk.empty)) && OX == yk.toString()) {
        let kk = -1;
        Ik = Tk.changeByRange((Ik => {
          let ak = Tk.doc.lineAt(Ik.from);
          if (ak.from == kk) return {
            range: Ik
          };
          kk = ak.from;
          let qk = Tk.toText((lk ? yk.line(ik++).text : Fk) + Tk.lineBreak);
          return {
            changes: {
              from: ak.from,
              insert: qk
            },
            range: Xk.k.cursor(Ik.from + qk.length)
          }
        }))
      } else Ik = lk ? Tk.changeByRange((kk => {
        let Fk = yk.line(ik++);
        return {
          changes: {
            from: kk.from,
            to: kk.to,
            insert: Fk.text
          },
          range: Xk.k.cursor(kk.from + Fk.length)
        }
      })) : Tk.replaceSelection(yk);
      kk.dispatch(Ik, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function sX(kk, Fk, Ik, Tk) {
      if (1 == Tk) return Xk.k.cursor(Fk, Ik);
      if (2 == Tk) return function(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Tk = kk.charCategorizer(Fk),
          ik = kk.doc.lineAt(Fk),
          yk = Fk - ik.from;
        if (0 == ik.length) return Xk.k.cursor(Fk);
        0 == yk ? Ik = 1 : yk == ik.length && (Ik = -1);
        let lk = yk,
          ak = yk;
        Ik < 0 ? lk = (0, Xk.Y)(ik.text, yk, !1) : ak = (0, Xk.Y)(ik.text, yk);
        let qk = Tk(ik.text.slice(lk, ak));
        for (; lk > 0;) {
          let kk = (0, Xk.Y)(ik.text, lk, !1);
          if (Tk(ik.text.slice(kk, lk)) != qk) break;
          lk = kk
        }
        for (; ak < ik.length;) {
          let kk = (0, Xk.Y)(ik.text, ak);
          if (Tk(ik.text.slice(ak, kk)) != qk) break;
          ak = kk
        }
        return Xk.k.range(lk + ik.from, ak + ik.from)
      }(kk.state, Fk, Ik);
      {
        let Tk = kk.docView.lineAt(Fk, Ik),
          ik = kk.state.doc.lineAt(Tk ? Tk.posAtEnd : Fk),
          yk = Tk ? Tk.posAtStart : ik.from,
          lk = Tk ? Tk.posAtEnd : ik.to;
        return lk < kk.state.doc.length && lk == ik.to && lk++, Xk.k.range(yk, lk)
      }
    }
    xX.scroll = kk => {
      kk.inputState.lastScrollTop = kk.scrollDOM.scrollTop, kk.inputState.lastScrollLeft = kk.scrollDOM.scrollLeft
    }, xX.wheel = xX.mousewheel = kk => {
      kk.inputState.lastWheelEvent = Date.now()
    }, JX.keydown = (kk, Fk) => (kk.inputState.setSelectionOrigin("select"), 27 == Fk.keyCode && 0 != kk.inputState.tabFocusMode && (kk.inputState.tabFocusMode = Date.now() + 2e3), !1), xX.touchstart = (kk, Fk) => {
      let Ik = kk.inputState,
        Xk = Fk.targetTouches[0];
      Ik.lastTouchTime = Date.now(), Xk && (Ik.lastTouchX = Xk.clientX, Ik.lastTouchY = Xk.clientY), Ik.setSelectionOrigin("select.pointer")
    }, xX.touchmove = kk => {
      kk.inputState.setSelectionOrigin("select.pointer")
    }, JX.mousedown = (kk, Fk) => {
      if (kk.observer.flush(), kk.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let Ik = null;
      for (let Xk of kk.state.facet(pF))
        if (Ik = Xk(kk, Fk), Ik) break;
      if (Ik || 0 != Fk.button || (Ik = function(kk, Fk) {
          let Ik = kk.posAndSideAtCoords({
              x: Fk.clientX,
              y: Fk.clientY
            }, !1),
            Tk = vX(Fk),
            ik = kk.state.selection;
          return {
            update(kk) {
              kk.docChanged && (Ik.pos = kk.changes.mapPos(Ik.pos), ik = ik.map(kk.changes))
            },
            get(Fk, yk, lk) {
              let ak, qk = kk.posAndSideAtCoords({
                  x: Fk.clientX,
                  y: Fk.clientY
                }, !1),
                Lk = sX(kk, qk.pos, qk.assoc, Tk);
              if (Ik.pos != qk.pos && !yk) {
                let Fk = sX(kk, Ik.pos, Ik.assoc, Tk),
                  ik = Math.min(Fk.from, Lk.from),
                  yk = Math.max(Fk.to, Lk.to);
                Lk = ik < Lk.from ? Xk.k.range(ik, yk, Lk.assoc) : Xk.k.range(yk, ik, Lk.assoc)
              }
              return yk ? ik.replaceRange(ik.main.extend(Lk.from, Lk.to, Lk.assoc)) : lk && 1 == Tk && ik.nZ.length > 1 && (ak = function(kk, Fk) {
                for (let Ik = 0; Ik < kk.nZ.length; Ik++) {
                  let {
                    from: Tk,
                    to: ik
                  } = kk.nZ[Ik];
                  if (Tk <= Fk && ik >= Fk) return Xk.k.create(kk.nZ.slice(0, Ik).concat(kk.nZ.slice(Ik + 1)), kk.mainIndex == Ik ? 0 : kk.mainIndex - (kk.mainIndex > Ik ? 1 : 0))
                }
                return null
              }(ik, qk.pos)) ? ak : lk ? ik.addRange(Lk) : Xk.k.create([Lk])
            }
          }
        }(kk, Fk)), Ik) {
        let Xk = !kk.hasFocus;
        kk.inputState.startMouseSelection(new HX(kk, Fk, Ik, Xk)), Xk && kk.observer.ignore((() => {
          XF(kk.contentDOM);
          let Fk = kk.root.activeElement;
          Fk && !Fk.contains(kk.contentDOM) && Fk.blur()
        }));
        let Tk = kk.inputState.mouseSelection;
        if (Tk) return Tk.start(Fk), !1 === Tk.dragging
      } else kk.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const VX = Vk.ie && Vk.ie_version <= 11;
    let zX = null,
      SX = 0,
      oX = 0;

    function vX(kk) {
      if (!VX) return kk.detail;
      let Fk = zX,
        Ik = oX;
      return zX = kk, oX = Date.now(), SX = !Fk || Ik > Date.now() - 400 && Math.abs(Fk.clientX - kk.clientX) < 2 && Math.abs(Fk.clientY - kk.clientY) < 2 ? (SX + 1) % 3 : 1
    }

    function EX(kk, Fk, Ik, Xk) {
      if (!(Ik = KX(kk.state, CF, Ik))) return;
      let Tk = kk.posAtCoords({
          x: Fk.clientX,
          y: Fk.clientY
        }, !1),
        {
          draggedContent: ik
        } = kk.inputState,
        yk = Xk && ik && function(kk, Fk) {
          let Ik = kk.state.facet(GF);
          return Ik.length ? Ik[0](Fk) : Vk.mac ? !Fk.altKey : !Fk.ctrlKey
        }(kk, Fk) ? {
          from: ik.from,
          to: ik.to
        } : null,
        lk = {
          from: Tk,
          insert: Ik
        },
        ak = kk.state.changes(yk ? [yk, lk] : lk);
      kk.focus(), kk.dispatch({
        changes: ak,
        selection: {
          anchor: ak.mapPos(Tk, -1),
          head: ak.mapPos(Tk, 1)
        },
        userEvent: yk ? "move.drop" : "input.drop"
      }), kk.inputState.draggedContent = null
    }
    JX.dragstart = (kk, Fk) => {
      let {
        selection: {
          main: Ik
        }
      } = kk.state;
      if (Fk.target.draggable) {
        let Tk = kk.docView.tile.nearest(Fk.target);
        if (Tk && Tk.isWidget()) {
          let kk = Tk.posAtStart,
            Fk = kk + Tk.length;
          (kk >= Ik.to || Fk <= Ik.from) && (Ik = Xk.k.range(kk, Fk))
        }
      }
      let {
        inputState: Tk
      } = kk;
      return Tk.mouseSelection && (Tk.mouseSelection.dragging = !0), Tk.draggedContent = Ik, Fk.dataTransfer && (Fk.dataTransfer.setData("Text", KX(kk.state, NF, kk.state.sliceDoc(Ik.from, Ik.to))), Fk.dataTransfer.effectAllowed = "copyMove"), !1
    }, JX.dragend = kk => (kk.inputState.draggedContent = null, !1), JX.drop = (kk, Fk) => {
      if (!Fk.dataTransfer) return !1;
      if (kk.state.readOnly) return !0;
      let Ik = Fk.dataTransfer.files;
      if (Ik && Ik.length) {
        let Xk = Array(Ik.length),
          Tk = 0,
          ik = () => {
            ++Tk == Ik.length && EX(kk, Fk, Xk.filter((kk => null != kk)).join(kk.state.lineBreak), !1)
          };
        for (let kk = 0; kk < Ik.length; kk++) {
          let Fk = new FileReader;
          Fk.onerror = ik, Fk.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(Fk.result) || (Xk[kk] = Fk.result), ik()
          }, Fk.readAsText(Ik[kk])
        }
        return !0
      } {
        let Ik = Fk.dataTransfer.getData("Text");
        if (Ik) return EX(kk, Fk, Ik, !0), !0
      }
      return !1
    }, JX.paste = (kk, Fk) => {
      if (kk.state.readOnly) return !0;
      kk.observer.flush();
      let Ik = PX ? null : Fk.clipboardData;
      return Ik ? (QX(kk, Ik.getData("text/plain") || Ik.getData("text/uri-list")), !0) : (function(kk) {
        let Fk = kk.dom.parentNode;
        if (!Fk) return;
        let Ik = Fk.appendChild(document.createElement("textarea"));
        Ik.style.cssText = "position: fixed; left: -10000px; top: 10px", Ik.focus(), setTimeout((() => {
          kk.focus(), Ik.remove(), QX(kk, Ik.value)
        }), 50)
      }(kk), !1)
    };
    let OX = null;
    JX.copy = JX.cut = (kk, Fk) => {
      if (!fk(kk.contentDOM, kk.observer.selectionRange)) return !1;
      let {
        text: Ik,
        nZ: Xk,
        linewise: Tk
      } = function(kk) {
        let Fk = [],
          Ik = [],
          Xk = !1;
        for (let Tk of kk.selection.nZ) Tk.empty || (Fk.push(kk.sliceDoc(Tk.from, Tk.to)), Ik.push(Tk));
        if (!Fk.length) {
          let Tk = -1;
          for (let {
              from: Xk
            }
            of kk.selection.nZ) {
            let ik = kk.doc.lineAt(Xk);
            ik.number > Tk && (Fk.push(ik.text), Ik.push({
              from: ik.from,
              to: Math.min(kk.doc.length, ik.to + 1)
            })), Tk = ik.number
          }
          Xk = !0
        }
        return {
          text: KX(kk, NF, Fk.join(kk.lineBreak)),
          nZ: Ik,
          linewise: Xk
        }
      }(kk.state);
      if (!Ik && !Tk) return !1;
      OX = Tk ? Ik : null, "cut" != Fk.type || kk.state.readOnly || kk.dispatch({
        changes: Xk,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let ik = PX ? null : Fk.clipboardData;
      return ik ? (ik.clearData(), ik.setData("text/plain", Ik), !0) : (function(kk, Fk) {
        let Ik = kk.dom.parentNode;
        if (!Ik) return;
        let Xk = Ik.appendChild(document.createElement("textarea"));
        Xk.style.cssText = "position: fixed; left: -10000px; top: 10px", Xk.value = Fk, Xk.focus(), Xk.selectionEnd = Fk.length, Xk.selectionStart = 0, setTimeout((() => {
          Xk.remove(), kk.focus()
        }), 50)
      }(kk, Ik), !1)
    };
    const nX = Xk.d.define();

    function GX(kk, Fk) {
      let Ik = [];
      for (let Xk of kk.facet(UF)) {
        let Tk = Xk(kk, Fk);
        Tk && Ik.push(Tk)
      }
      return Ik.length ? kk.update({
        effects: Ik,
        annotations: nX.of(!0)
      }) : null
    }

    function pX(kk) {
      setTimeout((() => {
        let Fk = kk.hasFocus;
        if (Fk != kk.inputState.notifiedFocused) {
          let Ik = GX(kk.state, Fk);
          Ik ? kk.dispatch(Ik) : kk.update([])
        }
      }), 10)
    }
    xX.focus = kk => {
      kk.inputState.lastFocusTime = Date.now(), kk.scrollDOM.scrollTop || !kk.inputState.lastScrollTop && !kk.inputState.lastScrollLeft || (kk.scrollDOM.scrollTop = kk.inputState.lastScrollTop, kk.scrollDOM.scrollLeft = kk.inputState.lastScrollLeft), pX(kk)
    }, xX.blur = kk => {
      kk.observer.clearSelectionRange(), pX(kk)
    }, xX.compositionstart = xX.compositionupdate = kk => {
      kk.observer.editContext || (null == kk.inputState.compositionFirstChange && (kk.inputState.compositionFirstChange = !0), kk.inputState.composing < 0 && (kk.inputState.composing = 0))
    }, xX.compositionend = kk => {
      kk.observer.editContext || (kk.inputState.composing = -1, kk.inputState.compositionEndedAt = Date.now(), kk.inputState.compositionPendingKey = !0, kk.inputState.compositionPendingChange = kk.observer.pendingRecords().length > 0, kk.inputState.compositionFirstChange = null, Vk.chrome && Vk.android ? kk.observer.flushSoon() : kk.inputState.compositionPendingChange ? Promise.resolve().then((() => kk.observer.flush())) : setTimeout((() => {
        kk.inputState.composing < 0 && kk.docView.hasComposition && kk.update([])
      }), 50))
    }, xX.contextmenu = kk => {
      kk.inputState.lastContextMenu = Date.now()
    }, JX.beforeinput = (kk, Fk) => {
      var Ik, Xk;
      if ("insertText" != Fk.inputType && "insertCompositionText" != Fk.inputType || (kk.inputState.insertingText = Fk.data, kk.inputState.insertingTextAt = Date.now()), "insertReplacementText" == Fk.inputType && kk.observer.editContext) {
        let Xk = null === (Ik = Fk.dataTransfer) || void 0 === Ik ? void 0 : Ik.getData("text/plain"),
          Tk = Fk.getTargetRanges();
        if (Xk && Tk.length) {
          let Fk = Tk[0],
            Ik = kk.posAtDOM(Fk.startContainer, Fk.startOffset),
            ik = kk.posAtDOM(Fk.endContainer, Fk.endOffset);
          return yX(kk, {
            from: Ik,
            to: ik,
            insert: kk.state.toText(Xk)
          }, null), !0
        }
      }
      let Tk;
      if (Vk.chrome && Vk.android && (Tk = ZX.find((kk => kk.inputType == Fk.inputType))) && (kk.observer.delayAndroidKey(Tk.key, Tk.keyCode), "Backspace" == Tk.key || "Delete" == Tk.key)) {
        let Fk = (null === (Xk = window.visualViewport) || void 0 === Xk ? void 0 : Xk.height) || 0;
        setTimeout((() => {
          var Ik;
          ((null === (Ik = window.visualViewport) || void 0 === Ik ? void 0 : Ik.height) || 0) > Fk + 10 && kk.hasFocus && (kk.contentDOM.blur(), kk.focus())
        }), 100)
      }
      return Vk.ios && "deleteContentForward" == Fk.inputType && kk.observer.flushSoon(), Vk.safari && "insertText" == Fk.inputType && kk.inputState.composing >= 0 && setTimeout((() => xX.compositionend(kk, Fk)), 20), !1
    };
    const uX = new Set;
    const bX = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let RX = !1;

    function UX() {
      RX = !1
    }
    class CX {
      constructor(kk) {
        this.lineWrapping = kk, this.doc = Xk.J.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(kk, Fk) {
        let Ik = this.doc.lineAt(Fk).number - this.doc.lineAt(kk).number + 1;
        return this.lineWrapping && (Ik += Math.max(0, Math.ceil((Fk - kk - Ik * this.lineLength * .5) / this.lineLength))), this.lineHeight * Ik
      }
      heightForLine(kk) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((kk - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(kk) {
        return this.doc = kk, this
      }
      mustRefreshForWrapping(kk) {
        return bX.indexOf(kk) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(kk) {
        let Fk = !1;
        for (let Ik = 0; Ik < kk.length; Ik++) {
          let Xk = kk[Ik];
          Xk < 0 ? Ik++ : this.heightSamples[Math.floor(10 * Xk)] || (Fk = !0, this.heightSamples[Math.floor(10 * Xk)] = !0)
        }
        return Fk
      }
      refresh(kk, Fk, Ik, Xk, Tk, ik) {
        let yk = bX.indexOf(kk) > -1,
          lk = Math.abs(Fk - this.lineHeight) > .3 || this.lineWrapping != yk || Math.abs(Ik - this.charWidth) > .1;
        if (this.lineWrapping = yk, this.lineHeight = Fk, this.charWidth = Ik, this.textHeight = Xk, this.lineLength = Tk, lk) {
          this.heightSamples = {};
          for (let kk = 0; kk < ik.length; kk++) {
            let Fk = ik[kk];
            Fk < 0 ? kk++ : this.heightSamples[Math.floor(10 * Fk)] = !0
          }
        }
        return lk
      }
    }
    class NX {
      constructor(kk, Fk) {
        this.from = kk, this.heights = Fk, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class cX {
      constructor(kk, Fk, Ik, Xk, Tk) {
        this.from = kk, this.length = Fk, this.top = Ik, this.height = Xk, this._content = Tk
      }
      get type() {
        return "number" == typeof this._content ? Gk.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof Rk ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(kk) {
        let Fk = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(kk._content) ? kk._content : [kk]);
        return new cX(this.from, this.length + kk.length, this.top, this.height + kk.height, Fk)
      }
    }
    var WX = function(kk) {
      return kk[kk.ByPos = 0] = "ByPos", kk[kk.ByHeight = 1] = "ByHeight", kk[kk.ByPosNoHeight = 2] = "ByPosNoHeight", kk
    }(WX || (WX = {}));
    const fX = .001;
    class BX {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = kk, this.height = Fk, this.flags = Ik
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(kk) {
        this.flags = (kk ? 2 : 0) | -3 & this.flags
      }
      setHeight(kk) {
        this.height != kk && (Math.abs(this.height - kk) > fX && (RX = !0), this.height = kk)
      }
      replace(kk, Fk, Ik) {
        return BX.of(Ik)
      }
      decomposeLeft(kk, Fk) {
        Fk.push(this)
      }
      decomposeRight(kk, Fk) {
        Fk.push(this)
      }
      applyChanges(kk, Fk, Ik, Xk) {
        let Tk = this,
          ik = Ik.doc;
        for (let yk = Xk.length - 1; yk >= 0; yk--) {
          let {
            fromA: lk,
            toA: ak,
            fromB: qk,
            toB: Lk
          } = Xk[yk], tk = Tk.lineAt(lk, WX.ByPosNoHeight, Ik.setDoc(Fk), 0, 0), Zk = tk.to >= ak ? tk : Tk.lineAt(ak, WX.ByPosNoHeight, Ik, 0, 0);
          for (Lk += Zk.to - ak, ak = Zk.to; yk > 0 && tk.from <= Xk[yk - 1].toA;) lk = Xk[yk - 1].fromA, qk = Xk[yk - 1].fromB, yk--, lk < tk.from && (tk = Tk.lineAt(lk, WX.ByPosNoHeight, Ik, 0, 0));
          qk += tk.from - lk, lk = tk.from;
          let jk = DX.build(Ik.setDoc(ik), kk, qk, Lk);
          Tk = dX(Tk, Tk.replace(lk, ak, jk))
        }
        return Tk.updateHeight(Ik, 0)
      }
      static empty() {
        return new gX(0, 0, 0)
      }
      static of (kk) {
        if (1 == kk.length) return kk[0];
        let Fk = 0,
          Ik = kk.length,
          Xk = 0,
          Tk = 0;
        for (;;)
          if (Fk == Ik)
            if (Xk > 2 * Tk) {
              let Tk = kk[Fk - 1];
              Tk.break ? kk.splice(--Fk, 1, Tk.left, null, Tk.right) : kk.splice(--Fk, 1, Tk.left, Tk.right), Ik += 1 + Tk.break, Xk -= Tk.size
            } else {
              if (!(Tk > 2 * Xk)) break;
              {
                let Fk = kk[Ik];
                Fk.break ? kk.splice(Ik, 1, Fk.left, null, Fk.right) : kk.splice(Ik, 1, Fk.left, Fk.right), Ik += 2 + Fk.break, Tk -= Fk.size
              }
            }
        else if (Xk < Tk) {
          let Ik = kk[Fk++];
          Ik && (Xk += Ik.size)
        } else {
          let Fk = kk[--Ik];
          Fk && (Tk += Fk.size)
        }
        let ik = 0;
        return null == kk[Fk - 1] ? (ik = 1, Fk--) : null == kk[Fk] && (ik = 1, Ik++), new hX(BX.of(kk.slice(0, Fk)), ik, BX.of(kk.slice(Ik)))
      }
    }

    function dX(kk, Fk) {
      return kk == Fk ? kk : (kk.constructor != Fk.constructor && (RX = !0), Fk)
    }
    BX.prototype.size = 1;
    const YX = pk.replace({});
    class AX extends BX {
      constructor(kk, Fk, Ik) {
        super(kk, Fk), this.deco = Ik, this.spaceAbove = 0
      }
      mainBlock(kk, Fk) {
        return new cX(Fk, this.length, kk + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(kk, Fk, Ik, Xk) {
        return this.spaceAbove && kk < Ik + this.spaceAbove ? new cX(Xk, 0, Ik, this.spaceAbove, YX) : this.mainBlock(Ik, Xk)
      }
      lineAt(kk, Fk, Ik, Xk, Tk) {
        let ik = this.mainBlock(Xk, Tk);
        return this.spaceAbove ? this.blockAt(0, Ik, Xk, Tk).join(ik) : ik
      }
      forEachLine(kk, Fk, Ik, Xk, Tk, ik) {
        kk <= Tk + this.length && Fk >= Tk && ik(this.lineAt(0, WX.ByPos, Ik, Xk, Tk))
      }
      setMeasuredHeight(kk) {
        let Fk = kk.heights[kk.index++];
        Fk < 0 ? (this.spaceAbove = -Fk, Fk = kk.heights[kk.index++]) : this.spaceAbove = 0, this.setHeight(Fk)
      }
      updateHeight(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 3 ? arguments[3] : void 0;
        return Ik && Ik.from <= Fk && Ik.more && this.setMeasuredHeight(Ik), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class gX extends AX {
      constructor(kk, Fk, Ik) {
        super(kk, Fk, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = Ik
      }
      mainBlock(kk, Fk) {
        return new cX(Fk, this.length, kk + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(kk, Fk, Ik) {
        let Xk = Ik[0];
        return 1 == Ik.length && (Xk instanceof gX || Xk instanceof mX && 4 & Xk.flags) && Math.abs(this.length - Xk.length) < 10 ? (Xk instanceof mX ? Xk = new gX(Xk.length, this.height, this.spaceAbove) : Xk.height = this.height, this.outdated || (Xk.outdated = !1), Xk) : BX.of(Ik)
      }
      updateHeight(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 ? arguments[3] : void 0;
        return Xk && Xk.from <= Fk && Xk.more ? this.setMeasuredHeight(Xk) : (Ik || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, kk.heightForLine(this.length - this.collapsed)) + this.breaks * kk.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class mX extends BX {
      constructor(kk) {
        super(kk, 0)
      }
      heightMetrics(kk, Fk) {
        let Ik, Xk = kk.doc.lineAt(Fk).number,
          Tk = kk.doc.lineAt(Fk + this.length).number,
          ik = Tk - Xk + 1,
          yk = 0;
        if (kk.lineWrapping) {
          let Fk = Math.min(this.height, kk.lineHeight * ik);
          Ik = Fk / ik, this.length > ik + 1 && (yk = (this.height - Fk) / (this.length - ik - 1))
        } else Ik = this.height / ik;
        return {
          firstLine: Xk,
          lastLine: Tk,
          perLine: Ik,
          perChar: yk
        }
      }
      blockAt(kk, Fk, Ik, Xk) {
        let {
          firstLine: Tk,
          lastLine: ik,
          perLine: yk,
          perChar: lk
        } = this.heightMetrics(Fk, Xk);
        if (Fk.lineWrapping) {
          let Tk = Xk + (kk < Fk.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (kk - Ik) / this.height)) * this.length)),
            ik = Fk.doc.lineAt(Tk),
            ak = yk + ik.length * lk,
            qk = Math.max(Ik, kk - ak / 2);
          return new cX(ik.from, ik.length, qk, ak, 0)
        } {
          let Xk = Math.max(0, Math.min(ik - Tk, Math.floor((kk - Ik) / yk))),
            {
              from: lk,
              length: ak
            } = Fk.doc.line(Tk + Xk);
          return new cX(lk, ak, Ik + yk * Xk, yk, 0)
        }
      }
      lineAt(kk, Fk, Ik, Xk, Tk) {
        if (Fk == WX.ByHeight) return this.blockAt(kk, Ik, Xk, Tk);
        if (Fk == WX.ByPosNoHeight) {
          let {
            from: Fk,
            to: Xk
          } = Ik.doc.lineAt(kk);
          return new cX(Fk, Xk - Fk, 0, 0, 0)
        }
        let {
          firstLine: ik,
          perLine: yk,
          perChar: lk
        } = this.heightMetrics(Ik, Tk), ak = Ik.doc.lineAt(kk), qk = yk + ak.length * lk, Lk = ak.number - ik, tk = Xk + yk * Lk + lk * (ak.from - Tk - Lk);
        return new cX(ak.from, ak.length, Math.max(Xk, Math.min(tk, Xk + this.height - qk)), qk, 0)
      }
      forEachLine(kk, Fk, Ik, Xk, Tk, ik) {
        kk = Math.max(kk, Tk), Fk = Math.min(Fk, Tk + this.length);
        let {
          firstLine: yk,
          perLine: lk,
          perChar: ak
        } = this.heightMetrics(Ik, Tk);
        for (let qk = kk, Lk = Xk; qk <= Fk;) {
          let Fk = Ik.doc.lineAt(qk);
          if (qk == kk) {
            let Ik = Fk.number - yk;
            Lk += lk * Ik + ak * (kk - Tk - Ik)
          }
          let Xk = lk + ak * Fk.length;
          ik(new cX(Fk.from, Fk.length, Lk, Xk, 0)), Lk += Xk, qk = Fk.to + 1
        }
      }
      replace(kk, Fk, Ik) {
        let Xk = this.length - Fk;
        if (Xk > 0) {
          let kk = Ik[Ik.length - 1];
          kk instanceof mX ? Ik[Ik.length - 1] = new mX(kk.length + Xk) : Ik.push(null, new mX(Xk - 1))
        }
        if (kk > 0) {
          let Fk = Ik[0];
          Fk instanceof mX ? Ik[0] = new mX(kk + Fk.length) : Ik.unshift(new mX(kk - 1), null)
        }
        return BX.of(Ik)
      }
      decomposeLeft(kk, Fk) {
        Fk.push(new mX(kk - 1), null)
      }
      decomposeRight(kk, Fk) {
        Fk.push(null, new mX(this.length - kk - 1))
      }
      updateHeight(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 ? arguments[3] : void 0,
          Tk = Fk + this.length;
        if (Xk && Xk.from <= Fk + this.length && Xk.more) {
          let Ik = [],
            ik = Math.max(Fk, Xk.from),
            yk = -1;
          for (Xk.from > Fk && Ik.push(new mX(Xk.from - Fk - 1).updateHeight(kk, Fk)); ik <= Tk && Xk.more;) {
            let Fk = kk.doc.lineAt(ik).length;
            Ik.length && Ik.push(null);
            let Tk = Xk.heights[Xk.index++],
              lk = 0;
            Tk < 0 && (lk = -Tk, Tk = Xk.heights[Xk.index++]), -1 == yk ? yk = Tk : Math.abs(Tk - yk) >= fX && (yk = -2);
            let ak = new gX(Fk, Tk, lk);
            ak.outdated = !1, Ik.push(ak), ik += Fk + 1
          }
          ik <= Tk && Ik.push(null, new mX(Tk - ik).updateHeight(kk, ik));
          let lk = BX.of(Ik);
          return (yk < 0 || Math.abs(lk.height - this.height) >= fX || Math.abs(yk - this.heightMetrics(kk, Fk).perLine) >= fX) && (RX = !0), dX(this, lk)
        }
        return (Ik || this.outdated) && (this.setHeight(kk.heightForGap(Fk, Fk + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class hX extends BX {
      constructor(kk, Fk, Ik) {
        super(kk.length + Fk + Ik.length, kk.height + Ik.height, Fk | (kk.outdated || Ik.outdated ? 2 : 0)), this.left = kk, this.right = Ik, this.size = kk.size + Ik.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(kk, Fk, Ik, Xk) {
        let Tk = Ik + this.left.height;
        return kk < Tk ? this.left.blockAt(kk, Fk, Ik, Xk) : this.right.blockAt(kk, Fk, Tk, Xk + this.left.length + this.break)
      }
      lineAt(kk, Fk, Ik, Xk, Tk) {
        let ik = Xk + this.left.height,
          yk = Tk + this.left.length + this.break,
          lk = Fk == WX.ByHeight ? kk < ik : kk < yk,
          ak = lk ? this.left.lineAt(kk, Fk, Ik, Xk, Tk) : this.right.lineAt(kk, Fk, Ik, ik, yk);
        if (this.break || (lk ? ak.to < yk : ak.from > yk)) return ak;
        let qk = Fk == WX.ByPosNoHeight ? WX.ByPosNoHeight : WX.ByPos;
        return lk ? ak.join(this.right.lineAt(yk, qk, Ik, ik, yk)) : this.left.lineAt(yk, qk, Ik, Xk, Tk).join(ak)
      }
      forEachLine(kk, Fk, Ik, Xk, Tk, ik) {
        let yk = Xk + this.left.height,
          lk = Tk + this.left.length + this.break;
        if (this.break) kk < lk && this.left.forEachLine(kk, Fk, Ik, Xk, Tk, ik), Fk >= lk && this.right.forEachLine(kk, Fk, Ik, yk, lk, ik);
        else {
          let ak = this.lineAt(lk, WX.ByPos, Ik, Xk, Tk);
          kk < ak.from && this.left.forEachLine(kk, ak.from - 1, Ik, Xk, Tk, ik), ak.to >= kk && ak.from <= Fk && ik(ak), Fk > ak.to && this.right.forEachLine(ak.to + 1, Fk, Ik, yk, lk, ik)
        }
      }
      replace(kk, Fk, Ik) {
        let Xk = this.left.length + this.break;
        if (Fk < Xk) return this.balanced(this.left.replace(kk, Fk, Ik), this.right);
        if (kk > this.left.length) return this.balanced(this.left, this.right.replace(kk - Xk, Fk - Xk, Ik));
        let Tk = [];
        kk > 0 && this.decomposeLeft(kk, Tk);
        let ik = Tk.length;
        for (let yk of Ik) Tk.push(yk);
        if (kk > 0 && rX(Tk, ik - 1), Fk < this.length) {
          let kk = Tk.length;
          this.decomposeRight(Fk, Tk), rX(Tk, kk)
        }
        return BX.of(Tk)
      }
      decomposeLeft(kk, Fk) {
        let Ik = this.left.length;
        if (kk <= Ik) return this.left.decomposeLeft(kk, Fk);
        Fk.push(this.left), this.break && (Ik++, kk >= Ik && Fk.push(null)), kk > Ik && this.right.decomposeLeft(kk - Ik, Fk)
      }
      decomposeRight(kk, Fk) {
        let Ik = this.left.length,
          Xk = Ik + this.break;
        if (kk >= Xk) return this.right.decomposeRight(kk - Xk, Fk);
        kk < Ik && this.left.decomposeRight(kk, Fk), this.break && kk < Xk && Fk.push(null), Fk.push(this.right)
      }
      balanced(kk, Fk) {
        return kk.size > 2 * Fk.size || Fk.size > 2 * kk.size ? BX.of(this.break ? [kk, null, Fk] : [kk, Fk]) : (this.left = dX(this.left, kk), this.right = dX(this.right, Fk), this.setHeight(kk.height + Fk.height), this.outdated = kk.outdated || Fk.outdated, this.size = kk.size + Fk.size, this.length = kk.length + this.break+Fk.length, this)
      }
      updateHeight(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: Tk,
            right: ik
          } = this,
          yk = Fk + Tk.length + this.break,
          lk = null;
        return Xk && Xk.from <= Fk + Tk.length && Xk.more ? lk = Tk = Tk.updateHeight(kk, Fk, Ik, Xk) : Tk.updateHeight(kk, Fk, Ik), Xk && Xk.from <= yk + ik.length && Xk.more ? lk = ik = ik.updateHeight(kk, yk, Ik, Xk) : ik.updateHeight(kk, yk, Ik), lk ? this.balanced(Tk, ik) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function rX(kk, Fk) {
      let Ik, Xk;
      null == kk[Fk] && (Ik = kk[Fk - 1]) instanceof mX && (Xk = kk[Fk + 1]) instanceof mX && kk.splice(Fk - 1, 3, new mX(Ik.length + 1 + Xk.length))
    }
    class DX {
      constructor(kk, Fk) {
        this.pos = kk, this.oracle = Fk, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = kk
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(kk, Fk) {
        if (this.lineStart > -1) {
          let kk = Math.min(Fk, this.lineEnd),
            Ik = this.nodes[this.nodes.length - 1];
          Ik instanceof gX ? Ik.length += kk - this.pos : (kk > this.pos || !this.isCovered) && this.nodes.push(new gX(kk - this.pos, -1, 0)), this.writtenTo = kk, Fk > kk && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = Fk
      }
      point(kk, Fk, Ik) {
        if (kk < Fk || Ik.heightRelevant) {
          let Xk = Ik.widget ? Ik.widget.estimatedHeight : 0,
            Tk = Ik.widget ? Ik.widget.lineBreaks : 0;
          Xk < 0 && (Xk = this.oracle.lineHeight);
          let ik = Fk - kk;
          Ik.block ? this.LFk(new AX(ik, Xk, Ik)) : (ik || Tk || Xk >= 5) && this.addLineDeco(Xk, Tk, ik)
        } else Fk > kk && this.span(kk, Fk);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: kk,
          to: Fk
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = kk, this.lineEnd = Fk, this.writtenTo < kk && ((this.writtenTo < kk - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, kk - 1)), this.nodes.push(null)), this.pos > kk && this.nodes.push(new gX(this.pos - kk, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(kk, Fk) {
        let Ik = new mX(Fk - kk);
        return this.oracle.doc.lineAt(kk).to == Fk && (Ik.flags |= 4), Ik
      }
      ensureLine() {
        this.enterLine();
        let kk = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (kk instanceof gX) return kk;
        let Fk = new gX(0, -1, 0);
        return this.nodes.push(Fk), Fk
      }
      LFk(kk) {
        this.enterLine();
        let Fk = kk.deco;
        Fk && Fk.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(kk), this.writtenTo = this.pos = this.pos + kk.length, Fk && Fk.endSide > 0 && (this.covering = kk)
      }
      addLineDeco(kk, Fk, Ik) {
        let Xk = this.ensureLine();
        Xk.length += Ik, Xk.collapsed += Ik, Xk.widgetHeight = Math.max(Xk.widgetHeight, kk), Xk.breaks += Fk, this.writtenTo = this.pos = this.pos + Ik
      }
      finish(kk) {
        let Fk = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || Fk instanceof gX || this.isCovered ? (this.writtenTo < this.pos || null == Fk) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new gX(0, -1, 0));
        let Ik = kk;
        for (let Xk of this.nodes) Xk instanceof gX && Xk.updateHeight(this.oracle, Ik), Ik += Xk ? Xk.length : 1;
        return this.nodes
      }
      static build(kk, Fk, Ik, Tk) {
        let ik = new DX(Ik, kk);
        return Xk.A.spans(Fk, Ik, Tk, ik, 0), ik.finish(Ik)
      }
    }
    class MX {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(kk, Fk, Ik, Xk) {
        (kk < Fk || Ik && Ik.heightRelevant || Xk && Xk.heightRelevant) && Ck(kk, Fk, this.changes, 5)
      }
    }

    function kT(kk, Fk) {
      let Ik = kk.getBoundingClientRect(),
        Xk = kk.ownerDocument,
        Tk = Xk.defaultView || window,
        ik = Math.max(0, Ik.left),
        yk = Math.min(Tk.innerWidth, Ik.right),
        lk = Math.max(0, Ik.top),
        ak = Math.min(Tk.innerHeight, Ik.bottom);
      for (let qk = kk.parentNode; qk && qk != Xk.body;)
        if (1 == qk.nodeType) {
          let Fk = qk,
            Ik = window.getComputedStyle(Fk);
          if ((Fk.scrollHeight > Fk.clientHeight || Fk.scrollWidth > Fk.clientWidth) && "visible" != Ik.overflow) {
            let Ik = Fk.getBoundingClientRect();
            ik = Math.max(ik, Ik.left), yk = Math.min(yk, Ik.right), lk = Math.max(lk, Ik.top), ak = Math.min(qk == kk.parentNode ? Tk.innerHeight : ak, Ik.bottom)
          }
          qk = "absolute" == Ik.position || "fixed" == Ik.position ? Fk.offsetParent : Fk.parentNode
        } else {
          if (11 != qk.nodeType) break;
          qk = qk.host
        } return {
        left: ik - Ik.left,
        right: Math.max(ik, yk) - Ik.left,
        top: lk - (Ik.top + Fk),
        bottom: Math.max(lk, ak) - (Ik.top + Fk)
      }
    }

    function FT(kk, Fk) {
      let Ik = kk.getBoundingClientRect();
      return {
        left: 0,
        right: Ik.right - Ik.left,
        top: Fk,
        bottom: Ik.bottom - (Ik.top + Fk)
      }
    }
    class IT {
      constructor(kk, Fk, Ik, Xk) {
        this.from = kk, this.to = Fk, this.size = Ik, this.displaySize = Xk
      }
      static same(kk, Fk) {
        if (kk.length != Fk.length) return !1;
        for (let Ik = 0; Ik < kk.length; Ik++) {
          let Xk = kk[Ik],
            Tk = Fk[Ik];
          if (Xk.from != Tk.from || Xk.to != Tk.to || Xk.size != Tk.size) return !1
        }
        return !0
      }
      draw(kk, Fk) {
        return pk.replace({
          widget: new XT(this.displaySize * (Fk ? kk.scaleY : kk.scaleX), Fk)
        }).range(this.from, this.to)
      }
    }
    class XT extends nk {
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
    class TT {
      constructor(kk, Fk) {
        this.view = kk, this.state = Fk, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = aT, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = LF.LTR, this.W9 = [], this.mustEnforceCursorAssoc = !1;
        let Ik = Fk.facet(kI).some((kk => "function" != typeof kk && "cm-lineWrapping" == kk.class));
        this.heightOracle = new CX(Ik), this.stateDeco = qT(Fk), this.heightMap = BX.empty().applyChanges(this.stateDeco, Xk.J.empty, this.heightOracle.setDoc(Fk.doc), [new LI(0, 0, 0, Fk.doc.length)]);
        for (let Xk = 0; Xk < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Xk++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = pk.set(this.lineGaps.map((kk => kk.draw(this, !1)))), this.scrollParent = kk.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let kk = [this.viewport],
          {
            main: Fk
          } = this.state.selection;
        for (let Ik = 0; Ik <= 1; Ik++) {
          let Xk = Ik ? Fk.head : Fk.anchor;
          if (!kk.some((kk => {
              let {
                from: Fk,
                to: Ik
              } = kk;
              return Xk >= Fk && Xk <= Ik
            }))) {
            let {
              from: Fk,
              to: Ik
            } = this.lineBlockAt(Xk);
            kk.push(new iT(Fk, Ik))
          }
        }
        return this.viewports = kk.sort(((kk, Fk) => kk.from - Fk.from)), this.updateScaler()
      }
      updateScaler() {
        let kk = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? aT : new LT(this.heightOracle, this.heightMap, this.viewports), kk.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (kk => {
          this.viewportLines.push(tT(kk, this.scaler))
        }))
      }
      update(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = kk.state;
        let Ik = this.stateDeco;
        this.stateDeco = qT(this.state);
        let Tk = kk.changedRanges,
          ik = LI.extendWithRanges(Tk, function(kk, Fk, Ik) {
            let Tk = new MX;
            return Xk.A.compare(kk, Fk, Ik, Tk, 0), Tk.changes
          }(Ik, this.stateDeco, kk ? kk.changes : Xk.ChangeSet.empty(this.state.doc.length))),
          yk = this.heightMap.height,
          lk = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        UX(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, kk.startState.doc, this.heightOracle.setDoc(this.state.doc), ik), (this.heightMap.height != yk || RX) && (kk.flags |= 2), lk ? (this.scrollAnchorPos = kk.changes.mapPos(lk.from, -1), this.scrollAnchorHeight = lk.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = yk);
        let ak = ik.length ? this.mapViewport(this.viewport, kk.changes) : this.viewport;
        (Fk && (Fk.range.head < ak.from || Fk.range.head > ak.to) || !this.viewportIsAppropriate(ak)) && (ak = this.getViewport(0, Fk));
        let qk = ak.from != this.viewport.from || ak.to != this.viewport.to;
        this.viewport = ak, kk.flags |= this.updateForViewport(), (qk || !kk.changes.empty || 2 & kk.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, kk.changes))), kk.flags |= this.computeVisibleRanges(kk.changes), Fk && (this.scrollTarget = Fk), !this.mustEnforceCursorAssoc && (kk.selectionSet || kk.focusChanged) && kk.view.lineWrapping && kk.state.selection.main.empty && kk.state.selection.main.assoc && !kk.state.facet(WF) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: kk
        } = this, Fk = kk.contentDOM, Ik = window.getComputedStyle(Fk), Tk = this.heightOracle, ik = Ik.whiteSpace;
        this.defaultTextDirection = "rtl" == Ik.direction ? LF.RTL : LF.LTR;
        let yk = this.heightOracle.mustRefreshForWrapping(ik) || "refresh" === this.mustMeasureContent,
          lk = Fk.getBoundingClientRect(),
          ak = yk || this.mustMeasureContent || this.contentDOMHeight != lk.height;
        this.contentDOMHeight = lk.height, this.mustMeasureContent = !1;
        let qk = 0,
          Lk = 0;
        if (lk.width && lk.height) {
          let {
            scaleX: kk,
            scaleY: Ik
          } = Dk(Fk, lk);
          (kk > .005 && Math.abs(this.scaleX - kk) > .005 || Ik > .005 && Math.abs(this.scaleY - Ik) > .005) && (this.scaleX = kk, this.scaleY = Ik, qk |= 16, yk = ak = !0)
        }
        let tk = (parseInt(Ik.paddingTop) || 0) * this.scaleY,
          Zk = (parseInt(Ik.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == tk && this.paddingBottom == Zk || (this.paddingTop = tk, this.paddingBottom = Zk, qk |= 18), this.editorWidth != kk.scrollDOM.clientWidth && (Tk.lineWrapping && (ak = !0), this.editorWidth = kk.scrollDOM.clientWidth, qk |= 16);
        let jk = Mk(this.view.contentDOM, !1).y;
        jk != this.scrollParent && (this.scrollParent = jk, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let ek = this.getScrollOffset();
        this.scrollOffset != ek && (this.scrollAnchorHeight = -1, this.scrollOffset = ek), this.scrolledToBottom = yF(this.scrollParent || kk.win);
        let wk = (this.printing ? FT : kT)(Fk, this.paddingTop),
          Hk = wk.top - this.pixelViewport.top,
          Jk = wk.bottom - this.pixelViewport.bottom;
        this.pixelViewport = wk;
        let xk = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (xk != this.inView && (this.inView = xk, xk && (ak = !0)), !this.inView && !this.scrollTarget && ! function(kk) {
            let Fk = kk.getBoundingClientRect(),
              Ik = kk.ownerDocument.defaultView || window;
            return Fk.left < Ik.innerWidth && Fk.right > 0 && Fk.top < Ik.innerHeight && Fk.bottom > 0
          }(kk.dom)) return 0;
        let Pk = lk.width;
        if (this.contentDOMWidth == Pk && this.editorHeight == kk.scrollDOM.clientHeight || (this.contentDOMWidth = lk.width, this.editorHeight = kk.scrollDOM.clientHeight, qk |= 16), ak) {
          let Fk = kk.docView.measureVisibleLineHeights(this.viewport);
          if (Tk.mustRefreshForHeights(Fk) && (yk = !0), yk || Tk.lineWrapping && Math.abs(Pk - this.contentDOMWidth) > Tk.charWidth) {
            let {
              lineHeight: Ik,
              charWidth: Xk,
              textHeight: lk
            } = kk.docView.measureTextSize();
            yk = Ik > 0 && Tk.refresh(ik, Ik, Xk, lk, Math.max(5, Pk / Xk), Fk), yk && (kk.docView.minWidth = 0, qk |= 16)
          }
          Hk > 0 && Jk > 0 ? Lk = Math.max(Hk, Jk) : Hk < 0 && Jk < 0 && (Lk = Math.min(Hk, Jk)), UX();
          for (let Ik of this.viewports) {
            let ik = Ik.from == this.viewport.from ? Fk : kk.docView.measureVisibleLineHeights(Ik);
            this.heightMap = (yk ? BX.empty().applyChanges(this.stateDeco, Xk.J.empty, this.heightOracle, [new LI(0, 0, 0, kk.state.doc.length)]) : this.heightMap).updateHeight(Tk, 0, yk, new NX(Ik.from, ik))
          }
          RX && (qk |= 2)
        }
        let Kk = !this.viewportIsAppropriate(this.viewport, Lk) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return Kk && (2 & qk && (qk |= this.updateScaler()), this.viewport = this.getViewport(Lk, this.scrollTarget), qk |= this.updateForViewport()), (2 & qk || Kk) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(yk ? [] : this.lineGaps, kk)), qk |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, kk.docView.enforceCursorAssoc()), qk
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(kk, Fk) {
        let Ik = .5 - Math.max(-.5, Math.min(.5, kk / 1e3 / 2)),
          Xk = this.heightMap,
          Tk = this.heightOracle,
          {
            visibleTop: ik,
            visibleBottom: yk
          } = this,
          lk = new iT(Xk.lineAt(ik - 1e3 * Ik, WX.ByHeight, Tk, 0, 0).from, Xk.lineAt(yk + 1e3 * (1 - Ik), WX.ByHeight, Tk, 0, 0).to);
        if (Fk) {
          let {
            head: kk
          } = Fk.range;
          if (kk < lk.from || kk > lk.to) {
            let Ik, ik = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              yk = Xk.lineAt(kk, WX.ByPos, Tk, 0, 0);
            Ik = "center" == Fk.y ? (yk.top + yk.bottom) / 2 - ik / 2 : "start" == Fk.y || "nearest" == Fk.y && kk < lk.from ? yk.top : yk.bottom - ik, lk = new iT(Xk.lineAt(Ik - 500, WX.ByHeight, Tk, 0, 0).from, Xk.lineAt(Ik + ik + 500, WX.ByHeight, Tk, 0, 0).to)
          }
        }
        return lk
      }
      mapViewport(kk, Fk) {
        let Ik = Fk.mapPos(kk.from, -1),
          Xk = Fk.mapPos(kk.to, 1);
        return new iT(this.heightMap.lineAt(Ik, WX.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Xk, WX.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(kk) {
        let {
          from: Fk,
          to: Ik
        } = kk, Xk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: Tk
        } = this.heightMap.lineAt(Fk, WX.ByPos, this.heightOracle, 0, 0), {
          bottom: ik
        } = this.heightMap.lineAt(Ik, WX.ByPos, this.heightOracle, 0, 0), {
          visibleTop: yk,
          visibleBottom: lk
        } = this;
        return (0 == Fk || Tk <= yk - Math.max(10, Math.min(-Xk, 250))) && (Ik == this.state.doc.length || ik >= lk + Math.max(10, Math.min(Xk, 250))) && Tk > yk - 2e3 && ik < lk + 2e3
      }
      mapLineGaps(kk, Fk) {
        if (!kk.length || Fk.empty) return kk;
        let Ik = [];
        for (let Xk of kk) Fk.touchesRange(Xk.from, Xk.to) || Ik.push(new IT(Fk.mapPos(Xk.from), Fk.mapPos(Xk.to), Xk.size, Xk.displaySize));
        return Ik
      }
      ensureLineGaps(kk, Fk) {
        let Ik = this.heightOracle.lineWrapping,
          Tk = Ik ? 1e4 : 2e3,
          ik = Tk >> 1,
          yk = Tk << 1;
        if (this.defaultTextDirection != LF.LTR && !Ik) return [];
        let lk = [],
          ak = (Tk, yk, qk, Lk) => {
            if (yk - Tk < ik) return;
            let tk = this.state.selection.main,
              Zk = [tk.from];
            tk.empty || Zk.push(tk.to);
            for (let kk of Zk)
              if (kk > Tk && kk < yk) return ak(Tk, kk - 10, qk, Lk), void ak(kk + 10, yk, qk, Lk);
            let jk = function(kk, Fk) {
              for (let Ik of kk)
                if (Fk(Ik)) return Ik;
              return
            }(kk, (kk => kk.from >= qk.from && kk.to <= qk.to && Math.abs(kk.from - Tk) < ik && Math.abs(kk.to - yk) < ik && !Zk.some((Fk => kk.from < Fk && kk.to > Fk))));
            if (!jk) {
              if (yk < qk.to && Fk && Ik && Fk.W9.some((kk => kk.from <= yk && kk.to >= yk))) {
                let kk = Fk.moveToLineBoundary(Xk.k.cursor(yk), !1, !0).head;
                kk > Tk && (yk = kk)
              }
              let kk = this.gapSize(qk, Tk, yk, Lk);
              jk = new IT(Tk, yk, kk, Ik || kk < 2e6 ? kk : 2e6)
            }
            lk.push(jk)
          },
          qk = Fk => {
            if (Fk.length < yk || Fk.type != Gk.Text) return;
            let ik = function(kk, Fk, Ik) {
              let Tk = [],
                ik = kk,
                yk = 0;
              Xk.A.spans(Ik, kk, Fk, {
                span() {},
                point(kk, Fk) {
                  kk > ik && (Tk.push({
                    from: ik,
                    to: kk
                  }), yk += kk - ik), ik = Fk
                }
              }, 20), ik < Fk && (Tk.push({
                from: ik,
                to: Fk
              }), yk += Fk - ik);
              return {
                total: yk,
                nZ: Tk
              }
            }(Fk.from, Fk.to, this.stateDeco);
            if (ik.total < yk) return;
            let lk, qk, Lk = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (Ik) {
              let kk, Ik, Xk = Tk / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != Lk) {
                let Tk = lT(ik, Lk),
                  yk = ((this.visibleBottom - this.visibleTop) / 2 + Xk) / Fk.height;
                kk = Tk - yk, Ik = Tk + yk
              } else kk = (this.visibleTop - Fk.top - Xk) / Fk.height, Ik = (this.visibleBottom - Fk.top + Xk) / Fk.height;
              lk = yT(ik, kk), qk = yT(ik, Ik)
            } else {
              let Ik = ik.total * this.heightOracle.charWidth,
                Xk = Tk * this.heightOracle.charWidth,
                yk = 0;
              if (Ik > 2e6)
                for (let Tk of kk) Tk.from >= Fk.from && Tk.from < Fk.to && Tk.size != Tk.displaySize && Tk.from * this.heightOracle.charWidth + yk < this.pixelViewport.left && (yk = Tk.size - Tk.displaySize);
              let ak, tk, Zk = this.pixelViewport.left + yk,
                jk = this.pixelViewport.right + yk;
              if (null != Lk) {
                let kk = lT(ik, Lk),
                  Fk = ((jk - Zk) / 2 + Xk) / Ik;
                ak = kk - Fk, tk = kk + Fk
              } else ak = (Zk - Xk) / Ik, tk = (jk + Xk) / Ik;
              lk = yT(ik, ak), qk = yT(ik, tk)
            }
            lk > Fk.from && ak(Fk.from, lk, Fk, ik), qk < Fk.to && ak(qk, Fk.to, Fk, ik)
          };
        for (let Xk of this.viewportLines) Array.isArray(Xk.type) ? Xk.type.forEach(qk) : qk(Xk);
        return lk
      }
      gapSize(kk, Fk, Ik, Xk) {
        let Tk = lT(Xk, Ik) - lT(Xk, Fk);
        return this.heightOracle.lineWrapping ? kk.height * Tk : Xk.total * this.heightOracle.charWidth * Tk
      }
      updateLineGaps(kk) {
        IT.same(kk, this.lineGaps) || (this.lineGaps = kk, this.lineGapDeco = pk.set(kk.map((kk => kk.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(kk) {
        let Fk = this.stateDeco;
        this.lineGaps.length && (Fk = Fk.concat(this.lineGapDeco));
        let Ik = [];
        Xk.A.spans(Fk, this.viewport.from, this.viewport.to, {
          span(kk, Fk) {
            Ik.push({
              from: kk,
              to: Fk
            })
          },
          point() {}
        }, 20);
        let Tk = 0;
        if (Ik.length != this.W9.length) Tk = 12;
        else
          for (let Xk = 0; Xk < Ik.length && !(8 & Tk); Xk++) {
            let Fk = this.W9[Xk],
              ik = Ik[Xk];
            Fk.from == ik.from && Fk.to == ik.to || (Tk |= 4, kk && kk.mapPos(Fk.from, -1) == ik.from && kk.mapPos(Fk.to, 1) == ik.to || (Tk |= 8))
          }
        return this.W9 = Ik, Tk
      }
      lineBlockAt(kk) {
        return kk >= this.viewport.from && kk <= this.viewport.to && this.viewportLines.find((Fk => Fk.from <= kk && Fk.to >= kk)) || tT(this.heightMap.lineAt(kk, WX.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(kk) {
        return kk >= this.viewportLines[0].top && kk <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((Fk => Fk.top <= kk && Fk.bottom >= kk)) || tT(this.heightMap.lineAt(this.scaler.fromDOM(kk), WX.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(kk) {
        let Fk = this.lineBlockAtHeight(kk + 8);
        return Fk.from >= this.viewport.from || this.viewportLines[0].top - kk > 200 ? Fk : this.viewportLines[0]
      }
      elementAtHeight(kk) {
        return tT(this.heightMap.blockAt(this.scaler.fromDOM(kk), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class iT {
      constructor(kk, Fk) {
        this.from = kk, this.to = Fk
      }
    }

    function yT(kk, Fk) {
      let {
        total: Ik,
        nZ: Xk
      } = kk;
      if (Fk <= 0) return Xk[0].from;
      if (Fk >= 1) return Xk[Xk.length - 1].to;
      let Tk = Math.floor(Ik * Fk);
      for (let ik = 0;; ik++) {
        let {
          from: kk,
          to: Fk
        } = Xk[ik], Ik = Fk - kk;
        if (Tk <= Ik) return kk + Tk;
        Tk -= Ik
      }
    }

    function lT(kk, Fk) {
      let Ik = 0;
      for (let {
          from: Xk,
          to: Tk
        }
        of kk.nZ) {
        if (Fk <= Tk) {
          Ik += Fk - Xk;
          break
        }
        Ik += Tk - Xk
      }
      return Ik / kk.total
    }
    const aT = {
      toDOM: kk => kk,
      fromDOM: kk => kk,
      scale: 1,
      eq(kk) {
        return kk == this
      }
    };

    function qT(kk) {
      let Fk = kk.facet(FI).filter((kk => "function" != typeof kk)),
        Ik = kk.facet(XI).filter((kk => "function" != typeof kk));
      return Ik.length && Fk.push(Xk.A.join(Ik)), Fk
    }
    class LT {
      constructor(kk, Fk, Ik) {
        let Xk = 0,
          Tk = 0,
          ik = 0;
        this.viewports = Ik.map((Ik => {
          let {
            from: Tk,
            to: ik
          } = Ik, yk = Fk.lineAt(Tk, WX.ByPos, kk, 0, 0).top, lk = Fk.lineAt(ik, WX.ByPos, kk, 0, 0).bottom;
          return Xk += lk - yk, {
            from: Tk,
            to: ik,
            top: yk,
            bottom: lk,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Xk) / (Fk.height - Xk);
        for (let yk of this.viewports) yk.domTop = ik + (yk.top - Tk) * this.scale, ik = yk.domBottom = yk.domTop + (yk.bottom - yk.top), Tk = yk.bottom
      }
      toDOM(kk) {
        for (let Fk = 0, Ik = 0, Xk = 0;; Fk++) {
          let Tk = Fk < this.viewports.length ? this.viewports[Fk] : null;
          if (!Tk || kk < Tk.top) return Xk + (kk - Ik) * this.scale;
          if (kk <= Tk.bottom) return Tk.domTop + (kk - Tk.top);
          Ik = Tk.bottom, Xk = Tk.domBottom
        }
      }
      fromDOM(kk) {
        for (let Fk = 0, Ik = 0, Xk = 0;; Fk++) {
          let Tk = Fk < this.viewports.length ? this.viewports[Fk] : null;
          if (!Tk || kk < Tk.domTop) return Ik + (kk - Xk) / this.scale;
          if (kk <= Tk.domBottom) return Tk.top + (kk - Tk.domTop);
          Ik = Tk.bottom, Xk = Tk.domBottom
        }
      }
      eq(kk) {
        return kk instanceof LT && (this.scale == kk.scale && this.viewports.length == kk.viewports.length && this.viewports.every(((Fk, Ik) => Fk.from == kk.viewports[Ik].from && Fk.to == kk.viewports[Ik].to)))
      }
    }

    function tT(kk, Fk) {
      if (1 == Fk.scale) return kk;
      let Ik = Fk.toDOM(kk.top),
        Xk = Fk.toDOM(kk.bottom);
      return new cX(kk.from, kk.length, Ik, Xk - Ik, Array.isArray(kk._content) ? kk._content.map((kk => tT(kk, Fk))) : kk._content)
    }
    const ZT = Xk.p.define({
        combine: kk => kk.join(" ")
      }),
      jT = Xk.p.define({
        combine: kk => kk.indexOf(!0) > -1
      }),
      eT = Tk.e.newName(),
      wT = Tk.e.newName(),
      HT = Tk.e.newName(),
      JT = {
        "&light": "." + wT,
        "&dark": "." + HT
      };

    function xT(kk, Fk, Ik) {
      return new Tk.e(Fk, {
        finish: Fk => /&/.test(Fk) ? Fk.replace(/&\w*/, (Fk => {
          if ("&" == Fk) return kk;
          if (!Ik || !Ik[Fk]) throw new RangeError(`Unsupported selector: ${Fk}`);
          return Ik[Fk]
        })) : kk + " " + Fk
      })
    }
    const PT = xT("." + eT, {
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
      }, JT),
      KT = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      QT = Vk.ie && Vk.ie_version <= 11;
    class sT {
      constructor(kk) {
        this.view = kk, this.active = !1, this.editContext = null, this.selectionRange = new kF, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = kk.contentDOM, this.observer = new MutationObserver((Fk => {
          for (let kk of Fk) this.queue.push(kk);
          (Vk.ie && Vk.ie_version <= 11 || Vk.ios && kk.composing) && Fk.some((kk => "childList" == kk.type && kk.removedNodes.length || "characterData" == kk.type && kk.oldValue.length > kk.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !Vk.android || !1 === kk.constructor.EDIT_CONTEXT || Vk.chrome && Vk.chrome_version < 126 || (this.editContext = new ST(kk), kk.state.facet(gF) && (kk.contentDOM.editContext = this.editContext.editContext)), QT && (this.onCharData = kk => {
          this.queue.push({
            target: kk.target,
            type: "characterData",
            oldValue: kk.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.PJ = this.PJ.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var kk;
          (null === (kk = this.view.docView) || void 0 === kk ? void 0 : kk.lastUpdate) < Date.now() - 75 && this.PJ()
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
      PJ() {
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
        if (this.gapIntersection && (kk.length != this.gaps.length || this.gaps.some(((Fk, Ik) => Fk != kk[Ik])))) {
          this.gapIntersection.disconnect();
          for (let Fk of kk) this.gapIntersection.observe(Fk);
          this.gaps = kk
        }
      }
      onSelectionChange(kk) {
        let Fk = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: Ik
        } = this, Xk = this.selectionRange;
        if (Ik.state.facet(gF) ? Ik.root.activeElement != this.dom : !fk(this.dom, Xk)) return;
        let Tk = Xk.anchorNode && Ik.docView.tile.nearest(Xk.anchorNode);
        Tk && Tk.isWidget() && Tk.widget.ignoreEvent(kk) ? Fk || (this.selectionChanged = !1) : (Vk.ie && Vk.ie_version <= 11 || Vk.android && Vk.chrome) && !Ik.state.selection.main.empty && Xk.focusNode && dk(Xk.focusNode, Xk.focusOffset, Xk.anchorNode, Xk.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: kk
        } = this, Fk = ck(kk.root);
        if (!Fk) return !1;
        let Ik = Vk.safari && 11 == kk.root.nodeType && kk.root.activeElement == this.dom && function(kk, Fk) {
          if (Fk.getComposedRanges) {
            let Ik = Fk.getComposedRanges(kk.root)[0];
            if (Ik) return zT(kk, Ik)
          }
          let Ik = null;

          function Xk(kk) {
            kk.preventDefault(), kk.stopImmediatePropagation(), Ik = kk.getTargetRanges()[0]
          }
          return kk.contentDOM.addEventListener("beforeinput", Xk, !0), kk.dom.ownerDocument.execCommand("indent"), kk.contentDOM.removeEventListener("beforeinput", Xk, !0), Ik ? zT(kk, Ik) : null
        }(this.view, Fk) || Fk;
        if (!Ik || this.selectionRange.eq(Ik)) return !1;
        let Xk = fk(this.dom, Ik);
        return Xk && !this.selectionChanged && kk.inputState.lastFocusTime > Date.now() - 200 && kk.inputState.lastTouchTime < Date.now() - 300 && function(kk, Fk) {
          let Ik = Fk.focusNode,
            Xk = Fk.focusOffset;
          if (!Ik || Fk.anchorNode != Ik || Fk.anchorOffset != Xk) return !1;
          for (Xk = Math.min(Xk, mk(Ik));;)
            if (Xk) {
              if (1 != Ik.nodeType) return !1;
              let kk = Ik.childNodes[Xk - 1];
              "false" == kk.contentEditable ? Xk-- : (Ik = kk, Xk = mk(Ik))
            } else {
              if (Ik == kk) return !0;
              Xk = Yk(Ik), Ik = Ik.parentNode
            }
        }(this.dom, Ik) ? (this.view.inputState.lastFocusTime = 0, kk.docView.updateSelection(), !1) : (this.selectionRange.setRange(Ik), Xk && (this.selectionChanged = !0), !0)
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
        for (let Ik = this.dom; Ik;)
          if (1 == Ik.nodeType) !Fk && kk < this.scrollTargets.length && this.scrollTargets[kk] == Ik ? kk++ : Fk || (Fk = this.scrollTargets.slice(0, kk)), Fk && Fk.push(Ik), Ik = Ik.assignedSlot || Ik.parentNode;
          else {
            if (11 != Ik.nodeType) break;
            Ik = Ik.host
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
        this.active || (this.observer.observe(this.dom, KT), QT && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), QT && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(kk, Fk) {
        var Ik;
        if (!this.delayedAndroidKey) {
          let kk = () => {
            let kk = this.delayedAndroidKey;
            if (kk) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = kk.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && kk.force && iF(this.dom, kk.key, kk.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(kk)
        }
        this.delayedAndroidKey && "Enter" != kk || (this.delayedAndroidKey = {
          key: kk,
          keyCode: Fk,
          force: this.lastChange < Date.now() - 50 || !!(null === (Ik = this.delayedAndroidKey) || void 0 === Ik ? void 0 : Ik.force)
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
          Ik = -1,
          Xk = !1;
        for (let Tk of kk) {
          let kk = this.readMutation(Tk);
          kk && (kk.typeOver && (Xk = !0), -1 == Fk ? ({
            from: Fk,
            to: Ik
          } = kk) : (Fk = Math.min(kk.from, Fk), Ik = Math.max(kk.to, Ik)))
        }
        return {
          from: Fk,
          to: Ik,
          typeOver: Xk
        }
      }
      readChange() {
        let {
          from: kk,
          to: Fk,
          typeOver: Ik
        } = this.processRecords(), Xk = this.selectionChanged && fk(this.dom, this.selectionRange);
        if (kk < 0 && !Xk) return null;
        kk > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let Tk = new XX(this.view, kk, Fk, Ik);
        return this.view.docView.domChanged = {
          newSel: Tk.newSel ? Tk.newSel.main : null
        }, Tk
      }
      flush() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        kk && this.readSelectionRange();
        let Fk = this.readChange();
        if (!Fk) return this.view.requestMeasure(), !1;
        let Ik = this.view.state,
          Xk = iX(this.view, Fk);
        return this.view.state == Ik && (Fk.domChanged || Fk.newSel && !aX(this.view.state.selection, Fk.newSel.main)) && this.view.update([]), Xk
      }
      readMutation(kk) {
        let Fk = this.view.docView.tile.nearest(kk.target);
        if (!Fk || Fk.isWidget()) return null;
        if (Fk.markDirty("attributes" == kk.type), "childList" == kk.type) {
          let Ik = VT(Fk, kk.previousSibling || kk.target.previousSibling, -1),
            Xk = VT(Fk, kk.nextSibling || kk.target.nextSibling, 1);
          return {
            from: Ik ? Fk.posAfter(Ik) : Fk.posAtStart,
            to: Xk ? Fk.posBefore(Xk) : Fk.posAtEnd,
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
        kk.addEventListener("resize", this.PJ), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : kk.addEventListener("beforeprint", this.onPrint), kk.addEventListener("scroll", this.onScroll), kk.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(kk) {
        kk.removeEventListener("scroll", this.onScroll), kk.removeEventListener("resize", this.PJ), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : kk.removeEventListener("beforeprint", this.onPrint), kk.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(kk) {
        this.editContext && (this.editContext.update(kk), kk.startState.facet(gF) != kk.state.facet(gF) && (kk.view.contentDOM.editContext = kk.state.facet(gF) ? this.editContext.editContext : null))
      }
      destroy() {
        var kk, Fk, Ik;
        this.stop(), null === (kk = this.intersection) || void 0 === kk || kk.disconnect(), null === (Fk = this.gapIntersection) || void 0 === Fk || Fk.disconnect(), null === (Ik = this.resizeScroll) || void 0 === Ik || Ik.disconnect();
        for (let Xk of this.scrollTargets) Xk.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function VT(kk, Fk, Ik) {
      for (; Fk;) {
        let Xk = jI.get(Fk);
        if (Xk && Xk.parent == kk) return Xk;
        let Tk = Fk.parentNode;
        Fk = Tk != kk.dom ? Tk : Ik > 0 ? Fk.nextSibling : Fk.previousSibling
      }
      return null
    }

    function zT(kk, Fk) {
      let Ik = Fk.startContainer,
        Xk = Fk.startOffset,
        Tk = Fk.endContainer,
        ik = Fk.endOffset,
        yk = kk.docView.domAtPos(kk.state.selection.main.anchor, 1);
      return dk(yk.node, yk.offset, Tk, ik) && ([Ik, Xk, Tk, ik] = [Tk, ik, Ik, Xk]), {
        anchorNode: Ik,
        anchorOffset: Xk,
        focusNode: Tk,
        focusOffset: ik
      }
    }
    class ST {
      constructor(kk) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(kk.state);
        let Fk = this.editContext = new window.EditContext({
          text: kk.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, kk.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(kk.state.selection.main.head)
        });
        this.handlers.textupdate = Ik => {
          let Tk = kk.state.selection.main,
            {
              anchor: ik,
              head: yk
            } = Tk,
            lk = this.toEditorPos(Ik.updateRangeStart),
            ak = this.toEditorPos(Ik.updateRangeEnd);
          kk.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: Ik.updateRangeStart,
            editorBase: lk,
            drifted: !1
          });
          let qk = ak - lk > Ik.text.length;
          lk == this.from && ik < this.from ? lk = ik : ak == this.to && ik > this.to && (ak = ik);
          let Lk = lX(kk.state.sliceDoc(lk, ak), Ik.text, (qk ? Tk.from : Tk.to) - lk, qk ? "end" : null);
          if (!Lk) {
            let Fk = Xk.k.single(this.toEditorPos(Ik.selectionStart), this.toEditorPos(Ik.selectionEnd));
            return void(aX(Fk, Tk) || kk.dispatch({
              selection: Fk,
              userEvent: "select"
            }))
          }
          let tk = {
            from: Lk.from + lk,
            to: Lk.toA + lk,
            insert: Xk.J.of(Ik.text.slice(Lk.from, Lk.toB).split("\n"))
          };
          if ((Vk.mac || Vk.android) && tk.from == yk - 1 && /^\. ?$/.test(Ik.text) && "off" == kk.contentDOM.getAttribute("autocorrect") && (tk = {
              from: lk,
              to: ak,
              insert: Xk.J.of([Ik.text.replace(".", " ")])
            }), this.pendingContextChange = tk, !kk.state.readOnly) {
            let Fk = this.to - this.from + (tk.to - tk.from + tk.insert.length);
            yX(kk, tk, Xk.k.single(this.toEditorPos(Ik.selectionStart, Fk), this.toEditorPos(Ik.selectionEnd, Fk)))
          }
          this.pendingContextChange && (this.revertPending(kk.state), this.setSelection(kk.state)), tk.from < tk.to && !tk.insert.length && kk.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(Fk.text.slice(Math.max(0, Ik.updateRangeStart - 1), Math.min(Fk.text.length, Ik.updateRangeStart + 1))) && this.handlers.compositionend(Ik)
        }, this.handlers.characterboundsupdate = Ik => {
          let Xk = [],
            Tk = null;
          for (let Fk = this.toEditorPos(Ik.rangeStart), ik = this.toEditorPos(Ik.rangeEnd); Fk < ik; Fk++) {
            let Ik = kk.coordsForChar(Fk);
            Tk = Ik && new DOMRect(Ik.left, Ik.top, Ik.right - Ik.left, Ik.bottom - Ik.top) || Tk || new DOMRect, Xk.push(Tk)
          }
          Fk.updateCharacterBounds(Ik.rangeStart, Xk)
        }, this.handlers.textformatupdate = Fk => {
          let Ik = [];
          for (let kk of Fk.getTextFormats()) {
            let Fk = kk.underlineStyle,
              Xk = kk.underlineThickness;
            if (!/none/i.test(Fk) && !/none/i.test(Xk)) {
              let Tk = this.toEditorPos(kk.rangeStart),
                ik = this.toEditorPos(kk.rangeEnd);
              if (Tk < ik) {
                let kk = `text-decoration: underline ${/^[a-z]/.test(Fk)?Fk+" ":"Dashed"==Fk?"dashed ":"Squiggle"==Fk?"wavy ":""}${/thin/i.test(Xk)?1:2}px`;
                Ik.push(pk.mark({
                  attributes: {
                    style: kk
                  }
                }).range(Tk, ik))
              }
            }
          }
          kk.dispatch({
            effects: YF.of(pk.set(Ik))
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
        for (let Ik in this.handlers) Fk.addEventListener(Ik, this.handlers[Ik]);
        this.measureReq = {
          read: kk => {
            this.editContext.updateControlBounds(kk.contentDOM.getBoundingClientRect());
            let Fk = ck(kk.root);
            Fk && Fk.rangeCount && this.editContext.updateSelectionBounds(Fk.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(kk) {
        let Fk = 0,
          Ik = !1,
          Xk = this.pendingContextChange;
        return kk.changes.iterChanges(((Tk, ik, yk, lk, ak) => {
          if (Ik) return;
          let qk = ak.length - (ik - Tk);
          if (Xk && ik >= Xk.to) {
            if (Xk.from == Tk && Xk.to == ik && Xk.insert.eq(ak)) return Xk = this.pendingContextChange = null, Fk += qk, void(this.to += qk);
            Xk = null, this.revertPending(kk.state)
          }
          if (Tk += Fk, (ik += Fk) <= this.from) this.from += qk, this.to += qk;
          else if (Tk < this.to) {
            if (Tk < this.from || ik > this.to || this.to - this.from + ak.length > 3e4) return void(Ik = !0);
            this.editContext.updateText(this.toContextPos(Tk), this.toContextPos(ik), ak.toString()), this.to += qk
          }
          Fk += qk
        })), Xk && !Ik && this.revertPending(kk.state), !Ik
      }
      update(kk) {
        let Fk = this.pendingContextChange,
          Ik = kk.startState.selection.main;
        this.composing && (this.composing.drifted || !kk.changes.touchesRange(Ik.from, Ik.to) && kk.transactions.some((kk => !kk.isUserEvent("input.type") && kk.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = kk.changes.mapPos(this.composing.editorBase)) : this.applyEdits(kk) && this.rangeIsValid(kk.state) ? (kk.docChanged || kk.selectionSet || Fk) && this.setSelection(kk.state) : (this.pendingContextChange = null, this.reset(kk.state)), (kk.geometryChanged || kk.docChanged || kk.selectionSet) && kk.view.requestMeasure(this.measureReq)
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
        } = kk.selection, Ik = this.toContextPos(Math.max(this.from, Math.min(this.to, Fk.anchor))), Xk = this.toContextPos(Fk.head);
        this.editContext.selectionStart == Ik && this.editContext.selectionEnd == Xk || this.editContext.updateSelection(Ik, Xk)
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
        let Ik = this.composing;
        return Ik && Ik.drifted ? Ik.editorBase + (kk - Ik.contextBase) : kk + this.from
      }
      toContextPos(kk) {
        let Fk = this.composing;
        return Fk && Fk.drifted ? Fk.contextBase + (kk - Fk.editorBase) : kk - this.from
      }
      destroy() {
        for (let kk in this.handlers) this.editContext.removeEventListener(kk, this.handlers[kk])
      }
    }
    class oT {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get W9() {
        return this.viewState.W9
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
          dispatch: Ik
        } = kk;
        this.dispatchTransactions = kk.dispatchTransactions || Ik && (kk => kk.forEach((kk => Ik(kk, this)))) || (kk => this.update(kk)), this.dispatch = this.dispatch.bind(this), this._root = kk.root || function(kk) {
          for (; kk;) {
            if (kk && (9 == kk.nodeType || 11 == kk.nodeType && kk.host)) return kk;
            kk = kk.assignedSlot || kk.parentNode
          }
          return null
        }(kk.parent) || document, this.viewState = new TT(this, kk.state || Xk.m.create(kk)), kk.scrollTo && kk.scrollTo.is(dF) && (this.viewState.scrollTarget = kk.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(hF).map((kk => new DF(kk)));
        for (let Xk of this.plugins) Xk.update(this);
        this.observer = new sT(this), this.inputState = new qX(this), this.inputState.ensureHandlers(this.plugins), this.docView = new UI(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (Fk = document.fonts) || void 0 === Fk ? void 0 : Fk.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
        let Tk = 1 == Fk.length && Fk[0] instanceof Xk.L ? Fk : 1 == Fk.length && Array.isArray(Fk[0]) ? Fk[0] : [this.state.update(...Fk)];
        this.dispatchTransactions(Tk, this)
      }
      update(kk) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let Fk, Ik = !1,
          Tk = !1,
          ik = this.state;
        for (let Xk of kk) {
          if (Xk.startState != ik) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          ik = Xk.state
        }
        if (this.destroyed) return void(this.viewState.state = ik);
        let yk = this.hasFocus,
          lk = 0,
          ak = null;
        kk.some((kk => kk.annotation(nX))) ? (this.inputState.notifiedFocused = yk, lk = 1) : yk != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = yk, ak = GX(ik, yk), ak || (lk = 1));
        let qk = this.observer.delayedAndroidKey,
          Lk = null;
        if (qk ? (this.observer.clearDelayedAndroidKey(), Lk = this.observer.readChange(), (Lk && !this.state.doc.eq(ik.doc) || !this.state.selection.eq(ik.selection)) && (Lk = null)) : this.observer.clear(), ik.facet(Xk.m.phrases) != this.state.facet(Xk.m.phrases)) return this.setState(ik);
        Fk = tI.create(this, ik, kk), Fk.flags |= lk;
        let tk = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let Fk of kk) {
            if (tk && (tk = tk.map(Fk.changes)), Fk.scrollIntoView) {
              let {
                main: kk
              } = Fk.state.selection, {
                x: Ik,
                y: Tk
              } = this.state.facet(oT.cursorScrollMargin);
              tk = new BF(kk.empty ? kk : Xk.k.cursor(kk.head, kk.head > kk.anchor ? -1 : 1), "nearest", "nearest", Tk, Ik)
            }
            for (let kk of Fk.effects) kk.is(dF) && (tk = kk.value.clip(this.state))
          }
          this.viewState.update(Fk, tk), this.bidiCache = OT.update(this.bidiCache, Fk.changes), Fk.empty || (this.updatePlugins(Fk), this.inputState.update(Fk)), Ik = this.docView.update(Fk), this.state.facet(qI) != this.styleModules && this.mountStyles(), Tk = this.updateAttrs(), this.showAnnouncements(kk), this.docView.updateSelection(Ik, kk.some((kk => kk.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (Fk.startState.facet(ZT) != Fk.state.facet(ZT) && (this.viewState.mustMeasureContent = !0), (Ik || Tk || tk || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), Ik && this.docViewUpdate(), !Fk.empty)
          for (let Xk of this.state.facet(bF)) try {
            Xk(Fk)
          } catch (Zk) {
            AF(this.state, Zk, "update listener")
          }(ak || Lk) && Promise.resolve().then((() => {
            ak && this.state == ak.startState && this.dispatch(ak), Lk && !iX(this, Lk) && qk.force && iF(this.contentDOM, qk.key, qk.keyCode)
          }))
      }
      setState(kk) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = kk);
        this.updateState = 2;
        let Fk = this.hasFocus;
        try {
          for (let kk of this.plugins) kk.destroy(this);
          this.viewState = new TT(this, kk), this.plugins = kk.facet(hF).map((kk => new DF(kk))), this.pluginMap.clear();
          for (let kk of this.plugins) kk.update(this);
          this.docView.destroy(), this.docView = new UI(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        Fk && this.focus(), this.requestMeasure()
      }
      updatePlugins(kk) {
        let Fk = kk.startState.facet(hF),
          Ik = kk.state.facet(hF);
        if (Fk != Ik) {
          let Xk = [];
          for (let Tk of Ik) {
            let Ik = Fk.indexOf(Tk);
            if (Ik < 0) Xk.push(new DF(Tk));
            else {
              let Fk = this.plugins[Ik];
              Fk.mustUpdate = kk, Xk.push(Fk)
            }
          }
          for (let Fk of this.plugins) Fk.mustUpdate != kk && Fk.destroy(this);
          this.plugins = Xk, this.pluginMap.clear()
        } else
          for (let Xk of this.plugins) Xk.mustUpdate = kk;
        for (let Xk = 0; Xk < this.plugins.length; Xk++) this.plugins[Xk].update(this);
        Fk != Ik && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let Fk of this.plugins) {
          let Ik = Fk.value;
          if (Ik && Ik.docViewUpdate) try {
            Ik.docViewUpdate(this)
          } catch (kk) {
            AF(this.state, kk, "doc view update listener")
          }
        }
      }
      measure() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, kk && this.observer.forceFlush();
        let Fk = null,
          Ik = this.viewState.scrollParent,
          Xk = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: Tk,
            scrollAnchorHeight: ik
          } = this.viewState;
        Math.abs(Xk - this.viewState.scrollOffset) > 1 && (ik = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let kk = 0;; kk++) {
            if (ik < 0)
              if (yF(Ik || this.win)) Tk = -1, ik = this.viewState.heightMap.height;
              else {
                let kk = this.viewState.scrollAnchorAt(Xk);
                Tk = kk.from, ik = kk.top
              } this.updateState = 1;
            let lk = this.viewState.measure();
            if (!lk && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (kk > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let ak = [];
            4 & lk || ([this.measureRequests, ak] = [ak, this.measureRequests]);
            let qk = ak.map((kk => {
                try {
                  return kk.read(this)
                } catch (Fk) {
                  return AF(this.state, Fk), ET
                }
              })),
              Lk = tI.create(this, this.state, []),
              tk = !1;
            Lk.flags |= lk, Fk ? Fk.flags |= lk : Fk = Lk, this.updateState = 2, Lk.empty || (this.updatePlugins(Lk), this.inputState.update(Lk), this.updateAttrs(), tk = this.docView.update(Lk), tk && this.docViewUpdate());
            for (let kk = 0; kk < ak.length; kk++)
              if (qk[kk] != ET) try {
                let Fk = ak[kk];
                Fk.write && Fk.write(qk[kk], this)
              } catch (yk) {
                AF(this.state, yk)
              }
            if (tk && this.docView.updateSelection(!0), !Lk.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, ik = -1;
                  continue
                } {
                  let kk = ((Tk < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(Tk).top) - ik) / this.scaleY;
                  if ((kk > 1 || kk < -1) && (Ik == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Xk += kk, Ik ? Ik.scrollTop += kk : this.win.scrollBy(0, kk), ik = -1;
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
          for (let lk of this.state.facet(bF)) lk(Fk)
      }
      get themeClasses() {
        return eT + " " + (this.state.facet(jT) ? HT : wT) + " " + this.state.facet(ZT)
      }
      updateAttrs() {
        let kk = nT(this, MF, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          Fk = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(gF) ? "true" : "false",
            class: "cm-content",
            style: `${Vk.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (Fk["aria-readonly"] = "true"), nT(this, kI, Fk);
        let Ik = this.observer.ignore((() => {
          let Ik = Ek(this.contentDOM, this.contentAttrs, Fk),
            Xk = Ek(this.dom, this.editorAttrs, kk);
          return Ik || Xk
        }));
        return this.editorAttrs = kk, this.contentAttrs = Fk, Ik
      }
      showAnnouncements(kk) {
        let Fk = !0;
        for (let Ik of kk)
          for (let kk of Ik.effects)
            if (kk.is(oT.announce)) {
              Fk && (this.announceDOM.textContent = ""), Fk = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = kk.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(qI);
        let kk = this.state.facet(oT.cspNonce);
        Tk.e.mount(this.root, this.styleModules.concat(PT).reverse(), kk ? {
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
      moveByChar(kk, Fk, Ik) {
        return gI(this, kk, dI(this, kk, Fk, Ik))
      }
      moveByGroup(kk, Fk) {
        return gI(this, kk, dI(this, kk, Fk, (Fk => function(kk, Fk, Ik) {
          let Tk = kk.state.charCategorizer(Fk),
            ik = Tk(Ik);
          return kk => {
            let Fk = Tk(kk);
            return ik == Xk.h.Space && (ik = Fk), ik == Fk
          }
        }(this, kk.head, Fk))))
      }
      visualLineSide(kk, Fk) {
        let Ik = this.bidiSpans(kk),
          Tk = this.textDirectionAt(kk.from),
          ik = Ik[Fk ? Ik.length - 1 : 0];
        return Xk.k.cursor(ik.side(Fk, Tk) + kk.from, ik.forward(!Fk, Tk) ? 1 : -1)
      }
      moveToLineBoundary(kk, Fk) {
        return function(kk, Fk, Ik, Tk) {
          let ik = BI(kk, Fk.head, Fk.assoc || -1),
            yk = Tk && ik.type == Gk.Text && (kk.lineWrapping || ik.widgetLineBreaks) ? kk.coordsAtPos(Fk.assoc < 0 && Fk.head > ik.from ? Fk.head - 1 : Fk.head) : null;
          if (yk) {
            let Fk = kk.dom.getBoundingClientRect(),
              Tk = kk.textDirectionAt(ik.from),
              lk = kk.posAtCoords({
                x: Ik == (Tk == LF.LTR) ? Fk.right - 1 : Fk.left + 1,
                y: (yk.top + yk.bottom) / 2
              });
            if (null != lk) return Xk.k.cursor(lk, Ik ? -1 : 1)
          }
          return Xk.k.cursor(Ik ? ik.to : ik.from, Ik ? -1 : 1)
        }(this, kk, Fk, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(kk, Fk, Ik) {
        return gI(this, kk, function(kk, Fk, Ik, Tk) {
          let ik = Fk.head,
            yk = Ik ? 1 : -1;
          if (ik == (Ik ? kk.state.doc.length : 0)) return Xk.k.cursor(ik, Fk.assoc);
          let lk, ak = Fk.goalColumn,
            qk = kk.contentDOM.getBoundingClientRect(),
            Lk = kk.coordsAtPos(ik, Fk.assoc || ((Fk.empty ? Ik : Fk.head == Fk.from) ? 1 : -1)),
            tk = kk.documentTop;
          if (Lk) null == ak && (ak = Lk.left - qk.left), lk = yk < 0 ? Lk.top : Lk.bottom;
          else {
            let Fk = kk.viewState.lineBlockAt(ik);
            null == ak && (ak = Math.min(qk.right - qk.left, kk.defaultCharacterWidth * (ik - Fk.from))), lk = (yk < 0 ? Fk.top : Fk.bottom) + tk
          }
          let Zk = qk.left + ak,
            jk = kk.viewState.heightOracle.textHeight >> 1,
            ek = null !== Tk && void 0 !== Tk ? Tk : jk;
          for (let wk = 0;; wk += jk) {
            let Fk = lk + (ek + wk) * yk,
              Tk = hI(kk, {
                x: Zk,
                y: Fk
              }, !1, yk);
            if (Ik ? Fk > qk.bottom : Fk < qk.top) return Xk.k.cursor(Tk.pos, Tk.assoc);
            let ik = kk.coordsAtPos(Tk.pos, Tk.assoc),
              Lk = ik ? (ik.top + ik.bottom) / 2 : 0;
            if (!ik || (Ik ? Lk > lk : Lk < lk)) return Xk.k.cursor(Tk.pos, Tk.assoc, void 0, ak)
          }
        }(this, kk, Fk, Ik))
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
        let Ik = hI(this, kk, Fk);
        return Ik && Ik.pos
      }
      posAndSideAtCoords(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), hI(this, kk, Fk)
      }
      coordsAtPos(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let Ik = this.docView.coordsAt(kk, Fk);
        if (!Ik || Ik.left == Ik.right) return Ik;
        let Xk = this.state.doc.lineAt(kk),
          Tk = this.bidiSpans(Xk);
        return hk(Ik, Tk[KF.find(Tk, kk - Xk.from, -1, Fk)].dir == LF.LTR == Fk > 0)
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
        return !this.state.facet(cF) || kk < this.viewport.from || kk > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(kk))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(kk) {
        if (kk.length > vT) return oF(kk.length);
        let Fk, Ik = this.textDirectionAt(kk.from);
        for (let Tk of this.bidiCache)
          if (Tk.from == kk.from && Tk.dir == Ik && (Tk.fresh || QF(Tk.isolates, Fk = yI(this, kk)))) return Tk.order;
        Fk || (Fk = yI(this, kk));
        let Xk = SF(kk.text, Ik, Fk);
        return this.bidiCache.push(new OT(kk.from, kk.to, Ik, Fk, !0, Xk)), Xk
      }
      get hasFocus() {
        var kk;
        return (this.dom.ownerDocument.hasFocus() || Vk.safari && (null === (kk = this.inputState) || void 0 === kk ? void 0 : kk.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          XF(this.contentDOM), this.docView.updateSelection()
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
        var Ik, Tk, ik, yk;
        return dF.of(new BF("number" == typeof kk ? Xk.k.cursor(kk) : kk, null !== (Ik = Fk.y) && void 0 !== Ik ? Ik : "nearest", null !== (Tk = Fk.x) && void 0 !== Tk ? Tk : "nearest", null !== (ik = Fk.yMargin) && void 0 !== ik ? ik : 5, null !== (yk = Fk.xMargin) && void 0 !== yk ? yk : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: kk,
          scrollLeft: Fk
        } = this.scrollDOM, Ik = this.viewState.scrollAnchorAt(kk);
        return dF.of(new BF(Xk.k.cursor(Ik.from), "start", "start", Ik.top - kk, Fk, !0))
      }
      setTabFocusMode(kk) {
        null == kk ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof kk ? this.inputState.tabFocusMode = kk ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + kk)
      }
      static domEventHandlers(kk) {
        return rF.define((() => ({})), {
          eventHandlers: kk
        })
      }
      static domEventObservers(kk) {
        return rF.define((() => ({})), {
          eventObservers: kk
        })
      }
      static theme(kk, Fk) {
        let Ik = Tk.e.newName(),
          Xk = [ZT.of(Ik), qI.of(xT(`.${Ik}`, kk))];
        return Fk && Fk.dark && Xk.push(jT.of(!0)), Xk
      }
      static baseTheme(kk) {
        return Xk.u.lowest(qI.of(xT("." + eT, kk, JT)))
      }
      static findFromDOM(kk) {
        var Fk;
        let Ik = kk.querySelector(".cm-content"),
          Xk = Ik && jI.get(Ik) || jI.get(kk);
        return (null === (Fk = null === Xk || void 0 === Xk ? void 0 : Xk.root) || void 0 === Fk ? void 0 : Fk.view) || null
      }
    }
    oT.styleModule = qI, oT.inputHandler = RF, oT.clipboardInputFilter = CF, oT.clipboardOutputFilter = NF, oT.scrollHandler = fF, oT.focusChangeEffect = UF, oT.perLineTextDirection = cF, oT.exceptionSink = uF, oT.updateListener = bF, oT.editable = gF, oT.mouseSelectionStyle = pF, oT.dragMovesSelection = GF, oT.clickAddsSelectionRange = nF, oT.wk = FI, oT.blockWrappers = II, oT.outerDecorations = XI, oT.atomicRanges = TI, oT.bidiIsolatedRanges = iI, oT.cursorScrollMargin = Xk.p.define({
      combine: kk => {
        let Fk = 5,
          Ik = 5;
        for (let Xk of kk) "number" == typeof Xk ? Fk = Ik = Xk : ({
          x: Fk,
          y: Ik
        } = Xk);
        return {
          x: Fk,
          y: Ik
        }
      }
    }), oT.scrollMargins = lI, oT.darkTheme = jT, oT.cspNonce = Xk.p.define({
      combine: kk => kk.length ? kk[0] : ""
    }), oT.contentAttributes = kI, oT.editorAttributes = MF, oT.lineWrapping = oT.contentAttributes.of({
      class: "cm-lineWrapping"
    }), oT.announce = Xk.F.define();
    const vT = 4096,
      ET = {};
    class OT {
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        this.from = kk, this.to = Fk, this.dir = Ik, this.isolates = Xk, this.fresh = Tk, this.order = ik
      }
      static update(kk, Fk) {
        if (Fk.empty && !kk.some((kk => kk.fresh))) return kk;
        let Ik = [],
          Xk = kk.length ? kk[kk.length - 1].dir : LF.LTR;
        for (let Tk = Math.max(0, kk.length - 10); Tk < kk.length; Tk++) {
          let ik = kk[Tk];
          ik.dir != Xk || Fk.touchesRange(ik.from, ik.to) || Ik.push(new OT(Fk.mapPos(ik.from, 1), Fk.mapPos(ik.to, -1), ik.dir, ik.isolates, !1, ik.order))
        }
        return Ik
      }
    }

    function nT(kk, Fk, Ik) {
      for (let Xk = kk.state.facet(Fk), Tk = Xk.length - 1; Tk >= 0; Tk--) {
        let Fk = Xk[Tk],
          ik = "function" == typeof Fk ? Fk(kk) : Fk;
        ik && zk(ik, Ik)
      }
      return Ik
    }
    const GT = Vk.mac ? "mac" : Vk.windows ? "win" : Vk.linux ? "linux" : "key";

    function pT(kk, Fk, Ik) {
      return Fk.altKey && (kk = "Alt-" + kk), Fk.ctrlKey && (kk = "Ctrl-" + kk), Fk.metaKey && (kk = "Meta-" + kk), !1 !== Ik && Fk.shiftKey && (kk = "Shift-" + kk), kk
    }
    const uT = Xk.u.default(oT.domEventHandlers({
        keydown: (kk, Fk) => fT(UT(Fk.state), kk, Fk, "editor")
      })),
      bT = Xk.p.define({
        enables: uT
      }),
      RT = new WeakMap;

    function UT(kk) {
      let Fk = kk.facet(bT),
        Ik = RT.get(Fk);
      return Ik || RT.set(Fk, Ik = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GT,
          Ik = Object.create(null),
          Xk = Object.create(null),
          Tk = (kk, Fk) => {
            let Ik = Xk[kk];
            if (null == Ik) Xk[kk] = Fk;
            else if (Ik != Fk) throw new Error("Key binding " + kk + " is used both as a regular binding and as a multi-stroke prefix")
          },
          ik = (kk, Xk, ik, yk, lk) => {
            var ak, qk;
            let Lk = Ik[kk] || (Ik[kk] = Object.create(null)),
              tk = Xk.split(/ (?!$)/).map((kk => function(kk, Fk) {
                const Ik = kk.split(/-(?!$)/);
                let Xk, Tk, ik, yk, lk = Ik[Ik.length - 1];
                "Space" == lk && (lk = " ");
                for (let ak = 0; ak < Ik.length - 1; ++ak) {
                  const kk = Ik[ak];
                  if (/^(cmd|meta|m)$/i.test(kk)) yk = !0;
                  else if (/^a(lt)?$/i.test(kk)) Xk = !0;
                  else if (/^(c|ctrl|control)$/i.test(kk)) Tk = !0;
                  else if (/^s(hift)?$/i.test(kk)) ik = !0;
                  else {
                    if (!/^mod$/i.test(kk)) throw new Error("Unrecognized modifier name: " + kk);
                    "mac" == Fk ? yk = !0 : Tk = !0
                  }
                }
                return Xk && (lk = "Alt-" + lk), Tk && (lk = "Ctrl-" + lk), yk && (lk = "Meta-" + lk), ik && (lk = "Shift-" + lk), lk
              }(kk, Fk)));
            for (let Fk = 1; Fk < tk.length; Fk++) {
              let Ik = tk.slice(0, Fk).join(" ");
              Tk(Ik, !0), Lk[Ik] || (Lk[Ik] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [Fk => {
                  let Xk = NT = {
                    view: Fk,
                    prefix: Ik,
                    scope: kk
                  };
                  return setTimeout((() => {
                    NT == Xk && (NT = null)
                  }), cT), !0
                }]
              })
            }
            let Zk = tk.join(" ");
            Tk(Zk, !1);
            let jk = Lk[Zk] || (Lk[Zk] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (qk = null === (ak = Lk._any) || void 0 === ak ? void 0 : ak.run) || void 0 === qk ? void 0 : qk.slice()) || []
            });
            ik && jk.run.push(ik), yk && (jk.preventDefault = !0), lk && (jk.stopPropagation = !0)
          };
        for (let yk of kk) {
          let kk = yk.scope ? yk.scope.split(" ") : ["editor"];
          if (yk.any)
            for (let Fk of kk) {
              let kk = Ik[Fk] || (Ik[Fk] = Object.create(null));
              kk._any || (kk._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Xk
              } = yk;
              for (let Fk in kk) kk[Fk].run.push((kk => Xk(kk, WT)))
            }
          let Xk = yk[Fk] || yk.key;
          if (Xk)
            for (let Fk of kk) ik(Fk, Xk, yk.run, yk.preventDefault, yk.stopPropagation), yk.shift && ik(Fk, "Shift-" + Xk, yk.shift, yk.preventDefault, yk.stopPropagation)
        }
        return Ik
      }(Fk.reduce(((kk, Fk) => kk.concat(Fk)), []))), Ik
    }

    function CT(kk, Fk, Ik) {
      return fT(UT(kk.state), Fk, kk, Ik)
    }
    let NT = null;
    const cT = 4e3;
    let WT = null;

    function fT(kk, Fk, Ik, Tk) {
      WT = Fk;
      let qk = function(kk) {
          var Fk = !(lk && kk.metaKey && kk.shiftKey && !kk.ctrlKey && !kk.altKey || ak && kk.shiftKey && kk.key && 1 == kk.key.length || "Unidentified" == kk.key) && kk.key || (kk.shiftKey ? yk : ik)[kk.keyCode] || kk.key || "Unidentified";
          return "Esc" == Fk && (Fk = "Escape"), "Del" == Fk && (Fk = "Delete"), "Left" == Fk && (Fk = "ArrowLeft"), "Up" == Fk && (Fk = "ArrowUp"), "Right" == Fk && (Fk = "ArrowRight"), "Down" == Fk && (Fk = "ArrowDown"), Fk
        }(Fk),
        Lk = (0, Xk.M)(qk, 0),
        tk = (0, Xk.O)(Lk) == qk.length && " " != qk,
        Zk = "",
        jk = !1,
        ek = !1,
        wk = !1;
      NT && NT.view == Ik && NT.scope == Tk && (Zk = NT.prefix + " ", eX.indexOf(Fk.keyCode) < 0 && (ek = !0, NT = null));
      let Hk, Jk, xk = new Set,
        Pk = kk => {
          if (kk) {
            for (let Fk of kk.run)
              if (!xk.has(Fk) && (xk.add(Fk), Fk(Ik))) return kk.stopPropagation && (wk = !0), !0;
            kk.preventDefault && (kk.stopPropagation && (wk = !0), ek = !0)
          }
          return !1
        },
        Kk = kk[Tk];
      return Kk && (Pk(Kk[Zk + pT(qk, Fk, !tk)]) ? jk = !0 : !tk || !(Fk.altKey || Fk.metaKey || Fk.ctrlKey) || Vk.windows && Fk.ctrlKey && Fk.altKey || Vk.mac && Fk.altKey && !Fk.ctrlKey && !Fk.metaKey || !(Hk = ik[Fk.keyCode]) || Hk == qk ? tk && Fk.shiftKey && Pk(Kk[Zk + pT(qk, Fk, !0)]) && (jk = !0) : (Pk(Kk[Zk + pT(Hk, Fk, !0)]) || Fk.shiftKey && (Jk = yk[Fk.keyCode]) != qk && Jk != Hk && Pk(Kk[Zk + pT(Jk, Fk, !1)])) && (jk = !0), !jk && Pk(Kk._any) && (jk = !0)), ek && (jk = !0), jk && wk && Fk.stopPropagation(), WT = null, jk
    }
    class BT {
      constructor(kk, Fk, Ik, Xk, Tk) {
        this.className = kk, this.left = Fk, this.top = Ik, this.width = Xk, this.height = Tk
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
      static forRange(kk, Fk, Ik) {
        if (Ik.empty) {
          let Xk = kk.coordsAtPos(Ik.head, Ik.assoc || 1);
          if (!Xk) return [];
          let Tk = dT(kk);
          return [new BT(Fk, Xk.left - Tk.left, Xk.top - Tk.top, null, Xk.bottom - Xk.top)]
        }
        return function(kk, Fk, Ik) {
          if (Ik.to <= kk.viewport.from || Ik.from >= kk.viewport.to) return [];
          let Xk = Math.max(Ik.from, kk.viewport.from),
            Tk = Math.min(Ik.to, kk.viewport.to),
            ik = kk.textDirection == LF.LTR,
            yk = kk.contentDOM,
            lk = yk.getBoundingClientRect(),
            ak = dT(kk),
            qk = yk.querySelector(".cm-line"),
            Lk = qk && window.getComputedStyle(qk),
            tk = lk.left + (Lk ? parseInt(Lk.paddingLeft) + Math.min(0, parseInt(Lk.textIndent)) : 0),
            Zk = lk.right - (Lk ? parseInt(Lk.paddingRight) : 0),
            jk = BI(kk, Xk, 1),
            ek = BI(kk, Tk, -1),
            wk = jk.type == Gk.Text ? jk : null,
            Hk = ek.type == Gk.Text ? ek : null;
          wk && (kk.lineWrapping || jk.widgetLineBreaks) && (wk = YT(kk, Xk, 1, wk));
          Hk && (kk.lineWrapping || ek.widgetLineBreaks) && (Hk = YT(kk, Tk, -1, Hk));
          if (wk && Hk && wk.from == Hk.from && wk.to == Hk.to) return xk(Pk(Ik.from, Ik.to, wk));
          {
            let Fk = wk ? Pk(Ik.from, null, wk) : Kk(jk, !1),
              Xk = Hk ? Pk(null, Ik.to, Hk) : Kk(ek, !0),
              Tk = [];
            return (wk || jk).to < (Hk || ek).from - (wk && Hk ? 1 : 0) || jk.widgetLineBreaks > 1 && Fk.bottom + kk.defaultLineHeight / 2 < Xk.top ? Tk.push(Jk(tk, Fk.bottom, Zk, Xk.top)) : Fk.bottom < Xk.top && kk.elementAtHeight((Fk.bottom + Xk.top) / 2).type == Gk.Text && (Fk.bottom = Xk.top = (Fk.bottom + Xk.top) / 2), xk(Fk).concat(Tk).concat(xk(Xk))
          }

          function Jk(kk, Ik, Xk, Tk) {
            return new BT(Fk, kk - ak.left, Ik - ak.top, Math.max(0, Xk - kk), Tk - Ik)
          }

          function xk(kk) {
            let {
              top: Fk,
              bottom: Ik,
              horizontal: Xk
            } = kk, Tk = [];
            for (let ik = 0; ik < Xk.length; ik += 2) Tk.push(Jk(Xk[ik], Fk, Xk[ik + 1], Ik));
            return Tk
          }

          function Pk(Fk, Ik, Xk) {
            let Tk = 1e9,
              yk = -1e9,
              lk = [];

            function ak(Fk, Ik, ak, qk, Lk) {
              let jk = kk.coordsAtPos(Fk, Fk == Xk.to ? -2 : 2),
                ek = kk.coordsAtPos(ak, ak == Xk.from ? 2 : -2);
              jk && ek && (Tk = Math.min(jk.top, ek.top, Tk), yk = Math.max(jk.bottom, ek.bottom, yk), Lk == LF.LTR ? lk.push(ik && Ik ? tk : jk.left, ik && qk ? Zk : ek.right) : lk.push(!ik && qk ? tk : ek.left, !ik && Ik ? Zk : jk.right))
            }
            let qk = null !== Fk && void 0 !== Fk ? Fk : Xk.from,
              Lk = null !== Ik && void 0 !== Ik ? Ik : Xk.to;
            for (let ik of kk.W9)
              if (ik.to > qk && ik.from < Lk)
                for (let Xk = Math.max(ik.from, qk), Tk = Math.min(ik.to, Lk);;) {
                  let ik = kk.state.doc.lineAt(Xk);
                  for (let yk of kk.bidiSpans(ik)) {
                    let kk = yk.from + ik.from,
                      lk = yk.to + ik.from;
                    if (kk >= Tk) break;
                    lk > Xk && ak(Math.max(kk, Xk), null == Fk && kk <= qk, Math.min(lk, Tk), null == Ik && lk >= Lk, yk.dir)
                  }
                  if (Xk = ik.to + 1, Xk >= Tk) break
                }
            return 0 == lk.length && ak(qk, null == Fk, Lk, null == Ik, kk.textDirection), {
              top: Tk,
              bottom: yk,
              horizontal: lk
            }
          }

          function Kk(kk, Fk) {
            let Ik = lk.top + (Fk ? kk.top : kk.bottom);
            return {
              top: Ik,
              bottom: Ik,
              horizontal: []
            }
          }
        }(kk, Fk, Ik)
      }
    }

    function dT(kk) {
      let Fk = kk.scrollDOM.getBoundingClientRect();
      return {
        left: (kk.textDirection == LF.LTR ? Fk.left : Fk.right - kk.scrollDOM.clientWidth * kk.scaleX) - kk.scrollDOM.scrollLeft * kk.scaleX,
        top: Fk.top - kk.scrollDOM.scrollTop * kk.scaleY
      }
    }

    function YT(kk, Fk, Ik, Xk) {
      let Tk = kk.coordsAtPos(Fk, 2 * Ik);
      if (!Tk) return Xk;
      let ik = kk.dom.getBoundingClientRect(),
        yk = (Tk.top + Tk.bottom) / 2,
        lk = kk.posAtCoords({
          x: ik.left + 1,
          y: yk
        }),
        ak = kk.posAtCoords({
          x: ik.right - 1,
          y: yk
        });
      return null == lk || null == ak ? Xk : {
        from: Math.max(Xk.from, Math.min(lk, ak)),
        to: Math.min(Xk.to, Math.max(lk, ak))
      }
    }
    class AT {
      constructor(kk, Fk) {
        this.view = kk, this.layer = Fk, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = kk.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), Fk.above && this.dom.classList.add("cm-layer-above"), Fk.class && this.dom.classList.add(Fk.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(kk.state), kk.requestMeasure(this.measureReq), Fk.mount && Fk.mount(this.dom, kk)
      }
      update(kk) {
        kk.startState.facet(gT) != kk.state.facet(gT) && this.setOrder(kk.state), (this.layer.update(kk, this.dom) || kk.geometryChanged) && (this.scale(), kk.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(kk) {
        !1 !== this.layer.updateOnDocViewUpdate && kk.requestMeasure(this.measureReq)
      }
      setOrder(kk) {
        let Fk = 0,
          Ik = kk.facet(gT);
        for (; Fk < Ik.length && Ik[Fk] != this.layer;) Fk++;
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
            return Ik = kk, Xk = this.drawn[Fk], !(Ik.constructor == Xk.constructor && Ik.eq(Xk));
            var Ik, Xk
          }))) {
          let Fk = this.dom.firstChild,
            Ik = 0;
          for (let Xk of kk) Xk.update && Fk && Xk.constructor && this.drawn[Ik].constructor && Xk.update(Fk, this.drawn[Ik]) ? (Fk = Fk.nextSibling, Ik++) : this.dom.insertBefore(Xk.draw(), Fk);
          for (; Fk;) {
            let kk = Fk.nextSibling;
            Fk.remove(), Fk = kk
          }
          this.drawn = kk, Vk.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const gT = Xk.p.define();

    function mT(kk) {
      return [rF.define((Fk => new AT(Fk, kk))), gT.of(kk)]
    }
    const hT = Xk.p.define({
      combine: kk => (0, Xk.R)(kk, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (kk, Fk) => Math.min(kk, Fk),
        drawRangeCursor: (kk, Fk) => kk || Fk
      })
    });

    function rT() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [hT.of(kk), MT, Fi, Ii, WF.of(!0)]
    }

    function DT(kk) {
      return kk.startState.facet(hT) != kk.state.facet(hT)
    }
    const MT = mT({
      above: !0,
      markers(kk) {
        let {
          state: Fk
        } = kk, Ik = Fk.facet(hT), Tk = [];
        for (let ik of Fk.selection.nZ) {
          let yk = ik == Fk.selection.main;
          if (ik.empty || Ik.drawRangeCursor && !(yk && Vk.ios && Ik.iosSelectionHandles)) {
            let Fk = yk ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              Ik = ik.empty ? ik : Xk.k.cursor(ik.head, ik.assoc);
            for (let Xk of BT.forRange(kk, Fk, Ik)) Tk.push(Xk)
          }
        }
        return Tk
      },
      update(kk, Fk) {
        kk.transactions.some((kk => kk.selection)) && (Fk.style.animationName = "cm-blink" == Fk.style.animationName ? "cm-blink2" : "cm-blink");
        let Ik = DT(kk);
        return Ik && ki(kk.state, Fk), kk.docChanged || kk.selectionSet || Ik
      },
      mount(kk, Fk) {
        ki(Fk.state, kk)
      },
      class: "cm-cursorLayer"
    });

    function ki(kk, Fk) {
      Fk.style.animationDuration = kk.facet(hT).cursorBlinkRate + "ms"
    }
    const Fi = mT({
        above: !1,
        markers(kk) {
          let Fk = [],
            {
              main: Ik,
              nZ: Tk
            } = kk.state.selection;
          for (let Xk of Tk)
            if (!Xk.empty)
              for (let Ik of BT.forRange(kk, "cm-selectionBackground", Xk)) Fk.push(Ik);
          if (Vk.ios && !Ik.empty && kk.state.facet(hT).iosSelectionHandles) {
            for (let Tk of BT.forRange(kk, "cm-selectionHandle cm-selectionHandle-start", Xk.k.cursor(Ik.from, 1))) Fk.push(Tk);
            for (let Tk of BT.forRange(kk, "cm-selectionHandle cm-selectionHandle-end", Xk.k.cursor(Ik.to, 1))) Fk.push(Tk)
          }
          return Fk
        },
        update: (kk, Fk) => kk.docChanged || kk.selectionSet || kk.viewportChanged || DT(kk),
        class: "cm-selectionLayer"
      }),
      Ii = Xk.u.highest(oT.theme({
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
      Xi = Xk.F.define({
        map: (kk, Fk) => null == kk ? null : Fk.mapPos(kk)
      }),
      Ti = Xk.I.define({
        create: () => null,
        update: (kk, Fk) => (null != kk && (kk = Fk.changes.mapPos(kk)), Fk.effects.reduce(((kk, Fk) => Fk.is(Xi) ? Fk.value : kk), kk))
      }),
      ii = rF.fromClass(class {
        constructor(kk) {
          this.view = kk, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(kk) {
          var Fk;
          let Ik = kk.state.field(Ti);
          null == Ik ? null != this.cursor && (null === (Fk = this.cursor) || void 0 === Fk || Fk.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (kk.startState.field(Ti) != Ik || kk.docChanged || kk.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: kk
          } = this, Fk = kk.state.field(Ti), Ik = null != Fk && kk.coordsAtPos(Fk);
          if (!Ik) return null;
          let Xk = kk.scrollDOM.getBoundingClientRect();
          return {
            left: Ik.left - Xk.left + kk.scrollDOM.scrollLeft * kk.scaleX,
            top: Ik.top - Xk.top + kk.scrollDOM.scrollTop * kk.scaleY,
            height: Ik.bottom - Ik.top
          }
        }
        drawCursor(kk) {
          if (this.cursor) {
            let {
              scaleX: Fk,
              scaleY: Ik
            } = this.view;
            kk ? (this.cursor.style.left = kk.left / Fk + "px", this.cursor.style.top = kk.top / Ik + "px", this.cursor.style.height = kk.height / Ik + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(kk) {
          this.view.state.field(Ti) != kk && this.view.dispatch({
            effects: Xi.of(kk)
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

    function yi() {
      return [Ti, ii]
    }

    function li(kk, Fk, Ik, Xk, Tk) {
      Fk.lastIndex = 0;
      for (let ik, yk = kk.iterRange(Ik, Xk), lk = Ik; !yk.next().done; lk += yk.value.length)
        if (!yk.lineBreak)
          for (; ik = Fk.exec(yk.value);) Tk(lk + ik.index, ik)
    }
    class ai {
      constructor(kk) {
        const {
          regexp: Fk,
          decoration: Ik,
          decorate: Xk,
          boundary: Tk,
          maxLength: ik = 1e3
        } = kk;
        if (!Fk.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = Fk, Xk) this.addMatch = (kk, Fk, Ik, Tk) => Xk(Tk, Ik, Ik + kk[0].length, kk, Fk);
        else if ("function" == typeof Ik) this.addMatch = (kk, Fk, Xk, Tk) => {
          let ik = Ik(kk, Fk, Xk);
          ik && Tk(Xk, Xk + kk[0].length, ik)
        };
        else {
          if (!Ik) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (kk, Fk, Xk, Tk) => Tk(Xk, Xk + kk[0].length, Ik)
        }
        this.boundary = Tk, this.maxLength = ik
      }
      createDeco(kk) {
        let Fk = new Xk.y,
          Ik = Fk.add.bind(Fk);
        for (let {
            from: Xk,
            to: Tk
          }
          of
          function(kk, Fk) {
            let Ik = kk.W9;
            if (1 == Ik.length && Ik[0].from == kk.viewport.from && Ik[0].to == kk.viewport.to) return Ik;
            let Xk = [];
            for (let {
                from: Tk,
                to: ik
              }
              of Ik) Tk = Math.max(kk.state.doc.lineAt(Tk).from, Tk - Fk), ik = Math.min(kk.state.doc.lineAt(ik).to, ik + Fk), Xk.length && Xk[Xk.length - 1].to >= Tk ? Xk[Xk.length - 1].to = ik : Xk.push({
              from: Tk,
              to: ik
            });
            return Xk
          }(kk, this.maxLength)) li(kk.state.doc, this.regexp, Xk, Tk, ((Fk, Xk) => this.addMatch(Xk, kk, Fk, Ik)));
        return Fk.finish()
      }
      updateDeco(kk, Fk) {
        let Ik = 1e9,
          Xk = -1;
        return kk.docChanged && kk.changes.iterChanges(((Fk, Tk, ik, yk) => {
          yk >= kk.view.viewport.from && ik <= kk.view.viewport.to && (Ik = Math.min(ik, Ik), Xk = Math.max(yk, Xk))
        })), kk.viewportMoved || Xk - Ik > 1e3 ? this.createDeco(kk.view) : Xk > -1 ? this.updateRange(kk.view, Fk.map(kk.changes), Ik, Xk) : Fk
      }
      updateRange(kk, Fk, Ik, Xk) {
        for (let Tk of kk.W9) {
          let ik = Math.max(Tk.from, Ik),
            yk = Math.min(Tk.to, Xk);
          if (yk >= ik) {
            let Ik = kk.state.doc.lineAt(ik),
              Xk = Ik.to < yk ? kk.state.doc.lineAt(yk) : Ik,
              lk = Math.max(Tk.from, Ik.from),
              ak = Math.min(Tk.to, Xk.to);
            if (this.boundary) {
              for (; ik > Ik.from; ik--)
                if (this.boundary.test(Ik.text[ik - 1 - Ik.from])) {
                  lk = ik;
                  break
                } for (; yk < Xk.to; yk++)
                if (this.boundary.test(Xk.text[yk - Xk.from])) {
                  ak = yk;
                  break
                }
            }
            let qk, Lk = [],
              tk = (kk, Fk, Ik) => Lk.push(Ik.range(kk, Fk));
            if (Ik == Xk)
              for (this.regexp.lastIndex = lk - Ik.from;
                (qk = this.regexp.exec(Ik.text)) && qk.index < ak - Ik.from;) this.addMatch(qk, kk, qk.index + Ik.from, tk);
            else li(kk.state.doc, this.regexp, lk, ak, ((Fk, Ik) => this.addMatch(Ik, kk, Fk, tk)));
            Fk = Fk.update({
              filterFrom: lk,
              filterTo: ak,
              filter: (kk, Fk) => kk < lk || Fk > ak,
              add: Lk
            })
          }
        }
        return Fk
      }
    }
    const qi = null != /x/.unicode ? "gu" : "g",
      Li = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", qi),
      ti = {
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
    let Zi = null;
    const ji = Xk.p.define({
      combine(kk) {
        let Fk = (0, Xk.R)(kk, {
          render: null,
          specialChars: Li,
          addSpecialChars: null
        });
        return (Fk.replaceTabs = ! function() {
          var kk;
          if (null == Zi && "undefined" != typeof document && document.body) {
            let Fk = document.body.style;
            Zi = null != (null !== (kk = Fk.tabSize) && void 0 !== kk ? kk : Fk.MozTabSize)
          }
          return Zi || !1
        }()) && (Fk.specialChars = new RegExp("\t|" + Fk.specialChars.source, qi)), Fk.addSpecialChars && (Fk.specialChars = new RegExp(Fk.specialChars.source + "|" + Fk.addSpecialChars.source, qi)), Fk
      }
    });

    function ei() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ji.of(kk), wi || (wi = rF.fromClass(class {
        constructor(kk) {
          this.view = kk, this.wk = pk.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(kk.state.facet(ji)), this.wk = this.decorator.createDeco(kk)
        }
        makeDecorator(kk) {
          return new ai({
            regexp: kk.specialChars,
            decoration: (Fk, Ik, Tk) => {
              let {
                doc: ik
              } = Ik.state, yk = (0, Xk.M)(Fk[0], 0);
              if (9 == yk) {
                let kk = ik.lineAt(Tk),
                  Fk = Ik.state.tabSize,
                  yk = (0, Xk.V)(kk.text, Fk, Tk - kk.from);
                return pk.replace({
                  widget: new Ji((Fk - yk % Fk) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[yk] || (this.decorationCache[yk] = pk.replace({
                widget: new Hi(kk, yk)
              }))
            },
            boundary: kk.replaceTabs ? void 0 : /[^]/
          })
        }
        update(kk) {
          let Fk = kk.state.facet(ji);
          kk.startState.facet(ji) != Fk ? (this.decorator = this.makeDecorator(Fk), this.wk = this.decorator.createDeco(kk.view)) : this.wk = this.decorator.updateDeco(kk, this.wk)
        }
      }, {
        wk: kk => kk.wk
      }))]
    }
    let wi = null;
    class Hi extends nk {
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
          Ik = kk.state.phrase("Control character") + " " + (ti[this.code] || "0x" + this.code.toString(16)),
          Xk = this.options.render && this.options.render(this.code, Ik, Fk);
        if (Xk) return Xk;
        let Tk = document.createElement("span");
        return Tk.textContent = Fk, Tk.title = Ik, Tk.setAttribute("aria-label", Ik), Tk.className = "cm-specialChar", Tk
      }
      ignoreEvent() {
        return !1
      }
    }
    class Ji extends nk {
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

    function xi() {
      return Ki
    }
    const Pi = pk.line({
        class: "cm-activeLine"
      }),
      Ki = rF.fromClass(class {
        constructor(kk) {
          this.wk = this.getDeco(kk)
        }
        update(kk) {
          (kk.docChanged || kk.selectionSet) && (this.wk = this.getDeco(kk.view))
        }
        getDeco(kk) {
          let Fk = -1,
            Ik = [];
          for (let Xk of kk.state.selection.nZ) {
            let Tk = kk.lineBlockAt(Xk.head);
            Tk.from > Fk && (Ik.push(Pi.range(Tk.from)), Fk = Tk.from)
          }
          return pk.set(Ik)
        }
      }, {
        wk: kk => kk.wk
      });
    class Qi extends nk {
      constructor(kk) {
        super(), this.content = kk
      }
      toDOM(kk) {
        let Fk = document.createElement("span");
        return Fk.className = "cm-placeholder", Fk.style.pointerEvents = "none", Fk.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(kk) : this.content.cloneNode(!0)), Fk.setAttribute("aria-hidden", "true"), Fk
      }
      coordsAt(kk) {
        let Fk = kk.firstChild ? Bk(kk.firstChild) : [];
        if (!Fk.length) return null;
        let Ik = window.getComputedStyle(kk.parentNode),
          Xk = hk(Fk[0], "rtl" != Ik.direction),
          Tk = parseInt(Ik.lineHeight);
        return Xk.bottom - Xk.top > 1.5 * Tk ? {
          left: Xk.left,
          right: Xk.right,
          top: Xk.top,
          bottom: Xk.top + Tk
        } : Xk
      }
      ignoreEvent() {
        return !1
      }
    }

    function si(kk) {
      let Fk = rF.fromClass(class {
        constructor(Fk) {
          this.view = Fk, this.placeholder = kk ? pk.set([pk.widget({
            widget: new Qi(kk),
            side: 1
          }).range(0)]) : pk.none
        }
        get wk() {
          return this.view.state.doc.length ? pk.none : this.placeholder
        }
      }, {
        wk: kk => kk.wk
      });
      return "string" == typeof kk ? [Fk, oT.contentAttributes.of({
        "aria-placeholder": kk
      })] : Fk
    }
    const Vi = 2e3;

    function zi(kk, Fk) {
      let Ik = kk.posAtCoords({
          x: Fk.clientX,
          y: Fk.clientY
        }, !1),
        Tk = kk.state.doc.lineAt(Ik),
        ik = Ik - Tk.from,
        yk = ik > Vi ? -1 : ik == Tk.length ? function(kk, Fk) {
          let Ik = kk.coordsAtPos(kk.viewport.from);
          return Ik ? Math.round(Math.abs((Ik.left - Fk) / kk.defaultCharacterWidth)) : -1
        }(kk, Fk.clientX) : (0, Xk.V)(Tk.text, kk.state.tabSize, Ik - Tk.from);
      return {
        line: Tk.number,
        col: yk,
        off: ik
      }
    }

    function Si(kk, Fk) {
      let Ik = zi(kk, Fk),
        Tk = kk.state.selection;
      return Ik ? {
        update(kk) {
          if (kk.docChanged) {
            let Fk = kk.changes.mapPos(kk.startState.doc.line(Ik.line).from),
              Xk = kk.state.doc.lineAt(Fk);
            Ik = {
              line: Xk.number,
              col: Ik.col,
              off: Math.min(Ik.off, Xk.length)
            }, Tk = Tk.map(kk.changes)
          }
        },
        get(Fk, ik, yk) {
          let lk = zi(kk, Fk);
          if (!lk) return Tk;
          let ak = function(kk, Fk, Ik) {
            let Tk = Math.min(Fk.line, Ik.line),
              ik = Math.max(Fk.line, Ik.line),
              yk = [];
            if (Fk.off > Vi || Ik.off > Vi || Fk.col < 0 || Ik.col < 0) {
              let lk = Math.min(Fk.off, Ik.off),
                ak = Math.max(Fk.off, Ik.off);
              for (let Fk = Tk; Fk <= ik; Fk++) {
                let Ik = kk.doc.line(Fk);
                Ik.length <= ak && yk.push(Xk.k.range(Ik.from + lk, Ik.to + ak))
              }
            } else {
              let lk = Math.min(Fk.col, Ik.col),
                ak = Math.max(Fk.col, Ik.col);
              for (let Fk = Tk; Fk <= ik; Fk++) {
                let Ik = kk.doc.line(Fk),
                  Tk = (0, Xk.$)(Ik.text, lk, kk.tabSize, !0);
                if (Tk < 0) yk.push(Xk.k.cursor(Ik.to));
                else {
                  let Fk = (0, Xk.$)(Ik.text, ak, kk.tabSize);
                  yk.push(Xk.k.range(Ik.from + Tk, Ik.from + Fk))
                }
              }
            }
            return yk
          }(kk.state, Ik, lk);
          return ak.length ? yk ? Xk.k.create(ak.concat(Tk.nZ)) : Xk.k.create(ak) : Tk
        }
      } : null
    }

    function oi(kk) {
      let Fk = (null === kk || void 0 === kk ? void 0 : kk.eventFilter) || (kk => kk.altKey && 0 == kk.button);
      return oT.mouseSelectionStyle.of(((kk, Ik) => Fk(Ik) ? Si(kk, Ik) : null))
    }
    const vi = {
        Alt: [18, kk => !!kk.altKey],
        Control: [17, kk => !!kk.ctrlKey],
        Shift: [16, kk => !!kk.shiftKey],
        Meta: [91, kk => !!kk.metaKey]
      },
      Ei = {
        style: "cursor: crosshair"
      };

    function Oi() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [Fk, Ik] = vi[kk.key || "Alt"],
        Xk = rF.fromClass(class {
          constructor(kk) {
            this.view = kk, this.isDown = !1
          }
          set(kk) {
            this.isDown != kk && (this.isDown = kk, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(kk) {
              this.set(kk.keyCode == Fk || Ik(kk))
            },
            keyup(kk) {
              kk.keyCode != Fk && Ik(kk) || this.set(!1)
            },
            mousemove(kk) {
              this.set(Ik(kk))
            }
          }
        });
      return [Xk, oT.contentAttributes.of((kk => {
        var Fk;
        return (null === (Fk = kk.plugin(Xk)) || void 0 === Fk ? void 0 : Fk.isDown) ? Ei : null
      }))]
    }
    const ni = "-10000px";
    class Gi {
      constructor(kk, Fk, Ik, Xk) {
        this.facet = Fk, this.createTooltipView = Ik, this.removeTooltipView = Xk, this.input = kk.state.facet(Fk), this.tooltips = this.input.filter((kk => kk));
        let Tk = null;
        this.tooltipViews = this.tooltips.map((kk => Tk = Ik(kk, Tk)))
      }
      update(kk, Fk) {
        var Ik;
        let Xk = kk.state.facet(this.facet),
          Tk = Xk.filter((kk => kk));
        if (Xk === this.input) {
          for (let Fk of this.tooltipViews) Fk.update && Fk.update(kk);
          return !1
        }
        let ik = [],
          yk = Fk ? [] : null;
        for (let lk = 0; lk < Tk.length; lk++) {
          let Ik = Tk[lk],
            Xk = -1;
          if (Ik) {
            for (let kk = 0; kk < this.tooltips.length; kk++) {
              let Fk = this.tooltips[kk];
              Fk && Fk.create == Ik.create && (Xk = kk)
            }
            if (Xk < 0) ik[lk] = this.createTooltipView(Ik, lk ? ik[lk - 1] : null), yk && (yk[lk] = !!Ik.above);
            else {
              let Ik = ik[lk] = this.tooltipViews[Xk];
              yk && (yk[lk] = Fk[Xk]), Ik.update && Ik.update(kk)
            }
          }
        }
        for (let lk of this.tooltipViews) ik.indexOf(lk) < 0 && (this.removeTooltipView(lk), null === (Ik = lk.destroy) || void 0 === Ik || Ik.call(lk));
        return Fk && (yk.forEach(((kk, Ik) => Fk[Ik] = kk)), Fk.length = yk.length), this.input = Xk, this.tooltips = Tk, this.tooltipViews = ik, !0
      }
    }

    function ui(kk) {
      let Fk = kk.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: Fk.clientHeight,
        right: Fk.clientWidth
      }
    }
    const bi = Xk.p.define({
        combine: kk => {
          var Fk, Ik, Xk;
          return {
            position: Vk.ios ? "absolute" : (null === (Fk = kk.find((kk => kk.position))) || void 0 === Fk ? void 0 : Fk.position) || "fixed",
            parent: (null === (Ik = kk.find((kk => kk.parent))) || void 0 === Ik ? void 0 : Ik.parent) || null,
            tooltipSpace: (null === (Xk = kk.find((kk => kk.tooltipSpace))) || void 0 === Xk ? void 0 : Xk.tooltipSpace) || ui
          }
        }
      }),
      Ri = new WeakMap,
      Ui = rF.fromClass(class {
        constructor(kk) {
          this.view = kk, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let Fk = kk.state.facet(bi);
          this.position = Fk.position, this.parent = Fk.parent, this.classes = kk.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new Gi(kk, Wi, ((kk, Fk) => this.createTooltip(kk, Fk)), (kk => {
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
          let Ik = Fk || kk.geometryChanged,
            Xk = kk.state.facet(bi);
          if (Xk.position != this.position && !this.madeAbsolute) {
            this.position = Xk.position;
            for (let kk of this.manager.tooltipViews) kk.dom.style.position = this.position;
            Ik = !0
          }
          if (Xk.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Xk.parent, this.createContainer();
            for (let kk of this.manager.tooltipViews) this.container.appendChild(kk.dom);
            Ik = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          Ik && this.maybeMeasure()
        }
        createTooltip(kk, Fk) {
          let Ik = kk.create(this.view),
            Xk = Fk ? Fk.dom : null;
          if (Ik.dom.classList.add("cm-tooltip"), kk.arrow && !Ik.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let kk = document.createElement("div");
            kk.className = "cm-tooltip-arrow", Ik.dom.appendChild(kk)
          }
          return Ik.dom.style.position = this.position, Ik.dom.style.top = ni, Ik.dom.style.left = "0px", this.container.insertBefore(Ik.dom, Xk), Ik.mount && Ik.mount(this.view), this.resizeObserver && this.resizeObserver.observe(Ik.dom), Ik
        }
        destroy() {
          var kk, Fk, Ik;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Xk of this.manager.tooltipViews) Xk.dom.remove(), null === (kk = Xk.destroy) || void 0 === kk || kk.call(Xk);
          this.parent && this.container.remove(), null === (Fk = this.resizeObserver) || void 0 === Fk || Fk.disconnect(), null === (Ik = this.intersectionObserver) || void 0 === Ik || Ik.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let kk = 1,
            Fk = 1,
            Ik = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: kk
            } = this.manager.tooltipViews[0];
            if (Vk.safari) {
              let Fk = kk.getBoundingClientRect();
              Ik = Math.abs(Fk.top + 1e4) > 1 || Math.abs(Fk.left) > 1
            } else Ik = !!kk.offsetParent && kk.offsetParent != this.container.ownerDocument.body
          }
          if (Ik || "absolute" == this.position)
            if (this.parent) {
              let Ik = this.parent.getBoundingClientRect();
              Ik.width && Ik.height && (kk = Ik.width / this.parent.offsetWidth, Fk = Ik.height / this.parent.offsetHeight)
            } else({
              scaleX: kk,
              scaleY: Fk
            } = this.view.viewState);
          let Xk = this.view.scrollDOM.getBoundingClientRect(),
            Tk = aI(this.view);
          return {
            visible: {
              left: Xk.left + Tk.left,
              top: Xk.top + Tk.top,
              right: Xk.right - Tk.right,
              bottom: Xk.bottom - Tk.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((kk, Fk) => {
              let Ik = this.manager.tooltipViews[Fk];
              return Ik.getCoords ? Ik.getCoords(kk.pos) : this.view.coordsAtPos(kk.pos)
            })),
            size: this.manager.tooltipViews.map((kk => {
              let {
                dom: Fk
              } = kk;
              return Fk.getBoundingClientRect()
            })),
            space: this.view.state.facet(bi).tooltipSpace(this.view),
            scaleX: kk,
            scaleY: Fk,
            makeAbsolute: Ik
          }
        }
        writeMeasure(kk) {
          var Fk;
          if (kk.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let kk of this.manager.tooltipViews) kk.dom.style.position = "absolute"
          }
          let {
            visible: Ik,
            space: Xk,
            scaleX: Tk,
            scaleY: ik
          } = kk, yk = [];
          for (let lk = 0; lk < this.manager.tooltips.length; lk++) {
            let ak = this.manager.tooltips[lk],
              qk = this.manager.tooltipViews[lk],
              {
                dom: Lk
              } = qk,
              tk = kk.pos[lk],
              Zk = kk.size[lk];
            if (!tk || !1 !== ak.clip && (tk.bottom <= Math.max(Ik.top, Xk.top) || tk.top >= Math.min(Ik.bottom, Xk.bottom) || tk.right < Math.max(Ik.left, Xk.left) - .1 || tk.left > Math.min(Ik.right, Xk.right) + .1)) {
              Lk.style.top = ni;
              continue
            }
            let jk = ak.arrow ? qk.dom.querySelector(".cm-tooltip-arrow") : null,
              ek = jk ? 7 : 0,
              wk = Zk.right - Zk.left,
              Hk = null !== (Fk = Ri.get(qk)) && void 0 !== Fk ? Fk : Zk.bottom - Zk.top,
              Jk = qk.offset || ci,
              xk = this.view.textDirection == LF.LTR,
              Pk = Zk.width > Xk.right - Xk.left ? xk ? Xk.left : Xk.right - Zk.width : xk ? Math.max(Xk.left, Math.min(tk.left - (jk ? 14 : 0) + Jk.x, Xk.right - wk)) : Math.min(Math.max(Xk.left, tk.left - wk + (jk ? 14 : 0) - Jk.x), Xk.right - wk),
              Kk = this.above[lk];
            !ak.strictSide && (Kk ? tk.top - Hk - ek - Jk.y < Xk.top : tk.bottom + Hk + ek + Jk.y > Xk.bottom) && Kk == Xk.bottom - tk.bottom > tk.top - Xk.top && (Kk = this.above[lk] = !Kk);
            let Qk = (Kk ? tk.top - Xk.top : Xk.bottom - tk.bottom) - ek;
            if (Qk < Hk && !1 !== qk.resize) {
              if (Qk < this.view.defaultLineHeight) {
                Lk.style.top = ni;
                continue
              }
              Ri.set(qk, Hk), Lk.style.height = (Hk = Qk) / ik + "px"
            } else Lk.style.height && (Lk.style.height = "");
            let sk = Kk ? tk.top - Hk - ek - Jk.y : tk.bottom + ek + Jk.y,
              Vk = Pk + wk;
            if (!0 !== qk.overlap)
              for (let kk of yk) kk.left < Vk && kk.right > Pk && kk.top < sk + Hk && kk.bottom > sk && (sk = Kk ? kk.top - Hk - 2 - ek : kk.bottom + ek + 2);
            if ("absolute" == this.position ? (Lk.style.top = (sk - kk.parent.top) / ik + "px", Ci(Lk, (Pk - kk.parent.left) / Tk)) : (Lk.style.top = sk / ik + "px", Ci(Lk, Pk / Tk)), jk) {
              let kk = tk.left + (xk ? Jk.x : -Jk.x) - (Pk + 14 - 7);
              jk.style.left = kk / Tk + "px"
            }!0 !== qk.overlap && yk.push({
              left: Pk,
              top: sk,
              right: Vk,
              bottom: sk + Hk
            }), Lk.classList.toggle("cm-tooltip-above", Kk), Lk.classList.toggle("cm-tooltip-below", !Kk), qk.positioned && qk.positioned(kk.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let kk of this.manager.tooltipViews) kk.dom.style.top = ni
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function Ci(kk, Fk) {
      let Ik = parseInt(kk.style.left, 10);
      (isNaN(Ik) || Math.abs(Fk - Ik) > 1) && (kk.style.left = Fk + "px")
    }
    const Ni = oT.baseTheme({
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
      ci = {
        x: 0,
        y: 0
      },
      Wi = Xk.p.define({
        enables: [Ui, Ni]
      }),
      fi = Xk.p.define({
        combine: kk => kk.reduce(((kk, Fk) => kk.concat(Fk)), [])
      });
    class Bi {
      static create(kk) {
        return new Bi(kk)
      }
      constructor(kk) {
        this.view = kk, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Gi(kk, fi, ((kk, Fk) => this.createHostedView(kk, Fk)), (kk => kk.dom.remove()))
      }
      createHostedView(kk, Fk) {
        let Ik = kk.create(this.view);
        return Ik.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(Ik.dom, Fk ? Fk.dom.nextSibling : this.dom.firstChild), this.mounted && Ik.mount && Ik.mount(this.view), Ik
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
        for (let Ik of this.manager.tooltipViews) {
          let Xk = Ik[kk];
          if (void 0 !== Xk)
            if (void 0 === Fk) Fk = Xk;
            else if (Fk !== Xk) return
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
    const di = Wi.compute([fi], (kk => {
      let Fk = kk.facet(fi);
      return 0 === Fk.length ? null : {
        pos: Math.min(...Fk.map((kk => kk.pos))),
        end: Math.max(...Fk.map((kk => {
          var Fk;
          return null !== (Fk = kk.end) && void 0 !== Fk ? Fk : kk.pos
        }))),
        create: Bi.create,
        above: Fk[0].above,
        arrow: Fk.some((kk => kk.arrow))
      }
    }));
    class Yi {
      constructor(kk, Fk, Ik, Xk, Tk) {
        this.view = kk, this.source = Fk, this.field = Ik, this.setHover = Xk, this.hoverTime = Tk, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
        } = this, Ik = kk.docView.tile.nearest(Fk.target);
        if (!Ik) return;
        let Xk, Tk = 1;
        if (Ik.isWidget()) Xk = Ik.posAtStart;
        else {
          if (Xk = kk.posAtCoords(Fk), null == Xk) return;
          let Ik = kk.coordsAtPos(Xk);
          if (!Ik || Fk.y < Ik.top || Fk.y > Ik.bottom || Fk.x < Ik.left - kk.defaultCharacterWidth || Fk.x > Ik.right + kk.defaultCharacterWidth) return;
          let ik = kk.bidiSpans(kk.state.doc.lineAt(Xk)).find((kk => kk.from <= Xk && kk.to >= Xk)),
            yk = ik && ik.dir == LF.RTL ? -1 : 1;
          Tk = Fk.x < Ik.left ? -yk : yk
        }
        let ik = this.source(kk, Xk, Tk);
        if (null === ik || void 0 === ik ? void 0 : ik.then) {
          let Fk = this.pending = {
            pos: Xk
          };
          ik.then((Ik => {
            this.pending == Fk && (this.pending = null, !Ik || Array.isArray(Ik) && !Ik.length || kk.dispatch({
              effects: this.setHover.of(Array.isArray(Ik) ? Ik : [Ik])
            }))
          }), (Fk => AF(kk.state, Fk, "hover tooltip")))
        } else !ik || Array.isArray(ik) && !ik.length || kk.dispatch({
          effects: this.setHover.of(Array.isArray(ik) ? ik : [ik])
        })
      }
      get tooltip() {
        let kk = this.view.plugin(Ui),
          Fk = kk ? kk.manager.tooltips.findIndex((kk => kk.create == Bi.create)) : -1;
        return Fk > -1 ? kk.manager.tooltipViews[Fk] : null
      }
      mousemove(kk) {
        var Fk, Ik;
        this.lastMove = {
          x: kk.clientX,
          y: kk.clientY,
          target: kk.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Xk,
          tooltip: Tk
        } = this;
        if (Xk.length && Tk && ! function(kk, Fk) {
            let Ik, {
              left: Xk,
              right: Tk,
              top: ik,
              bottom: yk
            } = kk.getBoundingClientRect();
            if (Ik = kk.querySelector(".cm-tooltip-arrow")) {
              let kk = Ik.getBoundingClientRect();
              ik = Math.min(kk.top, ik), yk = Math.max(kk.bottom, yk)
            }
            return Fk.clientX >= Xk - Ai && Fk.clientX <= Tk + Ai && Fk.clientY >= ik - Ai && Fk.clientY <= yk + Ai
          }(Tk.dom, kk) || this.pending) {
          let {
            pos: Tk
          } = Xk[0] || this.pending, ik = null !== (Ik = null === (Fk = Xk[0]) || void 0 === Fk ? void 0 : Fk.end) && void 0 !== Ik ? Ik : Tk;
          (Tk == ik ? this.view.posAtCoords(this.lastMove) == Tk : function(kk, Fk, Ik, Xk, Tk) {
            let ik = kk.scrollDOM.getBoundingClientRect(),
              yk = kk.documentTop + kk.documentPadding.top + kk.contentHeight;
            if (ik.left > Xk || ik.right < Xk || ik.top > Tk || Math.min(ik.bottom, yk) < Tk) return !1;
            let lk = kk.posAtCoords({
              x: Xk,
              y: Tk
            }, !1);
            return lk >= Fk && lk <= Ik
          }(this.view, Tk, ik, kk.clientX, kk.clientY)) || (this.view.dispatch({
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
        let Fk = Ik => {
          kk.removeEventListener("mouseleave", Fk), this.active.length && !this.view.dom.contains(Ik.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        kk.addEventListener("mouseleave", Fk)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const Ai = 4;

    function gi(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Ik = Xk.F.define(),
        Tk = Xk.I.define({
          create: () => [],
          update(kk, Tk) {
            if (kk.length && (Fk.hideOnChange && (Tk.docChanged || Tk.selection) ? kk = [] : Fk.hideOn && (kk = kk.filter((kk => !Fk.hideOn(Tk, kk)))), Tk.docChanged)) {
              let Fk = [];
              for (let Ik of kk) {
                let kk = Tk.changes.mapPos(Ik.pos, -1, Xk.s.TrackDel);
                if (null != kk) {
                  let Xk = Object.assign(Object.create(null), Ik);
                  Xk.pos = kk, null != Xk.end && (Xk.end = Tk.changes.mapPos(Xk.end)), Fk.push(Xk)
                }
              }
              kk = Fk
            }
            for (let Fk of Tk.effects) Fk.is(Ik) && (kk = Fk.value), Fk.is(ri) && (kk = []);
            return kk
          },
          provide: kk => fi.from(kk)
        });
      return {
        active: Tk,
        extension: [Tk, rF.define((Xk => new Yi(Xk, kk, Tk, Ik, Fk.hoverTime || 300))), di]
      }
    }

    function mi(kk, Fk) {
      let Ik = kk.plugin(Ui);
      if (!Ik) return null;
      let Xk = Ik.manager.tooltips.indexOf(Fk);
      return Xk < 0 ? null : Ik.manager.tooltipViews[Xk]
    }
    const ri = Xk.F.define();
    const Di = Xk.p.define({
      combine(kk) {
        let Fk, Ik;
        for (let Xk of kk) Fk = Fk || Xk.topContainer, Ik = Ik || Xk.bottomContainer;
        return {
          topContainer: Fk,
          bottomContainer: Ik
        }
      }
    });

    function Mi(kk, Fk) {
      let Ik = kk.plugin(ky),
        Xk = Ik ? Ik.specs.indexOf(Fk) : -1;
      return Xk > -1 ? Ik.panels[Xk] : null
    }
    const ky = rF.fromClass(class {
      constructor(kk) {
        this.input = kk.state.facet(Xy), this.specs = this.input.filter((kk => kk)), this.panels = this.specs.map((Fk => Fk(kk)));
        let Fk = kk.state.facet(Di);
        this.top = new Fy(kk, !0, Fk.topContainer), this.bottom = new Fy(kk, !1, Fk.bottomContainer), this.top.sync(this.panels.filter((kk => kk.top))), this.bottom.sync(this.panels.filter((kk => !kk.top)));
        for (let Ik of this.panels) Ik.dom.classList.add("cm-panel"), Ik.mount && Ik.mount()
      }
      update(kk) {
        let Fk = kk.state.facet(Di);
        this.top.container != Fk.topContainer && (this.top.sync([]), this.top = new Fy(kk.view, !0, Fk.topContainer)), this.bottom.container != Fk.bottomContainer && (this.bottom.sync([]), this.bottom = new Fy(kk.view, !1, Fk.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let Ik = kk.state.facet(Xy);
        if (Ik != this.input) {
          let Fk = Ik.filter((kk => kk)),
            Xk = [],
            Tk = [],
            ik = [],
            yk = [];
          for (let Ik of Fk) {
            let Fk, lk = this.specs.indexOf(Ik);
            lk < 0 ? (Fk = Ik(kk.view), yk.push(Fk)) : (Fk = this.panels[lk], Fk.update && Fk.update(kk)), Xk.push(Fk), (Fk.top ? Tk : ik).push(Fk)
          }
          this.specs = Fk, this.panels = Xk, this.top.sync(Tk), this.bottom.sync(ik);
          for (let kk of yk) kk.dom.classList.add("cm-panel"), kk.mount && kk.mount()
        } else
          for (let Xk of this.panels) Xk.update && Xk.update(kk)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: kk => oT.scrollMargins.of((Fk => {
        let Ik = Fk.plugin(kk);
        return Ik && {
          top: Ik.top.scrollMargin(),
          bottom: Ik.bottom.scrollMargin()
        }
      }))
    });
    class Fy {
      constructor(kk, Fk, Ik) {
        this.view = kk, this.top = Fk, this.container = Ik, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
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
            for (; kk != Fk.dom;) kk = Iy(kk);
            kk = kk.nextSibling
          } else this.dom.insertBefore(Fk.dom, kk);
        for (; kk;) kk = Iy(kk)
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

    function Iy(kk) {
      let Fk = kk.nextSibling;
      return kk.remove(), Fk
    }
    const Xy = Xk.p.define({
      enables: ky
    });

    function Ty(kk, Fk) {
      let Ik, Tk = new Promise((kk => Ik = kk)),
        ik = kk => function(kk, Fk, Ik) {
          let Xk = Fk.content ? Fk.content(kk, (() => yk(null))) : null;
          if (!Xk) {
            if (Xk = (0, tk.d)("form"), Fk.input) {
              let kk = (0, tk.d)("input", Fk.input);
              /^(text|password|number|email|tel|url)$/.test(kk.type) && kk.classList.add("cm-textfield"), kk.name || (kk.name = "input"), Xk.appendChild((0, tk.d)("label", (Fk.label || "") + ": ", kk))
            } else Xk.appendChild(document.createTextNode(Fk.label || ""));
            Xk.appendChild(document.createTextNode(" ")), Xk.appendChild((0, tk.d)("button", {
              class: "cm-button",
              type: "submit"
            }, Fk.submitLabel || "OK"))
          }
          let Tk = "FORM" == Xk.nodeName ? [Xk] : Xk.querySelectorAll("form");
          for (let lk = 0; lk < Tk.length; lk++) {
            let kk = Tk[lk];
            kk.addEventListener("keydown", (Fk => {
              27 == Fk.keyCode ? (Fk.preventDefault(), yk(null)) : 13 == Fk.keyCode && (Fk.preventDefault(), yk(kk))
            })), kk.addEventListener("submit", (Fk => {
              Fk.preventDefault(), yk(kk)
            }))
          }
          let ik = (0, tk.d)("div", Xk, (0, tk.d)("button", {
            onclick: () => yk(null),
            "aria-label": kk.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          Fk.class && (ik.className = Fk.class);

          function yk(Fk) {
            ik.contains(ik.ownerDocument.activeElement) && kk.focus(), Ik(Fk)
          }
          return ik.classList.add("cm-dialog"), {
            dom: ik,
            top: Fk.top,
            mount: () => {
              if (Fk.focus) {
                let kk;
                kk = "string" == typeof Fk.focus ? Xk.querySelector(Fk.focus) : Xk.querySelector("input") || Xk.querySelector("button"), kk && "select" in kk ? kk.select() : kk && "focus" in kk && kk.focus()
              }
            }
          }
        }(kk, Fk, Ik);
      kk.state.field(iy, !1) ? kk.dispatch({
        effects: yy.of(ik)
      }) : kk.dispatch({
        effects: Xk.F.appendConfig.of(iy.init((() => [ik])))
      });
      let yk = ly.of(ik);
      return {
        close: yk,
        result: Tk.then((Fk => ((kk.win.queueMicrotask || (Fk => kk.win.setTimeout(Fk, 10)))((() => {
          kk.state.field(iy).indexOf(ik) > -1 && kk.dispatch({
            effects: yk
          })
        })), Fk)))
      }
    }
    const iy = Xk.I.define({
        create: () => [],
        update(kk, Fk) {
          for (let Ik of Fk.effects) Ik.is(yy) ? kk = [Ik.value].concat(kk) : Ik.is(ly) && (kk = kk.filter((kk => kk != Ik.value)));
          return kk
        },
        provide: kk => Xy.computeN([kk], (Fk => Fk.field(kk)))
      }),
      yy = Xk.F.define(),
      ly = Xk.F.define();
    class ay extends Xk.E {
      compare(kk) {
        return this == kk || this.constructor == kk.constructor && this.eq(kk)
      }
      eq(kk) {
        return !1
      }
      destroy(kk) {}
    }
    ay.prototype.elementClass = "", ay.prototype.toDOM = void 0, ay.prototype.mapMode = Xk.s.TrackBefore, ay.prototype.startSide = ay.prototype.endSide = -1, ay.prototype.point = !0;
    const qy = Xk.p.define(),
      Ly = Xk.p.define(),
      ty = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Xk.A.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      Zy = Xk.p.define();

    function jy(kk) {
      return [wy(), Zy.of({
        ...ty,
        ...kk
      })]
    }
    const ey = Xk.p.define({
      combine: kk => kk.some((kk => kk))
    });

    function wy(kk) {
      let Fk = [Hy];
      return kk && !1 === kk.fixed && Fk.push(ey.of(!0)), Fk
    }
    const Hy = rF.fromClass(class {
      constructor(kk) {
        this.view = kk, this.domAfter = null, this.prevViewport = kk.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = kk.state.facet(Zy).map((Fk => new Ky(kk, Fk))), this.fixed = !kk.state.facet(ey);
        for (let Fk of this.gutters) "after" == Fk.config.side ? this.getDOMAfter().appendChild(Fk.dom) : this.dom.appendChild(Fk.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), kk.scrollDOM.insertBefore(this.dom, kk.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(kk) {
        if (this.updateGutters(kk)) {
          let Fk = this.prevViewport,
            Ik = kk.view.viewport,
            Xk = Math.min(Fk.to, Ik.to) - Math.max(Fk.from, Ik.from);
          this.syncGutters(Xk < .8 * (Ik.to - Ik.from))
        }
        if (kk.geometryChanged) {
          let kk = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = kk, this.domAfter && (this.domAfter.style.minHeight = kk)
        }
        this.view.state.facet(ey) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = kk.view.viewport
      }
      syncGutters(kk) {
        let Fk = this.dom.nextSibling;
        kk && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let Ik = Xk.A.iter(this.view.state.facet(qy), this.view.viewport.from),
          Tk = [],
          ik = this.gutters.map((kk => new Py(kk, this.view.viewport, -this.view.documentPadding.top)));
        for (let Xk of this.view.viewportLineBlocks)
          if (Tk.length && (Tk = []), Array.isArray(Xk.type)) {
            let kk = !0;
            for (let Fk of Xk.type)
              if (Fk.type == Gk.Text && kk) {
                xy(Ik, Tk, Fk.from);
                for (let kk of ik) kk.line(this.view, Fk, Tk);
                kk = !1
              } else if (Fk.widget)
              for (let kk of ik) kk.widget(this.view, Fk)
          } else if (Xk.type == Gk.Text) {
          xy(Ik, Tk, Xk.from);
          for (let kk of ik) kk.line(this.view, Xk, Tk)
        } else if (Xk.widget)
          for (let kk of ik) kk.widget(this.view, Xk);
        for (let Xk of ik) Xk.finish();
        kk && (this.view.scrollDOM.insertBefore(this.dom, Fk), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(kk) {
        let Fk = kk.startState.facet(Zy),
          Ik = kk.state.facet(Zy),
          Tk = kk.docChanged || kk.heightChanged || kk.viewportChanged || !Xk.A.eq(kk.startState.facet(qy), kk.state.facet(qy), kk.view.viewport.from, kk.view.viewport.to);
        if (Fk == Ik)
          for (let Xk of this.gutters) Xk.update(kk) && (Tk = !0);
        else {
          Tk = !0;
          let Xk = [];
          for (let Tk of Ik) {
            let Ik = Fk.indexOf(Tk);
            Ik < 0 ? Xk.push(new Ky(this.view, Tk)) : (this.gutters[Ik].update(kk), Xk.push(this.gutters[Ik]))
          }
          for (let kk of this.gutters) kk.dom.remove(), Xk.indexOf(kk) < 0 && kk.destroy();
          for (let kk of Xk) "after" == kk.config.side ? this.getDOMAfter().appendChild(kk.dom) : this.dom.appendChild(kk.dom);
          this.gutters = Xk
        }
        return Tk
      }
      destroy() {
        for (let kk of this.gutters) kk.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: kk => oT.scrollMargins.of((Fk => {
        let Ik = Fk.plugin(kk);
        if (!Ik || 0 == Ik.gutters.length || !Ik.fixed) return null;
        let Xk = Ik.dom.offsetWidth * Fk.scaleX,
          Tk = Ik.domAfter ? Ik.domAfter.offsetWidth * Fk.scaleX : 0;
        return Fk.textDirection == LF.LTR ? {
          left: Xk,
          right: Tk
        } : {
          right: Xk,
          left: Tk
        }
      }))
    });

    function Jy(kk) {
      return Array.isArray(kk) ? kk : [kk]
    }

    function xy(kk, Fk, Ik) {
      for (; kk.value && kk.from <= Ik;) kk.from == Ik && Fk.push(kk.value), kk.next()
    }
    class Py {
      constructor(kk, Fk, Ik) {
        this.gutter = kk, this.height = Ik, this.i = 0, this.cursor = Xk.A.iter(kk.markers, Fk.from)
      }
      addElement(kk, Fk, Ik) {
        let {
          gutter: Xk
        } = this, Tk = (Fk.top - this.height) / kk.scaleY, ik = Fk.height / kk.scaleY;
        if (this.i == Xk.elements.length) {
          let Fk = new Qy(kk, ik, Tk, Ik);
          Xk.elements.push(Fk), Xk.dom.appendChild(Fk.dom)
        } else Xk.elements[this.i].update(kk, ik, Tk, Ik);
        this.height = Fk.bottom, this.i++
      }
      line(kk, Fk, Ik) {
        let Xk = [];
        xy(this.cursor, Xk, Fk.from), Ik.length && (Xk = Xk.concat(Ik));
        let Tk = this.gutter.config.lineMarker(kk, Fk, Xk);
        Tk && Xk.unshift(Tk);
        let ik = this.gutter;
        (0 != Xk.length || ik.config.renderEmptyElements) && this.addElement(kk, Fk, Xk)
      }
      widget(kk, Fk) {
        let Ik = this.gutter.config.widgetMarker(kk, Fk.widget, Fk),
          Xk = Ik ? [Ik] : null;
        for (let Tk of kk.state.facet(Ly)) {
          let Ik = Tk(kk, Fk.widget, Fk);
          Ik && (Xk || (Xk = [])).push(Ik)
        }
        Xk && this.addElement(kk, Fk, Xk)
      }
      finish() {
        let kk = this.gutter;
        for (; kk.elements.length > this.i;) {
          let Fk = kk.elements.pop();
          kk.dom.removeChild(Fk.dom), Fk.destroy()
        }
      }
    }
    class Ky {
      constructor(kk, Fk) {
        this.view = kk, this.config = Fk, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let Ik in Fk.domEventHandlers) this.dom.addEventListener(Ik, (Xk => {
          let Tk, ik = Xk.target;
          if (ik != this.dom && this.dom.contains(ik)) {
            for (; ik.parentNode != this.dom;) ik = ik.parentNode;
            let kk = ik.getBoundingClientRect();
            Tk = (kk.top + kk.bottom) / 2
          } else Tk = Xk.clientY;
          let yk = kk.lineBlockAtHeight(Tk - kk.documentTop);
          Fk.domEventHandlers[Ik](kk, yk, Xk) && Xk.preventDefault()
        }));
        this.markers = Jy(Fk.markers(kk)), Fk.initialSpacer && (this.spacer = new Qy(kk, 0, 0, [Fk.initialSpacer(kk)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(kk) {
        let Fk = this.markers;
        if (this.markers = Jy(this.config.markers(kk.view)), this.spacer && this.config.updateSpacer) {
          let Fk = this.config.updateSpacer(this.spacer.markers[0], kk);
          Fk != this.spacer.markers[0] && this.spacer.update(kk.view, 0, 0, [Fk])
        }
        let Ik = kk.view.viewport;
        return !Xk.A.eq(this.markers, Fk, Ik.from, Ik.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(kk)
      }
      destroy() {
        for (let kk of this.elements) kk.destroy()
      }
    }
    class Qy {
      constructor(kk, Fk, Ik, Xk) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(kk, Fk, Ik, Xk)
      }
      update(kk, Fk, Ik, Xk) {
        this.height != Fk && (this.height = Fk, this.dom.style.height = Fk + "px"), this.above != Ik && (this.dom.style.marginTop = (this.above = Ik) ? Ik + "px" : ""),
          function(kk, Fk) {
            if (kk.length != Fk.length) return !1;
            for (let Ik = 0; Ik < kk.length; Ik++)
              if (!kk[Ik].compare(Fk[Ik])) return !1;
            return !0
          }(this.markers, Xk) || this.setMarkers(kk, Xk)
      }
      setMarkers(kk, Fk) {
        let Ik = "cm-gutterElement",
          Xk = this.dom.firstChild;
        for (let Tk = 0, ik = 0;;) {
          let yk = ik,
            lk = Tk < Fk.length ? Fk[Tk++] : null,
            ak = !1;
          if (lk) {
            let kk = lk.elementClass;
            kk && (Ik += " " + kk);
            for (let Fk = ik; Fk < this.markers.length; Fk++)
              if (this.markers[Fk].compare(lk)) {
                yk = Fk, ak = !0;
                break
              }
          } else yk = this.markers.length;
          for (; ik < yk;) {
            let kk = this.markers[ik++];
            if (kk.toDOM) {
              kk.destroy(Xk);
              let Fk = Xk.nextSibling;
              Xk.remove(), Xk = Fk
            }
          }
          if (!lk) break;
          lk.toDOM && (ak ? Xk = Xk.nextSibling : this.dom.insertBefore(lk.toDOM(kk), Xk)), ak && ik++
        }
        this.dom.className = Ik, this.markers = Fk
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const sy = Xk.p.define(),
      Vy = Xk.p.define(),
      zy = Xk.p.define({
        combine: kk => (0, Xk.R)(kk, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(kk, Fk) {
            let Ik = Object.assign({}, kk);
            for (let Xk in Fk) {
              let kk = Ik[Xk],
                Tk = Fk[Xk];
              Ik[Xk] = kk ? (Fk, Ik, Xk) => kk(Fk, Ik, Xk) || Tk(Fk, Ik, Xk) : Tk
            }
            return Ik
          }
        })
      });
    class Sy extends ay {
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

    function oy(kk, Fk) {
      return kk.state.facet(zy).formatNumber(Fk, kk.state)
    }
    const vy = Zy.compute([zy], (kk => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: kk => kk.state.facet(sy),
      lineMarker: (kk, Fk, Ik) => Ik.some((kk => kk.toDOM)) ? null : new Sy(oy(kk, kk.state.doc.lineAt(Fk.from).number)),
      widgetMarker: (kk, Fk, Ik) => {
        for (let Xk of kk.state.facet(Vy)) {
          let Tk = Xk(kk, Fk, Ik);
          if (Tk) return Tk
        }
        return null
      },
      lineMarkerChange: kk => kk.startState.facet(zy) != kk.state.facet(zy),
      initialSpacer: kk => new Sy(oy(kk, Oy(kk.state.doc.lines))),
      updateSpacer(kk, Fk) {
        let Ik = oy(Fk.view, Oy(Fk.view.state.doc.lines));
        return Ik == kk.number ? kk : new Sy(Ik)
      },
      domEventHandlers: kk.facet(zy).domEventHandlers,
      side: "before"
    })));

    function Ey() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [zy.of(kk), wy(), vy]
    }

    function Oy(kk) {
      let Fk = 9;
      for (; Fk < kk;) Fk = 10 * Fk + 9;
      return Fk
    }
    const ny = new class extends ay {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      Gy = qy.compute(["selection"], (kk => {
        let Fk = [],
          Ik = -1;
        for (let Xk of kk.selection.nZ) {
          let Tk = kk.doc.lineAt(Xk.head).from;
          Tk > Ik && (Ik = Tk, Fk.push(ny.range(Tk)))
        }
        return Xk.A.of(Fk)
      }));

    function py() {
      return Gy
    }
  },
  41339: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk,
      f: () => jk,
      h: () => yk,
      k: () => Lk,
      o: () => qk,
      p: () => uk,
      s: () => Rk,
      u: () => bk,
      y: () => ek
    });
    const Xk = 1024;
    let Tk = 0;
    class ik {
      constructor(kk, Fk) {
        this.from = kk, this.to = Fk
      }
    }
    class yk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = Tk++, this.perNode = !!kk.perNode, this.deserialize = kk.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = kk.combine || null
      }
      add(kk) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof kk && (kk = qk.match(kk)), Fk => {
          let Ik = kk(Fk);
          return void 0 === Ik ? null : [this, Ik]
        }
      }
    }
    yk.closedBy = new yk({
      deserialize: kk => kk.split(" ")
    }), yk.openedBy = new yk({
      deserialize: kk => kk.split(" ")
    }), yk.group = new yk({
      deserialize: kk => kk.split(" ")
    }), yk.isolate = new yk({
      deserialize: kk => {
        if (kk && "rtl" != kk && "ltr" != kk && "auto" != kk) throw new RangeError("Invalid value for isolate: " + kk);
        return kk || "auto"
      }
    }), yk.contextHash = new yk({
      perNode: !0
    }), yk.lookAhead = new yk({
      perNode: !0
    }), yk.mounted = new yk({
      perNode: !0
    });
    class lk {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = kk, this.overlay = Fk, this.parser = Ik, this.bracketed = Xk
      }
      static get(kk) {
        return kk && kk.props && kk.props[yk.mounted.id]
      }
    }
    const ak = Object.create(null);
    class qk {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = kk, this.props = Fk, this.id = Ik, this.flags = Xk
      }
      static define(kk) {
        let Fk = kk.props && kk.props.length ? Object.create(null) : ak,
          Ik = (kk.top ? 1 : 0) | (kk.skipped ? 2 : 0) | (kk.error ? 4 : 0) | (null == kk.name ? 8 : 0),
          Xk = new qk(kk.name || "", Fk, kk.id, Ik);
        if (kk.props)
          for (let Tk of kk.props)
            if (Array.isArray(Tk) || (Tk = Tk(Xk)), Tk) {
              if (Tk[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              Fk[Tk[0].id] = Tk[1]
            } return Xk
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
          let Fk = this.prop(yk.group);
          return !!Fk && Fk.indexOf(kk) > -1
        }
        return this.id == kk
      }
      static match(kk) {
        let Fk = Object.create(null);
        for (let Ik in kk)
          for (let Xk of Ik.split(" ")) Fk[Xk] = kk[Ik];
        return kk => {
          for (let Ik = kk.prop(yk.group), Xk = -1; Xk < (Ik ? Ik.length : 0); Xk++) {
            let Tk = Fk[Xk < 0 ? kk.name : Ik[Xk]];
            if (Tk) return Tk
          }
        }
      }
    }
    qk.none = new qk("", Object.create(null), 0, 8);
    class Lk {
      constructor(kk) {
        this.types = kk;
        for (let Fk = 0; Fk < kk.length; Fk++)
          if (kk[Fk].id != Fk) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let kk = [];
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        for (let Tk of this.types) {
          let Fk = null;
          for (let kk of Ik) {
            let Ik = kk(Tk);
            if (Ik) {
              Fk || (Fk = Object.assign({}, Tk.props));
              let kk = Ik[1],
                Xk = Ik[0];
              Xk.combine && Xk.id in Fk && (kk = Xk.combine(Fk[Xk.id], kk)), Fk[Xk.id] = kk
            }
          }
          kk.push(Fk ? new qk(Tk.name, Fk, Tk.id, Tk.flags) : Tk)
        }
        return new Lk(kk)
      }
    }
    const tk = new WeakMap,
      Zk = new WeakMap;
    var jk;
    ! function(kk) {
      kk[kk.ExcludeBuffers = 1] = "ExcludeBuffers", kk[kk.IncludeAnonymous = 2] = "IncludeAnonymous", kk[kk.IgnoreMounts = 4] = "IgnoreMounts", kk[kk.IgnoreOverlays = 8] = "IgnoreOverlays", kk[kk.EnterBracketed = 16] = "EnterBracketed"
    }(jk || (jk = {}));
    class ek {
      constructor(kk, Fk, Ik, Xk, Tk) {
        if (this.type = kk, this.children = Fk, this.positions = Ik, this.length = Xk, this.props = null, Tk && Tk.length) {
          this.props = Object.create(null);
          for (let [kk, Fk] of Tk) this.props["number" == typeof kk ? kk : kk.id] = Fk
        }
      }
      toString() {
        let kk = lk.get(this);
        if (kk && !kk.overlay) return kk.tree.toString();
        let Fk = "";
        for (let Ik of this.children) {
          let kk = Ik.toString();
          kk && (Fk && (Fk += ","), Fk += kk)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (Fk.length ? "(" + Fk + ")" : "") : Fk
      }
      cursor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Ek(this.topNode, kk)
      }
      cursorAt(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = tk.get(this) || this.topNode,
          Xk = new Ek(Ik);
        return Xk.moveTo(kk, Fk), tk.set(this, Xk._tree), Xk
      }
      get topNode() {
        return new Kk(this, 0, 0, null)
      }
      resolve(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = xk(tk.get(this) || this.topNode, kk, Fk, !1);
        return tk.set(this, Ik), Ik
      }
      resolveInner(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = xk(Zk.get(this) || this.topNode, kk, Fk, !0);
        return Zk.set(this, Ik), Ik
      }
      resolveStack(kk) {
        return function(kk, Fk, Ik) {
          let Xk = kk.resolveInner(Fk, Ik),
            Tk = null;
          for (let ik = Xk instanceof Kk ? Xk : Xk.context.parent; ik; ik = ik.parent)
            if (ik.index < 0) {
              let kk = ik.parent;
              (Tk || (Tk = [Xk])).push(kk.resolve(Fk, Ik)), ik = kk
            } else {
              let kk = lk.get(ik.tree);
              if (kk && kk.overlay && kk.overlay[0].from <= Fk && kk.overlay[kk.overlay.length - 1].to >= Fk) {
                let yk = new Kk(kk.tree, kk.overlay[0].from + ik.from, -1, ik);
                (Tk || (Tk = [Xk])).push(xk(yk, Fk, Ik, !1))
              }
            } return Tk ? Sk(Tk) : Xk
        }(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(kk) {
        let {
          enter: Fk,
          leave: Ik,
          from: Xk = 0,
          to: Tk = this.length
        } = kk, ik = kk.mode || 0, yk = (ik & jk.IncludeAnonymous) > 0;
        for (let lk = this.cursor(ik | jk.IncludeAnonymous);;) {
          let kk = !1;
          if (lk.from <= Tk && lk.to >= Xk && (!yk && lk.type.isAnonymous || !1 !== Fk(lk))) {
            if (lk.firstChild()) continue;
            kk = !0
          }
          for (; kk && Ik && (yk || !lk.type.isAnonymous) && Ik(lk), !lk.nextSibling();) {
            if (!lk.parent()) return;
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
        return this.children.length <= 8 ? this : pk(qk.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((kk, Fk, Ik) => new ek(this.type, kk, Fk, Ik, this.propValues)), kk.makeTree || ((kk, Fk, Ik) => new ek(qk.none, kk, Fk, Ik)))
      }
      static build(kk) {
        return function(kk) {
          var Fk;
          let {
            buffer: Ik,
            nodeSet: Tk,
            maxBufferLength: ik = Xk,
            reused: lk = [],
            minRepeatType: ak = Tk.types.length
          } = kk, qk = Array.isArray(Ik) ? new wk(Ik, Ik.length) : Ik, Lk = Tk.types, tk = 0, Zk = 0;

          function jk(kk, Fk, Ik, Xk, yk, ek) {
            let {
              id: wk,
              start: Vk,
              end: zk,
              size: Sk
            } = qk, vk = Zk, Ek = tk;
            if (Sk < 0) {
              if (qk.next(), -1 == Sk) {
                let Fk = lk[wk];
                return Ik.push(Fk), void Xk.push(Vk - kk)
              }
              if (-3 == Sk) return void(tk = wk);
              if (-4 == Sk) return void(Zk = wk);
              throw new RangeError(`Unrecognized record size: ${Sk}`)
            }
            let Ok, nk, Gk = Lk[wk],
              uk = Vk - kk;
            if (zk - Vk <= ik && (nk = Qk(qk.pos - Fk, yk))) {
              let Fk = new Uint16Array(nk.size - nk.skip),
                Ik = qk.pos - nk.size,
                Xk = Fk.length;
              for (; qk.pos > Ik;) Xk = sk(nk.start, Fk, Xk);
              Ok = new Hk(Fk, zk - nk.start, Tk), uk = nk.start - kk
            } else {
              let kk = qk.pos - Sk;
              qk.next();
              let Fk = [],
                Ik = [],
                Xk = wk >= ak ? wk : -1,
                Tk = 0,
                yk = zk;
              for (; qk.pos > kk;) Xk >= 0 && qk.id == Xk && qk.size >= 0 ? (qk.end <= yk - ik && (Pk(Fk, Ik, Vk, Tk, qk.end, yk, Xk, vk, Ek), Tk = Fk.length, yk = qk.end), qk.next()) : ek > 2500 ? Jk(Vk, kk, Fk, Ik) : jk(Vk, kk, Fk, Ik, Xk, ek + 1);
              if (Xk >= 0 && Tk > 0 && Tk < Fk.length && Pk(Fk, Ik, Vk, Tk, Vk, yk, Xk, vk, Ek), Fk.reverse(), Ik.reverse(), Xk > -1 && Tk > 0) {
                let kk = xk(Gk, Ek);
                Ok = pk(Gk, Fk, Ik, 0, Fk.length, 0, zk - Vk, kk, kk)
              } else Ok = Kk(Gk, Fk, Ik, zk - Vk, vk - zk, Ek)
            }
            Ik.push(Ok), Xk.push(uk)
          }

          function Jk(kk, Fk, Ik, Xk) {
            let yk = [],
              lk = 0,
              ak = -1;
            for (; qk.pos > Fk;) {
              let {
                id: kk,
                start: Fk,
                end: Ik,
                size: Xk
              } = qk;
              if (Xk > 4) qk.next();
              else {
                if (ak > -1 && Fk < ak) break;
                ak < 0 && (ak = Ik - ik), yk.push(kk, Fk, Ik), lk++, qk.next()
              }
            }
            if (lk) {
              let Fk = new Uint16Array(4 * lk),
                ik = yk[yk.length - 2];
              for (let kk = yk.length - 3, Ik = 0; kk >= 0; kk -= 3) Fk[Ik++] = yk[kk], Fk[Ik++] = yk[kk + 1] - ik, Fk[Ik++] = yk[kk + 2] - ik, Fk[Ik++] = Ik;
              Ik.push(new Hk(Fk, yk[2] - ik, Tk)), Xk.push(ik - kk)
            }
          }

          function xk(kk, Fk) {
            return (Ik, Xk, Tk) => {
              let ik, lk, ak = 0,
                qk = Ik.length - 1;
              if (qk >= 0 && (ik = Ik[qk]) instanceof ek) {
                if (!qk && ik.type == kk && ik.length == Tk) return ik;
                (lk = ik.prop(yk.lookAhead)) && (ak = Xk[qk] + ik.length + lk)
              }
              return Kk(kk, Ik, Xk, Tk, ak, Fk)
            }
          }

          function Pk(kk, Fk, Ik, Xk, ik, yk, lk, ak, qk) {
            let Lk = [],
              tk = [];
            for (; kk.length > Xk;) Lk.push(kk.pop()), tk.push(Fk.pop() + Ik - ik);
            kk.push(Kk(Tk.types[lk], Lk, tk, yk - ik, ak - yk, qk)), Fk.push(ik - Ik)
          }

          function Kk(kk, Fk, Ik, Xk, Tk, ik, lk) {
            if (ik) {
              let kk = [yk.contextHash, ik];
              lk = lk ? [kk].concat(lk) : [kk]
            }
            if (Tk > 25) {
              let kk = [yk.lookAhead, Tk];
              lk = lk ? [kk].concat(lk) : [kk]
            }
            return new ek(kk, Fk, Ik, Xk, lk)
          }

          function Qk(kk, Fk) {
            let Ik = qk.fork(),
              Xk = 0,
              Tk = 0,
              yk = 0,
              lk = Ik.end - ik,
              Lk = {
                size: 0,
                start: 0,
                skip: 0
              };
            kk: for (let ik = Ik.pos - kk; Ik.pos > ik;) {
              let kk = Ik.size;
              if (Ik.id == Fk && kk >= 0) {
                Lk.size = Xk, Lk.start = Tk, Lk.skip = yk, yk += 4, Xk += 4, Ik.next();
                continue
              }
              let qk = Ik.pos - kk;
              if (kk < 0 || qk < ik || Ik.start < lk) break;
              let tk = Ik.id >= ak ? 4 : 0,
                Zk = Ik.start;
              for (Ik.next(); Ik.pos > qk;) {
                if (Ik.size < 0) {
                  if (-3 != Ik.size && -4 != Ik.size) break kk;
                  tk += 4
                } else Ik.id >= ak && (tk += 4);
                Ik.next()
              }
              Tk = Zk, Xk += kk, yk += tk
            }
            return (Fk < 0 || Xk == kk) && (Lk.size = Xk, Lk.start = Tk, Lk.skip = yk), Lk.size > 4 ? Lk : void 0
          }

          function sk(kk, Fk, Ik) {
            let {
              id: Xk,
              start: Tk,
              end: ik,
              size: yk
            } = qk;
            if (qk.next(), yk >= 0 && Xk < ak) {
              let lk = Ik;
              if (yk > 4) {
                let Xk = qk.pos - (yk - 4);
                for (; qk.pos > Xk;) Ik = sk(kk, Fk, Ik)
              }
              Fk[--Ik] = lk, Fk[--Ik] = ik - kk, Fk[--Ik] = Tk - kk, Fk[--Ik] = Xk
            } else - 3 == yk ? tk = Xk : -4 == yk && (Zk = Xk);
            return Ik
          }
          let Vk = [],
            zk = [];
          for (; qk.pos > 0;) jk(kk.start || 0, kk.bufferStart || 0, Vk, zk, -1, 0);
          let Sk = null !== (Fk = kk.length) && void 0 !== Fk ? Fk : Vk.length ? zk[0] + Vk[0].length : 0;
          return new ek(Lk[kk.topID], Vk.reverse(), zk.reverse(), Sk)
        }(kk)
      }
    }
    ek.empty = new ek(qk.none, [], [], 0);
    class wk {
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
        return new wk(this.buffer, this.index)
      }
    }
    class Hk {
      constructor(kk, Fk, Ik) {
        this.buffer = kk, this.length = Fk, this.set = Ik
      }
      get type() {
        return qk.none
      }
      toString() {
        let kk = [];
        for (let Fk = 0; Fk < this.buffer.length;) kk.push(this.childString(Fk)), Fk = this.buffer[Fk + 3];
        return kk.join(",")
      }
      childString(kk) {
        let Fk = this.buffer[kk],
          Ik = this.buffer[kk + 3],
          Xk = this.set.types[Fk],
          Tk = Xk.name;
        if (/\W/.test(Tk) && !Xk.isError && (Tk = JSON.stringify(Tk)), Ik == (kk += 4)) return Tk;
        let ik = [];
        for (; kk < Ik;) ik.push(this.childString(kk)), kk = this.buffer[kk + 3];
        return Tk + "(" + ik.join(",") + ")"
      }
      findChild(kk, Fk, Ik, Xk, Tk) {
        let {
          buffer: ik
        } = this, yk = -1;
        for (let lk = kk; lk != Fk && !(Jk(Tk, Xk, ik[lk + 1], ik[lk + 2]) && (yk = lk, Ik > 0)); lk = ik[lk + 3]);
        return yk
      }
      slice(kk, Fk, Ik) {
        let Xk = this.buffer,
          Tk = new Uint16Array(Fk - kk),
          ik = 0;
        for (let yk = kk, lk = 0; yk < Fk;) {
          Tk[lk++] = Xk[yk++], Tk[lk++] = Xk[yk++] - Ik;
          let Fk = Tk[lk++] = Xk[yk++] - Ik;
          Tk[lk++] = Xk[yk++] - kk, ik = Math.max(ik, Fk)
        }
        return new Hk(Tk, ik, this.set)
      }
    }

    function Jk(kk, Fk, Ik, Xk) {
      switch (kk) {
        case -2:
          return Ik < Fk;
        case -1:
          return Xk >= Fk && Ik < Fk;
        case 0:
          return Ik < Fk && Xk > Fk;
        case 1:
          return Ik <= Fk && Xk > Fk;
        case 2:
          return Xk > Fk;
        case 4:
          return !0
      }
    }

    function xk(kk, Fk, Ik, Xk) {
      for (var Tk; kk.from == kk.to || (Ik < 1 ? kk.from >= Fk : kk.from > Fk) || (Ik > -1 ? kk.to <= Fk : kk.to < Fk);) {
        let Fk = !Xk && kk instanceof Kk && kk.index < 0 ? null : kk.parent;
        if (!Fk) return kk;
        kk = Fk
      }
      let ik = Xk ? 0 : jk.IgnoreOverlays;
      if (Xk)
        for (let yk = kk, lk = yk.parent; lk; yk = lk, lk = yk.parent) yk instanceof Kk && yk.index < 0 && (null === (Tk = lk.enter(Fk, Ik, ik)) || void 0 === Tk ? void 0 : Tk.from) != yk.from && (kk = lk);
      for (;;) {
        let Xk = kk.enter(Fk, Ik, ik);
        if (!Xk) return kk;
        kk = Xk
      }
    }
    class Pk {
      cursor() {
        return new Ek(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(kk) {
        let Fk = Qk(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return Fk.length ? Fk[0] : null
      }
      getChildren(kk) {
        return Qk(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(kk) {
        return xk(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(kk) {
        return xk(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(kk) {
        return sk(this.parent, kk)
      }
      enterUnfinishedNodesBefore(kk) {
        let Fk = this.childBefore(kk),
          Ik = this;
        for (; Fk;) {
          let kk = Fk.lastChild;
          if (!kk || kk.to != Fk.to) break;
          kk.type.isError && kk.from == kk.to ? (Ik = Fk, Fk = kk.prevSibling) : Fk = kk
        }
        return Ik
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class Kk extends Pk {
      constructor(kk, Fk, Ik, Xk) {
        super(), this._tree = kk, this.from = Fk, this.index = Ik, this._parent = Xk
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
      nextChild(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let ik = this;;) {
          for (let {
              children: yk,
              positions: ak
            } = ik._tree, qk = Fk > 0 ? yk.length : -1; kk != qk; kk += Fk) {
            let qk, Lk = yk[kk],
              tk = ak[kk] + ik.from;
            if (Tk & jk.EnterBracketed && Lk instanceof ek && (qk = lk.get(Lk)) && !qk.overlay && qk.bracketed && Ik >= tk && Ik <= tk + Lk.length || Jk(Xk, Ik, tk, tk + Lk.length))
              if (Lk instanceof Hk) {
                if (Tk & jk.ExcludeBuffers) continue;
                let yk = Lk.findChild(0, Lk.buffer.length, Fk, Ik - tk, Xk);
                if (yk > -1) return new zk(new Vk(ik, Lk, kk, tk), null, yk)
              } else if (Tk & jk.IncludeAnonymous || !Lk.type.isAnonymous || Ok(Lk)) {
              let yk;
              if (!(Tk & jk.IgnoreMounts) && (yk = lk.get(Lk)) && !yk.overlay) return new Kk(yk.tree, tk, kk, ik);
              let ak = new Kk(Lk, tk, kk, ik);
              return Tk & jk.IncludeAnonymous || !ak.type.isAnonymous ? ak : ak.nextChild(Fk < 0 ? Lk.children.length - 1 : 0, Fk, Ik, Xk, Tk)
            }
          }
          if (Tk & jk.IncludeAnonymous || !ik.type.isAnonymous) return null;
          if (kk = ik.index >= 0 ? ik.index + Fk : Fk < 0 ? -1 : ik._parent._tree.children.length, ik = ik._parent, !ik) return null
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
        let Ik, Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Xk & jk.IgnoreOverlays) && (Ik = lk.get(this._tree)) && Ik.overlay) {
          let Tk = kk - this.from,
            ik = Xk & jk.EnterBracketed && Ik.bracketed;
          for (let {
              from: kk,
              to: Xk
            }
            of Ik.overlay)
            if ((Fk > 0 || ik ? kk <= Tk : kk < Tk) && (Fk < 0 || ik ? Xk >= Tk : Xk > Tk)) return new Kk(Ik.tree, Ik.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, kk, Fk, Xk)
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

    function Qk(kk, Fk, Ik, Xk) {
      let Tk = kk.cursor(),
        ik = [];
      if (!Tk.firstChild()) return ik;
      if (null != Ik)
        for (let yk = !1; !yk;)
          if (yk = Tk.type.is(Ik), !Tk.nextSibling()) return ik;
      for (;;) {
        if (null != Xk && Tk.type.is(Xk)) return ik;
        if (Tk.type.is(Fk) && ik.push(Tk.node), !Tk.nextSibling()) return null == Xk ? ik : []
      }
    }

    function sk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fk.length - 1;
      for (let Xk = kk; Ik >= 0; Xk = Xk.parent) {
        if (!Xk) return !1;
        if (!Xk.type.isAnonymous) {
          if (Fk[Ik] && Fk[Ik] != Xk.name) return !1;
          Ik--
        }
      }
      return !0
    }
    class Vk {
      constructor(kk, Fk, Ik, Xk) {
        this.parent = kk, this.buffer = Fk, this.index = Ik, this.start = Xk
      }
    }
    class zk extends Pk {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(kk, Fk, Ik) {
        super(), this.context = kk, this._parent = Fk, this.index = Ik, this.type = kk.buffer.set.types[kk.buffer.buffer[Ik]]
      }
      child(kk, Fk, Ik) {
        let {
          buffer: Xk
        } = this.context, Tk = Xk.findChild(this.index + 4, Xk.buffer[this.index + 3], kk, Fk - this.context.start, Ik);
        return Tk < 0 ? null : new zk(this.context, this, Tk)
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
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & jk.ExcludeBuffers) return null;
        let {
          buffer: Ik
        } = this.context, Xk = Ik.findChild(this.index + 4, Ik.buffer[this.index + 3], Fk > 0 ? 1 : -1, kk - this.context.start, Fk);
        return Xk < 0 ? null : new zk(this.context, this, Xk)
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
        return Fk < (this._parent ? kk.buffer[this._parent.index + 3] : kk.buffer.length) ? new zk(this.context, this._parent, Fk) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: kk
        } = this.context, Fk = this._parent ? this._parent.index + 4 : 0;
        return this.index == Fk ? this.externalSibling(-1) : new zk(this.context, this._parent, kk.findChild(Fk, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let kk = [],
          Fk = [],
          {
            buffer: Ik
          } = this.context,
          Xk = this.index + 4,
          Tk = Ik.buffer[this.index + 3];
        if (Tk > Xk) {
          let ik = Ik.buffer[this.index + 1];
          kk.push(Ik.slice(Xk, Tk, ik)), Fk.push(0)
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
        Ik = kk[0];
      for (let ik = 1; ik < kk.length; ik++) {
        let Xk = kk[ik];
        (Xk.from > Ik.from || Xk.to < Ik.to) && (Ik = Xk, Fk = ik)
      }
      let Xk = Ik instanceof Kk && Ik.index < 0 ? null : Ik.parent,
        Tk = kk.slice();
      return Xk ? Tk[Fk] = Xk : Tk.splice(Fk, 1), new vk(Tk, Ik)
    }
    class vk {
      constructor(kk, Fk) {
        this.heads = kk, this.node = Fk
      }
      get next() {
        return Sk(this.heads)
      }
    }
    class Ek {
      get name() {
        return this.type.name
      }
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = Fk & ~jk.EnterBracketed, kk instanceof Kk) this.yieldNode(kk);
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
          start: Ik,
          buffer: Xk
        } = this.buffer;
        return this.type = Fk || Xk.set.types[Xk.buffer[kk]], this.from = Ik + Xk.buffer[kk + 1], this.to = Ik + Xk.buffer[kk + 2], !0
      }
      yield(kk) {
        return !!kk && (kk instanceof Kk ? (this.buffer = null, this.yieldNode(kk)) : (this.buffer = kk.context, this.yieldBuf(kk.index, kk.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(kk, Fk, Ik) {
        if (!this.buffer) return this.yield(this._tree.nextChild(kk < 0 ? this._tree._tree.children.length - 1 : 0, kk, Fk, Ik, this.mode));
        let {
          buffer: Xk
        } = this.buffer, Tk = Xk.findChild(this.index + 4, Xk.buffer[this.index + 3], kk, Fk - this.buffer.start, Ik);
        return !(Tk < 0) && (this.stack.push(this.index), this.yieldBuf(Tk))
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
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(Ik & jk.ExcludeBuffers) && this.enterChild(1, kk, Fk) : this.yield(this._tree.enter(kk, Fk, Ik))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & jk.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let kk = this.mode & jk.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(kk)
      }
      sibling(kk) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + kk, kk, 0, 4, this.mode));
        let {
          buffer: Fk
        } = this.buffer, Ik = this.stack.length - 1;
        if (kk < 0) {
          let kk = Ik < 0 ? 0 : this.stack[Ik] + 4;
          if (this.index != kk) return this.yieldBuf(Fk.findChild(kk, this.index, -1, 0, 4))
        } else {
          let kk = Fk.buffer[this.index + 3];
          if (kk < (Ik < 0 ? Fk.buffer.length : Fk.buffer[this.stack[Ik] + 3])) return this.yieldBuf(kk)
        }
        return Ik < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + kk, kk, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(kk) {
        let Fk, Ik, {
          buffer: Xk
        } = this;
        if (Xk) {
          if (kk > 0) {
            if (this.index < Xk.buffer.buffer.length) return !1
          } else
            for (let kk = 0; kk < this.index; kk++)
              if (Xk.buffer.buffer[kk + 3] < this.index) return !1;
          ({
            index: Fk,
            parent: Ik
          } = Xk)
        } else({
          index: Fk,
          _parent: Ik
        } = this._tree);
        for (; Ik;
          ({
            index: Fk,
            _parent: Ik
          } = Ik))
          if (Fk > -1)
            for (let Xk = Fk + kk, Tk = kk < 0 ? -1 : Ik._tree.children.length; Xk != Tk; Xk += kk) {
              let kk = Ik._tree.children[Xk];
              if (this.mode & jk.IncludeAnonymous || kk instanceof Hk || !kk.type.isAnonymous || Ok(kk)) return !1
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
          Ik = 0;
        if (kk && kk.context == this.buffer) kk: for (let Xk = this.index, Tk = this.stack.length; Tk >= 0;) {
          for (let ik = kk; ik; ik = ik._parent)
            if (ik.index == Xk) {
              if (Xk == this.index) return ik;
              Fk = ik, Ik = Tk + 1;
              break kk
            } Xk = this.stack[--Tk]
        }
        for (let Xk = Ik; Xk < this.stack.length; Xk++) Fk = new zk(this.buffer, Fk, this.stack[Xk]);
        return this.bufferNode = new zk(this.buffer, Fk, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(kk, Fk) {
        for (let Ik = 0;;) {
          let Xk = !1;
          if (this.type.isAnonymous || !1 !== kk(this)) {
            if (this.firstChild()) {
              Ik++;
              continue
            }
            this.type.isAnonymous || (Xk = !0)
          }
          for (;;) {
            if (Xk && Fk && Fk(this), Xk = this.type.isAnonymous, !Ik) return;
            if (this.nextSibling()) break;
            this.parent(), Ik--, Xk = !0
          }
        }
      }
      matchContext(kk) {
        if (!this.buffer) return sk(this.node.parent, kk);
        let {
          buffer: Fk
        } = this.buffer, {
          types: Ik
        } = Fk.set;
        for (let Xk = kk.length - 1, Tk = this.stack.length - 1; Xk >= 0; Tk--) {
          if (Tk < 0) return sk(this._tree, kk, Xk);
          let ik = Ik[Fk.buffer[this.stack[Tk]]];
          if (!ik.isAnonymous) {
            if (kk[Xk] && kk[Xk] != ik.name) return !1;
            Xk--
          }
        }
        return !0
      }
    }

    function Ok(kk) {
      return kk.children.some((kk => kk instanceof Hk || !kk.type.isAnonymous || Ok(kk)))
    }
    const nk = new WeakMap;

    function Gk(kk, Fk) {
      if (!kk.isAnonymous || Fk instanceof Hk || Fk.type != kk) return 1;
      let Ik = nk.get(Fk);
      if (null == Ik) {
        Ik = 1;
        for (let Xk of Fk.children) {
          if (Xk.type != kk || !(Xk instanceof ek)) {
            Ik = 1;
            break
          }
          Ik += Gk(kk, Xk)
        }
        nk.set(Fk, Ik)
      }
      return Ik
    }

    function pk(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
      let qk = 0;
      for (let jk = Xk; jk < Tk; jk++) qk += Gk(kk, Fk[jk]);
      let Lk = Math.ceil(1.5 * qk / 8),
        tk = [],
        Zk = [];
      return function Fk(Ik, Xk, Tk, yk, lk) {
        for (let qk = Tk; qk < yk;) {
          let Tk = qk,
            jk = Xk[qk],
            ek = Gk(kk, Ik[qk]);
          for (qk++; qk < yk; qk++) {
            let Fk = Gk(kk, Ik[qk]);
            if (ek + Fk >= Lk) break;
            ek += Fk
          }
          if (qk == Tk + 1) {
            if (ek > Lk) {
              let kk = Ik[Tk];
              Fk(kk.children, kk.positions, 0, kk.children.length, Xk[Tk] + lk);
              continue
            }
            tk.push(Ik[Tk])
          } else {
            let Fk = Xk[qk - 1] + Ik[qk - 1].length - jk;
            tk.push(pk(kk, Ik, Xk, Tk, qk, jk, Fk, null, ak))
          }
          Zk.push(jk + lk - ik)
        }
      }(Fk, Ik, Xk, Tk, 0), (lk || ak)(tk, Zk, yk)
    }
    class uk {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(kk, Fk, Ik) {
        let Xk = this.map.get(kk);
        Xk || this.map.set(kk, Xk = new Map), Xk.set(Fk, Ik)
      }
      getBuffer(kk, Fk) {
        let Ik = this.map.get(kk);
        return Ik && Ik.get(Fk)
      }
      set(kk, Fk) {
        kk instanceof zk ? this.setBuffer(kk.context.buffer, kk.index, Fk) : kk instanceof Kk && this.map.set(kk.tree, Fk)
      }
      get(kk) {
        return kk instanceof zk ? this.getBuffer(kk.context.buffer, kk.index) : kk instanceof Kk ? this.map.get(kk.tree) : void 0
      }
      cursorSet(kk, Fk) {
        kk.buffer ? this.setBuffer(kk.buffer.buffer, kk.index, Fk) : this.map.set(kk.tree, Fk)
      }
      cursorGet(kk) {
        return kk.buffer ? this.getBuffer(kk.buffer.buffer, kk.index) : this.map.get(kk.tree)
      }
    }
    class bk {
      constructor(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = kk, this.to = Fk, this.tree = Ik, this.offset = Xk, this.open = (Tk ? 1 : 0) | (ik ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = [new bk(0, kk.length, kk, 0, !1, Ik)];
        for (let Tk of Fk) Tk.to > kk.length && Xk.push(Tk);
        return Xk
      }
      static applyChanges(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!Fk.length) return kk;
        let Xk = [],
          Tk = 1,
          ik = kk.length ? kk[0] : null;
        for (let yk = 0, lk = 0, ak = 0;; yk++) {
          let qk = yk < Fk.length ? Fk[yk] : null,
            Lk = qk ? qk.fromA : 1e9;
          if (Lk - lk >= Ik)
            for (; ik && ik.from < Lk;) {
              let Fk = ik;
              if (lk >= Fk.from || Lk <= Fk.to || ak) {
                let kk = Math.max(Fk.from, lk) - ak,
                  Ik = Math.min(Fk.to, Lk) - ak;
                Fk = kk >= Ik ? null : new bk(kk, Ik, Fk.tree, Fk.offset + ak, yk > 0, !!qk)
              }
              if (Fk && Xk.push(Fk), ik.to > Lk) break;
              ik = Tk < kk.length ? kk[Tk++] : null
            }
          if (!qk) break;
          lk = qk.toA, ak = qk.toA - qk.toB
        }
        return Xk
      }
    }
    class Rk {
      startParse(kk, Fk, Ik) {
        return "string" == typeof kk && (kk = new Uk(kk)), Ik = Ik ? Ik.length ? Ik.map((kk => new ik(kk.from, kk.to))) : [new ik(0, 0)] : [new ik(0, kk.length)], this.createParse(kk, Fk || [], Ik)
      }
      parse(kk, Fk, Ik) {
        let Xk = this.startParse(kk, Fk, Ik);
        for (;;) {
          let kk = Xk.advance();
          if (kk) return kk
        }
      }
    }
    class Uk {
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
    new yk({
      perNode: !0
    })
  },
  41341: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Zk,
      g: () => ak,
      j: () => tk,
      k: () => nk
    });
    var Xk = Ik(41339);
    let Tk = 0;
    class ik {
      constructor(kk, Fk, Ik, Xk) {
        this.name = kk, this.set = Fk, this.base = Ik, this.modified = Xk, this.id = Tk++
      }
      toString() {
        let {
          name: kk
        } = this;
        for (let Fk of this.modified) Fk.name && (kk = `${Fk.name}(${kk})`);
        return kk
      }
      static define(kk, Fk) {
        let Ik = "string" == typeof kk ? kk : "?";
        if (kk instanceof ik && (Fk = kk), null === Fk || void 0 === Fk ? void 0 : Fk.base) throw new Error("Can not derive from a modified tag");
        let Xk = new ik(Ik, [], null, []);
        if (Xk.set.push(Xk), Fk)
          for (let Tk of Fk.set) Xk.set.push(Tk);
        return Xk
      }
      static defineModifier(kk) {
        let Fk = new lk(kk);
        return kk => kk.modified.indexOf(Fk) > -1 ? kk : lk.get(kk.base || kk, kk.modified.concat(Fk).sort(((kk, Fk) => kk.id - Fk.id)))
      }
    }
    let yk = 0;
    class lk {
      constructor(kk) {
        this.name = kk, this.instances = [], this.id = yk++
      }
      static get(kk, Fk) {
        if (!Fk.length) return kk;
        let Ik = Fk[0].instances.find((Ik => {
          return Ik.base == kk && (Xk = Fk, Tk = Ik.modified, Xk.length == Tk.length && Xk.every(((kk, Fk) => kk == Tk[Fk])));
          var Xk, Tk
        }));
        if (Ik) return Ik;
        let Xk = [],
          Tk = new ik(kk.name, Xk, kk, Fk);
        for (let ik of Fk) ik.instances.push(Tk);
        let yk = function(kk) {
          let Fk = [
            []
          ];
          for (let Ik = 0; Ik < kk.length; Ik++)
            for (let Xk = 0, Tk = Fk.length; Xk < Tk; Xk++) Fk.push(Fk[Xk].concat(kk[Ik]));
          return Fk.sort(((kk, Fk) => Fk.length - kk.length))
        }(Fk);
        for (let ik of kk.set)
          if (!ik.modified.length)
            for (let kk of yk) Xk.push(lk.get(ik, kk));
        return Tk
      }
    }

    function ak(kk) {
      let Fk = Object.create(null);
      for (let Ik in kk) {
        let Xk = kk[Ik];
        Array.isArray(Xk) || (Xk = [Xk]);
        for (let kk of Ik.split(" "))
          if (kk) {
            let Ik = [],
              Tk = 2,
              ik = kk;
            for (let Fk = 0;;) {
              if ("..." == ik && Fk > 0 && Fk + 3 == kk.length) {
                Tk = 1;
                break
              }
              let Xk = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(ik);
              if (!Xk) throw new RangeError("Invalid path: " + kk);
              if (Ik.push("*" == Xk[0] ? "" : '"' == Xk[0][0] ? JSON.parse(Xk[0]) : Xk[0]), Fk += Xk[0].length, Fk == kk.length) break;
              let yk = kk[Fk++];
              if (Fk == kk.length && "!" == yk) {
                Tk = 0;
                break
              }
              if ("/" != yk) throw new RangeError("Invalid path: " + kk);
              ik = kk.slice(Fk)
            }
            let yk = Ik.length - 1,
              lk = Ik[yk];
            if (!lk) throw new RangeError("Invalid path: " + kk);
            let ak = new Lk(Xk, Tk, yk > 0 ? Ik.slice(0, yk) : null);
            Fk[lk] = ak.sort(Fk[lk])
          }
      }
      return qk.add(Fk)
    }
    const qk = new Xk.h({
      combine(kk, Fk) {
        let Ik, Xk, Tk;
        for (; kk || Fk;) {
          if (!kk || Fk && kk.depth >= Fk.depth ? (Tk = Fk, Fk = Fk.next) : (Tk = kk, kk = kk.next), Ik && Ik.mode == Tk.mode && !Tk.context && !Ik.context) continue;
          let ik = new Lk(Tk.tags, Tk.mode, Tk.context);
          Ik ? Ik.next = ik : Xk = ik, Ik = ik
        }
        return Xk
      }
    });
    class Lk {
      constructor(kk, Fk, Ik, Xk) {
        this.tags = kk, this.mode = Fk, this.context = Ik, this.next = Xk
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

    function tk(kk, Fk) {
      let Ik = Object.create(null);
      for (let ik of kk)
        if (Array.isArray(ik.tag))
          for (let kk of ik.tag) Ik[kk.id] = ik.class;
        else Ik[ik.tag.id] = ik.class;
      let {
        scope: Xk,
        all: Tk = null
      } = Fk || {};
      return {
        style: kk => {
          let Fk = Tk;
          for (let Xk of kk)
            for (let kk of Xk.set) {
              let Xk = Ik[kk.id];
              if (Xk) {
                Fk = Fk ? Fk + " " + Xk : Xk;
                break
              }
            }
          return Fk
        },
        scope: Xk
      }
    }

    function Zk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kk.length,
        ik = new jk(Xk, Array.isArray(Fk) ? Fk : [Fk], Ik);
      ik.highlightRange(kk.cursor(), Xk, Tk, "", ik.highlighters), ik.flush(Tk)
    }
    Lk.empty = new Lk([], 2, null);
    class jk {
      constructor(kk, Fk, Ik) {
        this.at = kk, this.highlighters = Fk, this.span = Ik, this.class = ""
      }
      startSpan(kk, Fk) {
        Fk != this.class && (this.flush(kk), kk > this.at && (this.at = kk), this.class = Fk)
      }
      flush(kk) {
        kk > this.at && this.class && this.span(this.at, kk, this.class)
      }
      highlightRange(kk, Fk, Ik, Tk, ik) {
        let {
          type: yk,
          from: lk,
          to: ak
        } = kk;
        if (lk >= Ik || ak <= Fk) return;
        yk.isTop && (ik = this.highlighters.filter((kk => !kk.scope || kk.scope(yk))));
        let tk = Tk,
          Zk = function(kk) {
            let Fk = kk.type.prop(qk);
            for (; Fk && Fk.context && !kk.matchContext(Fk.context);) Fk = Fk.next;
            return Fk || null
          }(kk) || Lk.empty,
          jk = function(kk, Fk) {
            let Ik = null;
            for (let Xk of kk) {
              let kk = Xk.style(Fk);
              kk && (Ik = Ik ? Ik + " " + kk : kk)
            }
            return Ik
          }(ik, Zk.tags);
        if (jk && (tk && (tk += " "), tk += jk, 1 == Zk.mode && (Tk += (Tk ? " " : "") + jk)), this.startSpan(Math.max(Fk, lk), tk), Zk.opaque) return;
        let ek = kk.tree && kk.tree.prop(Xk.h.mounted);
        if (ek && ek.overlay) {
          let Xk = kk.node.enter(ek.overlay[0].from + lk, 1),
            yk = this.highlighters.filter((kk => !kk.scope || kk.scope(ek.tree.type))),
            qk = kk.firstChild();
          for (let Lk = 0, Zk = lk;; Lk++) {
            let jk = Lk < ek.overlay.length ? ek.overlay[Lk] : null,
              wk = jk ? jk.from + lk : ak,
              Hk = Math.max(Fk, Zk),
              Jk = Math.min(Ik, wk);
            if (Hk < Jk && qk)
              for (; kk.from < Jk && (this.highlightRange(kk, Hk, Jk, Tk, ik), this.startSpan(Math.min(Jk, kk.to), tk), !(kk.to >= wk) && kk.nextSibling()););
            if (!jk || wk > Ik) break;
            Zk = jk.to + lk, Zk > Fk && (this.highlightRange(Xk.cursor(), Math.max(Fk, jk.from + lk), Math.min(Ik, Zk), "", yk), this.startSpan(Math.min(Ik, Zk), tk))
          }
          qk && kk.parent()
        } else if (kk.firstChild()) {
          ek && (Tk = "");
          do {
            if (!(kk.to <= Fk)) {
              if (kk.from >= Ik) break;
              this.highlightRange(kk, Fk, Ik, Tk, ik), this.startSpan(Math.min(Ik, kk.to), tk)
            }
          } while (kk.nextSibling());
          kk.parent()
        }
      }
    }
    const ek = ik.define,
      wk = ek(),
      Hk = ek(),
      Jk = ek(Hk),
      xk = ek(Hk),
      Pk = ek(),
      Kk = ek(Pk),
      Qk = ek(Pk),
      sk = ek(),
      Vk = ek(sk),
      zk = ek(),
      Sk = ek(),
      vk = ek(),
      Ek = ek(vk),
      Ok = ek(),
      nk = {
        comment: wk,
        lineComment: ek(wk),
        blockComment: ek(wk),
        docComment: ek(wk),
        name: Hk,
        variableName: ek(Hk),
        typeName: Jk,
        tagName: ek(Jk),
        propertyName: xk,
        attributeName: ek(xk),
        className: ek(Hk),
        labelName: ek(Hk),
        namespace: ek(Hk),
        macroName: ek(Hk),
        literal: Pk,
        string: Kk,
        docString: ek(Kk),
        character: ek(Kk),
        attributeValue: ek(Kk),
        number: Qk,
        integer: ek(Qk),
        float: ek(Qk),
        bool: ek(Pk),
        regexp: ek(Pk),
        escape: ek(Pk),
        color: ek(Pk),
        url: ek(Pk),
        keyword: zk,
        self: ek(zk),
        null: ek(zk),
        atom: ek(zk),
        unit: ek(zk),
        modifier: ek(zk),
        operatorKeyword: ek(zk),
        controlKeyword: ek(zk),
        definitionKeyword: ek(zk),
        moduleKeyword: ek(zk),
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
        punctuation: vk,
        separator: ek(vk),
        bracket: Ek,
        angleBracket: ek(Ek),
        squareBracket: ek(Ek),
        paren: ek(Ek),
        brace: ek(Ek),
        content: sk,
        heading: Vk,
        heading1: ek(Vk),
        heading2: ek(Vk),
        heading3: ek(Vk),
        heading4: ek(Vk),
        heading5: ek(Vk),
        heading6: ek(Vk),
        contentSeparator: ek(sk),
        list: ek(sk),
        quote: ek(sk),
        emphasis: ek(sk),
        strong: ek(sk),
        link: ek(sk),
        monospace: ek(sk),
        strikethrough: ek(sk),
        inserted: ek(),
        deleted: ek(),
        changed: ek(),
        invalid: ek(),
        meta: Ok,
        documentMeta: ek(Ok),
        annotation: ek(Ok),
        processingInstruction: ek(Ok),
        definition: ik.defineModifier("definition"),
        constant: ik.defineModifier("constant"),
        function: ik.defineModifier("function"),
        standard: ik.defineModifier("standard"),
        local: ik.defineModifier("local"),
        special: ik.defineModifier("special")
      };
    for (let Gk in nk) {
      let kk = nk[Gk];
      kk instanceof ik && (kk.name = Gk)
    }
    tk([{
      tag: nk.link,
      class: "tok-link"
    }, {
      tag: nk.heading,
      class: "tok-heading"
    }, {
      tag: nk.emphasis,
      class: "tok-emphasis"
    }, {
      tag: nk.strong,
      class: "tok-strong"
    }, {
      tag: nk.keyword,
      class: "tok-keyword"
    }, {
      tag: nk.atom,
      class: "tok-atom"
    }, {
      tag: nk.bool,
      class: "tok-bool"
    }, {
      tag: nk.url,
      class: "tok-url"
    }, {
      tag: nk.labelName,
      class: "tok-labelName"
    }, {
      tag: nk.inserted,
      class: "tok-inserted"
    }, {
      tag: nk.deleted,
      class: "tok-deleted"
    }, {
      tag: nk.literal,
      class: "tok-literal"
    }, {
      tag: nk.string,
      class: "tok-string"
    }, {
      tag: nk.number,
      class: "tok-number"
    }, {
      tag: [nk.regexp, nk.escape, nk.special(nk.string)],
      class: "tok-string2"
    }, {
      tag: nk.variableName,
      class: "tok-variableName"
    }, {
      tag: nk.local(nk.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: nk.definition(nk.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: nk.special(nk.variableName),
      class: "tok-variableName2"
    }, {
      tag: nk.definition(nk.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: nk.typeName,
      class: "tok-typeName"
    }, {
      tag: nk.namespace,
      class: "tok-namespace"
    }, {
      tag: nk.className,
      class: "tok-className"
    }, {
      tag: nk.macroName,
      class: "tok-macroName"
    }, {
      tag: nk.propertyName,
      class: "tok-propertyName"
    }, {
      tag: nk.operator,
      class: "tok-operator"
    }, {
      tag: nk.comment,
      class: "tok-comment"
    }, {
      tag: nk.meta,
      class: "tok-meta"
    }, {
      tag: nk.invalid,
      class: "tok-invalid"
    }, {
      tag: nk.punctuation,
      class: "tok-punctuation"
    }])
  },
  41351: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk.i,
      d: () => yk.u,
      g: () => yk.F,
      h: () => yk.I,
      i: () => lk.l,
      k: () => zI,
      m: () => lk.M,
      o: () => lk.jb
    });
    var Xk = Ik(1355),
      Tk = Ik(1348),
      ik = Ik(58),
      yk = Ik(41315),
      lk = Ik(41319),
      ak = Ik(41335),
      qk = Ik(41339);

    function Lk(kk, Fk) {
      return Ik => {
        let {
          state: Xk,
          dispatch: Tk
        } = Ik;
        if (Xk.readOnly) return !1;
        let ik = kk(Fk, Xk);
        return !!ik && (Tk(Xk.update(ik)), !0)
      }
    }
    const tk = Lk(Jk, 0),
      Zk = Lk(Hk, 0),
      jk = Lk(((kk, Fk) => Hk(kk, Fk, function(kk) {
        let Fk = [];
        for (let Ik of kk.selection.nZ) {
          let Xk = kk.doc.lineAt(Ik.from),
            Tk = Ik.to <= Xk.to ? Xk : kk.doc.lineAt(Ik.to);
          Tk.from > Xk.from && Tk.from == Ik.to && (Tk = Ik.to == Xk.to + 1 ? Xk : kk.doc.lineAt(Ik.to - 1));
          let ik = Fk.length - 1;
          ik >= 0 && Fk[ik].to > Xk.from ? Fk[ik].to = Tk.to : Fk.push({
            from: Xk.from + /^\s*/.exec(Xk.text)[0].length,
            to: Tk.to
          })
        }
        return Fk
      }(Fk))), 0);

    function ek(kk, Fk) {
      let Ik = kk.languageDataAt("commentTokens", Fk, 1);
      return Ik.length ? Ik[0] : {}
    }
    const wk = 50;

    function Hk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fk.selection.nZ,
        Xk = Ik.map((kk => ek(Fk, kk.from).block));
      if (!Xk.every((kk => kk))) return null;
      let Tk = Ik.map(((kk, Ik) => function(kk, Fk, Ik, Xk) {
        let Tk, ik, {
            open: yk,
            close: lk
          } = Fk,
          ak = kk.sliceDoc(Ik - wk, Ik),
          qk = kk.sliceDoc(Xk, Xk + wk),
          Lk = /\s*$/.exec(ak)[0].length,
          tk = /^\s*/.exec(qk)[0].length,
          Zk = ak.length - Lk;
        if (ak.slice(Zk - yk.length, Zk) == yk && qk.slice(tk, tk + lk.length) == lk) return {
          open: {
            pos: Ik - Lk,
            margin: Lk && 1
          },
          close: {
            pos: Xk + tk,
            margin: tk && 1
          }
        };
        Xk - Ik <= 2 * wk ? Tk = ik = kk.sliceDoc(Ik, Xk) : (Tk = kk.sliceDoc(Ik, Ik + wk), ik = kk.sliceDoc(Xk - wk, Xk));
        let jk = /^\s*/.exec(Tk)[0].length,
          ek = /\s*$/.exec(ik)[0].length,
          Hk = ik.length - ek - lk.length;
        return Tk.slice(jk, jk + yk.length) == yk && ik.slice(Hk, Hk + lk.length) == lk ? {
          open: {
            pos: Ik + jk + yk.length,
            margin: /\s/.test(Tk.charAt(jk + yk.length)) ? 1 : 0
          },
          close: {
            pos: Xk - ek - lk.length,
            margin: /\s/.test(ik.charAt(Hk - 1)) ? 1 : 0
          }
        } : null
      }(Fk, Xk[Ik], kk.from, kk.to)));
      if (2 != kk && !Tk.every((kk => kk))) return {
        changes: Fk.changes(Ik.map(((kk, Fk) => Tk[Fk] ? [] : [{
          from: kk.from,
          insert: Xk[Fk].open + " "
        }, {
          from: kk.to,
          insert: " " + Xk[Fk].close
        }])))
      };
      if (1 != kk && Tk.some((kk => kk))) {
        let kk = [];
        for (let Fk, Ik = 0; Ik < Tk.length; Ik++)
          if (Fk = Tk[Ik]) {
            let Tk = Xk[Ik],
              {
                open: ik,
                close: yk
              } = Fk;
            kk.push({
              from: ik.pos - Tk.open.length,
              to: ik.pos + ik.margin
            }, {
              from: yk.pos - yk.margin,
              to: yk.pos + Tk.close.length
            })
          } return {
          changes: kk
        }
      }
      return null
    }

    function Jk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fk.selection.nZ,
        Xk = [],
        Tk = -1;
      kk: for (let {
          from: ik,
          to: yk
        }
        of Ik) {
        let kk, Ik = Xk.length,
          lk = 1e9;
        for (let ak = ik; ak <= yk;) {
          let Ik = Fk.doc.lineAt(ak);
          if (void 0 == kk && (kk = ek(Fk, Ik.from).line, !kk)) continue kk;
          if (Ik.from > Tk && (ik == yk || yk > Ik.from)) {
            Tk = Ik.from;
            let Fk = /^\s*/.exec(Ik.text)[0].length,
              ik = Fk == Ik.length,
              yk = Ik.text.slice(Fk, Fk + kk.length) == kk ? Fk : -1;
            Fk < Ik.text.length && Fk < lk && (lk = Fk), Xk.push({
              line: Ik,
              comment: yk,
              token: kk,
              indent: Fk,
              empty: ik,
              single: !1
            })
          }
          ak = Ik.to + 1
        }
        if (lk < 1e9)
          for (let Fk = Ik; Fk < Xk.length; Fk++) Xk[Fk].indent < Xk[Fk].line.text.length && (Xk[Fk].indent = lk);
        Xk.length == Ik + 1 && (Xk[Ik].single = !0)
      }
      if (2 != kk && Xk.some((kk => kk.comment < 0 && (!kk.empty || kk.single)))) {
        let kk = [];
        for (let {
            line: Fk,
            token: Tk,
            indent: ik,
            empty: yk,
            single: lk
          }
          of Xk) !lk && yk || kk.push({
          from: Fk.from + ik,
          insert: Tk + " "
        });
        let Ik = Fk.changes(kk);
        return {
          changes: Ik,
          selection: Fk.selection.map(Ik, 1)
        }
      }
      if (1 != kk && Xk.some((kk => kk.comment >= 0))) {
        let kk = [];
        for (let {
            line: Fk,
            comment: Ik,
            token: Tk
          }
          of Xk)
          if (Ik >= 0) {
            let Xk = Fk.from + Ik,
              ik = Xk + Tk.length;
            " " == Fk.text[ik - Fk.from] && ik++, kk.push({
              from: Xk,
              to: ik
            })
          } return {
          changes: kk
        }
      }
      return null
    }
    const xk = yk.d.define(),
      Pk = yk.d.define(),
      Kk = yk.p.define(),
      Qk = yk.p.define({
        combine: kk => (0, yk.R)(kk, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (kk, Fk) => Fk
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (kk, Fk) => (Ik, Xk) => kk(Ik, Xk) || Fk(Ik, Xk)
        })
      }),
      sk = yk.I.define({
        create: () => ck.empty,
        update(kk, Fk) {
          let Ik = Fk.state.facet(Qk),
            Xk = Fk.annotation(xk);
          if (Xk) {
            let Tk = Ok.fromTransaction(Fk, Xk.selection),
              ik = Xk.side,
              yk = 0 == ik ? kk.undone : kk.done;
            return yk = Tk ? nk(yk, yk.length, Ik.minDepth, Tk) : bk(yk, Fk.startState.selection), new ck(0 == ik ? Xk.rest : yk, 0 == ik ? yk : Xk.rest)
          }
          let Tk = Fk.annotation(Pk);
          if ("full" != Tk && "before" != Tk || (kk = kk.isolate()), !1 === Fk.annotation(yk.L.addToHistory)) return Fk.changes.empty ? kk : kk.addMapping(Fk.changes.desc);
          let ik = Ok.fromTransaction(Fk),
            lk = Fk.annotation(yk.L.time),
            ak = Fk.annotation(yk.L.userEvent);
          return ik ? kk = kk.addChanges(ik, lk, ak, Ik, Fk) : Fk.selection && (kk = kk.addSelection(Fk.startState.selection, lk, ak, Ik.newGroupDelay)), "full" != Tk && "after" != Tk || (kk = kk.isolate()), kk
        },
        toJSON: kk => ({
          done: kk.done.map((kk => kk.toJSON())),
          undone: kk.undone.map((kk => kk.toJSON()))
        }),
        fromJSON: kk => new ck(kk.done.map(Ok.fromJSON), kk.undone.map(Ok.fromJSON))
      });

    function Vk(kk, Fk) {
      return function(Ik) {
        let {
          state: Xk,
          dispatch: Tk
        } = Ik;
        if (!Fk && Xk.readOnly) return !1;
        let ik = Xk.field(sk, !1);
        if (!ik) return !1;
        let yk = ik.pop(kk, Xk, Fk);
        return !!yk && (Tk(yk), !0)
      }
    }
    const zk = Vk(0, !1),
      Sk = Vk(1, !1),
      vk = Vk(0, !0),
      Ek = Vk(1, !0);
    class Ok {
      constructor(kk, Fk, Ik, Xk, Tk) {
        this.changes = kk, this.effects = Fk, this.mapped = Ik, this.startSelection = Xk, this.selectionsAfter = Tk
      }
      setSelAfter(kk) {
        return new Ok(this.changes, this.effects, this.mapped, this.startSelection, kk)
      }
      toJSON() {
        var kk, Fk, Ik;
        return {
          changes: null === (kk = this.changes) || void 0 === kk ? void 0 : kk.toJSON(),
          mapped: null === (Fk = this.mapped) || void 0 === Fk ? void 0 : Fk.toJSON(),
          startSelection: null === (Ik = this.startSelection) || void 0 === Ik ? void 0 : Ik.toJSON(),
          selectionsAfter: this.selectionsAfter.map((kk => kk.toJSON()))
        }
      }
      static fromJSON(kk) {
        return new Ok(kk.changes && yk.ChangeSet.fromJSON(kk.changes), [], kk.mapped && yk.g.fromJSON(kk.mapped), kk.startSelection && yk.k.fromJSON(kk.startSelection), kk.selectionsAfter.map(yk.k.fromJSON))
      }
      static fromTransaction(kk, Fk) {
        let Ik = pk;
        for (let Xk of kk.startState.facet(Kk)) {
          let Fk = Xk(kk);
          Fk.length && (Ik = Ik.concat(Fk))
        }
        return !Ik.length && kk.changes.empty ? null : new Ok(kk.changes.invert(kk.startState.doc), Ik, void 0, Fk || kk.startState.selection, pk)
      }
      static selection(kk) {
        return new Ok(void 0, pk, void 0, void 0, kk)
      }
    }

    function nk(kk, Fk, Ik, Xk) {
      let Tk = Fk + 1 > Ik + 20 ? Fk - Ik - 1 : 0,
        ik = kk.slice(Tk, Fk);
      return ik.push(Xk), ik
    }

    function Gk(kk, Fk) {
      return kk.length ? Fk.length ? kk.concat(Fk) : kk : Fk
    }
    const pk = [],
      uk = 200;

    function bk(kk, Fk) {
      if (kk.length) {
        let Ik = kk[kk.length - 1],
          Xk = Ik.selectionsAfter.slice(Math.max(0, Ik.selectionsAfter.length - uk));
        return Xk.length && Xk[Xk.length - 1].eq(Fk) ? kk : (Xk.push(Fk), nk(kk, kk.length - 1, 1e9, Ik.setSelAfter(Xk)))
      }
      return [Ok.selection([Fk])]
    }

    function Rk(kk) {
      let Fk = kk[kk.length - 1],
        Ik = kk.slice();
      return Ik[kk.length - 1] = Fk.setSelAfter(Fk.selectionsAfter.slice(0, Fk.selectionsAfter.length - 1)), Ik
    }

    function Uk(kk, Fk) {
      if (!kk.length) return kk;
      let Ik = kk.length,
        Xk = pk;
      for (; Ik;) {
        let Tk = Ck(kk[Ik - 1], Fk, Xk);
        if (Tk.changes && !Tk.changes.empty || Tk.effects.length) {
          let Fk = kk.slice(0, Ik);
          return Fk[Ik - 1] = Tk, Fk
        }
        Fk = Tk.mapped, Ik--, Xk = Tk.selectionsAfter
      }
      return Xk.length ? [Ok.selection(Xk)] : pk
    }

    function Ck(kk, Fk, Ik) {
      let Xk = Gk(kk.selectionsAfter.length ? kk.selectionsAfter.map((kk => kk.map(Fk))) : pk, Ik);
      if (!kk.changes) return Ok.selection(Xk);
      let Tk = kk.changes.map(Fk),
        ik = Fk.mapDesc(kk.changes, !0),
        lk = kk.mapped ? kk.mapped.composeDesc(ik) : ik;
      return new Ok(Tk, yk.F.mapEffects(kk.effects, Fk), lk, kk.startSelection.map(ik), Xk)
    }
    const Nk = /^(input\.type|delete)($|\.)/;
    class ck {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = kk, this.undone = Fk, this.prevTime = Ik, this.prevUserEvent = Xk
      }
      isolate() {
        return this.prevTime ? new ck(this.done, this.undone) : this
      }
      addChanges(kk, Fk, Ik, Xk, Tk) {
        let ik = this.done,
          lk = ik[ik.length - 1];
        return ik = lk && lk.changes && !lk.changes.empty && kk.changes && (!Ik || Nk.test(Ik)) && (!lk.selectionsAfter.length && Fk - this.prevTime < Xk.newGroupDelay && Xk.joinToEvent(Tk, function(kk, Fk) {
          let Ik = [],
            Xk = !1;
          return kk.iterChangedRanges(((kk, Fk) => Ik.push(kk, Fk))), Fk.iterChangedRanges(((kk, Fk, Tk, ik) => {
            for (let yk = 0; yk < Ik.length;) {
              let kk = Ik[yk++],
                Fk = Ik[yk++];
              ik >= kk && Tk <= Fk && (Xk = !0)
            }
          })), Xk
        }(lk.changes, kk.changes)) || "input.type.compose" == Ik) ? nk(ik, ik.length - 1, Xk.minDepth, new Ok(kk.changes.compose(lk.changes), Gk(yk.F.mapEffects(kk.effects, lk.changes), lk.effects), lk.mapped, lk.startSelection, pk)) : nk(ik, ik.length, Xk.minDepth, kk), new ck(ik, pk, Fk, Ik)
      }
      addSelection(kk, Fk, Ik, Xk) {
        let Tk = this.done.length ? this.done[this.done.length - 1].selectionsAfter : pk;
        return Tk.length > 0 && Fk - this.prevTime < Xk && Ik == this.prevUserEvent && Ik && /^select($|\.)/.test(Ik) && (ik = Tk[Tk.length - 1], yk = kk, ik.nZ.length == yk.nZ.length && 0 === ik.nZ.filter(((kk, Fk) => kk.empty != yk.nZ[Fk].empty)).length) ? this : new ck(bk(this.done, kk), this.undone, Fk, Ik);
        var ik, yk
      }
      addMapping(kk) {
        return new ck(Uk(this.done, kk), Uk(this.undone, kk), this.prevTime, this.prevUserEvent)
      }
      pop(kk, Fk, Ik) {
        let Xk = 0 == kk ? this.done : this.undone;
        if (0 == Xk.length) return null;
        let Tk = Xk[Xk.length - 1],
          ik = Tk.selectionsAfter[0] || (Tk.startSelection ? Tk.startSelection.map(Tk.changes.invertedDesc, 1) : Fk.selection);
        if (Ik && Tk.selectionsAfter.length) return Fk.update({
          selection: Tk.selectionsAfter[Tk.selectionsAfter.length - 1],
          annotations: xk.of({
            side: kk,
            rest: Rk(Xk),
            selection: ik
          }),
          userEvent: 0 == kk ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (Tk.changes) {
          let Ik = 1 == Xk.length ? pk : Xk.slice(0, Xk.length - 1);
          return Tk.mapped && (Ik = Uk(Ik, Tk.mapped)), Fk.update({
            changes: Tk.changes,
            selection: Tk.startSelection,
            effects: Tk.effects,
            annotations: xk.of({
              side: kk,
              rest: Ik,
              selection: ik
            }),
            filter: !1,
            userEvent: 0 == kk ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    ck.empty = new ck(pk, pk);
    const Wk = [{
      key: "Mod-z",
      run: zk,
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
      run: vk,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Ek,
      preventDefault: !0
    }];

    function fk(kk, Fk) {
      return yk.k.create(kk.nZ.map(Fk), kk.mainIndex)
    }

    function Bk(kk, Fk) {
      return kk.update({
        selection: Fk,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function dk(kk, Fk) {
      let {
        state: Ik,
        dispatch: Xk
      } = kk, Tk = fk(Ik.selection, Fk);
      return !Tk.eq(Ik.selection, !0) && (Xk(Bk(Ik, Tk)), !0)
    }

    function Yk(kk, Fk) {
      return yk.k.cursor(Fk ? kk.to : kk.from)
    }

    function Ak(kk, Fk) {
      return dk(kk, (Ik => Ik.empty ? kk.moveByChar(Ik, Fk) : Yk(Ik, Fk)))
    }

    function gk(kk) {
      return kk.textDirectionAt(kk.state.selection.main.head) == lk.f.LTR
    }
    const mk = kk => Ak(kk, !gk(kk)),
      hk = kk => Ak(kk, gk(kk));

    function rk(kk, Fk) {
      return dk(kk, (Ik => Ik.empty ? kk.moveByGroup(Ik, Fk) : Yk(Ik, Fk)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function Dk(kk, Fk, Ik) {
      if (Fk.type.prop(Ik)) return !0;
      let Xk = Fk.to - Fk.from;
      return Xk && (Xk > 2 || /[^\s,.;:]/.test(kk.sliceDoc(Fk.from, Fk.to))) || Fk.firstChild
    }

    function Mk(kk, Fk, Ik) {
      let Xk, Tk, ik = (0, ak.rb)(kk).resolveInner(Fk.head),
        lk = Ik ? qk.h.closedBy : qk.h.openedBy;
      for (let yk = Fk.head;;) {
        let Fk = Ik ? ik.childAfter(yk) : ik.childBefore(yk);
        if (!Fk) break;
        Dk(kk, Fk, lk) ? ik = Fk : yk = Ik ? Fk.to : Fk.from
      }
      return Tk = ik.type.prop(lk) && (Xk = Ik ? (0, ak.hb)(kk, ik.from, 1) : (0, ak.hb)(kk, ik.to, -1)) && Xk.matched ? Ik ? Xk.end.to : Xk.end.from : Ik ? ik.to : ik.from, yk.k.cursor(Tk, Ik ? -1 : 1)
    }

    function kF(kk, Fk) {
      return dk(kk, (Ik => {
        if (!Ik.empty) return Yk(Ik, Fk);
        let Xk = kk.moveVertically(Ik, Fk);
        return Xk.head != Ik.head ? Xk : kk.moveToLineBoundary(Ik, Fk)
      }))
    }
    const FF = kk => kF(kk, !1),
      IF = kk => kF(kk, !0);

    function XF(kk) {
      let Fk, Ik = kk.scrollDOM.clientHeight < kk.scrollDOM.scrollHeight - 2,
        Xk = 0,
        Tk = 0;
      if (Ik) {
        for (let Fk of kk.state.facet(lk.i.scrollMargins)) {
          let Ik = Fk(kk);
          (null === Ik || void 0 === Ik ? void 0 : Ik.top) && (Xk = Math.max(null === Ik || void 0 === Ik ? void 0 : Ik.top, Xk)), (null === Ik || void 0 === Ik ? void 0 : Ik.bottom) && (Tk = Math.max(null === Ik || void 0 === Ik ? void 0 : Ik.bottom, Tk))
        }
        Fk = kk.scrollDOM.clientHeight - Xk - Tk
      } else Fk = (kk.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Xk,
        marginBottom: Tk,
        selfScroll: Ik,
        height: Math.max(kk.defaultLineHeight, Fk - 5)
      }
    }

    function TF(kk, Fk) {
      let Ik, Xk = XF(kk),
        {
          state: Tk
        } = kk,
        ik = fk(Tk.selection, (Ik => Ik.empty ? kk.moveVertically(Ik, Fk, Xk.height) : Yk(Ik, Fk)));
      if (ik.eq(Tk.selection)) return !1;
      if (Xk.selfScroll) {
        let Fk = kk.coordsAtPos(Tk.selection.main.head),
          yk = kk.scrollDOM.getBoundingClientRect(),
          ak = yk.top + Xk.marginTop,
          qk = yk.bottom - Xk.marginBottom;
        Fk && Fk.top > ak && Fk.bottom < qk && (Ik = lk.i.scrollIntoView(ik.main.head, {
          y: "start",
          yMargin: Fk.top - ak
        }))
      }
      return kk.dispatch(Bk(Tk, ik), {
        effects: Ik
      }), !0
    }
    const iF = kk => TF(kk, !1),
      yF = kk => TF(kk, !0);

    function lF(kk, Fk, Ik) {
      let Xk = kk.lineBlockAt(Fk.head),
        Tk = kk.moveToLineBoundary(Fk, Ik);
      if (Tk.head == Fk.head && Tk.head != (Ik ? Xk.to : Xk.from) && (Tk = kk.moveToLineBoundary(Fk, Ik, !1)), !Ik && Tk.head == Xk.from && Xk.length) {
        let Ik = /^\s*/.exec(kk.state.sliceDoc(Xk.from, Math.min(Xk.from + 100, Xk.to)))[0].length;
        Ik && Fk.head != Xk.from + Ik && (Tk = yk.k.cursor(Xk.from + Ik))
      }
      return Tk
    }

    function aF(kk, Fk, Ik) {
      let Xk = !1,
        Tk = fk(kk.selection, (Fk => {
          let Tk = (0, ak.hb)(kk, Fk.head, -1) || (0, ak.hb)(kk, Fk.head, 1) || Fk.head > 0 && (0, ak.hb)(kk, Fk.head - 1, 1) || Fk.head < kk.doc.length && (0, ak.hb)(kk, Fk.head + 1, -1);
          if (!Tk || !Tk.end) return Fk;
          Xk = !0;
          let ik = Tk.start.from == Fk.head ? Tk.end.to : Tk.end.from;
          return Ik ? yk.k.range(Fk.anchor, ik) : yk.k.cursor(ik)
        }));
      return !!Xk && (Fk(Bk(kk, Tk)), !0)
    }

    function qF(kk, Fk) {
      let Ik = fk(kk.state.selection, (kk => {
        let Ik = Fk(kk);
        return yk.k.range(kk.anchor, Ik.head, Ik.goalColumn, Ik.bidiLevel || void 0, Ik.assoc)
      }));
      return !Ik.eq(kk.state.selection) && (kk.dispatch(Bk(kk.state, Ik)), !0)
    }

    function LF(kk, Fk) {
      return qF(kk, (Ik => kk.moveByChar(Ik, Fk)))
    }
    const tF = kk => LF(kk, !gk(kk)),
      ZF = kk => LF(kk, gk(kk));

    function jF(kk, Fk) {
      return qF(kk, (Ik => kk.moveByGroup(Ik, Fk)))
    }

    function eF(kk, Fk) {
      return qF(kk, (Ik => kk.moveVertically(Ik, Fk)))
    }
    const wF = kk => eF(kk, !1),
      HF = kk => eF(kk, !0);

    function JF(kk, Fk) {
      return qF(kk, (Ik => kk.moveVertically(Ik, Fk, XF(kk).height)))
    }
    const xF = kk => JF(kk, !1),
      PF = kk => JF(kk, !0),
      KF = kk => {
        let {
          state: Fk,
          dispatch: Ik
        } = kk;
        return Ik(Bk(Fk, {
          anchor: 0
        })), !0
      },
      QF = kk => {
        let {
          state: Fk,
          dispatch: Ik
        } = kk;
        return Ik(Bk(Fk, {
          anchor: Fk.doc.length
        })), !0
      },
      sF = kk => {
        let {
          state: Fk,
          dispatch: Ik
        } = kk;
        return Ik(Bk(Fk, {
          anchor: Fk.selection.main.anchor,
          head: 0
        })), !0
      },
      VF = kk => {
        let {
          state: Fk,
          dispatch: Ik
        } = kk;
        return Ik(Bk(Fk, {
          anchor: Fk.selection.main.anchor,
          head: Fk.doc.length
        })), !0
      };

    function zF(kk, Fk) {
      let {
        state: Ik
      } = kk, Xk = Ik.selection, Tk = Ik.selection.nZ.slice();
      for (let ik of Ik.selection.nZ) {
        let Xk = Ik.doc.lineAt(ik.head);
        if (Fk ? Xk.to < kk.state.doc.length : Xk.from > 0)
          for (let Ik = ik;;) {
            let ik = kk.moveVertically(Ik, Fk);
            if (ik.head < Xk.from || ik.head > Xk.to) {
              Tk.some((kk => kk.head == ik.head)) || Tk.push(ik);
              break
            }
            if (ik.head == Ik.head) break;
            Ik = ik
          }
      }
      return Tk.length != Xk.nZ.length && (kk.dispatch(Bk(Ik, yk.k.create(Tk, Tk.length - 1))), !0)
    }

    function SF(kk, Fk) {
      if (kk.state.readOnly) return !1;
      let Ik = "delete.selection",
        {
          state: Xk
        } = kk,
        Tk = Xk.changeByRange((Xk => {
          let {
            from: Tk,
            to: ik
          } = Xk;
          if (Tk == ik) {
            let yk = Fk(Xk);
            yk < Tk ? (Ik = "delete.backward", yk = oF(kk, yk, !1)) : yk > Tk && (Ik = "delete.forward", yk = oF(kk, yk, !0)), Tk = Math.min(Tk, yk), ik = Math.max(ik, yk)
          } else Tk = oF(kk, Tk, !1), ik = oF(kk, ik, !0);
          return Tk == ik ? {
            range: Xk
          } : {
            changes: {
              from: Tk,
              to: ik
            },
            range: yk.k.cursor(Tk, Tk < Xk.head ? -1 : 1)
          }
        }));
      return !Tk.changes.empty && (kk.dispatch(Xk.update(Tk, {
        scrollIntoView: !0,
        userEvent: Ik,
        effects: "delete.selection" == Ik ? lk.i.announce.of(Xk.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function oF(kk, Fk, Ik) {
      if (kk instanceof lk.i)
        for (let Xk of kk.state.facet(lk.i.atomicRanges).map((Fk => Fk(kk)))) Xk.between(Fk, Fk, ((kk, Xk) => {
          kk < Fk && Xk > Fk && (Fk = Ik ? Xk : kk)
        }));
      return Fk
    }
    const vF = (kk, Fk, Ik) => SF(kk, (Xk => {
        let Tk, ik, lk = Xk.from,
          {
            state: qk
          } = kk,
          Lk = qk.doc.lineAt(lk);
        if (Ik && !Fk && lk > Lk.from && lk < Lk.from + 200 && !/[^ \t]/.test(Tk = Lk.text.slice(0, lk - Lk.from))) {
          if ("\t" == Tk[Tk.length - 1]) return lk - 1;
          let kk = (0, yk.V)(Tk, qk.tabSize) % (0, ak.V)(qk) || (0, ak.V)(qk);
          for (let Fk = 0; Fk < kk && " " == Tk[Tk.length - 1 - Fk]; Fk++) lk--;
          ik = lk
        } else ik = (0, yk.Y)(Lk.text, lk - Lk.from, Fk, Fk) + Lk.from, ik == lk && Lk.number != (Fk ? qk.doc.lines : 1) ? ik += Fk ? 1 : -1 : !Fk && /[\ufe00-\ufe0f]/.test(Lk.text.slice(ik - Lk.from, lk - Lk.from)) && (ik = (0, yk.Y)(Lk.text, ik - Lk.from, !1, !1) + Lk.from);
        return ik
      })),
      EF = kk => vF(kk, !1, !0),
      OF = kk => vF(kk, !0, !1),
      nF = (kk, Fk) => SF(kk, (Ik => {
        let Xk = Ik.head,
          {
            state: Tk
          } = kk,
          ik = Tk.doc.lineAt(Xk),
          lk = Tk.charCategorizer(Xk);
        for (let kk = null;;) {
          if (Xk == (Fk ? ik.to : ik.from)) {
            Xk == Ik.head && ik.number != (Fk ? Tk.doc.lines : 1) && (Xk += Fk ? 1 : -1);
            break
          }
          let ak = (0, yk.Y)(ik.text, Xk - ik.from, Fk) + ik.from,
            qk = ik.text.slice(Math.min(Xk, ak) - ik.from, Math.max(Xk, ak) - ik.from),
            Lk = lk(qk);
          if (null != kk && Lk != kk) break;
          " " == qk && Xk == Ik.head || (kk = Lk), Xk = ak
        }
        return Xk
      })),
      GF = kk => nF(kk, !1);

    function pF(kk) {
      let Fk = [],
        Ik = -1;
      for (let Xk of kk.selection.nZ) {
        let Tk = kk.doc.lineAt(Xk.from),
          ik = kk.doc.lineAt(Xk.to);
        if (Xk.empty || Xk.to != ik.from || (ik = kk.doc.lineAt(Xk.to - 1)), Ik >= Tk.number) {
          let kk = Fk[Fk.length - 1];
          kk.to = ik.to, kk.nZ.push(Xk)
        } else Fk.push({
          from: Tk.from,
          to: ik.to,
          nZ: [Xk]
        });
        Ik = ik.number + 1
      }
      return Fk
    }

    function uF(kk, Fk, Ik) {
      if (kk.readOnly) return !1;
      let Xk = [],
        Tk = [];
      for (let ik of pF(kk)) {
        if (Ik ? ik.to == kk.doc.length : 0 == ik.from) continue;
        let Fk = kk.doc.lineAt(Ik ? ik.to + 1 : ik.from - 1),
          lk = Fk.length + 1;
        if (Ik) {
          Xk.push({
            from: ik.to,
            to: Fk.to
          }, {
            from: ik.from,
            insert: Fk.text + kk.lineBreak
          });
          for (let Fk of ik.nZ) Tk.push(yk.k.range(Math.min(kk.doc.length, Fk.anchor + lk), Math.min(kk.doc.length, Fk.head + lk)))
        } else {
          Xk.push({
            from: Fk.from,
            to: ik.from
          }, {
            from: ik.to,
            insert: kk.lineBreak + Fk.text
          });
          for (let kk of ik.nZ) Tk.push(yk.k.range(kk.anchor - lk, kk.head - lk))
        }
      }
      return !!Xk.length && (Fk(kk.update({
        changes: Xk,
        scrollIntoView: !0,
        selection: yk.k.create(Tk, kk.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function bF(kk, Fk, Ik) {
      if (kk.readOnly) return !1;
      let Xk = [];
      for (let ik of pF(kk)) Ik ? Xk.push({
        from: ik.from,
        insert: kk.doc.slice(ik.from, ik.to) + kk.lineBreak
      }) : Xk.push({
        from: ik.to,
        insert: kk.lineBreak + kk.doc.slice(ik.from, ik.to)
      });
      let Tk = kk.changes(Xk);
      return Fk(kk.update({
        changes: Tk,
        selection: kk.selection.map(Tk, Ik ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const RF = UF(!1);

    function UF(kk) {
      return Fk => {
        let {
          state: Ik,
          dispatch: Xk
        } = Fk;
        if (Ik.readOnly) return !1;
        let Tk = Ik.changeByRange((Fk => {
          let {
            from: Xk,
            to: Tk
          } = Fk, ik = Ik.doc.lineAt(Xk), lk = !kk && Xk == Tk && function(kk, Fk) {
            if (/\(\)|\[\]|\{\}/.test(kk.sliceDoc(Fk - 1, Fk + 1))) return {
              from: Fk,
              to: Fk
            };
            let Ik, Xk = (0, ak.rb)(kk).resolveInner(Fk),
              Tk = Xk.childBefore(Fk),
              ik = Xk.childAfter(Fk);
            return Tk && ik && Tk.to <= Fk && ik.from >= Fk && (Ik = Tk.type.prop(qk.h.closedBy)) && Ik.indexOf(ik.name) > -1 && kk.doc.lineAt(Tk.to).from == kk.doc.lineAt(ik.from).from && !/\S/.test(kk.sliceDoc(Tk.to, ik.from)) ? {
              from: Tk.to,
              to: ik.from
            } : null
          }(Ik, Xk);
          kk && (Xk = Tk = (Tk <= ik.to ? ik : Ik.doc.lineAt(Tk)).to);
          let Lk = new ak.g(Ik, {
              simulateBreak: Xk,
              simulateDoubleBreak: !!lk
            }),
            tk = (0, ak.Y)(Lk, Xk);
          for (null == tk && (tk = (0, yk.V)(/^\s*/.exec(Ik.doc.lineAt(Xk).text)[0], Ik.tabSize)); Tk < ik.to && /\s/.test(ik.text[Tk - ik.from]);) Tk++;
          lk ? ({
            from: Xk,
            to: Tk
          } = lk) : Xk > ik.from && Xk < ik.from + 100 && !/\S/.test(ik.text.slice(0, Xk)) && (Xk = ik.from);
          let Zk = ["", (0, ak.cb)(Ik, tk)];
          return lk && Zk.push((0, ak.cb)(Ik, Lk.lineIndent(ik.from, -1))), {
            changes: {
              from: Xk,
              to: Tk,
              insert: yk.J.of(Zk)
            },
            range: yk.k.cursor(Xk + 1 + Zk[1].length)
          }
        }));
        return Xk(Ik.update(Tk, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function CF(kk, Fk) {
      let Ik = -1;
      return kk.changeByRange((Xk => {
        let Tk = [];
        for (let yk = Xk.from; yk <= Xk.to;) {
          let ik = kk.doc.lineAt(yk);
          ik.number > Ik && (Xk.empty || Xk.to > ik.from) && (Fk(ik, Tk, Xk), Ik = ik.number), yk = ik.to + 1
        }
        let ik = kk.changes(Tk);
        return {
          changes: Tk,
          range: yk.k.range(ik.mapPos(Xk.anchor, 1), ik.mapPos(Xk.head, 1))
        }
      }))
    }
    const NF = kk => {
        let {
          state: Fk,
          dispatch: Ik
        } = kk;
        return !Fk.readOnly && (Ik(Fk.update(CF(Fk, ((kk, Ik) => {
          Ik.push({
            from: kk.from,
            insert: Fk.facet(ak.fb)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      cF = kk => {
        let {
          state: Fk,
          dispatch: Ik
        } = kk;
        return !Fk.readOnly && (Ik(Fk.update(CF(Fk, ((kk, Ik) => {
          let Xk = /^\s*/.exec(kk.text)[0];
          if (!Xk) return;
          let Tk = (0, yk.V)(Xk, Fk.tabSize),
            ik = 0,
            lk = (0, ak.cb)(Fk, Math.max(0, Tk - (0, ak.V)(Fk)));
          for (; ik < Xk.length && ik < lk.length && Xk.charCodeAt(ik) == lk.charCodeAt(ik);) ik++;
          Ik.push({
            from: kk.from + ik,
            to: kk.from + Xk.length,
            insert: lk.slice(ik)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      WF = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: kk => dk(kk, (Fk => Mk(kk.state, Fk, !gk(kk)))),
        shift: kk => qF(kk, (Fk => Mk(kk.state, Fk, !gk(kk))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: kk => dk(kk, (Fk => Mk(kk.state, Fk, gk(kk)))),
        shift: kk => qF(kk, (Fk => Mk(kk.state, Fk, gk(kk))))
      }, {
        key: "Alt-ArrowUp",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk;
          return uF(Fk, Ik, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk;
          return bF(Fk, Ik, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk;
          return uF(Fk, Ik, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk;
          return bF(Fk, Ik, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: kk => zF(kk, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: kk => zF(kk, !0)
      }, {
        key: "Escape",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk, Xk = Fk.selection, Tk = null;
          return Xk.nZ.length > 1 ? Tk = yk.k.create([Xk.main]) : Xk.main.empty || (Tk = yk.k.create([yk.k.cursor(Xk.main.head)])), !!Tk && (Ik(Bk(Fk, Tk)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: UF(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk, Xk = pF(Fk).map((kk => {
            let {
              from: Ik,
              to: Xk
            } = kk;
            return yk.k.range(Ik, Math.min(Xk + 1, Fk.doc.length))
          }));
          return Ik(Fk.update({
            selection: yk.k.create(Xk),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk, Xk = fk(Fk.selection, (kk => {
            let Ik = (0, ak.rb)(Fk),
              Xk = Ik.resolveStack(kk.from, 1);
            if (kk.empty) {
              let Fk = Ik.resolveStack(kk.from, -1);
              Fk.node.from >= Xk.node.from && Fk.node.to <= Xk.node.to && (Xk = Fk)
            }
            for (let Fk = Xk; Fk; Fk = Fk.next) {
              let {
                node: Ik
              } = Fk;
              if ((Ik.from < kk.from && Ik.to >= kk.to || Ik.to > kk.to && Ik.from <= kk.from) && Fk.next) return yk.k.range(Ik.to, Ik.from)
            }
            return kk
          }));
          return !Xk.eq(Fk.selection) && (Ik(Bk(Fk, Xk)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: cF
      }, {
        key: "Mod-]",
        run: NF
      }, {
        key: "Mod-Alt-\\",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk;
          if (Fk.readOnly) return !1;
          let Xk = Object.create(null),
            Tk = new ak.g(Fk, {
              overrideIndentation: kk => {
                let Fk = Xk[kk];
                return null == Fk ? -1 : Fk
              }
            }),
            ik = CF(Fk, ((kk, Ik, ik) => {
              let yk = (0, ak.Y)(Tk, kk.from);
              if (null == yk) return;
              /\S/.test(kk.text) || (yk = 0);
              let lk = /^\s*/.exec(kk.text)[0],
                qk = (0, ak.cb)(Fk, yk);
              (lk != qk || ik.from < kk.from + lk.length) && (Xk[kk.from] = yk, Ik.push({
                from: kk.from,
                to: kk.from + lk.length,
                insert: qk
              }))
            }));
          return ik.changes.empty || Ik(Fk.update(ik, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: kk => {
          if (kk.state.readOnly) return !1;
          let {
            state: Fk
          } = kk, Ik = Fk.changes(pF(Fk).map((kk => {
            let {
              from: Ik,
              to: Xk
            } = kk;
            return Ik > 0 ? Ik-- : Xk < Fk.doc.length && Xk++, {
              from: Ik,
              to: Xk
            }
          }))), Xk = fk(Fk.selection, (Fk => {
            let Ik;
            if (kk.lineWrapping) {
              let Xk = kk.lineBlockAt(Fk.head),
                Tk = kk.coordsAtPos(Fk.head, Fk.assoc || 1);
              Tk && (Ik = Xk.bottom + kk.documentTop - Tk.bottom + kk.defaultLineHeight / 2)
            }
            return kk.moveVertically(Fk, !0, Ik)
          })).map(Ik);
          return kk.dispatch({
            changes: Ik,
            selection: Xk,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk;
          return aF(Fk, Ik, !1)
        }
      }, {
        key: "Mod-/",
        run: kk => {
          let {
            state: Fk
          } = kk, Ik = Fk.doc.lineAt(Fk.selection.main.from), Xk = ek(kk.state, Ik.from);
          return Xk.line ? tk(kk) : !!Xk.block && jk(kk)
        }
      }, {
        key: "Alt-A",
        run: Zk
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: kk => (kk.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: mk,
        shift: tF,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: kk => rk(kk, !gk(kk)),
        shift: kk => jF(kk, !gk(kk)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: kk => dk(kk, (Fk => lF(kk, Fk, !gk(kk)))),
        shift: kk => qF(kk, (Fk => lF(kk, Fk, !gk(kk)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: hk,
        shift: ZF,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: kk => rk(kk, gk(kk)),
        shift: kk => jF(kk, gk(kk)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: kk => dk(kk, (Fk => lF(kk, Fk, gk(kk)))),
        shift: kk => qF(kk, (Fk => lF(kk, Fk, gk(kk)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: FF,
        shift: wF,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: KF,
        shift: sF
      }, {
        mac: "Ctrl-ArrowUp",
        run: iF,
        shift: xF
      }, {
        key: "ArrowDown",
        run: IF,
        shift: HF,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: QF,
        shift: VF
      }, {
        mac: "Ctrl-ArrowDown",
        run: yF,
        shift: PF
      }, {
        key: "PageUp",
        run: iF,
        shift: xF
      }, {
        key: "PageDown",
        run: yF,
        shift: PF
      }, {
        key: "Home",
        run: kk => dk(kk, (Fk => lF(kk, Fk, !1))),
        shift: kk => qF(kk, (Fk => lF(kk, Fk, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: KF,
        shift: sF
      }, {
        key: "End",
        run: kk => dk(kk, (Fk => lF(kk, Fk, !0))),
        shift: kk => qF(kk, (Fk => lF(kk, Fk, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: QF,
        shift: VF
      }, {
        key: "Enter",
        run: RF,
        shift: RF
      }, {
        key: "Mod-a",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk;
          return Ik(Fk.update({
            selection: {
              anchor: 0,
              head: Fk.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: EF,
        shift: EF,
        preventDefault: !0
      }, {
        key: "Delete",
        run: OF,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: GF,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: kk => nF(kk, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: kk => SF(kk, (Fk => {
          let Ik = kk.moveToLineBoundary(Fk, !1).head;
          return Fk.head > Ik ? Ik : Math.max(0, Fk.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: kk => SF(kk, (Fk => {
          let Ik = kk.moveToLineBoundary(Fk, !0).head;
          return Fk.head < Ik ? Ik : Math.min(kk.state.doc.length, Fk.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: mk,
        shift: tF,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: hk,
        shift: ZF
      }, {
        key: "Ctrl-p",
        run: FF,
        shift: wF
      }, {
        key: "Ctrl-n",
        run: IF,
        shift: HF
      }, {
        key: "Ctrl-a",
        run: kk => dk(kk, (Fk => yk.k.cursor(kk.lineBlockAt(Fk.head).from, 1))),
        shift: kk => qF(kk, (Fk => yk.k.cursor(kk.lineBlockAt(Fk.head).from)))
      }, {
        key: "Ctrl-e",
        run: kk => dk(kk, (Fk => yk.k.cursor(kk.lineBlockAt(Fk.head).to, -1))),
        shift: kk => qF(kk, (Fk => yk.k.cursor(kk.lineBlockAt(Fk.head).to)))
      }, {
        key: "Ctrl-d",
        run: OF
      }, {
        key: "Ctrl-h",
        run: EF
      }, {
        key: "Ctrl-k",
        run: kk => SF(kk, (Fk => {
          let Ik = kk.lineBlockAt(Fk.head).to;
          return Fk.head < Ik ? Ik : Math.min(kk.state.doc.length, Fk.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: GF
      }, {
        key: "Ctrl-o",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk;
          if (Fk.readOnly) return !1;
          let Xk = Fk.changeByRange((kk => ({
            changes: {
              from: kk.from,
              to: kk.to,
              insert: yk.J.of(["", ""])
            },
            range: yk.k.cursor(kk.from)
          })));
          return Ik(Fk.update(Xk, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: kk => {
          let {
            state: Fk,
            dispatch: Ik
          } = kk;
          if (Fk.readOnly) return !1;
          let Xk = Fk.changeByRange((kk => {
            if (!kk.empty || 0 == kk.from || kk.from == Fk.doc.length) return {
              range: kk
            };
            let Ik = kk.from,
              Xk = Fk.doc.lineAt(Ik),
              Tk = Ik == Xk.from ? Ik - 1 : (0, yk.Y)(Xk.text, Ik - Xk.from, !1) + Xk.from,
              ik = Ik == Xk.to ? Ik + 1 : (0, yk.Y)(Xk.text, Ik - Xk.from, !0) + Xk.from;
            return {
              changes: {
                from: Tk,
                to: ik,
                insert: Fk.doc.slice(Ik, ik).append(Fk.doc.slice(Tk, Ik))
              },
              range: yk.k.cursor(ik)
            }
          }));
          return !Xk.changes.empty && (Ik(Fk.update(Xk, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: yF
      }].map((kk => ({
        mac: kk.key,
        run: kk.run,
        shift: kk.shift
      }))))),
      fF = {
        key: "Tab",
        run: NF,
        shift: cF
      };
    var BF = Ik(41354),
      dF = Ik(41309),
      YF = Ik(41362),
      AF = function(kk) {
        void 0 === kk && (kk = {});
        var {
          crosshairCursor: Fk = !1
        } = kk, Ik = [];
        !1 !== kk.closeBracketsKeymap && (Ik = Ik.concat(dF.d)), !1 !== kk.defaultKeymap && (Ik = Ik.concat(WF)), !1 !== kk.searchKeymap && (Ik = Ik.concat(BF.i)), !1 !== kk.historyKeymap && (Ik = Ik.concat(Wk)), !1 !== kk.foldKeymap && (Ik = Ik.concat(ak.O)), !1 !== kk.completionKeymap && (Ik = Ik.concat(dF.l)), !1 !== kk.lintKeymap && (Ik = Ik.concat(YF.d));
        var Xk = [];
        return !1 !== kk.lineNumbers && Xk.push((0, lk.S)()), !1 !== kk.highlightActiveLineGutter && Xk.push((0, lk.G)()), !1 !== kk.highlightSpecialChars && Xk.push((0, lk.I)()), !1 !== kk.history && Xk.push(function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [sk, Qk.of(kk), lk.i.domEventHandlers({
            beforeinput(kk, Fk) {
              let Ik = "historyUndo" == kk.inputType ? zk : "historyRedo" == kk.inputType ? Sk : null;
              return !!Ik && (kk.preventDefault(), Ik(Fk))
            }
          })]
        }()), !1 !== kk.foldGutter && Xk.push((0, ak.G)()), !1 !== kk.drawSelection && Xk.push((0, lk.v)()), !1 !== kk.dropCursor && Xk.push((0, lk.y)()), !1 !== kk.allowMultipleSelections && Xk.push(yk.m.allowMultipleSelections.of(!0)), !1 !== kk.indentOnInput && Xk.push((0, ak.bb)()), !1 !== kk.syntaxHighlighting && Xk.push((0, ak.lb)(ak.w, {
          fallback: !0
        })), !1 !== kk.bracketMatching && Xk.push((0, ak.q)()), !1 !== kk.closeBrackets && Xk.push((0, dF.h)()), !1 !== kk.autocompletion && Xk.push((0, dF.c)()), !1 !== kk.rectangularSelection && Xk.push((0, lk._)()), !1 !== Fk && Xk.push((0, lk.s)()), !1 !== kk.highlightActiveLine && Xk.push((0, lk.H)()), !1 !== kk.highlightSelectionMatches && Xk.push((0, BF.h)()), kk.tabSize && "number" === typeof kk.tabSize && Xk.push(ak.fb.of(" ".repeat(kk.tabSize))), Xk.concat([lk.P.of(Ik.flat())]).filter(Boolean)
      },
      gF = Ik(41341);
    const mF = "#e5c07b",
      hF = "#e06c75",
      rF = "#56b6c2",
      DF = "#ffffff",
      MF = "#abb2bf",
      kI = "#7d8799",
      FI = "#61afef",
      II = "#98c379",
      XI = "#d19a66",
      TI = "#c678dd",
      iI = "#21252b",
      yI = "#2c313a",
      lI = "#282c34",
      aI = "#353a42",
      qI = "#3E4451",
      LI = "#528bff",
      tI = lk.i.theme({
        "&": {
          color: MF,
          backgroundColor: lI
        },
        ".cm-content": {
          caretColor: LI
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: LI
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: qI
        },
        ".cm-panels": {
          backgroundColor: iI,
          color: MF
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
          backgroundColor: lI,
          color: kI,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: yI
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: aI
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: aI,
          borderBottomColor: aI
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: yI,
            color: MF
          }
        }
      }, {
        dark: !0
      }),
      ZI = ak.c.define([{
        tag: gF.k.keyword,
        color: TI
      }, {
        tag: [gF.k.name, gF.k.deleted, gF.k.character, gF.k.propertyName, gF.k.macroName],
        color: hF
      }, {
        tag: [gF.k.function(gF.k.variableName), gF.k.labelName],
        color: FI
      }, {
        tag: [gF.k.color, gF.k.constant(gF.k.name), gF.k.standard(gF.k.name)],
        color: XI
      }, {
        tag: [gF.k.definition(gF.k.name), gF.k.separator],
        color: MF
      }, {
        tag: [gF.k.typeName, gF.k.className, gF.k.number, gF.k.changed, gF.k.annotation, gF.k.modifier, gF.k.self, gF.k.namespace],
        color: mF
      }, {
        tag: [gF.k.operator, gF.k.operatorKeyword, gF.k.url, gF.k.escape, gF.k.regexp, gF.k.link, gF.k.special(gF.k.string)],
        color: rF
      }, {
        tag: [gF.k.meta, gF.k.comment],
        color: kI
      }, {
        tag: gF.k.strong,
        fontWeight: "bold"
      }, {
        tag: gF.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: gF.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: gF.k.link,
        color: kI,
        textDecoration: "underline"
      }, {
        tag: gF.k.heading,
        fontWeight: "bold",
        color: hF
      }, {
        tag: [gF.k.atom, gF.k.bool, gF.k.special(gF.k.variableName)],
        color: XI
      }, {
        tag: [gF.k.processingInstruction, gF.k.string, gF.k.inserted],
        color: II
      }, {
        tag: gF.k.invalid,
        color: DF
      }]),
      jI = [tI, (0, ak.lb)(ZI)];
    var eI = lk.i.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class wI {
      constructor(kk, Fk) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = Fk, this.timeoutMS = Fk, this.callbacks.push(kk)
      }
      Dt() {
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
    class HI {
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
            kk.Dt(), kk.isDone && this.remove(kk)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var JI = null,
      xI = yk.d.define(),
      PI = [];

    function KI(kk) {
      var {
        value: Fk,
        selection: Ik,
        onChange: Xk,
        onStatistics: Tk,
        onCreateEditor: ak,
        onUpdate: qk,
        extensions: Lk = PI,
        autoFocus: tk,
        theme: Zk = "light",
        height: jk = null,
        minHeight: ek = null,
        maxHeight: wk = null,
        width: Hk = null,
        minWidth: Jk = null,
        maxWidth: xk = null,
        placeholder: Pk = "",
        editable: Kk = !0,
        readOnly: Qk = !1,
        indentWithTab: sk = !0,
        basicSetup: Vk = !0,
        root: zk,
        initialState: Sk
      } = kk, [vk, Ek] = (0, ik.useState)(), [Ok, nk] = (0, ik.useState)(), [Gk, pk] = (0, ik.useState)(), uk = (0, ik.useState)((() => ({
        current: null
      })))[0], bk = (0, ik.useState)((() => ({
        current: null
      })))[0], Rk = lk.i.theme({
        "&": {
          height: jk,
          minHeight: ek,
          maxHeight: wk,
          width: Hk,
          minWidth: Jk,
          maxWidth: xk
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), Uk = lk.i.updateListener.of((kk => {
        if (kk.docChanged && "function" === typeof Xk && !kk.transactions.some((kk => kk.annotation(xI)))) {
          uk.current ? uk.current.reset() : (uk.current = new wI((() => {
            if (bk.current) {
              var kk = bk.current;
              bk.current = null, kk()
            }
            uk.current = null
          }), 200), ("undefined" === typeof window ? new HI : (JI || (JI = new HI), JI)).add(uk.current));
          var Fk = kk.state.doc.toString();
          Xk(Fk, kk)
        }
        Tk && Tk((kk => ({
          line: kk.state.doc.lineAt(kk.state.selection.main.from),
          lineCount: kk.state.doc.lines,
          lineBreak: kk.state.lineBreak,
          length: kk.state.doc.length,
          readOnly: kk.state.readOnly,
          tabSize: kk.state.tabSize,
          selection: kk.state.selection,
          selectionAsSingle: kk.state.selection.asSingle().main,
          nZ: kk.state.selection.nZ,
          selectionCode: kk.state.sliceDoc(kk.state.selection.main.from, kk.state.selection.main.to),
          selections: kk.state.selection.nZ.map((Fk => kk.state.sliceDoc(Fk.from, Fk.to))),
          selectedText: kk.state.selection.nZ.some((kk => !kk.empty))
        }))(kk))
      })), Ck = function(kk) {
        void 0 === kk && (kk = {});
        var {
          indentWithTab: Fk = !0,
          editable: Ik = !0,
          readOnly: Xk = !1,
          theme: Tk = "light",
          placeholder: ik = "",
          basicSetup: ak = !0
        } = kk, qk = [];
        switch (Fk && qk.unshift(lk.P.of([fF])), ak && ("boolean" === typeof ak ? qk.unshift(AF()) : qk.unshift(AF(ak))), ik && qk.unshift((0, lk.Z)(ik)), Tk) {
          case "light":
            qk.push(eI);
            break;
          case "dark":
            qk.push(jI);
            break;
          case "none":
            break;
          default:
            qk.push(Tk)
        }
        return !1 === Ik && qk.push(lk.i.editable.of(!1)), Xk && qk.push(yk.m.readOnly.of(!0)), [...qk]
      }({
        theme: Zk,
        editable: Kk,
        readOnly: Qk,
        placeholder: Pk,
        indentWithTab: sk,
        basicSetup: Vk
      }), Nk = [Uk, Rk, ...Ck];
      return qk && "function" === typeof qk && Nk.push(lk.i.updateListener.of(qk)), Nk = Nk.concat(Lk), (0, ik.useLayoutEffect)((() => {
        if (vk && !Gk) {
          var kk = {
              doc: Fk,
              selection: Ik,
              extensions: Nk
            },
            Xk = Sk ? yk.m.fromJSON(Sk.json, kk, Sk.fields) : yk.m.create(kk);
          if (pk(Xk), !Ok) {
            var Tk = new lk.i({
              state: Xk,
              parent: vk,
              root: zk
            });
            nk(Tk), ak && ak(Tk, Xk)
          }
        }
        return () => {
          Ok && (pk(void 0), nk(void 0))
        }
      }), [vk, Gk]), (0, ik.useEffect)((() => {
        kk.container && Ek(kk.container)
      }), [kk.container]), (0, ik.useEffect)((() => () => {
        Ok && (Ok.destroy(), nk(void 0)), uk.current && (uk.current.cancel(), uk.current = null)
      }), [Ok]), (0, ik.useEffect)((() => {
        tk && Ok && Ok.focus()
      }), [tk, Ok]), (0, ik.useEffect)((() => {
        Ok && Ok.dispatch({
          effects: yk.F.reconfigure.of(Nk)
        })
      }), [Zk, Lk, jk, ek, wk, Hk, Jk, xk, Pk, Kk, Qk, sk, Vk, Xk, qk]), (0, ik.useEffect)((() => {
        if (void 0 !== Fk) {
          var kk = Ok ? Ok.state.doc.toString() : "";
          if (Ok && Fk !== kk) {
            var Ik = () => {
              Ok && Fk !== Ok.state.doc.toString() && Ok.dispatch({
                changes: {
                  from: 0,
                  to: Ok.state.doc.toString().length,
                  insert: Fk || ""
                },
                annotations: [xI.of(!0)]
              })
            };
            uk.current && !uk.current.isDone ? bk.current = Ik : Ik()
          }
        }
      }), [Fk, Ok]), {
        state: Gk,
        setState: pk,
        view: Ok,
        setView: nk,
        container: vk,
        setContainer: Ek
      }
    }
    var QI = Ik(1096),
      sI = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      VI = (0, ik.forwardRef)(((kk, Fk) => {
        var {
          className: Ik,
          value: yk = "",
          selection: lk,
          extensions: ak = [],
          onChange: qk,
          onStatistics: Lk,
          onCreateEditor: tk,
          onUpdate: Zk,
          autoFocus: jk,
          theme: ek = "light",
          height: wk,
          minHeight: Hk,
          maxHeight: Jk,
          width: xk,
          minWidth: Pk,
          maxWidth: Kk,
          basicSetup: Qk,
          placeholder: sk,
          indentWithTab: Vk,
          editable: zk,
          readOnly: Sk,
          root: vk,
          initialState: Ek
        } = kk, Ok = (0, Tk.d)(kk, sI), nk = (0, ik.useRef)(null), {
          state: Gk,
          view: pk,
          container: uk,
          setContainer: bk
        } = KI({
          root: vk,
          value: yk,
          autoFocus: jk,
          theme: ek,
          height: wk,
          minHeight: Hk,
          maxHeight: Jk,
          width: xk,
          minWidth: Pk,
          maxWidth: Kk,
          basicSetup: Qk,
          placeholder: sk,
          indentWithTab: Vk,
          editable: zk,
          readOnly: Sk,
          selection: lk,
          onChange: qk,
          onStatistics: Lk,
          onCreateEditor: tk,
          onUpdate: Zk,
          extensions: ak,
          initialState: Ek
        });
        (0, ik.useImperativeHandle)(Fk, (() => ({
          editor: nk.current,
          state: Gk,
          view: pk
        })), [nk, uk, Gk, pk]);
        var Rk = (0, ik.useCallback)((kk => {
          nk.current = kk, bk(kk)
        }), [bk]);
        if ("string" !== typeof yk) throw new Error("value must be typeof string but got " + typeof yk);
        var Uk = "string" === typeof ek ? "cm-theme-" + ek : "cm-theme";
        return (0, QI.jsx)("div", (0, Xk.b)({
          ref: Rk,
          className: Uk + (Ik ? " " + Ik : "")
        }, Ok))
      }));
    VI.displayName = "CodeMirror";
    const zI = VI
  },
  41331: (kk, Fk, Ik) => {
    function Xk() {
      var kk = arguments[0];
      "string" == typeof kk && (kk = document.createElement(kk));
      var Fk = 1,
        Ik = arguments[1];
      if (Ik && "object" == typeof Ik && null == Ik.nodeType && !Array.isArray(Ik)) {
        for (var Xk in Ik)
          if (Object.prototype.hasOwnProperty.call(Ik, Xk)) {
            var ik = Ik[Xk];
            "string" == typeof ik ? kk.setAttribute(Xk, ik) : null != ik && (kk[Xk] = ik)
          } Fk++
      }
      for (; Fk < arguments.length; Fk++) Tk(kk, arguments[Fk]);
      return kk
    }

    function Tk(kk, Fk) {
      if ("string" == typeof Fk) kk.appendChild(document.createTextNode(Fk));
      else if (null == Fk);
      else if (null != Fk.nodeType) kk.appendChild(Fk);
      else {
        if (!Array.isArray(Fk)) throw new RangeError("Unsupported child node: " + Fk);
        for (var Ik = 0; Ik < Fk.length; Ik++) Tk(kk, Fk[Ik])
      }
    }
    Ik.d(Fk, {
      d: () => Xk
    })
  },
  41325: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk
    });
    const Xk = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      Tk = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      ik = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class yk {
      constructor(kk, Fk) {
        this.rules = [];
        let {
          finish: Ik
        } = Fk || {};

        function Xk(kk) {
          return /^@/.test(kk) ? [kk] : kk.split(/,\s*/)
        }

        function Tk(kk, Fk, ik, yk) {
          let lk = [],
            ak = /^@(\w+)\b/.exec(kk[0]),
            qk = ak && "keyframes" == ak[1];
          if (ak && null == Fk) return ik.push(kk[0] + ";");
          for (let Ik in Fk) {
            let yk = Fk[Ik];
            if (/&/.test(Ik)) Tk(Ik.split(/,\s*/).map((Fk => kk.map((kk => Fk.replace(/&/, kk))))).reduce(((kk, Fk) => kk.concat(Fk))), yk, ik);
            else if (yk && "object" == typeof yk) {
              if (!ak) throw new RangeError("The value of a property (" + Ik + ") should be a primitive value.");
              Tk(Xk(Ik), yk, lk, qk)
            } else null != yk && lk.push(Ik.replace(/_.*/, "").replace(/[A-Z]/g, (kk => "-" + kk.toLowerCase())) + ": " + yk + ";")
          }(lk.length || qk) && ik.push((!Ik || ak || yk ? kk : kk.map(Ik)).join(", ") + " {" + lk.join(" ") + "}")
        }
        for (let ik in kk) Tk(Xk(ik), kk[ik], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let kk = ik[Xk] || 1;
        return ik[Xk] = kk + 1, "\u037c" + kk.toString(36)
      }
      static mount(kk, Fk, Ik) {
        let Xk = kk[Tk],
          ik = Ik && Ik.nonce;
        Xk ? ik && Xk.setNonce(ik) : Xk = new ak(kk, ik), Xk.mount(Array.isArray(Fk) ? Fk : [Fk], kk)
      }
    }
    let lk = new Map;
    class ak {
      constructor(kk, Fk) {
        let Ik = kk.ownerDocument || kk,
          Xk = Ik.defaultView;
        if (!kk.head && kk.adoptedStyleSheets && Xk.CSSStyleSheet) {
          let Fk = lk.get(Ik);
          if (Fk) return kk[Tk] = Fk;
          this.sheet = new Xk.CSSStyleSheet, lk.set(Ik, this)
        } else this.styleTag = Ik.createElement("style"), Fk && this.styleTag.setAttribute("nonce", Fk);
        this.modules = [], kk[Tk] = this
      }
      mount(kk, Fk) {
        let Ik = this.sheet,
          Xk = 0,
          Tk = 0;
        for (let ik = 0; ik < kk.length; ik++) {
          let Fk = kk[ik],
            yk = this.modules.indexOf(Fk);
          if (yk < Tk && yk > -1 && (this.modules.splice(yk, 1), Tk--, yk = -1), -1 == yk) {
            if (this.modules.splice(Tk++, 0, Fk), Ik)
              for (let kk = 0; kk < Fk.rules.length; kk++) Ik.insertRule(Fk.rules[kk], Xk++)
          } else {
            for (; Tk < yk;) Xk += this.modules[Tk++].rules.length;
            Xk += Fk.rules.length, Tk++
          }
        }
        if (Ik) Fk.adoptedStyleSheets.indexOf(this.sheet) < 0 && (Fk.adoptedStyleSheets = [this.sheet, ...Fk.adoptedStyleSheets]);
        else {
          let kk = "";
          for (let Fk = 0; Fk < this.modules.length; Fk++) kk += this.modules[Fk].getRules() + "\n";
          this.styleTag.textContent = kk;
          let Ik = Fk.head || Fk;
          this.styleTag.parentNode != Ik && Ik.insertBefore(this.styleTag, Ik.firstChild)
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