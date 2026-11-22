export const id = 292;
export const ids = [292];
export const modules = {
  40871: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Qe,
      g: () => se,
      i: () => ye,
      j: () => Pk,
      n: () => ve,
      o: () => mk,
      s: () => ne
    });
    var Dk = ik(40876),
      fk = ik(40883),
      Sk = ik(40902);
    class bk {
      constructor(kk, ek, ik, Dk) {
        this.state = kk, this.pos = ek, this.explicit = ik, this.view = Dk, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(kk) {
        let ek = (0, Sk.lb)(this.state).resolveInner(this.pos, -1);
        for (; ek && kk.indexOf(ek.name) < 0;) ek = ek.parent;
        return ek ? {
          from: ek.from,
          to: this.pos,
          text: this.state.sliceDoc(ek.from, this.pos),
          type: ek.type
        } : null
      }
      matchBefore(kk) {
        let ek = this.state.doc.lineAt(this.pos),
          ik = Math.max(ek.from, this.pos - 250),
          Dk = ek.text.slice(ik - ek.from, this.pos - ek.from),
          fk = Dk.search(xk(kk, !1));
        return fk < 0 ? null : {
          from: ik + fk,
          to: this.pos,
          text: Dk.slice(fk)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(kk, ek, ik) {
        "abort" == kk && this.abortListeners && (this.abortListeners.push(ek), ik && ik.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function rk(kk) {
      let ek = Object.keys(kk).join(""),
        ik = /\w/.test(ek);
      return ik && (ek = ek.replace(/\w/g, "")), `[${ik?"\\w":""}${ek.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function Pk(kk) {
      let ek = kk.map((kk => "string" == typeof kk ? {
          label: kk
        } : kk)),
        [ik, Dk] = ek.every((kk => /^\w+$/.test(kk.label))) ? [/\w*$/, /\w+$/] : function(kk) {
          let ek = Object.create(null),
            ik = Object.create(null);
          for (let {
              label: fk
            }
            of kk) {
            ek[fk[0]] = !0;
            for (let kk = 1; kk < fk.length; kk++) ik[fk[kk]] = !0
          }
          let Dk = rk(ek) + rk(ik) + "*$";
          return [new RegExp("^" + Dk), new RegExp(Dk)]
        }(ek);
      return kk => {
        let fk = kk.matchBefore(Dk);
        return fk || kk.explicit ? {
          from: fk ? fk.from : kk.pos,
          options: ek,
          validFor: ik
        } : null
      }
    }

    function mk(kk, ek) {
      return ik => {
        for (let ek = (0, Sk.lb)(ik.state).resolveInner(ik.pos, -1); ek; ek = ek.parent) {
          if (kk.indexOf(ek.name) > -1) return null;
          if (ek.type.isTop) break
        }
        return ek(ik)
      }
    }
    class Mk {
      constructor(kk, ek, ik, Dk) {
        this.completion = kk, this.source = ek, this.match = ik, this.score = Dk
      }
    }

    function Kk(kk) {
      return kk.selection.main.from
    }

    function xk(kk, ek) {
      var ik;
      let {
        source: Dk
      } = kk, fk = ek && "^" != Dk[0], Sk = "$" != Dk[Dk.length - 1];
      return fk || Sk ? new RegExp(`${fk?"^":""}(?:${Dk})${Sk?"$":""}`, null !== (ik = kk.flags) && void 0 !== ik ? ik : kk.ignoreCase ? "i" : "") : kk
    }
    const nk = Dk.b.define();

    function Uk(kk, ek, ik, fk) {
      let {
        main: Sk
      } = kk.selection, bk = ik - Sk.from, rk = fk - Sk.from;
      return {
        ...kk.changeByRange((Pk => {
          if (Pk != Sk && ik != fk && kk.sliceDoc(Pk.from + bk, Pk.from + rk) != kk.sliceDoc(ik, fk)) return {
            range: Pk
          };
          let mk = kk.toText(ek);
          return {
            changes: {
              from: Pk.from + bk,
              to: fk == Sk.from ? Pk.to : Pk.from + rk,
              insert: mk
            },
            range: Dk.h.cursor(Pk.from + bk + mk.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const Hk = new WeakMap;

    function wk(kk) {
      if (!Array.isArray(kk)) return kk;
      let ek = Hk.get(kk);
      return ek || Hk.set(kk, ek = Pk(kk)), ek
    }
    const lk = Dk.D.define(),
      pk = Dk.D.define();
    class yk {
      constructor(kk) {
        this.pattern = kk, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let ek = 0; ek < kk.length;) {
          let ik = (0, Dk.L)(kk, ek),
            fk = (0, Dk.M)(ik);
          this.chars.push(ik);
          let Sk = kk.slice(ek, ek + fk),
            bk = Sk.toUpperCase();
          this.folded.push((0, Dk.L)(bk == Sk ? Sk.toLowerCase() : bk, 0)), ek += fk
        }
        this.astral = kk.length != this.chars.length
      }
      ret(kk, ek) {
        return this.score = kk, this.matched = ek, this
      }
      match(kk) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (kk.length < this.pattern.length) return null;
        let {
          chars: ek,
          folded: ik,
          any: fk,
          precise: Sk,
          byWord: bk
        } = this;
        if (1 == ek.length) {
          let fk = (0, Dk.L)(kk, 0),
            Sk = (0, Dk.M)(fk),
            bk = Sk == kk.length ? 0 : -100;
          if (fk == ek[0]);
          else {
            if (fk != ik[0]) return null;
            bk += -200
          }
          return this.ret(bk, [0, Sk])
        }
        let rk = kk.indexOf(this.pattern);
        if (0 == rk) return this.ret(kk.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let Pk = ek.length,
          mk = 0;
        if (rk < 0) {
          for (let Sk = 0, bk = Math.min(kk.length, 200); Sk < bk && mk < Pk;) {
            let bk = (0, Dk.L)(kk, Sk);
            bk != ek[mk] && bk != ik[mk] || (fk[mk++] = Sk), Sk += (0, Dk.M)(bk)
          }
          if (mk < Pk) return null
        }
        let Mk = 0,
          Kk = 0,
          xk = !1,
          nk = 0,
          Uk = -1,
          Hk = -1,
          wk = /[a-z]/.test(kk),
          lk = !0;
        for (let pk = 0, yk = Math.min(kk.length, 200), Yk = 0; pk < yk && Kk < Pk;) {
          let fk = (0, Dk.L)(kk, pk);
          rk < 0 && (Mk < Pk && fk == ek[Mk] && (Sk[Mk++] = pk), nk < Pk && (fk == ek[nk] || fk == ik[nk] ? (0 == nk && (Uk = pk), Hk = pk + 1, nk++) : nk = 0));
          let mk, yk = fk < 255 ? fk >= 48 && fk <= 57 || fk >= 97 && fk <= 122 ? 2 : fk >= 65 && fk <= 90 ? 1 : 0 : (mk = (0, Dk.ab)(fk)) != mk.toLowerCase() ? 1 : mk != mk.toUpperCase() ? 2 : 0;
          (!pk || 1 == yk && wk || 0 == Yk && 0 != yk) && (ek[Kk] == fk || ik[Kk] == fk && (xk = !0) ? bk[Kk++] = pk : bk.length && (lk = !1)), Yk = yk, pk += (0, Dk.M)(fk)
        }
        return Kk == Pk && 0 == bk[0] && lk ? this.result((xk ? -200 : 0) - 100, bk, kk) : nk == Pk && 0 == Uk ? this.ret(-200 - kk.length + (Hk == kk.length ? 0 : -100), [0, Hk]) : rk > -1 ? this.ret(-700 - kk.length, [rk, rk + this.pattern.length]) : nk == Pk ? this.ret(-900 - kk.length, [Uk, Hk]) : Kk == Pk ? this.result((xk ? -200 : 0) - 100 - 700 + (lk ? 0 : -1100), bk, kk) : 2 == ek.length ? null : this.result((fk[0] ? -700 : 0) - 200 - 1100, fk, kk)
      }
      result(kk, ek, ik) {
        let fk = [],
          Sk = 0;
        for (let bk of ek) {
          let kk = bk + (this.astral ? (0, Dk.M)((0, Dk.L)(ik, bk)) : 1);
          Sk && fk[Sk - 1] == bk ? fk[Sk - 1] = kk : (fk[Sk++] = bk, fk[Sk++] = kk)
        }
        return this.ret(kk - ik.length, fk)
      }
    }
    class Yk {
      constructor(kk) {
        this.pattern = kk, this.matched = [], this.score = 0, this.folded = kk.toLowerCase()
      }
      match(kk) {
        if (kk.length < this.pattern.length) return null;
        let ek = kk.slice(0, this.pattern.length),
          ik = ek == this.pattern ? 0 : ek.toLowerCase() == this.folded ? -200 : null;
        return null == ik ? null : (this.matched = [0, ek.length], this.score = ik + (kk.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const Lk = Dk.n.define({
      combine: kk => (0, Dk.Q)(kk, {
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
        positionInfo: Ak,
        filterStrict: !1,
        compareCompletions: (kk, ek) => (kk.sortText || kk.label).localeCompare(ek.sortText || ek.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (kk, ek) => kk && ek,
        closeOnBlur: (kk, ek) => kk && ek,
        icons: (kk, ek) => kk && ek,
        tooltipClass: (kk, ek) => ik => Ck(kk(ik), ek(ik)),
        optionClass: (kk, ek) => ik => Ck(kk(ik), ek(ik)),
        addToOptions: (kk, ek) => kk.concat(ek),
        filterStrict: (kk, ek) => kk || ek
      })
    });

    function Ck(kk, ek) {
      return kk ? ek ? kk + " " + ek : kk : ek
    }

    function Ak(kk, ek, ik, Dk, Sk, bk) {
      let rk, Pk, mk = kk.textDirection == fk.c.RTL,
        Mk = mk,
        Kk = !1,
        xk = "top",
        nk = ek.left - Sk.left,
        Uk = Sk.right - ek.right,
        Hk = Dk.right - Dk.left,
        wk = Dk.bottom - Dk.top;
      if (Mk && nk < Math.min(Hk, Uk) ? Mk = !1 : !Mk && Uk < Math.min(Hk, nk) && (Mk = !0), Hk <= (Mk ? nk : Uk)) rk = Math.max(Sk.top, Math.min(ik.top, Sk.bottom - wk)) - ek.top, Pk = Math.min(400, Mk ? nk : Uk);
      else {
        Kk = !0, Pk = Math.min(400, (mk ? ek.right : Sk.right - ek.left) - 30);
        let kk = Sk.bottom - ek.bottom;
        kk >= wk || kk > ek.top ? rk = ik.bottom - ek.top : (xk = "bottom", rk = ek.bottom - ik.top)
      }
      return {
        style: `${xk}: ${rk/((ek.bottom-ek.top)/bk.offsetHeight)}px; max-width: ${Pk/((ek.right-ek.left)/bk.offsetWidth)}px`,
        class: "cm-completionInfo-" + (Kk ? mk ? "left-narrow" : "right-narrow" : Mk ? "left" : "right")
      }
    }
    const jk = Dk.D.define();

    function sk(kk, ek, ik) {
      if (kk <= ik) return {
        from: 0,
        to: kk
      };
      if (ek < 0 && (ek = 0), ek <= kk >> 1) {
        let kk = Math.floor(ek / ik);
        return {
          from: kk * ik,
          to: (kk + 1) * ik
        }
      }
      let Dk = Math.floor((kk - ek) / ik);
      return {
        from: kk - (Dk + 1) * ik,
        to: kk - Dk * ik
      }
    }
    class dk {
      constructor(kk, ek, ik) {
        this.view = kk, this.stateField = ek, this.applyCompletion = ik, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: kk => this.placeInfo(kk),
          key: this
        }, this.space = null, this.currentClass = "";
        let Dk = kk.state.field(ek),
          {
            options: fk,
            selected: Sk
          } = Dk.open,
          bk = kk.state.facet(Lk);
        this.optionContent = function(kk) {
          let ek = kk.addToOptions.slice();
          return kk.icons && ek.push({
            render(kk) {
              let ek = document.createElement("div");
              return ek.classList.add("cm-completionIcon"), kk.type && ek.classList.add(...kk.type.split(/\s+/g).map((kk => "cm-completionIcon-" + kk))), ek.setAttribute("aria-hidden", "true"), ek
            },
            position: 20
          }), ek.push({
            render(kk, ek, ik, Dk) {
              let fk = document.createElement("span");
              fk.className = "cm-completionLabel";
              let Sk = kk.displayLabel || kk.label,
                bk = 0;
              for (let rk = 0; rk < Dk.length;) {
                let kk = Dk[rk++],
                  ek = Dk[rk++];
                kk > bk && fk.appendChild(document.createTextNode(Sk.slice(bk, kk)));
                let ik = fk.appendChild(document.createElement("span"));
                ik.appendChild(document.createTextNode(Sk.slice(kk, ek))), ik.className = "cm-completionMatchedText", bk = ek
              }
              return bk < Sk.length && fk.appendChild(document.createTextNode(Sk.slice(bk))), fk
            },
            position: 50
          }, {
            render(kk) {
              if (!kk.detail) return null;
              let ek = document.createElement("span");
              return ek.className = "cm-completionDetail", ek.textContent = kk.detail, ek
            },
            position: 80
          }), ek.sort(((kk, ek) => kk.position - ek.position)).map((kk => kk.render))
        }(bk), this.optionClass = bk.optionClass, this.tooltipClass = bk.tooltipClass, this.range = sk(fk.length, Sk, bk.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(kk.state), this.dom.addEventListener("mousedown", (ik => {
          let {
            options: Dk
          } = kk.state.field(ek).open;
          for (let ek, fk = ik.target; fk && fk != this.dom; fk = fk.parentNode)
            if ("LI" == fk.nodeName && (ek = /-(\d+)$/.exec(fk.id)) && +ek[1] < Dk.length) return this.applyCompletion(kk, Dk[+ek[1]]), void ik.preventDefault();
          if (ik.target == this.list) {
            let ek = this.list.classList.contains("cm-completionListIncompleteTop") && ik.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && ik.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != ek && (kk.dispatch({
              effects: jk.of(ek)
            }), ik.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (ek => {
          let ik = kk.state.field(this.stateField, !1);
          ik && ik.tooltip && kk.state.facet(Lk).closeOnBlur && ek.relatedTarget != kk.contentDOM && kk.dispatch({
            effects: pk.of(null)
          })
        })), this.showOptions(fk, Dk.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(kk, ek) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(kk, ek, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(kk) {
        var ek;
        let ik = kk.state.field(this.stateField),
          Dk = kk.startState.field(this.stateField);
        if (this.updateTooltipClass(kk.state), ik != Dk) {
          let {
            options: fk,
            selected: Sk,
            disabled: bk
          } = ik.open;
          Dk.open && Dk.open.options == fk || (this.range = sk(fk.length, Sk, kk.state.facet(Lk).maxRenderedOptions), this.showOptions(fk, ik.id)), this.updateSel(), bk != (null === (ek = Dk.open) || void 0 === ek ? void 0 : ek.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!bk)
        }
      }
      updateTooltipClass(kk) {
        let ek = this.tooltipClass(kk);
        if (ek != this.currentClass) {
          for (let kk of this.currentClass.split(" ")) kk && this.dom.classList.remove(kk);
          for (let kk of ek.split(" ")) kk && this.dom.classList.add(kk);
          this.currentClass = ek
        }
      }
      positioned(kk) {
        this.space = kk, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let kk = this.view.state.field(this.stateField),
          ek = kk.open;
        (ek.selected > -1 && ek.selected < this.range.from || ek.selected >= this.range.to) && (this.range = sk(ek.options.length, ek.selected, this.view.state.facet(Lk).maxRenderedOptions), this.showOptions(ek.options, kk.id));
        let ik = this.updateSelectedOption(ek.selected);
        if (ik) {
          this.destroyInfo();
          let {
            completion: Dk
          } = ek.options[ek.selected], {
            info: Sk
          } = Dk;
          if (!Sk) return;
          let bk = "string" === typeof Sk ? document.createTextNode(Sk) : Sk(Dk);
          if (!bk) return;
          "then" in bk ? bk.then((ek => {
            ek && this.view.state.field(this.stateField, !1) == kk && this.addInfoPane(ek, Dk)
          })).catch((kk => (0, fk.N)(this.view.state, kk, "completion info"))) : (this.addInfoPane(bk, Dk), ik.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(kk, ek) {
        this.destroyInfo();
        let ik = this.info = document.createElement("div");
        if (ik.className = "cm-tooltip cm-completionInfo", ik.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != kk.nodeType) ik.appendChild(kk), this.infoDestroy = null;
        else {
          let {
            dom: ek,
            destroy: Dk
          } = kk;
          ik.appendChild(ek), this.infoDestroy = Dk || null
        }
        this.dom.appendChild(ik), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(kk) {
        let ek = null;
        for (let ik = this.list.firstChild, Dk = this.range.from; ik; ik = ik.nextSibling, Dk++) "LI" == ik.nodeName && ik.id ? Dk == kk ? ik.hasAttribute("aria-selected") || (ik.setAttribute("aria-selected", "true"), ek = ik) : ik.hasAttribute("aria-selected") && (ik.removeAttribute("aria-selected"), ik.removeAttribute("aria-describedby")) : Dk--;
        return ek && function(kk, ek) {
          let ik = kk.getBoundingClientRect(),
            Dk = ek.getBoundingClientRect(),
            fk = ik.height / kk.offsetHeight;
          Dk.top < ik.top ? kk.scrollTop -= (ik.top - Dk.top) / fk : Dk.bottom > ik.bottom && (kk.scrollTop += (Dk.bottom - ik.bottom) / fk)
        }(this.list, ek), ek
      }
      measureInfo() {
        let kk = this.dom.querySelector("[aria-selected]");
        if (!kk || !this.info) return null;
        let ek = this.dom.getBoundingClientRect(),
          ik = this.info.getBoundingClientRect(),
          Dk = kk.getBoundingClientRect(),
          fk = this.space;
        if (!fk) {
          let kk = this.dom.ownerDocument.documentElement;
          fk = {
            left: 0,
            top: 0,
            right: kk.clientWidth,
            bottom: kk.clientHeight
          }
        }
        return Dk.top > Math.min(fk.bottom, ek.bottom) - 10 || Dk.bottom < Math.max(fk.top, ek.top) + 10 ? null : this.view.state.facet(Lk).positionInfo(this.view, ek, Dk, ik, fk, this.dom)
      }
      placeInfo(kk) {
        this.info && (kk ? (kk.style && (this.info.style.cssText = kk.style), this.info.className = "cm-tooltip cm-completionInfo " + (kk.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(kk, ek, ik) {
        const Dk = document.createElement("ul");
        Dk.id = ek, Dk.setAttribute("role", "listbox"), Dk.setAttribute("aria-expanded", "true"), Dk.setAttribute("aria-label", this.view.state.phrase("Completions")), Dk.addEventListener("mousedown", (kk => {
          kk.target == Dk && kk.preventDefault()
        }));
        let fk = null;
        for (let Sk = ik.from; Sk < ik.to; Sk++) {
          let {
            completion: bk,
            match: rk
          } = kk[Sk], {
            section: Pk
          } = bk;
          if (Pk) {
            let kk = "string" == typeof Pk ? Pk : Pk.name;
            if (kk != fk && (Sk > ik.from || 0 == ik.from))
              if (fk = kk, "string" != typeof Pk && Pk.header) Dk.appendChild(Pk.header(Pk));
              else {
                Dk.appendChild(document.createElement("completion-section")).textContent = kk
              }
          }
          const mk = Dk.appendChild(document.createElement("li"));
          mk.id = ek + "-" + Sk, mk.setAttribute("role", "option");
          let Mk = this.optionClass(bk);
          Mk && (mk.className = Mk);
          for (let kk of this.optionContent) {
            let ek = kk(bk, this.view.state, this.view, rk);
            ek && mk.appendChild(ek)
          }
        }
        return ik.from && Dk.classList.add("cm-completionListIncompleteTop"), ik.to < kk.length && Dk.classList.add("cm-completionListIncompleteBottom"), Dk
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Vk(kk, ek) {
      return ik => new dk(ik, kk, ek)
    }

    function Fk(kk) {
      return 100 * (kk.boost || 0) + (kk.apply ? 10 : 0) + (kk.info ? 5 : 0) + (kk.type ? 1 : 0)
    }
    class uk {
      constructor(kk, ek, ik, Dk, fk, Sk) {
        this.options = kk, this.attrs = ek, this.tooltip = ik, this.timestamp = Dk, this.selected = fk, this.disabled = Sk
      }
      setSelected(kk, ek) {
        return kk == this.selected || kk >= this.options.length ? this : new uk(this.options, Qk(ek, kk), this.tooltip, this.timestamp, kk, this.disabled)
      }
      static build(kk, ek, ik, Dk, fk, Sk) {
        if (Dk && !Sk && kk.some((kk => kk.isPending))) return Dk.setDisabled();
        let bk = function(kk, ek) {
          let ik = [],
            Dk = null,
            fk = null,
            Sk = kk => {
              ik.push(kk);
              let {
                section: ek
              } = kk.completion;
              if (ek) {
                Dk || (Dk = []);
                let kk = "string" == typeof ek ? ek : ek.name;
                Dk.some((ek => ek.name == kk)) || Dk.push("string" == typeof ek ? {
                  name: kk
                } : ek)
              }
            },
            bk = ek.facet(Lk);
          for (let Kk of kk)
            if (Kk.hasResult()) {
              let kk = Kk.result.getMatch;
              if (!1 === Kk.result.filter)
                for (let ek of Kk.result.options) Sk(new Mk(ek, Kk.source, kk ? kk(ek) : [], 1e9 - ik.length));
              else {
                let ik, Dk = ek.sliceDoc(Kk.from, Kk.to),
                  rk = bk.filterStrict ? new Yk(Dk) : new yk(Dk);
                for (let ek of Kk.result.options)
                  if (ik = rk.match(ek.label)) {
                    let Dk = ek.displayLabel ? kk ? kk(ek, ik.matched) : [] : ik.matched,
                      bk = ik.score + (ek.boost || 0);
                    if (Sk(new Mk(ek, Kk.source, Dk, bk)), "object" == typeof ek.section && "dynamic" === ek.section.rank) {
                      let {
                        name: kk
                      } = ek.section;
                      fk || (fk = Object.create(null)), fk[kk] = Math.max(bk, fk[kk] || -1e9)
                    }
                  }
              }
            } if (Dk) {
            let kk = Object.create(null),
              ek = 0,
              Sk = (kk, ek) => ("dynamic" === kk.rank && "dynamic" === ek.rank ? fk[ek.name] - fk[kk.name] : 0) || ("number" == typeof kk.rank ? kk.rank : 1e9) - ("number" == typeof ek.rank ? ek.rank : 1e9) || (kk.name < ek.name ? -1 : 1);
            for (let ik of Dk.sort(Sk)) ek -= 1e5, kk[ik.name] = ek;
            for (let Dk of ik) {
              let {
                section: ek
              } = Dk.completion;
              ek && (Dk.score += kk["string" == typeof ek ? ek : ek.name])
            }
          }
          let rk = [],
            Pk = null,
            mk = bk.compareCompletions;
          for (let Mk of ik.sort(((kk, ek) => ek.score - kk.score || mk(kk.completion, ek.completion)))) {
            let kk = Mk.completion;
            !Pk || Pk.label != kk.label || Pk.detail != kk.detail || null != Pk.type && null != kk.type && Pk.type != kk.type || Pk.apply != kk.apply || Pk.boost != kk.boost ? rk.push(Mk) : Fk(Mk.completion) > Fk(Pk) && (rk[rk.length - 1] = Mk), Pk = Mk.completion
          }
          return rk
        }(kk, ek);
        if (!bk.length) return Dk && kk.some((kk => kk.isPending)) ? Dk.setDisabled() : null;
        let rk = ek.facet(Lk).selectOnOpen ? 0 : -1;
        if (Dk && Dk.selected != rk && -1 != Dk.selected) {
          let kk = Dk.options[Dk.selected].completion;
          for (let ek = 0; ek < bk.length; ek++)
            if (bk[ek].completion == kk) {
              rk = ek;
              break
            }
        }
        return new uk(bk, Qk(ik, rk), {
          pos: kk.reduce(((kk, ek) => ek.hasResult() ? Math.min(kk, ek.from) : kk), 1e8),
          create: Bk,
          above: fk.aboveCursor
        }, Dk ? Dk.timestamp : Date.now(), rk, !1)
      }
      map(kk) {
        return new uk(this.options, this.attrs, {
          ...this.tooltip,
          pos: kk.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new uk(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class qk {
      constructor(kk, ek, ik) {
        this.active = kk, this.id = ek, this.open = ik
      }
      static start() {
        return new qk(vk, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(kk) {
        let {
          state: ek
        } = kk, ik = ek.facet(Lk), Dk = (ik.override || ek.languageDataAt("autocomplete", Kk(ek)).map(wk)).map((ek => (this.active.find((kk => kk.source == ek)) || new hk(ek, this.active.some((kk => 0 != kk.state)) ? 1 : 0)).update(kk, ik)));
        Dk.length == this.active.length && Dk.every(((kk, ek) => kk == this.active[ek])) && (Dk = this.active);
        let fk = this.open,
          Sk = kk.effects.some((kk => kk.is(Wk)));
        fk && kk.docChanged && (fk = fk.map(kk.changes)), kk.selection || Dk.some((ek => ek.hasResult() && kk.changes.touchesRange(ek.from, ek.to))) || ! function(kk, ek) {
          if (kk == ek) return !0;
          for (let ik = 0, Dk = 0;;) {
            for (; ik < kk.length && !kk[ik].hasResult();) ik++;
            for (; Dk < ek.length && !ek[Dk].hasResult();) Dk++;
            let fk = ik == kk.length,
              Sk = Dk == ek.length;
            if (fk || Sk) return fk == Sk;
            if (kk[ik++].result != ek[Dk++].result) return !1
          }
        }(Dk, this.active) || Sk ? fk = uk.build(Dk, ek, this.id, fk, ik, Sk) : fk && fk.disabled && !Dk.some((kk => kk.isPending)) && (fk = null), !fk && Dk.every((kk => !kk.isPending)) && Dk.some((kk => kk.hasResult())) && (Dk = Dk.map((kk => kk.hasResult() ? new hk(kk.source, 0) : kk)));
        for (let bk of kk.effects) bk.is(jk) && (fk = fk && fk.setSelected(bk.value, this.id));
        return Dk == this.active && fk == this.open ? this : new qk(Dk, this.id, fk)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Ik : zk
      }
    }
    const Ik = {
        "aria-autocomplete": "list"
      },
      zk = {};

    function Qk(kk, ek) {
      let ik = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": kk
      };
      return ek > -1 && (ik["aria-activedescendant"] = kk + "-" + ek), ik
    }
    const vk = [];

    function Ek(kk, ek) {
      if (kk.isUserEvent("input.complete")) {
        let ik = kk.annotation(nk);
        if (ik && ek.activateOnCompletion(ik)) return 12
      }
      let ik = kk.isUserEvent("input.type");
      return ik && ek.activateOnTyping ? 5 : ik ? 1 : kk.isUserEvent("delete.backward") ? 2 : kk.selection ? 8 : kk.docChanged ? 16 : 0
    }
    class hk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = kk, this.state = ek, this.explicit = ik
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(kk, ek) {
        let ik = Ek(kk, ek),
          Dk = this;
        (8 & ik || 16 & ik && this.touches(kk)) && (Dk = new hk(Dk.source, 0)), 4 & ik && 0 == Dk.state && (Dk = new hk(this.source, 1)), Dk = Dk.updateFor(kk, ik);
        for (let fk of kk.effects)
          if (fk.is(lk)) Dk = new hk(Dk.source, 1, fk.value);
          else if (fk.is(pk)) Dk = new hk(Dk.source, 0);
        else if (fk.is(Wk))
          for (let kk of fk.value) kk.source == Dk.source && (Dk = kk);
        return Dk
      }
      updateFor(kk, ek) {
        return this.map(kk.changes)
      }
      map(kk) {
        return this
      }
      touches(kk) {
        return kk.changes.touchesRange(Kk(kk.state))
      }
    }
    class ak extends hk {
      constructor(kk, ek, ik, Dk, fk, Sk) {
        super(kk, 3, ek), this.limit = ik, this.result = Dk, this.from = fk, this.to = Sk
      }
      hasResult() {
        return !0
      }
      updateFor(kk, ek) {
        var ik;
        if (!(3 & ek)) return this.map(kk.changes);
        let Dk = this.result;
        Dk.map && !kk.changes.empty && (Dk = Dk.map(Dk, kk.changes));
        let fk = kk.changes.mapPos(this.from),
          Sk = kk.changes.mapPos(this.to, 1),
          rk = Kk(kk.state);
        if (rk > Sk || !Dk || 2 & ek && (Kk(kk.startState) == this.from || rk < this.limit)) return new hk(this.source, 4 & ek ? 1 : 0);
        let Pk = kk.changes.mapPos(this.limit);
        return function(kk, ek, ik, Dk) {
          if (!kk) return !1;
          let fk = ek.sliceDoc(ik, Dk);
          return "function" == typeof kk ? kk(fk, ik, Dk, ek) : xk(kk, !0).test(fk)
        }(Dk.validFor, kk.state, fk, Sk) ? new ak(this.source, this.explicit, Pk, Dk, fk, Sk) : Dk.update && (Dk = Dk.update(Dk, fk, Sk, new bk(kk.state, rk, !1))) ? new ak(this.source, this.explicit, Pk, Dk, Dk.from, null !== (ik = Dk.to) && void 0 !== ik ? ik : Kk(kk.state)) : new hk(this.source, 1, this.explicit)
      }
      map(kk) {
        if (kk.empty) return this;
        return (this.result.map ? this.result.map(this.result, kk) : this.result) ? new ak(this.source, this.explicit, kk.mapPos(this.limit), this.result, kk.mapPos(this.from), kk.mapPos(this.to, 1)) : new hk(this.source, 0)
      }
      touches(kk) {
        return kk.changes.touchesRange(this.from, this.to)
      }
    }
    const Wk = Dk.D.define({
        map: (kk, ek) => kk.map((kk => kk.map(ek)))
      }),
      tk = Dk.E.define({
        create: () => qk.start(),
        update: (kk, ek) => kk.update(ek),
        provide: kk => [fk.fb.from(kk, (kk => kk.tooltip)), fk.f.contentAttributes.from(kk, (kk => kk.attrs))]
      });

    function Xk(kk, ek) {
      const ik = ek.completion.apply || ek.completion.label;
      let Dk = kk.state.field(tk).active.find((kk => kk.source == ek.source));
      return Dk instanceof ak && ("string" == typeof ik ? kk.dispatch({
        ...Uk(kk.state, ik, Dk.from, Dk.to),
        annotations: nk.of(ek.completion)
      }) : ik(kk, ek.completion, Dk.from, Dk.to), !0)
    }
    const Bk = Vk(tk, Xk);

    function ck(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return ik => {
        let Dk = ik.state.field(tk, !1);
        if (!Dk || !Dk.open || Dk.open.disabled || Date.now() - Dk.open.timestamp < ik.state.facet(Lk).interactionDelay) return !1;
        let Sk, bk = 1;
        "page" == ek && (Sk = (0, fk.v)(ik, Dk.open.tooltip)) && (bk = Math.max(2, Math.floor(Sk.dom.offsetHeight / Sk.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: rk
        } = Dk.open.options, Pk = Dk.open.selected > -1 ? Dk.open.selected + bk * (kk ? 1 : -1) : kk ? 0 : rk - 1;
        return Pk < 0 ? Pk = "page" == ek ? 0 : rk - 1 : Pk >= rk && (Pk = "page" == ek ? rk - 1 : 0), ik.dispatch({
          effects: jk.of(Pk)
        }), !0
      }
    }
    const Tk = kk => !!kk.state.field(tk, !1) && (kk.dispatch({
      effects: lk.of(!0)
    }), !0);
    class Zk {
      constructor(kk, ek) {
        this.active = kk, this.context = ek, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const Ok = fk.i.fromClass(class {
        constructor(kk) {
          this.view = kk, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let ek of kk.state.field(tk).active) ek.isPending && this.startQuery(ek)
        }
        update(kk) {
          let ek = kk.state.field(tk),
            ik = kk.state.facet(Lk);
          if (!kk.selectionSet && !kk.docChanged && kk.startState.field(tk) == ek) return;
          let Dk = kk.transactions.some((kk => {
            let ek = Ek(kk, ik);
            return 8 & ek || (kk.selection || kk.docChanged) && !(3 & ek)
          }));
          for (let rk = 0; rk < this.running.length; rk++) {
            let ek = this.running[rk];
            if (Dk || ek.context.abortOnDocChange && kk.docChanged || ek.updates.length + kk.transactions.length > 50 && Date.now() - ek.time > 1e3) {
              for (let kk of ek.context.abortListeners) try {
                kk()
              } catch (bk) {
                (0, fk.N)(this.view.state, bk)
              }
              ek.context.abortListeners = null, this.running.splice(rk--, 1)
            } else ek.updates.push(...kk.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), kk.transactions.some((kk => kk.effects.some((kk => kk.is(lk))))) && (this.pendingStart = !0);
          let Sk = this.pendingStart ? 50 : ik.activateOnTypingDelay;
          if (this.debounceUpdate = ek.active.some((kk => kk.isPending && !this.running.some((ek => ek.active.source == kk.source)))) ? setTimeout((() => this.startUpdate()), Sk) : -1, 0 != this.composing)
            for (let fk of kk.transactions) fk.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && fk.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: kk
          } = this.view, ek = kk.field(tk);
          for (let ik of ek.active) ik.isPending && !this.running.some((kk => kk.active.source == ik.source)) && this.startQuery(ik);
          this.running.length && ek.open && ek.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Lk).updateSyncTime))
        }
        startQuery(kk) {
          let {
            state: ek
          } = this.view, ik = Kk(ek), Dk = new bk(ek, ik, kk.explicit, this.view), Sk = new Zk(kk, Dk);
          this.running.push(Sk), Promise.resolve(kk.source(Dk)).then((kk => {
            Sk.context.aborted || (Sk.done = kk || null, this.scheduleAccept())
          }), (kk => {
            this.view.dispatch({
              effects: pk.of(null)
            }), (0, fk.N)(this.view.state, kk)
          }))
        }
        scheduleAccept() {
          this.running.every((kk => void 0 !== kk.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Lk).updateSyncTime))
        }
        accept() {
          var kk;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let ek = [],
            ik = this.view.state.facet(Lk),
            Dk = this.view.state.field(tk);
          for (let fk = 0; fk < this.running.length; fk++) {
            let Sk = this.running[fk];
            if (void 0 === Sk.done) continue;
            if (this.running.splice(fk--, 1), Sk.done) {
              let Dk = Kk(Sk.updates.length ? Sk.updates[0].startState : this.view.state),
                fk = Math.min(Dk, Sk.done.from + (Sk.active.explicit ? 0 : 1)),
                bk = new ak(Sk.active.source, Sk.active.explicit, fk, Sk.done, Sk.done.from, null !== (kk = Sk.done.to) && void 0 !== kk ? kk : Dk);
              for (let kk of Sk.updates) bk = bk.update(kk, ik);
              if (bk.hasResult()) {
                ek.push(bk);
                continue
              }
            }
            let bk = Dk.active.find((kk => kk.source == Sk.active.source));
            if (bk && bk.isPending)
              if (null == Sk.done) {
                let kk = new hk(Sk.active.source, 0);
                for (let ek of Sk.updates) kk = kk.update(ek, ik);
                kk.isPending || ek.push(kk)
              } else this.startQuery(bk)
          }(ek.length || Dk.open && Dk.open.disabled) && this.view.dispatch({
            effects: Wk.of(ek)
          })
        }
      }, {
        eventHandlers: {
          blur(kk) {
            let ek = this.view.state.field(tk, !1);
            if (ek && ek.tooltip && this.view.state.facet(Lk).closeOnBlur) {
              let ik = ek.open && (0, fk.v)(this.view, ek.open.tooltip);
              ik && ik.dom.contains(kk.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: pk.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: lk.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      gk = "object" == typeof navigator && /Win/.test(navigator.platform),
      Gk = Dk.q.highest(fk.f.domEventHandlers({
        keydown(kk, ek) {
          let ik = ek.state.field(tk, !1);
          if (!ik || !ik.open || ik.open.disabled || ik.open.selected < 0 || kk.key.length > 1 || kk.ctrlKey && (!gk || !kk.altKey) || kk.metaKey) return !1;
          let Dk = ik.open.options[ik.open.selected],
            fk = ik.active.find((kk => kk.source == Dk.source)),
            Sk = Dk.completion.commitCharacters || fk.result.commitCharacters;
          return Sk && Sk.indexOf(kk.key) > -1 && Xk(ek, Dk), !1
        }
      })),
      Nk = fk.f.baseTheme({
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
    class Rk {
      constructor(kk, ek, ik, Dk) {
        this.field = kk, this.line = ek, this.from = ik, this.to = Dk
      }
    }
    class Jk {
      constructor(kk, ek, ik) {
        this.field = kk, this.from = ek, this.to = ik
      }
      map(kk) {
        let ek = kk.mapPos(this.from, -1, Dk.p.TrackDel),
          ik = kk.mapPos(this.to, 1, Dk.p.TrackDel);
        return null == ek || null == ik ? null : new Jk(this.field, ek, ik)
      }
    }
    class ke {
      constructor(kk, ek) {
        this.lines = kk, this.fieldPositions = ek
      }
      instantiate(kk, ek) {
        let ik = [],
          Dk = [ek],
          fk = kk.doc.lineAt(ek),
          bk = /^\s*/.exec(fk.text)[0];
        for (let Pk of this.lines) {
          if (ik.length) {
            let ik = bk,
              fk = /^\t*/.exec(Pk)[0].length;
            for (let ek = 0; ek < fk; ek++) ik += kk.facet(Sk.ab);
            Dk.push(ek + ik.length - fk), Pk = ik + Pk.slice(fk)
          }
          ik.push(Pk), ek += Pk.length + 1
        }
        let rk = this.fieldPositions.map((kk => new Jk(kk.field, Dk[kk.line] + kk.from, Dk[kk.line] + kk.to)));
        return {
          text: ik,
          lw: rk
        }
      }
      static parse(kk) {
        let ek, ik = [],
          Dk = [],
          fk = [];
        for (let Sk of kk.split(/\r\n?|\n/)) {
          for (; ek = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(Sk);) {
            let kk = ek[1] ? +ek[1] : null,
              bk = ek[2] || ek[3] || "",
              rk = -1,
              Pk = bk.replace(/\\[{}]/g, (kk => kk[1]));
            for (let ek = 0; ek < ik.length; ek++)(null != kk ? ik[ek].seq == kk : Pk && ik[ek].name == Pk) && (rk = ek);
            if (rk < 0) {
              let ek = 0;
              for (; ek < ik.length && (null == kk || null != ik[ek].seq && ik[ek].seq < kk);) ek++;
              ik.splice(ek, 0, {
                seq: kk,
                name: Pk
              }), rk = ek;
              for (let kk of fk) kk.field >= rk && kk.field++
            }
            for (let ik of fk)
              if (ik.line == Dk.length && ik.from > ek.index) {
                let kk = ek[2] ? 3 + (ek[1] || "").length : 2;
                ik.from -= kk, ik.to -= kk
              } fk.push(new Rk(rk, Dk.length, ek.index, ek.index + Pk.length)), Sk = Sk.slice(0, ek.index) + bk + Sk.slice(ek.index + ek[0].length)
          }
          Sk = Sk.replace(/\\([{}])/g, ((kk, ek, ik) => {
            for (let Sk of fk) Sk.line == Dk.length && Sk.from > ik && (Sk.from--, Sk.to--);
            return ek
          })), Dk.push(Sk)
        }
        return new ke(Dk, fk)
      }
    }
    let ee = fk.b.widget({
        widget: new class extends fk.j {
          toDOM() {
            let kk = document.createElement("span");
            return kk.className = "cm-snippetFieldPosition", kk
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      ie = fk.b.mark({
        class: "cm-snippetField"
      });
    class De {
      constructor(kk, ek) {
        this.lw = kk, this.active = ek, this.deco = fk.b.set(kk.map((kk => (kk.from == kk.to ? ee : ie).range(kk.from, kk.to))), !0)
      }
      map(kk) {
        let ek = [];
        for (let ik of this.lw) {
          let Dk = ik.map(kk);
          if (!Dk) return null;
          ek.push(Dk)
        }
        return new De(ek, this.active)
      }
      selectionInsideField(kk) {
        return kk.lw.every((kk => this.lw.some((ek => ek.field == this.active && ek.from <= kk.from && ek.to >= kk.to))))
      }
    }
    const fe = Dk.D.define({
        map: (kk, ek) => kk && kk.map(ek)
      }),
      Se = Dk.D.define(),
      be = Dk.E.define({
        create: () => null,
        update(kk, ek) {
          for (let ik of ek.effects) {
            if (ik.is(fe)) return ik.value;
            if (ik.is(Se) && kk) return new De(kk.lw, ik.value)
          }
          return kk && ek.docChanged && (kk = kk.map(ek.changes)), kk && ek.selection && !kk.selectionInsideField(ek.selection) && (kk = null), kk
        },
        provide: kk => fk.f.oD.from(kk, (kk => kk ? kk.deco : fk.b.none))
      });

    function re(kk, ek) {
      return Dk.h.create(kk.filter((kk => kk.field == ek)).map((kk => Dk.h.range(kk.from, kk.to))))
    }

    function Pe(kk) {
      let ek = ke.parse(kk);
      return (kk, ik, fk, Sk) => {
        let {
          text: bk,
          lw: rk
        } = ek.instantiate(kk.state, fk), {
          main: Pk
        } = kk.state.selection, mk = {
          changes: {
            from: fk,
            to: Sk == Pk.from ? Pk.to : Sk,
            insert: Dk.I.of(bk)
          },
          scrollIntoView: !0,
          annotations: ik ? [nk.of(ik), Dk.K.userEvent.of("input.complete")] : void 0
        };
        if (rk.length && (mk.selection = re(rk, 0)), rk.some((kk => kk.field > 0))) {
          let ek = new De(rk, 0),
            ik = mk.effects = [fe.of(ek)];
          void 0 === kk.state.field(be, !1) && ik.push(Dk.D.appendConfig.of([be, xe, Ue, Nk]))
        }
        kk.dispatch(kk.state.update(mk))
      }
    }

    function me(kk) {
      return ek => {
        let {
          state: ik,
          dispatch: Dk
        } = ek, fk = ik.field(be, !1);
        if (!fk || kk < 0 && 0 == fk.active) return !1;
        let Sk = fk.active + kk,
          bk = kk > 0 && !fk.lw.some((ek => ek.field == Sk + kk));
        return Dk(ik.update({
          selection: re(fk.lw, Sk),
          effects: fe.of(bk ? null : new De(fk.lw, Sk)),
          scrollIntoView: !0
        })), !0
      }
    }
    const Me = [{
        key: "Tab",
        run: me(1),
        shift: me(-1)
      }, {
        key: "Escape",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk;
          return !!ek.field(be, !1) && (ik(ek.update({
            effects: fe.of(null)
          })), !0)
        }
      }],
      Ke = Dk.n.define({
        combine: kk => kk.length ? kk[0] : Me
      }),
      xe = Dk.q.highest(fk.I.compute([Ke], (kk => kk.facet(Ke))));

    function ne(kk, ek) {
      return {
        ...ek,
        apply: Pe(kk)
      }
    }
    const Ue = fk.f.domEventHandlers({
      mousedown(kk, ek) {
        let ik, Dk = ek.state.field(be, !1);
        if (!Dk || null == (ik = ek.posAtCoords({
            x: kk.clientX,
            y: kk.clientY
          }))) return !1;
        let fk = Dk.lw.find((kk => kk.from <= ik && kk.to >= ik));
        return !(!fk || fk.field == Dk.active) && (ek.dispatch({
          selection: re(Dk.lw, fk.field),
          effects: fe.of(Dk.lw.some((kk => kk.field > fk.field)) ? new De(Dk.lw, fk.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const He = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      we = Dk.D.define({
        map(kk, ek) {
          let ik = ek.mapPos(kk, -1, Dk.p.TrackAfter);
          return null == ik ? void 0 : ik
        }
      }),
      le = new class extends Dk.A {};
    le.startSide = 1, le.endSide = -1;
    const pe = Dk.E.define({
      create: () => Dk.w.empty,
      update(kk, ek) {
        if (kk = kk.map(ek.changes), ek.selection) {
          let ik = ek.state.doc.lineAt(ek.selection.main.head);
          kk = kk.update({
            filter: kk => kk >= ik.from && kk <= ik.to
          })
        }
        for (let ik of ek.effects) ik.is(we) && (kk = kk.update({
          add: [le.range(ik.value, ik.value + 1)]
        }));
        return kk
      }
    });

    function ye() {
      return [je, pe]
    }
    const Ye = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function Le(kk) {
      for (let ek = 0; ek < 16; ek += 2)
        if (Ye.charCodeAt(ek) == kk) return Ye.charAt(ek + 1);
      return (0, Dk.ab)(kk < 128 ? kk : kk + 1)
    }

    function Ce(kk, ek) {
      return kk.languageDataAt("closeBrackets", ek)[0] || He
    }
    const Ae = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      je = fk.f.inputHandler.of(((kk, ek, ik, fk) => {
        if ((Ae ? kk.composing : kk.compositionStarted) || kk.state.readOnly) return !1;
        let Sk = kk.state.selection.main;
        if (fk.length > 2 || 2 == fk.length && 1 == (0, Dk.M)((0, Dk.L)(fk, 0)) || ek != Sk.from || ik != Sk.to) return !1;
        let bk = function(kk, ek) {
          let ik = Ce(kk, kk.selection.main.head),
            fk = ik.brackets || He.brackets;
          for (let Sk of fk) {
            let bk = Le((0, Dk.L)(Sk, 0));
            if (ek == Sk) return bk == Sk ? qe(kk, Sk, fk.indexOf(Sk + Sk + Sk) > -1, ik) : Fe(kk, Sk, bk, ik.before || He.before);
            if (ek == bk && de(kk, kk.selection.main.from)) return ue(kk, Sk, bk)
          }
          return null
        }(kk.state, fk);
        return !!bk && (kk.dispatch(bk), !0)
      })),
      se = [{
        key: "Backspace",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk;
          if (ek.readOnly) return !1;
          let fk = Ce(ek, ek.selection.main.head).brackets || He.brackets,
            Sk = null,
            bk = ek.changeByRange((kk => {
              if (kk.empty) {
                let ik = function(kk, ek) {
                  let ik = kk.sliceString(ek - 2, ek);
                  return (0, Dk.M)((0, Dk.L)(ik, 0)) == ik.length ? ik : ik.slice(1)
                }(ek.doc, kk.head);
                for (let Sk of fk)
                  if (Sk == ik && Ve(ek.doc, kk.head) == Le((0, Dk.L)(Sk, 0))) return {
                    changes: {
                      from: kk.head - Sk.length,
                      to: kk.head + Sk.length
                    },
                    range: Dk.h.cursor(kk.head - Sk.length)
                  }
              }
              return {
                range: Sk = kk
              }
            }));
          return Sk || ik(ek.update(bk, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !Sk
        }
      }];

    function de(kk, ek) {
      let ik = !1;
      return kk.field(pe).between(0, kk.doc.length, (kk => {
        kk == ek && (ik = !0)
      })), ik
    }

    function Ve(kk, ek) {
      let ik = kk.sliceString(ek, ek + 2);
      return ik.slice(0, (0, Dk.M)((0, Dk.L)(ik, 0)))
    }

    function Fe(kk, ek, ik, fk) {
      let Sk = null,
        bk = kk.changeByRange((bk => {
          if (!bk.empty) return {
            changes: [{
              insert: ek,
              from: bk.from
            }, {
              insert: ik,
              from: bk.to
            }],
            effects: we.of(bk.to + ek.length),
            range: Dk.h.range(bk.anchor + ek.length, bk.head + ek.length)
          };
          let rk = Ve(kk.doc, bk.head);
          return !rk || /\s/.test(rk) || fk.indexOf(rk) > -1 ? {
            changes: {
              insert: ek + ik,
              from: bk.head
            },
            effects: we.of(bk.head + ek.length),
            range: Dk.h.cursor(bk.head + ek.length)
          } : {
            range: Sk = bk
          }
        }));
      return Sk ? null : kk.update(bk, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function ue(kk, ek, ik) {
      let fk = null,
        Sk = kk.changeByRange((ek => ek.empty && Ve(kk.doc, ek.head) == ik ? {
          changes: {
            from: ek.head,
            to: ek.head + ik.length,
            insert: ik
          },
          range: Dk.h.cursor(ek.head + ik.length)
        } : fk = {
          range: ek
        }));
      return fk ? null : kk.update(Sk, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function qe(kk, ek, ik, fk) {
      let bk = fk.stringPrefixes || He.stringPrefixes,
        rk = null,
        Pk = kk.changeByRange((fk => {
          if (!fk.empty) return {
            changes: [{
              insert: ek,
              from: fk.from
            }, {
              insert: ek,
              from: fk.to
            }],
            effects: we.of(fk.to + ek.length),
            range: Dk.h.range(fk.anchor + ek.length, fk.head + ek.length)
          };
          let Pk, mk = fk.head,
            Mk = Ve(kk.doc, mk);
          if (Mk == ek) {
            if (Ie(kk, mk)) return {
              changes: {
                insert: ek + ek,
                from: mk
              },
              effects: we.of(mk + ek.length),
              range: Dk.h.cursor(mk + ek.length)
            };
            if (de(kk, mk)) {
              let fk = ik && kk.sliceDoc(mk, mk + 3 * ek.length) == ek + ek + ek ? ek + ek + ek : ek;
              return {
                changes: {
                  from: mk,
                  to: mk + fk.length,
                  insert: fk
                },
                range: Dk.h.cursor(mk + fk.length)
              }
            }
          } else {
            if (ik && kk.sliceDoc(mk - 2 * ek.length, mk) == ek + ek && (Pk = ze(kk, mk - 2 * ek.length, bk)) > -1 && Ie(kk, Pk)) return {
              changes: {
                insert: ek + ek + ek + ek,
                from: mk
              },
              effects: we.of(mk + ek.length),
              range: Dk.h.cursor(mk + ek.length)
            };
            if (kk.charCategorizer(mk)(Mk) != Dk.f.Word && ze(kk, mk, bk) > -1 && ! function(kk, ek, ik, Dk) {
                let fk = (0, Sk.lb)(kk).resolveInner(ek, -1),
                  bk = Dk.reduce(((kk, ek) => Math.max(kk, ek.length)), 0);
                for (let Sk = 0; Sk < 5; Sk++) {
                  let Sk = kk.sliceDoc(fk.from, Math.min(fk.to, fk.from + ik.length + bk)),
                    rk = Sk.indexOf(ik);
                  if (!rk || rk > -1 && Dk.indexOf(Sk.slice(0, rk)) > -1) {
                    let ek = fk.firstChild;
                    for (; ek && ek.from == fk.from && ek.to - ek.from > ik.length + rk;) {
                      if (kk.sliceDoc(ek.to - ik.length, ek.to) == ik) return !1;
                      ek = ek.firstChild
                    }
                    return !0
                  }
                  let Pk = fk.to == ek && fk.parent;
                  if (!Pk) break;
                  fk = Pk
                }
                return !1
              }(kk, mk, ek, bk)) return {
              changes: {
                insert: ek + ek,
                from: mk
              },
              effects: we.of(mk + ek.length),
              range: Dk.h.cursor(mk + ek.length)
            }
          }
          return {
            range: rk = fk
          }
        }));
      return rk ? null : kk.update(Pk, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Ie(kk, ek) {
      let ik = (0, Sk.lb)(kk).resolveInner(ek + 1);
      return ik.parent && ik.from == ek
    }

    function ze(kk, ek, ik) {
      let fk = kk.charCategorizer(ek);
      if (fk(kk.sliceDoc(ek - 1, ek)) != Dk.f.Word) return ek;
      for (let Sk of ik) {
        let ik = ek - Sk.length;
        if (kk.sliceDoc(ik, ek) == Sk && fk(kk.sliceDoc(ik - 1, ik)) != Dk.f.Word) return ik
      }
      return -1
    }

    function Qe() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Gk, tk, Lk.of(kk), Ok, Ee, Nk]
    }
    const ve = [{
        key: "Ctrl-Space",
        run: Tk
      }, {
        mac: "Alt-`",
        run: Tk
      }, {
        mac: "Alt-i",
        run: Tk
      }, {
        key: "Escape",
        run: kk => {
          let ek = kk.state.field(tk, !1);
          return !(!ek || !ek.active.some((kk => 0 != kk.state))) && (kk.dispatch({
            effects: pk.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: ck(!0)
      }, {
        key: "ArrowUp",
        run: ck(!1)
      }, {
        key: "PageDown",
        run: ck(!0, "page")
      }, {
        key: "PageUp",
        run: ck(!1, "page")
      }, {
        key: "Enter",
        run: kk => {
          let ek = kk.state.field(tk, !1);
          return !(kk.state.readOnly || !ek || !ek.open || ek.open.selected < 0 || ek.open.disabled || Date.now() - ek.open.timestamp < kk.state.facet(Lk).interactionDelay) && Xk(kk, ek.open.options[ek.open.selected])
        }
      }],
      Ee = Dk.q.highest(fk.I.computeN([Lk], (kk => kk.facet(Lk).defaultKeymap ? [ve] : [])))
  },
  41019: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => mk,
      f: () => xk,
      j: () => Mk,
      k: () => Kk
    });
    var Dk = ik(40876);
    class fk {
      constructor(kk, ek, ik, Dk) {
        this.origin = kk, this.changes = ek, this.effects = ik, this.clientID = Dk
      }
    }
    class Sk {
      constructor(kk, ek) {
        this.version = kk, this.unconfirmed = ek
      }
    }
    const bk = Dk.n.define({
        combine(kk) {
          let ek = (0, Dk.Q)(kk, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: kk => kk
          });
          return null == ek.clientID && (ek.clientID = kk.length && kk[0].generatedID || ""), ek
        }
      }),
      rk = Dk.b.define(),
      Pk = Dk.E.define({
        create: kk => new Sk(kk.facet(bk).startVersion, []),
        update(kk, ek) {
          let ik = ek.annotation(rk);
          if (ik) return ik;
          let {
            sharedEffects: Dk,
            clientID: Pk
          } = ek.startState.facet(bk), mk = Dk(ek);
          return mk.length || !ek.changes.empty ? new Sk(kk.version, kk.unconfirmed.concat(new fk(ek, ek.changes, mk, Pk))) : kk
        }
      });

    function mk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Pk, bk.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, kk))]
    }

    function Mk(kk, ek) {
      let {
        version: ik,
        unconfirmed: mk
      } = kk.field(Pk), {
        clientID: Mk
      } = kk.facet(bk);
      ik += ek.length;
      let Kk = [],
        xk = null,
        nk = 0;
      for (let fk of ek) {
        let kk = nk < mk.length ? mk[nk] : null;
        kk && kk.clientID == fk.clientID ? (xk && (xk = xk.map(kk.changes, !0)), Kk = Dk.D.mapEffects(Kk, fk.changes), nk++) : (Kk = Dk.D.mapEffects(Kk, fk.changes), fk.effects && (Kk = Kk.concat(fk.effects)), xk = xk ? xk.compose(fk.changes) : fk.changes)
      }
      if (nk && (mk = mk.slice(nk)), mk.length && (xk && (mk = mk.map((kk => {
          let ek = kk.changes.map(xk);
          return xk = xk.map(kk.changes, !0), new fk(kk.origin, ek, Dk.D.mapEffects(kk.effects, xk), Mk)
        }))), Kk.length)) {
        let kk = mk.reduce(((kk, ek) => kk.compose(ek.changes)), Dk.ChangeSet.empty(mk[0].changes.length));
        Kk = Dk.D.mapEffects(Kk, kk)
      }
      return xk ? kk.update({
        changes: xk,
        effects: Kk,
        annotations: [Dk.K.addToHistory.of(!1), Dk.K.remote.of(!0), rk.of(new Sk(ik, mk))],
        filter: !1
      }) : kk.update({
        annotations: [rk.of(new Sk(ik, mk))]
      })
    }

    function Kk(kk) {
      return kk.field(Pk).unconfirmed
    }

    function xk(kk) {
      return kk.field(Pk).version
    }
  },
  40919: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => we
    });
    var Dk = ik(40906);
    class fk {
      constructor(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        let mk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Mk = arguments.length > 10 ? arguments[10] : void 0;
        this.p = kk, this.stack = ek, this.state = ik, this.reducePos = Dk, this.pos = fk, this.score = Sk, this.buffer = bk, this.bufferBase = rk, this.curContext = Pk, this.lookAhead = mk, this.parent = Mk
      }
      toString() {
        return `[${this.stack.filter(((kk,ek)=>ek%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = kk.parser.context;
        return new fk(kk, [], ek, ik, ik, 0, [], 0, Dk ? new Sk(Dk, Dk.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(kk, ek) {
        this.stack.push(this.state, ek, this.bufferBase + this.buffer.length), this.state = kk
      }
      reduce(kk) {
        var ek;
        let ik = kk >> 19,
          Dk = 65535 & kk,
          {
            parser: fk
          } = this.p,
          Sk = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          bk = fk.dynamicPrecedence(Dk);
        if (bk && (this.score += bk), 0 == ik) return this.pushState(fk.getGoto(this.state, Dk, !0), this.reducePos), Dk < fk.minRepeatTerm && this.storeNode(Dk, this.reducePos, this.reducePos, Sk ? 8 : 4, !0), void this.reduceContext(Dk, this.reducePos);
        let rk = this.stack.length - 3 * (ik - 1) - (262144 & kk ? 6 : 0),
          Pk = rk ? this.stack[rk - 2] : this.p.lw[0].from,
          mk = this.reducePos - Pk;
        mk >= 2e3 && !(null === (ek = this.p.parser.nodeSet.types[Dk]) || void 0 === ek ? void 0 : ek.isAnonymous) && (Pk == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = mk) : this.p.lastBigReductionSize < mk && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = Pk, this.p.lastBigReductionSize = mk));
        let Mk = rk ? this.stack[rk - 1] : 0,
          Kk = this.bufferBase + this.buffer.length - Mk;
        if (Dk < fk.minRepeatTerm || 131072 & kk) {
          let kk = fk.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Dk, Pk, kk, Kk + 4, !0)
        }
        if (262144 & kk) this.state = this.stack[rk];
        else {
          let kk = this.stack[rk - 3];
          this.state = fk.getGoto(kk, Dk, !0)
        }
        for (; this.stack.length > rk;) this.stack.pop();
        this.reduceContext(Dk, Pk)
      }
      storeNode(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == kk && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let kk = this,
            Dk = this.buffer.length;
          if (0 == Dk && kk.parent && (Dk = kk.bufferBase - kk.parent.bufferBase, kk = kk.parent), Dk > 0 && 0 == kk.buffer[Dk - 4] && kk.buffer[Dk - 1] > -1) {
            if (ek == ik) return;
            if (kk.buffer[Dk - 2] >= ek) return void(kk.buffer[Dk - 2] = ik)
          }
        }
        if (fk && this.pos != ik) {
          let fk = this.buffer.length;
          if (fk > 0 && (0 != this.buffer[fk - 4] || this.buffer[fk - 1] < 0)) {
            let kk = !1;
            for (let ek = fk; ek > 0 && this.buffer[ek - 2] > ik; ek -= 4)
              if (this.buffer[ek - 1] >= 0) {
                kk = !0;
                break
              } if (kk)
              for (; fk > 0 && this.buffer[fk - 2] > ik;) this.buffer[fk] = this.buffer[fk - 4], this.buffer[fk + 1] = this.buffer[fk - 3], this.buffer[fk + 2] = this.buffer[fk - 2], this.buffer[fk + 3] = this.buffer[fk - 1], fk -= 4, Dk > 4 && (Dk -= 4)
          }
          this.buffer[fk] = kk, this.buffer[fk + 1] = ek, this.buffer[fk + 2] = ik, this.buffer[fk + 3] = Dk
        } else this.buffer.push(kk, ek, ik, Dk)
      }
      shift(kk, ek, ik, Dk) {
        if (131072 & kk) this.pushState(65535 & kk, this.pos);
        else if (0 == (262144 & kk)) {
          let fk = kk,
            {
              parser: Sk
            } = this.p;
          this.pos = Dk;
          let bk = Sk.stateFlag(fk, 1);
          !bk && (Dk > ik || ek <= Sk.maxNode) && (this.reducePos = Dk), this.pushState(fk, bk ? ik : Math.min(ik, this.reducePos)), this.shiftContext(ek, ik), ek <= Sk.maxNode && this.buffer.push(ek, ik, Dk, 4)
        } else this.pos = Dk, this.shiftContext(ek, ik), ek <= this.p.parser.maxNode && this.buffer.push(ek, ik, Dk, 4)
      }
      apply(kk, ek, ik, Dk) {
        65536 & kk ? this.reduce(kk) : this.shift(kk, ek, ik, Dk)
      }
      useNode(kk, ek) {
        let ik = this.p.reused.length - 1;
        (ik < 0 || this.p.reused[ik] != kk) && (this.p.reused.push(kk), ik++);
        let Dk = this.pos;
        this.reducePos = this.pos = Dk + kk.length, this.pushState(ek, Dk), this.buffer.push(ik, Dk, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, kk, this, this.p.stream.reset(this.pos - kk.length)))
      }
      split() {
        let kk = this,
          ek = kk.buffer.length;
        for (; ek > 0 && kk.buffer[ek - 2] > kk.reducePos;) ek -= 4;
        let ik = kk.buffer.slice(ek),
          Dk = kk.bufferBase + ek;
        for (; kk && Dk == kk.bufferBase;) kk = kk.parent;
        return new fk(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, ik, Dk, this.curContext, this.lookAhead, kk)
      }
      recoverByDelete(kk, ek) {
        let ik = kk <= this.p.parser.maxNode;
        ik && this.storeNode(kk, this.pos, ek, 4), this.storeNode(0, this.pos, ek, ik ? 8 : 4), this.pos = this.reducePos = ek, this.score -= 190
      }
      canShift(kk) {
        for (let ek = new bk(this);;) {
          let ik = this.p.parser.stateSlot(ek.state, 4) || this.p.parser.hasAction(ek.state, kk);
          if (0 == ik) return !1;
          if (0 == (65536 & ik)) return !0;
          ek.reduce(ik)
        }
      }
      recoverByInsert(kk) {
        if (this.stack.length >= 300) return [];
        let ek = this.p.parser.nextStates(this.state);
        if (ek.length > 8 || this.stack.length >= 120) {
          let ik = [];
          for (let Dk, fk = 0; fk < ek.length; fk += 2)(Dk = ek[fk + 1]) != this.state && this.p.parser.hasAction(Dk, kk) && ik.push(ek[fk], Dk);
          if (this.stack.length < 120)
            for (let kk = 0; ik.length < 8 && kk < ek.length; kk += 2) {
              let Dk = ek[kk + 1];
              ik.some(((kk, ek) => 1 & ek && kk == Dk)) || ik.push(ek[kk], Dk)
            }
          ek = ik
        }
        let ik = [];
        for (let Dk = 0; Dk < ek.length && ik.length < 4; Dk += 2) {
          let kk = ek[Dk + 1];
          if (kk == this.state) continue;
          let fk = this.split();
          fk.pushState(kk, this.pos), fk.storeNode(0, fk.pos, fk.pos, 4, !0), fk.shiftContext(ek[Dk], this.pos), fk.reducePos = this.pos, fk.score -= 200, ik.push(fk)
        }
        return ik
      }
      forceReduce() {
        let {
          parser: kk
        } = this.p, ek = kk.stateSlot(this.state, 5);
        if (0 == (65536 & ek)) return !1;
        if (!kk.validAction(this.state, ek)) {
          let ik = ek >> 19,
            Dk = 65535 & ek,
            fk = this.stack.length - 3 * ik;
          if (fk < 0 || kk.getGoto(this.stack[fk], Dk, !1) < 0) {
            let kk = this.findForcedReduction();
            if (null == kk) return !1;
            ek = kk
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(ek), !0
      }
      findForcedReduction() {
        let {
          parser: kk
        } = this.p, ek = [], ik = (Dk, fk) => {
          if (!ek.includes(Dk)) return ek.push(Dk), kk.allActions(Dk, (ek => {
            if (393216 & ek);
            else if (65536 & ek) {
              let ik = (ek >> 19) - fk;
              if (ik > 1) {
                let Dk = 65535 & ek,
                  fk = this.stack.length - 3 * ik;
                if (fk >= 0 && kk.getGoto(this.stack[fk], Dk, !1) >= 0) return ik << 19 | 65536 | Dk
              }
            } else {
              let kk = ik(ek, fk + 1);
              if (null != kk) return kk
            }
          }))
        };
        return ik(this.state, 0)
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
        for (let ek = 0; ek < this.stack.length; ek += 3)
          if (this.stack[ek] != kk.stack[ek]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(kk) {
        return this.p.parser.dialect.flags[kk]
      }
      shiftContext(kk, ek) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, kk, this, this.p.stream.reset(ek)))
      }
      reduceContext(kk, ek) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, kk, this, this.p.stream.reset(ek)))
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
          let ek = new Sk(this.curContext.tracker, kk);
          ek.hash != this.curContext.hash && this.emitContext(), this.curContext = ek
        }
      }
      setLookAhead(kk) {
        return !(kk <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = kk, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class Sk {
      constructor(kk, ek) {
        this.tracker = kk, this.context = ek, this.hash = kk.strict ? kk.hash(ek) : 0
      }
    }
    class bk {
      constructor(kk) {
        this.start = kk, this.state = kk.state, this.stack = kk.stack, this.base = this.stack.length
      }
      reduce(kk) {
        let ek = 65535 & kk,
          ik = kk >> 19;
        0 == ik ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (ik - 1);
        let Dk = this.start.p.parser.getGoto(this.stack[this.base - 3], ek, !0);
        this.state = Dk
      }
    }
    class rk {
      constructor(kk, ek, ik) {
        this.stack = kk, this.pos = ek, this.index = ik, this.buffer = kk.buffer, 0 == this.index && this.maybeNext()
      }
      static create(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.bufferBase + kk.buffer.length;
        return new rk(kk, ek, ek - kk.bufferBase)
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
        return new rk(this.stack, this.pos, this.index)
      }
    }

    function Pk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof kk) return kk;
      let ik = null;
      for (let Dk = 0, fk = 0; Dk < kk.length;) {
        let Sk = 0;
        for (;;) {
          let ek = kk.charCodeAt(Dk++),
            ik = !1;
          if (126 == ek) {
            Sk = 65535;
            break
          }
          ek >= 92 && ek--, ek >= 34 && ek--;
          let fk = ek - 32;
          if (fk >= 46 && (fk -= 46, ik = !0), Sk += fk, ik) break;
          Sk *= 46
        }
        ik ? ik[fk++] = Sk : ik = new ek(Sk)
      }
      return ik
    }
    class mk {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const Mk = new mk;
    class Kk {
      constructor(kk, ek) {
        this.input = kk, this.lw = ek, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Mk, this.rangeIndex = 0, this.pos = this.chunkPos = ek[0].from, this.range = ek[0], this.end = ek[ek.length - 1].to, this.readNext()
      }
      resolveOffset(kk, ek) {
        let ik = this.range,
          Dk = this.rangeIndex,
          fk = this.pos + kk;
        for (; fk < ik.from;) {
          if (!Dk) return null;
          let kk = this.lw[--Dk];
          fk -= ik.from - kk.to, ik = kk
        }
        for (; ek < 0 ? fk > ik.to : fk >= ik.to;) {
          if (Dk == this.lw.length - 1) return null;
          let kk = this.lw[++Dk];
          fk += kk.from - ik.to, ik = kk
        }
        return fk
      }
      clipPos(kk) {
        if (kk >= this.range.from && kk < this.range.to) return kk;
        for (let ek of this.lw)
          if (ek.to > kk) return Math.max(kk, ek.from);
        return this.end
      }
      peek(kk) {
        let ek, ik, Dk = this.chunkOff + kk;
        if (Dk >= 0 && Dk < this.chunk.length) ek = this.pos + kk, ik = this.chunk.charCodeAt(Dk);
        else {
          let Dk = this.resolveOffset(kk, 1);
          if (null == Dk) return -1;
          if (ek = Dk, ek >= this.chunk2Pos && ek < this.chunk2Pos + this.chunk2.length) ik = this.chunk2.charCodeAt(ek - this.chunk2Pos);
          else {
            let kk = this.rangeIndex,
              Dk = this.range;
            for (; Dk.to <= ek;) Dk = this.lw[++kk];
            this.chunk2 = this.input.chunk(this.chunk2Pos = ek), ek + this.chunk2.length > Dk.to && (this.chunk2 = this.chunk2.slice(0, Dk.to - ek)), ik = this.chunk2.charCodeAt(0)
          }
        }
        return ek >= this.token.lookAhead && (this.token.lookAhead = ek + 1), ik
      }
      acceptToken(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = ek ? this.resolveOffset(ek, -1) : this.pos;
        if (null == ik || ik < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = kk, this.token.end = ik
      }
      acceptTokenTo(kk, ek) {
        this.token.value = kk, this.token.end = ek
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: kk,
            chunkPos: ek
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = kk, this.chunk2Pos = ek, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let kk = this.input.chunk(this.pos),
            ek = this.pos + kk.length;
          this.chunk = ek > this.range.to ? kk.slice(0, this.range.to - this.pos) : kk, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += kk; this.pos + kk >= this.range.to;) {
          if (this.rangeIndex == this.lw.length - 1) return this.setDone();
          kk -= this.range.to - this.pos, this.range = this.lw[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += kk, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.lw[this.rangeIndex = this.lw.length - 1], this.chunk = "", this.next = -1
      }
      reset(kk, ek) {
        if (ek ? (this.token = ek, ek.start = kk, ek.lookAhead = kk + 1, ek.value = ek.extended = -1) : this.token = Mk, this.pos != kk) {
          if (this.pos = kk, kk == this.end) return this.setDone(), this;
          for (; kk < this.range.from;) this.range = this.lw[--this.rangeIndex];
          for (; kk >= this.range.to;) this.range = this.lw[++this.rangeIndex];
          kk >= this.chunkPos && kk < this.chunkPos + this.chunk.length ? this.chunkOff = kk - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(kk, ek) {
        if (kk >= this.chunkPos && ek <= this.chunkPos + this.chunk.length) return this.chunk.slice(kk - this.chunkPos, ek - this.chunkPos);
        if (kk >= this.chunk2Pos && ek <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(kk - this.chunk2Pos, ek - this.chunk2Pos);
        if (kk >= this.range.from && ek <= this.range.to) return this.input.read(kk, ek);
        let ik = "";
        for (let Dk of this.lw) {
          if (Dk.from >= ek) break;
          Dk.to > kk && (ik += this.input.read(Math.max(Dk.from, kk), Math.min(Dk.to, ek)))
        }
        return ik
      }
    }
    class xk {
      constructor(kk, ek) {
        this.data = kk, this.id = ek
      }
      token(kk, ek) {
        let {
          parser: ik
        } = ek.p;
        Hk(this.data, kk, ek, this.id, ik.data, ik.tokenPrecTable)
      }
    }
    xk.prototype.contextual = xk.prototype.fallback = xk.prototype.extend = !1;
    class nk {
      constructor(kk, ek, ik) {
        this.precTable = ek, this.elseToken = ik, this.data = "string" == typeof kk ? Pk(kk) : kk
      }
      token(kk, ek) {
        let ik = kk.pos,
          Dk = 0;
        for (;;) {
          let ik = kk.next < 0,
            fk = kk.resolveOffset(1, 1);
          if (Hk(this.data, kk, ek, 0, this.data, this.precTable), kk.token.value > -1) break;
          if (null == this.elseToken) return;
          if (ik || Dk++, null == fk) break;
          kk.reset(fk, kk.token)
        }
        Dk && (kk.reset(ik, kk.token), kk.acceptToken(this.elseToken, Dk))
      }
    }
    nk.prototype.contextual = xk.prototype.fallback = xk.prototype.extend = !1;
    class Uk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = kk, this.contextual = !!ek.contextual, this.fallback = !!ek.fallback, this.extend = !!ek.extend
      }
    }

    function Hk(kk, ek, ik, Dk, fk, Sk) {
      let bk = 0,
        rk = 1 << Dk,
        {
          dialect: Pk
        } = ik.p.parser;
      kk: for (; 0 != (rk & kk[bk]);) {
        let ik = kk[bk + 1];
        for (let Kk = bk + 3; Kk < ik; Kk += 2)
          if ((kk[Kk + 1] & rk) > 0) {
            let ik = kk[Kk];
            if (Pk.allows(ik) && (-1 == ek.token.value || ek.token.value == ik || lk(ik, ek.token.value, fk, Sk))) {
              ek.acceptToken(ik);
              break
            }
          } let Dk = ek.next,
          mk = 0,
          Mk = kk[bk + 2];
        if (!(ek.next < 0 && Mk > mk && 65535 == kk[ik + 3 * Mk - 3])) {
          for (; mk < Mk;) {
            let fk = mk + Mk >> 1,
              Sk = ik + fk + (fk << 1),
              rk = kk[Sk],
              Pk = kk[Sk + 1] || 65536;
            if (Dk < rk) Mk = fk;
            else {
              if (!(Dk >= Pk)) {
                bk = kk[Sk + 2], ek.advance();
                continue kk
              }
              mk = fk + 1
            }
          }
          break
        }
        bk = kk[ik + 3 * Mk - 1]
      }
    }

    function wk(kk, ek, ik) {
      for (let Dk, fk = ek; 65535 != (Dk = kk[fk]); fk++)
        if (Dk == ik) return fk - ek;
      return -1
    }

    function lk(kk, ek, ik, Dk) {
      let fk = wk(ik, Dk, ek);
      return fk < 0 || wk(ik, Dk, kk) < fk
    }
    const pk = "undefined" != typeof process && {
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
    let yk = null;

    function Yk(kk, ek, ik) {
      let fk = kk.cursor(Dk.f.IncludeAnonymous);
      for (fk.moveTo(ek);;)
        if (!(ik < 0 ? fk.childBefore(ek) : fk.childAfter(ek)))
          for (;;) {
            if ((ik < 0 ? fk.to < ek : fk.from > ek) && !fk.type.isError) return ik < 0 ? Math.max(0, Math.min(fk.to - 1, ek - 25)) : Math.min(kk.length, Math.max(fk.from + 1, ek + 25));
            if (ik < 0 ? fk.prevSibling() : fk.nextSibling()) break;
            if (!fk.parent()) return ik < 0 ? 0 : kk.length
          }
    }
    class Lk {
      constructor(kk, ek) {
        this.fragments = kk, this.nodeSet = ek, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let kk = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (kk) {
          for (this.safeFrom = kk.openStart ? Yk(kk.tree, kk.from + kk.offset, 1) - kk.offset : kk.from, this.safeTo = kk.openEnd ? Yk(kk.tree, kk.to + kk.offset, -1) - kk.offset : kk.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(kk.tree), this.start.push(-kk.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(kk) {
        if (kk < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= kk;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let ek = this.trees.length - 1;
          if (ek < 0) return this.nextFragment(), null;
          let ik = this.trees[ek],
            fk = this.index[ek];
          if (fk == ik.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let Sk = ik.children[fk],
            bk = this.start[ek] + ik.positions[fk];
          if (bk > kk) return this.nextStart = bk, null;
          if (Sk instanceof Dk.y) {
            if (bk == kk) {
              if (bk < this.safeFrom) return null;
              let kk = bk + Sk.length;
              if (kk <= this.safeTo) {
                let ek = Sk.prop(Dk.g.lookAhead);
                if (!ek || kk + ek < this.fragment.to) return Sk
              }
            }
            this.index[ek]++, bk + Sk.length >= Math.max(this.safeFrom, kk) && (this.trees.push(Sk), this.start.push(bk), this.index.push(0))
          } else this.index[ek]++, this.nextStart = bk + Sk.length
        }
      }
    }
    class Ck {
      constructor(kk, ek) {
        this.stream = ek, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = kk.tokenizers.map((kk => new mk))
      }
      getActions(kk) {
        let ek = 0,
          ik = null,
          {
            parser: Dk
          } = kk.p,
          {
            tokenizers: fk
          } = Dk,
          Sk = Dk.stateSlot(kk.state, 3),
          bk = kk.curContext ? kk.curContext.hash : 0,
          rk = 0;
        for (let Pk = 0; Pk < fk.length; Pk++) {
          if (0 == (1 << Pk & Sk)) continue;
          let Dk = fk[Pk],
            mk = this.tokens[Pk];
          if ((!ik || Dk.fallback) && ((Dk.contextual || mk.start != kk.pos || mk.mask != Sk || mk.context != bk) && (this.updateCachedToken(mk, Dk, kk), mk.mask = Sk, mk.context = bk), mk.lookAhead > mk.end + 25 && (rk = Math.max(mk.lookAhead, rk)), 0 != mk.value)) {
            let fk = ek;
            if (mk.extended > -1 && (ek = this.addActions(kk, mk.extended, mk.end, ek)), ek = this.addActions(kk, mk.value, mk.end, ek), !Dk.extend && (ik = mk, ek > fk)) break
          }
        }
        for (; this.actions.length > ek;) this.actions.pop();
        return rk && kk.setLookAhead(rk), ik || kk.pos != this.stream.end || (ik = new mk, ik.value = kk.p.parser.eofTerm, ik.start = ik.end = kk.pos, ek = this.addActions(kk, ik.value, ik.end, ek)), this.mainToken = ik, this.actions
      }
      getMainToken(kk) {
        if (this.mainToken) return this.mainToken;
        let ek = new mk,
          {
            pos: ik,
            p: Dk
          } = kk;
        return ek.start = ik, ek.end = Math.min(ik + 1, Dk.stream.end), ek.value = ik == Dk.stream.end ? Dk.parser.eofTerm : 0, ek
      }
      updateCachedToken(kk, ek, ik) {
        let Dk = this.stream.clipPos(ik.pos);
        if (ek.token(this.stream.reset(Dk, kk), ik), kk.value > -1) {
          let {
            parser: ek
          } = ik.p;
          for (let Dk = 0; Dk < ek.specialized.length; Dk++)
            if (ek.specialized[Dk] == kk.value) {
              let fk = ek.specializers[Dk](this.stream.read(kk.start, kk.end), ik);
              if (fk >= 0 && ik.p.parser.dialect.allows(fk >> 1)) {
                0 == (1 & fk) ? kk.value = fk >> 1 : kk.extended = fk >> 1;
                break
              }
            }
        } else kk.value = 0, kk.end = this.stream.clipPos(Dk + 1)
      }
      putAction(kk, ek, ik, Dk) {
        for (let fk = 0; fk < Dk; fk += 3)
          if (this.actions[fk] == kk) return Dk;
        return this.actions[Dk++] = kk, this.actions[Dk++] = ek, this.actions[Dk++] = ik, Dk
      }
      addActions(kk, ek, ik, Dk) {
        let {
          state: fk
        } = kk, {
          parser: Sk
        } = kk.p, {
          data: bk
        } = Sk;
        for (let rk = 0; rk < 2; rk++)
          for (let kk = Sk.stateSlot(fk, rk ? 2 : 1);; kk += 3) {
            if (65535 == bk[kk]) {
              if (1 != bk[kk + 1]) {
                0 == Dk && 2 == bk[kk + 1] && (Dk = this.putAction(Fk(bk, kk + 2), ek, ik, Dk));
                break
              }
              kk = Fk(bk, kk + 2)
            }
            bk[kk] == ek && (Dk = this.putAction(Fk(bk, kk + 1), ek, ik, Dk))
          }
        return Dk
      }
    }
    class Ak {
      constructor(kk, ek, ik, Dk) {
        this.parser = kk, this.input = ek, this.lw = Dk, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Kk(ek, Dk), this.tokens = new Ck(kk, this.stream), this.topTerm = kk.top[1];
        let {
          from: Sk
        } = Dk[0];
        this.stacks = [fk.start(this, kk.top[0], Sk)], this.fragments = ik.length && this.stream.end - Sk > 4 * kk.bufferLength ? new Lk(ik, kk.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let kk, ek, ik = this.stacks,
          Dk = this.minStackPos,
          fk = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == ik.length) {
          let [kk] = ik;
          for (; kk.forceReduce() && kk.stack.length && kk.stack[kk.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let Sk = 0; Sk < ik.length; Sk++) {
          let bk = ik[Sk];
          for (;;) {
            if (this.tokens.mainToken = null, bk.pos > Dk) fk.push(bk);
            else {
              if (this.advanceStack(bk, fk, ik)) continue;
              {
                kk || (kk = [], ek = []), kk.push(bk);
                let ik = this.tokens.getMainToken(bk);
                ek.push(ik.value, ik.end)
              }
            }
            break
          }
        }
        if (!fk.length) {
          let ek = kk && function(kk) {
            let ek = null;
            for (let ik of kk) {
              let kk = ik.p.stoppedAt;
              (ik.pos == ik.p.stream.end || null != kk && ik.pos > kk) && ik.p.parser.stateFlag(ik.state, 2) && (!ek || ek.score < ik.score) && (ek = ik)
            }
            return ek
          }(kk);
          if (ek) return pk && console.log("Finish with " + this.stackID(ek)), this.stackToTree(ek);
          if (this.parser.strict) throw pk && kk && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Dk);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && kk) {
          let ik = null != this.stoppedAt && kk[0].pos > this.stoppedAt ? kk[0] : this.runRecovery(kk, ek, fk);
          if (ik) return pk && console.log("Force-finish " + this.stackID(ik)), this.stackToTree(ik.forceAll())
        }
        if (this.recovering) {
          let kk = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (fk.length > kk)
            for (fk.sort(((kk, ek) => ek.score - kk.score)); fk.length > kk;) fk.pop();
          fk.some((kk => kk.reducePos > Dk)) && this.recovering--
        } else if (fk.length > 1) {
          kk: for (let kk = 0; kk < fk.length - 1; kk++) {
            let ek = fk[kk];
            for (let ik = kk + 1; ik < fk.length; ik++) {
              let Dk = fk[ik];
              if (ek.sameState(Dk) || ek.buffer.length > 500 && Dk.buffer.length > 500) {
                if (!((ek.score - Dk.score || ek.buffer.length - Dk.buffer.length) > 0)) {
                  fk.splice(kk--, 1);
                  continue kk
                }
                fk.splice(ik--, 1)
              }
            }
          }
          fk.length > 12 && (fk.sort(((kk, ek) => ek.score - kk.score)), fk.splice(12, fk.length - 12))
        }
        this.minStackPos = fk[0].pos;
        for (let Sk = 1; Sk < fk.length; Sk++) fk[Sk].pos < this.minStackPos && (this.minStackPos = fk[Sk].pos);
        return null
      }
      stopAt(kk) {
        if (null != this.stoppedAt && this.stoppedAt < kk) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = kk
      }
      advanceStack(kk, ek, ik) {
        let fk = kk.pos,
          {
            parser: Sk
          } = this,
          bk = pk ? this.stackID(kk) + " -> " : "";
        if (null != this.stoppedAt && fk > this.stoppedAt) return kk.forceReduce() ? kk : null;
        if (this.fragments) {
          let ek = kk.curContext && kk.curContext.tracker.strict,
            ik = ek ? kk.curContext.hash : 0;
          for (let rk = this.fragments.nodeAt(fk); rk;) {
            let fk = this.parser.nodeSet.types[rk.type.id] == rk.type ? Sk.getGoto(kk.state, rk.type.id) : -1;
            if (fk > -1 && rk.length && (!ek || (rk.prop(Dk.g.contextHash) || 0) == ik)) return kk.useNode(rk, fk), pk && console.log(bk + this.stackID(kk) + ` (via reuse of ${Sk.getName(rk.type.id)})`), !0;
            if (!(rk instanceof Dk.y) || 0 == rk.children.length || rk.positions[0] > 0) break;
            let Pk = rk.children[0];
            if (!(Pk instanceof Dk.y && 0 == rk.positions[0])) break;
            rk = Pk
          }
        }
        let rk = Sk.stateSlot(kk.state, 4);
        if (rk > 0) return kk.reduce(rk), pk && console.log(bk + this.stackID(kk) + ` (via always-reduce ${Sk.getName(65535&rk)})`), !0;
        if (kk.stack.length >= 8400)
          for (; kk.stack.length > 6e3 && kk.forceReduce(););
        let Pk = this.tokens.getActions(kk);
        for (let Dk = 0; Dk < Pk.length;) {
          let rk = Pk[Dk++],
            mk = Pk[Dk++],
            Mk = Pk[Dk++],
            Kk = Dk == Pk.length || !ik,
            xk = Kk ? kk : kk.split(),
            nk = this.tokens.mainToken;
          if (xk.apply(rk, mk, nk ? nk.start : xk.pos, Mk), pk && console.log(bk + this.stackID(xk) + ` (via ${0==(65536&rk)?"shift":`reduce of ${Sk.getName(65535&rk)}`} for ${Sk.getName(mk)} @ ${fk}${xk==kk?"":", split"})`), Kk) return !0;
          xk.pos > fk ? ek.push(xk) : ik.push(xk)
        }
        return !1
      }
      advanceFully(kk, ek) {
        let ik = kk.pos;
        for (;;) {
          if (!this.advanceStack(kk, null, null)) return !1;
          if (kk.pos > ik) return jk(kk, ek), !0
        }
      }
      runRecovery(kk, ek, ik) {
        let Dk = null,
          fk = !1;
        for (let Sk = 0; Sk < kk.length; Sk++) {
          let bk = kk[Sk],
            rk = ek[Sk << 1],
            Pk = ek[1 + (Sk << 1)],
            mk = pk ? this.stackID(bk) + " -> " : "";
          if (bk.deadEnd) {
            if (fk) continue;
            if (fk = !0, bk.restart(), pk && console.log(mk + this.stackID(bk) + " (restarted)"), this.advanceFully(bk, ik)) continue
          }
          let Mk = bk.split(),
            Kk = mk;
          for (let kk = 0; kk < 10 && Mk.forceReduce(); kk++) {
            if (pk && console.log(Kk + this.stackID(Mk) + " (via force-reduce)"), this.advanceFully(Mk, ik)) break;
            pk && (Kk = this.stackID(Mk) + " -> ")
          }
          for (let kk of bk.recoverByInsert(rk)) pk && console.log(mk + this.stackID(kk) + " (via recover-insert)"), this.advanceFully(kk, ik);
          this.stream.end > bk.pos ? (Pk == bk.pos && (Pk++, rk = 0), bk.recoverByDelete(rk, Pk), pk && console.log(mk + this.stackID(bk) + ` (via recover-delete ${this.parser.getName(rk)})`), jk(bk, ik)) : (!Dk || Dk.score < Mk.score) && (Dk = Mk)
        }
        return Dk
      }
      stackToTree(kk) {
        return kk.close(), Dk.y.build({
          buffer: rk.create(kk),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.lw[0].from,
          length: kk.pos - this.lw[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(kk) {
        let ek = (yk || (yk = new WeakMap)).get(kk);
        return ek || yk.set(kk, ek = String.fromCodePoint(this.nextStackID++)), ek + kk
      }
    }

    function jk(kk, ek) {
      for (let ik = 0; ik < ek.length; ik++) {
        let Dk = ek[ik];
        if (Dk.pos == kk.pos && Dk.sameState(kk)) return void(ek[ik].score < kk.score && (ek[ik] = kk))
      }
      ek.push(kk)
    }
    class sk {
      constructor(kk, ek, ik) {
        this.source = kk, this.flags = ek, this.disabled = ik
      }
      allows(kk) {
        return !this.disabled || 0 == this.disabled[kk]
      }
    }
    const dk = kk => kk;
    class Vk extends Dk.q {
      constructor(kk) {
        if (super(), this.wrappers = [], 14 != kk.version) throw new RangeError(`Parser version (${kk.version}) doesn't match runtime version (14)`);
        let ek = kk.nodeNames.split(" ");
        this.minRepeatTerm = ek.length;
        for (let Dk = 0; Dk < kk.repeatNodeCount; Dk++) ek.push("");
        let ik = Object.keys(kk.topRules).map((ek => kk.topRules[ek][1])),
          fk = [];
        for (let Dk = 0; Dk < ek.length; Dk++) fk.push([]);

        function Sk(kk, ek, ik) {
          fk[kk].push([ek, ek.deserialize(String(ik))])
        }
        if (kk.nodeProps)
          for (let rk of kk.nodeProps) {
            let kk = rk[0];
            "string" == typeof kk && (kk = Dk.g[kk]);
            for (let ek = 1; ek < rk.length;) {
              let ik = rk[ek++];
              if (ik >= 0) Sk(ik, kk, rk[ek++]);
              else {
                let Dk = rk[ek + -ik];
                for (let fk = -ik; fk > 0; fk--) Sk(rk[ek++], kk, Dk);
                ek++
              }
            }
          }
        this.nodeSet = new Dk.h(ek.map(((ek, Sk) => Dk.l.define({
          name: Sk >= this.minRepeatTerm ? void 0 : ek,
          id: Sk,
          props: fk[Sk],
          top: ik.indexOf(Sk) > -1,
          error: 0 == Sk,
          skipped: kk.skippedNodes && kk.skippedNodes.indexOf(Sk) > -1
        })))), kk.propSources && (this.nodeSet = this.nodeSet.extend(...kk.propSources)), this.strict = !1, this.bufferLength = Dk.d;
        let bk = Pk(kk.tokenData);
        this.context = kk.context, this.specializerSpecs = kk.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Dk = 0; Dk < this.specializerSpecs.length; Dk++) this.specialized[Dk] = this.specializerSpecs[Dk].term;
        this.specializers = this.specializerSpecs.map(uk), this.states = Pk(kk.states, Uint32Array), this.data = Pk(kk.stateData), this.goto = Pk(kk.goto), this.maxTerm = kk.maxTerm, this.tokenizers = kk.tokenizers.map((kk => "number" == typeof kk ? new xk(bk, kk) : kk)), this.topRules = kk.topRules, this.dialects = kk.dialects || {}, this.dynamicPrecedences = kk.dynamicPrecedences || null, this.tokenPrecTable = kk.tokenPrec, this.termNames = kk.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(kk, ek, ik) {
        let Dk = new Ak(this, kk, ek, ik);
        for (let fk of this.wrappers) Dk = fk(Dk, kk, ek, ik);
        return Dk
      }
      getGoto(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = this.goto;
        if (ek >= Dk[0]) return -1;
        for (let fk = Dk[ek + 1];;) {
          let ek = Dk[fk++],
            Sk = 1 & ek,
            bk = Dk[fk++];
          if (Sk && ik) return bk;
          for (let ik = fk + (ek >> 1); fk < ik; fk++)
            if (Dk[fk] == kk) return bk;
          if (Sk) return -1
        }
      }
      hasAction(kk, ek) {
        let ik = this.data;
        for (let Dk = 0; Dk < 2; Dk++)
          for (let fk, Sk = this.stateSlot(kk, Dk ? 2 : 1);; Sk += 3) {
            if (65535 == (fk = ik[Sk])) {
              if (1 != ik[Sk + 1]) {
                if (2 == ik[Sk + 1]) return Fk(ik, Sk + 2);
                break
              }
              fk = ik[Sk = Fk(ik, Sk + 2)]
            }
            if (fk == ek || 0 == fk) return Fk(ik, Sk + 1)
          }
        return 0
      }
      stateSlot(kk, ek) {
        return this.states[6 * kk + ek]
      }
      stateFlag(kk, ek) {
        return (this.stateSlot(kk, 0) & ek) > 0
      }
      validAction(kk, ek) {
        return !!this.allActions(kk, (kk => kk == ek || null))
      }
      allActions(kk, ek) {
        let ik = this.stateSlot(kk, 4),
          Dk = ik ? ek(ik) : void 0;
        for (let fk = this.stateSlot(kk, 1); null == Dk; fk += 3) {
          if (65535 == this.data[fk]) {
            if (1 != this.data[fk + 1]) break;
            fk = Fk(this.data, fk + 2)
          }
          Dk = ek(Fk(this.data, fk + 1))
        }
        return Dk
      }
      nextStates(kk) {
        let ek = [];
        for (let ik = this.stateSlot(kk, 1);; ik += 3) {
          if (65535 == this.data[ik]) {
            if (1 != this.data[ik + 1]) break;
            ik = Fk(this.data, ik + 2)
          }
          if (0 == (1 & this.data[ik + 2])) {
            let kk = this.data[ik + 1];
            ek.some(((ek, ik) => 1 & ik && ek == kk)) || ek.push(this.data[ik], kk)
          }
        }
        return ek
      }
      configure(kk) {
        let ek = Object.assign(Object.create(Vk.prototype), this);
        if (kk.props && (ek.nodeSet = this.nodeSet.extend(...kk.props)), kk.top) {
          let ik = this.topRules[kk.top];
          if (!ik) throw new RangeError(`Invalid top rule name ${kk.top}`);
          ek.top = ik
        }
        return kk.tokenizers && (ek.tokenizers = this.tokenizers.map((ek => {
          let ik = kk.tokenizers.find((kk => kk.from == ek));
          return ik ? ik.to : ek
        }))), kk.specializers && (ek.specializers = this.specializers.slice(), ek.specializerSpecs = this.specializerSpecs.map(((ik, Dk) => {
          let fk = kk.specializers.find((kk => kk.from == ik.external));
          if (!fk) return ik;
          let Sk = Object.assign(Object.assign({}, ik), {
            external: fk.to
          });
          return ek.specializers[Dk] = uk(Sk), Sk
        }))), kk.contextTracker && (ek.context = kk.contextTracker), kk.dialect && (ek.dialect = this.parseDialect(kk.dialect)), null != kk.strict && (ek.strict = kk.strict), kk.wrap && (ek.wrappers = ek.wrappers.concat(kk.wrap)), null != kk.bufferLength && (ek.bufferLength = kk.bufferLength), ek
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
        let ek = this.dynamicPrecedences;
        return null == ek ? 0 : ek[kk] || 0
      }
      parseDialect(kk) {
        let ek = Object.keys(this.dialects),
          ik = ek.map((() => !1));
        if (kk)
          for (let fk of kk.split(" ")) {
            let kk = ek.indexOf(fk);
            kk >= 0 && (ik[kk] = !0)
          }
        let Dk = null;
        for (let fk = 0; fk < ek.length; fk++)
          if (!ik[fk])
            for (let kk, ik = this.dialects[ek[fk]]; 65535 != (kk = this.data[ik++]);)(Dk || (Dk = new Uint8Array(this.maxTerm + 1)))[kk] = 1;
        return new sk(kk, ik, Dk)
      }
      static deserialize(kk) {
        return new Vk(kk)
      }
    }

    function Fk(kk, ek) {
      return kk[ek] | kk[ek + 1] << 16
    }

    function uk(kk) {
      if (kk.external) {
        let ek = kk.extend ? 1 : 0;
        return (ik, Dk) => kk.external(ik, Dk) << 1 | ek
      }
      return kk.get
    }
    var qk = ik(40915);
    const Ik = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      zk = new class {
        constructor(kk) {
          this.start = kk.start, this.shift = kk.shift || dk, this.reduce = kk.reduce || dk, this.reuse = kk.reuse || dk, this.hash = kk.hash || (() => 0), this.strict = !1 !== kk.strict
        }
      }({
        start: !1,
        shift: (kk, ek) => 5 == ek || 6 == ek || 320 == ek ? kk : 321 == ek,
        strict: !1
      }),
      Qk = new Uk(((kk, ek) => {
        let {
          next: ik
        } = kk;
        (125 == ik || -1 == ik || ek.context) && kk.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      vk = new Uk(((kk, ek) => {
        let ik, {
          next: Dk
        } = kk;
        Ik.indexOf(Dk) > -1 || (47 != Dk || 47 != (ik = kk.peek(1)) && 42 != ik) && (125 == Dk || 59 == Dk || -1 == Dk || ek.context || kk.acceptToken(316))
      }), {
        contextual: !0
      }),
      Ek = new Uk(((kk, ek) => {
        91 != kk.next || ek.context || kk.acceptToken(317)
      }), {
        contextual: !0
      }),
      hk = new Uk(((kk, ek) => {
        let {
          next: ik
        } = kk;
        if (43 == ik || 45 == ik) {
          if (kk.advance(), ik == kk.next) {
            kk.advance();
            let ik = !ek.context && ek.canShift(1);
            kk.acceptToken(ik ? 1 : 2)
          }
        } else 63 == ik && 46 == kk.peek(1) && (kk.advance(), kk.advance(), (kk.next < 48 || kk.next > 57) && kk.acceptToken(3))
      }), {
        contextual: !0
      });

    function ak(kk, ek) {
      return kk >= 65 && kk <= 90 || kk >= 97 && kk <= 122 || 95 == kk || kk >= 192 || !ek && kk >= 48 && kk <= 57
    }
    const Wk = new Uk(((kk, ek) => {
        if (60 != kk.next || !ek.dialectEnabled(0)) return;
        if (kk.advance(), 47 == kk.next) return;
        let ik = 0;
        for (; Ik.indexOf(kk.next) > -1;) kk.advance(), ik++;
        if (ak(kk.next, !0)) {
          for (kk.advance(), ik++; ak(kk.next, !1);) kk.advance(), ik++;
          for (; Ik.indexOf(kk.next) > -1;) kk.advance(), ik++;
          if (44 == kk.next) return;
          for (let ek = 0;; ek++) {
            if (7 == ek) {
              if (!ak(kk.next, !0)) return;
              break
            }
            if (kk.next != "extends".charCodeAt(ek)) break;
            kk.advance(), ik++
          }
        }
        kk.acceptToken(4, -ik)
      })),
      tk = (0, qk.i)({
        "get set async static": qk.o.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": qk.o.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": qk.o.operatorKeyword,
        "let var const using function class extends": qk.o.definitionKeyword,
        "import export from": qk.o.moduleKeyword,
        "with debugger new": qk.o.keyword,
        TemplateString: qk.o.special(qk.o.string),
        super: qk.o.atom,
        BooleanLiteral: qk.o.bool,
        this: qk.o.self,
        null: qk.o.null,
        Star: qk.o.modifier,
        VariableName: qk.o.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": qk.o.function(qk.o.variableName),
        VariableDefinition: qk.o.definition(qk.o.variableName),
        Label: qk.o.labelName,
        PropertyName: qk.o.propertyName,
        PrivatePropertyName: qk.o.special(qk.o.propertyName),
        "CallExpression/MemberExpression/PropertyName": qk.o.function(qk.o.propertyName),
        "FunctionDeclaration/VariableDefinition": qk.o.function(qk.o.definition(qk.o.variableName)),
        "ClassDeclaration/VariableDefinition": qk.o.definition(qk.o.className),
        "NewExpression/VariableName": qk.o.className,
        PropertyDefinition: qk.o.definition(qk.o.propertyName),
        PrivatePropertyDefinition: qk.o.definition(qk.o.special(qk.o.propertyName)),
        UpdateOp: qk.o.updateOperator,
        "LineComment Hashbang": qk.o.lineComment,
        BlockComment: qk.o.blockComment,
        Number: qk.o.number,
        String: qk.o.string,
        Escape: qk.o.escape,
        ArithOp: qk.o.arithmeticOperator,
        LogicOp: qk.o.logicOperator,
        BitOp: qk.o.bitwiseOperator,
        CompareOp: qk.o.compareOperator,
        RegExp: qk.o.regexp,
        Equals: qk.o.definitionOperator,
        Arrow: qk.o.function(qk.o.punctuation),
        ": Spread": qk.o.punctuation,
        "( )": qk.o.paren,
        "[ ]": qk.o.squareBracket,
        "{ }": qk.o.brace,
        "InterpolationStart InterpolationEnd": qk.o.special(qk.o.brace),
        ".": qk.o.derefOperator,
        ", ;": qk.o.separator,
        "@": qk.o.meta,
        TypeName: qk.o.typeName,
        TypeDefinition: qk.o.definition(qk.o.typeName),
        "type enum interface implements namespace module declare": qk.o.definitionKeyword,
        "abstract global Privacy readonly override": qk.o.modifier,
        "is keyof unique infer asserts": qk.o.operatorKeyword,
        JSXAttributeValue: qk.o.attributeValue,
        JSXText: qk.o.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": qk.o.angleBracket,
        "JSXIdentifier JSXNameSpacedName": qk.o.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": qk.o.attributeName,
        "JSXBuiltin/JSXIdentifier": qk.o.standard(qk.o.tagName)
      }),
      Xk = {
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
      ck = {
        __proto__: null,
        "<": 193
      },
      Tk = Vk.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: zk,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [tk],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [vk, Ek, hk, Wk, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Qk, new nk("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new nk("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: kk => Xk[kk] || -1
        }, {
          term: 343,
          get: kk => Bk[kk] || -1
        }, {
          term: 95,
          get: kk => ck[kk] || -1
        }],
        tokenPrec: 15201
      });
    var Zk = ik(40902),
      Ok = ik(40876),
      gk = ik(40883),
      Gk = ik(40871);
    const Nk = [(0, Gk.s)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, Gk.s)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, Gk.s)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, Gk.s)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, Gk.s)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, Gk.s)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, Gk.s)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, Gk.s)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, Gk.s)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, Gk.s)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, Gk.s)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      Rk = Nk.concat([(0, Gk.s)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, Gk.s)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, Gk.s)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      Jk = new Dk.o,
      ke = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function ee(kk) {
      return (ek, ik) => {
        let Dk = ek.node.getChild("VariableDefinition");
        return Dk && ik(Dk, kk), !0
      }
    }
    const ie = ["FunctionDeclaration"],
      De = {
        FunctionDeclaration: ee("function"),
        ClassDeclaration: ee("class"),
        ClassExpression: () => !0,
        EnumDeclaration: ee("constant"),
        TypeAliasDeclaration: ee("type"),
        NamespaceDeclaration: ee("namespace"),
        VariableDefinition(kk, ek) {
          kk.matchContext(ie) || ek(kk, "variable")
        },
        TypeDefinition(kk, ek) {
          ek(kk, "type")
        },
        __proto__: null
      };

    function fe(kk, ek) {
      let ik = Jk.get(ek);
      if (ik) return ik;
      let fk = [],
        Sk = !0;

      function bk(ek, ik) {
        let Dk = kk.sliceString(ek.from, ek.to);
        fk.push({
          label: Dk,
          type: ik
        })
      }
      return ek.cursor(Dk.f.IncludeAnonymous).iterate((ek => {
        if (Sk) Sk = !1;
        else if (ek.name) {
          let kk = De[ek.name];
          if (kk && kk(ek, bk) || ke.has(ek.name)) return !1
        } else if (ek.to - ek.from > 8192) {
          for (let ik of fe(kk, ek.node)) fk.push(ik);
          return !1
        }
      })), Jk.set(ek, fk), fk
    }
    const Se = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      be = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function re(kk) {
      let ek = (0, Zk.lb)(kk.state).resolveInner(kk.pos, -1);
      if (be.indexOf(ek.name) > -1) return null;
      let ik = "VariableName" == ek.name || ek.to - ek.from < 20 && Se.test(kk.state.sliceDoc(ek.from, ek.to));
      if (!ik && !kk.explicit) return null;
      let Dk = [];
      for (let fk = ek; fk; fk = fk.parent) ke.has(fk.name) && (Dk = Dk.concat(fe(kk.state.doc, fk)));
      return {
        options: Dk,
        from: ik ? ek.from : kk.pos,
        validFor: Se
      }
    }
    const Pe = Zk.k.define({
        name: "javascript",
        parser: Tk.configure({
          props: [Zk.W.add({
            IfStatement: (0, Zk.s)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, Zk.s)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: Zk.B,
            SwitchBody: kk => {
              let ek = kk.textAfter,
                ik = /^\s*\}/.test(ek),
                Dk = /^\s*(case|default)\b/.test(ek);
              return kk.baseIndent + (ik ? 0 : Dk ? 1 : 2) * kk.unit
            },
            Block: (0, Zk.z)({
              closing: "}"
            }),
            ArrowFunction: kk => kk.baseIndent + kk.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, Zk.s)({
              except: /^\s*{/
            }),
            JSXElement(kk) {
              let ek = /^\s*<\//.test(kk.textAfter);
              return kk.lineIndent(kk.node.from) + (ek ? 0 : kk.unit)
            },
            JSXEscape(kk) {
              let ek = /\s*\}/.test(kk.textAfter);
              return kk.lineIndent(kk.node.from) + (ek ? 0 : kk.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": kk => kk.column(kk.node.from) + kk.unit
          }), Zk.K.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": Zk.H,
            BlockComment: kk => ({
              from: kk.from + 2,
              to: kk.to - 2
            }),
            JSXElement(kk) {
              let ek = kk.firstChild;
              if (!ek || "JSXSelfClosingTag" == ek.name) return null;
              let ik = kk.lastChild;
              return {
                from: ek.to,
                to: ik.type.isError ? kk.to : ik.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(kk) {
              var ek;
              let ik = null === (ek = kk.firstChild) || void 0 === ek ? void 0 : ek.nextSibling,
                Dk = kk.lastChild;
              return !ik || ik.type.isError ? null : {
                from: ik.to,
                to: Dk.type.isError ? kk.to : Dk.from
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
      me = {
        test: kk => /^JSX/.test(kk.name),
        facet: (0, Zk.y)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      Me = Pe.configure({
        dialect: "ts"
      }, "typescript"),
      Ke = Pe.configure({
        dialect: "jsx",
        props: [Zk.db.add((kk => kk.isTop ? [me] : void 0))]
      }),
      xe = Pe.configure({
        dialect: "jsx ts",
        props: [Zk.db.add((kk => kk.isTop ? [me] : void 0))]
      }, "typescript");
    let ne = kk => ({
      label: kk,
      type: "keyword"
    });
    const Ue = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(ne),
      He = Ue.concat(["declare", "implements", "private", "protected", "public"].map(ne));

    function we() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        ek = kk.jsx ? kk.typescript ? xe : Ke : kk.typescript ? Me : Pe,
        ik = kk.typescript ? Rk.concat(He) : Nk.concat(Ue);
      return new Zk.o(ek, [Pe.data.of({
        autocomplete: (0, Gk.o)(be, (0, Gk.j)(ik))
      }), Pe.data.of({
        autocomplete: re
      }), kk.jsx ? ye : []])
    }

    function le(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk.length;
      for (let Dk = null === ek || void 0 === ek ? void 0 : ek.firstChild; Dk; Dk = Dk.nextSibling)
        if ("JSXIdentifier" == Dk.name || "JSXBuiltin" == Dk.name || "JSXNamespacedName" == Dk.name || "JSXMemberExpression" == Dk.name) return kk.sliceString(Dk.from, Math.min(Dk.to, ik));
      return ""
    }
    const pe = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      ye = gk.f.inputHandler.of(((kk, ek, ik, Dk, fk) => {
        if ((pe ? kk.composing : kk.compositionStarted) || kk.state.readOnly || ek != ik || ">" != Dk && "/" != Dk || !Pe.isActiveAt(kk.state, ek, -1)) return !1;
        let Sk = fk(),
          {
            state: bk
          } = Sk,
          rk = bk.changeByRange((kk => {
            var ek;
            let ik, {
                head: fk
              } = kk,
              Sk = (0, Zk.lb)(bk).resolveInner(fk - 1, -1);
            if ("JSXStartTag" == Sk.name && (Sk = Sk.parent), bk.doc.sliceString(fk - 1, fk) != Dk || "JSXAttributeValue" == Sk.name && Sk.to > fk);
            else {
              if (">" == Dk && "JSXFragmentTag" == Sk.name) return {
                range: kk,
                changes: {
                  from: fk,
                  insert: "</>"
                }
              };
              if ("/" == Dk && "JSXStartCloseTag" == Sk.name) {
                let kk = Sk.parent,
                  Dk = kk.parent;
                if (Dk && kk.from == fk - 2 && ((ik = le(bk.doc, Dk.firstChild, fk)) || "JSXFragmentTag" == (null === (ek = Dk.firstChild) || void 0 === ek ? void 0 : ek.name))) {
                  let kk = `${ik}>`;
                  return {
                    range: Ok.h.cursor(fk + kk.length, -1),
                    changes: {
                      from: fk,
                      insert: kk
                    }
                  }
                }
              } else if (">" == Dk) {
                let ek = function(kk) {
                  for (;;) {
                    if ("JSXOpenTag" == kk.name || "JSXSelfClosingTag" == kk.name || "JSXFragmentTag" == kk.name) return kk;
                    if ("JSXEscape" == kk.name || !kk.parent) return null;
                    kk = kk.parent
                  }
                }(Sk);
                if (ek && "JSXOpenTag" == ek.name && !/^\/?>|^<\//.test(bk.doc.sliceString(fk, fk + 2)) && (ik = le(bk.doc, ek, fk))) return {
                  range: kk,
                  changes: {
                    from: fk,
                    insert: `</${ik}>`
                  }
                }
              }
            }
            return {
              range: kk
            }
          }));
        return !rk.changes.empty && (kk.dispatch([Sk, bk.update(rk, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40902: (kk, ek, ik) => {
    ik.d(ek, {
      B: () => ck,
      F: () => ye,
      H: () => Nk,
      I: () => Me,
      K: () => Gk,
      N: () => lk,
      Q: () => qk,
      T: () => zk,
      W: () => vk,
      Z: () => Ok,
      _: () => Ik,
      ab: () => uk,
      cb: () => ce,
      db: () => Kk,
      e: () => Le,
      g: () => Qk,
      gb: () => se,
      k: () => Uk,
      kb: () => wk,
      lb: () => Hk,
      o: () => Vk,
      q: () => We,
      s: () => Tk,
      u: () => Fe,
      y: () => Mk,
      z: () => Xk
    });
    var Dk, fk = ik(40906),
      Sk = ik(40876),
      bk = ik(40883),
      rk = ik(40915),
      Pk = ik(40886);
    const mk = new fk.g;

    function Mk(kk) {
      return Sk.n.define({
        combine: kk ? ek => ek.concat(kk) : void 0
      })
    }
    const Kk = new fk.g;
    class xk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = kk, this.name = Dk, Sk.j.prototype.hasOwnProperty("tree") || Object.defineProperty(Sk.j.prototype, "tree", {
          get() {
            return Hk(this)
          }
        }), this.parser = ek, this.extension = [dk.of(this), Sk.j.languageData.of(((kk, ek, ik) => {
          let Dk = nk(kk, ek, ik),
            fk = Dk.type.prop(mk);
          if (!fk) return [];
          let Sk = kk.facet(fk),
            bk = Dk.type.prop(Kk);
          if (bk) {
            let fk = Dk.resolve(ek - Dk.from, ik);
            for (let ek of bk)
              if (ek.test(fk, kk)) {
                let ik = kk.facet(ek.facet);
                return "replace" == ek.type ? ik : ik.concat(Sk)
              }
          }
          return Sk
        }))].concat(ik)
      }
      isActiveAt(kk, ek) {
        return nk(kk, ek, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(mk) == this.data
      }
      findRegions(kk) {
        let ek = kk.facet(dk);
        if ((null === ek || void 0 === ek ? void 0 : ek.data) == this.data) return [{
          from: 0,
          to: kk.doc.length
        }];
        if (!ek || !ek.allowsNesting) return [];
        let ik = [],
          Dk = (kk, ek) => {
            if (kk.prop(mk) == this.data) return void ik.push({
              from: ek,
              to: ek + kk.length
            });
            let Sk = kk.prop(fk.g.mounted);
            if (Sk) {
              if (Sk.tree.prop(mk) == this.data) {
                if (Sk.overlay)
                  for (let kk of Sk.overlay) ik.push({
                    from: kk.from + ek,
                    to: kk.to + ek
                  });
                else ik.push({
                  from: ek,
                  to: ek + kk.length
                });
                return
              }
              if (Sk.overlay) {
                let kk = ik.length;
                if (Dk(Sk.tree, Sk.overlay[0].from + ek), ik.length > kk) return
              }
            }
            for (let ik = 0; ik < kk.children.length; ik++) {
              let Sk = kk.children[ik];
              Sk instanceof fk.y && Dk(Sk, kk.positions[ik] + ek)
            }
          };
        return Dk(Hk(kk), 0), ik
      }
      get allowsNesting() {
        return !0
      }
    }

    function nk(kk, ek, ik) {
      let Dk = kk.facet(dk),
        Sk = Hk(kk).topNode;
      if (!Dk || Dk.allowsNesting)
        for (let bk = Sk; bk; bk = bk.enter(ek, ik, fk.f.ExcludeBuffers | fk.f.EnterBracketed)) bk.type.isTop && (Sk = bk);
      return Sk
    }
    xk.setState = Sk.D.define();
    class Uk extends xk {
      constructor(kk, ek, ik) {
        super(kk, ek, [], ik), this.parser = ek
      }
      static define(kk) {
        let ek = Mk(kk.languageData);
        return new Uk(ek, kk.parser.configure({
          props: [mk.add((kk => kk.isTop ? ek : void 0))]
        }), kk.name)
      }
      configure(kk, ek) {
        return new Uk(this.data, this.parser.configure(kk), ek || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function Hk(kk) {
      let ek = kk.field(xk.state, !1);
      return ek ? ek.tree : fk.y.empty
    }

    function wk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.doc.length;
      var ik;
      return (null === (ik = kk.field(xk.state, !1)) || void 0 === ik ? void 0 : ik.context.isDone(ek)) || !1
    }

    function lk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.viewport.to,
        ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Dk = function(kk, ek) {
          let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Dk;
          let fk = null === (Dk = kk.field(xk.state, !1)) || void 0 === Dk ? void 0 : Dk.context;
          if (!fk) return null;
          let Sk = fk.viewport;
          fk.updateViewport({
            from: 0,
            to: ek
          });
          let bk = fk.isDone(ek) || fk.work(ik, ek) ? fk.tree : null;
          return fk.updateViewport(Sk), bk
        }(kk.state, ek, ik);
      return Dk != Hk(kk.state) && kk.dispatch({}), !!Dk
    }
    class pk {
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
      read(kk, ek) {
        let ik = this.cursorPos - this.string.length;
        return kk < ik || ek >= this.cursorPos ? this.doc.sliceString(kk, ek) : this.string.slice(kk - ik, ek - ik)
      }
    }
    let yk = null;
    class Yk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Dk = arguments.length > 3 ? arguments[3] : void 0,
          fk = arguments.length > 4 ? arguments[4] : void 0,
          Sk = arguments.length > 5 ? arguments[5] : void 0,
          bk = arguments.length > 6 ? arguments[6] : void 0,
          rk = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = kk, this.state = ek, this.fragments = ik, this.tree = Dk, this.treeLen = fk, this.viewport = Sk, this.skipped = bk, this.scheduleOn = rk, this.parse = null, this.tempSkipped = []
      }
      static create(kk, ek, ik) {
        return new Yk(kk, ek, [], fk.y.empty, 0, ik, [], null)
      }
      startParse() {
        return this.parser.startParse(new pk(this.state.doc), this.fragments)
      }
      work(kk, ek) {
        return null != ek && ek >= this.state.doc.length && (ek = void 0), this.tree != fk.y.empty && this.isDone(null !== ek && void 0 !== ek ? ek : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var ik;
          if ("number" == typeof kk) {
            let ek = Date.now() + kk;
            kk = () => Date.now() > ek
          }
          for (this.parse || (this.parse = this.startParse()), null != ek && (null == this.parse.stoppedAt || this.parse.stoppedAt > ek) && ek < this.state.doc.length && this.parse.stopAt(ek);;) {
            let Dk = this.parse.advance();
            if (Dk) {
              if (this.fragments = this.withoutTempSkipped(fk.u.addTree(Dk, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (ik = this.parse.stoppedAt) && void 0 !== ik ? ik : this.state.doc.length, this.tree = Dk, this.parse = null, !(this.treeLen < (null !== ek && void 0 !== ek ? ek : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (kk()) return !1
          }
        }))
      }
      takeTree() {
        let kk, ek;
        this.parse && (kk = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > kk) && this.parse.stopAt(kk), this.withContext((() => {
          for (; !(ek = this.parse.advance()););
        })), this.treeLen = kk, this.tree = ek, this.fragments = this.withoutTempSkipped(fk.u.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(kk) {
        let ek = yk;
        yk = this;
        try {
          return kk()
        } finally {
          yk = ek
        }
      }
      withoutTempSkipped(kk) {
        for (let ek; ek = this.tempSkipped.pop();) kk = Lk(kk, ek.from, ek.to);
        return kk
      }
      changes(kk, ek) {
        let {
          fragments: ik,
          tree: Dk,
          treeLen: Sk,
          viewport: bk,
          skipped: rk
        } = this;
        if (this.takeTree(), !kk.empty) {
          let ek = [];
          if (kk.iterChangedRanges(((kk, ik, Dk, fk) => ek.push({
              fromA: kk,
              toA: ik,
              fromB: Dk,
              toB: fk
            }))), ik = fk.u.applyChanges(ik, ek), Dk = fk.y.empty, Sk = 0, bk = {
              from: kk.mapPos(bk.from, -1),
              to: kk.mapPos(bk.to, 1)
            }, this.skipped.length) {
            rk = [];
            for (let ek of this.skipped) {
              let ik = kk.mapPos(ek.from, 1),
                Dk = kk.mapPos(ek.to, -1);
              ik < Dk && rk.push({
                from: ik,
                to: Dk
              })
            }
          }
        }
        return new Yk(this.parser, ek, ik, Dk, Sk, bk, rk, this.scheduleOn)
      }
      updateViewport(kk) {
        if (this.viewport.from == kk.from && this.viewport.to == kk.to) return !1;
        this.viewport = kk;
        let ek = this.skipped.length;
        for (let ik = 0; ik < this.skipped.length; ik++) {
          let {
            from: ek,
            to: Dk
          } = this.skipped[ik];
          ek < kk.to && Dk > kk.from && (this.fragments = Lk(this.fragments, ek, Dk), this.skipped.splice(ik--, 1))
        }
        return !(this.skipped.length >= ek) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(kk, ek) {
        this.skipped.push({
          from: kk,
          to: ek
        })
      }
      static getSkippingParser(kk) {
        return new class extends fk.q {
          createParse(ek, ik, Dk) {
            let Sk = Dk[0].from,
              bk = Dk[Dk.length - 1].to;
            return {
              parsedPos: Sk,
              advance() {
                let ek = yk;
                if (ek) {
                  for (let kk of Dk) ek.tempSkipped.push(kk);
                  kk && (ek.scheduleOn = ek.scheduleOn ? Promise.all([ek.scheduleOn, kk]) : kk)
                }
                return this.parsedPos = bk, new fk.y(fk.l.none, [], [], bk - Sk)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(kk) {
        kk = Math.min(kk, this.state.doc.length);
        let ek = this.fragments;
        return this.treeLen >= kk && ek.length && 0 == ek[0].from && ek[0].to >= kk
      }
      static get() {
        return yk
      }
    }

    function Lk(kk, ek, ik) {
      return fk.u.applyChanges(kk, [{
        fromA: ek,
        toA: ik,
        fromB: ek,
        toB: ik
      }])
    }
    class Ck {
      constructor(kk) {
        this.context = kk, this.tree = kk.tree
      }
      apply(kk) {
        if (!kk.docChanged && this.tree == this.context.tree) return this;
        let ek = this.context.changes(kk.changes, kk.state),
          ik = this.context.treeLen == kk.startState.doc.length ? void 0 : Math.max(kk.changes.mapPos(this.context.treeLen), ek.viewport.to);
        return ek.work(20, ik) || ek.takeTree(), new Ck(ek)
      }
      static init(kk) {
        let ek = Math.min(3e3, kk.doc.length),
          ik = Yk.create(kk.facet(dk).parser, kk, {
            from: 0,
            to: ek
          });
        return ik.work(20, ek) || ik.takeTree(), new Ck(ik)
      }
    }
    xk.state = Sk.E.define({
      create: Ck.init,
      update(kk, ek) {
        for (let ik of ek.effects)
          if (ik.is(xk.setState)) return ik.value;
        return ek.startState.facet(dk) != ek.state.facet(dk) ? Ck.init(ek.state) : kk.apply(ek)
      }
    });
    let Ak = kk => {
      let ek = setTimeout((() => kk()), 500);
      return () => clearTimeout(ek)
    };
    "undefined" != typeof requestIdleCallback && (Ak = kk => {
      let ek = -1,
        ik = setTimeout((() => {
          ek = requestIdleCallback(kk, {
            timeout: 400
          })
        }), 100);
      return () => ek < 0 ? clearTimeout(ik) : cancelIdleCallback(ek)
    });
    const jk = "undefined" != typeof navigator && (null === (Dk = navigator.scheduling) || void 0 === Dk ? void 0 : Dk.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      sk = bk.i.fromClass(class {
        constructor(kk) {
          this.view = kk, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(kk) {
          let ek = this.view.state.field(xk.state).context;
          (ek.updateViewport(kk.view.viewport) || this.view.viewport.to > ek.treeLen) && this.scheduleWork(), (kk.docChanged || kk.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(ek)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: kk
          } = this.view, ek = kk.field(xk.state);
          ek.tree == ek.context.tree && ek.context.isDone(kk.doc.length) || (this.working = Ak(this.work))
        }
        work(kk) {
          this.working = null;
          let ek = Date.now();
          if (this.chunkEnd < ek && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = ek + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: ik,
            viewport: {
              to: Dk
            }
          } = this.view, fk = ik.field(xk.state);
          if (fk.tree == fk.context.tree && fk.context.isDone(Dk + 1e5)) return;
          let Sk = Date.now() + Math.min(this.chunkBudget, 100, kk && !jk ? Math.max(25, kk.timeRemaining() - 5) : 1e9),
            bk = fk.context.treeLen < Dk && ik.doc.length > Dk + 1e3,
            rk = fk.context.work((() => jk && jk() || Date.now() > Sk), Dk + (bk ? 0 : 1e5));
          this.chunkBudget -= Date.now() - ek, (rk || this.chunkBudget <= 0) && (fk.context.takeTree(), this.view.dispatch({
            effects: xk.setState.of(new Ck(fk.context))
          })), this.chunkBudget > 0 && (!rk || bk) && this.scheduleWork(), this.checkAsyncSchedule(fk.context)
        }
        checkAsyncSchedule(kk) {
          kk.scheduleOn && (this.workScheduled++, kk.scheduleOn.then((() => this.scheduleWork())).catch((kk => (0, bk.N)(this.view.state, kk))).then((() => this.workScheduled--)), kk.scheduleOn = null)
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
      dk = Sk.n.define({
        combine: kk => kk.length ? kk[0] : null,
        enables: kk => [xk.state, sk, bk.f.contentAttributes.compute([kk], (ek => {
          let ik = ek.facet(kk);
          return ik && ik.name ? {
            "data-language": ik.name
          } : {}
        }))]
      });
    class Vk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = kk, this.support = ek, this.extension = [kk, ek]
      }
    }
    const Fk = Sk.n.define(),
      uk = Sk.n.define({
        combine: kk => {
          if (!kk.length) return "  ";
          let ek = kk[0];
          if (!ek || /\S/.test(ek) || Array.from(ek).some((kk => kk != ek[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(kk[0]));
          return ek
        }
      });

    function qk(kk) {
      let ek = kk.facet(uk);
      return 9 == ek.charCodeAt(0) ? kk.tabSize * ek.length : ek.length
    }

    function Ik(kk, ek) {
      let ik = "",
        Dk = kk.tabSize,
        fk = kk.facet(uk)[0];
      if ("\t" == fk) {
        for (; ek >= Dk;) ik += "\t", ek -= Dk;
        fk = " "
      }
      for (let Sk = 0; Sk < ek; Sk++) ik += fk;
      return ik
    }

    function zk(kk, ek) {
      kk instanceof Sk.j && (kk = new Qk(kk));
      for (let Dk of kk.state.facet(Fk)) {
        let ik = Dk(kk, ek);
        if (void 0 !== ik) return ik
      }
      let ik = Hk(kk.state);
      return ik.length >= ek ? function(kk, ek, ik) {
        let Dk = ek.resolveStack(ik),
          fk = ek.resolveInner(ik, -1).resolve(ik, 0).enterUnfinishedNodesBefore(ik);
        if (fk != Dk.node) {
          let kk = [];
          for (let ek = fk; ek && !(ek.from < Dk.node.from || ek.to > Dk.node.to || ek.from == Dk.node.from && ek.type == Dk.node.type); ek = ek.parent) kk.push(ek);
          for (let ek = kk.length - 1; ek >= 0; ek--) Dk = {
            node: kk[ek],
            next: Dk
          }
        }
        return Ek(Dk, kk, ik)
      }(kk, ik, ek) : null
    }
    class Qk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = kk, this.options = ek, this.unit = qk(kk)
      }
      lineAt(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ik = this.state.doc.lineAt(kk),
          {
            simulateBreak: Dk,
            simulateDoubleBreak: fk
          } = this.options;
        return null != Dk && Dk >= ik.from && Dk <= ik.to ? fk && Dk == kk ? {
          text: "",
          from: kk
        } : (ek < 0 ? Dk < kk : Dk <= kk) ? {
          text: ik.text.slice(Dk - ik.from),
          from: Dk
        } : {
          text: ik.text.slice(0, Dk - ik.from),
          from: ik.from
        } : ik
      }
      textAfterPos(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && kk == this.options.simulateBreak) return "";
        let {
          text: ik,
          from: Dk
        } = this.lineAt(kk, ek);
        return ik.slice(kk - Dk, Math.min(ik.length, kk + 100 - Dk))
      }
      column(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: ik,
            from: Dk
          } = this.lineAt(kk, ek),
          fk = this.countColumn(ik, kk - Dk),
          Sk = this.options.overrideIndentation ? this.options.overrideIndentation(Dk) : -1;
        return Sk > -1 && (fk += Sk - this.countColumn(ik, ik.search(/\S|$/))), fk
      }
      countColumn(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.length;
        return (0, Sk.S)(kk, this.state.tabSize, ek)
      }
      lineIndent(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: ik,
            from: Dk
          } = this.lineAt(kk, ek),
          fk = this.options.overrideIndentation;
        if (fk) {
          let kk = fk(Dk);
          if (kk > -1) return kk
        }
        return this.countColumn(ik, ik.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const vk = new fk.g;

    function Ek(kk, ek, ik) {
      for (let Dk = kk; Dk; Dk = Dk.next) {
        let kk = hk(Dk.node);
        if (kk) return kk(Wk.create(ek, ik, Dk))
      }
      return 0
    }

    function hk(kk) {
      let ek = kk.type.prop(vk);
      if (ek) return ek;
      let ik, Dk = kk.firstChild;
      if (Dk && (ik = Dk.type.prop(fk.g.closedBy))) {
        let ek = kk.lastChild,
          Dk = ek && ik.indexOf(ek.name) > -1;
        return kk => Bk(kk, !0, 1, void 0, Dk && ! function(kk) {
          return kk.pos == kk.options.simulateBreak && kk.options.simulateDoubleBreak
        }(kk) ? ek.from : void 0)
      }
      return null == kk.parent ? ak : null
    }

    function ak() {
      return 0
    }
    class Wk extends Qk {
      constructor(kk, ek, ik) {
        super(kk.state, kk.options), this.base = kk, this.pos = ek, this.context = ik
      }
      get node() {
        return this.context.node
      }
      static create(kk, ek, ik) {
        return new Wk(kk, ek, ik)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(kk) {
        let ek = this.state.doc.lineAt(kk.from);
        for (;;) {
          let ik = kk.resolve(ek.from);
          for (; ik.parent && ik.parent.from == ik.from;) ik = ik.parent;
          if (tk(ik, kk)) break;
          ek = this.state.doc.lineAt(ik.from)
        }
        return this.lineIndent(ek.from)
      }
      continue () {
        return Ek(this.context.next, this.base, this.pos)
      }
    }

    function tk(kk, ek) {
      for (let ik = ek; ik; ik = ik.parent)
        if (kk == ik) return !0;
      return !1
    }

    function Xk(kk) {
      let {
        closing: ek,
        align: ik = !0,
        units: Dk = 1
      } = kk;
      return kk => Bk(kk, ik, Dk, ek)
    }

    function Bk(kk, ek, ik, Dk, fk) {
      let Sk = kk.textAfter,
        bk = Sk.match(/^\s*/)[0].length,
        rk = Dk && Sk.slice(bk, bk + Dk.length) == Dk || fk == kk.pos + bk,
        Pk = ek ? function(kk) {
          let ek = kk.node,
            ik = ek.childAfter(ek.from),
            Dk = ek.lastChild;
          if (!ik) return null;
          let fk = kk.options.simulateBreak,
            Sk = kk.state.doc.lineAt(ik.from),
            bk = null == fk || fk <= Sk.from ? Sk.to : Math.min(Sk.to, fk);
          for (let rk = ik.to;;) {
            let kk = ek.childAfter(rk);
            if (!kk || kk == Dk) return null;
            if (!kk.type.isSkipped) {
              if (kk.from >= bk) return null;
              let ek = /^ */.exec(Sk.text.slice(ik.to - Sk.from))[0].length;
              return {
                from: ik.from,
                to: ik.to + ek
              }
            }
            rk = kk.to
          }
        }(kk) : null;
      return Pk ? rk ? kk.column(Pk.from) : kk.column(Pk.to) : kk.baseIndent + (rk ? 0 : kk.unit * ik)
    }
    const ck = kk => kk.baseIndent;

    function Tk() {
      let {
        except: kk,
        units: ek = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return ik => {
        let Dk = kk && kk.test(ik.textAfter);
        return ik.baseIndent + (Dk ? 0 : ek * ik.unit)
      }
    }
    const Zk = 200;

    function Ok() {
      return Sk.j.transactionFilter.of((kk => {
        if (!kk.docChanged || !kk.isUserEvent("input.type") && !kk.isUserEvent("input.complete")) return kk;
        let ek = kk.startState.languageDataAt("indentOnInput", kk.startState.selection.main.head);
        if (!ek.length) return kk;
        let ik = kk.newDoc,
          {
            head: Dk
          } = kk.newSelection.main,
          fk = ik.lineAt(Dk);
        if (Dk > fk.from + Zk) return kk;
        let Sk = ik.sliceString(fk.from, Dk);
        if (!ek.some((kk => kk.test(Sk)))) return kk;
        let {
          state: bk
        } = kk, rk = -1, Pk = [];
        for (let {
            head: mk
          }
          of bk.selection.lw) {
          let kk = bk.doc.lineAt(mk);
          if (kk.from == rk) continue;
          rk = kk.from;
          let ek = zk(bk, kk.from);
          if (null == ek) continue;
          let ik = /^\s*/.exec(kk.text)[0],
            Dk = Ik(bk, ek);
          ik != Dk && Pk.push({
            from: kk.from,
            to: kk.from + ik.length,
            insert: Dk
          })
        }
        return Pk.length ? [kk, {
          changes: Pk,
          sequential: !0
        }] : kk
      }))
    }
    const gk = Sk.n.define(),
      Gk = new fk.g;

    function Nk(kk) {
      let ek = kk.firstChild,
        ik = kk.lastChild;
      return ek && ek.to < ik.from ? {
        from: ek.to,
        to: ik.type.isError ? kk.to : ik.from
      } : null
    }

    function Rk(kk) {
      let ek = kk.lastChild;
      return ek && ek.to == kk.to && ek.type.isError
    }

    function Jk(kk, ek, ik) {
      for (let Dk of kk.facet(gk)) {
        let fk = Dk(kk, ek, ik);
        if (fk) return fk
      }
      return function(kk, ek, ik) {
        let Dk = Hk(kk);
        if (Dk.length < ik) return null;
        let fk = null;
        for (let Sk = Dk.resolveStack(ik, 1); Sk; Sk = Sk.next) {
          let bk = Sk.node;
          if (bk.to <= ik || bk.from > ik) continue;
          if (fk && bk.from < ek) break;
          let rk = bk.type.prop(Gk);
          if (rk && (bk.to < Dk.length - 50 || Dk.length == kk.doc.length || !Rk(bk))) {
            let Dk = rk(bk, kk);
            Dk && Dk.from <= ik && Dk.from >= ek && Dk.to > ik && (fk = Dk)
          }
        }
        return fk
      }(kk, ek, ik)
    }

    function ke(kk, ek) {
      let ik = ek.mapPos(kk.from, 1),
        Dk = ek.mapPos(kk.to, -1);
      return ik >= Dk ? void 0 : {
        from: ik,
        to: Dk
      }
    }
    const ee = Sk.D.define({
        map: ke
      }),
      ie = Sk.D.define({
        map: ke
      });

    function De(kk) {
      let ek = [];
      for (let {
          head: ik
        }
        of kk.state.selection.lw) ek.some((kk => kk.from <= ik && kk.to >= ik)) || ek.push(kk.lineBlockAt(ik));
      return ek
    }
    const fe = Sk.E.define({
      create: () => bk.b.none,
      update(kk, ek) {
        ek.isUserEvent("delete") && ek.changes.iterChangedRanges(((ek, ik) => kk = Se(kk, ek, ik))), kk = kk.map(ek.changes);
        for (let ik of ek.effects)
          if (ik.is(ee) && !re(kk, ik.value.from, ik.value.to)) {
            let {
              preparePlaceholder: Dk
            } = ek.state.facet(xe), fk = Dk ? bk.b.replace({
              widget: new we(Dk(ek.state, ik.value))
            }) : He;
            kk = kk.update({
              add: [fk.range(ik.value.from, ik.value.to)]
            })
          } else ik.is(ie) && (kk = kk.update({
            filter: (kk, ek) => ik.value.from != kk || ik.value.to != ek,
            filterFrom: ik.value.from,
            filterTo: ik.value.to
          }));
        return ek.selection && (kk = Se(kk, ek.selection.main.head)), kk
      },
      provide: kk => bk.f.oD.from(kk),
      toJSON(kk, ek) {
        let ik = [];
        return kk.between(0, ek.doc.length, ((kk, ek) => {
          ik.push(kk, ek)
        })), ik
      },
      fromJSON(kk) {
        if (!Array.isArray(kk) || kk.length % 2) throw new RangeError("Invalid JSON for fold state");
        let ek = [];
        for (let ik = 0; ik < kk.length;) {
          let Dk = kk[ik++],
            fk = kk[ik++];
          if ("number" != typeof Dk || "number" != typeof fk) throw new RangeError("Invalid JSON for fold state");
          ek.push(He.range(Dk, fk))
        }
        return bk.b.set(ek, !0)
      }
    });

    function Se(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ek,
        Dk = !1;
      return kk.between(ek, ik, ((kk, fk) => {
        kk < ik && fk > ek && (Dk = !0)
      })), Dk ? kk.update({
        filterFrom: ek,
        filterTo: ik,
        filter: (kk, Dk) => kk >= ik || Dk <= ek
      }) : kk
    }

    function be(kk, ek, ik) {
      var Dk;
      let fk = null;
      return null === (Dk = kk.field(fe, !1)) || void 0 === Dk || Dk.between(ek, ik, ((kk, ek) => {
        (!fk || fk.from > kk) && (fk = {
          from: kk,
          to: ek
        })
      })), fk
    }

    function re(kk, ek, ik) {
      let Dk = !1;
      return kk.between(ek, ek, ((kk, fk) => {
        kk == ek && fk == ik && (Dk = !0)
      })), Dk
    }

    function Pe(kk, ek) {
      return kk.field(fe, !1) ? ek : ek.concat(Sk.D.appendConfig.of(ne()))
    }

    function me(kk, ek) {
      let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Dk = kk.state.doc.lineAt(ek.from).number,
        fk = kk.state.doc.lineAt(ek.to).number;
      return bk.f.announce.of(`${kk.state.phrase(ik?"Folded lines":"Unfolded lines")} ${Dk} ${kk.state.phrase("to")} ${fk}.`)
    }
    const Me = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: kk => {
          for (let ek of De(kk)) {
            let ik = Jk(kk.state, ek.from, ek.to);
            if (ik) return kk.dispatch({
              effects: Pe(kk.state, [ee.of(ik), me(kk, ik)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: kk => {
          if (!kk.state.field(fe, !1)) return !1;
          let ek = [];
          for (let ik of De(kk)) {
            let Dk = be(kk.state, ik.from, ik.to);
            Dk && ek.push(ie.of(Dk), me(kk, Dk, !1))
          }
          return ek.length && kk.dispatch({
            effects: ek
          }), ek.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: kk => {
          let {
            state: ek
          } = kk, ik = [];
          for (let Dk = 0; Dk < ek.doc.length;) {
            let fk = kk.lineBlockAt(Dk),
              Sk = Jk(ek, fk.from, fk.to);
            Sk && ik.push(ee.of(Sk)), Dk = (Sk ? kk.lineBlockAt(Sk.to) : fk).to + 1
          }
          return ik.length && kk.dispatch({
            effects: Pe(kk.state, ik)
          }), !!ik.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: kk => {
          let ek = kk.state.field(fe, !1);
          if (!ek || !ek.size) return !1;
          let ik = [];
          return ek.between(0, kk.state.doc.length, ((kk, ek) => {
            ik.push(ie.of({
              from: kk,
              to: ek
            }))
          })), kk.dispatch({
            effects: ik
          }), !0
        }
      }],
      Ke = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      xe = Sk.n.define({
        combine: kk => (0, Sk.Q)(kk, Ke)
      });

    function ne(kk) {
      let ek = [fe, Ye];
      return kk && ek.push(xe.of(kk)), ek
    }

    function Ue(kk, ek) {
      let {
        state: ik
      } = kk, Dk = ik.facet(xe), fk = ek => {
        let ik = kk.lineBlockAt(kk.posAtDOM(ek.target)),
          Dk = be(kk.state, ik.from, ik.to);
        Dk && kk.dispatch({
          effects: ie.of(Dk)
        }), ek.preventDefault()
      };
      if (Dk.placeholderDOM) return Dk.placeholderDOM(kk, fk, ek);
      let Sk = document.createElement("span");
      return Sk.textContent = Dk.placeholderText, Sk.setAttribute("aria-label", ik.phrase("folded code")), Sk.title = ik.phrase("unfold"), Sk.className = "cm-foldPlaceholder", Sk.onclick = fk, Sk
    }
    const He = bk.b.replace({
      widget: new class extends bk.j {
        toDOM(kk) {
          return Ue(kk, null)
        }
      }
    });
    class we extends bk.j {
      constructor(kk) {
        super(), this.value = kk
      }
      eq(kk) {
        return this.value == kk.value
      }
      toDOM(kk) {
        return Ue(kk, this.value)
      }
    }
    const le = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class pe extends bk.g {
      constructor(kk, ek) {
        super(), this.config = kk, this.open = ek
      }
      eq(kk) {
        return this.config == kk.config && this.open == kk.open
      }
      toDOM(kk) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let ek = document.createElement("span");
        return ek.textContent = this.open ? this.config.openText : this.config.closedText, ek.title = kk.state.phrase(this.open ? "Fold line" : "Unfold line"), ek
      }
    }

    function ye() {
      let kk = {
          ...le,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        ek = new pe(kk, !0),
        ik = new pe(kk, !1),
        Dk = bk.i.fromClass(class {
          constructor(kk) {
            this.from = kk.viewport.from, this.markers = this.buildMarkers(kk)
          }
          update(ek) {
            (ek.docChanged || ek.viewportChanged || ek.startState.facet(dk) != ek.state.facet(dk) || ek.startState.field(fe, !1) != ek.state.field(fe, !1) || Hk(ek.startState) != Hk(ek.state) || kk.foldingChanged(ek)) && (this.markers = this.buildMarkers(ek.view))
          }
          buildMarkers(kk) {
            let Dk = new Sk.s;
            for (let fk of kk.viewportLineBlocks) {
              let Sk = be(kk.state, fk.from, fk.to) ? ik : Jk(kk.state, fk.from, fk.to) ? ek : null;
              Sk && Dk.add(fk.from, fk.from, Sk)
            }
            return Dk.finish()
          }
        }),
        {
          domEventHandlers: fk
        } = kk;
      return [Dk, (0, bk.x)({
        class: "cm-foldGutter",
        markers(kk) {
          var ek;
          return (null === (ek = kk.plugin(Dk)) || void 0 === ek ? void 0 : ek.markers) || Sk.w.empty
        },
        initialSpacer: () => new pe(kk, !1),
        domEventHandlers: {
          ...fk,
          click: (kk, ek, ik) => {
            if (fk.click && fk.click(kk, ek, ik)) return !0;
            let Dk = be(kk.state, ek.from, ek.to);
            if (Dk) return kk.dispatch({
              effects: ie.of(Dk)
            }), !0;
            let Sk = Jk(kk.state, ek.from, ek.to);
            return !!Sk && (kk.dispatch({
              effects: ee.of(Sk)
            }), !0)
          }
        }
      }), ne()]
    }
    const Ye = bk.f.baseTheme({
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
    class Le {
      constructor(kk, ek) {
        let ik;

        function Dk(kk) {
          let ek = Pk.d.newName();
          return (ik || (ik = Object.create(null)))["." + ek] = kk, ek
        }
        this.specs = kk;
        const fk = "string" == typeof ek.all ? ek.all : ek.all ? Dk(ek.all) : void 0,
          Sk = ek.scope;
        this.scope = Sk instanceof xk ? kk => kk.prop(mk) == Sk.data : Sk ? kk => kk == Sk : void 0, this.style = (0, rk.l)(kk.map((kk => ({
          tag: kk.tag,
          class: kk.class || Dk(Object.assign({}, kk, {
            tag: null
          }))
        }))), {
          all: fk
        }).style, this.module = ik ? new Pk.d(ik) : null, this.themeType = ek.themeType
      }
      static define(kk, ek) {
        return new Le(kk, ek || {})
      }
    }
    const Ce = Sk.n.define(),
      Ae = Sk.n.define({
        combine: kk => kk.length ? [kk[0]] : null
      });

    function je(kk) {
      let ek = kk.facet(Ce);
      return ek.length ? ek : kk.facet(Ae)
    }

    function se(kk, ek) {
      let ik, Dk = [Ve];
      return kk instanceof Le && (kk.module && Dk.push(bk.f.styleModule.of(kk.module)), ik = kk.themeType), (null === ek || void 0 === ek ? void 0 : ek.fallback) ? Dk.push(Ae.of(kk)) : ik ? Dk.push(Ce.computeN([bk.f.darkTheme], (ek => ek.facet(bk.f.darkTheme) == ("dark" == ik) ? [kk] : []))) : Dk.push(Ce.of(kk)), Dk
    }
    class de {
      constructor(kk) {
        this.markCache = Object.create(null), this.tree = Hk(kk.state), this.oD = this.buildDeco(kk, je(kk.state)), this.decoratedTo = kk.viewport.to
      }
      update(kk) {
        let ek = Hk(kk.state),
          ik = je(kk.state),
          Dk = ik != je(kk.startState),
          {
            viewport: fk
          } = kk.view,
          Sk = kk.changes.mapPos(this.decoratedTo, 1);
        ek.length < fk.to && !Dk && ek.type == this.tree.type && Sk >= fk.to ? (this.oD = this.oD.map(kk.changes), this.decoratedTo = Sk) : (ek != this.tree || kk.viewportChanged || Dk) && (this.tree = ek, this.oD = this.buildDeco(kk.view, ik), this.decoratedTo = fk.to)
      }
      buildDeco(kk, ek) {
        if (!ek || !this.tree.length) return bk.b.none;
        let ik = new Sk.s;
        for (let {
            from: Dk,
            to: fk
          }
          of kk.W8)(0, rk.e)(this.tree, ek, ((kk, ek, Dk) => {
          ik.add(kk, ek, this.markCache[Dk] || (this.markCache[Dk] = bk.b.mark({
            class: Dk
          })))
        }), Dk, fk);
        return ik.finish()
      }
    }
    const Ve = Sk.q.high(bk.i.fromClass(de, {
        oD: kk => kk.oD
      })),
      Fe = Le.define([{
        tag: rk.o.meta,
        color: "#404740"
      }, {
        tag: rk.o.link,
        textDecoration: "underline"
      }, {
        tag: rk.o.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: rk.o.emphasis,
        fontStyle: "italic"
      }, {
        tag: rk.o.strong,
        fontWeight: "bold"
      }, {
        tag: rk.o.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: rk.o.keyword,
        color: "#708"
      }, {
        tag: [rk.o.atom, rk.o.bool, rk.o.url, rk.o.contentSeparator, rk.o.labelName],
        color: "#219"
      }, {
        tag: [rk.o.literal, rk.o.inserted],
        color: "#164"
      }, {
        tag: [rk.o.string, rk.o.deleted],
        color: "#a11"
      }, {
        tag: [rk.o.regexp, rk.o.escape, rk.o.special(rk.o.string)],
        color: "#e40"
      }, {
        tag: rk.o.definition(rk.o.variableName),
        color: "#00f"
      }, {
        tag: rk.o.local(rk.o.variableName),
        color: "#30a"
      }, {
        tag: [rk.o.typeName, rk.o.namespace],
        color: "#085"
      }, {
        tag: rk.o.className,
        color: "#167"
      }, {
        tag: [rk.o.special(rk.o.variableName), rk.o.macroName],
        color: "#256"
      }, {
        tag: rk.o.definition(rk.o.propertyName),
        color: "#00c"
      }, {
        tag: rk.o.comment,
        color: "#940"
      }, {
        tag: rk.o.invalid,
        color: "#f00"
      }]),
      ue = bk.f.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      qe = 1e4,
      Ie = "()[]{}",
      ze = Sk.n.define({
        combine: kk => (0, Sk.Q)(kk, {
          afterCursor: !0,
          brackets: Ie,
          maxScanDistance: qe,
          renderMatch: Ee
        })
      }),
      Qe = bk.b.mark({
        class: "cm-matchingBracket"
      }),
      ve = bk.b.mark({
        class: "cm-nonmatchingBracket"
      });

    function Ee(kk) {
      let ek = [],
        ik = kk.matched ? Qe : ve;
      return ek.push(ik.range(kk.start.from, kk.start.to)), kk.end && ek.push(ik.range(kk.end.from, kk.end.to)), ek
    }

    function he(kk) {
      let ek = [],
        ik = kk.facet(ze);
      for (let Dk of kk.selection.lw) {
        if (!Dk.empty) continue;
        let fk = ce(kk, Dk.head, -1, ik) || Dk.head > 0 && ce(kk, Dk.head - 1, 1, ik) || ik.afterCursor && (ce(kk, Dk.head, 1, ik) || Dk.head < kk.doc.length && ce(kk, Dk.head + 1, -1, ik));
        fk && (ek = ek.concat(ik.renderMatch(fk, kk)))
      }
      return bk.b.set(ek, !0)
    }
    const ae = [bk.i.fromClass(class {
      constructor(kk) {
        this.paused = !1, this.oD = he(kk.state)
      }
      update(kk) {
        (kk.docChanged || kk.selectionSet || this.paused) && (kk.view.composing ? (this.oD = this.oD.map(kk.changes), this.paused = !0) : (this.oD = he(kk.state), this.paused = !1))
      }
    }, {
      oD: kk => kk.oD
    }), ue];

    function We() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ze.of(kk), ae]
    }
    const te = new fk.g;

    function Xe(kk, ek, ik) {
      let Dk = kk.prop(ek < 0 ? fk.g.openedBy : fk.g.closedBy);
      if (Dk) return Dk;
      if (1 == kk.name.length) {
        let Dk = ik.indexOf(kk.name);
        if (Dk > -1 && Dk % 2 == (ek < 0 ? 1 : 0)) return [ik[Dk + ek]]
      }
      return null
    }

    function Be(kk) {
      let ek = kk.type.prop(te);
      return ek ? ek(kk.node) : kk
    }

    function ce(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        fk = Dk.maxScanDistance || qe,
        Sk = Dk.brackets || Ie,
        bk = Hk(kk),
        rk = bk.resolveInner(ek, ik);
      for (let Pk = rk; Pk; Pk = Pk.parent) {
        let Dk = Xe(Pk.type, ik, Sk);
        if (Dk && Pk.from < Pk.to) {
          let fk = Be(Pk);
          if (fk && (ik > 0 ? ek >= fk.from && ek < fk.to : ek > fk.from && ek <= fk.to)) return Te(kk, ek, ik, Pk, fk, Dk, Sk)
        }
      }
      return function(kk, ek, ik, Dk, fk, Sk, bk) {
        if (ik < 0 ? !ek : ek == kk.doc.length) return null;
        let rk = ik < 0 ? kk.sliceDoc(ek - 1, ek) : kk.sliceDoc(ek, ek + 1),
          Pk = bk.indexOf(rk);
        if (Pk < 0 || Pk % 2 == 0 != ik > 0) return null;
        let mk = {
            from: ik < 0 ? ek - 1 : ek,
            to: ik > 0 ? ek + 1 : ek
          },
          Mk = kk.doc.iterRange(ek, ik > 0 ? kk.doc.length : 0),
          Kk = 0;
        for (let xk = 0; !Mk.next().done && xk <= Sk;) {
          let kk = Mk.value;
          ik < 0 && (xk += kk.length);
          let Sk = ek + xk * ik;
          for (let ek = ik > 0 ? 0 : kk.length - 1, rk = ik > 0 ? kk.length : -1; ek != rk; ek += ik) {
            let rk = bk.indexOf(kk[ek]);
            if (!(rk < 0 || Dk.resolveInner(Sk + ek, 1).type != fk))
              if (rk % 2 == 0 == ik > 0) Kk++;
              else {
                if (1 == Kk) return {
                  start: mk,
                  end: {
                    from: Sk + ek,
                    to: Sk + ek + 1
                  },
                  matched: rk >> 1 == Pk >> 1
                };
                Kk--
              }
          }
          ik > 0 && (xk += kk.length)
        }
        return Mk.done ? {
          start: mk,
          matched: !1
        } : null
      }(kk, ek, ik, bk, rk.type, fk, Sk)
    }

    function Te(kk, ek, ik, Dk, fk, Sk, bk) {
      let rk = Dk.parent,
        Pk = {
          from: fk.from,
          to: fk.to
        },
        mk = 0,
        Mk = null === rk || void 0 === rk ? void 0 : rk.cursor();
      if (Mk && (ik < 0 ? Mk.childBefore(Dk.from) : Mk.childAfter(Dk.to)))
        do {
          if (ik < 0 ? Mk.to <= Dk.from : Mk.from >= Dk.to) {
            if (0 == mk && Sk.indexOf(Mk.type.name) > -1 && Mk.from < Mk.to) {
              let kk = Be(Mk);
              return {
                start: Pk,
                end: kk ? {
                  from: kk.from,
                  to: kk.to
                } : void 0,
                matched: !0
              }
            }
            if (Xe(Mk.type, ik, bk)) mk++;
            else if (Xe(Mk.type, -ik, bk)) {
              if (0 == mk) {
                let kk = Be(Mk);
                return {
                  start: Pk,
                  end: kk && kk.from < kk.to ? {
                    from: kk.from,
                    to: kk.to
                  } : void 0,
                  matched: !1
                }
              }
              mk--
            }
          }
        } while (ik < 0 ? Mk.prevSibling() : Mk.nextSibling());
      return {
        start: Pk,
        matched: !1
      }
    }
    const oe = Object.create(null),
      Ze = [fk.l.none],
      Oe = [],
      ge = Object.create(null),
      Ge = Object.create(null);
    for (let [Je, ki] of [
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
      ]) Ge[Je] = Re(oe, ki);

    function Ne(kk, ek) {
      Oe.indexOf(kk) > -1 || (Oe.push(kk), console.warn(ek))
    }

    function Re(kk, ek) {
      let ik = [];
      for (let fk of ek.split(" ")) {
        let ek = [];
        for (let ik of fk.split(".")) {
          let Dk = kk[ik] || rk.o[ik];
          Dk ? "function" == typeof Dk ? ek.length ? ek = ek.map(Dk) : Ne(ik, `Modifier ${ik} used at start of tag`) : ek.length ? Ne(ik, `Tag ${ik} used as modifier`) : ek = Array.isArray(Dk) ? Dk : [Dk] : Ne(ik, `Unknown highlighting tag ${ik}`)
        }
        for (let kk of ek) ik.push(kk)
      }
      if (!ik.length) return 0;
      let Dk = ek.replace(/ /g, "_"),
        Sk = Dk + " " + ik.map((kk => kk.id)),
        bk = ge[Sk];
      if (bk) return bk.id;
      let Pk = ge[Sk] = fk.l.define({
        id: Ze.length,
        name: Dk,
        props: [(0, rk.i)({
          [Dk]: ik
        })]
      });
      return Ze.push(Pk), Pk.id
    }
    bk.c.RTL, bk.c.LTR
  },
  40934: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => yk,
      f: () => Ak
    });
    var Dk = ik(40883),
      fk = ik(40876),
      Sk = ik(40895);
    class bk {
      constructor(kk, ek, ik) {
        this.from = kk, this.to = ek, this.diagnostic = ik
      }
    }
    class rk {
      constructor(kk, ek, ik) {
        this.diagnostics = kk, this.panel = ek, this.selected = ik
      }
      static init(kk, ek, ik) {
        let Sk = ik.facet(Lk).markerFilter;
        Sk && (kk = Sk(kk, ik));
        let bk = kk.slice().sort(((kk, ek) => kk.from - ek.from || kk.to - ek.to)),
          mk = new fk.s,
          Mk = [],
          Kk = 0,
          xk = ik.doc.iter(),
          nk = 0,
          Uk = ik.doc.length;
        for (let fk = 0;;) {
          let kk, ek, ik = fk == bk.length ? null : bk[fk];
          if (!ik && !Mk.length) break;
          if (Mk.length) kk = Kk, ek = Mk.reduce(((kk, ek) => Math.min(kk, ek.to)), ik && ik.from > kk ? ik.from : 1e8);
          else {
            if (kk = ik.from, kk > Uk) break;
            ek = ik.to, Mk.push(ik), fk++
          }
          for (; fk < bk.length;) {
            let ik = bk[fk];
            if (ik.from != kk || !(ik.to > ik.from || ik.to == kk)) {
              ek = Math.min(ik.from, ek);
              break
            }
            Mk.push(ik), fk++, ek = Math.min(ik.to, ek)
          }
          ek = Math.min(ek, Uk);
          let Sk = !1;
          if (Mk.some((ik => ik.from == kk && (ik.to == ek || ek == Uk))) && (Sk = kk == ek, !Sk && ek - kk < 10)) {
            let ik = kk - (nk + xk.value.length);
            ik > 0 && (xk.next(ik), nk = kk);
            for (let Dk = kk;;) {
              if (Dk >= ek) {
                Sk = !0;
                break
              }
              if (!xk.lineBreak && nk + xk.value.length > Dk) break;
              Dk = nk + xk.value.length, nk += xk.value.length, xk.next()
            }
          }
          let rk = Qk(Mk);
          if (Sk) mk.add(kk, kk, Dk.b.widget({
            widget: new dk(rk),
            diagnostics: Mk.slice()
          }));
          else {
            let ik = Mk.reduce(((kk, ek) => ek.markClass ? kk + " " + ek.markClass : kk), "");
            mk.add(kk, ek, Dk.b.mark({
              class: "cm-lintRange cm-lintRange-" + rk + ik,
              diagnostics: Mk.slice(),
              inclusiveEnd: Mk.some((kk => kk.to > ek))
            }))
          }
          if (Kk = ek, Kk == Uk) break;
          for (let Dk = 0; Dk < Mk.length; Dk++) Mk[Dk].to <= Kk && Mk.splice(Dk--, 1)
        }
        let Hk = mk.finish();
        return new rk(Hk, ek, Pk(Hk))
      }
    }

    function Pk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Dk = null;
      return kk.between(ik, 1e9, ((kk, ik, fk) => {
        let {
          spec: Sk
        } = fk;
        if (!(ek && Sk.diagnostics.indexOf(ek) < 0))
          if (Dk) {
            if (Sk.diagnostics.indexOf(Dk.diagnostic) < 0) return !1;
            Dk = new bk(Dk.from, ik, Dk.diagnostic)
          } else Dk = new bk(kk, ik, ek || Sk.diagnostics[0])
      })), Dk
    }

    function mk(kk, ek) {
      let ik = ek.pos,
        Dk = ek.end || ik,
        fk = kk.state.facet(Lk).hideOn(kk, ik, Dk);
      if (null != fk) return fk;
      let Sk = kk.startState.doc.lineAt(ek.pos);
      return !(!kk.effects.some((kk => kk.is(Kk))) && !kk.changes.touchesRange(Sk.from, Math.max(Sk.to, Dk)))
    }

    function Mk(kk, ek) {
      return kk.field(Uk, !1) ? ek : ek.concat(fk.D.appendConfig.of(vk))
    }
    const Kk = fk.D.define(),
      xk = fk.D.define(),
      nk = fk.D.define(),
      Uk = fk.E.define({
        create: () => new rk(Dk.b.none, null, null),
        update(kk, ek) {
          if (ek.docChanged && kk.diagnostics.size) {
            let ik = kk.diagnostics.map(ek.changes),
              Dk = null,
              fk = kk.panel;
            if (kk.selected) {
              let fk = ek.changes.mapPos(kk.selected.from, 1);
              Dk = Pk(ik, kk.selected.diagnostic, fk) || Pk(ik, null, fk)
            }!ik.size && fk && ek.state.facet(Lk).autoPanel && (fk = null), kk = new rk(ik, fk, Dk)
          }
          for (let ik of ek.effects)
            if (ik.is(Kk)) {
              let Dk = ek.state.facet(Lk).autoPanel ? ik.value.length ? Fk.open : null : kk.panel;
              kk = rk.init(ik.value, Dk, ek.state)
            } else ik.is(xk) ? kk = new rk(kk.diagnostics, ik.value ? Fk.open : null, kk.selected) : ik.is(nk) && (kk = new rk(kk.diagnostics, kk.panel, ik.value));
          return kk
        },
        provide: kk => [Dk.bb.from(kk, (kk => kk.panel)), Dk.f.oD.from(kk, (kk => kk.diagnostics))]
      });
    const Hk = Dk.b.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function wk(kk, ek, ik) {
      let Dk, {
          diagnostics: fk
        } = kk.state.field(Uk),
        Sk = -1,
        bk = -1;
      fk.between(ek - (ik < 0 ? 1 : 0), ek + (ik > 0 ? 1 : 0), ((kk, fk, rk) => {
        let {
          spec: Pk
        } = rk;
        if (ek >= kk && ek <= fk && (kk == fk || (ek > kk || ik > 0) && (ek < fk || ik < 0))) return Dk = Pk.diagnostics, Sk = kk, bk = fk, !1
      }));
      let rk = kk.state.facet(Lk).tooltipFilter;
      return Dk && rk && (Dk = rk(Dk, kk.state)), Dk ? {
        pos: Sk,
        end: bk,
        above: kk.state.doc.lineAt(Sk).to < bk,
        create: () => ({
          dom: lk(kk, Dk)
        })
      } : null
    }

    function lk(kk, ek) {
      return (0, Sk.e)("ul", {
        class: "cm-tooltip-lint"
      }, ek.map((ek => sk(kk, ek, !1))))
    }
    const pk = kk => {
        let ek = kk.state.field(Uk, !1);
        return !(!ek || !ek.panel) && (kk.dispatch({
          effects: xk.of(!1)
        }), !0)
      },
      yk = [{
        key: "Mod-Shift-m",
        run: kk => {
          let ek = kk.state.field(Uk, !1);
          ek && ek.panel || kk.dispatch({
            effects: Mk(kk.state, [xk.of(!0)])
          });
          let ik = (0, Dk.r)(kk, Fk.open);
          return ik && ik.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: kk => {
          let ek = kk.state.field(Uk, !1);
          if (!ek) return !1;
          let ik = kk.state.selection.main,
            Dk = Pk(ek.diagnostics, null, ik.to + 1);
          return !(!Dk && (Dk = Pk(ek.diagnostics, null, 0), !Dk || Dk.from == ik.from && Dk.to == ik.to)) && (kk.dispatch({
            selection: {
              anchor: Dk.from,
              head: Dk.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      Yk = Dk.i.fromClass(class {
        constructor(kk) {
          this.view = kk, this.timeout = -1, this.set = !0;
          let {
            delay: ek
          } = kk.state.facet(Lk);
          this.lintTime = Date.now() + ek, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, ek)
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
              sources: ek
            } = kk.facet(Lk);
            ek.length && function(kk, ek, ik) {
              let Dk = [],
                fk = -1;
              for (let Sk of kk) Sk.then((ik => {
                Dk.push(ik), clearTimeout(fk), Dk.length == kk.length ? ek(Dk) : fk = setTimeout((() => ek(Dk)), 200)
              }), ik)
            }(ek.map((kk => Promise.resolve(kk(this.view)))), (ek => {
              this.view.state.doc == kk.doc && this.view.dispatch(function(kk, ek) {
                return {
                  effects: Mk(kk, [Kk.of(ek)])
                }
              }(this.view.state, ek.reduce(((kk, ek) => kk.concat(ek)))))
            }), (kk => {
              (0, Dk.N)(this.view.state, kk)
            }))
          }
        }
        update(kk) {
          let ek = kk.state.facet(Lk);
          (kk.docChanged || ek != kk.startState.facet(Lk) || ek.needsRefresh && ek.needsRefresh(kk)) && (this.lintTime = Date.now() + ek.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, ek.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const Lk = fk.n.define({
      combine: kk => ({
        sources: kk.map((kk => kk.source)).filter((kk => null != kk)),
        ...(0, fk.Q)(kk.map((kk => kk.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: Ck,
          tooltipFilter: Ck,
          needsRefresh: (kk, ek) => kk ? ek ? ik => kk(ik) || ek(ik) : kk : ek,
          hideOn: (kk, ek) => kk ? ek ? (ik, Dk, fk) => kk(ik, Dk, fk) || ek(ik, Dk, fk) : kk : ek,
          autoPanel: (kk, ek) => kk || ek
        })
      })
    });

    function Ck(kk, ek) {
      return kk ? ek ? (ik, Dk) => ek(kk(ik, Dk), Dk) : kk : ek
    }

    function Ak(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [Lk.of({
        source: kk,
        config: ek
      }), Yk, vk]
    }

    function jk(kk) {
      let ek = [];
      if (kk) kk: for (let {
          name: ik
        }
        of kk) {
        for (let kk = 0; kk < ik.length; kk++) {
          let Dk = ik[kk];
          if (/[a-zA-Z]/.test(Dk) && !ek.some((kk => kk.toLowerCase() == Dk.toLowerCase()))) {
            ek.push(Dk);
            continue kk
          }
        }
        ek.push("")
      }
      return ek
    }

    function sk(kk, ek, ik) {
      var Dk;
      let fk = ik ? jk(ek.actions) : [];
      return (0, Sk.e)("li", {
        class: "cm-diagnostic cm-diagnostic-" + ek.severity
      }, (0, Sk.e)("span", {
        class: "cm-diagnosticText"
      }, ek.renderMessage ? ek.renderMessage(kk) : ek.message), null === (Dk = ek.actions) || void 0 === Dk ? void 0 : Dk.map(((ik, Dk) => {
        let bk = !1,
          rk = Dk => {
            if (Dk.preventDefault(), bk) return;
            bk = !0;
            let fk = Pk(kk.state.field(Uk).diagnostics, ek);
            fk && ik.apply(kk, fk.from, fk.to)
          },
          {
            name: mk
          } = ik,
          Mk = fk[Dk] ? mk.indexOf(fk[Dk]) : -1,
          Kk = Mk < 0 ? mk : [mk.slice(0, Mk), (0, Sk.e)("u", mk.slice(Mk, Mk + 1)), mk.slice(Mk + 1)],
          xk = ik.markClass ? " " + ik.markClass : "";
        return (0, Sk.e)("button", {
          type: "button",
          class: "cm-diagnosticAction" + xk,
          onclick: rk,
          onmousedown: rk,
          "aria-label": ` Action: ${mk}${Mk<0?"":` (access key "${fk[Dk]})"`}.`
        }, Kk)
      })), ek.source && (0, Sk.e)("div", {
        class: "cm-diagnosticSource"
      }, ek.source))
    }
    class dk extends Dk.j {
      constructor(kk) {
        super(), this.sev = kk
      }
      eq(kk) {
        return kk.sev == this.sev
      }
      toDOM() {
        return (0, Sk.e)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Vk {
      constructor(kk, ek) {
        this.diagnostic = ek, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = sk(kk, ek, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class Fk {
      constructor(kk) {
        this.view = kk, this.items = [];
        this.list = (0, Sk.e)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: ek => {
            if (!(ek.ctrlKey || ek.altKey || ek.metaKey)) {
              if (27 == ek.keyCode) pk(this.view), this.view.focus();
              else if (38 == ek.keyCode || 33 == ek.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == ek.keyCode || 34 == ek.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == ek.keyCode) this.moveSelection(0);
              else if (35 == ek.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == ek.keyCode) this.view.focus();
              else {
                if (!(ek.keyCode >= 65 && ek.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: ik
                  } = this.items[this.selectedIndex], Dk = jk(ik.actions);
                  for (let fk = 0; fk < Dk.length; fk++)
                    if (Dk[fk].toUpperCase().charCodeAt(0) == ek.keyCode) {
                      let ek = Pk(this.view.state.field(Uk).diagnostics, ik);
                      ek && ik.actions[fk].apply(kk, ek.from, ek.to)
                    }
                }
              }
              ek.preventDefault()
            }
          },
          onclick: kk => {
            for (let ek = 0; ek < this.items.length; ek++) this.items[ek].dom.contains(kk.target) && this.moveSelection(ek)
          }
        }), this.dom = (0, Sk.e)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, Sk.e)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => pk(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let kk = this.view.state.field(Uk).selected;
        if (!kk) return -1;
        for (let ek = 0; ek < this.items.length; ek++)
          if (this.items[ek].diagnostic == kk.diagnostic) return ek;
        return -1
      }
      update() {
        let {
          diagnostics: kk,
          selected: ek
        } = this.view.state.field(Uk), ik = 0, Dk = !1, fk = null, Sk = new Set;
        for (kk.between(0, this.view.state.doc.length, ((kk, bk, rk) => {
            let {
              spec: Pk
            } = rk;
            for (let mk of Pk.diagnostics) {
              if (Sk.has(mk)) continue;
              Sk.add(mk);
              let kk, bk = -1;
              for (let ek = ik; ek < this.items.length; ek++)
                if (this.items[ek].diagnostic == mk) {
                  bk = ek;
                  break
                } bk < 0 ? (kk = new Vk(this.view, mk), this.items.splice(ik, 0, kk), Dk = !0) : (kk = this.items[bk], bk > ik && (this.items.splice(ik, bk - ik), Dk = !0)), ek && kk.diagnostic == ek.diagnostic ? kk.dom.hasAttribute("aria-selected") || (kk.dom.setAttribute("aria-selected", "true"), fk = kk) : kk.dom.hasAttribute("aria-selected") && kk.dom.removeAttribute("aria-selected"), ik++
            }
          })); ik < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Dk = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Vk(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Dk = !0), fk ? (this.list.setAttribute("aria-activedescendant", fk.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: fk.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: kk => {
            let {
              sel: ek,
              panel: ik
            } = kk, Dk = ik.height / this.list.offsetHeight;
            ek.top < ik.top ? this.list.scrollTop -= (ik.top - ek.top) / Dk : ek.bottom > ik.bottom && (this.list.scrollTop += (ek.bottom - ik.bottom) / Dk)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Dk && this.sync()
      }
      sync() {
        let kk = this.list.firstChild;

        function ek() {
          let ek = kk;
          kk = ek.nextSibling, ek.remove()
        }
        for (let ik of this.items)
          if (ik.dom.parentNode == this.list) {
            for (; kk != ik.dom;) ek();
            kk = ik.dom.nextSibling
          } else this.list.insertBefore(ik.dom, kk);
        for (; kk;) ek()
      }
      moveSelection(kk) {
        if (this.selectedIndex < 0) return;
        let ek = Pk(this.view.state.field(Uk).diagnostics, this.items[kk].diagnostic);
        ek && this.view.dispatch({
          selection: {
            anchor: ek.from,
            head: ek.to
          },
          scrollIntoView: !0,
          effects: nk.of(ek)
        })
      }
      static open(kk) {
        return new Fk(kk)
      }
    }

    function uk(kk) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(kk)}</svg>')`
    }

    function qk(kk) {
      return uk(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${kk}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Ik = Dk.f.baseTheme({
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
        backgroundImage: qk("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: qk("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: qk("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: qk("#66d")
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

    function zk(kk) {
      return "error" == kk ? 4 : "warning" == kk ? 3 : "info" == kk ? 2 : 1
    }

    function Qk(kk) {
      let ek = "hint",
        ik = 1;
      for (let Dk of kk) {
        let kk = zk(Dk.severity);
        kk > ik && (ik = kk, ek = Dk.severity)
      }
      return ek
    }
    Dk.g;
    const vk = [Uk, Dk.f.oD.compute([Uk], (kk => {
      let {
        selected: ek,
        panel: ik
      } = kk.field(Uk);
      return ek && ik && ek.from != ek.to ? Dk.b.set([Hk.range(ek.from, ek.to)]) : Dk.b.none
    })), (0, Dk.E)(wk, {
      hideOn: mk
    }), Ik]
  },
  40926: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Jk,
      h: () => lk,
      i: () => ke
    });
    var Dk = ik(40883),
      fk = ik(40876),
      Sk = ik(40895);
    const bk = "function" == typeof String.prototype.normalize ? kk => kk.normalize("NFKD") : kk => kk;
    class rk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length,
          fk = arguments.length > 4 ? arguments[4] : void 0,
          Sk = arguments.length > 5 ? arguments[5] : void 0;
        this.test = Sk, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = kk.iterRange(ik, Dk), this.bufferStart = ik, this.normalize = fk ? kk => fk(bk(kk)) : bk, this.query = this.normalize(ek)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, fk.L)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let kk = this.peek();
          if (kk < 0) return this.done = !0, this;
          let ek = (0, fk.ab)(kk),
            ik = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, fk.M)(kk);
          let Dk = this.normalize(ek);
          if (Dk.length)
            for (let fk = 0, Sk = ik;; fk++) {
              let kk = Dk.charCodeAt(fk),
                bk = this.match(kk, Sk, this.bufferPos + this.bufferStart);
              if (fk == Dk.length - 1) {
                if (bk) return this.value = bk, this;
                break
              }
              Sk == ik && fk < ek.length && ek.charCodeAt(fk) == kk && Sk++
            }
        }
      }
      match(kk, ek, ik) {
        let Dk = null;
        for (let fk = 0; fk < this.matches.length; fk += 2) {
          let ek = this.matches[fk],
            Sk = !1;
          this.query.charCodeAt(ek) == kk && (ek == this.query.length - 1 ? Dk = {
            from: this.matches[fk + 1],
            to: ik
          } : (this.matches[fk]++, Sk = !0)), Sk || (this.matches.splice(fk, 2), fk -= 2)
        }
        return this.query.charCodeAt(0) == kk && (1 == this.query.length ? Dk = {
          from: ek,
          to: ik
        } : this.matches.push(1, ek)), Dk && this.test && !this.test(Dk.from, Dk.to, this.buffer, this.bufferStart) && (Dk = null), Dk
      }
    }
    "undefined" != typeof Symbol && (rk.prototype[Symbol.iterator] = function() {
      return this
    });
    const Pk = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      mk = "gm" + (null == /x/.unicode ? "" : "u");
    class Mk {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kk.length;
        if (this.text = kk, this.to = fk, this.curLine = "", this.done = !1, this.value = Pk, /\\[sWDnr]|\n|\r|\[\^/.test(ek)) return new nk(kk, ek, ik, Dk, fk);
        this.re = new RegExp(ek, mk + ((null === ik || void 0 === ik ? void 0 : ik.ignoreCase) ? "i" : "")), this.test = null === ik || void 0 === ik ? void 0 : ik.test, this.iter = kk.iter();
        let Sk = kk.lineAt(Dk);
        this.curLineStart = Sk.from, this.matchPos = Uk(kk, Dk), this.getLine(this.curLineStart)
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
          let ek = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (ek) {
            let ik = this.curLineStart + ek.index,
              Dk = ik + ek[0].length;
            if (this.matchPos = Uk(this.text, Dk + (ik == Dk ? 1 : 0)), ik == this.curLineStart + this.curLine.length && this.nextLine(), (ik < Dk || ik > this.value.to) && (!this.test || this.test(ik, Dk, ek))) return this.value = {
              from: ik,
              to: Dk,
              match: ek
            }, this;
            kk = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), kk = 0
          }
        }
      }
    }
    const Kk = new WeakMap;
    class xk {
      constructor(kk, ek) {
        this.from = kk, this.text = ek
      }
      get to() {
        return this.from + this.text.length
      }
      static get(kk, ek, ik) {
        let Dk = Kk.get(kk);
        if (!Dk || Dk.from >= ik || Dk.to <= ek) {
          let Dk = new xk(ek, kk.sliceString(ek, ik));
          return Kk.set(kk, Dk), Dk
        }
        if (Dk.from == ek && Dk.to == ik) return Dk;
        let {
          text: fk,
          from: Sk
        } = Dk;
        return Sk > ek && (fk = kk.sliceString(ek, Sk) + fk, Sk = ek), Dk.to < ik && (fk += kk.sliceString(Dk.to, ik)), Kk.set(kk, new xk(Sk, fk)), new xk(ek, fk.slice(ek - Sk, ik - Sk))
      }
    }
    class nk {
      constructor(kk, ek, ik, Dk, fk) {
        this.text = kk, this.to = fk, this.done = !1, this.value = Pk, this.matchPos = Uk(kk, Dk), this.re = new RegExp(ek, mk + ((null === ik || void 0 === ik ? void 0 : ik.ignoreCase) ? "i" : "")), this.test = null === ik || void 0 === ik ? void 0 : ik.test, this.flat = xk.get(kk, Dk, this.chunkEnd(Dk + 5e3))
      }
      chunkEnd(kk) {
        return kk >= this.to ? this.to : this.text.lineAt(kk).to
      }
      next() {
        for (;;) {
          let kk = this.re.lastIndex = this.matchPos - this.flat.from,
            ek = this.re.exec(this.flat.text);
          if (ek && !ek[0] && ek.index == kk && (this.re.lastIndex = kk + 1, ek = this.re.exec(this.flat.text)), ek) {
            let kk = this.flat.from + ek.index,
              ik = kk + ek[0].length;
            if ((this.flat.to >= this.to || ek.index + ek[0].length <= this.flat.text.length - 10) && (!this.test || this.test(kk, ik, ek))) return this.value = {
              from: kk,
              to: ik,
              match: ek
            }, this.matchPos = Uk(this.text, ik + (kk == ik ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = xk.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function Uk(kk, ek) {
      if (ek >= kk.length) return ek;
      let ik, Dk = kk.lineAt(ek);
      for (; ek < Dk.to && (ik = Dk.text.charCodeAt(ek - Dk.from)) >= 56320 && ik < 57344;) ek++;
      return ek
    }
    "undefined" != typeof Symbol && (Mk.prototype[Symbol.iterator] = nk.prototype[Symbol.iterator] = function() {
      return this
    });
    const Hk = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      wk = fk.n.define({
        combine: kk => (0, fk.Q)(kk, Hk, {
          highlightWordAroundCursor: (kk, ek) => kk || ek,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function lk(kk) {
      let ek = [Ck, Lk];
      return kk && ek.push(wk.of(kk)), ek
    }
    const pk = Dk.b.mark({
        class: "cm-selectionMatch"
      }),
      yk = Dk.b.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function Yk(kk, ek, ik, Dk) {
      return (0 == ik || kk(ek.sliceDoc(ik - 1, ik)) != fk.f.Word) && (Dk == ek.doc.length || kk(ek.sliceDoc(Dk, Dk + 1)) != fk.f.Word)
    }
    const Lk = Dk.i.fromClass(class {
        constructor(kk) {
          this.oD = this.getDeco(kk)
        }
        update(kk) {
          (kk.selectionSet || kk.docChanged || kk.viewportChanged) && (this.oD = this.getDeco(kk.view))
        }
        getDeco(kk) {
          let ek = kk.state.facet(wk),
            {
              state: ik
            } = kk,
            Sk = ik.selection;
          if (Sk.lw.length > 1) return Dk.b.none;
          let bk, Pk = Sk.main,
            mk = null;
          if (Pk.empty) {
            if (!ek.highlightWordAroundCursor) return Dk.b.none;
            let kk = ik.wordAt(Pk.head);
            if (!kk) return Dk.b.none;
            mk = ik.charCategorizer(Pk.head), bk = ik.sliceDoc(kk.from, kk.to)
          } else {
            let kk = Pk.to - Pk.from;
            if (kk < ek.minSelectionLength || kk > 200) return Dk.b.none;
            if (ek.wholeWords) {
              if (bk = ik.sliceDoc(Pk.from, Pk.to), mk = ik.charCategorizer(Pk.head), !Yk(mk, ik, Pk.from, Pk.to) || ! function(kk, ek, ik, Dk) {
                  return kk(ek.sliceDoc(ik, ik + 1)) == fk.f.Word && kk(ek.sliceDoc(Dk - 1, Dk)) == fk.f.Word
                }(mk, ik, Pk.from, Pk.to)) return Dk.b.none
            } else if (bk = ik.sliceDoc(Pk.from, Pk.to), !bk) return Dk.b.none
          }
          let Mk = [];
          for (let fk of kk.W8) {
            let kk = new rk(ik.doc, bk, fk.from, fk.to);
            for (; !kk.next().done;) {
              let {
                from: fk,
                to: Sk
              } = kk.value;
              if ((!mk || Yk(mk, ik, fk, Sk)) && (Pk.empty && fk <= Pk.from && Sk >= Pk.to ? Mk.push(yk.range(fk, Sk)) : (fk >= Pk.to || Sk <= Pk.from) && Mk.push(pk.range(fk, Sk)), Mk.length > ek.maxMatches)) return Dk.b.none
            }
          }
          return Dk.b.set(Mk)
        }
      }, {
        oD: kk => kk.oD
      }),
      Ck = Dk.f.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const Ak = fk.n.define({
      combine: kk => (0, fk.Q)(kk, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: kk => new ee(kk),
        scrollToMatch: kk => Dk.f.scrollIntoView(kk)
      })
    });
    class jk {
      constructor(kk) {
        this.search = kk.search, this.caseSensitive = !!kk.caseSensitive, this.literal = !!kk.literal, this.regexp = !!kk.regexp, this.replace = kk.replace || "", this.valid = !!this.search && (!this.regexp || function(kk) {
          try {
            return new RegExp(kk, mk), !0
          } catch (ek) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!kk.wholeWord, this.test = kk.test
      }
      unquote(kk) {
        return this.literal ? kk : kk.replace(/\\([nrt\\])/g, ((kk, ek) => "n" == ek ? "\n" : "r" == ek ? "\r" : "t" == ek ? "\t" : "\\"))
      }
      eq(kk) {
        return this.search == kk.search && this.replace == kk.replace && this.caseSensitive == kk.caseSensitive && this.regexp == kk.regexp && this.wholeWord == kk.wholeWord && this.test == kk.test
      }
      create() {
        return this.regexp ? new Ik(this) : new Vk(this)
      }
      getCursor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = kk.doc ? kk : fk.j.create({
            doc: kk
          });
        return null == ik && (ik = Dk.doc.length), this.regexp ? Fk(this, Dk, ek, ik) : dk(this, Dk, ek, ik)
      }
    }
    class sk {
      constructor(kk) {
        this.spec = kk
      }
    }

    function dk(kk, ek, ik, Dk) {
      let Sk;
      var bk, Pk;
      return kk.wholeWord && (bk = ek.doc, Pk = ek.charCategorizer(ek.selection.main.head), Sk = (kk, ek, ik, Dk) => ((Dk > kk || Dk + ik.length < ek) && (Dk = Math.max(0, kk - 2), ik = bk.sliceString(Dk, Math.min(bk.length, ek + 2))), (Pk(uk(ik, kk - Dk)) != fk.f.Word || Pk(qk(ik, kk - Dk)) != fk.f.Word) && (Pk(qk(ik, ek - Dk)) != fk.f.Word || Pk(uk(ik, ek - Dk)) != fk.f.Word))), kk.test && (Sk = function(kk, ek, ik) {
        return (Dk, fk, Sk, bk) => {
          if (ik && !ik(Dk, fk, Sk, bk)) return !1;
          let rk = Dk >= bk && fk <= bk + Sk.length ? Sk.slice(Dk - bk, fk - bk) : ek.doc.sliceString(Dk, fk);
          return kk(rk, ek, Dk, fk)
        }
      }(kk.test, ek, Sk)), new rk(ek.doc, kk.unquoted, ik, Dk, kk.caseSensitive ? void 0 : kk => kk.toLowerCase(), Sk)
    }
    class Vk extends sk {
      constructor(kk) {
        super(kk)
      }
      nextMatch(kk, ek, ik) {
        let Dk = dk(this.spec, kk, ik, kk.doc.length).nextOverlapping();
        if (Dk.done) {
          let ik = Math.min(kk.doc.length, ek + this.spec.unquoted.length);
          Dk = dk(this.spec, kk, 0, ik).nextOverlapping()
        }
        return Dk.done || Dk.value.from == ek && Dk.value.to == ik ? null : Dk.value
      }
      prevMatchInRange(kk, ek, ik) {
        for (let Dk = ik;;) {
          let ik = Math.max(ek, Dk - 1e4 - this.spec.unquoted.length),
            fk = dk(this.spec, kk, ik, Dk),
            Sk = null;
          for (; !fk.nextOverlapping().done;) Sk = fk.value;
          if (Sk) return Sk;
          if (ik == ek) return null;
          Dk -= 1e4
        }
      }
      prevMatch(kk, ek, ik) {
        let Dk = this.prevMatchInRange(kk, 0, ek);
        return Dk || (Dk = this.prevMatchInRange(kk, Math.max(0, ik - this.spec.unquoted.length), kk.doc.length)), !Dk || Dk.from == ek && Dk.to == ik ? null : Dk
      }
      getReplacement(kk) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(kk, ek) {
        let ik = dk(this.spec, kk, 0, kk.doc.length),
          Dk = [];
        for (; !ik.next().done;) {
          if (Dk.length >= ek) return null;
          Dk.push(ik.value)
        }
        return Dk
      }
      highlight(kk, ek, ik, Dk) {
        let fk = dk(this.spec, kk, Math.max(0, ek - this.spec.unquoted.length), Math.min(ik + this.spec.unquoted.length, kk.doc.length));
        for (; !fk.next().done;) Dk(fk.value.from, fk.value.to)
      }
    }

    function Fk(kk, ek, ik, Dk) {
      let Sk;
      var bk;
      return kk.wholeWord && (bk = ek.charCategorizer(ek.selection.main.head), Sk = (kk, ek, ik) => !ik[0].length || (bk(uk(ik.input, ik.index)) != fk.f.Word || bk(qk(ik.input, ik.index)) != fk.f.Word) && (bk(qk(ik.input, ik.index + ik[0].length)) != fk.f.Word || bk(uk(ik.input, ik.index + ik[0].length)) != fk.f.Word)), kk.test && (Sk = function(kk, ek, ik) {
        return (Dk, fk, Sk) => (!ik || ik(Dk, fk, Sk)) && kk(Sk[0], ek, Dk, fk)
      }(kk.test, ek, Sk)), new Mk(ek.doc, kk.search, {
        ignoreCase: !kk.caseSensitive,
        test: Sk
      }, ik, Dk)
    }

    function uk(kk, ek) {
      return kk.slice((0, fk.U)(kk, ek, !1), ek)
    }

    function qk(kk, ek) {
      return kk.slice(ek, (0, fk.U)(kk, ek))
    }
    class Ik extends sk {
      nextMatch(kk, ek, ik) {
        let Dk = Fk(this.spec, kk, ik, kk.doc.length).next();
        return Dk.done && (Dk = Fk(this.spec, kk, 0, ek).next()), Dk.done ? null : Dk.value
      }
      prevMatchInRange(kk, ek, ik) {
        for (let Dk = 1;; Dk++) {
          let fk = Math.max(ek, ik - 1e4 * Dk),
            Sk = Fk(this.spec, kk, fk, ik),
            bk = null;
          for (; !Sk.next().done;) bk = Sk.value;
          if (bk && (fk == ek || bk.from > fk + 10)) return bk;
          if (fk == ek) return null
        }
      }
      prevMatch(kk, ek, ik) {
        return this.prevMatchInRange(kk, 0, ek) || this.prevMatchInRange(kk, ik, kk.doc.length)
      }
      getReplacement(kk) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((ek, ik) => {
          if ("&" == ik) return kk.match[0];
          if ("$" == ik) return "$";
          for (let Dk = ik.length; Dk > 0; Dk--) {
            let ek = +ik.slice(0, Dk);
            if (ek > 0 && ek < kk.match.length) return kk.match[ek] + ik.slice(Dk)
          }
          return ek
        }))
      }
      matchAll(kk, ek) {
        let ik = Fk(this.spec, kk, 0, kk.doc.length),
          Dk = [];
        for (; !ik.next().done;) {
          if (Dk.length >= ek) return null;
          Dk.push(ik.value)
        }
        return Dk
      }
      highlight(kk, ek, ik, Dk) {
        let fk = Fk(this.spec, kk, Math.max(0, ek - 250), Math.min(ik + 250, kk.doc.length));
        for (; !fk.next().done;) Dk(fk.value.from, fk.value.to)
      }
    }
    const zk = fk.D.define(),
      Qk = fk.D.define(),
      vk = fk.E.define({
        create: kk => new Ek(gk(kk).create(), null),
        update(kk, ek) {
          for (let ik of ek.effects) ik.is(zk) ? kk = new Ek(ik.value.create(), kk.panel) : ik.is(Qk) && (kk = new Ek(kk.query, ik.value ? Ok : null));
          return kk
        },
        provide: kk => Dk.bb.from(kk, (kk => kk.panel))
      });
    class Ek {
      constructor(kk, ek) {
        this.query = kk, this.panel = ek
      }
    }
    const hk = Dk.b.mark({
        class: "cm-searchMatch"
      }),
      ak = Dk.b.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      Wk = Dk.i.fromClass(class {
        constructor(kk) {
          this.view = kk, this.oD = this.highlight(kk.state.field(vk))
        }
        update(kk) {
          let ek = kk.state.field(vk);
          (ek != kk.startState.field(vk) || kk.docChanged || kk.selectionSet || kk.viewportChanged) && (this.oD = this.highlight(ek))
        }
        highlight(kk) {
          let {
            query: ek,
            panel: ik
          } = kk;
          if (!ik || !ek.spec.valid) return Dk.b.none;
          let {
            view: Sk
          } = this, bk = new fk.s;
          for (let Dk = 0, fk = Sk.W8, rk = fk.length; Dk < rk; Dk++) {
            let {
              from: kk,
              to: ik
            } = fk[Dk];
            for (; Dk < rk - 1 && ik > fk[Dk + 1].from - 500;) ik = fk[++Dk].to;
            ek.highlight(Sk.state, kk, ik, ((kk, ek) => {
              let ik = Sk.state.selection.lw.some((ik => ik.from == kk && ik.to == ek));
              bk.add(kk, ek, ik ? ak : hk)
            }))
          }
          return bk.finish()
        }
      }, {
        oD: kk => kk.oD
      });

    function tk(kk) {
      return ek => {
        let ik = ek.state.field(vk, !1);
        return ik && ik.query.spec.valid ? kk(ek, ik) : Rk(ek)
      }
    }
    const Xk = tk(((kk, ek) => {
        let {
          query: ik
        } = ek, {
          to: Dk
        } = kk.state.selection.main, Sk = ik.nextMatch(kk.state, Dk, Dk);
        if (!Sk) return !1;
        let bk = fk.h.single(Sk.from, Sk.to),
          rk = kk.state.facet(Ak);
        return kk.dispatch({
          selection: bk,
          effects: [Se(kk, Sk), rk.scrollToMatch(bk.main, kk)],
          userEvent: "select.search"
        }), Nk(kk), !0
      })),
      Bk = tk(((kk, ek) => {
        let {
          query: ik
        } = ek, {
          state: Dk
        } = kk, {
          from: Sk
        } = Dk.selection.main, bk = ik.prevMatch(Dk, Sk, Sk);
        if (!bk) return !1;
        let rk = fk.h.single(bk.from, bk.to),
          Pk = kk.state.facet(Ak);
        return kk.dispatch({
          selection: rk,
          effects: [Se(kk, bk), Pk.scrollToMatch(rk.main, kk)],
          userEvent: "select.search"
        }), Nk(kk), !0
      })),
      ck = tk(((kk, ek) => {
        let {
          query: ik
        } = ek, Dk = ik.matchAll(kk.state, 1e3);
        return !(!Dk || !Dk.length) && (kk.dispatch({
          selection: fk.h.create(Dk.map((kk => fk.h.range(kk.from, kk.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      Tk = tk(((kk, ek) => {
        let {
          query: ik
        } = ek, {
          state: Sk
        } = kk, {
          from: bk,
          to: rk
        } = Sk.selection.main;
        if (Sk.readOnly) return !1;
        let Pk = ik.nextMatch(Sk, bk, bk);
        if (!Pk) return !1;
        let mk, Mk, Kk = Pk,
          xk = [],
          nk = [];
        Kk.from == bk && Kk.to == rk && (Mk = Sk.toText(ik.getReplacement(Kk)), xk.push({
          from: Kk.from,
          to: Kk.to,
          insert: Mk
        }), Kk = ik.nextMatch(Sk, Kk.from, Kk.to), nk.push(Dk.f.announce.of(Sk.phrase("replaced match on line $", Sk.doc.lineAt(bk).number) + ".")));
        let Uk = kk.state.changes(xk);
        return Kk && (mk = fk.h.single(Kk.from, Kk.to).map(Uk), nk.push(Se(kk, Kk)), nk.push(Sk.facet(Ak).scrollToMatch(mk.main, kk))), kk.dispatch({
          changes: Uk,
          selection: mk,
          effects: nk,
          userEvent: "input.replace"
        }), !0
      })),
      Zk = tk(((kk, ek) => {
        let {
          query: ik
        } = ek;
        if (kk.state.readOnly) return !1;
        let fk = ik.matchAll(kk.state, 1e9).map((kk => {
          let {
            from: ek,
            to: Dk
          } = kk;
          return {
            from: ek,
            to: Dk,
            insert: ik.getReplacement(kk)
          }
        }));
        if (!fk.length) return !1;
        let Sk = kk.state.phrase("replaced $ matches", fk.length) + ".";
        return kk.dispatch({
          changes: fk,
          effects: Dk.f.announce.of(Sk),
          userEvent: "input.replace.all"
        }), !0
      }));

    function Ok(kk) {
      return kk.state.facet(Ak).createPanel(kk)
    }

    function gk(kk, ek) {
      var ik, Dk, fk, Sk, bk;
      let rk = kk.selection.main,
        Pk = rk.empty || rk.to > rk.from + 100 ? "" : kk.sliceDoc(rk.from, rk.to);
      if (ek && !Pk) return ek;
      let mk = kk.facet(Ak);
      return new jk({
        search: (null !== (ik = null === ek || void 0 === ek ? void 0 : ek.literal) && void 0 !== ik ? ik : mk.literal) ? Pk : Pk.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Dk = null === ek || void 0 === ek ? void 0 : ek.caseSensitive) && void 0 !== Dk ? Dk : mk.caseSensitive,
        literal: null !== (fk = null === ek || void 0 === ek ? void 0 : ek.literal) && void 0 !== fk ? fk : mk.literal,
        regexp: null !== (Sk = null === ek || void 0 === ek ? void 0 : ek.regexp) && void 0 !== Sk ? Sk : mk.regexp,
        wholeWord: null !== (bk = null === ek || void 0 === ek ? void 0 : ek.wholeWord) && void 0 !== bk ? bk : mk.wholeWord
      })
    }

    function Gk(kk) {
      let ek = (0, Dk.r)(kk, Ok);
      return ek && ek.dom.querySelector("[main-field]")
    }

    function Nk(kk) {
      let ek = Gk(kk);
      ek && ek == kk.root.activeElement && ek.select()
    }
    const Rk = kk => {
        let ek = kk.state.field(vk, !1);
        if (ek && ek.panel) {
          let ik = Gk(kk);
          if (ik && ik != kk.root.activeElement) {
            let Dk = gk(kk.state, ek.query.spec);
            Dk.valid && kk.dispatch({
              effects: zk.of(Dk)
            }), ik.focus(), ik.select()
          }
        } else kk.dispatch({
          effects: [Qk.of(!0), ek ? zk.of(gk(kk.state, ek.query.spec)) : fk.D.appendConfig.of(re)]
        });
        return !0
      },
      Jk = kk => {
        let ek = kk.state.field(vk, !1);
        if (!ek || !ek.panel) return !1;
        let ik = (0, Dk.r)(kk, Ok);
        return ik && ik.dom.contains(kk.root.activeElement) && kk.focus(), kk.dispatch({
          effects: Qk.of(!1)
        }), !0
      },
      ke = [{
        key: "Mod-f",
        run: Rk,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: Xk,
        shift: Bk,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: Xk,
        shift: Bk,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: Jk,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk, Dk = ek.selection;
          if (Dk.lw.length > 1 || Dk.main.empty) return !1;
          let {
            from: Sk,
            to: bk
          } = Dk.main, Pk = [], mk = 0;
          for (let Mk = new rk(ek.doc, ek.sliceDoc(Sk, bk)); !Mk.next().done;) {
            if (Pk.length > 1e3) return !1;
            Mk.value.from == Sk && (mk = Pk.length), Pk.push(fk.h.range(Mk.value.from, Mk.value.to))
          }
          return ik(ek.update({
            selection: fk.h.create(Pk, mk),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: kk => {
          let {
            state: ek
          } = kk, ik = String(ek.doc.lineAt(kk.state.selection.main.head).number), {
            close: Sk,
            result: bk
          } = (0, Dk.Z)(kk, {
            label: ek.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: ik
            },
            focus: !0,
            submitLabel: ek.phrase("go")
          });
          return bk.then((ik => {
            let bk = ik && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(ik.elements.line.value);
            if (!bk) return void kk.dispatch({
              effects: Sk
            });
            let rk = ek.doc.lineAt(ek.selection.main.head),
              [, Pk, mk, Mk, Kk] = bk,
              xk = Mk ? +Mk.slice(1) : 0,
              nk = mk ? +mk : rk.number;
            if (mk && Kk) {
              let kk = nk / 100;
              Pk && (kk = kk * ("-" == Pk ? -1 : 1) + rk.number / ek.doc.lines), nk = Math.round(ek.doc.lines * kk)
            } else mk && Pk && (nk = nk * ("-" == Pk ? -1 : 1) + rk.number);
            let Uk = ek.doc.line(Math.max(1, Math.min(ek.doc.lines, nk))),
              Hk = fk.h.cursor(Uk.from + Math.max(0, Math.min(xk, Uk.length)));
            kk.dispatch({
              effects: [Sk, Dk.f.scrollIntoView(Hk.from, {
                y: "center"
              })],
              selection: Hk
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk, {
            lw: Sk
          } = ek.selection;
          if (Sk.some((kk => kk.from === kk.to))) return (kk => {
            let {
              state: ek,
              dispatch: ik
            } = kk, {
              selection: Dk
            } = ek, Sk = fk.h.create(Dk.lw.map((kk => ek.wordAt(kk.head) || fk.h.cursor(kk.head))), Dk.mainIndex);
            return !Sk.eq(Dk) && (ik(ek.update({
              selection: Sk
            })), !0)
          })({
            state: ek,
            dispatch: ik
          });
          let bk = ek.sliceDoc(Sk[0].from, Sk[0].to);
          if (ek.selection.lw.some((kk => ek.sliceDoc(kk.from, kk.to) != bk))) return !1;
          let Pk = function(kk, ek) {
            let {
              main: ik,
              lw: Dk
            } = kk.selection, fk = kk.wordAt(ik.head), Sk = fk && fk.from == ik.from && fk.to == ik.to;
            for (let bk = !1, Pk = new rk(kk.doc, ek, Dk[Dk.length - 1].to);;) {
              if (Pk.next(), !Pk.done) {
                if (bk && Dk.some((kk => kk.from == Pk.value.from))) continue;
                if (Sk) {
                  let ek = kk.wordAt(Pk.value.from);
                  if (!ek || ek.from != Pk.value.from || ek.to != Pk.value.to) continue
                }
                return Pk.value
              }
              if (bk) return null;
              Pk = new rk(kk.doc, ek, 0, Math.max(0, Dk[Dk.length - 1].from - 1)), bk = !0
            }
          }(ek, bk);
          return !!Pk && (ik(ek.update({
            selection: ek.selection.addRange(fk.h.range(Pk.from, Pk.to), !1),
            effects: Dk.f.scrollIntoView(Pk.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class ee {
      constructor(kk) {
        this.view = kk;
        let ek = this.query = kk.state.field(vk).query.spec;

        function ik(kk, ek, ik) {
          return (0, Sk.e)("button", {
            class: "cm-button",
            name: kk,
            onclick: ek,
            type: "button"
          }, ik)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, Sk.e)("input", {
          value: ek.search,
          placeholder: ie(kk, "Find"),
          "aria-label": ie(kk, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, Sk.e)("input", {
          value: ek.replace,
          placeholder: ie(kk, "Replace"),
          "aria-label": ie(kk, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, Sk.e)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: ek.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, Sk.e)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: ek.regexp,
          onchange: this.commit
        }), this.wordField = (0, Sk.e)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: ek.wholeWord,
          onchange: this.commit
        }), this.dom = (0, Sk.e)("div", {
          onkeydown: kk => this.keydown(kk),
          class: "cm-search"
        }, [this.searchField, ik("next", (() => Xk(kk)), [ie(kk, "next")]), ik("prev", (() => Bk(kk)), [ie(kk, "previous")]), ik("select", (() => ck(kk)), [ie(kk, "all")]), (0, Sk.e)("label", null, [this.caseField, ie(kk, "match case")]), (0, Sk.e)("label", null, [this.reField, ie(kk, "regexp")]), (0, Sk.e)("label", null, [this.wordField, ie(kk, "by word")]), ...kk.state.readOnly ? [] : [(0, Sk.e)("br"), this.replaceField, ik("replace", (() => Tk(kk)), [ie(kk, "replace")]), ik("replaceAll", (() => Zk(kk)), [ie(kk, "replace all")])], (0, Sk.e)("button", {
          name: "close",
          onclick: () => Jk(kk),
          "aria-label": ie(kk, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let kk = new jk({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        kk.eq(this.query) || (this.query = kk, this.view.dispatch({
          effects: zk.of(kk)
        }))
      }
      keydown(kk) {
        (0, Dk.X)(this.view, kk, "search-panel") ? kk.preventDefault(): 13 == kk.keyCode && kk.target == this.searchField ? (kk.preventDefault(), (kk.shiftKey ? Bk : Xk)(this.view)) : 13 == kk.keyCode && kk.target == this.replaceField && (kk.preventDefault(), Tk(this.view))
      }
      update(kk) {
        for (let ek of kk.transactions)
          for (let kk of ek.effects) kk.is(zk) && !kk.value.eq(this.query) && this.setQuery(kk.value)
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
        return this.view.state.facet(Ak).top
      }
    }

    function ie(kk, ek) {
      return kk.state.phrase(ek)
    }
    const De = 30,
      fe = /[\s\.,:;?!]/;

    function Se(kk, ek) {
      let {
        from: ik,
        to: fk
      } = ek, Sk = kk.state.doc.lineAt(ik), bk = kk.state.doc.lineAt(fk).to, rk = Math.max(Sk.from, ik - De), Pk = Math.min(bk, fk + De), mk = kk.state.sliceDoc(rk, Pk);
      if (rk != Sk.from)
        for (let Dk = 0; Dk < De; Dk++)
          if (!fe.test(mk[Dk + 1]) && fe.test(mk[Dk])) {
            mk = mk.slice(Dk);
            break
          } if (Pk != bk)
        for (let Dk = mk.length - 1; Dk > mk.length - De; Dk--)
          if (!fe.test(mk[Dk - 1]) && fe.test(mk[Dk])) {
            mk = mk.slice(0, Dk);
            break
          } return Dk.f.announce.of(`${kk.state.phrase("current match")}. ${mk} ${kk.state.phrase("on line")} ${Sk.number}.`)
    }
    const be = Dk.f.baseTheme({
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
      re = [vk, fk.q.low(Wk), be]
  },
  40883: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Ik,
      c: () => Me,
      f: () => uf,
      g: () => Mb,
      i: () => Ne,
      j: () => uk,
      l: () => QS,
      n: () => eS,
      o: () => MS,
      r: () => eb,
      v: () => RS,
      x: () => Hb,
      B: () => CS,
      A: () => vb,
      D: () => pS,
      E: () => NS,
      I: () => af,
      K: () => qb,
      N: () => Ze,
      R: () => dS,
      V: () => qS,
      X: () => Xf,
      Z: () => bb,
      bb: () => Sb,
      fb: () => TS
    });
    for (var Dk = ik(40876), fk = ik(40886), Sk = {
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
      }, bk = {
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
      }, rk = "undefined" != typeof navigator && /Mac/.test(navigator.platform), Pk = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), mk = 0; mk < 10; mk++) Sk[48 + mk] = Sk[96 + mk] = String(mk);
    for (mk = 1; mk <= 24; mk++) Sk[mk + 111] = "F" + mk;
    for (mk = 65; mk <= 90; mk++) Sk[mk] = String.fromCharCode(mk + 32), bk[mk] = String.fromCharCode(mk);
    for (var Mk in Sk) bk.hasOwnProperty(Mk) || (bk[Mk] = Sk[Mk]);
    var Kk = ik(40895);
    let xk = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      nk = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const Uk = /Edge\/(\d+)/.exec(xk.userAgent),
      Hk = /MSIE \d/.test(xk.userAgent),
      wk = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(xk.userAgent),
      lk = !!(Hk || wk || Uk),
      pk = !lk && /gecko\/(\d+)/i.test(xk.userAgent),
      yk = !lk && /Chrome\/(\d+)/.exec(xk.userAgent),
      Yk = "webkitFontSmoothing" in nk.documentElement.style,
      Lk = !lk && /Apple Computer/.test(xk.vendor),
      Ck = Lk && (/Mobile\/\w+/.test(xk.userAgent) || xk.maxTouchPoints > 2);
    var Ak = {
      mac: Ck || /Mac/.test(xk.platform),
      windows: /Win/.test(xk.platform),
      linux: /Linux|X11/.test(xk.platform),
      ie: lk,
      ie_version: Hk ? nk.documentMode || 6 : wk ? +wk[1] : Uk ? +Uk[1] : 0,
      gecko: pk,
      gecko_version: pk ? +(/Firefox\/(\d+)/.exec(xk.userAgent) || [0, 0])[1] : 0,
      chrome: !!yk,
      chrome_version: yk ? +yk[1] : 0,
      ios: Ck,
      android: /Android\b/.test(xk.userAgent),
      webkit: Yk,
      webkit_version: Yk ? +(/\bAppleWebKit\/(\d+)/.exec(xk.userAgent) || [0, 0])[1] : 0,
      safari: Lk,
      safari_version: Lk ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(xk.userAgent) || [0, 0])[1] : 0,
      tabSize: null != nk.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function jk(kk, ek) {
      for (let ik in kk) "class" == ik && ek.class ? ek.class += " " + kk.class : "style" == ik && ek.style ? ek.style += ";" + kk.style : ek[ik] = kk[ik];
      return ek
    }
    const sk = Object.create(null);

    function dk(kk, ek, ik) {
      if (kk == ek) return !0;
      kk || (kk = sk), ek || (ek = sk);
      let Dk = Object.keys(kk),
        fk = Object.keys(ek);
      if (Dk.length - (ik && Dk.indexOf(ik) > -1 ? 1 : 0) != fk.length - (ik && fk.indexOf(ik) > -1 ? 1 : 0)) return !1;
      for (let Sk of Dk)
        if (Sk != ik && (-1 == fk.indexOf(Sk) || kk[Sk] !== ek[Sk])) return !1;
      return !0
    }

    function Vk(kk, ek, ik) {
      let Dk = !1;
      if (ek)
        for (let fk in ek) ik && fk in ik || (Dk = !0, "style" == fk ? kk.style.cssText = "" : kk.removeAttribute(fk));
      if (ik)
        for (let fk in ik) ek && ek[fk] == ik[fk] || (Dk = !0, "style" == fk ? kk.style.cssText = ik[fk] : kk.setAttribute(fk, ik[fk]));
      return Dk
    }

    function Fk(kk) {
      let ek = Object.create(null);
      for (let ik = 0; ik < kk.attributes.length; ik++) {
        let Dk = kk.attributes[ik];
        ek[Dk.name] = Dk.value
      }
      return ek
    }
    class uk {
      eq(kk) {
        return !1
      }
      updateDOM(kk, ek, ik) {
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
      coordsAt(kk, ek, ik) {
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
    var qk = function(kk) {
      return kk[kk.Text = 0] = "Text", kk[kk.WidgetBefore = 1] = "WidgetBefore", kk[kk.WidgetAfter = 2] = "WidgetAfter", kk[kk.WidgetRange = 3] = "WidgetRange", kk
    }(qk || (qk = {}));
    class Ik extends Dk.A {
      constructor(kk, ek, ik, Dk) {
        super(), this.startSide = kk, this.endSide = ek, this.widget = ik, this.spec = Dk
      }
      get heightRelevant() {
        return !1
      }
      static mark(kk) {
        return new zk(kk)
      }
      static widget(kk) {
        let ek = Math.max(-1e4, Math.min(1e4, kk.side || 0)),
          ik = !!kk.block;
        return ek += ik && !kk.inlineOrder ? ek > 0 ? 3e8 : -4e8 : ek > 0 ? 1e8 : -1e8, new vk(kk, ek, ek, ik, kk.widget || null, !1)
      }
      static replace(kk) {
        let ek, ik, Dk = !!kk.block;
        if (kk.isBlockGap) ek = -5e8, ik = 4e8;
        else {
          let {
            start: fk,
            end: Sk
          } = Ek(kk, Dk);
          ek = (fk ? Dk ? -3e8 : -1 : 5e8) - 1, ik = 1 + (Sk ? Dk ? 2e8 : 1 : -6e8)
        }
        return new vk(kk, ek, ik, Dk, kk.widget || null, !0)
      }
      static line(kk) {
        return new Qk(kk)
      }
      static set(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Dk.w.of(kk, ek)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Ik.none = Dk.w.empty;
    class zk extends Ik {
      constructor(kk) {
        let {
          start: ek,
          end: ik
        } = Ek(kk);
        super(ek ? -1 : 5e8, ik ? 1 : -6e8, null, kk), this.tagName = kk.tagName || "span", this.attrs = kk.class && kk.attributes ? jk(kk.attributes, {
          class: kk.class
        }) : kk.class ? {
          class: kk.class
        } : kk.attributes || sk
      }
      eq(kk) {
        return this == kk || kk instanceof zk && this.tagName == kk.tagName && dk(this.attrs, kk.attrs)
      }
      range(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        if (kk >= ek) throw new RangeError("Mark decorations may not be empty");
        return super.range(kk, ek)
      }
    }
    zk.prototype.point = !1;
    class Qk extends Ik {
      constructor(kk) {
        super(-2e8, -2e8, null, kk)
      }
      eq(kk) {
        return kk instanceof Qk && this.spec.class == kk.spec.class && dk(this.spec.attributes, kk.spec.attributes)
      }
      range(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        if (ek != kk) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(kk, ek)
      }
    }
    Qk.prototype.mapMode = Dk.p.TrackBefore, Qk.prototype.point = !0;
    class vk extends Ik {
      constructor(kk, ek, ik, fk, Sk, bk) {
        super(ek, ik, Sk, kk), this.block = fk, this.isReplace = bk, this.mapMode = fk ? ek <= 0 ? Dk.p.TrackBefore : Dk.p.TrackAfter : Dk.p.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? qk.WidgetRange : this.startSide <= 0 ? qk.WidgetBefore : qk.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(kk) {
        return kk instanceof vk && (ek = this.widget, ik = kk.widget, ek == ik || !!(ek && ik && ek.compare(ik))) && this.block == kk.block && this.startSide == kk.startSide && this.endSide == kk.endSide;
        var ek, ik
      }
      range(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        if (this.isReplace && (kk > ek || kk == ek && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && ek != kk) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(kk, ek)
      }
    }

    function Ek(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: ik,
          inclusiveEnd: Dk
        } = kk;
      return null == ik && (ik = kk.inclusive), null == Dk && (Dk = kk.inclusive), {
        start: null !== ik && void 0 !== ik ? ik : ek,
        end: null !== Dk && void 0 !== Dk ? Dk : ek
      }
    }

    function hk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        fk = ik.length - 1;
      fk >= 0 && ik[fk] + Dk >= kk ? ik[fk] = Math.max(ik[fk], ek) : ik.push(kk, ek)
    }
    vk.prototype.point = !0;
    class ak extends Dk.A {
      constructor(kk, ek) {
        super(), this.tagName = kk, this.attributes = ek
      }
      eq(kk) {
        return kk == this || kk instanceof ak && this.tagName == kk.tagName && dk(this.attributes, kk.attributes)
      }
      static create(kk) {
        return new ak(kk.tagName, kk.attributes || sk)
      }
      static set(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Dk.w.of(kk, ek)
      }
    }

    function Wk(kk) {
      let ek;
      return ek = 11 == kk.nodeType ? kk.getSelection ? kk : kk.ownerDocument : kk, ek.getSelection()
    }

    function tk(kk, ek) {
      return !!ek && (kk == ek || kk.contains(1 != ek.nodeType ? ek.parentNode : ek))
    }

    function Xk(kk, ek) {
      if (!ek.anchorNode) return !1;
      try {
        return tk(kk, ek.anchorNode)
      } catch (ik) {
        return !1
      }
    }

    function Bk(kk) {
      return 3 == kk.nodeType ? fe(kk, 0, kk.nodeValue.length).getClientRects() : 1 == kk.nodeType ? kk.getClientRects() : []
    }

    function ck(kk, ek, ik, Dk) {
      return !!ik && (Ok(kk, ek, ik, Dk, -1) || Ok(kk, ek, ik, Dk, 1))
    }

    function Tk(kk) {
      for (var ek = 0;; ek++)
        if (!(kk = kk.previousSibling)) return ek
    }

    function Zk(kk) {
      return 1 == kk.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(kk.nodeName)
    }

    function Ok(kk, ek, ik, Dk, fk) {
      for (;;) {
        if (kk == ik && ek == Dk) return !0;
        if (ek == (fk < 0 ? 0 : gk(kk))) {
          if ("DIV" == kk.nodeName) return !1;
          let ik = kk.parentNode;
          if (!ik || 1 != ik.nodeType) return !1;
          ek = Tk(kk) + (fk < 0 ? 0 : 1), kk = ik
        } else {
          if (1 != kk.nodeType) return !1;
          if (1 == (kk = kk.childNodes[ek + (fk < 0 ? -1 : 0)]).nodeType && "false" == kk.contentEditable) return !1;
          ek = fk < 0 ? gk(kk) : 0
        }
      }
    }

    function gk(kk) {
      return 3 == kk.nodeType ? kk.nodeValue.length : kk.childNodes.length
    }

    function Gk(kk, ek) {
      let ik = ek ? kk.left : kk.right;
      return {
        left: ik,
        right: ik,
        top: kk.top,
        bottom: kk.bottom
      }
    }

    function Nk(kk) {
      let ek = kk.visualViewport;
      return ek ? {
        left: 0,
        right: ek.width,
        top: 0,
        bottom: ek.height
      } : {
        left: 0,
        right: kk.innerWidth,
        top: 0,
        bottom: kk.innerHeight
      }
    }

    function Rk(kk, ek) {
      let ik = ek.width / kk.offsetWidth,
        Dk = ek.height / kk.offsetHeight;
      return (ik > .995 && ik < 1.005 || !isFinite(ik) || Math.abs(ek.width - kk.offsetWidth) < 1) && (ik = 1), (Dk > .995 && Dk < 1.005 || !isFinite(Dk) || Math.abs(ek.height - kk.offsetHeight) < 1) && (Dk = 1), {
        scaleX: ik,
        scaleY: Dk
      }
    }

    function Jk(kk) {
      let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        ik = kk.ownerDocument,
        Dk = null,
        fk = null;
      for (let Sk = kk.parentNode; Sk && (Sk != ik.body && (ek && !Dk || !fk));)
        if (1 == Sk.nodeType) !fk && Sk.scrollHeight > Sk.clientHeight && (fk = Sk), ek && !Dk && Sk.scrollWidth > Sk.clientWidth && (Dk = Sk), Sk = Sk.assignedSlot || Sk.parentNode;
        else {
          if (11 != Sk.nodeType) break;
          Sk = Sk.host
        } return {
        x: Dk,
        y: fk
      }
    }
    ak.prototype.startSide = ak.prototype.endSide = -1;
    class ke {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(kk) {
        return this.anchorNode == kk.anchorNode && this.anchorOffset == kk.anchorOffset && this.focusNode == kk.focusNode && this.focusOffset == kk.focusOffset
      }
      setRange(kk) {
        let {
          anchorNode: ek,
          focusNode: ik
        } = kk;
        this.set(ek, Math.min(kk.anchorOffset, ek ? gk(ek) : 0), ik, Math.min(kk.focusOffset, ik ? gk(ik) : 0))
      }
      set(kk, ek, ik, Dk) {
        this.anchorNode = kk, this.anchorOffset = ek, this.focusNode = ik, this.focusOffset = Dk
      }
    }
    let ee, ie = null;

    function De(kk) {
      if (kk.setActive) return kk.setActive();
      if (ie) return kk.focus(ie);
      let ek = [];
      for (let ik = kk; ik && (ek.push(ik, ik.scrollTop, ik.scrollLeft), ik != ik.ownerDocument); ik = ik.parentNode);
      if (kk.focus(null == ie ? {
          get preventScroll() {
            return ie = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !ie) {
        ie = !1;
        for (let kk = 0; kk < ek.length;) {
          let ik = ek[kk++],
            Dk = ek[kk++],
            fk = ek[kk++];
          ik.scrollTop != Dk && (ik.scrollTop = Dk), ik.scrollLeft != fk && (ik.scrollLeft = fk)
        }
      }
    }

    function fe(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ek,
        Dk = ee || (ee = document.createRange());
      return Dk.setEnd(kk, ik), Dk.setStart(kk, ek), Dk
    }

    function Se(kk, ek, ik, Dk) {
      let fk = {
        key: ek,
        code: ek,
        keyCode: ik,
        which: ik,
        cancelable: !0
      };
      Dk && ({
        altKey: fk.altKey,
        ctrlKey: fk.ctrlKey,
        shiftKey: fk.shiftKey,
        metaKey: fk.metaKey
      } = Dk);
      let Sk = new KeyboardEvent("keydown", fk);
      Sk.synthetic = !0, kk.dispatchEvent(Sk);
      let bk = new KeyboardEvent("keyup", fk);
      return bk.synthetic = !0, kk.dispatchEvent(bk), Sk.defaultPrevented || bk.defaultPrevented
    }

    function be(kk) {
      return kk instanceof Window ? kk.pageYOffset > Math.max(0, kk.document.documentElement.scrollHeight - kk.innerHeight - 4) : kk.scrollTop > Math.max(1, kk.scrollHeight - kk.clientHeight - 4)
    }

    function re(kk, ek) {
      for (let ik = kk, Dk = ek;;) {
        if (3 == ik.nodeType && Dk > 0) return {
          node: ik,
          offset: Dk
        };
        if (1 == ik.nodeType && Dk > 0) {
          if ("false" == ik.contentEditable) return null;
          ik = ik.childNodes[Dk - 1], Dk = gk(ik)
        } else {
          if (!ik.parentNode || Zk(ik)) return null;
          Dk = Tk(ik), ik = ik.parentNode
        }
      }
    }

    function Pe(kk, ek) {
      for (let ik = kk, Dk = ek;;) {
        if (3 == ik.nodeType && Dk < ik.nodeValue.length) return {
          node: ik,
          offset: Dk
        };
        if (1 == ik.nodeType && Dk < ik.childNodes.length) {
          if ("false" == ik.contentEditable) return null;
          ik = ik.childNodes[Dk], Dk = 0
        } else {
          if (!ik.parentNode || Zk(ik)) return null;
          Dk = Tk(ik) + 1, ik = ik.parentNode
        }
      }
    }
    Ak.safari && Ak.safari_version >= 26 && (ie = !1);
    class me {
      constructor(kk, ek) {
        let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = kk, this.offset = ek, this.precise = ik
      }
      static before(kk, ek) {
        return new me(kk.parentNode, Tk(kk), ek)
      }
      static after(kk, ek) {
        return new me(kk.parentNode, Tk(kk) + 1, ek)
      }
    }
    var Me = function(kk) {
      return kk[kk.LTR = 0] = "LTR", kk[kk.RTL = 1] = "RTL", kk
    }(Me || (Me = {}));
    const Ke = Me.LTR,
      xe = Me.RTL;

    function ne(kk) {
      let ek = [];
      for (let ik = 0; ik < kk.length; ik++) ek.push(1 << +kk[ik]);
      return ek
    }
    const Ue = ne("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      He = ne("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      we = Object.create(null),
      le = [];
    for (let Eb of ["()", "[]", "{}"]) {
      let kk = Eb.charCodeAt(0),
        ek = Eb.charCodeAt(1);
      we[kk] = ek, we[ek] = -kk
    }

    function pe(kk) {
      return kk <= 247 ? Ue[kk] : 1424 <= kk && kk <= 1524 ? 2 : 1536 <= kk && kk <= 1785 ? He[kk - 1536] : 1774 <= kk && kk <= 2220 ? 4 : 8192 <= kk && kk <= 8204 ? 256 : 64336 <= kk && kk <= 65023 ? 4 : 1
    }
    const ye = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class Ye {
      get dir() {
        return this.level % 2 ? xe : Ke
      }
      constructor(kk, ek, ik) {
        this.from = kk, this.to = ek, this.level = ik
      }
      side(kk, ek) {
        return this.dir == ek == kk ? this.to : this.from
      }
      forward(kk, ek) {
        return kk == (this.dir == ek)
      }
      static find(kk, ek, ik, Dk) {
        let fk = -1;
        for (let Sk = 0; Sk < kk.length; Sk++) {
          let bk = kk[Sk];
          if (bk.from <= ek && bk.to >= ek) {
            if (bk.level == ik) return Sk;
            (fk < 0 || (0 != Dk ? Dk < 0 ? bk.from < ek : bk.to > ek : kk[fk].level > bk.level)) && (fk = Sk)
          }
        }
        if (fk < 0) throw new RangeError("Index out of range");
        return fk
      }
    }

    function Le(kk, ek) {
      if (kk.length != ek.length) return !1;
      for (let ik = 0; ik < kk.length; ik++) {
        let Dk = kk[ik],
          fk = ek[ik];
        if (Dk.from != fk.from || Dk.to != fk.to || Dk.direction != fk.direction || !Le(Dk.inner, fk.inner)) return !1
      }
      return !0
    }
    const Ce = [];

    function Ae(kk, ek, ik, Dk, fk, Sk, bk) {
      let rk = Dk % 2 ? 2 : 1;
      if (Dk % 2 == fk % 2)
        for (let Pk = ek, mk = 0; Pk < ik;) {
          let ek = !0,
            Mk = !1;
          if (mk == Sk.length || Pk < Sk[mk].from) {
            let kk = Ce[Pk];
            kk != rk && (ek = !1, Mk = 16 == kk)
          }
          let Kk = ek || 1 != rk ? null : [],
            xk = ek ? Dk : Dk + 1,
            nk = Pk;
          kk: for (;;)
            if (mk < Sk.length && nk == Sk[mk].from) {
              if (Mk) break kk;
              let Uk = Sk[mk];
              if (!ek)
                for (let kk = Uk.to, ek = mk + 1;;) {
                  if (kk == ik) break kk;
                  if (!(ek < Sk.length && Sk[ek].from == kk)) {
                    if (Ce[kk] == rk) break kk;
                    break
                  }
                  kk = Sk[ek++].to
                }
              if (mk++, Kk) Kk.push(Uk);
              else {
                Uk.from > Pk && bk.push(new Ye(Pk, Uk.from, xk)), je(kk, Uk.direction == Ke != !(xk % 2) ? Dk + 1 : Dk, fk, Uk.inner, Uk.from, Uk.to, bk), Pk = Uk.to
              }
              nk = Uk.to
            } else {
              if (nk == ik || (ek ? Ce[nk] != rk : Ce[nk] == rk)) break;
              nk++
            } Kk ? Ae(kk, Pk, nk, Dk + 1, fk, Kk, bk) : Pk < nk && bk.push(new Ye(Pk, nk, xk)), Pk = nk
        } else
          for (let Pk = ik, mk = Sk.length; Pk > ek;) {
            let ik = !0,
              Mk = !1;
            if (!mk || Pk > Sk[mk - 1].to) {
              let kk = Ce[Pk - 1];
              kk != rk && (ik = !1, Mk = 16 == kk)
            }
            let Kk = ik || 1 != rk ? null : [],
              xk = ik ? Dk : Dk + 1,
              nk = Pk;
            kk: for (;;)
              if (mk && nk == Sk[mk - 1].to) {
                if (Mk) break kk;
                let Uk = Sk[--mk];
                if (!ik)
                  for (let kk = Uk.from, ik = mk;;) {
                    if (kk == ek) break kk;
                    if (!ik || Sk[ik - 1].to != kk) {
                      if (Ce[kk - 1] == rk) break kk;
                      break
                    }
                    kk = Sk[--ik].from
                  }
                if (Kk) Kk.push(Uk);
                else {
                  Uk.to < Pk && bk.push(new Ye(Uk.to, Pk, xk)), je(kk, Uk.direction == Ke != !(xk % 2) ? Dk + 1 : Dk, fk, Uk.inner, Uk.from, Uk.to, bk), Pk = Uk.from
                }
                nk = Uk.from
              } else {
                if (nk == ek || (ik ? Ce[nk - 1] != rk : Ce[nk - 1] == rk)) break;
                nk--
              } Kk ? Ae(kk, nk, Pk, Dk + 1, fk, Kk, bk) : nk < Pk && bk.push(new Ye(nk, Pk, xk)), Pk = nk
          }
    }

    function je(kk, ek, ik, Dk, fk, Sk, bk) {
      let rk = ek % 2 ? 2 : 1;
      ! function(kk, ek, ik, Dk, fk) {
        for (let Sk = 0; Sk <= Dk.length; Sk++) {
          let bk = Sk ? Dk[Sk - 1].to : ek,
            rk = Sk < Dk.length ? Dk[Sk].from : ik,
            Pk = Sk ? 256 : fk;
          for (let ek = bk, ik = Pk, Dk = Pk; ek < rk; ek++) {
            let fk = pe(kk.charCodeAt(ek));
            512 == fk ? fk = ik : 8 == fk && 4 == Dk && (fk = 16), Ce[ek] = 4 == fk ? 2 : fk, 7 & fk && (Dk = fk), ik = fk
          }
          for (let kk = bk, ek = Pk, Dk = Pk; kk < rk; kk++) {
            let fk = Ce[kk];
            if (128 == fk) kk < rk - 1 && ek == Ce[kk + 1] && 24 & ek ? fk = Ce[kk] = ek : Ce[kk] = 256;
            else if (64 == fk) {
              let fk = kk + 1;
              for (; fk < rk && 64 == Ce[fk];) fk++;
              let Sk = kk && 8 == ek || fk < ik && 8 == Ce[fk] ? 1 == Dk ? 1 : 8 : 256;
              for (let ek = kk; ek < fk; ek++) Ce[ek] = Sk;
              kk = fk - 1
            } else 8 == fk && 1 == Dk && (Ce[kk] = 1);
            ek = fk, 7 & fk && (Dk = fk)
          }
        }
      }(kk, fk, Sk, Dk, rk),
      function(kk, ek, ik, Dk, fk) {
        let Sk = 1 == fk ? 2 : 1;
        for (let bk = 0, rk = 0, Pk = 0; bk <= Dk.length; bk++) {
          let mk = bk ? Dk[bk - 1].to : ek,
            Mk = bk < Dk.length ? Dk[bk].from : ik;
          for (let ek, ik, Dk, bk = mk; bk < Mk; bk++)
            if (ik = we[ek = kk.charCodeAt(bk)])
              if (ik < 0) {
                for (let kk = rk - 3; kk >= 0; kk -= 3)
                  if (le[kk + 1] == -ik) {
                    let ek = le[kk + 2],
                      ik = 2 & ek ? fk : 4 & ek ? 1 & ek ? Sk : fk : 0;
                    ik && (Ce[bk] = Ce[le[kk]] = ik), rk = kk;
                    break
                  }
              } else {
                if (189 == le.length) break;
                le[rk++] = bk, le[rk++] = ek, le[rk++] = Pk
              }
          else if (2 == (Dk = Ce[bk]) || 1 == Dk) {
            let kk = Dk == fk;
            Pk = kk ? 0 : 1;
            for (let ek = rk - 3; ek >= 0; ek -= 3) {
              let ik = le[ek + 2];
              if (2 & ik) break;
              if (kk) le[ek + 2] |= 2;
              else {
                if (4 & ik) break;
                le[ek + 2] |= 4
              }
            }
          }
        }
      }(kk, fk, Sk, Dk, rk),
      function(kk, ek, ik, Dk) {
        for (let fk = 0, Sk = Dk; fk <= ik.length; fk++) {
          let bk = fk ? ik[fk - 1].to : kk,
            rk = fk < ik.length ? ik[fk].from : ek;
          for (let Pk = bk; Pk < rk;) {
            let bk = Ce[Pk];
            if (256 == bk) {
              let bk = Pk + 1;
              for (;;)
                if (bk == rk) {
                  if (fk == ik.length) break;
                  bk = ik[fk++].to, rk = fk < ik.length ? ik[fk].from : ek
                } else {
                  if (256 != Ce[bk]) break;
                  bk++
                } let mk = 1 == Sk,
                Mk = mk == (1 == (bk < ek ? Ce[bk] : Dk)) ? mk ? 1 : 2 : Dk;
              for (let ek = bk, Dk = fk, Sk = Dk ? ik[Dk - 1].to : kk; ek > Pk;) ek == Sk && (ek = ik[--Dk].from, Sk = Dk ? ik[Dk - 1].to : kk), Ce[--ek] = Mk;
              Pk = bk
            } else Sk = bk, Pk++
          }
        }
      }(fk, Sk, Dk, rk), Ae(kk, fk, Sk, ek, ik, Dk, bk)
    }

    function se(kk, ek, ik) {
      if (!kk) return [new Ye(0, 0, ek == xe ? 1 : 0)];
      if (ek == Ke && !ik.length && !ye.test(kk)) return de(kk.length);
      if (ik.length)
        for (; kk.length > Ce.length;) Ce[Ce.length] = 256;
      let Dk = [],
        fk = ek == Ke ? 0 : 1;
      return je(kk, fk, fk, ik, 0, kk.length, Dk), Dk
    }

    function de(kk) {
      return [new Ye(0, kk, 0)]
    }
    let Ve = "";

    function Fe(kk, ek, ik, fk, Sk) {
      var bk;
      let rk = fk.head - kk.from,
        Pk = Ye.find(ek, rk, null !== (bk = fk.bidiLevel) && void 0 !== bk ? bk : -1, fk.assoc),
        mk = ek[Pk],
        Mk = mk.side(Sk, ik);
      if (rk == Mk) {
        let kk = Pk += Sk ? 1 : -1;
        if (kk < 0 || kk >= ek.length) return null;
        mk = ek[Pk = kk], rk = mk.side(!Sk, ik), Mk = mk.side(Sk, ik)
      }
      let Kk = (0, Dk.U)(kk.text, rk, mk.forward(Sk, ik));
      (Kk < mk.from || Kk > mk.to) && (Kk = Mk), Ve = kk.text.slice(Math.min(rk, Kk), Math.max(rk, Kk));
      let xk = Pk == (Sk ? ek.length - 1 : 0) ? null : ek[Pk + (Sk ? 1 : -1)];
      return xk && Kk == Mk && xk.level + (Sk ? 0 : 1) < mk.level ? Dk.h.cursor(xk.side(!Sk, ik) + kk.from, xk.forward(Sk, ik) ? 1 : -1, xk.level) : Dk.h.cursor(Kk + kk.from, mk.forward(Sk, ik) ? -1 : 1, mk.level)
    }

    function ue(kk, ek, ik) {
      for (let Dk = ek; Dk < ik; Dk++) {
        let ek = pe(kk.charCodeAt(Dk));
        if (1 == ek) return Ke;
        if (2 == ek || 4 == ek) return xe
      }
      return Ke
    }
    const qe = Dk.n.define(),
      Ie = Dk.n.define(),
      ze = Dk.n.define(),
      Qe = Dk.n.define(),
      ve = Dk.n.define(),
      Ee = Dk.n.define(),
      he = Dk.n.define(),
      ae = Dk.n.define(),
      We = Dk.n.define(),
      te = Dk.n.define({
        combine: kk => kk.some((kk => kk))
      }),
      Xe = Dk.n.define({
        combine: kk => kk.some((kk => kk))
      }),
      Be = Dk.n.define();
    class ce {
      constructor(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = kk, this.y = ek, this.x = ik, this.yMargin = Dk, this.xMargin = fk, this.isSnapshot = Sk
      }
      map(kk) {
        return kk.empty ? this : new ce(this.range.map(kk), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(kk) {
        return this.range.to <= kk.doc.length ? this : new ce(Dk.h.cursor(kk.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const Te = Dk.D.define({
        map: (kk, ek) => kk.map(ek)
      }),
      oe = Dk.D.define();

    function Ze(kk, ek, ik) {
      let Dk = kk.facet(Qe);
      Dk.length ? Dk[0](ek) : window.onerror && window.onerror(String(ek), ik, void 0, void 0, ek) || (ik ? console.error(ik + ":", ek) : console.error(ek))
    }
    const Oe = Dk.n.define({
      combine: kk => !kk.length || kk[0]
    });
    let ge = 0;
    const Ge = Dk.n.define({
      combine: kk => kk.filter(((ek, ik) => {
        for (let Dk = 0; Dk < ik; Dk++)
          if (kk[Dk].plugin == ek.plugin) return !1;
        return !0
      }))
    });
    class Ne {
      constructor(kk, ek, ik, Dk, fk) {
        this.id = kk, this.create = ek, this.domEventHandlers = ik, this.domEventObservers = Dk, this.baseExtensions = fk(this), this.extension = this.baseExtensions.concat(Ge.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(kk) {
        return this.baseExtensions.concat(Ge.of({
          plugin: this,
          arg: kk
        }))
      }
      static define(kk, ek) {
        const {
          eventHandlers: ik,
          eventObservers: Dk,
          provide: fk,
          oD: Sk
        } = ek || {};
        return new Ne(ge++, kk, ik, Dk, (kk => {
          let ek = [];
          return Sk && ek.push(ei.of((ek => {
            let ik = ek.plugin(kk);
            return ik ? Sk(ik) : Ik.none
          }))), fk && ek.push(fk(kk)), ek
        }))
      }
      static fromClass(kk, ek) {
        return Ne.define(((ek, ik) => new kk(ek, ik)), ek)
      }
    }
    class Re {
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
            } catch (ek) {
              if (Ze(kk.state, ek, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (ik) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(kk, this.spec.arg)
        } catch (ek) {
          Ze(kk.state, ek, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(kk) {
        var ek;
        if (null === (ek = this.value) || void 0 === ek ? void 0 : ek.destroy) try {
          this.value.destroy()
        } catch (ik) {
          Ze(kk.state, ik, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const Je = Dk.n.define(),
      ki = Dk.n.define(),
      ei = Dk.n.define(),
      ii = Dk.n.define(),
      Di = Dk.n.define(),
      fi = Dk.n.define(),
      Si = Dk.n.define();

    function bi(kk, ek) {
      let ik = kk.state.facet(Si);
      if (!ik.length) return ik;
      let fk = ik.map((ek => ek instanceof Function ? ek(kk) : ek)),
        Sk = [];
      return Dk.w.spans(fk, ek.from, ek.to, {
        point() {},
        span(kk, ik, Dk, fk) {
          let bk = kk - ek.from,
            rk = ik - ek.from,
            Pk = Sk;
          for (let Sk = Dk.length - 1; Sk >= 0; Sk--, fk--) {
            let kk, ik = Dk[Sk].spec.bidiIsolate;
            if (null == ik && (ik = ue(ek.text, bk, rk)), fk > 0 && Pk.length && (kk = Pk[Pk.length - 1]).to == bk && kk.direction == ik) kk.to = rk, Pk = kk.inner;
            else {
              let kk = {
                from: bk,
                to: rk,
                direction: ik,
                inner: []
              };
              Pk.push(kk), Pk = kk.inner
            }
          }
        }
      }), Sk
    }
    const ri = Dk.n.define();

    function Pi(kk) {
      let ek = 0,
        ik = 0,
        Dk = 0,
        fk = 0;
      for (let Sk of kk.state.facet(ri)) {
        let bk = Sk(kk);
        bk && (null != bk.left && (ek = Math.max(ek, bk.left)), null != bk.right && (ik = Math.max(ik, bk.right)), null != bk.top && (Dk = Math.max(Dk, bk.top)), null != bk.bottom && (fk = Math.max(fk, bk.bottom)))
      }
      return {
        left: ek,
        right: ik,
        top: Dk,
        bottom: fk
      }
    }
    const mi = Dk.n.define();
    class Mi {
      constructor(kk, ek, ik, Dk) {
        this.fromA = kk, this.toA = ek, this.fromB = ik, this.toB = Dk
      }
      join(kk) {
        return new Mi(Math.min(this.fromA, kk.fromA), Math.max(this.toA, kk.toA), Math.min(this.fromB, kk.fromB), Math.max(this.toB, kk.toB))
      }
      addToSet(kk) {
        let ek = kk.length,
          ik = this;
        for (; ek > 0; ek--) {
          let Dk = kk[ek - 1];
          if (!(Dk.fromA > ik.toA)) {
            if (Dk.toA < ik.fromA) break;
            ik = ik.join(Dk), kk.splice(ek - 1, 1)
          }
        }
        return kk.splice(ek, 0, ik), kk
      }
      static extendWithRanges(kk, ek) {
        if (0 == ek.length) return kk;
        let ik = [];
        for (let Dk = 0, fk = 0, Sk = 0;;) {
          let bk = Dk < kk.length ? kk[Dk].fromB : 1e9,
            rk = fk < ek.length ? ek[fk] : 1e9,
            Pk = Math.min(bk, rk);
          if (1e9 == Pk) break;
          let mk = Pk + Sk,
            Mk = Pk,
            Kk = mk;
          for (;;)
            if (fk < ek.length && ek[fk] <= Mk) {
              let ik = ek[fk + 1];
              fk += 2, Mk = Math.max(Mk, ik);
              for (let ek = Dk; ek < kk.length && kk[ek].fromB <= Mk; ek++) Sk = kk[ek].toA - kk[ek].toB;
              Kk = Math.max(Kk, ik + Sk)
            } else {
              if (!(Dk < kk.length && kk[Dk].fromB <= Mk)) break;
              {
                let ek = kk[Dk++];
                Mk = Math.max(Mk, ek.toB), Kk = Math.max(Kk, ek.toA), Sk = ek.toA - ek.toB
              }
            } ik.push(new Mi(mk, Kk, Pk, Mk))
        }
        return ik
      }
    }
    class Ki {
      constructor(kk, ek, ik) {
        this.view = kk, this.state = ek, this.transactions = ik, this.flags = 0, this.startState = kk.state, this.changes = Dk.ChangeSet.empty(this.startState.doc.length);
        for (let Dk of ik) this.changes = this.changes.compose(Dk.changes);
        let fk = [];
        this.changes.iterChangedRanges(((kk, ek, ik, Dk) => fk.push(new Mi(kk, ek, ik, Dk)))), this.changedRanges = fk
      }
      static create(kk, ek, ik) {
        return new Ki(kk, ek, ik)
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
    const xi = [];
    class ni {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = kk, this.length = ek, this.flags = ik, this.parent = null, kk.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return xi
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
          kk && function(kk, ek) {
            for (let ik = kk.attributes.length - 1; ik >= 0; ik--) {
              let Dk = kk.attributes[ik].name;
              null == ek[Dk] && kk.removeAttribute(Dk)
            }
            for (let ik in ek) {
              let Dk = ek[ik];
              "style" == ik ? kk.style.cssText = Dk : kk.getAttribute(ik) != Dk && kk.setAttribute(ik, Dk)
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
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let ik of this.children) {
          if (ik == kk) return ek;
          ek += ik.length + ik.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(kk) {
        return this.posBefore(kk) + kk.length
      }
      covers(kk) {
        return !0
      }
      coordsIn(kk, ek) {
        return null
      }
      domPosFor(kk, ek) {
        let ik = Tk(this.dom),
          Dk = this.length ? kk > 0 : ek > 0;
        return new me(this.parent.dom, ik + (Dk ? 1 : 0), 0 == kk || kk == this.length)
      }
      markDirty(kk) {
        this.flags &= -3, kk && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let kk = this; kk; kk = kk.parent)
          if (kk instanceof wi) return kk;
        return null
      }
      static get(kk) {
        return kk.cmTile
      }
    }
    class Ui extends ni {
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
        let ek, ik = this.dom,
          Dk = null,
          fk = (null === kk || void 0 === kk ? void 0 : kk.node) == ik ? kk : null,
          Sk = 0;
        for (let bk of this.children) {
          if (bk.sync(kk), Sk += bk.length + bk.breakAfter, ek = Dk ? Dk.nextSibling : ik.firstChild, fk && ek != bk.dom && (fk.written = !0), bk.dom.parentNode == ik)
            for (; ek && ek != bk.dom;) ek = Hi(ek);
          else ik.insertBefore(bk.dom, ek);
          Dk = bk.dom
        }
        for (ek = Dk ? Dk.nextSibling : ik.firstChild, fk && ek && (fk.written = !0); ek;) ek = Hi(ek);
        this.length = Sk
      }
    }

    function Hi(kk) {
      let ek = kk.nextSibling;
      return kk.parentNode.removeChild(kk), ek
    }
    class wi extends Ui {
      constructor(kk, ek) {
        super(ek), this.view = kk
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
          let ek = ni.get(kk);
          if (ek && this.owns(ek)) return ek;
          kk = kk.parentNode
        }
      }
      blockTiles(kk) {
        for (let ek = [], ik = this, Dk = 0, fk = 0;;)
          if (Dk == ik.children.length) {
            if (!ek.length) return;
            ik = ik.parent, ik.breakAfter && fk++, Dk = ek.pop()
          } else {
            let Sk = ik.children[Dk++];
            if (Sk instanceof li) ek.push(Dk), ik = Sk, Dk = 0;
            else {
              let ek = fk + Sk.length,
                ik = kk(Sk, fk);
              if (void 0 !== ik) return ik;
              fk = ek + Sk.breakAfter
            }
          }
      }
      resolveBlock(kk, ek) {
        let ik, Dk, fk = -1,
          Sk = -1;
        if (this.blockTiles(((bk, rk) => {
            let Pk = rk + bk.length;
            if (kk >= rk && kk <= Pk) {
              if (bk.isWidget() && ek >= -1 && ek <= 1) {
                if (32 & bk.flags) return !0;
                16 & bk.flags && (ik = void 0)
              }(rk < kk || kk == Pk && (ek < -1 ? bk.length : bk.covers(1))) && (!ik || !bk.isWidget() && ik.isWidget()) && (ik = bk, fk = kk - rk), (Pk > kk || kk == rk && (ek > 1 ? bk.length : bk.covers(-1))) && (!Dk || !bk.isWidget() && Dk.isWidget()) && (Dk = bk, Sk = kk - rk)
            }
          })), !ik && !Dk) throw new Error("No tile at position " + kk);
        return ik && ek < 0 || !Dk ? {
          tile: ik,
          offset: fk
        } : {
          tile: Dk,
          offset: Sk
        }
      }
    }
    class li extends Ui {
      constructor(kk, ek) {
        super(kk), this.wrapper = ek
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
      static of (kk, ek) {
        let ik = new li(ek || document.createElement(kk.tagName), kk);
        return ek || (ik.flags |= 4), ik
      }
    }
    class yi extends Ui {
      constructor(kk, ek) {
        super(kk), this.attrs = ek
      }
      isLine() {
        return !0
      }
      static start(kk, ek, ik) {
        let Dk = new yi(ek || document.createElement("div"), kk);
        return ek && ik || (Dk.flags |= 4), Dk
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(kk, ek, ik) {
        let Dk = null,
          fk = -1,
          Sk = null,
          bk = -1;
        ! function kk(rk, Pk) {
          for (let mk = 0, Mk = 0; mk < rk.children.length && Mk <= Pk; mk++) {
            let Kk = rk.children[mk],
              xk = Mk + Kk.length;
            xk >= Pk && (Kk.isComposite() ? kk(Kk, Pk - Mk) : (!Sk || Sk.isHidden && (ek > 0 || ik && Yi(Sk, Kk))) && (xk > Pk || 32 & Kk.flags) ? (Sk = Kk, bk = Pk - Mk) : (Mk < Pk || 16 & Kk.flags && !Kk.isHidden) && (Dk = Kk, fk = Pk - Mk)), Mk = xk
          }
        }(this, kk);
        let rk = (ek < 0 ? Dk : Sk) || Dk || Sk;
        return rk ? {
          tile: rk,
          offset: rk == Dk ? fk : bk
        } : null
      }
      coordsIn(kk, ek) {
        let ik = this.resolveInline(kk, ek, !0);
        return ik ? ik.tile.coordsIn(Math.max(0, ik.offset), ek) : function(kk) {
          let ek = kk.dom.lastChild;
          if (!ek) return kk.dom.getBoundingClientRect();
          let ik = Bk(ek);
          return ik[ik.length - 1] || null
        }(this)
      }
      domIn(kk, ek) {
        let ik = this.resolveInline(kk, ek);
        if (ik) {
          let {
            tile: kk,
            offset: Dk
          } = ik;
          if (this.dom.contains(kk.dom)) return kk.isText() ? new me(kk.dom, Math.min(kk.dom.nodeValue.length, Dk)) : kk.domPosFor(Dk, 16 & kk.flags ? 1 : 32 & kk.flags ? -1 : ek);
          let fk = ik.tile.parent,
            Sk = !1;
          for (let ek of fk.children) {
            if (Sk) return new me(ek.dom, 0);
            ek == ik.tile && (Sk = !0)
          }
        }
        return new me(this.dom, 0)
      }
    }

    function Yi(kk, ek) {
      let ik = kk.coordsIn(0, 1),
        Dk = ek.coordsIn(0, 1);
      return ik && Dk && Dk.top < ik.bottom
    }
    class Li extends Ui {
      constructor(kk, ek) {
        super(kk), this.mark = ek
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (kk, ek) {
        let ik = new Li(ek || document.createElement(kk.tagName), kk);
        return ek || (ik.flags |= 4), ik
      }
    }
    class Ci extends ni {
      constructor(kk, ek) {
        super(kk, ek.length), this.text = ek
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
      coordsIn(kk, ek) {
        let ik = this.dom.nodeValue.length;
        kk > ik && (kk = ik);
        let Dk = kk,
          fk = kk,
          Sk = 0;
        0 == kk && ek < 0 || kk == ik && ek >= 0 ? Ak.chrome || Ak.gecko || (kk ? (Dk--, Sk = 1) : fk < ik && (fk++, Sk = -1)) : ek < 0 ? Dk-- : fk < ik && fk++;
        let bk = fe(this.dom, Dk, fk).getClientRects();
        if (!bk.length) return null;
        let rk = bk[(Sk ? Sk < 0 : ek >= 0) ? 0 : bk.length - 1];
        return Ak.safari && !Sk && 0 == rk.width && (rk = Array.prototype.find.call(bk, (kk => kk.width)) || rk), Sk ? Gk(rk, Sk < 0) : rk || null
      }
      static of (kk, ek) {
        let ik = new Ci(ek || document.createTextNode(kk), kk);
        return ek || (ik.flags |= 2), ik
      }
    }
    class Ai extends ni {
      constructor(kk, ek, ik, Dk) {
        super(kk, ek, Dk), this.widget = ik
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
      coordsIn(kk, ek) {
        return this.coordsInWidget(kk, ek, !1)
      }
      coordsInWidget(kk, ek, ik) {
        let Dk = this.widget.coordsAt(this.dom, kk, ek);
        if (Dk) return Dk;
        if (ik) return Gk(this.dom.getBoundingClientRect(), this.length ? 0 == kk : ek <= 0);
        {
          let ek = this.dom.getClientRects(),
            ik = null;
          if (!ek.length) return null;
          let Dk = !!(16 & this.flags) || !(32 & this.flags) && kk > 0;
          for (let fk = Dk ? ek.length - 1 : 0; ik = ek[fk], !(kk > 0 ? 0 == fk : fk == ek.length - 1 || ik.top < ik.bottom); fk += Dk ? -1 : 1);
          return Gk(ik, !Dk)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Dk.I.empty;
        let {
          root: kk
        } = this;
        if (!kk) return Dk.I.empty;
        let ek = this.posAtStart;
        return kk.view.state.doc.slice(ek, ek + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (kk, ek, ik, Dk, fk) {
        return fk || (fk = kk.toDOM(ek), kk.editable || (fk.contentEditable = "false")), new Ai(fk, ik, kk, Dk)
      }
    }
    class ji extends ni {
      constructor(kk) {
        let ek = document.createElement("img");
        ek.className = "cm-widgetBuffer", ek.setAttribute("aria-hidden", "true"), super(ek, 0, kk)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Dk.I.empty
      }
      coordsIn(kk) {
        return this.dom.getBoundingClientRect()
      }
    }
    class si {
      constructor(kk) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = kk
      }
      advance(kk, ek, ik) {
        let {
          tile: Dk,
          index: fk,
          beforeBreak: Sk,
          parents: bk
        } = this;
        for (; kk || ek > 0;)
          if (Dk.isComposite())
            if (Sk) {
              if (!kk) break;
              ik && ik.break(), kk--, Sk = !1
            } else if (fk == Dk.children.length) {
          if (!kk && !bk.length) break;
          ik && ik.leave(Dk), Sk = !!Dk.breakAfter, ({
            tile: Dk,
            index: fk
          } = bk.pop()), fk++
        } else {
          let rk = Dk.children[fk],
            Pk = rk.breakAfter;
          !(ek > 0 ? rk.length <= kk : rk.length < kk) || ik && !1 === ik.skip(rk, 0, rk.length) && rk.isComposite ? (bk.push({
            tile: Dk,
            index: fk
          }), Dk = rk, fk = 0, ik && rk.isComposite() && ik.enter(rk)) : (Sk = !!Pk, fk++, kk -= rk.length)
        } else if (fk == Dk.length) Sk = !!Dk.breakAfter, ({
          tile: Dk,
          index: fk
        } = bk.pop()), fk++;
        else {
          if (!kk) break;
          {
            let ek = Math.min(kk, Dk.length - fk);
            ik && ik.skip(Dk, fk, fk + ek), kk -= ek, fk += ek
          }
        }
        return this.tile = Dk, this.index = fk, this.beforeBreak = Sk, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class di {
      constructor(kk, ek, ik, Dk) {
        this.from = kk, this.to = ek, this.wrapper = ik, this.rank = Dk
      }
    }
    class Vi {
      constructor(kk, ek, ik) {
        this.cache = kk, this.root = ek, this.blockWrappers = ik, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(kk, ek, ik, Dk) {
        var fk;
        this.flushBuffer();
        let Sk = this.ensureMarks(ek, ik),
          bk = Sk.lastChild;
        if (bk && bk.isText() && !(8 & bk.flags) && bk.length + kk.length < 512) {
          this.cache.reused.set(bk, 2), (Sk.children[Sk.children.length - 1] = new Ci(bk.dom, bk.text + kk)).parent = Sk
        } else Sk.append(Dk || Ci.of(kk, null === (fk = this.cache.find(Ci)) || void 0 === fk ? void 0 : fk.dom));
        this.pos += kk.length, this.afterWidget = null
      }
      addComposition(kk, ek) {
        let ik = this.curLine;
        ik.dom != ek.line.dom && (ik.setDOM(this.cache.reused.has(ek.line) ? vi(ek.line.dom) : ek.line.dom), this.cache.reused.set(ek.line, 2));
        let Dk = ik;
        for (let bk = ek.marks.length - 1; bk >= 0; bk--) {
          let kk = ek.marks[bk],
            ik = Dk.lastChild;
          if (ik instanceof Li && ik.mark.eq(kk.mark)) ik.dom != kk.dom && ik.setDOM(vi(kk.dom)), Dk = ik;
          else {
            if (this.cache.reused.get(kk)) {
              let ek = ni.get(kk.dom);
              ek && ek.setDOM(vi(kk.dom))
            }
            let ek = Li.of(kk.mark, kk.dom);
            Dk.append(ek), Dk = ek
          }
          this.cache.reused.set(kk, 2)
        }
        let fk = ni.get(kk.text);
        fk && this.cache.reused.set(fk, 2);
        let Sk = new Ci(kk.text, kk.text.nodeValue);
        Sk.flags |= 8, Dk.append(Sk)
      }
      addInlineWidget(kk, ek, ik) {
        let Dk = this.afterWidget && 48 & kk.flags && (48 & this.afterWidget.flags) == (48 & kk.flags);
        Dk || this.flushBuffer();
        let fk = this.ensureMarks(ek, ik);
        Dk || 16 & kk.flags || fk.append(this.getBuffer(1)), fk.append(kk), this.pos += kk.length, this.afterWidget = kk
      }
      addMark(kk, ek, ik) {
        this.flushBuffer(), this.ensureMarks(ek, ik).append(kk), this.pos += kk.length, this.afterWidget = null
      }
      addBlockWidget(kk) {
        this.getBlockPos().append(kk), this.pos += kk.length, this.lastBlock = kk, this.endLine()
      }
      continueWidget(kk) {
        (this.afterWidget || this.lastBlock).length += kk, this.pos += kk
      }
      addLineStart(kk, ek) {
        var ik;
        kk || (kk = Qi);
        let Dk = yi.start(kk, ek || (null === (ik = this.cache.find(yi)) || void 0 === ik ? void 0 : ik.dom), !!ek);
        this.getBlockPos().append(this.lastBlock = this.curLine = Dk)
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
      ensureMarks(kk, ek) {
        var ik;
        let Dk = this.curLine;
        for (let fk = kk.length - 1; fk >= 0; fk--) {
          let Sk, bk = kk[fk];
          if (ek > 0 && (Sk = Dk.lastChild) && Sk instanceof Li && Sk.mark.eq(bk)) Dk = Sk, ek--;
          else {
            let kk = Li.of(bk, null === (ik = this.cache.find(Li, (kk => kk.mark.eq(bk)))) || void 0 === ik ? void 0 : ik.dom);
            Dk.append(kk), Dk = kk, ek = 0
          }
        }
        return Dk
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let kk = this.curLine.lastChild;
          kk && zi(this.curLine, !1) && ("BR" == kk.dom.nodeName || !kk.isWidget() || Ak.ios && zi(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(ai, 0, 32) || new Ai(ai.toDOM(), 0, ai, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let kk = this.wrappers.length - 1; kk >= 0; kk--) this.wrappers[kk].to < this.pos && this.wrappers.splice(kk, 1);
        for (let kk = this.blockWrappers; kk.value && kk.from <= this.pos; kk.next())
          if (kk.to >= this.pos) {
            let ek = new di(kk.from, kk.to, kk.value, kk.rank),
              ik = this.wrappers.length;
            for (; ik > 0 && (this.wrappers[ik - 1].rank - ek.rank || this.wrappers[ik - 1].to - ek.to) < 0;) ik--;
            this.wrappers.splice(ik, 0, ek)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var kk;
        this.updateBlockWrappers();
        let ek = this.root;
        for (let ik of this.wrappers) {
          let Dk = ek.lastChild;
          if (ik.from < this.pos && Dk instanceof li && Dk.wrapper.eq(ik.wrapper)) ek = Dk;
          else {
            let Dk = li.of(ik.wrapper, null === (kk = this.cache.find(li, (kk => kk.wrapper.eq(ik.wrapper)))) || void 0 === kk ? void 0 : kk.dom);
            ek.append(Dk), ek = Dk
          }
        }
        return ek
      }
      blockPosCovered() {
        let kk = this.lastBlock;
        return null != kk && !kk.breakAfter && (!kk.isWidget() || (160 & kk.flags) > 0)
      }
      getBuffer(kk) {
        let ek = 2 | (kk < 0 ? 16 : 32),
          ik = this.cache.find(ji, void 0, 1);
        return ik && (ik.flags = ek), ik || new ji(ek)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Fi {
      constructor(kk) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = kk.iter()
      }
      skip(kk) {
        this.textOff + kk <= this.text.length ? this.textOff += kk : (this.skipCount += kk - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(kk) {
        if (this.textOff == this.text.length) {
          let {
            value: ek,
            lineBreak: ik,
            done: Dk
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Dk) throw new Error("Ran out of text content when drawing inline views");
          this.text = ek;
          let fk = this.textOff = Math.min(kk, ek.length);
          return ik ? null : ek.slice(0, fk)
        }
        let ek = Math.min(this.text.length, this.textOff + kk),
          ik = this.text.slice(this.textOff, ek);
        return this.textOff = ek, ik
      }
    }
    const ui = [Ai, yi, Ci, Li, ji, li, wi];
    for (let Eb = 0; Eb < ui.length; Eb++) ui[Eb].bucket = Eb;
    class qi {
      constructor(kk) {
        this.view = kk, this.buckets = ui.map((() => [])), this.index = ui.map((() => 0)), this.reused = new Map
      }
      add(kk) {
        let ek = kk.constructor.bucket,
          ik = this.buckets[ek];
        ik.length < 6 ? ik.push(kk) : ik[this.index[ek] = (this.index[ek] + 1) % 6] = kk
      }
      find(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Dk = kk.bucket,
          fk = this.buckets[Dk],
          Sk = this.index[Dk];
        for (let bk = fk.length - 1; bk >= 0; bk--) {
          let kk = (bk + Sk) % fk.length,
            rk = fk[kk];
          if ((!ek || ek(rk)) && !this.reused.has(rk)) return fk.splice(kk, 1), kk < Sk && this.index[Dk]--, this.reused.set(rk, ik), rk
        }
        return null
      }
      findWidget(kk, ek, ik) {
        let Dk = this.buckets[0];
        if (Dk.length)
          for (let fk = 0, Sk = 0;; fk++) {
            if (fk == Dk.length) {
              if (Sk) return null;
              Sk = 1, fk = 0
            }
            let bk = Dk[fk];
            if (!this.reused.has(bk) && (0 == Sk ? bk.widget.compare(kk) : bk.widget.constructor == kk.constructor && kk.updateDOM(bk.dom, this.view, bk.widget))) return Dk.splice(fk, 1), fk < this.index[0] && this.index[0]--, bk.widget == kk && bk.length == ek && (497 & bk.flags) == ik ? (this.reused.set(bk, 1), bk) : (this.reused.set(bk, 2), new Ai(bk.dom, ek, kk, -498 & bk.flags | ik))
          }
      }
      reuse(kk) {
        return this.reused.set(kk, 1), kk
      }
      maybeReuse(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(kk)) return this.reused.set(kk, ek), kk.dom
      }
      clear() {
        for (let kk = 0; kk < this.buckets.length; kk++) this.buckets[kk].length = this.index[kk] = 0
      }
    }
    class Ii {
      constructor(kk, ek, ik, fk, Sk) {
        this.view = kk, this.oD = fk, this.disallowBlockEffectsFor = Sk, this.openWidget = !1, this.openMarks = 0, this.cache = new qi(kk), this.text = new Fi(kk.state.doc), this.builder = new Vi(this.cache, new wi(kk, kk.contentDOM), Dk.w.iter(ik)), this.cache.reused.set(ek, 2), this.old = new si(ek), this.reuseWalker = {
          skip: (kk, ek, ik) => {
            if (this.cache.add(kk), kk.isComposite()) return !1
          },
          enter: kk => this.cache.add(kk),
          leave: () => {},
          break: () => {}
        }
      }
      run(kk, ek) {
        let ik = ek && this.getCompositionContext(ek.text);
        for (let Dk = 0, fk = 0, Sk = 0;;) {
          let bk = Sk < kk.length ? kk[Sk++] : null,
            rk = bk ? bk.fromA : this.old.root.length;
          if (rk > Dk) {
            let kk = rk - Dk;
            this.preserve(kk, !Sk, !bk), Dk = rk, fk += kk
          }
          if (!bk) break;
          ek && bk.fromA <= ek.range.fromA && bk.toA >= ek.range.toA ? (this.forward(bk.fromA, ek.range.fromA, ek.range.fromA < ek.range.toA ? 1 : -1), this.emit(fk, ek.range.fromB), this.cache.clear(), this.builder.addComposition(ek, ik), this.text.skip(ek.range.toB - ek.range.fromB), this.forward(ek.range.fromA, bk.toA), this.emit(ek.range.toB, bk.toB)) : (this.forward(bk.fromA, bk.toA), this.emit(fk, bk.toB)), fk = bk.toB, Dk = bk.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(kk, ek, ik) {
        let Dk = function(kk) {
            let ek = [];
            for (let ik = kk.parents.length; ik > 1; ik--) {
              let Dk = ik == kk.parents.length ? kk.tile : kk.parents[ik].tile;
              Dk instanceof Li && ek.push(Dk.mark)
            }
            return ek
          }(this.old),
          fk = this.openMarks;
        this.old.advance(kk, ik ? 1 : -1, {
          skip: (kk, ek, ik) => {
            if (kk.isWidget())
              if (this.openWidget) this.builder.continueWidget(ik - ek);
              else {
                let Sk = ik > 0 || ek < kk.length ? Ai.of(kk.widget, this.view, ik - ek, 496 & kk.flags, this.cache.maybeReuse(kk)) : this.cache.reuse(kk);
                256 & Sk.flags ? (Sk.flags &= -2, this.builder.addBlockWidget(Sk)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(Sk, Dk, fk), fk = Dk.length)
              }
            else if (kk.isText()) this.builder.ensureLine(null), ek || ik != kk.length || this.cache.reused.has(kk) ? (this.cache.add(kk), this.builder.addText(kk.text.slice(ek, ik), Dk, fk)) : this.builder.addText(kk.text, Dk, fk, this.cache.reuse(kk)), fk = Dk.length;
            else if (kk.isLine()) kk.flags &= -2, this.cache.reused.set(kk, 1), this.builder.addLine(kk);
            else if (kk instanceof ji) this.cache.add(kk);
            else {
              if (!(kk instanceof Li)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(kk, Dk, fk), this.cache.reused.set(kk, 1), fk = Dk.length
            }
            this.openWidget = !1
          },
          enter: kk => {
            kk.isLine() ? this.builder.addLineStart(kk.attrs, this.cache.maybeReuse(kk)) : (this.cache.add(kk), kk instanceof Li && Dk.unshift(kk.mark)), this.openWidget = !1
          },
          leave: kk => {
            kk.isLine() ? Dk.length && (Dk.length = fk = 0) : kk instanceof Li && (Dk.shift(), fk = Math.min(fk, Dk.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(kk)
      }
      emit(kk, ek) {
        let ik = null,
          fk = this.builder,
          Sk = 0,
          bk = Dk.w.spans(this.oD, kk, ek, {
            point: (kk, ek, Dk, bk, rk, Pk) => {
              if (Dk instanceof vk) {
                if (this.disallowBlockEffectsFor[Pk]) {
                  if (Dk.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (ek > this.view.state.doc.lineAt(kk).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (Sk = bk.length, rk > bk.length) fk.continueWidget(ek - kk);
                else {
                  let Sk = Dk.widget || (Dk.block ? Ei.block : Ei.inline),
                    Pk = function(kk) {
                      let ek = kk.isReplace ? (kk.startSide < 0 ? 64 : 0) | (kk.endSide > 0 ? 128 : 0) : kk.startSide > 0 ? 32 : 16;
                      kk.block && (ek |= 256);
                      return ek
                    }(Dk),
                    mk = this.cache.findWidget(Sk, ek - kk, Pk) || Ai.of(Sk, this.view, ek - kk, Pk);
                  Dk.block ? (Dk.startSide > 0 && fk.addLineStartIfNotCovered(ik), fk.addBlockWidget(mk)) : (fk.ensureLine(ik), fk.addInlineWidget(mk, bk, rk))
                }
                ik = null
              } else ik = function(kk, ek) {
                let ik = ek.spec.attributes,
                  Dk = ek.spec.class;
                if (!ik && !Dk) return kk;
                kk || (kk = {
                  class: "cm-line"
                });
                ik && jk(ik, kk);
                Dk && (kk.class += " " + Dk);
                return kk
              }(ik, Dk);
              ek > kk && this.text.skip(ek - kk)
            },
            span: (kk, ek, Dk, Sk) => {
              for (let bk = kk; bk < ek;) {
                let rk = this.text.next(Math.min(512, ek - bk));
                null == rk ? (fk.addLineStartIfNotCovered(ik), fk.addBreak(), bk++) : (fk.ensureLine(ik), fk.addText(rk, Dk, bk == kk ? Sk : Dk.length), bk += rk.length), ik = null
              }
            }
          });
        fk.addLineStartIfNotCovered(ik), this.openWidget = bk > Sk, this.openMarks = bk
      }
      forward(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        ek - kk <= 10 ? this.old.advance(ek - kk, ik, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(ek - kk - 10, -1), this.old.advance(5, ik, this.reuseWalker))
      }
      getCompositionContext(kk) {
        let ek = [],
          ik = null;
        for (let Dk = kk.parentNode;; Dk = Dk.parentNode) {
          let kk = ni.get(Dk);
          if (Dk == this.view.contentDOM) break;
          kk instanceof Li ? ek.push(kk) : (null === kk || void 0 === kk ? void 0 : kk.isLine()) ? ik = kk : kk instanceof li || ("DIV" != Dk.nodeName || ik || Dk == this.view.contentDOM ? ik || ek.push(Li.of(new zk({
            tagName: Dk.nodeName.toLowerCase(),
            attributes: Fk(Dk)
          }), Dk)) : ik = new yi(Dk, Qi))
        }
        return {
          line: ik,
          marks: ek
        }
      }
    }

    function zi(kk, ek) {
      let ik = kk => {
        for (let Dk of kk.children)
          if ((ek ? Dk.isText() : Dk.length) || ik(Dk)) return !0;
        return !1
      };
      return ik(kk)
    }
    const Qi = {
      class: "cm-line"
    };

    function vi(kk) {
      let ek = ni.get(kk);
      return ek && ek.setDOM(kk.cloneNode()), kk
    }
    class Ei extends uk {
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
    Ei.inline = new Ei("span"), Ei.block = new Ei("div");
    const ai = new class extends uk {
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
    class Wi {
      constructor(kk) {
        this.view = kk, this.oD = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Ik.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new wi(kk, kk.contentDOM), this.updateInner([new Mi(0, 0, 0, kk.state.doc.length)], null)
      }
      update(kk) {
        var ek;
        let ik = kk.changedRanges;
        this.minWidth > 0 && ik.length && (ik.every((kk => {
          let {
            fromA: ek,
            toA: ik
          } = kk;
          return ik < this.minWidthFrom || ek > this.minWidthTo
        })) ? (this.minWidthFrom = kk.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = kk.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(kk);
        let fk = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (ek = this.domChanged) || void 0 === ek ? void 0 : ek.newSel) ? fk = this.domChanged.newSel.head : function(kk, ek) {
          let ik = !1;
          ek && kk.iterChangedRanges(((kk, Dk) => {
            kk < ek.to && Dk > ek.from && (ik = !0)
          }));
          return ik
        }(kk.changes, this.hasComposition) || kk.selectionSet || (fk = kk.state.selection.main.head));
        let Sk = fk > -1 ? function(kk, ek, ik) {
          let Dk = Xi(kk, ik);
          if (!Dk) return null;
          let {
            node: fk,
            from: Sk,
            to: bk
          } = Dk, rk = fk.nodeValue;
          if (/[\n\r]/.test(rk)) return null;
          if (kk.state.doc.sliceString(Dk.from, Dk.to) != rk) return null;
          let Pk = ek.invertedDesc;
          return {
            range: new Mi(Pk.mapPos(Sk), Pk.mapPos(bk), Sk, bk),
            text: fk
          }
        }(this.view, kk.changes, fk) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: ek,
            to: Dk
          } = this.hasComposition;
          ik = new Mi(ek, Dk, kk.changes.mapPos(ek, -1), kk.changes.mapPos(Dk, 1)).addToSet(ik.slice())
        }
        this.hasComposition = Sk ? {
          from: Sk.range.fromB,
          to: Sk.range.toB
        } : null, (Ak.ie || Ak.chrome) && !Sk && kk && kk.state.doc.lines != kk.startState.doc.lines && (this.forceSelection = !0);
        let bk = this.oD,
          rk = this.blockWrappers;
        this.updateDeco();
        let Pk = function(kk, ek, ik) {
          let fk = new Bi;
          return Dk.w.compare(kk, ek, ik, fk), fk.changes
        }(bk, this.oD, kk.changes);
        Pk.length && (ik = Mi.extendWithRanges(ik, Pk));
        let mk = function(kk, ek, ik) {
          let fk = new ci;
          return Dk.w.compare(kk, ek, ik, fk), fk.changes
        }(rk, this.blockWrappers, kk.changes);
        return mk.length && (ik = Mi.extendWithRanges(ik, mk)), Sk && !ik.some((kk => kk.fromA <= Sk.range.fromA && kk.toA >= Sk.range.toA)) && (ik = Sk.range.addToSet(ik.slice())), !(2 & this.tile.flags && 0 == ik.length) && (this.updateInner(ik, Sk), kk.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(kk, ek) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: ik
        } = this.view;
        ik.ignore((() => {
          if (ek || kk.length) {
            let ik = this.tile,
              Dk = new Ii(this.view, ik, this.blockWrappers, this.oD, this.dynamicDecorationMap);
            ek && ni.get(ek.text) && Dk.cache.reused.set(ni.get(ek.text), 2), this.tile = Dk.run(kk, ek), ti(ik, Dk.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Dk = Ak.chrome || Ak.ios ? {
            node: ik.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Dk), !Dk || !Dk.written && ik.selectionRange.focusNode == Dk.node && this.tile.dom.contains(Dk.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Dk = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let fk of this.tile.children) fk.isWidget() && fk.widget instanceof Ti && Dk.push(fk.dom);
        ik.updateGaps(Dk)
      }
      updateEditContextFormatting(kk) {
        this.editContextFormatting = this.editContextFormatting.map(kk.changes);
        for (let ek of kk.transactions)
          for (let kk of ek.effects) kk.is(oe) && (this.editContextFormatting = kk.value)
      }
      updateSelection() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: ek
        } = this.tile, ik = this.view.root.activeElement, Dk = ik == ek, fk = !Dk && !(this.view.state.facet(Oe) || ek.tabIndex > -1) && Xk(ek, this.view.observer.selectionRange) && !(ik && ek.contains(ik));
        if (!(Dk || kk || fk)) return;
        let Sk = this.forceSelection;
        this.forceSelection = !1;
        let bk, rk, Pk = this.view.state.selection.main;
        if (Pk.empty ? rk = bk = this.inlineDOMNearPos(Pk.anchor, Pk.assoc || 1) : (rk = this.inlineDOMNearPos(Pk.head, Pk.head == Pk.from ? 1 : -1), bk = this.inlineDOMNearPos(Pk.anchor, Pk.anchor == Pk.from ? 1 : -1)), Ak.gecko && Pk.empty && !this.hasComposition && (1 == (mk = bk).node.nodeType && mk.node.firstChild && (0 == mk.offset || "false" == mk.node.childNodes[mk.offset - 1].contentEditable) && (mk.offset == mk.node.childNodes.length || "false" == mk.node.childNodes[mk.offset].contentEditable))) {
          let kk = document.createTextNode("");
          this.view.observer.ignore((() => bk.node.insertBefore(kk, bk.node.childNodes[bk.offset] || null))), bk = rk = new me(kk, 0), Sk = !0
        }
        var mk;
        let Mk = this.view.observer.selectionRange;
        !Sk && Mk.focusNode && (ck(bk.node, bk.offset, Mk.anchorNode, Mk.anchorOffset) && ck(rk.node, rk.offset, Mk.focusNode, Mk.focusOffset) || this.suppressWidgetCursorChange(Mk, Pk)) || (this.view.observer.ignore((() => {
          Ak.android && Ak.chrome && ek.contains(Mk.focusNode) && function(kk, ek) {
            for (let ik = kk; ik && ik != ek; ik = ik.assignedSlot || ik.parentNode)
              if (1 == ik.nodeType && "false" == ik.contentEditable) return !0;
            return !1
          }(Mk.focusNode, ek) && (ek.blur(), ek.focus({
            preventScroll: !0
          }));
          let kk = Wk(this.view.root);
          if (kk)
            if (Pk.empty) {
              if (Ak.gecko) {
                let kk = (Dk = bk.node, Sk = bk.offset, 1 != Dk.nodeType ? 0 : (Sk && "false" == Dk.childNodes[Sk - 1].contentEditable ? 1 : 0) | (Sk < Dk.childNodes.length && "false" == Dk.childNodes[Sk].contentEditable ? 2 : 0));
                if (kk && 3 != kk) {
                  let ek = (1 == kk ? re : Pe)(bk.node, bk.offset);
                  ek && (bk = new me(ek.node, ek.offset))
                }
              }
              kk.collapse(bk.node, bk.offset), null != Pk.bidiLevel && void 0 !== kk.caretBidiLevel && (kk.caretBidiLevel = Pk.bidiLevel)
            } else if (kk.extend) {
            kk.collapse(bk.node, bk.offset);
            try {
              kk.extend(rk.node, rk.offset)
            } catch (mk) {}
          } else {
            let ek = document.createRange();
            Pk.anchor > Pk.head && ([bk, rk] = [rk, bk]), ek.setEnd(rk.node, rk.offset), ek.setStart(bk.node, bk.offset), kk.removeAllRanges(), kk.addRange(ek)
          } else;
          var Dk, Sk;
          fk && this.view.root.activeElement == ek && (ek.blur(), ik && ik.focus())
        })), this.view.observer.setSelectionRange(bk, rk)), this.impreciseAnchor = bk.precise ? null : new me(Mk.anchorNode, Mk.anchorOffset), this.impreciseHead = rk.precise ? null : new me(Mk.focusNode, Mk.focusOffset)
      }
      suppressWidgetCursorChange(kk, ek) {
        return this.hasComposition && ek.empty && ck(kk.focusNode, kk.focusOffset, kk.anchorNode, kk.anchorOffset) && this.posFromDOM(kk.focusNode, kk.focusOffset) == ek.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: kk
        } = this, ek = kk.state.selection.main, ik = Wk(kk.root), {
          anchorNode: Dk,
          anchorOffset: fk
        } = kk.observer.selectionRange;
        if (!ik || !ek.empty || !ek.assoc || !ik.modify) return;
        let Sk = this.lineAt(ek.head, ek.assoc);
        if (!Sk) return;
        let bk = Sk.posAtStart;
        if (ek.head == bk || ek.head == bk + Sk.length) return;
        let rk = this.coordsAt(ek.head, -1),
          Pk = this.coordsAt(ek.head, 1);
        if (!rk || !Pk || rk.bottom > Pk.top) return;
        let mk = this.domAtPos(ek.head + ek.assoc, ek.assoc);
        ik.collapse(mk.node, mk.offset), ik.modify("move", ek.assoc < 0 ? "forward" : "backward", "lineboundary"), kk.observer.readSelectionRange();
        let Mk = kk.observer.selectionRange;
        kk.docView.posFromDOM(Mk.anchorNode, Mk.anchorOffset) != ek.from && ik.collapse(Dk, fk)
      }
      posFromDOM(kk, ek) {
        let ik = this.tile.nearest(kk);
        if (!ik) return 2 & this.tile.dom.compareDocumentPosition(kk) ? 0 : this.view.state.doc.length;
        let Dk = ik.posAtStart;
        if (!ik.isComposite()) return ik.isText() ? kk == ik.dom ? Dk + ek : Dk + (ek ? ik.length : 0) : Dk;
        {
          let fk;
          if (kk == ik.dom) fk = ik.dom.childNodes[ek];
          else {
            let Dk = 0 == gk(kk) ? 0 : 0 == ek ? -1 : 1;
            for (;;) {
              let ek = kk.parentNode;
              if (ek == ik.dom) break;
              0 == Dk && ek.firstChild != ek.lastChild && (Dk = kk == ek.firstChild ? -1 : 1), kk = ek
            }
            fk = Dk < 0 ? kk : kk.nextSibling
          }
          if (fk == ik.dom.firstChild) return Dk;
          for (; fk && !ni.get(fk);) fk = fk.nextSibling;
          if (!fk) return Dk + ik.length;
          for (let kk = 0, ek = Dk;; kk++) {
            let Dk = ik.children[kk];
            if (Dk.dom == fk) return ek;
            ek += Dk.length + Dk.breakAfter
          }
        }
      }
      domAtPos(kk, ek) {
        let {
          tile: ik,
          offset: Dk
        } = this.tile.resolveBlock(kk, ek);
        return ik.isWidget() ? ik.domPosFor(kk, ek) : ik.domIn(Dk, ek)
      }
      inlineDOMNearPos(kk, ek) {
        let ik, Dk, fk = -1,
          Sk = !1,
          bk = -1,
          rk = !1;
        return this.tile.blockTiles(((ek, Pk) => {
          if (ek.isWidget()) {
            if (32 & ek.flags && Pk >= kk) return !0;
            16 & ek.flags && (Sk = !0)
          } else {
            let mk = Pk + ek.length;
            if (Pk <= kk && (ik = ek, fk = kk - Pk, Sk = mk < kk), mk >= kk && !Dk && (Dk = ek, bk = kk - Pk, rk = Pk > kk), Pk > kk && Dk) return !0
          }
        })), ik || Dk ? (Sk && Dk ? ik = null : rk && ik && (Dk = null), ik && ek < 0 || !Dk ? ik.domIn(fk, ek) : Dk.domIn(bk, ek)) : this.domAtPos(kk, ek)
      }
      coordsAt(kk, ek) {
        let {
          tile: ik,
          offset: Dk
        } = this.tile.resolveBlock(kk, ek);
        return ik.isWidget() ? ik.widget instanceof Ti ? null : ik.coordsInWidget(Dk, ek, !0) : ik.coordsIn(Dk, ek)
      }
      lineAt(kk, ek) {
        let {
          tile: ik
        } = this.tile.resolveBlock(kk, ek);
        return ik.isLine() ? ik : null
      }
      coordsForChar(kk) {
        let {
          tile: ek,
          offset: ik
        } = this.tile.resolveBlock(kk, 1);
        if (!ek.isLine()) return null;
        return function kk(ek, ik) {
          if (ek.isComposite())
            for (let Dk of ek.children) {
              if (Dk.length >= ik) {
                let ek = kk(Dk, ik);
                if (ek) return ek
              }
              if ((ik -= Dk.length) < 0) break
            } else if (ek.isText() && ik < ek.length) {
              let kk = (0, Dk.U)(ek.text, ik);
              if (kk == ik) return null;
              let fk = fe(ek.dom, ik, kk).getClientRects();
              for (let ek = 0; ek < fk.length; ek++) {
                let kk = fk[ek];
                if (ek == fk.length - 1 || kk.top < kk.bottom && kk.left < kk.right) return kk
              }
            } return null
        }(ek, ik)
      }
      measureVisibleLineHeights(kk) {
        let ek = [],
          {
            from: ik,
            to: Dk
          } = kk,
          fk = this.view.contentDOM.clientWidth,
          Sk = fk > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          bk = -1,
          rk = this.view.textDirection == Me.LTR,
          Pk = 0,
          mk = (kk, Mk, Kk) => {
            for (let xk = 0; xk < kk.children.length && !(Mk > Dk); xk++) {
              let Dk = kk.children[xk],
                nk = Mk + Dk.length,
                Uk = Dk.dom.getBoundingClientRect(),
                {
                  height: Hk
                } = Uk;
              if (Kk && !xk && (Pk += Uk.top - Kk.top), Dk instanceof li) nk > ik && mk(Dk, Mk, Uk);
              else if (Mk >= ik && (Pk > 0 && ek.push(-Pk), ek.push(Hk + Pk), Pk = 0, Sk)) {
                let kk = Dk.dom.lastChild,
                  ek = kk ? Bk(kk) : [];
                if (ek.length) {
                  let kk = ek[ek.length - 1],
                    ik = rk ? kk.right - Uk.left : Uk.right - kk.left;
                  ik > bk && (bk = ik, this.minWidth = fk, this.minWidthFrom = Mk, this.minWidthTo = nk)
                }
              }
              Kk && xk == kk.children.length - 1 && (Pk += Kk.bottom - Uk.bottom), Mk = nk + Dk.breakAfter
            }
          };
        return mk(this.tile, 0, null), ek
      }
      textDirectionAt(kk) {
        let {
          tile: ek
        } = this.tile.resolveBlock(kk, 1);
        return "rtl" == getComputedStyle(ek.dom).direction ? Me.RTL : Me.LTR
      }
      measureTextSize() {
        let kk = this.tile.blockTiles((kk => {
          if (kk.isLine() && kk.children.length && kk.length <= 20) {
            let ek, ik = 0;
            for (let Dk of kk.children) {
              if (!Dk.isText() || /[^ -~]/.test(Dk.text)) return;
              let kk = Bk(Dk.dom);
              if (1 != kk.length) return;
              ik += kk[0].width, ek = kk[0].height
            }
            if (ik) return {
              lineHeight: kk.dom.getBoundingClientRect().height,
              charWidth: ik / kk.length,
              textHeight: ek
            }
          }
        }));
        if (kk) return kk;
        let ek, ik, Dk, fk = document.createElement("div");
        return fk.className = "cm-line", fk.style.width = "99999px", fk.style.position = "absolute", fk.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(fk);
          let kk = Bk(fk.firstChild)[0];
          ek = fk.getBoundingClientRect().height, ik = kk && kk.width ? kk.width / 27 : 7, Dk = kk && kk.height ? kk.height : ek, fk.remove()
        })), {
          lineHeight: ek,
          charWidth: ik,
          textHeight: Dk
        }
      }
      computeBlockGapDeco() {
        let kk = [],
          ek = this.view.viewState;
        for (let ik = 0, Dk = 0;; Dk++) {
          let fk = Dk == ek.viewports.length ? null : ek.viewports[Dk],
            Sk = fk ? fk.from - 1 : this.view.state.doc.length;
          if (Sk > ik) {
            let Dk = (ek.lineBlockAt(Sk).bottom - ek.lineBlockAt(ik).top) / this.view.scaleY;
            kk.push(Ik.replace({
              widget: new Ti(Dk),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(ik, Sk))
          }
          if (!fk) break;
          ik = fk.to + 1
        }
        return Ik.set(kk)
      }
      updateDeco() {
        let kk = 1,
          ek = this.view.state.facet(ei).map((ek => (this.dynamicDecorationMap[kk++] = "function" == typeof ek) ? ek(this.view) : ek)),
          ik = !1,
          fk = this.view.state.facet(Di).map(((kk, ek) => {
            let Dk = "function" == typeof kk;
            return Dk && (ik = !0), Dk ? kk(this.view) : kk
          }));
        for (fk.length && (this.dynamicDecorationMap[kk++] = ik, ek.push(Dk.w.join(fk))), this.oD = [this.editContextFormatting, ...ek, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; kk < this.oD.length;) this.dynamicDecorationMap[kk++] = !1;
        this.blockWrappers = this.view.state.facet(ii).map((kk => "function" == typeof kk ? kk(this.view) : kk))
      }
      scrollIntoView(kk) {
        var ek;
        if (kk.isSnapshot) {
          let ek = this.view.viewState.lineBlockAt(kk.range.head);
          return this.view.scrollDOM.scrollTop = ek.top - kk.yMargin, void(this.view.scrollDOM.scrollLeft = kk.xMargin)
        }
        for (let Mk of this.view.state.facet(Be)) try {
          if (Mk(this.view, kk.range, kk)) return !0
        } catch (mk) {
          Ze(this.view.state, mk, "scroll handler")
        }
        let ik, {
            range: Dk
          } = kk,
          fk = this.coordsAt(Dk.head, null !== (ek = Dk.assoc) && void 0 !== ek ? ek : Dk.empty ? 0 : Dk.head > Dk.anchor ? -1 : 1);
        if (!fk) return;
        !Dk.empty && (ik = this.coordsAt(Dk.anchor, Dk.anchor > Dk.head ? -1 : 1)) && (fk = {
          left: Math.min(fk.left, ik.left),
          top: Math.min(fk.top, ik.top),
          right: Math.max(fk.right, ik.right),
          bottom: Math.max(fk.bottom, ik.bottom)
        });
        let Sk = Pi(this.view),
          bk = {
            left: fk.left - Sk.left,
            top: fk.top - Sk.top,
            right: fk.right + Sk.right,
            bottom: fk.bottom + Sk.bottom
          },
          {
            offsetWidth: rk,
            offsetHeight: Pk
          } = this.view.scrollDOM;
        if (function(kk, ek, ik, Dk, fk, Sk, bk, rk) {
            let Pk = kk.ownerDocument,
              mk = Pk.defaultView || window;
            for (let Mk = kk, Kk = !1; Mk && !Kk;)
              if (1 == Mk.nodeType) {
                let kk, xk = Mk == Pk.body,
                  nk = 1,
                  Uk = 1;
                if (xk) kk = Nk(mk);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(Mk).position) && (Kk = !0), Mk.scrollHeight <= Mk.clientHeight && Mk.scrollWidth <= Mk.clientWidth) {
                    Mk = Mk.assignedSlot || Mk.parentNode;
                    continue
                  }
                  let ek = Mk.getBoundingClientRect();
                  ({
                    scaleX: nk,
                    scaleY: Uk
                  } = Rk(Mk, ek)), kk = {
                    left: ek.left,
                    right: ek.left + Mk.clientWidth * nk,
                    top: ek.top,
                    bottom: ek.top + Mk.clientHeight * Uk
                  }
                }
                let Hk = 0,
                  wk = 0;
                if ("nearest" == fk) ek.top < kk.top + bk ? (wk = ek.top - (kk.top + bk), ik > 0 && ek.bottom > kk.bottom + wk && (wk = ek.bottom - kk.bottom + bk)) : ek.bottom > kk.bottom - bk && (wk = ek.bottom - kk.bottom + bk, ik < 0 && ek.top - wk < kk.top && (wk = ek.top - (kk.top + bk)));
                else {
                  let Dk = ek.bottom - ek.top,
                    Sk = kk.bottom - kk.top;
                  wk = ("center" == fk && Dk <= Sk ? ek.top + Dk / 2 - Sk / 2 : "start" == fk || "center" == fk && ik < 0 ? ek.top - bk : ek.bottom - Sk + bk) - kk.top
                }
                if ("nearest" == Dk ? ek.left < kk.left + Sk ? (Hk = ek.left - (kk.left + Sk), ik > 0 && ek.right > kk.right + Hk && (Hk = ek.right - kk.right + Sk)) : ek.right > kk.right - Sk && (Hk = ek.right - kk.right + Sk, ik < 0 && ek.left < kk.left + Hk && (Hk = ek.left - (kk.left + Sk))) : Hk = ("center" == Dk ? ek.left + (ek.right - ek.left) / 2 - (kk.right - kk.left) / 2 : "start" == Dk == rk ? ek.left - Sk : ek.right - (kk.right - kk.left) + Sk) - kk.left, Hk || wk)
                  if (xk) mk.scrollBy(Hk, wk);
                  else {
                    let kk = 0,
                      ik = 0;
                    if (wk) {
                      let kk = Mk.scrollTop;
                      Mk.scrollTop += wk / Uk, ik = (Mk.scrollTop - kk) * Uk
                    }
                    if (Hk) {
                      let ek = Mk.scrollLeft;
                      Mk.scrollLeft += Hk / nk, kk = (Mk.scrollLeft - ek) * nk
                    }
                    ek = {
                      left: ek.left - kk,
                      top: ek.top - ik,
                      right: ek.right - kk,
                      bottom: ek.bottom - ik
                    }, kk && Math.abs(kk - Hk) < 1 && (Dk = "nearest"), ik && Math.abs(ik - wk) < 1 && (fk = "nearest")
                  } if (xk) break;
                (ek.top < kk.top || ek.bottom > kk.bottom || ek.left < kk.left || ek.right > kk.right) && (ek = {
                  left: Math.max(ek.left, kk.left),
                  right: Math.min(ek.right, kk.right),
                  top: Math.max(ek.top, kk.top),
                  bottom: Math.min(ek.bottom, kk.bottom)
                }), Mk = Mk.assignedSlot || Mk.parentNode
              } else {
                if (11 != Mk.nodeType) break;
                Mk = Mk.host
              }
          }(this.view.scrollDOM, bk, Dk.head < Dk.anchor ? -1 : 1, kk.x, kk.y, Math.max(Math.min(kk.xMargin, rk), -rk), Math.max(Math.min(kk.yMargin, Pk), -Pk), this.view.textDirection == Me.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (fk.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || fk.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let kk = this.view.docView.lineAt(Dk.head, 1);
          kk && kk.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(kk) {
        let ek = kk => kk.isWidget() || kk.children.some(ek);
        return ek(this.tile.resolveBlock(kk, 1).tile)
      }
      destroy() {
        ti(this.tile)
      }
    }

    function ti(kk, ek) {
      let ik = null === ek || void 0 === ek ? void 0 : ek.get(kk);
      if (1 != ik) {
        null == ik && kk.destroy();
        for (let ik of kk.children) ti(ik, ek)
      }
    }

    function Xi(kk, ek) {
      let ik = kk.observer.selectionRange;
      if (!ik.focusNode) return null;
      let Dk = re(ik.focusNode, ik.focusOffset),
        fk = Pe(ik.focusNode, ik.focusOffset),
        Sk = Dk || fk;
      if (fk && Dk && fk.node != Dk.node) {
        let ek = ni.get(fk.node);
        if (!ek || ek.isText() && ek.text != fk.node.nodeValue) Sk = fk;
        else if (kk.docView.lastCompositionAfterCursor) {
          let kk = ni.get(Dk.node);
          !kk || kk.isText() && kk.text != Dk.node.nodeValue || (Sk = fk)
        }
      }
      if (kk.docView.lastCompositionAfterCursor = Sk != Dk, !Sk) return null;
      let bk = ek - Sk.offset;
      return {
        from: bk,
        to: bk + Sk.node.nodeValue.length,
        node: Sk.node
      }
    }
    let Bi = class {
      constructor() {
        this.changes = []
      }
      compareRange(kk, ek) {
        hk(kk, ek, this.changes)
      }
      comparePoint(kk, ek) {
        hk(kk, ek, this.changes)
      }
      boundChange(kk) {
        hk(kk, kk, this.changes)
      }
    };
    class ci {
      constructor() {
        this.changes = []
      }
      compareRange(kk, ek) {
        hk(kk, ek, this.changes)
      }
      comparePoint() {}
      boundChange(kk) {
        hk(kk, kk, this.changes)
      }
    }
    class Ti extends uk {
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

    function oi(kk, ek, ik) {
      let Dk = kk.lineBlockAt(ek);
      if (Array.isArray(Dk.type)) {
        let kk;
        for (let fk of Dk.type) {
          if (fk.from > ek) break;
          if (!(fk.to < ek)) {
            if (fk.from < ek && fk.to > ek) return fk;
            kk && (fk.type != qk.Text || kk.type == fk.type && !(ik < 0 ? fk.from < ek : fk.to > ek)) || (kk = fk)
          }
        }
        return kk || Dk
      }
      return Dk
    }

    function Zi(kk, ek, ik, Dk) {
      let fk = kk.state.doc.lineAt(ek.head),
        Sk = kk.bidiSpans(fk),
        bk = kk.textDirectionAt(fk.from);
      for (let rk = ek, Pk = null;;) {
        let ek = Fe(fk, Sk, bk, rk, ik),
          mk = Ve;
        if (!ek) {
          if (fk.number == (ik ? kk.state.doc.lines : 1)) return rk;
          mk = "\n", fk = kk.state.doc.line(fk.number + (ik ? 1 : -1)), Sk = kk.bidiSpans(fk), ek = kk.visualLineSide(fk, !ik)
        }
        if (Pk) {
          if (!Pk(mk)) return rk
        } else {
          if (!Dk) return ek;
          Pk = Dk(mk)
        }
        rk = ek
      }
    }

    function Oi(kk, ek, ik) {
      for (;;) {
        let Dk = 0;
        for (let fk of kk) fk.between(ek - 1, ek + 1, ((kk, fk, Sk) => {
          if (ek > kk && ek < fk) {
            let Sk = Dk || ik || (ek - kk < fk - ek ? -1 : 1);
            ek = Sk < 0 ? kk : fk, Dk = Sk
          }
        }));
        if (!Dk) return ek
      }
    }

    function gi(kk, ek) {
      let ik = null;
      for (let fk = 0; fk < ek.lw.length; fk++) {
        let Sk = ek.lw[fk],
          bk = null;
        if (Sk.empty) {
          let ek = Oi(kk, Sk.from, 0);
          ek != Sk.from && (bk = Dk.h.cursor(ek, -1))
        } else {
          let ek = Oi(kk, Sk.from, -1),
            ik = Oi(kk, Sk.to, 1);
          ek == Sk.from && ik == Sk.to || (bk = Dk.h.range(Sk.from == Sk.anchor ? ek : ik, Sk.from == Sk.head ? ek : ik))
        }
        bk && (ik || (ik = ek.lw.slice()), ik[fk] = bk)
      }
      return ik ? Dk.h.create(ik, ek.mainIndex) : ek
    }

    function Gi(kk, ek, ik) {
      let fk = Oi(kk.state.facet(fi).map((ek => ek(kk))), ik.from, ek.head > ik.from ? -1 : 1);
      return fk == ik.from ? ik : Dk.h.cursor(fk, fk < ik.from ? 1 : -1)
    }
    class Ni {
      constructor(kk, ek) {
        this.pos = kk, this.assoc = ek
      }
    }

    function Ri(kk, ek, ik, fk) {
      let Sk, bk = kk.contentDOM.getBoundingClientRect(),
        rk = bk.top + kk.viewState.paddingTop,
        {
          x: Pk,
          y: mk
        } = ek,
        Mk = mk - rk;
      for (;;) {
        if (Mk < 0) return new Ni(0, 1);
        if (Mk > kk.viewState.docHeight) return new Ni(kk.state.doc.length, -1);
        if (Sk = kk.elementAtHeight(Mk), null == fk) break;
        if (Sk.type == qk.Text) {
          if (fk < 0 ? Sk.to < kk.viewport.from : Sk.from > kk.viewport.to) break;
          let ek = kk.docView.coordsAt(fk < 0 ? Sk.from : Sk.to, fk > 0 ? -1 : 1);
          if (ek && (fk < 0 ? ek.top <= Mk + rk : ek.bottom >= Mk + rk)) break
        }
        let ek = kk.viewState.heightOracle.textHeight / 2;
        Mk = fk > 0 ? Sk.bottom + ek : Sk.top - ek
      }
      if (kk.viewport.from >= Sk.to || kk.viewport.to <= Sk.from) {
        if (ik) return null;
        if (Sk.type == qk.Text) {
          let ek = function(kk, ek, ik, fk, Sk) {
            let bk = Math.round((fk - ek.left) * kk.defaultCharacterWidth);
            if (kk.lineWrapping && ik.height > 1.5 * kk.defaultLineHeight) {
              let ek = kk.viewState.heightOracle.textHeight;
              bk += Math.floor((Sk - ik.top - .5 * (kk.defaultLineHeight - ek)) / ek) * kk.viewState.heightOracle.lineLength
            }
            let rk = kk.state.sliceDoc(ik.from, ik.to);
            return ik.from + (0, Dk.Y)(rk, bk, kk.state.tabSize)
          }(kk, bk, Sk, Pk, mk);
          return new Ni(ek, ek == Sk.from ? 1 : -1)
        }
      }
      if (Sk.type != qk.Text) return Mk < (Sk.top + Sk.bottom) / 2 ? new Ni(Sk.from, 1) : new Ni(Sk.to, -1);
      let Kk = kk.docView.lineAt(Sk.from, 2);
      return Kk && Kk.length == Sk.length || (Kk = kk.docView.lineAt(Sk.from, -2)), new Ji(kk, Pk, mk, kk.textDirectionAt(Sk.from)).scanTile(Kk, Sk.from)
    }
    class Ji {
      constructor(kk, ek, ik, Dk) {
        this.view = kk, this.x = ek, this.y = ik, this.baseDir = Dk, this.line = null, this.spans = null
      }
      bidiSpansAt(kk) {
        return (!this.line || this.line.from > kk || this.line.to < kk) && (this.line = this.view.state.doc.lineAt(kk), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(kk, ek) {
        let {
          line: ik,
          spans: Dk
        } = this.bidiSpansAt(kk);
        return Dk[Ye.find(Dk, kk - ik.from, -1, ek)].level == this.baseDir
      }
      dirAt(kk, ek) {
        let {
          line: ik,
          spans: Dk
        } = this.bidiSpansAt(kk);
        return Dk[Ye.find(Dk, kk - ik.from, -1, ek)].dir
      }
      bidiIn(kk, ek) {
        let {
          spans: ik,
          line: Dk
        } = this.bidiSpansAt(kk);
        return ik.length > 1 || ik.length && (ik[0].level != this.baseDir || ik[0].to + Dk.from < ek)
      }
      scan(kk, ek) {
        let ik, Dk, fk, Sk = 0,
          bk = kk.length - 1,
          rk = new Set,
          Pk = this.bidiIn(kk[0], kk[bk]),
          mk = -1,
          Mk = 1e9;
        kk: for (; Sk < bk;) {
          let Kk = bk - Sk,
            xk = Sk + bk >> 1;
          ek: if (rk.has(xk)) {
            let kk = Sk + Math.floor(Math.random() * Kk);
            for (let ek = 0; ek < Kk; ek++) {
              if (!rk.has(kk)) {
                xk = kk;
                break ek
              }
              kk++, kk == bk && (kk = Sk)
            }
            break kk
          } rk.add(xk);
          let nk = ek(xk);
          if (nk)
            for (let ek = 0; ek < nk.length; ek++) {
              let rk = nk[ek],
                Kk = 0;
              if (!(0 == rk.width && nk.length > 1)) {
                if (rk.bottom < this.y)(!ik || ik.bottom < rk.bottom) && (ik = rk), Kk = 1;
                else if (rk.top > this.y)(!Dk || Dk.top > rk.top) && (Dk = rk), Kk = -1;
                else {
                  let kk = rk.left > this.x ? this.x - rk.left : rk.right < this.x ? this.x - rk.right : 0,
                    ek = Math.abs(kk);
                  ek < Mk && (mk = xk, Mk = ek, fk = rk), kk && (Kk = kk < 0 == (this.baseDir == Me.LTR) ? -1 : 1)
                } - 1 != Kk || Pk && !this.baseDirAt(kk[xk], 1) ? 1 != Kk || Pk && !this.baseDirAt(kk[xk + 1], -1) || (Sk = xk + 1) : bk = xk
              }
            }
        }
        if (!fk) {
          let fk = ik && (!Dk || this.y - ik.bottom < Dk.top - this.y) ? ik : Dk;
          return this.y = (fk.top + fk.bottom) / 2, this.scan(kk, ek)
        }
        if (Mk) {
          if (ik && ik.bottom > fk.top) return this.y = ik.bottom - 1, this.scan(kk, ek);
          if (Dk && Dk.top < fk.bottom) return this.y = Dk.top + 1, this.scan(kk, ek)
        }
        let Kk = (Pk ? this.dirAt(kk[mk], 1) : this.baseDir) == Me.LTR;
        return {
          i: mk,
          after: this.x > (fk.left + fk.right) / 2 == Kk
        }
      }
      scanText(kk, ek) {
        let ik = [];
        for (let Sk = 0; Sk < kk.length; Sk = (0, Dk.U)(kk.text, Sk)) ik.push(ek + Sk);
        ik.push(ek + kk.length);
        let fk = this.scan(ik, (Dk => {
          let fk = ik[Dk] - ek,
            Sk = ik[Dk + 1] - ek;
          return fe(kk.dom, fk, Sk).getClientRects()
        }));
        return fk.after ? new Ni(ik[fk.i + 1], -1) : new Ni(ik[fk.i], 1)
      }
      scanTile(kk, ek) {
        if (!kk.length) return new Ni(ek, 1);
        if (1 == kk.children.length) {
          let ik = kk.children[0];
          if (ik.isText()) return this.scanText(ik, ek);
          if (ik.isComposite()) return this.scanTile(ik, ek)
        }
        let ik = [ek];
        for (let bk = 0, rk = ek; bk < kk.children.length; bk++) ik.push(rk += kk.children[bk].length);
        let Dk = this.scan(ik, (ek => {
            let ik = kk.children[ek];
            return 48 & ik.flags ? null : (1 == ik.dom.nodeType ? ik.dom : fe(ik.dom, 0, ik.length)).getClientRects()
          })),
          fk = kk.children[Dk.i],
          Sk = ik[Dk.i];
        return fk.isText() ? this.scanText(fk, Sk) : fk.isComposite() ? this.scanTile(fk, Sk) : Dk.after ? new Ni(ik[Dk.i + 1], -1) : new Ni(Sk, 1)
      }
    }
    const kD = "\uffff";
    class eD {
      constructor(kk, ek) {
        this.points = kk, this.view = ek, this.text = "", this.lineSeparator = ek.state.facet(Dk.j.lineSeparator)
      }
      append(kk) {
        this.text += kk
      }
      lineBreak() {
        this.text += kD
      }
      readRange(kk, ek) {
        if (!kk) return this;
        let ik = kk.parentNode;
        for (let Dk = kk;;) {
          this.findPointBefore(ik, Dk);
          let kk = this.text.length;
          this.readNode(Dk);
          let fk = ni.get(Dk),
            Sk = Dk.nextSibling;
          if (Sk == ek) {
            (null === fk || void 0 === fk ? void 0 : fk.breakAfter) && !Sk && ik != this.view.contentDOM && this.lineBreak();
            break
          }
          let bk = ni.get(Sk);
          (fk && bk ? fk.breakAfter : (fk ? fk.breakAfter : Zk(Dk)) || Zk(Sk) && ("BR" != Dk.nodeName || (null === fk || void 0 === fk ? void 0 : fk.isWidget())) && this.text.length > kk) && !DD(Sk, ek) && this.lineBreak(), Dk = Sk
        }
        return this.findPointBefore(ik, ek), this
      }
      readTextNode(kk) {
        let ek = kk.nodeValue;
        for (let ik of this.points) ik.node == kk && (ik.pos = this.text.length + Math.min(ik.offset, ek.length));
        for (let ik = 0, Dk = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let fk, Sk = -1,
            bk = 1;
          if (this.lineSeparator ? (Sk = ek.indexOf(this.lineSeparator, ik), bk = this.lineSeparator.length) : (fk = Dk.exec(ek)) && (Sk = fk.index, bk = fk[0].length), this.append(ek.slice(ik, Sk < 0 ? ek.length : Sk)), Sk < 0) break;
          if (this.lineBreak(), bk > 1)
            for (let ek of this.points) ek.node == kk && ek.pos > this.text.length && (ek.pos -= bk - 1);
          ik = Sk + bk
        }
      }
      readNode(kk) {
        let ek = ni.get(kk),
          ik = ek && ek.overrideDOMText;
        if (null != ik) {
          this.findPointInside(kk, ik.length);
          for (let kk = ik.iter(); !kk.next().done;) kk.lineBreak ? this.lineBreak() : this.append(kk.value)
        } else 3 == kk.nodeType ? this.readTextNode(kk) : "BR" == kk.nodeName ? kk.nextSibling && this.lineBreak() : 1 == kk.nodeType && this.readRange(kk.firstChild, null)
      }
      findPointBefore(kk, ek) {
        for (let ik of this.points) ik.node == kk && kk.childNodes[ik.offset] == ek && (ik.pos = this.text.length)
      }
      findPointInside(kk, ek) {
        for (let ik of this.points)(3 == kk.nodeType ? ik.node == kk : kk.contains(ik.node)) && (ik.pos = this.text.length + (iD(kk, ik.node, ik.offset) ? ek : 0))
      }
    }

    function iD(kk, ek, ik) {
      for (;;) {
        if (!ek || ik < gk(ek)) return !1;
        if (ek == kk) return !0;
        ik = Tk(ek) + 1, ek = ek.parentNode
      }
    }

    function DD(kk, ek) {
      let ik;
      for (; kk != ek && kk; kk = kk.nextSibling) {
        let ek = ni.get(kk);
        if (!(null === ek || void 0 === ek ? void 0 : ek.isWidget())) return !1;
        ek && (ik || (ik = [])).push(ek)
      }
      if (ik)
        for (let Dk of ik) {
          let kk = Dk.overrideDOMText;
          if (null === kk || void 0 === kk ? void 0 : kk.length) return !1
        }
      return !0
    }
    class fD {
      constructor(kk, ek) {
        this.node = kk, this.offset = ek, this.pos = -1
      }
    }
    class SD {
      constructor(kk, ek, ik, fk) {
        this.typeOver = fk, this.bounds = null, this.text = "", this.domChanged = ek > -1;
        let {
          impreciseHead: Sk,
          impreciseAnchor: bk
        } = kk.docView, rk = kk.state.selection;
        if (kk.state.readOnly && ek > -1) this.newSel = null;
        else if (ek > -1 && (this.bounds = bD(kk.docView.tile, ek, ik, 0))) {
          let ek = Sk || bk ? [] : function(kk) {
              let ek = [];
              if (kk.root.activeElement != kk.contentDOM) return ek;
              let {
                anchorNode: ik,
                anchorOffset: Dk,
                focusNode: fk,
                focusOffset: Sk
              } = kk.observer.selectionRange;
              ik && (ek.push(new fD(ik, Dk)), fk == ik && Sk == Dk || ek.push(new fD(fk, Sk)));
              return ek
            }(kk),
            ik = new eD(ek, kk);
          ik.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = ik.text, this.newSel = function(kk, ek) {
            if (0 == kk.length) return null;
            let ik = kk[0].pos,
              fk = 2 == kk.length ? kk[1].pos : ik;
            return ik > -1 && fk > -1 ? Dk.h.single(ik + ek, fk + ek) : null
          }(ek, this.bounds.from)
        } else {
          let ek = kk.observer.selectionRange,
            ik = Sk && Sk.node == ek.focusNode && Sk.offset == ek.focusOffset || !tk(kk.contentDOM, ek.focusNode) ? rk.main.head : kk.docView.posFromDOM(ek.focusNode, ek.focusOffset),
            fk = bk && bk.node == ek.anchorNode && bk.offset == ek.anchorOffset || !tk(kk.contentDOM, ek.anchorNode) ? rk.main.anchor : kk.docView.posFromDOM(ek.anchorNode, ek.anchorOffset),
            Pk = kk.viewport;
          if ((Ak.ios || Ak.chrome) && rk.main.empty && ik != fk && (Pk.from > 0 || Pk.to < kk.state.doc.length)) {
            let ek = Math.min(ik, fk),
              Dk = Math.max(ik, fk),
              Sk = Pk.from - ek,
              bk = Pk.to - Dk;
            0 != Sk && 1 != Sk && 0 != ek || 0 != bk && -1 != bk && Dk != kk.state.doc.length || (ik = 0, fk = kk.state.doc.length)
          }
          if (kk.inputState.composing > -1 && rk.lw.length > 1) this.newSel = rk.replaceRange(Dk.h.range(fk, ik));
          else if (kk.lineWrapping && fk == ik && (!rk.main.empty || rk.main.head != ik) && kk.inputState.lastTouchTime > Date.now() - 100) {
            let ek = kk.coordsAtPos(ik, -1),
              fk = 0;
            ek && (fk = kk.inputState.lastTouchY <= ek.bottom ? -1 : 1), this.newSel = Dk.h.create([Dk.h.cursor(ik, fk)])
          } else this.newSel = Dk.h.single(fk, ik)
        }
      }
    }

    function bD(kk, ek, ik, Dk) {
      if (kk.isComposite()) {
        let fk = -1,
          Sk = -1,
          bk = -1,
          rk = -1;
        for (let Pk = 0, mk = Dk, Mk = Dk; Pk < kk.children.length; Pk++) {
          let Dk = kk.children[Pk],
            Kk = mk + Dk.length;
          if (mk < ek && Kk > ik) return bD(Dk, ek, ik, mk);
          if (Kk >= ek && -1 == fk && (fk = Pk, Sk = mk), mk > ik && Dk.dom.parentNode == kk.dom) {
            bk = Pk, rk = Mk;
            break
          }
          Mk = Kk, mk = Kk + Dk.breakAfter
        }
        return {
          from: Sk,
          to: rk < 0 ? Dk + kk.length : rk,
          startDOM: (fk ? kk.children[fk - 1].dom.nextSibling : null) || kk.dom.firstChild,
          endDOM: bk < kk.children.length && bk >= 0 ? kk.children[bk].dom : null
        }
      }
      return kk.isText() ? {
        from: Dk,
        to: Dk + kk.length,
        startDOM: kk.dom,
        endDOM: kk.dom.nextSibling
      } : null
    }

    function rD(kk, ek) {
      let ik, {
          newSel: fk
        } = ek,
        {
          state: Sk
        } = kk,
        bk = Sk.selection.main,
        rk = kk.inputState.lastKeyTime > Date.now() - 100 ? kk.inputState.lastKeyCode : -1;
      if (ek.bounds) {
        let {
          from: kk,
          to: fk
        } = ek.bounds, Pk = bk.from, mk = null;
        (8 === rk || Ak.android && ek.text.length < fk - kk) && (Pk = bk.to, mk = "end");
        let Mk, Kk, xk = Sk.doc.sliceString(kk, fk, kD);
        !bk.empty && bk.from >= kk && bk.to <= fk && (ek.typeOver || xk != ek.text) && xk.slice(0, bk.from - kk) == ek.text.slice(0, bk.from - kk) && xk.slice(bk.to - kk) == ek.text.slice(Mk = ek.text.length - (xk.length - (bk.to - kk))) ? ik = {
          from: bk.from,
          to: bk.to,
          insert: Dk.I.of(ek.text.slice(bk.from - kk, Mk).split(kD))
        } : (Kk = mD(xk, ek.text, Pk - kk, mk)) && (Ak.chrome && 13 == rk && Kk.toB == Kk.from + 2 && ek.text.slice(Kk.from, Kk.toB) == kD + kD && Kk.toB--, ik = {
          from: kk + Kk.from,
          to: kk + Kk.toA,
          insert: Dk.I.of(ek.text.slice(Kk.from, Kk.toB).split(kD))
        })
      } else fk && (!kk.hasFocus && Sk.facet(Oe) || MD(fk, bk)) && (fk = null);
      if (!ik && !fk) return !1;
      if ((Ak.mac || Ak.android) && ik && ik.from == ik.to && ik.from == bk.head - 1 && /^\. ?$/.test(ik.insert.toString()) && "off" == kk.contentDOM.getAttribute("autocorrect") ? (fk && 2 == ik.insert.length && (fk = Dk.h.single(fk.main.anchor - 1, fk.main.head - 1)), ik = {
          from: ik.from,
          to: ik.to,
          insert: Dk.I.of([ik.insert.toString().replace(".", " ")])
        }) : Sk.doc.lineAt(bk.from).to < bk.to && kk.docView.lineHasWidget(bk.to) && kk.inputState.insertingTextAt > Date.now() - 50 ? ik = {
          from: bk.from,
          to: bk.to,
          insert: Sk.toText(kk.inputState.insertingText)
        } : Ak.chrome && ik && ik.from == ik.to && ik.from == bk.head && "\n " == ik.insert.toString() && kk.lineWrapping && (fk && (fk = Dk.h.single(fk.main.anchor - 1, fk.main.head - 1)), ik = {
          from: bk.from,
          to: bk.to,
          insert: Dk.I.of([" "])
        }), ik) return PD(kk, ik, fk, rk);
      if (fk && !MD(fk, bk)) {
        let ek = !1,
          ik = "select";
        return kk.inputState.lastSelectionTime > Date.now() - 50 && ("select" == kk.inputState.lastSelectionOrigin && (ek = !0), ik = kk.inputState.lastSelectionOrigin, "select.pointer" == ik && (fk = gi(Sk.facet(fi).map((ek => ek(kk))), fk))), kk.dispatch({
          selection: fk,
          scrollIntoView: ek,
          userEvent: ik
        }), !0
      }
      return !1
    }

    function PD(kk, ek, ik) {
      let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (Ak.ios && kk.inputState.flushIOSKey(ek)) return !0;
      let Sk = kk.state.selection.main;
      if (Ak.android && (ek.to == Sk.to && (ek.from == Sk.from || ek.from == Sk.from - 1 && " " == kk.state.sliceDoc(ek.from, Sk.from)) && 1 == ek.insert.length && 2 == ek.insert.lines && Se(kk.contentDOM, "Enter", 13) || (ek.from == Sk.from - 1 && ek.to == Sk.to && 0 == ek.insert.length || 8 == fk && ek.insert.length < ek.to - ek.from && ek.to > Sk.head) && Se(kk.contentDOM, "Backspace", 8) || ek.from == Sk.from && ek.to == Sk.to + 1 && 0 == ek.insert.length && Se(kk.contentDOM, "Delete", 46))) return !0;
      let bk, rk = ek.insert.toString();
      kk.inputState.composing >= 0 && kk.inputState.composing++;
      let Pk = () => bk || (bk = function(kk, ek, ik) {
        let fk, Sk = kk.state,
          bk = Sk.selection.main,
          rk = -1;
        if (ek.from == ek.to && ek.from < bk.from || ek.from > bk.to) {
          let ik = ek.from < bk.from ? -1 : 1,
            Dk = ik < 0 ? bk.from : bk.to,
            fk = Oi(Sk.facet(fi).map((ek => ek(kk))), Dk, ik);
          ek.from == fk && (rk = fk)
        }
        if (rk > -1) fk = {
          changes: ek,
          selection: Dk.h.cursor(ek.from + ek.insert.length, -1)
        };
        else if (ek.from >= bk.from && ek.to <= bk.to && ek.to - ek.from >= (bk.to - bk.from) / 3 && (!ik || ik.main.empty && ik.main.from == ek.from + ek.insert.length) && kk.inputState.composing < 0) {
          let ik = bk.from < ek.from ? Sk.sliceDoc(bk.from, ek.from) : "",
            Dk = bk.to > ek.to ? Sk.sliceDoc(ek.to, bk.to) : "";
          fk = Sk.replaceSelection(kk.state.toText(ik + ek.insert.sliceString(0, void 0, kk.state.lineBreak) + Dk))
        } else {
          let rk = Sk.changes(ek),
            Pk = ik && ik.main.to <= rk.newLength ? ik.main : void 0;
          if (Sk.selection.lw.length > 1 && (kk.inputState.composing >= 0 || kk.inputState.compositionPendingChange) && ek.to <= bk.to + 10 && ek.to >= bk.to - 10) {
            let mk, Mk = kk.state.sliceDoc(ek.from, ek.to),
              Kk = ik && Xi(kk, ik.main.head);
            if (Kk) {
              let kk = ek.insert.length - (ek.to - ek.from);
              mk = {
                from: Kk.from,
                to: Kk.to - kk
              }
            } else mk = kk.state.doc.lineAt(bk.head);
            let xk = bk.to - ek.to;
            fk = Sk.changeByRange((ik => {
              if (ik.from == bk.from && ik.to == bk.to) return {
                changes: rk,
                range: Pk || ik.map(rk)
              };
              let fk = ik.to - xk,
                Kk = fk - Mk.length;
              if (kk.state.sliceDoc(Kk, fk) != Mk || fk >= mk.from && Kk <= mk.to) return {
                range: ik
              };
              let nk = Sk.changes({
                  from: Kk,
                  to: fk,
                  insert: ek.insert
                }),
                Uk = ik.to - bk.to;
              return {
                changes: nk,
                range: Pk ? Dk.h.range(Math.max(0, Pk.anchor + Uk), Math.max(0, Pk.head + Uk)) : ik.map(nk)
              }
            }))
          } else fk = {
            changes: rk,
            selection: Pk && Sk.selection.replaceRange(Pk)
          }
        }
        let Pk = "input.type";
        (kk.composing || kk.inputState.compositionPendingChange && kk.inputState.compositionEndedAt > Date.now() - 50) && (kk.inputState.compositionPendingChange = !1, Pk += ".compose", kk.inputState.compositionFirstChange && (Pk += ".start", kk.inputState.compositionFirstChange = !1));
        return Sk.update(fk, {
          userEvent: Pk,
          scrollIntoView: !0
        })
      }(kk, ek, ik));
      return kk.state.facet(Ee).some((ik => ik(kk, ek.from, ek.to, rk, Pk))) || kk.dispatch(Pk()), !0
    }

    function mD(kk, ek, ik, Dk) {
      let fk = Math.min(kk.length, ek.length),
        Sk = 0;
      for (; Sk < fk && kk.charCodeAt(Sk) == ek.charCodeAt(Sk);) Sk++;
      if (Sk == fk && kk.length == ek.length) return null;
      let bk = kk.length,
        rk = ek.length;
      for (; bk > 0 && rk > 0 && kk.charCodeAt(bk - 1) == ek.charCodeAt(rk - 1);) bk--, rk--;
      if ("end" == Dk) {
        ik -= bk + Math.max(0, Sk - Math.min(bk, rk)) - Sk
      }
      if (bk < Sk && kk.length < ek.length) {
        Sk -= ik <= Sk && ik >= bk ? Sk - ik : 0, rk = Sk + (rk - bk), bk = Sk
      } else if (rk < Sk) {
        Sk -= ik <= Sk && ik >= rk ? Sk - ik : 0, bk = Sk + (bk - rk), rk = Sk
      }
      return {
        from: Sk,
        toA: bk,
        toB: rk
      }
    }

    function MD(kk, ek) {
      return ek.head == kk.main.head && ek.anchor == kk.main.anchor
    }
    class KD {
      setSelectionOrigin(kk) {
        this.lastSelectionOrigin = kk, this.lastSelectionTime = Date.now()
      }
      constructor(kk) {
        this.view = kk, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = kk.hasFocus, Ak.safari && kk.contentDOM.addEventListener("input", (() => null)), Ak.gecko && function(kk) {
          ED.has(kk) || (ED.add(kk), kk.addEventListener("copy", (() => {})), kk.addEventListener("cut", (() => {})))
        }(kk.contentDOM.ownerDocument)
      }
      handleEvent(kk) {
        (function(kk, ek) {
          if (!ek.bubbles) return !0;
          if (ek.defaultPrevented) return !1;
          for (let ik, Dk = ek.target; Dk != kk.contentDOM; Dk = Dk.parentNode)
            if (!Dk || 11 == Dk.nodeType || (ik = ni.get(Dk)) && ik.isWidget() && !ik.isHidden && ik.widget.ignoreEvent(ek)) return !1;
          return !0
        })(this.view, kk) && !this.ignoreDuringComposition(kk) && ("keydown" == kk.type && this.keydown(kk) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(kk.type, kk))) : this.runHandlers(kk.type, kk)))
      }
      runHandlers(kk, ek) {
        let ik = this.handlers[kk];
        if (ik) {
          for (let kk of ik.observers) kk(this.view, ek);
          for (let kk of ik.handlers) {
            if (ek.defaultPrevented) break;
            if (kk(this.view, ek)) {
              ek.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(kk) {
        let ek = nD(kk),
          ik = this.handlers,
          Dk = this.view.contentDOM;
        for (let fk in ek)
          if ("scroll" != fk) {
            let kk = !ek[fk].handlers.length,
              Sk = ik[fk];
            Sk && kk != !Sk.handlers.length && (Dk.removeEventListener(fk, this.handleEvent), Sk = null), Sk || Dk.addEventListener(fk, this.handleEvent, {
              passive: kk
            })
          } for (let fk in ik) "scroll" == fk || ek[fk] || Dk.removeEventListener(fk, this.handleEvent);
        this.handlers = ek
      }
      keydown(kk) {
        if (this.lastKeyCode = kk.keyCode, this.lastKeyTime = Date.now(), 9 == kk.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != kk.keyCode && wD.indexOf(kk.keyCode) < 0 && (this.tabFocusMode = -1), Ak.android && Ak.chrome && !kk.synthetic && (13 == kk.keyCode || 8 == kk.keyCode)) return this.view.observer.delayAndroidKey(kk.key, kk.keyCode), !0;
        let ek;
        return !Ak.ios || kk.synthetic || kk.altKey || kk.metaKey || kk.shiftKey || !((ek = UD.find((ek => ek.keyCode == kk.keyCode))) && !kk.ctrlKey || HD.indexOf(kk.key) > -1 && kk.ctrlKey) ? (229 != kk.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = ek || kk, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(kk) {
        let ek = this.pendingIOSKey;
        return !!ek && (!("Enter" == ek.key && kk && kk.from < kk.to && /^\S+$/.test(kk.insert.toString())) && (this.pendingIOSKey = void 0, Se(this.view.contentDOM, ek.key, ek.keyCode, ek instanceof KeyboardEvent ? ek : void 0)))
      }
      ignoreDuringComposition(kk) {
        return !(!/^key/.test(kk.type) || kk.synthetic) && (this.composing > 0 || !!(Ak.safari && !Ak.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function xD(kk, ek) {
      return (ik, Dk) => {
        try {
          return ek.call(kk, Dk, ik)
        } catch (fk) {
          Ze(ik.state, fk)
        }
      }
    }

    function nD(kk) {
      let ek = Object.create(null);

      function ik(kk) {
        return ek[kk] || (ek[kk] = {
          observers: [],
          handlers: []
        })
      }
      for (let Dk of kk) {
        let kk = Dk.spec,
          ek = kk && kk.plugin.domEventHandlers,
          fk = kk && kk.plugin.domEventObservers;
        if (ek)
          for (let Sk in ek) {
            let kk = ek[Sk];
            kk && ik(Sk).handlers.push(xD(Dk.value, kk))
          }
        if (fk)
          for (let Sk in fk) {
            let kk = fk[Sk];
            kk && ik(Sk).observers.push(xD(Dk.value, kk))
          }
      }
      for (let Dk in yD) ik(Dk).handlers.push(yD[Dk]);
      for (let Dk in YD) ik(Dk).observers.push(YD[Dk]);
      return ek
    }
    const UD = [{
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
      HD = "dthko",
      wD = [16, 17, 18, 20, 91, 92, 224, 225];

    function lD(kk) {
      return .7 * Math.max(0, kk) + 8
    }
    class pD {
      constructor(kk, ek, ik, fk) {
        this.view = kk, this.startEvent = ek, this.style = ik, this.mustSelect = fk, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = ek, this.scrollParents = Jk(kk.contentDOM), this.atoms = kk.state.facet(fi).map((ek => ek(kk)));
        let Sk = kk.contentDOM.ownerDocument;
        Sk.addEventListener("mousemove", this.move = this.move.bind(this)), Sk.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = ek.shiftKey, this.multiple = kk.state.facet(Dk.j.allowMultipleSelections) && function(kk, ek) {
          let ik = kk.state.facet(qe);
          return ik.length ? ik[0](ek) : Ak.mac ? ek.metaKey : ek.ctrlKey
        }(kk, ek), this.dragging = !(! function(kk, ek) {
          let {
            main: ik
          } = kk.state.selection;
          if (ik.empty) return !1;
          let Dk = Wk(kk.root);
          if (!Dk || 0 == Dk.rangeCount) return !0;
          let fk = Dk.getRangeAt(0).getClientRects();
          for (let Sk = 0; Sk < fk.length; Sk++) {
            let kk = fk[Sk];
            if (kk.left <= ek.clientX && kk.right >= ek.clientX && kk.top <= ek.clientY && kk.bottom >= ek.clientY) return !0
          }
          return !1
        }(kk, ek) || 1 != uD(ek)) && null
      }
      start(kk) {
        !1 === this.dragging && this.select(kk)
      }
      move(kk) {
        if (0 == kk.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (ek = this.startEvent, ik = kk, Math.max(Math.abs(ek.clientX - ik.clientX), Math.abs(ek.clientY - ik.clientY)) < 10)) return;
        var ek, ik;
        this.select(this.lastEvent = kk);
        let Dk = 0,
          fk = 0,
          Sk = 0,
          bk = 0,
          rk = this.view.win.innerWidth,
          Pk = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: Sk,
          right: rk
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: bk,
          bottom: Pk
        } = this.scrollParents.y.getBoundingClientRect());
        let mk = Pi(this.view);
        kk.clientX - mk.left <= Sk + 6 ? Dk = -lD(Sk - kk.clientX) : kk.clientX + mk.right >= rk - 6 && (Dk = lD(kk.clientX - rk)), kk.clientY - mk.top <= bk + 6 ? fk = -lD(bk - kk.clientY) : kk.clientY + mk.bottom >= Pk - 6 && (fk = lD(kk.clientY - Pk)), this.setScrollSpeed(Dk, fk)
      }
      up(kk) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || kk.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let kk = this.view.contentDOM.ownerDocument;
        kk.removeEventListener("mousemove", this.move), kk.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(kk, ek) {
        this.scrollSpeed = {
          x: kk,
          y: ek
        }, kk || ek ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: kk,
          y: ek
        } = this.scrollSpeed;
        kk && this.scrollParents.x && (this.scrollParents.x.scrollLeft += kk, kk = 0), ek && this.scrollParents.y && (this.scrollParents.y.scrollTop += ek, ek = 0), (kk || ek) && this.view.win.scrollBy(kk, ek), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(kk) {
        let {
          view: ek
        } = this, ik = gi(this.atoms, this.style.get(kk, this.extend, this.multiple));
        !this.mustSelect && ik.eq(ek.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: ik,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(kk) {
        kk.transactions.some((kk => kk.isUserEvent("input.type"))) ? this.destroy() : this.style.update(kk) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const yD = Object.create(null),
      YD = Object.create(null),
      LD = Ak.ie && Ak.ie_version < 15 || Ak.ios && Ak.webkit_version < 604;

    function CD(kk, ek, ik) {
      for (let Dk of kk.facet(ek)) ik = Dk(ik, kk);
      return ik
    }

    function AD(kk, ek) {
      ek = CD(kk.state, ae, ek);
      let ik, {
          state: fk
        } = kk,
        Sk = 1,
        bk = fk.toText(ek),
        rk = bk.lines == fk.selection.lw.length;
      if (null != ID && fk.selection.lw.every((kk => kk.empty)) && ID == bk.toString()) {
        let kk = -1;
        ik = fk.changeByRange((ik => {
          let Pk = fk.doc.lineAt(ik.from);
          if (Pk.from == kk) return {
            range: ik
          };
          kk = Pk.from;
          let mk = fk.toText((rk ? bk.line(Sk++).text : ek) + fk.lineBreak);
          return {
            changes: {
              from: Pk.from,
              insert: mk
            },
            range: Dk.h.cursor(ik.from + mk.length)
          }
        }))
      } else ik = rk ? fk.changeByRange((kk => {
        let ek = bk.line(Sk++);
        return {
          changes: {
            from: kk.from,
            to: kk.to,
            insert: ek.text
          },
          range: Dk.h.cursor(kk.from + ek.length)
        }
      })) : fk.replaceSelection(bk);
      kk.dispatch(ik, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function jD(kk, ek, ik, fk) {
      if (1 == fk) return Dk.h.cursor(ek, ik);
      if (2 == fk) return function(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          fk = kk.charCategorizer(ek),
          Sk = kk.doc.lineAt(ek),
          bk = ek - Sk.from;
        if (0 == Sk.length) return Dk.h.cursor(ek);
        0 == bk ? ik = 1 : bk == Sk.length && (ik = -1);
        let rk = bk,
          Pk = bk;
        ik < 0 ? rk = (0, Dk.U)(Sk.text, bk, !1) : Pk = (0, Dk.U)(Sk.text, bk);
        let mk = fk(Sk.text.slice(rk, Pk));
        for (; rk > 0;) {
          let kk = (0, Dk.U)(Sk.text, rk, !1);
          if (fk(Sk.text.slice(kk, rk)) != mk) break;
          rk = kk
        }
        for (; Pk < Sk.length;) {
          let kk = (0, Dk.U)(Sk.text, Pk);
          if (fk(Sk.text.slice(Pk, kk)) != mk) break;
          Pk = kk
        }
        return Dk.h.range(rk + Sk.from, Pk + Sk.from)
      }(kk.state, ek, ik);
      {
        let fk = kk.docView.lineAt(ek, ik),
          Sk = kk.state.doc.lineAt(fk ? fk.posAtEnd : ek),
          bk = fk ? fk.posAtStart : Sk.from,
          rk = fk ? fk.posAtEnd : Sk.to;
        return rk < kk.state.doc.length && rk == Sk.to && rk++, Dk.h.range(bk, rk)
      }
    }
    YD.scroll = kk => {
      kk.inputState.lastScrollTop = kk.scrollDOM.scrollTop, kk.inputState.lastScrollLeft = kk.scrollDOM.scrollLeft
    }, YD.wheel = YD.mousewheel = kk => {
      kk.inputState.lastWheelEvent = Date.now()
    }, yD.keydown = (kk, ek) => (kk.inputState.setSelectionOrigin("select"), 27 == ek.keyCode && 0 != kk.inputState.tabFocusMode && (kk.inputState.tabFocusMode = Date.now() + 2e3), !1), YD.touchstart = (kk, ek) => {
      let ik = kk.inputState,
        Dk = ek.targetTouches[0];
      ik.lastTouchTime = Date.now(), Dk && (ik.lastTouchX = Dk.clientX, ik.lastTouchY = Dk.clientY), ik.setSelectionOrigin("select.pointer")
    }, YD.touchmove = kk => {
      kk.inputState.setSelectionOrigin("select.pointer")
    }, yD.mousedown = (kk, ek) => {
      if (kk.observer.flush(), kk.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let ik = null;
      for (let Dk of kk.state.facet(ze))
        if (ik = Dk(kk, ek), ik) break;
      if (ik || 0 != ek.button || (ik = function(kk, ek) {
          let ik = kk.posAndSideAtCoords({
              x: ek.clientX,
              y: ek.clientY
            }, !1),
            fk = uD(ek),
            Sk = kk.state.selection;
          return {
            update(kk) {
              kk.docChanged && (ik.pos = kk.changes.mapPos(ik.pos), Sk = Sk.map(kk.changes))
            },
            get(ek, bk, rk) {
              let Pk, mk = kk.posAndSideAtCoords({
                  x: ek.clientX,
                  y: ek.clientY
                }, !1),
                Mk = jD(kk, mk.pos, mk.assoc, fk);
              if (ik.pos != mk.pos && !bk) {
                let ek = jD(kk, ik.pos, ik.assoc, fk),
                  Sk = Math.min(ek.from, Mk.from),
                  bk = Math.max(ek.to, Mk.to);
                Mk = Sk < Mk.from ? Dk.h.range(Sk, bk, Mk.assoc) : Dk.h.range(bk, Sk, Mk.assoc)
              }
              return bk ? Sk.replaceRange(Sk.main.extend(Mk.from, Mk.to, Mk.assoc)) : rk && 1 == fk && Sk.lw.length > 1 && (Pk = function(kk, ek) {
                for (let ik = 0; ik < kk.lw.length; ik++) {
                  let {
                    from: fk,
                    to: Sk
                  } = kk.lw[ik];
                  if (fk <= ek && Sk >= ek) return Dk.h.create(kk.lw.slice(0, ik).concat(kk.lw.slice(ik + 1)), kk.mainIndex == ik ? 0 : kk.mainIndex - (kk.mainIndex > ik ? 1 : 0))
                }
                return null
              }(Sk, mk.pos)) ? Pk : rk ? Sk.addRange(Mk) : Dk.h.create([Mk])
            }
          }
        }(kk, ek)), ik) {
        let Dk = !kk.hasFocus;
        kk.inputState.startMouseSelection(new pD(kk, ek, ik, Dk)), Dk && kk.observer.ignore((() => {
          De(kk.contentDOM);
          let ek = kk.root.activeElement;
          ek && !ek.contains(kk.contentDOM) && ek.blur()
        }));
        let fk = kk.inputState.mouseSelection;
        if (fk) return fk.start(ek), !1 === fk.dragging
      } else kk.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const sD = Ak.ie && Ak.ie_version <= 11;
    let dD = null,
      VD = 0,
      FD = 0;

    function uD(kk) {
      if (!sD) return kk.detail;
      let ek = dD,
        ik = FD;
      return dD = kk, FD = Date.now(), VD = !ek || ik > Date.now() - 400 && Math.abs(ek.clientX - kk.clientX) < 2 && Math.abs(ek.clientY - kk.clientY) < 2 ? (VD + 1) % 3 : 1
    }

    function qD(kk, ek, ik, Dk) {
      if (!(ik = CD(kk.state, ae, ik))) return;
      let fk = kk.posAtCoords({
          x: ek.clientX,
          y: ek.clientY
        }, !1),
        {
          draggedContent: Sk
        } = kk.inputState,
        bk = Dk && Sk && function(kk, ek) {
          let ik = kk.state.facet(Ie);
          return ik.length ? ik[0](ek) : Ak.mac ? !ek.altKey : !ek.ctrlKey
        }(kk, ek) ? {
          from: Sk.from,
          to: Sk.to
        } : null,
        rk = {
          from: fk,
          insert: ik
        },
        Pk = kk.state.changes(bk ? [bk, rk] : rk);
      kk.focus(), kk.dispatch({
        changes: Pk,
        selection: {
          anchor: Pk.mapPos(fk, -1),
          head: Pk.mapPos(fk, 1)
        },
        userEvent: bk ? "move.drop" : "input.drop"
      }), kk.inputState.draggedContent = null
    }
    yD.dragstart = (kk, ek) => {
      let {
        selection: {
          main: ik
        }
      } = kk.state;
      if (ek.target.draggable) {
        let fk = kk.docView.tile.nearest(ek.target);
        if (fk && fk.isWidget()) {
          let kk = fk.posAtStart,
            ek = kk + fk.length;
          (kk >= ik.to || ek <= ik.from) && (ik = Dk.h.range(kk, ek))
        }
      }
      let {
        inputState: fk
      } = kk;
      return fk.mouseSelection && (fk.mouseSelection.dragging = !0), fk.draggedContent = ik, ek.dataTransfer && (ek.dataTransfer.setData("Text", CD(kk.state, We, kk.state.sliceDoc(ik.from, ik.to))), ek.dataTransfer.effectAllowed = "copyMove"), !1
    }, yD.dragend = kk => (kk.inputState.draggedContent = null, !1), yD.drop = (kk, ek) => {
      if (!ek.dataTransfer) return !1;
      if (kk.state.readOnly) return !0;
      let ik = ek.dataTransfer.files;
      if (ik && ik.length) {
        let Dk = Array(ik.length),
          fk = 0,
          Sk = () => {
            ++fk == ik.length && qD(kk, ek, Dk.filter((kk => null != kk)).join(kk.state.lineBreak), !1)
          };
        for (let kk = 0; kk < ik.length; kk++) {
          let ek = new FileReader;
          ek.onerror = Sk, ek.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(ek.result) || (Dk[kk] = ek.result), Sk()
          }, ek.readAsText(ik[kk])
        }
        return !0
      } {
        let ik = ek.dataTransfer.getData("Text");
        if (ik) return qD(kk, ek, ik, !0), !0
      }
      return !1
    }, yD.paste = (kk, ek) => {
      if (kk.state.readOnly) return !0;
      kk.observer.flush();
      let ik = LD ? null : ek.clipboardData;
      return ik ? (AD(kk, ik.getData("text/plain") || ik.getData("text/uri-list")), !0) : (function(kk) {
        let ek = kk.dom.parentNode;
        if (!ek) return;
        let ik = ek.appendChild(document.createElement("textarea"));
        ik.style.cssText = "position: fixed; left: -10000px; top: 10px", ik.focus(), setTimeout((() => {
          kk.focus(), ik.remove(), AD(kk, ik.value)
        }), 50)
      }(kk), !1)
    };
    let ID = null;
    yD.copy = yD.cut = (kk, ek) => {
      if (!Xk(kk.contentDOM, kk.observer.selectionRange)) return !1;
      let {
        text: ik,
        lw: Dk,
        linewise: fk
      } = function(kk) {
        let ek = [],
          ik = [],
          Dk = !1;
        for (let fk of kk.selection.lw) fk.empty || (ek.push(kk.sliceDoc(fk.from, fk.to)), ik.push(fk));
        if (!ek.length) {
          let fk = -1;
          for (let {
              from: Dk
            }
            of kk.selection.lw) {
            let Sk = kk.doc.lineAt(Dk);
            Sk.number > fk && (ek.push(Sk.text), ik.push({
              from: Sk.from,
              to: Math.min(kk.doc.length, Sk.to + 1)
            })), fk = Sk.number
          }
          Dk = !0
        }
        return {
          text: CD(kk, We, ek.join(kk.lineBreak)),
          lw: ik,
          linewise: Dk
        }
      }(kk.state);
      if (!ik && !fk) return !1;
      ID = fk ? ik : null, "cut" != ek.type || kk.state.readOnly || kk.dispatch({
        changes: Dk,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let Sk = LD ? null : ek.clipboardData;
      return Sk ? (Sk.clearData(), Sk.setData("text/plain", ik), !0) : (function(kk, ek) {
        let ik = kk.dom.parentNode;
        if (!ik) return;
        let Dk = ik.appendChild(document.createElement("textarea"));
        Dk.style.cssText = "position: fixed; left: -10000px; top: 10px", Dk.value = ek, Dk.focus(), Dk.selectionEnd = ek.length, Dk.selectionStart = 0, setTimeout((() => {
          Dk.remove(), kk.focus()
        }), 50)
      }(kk, ik), !1)
    };
    const zD = Dk.b.define();

    function QD(kk, ek) {
      let ik = [];
      for (let Dk of kk.facet(he)) {
        let fk = Dk(kk, ek);
        fk && ik.push(fk)
      }
      return ik.length ? kk.update({
        effects: ik,
        annotations: zD.of(!0)
      }) : null
    }

    function vD(kk) {
      setTimeout((() => {
        let ek = kk.hasFocus;
        if (ek != kk.inputState.notifiedFocused) {
          let ik = QD(kk.state, ek);
          ik ? kk.dispatch(ik) : kk.update([])
        }
      }), 10)
    }
    YD.focus = kk => {
      kk.inputState.lastFocusTime = Date.now(), kk.scrollDOM.scrollTop || !kk.inputState.lastScrollTop && !kk.inputState.lastScrollLeft || (kk.scrollDOM.scrollTop = kk.inputState.lastScrollTop, kk.scrollDOM.scrollLeft = kk.inputState.lastScrollLeft), vD(kk)
    }, YD.blur = kk => {
      kk.observer.clearSelectionRange(), vD(kk)
    }, YD.compositionstart = YD.compositionupdate = kk => {
      kk.observer.editContext || (null == kk.inputState.compositionFirstChange && (kk.inputState.compositionFirstChange = !0), kk.inputState.composing < 0 && (kk.inputState.composing = 0))
    }, YD.compositionend = kk => {
      kk.observer.editContext || (kk.inputState.composing = -1, kk.inputState.compositionEndedAt = Date.now(), kk.inputState.compositionPendingKey = !0, kk.inputState.compositionPendingChange = kk.observer.pendingRecords().length > 0, kk.inputState.compositionFirstChange = null, Ak.chrome && Ak.android ? kk.observer.flushSoon() : kk.inputState.compositionPendingChange ? Promise.resolve().then((() => kk.observer.flush())) : setTimeout((() => {
        kk.inputState.composing < 0 && kk.docView.hasComposition && kk.update([])
      }), 50))
    }, YD.contextmenu = kk => {
      kk.inputState.lastContextMenu = Date.now()
    }, yD.beforeinput = (kk, ek) => {
      var ik, Dk;
      if ("insertText" != ek.inputType && "insertCompositionText" != ek.inputType || (kk.inputState.insertingText = ek.data, kk.inputState.insertingTextAt = Date.now()), "insertReplacementText" == ek.inputType && kk.observer.editContext) {
        let Dk = null === (ik = ek.dataTransfer) || void 0 === ik ? void 0 : ik.getData("text/plain"),
          fk = ek.getTargetRanges();
        if (Dk && fk.length) {
          let ek = fk[0],
            ik = kk.posAtDOM(ek.startContainer, ek.startOffset),
            Sk = kk.posAtDOM(ek.endContainer, ek.endOffset);
          return PD(kk, {
            from: ik,
            to: Sk,
            insert: kk.state.toText(Dk)
          }, null), !0
        }
      }
      let fk;
      if (Ak.chrome && Ak.android && (fk = UD.find((kk => kk.inputType == ek.inputType))) && (kk.observer.delayAndroidKey(fk.key, fk.keyCode), "Backspace" == fk.key || "Delete" == fk.key)) {
        let ek = (null === (Dk = window.visualViewport) || void 0 === Dk ? void 0 : Dk.height) || 0;
        setTimeout((() => {
          var ik;
          ((null === (ik = window.visualViewport) || void 0 === ik ? void 0 : ik.height) || 0) > ek + 10 && kk.hasFocus && (kk.contentDOM.blur(), kk.focus())
        }), 100)
      }
      return Ak.ios && "deleteContentForward" == ek.inputType && kk.observer.flushSoon(), Ak.safari && "insertText" == ek.inputType && kk.inputState.composing >= 0 && setTimeout((() => YD.compositionend(kk, ek)), 20), !1
    };
    const ED = new Set;
    const hD = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let aD = !1;

    function WD() {
      aD = !1
    }
    class tD {
      constructor(kk) {
        this.lineWrapping = kk, this.doc = Dk.I.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(kk, ek) {
        let ik = this.doc.lineAt(ek).number - this.doc.lineAt(kk).number + 1;
        return this.lineWrapping && (ik += Math.max(0, Math.ceil((ek - kk - ik * this.lineLength * .5) / this.lineLength))), this.lineHeight * ik
      }
      heightForLine(kk) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((kk - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(kk) {
        return this.doc = kk, this
      }
      mustRefreshForWrapping(kk) {
        return hD.indexOf(kk) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(kk) {
        let ek = !1;
        for (let ik = 0; ik < kk.length; ik++) {
          let Dk = kk[ik];
          Dk < 0 ? ik++ : this.heightSamples[Math.floor(10 * Dk)] || (ek = !0, this.heightSamples[Math.floor(10 * Dk)] = !0)
        }
        return ek
      }
      refresh(kk, ek, ik, Dk, fk, Sk) {
        let bk = hD.indexOf(kk) > -1,
          rk = Math.abs(ek - this.lineHeight) > .3 || this.lineWrapping != bk || Math.abs(ik - this.charWidth) > .1;
        if (this.lineWrapping = bk, this.lineHeight = ek, this.charWidth = ik, this.textHeight = Dk, this.lineLength = fk, rk) {
          this.heightSamples = {};
          for (let kk = 0; kk < Sk.length; kk++) {
            let ek = Sk[kk];
            ek < 0 ? kk++ : this.heightSamples[Math.floor(10 * ek)] = !0
          }
        }
        return rk
      }
    }
    class XD {
      constructor(kk, ek) {
        this.from = kk, this.heights = ek, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class BD {
      constructor(kk, ek, ik, Dk, fk) {
        this.from = kk, this.length = ek, this.top = ik, this.height = Dk, this._content = fk
      }
      get type() {
        return "number" == typeof this._content ? qk.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof vk ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(kk) {
        let ek = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(kk._content) ? kk._content : [kk]);
        return new BD(this.from, this.length + kk.length, this.top, this.height + kk.height, ek)
      }
    }
    var cD = function(kk) {
      return kk[kk.ByPos = 0] = "ByPos", kk[kk.ByHeight = 1] = "ByHeight", kk[kk.ByPosNoHeight = 2] = "ByPosNoHeight", kk
    }(cD || (cD = {}));
    const TD = .001;
    class oD {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = kk, this.height = ek, this.flags = ik
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(kk) {
        this.flags = (kk ? 2 : 0) | -3 & this.flags
      }
      setHeight(kk) {
        this.height != kk && (Math.abs(this.height - kk) > TD && (aD = !0), this.height = kk)
      }
      replace(kk, ek, ik) {
        return oD.of(ik)
      }
      decomposeLeft(kk, ek) {
        ek.push(this)
      }
      decomposeRight(kk, ek) {
        ek.push(this)
      }
      applyChanges(kk, ek, ik, Dk) {
        let fk = this,
          Sk = ik.doc;
        for (let bk = Dk.length - 1; bk >= 0; bk--) {
          let {
            fromA: rk,
            toA: Pk,
            fromB: mk,
            toB: Mk
          } = Dk[bk], Kk = fk.lineAt(rk, cD.ByPosNoHeight, ik.setDoc(ek), 0, 0), xk = Kk.to >= Pk ? Kk : fk.lineAt(Pk, cD.ByPosNoHeight, ik, 0, 0);
          for (Mk += xk.to - Pk, Pk = xk.to; bk > 0 && Kk.from <= Dk[bk - 1].toA;) rk = Dk[bk - 1].fromA, mk = Dk[bk - 1].fromB, bk--, rk < Kk.from && (Kk = fk.lineAt(rk, cD.ByPosNoHeight, ik, 0, 0));
          mk += Kk.from - rk, rk = Kk.from;
          let nk = kf.build(ik.setDoc(Sk), kk, mk, Mk);
          fk = ZD(fk, fk.replace(rk, Pk, nk))
        }
        return fk.updateHeight(ik, 0)
      }
      static empty() {
        return new GD(0, 0, 0)
      }
      static of (kk) {
        if (1 == kk.length) return kk[0];
        let ek = 0,
          ik = kk.length,
          Dk = 0,
          fk = 0;
        for (;;)
          if (ek == ik)
            if (Dk > 2 * fk) {
              let fk = kk[ek - 1];
              fk.break ? kk.splice(--ek, 1, fk.left, null, fk.right) : kk.splice(--ek, 1, fk.left, fk.right), ik += 1 + fk.break, Dk -= fk.size
            } else {
              if (!(fk > 2 * Dk)) break;
              {
                let ek = kk[ik];
                ek.break ? kk.splice(ik, 1, ek.left, null, ek.right) : kk.splice(ik, 1, ek.left, ek.right), ik += 2 + ek.break, fk -= ek.size
              }
            }
        else if (Dk < fk) {
          let ik = kk[ek++];
          ik && (Dk += ik.size)
        } else {
          let ek = kk[--ik];
          ek && (fk += ek.size)
        }
        let Sk = 0;
        return null == kk[ek - 1] ? (Sk = 1, ek--) : null == kk[ek] && (Sk = 1, ik++), new RD(oD.of(kk.slice(0, ek)), Sk, oD.of(kk.slice(ik)))
      }
    }

    function ZD(kk, ek) {
      return kk == ek ? kk : (kk.constructor != ek.constructor && (aD = !0), ek)
    }
    oD.prototype.size = 1;
    const OD = Ik.replace({});
    class gD extends oD {
      constructor(kk, ek, ik) {
        super(kk, ek), this.deco = ik, this.spaceAbove = 0
      }
      mainBlock(kk, ek) {
        return new BD(ek, this.length, kk + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(kk, ek, ik, Dk) {
        return this.spaceAbove && kk < ik + this.spaceAbove ? new BD(Dk, 0, ik, this.spaceAbove, OD) : this.mainBlock(ik, Dk)
      }
      lineAt(kk, ek, ik, Dk, fk) {
        let Sk = this.mainBlock(Dk, fk);
        return this.spaceAbove ? this.blockAt(0, ik, Dk, fk).join(Sk) : Sk
      }
      forEachLine(kk, ek, ik, Dk, fk, Sk) {
        kk <= fk + this.length && ek >= fk && Sk(this.lineAt(0, cD.ByPos, ik, Dk, fk))
      }
      setMeasuredHeight(kk) {
        let ek = kk.heights[kk.index++];
        ek < 0 ? (this.spaceAbove = -ek, ek = kk.heights[kk.index++]) : this.spaceAbove = 0, this.setHeight(ek)
      }
      updateHeight(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 3 ? arguments[3] : void 0;
        return ik && ik.from <= ek && ik.more && this.setMeasuredHeight(ik), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class GD extends gD {
      constructor(kk, ek, ik) {
        super(kk, ek, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = ik
      }
      mainBlock(kk, ek) {
        return new BD(ek, this.length, kk + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(kk, ek, ik) {
        let Dk = ik[0];
        return 1 == ik.length && (Dk instanceof GD || Dk instanceof ND && 4 & Dk.flags) && Math.abs(this.length - Dk.length) < 10 ? (Dk instanceof ND ? Dk = new GD(Dk.length, this.height, this.spaceAbove) : Dk.height = this.height, this.outdated || (Dk.outdated = !1), Dk) : oD.of(ik)
      }
      updateHeight(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        return Dk && Dk.from <= ek && Dk.more ? this.setMeasuredHeight(Dk) : (ik || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, kk.heightForLine(this.length - this.collapsed)) + this.breaks * kk.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class ND extends oD {
      constructor(kk) {
        super(kk, 0)
      }
      heightMetrics(kk, ek) {
        let ik, Dk = kk.doc.lineAt(ek).number,
          fk = kk.doc.lineAt(ek + this.length).number,
          Sk = fk - Dk + 1,
          bk = 0;
        if (kk.lineWrapping) {
          let ek = Math.min(this.height, kk.lineHeight * Sk);
          ik = ek / Sk, this.length > Sk + 1 && (bk = (this.height - ek) / (this.length - Sk - 1))
        } else ik = this.height / Sk;
        return {
          firstLine: Dk,
          lastLine: fk,
          perLine: ik,
          perChar: bk
        }
      }
      blockAt(kk, ek, ik, Dk) {
        let {
          firstLine: fk,
          lastLine: Sk,
          perLine: bk,
          perChar: rk
        } = this.heightMetrics(ek, Dk);
        if (ek.lineWrapping) {
          let fk = Dk + (kk < ek.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (kk - ik) / this.height)) * this.length)),
            Sk = ek.doc.lineAt(fk),
            Pk = bk + Sk.length * rk,
            mk = Math.max(ik, kk - Pk / 2);
          return new BD(Sk.from, Sk.length, mk, Pk, 0)
        } {
          let Dk = Math.max(0, Math.min(Sk - fk, Math.floor((kk - ik) / bk))),
            {
              from: rk,
              length: Pk
            } = ek.doc.line(fk + Dk);
          return new BD(rk, Pk, ik + bk * Dk, bk, 0)
        }
      }
      lineAt(kk, ek, ik, Dk, fk) {
        if (ek == cD.ByHeight) return this.blockAt(kk, ik, Dk, fk);
        if (ek == cD.ByPosNoHeight) {
          let {
            from: ek,
            to: Dk
          } = ik.doc.lineAt(kk);
          return new BD(ek, Dk - ek, 0, 0, 0)
        }
        let {
          firstLine: Sk,
          perLine: bk,
          perChar: rk
        } = this.heightMetrics(ik, fk), Pk = ik.doc.lineAt(kk), mk = bk + Pk.length * rk, Mk = Pk.number - Sk, Kk = Dk + bk * Mk + rk * (Pk.from - fk - Mk);
        return new BD(Pk.from, Pk.length, Math.max(Dk, Math.min(Kk, Dk + this.height - mk)), mk, 0)
      }
      forEachLine(kk, ek, ik, Dk, fk, Sk) {
        kk = Math.max(kk, fk), ek = Math.min(ek, fk + this.length);
        let {
          firstLine: bk,
          perLine: rk,
          perChar: Pk
        } = this.heightMetrics(ik, fk);
        for (let mk = kk, Mk = Dk; mk <= ek;) {
          let ek = ik.doc.lineAt(mk);
          if (mk == kk) {
            let ik = ek.number - bk;
            Mk += rk * ik + Pk * (kk - fk - ik)
          }
          let Dk = rk + Pk * ek.length;
          Sk(new BD(ek.from, ek.length, Mk, Dk, 0)), Mk += Dk, mk = ek.to + 1
        }
      }
      replace(kk, ek, ik) {
        let Dk = this.length - ek;
        if (Dk > 0) {
          let kk = ik[ik.length - 1];
          kk instanceof ND ? ik[ik.length - 1] = new ND(kk.length + Dk) : ik.push(null, new ND(Dk - 1))
        }
        if (kk > 0) {
          let ek = ik[0];
          ek instanceof ND ? ik[0] = new ND(kk + ek.length) : ik.unshift(new ND(kk - 1), null)
        }
        return oD.of(ik)
      }
      decomposeLeft(kk, ek) {
        ek.push(new ND(kk - 1), null)
      }
      decomposeRight(kk, ek) {
        ek.push(null, new ND(this.length - kk - 1))
      }
      updateHeight(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 ? arguments[3] : void 0,
          fk = ek + this.length;
        if (Dk && Dk.from <= ek + this.length && Dk.more) {
          let ik = [],
            Sk = Math.max(ek, Dk.from),
            bk = -1;
          for (Dk.from > ek && ik.push(new ND(Dk.from - ek - 1).updateHeight(kk, ek)); Sk <= fk && Dk.more;) {
            let ek = kk.doc.lineAt(Sk).length;
            ik.length && ik.push(null);
            let fk = Dk.heights[Dk.index++],
              rk = 0;
            fk < 0 && (rk = -fk, fk = Dk.heights[Dk.index++]), -1 == bk ? bk = fk : Math.abs(fk - bk) >= TD && (bk = -2);
            let Pk = new GD(ek, fk, rk);
            Pk.outdated = !1, ik.push(Pk), Sk += ek + 1
          }
          Sk <= fk && ik.push(null, new ND(fk - Sk).updateHeight(kk, Sk));
          let rk = oD.of(ik);
          return (bk < 0 || Math.abs(rk.height - this.height) >= TD || Math.abs(bk - this.heightMetrics(kk, ek).perLine) >= TD) && (aD = !0), ZD(this, rk)
        }
        return (ik || this.outdated) && (this.setHeight(kk.heightForGap(ek, ek + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class RD extends oD {
      constructor(kk, ek, ik) {
        super(kk.length + ek + ik.length, kk.height + ik.height, ek | (kk.outdated || ik.outdated ? 2 : 0)), this.left = kk, this.right = ik, this.size = kk.size + ik.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(kk, ek, ik, Dk) {
        let fk = ik + this.left.height;
        return kk < fk ? this.left.blockAt(kk, ek, ik, Dk) : this.right.blockAt(kk, ek, fk, Dk + this.left.length + this.break)
      }
      lineAt(kk, ek, ik, Dk, fk) {
        let Sk = Dk + this.left.height,
          bk = fk + this.left.length + this.break,
          rk = ek == cD.ByHeight ? kk < Sk : kk < bk,
          Pk = rk ? this.left.lineAt(kk, ek, ik, Dk, fk) : this.right.lineAt(kk, ek, ik, Sk, bk);
        if (this.break || (rk ? Pk.to < bk : Pk.from > bk)) return Pk;
        let mk = ek == cD.ByPosNoHeight ? cD.ByPosNoHeight : cD.ByPos;
        return rk ? Pk.join(this.right.lineAt(bk, mk, ik, Sk, bk)) : this.left.lineAt(bk, mk, ik, Dk, fk).join(Pk)
      }
      forEachLine(kk, ek, ik, Dk, fk, Sk) {
        let bk = Dk + this.left.height,
          rk = fk + this.left.length + this.break;
        if (this.break) kk < rk && this.left.forEachLine(kk, ek, ik, Dk, fk, Sk), ek >= rk && this.right.forEachLine(kk, ek, ik, bk, rk, Sk);
        else {
          let Pk = this.lineAt(rk, cD.ByPos, ik, Dk, fk);
          kk < Pk.from && this.left.forEachLine(kk, Pk.from - 1, ik, Dk, fk, Sk), Pk.to >= kk && Pk.from <= ek && Sk(Pk), ek > Pk.to && this.right.forEachLine(Pk.to + 1, ek, ik, bk, rk, Sk)
        }
      }
      replace(kk, ek, ik) {
        let Dk = this.left.length + this.break;
        if (ek < Dk) return this.balanced(this.left.replace(kk, ek, ik), this.right);
        if (kk > this.left.length) return this.balanced(this.left, this.right.replace(kk - Dk, ek - Dk, ik));
        let fk = [];
        kk > 0 && this.decomposeLeft(kk, fk);
        let Sk = fk.length;
        for (let bk of ik) fk.push(bk);
        if (kk > 0 && JD(fk, Sk - 1), ek < this.length) {
          let kk = fk.length;
          this.decomposeRight(ek, fk), JD(fk, kk)
        }
        return oD.of(fk)
      }
      decomposeLeft(kk, ek) {
        let ik = this.left.length;
        if (kk <= ik) return this.left.decomposeLeft(kk, ek);
        ek.push(this.left), this.break && (ik++, kk >= ik && ek.push(null)), kk > ik && this.right.decomposeLeft(kk - ik, ek)
      }
      decomposeRight(kk, ek) {
        let ik = this.left.length,
          Dk = ik + this.break;
        if (kk >= Dk) return this.right.decomposeRight(kk - Dk, ek);
        kk < ik && this.left.decomposeRight(kk, ek), this.break && kk < Dk && ek.push(null), ek.push(this.right)
      }
      balanced(kk, ek) {
        return kk.size > 2 * ek.size || ek.size > 2 * kk.size ? oD.of(this.break ? [kk, null, ek] : [kk, ek]) : (this.left = ZD(this.left, kk), this.right = ZD(this.right, ek), this.setHeight(kk.height + ek.height), this.outdated = kk.outdated || ek.outdated, this.size = kk.size + ek.size, this.length = kk.length + this.break+ek.length, this)
      }
      updateHeight(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: fk,
            right: Sk
          } = this,
          bk = ek + fk.length + this.break,
          rk = null;
        return Dk && Dk.from <= ek + fk.length && Dk.more ? rk = fk = fk.updateHeight(kk, ek, ik, Dk) : fk.updateHeight(kk, ek, ik), Dk && Dk.from <= bk + Sk.length && Dk.more ? rk = Sk = Sk.updateHeight(kk, bk, ik, Dk) : Sk.updateHeight(kk, bk, ik), rk ? this.balanced(fk, Sk) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function JD(kk, ek) {
      let ik, Dk;
      null == kk[ek] && (ik = kk[ek - 1]) instanceof ND && (Dk = kk[ek + 1]) instanceof ND && kk.splice(ek - 1, 3, new ND(ik.length + 1 + Dk.length))
    }
    class kf {
      constructor(kk, ek) {
        this.pos = kk, this.oracle = ek, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = kk
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(kk, ek) {
        if (this.lineStart > -1) {
          let kk = Math.min(ek, this.lineEnd),
            ik = this.nodes[this.nodes.length - 1];
          ik instanceof GD ? ik.length += kk - this.pos : (kk > this.pos || !this.isCovered) && this.nodes.push(new GD(kk - this.pos, -1, 0)), this.writtenTo = kk, ek > kk && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = ek
      }
      point(kk, ek, ik) {
        if (kk < ek || ik.heightRelevant) {
          let Dk = ik.widget ? ik.widget.estimatedHeight : 0,
            fk = ik.widget ? ik.widget.lineBreaks : 0;
          Dk < 0 && (Dk = this.oracle.lineHeight);
          let Sk = ek - kk;
          ik.block ? this.Tkk(new gD(Sk, Dk, ik)) : (Sk || fk || Dk >= 5) && this.addLineDeco(Dk, fk, Sk)
        } else ek > kk && this.span(kk, ek);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: kk,
          to: ek
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = kk, this.lineEnd = ek, this.writtenTo < kk && ((this.writtenTo < kk - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, kk - 1)), this.nodes.push(null)), this.pos > kk && this.nodes.push(new GD(this.pos - kk, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(kk, ek) {
        let ik = new ND(ek - kk);
        return this.oracle.doc.lineAt(kk).to == ek && (ik.flags |= 4), ik
      }
      ensureLine() {
        this.enterLine();
        let kk = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (kk instanceof GD) return kk;
        let ek = new GD(0, -1, 0);
        return this.nodes.push(ek), ek
      }
      Tkk(kk) {
        this.enterLine();
        let ek = kk.deco;
        ek && ek.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(kk), this.writtenTo = this.pos = this.pos + kk.length, ek && ek.endSide > 0 && (this.covering = kk)
      }
      addLineDeco(kk, ek, ik) {
        let Dk = this.ensureLine();
        Dk.length += ik, Dk.collapsed += ik, Dk.widgetHeight = Math.max(Dk.widgetHeight, kk), Dk.breaks += ek, this.writtenTo = this.pos = this.pos + ik
      }
      finish(kk) {
        let ek = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || ek instanceof GD || this.isCovered ? (this.writtenTo < this.pos || null == ek) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new GD(0, -1, 0));
        let ik = kk;
        for (let Dk of this.nodes) Dk instanceof GD && Dk.updateHeight(this.oracle, ik), ik += Dk ? Dk.length : 1;
        return this.nodes
      }
      static build(kk, ek, ik, fk) {
        let Sk = new kf(ik, kk);
        return Dk.w.spans(ek, ik, fk, Sk, 0), Sk.finish(ik)
      }
    }
    class ef {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(kk, ek, ik, Dk) {
        (kk < ek || ik && ik.heightRelevant || Dk && Dk.heightRelevant) && hk(kk, ek, this.changes, 5)
      }
    }

    function Df(kk, ek) {
      let ik = kk.getBoundingClientRect(),
        Dk = kk.ownerDocument,
        fk = Dk.defaultView || window,
        Sk = Math.max(0, ik.left),
        bk = Math.min(fk.innerWidth, ik.right),
        rk = Math.max(0, ik.top),
        Pk = Math.min(fk.innerHeight, ik.bottom);
      for (let mk = kk.parentNode; mk && mk != Dk.body;)
        if (1 == mk.nodeType) {
          let ek = mk,
            ik = window.getComputedStyle(ek);
          if ((ek.scrollHeight > ek.clientHeight || ek.scrollWidth > ek.clientWidth) && "visible" != ik.overflow) {
            let ik = ek.getBoundingClientRect();
            Sk = Math.max(Sk, ik.left), bk = Math.min(bk, ik.right), rk = Math.max(rk, ik.top), Pk = Math.min(mk == kk.parentNode ? fk.innerHeight : Pk, ik.bottom)
          }
          mk = "absolute" == ik.position || "fixed" == ik.position ? ek.offsetParent : ek.parentNode
        } else {
          if (11 != mk.nodeType) break;
          mk = mk.host
        } return {
        left: Sk - ik.left,
        right: Math.max(Sk, bk) - ik.left,
        top: rk - (ik.top + ek),
        bottom: Math.max(rk, Pk) - (ik.top + ek)
      }
    }

    function ff(kk, ek) {
      let ik = kk.getBoundingClientRect();
      return {
        left: 0,
        right: ik.right - ik.left,
        top: ek,
        bottom: ik.bottom - (ik.top + ek)
      }
    }
    class Sf {
      constructor(kk, ek, ik, Dk) {
        this.from = kk, this.to = ek, this.size = ik, this.displaySize = Dk
      }
      static same(kk, ek) {
        if (kk.length != ek.length) return !1;
        for (let ik = 0; ik < kk.length; ik++) {
          let Dk = kk[ik],
            fk = ek[ik];
          if (Dk.from != fk.from || Dk.to != fk.to || Dk.size != fk.size) return !1
        }
        return !0
      }
      draw(kk, ek) {
        return Ik.replace({
          widget: new bf(this.displaySize * (ek ? kk.scaleY : kk.scaleX), ek)
        }).range(this.from, this.to)
      }
    }
    class bf extends uk {
      constructor(kk, ek) {
        super(), this.size = kk, this.vertical = ek
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
    class rf {
      constructor(kk, ek) {
        this.view = kk, this.state = ek, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Kf, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Me.LTR, this.W8 = [], this.mustEnforceCursorAssoc = !1;
        let ik = ek.facet(ki).some((kk => "function" != typeof kk && "cm-lineWrapping" == kk.class));
        this.heightOracle = new tD(ik), this.stateDeco = xf(ek), this.heightMap = oD.empty().applyChanges(this.stateDeco, Dk.I.empty, this.heightOracle.setDoc(ek.doc), [new Mi(0, 0, 0, ek.doc.length)]);
        for (let Dk = 0; Dk < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Dk++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Ik.set(this.lineGaps.map((kk => kk.draw(this, !1)))), this.scrollParent = kk.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let kk = [this.viewport],
          {
            main: ek
          } = this.state.selection;
        for (let ik = 0; ik <= 1; ik++) {
          let Dk = ik ? ek.head : ek.anchor;
          if (!kk.some((kk => {
              let {
                from: ek,
                to: ik
              } = kk;
              return Dk >= ek && Dk <= ik
            }))) {
            let {
              from: ek,
              to: ik
            } = this.lineBlockAt(Dk);
            kk.push(new Pf(ek, ik))
          }
        }
        return this.viewports = kk.sort(((kk, ek) => kk.from - ek.from)), this.updateScaler()
      }
      updateScaler() {
        let kk = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? Kf : new nf(this.heightOracle, this.heightMap, this.viewports), kk.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (kk => {
          this.viewportLines.push(Uf(kk, this.scaler))
        }))
      }
      update(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = kk.state;
        let ik = this.stateDeco;
        this.stateDeco = xf(this.state);
        let fk = kk.changedRanges,
          Sk = Mi.extendWithRanges(fk, function(kk, ek, ik) {
            let fk = new ef;
            return Dk.w.compare(kk, ek, ik, fk, 0), fk.changes
          }(ik, this.stateDeco, kk ? kk.changes : Dk.ChangeSet.empty(this.state.doc.length))),
          bk = this.heightMap.height,
          rk = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        WD(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, kk.startState.doc, this.heightOracle.setDoc(this.state.doc), Sk), (this.heightMap.height != bk || aD) && (kk.flags |= 2), rk ? (this.scrollAnchorPos = kk.changes.mapPos(rk.from, -1), this.scrollAnchorHeight = rk.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = bk);
        let Pk = Sk.length ? this.mapViewport(this.viewport, kk.changes) : this.viewport;
        (ek && (ek.range.head < Pk.from || ek.range.head > Pk.to) || !this.viewportIsAppropriate(Pk)) && (Pk = this.getViewport(0, ek));
        let mk = Pk.from != this.viewport.from || Pk.to != this.viewport.to;
        this.viewport = Pk, kk.flags |= this.updateForViewport(), (mk || !kk.changes.empty || 2 & kk.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, kk.changes))), kk.flags |= this.computeVisibleRanges(kk.changes), ek && (this.scrollTarget = ek), !this.mustEnforceCursorAssoc && (kk.selectionSet || kk.focusChanged) && kk.view.lineWrapping && kk.state.selection.main.empty && kk.state.selection.main.assoc && !kk.state.facet(Xe) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: kk
        } = this, ek = kk.contentDOM, ik = window.getComputedStyle(ek), fk = this.heightOracle, Sk = ik.whiteSpace;
        this.defaultTextDirection = "rtl" == ik.direction ? Me.RTL : Me.LTR;
        let bk = this.heightOracle.mustRefreshForWrapping(Sk) || "refresh" === this.mustMeasureContent,
          rk = ek.getBoundingClientRect(),
          Pk = bk || this.mustMeasureContent || this.contentDOMHeight != rk.height;
        this.contentDOMHeight = rk.height, this.mustMeasureContent = !1;
        let mk = 0,
          Mk = 0;
        if (rk.width && rk.height) {
          let {
            scaleX: kk,
            scaleY: ik
          } = Rk(ek, rk);
          (kk > .005 && Math.abs(this.scaleX - kk) > .005 || ik > .005 && Math.abs(this.scaleY - ik) > .005) && (this.scaleX = kk, this.scaleY = ik, mk |= 16, bk = Pk = !0)
        }
        let Kk = (parseInt(ik.paddingTop) || 0) * this.scaleY,
          xk = (parseInt(ik.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == Kk && this.paddingBottom == xk || (this.paddingTop = Kk, this.paddingBottom = xk, mk |= 18), this.editorWidth != kk.scrollDOM.clientWidth && (fk.lineWrapping && (Pk = !0), this.editorWidth = kk.scrollDOM.clientWidth, mk |= 16);
        let nk = Jk(this.view.contentDOM, !1).y;
        nk != this.scrollParent && (this.scrollParent = nk, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let Uk = this.getScrollOffset();
        this.scrollOffset != Uk && (this.scrollAnchorHeight = -1, this.scrollOffset = Uk), this.scrolledToBottom = be(this.scrollParent || kk.win);
        let Hk = (this.printing ? ff : Df)(ek, this.paddingTop),
          wk = Hk.top - this.pixelViewport.top,
          lk = Hk.bottom - this.pixelViewport.bottom;
        this.pixelViewport = Hk;
        let pk = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (pk != this.inView && (this.inView = pk, pk && (Pk = !0)), !this.inView && !this.scrollTarget && ! function(kk) {
            let ek = kk.getBoundingClientRect(),
              ik = kk.ownerDocument.defaultView || window;
            return ek.left < ik.innerWidth && ek.right > 0 && ek.top < ik.innerHeight && ek.bottom > 0
          }(kk.dom)) return 0;
        let yk = rk.width;
        if (this.contentDOMWidth == yk && this.editorHeight == kk.scrollDOM.clientHeight || (this.contentDOMWidth = rk.width, this.editorHeight = kk.scrollDOM.clientHeight, mk |= 16), Pk) {
          let ek = kk.docView.measureVisibleLineHeights(this.viewport);
          if (fk.mustRefreshForHeights(ek) && (bk = !0), bk || fk.lineWrapping && Math.abs(yk - this.contentDOMWidth) > fk.charWidth) {
            let {
              lineHeight: ik,
              charWidth: Dk,
              textHeight: rk
            } = kk.docView.measureTextSize();
            bk = ik > 0 && fk.refresh(Sk, ik, Dk, rk, Math.max(5, yk / Dk), ek), bk && (kk.docView.minWidth = 0, mk |= 16)
          }
          wk > 0 && lk > 0 ? Mk = Math.max(wk, lk) : wk < 0 && lk < 0 && (Mk = Math.min(wk, lk)), WD();
          for (let ik of this.viewports) {
            let Sk = ik.from == this.viewport.from ? ek : kk.docView.measureVisibleLineHeights(ik);
            this.heightMap = (bk ? oD.empty().applyChanges(this.stateDeco, Dk.I.empty, this.heightOracle, [new Mi(0, 0, 0, kk.state.doc.length)]) : this.heightMap).updateHeight(fk, 0, bk, new XD(ik.from, Sk))
          }
          aD && (mk |= 2)
        }
        let Yk = !this.viewportIsAppropriate(this.viewport, Mk) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return Yk && (2 & mk && (mk |= this.updateScaler()), this.viewport = this.getViewport(Mk, this.scrollTarget), mk |= this.updateForViewport()), (2 & mk || Yk) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(bk ? [] : this.lineGaps, kk)), mk |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, kk.docView.enforceCursorAssoc()), mk
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(kk, ek) {
        let ik = .5 - Math.max(-.5, Math.min(.5, kk / 1e3 / 2)),
          Dk = this.heightMap,
          fk = this.heightOracle,
          {
            visibleTop: Sk,
            visibleBottom: bk
          } = this,
          rk = new Pf(Dk.lineAt(Sk - 1e3 * ik, cD.ByHeight, fk, 0, 0).from, Dk.lineAt(bk + 1e3 * (1 - ik), cD.ByHeight, fk, 0, 0).to);
        if (ek) {
          let {
            head: kk
          } = ek.range;
          if (kk < rk.from || kk > rk.to) {
            let ik, Sk = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              bk = Dk.lineAt(kk, cD.ByPos, fk, 0, 0);
            ik = "center" == ek.y ? (bk.top + bk.bottom) / 2 - Sk / 2 : "start" == ek.y || "nearest" == ek.y && kk < rk.from ? bk.top : bk.bottom - Sk, rk = new Pf(Dk.lineAt(ik - 500, cD.ByHeight, fk, 0, 0).from, Dk.lineAt(ik + Sk + 500, cD.ByHeight, fk, 0, 0).to)
          }
        }
        return rk
      }
      mapViewport(kk, ek) {
        let ik = ek.mapPos(kk.from, -1),
          Dk = ek.mapPos(kk.to, 1);
        return new Pf(this.heightMap.lineAt(ik, cD.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Dk, cD.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(kk) {
        let {
          from: ek,
          to: ik
        } = kk, Dk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: fk
        } = this.heightMap.lineAt(ek, cD.ByPos, this.heightOracle, 0, 0), {
          bottom: Sk
        } = this.heightMap.lineAt(ik, cD.ByPos, this.heightOracle, 0, 0), {
          visibleTop: bk,
          visibleBottom: rk
        } = this;
        return (0 == ek || fk <= bk - Math.max(10, Math.min(-Dk, 250))) && (ik == this.state.doc.length || Sk >= rk + Math.max(10, Math.min(Dk, 250))) && fk > bk - 2e3 && Sk < rk + 2e3
      }
      mapLineGaps(kk, ek) {
        if (!kk.length || ek.empty) return kk;
        let ik = [];
        for (let Dk of kk) ek.touchesRange(Dk.from, Dk.to) || ik.push(new Sf(ek.mapPos(Dk.from), ek.mapPos(Dk.to), Dk.size, Dk.displaySize));
        return ik
      }
      ensureLineGaps(kk, ek) {
        let ik = this.heightOracle.lineWrapping,
          fk = ik ? 1e4 : 2e3,
          Sk = fk >> 1,
          bk = fk << 1;
        if (this.defaultTextDirection != Me.LTR && !ik) return [];
        let rk = [],
          Pk = (fk, bk, mk, Mk) => {
            if (bk - fk < Sk) return;
            let Kk = this.state.selection.main,
              xk = [Kk.from];
            Kk.empty || xk.push(Kk.to);
            for (let kk of xk)
              if (kk > fk && kk < bk) return Pk(fk, kk - 10, mk, Mk), void Pk(kk + 10, bk, mk, Mk);
            let nk = function(kk, ek) {
              for (let ik of kk)
                if (ek(ik)) return ik;
              return
            }(kk, (kk => kk.from >= mk.from && kk.to <= mk.to && Math.abs(kk.from - fk) < Sk && Math.abs(kk.to - bk) < Sk && !xk.some((ek => kk.from < ek && kk.to > ek))));
            if (!nk) {
              if (bk < mk.to && ek && ik && ek.W8.some((kk => kk.from <= bk && kk.to >= bk))) {
                let kk = ek.moveToLineBoundary(Dk.h.cursor(bk), !1, !0).head;
                kk > fk && (bk = kk)
              }
              let kk = this.gapSize(mk, fk, bk, Mk);
              nk = new Sf(fk, bk, kk, ik || kk < 2e6 ? kk : 2e6)
            }
            rk.push(nk)
          },
          mk = ek => {
            if (ek.length < bk || ek.type != qk.Text) return;
            let Sk = function(kk, ek, ik) {
              let fk = [],
                Sk = kk,
                bk = 0;
              Dk.w.spans(ik, kk, ek, {
                span() {},
                point(kk, ek) {
                  kk > Sk && (fk.push({
                    from: Sk,
                    to: kk
                  }), bk += kk - Sk), Sk = ek
                }
              }, 20), Sk < ek && (fk.push({
                from: Sk,
                to: ek
              }), bk += ek - Sk);
              return {
                total: bk,
                lw: fk
              }
            }(ek.from, ek.to, this.stateDeco);
            if (Sk.total < bk) return;
            let rk, mk, Mk = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (ik) {
              let kk, ik, Dk = fk / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != Mk) {
                let fk = Mf(Sk, Mk),
                  bk = ((this.visibleBottom - this.visibleTop) / 2 + Dk) / ek.height;
                kk = fk - bk, ik = fk + bk
              } else kk = (this.visibleTop - ek.top - Dk) / ek.height, ik = (this.visibleBottom - ek.top + Dk) / ek.height;
              rk = mf(Sk, kk), mk = mf(Sk, ik)
            } else {
              let ik = Sk.total * this.heightOracle.charWidth,
                Dk = fk * this.heightOracle.charWidth,
                bk = 0;
              if (ik > 2e6)
                for (let fk of kk) fk.from >= ek.from && fk.from < ek.to && fk.size != fk.displaySize && fk.from * this.heightOracle.charWidth + bk < this.pixelViewport.left && (bk = fk.size - fk.displaySize);
              let Pk, Kk, xk = this.pixelViewport.left + bk,
                nk = this.pixelViewport.right + bk;
              if (null != Mk) {
                let kk = Mf(Sk, Mk),
                  ek = ((nk - xk) / 2 + Dk) / ik;
                Pk = kk - ek, Kk = kk + ek
              } else Pk = (xk - Dk) / ik, Kk = (nk + Dk) / ik;
              rk = mf(Sk, Pk), mk = mf(Sk, Kk)
            }
            rk > ek.from && Pk(ek.from, rk, ek, Sk), mk < ek.to && Pk(mk, ek.to, ek, Sk)
          };
        for (let Dk of this.viewportLines) Array.isArray(Dk.type) ? Dk.type.forEach(mk) : mk(Dk);
        return rk
      }
      gapSize(kk, ek, ik, Dk) {
        let fk = Mf(Dk, ik) - Mf(Dk, ek);
        return this.heightOracle.lineWrapping ? kk.height * fk : Dk.total * this.heightOracle.charWidth * fk
      }
      updateLineGaps(kk) {
        Sf.same(kk, this.lineGaps) || (this.lineGaps = kk, this.lineGapDeco = Ik.set(kk.map((kk => kk.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(kk) {
        let ek = this.stateDeco;
        this.lineGaps.length && (ek = ek.concat(this.lineGapDeco));
        let ik = [];
        Dk.w.spans(ek, this.viewport.from, this.viewport.to, {
          span(kk, ek) {
            ik.push({
              from: kk,
              to: ek
            })
          },
          point() {}
        }, 20);
        let fk = 0;
        if (ik.length != this.W8.length) fk = 12;
        else
          for (let Dk = 0; Dk < ik.length && !(8 & fk); Dk++) {
            let ek = this.W8[Dk],
              Sk = ik[Dk];
            ek.from == Sk.from && ek.to == Sk.to || (fk |= 4, kk && kk.mapPos(ek.from, -1) == Sk.from && kk.mapPos(ek.to, 1) == Sk.to || (fk |= 8))
          }
        return this.W8 = ik, fk
      }
      lineBlockAt(kk) {
        return kk >= this.viewport.from && kk <= this.viewport.to && this.viewportLines.find((ek => ek.from <= kk && ek.to >= kk)) || Uf(this.heightMap.lineAt(kk, cD.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(kk) {
        return kk >= this.viewportLines[0].top && kk <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((ek => ek.top <= kk && ek.bottom >= kk)) || Uf(this.heightMap.lineAt(this.scaler.fromDOM(kk), cD.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(kk) {
        let ek = this.lineBlockAtHeight(kk + 8);
        return ek.from >= this.viewport.from || this.viewportLines[0].top - kk > 200 ? ek : this.viewportLines[0]
      }
      elementAtHeight(kk) {
        return Uf(this.heightMap.blockAt(this.scaler.fromDOM(kk), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class Pf {
      constructor(kk, ek) {
        this.from = kk, this.to = ek
      }
    }

    function mf(kk, ek) {
      let {
        total: ik,
        lw: Dk
      } = kk;
      if (ek <= 0) return Dk[0].from;
      if (ek >= 1) return Dk[Dk.length - 1].to;
      let fk = Math.floor(ik * ek);
      for (let Sk = 0;; Sk++) {
        let {
          from: kk,
          to: ek
        } = Dk[Sk], ik = ek - kk;
        if (fk <= ik) return kk + fk;
        fk -= ik
      }
    }

    function Mf(kk, ek) {
      let ik = 0;
      for (let {
          from: Dk,
          to: fk
        }
        of kk.lw) {
        if (ek <= fk) {
          ik += ek - Dk;
          break
        }
        ik += fk - Dk
      }
      return ik / kk.total
    }
    const Kf = {
      toDOM: kk => kk,
      fromDOM: kk => kk,
      scale: 1,
      eq(kk) {
        return kk == this
      }
    };

    function xf(kk) {
      let ek = kk.facet(ei).filter((kk => "function" != typeof kk)),
        ik = kk.facet(Di).filter((kk => "function" != typeof kk));
      return ik.length && ek.push(Dk.w.join(ik)), ek
    }
    class nf {
      constructor(kk, ek, ik) {
        let Dk = 0,
          fk = 0,
          Sk = 0;
        this.viewports = ik.map((ik => {
          let {
            from: fk,
            to: Sk
          } = ik, bk = ek.lineAt(fk, cD.ByPos, kk, 0, 0).top, rk = ek.lineAt(Sk, cD.ByPos, kk, 0, 0).bottom;
          return Dk += rk - bk, {
            from: fk,
            to: Sk,
            top: bk,
            bottom: rk,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Dk) / (ek.height - Dk);
        for (let bk of this.viewports) bk.domTop = Sk + (bk.top - fk) * this.scale, Sk = bk.domBottom = bk.domTop + (bk.bottom - bk.top), fk = bk.bottom
      }
      toDOM(kk) {
        for (let ek = 0, ik = 0, Dk = 0;; ek++) {
          let fk = ek < this.viewports.length ? this.viewports[ek] : null;
          if (!fk || kk < fk.top) return Dk + (kk - ik) * this.scale;
          if (kk <= fk.bottom) return fk.domTop + (kk - fk.top);
          ik = fk.bottom, Dk = fk.domBottom
        }
      }
      fromDOM(kk) {
        for (let ek = 0, ik = 0, Dk = 0;; ek++) {
          let fk = ek < this.viewports.length ? this.viewports[ek] : null;
          if (!fk || kk < fk.domTop) return ik + (kk - Dk) / this.scale;
          if (kk <= fk.domBottom) return fk.top + (kk - fk.domTop);
          ik = fk.bottom, Dk = fk.domBottom
        }
      }
      eq(kk) {
        return kk instanceof nf && (this.scale == kk.scale && this.viewports.length == kk.viewports.length && this.viewports.every(((ek, ik) => ek.from == kk.viewports[ik].from && ek.to == kk.viewports[ik].to)))
      }
    }

    function Uf(kk, ek) {
      if (1 == ek.scale) return kk;
      let ik = ek.toDOM(kk.top),
        Dk = ek.toDOM(kk.bottom);
      return new BD(kk.from, kk.length, ik, Dk - ik, Array.isArray(kk._content) ? kk._content.map((kk => Uf(kk, ek))) : kk._content)
    }
    const Hf = Dk.n.define({
        combine: kk => kk.join(" ")
      }),
      wf = Dk.n.define({
        combine: kk => kk.indexOf(!0) > -1
      }),
      lf = fk.d.newName(),
      pf = fk.d.newName(),
      yf = fk.d.newName(),
      Yf = {
        "&light": "." + pf,
        "&dark": "." + yf
      };

    function Lf(kk, ek, ik) {
      return new fk.d(ek, {
        finish: ek => /&/.test(ek) ? ek.replace(/&\w*/, (ek => {
          if ("&" == ek) return kk;
          if (!ik || !ik[ek]) throw new RangeError(`Unsupported selector: ${ek}`);
          return ik[ek]
        })) : kk + " " + ek
      })
    }
    const Cf = Lf("." + lf, {
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
      }, Yf),
      Af = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      jf = Ak.ie && Ak.ie_version <= 11;
    class sf {
      constructor(kk) {
        this.view = kk, this.active = !1, this.editContext = null, this.selectionRange = new ke, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = kk.contentDOM, this.observer = new MutationObserver((ek => {
          for (let kk of ek) this.queue.push(kk);
          (Ak.ie && Ak.ie_version <= 11 || Ak.ios && kk.composing) && ek.some((kk => "childList" == kk.type && kk.removedNodes.length || "characterData" == kk.type && kk.oldValue.length > kk.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !Ak.android || !1 === kk.constructor.EDIT_CONTEXT || Ak.chrome && Ak.chrome_version < 126 || (this.editContext = new Ff(kk), kk.state.facet(Oe) && (kk.contentDOM.editContext = this.editContext.editContext)), jf && (this.onCharData = kk => {
          this.queue.push({
            target: kk.target,
            type: "characterData",
            oldValue: kk.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.Ay = this.Ay.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var kk;
          (null === (kk = this.view.docView) || void 0 === kk ? void 0 : kk.lastUpdate) < Date.now() - 75 && this.Ay()
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
      Ay() {
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
        if (this.gapIntersection && (kk.length != this.gaps.length || this.gaps.some(((ek, ik) => ek != kk[ik])))) {
          this.gapIntersection.disconnect();
          for (let ek of kk) this.gapIntersection.observe(ek);
          this.gaps = kk
        }
      }
      onSelectionChange(kk) {
        let ek = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: ik
        } = this, Dk = this.selectionRange;
        if (ik.state.facet(Oe) ? ik.root.activeElement != this.dom : !Xk(this.dom, Dk)) return;
        let fk = Dk.anchorNode && ik.docView.tile.nearest(Dk.anchorNode);
        fk && fk.isWidget() && fk.widget.ignoreEvent(kk) ? ek || (this.selectionChanged = !1) : (Ak.ie && Ak.ie_version <= 11 || Ak.android && Ak.chrome) && !ik.state.selection.main.empty && Dk.focusNode && ck(Dk.focusNode, Dk.focusOffset, Dk.anchorNode, Dk.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: kk
        } = this, ek = Wk(kk.root);
        if (!ek) return !1;
        let ik = Ak.safari && 11 == kk.root.nodeType && kk.root.activeElement == this.dom && function(kk, ek) {
          if (ek.getComposedRanges) {
            let ik = ek.getComposedRanges(kk.root)[0];
            if (ik) return Vf(kk, ik)
          }
          let ik = null;

          function Dk(kk) {
            kk.preventDefault(), kk.stopImmediatePropagation(), ik = kk.getTargetRanges()[0]
          }
          return kk.contentDOM.addEventListener("beforeinput", Dk, !0), kk.dom.ownerDocument.execCommand("indent"), kk.contentDOM.removeEventListener("beforeinput", Dk, !0), ik ? Vf(kk, ik) : null
        }(this.view, ek) || ek;
        if (!ik || this.selectionRange.eq(ik)) return !1;
        let Dk = Xk(this.dom, ik);
        return Dk && !this.selectionChanged && kk.inputState.lastFocusTime > Date.now() - 200 && kk.inputState.lastTouchTime < Date.now() - 300 && function(kk, ek) {
          let ik = ek.focusNode,
            Dk = ek.focusOffset;
          if (!ik || ek.anchorNode != ik || ek.anchorOffset != Dk) return !1;
          for (Dk = Math.min(Dk, gk(ik));;)
            if (Dk) {
              if (1 != ik.nodeType) return !1;
              let kk = ik.childNodes[Dk - 1];
              "false" == kk.contentEditable ? Dk-- : (ik = kk, Dk = gk(ik))
            } else {
              if (ik == kk) return !0;
              Dk = Tk(ik), ik = ik.parentNode
            }
        }(this.dom, ik) ? (this.view.inputState.lastFocusTime = 0, kk.docView.updateSelection(), !1) : (this.selectionRange.setRange(ik), Dk && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(kk, ek) {
        this.selectionRange.set(kk.node, kk.offset, ek.node, ek.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let kk = 0,
          ek = null;
        for (let ik = this.dom; ik;)
          if (1 == ik.nodeType) !ek && kk < this.scrollTargets.length && this.scrollTargets[kk] == ik ? kk++ : ek || (ek = this.scrollTargets.slice(0, kk)), ek && ek.push(ik), ik = ik.assignedSlot || ik.parentNode;
          else {
            if (11 != ik.nodeType) break;
            ik = ik.host
          } if (kk < this.scrollTargets.length && !ek && (ek = this.scrollTargets.slice(0, kk)), ek) {
          for (let kk of this.scrollTargets) kk.removeEventListener("scroll", this.onScroll);
          for (let kk of this.scrollTargets = ek) kk.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, Af), jf && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), jf && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(kk, ek) {
        var ik;
        if (!this.delayedAndroidKey) {
          let kk = () => {
            let kk = this.delayedAndroidKey;
            if (kk) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = kk.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && kk.force && Se(this.dom, kk.key, kk.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(kk)
        }
        this.delayedAndroidKey && "Enter" != kk || (this.delayedAndroidKey = {
          key: kk,
          keyCode: ek,
          force: this.lastChange < Date.now() - 50 || !!(null === (ik = this.delayedAndroidKey) || void 0 === ik ? void 0 : ik.force)
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
        let ek = -1,
          ik = -1,
          Dk = !1;
        for (let fk of kk) {
          let kk = this.readMutation(fk);
          kk && (kk.typeOver && (Dk = !0), -1 == ek ? ({
            from: ek,
            to: ik
          } = kk) : (ek = Math.min(kk.from, ek), ik = Math.max(kk.to, ik)))
        }
        return {
          from: ek,
          to: ik,
          typeOver: Dk
        }
      }
      readChange() {
        let {
          from: kk,
          to: ek,
          typeOver: ik
        } = this.processRecords(), Dk = this.selectionChanged && Xk(this.dom, this.selectionRange);
        if (kk < 0 && !Dk) return null;
        kk > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let fk = new SD(this.view, kk, ek, ik);
        return this.view.docView.domChanged = {
          newSel: fk.newSel ? fk.newSel.main : null
        }, fk
      }
      flush() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        kk && this.readSelectionRange();
        let ek = this.readChange();
        if (!ek) return this.view.requestMeasure(), !1;
        let ik = this.view.state,
          Dk = rD(this.view, ek);
        return this.view.state == ik && (ek.domChanged || ek.newSel && !MD(this.view.state.selection, ek.newSel.main)) && this.view.update([]), Dk
      }
      readMutation(kk) {
        let ek = this.view.docView.tile.nearest(kk.target);
        if (!ek || ek.isWidget()) return null;
        if (ek.markDirty("attributes" == kk.type), "childList" == kk.type) {
          let ik = df(ek, kk.previousSibling || kk.target.previousSibling, -1),
            Dk = df(ek, kk.nextSibling || kk.target.nextSibling, 1);
          return {
            from: ik ? ek.posAfter(ik) : ek.posAtStart,
            to: Dk ? ek.posBefore(Dk) : ek.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == kk.type ? {
          from: ek.posAtStart,
          to: ek.posAtEnd,
          typeOver: kk.target.nodeValue == kk.oldValue
        } : null
      }
      setWindow(kk) {
        kk != this.win && (this.removeWindowListeners(this.win), this.win = kk, this.addWindowListeners(this.win))
      }
      addWindowListeners(kk) {
        kk.addEventListener("resize", this.Ay), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : kk.addEventListener("beforeprint", this.onPrint), kk.addEventListener("scroll", this.onScroll), kk.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(kk) {
        kk.removeEventListener("scroll", this.onScroll), kk.removeEventListener("resize", this.Ay), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : kk.removeEventListener("beforeprint", this.onPrint), kk.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(kk) {
        this.editContext && (this.editContext.update(kk), kk.startState.facet(Oe) != kk.state.facet(Oe) && (kk.view.contentDOM.editContext = kk.state.facet(Oe) ? this.editContext.editContext : null))
      }
      destroy() {
        var kk, ek, ik;
        this.stop(), null === (kk = this.intersection) || void 0 === kk || kk.disconnect(), null === (ek = this.gapIntersection) || void 0 === ek || ek.disconnect(), null === (ik = this.resizeScroll) || void 0 === ik || ik.disconnect();
        for (let Dk of this.scrollTargets) Dk.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function df(kk, ek, ik) {
      for (; ek;) {
        let Dk = ni.get(ek);
        if (Dk && Dk.parent == kk) return Dk;
        let fk = ek.parentNode;
        ek = fk != kk.dom ? fk : ik > 0 ? ek.nextSibling : ek.previousSibling
      }
      return null
    }

    function Vf(kk, ek) {
      let ik = ek.startContainer,
        Dk = ek.startOffset,
        fk = ek.endContainer,
        Sk = ek.endOffset,
        bk = kk.docView.domAtPos(kk.state.selection.main.anchor, 1);
      return ck(bk.node, bk.offset, fk, Sk) && ([ik, Dk, fk, Sk] = [fk, Sk, ik, Dk]), {
        anchorNode: ik,
        anchorOffset: Dk,
        focusNode: fk,
        focusOffset: Sk
      }
    }
    class Ff {
      constructor(kk) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(kk.state);
        let ek = this.editContext = new window.EditContext({
          text: kk.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, kk.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(kk.state.selection.main.head)
        });
        this.handlers.textupdate = ik => {
          let fk = kk.state.selection.main,
            {
              anchor: Sk,
              head: bk
            } = fk,
            rk = this.toEditorPos(ik.updateRangeStart),
            Pk = this.toEditorPos(ik.updateRangeEnd);
          kk.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: ik.updateRangeStart,
            editorBase: rk,
            drifted: !1
          });
          let mk = Pk - rk > ik.text.length;
          rk == this.from && Sk < this.from ? rk = Sk : Pk == this.to && Sk > this.to && (Pk = Sk);
          let Mk = mD(kk.state.sliceDoc(rk, Pk), ik.text, (mk ? fk.from : fk.to) - rk, mk ? "end" : null);
          if (!Mk) {
            let ek = Dk.h.single(this.toEditorPos(ik.selectionStart), this.toEditorPos(ik.selectionEnd));
            return void(MD(ek, fk) || kk.dispatch({
              selection: ek,
              userEvent: "select"
            }))
          }
          let Kk = {
            from: Mk.from + rk,
            to: Mk.toA + rk,
            insert: Dk.I.of(ik.text.slice(Mk.from, Mk.toB).split("\n"))
          };
          if ((Ak.mac || Ak.android) && Kk.from == bk - 1 && /^\. ?$/.test(ik.text) && "off" == kk.contentDOM.getAttribute("autocorrect") && (Kk = {
              from: rk,
              to: Pk,
              insert: Dk.I.of([ik.text.replace(".", " ")])
            }), this.pendingContextChange = Kk, !kk.state.readOnly) {
            let ek = this.to - this.from + (Kk.to - Kk.from + Kk.insert.length);
            PD(kk, Kk, Dk.h.single(this.toEditorPos(ik.selectionStart, ek), this.toEditorPos(ik.selectionEnd, ek)))
          }
          this.pendingContextChange && (this.revertPending(kk.state), this.setSelection(kk.state)), Kk.from < Kk.to && !Kk.insert.length && kk.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(ek.text.slice(Math.max(0, ik.updateRangeStart - 1), Math.min(ek.text.length, ik.updateRangeStart + 1))) && this.handlers.compositionend(ik)
        }, this.handlers.characterboundsupdate = ik => {
          let Dk = [],
            fk = null;
          for (let ek = this.toEditorPos(ik.rangeStart), Sk = this.toEditorPos(ik.rangeEnd); ek < Sk; ek++) {
            let ik = kk.coordsForChar(ek);
            fk = ik && new DOMRect(ik.left, ik.top, ik.right - ik.left, ik.bottom - ik.top) || fk || new DOMRect, Dk.push(fk)
          }
          ek.updateCharacterBounds(ik.rangeStart, Dk)
        }, this.handlers.textformatupdate = ek => {
          let ik = [];
          for (let kk of ek.getTextFormats()) {
            let ek = kk.underlineStyle,
              Dk = kk.underlineThickness;
            if (!/none/i.test(ek) && !/none/i.test(Dk)) {
              let fk = this.toEditorPos(kk.rangeStart),
                Sk = this.toEditorPos(kk.rangeEnd);
              if (fk < Sk) {
                let kk = `text-decoration: underline ${/^[a-z]/.test(ek)?ek+" ":"Dashed"==ek?"dashed ":"Squiggle"==ek?"wavy ":""}${/thin/i.test(Dk)?1:2}px`;
                ik.push(Ik.mark({
                  attributes: {
                    style: kk
                  }
                }).range(fk, Sk))
              }
            }
          }
          kk.dispatch({
            effects: oe.of(Ik.set(ik))
          })
        }, this.handlers.compositionstart = () => {
          kk.inputState.composing < 0 && (kk.inputState.composing = 0, kk.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (kk.inputState.composing = -1, kk.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: ek
            } = this.composing;
            this.composing = null, ek && this.reset(kk.state)
          }
        };
        for (let ik in this.handlers) ek.addEventListener(ik, this.handlers[ik]);
        this.measureReq = {
          read: kk => {
            this.editContext.updateControlBounds(kk.contentDOM.getBoundingClientRect());
            let ek = Wk(kk.root);
            ek && ek.rangeCount && this.editContext.updateSelectionBounds(ek.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(kk) {
        let ek = 0,
          ik = !1,
          Dk = this.pendingContextChange;
        return kk.changes.iterChanges(((fk, Sk, bk, rk, Pk) => {
          if (ik) return;
          let mk = Pk.length - (Sk - fk);
          if (Dk && Sk >= Dk.to) {
            if (Dk.from == fk && Dk.to == Sk && Dk.insert.eq(Pk)) return Dk = this.pendingContextChange = null, ek += mk, void(this.to += mk);
            Dk = null, this.revertPending(kk.state)
          }
          if (fk += ek, (Sk += ek) <= this.from) this.from += mk, this.to += mk;
          else if (fk < this.to) {
            if (fk < this.from || Sk > this.to || this.to - this.from + Pk.length > 3e4) return void(ik = !0);
            this.editContext.updateText(this.toContextPos(fk), this.toContextPos(Sk), Pk.toString()), this.to += mk
          }
          ek += mk
        })), Dk && !ik && this.revertPending(kk.state), !ik
      }
      update(kk) {
        let ek = this.pendingContextChange,
          ik = kk.startState.selection.main;
        this.composing && (this.composing.drifted || !kk.changes.touchesRange(ik.from, ik.to) && kk.transactions.some((kk => !kk.isUserEvent("input.type") && kk.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = kk.changes.mapPos(this.composing.editorBase)) : this.applyEdits(kk) && this.rangeIsValid(kk.state) ? (kk.docChanged || kk.selectionSet || ek) && this.setSelection(kk.state) : (this.pendingContextChange = null, this.reset(kk.state)), (kk.geometryChanged || kk.docChanged || kk.selectionSet) && kk.view.requestMeasure(this.measureReq)
      }
      resetRange(kk) {
        let {
          head: ek
        } = kk.selection.main;
        this.from = Math.max(0, ek - 1e4), this.to = Math.min(kk.doc.length, ek + 1e4)
      }
      reset(kk) {
        this.resetRange(kk), this.editContext.updateText(0, this.editContext.text.length, kk.doc.sliceString(this.from, this.to)), this.setSelection(kk)
      }
      revertPending(kk) {
        let ek = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(ek.from), this.toContextPos(ek.from + ek.insert.length), kk.doc.sliceString(ek.from, ek.to))
      }
      setSelection(kk) {
        let {
          main: ek
        } = kk.selection, ik = this.toContextPos(Math.max(this.from, Math.min(this.to, ek.anchor))), Dk = this.toContextPos(ek.head);
        this.editContext.selectionStart == ik && this.editContext.selectionEnd == Dk || this.editContext.updateSelection(ik, Dk)
      }
      rangeIsValid(kk) {
        let {
          head: ek
        } = kk.selection.main;
        return !(this.from > 0 && ek - this.from < 500 || this.to < kk.doc.length && this.to - ek < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        kk = Math.min(kk, ek);
        let ik = this.composing;
        return ik && ik.drifted ? ik.editorBase + (kk - ik.contextBase) : kk + this.from
      }
      toContextPos(kk) {
        let ek = this.composing;
        return ek && ek.drifted ? ek.contextBase + (kk - ek.editorBase) : kk - this.from
      }
      destroy() {
        for (let kk in this.handlers) this.editContext.removeEventListener(kk, this.handlers[kk])
      }
    }
    class uf {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get W8() {
        return this.viewState.W8
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
        var ek;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), kk.parent && kk.parent.appendChild(this.dom);
        let {
          dispatch: ik
        } = kk;
        this.dispatchTransactions = kk.dispatchTransactions || ik && (kk => kk.forEach((kk => ik(kk, this)))) || (kk => this.update(kk)), this.dispatch = this.dispatch.bind(this), this._root = kk.root || function(kk) {
          for (; kk;) {
            if (kk && (9 == kk.nodeType || 11 == kk.nodeType && kk.host)) return kk;
            kk = kk.assignedSlot || kk.parentNode
          }
          return null
        }(kk.parent) || document, this.viewState = new rf(this, kk.state || Dk.j.create(kk)), kk.scrollTo && kk.scrollTo.is(Te) && (this.viewState.scrollTarget = kk.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Ge).map((kk => new Re(kk)));
        for (let Dk of this.plugins) Dk.update(this);
        this.observer = new sf(this), this.inputState = new KD(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Wi(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (ek = document.fonts) || void 0 === ek ? void 0 : ek.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        let fk = 1 == ek.length && ek[0] instanceof Dk.K ? ek : 1 == ek.length && Array.isArray(ek[0]) ? ek[0] : [this.state.update(...ek)];
        this.dispatchTransactions(fk, this)
      }
      update(kk) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let ek, ik = !1,
          fk = !1,
          Sk = this.state;
        for (let Dk of kk) {
          if (Dk.startState != Sk) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          Sk = Dk.state
        }
        if (this.destroyed) return void(this.viewState.state = Sk);
        let bk = this.hasFocus,
          rk = 0,
          Pk = null;
        kk.some((kk => kk.annotation(zD))) ? (this.inputState.notifiedFocused = bk, rk = 1) : bk != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = bk, Pk = QD(Sk, bk), Pk || (rk = 1));
        let mk = this.observer.delayedAndroidKey,
          Mk = null;
        if (mk ? (this.observer.clearDelayedAndroidKey(), Mk = this.observer.readChange(), (Mk && !this.state.doc.eq(Sk.doc) || !this.state.selection.eq(Sk.selection)) && (Mk = null)) : this.observer.clear(), Sk.facet(Dk.j.phrases) != this.state.facet(Dk.j.phrases)) return this.setState(Sk);
        ek = Ki.create(this, Sk, kk), ek.flags |= rk;
        let Kk = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let ek of kk) {
            if (Kk && (Kk = Kk.map(ek.changes)), ek.scrollIntoView) {
              let {
                main: kk
              } = ek.state.selection, {
                x: ik,
                y: fk
              } = this.state.facet(uf.cursorScrollMargin);
              Kk = new ce(kk.empty ? kk : Dk.h.cursor(kk.head, kk.head > kk.anchor ? -1 : 1), "nearest", "nearest", fk, ik)
            }
            for (let kk of ek.effects) kk.is(Te) && (Kk = kk.value.clip(this.state))
          }
          this.viewState.update(ek, Kk), this.bidiCache = zf.update(this.bidiCache, ek.changes), ek.empty || (this.updatePlugins(ek), this.inputState.update(ek)), ik = this.docView.update(ek), this.state.facet(mi) != this.styleModules && this.mountStyles(), fk = this.updateAttrs(), this.showAnnouncements(kk), this.docView.updateSelection(ik, kk.some((kk => kk.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (ek.startState.facet(Hf) != ek.state.facet(Hf) && (this.viewState.mustMeasureContent = !0), (ik || fk || Kk || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), ik && this.docViewUpdate(), !ek.empty)
          for (let Dk of this.state.facet(ve)) try {
            Dk(ek)
          } catch (xk) {
            Ze(this.state, xk, "update listener")
          }(Pk || Mk) && Promise.resolve().then((() => {
            Pk && this.state == Pk.startState && this.dispatch(Pk), Mk && !rD(this, Mk) && mk.force && Se(this.contentDOM, mk.key, mk.keyCode)
          }))
      }
      setState(kk) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = kk);
        this.updateState = 2;
        let ek = this.hasFocus;
        try {
          for (let kk of this.plugins) kk.destroy(this);
          this.viewState = new rf(this, kk), this.plugins = kk.facet(Ge).map((kk => new Re(kk))), this.pluginMap.clear();
          for (let kk of this.plugins) kk.update(this);
          this.docView.destroy(), this.docView = new Wi(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        ek && this.focus(), this.requestMeasure()
      }
      updatePlugins(kk) {
        let ek = kk.startState.facet(Ge),
          ik = kk.state.facet(Ge);
        if (ek != ik) {
          let Dk = [];
          for (let fk of ik) {
            let ik = ek.indexOf(fk);
            if (ik < 0) Dk.push(new Re(fk));
            else {
              let ek = this.plugins[ik];
              ek.mustUpdate = kk, Dk.push(ek)
            }
          }
          for (let ek of this.plugins) ek.mustUpdate != kk && ek.destroy(this);
          this.plugins = Dk, this.pluginMap.clear()
        } else
          for (let Dk of this.plugins) Dk.mustUpdate = kk;
        for (let Dk = 0; Dk < this.plugins.length; Dk++) this.plugins[Dk].update(this);
        ek != ik && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let ek of this.plugins) {
          let ik = ek.value;
          if (ik && ik.docViewUpdate) try {
            ik.docViewUpdate(this)
          } catch (kk) {
            Ze(this.state, kk, "doc view update listener")
          }
        }
      }
      measure() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, kk && this.observer.forceFlush();
        let ek = null,
          ik = this.viewState.scrollParent,
          Dk = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: fk,
            scrollAnchorHeight: Sk
          } = this.viewState;
        Math.abs(Dk - this.viewState.scrollOffset) > 1 && (Sk = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let kk = 0;; kk++) {
            if (Sk < 0)
              if (be(ik || this.win)) fk = -1, Sk = this.viewState.heightMap.height;
              else {
                let kk = this.viewState.scrollAnchorAt(Dk);
                fk = kk.from, Sk = kk.top
              } this.updateState = 1;
            let rk = this.viewState.measure();
            if (!rk && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (kk > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let Pk = [];
            4 & rk || ([this.measureRequests, Pk] = [Pk, this.measureRequests]);
            let mk = Pk.map((kk => {
                try {
                  return kk.read(this)
                } catch (ek) {
                  return Ze(this.state, ek), If
                }
              })),
              Mk = Ki.create(this, this.state, []),
              Kk = !1;
            Mk.flags |= rk, ek ? ek.flags |= rk : ek = Mk, this.updateState = 2, Mk.empty || (this.updatePlugins(Mk), this.inputState.update(Mk), this.updateAttrs(), Kk = this.docView.update(Mk), Kk && this.docViewUpdate());
            for (let kk = 0; kk < Pk.length; kk++)
              if (mk[kk] != If) try {
                let ek = Pk[kk];
                ek.write && ek.write(mk[kk], this)
              } catch (bk) {
                Ze(this.state, bk)
              }
            if (Kk && this.docView.updateSelection(!0), !Mk.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, Sk = -1;
                  continue
                } {
                  let kk = ((fk < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(fk).top) - Sk) / this.scaleY;
                  if ((kk > 1 || kk < -1) && (ik == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Dk += kk, ik ? ik.scrollTop += kk : this.win.scrollBy(0, kk), Sk = -1;
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
        if (ek && !ek.empty)
          for (let rk of this.state.facet(ve)) rk(ek)
      }
      get themeClasses() {
        return lf + " " + (this.state.facet(wf) ? yf : pf) + " " + this.state.facet(Hf)
      }
      updateAttrs() {
        let kk = Qf(this, Je, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          ek = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(Oe) ? "true" : "false",
            class: "cm-content",
            style: `${Ak.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (ek["aria-readonly"] = "true"), Qf(this, ki, ek);
        let ik = this.observer.ignore((() => {
          let ik = Vk(this.contentDOM, this.contentAttrs, ek),
            Dk = Vk(this.dom, this.editorAttrs, kk);
          return ik || Dk
        }));
        return this.editorAttrs = kk, this.contentAttrs = ek, ik
      }
      showAnnouncements(kk) {
        let ek = !0;
        for (let ik of kk)
          for (let kk of ik.effects)
            if (kk.is(uf.announce)) {
              ek && (this.announceDOM.textContent = ""), ek = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = kk.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(mi);
        let kk = this.state.facet(uf.cspNonce);
        fk.d.mount(this.root, this.styleModules.concat(Cf).reverse(), kk ? {
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
            for (let ek = 0; ek < this.measureRequests.length; ek++)
              if (this.measureRequests[ek].key === kk.key) return void(this.measureRequests[ek] = kk);
          this.measureRequests.push(kk)
        }
      }
      plugin(kk) {
        let ek = this.pluginMap.get(kk);
        return (void 0 === ek || ek && ek.plugin != kk) && this.pluginMap.set(kk, ek = this.plugins.find((ek => ek.plugin == kk)) || null), ek && ek.update(this).value
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
      moveByChar(kk, ek, ik) {
        return Gi(this, kk, Zi(this, kk, ek, ik))
      }
      moveByGroup(kk, ek) {
        return Gi(this, kk, Zi(this, kk, ek, (ek => function(kk, ek, ik) {
          let fk = kk.state.charCategorizer(ek),
            Sk = fk(ik);
          return kk => {
            let ek = fk(kk);
            return Sk == Dk.f.Space && (Sk = ek), Sk == ek
          }
        }(this, kk.head, ek))))
      }
      visualLineSide(kk, ek) {
        let ik = this.bidiSpans(kk),
          fk = this.textDirectionAt(kk.from),
          Sk = ik[ek ? ik.length - 1 : 0];
        return Dk.h.cursor(Sk.side(ek, fk) + kk.from, Sk.forward(!ek, fk) ? 1 : -1)
      }
      moveToLineBoundary(kk, ek) {
        return function(kk, ek, ik, fk) {
          let Sk = oi(kk, ek.head, ek.assoc || -1),
            bk = fk && Sk.type == qk.Text && (kk.lineWrapping || Sk.widgetLineBreaks) ? kk.coordsAtPos(ek.assoc < 0 && ek.head > Sk.from ? ek.head - 1 : ek.head) : null;
          if (bk) {
            let ek = kk.dom.getBoundingClientRect(),
              fk = kk.textDirectionAt(Sk.from),
              rk = kk.posAtCoords({
                x: ik == (fk == Me.LTR) ? ek.right - 1 : ek.left + 1,
                y: (bk.top + bk.bottom) / 2
              });
            if (null != rk) return Dk.h.cursor(rk, ik ? -1 : 1)
          }
          return Dk.h.cursor(ik ? Sk.to : Sk.from, ik ? -1 : 1)
        }(this, kk, ek, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(kk, ek, ik) {
        return Gi(this, kk, function(kk, ek, ik, fk) {
          let Sk = ek.head,
            bk = ik ? 1 : -1;
          if (Sk == (ik ? kk.state.doc.length : 0)) return Dk.h.cursor(Sk, ek.assoc);
          let rk, Pk = ek.goalColumn,
            mk = kk.contentDOM.getBoundingClientRect(),
            Mk = kk.coordsAtPos(Sk, ek.assoc || ((ek.empty ? ik : ek.head == ek.from) ? 1 : -1)),
            Kk = kk.documentTop;
          if (Mk) null == Pk && (Pk = Mk.left - mk.left), rk = bk < 0 ? Mk.top : Mk.bottom;
          else {
            let ek = kk.viewState.lineBlockAt(Sk);
            null == Pk && (Pk = Math.min(mk.right - mk.left, kk.defaultCharacterWidth * (Sk - ek.from))), rk = (bk < 0 ? ek.top : ek.bottom) + Kk
          }
          let xk = mk.left + Pk,
            nk = kk.viewState.heightOracle.textHeight >> 1,
            Uk = null !== fk && void 0 !== fk ? fk : nk;
          for (let Hk = 0;; Hk += nk) {
            let ek = rk + (Uk + Hk) * bk,
              fk = Ri(kk, {
                x: xk,
                y: ek
              }, !1, bk);
            if (ik ? ek > mk.bottom : ek < mk.top) return Dk.h.cursor(fk.pos, fk.assoc);
            let Sk = kk.coordsAtPos(fk.pos, fk.assoc),
              Mk = Sk ? (Sk.top + Sk.bottom) / 2 : 0;
            if (!Sk || (ik ? Mk > rk : Mk < rk)) return Dk.h.cursor(fk.pos, fk.assoc, void 0, Pk)
          }
        }(this, kk, ek, ik))
      }
      domAtPos(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(kk, ek)
      }
      posAtDOM(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(kk, ek)
      }
      posAtCoords(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let ik = Ri(this, kk, ek);
        return ik && ik.pos
      }
      posAndSideAtCoords(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), Ri(this, kk, ek)
      }
      coordsAtPos(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let ik = this.docView.coordsAt(kk, ek);
        if (!ik || ik.left == ik.right) return ik;
        let Dk = this.state.doc.lineAt(kk),
          fk = this.bidiSpans(Dk);
        return Gk(ik, fk[Ye.find(fk, kk - Dk.from, -1, ek)].dir == Me.LTR == ek > 0)
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
        return !this.state.facet(te) || kk < this.viewport.from || kk > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(kk))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(kk) {
        if (kk.length > qf) return de(kk.length);
        let ek, ik = this.textDirectionAt(kk.from);
        for (let fk of this.bidiCache)
          if (fk.from == kk.from && fk.dir == ik && (fk.fresh || Le(fk.isolates, ek = bi(this, kk)))) return fk.order;
        ek || (ek = bi(this, kk));
        let Dk = se(kk.text, ik, ek);
        return this.bidiCache.push(new zf(kk.from, kk.to, ik, ek, !0, Dk)), Dk
      }
      get hasFocus() {
        var kk;
        return (this.dom.ownerDocument.hasFocus() || Ak.safari && (null === (kk = this.inputState) || void 0 === kk ? void 0 : kk.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          De(this.contentDOM), this.docView.updateSelection()
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
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var ik, fk, Sk, bk;
        return Te.of(new ce("number" == typeof kk ? Dk.h.cursor(kk) : kk, null !== (ik = ek.y) && void 0 !== ik ? ik : "nearest", null !== (fk = ek.x) && void 0 !== fk ? fk : "nearest", null !== (Sk = ek.yMargin) && void 0 !== Sk ? Sk : 5, null !== (bk = ek.xMargin) && void 0 !== bk ? bk : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: kk,
          scrollLeft: ek
        } = this.scrollDOM, ik = this.viewState.scrollAnchorAt(kk);
        return Te.of(new ce(Dk.h.cursor(ik.from), "start", "start", ik.top - kk, ek, !0))
      }
      setTabFocusMode(kk) {
        null == kk ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof kk ? this.inputState.tabFocusMode = kk ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + kk)
      }
      static domEventHandlers(kk) {
        return Ne.define((() => ({})), {
          eventHandlers: kk
        })
      }
      static domEventObservers(kk) {
        return Ne.define((() => ({})), {
          eventObservers: kk
        })
      }
      static theme(kk, ek) {
        let ik = fk.d.newName(),
          Dk = [Hf.of(ik), mi.of(Lf(`.${ik}`, kk))];
        return ek && ek.dark && Dk.push(wf.of(!0)), Dk
      }
      static baseTheme(kk) {
        return Dk.q.lowest(mi.of(Lf("." + lf, kk, Yf)))
      }
      static findFromDOM(kk) {
        var ek;
        let ik = kk.querySelector(".cm-content"),
          Dk = ik && ni.get(ik) || ni.get(kk);
        return (null === (ek = null === Dk || void 0 === Dk ? void 0 : Dk.root) || void 0 === ek ? void 0 : ek.view) || null
      }
    }
    uf.styleModule = mi, uf.inputHandler = Ee, uf.clipboardInputFilter = ae, uf.clipboardOutputFilter = We, uf.scrollHandler = Be, uf.focusChangeEffect = he, uf.perLineTextDirection = te, uf.exceptionSink = Qe, uf.updateListener = ve, uf.editable = Oe, uf.mouseSelectionStyle = ze, uf.dragMovesSelection = Ie, uf.clickAddsSelectionRange = qe, uf.oD = ei, uf.blockWrappers = ii, uf.outerDecorations = Di, uf.atomicRanges = fi, uf.bidiIsolatedRanges = Si, uf.cursorScrollMargin = Dk.n.define({
      combine: kk => {
        let ek = 5,
          ik = 5;
        for (let Dk of kk) "number" == typeof Dk ? ek = ik = Dk : ({
          x: ek,
          y: ik
        } = Dk);
        return {
          x: ek,
          y: ik
        }
      }
    }), uf.scrollMargins = ri, uf.darkTheme = wf, uf.cspNonce = Dk.n.define({
      combine: kk => kk.length ? kk[0] : ""
    }), uf.contentAttributes = ki, uf.editorAttributes = Je, uf.lineWrapping = uf.contentAttributes.of({
      class: "cm-lineWrapping"
    }), uf.announce = Dk.D.define();
    const qf = 4096,
      If = {};
    class zf {
      constructor(kk, ek, ik, Dk, fk, Sk) {
        this.from = kk, this.to = ek, this.dir = ik, this.isolates = Dk, this.fresh = fk, this.order = Sk
      }
      static update(kk, ek) {
        if (ek.empty && !kk.some((kk => kk.fresh))) return kk;
        let ik = [],
          Dk = kk.length ? kk[kk.length - 1].dir : Me.LTR;
        for (let fk = Math.max(0, kk.length - 10); fk < kk.length; fk++) {
          let Sk = kk[fk];
          Sk.dir != Dk || ek.touchesRange(Sk.from, Sk.to) || ik.push(new zf(ek.mapPos(Sk.from, 1), ek.mapPos(Sk.to, -1), Sk.dir, Sk.isolates, !1, Sk.order))
        }
        return ik
      }
    }

    function Qf(kk, ek, ik) {
      for (let Dk = kk.state.facet(ek), fk = Dk.length - 1; fk >= 0; fk--) {
        let ek = Dk[fk],
          Sk = "function" == typeof ek ? ek(kk) : ek;
        Sk && jk(Sk, ik)
      }
      return ik
    }
    const vf = Ak.mac ? "mac" : Ak.windows ? "win" : Ak.linux ? "linux" : "key";

    function Ef(kk, ek, ik) {
      return ek.altKey && (kk = "Alt-" + kk), ek.ctrlKey && (kk = "Ctrl-" + kk), ek.metaKey && (kk = "Meta-" + kk), !1 !== ik && ek.shiftKey && (kk = "Shift-" + kk), kk
    }
    const hf = Dk.q.default(uf.domEventHandlers({
        keydown: (kk, ek) => Zf(tf(ek.state), kk, ek, "editor")
      })),
      af = Dk.n.define({
        enables: hf
      }),
      Wf = new WeakMap;

    function tf(kk) {
      let ek = kk.facet(af),
        ik = Wf.get(ek);
      return ik || Wf.set(ek, ik = function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vf,
          ik = Object.create(null),
          Dk = Object.create(null),
          fk = (kk, ek) => {
            let ik = Dk[kk];
            if (null == ik) Dk[kk] = ek;
            else if (ik != ek) throw new Error("Key binding " + kk + " is used both as a regular binding and as a multi-stroke prefix")
          },
          Sk = (kk, Dk, Sk, bk, rk) => {
            var Pk, mk;
            let Mk = ik[kk] || (ik[kk] = Object.create(null)),
              Kk = Dk.split(/ (?!$)/).map((kk => function(kk, ek) {
                const ik = kk.split(/-(?!$)/);
                let Dk, fk, Sk, bk, rk = ik[ik.length - 1];
                "Space" == rk && (rk = " ");
                for (let Pk = 0; Pk < ik.length - 1; ++Pk) {
                  const kk = ik[Pk];
                  if (/^(cmd|meta|m)$/i.test(kk)) bk = !0;
                  else if (/^a(lt)?$/i.test(kk)) Dk = !0;
                  else if (/^(c|ctrl|control)$/i.test(kk)) fk = !0;
                  else if (/^s(hift)?$/i.test(kk)) Sk = !0;
                  else {
                    if (!/^mod$/i.test(kk)) throw new Error("Unrecognized modifier name: " + kk);
                    "mac" == ek ? bk = !0 : fk = !0
                  }
                }
                return Dk && (rk = "Alt-" + rk), fk && (rk = "Ctrl-" + rk), bk && (rk = "Meta-" + rk), Sk && (rk = "Shift-" + rk), rk
              }(kk, ek)));
            for (let ek = 1; ek < Kk.length; ek++) {
              let ik = Kk.slice(0, ek).join(" ");
              fk(ik, !0), Mk[ik] || (Mk[ik] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [ek => {
                  let Dk = Bf = {
                    view: ek,
                    prefix: ik,
                    scope: kk
                  };
                  return setTimeout((() => {
                    Bf == Dk && (Bf = null)
                  }), Tf), !0
                }]
              })
            }
            let xk = Kk.join(" ");
            fk(xk, !1);
            let nk = Mk[xk] || (Mk[xk] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (mk = null === (Pk = Mk._any) || void 0 === Pk ? void 0 : Pk.run) || void 0 === mk ? void 0 : mk.slice()) || []
            });
            Sk && nk.run.push(Sk), bk && (nk.preventDefault = !0), rk && (nk.stopPropagation = !0)
          };
        for (let bk of kk) {
          let kk = bk.scope ? bk.scope.split(" ") : ["editor"];
          if (bk.any)
            for (let ek of kk) {
              let kk = ik[ek] || (ik[ek] = Object.create(null));
              kk._any || (kk._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Dk
              } = bk;
              for (let ek in kk) kk[ek].run.push((kk => Dk(kk, of)))
            }
          let Dk = bk[ek] || bk.key;
          if (Dk)
            for (let ek of kk) Sk(ek, Dk, bk.run, bk.preventDefault, bk.stopPropagation), bk.shift && Sk(ek, "Shift-" + Dk, bk.shift, bk.preventDefault, bk.stopPropagation)
        }
        return ik
      }(ek.reduce(((kk, ek) => kk.concat(ek)), []))), ik
    }

    function Xf(kk, ek, ik) {
      return Zf(tf(kk.state), ek, kk, ik)
    }
    let Bf = null;
    const Tf = 4e3;
    let of = null;

    function Zf(kk, ek, ik, fk) {
      of = ek;
      let mk = function(kk) {
          var ek = !(rk && kk.metaKey && kk.shiftKey && !kk.ctrlKey && !kk.altKey || Pk && kk.shiftKey && kk.key && 1 == kk.key.length || "Unidentified" == kk.key) && kk.key || (kk.shiftKey ? bk : Sk)[kk.keyCode] || kk.key || "Unidentified";
          return "Esc" == ek && (ek = "Escape"), "Del" == ek && (ek = "Delete"), "Left" == ek && (ek = "ArrowLeft"), "Up" == ek && (ek = "ArrowUp"), "Right" == ek && (ek = "ArrowRight"), "Down" == ek && (ek = "ArrowDown"), ek
        }(ek),
        Mk = (0, Dk.L)(mk, 0),
        Kk = (0, Dk.M)(Mk) == mk.length && " " != mk,
        xk = "",
        nk = !1,
        Uk = !1,
        Hk = !1;
      Bf && Bf.view == ik && Bf.scope == fk && (xk = Bf.prefix + " ", wD.indexOf(ek.keyCode) < 0 && (Uk = !0, Bf = null));
      let wk, lk, pk = new Set,
        yk = kk => {
          if (kk) {
            for (let ek of kk.run)
              if (!pk.has(ek) && (pk.add(ek), ek(ik))) return kk.stopPropagation && (Hk = !0), !0;
            kk.preventDefault && (kk.stopPropagation && (Hk = !0), Uk = !0)
          }
          return !1
        },
        Yk = kk[fk];
      return Yk && (yk(Yk[xk + Ef(mk, ek, !Kk)]) ? nk = !0 : !Kk || !(ek.altKey || ek.metaKey || ek.ctrlKey) || Ak.windows && ek.ctrlKey && ek.altKey || Ak.mac && ek.altKey && !ek.ctrlKey && !ek.metaKey || !(wk = Sk[ek.keyCode]) || wk == mk ? Kk && ek.shiftKey && yk(Yk[xk + Ef(mk, ek, !0)]) && (nk = !0) : (yk(Yk[xk + Ef(wk, ek, !0)]) || ek.shiftKey && (lk = bk[ek.keyCode]) != mk && lk != wk && yk(Yk[xk + Ef(lk, ek, !1)])) && (nk = !0), !nk && yk(Yk._any) && (nk = !0)), Uk && (nk = !0), nk && Hk && ek.stopPropagation(), of = null, nk
    }
    class Of {
      constructor(kk, ek, ik, Dk, fk) {
        this.className = kk, this.left = ek, this.top = ik, this.width = Dk, this.height = fk
      }
      draw() {
        let kk = document.createElement("div");
        return kk.className = this.className, this.adjust(kk), kk
      }
      update(kk, ek) {
        return ek.className == this.className && (this.adjust(kk), !0)
      }
      adjust(kk) {
        kk.style.left = this.left + "px", kk.style.top = this.top + "px", null != this.width && (kk.style.width = this.width + "px"), kk.style.height = this.height + "px"
      }
      eq(kk) {
        return this.left == kk.left && this.top == kk.top && this.width == kk.width && this.height == kk.height && this.className == kk.className
      }
      static forRange(kk, ek, ik) {
        if (ik.empty) {
          let Dk = kk.coordsAtPos(ik.head, ik.assoc || 1);
          if (!Dk) return [];
          let fk = gf(kk);
          return [new Of(ek, Dk.left - fk.left, Dk.top - fk.top, null, Dk.bottom - Dk.top)]
        }
        return function(kk, ek, ik) {
          if (ik.to <= kk.viewport.from || ik.from >= kk.viewport.to) return [];
          let Dk = Math.max(ik.from, kk.viewport.from),
            fk = Math.min(ik.to, kk.viewport.to),
            Sk = kk.textDirection == Me.LTR,
            bk = kk.contentDOM,
            rk = bk.getBoundingClientRect(),
            Pk = gf(kk),
            mk = bk.querySelector(".cm-line"),
            Mk = mk && window.getComputedStyle(mk),
            Kk = rk.left + (Mk ? parseInt(Mk.paddingLeft) + Math.min(0, parseInt(Mk.textIndent)) : 0),
            xk = rk.right - (Mk ? parseInt(Mk.paddingRight) : 0),
            nk = oi(kk, Dk, 1),
            Uk = oi(kk, fk, -1),
            Hk = nk.type == qk.Text ? nk : null,
            wk = Uk.type == qk.Text ? Uk : null;
          Hk && (kk.lineWrapping || nk.widgetLineBreaks) && (Hk = Gf(kk, Dk, 1, Hk));
          wk && (kk.lineWrapping || Uk.widgetLineBreaks) && (wk = Gf(kk, fk, -1, wk));
          if (Hk && wk && Hk.from == wk.from && Hk.to == wk.to) return pk(yk(ik.from, ik.to, Hk));
          {
            let ek = Hk ? yk(ik.from, null, Hk) : Yk(nk, !1),
              Dk = wk ? yk(null, ik.to, wk) : Yk(Uk, !0),
              fk = [];
            return (Hk || nk).to < (wk || Uk).from - (Hk && wk ? 1 : 0) || nk.widgetLineBreaks > 1 && ek.bottom + kk.defaultLineHeight / 2 < Dk.top ? fk.push(lk(Kk, ek.bottom, xk, Dk.top)) : ek.bottom < Dk.top && kk.elementAtHeight((ek.bottom + Dk.top) / 2).type == qk.Text && (ek.bottom = Dk.top = (ek.bottom + Dk.top) / 2), pk(ek).concat(fk).concat(pk(Dk))
          }

          function lk(kk, ik, Dk, fk) {
            return new Of(ek, kk - Pk.left, ik - Pk.top, Math.max(0, Dk - kk), fk - ik)
          }

          function pk(kk) {
            let {
              top: ek,
              bottom: ik,
              horizontal: Dk
            } = kk, fk = [];
            for (let Sk = 0; Sk < Dk.length; Sk += 2) fk.push(lk(Dk[Sk], ek, Dk[Sk + 1], ik));
            return fk
          }

          function yk(ek, ik, Dk) {
            let fk = 1e9,
              bk = -1e9,
              rk = [];

            function Pk(ek, ik, Pk, mk, Mk) {
              let nk = kk.coordsAtPos(ek, ek == Dk.to ? -2 : 2),
                Uk = kk.coordsAtPos(Pk, Pk == Dk.from ? 2 : -2);
              nk && Uk && (fk = Math.min(nk.top, Uk.top, fk), bk = Math.max(nk.bottom, Uk.bottom, bk), Mk == Me.LTR ? rk.push(Sk && ik ? Kk : nk.left, Sk && mk ? xk : Uk.right) : rk.push(!Sk && mk ? Kk : Uk.left, !Sk && ik ? xk : nk.right))
            }
            let mk = null !== ek && void 0 !== ek ? ek : Dk.from,
              Mk = null !== ik && void 0 !== ik ? ik : Dk.to;
            for (let Sk of kk.W8)
              if (Sk.to > mk && Sk.from < Mk)
                for (let Dk = Math.max(Sk.from, mk), fk = Math.min(Sk.to, Mk);;) {
                  let Sk = kk.state.doc.lineAt(Dk);
                  for (let bk of kk.bidiSpans(Sk)) {
                    let kk = bk.from + Sk.from,
                      rk = bk.to + Sk.from;
                    if (kk >= fk) break;
                    rk > Dk && Pk(Math.max(kk, Dk), null == ek && kk <= mk, Math.min(rk, fk), null == ik && rk >= Mk, bk.dir)
                  }
                  if (Dk = Sk.to + 1, Dk >= fk) break
                }
            return 0 == rk.length && Pk(mk, null == ek, Mk, null == ik, kk.textDirection), {
              top: fk,
              bottom: bk,
              horizontal: rk
            }
          }

          function Yk(kk, ek) {
            let ik = rk.top + (ek ? kk.top : kk.bottom);
            return {
              top: ik,
              bottom: ik,
              horizontal: []
            }
          }
        }(kk, ek, ik)
      }
    }

    function gf(kk) {
      let ek = kk.scrollDOM.getBoundingClientRect();
      return {
        left: (kk.textDirection == Me.LTR ? ek.left : ek.right - kk.scrollDOM.clientWidth * kk.scaleX) - kk.scrollDOM.scrollLeft * kk.scaleX,
        top: ek.top - kk.scrollDOM.scrollTop * kk.scaleY
      }
    }

    function Gf(kk, ek, ik, Dk) {
      let fk = kk.coordsAtPos(ek, 2 * ik);
      if (!fk) return Dk;
      let Sk = kk.dom.getBoundingClientRect(),
        bk = (fk.top + fk.bottom) / 2,
        rk = kk.posAtCoords({
          x: Sk.left + 1,
          y: bk
        }),
        Pk = kk.posAtCoords({
          x: Sk.right - 1,
          y: bk
        });
      return null == rk || null == Pk ? Dk : {
        from: Math.max(Dk.from, Math.min(rk, Pk)),
        to: Math.min(Dk.to, Math.max(rk, Pk))
      }
    }
    class Nf {
      constructor(kk, ek) {
        this.view = kk, this.layer = ek, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = kk.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), ek.above && this.dom.classList.add("cm-layer-above"), ek.class && this.dom.classList.add(ek.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(kk.state), kk.requestMeasure(this.measureReq), ek.mount && ek.mount(this.dom, kk)
      }
      update(kk) {
        kk.startState.facet(Rf) != kk.state.facet(Rf) && this.setOrder(kk.state), (this.layer.update(kk, this.dom) || kk.geometryChanged) && (this.scale(), kk.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(kk) {
        !1 !== this.layer.updateOnDocViewUpdate && kk.requestMeasure(this.measureReq)
      }
      setOrder(kk) {
        let ek = 0,
          ik = kk.facet(Rf);
        for (; ek < ik.length && ik[ek] != this.layer;) ek++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - ek)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: kk,
          scaleY: ek
        } = this.view;
        kk == this.scaleX && ek == this.scaleY || (this.scaleX = kk, this.scaleY = ek, this.dom.style.transform = `scale(${1/kk}, ${1/ek})`)
      }
      draw(kk) {
        if (kk.length != this.drawn.length || kk.some(((kk, ek) => {
            return ik = kk, Dk = this.drawn[ek], !(ik.constructor == Dk.constructor && ik.eq(Dk));
            var ik, Dk
          }))) {
          let ek = this.dom.firstChild,
            ik = 0;
          for (let Dk of kk) Dk.update && ek && Dk.constructor && this.drawn[ik].constructor && Dk.update(ek, this.drawn[ik]) ? (ek = ek.nextSibling, ik++) : this.dom.insertBefore(Dk.draw(), ek);
          for (; ek;) {
            let kk = ek.nextSibling;
            ek.remove(), ek = kk
          }
          this.drawn = kk, Ak.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const Rf = Dk.n.define();

    function Jf(kk) {
      return [Ne.define((ek => new Nf(ek, kk))), Rf.of(kk)]
    }
    const kS = Dk.n.define({
      combine: kk => (0, Dk.Q)(kk, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (kk, ek) => Math.min(kk, ek),
        drawRangeCursor: (kk, ek) => kk || ek
      })
    });

    function eS() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [kS.of(kk), DS, SS, bS, Xe.of(!0)]
    }

    function iS(kk) {
      return kk.startState.facet(kS) != kk.state.facet(kS)
    }
    const DS = Jf({
      above: !0,
      markers(kk) {
        let {
          state: ek
        } = kk, ik = ek.facet(kS), fk = [];
        for (let Sk of ek.selection.lw) {
          let bk = Sk == ek.selection.main;
          if (Sk.empty || ik.drawRangeCursor && !(bk && Ak.ios && ik.iosSelectionHandles)) {
            let ek = bk ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              ik = Sk.empty ? Sk : Dk.h.cursor(Sk.head, Sk.assoc);
            for (let Dk of Of.forRange(kk, ek, ik)) fk.push(Dk)
          }
        }
        return fk
      },
      update(kk, ek) {
        kk.transactions.some((kk => kk.selection)) && (ek.style.animationName = "cm-blink" == ek.style.animationName ? "cm-blink2" : "cm-blink");
        let ik = iS(kk);
        return ik && fS(kk.state, ek), kk.docChanged || kk.selectionSet || ik
      },
      mount(kk, ek) {
        fS(ek.state, kk)
      },
      class: "cm-cursorLayer"
    });

    function fS(kk, ek) {
      ek.style.animationDuration = kk.facet(kS).cursorBlinkRate + "ms"
    }
    const SS = Jf({
        above: !1,
        markers(kk) {
          let ek = [],
            {
              main: ik,
              lw: fk
            } = kk.state.selection;
          for (let Dk of fk)
            if (!Dk.empty)
              for (let ik of Of.forRange(kk, "cm-selectionBackground", Dk)) ek.push(ik);
          if (Ak.ios && !ik.empty && kk.state.facet(kS).iosSelectionHandles) {
            for (let fk of Of.forRange(kk, "cm-selectionHandle cm-selectionHandle-start", Dk.h.cursor(ik.from, 1))) ek.push(fk);
            for (let fk of Of.forRange(kk, "cm-selectionHandle cm-selectionHandle-end", Dk.h.cursor(ik.to, 1))) ek.push(fk)
          }
          return ek
        },
        update: (kk, ek) => kk.docChanged || kk.selectionSet || kk.viewportChanged || iS(kk),
        class: "cm-selectionLayer"
      }),
      bS = Dk.q.highest(uf.theme({
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
      rS = Dk.D.define({
        map: (kk, ek) => null == kk ? null : ek.mapPos(kk)
      }),
      PS = Dk.E.define({
        create: () => null,
        update: (kk, ek) => (null != kk && (kk = ek.changes.mapPos(kk)), ek.effects.reduce(((kk, ek) => ek.is(rS) ? ek.value : kk), kk))
      }),
      mS = Ne.fromClass(class {
        constructor(kk) {
          this.view = kk, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(kk) {
          var ek;
          let ik = kk.state.field(PS);
          null == ik ? null != this.cursor && (null === (ek = this.cursor) || void 0 === ek || ek.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (kk.startState.field(PS) != ik || kk.docChanged || kk.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: kk
          } = this, ek = kk.state.field(PS), ik = null != ek && kk.coordsAtPos(ek);
          if (!ik) return null;
          let Dk = kk.scrollDOM.getBoundingClientRect();
          return {
            left: ik.left - Dk.left + kk.scrollDOM.scrollLeft * kk.scaleX,
            top: ik.top - Dk.top + kk.scrollDOM.scrollTop * kk.scaleY,
            height: ik.bottom - ik.top
          }
        }
        drawCursor(kk) {
          if (this.cursor) {
            let {
              scaleX: ek,
              scaleY: ik
            } = this.view;
            kk ? (this.cursor.style.left = kk.left / ek + "px", this.cursor.style.top = kk.top / ik + "px", this.cursor.style.height = kk.height / ik + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(kk) {
          this.view.state.field(PS) != kk && this.view.dispatch({
            effects: rS.of(kk)
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

    function MS() {
      return [PS, mS]
    }

    function KS(kk, ek, ik, Dk, fk) {
      ek.lastIndex = 0;
      for (let Sk, bk = kk.iterRange(ik, Dk), rk = ik; !bk.next().done; rk += bk.value.length)
        if (!bk.lineBreak)
          for (; Sk = ek.exec(bk.value);) fk(rk + Sk.index, Sk)
    }
    class xS {
      constructor(kk) {
        const {
          regexp: ek,
          decoration: ik,
          decorate: Dk,
          boundary: fk,
          maxLength: Sk = 1e3
        } = kk;
        if (!ek.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = ek, Dk) this.addMatch = (kk, ek, ik, fk) => Dk(fk, ik, ik + kk[0].length, kk, ek);
        else if ("function" == typeof ik) this.addMatch = (kk, ek, Dk, fk) => {
          let Sk = ik(kk, ek, Dk);
          Sk && fk(Dk, Dk + kk[0].length, Sk)
        };
        else {
          if (!ik) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (kk, ek, Dk, fk) => fk(Dk, Dk + kk[0].length, ik)
        }
        this.boundary = fk, this.maxLength = Sk
      }
      createDeco(kk) {
        let ek = new Dk.s,
          ik = ek.add.bind(ek);
        for (let {
            from: Dk,
            to: fk
          }
          of
          function(kk, ek) {
            let ik = kk.W8;
            if (1 == ik.length && ik[0].from == kk.viewport.from && ik[0].to == kk.viewport.to) return ik;
            let Dk = [];
            for (let {
                from: fk,
                to: Sk
              }
              of ik) fk = Math.max(kk.state.doc.lineAt(fk).from, fk - ek), Sk = Math.min(kk.state.doc.lineAt(Sk).to, Sk + ek), Dk.length && Dk[Dk.length - 1].to >= fk ? Dk[Dk.length - 1].to = Sk : Dk.push({
              from: fk,
              to: Sk
            });
            return Dk
          }(kk, this.maxLength)) KS(kk.state.doc, this.regexp, Dk, fk, ((ek, Dk) => this.addMatch(Dk, kk, ek, ik)));
        return ek.finish()
      }
      updateDeco(kk, ek) {
        let ik = 1e9,
          Dk = -1;
        return kk.docChanged && kk.changes.iterChanges(((ek, fk, Sk, bk) => {
          bk >= kk.view.viewport.from && Sk <= kk.view.viewport.to && (ik = Math.min(Sk, ik), Dk = Math.max(bk, Dk))
        })), kk.viewportMoved || Dk - ik > 1e3 ? this.createDeco(kk.view) : Dk > -1 ? this.updateRange(kk.view, ek.map(kk.changes), ik, Dk) : ek
      }
      updateRange(kk, ek, ik, Dk) {
        for (let fk of kk.W8) {
          let Sk = Math.max(fk.from, ik),
            bk = Math.min(fk.to, Dk);
          if (bk >= Sk) {
            let ik = kk.state.doc.lineAt(Sk),
              Dk = ik.to < bk ? kk.state.doc.lineAt(bk) : ik,
              rk = Math.max(fk.from, ik.from),
              Pk = Math.min(fk.to, Dk.to);
            if (this.boundary) {
              for (; Sk > ik.from; Sk--)
                if (this.boundary.test(ik.text[Sk - 1 - ik.from])) {
                  rk = Sk;
                  break
                } for (; bk < Dk.to; bk++)
                if (this.boundary.test(Dk.text[bk - Dk.from])) {
                  Pk = bk;
                  break
                }
            }
            let mk, Mk = [],
              Kk = (kk, ek, ik) => Mk.push(ik.range(kk, ek));
            if (ik == Dk)
              for (this.regexp.lastIndex = rk - ik.from;
                (mk = this.regexp.exec(ik.text)) && mk.index < Pk - ik.from;) this.addMatch(mk, kk, mk.index + ik.from, Kk);
            else KS(kk.state.doc, this.regexp, rk, Pk, ((ek, ik) => this.addMatch(ik, kk, ek, Kk)));
            ek = ek.update({
              filterFrom: rk,
              filterTo: Pk,
              filter: (kk, ek) => kk < rk || ek > Pk,
              add: Mk
            })
          }
        }
        return ek
      }
    }
    const nS = null != /x/.unicode ? "gu" : "g",
      US = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", nS),
      HS = {
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
    let wS = null;
    const lS = Dk.n.define({
      combine(kk) {
        let ek = (0, Dk.Q)(kk, {
          render: null,
          specialChars: US,
          addSpecialChars: null
        });
        return (ek.replaceTabs = ! function() {
          var kk;
          if (null == wS && "undefined" != typeof document && document.body) {
            let ek = document.body.style;
            wS = null != (null !== (kk = ek.tabSize) && void 0 !== kk ? kk : ek.MozTabSize)
          }
          return wS || !1
        }()) && (ek.specialChars = new RegExp("\t|" + ek.specialChars.source, nS)), ek.addSpecialChars && (ek.specialChars = new RegExp(ek.specialChars.source + "|" + ek.addSpecialChars.source, nS)), ek
      }
    });

    function pS() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [lS.of(kk), yS || (yS = Ne.fromClass(class {
        constructor(kk) {
          this.view = kk, this.oD = Ik.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(kk.state.facet(lS)), this.oD = this.decorator.createDeco(kk)
        }
        makeDecorator(kk) {
          return new xS({
            regexp: kk.specialChars,
            decoration: (ek, ik, fk) => {
              let {
                doc: Sk
              } = ik.state, bk = (0, Dk.L)(ek[0], 0);
              if (9 == bk) {
                let kk = Sk.lineAt(fk),
                  ek = ik.state.tabSize,
                  bk = (0, Dk.S)(kk.text, ek, fk - kk.from);
                return Ik.replace({
                  widget: new LS((ek - bk % ek) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[bk] || (this.decorationCache[bk] = Ik.replace({
                widget: new YS(kk, bk)
              }))
            },
            boundary: kk.replaceTabs ? void 0 : /[^]/
          })
        }
        update(kk) {
          let ek = kk.state.facet(lS);
          kk.startState.facet(lS) != ek ? (this.decorator = this.makeDecorator(ek), this.oD = this.decorator.createDeco(kk.view)) : this.oD = this.decorator.updateDeco(kk, this.oD)
        }
      }, {
        oD: kk => kk.oD
      }))]
    }
    let yS = null;
    class YS extends uk {
      constructor(kk, ek) {
        super(), this.options = kk, this.code = ek
      }
      eq(kk) {
        return kk.code == this.code
      }
      toDOM(kk) {
        let ek = function(kk) {
            return kk >= 32 ? "\u2022" : 10 == kk ? "\u2424" : String.fromCharCode(9216 + kk)
          }(this.code),
          ik = kk.state.phrase("Control character") + " " + (HS[this.code] || "0x" + this.code.toString(16)),
          Dk = this.options.render && this.options.render(this.code, ik, ek);
        if (Dk) return Dk;
        let fk = document.createElement("span");
        return fk.textContent = ek, fk.title = ik, fk.setAttribute("aria-label", ik), fk.className = "cm-specialChar", fk
      }
      ignoreEvent() {
        return !1
      }
    }
    class LS extends uk {
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

    function CS() {
      return jS
    }
    const AS = Ik.line({
        class: "cm-activeLine"
      }),
      jS = Ne.fromClass(class {
        constructor(kk) {
          this.oD = this.getDeco(kk)
        }
        update(kk) {
          (kk.docChanged || kk.selectionSet) && (this.oD = this.getDeco(kk.view))
        }
        getDeco(kk) {
          let ek = -1,
            ik = [];
          for (let Dk of kk.state.selection.lw) {
            let fk = kk.lineBlockAt(Dk.head);
            fk.from > ek && (ik.push(AS.range(fk.from)), ek = fk.from)
          }
          return Ik.set(ik)
        }
      }, {
        oD: kk => kk.oD
      });
    class sS extends uk {
      constructor(kk) {
        super(), this.content = kk
      }
      toDOM(kk) {
        let ek = document.createElement("span");
        return ek.className = "cm-placeholder", ek.style.pointerEvents = "none", ek.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(kk) : this.content.cloneNode(!0)), ek.setAttribute("aria-hidden", "true"), ek
      }
      coordsAt(kk) {
        let ek = kk.firstChild ? Bk(kk.firstChild) : [];
        if (!ek.length) return null;
        let ik = window.getComputedStyle(kk.parentNode),
          Dk = Gk(ek[0], "rtl" != ik.direction),
          fk = parseInt(ik.lineHeight);
        return Dk.bottom - Dk.top > 1.5 * fk ? {
          left: Dk.left,
          right: Dk.right,
          top: Dk.top,
          bottom: Dk.top + fk
        } : Dk
      }
      ignoreEvent() {
        return !1
      }
    }

    function dS(kk) {
      let ek = Ne.fromClass(class {
        constructor(ek) {
          this.view = ek, this.placeholder = kk ? Ik.set([Ik.widget({
            widget: new sS(kk),
            side: 1
          }).range(0)]) : Ik.none
        }
        get oD() {
          return this.view.state.doc.length ? Ik.none : this.placeholder
        }
      }, {
        oD: kk => kk.oD
      });
      return "string" == typeof kk ? [ek, uf.contentAttributes.of({
        "aria-placeholder": kk
      })] : ek
    }
    const VS = 2e3;

    function FS(kk, ek) {
      let ik = kk.posAtCoords({
          x: ek.clientX,
          y: ek.clientY
        }, !1),
        fk = kk.state.doc.lineAt(ik),
        Sk = ik - fk.from,
        bk = Sk > VS ? -1 : Sk == fk.length ? function(kk, ek) {
          let ik = kk.coordsAtPos(kk.viewport.from);
          return ik ? Math.round(Math.abs((ik.left - ek) / kk.defaultCharacterWidth)) : -1
        }(kk, ek.clientX) : (0, Dk.S)(fk.text, kk.state.tabSize, ik - fk.from);
      return {
        line: fk.number,
        col: bk,
        off: Sk
      }
    }

    function uS(kk, ek) {
      let ik = FS(kk, ek),
        fk = kk.state.selection;
      return ik ? {
        update(kk) {
          if (kk.docChanged) {
            let ek = kk.changes.mapPos(kk.startState.doc.line(ik.line).from),
              Dk = kk.state.doc.lineAt(ek);
            ik = {
              line: Dk.number,
              col: ik.col,
              off: Math.min(ik.off, Dk.length)
            }, fk = fk.map(kk.changes)
          }
        },
        get(ek, Sk, bk) {
          let rk = FS(kk, ek);
          if (!rk) return fk;
          let Pk = function(kk, ek, ik) {
            let fk = Math.min(ek.line, ik.line),
              Sk = Math.max(ek.line, ik.line),
              bk = [];
            if (ek.off > VS || ik.off > VS || ek.col < 0 || ik.col < 0) {
              let rk = Math.min(ek.off, ik.off),
                Pk = Math.max(ek.off, ik.off);
              for (let ek = fk; ek <= Sk; ek++) {
                let ik = kk.doc.line(ek);
                ik.length <= Pk && bk.push(Dk.h.range(ik.from + rk, ik.to + Pk))
              }
            } else {
              let rk = Math.min(ek.col, ik.col),
                Pk = Math.max(ek.col, ik.col);
              for (let ek = fk; ek <= Sk; ek++) {
                let ik = kk.doc.line(ek),
                  fk = (0, Dk.Y)(ik.text, rk, kk.tabSize, !0);
                if (fk < 0) bk.push(Dk.h.cursor(ik.to));
                else {
                  let ek = (0, Dk.Y)(ik.text, Pk, kk.tabSize);
                  bk.push(Dk.h.range(ik.from + fk, ik.from + ek))
                }
              }
            }
            return bk
          }(kk.state, ik, rk);
          return Pk.length ? bk ? Dk.h.create(Pk.concat(fk.lw)) : Dk.h.create(Pk) : fk
        }
      } : null
    }

    function qS(kk) {
      let ek = (null === kk || void 0 === kk ? void 0 : kk.eventFilter) || (kk => kk.altKey && 0 == kk.button);
      return uf.mouseSelectionStyle.of(((kk, ik) => ek(ik) ? uS(kk, ik) : null))
    }
    const IS = {
        Alt: [18, kk => !!kk.altKey],
        Control: [17, kk => !!kk.ctrlKey],
        Shift: [16, kk => !!kk.shiftKey],
        Meta: [91, kk => !!kk.metaKey]
      },
      zS = {
        style: "cursor: crosshair"
      };

    function QS() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [ek, ik] = IS[kk.key || "Alt"],
        Dk = Ne.fromClass(class {
          constructor(kk) {
            this.view = kk, this.isDown = !1
          }
          set(kk) {
            this.isDown != kk && (this.isDown = kk, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(kk) {
              this.set(kk.keyCode == ek || ik(kk))
            },
            keyup(kk) {
              kk.keyCode != ek && ik(kk) || this.set(!1)
            },
            mousemove(kk) {
              this.set(ik(kk))
            }
          }
        });
      return [Dk, uf.contentAttributes.of((kk => {
        var ek;
        return (null === (ek = kk.plugin(Dk)) || void 0 === ek ? void 0 : ek.isDown) ? zS : null
      }))]
    }
    const vS = "-10000px";
    class ES {
      constructor(kk, ek, ik, Dk) {
        this.facet = ek, this.createTooltipView = ik, this.removeTooltipView = Dk, this.input = kk.state.facet(ek), this.tooltips = this.input.filter((kk => kk));
        let fk = null;
        this.tooltipViews = this.tooltips.map((kk => fk = ik(kk, fk)))
      }
      update(kk, ek) {
        var ik;
        let Dk = kk.state.facet(this.facet),
          fk = Dk.filter((kk => kk));
        if (Dk === this.input) {
          for (let ek of this.tooltipViews) ek.update && ek.update(kk);
          return !1
        }
        let Sk = [],
          bk = ek ? [] : null;
        for (let rk = 0; rk < fk.length; rk++) {
          let ik = fk[rk],
            Dk = -1;
          if (ik) {
            for (let kk = 0; kk < this.tooltips.length; kk++) {
              let ek = this.tooltips[kk];
              ek && ek.create == ik.create && (Dk = kk)
            }
            if (Dk < 0) Sk[rk] = this.createTooltipView(ik, rk ? Sk[rk - 1] : null), bk && (bk[rk] = !!ik.above);
            else {
              let ik = Sk[rk] = this.tooltipViews[Dk];
              bk && (bk[rk] = ek[Dk]), ik.update && ik.update(kk)
            }
          }
        }
        for (let rk of this.tooltipViews) Sk.indexOf(rk) < 0 && (this.removeTooltipView(rk), null === (ik = rk.destroy) || void 0 === ik || ik.call(rk));
        return ek && (bk.forEach(((kk, ik) => ek[ik] = kk)), ek.length = bk.length), this.input = Dk, this.tooltips = fk, this.tooltipViews = Sk, !0
      }
    }

    function hS(kk) {
      let ek = kk.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: ek.clientHeight,
        right: ek.clientWidth
      }
    }
    const aS = Dk.n.define({
        combine: kk => {
          var ek, ik, Dk;
          return {
            position: Ak.ios ? "absolute" : (null === (ek = kk.find((kk => kk.position))) || void 0 === ek ? void 0 : ek.position) || "fixed",
            parent: (null === (ik = kk.find((kk => kk.parent))) || void 0 === ik ? void 0 : ik.parent) || null,
            tooltipSpace: (null === (Dk = kk.find((kk => kk.tooltipSpace))) || void 0 === Dk ? void 0 : Dk.tooltipSpace) || hS
          }
        }
      }),
      WS = new WeakMap,
      tS = Ne.fromClass(class {
        constructor(kk) {
          this.view = kk, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let ek = kk.state.facet(aS);
          this.position = ek.position, this.parent = ek.parent, this.classes = kk.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new ES(kk, TS, ((kk, ek) => this.createTooltip(kk, ek)), (kk => {
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
          let ek = this.manager.update(kk, this.above);
          ek && this.observeIntersection();
          let ik = ek || kk.geometryChanged,
            Dk = kk.state.facet(aS);
          if (Dk.position != this.position && !this.madeAbsolute) {
            this.position = Dk.position;
            for (let kk of this.manager.tooltipViews) kk.dom.style.position = this.position;
            ik = !0
          }
          if (Dk.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Dk.parent, this.createContainer();
            for (let kk of this.manager.tooltipViews) this.container.appendChild(kk.dom);
            ik = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          ik && this.maybeMeasure()
        }
        createTooltip(kk, ek) {
          let ik = kk.create(this.view),
            Dk = ek ? ek.dom : null;
          if (ik.dom.classList.add("cm-tooltip"), kk.arrow && !ik.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let kk = document.createElement("div");
            kk.className = "cm-tooltip-arrow", ik.dom.appendChild(kk)
          }
          return ik.dom.style.position = this.position, ik.dom.style.top = vS, ik.dom.style.left = "0px", this.container.insertBefore(ik.dom, Dk), ik.mount && ik.mount(this.view), this.resizeObserver && this.resizeObserver.observe(ik.dom), ik
        }
        destroy() {
          var kk, ek, ik;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Dk of this.manager.tooltipViews) Dk.dom.remove(), null === (kk = Dk.destroy) || void 0 === kk || kk.call(Dk);
          this.parent && this.container.remove(), null === (ek = this.resizeObserver) || void 0 === ek || ek.disconnect(), null === (ik = this.intersectionObserver) || void 0 === ik || ik.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let kk = 1,
            ek = 1,
            ik = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: kk
            } = this.manager.tooltipViews[0];
            if (Ak.safari) {
              let ek = kk.getBoundingClientRect();
              ik = Math.abs(ek.top + 1e4) > 1 || Math.abs(ek.left) > 1
            } else ik = !!kk.offsetParent && kk.offsetParent != this.container.ownerDocument.body
          }
          if (ik || "absolute" == this.position)
            if (this.parent) {
              let ik = this.parent.getBoundingClientRect();
              ik.width && ik.height && (kk = ik.width / this.parent.offsetWidth, ek = ik.height / this.parent.offsetHeight)
            } else({
              scaleX: kk,
              scaleY: ek
            } = this.view.viewState);
          let Dk = this.view.scrollDOM.getBoundingClientRect(),
            fk = Pi(this.view);
          return {
            visible: {
              left: Dk.left + fk.left,
              top: Dk.top + fk.top,
              right: Dk.right - fk.right,
              bottom: Dk.bottom - fk.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((kk, ek) => {
              let ik = this.manager.tooltipViews[ek];
              return ik.getCoords ? ik.getCoords(kk.pos) : this.view.coordsAtPos(kk.pos)
            })),
            size: this.manager.tooltipViews.map((kk => {
              let {
                dom: ek
              } = kk;
              return ek.getBoundingClientRect()
            })),
            space: this.view.state.facet(aS).tooltipSpace(this.view),
            scaleX: kk,
            scaleY: ek,
            makeAbsolute: ik
          }
        }
        writeMeasure(kk) {
          var ek;
          if (kk.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let kk of this.manager.tooltipViews) kk.dom.style.position = "absolute"
          }
          let {
            visible: ik,
            space: Dk,
            scaleX: fk,
            scaleY: Sk
          } = kk, bk = [];
          for (let rk = 0; rk < this.manager.tooltips.length; rk++) {
            let Pk = this.manager.tooltips[rk],
              mk = this.manager.tooltipViews[rk],
              {
                dom: Mk
              } = mk,
              Kk = kk.pos[rk],
              xk = kk.size[rk];
            if (!Kk || !1 !== Pk.clip && (Kk.bottom <= Math.max(ik.top, Dk.top) || Kk.top >= Math.min(ik.bottom, Dk.bottom) || Kk.right < Math.max(ik.left, Dk.left) - .1 || Kk.left > Math.min(ik.right, Dk.right) + .1)) {
              Mk.style.top = vS;
              continue
            }
            let nk = Pk.arrow ? mk.dom.querySelector(".cm-tooltip-arrow") : null,
              Uk = nk ? 7 : 0,
              Hk = xk.right - xk.left,
              wk = null !== (ek = WS.get(mk)) && void 0 !== ek ? ek : xk.bottom - xk.top,
              lk = mk.offset || cS,
              pk = this.view.textDirection == Me.LTR,
              yk = xk.width > Dk.right - Dk.left ? pk ? Dk.left : Dk.right - xk.width : pk ? Math.max(Dk.left, Math.min(Kk.left - (nk ? 14 : 0) + lk.x, Dk.right - Hk)) : Math.min(Math.max(Dk.left, Kk.left - Hk + (nk ? 14 : 0) - lk.x), Dk.right - Hk),
              Yk = this.above[rk];
            !Pk.strictSide && (Yk ? Kk.top - wk - Uk - lk.y < Dk.top : Kk.bottom + wk + Uk + lk.y > Dk.bottom) && Yk == Dk.bottom - Kk.bottom > Kk.top - Dk.top && (Yk = this.above[rk] = !Yk);
            let Lk = (Yk ? Kk.top - Dk.top : Dk.bottom - Kk.bottom) - Uk;
            if (Lk < wk && !1 !== mk.resize) {
              if (Lk < this.view.defaultLineHeight) {
                Mk.style.top = vS;
                continue
              }
              WS.set(mk, wk), Mk.style.height = (wk = Lk) / Sk + "px"
            } else Mk.style.height && (Mk.style.height = "");
            let Ck = Yk ? Kk.top - wk - Uk - lk.y : Kk.bottom + Uk + lk.y,
              Ak = yk + Hk;
            if (!0 !== mk.overlap)
              for (let kk of bk) kk.left < Ak && kk.right > yk && kk.top < Ck + wk && kk.bottom > Ck && (Ck = Yk ? kk.top - wk - 2 - Uk : kk.bottom + Uk + 2);
            if ("absolute" == this.position ? (Mk.style.top = (Ck - kk.parent.top) / Sk + "px", XS(Mk, (yk - kk.parent.left) / fk)) : (Mk.style.top = Ck / Sk + "px", XS(Mk, yk / fk)), nk) {
              let kk = Kk.left + (pk ? lk.x : -lk.x) - (yk + 14 - 7);
              nk.style.left = kk / fk + "px"
            }!0 !== mk.overlap && bk.push({
              left: yk,
              top: Ck,
              right: Ak,
              bottom: Ck + wk
            }), Mk.classList.toggle("cm-tooltip-above", Yk), Mk.classList.toggle("cm-tooltip-below", !Yk), mk.positioned && mk.positioned(kk.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let kk of this.manager.tooltipViews) kk.dom.style.top = vS
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function XS(kk, ek) {
      let ik = parseInt(kk.style.left, 10);
      (isNaN(ik) || Math.abs(ek - ik) > 1) && (kk.style.left = ek + "px")
    }
    const BS = uf.baseTheme({
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
      cS = {
        x: 0,
        y: 0
      },
      TS = Dk.n.define({
        enables: [tS, BS]
      }),
      oS = Dk.n.define({
        combine: kk => kk.reduce(((kk, ek) => kk.concat(ek)), [])
      });
    class ZS {
      static create(kk) {
        return new ZS(kk)
      }
      constructor(kk) {
        this.view = kk, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new ES(kk, oS, ((kk, ek) => this.createHostedView(kk, ek)), (kk => kk.dom.remove()))
      }
      createHostedView(kk, ek) {
        let ik = kk.create(this.view);
        return ik.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(ik.dom, ek ? ek.dom.nextSibling : this.dom.firstChild), this.mounted && ik.mount && ik.mount(this.view), ik
      }
      mount(kk) {
        for (let ek of this.manager.tooltipViews) ek.mount && ek.mount(kk);
        this.mounted = !0
      }
      positioned(kk) {
        for (let ek of this.manager.tooltipViews) ek.positioned && ek.positioned(kk)
      }
      update(kk) {
        this.manager.update(kk)
      }
      destroy() {
        var kk;
        for (let ek of this.manager.tooltipViews) null === (kk = ek.destroy) || void 0 === kk || kk.call(ek)
      }
      passProp(kk) {
        let ek;
        for (let ik of this.manager.tooltipViews) {
          let Dk = ik[kk];
          if (void 0 !== Dk)
            if (void 0 === ek) ek = Dk;
            else if (ek !== Dk) return
        }
        return ek
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
    const OS = TS.compute([oS], (kk => {
      let ek = kk.facet(oS);
      return 0 === ek.length ? null : {
        pos: Math.min(...ek.map((kk => kk.pos))),
        end: Math.max(...ek.map((kk => {
          var ek;
          return null !== (ek = kk.end) && void 0 !== ek ? ek : kk.pos
        }))),
        create: ZS.create,
        above: ek[0].above,
        arrow: ek.some((kk => kk.arrow))
      }
    }));
    class gS {
      constructor(kk, ek, ik, Dk, fk) {
        this.view = kk, this.source = ek, this.field = ik, this.setHover = Dk, this.hoverTime = fk, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: ek
        } = this, ik = kk.docView.tile.nearest(ek.target);
        if (!ik) return;
        let Dk, fk = 1;
        if (ik.isWidget()) Dk = ik.posAtStart;
        else {
          if (Dk = kk.posAtCoords(ek), null == Dk) return;
          let ik = kk.coordsAtPos(Dk);
          if (!ik || ek.y < ik.top || ek.y > ik.bottom || ek.x < ik.left - kk.defaultCharacterWidth || ek.x > ik.right + kk.defaultCharacterWidth) return;
          let Sk = kk.bidiSpans(kk.state.doc.lineAt(Dk)).find((kk => kk.from <= Dk && kk.to >= Dk)),
            bk = Sk && Sk.dir == Me.RTL ? -1 : 1;
          fk = ek.x < ik.left ? -bk : bk
        }
        let Sk = this.source(kk, Dk, fk);
        if (null === Sk || void 0 === Sk ? void 0 : Sk.then) {
          let ek = this.pending = {
            pos: Dk
          };
          Sk.then((ik => {
            this.pending == ek && (this.pending = null, !ik || Array.isArray(ik) && !ik.length || kk.dispatch({
              effects: this.setHover.of(Array.isArray(ik) ? ik : [ik])
            }))
          }), (ek => Ze(kk.state, ek, "hover tooltip")))
        } else !Sk || Array.isArray(Sk) && !Sk.length || kk.dispatch({
          effects: this.setHover.of(Array.isArray(Sk) ? Sk : [Sk])
        })
      }
      get tooltip() {
        let kk = this.view.plugin(tS),
          ek = kk ? kk.manager.tooltips.findIndex((kk => kk.create == ZS.create)) : -1;
        return ek > -1 ? kk.manager.tooltipViews[ek] : null
      }
      mousemove(kk) {
        var ek, ik;
        this.lastMove = {
          x: kk.clientX,
          y: kk.clientY,
          target: kk.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Dk,
          tooltip: fk
        } = this;
        if (Dk.length && fk && ! function(kk, ek) {
            let ik, {
              left: Dk,
              right: fk,
              top: Sk,
              bottom: bk
            } = kk.getBoundingClientRect();
            if (ik = kk.querySelector(".cm-tooltip-arrow")) {
              let kk = ik.getBoundingClientRect();
              Sk = Math.min(kk.top, Sk), bk = Math.max(kk.bottom, bk)
            }
            return ek.clientX >= Dk - GS && ek.clientX <= fk + GS && ek.clientY >= Sk - GS && ek.clientY <= bk + GS
          }(fk.dom, kk) || this.pending) {
          let {
            pos: fk
          } = Dk[0] || this.pending, Sk = null !== (ik = null === (ek = Dk[0]) || void 0 === ek ? void 0 : ek.end) && void 0 !== ik ? ik : fk;
          (fk == Sk ? this.view.posAtCoords(this.lastMove) == fk : function(kk, ek, ik, Dk, fk) {
            let Sk = kk.scrollDOM.getBoundingClientRect(),
              bk = kk.documentTop + kk.documentPadding.top + kk.contentHeight;
            if (Sk.left > Dk || Sk.right < Dk || Sk.top > fk || Math.min(Sk.bottom, bk) < fk) return !1;
            let rk = kk.posAtCoords({
              x: Dk,
              y: fk
            }, !1);
            return rk >= ek && rk <= ik
          }(this.view, fk, Sk, kk.clientX, kk.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(kk) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: ek
        } = this;
        if (ek.length) {
          let {
            tooltip: ek
          } = this;
          ek && ek.dom.contains(kk.relatedTarget) ? this.watchTooltipLeave(ek.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(kk) {
        let ek = ik => {
          kk.removeEventListener("mouseleave", ek), this.active.length && !this.view.dom.contains(ik.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        kk.addEventListener("mouseleave", ek)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const GS = 4;

    function NS(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ik = Dk.D.define(),
        fk = Dk.E.define({
          create: () => [],
          update(kk, fk) {
            if (kk.length && (ek.hideOnChange && (fk.docChanged || fk.selection) ? kk = [] : ek.hideOn && (kk = kk.filter((kk => !ek.hideOn(fk, kk)))), fk.docChanged)) {
              let ek = [];
              for (let ik of kk) {
                let kk = fk.changes.mapPos(ik.pos, -1, Dk.p.TrackDel);
                if (null != kk) {
                  let Dk = Object.assign(Object.create(null), ik);
                  Dk.pos = kk, null != Dk.end && (Dk.end = fk.changes.mapPos(Dk.end)), ek.push(Dk)
                }
              }
              kk = ek
            }
            for (let ek of fk.effects) ek.is(ik) && (kk = ek.value), ek.is(JS) && (kk = []);
            return kk
          },
          provide: kk => oS.from(kk)
        });
      return {
        active: fk,
        extension: [fk, Ne.define((Dk => new gS(Dk, kk, fk, ik, ek.hoverTime || 300))), OS]
      }
    }

    function RS(kk, ek) {
      let ik = kk.plugin(tS);
      if (!ik) return null;
      let Dk = ik.manager.tooltips.indexOf(ek);
      return Dk < 0 ? null : ik.manager.tooltipViews[Dk]
    }
    const JS = Dk.D.define();
    const kb = Dk.n.define({
      combine(kk) {
        let ek, ik;
        for (let Dk of kk) ek = ek || Dk.topContainer, ik = ik || Dk.bottomContainer;
        return {
          topContainer: ek,
          bottomContainer: ik
        }
      }
    });

    function eb(kk, ek) {
      let ik = kk.plugin(ib),
        Dk = ik ? ik.specs.indexOf(ek) : -1;
      return Dk > -1 ? ik.panels[Dk] : null
    }
    const ib = Ne.fromClass(class {
      constructor(kk) {
        this.input = kk.state.facet(Sb), this.specs = this.input.filter((kk => kk)), this.panels = this.specs.map((ek => ek(kk)));
        let ek = kk.state.facet(kb);
        this.top = new Db(kk, !0, ek.topContainer), this.bottom = new Db(kk, !1, ek.bottomContainer), this.top.sync(this.panels.filter((kk => kk.top))), this.bottom.sync(this.panels.filter((kk => !kk.top)));
        for (let ik of this.panels) ik.dom.classList.add("cm-panel"), ik.mount && ik.mount()
      }
      update(kk) {
        let ek = kk.state.facet(kb);
        this.top.container != ek.topContainer && (this.top.sync([]), this.top = new Db(kk.view, !0, ek.topContainer)), this.bottom.container != ek.bottomContainer && (this.bottom.sync([]), this.bottom = new Db(kk.view, !1, ek.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let ik = kk.state.facet(Sb);
        if (ik != this.input) {
          let ek = ik.filter((kk => kk)),
            Dk = [],
            fk = [],
            Sk = [],
            bk = [];
          for (let ik of ek) {
            let ek, rk = this.specs.indexOf(ik);
            rk < 0 ? (ek = ik(kk.view), bk.push(ek)) : (ek = this.panels[rk], ek.update && ek.update(kk)), Dk.push(ek), (ek.top ? fk : Sk).push(ek)
          }
          this.specs = ek, this.panels = Dk, this.top.sync(fk), this.bottom.sync(Sk);
          for (let kk of bk) kk.dom.classList.add("cm-panel"), kk.mount && kk.mount()
        } else
          for (let Dk of this.panels) Dk.update && Dk.update(kk)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: kk => uf.scrollMargins.of((ek => {
        let ik = ek.plugin(kk);
        return ik && {
          top: ik.top.scrollMargin(),
          bottom: ik.bottom.scrollMargin()
        }
      }))
    });
    class Db {
      constructor(kk, ek, ik) {
        this.view = kk, this.top = ek, this.container = ik, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(kk) {
        for (let ek of this.panels) ek.destroy && kk.indexOf(ek) < 0 && ek.destroy();
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
        for (let ek of this.panels)
          if (ek.dom.parentNode == this.dom) {
            for (; kk != ek.dom;) kk = fb(kk);
            kk = kk.nextSibling
          } else this.dom.insertBefore(ek.dom, kk);
        for (; kk;) kk = fb(kk)
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

    function fb(kk) {
      let ek = kk.nextSibling;
      return kk.remove(), ek
    }
    const Sb = Dk.n.define({
      enables: ib
    });

    function bb(kk, ek) {
      let ik, fk = new Promise((kk => ik = kk)),
        Sk = kk => function(kk, ek, ik) {
          let Dk = ek.content ? ek.content(kk, (() => bk(null))) : null;
          if (!Dk) {
            if (Dk = (0, Kk.e)("form"), ek.input) {
              let kk = (0, Kk.e)("input", ek.input);
              /^(text|password|number|email|tel|url)$/.test(kk.type) && kk.classList.add("cm-textfield"), kk.name || (kk.name = "input"), Dk.appendChild((0, Kk.e)("label", (ek.label || "") + ": ", kk))
            } else Dk.appendChild(document.createTextNode(ek.label || ""));
            Dk.appendChild(document.createTextNode(" ")), Dk.appendChild((0, Kk.e)("button", {
              class: "cm-button",
              type: "submit"
            }, ek.submitLabel || "OK"))
          }
          let fk = "FORM" == Dk.nodeName ? [Dk] : Dk.querySelectorAll("form");
          for (let rk = 0; rk < fk.length; rk++) {
            let kk = fk[rk];
            kk.addEventListener("keydown", (ek => {
              27 == ek.keyCode ? (ek.preventDefault(), bk(null)) : 13 == ek.keyCode && (ek.preventDefault(), bk(kk))
            })), kk.addEventListener("submit", (ek => {
              ek.preventDefault(), bk(kk)
            }))
          }
          let Sk = (0, Kk.e)("div", Dk, (0, Kk.e)("button", {
            onclick: () => bk(null),
            "aria-label": kk.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          ek.class && (Sk.className = ek.class);

          function bk(ek) {
            Sk.contains(Sk.ownerDocument.activeElement) && kk.focus(), ik(ek)
          }
          return Sk.classList.add("cm-dialog"), {
            dom: Sk,
            top: ek.top,
            mount: () => {
              if (ek.focus) {
                let kk;
                kk = "string" == typeof ek.focus ? Dk.querySelector(ek.focus) : Dk.querySelector("input") || Dk.querySelector("button"), kk && "select" in kk ? kk.select() : kk && "focus" in kk && kk.focus()
              }
            }
          }
        }(kk, ek, ik);
      kk.state.field(rb, !1) ? kk.dispatch({
        effects: Pb.of(Sk)
      }) : kk.dispatch({
        effects: Dk.D.appendConfig.of(rb.init((() => [Sk])))
      });
      let bk = mb.of(Sk);
      return {
        close: bk,
        result: fk.then((ek => ((kk.win.queueMicrotask || (ek => kk.win.setTimeout(ek, 10)))((() => {
          kk.state.field(rb).indexOf(Sk) > -1 && kk.dispatch({
            effects: bk
          })
        })), ek)))
      }
    }
    const rb = Dk.E.define({
        create: () => [],
        update(kk, ek) {
          for (let ik of ek.effects) ik.is(Pb) ? kk = [ik.value].concat(kk) : ik.is(mb) && (kk = kk.filter((kk => kk != ik.value)));
          return kk
        },
        provide: kk => Sb.computeN([kk], (ek => ek.field(kk)))
      }),
      Pb = Dk.D.define(),
      mb = Dk.D.define();
    class Mb extends Dk.A {
      compare(kk) {
        return this == kk || this.constructor == kk.constructor && this.eq(kk)
      }
      eq(kk) {
        return !1
      }
      destroy(kk) {}
    }
    Mb.prototype.elementClass = "", Mb.prototype.toDOM = void 0, Mb.prototype.mapMode = Dk.p.TrackBefore, Mb.prototype.startSide = Mb.prototype.endSide = -1, Mb.prototype.point = !0;
    const Kb = Dk.n.define(),
      xb = Dk.n.define(),
      nb = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Dk.w.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      Ub = Dk.n.define();

    function Hb(kk) {
      return [lb(), Ub.of({
        ...nb,
        ...kk
      })]
    }
    const wb = Dk.n.define({
      combine: kk => kk.some((kk => kk))
    });

    function lb(kk) {
      let ek = [pb];
      return kk && !1 === kk.fixed && ek.push(wb.of(!0)), ek
    }
    const pb = Ne.fromClass(class {
      constructor(kk) {
        this.view = kk, this.domAfter = null, this.prevViewport = kk.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = kk.state.facet(Ub).map((ek => new Cb(kk, ek))), this.fixed = !kk.state.facet(wb);
        for (let ek of this.gutters) "after" == ek.config.side ? this.getDOMAfter().appendChild(ek.dom) : this.dom.appendChild(ek.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), kk.scrollDOM.insertBefore(this.dom, kk.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(kk) {
        if (this.updateGutters(kk)) {
          let ek = this.prevViewport,
            ik = kk.view.viewport,
            Dk = Math.min(ek.to, ik.to) - Math.max(ek.from, ik.from);
          this.syncGutters(Dk < .8 * (ik.to - ik.from))
        }
        if (kk.geometryChanged) {
          let kk = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = kk, this.domAfter && (this.domAfter.style.minHeight = kk)
        }
        this.view.state.facet(wb) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = kk.view.viewport
      }
      syncGutters(kk) {
        let ek = this.dom.nextSibling;
        kk && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let ik = Dk.w.iter(this.view.state.facet(Kb), this.view.viewport.from),
          fk = [],
          Sk = this.gutters.map((kk => new Lb(kk, this.view.viewport, -this.view.documentPadding.top)));
        for (let Dk of this.view.viewportLineBlocks)
          if (fk.length && (fk = []), Array.isArray(Dk.type)) {
            let kk = !0;
            for (let ek of Dk.type)
              if (ek.type == qk.Text && kk) {
                Yb(ik, fk, ek.from);
                for (let kk of Sk) kk.line(this.view, ek, fk);
                kk = !1
              } else if (ek.widget)
              for (let kk of Sk) kk.widget(this.view, ek)
          } else if (Dk.type == qk.Text) {
          Yb(ik, fk, Dk.from);
          for (let kk of Sk) kk.line(this.view, Dk, fk)
        } else if (Dk.widget)
          for (let kk of Sk) kk.widget(this.view, Dk);
        for (let Dk of Sk) Dk.finish();
        kk && (this.view.scrollDOM.insertBefore(this.dom, ek), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(kk) {
        let ek = kk.startState.facet(Ub),
          ik = kk.state.facet(Ub),
          fk = kk.docChanged || kk.heightChanged || kk.viewportChanged || !Dk.w.eq(kk.startState.facet(Kb), kk.state.facet(Kb), kk.view.viewport.from, kk.view.viewport.to);
        if (ek == ik)
          for (let Dk of this.gutters) Dk.update(kk) && (fk = !0);
        else {
          fk = !0;
          let Dk = [];
          for (let fk of ik) {
            let ik = ek.indexOf(fk);
            ik < 0 ? Dk.push(new Cb(this.view, fk)) : (this.gutters[ik].update(kk), Dk.push(this.gutters[ik]))
          }
          for (let kk of this.gutters) kk.dom.remove(), Dk.indexOf(kk) < 0 && kk.destroy();
          for (let kk of Dk) "after" == kk.config.side ? this.getDOMAfter().appendChild(kk.dom) : this.dom.appendChild(kk.dom);
          this.gutters = Dk
        }
        return fk
      }
      destroy() {
        for (let kk of this.gutters) kk.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: kk => uf.scrollMargins.of((ek => {
        let ik = ek.plugin(kk);
        if (!ik || 0 == ik.gutters.length || !ik.fixed) return null;
        let Dk = ik.dom.offsetWidth * ek.scaleX,
          fk = ik.domAfter ? ik.domAfter.offsetWidth * ek.scaleX : 0;
        return ek.textDirection == Me.LTR ? {
          left: Dk,
          right: fk
        } : {
          right: Dk,
          left: fk
        }
      }))
    });

    function yb(kk) {
      return Array.isArray(kk) ? kk : [kk]
    }

    function Yb(kk, ek, ik) {
      for (; kk.value && kk.from <= ik;) kk.from == ik && ek.push(kk.value), kk.next()
    }
    class Lb {
      constructor(kk, ek, ik) {
        this.gutter = kk, this.height = ik, this.i = 0, this.cursor = Dk.w.iter(kk.markers, ek.from)
      }
      addElement(kk, ek, ik) {
        let {
          gutter: Dk
        } = this, fk = (ek.top - this.height) / kk.scaleY, Sk = ek.height / kk.scaleY;
        if (this.i == Dk.elements.length) {
          let ek = new Ab(kk, Sk, fk, ik);
          Dk.elements.push(ek), Dk.dom.appendChild(ek.dom)
        } else Dk.elements[this.i].update(kk, Sk, fk, ik);
        this.height = ek.bottom, this.i++
      }
      line(kk, ek, ik) {
        let Dk = [];
        Yb(this.cursor, Dk, ek.from), ik.length && (Dk = Dk.concat(ik));
        let fk = this.gutter.config.lineMarker(kk, ek, Dk);
        fk && Dk.unshift(fk);
        let Sk = this.gutter;
        (0 != Dk.length || Sk.config.renderEmptyElements) && this.addElement(kk, ek, Dk)
      }
      widget(kk, ek) {
        let ik = this.gutter.config.widgetMarker(kk, ek.widget, ek),
          Dk = ik ? [ik] : null;
        for (let fk of kk.state.facet(xb)) {
          let ik = fk(kk, ek.widget, ek);
          ik && (Dk || (Dk = [])).push(ik)
        }
        Dk && this.addElement(kk, ek, Dk)
      }
      finish() {
        let kk = this.gutter;
        for (; kk.elements.length > this.i;) {
          let ek = kk.elements.pop();
          kk.dom.removeChild(ek.dom), ek.destroy()
        }
      }
    }
    class Cb {
      constructor(kk, ek) {
        this.view = kk, this.config = ek, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let ik in ek.domEventHandlers) this.dom.addEventListener(ik, (Dk => {
          let fk, Sk = Dk.target;
          if (Sk != this.dom && this.dom.contains(Sk)) {
            for (; Sk.parentNode != this.dom;) Sk = Sk.parentNode;
            let kk = Sk.getBoundingClientRect();
            fk = (kk.top + kk.bottom) / 2
          } else fk = Dk.clientY;
          let bk = kk.lineBlockAtHeight(fk - kk.documentTop);
          ek.domEventHandlers[ik](kk, bk, Dk) && Dk.preventDefault()
        }));
        this.markers = yb(ek.markers(kk)), ek.initialSpacer && (this.spacer = new Ab(kk, 0, 0, [ek.initialSpacer(kk)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(kk) {
        let ek = this.markers;
        if (this.markers = yb(this.config.markers(kk.view)), this.spacer && this.config.updateSpacer) {
          let ek = this.config.updateSpacer(this.spacer.markers[0], kk);
          ek != this.spacer.markers[0] && this.spacer.update(kk.view, 0, 0, [ek])
        }
        let ik = kk.view.viewport;
        return !Dk.w.eq(this.markers, ek, ik.from, ik.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(kk)
      }
      destroy() {
        for (let kk of this.elements) kk.destroy()
      }
    }
    class Ab {
      constructor(kk, ek, ik, Dk) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(kk, ek, ik, Dk)
      }
      update(kk, ek, ik, Dk) {
        this.height != ek && (this.height = ek, this.dom.style.height = ek + "px"), this.above != ik && (this.dom.style.marginTop = (this.above = ik) ? ik + "px" : ""),
          function(kk, ek) {
            if (kk.length != ek.length) return !1;
            for (let ik = 0; ik < kk.length; ik++)
              if (!kk[ik].compare(ek[ik])) return !1;
            return !0
          }(this.markers, Dk) || this.setMarkers(kk, Dk)
      }
      setMarkers(kk, ek) {
        let ik = "cm-gutterElement",
          Dk = this.dom.firstChild;
        for (let fk = 0, Sk = 0;;) {
          let bk = Sk,
            rk = fk < ek.length ? ek[fk++] : null,
            Pk = !1;
          if (rk) {
            let kk = rk.elementClass;
            kk && (ik += " " + kk);
            for (let ek = Sk; ek < this.markers.length; ek++)
              if (this.markers[ek].compare(rk)) {
                bk = ek, Pk = !0;
                break
              }
          } else bk = this.markers.length;
          for (; Sk < bk;) {
            let kk = this.markers[Sk++];
            if (kk.toDOM) {
              kk.destroy(Dk);
              let ek = Dk.nextSibling;
              Dk.remove(), Dk = ek
            }
          }
          if (!rk) break;
          rk.toDOM && (Pk ? Dk = Dk.nextSibling : this.dom.insertBefore(rk.toDOM(kk), Dk)), Pk && Sk++
        }
        this.dom.className = ik, this.markers = ek
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const jb = Dk.n.define(),
      sb = Dk.n.define(),
      db = Dk.n.define({
        combine: kk => (0, Dk.Q)(kk, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(kk, ek) {
            let ik = Object.assign({}, kk);
            for (let Dk in ek) {
              let kk = ik[Dk],
                fk = ek[Dk];
              ik[Dk] = kk ? (ek, ik, Dk) => kk(ek, ik, Dk) || fk(ek, ik, Dk) : fk
            }
            return ik
          }
        })
      });
    class Vb extends Mb {
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

    function Fb(kk, ek) {
      return kk.state.facet(db).formatNumber(ek, kk.state)
    }
    const ub = Ub.compute([db], (kk => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: kk => kk.state.facet(jb),
      lineMarker: (kk, ek, ik) => ik.some((kk => kk.toDOM)) ? null : new Vb(Fb(kk, kk.state.doc.lineAt(ek.from).number)),
      widgetMarker: (kk, ek, ik) => {
        for (let Dk of kk.state.facet(sb)) {
          let fk = Dk(kk, ek, ik);
          if (fk) return fk
        }
        return null
      },
      lineMarkerChange: kk => kk.startState.facet(db) != kk.state.facet(db),
      initialSpacer: kk => new Vb(Fb(kk, Ib(kk.state.doc.lines))),
      updateSpacer(kk, ek) {
        let ik = Fb(ek.view, Ib(ek.view.state.doc.lines));
        return ik == kk.number ? kk : new Vb(ik)
      },
      domEventHandlers: kk.facet(db).domEventHandlers,
      side: "before"
    })));

    function qb() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [db.of(kk), lb(), ub]
    }

    function Ib(kk) {
      let ek = 9;
      for (; ek < kk;) ek = 10 * ek + 9;
      return ek
    }
    const zb = new class extends Mb {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      Qb = Kb.compute(["selection"], (kk => {
        let ek = [],
          ik = -1;
        for (let Dk of kk.selection.lw) {
          let fk = kk.doc.lineAt(Dk.head).from;
          fk > ik && (ik = fk, ek.push(zb.range(fk)))
        }
        return Dk.w.of(ek)
      }));

    function vb() {
      return Qb
    }
  },
  40906: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk,
      f: () => nk,
      g: () => bk,
      h: () => Mk,
      l: () => mk,
      o: () => zk,
      q: () => vk,
      u: () => Qk,
      y: () => Uk
    });
    const Dk = 1024;
    let fk = 0;
    class Sk {
      constructor(kk, ek) {
        this.from = kk, this.to = ek
      }
    }
    class bk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = fk++, this.perNode = !!kk.perNode, this.deserialize = kk.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = kk.combine || null
      }
      add(kk) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof kk && (kk = mk.match(kk)), ek => {
          let ik = kk(ek);
          return void 0 === ik ? null : [this, ik]
        }
      }
    }
    bk.closedBy = new bk({
      deserialize: kk => kk.split(" ")
    }), bk.openedBy = new bk({
      deserialize: kk => kk.split(" ")
    }), bk.group = new bk({
      deserialize: kk => kk.split(" ")
    }), bk.isolate = new bk({
      deserialize: kk => {
        if (kk && "rtl" != kk && "ltr" != kk && "auto" != kk) throw new RangeError("Invalid value for isolate: " + kk);
        return kk || "auto"
      }
    }), bk.contextHash = new bk({
      perNode: !0
    }), bk.lookAhead = new bk({
      perNode: !0
    }), bk.mounted = new bk({
      perNode: !0
    });
    class rk {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = kk, this.overlay = ek, this.parser = ik, this.bracketed = Dk
      }
      static get(kk) {
        return kk && kk.props && kk.props[bk.mounted.id]
      }
    }
    const Pk = Object.create(null);
    class mk {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = kk, this.props = ek, this.id = ik, this.flags = Dk
      }
      static define(kk) {
        let ek = kk.props && kk.props.length ? Object.create(null) : Pk,
          ik = (kk.top ? 1 : 0) | (kk.skipped ? 2 : 0) | (kk.error ? 4 : 0) | (null == kk.name ? 8 : 0),
          Dk = new mk(kk.name || "", ek, kk.id, ik);
        if (kk.props)
          for (let fk of kk.props)
            if (Array.isArray(fk) || (fk = fk(Dk)), fk) {
              if (fk[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              ek[fk[0].id] = fk[1]
            } return Dk
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
          let ek = this.prop(bk.group);
          return !!ek && ek.indexOf(kk) > -1
        }
        return this.id == kk
      }
      static match(kk) {
        let ek = Object.create(null);
        for (let ik in kk)
          for (let Dk of ik.split(" ")) ek[Dk] = kk[ik];
        return kk => {
          for (let ik = kk.prop(bk.group), Dk = -1; Dk < (ik ? ik.length : 0); Dk++) {
            let fk = ek[Dk < 0 ? kk.name : ik[Dk]];
            if (fk) return fk
          }
        }
      }
    }
    mk.none = new mk("", Object.create(null), 0, 8);
    class Mk {
      constructor(kk) {
        this.types = kk;
        for (let ek = 0; ek < kk.length; ek++)
          if (kk[ek].id != ek) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let kk = [];
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        for (let fk of this.types) {
          let ek = null;
          for (let kk of ik) {
            let ik = kk(fk);
            if (ik) {
              ek || (ek = Object.assign({}, fk.props));
              let kk = ik[1],
                Dk = ik[0];
              Dk.combine && Dk.id in ek && (kk = Dk.combine(ek[Dk.id], kk)), ek[Dk.id] = kk
            }
          }
          kk.push(ek ? new mk(fk.name, ek, fk.id, fk.flags) : fk)
        }
        return new Mk(kk)
      }
    }
    const Kk = new WeakMap,
      xk = new WeakMap;
    var nk;
    ! function(kk) {
      kk[kk.ExcludeBuffers = 1] = "ExcludeBuffers", kk[kk.IncludeAnonymous = 2] = "IncludeAnonymous", kk[kk.IgnoreMounts = 4] = "IgnoreMounts", kk[kk.IgnoreOverlays = 8] = "IgnoreOverlays", kk[kk.EnterBracketed = 16] = "EnterBracketed"
    }(nk || (nk = {}));
    class Uk {
      constructor(kk, ek, ik, Dk, fk) {
        if (this.type = kk, this.children = ek, this.positions = ik, this.length = Dk, this.props = null, fk && fk.length) {
          this.props = Object.create(null);
          for (let [kk, ek] of fk) this.props["number" == typeof kk ? kk : kk.id] = ek
        }
      }
      toString() {
        let kk = rk.get(this);
        if (kk && !kk.overlay) return kk.tree.toString();
        let ek = "";
        for (let ik of this.children) {
          let kk = ik.toString();
          kk && (ek && (ek += ","), ek += kk)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (ek.length ? "(" + ek + ")" : "") : ek
      }
      cursor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Vk(this.topNode, kk)
      }
      cursorAt(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = Kk.get(this) || this.topNode,
          Dk = new Vk(ik);
        return Dk.moveTo(kk, ek), Kk.set(this, Dk._tree), Dk
      }
      get topNode() {
        return new Yk(this, 0, 0, null)
      }
      resolve(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = pk(Kk.get(this) || this.topNode, kk, ek, !1);
        return Kk.set(this, ik), ik
      }
      resolveInner(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = pk(xk.get(this) || this.topNode, kk, ek, !0);
        return xk.set(this, ik), ik
      }
      resolveStack(kk) {
        return function(kk, ek, ik) {
          let Dk = kk.resolveInner(ek, ik),
            fk = null;
          for (let Sk = Dk instanceof Yk ? Dk : Dk.context.parent; Sk; Sk = Sk.parent)
            if (Sk.index < 0) {
              let kk = Sk.parent;
              (fk || (fk = [Dk])).push(kk.resolve(ek, ik)), Sk = kk
            } else {
              let kk = rk.get(Sk.tree);
              if (kk && kk.overlay && kk.overlay[0].from <= ek && kk.overlay[kk.overlay.length - 1].to >= ek) {
                let bk = new Yk(kk.tree, kk.overlay[0].from + Sk.from, -1, Sk);
                (fk || (fk = [Dk])).push(pk(bk, ek, ik, !1))
              }
            } return fk ? sk(fk) : Dk
        }(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(kk) {
        let {
          enter: ek,
          leave: ik,
          from: Dk = 0,
          to: fk = this.length
        } = kk, Sk = kk.mode || 0, bk = (Sk & nk.IncludeAnonymous) > 0;
        for (let rk = this.cursor(Sk | nk.IncludeAnonymous);;) {
          let kk = !1;
          if (rk.from <= fk && rk.to >= Dk && (!bk && rk.type.isAnonymous || !1 !== ek(rk))) {
            if (rk.firstChild()) continue;
            kk = !0
          }
          for (; kk && ik && (bk || !rk.type.isAnonymous) && ik(rk), !rk.nextSibling();) {
            if (!rk.parent()) return;
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
          for (let ek in this.props) kk.push([+ek, this.props[ek]]);
        return kk
      }
      balance() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Ik(mk.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((kk, ek, ik) => new Uk(this.type, kk, ek, ik, this.propValues)), kk.makeTree || ((kk, ek, ik) => new Uk(mk.none, kk, ek, ik)))
      }
      static build(kk) {
        return function(kk) {
          var ek;
          let {
            buffer: ik,
            nodeSet: fk,
            maxBufferLength: Sk = Dk,
            reused: rk = [],
            minRepeatType: Pk = fk.types.length
          } = kk, mk = Array.isArray(ik) ? new Hk(ik, ik.length) : ik, Mk = fk.types, Kk = 0, xk = 0;

          function nk(kk, ek, ik, Dk, bk, Uk) {
            let {
              id: Hk,
              start: Ak,
              end: jk,
              size: sk
            } = mk, dk = xk, Vk = Kk;
            if (sk < 0) {
              if (mk.next(), -1 == sk) {
                let ek = rk[Hk];
                return ik.push(ek), void Dk.push(Ak - kk)
              }
              if (-3 == sk) return void(Kk = Hk);
              if (-4 == sk) return void(xk = Hk);
              throw new RangeError(`Unrecognized record size: ${sk}`)
            }
            let Fk, uk, qk = Mk[Hk],
              zk = Ak - kk;
            if (jk - Ak <= Sk && (uk = Lk(mk.pos - ek, bk))) {
              let ek = new Uint16Array(uk.size - uk.skip),
                ik = mk.pos - uk.size,
                Dk = ek.length;
              for (; mk.pos > ik;) Dk = Ck(uk.start, ek, Dk);
              Fk = new wk(ek, jk - uk.start, fk), zk = uk.start - kk
            } else {
              let kk = mk.pos - sk;
              mk.next();
              let ek = [],
                ik = [],
                Dk = Hk >= Pk ? Hk : -1,
                fk = 0,
                bk = jk;
              for (; mk.pos > kk;) Dk >= 0 && mk.id == Dk && mk.size >= 0 ? (mk.end <= bk - Sk && (yk(ek, ik, Ak, fk, mk.end, bk, Dk, dk, Vk), fk = ek.length, bk = mk.end), mk.next()) : Uk > 2500 ? lk(Ak, kk, ek, ik) : nk(Ak, kk, ek, ik, Dk, Uk + 1);
              if (Dk >= 0 && fk > 0 && fk < ek.length && yk(ek, ik, Ak, fk, Ak, bk, Dk, dk, Vk), ek.reverse(), ik.reverse(), Dk > -1 && fk > 0) {
                let kk = pk(qk, Vk);
                Fk = Ik(qk, ek, ik, 0, ek.length, 0, jk - Ak, kk, kk)
              } else Fk = Yk(qk, ek, ik, jk - Ak, dk - jk, Vk)
            }
            ik.push(Fk), Dk.push(zk)
          }

          function lk(kk, ek, ik, Dk) {
            let bk = [],
              rk = 0,
              Pk = -1;
            for (; mk.pos > ek;) {
              let {
                id: kk,
                start: ek,
                end: ik,
                size: Dk
              } = mk;
              if (Dk > 4) mk.next();
              else {
                if (Pk > -1 && ek < Pk) break;
                Pk < 0 && (Pk = ik - Sk), bk.push(kk, ek, ik), rk++, mk.next()
              }
            }
            if (rk) {
              let ek = new Uint16Array(4 * rk),
                Sk = bk[bk.length - 2];
              for (let kk = bk.length - 3, ik = 0; kk >= 0; kk -= 3) ek[ik++] = bk[kk], ek[ik++] = bk[kk + 1] - Sk, ek[ik++] = bk[kk + 2] - Sk, ek[ik++] = ik;
              ik.push(new wk(ek, bk[2] - Sk, fk)), Dk.push(Sk - kk)
            }
          }

          function pk(kk, ek) {
            return (ik, Dk, fk) => {
              let Sk, rk, Pk = 0,
                mk = ik.length - 1;
              if (mk >= 0 && (Sk = ik[mk]) instanceof Uk) {
                if (!mk && Sk.type == kk && Sk.length == fk) return Sk;
                (rk = Sk.prop(bk.lookAhead)) && (Pk = Dk[mk] + Sk.length + rk)
              }
              return Yk(kk, ik, Dk, fk, Pk, ek)
            }
          }

          function yk(kk, ek, ik, Dk, Sk, bk, rk, Pk, mk) {
            let Mk = [],
              Kk = [];
            for (; kk.length > Dk;) Mk.push(kk.pop()), Kk.push(ek.pop() + ik - Sk);
            kk.push(Yk(fk.types[rk], Mk, Kk, bk - Sk, Pk - bk, mk)), ek.push(Sk - ik)
          }

          function Yk(kk, ek, ik, Dk, fk, Sk, rk) {
            if (Sk) {
              let kk = [bk.contextHash, Sk];
              rk = rk ? [kk].concat(rk) : [kk]
            }
            if (fk > 25) {
              let kk = [bk.lookAhead, fk];
              rk = rk ? [kk].concat(rk) : [kk]
            }
            return new Uk(kk, ek, ik, Dk, rk)
          }

          function Lk(kk, ek) {
            let ik = mk.fork(),
              Dk = 0,
              fk = 0,
              bk = 0,
              rk = ik.end - Sk,
              Mk = {
                size: 0,
                start: 0,
                skip: 0
              };
            kk: for (let Sk = ik.pos - kk; ik.pos > Sk;) {
              let kk = ik.size;
              if (ik.id == ek && kk >= 0) {
                Mk.size = Dk, Mk.start = fk, Mk.skip = bk, bk += 4, Dk += 4, ik.next();
                continue
              }
              let mk = ik.pos - kk;
              if (kk < 0 || mk < Sk || ik.start < rk) break;
              let Kk = ik.id >= Pk ? 4 : 0,
                xk = ik.start;
              for (ik.next(); ik.pos > mk;) {
                if (ik.size < 0) {
                  if (-3 != ik.size && -4 != ik.size) break kk;
                  Kk += 4
                } else ik.id >= Pk && (Kk += 4);
                ik.next()
              }
              fk = xk, Dk += kk, bk += Kk
            }
            return (ek < 0 || Dk == kk) && (Mk.size = Dk, Mk.start = fk, Mk.skip = bk), Mk.size > 4 ? Mk : void 0
          }

          function Ck(kk, ek, ik) {
            let {
              id: Dk,
              start: fk,
              end: Sk,
              size: bk
            } = mk;
            if (mk.next(), bk >= 0 && Dk < Pk) {
              let rk = ik;
              if (bk > 4) {
                let Dk = mk.pos - (bk - 4);
                for (; mk.pos > Dk;) ik = Ck(kk, ek, ik)
              }
              ek[--ik] = rk, ek[--ik] = Sk - kk, ek[--ik] = fk - kk, ek[--ik] = Dk
            } else - 3 == bk ? Kk = Dk : -4 == bk && (xk = Dk);
            return ik
          }
          let Ak = [],
            jk = [];
          for (; mk.pos > 0;) nk(kk.start || 0, kk.bufferStart || 0, Ak, jk, -1, 0);
          let sk = null !== (ek = kk.length) && void 0 !== ek ? ek : Ak.length ? jk[0] + Ak[0].length : 0;
          return new Uk(Mk[kk.topID], Ak.reverse(), jk.reverse(), sk)
        }(kk)
      }
    }
    Uk.empty = new Uk(mk.none, [], [], 0);
    class Hk {
      constructor(kk, ek) {
        this.buffer = kk, this.index = ek
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
        return new Hk(this.buffer, this.index)
      }
    }
    class wk {
      constructor(kk, ek, ik) {
        this.buffer = kk, this.length = ek, this.set = ik
      }
      get type() {
        return mk.none
      }
      toString() {
        let kk = [];
        for (let ek = 0; ek < this.buffer.length;) kk.push(this.childString(ek)), ek = this.buffer[ek + 3];
        return kk.join(",")
      }
      childString(kk) {
        let ek = this.buffer[kk],
          ik = this.buffer[kk + 3],
          Dk = this.set.types[ek],
          fk = Dk.name;
        if (/\W/.test(fk) && !Dk.isError && (fk = JSON.stringify(fk)), ik == (kk += 4)) return fk;
        let Sk = [];
        for (; kk < ik;) Sk.push(this.childString(kk)), kk = this.buffer[kk + 3];
        return fk + "(" + Sk.join(",") + ")"
      }
      findChild(kk, ek, ik, Dk, fk) {
        let {
          buffer: Sk
        } = this, bk = -1;
        for (let rk = kk; rk != ek && !(lk(fk, Dk, Sk[rk + 1], Sk[rk + 2]) && (bk = rk, ik > 0)); rk = Sk[rk + 3]);
        return bk
      }
      slice(kk, ek, ik) {
        let Dk = this.buffer,
          fk = new Uint16Array(ek - kk),
          Sk = 0;
        for (let bk = kk, rk = 0; bk < ek;) {
          fk[rk++] = Dk[bk++], fk[rk++] = Dk[bk++] - ik;
          let ek = fk[rk++] = Dk[bk++] - ik;
          fk[rk++] = Dk[bk++] - kk, Sk = Math.max(Sk, ek)
        }
        return new wk(fk, Sk, this.set)
      }
    }

    function lk(kk, ek, ik, Dk) {
      switch (kk) {
        case -2:
          return ik < ek;
        case -1:
          return Dk >= ek && ik < ek;
        case 0:
          return ik < ek && Dk > ek;
        case 1:
          return ik <= ek && Dk > ek;
        case 2:
          return Dk > ek;
        case 4:
          return !0
      }
    }

    function pk(kk, ek, ik, Dk) {
      for (var fk; kk.from == kk.to || (ik < 1 ? kk.from >= ek : kk.from > ek) || (ik > -1 ? kk.to <= ek : kk.to < ek);) {
        let ek = !Dk && kk instanceof Yk && kk.index < 0 ? null : kk.parent;
        if (!ek) return kk;
        kk = ek
      }
      let Sk = Dk ? 0 : nk.IgnoreOverlays;
      if (Dk)
        for (let bk = kk, rk = bk.parent; rk; bk = rk, rk = bk.parent) bk instanceof Yk && bk.index < 0 && (null === (fk = rk.enter(ek, ik, Sk)) || void 0 === fk ? void 0 : fk.from) != bk.from && (kk = rk);
      for (;;) {
        let Dk = kk.enter(ek, ik, Sk);
        if (!Dk) return kk;
        kk = Dk
      }
    }
    class yk {
      cursor() {
        return new Vk(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(kk) {
        let ek = Lk(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return ek.length ? ek[0] : null
      }
      getChildren(kk) {
        return Lk(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(kk) {
        return pk(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(kk) {
        return pk(this, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(kk) {
        return Ck(this.parent, kk)
      }
      enterUnfinishedNodesBefore(kk) {
        let ek = this.childBefore(kk),
          ik = this;
        for (; ek;) {
          let kk = ek.lastChild;
          if (!kk || kk.to != ek.to) break;
          kk.type.isError && kk.from == kk.to ? (ik = ek, ek = kk.prevSibling) : ek = kk
        }
        return ik
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class Yk extends yk {
      constructor(kk, ek, ik, Dk) {
        super(), this._tree = kk, this.from = ek, this.index = ik, this._parent = Dk
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
      nextChild(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let Sk = this;;) {
          for (let {
              children: bk,
              positions: Pk
            } = Sk._tree, mk = ek > 0 ? bk.length : -1; kk != mk; kk += ek) {
            let mk, Mk = bk[kk],
              Kk = Pk[kk] + Sk.from;
            if (fk & nk.EnterBracketed && Mk instanceof Uk && (mk = rk.get(Mk)) && !mk.overlay && mk.bracketed && ik >= Kk && ik <= Kk + Mk.length || lk(Dk, ik, Kk, Kk + Mk.length))
              if (Mk instanceof wk) {
                if (fk & nk.ExcludeBuffers) continue;
                let bk = Mk.findChild(0, Mk.buffer.length, ek, ik - Kk, Dk);
                if (bk > -1) return new jk(new Ak(Sk, Mk, kk, Kk), null, bk)
              } else if (fk & nk.IncludeAnonymous || !Mk.type.isAnonymous || Fk(Mk)) {
              let bk;
              if (!(fk & nk.IgnoreMounts) && (bk = rk.get(Mk)) && !bk.overlay) return new Yk(bk.tree, Kk, kk, Sk);
              let Pk = new Yk(Mk, Kk, kk, Sk);
              return fk & nk.IncludeAnonymous || !Pk.type.isAnonymous ? Pk : Pk.nextChild(ek < 0 ? Mk.children.length - 1 : 0, ek, ik, Dk, fk)
            }
          }
          if (fk & nk.IncludeAnonymous || !Sk.type.isAnonymous) return null;
          if (kk = Sk.index >= 0 ? Sk.index + ek : ek < 0 ? -1 : Sk._parent._tree.children.length, Sk = Sk._parent, !Sk) return null
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
      enter(kk, ek) {
        let ik, Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Dk & nk.IgnoreOverlays) && (ik = rk.get(this._tree)) && ik.overlay) {
          let fk = kk - this.from,
            Sk = Dk & nk.EnterBracketed && ik.bracketed;
          for (let {
              from: kk,
              to: Dk
            }
            of ik.overlay)
            if ((ek > 0 || Sk ? kk <= fk : kk < fk) && (ek < 0 || Sk ? Dk >= fk : Dk > fk)) return new Yk(ik.tree, ik.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, kk, ek, Dk)
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

    function Lk(kk, ek, ik, Dk) {
      let fk = kk.cursor(),
        Sk = [];
      if (!fk.firstChild()) return Sk;
      if (null != ik)
        for (let bk = !1; !bk;)
          if (bk = fk.type.is(ik), !fk.nextSibling()) return Sk;
      for (;;) {
        if (null != Dk && fk.type.is(Dk)) return Sk;
        if (fk.type.is(ek) && Sk.push(fk.node), !fk.nextSibling()) return null == Dk ? Sk : []
      }
    }

    function Ck(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ek.length - 1;
      for (let Dk = kk; ik >= 0; Dk = Dk.parent) {
        if (!Dk) return !1;
        if (!Dk.type.isAnonymous) {
          if (ek[ik] && ek[ik] != Dk.name) return !1;
          ik--
        }
      }
      return !0
    }
    class Ak {
      constructor(kk, ek, ik, Dk) {
        this.parent = kk, this.buffer = ek, this.index = ik, this.start = Dk
      }
    }
    class jk extends yk {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(kk, ek, ik) {
        super(), this.context = kk, this._parent = ek, this.index = ik, this.type = kk.buffer.set.types[kk.buffer.buffer[ik]]
      }
      child(kk, ek, ik) {
        let {
          buffer: Dk
        } = this.context, fk = Dk.findChild(this.index + 4, Dk.buffer[this.index + 3], kk, ek - this.context.start, ik);
        return fk < 0 ? null : new jk(this.context, this, fk)
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
      enter(kk, ek) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & nk.ExcludeBuffers) return null;
        let {
          buffer: ik
        } = this.context, Dk = ik.findChild(this.index + 4, ik.buffer[this.index + 3], ek > 0 ? 1 : -1, kk - this.context.start, ek);
        return Dk < 0 ? null : new jk(this.context, this, Dk)
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
        } = this.context, ek = kk.buffer[this.index + 3];
        return ek < (this._parent ? kk.buffer[this._parent.index + 3] : kk.buffer.length) ? new jk(this.context, this._parent, ek) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: kk
        } = this.context, ek = this._parent ? this._parent.index + 4 : 0;
        return this.index == ek ? this.externalSibling(-1) : new jk(this.context, this._parent, kk.findChild(ek, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let kk = [],
          ek = [],
          {
            buffer: ik
          } = this.context,
          Dk = this.index + 4,
          fk = ik.buffer[this.index + 3];
        if (fk > Dk) {
          let Sk = ik.buffer[this.index + 1];
          kk.push(ik.slice(Dk, fk, Sk)), ek.push(0)
        }
        return new Uk(this.type, kk, ek, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function sk(kk) {
      if (!kk.length) return null;
      let ek = 0,
        ik = kk[0];
      for (let Sk = 1; Sk < kk.length; Sk++) {
        let Dk = kk[Sk];
        (Dk.from > ik.from || Dk.to < ik.to) && (ik = Dk, ek = Sk)
      }
      let Dk = ik instanceof Yk && ik.index < 0 ? null : ik.parent,
        fk = kk.slice();
      return Dk ? fk[ek] = Dk : fk.splice(ek, 1), new dk(fk, ik)
    }
    class dk {
      constructor(kk, ek) {
        this.heads = kk, this.node = ek
      }
      get next() {
        return sk(this.heads)
      }
    }
    class Vk {
      get name() {
        return this.type.name
      }
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = ek & ~nk.EnterBracketed, kk instanceof Yk) this.yieldNode(kk);
        else {
          this._tree = kk.context.parent, this.buffer = kk.context;
          for (let ek = kk._parent; ek; ek = ek._parent) this.stack.unshift(ek.index);
          this.bufferNode = kk, this.yieldBuf(kk.index)
        }
      }
      yieldNode(kk) {
        return !!kk && (this._tree = kk, this.type = kk.type, this.from = kk.from, this.to = kk.to, !0)
      }
      yieldBuf(kk, ek) {
        this.index = kk;
        let {
          start: ik,
          buffer: Dk
        } = this.buffer;
        return this.type = ek || Dk.set.types[Dk.buffer[kk]], this.from = ik + Dk.buffer[kk + 1], this.to = ik + Dk.buffer[kk + 2], !0
      }
      yield(kk) {
        return !!kk && (kk instanceof Yk ? (this.buffer = null, this.yieldNode(kk)) : (this.buffer = kk.context, this.yieldBuf(kk.index, kk.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(kk, ek, ik) {
        if (!this.buffer) return this.yield(this._tree.nextChild(kk < 0 ? this._tree._tree.children.length - 1 : 0, kk, ek, ik, this.mode));
        let {
          buffer: Dk
        } = this.buffer, fk = Dk.findChild(this.index + 4, Dk.buffer[this.index + 3], kk, ek - this.buffer.start, ik);
        return !(fk < 0) && (this.stack.push(this.index), this.yieldBuf(fk))
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
      enter(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(ik & nk.ExcludeBuffers) && this.enterChild(1, kk, ek) : this.yield(this._tree.enter(kk, ek, ik))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & nk.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let kk = this.mode & nk.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(kk)
      }
      sibling(kk) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + kk, kk, 0, 4, this.mode));
        let {
          buffer: ek
        } = this.buffer, ik = this.stack.length - 1;
        if (kk < 0) {
          let kk = ik < 0 ? 0 : this.stack[ik] + 4;
          if (this.index != kk) return this.yieldBuf(ek.findChild(kk, this.index, -1, 0, 4))
        } else {
          let kk = ek.buffer[this.index + 3];
          if (kk < (ik < 0 ? ek.buffer.length : ek.buffer[this.stack[ik] + 3])) return this.yieldBuf(kk)
        }
        return ik < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + kk, kk, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(kk) {
        let ek, ik, {
          buffer: Dk
        } = this;
        if (Dk) {
          if (kk > 0) {
            if (this.index < Dk.buffer.buffer.length) return !1
          } else
            for (let kk = 0; kk < this.index; kk++)
              if (Dk.buffer.buffer[kk + 3] < this.index) return !1;
          ({
            index: ek,
            parent: ik
          } = Dk)
        } else({
          index: ek,
          _parent: ik
        } = this._tree);
        for (; ik;
          ({
            index: ek,
            _parent: ik
          } = ik))
          if (ek > -1)
            for (let Dk = ek + kk, fk = kk < 0 ? -1 : ik._tree.children.length; Dk != fk; Dk += kk) {
              let kk = ik._tree.children[Dk];
              if (this.mode & nk.IncludeAnonymous || kk instanceof wk || !kk.type.isAnonymous || Fk(kk)) return !1
            }
        return !0
      }
      move(kk, ek) {
        if (ek && this.enterChild(kk, 0, 4)) return !0;
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
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (ek < 1 ? this.from >= kk : this.from > kk) || (ek > -1 ? this.to <= kk : this.to < kk)) && this.parent(););
        for (; this.enterChild(1, kk, ek););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let kk = this.bufferNode,
          ek = null,
          ik = 0;
        if (kk && kk.context == this.buffer) kk: for (let Dk = this.index, fk = this.stack.length; fk >= 0;) {
          for (let Sk = kk; Sk; Sk = Sk._parent)
            if (Sk.index == Dk) {
              if (Dk == this.index) return Sk;
              ek = Sk, ik = fk + 1;
              break kk
            } Dk = this.stack[--fk]
        }
        for (let Dk = ik; Dk < this.stack.length; Dk++) ek = new jk(this.buffer, ek, this.stack[Dk]);
        return this.bufferNode = new jk(this.buffer, ek, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(kk, ek) {
        for (let ik = 0;;) {
          let Dk = !1;
          if (this.type.isAnonymous || !1 !== kk(this)) {
            if (this.firstChild()) {
              ik++;
              continue
            }
            this.type.isAnonymous || (Dk = !0)
          }
          for (;;) {
            if (Dk && ek && ek(this), Dk = this.type.isAnonymous, !ik) return;
            if (this.nextSibling()) break;
            this.parent(), ik--, Dk = !0
          }
        }
      }
      matchContext(kk) {
        if (!this.buffer) return Ck(this.node.parent, kk);
        let {
          buffer: ek
        } = this.buffer, {
          types: ik
        } = ek.set;
        for (let Dk = kk.length - 1, fk = this.stack.length - 1; Dk >= 0; fk--) {
          if (fk < 0) return Ck(this._tree, kk, Dk);
          let Sk = ik[ek.buffer[this.stack[fk]]];
          if (!Sk.isAnonymous) {
            if (kk[Dk] && kk[Dk] != Sk.name) return !1;
            Dk--
          }
        }
        return !0
      }
    }

    function Fk(kk) {
      return kk.children.some((kk => kk instanceof wk || !kk.type.isAnonymous || Fk(kk)))
    }
    const uk = new WeakMap;

    function qk(kk, ek) {
      if (!kk.isAnonymous || ek instanceof wk || ek.type != kk) return 1;
      let ik = uk.get(ek);
      if (null == ik) {
        ik = 1;
        for (let Dk of ek.children) {
          if (Dk.type != kk || !(Dk instanceof Uk)) {
            ik = 1;
            break
          }
          ik += qk(kk, Dk)
        }
        uk.set(ek, ik)
      }
      return ik
    }

    function Ik(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
      let mk = 0;
      for (let nk = Dk; nk < fk; nk++) mk += qk(kk, ek[nk]);
      let Mk = Math.ceil(1.5 * mk / 8),
        Kk = [],
        xk = [];
      return function ek(ik, Dk, fk, bk, rk) {
        for (let mk = fk; mk < bk;) {
          let fk = mk,
            nk = Dk[mk],
            Uk = qk(kk, ik[mk]);
          for (mk++; mk < bk; mk++) {
            let ek = qk(kk, ik[mk]);
            if (Uk + ek >= Mk) break;
            Uk += ek
          }
          if (mk == fk + 1) {
            if (Uk > Mk) {
              let kk = ik[fk];
              ek(kk.children, kk.positions, 0, kk.children.length, Dk[fk] + rk);
              continue
            }
            Kk.push(ik[fk])
          } else {
            let ek = Dk[mk - 1] + ik[mk - 1].length - nk;
            Kk.push(Ik(kk, ik, Dk, fk, mk, nk, ek, null, Pk))
          }
          xk.push(nk + rk - Sk)
        }
      }(ek, ik, Dk, fk, 0), (rk || Pk)(Kk, xk, bk)
    }
    class zk {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(kk, ek, ik) {
        let Dk = this.map.get(kk);
        Dk || this.map.set(kk, Dk = new Map), Dk.set(ek, ik)
      }
      getBuffer(kk, ek) {
        let ik = this.map.get(kk);
        return ik && ik.get(ek)
      }
      set(kk, ek) {
        kk instanceof jk ? this.setBuffer(kk.context.buffer, kk.index, ek) : kk instanceof Yk && this.map.set(kk.tree, ek)
      }
      get(kk) {
        return kk instanceof jk ? this.getBuffer(kk.context.buffer, kk.index) : kk instanceof Yk ? this.map.get(kk.tree) : void 0
      }
      cursorSet(kk, ek) {
        kk.buffer ? this.setBuffer(kk.buffer.buffer, kk.index, ek) : this.map.set(kk.tree, ek)
      }
      cursorGet(kk) {
        return kk.buffer ? this.getBuffer(kk.buffer.buffer, kk.index) : this.map.get(kk.tree)
      }
    }
    class Qk {
      constructor(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = kk, this.to = ek, this.tree = ik, this.offset = Dk, this.open = (fk ? 1 : 0) | (Sk ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = [new Qk(0, kk.length, kk, 0, !1, ik)];
        for (let fk of ek) fk.to > kk.length && Dk.push(fk);
        return Dk
      }
      static applyChanges(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!ek.length) return kk;
        let Dk = [],
          fk = 1,
          Sk = kk.length ? kk[0] : null;
        for (let bk = 0, rk = 0, Pk = 0;; bk++) {
          let mk = bk < ek.length ? ek[bk] : null,
            Mk = mk ? mk.fromA : 1e9;
          if (Mk - rk >= ik)
            for (; Sk && Sk.from < Mk;) {
              let ek = Sk;
              if (rk >= ek.from || Mk <= ek.to || Pk) {
                let kk = Math.max(ek.from, rk) - Pk,
                  ik = Math.min(ek.to, Mk) - Pk;
                ek = kk >= ik ? null : new Qk(kk, ik, ek.tree, ek.offset + Pk, bk > 0, !!mk)
              }
              if (ek && Dk.push(ek), Sk.to > Mk) break;
              Sk = fk < kk.length ? kk[fk++] : null
            }
          if (!mk) break;
          rk = mk.toA, Pk = mk.toA - mk.toB
        }
        return Dk
      }
    }
    class vk {
      startParse(kk, ek, ik) {
        return "string" == typeof kk && (kk = new Ek(kk)), ik = ik ? ik.length ? ik.map((kk => new Sk(kk.from, kk.to))) : [new Sk(0, 0)] : [new Sk(0, kk.length)], this.createParse(kk, ek || [], ik)
      }
      parse(kk, ek, ik) {
        let Dk = this.startParse(kk, ek, ik);
        for (;;) {
          let kk = Dk.advance();
          if (kk) return kk
        }
      }
    }
    class Ek {
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
      read(kk, ek) {
        return this.string.slice(kk, ek)
      }
    }
    new bk({
      perNode: !0
    })
  },
  40915: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => xk,
      i: () => Pk,
      l: () => Kk,
      o: () => uk
    });
    var Dk = ik(40906);
    let fk = 0;
    class Sk {
      constructor(kk, ek, ik, Dk) {
        this.name = kk, this.set = ek, this.base = ik, this.modified = Dk, this.id = fk++
      }
      toString() {
        let {
          name: kk
        } = this;
        for (let ek of this.modified) ek.name && (kk = `${ek.name}(${kk})`);
        return kk
      }
      static define(kk, ek) {
        let ik = "string" == typeof kk ? kk : "?";
        if (kk instanceof Sk && (ek = kk), null === ek || void 0 === ek ? void 0 : ek.base) throw new Error("Can not derive from a modified tag");
        let Dk = new Sk(ik, [], null, []);
        if (Dk.set.push(Dk), ek)
          for (let fk of ek.set) Dk.set.push(fk);
        return Dk
      }
      static defineModifier(kk) {
        let ek = new rk(kk);
        return kk => kk.modified.indexOf(ek) > -1 ? kk : rk.get(kk.base || kk, kk.modified.concat(ek).sort(((kk, ek) => kk.id - ek.id)))
      }
    }
    let bk = 0;
    class rk {
      constructor(kk) {
        this.name = kk, this.instances = [], this.id = bk++
      }
      static get(kk, ek) {
        if (!ek.length) return kk;
        let ik = ek[0].instances.find((ik => {
          return ik.base == kk && (Dk = ek, fk = ik.modified, Dk.length == fk.length && Dk.every(((kk, ek) => kk == fk[ek])));
          var Dk, fk
        }));
        if (ik) return ik;
        let Dk = [],
          fk = new Sk(kk.name, Dk, kk, ek);
        for (let Sk of ek) Sk.instances.push(fk);
        let bk = function(kk) {
          let ek = [
            []
          ];
          for (let ik = 0; ik < kk.length; ik++)
            for (let Dk = 0, fk = ek.length; Dk < fk; Dk++) ek.push(ek[Dk].concat(kk[ik]));
          return ek.sort(((kk, ek) => ek.length - kk.length))
        }(ek);
        for (let Sk of kk.set)
          if (!Sk.modified.length)
            for (let kk of bk) Dk.push(rk.get(Sk, kk));
        return fk
      }
    }

    function Pk(kk) {
      let ek = Object.create(null);
      for (let ik in kk) {
        let Dk = kk[ik];
        Array.isArray(Dk) || (Dk = [Dk]);
        for (let kk of ik.split(" "))
          if (kk) {
            let ik = [],
              fk = 2,
              Sk = kk;
            for (let ek = 0;;) {
              if ("..." == Sk && ek > 0 && ek + 3 == kk.length) {
                fk = 1;
                break
              }
              let Dk = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(Sk);
              if (!Dk) throw new RangeError("Invalid path: " + kk);
              if (ik.push("*" == Dk[0] ? "" : '"' == Dk[0][0] ? JSON.parse(Dk[0]) : Dk[0]), ek += Dk[0].length, ek == kk.length) break;
              let bk = kk[ek++];
              if (ek == kk.length && "!" == bk) {
                fk = 0;
                break
              }
              if ("/" != bk) throw new RangeError("Invalid path: " + kk);
              Sk = kk.slice(ek)
            }
            let bk = ik.length - 1,
              rk = ik[bk];
            if (!rk) throw new RangeError("Invalid path: " + kk);
            let Pk = new Mk(Dk, fk, bk > 0 ? ik.slice(0, bk) : null);
            ek[rk] = Pk.sort(ek[rk])
          }
      }
      return mk.add(ek)
    }
    const mk = new Dk.g({
      combine(kk, ek) {
        let ik, Dk, fk;
        for (; kk || ek;) {
          if (!kk || ek && kk.depth >= ek.depth ? (fk = ek, ek = ek.next) : (fk = kk, kk = kk.next), ik && ik.mode == fk.mode && !fk.context && !ik.context) continue;
          let Sk = new Mk(fk.tags, fk.mode, fk.context);
          ik ? ik.next = Sk : Dk = Sk, ik = Sk
        }
        return Dk
      }
    });
    class Mk {
      constructor(kk, ek, ik, Dk) {
        this.tags = kk, this.mode = ek, this.context = ik, this.next = Dk
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

    function Kk(kk, ek) {
      let ik = Object.create(null);
      for (let Sk of kk)
        if (Array.isArray(Sk.tag))
          for (let kk of Sk.tag) ik[kk.id] = Sk.class;
        else ik[Sk.tag.id] = Sk.class;
      let {
        scope: Dk,
        all: fk = null
      } = ek || {};
      return {
        style: kk => {
          let ek = fk;
          for (let Dk of kk)
            for (let kk of Dk.set) {
              let Dk = ik[kk.id];
              if (Dk) {
                ek = ek ? ek + " " + Dk : Dk;
                break
              }
            }
          return ek
        },
        scope: Dk
      }
    }

    function xk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kk.length,
        Sk = new nk(Dk, Array.isArray(ek) ? ek : [ek], ik);
      Sk.highlightRange(kk.cursor(), Dk, fk, "", Sk.highlighters), Sk.flush(fk)
    }
    Mk.empty = new Mk([], 2, null);
    class nk {
      constructor(kk, ek, ik) {
        this.at = kk, this.highlighters = ek, this.span = ik, this.class = ""
      }
      startSpan(kk, ek) {
        ek != this.class && (this.flush(kk), kk > this.at && (this.at = kk), this.class = ek)
      }
      flush(kk) {
        kk > this.at && this.class && this.span(this.at, kk, this.class)
      }
      highlightRange(kk, ek, ik, fk, Sk) {
        let {
          type: bk,
          from: rk,
          to: Pk
        } = kk;
        if (rk >= ik || Pk <= ek) return;
        bk.isTop && (Sk = this.highlighters.filter((kk => !kk.scope || kk.scope(bk))));
        let Kk = fk,
          xk = function(kk) {
            let ek = kk.type.prop(mk);
            for (; ek && ek.context && !kk.matchContext(ek.context);) ek = ek.next;
            return ek || null
          }(kk) || Mk.empty,
          nk = function(kk, ek) {
            let ik = null;
            for (let Dk of kk) {
              let kk = Dk.style(ek);
              kk && (ik = ik ? ik + " " + kk : kk)
            }
            return ik
          }(Sk, xk.tags);
        if (nk && (Kk && (Kk += " "), Kk += nk, 1 == xk.mode && (fk += (fk ? " " : "") + nk)), this.startSpan(Math.max(ek, rk), Kk), xk.opaque) return;
        let Uk = kk.tree && kk.tree.prop(Dk.g.mounted);
        if (Uk && Uk.overlay) {
          let Dk = kk.node.enter(Uk.overlay[0].from + rk, 1),
            bk = this.highlighters.filter((kk => !kk.scope || kk.scope(Uk.tree.type))),
            mk = kk.firstChild();
          for (let Mk = 0, xk = rk;; Mk++) {
            let nk = Mk < Uk.overlay.length ? Uk.overlay[Mk] : null,
              Hk = nk ? nk.from + rk : Pk,
              wk = Math.max(ek, xk),
              lk = Math.min(ik, Hk);
            if (wk < lk && mk)
              for (; kk.from < lk && (this.highlightRange(kk, wk, lk, fk, Sk), this.startSpan(Math.min(lk, kk.to), Kk), !(kk.to >= Hk) && kk.nextSibling()););
            if (!nk || Hk > ik) break;
            xk = nk.to + rk, xk > ek && (this.highlightRange(Dk.cursor(), Math.max(ek, nk.from + rk), Math.min(ik, xk), "", bk), this.startSpan(Math.min(ik, xk), Kk))
          }
          mk && kk.parent()
        } else if (kk.firstChild()) {
          Uk && (fk = "");
          do {
            if (!(kk.to <= ek)) {
              if (kk.from >= ik) break;
              this.highlightRange(kk, ek, ik, fk, Sk), this.startSpan(Math.min(ik, kk.to), Kk)
            }
          } while (kk.nextSibling());
          kk.parent()
        }
      }
    }
    const Uk = Sk.define,
      Hk = Uk(),
      wk = Uk(),
      lk = Uk(wk),
      pk = Uk(wk),
      yk = Uk(),
      Yk = Uk(yk),
      Lk = Uk(yk),
      Ck = Uk(),
      Ak = Uk(Ck),
      jk = Uk(),
      sk = Uk(),
      dk = Uk(),
      Vk = Uk(dk),
      Fk = Uk(),
      uk = {
        comment: Hk,
        lineComment: Uk(Hk),
        blockComment: Uk(Hk),
        docComment: Uk(Hk),
        name: wk,
        variableName: Uk(wk),
        typeName: lk,
        tagName: Uk(lk),
        propertyName: pk,
        attributeName: Uk(pk),
        className: Uk(wk),
        labelName: Uk(wk),
        namespace: Uk(wk),
        macroName: Uk(wk),
        literal: yk,
        string: Yk,
        docString: Uk(Yk),
        character: Uk(Yk),
        attributeValue: Uk(Yk),
        number: Lk,
        integer: Uk(Lk),
        float: Uk(Lk),
        bool: Uk(yk),
        regexp: Uk(yk),
        escape: Uk(yk),
        color: Uk(yk),
        url: Uk(yk),
        keyword: jk,
        self: Uk(jk),
        null: Uk(jk),
        atom: Uk(jk),
        unit: Uk(jk),
        modifier: Uk(jk),
        operatorKeyword: Uk(jk),
        controlKeyword: Uk(jk),
        definitionKeyword: Uk(jk),
        moduleKeyword: Uk(jk),
        operator: sk,
        derefOperator: Uk(sk),
        arithmeticOperator: Uk(sk),
        logicOperator: Uk(sk),
        bitwiseOperator: Uk(sk),
        compareOperator: Uk(sk),
        updateOperator: Uk(sk),
        definitionOperator: Uk(sk),
        typeOperator: Uk(sk),
        controlOperator: Uk(sk),
        punctuation: dk,
        separator: Uk(dk),
        bracket: Vk,
        angleBracket: Uk(Vk),
        squareBracket: Uk(Vk),
        paren: Uk(Vk),
        brace: Uk(Vk),
        content: Ck,
        heading: Ak,
        heading1: Uk(Ak),
        heading2: Uk(Ak),
        heading3: Uk(Ak),
        heading4: Uk(Ak),
        heading5: Uk(Ak),
        heading6: Uk(Ak),
        contentSeparator: Uk(Ck),
        list: Uk(Ck),
        quote: Uk(Ck),
        emphasis: Uk(Ck),
        strong: Uk(Ck),
        link: Uk(Ck),
        monospace: Uk(Ck),
        strikethrough: Uk(Ck),
        inserted: Uk(),
        deleted: Uk(),
        changed: Uk(),
        invalid: Uk(),
        meta: Fk,
        documentMeta: Uk(Fk),
        annotation: Uk(Fk),
        processingInstruction: Uk(Fk),
        definition: Sk.defineModifier("definition"),
        constant: Sk.defineModifier("constant"),
        function: Sk.defineModifier("function"),
        standard: Sk.defineModifier("standard"),
        local: Sk.defineModifier("local"),
        special: Sk.defineModifier("special")
      };
    for (let qk in uk) {
      let kk = uk[qk];
      kk instanceof Sk && (kk.name = qk)
    }
    Kk([{
      tag: uk.link,
      class: "tok-link"
    }, {
      tag: uk.heading,
      class: "tok-heading"
    }, {
      tag: uk.emphasis,
      class: "tok-emphasis"
    }, {
      tag: uk.strong,
      class: "tok-strong"
    }, {
      tag: uk.keyword,
      class: "tok-keyword"
    }, {
      tag: uk.atom,
      class: "tok-atom"
    }, {
      tag: uk.bool,
      class: "tok-bool"
    }, {
      tag: uk.url,
      class: "tok-url"
    }, {
      tag: uk.labelName,
      class: "tok-labelName"
    }, {
      tag: uk.inserted,
      class: "tok-inserted"
    }, {
      tag: uk.deleted,
      class: "tok-deleted"
    }, {
      tag: uk.literal,
      class: "tok-literal"
    }, {
      tag: uk.string,
      class: "tok-string"
    }, {
      tag: uk.number,
      class: "tok-number"
    }, {
      tag: [uk.regexp, uk.escape, uk.special(uk.string)],
      class: "tok-string2"
    }, {
      tag: uk.variableName,
      class: "tok-variableName"
    }, {
      tag: uk.local(uk.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: uk.definition(uk.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: uk.special(uk.variableName),
      class: "tok-variableName2"
    }, {
      tag: uk.definition(uk.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: uk.typeName,
      class: "tok-typeName"
    }, {
      tag: uk.namespace,
      class: "tok-namespace"
    }, {
      tag: uk.className,
      class: "tok-className"
    }, {
      tag: uk.macroName,
      class: "tok-macroName"
    }, {
      tag: uk.propertyName,
      class: "tok-propertyName"
    }, {
      tag: uk.operator,
      class: "tok-operator"
    }, {
      tag: uk.comment,
      class: "tok-comment"
    }, {
      tag: uk.meta,
      class: "tok-meta"
    }, {
      tag: uk.invalid,
      class: "tok-invalid"
    }, {
      tag: uk.punctuation,
      class: "tok-punctuation"
    }])
  },
  40924: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => rk.f,
      f: () => bk.q,
      h: () => bk.D,
      i: () => bk.E,
      m: () => rk.i,
      q: () => si,
      s: () => rk.E,
      t: () => rk.fb
    });
    var Dk = ik(1367),
      fk = ik(1358),
      Sk = ik(60),
      bk = ik(40876),
      rk = ik(40883),
      Pk = ik(40902),
      mk = ik(40906);

    function Mk(kk, ek) {
      return ik => {
        let {
          state: Dk,
          dispatch: fk
        } = ik;
        if (Dk.readOnly) return !1;
        let Sk = kk(ek, Dk);
        return !!Sk && (fk(Dk.update(Sk)), !0)
      }
    }
    const Kk = Mk(lk, 0),
      xk = Mk(wk, 0),
      nk = Mk(((kk, ek) => wk(kk, ek, function(kk) {
        let ek = [];
        for (let ik of kk.selection.lw) {
          let Dk = kk.doc.lineAt(ik.from),
            fk = ik.to <= Dk.to ? Dk : kk.doc.lineAt(ik.to);
          fk.from > Dk.from && fk.from == ik.to && (fk = ik.to == Dk.to + 1 ? Dk : kk.doc.lineAt(ik.to - 1));
          let Sk = ek.length - 1;
          Sk >= 0 && ek[Sk].to > Dk.from ? ek[Sk].to = fk.to : ek.push({
            from: Dk.from + /^\s*/.exec(Dk.text)[0].length,
            to: fk.to
          })
        }
        return ek
      }(ek))), 0);

    function Uk(kk, ek) {
      let ik = kk.languageDataAt("commentTokens", ek, 1);
      return ik.length ? ik[0] : {}
    }
    const Hk = 50;

    function wk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ek.selection.lw,
        Dk = ik.map((kk => Uk(ek, kk.from).block));
      if (!Dk.every((kk => kk))) return null;
      let fk = ik.map(((kk, ik) => function(kk, ek, ik, Dk) {
        let fk, Sk, {
            open: bk,
            close: rk
          } = ek,
          Pk = kk.sliceDoc(ik - Hk, ik),
          mk = kk.sliceDoc(Dk, Dk + Hk),
          Mk = /\s*$/.exec(Pk)[0].length,
          Kk = /^\s*/.exec(mk)[0].length,
          xk = Pk.length - Mk;
        if (Pk.slice(xk - bk.length, xk) == bk && mk.slice(Kk, Kk + rk.length) == rk) return {
          open: {
            pos: ik - Mk,
            margin: Mk && 1
          },
          close: {
            pos: Dk + Kk,
            margin: Kk && 1
          }
        };
        Dk - ik <= 2 * Hk ? fk = Sk = kk.sliceDoc(ik, Dk) : (fk = kk.sliceDoc(ik, ik + Hk), Sk = kk.sliceDoc(Dk - Hk, Dk));
        let nk = /^\s*/.exec(fk)[0].length,
          Uk = /\s*$/.exec(Sk)[0].length,
          wk = Sk.length - Uk - rk.length;
        return fk.slice(nk, nk + bk.length) == bk && Sk.slice(wk, wk + rk.length) == rk ? {
          open: {
            pos: ik + nk + bk.length,
            margin: /\s/.test(fk.charAt(nk + bk.length)) ? 1 : 0
          },
          close: {
            pos: Dk - Uk - rk.length,
            margin: /\s/.test(Sk.charAt(wk - 1)) ? 1 : 0
          }
        } : null
      }(ek, Dk[ik], kk.from, kk.to)));
      if (2 != kk && !fk.every((kk => kk))) return {
        changes: ek.changes(ik.map(((kk, ek) => fk[ek] ? [] : [{
          from: kk.from,
          insert: Dk[ek].open + " "
        }, {
          from: kk.to,
          insert: " " + Dk[ek].close
        }])))
      };
      if (1 != kk && fk.some((kk => kk))) {
        let kk = [];
        for (let ek, ik = 0; ik < fk.length; ik++)
          if (ek = fk[ik]) {
            let fk = Dk[ik],
              {
                open: Sk,
                close: bk
              } = ek;
            kk.push({
              from: Sk.pos - fk.open.length,
              to: Sk.pos + Sk.margin
            }, {
              from: bk.pos - bk.margin,
              to: bk.pos + fk.close.length
            })
          } return {
          changes: kk
        }
      }
      return null
    }

    function lk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ek.selection.lw,
        Dk = [],
        fk = -1;
      kk: for (let {
          from: Sk,
          to: bk
        }
        of ik) {
        let kk, ik = Dk.length,
          rk = 1e9;
        for (let Pk = Sk; Pk <= bk;) {
          let ik = ek.doc.lineAt(Pk);
          if (void 0 == kk && (kk = Uk(ek, ik.from).line, !kk)) continue kk;
          if (ik.from > fk && (Sk == bk || bk > ik.from)) {
            fk = ik.from;
            let ek = /^\s*/.exec(ik.text)[0].length,
              Sk = ek == ik.length,
              bk = ik.text.slice(ek, ek + kk.length) == kk ? ek : -1;
            ek < ik.text.length && ek < rk && (rk = ek), Dk.push({
              line: ik,
              comment: bk,
              token: kk,
              indent: ek,
              empty: Sk,
              single: !1
            })
          }
          Pk = ik.to + 1
        }
        if (rk < 1e9)
          for (let ek = ik; ek < Dk.length; ek++) Dk[ek].indent < Dk[ek].line.text.length && (Dk[ek].indent = rk);
        Dk.length == ik + 1 && (Dk[ik].single = !0)
      }
      if (2 != kk && Dk.some((kk => kk.comment < 0 && (!kk.empty || kk.single)))) {
        let kk = [];
        for (let {
            line: ek,
            token: fk,
            indent: Sk,
            empty: bk,
            single: rk
          }
          of Dk) !rk && bk || kk.push({
          from: ek.from + Sk,
          insert: fk + " "
        });
        let ik = ek.changes(kk);
        return {
          changes: ik,
          selection: ek.selection.map(ik, 1)
        }
      }
      if (1 != kk && Dk.some((kk => kk.comment >= 0))) {
        let kk = [];
        for (let {
            line: ek,
            comment: ik,
            token: fk
          }
          of Dk)
          if (ik >= 0) {
            let Dk = ek.from + ik,
              Sk = Dk + fk.length;
            " " == ek.text[Sk - ek.from] && Sk++, kk.push({
              from: Dk,
              to: Sk
            })
          } return {
          changes: kk
        }
      }
      return null
    }
    const pk = bk.b.define(),
      yk = bk.b.define(),
      Yk = bk.n.define(),
      Lk = bk.n.define({
        combine: kk => (0, bk.Q)(kk, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (kk, ek) => ek
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (kk, ek) => (ik, Dk) => kk(ik, Dk) || ek(ik, Dk)
        })
      }),
      Ck = bk.E.define({
        create: () => Wk.empty,
        update(kk, ek) {
          let ik = ek.state.facet(Lk),
            Dk = ek.annotation(pk);
          if (Dk) {
            let fk = Fk.fromTransaction(ek, Dk.selection),
              Sk = Dk.side,
              bk = 0 == Sk ? kk.undone : kk.done;
            return bk = fk ? uk(bk, bk.length, ik.minDepth, fk) : Qk(bk, ek.startState.selection), new Wk(0 == Sk ? Dk.rest : bk, 0 == Sk ? bk : Dk.rest)
          }
          let fk = ek.annotation(yk);
          if ("full" != fk && "before" != fk || (kk = kk.isolate()), !1 === ek.annotation(bk.K.addToHistory)) return ek.changes.empty ? kk : kk.addMapping(ek.changes.desc);
          let Sk = Fk.fromTransaction(ek),
            rk = ek.annotation(bk.K.time),
            Pk = ek.annotation(bk.K.userEvent);
          return Sk ? kk = kk.addChanges(Sk, rk, Pk, ik, ek) : ek.selection && (kk = kk.addSelection(ek.startState.selection, rk, Pk, ik.newGroupDelay)), "full" != fk && "after" != fk || (kk = kk.isolate()), kk
        },
        toJSON: kk => ({
          done: kk.done.map((kk => kk.toJSON())),
          undone: kk.undone.map((kk => kk.toJSON()))
        }),
        fromJSON: kk => new Wk(kk.done.map(Fk.fromJSON), kk.undone.map(Fk.fromJSON))
      });

    function Ak(kk, ek) {
      return function(ik) {
        let {
          state: Dk,
          dispatch: fk
        } = ik;
        if (!ek && Dk.readOnly) return !1;
        let Sk = Dk.field(Ck, !1);
        if (!Sk) return !1;
        let bk = Sk.pop(kk, Dk, ek);
        return !!bk && (fk(bk), !0)
      }
    }
    const jk = Ak(0, !1),
      sk = Ak(1, !1),
      dk = Ak(0, !0),
      Vk = Ak(1, !0);
    class Fk {
      constructor(kk, ek, ik, Dk, fk) {
        this.changes = kk, this.effects = ek, this.mapped = ik, this.startSelection = Dk, this.selectionsAfter = fk
      }
      setSelAfter(kk) {
        return new Fk(this.changes, this.effects, this.mapped, this.startSelection, kk)
      }
      toJSON() {
        var kk, ek, ik;
        return {
          changes: null === (kk = this.changes) || void 0 === kk ? void 0 : kk.toJSON(),
          mapped: null === (ek = this.mapped) || void 0 === ek ? void 0 : ek.toJSON(),
          startSelection: null === (ik = this.startSelection) || void 0 === ik ? void 0 : ik.toJSON(),
          selectionsAfter: this.selectionsAfter.map((kk => kk.toJSON()))
        }
      }
      static fromJSON(kk) {
        return new Fk(kk.changes && bk.ChangeSet.fromJSON(kk.changes), [], kk.mapped && bk.e.fromJSON(kk.mapped), kk.startSelection && bk.h.fromJSON(kk.startSelection), kk.selectionsAfter.map(bk.h.fromJSON))
      }
      static fromTransaction(kk, ek) {
        let ik = Ik;
        for (let Dk of kk.startState.facet(Yk)) {
          let ek = Dk(kk);
          ek.length && (ik = ik.concat(ek))
        }
        return !ik.length && kk.changes.empty ? null : new Fk(kk.changes.invert(kk.startState.doc), ik, void 0, ek || kk.startState.selection, Ik)
      }
      static selection(kk) {
        return new Fk(void 0, Ik, void 0, void 0, kk)
      }
    }

    function uk(kk, ek, ik, Dk) {
      let fk = ek + 1 > ik + 20 ? ek - ik - 1 : 0,
        Sk = kk.slice(fk, ek);
      return Sk.push(Dk), Sk
    }

    function qk(kk, ek) {
      return kk.length ? ek.length ? kk.concat(ek) : kk : ek
    }
    const Ik = [],
      zk = 200;

    function Qk(kk, ek) {
      if (kk.length) {
        let ik = kk[kk.length - 1],
          Dk = ik.selectionsAfter.slice(Math.max(0, ik.selectionsAfter.length - zk));
        return Dk.length && Dk[Dk.length - 1].eq(ek) ? kk : (Dk.push(ek), uk(kk, kk.length - 1, 1e9, ik.setSelAfter(Dk)))
      }
      return [Fk.selection([ek])]
    }

    function vk(kk) {
      let ek = kk[kk.length - 1],
        ik = kk.slice();
      return ik[kk.length - 1] = ek.setSelAfter(ek.selectionsAfter.slice(0, ek.selectionsAfter.length - 1)), ik
    }

    function Ek(kk, ek) {
      if (!kk.length) return kk;
      let ik = kk.length,
        Dk = Ik;
      for (; ik;) {
        let fk = hk(kk[ik - 1], ek, Dk);
        if (fk.changes && !fk.changes.empty || fk.effects.length) {
          let ek = kk.slice(0, ik);
          return ek[ik - 1] = fk, ek
        }
        ek = fk.mapped, ik--, Dk = fk.selectionsAfter
      }
      return Dk.length ? [Fk.selection(Dk)] : Ik
    }

    function hk(kk, ek, ik) {
      let Dk = qk(kk.selectionsAfter.length ? kk.selectionsAfter.map((kk => kk.map(ek))) : Ik, ik);
      if (!kk.changes) return Fk.selection(Dk);
      let fk = kk.changes.map(ek),
        Sk = ek.mapDesc(kk.changes, !0),
        rk = kk.mapped ? kk.mapped.composeDesc(Sk) : Sk;
      return new Fk(fk, bk.D.mapEffects(kk.effects, ek), rk, kk.startSelection.map(Sk), Dk)
    }
    const ak = /^(input\.type|delete)($|\.)/;
    class Wk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = kk, this.undone = ek, this.prevTime = ik, this.prevUserEvent = Dk
      }
      isolate() {
        return this.prevTime ? new Wk(this.done, this.undone) : this
      }
      addChanges(kk, ek, ik, Dk, fk) {
        let Sk = this.done,
          rk = Sk[Sk.length - 1];
        return Sk = rk && rk.changes && !rk.changes.empty && kk.changes && (!ik || ak.test(ik)) && (!rk.selectionsAfter.length && ek - this.prevTime < Dk.newGroupDelay && Dk.joinToEvent(fk, function(kk, ek) {
          let ik = [],
            Dk = !1;
          return kk.iterChangedRanges(((kk, ek) => ik.push(kk, ek))), ek.iterChangedRanges(((kk, ek, fk, Sk) => {
            for (let bk = 0; bk < ik.length;) {
              let kk = ik[bk++],
                ek = ik[bk++];
              Sk >= kk && fk <= ek && (Dk = !0)
            }
          })), Dk
        }(rk.changes, kk.changes)) || "input.type.compose" == ik) ? uk(Sk, Sk.length - 1, Dk.minDepth, new Fk(kk.changes.compose(rk.changes), qk(bk.D.mapEffects(kk.effects, rk.changes), rk.effects), rk.mapped, rk.startSelection, Ik)) : uk(Sk, Sk.length, Dk.minDepth, kk), new Wk(Sk, Ik, ek, ik)
      }
      addSelection(kk, ek, ik, Dk) {
        let fk = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Ik;
        return fk.length > 0 && ek - this.prevTime < Dk && ik == this.prevUserEvent && ik && /^select($|\.)/.test(ik) && (Sk = fk[fk.length - 1], bk = kk, Sk.lw.length == bk.lw.length && 0 === Sk.lw.filter(((kk, ek) => kk.empty != bk.lw[ek].empty)).length) ? this : new Wk(Qk(this.done, kk), this.undone, ek, ik);
        var Sk, bk
      }
      addMapping(kk) {
        return new Wk(Ek(this.done, kk), Ek(this.undone, kk), this.prevTime, this.prevUserEvent)
      }
      pop(kk, ek, ik) {
        let Dk = 0 == kk ? this.done : this.undone;
        if (0 == Dk.length) return null;
        let fk = Dk[Dk.length - 1],
          Sk = fk.selectionsAfter[0] || (fk.startSelection ? fk.startSelection.map(fk.changes.invertedDesc, 1) : ek.selection);
        if (ik && fk.selectionsAfter.length) return ek.update({
          selection: fk.selectionsAfter[fk.selectionsAfter.length - 1],
          annotations: pk.of({
            side: kk,
            rest: vk(Dk),
            selection: Sk
          }),
          userEvent: 0 == kk ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (fk.changes) {
          let ik = 1 == Dk.length ? Ik : Dk.slice(0, Dk.length - 1);
          return fk.mapped && (ik = Ek(ik, fk.mapped)), ek.update({
            changes: fk.changes,
            selection: fk.startSelection,
            effects: fk.effects,
            annotations: pk.of({
              side: kk,
              rest: ik,
              selection: Sk
            }),
            filter: !1,
            userEvent: 0 == kk ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    Wk.empty = new Wk(Ik, Ik);
    const tk = [{
      key: "Mod-z",
      run: jk,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: sk,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: sk,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: dk,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Vk,
      preventDefault: !0
    }];

    function Xk(kk, ek) {
      return bk.h.create(kk.lw.map(ek), kk.mainIndex)
    }

    function Bk(kk, ek) {
      return kk.update({
        selection: ek,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function ck(kk, ek) {
      let {
        state: ik,
        dispatch: Dk
      } = kk, fk = Xk(ik.selection, ek);
      return !fk.eq(ik.selection, !0) && (Dk(Bk(ik, fk)), !0)
    }

    function Tk(kk, ek) {
      return bk.h.cursor(ek ? kk.to : kk.from)
    }

    function Zk(kk, ek) {
      return ck(kk, (ik => ik.empty ? kk.moveByChar(ik, ek) : Tk(ik, ek)))
    }

    function Ok(kk) {
      return kk.textDirectionAt(kk.state.selection.main.head) == rk.c.LTR
    }
    const gk = kk => Zk(kk, !Ok(kk)),
      Gk = kk => Zk(kk, Ok(kk));

    function Nk(kk, ek) {
      return ck(kk, (ik => ik.empty ? kk.moveByGroup(ik, ek) : Tk(ik, ek)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function Rk(kk, ek, ik) {
      if (ek.type.prop(ik)) return !0;
      let Dk = ek.to - ek.from;
      return Dk && (Dk > 2 || /[^\s,.;:]/.test(kk.sliceDoc(ek.from, ek.to))) || ek.firstChild
    }

    function Jk(kk, ek, ik) {
      let Dk, fk, Sk = (0, Pk.lb)(kk).resolveInner(ek.head),
        rk = ik ? mk.g.closedBy : mk.g.openedBy;
      for (let bk = ek.head;;) {
        let ek = ik ? Sk.childAfter(bk) : Sk.childBefore(bk);
        if (!ek) break;
        Rk(kk, ek, rk) ? Sk = ek : bk = ik ? ek.to : ek.from
      }
      return fk = Sk.type.prop(rk) && (Dk = ik ? (0, Pk.cb)(kk, Sk.from, 1) : (0, Pk.cb)(kk, Sk.to, -1)) && Dk.matched ? ik ? Dk.end.to : Dk.end.from : ik ? Sk.to : Sk.from, bk.h.cursor(fk, ik ? -1 : 1)
    }

    function ke(kk, ek) {
      return ck(kk, (ik => {
        if (!ik.empty) return Tk(ik, ek);
        let Dk = kk.moveVertically(ik, ek);
        return Dk.head != ik.head ? Dk : kk.moveToLineBoundary(ik, ek)
      }))
    }
    const ee = kk => ke(kk, !1),
      ie = kk => ke(kk, !0);

    function De(kk) {
      let ek, ik = kk.scrollDOM.clientHeight < kk.scrollDOM.scrollHeight - 2,
        Dk = 0,
        fk = 0;
      if (ik) {
        for (let ek of kk.state.facet(rk.f.scrollMargins)) {
          let ik = ek(kk);
          (null === ik || void 0 === ik ? void 0 : ik.top) && (Dk = Math.max(null === ik || void 0 === ik ? void 0 : ik.top, Dk)), (null === ik || void 0 === ik ? void 0 : ik.bottom) && (fk = Math.max(null === ik || void 0 === ik ? void 0 : ik.bottom, fk))
        }
        ek = kk.scrollDOM.clientHeight - Dk - fk
      } else ek = (kk.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Dk,
        marginBottom: fk,
        selfScroll: ik,
        height: Math.max(kk.defaultLineHeight, ek - 5)
      }
    }

    function fe(kk, ek) {
      let ik, Dk = De(kk),
        {
          state: fk
        } = kk,
        Sk = Xk(fk.selection, (ik => ik.empty ? kk.moveVertically(ik, ek, Dk.height) : Tk(ik, ek)));
      if (Sk.eq(fk.selection)) return !1;
      if (Dk.selfScroll) {
        let ek = kk.coordsAtPos(fk.selection.main.head),
          bk = kk.scrollDOM.getBoundingClientRect(),
          Pk = bk.top + Dk.marginTop,
          mk = bk.bottom - Dk.marginBottom;
        ek && ek.top > Pk && ek.bottom < mk && (ik = rk.f.scrollIntoView(Sk.main.head, {
          y: "start",
          yMargin: ek.top - Pk
        }))
      }
      return kk.dispatch(Bk(fk, Sk), {
        effects: ik
      }), !0
    }
    const Se = kk => fe(kk, !1),
      be = kk => fe(kk, !0);

    function re(kk, ek, ik) {
      let Dk = kk.lineBlockAt(ek.head),
        fk = kk.moveToLineBoundary(ek, ik);
      if (fk.head == ek.head && fk.head != (ik ? Dk.to : Dk.from) && (fk = kk.moveToLineBoundary(ek, ik, !1)), !ik && fk.head == Dk.from && Dk.length) {
        let ik = /^\s*/.exec(kk.state.sliceDoc(Dk.from, Math.min(Dk.from + 100, Dk.to)))[0].length;
        ik && ek.head != Dk.from + ik && (fk = bk.h.cursor(Dk.from + ik))
      }
      return fk
    }

    function Pe(kk, ek, ik) {
      let Dk = !1,
        fk = Xk(kk.selection, (ek => {
          let fk = (0, Pk.cb)(kk, ek.head, -1) || (0, Pk.cb)(kk, ek.head, 1) || ek.head > 0 && (0, Pk.cb)(kk, ek.head - 1, 1) || ek.head < kk.doc.length && (0, Pk.cb)(kk, ek.head + 1, -1);
          if (!fk || !fk.end) return ek;
          Dk = !0;
          let Sk = fk.start.from == ek.head ? fk.end.to : fk.end.from;
          return ik ? bk.h.range(ek.anchor, Sk) : bk.h.cursor(Sk)
        }));
      return !!Dk && (ek(Bk(kk, fk)), !0)
    }

    function me(kk, ek) {
      let ik = Xk(kk.state.selection, (kk => {
        let ik = ek(kk);
        return bk.h.range(kk.anchor, ik.head, ik.goalColumn, ik.bidiLevel || void 0, ik.assoc)
      }));
      return !ik.eq(kk.state.selection) && (kk.dispatch(Bk(kk.state, ik)), !0)
    }

    function Me(kk, ek) {
      return me(kk, (ik => kk.moveByChar(ik, ek)))
    }
    const Ke = kk => Me(kk, !Ok(kk)),
      xe = kk => Me(kk, Ok(kk));

    function ne(kk, ek) {
      return me(kk, (ik => kk.moveByGroup(ik, ek)))
    }

    function Ue(kk, ek) {
      return me(kk, (ik => kk.moveVertically(ik, ek)))
    }
    const He = kk => Ue(kk, !1),
      we = kk => Ue(kk, !0);

    function le(kk, ek) {
      return me(kk, (ik => kk.moveVertically(ik, ek, De(kk).height)))
    }
    const pe = kk => le(kk, !1),
      ye = kk => le(kk, !0),
      Ye = kk => {
        let {
          state: ek,
          dispatch: ik
        } = kk;
        return ik(Bk(ek, {
          anchor: 0
        })), !0
      },
      Le = kk => {
        let {
          state: ek,
          dispatch: ik
        } = kk;
        return ik(Bk(ek, {
          anchor: ek.doc.length
        })), !0
      },
      Ce = kk => {
        let {
          state: ek,
          dispatch: ik
        } = kk;
        return ik(Bk(ek, {
          anchor: ek.selection.main.anchor,
          head: 0
        })), !0
      },
      Ae = kk => {
        let {
          state: ek,
          dispatch: ik
        } = kk;
        return ik(Bk(ek, {
          anchor: ek.selection.main.anchor,
          head: ek.doc.length
        })), !0
      };

    function je(kk, ek) {
      let {
        state: ik
      } = kk, Dk = ik.selection, fk = ik.selection.lw.slice();
      for (let Sk of ik.selection.lw) {
        let Dk = ik.doc.lineAt(Sk.head);
        if (ek ? Dk.to < kk.state.doc.length : Dk.from > 0)
          for (let ik = Sk;;) {
            let Sk = kk.moveVertically(ik, ek);
            if (Sk.head < Dk.from || Sk.head > Dk.to) {
              fk.some((kk => kk.head == Sk.head)) || fk.push(Sk);
              break
            }
            if (Sk.head == ik.head) break;
            ik = Sk
          }
      }
      return fk.length != Dk.lw.length && (kk.dispatch(Bk(ik, bk.h.create(fk, fk.length - 1))), !0)
    }

    function se(kk, ek) {
      if (kk.state.readOnly) return !1;
      let ik = "delete.selection",
        {
          state: Dk
        } = kk,
        fk = Dk.changeByRange((Dk => {
          let {
            from: fk,
            to: Sk
          } = Dk;
          if (fk == Sk) {
            let bk = ek(Dk);
            bk < fk ? (ik = "delete.backward", bk = de(kk, bk, !1)) : bk > fk && (ik = "delete.forward", bk = de(kk, bk, !0)), fk = Math.min(fk, bk), Sk = Math.max(Sk, bk)
          } else fk = de(kk, fk, !1), Sk = de(kk, Sk, !0);
          return fk == Sk ? {
            range: Dk
          } : {
            changes: {
              from: fk,
              to: Sk
            },
            range: bk.h.cursor(fk, fk < Dk.head ? -1 : 1)
          }
        }));
      return !fk.changes.empty && (kk.dispatch(Dk.update(fk, {
        scrollIntoView: !0,
        userEvent: ik,
        effects: "delete.selection" == ik ? rk.f.announce.of(Dk.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function de(kk, ek, ik) {
      if (kk instanceof rk.f)
        for (let Dk of kk.state.facet(rk.f.atomicRanges).map((ek => ek(kk)))) Dk.between(ek, ek, ((kk, Dk) => {
          kk < ek && Dk > ek && (ek = ik ? Dk : kk)
        }));
      return ek
    }
    const Ve = (kk, ek, ik) => se(kk, (Dk => {
        let fk, Sk, rk = Dk.from,
          {
            state: mk
          } = kk,
          Mk = mk.doc.lineAt(rk);
        if (ik && !ek && rk > Mk.from && rk < Mk.from + 200 && !/[^ \t]/.test(fk = Mk.text.slice(0, rk - Mk.from))) {
          if ("\t" == fk[fk.length - 1]) return rk - 1;
          let kk = (0, bk.S)(fk, mk.tabSize) % (0, Pk.Q)(mk) || (0, Pk.Q)(mk);
          for (let ek = 0; ek < kk && " " == fk[fk.length - 1 - ek]; ek++) rk--;
          Sk = rk
        } else Sk = (0, bk.U)(Mk.text, rk - Mk.from, ek, ek) + Mk.from, Sk == rk && Mk.number != (ek ? mk.doc.lines : 1) ? Sk += ek ? 1 : -1 : !ek && /[\ufe00-\ufe0f]/.test(Mk.text.slice(Sk - Mk.from, rk - Mk.from)) && (Sk = (0, bk.U)(Mk.text, Sk - Mk.from, !1, !1) + Mk.from);
        return Sk
      })),
      Fe = kk => Ve(kk, !1, !0),
      ue = kk => Ve(kk, !0, !1),
      qe = (kk, ek) => se(kk, (ik => {
        let Dk = ik.head,
          {
            state: fk
          } = kk,
          Sk = fk.doc.lineAt(Dk),
          rk = fk.charCategorizer(Dk);
        for (let kk = null;;) {
          if (Dk == (ek ? Sk.to : Sk.from)) {
            Dk == ik.head && Sk.number != (ek ? fk.doc.lines : 1) && (Dk += ek ? 1 : -1);
            break
          }
          let Pk = (0, bk.U)(Sk.text, Dk - Sk.from, ek) + Sk.from,
            mk = Sk.text.slice(Math.min(Dk, Pk) - Sk.from, Math.max(Dk, Pk) - Sk.from),
            Mk = rk(mk);
          if (null != kk && Mk != kk) break;
          " " == mk && Dk == ik.head || (kk = Mk), Dk = Pk
        }
        return Dk
      })),
      Ie = kk => qe(kk, !1);

    function ze(kk) {
      let ek = [],
        ik = -1;
      for (let Dk of kk.selection.lw) {
        let fk = kk.doc.lineAt(Dk.from),
          Sk = kk.doc.lineAt(Dk.to);
        if (Dk.empty || Dk.to != Sk.from || (Sk = kk.doc.lineAt(Dk.to - 1)), ik >= fk.number) {
          let kk = ek[ek.length - 1];
          kk.to = Sk.to, kk.lw.push(Dk)
        } else ek.push({
          from: fk.from,
          to: Sk.to,
          lw: [Dk]
        });
        ik = Sk.number + 1
      }
      return ek
    }

    function Qe(kk, ek, ik) {
      if (kk.readOnly) return !1;
      let Dk = [],
        fk = [];
      for (let Sk of ze(kk)) {
        if (ik ? Sk.to == kk.doc.length : 0 == Sk.from) continue;
        let ek = kk.doc.lineAt(ik ? Sk.to + 1 : Sk.from - 1),
          rk = ek.length + 1;
        if (ik) {
          Dk.push({
            from: Sk.to,
            to: ek.to
          }, {
            from: Sk.from,
            insert: ek.text + kk.lineBreak
          });
          for (let ek of Sk.lw) fk.push(bk.h.range(Math.min(kk.doc.length, ek.anchor + rk), Math.min(kk.doc.length, ek.head + rk)))
        } else {
          Dk.push({
            from: ek.from,
            to: Sk.from
          }, {
            from: Sk.to,
            insert: kk.lineBreak + ek.text
          });
          for (let kk of Sk.lw) fk.push(bk.h.range(kk.anchor - rk, kk.head - rk))
        }
      }
      return !!Dk.length && (ek(kk.update({
        changes: Dk,
        scrollIntoView: !0,
        selection: bk.h.create(fk, kk.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function ve(kk, ek, ik) {
      if (kk.readOnly) return !1;
      let Dk = [];
      for (let Sk of ze(kk)) ik ? Dk.push({
        from: Sk.from,
        insert: kk.doc.slice(Sk.from, Sk.to) + kk.lineBreak
      }) : Dk.push({
        from: Sk.to,
        insert: kk.lineBreak + kk.doc.slice(Sk.from, Sk.to)
      });
      let fk = kk.changes(Dk);
      return ek(kk.update({
        changes: fk,
        selection: kk.selection.map(fk, ik ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const Ee = he(!1);

    function he(kk) {
      return ek => {
        let {
          state: ik,
          dispatch: Dk
        } = ek;
        if (ik.readOnly) return !1;
        let fk = ik.changeByRange((ek => {
          let {
            from: Dk,
            to: fk
          } = ek, Sk = ik.doc.lineAt(Dk), rk = !kk && Dk == fk && function(kk, ek) {
            if (/\(\)|\[\]|\{\}/.test(kk.sliceDoc(ek - 1, ek + 1))) return {
              from: ek,
              to: ek
            };
            let ik, Dk = (0, Pk.lb)(kk).resolveInner(ek),
              fk = Dk.childBefore(ek),
              Sk = Dk.childAfter(ek);
            return fk && Sk && fk.to <= ek && Sk.from >= ek && (ik = fk.type.prop(mk.g.closedBy)) && ik.indexOf(Sk.name) > -1 && kk.doc.lineAt(fk.to).from == kk.doc.lineAt(Sk.from).from && !/\S/.test(kk.sliceDoc(fk.to, Sk.from)) ? {
              from: fk.to,
              to: Sk.from
            } : null
          }(ik, Dk);
          kk && (Dk = fk = (fk <= Sk.to ? Sk : ik.doc.lineAt(fk)).to);
          let Mk = new Pk.g(ik, {
              simulateBreak: Dk,
              simulateDoubleBreak: !!rk
            }),
            Kk = (0, Pk.T)(Mk, Dk);
          for (null == Kk && (Kk = (0, bk.S)(/^\s*/.exec(ik.doc.lineAt(Dk).text)[0], ik.tabSize)); fk < Sk.to && /\s/.test(Sk.text[fk - Sk.from]);) fk++;
          rk ? ({
            from: Dk,
            to: fk
          } = rk) : Dk > Sk.from && Dk < Sk.from + 100 && !/\S/.test(Sk.text.slice(0, Dk)) && (Dk = Sk.from);
          let xk = ["", (0, Pk._)(ik, Kk)];
          return rk && xk.push((0, Pk._)(ik, Mk.lineIndent(Sk.from, -1))), {
            changes: {
              from: Dk,
              to: fk,
              insert: bk.I.of(xk)
            },
            range: bk.h.cursor(Dk + 1 + xk[1].length)
          }
        }));
        return Dk(ik.update(fk, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function ae(kk, ek) {
      let ik = -1;
      return kk.changeByRange((Dk => {
        let fk = [];
        for (let bk = Dk.from; bk <= Dk.to;) {
          let Sk = kk.doc.lineAt(bk);
          Sk.number > ik && (Dk.empty || Dk.to > Sk.from) && (ek(Sk, fk, Dk), ik = Sk.number), bk = Sk.to + 1
        }
        let Sk = kk.changes(fk);
        return {
          changes: fk,
          range: bk.h.range(Sk.mapPos(Dk.anchor, 1), Sk.mapPos(Dk.head, 1))
        }
      }))
    }
    const We = kk => {
        let {
          state: ek,
          dispatch: ik
        } = kk;
        return !ek.readOnly && (ik(ek.update(ae(ek, ((kk, ik) => {
          ik.push({
            from: kk.from,
            insert: ek.facet(Pk.ab)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      te = kk => {
        let {
          state: ek,
          dispatch: ik
        } = kk;
        return !ek.readOnly && (ik(ek.update(ae(ek, ((kk, ik) => {
          let Dk = /^\s*/.exec(kk.text)[0];
          if (!Dk) return;
          let fk = (0, bk.S)(Dk, ek.tabSize),
            Sk = 0,
            rk = (0, Pk._)(ek, Math.max(0, fk - (0, Pk.Q)(ek)));
          for (; Sk < Dk.length && Sk < rk.length && Dk.charCodeAt(Sk) == rk.charCodeAt(Sk);) Sk++;
          ik.push({
            from: kk.from + Sk,
            to: kk.from + Dk.length,
            insert: rk.slice(Sk)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      Xe = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: kk => ck(kk, (ek => Jk(kk.state, ek, !Ok(kk)))),
        shift: kk => me(kk, (ek => Jk(kk.state, ek, !Ok(kk))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: kk => ck(kk, (ek => Jk(kk.state, ek, Ok(kk)))),
        shift: kk => me(kk, (ek => Jk(kk.state, ek, Ok(kk))))
      }, {
        key: "Alt-ArrowUp",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk;
          return Qe(ek, ik, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk;
          return ve(ek, ik, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk;
          return Qe(ek, ik, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk;
          return ve(ek, ik, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: kk => je(kk, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: kk => je(kk, !0)
      }, {
        key: "Escape",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk, Dk = ek.selection, fk = null;
          return Dk.lw.length > 1 ? fk = bk.h.create([Dk.main]) : Dk.main.empty || (fk = bk.h.create([bk.h.cursor(Dk.main.head)])), !!fk && (ik(Bk(ek, fk)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: he(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk, Dk = ze(ek).map((kk => {
            let {
              from: ik,
              to: Dk
            } = kk;
            return bk.h.range(ik, Math.min(Dk + 1, ek.doc.length))
          }));
          return ik(ek.update({
            selection: bk.h.create(Dk),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk, Dk = Xk(ek.selection, (kk => {
            let ik = (0, Pk.lb)(ek),
              Dk = ik.resolveStack(kk.from, 1);
            if (kk.empty) {
              let ek = ik.resolveStack(kk.from, -1);
              ek.node.from >= Dk.node.from && ek.node.to <= Dk.node.to && (Dk = ek)
            }
            for (let ek = Dk; ek; ek = ek.next) {
              let {
                node: ik
              } = ek;
              if ((ik.from < kk.from && ik.to >= kk.to || ik.to > kk.to && ik.from <= kk.from) && ek.next) return bk.h.range(ik.to, ik.from)
            }
            return kk
          }));
          return !Dk.eq(ek.selection) && (ik(Bk(ek, Dk)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: te
      }, {
        key: "Mod-]",
        run: We
      }, {
        key: "Mod-Alt-\\",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk;
          if (ek.readOnly) return !1;
          let Dk = Object.create(null),
            fk = new Pk.g(ek, {
              overrideIndentation: kk => {
                let ek = Dk[kk];
                return null == ek ? -1 : ek
              }
            }),
            Sk = ae(ek, ((kk, ik, Sk) => {
              let bk = (0, Pk.T)(fk, kk.from);
              if (null == bk) return;
              /\S/.test(kk.text) || (bk = 0);
              let rk = /^\s*/.exec(kk.text)[0],
                mk = (0, Pk._)(ek, bk);
              (rk != mk || Sk.from < kk.from + rk.length) && (Dk[kk.from] = bk, ik.push({
                from: kk.from,
                to: kk.from + rk.length,
                insert: mk
              }))
            }));
          return Sk.changes.empty || ik(ek.update(Sk, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: kk => {
          if (kk.state.readOnly) return !1;
          let {
            state: ek
          } = kk, ik = ek.changes(ze(ek).map((kk => {
            let {
              from: ik,
              to: Dk
            } = kk;
            return ik > 0 ? ik-- : Dk < ek.doc.length && Dk++, {
              from: ik,
              to: Dk
            }
          }))), Dk = Xk(ek.selection, (ek => {
            let ik;
            if (kk.lineWrapping) {
              let Dk = kk.lineBlockAt(ek.head),
                fk = kk.coordsAtPos(ek.head, ek.assoc || 1);
              fk && (ik = Dk.bottom + kk.documentTop - fk.bottom + kk.defaultLineHeight / 2)
            }
            return kk.moveVertically(ek, !0, ik)
          })).map(ik);
          return kk.dispatch({
            changes: ik,
            selection: Dk,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk;
          return Pe(ek, ik, !1)
        }
      }, {
        key: "Mod-/",
        run: kk => {
          let {
            state: ek
          } = kk, ik = ek.doc.lineAt(ek.selection.main.from), Dk = Uk(kk.state, ik.from);
          return Dk.line ? Kk(kk) : !!Dk.block && nk(kk)
        }
      }, {
        key: "Alt-A",
        run: xk
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: kk => (kk.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: gk,
        shift: Ke,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: kk => Nk(kk, !Ok(kk)),
        shift: kk => ne(kk, !Ok(kk)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: kk => ck(kk, (ek => re(kk, ek, !Ok(kk)))),
        shift: kk => me(kk, (ek => re(kk, ek, !Ok(kk)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: Gk,
        shift: xe,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: kk => Nk(kk, Ok(kk)),
        shift: kk => ne(kk, Ok(kk)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: kk => ck(kk, (ek => re(kk, ek, Ok(kk)))),
        shift: kk => me(kk, (ek => re(kk, ek, Ok(kk)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: ee,
        shift: He,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: Ye,
        shift: Ce
      }, {
        mac: "Ctrl-ArrowUp",
        run: Se,
        shift: pe
      }, {
        key: "ArrowDown",
        run: ie,
        shift: we,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: Le,
        shift: Ae
      }, {
        mac: "Ctrl-ArrowDown",
        run: be,
        shift: ye
      }, {
        key: "PageUp",
        run: Se,
        shift: pe
      }, {
        key: "PageDown",
        run: be,
        shift: ye
      }, {
        key: "Home",
        run: kk => ck(kk, (ek => re(kk, ek, !1))),
        shift: kk => me(kk, (ek => re(kk, ek, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: Ye,
        shift: Ce
      }, {
        key: "End",
        run: kk => ck(kk, (ek => re(kk, ek, !0))),
        shift: kk => me(kk, (ek => re(kk, ek, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: Le,
        shift: Ae
      }, {
        key: "Enter",
        run: Ee,
        shift: Ee
      }, {
        key: "Mod-a",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk;
          return ik(ek.update({
            selection: {
              anchor: 0,
              head: ek.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: Fe,
        shift: Fe,
        preventDefault: !0
      }, {
        key: "Delete",
        run: ue,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: Ie,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: kk => qe(kk, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: kk => se(kk, (ek => {
          let ik = kk.moveToLineBoundary(ek, !1).head;
          return ek.head > ik ? ik : Math.max(0, ek.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: kk => se(kk, (ek => {
          let ik = kk.moveToLineBoundary(ek, !0).head;
          return ek.head < ik ? ik : Math.min(kk.state.doc.length, ek.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: gk,
        shift: Ke,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: Gk,
        shift: xe
      }, {
        key: "Ctrl-p",
        run: ee,
        shift: He
      }, {
        key: "Ctrl-n",
        run: ie,
        shift: we
      }, {
        key: "Ctrl-a",
        run: kk => ck(kk, (ek => bk.h.cursor(kk.lineBlockAt(ek.head).from, 1))),
        shift: kk => me(kk, (ek => bk.h.cursor(kk.lineBlockAt(ek.head).from)))
      }, {
        key: "Ctrl-e",
        run: kk => ck(kk, (ek => bk.h.cursor(kk.lineBlockAt(ek.head).to, -1))),
        shift: kk => me(kk, (ek => bk.h.cursor(kk.lineBlockAt(ek.head).to)))
      }, {
        key: "Ctrl-d",
        run: ue
      }, {
        key: "Ctrl-h",
        run: Fe
      }, {
        key: "Ctrl-k",
        run: kk => se(kk, (ek => {
          let ik = kk.lineBlockAt(ek.head).to;
          return ek.head < ik ? ik : Math.min(kk.state.doc.length, ek.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: Ie
      }, {
        key: "Ctrl-o",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk;
          if (ek.readOnly) return !1;
          let Dk = ek.changeByRange((kk => ({
            changes: {
              from: kk.from,
              to: kk.to,
              insert: bk.I.of(["", ""])
            },
            range: bk.h.cursor(kk.from)
          })));
          return ik(ek.update(Dk, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: kk => {
          let {
            state: ek,
            dispatch: ik
          } = kk;
          if (ek.readOnly) return !1;
          let Dk = ek.changeByRange((kk => {
            if (!kk.empty || 0 == kk.from || kk.from == ek.doc.length) return {
              range: kk
            };
            let ik = kk.from,
              Dk = ek.doc.lineAt(ik),
              fk = ik == Dk.from ? ik - 1 : (0, bk.U)(Dk.text, ik - Dk.from, !1) + Dk.from,
              Sk = ik == Dk.to ? ik + 1 : (0, bk.U)(Dk.text, ik - Dk.from, !0) + Dk.from;
            return {
              changes: {
                from: fk,
                to: Sk,
                insert: ek.doc.slice(ik, Sk).append(ek.doc.slice(fk, ik))
              },
              range: bk.h.cursor(Sk)
            }
          }));
          return !Dk.changes.empty && (ik(ek.update(Dk, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: be
      }].map((kk => ({
        mac: kk.key,
        run: kk.run,
        shift: kk.shift
      }))))),
      Be = {
        key: "Tab",
        run: We,
        shift: te
      };
    var ce = ik(40926),
      Te = ik(40871),
      oe = ik(40934),
      Ze = function(kk) {
        void 0 === kk && (kk = {});
        var {
          crosshairCursor: ek = !1
        } = kk, ik = [];
        !1 !== kk.closeBracketsKeymap && (ik = ik.concat(Te.g)), !1 !== kk.defaultKeymap && (ik = ik.concat(Xe)), !1 !== kk.searchKeymap && (ik = ik.concat(ce.i)), !1 !== kk.historyKeymap && (ik = ik.concat(tk)), !1 !== kk.foldKeymap && (ik = ik.concat(Pk.I)), !1 !== kk.completionKeymap && (ik = ik.concat(Te.n)), !1 !== kk.lintKeymap && (ik = ik.concat(oe.e));
        var Dk = [];
        return !1 !== kk.lineNumbers && Dk.push((0, rk.K)()), !1 !== kk.highlightActiveLineGutter && Dk.push((0, rk.A)()), !1 !== kk.highlightSpecialChars && Dk.push((0, rk.D)()), !1 !== kk.history && Dk.push(function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [Ck, Lk.of(kk), rk.f.domEventHandlers({
            beforeinput(kk, ek) {
              let ik = "historyUndo" == kk.inputType ? jk : "historyRedo" == kk.inputType ? sk : null;
              return !!ik && (kk.preventDefault(), ik(ek))
            }
          })]
        }()), !1 !== kk.foldGutter && Dk.push((0, Pk.F)()), !1 !== kk.drawSelection && Dk.push((0, rk.n)()), !1 !== kk.dropCursor && Dk.push((0, rk.o)()), !1 !== kk.allowMultipleSelections && Dk.push(bk.j.allowMultipleSelections.of(!0)), !1 !== kk.indentOnInput && Dk.push((0, Pk.Z)()), !1 !== kk.syntaxHighlighting && Dk.push((0, Pk.gb)(Pk.u, {
          fallback: !0
        })), !1 !== kk.bracketMatching && Dk.push((0, Pk.q)()), !1 !== kk.closeBrackets && Dk.push((0, Te.i)()), !1 !== kk.autocompletion && Dk.push((0, Te.d)()), !1 !== kk.rectangularSelection && Dk.push((0, rk.V)()), !1 !== ek && Dk.push((0, rk.l)()), !1 !== kk.highlightActiveLine && Dk.push((0, rk.B)()), !1 !== kk.highlightSelectionMatches && Dk.push((0, ce.h)()), kk.tabSize && "number" === typeof kk.tabSize && Dk.push(Pk.ab.of(" ".repeat(kk.tabSize))), Dk.concat([rk.I.of(ik.flat())]).filter(Boolean)
      },
      Oe = ik(40915);
    const ge = "#e5c07b",
      Ge = "#e06c75",
      Ne = "#56b6c2",
      Re = "#ffffff",
      Je = "#abb2bf",
      ki = "#7d8799",
      ei = "#61afef",
      ii = "#98c379",
      Di = "#d19a66",
      fi = "#c678dd",
      Si = "#21252b",
      bi = "#2c313a",
      ri = "#282c34",
      Pi = "#353a42",
      mi = "#3E4451",
      Mi = "#528bff",
      Ki = rk.f.theme({
        "&": {
          color: Je,
          backgroundColor: ri
        },
        ".cm-content": {
          caretColor: Mi
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Mi
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: mi
        },
        ".cm-panels": {
          backgroundColor: Si,
          color: Je
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
          backgroundColor: ri,
          color: ki,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: bi
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Pi
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Pi,
          borderBottomColor: Pi
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: bi,
            color: Je
          }
        }
      }, {
        dark: !0
      }),
      xi = Pk.e.define([{
        tag: Oe.o.keyword,
        color: fi
      }, {
        tag: [Oe.o.name, Oe.o.deleted, Oe.o.character, Oe.o.propertyName, Oe.o.macroName],
        color: Ge
      }, {
        tag: [Oe.o.function(Oe.o.variableName), Oe.o.labelName],
        color: ei
      }, {
        tag: [Oe.o.color, Oe.o.constant(Oe.o.name), Oe.o.standard(Oe.o.name)],
        color: Di
      }, {
        tag: [Oe.o.definition(Oe.o.name), Oe.o.separator],
        color: Je
      }, {
        tag: [Oe.o.typeName, Oe.o.className, Oe.o.number, Oe.o.changed, Oe.o.annotation, Oe.o.modifier, Oe.o.self, Oe.o.namespace],
        color: ge
      }, {
        tag: [Oe.o.operator, Oe.o.operatorKeyword, Oe.o.url, Oe.o.escape, Oe.o.regexp, Oe.o.link, Oe.o.special(Oe.o.string)],
        color: Ne
      }, {
        tag: [Oe.o.meta, Oe.o.comment],
        color: ki
      }, {
        tag: Oe.o.strong,
        fontWeight: "bold"
      }, {
        tag: Oe.o.emphasis,
        fontStyle: "italic"
      }, {
        tag: Oe.o.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Oe.o.link,
        color: ki,
        textDecoration: "underline"
      }, {
        tag: Oe.o.heading,
        fontWeight: "bold",
        color: Ge
      }, {
        tag: [Oe.o.atom, Oe.o.bool, Oe.o.special(Oe.o.variableName)],
        color: Di
      }, {
        tag: [Oe.o.processingInstruction, Oe.o.string, Oe.o.inserted],
        color: ii
      }, {
        tag: Oe.o.invalid,
        color: Re
      }]),
      ni = [Ki, (0, Pk.gb)(xi)];
    var Ui = rk.f.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class Hi {
      constructor(kk, ek) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = ek, this.timeoutMS = ek, this.callbacks.push(kk)
      }
      Px() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var kk = this.callbacks.slice();
          this.callbacks.length = 0, kk.forEach((kk => {
            try {
              kk()
            } catch (ek) {
              console.error("TimeoutLatch callback error:", ek)
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
    class wi {
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
            kk.Px(), kk.isDone && this.remove(kk)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var li = null,
      yi = bk.b.define(),
      Yi = [];

    function Li(kk) {
      var {
        value: ek,
        selection: ik,
        onChange: Dk,
        onStatistics: fk,
        onCreateEditor: Pk,
        onUpdate: mk,
        extensions: Mk = Yi,
        autoFocus: Kk,
        theme: xk = "light",
        height: nk = null,
        minHeight: Uk = null,
        maxHeight: Hk = null,
        width: wk = null,
        minWidth: lk = null,
        maxWidth: pk = null,
        placeholder: yk = "",
        editable: Yk = !0,
        readOnly: Lk = !1,
        indentWithTab: Ck = !0,
        basicSetup: Ak = !0,
        root: jk,
        initialState: sk
      } = kk, [dk, Vk] = (0, Sk.useState)(), [Fk, uk] = (0, Sk.useState)(), [qk, Ik] = (0, Sk.useState)(), zk = (0, Sk.useState)((() => ({
        current: null
      })))[0], Qk = (0, Sk.useState)((() => ({
        current: null
      })))[0], vk = rk.f.theme({
        "&": {
          height: nk,
          minHeight: Uk,
          maxHeight: Hk,
          width: wk,
          minWidth: lk,
          maxWidth: pk
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), Ek = rk.f.updateListener.of((kk => {
        if (kk.docChanged && "function" === typeof Dk && !kk.transactions.some((kk => kk.annotation(yi)))) {
          zk.current ? zk.current.reset() : (zk.current = new Hi((() => {
            if (Qk.current) {
              var kk = Qk.current;
              Qk.current = null, kk()
            }
            zk.current = null
          }), 200), ("undefined" === typeof window ? new wi : (li || (li = new wi), li)).add(zk.current));
          var ek = kk.state.doc.toString();
          Dk(ek, kk)
        }
        fk && fk((kk => ({
          line: kk.state.doc.lineAt(kk.state.selection.main.from),
          lineCount: kk.state.doc.lines,
          lineBreak: kk.state.lineBreak,
          length: kk.state.doc.length,
          readOnly: kk.state.readOnly,
          tabSize: kk.state.tabSize,
          selection: kk.state.selection,
          selectionAsSingle: kk.state.selection.asSingle().main,
          lw: kk.state.selection.lw,
          selectionCode: kk.state.sliceDoc(kk.state.selection.main.from, kk.state.selection.main.to),
          selections: kk.state.selection.lw.map((ek => kk.state.sliceDoc(ek.from, ek.to))),
          selectedText: kk.state.selection.lw.some((kk => !kk.empty))
        }))(kk))
      })), hk = function(kk) {
        void 0 === kk && (kk = {});
        var {
          indentWithTab: ek = !0,
          editable: ik = !0,
          readOnly: Dk = !1,
          theme: fk = "light",
          placeholder: Sk = "",
          basicSetup: Pk = !0
        } = kk, mk = [];
        switch (ek && mk.unshift(rk.I.of([Be])), Pk && ("boolean" === typeof Pk ? mk.unshift(Ze()) : mk.unshift(Ze(Pk))), Sk && mk.unshift((0, rk.R)(Sk)), fk) {
          case "light":
            mk.push(Ui);
            break;
          case "dark":
            mk.push(ni);
            break;
          case "none":
            break;
          default:
            mk.push(fk)
        }
        return !1 === ik && mk.push(rk.f.editable.of(!1)), Dk && mk.push(bk.j.readOnly.of(!0)), [...mk]
      }({
        theme: xk,
        editable: Yk,
        readOnly: Lk,
        placeholder: yk,
        indentWithTab: Ck,
        basicSetup: Ak
      }), ak = [Ek, vk, ...hk];
      return mk && "function" === typeof mk && ak.push(rk.f.updateListener.of(mk)), ak = ak.concat(Mk), (0, Sk.useLayoutEffect)((() => {
        if (dk && !qk) {
          var kk = {
              doc: ek,
              selection: ik,
              extensions: ak
            },
            Dk = sk ? bk.j.fromJSON(sk.json, kk, sk.fields) : bk.j.create(kk);
          if (Ik(Dk), !Fk) {
            var fk = new rk.f({
              state: Dk,
              parent: dk,
              root: jk
            });
            uk(fk), Pk && Pk(fk, Dk)
          }
        }
        return () => {
          Fk && (Ik(void 0), uk(void 0))
        }
      }), [dk, qk]), (0, Sk.useEffect)((() => {
        kk.container && Vk(kk.container)
      }), [kk.container]), (0, Sk.useEffect)((() => () => {
        Fk && (Fk.destroy(), uk(void 0)), zk.current && (zk.current.cancel(), zk.current = null)
      }), [Fk]), (0, Sk.useEffect)((() => {
        Kk && Fk && Fk.focus()
      }), [Kk, Fk]), (0, Sk.useEffect)((() => {
        Fk && Fk.dispatch({
          effects: bk.D.reconfigure.of(ak)
        })
      }), [xk, Mk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, Dk, mk]), (0, Sk.useEffect)((() => {
        if (void 0 !== ek) {
          var kk = Fk ? Fk.state.doc.toString() : "";
          if (Fk && ek !== kk) {
            var ik = () => {
              Fk && ek !== Fk.state.doc.toString() && Fk.dispatch({
                changes: {
                  from: 0,
                  to: Fk.state.doc.toString().length,
                  insert: ek || ""
                },
                annotations: [yi.of(!0)]
              })
            };
            zk.current && !zk.current.isDone ? Qk.current = ik : ik()
          }
        }
      }), [ek, Fk]), {
        state: qk,
        setState: Ik,
        view: Fk,
        setView: uk,
        container: dk,
        setContainer: Vk
      }
    }
    var Ci = ik(1066),
      Ai = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      ji = (0, Sk.forwardRef)(((kk, ek) => {
        var {
          className: ik,
          value: bk = "",
          selection: rk,
          extensions: Pk = [],
          onChange: mk,
          onStatistics: Mk,
          onCreateEditor: Kk,
          onUpdate: xk,
          autoFocus: nk,
          theme: Uk = "light",
          height: Hk,
          minHeight: wk,
          maxHeight: lk,
          width: pk,
          minWidth: yk,
          maxWidth: Yk,
          basicSetup: Lk,
          placeholder: Ck,
          indentWithTab: Ak,
          editable: jk,
          readOnly: sk,
          root: dk,
          initialState: Vk
        } = kk, Fk = (0, fk.e)(kk, Ai), uk = (0, Sk.useRef)(null), {
          state: qk,
          view: Ik,
          container: zk,
          setContainer: Qk
        } = Li({
          root: dk,
          value: bk,
          autoFocus: nk,
          theme: Uk,
          height: Hk,
          minHeight: wk,
          maxHeight: lk,
          width: pk,
          minWidth: yk,
          maxWidth: Yk,
          basicSetup: Lk,
          placeholder: Ck,
          indentWithTab: Ak,
          editable: jk,
          readOnly: sk,
          selection: rk,
          onChange: mk,
          onStatistics: Mk,
          onCreateEditor: Kk,
          onUpdate: xk,
          extensions: Pk,
          initialState: Vk
        });
        (0, Sk.useImperativeHandle)(ek, (() => ({
          editor: uk.current,
          state: qk,
          view: Ik
        })), [uk, zk, qk, Ik]);
        var vk = (0, Sk.useCallback)((kk => {
          uk.current = kk, Qk(kk)
        }), [Qk]);
        if ("string" !== typeof bk) throw new Error("value must be typeof string but got " + typeof bk);
        var Ek = "string" === typeof Uk ? "cm-theme-" + Uk : "cm-theme";
        return (0, Ci.jsx)("div", (0, Dk.b)({
          ref: vk,
          className: Ek + (ik ? " " + ik : "")
        }, Fk))
      }));
    ji.displayName = "CodeMirror";
    const si = ji
  },
  40895: (kk, ek, ik) => {
    function Dk() {
      var kk = arguments[0];
      "string" == typeof kk && (kk = document.createElement(kk));
      var ek = 1,
        ik = arguments[1];
      if (ik && "object" == typeof ik && null == ik.nodeType && !Array.isArray(ik)) {
        for (var Dk in ik)
          if (Object.prototype.hasOwnProperty.call(ik, Dk)) {
            var Sk = ik[Dk];
            "string" == typeof Sk ? kk.setAttribute(Dk, Sk) : null != Sk && (kk[Dk] = Sk)
          } ek++
      }
      for (; ek < arguments.length; ek++) fk(kk, arguments[ek]);
      return kk
    }

    function fk(kk, ek) {
      if ("string" == typeof ek) kk.appendChild(document.createTextNode(ek));
      else if (null == ek);
      else if (null != ek.nodeType) kk.appendChild(ek);
      else {
        if (!Array.isArray(ek)) throw new RangeError("Unsupported child node: " + ek);
        for (var ik = 0; ik < ek.length; ik++) fk(kk, ek[ik])
      }
    }
    ik.d(ek, {
      e: () => Dk
    })
  },
  40886: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    const Dk = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      fk = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      Sk = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class bk {
      constructor(kk, ek) {
        this.rules = [];
        let {
          finish: ik
        } = ek || {};

        function Dk(kk) {
          return /^@/.test(kk) ? [kk] : kk.split(/,\s*/)
        }

        function fk(kk, ek, Sk, bk) {
          let rk = [],
            Pk = /^@(\w+)\b/.exec(kk[0]),
            mk = Pk && "keyframes" == Pk[1];
          if (Pk && null == ek) return Sk.push(kk[0] + ";");
          for (let ik in ek) {
            let bk = ek[ik];
            if (/&/.test(ik)) fk(ik.split(/,\s*/).map((ek => kk.map((kk => ek.replace(/&/, kk))))).reduce(((kk, ek) => kk.concat(ek))), bk, Sk);
            else if (bk && "object" == typeof bk) {
              if (!Pk) throw new RangeError("The value of a property (" + ik + ") should be a primitive value.");
              fk(Dk(ik), bk, rk, mk)
            } else null != bk && rk.push(ik.replace(/_.*/, "").replace(/[A-Z]/g, (kk => "-" + kk.toLowerCase())) + ": " + bk + ";")
          }(rk.length || mk) && Sk.push((!ik || Pk || bk ? kk : kk.map(ik)).join(", ") + " {" + rk.join(" ") + "}")
        }
        for (let Sk in kk) fk(Dk(Sk), kk[Sk], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let kk = Sk[Dk] || 1;
        return Sk[Dk] = kk + 1, "\u037c" + kk.toString(36)
      }
      static mount(kk, ek, ik) {
        let Dk = kk[fk],
          Sk = ik && ik.nonce;
        Dk ? Sk && Dk.setNonce(Sk) : Dk = new Pk(kk, Sk), Dk.mount(Array.isArray(ek) ? ek : [ek], kk)
      }
    }
    let rk = new Map;
    class Pk {
      constructor(kk, ek) {
        let ik = kk.ownerDocument || kk,
          Dk = ik.defaultView;
        if (!kk.head && kk.adoptedStyleSheets && Dk.CSSStyleSheet) {
          let ek = rk.get(ik);
          if (ek) return kk[fk] = ek;
          this.sheet = new Dk.CSSStyleSheet, rk.set(ik, this)
        } else this.styleTag = ik.createElement("style"), ek && this.styleTag.setAttribute("nonce", ek);
        this.modules = [], kk[fk] = this
      }
      mount(kk, ek) {
        let ik = this.sheet,
          Dk = 0,
          fk = 0;
        for (let Sk = 0; Sk < kk.length; Sk++) {
          let ek = kk[Sk],
            bk = this.modules.indexOf(ek);
          if (bk < fk && bk > -1 && (this.modules.splice(bk, 1), fk--, bk = -1), -1 == bk) {
            if (this.modules.splice(fk++, 0, ek), ik)
              for (let kk = 0; kk < ek.rules.length; kk++) ik.insertRule(ek.rules[kk], Dk++)
          } else {
            for (; fk < bk;) Dk += this.modules[fk++].rules.length;
            Dk += ek.rules.length, fk++
          }
        }
        if (ik) ek.adoptedStyleSheets.indexOf(this.sheet) < 0 && (ek.adoptedStyleSheets = [this.sheet, ...ek.adoptedStyleSheets]);
        else {
          let kk = "";
          for (let ek = 0; ek < this.modules.length; ek++) kk += this.modules[ek].getRules() + "\n";
          this.styleTag.textContent = kk;
          let ik = ek.head || ek;
          this.styleTag.parentNode != ik && ik.insertBefore(this.styleTag, ik.firstChild)
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